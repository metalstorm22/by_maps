#!/usr/bin/node --no-warnings
import { htmlPlugin } from '@craftamap/esbuild-plugin-html';
import { ArgumentParser } from 'argparse';
import dotenv from 'dotenv';
import esbuild from 'esbuild';
import { readFileSync } from 'node:fs';
import { z } from 'zod';

const config = (() => {
  const parser = new ArgumentParser()
  parser.add_argument('-p', '--production', { action: 'store_true' });
  parser.add_argument('-w', '--watch', { action: 'store_true' });
  const config = z.object({
    DEVELOPMENT_ACCESS_TOKEN: z.string(),
    PRODUCTION_ACCESS_TOKEN: z.string(),
  }).strict().parse(dotenv.config().parsed);
  const args = z.object({
    production: z.boolean(),
    watch: z.boolean(),
  }).strict().parse(parser.parse_args());
  return {
    ...args,
    accessToken: args.production
      ? config.PRODUCTION_ACCESS_TOKEN
      : config.DEVELOPMENT_ACCESS_TOKEN,
    development: !args.production,
  };
})();

const defineBoolean = (value: boolean): string => value ? 'true' : 'false';
const defineString = (value: string): string => JSON.stringify(value);
const entryPoints = ['main.ts'];
const outdir = 'dist';

const ctx = await esbuild.context({
  bundle: true,
  define: {
    'import.meta.env.mode': defineString(config.development ? 'dev' : 'prod'),
    ACCESS_TOKEN: defineString(config.accessToken),
    IS_DEVELOPMENT: defineBoolean(config.development),
    URL_PATH_BASE: defineString(
      config.development ? '' : 'https://boroughyards.fds.im',
    ),
  },
  entryPoints,
  entryNames: '[name]',
  format: 'iife',
  legalComments: 'none',
  loader: {
    '.glsl': 'text',
    '.png': 'file',
  },
  metafile: true,
  minify: config.production,
  plugins: [
    htmlPlugin({
      files: [{
        entryPoints,
        filename: 'index.html',
        htmlTemplate: readFileSync('index.html', { encoding: 'utf8' }),
      }],
    }),
  ],
  platform: 'browser',
  target: 'es2020',
  treeShaking: config.production,
  outdir,
});

if (config.watch) {
  await ctx.watch();

  const { hosts, port } = await ctx.serve({
    servedir: outdir,
    cors: {
      origin: '*',
    },
  });

  for (const host of hosts) {
    console.log(`http://${host}:${port}/`);
  }
} else {
  await ctx.rebuild();
  await ctx.dispose();
}
