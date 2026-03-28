#!/usr/bin/node --no-warnings
import { htmlPlugin } from '@craftamap/esbuild-plugin-html';
import { ArgumentParser } from 'argparse';
import esbuild from 'esbuild';
import { readFileSync } from 'node:fs';
import { z } from 'zod';

const config = (() => {
  const parser = new ArgumentParser()
  parser.add_argument('-p', '--production', { action: 'store_true' });
  parser.add_argument('-w', '--watch', { action: 'store_true' });
  const args = z.object({
    production: z.boolean(),
    watch: z.boolean(),
  }).strict().parse(parser.parse_args());
  return {
    ...args,
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
    IS_DEVELOPMENT: defineBoolean(config.development),
    URL_PATH_BASE: defineString(
      config.development ? '' : '/wp-content/uploads/2025/05',
    ),
  },
  entryPoints,
  entryNames: '[name]',
  format: 'iife',
  legalComments: 'none',
  loader: {
    '.glsl': 'text',
    '.html': 'empty',
    '.png': 'file',
    '.svg': 'text',
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
  });

  for (const host of hosts) {
    console.log(`http://${host}:${port}/`);
  }



  
} else {
  await ctx.rebuild();
  await ctx.dispose();
}
