import svgPanZoom from "svg-pan-zoom";
import svgUrl from './map-layer-compressed.svg';
import moment from 'moment';
import './style.css';
import './index.html';

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

type SheetData = {
  table: {
    rows: {
      c: [
        {
          v: string,
        },
        {
          v: string,
          f: string,
        },
        {
          v: string,
          f: string,
        }
      ],
    }[],
  }
}


const BOOKING_SHEET_ID = '19OJPsW20-DwhbuRuvcjMKAwSjpumDMQuiX20XonZ6Nc';
const UNIT_LABEL_OVERLAP_PADDING = 6;
const UNIT_LABEL_OFFSET_STEP = 18;
const UNIT_LABEL_MAX_OFFSET_STEPS = 3;
const USE_WEIGHTED_UNIT_LABEL_CENTER = true;
const UNIT_LABEL_CENTER_SAMPLE_STEPS = 12;

type Space = {
  name: string;
  squareFootage: number;
  imageSrcs: string[];
  innerHTML: string;
}

class Spaces {
  public readonly spaces = new Map<string, Space>();

  constructor() {
    const spacesList = document.querySelector('#spaces-list > div');
    if (spacesList === null) throw new Error('Tenants list is null');
    spacesList.childNodes.forEach((t) => {
      if (!(t instanceof HTMLElement)) {
        return;
      }

      const space: Partial<Space> = {};
      space.innerHTML = t.outerHTML;

      const name = t.querySelector('[data-by=name]');
      space.name = name?.textContent;

      const squareFootage = t.querySelector('[data-by=square-footage]');
      space.squareFootage = Number(squareFootage?.textContent);

      if (space.name === undefined
        || space.squareFootage === undefined
      ) {
        return;
      }
      this.spaces.set(space.name, space as Space);
    });
  }
}

class Modal {
  private readonly element: HTMLElement;
  constructor() {
    const element = document.querySelector('#form-modal');
    if (!(element instanceof HTMLElement)) {
      throw new Error('Form Modal not HTMLElement');
    }
    this.element = element;
  }

  show() {
    this.element.style.display = 'flex';
  }
}

class EnquiryGeneralForm {
  private readonly element: HTMLElement;
  constructor() {
    const element = document.querySelector('#enquiry-general-form');
    if (!(element instanceof HTMLElement)) {
      throw new Error('Form Modal not HTMLElement');
    }
    this.element = element;
  }

  show(show = true) {
    this.element.style.display = show ? 'block' : 'none';
  }

  hide() {
    this.show(false);
  }
}

class BookingToast {
  private readonly element: HTMLElement;
  private hideTimeout: number | null = null;

  constructor() {
    let element = document.querySelector('#booking-toast');
    if (!(element instanceof HTMLElement)) {
      element = document.createElement('div');
      element.id = 'booking-toast';
      element.setAttribute('role', 'status');
      element.setAttribute('aria-live', 'polite');
      document.body.appendChild(element);
    }
    this.element = element;
  }

  public show(message: string): void {
    this.element.textContent = message;
    this.element.classList.add('booking-toast-visible');

    if (this.hideTimeout !== null) {
      window.clearTimeout(this.hideTimeout);
    }

    this.hideTimeout = window.setTimeout(() => {
      this.element.classList.remove('booking-toast-visible');
      this.hideTimeout = null;
    }, 2600);
  }
}

class ZoomControls {
  constructor(spz: ReturnType<typeof svgPanZoom>) {
    const parent = document.querySelector('#svg-section');
    if (!(parent instanceof HTMLElement)) {
      console.warn('Zoom controls parent not found');
      return;
    }

    let element = document.querySelector('#map-zoom-controls');

    if (!(element instanceof HTMLElement)) {
      element = document.createElement('div');
      element.id = 'map-zoom-controls';
      element.setAttribute('aria-label', 'Map zoom controls');
      element.innerHTML = [
        '<button type="button" class="map-zoom-button" data-action="zoom-in" aria-label="Zoom in">+</button>',
        '<button type="button" class="map-zoom-button" data-action="zoom-out" aria-label="Zoom out">-</button>',
      ].join('');
      parent.appendChild(element);
    }

    const zoomIn = element.querySelector('[data-action="zoom-in"]');
    const zoomOut = element.querySelector('[data-action="zoom-out"]');

    if (!(zoomIn instanceof HTMLButtonElement) || !(zoomOut instanceof HTMLButtonElement)) {
      console.warn('Zoom controls missing buttons');
      return;
    }

    zoomIn.addEventListener('click', () => {
      spz.zoomIn();
    });

    zoomOut.addEventListener('click', () => {
      spz.zoomOut();
    });
  }
}

class EmbeddedMapGestures {
  private readonly element: HTMLElement;
  private readonly hint: HTMLElement;
  private hintTimeout: number | null = null;
  private lastWheelEventTime = 0;
  private touchStart: { x: number; y: number } | null = null;
  private isTouchDevice = false;

  constructor(
    private readonly spz: ReturnType<typeof svgPanZoom>,
    private readonly svg: SVGSVGElement,
  ) {
    const element = document.querySelector('#svg-section');
    if (!(element instanceof HTMLElement)) {
      throw new Error('SVG section not HTMLElement');
    }
    this.element = element;

    let hint = document.querySelector('#map-gesture-hint');
    if (!(hint instanceof HTMLElement)) {
      hint = document.createElement('div');
      hint.id = 'map-gesture-hint';
      this.element.appendChild(hint);
    }
    this.hint = hint;
    this.hint.textContent = '';

    this.element.addEventListener('wheel', this.handleWheel, { passive: false });
    this.element.addEventListener('touchstart', this.handleTouchStart, { passive: true });
    this.element.addEventListener('touchmove', this.handleTouchMove, { passive: true });
    this.element.addEventListener('touchend', this.handleTouchEnd, { passive: true });
    this.element.addEventListener('touchcancel', this.handleTouchEnd, { passive: true });

    // Disable pan on touch devices — re-enabled only during two-finger gestures
    if ('ontouchstart' in window) {
      this.isTouchDevice = true;
      this.spz.disablePan();
    }
  }

  private readonly handleWheel = (event: WheelEvent) => {
    if (!event.metaKey && !event.ctrlKey) {
      this.showHint(`Hold ${this.getModifierLabel()} while scrolling to zoom the map`);
      return;
    }

    event.preventDefault();

    const inverseScreenCTM = this.svg.getScreenCTM()?.inverse();
    if (inverseScreenCTM === undefined) {
      return;
    }

    const point = this.svg.createSVGPoint();
    point.x = event.clientX;
    point.y = event.clientY;

    let delta = event.deltaY || 1;
    const wheelDeltaEvent = event as WheelEvent & { wheelDelta?: number };
    const timeDelta = Date.now() - this.lastWheelEventTime;
    const divider = 3 + Math.max(0, 30 - timeDelta);
    this.lastWheelEventTime = Date.now();

    if (event.deltaMode === 0 && wheelDeltaEvent.wheelDelta !== undefined) {
      delta = event.deltaY === 0 ? 0 : Math.abs(wheelDeltaEvent.wheelDelta) / event.deltaY;
    }

    delta = -0.3 < delta && delta < 0.3
      ? delta
      : ((delta > 0 ? 1 : -1) * Math.log(Math.abs(delta) + 10)) / divider;

    const relativePoint = point.matrixTransform(inverseScreenCTM);
    const zoom = Math.pow(1 + 0.15, -1 * delta);
    this.spz.zoomAtPointBy(zoom, relativePoint);
  };

  private readonly handleTouchStart = (event: TouchEvent) => {
    if (event.touches.length === 1) {
      const touch = event.touches[0];
      this.touchStart = {
        x: touch.clientX,
        y: touch.clientY,
      };
      return;
    }

    // Two or more fingers — enable panning
    if (this.isTouchDevice && event.touches.length >= 2) {
      this.spz.enablePan();
    }
    this.touchStart = null;
  };

  private readonly handleTouchMove = (event: TouchEvent) => {
    if (event.touches.length !== 1 || this.touchStart === null) {
      return;
    }

    const touch = event.touches[0];
    const dx = touch.clientX - this.touchStart.x;
    const dy = touch.clientY - this.touchStart.y;
    const distance = Math.hypot(dx, dy);

    if (distance < 12) {
      return;
    }

    this.showHint('Use two fingers to move the map');
    this.touchStart = null;
  };

  private readonly handleTouchEnd = (event: TouchEvent) => {
    this.touchStart = null;
    // When all fingers lift, disable pan again
    if (this.isTouchDevice && event.touches.length === 0) {
      this.spz.disablePan();
    }
  };

  private getModifierLabel(): string {
    return /Mac|iPhone|iPad|iPod/.test(navigator.platform) ? '⌘' : 'Ctrl';
  }

  private showHint(message: string): void {
    this.hint.textContent = message;
    this.hint.classList.add('map-gesture-hint-visible');

    if (this.hintTimeout !== null) {
      window.clearTimeout(this.hintTimeout);
    }

    this.hintTimeout = window.setTimeout(() => {
      this.hint.classList.remove('map-gesture-hint-visible');
      this.hintTimeout = null;
    }, 1200);
  }
}

class UnitLabels {
  private readonly container: HTMLElement;
  private readonly labels = new Map<Unit, HTMLDivElement>();
  private readonly centers = new Map<Unit, { x: number; y: number }>();
  private readonly section: HTMLElement;
  private readonly observer: MutationObserver;
  private frame: number | null = null;

  constructor(
    private readonly svg: SVGSVGElement,
    units: Unit[],
  ) {
    const section = document.querySelector('#svg-section');
    if (!(section instanceof HTMLElement)) {
      throw new Error('SVG section not HTMLElement');
    }
    this.section = section;

    let container = document.querySelector('#unit-labels');
    if (!(container instanceof HTMLElement)) {
      container = document.createElement('div');
      container.id = 'unit-labels';
      this.section.appendChild(container);
    }
    this.container = container;

    for (const unit of units) {
      const label = document.createElement('div');
      label.className = 'unit-label-pill';
      label.innerHTML = [
        `<span class="unit-label-pill-text">${unit.title}</span>`,
        '<span class="unit-label-pill-arrow" aria-hidden="true"></span>',
      ].join('');
      this.container.appendChild(label);
      this.labels.set(unit, label);
      this.centers.set(unit, this.computeUnitLabelCenter(unit));
    }

    window.addEventListener('resize', this.scheduleUpdate);
    this.observer = new MutationObserver(() => {
      this.scheduleUpdate();
    });
    this.observer.observe(this.svg, {
      attributes: true,
      subtree: true,
      attributeFilter: ['transform'],
    });
    this.scheduleUpdate();
  }

  public scheduleUpdate = (): void => {
    if (this.frame !== null) {
      cancelAnimationFrame(this.frame);
    }

    this.frame = requestAnimationFrame(() => {
      this.frame = null;
      this.updatePositions();
    });
  };

  public syncState(): void {
    for (const [unit, label] of this.labels) {
      label.classList.toggle('unit-label-selected', unit.isSelected);
      label.classList.toggle('unit-label-unavailable', !unit.isAvailable);
    }
    this.scheduleUpdate();
  }

  private updatePositions(): void {
    const sectionRect = this.section.getBoundingClientRect();
    const occupiedRects: Array<{ left: number; right: number; top: number; bottom: number }> = [];

    for (const [unit, label] of this.labels) {
      const rect = unit.path.getBoundingClientRect();
      const screenCTM = unit.path.getScreenCTM();
      const isVisible = rect.width > 0
        && rect.height > 0
        && rect.bottom >= sectionRect.top
        && rect.top <= sectionRect.bottom
        && rect.right >= sectionRect.left
        && rect.left <= sectionRect.right
        && screenCTM !== null;

      label.classList.toggle('unit-label-hidden', !isVisible);
      if (!isVisible) {
        continue;
      }

      const point = this.svg.createSVGPoint();
      const center = this.centers.get(unit) ?? this.computeUnitLabelCenter(unit);
      point.x = center.x;
      point.y = center.y;
      const screenPoint = point.matrixTransform(screenCTM);
      const centerX = screenPoint.x - sectionRect.left;
      const centerY = screenPoint.y - sectionRect.top;
      const labelWidth = label.offsetWidth;
      const labelHeight = label.offsetHeight;

      const candidateOffsets = this.getCandidateOffsets(unit.isSelected);
      let placedRect: { left: number; right: number; top: number; bottom: number } | null = null;
      let placedX = centerX;
      let placedY = centerY;

      for (const { x: offsetX, y: offsetY } of candidateOffsets) {
        const candidateX = centerX + offsetX;
        const candidateY = centerY + offsetY;
        const candidateRect = {
          left: candidateX - (labelWidth / 2) - UNIT_LABEL_OVERLAP_PADDING,
          right: candidateX + (labelWidth / 2) + UNIT_LABEL_OVERLAP_PADDING,
          top: candidateY - (labelHeight / 2) - UNIT_LABEL_OVERLAP_PADDING,
          bottom: candidateY + (labelHeight / 2) + UNIT_LABEL_OVERLAP_PADDING,
        };

        const overlapsExisting = occupiedRects.some((occupiedRect) => {
          return !(
            candidateRect.right < occupiedRect.left
            || candidateRect.left > occupiedRect.right
            || candidateRect.bottom < occupiedRect.top
            || candidateRect.top > occupiedRect.bottom
          );
        });

        if (!overlapsExisting) {
          placedRect = candidateRect;
          placedX = candidateX;
          placedY = candidateY;
          break;
        }
      }

      if (placedRect === null) {
        const fallbackOffset = candidateOffsets[candidateOffsets.length - 1] ?? { x: 0, y: 0 };
        placedX = centerX + fallbackOffset.x;
        placedY = centerY + fallbackOffset.y;
        placedRect = {
          left: placedX - (labelWidth / 2) - UNIT_LABEL_OVERLAP_PADDING,
          right: placedX + (labelWidth / 2) + UNIT_LABEL_OVERLAP_PADDING,
          top: placedY - (labelHeight / 2) - UNIT_LABEL_OVERLAP_PADDING,
          bottom: placedY + (labelHeight / 2) + UNIT_LABEL_OVERLAP_PADDING,
        };
      }

      label.style.left = `${placedX}px`;
      label.style.top = `${placedY}px`;
      const isOutsideShape = this.isPointOutsideShape(
        unit,
        sectionRect.left + placedX,
        sectionRect.top + placedY,
      );
      this.updateArrow(label, centerX - placedX, centerY - placedY, isOutsideShape);
      occupiedRects.push(placedRect);
    }
  }

  private computeUnitLabelCenter(unit: Unit): { x: number; y: number } {
    const bbox = unit.path.getBBox();
    if (!USE_WEIGHTED_UNIT_LABEL_CENTER || bbox.width === 0 || bbox.height === 0) {
      return {
        x: bbox.x + (bbox.width / 2),
        y: bbox.y + (bbox.height / 2),
      };
    }

    const point = this.svg.createSVGPoint();
    const steps = UNIT_LABEL_CENTER_SAMPLE_STEPS;
    const sampleWidth = bbox.width / steps;
    const sampleHeight = bbox.height / steps;
    const probeX = sampleWidth * 0.45;
    const probeY = sampleHeight * 0.45;
    const probes = [
      [0, 0],
      [probeX, 0],
      [-probeX, 0],
      [0, probeY],
      [0, -probeY],
      [probeX, probeY],
      [probeX, -probeY],
      [-probeX, probeY],
      [-probeX, -probeY],
    ] as const;

    let totalX = 0;
    let totalY = 0;
    let totalWeight = 0;

    for (let yIndex = 0; yIndex < steps; yIndex++) {
      const y = bbox.y + ((yIndex + 0.5) / steps) * bbox.height;

      for (let xIndex = 0; xIndex < steps; xIndex++) {
        const x = bbox.x + ((xIndex + 0.5) / steps) * bbox.width;
        point.x = x;
        point.y = y;

        if (!unit.path.isPointInFill(point)) {
          continue;
        }

        let weight = 0;

        for (const [offsetX, offsetY] of probes) {
          point.x = x + offsetX;
          point.y = y + offsetY;
          if (unit.path.isPointInFill(point)) {
            weight += 1;
          }
        }

        totalX += x * weight;
        totalY += y * weight;
        totalWeight += weight;
      }
    }

    if (totalWeight === 0) {
      return {
        x: bbox.x + (bbox.width / 2),
        y: bbox.y + (bbox.height / 2),
      };
    }

    return {
      x: totalX / totalWeight,
      y: totalY / totalWeight,
    };
  }

  private isPointOutsideShape(unit: Unit, clientX: number, clientY: number): boolean {
    const inverseScreenCTM = unit.path.getScreenCTM()?.inverse();
    if (inverseScreenCTM === undefined) {
      return false;
    }

    const point = this.svg.createSVGPoint();
    point.x = clientX;
    point.y = clientY;

    const localPoint = point.matrixTransform(inverseScreenCTM);
    return !unit.path.isPointInFill(localPoint);
  }

  private updateArrow(label: HTMLDivElement, dx: number, dy: number, isOutsideShape: boolean): void {
    const arrow = label.querySelector('.unit-label-pill-arrow');
    if (!(arrow instanceof HTMLElement)) {
      return;
    }

    const distance = Math.hypot(dx, dy);
    const shouldShowArrow = isOutsideShape && distance > 4;
    label.classList.toggle('unit-label-offset', shouldShowArrow);

    if (!shouldShowArrow) {
      label.style.removeProperty('--unit-label-arrow-angle');
      label.style.removeProperty('--unit-label-arrow-x');
      label.style.removeProperty('--unit-label-arrow-y');
      return;
    }

    const nx = dx / distance;
    const ny = dy / distance;
    const halfWidth = label.offsetWidth / 2;
    const halfHeight = label.offsetHeight / 2;
    const arrowGap = 10;
    const scaleX = Math.abs(nx) > 0.001 ? (halfWidth + arrowGap) / Math.abs(nx) : Number.POSITIVE_INFINITY;
    const scaleY = Math.abs(ny) > 0.001 ? (halfHeight + arrowGap) / Math.abs(ny) : Number.POSITIVE_INFINITY;
    const scale = Math.min(scaleX, scaleY);
    const arrowX = nx * scale;
    const arrowY = ny * scale;
    const angle = `${Math.atan2(ny, nx) - (Math.PI / 2)}rad`;

    label.style.setProperty('--unit-label-arrow-angle', angle);
    label.style.setProperty('--unit-label-arrow-x', `${arrowX}px`);
    label.style.setProperty('--unit-label-arrow-y', `${arrowY}px`);
  }

  private getCandidateOffsets(prioritizeCenter: boolean): Array<{ x: number; y: number }> {
    const offsets: Array<{ x: number; y: number }> = prioritizeCenter ? [{ x: 0, y: 0 }] : [];

    if (!prioritizeCenter) {
      offsets.push({ x: 0, y: 0 });
    }

    for (let step = 1; step <= UNIT_LABEL_MAX_OFFSET_STEPS; step++) {
      const distance = step * UNIT_LABEL_OFFSET_STEP;
      offsets.push(
        { x: 0, y: -distance },
        { x: distance, y: 0 },
        { x: 0, y: distance },
        { x: -distance, y: 0 },
        { x: distance, y: -distance },
        { x: distance, y: distance },
        { x: -distance, y: distance },
        { x: -distance, y: -distance },
      );
    }

    return offsets;
  }
}

class SpaceCard {
  private readonly element: HTMLElement;
  constructor(private readonly ctx: Ctx) {
    const element = document.querySelector('#unit-place-holder');
    if (!(element instanceof HTMLElement)) {
      throw new Error('Space card not HTMLElement');
    }
    this.element = element;
  }

  public setSpace(space: Space): void {
    this.element.innerHTML = space.innerHTML;
    const button = this.element.querySelector('.enquire-now-button');
    button?.addEventListener('click', () => {
      this.ctx.modal.show();
    });

    const closeButton = this.element.querySelector('.booking-map-close');
    closeButton?.addEventListener('click', () => {
      this.hide();
    });
  }

  public show(show: boolean = true) {
    this.element.style.display = show ? 'block' : 'none';
  }

  public hide() {
    this.show(false);
  }
}

class Field {
  private readonly element: HTMLInputElement;
  constructor(selector: string) {
    const element = document.querySelector(selector);
    if (!(element instanceof HTMLInputElement)) {
      throw new Error(`field not HTMLInputElement with selector ${selector}`);
    }
    this.element = element;
  }

  public updateText(text: string): void {
    this.element.value = text;
  }
}

class Form {
  private readonly space: Field;
  private readonly dates: Field;

  constructor() {
    this.space = new Field('#booking-space');
    this.dates = new Field('#booking-dates');
  }

  public updateSpace(unit: Unit) {
    this.space.updateText(unit.title);
  }

  public updateDates(startDate: moment.Moment, endDate: moment.Moment) {
    this.dates.updateText(`${startDate.format('DD/MM/YYYY')} - ${endDate.format('DD/MM/YYYY')} `);
  }
}

let animateRaf: number | null = null;

const animatePanTo = (
  spz: ReturnType<typeof svgPanZoom>,
  startX: number,
  startY: number,
  targetX: number,
  targetY: number,
): void => {
  if (animateRaf !== null) {
    cancelAnimationFrame(animateRaf);
  }

  const durationMs = 220;
  let startTime: number | null = null;

  const render = (timestamp: number) => {
    if (startTime === null) {
      startTime = timestamp;
    }

    const progress = Math.min((timestamp - startTime) / durationMs, 1);
    const easedProgress = 1 - Math.pow(1 - progress, 3);

    spz.pan({
      x: (targetX * easedProgress) + (startX * (1 - easedProgress)),
      y: (targetY * easedProgress) + (startY * (1 - easedProgress)),
    });

    if (progress >= 1) {
      animateRaf = null;
      return;
    }

    animateRaf = requestAnimationFrame(render);
  };

  animateRaf = requestAnimationFrame(render);
};

class Unit {
  public isAvailable = true;
  public isSelected = false;

  constructor(private ctx: Ctx, public readonly path: SVGPathElement, public readonly title: string) {
    const handleSelect = (clientX: number, clientY: number) => {
      const current = this.ctx.spz.getPan();
      const rect = ctx.svgContainer.getBoundingClientRect();
      const width  = ctx.svgContainer.clientWidth;
      const height = ctx.svgContainer.clientHeight;
      const pointerX = clientX - rect.left;
      const pointerY = clientY - rect.top;
      const targetX = current.x + (width / 2) - pointerX;
      const targetY = current.y + (height / 2) - pointerY;

      animatePanTo(this.ctx.spz, current.x, current.y, targetX, targetY);
      ctx.handleUnitPointerDown(this);
    };

    // Tap detection via pointer events — svg-pan-zoom only hooks
    // mouse/touch events, so pointerdown/pointerup are unaffected.
    let tapStart: { x: number; y: number; time: number } | null = null;
    path.addEventListener('pointerdown', (e) => {
      tapStart = { x: e.clientX, y: e.clientY, time: Date.now() };
    });
    path.addEventListener('pointerup', (e) => {
      if (tapStart === null) return;
      const elapsed = Date.now() - tapStart.time;
      const dist = Math.hypot(e.clientX - tapStart.x, e.clientY - tapStart.y);
      tapStart = null;
      if (elapsed < 300 && dist < 15) {
        handleSelect(e.clientX, e.clientY);
      }
    });

    path.addEventListener('pointerover', () => {
      ctx.handleUnitPointerOver(this);
    });
    path.addEventListener('pointerleave', () => {
      ctx.handleUnitPointerLeave(this);
    });
  }

  public highlight(highlight: boolean) {
    this.path.classList.toggle('unit-highlighted', highlight);
  }


  public select(selected: boolean) {
    this.isSelected = selected;
    this.path.classList.toggle('unit-selected', this.isSelected);
  }

  public setIsAvailable(isAvailable: boolean) {
    this.isAvailable = isAvailable;
    this.path.classList.toggle('unit-available', isAvailable);
    this.path.classList.toggle('unit-unavailable', !isAvailable);
  }

}

class Units {
  public readonly units: Unit[] = [];
  constructor(private readonly ctx: Ctx, paths: NodeList) {


    for (const path of paths) {
      if (!(path instanceof SVGPathElement)) {
        continue;
      }
      let title: string | null = null;
      for (const child of path.childNodes) {
        if (child instanceof SVGTitleElement) {
          title = child.textContent;
        }
      }
      if (title !== null) {
        this.units.push(new Unit(ctx, path, title));
      }
    }

  }
}

class DateRange {
  private readonly element: HTMLInputElement;
  private readonly picker: { show: () => void };

  constructor(ctx: Ctx) {
    const drp = $('#date-range-picker');
    // @ts-expect-error
    drp.daterangepicker({
      autoUpdateInput: false,
      autoApply: true,
      parentEl: 'body',
      opens: 'left',
      drops: 'down',
    });
    drp.on('apply.daterangepicker', function(_ev, picker) {
      $(this).val(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY'));
      ctx.handleRangePick(picker.startDate, picker.endDate);
    });

    drp.on('cancel.daterangepicker', function() {
      $(this).val('');
    });

    const el = document.querySelector('#date-range-picker')
    if (!(el instanceof HTMLInputElement)) {
      throw new Error('DRP not input');
    }
    this.element = el;
    const picker = drp.data('daterangepicker');
    if (picker === undefined || picker === null || typeof picker.show !== 'function') {
      throw new Error('DRP picker missing');
    }
    this.picker = picker as { show: () => void };

    const open = (event: Event) => {
      event.preventDefault();
      this.picker.show();
      this.element.focus();
    };

    el.addEventListener('pointerdown', open);
    el.addEventListener('focus', () => {
      this.picker.show();
    });

    const field = el.closest('.booking-control-field');
    if (field instanceof HTMLElement) {
      field.addEventListener('pointerdown', (event) => {
        if (event.target instanceof HTMLLabelElement) {
          open(event);
        }
      });
    }
    el.addEventListener('change', () => {
      if (el.value.trim() === '') {
        ctx.handleRangeClear();
      }
    });
  }

  public reset() {
    this.element.value = '';
  }
}

class SquareFootSelect {
  private element: HTMLSelectElement;

  constructor(private readonly ctx: Ctx) {
    const element = document.querySelector('#square-footage');
    if (!(element instanceof HTMLSelectElement)) {
      throw new Error(`square foot select not HTMLSelectElement}`);
    }
    this.element = element;

    this.element.addEventListener('change', () => {
      const range = this.element.value;
      const ranges = range.split('-');
      let maximum = Infinity;
      const minimum = Number(ranges[0]);
      if (ranges[1] !== undefined) {
        maximum = Number(ranges[1]);
      }
      this.ctx.handleSpaceChange(minimum, maximum);
    });
  }

  public reset() {
    this.element.selectedIndex = 0;
  }

}

class ResetFiltersButton {
  private readonly element: HTMLButtonElement;

  constructor(
    private readonly dateRange: DateRange,
    private readonly squareFootSelect: SquareFootSelect,
    private readonly ctx: Ctx,
  ) {
    let element = document.querySelector('#reset-filters');
    if (!(element instanceof HTMLButtonElement)) {
      const controls = document.querySelector('#booking-controls');
      if (!(controls instanceof HTMLElement)) {
        throw new Error('Booking controls not HTMLElement');
      }

      const action = document.createElement('div');
      action.className = 'booking-control booking-control-action';

      element = document.createElement('button');
      element.id = 'reset-filters';
      element.type = 'button';
      element.setAttribute('aria-label', 'Reset filters');
      element.title = 'Reset filters';
      const icon = document.createElement('span');
      icon.className = 'reset-filters-icon';
      icon.setAttribute('aria-hidden', 'true');
      element.appendChild(icon);
      action.appendChild(element);
      controls.appendChild(action);
    }
    this.element = element;

    this.element.addEventListener('click', () => {
      this.dateRange.reset();
      this.squareFootSelect.reset();
      this.ctx.handleResetFilters();
    });
  }

  public setVisible(visible: boolean) {
    this.element.classList.toggle('reset-filters-visible', visible);
  }
}

type Booking = {
  startDate: moment.Moment;
  endDate: moment.Moment;
}

type BookingData = {
  bookings: Booking[];
  isAvailable: boolean;
}

class ParsedSheet {
  public units = new Map<string, BookingData>;

  constructor(sheet: SheetData) {
    for (const row of sheet.table.rows) {
      const unit = row.c[0].v;
      const format = 'MM/DD/YYYY'
      const startDate = moment(row.c[1].f, format);
      const endDate = moment(row.c[2].f, format);
      let bookingData = this.units.get(unit);
      if (bookingData === undefined) {
        bookingData = {
          bookings: [],
          isAvailable: true,
        };
        this.units.set(unit, bookingData);
      }
      bookingData.bookings.push({ startDate, endDate });
    }
  }

  resetAvailable() {
    for (const [_unit, bookingData] of this.units) {
      bookingData.isAvailable = true;
    }
  }

  updateAvailable(startDate: moment.Moment, endDate: moment.Moment) {
    for (const [_unit, bookingData] of this.units) {
      let isAvailable = true;

      for (const booking of bookingData.bookings) {
        if (
          booking.startDate.isSameOrBefore(endDate)
          && booking.endDate.isSameOrAfter(startDate)
        ) {
          isAvailable = false;
          break;
        }
      }
      bookingData.isAvailable = isAvailable;
    }
  }
}


class Ctx {
  private readonly units: Units;
  private readonly parsedSheet: ParsedSheet;
  private readonly form = new Form();
  private readonly spaces = new Spaces();
  private readonly spaceCard = new SpaceCard(this);
  private readonly unitLabels: UnitLabels;
  private readonly resetFiltersButton: ResetFiltersButton;
  public readonly modal = new Modal();
  private readonly bookingToast = new BookingToast();
  private readonly enquiryGeneralForm = new EnquiryGeneralForm();
  private hasDateFilter = false;
  private hasInvalidPastDateSelection = false;
  private minimumSpace: number = 0;
  private maximumSpace: number = Infinity;

  constructor(public readonly spz: ReturnType<typeof svgPanZoom>, public readonly svgContainer: SVGSVGElement, sheetData: SheetData) {
    this.parsedSheet = new ParsedSheet(sheetData);
    const labelledPaths = document.querySelectorAll('path:has(> title)');
    this.units = new Units(this, labelledPaths);
    this.unitLabels = new UnitLabels(svgContainer as SVGSVGElement, this.units.units);
    const dateRange = new DateRange(this);
    const squareFootSelect = new SquareFootSelect(this);
    this.resetFiltersButton = new ResetFiltersButton(dateRange, squareFootSelect, this);
    this.spaceCard.hide();
    this.unitLabels.syncState();
    this.syncFilterControls();
  }

  public handleUnitPointerDown(unit: Unit) {
    let wasSelected = false;
    for (const u of this.units.units) {
      const selected = u.isAvailable && u === unit && !u.isSelected;
      u.select(selected);
      if (selected) {
        this.form.updateSpace(u);
        const space = this.spaces.spaces.get(u.title);
        if (space === undefined) {
          console.warn(`Space ${u.title} not in space map`);
          this.spaceCard.hide();
        } else {
          this.spaceCard.setSpace(space);
          this.spaceCard.show();
          wasSelected = true;
        }
      }
    }
    if (!wasSelected) {
      this.spaceCard.hide();
      this.enquiryGeneralForm.show();
    } else {
      this.enquiryGeneralForm.hide();
    }
    this.unitLabels.syncState();
  }

  public handleUnitPointerOver(unit: Unit) {
    for (const u of this.units.units) {
      const highlighted = u === unit;
      if (u.isAvailable) {
        u.highlight(highlighted);
      }
    }
  }

  public handleUnitPointerLeave(unit: Unit) {
    unit.highlight(false);
  }

  public handleRangePick(startDate: moment.Moment, endDate: moment.Moment) {
    this.hasDateFilter = true;
    const today = moment().startOf('day');
    const hasInvalidPastDateSelection = startDate.clone().startOf('day').isBefore(today);
    if (hasInvalidPastDateSelection && !this.hasInvalidPastDateSelection) {
      this.bookingToast.show('Historical dates cannot be booked.');
    }
    this.hasInvalidPastDateSelection = hasInvalidPastDateSelection;
    this.parsedSheet.updateAvailable(startDate, endDate);
    this.form.updateDates(startDate, endDate);
    this.update();
  }

  public handleRangeClear() {
    this.hasDateFilter = false;
    this.hasInvalidPastDateSelection = false;
    this.parsedSheet.resetAvailable();
    this.update();
  }

  public update() {
    let hasSelectedAvailableUnit = false;

    for (const u of this.units.units) {
      const parsedUnit = this.parsedSheet.units.get(u.title);
      const isAvailable = !this.hasInvalidPastDateSelection
        && (parsedUnit === undefined || parsedUnit.isAvailable);
      const space = this.spaces.spaces.get(u.title);
      const isInSpace = space === undefined || (
        space.squareFootage >= this.minimumSpace
        && space.squareFootage < this.maximumSpace
      );
      const isUnitAvailable = isAvailable && isInSpace;
      u.setIsAvailable(isUnitAvailable);

      if (!isUnitAvailable && u.isSelected) {
        u.select(false);
      }

      if (isUnitAvailable && u.isSelected) {
        hasSelectedAvailableUnit = true;
      }
    }

    if (!hasSelectedAvailableUnit) {
      this.spaceCard.hide();
      this.enquiryGeneralForm.show();
    }

    this.unitLabels.syncState();
    this.syncFilterControls();
  }

  public handleSpaceChange(minimum: number, maximum: number) {
    this.minimumSpace = minimum;
    this.maximumSpace = maximum;
    this.update();
  }

  public handleResetFilters() {
    this.hasDateFilter = false;
    this.hasInvalidPastDateSelection = false;
    this.minimumSpace = 0;
    this.maximumSpace = Infinity;
    this.parsedSheet.resetAvailable();
    this.update();
  }

  public scheduleLabelUpdate() {
    this.unitLabels.scheduleUpdate();
  }

  private syncFilterControls() {
    this.resetFiltersButton.setVisible(this.hasActiveFilters());
  }

  private hasActiveFilters(): boolean {
    return this.hasDateFilter || this.minimumSpace !== 0 || this.maximumSpace !== Infinity;
  }

}

const main = async () => {

  const url = `https://docs.google.com/spreadsheets/d/${BOOKING_SHEET_ID}/gviz/tq?tqx=out:json`;

  const res = await fetch(url);
  const text = await res.text();
  const json = JSON.parse(text.substring(47).slice(0, -2)) as SheetData;
  console.log(json);

  const svgContainer = document.querySelector('#svg');
  if (svgContainer === null) throw new Error('No SVG container');
  svgContainer.innerHTML = svgUrl;
  const svg = svgContainer.firstChild;

  if (!(svg instanceof SVGSVGElement)) {
    throw new Error('Not SVG');
  }

  let ctx: Ctx | null = null;
  const spz = svgPanZoom(svg, {
    zoomEnabled: true,
    controlIconsEnabled: false,
    fit: true,
    center: true,
    mouseWheelZoomEnabled: false,
    dblClickZoomEnabled: true,
    onPan: () => {
      ctx?.scheduleLabelUpdate();
    },
    onZoom: () => {
      ctx?.scheduleLabelUpdate();
    },
  });

  new ZoomControls(spz);
  new EmbeddedMapGestures(spz, svg);
  ctx = new Ctx(spz, svg, json);

};

document.addEventListener("DOMContentLoaded", (_event) => {
  main();
});
