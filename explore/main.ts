import mapbox from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import popupUrl from './popup.png';


// -----------------------------------------------------------------------------
// - Development Tools                                                         -
// -----------------------------------------------------------------------------

declare const IS_DEVELOPMENT: boolean;

if (IS_DEVELOPMENT) {
  const eventSource = new EventSource('/esbuild');
  let openned = false;

  eventSource.onopen = () => {
    console.log('[LiveReload] Open');

    if (openned) {
      location.reload();
    } else {
      openned = true;
    }
  };

  eventSource.addEventListener('change', (event) => {
    console.log('[LiveReload] Change:', event);
    location.reload();
  });

  eventSource.onerror = (error) => {
    console.log('[LiveReload] Error:', error);
  };
}

// -----------------------------------------------------------------------------

type Place = {
  name: string,
  latitude: number,
  longitude: number,
  thumbnail: string,
  thumbnailSrcset: string,
  link: string,
  category: string,
  categorySlug: string,
  timings: string,
}

const slugs = [
  'offices',
  'food-and-drink',
  'things-to-do',
  'shop',
  'pop-ups',
  'health-and-beauty',
];

const listeners = new Map<string, () => void>();

const EventListener = {
  set(type: string, listener: () => void): void {
    listeners.set(type, listener);
  },

  trigger(type: string): void {
    const listener = listeners.get(type);

    if (listener === undefined) {
      console.warn(`No listener for event type ${JSON.stringify(type)}`);
      return;
    }

    listener();
  },
} as const;

declare global {
  interface Window {
    mapBoxEventListener?: typeof EventListener;
  }
}

window.mapBoxEventListener = EventListener;

const BASE_URL = new URL(document.URL);
BASE_URL.pathname = '';
BASE_URL.hash = '';
BASE_URL.search = '';

declare const URL_PATH_BASE: string;

const makeUrl = (relativePath: string): string => {
  return `${URL_PATH_BASE}/${relativePath}`;
};

const makeIdSequency = (prefix: string): (() => string) => {
  let id = 0;
  return () => `${prefix}-${++id}`;
};

declare const ACCESS_TOKEN: string;

class MapCard {
  private card: HTMLDivElement;
  private image: HTMLImageElement;
  private title: HTMLElement;
  private link: HTMLAnchorElement;
  private category: HTMLElement;
  private timings: HTMLElement;

  constructor() {
    const card = document.querySelector('#map-card');
    if (!(card instanceof HTMLDivElement)) {
      console.log(card);
      throw new Error('Map card not div element');
    }
    this.card = card;

    const image = document.querySelector('#map-card-image');
    if (!(image instanceof HTMLImageElement)) {
      throw new Error('Map image not image element');
    }
    this.image = image;

    const title = document.querySelector('#map-card-title');
    if (!(title instanceof HTMLElement)) {
      throw new Error('Map card not html element');
    }
    this.title = title;

    const link = document.querySelector('#map-card-link');
    if (!(link instanceof HTMLAnchorElement)) {
      throw new Error('Map card not anchor element');
    }
    this.link = link;

    const category = document.querySelector('#map-card-category');
    if (!(category instanceof HTMLElement)) {
      throw new Error('Map category not element');
    }
    this.category = category;

    const timings = document.querySelector('#map-card-timings');
    if (!(timings instanceof HTMLElement)) {
      throw new Error('Map timings not element');
    }
    this.timings = timings;



    card.style.display = 'none';
  }

  update(place: Place) {
    this.card.style.display = 'block';
    this.image.src = place.thumbnail;
    this.image.srcset = '';
    this.title.innerText = place.name;
    this.link.href = place.link;
    this.timings.innerHTML = place.timings;
    this.category.innerText = place.category;
  }

  hide() {
    this.card.style.display = 'none';
  }
}

class CategoryButton {
  public readonly button: HTMLElement;
  private readonly bHandleClick = this.handleClick.bind(this);

  constructor(public readonly categorySlug: string, private readonly cartographer: Cartographer) {
    const button = document.querySelector(`#${categorySlug}`);
    if (!(button instanceof HTMLElement)) {
      throw new Error(`CategoryButton with id ${categorySlug} not an element`);
    }
    this.button = button;
    this.button.addEventListener('click', this.bHandleClick);
  }

  private handleClick() {
    this.cartographer.handleCategoryButtonClick(this);
  }
}

const BOUNDS_RADIUS_METRES = 150;

class Cartographer {
  private card = new MapCard();

  private categoryButtons: Map<string, CategoryButton> = new Map(
    slugs.map((s) => [s, new CategoryButton(s, this)])
  );

  private readonly center = new mapbox.LngLat(-0.092342, 51.506169);

  private readonly zoomBounds = this.center.toBounds(BOUNDS_RADIUS_METRES);

  public readonly map = new mapbox.Map({
    attributionControl: false,
    accessToken: ACCESS_TOKEN,
    cooperativeGestures: true,
    container: 'mapbox',
    dragRotate: false,
    touchPitch: false,
    style: 'mapbox://styles/smartsohouk/cmn3da4ae001a01qw73ig7ojq',
    zoom: 17,
    center: this.center,
    maxBounds: this.center.toBounds(BOUNDS_RADIUS_METRES * 2),
  });

  constructor() {
    this.map.fitBounds(this.zoomBounds);
  }

  public readonly styleLoad: Promise<void> = new Promise<void>((resolve) => {
    this.map.once('style.load', () => { resolve(); });
  });

  private set(configName: string, value: boolean): void {
    this.map.setConfigProperty('basemap', configName, value);
  }

  public set showLandmarkIcons(show: boolean) {
    this.set('showLandmarkIcons', show);
  }

  public set showPedestrainRoads(show: boolean) {
    this.set('showPedestrainRoads', show);
  }

  public set showPlaceLabels(show: boolean) {
    this.set('showPlaceLabels', show);
  }

  public set showPointOfInterestLabels(show: boolean) {
    this.set('showPointOfInterestLabels', show);
  }

  public set showRoadLabels(show: boolean) {
    this.set('showRoadLabels', show);
  }

  public set showTransitLabels(show: boolean) {
    this.set('showTransitLabels', show);
  }

  private readonly nextClipId = makeIdSequency('clip');

  public clip(...polygon: Array<[lng: number, lat: number]>): void {
    const id = this.nextClipId();

    this.map.addSource(id, {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Polygon',
              coordinates: [polygon],
            },
          },
        ],
      }
    });

    this.map.addLayer({
      id,
      type: 'clip',
      source: id,
      layout: {
        'clip-layer-types': ['model'],
        'clip-layer-scope': ['basemap'],
      },
    });
  }

  private readonly nextImageId = makeIdSequency('image');

  private readonly popDebugId = 'popup-debug';

  public addStretchImage(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.map.loadImage(makeUrl(popupUrl), (error, image) => {
        if (error !== null && error !== undefined) {
          reject(error);
          return
        }

        if (image === null || image === undefined) {
          reject(new Error());
          return;
        }

        this.map.addImage(this.popDebugId, image, {
          // The two (blue) columns of pixels that can be stretched horizontally:
          //   - the pixels between x: 25 and x: 55 can be stretched
          //   - the pixels between x: 85 and x: 115 can be stretched.
          stretchX: [
            [25, 55],
            [85, 115]
          ],
          // The one (red) row of pixels that can be stretched vertically:
          //   - the pixels between y: 25 and y: 100 can be stretched
          stretchY: [[25, 100]],
          // This part of the image that can contain text ([x1, y1, x2, y2]):
          content: [25, 25, 115, 100],
          // This is a high-dpi image:
          pixelRatio: 2
        });
        resolve();
      });
    });
  }

  public addImage(relativePath: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.map.loadImage(makeUrl(relativePath), (error, image) => {
        if (error !== null && error !== undefined) {
          reject(error);
          return
        }

        if (image === null || image === undefined) {
          reject(new Error());
          return;
        }

        const id = this.nextImageId();
        this.map.addImage(id, image);
        resolve(id);
      });
    });
  }

  private flyTo(lng: number, lat: number): void {
    this.map.flyTo({
      center: [lng, lat],
      zoom: Math.max(this.map.getZoom(), 17),
      speed: 0.4,
    });
  }

  public handleCategoryButtonClick(categoryButton: CategoryButton) {
    const activeClass = 'map-button-active';

    const isActive = categoryButton.button.classList.contains(activeClass);
    this.map.setFilter(this.markersId, isActive ? null : ['==', ['get', 'categorySlug'], categoryButton.categorySlug]);
    for (const b of this.categoryButtons.values()) {
      b.button.classList.toggle(activeClass, !isActive && b === categoryButton);
    }
    this.card.hide();
  }


  private readonly markersId = 'markers'; 

  public markers(
    markers: Array<{
      iconImage: string;
      position: [lng: number, lat: number];
      text: string;
      thumbnail: string;
      thumbnailSrcset: string;
      link: string;
      category: string;
      categorySlug: string;
      timings: string;
    }>,
  ): void {
    const id = this.markersId;

    this.map.addSource(id, {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: markers.map((marker) => ({
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: marker.position,
          },
          properties: {
            title: marker.text,
            image: this.popDebugId,
            thumbnail: marker.thumbnail,
            thumbnailSrcset: marker.thumbnailSrcset,
            link: marker.link,
            category: marker.category,
            categorySlug: marker.categorySlug,
            timings: marker.timings,
          },
        })),
      },
    });



    this.map.addLayer({
      id,
      type: 'symbol',
      source: id,
      layout: {
        'icon-image': ['get', 'image'],
        'text-field': ['get', 'title'],
        'text-font': ['Rubik', 'DIN Pro Bold', 'Arial Unicode MS Bold'],
        'text-size': 11,
        'text-anchor': 'center',
        'icon-size': 0.8,
        'icon-text-fit': 'both',
        'icon-text-fit-padding': [4, 8, 4, 8],
        'icon-allow-overlap': true,
        'text-allow-overlap': false,

      },
      'paint': {
        'text-color': '#fff',
      },
    });



    for (const { position: [lng, lat], text } of markers) {
      EventListener.set(text, this.flyTo.bind(this, lng, lat));
    }

    this.map.on('click', id, ({ features }) => {
      if (features === undefined || features.length === 0) {
        return;
      }

      console.log(features[0]);

      const feature = features[0];

      const properties = feature.properties;

      if (properties === null) return;

      const { geometry } = feature;

      if (geometry.type !== 'Point') {
        return;
      }

      const { coordinates } = geometry;

      if (coordinates.length < 2) {
        return;
      }

      const [lng, lat] = coordinates;

      this.flyTo(lng, lat);

      const place: Place = {
        name: properties.title as string,
        thumbnail: properties.thumbnail as string,
        thumbnailSrcset: properties.thumbnail as string,
        longitude: lng,
        latitude: lat,
        link: properties.link as string,
        category: properties.category as string,
        categorySlug: properties.categorySlug as string,
        timings: properties.timings as string,
      }
      this.card.update(place);
    });

    this.map.on('click', (e) => {
      const features = this.map.queryRenderedFeatures(e.point, { layers: [id] });
      if (features.length === 0) {
        this.card.hide();
      }
    });
  }

  private readonly nextModelId = makeIdSequency('model')

  public model(
    {
      name,
      center,
    }: {
      name: string,
      center: [lng: number, lat: number],
    }
  ): void {
    const id = this.nextModelId();

    this.map.addSource(id, {
      type: 'geojson',
      data: {
        type: 'Feature',
        properties: {
          'model-uri': makeUrl(name),
        },
        geometry: {
          type: 'Point',
          coordinates: center,
        }
      }
    });

    const scale = 2.5;

    this.map.addLayer({
      id,
      type: 'model',
      slot: 'middle',
      source: id,
      minzoom: 12,
      layout: {
        'model-id': ['get', 'model-uri']
      },
      paint: {
        'model-opacity': 1,
        'model-translation': [0, 4, 0],
        'model-rotation': [0, 0, -41],
        'model-scale': [scale, scale, scale],
        'model-color-mix-intensity': 0,
        'model-cast-shadows': true,
        'model-emissive-strength': 0,
      },
    });
  }

  public logConfigNames(): void {
    console.log(Object.keys(this.map.getConfig('basemap')!!).sort().join('\n'));
  }

  public addExtrusionAnimation(): void {
    const baseZoom = 17;
    const extrudeAt = 17.05;
    this.map.addLayer({
      id: '3d-buildings',
      source: 'composite',
      'source-layer': 'building',
      filter: ['==', 'extrude', 'true'],
      type: 'fill-extrusion',
      minzoom: 0,
      paint: {
        'fill-extrusion-color': '#FED5CC',
        // Use an 'interpolate' expression to add a smooth transition effect top
        // the buildings as the user zooms in.
        'fill-extrusion-height': [
          'interpolate',
          ['linear'],
          ['zoom'],
          baseZoom,
          ['get', 'height'],
          extrudeAt,
          0,
        ],
        'fill-extrusion-base': [
          'interpolate',
          ['linear'],
          ['zoom'],
          baseZoom,
          ['get', 'min_height'],
          extrudeAt,
          0,
        ],
        'fill-extrusion-opacity': 0.6
      }
    });
  }
}

const main = async (): Promise<void> => {
  const c = new Cartographer();

  const loadImages = (async () => {
    const [
      entertainment,
      foodAndDrink,
      hotel,
      shopping,
      wellness,
    ] = await Promise.all([
      c.addImage('entertainment.png'),
      c.addImage('food-and-drink.png'),
      c.addImage('hotel.png'),
      c.addImage('shopping.png'),
      c.addImage('wellness.png'),
    ]);

    return {
      entertainment,
      foodAndDrink,
      hotel,
      shopping,
      wellness,
    } as const;
  })();

  await c.addStretchImage();

  await c.styleLoad;
  c.showLandmarkIcons = false;
  c.showPedestrainRoads = false;
  c.showPlaceLabels = false;
  c.showRoadLabels = false;
  c.showPointOfInterestLabels = false;

  const images = await loadImages;





  const syncMaps = () => {
    const places: Place[] = [];
    const tenantsList = document.querySelector('#tenants-list > div');
    if (tenantsList === null) throw new Error('Tenants list is null');
    tenantsList.childNodes.forEach((t) => {
      let index = 0;

      const place: Partial<Place> = {};
      t.childNodes.forEach((n) => {
        if (n instanceof HTMLImageElement) {
          console.log(n.src);
          place.thumbnail = n.src;
          place.thumbnailSrcset = n.srcset;
          index++;
          return;
        }
        if (n.textContent === null) return;

        const content = n.textContent.trim();
        if (content.length === 0) {
          return;
        }
        switch (index) {
          case 0:
            place.name = content;
            break;
          case 1:
            place.latitude = Number(content);
            break;
          case 2:
            place.longitude = Number(content);
            break;
          case 4:
            place.link = content;
            break;
          case 5:
            place.category = content;
            break;
          case 6:
            place.categorySlug = content;
            break;
          case 7:
            if (!(n instanceof HTMLElement)) {
              throw new Error('Not HTML element');
            }
            place.timings = n.innerHTML;
            break;
          default:
            break;
        }
        index++;
      });
      if (place.name === undefined
        || place.latitude === undefined
        || place.longitude === undefined
        || place.link === undefined
        || place.category === undefined
        || place.categorySlug === undefined
      ) {
        return;
      }
      places.push(place as Place);
    });

    c.markers(places.map((place) => {
      return ({
        iconImage: images.entertainment,
        position: [place.longitude, place.latitude],
        text: place.name,
        thumbnail: place.thumbnail,
        thumbnailSrcset: place.thumbnailSrcset,
        link: place.link,
        category: place.category,
        categorySlug: place.categorySlug,
        timings: place.timings,
      });
    }));
  };

  syncMaps();

};

document.addEventListener('DOMContentLoaded', function() {
  main();
});
