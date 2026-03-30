# Borough Yards Custom Maps

## Explore
To run:
```
cd explore
pnpm install
./esbuild -w
```
Then open `localhost:8000` in your browser.

## Book (Book a Space)
To run locally:
```
cd book
pnpm install
./esbuild -w
```
Then open `localhost:8000` in your browser.

### Deployment

The booking map is deployed to the Webflow site at `borough-yards-b9461d4fc408af0fbc8c77799.webflow.io/book-a-space`.

Static assets are served via jsDelivr CDN using `@latest`, which resolves to the newest git tag:
- **CSS:** `https://cdn.jsdelivr.net/gh/metalstorm22/by_maps@latest/book/dist/main.css`
- **JS:** `https://cdn.jsdelivr.net/gh/metalstorm22/by_maps@latest/book/dist/main.js`

#### Webflow embed structure

**Code embed (map section):**
```html
<style>
  #by-booking-map,
  #by-booking-map * {
    box-sizing: border-box;
  }

  #by-booking-map {
    width: 100%;
    --booking-controls-height-mobile: 116px;
  }

  #by-booking-map .navbar-logo {
    color: rgb(51, 51, 51) !important;
  }

  #by-booking-map #booking-controls {
    display: grid;
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr) auto;
    gap: 20px;
    width: 100%;
    padding: 20px 1%;
    position: relative;
    z-index: 12;
    align-items: end;
  }

  #by-booking-map .booking-control {
    min-width: 0;
    width: 100%;
  }

  #by-booking-map .booking-control input,
  #by-booking-map .booking-control select {
    display: block;
    width: 100%;
    min-width: 0;
    height: 52px;
    padding: 0 14px;
    border: 1px solid rgba(17, 17, 17, 0.16);
    border-radius: 10px;
    background: #fff;
    color: #111;
    font-size: 20px;
    line-height: 1.2;
    margin: 0;
  }

  #by-booking-map .booking-control input::placeholder {
    color: rgba(17, 17, 17, 0.56);
    opacity: 1;
  }

  #by-booking-map .booking-control select {
    appearance: none;
    -webkit-appearance: none;
    padding-right: 42px;
    background-image:
      linear-gradient(45deg, transparent 50%, rgba(17, 17, 17, 0.75) 50%),
      linear-gradient(135deg, rgba(17, 17, 17, 0.75) 50%, transparent 50%);
    background-position:
      calc(100% - 20px) calc(50% - 3px),
      calc(100% - 14px) calc(50% - 3px);
    background-size: 6px 6px, 6px 6px;
    background-repeat: no-repeat;
  }

  #by-booking-map .booking-control-action {
    width: auto;
  }

  #by-booking-map #reset-filters {
    width: 52px;
    height: 52px;
    border: 1px solid rgba(17, 17, 17, 0.14);
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.76);
    color: rgba(17, 17, 17, 0.88);
    padding: 0;
    margin: 0;
    cursor: pointer;
  }

  #by-booking-map #svg-section {
    position: relative;
    width: 100%;
    padding: 0 1%;
    min-height: 80vh;
    overflow: hidden;
  }

  #by-booking-map .svg-container {
    position: relative;
    min-height: 80vh;
  }

  #by-booking-map #svg {
    position: absolute;
    inset: 0;
    width: 100%;
  }

  #by-booking-map #svg svg {
    width: 100%;
    height: 80vh;
    background: #7083F2;
    border-radius: 10px;
  }

  #by-booking-map #unit-place-holder {
    position: absolute;
    top: 20px;
    right: 20px;
    bottom: 20px;
    width: 30vw;
    margin-right: 1%;
    box-shadow: 0 0 20px #000c;
    display: none;
    z-index: 10;
    max-width: calc(100vw - 40px);
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }

  @media (max-width: 991px) {
    #by-booking-map #svg-section,
    #by-booking-map .svg-container {
      min-height: 60vh;
    }

    #by-booking-map #svg svg {
      height: 60vh;
    }

    #by-booking-map #unit-place-holder {
      position: fixed;
      top: auto;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 55vh;
      margin-right: 0;
      border-radius: 16px 16px 0 0;
      box-shadow: 0 -4px 30px rgba(0, 0, 0, 0.2);
      max-width: 100vw;
      z-index: 50;
    }
  }

  @media (max-width: 767px) {
    #by-booking-map #booking-controls {
      grid-template-columns: minmax(0, 1fr) auto;
      gap: 12px;
      padding: 12px 1%;
      align-items: center;
    }

    #by-booking-map #booking-controls .booking-control:first-child {
      grid-column: 1 / -1;
    }

    #by-booking-map .booking-control input,
    #by-booking-map .booking-control select,
    #by-booking-map #reset-filters {
      height: 44px;
      font-size: 16px;
    }

    #by-booking-map #svg-section,
    #by-booking-map .svg-container,
    #by-booking-map #svg svg {
      min-height: calc(100dvh - var(--booking-controls-height-mobile));
      height: calc(100dvh - var(--booking-controls-height-mobile));
    }

    #by-booking-map #unit-place-holder {
      height: 50vh;
    }
  }
</style>

<link href="https://cdn.jsdelivr.net/gh/metalstorm22/by_maps@latest/book/dist/main.css" rel="stylesheet" />
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />

<div id="by-booking-map">
  <div id="booking-controls">
    <div class="booking-control">
      <input id="date-range-picker" type="text" name="daterange" placeholder="Select Date Range" aria-label="Select date range" />
    </div>

    <div class="booking-control">
      <select id="square-footage" aria-label="Minimum space">
        <option selected disabled value="0">Minimum Space</option>
        <option value="0">Any size</option>
        <option value="0-500">Less than 500 sqft</option>
        <option value="500-1000">500 - 1000 sqft</option>
        <option value="1000-3000">1000 - 3000 sqft</option>
        <option value="3000">Greater than 3000 sqft</option>
      </select>
    </div>

    <div class="booking-control booking-control-action">
      <button id="reset-filters" type="button" aria-label="Reset filters" title="Reset filters">↺</button>
    </div>
  </div>

  <div id="svg-section">
    <div class="svg-container">
      <div id="svg"></div>
    </div>
    <div id="unit-place-holder"></div>
  </div>
</div>
```

**Before body tag:**
```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/metalstorm22/by_maps@latest/book/dist/main.js"></script>
```

#### Publishing changes

After pushing code changes:
1. Build: `cd book && ./esbuild`
2. Commit the updated `book/dist/` files
3. Push: `git push`
4. Create a new tag (increment version): `git tag v1.0.1`
5. Push the tag: `git push origin v1.0.1`

jsDelivr's `@latest` automatically picks up the newest tag. No need to change the Webflow URLs.

### Data sources

- **Booking data:** Google Sheets ID `19OJPsW20-DwhbuRuvcjMKAwSjpumDMQuiX20XonZ6Nc`
- **Spaces data:** Webflow CMS `#spaces-list` (unit name, square footage, images). Empty square footage values in the CMS will cause units to appear unavailable on the map.

