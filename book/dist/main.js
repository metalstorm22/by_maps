(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

  // node_modules/.pnpm/svg-pan-zoom@3.6.2/node_modules/svg-pan-zoom/src/uniwheel.js
  var require_uniwheel = __commonJS({
    "node_modules/.pnpm/svg-pan-zoom@3.6.2/node_modules/svg-pan-zoom/src/uniwheel.js"(exports, module) {
      module.exports = (function() {
        var prefix = "", _addEventListener, _removeEventListener, support, fns = [];
        var passiveListenerOption = { passive: true };
        var activeListenerOption = { passive: false };
        if (window.addEventListener) {
          _addEventListener = "addEventListener";
          _removeEventListener = "removeEventListener";
        } else {
          _addEventListener = "attachEvent";
          _removeEventListener = "detachEvent";
          prefix = "on";
        }
        support = "onwheel" in document.createElement("div") ? "wheel" : (
          // Modern browsers support "wheel"
          document.onmousewheel !== void 0 ? "mousewheel" : (
            // Webkit and IE support at least "mousewheel"
            "DOMMouseScroll"
          )
        );
        function createCallback(element, callback) {
          var fn = function(originalEvent) {
            !originalEvent && (originalEvent = window.event);
            var event = {
              // keep a ref to the original event object
              originalEvent,
              target: originalEvent.target || originalEvent.srcElement,
              type: "wheel",
              deltaMode: originalEvent.type == "MozMousePixelScroll" ? 0 : 1,
              deltaX: 0,
              delatZ: 0,
              preventDefault: function() {
                originalEvent.preventDefault ? originalEvent.preventDefault() : originalEvent.returnValue = false;
              }
            };
            if (support == "mousewheel") {
              event.deltaY = -1 / 40 * originalEvent.wheelDelta;
              originalEvent.wheelDeltaX && (event.deltaX = -1 / 40 * originalEvent.wheelDeltaX);
            } else {
              event.deltaY = originalEvent.detail;
            }
            return callback(event);
          };
          fns.push({
            element,
            fn
          });
          return fn;
        }
        function getCallback(element) {
          for (var i = 0; i < fns.length; i++) {
            if (fns[i].element === element) {
              return fns[i].fn;
            }
          }
          return function() {
          };
        }
        function removeCallback(element) {
          for (var i = 0; i < fns.length; i++) {
            if (fns[i].element === element) {
              return fns.splice(i, 1);
            }
          }
        }
        function _addWheelListener(elem, eventName, callback, isPassiveListener) {
          var cb;
          if (support === "wheel") {
            cb = callback;
          } else {
            cb = createCallback(elem, callback);
          }
          elem[_addEventListener](
            prefix + eventName,
            cb,
            isPassiveListener ? passiveListenerOption : activeListenerOption
          );
        }
        function _removeWheelListener(elem, eventName, callback, isPassiveListener) {
          var cb;
          if (support === "wheel") {
            cb = callback;
          } else {
            cb = getCallback(elem);
          }
          elem[_removeEventListener](
            prefix + eventName,
            cb,
            isPassiveListener ? passiveListenerOption : activeListenerOption
          );
          removeCallback(elem);
        }
        function addWheelListener(elem, callback, isPassiveListener) {
          _addWheelListener(elem, support, callback, isPassiveListener);
          if (support == "DOMMouseScroll") {
            _addWheelListener(elem, "MozMousePixelScroll", callback, isPassiveListener);
          }
        }
        function removeWheelListener(elem, callback, isPassiveListener) {
          _removeWheelListener(elem, support, callback, isPassiveListener);
          if (support == "DOMMouseScroll") {
            _removeWheelListener(elem, "MozMousePixelScroll", callback, isPassiveListener);
          }
        }
        return {
          on: addWheelListener,
          off: removeWheelListener
        };
      })();
    }
  });

  // node_modules/.pnpm/svg-pan-zoom@3.6.2/node_modules/svg-pan-zoom/src/utilities.js
  var require_utilities = __commonJS({
    "node_modules/.pnpm/svg-pan-zoom@3.6.2/node_modules/svg-pan-zoom/src/utilities.js"(exports, module) {
      module.exports = {
        /**
         * Extends an object
         *
         * @param  {Object} target object to extend
         * @param  {Object} source object to take properties from
         * @return {Object}        extended object
         */
        extend: function(target, source) {
          target = target || {};
          for (var prop in source) {
            if (this.isObject(source[prop])) {
              target[prop] = this.extend(target[prop], source[prop]);
            } else {
              target[prop] = source[prop];
            }
          }
          return target;
        },
        /**
         * Checks if an object is a DOM element
         *
         * @param  {Object}  o HTML element or String
         * @return {Boolean}   returns true if object is a DOM element
         */
        isElement: function(o) {
          return o instanceof HTMLElement || o instanceof SVGElement || o instanceof SVGSVGElement || //DOM2
          o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string";
        },
        /**
         * Checks if an object is an Object
         *
         * @param  {Object}  o Object
         * @return {Boolean}   returns true if object is an Object
         */
        isObject: function(o) {
          return Object.prototype.toString.call(o) === "[object Object]";
        },
        /**
         * Checks if variable is Number
         *
         * @param  {Integer|Float}  n
         * @return {Boolean}   returns true if variable is Number
         */
        isNumber: function(n) {
          return !isNaN(parseFloat(n)) && isFinite(n);
        },
        /**
         * Search for an SVG element
         *
         * @param  {Object|String} elementOrSelector DOM Element or selector String
         * @return {Object|Null}                   SVG or null
         */
        getSvg: function(elementOrSelector) {
          var element, svg;
          if (!this.isElement(elementOrSelector)) {
            if (typeof elementOrSelector === "string" || elementOrSelector instanceof String) {
              element = document.querySelector(elementOrSelector);
              if (!element) {
                throw new Error(
                  "Provided selector did not find any elements. Selector: " + elementOrSelector
                );
                return null;
              }
            } else {
              throw new Error("Provided selector is not an HTML object nor String");
              return null;
            }
          } else {
            element = elementOrSelector;
          }
          if (element.tagName.toLowerCase() === "svg") {
            svg = element;
          } else {
            if (element.tagName.toLowerCase() === "object") {
              svg = element.contentDocument.documentElement;
            } else {
              if (element.tagName.toLowerCase() === "embed") {
                svg = element.getSVGDocument().documentElement;
              } else {
                if (element.tagName.toLowerCase() === "img") {
                  throw new Error(
                    'Cannot script an SVG in an "img" element. Please use an "object" element or an in-line SVG.'
                  );
                } else {
                  throw new Error("Cannot get SVG.");
                }
                return null;
              }
            }
          }
          return svg;
        },
        /**
         * Attach a given context to a function
         * @param  {Function} fn      Function
         * @param  {Object}   context Context
         * @return {Function}           Function with certain context
         */
        proxy: function(fn, context) {
          return function() {
            return fn.apply(context, arguments);
          };
        },
        /**
         * Returns object type
         * Uses toString that returns [object SVGPoint]
         * And than parses object type from string
         *
         * @param  {Object} o Any object
         * @return {String}   Object type
         */
        getType: function(o) {
          return Object.prototype.toString.apply(o).replace(/^\[object\s/, "").replace(/\]$/, "");
        },
        /**
         * If it is a touch event than add clientX and clientY to event object
         *
         * @param  {Event} evt
         * @param  {SVGSVGElement} svg
         */
        mouseAndTouchNormalize: function(evt, svg) {
          if (evt.clientX === void 0 || evt.clientX === null) {
            evt.clientX = 0;
            evt.clientY = 0;
            if (evt.touches !== void 0 && evt.touches.length) {
              if (evt.touches[0].clientX !== void 0) {
                evt.clientX = evt.touches[0].clientX;
                evt.clientY = evt.touches[0].clientY;
              } else if (evt.touches[0].pageX !== void 0) {
                var rect = svg.getBoundingClientRect();
                evt.clientX = evt.touches[0].pageX - rect.left;
                evt.clientY = evt.touches[0].pageY - rect.top;
              }
            } else if (evt.originalEvent !== void 0) {
              if (evt.originalEvent.clientX !== void 0) {
                evt.clientX = evt.originalEvent.clientX;
                evt.clientY = evt.originalEvent.clientY;
              }
            }
          }
        },
        /**
         * Check if an event is a double click/tap
         * TODO: For touch gestures use a library (hammer.js) that takes in account other events
         * (touchmove and touchend). It should take in account tap duration and traveled distance
         *
         * @param  {Event}  evt
         * @param  {Event}  prevEvt Previous Event
         * @return {Boolean}
         */
        isDblClick: function(evt, prevEvt) {
          if (evt.detail === 2) {
            return true;
          } else if (prevEvt !== void 0 && prevEvt !== null) {
            var timeStampDiff = evt.timeStamp - prevEvt.timeStamp, touchesDistance = Math.sqrt(
              Math.pow(evt.clientX - prevEvt.clientX, 2) + Math.pow(evt.clientY - prevEvt.clientY, 2)
            );
            return timeStampDiff < 250 && touchesDistance < 10;
          }
          return false;
        },
        /**
         * Returns current timestamp as an integer
         *
         * @return {Number}
         */
        now: Date.now || function() {
          return (/* @__PURE__ */ new Date()).getTime();
        },
        // From underscore.
        // Returns a function, that, when invoked, will only be triggered at most once
        // during a given window of time. Normally, the throttled function will run
        // as much as it can, without ever going more than once per `wait` duration;
        // but if you'd like to disable the execution on the leading edge, pass
        // `{leading: false}`. To disable execution on the trailing edge, ditto.
        throttle: function(func, wait, options) {
          var that = this;
          var context, args, result;
          var timeout = null;
          var previous = 0;
          if (!options) {
            options = {};
          }
          var later = function() {
            previous = options.leading === false ? 0 : that.now();
            timeout = null;
            result = func.apply(context, args);
            if (!timeout) {
              context = args = null;
            }
          };
          return function() {
            var now = that.now();
            if (!previous && options.leading === false) {
              previous = now;
            }
            var remaining = wait - (now - previous);
            context = this;
            args = arguments;
            if (remaining <= 0 || remaining > wait) {
              clearTimeout(timeout);
              timeout = null;
              previous = now;
              result = func.apply(context, args);
              if (!timeout) {
                context = args = null;
              }
            } else if (!timeout && options.trailing !== false) {
              timeout = setTimeout(later, remaining);
            }
            return result;
          };
        },
        /**
         * Create a requestAnimationFrame simulation
         *
         * @param  {Number|String} refreshRate
         * @return {Function}
         */
        createRequestAnimationFrame: function(refreshRate) {
          var timeout = null;
          if (refreshRate !== "auto" && refreshRate < 60 && refreshRate > 1) {
            timeout = Math.floor(1e3 / refreshRate);
          }
          if (timeout === null) {
            return window.requestAnimationFrame || requestTimeout(33);
          } else {
            return requestTimeout(timeout);
          }
        }
      };
      function requestTimeout(timeout) {
        return function(callback) {
          window.setTimeout(callback, timeout);
        };
      }
    }
  });

  // node_modules/.pnpm/svg-pan-zoom@3.6.2/node_modules/svg-pan-zoom/src/svg-utilities.js
  var require_svg_utilities = __commonJS({
    "node_modules/.pnpm/svg-pan-zoom@3.6.2/node_modules/svg-pan-zoom/src/svg-utilities.js"(exports, module) {
      var Utils = require_utilities(), _browser = "unknown";
      if (!!document.documentMode) {
        _browser = "ie";
      }
      module.exports = {
        svgNS: "http://www.w3.org/2000/svg",
        xmlNS: "http://www.w3.org/XML/1998/namespace",
        xmlnsNS: "http://www.w3.org/2000/xmlns/",
        xlinkNS: "http://www.w3.org/1999/xlink",
        evNS: "http://www.w3.org/2001/xml-events",
        /**
         * Get svg dimensions: width and height
         *
         * @param  {SVGSVGElement} svg
         * @return {Object}     {width: 0, height: 0}
         */
        getBoundingClientRectNormalized: function(svg) {
          if (svg.clientWidth && svg.clientHeight) {
            return { width: svg.clientWidth, height: svg.clientHeight };
          } else if (!!svg.getBoundingClientRect()) {
            return svg.getBoundingClientRect();
          } else {
            throw new Error("Cannot get BoundingClientRect for SVG.");
          }
        },
        /**
         * Gets g element with class of "viewport" or creates it if it doesn't exist
         *
         * @param  {SVGSVGElement} svg
         * @return {SVGElement}     g (group) element
         */
        getOrCreateViewport: function(svg, selector) {
          var viewport = null;
          if (Utils.isElement(selector)) {
            viewport = selector;
          } else {
            viewport = svg.querySelector(selector);
          }
          if (!viewport) {
            var childNodes = Array.prototype.slice.call(svg.childNodes || svg.children).filter(function(el) {
              return el.nodeName !== "defs" && el.nodeName !== "#text";
            });
            if (childNodes.length === 1 && childNodes[0].nodeName === "g" && childNodes[0].getAttribute("transform") === null) {
              viewport = childNodes[0];
            }
          }
          if (!viewport) {
            var viewportId = "viewport-" + (/* @__PURE__ */ new Date()).toISOString().replace(/\D/g, "");
            viewport = document.createElementNS(this.svgNS, "g");
            viewport.setAttribute("id", viewportId);
            var svgChildren = svg.childNodes || svg.children;
            if (!!svgChildren && svgChildren.length > 0) {
              for (var i = svgChildren.length; i > 0; i--) {
                if (svgChildren[svgChildren.length - i].nodeName !== "defs") {
                  viewport.appendChild(svgChildren[svgChildren.length - i]);
                }
              }
            }
            svg.appendChild(viewport);
          }
          var classNames = [];
          if (viewport.getAttribute("class")) {
            classNames = viewport.getAttribute("class").split(" ");
          }
          if (!~classNames.indexOf("svg-pan-zoom_viewport")) {
            classNames.push("svg-pan-zoom_viewport");
            viewport.setAttribute("class", classNames.join(" "));
          }
          return viewport;
        },
        /**
         * Set SVG attributes
         *
         * @param  {SVGSVGElement} svg
         */
        setupSvgAttributes: function(svg) {
          svg.setAttribute("xmlns", this.svgNS);
          svg.setAttributeNS(this.xmlnsNS, "xmlns:xlink", this.xlinkNS);
          svg.setAttributeNS(this.xmlnsNS, "xmlns:ev", this.evNS);
          if (svg.parentNode !== null) {
            var style = svg.getAttribute("style") || "";
            if (style.toLowerCase().indexOf("overflow") === -1) {
              svg.setAttribute("style", "overflow: hidden; " + style);
            }
          }
        },
        /**
         * How long Internet Explorer takes to finish updating its display (ms).
         */
        internetExplorerRedisplayInterval: 300,
        /**
         * Forces the browser to redisplay all SVG elements that rely on an
         * element defined in a 'defs' section. It works globally, for every
         * available defs element on the page.
         * The throttling is intentionally global.
         *
         * This is only needed for IE. It is as a hack to make markers (and 'use' elements?)
         * visible after pan/zoom when there are multiple SVGs on the page.
         * See bug report: https://connect.microsoft.com/IE/feedback/details/781964/
         * also see svg-pan-zoom issue: https://github.com/bumbu/svg-pan-zoom/issues/62
         */
        refreshDefsGlobal: Utils.throttle(
          function() {
            var allDefs = document.querySelectorAll("defs");
            var allDefsCount = allDefs.length;
            for (var i = 0; i < allDefsCount; i++) {
              var thisDefs = allDefs[i];
              thisDefs.parentNode.insertBefore(thisDefs, thisDefs);
            }
          },
          exports ? exports.internetExplorerRedisplayInterval : null
        ),
        /**
         * Sets the current transform matrix of an element
         *
         * @param {SVGElement} element
         * @param {SVGMatrix} matrix  CTM
         * @param {SVGElement} defs
         */
        setCTM: function(element, matrix, defs) {
          var that = this, s = "matrix(" + matrix.a + "," + matrix.b + "," + matrix.c + "," + matrix.d + "," + matrix.e + "," + matrix.f + ")";
          element.setAttributeNS(null, "transform", s);
          if ("transform" in element.style) {
            element.style.transform = s;
          } else if ("-ms-transform" in element.style) {
            element.style["-ms-transform"] = s;
          } else if ("-webkit-transform" in element.style) {
            element.style["-webkit-transform"] = s;
          }
          if (_browser === "ie" && !!defs) {
            defs.parentNode.insertBefore(defs, defs);
            window.setTimeout(function() {
              that.refreshDefsGlobal();
            }, that.internetExplorerRedisplayInterval);
          }
        },
        /**
         * Instantiate an SVGPoint object with given event coordinates
         *
         * @param {Event} evt
         * @param  {SVGSVGElement} svg
         * @return {SVGPoint}     point
         */
        getEventPoint: function(evt, svg) {
          var point = svg.createSVGPoint();
          Utils.mouseAndTouchNormalize(evt, svg);
          point.x = evt.clientX;
          point.y = evt.clientY;
          return point;
        },
        /**
         * Get SVG center point
         *
         * @param  {SVGSVGElement} svg
         * @return {SVGPoint}
         */
        getSvgCenterPoint: function(svg, width, height) {
          return this.createSVGPoint(svg, width / 2, height / 2);
        },
        /**
         * Create a SVGPoint with given x and y
         *
         * @param  {SVGSVGElement} svg
         * @param  {Number} x
         * @param  {Number} y
         * @return {SVGPoint}
         */
        createSVGPoint: function(svg, x, y) {
          var point = svg.createSVGPoint();
          point.x = x;
          point.y = y;
          return point;
        }
      };
    }
  });

  // node_modules/.pnpm/svg-pan-zoom@3.6.2/node_modules/svg-pan-zoom/src/control-icons.js
  var require_control_icons = __commonJS({
    "node_modules/.pnpm/svg-pan-zoom@3.6.2/node_modules/svg-pan-zoom/src/control-icons.js"(exports, module) {
      var SvgUtils = require_svg_utilities();
      module.exports = {
        enable: function(instance) {
          var defs = instance.svg.querySelector("defs");
          if (!defs) {
            defs = document.createElementNS(SvgUtils.svgNS, "defs");
            instance.svg.appendChild(defs);
          }
          var styleEl = defs.querySelector("style#svg-pan-zoom-controls-styles");
          if (!styleEl) {
            var style = document.createElementNS(SvgUtils.svgNS, "style");
            style.setAttribute("id", "svg-pan-zoom-controls-styles");
            style.setAttribute("type", "text/css");
            style.textContent = ".svg-pan-zoom-control { cursor: pointer; fill: black; fill-opacity: 0.333; } .svg-pan-zoom-control:hover { fill-opacity: 0.8; } .svg-pan-zoom-control-background { fill: white; fill-opacity: 0.5; } .svg-pan-zoom-control-background { fill-opacity: 0.8; }";
            defs.appendChild(style);
          }
          var zoomGroup = document.createElementNS(SvgUtils.svgNS, "g");
          zoomGroup.setAttribute("id", "svg-pan-zoom-controls");
          zoomGroup.setAttribute(
            "transform",
            "translate(" + (instance.width - 70) + " " + (instance.height - 76) + ") scale(0.75)"
          );
          zoomGroup.setAttribute("class", "svg-pan-zoom-control");
          zoomGroup.appendChild(this._createZoomIn(instance));
          zoomGroup.appendChild(this._createZoomReset(instance));
          zoomGroup.appendChild(this._createZoomOut(instance));
          instance.svg.appendChild(zoomGroup);
          instance.controlIcons = zoomGroup;
        },
        _createZoomIn: function(instance) {
          var zoomIn = document.createElementNS(SvgUtils.svgNS, "g");
          zoomIn.setAttribute("id", "svg-pan-zoom-zoom-in");
          zoomIn.setAttribute("transform", "translate(30.5 5) scale(0.015)");
          zoomIn.setAttribute("class", "svg-pan-zoom-control");
          zoomIn.addEventListener(
            "click",
            function() {
              instance.getPublicInstance().zoomIn();
            },
            false
          );
          zoomIn.addEventListener(
            "touchstart",
            function() {
              instance.getPublicInstance().zoomIn();
            },
            false
          );
          var zoomInBackground = document.createElementNS(SvgUtils.svgNS, "rect");
          zoomInBackground.setAttribute("x", "0");
          zoomInBackground.setAttribute("y", "0");
          zoomInBackground.setAttribute("width", "1500");
          zoomInBackground.setAttribute("height", "1400");
          zoomInBackground.setAttribute("class", "svg-pan-zoom-control-background");
          zoomIn.appendChild(zoomInBackground);
          var zoomInShape = document.createElementNS(SvgUtils.svgNS, "path");
          zoomInShape.setAttribute(
            "d",
            "M1280 576v128q0 26 -19 45t-45 19h-320v320q0 26 -19 45t-45 19h-128q-26 0 -45 -19t-19 -45v-320h-320q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45t45 -19h320v-320q0 -26 19 -45t45 -19h128q26 0 45 19t19 45v320h320q26 0 45 19t19 45zM1536 1120v-960 q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5t84.5 -203.5z"
          );
          zoomInShape.setAttribute("class", "svg-pan-zoom-control-element");
          zoomIn.appendChild(zoomInShape);
          return zoomIn;
        },
        _createZoomReset: function(instance) {
          var resetPanZoomControl = document.createElementNS(SvgUtils.svgNS, "g");
          resetPanZoomControl.setAttribute("id", "svg-pan-zoom-reset-pan-zoom");
          resetPanZoomControl.setAttribute("transform", "translate(5 35) scale(0.4)");
          resetPanZoomControl.setAttribute("class", "svg-pan-zoom-control");
          resetPanZoomControl.addEventListener(
            "click",
            function() {
              instance.getPublicInstance().reset();
            },
            false
          );
          resetPanZoomControl.addEventListener(
            "touchstart",
            function() {
              instance.getPublicInstance().reset();
            },
            false
          );
          var resetPanZoomControlBackground = document.createElementNS(
            SvgUtils.svgNS,
            "rect"
          );
          resetPanZoomControlBackground.setAttribute("x", "2");
          resetPanZoomControlBackground.setAttribute("y", "2");
          resetPanZoomControlBackground.setAttribute("width", "182");
          resetPanZoomControlBackground.setAttribute("height", "58");
          resetPanZoomControlBackground.setAttribute(
            "class",
            "svg-pan-zoom-control-background"
          );
          resetPanZoomControl.appendChild(resetPanZoomControlBackground);
          var resetPanZoomControlShape1 = document.createElementNS(
            SvgUtils.svgNS,
            "path"
          );
          resetPanZoomControlShape1.setAttribute(
            "d",
            "M33.051,20.632c-0.742-0.406-1.854-0.609-3.338-0.609h-7.969v9.281h7.769c1.543,0,2.701-0.188,3.473-0.562c1.365-0.656,2.048-1.953,2.048-3.891C35.032,22.757,34.372,21.351,33.051,20.632z"
          );
          resetPanZoomControlShape1.setAttribute(
            "class",
            "svg-pan-zoom-control-element"
          );
          resetPanZoomControl.appendChild(resetPanZoomControlShape1);
          var resetPanZoomControlShape2 = document.createElementNS(
            SvgUtils.svgNS,
            "path"
          );
          resetPanZoomControlShape2.setAttribute(
            "d",
            "M170.231,0.5H15.847C7.102,0.5,0.5,5.708,0.5,11.84v38.861C0.5,56.833,7.102,61.5,15.847,61.5h154.384c8.745,0,15.269-4.667,15.269-10.798V11.84C185.5,5.708,178.976,0.5,170.231,0.5z M42.837,48.569h-7.969c-0.219-0.766-0.375-1.383-0.469-1.852c-0.188-0.969-0.289-1.961-0.305-2.977l-0.047-3.211c-0.03-2.203-0.41-3.672-1.142-4.406c-0.732-0.734-2.103-1.102-4.113-1.102h-7.05v13.547h-7.055V14.022h16.524c2.361,0.047,4.178,0.344,5.45,0.891c1.272,0.547,2.351,1.352,3.234,2.414c0.731,0.875,1.31,1.844,1.737,2.906s0.64,2.273,0.64,3.633c0,1.641-0.414,3.254-1.242,4.84s-2.195,2.707-4.102,3.363c1.594,0.641,2.723,1.551,3.387,2.73s0.996,2.98,0.996,5.402v2.32c0,1.578,0.063,2.648,0.19,3.211c0.19,0.891,0.635,1.547,1.333,1.969V48.569z M75.579,48.569h-26.18V14.022h25.336v6.117H56.454v7.336h16.781v6H56.454v8.883h19.125V48.569z M104.497,46.331c-2.44,2.086-5.887,3.129-10.34,3.129c-4.548,0-8.125-1.027-10.731-3.082s-3.909-4.879-3.909-8.473h6.891c0.224,1.578,0.662,2.758,1.316,3.539c1.196,1.422,3.246,2.133,6.15,2.133c1.739,0,3.151-0.188,4.236-0.562c2.058-0.719,3.087-2.055,3.087-4.008c0-1.141-0.504-2.023-1.512-2.648c-1.008-0.609-2.607-1.148-4.796-1.617l-3.74-0.82c-3.676-0.812-6.201-1.695-7.576-2.648c-2.328-1.594-3.492-4.086-3.492-7.477c0-3.094,1.139-5.664,3.417-7.711s5.623-3.07,10.036-3.07c3.685,0,6.829,0.965,9.431,2.895c2.602,1.93,3.966,4.73,4.093,8.402h-6.938c-0.128-2.078-1.057-3.555-2.787-4.43c-1.154-0.578-2.587-0.867-4.301-0.867c-1.907,0-3.428,0.375-4.565,1.125c-1.138,0.75-1.706,1.797-1.706,3.141c0,1.234,0.561,2.156,1.682,2.766c0.721,0.406,2.25,0.883,4.589,1.43l6.063,1.43c2.657,0.625,4.648,1.461,5.975,2.508c2.059,1.625,3.089,3.977,3.089,7.055C108.157,41.624,106.937,44.245,104.497,46.331z M139.61,48.569h-26.18V14.022h25.336v6.117h-18.281v7.336h16.781v6h-16.781v8.883h19.125V48.569z M170.337,20.14h-10.336v28.43h-7.266V20.14h-10.383v-6.117h27.984V20.14z"
          );
          resetPanZoomControlShape2.setAttribute(
            "class",
            "svg-pan-zoom-control-element"
          );
          resetPanZoomControl.appendChild(resetPanZoomControlShape2);
          return resetPanZoomControl;
        },
        _createZoomOut: function(instance) {
          var zoomOut = document.createElementNS(SvgUtils.svgNS, "g");
          zoomOut.setAttribute("id", "svg-pan-zoom-zoom-out");
          zoomOut.setAttribute("transform", "translate(30.5 70) scale(0.015)");
          zoomOut.setAttribute("class", "svg-pan-zoom-control");
          zoomOut.addEventListener(
            "click",
            function() {
              instance.getPublicInstance().zoomOut();
            },
            false
          );
          zoomOut.addEventListener(
            "touchstart",
            function() {
              instance.getPublicInstance().zoomOut();
            },
            false
          );
          var zoomOutBackground = document.createElementNS(SvgUtils.svgNS, "rect");
          zoomOutBackground.setAttribute("x", "0");
          zoomOutBackground.setAttribute("y", "0");
          zoomOutBackground.setAttribute("width", "1500");
          zoomOutBackground.setAttribute("height", "1400");
          zoomOutBackground.setAttribute("class", "svg-pan-zoom-control-background");
          zoomOut.appendChild(zoomOutBackground);
          var zoomOutShape = document.createElementNS(SvgUtils.svgNS, "path");
          zoomOutShape.setAttribute(
            "d",
            "M1280 576v128q0 26 -19 45t-45 19h-896q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45t45 -19h896q26 0 45 19t19 45zM1536 1120v-960q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5 t84.5 -203.5z"
          );
          zoomOutShape.setAttribute("class", "svg-pan-zoom-control-element");
          zoomOut.appendChild(zoomOutShape);
          return zoomOut;
        },
        disable: function(instance) {
          if (instance.controlIcons) {
            instance.controlIcons.parentNode.removeChild(instance.controlIcons);
            instance.controlIcons = null;
          }
        }
      };
    }
  });

  // node_modules/.pnpm/svg-pan-zoom@3.6.2/node_modules/svg-pan-zoom/src/shadow-viewport.js
  var require_shadow_viewport = __commonJS({
    "node_modules/.pnpm/svg-pan-zoom@3.6.2/node_modules/svg-pan-zoom/src/shadow-viewport.js"(exports, module) {
      var SvgUtils = require_svg_utilities(), Utils = require_utilities();
      var ShadowViewport = function(viewport, options) {
        this.init(viewport, options);
      };
      ShadowViewport.prototype.init = function(viewport, options) {
        this.viewport = viewport;
        this.options = options;
        this.originalState = { zoom: 1, x: 0, y: 0 };
        this.activeState = { zoom: 1, x: 0, y: 0 };
        this.updateCTMCached = Utils.proxy(this.updateCTM, this);
        this.requestAnimationFrame = Utils.createRequestAnimationFrame(
          this.options.refreshRate
        );
        this.viewBox = { x: 0, y: 0, width: 0, height: 0 };
        this.cacheViewBox();
        var newCTM = this.processCTM();
        this.setCTM(newCTM);
        this.updateCTM();
      };
      ShadowViewport.prototype.cacheViewBox = function() {
        var svgViewBox = this.options.svg.getAttribute("viewBox");
        if (svgViewBox) {
          var viewBoxValues = svgViewBox.split(/[\s\,]/).filter(function(v) {
            return v;
          }).map(parseFloat);
          this.viewBox.x = viewBoxValues[0];
          this.viewBox.y = viewBoxValues[1];
          this.viewBox.width = viewBoxValues[2];
          this.viewBox.height = viewBoxValues[3];
          var zoom = Math.min(
            this.options.width / this.viewBox.width,
            this.options.height / this.viewBox.height
          );
          this.activeState.zoom = zoom;
          this.activeState.x = (this.options.width - this.viewBox.width * zoom) / 2;
          this.activeState.y = (this.options.height - this.viewBox.height * zoom) / 2;
          this.updateCTMOnNextFrame();
          this.options.svg.removeAttribute("viewBox");
        } else {
          this.simpleViewBoxCache();
        }
      };
      ShadowViewport.prototype.simpleViewBoxCache = function() {
        var bBox = this.viewport.getBBox();
        this.viewBox.x = bBox.x;
        this.viewBox.y = bBox.y;
        this.viewBox.width = bBox.width;
        this.viewBox.height = bBox.height;
      };
      ShadowViewport.prototype.getViewBox = function() {
        return Utils.extend({}, this.viewBox);
      };
      ShadowViewport.prototype.processCTM = function() {
        var newCTM = this.getCTM();
        if (this.options.fit || this.options.contain) {
          var newScale;
          if (this.options.fit) {
            newScale = Math.min(
              this.options.width / this.viewBox.width,
              this.options.height / this.viewBox.height
            );
          } else {
            newScale = Math.max(
              this.options.width / this.viewBox.width,
              this.options.height / this.viewBox.height
            );
          }
          newCTM.a = newScale;
          newCTM.d = newScale;
          newCTM.e = -this.viewBox.x * newScale;
          newCTM.f = -this.viewBox.y * newScale;
        }
        if (this.options.center) {
          var offsetX = (this.options.width - (this.viewBox.width + this.viewBox.x * 2) * newCTM.a) * 0.5, offsetY = (this.options.height - (this.viewBox.height + this.viewBox.y * 2) * newCTM.a) * 0.5;
          newCTM.e = offsetX;
          newCTM.f = offsetY;
        }
        this.originalState.zoom = newCTM.a;
        this.originalState.x = newCTM.e;
        this.originalState.y = newCTM.f;
        return newCTM;
      };
      ShadowViewport.prototype.getOriginalState = function() {
        return Utils.extend({}, this.originalState);
      };
      ShadowViewport.prototype.getState = function() {
        return Utils.extend({}, this.activeState);
      };
      ShadowViewport.prototype.getZoom = function() {
        return this.activeState.zoom;
      };
      ShadowViewport.prototype.getRelativeZoom = function() {
        return this.activeState.zoom / this.originalState.zoom;
      };
      ShadowViewport.prototype.computeRelativeZoom = function(scale) {
        return scale / this.originalState.zoom;
      };
      ShadowViewport.prototype.getPan = function() {
        return { x: this.activeState.x, y: this.activeState.y };
      };
      ShadowViewport.prototype.getCTM = function() {
        var safeCTM = this.options.svg.createSVGMatrix();
        safeCTM.a = this.activeState.zoom;
        safeCTM.b = 0;
        safeCTM.c = 0;
        safeCTM.d = this.activeState.zoom;
        safeCTM.e = this.activeState.x;
        safeCTM.f = this.activeState.y;
        return safeCTM;
      };
      ShadowViewport.prototype.setCTM = function(newCTM) {
        var willZoom = this.isZoomDifferent(newCTM), willPan = this.isPanDifferent(newCTM);
        if (willZoom || willPan) {
          if (willZoom) {
            if (this.options.beforeZoom(
              this.getRelativeZoom(),
              this.computeRelativeZoom(newCTM.a)
            ) === false) {
              newCTM.a = newCTM.d = this.activeState.zoom;
              willZoom = false;
            } else {
              this.updateCache(newCTM);
              this.options.onZoom(this.getRelativeZoom());
            }
          }
          if (willPan) {
            var preventPan = this.options.beforePan(this.getPan(), {
              x: newCTM.e,
              y: newCTM.f
            }), preventPanX = false, preventPanY = false;
            if (preventPan === false) {
              newCTM.e = this.getPan().x;
              newCTM.f = this.getPan().y;
              preventPanX = preventPanY = true;
            } else if (Utils.isObject(preventPan)) {
              if (preventPan.x === false) {
                newCTM.e = this.getPan().x;
                preventPanX = true;
              } else if (Utils.isNumber(preventPan.x)) {
                newCTM.e = preventPan.x;
              }
              if (preventPan.y === false) {
                newCTM.f = this.getPan().y;
                preventPanY = true;
              } else if (Utils.isNumber(preventPan.y)) {
                newCTM.f = preventPan.y;
              }
            }
            if (preventPanX && preventPanY || !this.isPanDifferent(newCTM)) {
              willPan = false;
            } else {
              this.updateCache(newCTM);
              this.options.onPan(this.getPan());
            }
          }
          if (willZoom || willPan) {
            this.updateCTMOnNextFrame();
          }
        }
      };
      ShadowViewport.prototype.isZoomDifferent = function(newCTM) {
        return this.activeState.zoom !== newCTM.a;
      };
      ShadowViewport.prototype.isPanDifferent = function(newCTM) {
        return this.activeState.x !== newCTM.e || this.activeState.y !== newCTM.f;
      };
      ShadowViewport.prototype.updateCache = function(newCTM) {
        this.activeState.zoom = newCTM.a;
        this.activeState.x = newCTM.e;
        this.activeState.y = newCTM.f;
      };
      ShadowViewport.prototype.pendingUpdate = false;
      ShadowViewport.prototype.updateCTMOnNextFrame = function() {
        if (!this.pendingUpdate) {
          this.pendingUpdate = true;
          this.requestAnimationFrame.call(window, this.updateCTMCached);
        }
      };
      ShadowViewport.prototype.updateCTM = function() {
        var ctm = this.getCTM();
        SvgUtils.setCTM(this.viewport, ctm, this.defs);
        this.pendingUpdate = false;
        if (this.options.onUpdatedCTM) {
          this.options.onUpdatedCTM(ctm);
        }
      };
      module.exports = function(viewport, options) {
        return new ShadowViewport(viewport, options);
      };
    }
  });

  // node_modules/.pnpm/svg-pan-zoom@3.6.2/node_modules/svg-pan-zoom/src/svg-pan-zoom.js
  var require_svg_pan_zoom = __commonJS({
    "node_modules/.pnpm/svg-pan-zoom@3.6.2/node_modules/svg-pan-zoom/src/svg-pan-zoom.js"(exports, module) {
      var Wheel = require_uniwheel(), ControlIcons = require_control_icons(), Utils = require_utilities(), SvgUtils = require_svg_utilities(), ShadowViewport = require_shadow_viewport();
      var SvgPanZoom = function(svg, options) {
        this.init(svg, options);
      };
      var optionsDefaults = {
        viewportSelector: ".svg-pan-zoom_viewport",
        // Viewport selector. Can be querySelector string or SVGElement
        panEnabled: true,
        // enable or disable panning (default enabled)
        controlIconsEnabled: false,
        // insert icons to give user an option in addition to mouse events to control pan/zoom (default disabled)
        zoomEnabled: true,
        // enable or disable zooming (default enabled)
        dblClickZoomEnabled: true,
        // enable or disable zooming by double clicking (default enabled)
        mouseWheelZoomEnabled: true,
        // enable or disable zooming by mouse wheel (default enabled)
        preventMouseEventsDefault: true,
        // enable or disable preventDefault for mouse events
        zoomScaleSensitivity: 0.1,
        // Zoom sensitivity
        minZoom: 0.5,
        // Minimum Zoom level
        maxZoom: 10,
        // Maximum Zoom level
        fit: true,
        // enable or disable viewport fit in SVG (default true)
        contain: false,
        // enable or disable viewport contain the svg (default false)
        center: true,
        // enable or disable viewport centering in SVG (default true)
        refreshRate: "auto",
        // Maximum number of frames per second (altering SVG's viewport)
        beforeZoom: null,
        onZoom: null,
        beforePan: null,
        onPan: null,
        customEventsHandler: null,
        eventsListenerElement: null,
        onUpdatedCTM: null
      };
      var passiveListenerOption = { passive: true };
      SvgPanZoom.prototype.init = function(svg, options) {
        var that = this;
        this.svg = svg;
        this.defs = svg.querySelector("defs");
        SvgUtils.setupSvgAttributes(this.svg);
        this.options = Utils.extend(Utils.extend({}, optionsDefaults), options);
        this.state = "none";
        var boundingClientRectNormalized = SvgUtils.getBoundingClientRectNormalized(
          svg
        );
        this.width = boundingClientRectNormalized.width;
        this.height = boundingClientRectNormalized.height;
        this.viewport = ShadowViewport(
          SvgUtils.getOrCreateViewport(this.svg, this.options.viewportSelector),
          {
            svg: this.svg,
            width: this.width,
            height: this.height,
            fit: this.options.fit,
            contain: this.options.contain,
            center: this.options.center,
            refreshRate: this.options.refreshRate,
            // Put callbacks into functions as they can change through time
            beforeZoom: function(oldScale, newScale) {
              if (that.viewport && that.options.beforeZoom) {
                return that.options.beforeZoom(oldScale, newScale);
              }
            },
            onZoom: function(scale) {
              if (that.viewport && that.options.onZoom) {
                return that.options.onZoom(scale);
              }
            },
            beforePan: function(oldPoint, newPoint) {
              if (that.viewport && that.options.beforePan) {
                return that.options.beforePan(oldPoint, newPoint);
              }
            },
            onPan: function(point) {
              if (that.viewport && that.options.onPan) {
                return that.options.onPan(point);
              }
            },
            onUpdatedCTM: function(ctm) {
              if (that.viewport && that.options.onUpdatedCTM) {
                return that.options.onUpdatedCTM(ctm);
              }
            }
          }
        );
        var publicInstance = this.getPublicInstance();
        publicInstance.setBeforeZoom(this.options.beforeZoom);
        publicInstance.setOnZoom(this.options.onZoom);
        publicInstance.setBeforePan(this.options.beforePan);
        publicInstance.setOnPan(this.options.onPan);
        publicInstance.setOnUpdatedCTM(this.options.onUpdatedCTM);
        if (this.options.controlIconsEnabled) {
          ControlIcons.enable(this);
        }
        this.lastMouseWheelEventTime = Date.now();
        this.setupHandlers();
      };
      SvgPanZoom.prototype.setupHandlers = function() {
        var that = this, prevEvt = null;
        this.eventListeners = {
          // Mouse down group
          mousedown: function(evt) {
            var result = that.handleMouseDown(evt, prevEvt);
            prevEvt = evt;
            return result;
          },
          touchstart: function(evt) {
            var result = that.handleMouseDown(evt, prevEvt);
            prevEvt = evt;
            return result;
          },
          // Mouse up group
          mouseup: function(evt) {
            return that.handleMouseUp(evt);
          },
          touchend: function(evt) {
            return that.handleMouseUp(evt);
          },
          // Mouse move group
          mousemove: function(evt) {
            return that.handleMouseMove(evt);
          },
          touchmove: function(evt) {
            return that.handleMouseMove(evt);
          },
          // Mouse leave group
          mouseleave: function(evt) {
            return that.handleMouseUp(evt);
          },
          touchleave: function(evt) {
            return that.handleMouseUp(evt);
          },
          touchcancel: function(evt) {
            return that.handleMouseUp(evt);
          }
        };
        if (this.options.customEventsHandler != null) {
          this.options.customEventsHandler.init({
            svgElement: this.svg,
            eventsListenerElement: this.options.eventsListenerElement,
            instance: this.getPublicInstance()
          });
          var haltEventListeners = this.options.customEventsHandler.haltEventListeners;
          if (haltEventListeners && haltEventListeners.length) {
            for (var i = haltEventListeners.length - 1; i >= 0; i--) {
              if (this.eventListeners.hasOwnProperty(haltEventListeners[i])) {
                delete this.eventListeners[haltEventListeners[i]];
              }
            }
          }
        }
        for (var event in this.eventListeners) {
          (this.options.eventsListenerElement || this.svg).addEventListener(
            event,
            this.eventListeners[event],
            !this.options.preventMouseEventsDefault ? passiveListenerOption : false
          );
        }
        if (this.options.mouseWheelZoomEnabled) {
          this.options.mouseWheelZoomEnabled = false;
          this.enableMouseWheelZoom();
        }
      };
      SvgPanZoom.prototype.enableMouseWheelZoom = function() {
        if (!this.options.mouseWheelZoomEnabled) {
          var that = this;
          this.wheelListener = function(evt) {
            return that.handleMouseWheel(evt);
          };
          var isPassiveListener = !this.options.preventMouseEventsDefault;
          Wheel.on(
            this.options.eventsListenerElement || this.svg,
            this.wheelListener,
            isPassiveListener
          );
          this.options.mouseWheelZoomEnabled = true;
        }
      };
      SvgPanZoom.prototype.disableMouseWheelZoom = function() {
        if (this.options.mouseWheelZoomEnabled) {
          var isPassiveListener = !this.options.preventMouseEventsDefault;
          Wheel.off(
            this.options.eventsListenerElement || this.svg,
            this.wheelListener,
            isPassiveListener
          );
          this.options.mouseWheelZoomEnabled = false;
        }
      };
      SvgPanZoom.prototype.handleMouseWheel = function(evt) {
        if (!this.options.zoomEnabled || this.state !== "none") {
          return;
        }
        if (this.options.preventMouseEventsDefault) {
          if (evt.preventDefault) {
            evt.preventDefault();
          } else {
            evt.returnValue = false;
          }
        }
        var delta = evt.deltaY || 1, timeDelta = Date.now() - this.lastMouseWheelEventTime, divider = 3 + Math.max(0, 30 - timeDelta);
        this.lastMouseWheelEventTime = Date.now();
        if ("deltaMode" in evt && evt.deltaMode === 0 && evt.wheelDelta) {
          delta = evt.deltaY === 0 ? 0 : Math.abs(evt.wheelDelta) / evt.deltaY;
        }
        delta = -0.3 < delta && delta < 0.3 ? delta : (delta > 0 ? 1 : -1) * Math.log(Math.abs(delta) + 10) / divider;
        var inversedScreenCTM = this.svg.getScreenCTM().inverse(), relativeMousePoint = SvgUtils.getEventPoint(evt, this.svg).matrixTransform(
          inversedScreenCTM
        ), zoom = Math.pow(1 + this.options.zoomScaleSensitivity, -1 * delta);
        this.zoomAtPoint(zoom, relativeMousePoint);
      };
      SvgPanZoom.prototype.zoomAtPoint = function(zoomScale, point, zoomAbsolute) {
        var originalState = this.viewport.getOriginalState();
        if (!zoomAbsolute) {
          if (this.getZoom() * zoomScale < this.options.minZoom * originalState.zoom) {
            zoomScale = this.options.minZoom * originalState.zoom / this.getZoom();
          } else if (this.getZoom() * zoomScale > this.options.maxZoom * originalState.zoom) {
            zoomScale = this.options.maxZoom * originalState.zoom / this.getZoom();
          }
        } else {
          zoomScale = Math.max(
            this.options.minZoom * originalState.zoom,
            Math.min(this.options.maxZoom * originalState.zoom, zoomScale)
          );
          zoomScale = zoomScale / this.getZoom();
        }
        var oldCTM = this.viewport.getCTM(), relativePoint = point.matrixTransform(oldCTM.inverse()), modifier = this.svg.createSVGMatrix().translate(relativePoint.x, relativePoint.y).scale(zoomScale).translate(-relativePoint.x, -relativePoint.y), newCTM = oldCTM.multiply(modifier);
        if (newCTM.a !== oldCTM.a) {
          this.viewport.setCTM(newCTM);
        }
      };
      SvgPanZoom.prototype.zoom = function(scale, absolute) {
        this.zoomAtPoint(
          scale,
          SvgUtils.getSvgCenterPoint(this.svg, this.width, this.height),
          absolute
        );
      };
      SvgPanZoom.prototype.publicZoom = function(scale, absolute) {
        if (absolute) {
          scale = this.computeFromRelativeZoom(scale);
        }
        this.zoom(scale, absolute);
      };
      SvgPanZoom.prototype.publicZoomAtPoint = function(scale, point, absolute) {
        if (absolute) {
          scale = this.computeFromRelativeZoom(scale);
        }
        if (Utils.getType(point) !== "SVGPoint") {
          if ("x" in point && "y" in point) {
            point = SvgUtils.createSVGPoint(this.svg, point.x, point.y);
          } else {
            throw new Error("Given point is invalid");
          }
        }
        this.zoomAtPoint(scale, point, absolute);
      };
      SvgPanZoom.prototype.getZoom = function() {
        return this.viewport.getZoom();
      };
      SvgPanZoom.prototype.getRelativeZoom = function() {
        return this.viewport.getRelativeZoom();
      };
      SvgPanZoom.prototype.computeFromRelativeZoom = function(zoom) {
        return zoom * this.viewport.getOriginalState().zoom;
      };
      SvgPanZoom.prototype.resetZoom = function() {
        var originalState = this.viewport.getOriginalState();
        this.zoom(originalState.zoom, true);
      };
      SvgPanZoom.prototype.resetPan = function() {
        this.pan(this.viewport.getOriginalState());
      };
      SvgPanZoom.prototype.reset = function() {
        this.resetZoom();
        this.resetPan();
      };
      SvgPanZoom.prototype.handleDblClick = function(evt) {
        if (this.options.preventMouseEventsDefault) {
          if (evt.preventDefault) {
            evt.preventDefault();
          } else {
            evt.returnValue = false;
          }
        }
        if (this.options.controlIconsEnabled) {
          var targetClass = evt.target.getAttribute("class") || "";
          if (targetClass.indexOf("svg-pan-zoom-control") > -1) {
            return false;
          }
        }
        var zoomFactor;
        if (evt.shiftKey) {
          zoomFactor = 1 / ((1 + this.options.zoomScaleSensitivity) * 2);
        } else {
          zoomFactor = (1 + this.options.zoomScaleSensitivity) * 2;
        }
        var point = SvgUtils.getEventPoint(evt, this.svg).matrixTransform(
          this.svg.getScreenCTM().inverse()
        );
        this.zoomAtPoint(zoomFactor, point);
      };
      SvgPanZoom.prototype.handleMouseDown = function(evt, prevEvt) {
        if (this.options.preventMouseEventsDefault) {
          if (evt.preventDefault) {
            evt.preventDefault();
          } else {
            evt.returnValue = false;
          }
        }
        Utils.mouseAndTouchNormalize(evt, this.svg);
        if (this.options.dblClickZoomEnabled && Utils.isDblClick(evt, prevEvt)) {
          this.handleDblClick(evt);
        } else {
          this.state = "pan";
          this.firstEventCTM = this.viewport.getCTM();
          this.stateOrigin = SvgUtils.getEventPoint(evt, this.svg).matrixTransform(
            this.firstEventCTM.inverse()
          );
        }
      };
      SvgPanZoom.prototype.handleMouseMove = function(evt) {
        if (this.options.preventMouseEventsDefault) {
          if (evt.preventDefault) {
            evt.preventDefault();
          } else {
            evt.returnValue = false;
          }
        }
        if (this.state === "pan" && this.options.panEnabled) {
          var point = SvgUtils.getEventPoint(evt, this.svg).matrixTransform(
            this.firstEventCTM.inverse()
          ), viewportCTM = this.firstEventCTM.translate(
            point.x - this.stateOrigin.x,
            point.y - this.stateOrigin.y
          );
          this.viewport.setCTM(viewportCTM);
        }
      };
      SvgPanZoom.prototype.handleMouseUp = function(evt) {
        if (this.options.preventMouseEventsDefault) {
          if (evt.preventDefault) {
            evt.preventDefault();
          } else {
            evt.returnValue = false;
          }
        }
        if (this.state === "pan") {
          this.state = "none";
        }
      };
      SvgPanZoom.prototype.fit = function() {
        var viewBox = this.viewport.getViewBox(), newScale = Math.min(
          this.width / viewBox.width,
          this.height / viewBox.height
        );
        this.zoom(newScale, true);
      };
      SvgPanZoom.prototype.contain = function() {
        var viewBox = this.viewport.getViewBox(), newScale = Math.max(
          this.width / viewBox.width,
          this.height / viewBox.height
        );
        this.zoom(newScale, true);
      };
      SvgPanZoom.prototype.center = function() {
        var viewBox = this.viewport.getViewBox(), offsetX = (this.width - (viewBox.width + viewBox.x * 2) * this.getZoom()) * 0.5, offsetY = (this.height - (viewBox.height + viewBox.y * 2) * this.getZoom()) * 0.5;
        this.getPublicInstance().pan({ x: offsetX, y: offsetY });
      };
      SvgPanZoom.prototype.updateBBox = function() {
        this.viewport.simpleViewBoxCache();
      };
      SvgPanZoom.prototype.pan = function(point) {
        var viewportCTM = this.viewport.getCTM();
        viewportCTM.e = point.x;
        viewportCTM.f = point.y;
        this.viewport.setCTM(viewportCTM);
      };
      SvgPanZoom.prototype.panBy = function(point) {
        var viewportCTM = this.viewport.getCTM();
        viewportCTM.e += point.x;
        viewportCTM.f += point.y;
        this.viewport.setCTM(viewportCTM);
      };
      SvgPanZoom.prototype.getPan = function() {
        var state = this.viewport.getState();
        return { x: state.x, y: state.y };
      };
      SvgPanZoom.prototype.resize = function() {
        var boundingClientRectNormalized = SvgUtils.getBoundingClientRectNormalized(
          this.svg
        );
        this.width = boundingClientRectNormalized.width;
        this.height = boundingClientRectNormalized.height;
        var viewport = this.viewport;
        viewport.options.width = this.width;
        viewport.options.height = this.height;
        viewport.processCTM();
        if (this.options.controlIconsEnabled) {
          this.getPublicInstance().disableControlIcons();
          this.getPublicInstance().enableControlIcons();
        }
      };
      SvgPanZoom.prototype.destroy = function() {
        var that = this;
        this.beforeZoom = null;
        this.onZoom = null;
        this.beforePan = null;
        this.onPan = null;
        this.onUpdatedCTM = null;
        if (this.options.customEventsHandler != null) {
          this.options.customEventsHandler.destroy({
            svgElement: this.svg,
            eventsListenerElement: this.options.eventsListenerElement,
            instance: this.getPublicInstance()
          });
        }
        for (var event in this.eventListeners) {
          (this.options.eventsListenerElement || this.svg).removeEventListener(
            event,
            this.eventListeners[event],
            !this.options.preventMouseEventsDefault ? passiveListenerOption : false
          );
        }
        this.disableMouseWheelZoom();
        this.getPublicInstance().disableControlIcons();
        this.reset();
        instancesStore = instancesStore.filter(function(instance) {
          return instance.svg !== that.svg;
        });
        delete this.options;
        delete this.viewport;
        delete this.publicInstance;
        delete this.pi;
        this.getPublicInstance = function() {
          return null;
        };
      };
      SvgPanZoom.prototype.getPublicInstance = function() {
        var that = this;
        if (!this.publicInstance) {
          this.publicInstance = this.pi = {
            // Pan
            enablePan: function() {
              that.options.panEnabled = true;
              return that.pi;
            },
            disablePan: function() {
              that.options.panEnabled = false;
              return that.pi;
            },
            isPanEnabled: function() {
              return !!that.options.panEnabled;
            },
            pan: function(point) {
              that.pan(point);
              return that.pi;
            },
            panBy: function(point) {
              that.panBy(point);
              return that.pi;
            },
            getPan: function() {
              return that.getPan();
            },
            // Pan event
            setBeforePan: function(fn) {
              that.options.beforePan = fn === null ? null : Utils.proxy(fn, that.publicInstance);
              return that.pi;
            },
            setOnPan: function(fn) {
              that.options.onPan = fn === null ? null : Utils.proxy(fn, that.publicInstance);
              return that.pi;
            },
            // Zoom and Control Icons
            enableZoom: function() {
              that.options.zoomEnabled = true;
              return that.pi;
            },
            disableZoom: function() {
              that.options.zoomEnabled = false;
              return that.pi;
            },
            isZoomEnabled: function() {
              return !!that.options.zoomEnabled;
            },
            enableControlIcons: function() {
              if (!that.options.controlIconsEnabled) {
                that.options.controlIconsEnabled = true;
                ControlIcons.enable(that);
              }
              return that.pi;
            },
            disableControlIcons: function() {
              if (that.options.controlIconsEnabled) {
                that.options.controlIconsEnabled = false;
                ControlIcons.disable(that);
              }
              return that.pi;
            },
            isControlIconsEnabled: function() {
              return !!that.options.controlIconsEnabled;
            },
            // Double click zoom
            enableDblClickZoom: function() {
              that.options.dblClickZoomEnabled = true;
              return that.pi;
            },
            disableDblClickZoom: function() {
              that.options.dblClickZoomEnabled = false;
              return that.pi;
            },
            isDblClickZoomEnabled: function() {
              return !!that.options.dblClickZoomEnabled;
            },
            // Mouse wheel zoom
            enableMouseWheelZoom: function() {
              that.enableMouseWheelZoom();
              return that.pi;
            },
            disableMouseWheelZoom: function() {
              that.disableMouseWheelZoom();
              return that.pi;
            },
            isMouseWheelZoomEnabled: function() {
              return !!that.options.mouseWheelZoomEnabled;
            },
            // Zoom scale and bounds
            setZoomScaleSensitivity: function(scale) {
              that.options.zoomScaleSensitivity = scale;
              return that.pi;
            },
            setMinZoom: function(zoom) {
              that.options.minZoom = zoom;
              return that.pi;
            },
            setMaxZoom: function(zoom) {
              that.options.maxZoom = zoom;
              return that.pi;
            },
            // Zoom event
            setBeforeZoom: function(fn) {
              that.options.beforeZoom = fn === null ? null : Utils.proxy(fn, that.publicInstance);
              return that.pi;
            },
            setOnZoom: function(fn) {
              that.options.onZoom = fn === null ? null : Utils.proxy(fn, that.publicInstance);
              return that.pi;
            },
            // Zooming
            zoom: function(scale) {
              that.publicZoom(scale, true);
              return that.pi;
            },
            zoomBy: function(scale) {
              that.publicZoom(scale, false);
              return that.pi;
            },
            zoomAtPoint: function(scale, point) {
              that.publicZoomAtPoint(scale, point, true);
              return that.pi;
            },
            zoomAtPointBy: function(scale, point) {
              that.publicZoomAtPoint(scale, point, false);
              return that.pi;
            },
            zoomIn: function() {
              this.zoomBy(1 + that.options.zoomScaleSensitivity);
              return that.pi;
            },
            zoomOut: function() {
              this.zoomBy(1 / (1 + that.options.zoomScaleSensitivity));
              return that.pi;
            },
            getZoom: function() {
              return that.getRelativeZoom();
            },
            // CTM update
            setOnUpdatedCTM: function(fn) {
              that.options.onUpdatedCTM = fn === null ? null : Utils.proxy(fn, that.publicInstance);
              return that.pi;
            },
            // Reset
            resetZoom: function() {
              that.resetZoom();
              return that.pi;
            },
            resetPan: function() {
              that.resetPan();
              return that.pi;
            },
            reset: function() {
              that.reset();
              return that.pi;
            },
            // Fit, Contain and Center
            fit: function() {
              that.fit();
              return that.pi;
            },
            contain: function() {
              that.contain();
              return that.pi;
            },
            center: function() {
              that.center();
              return that.pi;
            },
            // Size and Resize
            updateBBox: function() {
              that.updateBBox();
              return that.pi;
            },
            resize: function() {
              that.resize();
              return that.pi;
            },
            getSizes: function() {
              return {
                width: that.width,
                height: that.height,
                realZoom: that.getZoom(),
                viewBox: that.viewport.getViewBox()
              };
            },
            // Destroy
            destroy: function() {
              that.destroy();
              return that.pi;
            }
          };
        }
        return this.publicInstance;
      };
      var instancesStore = [];
      var svgPanZoom2 = function(elementOrSelector, options) {
        var svg = Utils.getSvg(elementOrSelector);
        if (svg === null) {
          return null;
        } else {
          for (var i = instancesStore.length - 1; i >= 0; i--) {
            if (instancesStore[i].svg === svg) {
              return instancesStore[i].instance.getPublicInstance();
            }
          }
          instancesStore.push({
            svg,
            instance: new SvgPanZoom(svg, options)
          });
          return instancesStore[instancesStore.length - 1].instance.getPublicInstance();
        }
      };
      module.exports = svgPanZoom2;
    }
  });

  // node_modules/.pnpm/svg-pan-zoom@3.6.2/node_modules/svg-pan-zoom/src/browserify.js
  var require_browserify = __commonJS({
    "node_modules/.pnpm/svg-pan-zoom@3.6.2/node_modules/svg-pan-zoom/src/browserify.js"(exports, module) {
      var SvgPanZoom = require_svg_pan_zoom();
      module.exports = SvgPanZoom;
    }
  });

  // node_modules/.pnpm/moment@2.30.1/node_modules/moment/moment.js
  var require_moment = __commonJS({
    "node_modules/.pnpm/moment@2.30.1/node_modules/moment/moment.js"(exports, module) {
      ;
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : global.moment = factory();
      })(exports, (function() {
        "use strict";
        var hookCallback;
        function hooks() {
          return hookCallback.apply(null, arguments);
        }
        function setHookCallback(callback) {
          hookCallback = callback;
        }
        function isArray(input) {
          return input instanceof Array || Object.prototype.toString.call(input) === "[object Array]";
        }
        function isObject(input) {
          return input != null && Object.prototype.toString.call(input) === "[object Object]";
        }
        function hasOwnProp(a, b) {
          return Object.prototype.hasOwnProperty.call(a, b);
        }
        function isObjectEmpty(obj) {
          if (Object.getOwnPropertyNames) {
            return Object.getOwnPropertyNames(obj).length === 0;
          } else {
            var k;
            for (k in obj) {
              if (hasOwnProp(obj, k)) {
                return false;
              }
            }
            return true;
          }
        }
        function isUndefined(input) {
          return input === void 0;
        }
        function isNumber(input) {
          return typeof input === "number" || Object.prototype.toString.call(input) === "[object Number]";
        }
        function isDate(input) {
          return input instanceof Date || Object.prototype.toString.call(input) === "[object Date]";
        }
        function map(arr, fn) {
          var res = [], i, arrLen = arr.length;
          for (i = 0; i < arrLen; ++i) {
            res.push(fn(arr[i], i));
          }
          return res;
        }
        function extend(a, b) {
          for (var i in b) {
            if (hasOwnProp(b, i)) {
              a[i] = b[i];
            }
          }
          if (hasOwnProp(b, "toString")) {
            a.toString = b.toString;
          }
          if (hasOwnProp(b, "valueOf")) {
            a.valueOf = b.valueOf;
          }
          return a;
        }
        function createUTC(input, format2, locale2, strict) {
          return createLocalOrUTC(input, format2, locale2, strict, true).utc();
        }
        function defaultParsingFlags() {
          return {
            empty: false,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: false,
            invalidEra: null,
            invalidMonth: null,
            invalidFormat: false,
            userInvalidated: false,
            iso: false,
            parsedDateParts: [],
            era: null,
            meridiem: null,
            rfc2822: false,
            weekdayMismatch: false
          };
        }
        function getParsingFlags(m) {
          if (m._pf == null) {
            m._pf = defaultParsingFlags();
          }
          return m._pf;
        }
        var some;
        if (Array.prototype.some) {
          some = Array.prototype.some;
        } else {
          some = function(fun) {
            var t = Object(this), len = t.length >>> 0, i;
            for (i = 0; i < len; i++) {
              if (i in t && fun.call(this, t[i], i, t)) {
                return true;
              }
            }
            return false;
          };
        }
        function isValid(m) {
          var flags = null, parsedParts = false, isNowValid = m._d && !isNaN(m._d.getTime());
          if (isNowValid) {
            flags = getParsingFlags(m);
            parsedParts = some.call(flags.parsedDateParts, function(i) {
              return i != null;
            });
            isNowValid = flags.overflow < 0 && !flags.empty && !flags.invalidEra && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);
            if (m._strict) {
              isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === void 0;
            }
          }
          if (Object.isFrozen == null || !Object.isFrozen(m)) {
            m._isValid = isNowValid;
          } else {
            return isNowValid;
          }
          return m._isValid;
        }
        function createInvalid(flags) {
          var m = createUTC(NaN);
          if (flags != null) {
            extend(getParsingFlags(m), flags);
          } else {
            getParsingFlags(m).userInvalidated = true;
          }
          return m;
        }
        var momentProperties = hooks.momentProperties = [], updateInProgress = false;
        function copyConfig(to2, from2) {
          var i, prop, val, momentPropertiesLen = momentProperties.length;
          if (!isUndefined(from2._isAMomentObject)) {
            to2._isAMomentObject = from2._isAMomentObject;
          }
          if (!isUndefined(from2._i)) {
            to2._i = from2._i;
          }
          if (!isUndefined(from2._f)) {
            to2._f = from2._f;
          }
          if (!isUndefined(from2._l)) {
            to2._l = from2._l;
          }
          if (!isUndefined(from2._strict)) {
            to2._strict = from2._strict;
          }
          if (!isUndefined(from2._tzm)) {
            to2._tzm = from2._tzm;
          }
          if (!isUndefined(from2._isUTC)) {
            to2._isUTC = from2._isUTC;
          }
          if (!isUndefined(from2._offset)) {
            to2._offset = from2._offset;
          }
          if (!isUndefined(from2._pf)) {
            to2._pf = getParsingFlags(from2);
          }
          if (!isUndefined(from2._locale)) {
            to2._locale = from2._locale;
          }
          if (momentPropertiesLen > 0) {
            for (i = 0; i < momentPropertiesLen; i++) {
              prop = momentProperties[i];
              val = from2[prop];
              if (!isUndefined(val)) {
                to2[prop] = val;
              }
            }
          }
          return to2;
        }
        function Moment(config) {
          copyConfig(this, config);
          this._d = new Date(config._d != null ? config._d.getTime() : NaN);
          if (!this.isValid()) {
            this._d = /* @__PURE__ */ new Date(NaN);
          }
          if (updateInProgress === false) {
            updateInProgress = true;
            hooks.updateOffset(this);
            updateInProgress = false;
          }
        }
        function isMoment(obj) {
          return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
        }
        function warn(msg) {
          if (hooks.suppressDeprecationWarnings === false && typeof console !== "undefined" && console.warn) {
            console.warn("Deprecation warning: " + msg);
          }
        }
        function deprecate(msg, fn) {
          var firstTime = true;
          return extend(function() {
            if (hooks.deprecationHandler != null) {
              hooks.deprecationHandler(null, msg);
            }
            if (firstTime) {
              var args = [], arg, i, key, argLen = arguments.length;
              for (i = 0; i < argLen; i++) {
                arg = "";
                if (typeof arguments[i] === "object") {
                  arg += "\n[" + i + "] ";
                  for (key in arguments[0]) {
                    if (hasOwnProp(arguments[0], key)) {
                      arg += key + ": " + arguments[0][key] + ", ";
                    }
                  }
                  arg = arg.slice(0, -2);
                } else {
                  arg = arguments[i];
                }
                args.push(arg);
              }
              warn(
                msg + "\nArguments: " + Array.prototype.slice.call(args).join("") + "\n" + new Error().stack
              );
              firstTime = false;
            }
            return fn.apply(this, arguments);
          }, fn);
        }
        var deprecations = {};
        function deprecateSimple(name, msg) {
          if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(name, msg);
          }
          if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
          }
        }
        hooks.suppressDeprecationWarnings = false;
        hooks.deprecationHandler = null;
        function isFunction(input) {
          return typeof Function !== "undefined" && input instanceof Function || Object.prototype.toString.call(input) === "[object Function]";
        }
        function set(config) {
          var prop, i;
          for (i in config) {
            if (hasOwnProp(config, i)) {
              prop = config[i];
              if (isFunction(prop)) {
                this[i] = prop;
              } else {
                this["_" + i] = prop;
              }
            }
          }
          this._config = config;
          this._dayOfMonthOrdinalParseLenient = new RegExp(
            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
          );
        }
        function mergeConfigs(parentConfig, childConfig) {
          var res = extend({}, parentConfig), prop;
          for (prop in childConfig) {
            if (hasOwnProp(childConfig, prop)) {
              if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                res[prop] = {};
                extend(res[prop], parentConfig[prop]);
                extend(res[prop], childConfig[prop]);
              } else if (childConfig[prop] != null) {
                res[prop] = childConfig[prop];
              } else {
                delete res[prop];
              }
            }
          }
          for (prop in parentConfig) {
            if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[prop])) {
              res[prop] = extend({}, res[prop]);
            }
          }
          return res;
        }
        function Locale(config) {
          if (config != null) {
            this.set(config);
          }
        }
        var keys;
        if (Object.keys) {
          keys = Object.keys;
        } else {
          keys = function(obj) {
            var i, res = [];
            for (i in obj) {
              if (hasOwnProp(obj, i)) {
                res.push(i);
              }
            }
            return res;
          };
        }
        var defaultCalendar = {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L"
        };
        function calendar(key, mom, now2) {
          var output = this._calendar[key] || this._calendar["sameElse"];
          return isFunction(output) ? output.call(mom, now2) : output;
        }
        function zeroFill(number, targetLength, forceSign) {
          var absNumber = "" + Math.abs(number), zerosToFill = targetLength - absNumber.length, sign2 = number >= 0;
          return (sign2 ? forceSign ? "+" : "" : "-") + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
        }
        var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, formatFunctions = {}, formatTokenFunctions = {};
        function addFormatToken(token2, padded, ordinal2, callback) {
          var func = callback;
          if (typeof callback === "string") {
            func = function() {
              return this[callback]();
            };
          }
          if (token2) {
            formatTokenFunctions[token2] = func;
          }
          if (padded) {
            formatTokenFunctions[padded[0]] = function() {
              return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
          }
          if (ordinal2) {
            formatTokenFunctions[ordinal2] = function() {
              return this.localeData().ordinal(
                func.apply(this, arguments),
                token2
              );
            };
          }
        }
        function removeFormattingTokens(input) {
          if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, "");
          }
          return input.replace(/\\/g, "");
        }
        function makeFormatFunction(format2) {
          var array = format2.match(formattingTokens), i, length;
          for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
              array[i] = formatTokenFunctions[array[i]];
            } else {
              array[i] = removeFormattingTokens(array[i]);
            }
          }
          return function(mom) {
            var output = "", i2;
            for (i2 = 0; i2 < length; i2++) {
              output += isFunction(array[i2]) ? array[i2].call(mom, format2) : array[i2];
            }
            return output;
          };
        }
        function formatMoment(m, format2) {
          if (!m.isValid()) {
            return m.localeData().invalidDate();
          }
          format2 = expandFormat(format2, m.localeData());
          formatFunctions[format2] = formatFunctions[format2] || makeFormatFunction(format2);
          return formatFunctions[format2](m);
        }
        function expandFormat(format2, locale2) {
          var i = 5;
          function replaceLongDateFormatTokens(input) {
            return locale2.longDateFormat(input) || input;
          }
          localFormattingTokens.lastIndex = 0;
          while (i >= 0 && localFormattingTokens.test(format2)) {
            format2 = format2.replace(
              localFormattingTokens,
              replaceLongDateFormatTokens
            );
            localFormattingTokens.lastIndex = 0;
            i -= 1;
          }
          return format2;
        }
        var defaultLongDateFormat = {
          LTS: "h:mm:ss A",
          LT: "h:mm A",
          L: "MM/DD/YYYY",
          LL: "MMMM D, YYYY",
          LLL: "MMMM D, YYYY h:mm A",
          LLLL: "dddd, MMMM D, YYYY h:mm A"
        };
        function longDateFormat(key) {
          var format2 = this._longDateFormat[key], formatUpper = this._longDateFormat[key.toUpperCase()];
          if (format2 || !formatUpper) {
            return format2;
          }
          this._longDateFormat[key] = formatUpper.match(formattingTokens).map(function(tok) {
            if (tok === "MMMM" || tok === "MM" || tok === "DD" || tok === "dddd") {
              return tok.slice(1);
            }
            return tok;
          }).join("");
          return this._longDateFormat[key];
        }
        var defaultInvalidDate = "Invalid date";
        function invalidDate() {
          return this._invalidDate;
        }
        var defaultOrdinal = "%d", defaultDayOfMonthOrdinalParse = /\d{1,2}/;
        function ordinal(number) {
          return this._ordinal.replace("%d", number);
        }
        var defaultRelativeTime = {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          ss: "%d seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          w: "a week",
          ww: "%d weeks",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years"
        };
        function relativeTime(number, withoutSuffix, string, isFuture) {
          var output = this._relativeTime[string];
          return isFunction(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
        }
        function pastFuture(diff2, output) {
          var format2 = this._relativeTime[diff2 > 0 ? "future" : "past"];
          return isFunction(format2) ? format2(output) : format2.replace(/%s/i, output);
        }
        var aliases = {
          D: "date",
          dates: "date",
          date: "date",
          d: "day",
          days: "day",
          day: "day",
          e: "weekday",
          weekdays: "weekday",
          weekday: "weekday",
          E: "isoWeekday",
          isoweekdays: "isoWeekday",
          isoweekday: "isoWeekday",
          DDD: "dayOfYear",
          dayofyears: "dayOfYear",
          dayofyear: "dayOfYear",
          h: "hour",
          hours: "hour",
          hour: "hour",
          ms: "millisecond",
          milliseconds: "millisecond",
          millisecond: "millisecond",
          m: "minute",
          minutes: "minute",
          minute: "minute",
          M: "month",
          months: "month",
          month: "month",
          Q: "quarter",
          quarters: "quarter",
          quarter: "quarter",
          s: "second",
          seconds: "second",
          second: "second",
          gg: "weekYear",
          weekyears: "weekYear",
          weekyear: "weekYear",
          GG: "isoWeekYear",
          isoweekyears: "isoWeekYear",
          isoweekyear: "isoWeekYear",
          w: "week",
          weeks: "week",
          week: "week",
          W: "isoWeek",
          isoweeks: "isoWeek",
          isoweek: "isoWeek",
          y: "year",
          years: "year",
          year: "year"
        };
        function normalizeUnits(units) {
          return typeof units === "string" ? aliases[units] || aliases[units.toLowerCase()] : void 0;
        }
        function normalizeObjectUnits(inputObject) {
          var normalizedInput = {}, normalizedProp, prop;
          for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
              normalizedProp = normalizeUnits(prop);
              if (normalizedProp) {
                normalizedInput[normalizedProp] = inputObject[prop];
              }
            }
          }
          return normalizedInput;
        }
        var priorities = {
          date: 9,
          day: 11,
          weekday: 11,
          isoWeekday: 11,
          dayOfYear: 4,
          hour: 13,
          millisecond: 16,
          minute: 14,
          month: 8,
          quarter: 7,
          second: 15,
          weekYear: 1,
          isoWeekYear: 1,
          week: 5,
          isoWeek: 5,
          year: 1
        };
        function getPrioritizedUnits(unitsObj) {
          var units = [], u;
          for (u in unitsObj) {
            if (hasOwnProp(unitsObj, u)) {
              units.push({ unit: u, priority: priorities[u] });
            }
          }
          units.sort(function(a, b) {
            return a.priority - b.priority;
          });
          return units;
        }
        var match1 = /\d/, match2 = /\d\d/, match3 = /\d{3}/, match4 = /\d{4}/, match6 = /[+-]?\d{6}/, match1to2 = /\d\d?/, match3to4 = /\d\d\d\d?/, match5to6 = /\d\d\d\d\d\d?/, match1to3 = /\d{1,3}/, match1to4 = /\d{1,4}/, match1to6 = /[+-]?\d{1,6}/, matchUnsigned = /\d+/, matchSigned = /[+-]?\d+/, matchOffset = /Z|[+-]\d\d:?\d\d/gi, matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, match1to2NoLeadingZero = /^[1-9]\d?/, match1to2HasZero = /^([1-9]\d|\d)/, regexes;
        regexes = {};
        function addRegexToken(token2, regex, strictRegex) {
          regexes[token2] = isFunction(regex) ? regex : function(isStrict, localeData2) {
            return isStrict && strictRegex ? strictRegex : regex;
          };
        }
        function getParseRegexForToken(token2, config) {
          if (!hasOwnProp(regexes, token2)) {
            return new RegExp(unescapeFormat(token2));
          }
          return regexes[token2](config._strict, config._locale);
        }
        function unescapeFormat(s) {
          return regexEscape(
            s.replace("\\", "").replace(
              /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
              function(matched, p1, p2, p3, p4) {
                return p1 || p2 || p3 || p4;
              }
            )
          );
        }
        function regexEscape(s) {
          return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
        }
        function absFloor(number) {
          if (number < 0) {
            return Math.ceil(number) || 0;
          } else {
            return Math.floor(number);
          }
        }
        function toInt(argumentForCoercion) {
          var coercedNumber = +argumentForCoercion, value = 0;
          if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
          }
          return value;
        }
        var tokens = {};
        function addParseToken(token2, callback) {
          var i, func = callback, tokenLen;
          if (typeof token2 === "string") {
            token2 = [token2];
          }
          if (isNumber(callback)) {
            func = function(input, array) {
              array[callback] = toInt(input);
            };
          }
          tokenLen = token2.length;
          for (i = 0; i < tokenLen; i++) {
            tokens[token2[i]] = func;
          }
        }
        function addWeekParseToken(token2, callback) {
          addParseToken(token2, function(input, array, config, token3) {
            config._w = config._w || {};
            callback(input, config._w, config, token3);
          });
        }
        function addTimeToArrayFromToken(token2, input, config) {
          if (input != null && hasOwnProp(tokens, token2)) {
            tokens[token2](input, config._a, config, token2);
          }
        }
        function isLeapYear(year) {
          return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
        }
        var YEAR = 0, MONTH = 1, DATE = 2, HOUR = 3, MINUTE = 4, SECOND = 5, MILLISECOND = 6, WEEK = 7, WEEKDAY = 8;
        addFormatToken("Y", 0, 0, function() {
          var y = this.year();
          return y <= 9999 ? zeroFill(y, 4) : "+" + y;
        });
        addFormatToken(0, ["YY", 2], 0, function() {
          return this.year() % 100;
        });
        addFormatToken(0, ["YYYY", 4], 0, "year");
        addFormatToken(0, ["YYYYY", 5], 0, "year");
        addFormatToken(0, ["YYYYYY", 6, true], 0, "year");
        addRegexToken("Y", matchSigned);
        addRegexToken("YY", match1to2, match2);
        addRegexToken("YYYY", match1to4, match4);
        addRegexToken("YYYYY", match1to6, match6);
        addRegexToken("YYYYYY", match1to6, match6);
        addParseToken(["YYYYY", "YYYYYY"], YEAR);
        addParseToken("YYYY", function(input, array) {
          array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
        });
        addParseToken("YY", function(input, array) {
          array[YEAR] = hooks.parseTwoDigitYear(input);
        });
        addParseToken("Y", function(input, array) {
          array[YEAR] = parseInt(input, 10);
        });
        function daysInYear(year) {
          return isLeapYear(year) ? 366 : 365;
        }
        hooks.parseTwoDigitYear = function(input) {
          return toInt(input) + (toInt(input) > 68 ? 1900 : 2e3);
        };
        var getSetYear = makeGetSet("FullYear", true);
        function getIsLeapYear() {
          return isLeapYear(this.year());
        }
        function makeGetSet(unit, keepTime) {
          return function(value) {
            if (value != null) {
              set$1(this, unit, value);
              hooks.updateOffset(this, keepTime);
              return this;
            } else {
              return get(this, unit);
            }
          };
        }
        function get(mom, unit) {
          if (!mom.isValid()) {
            return NaN;
          }
          var d = mom._d, isUTC = mom._isUTC;
          switch (unit) {
            case "Milliseconds":
              return isUTC ? d.getUTCMilliseconds() : d.getMilliseconds();
            case "Seconds":
              return isUTC ? d.getUTCSeconds() : d.getSeconds();
            case "Minutes":
              return isUTC ? d.getUTCMinutes() : d.getMinutes();
            case "Hours":
              return isUTC ? d.getUTCHours() : d.getHours();
            case "Date":
              return isUTC ? d.getUTCDate() : d.getDate();
            case "Day":
              return isUTC ? d.getUTCDay() : d.getDay();
            case "Month":
              return isUTC ? d.getUTCMonth() : d.getMonth();
            case "FullYear":
              return isUTC ? d.getUTCFullYear() : d.getFullYear();
            default:
              return NaN;
          }
        }
        function set$1(mom, unit, value) {
          var d, isUTC, year, month, date;
          if (!mom.isValid() || isNaN(value)) {
            return;
          }
          d = mom._d;
          isUTC = mom._isUTC;
          switch (unit) {
            case "Milliseconds":
              return void (isUTC ? d.setUTCMilliseconds(value) : d.setMilliseconds(value));
            case "Seconds":
              return void (isUTC ? d.setUTCSeconds(value) : d.setSeconds(value));
            case "Minutes":
              return void (isUTC ? d.setUTCMinutes(value) : d.setMinutes(value));
            case "Hours":
              return void (isUTC ? d.setUTCHours(value) : d.setHours(value));
            case "Date":
              return void (isUTC ? d.setUTCDate(value) : d.setDate(value));
            // case 'Day': // Not real
            //    return void (isUTC ? d.setUTCDay(value) : d.setDay(value));
            // case 'Month': // Not used because we need to pass two variables
            //     return void (isUTC ? d.setUTCMonth(value) : d.setMonth(value));
            case "FullYear":
              break;
            // See below ...
            default:
              return;
          }
          year = value;
          month = mom.month();
          date = mom.date();
          date = date === 29 && month === 1 && !isLeapYear(year) ? 28 : date;
          void (isUTC ? d.setUTCFullYear(year, month, date) : d.setFullYear(year, month, date));
        }
        function stringGet(units) {
          units = normalizeUnits(units);
          if (isFunction(this[units])) {
            return this[units]();
          }
          return this;
        }
        function stringSet(units, value) {
          if (typeof units === "object") {
            units = normalizeObjectUnits(units);
            var prioritized = getPrioritizedUnits(units), i, prioritizedLen = prioritized.length;
            for (i = 0; i < prioritizedLen; i++) {
              this[prioritized[i].unit](units[prioritized[i].unit]);
            }
          } else {
            units = normalizeUnits(units);
            if (isFunction(this[units])) {
              return this[units](value);
            }
          }
          return this;
        }
        function mod(n, x) {
          return (n % x + x) % x;
        }
        var indexOf;
        if (Array.prototype.indexOf) {
          indexOf = Array.prototype.indexOf;
        } else {
          indexOf = function(o) {
            var i;
            for (i = 0; i < this.length; ++i) {
              if (this[i] === o) {
                return i;
              }
            }
            return -1;
          };
        }
        function daysInMonth(year, month) {
          if (isNaN(year) || isNaN(month)) {
            return NaN;
          }
          var modMonth = mod(month, 12);
          year += (month - modMonth) / 12;
          return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
        }
        addFormatToken("M", ["MM", 2], "Mo", function() {
          return this.month() + 1;
        });
        addFormatToken("MMM", 0, 0, function(format2) {
          return this.localeData().monthsShort(this, format2);
        });
        addFormatToken("MMMM", 0, 0, function(format2) {
          return this.localeData().months(this, format2);
        });
        addRegexToken("M", match1to2, match1to2NoLeadingZero);
        addRegexToken("MM", match1to2, match2);
        addRegexToken("MMM", function(isStrict, locale2) {
          return locale2.monthsShortRegex(isStrict);
        });
        addRegexToken("MMMM", function(isStrict, locale2) {
          return locale2.monthsRegex(isStrict);
        });
        addParseToken(["M", "MM"], function(input, array) {
          array[MONTH] = toInt(input) - 1;
        });
        addParseToken(["MMM", "MMMM"], function(input, array, config, token2) {
          var month = config._locale.monthsParse(input, token2, config._strict);
          if (month != null) {
            array[MONTH] = month;
          } else {
            getParsingFlags(config).invalidMonth = input;
          }
        });
        var defaultLocaleMonths = "January_February_March_April_May_June_July_August_September_October_November_December".split(
          "_"
        ), defaultLocaleMonthsShort = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, defaultMonthsShortRegex = matchWord, defaultMonthsRegex = matchWord;
        function localeMonths(m, format2) {
          if (!m) {
            return isArray(this._months) ? this._months : this._months["standalone"];
          }
          return isArray(this._months) ? this._months[m.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format2) ? "format" : "standalone"][m.month()];
        }
        function localeMonthsShort(m, format2) {
          if (!m) {
            return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort["standalone"];
          }
          return isArray(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format2) ? "format" : "standalone"][m.month()];
        }
        function handleStrictParse(monthName, format2, strict) {
          var i, ii, mom, llc = monthName.toLocaleLowerCase();
          if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for (i = 0; i < 12; ++i) {
              mom = createUTC([2e3, i]);
              this._shortMonthsParse[i] = this.monthsShort(
                mom,
                ""
              ).toLocaleLowerCase();
              this._longMonthsParse[i] = this.months(mom, "").toLocaleLowerCase();
            }
          }
          if (strict) {
            if (format2 === "MMM") {
              ii = indexOf.call(this._shortMonthsParse, llc);
              return ii !== -1 ? ii : null;
            } else {
              ii = indexOf.call(this._longMonthsParse, llc);
              return ii !== -1 ? ii : null;
            }
          } else {
            if (format2 === "MMM") {
              ii = indexOf.call(this._shortMonthsParse, llc);
              if (ii !== -1) {
                return ii;
              }
              ii = indexOf.call(this._longMonthsParse, llc);
              return ii !== -1 ? ii : null;
            } else {
              ii = indexOf.call(this._longMonthsParse, llc);
              if (ii !== -1) {
                return ii;
              }
              ii = indexOf.call(this._shortMonthsParse, llc);
              return ii !== -1 ? ii : null;
            }
          }
        }
        function localeMonthsParse(monthName, format2, strict) {
          var i, mom, regex;
          if (this._monthsParseExact) {
            return handleStrictParse.call(this, monthName, format2, strict);
          }
          if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
          }
          for (i = 0; i < 12; i++) {
            mom = createUTC([2e3, i]);
            if (strict && !this._longMonthsParse[i]) {
              this._longMonthsParse[i] = new RegExp(
                "^" + this.months(mom, "").replace(".", "") + "$",
                "i"
              );
              this._shortMonthsParse[i] = new RegExp(
                "^" + this.monthsShort(mom, "").replace(".", "") + "$",
                "i"
              );
            }
            if (!strict && !this._monthsParse[i]) {
              regex = "^" + this.months(mom, "") + "|^" + this.monthsShort(mom, "");
              this._monthsParse[i] = new RegExp(regex.replace(".", ""), "i");
            }
            if (strict && format2 === "MMMM" && this._longMonthsParse[i].test(monthName)) {
              return i;
            } else if (strict && format2 === "MMM" && this._shortMonthsParse[i].test(monthName)) {
              return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
              return i;
            }
          }
        }
        function setMonth(mom, value) {
          if (!mom.isValid()) {
            return mom;
          }
          if (typeof value === "string") {
            if (/^\d+$/.test(value)) {
              value = toInt(value);
            } else {
              value = mom.localeData().monthsParse(value);
              if (!isNumber(value)) {
                return mom;
              }
            }
          }
          var month = value, date = mom.date();
          date = date < 29 ? date : Math.min(date, daysInMonth(mom.year(), month));
          void (mom._isUTC ? mom._d.setUTCMonth(month, date) : mom._d.setMonth(month, date));
          return mom;
        }
        function getSetMonth(value) {
          if (value != null) {
            setMonth(this, value);
            hooks.updateOffset(this, true);
            return this;
          } else {
            return get(this, "Month");
          }
        }
        function getDaysInMonth() {
          return daysInMonth(this.year(), this.month());
        }
        function monthsShortRegex(isStrict) {
          if (this._monthsParseExact) {
            if (!hasOwnProp(this, "_monthsRegex")) {
              computeMonthsParse.call(this);
            }
            if (isStrict) {
              return this._monthsShortStrictRegex;
            } else {
              return this._monthsShortRegex;
            }
          } else {
            if (!hasOwnProp(this, "_monthsShortRegex")) {
              this._monthsShortRegex = defaultMonthsShortRegex;
            }
            return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
          }
        }
        function monthsRegex(isStrict) {
          if (this._monthsParseExact) {
            if (!hasOwnProp(this, "_monthsRegex")) {
              computeMonthsParse.call(this);
            }
            if (isStrict) {
              return this._monthsStrictRegex;
            } else {
              return this._monthsRegex;
            }
          } else {
            if (!hasOwnProp(this, "_monthsRegex")) {
              this._monthsRegex = defaultMonthsRegex;
            }
            return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
          }
        }
        function computeMonthsParse() {
          function cmpLenRev(a, b) {
            return b.length - a.length;
          }
          var shortPieces = [], longPieces = [], mixedPieces = [], i, mom, shortP, longP;
          for (i = 0; i < 12; i++) {
            mom = createUTC([2e3, i]);
            shortP = regexEscape(this.monthsShort(mom, ""));
            longP = regexEscape(this.months(mom, ""));
            shortPieces.push(shortP);
            longPieces.push(longP);
            mixedPieces.push(longP);
            mixedPieces.push(shortP);
          }
          shortPieces.sort(cmpLenRev);
          longPieces.sort(cmpLenRev);
          mixedPieces.sort(cmpLenRev);
          this._monthsRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
          this._monthsShortRegex = this._monthsRegex;
          this._monthsStrictRegex = new RegExp(
            "^(" + longPieces.join("|") + ")",
            "i"
          );
          this._monthsShortStrictRegex = new RegExp(
            "^(" + shortPieces.join("|") + ")",
            "i"
          );
        }
        function createDate(y, m, d, h, M, s, ms) {
          var date;
          if (y < 100 && y >= 0) {
            date = new Date(y + 400, m, d, h, M, s, ms);
            if (isFinite(date.getFullYear())) {
              date.setFullYear(y);
            }
          } else {
            date = new Date(y, m, d, h, M, s, ms);
          }
          return date;
        }
        function createUTCDate(y) {
          var date, args;
          if (y < 100 && y >= 0) {
            args = Array.prototype.slice.call(arguments);
            args[0] = y + 400;
            date = new Date(Date.UTC.apply(null, args));
            if (isFinite(date.getUTCFullYear())) {
              date.setUTCFullYear(y);
            }
          } else {
            date = new Date(Date.UTC.apply(null, arguments));
          }
          return date;
        }
        function firstWeekOffset(year, dow, doy) {
          var fwd = 7 + dow - doy, fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
          return -fwdlw + fwd - 1;
        }
        function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
          var localWeekday = (7 + weekday - dow) % 7, weekOffset = firstWeekOffset(year, dow, doy), dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset, resYear, resDayOfYear;
          if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
          } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
          } else {
            resYear = year;
            resDayOfYear = dayOfYear;
          }
          return {
            year: resYear,
            dayOfYear: resDayOfYear
          };
        }
        function weekOfYear(mom, dow, doy) {
          var weekOffset = firstWeekOffset(mom.year(), dow, doy), week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1, resWeek, resYear;
          if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
          } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
          } else {
            resYear = mom.year();
            resWeek = week;
          }
          return {
            week: resWeek,
            year: resYear
          };
        }
        function weeksInYear(year, dow, doy) {
          var weekOffset = firstWeekOffset(year, dow, doy), weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
          return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
        }
        addFormatToken("w", ["ww", 2], "wo", "week");
        addFormatToken("W", ["WW", 2], "Wo", "isoWeek");
        addRegexToken("w", match1to2, match1to2NoLeadingZero);
        addRegexToken("ww", match1to2, match2);
        addRegexToken("W", match1to2, match1to2NoLeadingZero);
        addRegexToken("WW", match1to2, match2);
        addWeekParseToken(
          ["w", "ww", "W", "WW"],
          function(input, week, config, token2) {
            week[token2.substr(0, 1)] = toInt(input);
          }
        );
        function localeWeek(mom) {
          return weekOfYear(mom, this._week.dow, this._week.doy).week;
        }
        var defaultLocaleWeek = {
          dow: 0,
          // Sunday is the first day of the week.
          doy: 6
          // The week that contains Jan 6th is the first week of the year.
        };
        function localeFirstDayOfWeek() {
          return this._week.dow;
        }
        function localeFirstDayOfYear() {
          return this._week.doy;
        }
        function getSetWeek(input) {
          var week = this.localeData().week(this);
          return input == null ? week : this.add((input - week) * 7, "d");
        }
        function getSetISOWeek(input) {
          var week = weekOfYear(this, 1, 4).week;
          return input == null ? week : this.add((input - week) * 7, "d");
        }
        addFormatToken("d", 0, "do", "day");
        addFormatToken("dd", 0, 0, function(format2) {
          return this.localeData().weekdaysMin(this, format2);
        });
        addFormatToken("ddd", 0, 0, function(format2) {
          return this.localeData().weekdaysShort(this, format2);
        });
        addFormatToken("dddd", 0, 0, function(format2) {
          return this.localeData().weekdays(this, format2);
        });
        addFormatToken("e", 0, 0, "weekday");
        addFormatToken("E", 0, 0, "isoWeekday");
        addRegexToken("d", match1to2);
        addRegexToken("e", match1to2);
        addRegexToken("E", match1to2);
        addRegexToken("dd", function(isStrict, locale2) {
          return locale2.weekdaysMinRegex(isStrict);
        });
        addRegexToken("ddd", function(isStrict, locale2) {
          return locale2.weekdaysShortRegex(isStrict);
        });
        addRegexToken("dddd", function(isStrict, locale2) {
          return locale2.weekdaysRegex(isStrict);
        });
        addWeekParseToken(["dd", "ddd", "dddd"], function(input, week, config, token2) {
          var weekday = config._locale.weekdaysParse(input, token2, config._strict);
          if (weekday != null) {
            week.d = weekday;
          } else {
            getParsingFlags(config).invalidWeekday = input;
          }
        });
        addWeekParseToken(["d", "e", "E"], function(input, week, config, token2) {
          week[token2] = toInt(input);
        });
        function parseWeekday(input, locale2) {
          if (typeof input !== "string") {
            return input;
          }
          if (!isNaN(input)) {
            return parseInt(input, 10);
          }
          input = locale2.weekdaysParse(input);
          if (typeof input === "number") {
            return input;
          }
          return null;
        }
        function parseIsoWeekday(input, locale2) {
          if (typeof input === "string") {
            return locale2.weekdaysParse(input) % 7 || 7;
          }
          return isNaN(input) ? null : input;
        }
        function shiftWeekdays(ws, n) {
          return ws.slice(n, 7).concat(ws.slice(0, n));
        }
        var defaultLocaleWeekdays = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), defaultLocaleWeekdaysShort = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), defaultLocaleWeekdaysMin = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), defaultWeekdaysRegex = matchWord, defaultWeekdaysShortRegex = matchWord, defaultWeekdaysMinRegex = matchWord;
        function localeWeekdays(m, format2) {
          var weekdays = isArray(this._weekdays) ? this._weekdays : this._weekdays[m && m !== true && this._weekdays.isFormat.test(format2) ? "format" : "standalone"];
          return m === true ? shiftWeekdays(weekdays, this._week.dow) : m ? weekdays[m.day()] : weekdays;
        }
        function localeWeekdaysShort(m) {
          return m === true ? shiftWeekdays(this._weekdaysShort, this._week.dow) : m ? this._weekdaysShort[m.day()] : this._weekdaysShort;
        }
        function localeWeekdaysMin(m) {
          return m === true ? shiftWeekdays(this._weekdaysMin, this._week.dow) : m ? this._weekdaysMin[m.day()] : this._weekdaysMin;
        }
        function handleStrictParse$1(weekdayName, format2, strict) {
          var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
          if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];
            for (i = 0; i < 7; ++i) {
              mom = createUTC([2e3, 1]).day(i);
              this._minWeekdaysParse[i] = this.weekdaysMin(
                mom,
                ""
              ).toLocaleLowerCase();
              this._shortWeekdaysParse[i] = this.weekdaysShort(
                mom,
                ""
              ).toLocaleLowerCase();
              this._weekdaysParse[i] = this.weekdays(mom, "").toLocaleLowerCase();
            }
          }
          if (strict) {
            if (format2 === "dddd") {
              ii = indexOf.call(this._weekdaysParse, llc);
              return ii !== -1 ? ii : null;
            } else if (format2 === "ddd") {
              ii = indexOf.call(this._shortWeekdaysParse, llc);
              return ii !== -1 ? ii : null;
            } else {
              ii = indexOf.call(this._minWeekdaysParse, llc);
              return ii !== -1 ? ii : null;
            }
          } else {
            if (format2 === "dddd") {
              ii = indexOf.call(this._weekdaysParse, llc);
              if (ii !== -1) {
                return ii;
              }
              ii = indexOf.call(this._shortWeekdaysParse, llc);
              if (ii !== -1) {
                return ii;
              }
              ii = indexOf.call(this._minWeekdaysParse, llc);
              return ii !== -1 ? ii : null;
            } else if (format2 === "ddd") {
              ii = indexOf.call(this._shortWeekdaysParse, llc);
              if (ii !== -1) {
                return ii;
              }
              ii = indexOf.call(this._weekdaysParse, llc);
              if (ii !== -1) {
                return ii;
              }
              ii = indexOf.call(this._minWeekdaysParse, llc);
              return ii !== -1 ? ii : null;
            } else {
              ii = indexOf.call(this._minWeekdaysParse, llc);
              if (ii !== -1) {
                return ii;
              }
              ii = indexOf.call(this._weekdaysParse, llc);
              if (ii !== -1) {
                return ii;
              }
              ii = indexOf.call(this._shortWeekdaysParse, llc);
              return ii !== -1 ? ii : null;
            }
          }
        }
        function localeWeekdaysParse(weekdayName, format2, strict) {
          var i, mom, regex;
          if (this._weekdaysParseExact) {
            return handleStrictParse$1.call(this, weekdayName, format2, strict);
          }
          if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
          }
          for (i = 0; i < 7; i++) {
            mom = createUTC([2e3, 1]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
              this._fullWeekdaysParse[i] = new RegExp(
                "^" + this.weekdays(mom, "").replace(".", "\\.?") + "$",
                "i"
              );
              this._shortWeekdaysParse[i] = new RegExp(
                "^" + this.weekdaysShort(mom, "").replace(".", "\\.?") + "$",
                "i"
              );
              this._minWeekdaysParse[i] = new RegExp(
                "^" + this.weekdaysMin(mom, "").replace(".", "\\.?") + "$",
                "i"
              );
            }
            if (!this._weekdaysParse[i]) {
              regex = "^" + this.weekdays(mom, "") + "|^" + this.weekdaysShort(mom, "") + "|^" + this.weekdaysMin(mom, "");
              this._weekdaysParse[i] = new RegExp(regex.replace(".", ""), "i");
            }
            if (strict && format2 === "dddd" && this._fullWeekdaysParse[i].test(weekdayName)) {
              return i;
            } else if (strict && format2 === "ddd" && this._shortWeekdaysParse[i].test(weekdayName)) {
              return i;
            } else if (strict && format2 === "dd" && this._minWeekdaysParse[i].test(weekdayName)) {
              return i;
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
              return i;
            }
          }
        }
        function getSetDayOfWeek(input) {
          if (!this.isValid()) {
            return input != null ? this : NaN;
          }
          var day = get(this, "Day");
          if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, "d");
          } else {
            return day;
          }
        }
        function getSetLocaleDayOfWeek(input) {
          if (!this.isValid()) {
            return input != null ? this : NaN;
          }
          var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
          return input == null ? weekday : this.add(input - weekday, "d");
        }
        function getSetISODayOfWeek(input) {
          if (!this.isValid()) {
            return input != null ? this : NaN;
          }
          if (input != null) {
            var weekday = parseIsoWeekday(input, this.localeData());
            return this.day(this.day() % 7 ? weekday : weekday - 7);
          } else {
            return this.day() || 7;
          }
        }
        function weekdaysRegex(isStrict) {
          if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, "_weekdaysRegex")) {
              computeWeekdaysParse.call(this);
            }
            if (isStrict) {
              return this._weekdaysStrictRegex;
            } else {
              return this._weekdaysRegex;
            }
          } else {
            if (!hasOwnProp(this, "_weekdaysRegex")) {
              this._weekdaysRegex = defaultWeekdaysRegex;
            }
            return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
          }
        }
        function weekdaysShortRegex(isStrict) {
          if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, "_weekdaysRegex")) {
              computeWeekdaysParse.call(this);
            }
            if (isStrict) {
              return this._weekdaysShortStrictRegex;
            } else {
              return this._weekdaysShortRegex;
            }
          } else {
            if (!hasOwnProp(this, "_weekdaysShortRegex")) {
              this._weekdaysShortRegex = defaultWeekdaysShortRegex;
            }
            return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
          }
        }
        function weekdaysMinRegex(isStrict) {
          if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, "_weekdaysRegex")) {
              computeWeekdaysParse.call(this);
            }
            if (isStrict) {
              return this._weekdaysMinStrictRegex;
            } else {
              return this._weekdaysMinRegex;
            }
          } else {
            if (!hasOwnProp(this, "_weekdaysMinRegex")) {
              this._weekdaysMinRegex = defaultWeekdaysMinRegex;
            }
            return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
          }
        }
        function computeWeekdaysParse() {
          function cmpLenRev(a, b) {
            return b.length - a.length;
          }
          var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [], i, mom, minp, shortp, longp;
          for (i = 0; i < 7; i++) {
            mom = createUTC([2e3, 1]).day(i);
            minp = regexEscape(this.weekdaysMin(mom, ""));
            shortp = regexEscape(this.weekdaysShort(mom, ""));
            longp = regexEscape(this.weekdays(mom, ""));
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
          }
          minPieces.sort(cmpLenRev);
          shortPieces.sort(cmpLenRev);
          longPieces.sort(cmpLenRev);
          mixedPieces.sort(cmpLenRev);
          this._weekdaysRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
          this._weekdaysShortRegex = this._weekdaysRegex;
          this._weekdaysMinRegex = this._weekdaysRegex;
          this._weekdaysStrictRegex = new RegExp(
            "^(" + longPieces.join("|") + ")",
            "i"
          );
          this._weekdaysShortStrictRegex = new RegExp(
            "^(" + shortPieces.join("|") + ")",
            "i"
          );
          this._weekdaysMinStrictRegex = new RegExp(
            "^(" + minPieces.join("|") + ")",
            "i"
          );
        }
        function hFormat() {
          return this.hours() % 12 || 12;
        }
        function kFormat() {
          return this.hours() || 24;
        }
        addFormatToken("H", ["HH", 2], 0, "hour");
        addFormatToken("h", ["hh", 2], 0, hFormat);
        addFormatToken("k", ["kk", 2], 0, kFormat);
        addFormatToken("hmm", 0, 0, function() {
          return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2);
        });
        addFormatToken("hmmss", 0, 0, function() {
          return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
        });
        addFormatToken("Hmm", 0, 0, function() {
          return "" + this.hours() + zeroFill(this.minutes(), 2);
        });
        addFormatToken("Hmmss", 0, 0, function() {
          return "" + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
        });
        function meridiem(token2, lowercase) {
          addFormatToken(token2, 0, 0, function() {
            return this.localeData().meridiem(
              this.hours(),
              this.minutes(),
              lowercase
            );
          });
        }
        meridiem("a", true);
        meridiem("A", false);
        function matchMeridiem(isStrict, locale2) {
          return locale2._meridiemParse;
        }
        addRegexToken("a", matchMeridiem);
        addRegexToken("A", matchMeridiem);
        addRegexToken("H", match1to2, match1to2HasZero);
        addRegexToken("h", match1to2, match1to2NoLeadingZero);
        addRegexToken("k", match1to2, match1to2NoLeadingZero);
        addRegexToken("HH", match1to2, match2);
        addRegexToken("hh", match1to2, match2);
        addRegexToken("kk", match1to2, match2);
        addRegexToken("hmm", match3to4);
        addRegexToken("hmmss", match5to6);
        addRegexToken("Hmm", match3to4);
        addRegexToken("Hmmss", match5to6);
        addParseToken(["H", "HH"], HOUR);
        addParseToken(["k", "kk"], function(input, array, config) {
          var kInput = toInt(input);
          array[HOUR] = kInput === 24 ? 0 : kInput;
        });
        addParseToken(["a", "A"], function(input, array, config) {
          config._isPm = config._locale.isPM(input);
          config._meridiem = input;
        });
        addParseToken(["h", "hh"], function(input, array, config) {
          array[HOUR] = toInt(input);
          getParsingFlags(config).bigHour = true;
        });
        addParseToken("hmm", function(input, array, config) {
          var pos = input.length - 2;
          array[HOUR] = toInt(input.substr(0, pos));
          array[MINUTE] = toInt(input.substr(pos));
          getParsingFlags(config).bigHour = true;
        });
        addParseToken("hmmss", function(input, array, config) {
          var pos1 = input.length - 4, pos2 = input.length - 2;
          array[HOUR] = toInt(input.substr(0, pos1));
          array[MINUTE] = toInt(input.substr(pos1, 2));
          array[SECOND] = toInt(input.substr(pos2));
          getParsingFlags(config).bigHour = true;
        });
        addParseToken("Hmm", function(input, array, config) {
          var pos = input.length - 2;
          array[HOUR] = toInt(input.substr(0, pos));
          array[MINUTE] = toInt(input.substr(pos));
        });
        addParseToken("Hmmss", function(input, array, config) {
          var pos1 = input.length - 4, pos2 = input.length - 2;
          array[HOUR] = toInt(input.substr(0, pos1));
          array[MINUTE] = toInt(input.substr(pos1, 2));
          array[SECOND] = toInt(input.substr(pos2));
        });
        function localeIsPM(input) {
          return (input + "").toLowerCase().charAt(0) === "p";
        }
        var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i, getSetHour = makeGetSet("Hours", true);
        function localeMeridiem(hours2, minutes2, isLower) {
          if (hours2 > 11) {
            return isLower ? "pm" : "PM";
          } else {
            return isLower ? "am" : "AM";
          }
        }
        var baseConfig = {
          calendar: defaultCalendar,
          longDateFormat: defaultLongDateFormat,
          invalidDate: defaultInvalidDate,
          ordinal: defaultOrdinal,
          dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
          relativeTime: defaultRelativeTime,
          months: defaultLocaleMonths,
          monthsShort: defaultLocaleMonthsShort,
          week: defaultLocaleWeek,
          weekdays: defaultLocaleWeekdays,
          weekdaysMin: defaultLocaleWeekdaysMin,
          weekdaysShort: defaultLocaleWeekdaysShort,
          meridiemParse: defaultLocaleMeridiemParse
        };
        var locales = {}, localeFamilies = {}, globalLocale;
        function commonPrefix(arr1, arr2) {
          var i, minl = Math.min(arr1.length, arr2.length);
          for (i = 0; i < minl; i += 1) {
            if (arr1[i] !== arr2[i]) {
              return i;
            }
          }
          return minl;
        }
        function normalizeLocale(key) {
          return key ? key.toLowerCase().replace("_", "-") : key;
        }
        function chooseLocale(names) {
          var i = 0, j, next, locale2, split;
          while (i < names.length) {
            split = normalizeLocale(names[i]).split("-");
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split("-") : null;
            while (j > 0) {
              locale2 = loadLocale(split.slice(0, j).join("-"));
              if (locale2) {
                return locale2;
              }
              if (next && next.length >= j && commonPrefix(split, next) >= j - 1) {
                break;
              }
              j--;
            }
            i++;
          }
          return globalLocale;
        }
        function isLocaleNameSane(name) {
          return !!(name && name.match("^[^/\\\\]*$"));
        }
        function loadLocale(name) {
          var oldLocale = null, aliasedRequire;
          if (locales[name] === void 0 && typeof module !== "undefined" && module && module.exports && isLocaleNameSane(name)) {
            try {
              oldLocale = globalLocale._abbr;
              aliasedRequire = __require;
              aliasedRequire("./locale/" + name);
              getSetGlobalLocale(oldLocale);
            } catch (e) {
              locales[name] = null;
            }
          }
          return locales[name];
        }
        function getSetGlobalLocale(key, values) {
          var data;
          if (key) {
            if (isUndefined(values)) {
              data = getLocale(key);
            } else {
              data = defineLocale(key, values);
            }
            if (data) {
              globalLocale = data;
            } else {
              if (typeof console !== "undefined" && console.warn) {
                console.warn(
                  "Locale " + key + " not found. Did you forget to load it?"
                );
              }
            }
          }
          return globalLocale._abbr;
        }
        function defineLocale(name, config) {
          if (config !== null) {
            var locale2, parentConfig = baseConfig;
            config.abbr = name;
            if (locales[name] != null) {
              deprecateSimple(
                "defineLocaleOverride",
                "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
              );
              parentConfig = locales[name]._config;
            } else if (config.parentLocale != null) {
              if (locales[config.parentLocale] != null) {
                parentConfig = locales[config.parentLocale]._config;
              } else {
                locale2 = loadLocale(config.parentLocale);
                if (locale2 != null) {
                  parentConfig = locale2._config;
                } else {
                  if (!localeFamilies[config.parentLocale]) {
                    localeFamilies[config.parentLocale] = [];
                  }
                  localeFamilies[config.parentLocale].push({
                    name,
                    config
                  });
                  return null;
                }
              }
            }
            locales[name] = new Locale(mergeConfigs(parentConfig, config));
            if (localeFamilies[name]) {
              localeFamilies[name].forEach(function(x) {
                defineLocale(x.name, x.config);
              });
            }
            getSetGlobalLocale(name);
            return locales[name];
          } else {
            delete locales[name];
            return null;
          }
        }
        function updateLocale(name, config) {
          if (config != null) {
            var locale2, tmpLocale, parentConfig = baseConfig;
            if (locales[name] != null && locales[name].parentLocale != null) {
              locales[name].set(mergeConfigs(locales[name]._config, config));
            } else {
              tmpLocale = loadLocale(name);
              if (tmpLocale != null) {
                parentConfig = tmpLocale._config;
              }
              config = mergeConfigs(parentConfig, config);
              if (tmpLocale == null) {
                config.abbr = name;
              }
              locale2 = new Locale(config);
              locale2.parentLocale = locales[name];
              locales[name] = locale2;
            }
            getSetGlobalLocale(name);
          } else {
            if (locales[name] != null) {
              if (locales[name].parentLocale != null) {
                locales[name] = locales[name].parentLocale;
                if (name === getSetGlobalLocale()) {
                  getSetGlobalLocale(name);
                }
              } else if (locales[name] != null) {
                delete locales[name];
              }
            }
          }
          return locales[name];
        }
        function getLocale(key) {
          var locale2;
          if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
          }
          if (!key) {
            return globalLocale;
          }
          if (!isArray(key)) {
            locale2 = loadLocale(key);
            if (locale2) {
              return locale2;
            }
            key = [key];
          }
          return chooseLocale(key);
        }
        function listLocales() {
          return keys(locales);
        }
        function checkOverflow(m) {
          var overflow, a = m._a;
          if (a && getParsingFlags(m).overflow === -2) {
            overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;
            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
              overflow = DATE;
            }
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
              overflow = WEEK;
            }
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
              overflow = WEEKDAY;
            }
            getParsingFlags(m).overflow = overflow;
          }
          return m;
        }
        var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, tzRegex = /Z|[+-]\d\d(?::?\d\d)?/, isoDates = [
          ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
          ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
          ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
          ["GGGG-[W]WW", /\d{4}-W\d\d/, false],
          ["YYYY-DDD", /\d{4}-\d{3}/],
          ["YYYY-MM", /\d{4}-\d\d/, false],
          ["YYYYYYMMDD", /[+-]\d{10}/],
          ["YYYYMMDD", /\d{8}/],
          ["GGGG[W]WWE", /\d{4}W\d{3}/],
          ["GGGG[W]WW", /\d{4}W\d{2}/, false],
          ["YYYYDDD", /\d{7}/],
          ["YYYYMM", /\d{6}/, false],
          ["YYYY", /\d{4}/, false]
        ], isoTimes = [
          ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
          ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
          ["HH:mm:ss", /\d\d:\d\d:\d\d/],
          ["HH:mm", /\d\d:\d\d/],
          ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
          ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
          ["HHmmss", /\d\d\d\d\d\d/],
          ["HHmm", /\d\d\d\d/],
          ["HH", /\d\d/]
        ], aspNetJsonRegex = /^\/?Date\((-?\d+)/i, rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, obsOffsets = {
          UT: 0,
          GMT: 0,
          EDT: -4 * 60,
          EST: -5 * 60,
          CDT: -5 * 60,
          CST: -6 * 60,
          MDT: -6 * 60,
          MST: -7 * 60,
          PDT: -7 * 60,
          PST: -8 * 60
        };
        function configFromISO(config) {
          var i, l, string = config._i, match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string), allowTime, dateFormat, timeFormat, tzFormat, isoDatesLen = isoDates.length, isoTimesLen = isoTimes.length;
          if (match) {
            getParsingFlags(config).iso = true;
            for (i = 0, l = isoDatesLen; i < l; i++) {
              if (isoDates[i][1].exec(match[1])) {
                dateFormat = isoDates[i][0];
                allowTime = isoDates[i][2] !== false;
                break;
              }
            }
            if (dateFormat == null) {
              config._isValid = false;
              return;
            }
            if (match[3]) {
              for (i = 0, l = isoTimesLen; i < l; i++) {
                if (isoTimes[i][1].exec(match[3])) {
                  timeFormat = (match[2] || " ") + isoTimes[i][0];
                  break;
                }
              }
              if (timeFormat == null) {
                config._isValid = false;
                return;
              }
            }
            if (!allowTime && timeFormat != null) {
              config._isValid = false;
              return;
            }
            if (match[4]) {
              if (tzRegex.exec(match[4])) {
                tzFormat = "Z";
              } else {
                config._isValid = false;
                return;
              }
            }
            config._f = dateFormat + (timeFormat || "") + (tzFormat || "");
            configFromStringAndFormat(config);
          } else {
            config._isValid = false;
          }
        }
        function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
          var result = [
            untruncateYear(yearStr),
            defaultLocaleMonthsShort.indexOf(monthStr),
            parseInt(dayStr, 10),
            parseInt(hourStr, 10),
            parseInt(minuteStr, 10)
          ];
          if (secondStr) {
            result.push(parseInt(secondStr, 10));
          }
          return result;
        }
        function untruncateYear(yearStr) {
          var year = parseInt(yearStr, 10);
          if (year <= 49) {
            return 2e3 + year;
          } else if (year <= 999) {
            return 1900 + year;
          }
          return year;
        }
        function preprocessRFC2822(s) {
          return s.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
        }
        function checkWeekday(weekdayStr, parsedInput, config) {
          if (weekdayStr) {
            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr), weekdayActual = new Date(
              parsedInput[0],
              parsedInput[1],
              parsedInput[2]
            ).getDay();
            if (weekdayProvided !== weekdayActual) {
              getParsingFlags(config).weekdayMismatch = true;
              config._isValid = false;
              return false;
            }
          }
          return true;
        }
        function calculateOffset(obsOffset, militaryOffset, numOffset) {
          if (obsOffset) {
            return obsOffsets[obsOffset];
          } else if (militaryOffset) {
            return 0;
          } else {
            var hm = parseInt(numOffset, 10), m = hm % 100, h = (hm - m) / 100;
            return h * 60 + m;
          }
        }
        function configFromRFC2822(config) {
          var match = rfc2822.exec(preprocessRFC2822(config._i)), parsedArray;
          if (match) {
            parsedArray = extractFromRFC2822Strings(
              match[4],
              match[3],
              match[2],
              match[5],
              match[6],
              match[7]
            );
            if (!checkWeekday(match[1], parsedArray, config)) {
              return;
            }
            config._a = parsedArray;
            config._tzm = calculateOffset(match[8], match[9], match[10]);
            config._d = createUTCDate.apply(null, config._a);
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
            getParsingFlags(config).rfc2822 = true;
          } else {
            config._isValid = false;
          }
        }
        function configFromString(config) {
          var matched = aspNetJsonRegex.exec(config._i);
          if (matched !== null) {
            config._d = /* @__PURE__ */ new Date(+matched[1]);
            return;
          }
          configFromISO(config);
          if (config._isValid === false) {
            delete config._isValid;
          } else {
            return;
          }
          configFromRFC2822(config);
          if (config._isValid === false) {
            delete config._isValid;
          } else {
            return;
          }
          if (config._strict) {
            config._isValid = false;
          } else {
            hooks.createFromInputFallback(config);
          }
        }
        hooks.createFromInputFallback = deprecate(
          "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
          function(config) {
            config._d = /* @__PURE__ */ new Date(config._i + (config._useUTC ? " UTC" : ""));
          }
        );
        function defaults(a, b, c) {
          if (a != null) {
            return a;
          }
          if (b != null) {
            return b;
          }
          return c;
        }
        function currentDateArray(config) {
          var nowValue = new Date(hooks.now());
          if (config._useUTC) {
            return [
              nowValue.getUTCFullYear(),
              nowValue.getUTCMonth(),
              nowValue.getUTCDate()
            ];
          }
          return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
        }
        function configFromArray(config) {
          var i, date, input = [], currentDate, expectedWeekday, yearToUse;
          if (config._d) {
            return;
          }
          currentDate = currentDateArray(config);
          if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
          }
          if (config._dayOfYear != null) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
            if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
              getParsingFlags(config)._overflowDayOfYear = true;
            }
            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
          }
          for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
          }
          for (; i < 7; i++) {
            config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
          }
          if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
          }
          config._d = (config._useUTC ? createUTCDate : createDate).apply(
            null,
            input
          );
          expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();
          if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
          }
          if (config._nextDay) {
            config._a[HOUR] = 24;
          }
          if (config._w && typeof config._w.d !== "undefined" && config._w.d !== expectedWeekday) {
            getParsingFlags(config).weekdayMismatch = true;
          }
        }
        function dayOfYearFromWeekInfo(config) {
          var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;
          w = config._w;
          if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;
            weekYear = defaults(
              w.GG,
              config._a[YEAR],
              weekOfYear(createLocal(), 1, 4).year
            );
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) {
              weekdayOverflow = true;
            }
          } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;
            curWeek = weekOfYear(createLocal(), dow, doy);
            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);
            week = defaults(w.w, curWeek.week);
            if (w.d != null) {
              weekday = w.d;
              if (weekday < 0 || weekday > 6) {
                weekdayOverflow = true;
              }
            } else if (w.e != null) {
              weekday = w.e + dow;
              if (w.e < 0 || w.e > 6) {
                weekdayOverflow = true;
              }
            } else {
              weekday = dow;
            }
          }
          if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
          } else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
          } else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
          }
        }
        hooks.ISO_8601 = function() {
        };
        hooks.RFC_2822 = function() {
        };
        function configFromStringAndFormat(config) {
          if (config._f === hooks.ISO_8601) {
            configFromISO(config);
            return;
          }
          if (config._f === hooks.RFC_2822) {
            configFromRFC2822(config);
            return;
          }
          config._a = [];
          getParsingFlags(config).empty = true;
          var string = "" + config._i, i, parsedInput, tokens2, token2, skipped, stringLength = string.length, totalParsedInputLength = 0, era, tokenLen;
          tokens2 = expandFormat(config._f, config._locale).match(formattingTokens) || [];
          tokenLen = tokens2.length;
          for (i = 0; i < tokenLen; i++) {
            token2 = tokens2[i];
            parsedInput = (string.match(getParseRegexForToken(token2, config)) || [])[0];
            if (parsedInput) {
              skipped = string.substr(0, string.indexOf(parsedInput));
              if (skipped.length > 0) {
                getParsingFlags(config).unusedInput.push(skipped);
              }
              string = string.slice(
                string.indexOf(parsedInput) + parsedInput.length
              );
              totalParsedInputLength += parsedInput.length;
            }
            if (formatTokenFunctions[token2]) {
              if (parsedInput) {
                getParsingFlags(config).empty = false;
              } else {
                getParsingFlags(config).unusedTokens.push(token2);
              }
              addTimeToArrayFromToken(token2, parsedInput, config);
            } else if (config._strict && !parsedInput) {
              getParsingFlags(config).unusedTokens.push(token2);
            }
          }
          getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
          if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
          }
          if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) {
            getParsingFlags(config).bigHour = void 0;
          }
          getParsingFlags(config).parsedDateParts = config._a.slice(0);
          getParsingFlags(config).meridiem = config._meridiem;
          config._a[HOUR] = meridiemFixWrap(
            config._locale,
            config._a[HOUR],
            config._meridiem
          );
          era = getParsingFlags(config).era;
          if (era !== null) {
            config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
          }
          configFromArray(config);
          checkOverflow(config);
        }
        function meridiemFixWrap(locale2, hour, meridiem2) {
          var isPm;
          if (meridiem2 == null) {
            return hour;
          }
          if (locale2.meridiemHour != null) {
            return locale2.meridiemHour(hour, meridiem2);
          } else if (locale2.isPM != null) {
            isPm = locale2.isPM(meridiem2);
            if (isPm && hour < 12) {
              hour += 12;
            }
            if (!isPm && hour === 12) {
              hour = 0;
            }
            return hour;
          } else {
            return hour;
          }
        }
        function configFromStringAndArray(config) {
          var tempConfig, bestMoment, scoreToBeat, i, currentScore, validFormatFound, bestFormatIsValid = false, configfLen = config._f.length;
          if (configfLen === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = /* @__PURE__ */ new Date(NaN);
            return;
          }
          for (i = 0; i < configfLen; i++) {
            currentScore = 0;
            validFormatFound = false;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
              tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);
            if (isValid(tempConfig)) {
              validFormatFound = true;
            }
            currentScore += getParsingFlags(tempConfig).charsLeftOver;
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
            getParsingFlags(tempConfig).score = currentScore;
            if (!bestFormatIsValid) {
              if (scoreToBeat == null || currentScore < scoreToBeat || validFormatFound) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
                if (validFormatFound) {
                  bestFormatIsValid = true;
                }
              }
            } else {
              if (currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
              }
            }
          }
          extend(config, bestMoment || tempConfig);
        }
        function configFromObject(config) {
          if (config._d) {
            return;
          }
          var i = normalizeObjectUnits(config._i), dayOrDate = i.day === void 0 ? i.date : i.day;
          config._a = map(
            [i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond],
            function(obj) {
              return obj && parseInt(obj, 10);
            }
          );
          configFromArray(config);
        }
        function createFromConfig(config) {
          var res = new Moment(checkOverflow(prepareConfig(config)));
          if (res._nextDay) {
            res.add(1, "d");
            res._nextDay = void 0;
          }
          return res;
        }
        function prepareConfig(config) {
          var input = config._i, format2 = config._f;
          config._locale = config._locale || getLocale(config._l);
          if (input === null || format2 === void 0 && input === "") {
            return createInvalid({ nullInput: true });
          }
          if (typeof input === "string") {
            config._i = input = config._locale.preparse(input);
          }
          if (isMoment(input)) {
            return new Moment(checkOverflow(input));
          } else if (isDate(input)) {
            config._d = input;
          } else if (isArray(format2)) {
            configFromStringAndArray(config);
          } else if (format2) {
            configFromStringAndFormat(config);
          } else {
            configFromInput(config);
          }
          if (!isValid(config)) {
            config._d = null;
          }
          return config;
        }
        function configFromInput(config) {
          var input = config._i;
          if (isUndefined(input)) {
            config._d = new Date(hooks.now());
          } else if (isDate(input)) {
            config._d = new Date(input.valueOf());
          } else if (typeof input === "string") {
            configFromString(config);
          } else if (isArray(input)) {
            config._a = map(input.slice(0), function(obj) {
              return parseInt(obj, 10);
            });
            configFromArray(config);
          } else if (isObject(input)) {
            configFromObject(config);
          } else if (isNumber(input)) {
            config._d = new Date(input);
          } else {
            hooks.createFromInputFallback(config);
          }
        }
        function createLocalOrUTC(input, format2, locale2, strict, isUTC) {
          var c = {};
          if (format2 === true || format2 === false) {
            strict = format2;
            format2 = void 0;
          }
          if (locale2 === true || locale2 === false) {
            strict = locale2;
            locale2 = void 0;
          }
          if (isObject(input) && isObjectEmpty(input) || isArray(input) && input.length === 0) {
            input = void 0;
          }
          c._isAMomentObject = true;
          c._useUTC = c._isUTC = isUTC;
          c._l = locale2;
          c._i = input;
          c._f = format2;
          c._strict = strict;
          return createFromConfig(c);
        }
        function createLocal(input, format2, locale2, strict) {
          return createLocalOrUTC(input, format2, locale2, strict, false);
        }
        var prototypeMin = deprecate(
          "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
          function() {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
              return other < this ? this : other;
            } else {
              return createInvalid();
            }
          }
        ), prototypeMax = deprecate(
          "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
          function() {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
              return other > this ? this : other;
            } else {
              return createInvalid();
            }
          }
        );
        function pickBy(fn, moments) {
          var res, i;
          if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
          }
          if (!moments.length) {
            return createLocal();
          }
          res = moments[0];
          for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
              res = moments[i];
            }
          }
          return res;
        }
        function min() {
          var args = [].slice.call(arguments, 0);
          return pickBy("isBefore", args);
        }
        function max() {
          var args = [].slice.call(arguments, 0);
          return pickBy("isAfter", args);
        }
        var now = function() {
          return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
        };
        var ordering = [
          "year",
          "quarter",
          "month",
          "week",
          "day",
          "hour",
          "minute",
          "second",
          "millisecond"
        ];
        function isDurationValid(m) {
          var key, unitHasDecimal = false, i, orderLen = ordering.length;
          for (key in m) {
            if (hasOwnProp(m, key) && !(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
              return false;
            }
          }
          for (i = 0; i < orderLen; ++i) {
            if (m[ordering[i]]) {
              if (unitHasDecimal) {
                return false;
              }
              if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                unitHasDecimal = true;
              }
            }
          }
          return true;
        }
        function isValid$1() {
          return this._isValid;
        }
        function createInvalid$1() {
          return createDuration(NaN);
        }
        function Duration(duration) {
          var normalizedInput = normalizeObjectUnits(duration), years2 = normalizedInput.year || 0, quarters = normalizedInput.quarter || 0, months2 = normalizedInput.month || 0, weeks2 = normalizedInput.week || normalizedInput.isoWeek || 0, days2 = normalizedInput.day || 0, hours2 = normalizedInput.hour || 0, minutes2 = normalizedInput.minute || 0, seconds2 = normalizedInput.second || 0, milliseconds2 = normalizedInput.millisecond || 0;
          this._isValid = isDurationValid(normalizedInput);
          this._milliseconds = +milliseconds2 + seconds2 * 1e3 + // 1000
          minutes2 * 6e4 + // 1000 * 60
          hours2 * 1e3 * 60 * 60;
          this._days = +days2 + weeks2 * 7;
          this._months = +months2 + quarters * 3 + years2 * 12;
          this._data = {};
          this._locale = getLocale();
          this._bubble();
        }
        function isDuration(obj) {
          return obj instanceof Duration;
        }
        function absRound(number) {
          if (number < 0) {
            return Math.round(-1 * number) * -1;
          } else {
            return Math.round(number);
          }
        }
        function compareArrays(array1, array2, dontConvert) {
          var len = Math.min(array1.length, array2.length), lengthDiff = Math.abs(array1.length - array2.length), diffs = 0, i;
          for (i = 0; i < len; i++) {
            if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) {
              diffs++;
            }
          }
          return diffs + lengthDiff;
        }
        function offset(token2, separator) {
          addFormatToken(token2, 0, 0, function() {
            var offset2 = this.utcOffset(), sign2 = "+";
            if (offset2 < 0) {
              offset2 = -offset2;
              sign2 = "-";
            }
            return sign2 + zeroFill(~~(offset2 / 60), 2) + separator + zeroFill(~~offset2 % 60, 2);
          });
        }
        offset("Z", ":");
        offset("ZZ", "");
        addRegexToken("Z", matchShortOffset);
        addRegexToken("ZZ", matchShortOffset);
        addParseToken(["Z", "ZZ"], function(input, array, config) {
          config._useUTC = true;
          config._tzm = offsetFromString(matchShortOffset, input);
        });
        var chunkOffset = /([\+\-]|\d\d)/gi;
        function offsetFromString(matcher, string) {
          var matches = (string || "").match(matcher), chunk, parts, minutes2;
          if (matches === null) {
            return null;
          }
          chunk = matches[matches.length - 1] || [];
          parts = (chunk + "").match(chunkOffset) || ["-", 0, 0];
          minutes2 = +(parts[1] * 60) + toInt(parts[2]);
          return minutes2 === 0 ? 0 : parts[0] === "+" ? minutes2 : -minutes2;
        }
        function cloneWithOffset(input, model) {
          var res, diff2;
          if (model._isUTC) {
            res = model.clone();
            diff2 = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
            res._d.setTime(res._d.valueOf() + diff2);
            hooks.updateOffset(res, false);
            return res;
          } else {
            return createLocal(input).local();
          }
        }
        function getDateOffset(m) {
          return -Math.round(m._d.getTimezoneOffset());
        }
        hooks.updateOffset = function() {
        };
        function getSetOffset(input, keepLocalTime, keepMinutes) {
          var offset2 = this._offset || 0, localAdjust;
          if (!this.isValid()) {
            return input != null ? this : NaN;
          }
          if (input != null) {
            if (typeof input === "string") {
              input = offsetFromString(matchShortOffset, input);
              if (input === null) {
                return this;
              }
            } else if (Math.abs(input) < 16 && !keepMinutes) {
              input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
              localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
              this.add(localAdjust, "m");
            }
            if (offset2 !== input) {
              if (!keepLocalTime || this._changeInProgress) {
                addSubtract(
                  this,
                  createDuration(input - offset2, "m"),
                  1,
                  false
                );
              } else if (!this._changeInProgress) {
                this._changeInProgress = true;
                hooks.updateOffset(this, true);
                this._changeInProgress = null;
              }
            }
            return this;
          } else {
            return this._isUTC ? offset2 : getDateOffset(this);
          }
        }
        function getSetZone(input, keepLocalTime) {
          if (input != null) {
            if (typeof input !== "string") {
              input = -input;
            }
            this.utcOffset(input, keepLocalTime);
            return this;
          } else {
            return -this.utcOffset();
          }
        }
        function setOffsetToUTC(keepLocalTime) {
          return this.utcOffset(0, keepLocalTime);
        }
        function setOffsetToLocal(keepLocalTime) {
          if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;
            if (keepLocalTime) {
              this.subtract(getDateOffset(this), "m");
            }
          }
          return this;
        }
        function setOffsetToParsedOffset() {
          if (this._tzm != null) {
            this.utcOffset(this._tzm, false, true);
          } else if (typeof this._i === "string") {
            var tZone = offsetFromString(matchOffset, this._i);
            if (tZone != null) {
              this.utcOffset(tZone);
            } else {
              this.utcOffset(0, true);
            }
          }
          return this;
        }
        function hasAlignedHourOffset(input) {
          if (!this.isValid()) {
            return false;
          }
          input = input ? createLocal(input).utcOffset() : 0;
          return (this.utcOffset() - input) % 60 === 0;
        }
        function isDaylightSavingTime() {
          return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
        }
        function isDaylightSavingTimeShifted() {
          if (!isUndefined(this._isDSTShifted)) {
            return this._isDSTShifted;
          }
          var c = {}, other;
          copyConfig(c, this);
          c = prepareConfig(c);
          if (c._a) {
            other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
            this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
          } else {
            this._isDSTShifted = false;
          }
          return this._isDSTShifted;
        }
        function isLocal() {
          return this.isValid() ? !this._isUTC : false;
        }
        function isUtcOffset() {
          return this.isValid() ? this._isUTC : false;
        }
        function isUtc() {
          return this.isValid() ? this._isUTC && this._offset === 0 : false;
        }
        var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
        function createDuration(input, key) {
          var duration = input, match = null, sign2, ret, diffRes;
          if (isDuration(input)) {
            duration = {
              ms: input._milliseconds,
              d: input._days,
              M: input._months
            };
          } else if (isNumber(input) || !isNaN(+input)) {
            duration = {};
            if (key) {
              duration[key] = +input;
            } else {
              duration.milliseconds = +input;
            }
          } else if (match = aspNetRegex.exec(input)) {
            sign2 = match[1] === "-" ? -1 : 1;
            duration = {
              y: 0,
              d: toInt(match[DATE]) * sign2,
              h: toInt(match[HOUR]) * sign2,
              m: toInt(match[MINUTE]) * sign2,
              s: toInt(match[SECOND]) * sign2,
              ms: toInt(absRound(match[MILLISECOND] * 1e3)) * sign2
              // the millisecond decimal point is included in the match
            };
          } else if (match = isoRegex.exec(input)) {
            sign2 = match[1] === "-" ? -1 : 1;
            duration = {
              y: parseIso(match[2], sign2),
              M: parseIso(match[3], sign2),
              w: parseIso(match[4], sign2),
              d: parseIso(match[5], sign2),
              h: parseIso(match[6], sign2),
              m: parseIso(match[7], sign2),
              s: parseIso(match[8], sign2)
            };
          } else if (duration == null) {
            duration = {};
          } else if (typeof duration === "object" && ("from" in duration || "to" in duration)) {
            diffRes = momentsDifference(
              createLocal(duration.from),
              createLocal(duration.to)
            );
            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
          }
          ret = new Duration(duration);
          if (isDuration(input) && hasOwnProp(input, "_locale")) {
            ret._locale = input._locale;
          }
          if (isDuration(input) && hasOwnProp(input, "_isValid")) {
            ret._isValid = input._isValid;
          }
          return ret;
        }
        createDuration.fn = Duration.prototype;
        createDuration.invalid = createInvalid$1;
        function parseIso(inp, sign2) {
          var res = inp && parseFloat(inp.replace(",", "."));
          return (isNaN(res) ? 0 : res) * sign2;
        }
        function positiveMomentsDifference(base, other) {
          var res = {};
          res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
          if (base.clone().add(res.months, "M").isAfter(other)) {
            --res.months;
          }
          res.milliseconds = +other - +base.clone().add(res.months, "M");
          return res;
        }
        function momentsDifference(base, other) {
          var res;
          if (!(base.isValid() && other.isValid())) {
            return { milliseconds: 0, months: 0 };
          }
          other = cloneWithOffset(other, base);
          if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
          } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
          }
          return res;
        }
        function createAdder(direction, name) {
          return function(val, period) {
            var dur, tmp;
            if (period !== null && !isNaN(+period)) {
              deprecateSimple(
                name,
                "moment()." + name + "(period, number) is deprecated. Please use moment()." + name + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
              );
              tmp = val;
              val = period;
              period = tmp;
            }
            dur = createDuration(val, period);
            addSubtract(this, dur, direction);
            return this;
          };
        }
        function addSubtract(mom, duration, isAdding, updateOffset) {
          var milliseconds2 = duration._milliseconds, days2 = absRound(duration._days), months2 = absRound(duration._months);
          if (!mom.isValid()) {
            return;
          }
          updateOffset = updateOffset == null ? true : updateOffset;
          if (months2) {
            setMonth(mom, get(mom, "Month") + months2 * isAdding);
          }
          if (days2) {
            set$1(mom, "Date", get(mom, "Date") + days2 * isAdding);
          }
          if (milliseconds2) {
            mom._d.setTime(mom._d.valueOf() + milliseconds2 * isAdding);
          }
          if (updateOffset) {
            hooks.updateOffset(mom, days2 || months2);
          }
        }
        var add = createAdder(1, "add"), subtract = createAdder(-1, "subtract");
        function isString(input) {
          return typeof input === "string" || input instanceof String;
        }
        function isMomentInput(input) {
          return isMoment(input) || isDate(input) || isString(input) || isNumber(input) || isNumberOrStringArray(input) || isMomentInputObject(input) || input === null || input === void 0;
        }
        function isMomentInputObject(input) {
          var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties = [
            "years",
            "year",
            "y",
            "months",
            "month",
            "M",
            "days",
            "day",
            "d",
            "dates",
            "date",
            "D",
            "hours",
            "hour",
            "h",
            "minutes",
            "minute",
            "m",
            "seconds",
            "second",
            "s",
            "milliseconds",
            "millisecond",
            "ms"
          ], i, property, propertyLen = properties.length;
          for (i = 0; i < propertyLen; i += 1) {
            property = properties[i];
            propertyTest = propertyTest || hasOwnProp(input, property);
          }
          return objectTest && propertyTest;
        }
        function isNumberOrStringArray(input) {
          var arrayTest = isArray(input), dataTypeTest = false;
          if (arrayTest) {
            dataTypeTest = input.filter(function(item) {
              return !isNumber(item) && isString(input);
            }).length === 0;
          }
          return arrayTest && dataTypeTest;
        }
        function isCalendarSpec(input) {
          var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties = [
            "sameDay",
            "nextDay",
            "lastDay",
            "nextWeek",
            "lastWeek",
            "sameElse"
          ], i, property;
          for (i = 0; i < properties.length; i += 1) {
            property = properties[i];
            propertyTest = propertyTest || hasOwnProp(input, property);
          }
          return objectTest && propertyTest;
        }
        function getCalendarFormat(myMoment, now2) {
          var diff2 = myMoment.diff(now2, "days", true);
          return diff2 < -6 ? "sameElse" : diff2 < -1 ? "lastWeek" : diff2 < 0 ? "lastDay" : diff2 < 1 ? "sameDay" : diff2 < 2 ? "nextDay" : diff2 < 7 ? "nextWeek" : "sameElse";
        }
        function calendar$1(time, formats) {
          if (arguments.length === 1) {
            if (!arguments[0]) {
              time = void 0;
              formats = void 0;
            } else if (isMomentInput(arguments[0])) {
              time = arguments[0];
              formats = void 0;
            } else if (isCalendarSpec(arguments[0])) {
              formats = arguments[0];
              time = void 0;
            }
          }
          var now2 = time || createLocal(), sod = cloneWithOffset(now2, this).startOf("day"), format2 = hooks.calendarFormat(this, sod) || "sameElse", output = formats && (isFunction(formats[format2]) ? formats[format2].call(this, now2) : formats[format2]);
          return this.format(
            output || this.localeData().calendar(format2, this, createLocal(now2))
          );
        }
        function clone() {
          return new Moment(this);
        }
        function isAfter(input, units) {
          var localInput = isMoment(input) ? input : createLocal(input);
          if (!(this.isValid() && localInput.isValid())) {
            return false;
          }
          units = normalizeUnits(units) || "millisecond";
          if (units === "millisecond") {
            return this.valueOf() > localInput.valueOf();
          } else {
            return localInput.valueOf() < this.clone().startOf(units).valueOf();
          }
        }
        function isBefore(input, units) {
          var localInput = isMoment(input) ? input : createLocal(input);
          if (!(this.isValid() && localInput.isValid())) {
            return false;
          }
          units = normalizeUnits(units) || "millisecond";
          if (units === "millisecond") {
            return this.valueOf() < localInput.valueOf();
          } else {
            return this.clone().endOf(units).valueOf() < localInput.valueOf();
          }
        }
        function isBetween(from2, to2, units, inclusivity) {
          var localFrom = isMoment(from2) ? from2 : createLocal(from2), localTo = isMoment(to2) ? to2 : createLocal(to2);
          if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
            return false;
          }
          inclusivity = inclusivity || "()";
          return (inclusivity[0] === "(" ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) && (inclusivity[1] === ")" ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
        }
        function isSame(input, units) {
          var localInput = isMoment(input) ? input : createLocal(input), inputMs;
          if (!(this.isValid() && localInput.isValid())) {
            return false;
          }
          units = normalizeUnits(units) || "millisecond";
          if (units === "millisecond") {
            return this.valueOf() === localInput.valueOf();
          } else {
            inputMs = localInput.valueOf();
            return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
          }
        }
        function isSameOrAfter(input, units) {
          return this.isSame(input, units) || this.isAfter(input, units);
        }
        function isSameOrBefore(input, units) {
          return this.isSame(input, units) || this.isBefore(input, units);
        }
        function diff(input, units, asFloat) {
          var that, zoneDelta, output;
          if (!this.isValid()) {
            return NaN;
          }
          that = cloneWithOffset(input, this);
          if (!that.isValid()) {
            return NaN;
          }
          zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
          units = normalizeUnits(units);
          switch (units) {
            case "year":
              output = monthDiff(this, that) / 12;
              break;
            case "month":
              output = monthDiff(this, that);
              break;
            case "quarter":
              output = monthDiff(this, that) / 3;
              break;
            case "second":
              output = (this - that) / 1e3;
              break;
            // 1000
            case "minute":
              output = (this - that) / 6e4;
              break;
            // 1000 * 60
            case "hour":
              output = (this - that) / 36e5;
              break;
            // 1000 * 60 * 60
            case "day":
              output = (this - that - zoneDelta) / 864e5;
              break;
            // 1000 * 60 * 60 * 24, negate dst
            case "week":
              output = (this - that - zoneDelta) / 6048e5;
              break;
            // 1000 * 60 * 60 * 24 * 7, negate dst
            default:
              output = this - that;
          }
          return asFloat ? output : absFloor(output);
        }
        function monthDiff(a, b) {
          if (a.date() < b.date()) {
            return -monthDiff(b, a);
          }
          var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()), anchor = a.clone().add(wholeMonthDiff, "months"), anchor2, adjust;
          if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, "months");
            adjust = (b - anchor) / (anchor - anchor2);
          } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, "months");
            adjust = (b - anchor) / (anchor2 - anchor);
          }
          return -(wholeMonthDiff + adjust) || 0;
        }
        hooks.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
        hooks.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
        function toString() {
          return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
        }
        function toISOString(keepOffset) {
          if (!this.isValid()) {
            return null;
          }
          var utc = keepOffset !== true, m = utc ? this.clone().utc() : this;
          if (m.year() < 0 || m.year() > 9999) {
            return formatMoment(
              m,
              utc ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
            );
          }
          if (isFunction(Date.prototype.toISOString)) {
            if (utc) {
              return this.toDate().toISOString();
            } else {
              return new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", formatMoment(m, "Z"));
            }
          }
          return formatMoment(
            m,
            utc ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
          );
        }
        function inspect() {
          if (!this.isValid()) {
            return "moment.invalid(/* " + this._i + " */)";
          }
          var func = "moment", zone = "", prefix, year, datetime, suffix;
          if (!this.isLocal()) {
            func = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone";
            zone = "Z";
          }
          prefix = "[" + func + '("]';
          year = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY";
          datetime = "-MM-DD[T]HH:mm:ss.SSS";
          suffix = zone + '[")]';
          return this.format(prefix + year + datetime + suffix);
        }
        function format(inputString) {
          if (!inputString) {
            inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
          }
          var output = formatMoment(this, inputString);
          return this.localeData().postformat(output);
        }
        function from(time, withoutSuffix) {
          if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
            return createDuration({ to: this, from: time }).locale(this.locale()).humanize(!withoutSuffix);
          } else {
            return this.localeData().invalidDate();
          }
        }
        function fromNow(withoutSuffix) {
          return this.from(createLocal(), withoutSuffix);
        }
        function to(time, withoutSuffix) {
          if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
            return createDuration({ from: this, to: time }).locale(this.locale()).humanize(!withoutSuffix);
          } else {
            return this.localeData().invalidDate();
          }
        }
        function toNow(withoutSuffix) {
          return this.to(createLocal(), withoutSuffix);
        }
        function locale(key) {
          var newLocaleData;
          if (key === void 0) {
            return this._locale._abbr;
          } else {
            newLocaleData = getLocale(key);
            if (newLocaleData != null) {
              this._locale = newLocaleData;
            }
            return this;
          }
        }
        var lang = deprecate(
          "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
          function(key) {
            if (key === void 0) {
              return this.localeData();
            } else {
              return this.locale(key);
            }
          }
        );
        function localeData() {
          return this._locale;
        }
        var MS_PER_SECOND = 1e3, MS_PER_MINUTE = 60 * MS_PER_SECOND, MS_PER_HOUR = 60 * MS_PER_MINUTE, MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;
        function mod$1(dividend, divisor) {
          return (dividend % divisor + divisor) % divisor;
        }
        function localStartOfDate(y, m, d) {
          if (y < 100 && y >= 0) {
            return new Date(y + 400, m, d) - MS_PER_400_YEARS;
          } else {
            return new Date(y, m, d).valueOf();
          }
        }
        function utcStartOfDate(y, m, d) {
          if (y < 100 && y >= 0) {
            return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
          } else {
            return Date.UTC(y, m, d);
          }
        }
        function startOf(units) {
          var time, startOfDate;
          units = normalizeUnits(units);
          if (units === void 0 || units === "millisecond" || !this.isValid()) {
            return this;
          }
          startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
          switch (units) {
            case "year":
              time = startOfDate(this.year(), 0, 1);
              break;
            case "quarter":
              time = startOfDate(
                this.year(),
                this.month() - this.month() % 3,
                1
              );
              break;
            case "month":
              time = startOfDate(this.year(), this.month(), 1);
              break;
            case "week":
              time = startOfDate(
                this.year(),
                this.month(),
                this.date() - this.weekday()
              );
              break;
            case "isoWeek":
              time = startOfDate(
                this.year(),
                this.month(),
                this.date() - (this.isoWeekday() - 1)
              );
              break;
            case "day":
            case "date":
              time = startOfDate(this.year(), this.month(), this.date());
              break;
            case "hour":
              time = this._d.valueOf();
              time -= mod$1(
                time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
                MS_PER_HOUR
              );
              break;
            case "minute":
              time = this._d.valueOf();
              time -= mod$1(time, MS_PER_MINUTE);
              break;
            case "second":
              time = this._d.valueOf();
              time -= mod$1(time, MS_PER_SECOND);
              break;
          }
          this._d.setTime(time);
          hooks.updateOffset(this, true);
          return this;
        }
        function endOf(units) {
          var time, startOfDate;
          units = normalizeUnits(units);
          if (units === void 0 || units === "millisecond" || !this.isValid()) {
            return this;
          }
          startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
          switch (units) {
            case "year":
              time = startOfDate(this.year() + 1, 0, 1) - 1;
              break;
            case "quarter":
              time = startOfDate(
                this.year(),
                this.month() - this.month() % 3 + 3,
                1
              ) - 1;
              break;
            case "month":
              time = startOfDate(this.year(), this.month() + 1, 1) - 1;
              break;
            case "week":
              time = startOfDate(
                this.year(),
                this.month(),
                this.date() - this.weekday() + 7
              ) - 1;
              break;
            case "isoWeek":
              time = startOfDate(
                this.year(),
                this.month(),
                this.date() - (this.isoWeekday() - 1) + 7
              ) - 1;
              break;
            case "day":
            case "date":
              time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
              break;
            case "hour":
              time = this._d.valueOf();
              time += MS_PER_HOUR - mod$1(
                time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
                MS_PER_HOUR
              ) - 1;
              break;
            case "minute":
              time = this._d.valueOf();
              time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
              break;
            case "second":
              time = this._d.valueOf();
              time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
              break;
          }
          this._d.setTime(time);
          hooks.updateOffset(this, true);
          return this;
        }
        function valueOf() {
          return this._d.valueOf() - (this._offset || 0) * 6e4;
        }
        function unix() {
          return Math.floor(this.valueOf() / 1e3);
        }
        function toDate() {
          return new Date(this.valueOf());
        }
        function toArray() {
          var m = this;
          return [
            m.year(),
            m.month(),
            m.date(),
            m.hour(),
            m.minute(),
            m.second(),
            m.millisecond()
          ];
        }
        function toObject() {
          var m = this;
          return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds()
          };
        }
        function toJSON() {
          return this.isValid() ? this.toISOString() : null;
        }
        function isValid$2() {
          return isValid(this);
        }
        function parsingFlags() {
          return extend({}, getParsingFlags(this));
        }
        function invalidAt() {
          return getParsingFlags(this).overflow;
        }
        function creationData() {
          return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
          };
        }
        addFormatToken("N", 0, 0, "eraAbbr");
        addFormatToken("NN", 0, 0, "eraAbbr");
        addFormatToken("NNN", 0, 0, "eraAbbr");
        addFormatToken("NNNN", 0, 0, "eraName");
        addFormatToken("NNNNN", 0, 0, "eraNarrow");
        addFormatToken("y", ["y", 1], "yo", "eraYear");
        addFormatToken("y", ["yy", 2], 0, "eraYear");
        addFormatToken("y", ["yyy", 3], 0, "eraYear");
        addFormatToken("y", ["yyyy", 4], 0, "eraYear");
        addRegexToken("N", matchEraAbbr);
        addRegexToken("NN", matchEraAbbr);
        addRegexToken("NNN", matchEraAbbr);
        addRegexToken("NNNN", matchEraName);
        addRegexToken("NNNNN", matchEraNarrow);
        addParseToken(
          ["N", "NN", "NNN", "NNNN", "NNNNN"],
          function(input, array, config, token2) {
            var era = config._locale.erasParse(input, token2, config._strict);
            if (era) {
              getParsingFlags(config).era = era;
            } else {
              getParsingFlags(config).invalidEra = input;
            }
          }
        );
        addRegexToken("y", matchUnsigned);
        addRegexToken("yy", matchUnsigned);
        addRegexToken("yyy", matchUnsigned);
        addRegexToken("yyyy", matchUnsigned);
        addRegexToken("yo", matchEraYearOrdinal);
        addParseToken(["y", "yy", "yyy", "yyyy"], YEAR);
        addParseToken(["yo"], function(input, array, config, token2) {
          var match;
          if (config._locale._eraYearOrdinalRegex) {
            match = input.match(config._locale._eraYearOrdinalRegex);
          }
          if (config._locale.eraYearOrdinalParse) {
            array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
          } else {
            array[YEAR] = parseInt(input, 10);
          }
        });
        function localeEras(m, format2) {
          var i, l, date, eras = this._eras || getLocale("en")._eras;
          for (i = 0, l = eras.length; i < l; ++i) {
            switch (typeof eras[i].since) {
              case "string":
                date = hooks(eras[i].since).startOf("day");
                eras[i].since = date.valueOf();
                break;
            }
            switch (typeof eras[i].until) {
              case "undefined":
                eras[i].until = Infinity;
                break;
              case "string":
                date = hooks(eras[i].until).startOf("day").valueOf();
                eras[i].until = date.valueOf();
                break;
            }
          }
          return eras;
        }
        function localeErasParse(eraName, format2, strict) {
          var i, l, eras = this.eras(), name, abbr, narrow;
          eraName = eraName.toUpperCase();
          for (i = 0, l = eras.length; i < l; ++i) {
            name = eras[i].name.toUpperCase();
            abbr = eras[i].abbr.toUpperCase();
            narrow = eras[i].narrow.toUpperCase();
            if (strict) {
              switch (format2) {
                case "N":
                case "NN":
                case "NNN":
                  if (abbr === eraName) {
                    return eras[i];
                  }
                  break;
                case "NNNN":
                  if (name === eraName) {
                    return eras[i];
                  }
                  break;
                case "NNNNN":
                  if (narrow === eraName) {
                    return eras[i];
                  }
                  break;
              }
            } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
              return eras[i];
            }
          }
        }
        function localeErasConvertYear(era, year) {
          var dir = era.since <= era.until ? 1 : -1;
          if (year === void 0) {
            return hooks(era.since).year();
          } else {
            return hooks(era.since).year() + (year - era.offset) * dir;
          }
        }
        function getEraName() {
          var i, l, val, eras = this.localeData().eras();
          for (i = 0, l = eras.length; i < l; ++i) {
            val = this.clone().startOf("day").valueOf();
            if (eras[i].since <= val && val <= eras[i].until) {
              return eras[i].name;
            }
            if (eras[i].until <= val && val <= eras[i].since) {
              return eras[i].name;
            }
          }
          return "";
        }
        function getEraNarrow() {
          var i, l, val, eras = this.localeData().eras();
          for (i = 0, l = eras.length; i < l; ++i) {
            val = this.clone().startOf("day").valueOf();
            if (eras[i].since <= val && val <= eras[i].until) {
              return eras[i].narrow;
            }
            if (eras[i].until <= val && val <= eras[i].since) {
              return eras[i].narrow;
            }
          }
          return "";
        }
        function getEraAbbr() {
          var i, l, val, eras = this.localeData().eras();
          for (i = 0, l = eras.length; i < l; ++i) {
            val = this.clone().startOf("day").valueOf();
            if (eras[i].since <= val && val <= eras[i].until) {
              return eras[i].abbr;
            }
            if (eras[i].until <= val && val <= eras[i].since) {
              return eras[i].abbr;
            }
          }
          return "";
        }
        function getEraYear() {
          var i, l, dir, val, eras = this.localeData().eras();
          for (i = 0, l = eras.length; i < l; ++i) {
            dir = eras[i].since <= eras[i].until ? 1 : -1;
            val = this.clone().startOf("day").valueOf();
            if (eras[i].since <= val && val <= eras[i].until || eras[i].until <= val && val <= eras[i].since) {
              return (this.year() - hooks(eras[i].since).year()) * dir + eras[i].offset;
            }
          }
          return this.year();
        }
        function erasNameRegex(isStrict) {
          if (!hasOwnProp(this, "_erasNameRegex")) {
            computeErasParse.call(this);
          }
          return isStrict ? this._erasNameRegex : this._erasRegex;
        }
        function erasAbbrRegex(isStrict) {
          if (!hasOwnProp(this, "_erasAbbrRegex")) {
            computeErasParse.call(this);
          }
          return isStrict ? this._erasAbbrRegex : this._erasRegex;
        }
        function erasNarrowRegex(isStrict) {
          if (!hasOwnProp(this, "_erasNarrowRegex")) {
            computeErasParse.call(this);
          }
          return isStrict ? this._erasNarrowRegex : this._erasRegex;
        }
        function matchEraAbbr(isStrict, locale2) {
          return locale2.erasAbbrRegex(isStrict);
        }
        function matchEraName(isStrict, locale2) {
          return locale2.erasNameRegex(isStrict);
        }
        function matchEraNarrow(isStrict, locale2) {
          return locale2.erasNarrowRegex(isStrict);
        }
        function matchEraYearOrdinal(isStrict, locale2) {
          return locale2._eraYearOrdinalRegex || matchUnsigned;
        }
        function computeErasParse() {
          var abbrPieces = [], namePieces = [], narrowPieces = [], mixedPieces = [], i, l, erasName, erasAbbr, erasNarrow, eras = this.eras();
          for (i = 0, l = eras.length; i < l; ++i) {
            erasName = regexEscape(eras[i].name);
            erasAbbr = regexEscape(eras[i].abbr);
            erasNarrow = regexEscape(eras[i].narrow);
            namePieces.push(erasName);
            abbrPieces.push(erasAbbr);
            narrowPieces.push(erasNarrow);
            mixedPieces.push(erasName);
            mixedPieces.push(erasAbbr);
            mixedPieces.push(erasNarrow);
          }
          this._erasRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
          this._erasNameRegex = new RegExp("^(" + namePieces.join("|") + ")", "i");
          this._erasAbbrRegex = new RegExp("^(" + abbrPieces.join("|") + ")", "i");
          this._erasNarrowRegex = new RegExp(
            "^(" + narrowPieces.join("|") + ")",
            "i"
          );
        }
        addFormatToken(0, ["gg", 2], 0, function() {
          return this.weekYear() % 100;
        });
        addFormatToken(0, ["GG", 2], 0, function() {
          return this.isoWeekYear() % 100;
        });
        function addWeekYearFormatToken(token2, getter) {
          addFormatToken(0, [token2, token2.length], 0, getter);
        }
        addWeekYearFormatToken("gggg", "weekYear");
        addWeekYearFormatToken("ggggg", "weekYear");
        addWeekYearFormatToken("GGGG", "isoWeekYear");
        addWeekYearFormatToken("GGGGG", "isoWeekYear");
        addRegexToken("G", matchSigned);
        addRegexToken("g", matchSigned);
        addRegexToken("GG", match1to2, match2);
        addRegexToken("gg", match1to2, match2);
        addRegexToken("GGGG", match1to4, match4);
        addRegexToken("gggg", match1to4, match4);
        addRegexToken("GGGGG", match1to6, match6);
        addRegexToken("ggggg", match1to6, match6);
        addWeekParseToken(
          ["gggg", "ggggg", "GGGG", "GGGGG"],
          function(input, week, config, token2) {
            week[token2.substr(0, 2)] = toInt(input);
          }
        );
        addWeekParseToken(["gg", "GG"], function(input, week, config, token2) {
          week[token2] = hooks.parseTwoDigitYear(input);
        });
        function getSetWeekYear(input) {
          return getSetWeekYearHelper.call(
            this,
            input,
            this.week(),
            this.weekday() + this.localeData()._week.dow,
            this.localeData()._week.dow,
            this.localeData()._week.doy
          );
        }
        function getSetISOWeekYear(input) {
          return getSetWeekYearHelper.call(
            this,
            input,
            this.isoWeek(),
            this.isoWeekday(),
            1,
            4
          );
        }
        function getISOWeeksInYear() {
          return weeksInYear(this.year(), 1, 4);
        }
        function getISOWeeksInISOWeekYear() {
          return weeksInYear(this.isoWeekYear(), 1, 4);
        }
        function getWeeksInYear() {
          var weekInfo = this.localeData()._week;
          return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
        }
        function getWeeksInWeekYear() {
          var weekInfo = this.localeData()._week;
          return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
        }
        function getSetWeekYearHelper(input, week, weekday, dow, doy) {
          var weeksTarget;
          if (input == null) {
            return weekOfYear(this, dow, doy).year;
          } else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) {
              week = weeksTarget;
            }
            return setWeekAll.call(this, input, week, weekday, dow, doy);
          }
        }
        function setWeekAll(weekYear, week, weekday, dow, doy) {
          var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy), date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
          this.year(date.getUTCFullYear());
          this.month(date.getUTCMonth());
          this.date(date.getUTCDate());
          return this;
        }
        addFormatToken("Q", 0, "Qo", "quarter");
        addRegexToken("Q", match1);
        addParseToken("Q", function(input, array) {
          array[MONTH] = (toInt(input) - 1) * 3;
        });
        function getSetQuarter(input) {
          return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
        }
        addFormatToken("D", ["DD", 2], "Do", "date");
        addRegexToken("D", match1to2, match1to2NoLeadingZero);
        addRegexToken("DD", match1to2, match2);
        addRegexToken("Do", function(isStrict, locale2) {
          return isStrict ? locale2._dayOfMonthOrdinalParse || locale2._ordinalParse : locale2._dayOfMonthOrdinalParseLenient;
        });
        addParseToken(["D", "DD"], DATE);
        addParseToken("Do", function(input, array) {
          array[DATE] = toInt(input.match(match1to2)[0]);
        });
        var getSetDayOfMonth = makeGetSet("Date", true);
        addFormatToken("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
        addRegexToken("DDD", match1to3);
        addRegexToken("DDDD", match3);
        addParseToken(["DDD", "DDDD"], function(input, array, config) {
          config._dayOfYear = toInt(input);
        });
        function getSetDayOfYear(input) {
          var dayOfYear = Math.round(
            (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
          ) + 1;
          return input == null ? dayOfYear : this.add(input - dayOfYear, "d");
        }
        addFormatToken("m", ["mm", 2], 0, "minute");
        addRegexToken("m", match1to2, match1to2HasZero);
        addRegexToken("mm", match1to2, match2);
        addParseToken(["m", "mm"], MINUTE);
        var getSetMinute = makeGetSet("Minutes", false);
        addFormatToken("s", ["ss", 2], 0, "second");
        addRegexToken("s", match1to2, match1to2HasZero);
        addRegexToken("ss", match1to2, match2);
        addParseToken(["s", "ss"], SECOND);
        var getSetSecond = makeGetSet("Seconds", false);
        addFormatToken("S", 0, 0, function() {
          return ~~(this.millisecond() / 100);
        });
        addFormatToken(0, ["SS", 2], 0, function() {
          return ~~(this.millisecond() / 10);
        });
        addFormatToken(0, ["SSS", 3], 0, "millisecond");
        addFormatToken(0, ["SSSS", 4], 0, function() {
          return this.millisecond() * 10;
        });
        addFormatToken(0, ["SSSSS", 5], 0, function() {
          return this.millisecond() * 100;
        });
        addFormatToken(0, ["SSSSSS", 6], 0, function() {
          return this.millisecond() * 1e3;
        });
        addFormatToken(0, ["SSSSSSS", 7], 0, function() {
          return this.millisecond() * 1e4;
        });
        addFormatToken(0, ["SSSSSSSS", 8], 0, function() {
          return this.millisecond() * 1e5;
        });
        addFormatToken(0, ["SSSSSSSSS", 9], 0, function() {
          return this.millisecond() * 1e6;
        });
        addRegexToken("S", match1to3, match1);
        addRegexToken("SS", match1to3, match2);
        addRegexToken("SSS", match1to3, match3);
        var token, getSetMillisecond;
        for (token = "SSSS"; token.length <= 9; token += "S") {
          addRegexToken(token, matchUnsigned);
        }
        function parseMs(input, array) {
          array[MILLISECOND] = toInt(("0." + input) * 1e3);
        }
        for (token = "S"; token.length <= 9; token += "S") {
          addParseToken(token, parseMs);
        }
        getSetMillisecond = makeGetSet("Milliseconds", false);
        addFormatToken("z", 0, 0, "zoneAbbr");
        addFormatToken("zz", 0, 0, "zoneName");
        function getZoneAbbr() {
          return this._isUTC ? "UTC" : "";
        }
        function getZoneName() {
          return this._isUTC ? "Coordinated Universal Time" : "";
        }
        var proto = Moment.prototype;
        proto.add = add;
        proto.calendar = calendar$1;
        proto.clone = clone;
        proto.diff = diff;
        proto.endOf = endOf;
        proto.format = format;
        proto.from = from;
        proto.fromNow = fromNow;
        proto.to = to;
        proto.toNow = toNow;
        proto.get = stringGet;
        proto.invalidAt = invalidAt;
        proto.isAfter = isAfter;
        proto.isBefore = isBefore;
        proto.isBetween = isBetween;
        proto.isSame = isSame;
        proto.isSameOrAfter = isSameOrAfter;
        proto.isSameOrBefore = isSameOrBefore;
        proto.isValid = isValid$2;
        proto.lang = lang;
        proto.locale = locale;
        proto.localeData = localeData;
        proto.max = prototypeMax;
        proto.min = prototypeMin;
        proto.parsingFlags = parsingFlags;
        proto.set = stringSet;
        proto.startOf = startOf;
        proto.subtract = subtract;
        proto.toArray = toArray;
        proto.toObject = toObject;
        proto.toDate = toDate;
        proto.toISOString = toISOString;
        proto.inspect = inspect;
        if (typeof Symbol !== "undefined" && Symbol.for != null) {
          proto[Symbol.for("nodejs.util.inspect.custom")] = function() {
            return "Moment<" + this.format() + ">";
          };
        }
        proto.toJSON = toJSON;
        proto.toString = toString;
        proto.unix = unix;
        proto.valueOf = valueOf;
        proto.creationData = creationData;
        proto.eraName = getEraName;
        proto.eraNarrow = getEraNarrow;
        proto.eraAbbr = getEraAbbr;
        proto.eraYear = getEraYear;
        proto.year = getSetYear;
        proto.isLeapYear = getIsLeapYear;
        proto.weekYear = getSetWeekYear;
        proto.isoWeekYear = getSetISOWeekYear;
        proto.quarter = proto.quarters = getSetQuarter;
        proto.month = getSetMonth;
        proto.daysInMonth = getDaysInMonth;
        proto.week = proto.weeks = getSetWeek;
        proto.isoWeek = proto.isoWeeks = getSetISOWeek;
        proto.weeksInYear = getWeeksInYear;
        proto.weeksInWeekYear = getWeeksInWeekYear;
        proto.isoWeeksInYear = getISOWeeksInYear;
        proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
        proto.date = getSetDayOfMonth;
        proto.day = proto.days = getSetDayOfWeek;
        proto.weekday = getSetLocaleDayOfWeek;
        proto.isoWeekday = getSetISODayOfWeek;
        proto.dayOfYear = getSetDayOfYear;
        proto.hour = proto.hours = getSetHour;
        proto.minute = proto.minutes = getSetMinute;
        proto.second = proto.seconds = getSetSecond;
        proto.millisecond = proto.milliseconds = getSetMillisecond;
        proto.utcOffset = getSetOffset;
        proto.utc = setOffsetToUTC;
        proto.local = setOffsetToLocal;
        proto.parseZone = setOffsetToParsedOffset;
        proto.hasAlignedHourOffset = hasAlignedHourOffset;
        proto.isDST = isDaylightSavingTime;
        proto.isLocal = isLocal;
        proto.isUtcOffset = isUtcOffset;
        proto.isUtc = isUtc;
        proto.isUTC = isUtc;
        proto.zoneAbbr = getZoneAbbr;
        proto.zoneName = getZoneName;
        proto.dates = deprecate(
          "dates accessor is deprecated. Use date instead.",
          getSetDayOfMonth
        );
        proto.months = deprecate(
          "months accessor is deprecated. Use month instead",
          getSetMonth
        );
        proto.years = deprecate(
          "years accessor is deprecated. Use year instead",
          getSetYear
        );
        proto.zone = deprecate(
          "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
          getSetZone
        );
        proto.isDSTShifted = deprecate(
          "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
          isDaylightSavingTimeShifted
        );
        function createUnix(input) {
          return createLocal(input * 1e3);
        }
        function createInZone() {
          return createLocal.apply(null, arguments).parseZone();
        }
        function preParsePostFormat(string) {
          return string;
        }
        var proto$1 = Locale.prototype;
        proto$1.calendar = calendar;
        proto$1.longDateFormat = longDateFormat;
        proto$1.invalidDate = invalidDate;
        proto$1.ordinal = ordinal;
        proto$1.preparse = preParsePostFormat;
        proto$1.postformat = preParsePostFormat;
        proto$1.relativeTime = relativeTime;
        proto$1.pastFuture = pastFuture;
        proto$1.set = set;
        proto$1.eras = localeEras;
        proto$1.erasParse = localeErasParse;
        proto$1.erasConvertYear = localeErasConvertYear;
        proto$1.erasAbbrRegex = erasAbbrRegex;
        proto$1.erasNameRegex = erasNameRegex;
        proto$1.erasNarrowRegex = erasNarrowRegex;
        proto$1.months = localeMonths;
        proto$1.monthsShort = localeMonthsShort;
        proto$1.monthsParse = localeMonthsParse;
        proto$1.monthsRegex = monthsRegex;
        proto$1.monthsShortRegex = monthsShortRegex;
        proto$1.week = localeWeek;
        proto$1.firstDayOfYear = localeFirstDayOfYear;
        proto$1.firstDayOfWeek = localeFirstDayOfWeek;
        proto$1.weekdays = localeWeekdays;
        proto$1.weekdaysMin = localeWeekdaysMin;
        proto$1.weekdaysShort = localeWeekdaysShort;
        proto$1.weekdaysParse = localeWeekdaysParse;
        proto$1.weekdaysRegex = weekdaysRegex;
        proto$1.weekdaysShortRegex = weekdaysShortRegex;
        proto$1.weekdaysMinRegex = weekdaysMinRegex;
        proto$1.isPM = localeIsPM;
        proto$1.meridiem = localeMeridiem;
        function get$1(format2, index, field, setter) {
          var locale2 = getLocale(), utc = createUTC().set(setter, index);
          return locale2[field](utc, format2);
        }
        function listMonthsImpl(format2, index, field) {
          if (isNumber(format2)) {
            index = format2;
            format2 = void 0;
          }
          format2 = format2 || "";
          if (index != null) {
            return get$1(format2, index, field, "month");
          }
          var i, out = [];
          for (i = 0; i < 12; i++) {
            out[i] = get$1(format2, i, field, "month");
          }
          return out;
        }
        function listWeekdaysImpl(localeSorted, format2, index, field) {
          if (typeof localeSorted === "boolean") {
            if (isNumber(format2)) {
              index = format2;
              format2 = void 0;
            }
            format2 = format2 || "";
          } else {
            format2 = localeSorted;
            index = format2;
            localeSorted = false;
            if (isNumber(format2)) {
              index = format2;
              format2 = void 0;
            }
            format2 = format2 || "";
          }
          var locale2 = getLocale(), shift = localeSorted ? locale2._week.dow : 0, i, out = [];
          if (index != null) {
            return get$1(format2, (index + shift) % 7, field, "day");
          }
          for (i = 0; i < 7; i++) {
            out[i] = get$1(format2, (i + shift) % 7, field, "day");
          }
          return out;
        }
        function listMonths(format2, index) {
          return listMonthsImpl(format2, index, "months");
        }
        function listMonthsShort(format2, index) {
          return listMonthsImpl(format2, index, "monthsShort");
        }
        function listWeekdays(localeSorted, format2, index) {
          return listWeekdaysImpl(localeSorted, format2, index, "weekdays");
        }
        function listWeekdaysShort(localeSorted, format2, index) {
          return listWeekdaysImpl(localeSorted, format2, index, "weekdaysShort");
        }
        function listWeekdaysMin(localeSorted, format2, index) {
          return listWeekdaysImpl(localeSorted, format2, index, "weekdaysMin");
        }
        getSetGlobalLocale("en", {
          eras: [
            {
              since: "0001-01-01",
              until: Infinity,
              offset: 1,
              name: "Anno Domini",
              narrow: "AD",
              abbr: "AD"
            },
            {
              since: "0000-12-31",
              until: -Infinity,
              offset: 1,
              name: "Before Christ",
              narrow: "BC",
              abbr: "BC"
            }
          ],
          dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
          ordinal: function(number) {
            var b = number % 10, output = toInt(number % 100 / 10) === 1 ? "th" : b === 1 ? "st" : b === 2 ? "nd" : b === 3 ? "rd" : "th";
            return number + output;
          }
        });
        hooks.lang = deprecate(
          "moment.lang is deprecated. Use moment.locale instead.",
          getSetGlobalLocale
        );
        hooks.langData = deprecate(
          "moment.langData is deprecated. Use moment.localeData instead.",
          getLocale
        );
        var mathAbs = Math.abs;
        function abs() {
          var data = this._data;
          this._milliseconds = mathAbs(this._milliseconds);
          this._days = mathAbs(this._days);
          this._months = mathAbs(this._months);
          data.milliseconds = mathAbs(data.milliseconds);
          data.seconds = mathAbs(data.seconds);
          data.minutes = mathAbs(data.minutes);
          data.hours = mathAbs(data.hours);
          data.months = mathAbs(data.months);
          data.years = mathAbs(data.years);
          return this;
        }
        function addSubtract$1(duration, input, value, direction) {
          var other = createDuration(input, value);
          duration._milliseconds += direction * other._milliseconds;
          duration._days += direction * other._days;
          duration._months += direction * other._months;
          return duration._bubble();
        }
        function add$1(input, value) {
          return addSubtract$1(this, input, value, 1);
        }
        function subtract$1(input, value) {
          return addSubtract$1(this, input, value, -1);
        }
        function absCeil(number) {
          if (number < 0) {
            return Math.floor(number);
          } else {
            return Math.ceil(number);
          }
        }
        function bubble() {
          var milliseconds2 = this._milliseconds, days2 = this._days, months2 = this._months, data = this._data, seconds2, minutes2, hours2, years2, monthsFromDays;
          if (!(milliseconds2 >= 0 && days2 >= 0 && months2 >= 0 || milliseconds2 <= 0 && days2 <= 0 && months2 <= 0)) {
            milliseconds2 += absCeil(monthsToDays(months2) + days2) * 864e5;
            days2 = 0;
            months2 = 0;
          }
          data.milliseconds = milliseconds2 % 1e3;
          seconds2 = absFloor(milliseconds2 / 1e3);
          data.seconds = seconds2 % 60;
          minutes2 = absFloor(seconds2 / 60);
          data.minutes = minutes2 % 60;
          hours2 = absFloor(minutes2 / 60);
          data.hours = hours2 % 24;
          days2 += absFloor(hours2 / 24);
          monthsFromDays = absFloor(daysToMonths(days2));
          months2 += monthsFromDays;
          days2 -= absCeil(monthsToDays(monthsFromDays));
          years2 = absFloor(months2 / 12);
          months2 %= 12;
          data.days = days2;
          data.months = months2;
          data.years = years2;
          return this;
        }
        function daysToMonths(days2) {
          return days2 * 4800 / 146097;
        }
        function monthsToDays(months2) {
          return months2 * 146097 / 4800;
        }
        function as(units) {
          if (!this.isValid()) {
            return NaN;
          }
          var days2, months2, milliseconds2 = this._milliseconds;
          units = normalizeUnits(units);
          if (units === "month" || units === "quarter" || units === "year") {
            days2 = this._days + milliseconds2 / 864e5;
            months2 = this._months + daysToMonths(days2);
            switch (units) {
              case "month":
                return months2;
              case "quarter":
                return months2 / 3;
              case "year":
                return months2 / 12;
            }
          } else {
            days2 = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
              case "week":
                return days2 / 7 + milliseconds2 / 6048e5;
              case "day":
                return days2 + milliseconds2 / 864e5;
              case "hour":
                return days2 * 24 + milliseconds2 / 36e5;
              case "minute":
                return days2 * 1440 + milliseconds2 / 6e4;
              case "second":
                return days2 * 86400 + milliseconds2 / 1e3;
              // Math.floor prevents floating point math errors here
              case "millisecond":
                return Math.floor(days2 * 864e5) + milliseconds2;
              default:
                throw new Error("Unknown unit " + units);
            }
          }
        }
        function makeAs(alias) {
          return function() {
            return this.as(alias);
          };
        }
        var asMilliseconds = makeAs("ms"), asSeconds = makeAs("s"), asMinutes = makeAs("m"), asHours = makeAs("h"), asDays = makeAs("d"), asWeeks = makeAs("w"), asMonths = makeAs("M"), asQuarters = makeAs("Q"), asYears = makeAs("y"), valueOf$1 = asMilliseconds;
        function clone$1() {
          return createDuration(this);
        }
        function get$2(units) {
          units = normalizeUnits(units);
          return this.isValid() ? this[units + "s"]() : NaN;
        }
        function makeGetter(name) {
          return function() {
            return this.isValid() ? this._data[name] : NaN;
          };
        }
        var milliseconds = makeGetter("milliseconds"), seconds = makeGetter("seconds"), minutes = makeGetter("minutes"), hours = makeGetter("hours"), days = makeGetter("days"), months = makeGetter("months"), years = makeGetter("years");
        function weeks() {
          return absFloor(this.days() / 7);
        }
        var round = Math.round, thresholds = {
          ss: 44,
          // a few seconds to seconds
          s: 45,
          // seconds to minute
          m: 45,
          // minutes to hour
          h: 22,
          // hours to day
          d: 26,
          // days to month/week
          w: null,
          // weeks to month
          M: 11
          // months to year
        };
        function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale2) {
          return locale2.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
        }
        function relativeTime$1(posNegDuration, withoutSuffix, thresholds2, locale2) {
          var duration = createDuration(posNegDuration).abs(), seconds2 = round(duration.as("s")), minutes2 = round(duration.as("m")), hours2 = round(duration.as("h")), days2 = round(duration.as("d")), months2 = round(duration.as("M")), weeks2 = round(duration.as("w")), years2 = round(duration.as("y")), a = seconds2 <= thresholds2.ss && ["s", seconds2] || seconds2 < thresholds2.s && ["ss", seconds2] || minutes2 <= 1 && ["m"] || minutes2 < thresholds2.m && ["mm", minutes2] || hours2 <= 1 && ["h"] || hours2 < thresholds2.h && ["hh", hours2] || days2 <= 1 && ["d"] || days2 < thresholds2.d && ["dd", days2];
          if (thresholds2.w != null) {
            a = a || weeks2 <= 1 && ["w"] || weeks2 < thresholds2.w && ["ww", weeks2];
          }
          a = a || months2 <= 1 && ["M"] || months2 < thresholds2.M && ["MM", months2] || years2 <= 1 && ["y"] || ["yy", years2];
          a[2] = withoutSuffix;
          a[3] = +posNegDuration > 0;
          a[4] = locale2;
          return substituteTimeAgo.apply(null, a);
        }
        function getSetRelativeTimeRounding(roundingFunction) {
          if (roundingFunction === void 0) {
            return round;
          }
          if (typeof roundingFunction === "function") {
            round = roundingFunction;
            return true;
          }
          return false;
        }
        function getSetRelativeTimeThreshold(threshold, limit) {
          if (thresholds[threshold] === void 0) {
            return false;
          }
          if (limit === void 0) {
            return thresholds[threshold];
          }
          thresholds[threshold] = limit;
          if (threshold === "s") {
            thresholds.ss = limit - 1;
          }
          return true;
        }
        function humanize(argWithSuffix, argThresholds) {
          if (!this.isValid()) {
            return this.localeData().invalidDate();
          }
          var withSuffix = false, th = thresholds, locale2, output;
          if (typeof argWithSuffix === "object") {
            argThresholds = argWithSuffix;
            argWithSuffix = false;
          }
          if (typeof argWithSuffix === "boolean") {
            withSuffix = argWithSuffix;
          }
          if (typeof argThresholds === "object") {
            th = Object.assign({}, thresholds, argThresholds);
            if (argThresholds.s != null && argThresholds.ss == null) {
              th.ss = argThresholds.s - 1;
            }
          }
          locale2 = this.localeData();
          output = relativeTime$1(this, !withSuffix, th, locale2);
          if (withSuffix) {
            output = locale2.pastFuture(+this, output);
          }
          return locale2.postformat(output);
        }
        var abs$1 = Math.abs;
        function sign(x) {
          return (x > 0) - (x < 0) || +x;
        }
        function toISOString$1() {
          if (!this.isValid()) {
            return this.localeData().invalidDate();
          }
          var seconds2 = abs$1(this._milliseconds) / 1e3, days2 = abs$1(this._days), months2 = abs$1(this._months), minutes2, hours2, years2, s, total = this.asSeconds(), totalSign, ymSign, daysSign, hmsSign;
          if (!total) {
            return "P0D";
          }
          minutes2 = absFloor(seconds2 / 60);
          hours2 = absFloor(minutes2 / 60);
          seconds2 %= 60;
          minutes2 %= 60;
          years2 = absFloor(months2 / 12);
          months2 %= 12;
          s = seconds2 ? seconds2.toFixed(3).replace(/\.?0+$/, "") : "";
          totalSign = total < 0 ? "-" : "";
          ymSign = sign(this._months) !== sign(total) ? "-" : "";
          daysSign = sign(this._days) !== sign(total) ? "-" : "";
          hmsSign = sign(this._milliseconds) !== sign(total) ? "-" : "";
          return totalSign + "P" + (years2 ? ymSign + years2 + "Y" : "") + (months2 ? ymSign + months2 + "M" : "") + (days2 ? daysSign + days2 + "D" : "") + (hours2 || minutes2 || seconds2 ? "T" : "") + (hours2 ? hmsSign + hours2 + "H" : "") + (minutes2 ? hmsSign + minutes2 + "M" : "") + (seconds2 ? hmsSign + s + "S" : "");
        }
        var proto$2 = Duration.prototype;
        proto$2.isValid = isValid$1;
        proto$2.abs = abs;
        proto$2.add = add$1;
        proto$2.subtract = subtract$1;
        proto$2.as = as;
        proto$2.asMilliseconds = asMilliseconds;
        proto$2.asSeconds = asSeconds;
        proto$2.asMinutes = asMinutes;
        proto$2.asHours = asHours;
        proto$2.asDays = asDays;
        proto$2.asWeeks = asWeeks;
        proto$2.asMonths = asMonths;
        proto$2.asQuarters = asQuarters;
        proto$2.asYears = asYears;
        proto$2.valueOf = valueOf$1;
        proto$2._bubble = bubble;
        proto$2.clone = clone$1;
        proto$2.get = get$2;
        proto$2.milliseconds = milliseconds;
        proto$2.seconds = seconds;
        proto$2.minutes = minutes;
        proto$2.hours = hours;
        proto$2.days = days;
        proto$2.weeks = weeks;
        proto$2.months = months;
        proto$2.years = years;
        proto$2.humanize = humanize;
        proto$2.toISOString = toISOString$1;
        proto$2.toString = toISOString$1;
        proto$2.toJSON = toISOString$1;
        proto$2.locale = locale;
        proto$2.localeData = localeData;
        proto$2.toIsoString = deprecate(
          "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
          toISOString$1
        );
        proto$2.lang = lang;
        addFormatToken("X", 0, 0, "unix");
        addFormatToken("x", 0, 0, "valueOf");
        addRegexToken("x", matchSigned);
        addRegexToken("X", matchTimestamp);
        addParseToken("X", function(input, array, config) {
          config._d = new Date(parseFloat(input) * 1e3);
        });
        addParseToken("x", function(input, array, config) {
          config._d = new Date(toInt(input));
        });
        hooks.version = "2.30.1";
        setHookCallback(createLocal);
        hooks.fn = proto;
        hooks.min = min;
        hooks.max = max;
        hooks.now = now;
        hooks.utc = createUTC;
        hooks.unix = createUnix;
        hooks.months = listMonths;
        hooks.isDate = isDate;
        hooks.locale = getSetGlobalLocale;
        hooks.invalid = createInvalid;
        hooks.duration = createDuration;
        hooks.isMoment = isMoment;
        hooks.weekdays = listWeekdays;
        hooks.parseZone = createInZone;
        hooks.localeData = getLocale;
        hooks.isDuration = isDuration;
        hooks.monthsShort = listMonthsShort;
        hooks.weekdaysMin = listWeekdaysMin;
        hooks.defineLocale = defineLocale;
        hooks.updateLocale = updateLocale;
        hooks.locales = listLocales;
        hooks.weekdaysShort = listWeekdaysShort;
        hooks.normalizeUnits = normalizeUnits;
        hooks.relativeTimeRounding = getSetRelativeTimeRounding;
        hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
        hooks.calendarFormat = getCalendarFormat;
        hooks.prototype = proto;
        hooks.HTML5_FMT = {
          DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
          // <input type="datetime-local" />
          DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
          // <input type="datetime-local" step="1" />
          DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
          // <input type="datetime-local" step="0.001" />
          DATE: "YYYY-MM-DD",
          // <input type="date" />
          TIME: "HH:mm",
          // <input type="time" />
          TIME_SECONDS: "HH:mm:ss",
          // <input type="time" step="1" />
          TIME_MS: "HH:mm:ss.SSS",
          // <input type="time" step="0.001" />
          WEEK: "GGGG-[W]WW",
          // <input type="week" />
          MONTH: "YYYY-MM"
          // <input type="month" />
        };
        return hooks;
      }));
    }
  });

  // map-layer-compressed.svg
  var map_layer_compressed_default = '<svg viewBox="0 0 647.104 327.79807" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><clipPath id="a"><path d="m-267.38263-165.93909h1225.62463v618.18756h-1225.62463z"/></clipPath><clipPath id="b"><path d="m-267.38263-165.93909h1225.62463v618.18756h-1225.62463z"/></clipPath><clipPath id="c"><path d="m-267.38263-165.93909h1225.62463v618.18756h-1225.62463z"/></clipPath><clipPath id="d"><path d="m-267.38263-165.93909h1225.62463v618.18756h-1225.62463z"/></clipPath><clipPath id="e"><path d="m-267.38263-165.93909h1225.62463v618.18756h-1225.62463z"/></clipPath><clipPath id="f"><path d="m-267.38263-165.93909h1225.62463v618.18756h-1225.62463z"/></clipPath><clipPath id="g"><path d="m-267.38263-165.93909h1225.62463v626.97345h-1225.62463z"/></clipPath><pattern id="h" height="37.36" patternTransform="matrix(1 0 0 -1 37.23999 -15628.19614)" patternUnits="userSpaceOnUse" viewBox="0 0 37.36 37.36" width="37.36"><path d="m0 0h37.36v37.36h-37.36z" fill="none"/><path d="m0 0h37.36v37.36h-37.36z" fill="none"/><path d="m34.43964-5.70047 8.62113 8.62113" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m34.43964-8.57418 11.49484 11.49484" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m34.43964-11.44789 14.36855 14.36855" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m34.43964-14.3216 17.24226 17.24226" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m34.43964-17.19531 20.11597 20.11597" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m34.43964-20.06902 22.98968 22.98968" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m34.43964-22.94273 25.86339 25.86339" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m34.43964-25.81644 28.7371 28.7371" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m34.43964-28.69015 31.61081 31.61081" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m34.43964-31.56386 34.48452 34.48452" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m34.43964-34.43757 37.35823 37.35823" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m34.43964-37.31085 40.23194 40.23151" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m37.31335-37.31085 37.35823 37.3578" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m-2.92036-5.70047 8.62113 8.62113" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m-2.92036-8.57418 11.49484 11.49484" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m-2.92036-11.44789 14.36855 14.36855" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m-2.92036-14.3216 17.24226 17.24226" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m-2.92036-17.19531 20.11597 20.11597" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m-2.92036-20.06902 22.98968 22.98968" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m-2.92036-22.94273 25.86339 25.86339" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m-2.92036-25.81644 28.7371 28.7371" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m-2.92036-28.69015 31.61081 31.61081" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m-2.92036-31.56386 34.48452 34.48452" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m-2.92036-34.43757 37.35823 37.35823" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m-2.92036-37.31085 40.23194 40.23151" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m-.04665-37.31085 37.35823 37.3578" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m34.43964 31.65953 8.62113 8.62113" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m34.43964 28.78582 11.49484 11.49484" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m34.43964 25.91211 14.36855 14.36855" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m34.43964 23.0384 17.24226 17.24226" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m34.43964 20.16469 20.11597 20.11597" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m34.43964 17.29098 22.98968 22.98968" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m34.43964 14.41727 25.86339 25.86339" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m34.43964 11.54356 28.7371 28.7371" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m34.43964 8.66985 31.61081 31.61081" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m34.43964 5.79614 34.48452 34.48452" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m34.43964 2.92243 37.35823 37.35823" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m34.43964.04915 40.23194 40.23151" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m37.31335.04915 37.35823 37.3578" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m-2.92036 31.65953 8.62113 8.62113" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m-2.92036 28.78582 11.49484 11.49484" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m-2.92036 25.91211 14.36855 14.36855" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m-2.92036 23.0384 17.24226 17.24226" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m-2.92036 20.16469 20.11597 20.11597" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m-2.92036 17.29098 22.98968 22.98968" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m-2.92036 14.41727 25.86339 25.86339" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m-2.92036 11.54356 28.7371 28.7371" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m-2.92036 8.66985 31.61081 31.61081" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m-2.92036 5.79614 34.48452 34.48452" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m-2.92036 2.92243 37.35823 37.35823" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m-2.92036.04915 40.23194 40.23151" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m-.04665.04915 37.35823 37.3578" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m2.82706.04915 34.48452 34.48409" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m5.70077.04915 31.61081 31.61038" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m8.57448.04915 28.7371 28.73667" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m11.44819.04915 25.86339 25.86296" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m14.3219.04915 22.98968 22.98925" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m17.19561.04915 20.11597 20.11554" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m20.06932.04915 17.24226 17.24183" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m22.94303.04915 14.36855 14.36812" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m25.81674.04915 11.49484 11.49441" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m28.69045.04915 8.62113 8.6207" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/><path d="m31.56416.04915 5.74742 5.74699" fill="none" stroke="#231f20" stroke-linejoin="round" stroke-width=".1"/></pattern><path d="m-268.35287-165.93909h1226.59475v618.18759h-1226.59472v-618.18759z" fill="#7083f2"/><path d="m199.94344 279.1485v-69.40001l-164.59999-2.09999 18.8 107.70001h3.7z" fill="#c1c1c1"/><path d="m133.94344 42.54852h345.2v46.79999h-384.29996l39.09997-46.79999h-.00002z" fill="#c1c1c1"/><path d="m555.44348 274.54849v-85.80002h70.40002v85.80002z" fill="#c1c1c1"/><g clip-path="url(#a)"><path d="m627.24347 281.44852h-414.70001l-164 42.70001-272.16327 143.04352" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="17.3"/></g><path d="m504.14343 315.34851v-312.70001z" fill="#13110c"/><g clip-path="url(#b)"><path d="m504.14337-240.6187v775.34343" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="23"/></g><g clip-path="url(#c)"><path d="m633.34338 33.54852v464.20423" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="23"/></g><g clip-path="url(#d)"><path d="m214.34341-223.04703v259.29553" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="23"/></g><g clip-path="url(#e)"><path d="m743.22821-269.17267-93.5849 305.62119" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="23"/></g><g clip-path="url(#f)"><path d="m208.64343 137.04851v146.7" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="32.4"/></g><g clip-path="url(#g)" fill="none" stroke="#fff" stroke-miterlimit="10"><path d="m358.24341 282.04849v354.89999" stroke-width="23"/><path d="m212.04172 282.04849-52.64218 202.25378" stroke-width="10"/><path d="m107.24341 307.34851-.29999 44.5-50.29999 14.5" stroke-width="12"/><g stroke-width="23"><path d="m76.04343 498.84851-27.5-174.20001-25-165.90001 109-124.79998h856.96976"/><path d="m56.44342 121.04851-310.86713-242.96071"/><path d="m640.64337 133.2485h-236.19995l-95.40002 25.5h-291.09998"/></g></g><path d="m233.04343 147.94852v-65.10001h-51.60001v28.10001l.20001-.20002 37.39999 37.4h14v-.19998z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width=".6"/><path d="m145.54343 159.64851v-49.40001h65.20001v49.40001z" fill="#fff"/><path d="m466.44345 94.65067h12.69995v-49.20215h16.40002v85.20916h-29.09998v-36.00701z" fill="#fff"/><path d="m458.04346 168.04852v-24.5h35.20001v24.5z" fill="#fff"/><path d="m282.04343 83.04852v-.20001h-28.5v65.3h28.5z" fill="#7081f1"/><path d="m233.35234 147.94852v-65.10001h-51.60001v28.10001l.20001-.20002 37.40001 37.4h14l-.00002-.19998z" fill="#7081f1"/><path d="m282.04343 147.94852v.2h24.70001v-65.3h-24.70001v65.10001z" fill="#7081f1"/><path d="m253.54343 83.04852v-.20001h-20.5v65.3h20.5z" fill="#7081f1"/><path d="m329.44342 141.94852v-45h43.80002v-14.10001h-66.5v65.29999z" fill="#7081f1"/><path d="m567.14343 225.64851h25v-33.7l29.30005-.5v-23.20001h-54.30005z" fill="#7081f1"/><path d="m561.84344 272.84851 30.29999-47.2h-25v-57.40001h-30.59998v104.60001z" fill="#7081f1"/><path d="m596.04346 96.94852v-51.20002h25.40002v51.20002z" fill="#7081f1"/><path d="m566.74347 96.94855v-51.20002h29.29999v51.20002z" fill="#7081f1"/><path d="m536.54346 96.94855v-51.20002h30.29999v51.20002z" fill="#7081f1"/><path d="m144.24342 148.14851 37.2-37.19999v-28.10001h-49.09999v65.3z" fill="#7081f1"/><path d="m132.34344 148.14851v-65.3h-27.2l-56.60001 65.3z" fill="#7081f1"/><path d="m404.44342 121.54851v-38.7h-31.19998v47.2z" fill="#7081f1"/><path d="m432.84341 82.84851h-28.39999v38.7l.30002-.1h28.09998v-38.6z" fill="#f4e26e"><title>Unit 106</title></path><path d="m432.84344 121.44853v-38.60001h33.40002v38.60001z" fill="#7081f1"/><path d="m329.44342 141.94852-22.69998 6.2 36.5-10v-41.19998h-13.80002z" fill="#7081f1"/><path d="m358.24344 134.14851v-37.19998h-15v41.19998z" fill="#7081f1"/><path d="m373.24344 130.04851v-33.09999h-15v37.19998z" fill="#7081f1"/><path d="m515.84344 71.84851v-26.10001h20.70001v26.10001z" fill="#7081f1"/><path d="m515.84344 96.94851v-25.1h20.70001v25.1z" fill="#f4e26e"><title>Unit 005</title></path><path d="m515.84344 196.94852v-28.7h20.70001v28.7z" fill="#7081f1"/><path d="m515.84338 272.84851v-21.60001h20.70001v21.60001z" fill="#7081f1"/><path d="m515.84344 251.24854v-25.5h20.70001v25.5z" fill="#f4e26e"><title>Unit 217.6</title></path><path d="m515.84344 225.64848v-28.7h20.70001v28.69998z" fill="#7081f1"/><path d="m37.24343 190.2485 6.5 26.60001 21.8.2 32.80001.3v-47l-61.10001.10001s0 19.79999 0 19.79999z" fill="#7081f1"/><path d="m192.34341 218.14851v-47.90001l-44.49998.10001v47.39999z" fill="#7081f1"/><path d="m147.97325 217.7485v-47.39999h-49.5v47z" fill="#7081f1"/><path d="m493.04343 272.84851v-21.60001h-21.59998v21.60001z" fill="#7081f1"/><path d="m493.04343 251.2485v-25.89999h-21.59998v25.89999z" fill="#7081f1"/><path d="m493.04343 196.7485v-28.5h-21.59998v28.5z" fill="#7081f1"/><path d="m443.84341 272.84851v-73.10001l-45.39999 13.3v59.8h45.39999z" fill="#7081f1"/><path d="m471.44345 168.2485h-27.20001l-.40002 31.5v73.10001h27.60004v-104.60001z" fill="#f4e26e"><title>Unit 215</title></path><path d="m398.44342 272.84851v-59.8l-39.10001 11.39999v48.40001z" fill="#7081f1"/><path d="m300.44342 272.84851h58.89999v-48.39999l-58.89999 17.3z" fill="#7081f1"/><path d="m392.24344 214.84851v-68.5l-39.10001 11.10001v68.89999z" fill="#f4e26e"><title>Unit 210</title></path><path d="m425.74344 205.04851 18.09998-5.3.40002-31.5h13.59998v-24.5h-31.70001l-.39996 61.3z" fill="#f4e26e"><title>Unit 212</title></path><path d="m392.26663 214.84851 33.5-9.8.29999-61.3h-24.60001l-9.19998 2.60001v68.5z" fill="#7081f1"/><path d="m353.14343 226.34851v-68.89999l-40.20001 11.39999v69.2z" fill="#f4e26e"><title>Unit 206</title></path><path d="m300.44342 272.84851v-31.10001l12.5-3.7v-26h-47.89999v60.8h35.39999z" fill="#7081f1"/><path d="m224.44347 272.84851v-60.80002h40.50002v60.80002z" fill="#7081f1"/><path d="m312.89343 168.84851-5.69998 1.60001h-23.90002l-.29999 41.59999h29.89999z" fill="#f4e26e"><title>Unit 199</title></path><path d="m601.24347 121.44851v-24.5h20.29999v24.5z" fill="#f4e26e"><title>Unit 232a</title></path><path d="m581.44348 121.44851v-24.5h19.79999v24.5z" fill="#f4e26e"><title>Unit 009</title></path><path d="m541.84344 121.44853v-24.5h19.79999v24.5z" fill="#f4e26e"><title>Unit 006</title></path><path d="m561.64343 121.44851v-24.5h19.79999v24.5z" fill="#f4e26e"><title>Unit 007</title></path><path d="m515.84344 121.44854v-24.5h26v24.5z" fill="#7081f1"/><path d="m601.24347 168.2485v-24.5h20.29999v24.5z" fill="#7081f1"/><path d="m581.44348 168.2485v-24.5h19.79999v24.5z" fill="#f4e26e"><title>Unit 222</title></path><path d="m516.2865 168.2485v-24.5h26v24.5z" fill="#7081f1"/><path d="m581.44348 143.7485h-19.80005v24.5h19.80005z" fill="#f4e26e"><title>Unit 220</title></path><path d="m541.84344 168.2485v-24.5h19.79999v24.5z" fill="#f4e26e"><title>Unit 218</title></path><path d="m471.44348 225.64851v-28.7h21.5v28.69998z" fill="#7081f1"/><path d="m224.64343 212.04849v-41.40001h29.60001v41.40001z" fill="#7081f1"/><path d="m254.04346 212.04855v-41.40001h28.89999v41.40001z" fill="#7081f1"/><path d="m466.34344 121.44854v-38.6h17.5v38.60001s-17.5 0-17.5 0z" fill="#7081f1"/><path d="m457.84344 168.24854v-24.5h26v24.5z" fill="#f4e26e"><title>Unit 214</title></path><path d="m37.24341 190.2485 6.5 26.60001 21.79999.20001 32.80002.29999v-47l-61.10001.10001s0 19.79999 0 19.79999z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width=".6"/><path d="m192.34341 218.1485v-47.90001l-44.49997.10001v47.40001z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width=".6"/><path d="m147.84344 217.7485v-47.39999h-49.5v47z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width=".6"/><path d="m37.24341 190.2485 6.5 26.60001 21.79999.20001" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width=".6"/><path d="m471.44342 272.84851h21.59998v-21.60001h-21.59998 21.59998v-25.60001h-21.59998 21.59998v-28.70001h-21.59998 21.59998v-28.70001h-21.59998z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width=".6"/><path d="m443.84338 272.84851v-73.10001l-45.39996 13.30002v59.79999z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width=".6"/><path d="m471.44342 168.2485h-27.20001l-.40002 31.5v73.10001h27.60004v-104.60001z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width=".6"/><path d="m398.44342 272.84851v-59.79999l-39.10004 11.39999v48.39999h39.10004z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width=".6"/><path d="m300.44342 272.84851h58.89996v-48.39999l-58.89996 17.29999v31.10001z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width=".6"/><path d="m392.24347 214.84851v-68.5l-39.10004 11.10001v68.89999z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width=".6"/><path d="m425.74347 205.04852 18.09998-5.30002.40002-31.5h13.59998v-24.5h-31.70001l-.39996 61.30002z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width=".6"/><path d="m392.24347 214.84851 33.5-9.79999.29999-61.30002h-24.59998l-9.19995 2.60001z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width=".6"/><path d="m353.14343 226.34851v-68.89999l-40.20001 11.39999v69.20001z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width=".6"/><path d="m300.44342 272.84851v-31.10001l12.5-3.70001v-26h-47.90002v60.79999z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width=".6"/><path d="m282.0434 83.04852v-.20001h-28.5v65.3h28.5z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width=".6"/><path d="m282.0434 147.94852v.2h24.70001v-65.3h-24.70001v65.10001z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width=".6"/><path d="m253.5434 83.04852v-.20001h-20.5v65.3h20.5z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width=".6"/><path d="m329.44342 141.94852v-45h43.80005v-14.10001h-66.5v65.3l22.69995-6.2z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width=".6"/><path d="m567.14337 225.6485h25v-33.70001l29.30005-.5v-23.20001h-54.30005z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width=".6"/><path d="m561.84338 272.84851 30.29999-47.20001h-25v-57.40001h-30.59998v104.60002z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width=".6"/><path d="m596.04346 96.94855v-51.20001h25.40002v51.20001z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width=".6"/><path d="m566.74347 96.94855v-51.20001h29.29999v51.20001z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width=".6"/><path d="m536.54346 96.94855v-51.20001h30.29999v51.20001z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width=".6"/><path d="m144.24341 148.14851 37.20001-37.2v-28.10001h-49.09998v65.3h11.89996z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width=".6"/><path d="m132.34344 148.14851v-65.3h-27.20001l-56.60001 65.3z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width=".6"/><path d="m404.44342 121.54851v-38.7h-31.19995v47.2z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width=".6"/><path d="m432.84338 82.84851h-28.39996v38.7l.30005-.10001h28.09998s-.00006-38.59999-.00006-38.59998z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width=".6"/><path d="m432.84341 121.44855v-38.59998h33.40002v38.59998z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width=".6"/><path d="m329.44342 141.94852-22.69995 6.2 36.5-10v-41.2h-13.80005z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width=".6"/><path d="m358.24347 134.14851v-37.2h-15v41.19998z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width=".6"/><path d="m373.24347 96.94852h-15v37.19998l15-4.10001v-47.2 14.10002z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width=".6"/><path d="m515.84338 71.84851v-26.10004h20.70001v26.10004z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width=".6"/><path d="m515.84344 96.94849v-25.10004h20.70001v25.10004z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width=".6"/><path d="m515.84338 196.94849v-28.70001h20.70001v28.70001z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width=".6"/><path d="m515.84338 272.84845v-21.59998h20.70001v21.59998z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width=".6"/><path d="m515.84338 251.24854v-25.5h20.70001v25.5z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width=".6"/><path d="m515.84344 225.64844v-28.70001h20.70001v28.70001z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width=".6"/><path d="m224.44344 272.84848v-60.80002h40.49998v60.79999l-40.5.00003z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width=".6"/><path d="m312.94342 168.84851-5.69995 1.60001h-24.5v41.60001-41.59999h-28.60004v41.59999-41.59999h-29.70001v41.59999h88.5v-43.20001z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width=".6"/><path d="m601.24347 121.44855v-24.5h20.29999v24.5z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width=".6"/><path d="m581.44348 121.44849v-24.5h19.79999v24.5z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width=".6"/><path d="m541.84344 121.44849v-24.5h19.79999v24.5z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width=".6"/><path d="m561.64343 121.44849v-24.5h19.79999v24.5z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width=".6"/><path d="m515.84338 121.44855v-24.5h26v24.5z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width=".6"/><path d="m601.24347 168.24847v-24.5h20.29999v24.5z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width=".6"/><path d="m581.44348 168.24854v-24.5h19.79999v24.5z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width=".6"/><path d="m515.84338 168.24847v-24.5h26v24.5z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width=".6"/><path d="m581.44342 143.7485h-19.80005v24.5h19.80005z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width=".6"/><path d="m541.84344 168.24847v-24.5h19.79999v24.5z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width=".6"/><path d="m471.44345 225.64856v-28.70001h21.5v28.70001z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width=".6"/><path d="m224.64343 212.04849v-41.39999h29.60001v41.40002z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width=".6"/><path d="m254.04343 212.04852v-41.40002h28.89999v41.40002z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width=".6"/><path d="m466.34341 121.44855v-38.59998h17.5v38.59998z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width=".6"/><path d="m457.84341 168.24854v-24.5h26v24.5z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width=".6"/><path d="m293.68214 193.65449c-.0403 0-.0746-.0121-.10291-.0363-.0242-.0283-.0363-.0626-.0363-.10292v-3.39047l-1.00504.77496c-.0323.0242-.0666.0343-.10291.0303-.0364-.004-.0666-.0222-.0908-.0545l-.15741-.1998c-.0242-.0363-.0343-.0727-.0303-.10898.008-.0363.0283-.0666.0606-.0908l1.31985-1.01714c.0283-.0202.0545-.0323.0787-.0363s.0504-.006.0787-.006h.30878c.0403.00002.0726.0141.0969.0424.0242.0242.0363.0565.0363.0969v3.95958c0 .0403-.0121.0746-.0363.10292-.0242.0242-.0565.0363-.0969.0363l-.32101-.00015zm2.08877 0c-.0364 0-.0666-.0121-.0908-.0363-.0202-.0283-.0303-.0606-.0303-.0969 0-.0202.002-.0363.006-.0484.008-.0121.0141-.0223.0182-.0303l.92633-1.28958c-.10092.0242-.2099.0363-.32693.0363-.22601-.004-.42786-.0444-.60544-.12109-.17758-.0767-.32895-.17961-.45407-.30878-.12512-.13321-.21997-.28255-.28455-.44803-.0646-.16548-.0969-.33905-.0969-.52068 0-.17761.0303-.35115.0908-.52068.0646-.16953.15945-.32291.28455-.46014.12915-.13724.28857-.24623.4783-.32693.1897-.0848.4137-.12715.67203-.12715.25427 0 .47626.0404.66599.12109.19376.0767.35519.18365.48434.32088.13321.13319.23007.28456.29062.45409.0646.16953.0969.34511.0969.52673 0 .16548-.0242.31685-.0726.45409-.0485.13724-.10699.26035-.17557.36932-.0646.10898-.12918.20988-.19373.30272l-1.16245 1.62863c-.0161.0202-.0383.0464-.0666.0787-.0283.0283-.0707.0424-.12714.0424h-.327zm.58728-1.95556c.16949 0 .32489-.0363.46619-.10898.14529-.0767.26031-.18163.34509-.31483.0847-.13724.12714-.30072.12714-.49042 0-.18971-.0424-.35115-.12714-.48434-.0848-.13724-.1998-.24219-.34509-.31483-.1413-.0767-.29669-.11504-.46619-.11504-.1655 0-.31885.0384-.46014.11504-.14127.0726-.2543.1776-.33905.31483-.0848.13319-.12714.29463-.12714.48434 0 .1897.0424.35318.12714.49042.0847.13318.19778.23813.33905.31483.1413.0727.29465.10898.46014.10898zm3.11555 1.95556c.0325.0163-.0666-.0121-.0908-.0363-.0202-.0283-.0303-.0606-.0303-.0969 0-.0202.002-.0363.006-.0484.008-.0121.0141-.0223.0182-.0303l.92633-1.28958c-.10092.0242-.2099.0363-.32693.0363-.22601-.004-.42786-.0444-.60544-.12109-.17758-.0767-.32895-.17961-.45407-.30878-.12512-.13321-.21997-.28255-.28455-.44803-.0646-.16548-.0969-.33905-.0969-.52068 0-.17761.0303-.35115.0908-.52068.0646-.16953.15945-.32291.28455-.46014.12915-.13724.28857-.24623.4783-.32693.1897-.0848.4137-.12715.67203-.12715.25427 0 .47626.0404.66599.12109.19376.0767.35519.18365.48434.32088.13321.13319.23007.28456.29062.45409.0646.16953.0969.34511.0969.52673 0 .16548-.0242.31685-.0726.45409-.0485.13724-.10699.26035-.17557.36932-.0646.10898-.12918.20988-.19373.30272l-1.16245 1.62863c-.0161.0202-.0383.0464-.0666.0787-.0283.0283-.0707.0424-.12714.0424h-.327zm.58728-1.95556c.16949 0 .32489-.0363.46619-.10898.14529-.0767.26031-.18163.34509-.31483.0847-.13724.12714-.30072.12714-.49042 0-.18971-.0424-.35115-.12714-.48434-.0848-.13724-.1998-.24219-.34509-.31483-.1413-.0767-.29669-.11504-.46619-.11504-.1655 0-.31885.0384-.46014.11504-.14127.0726-.2543.1776-.33905.31483-.0848.13319-.12714.29463-.12714.48434 0 .1897.0424.35318.12714.49042.0847.13318.19778.23813.33905.31483.1413.0727.29465.10898.46014.10898z" fill="#25357a"/><path d="m112.48987 283.41446c-.0433 0-.07834-.01166-.10501-.035-.02335-.02335-.03998-.05667-.04999-.10001l-.64499-3.20999c-.00333-.01331-.005-.02499-.005-.035v-.01999c0-.02667.01001-.05002.03-.07001.02002-.01999.04333-.03.07001-.03h.26001c.07001 0 .10999.02832.12.08499l.51001 2.57999.54001-1.76999c.01001-.03.02664-.05667.04999-.07999.02667-.02667.06332-.04001.10999-.04001h.185c.05002 0 .08667.01334.10999.04001.02335.02335.03833.04999.04501.07999l.54501 1.76999.505-2.57999c.01004-.05667.0517-.08499.125-.08499h.26001c.02667 0 .04999.01001.07001.03s.03.04333.03.07001c0 .00336-.00168.00998-.005.01999v.035l-.64499 3.20999c-.01001.04333-.02835.07666-.05499.10001-.02335.02335-.05667.035-.10001.035h-.19501c-.04669 0-.08334-.01166-.10999-.035-.02667-.02335-.04501-.05331-.05499-.09l-.62-1.905-.61499 1.905c-.01334.03668-.03333.06665-.06.09-.02332.02335-.05832.035-.10501.035zm3.40375 0c-.03333 0-.06165-.01001-.08499-.03-.01999-.02335-.03-.05167-.03-.08499v-2.36499c0-.03333.01001-.06168.03-.08499.02335-.02332.05167-.035.08499-.035h.23001c.03333 0 .06165.01169.08499.035s.035.05167.035.08499v.22c.06665-.11334.15833-.19833.27499-.255s.25668-.08499.42001-.08499h.20001c.03333 0 .06.01169.07999.035.01999.01999.03.04666.03.07999v.20499c0 .03336-.01001.06-.03.07999-.01999.02002-.04666.03003-.07999.03h-.29999c-.17999.00003-.32166.05331-.42499.16-.10333.10333-.15503.245-.155.42499v1.47c-.00003.03333-.01166.06165-.035.08499-.02332.01999-.0517.03-.08499.03l-.24506.00003h.00002zm1.89999 0c-.03333 0-.06165-.01001-.08499-.03-.01999-.02335-.03-.05167-.03-.08499v-2.37c0-.03333.01001-.06.03-.07999.02335-.02332.05167-.035.08499-.035h.23999c.03333 0 .06.01169.07999.035.01999.01999.03.04666.03.07999v2.37c0 .03333-.01001.06165-.03.08499-.01999.01999-.04666.03-.07999.03zm-.04001-3.08499c-.03333 0-.06165-.01001-.08499-.03-.01999-.02335-.03-.05167-.03-.08499v-.26999c0-.03333.01001-.05997.03-.07999.02335-.02335.05167-.035.08499-.035h.315c.03329 0 .06.01166.07999.035.02335.02002.03503.04666.035.07999v.26999c.00003.03333-.01166.06165-.035.08499-.01999.01999-.04669.03-.07999.03zm2.20001 4.185c-.22665.00003-.4133-.03-.56-.09-.14334-.06-.25668-.13333-.34-.22-.08002-.08334-.13831-.16833-.17499-.255-.03333-.08334-.05167-.14999-.05499-.20001-.00336-.03329.00665-.06168.03-.08499.02667-.02335.05499-.03497.08499-.035h.23999c.03003.00003.05499.00665.07501.01999.01999.01331.03668.04163.04999.08499.02002.04999.04999.10501.09.16501.04001.06332.10168.11667.185.16.08334.04666.20001.07004.35001.07001.15665.00003.28833-.02167.39499-.065.10666-.04001.18668-.11331.23999-.22.05667-.10333.08499-.24667.08499-.42999v-.34c-.08002.10336-.185.19003-.315.26001-.13.06665-.29333.10001-.48999.10001-.18668 0-.34668-.03165-.48001-.095-.13333-.06668-.24332-.155-.32999-.26501-.08334-.11337-.14667-.2417-.19-.38501-.03998-.14331-.06335-.29333-.07001-.45001-.00336-.09335-.00336-.185 0-.27499.00665-.15668.03003-.30664.07001-.45001.04333-.14334.10666-.27167.19-.38501.08667-.11334.19666-.20169.32999-.26501.13333-.06668.29333-.10001.48001-.10001.20001 0 .36499.03833.495.11499.13336.07333.24167.16333.32501.26999v-.215c0-.03336.01001-.06168.03-.08499.02335-.02335.05167-.03503.08499-.035h.23001c.03333-.00003.06165.01166.08499.035.02332.02332.035.05164.035.08499v2.42499c0 .2233-.03833.42166-.11499.595-.07333.17334-.19666.31003-.37.41-.17001.09998-.40002.14999-.69.14999v.00009zm-.01001-1.48002c.16669 0 .29999-.03833.39999-.11499.10333-.07666.17831-.17334.22501-.29001.04999-.11667.07669-.23502.07999-.35501.00333-.04666.005-.10333.005-.17001 0-.07001-.00168-.12836-.005-.17499-.00336-.12-.03-.23831-.07999-.35501-.04669-.11667-.12167-.21335-.22501-.29001-.10001-.07666-.23331-.11499-.39999-.11499-.16666 0-.29999.03833-.39999.11499-.09998.07333-.17169.17166-.215.29501-.04337.12-.06833.25-.07501.39001-.00333.08667-.00333.17499 0 .26501.00668.14001.03165.27164.07501.39499.0433.11996.11502.21832.215.29501.10001.07333.23334.10999.39999.10999zm2.04999.38001c-.03333 0-.06165-.01001-.08499-.03-.01999-.02335-.03-.05167-.03-.08499v-3.32001c0-.03333.01001-.06.03-.07999.02335-.02335.05167-.035.08499-.035h.25c.03665 0 .06497.01166.08499.035.01999.01999.03.04666.03.07999v1.16501c.09-.11334.19998-.20502.32999-.27499.13-.07001.29501-.10498.495-.10501.21667.00003.39999.04831.54999.14499.15335.09335.26834.22498.345.39499.07999.16666.12.36166.12.58499v1.41c0 .03333-.01001.06165-.03.08499-.02002.01999-.04834.03-.08499.03h-.25c-.03333 0-.06165-.01001-.08499-.03-.01999-.02335-.03-.05167-.03-.08499v-1.38501c0-.23337-.05667-.41501-.17001-.54501-.11334-.13333-.28003-.20001-.5-.20001-.20667 0-.37332.06668-.5.20001-.12665.13-.19.31165-.19.54501v1.38501c0 .03333-.00998.06165-.03.08499-.02002.01999-.04834.03-.08499.03l-.24997.00003zm3.90375 0c-.18668 0-.33832-.03497-.45499-.10501-.11664-.07333-.20166-.17502-.255-.30499-.05334-.13336-.07999-.29001-.07999-.47v-1.32001h-.39001c-.03333 0-.06165-.01001-.08499-.03-.01999-.02332-.03-.05167-.03-.08499v-.17001c0-.03333.01001-.05997.03-.07999.02335-.02332.05167-.035.08499-.035h.39001v-.83499c0-.03333.01001-.06.03-.07999.02335-.02335.05167-.035.08499-.035h.23499c.03333 0 .05997.01166.07999.035.02332.01999.035.04666.035.07999v.83499h.62c.03333 0 .05997.01169.07999.035.02332.02002.035.04666.035.07999v.17001c0 .03333-.01169.06168-.035.08499-.02002.01999-.04666.03-.07999.03h-.62v1.285c0 .15665.02664.28.07999.37.05331.09003.14832.13504.285.13501h.30499c.03336.00003.06.01166.07999.035.02335.01999.03497.04663.035.07999v.17999c-.00003.03333-.01166.06165-.035.08499-.01999.01999-.04663.03-.07999.03l-.34497.00003h-.00002z" fill="#716f72"/><path d="m109.38501 289.41446c-.03668 0-.065-.01001-.08499-.03-.02002-.02335-.02997-.05167-.03-.08499v-3.26501c.00003-.03665.00998-.06497.03-.08499.01999-.02335.04831-.035.08499-.035h1.37c.24997 0 .45334.04169.60999.125.16.08002.27667.19.35001.32999.07666.13998.11499.29666.11499.47 0 .13666-.02332.255-.07001.35501-.04333.09665-.09833.17664-.16501.23999-.06668.06003-.13165.10666-.19501.14001.13.06332.245.16666.345.31.10333.14334.155.31668.155.51999 0 .18332-.04166.35165-.125.505-.08334.15332-.20834.27667-.375.37-.16333.09003-.36667.13501-.60999.13501h-1.40498zm.375-.405h.965c.21667-.00003.38333-.05832.5-.17499.11664-.11667.17499-.26001.17499-.42999 0-.1767-.05835-.32169-.17499-.435-.11667-.11667-.28333-.17496-.5-.17499h-.965zm0-1.61499h.92001c.21335-.00003.375-.04831.48499-.14499.10999-.09998.16501-.23499.16501-.405s-.05502-.30002-.16501-.39001c-.11002-.09-.27167-.13501-.48499-.13501h-.92001zm2.89999 2.01999c-.03333 0-.06168-.01001-.08499-.03-.01999-.02335-.03-.05167-.03-.08499v-2.36499c0-.03333.01001-.06168.03-.08499.02332-.02332.05167-.035.08499-.035h.23001c.03336 0 .06168.01169.08499.035.02335.02332.03503.05167.035.08499v.22c.06668-.11334.15836-.19833.27499-.255.11667-.05667.25668-.08499.42001-.08499h.20001c.03329 0 .06.01169.07999.035.02002.01999.02997.04666.03.07999v.20499c-.00003.03336-.00998.06-.03.07999-.01999.02002-.04669.03003-.07999.03h-.29999c-.17996.00003-.32166.05331-.42499.16-.10333.10333-.155.245-.155.42499v1.47c0 .03333-.01169.06165-.035.08499-.02332.01999-.05167.03-.08499.03l-.24506.00003h.00002zm2.80127.04999c-.25333 0-.465-.04834-.63501-.14499-.16998-.09665-.29999-.22998-.39001-.39999-.09-.17334-.14001-.37-.14999-.59-.00336-.05667-.00497-.12833-.005-.215.00003-.09003.00165-.16168.005-.215.00998-.22333.06-.41998.14999-.59.09335-.16998.22498-.30334.39499-.39999s.38-.14499.63-.14499.45999.04834.63.14499.30002.23001.39001.39999c.09335.17001.14502.36667.155.59.00333.05331.005.12497.005.215 0 .08667-.00168.15833-.005.215-.01001.22-.06.41666-.14999.59-.09.17001-.22.30334-.39001.39999s-.38168.14499-.63501.14499zm0-.38501c.20667 0 .37167-.065.495-.19501.12335-.13333.19-.32666.20001-.57999.00333-.05002.005-.11337.005-.19 0-.07669-.00168-.13998-.005-.19-.01001-.25333-.07666-.44504-.20001-.57501-.12332-.13336-.28833-.20001-.495-.20001s-.37332.06665-.5.20001c-.12332.12997-.18835.32169-.19501.57501-.00336.05002-.005.11331-.005.19 0 .07663.00165.13998.005.19.00665.25333.07169.44666.19501.57999.12668.13.29333.19501.5.19501zm2.79563.33499c-.18665 0-.33835-.035-.45499-.10501-.11667-.07333-.20166-.17499-.255-.30499-.05331-.13333-.08002-.28998-.07999-.47v-1.32001h-.39001c-.03336.00003-.06168-.00998-.08499-.03-.02002-.02332-.02997-.0517-.03-.08499v-.17001c.00003-.03333.00998-.06.03-.07999.02332-.02335.05164-.035.08499-.035h.39001v-.83499c-.00003-.03329.00998-.06.03-.07999.02332-.02335.0517-.03503.08499-.035h.23499c.03329-.00003.06.01166.07999.035.02335.01999.03503.04669.035.07999v.83499h.62c.03336 0 .06.01166.07999.035.02335.01999.03497.04666.035.07999v.17001c-.00003.03329-.01166.06168-.035.08499-.01999.02002-.04663.03003-.07999.03h-.62v1.285c.00003.15668.02667.28.07999.37.05334.09003.14832.13501.285.13501h.30499c.03333 0 .05997.01169.07999.035.02332.01999.035.04666.035.07999v.17999c0 .03333-.01169.06168-.035.08499-.02002.01999-.04666.03-.07999.03l-.34497.00003h-.00002zm1.05999 0c-.03336 0-.06168-.01001-.08499-.03-.02002-.02335-.02997-.05167-.03-.08499v-3.32001c.00003-.03329.00998-.06.03-.07999.02332-.02335.05164-.03503.08499-.035h.25c.03665-.00003.065.01166.08499.035.02002.01999.03003.04669.03.07999v1.16501c.09003-.11334.20001-.20499.32999-.27499.13-.07001.29498-.10501.495-.10501.21667 0 .40002.04831.54999.14499.15332.09335.26837.22501.345.39499.08002.16666.11996.36169.12.58499v1.41c-.00003.03333-.00998.06168-.03.08499-.01999.01999-.04831.03-.08499.03h-.25c-.03329 0-.06168-.01001-.08499-.03-.02002-.02332-.03003-.05167-.03-.08499v-1.38501c-.00003-.23334-.05667-.41501-.17001-.54501-.11334-.13333-.28-.20004-.5-.20001-.20667-.00003-.37335.06668-.5.20001-.12668.13-.19.31168-.19.54501v1.38501c0 .03333-.01001.06168-.03.08499-.01999.01999-.04831.03-.08499.03l-.24997.00003zm3.96.04999c-.34335.00003-.61667-.10501-.82001-.315-.20331-.21335-.315-.50333-.33499-.87-.00333-.04333-.005-.09836-.005-.16501 0-.07001.00168-.12671.005-.17001.01331-.23666.06833-.44333.16501-.62.09668-.17999.22833-.31833.39499-.41501.17001-.09665.36835-.14499.595-.14499.25333 0 .465.05334.63501.16.17334.10669.30499.25833.39499.45499.09003.19669.13504.42667.13501.69v.08499c.00003.03665-.01166.065-.035.08499-.01999.01999-.04669.03-.07999.03h-1.73001v.04498c.00668.13666.03668.26498.09.38501.05331.11667.12997.21167.23001.285.10001.07333.22.10999.35999.10999.12 0 .22-.01834.29999-.05499.08002-.03668.14499-.07663.19501-.12.04999-.04666.08337-.0817.10001-.10501.03-.04333.05334-.06836.07001-.07501.01666-.01001.0433-.01501.07999-.01501h.23999c.03333 0 .06.01001.07999.03.02332.01666.03333.04166.03.07501-.00336.05002-.03.11166-.07999.185-.04999.07001-.12167.13998-.215.20999s-.20667.12833-.34.17499c-.13333.04333-.28665.065-.45999.065v.00009h-.00002zm-.68-1.54001h1.37v-.01501c0-.14999-.02832-.28333-.08499-.39999-.05334-.11667-.13162-.20834-.23499-.27499-.10336-.07001-.22665-.10501-.37-.10501s-.26663.035-.37.10501c-.10001.06665-.17667.15833-.23001.27499-.05331.11667-.07996.25-.07999.39999l-.00003.01501h.00002zm2.56 1.48999c-.03333 0-.06165-.01001-.08499-.03-.01999-.02332-.03-.05167-.03-.08499v-2.36499c0-.03333.01001-.06165.03-.08499.02335-.02335.05167-.035.08499-.035h.23001c.03333 0 .06165.01166.08499.035.02332.02335.035.05167.035.08499v.22c.06668-.11331.15833-.19836.27499-.255.11664-.05664.25665-.08499.42001-.08499h.20001c.03333 0 .05997.01166.07999.035.01999.01999.03.04666.03.07999v.20499c0 .03333-.01001.05997-.03.07999-.02002.01999-.04666.03-.07999.03h-.29999c-.17999 0-.32162.05334-.42499.16-.10336.10333-.155.245-.155.42499v1.47c0 .03329-.01166.06168-.035.08499-.02335.02002-.05167.03003-.08499.03l-.24506.00003h.00002zm2.685.04999c-.18668 0-.34668-.02335-.48001-.07001-.13333-.04669-.24167-.10336-.32501-.17001-.08331-.06665-.14667-.13333-.19-.20001-.04001-.06668-.06168-.12003-.065-.16-.00336-.03668.00833-.065.035-.08499s.05334-.03.07999-.03h.22c.02002 0 .03503.00333.04501.01001.01334.00333.02997.01666.04999.04001.04333.04666.09167.09335.14499.14001.05334.04669.11832.08502.19501.11499.08002.03.17831.04501.29501.04501.17001 0 .31003-.03168.42001-.095.11002-.06665.16504-.16333.16501-.29001.00003-.08331-.02335-.15002-.07001-.20001-.04333-.05002-.12332-.09503-.23999-.13501-.11331-.04001-.27002-.08167-.47-.125-.20001-.04669-.35834-.10333-.47501-.17001-.11664-.07004-.19998-.15164-.25-.245-.04999-.09668-.07501-.20499-.07501-.32501 0-.12332.03665-.24167.10999-.35501.07333-.11664.18002-.21167.32001-.285.14334-.0733.32169-.11002.535-.10999.17334-.00003.32166.02167.44501.065.12332.04333.22501.09836.30499.16501.08002.06335.13998.12665.17999.19.03998.06332.06168.11667.065.16.00336.03333-.00665.06165-.03.08499-.02335.01999-.04999.03-.07999.03h-.20999c-.02335 0-.04333-.005-.06-.01501-.01334-.01001-.02667-.0217-.04001-.035-.03333-.04333-.07333-.08667-.12-.13-.04333-.04333-.10165-.07831-.17499-.10501-.07001-.03003-.16336-.04501-.28-.04501-.16666 0-.29166.035-.375.10501-.08331.07001-.12497.15836-.125.26501.00003.06332.01834.12003.05499.17001.03665.05002.10666.09503.20999.13501.10333.04001.25668.08334.45999.13.22.04333.39334.10165.51999.17499.12668.0733.21664.15833.26999.255s.07999.20831.07999.33499c0 .14001-.04166.26834-.125.38501-.07999.11667-.19998.20999-.35999.28-.15665.06668-.35162.10001-.58499.10001l.00003.00003z" fill="#716f72"/><path d="m59.96933 269.34299c-.03333 0-.06165-.00998-.08499-.03-.01999-.02335-.03-.05167-.03-.08499v-3.26501c0-.03668.01001-.065.03-.08499.02335-.02335.05167-.035.08499-.035h.25c.04001 0 .07001.01001.09.03s.03168.03668.035.04999l1.06 2.01999 1.065-2.01999c.00668-.01331.01834-.03.035-.04999.01999-.01999.05002-.03.09-.03h.245c.03668 0 .065.01166.08499.035.02335.01999.035.04831.035.08499v3.26501c0 .03333-.01166.06165-.035.08499-.01999.02002-.04831.03-.08499.03h-.245c-.03333 0-.06165-.00998-.08499-.03-.01999-.02335-.03-.05167-.03-.08499v-2.45999l-.83499 1.63c-.01334.03329-.03333.06-.06.07999-.02667.01666-.06.02502-.10001.02499h-.155c-.04333.00003-.07834-.00833-.10501-.02499-.02335-.01999-.04333-.04669-.06-.07999l-.83499-1.63v2.45999c0 .03333-.01166.06165-.035.08499-.01999.02002-.04666.03-.07999.03h-.24503.00002zm4.85501.04998c-.25333 0-.465-.04834-.63501-.14499s-.30002-.23001-.39001-.39999c-.09-.17334-.13998-.37-.14999-.59-.00336-.05667-.005-.12833-.005-.215 0-.09.00165-.16165.005-.215.01001-.22336.06-.42001.14999-.59.09335-.17001.22501-.30334.39499-.39999.17001-.09665.38-.14499.63-.14499s.46002.04834.63.14499c.17001.09665.30002.22998.39001.39999.09335.16998.14502.36664.155.59.00333.05334.005.125.005.215 0 .08667-.00168.15833-.005.215-.01001.22-.06003.41666-.14999.59-.09.16998-.22.30334-.39001.39999-.16998.09665-.38165.14499-.63501.14499zm0-.385c.20667 0 .37167-.065.495-.19501.12332-.13336.19-.32666.20001-.57999.00333-.05002.005-.11334.005-.19s-.00168-.13998-.005-.19c-.01001-.25336-.07669-.44501-.20001-.57501-.12332-.13333-.28833-.19998-.495-.20001-.20667.00003-.37332.06668-.5.20001-.12332.13-.18832.32166-.19501.57501-.00333.05002-.005.11334-.005.19s.00168.13998.005.19c.00668.25336.07169.44669.19501.57999.12668.13.29333.19501.5.19501zm1.92001.33499c-.03333-.00003-.06165-.00998-.08499-.03-.01999-.02332-.03-.05164-.03-.08499v-2.37c0-.03336.01001-.06.03-.07999.02335-.02335.05167-.03497.08499-.035h.23499c.03333.00003.06.01166.07999.035.02335.01999.035.04663.035.07999v.22c.08667-.11334.19501-.20502.32501-.27499.13333-.07333.30334-.10999.51001-.10999.21667 0 .40002.04834.54999.14499.15332.09332.26834.22501.345.39499.07666.16669.11499.36166.11499.58499v1.41c0 .03336-.00998.06168-.03.08499-.01999.02002-.04666.02997-.07999.03h-.25c-.03333-.00003-.06168-.00998-.08499-.03-.02002-.02332-.03-.05164-.03-.08499v-1.38501c0-.23334-.05667-.41501-.17001-.54501-.11334-.13336-.28-.20001-.5-.20001-.20667 0-.37335.06665-.5.20001-.12335.13-.185.31168-.185.54501v1.38501c0 .03336-.01166.06168-.035.08499-.01999.02002-.04666.02997-.07999.03h-.25001zm3.03 0c-.03333-.00003-.06165-.00998-.08499-.03-.01999-.02332-.03-.05164-.03-.08499v-2.37c0-.03336.01001-.06.03-.07999.02335-.02335.05167-.03497.08499-.035h.22501c.03333.00003.06.01166.07999.035.02335.01999.035.04663.035.07999v.17499c.07666-.10336.17334-.18497.29001-.245.11667-.06335.25668-.095.42001-.095.37665-.00336.64334.14996.79999.45999.07666-.14001.18832-.25168.33499-.33499.14667-.08334.31332-.125.5-.125.17334 0 .33002.03998.47.12.14334.07999.255.20166.33499.36499.08334.15997.125.36169.125.60501v1.44501c0 .03336-.01169.06168-.035.08499-.02002.02002-.04666.02997-.07999.03h-.23499c-.03333-.00003-.06165-.00998-.08499-.03-.01999-.02332-.03-.05164-.03-.08499v-1.39999c0-.18665-.02664-.33334-.07999-.44-.05331-.10669-.125-.18167-.215-.22501s-.18832-.06497-.29501-.065c-.08667.00003-.17502.02167-.26501.065-.09003.04333-.16501.11832-.22501.22501-.05667.10666-.08499.25336-.08499.44v1.39999c0 .03336-.01166.06168-.035.08499-.01999.02002-.04666.02997-.07999.03h-.23499c-.03333-.00003-.06165-.00998-.08499-.03-.01999-.02332-.03-.05164-.03-.08499v-1.39999c0-.18665-.02832-.33334-.08499-.44-.05667-.10669-.13-.18167-.22-.22501-.09003-.04333-.185-.06497-.285-.065-.08667.00003-.17502.02167-.26501.065s-.16501.11832-.22501.22501c-.05664.10666-.08499.25168-.08499.435v1.405c0 .03336-.01166.06168-.035.08499-.01999.02002-.04666.02997-.07999.03h-.24004zm5.39499.04998c-.25336 0-.46503-.04834-.63501-.14499-.17001-.09668-.30002-.22998-.39001-.39999-.09003-.17331-.13998-.37003-.14999-.59-.00333-.05667-.005-.12833-.005-.215 0-.09.00168-.16165.005-.215.01001-.22333.06003-.42001.14999-.59.09332-.17001.22501-.30331.39499-.39999.17001-.09665.37997-.14499.63-.14499.24997 0 .46002.04834.63.14499.17001.09668.29999.22998.39001.39999.09332.16998.14499.36667.155.59.00336.05334.005.125.005.215 0 .08667-.00165.15833-.005.215-.01001.21997-.06.41669-.14999.59-.09.17001-.22003.30331-.39001.39999-.17001.09665-.38168.14499-.63501.14499zm0-.38501c.20667 0 .37164-.06497.495-.19501.12332-.13333.19-.32669.20001-.57999.00336-.04999.005-.11334.005-.19s-.00165-.13998-.005-.19c-.01001-.25333-.07669-.44501-.20001-.57501-.12335-.13336-.28833-.20001-.495-.20001s-.37335.06665-.5.20001c-.12335.13-.18832.32169-.19501.57501-.00333.05002-.005.11334-.005.19s.00168.14001.005.19c.00668.25336.07166.44666.19501.57999.12665.13004.29333.19501.5.19501zm2.775.38501c-.21335 0-.39499-.04666-.54501-.14001-.14667-.09668-.25836-.22998-.33499-.39999-.07669-.16998-.11502-.36499-.11499-.58499v-1.41c-.00003-.03333.00998-.06.03-.07999.02332-.02332.0517-.035.08499-.035h.25c.03336 0 .06.01169.07999.035.02335.01999.03497.04666.035.07999v1.38501c-.00003.49667.21664.745.64999.745.20667 0 .37167-.065.495-.19501.12668-.13336.19-.31665.19-.54999v-1.38501c0-.03333.01001-.06.03-.07999.02335-.02332.05167-.035.08499-.035h.245c.03665 0 .065.01169.08499.035.01999.01999.03.04666.03.07999v2.37c0 .03333-.01001.06165-.03.08499-.01999.01999-.04834.03-.08499.03h-.23001c-.03336 0-.06168-.01001-.08499-.03-.02002-.02335-.02997-.05167-.03-.08499v-.22c-.09.11667-.20001.20999-.32999.28-.12665.07001-.29498.10501-.505.10501h.00003-.00002zm3.05499-.04998c-.18665-.00003-.33835-.035-.45499-.10501-.11667-.0733-.20166-.17499-.255-.30499-.05331-.13336-.08002-.29001-.07999-.47v-1.32001h-.39001c-.03336 0-.06168-.01001-.08499-.03-.02002-.02335-.02997-.05167-.03-.08499v-.17001c.00003-.03333.00998-.06.03-.07999.02332-.02332.05164-.035.08499-.035h.39001v-.83499c-.00003-.03333.00998-.05997.03-.07999.02332-.02332.0517-.035.08499-.035h.23499c.03329 0 .06.01169.07999.035.02335.02002.03503.04666.035.07999v.83499h.62c.03336 0 .06.01169.07999.035.02335.01999.03497.04666.035.07999v.17001c-.00003.03333-.01166.06165-.035.08499-.01999.01999-.04663.03-.07999.03h-.62v1.285c.00003.15665.02667.27997.07999.37.05334.09.14832.13501.285.13501h.30499c.03333 0 .05997.01166.07999.035.02332.01999.035.04666.035.07999v.17999c0 .03333-.01169.06165-.035.08499-.02002.01999-.04666.03-.07999.03l-.34497.00003h-.00002zm1.06 0c-.03336-.00003-.06168-.00998-.08499-.03-.02002-.02332-.02997-.05164-.03-.08499v-3.32001c.00003-.03333.00998-.05997.03-.07999.02332-.02332.05164-.035.08499-.035h.25c.03665 0 .065.01169.08499.035.02002.02002.03003.04666.03.07999v1.16501c.09003-.11334.20001-.20502.32999-.27499.13-.07004.29498-.10501.495-.10501.21667 0 .40002.04834.54999.14499.15332.09335.26837.22501.345.39499.08002.16669.11996.36166.12.58499v1.41c-.00003.03333-.00998.06165-.03.08499-.01999.01999-.04831.03-.08499.03h-.25c-.03329 0-.06168-.01001-.08499-.03-.02002-.02335-.03003-.05167-.03-.08499v-1.38501c-.00003-.23334-.05667-.41504-.17001-.54501-.11334-.13336-.28-.20001-.5-.20001-.20667 0-.37335.06665-.5.20001-.12668.12997-.19.31168-.19.54501v1.38501c0 .03333-.01001.06165-.03.08499-.01999.01999-.04831.03-.08499.03l-.24997.00003z" fill="#716f72"/><path d="m66.08453 275.39297c-.30667 0-.56168-.05667-.76501-.17001-.19998-.11334-.35165-.27167-.45499-.47501-.10333-.20331-.16-.44-.17001-.70999-.00333-.13669-.005-.28333-.005-.44 0-.15665.00168-.30667.005-.45001.01001-.27002.06668-.50668.17001-.70999.10333-.20334.255-.36166.45499-.47501.20334-.11334.45834-.17001.76501-.17001.23001 0 .43167.03168.60501.095s.31665.14835.42999.255c.11664.10666.20499.22668.26501.35999.06.13.09332.26501.10001.405.00333.03003-.00668.05499-.03.07501-.02002.01999-.04498.03-.07501.03h-.27499c-.03 0-.05667-.00833-.07999-.02499-.01999-.01666-.035-.04666-.04501-.09-.05667-.26001-.16333-.43835-.32001-.535-.15335-.09668-.34665-.14502-.57999-.14499-.26666-.00003-.47833.07669-.63501.23001-.15665.15002-.24164.39166-.255.72501-.01001.27332-.01001.55334 0 .84.01331.33334.09833.57666.255.73001.15668.14999.36835.22501.63501.22501.23334 0 .42667-.04831.57999-.14499.15665-.09668.26334-.27499.32001-.535.01001-.04333.02502-.0733.04501-.09.02335-.01669.04999-.02499.07999-.02499h.27499c.03003 0 .05499.01001.07501.03.02332.01999.03333.04501.03.07501-.00668.13998-.04001.27667-.10001.41-.06.13-.14832.24835-.26501.35501-.11334.10666-.25668.19168-.42999.255-.17334.06332-.375.095-.60501.095v-.00006zm3.07001 0c-.25333 0-.465-.04834-.63501-.14499s-.30002-.23001-.39001-.39999c-.09-.17334-.13998-.37-.14999-.59-.00336-.05667-.005-.12833-.005-.215 0-.09.00165-.16165.005-.215.01001-.22336.06-.42001.14999-.59.09335-.17001.22501-.30334.39499-.39999.17001-.09665.38-.14499.63-.14499s.46002.04834.63.14499c.17001.09665.30002.22998.39001.39999.09335.16998.14502.36664.155.59.00333.05334.005.125.005.215 0 .08667-.00168.15833-.005.215-.01001.22-.06003.41666-.14999.59-.09.16998-.22.30334-.39001.39999-.16998.09665-.38165.14499-.63501.14499zm0-.385c.20667 0 .37167-.065.495-.19501.12332-.13336.19-.32666.20001-.57999.00333-.05002.005-.11334.005-.19s-.00168-.13998-.005-.19c-.01001-.25336-.07669-.44501-.20001-.57501-.12332-.13333-.28833-.19998-.495-.20001-.20667.00003-.37332.06668-.5.20001-.12332.13-.18832.32166-.19501.57501-.00333.05002-.005.11334-.005.19s.00168.13998.005.19c.00668.25336.07169.44669.19501.57999.12668.13.29333.19501.5.19501zm2.1478.33499c-.03333-.00003-.06165-.00998-.08499-.03-.01999-.02332-.03-.05164-.03-.08499v-2.08499h-.42499c-.03333 0-.06165-.01001-.08499-.03-.01999-.02335-.03-.05167-.03-.08499v-.17001c0-.03336.01001-.06.03-.07999.02335-.02335.05167-.03497.08499-.035h.42499v-.25c0-.16998.02832-.31833.08499-.44501.05667-.13.14667-.23001.26999-.29999.12668-.07001.29501-.10501.505-.10501h.29999c.03333 0 .06.01166.07999.035.01999.02002.03.04666.03.07999v.17001c0 .03333-.01001.06165-.03.08499-.01999.01999-.04666.03-.07999.03h-.29001c-.15665 0-.26334.04166-.32001.125-.05667.07999-.08499.19666-.08499.35001v.22501h1.07001v-.25c0-.16998.02667-.31833.07999-.44501.05667-.13.14664-.23001.26999-.29999.12665-.07001.29498-.10501.505-.10501h.29999c.03333 0 .06.01166.07999.035.02335.02002.035.04666.035.07999v.17001c0 .03333-.01166.06165-.035.08499-.01999.01999-.04666.03-.07999.03h-.29001c-.15668 0-.26334.04166-.32001.125-.05664.07999-.08499.19666-.08499.35001v.22501h.64499c.03336.00003.06.01166.07999.035.02335.01999.03497.04663.035.07999v.17001c-.00003.03333-.01166.06165-.035.08499-.01999.01999-.04663.03-.07999.03h-.64499v2.08499c0 .03336-.00998.06168-.03.08499-.02002.02002-.04834.02997-.08499.03h-.23001c-.03333-.00003-.06168-.00998-.08499-.03-.02002-.02332-.03-.05164-.03-.08499v-2.08499h-1.07001v2.08499c0 .03336-.01169.06168-.035.08499-.02002.02002-.04666.02997-.07999.03h-.23494zm4.06656.04998c-.34332 0-.61667-.10501-.82001-.315-.20334-.21335-.31497-.50333-.33499-.87-.00336-.0433-.005-.09833-.005-.16501 0-.07001.00165-.12668.005-.17001.01334-.23669.06836-.44333.16501-.62.09665-.18002.22833-.31833.39499-.41501.17001-.09668.36835-.14496.595-.14499.25336.00003.46503.05331.63501.16.17337.10666.30499.2583.39499.45499.09003.19669.13501.4267.13501.69v.08499c0 .03668-.01166.065-.035.08499-.01999.01999-.04666.03-.07999.03h-1.73001v.04498c.00668.13666.03665.26501.09.38501.05331.11664.12997.21167.23001.285.10001.07333.22.10995.35999.10999.11996-.00003.22-.01834.29999-.05499s.14502-.07666.19501-.12c.05002-.04666.08334-.08167.10001-.10501.03003-.04333.05334-.06833.07001-.07501.01666-.01001.04333-.01501.07999-.01501h.23999c.03336 0 .06.00998.07999.03.02335.01669.03336.04166.03.07501-.00333.04999-.03.11166-.07999.185-.04999.06998-.12164.14001-.215.20999-.09335.07001-.20667.12836-.34.17499-.13336.04333-.28668.065-.45999.065v.00009h-.00002zm-.68-1.54h1.37v-.01501c0-.15002-.02832-.28333-.08499-.39999-.05331-.11664-.13165-.20831-.23499-.27499-.10333-.07001-.22665-.10498-.37-.10501-.14331.00003-.26666.035-.37.10501-.09998.06668-.17664.15836-.23001.27499-.05331.11667-.07999.24997-.07999.39999l-.00003.01501h.00002zm3.47998 1.54c-.34335 0-.6167-.10501-.82001-.315-.20334-.21335-.315-.50333-.33499-.87-.00333-.0433-.005-.09833-.005-.16501 0-.07001.00168-.12668.005-.17001.01331-.23669.06833-.44333.16501-.62.09668-.18002.2283-.31833.39499-.41501.16998-.09668.36835-.14496.595-.14499.25333.00003.465.05331.63501.16.17334.10666.30502.2583.39499.45499.09.19669.13501.4267.13501.69v.08499c0 .03668-.01169.065-.035.08499-.01999.01999-.04666.03-.07999.03h-1.73001c-.00003.00336-.00003.01001 0 .01999-.00003.01001-.00003.01834 0 .02499.00665.13666.03668.26501.09.38501.05334.11664.13.21167.23001.285.09998.07333.22.10995.35999.10999.12-.00003.21997-.01834.29999-.05499.07999-.03665.14499-.07666.19501-.12.05002-.04666.08334-.08167.10001-.10501.03-.04333.05334-.06833.07001-.07501.01666-.01001.04333-.01501.07999-.01501h.23999c.03333 0 .05997.00998.07999.03.02332.01669.03333.04166.03.07501-.00333.04999-.03.11166-.07999.185-.05002.06998-.12167.14001-.215.20999-.09335.07001-.2067.12836-.34.17499-.13333.04333-.28665.065-.45999.065v.00009h-.00002zm-.67999-1.54h1.37v-.01501c.00003-.15002-.02835-.28333-.08499-.39999-.05334-.11664-.13165-.20831-.23499-.27499-.10333-.07001-.22668-.10498-.37-.10501-.14334.00003-.26666.035-.37.10501-.10001.06668-.17667.15836-.23001.27499-.05334.11667-.07999.24997-.07999.39999l-.00003.01501h.00002z" fill="#716f72"/><path d="m167.81328 276.1803c-.03667 0-.065-.01001-.08501-.03-.02-.02335-.03-.05167-.03-.08499v-3.26501c0-.03665.00999-.06497.03-.08499.02-.02332.04834-.035.08501-.035h1.37c.25 0 .45334.04166.61.125.16.07999.27667.18997.35001.32999.07668.13998.11501.29666.11501.47 0 .13666-.02335.25497-.07001.35501-.04333.09668-.09833.17667-.16499.23999-.06667.06-.13167.10669-.19501.14001.13.06335.24501.16666.345.31.10333.14331.155.31665.155.51999 0 .18332-.04167.35165-.125.505s-.20833.27667-.375.37c-.16333.09-.36667.13501-.61.13501h-1.405zm.375-.405h.965c.21666 0 .38333-.05835.5-.17499.11667-.11667.175-.25998.175-.42999 0-.17667-.05833-.32169-.175-.435-.11667-.11667-.28334-.17499-.5-.17499h-.965zm0-1.61499h.92c.21333 0 .375-.04834.485-.14499.10999-.10001.16499-.23502.16499-.405 0-.17001-.05501-.30002-.16499-.39001-.11-.09003-.27167-.13501-.485-.13501h-.92zm2.5753 2.01999c-.02666 0-.05-.01001-.07001-.03-.01999-.02002-.03-.04333-.03-.07001 0-.01666.00166-.035.005-.05499l1.24001-3.23499c.01334-.03333.03166-.06.05499-.07999.02335-.01999.05833-.03.105-.03h.34c.04333 0 .07666.01001.10001.03.02666.01999.04666.04666.06.07999l1.235 3.23499c.00667.01999.00998.03833.00999.05499-.00002.02667-.00999.04999-.03.07001-.02.01999-.04333.03-.07001.03h-.255c-.03999 0-.07001-.01001-.09-.03-.01668-.02002-.02834-.03833-.035-.05499l-.27499-.70999h-1.64l-.27499.70999c-.00333.01666-.01501.03497-.035.05499-.02.01999-.04999.03-.09.03h-.25499zm.8-1.22501h1.35001l-.675-1.77499-.675 1.77499zm3.97533 1.275c-.28334 0-.52666-.04831-.73-.14499-.20332-.09998-.36-.25165-.47-.45499-.10999-.20667-.17166-.465-.185-.77499-.00334-.14667-.005-.28668-.005-.42001 0-.13666.00166-.27832.005-.42499.01334-.30667.07668-.56168.19-.76501.11667-.20667.27667-.36002.48-.45999.20667-.10333.44501-.155.715-.155.27335 0 .51167.05167.715.155.20667.09998.36833.25333.485.45999.11667.20334.17999.45834.19.76501.00665.14667.00999.28833.00999.42499 0 .13333-.00334.27335-.00999.42001-.01001.31-.07167.56833-.185.77499-.11.20334-.26666.35501-.47.45499-.20334.09668-.44833.14499-.735.14499zm0-.42499c.25667 0 .465-.07666.625-.23001.16331-.15332.25166-.40167.265-.745.00665-.14999.00999-.28333.00999-.39999 0-.12-.00334-.25333-.00999-.39999-.00667-.23001-.05-.41666-.13-.56-.07668-.14331-.18001-.24835-.31-.315-.13-.06668-.28-.10001-.45-.10001-.16335 0-.30998.03333-.44.10001-.12999.06665-.23502.17169-.315.315-.07668.14334-.12001.32999-.13.56-.00334.14667-.00502.28-.005.39999-.00002.11667.00166.25.005.39999.01334.34332.10167.59167.265.745.16333.15335.37.23001.62.23001h.00002z" fill="#716f72"/><path d="m140.80128 280.10712c-.03665 0-.065-.00998-.08501-.03-.02-.02332-.03-.05167-.03-.08499v-3.26501c0-.03665.00999-.065.03-.08499.02-.02335.04832-.035.08501-.035h2.065c.03667 0 .065.01166.08501.035.02.01999.03.04834.03.08499v.19c0 .03665-.00999.06497-.03.08499-.02.01999-.04834.03-.08501.03h-1.7v1.095h1.59c.03667 0 .065.01166.08501.035.01999.01999.03.04834.03.08499v.185c0 .03333-.01001.06165-.03.08499-.02.01999-.04834.03-.08501.03h-1.59v1.13501h1.74001c.03665 0 .065.01001.08501.03s.03.04831.03.08499v.19501c0 .03333-.00999.06165-.03.08499-.02.01999-.04832.03-.08501.03zm2.97001 0c-.03333 0-.06168-.00998-.08501-.03-.02-.02332-.03-.05167-.03-.08499v-3.32001c0-.03333.00999-.05997.03-.07999.02333-.02332.05168-.035.08501-.035h.235c.03667 0 .065.01169.08501.035.01999.02002.03.04666.03.07999v3.32001c0 .03333-.01001.06168-.03.08499-.02.02002-.04834.03-.08501.03zm1.21499 0c-.03334 0-.06168-.00998-.08501-.03-.02-.02332-.03-.05167-.03-.08499v-3.32001c0-.03333.00999-.05997.03-.07999.02333-.02332.05167-.035.08501-.035h.235c.03667 0 .06499.01169.08501.035.02.02002.03.04666.03.07999v3.32001c0 .03333-.00999.06168-.03.08499-.01999.02002-.04834.03-.08501.03zm1.21001 0c-.03334 0-.06166-.00998-.08501-.03-.01999-.02332-.03-.05167-.03-.08499v-2.37c0-.03333.01001-.06.03-.07999.02335-.02335.05167-.035.08501-.035h.24001c.03333 0 .06.01166.08.035.02.01999.03.04666.03.07999v2.37c0 .03333-.00999.06168-.03.08499-.02.02002-.04668.03-.08.03zm-.03999-3.08499c-.03333 0-.06168-.01001-.08501-.03-.02-.02335-.03-.05167-.03-.08499v-.26999c0-.03333.00999-.06.03-.07999.02333-.02335.05168-.035.08501-.035h.315c.03334 0 .06.01166.08.035.02333.01999.035.04666.035.07999v.26999c0 .03333-.01167.06165-.035.08499-.02.01999-.04666.03-.08.03zm2.19999 3.13501c-.25334 0-.465-.04834-.63499-.14499-.17001-.09665-.3-.23001-.39-.39999-.09-.17334-.14-.37-.14999-.59-.00334-.05667-.005-.12833-.005-.215 0-.09.00166-.16168.005-.215.00999-.22333.06-.42001.14999-.59.09334-.17001.22499-.30334.395-.39999.17-.09665.38-.14499.63-.14499s.45999.04834.63.14499c.17.09665.3.22998.39.39999.09334.16998.145.36667.155.59.00334.05331.005.125.005.215 0 .08667-.00166.15833-.005.215-.00999.22-.06.41666-.14999.59-.09.16998-.22.30334-.39.39999-.17001.09665-.38167.14499-.63499.14499zm0-.38501c.20667 0 .37166-.065.495-.19501.12334-.13336.18999-.32666.2-.57999.00334-.05002.005-.11334.005-.19s-.00166-.13998-.005-.19c-.01001-.25333-.07666-.44501-.2-.57501-.12334-.13333-.28833-.20001-.495-.20001s-.37334.06668-.5.20001c-.12334.13-.18834.32169-.19501.57501-.00334.05002-.005.11334-.005.19s.00166.13998.005.19c.00667.25333.07167.44669.19501.57999.12666.13.29333.19501.5.19501zm2.79563.33499c-.18666 0-.33833-.035-.455-.10501-.11667-.0733-.20168-.17499-.255-.30499-.05334-.13336-.08-.29001-.08-.47v-1.32001h-.39c-.03333 0-.06168-.01001-.08501-.03-.02-.02335-.03-.05167-.03-.08499v-.17001c0-.03333.00999-.06.03-.07999.02333-.02335.05168-.035.08501-.035h.39v-.83499c0-.03333.00999-.05997.03-.07999.02333-.02332.05168-.035.08501-.035h.235c.03334 0 .06.01169.08.035.02333.02002.035.04666.035.07999v.83499h.62c.03333 0 .06.01166.08.035.02333.01999.035.04666.035.07999v.17001c0 .03333-.01167.06165-.035.08499-.02.01999-.04668.03-.08.03h-.62v1.285c0 .15665.02667.27997.08.37.05333.09.14833.13501.285.13501h.30499c.03334 0 .06001.01166.08.035.02335.01999.035.04666.035.07999v.17999c0 .03333-.01166.06165-.035.08499-.01999.01999-.04666.03-.08.03zm.93501-2.58499c-.02667 0-.04834-.01001-.065-.03-.01334-.01999-.01834-.04501-.015-.07501l.11501-.715c.00667-.04001.01999-.07333.03999-.10001.02333-.03.05667-.04501.10001-.04501h.33501c.02335 0 .04167.01001.05499.03.01666.01666.02499.035.02499.05499 0 .02667-.00667.05334-.02.07999l-.25999.685c-.01334.03333-.03168.06165-.05499.08499-.01999.01999-.05167.03-.095.03l-.16.00006zm1.86749 2.63501c-.18666 0-.34666-.02335-.48-.07001-.13333-.04669-.24165-.10333-.325-.17001-.08333-.06668-.14667-.13333-.19-.20001-.03999-.06668-.06166-.12003-.065-.16-.00333-.03668.00833-.065.035-.08499s.05333-.03.08-.03h.22c.02 0 .03499.00333.045.01001.01334.00333.03.01666.05.04001.04333.04666.09166.09335.145.14001.05333.04666.11833.08499.19501.11499.08.03.17833.04501.295.04501.17 0 .31001-.03168.42-.095.11-.06668.16499-.16333.16499-.29001 0-.08331-.02333-.15002-.07001-.20001-.04333-.05002-.12334-.09503-.24001-.13501-.11333-.04001-.27-.08167-.47-.125-.20001-.04669-.35834-.10333-.47501-.17001-.11667-.07001-.2-.15167-.25-.245-.04999-.09665-.075-.20499-.075-.32501 0-.12332.03667-.24167.11-.35501.07333-.11664.17999-.21167.32001-.285.14334-.07333.32166-.10999.535-.10999.17334 0 .32167.02167.44501.065.12332.04333.22499.09836.30499.16501.07999.06335.13998.12665.17999.19.03999.06332.06166.11667.065.16.00333.03333-.00665.06165-.03.08499-.02333.01999-.05.03-.08.03h-.21001c-.02335 0-.04333-.005-.06-.01501-.01334-.01001-.02667-.0217-.03999-.035-.03334-.04333-.07333-.08667-.12-.13-.04333-.04333-.10167-.07834-.175-.10501-.07001-.03-.16333-.04501-.28-.04501-.16667 0-.29167.035-.375.10501-.08334.07001-.125.15836-.125.26501 0 .06332.01833.12003.05499.17001.03665.05002.10666.09503.21001.13501.10333.04001.25667.08334.46001.13.22.04333.39334.10165.52.17499.12666.0733.21667.15833.27.255.05334.09668.08.20831.08.33499 0 .13998-.04167.26834-.125.38501-.08.11667-.2.20999-.36.28-.15668.06668-.35167.10001-.58501.10001l-.00002.00003z" fill="#716f72"/><path d="m53.07623 229.29593c-.03659 0-.06491-.01071-.08499-.0322-.01999-.02151-.02979-.0498-.02979-.08301v-3.26465c0-.03711.01001-.0654.02979-.08789.01999-.02151.04831-.0322.08499-.0322h.22998c.04001 0 .07031.009.0903.02731.01999.01859.03171.0322.0347.043l1.66016 2.5498v-2.5c0-.03711.01031-.0654.0303-.08789.01999-.02151.04779-.0322.08499-.0322h.23975c.03659 0 .06589.01071.0874.0322.022.02249.03271.05081.03271.08789v3.25977c0 .0332-.01071.06149-.03271.08499-.02151.02341-.0488.03519-.08249.03519h-.23975c-.03659 0-.06439-.01001-.08249-.0303-.01859-.0195-.03079-.0332-.0376-.04001l-1.65479-2.52441v2.47949c0 .0332-.0112.06149-.03271.08301s-.05081.0322-.0874.0322h-.24023s-.00012-.00009-.00012-.00009z" fill="#716f72"/><path d="m57.41168 229.34573c-.34668 0-.62207-.10547-.8252-.31738s-.31494-.50098-.33496-.86719c-.00299-.04391-.005-.09961-.005-.16797 0-.06839.00101-.12402.005-.16699.01321-.2373.06839-.44434.16504-.62305.09671-.17773.229-.31543.39746-.41211.16846-.09671.36572-.14551.59229-.14551.25342 0 .46582.05371.6377.16016.17188.10742.30273.25879.39258.45508.08981.19727.13477.42676.13477.69043v.08499c0 .0361-.01071.06451-.0322.08499-.022.0195-.04929.0303-.08249.0303h-1.72998v.04489c.00601.13672.03659.26367.08981.38184.05319.11816.13086.21484.23242.28809.10156.07321.2207.10938.35742.10938.12012 0 .22021-.01761.30029-.05469.08011-.03711.14502-.07709.19482-.12207.05029-.0459.0835-.08109.1001-.1084.02979-.03909.05319-.06351.06979-.0723.0166-.008.04349-.0127.08011-.0127h.24512c.02979 0 .05569.01001.07761.02829.02151.01761.03079.04391.02731.07721-.00299.0498-.02979.11035-.08011.18262-.0498.07129-.12061.14258-.2124.21191-.0918.07031-.20508.12793-.33984.17285-.13525.04489-.2876.06741-.45752.06741 0 0 .00006-.00009.00006-.00009zm-.68506-1.54004h1.37012v-.01459c0-.15039-.0278-.2832-.08249-.40039-.05521-.11621-.13428-.20898-.23779-.27734-.10303-.06839-.22656-.10254-.37012-.10254-.14307 0-.26562.03421-.36719.10254-.10205.06839-.1792.16113-.23242.27734-.05371.11719-.08011.25-.08011.40039z" fill="#716f72"/><path d="m59.89655 229.34573c-.16699 0-.31836-.0332-.45508-.09961s-.24707-.15723-.33008-.27051c-.0835-.11328-.125-.24121-.125-.38477 0-.22949.09329-.41309.27979-.5498.18701-.13672.43018-.22656.72998-.27051l.74512-.10449v-.14551c0-.15918-.0459-.28418-.13721-.375-.0918-.0899-.24121-.13477-.44775-.13477-.14648 0-.2666.0303-.35986.0899-.09329.06049-.15869.13672-.19531.23047-.01999.0498-.05469.0752-.10498.0752h-.22461c-.03711 0-.06451-.01071-.08249-.0332-.01859-.02151-.0278-.04691-.0278-.07721 0-.0498.01901-.11133.05759-.18457.03809-.07321.09769-.14551.17773-.21582.07959-.06931.18213-.12891.30713-.17676.125-.0488.27783-.07321.45752-.07321.2002 0 .36865.0264.50537.07809.13623.05179.24414.12109.32227.20703.07809.08691.13477.18555.16992.29492.03519.11035.0527.22168.0527.33496v1.62012c0 .0332-.0112.06149-.03271.08301s-.04929.0322-.08249.0322h-.22998c-.03659 0-.065-.01071-.08499-.0322s-.02979-.0498-.02979-.08301v-.21484c-.04349.06049-.10205.11914-.17529.17773-.07321.05859-.16504.10645-.2749.14453-.10986.03909-.24512.05759-.40479.05759v.00003h-.00002zm.10498-.375c.13623 0 .26123-.0293.375-.08691.11328-.05859.20215-.14941.26709-.27246.0654-.12402.09769-.27832.09769-.46582v-.13965l-.58008.08499c-.23682.0332-.41504.0889-.53467.16797-.12012.07809-.18018.17676-.18018.29688 0 .09369.0274.1709.08249.23242.05521.0625.125.10742.20996.1377.08499.0303.17236.04489.2627.04489z" fill="#716f72"/><path d="m62.05133 229.29593c-.03369 0-.061-.01071-.08249-.0322-.022-.02151-.03271-.0498-.03271-.08301v-3.31934c0-.03421.01071-.06149.03271-.08301.02151-.02151.0488-.0322.08249-.0322h.23486c.03659 0 .06491.01071.08499.0322.01999.02151.02979.0488.02979.08301v3.31934c0 .0332-.01001.06149-.02979.08301-.01999.02151-.04831.0322-.08499.0322z" fill="#716f72"/><path d="m63.14166 226.71097c-.02689 0-.04791-.01001-.0625-.0303-.01511-.0195-.021-.04489-.01761-.0752l.11475-.71484c.00699-.04001.021-.07419.04251-.10254.022-.02829.0542-.04199.09769-.04199h.33496c.02341 0 .04251.009.05759.0274.01471.01859.02249.03711.02249.05759 0 .0264-.00699.0527-.01999.08011l-.26025.68457c-.01321.0332-.03079.06149-.05231.08301-.022.02151-.0527.0322-.0928.0322h-.16455.00003-.00002z" fill="#716f72"/><path d="m65.1861 229.34573c-.18652 0-.34668-.02341-.47998-.06931-.1333-.04691-.2417-.10352-.3252-.1709-.08301-.06641-.14551-.13281-.1875-.19922-.0415-.06741-.064-.12012-.06741-.16016-.00299-.03711.008-.0654.03519-.08499.0264-.02051.05319-.0303.08011-.0303h.22461c.0166 0 .03079.00299.04251.008s.0278.01859.04791.04199c.043.04691.09131.09369.14502.14062.05319.0459.11914.08499.19727.11426.07809.0303.17578.04489.29248.04489.16992 0 .31006-.0322.41992-.09671.11035-.0654.16504-.16113.16504-.28809 0-.08301-.02249-.14941-.06741-.2002-.04489-.0498-.125-.0947-.23975-.13477-.11523-.04001-.27295-.08109-.47266-.125-.2002-.04691-.3584-.10352-.4751-.17188-.1167-.06839-.2002-.15039-.25-.24512-.0498-.0957-.0752-.20312-.0752-.32324 0-.12305.03659-.24219.11035-.35742.07321-.11426.18066-.20898.32227-.28223.1416-.07321.31934-.11035.53271-.11035.17334 0 .32129.02249.44482.0654.12354.043.2251.0976.30518.16211.08011.0654.13965.12988.17969.19238.04001.06351.06201.11719.0654.16016.00299.0332-.00699.06149-.0303.08301-.02341.02151-.0498.0322-.08011.0322h-.20996c-.02341 0-.04251-.005-.05759-.01471-.01471-.01071-.02881-.02151-.04251-.0351-.0332-.043-.0723-.08691-.11719-.12988-.04489-.04391-.10352-.0791-.17529-.10742-.07181-.02829-.16553-.043-.28223-.043-.16699 0-.29199.03519-.375.10547-.0835.06931-.125.1582-.125.26465 0 .06351.0181.12012.05469.16992s.10693.0947.20996.13477c.10352.04001.25684.08401.46045.12988.21973.04391.39307.10254.52002.17578.12646.07321.21631.1582.26953.25488.05371.09671.08011.20801.08011.33496 0 .13965-.04001.26855-.11963.38477-.08011.11719-.2002.20898-.36035.27734-.15967.06839-.35645.10254-.58984.10254h-.00002z" fill="#716f72"/><path d="m69.17584 229.29593c-.0332 0-.06049-.01071-.08249-.0322-.02151-.02151-.0322-.0498-.0322-.08301v-1.17969l-1.20508-2.04004c-.00299-.01001-.00699-.02051-.01019-.0303-.00299-.01001-.005-.02151-.005-.0351 0-.0264.01031-.0498.0303-.06931.01999-.02051.043-.0303.06979-.0303h.25977c.0303 0 .05661.008.08011.02249.02341.01471.04001.0361.05029.0625l.9751 1.62012.97461-1.62012c.0166-.0264.0361-.04779.05759-.0625s.04739-.02249.07761-.02249h.25488c.02979 0 .05521.01001.0752.0303.01999.0195.02979.043.02979.06931 0 .0137-.00101.02539-.005.0351-.00299.01001-.008.02051-.01511.0303l-1.19971 2.04004v1.17969c0 .0332-.0112.06149-.03271.08301-.022.02151-.05081.0322-.0874.0322h-.26025.00012-.00004z" fill="#716f72"/><path d="m72.02155 229.34573c-.16699 0-.31836-.0332-.45508-.09961s-.24707-.15723-.33008-.27051c-.0835-.11328-.125-.24121-.125-.38477 0-.22949.09329-.41309.27979-.5498.18701-.13672.43018-.22656.72998-.27051l.74512-.10449v-.14551c0-.15918-.0459-.28418-.13721-.375-.0918-.0899-.24121-.13477-.44775-.13477-.14648 0-.2666.0303-.35986.0899-.09329.06049-.15869.13672-.19531.23047-.01999.0498-.05469.0752-.10498.0752h-.22461c-.03711 0-.06451-.01071-.08249-.0332-.01859-.02151-.0278-.04691-.0278-.07721 0-.0498.01901-.11133.05759-.18457.03809-.07321.09769-.14551.17773-.21582.07959-.06931.18213-.12891.30713-.17676.125-.0488.27783-.07321.45752-.07321.2002 0 .36865.0264.50537.07809.13623.05179.24414.12109.32227.20703.07809.08691.13477.18555.16992.29492.03519.11035.0527.22168.0527.33496v1.62012c0 .0332-.0112.06149-.03271.08301s-.04929.0322-.08249.0322h-.22998c-.03659 0-.065-.01071-.08499-.0322s-.02979-.0498-.02979-.08301v-.21484c-.04349.06049-.10205.11914-.17529.17773-.07321.05859-.16504.10645-.2749.14453-.10986.03909-.24512.05759-.40479.05759v.00003zm.10498-.375c.13623 0 .26123-.0293.375-.08691.11328-.05859.20215-.14941.26709-.27246.0654-.12402.09769-.27832.09769-.46582v-.13965l-.58008.08499c-.23682.0332-.41504.0889-.53467.16797-.12012.07809-.18018.17676-.18018.29688 0 .09369.0274.1709.08249.23242.05521.0625.125.10742.20996.1377.08499.0303.17236.04489.2627.04489z" fill="#716f72"/><path d="m74.17096 229.29593c-.0332 0-.06049-.01071-.08249-.0322-.02151-.02151-.0322-.0498-.0322-.08301v-2.36523c0-.0332.01071-.06149.0322-.08499.022-.02249.04929-.03421.08249-.03421h.22998c.0332 0 .06201.01169.08499.03421.02341.02341.03519.05179.03519.08499v.2207c.06689-.11328.1582-.19824.2749-.25488.1167-.05661.2583-.08499.42529-.08499h.19482c.0332 0 .061.01071.08249.0322s.03271.0488.03271.082v.20508c0 .0332-.0112.06049-.03271.08011-.02151.02051-.04929.0303-.08249.0303h-.2998c-.18018 0-.32178.0527-.42529.15723-.10303.10547-.15479.24805-.15479.42773v1.46973c0 .0332-.01169.06149-.03519.08301-.02341.02151-.05179.0322-.08499.0322 0 0-.24512.00003-.24511.00003z" fill="#716f72"/><path d="m76.90582 229.34573c-.18311 0-.34131-.0322-.47461-.0976-.13379-.06451-.24268-.15332-.32764-.26465-.08499-.11133-.14844-.23926-.18994-.38281-.04199-.14258-.06589-.29492-.07269-.45508-.00299-.0527-.005-.10254-.005-.14941 0-.04691.00101-.09671.005-.15039.00699-.15625.03079-.30664.07269-.4502.0415-.14258.10498-.27148.18994-.38477.08499-.11328.19385-.20215.32764-.26758.1333-.06451.2915-.0976.47461-.0976.19678 0 .36035.0351.49023.10547.12988.07031.23682.15625.31982.25977v-1.14941c0-.03421.0108-.06149.03271-.08301.02151-.02151.0488-.0322.08249-.0322h.23975c.0332 0 .061.01071.08249.0322.022.02151.03271.0488.03271.08301v3.31934c0 .0332-.01071.06149-.03271.08301-.02151.02151-.04929.0322-.08249.0322h-.2251c-.03659 0-.06491-.01071-.08499-.0322-.01999-.02151-.02979-.0498-.02979-.08301v-.20996c-.0835.10645-.19189.19629-.3252.26758s-.2998.10742-.5.10742l.00006-.00012h.00003zm.10498-.40527c.16699 0 .30029-.03809.40039-.11426.09961-.07721.1748-.1748.22461-.29297.05029-.11816.07669-.23926.08011-.3623.00299-.05371.005-.11719.005-.19238s-.00101-.13965-.005-.19238c-.00299-.11719-.03079-.23145-.08249-.3457-.05179-.11328-.12842-.20605-.22998-.2793-.10156-.07321-.23242-.11035-.39258-.11035-.16992 0-.30469.03809-.40479.1123-.1001.0752-.17188.17383-.21484.29492-.04349.12207-.06839.25293-.0752.39258-.00299.09671-.00299.19336 0 .29004.00699.14062.03171.27148.0752.39258.043.12207.11475.21973.21484.29492s.23486.1123.40479.1123z" fill="#716f72"/><path d="m60.05573 235.29593c-.03659 0-.06491-.01071-.08499-.0322-.01999-.02151-.02979-.0498-.02979-.08301v-3.26465c0-.03711.01001-.0654.02979-.08789.01999-.02151.04831-.0322.08499-.0322h1.13525c.34326 0 .62012.05179.83008.15527.20996.10352.36328.25586.45996.45703.09671.20215.14648.44922.1499.74316.00299.14941.005.28125.005.39453s-.00101.24316-.005.38965c-.00699.30664-.05759.56152-.15234.7627-.09521.20215-.24512.35156-.4502.4502-.20508.0986-.47559.14746-.8125.14746h-1.16016v-.00006h.00001zm.375-.42481h.76025c.22998 0 .41309-.0322.5498-.0947.13672-.06351.23584-.16504.29785-.30566.06149-.13965.09369-.3252.0972-.55469.00699-.10059.01019-.1875.01019-.2627v-.22461c0-.0752-.00299-.16113-.01019-.25781-.00699-.32324-.08301-.5625-.22998-.71777-.14648-.1543-.39307-.23242-.73975-.23242h-.73535v2.65039l-.00003-.00003z" fill="#716f72"/><path d="m64.04596 235.34573c-.16699 0-.31836-.0332-.45508-.09961s-.24707-.15723-.33008-.27051c-.0835-.11328-.125-.24121-.125-.38477 0-.22949.09329-.41309.27979-.5498.18701-.13672.43018-.22656.72998-.27051l.74512-.10449v-.14551c0-.15918-.0459-.28418-.13721-.375-.0918-.0899-.24121-.13477-.44775-.13477-.14648 0-.2666.0303-.35986.0899-.09329.06049-.15869.13672-.19531.23047-.01999.0498-.05469.0752-.10498.0752h-.22461c-.03711 0-.06439-.01071-.08249-.0332-.01859-.02151-.0278-.04691-.0278-.07721 0-.0498.01901-.11133.05759-.18457.03809-.07321.0976-.14551.17773-.21582.07959-.06931.18213-.12891.30713-.17676.125-.0488.27783-.07321.45752-.07321.2002 0 .36865.0264.50537.07809.13623.05179.24414.12109.32227.20703.07809.08691.13477.18555.16992.29492.03519.11035.0527.22168.0527.33496v1.62012c0 .0332-.0112.06149-.03271.08301s-.04929.0322-.08249.0322h-.22998c-.03659 0-.06491-.01071-.08499-.0322-.01999-.02151-.02979-.0498-.02979-.08301v-.21484c-.04349.06049-.10205.11914-.17529.17773-.07321.05859-.16504.10645-.2749.14453-.10986.03909-.24512.05759-.40479.05759v.00003zm.10498-.375c.13623 0 .26123-.0293.375-.08691.11328-.05859.20215-.14941.26709-.27246.0654-.12402.09769-.27832.09769-.46582v-.13965l-.58008.08499c-.23682.0332-.41504.0889-.53467.16797-.12012.07809-.18018.17676-.18018.29688 0 .09369.02731.1709.08249.23242.05521.0625.125.10742.20996.1377.08499.0303.17236.04489.2627.04489z" fill="#716f72"/><path d="m66.15582 232.21097c-.0332 0-.06049-.01071-.08249-.0322-.02151-.02151-.0322-.0498-.0322-.08301v-.26953c0-.0332.01071-.06149.0322-.08499.022-.02341.04929-.0351.08249-.0351h.31494c.03369 0 .06201.01169.08539.0351.02289.02341.0347.05179.0347.08499v.26953c0 .0332-.01169.06149-.0347.08301-.02341.02151-.05179.0322-.08539.0322zm.04001 3.08496c-.0332 0-.06061-.01071-.08249-.0322-.02151-.02151-.0322-.0498-.0322-.08301v-2.37012c0-.0332.01071-.06049.0322-.082.022-.02151.04929-.0322.08249-.0322h.24023c.0332 0 .06049.01071.08249.0322.02151.02151.0322.0488.0322.082v2.37012c0 .0332-.01071.06149-.0322.08301-.022.02151-.04929.0322-.08249.0322z" fill="#716f72"/><path d="m67.40582 235.29593c-.0332 0-.06049-.01071-.08249-.0322-.02151-.02151-.0322-.0498-.0322-.08301v-2.36523c0-.0332.01071-.06149.0322-.08499.022-.02249.04929-.03421.08249-.03421h.22998c.0332 0 .06201.01169.08499.03421.02341.02341.0351.05179.0351.08499v.2207c.06689-.11328.1582-.19824.2749-.25488.1167-.05661.2583-.08499.42529-.08499h.19482c.0332 0 .061.01071.08249.0322s.03271.0488.03271.082v.20508c0 .0332-.0112.06049-.03271.08011-.02151.02051-.04929.0303-.08249.0303h-.2998c-.18018 0-.32178.0527-.42529.15723-.10303.10547-.15479.24805-.15479.42773v1.46973c0 .0332-.01169.06149-.03519.08301-.02341.02151-.05179.0322-.08499.0322 0 0-.24503.00003-.24503.00003z" fill="#716f72"/><path d="m69.64606 236.24612c-.02679 0-.05029-.01001-.07031-.0303-.01999-.0195-.02979-.043-.02979-.07031 0-.0127.00101-.0264.005-.04001.00299-.0127.01031-.0293.01999-.0498l.38477-.91504-.95459-2.25488c-.01709-.04001-.02539-.06839-.02539-.08499 0-.0303.01031-.05469.0303-.0752.01999-.0195.04489-.0293.07471-.0293h.24512c.03659 0 .06451.008.08249.02441.01859.0166.03079.03711.0376.06061l.75977 1.81934.78027-1.81934c.01001-.02341.0239-.04391.04251-.06061.0181-.0166.0459-.02441.08249-.02441h.23486c.0303 0 .05521.01001.0752.0293.01999.02051.02979.04391.02979.07031 0 .0166-.008.04691-.0249.08981l-1.41992 3.27539c-.01031.02341-.02441.043-.04251.0596-.01859.0166-.0459.02539-.08249.02539h-.23486s-.00009.00003-.0001.00003z" fill="#716f72"/><path d="m52.2858 250.23254c-.29333 0-.54333-.05499-.75-.16499-.20333-.10999-.36-.265-.47-.465-.10667-.20001-.16666-.435-.18-.705-.00334-.14665-.005-.30167-.005-.465 0-.16667.00166-.32501.005-.47501.01334-.27.07333-.50333.18-.7.11-.19666.26833-.35001.475-.46001s.455-.16499.745-.16499c.23666 0 .44167.03334.615.10001.17334.06668.315.15167.425.255.11333.10001.19666.205.25.315.05666.10999.08666.20667.09.28999.00334.03-.005.05501-.025.075-.02.01666-.04667.02499-.08.02499h-.295c-.03333 0-.05833-.00668-.075-.02-.01334-.01332-.02666-.03668-.04-.07001-.03-.08667-.08-.17168-.15-.255-.06667-.08333-.15833-.15167-.275-.205-.11333-.05667-.25999-.08499-.44-.08501-.26334.00002-.47667.07167-.64.215-.16.14333-.24667.38-.26.71001-.01.29666-.01.59334 0 .89.01334.33333.10167.57333.265.72.16333.14333.37667.21501.64.215.17667.00002.33333-.03166.47-.095.14-.06667.25-.16833.33-.30499s.12-.31.12-.52v-.21001h-.75c-.03333.00002-.06166-.00999-.085-.03-.02-.02333-.02999-.05333-.03-.09v-.16c0-.03667.01-.065.03-.08501.02333-.02333.05167-.035.085-.035h1.13c.03667 0 .065.01167.085.035.02.02.03.04832.03.08501v.48c0 .27335-.05666.51166-.17.715-.11.20332-.27167.36166-.485.47501-.21333.10999-.46833.16498-.765.16499v.00003zm3.105 0c-.34333 0-.61666-.105-.82-.315-.20333-.21333-.315-.50334-.335-.87-.00333-.04333-.005-.09833-.005-.16499 0-.06999.00167-.12665.005-.17.01334-.23666.06833-.44333.165-.62.09666-.18001.22833-.31833.395-.41499.17-.09668.36834-.14502.595-.145.25334-.00002.465.05333.635.16.17333.10667.305.25835.395.455.09.19667.135.42667.135.69v.08501c0 .03665-.01167.06499-.035.08501-.02.02-.04667.03-.08.03h-1.73v.045c.00666.13666.03666.265.09.38499.05333.11667.13.21167.23.285s.22.11002.36.11c.12.00002.22-.01834.3-.05499.08-.03667.145-.07668.195-.12.05-.04668.08333-.08168.1-.105.02999-.04333.05333-.06833.07-.075.01667-.00999.04333-.015.08-.015h.24c.03333 0 .06.01001.08.03.02333.01666.03333.04166.03.075-.00333.04999-.03.11168-.08.185-.05.06999-.12167.14-.215.21001s-.20667.12833-.34.175c-.13334.04333-.28667.065-.46.065v-.00006zm-.68-1.53999h1.37v-.015c0-.15001-.02833-.28334-.085-.39999-.05333-.11667-.13167-.20834-.235-.27499-.10333-.06999-.22667-.105-.37-.105s-.26667.035-.37.105c-.1.06667-.17667.15833-.23.27499s-.08.24998-.08.39999zm2.565 1.49001c-.03333 0-.06166-.00999-.085-.03-.02-.02333-.02999-.05167-.03-.08501v-3.32001c0-.03333.01-.06.03-.08.02333-.02333.05167-.03502.085-.035h.235c.03667-.00002.065.01167.085.035.02.02.03.04668.03.08v3.32001c0 .03334-.01.06168-.03.08501-.02.02-.04833.03-.085.03zm1.82.05c-.16666 0-.31834-.03334-.455-.10001-.13667-.06668-.24667-.15668-.33-.27-.08333-.11333-.125-.24165-.125-.38499 0-.23.09333-.41335.28-.55s.43-.22667.73-.27l.745-.105v-.145c0-.16-.04667-.285-.14-.375-.09-.09-.23833-.13501-.445-.13499-.15-.00002-.27166.03-.365.09-.09.06-.15333.13666-.19.23-.02.04999-.055.075-.105.075h-.225c-.03667 0-.065-.00999-.085-.03-.01667-.02333-.025-.05-.025-.08 0-.04999.01833-.11166.055-.185.04-.07333.1-.145.18-.215.08-.07001.18167-.12833.305-.175.12667-.05.28-.075.46-.075.2 0 .36833.02666.505.08.13667.05.24333.11833.32.205.08.08667.13667.18501.17.295.03667.10999.055.22166.055.33501v1.62c0 .03334-.01167.06168-.035.08501-.02.02-.04667.03-.08.03h-.23c-.03667 0-.065-.00999-.085-.03-.02-.02333-.03-.05167-.03-.08501v-.215c-.04333.06-.10167.12-.175.17999-.07333.05667-.165.10501-.275.145-.11.03667-.245.05499-.405.05499v.00002zm.105-.375c.13667 0 .26167-.02834.375-.08501.11333-.05998.20166-.15166.265-.27499.06667-.12334.1-.27832.1-.465v-.14l-.58.08501c-.23667.03334-.415.09-.535.17-.12.07668-.18.175-.18.295 0 .09332.02667.17168.08.235.05667.06.12667.10498.21.13499.08667.03001.175.045.265.045zm2.92094.325c-.18666 0-.33834-.03499-.455-.105-.11666-.07333-.20167-.17499-.255-.30499-.05334-.13333-.08-.29001-.08-.47v-1.32001h-.39c-.03333 0-.06167-.01001-.085-.03-.02-.02335-.03-.05168-.03-.08501v-.17c0-.03333.01-.06.03-.08.02333-.02333.05167-.03499.085-.035h.39v-.83501c0-.03333.01-.06.03-.08.02333-.02333.05167-.03502.085-.035h.235c.03333-.00002.06.01167.08.035.02333.02.035.04668.035.08v.83501h.62c.03333.00002.06.01167.08.035.02333.02.035.04668.035.08v.17c0 .03333-.01167.06166-.035.08501-.02.01999-.04667.03-.08.03h-.62v1.285c0 .15668.02667.28.08.37s.14833.13498.285.13499h.305c.03333-.00002.06.01167.08.035.02333.02.035.04668.035.08v.17999c0 .03334-.01167.06168-.035.08501-.02.02-.04667.03-.08.03h-.345zm1.975.05c-.34333 0-.61667-.105-.82-.315-.20333-.21333-.315-.50333-.335-.87-.00334-.04333-.005-.09834-.005-.16499 0-.06999.00166-.12666.005-.17.01334-.23666.06833-.44333.165-.62.09667-.17999.22834-.31833.395-.41499.17-.09666.36833-.145.595-.145.25333 0 .465.05334.635.16.17334.10667.305.25835.395.455s.135.42668.135.69v.08501c0 .03665-.01167.065-.035.08501-.02.01999-.04666.03-.08.03h-1.73v.045c.00666.13666.03666.265.09.38499.05333.11668.13.21167.23.285s.22.11.36.11c.12 0 .22-.01834.3-.05499.08-.03667.145-.07666.195-.12.05-.04668.08334-.08167.1-.105.03-.04335.05333-.06833.07-.075.01667-.00999.04333-.015.08-.015h.24c.03334 0 .06.00999.08.03.02333.01665.03333.04166.03.075-.00333.04999-.03.11166-.08.185-.05.06999-.12166.14-.215.21001-.09333.07001-.20667.12834-.34.175-.13333.04333-.28667.065-.46.065v-.00006zm-.68-1.53999h1.37v-.015c0-.14999-.02833-.28334-.085-.39999-.05334-.11667-.13167-.20834-.235-.27499-.10333-.07001-.22667-.105-.37-.105s-.26667.03499-.37.105c-.1.06668-.17667.15833-.23.27499s-.08001.25-.08.39999zm2.56 1.49c-.03334 0-.06167-.01001-.085-.03-.02-.02335-.03-.05167-.03-.08501v-2.36501c0-.03333.01-.06168.03-.08501.02334-.02333.05167-.03499.085-.035h.23c.03333.00002.06167.01167.085.035s.035.05168.035.08501v.22c.06667-.11334.15833-.19833.275-.255s.25667-.08499.42-.08501h.2c.03333.00002.06001.01167.08.035.02.02.03.04668.03.08v.205c0 .03334-.01.06001-.03.08-.02.02-.04667.03-.08.03h-.3c-.18 0-.32166.05334-.425.16-.10333.10333-.155.245-.155.425v1.47c0 .03334-.01167.06166-.035.08501-.02334.01999-.05167.03-.085.03h-.245zm1.9 0c-.03333 0-.06167-.01001-.085-.03-.02-.02335-.03-.05167-.03-.08501v-2.37c0-.03334.00999-.06.03-.08.02333-.02333.05167-.035.085-.035h.24c.03334 0 .06.01167.08.035.02.02.03.04666.03.08v2.37c0 .03334-.01.06166-.03.08501-.02.01999-.04666.03-.08.03zm-.04-3.08501c-.03333.00002-.06167-.00999-.085-.03-.02-.02333-.03-.05168-.03-.08501v-.27c0-.03334.01-.06001.03-.08.02334-.02335.05167-.035.085-.035h.315c.03334 0 .06.01166.08.035.02333.01999.035.04666.035.08v.27c0 .03333-.01167.06168-.035.08501-.02.02-.04666.03001-.08.03zm1.86 3.135c-.16667 0-.31833-.03334-.455-.10001-.13667-.06668-.24667-.15668-.33-.27-.08334-.11333-.125-.24165-.125-.38499 0-.23.09333-.41335.28-.55.18666-.13666.43-.22667.73-.27l.745-.105v-.145c0-.16-.04666-.285-.14-.375-.09-.09-.23833-.13501-.445-.13499-.15-.00002-.27166.03-.365.09-.09.06-.15334.13666-.19.23-.02.04999-.055.075-.105.075h-.225c-.03667 0-.065-.00999-.085-.03-.01667-.02333-.025-.05-.025-.08 0-.04999.01833-.11166.055-.185.04-.07333.1-.145.18-.215.08-.07001.18167-.12833.305-.175.12667-.05.28-.075.46-.075.2 0 .36833.02666.505.08.13667.05.24334.11833.32.205.08.08667.13667.18501.17.295.03667.10999.055.22166.055.33501v1.62c0 .03334-.01167.06168-.035.08501-.02.02-.04667.03-.08.03h-.23c-.03667 0-.065-.00999-.085-.03-.02-.02333-.03-.05167-.03-.08501v-.215c-.04333.06-.10167.12-.175.17999-.07333.05667-.165.10501-.275.145-.11.03667-.245.05499-.405.05499 0 0 .00002.00002.00002.00002zm.105-.375c.13667 0 .26167-.02834.375-.08501.11333-.05998.20167-.15166.265-.27499.06667-.12334.1-.27832.1-.465v-.14l-.58.08501c-.23667.03334-.41501.09-.535.17-.12.07668-.18.175-.18.295 0 .09332.02666.17168.08.235.05666.06.12666.10498.21.13499.08667.03001.175.045.26501.045zm4.275.375c-.21001 0-.39333-.02499-.55-.075-.15666-.05333-.28833-.12334-.395-.21001s-.18833-.18167-.245-.285c-.05334-.10333-.08167-.20999-.085-.32001 0-.03.01-.05334.03-.07001s.045-.02499.075-.02499h.245c.03 0 .05666.00667.08.02.02333.01334.04333.04167.06.08501.03333.12.09.21332.17.28.08334.06667.17834.11334.285.14.11.02335.22.035.33.035.23 0 .41666-.05499.56-.16499.14333-.10999.215-.27167.215-.485 0-.21666-.065-.37167-.195-.465s-.31-.14-.54-.14h-.475c-.03333 0-.06167-.01001-.085-.03-.02-.02-.03-.04832-.03-.08501v-.13499c0-.03.005-.05501.015-.075.01334-.02335.02666-.04332.04-.06l.97-1.06h-1.475c-.03334.00002-.06167-.00999-.085-.03-.02-.02-.03-.04834-.03-.08501v-.19c0-.03665.01-.065.03-.08501.02334-.02335.05167-.035.085-.035h1.995c.03667 0 .065.01166.085.035.02334.01999.035.04832.035.08501v.17999c0 .02335-.00667.04501-.02.065-.01.01666-.02167.03333-.035.05l-.965 1.075.08.005c.22.00665.41167.04666.575.12.16666.07333.29501.18333.385.33.09333.14333.14.325.14.545 0 .22333-.055.41501-.165.575-.11.15666-.26167.27667-.455.36-.19334.08334-.41167.125-.65501.125zm2.06501-.05c-.03667 0-.065-.00999-.085-.03-.02-.02333-.03-.05167-.03-.08501v-3.265c0-.03667.01-.065.03-.08501.02-.02333.04833-.035.085-.035h1.37c.25 0 .45333.04166.61.125.16.07999.27666.19.35.33.07666.14.115.29666.115.47 0 .13667-.02333.255-.07.355-.04333.09666-.09834.17667-.165.24001-.06667.05998-.13166.10666-.195.14.13.06334.245.16667.345.31.10333.14334.155.31665.155.52 0 .18333-.04166.35167-.125.505-.08333.15334-.20833.27667-.375.37-.16334.08998-.36667.13499-.61.13499zm.375-.405h.965c.21666-.00002.38333-.05833.5-.175s.175-.26001.175-.42999c0-.17667-.05833-.32167-.175-.435-.11667-.11667-.28334-.175-.5-.175h-.965v1.215zm0-1.61501h.92c.21333 0 .375-.04834.485-.145.11-.09999.165-.235.165-.405s-.055-.3-.165-.39-.27167-.13498-.485-.13499h-.92v1.075zm2.9 2.02001c-.03333 0-.06167-.00999-.085-.03-.02-.02333-.03-.05167-.03-.08501v-2.37c0-.03333.00999-.06.03-.08.02333-.02333.05167-.03499.085-.035h.24c.03334.00002.06.01167.08.035.02.02.03.04668.03.08v2.37c0 .03334-.01.06168-.03.08501-.02.02-.04666.03-.08.03zm-.04-3.08501c-.03333 0-.06167-.01001-.085-.03-.02-.02335-.03-.05168-.03-.08501v-.27c0-.03334.01-.06.03-.08.02334-.02333.05167-.035.085-.035h.315c.03334 0 .06.01167.08.035.02333.02.035.04666.035.08v.27c0 .03333-.01167.06166-.035.08501-.02.01999-.04666.03-.08.03zm2.035 3.13499c-.18666 0-.34666-.02333-.48-.07001-.13333-.04668-.24166-.10333-.325-.17-.08334-.06668-.14667-.13333-.19-.2-.04-.06667-.06167-.12001-.065-.16-.00333-.03667.00834-.06499.035-.08501.02666-.02.05334-.03.08-.03h.22c.02 0 .035.00334.045.00999.01333.00334.03.01666.05.03999.04333.04668.09167.09332.145.14s.11833.08501.195.11501c.08.03.17834.04498.295.045.17-.00002.31-.03166.42-.095.11-.06667.165-.16333.165-.28999 0-.08334-.02333-.15001-.07-.2-.04333-.04999-.12334-.09499-.24-.13499-.11333-.03999-.27-.08167-.47-.125-.2-.04666-.35834-.10335-.475-.17-.11667-.06999-.2-.15166-.25-.245-.05-.09668-.075-.205-.075-.325 0-.12332.03667-.24165.11-.355.07333-.11668.18-.21167.32-.285.14333-.07333.32167-.11.535-.11.17333 0 .32167.02167.445.065s.225.09833.305.16499c.08.06334.14.12666.18.19.04.06332.06167.11667.065.16.00333.03333-.00667.06166-.03.08501-.02334.01999-.05.03-.08.03h-.21c-.02334 0-.04333-.005-.06-.015-.01333-.00999-.02666-.02168-.04-.035-.03333-.04333-.07333-.08667-.12-.13-.04333-.04333-.10167-.07832-.175-.105-.07001-.03-.16334-.04501-.28-.045-.16666-.00002-.29166.035-.375.105-.08333.07001-.125.15834-.125.265 0 .06334.01833.12001.055.17.03667.05.10667.095.21.13499.10333.04001.25667.08334.46.13.22.04335.39333.10167.52.175s.21667.15834.27.255c.05334.09668.08.20834.08.33501 0 .14-.04166.26834-.125.38499-.08.11667-.2.21001-.36.28-.15667.06667-.35167.10001-.585.10001v-.00002z" fill="#716f72"/><path d="m71.91179 293.50931c-.03667 0-.06499-.01001-.085-.03-.02-.02335-.03-.05167-.03-.08499v-3.26501c0-.03665.01-.065.03-.08499.02-.02335.04833-.035.085-.035h1.22c.37667 0 .675.08835.895.26501.22.1767.33.43835.33.785 0 .25668-.065.46667-.195.63-.12667.16-.3.27164-.52.33499l.77 1.32999c.01.01999.015.03833.015.05499 0 .02667-.01167.05002-.035.07001-.02.01999-.04333.03-.07.03h-.24c-.05666 0-.09834-.01501-.125-.04501s-.05-.06-.07-.09l-.725-1.26999h-.875v1.29001c0 .03333-.01167.06165-.035.08499-.02.01999-.04833.03-.085.03zm.375-1.82999h.825c.25 0 .43667-.05167.56-.155.12333-.10669.185-.26334.185-.47 0-.20334-.06167-.35831-.185-.465-.12-.10666-.30666-.16-.56-.16h-.825zm3.445 1.88001c-.16666 0-.31834-.03333-.455-.10001-.13667-.06665-.24667-.15668-.33-.26999-.08333-.11334-.125-.24167-.125-.38501 0-.23001.09334-.41333.28-.54999.18667-.13666.43-.22665.73-.26999l.745-.10501v-.14499c0-.16-.04667-.285-.14-.375-.09-.09003-.23833-.13501-.445-.13501-.15 0-.27167.03-.365.09-.09.06-.15334.13669-.19.23001-.02.05002-.055.07501-.105.07501h-.225c-.03667 0-.065-.01001-.085-.03-.01667-.02335-.025-.05002-.025-.07999 0-.05002.01833-.11166.055-.185.04-.0733.1-.14499.18-.215s.18167-.12833.305-.17499c.12667-.05002.28001-.07501.46-.07501.2 0 .36833.02664.505.07999.13667.05002.24333.11835.32.20499.08.08667.13667.185.17.29501.03667.10999.055.22168.055.33499v1.62c0 .03333-.01167.06168-.035.08499-.02.02002-.04667.03-.08.03h-.23c-.03667 0-.065-.00998-.085-.03-.02-.02332-.03-.05167-.03-.08499v-.215c-.04333.06-.10167.12-.175.17999-.07333.05667-.165.10498-.275.14499-.11.03665-.245.05499-.405.05499h.00002zm.105-.375c.13667 0 .26167-.02832.375-.08499.11333-.06.20167-.15167.265-.27499.06667-.12332.1-.27832.1-.465v-.14001l-.58.08499c-.23666.03333-.415.09-.535.17001-.12.07666-.18.17499-.18.29501 0 .09335.02666.17166.08.23499.05666.06.12667.10501.21.13501.08666.03.175.04501.265.04501zm2.045.32501c-.03333 0-.06167-.00998-.085-.03-.02-.02332-.03-.05167-.03-.08499v-2.37c0-.03333.01-.06.03-.07999.02334-.02335.05167-.035.085-.035h.225c.03334 0 .06.01166.08.035.02333.01999.035.04666.035.07999v.17499c.07667-.10333.17333-.185.29-.245.11667-.06332.25667-.095.42-.095.37667-.00336.64333.14999.8.45999.07667-.13998.18833-.25168.335-.33499.14667-.08334.31333-.125.5-.125.17334 0 .33.03998.47.12.14333.07999.255.20166.335.36499.08334.15997.125.36166.125.60501v1.44501c0 .03333-.01167.06168-.035.08499-.02.02002-.04667.03-.08.03h-.235c-.03333 0-.06167-.00998-.085-.03-.02-.02332-.03-.05167-.03-.08499v-1.39999c0-.18665-.02666-.33334-.08-.44-.05333-.10669-.125-.18167-.215-.22501s-.18833-.065-.295-.065c-.08666 0-.175.02167-.265.065s-.165.11832-.225.22501c-.05666.10666-.085.25336-.085.44v1.39999c0 .03333-.01167.06168-.035.08499-.02.02002-.04667.03-.08.03h-.235c-.03333 0-.06167-.00998-.085-.03-.02-.02332-.03-.05167-.03-.08499v-1.39999c0-.18665-.02833-.33334-.085-.44-.05666-.10669-.13-.18167-.22-.22501-.09-.04333-.185-.065-.285-.065-.08666 0-.175.02167-.265.065s-.165.11832-.225.22501c-.05666.10666-.085.25168-.085.435v1.405c0 .03333-.01167.06168-.035.08499-.02.02002-.04667.03-.08.03h-.24zm5.615.04999c-.2 0-.36667-.035-.5-.10501-.13333-.07333-.24-.16333-.32-.26999v.20999c0 .03333-.01167.06165-.035.08499-.02.01999-.04667.03-.08.03h-.23c-.03334 0-.06167-.01001-.085-.03-.02-.02335-.03-.05167-.03-.08499v-3.32001c0-.03333.01-.06.03-.07999.02334-.02335.05167-.035.085-.035h.24c.03667 0 .065.01166.085.035.02.01999.03.04666.03.07999v1.14999c.08334-.10333.19-.19.32-.26001.13333-.07001.29666-.10501.49-.10501.18667 0 .345.03333.475.10001.13333.06332.24166.15167.325.26501.08666.11334.15166.24167.195.38501s.06667.29333.07.45001c.00333.05331.005.1033.005.14999 0 .04666-.00166.09668-.005.14999-.00333.16-.02666.31168-.07.45499-.04333.14334-.10834.27167-.195.38501-.08334.11002-.19167.19836-.325.26501-.13.06335-.28833.095-.475.095h.00002zm-.10501-.405c.17333 0 .30833-.03665.405-.10999.1-.07666.17167-.17499.215-.29501.04333-.12332.06834-.25497.075-.39499.00333-.09665.00333-.19333 0-.29001-.00667-.13998-.03167-.26999-.075-.39001-.04333-.12332-.115-.22168-.215-.29501-.09666-.07666-.23167-.11499-.405-.11499-.15667 0-.28667.03668-.39.10999-.10333.07333-.18166.16666-.235.28-.05.11334-.07667.22836-.08.345-.00333.05331-.005.11835-.005.19501 0 .0733.00166.13666.005.19.00667.12335.03333.245.08.36499.05.11667.125.21332.225.29001.10333.07666.23666.11499.4.11499v.00003zm2.765.405c-.21333 0-.395-.04666-.545-.14001-.14667-.09665-.25833-.22998-.335-.39999-.07666-.16998-.115-.36499-.115-.58499v-1.41c0-.03333.01-.06.03-.07999.02334-.02335.05167-.035.085-.035h.25c.03333 0 .06001.01166.08.035.02334.01999.035.04666.035.07999v1.38501c0 .49667.21667.745.65.745.20666 0 .37167-.065.495-.19501.12666-.13336.19-.31665.19-.54999v-1.38501c0-.03333.00999-.06.03-.07999.02333-.02335.05167-.035.085-.035h.245c.03667 0 .06499.01166.085.035.02.01999.03001.04666.03.07999v2.37c0 .03333-.01.06165-.03.08499-.02.01999-.04833.03-.085.03h-.23c-.03333 0-.06167-.01001-.085-.03-.02-.02335-.03-.05167-.03-.08499v-.22c-.09.11667-.2.20999-.33.28-.12667.07001-.295.10501-.505.10501h-.00002zm3.055-.04999c-.18667 0-.33833-.035-.455-.10501-.11667-.0733-.20167-.17499-.255-.30499-.05334-.13336-.08-.29001-.08-.47v-1.32001h-.39c-.03333 0-.06167-.01001-.085-.03-.02-.02335-.03-.05167-.03-.08499v-.17001c0-.03333.01-.06.03-.07999.02334-.02335.05167-.035.085-.035h.39v-.83499c0-.03333.01-.05997.03-.07999.02334-.02332.05167-.035.085-.035h.235c.03333 0 .06001.01169.08.035.02334.02002.035.04666.035.07999v.83499h.62c.03333 0 .06001.01166.08.035.02334.01999.035.04666.035.07999v.17001c0 .03333-.01167.06165-.035.08499-.02.01999-.04667.03-.08.03h-.62v1.285c0 .15665.02666.27997.08.37.05333.09.14833.13501.285.13501h.305c.03333 0 .06001.01166.08.035.02334.01999.035.04666.035.07999v.17999c0 .03333-.01167.06165-.035.08499-.02.01999-.04667.03-.08.03l-.34501.00003zm1.66501.04999c-.16666 0-.31834-.03333-.455-.10001-.13667-.06665-.24667-.15668-.33-.26999-.08334-.11334-.12501-.24167-.125-.38501 0-.23001.09334-.41333.28-.54999.18667-.13666.43-.22665.73-.26999l.745-.10501v-.14499c0-.16-.04667-.285-.14-.375-.09-.09003-.23833-.13501-.445-.13501-.15 0-.27167.03-.365.09-.09.06-.15334.13669-.19.23001-.02.05002-.055.07501-.105.07501h-.225c-.03667 0-.06499-.01001-.085-.03-.01667-.02335-.025-.05002-.025-.07999 0-.05002.01833-.11166.055-.185.04-.0733.1-.14499.18-.215s.18166-.12833.305-.17499c.12666-.05002.28001-.07501.46-.07501.2 0 .36834.02664.505.07999.13667.05002.24333.11835.32.20499.08.08667.13667.185.17.29501.03666.10999.055.22168.055.33499v1.62c0 .03333-.01167.06168-.035.08499-.02.02002-.04667.03-.08.03h-.23c-.03667 0-.065-.00998-.085-.03-.02-.02332-.03-.05167-.03-.08499v-.215c-.04333.06-.10167.12-.175.17999-.07333.05667-.16501.10498-.275.14499-.10999.03665-.245.05499-.405.05499h.00002zm.105-.375c.13667 0 .26167-.02832.375-.08499.11333-.06.20166-.15167.265-.27499.06667-.12332.09999-.27832.1-.465v-.14001l-.58.08499c-.23667.03333-.415.09-.535.17001-.12.07666-.18.17499-.18.29501 0 .09335.02667.17166.08.23499.05666.06.12666.10501.21.13501.08666.03.175.04501.265.04501zm2.045.32501c-.03334 0-.06167-.00998-.085-.03-.02-.02332-.03001-.05167-.03-.08499v-2.37c0-.03333.01-.06.03-.07999.02334-.02335.05167-.035.085-.035h.235c.03334 0 .06.01166.08.035.02333.01999.035.04666.035.07999v.22c.08667-.11334.19499-.20502.325-.27499.13333-.07333.30334-.10999.51-.10999.21667 0 .4.04834.55.14499.15334.09332.26833.22501.345.39499.07667.16666.115.36166.115.58499v1.41c0 .03333-.01.06168-.03.08499-.02.02002-.04666.03-.08.03h-.25c-.03333 0-.06166-.00998-.085-.03-.02-.02332-.03-.05167-.03-.08499v-1.38501c0-.23334-.05667-.41501-.17-.54501-.11333-.13336-.28001-.20001-.5-.20001-.20666 0-.37333.06665-.5.20001-.12333.13-.18499.31168-.185.54501v1.38501c0 .03333-.01167.06168-.035.08499-.02.02002-.04667.03-.08.03h-.25001z" fill="#716f72"/><path d="m290.66443 108.49854c-.04037 0-.07468-.01211-.10291-.03633-.02423-.02825-.03632-.06256-.03632-.10292v-3.39046l-1.00504.77496c-.03229.02422-.06659.03431-.10291.03027-.03632-.00403-.06659-.0222-.09082-.05449l-.15741-.19979c-.02423-.03633-.0343-.07265-.03027-.10898.00806-.03633.02826-.0666.06055-.09082l1.31985-1.01714c.02826-.02018.0545-.03229.0787-.03633.02423-.00403.05045-.00605.0787-.00605h.30878c.04037 0 .07266.01413.09686.04238.02423.02422.03632.05651.03632.09687v3.95958c0 .04036-.01212.07467-.03632.10292-.02423.02421-.05652.03632-.09686.03632h-.32092zm2.83951.06054c-.2785 0-.51462-.04238-.70837-.12714-.1897-.0888-.34509-.20989-.46619-.36326s-.2099-.32896-.26639-.52673c-.05246-.19778-.08273-.40766-.09082-.62966-.00403-.10898-.00806-.22401-.01212-.3451v-.36326c.00403-.12512.00806-.24419.01212-.35721.00403-.22199.0343-.43188.09082-.62966.06055-.20181.14935-.37739.26639-.52673.12109-.15338.2785-.27245.47223-.35721.19373-.0888.42783-.1332.7023-.1332.2785 0 .5126.0444.7023.1332.19373.08476.35117.20383.47223.35721.12109.14934.2099.32492.26639.52673.06055.19778.09283.40766.09686.62966.00403.11302.00604.23209.00604.35721.00403.12109.00403.24218 0 .36326 0 .12109-.00201.23612-.00604.3451-.00403.22199-.03632.43188-.09686.62966-.05652.19778-.14532.37335-.26639.52673-.11703.15338-.27246.27447-.46619.36326-.1897.08476-.42584.12714-.70837.12714zm0-.51462c.31482 0 .54691-.10292.69626-.30877.15338-.20989.23209-.49444.23611-.85367.00806-.11705.01212-.23007.01212-.33905v-.33299c0-.11302-.00403-.22401-.01212-.33299-.00403-.35116-.08273-.63168-.23611-.84156-.14935-.21392-.38144-.32088-.69626-.32088-.31079 0-.54288.10696-.69626.32088-.14935.20989-.22806.49041-.23611.84156 0 .10898-.00201.21998-.00604.33299v.33299c.00403.10898.00604.22199.00604.33905.00806.35923.08881.64378.24219.85367.15338.20585.38345.30877.69019.30877zm3.72952.51462c-.25427 0-.47629-.03027-.66599-.09082-.1897-.06458-.34915-.14934-.4783-.25428s-.22806-.21998-.29666-.3451c-.06458-.12512-.09888-.25428-.10291-.38748 0-.03633.01212-.06458.03632-.08476.02423-.02018.0545-.03027.09082-.03027h.29666c.03632 0 .06863.00807.09686.02422.02826.01615.05246.05045.07266.10292.04037.14531.10898.25832.20584.33905.10092.08073.21594.13723.34509.16952.13321.02825.26639.04238.3996.04238.2785 0 .50452-.0666.6781-.1998.17355-.1332.26035-.32896.26035-.58728 0-.26236-.0787-.45004-.23611-.56306s-.37537-.16952-.65387-.16952h-.57516c-.04037 0-.07468-.01211-.10291-.03633-.02423-.02422-.03632-.05853-.03632-.10292v-.16347c0-.03633.00604-.0666.01816-.09082.01614-.02825.03229-.05247.04843-.07265l1.17456-1.28353h-1.78604c-.04037 0-.07468-.01211-.10291-.03633-.02423-.02422-.03632-.05853-.03632-.10292v-.23007c0-.0444.01212-.07871.03632-.10292.02826-.02825.06256-.04238.10291-.04238h2.41571c.0444 0 .0787.01413.10291.04238.02826.02422.04239.05853.04239.10292v.21796c0 .02825-.00806.05449-.02423.07871-.01212.02018-.02625.04036-.04239.06054l-1.16849 1.3017.09686.00605c.26639.00807.49847.05651.69626.14531.20181.0888.35721.22199.46619.39959.11301.17356.16953.39354.16953.65993 0 .27043-.06659.50252-.1998.69626-.13321.1897-.31686.33501-.55096.43592s-.49847.15136-.79312.15136h-.00003z" fill="#25357a"/><path d="m471.33658 97.92438c-.04056 0-.07504-.01217-.10345-.03651-.02435-.0284-.0365-.06288-.0365-.10345v-3.40761l-1.0101.77888c-.03244.02434-.06693.03448-.10345.03043-.0365-.00405-.06693-.02231-.09128-.05476l-.1582-.20081c-.02435-.03651-.03448-.07302-.03043-.10953.00812-.03651.02841-.06694.06085-.09127l1.32654-1.02228c.02841-.02028.05475-.03245.0791-.03651s.05072-.00609.0791-.00609h.31033c.04056 0 .07303.0142.09735.04259.02435.02434.0365.05679.0365.09736v3.9796c0 .04057-.01218.07505-.0365.10345-.02435.02434-.05679.03652-.09735.03652h-.32251v-.00002zm2.85385.06085c-.27991 0-.51724-.0426-.71194-.12779-.19067-.08925-.34686-.21095-.46854-.3651-.1217-.15415-.21094-.33062-.26773-.5294-.05273-.19878-.08316-.40972-.09128-.63284-.00406-.10953-.00812-.22515-.01218-.34685v-.3651c.00406-.12576.00812-.24543.01218-.35902.00406-.22312.03448-.43406.09128-.63284.06085-.20283.15009-.3793.26773-.5294.1217-.15415.27991-.27383.47464-.35902.19473-.08925.43002-.13387.70587-.13387.27991 0 .5152.04462.70587.13387.19473.08519.35294.20486.47464.35902.1217.1501.21094.32656.26773.5294.06085.19878.09329.40972.09735.63284.00406.11359.00607.23326.00607.35902.00406.1217.00406.2434 0 .3651 0 .1217-.00204.23732-.00607.34685-.00406.22312-.0365.43406-.09735.63284-.05679.19878-.14603.37524-.26773.5294-.11765.15415-.27383.27585-.46854.3651-.19067.08519-.42798.12779-.71194.12779zm0-.51723c.31641 0 .54968-.10345.69977-.31034.15414-.21095.23325-.49694.23734-.85799.00812-.11764.01218-.23123.01218-.34076v-.33468c0-.11359-.00406-.22515-.01218-.33468-.00406-.35293-.08316-.63487-.23734-.84582-.15009-.215-.38336-.32251-.69977-.32251-.31235 0-.54562.1075-.69977.32251-.15009.21095-.22919.49289-.23734.84582 0 .10953-.00204.22109-.0061.33468v.33468c.00406.10953.0061.22312.0061.34076.00812.36104.08926.64704.24341.85799.15414.20689.38538.31034.6937.31034zm3.87009.51723c-.23529 0-.45233-.0284-.65109-.08519-.19473-.06085-.36307-.14604-.50507-.25557-.13794-.11359-.24542-.24949-.32251-.4077s-.11563-.3367-.11563-.53548c0-.24746.05881-.46043.17648-.63893.1217-.17849.28195-.31439.48071-.4077-.1582-.0933-.28195-.215-.37119-.3651-.08926-.1501-.13388-.32859-.13388-.53548 0-.2434.05881-.44826.17648-.61459.1217-.17038.29004-.30222.50507-.39553.21906-.0933.4726-.13996.76062-.13996.28397 0 .53345.04665.74847.13996.21906.08925.38742.21906.50507.38944.1217.17038.18256.37524.18256.61459 0 .20689-.04462.38741-.13388.54157-.08926.1501-.21094.2718-.36511.3651.19879.0933.35699.2292.47464.4077.1217.17849.18256.39147.18256.63893 0 .26368-.06693.49289-.20081.68761-.13388.19066-.32047.33873-.55981.44421-.23935.10142-.51724.15213-.83365.15213l-.00003-.00002zm0-.4868c.18661 0 .35495-.03245.50507-.09736.15009-.06491.26978-.15618.35901-.27383.08926-.1217.13388-.26368.13388-.42595 0-.16632-.04462-.30628-.13388-.41987-.08926-.11764-.20892-.20689-.35901-.26774-.15009-.06491-.31845-.09736-.50507-.09736s-.35699.03245-.51114.09736c-.15009.06085-.26978.1501-.35901.26774-.08926.11359-.13388.25354-.13388.41987 0 .16227.04462.30425.13388.42595.08926.11764.20892.20892.35901.27383.15414.06491.32452.09736.51114.09736zm0-2.06283c.15414 0 .29614-.0284.42596-.08519.13388-.05679.23935-.13387.31641-.23123.08112-.09736.1217-.215.1217-.35293s-.03854-.2576-.11563-.35902c-.07303-.10142-.17648-.17849-.31033-.23123-.12982-.05679-.27585-.08519-.43811-.08519s-.31033.0284-.44421.08519c-.12982.05274-.23325.12981-.31033.23123-.07709.10142-.11563.22109-.11563.35902 0 .14198.03854.26368.11563.3651.07709.09736.18051.17241.31033.22515.13388.05274.28195.0791.44421.0791z" fill="#25357a"/><path d="m414.5762 97.92438c-.04056 0-.07504-.01217-.10345-.03651-.02435-.0284-.0365-.06288-.0365-.10345v-3.40761l-1.0101.77888c-.03244.02434-.06693.03448-.10345.03043-.0365-.00405-.06693-.02231-.09128-.05476l-.1582-.20081c-.02435-.03651-.03448-.07302-.03043-.10953.00812-.03651.02841-.06694.06085-.09127l1.32654-1.02228c.02841-.02028.05475-.03245.0791-.03651s.05072-.00609.0791-.00609h.31033c.04056 0 .07303.0142.09735.04259.02435.02434.0365.05679.0365.09736v3.9796c0 .04057-.01218.07505-.0365.10345-.02435.02434-.05679.03652-.09735.03652h-.32251v-.00002zm2.85388.06085c-.27991 0-.51724-.0426-.71194-.12779-.19067-.08925-.34686-.21095-.46854-.3651-.1217-.15415-.21094-.33062-.26773-.5294-.05273-.19878-.08316-.40972-.09128-.63284-.00406-.10953-.00812-.22515-.01218-.34685v-.3651c.00406-.12576.00812-.24543.01218-.35902.00406-.22312.03448-.43406.09128-.63284.06085-.20283.15009-.3793.26773-.5294.1217-.15415.27991-.27383.47464-.35902.19473-.08925.43002-.13387.70587-.13387.27991 0 .5152.04462.70587.13387.19473.08519.35294.20486.47464.35902.1217.1501.21094.32656.26773.5294.06085.19878.09329.40972.09735.63284.00406.11359.00607.23326.00607.35902.00406.1217.00406.2434 0 .3651 0 .1217-.00204.23732-.00607.34685-.00406.22312-.0365.43406-.09735.63284-.05679.19878-.14603.37524-.26773.5294-.11765.15415-.27383.27585-.46854.3651-.19067.08519-.42798.12779-.71194.12779zm0-.51723c.31641 0 .54968-.10345.69977-.31034.15414-.21095.23325-.49694.23734-.85799.00812-.11764.01218-.23123.01218-.34076v-.33468c0-.11359-.00406-.22515-.01218-.33468-.00406-.35293-.08316-.63487-.23734-.84582-.15009-.215-.38336-.32251-.69977-.32251-.31235 0-.54562.1075-.69977.32251-.15009.21095-.22919.49289-.23734.84582 0 .10953-.00204.22109-.0061.33468v.33468c.00406.10953.0061.22312.0061.34076.00812.36104.08926.64704.24341.85799.15414.20689.38538.31034.6937.31034zm3.80921.51723c-.3367 0-.62271-.06694-.858-.20081-.23529-.13793-.4158-.31642-.54156-.53548-.1217-.22312-.18256-.46449-.18256-.72412 0-.1217.01419-.23732.0426-.34685.03244-.11359.07098-.21906.11563-.31642.04868-.10142.09534-.19066.13995-.26774.04868-.08113.09128-.14604.12778-.19472l1.15616-1.61253c.02029-.02028.04462-.04462.07303-.07302.02841-.03245.07098-.04868.12778-.04868h.32251c.0365 0 .06491.0142.08521.04259.02435.02434.0365.05477.0365.09128 0 .01623-.00204.03245-.00607.04868-.00406.01217-.01016.02231-.01825.03043l-.8884 1.24134c.04868-.01623.10345-.02637.16431-.03043.06491-.00811.12576-.01217.18256-.01217.22311.00406.42596.04463.60849.1217.18256.07708.33875.18255.46854.31642.13388.12981.23529.28194.30426.45638.06897.17038.10345.35293.10345.54765 0 .25557-.06085.49491-.18256.71803s-.3002.40364-.53549.54157c-.23123.13793-.51318.20689-.84583.20689h-.00003zm-.00611-.51723c.17038 0 .32858-.03651.47464-.10953.14603-.07302.26367-.17849.35294-.31642.09329-.14198.13995-.31439.13995-.51723 0-.20689-.04462-.3793-.13388-.51723-.08923-.14198-.20892-.24746-.35901-.31642-.14603-.07302-.30426-.10953-.47464-.10953s-.32858.03651-.47464.10953c-.14603.06896-.26572.17444-.35901.31642-.08926.13793-.13388.31034-.13388.51723 0 .20283.04462.37524.13388.51723.09329.13793.21298.2434.35901.31642s.30426.10953.47464.10953z" fill="#25357a"/><path d="m386.02585 97.92438c-.04056 0-.07504-.01217-.10345-.03651-.02435-.0284-.0365-.06288-.0365-.10345v-3.40761l-1.0101.77888c-.03244.02434-.06693.03448-.10345.03043-.0365-.00405-.06693-.02231-.09128-.05476l-.1582-.20081c-.02435-.03651-.03448-.07302-.03043-.10953.00812-.03651.02841-.06694.06085-.09127l1.32654-1.02228c.02841-.02028.05475-.03245.0791-.03651s.05072-.00609.0791-.00609h.31033c.04056 0 .07303.0142.09735.04259.02435.02434.0365.05679.0365.09736v3.9796c0 .04057-.01218.07505-.0365.10345-.02435.02434-.05679.03652-.09735.03652h-.32251v-.00002zm2.85385.06085c-.27991 0-.51724-.0426-.71194-.12779-.19067-.08925-.34686-.21095-.46854-.3651-.1217-.15415-.21094-.33062-.26773-.5294-.05273-.19878-.08316-.40972-.09128-.63284-.00406-.10953-.00812-.22515-.01218-.34685v-.3651c.00406-.12576.00812-.24543.01218-.35902.00406-.22312.03448-.43406.09128-.63284.06085-.20283.15009-.3793.26773-.5294.1217-.15415.27991-.27383.47464-.35902.19473-.08925.43002-.13387.70587-.13387.27991 0 .5152.04462.70587.13387.19473.08519.35294.20486.47464.35902.1217.1501.21094.32656.26773.5294.06085.19878.09329.40972.09735.63284.00406.11359.00607.23326.00607.35902.00406.1217.00406.2434 0 .3651 0 .1217-.00204.23732-.00607.34685-.00406.22312-.0365.43406-.09735.63284-.05679.19878-.14603.37524-.26773.5294-.11765.15415-.27383.27585-.46854.3651-.19067.08519-.42798.12779-.71194.12779zm0-.51723c.31641 0 .54968-.10345.69977-.31034.15414-.21095.23325-.49694.23734-.85799.00812-.11764.01218-.23123.01218-.34076v-.33468c0-.11359-.00406-.22515-.01218-.33468-.00406-.35293-.08316-.63487-.23734-.84582-.15009-.215-.38336-.32251-.69977-.32251-.31235 0-.54562.1075-.69977.32251-.15009.21095-.22919.49289-.23734.84582 0 .10953-.00204.22109-.0061.33468v.33468c.00406.10953.0061.22312.0061.34076.00812.36104.08926.64704.24341.85799.15414.20689.38538.31034.6937.31034zm3.71188.51723c-.32047 0-.59229-.05477-.8154-.1643-.21906-.11359-.38742-.25963-.50507-.43812-.11359-.17849-.17444-.36713-.18256-.56591-.00406-.03651.00607-.06491.03043-.08519s.05475-.03042.09128-.03042h.32858c.0365 0 .06897.00811.09735.02434s.05072.05071.06693.10345c.04056.1501.10547.27383.19473.37119.09329.0933.19879.16227.31641.20689.1217.04057.24747.06085.37726.06085.17444 0 .33264-.03448.47464-.10345.14603-.07302.26166-.17849.34686-.31642.08521-.14198.12778-.31236.12778-.51114 0-.18255-.0426-.33873-.12778-.46855-.08112-.13387-.19473-.23529-.34076-.30425-.14197-.07302-.30222-.10953-.48071-.10953-.13388 0-.24341.01623-.32858.04868-.08521.03245-.1582.07099-.21906.11562-.05679.04462-.10953.08316-.1582.11562-.04462.03245-.09534.04868-.15213.04868h-.31641c-.0365 0-.06897-.01217-.09735-.03651-.02841-.0284-.04056-.06085-.0365-.09736l.19473-2.0324c.00406-.04868.01825-.08519.0426-.10953.02841-.0284.06491-.04259.10953-.04259h2.12366c.04056 0 .07303.0142.09735.04259.02841.02434.0426.05679.0426.09736v.23732c0 .04462-.01419.07911-.0426.10345-.02435.02434-.05679.03651-.09735.03651h-1.7525l-.11563 1.19875c.05679-.03651.14807-.07911.27383-.12779.12576-.05274.29816-.0791.51724-.0791.19879 0 .38538.03043.55981.09127.1785.06085.3367.1501.47464.26774s.24542.26166.32251.43204c.07709.16632.11563.35902.11563.57808 0 .30831-.06897.56996-.20688.78497-.13388.215-.31845.3793-.55374.49289-.23123.10953-.49695.1643-.79715.1643l-.00003-.00004z" fill="#25357a"/><path d="m347.36905 109.71991c-.04056 0-.07504-.01323-.10345-.03969-.02435-.03087-.0365-.06835-.0365-.11244v-3.70394l-1.0101.84661c-.03244.02646-.06693.03748-.10345.03307-.0365-.00441-.06693-.02425-.09128-.05953l-.1582-.21827c-.02435-.03968-.03448-.07937-.03043-.11905.00812-.03968.02841-.07276.06085-.09921l1.32654-1.11118c.02841-.02205.05475-.03528.0791-.03968.02435-.00441.05072-.00662.0791-.00662h.31033c.04056 0 .07303.01543.09735.0463.02435.02646.0365.06173.0365.10583v4.32567c0 .04409-.01218.08157-.0365.11244-.02435.02646-.05679.03969-.09735.03969z" fill="#25357a"/><path d="m349.98572 109.78605c-.27991 0-.51724-.0463-.71194-.1389-.19067-.09701-.34686-.22929-.46854-.39685-.1217-.16756-.21094-.35937-.26773-.57543-.05273-.21606-.08316-.44535-.09128-.68787-.00406-.11906-.00812-.24472-.01218-.37701v-.39685c.00406-.13669.00812-.26677.01218-.39024.00406-.24252.03448-.47181.09128-.68787.06085-.22047.15009-.41228.26773-.57543.1217-.16756.27991-.29764.47464-.39024.19473-.09701.43002-.14551.70587-.14551.27991 0 .5152.0485.70587.14551.19473.0926.35294.22268.47464.39024.1217.16315.21094.35496.26773.57543.06085.21606.09329.44535.09735.68787.00406.12346.0061.25354.0061.39024.00406.13228.00406.26457 0 .39685 0 .13228-.00204.25795-.0061.37701-.00406.24252-.0365.47181-.09735.68787-.05679.21606-.14603.40787-.26773.57543-.11765.16756-.27383.29984-.46854.39685-.19067.0926-.42798.1389-.71194.1389zm0-.5622c.31641 0 .54968-.11244.69977-.33732.15414-.22929.23325-.54016.23734-.9326.00812-.12787.01218-.25134.01218-.37039v-.36378c0-.12346-.00406-.24472-.01218-.36378-.00406-.38362-.08316-.69008-.23734-.91937-.15009-.2337-.38336-.35055-.69977-.35055-.31235 0-.54562.11685-.69977.35055-.15009.22929-.22919.53575-.23734.91937 0 .11906-.00204.24032-.00607.36378v.36378c.00406.11906.00607.24252.00607.37039.00812.39244.08926.70331.24341.9326.15414.22488.38538.33732.6937.33732z" fill="#25357a"/><path d="m354.11746 109.71991c-.04056 0-.07504-.01323-.10345-.03969-.02435-.03087-.0365-.06835-.0365-.11244v-.95244h-1.97156c-.04056 0-.07504-.01323-.10345-.03968-.02435-.03087-.0365-.06835-.0365-.11244v-.26457c0-.01764.00406-.04409.01218-.07937.01218-.03968.03043-.07937.05478-.11906l1.8255-2.7978c.04868-.07496.12372-.11244.22516-.11244h.43811c.04056 0 .07303.01543.09735.0463.02841.02646.0426.06173.0426.10583v2.7978h.54764c.04462 0 .0791.01543.10345.0463.02841.02646.0426.06173.0426.10583v.27118c0 .04409-.01419.08157-.0426.11244-.02435.02646-.05679.03968-.09735.03968h-.55374v.95244c0 .04409-.01419.08157-.0426.11244-.02435.02646-.05679.03969-.09735.03969h-.30426zm-1.60037-1.66677h1.46649v-2.26866z" fill="#25357a"/><path d="m311.24551 90.69666c-.03415 0-.06055-.00931-.07916-.02794-.01862-.02173-.02795-.04812-.02795-.07917v-3.04117c0-.03415.00931-.06054.02795-.07917.01862-.02173.04501-.0326.07916-.0326h1.90015c.03415 0 .06055.01087.07916.0326.01862.01863.02795.04502.02795.07917v.18629c0 .03415-.00931.06054-.02795.07917-.01862.01863-.04501.02794-.07916.02794h-1.55551v1.08513h1.46237c.03415 0 .06055.01087.07916.0326.01862.01863.02795.04502.02795.07917v.18629c0 .03105-.00931.05744-.02795.07917-.01862.01863-.04501.02794-.07916.02794h-1.46237v1.25745c0 .03105-.01086.05744-.03259.07917-.01862.01863-.04501.02794-.07916.02794h-.23285l-.00003.00003zm3.49176.04657c-.23596 0-.43311-.04502-.59146-.13506s-.27942-.21423-.36325-.37258c-.08383-.16145-.1304-.34464-.13971-.54955-.00311-.05278-.00467-.11954-.00467-.20026 0-.08383.00156-.15058.00467-.20026.00931-.20802.05588-.39121.13971-.54955.08694-.15835.20959-.28254.36792-.37258s.35394-.13506.58682-.13506.42847.04502.58682.13506.27942.21423.36325.37258c.08694.15835.13507.34153.14438.54955.00311.04968.00467.11643.00467.20026 0 .08073-.00156.14748-.00467.20026-.00931.20492-.05588.3881-.13971.54955-.08383.15835-.20493.28254-.36325.37258-.15836.09004-.3555.13506-.59146.13506zm0-.35861c.1925 0 .34619-.06054.46106-.18163.11487-.12419.17697-.30427.18628-.54024.00311-.04657.00467-.10556.00467-.17697s-.00156-.1304-.00467-.17697c-.00931-.23597-.07141-.41449-.18628-.53558-.11487-.12419-.26859-.18629-.46106-.18629s-.34775.0621-.46573.18629c-.11487.12109-.17542.29962-.18164.53558-.00311.04657-.00467.10556-.00467.17697s.00156.1304.00467.17697c.0062.23597.06674.41605.18164.54024.11798.12109.27322.18163.46573.18163zm1.78836.31204c-.03104 0-.05743-.00931-.07916-.02794-.01862-.02173-.02795-.04812-.02795-.07917v-2.20287c0-.03105.00931-.05744.02795-.07917.02173-.02173.04813-.0326.07916-.0326h.21423c.03104 0 .05743.01087.07916.0326s.03259.04813.03259.07917v.20492c.0621-.10556.14749-.18474.25616-.23752s.23907-.07917.3912-.07917h.18628c.03104 0 .05588.01087.07452.0326.01862.01863.02795.04347.02795.07452v.19095c0 .03105-.00931.05589-.02795.07452-.01862.01863-.04346.02794-.07452.02794h-.27942c-.16766 0-.29962.04968-.39587.14903-.09625.09625-.14438.2282-.14438.39586v1.36923c0 .03105-.01086.05744-.03259.07917-.02173.01863-.04813.02794-.07916.02794h-.22821zm2.29981.04657c-.15524 0-.29651-.03105-.4238-.09314-.12729-.0621-.22977-.14593-.30737-.25149s-.11642-.2251-.11642-.35861c0-.21423.08694-.385.2608-.5123s.40051-.21113.67996-.25149l.69394-.0978v-.13506c0-.14903-.04346-.26546-.1304-.34929-.08383-.08383-.22198-.12575-.41449-.12575-.13971 0-.25305.02794-.33997.08383-.08383.05589-.14282.1273-.17697.21423-.01862.04657-.05124.06986-.09781.06986h-.20959c-.03415 0-.06055-.00931-.07916-.02794-.01553-.02173-.02328-.04657-.02328-.07452 0-.04657.01709-.10401.05124-.17232.03726-.06831.09314-.13506.16766-.20026s.16922-.11954.28409-.163c.11798-.04657.2608-.06986.42847-.06986.18628 0 .34308.02484.47037.07452.12729.04657.22665.11022.29807.19095.07452.08073.12729.17232.15836.27478.03415.10246.05124.20647.05124.31203v1.50894c0 .03105-.01086.05744-.03259.07917-.01862.01863-.04346.02794-.07452.02794h-.21423c-.03415 0-.06055-.00931-.07916-.02794-.01862-.02173-.02795-.04812-.02795-.07917v-.20026c-.04037.05589-.0947.11177-.16299.16766-.0683.05278-.15369.0978-.25616.13506-.10245.03415-.22821.05123-.37723.05123l-.00006-.00002zm.09781-.34929c.12729 0 .24374-.02639.3493-.07917.10556-.05589.18784-.14127.24683-.25615.0621-.11488.09314-.25925.09314-.43312v-.1304l-.54025.07917c-.22043.03105-.38654.08383-.49832.15835-.11176.07141-.16766.163-.16766.27478 0 .08693.02484.1599.07452.21889.05276.05589.11798.0978.19559.12575.08072.02794.16299.04192.24683.04192l.00003-.00002zm3.10638.30272c-.03415 0-.06055-.00931-.07916-.02794-.01862-.02173-.02795-.04812-.02795-.07917v-3.04117c0-.03415.00931-.06054.02795-.07917.01862-.02173.04501-.0326.07916-.0326h1.92343c.03415 0 .06055.01087.07916.0326.01862.01863.02795.04502.02795.07917v.17697c0 .03415-.00931.06054-.02795.07917-.01862.01863-.04501.02794-.07916.02794h-1.58347v1.01993h1.48099c.03415 0 .06055.01087.07916.0326.01862.01863.02795.04502.02795.07917v.17232c0 .03105-.00931.05744-.02795.07917-.01862.01863-.04501.02794-.07916.02794h-1.48099v1.05719h1.62073c.03415 0 .06055.00931.07916.02794s.02795.04502.02795.07917v.18163c0 .03105-.00931.05744-.02795.07917-.01862.01863-.04501.02794-.07916.02794h-1.96069zm2.76172 0c-.03104 0-.05743-.00931-.07916-.02794-.01862-.02173-.02795-.04812-.02795-.07917v-2.20753c0-.03105.00931-.05589.02795-.07452.02173-.02173.04813-.0326.07916-.0326h.2189c.03104 0 .05588.01087.07452.0326.02173.01863.03259.04347.03259.07452v.20492c.08072-.10556.18164-.19095.30273-.25615.12418-.06831.28253-.10246.47504-.10246.20181 0 .37259.04502.5123.13506.14282.08694.24994.20958.32135.36792.07141.15524.10712.33687.10712.5449v1.31334c0 .03105-.00931.05744-.02795.07917-.01862.01863-.04349.02794-.07452.02794h-.23285c-.03104 0-.05743-.00931-.07916-.02794-.01862-.02173-.02795-.04812-.02795-.07917v-1.29005c0-.21734-.05276-.38655-.15836-.50764-.10556-.12419-.2608-.18629-.46573-.18629-.1925 0-.34775.0621-.46573.18629-.11487.12109-.17233.2903-.17233.50764v1.29005c0 .03105-.01086.05744-.03259.07917-.01862.01863-.04346.02794-.07452.02794h-.23285zm3.62683 0c-.17386 0-.31516-.0326-.4238-.0978-.10867-.06831-.18784-.163-.23752-.28409-.04968-.12419-.07452-.27012-.07452-.43778v-1.22951h-.36325c-.03104 0-.05743-.00931-.07916-.02794-.01862-.02173-.02795-.04813-.02795-.07917v-.15835c0-.03105.00931-.05589.02795-.07452.02173-.02173.04813-.0326.07916-.0326h.36325v-.77776c0-.03105.00931-.05589.02795-.07452.02173-.02173.04813-.0326.07916-.0326h.2189c.03104 0 .05588.01087.07452.0326.02173.01863.03259.04347.03259.07452v.77776h.57751c.03104 0 .05588.01087.07452.0326.02173.01863.03259.04347.03259.07452v.15835c0 .03105-.01086.05744-.03259.07917-.01862.01863-.04346.02794-.07452.02794h-.57751v1.19691c0 .14593.02484.2608.07452.34464.04968.08383.13818.12575.26547.12575h.28409c.03104 0 .05588.01087.07452.0326.02173.01863.03259.04347.03259.07452v.16766c0 .03105-.01086.05744-.03259.07917-.01862.01863-.04346.02794-.07452.02794h-.32138zm.98267 0c-.03104 0-.05743-.00931-.07916-.02794-.01862-.02173-.02795-.04812-.02795-.07917v-2.20287c0-.03105.00931-.05744.02795-.07917.02173-.02173.04813-.0326.07916-.0326h.21423c.03104 0 .05743.01087.07916.0326s.03259.04813.03259.07917v.20492c.0621-.10556.14749-.18474.25616-.23752s.23907-.07917.3912-.07917h.18628c.03104 0 .05588.01087.07452.0326.01862.01863.02795.04347.02795.07452v.19095c0 .03105-.00931.05589-.02795.07452-.01862.01863-.04346.02794-.07452.02794h-.27942c-.16766 0-.29962.04968-.39587.14903-.09625.09625-.14438.2282-.14438.39586v1.36923c0 .03105-.01086.05744-.03259.07917-.02173.01863-.04813.02794-.07916.02794h-.22821zm2.2998.04657c-.15524 0-.29651-.03105-.4238-.09314-.12729-.0621-.22977-.14593-.30737-.25149s-.11642-.2251-.11642-.35861c0-.21423.08694-.385.2608-.5123s.40051-.21113.67996-.25149l.69394-.0978v-.13506c0-.14903-.04346-.26546-.1304-.34929-.08383-.08383-.22198-.12575-.41449-.12575-.13971 0-.25305.02794-.33997.08383-.08383.05589-.14282.1273-.17697.21423-.01862.04657-.05124.06986-.09781.06986h-.20959c-.03415 0-.06055-.00931-.07916-.02794-.01553-.02173-.02328-.04657-.02328-.07452 0-.04657.01709-.10401.05124-.17232.03726-.06831.09314-.13506.16766-.20026s.16922-.11954.28409-.163c.11798-.04657.2608-.06986.42847-.06986.18628 0 .34308.02484.47037.07452.12729.04657.22665.11022.29807.19095.07452.08073.12729.17232.15836.27478.03415.10246.05124.20647.05124.31203v1.50894c0 .03105-.01086.05744-.03259.07917-.01862.01863-.04346.02794-.07452.02794h-.21423c-.03415 0-.06055-.00931-.07916-.02794-.01862-.02173-.02795-.04812-.02795-.07917v-.20026c-.04037.05589-.0947.11177-.16299.16766-.0683.05278-.15369.0978-.25616.13506-.10245.03415-.22821.05123-.37723.05123l-.00006-.00002zm.09781-.34929c.12729 0 .24374-.02639.3493-.07917.10556-.05589.18784-.14127.24683-.25615.0621-.11488.09314-.25925.09314-.43312v-.1304l-.54025.07917c-.22043.03105-.38654.08383-.49832.15835-.11176.07141-.16766.163-.16766.27478 0 .08693.02484.1599.07452.21889.05276.05589.11798.0978.19559.12575.08072.02794.16299.04192.24683.04192l.00003-.00002zm1.90482.30272c-.03104 0-.05743-.00931-.07916-.02794-.01862-.02173-.02795-.04812-.02795-.07917v-2.20753c0-.03105.00931-.05589.02795-.07452.02173-.02173.04813-.0326.07916-.0326h.2189c.03104 0 .05588.01087.07452.0326.02173.01863.03259.04347.03259.07452v.20492c.08072-.10556.18164-.19095.30273-.25615.12418-.06831.28253-.10246.47504-.10246.20181 0 .37259.04502.5123.13506.14282.08694.24994.20958.32135.36792.07141.15524.10712.33687.10712.5449v1.31334c0 .03105-.00931.05744-.02795.07917-.01862.01863-.04346.02794-.07452.02794h-.23285c-.03104 0-.05743-.00931-.07916-.02794-.01862-.02173-.02795-.04812-.02795-.07917v-1.29005c0-.21734-.05276-.38655-.15836-.50764-.10556-.12419-.2608-.18629-.46573-.18629-.1925 0-.34775.0621-.46573.18629-.11487.12109-.17233.2903-.17233.50764v1.29005c0 .03105-.01086.05744-.03259.07917-.01862.01863-.04346.02794-.07452.02794h-.23285zm3.69317.04657c-.22043 0-.41138-.04192-.57285-.12575-.15836-.08693-.28098-.20958-.36792-.36792-.08694-.16145-.13351-.35395-.13971-.5775-.00314-.04657-.0047-.10867-.0047-.18629s.00156-.13972.0047-.18629c.0062-.22355.05276-.41449.13971-.57284.08694-.16145.20959-.28409.36792-.36792.16144-.08693.35239-.1304.57285-.1304.18008 0 .33377.02484.46106.07452.1304.04968.23752.11333.32135.19095s.14594.16145.18628.25149c.04346.09004.06677.17542.06985.25615.00314.03105-.0062.05589-.02795.07452-.02173.01863-.04813.02794-.07916.02794h-.22354c-.03104 0-.05432-.00621-.06985-.01863-.01553-.01552-.03104-.04036-.04657-.07452-.05588-.15214-.13196-.25925-.22821-.32135s-.21579-.09314-.35861-.09314c-.18628 0-.33844.05744-.45642.17232-.11487.11488-.17697.29962-.18628.55421-.00314.11177-.00314.22044 0 .32601.00931.2577.07141.44399.18628.55887.11798.11177.27011.16766.45642.16766.14282 0 .26236-.03105.35861-.09314s.17233-.16921.22821-.32135c.01553-.03415.03104-.05744.04657-.06986.01553-.01552.03882-.02329.06985-.02329h.22354c.03104 0 .05743.00931.07916.02794s.03104.04347.02795.07452c-.00314.0652-.01709.13195-.0419.20026-.02484.06831-.06519.13816-.12109.20958-.05276.06831-.11954.1304-.20026.18629-.08072.05278-.17853.09625-.2934.1304-.11176.03105-.23907.04657-.3819.04658zm2.55683 0c-.31979 0-.5744-.0978-.76379-.29341-.18939-.19871-.2934-.46883-.31204-.81036-.00314-.04036-.0047-.09159-.0047-.15369 0-.0652.00156-.11798.0047-.15835.01242-.22044.06366-.41294.15369-.5775.09003-.16766.21268-.29651.36792-.38655.15836-.09004.34308-.13506.5542-.13506.23596 0 .43311.04968.59146.14903.16144.09935.28409.24062.36792.42381.08383.18318.12576.39742.12576.6427v.07917c0 .03415-.01086.06054-.03259.07917-.01862.01863-.04346.02794-.07452.02794h-1.61139v.04191c.0062.1273.03415.24683.08383.35861.04968.10867.12109.19716.21423.26546.09314.06831.20493.10246.33533.10246.11176 0 .20493-.01708.27942-.05123.07452-.03415.13507-.07141.18164-.11177.04657-.04347.07761-.07607.09314-.0978.02795-.04036.04968-.06365.06519-.06986.01553-.00931.04037-.01397.07452-.01397h.22354c.03104 0 .05588.00931.07452.02794.02173.01552.03104.03881.02795.06986-.00314.04657-.02798.10401-.07452.17232-.04657.0652-.11334.1304-.20026.1956-.08694.0652-.1925.11954-.31668.163-.12418.04036-.267.06054-.42847.06054zm-.63339-1.43443h1.27609v-.01397c0-.13972-.0264-.26391-.07916-.37258-.04968-.10867-.12265-.19405-.2189-.25615-.09625-.0652-.21112-.0978-.34464-.0978s-.24838.0326-.34464.0978c-.09314.0621-.16455.14748-.21423.25615s-.07452.23286-.07452.37258z" fill="#25357a"/><path d="m201.78185 113.13916c-.02484 0-.04657-.00931-.0652-.02794s-.02794-.04036-.02794-.0652c0-.01552.00156-.0326.00465-.05123l1.15498-3.01323c.01242-.03105.0295-.05589.05122-.07452.02173-.01863.05434-.02794.09779-.02794h.3167c.04036 0 .07141.00931.09315.02794.02484.01863.04347.04347.05589.07452l1.15034 3.01323c.00621.01863.00931.03571.00931.05123 0 .02484-.00931.04657-.02794.0652s-.04036.02794-.0652.02794h-.23752c-.03726 0-.0652-.00931-.08383-.02794-.01552-.01863-.02638-.03571-.03259-.05123l-.25615-.66133h-1.52757l-.25615.66133c-.0031.01552-.01398.0326-.03259.05123-.01863.01863-.04657.02794-.08383.02794h-.23753zm.74514-1.14102h1.25745l-.62872-1.65332-.62872 1.65332zm2.64531 1.14102c-.03105 0-.05743-.00931-.07916-.02794-.01863-.02173-.02794-.04812-.02794-.07917v-3.0924c0-.03105.00931-.05589.02794-.07452.02173-.02173.04813-.0326.07916-.0326h.21889c.03415 0 .06055.01087.07916.0326.01863.01863.02794.04347.02794.07452v3.0924c0 .03105-.00931.05744-.02794.07917-.01863.01863-.04501.02794-.07916.02794zm1.69524.04657c-.15524 0-.29651-.03105-.42381-.09314-.1273-.0621-.22977-.14593-.30737-.25149-.07762-.10556-.11642-.2251-.11642-.35861 0-.21423.08694-.385.2608-.5123.17387-.1273.40051-.21113.67996-.25149l.69392-.0978v-.13506c0-.14903-.04347-.26546-.1304-.34929-.08383-.08383-.22198-.12575-.41449-.12575-.13972 0-.25304.02794-.33998.08383-.08383.05589-.14282.1273-.17697.21423-.01863.04657-.05122.06986-.09779.06986h-.20958c-.03415 0-.06055-.00931-.07916-.02794-.01552-.02173-.02328-.04657-.02328-.07452 0-.04657.01707-.10401.05122-.17232.03726-.06831.09314-.13506.16766-.20026s.1692-.11954.28409-.163c.11798-.04657.2608-.06986.42847-.06986.18629 0 .34308.02484.47038.07452.1273.04657.22665.11022.29807.19095.07452.08073.1273.17232.15836.27478.03415.10246.05122.20647.05122.31203v1.50894c0 .03105-.01086.05744-.03259.07917-.01863.01863-.04347.02794-.07452.02794h-.21423c-.03415 0-.06055-.00931-.07916-.02794-.01863-.02173-.02794-.04812-.02794-.07917v-.20026c-.04036.05589-.0947.11177-.16299.16766-.06831.05278-.15369.0978-.25615.13506-.10246.03415-.2282.05123-.37723.05123l-.00006-.00002zm.09781-.34929c.1273 0 .24373-.02639.34929-.07917.10556-.05589.18784-.14127.24683-.25615.0621-.11488.09314-.25925.09314-.43312v-.1304l-.54024.07917c-.22044.03105-.38655.08383-.49832.15835-.11177.07141-.16766.163-.16766.27478 0 .08693.02484.1599.07452.21889.05278.05589.11798.0978.1956.12575.08073.02794.16299.04192.24683.04192l.00002-.00002zm1.90478.30272c-.03105 0-.05743-.00931-.07916-.02794-.01863-.02173-.02794-.04812-.02794-.07917v-2.20753c0-.03105.00931-.05589.02794-.07452.02173-.02173.04813-.0326.07916-.0326h.22356c.03105 0 .05589.01087.07452.0326.01863.01863.02794.04347.02794.07452v2.20753c0 .03105-.00931.05744-.02794.07917-.01863.01863-.04347.02794-.07452.02794zm-.03724-2.87351c-.03105 0-.05743-.00931-.07916-.02794-.01863-.02173-.02794-.04813-.02794-.07917v-.25149c0-.03105.00931-.05589.02794-.07452.02173-.02173.04813-.0326.07916-.0326h.29341c.03105 0 .05589.01087.07452.0326.02173.01863.03259.04347.03259.07452v.25149c0 .03105-.01086.05744-.03259.07917-.01863.01863-.04347.02794-.07452.02794zm1.1643 2.87351c-.03105 0-.05743-.00931-.07916-.02794-.01863-.02173-.02794-.04812-.02794-.07917v-2.20753c0-.03105.00931-.05589.02794-.07452.02173-.02173.04813-.0326.07916-.0326h.21889c.03105 0 .05589.01087.07452.0326.02173.01863.03259.04347.03259.07452v.20492c.08072-.10556.18163-.19095.30272-.25615.12419-.06831.28255-.10246.47504-.10246.20181 0 .37257.04502.5123.13506.14282.08694.24994.20958.32135.36792.07141.15524.10712.33687.10712.5449v1.31334c0 .03105-.00931.05744-.02794.07917-.01863.01863-.04347.02794-.07452.02794h-.23286c-.03105 0-.05743-.00931-.07916-.02794-.01863-.02173-.02794-.04812-.02794-.07917v-1.29005c0-.21734-.05278-.38655-.15836-.50764-.10556-.12419-.2608-.18629-.46571-.18629-.1925 0-.34773.0621-.46571.18629-.11488.12109-.17232.2903-.17232.50764v1.29005c0 .03105-.01086.05744-.03259.07917-.01863.01863-.04347.02794-.07452.02794h-.23288z" fill="#884aa8"/><path d="m198.80853 117.79639c-.03415 0-.06055-.00931-.07916-.02794-.01863-.02173-.02794-.04812-.02794-.07917v-3.04117c0-.03415.00931-.06054.02794-.07917.01863-.02173.04501-.0326.07916-.0326h1.05719c.31979 0 .5775.04812.7731.14437s.33842.23907.42847.42847c.09004.18629.13661.41605.13972.68927.0031.13972.00465.26236.00465.36792s-.00156.22665-.00465.36326c-.00621.28564-.05434.52316-.14436.71256-.08693.18629-.22665.32601-.41914.41915-.18939.09004-.44089.13506-.75447.13506h-1.08047l-.00003-.00002zm.34929-.39587h.7079c.21423 0 .38499-.0295.5123-.08849s.21889-.15369.27478-.28409c.05899-.1304.09004-.30272.09314-.51695.00621-.09314.00931-.17387.00931-.24218v-.20958c0-.07141-.0031-.15214-.00931-.24218-.00621-.30117-.07762-.52316-.21423-.66598-.13661-.14593-.36636-.21889-.68927-.21889h-.68462zm3.59538.44244c-.19872 0-.36792-.04347-.50764-.1304-.13661-.09004-.24062-.21423-.31203-.37258s-.10712-.33998-.10712-.5449v-1.31334c0-.03105.00931-.05589.02794-.07452.02173-.02173.04813-.0326.07916-.0326h.23286c.03105 0 .05589.01087.07452.0326.02173.01863.03259.04347.03259.07452v1.29005c0 .46262.20181.69393.60544.69393.1925 0 .34619-.06054.46107-.18163.11798-.12419.17697-.29496.17697-.5123v-1.29005c0-.03105.00931-.05589.02794-.07452.02173-.02173.04813-.0326.07916-.0326h.2282c.03415 0 .06055.01087.07916.0326.01863.01863.02794.04347.02794.07452v2.20753c0 .03105-.00931.05744-.02794.07917-.01863.01863-.04501.02794-.07916.02794h-.21423c-.03105 0-.05743-.00931-.07916-.02794-.01863-.02173-.02794-.04813-.02794-.07917v-.20492c-.08383.10867-.18629.1956-.30737.26081-.11798.0652-.27478.0978-.47038.0978zm2.87816 0c-.22044 0-.41139-.04191-.57285-.12575-.15836-.08694-.28099-.20958-.36792-.36792-.08694-.16145-.13351-.35395-.13972-.5775-.00311-.04657-.00465-.10867-.00465-.18629s.00156-.13972.00465-.18629c.00621-.22355.05278-.41449.13972-.57284.08694-.16145.20958-.28409.36792-.36792.16145-.08694.3524-.1304.57285-.1304.18008 0 .33377.02484.46107.07452.1304.04968.23752.11333.32135.19095s.14594.16145.18629.25149c.04347.09004.06676.17542.06985.25615.00311.03105-.00621.05589-.02794.07452s-.04813.02794-.07916.02794h-.22356c-.03105 0-.05434-.00621-.06985-.01863-.01552-.01552-.03105-.04036-.04657-.07452-.05589-.15214-.13194-.25925-.2282-.32135s-.21579-.09314-.35861-.09314c-.18629 0-.33842.05744-.45641.17232-.11488.11488-.17697.29962-.18629.55421-.00311.11177-.00311.22044 0 .32601.00931.2577.07141.44399.18629.55887.11798.11177.27013.16766.45641.16766.14282 0 .26236-.03105.35861-.09314s.17232-.16921.2282-.32135c.01552-.03415.03105-.05744.04657-.06986.01552-.01552.0388-.02329.06985-.02329h.22356c.03105 0 .05743.00931.07916.02794s.03105.04347.02794.07452c-.0031.0652-.01707.13195-.04192.20026s-.0652.13816-.12109.20958c-.05278.06831-.11954.1304-.20026.18629-.08073.05278-.17853.09625-.29341.1304-.11177.03105-.23907.04657-.3819.04658zm2.26808 0c-.15524 0-.29651-.03105-.42381-.09314-.1273-.0621-.22977-.14593-.30737-.25149s-.11642-.2251-.11642-.35861c0-.21423.08694-.385.2608-.5123.17387-.1273.40051-.21113.67996-.25149l.69392-.0978v-.13506c0-.14903-.04347-.26546-.1304-.34929-.08383-.08383-.22198-.12575-.41449-.12575-.13972 0-.25304.02794-.33998.08383-.08383.05589-.14282.1273-.17697.21423-.01863.04657-.05122.06986-.09779.06986h-.20958c-.03415 0-.06055-.00931-.07916-.02794-.01552-.02173-.02328-.04657-.02328-.07452 0-.04657.01707-.10401.05122-.17232.03726-.06831.09315-.13506.16766-.20026.07452-.0652.1692-.11954.28409-.163.11798-.04657.2608-.06986.42847-.06986.18629 0 .34308.02484.47038.07452.1273.04657.22665.11022.29807.19095.07452.08073.1273.17232.15836.27478.03415.10246.05122.20647.05122.31203v1.50894c0 .03105-.01086.05744-.03259.07917-.01863.01863-.04347.02794-.07452.02794h-.21423c-.03415 0-.06055-.00931-.07916-.02794-.01863-.02173-.02794-.04812-.02794-.07917v-.20026c-.04036.05589-.0947.11177-.16299.16766-.06831.05278-.15369.0978-.25615.13506-.10246.03415-.2282.05123-.37723.05123l-.00006-.00002zm.0978-.34929c.1273 0 .24373-.02639.34929-.07917.10556-.05589.18784-.14127.24683-.25615.0621-.11488.09314-.25925.09314-.43312v-.1304l-.54024.07917c-.22044.03105-.38655.08383-.49832.15835-.11177.07141-.16766.163-.16766.27478 0 .08693.02484.1599.07452.21889.05278.05589.11798.0978.1956.12575.08073.02794.16299.04191.24683.04191h.00002zm2.63598.34929c-.17387 0-.32291-.02173-.44708-.0652-.12419-.04347-.2251-.09625-.30272-.15835s-.13661-.12419-.17697-.18629c-.03726-.0621-.05743-.11177-.06055-.14903-.00311-.03415.00777-.06054.03259-.07917.02484-.01863.04968-.02794.07452-.02794h.20493c.01863 0 .03259.0031.04192.00931.01242.00311.02794.01553.04657.03726.04036.04347.08537.08693.13506.1304s.11021.07917.18163.10712c.07452.02794.16611.04191.27478.04191.15836 0 .28876-.0295.3912-.08849.10246-.0621.15369-.15214.15369-.27012 0-.07762-.02173-.13972-.0652-.18629-.04036-.04657-.11488-.08848-.22356-.12574-.10556-.03726-.2515-.07607-.43777-.11643-.18629-.04347-.33377-.09625-.44244-.15835-.10867-.0652-.18629-.14127-.23286-.2282-.04657-.09004-.06985-.19095-.06985-.30272 0-.11488.03415-.2251.10246-.33066.06831-.10867.16766-.19716.29807-.26546.13351-.06831.29962-.10246.49832-.10246.16145 0 .29961.02018.41449.06054s.20958.09159.28409.15369c.07452.05899.1304.11798.16766.17697s.05743.10867.06055.14903c.00311.03105-.00621.05744-.02794.07917-.02173.01863-.04657.02794-.07452.02794h-.1956c-.02173 0-.04036-.00466-.05589-.01397-.01242-.00931-.02484-.02018-.03726-.0326-.03105-.04036-.06831-.08073-.11177-.12109-.04036-.04036-.0947-.07296-.16299-.0978-.0652-.02794-.15215-.04191-.2608-.04191-.15524 0-.27167.0326-.34929.0978s-.11642.14748-.11642.24683c0 .05899.01707.11177.05122.15835.03415.04657.09935.08849.1956.12575s.23907.07762.42847.12109c.20493.04036.36636.0947.48434.163.11798.06831.20181.14748.2515.23752s.07452.19405.07452.31203c0 .1304-.0388.24994-.11642.35861-.07452.10867-.18629.1956-.33533.2608-.14594.0621-.32756.09314-.54489.09314h-.00002zm2.3752 0c-.17387 0-.32291-.02173-.44708-.0652-.12419-.04347-.2251-.09625-.30272-.15835s-.13661-.12419-.17699-.18629c-.03726-.0621-.05743-.11177-.06055-.14903-.00313-.03415.00774-.06054.03259-.07917.02484-.01863.04968-.02794.07451-.02794h.20493c.01863 0 .03259.0031.04192.00931.01242.00311.02794.01553.04657.03726.04036.04347.08537.08693.13506.1304s.11021.07917.18163.10712c.07452.02794.16611.04191.27478.04191.15836 0 .28876-.0295.3912-.08849.10246-.0621.15369-.15214.15369-.27012 0-.07762-.02173-.13972-.0652-.18629-.04036-.04657-.11487-.08849-.22356-.12575-.10556-.03726-.2515-.07607-.43777-.11643-.18629-.04347-.33377-.09625-.44244-.15835-.10867-.0652-.18629-.14127-.23286-.2282-.04657-.09004-.06985-.19095-.06985-.30272 0-.11488.03415-.2251.10246-.33066.06831-.10867.16766-.19716.29807-.26546.13351-.06831.29962-.10246.49832-.10246.16145 0 .29961.02018.41449.06054s.20958.09159.28409.15369c.07452.05899.1304.11798.16766.17697s.05743.10867.06055.14903c.00313.03105-.00618.05744-.02794.07917-.02173.01863-.04657.02794-.07452.02794h-.1956c-.02173 0-.04036-.00466-.05589-.01397-.01242-.00931-.02484-.02018-.03726-.0326-.03105-.04036-.0683-.08073-.11177-.12109-.04036-.04036-.0947-.07296-.16299-.0978-.0652-.02794-.15213-.04191-.2608-.04191-.15524 0-.27167.0326-.34929.0978s-.11642.14748-.11642.24683c0 .05899.01707.11177.05122.15835s.09937.08849.1956.12575c.09625.03726.23907.07762.42847.12109.20493.04036.36636.0947.48434.163.11798.06831.20181.14748.2515.23752s.07452.19405.07452.31203c0 .1304-.0388.24994-.11642.35861-.07451.10867-.18629.1956-.33533.2608-.14594.0621-.32756.09314-.54491.09314h.00002l.00002.00002zm2.50093 0c-.31979 0-.57439-.0978-.76379-.29341-.18939-.19871-.29341-.46883-.31203-.81036-.00313-.04036-.0047-.09159-.0047-.15369 0-.0652.00157-.11798.0047-.15835.01242-.22044.06364-.41294.15369-.5775.09004-.16766.21268-.29651.36792-.38655.15836-.09004.34308-.13506.55421-.13506.23598 0 .43312.04968.59148.14903.16145.09935.28409.24062.36792.42381s.12575.39742.12573.6427v.07917c0 .03415-.01086.06054-.03259.07917-.01863.01863-.04347.02794-.07452.02794h-1.6114v.04192c.0062.1273.03413.24683.08383.35861.04967.10867.12108.19716.21423.26546.09314.06831.20493.10246.33533.10246.11177 0 .20493-.01708.27943-.05123.07452-.03415.13506-.07141.18163-.11177.04657-.04347.07762-.07607.09314-.0978.02794-.04036.04967-.06365.0652-.06986.01553-.00931.04037-.01397.07452-.01397h.22356c.03105 0 .05589.00931.07452.02794.02173.01552.03105.03881.02794.06986-.00313.04657-.02797.10401-.07451.17232-.04657.0652-.11333.1304-.20026.1956s-.1925.11954-.3167.163c-.12419.04036-.26701.06054-.42847.06054l-.00002.00002zm-.63337-1.43443h1.27608v-.01397c0-.13972-.02638-.26391-.07916-.37258-.04968-.10867-.12263-.19405-.21889-.25615-.09625-.0652-.21114-.0978-.34464-.0978s-.24838.0326-.34464.0978c-.09314.0621-.16457.14748-.21423.25615-.04968.10867-.07452.23286-.07452.37258z" fill="#884aa8"/><path d="m238.57526 113.13919c-.0249 0-.04691-.009-.0654-.0278-.01859-.0186-.0278-.0405-.0278-.0654 0-.01559.00101-.0327.004-.0513l1.15527-3.01318c.01221-.03081.0293-.05569.0513-.0742.02151-.0191.0542-.02831.0976-.02831h.31689c.043 0 .07571.009.0976.02831.02151.01849.0386.0434.0513.0742l1.15039 3.01318c.00601.01849.009.0356.009.0513 0 .0249-.009.04691-.02829.0654-.01859.0186-.04001.0278-.06491.0278h-.2373c-.0376 0-.06491-.009-.08151-.0278-.01709-.0186-.02881-.03571-.0351-.0513l-.25635-.66162h-1.52734l-.25635.66162c-.00299.01559-.0137.0327-.0322.0513-.01901.0186-.04691.0278-.08401.0278zm.74511-1.14111h1.25732l-.62891-1.65332-.62842 1.65332z" fill="#884aa8"/><path d="m242.8316 113.18559c-.2207 0-.41064-.0425-.5708-.12793-.15967-.08549-.2832-.20801-.37012-.36768-.08691-.16016-.1333-.35205-.13965-.5752-.00299-.04691-.005-.10889-.005-.18652 0-.07761.00201-.13963.005-.18604.00601-.22363.0527-.41553.13965-.5752.08691-.16016.21045-.28271.37012-.36816.16016-.0854.3501-.12793.5708-.12793.17969 0 .33447.0249.46338.0742.12891.0498.23486.11377.31885.19141.08401.07761.14697.16113.18848.25146.04199.0898.06451.17529.0679.25586.00299.0312-.00601.0562-.0278.07471-.022.0186-.04831.0278-.07959.0278h-.22314c-.03119 0-.05469-.007-.06979-.021-.01559-.01421-.03119-.0381-.04691-.0723-.05569-.15186-.13184-.25928-.22803-.32127s-.21582-.09331-.35889-.09331c-.18604 0-.3374.0576-.4541.17236-.11621.11523-.1792.2998-.18848.5542-.00299.11182-.00299.2207 0 .32617.009.25781.0723.44336.18848.55664.1167.11328.26807.16992.4541.16992.14307 0 .2627-.0312.35889-.09331.09619-.062.17236-.16895.22803-.32129.01559-.03419.03119-.0591.04691-.07471.01511-.01511.0386-.02299.06979-.02299h.22314c.03119 0 .05759.00999.07959.0303.02151.02.03079.0459.0278.07671-.00299.0654-.01709.13184-.04199.2002-.0249.06841-.06451.1377-.11865.20752-.05469.06979-.12207.13184-.20264.18604-.08109.0542-.17725.0976-.28906.13037-.11133.0327-.24023.0488-.38623.0488l-.00003.00015v.00002z" fill="#884aa8"/><path d="m245.39313 113.18559c-.32324 0-.5791-.0981-.76855-.29541-.18945-.19727-.29346-.4668-.31201-.80811-.00299-.0405-.005-.0923-.005-.15625 0-.06351.00101-.11523.005-.15576.01221-.2207.06351-.41357.15381-.58008.0899-.16602.21338-.29395.37012-.38428.15674-.0898.34082-.13477.55176-.13477.23584 0 .43408.0498.59375.14893.16016.09959.28174.24072.36572.42383s.12598.39746.12598.64258v.0791c0 .03419-.01031.06059-.03027.07961-.02051.0186-.0459.0278-.07709.0278h-1.61133v.04201c.00598.12695.03418.24609.08398.35596.04932.11037.12158.19971.21631.26807.09473.06841.20557.10254.33301.10254.11182 0 .20508-.01711.2793-.0513.07471-.03419.13525-.0723.18164-.11426.04688-.04201.07758-.0752.09332-.1001.02777-.03709.0498-.0596.06543-.0674.01508-.008.03998-.0117.07422-.0117h.22852c.02777 0 .0517.008.07233.02541.02002.01711.02832.0415.02539.0723-.00299.0464-.02777.10352-.07471.16992-.04639.06689-.1123.13281-.19775.19824-.08551.0649-.19092.11865-.31689.16064-.12549.0415-.26758.0625-.42578.0625l-.00018-.00002zm-.63819-1.43409h1.27588v-.01421c0-.13963-.02539-.26367-.07672-.37254-.05127-.1084-.125-.19482-.22119-.2583-.09619-.064-.21094-.0957-.34473-.0957-.1333 0-.24756.03169-.34229.0957-.09473.06351-.16699.1499-.21631.2583-.0498.10889-.07471.23291-.07471.37254l.00006.01421z" fill="#884aa8"/><path d="m236.8399 117.8428c-.21094 0-.39795-.0386-.56104-.11621s-.28955-.18555-.37939-.32373c-.0903-.13818-.13525-.29736-.13525-.47754 0-.14256.0303-.26756.09079-.37451.06061-.10742.14062-.20264.23975-.28662.09961-.084.20801-.15967.32617-.22803-.146-.15527-.24902-.29199-.30957-.41016-.06049-.11768-.09079-.24023-.09079-.36768 0-.13965.03561-.26709.10693-.38184.07129-.11523.17236-.20801.30273-.27979.13037-.0713.28418-.10693.46094-.10693.17383 0 .32471.03419.45215.10254.12695.06841.22656.15965.29785.2749.07129.11475.10693.24365.10693.38623 0 .13672-.0322.25635-.0976.35889-.0654.10252-.15137.19383-.2583.27441-.10742.0811-.22461.15723-.35156.22852l.7915.77783c.0498-.0869.0972-.18799.14209-.30273.04489-.11523.08151-.25.10938-.40527.00601-.062.0386-.09331.09769-.09331h.20508c.03119 0 .05521.009.0723.0278.01709.0186.02539.04201.02539.06979-.00299.06841-.01321.14162-.0303.21924-.01709.07761-.04199.15967-.07419.24658-.03271.0869-.07181.17334-.1167.25879-.04489.08549-.0972.16846-.15576.24902l.4751.47508c.0278.0249.0415.0479.0415.06979 0 .0278-.00699.0498-.02301.0649-.01559.01559-.03909.02341-.06979.02341h-.26074c-.03119 0-.0571-.005-.07709-.01421-.01999-.009-.03659-.02-.0488-.0322l-.30713-.30273c-.12109.11768-.26416.21338-.42871.28613-.16455.0732-.354.10938-.56836.10938l-.00018.00024v.00002zm0-.37255c.12451 0 .24854-.02541.37256-.07671.12451-.0513.23926-.12939.34473-.23535l-.87061-.84766c-.13379.07471-.24951.15918-.34717.25391-.09769.0947-.14648.21191-.14648.35156 0 .11816.0303.21828.09079.3008.06049.082.14014.14502.23975.18848.09909.0435.20459.0649.31641.0649l.00003.00008zm-.05569-1.625c.09909-.0562.19189-.11182.27686-.16795.08539-.05569.15381-.11768.20508-.18604.0513-.06841.07709-.146.07709-.23291 0-.12402-.04391-.22363-.13086-.29834-.08691-.0742-.19385-.11182-.32129-.11182-.12109 0-.22656.03661-.31641.10986-.0903.07269-.13525.17432-.13525.30469 0 .05321.009.10645.0278.16064.01901.0547.05371.11426.10498.17969.0513.0649.12158.146.21191.24219l.00009-.00002v.00002z" fill="#884aa8"/><path d="m241.10114 117.79643c-.03079 0-.05661-.0103-.07669-.0303-.01999-.02-.0303-.0459-.0303-.07671v-2.73877h-.89404c-.03119 0-.05661-.00999-.07721-.0303-.01999-.02-.0303-.04539-.0303-.07671v-.1958c0-.03419.01031-.061.0303-.0815.02051-.02.0459-.0303.07721-.0303h2.24463c.03421 0 .06149.0103.08151.0303.01999.02049.0303.04739.0303.0815v.1958c0 .0312-.01031.05659-.0303.07671-.01999.02049-.04739.0303-.08151.0303h-.88965v2.73877c0 .03081-.01001.05659-.0303.07671-.01999.02-.04739.0303-.08151.0303h-.24213z" fill="#884aa8"/><path d="m243.59283 117.8428c-.15527 0-.29639-.03081-.42383-.0928-.12744-.0625-.22998-.146-.30762-.25146-.07761-.10596-.11621-.2251-.11621-.35889 0-.21436.08691-.38477.26074-.51221s.40039-.21094.68018-.25146l.69385-.0977v-.13525c0-.14893-.043-.26562-.12842-.34912-.08539-.084-.22412-.12598-.4165-.12598-.13672 0-.24854.0278-.33545.084-.08691.05569-.14746.12744-.18164.21436-.01859.0464-.0513.06979-.09769.06979h-.20947c-.03421 0-.06009-.01019-.07721-.0303-.01709-.02049-.02539-.0444-.02539-.0723 0-.04691.01761-.104.05319-.17236.03571-.06841.09079-.13525.16553-.2002.07471-.0654.16992-.12061.28662-.16553.11621-.04491.2583-.0674.42578-.0674.18652 0 .34326.0239.4707.0723.12695.0479.22705.1123.30029.19336.07269.0806.12549.17188.1582.27441s.04883.20654.04883.31203v1.50928c0 .03081-.01001.05659-.03027.07671-.02002.02-.0459.0303-.07672.0303h-.21436c-.03421 0-.06049-.0103-.0791-.0303s-.0278-.0459-.0278-.07671v-.20068c-.0405.0562-.0947.11133-.16309.16553s-.15381.09959-.25635.13525c-.10205.03571-.22803.05321-.37695.05321l.00015.00014v-.00002zm.09769-.34912c.12744 0 .24365-.0273.34912-.0815.10596-.0542.18896-.13867.24951-.25391.06049-.11475.09079-.25928.09079-.43311v-.13037l-.54053.0791c-.22021.0312-.38623.0835-.49805.15625-.11182.0728-.16797.16504-.16797.27686 0 .0869.02591.15918.07709.2168.0513.0576.11621.1001.19531.12793.07959.0278.16064.04201.24463.04201l.00009-.00006z" fill="#884aa8"/><path d="m246.43365 117.79643c-.17383 0-.31494-.0332-.42383-.1001s-.18799-.16162-.2373-.28418c-.0498-.12256-.07471-.26758-.07471-.43555v-1.22949h-.36328c-.03119 0-.05658-.00999-.07672-.0303-.02051-.02-.03027-.04539-.03027-.07671v-.1582c0-.0312.01001-.05659.03027-.0771.02002-.02.04541-.0303.07672-.0303h.36328v-.77783c0-.03081.01019-.05659.03027-.07671.02002-.02.0459-.0303.07672-.0303h.21924c.03082 0 .05658.0103.07672.0303.02002.02.03027.0459.03027.07671v.77783h.57764c.03418 0 .06061.0103.0791.0303.01862.02049.02777.0459.02777.0771v.1582c0 .0312-.00897.05659-.02777.07671-.01862.02049-.04492.0303-.0791.0303h-.57764v1.19727c0 .146.0249.26074.07471.34422.04932.084.13818.12598.26514.12598h.28418c.03119 0 .05658.01019.07709.0303.02002.02.03027.0459.03027.07671v.16797c0 .03081-.01031.05659-.03027.07671-.02051.02-.0459.0303-.07709.0303h-.32129s-.00012-.00014-.00012-.00014z" fill="#884aa8"/><path d="m248.27838 117.8428c-.32324 0-.5791-.0981-.76855-.29541-.18945-.19727-.29346-.4668-.31201-.80811-.00299-.0405-.005-.0923-.005-.15625 0-.06351.00098-.11523.005-.15576.01221-.2207.06348-.41357.15381-.58008.08978-.16602.21338-.29395.37012-.38428.15674-.0898.34082-.13477.55176-.13477.23584 0 .43408.0498.59375.14893.16016.09959.28174.24072.36572.42383s.12598.39746.12598.64258v.0791c0 .03419-.01031.06059-.03027.07961-.02051.0186-.0459.0278-.07721.0278h-1.61133v.04201c.00598.12695.03418.24609.08398.35596.04932.11035.12158.19971.21631.26807.09473.06841.20557.10254.33301.10254.11182 0 .20508-.01711.2793-.0513.07471-.03419.13525-.0723.18164-.11426.04688-.04201.07758-.0752.09332-.1001.02777-.03709.0498-.0596.06543-.0674.01508-.008.03998-.0117.07422-.0117h.22852c.02777 0 .05182.008.07233.02541.02002.01711.02832.0415.02539.0723-.00299.0464-.02777.10352-.07471.16994-.04639.06689-.1123.13281-.19775.19824-.08539.0649-.19092.11865-.31689.16064-.12549.0415-.26758.0625-.42578.0625 0 0-.00006-.00003-.00006-.00004zm-.63818-1.43408h1.27588v-.01421c0-.13965-.02539-.26367-.07672-.37256-.05127-.10838-.125-.19482-.22119-.2583-.09619-.064-.21094-.0957-.34473-.0957-.1333 0-.24756.03169-.34229.0957-.09473.06351-.16699.1499-.21631.2583-.0498.10889-.07471.23291-.07471.37256l.00006.01421z" fill="#884aa8"/><path d="m263.02167 113.13916c-.02484 0-.04657-.00931-.06519-.02794s-.02795-.04036-.02795-.0652c0-.01552.00156-.0326.00467-.05123l1.155-3.01323c.01242-.03105.02951-.05589.05124-.07452s.05432-.02794.09781-.02794h.31668c.04037 0 .07141.00931.09314.02794.02484.01863.04346.04347.05588.07452l1.15033 3.01323c.0062.01863.00931.03571.00931.05123 0 .02484-.00931.04657-.02795.0652-.01862.01863-.04037.02794-.06519.02794h-.23752c-.03726 0-.06519-.00931-.08383-.02794-.01553-.01863-.0264-.03571-.03259-.05123l-.25616-.66133h-1.52756l-.25616.66133c-.00311.01552-.01398.0326-.03259.05123s-.04657.02794-.08383.02794h-.23752zm.74515-1.14102h1.25745l-.62872-1.65332-.62872 1.65332zm3.35409 1.14102c-.17386 0-.31516-.0326-.4238-.0978-.10867-.06831-.18784-.163-.23752-.28409-.04968-.12419-.07452-.27012-.07452-.43778v-1.22951h-.36325c-.03104 0-.05743-.00931-.07916-.02794-.01862-.02173-.02795-.04813-.02795-.07917v-.15835c0-.03105.00931-.05589.02795-.07452.02173-.02173.04813-.0326.07916-.0326h.36325v-.77776c0-.03105.00931-.05589.02795-.07452.02173-.02173.04813-.0326.07916-.0326h.2189c.03104 0 .05588.01087.07452.0326.02173.01863.03259.04347.03259.07452v.77776h.57751c.03104 0 .05588.01087.07452.0326.02173.01863.03259.04347.03259.07452v.15835c0 .03105-.01086.05744-.03259.07917-.01862.01863-.04346.02794-.07452.02794h-.57751v1.19691c0 .14593.02484.2608.07452.34464.04968.08383.13815.12575.26547.12575h.28409c.03104 0 .05588.01087.07452.0326.02173.01863.03259.04347.03259.07452v.16766c0 .03105-.01086.05744-.03259.07917-.01862.01863-.04346.02794-.07452.02794h-.32138zm.98267 0c-.03104 0-.05743-.00931-.07916-.02794-.01862-.02173-.02795-.04812-.02795-.07917v-2.20753c0-.03105.00931-.05589.02795-.07452.02173-.02173.04813-.0326.07916-.0326h.22354c.03104 0 .05588.01087.07452.0326.01862.01863.02795.04347.02795.07452v2.20753c0 .03105-.00931.05744-.02795.07917-.01862.01863-.04346.02794-.07452.02794zm-.03723-2.87351c-.03104 0-.05743-.00931-.07916-.02794-.01862-.02173-.02795-.04813-.02795-.07917v-.25149c0-.03105.00931-.05589.02795-.07452.02173-.02173.04813-.0326.07916-.0326h.2934c.03104 0 .05588.01087.07452.0326.02173.01863.03259.04347.03259.07452v.25149c0 .03105-.01086.05744-.03259.07917-.01862.01863-.04346.02794-.07452.02794zm1.89547 2.92008c-.17386 0-.32291-.02173-.44708-.0652s-.2251-.09625-.30273-.15835c-.07761-.0621-.1366-.12419-.17697-.18629-.03726-.0621-.05743-.11177-.06055-.14903-.00311-.03415.00775-.06054.03259-.07917s.04968-.02794.07452-.02794h.20493c.01862 0 .03259.0031.0419.00931.01242.0031.02795.01552.04657.03726.04037.04347.08539.08693.13507.1304s.11023.07917.18164.10712c.07452.02794.16611.04192.27478.04192.15836 0 .28876-.0295.3912-.08849.10245-.0621.15369-.15214.15369-.27012 0-.07762-.02173-.13972-.06519-.18629-.04037-.04657-.11487-.08849-.22354-.12575-.10556-.03726-.2515-.07607-.43777-.11643-.18628-.04347-.33377-.09625-.44244-.15835-.10867-.0652-.18628-.14127-.23285-.2282-.04657-.09004-.06985-.19095-.06985-.30272 0-.11488.03415-.2251.10245-.33066.0683-.10867.16766-.19716.29807-.26546.13351-.06831.29962-.10246.49832-.10246.16144 0 .29962.02018.41449.06054s.20959.09159.28409.15369c.07452.05899.1304.11798.16766.17697s.05743.10867.06055.14903c.00311.03105-.0062.05744-.02795.07917-.02173.01863-.04657.02794-.07452.02794h-.19559c-.02173 0-.04037-.00466-.05588-.01397-.01242-.00931-.02484-.02018-.03726-.0326-.03104-.04036-.0683-.08073-.11176-.12109-.04037-.04036-.0947-.07296-.16299-.0978-.06519-.02794-.15213-.04191-.2608-.04191-.15524 0-.27167.0326-.3493.0978-.07761.0652-.11642.14748-.11642.24683 0 .05899.01709.11177.05124.15835.03415.04657.09937.08849.19559.12575.09625.03726.23907.07762.42847.12109.20493.04036.36636.0947.48434.163.11798.06831.20181.14748.2515.23752s.07452.19405.07452.31203c0 .1304-.03882.24994-.11642.35861-.07452.10867-.18628.1956-.33533.26081-.14594.0621-.32755.09314-.54489.09314h-.00006z" fill="#25357a"/><path d="m335.20068 125.40656c0 .03105-.00931.05744-.02795.07917-.02173.01863-.04813.02794-.07916.02794h-2.73846v.89419c0 .03105-.00931.05744-.02795.07917-.02173.01863-.04813.02794-.07916.02794h-.19559c-.03415 0-.06055-.00931-.07916-.02794-.02173-.02173-.03259-.04812-.03259-.07917v-2.24478c0-.03415.01086-.06054.03259-.07917.01862-.02173.04501-.0326.07916-.0326h.19559c.03104 0 .05743.01087.07916.0326.01862.01863.02795.04502.02795.07917v.88953h2.73846c.03104 0 .05743.01087.07916.0326.01862.01863.02795.04502.02795.07917v.24219z" fill="#25357a"/><path d="m335.24725 122.85886c0 .3198-.09781.57439-.2934.76379-.1987.18939-.46884.29341-.81036.31203-.04037.00311-.09158.00466-.15369.00466-.06519 0-.11798-.00155-.15836-.00466-.22043-.01242-.41293-.06365-.57751-.15369-.16766-.09004-.29651-.21268-.38654-.36792-.09003-.15835-.13507-.34308-.13507-.55421 0-.23597.04968-.43312.14902-.59147.09937-.16145.24063-.28409.4238-.36792s.39743-.12575.6427-.12575h.07916c.03415 0 .06055.01087.07916.0326.01862.01863.02795.04347.02795.07452v1.6114h.0419c.12729-.00621.24683-.03415.35861-.08383.10867-.04968.19717-.12109.26547-.21423s.10245-.20492.10245-.33532c0-.11177-.01709-.20492-.05124-.27943-.03415-.07452-.07141-.13506-.11176-.18163-.04346-.04657-.07608-.07762-.09781-.09314-.04037-.02794-.06366-.04968-.06985-.0652-.00931-.01552-.01398-.04036-.01398-.07452v-.22355c0-.03105.00931-.05589.02795-.07452.01553-.02173.03882-.03105.06985-.02794.04657.00311.104.02795.17233.07452.06519.04657.1304.11333.19559.20026.06519.08694.11954.1925.16299.31669.04037.12419.06055.26701.06055.42847h.00006zm-1.43441.63338v-1.27608h-.01398c-.13971 0-.26392.02639-.37259.07917-.10867.04968-.19406.12264-.25616.21889-.06519.09625-.09781.21113-.09781.34464s.03259.24839.09781.34464c.0621.09314.14749.16456.25616.21423.10867.04968.23285.07452.37259.07452h.01398v-.00002z" fill="#25357a"/><path d="m335.24725 120.33012c0 .17077-.02951.31824-.0885.44244-.0621.12419-.14438.22665-.24683.30738-.10556.07762-.2251.13661-.35861.17697-.13351.03726-.27478.05899-.4238.0652-.04968.00311-.09625.00466-.13971.00466s-.09003-.00155-.13971-.00466c-.14594-.00621-.28564-.02794-.41916-.0652-.13351-.04036-.25305-.09935-.35861-.17697-.10556-.08073-.18784-.18318-.24683-.30738-.0621-.12419-.09314-.27167-.09314-.44244 0-.18318.03259-.33532.09781-.45641s.14594-.22044.24219-.29806h-1.07117c-.03104 0-.05588-.00931-.07452-.02794-.02173-.02173-.03259-.04812-.03259-.07917v-.22355c0-.03105.01086-.05589.03259-.07452.01862-.02173.04346-.0326.07452-.0326h3.09241c.03104 0 .05743.01087.07916.0326.01862.01863.02795.04347.02795.07452v.20958c0 .03415-.00931.06054-.02795.07917-.02173.01863-.04813.02794-.07916.02794h-.19559c.09937.07762.18317.17853.2515.30272.06519.12419.09781.27943.09781.46572zm-.37722-.0978c0-.15524-.03571-.27943-.10712-.37258-.07141-.09314-.16144-.163-.27011-.20958-.11176-.04657-.2251-.07141-.33997-.07452-.04968-.00311-.10867-.00466-.17697-.00466-.07141 0-.13196.00155-.18164.00466-.10867.00311-.21579.0295-.32135.07917-.10556.04657-.1925.11798-.2608.21423-.0683.09314-.10245.21423-.10245.36326 0 .15835.03571.28409.10712.37724.0683.09314.15991.1599.27478.20026.11176.04036.23285.06365.36325.06986.09003.00311.18008.00311.27011 0 .1304-.00621.25305-.02949.36792-.06986.11176-.04036.20337-.10712.27478-.20026.0683-.09314.10245-.21889.10245-.37724z" fill="#25357a"/><path d="m332.79291 118.56536c0 .02484-.00931.04502-.02795.06054-.01862.01242-.0419.01708-.06985.01397l-.66599-.10712c-.03726-.00621-.0683-.01863-.09314-.03726-.02795-.02173-.0419-.05278-.0419-.09315v-.31203c0-.02173.00931-.03881.02795-.05123.01553-.01552.03259-.02329.05124-.02329.02484 0 .04968.00621.07452.01863l.63803.24218c.03104.01242.05743.0295.07916.05123.01862.01863.02795.04812.02795.08849v.14903h-.00003z" fill="#25357a"/><path d="m335.24725 117.00951c0 .17387-.02173.3229-.06519.44709s-.09625.2251-.15836.30272-.12418.13661-.18628.17697c-.0621.03726-.11176.05744-.14902.06054-.03415.00311-.06055-.00776-.07916-.0326s-.02795-.04968-.02795-.07452v-.20492c0-.01863.00311-.0326.00931-.04191.00311-.01242.01553-.02794.03726-.04657.04346-.04036.08694-.08538.1304-.13506s.07916-.11022.10712-.18163c.02795-.07452.04193-.16611.04193-.27478 0-.15835-.02951-.28875-.0885-.39121-.0621-.10246-.15213-.15369-.27011-.15369-.07761 0-.13971.02173-.18628.0652-.04657.04036-.0885.11488-.12576.22355-.03726.10557-.07608.25149-.11642.43778-.04346.18629-.09625.33377-.15836.44244-.06519.10867-.14127.18629-.22821.23286-.09003.04657-.19095.06986-.30273.06986-.11487 0-.2251-.03415-.33066-.10246-.10867-.06831-.19717-.16766-.26547-.29806-.0683-.13351-.10245-.29961-.10245-.49832 0-.16145.02017-.29961.06055-.41449s.09158-.20957.15369-.28409c.05899-.07452.11798-.1304.17697-.16766s.10867-.05744.14902-.06054c.03104-.00313.05743.00618.07916.02794.01862.02173.02795.04657.02795.07451v.1956c0 .02173-.00467.04036-.01398.05589-.00931.01242-.02017.02484-.03259.03726-.04037.03105-.08072.06831-.12109.11177-.04037.04036-.07297.0947-.09781.163-.02795.0652-.0419.15214-.0419.26081 0 .15524.03259.27167.09781.34929.06519.07762.14749.11643.24683.11643.05899 0 .11176-.01708.15836-.05123.04657-.03415.0885-.09935.12576-.1956s.07761-.23907.12109-.42846c.04037-.20492.0947-.36637.16299-.48435s.14749-.20181.23752-.25149c.09003-.04967.19406-.07451.31204-.07451.1304 0 .24994.03881.35861.11643.10867.07452.19559.18629.2608.33532.0621.14593.09314.32756.09314.5449l-.00003-.00002z" fill="#25357a"/><path d="m339.90448 129.87778c0 .27322-.05124.50609-.15369.69858-.10245.18939-.24683.33533-.43311.43777-.18628.09935-.40518.15524-.65668.16766-.1366.00311-.28098.00465-.43311.00465-.15524 0-.30273-.00156-.44244-.00465-.2515-.01242-.46884-.06831-.65201-.16766-.18317-.10246-.32602-.24994-.42847-.44244s-.15369-.42381-.15369-.69392c0-.22044.03104-.41139.09314-.57285s.14127-.29341.23752-.39586c.09314-.10556.19095-.18318.2934-.23286.10245-.05278.1925-.08073.27011-.08383.02795-.00311.05124.00465.06985.02328.01553.01863.02328.04347.02328.07452v.27478c0 .03105-.0062.05434-.01862.06985-.01242.01242-.03415.02484-.06519.03726-.08072.02794-.15991.07452-.23752.13972-.07761.0621-.14127.14748-.19095.25615-.05276.10556-.07916.24219-.07916.40984 0 .24529.06674.44398.20026.59613.13351.14903.35394.22977.66132.24219.27634.00931.55267.00931.82898 0 .31049-.01242.53403-.0947.67065-.24683.13351-.15215.20026-.35085.20026-.59613 0-.16457-.02951-.31049-.0885-.43777-.0621-.1304-.1568-.23286-.28409-.30737-.12729-.07452-.28876-.11177-.48434-.11177h-.19559v.69858c0 .03105-.00931.05743-.02795.07916-.02173.01863-.04968.02794-.08383.02794h-.14902c-.03415 0-.06055-.00931-.07916-.02794-.02173-.02173-.03259-.04813-.03259-.07916v-1.05254c0-.03415.01086-.06055.03259-.07916.01862-.01863.04501-.02794.07916-.02794h.44708c.25461 0 .47659.05278.66599.15836.18939.10246.33688.25304.44244.45175.10245.19872.15369.43623.15369.71255l-.00003-.00005z" fill="#25357a"/><path d="m339.85791 127.95895c0 .03105-.00931.05744-.02795.07917-.02173.01863-.04813.02794-.07916.02794h-2.20288c-.03104 0-.05743-.00931-.07916-.02794-.02173-.02173-.03259-.04813-.03259-.07917v-.21423c0-.03105.01086-.05744.03259-.07917s.04813-.0326.07916-.0326h.20493c-.10556-.0621-.18475-.14748-.23752-.25615s-.07916-.23907-.07916-.39121v-.18629c0-.03105.01086-.05589.03259-.07452.01862-.01863.04346-.02794.07452-.02794h.19095c.03104 0 .05588.00931.07452.02794.01862.01863.02795.04347.02795.07452v.27943c0 .16766.04968.29962.14902.39586.09625.09625.22821.14437.39587.14437h1.36923c.03104 0 .05743.01087.07916.0326.01862.02173.02795.04813.02795.07917v.2282l-.00003.00002zm.04657-2.60921c0 .23597-.04501.43312-.13507.59147s-.21423.27943-.37259.36326c-.16144.08383-.34464.1304-.54956.13972-.05276.0031-.11954.00466-.20026.00466-.08383 0-.15057-.00155-.20026-.00466-.20801-.00931-.3912-.05589-.54956-.13972-.15836-.08693-.28253-.20958-.37259-.36792s-.13507-.35395-.13507-.58681.04501-.42847.13507-.58681c.09003-.15835.21423-.27943.37259-.36326.15836-.08694.34152-.13506.54956-.14437.04968-.00311.11642-.00466.20026-.00466.08072 0 .14749.00155.20026.00466.20493.00931.38809.05589.54956.13972.15836.08383.28253.20492.37259.36326.09003.15835.13507.3555.13507.59146zm-.35861 0c0-.1925-.06055-.34619-.18164-.46107-.12418-.11488-.30426-.17697-.54025-.18629-.04657-.00311-.10556-.00466-.17697-.00466s-.1304.00155-.17697.00466c-.23596.00931-.41449.07141-.53558.18629-.12418.11488-.18628.26857-.18628.46107s.0621.34774.18628.46572c.12109.11488.29962.17542.53558.18163.04657.0031.10556.00466.17697.00466s.1304-.00155.17697-.00466c.23596-.00621.41605-.06675.54025-.18163.12109-.11798.18164-.27322.18164-.46572z" fill="#25357a"/><path d="m339.90448 122.63121c0 .23597-.04501.43312-.13507.59147s-.21423.27943-.37259.36326c-.16144.08383-.34464.1304-.54956.13972-.05276.00311-.11954.00466-.20026.00466-.08383 0-.15057-.00155-.20026-.00466-.20801-.00931-.3912-.05589-.54956-.13972-.15836-.08694-.28253-.20958-.37259-.36792-.09003-.15835-.13507-.35395-.13507-.58681s.04501-.42847.13507-.58681.21423-.27943.37259-.36326c.15836-.08694.34152-.13506.54956-.14437.04968-.00311.11642-.00466.20026-.00466.08072 0 .14749.00155.20026.00466.20493.00931.38809.05589.54956.13972.15836.08383.28253.20492.37259.36326s.13507.3555.13507.59146zm-.35861 0c0-.1925-.06055-.34619-.18164-.46107-.12418-.11488-.30426-.17697-.54025-.18629-.04657-.00311-.10556-.00466-.17697-.00466s-.1304.00155-.17697.00466c-.23596.00931-.41449.07141-.53558.18629-.12418.11488-.18628.26857-.18628.46107s.0621.34774.18628.46572c.12109.11488.29962.17542.53558.18163.04657.00311.10556.00466.17697.00466s.1304-.00155.17697-.00466c.23596-.00621.41605-.06675.54025-.18163.12109-.11798.18164-.27322.18164-.46572zm.31204-1.67167c0 .03105-.00931.05744-.02795.07917-.02173.01863-.04813.02794-.07916.02794h-2.20752c-.03104 0-.05588-.00931-.07452-.02794-.02173-.02173-.03259-.04813-.03259-.07917v-.20958c0-.03105.01086-.05589.03259-.07452.01862-.02173.04346-.0326.07452-.0326h.16299c-.09625-.07141-.17233-.16145-.22821-.27012-.05899-.10867-.0885-.23907-.0885-.39121-.00311-.35084.13971-.59923.42847-.74516-.1304-.07141-.23441-.17542-.31204-.31203s-.11642-.29185-.11642-.46572c0-.16145.03726-.30738.11176-.43778.07452-.13351.18784-.23752.33997-.31203.14902-.07762.33688-.11643.56351-.11643h1.34595c.03104 0 .05743.01087.07916.0326.01862.01863.02795.04347.02795.07452v.21889c0 .03105-.00931.05744-.02795.07917-.02173.01863-.04813.02794-.07916.02794h-1.30402c-.17386 0-.31049.02484-.40985.07452-.09937.04968-.16922.11643-.20959.20026s-.06055.17542-.06055.27478c0 .08073.02017.163.06055.24683s.11023.15369.20959.20958c.09937.05278.23596.07917.40985.07917h1.30402c.03104 0 .05743.01087.07916.0326.01862.01863.02795.04347.02795.07452v.21889c0 .03105-.00931.05744-.02795.07917-.02173.01863-.04813.02794-.07916.02794h-1.30402c-.17386 0-.31049.02639-.40985.07917s-.16922.12109-.20959.20492-.06055.17232-.06055.26546c0 .08073.02017.163.06055.24683s.11023.15369.20959.20958c.09937.05278.23441.07917.40518.07917h1.30869c.03104 0 .05743.01087.07916.0326.01862.01863.02795.04347.02795.07452v.22354l.00006.00003z" fill="#25357a"/><path d="m339.85791 116.93552c0 .03105-.00931.05744-.02795.07917-.02173.01863-.04813.02794-.07916.02794h-2.20752c-.03104 0-.05588-.00931-.07452-.02794-.02173-.02173-.03259-.04813-.03259-.07917v-.22355c0-.03105.01086-.05589.03259-.07452.01862-.01863.04346-.02794.07452-.02794h2.20752c.03104 0 .05743.00931.07916.02794.01862.01863.02795.04347.02795.07452zm-2.8735.03725c0 .03105-.00931.05744-.02795.07917-.02173.01863-.04813.02794-.07916.02794h-.2515c-.03104 0-.05588-.00931-.07452-.02794-.02173-.02173-.03259-.04813-.03259-.07917v-.29341c0-.03105.01086-.05589.03259-.07452.01862-.02173.04346-.0326.07452-.0326h.2515c.03104 0 .05743.01087.07916.0326.01862.01863.02795.04347.02795.07452z" fill="#25357a"/><path d="m339.85791 116.01804c0 .03105-.00931.05744-.02795.07917-.02173.01863-.04813.02794-.07916.02794h-2.20752c-.03104 0-.05588-.00931-.07452-.02794-.02173-.02173-.03259-.04812-.03259-.07917v-.21889c0-.03105.01086-.05589.03259-.07452.01862-.02173.04346-.0326.07452-.0326h.20493c-.10556-.08073-.19095-.18163-.25616-.30272-.0683-.12419-.10245-.28254-.10245-.47504 0-.20181.04501-.37258.13507-.51229.08694-.14282.20959-.24994.36792-.32135.15524-.07141.33688-.10712.54489-.10712h1.31335c.03104 0 .05743.00931.07916.02794.01862.01863.02795.04347.02795.07452v.23286c0 .03105-.00931.05744-.02795.07917-.02173.01863-.04813.02794-.07916.02794h-1.29004c-.21735 0-.38654.05278-.50763.15835-.12418.10556-.18628.26081-.18628.46572 0 .1925.0621.34774.18628.46572.12109.11488.29031.17232.50763.17232h1.29004c.03104 0 .05743.01087.07916.0326.01862.01863.02795.04347.02795.07452v.23287z" fill="#25357a"/><path d="m340.88251 112.4276c0 .21113-.02795.385-.08383.52161-.05588.13351-.12418.23907-.20493.31669-.07761.07452-.1568.12885-.23752.163-.07761.03105-.13971.04812-.18628.05123-.03104.00313-.05743-.00618-.07916-.02794-.02173-.02484-.03259-.05123-.03259-.07917v-.22355c0-.02795.0062-.05123.01862-.06986s.03882-.03415.07916-.04657c.04657-.01863.09781-.04657.15369-.08383.05899-.03726.10867-.0947.14902-.17232.04346-.07762.06519-.18629.06519-.32601 0-.14593-.02017-.26857-.06055-.36792-.03726-.09935-.10556-.17387-.20493-.22355-.09625-.05278-.22977-.07917-.40051-.07917h-.31668c.09625.07451.17697.17232.24219.2934.0621.12109.09314.27322.09314.45641 0 .17387-.02951.3229-.0885.44709-.0621.12419-.14438.22665-.24683.30738-.10556.07762-.2251.13661-.35861.17698-.13351.03726-.27322.05899-.41916.0652-.08694.00313-.17233.00313-.25616 0-.14594-.0062-.28564-.02793-.41916-.0652-.13351-.04036-.25305-.09935-.35861-.17698-.10556-.08073-.18784-.18318-.24683-.30738-.0621-.12419-.09314-.27322-.09314-.44709 0-.18629.03571-.33998.10712-.46107.0683-.12419.15213-.2251.2515-.30272h-.20026c-.03104 0-.05743-.00931-.07916-.02794-.02173-.02173-.03259-.04812-.03259-.07917v-.21423c0-.03105.01086-.05744.03259-.07917s.04813-.0326.07916-.0326h2.25876c.20801 0 .39276.03571.5542.10712.16144.06831.28876.18318.3819.34464.09314.15835.13971.37258.13971.6427v-.00002h.00006zm-1.37854.0093c0-.15524-.03571-.27943-.10712-.37258-.07141-.09625-.16144-.16611-.27011-.20958-.10867-.04657-.2189-.07141-.33066-.07451-.04346-.00313-.09625-.0047-.15836-.0047-.06519 0-.11954.00157-.16299.0047-.11176.00313-.22198.02797-.33066.07451-.10867.04347-.1987.11333-.27011.20958-.07141.09314-.10712.21734-.10712.37258s.03571.27943.10712.37258c.0683.09314.15991.1599.27478.20026.11176.04036.23285.06365.36325.06986.08072.00313.16299.00313.24683 0 .1304-.0062.25305-.02949.36792-.06986.11176-.04036.20337-.10711.27478-.20026.0683-.09314.10245-.21734.10245-.37258z" fill="#25357a"/><path d="m360.85602 115.12161c-.26953 0-.49707-.0415-.67969-.12549-.18359-.084-.32422-.19189-.42188-.32373-.09772-.13184-.1499-.271-.15576-.41699 0-.0249.01001-.04739.03027-.0674.02002-.02.04388-.0303.07178-.0303h.23828c.03711 0 .06451.009.08398.0278.01862.0186.03027.0405.03711.0654.01862.0742.05658.14795.11621.22119.05859.0728.14355.1333.25391.18164.11035.04781.25195.0723.42578.0723.26758 0 .46387-.04739.58887-.14209.12598-.0947.18945-.22119.18945-.37988 0-.10838-.03418-.19629-.10059-.26318-.06641-.06641-.16797-.12646-.30469-.1792-.13672-.0527-.31348-.10986-.53125-.17236-.22656-.0649-.41406-.13623-.56348-.21387-.14941-.07761-.25977-.17383-.3335-.28906-.07281-.11475-.10938-.26074-.10938-.4375 0-.16797.04492-.31738.13525-.44971.08978-.13184.2207-.23682.3916-.31445.1709-.0771.375-.11621.61426-.11621.19238 0 .36133.02541.50586.07671s.26465.11963.36035.20508c.09668.0854.16992.17725.21973.2749.04883.0976.0752.19336.0791.28613 0 .022-.008.043-.02338.063-.01562.02049-.04102.0303-.0752.0303h-.24609c-.02252 0-.04492-.006-.06738-.0186-.02338-.01221-.04199-.03571-.05371-.06979-.01862-.12744-.09082-.23438-.21484-.32129-.12402-.0869-.28516-.13037-.48438-.13037-.20117 0-.36523.0386-.49121.11621s-.18848.19873-.18848.36328c0 .10547.0293.19336.08893.26318.05859.06979.15137.13135.2793.18408.12695.0527.29297.1084.49805.16748.24805.06841.45215.14062.61035.2168.1582.0762.27539.17041.35156.28418.07617.11328.11426.2583.11426.43506 0 .1958-.05182.36279-.1543.50098-.10254.13818-.24609.24367-.43066.31641-.18457.0732-.40234.10938-.6543.10938h-.00012v-.00002z" fill="#25357a"/><path d="m363.31989 115.12161c-.15527 0-.2959-.03081-.42383-.0928-.12695-.0625-.22949-.146-.30762-.25146-.07709-.10596-.11621-.22508-.11621-.35889 0-.21436.08691-.38477.26074-.51221s.40039-.21094.68066-.25146l.69336-.0977v-.13525c0-.14893-.04303-.26562-.12793-.34912-.08588-.084-.22461-.12598-.41699-.12598-.13672 0-.24805.0278-.33496.084-.08691.05569-.14746.12744-.18164.21436-.01862.0464-.0517.06979-.0976.06979h-.20996c-.03418 0-.05957-.01019-.07721-.0303-.0166-.02049-.02539-.0444-.02539-.0723 0-.04691.01758-.104.05371-.17236.03522-.06841.09082-.13525.16504-.2002.0752-.0654.16992-.12061.28711-.16553.11621-.04491.25781-.0674.42578-.0674.18652 0 .34277.0239.4707.0723.12695.0479.22656.1123.2998.19336.07318.0806.12598.17188.1582.27441.0332.10254.04883.20654.04883.31201v1.50928c0 .03081-.01001.05659-.03027.07671-.01947.02-.0459.0303-.07617.0303h-.21484c-.03418 0-.06049-.0103-.0791-.0303s-.0274-.0459-.0274-.07671v-.20068c-.04102.0562-.09473.11133-.16309.16553-.06842.0542-.1543.09959-.25684.13525-.10156.0356-.22754.05321-.37695.05321l.00006.00015v-.00002zm.09759-.34912c.12793 0 .24414-.0273.34961-.0815s.18848-.13867.24902-.25391c.06049-.11475.09082-.25928.09082-.43311v-.13037l-.54004.0791c-.2207.0312-.38672.0835-.49805.15625-.1123.07269-.16797.16504-.16797.27686 0 .0869.02539.15918.07709.2168.05078.0576.11621.1001.19531.12793.0791.0278.16016.04201.24414.04201l.00006-.00006z" fill="#25357a"/><path d="m365.32184 115.07524c-.03027 0-.05658-.0103-.07617-.0303-.02051-.02-.03027-.0459-.03027-.07671v-2.20752c0-.0312.01001-.05659.03027-.07719.01947-.02.0459-.0303.07617-.0303h.21875c.03119 0 .05658.0103.07709.0303.02051.02049.03027.0459.03027.07719v.20459c.08112-.10547.18262-.19141.30566-.2583.12207-.06689.2793-.1001.47266-.1001.20117 0 .37305.04401.51465.13281.14062.08839.24805.21094.32129.36768.07233.15674.10938.33936.10938.54736v1.31348c0 .03081-.01068.05659-.03027.07671-.02051.02-.0459.0303-.07721.0303h-.23242c-.03119 0-.05658-.0103-.07721-.0303-.02051-.02-.03027-.0459-.03027-.07671v-1.28998c0-.21729-.05267-.3877-.1582-.51025-.10547-.12256-.26074-.18408-.46582-.18408-.19238 0-.34668.06149-.46387.18408-.11621.12256-.1748.29297-.1748.51025v1.29004c0 .03081-.01001.05659-.03027.07671-.01947.02-.04492.0303-.07617.0303h-.2334s.00018-.00006.00018-.00007z" fill="#25357a"/><path d="m368.98297 115.07524c-.17383 0-.31543-.0332-.42383-.1001-.10938-.06689-.18848-.16162-.2373-.28418-.0498-.12256-.0752-.26758-.0752-.43555v-1.22949h-.36328c-.03119 0-.05658-.00999-.07617-.0303-.02051-.02-.03027-.04539-.03027-.07671v-.1582c0-.0312.01001-.05659.03027-.07719.01947-.02.04492-.0303.07617-.0303h.36328v-.77783c0-.03081.01068-.05659.03027-.07671.02051-.02.0459-.0303.07721-.0303h.21875c.03119 0 .05658.0103.07709.0303.01947.02.03027.0459.03027.07671v.77783h.57715c.03418 0 .06049.0103.0791.0303.01862.02049.02832.0459.02832.07719v.1582c0 .0312-.01001.05659-.02832.07671-.01862.02049-.04492.0303-.0791.0303h-.57715v1.19727c0 .146.02441.26076.07422.34424.0498.084.13867.12598.26562.12598h.28418c.03119 0 .05658.0103.07721.0303.01947.02.03027.0459.03027.07671v.16797c0 .03081-.01068.05659-.03027.07671-.02051.02-.0459.0303-.07721.0303h-.32129v-.00016z" fill="#25357a"/><path d="m370.53375 115.12161c-.15527 0-.2959-.03081-.42383-.0928-.12695-.0625-.22949-.146-.30762-.25146-.07709-.10596-.11621-.22508-.11621-.35889 0-.21436.08691-.38477.26074-.51221s.40039-.21094.68066-.25146l.69336-.0977v-.13525c0-.14893-.04303-.26562-.12793-.34912-.08588-.084-.22461-.12598-.41699-.12598-.13672 0-.24805.0278-.33496.084-.08691.05569-.14746.12744-.18164.21436-.01862.0464-.05182.06979-.09772.06979h-.20996c-.03418 0-.05957-.01019-.07709-.0303-.0166-.02049-.02539-.0444-.02539-.0723 0-.04691.01758-.104.05371-.17236.03522-.06841.09082-.13525.16504-.2002.0752-.0654.16992-.12061.28711-.16553.11621-.04491.25781-.0674.42578-.0674.18652 0 .34277.0239.4707.0723.12695.0479.22656.1123.2998.19336.07318.0806.12598.17188.1582.27441.0332.10254.04883.20654.04883.31201v1.50928c0 .03081-.01001.05659-.03027.07671-.01947.02-.0459.0303-.07617.0303h-.21484c-.03418 0-.06049-.0103-.0791-.0303s-.02728-.0459-.02728-.07671v-.20068c-.04102.0562-.09473.11133-.16309.16553-.06842.0542-.1543.09959-.25684.13525-.10156.0356-.22754.05321-.37695.05321l-.00006.00015v-.00002zm.09772-.34912c.12793 0 .24414-.0273.34961-.0815s.18848-.13867.24902-.25391c.06061-.11475.09082-.25928.09082-.43311v-.13037l-.54004.0791c-.2207.0312-.38672.0835-.49805.15625-.1123.07269-.16797.16504-.16797.27686 0 .0869.02539.15918.07709.2168.05078.0576.11621.1001.19531.12793.0791.0278.16016.04201.24414.04201l.00006-.00006z" fill="#25357a"/><path d="m361.1568 119.73245c-.03418 0-.06049-.0103-.0791-.0303s-.02832-.0459-.02832-.07671v-3.0415c0-.03419.01001-.061.02832-.0815.01862-.02.04492-.0303.0791-.0303h.21387c.03711 0 .06543.009.08398.02589.01862.01711.0293.0303.03223.0396l1.54688 2.375v-2.32861c0-.03419.00897-.061.02728-.0816.01862-.02.04492-.0303.0791-.0303h.22363c.03418 0 .06152.0103.08197.0303.01947.02049.03027.04739.03027.0816v3.03662c0 .0312-.01068.0576-.03027.0791-.02051.022-.0459.0327-.07709.0327h-.22363c-.03418 0-.05957-.009-.07617-.0278-.01758-.0186-.0293-.0312-.03522-.0376l-1.54199-2.35156v2.31006c0 .03081-.01001.05659-.03027.07671-.02051.02-.04688.0303-.08112.0303h-.22363l.00018-.00009z" fill="#25357a"/><path d="m364.90094 119.77885c-.15527 0-.2959-.03081-.42383-.0928-.12695-.0625-.22949-.146-.30762-.25146-.07721-.10596-.11621-.2251-.11621-.35889 0-.21436.08691-.38477.26074-.51221s.40039-.21094.68066-.25146l.69336-.0976v-.13525c0-.14893-.04303-.26562-.12793-.34912-.08588-.084-.22461-.12598-.41699-.12598-.13672 0-.24805.0278-.33496.084-.08691.05569-.14746.12744-.18164.21436-.01862.0464-.05182.06979-.09772.06979h-.20996c-.03418 0-.05957-.0103-.07721-.0303-.0166-.02049-.02539-.0444-.02539-.0723 0-.04691.01758-.104.05371-.17236.03522-.06841.09082-.13525.16504-.2002.0752-.0654.16992-.12061.28711-.16553.11621-.04491.25781-.0674.42578-.0674.18652 0 .34277.0239.4707.0723.12695.0479.22656.1123.2998.19336.07318.0806.12598.17188.1582.27441.0332.10254.04883.20654.04883.31201v1.50928c0 .03081-.01001.05659-.03027.07671-.01947.02-.0459.0303-.07617.0303h-.21484c-.03418 0-.06049-.0103-.0791-.0303s-.02728-.0459-.02728-.07671v-.20068c-.04102.0562-.09473.11133-.16309.16553-.06842.0542-.1543.09959-.25684.13525-.10156.0356-.22754.05321-.37695.05321l.00006.00005v-.00002zm.09772-.34912c.12793 0 .24414-.0274.34961-.0815.10547-.0542.18848-.13867.24902-.25391.06049-.11475.09082-.25928.09082-.43311v-.13037l-.54004.0791c-.2207.0312-.38672.0835-.49805.15625-.1123.0728-.16797.16504-.16797.27686 0 .0869.02539.15918.07709.2168.05078.0576.11621.1001.19531.12793.0791.0278.16016.04201.24414.04201l.00006-.00006z" fill="#25357a"/><path d="m367.74176 119.73245c-.17383 0-.31445-.0332-.42383-.1001-.1084-.06689-.1875-.16162-.2373-.28418s-.07422-.26756-.07422-.43555v-1.22951h-.36328c-.03119 0-.05658-.00999-.07709-.0303-.02051-.02-.03027-.04539-.03027-.07671v-.1582c0-.0312.01001-.05659.03027-.07719.02051-.02.0459-.0303.07709-.0303h.36328v-.77783c0-.03081.01001-.05659.03027-.07671.01947-.02.0459-.0303.07617-.0303h.21973c.03027 0 .05658.0103.07617.0303.02051.02.03027.0459.03027.07671v.77783h.57812c.03418 0 .06061.0103.0791.0303.01862.02049.02728.0459.02728.07719v.1582c0 .0312-.00897.05659-.02728.07671-.01862.02049-.04492.0303-.0791.0303h-.57812v1.19727c0 .146.02539.26074.0752.34424.04883.084.1377.12598.26465.12598h.28418c.03119 0 .05658.0103.07709.0303s.03027.0459.03027.07671v.16797c0 .03081-.01001.05659-.03027.07671-.02051.02-.0459.0303-.07709.0303h-.32129z" fill="#25357a"/><path d="m369.29254 119.77885c-.15527 0-.2959-.03081-.42383-.0928-.12695-.0625-.22949-.146-.30762-.25146-.07709-.10596-.11621-.2251-.11621-.35889 0-.21436.08691-.38477.26074-.51221s.40039-.21094.68066-.25146l.69336-.0976v-.13525c0-.14893-.04303-.26562-.12793-.34912-.08588-.084-.22461-.12598-.41699-.12598-.13672 0-.24805.0278-.33496.084-.08691.05569-.14746.12744-.18164.21436-.01862.0464-.05182.06979-.09772.06979h-.20996c-.03418 0-.05957-.0103-.07709-.0303-.0166-.02049-.02539-.0444-.02539-.0723 0-.04691.01758-.104.05371-.17236.03522-.06841.09082-.13525.16504-.2002.0752-.0654.16992-.12061.28711-.16553.11621-.04491.25781-.0674.42578-.0674.18652 0 .34277.0239.4707.0723.12695.0479.22656.1123.2998.19336.07318.0806.12598.17188.1582.27441.0332.10254.04883.20654.04883.31201v1.50928c0 .03081-.01001.05659-.03027.07671-.01947.02-.0459.0303-.07617.0303h-.21484c-.03418 0-.06049-.0103-.0791-.0303s-.02728-.0459-.02728-.07671v-.20068c-.04102.0562-.09473.11133-.16309.16553-.06842.0542-.1543.09959-.25684.13525-.10156.0356-.22754.05321-.37695.05321l-.00006.00005v-.00002zm.09772-.34912c.12793 0 .24414-.0274.34961-.0815.10547-.0542.18848-.13867.24902-.25391.06061-.11475.09082-.25928.09082-.43311v-.13037l-.54004.0791c-.2207.0312-.38672.0835-.49805.15625-.1123.0728-.16797.16504-.16797.27686 0 .0869.02539.15918.07721.2168.05078.0576.11621.1001.19531.12793.0791.0278.16016.04201.24414.04201l-.00006-.00006z" fill="#25357a"/><path d="m379.86664 102.9458c-.02484 0-.04657-.00931-.06519-.02794s-.02795-.04036-.02795-.0652c0-.01552.00156-.0326.00467-.05123l1.155-3.01323c.01242-.03105.02951-.05589.05124-.07452s.05432-.02794.09781-.02794h.31668c.04037 0 .07141.00931.09314.02794.02484.01863.04346.04347.05588.07452l1.15033 3.01323c.0062.01863.00931.03571.00931.05123 0 .02484-.00931.04657-.02795.0652-.01862.01863-.04037.02794-.06519.02794h-.23752c-.03726 0-.06519-.00931-.08383-.02794-.01553-.01863-.0264-.03571-.03259-.05123l-.25616-.66133h-1.52756l-.25616.66133c-.00311.01552-.01398.0326-.03259.05123s-.04657.02794-.08383.02794h-.23752zm.74515-1.14102h1.25745l-.62872-1.65332-.62872 1.65332zm2.64065 1.14102c-.03104 0-.05743-.00931-.07916-.02794-.01862-.02173-.02795-.04812-.02795-.07917v-2.20753c0-.03105.00931-.05589.02795-.07452.02173-.02173.04813-.0326.07916-.0326h.20959c.03104 0 .05588.01087.07452.0326.02173.01863.03259.04347.03259.07452v.163c.07141-.09625.16144-.17232.27011-.2282.10867-.05899.23907-.08849.3912-.08849.35083-.00311.59924.13972.74515.42847.07141-.1304.17542-.23441.31204-.31203.1366-.07762.29184-.11643.46573-.11643.16144 0 .30737.03726.43777.11177.13351.07452.23752.18784.31204.33998.07761.14903.11642.33687.11642.56352v1.34594c0 .03105-.01086.05744-.03259.07917-.01862.01863-.04346.02794-.07452.02794h-.2189c-.03104 0-.05743-.00931-.07916-.02794-.01862-.02173-.02795-.04812-.02795-.07917v-1.30402c0-.17387-.02484-.31048-.07452-.40984s-.11642-.16921-.20026-.20958c-.08383-.04036-.17542-.06054-.27478-.06054-.08072 0-.16299.02018-.24683.06054s-.15369.11022-.20959.20958c-.05276.09935-.07916.23597-.07916.40984v1.30402c0 .03105-.01086.05744-.03259.07917-.01862.01863-.04346.02794-.07452.02794h-.2189c-.03104 0-.05743-.00931-.07916-.02794-.01862-.02173-.02795-.04812-.02795-.07917v-1.30402c0-.17387-.0264-.31048-.07916-.40984s-.12109-.16921-.20493-.20958c-.08383-.04036-.17233-.06054-.26547-.06054-.08072 0-.16299.02018-.24683.06054s-.15369.11022-.20959.20958c-.05276.09935-.07916.23441-.07916.40518v1.30868c0 .03105-.01086.05744-.03259.07917-.01862.01863-.04346.02794-.07452.02794h-.22354.00003zm5.02518.04657c-.23596 0-.43311-.04502-.59146-.13506s-.27942-.21423-.36325-.37258c-.08383-.16145-.1304-.34464-.13971-.54955-.00311-.05278-.00467-.11954-.00467-.20026 0-.08383.00156-.15058.00467-.20026.00931-.20802.05588-.39121.13971-.54955.08694-.15835.20959-.28254.36792-.37258.15836-.09004.35394-.13506.58682-.13506s.42847.04502.58682.13506.27942.21423.36325.37258c.08694.15835.13507.34153.14438.54955.00311.04968.00467.11643.00467.20026 0 .08073-.00156.14748-.00467.20026-.00931.20492-.05588.3881-.13971.54955-.08383.15835-.20493.28254-.36325.37258-.15836.09004-.3555.13506-.59146.13506zm0-.3586c.1925 0 .34619-.06054.46106-.18163.11487-.12419.17697-.30427.18628-.54024.00311-.04657.00467-.10556.00467-.17697s-.00156-.1304-.00467-.17697c-.00931-.23597-.07141-.41449-.18628-.53558-.11487-.12419-.26859-.18629-.46106-.18629s-.34775.0621-.46573.18629c-.11487.12109-.17542.29962-.18164.53558-.00311.04657-.00467.10556-.00467.17697s.00156.1304.00467.17697c.0062.23597.06674.41605.18164.54024.11798.12109.27322.18163.46573.18163zm1.78836.31203c-.03104 0-.05743-.00931-.07916-.02794-.01862-.02173-.02795-.04812-.02795-.07917v-2.20287c0-.03105.00931-.05744.02795-.07917.02173-.02173.04813-.0326.07916-.0326h.21423c.03104 0 .05743.01087.07916.0326s.03259.04813.03259.07917v.20492c.0621-.10556.14749-.18474.25616-.23752s.23907-.07917.3912-.07917h.18628c.03104 0 .05588.01087.07452.0326.01862.01863.02795.04347.02795.07452v.19095c0 .03105-.00931.05589-.02795.07452-.01862.01863-.04346.02794-.07452.02794h-.27942c-.16766 0-.29962.04968-.39587.14903-.09625.09625-.14438.2282-.14438.39586v1.36923c0 .03105-.01086.05744-.03259.07917-.02173.01863-.04813.02794-.07916.02794h-.22821zm1.76974 0c-.03104 0-.05743-.00931-.07916-.02794-.01862-.02173-.02795-.04812-.02795-.07917v-2.20753c0-.03105.00931-.05589.02795-.07452.02173-.02173.04813-.0326.07916-.0326h.22354c.03104 0 .05588.01087.07452.0326.01862.01863.02795.04347.02795.07452v2.20753c0 .03105-.00931.05744-.02795.07917-.01862.01863-.04346.02794-.07452.02794zm-.03726-2.87351c-.03104 0-.05743-.00931-.07916-.02794-.01862-.02173-.02795-.04813-.02795-.07917v-.25149c0-.03105.00931-.05589.02795-.07452.02173-.02173.04813-.0326.07916-.0326h.2934c.03104 0 .05588.01087.07452.0326.02173.01863.03259.04347.03259.07452v.25149c0 .03105-.01086.05744-.03259.07917-.01862.01863-.04346.02794-.07452.02794zm1.16431 2.87351c-.03104 0-.05743-.00931-.07916-.02794-.01862-.02173-.02795-.04812-.02795-.07917v-2.20753c0-.03105.00931-.05589.02795-.07452.02173-.02173.04813-.0326.07916-.0326h.2189c.03104 0 .05588.01087.07452.0326.02173.01863.03259.04347.03259.07452v.20492c.08072-.10556.18164-.19095.30273-.25615.12418-.06831.28253-.10246.47504-.10246.20181 0 .37259.04502.5123.13506.14282.08694.24994.20958.32135.36792.07141.15524.10712.33687.10712.5449v1.31334c0 .03105-.00931.05744-.02795.07917-.01862.01863-.04346.02794-.07452.02794h-.23285c-.03104 0-.05743-.00931-.07916-.02794-.01862-.02173-.02795-.04812-.02795-.07917v-1.29005c0-.21734-.05276-.38655-.15836-.50764-.10556-.12419-.2608-.18629-.46573-.18629-.1925 0-.34775.0621-.46573.18629-.11487.12109-.17233.2903-.17233.50764v1.29005c0 .03105-.01086.05744-.03259.07917-.01862.01863-.04349.02794-.07452.02794h-.23285zm3.70715.04657c-.23596 0-.43311-.04502-.59146-.13506s-.27942-.21423-.36325-.37258c-.08383-.16145-.1304-.34464-.13971-.54955-.00314-.05278-.0047-.11954-.0047-.20026 0-.08383.00156-.15058.0047-.20026.00931-.20802.05588-.39121.13971-.54955.08694-.15835.20959-.28254.36792-.37258s.35394-.13506.58682-.13506.42847.04502.58682.13506.27942.21423.36325.37258c.08694.15835.13507.34153.14438.54955.00314.04968.0047.11643.0047.20026 0 .08073-.00156.14748-.0047.20026-.00931.20492-.05588.3881-.13971.54955-.08383.15835-.20493.28254-.36325.37258-.15836.09004-.3555.13506-.59146.13506zm0-.3586c.1925 0 .34619-.06054.46106-.18163.11487-.12419.17697-.30427.18628-.54024.00314-.04657.0047-.10556.0047-.17697s-.00156-.1304-.0047-.17697c-.00931-.23597-.07141-.41449-.18628-.53558-.11487-.12419-.26859-.18629-.46106-.18629s-.34775.0621-.46573.18629c-.11487.12109-.17542.29962-.18164.53558-.00314.04657-.0047.10556-.0047.17697s.00156.1304.0047.17697c.0062.23597.06674.41605.18164.54024.11798.12109.27322.18163.46573.18163z" fill="#25357a"/><path d="m445.74722 103.05511c-.03104 0-.05743-.00931-.07916-.02794-.01862-.02173-.02795-.04812-.02795-.07917v-2.20287c0-.03105.00931-.05744.02795-.07917.02173-.02173.04813-.0326.07916-.0326h.21423c.03104 0 .05743.01087.07916.0326s.03259.04813.03259.07917v.20492c.0621-.10556.14749-.18474.25616-.23752s.23907-.07917.3912-.07917h.18628c.03104 0 .05588.01087.07452.0326.01862.01863.02795.04347.02795.07452v.19095c0 .03105-.00931.05589-.02795.07452-.01862.01863-.04346.02794-.07452.02794h-.27942c-.16766 0-.29962.04968-.39587.14903-.09625.09625-.14438.2282-.14438.39586v1.36923c0 .03105-.01086.05744-.03259.07917-.02173.01863-.04813.02794-.07916.02794h-.22821zm2.58127.04658c-.31979 0-.5744-.0978-.76379-.29341-.18939-.19871-.2934-.46883-.31204-.81036-.00311-.04036-.00467-.09159-.00467-.15369 0-.0652.00156-.11798.00467-.15835.01242-.22044.06366-.41294.15369-.5775.09003-.16766.21268-.29651.36792-.38655.15836-.09004.34308-.13506.5542-.13506.23596 0 .43311.04968.59146.14903.16144.09935.28409.24062.36792.42381.08383.18318.12576.39742.12576.6427v.07917c0 .03415-.01086.06054-.03259.07917-.01862.01863-.04346.02794-.07452.02794h-1.61139v.04191c.0062.1273.03415.24683.08383.35861.04968.10867.12109.19716.21423.26546.09314.06831.20493.10246.33533.10246.11176 0 .20493-.01708.27942-.05123.07452-.03415.13507-.07141.18164-.11177.04657-.04347.07761-.07607.09314-.0978.02795-.04036.04968-.06365.06519-.06986.01553-.00931.04037-.01397.07452-.01397h.22354c.03104 0 .05588.00931.07452.02794.02173.01552.03104.03881.02795.06986-.00311.04657-.02795.10401-.07452.17232-.04657.0652-.11334.1304-.20026.1956-.08694.0652-.1925.11954-.31668.163-.12418.04036-.267.06054-.42847.06054zm-.63339-1.43443h1.27609v-.01397c0-.13972-.0264-.26391-.07916-.37258-.04968-.10867-.12265-.19405-.2189-.25615-.09625-.0652-.21112-.0978-.34464-.0978s-.24838.0326-.34464.0978c-.09314.0621-.16455.14748-.21423.25615s-.07452.23286-.07452.37258zm2.3612-.24218c-.03104 0-.05743-.00931-.07916-.02794-.01862-.02173-.02795-.04813-.02795-.07917v-.32601c0-.03105.00931-.05589.02795-.07452.02173-.02173.04813-.0326.07916-.0326h.33066c.03415 0 .06055.01087.07916.0326.02173.01863.03259.04347.03259.07452v.32601c0 .03105-.01086.05744-.03259.07917-.01862.01863-.04501.02794-.07916.02794zm0 1.63003c-.03104 0-.05743-.00931-.07916-.02794-.01862-.02173-.02795-.04812-.02795-.07917v-.32601c0-.03105.00931-.05589.02795-.07452.02173-.02173.04813-.0326.07916-.0326h.33066c.03415 0 .06055.01087.07916.0326.02173.01863.03259.04347.03259.07452v.32601c0 .03105-.01086.05744-.03259.07917-.01862.01863-.04501.02794-.07916.02794zm1.22019 0c-.03104 0-.05743-.00931-.07916-.02794-.01862-.02173-.02795-.04812-.02795-.07917v-3.0924c0-.03105.00931-.05589.02795-.07452.02173-.02173.04813-.0326.07916-.0326h.2189c.03415 0 .06055.01087.07916.0326.01862.01863.02795.04347.02795.07452v3.0924c0 .03105-.00931.05744-.02795.07917-.01862.01863-.04501.02794-.07916.02794zm1.69525.04658c-.15524 0-.29651-.03105-.4238-.09314-.12729-.0621-.22977-.14593-.30737-.25149s-.11642-.2251-.11642-.35861c0-.21423.08694-.385.2608-.5123s.40051-.21113.67996-.25149l.69394-.0978v-.13506c0-.14903-.04346-.26546-.1304-.34929-.08383-.08383-.22198-.12575-.41449-.12575-.13971 0-.25305.02794-.33997.08383-.08383.05589-.14282.1273-.17697.21423-.01862.04657-.05124.06986-.09781.06986h-.20959c-.03415 0-.06055-.00931-.07916-.02794-.01553-.02173-.02328-.04657-.02328-.07452 0-.04657.01709-.10401.05124-.17232.03726-.06831.09314-.13506.16766-.20026s.16922-.11954.28409-.163c.11798-.04657.2608-.06986.42847-.06986.18628 0 .34308.02484.47037.07452.12729.04657.22665.11022.29807.19095.07452.08073.12729.17232.15836.27478.03415.10246.05124.20647.05124.31203v1.50894c0 .03105-.01086.05744-.03259.07917-.01862.01863-.04346.02794-.07452.02794h-.21423c-.03415 0-.06055-.00931-.07916-.02794-.01862-.02173-.02795-.04812-.02795-.07917v-.20026c-.04037.05589-.0947.11177-.16299.16766-.0683.05278-.15369.0978-.25616.13506-.10245.03415-.22821.05123-.37723.05123l-.00006-.00002zm.09781-.3493c.12729 0 .24374-.02639.3493-.07917.10556-.05589.18784-.14127.24683-.25615.0621-.11488.09314-.25925.09314-.43312v-.1304l-.54025.07917c-.22043.03105-.38654.08383-.49832.15835-.11176.07141-.16766.163-.16766.27478 0 .08693.02484.1599.07452.21889.05276.05589.11798.0978.19559.12575.08072.02794.16299.04192.24683.04192l.00003-.00002zm1.68591.30272c-.02484 0-.04813-.00931-.06985-.02794-.01862-.01863-.02795-.04192-.02795-.06986 0-.00931.00156-.02018.00467-.0326.0062-.01552.01553-.0326.02795-.05123l.81036-1.05719-.75912-1.0013c-.01242-.01863-.02173-.03415-.02795-.04657-.00311-.01242-.00467-.02484-.00467-.03726 0-.02794.00931-.05123.02795-.06986.01862-.01863.0419-.02794.06985-.02794h.23752c.03415 0 .05899.00931.07452.02794.01862.01552.03415.03105.04657.04657l.61942.8057.61942-.80104c.01242-.01552.0264-.0326.0419-.05123.01862-.01863.04501-.02794.07916-.02794h.22821c.02795 0 .05124.00931.06985.02794s.02795.04191.02795.06986c0 .01242-.00311.02484-.00931.03726-.00314.01242-.01089.02794-.02328.04657l-.76843 1.01062.81036 1.04788c.01242.01863.02017.03415.02328.04657.0062.01242.00931.02484.00931.03726 0 .02794-.00931.05123-.02795.06986-.01862.01863-.0419.02794-.06985.02794h-.24683c-.03104 0-.05588-.00776-.07452-.02329-.01862-.01552-.03415-.03105-.04657-.04657l-.65668-.85227-.65668.85227c-.01242.01242-.02795.02794-.04657.04657-.01553.01552-.04037.02329-.07452.02329h-.23752v-.00002z" fill="#25357a"/><path d="m235.96246 193.86038c-.28564 0-.52246-.0527-.70996-.1582-.18799-.10645-.33008-.25391-.42627-.44336-.09619-.18848-.14893-.40918-.1582-.66113-.00299-.12695-.005-.26367-.005-.40918 0-.14648.00101-.28613.005-.41992.009-.25098.06201-.47168.1582-.66113s.23828-.33691.42627-.44238c.1875-.10547.42432-.1582.70996-.1582.21436 0 .40234.0293.56348.0889.16162.05859.2959.1377.40332.2373.10693.09961.18848.20996.24414.33301.05621.12207.08691.24902.09329.37891.00299.02829-.005.05179-.02539.07031-.02051.01859-.0444.02829-.0723.02829h-.25635c-.0278 0-.05179-.008-.0723-.02341-.01999-.01559-.0347-.04391-.04391-.08401-.05319-.24219-.15137-.4082-.2959-.49805-.14453-.09079-.32373-.13574-.53809-.13574-.25146 0-.4502.07129-.5957.21191-.146.1416-.22363.36719-.23291.67773-.009.25488-.009.51562 0 .78223.009.31055.08691.53711.23291.67773.14551.1416.34424.21191.5957.21191.21436 0 .39355-.04489.53809-.13477.14453-.08981.24268-.25586.2959-.49805.009-.04099.0239-.06839.04391-.08401.02051-.01559.0444-.02341.0723-.02341h.25635c.0278 0 .05179.009.0723.02539.01999.01761.02829.04001.02539.06741-.00601.13086-.03711.25781-.09329.38184-.05569.125-.13721.23633-.24414.33594-.10742.09961-.2417.17871-.40332.2373-.16113.05859-.34912.0889-.56348.0889z" fill="#25357a"/><path d="m238.50543 193.86038c-.15527 0-.29639-.03119-.42383-.09369-.12744-.06149-.22998-.14551-.30762-.25098-.07761-.10547-.11621-.22559-.11621-.3584 0-.21484.08691-.38574.26074-.5127s.40039-.21094.68018-.25195l.69385-.09769v-.13477c0-.14941-.043-.26562-.12842-.34961-.08539-.08401-.22412-.125-.4165-.125-.13672 0-.24854.02731-.33545.08301-.08691.05661-.14746.12793-.18164.21484-.01859.0459-.0513.06931-.0976.06931h-.20947c-.03421 0-.06009-.01001-.07709-.0303-.01709-.0195-.02539-.04391-.02539-.0723 0-.0459.01761-.10352.05319-.17188.03561-.06839.09079-.13477.16553-.2002.07471-.0654.16992-.12012.28662-.16504.11621-.04489.2583-.06839.42578-.06839.18652 0 .34326.02441.4707.0723.12695.0488.22705.11328.30029.19336.07281.08109.12549.17285.1582.27539s.0488.20605.0488.31152v1.50879c0 .03119-.01001.05661-.0303.07721-.01999.02051-.0459.0303-.07669.0303h-.21436c-.03421 0-.06049-.01001-.0791-.0303-.01859-.02051-.0278-.0459-.0278-.07721v-.2002c-.0405.05569-.0947.11133-.16309.16602-.06839.05371-.15381.0986-.25635.13477-.10205.03519-.22803.05371-.37695.05371l-.00003.00006zm.0976-.34961c.12744 0 .24365-.02731.34912-.08109.10596-.05469.18896-.13965.24951-.25391.06049-.11523.09079-.25977.09079-.43359v-.12988l-.54053.0791c-.22021.0303-.38623.08301-.49805.15527-.11182.07321-.16797.16602-.16797.27734 0 .08691.02591.15918.07709.2168.0513.05759.11621.09961.19531.12793.07959.02829.16064.04199.24463.04199l.00009.00003z" fill="#25357a"/><path d="m240.75006 193.81351c-.03079 0-.05661-.01001-.07669-.0303-.02051-.02051-.0303-.0459-.0303-.07709v-1.94141h-.396c-.03119 0-.05661-.01071-.07669-.0303-.02051-.02051-.0303-.0459-.0303-.07721v-.1582c0-.03119.01001-.05661.0303-.07721.01999-.02051.04541-.0303.07669-.0303h.396v-.23242c0-.1582.0264-.29785.0791-.41699.0527-.12012.13721-.21191.25391-.27734.11621-.0654.27246-.09769.46777-.09769h.27979c.03079 0 .05661.01001.07669.0303.01999.02051.0303.0459.0303.07721v.1582c0 .03119-.01019.05661-.0303.0762-.01999.02051-.0459.0303-.07669.0303h-.27051c-.146 0-.24512.03809-.29785.11426-.0527.0762-.0791.18555-.0791.3291v.20898h.60059c.03119 0 .05661.01001.07709.0303.01999.02051.0303.0459.0303.07709v.1582c0 .03119-.01031.05661-.0303.07721-.02051.0195-.0459.0303-.07709.0303h-.60059v1.94141c0 .03119-.01031.05661-.0303.07709-.02051.02051-.0459.0303-.07709.0303h-.21872z" fill="#25357a"/><path d="m243.16266 193.86038c-.32324 0-.5791-.0986-.76855-.2959-.18945-.19727-.29346-.4668-.31201-.80859-.00299-.04001-.005-.0918-.005-.15527 0-.06351.00101-.11621.005-.15625.01221-.2207.06351-.41406.15381-.58008.08981-.16602.21338-.29395.37012-.38379.15674-.08981.34082-.13574.55176-.13574.23584 0 .43408.0498.59375.14941.16016.09961.28174.24023.36572.42383.08401.18359.12598.39746.12598.64258v.0791c0 .03421-.01019.06061-.0303.0791-.02051.01859-.0459.02829-.07721.02829h-1.61133v.04199c.00601.12695.03421.24609.08401.35645.04929.11035.12158.19922.21631.26758.0947.06839.20557.10254.33301.10254.11182 0 .20508-.01761.2793-.05179.07471-.03421.13525-.0723.18164-.11426.04691-.04099.07761-.0752.09329-.09961.0278-.03711.0498-.0596.0654-.06741.01511-.008.04001-.01169.07419-.01169h.22852c.0278 0 .0517.009.0723.02539.01999.01761.02829.04099.02539.0723-.00299.04691-.0278.10352-.07471.16992-.04639.06741-.1123.13281-.19775.19824-.08539.0654-.19092.11816-.31689.16016-.12549.04199-.26758.06351-.42578.06351h.00006zm-.63818-1.43457h1.27588v-.0137c0-.14062-.02539-.26465-.07669-.37305s-.125-.19434-.22119-.25879c-.09619-.06351-.21094-.0947-.34473-.0947-.1333 0-.24756.03119-.34229.0947-.0947.06451-.16699.15039-.21631.25879-.0498.1084-.07471.23242-.07471.37305l.00003.0137zm.50781-1.38379c-.0498 0-.07471-.02441-.07471-.07419 0-.02441.008-.04489.02341-.06049l.34912-.41895c.0278-.03421.0527-.05759.07471-.07031.02151-.01169.0542-.01859.09769-.01859h.31689c.05859 0 .08841.03119.08841.09369 0 .02151-.008.04001-.02341.05569l-.54004.44238c-.0249.02151-.04831.0361-.06979.04199-.022.00601-.0498.009-.08401.009l-.15826-.00024z" fill="#25357a"/><path d="m230.61871 198.47073c-.03421 0-.06049-.01001-.0791-.0303-.01859-.02051-.0278-.0459-.0278-.07721v-3.04102c0-.03421.009-.06149.0278-.08109.01859-.02051.04489-.0303.0791-.0303h1.90039c.03421 0 .061.01001.08151.0303.01999.0195.0303.04691.0303.08109v.18652c0 .03421-.01019.06061-.0303.0791-.02051.01859-.04739.02829-.08151.02829h-1.55566v1.08496h1.4624c.03421 0 .061.01001.08151.0303.01999.0195.0303.04691.0303.08109v.18652c0 .03119-.01031.05661-.0303.07721-.02051.0195-.04739.0303-.08151.0303h-1.4624v1.25684c0 .03119-.01019.05661-.0303.07721-.01999.02051-.04739.0303-.08151.0303h-.23291v-.00012z" fill="#25357a"/><path d="m233.27789 198.47073c-.03079 0-.05661-.01001-.07669-.0303-.02051-.02051-.0303-.0459-.0303-.07721v-2.20215c0-.03119.01001-.05759.0303-.0791.01999-.02249.0459-.0332.07669-.0332h.21436c.03079 0 .05759.01071.0791.0332.02151.02151.03271.04791.03271.0791v.2041c.06201-.10547.14746-.18457.25586-.2373.10889-.0527.24072-.0791.396-.0791h.18164c.03119 0 .05661.01001.07709.0303.01999.02051.0303.0459.0303.07721v.19043c0 .03119-.01031.05661-.0303.0752-.02051.01859-.0459.02731-.07709.02731h-.2793c-.16748 0-.2998.0488-.396.14648-.09619.0986-.14453.23145-.14453.39844v1.36914c0 .03119-.01071.05661-.0322.07721-.022.02051-.04831.0303-.0791.0303l-.22855-.00006z" fill="#25357a"/><path d="m235.61578 198.51761c-.15527 0-.29639-.03119-.42383-.09369-.12744-.06149-.22998-.14551-.30762-.25098-.07761-.10547-.11621-.22559-.11621-.3584 0-.21484.08691-.38574.26074-.5127s.40039-.21094.68018-.25195l.69385-.09769v-.13477c0-.14941-.043-.26562-.12842-.34961-.08539-.08401-.22412-.125-.4165-.125-.13672 0-.24854.0274-.33545.08301-.08691.05661-.14746.12793-.18164.21484-.01859.0459-.0513.06931-.09769.06931h-.20947c-.03421 0-.06009-.01001-.07709-.0303-.01709-.0195-.02539-.04391-.02539-.0723 0-.0459.01761-.10352.05319-.17188.03561-.06839.09079-.13477.16553-.2002.07471-.0654.16992-.12012.28662-.16504.11621-.04489.2583-.06839.42578-.06839.18652 0 .34326.02441.4707.0723.12695.0488.22705.11328.30029.19336.07269.08109.12549.17285.1582.27539s.0488.20605.0488.31152v1.50879c0 .03119-.01001.05661-.0303.07721-.01999.02051-.0459.0303-.07669.0303h-.21436c-.03421 0-.06061-.01001-.0791-.0303-.01859-.02051-.0278-.0459-.0278-.07721v-.2002c-.0405.05569-.0947.11133-.16309.16602-.06839.05371-.15381.0986-.25635.13477-.10205.03519-.22803.05371-.37695.05371l.00006.00006zm.0976-.34961c.12744 0 .24365-.02731.34912-.08109.10596-.05469.18896-.13965.24951-.25391.06049-.11523.09079-.25977.09079-.43359v-.12988l-.54053.0791c-.22021.0303-.38623.08301-.49805.15527-.11182.07321-.16797.16602-.16797.27734 0 .08691.02591.15918.07721.2168.0513.05759.11621.09961.19531.12793.07959.02829.16064.04199.24463.04199l-.00003.00003z" fill="#25357a"/><path d="m237.61823 198.47073c-.03079 0-.05661-.01001-.07669-.0303-.02051-.02051-.0303-.0459-.0303-.07721v-2.20703c0-.03119.01001-.05661.0303-.07721.01999-.02051.0459-.0303.07669-.0303h.21875c.03119 0 .05661.01001.07721.0303.01999.02051.0303.0459.0303.07721v.20508c.0806-.10547.18213-.19238.30518-.25879.12256-.06641.27979-.10059.47266-.10059.20166 0 .37305.04489.51465.13281.14111.0889.24805.21191.32129.36816.07269.15723.10938.33887.10938.54688v1.31348c0 .03119-.01019.05661-.0303.07721-.02051.02051-.0459.0303-.07669.0303h-.23291c-.03119 0-.05661-.01001-.07721-.0303-.01999-.02051-.0303-.0459-.0303-.07721v-1.29004c0-.2168-.0527-.38672-.1582-.50977-.10547-.12207-.26074-.18359-.46582-.18359-.19238 0-.34668.06149-.46338.18359-.11621.12305-.1748.29297-.1748.50977v1.29004c0 .03119-.01001.05661-.0303.07721-.01999.02051-.04541.0303-.07669.0303h-.23279z" fill="#25357a"/><path d="m241.30231 199.49515c-.08691-.00299-.16406-.01859-.23047-.04691-.06689-.02731-.11523-.06049-.14453-.0976-.02979-.03711-.0303-.06839-.00201-.0928l.06979-.0654c.0278-.02441.0527-.0303.07471-.01559.02151.0137.04929.03119.08401.0527.03369.02249.0835.0332.14893.0332.04929 0 .0928-.01559.13037-.04691.03711-.03119.05569-.07321.05569-.12598 0-.0498-.01859-.0889-.05569-.11816-.0376-.0303-.08109-.04489-.13037-.04489-.04691 0-.0864.00699-.11914.01859-.0322.0127-.06009.02151-.0835.0264-.02341.004-.04739-.00601-.0723-.0303l-.0791-.08401c-.01559-.01859-.0195-.04099-.01169-.0654.008-.02441.01761-.0498.0303-.07419l.09329-.22363c-.25488-.04391-.4541-.15625-.59863-.33789s-.22119-.41797-.23047-.70996c-.00299-.04691-.005-.1084-.005-.18652 0-.07709.00201-.13965.005-.18652.00601-.22363.0527-.41504.13965-.5752.08691-.15918.21045-.28223.37012-.36719.16016-.08591.3501-.12891.5708-.12891.17969 0 .33447.02539.46338.0752s.23486.11328.31885.19043c.08401.07809.14697.16211.18848.25195.04199.08981.06451.1748.0679.25586.00299.03119-.00601.05569-.0278.07419-.022.01859-.04831.02829-.07959.02829h-.22314c-.03119 0-.05469-.00699-.06979-.02051-.01559-.01471-.03119-.03809-.04691-.0723-.05569-.15234-.13184-.25977-.22803-.32129-.09619-.0625-.21582-.09369-.35889-.09369-.18604 0-.3374.05759-.4541.17285-.11621.11426-.1792.29883-.18848.55371-.00299.1123-.00299.2207 0 .32617.009.25781.0723.44336.18848.55664.1167.11328.26807.16992.4541.16992.14307 0 .2627-.03119.35889-.0928.09619-.0625.17236-.16992.22803-.32227.01559-.0332.03119-.05859.04691-.07419.01511-.01559.0386-.02341.06979-.02341h.22314c.03119 0 .05759.01071.07959.0303.02151.02051.03079.0459.0278.07721-.00299.07809-.02591.16113-.0679.25195-.0415.0899-.10303.17383-.18359.25098-.08109.07809-.18555.14258-.31445.19336-.12891.05081-.28516.07721-.46826.07721l-.10254.21387c.01901-.0127.0444-.02151.07721-.02829.03271-.00601.06439-.009.09521-.009.10547 0 .19189.0361.25879.10938.06641.07321.1001.16699.1001.28223 0 .11133-.03809.20801-.11426.29102-.0762.082-.18555.12109-.32812.11816l-.00055-.00006z" fill="#25357a"/><path d="m243.89606 198.51761c-.23584 0-.43311-.04489-.59131-.13574-.1582-.0899-.2793-.21484-.36328-.375-.08401-.15918-.13037-.3418-.13965-.54688-.00299-.0527-.005-.12012-.005-.20215 0-.08301.00201-.14844.005-.19824.009-.20801.05661-.3916.14209-.5498.08539-.1582.20703-.28223.36572-.37207.1582-.0899.354-.13574.58643-.13574.23291 0 .42871.0459.58691.13574.1582.08981.28027.21387.36572.37207.08551.1582.13281.3418.14209.5498.00299.0498.00403.11523.00403.19824 0 .082-.00098.14941-.00403.20215-.00897.20508-.05621.3877-.13965.54688-.08398.16016-.20508.28516-.36328.375-.15869.09079-.35547.13574-.5918.13574zm0-.35938c.19287 0 .34619-.06049.46143-.18359.11475-.12207.17676-.30176.18604-.53809.00299-.0459.005-.10547.005-.17676s-.00201-.12988-.005-.17676c-.009-.23633-.07129-.41504-.18604-.53809-.11523-.12305-.26855-.18359-.46143-.18359-.19238 0-.34668.06049-.46338.18359-.11621.12305-.17773.30176-.18359.53809-.00299.04691-.005.10547-.005.17676s.00101.13086.005.17676c.00601.23633.06741.41602.18359.53809.1167.12305.271.18359.46338.18359z" fill="#25357a"/><path d="m245.64752 195.59769c-.03119 0-.05658-.01071-.07672-.0303-.02051-.02051-.03027-.0459-.03027-.07721v-.25195c0-.0303.01001-.05661.03027-.0791.02002-.02151.04541-.0322.07672-.0322h.29346c.03082 0 .05713.01071.0791.0322.02148.02249.03271.0488.03271.0791v.25195c0 .03119-.01123.05661-.03271.07721-.02197.0195-.0484.0303-.0791.0303zm.03711 2.87304c-.03082 0-.05658-.01001-.07672-.0303-.02051-.02051-.03027-.0459-.03027-.07721v-2.20703c0-.03119.01001-.05661.03027-.07721.02002-.02051.0459-.0303.07672-.0303h.22363c.03082 0 .05658.01001.07672.0303.02051.02051.03027.0459.03027.07721v2.20703c0 .03119-.01001.05661-.03027.07721-.02002.02051-.0459.0303-.07672.0303z" fill="#25357a"/><path d="m247.54303 198.51761c-.17432 0-.32324-.02249-.44727-.0654-.12402-.04391-.2251-.09671-.30273-.1582-.07758-.0625-.13574-.12402-.1748-.18652-.03857-.0625-.05957-.11133-.0625-.14941-.00299-.03421.00702-.06061.03223-.0791.0249-.01859.0498-.02731.07471-.02731h.20947c.01562 0 .02881.00201.03949.00699s.02588.01761.04437.03909c.03998.04391.08551.08691.13477.13086.0498.04391.11133.0791.18408.10742.07318.0274.16406.04199.27246.04199.1582 0 .28906-.0303.39111-.09079.10254-.06049.15381-.15039.15381-.26855 0-.07721-.021-.13965-.06299-.18555-.0415-.04691-.11621-.0889-.22314-.12598-.10742-.03711-.25391-.0762-.44043-.11621-.18604-.04391-.3335-.09769-.44238-.16113-.10889-.06351-.18604-.13965-.23291-.22852-.04639-.08789-.06982-.18848-.06982-.2998 0-.11523.03418-.22656.10254-.33301.06842-.10742.16846-.19531.30029-.26367.13184-.06839.29736-.10254.49609-.10254.16162 0 .2998.02051.41455.06061.11475.04099.20947.09079.28418.15137.07422.06049.13037.12109.16748.17969s.05762.1084.06049.14941c.00299.0303-.00598.05661-.02777.0762-.02197.02051-.04688.0303-.07471.0303h-.19531c-.02197 0-.03949-.004-.05371-.0137-.01422-.01001-.02728-.02051-.03961-.0322-.03119-.04099-.06738-.08109-.10938-.12109-.04199-.04099-.09619-.07419-.16309-.10059s-.15479-.03909-.26318-.03909c-.15527 0-.27197.0322-.34912.09769-.07758.06451-.1167.14746-.1167.24609 0 .0596.01709.1123.05127.15918.03418.0459.09961.08789.1958.125.09619.03809.23877.07809.42822.12109.20508.04099.36621.0947.48438.16309s.20166.14746.25146.23828c.0498.0899.07471.19336.07471.31152 0 .13086-.0376.25-.11182.3584-.07471.10938-.18652.19531-.33545.25879-.14893.06351-.33203.0957-.54932.0957z" fill="#25357a"/><path d="m259.14468 193.8139c-.03415 0-.06055-.00931-.07916-.02794-.01862-.02173-.02795-.04813-.02795-.07916v-3.04117c0-.03415.00931-.06055.02795-.07916.01862-.02173.04501-.03259.07916-.03259h1.27609c.23285 0 .42227.0388.56818.11642.14902.07452.25769.17697.32602.30737.07141.1304.10712.27634.10712.43777 0 .1273-.02173.23752-.06519.33066-.04037.09004-.09158.16457-.15369.22356-.0621.05589-.12265.09935-.18164.1304.12109.05899.22821.15524.32135.28876.09625.13351.14438.29495.14438.48434 0 .17078-.03882.32756-.11642.47038s-.19406.25771-.3493.34464c-.15213.08383-.34152.12575-.56818.12575h-1.30869zm.34928-.37722h.89886c.20181 0 .35706-.05434.46573-.16299.10867-.10867.16299-.24219.16299-.40051 0-.16457-.05432-.29962-.16299-.40518-.10867-.10867-.26392-.16299-.46573-.16299h-.89886v1.13171-.00003zm0-1.50431h.85693c.1987 0 .3493-.04501.45175-.13506.10245-.09314.15369-.21889.15369-.37724s-.05124-.27943-.15369-.36327-.25305-.12575-.45175-.12575h-.85693v1.00131zm2.7012 1.88153c-.03104 0-.05743-.00931-.07916-.02794-.01862-.02173-.02795-.04813-.02795-.07916v-2.20287c0-.03105.00931-.05743.02795-.07916.02173-.02173.04813-.03259.07916-.03259h.21423c.03104 0 .05743.01086.07916.03259s.03259.04813.03259.07916v.20493c.0621-.10556.14749-.18474.25616-.23752s.23907-.07916.3912-.07916h.18628c.03104 0 .05588.01086.07452.03259.01862.01863.02795.04347.02795.07452v.19095c0 .03105-.00931.05589-.02795.07452-.01862.01863-.04346.02794-.07452.02794h-.27942c-.16766 0-.29962.04968-.39587.14903-.09625.09625-.14438.2282-.14438.39586v1.36923c0 .03105-.01086.05743-.03259.07916-.02173.01863-.04813.02794-.07916.02794h-.22821v-.00003zm2.58127.04657c-.31979 0-.5744-.09779-.76379-.29341-.18939-.19872-.2934-.46883-.31204-.81036-.00311-.04036-.00467-.09158-.00467-.15369 0-.0652.00156-.11798.00467-.15836.01242-.22044.06366-.41293.15369-.5775.09003-.16766.21268-.29651.36792-.38655.15836-.09004.34308-.13506.5542-.13506.23596 0 .43311.04968.59146.14903.16144.09935.28409.24062.36792.42381s.12576.39742.12576.6427v.07916c0 .03415-.01086.06055-.03259.07916-.01862.01863-.04346.02794-.07452.02794h-1.61139v.04192c.0062.1273.03415.24683.08383.35861.04968.10867.12109.19716.21423.26546.09314.06831.20493.10246.33533.10246.11176 0 .20493-.01707.27942-.05122.07452-.03415.13507-.07141.18164-.11177.04657-.04347.07761-.07607.09314-.09779.02795-.04036.04968-.06364.06519-.06985.01553-.00931.04037-.01398.07452-.01398h.22354c.03104 0 .05588.00931.07452.02794.02173.01552.03104.0388.02795.06985-.00311.04657-.02795.104-.07452.17232-.04657.0652-.11334.1304-.20026.1956-.08694.0652-.1925.11954-.31668.16299-.12418.04036-.267.06055-.42847.06055v.00003zm-.63339-1.43441h1.27609v-.01398c0-.13972-.0264-.26392-.07916-.37257-.04968-.10867-.12265-.19405-.2189-.25615-.09625-.0652-.21112-.09779-.34464-.09779s-.24838.03259-.34464.09779c-.09314.0621-.16455.14748-.21423.25615s-.07452.23286-.07452.37257zm2.95269 1.43441c-.15524 0-.29651-.03105-.4238-.09314-.12729-.0621-.22977-.14594-.30737-.2515s-.11642-.2251-.11642-.35861c0-.21423.08694-.38499.2608-.5123s.40051-.21114.67996-.2515l.69394-.09779v-.13506c0-.14903-.04346-.26546-.1304-.34929-.08383-.08383-.22198-.12575-.41449-.12575-.13971 0-.25305.02794-.33997.08383-.08383.05589-.14282.1273-.17697.21423-.01862.04657-.05124.06985-.09781.06985h-.20959c-.03415 0-.06055-.00931-.07916-.02794-.01553-.02173-.02328-.04657-.02328-.07452 0-.04657.01709-.104.05124-.17232.03726-.06831.09314-.13506.16766-.20026s.16922-.11954.28409-.16299c.11798-.04657.2608-.06985.42847-.06985.18628 0 .34308.02484.47037.07452.12729.04657.22665.11021.29807.19095.07452.08073.12729.17232.15836.27478.03415.10246.05124.20647.05124.31203v1.50894c0 .03105-.01086.05743-.03259.07916-.01862.01863-.04346.02794-.07452.02794h-.21423c-.03415 0-.06055-.00931-.07916-.02794-.01862-.02173-.02795-.04813-.02795-.07916v-.20026c-.04037.05589-.0947.11177-.16299.16766-.0683.05278-.15369.09779-.25616.13506-.10245.03415-.22821.05122-.37723.05122l-.00006-.00002zm.09781-.34929c.12729 0 .24374-.02638.3493-.07916.10556-.05589.18784-.14127.24683-.25615.0621-.11488.09314-.25925.09314-.43312v-.1304l-.54025.07916c-.22043.03105-.38654.08383-.49832.15836-.11176.07141-.16766.16299-.16766.27478 0 .08693.02484.1599.07452.21889.05276.05589.11798.09779.19559.12575.08072.02794.16299.04192.24683.04192l.00003-.00002zm2.68256.34929c-.17078 0-.31824-.0295-.44244-.08849-.12418-.0621-.22665-.14436-.30737-.24683-.07761-.10556-.1366-.2251-.17697-.35861-.03726-.13351-.05899-.27478-.06519-.42381-.00314-.04968-.0047-.09625-.0047-.13972s.00156-.09004.0047-.13972c.0062-.14594.02792-.28564.06519-.41914.04037-.13351.09937-.25304.17697-.35861.08072-.10556.18317-.18784.30737-.24683.12418-.0621.27167-.09314.44244-.09314.18317 0 .33533.03259.45642.09779s.22043.14594.29807.24219v-1.07117c0-.03105.00931-.05589.02795-.07452.02173-.02173.04813-.03259.07916-.03259h.22354c.03104 0 .05588.01086.07452.03259.02173.01863.03259.04347.03259.07452v3.09241c0 .03105-.01086.05743-.03259.07916-.01862.01863-.04346.02794-.07452.02794h-.20956c-.03415 0-.06055-.00931-.07916-.02794-.01862-.02173-.02795-.04813-.02795-.07916v-.1956c-.07761.09935-.17853.18318-.30273.2515-.12418.0652-.27942.09779-.46573.09779zm.09781-.37722c.15524 0 .27942-.03571.37259-.10712.09314-.07141.16299-.16145.20956-.27013.04657-.11177.07141-.2251.07452-.33998.00314-.04968.0047-.10867.0047-.17697 0-.07141-.00156-.13194-.0047-.18163-.00314-.10867-.02951-.21579-.07916-.32135-.04657-.10556-.11798-.1925-.21423-.2608-.09314-.06831-.21423-.10246-.36325-.10246-.15836 0-.28409.03571-.37723.10712-.09314.06831-.15991.1599-.20026.27478-.04037.11177-.06366.23286-.06985.36327-.00314.09004-.00314.18008 0 .27013.0062.1304.02948.25304.06985.36792.04037.11177.10712.20337.20026.27478.09314.06831.2189.10246.37723.10246zm2.62668.37722c-.17386 0-.32291-.02173-.44708-.0652s-.2251-.09625-.30273-.15836c-.07761-.0621-.1366-.12419-.17697-.18629-.03726-.0621-.05743-.11177-.06055-.14903-.00314-.03415.00772-.06055.03259-.07916.02484-.01863.04968-.02794.07452-.02794h.20493c.01862 0 .03259.0031.04193.00931.01242.0031.02795.01552.04657.03726.04037.04347.08539.08693.13507.1304s.11023.07916.18164.10712c.07452.02794.16611.04192.27478.04192.15836 0 .28876-.0295.3912-.08849.10245-.0621.15369-.15215.15369-.27013 0-.07762-.02173-.13972-.06519-.18629-.04037-.04657-.11487-.08849-.22354-.12575-.10556-.03726-.2515-.07607-.43777-.11642-.18628-.04347-.33377-.09625-.44244-.15836-.10867-.0652-.18628-.14127-.23285-.2282-.04657-.09004-.06985-.19095-.06985-.30272 0-.11488.03415-.2251.10245-.33066.0683-.10867.16766-.19716.29807-.26546.13351-.06831.29962-.10246.49832-.10246.16144 0 .29962.02019.41449.06055s.20959.09158.28409.15369c.07452.05899.1304.11798.16766.17697s.05743.10867.06055.14903c.00314.03105-.0062.05743-.02795.07916-.02173.01863-.04657.02794-.07452.02794h-.19559c-.02173 0-.04037-.00465-.05588-.01398-.01242-.00931-.02484-.02019-.03726-.03259-.03104-.04036-.0683-.08073-.11176-.12109-.04037-.04036-.0947-.07297-.16299-.09779-.06519-.02794-.15213-.04192-.2608-.04192-.15524 0-.27167.03259-.3493.09779-.07761.0652-.11642.14748-.11642.24683 0 .05899.01709.11177.05124.15836.03415.04657.09937.08849.19559.12575.09625.03726.23907.07762.42847.12109.20493.04036.36636.0947.48434.16299.11798.06831.20181.14748.2515.23752s.07452.19405.07452.31203c0 .1304-.03882.24994-.11642.35861-.07452.10867-.18628.1956-.33533.2608-.14594.0621-.32755.09314-.54489.09315l-.00009.00002zm2.47879-.04657c-.17386 0-.31516-.03259-.4238-.09779-.10867-.06831-.18784-.16299-.23752-.28409-.04968-.12419-.07452-.27013-.07452-.43777v-1.22951h-.36325c-.03104 0-.05743-.00931-.07916-.02794-.01862-.02173-.02795-.04813-.02795-.07916v-.15836c0-.03105.00931-.05589.02795-.07452.02173-.02173.04813-.03259.07916-.03259h.36325v-.77776c0-.03105.00931-.05589.02795-.07452.02173-.02173.04813-.03259.07916-.03259h.2189c.03104 0 .05588.01086.07452.03259.02173.01863.03259.04347.03259.07452v.77776h.57751c.03104 0 .05588.01086.07452.03259.02173.01863.03259.04347.03259.07452v.15836c0 .03105-.01086.05743-.03259.07916-.01862.01863-.04346.02794-.07452.02794h-.57751v1.19691c0 .14594.02484.2608.07452.34464s.13818.12575.26547.12575h.28409c.03104 0 .05588.01086.07452.03259.02173.01863.03259.04347.03259.07452v.16766c0 .03105-.01086.05743-.03259.07916-.01862.01863-.04346.02794-.07452.02794h-.32135l-.00003-.00002zm1.55087.04657c-.15524 0-.29651-.03105-.4238-.09314s-.22977-.14594-.30737-.2515-.11642-.2251-.11642-.35861c0-.21423.08694-.38499.2608-.5123s.40051-.21114.67996-.2515l.69394-.09779v-.13506c0-.14903-.04346-.26546-.1304-.34929-.08383-.08383-.22198-.12575-.41449-.12575-.13971 0-.25305.02794-.33997.08383-.08383.05589-.14282.1273-.17697.21423-.01862.04657-.05124.06985-.09781.06985h-.20959c-.03415 0-.06055-.00931-.07916-.02794-.01553-.02173-.02328-.04657-.02328-.07452 0-.04657.01709-.104.05124-.17232.03726-.06831.09314-.13506.16766-.20026s.16922-.11954.28409-.16299c.11798-.04657.2608-.06985.42847-.06985.18628 0 .34308.02484.47037.07452.12729.04657.22665.11021.29807.19095.07452.08073.12729.17232.15836.27478.03415.10246.05124.20647.05124.31203v1.50894c0 .03105-.01086.05743-.03259.07916-.01862.01863-.04346.02794-.07452.02794h-.21423c-.03415 0-.06055-.00931-.07916-.02794-.01862-.02173-.02795-.04813-.02795-.07916v-.20026c-.04037.05589-.0947.11177-.16299.16766-.0683.05278-.15369.09779-.25616.13506-.10245.03415-.22821.05122-.37723.05122l-.00006-.00002zm.09781-.34929c.12729 0 .24374-.02638.3493-.07916.10556-.05589.18784-.14127.24683-.25615.0621-.11488.09314-.25925.09314-.43312v-.1304l-.54025.07916c-.22043.03105-.38654.08383-.49832.15836-.11176.07141-.16766.16299-.16766.27478 0 .08693.02484.1599.07452.21889.05276.05589.11798.09779.19559.12575.08072.02794.16299.04192.24683.04192l.00003-.00002zm1.90945.30272c-.03104 0-.05743-.00931-.07916-.02794-.01862-.02173-.02795-.04813-.02795-.07916v-3.09241c0-.03105.00931-.05589.02795-.07452.02173-.02173.04813-.03259.07916-.03259h.2189c.03415 0 .06055.01086.07916.03259.01862.01863.02795.04347.02795.07452v3.09241c0 .03105-.00931.05743-.02795.07916-.01862.01863-.04501.02794-.07916.02794zm1.13172 0c-.03104 0-.05743-.00931-.07916-.02794-.01862-.02173-.02795-.04813-.02795-.07916v-3.09241c0-.03105.00931-.05589.02795-.07452.02173-.02173.04813-.03259.07916-.03259h.2189c.03415 0 .06055.01086.07916.03259.01862.01863.02795.04347.02795.07452v3.09241c0 .03105-.00931.05743-.02795.07916-.01862.01863-.04501.02794-.07916.02794z" fill="#25357a"/><path d="m56.87954 195.75427c-.03415 0-.06054-.00931-.07917-.02794-.01863-.02173-.02794-.04813-.02794-.07916v-3.04117c0-.03415.00931-.06055.02794-.07916.01863-.02173.04502-.03259.07917-.03259h1.27608c.23286 0 .42226.0388.56818.11642.14903.07452.2577.17697.32601.30737.07141.1304.10712.27634.10712.43777 0 .1273-.02173.23752-.0652.33066-.04036.09004-.09159.16457-.15369.22356-.0621.05589-.12264.09935-.18163.1304.12109.05899.2282.15524.32135.28876.09625.13351.14437.29495.14437.48434 0 .17078-.03881.32756-.11643.47038s-.19405.25771-.34929.34464c-.15214.08383-.34153.12575-.56818.12575h-1.30868l-.00002-.00003zm.3493-.37723h.89885c.20181 0 .35705-.05434.46572-.16299.10867-.10867.163-.24219.163-.40051 0-.16457-.05433-.29962-.163-.40518-.10867-.10867-.26391-.16299-.46572-.16299h-.89885v1.13171-.00003zm0-1.50428h.85693c.19871 0 .34929-.04501.45175-.13506.10246-.09314.15369-.21889.15369-.37724s-.05123-.27943-.15369-.36327-.25304-.12575-.45175-.12575h-.85693v1.00131zm3.26937 1.92808c-.15524 0-.29651-.03105-.42381-.09314-.1273-.0621-.22976-.14594-.30738-.2515s-.11643-.2251-.11643-.35861c0-.21423.08693-.38499.2608-.5123s.40052-.21114.67996-.2515l.69393-.09779v-.13506c0-.14903-.04347-.26546-.1304-.34929-.08383-.08383-.22199-.12575-.41449-.12575-.13972 0-.25304.02794-.33998.08383-.08383.05589-.14282.1273-.17697.21423-.01863.04657-.05123.06985-.0978.06985h-.20958c-.03415 0-.06054-.00931-.07917-.02794-.01552-.02173-.02329-.04657-.02329-.07452 0-.04657.01708-.104.05123-.17232.03726-.06831.09314-.13506.16766-.20026s.16921-.11954.28409-.16299c.11798-.04657.26081-.06985.42847-.06985.18629 0 .34308.02484.47038.07452.1273.04657.22665.11021.29806.19095.07452.08073.1273.17232.15835.27478.03415.10246.05123.20647.05123.31203v1.50894c0 .03105-.01087.05743-.0326.07916-.01863.01863-.04347.02794-.07452.02794h-.21423c-.03415 0-.06054-.00931-.07917-.02794-.01863-.02173-.02794-.04813-.02794-.07916v-.20026c-.04036.05589-.0947.11177-.163.16766-.06831.05278-.15369.09779-.25615.13506-.10246.03415-.2282.05122-.37724.05122l-.00002-.00002zm.0978-.34929c.1273 0 .24373-.02638.34929-.07916.10556-.05589.18784-.14127.24683-.25615.0621-.11488.09314-.25925.09314-.43312v-.1304l-.54024.07916c-.22044.03105-.38655.08383-.49832.15836-.11177.07141-.16766.16299-.16766.27478 0 .08693.02484.1599.07452.21889.05278.05589.11798.09779.1956.12575.08072.02794.163.04192.24683.04192l.00002-.00002zm1.90481.30272c-.03105 0-.05744-.00931-.07917-.02794-.01863-.02173-.02794-.04813-.02794-.07916v-2.20287c0-.03105.00931-.05743.02794-.07916.02173-.02173.04812-.03259.07917-.03259h.21423c.03105 0 .05744.01086.07917.03259s.0326.04813.0326.07916v.20493c.0621-.10556.14748-.18474.25615-.23752s.23907-.07916.39121-.07916h.18629c.03105 0 .05589.01086.07452.03259.01863.01863.02794.04347.02794.07452v.19095c0 .03105-.00931.05589-.02794.07452s-.04347.02794-.07452.02794h-.27943c-.16766 0-.29962.04968-.39586.14903-.09625.09625-.14437.2282-.14437.39586v1.36923c0 .03105-.01087.05743-.0326.07916-.02173.01863-.04812.02794-.07917.02794h-.2282l-.00002-.00003zm2.86565 0c-.03415 0-.06054-.00931-.07917-.02794-.01863-.02173-.02794-.04813-.02794-.07916v-3.04117c0-.03415.00931-.06055.02794-.07916.01863-.02173.04502-.03259.07917-.03259h1.05719c.3198 0 .5775.04813.7731.14436.1956.09625.33842.23907.42846.42847.09004.18629.13661.41605.13972.68927.00313.13972.0047.26236.0047.36792s-.00157.22665-.0047.36327c-.0062.28564-.05432.52316-.14437.71255-.08694.18629-.22665.326-.41915.41914-.18939.09004-.44088.13506-.75447.13506h-1.08048zm.34929-.39586h.7079c.21423 0 .385-.0295.51229-.08849.1273-.05899.21889-.15369.27478-.28409.05899-.1304.09004-.30272.09314-.51695.0062-.09314.0093-.17387.0093-.24219v-.20958c0-.07141-.0031-.15215-.0093-.24219-.0062-.30116-.07761-.52316-.21423-.66599-.13661-.14594-.36637-.21889-.68927-.21889h-.68461v2.46835zm3.36717.44243c-.15524 0-.29651-.03105-.42381-.09314-.1273-.0621-.22976-.14594-.30738-.2515s-.11643-.2251-.11643-.35861c0-.21423.08694-.38499.26081-.5123.17387-.1273.40052-.21114.67996-.2515l.69393-.09779v-.13506c0-.14903-.04347-.26546-.1304-.34929-.08383-.08383-.22199-.12575-.41449-.12575-.13972 0-.25304.02794-.33998.08383-.08383.05589-.14282.1273-.17698.21423-.01863.04657-.05123.06985-.0978.06985h-.20958c-.03415 0-.06054-.00931-.07917-.02794-.01553-.02173-.02329-.04657-.02329-.07452 0-.04657.01708-.104.05123-.17232.03726-.06831.09315-.13506.16766-.20026s.16921-.11954.28409-.16299c.11798-.04657.2608-.06985.42846-.06985.18629 0 .34308.02484.47038.07452.1273.04657.22665.11021.29806.19095.07452.08073.1273.17232.15835.27478.03415.10246.05123.20647.05123.31203v1.50894c0 .03105-.01087.05743-.0326.07916-.01863.01863-.04347.02794-.07452.02794h-.21423c-.03415 0-.06054-.00931-.07917-.02794-.01863-.02173-.02794-.04813-.02794-.07916v-.20026c-.04036.05589-.0947.11177-.163.16766-.06831.05278-.15369.09779-.25615.13506-.10246.03415-.2282.05122-.37724.05122v-.00002zm.0978-.34929c.1273 0 .24373-.02638.34929-.07916.10556-.05589.18784-.14127.24683-.25615.06209-.11488.09314-.25925.09314-.43312v-.1304l-.54024.07916c-.22044.03105-.38655.08383-.49832.15836-.11177.07141-.16766.16299-.16766.27478 0 .08693.02484.1599.07452.21889.05278.05589.11798.09779.1956.12575.08073.02794.163.04192.24683.04192v-.00002zm2.636.34929c-.17387 0-.3229-.02173-.44709-.0652s-.2251-.09625-.30272-.15836-.13661-.12419-.17698-.18629c-.03726-.0621-.05744-.11177-.06054-.14903-.00313-.03415.00773-.06055.0326-.07916.02484-.01863.04968-.02794.07451-.02794h.20492c.01863 0 .0326.0031.04192.00931.01242.0031.02794.01552.04657.03726.04036.04347.08538.08693.13506.1304.04967.04347.11022.07916.18163.10712.07451.02794.16611.04192.27478.04192.15835 0 .28875-.0295.39121-.08849.10246-.0621.15369-.15215.15369-.27013 0-.07762-.02173-.13972-.0652-.18629-.04036-.04657-.11488-.08849-.22355-.12575-.10556-.03726-.25149-.07607-.43778-.11642-.18629-.04347-.33377-.09625-.44244-.15836-.10867-.0652-.18629-.14127-.23286-.2282-.04657-.09004-.06986-.19095-.06986-.30272 0-.11488.03415-.2251.10246-.33066.06831-.10867.16766-.19716.29806-.26546.13351-.06831.29961-.10246.49832-.10246.16145 0 .29961.02019.41449.06055s.20958.09158.28409.15369c.07452.05899.1304.11798.16766.17697s.05744.10867.06054.14903c.00313.03105-.00618.05743-.02794.07916-.02173.01863-.04657.02794-.07452.02794h-.1956c-.02173 0-.04036-.00465-.05589-.01398-.01242-.00931-.02484-.02019-.03726-.03259-.03105-.04036-.0683-.08073-.11177-.12109-.04036-.04036-.09469-.07297-.163-.09779-.0652-.02794-.15213-.04192-.26081-.04192-.15524 0-.27167.03259-.34929.09779s-.11643.14748-.11643.24683c0 .05899.01708.11177.05123.15836.03415.04657.09935.08849.1956.12575s.23907.07762.42846.12109c.20492.04036.36637.0947.48435.16299.11798.06831.20181.14748.25149.23752s.07452.19405.07452.31203c0 .1304-.03881.24994-.11643.35861-.07451.10867-.18629.1956-.33532.2608-.14593.0621-.32756.09314-.54489.09315v.00002zm1.64866-.04657c-.03105 0-.05744-.00931-.07917-.02794-.01863-.02173-.02794-.04813-.02794-.07916v-3.09241c0-.03105.00931-.05589.02794-.07452.02173-.02173.04812-.03259.07917-.03259h.21889c.03105 0 .05588.01086.07451.03259.02173.01863.0326.04347.0326.07452v1.62073l.91747-.76379c.03726-.03105.0652-.05122.08383-.06055.02173-.01242.05589-.01863.10246-.01863h.24683c.02794 0 .05123.00931.06986.02794s.02794.04192.02794.06985c0 .01242-.00466.02638-.01397.04192-.0062.01552-.02017.03105-.04192.04657l-1.07582.8942 1.19225 1.15965c.03726.03105.05589.05899.05589.08383 0 .02794-.00931.05122-.02794.06985s-.04191.02794-.06985.02794h-.24218c-.04657 0-.08073-.00465-.10246-.01398-.02173-.01242-.04968-.03415-.08383-.0652l-1.03856-.99199v.96405c0 .03105-.01087.05743-.0326.07916-.01863.01863-.04347.02794-.07452.02794h-.21889v.00002zm2.91921.04657c-.15524 0-.29651-.03105-.42381-.09314-.1273-.0621-.22976-.14594-.30738-.2515s-.11643-.2251-.11643-.35861c0-.21423.08694-.38499.26081-.5123.17387-.1273.40052-.21114.67995-.2515l.69393-.09779v-.13506c0-.14903-.04347-.26546-.1304-.34929-.08383-.08383-.22199-.12575-.41449-.12575-.13972 0-.25304.02794-.33998.08383-.08383.05589-.14282.1273-.17698.21423-.01863.04657-.05123.06985-.0978.06985h-.20958c-.03415 0-.06054-.00931-.07917-.02794-.01553-.02173-.02329-.04657-.02329-.07452 0-.04657.01708-.104.05123-.17232.03726-.06831.09315-.13506.16766-.20026s.16921-.11954.28409-.16299c.11798-.04657.2608-.06985.42846-.06985.18629 0 .34308.02484.47038.07452.1273.04657.22665.11021.29806.19095.07451.08073.1273.17232.15835.27478.03415.10246.05123.20647.05123.31203v1.50894c0 .03105-.01087.05743-.0326.07916-.01863.01863-.04347.02794-.07452.02794h-.21423c-.03415 0-.06054-.00931-.07917-.02794-.01863-.02173-.02794-.04813-.02794-.07916v-.20026c-.04036.05589-.09469.11177-.163.16766-.06831.05278-.15369.09779-.25615.13506-.10246.03415-.22821.05122-.37724.05122l.00002-.00002zm.0978-.34929c.1273 0 .24373-.02638.34929-.07916.10556-.05589.18784-.14127.24683-.25615.06209-.11488.09314-.25925.09314-.43312v-.1304l-.54024.07916c-.22044.03105-.38655.08383-.49832.15836-.11177.07141-.16766.16299-.16766.27478 0 .08693.02484.1599.07452.21889.05278.05589.11798.09779.1956.12575.08072.02794.163.04192.24683.04192v-.00002zm1.90947.30272c-.03105 0-.05744-.00931-.07917-.02794-.01863-.02173-.02794-.04813-.02794-.07916v-3.09241c0-.03105.00931-.05589.02794-.07452.02173-.02173.04812-.03259.07917-.03259h.21889c.03415 0 .06054.01086.07917.03259.01863.01863.02794.04347.02794.07452v3.09241c0 .03105-.00932.05743-.02794.07916-.01863.01863-.04502.02794-.07917.02794z" fill="#25357a"/><path d="m113.8649 195.75403c-.03415 0-.06054-.00931-.07917-.02794-.01863-.02173-.02794-.04813-.02794-.07916v-3.04117c0-.03415.00931-.06055.02794-.07916.01863-.02173.04502-.03259.07917-.03259h1.27608c.23286 0 .42226.0388.56818.11642.14903.07452.2577.17697.32601.30737.07141.1304.10712.27634.10712.43777 0 .1273-.02173.23752-.0652.33066-.04036.09004-.09159.16457-.15369.22356-.0621.05589-.12264.09935-.18163.1304.12109.05899.2282.15524.32135.28876.09625.13351.14437.29495.14437.48434 0 .17078-.03881.32756-.11643.47038s-.19405.25771-.34929.34464c-.15214.08383-.34153.12575-.56818.12575h-1.30868v-.00003zm.34929-.37724h.89885c.20181 0 .35705-.05434.46572-.16299.10867-.10867.163-.24219.163-.40051 0-.16457-.05433-.29962-.163-.40518-.10867-.10867-.26391-.16299-.46572-.16299h-.89885v1.13171-.00003zm0-1.50428h.85693c.19871 0 .34929-.04501.45175-.13506.10246-.09314.15369-.21889.15369-.37724s-.05123-.27943-.15369-.36327c-.10246-.08383-.25304-.12575-.45175-.12575h-.85693v1.00131zm3.26937 1.92809c-.15524 0-.29651-.03105-.42381-.09314-.1273-.0621-.22976-.14594-.30738-.2515s-.11643-.2251-.11643-.35861c0-.21423.08693-.38499.2608-.5123.17387-.1273.40052-.21114.67996-.2515l.69393-.09779v-.13506c0-.14903-.04347-.26546-.1304-.34929-.08383-.08383-.22199-.12575-.41449-.12575-.13972 0-.25304.02794-.33998.08383-.08383.05589-.14282.1273-.17697.21423-.01863.04657-.05123.06985-.0978.06985h-.20958c-.03415 0-.06054-.00931-.07917-.02794-.01552-.02173-.02329-.04657-.02329-.07452 0-.04657.01708-.104.05123-.17232.03726-.06831.09314-.13506.16766-.20026s.16921-.11954.28409-.16299c.11798-.04657.26081-.06985.42847-.06985.18629 0 .34308.02484.47038.07452.1273.04657.22665.11021.29806.19095.07452.08073.1273.17232.15835.27478.03415.10246.05123.20647.05123.31203v1.50894c0 .03105-.01087.05743-.0326.07916-.01863.01863-.04347.02794-.07452.02794h-.21423c-.03415 0-.06054-.00931-.07917-.02794-.01863-.02173-.02794-.04813-.02794-.07916v-.20026c-.04036.05589-.0947.11177-.163.16766-.06831.05278-.15369.09779-.25615.13506-.10246.03415-.2282.05122-.37724.05122v-.00002zm.0978-.34929c.1273 0 .24373-.02638.34929-.07916.10556-.05589.18784-.14127.24683-.25615.0621-.11488.09314-.25925.09314-.43312v-.1304l-.54024.07916c-.22044.03105-.38655.08383-.49832.15836-.11177.07141-.16766.16299-.16766.27478 0 .08693.02484.1599.07452.21889.05278.05589.11798.09779.1956.12575.08072.02794.163.04192.24683.04192v-.00002zm1.90481.30272c-.03105 0-.05744-.00931-.07917-.02794-.01863-.02173-.02794-.04813-.02794-.07916v-2.20287c0-.03105.00931-.05743.02794-.07916.02173-.02173.04812-.03259.07917-.03259h.21423c.03105 0 .05744.01086.07917.03259s.0326.04813.0326.07916v.20493c.0621-.10556.14748-.18474.25615-.23752s.23907-.07916.39121-.07916h.18629c.03105 0 .05589.01086.07452.03259.01863.01863.02794.04347.02794.07452v.19095c0 .03105-.00931.05589-.02794.07452s-.04347.02794-.07452.02794h-.27943c-.16766 0-.29962.04968-.39586.14903-.09625.09625-.14437.2282-.14437.39586v1.36923c0 .03105-.01087.05743-.0326.07916-.02173.01863-.04812.02794-.07917.02794h-.2282l-.00002-.00003zm1.76974 0c-.03105 0-.05744-.00931-.07917-.02794-.01863-.02173-.02794-.04813-.02794-.07916v-2.20287c0-.03105.00931-.05743.02794-.07916.02173-.02173.04812-.03259.07917-.03259h.21423c.03105 0 .05744.01086.07917.03259s.0326.04813.0326.07916v.20493c.0621-.10556.14748-.18474.25615-.23752s.23907-.07916.39121-.07916h.18629c.03105 0 .05589.01086.07452.03259.01863.01863.02794.04347.02794.07452v.19095c0 .03105-.00931.05589-.02794.07452s-.04347.02794-.07452.02794h-.27943c-.16766 0-.29961.04968-.39586.14903-.09625.09625-.14437.2282-.14437.39586v1.36923c0 .03105-.01087.05743-.0326.07916-.02173.01863-.04812.02794-.07917.02794h-.2282l-.00002-.00003zm2.2998.04657c-.15524 0-.29651-.03105-.42381-.09314-.1273-.0621-.22976-.14594-.30738-.2515s-.11643-.2251-.11643-.35861c0-.21423.08694-.38499.26081-.5123.17387-.1273.40052-.21114.67996-.2515l.69393-.09779v-.13506c0-.14903-.04347-.26546-.1304-.34929-.08383-.08383-.22199-.12575-.41449-.12575-.13972 0-.25304.02794-.33998.08383-.08383.05589-.14282.1273-.17697.21423-.01863.04657-.05123.06985-.0978.06985h-.20957c-.03415 0-.06054-.00931-.07917-.02794-.01552-.02173-.02329-.04657-.02329-.07452 0-.04657.01708-.104.05123-.17232.03726-.06831.09315-.13506.16766-.20026s.16921-.11954.28409-.16299c.11798-.04657.26081-.06985.42846-.06985.18629 0 .34308.02484.47038.07452.1273.04657.22665.11021.29806.19095.07452.08073.1273.17232.15835.27478.03415.10246.05123.20647.05123.31203v1.50894c0 .03105-.01087.05743-.0326.07916-.01863.01863-.04347.02794-.07452.02794h-.21423c-.03415 0-.06054-.00931-.07917-.02794-.01863-.02173-.02794-.04813-.02794-.07916v-.20026c-.04036.05589-.09469.11177-.163.16766-.06831.05278-.15369.09779-.25615.13506-.10246.03415-.2282.05122-.37724.05122v-.00002zm.0978-.34929c.1273 0 .24373-.02638.34929-.07916.10556-.05589.18784-.14127.24683-.25615.06209-.11488.09314-.25925.09314-.43312v-.1304l-.54024.07916c-.22044.03105-.38655.08383-.49832.15836-.11177.07141-.16766.16299-.16766.27478 0 .08693.02484.1599.07452.21889.05278.05589.11798.09779.1956.12575.08073.02794.163.04192.24684.04192v-.00002zm2.12458.30272c-.03105 0-.05744-.00931-.07917-.02794-.01863-.02173-.02794-.04813-.02794-.07916v-1.94206h-.39587c-.03105 0-.05744-.00931-.07917-.02794-.01863-.02173-.02794-.04813-.02794-.07916v-.15836c0-.03105.00931-.05589.02794-.07452.02173-.02173.04812-.03259.07917-.03259h.39587v-.23286c0-.15836.02639-.29651.07917-.41449.05278-.12109.13661-.21423.25149-.27943.11798-.0652.27478-.09779.47038-.09779h.71721c.03105 0 .05588.01086.07451.03259.02173.01863.0326.04347.0326.07452v.15836c0 .03105-.01087.05743-.0326.07916-.01863.01863-.04346.02794-.07451.02794h-.7079c-.14593 0-.24528.0388-.29806.11642-.05278.07452-.07917.18318-.07917.326v.20958h1.08514c.03105 0 .05588.01086.07451.03259.02173.01863.0326.04347.0326.07452v2.20753c0 .03105-.01087.05743-.0326.07916-.01863.01863-.04347.02794-.07452.02794h-.21423c-.03415 0-.06054-.00931-.07917-.02794-.01863-.02173-.02794-.04813-.02794-.07916v-1.94206h-.76379v1.94206c0 .03105-.01087.05743-.0326.07916-.01863.01863-.04348.02794-.07452.02794h-.21889v-.00002zm2.31464 0c-.03105 0-.05743-.00931-.07916-.02794-.01863-.02173-.02794-.04813-.02794-.07916v-2.20753c0-.03105.00931-.05589.02794-.07452.02173-.02173.04813-.03259.07916-.03259h.21889c.03105 0 .05589.01086.07452.03259.02173.01863.03259.04347.03259.07452v.20493c.08072-.10556.18163-.19095.30272-.25615.12419-.06831.28255-.10246.47504-.10246.20181 0 .37257.04501.5123.13506.14282.08694.24994.20958.32135.36792.07141.15524.10712.33687.10712.54491v1.31334c0 .03105-.00931.05743-.02794.07916-.01863.01863-.04347.02794-.07452.02794h-.23286c-.03105 0-.05743-.00931-.07916-.02794-.01863-.02173-.02794-.04813-.02794-.07916v-1.29005c0-.21735-.05278-.38655-.15836-.50764-.10556-.12419-.2608-.18629-.46571-.18629-.1925 0-.34773.0621-.46571.18629-.11488.12109-.17232.2903-.17232.50764v1.29005c0 .03105-.01086.05743-.03259.07916-.01863.01863-.04349.02794-.07452.02794h-.23288zm3.39045.04657c-.15524 0-.29651-.03105-.42381-.09314-.1273-.0621-.22977-.14594-.30737-.2515s-.11642-.2251-.11642-.35861c0-.21423.08694-.38499.2608-.5123.17387-.1273.40051-.21114.67995-.2515l.69392-.09779v-.13506c0-.14903-.04347-.26546-.1304-.34929-.08383-.08383-.22198-.12575-.41449-.12575-.13972 0-.25304.02794-.33998.08383-.08383.05589-.14282.1273-.17699.21423-.01863.04657-.05122.06985-.09779.06985h-.20958c-.03415 0-.06055-.00931-.07916-.02794-.01553-.02173-.02328-.04657-.02328-.07452 0-.04657.01707-.104.05122-.17232.03726-.06831.09315-.13506.16766-.20026.07452-.0652.1692-.11954.28409-.16299.11798-.04657.2608-.06985.42847-.06985.18629 0 .34308.02484.47038.07452.1273.04657.22665.11021.29807.19095.07452.08073.1273.17232.15836.27478.03415.10246.05122.20647.05122.31203v1.50894c0 .03105-.01086.05743-.03259.07916-.01863.01863-.04347.02794-.07452.02794h-.21423c-.03415 0-.06055-.00931-.07916-.02794-.01863-.02173-.02794-.04813-.02794-.07916v-.20026c-.04036.05589-.0947.11177-.16299.16766-.06831.05278-.15369.09779-.25615.13506-.10246.03415-.2282.05122-.37724.05122l-.00002-.00002zm.09781-.34929c.1273 0 .24373-.02638.34929-.07916.10556-.05589.18784-.14127.24683-.25615.06209-.11488.09314-.25925.09314-.43312v-.1304l-.54024.07916c-.22044.03105-.38655.08383-.49832.15836-.11177.07141-.16766.16299-.16766.27478 0 .08693.02484.1599.07452.21889.05278.05589.11798.09779.1956.12575.08072.02794.16299.04192.24683.04192l.00002-.00002z" fill="#25357a"/><path d="m161.66373 195.75391c-.03415 0-.06055-.00931-.07916-.02794-.01863-.02173-.02794-.04813-.02794-.07916v-3.04117c0-.03415.00931-.06055.02794-.07916.01863-.02173.04501-.03259.07916-.03259h1.18294c.22977 0 .42847.03726.59613.11177.17078.07452.30272.18629.39586.33533.09314.14594.13972.32912.13972.54955s-.04657.40363-.13972.54955-.2251.25615-.39586.33066c-.16766.07452-.36636.11177-.59613.11177h-.82433v1.16431c0 .03105-.01086.05743-.03259.07916-.01863.01863-.04501.02794-.07916.02794h-.24686zm.35394-1.66263h.80569c.22977 0 .40207-.05122.51695-.15369s.17232-.2515.17232-.44708c0-.1925-.05589-.34154-.16766-.44708s-.28564-.15836-.52161-.15836h-.80569v1.20622-.00002zm3.09822 1.7092c-.15524 0-.29651-.03105-.42381-.09314s-.22977-.14594-.30737-.2515-.11642-.2251-.11642-.35861c0-.21423.08694-.38499.2608-.5123.17387-.1273.40051-.21114.67996-.2515l.69392-.09779v-.13506c0-.14903-.04347-.26546-.1304-.34929-.08383-.08383-.22198-.12575-.41449-.12575-.13972 0-.25304.02794-.33998.08383-.08383.05589-.14282.1273-.17697.21423-.01863.04657-.05122.06985-.09779.06985h-.20958c-.03415 0-.06055-.00931-.07916-.02794-.01552-.02173-.02328-.04657-.02328-.07452 0-.04657.01707-.104.05122-.17232.03726-.06831.09314-.13506.16766-.20026s.1692-.11954.28409-.16299c.11798-.04657.2608-.06985.42847-.06985.18629 0 .34308.02484.47038.07452.1273.04657.22665.11021.29807.19095.07452.08073.1273.17232.15836.27478.03415.10246.05122.20647.05122.31203v1.50894c0 .03105-.01086.05743-.03259.07916-.01863.01863-.04347.02794-.07452.02794h-.21423c-.03415 0-.06055-.00931-.07916-.02794-.01863-.02173-.02794-.04813-.02794-.07916v-.20026c-.04036.05589-.0947.11177-.16299.16766-.06831.05278-.15369.09779-.25615.13506-.10246.03415-.2282.05122-.37723.05122l-.00006-.00002zm.09781-.34929c.1273 0 .24373-.02638.34929-.07916.10556-.05589.18784-.14127.24683-.25615.0621-.11488.09314-.25925.09314-.43312v-.1304l-.54024.07916c-.22044.03105-.38655.08383-.49832.15836-.11177.07141-.16766.16299-.16766.27478 0 .08693.02484.1599.07452.21889.05278.05589.11798.09779.1956.12575.08073.02794.16299.04192.24683.04192l.00002-.00002zm1.9048.30272c-.03105 0-.05743-.00931-.07916-.02794-.01863-.02173-.02794-.04813-.02794-.07916v-2.20287c0-.03105.00931-.05743.02794-.07916.02173-.02173.04813-.03259.07916-.03259h.21423c.03105 0 .05743.01086.07916.03259s.03259.04813.03259.07916v.20493c.0621-.10556.14748-.18474.25615-.23752s.23907-.07916.3912-.07916h.18629c.03105 0 .05589.01086.07452.03259.01863.01863.02794.04347.02794.07452v.19095c0 .03105-.00931.05589-.02794.07452s-.04347.02794-.07452.02794h-.27943c-.16766 0-.29962.04968-.39586.14903-.09625.09625-.14436.2282-.14436.39586v1.36923c0 .03105-.01086.05743-.03259.07916-.02173.01863-.04813.02794-.07916.02794h-.2282l-.00003-.00003zm1.76974 0c-.03105 0-.05743-.00931-.07916-.02794-.01863-.02173-.02794-.04813-.02794-.07916v-2.20287c0-.03105.00931-.05743.02794-.07916.02173-.02173.04813-.03259.07916-.03259h.21423c.03105 0 .05743.01086.07916.03259s.03259.04813.03259.07916v.20493c.0621-.10556.14748-.18474.25615-.23752s.23907-.07916.3912-.07916h.18629c.03105 0 .05589.01086.07452.03259.01863.01863.02794.04347.02794.07452v.19095c0 .03105-.00931.05589-.02794.07452s-.04347.02794-.07452.02794h-.27943c-.16766 0-.29961.04968-.39586.14903-.09625.09625-.14436.2282-.14436.39586v1.36923c0 .03105-.01086.05743-.03259.07916-.02173.01863-.04813.02794-.07916.02794h-.2282l-.00003-.00003zm1.76975 0c-.03105 0-.05743-.00931-.07916-.02794-.01863-.02173-.02794-.04813-.02794-.07916v-2.20753c0-.03105.00931-.05589.02794-.07452.02173-.02173.04813-.03259.07916-.03259h.22356c.03105 0 .05589.01086.07452.03259.01863.01863.02794.04347.02794.07452v2.20753c0 .03105-.00931.05743-.02794.07916-.01863.01863-.04347.02794-.07452.02794zm-.03726-2.87351c-.03105 0-.05743-.00931-.07916-.02794-.01863-.02173-.02794-.04813-.02794-.07916v-.2515c0-.03105.00931-.05589.02794-.07452.02173-.02173.04813-.03259.07916-.03259h.29341c.03105 0 .05589.01086.07452.03259.02173.01863.03259.04347.03259.07452v.2515c0 .03105-.01086.05743-.03259.07916-.01863.01863-.04347.02794-.07452.02794zm1.16897 2.87351c-.03105 0-.05743-.00931-.07916-.02794-.01863-.02173-.02794-.04813-.02794-.07916v-3.09241c0-.03105.00931-.05589.02794-.07452.02173-.02173.04813-.03259.07916-.03259h.21889c.03415 0 .06055.01086.07916.03259.01863.01863.02794.04347.02794.07452v3.09241c0 .03105-.00931.05743-.02794.07916-.01863.01863-.04501.02794-.07916.02794zm1.13172 0c-.03105 0-.05743-.00931-.07916-.02794-.01863-.02173-.02794-.04813-.02794-.07916v-3.09241c0-.03105.00931-.05589.02794-.07452.02173-.02173.04813-.03259.07916-.03259h.21889c.03415 0 .06055.01086.07916.03259.01863.01863.02794.04347.02794.07452v3.09241c0 .03105-.00931.05743-.02794.07916-.01863.01863-.04501.02794-.07916.02794zm1.69522.04657c-.15524 0-.29651-.03105-.42381-.09314-.1273-.0621-.22977-.14594-.30737-.2515-.07762-.10556-.11642-.2251-.11642-.35861 0-.21423.08694-.38499.2608-.5123.17387-.1273.40051-.21114.67996-.2515l.69392-.09779v-.13506c0-.14903-.04347-.26546-.1304-.34929-.08383-.08383-.22198-.12575-.41449-.12575-.13972 0-.25304.02794-.33998.08383-.08383.05589-.14282.1273-.17699.21423-.01863.04657-.05122.06985-.09779.06985h-.20956c-.03415 0-.06055-.00931-.07916-.02794-.01553-.02173-.02328-.04657-.02328-.07452 0-.04657.01707-.104.05122-.17232.03726-.06831.09315-.13506.16766-.20026s.1692-.11954.28409-.16299c.11798-.04657.2608-.06985.42847-.06985.18629 0 .34308.02484.47038.07452.1273.04657.22665.11021.29807.19095.07452.08073.1273.17232.15836.27478.03415.10246.05122.20647.05122.31203v1.50894c0 .03105-.01086.05743-.03259.07916-.01863.01863-.04347.02794-.07452.02794h-.21423c-.03415 0-.06055-.00931-.07916-.02794-.01863-.02173-.02794-.04813-.02794-.07916v-.20026c-.04036.05589-.0947.11177-.16299.16766-.06831.05278-.15369.09779-.25615.13506-.10246.03415-.2282.05122-.37724.05122l-.00005-.00002zm.09781-.34929c.1273 0 .24373-.02638.34929-.07916.10556-.05589.18784-.14127.24683-.25615.06209-.11488.09314-.25925.09314-.43312v-.1304l-.54024.07916c-.22044.03105-.38655.08383-.49832.15836-.11177.07141-.16766.16299-.16766.27478 0 .08693.02484.1599.07452.21889.05278.05589.11798.09779.1956.12575.08073.02794.16299.04192.24683.04192l.00002-.00002zm1.9048.30272c-.03105 0-.05743-.00931-.07916-.02794-.01863-.02173-.02794-.04813-.02794-.07916v-2.20753c0-.03105.00931-.05589.02794-.07452.02173-.02173.04813-.03259.07916-.03259h.21889c.03105 0 .05588.01086.07451.03259.02173.01863.03259.04347.03259.07452v.20493c.08073-.10556.18163-.19095.30272-.25615.12419-.06831.28255-.10246.47504-.10246.20181 0 .37257.04501.5123.13506.14282.08694.24994.20958.32135.36792.07141.15524.10712.33687.10712.54491v1.31334c0 .03105-.00931.05743-.02794.07916-.01863.01863-.04346.02794-.07451.02794h-.23286c-.03105 0-.05743-.00931-.07916-.02794-.01863-.02173-.02794-.04813-.02794-.07916v-1.29005c0-.21735-.05278-.38655-.15836-.50764-.10556-.12419-.2608-.18629-.46571-.18629-.1925 0-.34773.0621-.46571.18629-.11488.12109-.17232.2903-.17232.50764v1.29005c0 .03105-.01086.05743-.03259.07916-.01863.01863-.04347.02794-.07452.02794h-.23288z" fill="#25357a"/><path d="m143.44791 121.44946c-.03415 0-.06055-.00931-.07916-.02794-.01863-.02173-.02794-.04812-.02794-.07917v-3.04117c0-.03415.00931-.06054.02794-.07917.01863-.02173.04501-.0326.07916-.0326h1.92345c.03415 0 .06055.01087.07916.0326.01863.01863.02794.04502.02794.07917v.17697c0 .03415-.00931.06054-.02794.07917s-.04501.02794-.07916.02794h-1.58347v1.01993h1.481c.03415 0 .06055.01087.07916.0326.01863.01863.02794.04502.02794.07917v.17232c0 .03105-.00931.05744-.02794.07917-.01863.01863-.04501.02794-.07916.02794h-1.481v1.05719h1.62073c.03415 0 .06055.00931.07916.02794.01863.01863.02794.04502.02794.07917v.18163c0 .03105-.00931.05744-.02794.07917-.01863.01863-.04501.02794-.07916.02794h-1.96069z" fill="#25357a"/><path d="m146.86148 121.44946c-.04657 0-.08383-.01087-.11177-.0326-.02484-.02173-.04501-.04968-.06055-.08383l-.86159-2.16095c-.00621-.01552-.00931-.03105-.00931-.04657 0-.02794.00931-.05123.02794-.06986s.04192-.02794.06985-.02794h.22356c.03415 0 .06055.00931.07916.02794s.0295.03571.03259.05123l.71255 1.83495.7079-1.83495c.00621-.01552.01707-.0326.03259-.05123.01863-.01863.04501-.02794.07916-.02794h.2282c.02484 0 .04657.00931.0652.02794.02173.01863.03259.04191.03259.06986 0 .01552-.0031.03105-.00931.04657l-.86626 2.16095c-.01242.03415-.03259.0621-.06055.08383-.02484.02173-.0621.0326-.11177.0326h-.20026.00005z" fill="#25357a"/><path d="m149.33023 121.49604c-.31979 0-.57439-.0978-.76379-.29341-.18939-.19871-.29341-.46883-.31203-.81036-.00311-.04036-.00465-.09159-.00465-.15369 0-.0652.00156-.11798.00465-.15835.01242-.22044.06364-.41294.15369-.5775.09004-.16766.21268-.29651.36792-.38655.15836-.09004.34308-.13506.55421-.13506.23598 0 .43312.04968.59148.14903.16145.09935.28409.24062.36792.42381.08383.18318.12575.39742.12575.6427v.07917c0 .03415-.01086.06054-.03259.07917-.01863.01863-.04347.02794-.07452.02794h-1.6114v.04191c.00621.1273.03415.24683.08383.35861.04968.10867.12109.19716.21423.26546.09314.06831.20493.10246.33533.10246.11177 0 .20493-.01708.27943-.05123.07452-.03415.13506-.07141.18163-.11177.04657-.04347.07762-.07607.09314-.0978.02794-.04036.04968-.06365.0652-.06986.01552-.00931.04036-.01397.07452-.01397h.22356c.03105 0 .05589.00931.07452.02794.02173.01552.03105.03881.02794.06986-.00311.04657-.02795.10401-.07452.17232-.04657.0652-.11333.1304-.20026.1956-.08694.0652-.1925.11954-.3167.163-.12419.04036-.26701.06054-.42847.06054zm-.63339-1.43443h1.27608v-.01397c0-.13972-.02638-.26391-.07916-.37258-.04968-.10867-.12263-.19405-.21889-.25615-.09625-.0652-.21114-.0978-.34464-.0978s-.24838.0326-.34464.0978c-.09314.0621-.16457.14748-.21423.25615-.04968.10867-.07452.23286-.07452.37258z" fill="#25357a"/><path d="m150.96451 121.44946c-.03105 0-.05743-.00931-.07916-.02794-.01863-.02173-.02794-.04812-.02794-.07917v-2.20287c0-.03105.00931-.05744.02794-.07917.02173-.02173.04813-.0326.07916-.0326h.21423c.03105 0 .05743.01087.07916.0326s.03259.04813.03259.07917v.20492c.0621-.10556.14748-.18474.25615-.23752s.23907-.07917.3912-.07917h.18629c.03105 0 .05589.01087.07452.0326.01863.01863.02794.04347.02794.07452v.19095c0 .03105-.00931.05589-.02794.07452s-.04347.02794-.07452.02794h-.27943c-.16766 0-.29961.04968-.39586.14903-.09625.09625-.14436.2282-.14436.39586v1.36923c0 .03105-.01086.05744-.03259.07917-.02173.01863-.04813.02794-.07916.02794h-.22823z" fill="#25357a"/><path d="m153.05074 122.33434c-.02484 0-.04657-.00931-.0652-.02794s-.02794-.04036-.02794-.0652c0-.01242.00157-.02484.0047-.03726s.00934-.02794.01863-.04657l.35857-.85227-.88953-2.10041c-.01552-.03726-.02328-.06365-.02328-.07917 0-.02794.00931-.05123.02794-.06986s.04192-.02794.06985-.02794h.2282c.03105 0 .05589.00776.07452.02329.01863.01552.03105.03415.03726.05589l.7079 1.69523.72653-1.69523c.00931-.02173.02173-.04036.03726-.05589.01863-.01552.04501-.02329.07916-.02329h.21889c.02794 0 .05122.00931.06985.02794s.02794.04036.02794.0652c0 .01552-.00777.04347-.02328.08383l-1.32265 3.05049c-.00931.02173-.02328.04036-.04192.05589-.01553.01552-.04037.02329-.07452.02329h-.21889v-.00002zm2.13787-.88488c-.03105 0-.05743-.00931-.07916-.02794-.01863-.02173-.02794-.04812-.02794-.07917v-2.20753c0-.03105.00931-.05589.02794-.07452.02173-.02173.04813-.0326.07916-.0326h.20956c.03105 0 .05589.01087.07452.0326.02173.01863.03259.04347.03259.07452v.163c.07141-.09625.16145-.17232.27013-.2282.10867-.05899.23907-.08849.3912-.08849.35085-.00311.59923.13972.74516.42847.07141-.1304.17542-.23441.31203-.31203s.29185-.11643.46571-.11643c.16145 0 .30737.03726.43777.11177.13351.07452.23752.18784.31203.33998.07762.14903.11642.33687.11642.56352v1.34594c0 .03105-.01086.05744-.03259.07917-.01863.01863-.04347.02794-.07452.02794h-.21889c-.03105 0-.05743-.00931-.07916-.02794-.01863-.02173-.02794-.04812-.02794-.07917v-1.30402c0-.17387-.02484-.31048-.07452-.40984-.04967-.09935-.11642-.16921-.20026-.20958-.08383-.04036-.17542-.06054-.27478-.06054-.08073 0-.16299.02018-.24683.06054s-.15369.11022-.20958.20958c-.05278.09935-.07916.23597-.07916.40984v1.30402c0 .03105-.01086.05744-.03259.07917-.01863.01863-.04347.02794-.07452.02794h-.21889c-.03105 0-.05743-.00931-.07916-.02794-.01863-.02173-.02794-.04812-.02794-.07917v-1.30402c0-.17387-.02638-.31048-.07916-.40984s-.12109-.16921-.20493-.20958c-.08383-.04036-.17232-.06054-.26546-.06054-.08073 0-.16299.02018-.24683.06054s-.15369.11022-.20958.20958c-.05278.09935-.07916.23441-.07916.40518v1.30868c0 .03105-.01086.05744-.03259.07917-.01865.01863-.04349.02794-.07452.02794h-.22357z" fill="#25357a"/><path d="m159.78075 121.49604c-.15524 0-.29651-.03105-.42381-.09314-.1273-.0621-.22977-.14593-.30737-.25149-.07762-.10556-.11642-.2251-.11642-.35861 0-.21423.08693-.385.2608-.5123s.40051-.21113.67995-.25149l.69392-.0978v-.13506c0-.14903-.04347-.26546-.1304-.34929-.08383-.08383-.22198-.12575-.41449-.12575-.13972 0-.25304.02794-.33998.08383-.08383.05589-.14282.1273-.17699.21423-.01863.04657-.05122.06986-.09779.06986h-.20958c-.03415 0-.06055-.00931-.07916-.02794-.01553-.02173-.02328-.04657-.02328-.07452 0-.04657.01707-.10401.05122-.17232.03726-.06831.09315-.13506.16766-.20026s.1692-.11954.28409-.163c.11798-.04657.2608-.06986.42847-.06986.18629 0 .34308.02484.47038.07452.1273.04657.22665.11022.29807.19095.07451.08073.1273.17232.15836.27478.03415.10246.05122.20647.05122.31203v1.50894c0 .03105-.01086.05744-.03259.07917-.01863.01863-.04347.02794-.07452.02794h-.21423c-.03415 0-.06055-.00931-.07916-.02794-.01863-.02173-.02794-.04812-.02794-.07917v-.20026c-.04036.05589-.0947.11177-.16299.16766-.06831.05278-.15369.0978-.25615.13506-.10246.03415-.2282.05123-.37724.05123l-.00002-.00002zm.09779-.3493c.1273 0 .24373-.02639.34929-.07917.10556-.05589.18784-.14127.24683-.25615.06209-.11488.09314-.25925.09314-.43312v-.1304l-.54024.07917c-.22044.03105-.38655.08383-.49832.15835-.11177.07141-.16766.163-.16766.27478 0 .08693.02484.1599.07452.21889.05278.05589.11798.0978.1956.12575.08072.02794.16299.04192.24683.04192l.00002-.00002z" fill="#25357a"/><path d="m161.55045 121.44946c-.03105 0-.05743-.00931-.07916-.02794-.01863-.02173-.02794-.04812-.02794-.07917v-2.20753c0-.03105.00931-.05589.02794-.07452.02173-.02173.04813-.0326.07916-.0326h.21889c.03105 0 .05589.01087.07452.0326.02173.01863.03259.04347.03259.07452v.20492c.08073-.10556.18163-.19095.30272-.25615.12419-.06831.28255-.10246.47504-.10246.20181 0 .37257.04502.51228.13506.14282.08694.24994.20958.32135.36792.07141.15524.10712.33687.10712.5449v1.31334c0 .03105-.00931.05744-.02794.07917-.01863.01863-.04347.02794-.07452.02794h-.23286c-.03105 0-.05743-.00931-.07916-.02794-.01863-.02173-.02794-.04812-.02794-.07917v-1.29005c0-.21734-.05278-.38655-.15834-.50764-.10556-.12419-.2608-.18629-.46571-.18629-.1925 0-.34773.0621-.46571.18629-.11488.12109-.17232.2903-.17232.50764v1.29005c0 .03105-.01086.05744-.03259.07917-.01863.01863-.04347.02794-.07452.02794h-.23288z" fill="#25357a"/><path d="m89.08023 121.44934c-.03415 0-.06054-.00931-.07917-.02794-.01863-.02173-.02794-.04812-.02794-.07917v-3.04117c0-.03415.00931-.06054.02794-.07917.01863-.02173.04502-.0326.07917-.0326h1.27608c.23286 0 .42226.03881.56818.11643.14903.07452.2577.17697.32601.30738.07141.1304.10712.27633.10712.43778 0 .1273-.02173.23752-.0652.33066-.04036.09004-.09159.16456-.15369.22355-.0621.05589-.12264.09935-.18163.1304.12109.05899.2282.15524.32135.28875.09625.13351.14437.29496.14437.48435 0 .17077-.03881.32756-.11643.47038s-.19405.2577-.34929.34464c-.15214.08383-.34153.12575-.56818.12575h-1.30868v-.00003zm.34929-.37723h.89885c.20181 0 .35705-.05433.46572-.163s.163-.24218.163-.40052c0-.16456-.05433-.29962-.163-.40518-.10867-.10867-.26391-.163-.46572-.163h-.89885v1.13171zm0-1.50429h.85693c.19871 0 .34929-.04502.45175-.13506.10246-.09314.15369-.21889.15369-.37724s-.05123-.27943-.15369-.36326-.25304-.12575-.45175-.12575h-.85693zm2.70119 1.88152c-.03105 0-.05744-.00931-.07917-.02794-.01863-.02173-.02794-.04812-.02794-.07917v-2.20287c0-.03105.00931-.05744.02794-.07917.02173-.02173.04812-.0326.07917-.0326h.21423c.03105 0 .05744.01087.07917.0326s.0326.04813.0326.07917v.20492c.0621-.10556.14748-.18474.25615-.23752s.23907-.07917.39121-.07917h.18629c.03105 0 .05589.01087.07452.0326.01863.01863.02794.04347.02794.07452v.19095c0 .03105-.00931.05589-.02794.07452s-.04347.02794-.07452.02794h-.27943c-.16766 0-.29962.04968-.39586.14903-.09625.09625-.14437.2282-.14437.39586v1.36923c0 .03105-.01087.05744-.0326.07917-.02173.01863-.04812.02794-.07917.02794h-.22823zm2.60922.04657c-.23597 0-.43312-.04502-.59147-.13506s-.27943-.21423-.36326-.37258c-.08383-.16145-.1304-.34464-.13972-.54955-.00311-.05278-.00466-.11954-.00466-.20026 0-.08383.00155-.15058.00466-.20026.00931-.20802.05589-.39121.13972-.54955.08694-.15835.20958-.28254.36792-.37258s.35395-.13506.58681-.13506.42847.04502.58681.13506.27943.21423.36326.37258c.08694.15835.13506.34153.14437.54955.00311.04968.00466.11643.00466.20026 0 .08073-.00155.14748-.00466.20026-.00931.20492-.05589.3881-.13972.54955-.08383.15835-.20492.28254-.36326.37258-.15835.09004-.3555.13506-.59146.13506zm0-.3586c.1925 0 .34619-.06054.46107-.18163.11488-.12419.17697-.30427.18629-.54024.00311-.04657.00466-.10556.00466-.17697s-.00155-.1304-.00466-.17697c-.00931-.23597-.07141-.41449-.18629-.53558-.11488-.12419-.26857-.18629-.46107-.18629s-.34774.0621-.46572.18629c-.11488.12109-.17542.29962-.18163.53558-.00311.04657-.00466.10556-.00466.17697s.00155.1304.00466.17697c.00621.23597.06675.41605.18163.54024.11798.12109.27322.18163.46572.18163zm2.60396.31203c-.17387 0-.31514-.0326-.42381-.0978-.10867-.06831-.18784-.163-.23752-.28409-.04968-.12419-.07452-.27012-.07452-.43778v-1.22951h-.36326c-.03105 0-.05744-.00931-.07917-.02794-.01863-.02173-.02794-.04813-.02794-.07917v-.15835c0-.03105.00931-.05589.02794-.07452.02173-.02173.04812-.0326.07917-.0326h.36326v-.77776c0-.03105.00931-.05589.02794-.07452.02173-.02173.04813-.0326.07917-.0326h.21889c.03105 0 .05589.01087.07452.0326.02173.01863.0326.04347.0326.07452v.77776h.5775c.03105 0 .05589.01087.07452.0326.02173.01863.0326.04347.0326.07452v.15835c0 .03105-.01087.05744-.0326.07917-.01863.01863-.04347.02794-.07452.02794h-.5775v1.19691c0 .14593.02484.2608.07452.34464.04968.08383.13816.12575.26546.12575h.28409c.03105 0 .05589.01087.07452.0326.02173.01863.0326.04347.0326.07452v.16766c0 .03105-.01087.05744-.0326.07917-.01863.01863-.04347.02794-.07452.02794h-.32135.00002zm.98734 0c-.03105 0-.05744-.00931-.07917-.02794-.01863-.02173-.02794-.04812-.02794-.07917v-3.0924c0-.03105.00931-.05589.02794-.07452.02173-.02173.04813-.0326.07917-.0326h.23286c.03415 0 .06054.01087.07917.0326.01863.01863.02794.04347.02794.07452v1.08513c.08383-.10556.18629-.19095.30738-.25615s.27478-.0978.46107-.0978c.20181 0 .37258.04502.51229.13506.14282.08694.24994.20958.32135.36792.07451.15524.11177.33687.11177.5449v1.31334c0 .03105-.00931.05744-.02794.07917-.01863.01863-.04502.02794-.07917.02794h-.23286c-.03105 0-.05744-.00931-.07917-.02794-.01863-.02173-.02794-.04812-.02794-.07917v-1.29005c0-.21734-.05278-.38655-.15835-.50764-.10556-.12419-.26081-.18629-.46572-.18629-.1925 0-.34774.0621-.46572.18629-.11798.12109-.17697.2903-.17697.50764v1.29005c0 .03105-.00931.05744-.02794.07917-.01864.01863-.04503.02794-.07918.02794zm3.68852.04657c-.3198 0-.57439-.0978-.76379-.29341-.18939-.19871-.29341-.46883-.31203-.81036-.00313-.04036-.0047-.09159-.0047-.15369 0-.0652.00157-.11798.0047-.15835.01242-.22044.06365-.41294.15369-.5775.09004-.16766.21268-.29651.36792-.38655.15835-.09004.34308-.13506.55421-.13506.23597 0 .43312.04968.59147.14903.16145.09935.28409.24062.36792.42381s.12574.39742.12574.6427v.07917c0 .03415-.01087.06054-.0326.07917-.01863.01863-.04346.02794-.07451.02794h-1.6114v.04191c.0062.1273.03414.24683.08383.35861.04968.10867.12109.19716.21423.26546.09314.06831.20492.10246.33532.10246.11177 0 .20492-.01708.27943-.05123.07452-.03415.13506-.07141.18163-.11177.04657-.04347.07762-.07607.09314-.0978.02794-.04036.04967-.06365.0652-.06986.01553-.00931.04037-.01397.07452-.01397h.22355c.03105 0 .05588.00931.07451.02794.02173.01552.03105.03881.02794.06986-.00313.04657-.02797.10401-.07452.17232-.04657.0652-.11333.1304-.20026.1956-.08694.0652-.1925.11954-.31669.163-.12419.04036-.26701.06054-.42847.06054v.00003zm-.63338-1.43442h1.27608v-.01397c0-.13972-.02639-.26391-.07917-.37258-.04967-.10867-.12264-.19405-.21889-.25615-.09625-.0652-.21113-.0978-.34464-.0978s-.24839.0326-.34464.0978c-.09314.0621-.16456.14748-.21423.25615-.04968.10867-.07452.23286-.07452.37258v.01397h.00002zm2.3845 1.38785c-.03105 0-.05744-.00931-.07917-.02794-.01863-.02173-.02794-.04812-.02794-.07917v-2.20287c0-.03105.00931-.05744.02794-.07917.02173-.02173.04812-.0326.07917-.0326h.21423c.03105 0 .05744.01087.07917.0326s.0326.04813.0326.07917v.20492c.06209-.10556.14748-.18474.25615-.23752s.23907-.07917.39121-.07917h.18629c.03105 0 .05589.01087.07452.0326.01863.01863.02794.04347.02794.07452v.19095c0 .03105-.00931.05589-.02794.07452s-.04347.02794-.07452.02794h-.27943c-.16766 0-.29961.04968-.39586.14903-.09625.09625-.14437.2282-.14437.39586v1.36923c0 .03105-.01087.05744-.0326.07917-.02173.01863-.04812.02794-.07917.02794h-.22823zm2.86565 0c-.03105 0-.05744-.00931-.07917-.02794-.01863-.02173-.02794-.04812-.02794-.07917v-3.04117c0-.03415.00931-.06054.02794-.07917.02173-.02173.04812-.0326.07917-.0326h.23286c.03726 0 .0652.00931.08383.02794s.02949.03415.0326.04657l.98733 1.88152.99199-1.88152c.0062-.01242.01707-.02794.0326-.04657.01863-.01863.04657-.02794.08383-.02794h.2282c.03415 0 .06054.01087.07917.0326.02173.01863.0326.04502.0326.07917v3.04117c0 .03105-.01087.05744-.0326.07917-.01863.01863-.04502.02794-.07917.02794h-.2282c-.03105 0-.05744-.00931-.07917-.02794-.01863-.02173-.02794-.04812-.02794-.07917v-2.29136l-.77776 1.51826c-.01242.03105-.03105.05589-.05589.07452-.02484.01552-.05589.02329-.09314.02329h-.14437c-.04036 0-.07296-.00776-.0978-.02329-.02173-.01863-.04036-.04347-.05589-.07452l-.77776-1.51826v2.29136c0 .03105-.01087.05744-.0326.07917-.01863.01863-.04347.02794-.07452.02794h-.2282.00002zm4.20548.04657c-.15524 0-.29651-.03105-.42381-.09314-.1273-.0621-.22976-.14593-.30738-.25149s-.11643-.2251-.11643-.35861c0-.21423.08694-.385.2608-.5123s.40052-.21113.67996-.25149l.69393-.0978v-.13506c0-.14903-.04347-.26546-.1304-.34929-.08383-.08383-.22199-.12575-.41449-.12575-.13972 0-.25304.02794-.33998.08383-.08383.05589-.14282.1273-.17698.21423-.01863.04657-.05123.06986-.0978.06986h-.20958c-.03415 0-.06054-.00931-.07917-.02794-.01553-.02173-.02329-.04657-.02329-.07452 0-.04657.01708-.10401.05123-.17232.03726-.06831.09315-.13506.16766-.20026.07452-.0652.16921-.11954.28409-.163.11798-.04657.26081-.06986.42847-.06986.18629 0 .34308.02484.47038.07452.1273.04657.22665.11022.29806.19095.07451.08073.1273.17232.15834.27478.03415.10246.05123.20647.05123.31203v1.50894c0 .03105-.01087.05744-.0326.07917-.01863.01863-.04347.02794-.07452.02794h-.21423c-.03415 0-.06054-.00931-.07917-.02794-.01863-.02173-.02794-.04812-.02794-.07917v-.20026c-.04036.05589-.0947.11177-.163.16766-.06831.05278-.15369.0978-.25615.13506-.10246.03415-.22821.05123-.37724.05123l.00002-.00002zm.0978-.34929c.1273 0 .24373-.02639.34929-.07917.10557-.05589.18784-.14127.24683-.25615.06209-.11488.09314-.25925.09314-.43312v-.1304l-.54024.07917c-.22044.03105-.38655.08383-.49832.15835-.11177.07141-.16766.163-.16766.27478 0 .08693.02484.1599.07452.21889.05278.05589.11798.0978.1956.12575.08073.02794.163.04192.24683.04192v-.00002zm1.90481.30272c-.03105 0-.05744-.00931-.07917-.02794-.01863-.02173-.02794-.04812-.02794-.07917v-2.20287c0-.03105.00931-.05744.02794-.07917.02173-.02173.04812-.0326.07917-.0326h.21423c.03105 0 .05744.01087.07917.0326s.0326.04813.0326.07917v.20492c.06209-.10556.14747-.18474.25615-.23752.10867-.05278.23907-.07917.39121-.07917h.18629c.03105 0 .05589.01087.07452.0326.01863.01863.02794.04347.02794.07452v.19095c0 .03105-.00931.05589-.02794.07452s-.04347.02794-.07452.02794h-.27943c-.16766 0-.29961.04968-.39586.14903-.09625.09625-.14437.2282-.14437.39586v1.36923c0 .03105-.01087.05744-.0326.07917-.02173.01863-.04812.02794-.07917.02794h-.22823zm2.59524.04657c-.22044 0-.41139-.04192-.57284-.12575-.15834-.08693-.28098-.20958-.36792-.36792-.08694-.16145-.13351-.35395-.13972-.5775-.00313-.04657-.0047-.10867-.0047-.18629s.00157-.13972.0047-.18629c.0062-.22355.05277-.41449.13972-.57284.08694-.16145.20958-.28409.36792-.36792.16145-.08694.3524-.1304.57284-.1304.18008 0 .33377.02484.46107.07452.1304.04968.23752.11333.32135.19095s.14593.16145.18629.25149c.04347.09004.06676.17542.06986.25615.00313.03105-.00618.05589-.02794.07452-.02173.01863-.04812.02794-.07917.02794h-.22355c-.03105 0-.05433-.00621-.06986-.01863-.01553-.01552-.03105-.04036-.04657-.07452-.05589-.15214-.13195-.25925-.2282-.32135s-.21578-.09314-.35861-.09314c-.18629 0-.33842.05744-.45641.17232-.11488.11488-.17698.29962-.18629.55421-.00313.11177-.00313.22044 0 .32601.00931.2577.07141.44399.18629.55887.11798.11177.27012.16766.45641.16766.14282 0 .26236-.03105.35861-.09314s.17232-.16921.2282-.32135c.01553-.03415.03105-.05744.04657-.06986.01553-.01552.03881-.02329.06986-.02329h.22355c.03105 0 .05744.00931.07917.02794s.03105.04347.02794.07452c-.00313.0652-.0171.13195-.04191.20026-.02484.06831-.0652.13816-.12109.20958-.05278.06831-.11953.1304-.20026.18629-.08073.05278-.17853.09625-.29341.1304-.11178.03105-.23907.04657-.3819.04658zm2.49628 0c-.19871 0-.36792-.04347-.50764-.1304-.13661-.09004-.24062-.21423-.31203-.37258s-.10712-.33998-.10712-.5449v-1.31334c0-.03105.00931-.05589.02794-.07452.02173-.02173.04812-.0326.07917-.0326h.23286c.03105 0 .05588.01087.07451.0326.02173.01863.0326.04347.0326.07452v1.29005c0 .46262.20181.69393.60544.69393.1925 0 .34619-.06054.46107-.18163.11798-.12419.17698-.29496.17698-.5123v-1.29005c0-.03105.00932-.05589.02794-.07452.02173-.02173.04812-.0326.07917-.0326h.2282c.03415 0 .06054.01087.07917.0326.01863.01863.02794.04347.02794.07452v2.20753c0 .03105-.00931.05744-.02794.07917-.01862.01863-.045.02794-.07915.02794h-.21423c-.03105 0-.05744-.00931-.07917-.02794-.01863-.02173-.02794-.04812-.02794-.07917v-.20492c-.08383.10867-.1863.1956-.30738.2608-.11798.0652-.27478.0978-.47039.09781zm2.73845 0c-.17387 0-.3229-.02173-.44709-.0652s-.2251-.09625-.30272-.15835-.13661-.12419-.17697-.18629c-.03726-.0621-.05744-.11177-.06054-.14903-.00313-.03415.00773-.06054.0326-.07917.02484-.01863.04968-.02794.07452-.02794h.20492c.01863 0 .0326.0031.04191.00931.01242.0031.02794.01552.04657.03726.04036.04347.08538.08693.13506.1304s.11022.07917.18163.10712c.07451.02794.16611.04192.27477.04192.15835 0 .28875-.0295.39121-.08849.10246-.0621.15369-.15214.15369-.27012 0-.07762-.02173-.13972-.0652-.18629-.04036-.04657-.11488-.08849-.22355-.12575-.10556-.03726-.25149-.07607-.43778-.11643-.18629-.04347-.33377-.09625-.44244-.15835-.10867-.0652-.18629-.14127-.23286-.2282-.04657-.09004-.06986-.19095-.06986-.30272 0-.11488.03415-.2251.10246-.33066.06831-.10867.16766-.19716.29806-.26546.13351-.06831.29961-.10246.49832-.10246.16145 0 .29961.02018.41449.06054s.20958.09159.28409.15369c.07452.05899.1304.11798.16766.17697s.05744.10867.06054.14903c.00313.03105-.00618.05744-.02794.07917-.02173.01863-.04657.02794-.07451.02794h-.1956c-.02173 0-.04036-.00466-.05589-.01397-.01242-.00931-.02484-.02018-.03726-.0326-.03105-.04036-.0683-.08073-.11177-.12109-.04036-.04036-.09469-.07296-.163-.0978-.0652-.02794-.15213-.04191-.2608-.04191-.15524 0-.27167.0326-.34929.0978s-.11643.14748-.11643.24683c0 .05899.01707.11177.05123.15835.03415.04657.09936.08849.1956.12575.09625.03726.23907.07762.42847.12109.20492.04036.36637.0947.48435.163.11798.06831.20182.14748.25149.23752s.07451.19405.07451.31203c0 .1304-.03881.24994-.11643.35861-.07452.10867-.18629.1956-.33532.2608-.14593.0621-.32756.09314-.54489.09314z" fill="#25357a"/><path d="m438.03693 156.56543c-.04037 0-.07468-.01212-.10291-.03633-.02423-.02824-.03632-.06256-.03632-.10292v-.19374c0-.03633.0101-.07669.03027-.12109s.06055-.09283.12109-.14531l1.28354-1.28352c.20584-.17355.36731-.32088.48434-.44197.12109-.12512.20584-.24419.25427-.35721.05246-.11302.0787-.23007.0787-.35117 0-.23007-.06458-.4117-.19373-.54491-.12915-.13724-.32089-.20586-.57516-.20586-.16144 0-.30069.03432-.41776.10292-.11703.06458-.2099.1554-.2785.27245-.06458.11302-.10696.24219-.12714.38748-.00806.05247-.03027.08881-.06659.10898-.03229.02019-.06256.03027-.09082.03027h-.31482c-.03632 0-.06659-.01009-.09082-.03027-.02423-.02422-.03632-.05247-.03632-.08476.00403-.15338.03632-.30676.09686-.46013.06055-.15741.14935-.29868.26639-.42381.12109-.12512.2684-.22603.44196-.30272.17761-.08073.38345-.12109.61755-.12109.31888 0 .57919.05853.78101.17558.20584.11302.35721.26437.45407.45409.09686.1897.14532.39757.14532.6236 0 .1776-.03027.34106-.09082.49042-.06055.14531-.14935.28859-.26639.42986-.11301.13724-.25427.2785-.4238.42381l-1.16245 1.1806h1.88898c.0444 0 .0787.01212.10291.03633.02826.02422.04239.05853.04239.10292v.24823c0 .04036-.01413.07468-.04239.10292-.02423.02422-.05853.03633-.10291.03633h-2.66998l-.00006.00003zm4.78903 0c-.04037 0-.07468-.01212-.10291-.03633-.02423-.02824-.03632-.06256-.03632-.10292v-3.39046l-1.00504.77496c-.03229.02422-.06659.03432-.10291.03027-.03632-.00403-.06659-.0222-.09082-.05449l-.15741-.19978c-.02423-.03633-.0343-.07265-.03027-.10898.00806-.03633.02826-.0666.06055-.09082l1.31985-1.01714c.02826-.02019.0545-.03229.0787-.03633.02423-.00403.05045-.00604.0787-.00604h.30878c.04037 0 .07266.01413.09686.04237.02423.02422.03632.0565.03632.09686v3.95958c0 .04036-.01212.07468-.03632.10292-.02423.02422-.05652.03632-.09686.03632h-.32092zm1.35617 0c-.04037 0-.07468-.01212-.10291-.03633-.02423-.02824-.03632-.06256-.03632-.10292v-.19374c0-.03633.0101-.07669.03027-.12109s.06055-.09283.12109-.14531l1.28354-1.28352c.20584-.17355.36731-.32088.48434-.44197.12109-.12512.20584-.24419.25427-.35721.05246-.11302.0787-.23007.0787-.35117 0-.23007-.06458-.4117-.19373-.54491-.12915-.13724-.32089-.20586-.57516-.20586-.16144 0-.30069.03432-.41776.10292-.11703.06458-.2099.1554-.2785.27245-.06458.11302-.10696.24219-.12714.38748-.00806.05247-.03027.08881-.06659.10898-.03229.02019-.06256.03027-.09082.03027h-.31482c-.03632 0-.06659-.01009-.09082-.03027-.02423-.02422-.03632-.05247-.03632-.08476.00403-.15338.03632-.30676.09686-.46013.06055-.15741.14935-.29868.26639-.42381.12109-.12512.2684-.22603.44196-.30272.17761-.08073.38345-.12109.61755-.12109.31885 0 .57919.05853.78101.17558.20584.11302.35721.26437.45407.45409.09686.1897.14532.39757.14532.6236 0 .1776-.03027.34106-.09082.49042-.06055.14531-.14935.28859-.26639.42986-.11301.13724-.25427.2785-.4238.42381l-1.16245 1.1806h1.88898c.0444 0 .0787.01212.10291.03633.02826.02422.04239.05853.04239.10292v.24823c0 .04036-.01413.07468-.04239.10292-.02423.02422-.05853.03633-.10291.03633h-2.66998l-.00006.00003z" fill="#25357a"/><path d="m405.23407 176.82666c-.04037 0-.07468-.01212-.10291-.03633-.02423-.02824-.03632-.06256-.03632-.10292v-.19374c0-.03633.0101-.07669.03027-.12109s.06055-.09283.12109-.14531l1.28354-1.28352c.20584-.17355.36731-.32088.48434-.44197.12109-.12512.20584-.24419.25427-.35721.05246-.11302.0787-.23007.0787-.35117 0-.23007-.06458-.4117-.19373-.54491-.12915-.13724-.32089-.20586-.57516-.20586-.16144 0-.30069.03432-.41776.10292-.11703.06458-.2099.1554-.2785.27245-.06458.11302-.10696.24219-.12714.38748-.00806.05247-.03027.08881-.06659.10898-.03229.02019-.06256.03027-.09082.03027h-.31482c-.03632 0-.06659-.01009-.09082-.03027-.02423-.02422-.03632-.05247-.03632-.08476.00403-.15338.03632-.30676.09686-.46013.06055-.15741.14935-.29868.26639-.42381.12109-.12512.2684-.22603.44196-.30272.17761-.08073.38345-.12109.61755-.12109.31888 0 .57919.05853.78101.17558.20584.11302.35721.26437.45407.45409.09686.1897.14532.39757.14532.6236 0 .1776-.03027.34106-.09082.49042-.06055.14531-.14935.28859-.26639.42986-.11301.13724-.25427.2785-.4238.42381l-1.16245 1.1806h1.88898c.0444 0 .0787.01212.10291.03633.02826.02422.04239.05853.04239.10292v.24823c0 .04036-.01413.07468-.04239.10292-.02423.02422-.05853.03633-.10291.03633h-2.66998l-.00006.00003zm4.78903 0c-.04037 0-.07468-.01212-.10291-.03633-.02423-.02824-.03632-.06256-.03632-.10292v-3.39046l-1.00504.77496c-.03229.02422-.06659.03432-.10291.03027-.03632-.00403-.06659-.0222-.09082-.05449l-.15741-.19978c-.02423-.03633-.0343-.07265-.03027-.10898.00806-.03633.02826-.0666.06055-.09082l1.31985-1.01714c.02826-.02019.0545-.03229.0787-.03633.02423-.00403.05045-.00604.0787-.00604h.30878c.04037 0 .07266.01413.09686.04237.02423.02422.03632.0565.03632.09686v3.95958c0 .04036-.01212.07468-.03632.10292-.02423.02422-.05652.03632-.09686.03632h-.32092zm2.59128 0c-.04037 0-.07468-.01212-.10291-.03633-.02423-.02824-.03632-.06256-.03632-.10292v-3.39046l-1.00504.77496c-.03229.02422-.06659.03432-.10291.03027-.03632-.00403-.06659-.0222-.09082-.05449l-.15741-.19978c-.02423-.03633-.0343-.07265-.03027-.10898.00806-.03633.02826-.0666.06055-.09082l1.31985-1.01714c.02826-.02019.0545-.03229.0787-.03633.02423-.00403.05045-.00604.0787-.00604h.30878c.04037 0 .07266.01413.09686.04237.02423.02422.03632.0565.03632.09686v3.95958c0 .04036-.01212.07468-.03632.10292-.02423.02422-.05652.03632-.09686.03632h-.32092z" fill="#25357a"/><path d="m368.83008 182.21277c-.04037 0-.07468-.01212-.10291-.03633-.02423-.02824-.03632-.06256-.03632-.10292v-.19374c0-.03633.0101-.07669.03027-.12109s.06055-.09283.12109-.14531l1.28354-1.28352c.20584-.17355.36731-.32088.48434-.44197.12109-.12512.20584-.24419.25427-.35721.05246-.11302.0787-.23007.0787-.35117 0-.23007-.06458-.4117-.19373-.54491-.12915-.13724-.32089-.20586-.57516-.20586-.16144 0-.30069.03432-.41776.10292-.11703.06458-.2099.1554-.2785.27245-.06458.11302-.10696.24219-.12714.38748-.00806.05247-.03027.08881-.06659.10898-.03229.02019-.06256.03027-.09082.03027h-.31482c-.03632 0-.06659-.01009-.09082-.03027-.02423-.02422-.03632-.05247-.03632-.08476.00403-.15338.03632-.30676.09686-.46013.06055-.15741.14935-.29868.26639-.42381.12109-.12512.2684-.22603.44196-.30272.17761-.08073.38345-.12109.61755-.12109.31888 0 .57919.05853.78101.17558.20584.11302.35721.26437.45407.45409.09686.1897.14532.39757.14532.6236 0 .1776-.03027.34106-.09082.49042-.06055.14531-.14935.28859-.26639.42986-.11301.13724-.25427.2785-.4238.42381l-1.16245 1.1806h1.88898c.0444 0 .0787.01212.10291.03633.02826.02422.04239.05853.04239.10292v.24823c0 .04036-.01413.07468-.04239.10292-.02423.02422-.05853.03633-.10291.03633h-2.66998l-.00006.00003zm4.78903 0c-.04037 0-.07468-.01212-.10291-.03633-.02423-.02824-.03632-.06256-.03632-.10292v-3.39046l-1.00504.77496c-.03229.02422-.06659.03432-.10291.03027-.03632-.00403-.06659-.0222-.09082-.05449l-.15741-.19978c-.02423-.03633-.0343-.07265-.03027-.10898.00806-.03633.02826-.0666.06055-.09082l1.31985-1.01714c.02826-.02019.0545-.03229.0787-.03633.02423-.00403.05045-.00604.0787-.00604h.30878c.04037 0 .07266.01413.09686.04237.02423.02422.03632.0565.03632.09686v3.95958c0 .04036-.01212.07468-.03632.10292-.02423.02422-.05652.03632-.09686.03632h-.32092zm2.83951.06055c-.2785 0-.51462-.04237-.70837-.12714-.1897-.08881-.34509-.20988-.46619-.36327s-.2099-.32896-.26639-.52673c-.05246-.19778-.08273-.40765-.09082-.62965-.00403-.10898-.00806-.22401-.01212-.34509v-.36327c.00403-.12512.00806-.24419.01212-.35721.00403-.22198.0343-.43188.09082-.62965.06055-.20181.14935-.3774.26639-.52673.12109-.15338.2785-.27245.47223-.35721.19373-.08881.42783-.13319.7023-.13319.2785 0 .5126.0444.7023.13319.19373.08476.35117.20383.47223.35721.12109.14934.2099.32492.26639.52673.06055.19778.09283.40765.09686.62965.00403.11302.00604.23209.00604.35721.00403.12109.00403.24219 0 .36327 0 .12109-.00201.23611-.00604.34509-.00403.22198-.03632.43188-.09686.62965-.05652.19778-.14532.37335-.26639.52673-.11703.15338-.27246.27448-.46619.36327-.1897.08476-.42584.12714-.70837.12714zm0-.51462c.31482 0 .54691-.10292.69626-.30878.15338-.20988.23209-.49445.23611-.85367.00806-.11705.01212-.23007.01212-.33905v-.33299c0-.11302-.00403-.22401-.01212-.33299-.00403-.35117-.08273-.63168-.23611-.84155-.14935-.21391-.38144-.32088-.69626-.32088-.31079 0-.54288.10696-.69626.32088-.14935.20988-.22806.49042-.23611.84155 0 .10898-.00201.21999-.00604.33299v.33299c.00403.10898.00604.22198.00604.33905.00806.35922.08881.64378.24219.85367.15338.20586.38345.30878.69019.30878z" fill="#25357a"/><path d="m327.55969 186.34802c-.04037 0-.07468-.01212-.10291-.03633-.02423-.02824-.03632-.06256-.03632-.10292v-.19374c0-.03633.0101-.07669.03027-.12109s.06055-.09283.12109-.14531l1.28354-1.28352c.20584-.17355.36731-.32088.48434-.44197.12109-.12512.20584-.24419.25427-.35721.05246-.11302.0787-.23007.0787-.35117 0-.23007-.06458-.4117-.19373-.54491-.12915-.13724-.32089-.20586-.57516-.20586-.16144 0-.30069.03432-.41776.10292-.11703.06458-.2099.1554-.2785.27245-.06458.11302-.10696.24219-.12714.38748-.00806.05247-.03027.08881-.06659.10898-.03229.02019-.06256.03027-.09082.03027h-.31482c-.03632 0-.06659-.01009-.09082-.03027-.02423-.02422-.03632-.05247-.03632-.08476.00403-.15338.03632-.30676.09686-.46013.06055-.15741.14935-.29868.26639-.42381.12109-.12512.2684-.22603.44196-.30272.17761-.08073.38345-.12109.61755-.12109.31888 0 .57919.05853.78101.17558.20584.11302.35721.26437.45407.45409.09686.1897.14532.39757.14532.6236 0 .1776-.03027.34106-.09082.49042-.06055.14531-.14935.28859-.26639.42986-.11301.13724-.25427.2785-.4238.42381l-1.16245 1.1806h1.88898c.0444 0 .0787.01212.10291.03633.02826.02422.04239.05853.04239.10292v.24823c0 .04036-.01413.07468-.04239.10292-.02423.02422-.05853.03633-.10291.03633h-2.66998l-.00006.00003zm5.03726.06055c-.2785 0-.51462-.04237-.70837-.12714-.1897-.08881-.34509-.20988-.46619-.36327s-.2099-.32896-.26639-.52673c-.05246-.19778-.08273-.40765-.09082-.62965-.00403-.10898-.00806-.22401-.01212-.34509v-.36327c.00403-.12512.00806-.24419.01212-.35721.00403-.22198.0343-.43188.09082-.62965.06055-.20181.14935-.3774.26639-.52673.12109-.15338.2785-.27245.47223-.35721.19373-.08881.42783-.13319.7023-.13319.2785 0 .5126.0444.7023.13319.19373.08476.35117.20383.47223.35721.12109.14934.2099.32492.26639.52673.06055.19778.09283.40765.09686.62965.00403.11302.00604.23209.00604.35721.00403.12109.00403.24219 0 .36327 0 .12109-.00201.23611-.00604.34509-.00403.22198-.03632.43188-.09686.62965-.05652.19778-.14532.37335-.26639.52673-.11703.15338-.27246.27448-.46619.36327-.1897.08476-.42584.12714-.70837.12714zm0-.51463c.31482 0 .54691-.10292.69626-.30878.15338-.20988.23209-.49445.23611-.85367.00806-.11705.01212-.23007.01212-.33905v-.33299c0-.11302-.00403-.22401-.01212-.33299-.00403-.35117-.08273-.63168-.23611-.84155-.14935-.21391-.38144-.32088-.69626-.32088-.31079 0-.54288.10696-.69626.32088-.14935.20988-.22806.49042-.23611.84155 0 .10898-.00201.21999-.00604.33299v.33299c.00403.10898.00604.22198.00604.33905.00806.35922.08881.64378.24219.85367.15338.20586.38345.30878.69019.30878zm3.79007.51463c-.33502 0-.61957-.0666-.85367-.1998-.2341-.13724-.41373-.31483-.53885-.53279-.12109-.22198-.18164-.46214-.18164-.72047 0-.12109.01413-.23611.04239-.34509.03229-.11302.07062-.21796.11502-.31483.04843-.10091.09485-.1897.13925-.26639.04843-.08073.09082-.14531.12714-.19374l1.15033-1.60442c.02017-.02019.0444-.0444.07266-.07265.02826-.03229.07062-.04845.12714-.04845h.32089c.03632 0 .06458.01413.08475.04237.02423.02422.03632.05449.03632.09082 0 .01614-.00201.03229-.00604.04845-.00403.01212-.0101.0222-.01816.03027l-.88394 1.23511c.04843-.01614.10291-.02625.16348-.03027.06458-.00807.12512-.01212.18164-.01212.22198.00403.4238.0444.60544.12109s.33704.18163.46619.31483c.13321.12917.2341.28052.30273.45409.06863.16953.10291.35117.10294.54491 0 .25427-.06055.49242-.18164.71442-.12109.22198-.29868.40161-.53278.53883-.23007.13724-.51059.20586-.84158.20586v-.00003zm-.00607-.51463c.16953 0 .32693-.03633.47223-.10898s.26236-.1776.35117-.31483c.09283-.14127.13925-.31281.13925-.51462 0-.20586-.0444-.3774-.13321-.51462-.08881-.14127-.20786-.24622-.35721-.31483-.14532-.07265-.30273-.10898-.47223-.10898s-.32693.03633-.47223.10898c-.14532.06862-.26437.17355-.35721.31483-.08881.13724-.13321.30878-.13321.51462 0 .20181.0444.37335.13321.51462.09283.13724.21191.24219.35721.31483.14532.07265.30273.10898.47226.10898z" fill="#25357a"/><path d="m466.91467 156.56543c-.04037 0-.07468-.01212-.10291-.03633-.02423-.02824-.03632-.06256-.03632-.10292v-.19374c0-.03633.0101-.07669.03027-.12109s.06055-.09283.12109-.14531l1.28354-1.28352c.20584-.17355.36731-.32088.48434-.44197.12109-.12512.20584-.24419.25427-.35721.05246-.11302.0787-.23007.0787-.35117 0-.23007-.06458-.4117-.19373-.54491-.12915-.13724-.32089-.20586-.57516-.20586-.16144 0-.30069.03432-.41776.10292-.11703.06458-.2099.1554-.2785.27245-.06458.11302-.10696.24219-.12714.38748-.00806.05247-.03027.08881-.06659.10898-.03229.02019-.06256.03027-.09082.03027h-.31482c-.03632 0-.06659-.01009-.09082-.03027-.02423-.02422-.03632-.05247-.03632-.08476.00403-.15338.03632-.30676.09686-.46013.06055-.15741.14935-.29868.26639-.42381.12109-.12512.2684-.22603.44196-.30272.17761-.08073.38345-.12109.61755-.12109.31888 0 .57919.05853.78101.17558.20584.11302.35721.26437.45407.45409.09686.1897.14532.39757.14532.6236 0 .1776-.03027.34106-.09082.49042-.06055.14531-.14935.28859-.26639.42986-.11301.13724-.25427.2785-.4238.42381l-1.16245 1.1806h1.88898c.0444 0 .0787.01212.10291.03633.02826.02422.04239.05853.04239.10292v.24823c0 .04036-.01413.07468-.04239.10292-.02423.02422-.05853.03633-.10291.03633h-2.66998l-.00006.00003zm4.78903 0c-.04037 0-.07468-.01212-.10291-.03633-.02423-.02824-.03632-.06256-.03632-.10292v-3.39046l-1.00504.77496c-.03229.02422-.06659.03432-.10291.03027-.03632-.00403-.06659-.0222-.09082-.05449l-.15741-.19978c-.02423-.03633-.0343-.07265-.03027-.10898.00806-.03633.02826-.0666.06055-.09082l1.31985-1.01714c.02826-.02019.0545-.03229.0787-.03633.02423-.00403.05045-.00604.0787-.00604h.30878c.04037 0 .07266.01413.09686.04237.02423.02422.03632.0565.03632.09686v3.95958c0 .04036-.01212.07468-.03632.10292-.02423.02422-.05652.03632-.09686.03632h-.32092zm3.34809 0c-.04037 0-.07468-.01212-.10291-.03633-.02423-.02824-.03632-.06256-.03632-.10292v-.87183h-1.96164c-.04037 0-.07468-.01212-.10291-.03633-.02423-.02824-.03632-.06256-.03632-.10292v-.24219c0-.01614.00403-.04036.01212-.07265.01212-.03633.03027-.07265.0545-.10898l1.81631-2.561c.04843-.06862.12311-.10292.224-.10292h.43591c.04037 0 .07266.01413.09686.04237.02826.02422.04239.0565.04239.09686v2.561h.54489c.0444 0 .0787.01413.10291.04237.02826.02422.04239.0565.04239.09686v.24823c0 .04036-.01413.07468-.04239.10292-.02423.02422-.05652.03633-.09686.03633h-.55096v.87183c0 .04036-.01413.07468-.04239.10292-.02423.02422-.05652.03633-.09686.03633h-.30273v.00003zm-1.59232-1.52571h1.45911v-2.07666z" fill="#25357a"/><path d="m454.47955 223.40283c-.04037 0-.07468-.01212-.10291-.03633-.02423-.02824-.03632-.06256-.03632-.10292v-.19374c0-.03633.0101-.07669.03027-.12109s.06055-.09283.12109-.14531l1.28354-1.28352c.20584-.17355.36731-.32088.48434-.44197.12109-.12512.20584-.24419.25427-.35721.05246-.11302.0787-.23007.0787-.35117 0-.23007-.06458-.4117-.19373-.54491-.12915-.13724-.32089-.20586-.57516-.20586-.16144 0-.30069.03432-.41776.10292-.11703.06458-.2099.1554-.2785.27245-.06458.11302-.10696.24219-.12714.38748-.00806.05247-.03027.08881-.06659.10898-.03229.02019-.06256.03027-.09082.03027h-.31482c-.03632 0-.06659-.01009-.09082-.03027-.02423-.02422-.03632-.05247-.03632-.08476.00403-.15338.03632-.30676.09686-.46013.06055-.15741.14935-.29868.26639-.42381.12109-.12512.2684-.22603.44196-.30272.17761-.08073.38345-.12109.61755-.12109.31888 0 .57919.05853.78101.17558.20584.11302.35721.26437.45407.45409.09686.1897.14532.39757.14532.6236 0 .1776-.03027.34106-.09082.49042-.06055.14531-.14935.28859-.26639.42986-.11301.13724-.25427.2785-.4238.42381l-1.16245 1.1806h1.88898c.0444 0 .0787.01212.10291.03633.02826.02422.04239.05853.04239.10292v.24823c0 .04036-.01413.07468-.04239.10292-.02423.02422-.05853.03633-.10291.03633h-2.66998l-.00006.00003zm4.78904 0c-.04037 0-.07468-.01212-.10291-.03633-.02423-.02824-.03632-.06256-.03632-.10292v-3.39046l-1.00504.77496c-.03229.02422-.06659.03432-.10291.03027-.03632-.00403-.06659-.0222-.09082-.05449l-.15741-.19978c-.02423-.03633-.0343-.07265-.03027-.10898.00806-.03633.02826-.0666.06055-.09082l1.31985-1.01714c.02826-.02019.0545-.03229.0787-.03633.02423-.00403.05045-.00604.0787-.00604h.30878c.04037 0 .07266.01413.09686.04237.02423.02422.03632.0565.03632.09686v3.95958c0 .04036-.01212.07468-.03632.10292-.02423.02422-.05652.03632-.09686.03632h-.32092zm2.68814.06055c-.31885 0-.58929-.05449-.81128-.16347-.21796-.11302-.38547-.25832-.50253-.43591-.11301-.1776-.17355-.36528-.18164-.56306-.00403-.03633.00607-.06458.03027-.08476.02423-.02019.0545-.03027.09082-.03027h.32693c.03632 0 .06863.00807.09686.02422s.05045.05045.06659.10292c.04037.14934.10495.27245.19373.36932.09283.09283.19778.16145.31482.20586.12109.04036.24622.06055.37537.06055.17355 0 .33096-.03432.47223-.10292.14532-.07265.26035-.1776.34509-.31483.08475-.14127.12714-.31079.12714-.50858 0-.18163-.04239-.33704-.12714-.46619-.08072-.13319-.19373-.2341-.33905-.30272-.14127-.07265-.30069-.10898-.4783-.10898-.13321 0-.24219.01614-.32693.04843s-.15741.07063-.21796.11504c-.05652.0444-.10898.08273-.15741.11504-.0444.03229-.09485.04843-.15137.04843h-.31482c-.03632 0-.06863-.01212-.09686-.03633-.02826-.02824-.04037-.06055-.03632-.09686l.19373-2.02217c.00403-.04845.01816-.08476.04239-.10898.02826-.02824.06458-.04237.10898-.04237h2.11298c.04037 0 .07266.01413.09686.04237.02826.02422.04239.0565.04239.09686v.23611c0 .0444-.01413.0787-.04239.10292-.02423.02422-.05652.03633-.09686.03633h-1.74368l-.11502 1.19272c.05652-.03633.14731-.0787.27246-.12714.12512-.05247.29666-.0787.51462-.0787.19778 0 .38345.03027.55701.09082.17761.06055.33502.14934.47223.26639s.2442.26035.32089.42986c.07669.1655.11502.35721.11502.57516 0 .30676-.06863.56709-.20584.78102-.13321.21391-.31686.3774-.55096.49042-.23007.10898-.49445.16347-.79312.16347h.00009z" fill="#25357a"/><path d="m527.65839 216.22815c0 .04036-.01208.07468-.03632.10292-.02826.02422-.06256.03633-.10291.03633h-.19373c-.03632 0-.07666-.01009-.12109-.03027-.04437-.02019-.09283-.06055-.14532-.12109l-1.28351-1.28352c-.17358-.20586-.32086-.36729-.44196-.48434-.12512-.12109-.2442-.20586-.35724-.25427-.11304-.05247-.23004-.0787-.35114-.0787-.23004 0-.41168.06458-.54492.19374-.13721.12917-.20587.32088-.20587.57516 0 .16145.0343.3007.10291.41776.06458.11705.1554.20988.27246.2785.11304.06458.24219.10696.38745.12714.05249.00807.08881.03027.10901.0666.0202.03229.03027.06256.03027.09082v.31483c0 .03633-.01007.0666-.03027.09082-.02423.02422-.05249.03633-.08478.03633-.15338-.00404-.30676-.03633-.46014-.09686-.15741-.06055-.29871-.14934-.42383-.26639-.12512-.12109-.22601-.26842-.30273-.44197-.08075-.1776-.12109-.38345-.12109-.61755 0-.31886.05853-.57919.1756-.78102.11304-.20586.2644-.35721.4541-.45409.1897-.09686.39758-.14531.6236-.14531.17761 0 .34106.03027.49042.09082.14532.06055.28857.14934.42987.26639.13721.11302.2785.25427.42383.42381l1.1806 1.16245v-1.88898c0-.0444.01208-.0787.03632-.10292.02423-.02824.05853-.04237.10291-.04237h.24823c.04034 0 .07465.01413.10291.04237.02423.02422.03632.05853.03632.10292v2.66998l.00006-.00003zm0-4.78903c0 .04036-.01208.07468-.03632.10292-.02826.02422-.06256.03633-.10291.03633h-3.39044l.77496 1.00504c.02423.03229.0343.0666.03027.10292-.00403.03633-.02222.0666-.0545.09082l-.19977.15741c-.03632.02422-.07263.03432-.10901.03027-.03632-.00807-.06659-.02824-.09082-.06055l-1.01715-1.31985c-.0202-.02824-.03229-.05449-.03632-.0787s-.00604-.05045-.00604-.0787v-.30878c0-.04036.01416-.07265.04236-.09686.02423-.02422.05652-.03633.09686-.03633h3.95959c.04034 0 .07465.01212.10291.03633.02423.02422.03632.0565.03632.09686v.32088zm0-1.82238c0 .03633-.01208.0666-.03632.09082-.02826.02019-.06055.03027-.09686.03027-.01208 0-.03027-.00404-.0545-.01212l-3.52368-1.50755v1.98584c0 .04036-.01208.07468-.03632.10292-.02826.02422-.06256.03633-.10291.03633h-.24219c-.04437 0-.07874-.01212-.10291-.03633-.02826-.02824-.04236-.06256-.04236-.10292v-2.4823c0-.0444.01416-.0787.04236-.10292.02423-.02824.05853-.04237.10291-.04237h.224c.05249 0 .09485.00404.12714.01212s.0686.02019.10901.03633l3.48126 1.49544c.03229.01212.06659.03229.10291.06055.03229.02422.04846.06055.04846.10898v.32693zm0-2.3525c0 .04036-.01208.07468-.03632.10292-.02826.02422-.06256.03633-.10291.03633h-.43591c-.04034 0-.07263-.01212-.09686-.03633-.02826-.02824-.04236-.06256-.04236-.10292v-.43591c0-.04036.01416-.07265.04236-.09686.02423-.02824.05652-.04237.09686-.04237h.43591c.04034 0 .07465.01413.10291.04237.02423.02422.03632.0565.03632.09686zm0-1.70017c0 .03633-.01208.0666-.03632.09082-.02826.02019-.06055.03027-.09686.03027-.01208 0-.03027-.00404-.0545-.01212l-3.52368-1.50755v1.98584c0 .04036-.01208.07468-.03632.10292-.02826.02422-.06256.03633-.10291.03633h-.24219c-.04437 0-.07874-.01212-.10291-.03633-.02826-.02824-.04236-.06256-.04236-.10292v-2.4823c0-.0444.01416-.0787.04236-.10294.02423-.02824.05853-.04237.10291-.04237h.224c.05249 0 .09485.00404.12714.01212s.0686.02019.10901.03633l3.48126 1.49544c.03229.01212.06659.03229.10291.06055.03229.02422.0484.06055.0484.10898v.32693z" fill="#25357a"/><path d="m527.65826 188.56995c0 .04036-.01208.07468-.03632.10292-.02826.02422-.06256.03633-.10291.03633h-.19373c-.03632 0-.07666-.01009-.12109-.03027-.04437-.02019-.09283-.06055-.14532-.12109l-1.28351-1.28352c-.17358-.20586-.32086-.36729-.44196-.48434-.12512-.12109-.2442-.20586-.35724-.25427-.11304-.05247-.23004-.0787-.35114-.0787-.23004 0-.41168.06458-.54492.19374-.13721.12917-.20587.32088-.20587.57516 0 .16145.0343.3007.10291.41776.06458.11705.1554.20988.27246.2785.11304.06458.24219.10696.38745.12714.05249.00807.08881.03027.10901.0666.0202.03229.03027.06256.03027.09082v.31483c0 .03633-.01007.0666-.03027.09082-.02423.02422-.05249.03633-.08478.03633-.15338-.00404-.30676-.03633-.46014-.09686-.15741-.06055-.29871-.14934-.42383-.26639-.12512-.12109-.22601-.26842-.30273-.44197-.08075-.1776-.12109-.38345-.12109-.61755 0-.31886.05853-.57919.1756-.78102.11304-.20586.2644-.35721.4541-.45409.1897-.09686.39758-.14531.6236-.14531.17761 0 .34106.03027.49042.09082.14532.06055.28857.14934.42987.26639.13721.11302.2785.25427.42383.42381l1.1806 1.16245v-1.88898c0-.0444.01208-.0787.03632-.10292.02423-.02824.05853-.04237.10291-.04237h.24823c.04034 0 .07465.01413.10291.04237.02423.02422.03632.05853.03632.10292v2.66998l.00006-.00003zm0-4.78904c0 .04036-.01208.07468-.03632.10292-.02826.02422-.06256.03633-.10291.03633h-3.39044l.77496 1.00504c.02423.03229.0343.0666.03027.10292-.00403.03633-.02222.0666-.0545.09082l-.19977.15741c-.03632.02422-.07263.03432-.10901.03027-.03632-.00807-.06659-.02824-.09082-.06055l-1.01715-1.31985c-.0202-.02824-.03229-.05449-.03632-.0787s-.00604-.05045-.00604-.0787v-.30878c0-.04036.01416-.07265.04236-.09686.02423-.02422.05652-.03633.09686-.03633h3.95959c.04034 0 .07465.01212.10291.03633.02423.02422.03632.0565.03632.09686v.32088zm0-1.82237c0 .03633-.01208.0666-.03632.09082-.02826.02019-.06055.03027-.09686.03027-.01208 0-.03027-.00404-.0545-.01212l-3.52368-1.50755v1.98584c0 .04036-.01208.07468-.03632.10292-.02826.02422-.06256.03633-.10291.03633h-.24219c-.04437 0-.07874-.01212-.10291-.03633-.02826-.02824-.04236-.06256-.04236-.10292v-2.4823c0-.0444.01416-.0787.04236-.10292.02423-.02824.05853-.04237.10291-.04237h.224c.05249 0 .09485.00404.12714.01212s.0686.02019.10901.03633l3.48126 1.49544c.03229.01212.06659.03229.10291.06055.03229.02422.04846.06055.04846.10898v.32693zm0-2.35251c0 .04036-.01208.07468-.03632.10292-.02826.02422-.06256.03633-.10291.03633h-.43591c-.04034 0-.07263-.01212-.09686-.03633-.02826-.02824-.04236-.06256-.04236-.10292v-.43591c0-.04036.01416-.07265.04236-.09686.02423-.02824.05652-.04237.09686-.04237h.43591c.04034 0 .07465.01413.10291.04237.02423.02422.03632.0565.03632.09686zm.06055-2.8471c0 .2341-.02826.45004-.08478.64783-.06055.19374-.14532.36125-.25427.5025-.11304.13724-.24823.24419-.40564.32088s-.33502.11504-.53278.11504c-.24622 0-.45813-.05853-.63568-.17558-.17761-.12109-.31281-.28052-.40564-.4783-.09283.15741-.21393.28052-.36328.36932s-.32697.13319-.53278.13319c-.24219 0-.44598-.05853-.61151-.17558-.16949-.12109-.30072-.28859-.39355-.50252-.09283-.21796-.13922-.47021-.13922-.75681 0-.28255.04645-.53078.13922-.74469.08881-.21796.21796-.38547.38745-.5025.16949-.12109.37335-.18163.61151-.18163.20587 0 .38544.0444.53882.13319.14935.08881.27045.20988.36328.36327.09283-.19778.22803-.35519.40564-.47224.17761-.12109.38953-.18163.63568-.18163.26239 0 .49042.0666.68414.19978.1897.13319.33704.31886.44196.55701.10089.23814.15137.51462.15137.82945zm-.48437 0c0-.18567-.03229-.35316-.09686-.5025s-.1554-.26842-.27246-.35721c-.12109-.08881-.26239-.13319-.42383-.13319-.16547 0-.30475.0444-.41772.13319-.11707.08881-.20587.20787-.26642.35721-.06458.14934-.09686.31685-.09686.5025s.03229.35519.09686.50858c.06055.14934.14935.26842.26642.35721.11304.08881.25226.13319.41772.13319.16144 0 .30273-.0444.42383-.13319.11707-.08881.20789-.20787.27246-.35721.06458-.15338.09686-.32291.09686-.50858zm-2.05243 0c0-.15338-.02826-.29465-.08478-.42381-.05652-.13319-.13318-.23814-.23004-.31483-.09686-.08073-.21393-.12109-.35114-.12109s-.25629.03835-.35724.11504c-.10089.07265-.17761.17558-.23004.30878-.05652.12917-.08478.27446-.08478.43591s.02826.30878.08478.44197c.05249.12917.12915.23209.23004.30878s.21997.11504.35724.11504c.1413 0 .26239-.03835.36328-.11504.09686-.07669.17157-.17963.224-.30878.05249-.13319.07874-.28052.07874-.44197l-.00006.00002z" fill="#25357a"/><path d="m527.6582 244.46452c0 .04036-.01208.07468-.03632.10292-.02826.02422-.06256.03633-.10291.03633h-.19373c-.03632 0-.07666-.01009-.12109-.03027-.04437-.02019-.09283-.06055-.14532-.12109l-1.28351-1.28352c-.17358-.20586-.32086-.36729-.44196-.48434-.12512-.12109-.2442-.20586-.35724-.25427-.11304-.05247-.23004-.0787-.35114-.0787-.23004 0-.41168.06458-.54492.19374-.13721.12917-.20587.32088-.20587.57516 0 .16145.0343.3007.10291.41776.06458.11705.1554.20988.27246.2785.11304.06458.24219.10696.38745.12714.05249.00807.08881.03027.10901.0666.0202.03229.03027.06256.03027.09082v.31483c0 .03633-.01007.0666-.03027.09082-.02423.02422-.05249.03633-.08478.03633-.15338-.00404-.30676-.03633-.46014-.09686-.15741-.06055-.29871-.14934-.42383-.26639-.12512-.12109-.22601-.26842-.30273-.44197-.08075-.1776-.12109-.38345-.12109-.61755 0-.31886.05853-.57919.1756-.78102.11304-.20586.2644-.35721.4541-.45409.1897-.09686.39758-.14531.6236-.14531.17761 0 .34106.03027.49042.09082.14532.06055.28857.14934.42987.26639.13721.11302.2785.25427.42383.42381l1.1806 1.16245v-1.88898c0-.0444.01208-.0787.03632-.10292.02423-.02824.05853-.04237.10291-.04237h.24823c.04034 0 .07465.01413.10291.04237.02423.02422.03632.05853.03632.10292v2.66998l.00006-.00003zm0-4.78901c0 .04036-.01208.07468-.03632.10292-.02826.02422-.06256.03633-.10291.03633h-3.39044l.77496 1.00504c.02423.03229.0343.0666.03027.10292-.00403.03633-.02222.0666-.0545.09082l-.19977.15741c-.03632.02422-.07263.03432-.10901.03027-.03632-.00807-.06659-.02824-.09082-.06055l-1.01715-1.31985c-.0202-.02824-.03229-.05449-.03632-.0787s-.00604-.05045-.00604-.0787v-.30878c0-.04036.01416-.07265.04236-.09686.02423-.02422.05652-.03633.09686-.03633h3.95959c.04034 0 .07465.01212.10291.03633.02423.02422.03632.0565.03632.09686v.32088zm0-1.82238c0 .03633-.01208.0666-.03632.09082-.02826.02019-.06055.03027-.09686.03027-.01208 0-.03027-.00404-.0545-.01212l-3.52368-1.50755v1.98584c0 .04036-.01208.07468-.03632.10292-.02826.02422-.06256.03633-.10291.03633h-.24219c-.04437 0-.07874-.01212-.10291-.03633-.02826-.02824-.04236-.06256-.04236-.10292v-2.4823c0-.0444.01416-.0787.04236-.10292.02423-.02824.05853-.04237.10291-.04237h.224c.05249 0 .09485.00404.12714.01212s.0686.02019.10901.03633l3.48126 1.49544c.03229.01212.06659.03229.10291.06055.03229.02422.04846.06055.04846.10898v.32693zm0-2.3525c0 .04036-.01208.07468-.03632.10292-.02826.02422-.06256.03633-.10291.03633h-.43591c-.04034 0-.07263-.01212-.09686-.03633-.02826-.02824-.04236-.06256-.04236-.10292v-.43591c0-.04036.01416-.07265.04236-.09686.02423-.02824.05652-.04237.09686-.04237h.43591c.04034 0 .07465.01413.10291.04237.02423.02422.03632.0565.03632.09686zm.06055-2.77671c0 .33501-.06659.61957-.19983.85367-.13721.2341-.31482.41373-.53278.53883-.22198.12109-.46216.18163-.72046.18163-.12109 0-.23615-.01413-.34509-.04237-.11304-.03229-.21796-.07063-.31482-.11504-.10089-.04843-.1897-.09485-.26642-.13925-.08075-.04843-.14532-.09081-.19373-.12714l-1.60443-1.15034c-.0202-.02019-.04437-.0444-.07263-.07265-.03229-.02824-.04846-.07063-.04846-.12714v-.32088c0-.03633.01416-.06458.04236-.08476.02423-.02422.0545-.03633.09082-.03633.01617 0 .03229.00203.04846.0061.01208.00407.02222.01012.03027.01816l1.23511.88394c-.01617-.04843-.02625-.10292-.03027-.16347-.00806-.06458-.01208-.12512-.01208-.18163.00403-.22198.04437-.42381.12109-.60544.07666-.18163.18164-.33704.31482-.46619.12915-.13319.28052-.2341.4541-.30272.16949-.06862.35114-.10292.54492-.10294.25427 0 .49243.06055.71442.18163.22198.12109.40161.29868.53882.53279.13721.23007.20587.51059.20587.84155v-.00005l-.00006.00002zm-.51465.00611c0-.16953-.03632-.32693-.10901-.47224s-.17761-.26236-.31482-.35117c-.1413-.09283-.31281-.13925-.51465-.13925-.20587 0-.37738.0444-.51465.13319-.1413.08881-.24622.20787-.31482.35721-.07263.14531-.10901.30272-.10901.47224s.03632.32693.10901.47224c.0686.14531.17358.26437.31482.35721.13721.08881.30878.13319.51465.13319.20178 0 .37335-.0444.51465-.13319.13721-.09283.24219-.2119.31482-.35721s.10901-.30272.10901-.47224z" fill="#25357a"/><path d="m527.65869 266.66956c0 .04037-.01208.07468-.03632.10291-.02826.02423-.06256.03632-.10291.03632h-.19373c-.03632 0-.07666-.0101-.12109-.03027-.04437-.02017-.09283-.06055-.14532-.12109l-1.28351-1.28354c-.17358-.20584-.32086-.36731-.44196-.48434-.12512-.12109-.2442-.20584-.35724-.25427-.11304-.05246-.23004-.0787-.35114-.0787-.23004 0-.41168.06458-.54492.19373-.13721.12915-.20587.32089-.20587.57516 0 .16144.0343.30069.10291.41776.06458.11703.1554.2099.27246.2785.11304.06458.24219.10696.38745.12714.05249.00806.08881.03027.10901.06659.0202.03229.03027.06256.03027.09082v.31482c0 .03632-.01007.06659-.03027.09082-.02423.02423-.05249.03632-.08478.03632-.15338-.00403-.30676-.03632-.46014-.09686-.15741-.06055-.29871-.14935-.42383-.26639-.12512-.12109-.22601-.2684-.30273-.44196-.08075-.17761-.12109-.38345-.12109-.61755 0-.31888.05853-.57919.1756-.78101.11304-.20584.2644-.35721.4541-.45407s.39758-.14532.6236-.14532c.17761 0 .34106.03027.49042.09082.14532.06055.28857.14935.42987.26639.13721.11301.2785.25427.42383.4238l1.1806 1.16245v-1.88898c0-.0444.01208-.0787.03632-.10291.02423-.02826.05853-.04239.10291-.04239h.24823c.04034 0 .07465.01413.10291.04239.02423.02423.03632.05853.03632.10291v2.66998l.00006.00006zm0-4.78904c0 .04037-.01208.07468-.03632.10291-.02826.02423-.06256.03632-.10291.03632h-3.39044l.77496 1.00504c.02423.03229.0343.06659.03027.10291s-.02222.06659-.0545.09082l-.19977.15741c-.03632.02423-.07263.0343-.10901.03027-.03632-.00806-.06659-.02826-.09082-.06055l-1.01715-1.31985c-.0202-.02826-.03229-.0545-.03632-.0787-.00403-.02423-.00604-.05045-.00604-.0787v-.30878c0-.04037.01416-.07266.04236-.09686.02423-.02423.05652-.03632.09686-.03632h3.95959c.04034 0 .07465.01212.10291.03632.02423.02423.03632.05652.03632.09686v.32092zm0-1.82238c0 .03632-.01208.06659-.03632.09082-.02826.02017-.06055.03027-.09686.03027-.01208 0-.03027-.00403-.0545-.01212l-3.52368-1.50754v1.98584c0 .04037-.01208.07468-.03632.10291-.02826.02423-.06256.03632-.10291.03632h-.24219c-.04437 0-.07874-.01212-.10291-.03632-.02826-.02826-.04236-.06256-.04236-.10291v-2.4823c0-.0444.01416-.0787.04236-.10291.02423-.02826.05853-.04239.10291-.04239h.224c.05249 0 .09485.00403.12714.01212.03229.00806.0686.02017.10901.03632l3.48126 1.49545c.03229.01212.06659.03229.10291.06055.03229.02423.04846.06055.04846.10898v.32693-.00003zm0-2.35251c0 .04037-.01208.07468-.03632.10291-.02826.02423-.06256.03632-.10291.03632h-.43591c-.04034 0-.07263-.01212-.09686-.03632-.02826-.02826-.04236-.06256-.04236-.10291v-.43591c0-.04037.01416-.07266.04236-.09686.02423-.02826.05652-.04239.09686-.04239h.43591c.04034 0 .07465.01413.10291.04239.02423.02423.03632.05652.03632.09686zm.06055-2.74871c0 .31886-.0545.58929-.16345.81129-.11304.21796-.2583.38547-.43591.50253-.17761.11301-.3653.17355-.56305.18164-.03632.00406-.06458-.00601-.08478-.03027-.0202-.02423-.03027-.0545-.03027-.09082v-.32693c0-.03633.00806-.06862.02423-.09686s.05048-.05045.10291-.0666c.14935-.04036.27246-.10493.36932-.19374.09283-.09283.16144-.19778.20587-.31483.04034-.12109.06055-.24622.06055-.37537 0-.17355-.0343-.33096-.10291-.47224-.07263-.14531-.17761-.26035-.31482-.34509-.1413-.08476-.31079-.12714-.50854-.12714-.18164 0-.33704.04237-.46619.12714-.13318.08073-.23407.19374-.30273.33905-.07263.14127-.10901.3007-.10901.4783 0 .13319.01611.24219.0484.32693.03229.08476.07062.15742.11505.21796.04437.0565.08276.10898.11505.15741.03229.0444.0484.09485.0484.15137v.31482c0 .03632-.01208.06863-.03632.09686-.02826.02826-.06055.04037-.09686.03632l-2.02216-.19373c-.04846-.00406-.08478-.01819-.10901-.04239-.02826-.02824-.04236-.06458-.04236-.10898v-2.11299c0-.04036.01416-.07265.04236-.09686.02423-.02824.05652-.04237.09686-.04237h.23615c.04437 0 .07874.01413.10291.04237.02423.02422.03632.0565.03632.09686v1.74367l1.19275.11504c-.03632-.0565-.07874-.14732-.12714-.27245-.05249-.12512-.07874-.29666-.07874-.51462 0-.19778.03027-.38345.09082-.55701.06055-.1776.14935-.33501.26642-.47224s.26031-.24419.42987-.32088c.16547-.07669.35724-.11504.5752-.11504.30676 0 .56708.06862.78101.20586.21393.13319.37738.31685.49042.55095.10901.23007.16345.49445.16345.79314l-.00006-.00005z" fill="#25357a"/><path d="m484.41309 215.5719c0 .04036-.01212.07468-.03632.10292-.02826.02422-.06256.03633-.10291.03633h-.19373c-.03632 0-.07669-.01009-.12109-.03027s-.09283-.06055-.14532-.12109l-1.28354-1.28352c-.17355-.20586-.32089-.36729-.44196-.48434-.12512-.12109-.2442-.20586-.35721-.25427-.11301-.05247-.23007-.0787-.35117-.0787-.23007 0-.41171.06458-.54489.19374-.13724.12917-.20584.32088-.20584.57516 0 .16145.0343.3007.10291.41776.06458.11705.1554.20988.27246.2785.11301.06458.24219.10696.38748.12714.05246.00807.08881.03027.10898.0666.02017.03229.03027.06256.03027.09082v.31483c0 .03633-.0101.0666-.03027.09082-.02423.02422-.05246.03633-.08475.03633-.15338-.00404-.30676-.03633-.46014-.09686-.15741-.06055-.29868-.14934-.4238-.26639-.12512-.12109-.22604-.26842-.30273-.44197-.08072-.1776-.12109-.38345-.12109-.61755 0-.31886.05853-.57919.17557-.78102.11301-.20586.26437-.35721.45407-.45409.1897-.09686.39758-.14531.6236-.14531.17761 0 .34106.03027.49042.09082.14532.06055.2886.14934.42987.26639.13724.11302.2785.25427.4238.42381l1.1806 1.16245v-1.88898c0-.0444.01212-.0787.03632-.10292.02423-.02824.05853-.04237.10291-.04237h.24823c.04037 0 .07468.01413.10291.04237.02423.02422.03632.05853.03632.10292v2.66998l.00006-.00003zm0-4.78903c0 .04036-.01212.07468-.03632.10292-.02826.02422-.06256.03633-.10291.03633h-3.39047l.77496 1.00504c.02423.03229.0343.0666.03027.10292-.00403.03633-.02219.0666-.0545.09082l-.1998.15741c-.03632.02422-.07266.03432-.10898.03027-.03632-.00807-.06659-.02824-.09082-.06055l-1.01715-1.31985c-.02017-.02824-.03229-.05449-.03632-.0787s-.00604-.05045-.00604-.0787v-.30878c0-.04036.01413-.07265.04239-.09686.02423-.02422.05652-.03633.09686-.03633h3.95959c.04037 0 .07468.01212.10291.03633.0242.02422.03632.0565.03632.09686v.32088zm0-1.82238c0 .03633-.01212.0666-.03632.09082-.02826.02019-.06055.03027-.09686.03027-.01212 0-.03027-.00404-.0545-.01212l-3.52365-1.50755v1.98584c0 .04036-.01212.07468-.03632.10292-.02826.02422-.06256.03633-.10291.03633h-.24219c-.0444 0-.0787-.01212-.10291-.03633-.02826-.02824-.04239-.06256-.04239-.10292v-2.4823c0-.0444.01413-.0787.04239-.10292.02423-.02824.05853-.04237.10291-.04237h.224c.05246 0 .09485.00404.12714.01212s.06863.02019.10898.03633l3.48129 1.49544c.03229.01212.06659.03229.10291.06055.03229.02422.04843.06055.04843.10898v.32693zm0-2.3525c0 .04036-.01212.07468-.03632.10292-.02826.02422-.06256.03633-.10291.03633h-.43591c-.04037 0-.07266-.01212-.09686-.03633-.02826-.02824-.04239-.06256-.04239-.10292v-.43591c0-.04036.01413-.07265.04239-.09686.02423-.02824.05652-.04237.09686-.04237h.43591c.04037 0 .07468.01413.10291.04237.02423.02422.03632.0565.03632.09686zm0-1.41675c0 .04036-.01212.07468-.03632.10294-.02826.02422-.06256.03633-.10291.03633h-.19373c-.03632 0-.07669-.01009-.12109-.03027s-.09283-.06055-.14532-.12109l-1.28354-1.28352c-.17355-.20586-.32089-.36729-.44196-.48434-.12512-.12109-.2442-.20586-.35721-.25427-.11301-.05247-.23007-.0787-.35117-.0787-.23007 0-.41171.06458-.54489.19374-.13724.12917-.20584.32088-.20584.57516 0 .16145.0343.3007.10291.41776.06458.11705.1554.20988.27246.2785.11301.06458.24219.10696.38748.12714.05246.00807.08881.03027.10898.0666.02017.03229.03027.06258.03027.09082v.31483c0 .03633-.0101.0666-.03027.09082-.02423.02422-.05246.03633-.08475.03633-.15338-.00407-.30676-.03636-.46014-.09686-.15741-.06055-.29868-.14935-.4238-.26639-.12512-.12109-.22604-.26842-.30273-.44197-.08072-.1776-.12109-.38344-.12109-.61755 0-.31886.05853-.57919.17557-.78102.11301-.20586.26437-.35721.45407-.45409.1897-.09686.39758-.14531.6236-.14529.17761 0 .34106.03027.49042.09082.14532.06055.2886.14934.42987.26639.13724.11302.2785.25427.4238.42381l1.1806 1.16245v-1.88898c0-.0444.01212-.0787.03632-.10292.02423-.02824.05853-.04237.10291-.04237h.24823c.04037 0 .07468.01413.10291.04237.02423.02422.03632.05852.03632.10291v2.66998l.00006-.00005z" fill="#25357a"/><path d="m484.41302 187.9137c0 .04036-.01212.07468-.03632.10292-.02826.02422-.06256.03633-.10291.03633h-.19373c-.03632 0-.07669-.01009-.12109-.03027s-.09283-.06055-.14532-.12109l-1.28354-1.28352c-.17355-.20586-.32089-.36729-.44196-.48434-.12512-.12109-.2442-.20586-.35721-.25427-.11301-.05247-.23007-.0787-.35117-.0787-.23007 0-.41171.06458-.54489.19374-.13724.12917-.20584.32088-.20584.57516 0 .16145.0343.3007.10291.41776.06458.11705.1554.20988.27246.2785.11301.06458.24219.10696.38748.12714.05246.00807.08881.03027.10898.0666.02017.03229.03027.06256.03027.09082v.31483c0 .03633-.0101.0666-.03027.09082-.02423.02422-.05246.03633-.08475.03633-.15338-.00404-.30676-.03633-.46014-.09686-.15741-.06055-.29868-.14934-.4238-.26639-.12512-.12109-.22604-.26842-.30273-.44197-.08072-.1776-.12109-.38345-.12109-.61755 0-.31886.05853-.57919.17557-.78102.11301-.20586.26437-.35721.45407-.45409.1897-.09686.39758-.14531.6236-.14531.17761 0 .34106.03027.49042.09082.14532.06055.2886.14934.42987.26639.13724.11302.2785.25427.4238.42381l1.1806 1.16245v-1.88898c0-.0444.01212-.0787.03632-.10292.02423-.02824.05853-.04237.10291-.04237h.24823c.04037 0 .07468.01413.10291.04237.02423.02422.03632.05853.03632.10292v2.66998l.00006-.00003zm0-4.78904c0 .04036-.01212.07468-.03632.10292-.02826.02422-.06256.03633-.10291.03633h-3.39047l.77496 1.00504c.02423.03229.0343.0666.03027.10292-.00403.03633-.02219.0666-.0545.09082l-.1998.15741c-.03632.02422-.07266.03432-.10898.03027-.03632-.00807-.06659-.02824-.09082-.06055l-1.01715-1.31985c-.02017-.02824-.03229-.05449-.03632-.0787s-.00604-.05045-.00604-.0787v-.30878c0-.04036.01413-.07265.04239-.09686.02423-.02422.05652-.03633.09686-.03633h3.95959c.04037 0 .07468.01212.10291.03633.0242.02422.03632.0565.03632.09686v.32088zm0-1.82237c0 .03633-.01212.0666-.03632.09082-.02826.02019-.06055.03027-.09686.03027-.01212 0-.03027-.00404-.0545-.01212l-3.52365-1.50755v1.98584c0 .04036-.01212.07468-.03632.10292-.02826.02422-.06256.03633-.10291.03633h-.24219c-.0444 0-.0787-.01212-.10291-.03633-.02826-.02824-.04239-.06256-.04239-.10292v-2.4823c0-.0444.01413-.0787.04239-.10292.02423-.02824.05853-.04237.10291-.04237h.224c.05246 0 .09485.00404.12714.01212s.06863.02019.10898.03633l3.48129 1.49544c.03229.01212.06659.03229.10291.06055.03229.02422.04843.06055.04843.10898v.32693zm0-2.35251c0 .04036-.01212.07468-.03632.10292-.02826.02422-.06256.03633-.10291.03633h-.43591c-.04037 0-.07266-.01212-.09686-.03633-.02826-.02824-.04239-.06256-.04239-.10292v-.43591c0-.04036.01413-.07265.04239-.09686.02423-.02824.05652-.04237.09686-.04237h.43591c.04037 0 .07468.01413.10291.04237.02423.02422.03632.0565.03632.09686zm0-2.24582c0 .04036-.01212.07468-.03632.10294-.02826.02422-.06256.03633-.10291.03633h-3.39047l.77496 1.00504c.02423.03229.0343.0666.03027.10294s-.02219.0666-.0545.09082l-.1998.15741c-.03632.02422-.07266.03432-.10898.03027-.03632-.00807-.06659-.02824-.09082-.06055l-1.01715-1.31985c-.02017-.02824-.03229-.05449-.03632-.0787s-.00604-.05046-.00604-.0787v-.30878c0-.04036.01413-.07265.04239-.09686.02423-.02422.05652-.03633.09686-.03633h3.95959c.04037 0 .07468.01212.10291.03633.0242.02422.03632.0565.03632.09686v.32088-.00003z" fill="#25357a"/><path d="m484.41296 244.8219c0 .04036-.01212.07468-.03632.10292-.02826.02422-.06256.03633-.10291.03633h-.19373c-.03632 0-.07669-.01009-.12109-.03027s-.09283-.06055-.14532-.12109l-1.28354-1.28352c-.17355-.20586-.32089-.36729-.44196-.48434-.12512-.12109-.2442-.20586-.35721-.25427-.11301-.05247-.23007-.0787-.35117-.0787-.23007 0-.41171.06458-.54489.19374-.13724.12917-.20584.32088-.20584.57516 0 .16145.0343.3007.10291.41776.06458.11705.1554.20988.27246.2785.11301.06458.24219.10696.38748.12714.05246.00807.08881.03027.10898.0666.02017.03229.03027.06256.03027.09082v.31483c0 .03633-.0101.0666-.03027.09082-.02423.02422-.05246.03633-.08475.03633-.15338-.00404-.30676-.03633-.46014-.09686-.15741-.06055-.29868-.14934-.4238-.26639-.12512-.12109-.22604-.26842-.30273-.44197-.08072-.1776-.12109-.38345-.12109-.61755 0-.31886.05853-.57919.17557-.78102.11301-.20586.26437-.35721.45407-.45409.1897-.09686.39758-.14531.6236-.14531.17761 0 .34106.03027.49042.09082.14532.06055.2886.14934.42987.26639.13724.11302.2785.25427.4238.42381l1.1806 1.16245v-1.88898c0-.0444.01212-.0787.03632-.10292.02423-.02824.05853-.04237.10291-.04237h.24823c.04037 0 .07468.01413.10291.04237.02423.02422.03632.05853.03632.10292v2.66998l.00006-.00003zm0-4.78903c0 .04036-.01212.07468-.03632.10292-.02826.02422-.06256.03633-.10291.03633h-3.39047l.77496 1.00504c.02423.03229.0343.0666.03027.10292-.00403.03633-.02219.0666-.0545.09082l-.1998.15741c-.03632.02422-.07266.03432-.10898.03027-.03632-.00807-.06659-.02824-.09082-.06055l-1.01715-1.31985c-.02017-.02824-.03229-.05449-.03632-.0787s-.00604-.05045-.00604-.0787v-.30878c0-.04036.01413-.07265.04239-.09686.02423-.02422.05652-.03633.09686-.03633h3.95959c.04037 0 .07468.01212.10291.03633.0242.02422.03632.0565.03632.09686v.32088zm0-1.82238c0 .03633-.01212.0666-.03632.09082-.02826.02019-.06055.03027-.09686.03027-.01212 0-.03027-.00404-.0545-.01212l-3.52365-1.50755v1.98584c0 .04036-.01212.07468-.03632.10292-.02826.02422-.06256.03633-.10291.03633h-.24219c-.0444 0-.0787-.01212-.10291-.03633-.02826-.02824-.04239-.06256-.04239-.10292v-2.4823c0-.0444.01413-.0787.04239-.10292.02423-.02824.05853-.04237.10291-.04237h.224c.05246 0 .09485.00404.12714.01212s.06863.02019.10898.03633l3.48129 1.49544c.03229.01212.06659.03229.10291.06055.03229.02422.04843.06055.04843.10898v.32693zm0-2.3525c0 .04036-.01212.07468-.03632.10292-.02826.02422-.06256.03633-.10291.03633h-.43591c-.04037 0-.07266-.01212-.09686-.03633-.02826-.02824-.04239-.06256-.04239-.10292v-.43591c0-.04036.01413-.07265.04239-.09686.02423-.02824.05652-.04237.09686-.04237h.43591c.04037 0 .07468.01413.10291.04237.02423.02422.03632.0565.03632.09686zm.06055-2.78504c0 .25429-.03027.47627-.09082.66599-.06458.1897-.14935.34914-.25427.4783-.10495.12917-.21997.22804-.34509.29668-.12512.06458-.25427.09889-.38748.10292-.03632 0-.06458-.01212-.08475-.03633s-.03027-.05449-.03027-.09082v-.29666c0-.03633.00806-.06862.02423-.09686s.05045-.05247.10291-.07265c.14532-.04036.25833-.10898.33905-.20586.08072-.10091.13724-.21594.16953-.34509.02826-.13319.04239-.26639.04239-.3996 0-.2785-.06659-.50453-.1998-.67809s-.32895-.26035-.58728-.26035c-.26236 0-.45004.0787-.56305.23611s-.16953.37537-.16953.65388v.57516c0 .04036-.01212.07468-.03632.10294-.02423.02422-.05853.03633-.10291.03633h-.16348c-.03632 0-.06659-.00604-.09082-.01816-.02826-.01614-.05246-.03229-.07266-.04843l-1.28354-1.17455v1.78606c0 .04036-.01212.07468-.03632.10294-.02423.02422-.05853.03633-.10291.03633h-.23007c-.0444 0-.0787-.01212-.10291-.03633-.02826-.02824-.04239-.06256-.04239-.10294v-2.4157c0-.0444.01413-.0787.04239-.10294.02423-.02824.05853-.04237.10291-.04237h.21796c.02826 0 .0545.00807.0787.02422.02017.01212.04037.02623.06055.04237l1.3017 1.1685.00604-.09686c.00806-.26639.05652-.49847.14532-.69626.08881-.20181.22198-.35721.3996-.46619.17355-.11302.39355-.16953.65994-.16953.27042 0 .50253.0666.69626.1998.1897.13319.33502.31685.43591.55095.10092.2341.15137.49847.15137.79314v-.00002l-.00009-.00006z" fill="#25357a"/><path d="m484.41345 268.32385c0 .04037-.01212.07468-.03632.10291-.02826.02423-.06256.03632-.10291.03632h-.19373c-.03632 0-.07669-.0101-.12109-.03027s-.09283-.06055-.14532-.12109l-1.28354-1.28354c-.17355-.20584-.32089-.36731-.44196-.48434-.12512-.12109-.2442-.20584-.35721-.25427-.11301-.05246-.23007-.0787-.35117-.0787-.23007 0-.41171.06458-.54489.19373-.13724.12915-.20584.32089-.20584.57516 0 .16144.0343.30069.10291.41776.06458.11703.1554.2099.27246.2785.11301.06458.24219.10696.38748.12714.05246.00806.08881.03027.10898.06659.02017.03229.03027.06256.03027.09082v.31482c0 .03632-.0101.06659-.03027.09082-.02423.02423-.05246.03632-.08475.03632-.15338-.00403-.30676-.03632-.46014-.09686-.15741-.06055-.29868-.14935-.4238-.26639-.12512-.12109-.22604-.2684-.30273-.44196-.08072-.17761-.12109-.38345-.12109-.61755 0-.31888.05853-.57919.17557-.78101.11301-.20584.26437-.35721.45407-.45407s.39758-.14532.6236-.14532c.17761 0 .34106.03027.49042.09082.14532.06055.2886.14935.42987.26639.13724.11301.2785.25427.4238.4238l1.1806 1.16245v-1.88898c0-.0444.01212-.0787.03632-.10291.02423-.02826.05853-.04239.10291-.04239h.24823c.04037 0 .07468.01413.10291.04239.02423.02423.03632.05853.03632.10291v2.66998l.00006.00006zm0-4.78903c0 .04037-.01212.07468-.03632.10291-.02826.02423-.06256.03632-.10291.03632h-3.39047l.77496 1.00504c.02423.03229.0343.06659.03027.10291s-.02219.06659-.0545.09082l-.1998.15741c-.03632.02423-.07266.0343-.10898.03027-.03632-.00806-.06659-.02826-.09082-.06055l-1.01715-1.31985c-.02017-.02826-.03229-.0545-.03632-.0787-.00403-.02423-.00604-.05045-.00604-.0787v-.30878c0-.04037.01413-.07266.04239-.09686.02423-.02423.05652-.03632.09686-.03632h3.95959c.04037 0 .07468.01212.10291.03632.0242.02423.03632.05652.03632.09686v.32092zm0-1.82236c0 .03632-.01212.06659-.03632.09082-.02826.02017-.06055.03027-.09686.03027-.01212 0-.03027-.00403-.0545-.01212l-3.52365-1.50754v1.98584c0 .04037-.01212.07468-.03632.10291-.02826.02423-.06256.03632-.10291.03632h-.24219c-.0444 0-.0787-.01212-.10291-.03632-.02826-.02826-.04239-.06256-.04239-.10291v-2.4823c0-.0444.01413-.0787.04239-.10291.02423-.02826.05853-.04239.10291-.04239h.224c.05246 0 .09485.00403.12714.01212.03229.00806.06863.02017.10898.03632l3.48129 1.49545c.03229.01212.06659.03229.10291.06055.03229.02423.04843.06055.04843.10898v.32693-.00003zm0-2.35254c0 .04037-.01212.07468-.03632.10291-.02826.02423-.06256.03632-.10291.03632h-.43591c-.04037 0-.07266-.01212-.09686-.03632-.02826-.02826-.04239-.06256-.04239-.10291v-.43591c0-.04037.01413-.07266.04239-.09686.02423-.02826.05652-.04239.09686-.04239h.43591c.04037 0 .07468.01413.10291.04239.02423.02423.03632.05652.03632.09686zm0-3.31515c0 .04037-.01212.07468-.03632.10294-.02826.02423-.06256.03632-.10291.03632h-.87183v1.96164c0 .04037-.01212.07468-.03632.10294-.02826.02423-.06256.03632-.10291.03632h-.24219c-.01614 0-.04037-.00403-.07266-.01212-.03632-.01212-.07266-.03027-.10898-.0545l-2.561-1.81631c-.06863-.04843-.10291-.12311-.10291-.224v-.43591c0-.04036.01413-.07265.04239-.09686.02423-.02824.05652-.04237.09686-.04237h2.561v-.54491c0-.0444.01413-.0787.04239-.10294.02423-.02824.05652-.04237.09686-.04237h.24823c.04037 0 .07468.01413.10291.04237.02423.02422.03632.0565.03632.09686v.55095h.87183c.04037 0 .07468.01413.10291.04237.02423.02422.03632.0565.03632.09686v.30273zm-1.52572 1.59228v-1.45911h-2.07666z" fill="#25357a"/><path d="m231.91504 249.20465c-.28564 0-.52316-.05278-.71255-.15836-.18629-.10556-.32756-.25304-.42381-.44244-.09625-.18939-.14903-.40984-.15836-.66133-.0031-.1273-.00465-.26392-.00465-.40984s.00156-.28564.00465-.41914c.00931-.2515.0621-.47192.15836-.66133.09625-.18939.23752-.33687.42381-.44244.18939-.10556.42691-.15836.71255-.15836.21423 0 .40207.0295.56352.08849s.29495.13815.40051.23752c.10867.09935.19095.21114.24683.33533.05589.12109.08693.24683.09314.37724.00311.02794-.00621.05122-.02794.06985-.01863.01863-.04192.02794-.06985.02794h-.25615c-.02794 0-.05278-.00777-.07452-.02328-.01863-.01552-.03259-.04347-.04192-.08383-.05278-.24219-.15215-.40828-.29807-.49832-.14282-.09004-.32291-.13506-.54024-.13506-.24838 0-.44554.07141-.59148.21423-.14594.13972-.2251.36482-.23752.67529-.00931.25459-.00931.5154 0 .78241.01242.31049.09158.53712.23752.67996.14594.13972.34308.20958.59148.20958.21735 0 .39742-.04501.54024-.13506.14594-.09004.24529-.25615.29807-.49832.00931-.04036.02328-.06831.04192-.08383.02173-.01552.04657-.02328.07452-.02328h.25615c.02794 0 .05122.00931.06985.02794.02173.01863.03105.04192.02794.06985-.00621.1304-.03726.25771-.09314.3819-.05589.12109-.13815.23131-.24683.33066-.10556.09935-.23907.17853-.40051.23752-.16145.05899-.34929.08849-.56354.08849l.00002.00003zm2.54285 0c-.15524 0-.29651-.03105-.42381-.09314-.1273-.0621-.22977-.14594-.30737-.2515-.07762-.10556-.11642-.2251-.11642-.35861 0-.21423.08694-.38499.2608-.5123.17387-.1273.40051-.21114.67996-.2515l.69392-.09779v-.13506c0-.14903-.04347-.26546-.1304-.34929-.08383-.08383-.22198-.12575-.41449-.12575-.13972 0-.25304.02794-.33998.08383-.08383.05589-.14282.1273-.17697.21423-.01863.04657-.05122.06985-.09779.06985h-.20958c-.03415 0-.06055-.00931-.07916-.02794-.01552-.02173-.02328-.04657-.02328-.07452 0-.04657.01707-.104.05122-.17232.03726-.06831.09314-.13506.16766-.20026s.1692-.11954.28409-.16299c.11798-.04657.2608-.06985.42847-.06985.18629 0 .34308.02484.47038.07452.1273.04657.22665.11021.29807.19095.07452.08073.1273.17232.15836.27478.03415.10246.05122.20647.05122.31203v1.50894c0 .03105-.01086.05743-.03259.07916-.01863.01863-.04347.02794-.07452.02794h-.21423c-.03415 0-.06055-.00931-.07916-.02794-.01863-.02173-.02794-.04813-.02794-.07916v-.20026c-.04036.05589-.0947.11177-.16299.16766-.06831.05278-.15369.09779-.25615.13506-.10246.03415-.2282.05122-.37724.05122l-.00005-.00002zm.0978-.34929c.1273 0 .24373-.02638.34929-.07916.10556-.05589.18784-.14127.24683-.25615.0621-.11488.09314-.25925.09314-.43312v-.1304l-.54024.07916c-.22044.03105-.38655.08383-.49832.15836-.11177.07141-.16766.16299-.16766.27478 0 .08693.02484.1599.07452.21889.05278.05589.11798.09779.1956.12575.08072.02794.16299.04192.24683.04192l.00002-.00002zm2.12458.30272c-.03105 0-.05743-.00931-.07916-.02794-.01863-.02173-.02794-.04813-.02794-.07916v-1.94206h-.39586c-.03105 0-.05743-.00931-.07916-.02794-.01863-.02173-.02794-.04813-.02794-.07916v-.15836c0-.03105.00931-.05589.02794-.07452.02173-.02173.04813-.03259.07916-.03259h.39586v-.23286c0-.15836.02638-.29651.07916-.41449.05278-.12109.13661-.21423.2515-.27943.11798-.0652.27478-.09779.47038-.09779h.27943c.03105 0 .05589.01086.07452.03259.01863.01863.02794.04347.02794.07452v.15836c0 .03105-.00931.05743-.02794.07916-.01863.01863-.04347.02794-.07452.02794h-.27013c-.14594 0-.24529.0388-.29807.11642-.05278.07452-.07916.18318-.07916.326v.20958h.60078c.03105 0 .05589.01086.07452.03259.01863.01863.02794.04347.02794.07452v.15836c0 .03105-.00931.05743-.02794.07916-.01863.01863-.04347.02794-.07452.02794h-.60078v1.94206c0 .03105-.01086.05743-.03259.07916-.01863.01863-.04347.02794-.07452.02794zm2.36267.04657c-.31979 0-.57439-.09779-.76379-.29341-.18939-.19872-.29341-.46883-.31203-.81036-.00311-.04036-.00465-.09158-.00465-.15369 0-.0652.00156-.11798.00465-.15836.01242-.22044.06364-.41293.15369-.5775.09004-.16766.21268-.29651.36792-.38655.15836-.09004.34308-.13506.55421-.13506.23598 0 .43312.04968.59148.14903.16145.09935.28409.24062.36792.42381.08383.18318.12573.39742.12573.6427v.07916c0 .03415-.01086.06055-.03259.07916-.01863.01863-.04347.02794-.07452.02794h-1.6114v.04192c.00621.1273.03415.24683.08383.35861.04968.10867.12109.19716.21423.26546.09314.06831.20493.10246.33533.10246.11177 0 .20493-.01707.27943-.05122.07452-.03415.13506-.07141.18163-.11177.04657-.04347.07762-.07607.09315-.09779.02794-.04036.04968-.06364.0652-.06985.01552-.00931.04036-.01398.07452-.01398h.22356c.03105 0 .05589.00931.07452.02794.02173.01552.03105.0388.02794.06985-.00311.04657-.02795.104-.07452.17232-.04657.0652-.11333.1304-.20026.1956-.08694.0652-.1925.11954-.3167.16299-.12419.04036-.26701.06055-.42847.06055l-.00002.00003zm-.63338-1.43442h1.27608v-.01398c0-.13972-.02638-.26392-.07916-.37257-.04968-.10867-.12263-.19405-.21889-.25615-.09625-.0652-.21114-.09779-.34464-.09779s-.24838.03259-.34464.09779c-.09314.0621-.16457.14748-.21423.25615-.04968.10867-.07452.23286-.07452.37257zm.50763-1.38321c-.04968 0-.07452-.02484-.07452-.07452 0-.02484.00777-.04501.02328-.06055l.34929-.41914c.02794-.03415.05278-.05589.07452-.0652.02173-.01242.05434-.01863.09779-.01863h.3167c.05899 0 .08849.0295.08849.08849 0 .02173-.00777.04036-.02328.05589l-.54024.44244c-.02484.02173-.04813.03571-.06985.04192s-.04968.00931-.08383.00931h-.15836.00002zm3.07843 2.77106c-.03415 0-.06055-.00931-.07916-.02794-.01863-.02173-.02794-.04813-.02794-.07916v-3.04117c0-.03415.00931-.06055.02794-.07916.01863-.02173.04501-.03259.07916-.03259h1.90015c.03415 0 .06055.01086.07916.03259.01863.01863.02794.04501.02794.07916v.18629c0 .03415-.00931.06055-.02794.07916-.01863.01863-.04501.02794-.07916.02794h-1.55553v1.08513h1.46237c.03415 0 .06055.01086.07916.03259.01863.01863.02794.04501.02794.07916v.18629c0 .03105-.00931.05743-.02794.07916-.01863.01863-.04501.02794-.07916.02794h-1.46237v1.25745c0 .03105-.01086.05743-.03259.07916-.01863.01863-.04501.02794-.07916.02794h-.23286v.00005zm2.59436 0c-.03105 0-.05743-.00931-.07916-.02794-.01863-.02173-.02794-.04813-.02794-.07916v-2.20287c0-.03105.00931-.05743.02794-.07916.02173-.02173.04813-.03259.07916-.03259h.21423c.03105 0 .05743.01086.07916.03259s.03259.04813.03259.07916v.20493c.06209-.10556.14748-.18474.25615-.23752s.23907-.07916.3912-.07916h.18629c.03105 0 .05589.01086.07452.03259.01863.01863.02794.04347.02794.07452v.19095c0 .03105-.00931.05589-.02794.07452s-.04347.02794-.07452.02794h-.27943c-.16766 0-.29961.04968-.39586.14903-.09625.09625-.14436.2282-.14436.39586v1.36923c0 .03105-.01086.05743-.03259.07916-.02173.01863-.04813.02794-.07916.02794h-.2282l-.00003-.00003zm2.29981.04657c-.15524 0-.29651-.03105-.42381-.09314-.1273-.0621-.22977-.14594-.30737-.2515-.07762-.10556-.11642-.2251-.11642-.35861 0-.21423.08694-.38499.2608-.5123.17387-.1273.40051-.21114.67996-.2515l.69392-.09779v-.13506c0-.14903-.04347-.26546-.1304-.34929-.08383-.08383-.222-.12575-.41449-.12575-.13972 0-.25304.02794-.33998.08383-.08383.05589-.14282.1273-.17699.21423-.01863.04657-.05122.06985-.09779.06985h-.20956c-.03415 0-.06055-.00931-.07916-.02794-.01553-.02173-.02328-.04657-.02328-.07452 0-.04657.01707-.104.05122-.17232.03726-.06831.09315-.13506.16766-.20026s.1692-.11954.28409-.16299c.11798-.04657.2608-.06985.42847-.06985.18629 0 .34308.02484.47038.07452.1273.04657.22665.11021.29807.19095.07452.08073.1273.17232.15836.27478.03415.10246.05122.20647.05122.31203v1.50894c0 .03105-.01086.05743-.03259.07916-.01863.01863-.04347.02794-.07452.02794h-.21423c-.03415 0-.06055-.00931-.07916-.02794-.01863-.02173-.02794-.04813-.02794-.07916v-.20026c-.04036.05589-.0947.11177-.16299.16766-.06831.05278-.15369.09779-.25615.13506-.10246.03415-.2282.05122-.37724.05122l-.00005-.00002zm.09779-.34929c.1273 0 .24373-.02638.34929-.07916.10556-.05589.18784-.14127.24683-.25615.06209-.11488.09314-.25925.09314-.43312v-.1304l-.54024.07916c-.22044.03105-.38655.08383-.49832.15836-.11177.07141-.16766.16299-.16766.27478 0 .08693.02484.1599.07452.21889.05278.05589.11798.09779.1956.12575.08072.02794.16299.04192.24683.04192l.00002-.00002zm1.90482.30272c-.03105 0-.05743-.00931-.07916-.02794-.01863-.02173-.02794-.04813-.02794-.07916v-2.20753c0-.03105.00931-.05589.02794-.07452.02173-.02173.04813-.03259.07916-.03259h.21889c.03105 0 .05589.01086.07452.03259.02173.01863.03259.04347.03259.07452v.20493c.08072-.10556.18163-.19095.30272-.25615.12419-.06831.28255-.10246.47504-.10246.20181 0 .37257.04501.51228.13506.14282.08694.24994.20958.32135.36792.07141.15524.10712.33687.10712.54491v1.31334c0 .03105-.00931.05743-.02794.07916-.01863.01863-.04347.02794-.07452.02794h-.23286c-.03105 0-.05743-.00931-.07916-.02794-.01863-.02173-.02794-.04813-.02794-.07916v-1.29005c0-.21735-.05278-.38655-.15836-.50764-.10556-.12419-.2608-.18629-.46571-.18629-.1925 0-.34773.0621-.46571.18629-.11488.12109-.17232.2903-.17232.50764v1.29005c0 .03105-.01086.05743-.03259.07916-.01863.01863-.04347.02794-.07452.02794h-.23286zm3.68386 1.02458c-.08694-.00311-.16457-.01863-.23286-.04657-.0652-.02794-.11333-.06055-.14436-.09779-.02794-.03726-.02794-.06831 0-.09314l.06985-.0652c.02794-.02484.05278-.03105.07452-.01863.02173.01552.04968.03415.08383.05589s.08383.03259.14903.03259c.04968 0 .09315-.01552.1304-.04657.03726-.03105.05589-.07297.05589-.12575 0-.04968-.01863-.09004-.05589-.12109-.03726-.02794-.08073-.04192-.1304-.04192-.04657 0-.08694.00621-.12109.01863-.03105.01242-.05899.02019-.08383.02328-.02173.00621-.04501-.00311-.06985-.02794l-.07916-.08383c-.01553-.01863-.02019-.04036-.01398-.0652.00931-.02484.02019-.04968.03259-.07452l.09314-.22356c-.25459-.04347-.45486-.15524-.60078-.33533-.14282-.18318-.21889-.4207-.2282-.71255-.00313-.04657-.0047-.10867-.0047-.18629s.00157-.13972.0047-.18629c.0062-.22356.05276-.41449.13972-.57285.08694-.16145.20958-.28409.36792-.36792.16145-.08694.3524-.1304.57285-.1304.18008 0 .33377.02484.46107.07452.1304.04968.23752.11333.32135.19095s.14594.16145.18629.2515c.04347.09004.06676.17542.06985.25615.00313.03105-.00618.05589-.02794.07452-.02173.01863-.04813.02794-.07916.02794h-.22356c-.03105 0-.05434-.00621-.06985-.01863-.01553-.01552-.03105-.04036-.04657-.07452-.05589-.15215-.13194-.25925-.2282-.32135s-.21579-.09314-.35861-.09314c-.18629 0-.33842.05743-.45641.17232-.11488.11488-.17699.29962-.18629.55421-.00313.11177-.00313.22044 0 .326.00931.25771.07141.44398.18629.55887.11798.11177.27013.16766.45641.16766.14282 0 .26236-.03105.35861-.09314.09625-.0621.17232-.1692.2282-.32135.01553-.03415.03105-.05743.04657-.06985.01553-.01552.0388-.02328.06985-.02328h.22356c.03105 0 .05743.00931.07916.02794s.03105.04347.02794.07452c-.00313.07762-.02641.16145-.06985.2515-.04036.09004-.10091.17387-.18163.2515s-.18629.14282-.3167.1956c-.1273.04968-.28255.07452-.46571.07452l-.10246.21423c.01863-.01242.04347-.02173.07452-.02794.03415-.00621.06676-.00931.09779-.00931.10556 0 .19095.03571.25615.10712.0683.07452.10246.1692.10246.28409 0 .11177-.0388.20802-.11642.28876-.07452.08383-.18318.12419-.326.12109l-.00006-.00005zm2.59407-.97801c-.23598 0-.43312-.04501-.59148-.13506s-.27943-.21423-.36327-.37257c-.08383-.16145-.1304-.34464-.13972-.54955-.00313-.05278-.0047-.11954-.0047-.20026 0-.08383.00157-.15057.0047-.20026.00931-.20802.05589-.3912.13972-.54955.08694-.15836.20958-.28255.36792-.37257.15834-.09004.35394-.13506.58681-.13506s.42847.04501.58681.13506.27943.21423.36327.37257c.08694.15836.13507.34154.14438.54955.00314.04968.0047.11642.0047.20026 0 .08073-.00156.14748-.0047.20026-.00931.20493-.05588.38811-.13971.54955-.08383.15836-.20493.28255-.36327.37257-.15834.09004-.3555.13506-.59148.13506zm0-.3586c.1925 0 .34619-.06055.46107-.18163.11488-.12419.17699-.30428.18629-.54024.00313-.04657.0047-.10556.0047-.17697s-.00157-.1304-.0047-.17697c-.00931-.23598-.07141-.41449-.18629-.53558-.11488-.12419-.26857-.18629-.46107-.18629s-.34773.0621-.46571.18629c-.11488.12109-.17542.29962-.18163.53558-.00313.04657-.0047.10556-.0047.17697s.00157.1304.0047.17697c.0062.23598.06674.41605.18163.54024.11798.12109.27322.18163.46571.18163zm1.78838.31203c-.03104 0-.05743-.00931-.07916-.02794-.01862-.02173-.02795-.04813-.02795-.07916v-2.20753c0-.03105.00931-.05589.02795-.07452.02173-.02173.04813-.03259.07916-.03259h.22354c.03104 0 .05588.01086.07452.03259.01862.01863.02795.04347.02795.07452v2.20753c0 .03105-.00931.05743-.02795.07916-.01862.01863-.04346.02794-.07452.02794zm-.03726-2.8735c-.03104 0-.05743-.00931-.07916-.02794-.01862-.02173-.02795-.04813-.02795-.07916v-.2515c0-.03105.00931-.05589.02795-.07452.02173-.02173.04813-.03259.07916-.03259h.2934c.03104 0 .05588.01086.07452.03259.02173.01863.03259.04347.03259.07452v.2515c0 .03105-.01086.05743-.03259.07916-.01862.01863-.04346.02794-.07452.02794zm1.89551 2.92007c-.17386 0-.32291-.02173-.44708-.0652s-.2251-.09625-.30273-.15836c-.07761-.0621-.1366-.12419-.17697-.18629-.03726-.0621-.05743-.11177-.06055-.14903-.00314-.03415.00772-.06055.03259-.07916.02484-.01863.04968-.02794.07452-.02794h.20493c.01862 0 .03259.0031.0419.00931.01242.0031.02795.01552.04657.03726.04037.04347.08539.08693.13507.1304s.11023.07916.18164.10712c.07452.02794.16611.04192.27478.04192.15833 0 .28876-.0295.3912-.08849.10245-.0621.15369-.15215.15369-.27013 0-.07762-.02173-.13972-.06519-.18629-.04037-.04657-.11487-.08849-.22354-.12575-.10556-.03726-.2515-.07607-.43777-.11642-.18628-.04347-.33377-.09625-.44244-.15836-.10867-.0652-.18628-.14127-.23285-.2282-.04657-.09004-.06985-.19095-.06985-.30272 0-.11488.03415-.2251.10245-.33066.0683-.10867.16766-.19716.29807-.26546.13351-.06831.29962-.10246.49832-.10246.16144 0 .29962.02019.41449.06055s.20959.09158.28409.15369c.07452.05899.1304.11798.16766.17697s.05743.10867.06055.14903c.00314.03105-.0062.05743-.02795.07916-.02173.01863-.04657.02794-.07452.02794h-.19559c-.02173 0-.04037-.00465-.05588-.01398-.01242-.00931-.02484-.02019-.03726-.03259-.03104-.04036-.0683-.08073-.11176-.12109-.04037-.04036-.0947-.07297-.16299-.09779-.06519-.02794-.15213-.04192-.2608-.04192-.15524 0-.27167.03259-.3493.09779-.07761.0652-.11642.14748-.11642.24683 0 .05899.01706.11177.05124.15836.03415.04657.09937.08849.19559.12575.09625.03726.23907.07762.42847.12109.20493.04036.36636.0947.48434.16299.11798.06831.20181.14748.2515.23752s.07452.19405.07452.31203c0 .1304-.03882.24994-.11642.35861-.07452.10867-.18628.1956-.33533.2608-.14594.0621-.32755.09314-.54489.09315l-.00006.00002z" fill="#25357a"/><path d="m275.01709 249.20526c-.28564 0-.52316-.05278-.71255-.15836-.18628-.10556-.32755-.25304-.4238-.44244-.09625-.18939-.14902-.40984-.15836-.66133-.00311-.1273-.00467-.26392-.00467-.40984s.00156-.28564.00467-.41914c.00931-.2515.0621-.47192.15836-.66133.09625-.18939.23752-.33687.4238-.44244.18939-.10556.42691-.15836.71255-.15836.21423 0 .40207.0295.56351.08849s.29495.13815.40051.23752c.10867.09935.19095.21114.24683.33533.05588.12109.08694.24683.09314.37724.00311.02794-.0062.05122-.02795.06985-.01862.01863-.0419.02794-.06985.02794h-.25616c-.02795 0-.05276-.00777-.07452-.02328-.01862-.01552-.03259-.04347-.0419-.08383-.05276-.24219-.15213-.40828-.29807-.49832-.14282-.09004-.32291-.13506-.54025-.13506-.24838 0-.44553.07141-.59146.21423-.14594.13972-.2251.36482-.23752.67529-.00931.25459-.00931.5154 0 .78241.01242.31049.09158.53712.23752.67996.14594.13972.34308.20958.59146.20958.21735 0 .39743-.04501.54025-.13506.14594-.09004.24527-.25615.29807-.49832.00931-.04036.02328-.06831.0419-.08383.02173-.01552.04657-.02328.07452-.02328h.25616c.02795 0 .05124.00931.06985.02794.02173.01863.03104.04192.02795.06985-.0062.1304-.03726.25771-.09314.3819-.05588.12109-.13815.23131-.24683.33066-.10556.09935-.23907.17853-.40051.23752s-.3493.08849-.56354.08849l.00003.00003zm2.54285 0c-.15524 0-.29651-.03105-.4238-.09314-.12729-.0621-.22977-.14594-.30737-.2515s-.11642-.2251-.11642-.35861c0-.21423.08694-.38499.2608-.5123s.40051-.21114.67996-.2515l.69394-.09779v-.13506c0-.14903-.04346-.26546-.1304-.34929-.08383-.08383-.22198-.12575-.41449-.12575-.13971 0-.25305.02794-.33997.08383-.08383.05589-.14282.1273-.17697.21423-.01862.04657-.05124.06985-.09781.06985h-.20959c-.03415 0-.06055-.00931-.07916-.02794-.01553-.02173-.02328-.04657-.02328-.07452 0-.04657.01709-.104.05124-.17232.03726-.06831.09314-.13506.16766-.20026s.16922-.11954.28409-.16299c.11798-.04657.2608-.06985.42847-.06985.18628 0 .34308.02484.47037.07452.12729.04657.22665.11021.29807.19095.07452.08073.12729.17232.15836.27478.03415.10246.05124.20647.05124.31203v1.50894c0 .03105-.01086.05743-.03259.07916-.01862.01863-.04346.02794-.07452.02794h-.21423c-.03415 0-.06055-.00931-.07916-.02794-.01862-.02173-.02795-.04813-.02795-.07916v-.20026c-.04037.05589-.0947.11177-.16299.16766-.0683.05278-.15369.09779-.25616.13506-.10245.03415-.22821.05122-.37723.05122l-.00006-.00002zm.09781-.34929c.12729 0 .24374-.02638.3493-.07916.10556-.05589.18784-.14127.24683-.25615.0621-.11488.09314-.25925.09314-.43312v-.1304l-.54025.07916c-.22043.03105-.38654.08383-.49832.15836-.11176.07141-.16766.16299-.16766.27478 0 .08693.02484.1599.07452.21889.05276.05589.11798.09779.19559.12575.08072.02794.16299.04192.24683.04192l.00003-.00002zm1.90945.30272c-.03104 0-.05743-.00931-.07916-.02794-.01862-.02173-.02795-.04813-.02795-.07916v-3.09241c0-.03105.00931-.05589.02795-.07452.02173-.02173.04813-.03259.07916-.03259h.23285c.03415 0 .06055.01086.07916.03259.01862.01863.02795.04347.02795.07452v1.08513c.08383-.10556.18628-.19095.30737-.25615s.27478-.09779.46106-.09779c.20181 0 .37259.04501.5123.13506.14282.08694.24994.20958.32135.36792.07452.15524.11176.33687.11176.54491v1.31334c0 .03105-.00931.05743-.02795.07916-.01862.01863-.04501.02794-.07916.02794h-.23285c-.03104 0-.05743-.00931-.07916-.02794-.01862-.02173-.02795-.04813-.02795-.07916v-1.29005c0-.21735-.05276-.38655-.15836-.50764-.10556-.12419-.2608-.18629-.46573-.18629-.1925 0-.34775.0621-.46573.18629-.11798.12109-.17697.2903-.17697.50764v1.29005c0 .03105-.00931.05743-.02795.07916-.01862.01863-.04501.02794-.07916.02794h-.23285.00003zm3.71649.04657c-.23596 0-.43311-.04501-.59146-.13506s-.27942-.21423-.36325-.37257c-.08383-.16145-.1304-.34464-.13971-.54955-.00311-.05278-.00467-.11954-.00467-.20026 0-.08383.00156-.15057.00467-.20026.00931-.20802.05588-.3912.13971-.54955.08694-.15836.20959-.28255.36792-.37257s.35394-.13506.58682-.13506.42847.04501.58682.13506.27942.21423.36325.37257c.08694.15836.13507.34154.14438.54955.00314.04968.0047.11642.0047.20026 0 .08073-.00156.14748-.0047.20026-.00931.20493-.05588.38811-.13971.54955-.08383.15836-.20493.28255-.36325.37257-.15836.09004-.3555.13506-.59146.13506zm0-.3586c.1925 0 .34619-.06055.46106-.18163.11487-.12419.17697-.30428.18628-.54024.00314-.04657.0047-.10556.0047-.17697s-.00156-.1304-.0047-.17697c-.00931-.23598-.07141-.41449-.18628-.53558-.11487-.12419-.26859-.18629-.46106-.18629s-.34775.0621-.46573.18629c-.11487.12109-.17542.29962-.18164.53558-.00311.04657-.00467.10556-.00467.17697s.00156.1304.00467.17697c.0062.23598.06674.41605.18164.54024.11798.12109.27322.18163.46573.18163zm2.67322.3586c-.23596 0-.43311-.04501-.59146-.13506s-.27942-.21423-.36325-.37257c-.08383-.16145-.1304-.34464-.13971-.54955-.00314-.05278-.0047-.11954-.0047-.20026 0-.08383.00156-.15057.0047-.20026.00931-.20802.05588-.3912.13971-.54955.08694-.15836.20956-.28255.36792-.37257s.35394-.13506.58682-.13506.42847.04501.58682.13506.27942.21423.36325.37257c.08694.15836.13507.34154.14438.54955.00314.04968.0047.11642.0047.20026 0 .08073-.00156.14748-.0047.20026-.00931.20493-.05588.38811-.13971.54955-.08383.15836-.20493.28255-.36325.37257-.15836.09004-.3555.13506-.59146.13506zm0-.3586c.1925 0 .34619-.06055.46106-.18163.11487-.12419.17697-.30428.18628-.54024.00314-.04657.0047-.10556.0047-.17697s-.00156-.1304-.0047-.17697c-.00931-.23598-.07141-.41449-.18628-.53558-.11487-.12419-.26859-.18629-.46106-.18629s-.34775.0621-.46573.18629c-.11487.12109-.17542.29962-.18164.53558-.00314.04657-.0047.10556-.0047.17697s.00156.1304.0047.17697c.0062.23598.06674.41605.18164.54024.11798.12109.27322.18163.46573.18163zm2.60397.31203c-.17386 0-.31516-.03259-.4238-.09779-.10867-.06831-.18784-.16299-.23752-.28409-.04968-.12419-.07452-.27013-.07452-.43777v-1.22951h-.36325c-.03104 0-.05743-.00931-.07916-.02794-.01862-.02173-.02795-.04813-.02795-.07916v-.15836c0-.03105.00931-.05589.02795-.07452.02173-.02173.04813-.03259.07916-.03259h.36325v-.77776c0-.03105.00931-.05589.02795-.07452.02173-.02173.04813-.03259.07916-.03259h.2189c.03104 0 .05588.01086.07452.03259.02173.01863.03259.04347.03259.07452v.77776h.57751c.03104 0 .05588.01086.07452.03259.02173.01863.03259.04347.03259.07452v.15836c0 .03105-.01086.05743-.03259.07916-.01862.01863-.04346.02794-.07452.02794h-.57751v1.19691c0 .14594.02484.2608.07452.34464s.13815.12575.26547.12575h.28409c.03104 0 .05588.01086.07452.03259.02173.01863.03259.04347.03259.07452v.16766c0 .03105-.01086.05743-.03259.07916-.01862.01863-.04346.02794-.07452.02794h-.32135l-.00003-.00002zm1.71387.04657c-.17386 0-.32291-.02173-.44708-.0652s-.2251-.09625-.30273-.15836c-.07761-.0621-.1366-.12419-.17697-.18629-.03726-.0621-.05743-.11177-.06055-.14903-.00314-.03415.00772-.06055.03259-.07916.02484-.01863.04968-.02794.07452-.02794h.20493c.01862 0 .03259.0031.0419.00931.01242.0031.02795.01552.04657.03726.04037.04347.08539.08693.13507.1304s.11023.07916.18164.10712c.07452.02794.16611.04192.27478.04192.15836 0 .28876-.0295.3912-.08849.10245-.0621.15369-.15215.15369-.27013 0-.07762-.02173-.13972-.06519-.18629-.04037-.04657-.11487-.08849-.22354-.12575-.10556-.03726-.2515-.07607-.43777-.11642-.18628-.04347-.33377-.09625-.44244-.15836-.10867-.0652-.18628-.14127-.23285-.2282-.04657-.09004-.06985-.19095-.06985-.30272 0-.11488.03415-.2251.10245-.33066.0683-.10867.16766-.19716.29807-.26546.13351-.06831.29962-.10246.49832-.10246.16144 0 .29962.02019.41449.06055s.20959.09158.28409.15369c.07452.05899.1304.11798.16766.17697s.05743.10867.06055.14903c.00314.03105-.0062.05743-.02795.07916-.02173.01863-.04657.02794-.07452.02794h-.19559c-.02173 0-.04037-.00465-.05588-.01398-.01242-.00931-.02484-.02019-.03726-.03259-.03104-.04036-.0683-.08073-.11176-.12109-.04037-.04036-.0947-.07297-.16299-.09779-.06519-.02794-.15213-.04192-.2608-.04192-.15524 0-.27167.03259-.3493.09779-.07761.0652-.11642.14748-.11642.24683 0 .05899.01709.11177.05124.15836.03415.04657.09937.08849.19559.12575.09625.03726.23907.07762.42847.12109.20493.04036.36636.0947.48434.16299.11798.06831.20181.14748.2515.23752s.07452.19405.07452.31203c0 .1304-.03882.24994-.11642.35861-.07452.10867-.18628.1956-.33533.2608-.14594.0621-.32755.09314-.54489.09314h.00003l-.00009.00003z" fill="#25357a"/><path d="m373.79633 252.76965c-.02484 0-.04657-.00931-.06519-.02794s-.02795-.04036-.02795-.0652c0-.01552.00156-.03259.00467-.05122l1.155-3.01323c.01242-.03105.02951-.05589.05124-.07452s.05432-.02794.09781-.02794h.31668c.04037 0 .07141.00931.09314.02794.02484.01863.04346.04347.05588.07452l1.15033 3.01323c.0062.01863.00931.03571.00931.05122 0 .02484-.00931.04657-.02795.0652-.01862.01863-.04037.02794-.06519.02794h-.23752c-.03726 0-.06519-.00931-.08383-.02794-.01553-.01863-.0264-.03571-.03259-.05122l-.25616-.66133h-1.52756l-.25616.66133c-.00311.01552-.01398.03259-.03259.05122s-.04657.02794-.08383.02794h-.23752zm.74517-1.14102h1.25745l-.62872-1.65332-.62872 1.65332zm2.6453 1.14102c-.03104 0-.05743-.00931-.07916-.02794-.01862-.02173-.02795-.04813-.02795-.07916v-3.09241c0-.03105.00931-.05589.02795-.07452.02173-.02173.04813-.03259.07916-.03259h.2189c.03104 0 .05588.01086.07452.03259.02173.01863.03259.04347.03259.07452v1.62073l.91748-.76379c.03726-.03105.06519-.05122.08383-.06055.02173-.01242.05588-.01863.10245-.01863h.24683c.02795 0 .05124.00931.06985.02794s.02795.04192.02795.06985c0 .01242-.00467.02638-.01398.04192-.0062.01552-.02017.03105-.0419.04657l-1.07581.8942 1.19226 1.15965c.03726.03105.05588.05899.05588.08383 0 .02794-.00931.05122-.02795.06985-.01862.01863-.0419.02794-.06985.02794h-.24219c-.04657 0-.08072-.00465-.10245-.01398-.02173-.01242-.04968-.03415-.08383-.0652l-1.03857-.99199v.96405c0 .03105-.01086.05743-.03259.07916-.01862.01863-.04346.02794-.07452.02794h-.2189zm2.91922.04657c-.15524 0-.29651-.03105-.4238-.09314-.12729-.0621-.22977-.14594-.30737-.2515s-.11642-.2251-.11642-.35861c0-.21423.08694-.38499.2608-.5123s.40051-.21114.67996-.2515l.69394-.09779v-.13506c0-.14903-.04346-.26546-.1304-.34929-.08383-.08383-.22198-.12575-.41449-.12575-.13971 0-.25305.02794-.33997.08383-.08383.05589-.14282.1273-.17697.21423-.01862.04657-.05124.06985-.09781.06985h-.20959c-.03415 0-.06055-.00931-.07916-.02794-.01553-.02173-.02328-.04657-.02328-.07452 0-.04657.01709-.104.05124-.17232.03726-.06831.09314-.13506.16766-.20026s.16922-.11954.28409-.16299c.11798-.04657.2608-.06985.42847-.06985.18628 0 .34308.02484.47037.07452.12729.04657.22665.11021.29807.19095.07452.08073.12729.17232.15836.27478.03415.10246.05124.20647.05124.31203v1.50894c0 .03105-.01086.05743-.03259.07916-.01862.01863-.04346.02794-.07452.02794h-.21423c-.03415 0-.06055-.00931-.07916-.02794-.01862-.02173-.02795-.04813-.02795-.07916v-.20026c-.04037.05589-.0947.11177-.16299.16766-.0683.05278-.15369.09779-.25616.13506-.10245.03415-.22821.05122-.37723.05122l-.00006-.00002zm.09781-.34929c.12729 0 .24374-.02638.3493-.07916.10556-.05589.18784-.14127.24683-.25615.0621-.11488.09314-.25925.09314-.43312v-.1304l-.54025.07916c-.22043.03105-.38654.08383-.49832.15836-.11176.07141-.16766.16299-.16766.27478 0 .08693.02484.1599.07452.21889.05276.05589.11798.09779.19559.12575.08072.02794.16299.04192.24683.04192l.00003-.00002zm1.90478.30272c-.03104 0-.05743-.00931-.07916-.02794-.01862-.02173-.02795-.04813-.02795-.07916v-2.20287c0-.03105.00931-.05743.02795-.07916.02173-.02173.04813-.03259.07916-.03259h.21423c.03104 0 .05743.01086.07916.03259s.03259.04813.03259.07916v.20493c.0621-.10556.14749-.18474.25616-.23752s.23907-.07916.3912-.07916h.18628c.03104 0 .05588.01086.07452.03259.01862.01863.02795.04347.02795.07452v.19095c0 .03105-.00931.05589-.02795.07452-.01862.01863-.04346.02794-.07452.02794h-.27942c-.16766 0-.29962.04968-.39587.14903-.09625.09625-.14438.2282-.14438.39586v1.36923c0 .03105-.01086.05743-.03259.07916-.02173.01863-.04813.02794-.07916.02794h-.22821v-.00003zm2.29981.04657c-.15524 0-.29651-.03105-.4238-.09314-.12729-.0621-.22977-.14594-.30737-.2515s-.11642-.2251-.11642-.35861c0-.21423.08694-.38499.2608-.5123s.40051-.21114.67996-.2515l.69394-.09779v-.13506c0-.14903-.04346-.26546-.1304-.34929-.08383-.08383-.22198-.12575-.41449-.12575-.13971 0-.25305.02794-.33997.08383-.08383.05589-.14282.1273-.17697.21423-.01862.04657-.05124.06985-.09781.06985h-.20956c-.03415 0-.06055-.00931-.07916-.02794-.01553-.02173-.02328-.04657-.02328-.07452 0-.04657.01709-.104.05124-.17232.03726-.06831.09314-.13506.16766-.20026s.16922-.11954.28409-.16299c.11798-.04657.2608-.06985.42847-.06985.18628 0 .34308.02484.47037.07452.12729.04657.22665.11021.29807.19095.07452.08073.12729.17232.15836.27478.03415.10246.05124.20647.05124.31203v1.50894c0 .03105-.01086.05743-.03259.07916-.01862.01863-.04346.02794-.07452.02794h-.21423c-.03415 0-.06055-.00931-.07916-.02794-.01862-.02173-.02795-.04813-.02795-.07916v-.20026c-.04037.05589-.0947.11177-.16299.16766-.0683.05278-.15369.09779-.25616.13506-.10245.03415-.22821.05122-.37723.05122l-.00009-.00002zm.09781-.34929c.12729 0 .24374-.02638.3493-.07916.10556-.05589.18784-.14127.24683-.25615.0621-.11488.09314-.25925.09314-.43312v-.1304l-.54025.07916c-.22043.03105-.38654.08383-.49832.15836-.11176.07141-.16766.16299-.16766.27478 0 .08693.02484.1599.07452.21889.05276.05589.11798.09779.19559.12575.08072.02794.16299.04192.24683.04192l.00003-.00002z" fill="#25357a"/><path d="m316.22952 252.76892c-.03415 0-.06055-.00931-.07916-.02794-.01862-.02173-.02795-.04813-.02795-.07916v-3.04117c0-.03415.00931-.06055.02795-.07916.01862-.02173.04501-.03259.07916-.03259h1.18295c.22977 0 .42847.03726.59613.11177.17078.07452.30273.18629.39587.33533.09314.14594.13971.32912.13971.54955s-.04657.40363-.13971.54955-.2251.25615-.39587.33066c-.16766.07452-.36636.11177-.59613.11177h-.82434v1.16431c0 .03105-.01086.05743-.03259.07916-.01862.01863-.04501.02794-.07916.02794h-.24686zm.35395-1.66263h.80569c.22977 0 .40207-.05122.51694-.15369s.17233-.2515.17233-.44708c0-.1925-.05588-.34154-.16766-.44708s-.28564-.15836-.52161-.15836h-.80569v1.20622-.00002zm2.5801 1.66263c-.03104 0-.05743-.00931-.07916-.02794-.01862-.02173-.02795-.04813-.02795-.07916v-3.09241c0-.03105.00931-.05589.02795-.07452.02173-.02173.04813-.03259.07916-.03259h.2189c.03415 0 .06055.01086.07916.03259.01862.01863.02795.04347.02795.07452v3.09241c0 .03105-.00931.05743-.02795.07916-.01862.01863-.04501.02794-.07916.02794zm1.69523.04657c-.15524 0-.29651-.03105-.4238-.09314-.12729-.0621-.22977-.14594-.30737-.2515s-.11642-.2251-.11642-.35861c0-.21423.08694-.38499.2608-.5123s.40051-.21114.67996-.2515l.69394-.09779v-.13506c0-.14903-.04346-.26546-.1304-.34929-.08383-.08383-.22198-.12575-.41449-.12575-.13971 0-.25305.02794-.33997.08383-.08383.05589-.14282.1273-.17697.21423-.01862.04657-.05124.06985-.09781.06985h-.20959c-.03415 0-.06055-.00931-.07916-.02794-.01553-.02173-.02328-.04657-.02328-.07452 0-.04657.01709-.104.05124-.17232.03726-.06831.09314-.13506.16766-.20026s.16922-.11954.28409-.16299c.11798-.04657.2608-.06985.42847-.06985.18628 0 .34308.02484.47037.07452.12729.04657.22665.11021.29807.19095.07452.08073.12729.17232.15836.27478.03415.10246.05124.20647.05124.31203v1.50894c0 .03105-.01086.05743-.03259.07916-.01862.01863-.04346.02794-.07452.02794h-.21423c-.03415 0-.06055-.00931-.07916-.02794-.01862-.02173-.02795-.04813-.02795-.07916v-.20026c-.04037.05589-.0947.11177-.16299.16766-.0683.05278-.15369.09779-.25616.13506-.10245.03415-.22821.05122-.37723.05122l-.00006-.00002zm.0978-.34929c.12729 0 .24374-.02638.3493-.07916.10556-.05589.18784-.14127.24683-.25615.0621-.11488.09314-.25925.09314-.43312v-.1304l-.54025.07916c-.22043.03105-.38654.08383-.49832.15836-.11176.07141-.16766.16299-.16766.27478 0 .08693.02484.1599.07452.21889.05276.05589.11798.09779.19559.12575.08072.02794.16299.04192.24683.04192l.00003-.00002zm1.75113.30272c-.03104 0-.05743-.00931-.07916-.02794-.01862-.02173-.02795-.04813-.02795-.07916v-.16299c0-.02794.0062-.05434.01862-.07916.01553-.02484.03104-.04813.04657-.06985l1.2854-1.63469h-1.20157c-.03104 0-.05743-.00931-.07916-.02794-.01862-.01863-.02795-.04501-.02795-.07916v-.15369c0-.03105.00931-.05589.02795-.07452.02173-.02173.04813-.03259.07916-.03259h1.65796c.03104 0 .05588.01086.07452.03259.02173.01863.03259.04347.03259.07452v.17232c0 .02794-.00775.05278-.02328.07452-.01242.02173-.0264.04501-.0419.06985l-1.27142 1.63004h1.32266c.03104 0 .05588.00931.07452.02794.02173.01863.03259.04501.03259.07916v.15369c0 .03105-.01086.05743-.03259.07916-.01862.01863-.04346.02794-.07452.02794h-1.79303v-.00003zm3.09241.04657c-.15524 0-.29651-.03105-.4238-.09314-.12729-.0621-.22977-.14594-.30737-.2515s-.11642-.2251-.11642-.35861c0-.21423.08694-.38499.2608-.5123s.40051-.21114.67996-.2515l.69394-.09779v-.13506c0-.14903-.04346-.26546-.1304-.34929-.08383-.08383-.22198-.12575-.41449-.12575-.13971 0-.25305.02794-.33997.08383-.08383.05589-.14282.1273-.17697.21423-.01862.04657-.05124.06985-.09781.06985h-.20959c-.03415 0-.06055-.00931-.07916-.02794-.01553-.02173-.02328-.04657-.02328-.07452 0-.04657.01709-.104.05124-.17232.03726-.06831.09314-.13506.16766-.20026s.16922-.11954.28409-.16299c.11798-.04657.2608-.06985.42847-.06985.18628 0 .34308.02484.47037.07452.12729.04657.22665.11021.29807.19095.07452.08073.12729.17232.15836.27478.03415.10246.05124.20647.05124.31203v1.50894c0 .03105-.01086.05743-.03259.07916-.01862.01863-.04346.02794-.07452.02794h-.21423c-.03415 0-.06055-.00931-.07916-.02794-.01862-.02173-.02795-.04813-.02795-.07916v-.20026c-.04037.05589-.0947.11177-.16299.16766-.0683.05278-.15369.09779-.25616.13506-.10245.03415-.22821.05122-.37723.05122l-.00006-.00002zm.09778-.34929c.12729 0 .24374-.02638.3493-.07916.10556-.05589.18784-.14127.24683-.25615.0621-.11488.09314-.25925.09314-.43312v-.1304l-.54025.07916c-.22043.03105-.38654.08383-.49832.15836-.11176.07141-.16766.16299-.16766.27478 0 .08693.02484.1599.07452.21889.05276.05589.11798.09779.19559.12575.08072.02794.16299.04192.24683.04192l.00003-.00002zm3.10638.30272c-.03415 0-.06055-.00931-.07916-.02794-.01862-.02173-.02795-.04813-.02795-.07916v-3.04117c0-.03415.00931-.06055.02795-.07916.01862-.02173.04501-.03259.07916-.03259h.23285c.03415 0 .06055.01086.07916.03259.02173.01863.03259.04501.03259.07916v1.15498l1.24347-1.19225c.01242-.01242.03259-.02794.06055-.04657.03104-.01863.07141-.02794.12109-.02794h.2515c.02484 0 .04657.00931.06519.02794s.02795.04036.02795.0652-.0062.04501-.01862.06055l-1.43909 1.40648 1.53223 1.54153c.01553.01863.02328.04036.02328.0652s-.00931.04657-.02795.0652c-.01862.01863-.04037.02794-.06519.02794h-.2608c-.05276 0-.09314-.00931-.12109-.02794-.02795-.02173-.04813-.03726-.06055-.04657l-1.33197-1.31334v1.28075c0 .03105-.01086.05743-.03259.07916-.01862.01863-.04501.02794-.07916.02794h-.23285zm2.74311 0c-.03104 0-.05743-.00931-.07916-.02794-.01862-.02173-.02795-.04813-.02795-.07916v-3.09241c0-.03105.00931-.05589.02795-.07452.02173-.02173.04813-.03259.07916-.03259h.23285c.03415 0 .06055.01086.07916.03259.01862.01863.02795.04347.02795.07452v1.08513c.08383-.10556.18628-.19095.30737-.25615s.27478-.09779.46106-.09779c.20181 0 .37259.04501.5123.13506.14282.08694.24994.20958.32135.36792.07452.15524.11176.33687.11176.54491v1.31334c0 .03105-.00931.05743-.02795.07916-.01862.01863-.04501.02794-.07916.02794h-.23285c-.03104 0-.05743-.00931-.07916-.02794-.01862-.02173-.02795-.04813-.02795-.07916v-1.29005c0-.21735-.05276-.38655-.15836-.50764-.10556-.12419-.2608-.18629-.46573-.18629-.1925 0-.34775.0621-.46573.18629-.11798.12109-.17697.2903-.17697.50764v1.29005c0 .03105-.00931.05743-.02795.07916-.01862.01863-.04504.02794-.07919.02794h-.23285.00006zm3.39978.04657c-.15524 0-.29651-.03105-.4238-.09314-.12729-.0621-.22977-.14594-.30737-.2515s-.11642-.2251-.11642-.35861c0-.21423.08694-.38499.2608-.5123s.40051-.21114.67996-.2515l.69394-.09779v-.13506c0-.14903-.04346-.26546-.1304-.34929-.08383-.08383-.22198-.12575-.41449-.12575-.13971 0-.25305.02794-.33997.08383-.08383.05589-.14282.1273-.17697.21423-.01862.04657-.05124.06985-.09781.06985h-.20959c-.03415 0-.06055-.00931-.07916-.02794-.01553-.02173-.02328-.04657-.02328-.07452 0-.04657.01709-.104.05124-.17232.03726-.06831.09314-.13506.16766-.20026s.16922-.11954.28409-.16299c.11798-.04657.2608-.06985.42847-.06985.18628 0 .34308.02484.47037.07452.12729.04657.22665.11021.29807.19095.07452.08073.12729.17232.15833.27478.03415.10246.05124.20647.05124.31203v1.50894c0 .03105-.01086.05743-.03259.07916-.01862.01863-.04346.02794-.07452.02794h-.21423c-.03415 0-.06055-.00931-.07916-.02794-.01862-.02173-.02795-.04813-.02795-.07916v-.20026c-.04037.05589-.0947.11177-.16299.16766-.0683.05278-.15369.09779-.25616.13506-.10245.03415-.22821.05122-.37723.05122l-.00003-.00002zm.09781-.34929c.12729 0 .24374-.02638.3493-.07916.10556-.05589.18784-.14127.24683-.25615.0621-.11488.09314-.25925.09314-.43312v-.1304l-.54025.07916c-.22043.03105-.38654.08383-.49832.15836-.11176.07141-.16766.16299-.16766.27478 0 .08693.02484.1599.07452.21889.05276.05589.11798.09779.19559.12575.08072.02794.16299.04192.24683.04192l.00003-.00002zm2.78967.34929c-.23596 0-.43311-.04501-.59146-.13506s-.27942-.21423-.36325-.37257c-.08383-.16145-.1304-.34464-.13971-.54955-.00314-.05278-.0047-.11954-.0047-.20026 0-.08383.00156-.15057.0047-.20026.00931-.20802.05588-.3912.13971-.54955.08694-.15836.20959-.28255.36792-.37257.15836-.09004.35394-.13506.58682-.13506s.42847.04501.58682.13506.27942.21423.36325.37257c.08694.15836.13507.34154.14438.54955.00314.04968.0047.11642.0047.20026 0 .08073-.00156.14748-.0047.20026-.00931.20493-.05588.38811-.13971.54955-.08383.15836-.20493.28255-.36325.37257-.15836.09004-.3555.13506-.59146.13506zm0-.3586c.1925 0 .34619-.06055.46106-.18163.11487-.12419.17697-.30428.18628-.54024.00314-.04657.0047-.10556.0047-.17697s-.00156-.1304-.0047-.17697c-.00931-.23598-.07141-.41449-.18628-.53558-.11487-.12419-.26859-.18629-.46106-.18629s-.34775.0621-.46573.18629c-.11487.12109-.17542.29962-.18164.53558-.00314.04657-.0047.10556-.0047.17697s.00156.1304.0047.17697c.0062.23598.06674.41605.18164.54024.11798.12109.27322.18163.46573.18163z" fill="#25357a"/><path d="m322.72623 257.47272c-.27322 0-.5061-.05124-.69858-.15369-.18939-.10245-.33533-.24683-.43777-.43311-.09937-.18628-.15524-.40518-.16766-.65668-.00311-.1366-.00467-.28099-.00467-.43312 0-.15524.00156-.30272.00467-.44244.01242-.2515.0683-.46883.16766-.65201.10245-.18318.24994-.326.44244-.42847s.4238-.15369.69394-.15369c.22043 0 .41138.03105.57285.09315.16144.0621.2934.14127.39587.23752.10556.09314.18317.19095.23285.29341.05276.10246.08072.1925.08383.27013.00311.02794-.00467.05122-.02328.06985-.01862.01552-.04346.02328-.07452.02328h-.27478c-.03104 0-.05432-.00621-.06985-.01863-.01242-.01242-.02484-.03415-.03726-.0652-.02795-.08073-.07452-.1599-.13971-.23752-.0621-.07762-.14749-.14127-.25616-.19095-.10556-.05278-.24219-.07916-.40985-.07916-.24527 0-.444.06676-.59613.20026-.14902.13351-.22977.35394-.24219.66133-.00931.27634-.00931.55266 0 .82899.01242.31049.0947.53403.24683.67065.15213.13351.35083.20026.59613.20026.16455 0 .31049-.02951.43777-.0885.1304-.0621.23285-.1568.30737-.28409s.11176-.28876.11176-.48434v-.19559h-.69858c-.03104 0-.05743-.00931-.07916-.02794-.01862-.02173-.02795-.04968-.02795-.08383v-.14903c0-.03415.00931-.06055.02795-.07916.02173-.02173.04813-.03259.07916-.03259h1.05252c.03415 0 .06055.01086.07916.03259.01862.01863.02795.04501.02795.07916v.44708c0 .25461-.05276.47659-.15836.66599-.10245.18939-.25305.33688-.45175.44244-.1987.10245-.43622.15369-.71255.15369l.00006-.00006zm2.60339 0c-.15524 0-.29651-.03104-.4238-.09314s-.22977-.14594-.30737-.2515-.11642-.2251-.11642-.35861c0-.21423.08694-.38501.2608-.5123s.40051-.21112.67996-.2515l.69394-.09779v-.13506c0-.14903-.04346-.26546-.1304-.34929-.08383-.08383-.22198-.12575-.41449-.12575-.13971 0-.25305.02794-.33997.08383-.08383.05589-.14282.1273-.17697.21423-.01862.04657-.05124.06985-.09781.06985h-.20959c-.03415 0-.06055-.00931-.07916-.02794-.01553-.02173-.02328-.04657-.02328-.07452 0-.04657.01709-.104.05124-.17232.03726-.06831.09314-.13506.16766-.20026s.16922-.11954.28409-.16299c.11798-.04657.2608-.06985.42847-.06985.18628 0 .34308.02484.47037.07452.12729.04657.22665.11021.29807.19095.07452.08073.12729.17232.15836.27478.03415.10246.05124.20647.05124.31203v1.50893c0 .03104-.01086.05743-.03259.07916-.01862.01862-.04346.02795-.07452.02795h-.21423c-.03415 0-.06055-.00931-.07916-.02795-.01862-.02173-.02795-.04813-.02795-.07916v-.20026c-.04037.05588-.0947.11176-.16299.16766-.0683.05276-.15369.09781-.25616.13507-.10245.03415-.22821.05124-.37723.05124l-.00006-.00003zm.09781-.34928c.12729 0 .24374-.0264.3493-.07916.10556-.05588.18784-.14127.24683-.25616.0621-.11487.09314-.25925.09314-.43311v-.1304l-.54022.07916c-.22043.03104-.38654.08383-.49832.15836-.11176.07141-.16766.16299-.16766.27478 0 .08694.02484.15991.07452.2189.05276.05588.11798.09781.19559.12576.08072.02795.16299.0419.24683.04193v-.00006zm2.76175.34928c-.31979 0-.5744-.09781-.76379-.2934-.18939-.1987-.2934-.46884-.31204-.81036-.00314-.04037-.0047-.09158-.0047-.15369 0-.06519.00156-.11798.0047-.15836.01242-.22044.06366-.41293.15369-.5775.09003-.16766.21268-.29651.36792-.38655.15836-.09004.34308-.13506.5542-.13506.23596 0 .43311.04968.59146.14903.16144.09935.28409.24062.36792.42381s.12576.39742.12576.64268v.07916c0 .03415-.01086.06055-.03259.07916-.01862.01862-.04346.02795-.07452.02795h-1.61139v.04193c.0062.12729.03415.24683.08383.35861.04968.10867.12109.19717.21423.26547s.20493.10245.33533.10245c.11176 0 .20493-.01709.27942-.05124.07452-.03415.13507-.07141.18164-.11176.04657-.04346.07761-.07608.09314-.09781.02795-.04037.04968-.06366.06519-.06985.01553-.00931.04037-.01398.07452-.01398h.22354c.03104 0 .05588.00931.07452.02795.02173.01553.03104.03882.02795.06985-.00314.04657-.02798.104-.07452.17233-.04657.06519-.11334.1304-.20026.19559s-.1925.11954-.31668.16299c-.12418.04037-.267.06055-.42847.06055zm-.63339-1.43442h1.27609v-.01398c0-.13972-.0264-.26392-.07916-.37257-.04968-.10867-.12265-.19405-.2189-.25615-.09625-.0652-.21112-.09779-.34464-.09779s-.24838.03259-.34464.09779c-.09314.0621-.16455.14748-.21423.25615s-.07452.23286-.07452.37257zm2.38449 1.38785c-.03104 0-.05743-.00931-.07916-.02795-.01862-.02173-.02795-.04813-.02795-.07916v-2.20753c0-.03105.00931-.05589.02795-.07452.02173-.02173.04813-.03259.07916-.03259h.2189c.03104 0 .05588.01086.07452.03259.02173.01863.03259.04347.03259.07452v.20493c.08072-.10556.18164-.19095.30273-.25615.12418-.06831.28253-.10246.47504-.10246.20181 0 .37259.04501.5123.13506.14282.08693.24994.20958.32135.36792.07141.15524.10712.33687.10712.54489v1.31335c0 .03104-.00931.05743-.02795.07916-.01862.01862-.04346.02795-.07452.02795h-.23285c-.03104 0-.05743-.00931-.07916-.02795-.01862-.02173-.02795-.04813-.02795-.07916v-1.29004c0-.21735-.05276-.38655-.15836-.50764-.10556-.12419-.2608-.18629-.46573-.18629-.1925 0-.34775.0621-.46573.18629-.11487.12109-.17233.2903-.17233.50764v1.29004c0 .03104-.01086.05743-.03259.07916-.01862.01862-.04346.02795-.07452.02795h-.23285zm3.70715 1.02459c-.21112 0-.38501-.02795-.52161-.08383-.13351-.05588-.23907-.12418-.31668-.20493-.07452-.07761-.12885-.1568-.16299-.23752-.03104-.07761-.04813-.13971-.05124-.18628-.00314-.03104.0062-.05743.02795-.07916.02484-.02173.05124-.03259.07916-.03259h.22354c.02795 0 .05124.0062.06985.01862s.03415.03882.04657.07916c.01862.04657.04657.09781.08383.15369.03726.05899.0947.10867.17233.14902.07761.04346.18628.06519.32602.06519.14594 0 .26859-.02017.36792-.06055.09937-.03726.17386-.10556.22354-.20493.05276-.09625.07916-.22977.07916-.40051v-.31668c-.07452.09625-.17233.17697-.2934.24219-.12109.0621-.27322.09314-.45642.09314-.17386 0-.32291-.02951-.44708-.0885-.12418-.0621-.22665-.14438-.30737-.24683-.07761-.10556-.1366-.2251-.17697-.35861-.03726-.13351-.05899-.27322-.06519-.41916-.00314-.08694-.00314-.17233 0-.25616.0062-.14594.02795-.28564.06519-.41914.04037-.13351.09937-.25304.17697-.35861.08072-.10556.18317-.18784.30737-.24683.12418-.0621.27322-.09314.44708-.09314.18628 0 .33997.03571.46106.10712.12418.06831.2251.15215.30273.2515v-.20026c0-.03105.00931-.05743.02795-.07916.02173-.02173.04813-.03259.07916-.03259h.21423c.03104 0 .05743.01086.07916.03259s.03259.04813.03259.07916v2.25877c0 .20801-.03571.39276-.10712.5542-.0683.16144-.1832.28876-.34464.3819-.15836.09314-.37259.13971-.6427.13971h.00003l-.00003.00003zm-.00928-1.37854c.15524 0 .27942-.03571.37259-.10712.09625-.07141.16611-.16144.20959-.27011.04657-.10867.07141-.2189.07452-.33066.00314-.04346.0047-.09625.0047-.15836 0-.06519-.00156-.11954-.0047-.16299-.00314-.11177-.02798-.22198-.07452-.33066-.04346-.10867-.11334-.19872-.20959-.27013-.09314-.07141-.21735-.10712-.37259-.10712s-.27945.03571-.37259.10712c-.09314.06831-.15991.1599-.20026.27478-.04037.11177-.06366.23286-.06985.36327-.00314.08072-.00314.16299 0 .24683.0062.1304.02948.25305.06985.36792.04037.11176.10712.20337.20026.27478.09314.0683.21735.10245.37259.10245z" fill="#25357a"/><path d="m411.76511 252.76917c-.03415 0-.06055-.00931-.07916-.02794-.01862-.02173-.02795-.04813-.02795-.07916v-3.04117c0-.03415.00931-.06055.02795-.07916.01862-.02173.04501-.03259.07916-.03259h1.27609c.23285 0 .42227.0388.56818.11642.14902.07452.25769.17697.32602.30737.07141.1304.10712.27634.10712.43777 0 .1273-.02173.23752-.06519.33066-.04037.09004-.09158.16457-.15369.22356-.0621.05589-.12265.09935-.18164.1304.12109.05899.22821.15524.32135.28876.09625.13351.14438.29495.14438.48434 0 .17078-.03882.32756-.11642.47038s-.19406.25771-.3493.34464c-.15213.08383-.34152.12575-.56818.12575h-1.30869zm.3493-.37723h.89886c.20181 0 .35706-.05434.46573-.16299.10867-.10867.16299-.24219.16299-.40051 0-.16457-.05432-.29962-.16299-.40518-.10867-.10867-.26392-.16299-.46573-.16299h-.89886v1.13171-.00003zm0-1.50431h.85693c.1987 0 .3493-.04501.45175-.13506.10245-.09314.15369-.21889.15369-.37724s-.05124-.27943-.15369-.36327-.25305-.12575-.45175-.12575h-.85693v1.00131zm3.26935 1.9281c-.15524 0-.29651-.03105-.4238-.09314-.12729-.0621-.22977-.14594-.30737-.2515s-.11642-.2251-.11642-.35861c0-.21423.08694-.38499.2608-.5123s.40051-.21114.67996-.2515l.69394-.09779v-.13506c0-.14903-.04346-.26546-.1304-.34929-.08383-.08383-.22198-.12575-.41449-.12575-.13971 0-.25305.02794-.33997.08383-.08383.05589-.14282.1273-.17697.21423-.01862.04657-.05124.06985-.09781.06985h-.20959c-.03415 0-.06055-.00931-.07916-.02794-.01553-.02173-.02328-.04657-.02328-.07452 0-.04657.01709-.104.05124-.17232.03726-.06831.09314-.13506.16766-.20026s.16922-.11954.28409-.16299c.11798-.04657.2608-.06985.42847-.06985.18628 0 .34308.02484.47037.07452.12729.04657.22665.11021.29807.19095.07452.08073.12729.17232.15836.27478.03415.10246.05124.20647.05124.31203v1.50894c0 .03105-.01086.05743-.03259.07916-.01862.01863-.04346.02794-.07452.02794h-.21423c-.03415 0-.06055-.00931-.07916-.02794-.01862-.02173-.02795-.04813-.02795-.07916v-.20026c-.04037.05589-.0947.11177-.16299.16766-.0683.05278-.15369.09779-.25616.13506-.10245.03415-.22821.05122-.37723.05122l-.00006-.00002zm.09781-.34928c.12729 0 .24374-.02638.3493-.07916.10556-.05589.18784-.14127.24683-.25615.0621-.11488.09314-.25925.09314-.43312v-.1304l-.54025.07916c-.22043.03105-.38654.08383-.49832.15836-.11176.07141-.16766.16299-.16766.27478 0 .08693.02484.1599.07452.21889.05276.05589.11798.09779.19559.12575.08072.02794.16299.04192.24683.04192l.00003-.00002zm1.90481.30272c-.03104 0-.05743-.00931-.07916-.02794-.01862-.02173-.02795-.04813-.02795-.07916v-2.20753c0-.03105.00931-.05589.02795-.07452.02173-.02173.04813-.03259.07916-.03259h.2189c.03104 0 .05588.01086.07452.03259.02173.01863.03259.04347.03259.07452v.20493c.08072-.10556.18164-.19095.30273-.25615.12418-.06831.28253-.10246.47504-.10246.20181 0 .37259.04501.5123.13506.14282.08694.24994.20958.32135.36792.07141.15524.10712.33687.10712.54491v1.31334c0 .03105-.00931.05743-.02795.07916-.01862.01863-.04346.02794-.07452.02794h-.23285c-.03104 0-.05743-.00931-.07916-.02794-.01862-.02173-.02795-.04813-.02795-.07916v-1.29005c0-.21735-.05276-.38655-.15836-.50764-.10556-.12419-.2608-.18629-.46573-.18629-.1925 0-.34775.0621-.46573.18629-.11487.12109-.17233.2903-.17233.50764v1.29005c0 .03105-.01086.05743-.03259.07916-.01862.01863-.04346.02794-.07452.02794h-.23285zm3.69318.04656c-.22043 0-.41138-.04192-.57285-.12575-.15836-.08693-.28098-.20958-.36792-.36792-.08694-.16145-.13351-.35394-.13971-.5775-.00311-.04657-.00467-.10867-.00467-.18629s.00156-.13972.00467-.18629c.0062-.22356.05276-.41449.13971-.57285.08694-.16145.20956-.28409.36792-.36792.16144-.08694.35239-.1304.57285-.1304.18008 0 .33377.02484.46106.07452.1304.04968.23752.11333.32135.19095s.14594.16145.18628.2515c.04346.09004.06674.17542.06985.25615.00314.03105-.0062.05589-.02795.07452-.02173.01863-.04813.02794-.07916.02794h-.22354c-.03104 0-.05432-.00621-.06985-.01863-.01553-.01552-.03104-.04036-.04657-.07452-.05588-.15215-.13196-.25925-.22821-.32135s-.21579-.09314-.35861-.09314c-.18628 0-.33844.05743-.45642.17232-.11487.11488-.17697.29962-.18628.55421-.00311.11177-.00311.22044 0 .326.00931.25771.07141.44398.18628.55887.11798.11177.27011.16766.45642.16766.14282 0 .26236-.03105.35861-.09314.09625-.0621.17233-.1692.22821-.32135.01553-.03415.03104-.05743.04657-.06985.01553-.01552.03882-.02328.06985-.02328h.22354c.03104 0 .05743.00931.07916.02794s.03104.04347.02795.07452c-.00314.0652-.01709.13194-.0419.20026-.02484.06831-.06519.13815-.12109.20958-.05276.06831-.11954.1304-.20026.18629-.08072.05278-.17853.09625-.2934.1304-.11176.03105-.23907.04657-.3819.04657v-.00002zm2.58478 0c-.23596 0-.43311-.04501-.59146-.13506s-.27942-.21423-.36325-.37257c-.08383-.16145-.1304-.34464-.13971-.54955-.00314-.05278-.0047-.11954-.0047-.20026 0-.08383.00156-.15057.0047-.20026.00931-.20802.05588-.3912.13971-.54955.08694-.15836.20956-.28255.36792-.37257s.35394-.13506.58682-.13506.42847.04501.58682.13506.27945.21423.36325.37257c.08694.15836.13507.34154.14438.54955.00314.04968.0047.11642.0047.20026 0 .08073-.00156.14748-.0047.20026-.00931.20493-.05588.38811-.13971.54955-.08383.15836-.20493.28255-.36325.37257-.15836.09004-.3555.13506-.59146.13506zm0-.35861c.1925 0 .34619-.06055.46106-.18163.11487-.12419.17697-.30428.18628-.54024.00314-.04657.0047-.10556.0047-.17697s-.00156-.1304-.0047-.17697c-.00931-.23598-.07141-.41449-.18628-.53558-.11487-.12419-.26859-.18629-.46106-.18629s-.34775.0621-.46573.18629c-.11487.12109-.17542.29962-.18164.53558-.00314.04657-.0047.10556-.0047.17697s.00156.1304.0047.17697c.0062.23598.06674.41605.18164.54024.11798.12109.27322.18163.46573.18163zm1.78836.31205c-.03104 0-.05743-.00931-.07916-.02794-.01862-.02173-.02795-.04813-.02795-.07916v-2.20753c0-.03105.00931-.05589.02795-.07452.02173-.02173.04813-.03259.07916-.03259h.2189c.03104 0 .05588.01086.07452.03259.02173.01863.03259.04347.03259.07452v.20493c.08072-.10556.18164-.19095.30273-.25615.12418-.06831.28253-.10246.47504-.10246.20181 0 .37259.04501.5123.13506.14282.08694.24994.20958.32135.36792.07141.15524.10712.33687.10712.54491v1.31334c0 .03105-.00931.05743-.02795.07916-.01862.01863-.04346.02794-.07452.02794h-.23285c-.03104 0-.05743-.00931-.07916-.02794-.01862-.02173-.02795-.04813-.02795-.07916v-1.29005c0-.21735-.05276-.38655-.15836-.50764-.10556-.12419-.2608-.18629-.46573-.18629-.1925 0-.34775.0621-.46573.18629-.11487.12109-.17233.2903-.17233.50764v1.29005c0 .03105-.01086.05743-.03259.07916-.01862.01863-.04346.02794-.07452.02794h-.23285zm3.67923.04656c-.31979 0-.5744-.09779-.76379-.29341-.18939-.19872-.2934-.46883-.31204-.81036-.00314-.04036-.0047-.09158-.0047-.15369 0-.0652.00156-.11798.0047-.15836.01242-.22044.06366-.41293.15369-.5775.09003-.16766.21268-.29651.36792-.38655.15836-.09004.34308-.13506.5542-.13506.23596 0 .43311.04968.59146.14903.16144.09935.28409.24062.36792.42381s.12576.39742.12576.6427v.07916c0 .03415-.01086.06055-.03259.07916-.01862.01863-.04346.02794-.07452.02794h-1.61139v.04192c.0062.1273.03415.24683.08383.35861.04968.10867.12109.19716.21423.26546.09314.06831.20493.10246.33533.10246.11176 0 .20493-.01707.27942-.05122.07452-.03415.13507-.07141.18164-.11177.04657-.04347.07761-.07607.09314-.09779.02795-.04036.04968-.06364.06519-.06985.01553-.00931.04037-.01398.07452-.01398h.22354c.03104 0 .05588.00931.07452.02794.02173.01552.03104.0388.02795.06985-.00314.04657-.02798.104-.07452.17232-.04657.0652-.11334.1304-.20026.1956-.08694.0652-.1925.11954-.31668.16299-.12421.04036-.26703.06055-.42847.06055v.00003zm-.63339-1.43441h1.27609v-.01398c0-.13972-.0264-.26392-.07916-.37257-.04968-.10867-.12265-.19405-.2189-.25615-.09625-.0652-.21112-.09779-.34464-.09779s-.24838.03259-.34464.09779c-.09314.0621-.16455.14748-.21423.25615s-.07452.23286-.07452.37257z" fill="#25357a"/><path d="m548.76459 202.17188c-.04034 0-.07465-.01212-.10291-.03633-.02423-.02824-.03632-.06256-.03632-.10292v-.19374c0-.03633.01007-.07669.03027-.12109s.06055-.09283.12109-.14531l1.28351-1.28352c.20587-.17355.36731-.32088.48438-.44197.12109-.12512.20587-.24419.25427-.35721.05249-.11302.07874-.23007.07874-.35117 0-.23007-.06458-.4117-.19373-.54491-.12915-.13724-.32086-.20586-.5752-.20586-.16144 0-.30072.03432-.41772.10292-.11707.06458-.2099.1554-.2785.27245-.06458.11302-.10693.24219-.12714.38748-.00806.05247-.03027.08881-.06659.10898-.03229.02019-.06256.03027-.09082.03027h-.31482c-.03632 0-.06659-.01009-.09082-.03027-.02423-.02422-.03632-.05247-.03632-.08476.00403-.15338.03632-.30676.09686-.46013.06055-.15741.14935-.29868.26642-.42381.12109-.12512.26843-.22603.44196-.30272.17761-.08073.38342-.12109.61755-.12109.31885 0 .57922.05853.78101.17558.20587.11302.35724.26437.4541.45409.09686.1897.14532.39757.14532.6236 0 .1776-.03027.34106-.09082.49042-.06055.14531-.14935.28859-.26642.42986-.11304.13724-.25427.2785-.42383.42381l-1.16241 1.1806h1.88898c.04437 0 .07874.01212.10291.03633.02826.02422.04236.05853.04236.10292v.24823c0 .04036-.01416.07468-.04236.10292-.02423.02422-.05853.03633-.10291.03633h-2.66998l-.00012.00003zm4.78906 0c-.04034 0-.07465-.01212-.10291-.03633-.02423-.02824-.03632-.06256-.03632-.10292v-3.39046l-1.005.77496c-.03229.02422-.06659.03432-.10291.03027-.03632-.00403-.06659-.0222-.09082-.05449l-.15741-.19978c-.02423-.03633-.0343-.07265-.03027-.10898.00806-.03633.02826-.0666.06055-.09082l1.31989-1.01714c.02826-.02019.0545-.03229.07874-.03633.02423-.00403.05048-.00604.07874-.00604h.30878c.04034 0 .07263.01413.09686.04237.02423.02422.03632.0565.03632.09686v3.95958c0 .04036-.01208.07468-.03632.10292-.02423.02422-.05652.03632-.09686.03632h-.32104zm2.08875 0c-.03632 0-.06659-.01212-.09082-.03633-.0202-.02824-.03027-.06055-.03027-.09686 0-.02019.00201-.03633.00604-.04845.00806-.01212.01416-.0222.01819-.03027l.92633-1.2896c-.10089.02422-.2099.03633-.32697.03633-.22601-.00403-.42786-.0444-.60547-.12109s-.32898-.17961-.4541-.30878c-.12512-.13319-.21997-.28255-.28455-.44803s-.09686-.33905-.09686-.52068c0-.1776.03027-.35117.09082-.52068.06458-.16953.15942-.32291.28455-.46013.12915-.13724.28857-.24622.47827-.32693.1897-.08476.4137-.12714.67206-.12714.25427 0 .47626.04036.66595.12109.19373.07669.35516.18365.48438.32088.13318.13319.23004.28456.29059.45409.06458.16953.09686.34509.09686.52673 0 .1655-.02423.31685-.07263.45409s-.10693.26035-.1756.36932c-.06458.10898-.12915.20988-.19373.30272l-1.16241 1.62863c-.01611.02019-.03833.04642-.06659.0787-.02826.02824-.07062.04237-.12714.04237h-.32697.00006zm.58728-1.95559c.16949 0 .32489-.03633.46619-.10898.14532-.07669.26031-.18163.34509-.31483.08478-.13724.12714-.3007.12714-.49042s-.04236-.35117-.12714-.48434c-.08478-.13724-.19977-.24219-.34509-.31483-.1413-.07669-.29669-.11504-.46619-.11504-.16547 0-.31885.03835-.46014.11504-.1413.07265-.25427.1776-.33905.31483-.08478.13319-.12714.29465-.12714.48434s.04236.35316.12714.49042c.08478.13319.19775.23814.33905.31483.1413.07265.29468.10898.46014.10898z" fill="#25357a"/><path d="m581.63947 188.17883c-.04034 0-.07465-.01212-.10291-.03633-.02423-.02824-.03632-.06256-.03632-.10292v-.19374c0-.03633.01007-.07669.03027-.12109s.06055-.09283.12109-.14531l1.28351-1.28352c.20587-.17355.36731-.32088.48438-.44197.12109-.12512.20587-.24419.25427-.35721.05249-.11302.07874-.23007.07874-.35117 0-.23007-.06458-.4117-.19373-.54491-.12915-.13724-.32086-.20586-.5752-.20586-.16144 0-.30072.03432-.41772.10292-.11707.06458-.2099.1554-.2785.27245-.06458.11302-.10693.24219-.12714.38748-.00806.05247-.03027.08881-.06659.10898-.03229.02019-.06256.03027-.09082.03027h-.31482c-.03632 0-.06659-.01009-.09082-.03027-.02423-.02422-.03632-.05247-.03632-.08476.00403-.15338.03632-.30676.09686-.46013.06055-.15741.14935-.29868.26642-.42381.12109-.12512.26843-.22603.44196-.30272.17761-.08073.38342-.12109.61755-.12109.31885 0 .57922.05853.78101.17558.20587.11302.35724.26437.4541.45409.09686.1897.14532.39757.14532.6236 0 .1776-.03027.34106-.09082.49042-.06055.14531-.14935.28859-.26642.42986-.11304.13724-.25427.2785-.42383.42381l-1.16241 1.1806h1.88898c.04437 0 .07874.01212.10291.03633.02826.02422.04236.05853.04236.10292v.24823c0 .04036-.01416.07468-.04236.10292-.02423.02422-.05853.03633-.10291.03633h-2.66998l-.00012.00003zm3.55395 0c-.04034 0-.07465-.01212-.10291-.03633-.02423-.02824-.03632-.06256-.03632-.10292v-.19374c0-.03633.01007-.07669.03027-.12109s.06055-.09283.12109-.14531l1.28351-1.28352c.20587-.17355.36731-.32088.48438-.44197.12109-.12512.20587-.24419.25427-.35721.05249-.11302.07874-.23007.07874-.35117 0-.23007-.06458-.4117-.19373-.54491-.12915-.13724-.32086-.20586-.5752-.20586-.16144 0-.30072.03432-.41772.10292-.11707.06458-.2099.1554-.2785.27245-.06458.11302-.10693.24219-.12714.38748-.00806.05247-.03027.08881-.06659.10898-.03229.02019-.06256.03027-.09082.03027h-.31482c-.03632 0-.06659-.01009-.09082-.03027-.02423-.02422-.03632-.05247-.03632-.08476.00403-.15338.03632-.30676.09686-.46013.06055-.15741.14935-.29868.26642-.42381.12109-.12512.26843-.22603.44196-.30272.17761-.08073.38342-.12109.61755-.12109.31885 0 .57922.05853.78101.17558.20587.11302.35724.26437.4541.45409.09686.1897.14532.39757.14532.6236 0 .1776-.03027.34106-.09082.49042-.06055.14531-.14935.28859-.26642.42986-.11304.13724-.25427.2785-.42383.42381l-1.16248 1.1806h1.88898c.04437 0 .07874.01212.10291.03633.02826.02422.04236.05853.04236.10292v.24823c0 .04036-.01416.07468-.04236.10292-.02423.02422-.05853.03633-.10291.03633h-2.66998l-.00006.00003zm4.789 0c-.04034 0-.07465-.01212-.10291-.03633-.02423-.02824-.03632-.06256-.03632-.10292v-3.39046l-1.005.77496c-.03229.02422-.06659.03432-.10291.03027-.03632-.00403-.06659-.0222-.09082-.05449l-.15741-.19978c-.02423-.03633-.0343-.07265-.03027-.10898.00806-.03633.02826-.0666.06055-.09082l1.31989-1.01714c.02826-.02019.0545-.03229.07874-.03633.02423-.00403.05048-.00604.07874-.00604h.30878c.04034 0 .07263.01413.09686.04237.02423.02422.03632.0565.03632.09686v3.95958c0 .04036-.01208.07468-.03632.10292-.02423.02422-.05652.03632-.09686.03632h-.32104z" fill="#25357a"/><path d="m587.26593 156.927c-.04034 0-.07465-.01212-.10291-.03633-.02423-.02824-.03632-.06256-.03632-.10292v-.19374c0-.03633.01007-.07669.03027-.12109s.06055-.09283.12109-.14531l1.28351-1.28352c.20587-.17355.36731-.32088.48438-.44197.12109-.12512.20587-.24419.25427-.35721.05249-.11302.07874-.23007.07874-.35117 0-.23007-.06458-.4117-.19373-.54491-.12915-.13724-.32086-.20586-.5752-.20586-.16144 0-.30072.03432-.41772.10292-.11707.06458-.2099.1554-.2785.27245-.06458.11302-.10693.24219-.12714.38748-.00806.05247-.03027.08881-.06659.10898-.03229.02019-.06256.03027-.09082.03027h-.31482c-.03632 0-.06659-.01009-.09082-.03027-.02423-.02422-.03632-.05247-.03632-.08476.00403-.15338.03632-.30676.09686-.46013.06055-.15741.14935-.29868.26642-.42381.12109-.12512.26843-.22603.44196-.30272.17761-.08073.38342-.12109.61755-.12109.31885 0 .57922.05853.78101.17558.20587.11302.35724.26437.4541.45409.09686.1897.14532.39757.14532.6236 0 .1776-.03027.34106-.09082.49042-.06055.14531-.14935.28859-.26642.42986-.11304.13724-.25427.2785-.42383.42381l-1.16241 1.1806h1.88898c.04437 0 .07874.01212.10291.03633.02826.02422.04236.05853.04236.10292v.24823c0 .04036-.01416.07468-.04236.10292-.02423.02422-.05853.03633-.10291.03633h-2.66998l-.00012.00003zm3.55396 0c-.04034 0-.07465-.01212-.10291-.03633-.02423-.02824-.03632-.06256-.03632-.10292v-.19374c0-.03633.01007-.07669.03027-.12109s.06055-.09283.12109-.14531l1.28351-1.28352c.20587-.17355.36731-.32088.48438-.44197.12109-.12512.20587-.24419.25427-.35721.05249-.11302.07874-.23007.07874-.35117 0-.23007-.06458-.4117-.19373-.54491-.12915-.13724-.32086-.20586-.5752-.20586-.16144 0-.30072.03432-.41772.10292-.11707.06458-.2099.1554-.2785.27245-.06458.11302-.10693.24219-.12714.38748-.00806.05247-.03027.08881-.06659.10898-.03229.02019-.06256.03027-.09082.03027h-.31482c-.03632 0-.06659-.01009-.09082-.03027-.02423-.02422-.03632-.05247-.03632-.08476.00403-.15338.03632-.30676.09686-.46013.06055-.15741.14935-.29868.26642-.42381.12109-.12512.26843-.22603.44196-.30272.17761-.08073.38342-.12109.61755-.12109.31885 0 .57922.05853.78101.17558.20587.11302.35724.26437.4541.45409.09686.1897.14532.39757.14532.6236 0 .1776-.03027.34106-.09082.49042-.06055.14531-.14935.28859-.26642.42986-.11304.13724-.25427.2785-.42383.42381l-1.16248 1.1806h1.88898c.04437 0 .07874.01212.10291.03633.02826.02422.04236.05853.04236.10292v.24823c0 .04036-.01416.07468-.04236.10292-.02423.02422-.05853.03633-.10291.03633h-2.66998l-.00006.00003zm3.55389 0c-.04034 0-.07465-.01212-.10291-.03633-.02423-.02824-.03632-.06256-.03632-.10292v-.19374c0-.03633.01007-.07669.03027-.12109s.06055-.09283.12109-.14531l1.28351-1.28352c.20587-.17355.36731-.32088.48438-.44197.12109-.12512.20587-.24419.25427-.35721.05249-.11302.07874-.23007.07874-.35117 0-.23007-.06458-.4117-.19373-.54491-.12915-.13724-.32086-.20586-.5752-.20586-.16144 0-.30072.03432-.41772.10292-.11707.06458-.2099.1554-.2785.27245-.06458.11302-.10693.24219-.12714.38748-.00806.05247-.03027.08881-.06659.10898-.03229.02019-.06256.03027-.09082.03027h-.31482c-.03632 0-.06659-.01009-.09082-.03027-.02423-.02422-.03632-.05247-.03632-.08476.00403-.15338.03632-.30676.09686-.46013.06055-.15741.14935-.29868.26642-.42381.12109-.12512.26843-.22603.44196-.30272.17761-.08073.38342-.12109.61755-.12109.31885 0 .57922.05853.78101.17558.20587.11302.35724.26437.4541.45409.09686.1897.14532.39757.14532.6236 0 .1776-.03027.34106-.09082.49042-.06055.14531-.14935.28859-.26642.42986-.11304.13724-.25427.2785-.42383.42381l-1.16248 1.1806h1.88898c.04437 0 .07874.01212.10291.03633.02826.02422.04236.05853.04236.10292v.24823c0 .04036-.01416.07468-.04236.10292-.02423.02422-.05853.03633-.10291.03633h-2.66998l-.00006.00003z" fill="#25357a"/><path d="m567.5791 156.927c-.04034 0-.07465-.01212-.10291-.03633-.02423-.02824-.03632-.06256-.03632-.10292v-.19374c0-.03633.01007-.07669.03027-.12109s.06055-.09283.12109-.14531l1.28351-1.28352c.20587-.17355.36731-.32088.48438-.44197.12109-.12512.20587-.24419.25427-.35721.05249-.11302.07874-.23007.07874-.35117 0-.23007-.06458-.4117-.19373-.54491-.12915-.13724-.32086-.20586-.5752-.20586-.16144 0-.30072.03432-.41772.10292-.11707.06458-.2099.1554-.2785.27245-.06458.11302-.10693.24219-.12714.38748-.00806.05247-.03027.08881-.06659.10898-.03229.02019-.06256.03027-.09082.03027h-.31482c-.03632 0-.06659-.01009-.09082-.03027-.02423-.02422-.03632-.05247-.03632-.08476.00403-.15338.03632-.30676.09686-.46013.06055-.15741.14935-.29868.26642-.42381.12109-.12512.26843-.22603.44196-.30272.17761-.08073.38342-.12109.61755-.12109.31885 0 .57922.05853.78101.17558.20587.11302.35724.26437.4541.45409.09686.1897.14532.39757.14532.6236 0 .1776-.03027.34106-.09082.49042-.06055.14531-.14935.28859-.26642.42986-.11304.13724-.25427.2785-.42383.42381l-1.16241 1.1806h1.88898c.04437 0 .07874.01212.10291.03633.02826.02422.04236.05853.04236.10292v.24823c0 .04036-.01416.07468-.04236.10292-.02423.02422-.05853.03633-.10291.03633h-2.66998l-.00012.00003zm3.55396 0c-.04034 0-.07465-.01212-.10291-.03633-.02423-.02824-.03632-.06256-.03632-.10292v-.19374c0-.03633.01007-.07669.03027-.12109s.06055-.09283.12109-.14531l1.28351-1.28352c.20587-.17355.36731-.32088.48438-.44197.12109-.12512.20587-.24419.25427-.35721.05249-.11302.07874-.23007.07874-.35117 0-.23007-.06458-.4117-.19373-.54491-.12915-.13724-.32086-.20586-.5752-.20586-.16144 0-.30072.03432-.41772.10292-.11707.06458-.2099.1554-.2785.27245-.06458.11302-.10693.24219-.12714.38748-.00806.05247-.03027.08881-.06659.10898-.03229.02019-.06256.03027-.09082.03027h-.31482c-.03632 0-.06659-.01009-.09082-.03027-.02423-.02422-.03632-.05247-.03632-.08476.00403-.15338.03632-.30676.09686-.46013.06055-.15741.14935-.29868.26642-.42381.12109-.12512.26843-.22603.44196-.30272.17761-.08073.38342-.12109.61755-.12109.31885 0 .57922.05853.78101.17558.20587.11302.35724.26437.4541.45409.09686.1897.14532.39757.14532.6236 0 .1776-.03027.34106-.09082.49042-.06055.14531-.14935.28859-.26642.42986-.11304.13724-.25427.2785-.42383.42381l-1.16248 1.1806h1.88898c.04437 0 .07874.01212.10291.03633.02826.02422.04236.05853.04236.10292v.24823c0 .04036-.01416.07468-.04236.10292-.02423.02422-.05853.03633-.10291.03633h-2.66998l-.00006.00003zm5.03723.06055c-.2785 0-.51465-.04237-.70837-.12714-.1897-.08881-.34509-.20988-.46619-.36327s-.2099-.32896-.26642-.52673c-.05249-.19778-.08276-.40765-.09082-.62965-.00403-.10898-.00806-.22401-.01208-.34509v-.36327c.00403-.12512.00806-.24419.01208-.35721.00403-.22198.0343-.43188.09082-.62965.06055-.20181.14935-.3774.26642-.52673.12109-.15338.2785-.27245.47223-.35721.19373-.08881.42786-.13319.70233-.13319.2785 0 .51263.0444.70233.13319.19373.08476.35114.20383.47223.35721.12109.14934.2099.32492.26642.52673.06055.19778.09283.40765.09686.62965.00409.11302.0061.23209.0061.35721.00409.12109.00409.24219 0 .36327 0 .12109-.00201.23611-.0061.34509-.00409.22198-.03638.43188-.09686.62965-.05652.19778-.14532.37335-.26642.52673-.11707.15338-.27246.27448-.46619.36327-.1897.08476-.42584.12714-.70837.12714zm0-.51463c.31482 0 .54694-.10292.69629-.30878.15338-.20988.23212-.49445.23615-.85367.00806-.11705.01208-.23007.01208-.33905v-.33299c0-.11302-.00403-.22401-.01208-.33299-.00403-.35117-.08276-.63168-.23615-.84155-.14935-.21391-.38141-.32088-.69629-.32088-.31079 0-.54291.10696-.69629.32088-.14935.20988-.22803.49042-.23615.84155 0 .10898-.00201.21999-.00604.33299v.33299c.00403.10898.00604.22198.00604.33905.00806.35922.08881.64378.24219.85367.15338.20586.38342.30878.69019.30878z" fill="#25357a"/><path d="m547.72424 156.9267c-.04034 0-.07465-.01212-.10291-.03633-.02423-.02824-.03632-.06256-.03632-.10292v-.19374c0-.03633.01007-.07669.03027-.12109s.06055-.09283.12109-.14531l1.28351-1.28352c.20587-.17355.36731-.32088.48438-.44197.12109-.12512.20587-.24419.25427-.35721.05249-.11302.07874-.23007.07874-.35117 0-.23007-.06458-.4117-.19373-.54491-.12915-.13724-.32086-.20586-.5752-.20586-.16144 0-.30072.03432-.41772.10292-.11707.06458-.2099.1554-.2785.27245-.06458.11302-.10693.24219-.12714.38748-.00806.05247-.03027.08881-.06659.10898-.03229.02019-.06256.03027-.09082.03027h-.31482c-.03632 0-.06659-.01009-.09082-.03027-.02423-.02422-.03632-.05247-.03632-.08476.00403-.15338.03632-.30676.09686-.46013.06055-.15741.14935-.29868.26642-.42381.12109-.12512.26843-.22603.44196-.30272.17761-.08073.38342-.12109.61755-.12109.31885 0 .57922.05853.78101.17558.20587.11302.35724.26437.4541.45409.09686.1897.14532.39757.14532.6236 0 .1776-.03027.34106-.09082.49042-.06055.14531-.14935.28859-.26642.42986-.11304.13724-.25427.2785-.42383.42381l-1.16241 1.1806h1.88898c.04437 0 .07874.01212.10291.03633.02826.02422.04236.05853.04236.10292v.24823c0 .04036-.01416.07468-.04236.10292-.02423.02422-.05853.03633-.10291.03633h-2.66998l-.00012.00003zm4.78907 0c-.04034 0-.07465-.01212-.10291-.03633-.02423-.02824-.03632-.06256-.03632-.10292v-3.39046l-1.005.77496c-.03229.02422-.06659.03432-.10291.03027-.03632-.00403-.06659-.0222-.09082-.05449l-.15741-.19978c-.02423-.03633-.0343-.07265-.03027-.10898.00806-.03633.02826-.0666.06055-.09082l1.31989-1.01714c.02826-.02019.0545-.03229.07874-.03633.02423-.00403.05048-.00604.07874-.00604h.30878c.04034 0 .07263.01413.09686.04237.02423.02422.03632.0565.03632.09686v3.95958c0 .04036-.01208.07468-.03632.10292-.02423.02422-.05652.03632-.09686.03632h-.32104zm2.84552.06054c-.23407 0-.45001-.02824-.64783-.08476-.19373-.06055-.36127-.14531-.5025-.25427-.13721-.11302-.2442-.24823-.32086-.40564s-.11505-.33501-.11505-.53279c0-.24622.05853-.45811.1756-.63571.12109-.1776.28052-.31281.47827-.40564-.15741-.09283-.28052-.21391-.36932-.36327-.08881-.14934-.13318-.32693-.13318-.53279 0-.24219.05853-.44601.1756-.6115.12109-.16953.28857-.3007.5025-.39354.21796-.09283.47021-.13925.75677-.13925.28253 0 .53076.04642.74469.13925.21796.08881.38544.21796.5025.38748.12109.16953.18164.37335.18164.6115 0 .20586-.04437.38547-.13318.53883-.08881.14934-.2099.27043-.36328.36327.19775.09283.35516.22804.47223.40564.12109.1776.18164.3895.18164.63571 0 .26236-.06659.49042-.19977.68414-.13318.1897-.31885.33704-.55701.44197-.23816.10091-.51465.15137-.82947.15137zm0-.48436c.18567 0 .35315-.03229.5025-.09686s.26843-.1554.35724-.27245c.08881-.12109.13318-.26236.13318-.42381 0-.1655-.04437-.30473-.13318-.41776-.08881-.11705-.20789-.20586-.35724-.26639-.14935-.06458-.31683-.09686-.5025-.09686s-.35516.03229-.50854.09686c-.14935.06055-.26843.14934-.35724.26639-.08881.11302-.13318.25227-.13318.41776 0 .16145.04437.30272.13318.42381.08881.11705.20789.20787.35724.27245.15338.06458.32288.09686.50854.09686zm0-2.05243c.15338 0 .29468-.02824.42383-.08476.13318-.0565.23816-.13319.31482-.23007.08075-.09686.12109-.21391.12109-.35117s-.03833-.2563-.11505-.35721c-.07263-.10091-.1756-.1776-.30878-.23007-.12915-.0565-.27448-.08476-.43591-.08476s-.30878.02824-.44196.08476c-.12915.05247-.23212.12917-.30878.23007s-.11505.21999-.11505.35721c0 .14127.03833.26236.11505.36327.07666.09686.17963.17154.30878.22401.13318.05247.28052.0787.44196.0787z" fill="#25357a"/><path d="m524.8241 157.10242c-.04034 0-.07465-.01212-.10291-.03633-.02423-.02824-.03632-.06256-.03632-.10292v-.19374c0-.03633.01007-.07669.03027-.12109s.06055-.09283.12109-.14531l1.28351-1.28352c.20587-.17355.36731-.32088.48438-.44197.12109-.12512.20587-.24419.25427-.35721.05249-.11302.07874-.23007.07874-.35117 0-.23007-.06458-.4117-.19373-.54491-.12915-.13724-.32086-.20586-.5752-.20586-.16144 0-.30072.03432-.41772.10292-.11707.06458-.2099.1554-.2785.27245-.06458.11302-.10693.24219-.12714.38748-.00806.05247-.03027.08881-.06659.10898-.03229.02019-.06256.03027-.09082.03027h-.31482c-.03632 0-.06659-.01009-.09082-.03027-.02423-.02422-.03632-.05247-.03632-.08476.00403-.15338.03632-.30676.09686-.46013.06055-.15741.14935-.29868.26642-.42381.12109-.12512.26843-.22603.44196-.30272.17761-.08073.38342-.12109.61755-.12109.31885 0 .57922.05853.78101.17558.20587.11302.35724.26437.4541.45409.09686.1897.14532.39757.14532.6236 0 .1776-.03027.34106-.09082.49042-.06055.14531-.14935.28859-.26642.42986-.11304.13724-.25427.2785-.42383.42381l-1.16241 1.1806h1.88898c.04437 0 .07874.01212.10291.03633.02826.02422.04236.05853.04236.10292v.24823c0 .04036-.01416.07468-.04236.10292-.02423.02422-.05853.03633-.10291.03633h-2.66998l-.00012.00003zm4.78906 0c-.04034 0-.07465-.01212-.10291-.03633-.02423-.02824-.03632-.06256-.03632-.10292v-3.39046l-1.005.77496c-.03229.02422-.06659.03432-.10291.03027-.03632-.00403-.06659-.0222-.09082-.05449l-.15741-.19978c-.02423-.03633-.0343-.07265-.03027-.10898.00806-.03633.02826-.0666.06055-.09082l1.31989-1.01714c.02826-.02019.0545-.03229.07874-.03633.02423-.00403.05048-.00604.07874-.00604h.30878c.04034 0 .07263.01413.09686.04237.02423.02422.03632.0565.03632.09686v3.95958c0 .04036-.01208.07468-.03632.10292-.02423.02422-.05652.03632-.09686.03632h-.32104zm2.78497.06054c-.33502 0-.61957-.0666-.8537-.1998-.23407-.13724-.4137-.31483-.53882-.53279-.12109-.22198-.18164-.46214-.18164-.72047 0-.12109.01416-.23611.04236-.34509.03229-.11302.07062-.21796.11505-.31483.0484-.10091.09485-.1897.13922-.26639.04846-.08073.09082-.14531.12714-.19374l1.15033-1.60442c.0202-.02019.04437-.0444.07263-.07265.02826-.03229.07062-.04845.12714-.04845h.32086c.03632 0 .06458.01413.08478.04237.02423.02422.03632.05449.03632.09082 0 .01614-.00201.03229-.00604.04845-.00403.01212-.01007.0222-.01819.03027l-.88391 1.23511c.04846-.01614.10291-.02625.16345-.03027.06458-.00807.12512-.01212.18164-.01212.22198.00403.42383.0444.60547.12109s.33704.18163.46619.31483c.13318.12917.23407.28052.30273.45409.0686.16953.10291.35117.10291.54491 0 .25427-.06055.49242-.18164.71442-.12109.22198-.29871.40161-.53278.53883-.23004.13724-.51062.20586-.84155.20586l.00006-.00003zm-.00604-.51461c.16949 0 .32697-.03633.47223-.10898s.26239-.1776.35114-.31483c.09283-.14127.13922-.31281.13922-.51462 0-.20586-.04437-.3774-.13318-.51462-.08881-.14127-.20789-.24622-.35724-.31483-.14532-.07265-.30273-.10898-.47223-.10898s-.32697.03633-.47223.10898c-.14532.06862-.2644.17355-.35724.31483-.08881.13724-.13318.30878-.13318.51462 0 .20181.04437.37335.13318.51462.09283.13724.21191.24219.35724.31483s.30273.10898.47223.10898z" fill="#25357a"/><path d="m588.35919 111.16266c-.27991 0-.51721-.0426-.71198-.12779-.19067-.08925-.34686-.21095-.46857-.3651-.1217-.15415-.21094-.33062-.26776-.5294-.05273-.19878-.08313-.40972-.09131-.63284-.00409-.10953-.00812-.22515-.01215-.34685v-.3651c.00409-.12576.00812-.24543.01215-.35902.00409-.22312.03448-.43406.09131-.63284.06085-.20283.15009-.3793.26776-.5294.1217-.15415.27991-.27383.47461-.35902.1947-.08925.42999-.13387.70587-.13387.27991 0 .5152.04462.70587.13387.1947.08519.35291.20486.47461.35902.1217.1501.21094.32656.26776.5294.06085.19878.09332.40972.09735.63284.00403.11359.0061.23326.0061.35902.00409.1217.00409.2434 0 .3651 0 .1217-.00201.23732-.0061.34685-.00409.22312-.0365.43406-.09735.63284-.05676.19878-.14606.37524-.26776.5294-.11761.15415-.2738.27585-.46857.3651-.19067.08519-.42798.12779-.71198.12779h.00012zm0-.51723c.31641 0 .54968-.10345.69977-.31034.15417-.21095.23328-.49694.2373-.85799.00812-.11764.01215-.23123.01215-.34076v-.33468c0-.11359-.00409-.22515-.01215-.33468-.00409-.35293-.08319-.63487-.2373-.84582-.15009-.215-.38336-.32251-.69977-.32251-.31238 0-.54559.1075-.69977.32251-.15009.21095-.22919.49289-.2373.84582 0 .10953-.00201.22109-.0061.33468v.33468c.00409.10953.0061.22312.0061.34076.00812.36104.08923.64704.24341.85799.15417.20689.38538.31034.69366.31034zm3.86402.51723c-.27991 0-.51721-.0426-.71198-.12779-.19067-.08925-.34686-.21095-.46857-.3651s-.21094-.33062-.26776-.5294c-.05273-.19878-.08313-.40972-.09131-.63284-.00403-.10953-.00812-.22515-.01215-.34685v-.3651c.00409-.12576.00812-.24543.01215-.35902.00403-.22312.03448-.43406.09131-.63284.06085-.20283.15009-.3793.26776-.5294.1217-.15415.27991-.27383.47461-.35902.1947-.08925.42999-.13387.70587-.13387.27991 0 .5152.04462.70587.13387.1947.08519.35291.20486.47461.35902.1217.1501.21094.32656.26776.5294.06085.19878.09332.40972.09735.63284.00403.11359.0061.23326.0061.35902.00409.1217.00409.2434 0 .3651 0 .1217-.00201.23732-.0061.34685-.00409.22312-.0365.43406-.09735.63284-.05676.19878-.14606.37524-.26776.5294-.11761.15415-.2738.27585-.46857.3651-.19067.08519-.42798.12779-.71198.12779h.00012zm0-.51723c.31641 0 .54968-.10345.69977-.31034.15417-.21095.23328-.49694.2373-.85799.00812-.11764.01215-.23123.01215-.34076v-.33468c0-.11359-.00409-.22515-.01215-.33468-.00409-.35293-.08319-.63487-.2373-.84582-.15009-.215-.38336-.32251-.69977-.32251-.31238 0-.54559.1075-.69977.32251-.15009.21095-.22919.49289-.2373.84582 0 .10953-.00201.22109-.0061.33468v.33468c.00403.10953.0061.22312.0061.34076.00812.36104.08923.64704.24341.85799.15417.20689.38538.31034.69366.31034zm3.10943.45638c-.0365 0-.06696-.01217-.09131-.03651-.02026-.0284-.03046-.06085-.03046-.09736 0-.02028.00201-.03651.0061-.04868.00812-.01217.01422-.02231.01825-.03043l.93103-1.29611c-.10144.02434-.21094.03651-.32861.03651-.22717-.00406-.42999-.04463-.60852-.1217-.17847-.07708-.33063-.18052-.45636-.31034-.12573-.13387-.22107-.28397-.28601-.45029-.06488-.16632-.09735-.34076-.09735-.52331 0-.17849.03046-.35293.09125-.52331.06488-.17038.16022-.32453.28601-.46246.12982-.13793.29004-.24746.48071-.32859.19067-.08519.41583-.12779.67542-.12779.25555 0 .4787.04057.66937.1217.1947.07708.35699.18458.48682.32251.13385.13387.2312.286.29205.45638.06488.17038.09735.34685.09735.5294 0 .16632-.02435.31845-.073.45638-.04871.13793-.10748.26166-.17645.37119-.06488.10953-.12982.21095-.1947.30425l-1.16833 1.63687c-.01624.02028-.03851.04665-.06696.07911-.02838.0284-.07098.0426-.12781.0426h-.32861l.00012-.00003zm.59021-1.96546c.17041 0 .32654-.03651.46857-.10953.14606-.07708.26166-.18255.34686-.31642.08521-.13793.12781-.30222.12781-.49289s-.0426-.35293-.12781-.4868c-.08521-.13793-.20081-.2434-.34686-.31642-.14197-.07708-.29816-.11562-.46857-.11562-.16632 0-.3205.03854-.46246.11562-.14197.07302-.25555.17849-.34076.31642-.08521.13387-.12781.29614-.12781.4868s.0426.35496.12781.49289c.08521.13387.19879.23934.34076.31642.14197.07302.29614.10953.46246.10953z" fill="#25357a"/><path d="m567.96466 111.16266c-.27991 0-.51721-.0426-.71198-.12779-.19067-.08925-.34686-.21095-.46857-.3651-.1217-.15415-.21094-.33062-.26776-.5294-.05273-.19878-.08313-.40972-.09131-.63284-.00409-.10953-.00812-.22515-.01215-.34685v-.3651c.00409-.12576.00812-.24543.01215-.35902.00409-.22312.03448-.43406.09131-.63284.06085-.20283.15009-.3793.26776-.5294.1217-.15415.27991-.27383.47461-.35902.1947-.08925.42999-.13387.70587-.13387.27991 0 .5152.04462.70587.13387.1947.08519.35291.20486.47461.35902.1217.1501.21094.32656.26776.5294.06085.19878.09332.40972.09735.63284.00403.11359.0061.23326.0061.35902.00409.1217.00409.2434 0 .3651 0 .1217-.00201.23732-.0061.34685-.00409.22312-.0365.43406-.09735.63284-.05676.19878-.14606.37524-.26776.5294-.11761.15415-.2738.27585-.46857.3651-.19067.08519-.42798.12779-.71198.12779h.00012zm0-.51723c.31641 0 .54968-.10345.69977-.31034.15417-.21095.23328-.49694.2373-.85799.00812-.11764.01215-.23123.01215-.34076v-.33468c0-.11359-.00409-.22515-.01215-.33468-.00409-.35293-.08319-.63487-.2373-.84582-.15009-.215-.38336-.32251-.69977-.32251-.31238 0-.54559.1075-.69977.32251-.15009.21095-.22919.49289-.2373.84582 0 .10953-.00201.22109-.0061.33468v.33468c.00409.10953.0061.22312.0061.34076.00812.36104.08923.64704.24341.85799.15417.20689.38538.31034.69366.31034zm3.86401.51723c-.27991 0-.51721-.0426-.71198-.12779-.19067-.08925-.34686-.21095-.46857-.3651s-.21094-.33062-.26776-.5294c-.05273-.19878-.08313-.40972-.09131-.63284-.00403-.10953-.00812-.22515-.01215-.34685v-.3651c.00409-.12576.00812-.24543.01215-.35902.00403-.22312.03448-.43406.09131-.63284.06085-.20283.15009-.3793.26776-.5294.1217-.15415.27991-.27383.47461-.35902.1947-.08925.42999-.13387.70587-.13387.27991 0 .5152.04462.70587.13387.1947.08519.35291.20486.47461.35902.1217.1501.21094.32656.26776.5294.06085.19878.09332.40972.09735.63284.00403.11359.0061.23326.0061.35902.00409.1217.00409.2434 0 .3651 0 .1217-.00201.23732-.0061.34685-.00409.22312-.0365.43406-.09735.63284-.05676.19878-.14606.37524-.26776.5294-.11761.15415-.2738.27585-.46857.3651-.19067.08519-.42798.12779-.71198.12779h.00012zm0-.51723c.31641 0 .54968-.10345.69977-.31034.15417-.21095.23328-.49694.2373-.85799.00812-.11764.01215-.23123.01215-.34076v-.33468c0-.11359-.00409-.22515-.01215-.33468-.00409-.35293-.08319-.63487-.2373-.84582-.15009-.215-.38336-.32251-.69977-.32251-.31238 0-.54559.1075-.69977.32251-.15009.21095-.22919.49289-.2373.84582 0 .10953-.00201.22109-.0061.33468v.33468c.00403.10953.0061.22312.0061.34076.00812.36104.08923.64704.24341.85799.15417.20689.38538.31034.69366.31034zm2.84168.45638c-.0365 0-.06696-.01217-.09131-.03651-.02026-.0284-.03046-.06085-.03046-.09736 0-.01217.00409-.03043.01215-.05477l1.5152-3.54148h-1.99591c-.04059 0-.07507-.01217-.10345-.03651-.02435-.0284-.0365-.06288-.0365-.10345v-.2434c0-.04462.01215-.07911.0365-.10345.02838-.0284.06287-.04259.10345-.04259h2.49487c.04462 0 .0791.0142.10345.04259.02838.02434.0426.05882.0426.10345v.22515c0 .05274-.00409.09533-.01215.12779-.00812.03245-.02026.06896-.0365.10953l-1.50299 3.49889c-.01215.03245-.03247.06694-.06085.10345-.02435.03245-.06085.04868-.10956.04868h-.32861l.00006-.00002z" fill="#25357a"/><path d="m548.22498 111.16241c-.27991 0-.51721-.0426-.71198-.12779-.19067-.08925-.34686-.21095-.46857-.3651-.1217-.15415-.21094-.33062-.26776-.5294-.05273-.19878-.08313-.40972-.09131-.63284-.00409-.10953-.00812-.22515-.01215-.34685v-.3651c.00409-.12576.00812-.24543.01215-.35902.00409-.22312.03448-.43406.09131-.63284.06085-.20283.15009-.3793.26776-.5294.1217-.15415.27991-.27383.47461-.35902.1947-.08925.42999-.13387.70587-.13387.27991 0 .5152.04462.70587.13387.1947.08519.35291.20486.47461.35902.1217.1501.21094.32656.26776.5294.06085.19878.09332.40972.09735.63284.00403.11359.0061.23326.0061.35902.00409.1217.00409.2434 0 .3651 0 .1217-.00201.23732-.0061.34685-.00409.22312-.0365.43406-.09735.63284-.05676.19878-.14606.37524-.26776.5294-.11761.15415-.2738.27585-.46857.3651-.19067.08519-.42798.12779-.71198.12779h.00012zm0-.51722c.31641 0 .54968-.10345.69977-.31034.15417-.21095.23328-.49694.2373-.85799.00812-.11764.01215-.23123.01215-.34076v-.33468c0-.11359-.00409-.22515-.01215-.33468-.00409-.35293-.08319-.63487-.2373-.84582-.15009-.215-.38336-.32251-.69977-.32251-.31238 0-.54559.1075-.69977.32251-.15009.21095-.22919.49289-.2373.84582 0 .10953-.00201.22109-.0061.33468v.33468c.00409.10953.0061.22312.0061.34076.00812.36104.08923.64704.24341.85799.15417.20689.38538.31034.69366.31034zm3.86401.51722c-.27991 0-.51721-.0426-.71198-.12779-.19067-.08925-.34686-.21095-.46857-.3651s-.21094-.33062-.26776-.5294c-.05273-.19878-.08313-.40972-.09131-.63284-.00403-.10953-.00812-.22515-.01215-.34685v-.3651c.00409-.12576.00812-.24543.01215-.35902.00403-.22312.03448-.43406.09131-.63284.06085-.20283.15009-.3793.26776-.5294.1217-.15415.27991-.27383.47461-.35902.1947-.08925.42999-.13387.70587-.13387.27991 0 .5152.04462.70587.13387.1947.08519.35291.20486.47461.35902.1217.1501.21094.32656.26776.5294.06085.19878.09332.40972.09735.63284.00403.11359.0061.23326.0061.35902.00409.1217.00409.2434 0 .3651 0 .1217-.00201.23732-.0061.34685-.00409.22312-.0365.43406-.09735.63284-.05676.19878-.14606.37524-.26776.5294-.11761.15415-.2738.27585-.46857.3651-.19067.08519-.42798.12779-.71198.12779h.00012zm0-.51722c.31641 0 .54968-.10345.69977-.31034.15417-.21095.23328-.49694.2373-.85799.00812-.11764.01215-.23123.01215-.34076v-.33468c0-.11359-.00409-.22515-.01215-.33468-.00409-.35293-.08319-.63487-.2373-.84582-.15009-.215-.38336-.32251-.69977-.32251-.31238 0-.54559.1075-.69977.32251-.15009.21095-.22919.49289-.2373.84582 0 .10953-.00201.22109-.0061.33468v.33468c.00403.10953.0061.22312.0061.34076.00812.36104.08923.64704.24341.85799.15417.20689.38538.31034.69366.31034zm3.8092.51722c-.33667 0-.62268-.06694-.85797-.20081-.23529-.13793-.41583-.31642-.54156-.53548-.1217-.22312-.18256-.46449-.18256-.72412 0-.1217.01422-.23732.0426-.34685.03247-.11359.07098-.21906.1156-.31642.04871-.10142.09534-.19066.13995-.26774.04871-.08113.09131-.14604.12781-.19472l1.15613-1.61253c.02026-.02028.04462-.04462.073-.07302.02838-.03245.07098-.04868.12781-.04868h.32251c.0365 0 .06488.0142.08521.04259.02435.02434.0365.05477.0365.09128 0 .01623-.00201.03245-.0061.04868-.00409.01217-.01013.02231-.01825.03043l-.88843 1.24134c.04871-.01623.10345-.02637.16431-.03043.06488-.00811.12573-.01217.18256-.01217.22314.00406.42596.04463.60852.1217.18256.07708.33875.18255.46857.31642.13385.12981.23529.28194.30426.45638.06897.17038.10345.35293.10345.54765 0 .25557-.06085.49491-.18256.71803s-.30017.40364-.53546.54157c-.2312.13793-.51312.20689-.84583.20689h-.00006zm-.0061-.51722c.17041 0 .32861-.03651.47461-.10953.14606-.07302.26367-.17849.35291-.31642.09332-.14198.13995-.31439.13995-.51723 0-.20689-.04462-.3793-.13385-.51723-.08923-.14198-.20892-.24746-.35901-.31642-.14606-.07302-.30426-.10953-.47461-.10953s-.32861.03651-.47461.10953c-.14606.06896-.26569.17444-.35901.31642-.08923.13793-.13385.31034-.13385.51723 0 .20283.04462.37524.13385.51723.09332.13793.21295.2434.35901.31642s.30426.10953.47461.10953z" fill="#25357a"/><path d="m522.86133 86.37311c-.27991 0-.51721-.0426-.71198-.12779-.19067-.08925-.34686-.21095-.46857-.3651-.1217-.15415-.21094-.33062-.26776-.5294-.05273-.19878-.08313-.40972-.09131-.63284-.00409-.10953-.00812-.22515-.01215-.34685v-.3651c.00409-.12576.00812-.24543.01215-.35902.00409-.22312.03448-.43406.09131-.63284.06085-.20283.15009-.3793.26776-.5294.1217-.15415.27991-.27383.47461-.35902.1947-.08925.42999-.13387.70587-.13387.27991 0 .5152.04462.70587.13387.1947.08519.35291.20486.47461.35902.1217.1501.21094.32656.26776.5294.06085.19878.09332.40972.09735.63284.00403.11359.0061.23326.0061.35902.00409.1217.00409.2434 0 .3651 0 .1217-.00201.23732-.0061.34685-.00409.22312-.0365.43406-.09735.63284-.05676.19878-.14606.37524-.26776.5294-.11761.15415-.2738.27585-.46857.3651-.19067.08519-.42798.12779-.71198.12779h.00012zm0-.51723c.31641 0 .54968-.10345.69977-.31034.15417-.21095.23328-.49694.2373-.85799.00812-.11764.01215-.23123.01215-.34076v-.33468c0-.11359-.00409-.22515-.01215-.33468-.00409-.35293-.08319-.63487-.2373-.84582-.15009-.215-.38336-.32251-.69977-.32251-.31238 0-.54559.1075-.69977.32251-.15009.21095-.22919.49289-.2373.84582 0 .10953-.00201.22109-.0061.33468v.33468c.00409.10953.0061.22312.0061.34076.00812.36104.08923.64704.24341.85799.15417.20689.38538.31034.69366.31034zm3.86395.51723c-.27991 0-.51721-.0426-.71198-.12779-.19067-.08925-.34686-.21095-.46857-.3651s-.21094-.33062-.26776-.5294c-.05273-.19878-.08313-.40972-.09131-.63284-.00403-.10953-.00812-.22515-.01215-.34685v-.3651c.00409-.12576.00812-.24543.01215-.35902.00403-.22312.03448-.43406.09131-.63284.06085-.20283.15009-.3793.26776-.5294.1217-.15415.27991-.27383.47461-.35902.1947-.08925.42999-.13387.70587-.13387.27991 0 .5152.04462.70587.13387.1947.08519.35291.20486.47461.35902.1217.1501.21094.32656.26776.5294.06085.19878.09332.40972.09735.63284.00403.11359.0061.23326.0061.35902.00409.1217.00409.2434 0 .3651 0 .1217-.00201.23732-.0061.34685-.00409.22312-.0365.43406-.09735.63284-.05676.19878-.14606.37524-.26776.5294-.11761.15415-.2738.27585-.46857.3651-.19067.08519-.42798.12779-.71198.12779h.00012zm0-.51723c.31641 0 .54968-.10345.69977-.31034.15417-.21095.23328-.49694.2373-.85799.00812-.11764.01215-.23123.01215-.34076v-.33468c0-.11359-.00409-.22515-.01215-.33468-.00409-.35293-.08319-.63487-.2373-.84582-.15009-.215-.38336-.32251-.69977-.32251-.31238 0-.54559.1075-.69977.32251-.15009.21095-.22919.49289-.2373.84582 0 .10953-.00201.22109-.0061.33468v.33468c.00403.10953.0061.22312.0061.34076.00812.36104.08923.64704.24341.85799.15417.20689.38538.31034.69366.31034zm3.71191.51723c-.3205 0-.59229-.05477-.81537-.1643-.21906-.11359-.38739-.25963-.50507-.43812-.11359-.17849-.17444-.36713-.18256-.56591-.00403-.03651.0061-.06491.03046-.08519s.05475-.03042.09131-.03042h.32861c.0365 0 .06897.00811.09735.02434s.05072.05071.06696.10345c.04059.1501.10547.27383.1947.37119.09332.0933.19879.16227.31641.20689.1217.04057.24744.06085.37726.06085.17444 0 .33264-.03448.47461-.10345.14606-.07302.26166-.17849.34686-.31642.08521-.14198.12781-.31236.12781-.51114 0-.18255-.0426-.33873-.12781-.46855-.08112-.13387-.1947-.23529-.34076-.30425-.14197-.07302-.30225-.10953-.48071-.10953-.13385 0-.24341.01623-.32861.04868s-.1582.07099-.21906.11562c-.05676.04462-.10956.08316-.1582.11562-.04462.03245-.09534.04868-.1521.04868h-.31641c-.0365 0-.06897-.01217-.09735-.03651-.02838-.0284-.04059-.06085-.0365-.09736l.1947-2.0324c.00403-.04868.01825-.08519.0426-.10953.02838-.0284.06488-.04259.10956-.04259h2.12366c.04059 0 .073.0142.09735.04259.02838.02434.0426.05679.0426.09736v.23732c0 .04462-.01422.07911-.0426.10345-.02435.02434-.05676.03651-.09735.03651h-1.7525l-.1156 1.19875c.05676-.03651.14807-.07911.2738-.12779.12573-.05274.29816-.0791.51721-.0791.19879 0 .38538.03043.55981.09127.17847.06085.33673.1501.47461.26774.13794.11764.24542.26166.32251.43204.07709.16632.1156.35902.1156.57808 0 .30831-.06897.56996-.20691.78497-.13385.215-.31842.3793-.55371.49289-.2312.10953-.49695.1643-.79712.1643l-.00006-.00004z" fill="#25357a"/><path d="m524.07855 111.16229c-.27991 0-.51721-.0426-.71198-.12779-.19067-.08925-.34686-.21095-.46857-.3651-.1217-.15415-.21094-.33062-.26776-.5294-.05273-.19878-.08313-.40972-.09131-.63284-.00409-.10953-.00812-.22515-.01215-.34685v-.3651c.00409-.12576.00812-.24543.01215-.35902.00409-.22312.03448-.43406.09131-.63284.06085-.20283.15009-.3793.26776-.5294.1217-.15415.27991-.27383.47461-.35902.1947-.08925.42999-.13387.70587-.13387.27991 0 .5152.04462.70587.13387.1947.08519.35291.20486.47461.35902.1217.1501.21094.32656.26776.5294.06085.19878.09332.40972.09735.63284.00403.11359.0061.23326.0061.35902.00409.1217.00409.2434 0 .3651 0 .1217-.00201.23732-.0061.34685-.00409.22312-.0365.43406-.09735.63284-.05676.19878-.14606.37524-.26776.5294-.11761.15415-.2738.27585-.46857.3651-.19067.08519-.42798.12779-.71198.12779h.00012zm0-.51723c.31641 0 .54968-.10345.69977-.31034.15417-.21095.23328-.49694.2373-.85799.00812-.11764.01215-.23123.01215-.34076v-.33468c0-.11359-.00409-.22515-.01215-.33468-.00409-.35293-.08319-.63487-.2373-.84582-.15009-.215-.38336-.32251-.69977-.32251-.31238 0-.54559.1075-.69977.32251-.15009.21095-.22919.49289-.2373.84582 0 .10953-.00201.22109-.0061.33468v.33468c.00409.10953.0061.22312.0061.34076.00812.36104.08923.64704.24341.85799.15417.20689.38538.31034.69366.31034zm3.86402.51723c-.27991 0-.51721-.0426-.71198-.12779-.19067-.08925-.34686-.21095-.46857-.3651s-.21094-.33062-.26776-.5294c-.05273-.19878-.08313-.40972-.09131-.63284-.00403-.10953-.00812-.22515-.01215-.34685v-.3651c.00409-.12576.00812-.24543.01215-.35902.00403-.22312.03448-.43406.09131-.63284.06085-.20283.15009-.3793.26776-.5294.1217-.15415.27991-.27383.47461-.35902.1947-.08925.42999-.13387.70587-.13387.27991 0 .5152.04462.70587.13387.1947.08519.35291.20486.47461.35902.1217.1501.21094.32656.26776.5294.06085.19878.09332.40972.09735.63284.00403.11359.0061.23326.0061.35902.00409.1217.00409.2434 0 .3651 0 .1217-.00201.23732-.0061.34685-.00409.22312-.0365.43406-.09735.63284-.05676.19878-.14606.37524-.26776.5294-.11761.15415-.2738.27585-.46857.3651-.19067.08519-.42798.12779-.71198.12779h.00012zm0-.51723c.31641 0 .54968-.10345.69977-.31034.15417-.21095.23328-.49694.2373-.85799.00812-.11764.01215-.23123.01215-.34076v-.33468c0-.11359-.00409-.22515-.01215-.33468-.00409-.35293-.08319-.63487-.2373-.84582-.15009-.215-.38336-.32251-.69977-.32251-.31238 0-.54559.1075-.69977.32251-.15009.21095-.22919.49289-.2373.84582 0 .10953-.00201.22109-.0061.33468v.33468c.00403.10953.0061.22312.0061.34076.00812.36104.08923.64704.24341.85799.15417.20689.38538.31034.69366.31034zm3.71185.51723c-.3205 0-.59229-.05477-.81537-.1643-.21906-.11359-.38739-.25963-.50507-.43812-.11359-.17849-.17444-.36713-.18256-.56591-.00403-.03651.0061-.06491.03046-.08519s.05475-.03042.09131-.03042h.32861c.0365 0 .06897.00811.09735.02434s.05072.05071.06696.10345c.04059.1501.10547.27383.1947.37119.09332.0933.19879.16227.31641.20689.1217.04057.24744.06085.37726.06085.17444 0 .33264-.03448.47461-.10345.14606-.07302.26166-.17849.34686-.31642.08521-.14198.12781-.31236.12781-.51114 0-.18255-.0426-.33873-.12781-.46855-.08112-.13387-.1947-.23529-.34076-.30425-.14197-.07302-.30225-.10953-.48071-.10953-.13385 0-.24341.01623-.32861.04868s-.1582.07099-.21906.11562c-.05676.04462-.10956.08316-.1582.11562-.04462.03245-.09534.04868-.1521.04868h-.31641c-.0365 0-.06897-.01217-.09735-.03651-.02838-.0284-.04059-.06085-.0365-.09736l.1947-2.0324c.00403-.04868.01825-.08519.0426-.10953.02838-.0284.06488-.04259.10956-.04259h2.12366c.04059 0 .073.0142.09735.04259.02838.02434.0426.05679.0426.09736v.23732c0 .04462-.01422.07911-.0426.10345-.02435.02434-.05676.03651-.09735.03651h-1.7525l-.1156 1.19875c.05676-.03651.14807-.07911.2738-.12779.12573-.05274.29816-.0791.51721-.0791.19879 0 .38538.03043.55981.09127.17847.06085.33673.1501.47461.26774.13794.11764.24542.26166.32251.43204.07709.16632.1156.35902.1156.57808 0 .30831-.06897.56996-.20691.78497-.13385.215-.31842.3793-.55371.49289-.2312.10953-.49695.1643-.79712.1643l-.00006-.00004zm2.08105-.06085c-.03247 0-.06085-.01217-.08521-.03651s-.0365-.05274-.0365-.08519c0-.02028.00201-.0426.0061-.06694l1.50909-3.93701c.01624-.04057.03851-.07302.06696-.09736.02838-.02434.07098-.03651.12781-.03651h.41376c.05273 0 .09332.01217.1217.03651.03247.02434.05676.05679.073.09736l1.50299 3.93701c.00812.02434.01215.04665.01215.06694 0 .03245-.01215.06085-.0365.08519s-.05273.03651-.08521.03651h-.31036c-.04871 0-.08521-.01217-.10956-.03651-.02026-.02434-.03448-.04665-.0426-.06694l-.33466-.86407h-1.99591l-.33466.86407c-.00409.02028-.01825.0426-.0426.06694s-.06085.03651-.1095.03651h-.31036.00006zm.97364-1.49083h1.64294l-.82147-2.16018z" fill="#25357a"/><path d="m606.36682 111.10144c-.04059 0-.07507-.01217-.10345-.03651-.02435-.0284-.0365-.06288-.0365-.10345v-.19472c0-.03651.01013-.07708.03046-.1217.02026-.04462.06085-.0933.1217-.14604l1.29004-1.29002c.20691-.17444.36914-.32251.48682-.44421.1217-.12576.20691-.24543.25555-.35902.05273-.11359.0791-.23123.0791-.35293 0-.23123-.06488-.41378-.1947-.54765-.12982-.13793-.32251-.20689-.57806-.20689-.16229 0-.30225.03448-.41986.10345-.11761.06491-.21094.15618-.27991.27383-.06488.11359-.10748.2434-.12781.38944-.00812.05274-.03046.08925-.06696.10953-.03247.02028-.06287.03043-.09131.03043h-.31641c-.0365 0-.06696-.01014-.09131-.03043-.02435-.02434-.0365-.05274-.0365-.08519.00409-.15415.0365-.30831.09735-.46246.06085-.15821.15009-.30019.26776-.42595.1217-.12576.26978-.22717.44421-.30425.17847-.08113.38538-.1217.62067-.1217.3205 0 .58215.05882.78497.17647.20691.11359.35901.26571.45636.45638.09735.19066.14606.39958.14606.62676 0 .17849-.03046.34279-.09125.49289-.06085.14604-.15009.29005-.26776.43204-.11359.13793-.25555.27991-.42596.42595l-1.16833 1.18658h1.89856c.04462 0 .0791.01217.10345.03651.02838.02434.0426.05882.0426.10345v.24949c0 .04057-.01422.07505-.0426.10345-.02435.02434-.05884.03651-.10345.03651h-2.68347zm4.94714.06085c-.25555 0-.4787-.03043-.66937-.09128-.19067-.06491-.35089-.1501-.48071-.25557s-.22919-.22109-.29816-.34685c-.06488-.12576-.09937-.25557-.10345-.38944 0-.03651.01215-.06491.0365-.08519s.05475-.03042.09125-.03042h.29816c.0365 0 .06897.00811.09735.02434s.05273.05071.073.10345c.04059.14604.10956.25963.20691.34076.10144.08113.21704.13793.34686.17038.13385.0284.26776.0426.40161.0426.27991 0 .50708-.06694.68152-.20081s.26166-.33062.26166-.59025c0-.26368-.0791-.45232-.2373-.56591s-.37726-.17038-.65717-.17038h-.57806c-.04059 0-.07507-.01217-.10345-.03651-.02435-.02434-.0365-.05882-.0365-.10345v-.1643c0-.03651.0061-.06694.01825-.09127.01624-.0284.03247-.05274.04871-.07302l1.18048-1.29002h-1.7951c-.04059 0-.07507-.01217-.10345-.03651-.02435-.02434-.0365-.05882-.0365-.10345v-.23123c0-.04462.01215-.07911.0365-.10345.02838-.0284.06287-.04259.10345-.04259h2.42792c.04462 0 .0791.0142.10345.04259.02838.02434.0426.05882.0426.10345v.21906c0 .0284-.00812.05476-.02435.0791-.01215.02028-.02637.04057-.0426.06085l-1.17444 1.30828.09735.00609c.26776.00811.50098.05679.69977.14604.20282.08925.35901.22312.46857.40161.11359.17444.17041.39553.17041.66327 0 .2718-.06696.50506-.20081.69978-.13385.19066-.31842.3367-.55371.43812s-.50098.15213-.79712.15213v-.00002zm2.28187-.06085c-.04059 0-.07507-.01217-.10345-.03651-.02435-.0284-.0365-.06288-.0365-.10345v-.19472c0-.03651.01013-.07708.03046-.1217.02026-.04462.06085-.0933.1217-.14604l1.29004-1.29002c.20691-.17444.36914-.32251.48682-.44421.1217-.12576.20691-.24543.25555-.35902.05273-.11359.0791-.23123.0791-.35293 0-.23123-.06488-.41378-.1947-.54765-.12982-.13793-.32251-.20689-.57806-.20689-.16229 0-.30225.03448-.41986.10345-.11761.06491-.21094.15618-.27991.27383-.06488.11359-.10748.2434-.12781.38944-.00812.05274-.03046.08925-.06696.10953-.03247.02028-.06287.03043-.09131.03043h-.31641c-.0365 0-.06696-.01014-.09131-.03043-.02435-.02434-.0365-.05274-.0365-.08519.00409-.15415.0365-.30831.09735-.46246.06085-.15821.15009-.30019.26776-.42595.1217-.12576.26978-.22717.44421-.30425.17847-.08113.38538-.1217.62067-.1217.3205 0 .58215.05882.78497.17647.20691.11359.35901.26571.45636.45638s.14606.39958.14606.62676c0 .17849-.0304.34279-.09125.49289-.06085.14604-.15009.29005-.26776.43204-.11359.13793-.25555.27991-.42596.42595l-1.16833 1.18658h1.89856c.04462 0 .0791.01217.10345.03651.02838.02434.0426.05882.0426.10345v.24949c0 .04057-.01422.07505-.0426.10345-.02435.02434-.05884.03651-.10345.03651h-2.68347zm4.46643.06085c-.20282 0-.38739-.04057-.55371-.1217s-.30017-.19066-.40161-.32859-.1521-.29411-.1521-.46855c0-.27991.11359-.50303.34076-.66935s.52332-.27585.88843-.32859l.90668-.12779v-.17647c0-.19472-.05676-.34685-.17041-.45638-.10956-.10953-.29004-.1643-.54156-.1643-.18256 0-.33063.03651-.44421.10953-.10956.07302-.18658.16632-.2312.27991-.02435.06085-.06696.09127-.12781.09127h-.2738c-.04462 0-.0791-.01217-.10345-.03651-.02026-.0284-.03046-.06085-.03046-.09736 0-.06085.02234-.1359.06696-.22515.04871-.08925.1217-.17647.21906-.26166s.22107-.15618.37122-.21298c.15417-.06085.34076-.09127.55981-.09127.24341 0 .44824.03245.61456.09736.16632.06085.29614.14401.38947.24949.09735.10547.16632.22515.20691.35902.04462.13387.06696.26977.06696.4077v1.97155c0 .04057-.01422.07505-.0426.10345-.02435.02434-.05676.03651-.09735.03651h-.27991c-.04462 0-.0791-.01217-.10345-.03651-.02435-.0284-.0365-.06288-.0365-.10345v-.26166c-.05273.07302-.12372.14604-.21295.21906-.08923.06896-.20081.12779-.33466.17647-.13385.04462-.29816.06694-.49292.06694l-.00012.00002zm.12774-.45638c.16632 0 .31842-.03448.45636-.10345.13794-.07302.24542-.18458.32251-.33468.08112-.1501.1217-.33873.1217-.56591v-.17038l-.70587.10345c-.28802.04057-.50507.10953-.65112.20689-.14606.0933-.21906.21298-.21906.35902 0 .11359.03247.20892.09735.286.06897.07302.15417.12779.25555.1643.10547.03651.21295.05477.32251.05477h.00006z" fill="#25357a"/><path d="m522.89191 61.71497c-.03418 0-.06055-.00931-.07916-.02794-.01862-.02173-.02795-.04812-.02795-.07917v-3.04117c0-.03415.00934-.06054.02795-.07917.01862-.02173.04504-.0326.07916-.0326h1.92346c.03418 0 .06055.01087.07916.0326.01862.01863.02795.04502.02795.07917v.17697c0 .03415-.00934.06054-.02795.07917s-.04504.02794-.07916.02794h-1.58344v1.01993h1.48102c.03418 0 .06055.01087.07916.0326.01862.01863.02795.04502.02795.07917v.17232c0 .03105-.00934.05744-.02795.07917-.01862.01863-.04504.02794-.07916.02794h-1.48102v1.05719h1.62073c.03418 0 .06055.00931.07916.02794.01862.01863.02795.04502.02795.07917v.18163c0 .03105-.00934.05744-.02795.07917-.01862.01863-.04504.02794-.07916.02794h-1.96069zm3.32995.04657c-.15521 0-.29651-.03105-.42383-.09314-.12732-.0621-.22974-.14593-.30737-.25149s-.11646-.2251-.11646-.35861c0-.21423.08691-.385.2608-.5123s.40051-.21113.67993-.25149l.69391-.0978v-.13506c0-.14903-.04346-.26546-.13037-.34929-.0838-.08383-.22198-.12575-.41449-.12575-.13971 0-.25305.02794-.33997.08383-.0838.05589-.14282.1273-.17694.21423-.01862.04657-.05121.06986-.09778.06986h-.20959c-.03418 0-.06055-.00931-.07916-.02794-.0155-.02173-.02332-.04657-.02332-.07452 0-.04657.01709-.10401.05121-.17232.03723-.06831.09314-.13506.16766-.20026s.16919-.11954.28412-.163c.11798-.04657.2608-.06986.42847-.06986.18628 0 .34308.02484.4704.07452.12732.04657.22662.11022.29803.19095.07452.08073.12732.17232.15833.27478.03418.10246.05121.20647.05121.31203v1.50894c0 .03105-.01086.05744-.03259.07917-.01862.01863-.04346.02794-.07452.02794h-.21423c-.03418 0-.06055-.00931-.07916-.02794-.01862-.02173-.02795-.04812-.02795-.07917v-.20026c-.04034.05589-.09473.11177-.16302.16766-.0683.05278-.15369.0978-.25616.13506-.10248.03415-.22821.05123-.37726.05123h.00012zm.09778-.34929c.12732 0 .24371-.02639.3493-.07917.10553-.05589.18787-.14127.24683-.25615.06207-.11488.09314-.25925.09314-.43312v-.1304l-.54022.07917c-.22046.03105-.38654.08383-.49829.15835-.11176.07141-.16766.163-.16766.27478 0 .08693.02484.1599.07452.21889.0528.05589.11798.0978.19562.12575.08075.02794.16302.04192.24683.04192l-.00006-.00002zm2.7207.30272c-.17389 0-.31512-.0326-.42383-.0978-.10864-.06831-.18787-.163-.23755-.28409-.04968-.12419-.07452-.27012-.07452-.43778v-1.22951h-.36328c-.03107 0-.05743-.00931-.07916-.02794-.01862-.02173-.02795-.04813-.02795-.07917v-.15835c0-.03105.00934-.05589.02795-.07452.02173-.02173.0481-.0326.07916-.0326h.36328v-.77776c0-.03105.00934-.05589.02795-.07452.02173-.02173.0481-.0326.07916-.0326h.21887c.03107 0 .05591.01087.07452.0326.02173.01863.03259.04347.03259.07452v.77776h.57751c.03107 0 .05591.01087.07452.0326.02173.01863.03259.04347.03259.07452v.15835c0 .03105-.01086.05744-.03259.07917-.01862.01863-.04346.02794-.07452.02794h-.57751v1.19691c0 .14593.02484.2608.07452.34464.04968.08383.13818.12575.26544.12575h.28412c.03107 0 .05591.01087.07452.0326.02173.01863.03259.04347.03259.07452v.16766c0 .03105-.01086.05744-.03259.07917-.01862.01863-.04346.02794-.07452.02794h-.32135.00006z" fill="#25357a"/><path d="m520.47784 66.37219c-.03107 0-.05743-.00931-.07916-.02794-.01862-.02173-.02795-.04812-.02795-.07917v-3.04117c0-.03415.00934-.06054.02795-.07917.02173-.02173.0481-.0326.07916-.0326h.23285c.03723 0 .06519.00931.0838.02794.01862.01863.02948.03415.03259.04657l.9873 1.88152.992-1.88152c.00623-.01242.01709-.02794.03259-.04657.01862-.01863.04657-.02794.0838-.02794h.22821c.03418 0 .06055.01087.07916.0326.02173.01863.03259.04502.03259.07917v3.04117c0 .03105-.01086.05744-.03259.07917-.01862.01863-.04504.02794-.07916.02794h-.22821c-.03107 0-.05743-.00931-.07916-.02794-.01862-.02173-.02795-.04812-.02795-.07917v-2.29136l-.77777 1.51826c-.01239.03105-.03107.05589-.05591.07452-.02484.01552-.05591.02329-.09314.02329h-.14435c-.04034 0-.07294-.00776-.09778-.02329-.02173-.01863-.04034-.04347-.05591-.07452l-.77777-1.51826v2.29136c0 .03105-.01086.05744-.03259.07917-.01862.01863-.04346.02794-.07452.02794h-.22821.00012zm4.52222.04658c-.23596 0-.43311-.04502-.59149-.13506-.15833-.09004-.27942-.21423-.36328-.37258-.0838-.16145-.13037-.34464-.13971-.54955-.00311-.05278-.00464-.11954-.00464-.20026 0-.08383.00153-.15058.00464-.20026.00934-.20802.05591-.39121.13971-.54955.08691-.15835.20959-.28254.36792-.37258s.35394-.13506.58679-.13506.42847.04502.58679.13506c.15833.09004.27942.21423.36328.37258.08691.15835.13507.34153.14435.54955.00311.04968.00464.11643.00464.20026 0 .08073-.00153.14748-.00464.20026-.00934.20492-.05591.3881-.13971.54955-.0838.15835-.2049.28254-.36328.37258-.15833.09004-.35553.13506-.59149.13506zm0-.35861c.1925 0 .34619-.06054.46106-.18163.11487-.12419.17694-.30427.18628-.54024.00311-.04657.00464-.10556.00464-.17697s-.00153-.1304-.00464-.17697c-.00934-.23597-.07141-.41449-.18628-.53558-.11487-.12419-.26855-.18629-.46106-.18629s-.34772.0621-.4657.18629c-.11487.12109-.17542.29962-.18164.53558-.00311.04657-.00464.10556-.00464.17697s.00153.1304.00464.17697c.00623.23597.06677.41605.18164.54024.11798.12109.27319.18163.4657.18163zm1.78833.31203c-.03107 0-.05743-.00931-.07916-.02794-.01862-.02173-.02795-.04812-.02795-.07917v-2.20753c0-.03105.00934-.05589.02795-.07452.02173-.02173.0481-.0326.07916-.0326h.20959c.03107 0 .05591.01087.07452.0326.02173.01863.03259.04347.03259.07452v.163c.07141-.09625.16144-.17232.27014-.2282.10864-.05899.23907-.08849.39124-.08849.35083-.0031.59924.13972.74518.42847.07141-.1304.17542-.23441.31201-.31203.1366-.07762.29187-.11643.4657-.11643.16144 0 .30737.03726.43781.11177.13348.07452.23755.18784.31201.33998.07764.14903.11646.33687.11646.56352v1.34594c0 .03105-.01086.05744-.03259.07917-.01862.01863-.04346.02794-.07452.02794h-.21887c-.03107 0-.05743-.00931-.07916-.02794-.01862-.02173-.02795-.04813-.02795-.07917v-1.30402c0-.17387-.02484-.31048-.07452-.40984s-.11646-.16921-.20026-.20958c-.0838-.04036-.17542-.06054-.27478-.06054-.08075 0-.16302.02018-.24683.06054s-.15369.11022-.20959.20958c-.0528.09935-.07916.23597-.07916.40984v1.30402c0 .03105-.01086.05744-.03259.07917-.01862.01863-.04346.02794-.07452.02794h-.21887c-.03107 0-.05743-.00931-.07916-.02794-.01862-.02173-.02795-.04812-.02795-.07917v-1.30402c0-.17387-.02637-.31048-.07916-.40984s-.12109-.16921-.2049-.20958-.1723-.06054-.26544-.06054c-.08075 0-.16302.02018-.24683.06054s-.15369.11022-.20959.20958c-.0528.09935-.07916.23441-.07916.40518v1.30868c0 .03105-.01086.05744-.03259.07917-.01862.01863-.04346.02794-.07452.02794h-.22369zm5.02521.04658c-.23596 0-.43311-.04502-.59149-.13506-.15833-.09004-.27942-.21423-.36328-.37258-.0838-.16145-.13037-.34464-.13971-.54955-.00311-.05278-.00464-.11954-.00464-.20026 0-.08383.00153-.15058.00464-.20026.00934-.20802.05591-.39121.13971-.54955.08691-.15835.20959-.28254.36792-.37258s.35394-.13506.58679-.13506.42847.04502.58679.13506c.15833.09004.27942.21423.36328.37258.08691.15835.13507.34153.14435.54955.00311.04968.0047.11643.0047.20026 0 .08073-.00159.14748-.0047.20026-.00934.20492-.05591.3881-.13971.54955-.0838.15835-.2049.28254-.36328.37258-.15833.09004-.35553.13506-.59149.13506zm0-.35861c.1925 0 .34619-.06054.46106-.18163.11487-.12419.177-.30427.18628-.54024.00311-.04657.0047-.10556.0047-.17697s-.00159-.1304-.0047-.17697c-.00934-.23597-.07141-.41449-.18628-.53558-.11487-.12419-.26855-.18629-.46106-.18629s-.34772.0621-.4657.18629c-.11487.12109-.17542.29962-.18164.53558-.00311.04657-.00464.10556-.00464.17697s.00153.1304.00464.17697c.00623.23597.06677.41605.18164.54024.11798.12109.27319.18163.4657.18163z" fill="#25357a"/><path d="m539.39899 72.43822c-.02539 0-.04688-.009-.06543-.0278-.01862-.0186-.02832-.0405-.02832-.0654 0-.01559.00201-.0327.005-.0513l1.15527-3.01318c.0127-.03081.0293-.05569.05078-.0742.02252-.019.05469-.02831.0976-.02831h.31738c.04303 0 .07617.009.09772.02831.02148.0186.03912.0435.05078.0742l1.15039 3.01318c.00702.0186.01001.0356.01001.0513 0 .0249-.01001.04691-.02832.0654-.01862.0186-.03998.0278-.06543.0278h-.2373c-.03711 0-.06451-.009-.08112-.0278-.01758-.0186-.0293-.0356-.03522-.0513l-.25586-.66162h-1.52875l-.25586.66162c-.00299.01559-.01367.0327-.03223.0513-.01862.0186-.04688.0278-.08398.0278h-.23712zm.74511-1.14111h1.25684l-.62793-1.65332z" fill="#25357a"/><path d="m542.78473 72.43822c-.03119 0-.05658-.0103-.07709-.0303s-.03027-.0459-.03027-.07671v-2.20752c0-.0312.01001-.05659.03027-.0771.02051-.02.0459-.0303.07709-.0303h.21875c.03027 0 .05658.0103.07617.0303.02051.02049.03027.0459.03027.0771v.20459c.08112-.10547.18262-.19141.30566-.2583.12207-.06689.28027-.1001.47266-.1001.20117 0 .37305.0439.51465.13281.14062.08839.24805.21094.32129.36768.0733.15674.10938.33936.10938.54736v1.31348c0 .03081-.01001.05659-.03027.07671-.02051.02-.0459.0303-.07709.0303h-.23242c-.03119 0-.05658-.0103-.07709-.0303s-.03027-.0459-.03027-.07671v-1.29004c0-.21729-.05267-.3877-.1582-.51025-.10547-.12256-.26074-.18408-.46582-.18408-.19238 0-.34668.06149-.46289.18408-.11719.12256-.1748.29297-.1748.51025v1.29004c0 .03081-.01068.05659-.03027.07671-.02051.02-.0459.0303-.07709.0303h-.2326z" fill="#25357a"/><path d="m546.49176 73.46262c-.21191 0-.38477-.0278-.51953-.0835-.13477-.0562-.24023-.12354-.31641-.20264s-.13086-.15869-.16309-.23779c-.0332-.0791-.05078-.14209-.05371-.18848-.00299-.0312.00702-.0576.03027-.0791.02338-.022.04883-.0327.07709-.0327h.22363c.0274 0 .05078.006.06927.0186.01862.0127.03418.03909.04688.0791.01862.04691.0459.0986.08398.15625.03711.0576.09473.10693.17188.14893.07721.04201.18652.063.32617.063.14551 0 .26855-.02.36816-.06059.09857-.0405.17383-.10889.22559-.20506.05078-.09621.07709-.22951.07709-.40039v-.31689c-.0752.09669-.17285.17627-.29395.24023-.12109.06351-.27344.0952-.45605.0952-.17383 0-.32324-.0303-.44727-.09081-.12402-.06059-.22559-.14258-.30469-.24658s-.13867-.22314-.17773-.35645c-.03809-.1333-.06061-.27295-.06738-.41895-.00299-.0869-.00299-.17236 0-.25635.00702-.146.0293-.28564.06738-.41895.03912-.13377.09857-.2534.17773-.35889.0791-.10547.18066-.18848.30469-.24902.12402-.0605.27344-.09081.44727-.09081.18652 0 .34082.03419.46289.10254.12305.06841.22266.15332.30078.25586v-.2002c0-.03081.01001-.0571.03027-.0791.02051-.0215.0459-.0327.07721-.0327h.21387c.03119 0 .05762.0112.0791.0327.02148.022.03223.04829.03223.0791v2.25879c0 .20799-.03418.39256-.10449.5542-.06927.16162-.18457.28857-.34473.38184-.16016.09331-.375.13965-.64453.13965l.00012-.00006v.00004zm-.01001-1.37842c.15527 0 .28027-.0356.375-.10693.09473-.0713.16504-.16162.20996-.27002.04492-.10889.06842-.21924.07233-.33105.00299-.0434.00403-.09669.00403-.16064 0-.06351-.00098-.11719-.00403-.16064-.00403-.11182-.02728-.22168-.07233-.33057-.04492-.1084-.11523-.19873-.20996-.27002-.09473-.0713-.21973-.10742-.375-.10742s-.2793.0352-.37207.10498c-.09369.06979-.16016.16162-.2002.2749-.04102.11328-.06451.23486-.07031.36572-.00299.0806-.00299.1626 0 .24658.00598.13037.0293.25244.07031.36572.03998.11328.10645.20459.2002.2749.09277.06979.2168.10449.37207.10449v-.00002z" fill="#25357a"/><path d="m548.38727 72.43822c-.03119 0-.05658-.0103-.07709-.0303s-.03027-.0459-.03027-.07671v-2.20312c0-.03081.01001-.0571.03027-.0791.02051-.0215.0459-.0327.07709-.0327h.21387c.03119 0 .05762.0112.0791.0327.02148.022.03223.04829.03223.0791v.20508c.0625-.10547.14746-.18457.25684-.23779.1084-.0527.24023-.0791.39551-.0791h.18164c.03119 0 .05658.0103.07709.0303.01947.02049.03027.0459.03027.07719v.19092c0 .03081-.01068.05569-.03027.0742-.02051.0186-.0459.02831-.07709.02831h-.2793c-.16797 0-.2998.0488-.39551.14648-.09668.0977-.14453.23047-.14453.39795v1.36963c0 .03081-.01068.05659-.0332.07671-.02148.02-.04791.0303-.0791.0303h-.22754v-.00005.00002z" fill="#25357a"/><path d="m550.47321 73.32297c-.02539 0-.04688-.009-.06543-.0278-.01862-.01849-.02728-.0405-.02728-.0654 0-.01221.00098-.0249.00403-.03709.00299-.01221.01001-.0278.01862-.0464l.35938-.85252-.88965-2.1001c-.01562-.0376-.02338-.064-.02338-.0791 0-.02831.00897-.0513.02728-.0703.01947-.01849.04199-.0278.07031-.0278h.22852c.03418 0 .05957.008.07617.02341.01758.01559.0293.03419.03522.05569l.70801 1.69531.72656-1.69531c.01001-.0215.02252-.03999.03998-.05569.0166-.01559.04199-.02341.07617-.02341h.21875c.02832 0 .0517.009.07031.0278.01862.0191.02728.0405.02728.0654 0 .01559-.00702.0435-.02252.084l-1.32324 3.05029c-.00897.0215-.02252.0405-.03912.0562-.01758.01511-.04303.02299-.07721.02299 0 0-.21875-.00017-.21875-.00018z" fill="#25357a"/><path d="m554.99567 72.48459c-.28613 0-.52246-.0527-.71094-.1582-.1875-.10547-.3291-.25293-.42578-.44238s-.14941-.40967-.1582-.66113c-.00299-.12744-.005-.26416-.005-.41016s.00201-.28564.005-.41895c.00897-.25146.06152-.47217.1582-.66162.09668-.18896.23828-.33643.42578-.44238.18848-.10547.4248-.1582.71094-.1582.21387 0 .40137.0298.56348.08839.16113.0591.2959.13818.40234.23779.10742.09911.18848.21045.24512.33301.05573.12256.08691.24902.09277.37939.00299.0278-.00598.0513-.02539.06979-.02051.01849-.04492.0278-.07233.0278h-.25586c-.02832 0-.05267-.008-.07233-.02299-.02051-.01559-.03522-.0435-.04492-.084-.05267-.24219-.15137-.4082-.29492-.49854-.14453-.0899-.32422-.13477-.53809-.13477-.25195 0-.4502.0703-.59668.21191-.14551.14111-.22363.36719-.23242.67773-.01001.25439-.01001.51514 0 .78223.00897.31055.08691.53613.23242.67773.14648.14111.34473.21191.59668.21191.21387 0 .39355-.04491.53809-.13525.14355-.0898.24219-.25635.29492-.49854.01001-.03999.02441-.0679.04492-.0835.01947-.01559.04388-.02341.07233-.02341h.25586c.0274 0 .05182.009.07233.02589.01947.01711.02832.03951.02539.0674-.00598.13039-.03711.25781-.09277.38184-.05658.12402-.1377.23584-.24512.33545-.10645.09911-.24121.17822-.40234.2373-.16211.0591-.34961.08839-.56348.08839v.00011z" fill="#25357a"/><path d="m556.97028 72.43822c-.03119 0-.05658-.0103-.07709-.0303s-.03027-.0459-.03027-.07671v-2.20312c0-.03081.01001-.0571.03027-.0791.02051-.0215.0459-.0327.07709-.0327h.21387c.03119 0 .05762.0112.0791.0327.02148.022.03223.04829.03223.0791v.20508c.0625-.10547.14746-.18457.25684-.23779.1084-.0527.24023-.0791.39551-.0791h.18164c.03119 0 .05658.0103.07721.0303.01947.02049.03027.0459.03027.07719v.19092c0 .03081-.01068.05569-.03027.0742-.02051.0186-.0459.02831-.07721.02831h-.2793c-.16797 0-.2998.0488-.39551.14648-.09668.0977-.14453.23047-.14453.39795v1.36963c0 .03081-.0108.05659-.0332.07671-.02148.02-.04779.0303-.0791.0303h-.22754v-.00005.00002z" fill="#25357a"/><path d="m559.30719 72.48459c-.15527 0-.2959-.03081-.42383-.0928-.12695-.0625-.22949-.146-.30664-.25146-.07812-.10596-.11719-.22508-.11719-.35889 0-.21436.08691-.38477.26172-.51221.17383-.12744.40039-.21094.67969-.25146l.69336-.0977v-.13525c0-.14893-.04199-.26562-.12793-.34912-.08502-.084-.22461-.12598-.41699-.12598-.13672 0-.24805.0278-.33496.084-.08691.05569-.14746.12744-.18164.21436-.01862.0464-.05078.06979-.09772.06979h-.20996c-.03418 0-.05957-.01019-.07617-.0303-.01758-.02049-.02643-.0444-.02643-.0723 0-.04691.01862-.104.05371-.17236.03607-.06841.09082-.13525.16602-.2002.07422-.0654.16992-.12061.28613-.16553.11621-.04491.25781-.0674.42578-.0674.18652 0 .34277.0239.4707.0723.12695.0479.22754.1123.2998.19336.07318.0806.12598.17188.15918.27441.03223.10254.04883.20654.04883.31203v1.50928c0 .03081-.01068.05659-.03027.07671-.02051.02-.0459.0303-.07709.0303h-.21387c-.03418 0-.06049-.0103-.0791-.0303-.01947-.02-.02832-.0459-.02832-.07671v-.20068c-.03998.0562-.09473.11133-.16309.16553-.06842.0542-.15332.09959-.25586.13525-.10254.0356-.22852.05321-.37793.05321l.00006.00014v-.00002zm.09857-.34912c.12695 0 .24316-.0273.34863-.0815s.18848-.13867.24902-.25391c.06049-.11475.09082-.25928.09082-.43311v-.13037l-.54004.0791c-.2207.0312-.38672.0835-.49805.15625-.1123.0728-.16797.16504-.16797.27686 0 .0869.02539.15918.07709.2168.05078.0576.11621.1001.19531.12793.0791.0278.16113.04201.24512.04201l.00006-.00006z" fill="#25357a"/><path d="m562.40094 72.48459c-.18652 0-.3418-.0332-.46582-.1001-.125-.06641-.22363-.14941-.29883-.24902v.1958c0 .03081-.01001.05659-.03027.07671-.01947.02-.0459.0303-.07617.0303h-.21484c-.03027 0-.05658-.0103-.07617-.0303-.02051-.02-.03027-.0459-.03027-.07671v-3.09277c0-.03081.01001-.05659.03027-.07671.01947-.02.0459-.0303.07617-.0303h.22852c.03119 0 .05573.0103.07422.0303.01862.02.02832.0459.02832.07671v1.07129c.07709-.09621.17773-.17676.30078-.24219.12207-.0649.27344-.0977.4541-.0977.17383 0 .32129.0303.44434.09081s.22363.14355.30273.24902.13867.2251.17969.35889c.03998.1333.06348.27293.06927.41895.00299.0498.005.09621.005.13965 0 .0435-.00201.0903-.005.13965-.00598.14893-.0293.29053-.06927.42381-.04102.13379-.10059.25244-.17969.35645s-.17969.18604-.30273.24658c-.12305.06059-.27051.09081-.44434.09081v.00009-.00003zm-.09857-.37695c.16211 0 .28809-.0352.37988-.10498.0918-.06979.15723-.16113.19824-.2749.03998-.11328.06348-.23486.06927-.36523.00299-.0903.00299-.18018 0-.27002-.00598-.13084-.0293-.25244-.06927-.36572-.04102-.11328-.10645-.20508-.19824-.2749-.0918-.06979-.21777-.10498-.37988-.10498-.14551 0-.2666.03419-.36328.10254-.0957.06841-.16797.15527-.21582.26074-.04883.10596-.07422.21289-.07709.32178-.00299.0493-.005.10938-.005.1792 0 .06979.00201.12939.005.17918.00598.11475.03223.22754.07709.33742.04492.11035.11426.20117.20898.27246.09473.07179.21875.10742.37012.10742z" fill="#25357a"/><path d="m546.80621 77.14182c-.27051 0-.49707-.0415-.67969-.12549-.18359-.084-.32422-.19189-.42188-.32373-.0976-.13184-.14941-.271-.15625-.41699 0-.0249.0108-.04739.03027-.0674.02051-.02.04492-.0303.07233-.0303h.2373c.03809 0 .06543.009.08398.0278.01862.0186.03119.0405.03711.0654.01947.0742.05762.14793.11719.22119.05859.0728.14355.1333.25391.18164.10938.04781.25195.0723.42578.0723.2666 0 .46289-.04739.58887-.14209s.18848-.22119.18848-.37988c0-.1084-.0332-.19629-.09961-.26318-.06738-.06641-.16895-.12646-.30566-.1792-.13574-.0527-.31348-.10986-.53027-.17236-.22656-.065-.41504-.13623-.56348-.21387-.14941-.07761-.26074-.17383-.33301-.28906-.07318-.11475-.10938-.26076-.10938-.4375 0-.16797.04492-.31738.13477-.44971.08978-.13184.2207-.23682.3916-.31445.16992-.0771.375-.11621.61426-.11621.19238 0 .36133.02541.50586.07671.14355.0513.26465.11961.36035.20506.09668.08549.16895.17725.21875.27492.0498.0976.07617.19334.0791.28613 0 .022-.008.043-.02338.063-.01471.02049-.03998.0303-.07422.0303h-.24707c-.02148 0-.04388-.006-.06738-.0186-.02338-.01221-.04102-.0356-.05371-.06979-.01862-.12744-.08978-.23438-.21387-.32129-.12402-.0869-.28516-.13037-.48438-.13037-.20215 0-.36523.0386-.49121.11621s-.18848.19873-.18848.36328c0 .10547.0293.19336.08789.26318.05957.06979.15234.13133.28027.18408.12695.0527.29297.1084.49805.16748.24805.06841.45117.14062.61035.2168.1582.0762.27539.17041.35156.28418.07617.11328.11328.2583.11328.43504 0 .19582-.05078.36279-.15332.50098s-.24609.24365-.43066.31641c-.18457.0732-.40332.10938-.6543.10938l-.00012.00002v-.00003z" fill="#25357a"/><path d="m548.70563 77.09543c-.03027 0-.05658-.0103-.07617-.0303-.02051-.02-.03027-.0459-.03027-.07671v-3.09277c0-.03081.01001-.05659.03027-.07671.01947-.02.0459-.0303.07617-.0303h.2334c.03418 0 .06061.0103.0791.0303.01862.02.02728.0459.02728.07671v1.08545c.08398-.10547.18652-.19092.30762-.25635.12109-.0649.27539-.0977.46094-.0977.20215 0 .37402.04401.51465.13281.1416.08839.24902.21094.32129.36768.07318.15674.10938.33936.10938.54736v1.31348c0 .03081-.00897.05659-.02728.07671-.01862.02-.04492.0303-.0791.0303h-.2334c-.03027 0-.05658-.0103-.07617-.0303-.02051-.02-.03027-.0459-.03027-.07671v-1.29004c0-.21729-.05267-.3877-.1582-.51025-.10645-.12256-.26172-.1841-.46582-.1841-.19336 0-.34766.06149-.46582.1841-.11816.12256-.17773.29297-.17773.51025v1.29004c0 .03081-.00897.05659-.02728.07671-.01862.02-.04492.0303-.0791.0303h-.2334l-.00006.00005v-.00002z" fill="#25357a"/><path d="m552.10602 77.14182c-.15527 0-.2959-.03081-.42383-.0928-.12695-.0625-.22949-.146-.30664-.25146-.07812-.10596-.11719-.2251-.11719-.35889 0-.21436.08691-.38477.26172-.51221.17383-.12744.40039-.21094.67969-.25146l.69336-.0976v-.13525c0-.14893-.04199-.26562-.12793-.34912-.08502-.084-.22461-.12598-.41699-.12598-.13672 0-.24805.0278-.33496.084-.08691.05569-.14746.12744-.18164.21436-.01862.0464-.05078.06979-.09772.06979h-.20996c-.03418 0-.05957-.0103-.07617-.0303-.01758-.02049-.02643-.0444-.02643-.0723 0-.04691.01862-.104.05371-.17236.03607-.06841.09082-.13525.16602-.2002.07422-.0654.16992-.12061.28613-.16553.11621-.04491.25781-.0674.42578-.0674.18652 0 .34277.0239.4707.0723.12695.0479.22754.1123.2998.19336.07318.0806.12598.17188.15918.27441.03223.10254.04883.20654.04883.31201v1.50928c0 .03081-.01068.05659-.03027.07671-.02051.02-.0459.0303-.07709.0303h-.21387c-.03418 0-.06061-.0103-.0791-.0303-.01947-.02-.02832-.0459-.02832-.07671v-.20068c-.03998.0562-.09473.11131-.16309.16553-.06842.0542-.15332.09959-.25586.13525-.10254.0356-.22852.05321-.37793.05321l.00006.00005v-.00002zm.09857-.34912c.12695 0 .24316-.0274.34863-.0815.10547-.0542.18848-.13869.24902-.25391.06061-.11475.09082-.25928.09082-.43311v-.13037l-.54004.0791c-.2207.0312-.38672.0835-.49805.15625-.1123.0728-.16797.16502-.16797.27686 0 .0869.02539.15918.07709.2168.05078.0576.11621.1001.19531.12793.0791.0278.16113.04201.24512.04201l.00006-.00006z" fill="#25357a"/><path d="m554.97906 77.14182c-.21973 0-.41016-.0425-.57031-.12793-.16016-.0854-.2832-.20801-.37012-.36768-.08691-.16016-.13379-.35205-.13965-.5752-.00299-.04691-.005-.10889-.005-.18652 0-.07761.00201-.13965.005-.18604.00598-.22363.05267-.41553.13965-.5752.08691-.16016.20996-.28271.37012-.36816.16016-.08549.35059-.12793.57031-.12793.18066 0 .33496.0249.46387.0742.12891.0498.23535.11377.31934.19141.08301.07761.14648.16113.18848.25146.04199.0899.06439.17529.06738.25586.00299.0312-.00702.0562-.02832.07471-.02148.0186-.04791.0278-.0791.0278h-.22363c-.03119 0-.05371-.007-.06927-.021-.01562-.01421-.03119-.0381-.04688-.0723-.05573-.15186-.13184-.25928-.22852-.32129-.0957-.062-.21582-.09331-.3584-.09331-.18652 0-.33789.0576-.4541.17236-.11621.11523-.17871.2998-.18848.5542-.00299.11182-.00299.2207 0 .32617.01001.25781.07233.44336.18848.55664.11621.11328.26758.16992.4541.16992.14258 0 .2627-.0312.3584-.09331.09668-.062.17285-.16895.22852-.32129.01562-.03419.03119-.0591.04688-.07471.01562-.01511.03809-.02299.06927-.02299h.22363c.03119 0 .05762.00999.0791.0303.02148.02.03119.0459.02832.07671-.00299.0654-.01758.13184-.04199.2002-.02539.06841-.06451.1377-.11914.20752-.05371.06979-.12109.13184-.20215.18604-.08112.0542-.17676.0977-.28906.13037-.11133.0327-.24023.0488-.38672.0488v.00019z" fill="#25357a"/><path d="m556.68317 77.09543c-.03027 0-.05658-.0103-.07617-.0303-.02051-.02-.03027-.0459-.03027-.07671v-3.09277c0-.03081.01001-.05659.03027-.07671.01947-.02.0459-.0303.07617-.0303h.21973c.03027 0 .05573.0103.07617.0303s.03027.0459.03027.07671v1.62109l.91797-.76416c.03711-.03081.06543-.0518.08588-.0625.02051-.0112.05371-.0166.09961-.0166h.24707c.02832 0 .05182.009.07031.0278.01862.019.02728.04201.02728.0703 0 .01221-.00403.0264-.01172.0415-.008.01559-.02252.0312-.04388.04691l-1.07617.89404 1.19238 1.15967c.03809.0312.05658.0591.05658.084 0 .0278-.01001.0513-.02832.06979-.01862.0186-.04199.0278-.07031.0278h-.24219c-.0459 0-.08008-.005-.10156-.0161-.02252-.0112-.0498-.0322-.08398-.063l-1.03906-.99219v.96436c0 .03081-.01001.05659-.03027.07671-.02051.02-.0459.0303-.07617.0303h-.21973s.00012.00006.00012.00005z" fill="#25357a"/><path d="m572.09723 72.43822c-.03418 0-.06049-.0103-.0791-.0303-.01947-.02-.02832-.0459-.02832-.07671v-3.0415c0-.03419.00897-.061.02832-.0815.01862-.02.04492-.0303.0791-.0303h1.27539c.2334 0 .42285.0381.57129.11426.14648.0762.25586.1792.3252.30957.07031.13037.10547.27637.10547.43799 0 .12744-.02148.23682-.06348.32812-.04199.0918-.09369.1665-.15625.22363-.06152.0576-.12207.10205-.18164.13281.12109.0591.22949.15527.32422.28857.09473.13379.1416.29541.1416.48438 0 .1709-.03809.32764-.11621.4707-.07721.14258-.19336.25684-.34668.34229-.15332.08549-.34277.12793-.56641.12793 0 0-1.3125.00006-1.3125.00005zm.34863-1.88135h.85742c.19824 0 .34863-.0459.45117-.1377.10254-.09129.1543-.21631.1543-.375 0-.1582-.05182-.2793-.1543-.36279-.10254-.084-.25293-.12598-.45117-.12598h-.85742zm0 1.50391h.90332c.19922 0 .35254-.0542.46191-.16258.1084-.10889.16211-.24219.16211-.40088 0-.16455-.05371-.30029-.16211-.40723-.10938-.10742-.2627-.16064-.46191-.16064h-.90332s0 1.13133 0 1.13132z" fill="#25357a"/><path d="m575.94391 72.48459c-.19824 0-.36719-.0439-.50488-.13232-.13867-.0889-.24316-.21191-.31445-.37061-.07129-.1582-.10742-.33984-.10742-.54492v-1.31299c0-.0312.01001-.05659.03027-.0771.02051-.02.0459-.0303.07709-.0303h.23242c.03119 0 .05658.0103.07709.0303.02051.02049.03027.0459.03027.0771v1.29004c0 .4624.20215.69385.60547.69385.19238 0 .34668-.06149.46289-.18408.11719-.12256.1748-.29248.1748-.50977v-1.29004c0-.0312.01001-.05659.03027-.0771.02051-.02.0459-.0303.07709-.0303h.23242c.03119 0 .05658.0103.0752.0303.01862.02049.02728.0459.02728.0771v2.20752c0 .03081-.00897.05659-.02728.07671-.01862.02-.04388.0303-.0752.0303h-.21875c-.03119 0-.05658-.0103-.07617-.0303-.02051-.02-.03027-.0459-.03027-.07671v-.20506c-.08398.10889-.18555.1958-.30566.26074-.11914.0654-.27734.0977-.47266.0977 0 0 .00018-.00006.00018-.00005z" fill="#25357a"/><path d="m577.95172 72.43822c-.03119 0-.05658-.0103-.07709-.0303s-.03027-.0459-.03027-.07671v-2.20312c0-.03081.01001-.0571.03027-.0791.02051-.0215.0459-.0327.07709-.0327h.21387c.03119 0 .05762.0112.0791.0327.02148.022.03223.04829.03223.0791v.20508c.0625-.10547.14746-.18457.25684-.23779.1084-.0527.24023-.0791.39551-.0791h.18164c.03119 0 .05658.0103.07709.0303.01947.02049.03027.0459.03027.07719v.19092c0 .03081-.0108.05569-.03027.0742-.02051.0186-.0459.02831-.07709.02831h-.2793c-.16797 0-.2998.0488-.39551.14648-.09668.0977-.14453.23047-.14453.39795v1.36963c0 .03081-.01068.05659-.0332.07671-.02148.02-.04779.0303-.0791.0303h-.22754v-.00005.00002z" fill="#25357a"/><path d="m580.60602 73.46262c-.21191 0-.38477-.0278-.51953-.0835-.13477-.0562-.24023-.12354-.31641-.20264s-.13086-.15869-.16309-.23779c-.0332-.0791-.05078-.14209-.05371-.18848-.00299-.0312.00702-.0576.03027-.0791.02338-.022.04883-.0327.07709-.0327h.22363c.02728 0 .05078.006.06927.0186.01862.0127.03418.03909.04688.0791.01862.04691.0459.0986.08398.15625.03711.0576.09473.10693.17188.14893.07709.04201.18652.063.32617.063.14551 0 .26855-.02.36816-.06059.09857-.0405.17383-.10889.22559-.20506.05078-.09621.07721-.22951.07721-.40039v-.31689c-.0752.09669-.17285.17627-.29395.24023-.12109.06351-.27344.0952-.45605.0952-.17383 0-.32324-.0303-.44727-.09081-.12402-.06059-.22559-.14258-.30469-.24658s-.13867-.22314-.17773-.35645c-.03809-.1333-.06049-.27295-.06738-.41895-.00299-.0869-.00299-.17236 0-.25635.00702-.146.0293-.28564.06738-.41895.03912-.13377.09857-.2534.17773-.35889.0791-.10547.18066-.18848.30469-.24902.12402-.0605.27344-.09081.44727-.09081.18652 0 .34082.03419.46289.10254.12305.06841.22266.15332.30078.25586v-.2002c0-.03081.01001-.0571.03027-.0791.02051-.0215.0459-.0327.07709-.0327h.21387c.03119 0 .05762.0112.0791.0327.02148.022.03223.04829.03223.0791v2.25879c0 .20799-.03418.39256-.10449.5542-.06927.16162-.18457.28857-.34473.38184-.16016.09331-.375.13965-.64453.13965l.00012-.00006v.00004zm-.01001-1.37842c.15527 0 .28027-.0356.375-.10693.09473-.0713.16504-.16162.20996-.27002.04492-.10889.06842-.21924.07233-.33105.00299-.0434.00403-.09669.00403-.16064 0-.06351-.00098-.11719-.00403-.16064-.00403-.11182-.02728-.22168-.07233-.33057-.04492-.1084-.11523-.19873-.20996-.27002-.09473-.0713-.21973-.10742-.375-.10742s-.2793.0352-.37207.10498c-.09369.06979-.16016.16162-.2002.2749-.04102.11328-.06439.23486-.07031.36572-.00299.0806-.00299.1626 0 .24658.00598.13037.0293.25244.07031.36572.03998.11328.10645.20459.2002.2749.09277.06979.2168.10449.37207.10449v-.00002z" fill="#25357a"/><path d="m583.36285 72.48459c-.32324 0-.5791-.0981-.76855-.29541-.18945-.19727-.29297-.4668-.3125-.80811-.00299-.0405-.00403-.0923-.00403-.15625 0-.06351.00098-.11523.00403-.15576.0127-.2207.06451-.41357.1543-.58008.08978-.16602.21289-.29395.37012-.38428.15625-.0898.34082-.13477.55176-.13477.23633 0 .43359.0498.59375.14893.16016.09959.28223.24072.36621.42383.08301.18311.125.39746.125.64258v.0791c0 .03419-.01001.06059-.03027.07961-.01947.0186-.0459.0278-.07617.0278h-1.61133v.04201c.00598.12695.0332.24609.08301.35596.0498.11035.12207.19971.2168.26807.09473.06841.20605.10252.33301.10252.1123 0 .20508-.01711.2793-.0513.0752-.03419.13574-.0723.18164-.11424.04688-.04201.07812-.0752.09369-.1001.02728-.03709.04883-.0596.06451-.0674.01562-.008.04102-.0117.0752-.0117h.22754c.02832 0 .05267.008.07233.02541.02051.01711.0293.0415.02643.0723-.00403.0464-.02832.10352-.0752.16994-.0459.06689-.1123.13281-.19727.19824-.08588.0649-.19141.11865-.31738.16064-.12598.0415-.26758.0625-.42578.0625 0 0-.00012-.00003-.00012-.00004zm-.63769-1.43408h1.27539v-.01421c0-.13965-.02539-.26367-.07617-.37256-.05182-.1084-.125-.19482-.22168-.2583-.09668-.064-.21094-.0957-.34473-.0957s-.24707.03169-.3418.0957c-.09473.06351-.16699.1499-.2168.2583-.0498.10889-.07422.23291-.07422.37256v.01421z" fill="#25357a"/><path d="m585.10895 72.43822c-.03119 0-.05658-.0103-.07709-.0303s-.03027-.0459-.03027-.07671v-2.20312c0-.03081.01001-.0571.03027-.0791.02051-.0215.0459-.0327.07709-.0327h.21387c.03119 0 .05762.0112.0791.0327.02148.022.03223.04829.03223.0791v.20508c.0625-.10547.14746-.18457.25684-.23779.1084-.0527.24023-.0791.39551-.0791h.18164c.03119 0 .05658.0103.07709.0303.01947.02049.03027.0459.03027.07719v.19092c0 .03081-.01068.05569-.03027.0742-.02051.0186-.0459.02831-.07709.02831h-.2793c-.16797 0-.2998.0488-.39551.14648-.09668.0977-.14453.23047-.14453.39795v1.36963c0 .03081-.01068.05659-.0332.07671-.02148.02-.04791.0303-.0791.0303h-.22754v-.00005.00002z" fill="#25357a"/><path d="m588.90485 72.48459c-.21191 0-.39844-.0386-.56152-.11621s-.28906-.18555-.37988-.32373c-.08978-.13818-.13477-.29736-.13477-.47754 0-.14258.03027-.26758.09082-.37451.06049-.10742.14062-.20264.24023-.28662.09857-.084.20801-.15967.3252-.22803-.14551-.15527-.24902-.29199-.30957-.41016-.06061-.11768-.09082-.24023-.09082-.36768 0-.13965.03607-.26709.10742-.38184.07129-.11523.17188-.20799.30273-.27979.13086-.0713.28418-.10693.46094-.10693.17383 0 .32422.03419.45215.10252.12695.06841.22656.15967.29785.27492.07129.11475.10742.24365.10742.38623 0 .13672-.0332.25635-.09772.35889-.06543.10254-.15137.19385-.25879.27441-.10742.0811-.22461.15723-.35156.22852l.79199.77785c.04883-.0869.09668-.18799.1416-.30273.04492-.11523.08112-.25.10938-.40527.00598-.062.03912-.09331.0976-.09331h.20508c.03119 0 .05469.009.07233.0278.0166.0186.02539.04201.02539.06979-.00299.06841-.0127.14162-.03027.21924-.0166.07761-.04199.15967-.07422.24658-.0332.0869-.07129.17334-.11621.25879-.04492.0854-.09772.16846-.15625.24902l.47461.47508c.02832.0249.04199.0479.04199.06979 0 .0278-.008.0498-.02338.0649-.01562.01559-.03809.02341-.06927.02341h-.26074c-.03119 0-.05658-.005-.07709-.01421-.02051-.009-.03607-.02-.04883-.0322l-.30762-.30273c-.12109.11768-.26367.21336-.42773.28613-.16504.0732-.35449.10938-.56836.10938 0 0-.00012.00023-.00012.00024zm0-.37255c.12402 0 .24805-.02541.37207-.07671s.23926-.12939.34473-.23535l-.87109-.84766c-.13281.07471-.24902.15918-.34668.25391-.09772.0947-.14648.21191-.14648.35156 0 .11816.03027.21828.09082.3008.06061.082.14062.14502.23926.18848.09961.0435.20508.0649.31738.0649v.00008zm-.05658-1.625c.09961-.05611.19238-.11182.27734-.16795.08588-.05569.1543-.11768.20508-.18604.05182-.06841.07709-.146.07709-.23291 0-.12402-.04388-.22363-.13086-.29834-.08691-.0742-.19434-.11182-.32129-.11182-.12109 0-.22656.03661-.31641.10986-.08978.07269-.13477.17432-.13477.30469 0 .05321.00897.10645.02728.16064.01862.0547.05371.11426.10449.17969.05182.0649.12207.146.21191.24219l.00012-.00002v.00002z" fill="#25357a"/><path d="m573.99664 77.09543c-.03418 0-.06061-.0103-.0791-.0303-.01947-.02-.02832-.0459-.02832-.07671v-3.0415c0-.03419.00897-.061.02832-.0815.01862-.02.04492-.0303.0791-.0303h1.27539c.2334 0 .42285.0381.57129.11426.14648.0762.25586.1792.3252.30957.07031.13037.10547.27637.10547.43799 0 .12744-.02148.23682-.06348.32812-.04199.0918-.09369.1665-.15625.22363-.06152.0576-.12207.10205-.18164.13281.12109.0591.22949.15527.32422.28857.09473.13379.1416.29541.1416.48438 0 .17088-.03809.32764-.11621.4707-.07721.14258-.19336.25684-.34668.34229-.15332.0854-.34277.12793-.56641.12793 0 0-1.3125.00006-1.3125.00005zm.34864-1.88134h.85742c.19824 0 .34863-.0459.45117-.1377.10254-.09129.1543-.21631.1543-.375 0-.1582-.05182-.2793-.1543-.36279-.10254-.084-.25293-.12598-.45117-.12598h-.85742zm0 1.5039h.90332c.19922 0 .35254-.0542.46191-.1626.1084-.10889.16211-.24219.16211-.40088 0-.16455-.05371-.30029-.16211-.40723-.10938-.10742-.2627-.16064-.46191-.16064h-.90332s0 1.13135 0 1.13134z" fill="#25357a"/><path d="m577.90875 77.14182c-.32324 0-.5791-.0981-.76855-.29541-.18945-.19727-.29297-.4668-.3125-.80811-.00299-.0405-.00403-.0923-.00403-.15625 0-.06351.00098-.11523.00403-.15576.0127-.2207.06439-.41357.1543-.58008.08978-.16602.21289-.29395.37012-.38428.15625-.0898.34082-.13477.55176-.13477.23633 0 .43359.0498.59375.14893.16016.09959.28223.24072.36621.42383.08301.18311.125.39746.125.64256v.0791c0 .03419-.01001.0605-.03027.07961-.01947.0186-.0459.0278-.07617.0278h-1.61133v.04201c.00598.12695.0332.24609.08301.35596.0498.11035.12207.19971.2168.26807.09473.06841.20605.10254.33301.10254.1123 0 .20508-.01711.2793-.0513.0752-.03419.13574-.0723.18164-.11426.04688-.04201.07812-.0752.09369-.10008.0274-.03709.04883-.0596.06451-.0674.01562-.008.04102-.0117.0752-.0117h.22754c.02832 0 .05267.008.07233.02541.02051.01711.0293.0415.02643.0723-.00403.0464-.02832.10352-.0752.16992-.0459.06689-.1123.13281-.19727.19824-.08588.065-.19141.11867-.31738.16064-.12598.0415-.26758.0625-.42578.0625l-.00012-.00002zm-.63769-1.43408h1.27539v-.01421c0-.13965-.02539-.26367-.07617-.37256-.05182-.1084-.125-.19482-.22168-.2583-.09668-.064-.21094-.0957-.34473-.0957s-.24707.03169-.3418.0957c-.09473.06351-.16699.1499-.2168.2583-.0498.10889-.07422.23291-.07422.37256v.01421z" fill="#25357a"/><path d="m579.97125 77.98021c-.02539 0-.04688-.009-.06543-.0278-.01862-.0186-.02728-.0405-.02728-.0654 0-.01221.00098-.0249.00403-.03709.00299-.01221.01001-.0278.01862-.0464l.35938-.85254-.88965-2.1001c-.01562-.0376-.02338-.064-.02338-.0791 0-.02831.00897-.0513.02728-.0703.01947-.01849.04199-.0278.07031-.0278h.22852c.03418 0 .05957.008.07617.02341.01758.01559.0293.03419.03522.05569l.70801 1.69531.72656-1.69531c.01001-.0215.02252-.03999.03998-.05569.0166-.01559.04199-.02341.07617-.02341h.21875c.02832 0 .05182.009.07031.0278.01862.019.02728.0405.02728.0654 0 .01559-.00702.0435-.02252.084l-1.32324 3.05029c-.00897.0215-.02252.0405-.03912.0562-.01758.01511-.04303.02299-.07709.02299l-.21887-.00015z" fill="#25357a"/><path d="m583.1109 77.14182c-.23633 0-.43359-.04491-.5918-.13477-.1582-.0903-.2793-.21484-.36328-.375-.08398-.15965-.12988-.34229-.13965-.54736-.00299-.0527-.005-.12012-.005-.20264 0-.082.00201-.14795.005-.19775.01001-.20801.05658-.39111.1416-.5498.08588-.1582.20801-.28223.36621-.37254.1582-.0898.35352-.13477.58691-.13477.23242 0 .42773.04491.58691.13477.1582.0903.2793.21436.36523.37254.08502.15871.13281.3418.1416.5498.00403.0498.005.11572.005.19775 0 .0825-.00098.14992-.005.20264-.00897.20508-.05573.3877-.13965.54736-.08301.16016-.2041.28467-.36328.375-.1582.0898-.35547.13477-.59082.13477zm0-.3584c.19238 0 .3457-.06149.46094-.18408.11426-.12256.17676-.30176.18652-.5376.00299-.04691.00403-.10596.00403-.17725s-.00098-.13037-.00403-.17676c-.01001-.23584-.07233-.41553-.18652-.53809-.11523-.12256-.26855-.18408-.46094-.18408s-.34766.06149-.46387.18408c-.11621.12256-.17773.30225-.18359.53809-.00299.0464-.005.10547-.005.17676 0 .0713.00201.13037.005.17725.00598.23584.06738.41504.18359.5376s.27148.18408.46387.18408z" fill="#25357a"/><path d="m584.89899 77.09543c-.03119 0-.05658-.0103-.07709-.0303s-.03027-.0459-.03027-.07671v-2.20752c0-.0312.01001-.05659.03027-.07719.02051-.02.0459-.0303.07709-.0303h.21875c.03027 0 .05658.0103.07617.0303.02051.02049.03027.0459.03027.07719v.20459c.08112-.10547.18262-.19141.30566-.2583.12207-.06689.28027-.1001.47266-.1001.20117 0 .37305.04401.51465.13281.14062.08839.24805.21094.32129.36768.07318.15674.10938.33936.10938.54736v1.31348c0 .03081-.01001.05659-.03027.07671-.02051.02-.0459.0303-.07709.0303h-.23242c-.03119 0-.05658-.0103-.07709-.0303s-.03027-.0459-.03027-.07671v-1.29004c0-.21729-.05267-.3877-.1582-.51025-.10547-.12256-.26074-.1841-.46582-.1841-.19238 0-.34668.06149-.46289.1841-.11719.12254-.1748.29295-.1748.51025v1.29004c0 .03081-.0108.05659-.03027.07671-.02051.02-.0459.0303-.07709.0303h-.2326z" fill="#25357a"/><path d="m588.4986 77.14182c-.1709 0-.31836-.0303-.44238-.09081-.12402-.06059-.22559-.14258-.30469-.24658s-.13867-.22266-.17773-.35645c-.03809-.1333-.06049-.2749-.06738-.42381-.00299-.0493-.005-.09621-.005-.13965 0-.0435.00201-.0898.005-.13965.00702-.146.0293-.28564.06738-.41895.03912-.13377.09857-.2534.17773-.35889.0791-.10547.18066-.18848.30469-.24902.12402-.0605.27148-.09081.44238-.09081.18359 0 .33496.0327.45605.0977.12109.0654.2207.146.29883.24219v-1.07129c0-.03081.01001-.05659.03027-.07671.01947-.02.04492-.0303.07617-.0303h.22363c.03119 0 .05658.0103.07709.0303s.03027.0459.03027.07671v3.09277c0 .03081-.01001.05659-.03027.07671-.02051.02-.0459.0303-.07709.0303h-.20898c-.03418 0-.06061-.0103-.0791-.0303-.01947-.02-.02832-.0459-.02832-.07671v-.1958c-.07812.09959-.17871.18262-.30273.24902-.12402.06689-.2793.1001-.46582.1001v-.00009.00003zm.09771-.37695c.15527 0 .2793-.03571.37305-.10744.09277-.0713.16309-.16209.20898-.27246.04688-.10986.07129-.22266.0752-.3374.00299-.0498.00403-.10938.00403-.1792 0-.06979-.00098-.12988-.00403-.1792-.00403-.10889-.0293-.21582-.07721-.32178-.04779-.10547-.12012-.19238-.21387-.26076-.09473-.0683-.2168-.10252-.36621-.10252-.1582 0-.28418.0352-.37695.10498-.09369.06979-.16016.16162-.2002.2749-.04102.11328-.06348.23486-.07031.36572-.00299.0898-.00299.17969 0 .27002.00702.13037.0293.25195.07031.36523.03998.11377.10645.20508.2002.27492.09277.06979.21875.10498.37695.10498h.00006z" fill="#25357a"/><path d="m607.02502 72.74126c-.04034 0-.07294-.01397-.09778-.04192-.02484-.02484-.04504-.04657-.06055-.0652l-.19098-.2608c-.16766.07452-.36169.11177-.58215.11177-.26703 0-.49524-.04502-.68463-.13506-.18628-.09314-.33221-.23441-.43781-.42381-.10248-.1925-.15833-.43312-.16766-.72187-.00311-.13661-.00464-.26701-.00464-.39121 0-.1273.00153-.25925.00464-.39586.00934-.28564.0683-.52316.17694-.71256.10864-.1925.25769-.33532.44708-.42847.1925-.09625.41449-.14437.66595-.14437.25458 0 .47656.04812.66595.14437.1925.09314.34308.23597.45172.42847.10864.18939.16614.42691.1723.71256.00623.13661.00934.26857.00934.39586 0 .12419-.00311.2546-.00934.39121-.0155.42847-.12732.74671-.33533.95473l.30737.43778c.00311.0031.00623.00776.00934.01397.00311.00931.00464.02173.00464.03726.00311.02484-.00464.04657-.02332.0652-.01862.01863-.04193.02794-.06989.02794h-.25146l.00024.00002zm-.93145-.65201c.23596 0 .42999-.07141.58215-.21423s.23444-.37413.24683-.69393c.00623-.13972.00934-.26391.00934-.37258 0-.11177-.00311-.23597-.00934-.37258-.00623-.21423-.04657-.3881-.12109-.52161-.07141-.13351-.16766-.23131-.28876-.29341s-.2608-.09315-.41913-.09314c-.15216 0-.29028.03105-.41449.09314-.12109.0621-.21735.1599-.28876.29341s-.11176.30738-.12109.52161c-.00311.13661-.00464.26081-.00464.37258 0 .10867.00153.23286.00464.37258.01239.3198.09473.55111.24683.69393.15216.14282.34467.21423.57751.21423zm2.8269.39587c-.19873 0-.36792-.04347-.50763-.1304-.1366-.09004-.2406-.21423-.31201-.37258s-.10712-.33998-.10712-.5449v-1.31334c0-.03105.00934-.05589.02795-.07452.02173-.02173.04816-.0326.07916-.0326h.23285c.03107 0 .05591.01087.07452.0326.02173.01863.03259.04347.03259.07452v1.29005c0 .46262.20178.69393.60547.69393.1925 0 .34619-.06054.46106-.18163.11798-.12419.17694-.29496.17694-.5123v-1.29005c0-.03105.00934-.05589.02795-.07452.02173-.02173.0481-.0326.07916-.0326h.22821c.03418 0 .06055.01087.07916.0326.01862.01863.02795.04347.02795.07452v2.20753c0 .03105-.00934.05744-.02795.07917-.01862.01863-.04504.02794-.07916.02794h-.21423c-.03107 0-.05743-.00931-.07916-.02794-.01862-.02173-.02795-.04812-.02795-.07917v-.20492c-.0838.10867-.18628.1956-.30737.2608-.11798.0652-.27478.0978-.4704.09781zm2.00726-.04658c-.03107 0-.05743-.00931-.07916-.02794-.01862-.02173-.02795-.04812-.02795-.07917v-2.20753c0-.03105.00934-.05589.02795-.07452.02173-.02173.04816-.0326.07916-.0326h.22357c.03107 0 .05591.01087.07452.0326.01862.01863.02795.04347.02795.07452v2.20753c0 .03105-.00934.05744-.02795.07917-.01862.01863-.04346.02794-.07452.02794zm-.03723-2.87351c-.03107 0-.05743-.00931-.07916-.02794-.01862-.02173-.02795-.04813-.02795-.07917v-.25149c0-.03105.00934-.05589.02795-.07452.02173-.02173.0481-.0326.07916-.0326h.2934c.03107 0 .05591.01087.07452.0326.02173.01863.03259.04347.03259.07452v.25149c0 .03105-.01086.05744-.03259.07917-.01862.01863-.04346.02794-.07452.02794zm1.16895 2.87351c-.03107 0-.05743-.00931-.07916-.02794-.01862-.02173-.02795-.04812-.02795-.07917v-3.0924c0-.03105.00934-.05589.02795-.07452.02173-.02173.04816-.0326.07916-.0326h.21887c.03418 0 .06055.01087.07916.0326.01862.01863.02795.04347.02795.07452v3.0924c0 .03105-.00934.05744-.02795.07917-.01862.01863-.04504.02794-.07916.02794zm1.13171 0c-.03107 0-.05743-.00931-.07916-.02794-.01862-.02173-.02795-.04812-.02795-.07917v-3.0924c0-.03105.00934-.05589.02795-.07452.02173-.02173.04816-.0326.07916-.0326h.21887c.03418 0 .06055.01087.07916.0326.01862.01863.02795.04347.02795.07452v3.0924c0 .03105-.00934.05744-.02795.07917-.01862.01863-.04504.02794-.07916.02794z" fill="#25357a"/><path d="m605.46387 157.59065c-.03418 0-.06055-.00931-.07916-.02794-.01862-.02173-.02795-.04813-.02795-.07916v-3.04117c0-.03415.00934-.06055.02795-.07916.01862-.02173.04504-.03259.07916-.03259h.23755c.03418 0 .06055.01086.07916.03259.02173.01863.03259.04501.03259.07916v1.2854h1.60211v-1.2854c0-.03415.00934-.06055.02795-.07916.02173-.02173.04816-.03259.07916-.03259h.23755c.03418 0 .06055.01086.07916.03259.02173.01863.03259.04501.03259.07916v3.04117c0 .03105-.01086.05743-.03259.07916-.01862.01863-.04504.02794-.07916.02794h-.23755c-.03107 0-.05743-.00931-.07916-.02794-.01862-.02173-.02795-.04813-.02795-.07916v-1.33662h-1.60211v1.33662c0 .03105-.01086.05743-.03259.07916-.01862.01863-.04504.02794-.07916.02794zm3.83294.04659c-.15521 0-.29651-.03105-.42383-.09314-.12732-.0621-.22974-.14594-.30737-.2515s-.11646-.2251-.11646-.35861c0-.21423.08691-.38499.2608-.5123s.40051-.21114.67993-.2515l.69391-.09779v-.13506c0-.14903-.04346-.26546-.13037-.34929-.0838-.08383-.22198-.12575-.41449-.12575-.13971 0-.25305.02794-.33997.08383-.0838.05589-.14282.1273-.17694.21423-.01862.04657-.05121.06985-.09778.06985h-.20959c-.03418 0-.06055-.00931-.07916-.02794-.0155-.02173-.02332-.04657-.02332-.07452 0-.04657.01709-.104.05121-.17232.03723-.06831.09314-.13506.16766-.20026s.16919-.11954.28412-.16299c.11798-.04657.2608-.06985.42847-.06985.18628 0 .34308.02484.4704.07452.12732.04657.22662.11021.29803.19095.07452.08073.12732.17232.15833.27478.03418.10246.05121.20647.05121.31203v1.50894c0 .03105-.01086.05743-.03259.07916-.01862.01863-.04346.02794-.07452.02794h-.21423c-.03418 0-.06055-.00931-.07916-.02794-.01862-.02173-.02795-.04813-.02795-.07916v-.20026c-.04034.05589-.09473.11177-.16302.16766-.0683.05278-.15369.09779-.25616.13506-.10248.03415-.22821.05122-.37726.05122l.00012-.00002zm.09778-.34931c.12732 0 .24371-.02638.3493-.07916.10553-.05589.18787-.14127.24683-.25615.06207-.11488.09314-.25925.09314-.43312v-.1304l-.54022.07916c-.22046.03105-.38654.08383-.49829.15836-.11176.07141-.16766.16299-.16766.27478 0 .08693.02484.1599.07452.21889.0528.05589.11798.09779.19562.12575.08075.02794.16302.04192.24683.04192l-.00006-.00002zm2.78968 1.32732c-.21112 0-.38501-.02794-.52161-.08383-.13348-.05589-.23907-.12419-.31671-.20493-.07452-.07762-.12885-.15678-.16302-.23752-.03107-.07762-.0481-.13972-.05121-.18629-.00311-.03105.00623-.05743.02795-.07916.02484-.02173.05121-.03259.07916-.03259h.22357c.02795 0 .05121.00621.06989.01863.01862.01242.03418.0388.04657.07916.01862.04657.04657.09779.0838.15369.03723.05899.09473.10867.1723.14903.07764.04347.18628.0652.32599.0652.14594 0 .26855-.02019.36792-.06055.09937-.03726.17389-.10556.22357-.20493.0528-.09625.07916-.22977.07916-.40051v-.3167c-.07452.09625-.1723.17697-.2934.24219-.12109.0621-.27319.09314-.45642.09314-.17389 0-.32288-.0295-.44708-.08849-.12421-.0621-.22662-.14436-.30737-.24683-.07764-.10556-.1366-.2251-.17694-.35861-.03723-.13351-.05896-.27322-.06519-.41914-.00311-.08694-.00311-.17232 0-.25615.00623-.14594.02795-.28564.06519-.41914.04034-.13351.09937-.25304.17694-.35861.08075-.10556.18317-.18784.30737-.24683.12421-.0621.27319-.09314.44708-.09314.18628 0 .33997.03571.46106.10712.12421.06831.2251.15215.30273.2515v-.20026c0-.03105.00934-.05743.02795-.07916.02173-.02173.04816-.03259.07916-.03259h.21423c.03107 0 .05743.01086.07916.03259s.03259.04813.03259.07916v2.25876c0 .20802-.03571.39276-.10712.55421-.0683.16145-.18317.28876-.34467.3819-.15833.09314-.37256.13972-.6427.13972l.00006-.00005zm-.00928-1.37854c.15521 0 .27942-.03571.37256-.10712.09625-.07141.16614-.16145.20959-.27013.04657-.10867.07141-.21889.07452-.33066.00311-.04347.00464-.09625.00464-.15836 0-.0652-.00153-.11954-.00464-.16299-.00311-.11177-.02795-.22198-.07452-.33066-.04346-.10867-.11334-.19872-.20959-.27013-.09314-.07141-.21735-.10712-.37256-.10712s-.27942.03571-.37256.10712c-.09314.06831-.15991.1599-.20026.27478-.04034.11177-.06366.23286-.06989.36327-.00311.08073-.00311.16299 0 .24683.00623.1304.02948.25304.06989.36792.04034.11177.10712.20337.20026.27478.09314.06831.21735.10246.37256.10246zm2.76172.40053c-.31982 0-.5744-.09779-.76379-.29341-.18939-.19872-.2934-.46883-.31201-.81036-.00311-.04036-.00464-.09158-.00464-.15369 0-.0652.00153-.11798.00464-.15836.01239-.22044.06366-.41293.15369-.5775.09003-.16766.21271-.29651.36792-.38655.15833-.09004.34308-.13506.5542-.13506.23596 0 .43311.04968.59149.14903.16144.09935.28412.24062.36792.42381.0838.18318.12573.39742.12573.6427v.07916c0 .03415-.01086.06055-.03259.07916-.01862.01863-.04346.02794-.07452.02794h-1.61139v.04192c.00623.1273.03418.24683.0838.35861.04968.10867.12109.19716.21423.26546.09314.06831.2049.10246.33533.10246.11176 0 .2049-.01707.27942-.05122s.13507-.07141.18164-.11177c.04657-.04347.07764-.07607.09314-.09779.02795-.04036.04968-.06364.06519-.06985.0155-.00931.04034-.01398.07452-.01398h.22357c.03107 0 .05591.00931.07452.02794.02173.01552.03107.0388.02795.06985-.00311.04657-.02795.104-.07452.17232-.04657.0652-.11334.1304-.20026.1956s-.1925.11954-.31671.16299c-.12421.04036-.26703.06055-.42847.06055v.00003zm-.63337-1.43444h1.27606v-.01398c0-.13972-.02637-.26392-.07916-.37257-.04968-.10867-.12262-.19405-.21887-.25615-.09625-.0652-.21112-.09779-.34467-.09779s-.24841.03259-.34467.09779c-.09314.0621-.16455.14748-.21423.25615s-.07452.23286-.07452.37257v.01398zm2.38447 1.38785c-.03107 0-.05743-.00931-.07916-.02794-.01862-.02173-.02795-.04813-.02795-.07916v-2.20753c0-.03105.00934-.05589.02795-.07452.02173-.02173.0481-.03259.07916-.03259h.21887c.03107 0 .05591.01086.07452.03259.02173.01863.03259.04347.03259.07452v.20493c.08075-.10556.18164-.19095.30273-.25615.12421-.06831.28253-.10246.47504-.10246.20178 0 .37256.04501.51233.13506.14282.08694.24994.20958.32135.36792.07141.15524.10712.33687.10712.54491v1.31334c0 .03105-.00934.05743-.02795.07916-.01862.01863-.04346.02794-.07452.02794h-.23285c-.03107 0-.05743-.00931-.07916-.02794-.01862-.02173-.02795-.04813-.02795-.07916v-1.29005c0-.21735-.0528-.38655-.15833-.50764-.10553-.12419-.2608-.18629-.4657-.18629-.1925 0-.34772.0621-.4657.18629-.11487.12109-.1723.2903-.1723.50764v1.29005c0 .03105-.01086.05743-.03259.07916-.01862.01863-.04346.02794-.07452.02794h-.23297z" fill="#25357a"/><path d="m606.45251 226.34851c-.04401 0-.078-.01199-.10199-.036-.02399-.028-.03601-.062-.03601-.10201v-3.918c0-.04401.01202-.078.03601-.10201.02399-.028.05798-.04201.10199-.04201h1.64398c.29999 0 .54401.05.73199.14999.19202.09599.33197.228.41998.396.09198.168.138.356.138.564 0 .164-.02802.306-.08398.42599-.052.116-.11798.21201-.198.28799-.08002.07201-.15802.12801-.23401.168.15601.076.29401.2.414.37199.12402.172.18597.38.18597.62399 0 .22-.04999.422-.15002.606-.09998.18401-.25.332-.45001.444-.19598.108-.44.162-.73199.162h-1.68597l.00006.00005zm.45002-.48601h1.15802c.26001 0 .46002-.07001.59998-.21001s.21002-.312.21002-.51601c0-.21201-.07001-.386-.21002-.522-.14001-.14-.34003-.21001-.59998-.21001h-1.15802v1.45802zm0-1.93799h1.104c.25598 0 .45001-.058.58197-.174.13202-.12.198-.282.198-.48599s-.06598-.36-.198-.468-.32599-.162-.58197-.162h-1.104zm3.48004 2.424c-.03998 0-.07397-.01199-.10199-.036-.02399-.028-.03601-.062-.03601-.10201v-2.84399c0-.03999.01202-.07201.03601-.09599.02802-.028.06201-.04201.10199-.04201h.28802c.03998 0 .07202.01401.09601.04201.02399.024.03601.056.03601.09599v2.84399c0 .03999-.01202.07401-.03601.10201-.02399.024-.05603.036-.09601.036zm-.04804-3.702c-.03998 0-.07397-.01199-.10199-.036-.02399-.028-.03601-.062-.03601-.10201v-.32401c0-.03999.01202-.07201.03601-.09599.02802-.028.06201-.04201.10199-.04201h.37799c.03998 0 .07202.01401.09601.04201.02802.024.04199.056.04199.09599v.32401c0 .03999-.01398.07401-.04199.10201-.02399.024-.05603.036-.09601.036zm1.50599 3.702c-.03998 0-.07397-.01199-.10199-.036-.02399-.028-.03601-.062-.03601-.10201v-3.98399c0-.03999.01202-.07201.03601-.09599.02802-.028.06201-.04201.10199-.04201h.28198c.04401 0 .078.01401.10199.04201.02399.024.03601.056.03601.09599v3.98399c0 .03999-.01202.07401-.03601.10201-.02399.024-.05798.036-.10199.036zm1.458 0c-.03998 0-.07397-.01199-.10199-.036-.02399-.028-.03601-.062-.03601-.10201v-3.98399c0-.03999.01202-.07201.03601-.09599.02802-.028.06201-.04201.10199-.04201h.28198c.04401 0 .078.01401.10199.04201.02399.024.03601.056.03601.09599v3.98399c0 .03999-.01202.07401-.03601.10201-.02399.024-.05798.036-.10199.036zm1.30805-3.102c-.03198 0-.05798-.01199-.078-.036-.01599-.024-.02197-.054-.01801-.09l.138-.858c.008-.048.02399-.088.04797-.12.02802-.036.06799-.054.12-.054h.40198c.02802 0 .04999.01199.06598.036.02002.02.03003.04201.03003.06599 0 .032-.008.064-.02399.09599l-.31201.82201c-.01599.03999-.03802.07401-.06598.10201-.02399.024-.06201.036-.11401.036h-.19202zm2.24096 3.162c-.224 0-.41602-.028-.57599-.084s-.28998-.12399-.39001-.20399c-.09998-.08-.17603-.16-.22803-.24001-.04797-.08-.07397-.144-.078-.192-.00403-.04401.01001-.078.04199-.10201s.06403-.036.09601-.036h.26398c.02399 0 .04199.004.05402.01199.01599.004.03601.02.06.048.052.056.10999.112.17401.168s.14203.10201.23401.138c.09601.036.21399.054.354.054.20398 0 .37201-.03799.50403-.114.13202-.08.198-.196.198-.34801 0-.10001-.02802-.17999-.08398-.24001-.052-.06-.14801-.114-.28802-.162-.13599-.048-.32397-.09801-.56403-.14999-.23999-.056-.42999-.12399-.57001-.20399-.14001-.084-.23999-.18201-.29999-.29401-.06-.116-.09003-.246-.09003-.39 0-.14799.04401-.28999.13202-.42599.08801-.14.216-.254.38397-.342.172-.088.38599-.132.64203-.132.20801 0 .38599.026.534.078s.27002.118.36603.198c.09601.076.16803.15199.216.228s.07397.14.078.192c.00403.03999-.008.07401-.03601.10201-.02802.024-.06.036-.09601.036h-.25201c-.02802 0-.052-.006-.07202-.01801-.01599-.01199-.03198-.026-.04797-.04201-.03998-.052-.08801-.104-.14398-.15601-.052-.052-.12201-.09399-.21002-.12601-.08398-.036-.19598-.054-.336-.054-.20001 0-.34998.04201-.45001.12601-.09998.084-.15002.19-.15002.31799 0 .076.02197.144.06598.20399s.12799.114.25201.162.30798.10001.552.15601c.26398.052.47198.12199.62402.21001.15198.088.26001.19.32397.306.06403.116.09601.25.09601.40199 0 .168-.04999.32201-.15002.46201-.09601.14-.23999.252-.43201.336-.18799.08-.422.12-.70203.12l.00012.00003z" fill="#716f72"/><path d="m597.35437 256.57605c-.04401 0-.078-.01199-.10199-.03601-.02399-.02802-.03601-.06201-.03601-.10199v-3.918c0-.04401.01202-.078.03601-.10201.02399-.028.05798-.04201.10199-.04201h2.448c.04401 0 .078.01401.10199.04201.02399.024.03601.058.03601.10201v.24001c0 .04401-.01202.078-.03601.10201s-.05798.036-.10199.036h-2.00403v1.39799h1.88397c.04401 0 .078.01401.10199.04201.02399.024.03601.058.03601.10201v.24001c0 .03999-.01202.07401-.03601.10201-.02399.024-.05798.036-.10199.036h-1.88397v1.62001c0 .04001-.01398.07401-.04199.10199-.02399.02399-.05798.03601-.10199.03601h-.29999v-.00003zm3.43201 0c-.03998 0-.07397-.01199-.10199-.03601-.02399-.02802-.03601-.06201-.03601-.10199v-3.98399c0-.03999.01202-.07201.03601-.09599.02802-.028.06201-.04201.10199-.04201h.28198c.04401 0 .078.01401.10199.04201.02399.024.03601.056.03601.09599v3.98399c0 .04001-.01202.07401-.03601.10199-.02399.02399-.05798.03601-.10199.03601zm2.18402.06c-.20001 0-.38202-.04001-.54602-.12s-.29602-.18799-.396-.32401c-.09998-.13599-.15002-.28999-.15002-.46201 0-.276.112-.496.336-.66s.51599-.272.87598-.32401l.89398-.12601v-.174c0-.192-.05603-.342-.16803-.45-.10797-.108-.28601-.162-.534-.162-.17999 0-.32599.036-.43799.108-.10797.07201-.18402.164-.22803.276-.02399.06-.06598.09-.12598.09h-.27002c-.04401 0-.078-.01199-.10199-.036-.02002-.028-.03003-.06-.03003-.09599 0-.06.02197-.134.06598-.222.04797-.088.12-.174.216-.258s.21802-.15401.36603-.21001c.15198-.06.336-.09.552-.09.23999 0 .44202.032.60602.09599.164.06.29199.142.38397.246.09601.104.164.222.20398.354.04401.132.06598.26601.06598.40199v1.94398c0 .04001-.01398.07401-.04199.10199-.02399.02399-.05603.03601-.09601.03601h-.276c-.04401 0-.078-.01199-.10199-.03601-.02399-.02802-.03601-.06201-.03601-.10199v-.258c-.052.07199-.12201.14401-.21002.216-.08801.06799-.198.12601-.33002.17401-.13202.04401-.29401.06601-.48602.06601h.00024zm.12597-.45001c.164 0 .31403-.034.45001-.10199.13599-.07199.242-.18201.31799-.33.08002-.14799.12-.334.12-.558v-.168l-.69598.10201c-.284.03999-.49799.108-.64203.20399-.14398.092-.216.21001-.216.354 0 .112.03198.20599.09601.282.06799.07201.15198.12599.25201.162.104.03601.21002.05399.31799.05399zm3.50513.39001c-.224 0-.40601-.04199-.54602-.12601-.14001-.08801-.242-.20999-.30603-.366-.06403-.16-.09601-.34801-.09601-.564v-1.584h-.46802c-.03998 0-.07397-.01199-.10199-.036-.02399-.028-.03601-.062-.03601-.10201v-.20399c0-.03999.01202-.07201.03601-.09599.02802-.028.06201-.04201.10199-.04201h.46802v-1.002c0-.03999.01202-.07201.03601-.09599.02802-.028.06201-.04201.10199-.04201h.28198c.03998 0 .07202.01401.09601.04201.02802.024.04199.056.04199.09599v1.002h.74402c.03998 0 .07202.01401.09601.04201.02802.024.04199.056.04199.09599v.20399c0 .03999-.01398.07401-.04199.10201-.02399.024-.05603.036-.09601.036h-.74402v1.54201c0 .188.03198.336.09601.444s.17798.16199.34198.16199h.36603c.03998 0 .07202.01401.09601.04199.02802.02399.04199.056.04199.09601v.216c0 .04001-.01398.07401-.04199.10199-.02399.02399-.05603.03601-.09601.03601h-.414.00006zm2.81403 0c-.04401 0-.078-.01199-.10199-.03601-.02399-.02802-.03601-.06201-.03601-.10199v-3.924c0-.03999.01202-.07201.03601-.09599.02399-.028.05798-.04201.10199-.04201h.31799c.03998 0 .07202.01401.09601.04201.02802.024.04199.056.04199.09599v3.924c0 .04001-.01398.07401-.04199.10199-.02399.02399-.05603.03601-.09601.03601zm1.55999 0c-.03998 0-.07397-.01199-.10199-.03601-.02399-.02802-.03601-.06201-.03601-.10199v-2.838c0-.03999.01202-.07401.03601-.10201.02802-.028.06201-.04201.10199-.04201h.276c.03998 0 .07397.01401.10199.04201s.04199.062.04199.10201v.26401c.08002-.136.19-.23801.33002-.306s.30798-.10201.50403-.10201h.23999c.03998 0 .07202.01401.09601.04201.02399.024.03601.056.03601.09599v.246c0 .03999-.01202.07201-.03601.09599-.02399.024-.05603.036-.09601.036h-.35999c-.216 0-.38599.064-.51001.192-.12402.12399-.18597.29401-.18597.50999v1.76401c0 .04001-.01398.07401-.04199.10199-.02802.02399-.06201.03601-.10199.03601h-.29407zm3.36152.06c-.30402 0-.55798-.05801-.76202-.17401-.20398-.116-.35999-.276-.46802-.48-.10797-.20799-.16803-.444-.17999-.70799-.00403-.06799-.00598-.15401-.00598-.258 0-.108.00201-.194.00598-.258.01202-.26801.07202-.504.17999-.70799.112-.20399.27002-.364.474-.48s.45599-.174.75598-.174.552.058.75598.174.35999.276.46802.48c.112.20399.17401.44.18597.70799.00403.064.00598.14999.00598.258 0 .104-.00201.19-.00598.258-.01202.26401-.07202.5-.17999.70799-.10797.20399-.26398.364-.46802.48-.20398.116-.45801.17401-.76202.17401zm0-.46201c.24799 0 .44598-.078.59399-.23399.14801-.16.22803-.392.23999-.696.00403-.06.00598-.136.00598-.228s-.00201-.168-.00598-.228c-.01202-.304-.09198-.534-.23999-.69-.14801-.16-.34601-.24001-.59399-.24001s-.448.08-.59998.24001c-.14801.15601-.22601.386-.23401.69-.00403.06-.00598.136-.00598.228s.00201.168.00598.228c.008.304.086.536.23401.696.15198.15599.35199.23399.59998.23399zm2.30401.40201c-.03998 0-.07397-.01199-.10199-.03601-.02399-.02802-.03601-.06201-.03601-.10199v-2.84399c0-.03999.01202-.07201.03601-.09599.02802-.028.06201-.04201.10199-.04201h.28198c.03998 0 .07202.01401.09601.04201.02802.024.04199.056.04199.09599v.26401c.104-.136.23401-.246.39001-.33.15997-.088.36401-.132.612-.132.26001 0 .47998.058.65997.174.18402.112.32202.27.414.474.09198.2.138.43401.138.702v1.692c0 .04001-.01202.07401-.03601.10199-.02399.02399-.05603.03601-.09601.03601h-.29999c-.03998 0-.07397-.01199-.10199-.03601-.02399-.02802-.03601-.06201-.03601-.10199v-1.662c0-.28-.06799-.498-.20398-.65401-.13599-.16-.336-.24001-.59998-.24001-.24799 0-.448.08-.59998.24001-.14801.15601-.22198.37399-.22198.65401v1.662c0 .04001-.01398.07401-.04199.10199-.02399.02399-.05603.03601-.09601.03601h-.30005z" fill="#716f72"/><path d="m181.44342 115.97061-34.47948 34.57552v17.11596h70.80426v-14.9402z" fill="#f4e26e"><title>Soap Yard</title></path><path d="m168.20557 149.21191c-.34668 0-.6377-.05371-.87256-.16113-.23535-.10742-.41553-.24609-.54102-.41504-.12549-.16992-.19238-.34766-.2002-.53516 0-.03223.01318-.06055.03906-.08691.02588-.02539.05664-.03906.09229-.03906h.30518c.04785 0 .0835.0127.10742.03613s.04004.05176.04785.08398c.02393.0957.07373.19043.14941.2832.07568.09375.18408.17188.32568.2334s.32373.09277.54688.09277c.34277 0 .59473-.06055.75635-.18262.16113-.12109.2417-.2832.2417-.4873 0-.13867-.04248-.25195-.12842-.33691-.08545-.08594-.21631-.16309-.3916-.23047s-.40234-.1416-.68115-.2207c-.29102-.08398-.53174-.17578-.72314-.27539s-.33398-.22266-.42725-.37012c-.09375-.14746-.14062-.33496-.14062-.5625 0-.21484.05762-.40723.17334-.57617.11572-.16992.28271-.30371.50195-.40332s.48193-.14941.78906-.14941c.24707 0 .46338.03223.64844.09766.18555.06641.33984.1543.46338.26367s.2168.22656.28076.35254c.06348.125.09766.24805.10156.36719 0 .02832-.00977.05469-.02979.08105s-.05176.03906-.0957.03906h-.31689c-.02783 0-.05664-.00781-.08643-.02441-.02979-.01562-.05273-.0459-.06885-.08984-.02393-.16309-.11572-.30078-.2749-.41211-.15967-.11133-.3667-.16699-.62158-.16699-.25928 0-.46924.0498-.63037.14941-.16162.09961-.24219.25488-.24219.46582 0 .13574.0376.24805.11328.33789s.19531.16797.35889.23633c.16309.06738.37646.13965.63965.21484.31836.08789.57959.18066.78271.27832s.35352.21875.45117.36426.14648.33203.14648.55859c0 .25098-.06543.46582-.19727.64258-.13135.17773-.31592.31348-.55273.40625-.2373.09375-.51709.14062-.83984.14062z" fill="#25357a"/><path d="m171.77393 149.21191c-.30273 0-.55566-.05762-.75879-.17285-.20361-.11621-.35889-.27637-.46631-.48145-.10791-.20508-.16748-.43945-.1792-.70215-.00439-.06738-.00635-.1543-.00635-.25977s.00195-.19043.00635-.25391c.01172-.26758.07227-.50293.18213-.70605.10938-.20312.26611-.3623.46924-.47754.20312-.11621.4541-.17383.75293-.17383s.5498.05762.75293.17383c.20361.11523.35986.27441.46924.47754.10986.20312.17041.43848.18262.70605.00391.06348.00586.14844.00586.25391s-.00195.19238-.00586.25977c-.01221.2627-.07178.49707-.17969.70215-.10742.20508-.2627.36523-.46582.48145-.20312.11523-.45654.17285-.75928.17285zm0-.45996c.24707 0 .44434-.0791.5918-.23633s.22705-.3877.23926-.69043c.00391-.05957.00586-.13477.00586-.22656s-.00195-.16797-.00586-.22754c-.01221-.30273-.0918-.5332-.23926-.69043s-.34473-.23633-.5918-.23633-.44531.0791-.59473.23633-.22803.3877-.23584.69043c-.00439.05957-.00635.13574-.00635.22754s.00195.16699.00635.22656c.00781.30273.08643.5332.23584.69043s.34766.23633.59473.23633z" fill="#25357a"/><path d="m174.79834 149.21191c-.19922 0-.38086-.04004-.54395-.11914-.16357-.08008-.29492-.1875-.39453-.32324-.09961-.13477-.14941-.28809-.14941-.45996 0-.27539.11133-.49414.33447-.65723s.51416-.27148.87305-.32324l.89014-.125v-.17383c0-.19141-.05469-.34082-.16406-.44824-.10986-.10742-.28809-.16113-.53516-.16113-.17529 0-.31885.03613-.43018.10742-.11182.07227-.18945.16309-.23291.27539-.02393.05957-.06592.08887-.12598.08887h-.26855c-.04395 0-.07715-.0127-.09863-.03809-.02197-.02637-.0332-.05664-.0332-.09277 0-.05957.02295-.13379.06885-.22168.0459-.08691.1167-.17285.2124-.25684.0957-.08301.21777-.1543.36719-.21191s.33203-.08691.54736-.08691c.23877 0 .43994.03125.60352.09277.16309.06152.29199.14453.38525.24805.09375.10352.16162.2207.20361.35254.0415.13184.0625.26562.0625.40039v1.93652c0 .04004-.01318.07324-.03857.09863-.02637.02637-.05908.03906-.09863.03906h-.27539c-.04346 0-.07764-.0127-.10156-.03906-.02393-.02539-.03564-.05859-.03564-.09863v-.25684c-.05176.07129-.12158.14258-.20947.21191-.0874.07031-.19678.12793-.32861.17383-.13135.0459-.29297.06836-.48389.06836zm.12549-.44824c.16309 0 .3125-.03418.44824-.10449.13525-.06934.24219-.17773.31982-.3252s.11621-.33301.11621-.55664v-.16699l-.69287.10156c-.2832.04004-.49609.10645-.63965.2002s-.21533.21191-.21533.35547c0 .11133.03271.2041.09863.27832.06592.07324.14941.12793.25098.16406s.20605.05371.31396.05371z" fill="#25357a"/><path d="m177.37451 150.28809c-.04004 0-.07275-.0127-.09863-.03906-.02637-.02539-.03906-.05859-.03906-.09863v-3.96875c0-.04004.0127-.07227.03906-.09863.02588-.02539.05859-.03906.09863-.03906h.2749c.03955 0 .07227.01367.09863.03906.02588.02637.03857.05859.03857.09863v.2627c.0957-.13086.22314-.24023.38281-.32812.15918-.08789.3584-.13184.59766-.13184.22314 0 .41309.03809.5708.11328.15723.07617.28662.17969.38818.31152.10156.13086.17822.28027.23047.44824.05176.16699.08154.34668.08936.53809.00391.06348.00586.13086.00586.20312 0 .07129-.00195.13965-.00586.20312-.00781.1875-.0376.36523-.08936.53516-.05225.16895-.12891.31836-.23047.44824-.10156.12891-.23096.23242-.38818.31055-.15771.07715-.34766.11621-.5708.11621-.23145 0-.42529-.04297-.58301-.12793-.15723-.08594-.28564-.19238-.38525-.32031v1.38672c0 .04004-.01221.07324-.03613.09863-.02393.02637-.05566.03906-.0957.03906zm1.26709-1.56055c.20703 0 .36914-.04395.48682-.13379s.20215-.20703.25439-.35254c.05127-.14551.08154-.30176.08936-.46973.00391-.11523.00391-.23047 0-.34668-.00781-.16699-.03809-.32324-.08936-.46875-.05225-.14551-.13672-.26367-.25439-.35254-.11768-.08984-.27979-.13477-.48682-.13477-.19531 0-.354.0459-.4751.1377-.12207.0918-.21143.20801-.26904.34961-.05811.1416-.09082.28613-.09863.43262-.00439.06445-.00635.13965-.00635.22754s.00195.16504.00635.2334c.00391.13965.03662.27637.09863.41211.06152.13574.1543.24707.27783.33496s.27881.13086.46631.13086z" fill="#25357a"/><path d="m183.41699 149.15234c-.04004 0-.07275-.0127-.09863-.03906-.02637-.02539-.03906-.05859-.03906-.09863v-1.41016l-1.44043-2.43848c-.00391-.0127-.0083-.02441-.01221-.03613s-.00586-.02637-.00586-.04199c0-.03125.01221-.05957.03613-.08398.02393-.02344.05176-.03516.0835-.03516h.31104c.03564 0 .06738.00879.09521.02637.02783.01855.04785.04297.06006.0752l1.16553 1.93652 1.16553-1.93652c.01953-.03223.04248-.05664.06885-.0752.02588-.01758.05664-.02637.09229-.02637h.30518c.03564 0 .06543.01172.08936.03516.02393.02441.03613.05273.03613.08398 0 .01562-.00244.03027-.00635.04199s-.00977.02344-.01758.03613l-1.43457 2.43848v1.41016c0 .04004-.01318.07324-.03906.09863-.02588.02637-.06055.03906-.10449.03906h-.31055z" fill="#25357a"/><path d="m186.23193 149.21191c-.19922 0-.38086-.04004-.54395-.11914-.16357-.08008-.29492-.1875-.39453-.32324-.09961-.13477-.14941-.28809-.14941-.45996 0-.27539.11133-.49414.33447-.65723s.51416-.27148.87305-.32324l.89014-.125v-.17383c0-.19141-.05469-.34082-.16406-.44824-.10986-.10742-.28809-.16113-.53516-.16113-.17529 0-.31885.03613-.43018.10742-.11182.07227-.18945.16309-.23291.27539-.02393.05957-.06592.08887-.12598.08887h-.26855c-.04395 0-.07715-.0127-.09863-.03809-.02197-.02637-.0332-.05664-.0332-.09277 0-.05957.02295-.13379.06885-.22168.0459-.08691.1167-.17285.2124-.25684.0957-.08301.21777-.1543.36719-.21191s.33203-.08691.54736-.08691c.23877 0 .43994.03125.60352.09277.16309.06152.29199.14453.38525.24805.09375.10352.16162.2207.20361.35254.0415.13184.0625.26562.0625.40039v1.93652c0 .04004-.01318.07324-.03857.09863-.02637.02637-.05908.03906-.09863.03906h-.27539c-.04346 0-.07764-.0127-.10156-.03906-.02393-.02539-.03564-.05859-.03564-.09863v-.25684c-.05176.07129-.12158.14258-.20947.21191-.0874.07031-.19678.12793-.32861.17383-.13135.0459-.29297.06836-.48389.06836zm.12549-.44824c.16309 0 .3125-.03418.44824-.10449.13525-.06934.24219-.17773.31982-.3252s.11621-.33301.11621-.55664v-.16699l-.69287.10156c-.2832.04004-.49609.10645-.63965.2002s-.21533.21191-.21533.35547c0 .11133.03271.2041.09863.27832.06592.07324.14941.12793.25098.16406s.20605.05371.31396.05371z" fill="#25357a"/><path d="m188.80176 149.15234c-.03955 0-.07275-.0127-.09863-.03906-.02588-.02539-.03857-.05859-.03857-.09863v-2.82715c0-.03906.0127-.07324.03857-.10156.02588-.02734.05908-.04199.09863-.04199h.2749c.04004 0 .07373.01465.10205.04199.02783.02832.0415.0625.0415.10156v.26367c.07959-.13574.18945-.2373.32861-.30566.13965-.06738.30908-.10156.5083-.10156h.23291c.04004 0 .07275.01367.09863.03906.02588.02637.03906.05859.03906.09863v.24512c0 .04004-.01318.07227-.03906.0957s-.05859.03613-.09863.03613h-.3584c-.21533 0-.38477.0625-.5083.18848-.12354.125-.18506.29492-.18506.51074v1.75684c0 .04004-.01416.07324-.04199.09863-.02783.02637-.06152.03906-.10156.03906h-.29297z" fill="#25357a"/><path d="m192.00586 149.21191c-.21924 0-.40869-.03906-.56787-.11621-.15967-.07812-.29004-.18359-.3916-.31738-.10156-.13281-.17725-.28516-.22705-.45703-.0498-.1709-.07861-.35254-.08691-.54395-.00391-.06348-.00586-.12305-.00586-.17871s.00195-.11621.00586-.17969c.0083-.1875.03711-.36621.08691-.53809.0498-.1709.12549-.32422.22705-.45996s.23193-.24219.3916-.31934c.15918-.07812.34863-.11719.56787-.11719.23486 0 .43018.04199.58545.12598.15527.08301.2832.1875.38281.31055v-1.375c0-.03906.0127-.07227.03857-.09863.02588-.02539.05859-.03809.09863-.03809h.28711c.03955 0 .07227.0127.09863.03809.02588.02637.03857.05957.03857.09863v3.96875c0 .04004-.0127.07324-.03857.09863-.02637.02637-.05908.03906-.09863.03906h-.26904c-.04395 0-.07764-.0127-.10156-.03906-.02393-.02539-.03613-.05859-.03613-.09863v-.25098c-.09961.12793-.229.23438-.38818.32031-.15967.08496-.35889.12793-.59766.12793zm.12549-.48437c.19922 0 .3584-.04492.47803-.13672s.20898-.20801.26904-.34961c.05957-.1416.09131-.28613.0957-.43359.00391-.06348.00586-.14062.00586-.23047s-.00195-.16602-.00586-.22949c-.00439-.13965-.03711-.27734-.09863-.41309-.06201-.13477-.15381-.24707-.2749-.33398-.12158-.08789-.27832-.13184-.46924-.13184-.20361 0-.36475.04492-.48438.13477-.11963.08887-.20508.20703-.25684.35254s-.08203.30176-.08984.46875c-.00391.11621-.00391.23145 0 .34668.00781.16797.03809.32422.08984.46973s.13721.2627.25684.35254.28076.13379.48438.13379z" fill="#25357a"/><path d="m262.14453 159.64844c-.04346 0-.07764-.0127-.10156-.03906-.02393-.02539-.03564-.05859-.03564-.09863v-3.90234c0-.04395.01172-.0791.03564-.10547.02393-.02539.05811-.03809.10156-.03809h1.35693c.41064 0 .74121.06152.99219.18457.25098.12402.43457.30664.5498.54688.11572.24121.17529.53711.17969.8877.00391.17969.00586.33691.00586.47266s-.00195.29102-.00586.46582c-.0083.36719-.06885.6709-.18262.91211-.11328.24121-.29297.41992-.5376.53711-.24512.11816-.56885.17676-.97168.17676h-1.38672zm.44873-.50782h.9082c.2749 0 .49414-.03809.65771-.11426.16309-.0752.28174-.19629.35547-.36426.07373-.16699.1123-.38867.1167-.66309.00781-.12012.01172-.22461.01172-.31445v-.26855c0-.08984-.00391-.19238-.01172-.30762-.0083-.38672-.09961-.67285-.2749-.85742-.17578-.18555-.47021-.27832-.88477-.27832h-.87842v3.16797z" fill="#25357a"/><path d="m266.13721 155.96094c-.03955 0-.07275-.0127-.09863-.03906s-.03857-.05859-.03857-.09863v-.32324c0-.03906.0127-.07324.03857-.10156.02588-.02734.05908-.04102.09863-.04102h.37695c.03955 0 .07373.01367.10156.04102.02783.02832.0415.0625.0415.10156v.32324c0 .04004-.01367.07227-.0415.09863s-.06201.03906-.10156.03906zm.04785 3.6875c-.03955 0-.07275-.0127-.09863-.03906-.02588-.02539-.03857-.05859-.03857-.09863v-2.83301c0-.04004.0127-.07227.03857-.09863.02588-.02539.05908-.03906.09863-.03906h.28711c.03955 0 .07275.01367.09863.03906.02588.02637.03857.05859.03857.09863v2.83301c0 .04004-.0127.07324-.03857.09863-.02588.02637-.05908.03906-.09863.03906z" fill="#25357a"/><path d="m267.63135 159.64844c-.03955 0-.07275-.0127-.09863-.03906-.02588-.02539-.03857-.05859-.03857-.09863v-2.82715c0-.03906.0127-.07324.03857-.10156.02588-.02734.05908-.04199.09863-.04199h.2749c.04004 0 .07373.01465.10205.04199.02783.02832.0415.0625.0415.10156v.26367c.07959-.13574.18945-.2373.32861-.30566.13965-.06738.30908-.10156.5083-.10156h.23291c.04004 0 .07275.01367.09863.03906.02588.02637.03906.05859.03906.09863v.24512c0 .04004-.01318.07227-.03906.0957s-.05859.03613-.09863.03613h-.3584c-.21533 0-.38477.0625-.5083.18848-.12354.125-.18506.29492-.18506.51074v1.75684c0 .04004-.01416.07324-.04199.09863-.02783.02637-.06152.03906-.10156.03906h-.29297z" fill="#25357a"/><path d="m270.97852 159.64844c-.22314 0-.40479-.04297-.54395-.12891-.13965-.08496-.24121-.20703-.30469-.36426-.06396-.15723-.0957-.34375-.0957-.55859v-1.57812h-.46631c-.04004 0-.07275-.0127-.09863-.03906-.02588-.02539-.03906-.05859-.03906-.09863v-.20312c0-.04004.01318-.07227.03906-.09863.02588-.02539.05859-.03906.09863-.03906h.46631v-.99805c0-.03906.0127-.07227.03857-.09863.02588-.02539.05908-.03809.09863-.03809h.28125c.03955 0 .07227.0127.09814.03809.02588.02637.03906.05957.03906.09863v.99805h.74121c.04395 0 .07764.01367.10156.03906.02393.02637.03564.05859.03564.09863v.20312c0 .04004-.01172.07324-.03564.09863-.02393.02637-.05762.03906-.10156.03906h-.74121v1.53613c0 .1875.03174.33496.0957.44238.06348.10742.17725.16113.34082.16113h.36426c.04004 0 .07275.0127.09863.03906.02588.02539.03906.05859.03906.09863v.21484c0 .04004-.01318.07324-.03906.09863-.02588.02637-.05859.03906-.09863.03906h-.41211z" fill="#25357a"/><path d="m272.646 160.78418c-.03223 0-.06006-.01172-.08398-.03613-.02393-.02344-.03564-.05176-.03564-.08398 0-.01562.00195-.03125.00586-.04688.00391-.0166.01221-.03613.02393-.06055l.46045-1.09375-1.1416-2.69531c-.02002-.04785-.03027-.08203-.03027-.10156 0-.03613.01221-.06543.03613-.08984.02393-.02344.05371-.03613.08984-.03613h.29248c.04395 0 .07666.01074.09863.03027s.03711.04395.04492.07129l.90869 2.17578.93213-2.17578c.01221-.02734.02881-.05176.05078-.07129s.05469-.03027.09863-.03027h.28125c.03564 0 .06543.0127.08936.03613.02393.02441.03613.05176.03613.08398 0 .01953-.01025.05566-.03027.10742l-1.69727 3.91504c-.01172.02734-.02881.05176-.05078.07129-.02197.02051-.05469.03027-.09863.03027h-.28076z" fill="#25357a"/><path d="m276.92529 159.64844c-.04346 0-.07764-.0127-.10156-.03906-.02393-.02539-.03564-.05859-.03564-.09863v-3.90918c0-.03906.01172-.07227.03564-.09863.02393-.02539.05811-.03809.10156-.03809h.31689c.04004 0 .07275.0127.09863.03809.02588.02637.03906.05957.03906.09863v3.52734h1.98438c.04346 0 .07861.0127.10449.03809.02588.02637.03906.06152.03906.10449v.23926c0 .04004-.01318.07324-.03906.09863-.02588.02637-.06104.03906-.10449.03906z" fill="#25357a"/><path d="m280.94238 159.70801c-.19922 0-.38086-.04004-.54395-.11914-.16357-.08008-.29492-.1875-.39453-.32324-.09961-.13477-.14941-.28809-.14941-.45996 0-.27539.11133-.49414.33447-.65723s.51416-.27148.87305-.32324l.89014-.125v-.17383c0-.19141-.05469-.34082-.16406-.44824-.10986-.10742-.28809-.16113-.53516-.16113-.17529 0-.31885.03613-.43018.10742-.11182.07227-.18945.16309-.23291.27539-.02393.05957-.06592.08887-.12598.08887h-.26855c-.04395 0-.07715-.0127-.09863-.03809-.02197-.02637-.0332-.05664-.0332-.09277 0-.05957.02295-.13379.06885-.22168.0459-.08691.1167-.17285.2124-.25684.0957-.08301.21777-.1543.36719-.21191s.33203-.08691.54736-.08691c.23877 0 .43994.03125.60352.09277.16309.06152.29199.14453.38525.24805.09375.10352.16162.2207.20361.35254.0415.13184.0625.26562.0625.40039v1.93652c0 .04004-.01318.07324-.03857.09863-.02637.02637-.05908.03906-.09863.03906h-.27539c-.04346 0-.07764-.0127-.10156-.03906-.02393-.02539-.03564-.05859-.03564-.09863v-.25684c-.05176.07129-.12158.14258-.20947.21191-.0874.07031-.19678.12793-.32861.17383-.13135.0459-.29297.06836-.48389.06836zm.12549-.44824c.16309 0 .3125-.03418.44824-.10449.13525-.06934.24219-.17773.31982-.3252s.11621-.33301.11621-.55664v-.16699l-.69287.10156c-.2832.04004-.49609.10645-.63965.2002s-.21533.21191-.21533.35547c0 .11133.03271.2041.09863.27832.06592.07324.14941.12793.25098.16406s.20605.05371.31396.05371z" fill="#25357a"/><path d="m283.51172 159.64844c-.03955 0-.07275-.0127-.09863-.03906-.02588-.02539-.03857-.05859-.03857-.09863v-2.83301c0-.04004.0127-.07227.03857-.09863.02588-.02539.05908-.03906.09863-.03906h.28125c.03955 0 .07227.01367.09863.03906.02588.02637.03857.05859.03857.09863v.2627c.10352-.13477.23438-.24512.3916-.33105s.35938-.12891.60645-.12891c.25928 0 .47949.05664.66064.1709.18115.11328.31885.27051.4126.47168.09326.20117.14014.43555.14014.70215v1.68555c0 .04004-.0127.07324-.03857.09863-.02588.02637-.05908.03906-.09863.03906h-.29883c-.04004 0-.07275-.0127-.09863-.03906-.02588-.02539-.03906-.05859-.03906-.09863v-1.65527c0-.2793-.06787-.49707-.20312-.6543-.13574-.15723-.33447-.23633-.59766-.23633-.24707 0-.44531.0791-.59473.23633s-.22412.375-.22412.6543v1.65527c0 .04004-.01318.07324-.03906.09863-.02588.02637-.05859.03906-.09863.03906h-.29883z" fill="#25357a"/><path d="m288.23975 159.70801c-.41455 0-.74316-.12598-.98633-.37891-.24316-.25391-.37646-.59863-.40039-1.03711-.00391-.05176-.00586-.11914-.00586-.2002 0-.08203.00195-.14844.00586-.2002.01611-.2832.08154-.53125.19727-.74414.11572-.21387.27393-.37793.4751-.49316.20117-.11621.4375-.17383.7085-.17383.30273 0 .55664.06348.76172.19141.20557.12793.36182.30859.46924.54395.10791.23535.16162.50977.16162.8252v.10156c0 .04395-.01318.07715-.03906.10156-.02588.02344-.05859.03516-.09863.03516h-2.06787v.05469c.00781.16309.04395.31543.10742.45703.06396.1416.15625.25586.27783.34375.12158.08691.26416.13086.42773.13086.14307 0 .2627-.02148.3584-.06543s.17334-.09277.2334-.14648c.05957-.05371.09912-.09668.11914-.12891.03613-.04785.06396-.07617.08398-.08594.01953-.00977.05176-.01562.0957-.01562h.29248c.03613 0 .06689.01172.09277.0332.02588.02246.03662.05273.03271.09277-.00391.05957-.03564.13281-.09521.21777-.06006.08594-.14453.1709-.25439.25391-.10938.08398-.24512.15234-.40625.20703-.16162.05371-.34375.08008-.54688.08008zm-.81885-1.84082h1.6377v-.01758c0-.17969-.03271-.33887-.09863-.47852s-.16064-.25-.28418-.33203c-.12354-.08105-.271-.12207-.44189-.12207-.17139 0-.31787.04102-.43945.12207-.12158.08203-.21436.19238-.27783.33203-.06396.13965-.0957.29883-.0957.47852v.01758z" fill="#25357a"/><path d="m207.32764 36.68896c-.04346 0-.07764-.0127-.10156-.03906-.02393-.02539-.03564-.05859-.03564-.09863v-3.90234c0-.04395.01172-.0791.03564-.10547.02393-.02539.05811-.03809.10156-.03809h1.51855c.29443 0 .55078.04785.76807.14355.2168.0957.38525.2373.50488.42676s.1792.42578.1792.70801c0 .2832-.05957.51855-.1792.70605s-.28809.32812-.50488.42383c-.21729.0957-.47363.14355-.76807.14355h-1.05811v1.49414c0 .04004-.01318.07324-.03906.09863-.02588.02637-.06055.03906-.10449.03906h-.31689zm.45459-2.13378h1.03369c.29492 0 .51611-.06543.66357-.19727s.22119-.32227.22119-.57422c0-.24609-.07178-.4375-.21533-.57324-.14307-.13574-.36621-.20312-.66943-.20312h-1.03369z" fill="#25357a"/><path d="m211.75684 36.74854c-.19922 0-.38086-.04004-.54395-.11914-.16357-.08008-.29492-.1875-.39453-.32324-.09961-.13477-.14941-.28809-.14941-.45996 0-.27539.11133-.49414.33447-.65723s.51416-.27148.87305-.32324l.89014-.125v-.17383c0-.19141-.05469-.34082-.16406-.44824-.10986-.10742-.28809-.16113-.53516-.16113-.17529 0-.31885.03613-.43018.10742-.11182.07227-.18945.16309-.23291.27539-.02393.05957-.06592.08887-.12598.08887h-.26855c-.04395 0-.07715-.0127-.09863-.03809-.02197-.02637-.0332-.05664-.0332-.09277 0-.05957.02295-.13379.06885-.22168.0459-.08691.1167-.17285.2124-.25684.0957-.08301.21777-.1543.36719-.21191s.33203-.08691.54736-.08691c.23877 0 .43994.03125.60352.09277.16309.06152.29199.14453.38525.24805.09375.10352.16162.2207.20361.35254.0415.13184.0625.26562.0625.40039v1.93652c0 .04004-.01318.07324-.03857.09863-.02637.02637-.05908.03906-.09863.03906h-.27539c-.04346 0-.07764-.0127-.10156-.03906-.02393-.02539-.03564-.05859-.03564-.09863v-.25684c-.05176.07129-.12158.14258-.20947.21191-.0874.07031-.19678.12793-.32861.17383-.13135.0459-.29297.06836-.48389.06836zm.12548-.44825c.16309 0 .3125-.03418.44824-.10449.13525-.06934.24219-.17773.31982-.3252s.11621-.33301.11621-.55664v-.16699l-.69287.10156c-.2832.04004-.49609.10645-.63965.2002s-.21533.21191-.21533.35547c0 .11133.03271.2041.09863.27832.06592.07324.14941.12793.25098.16406s.20605.05371.31396.05371z" fill="#25357a"/><path d="m214.32666 36.68896c-.03955 0-.07275-.0127-.09863-.03906-.02588-.02539-.03857-.05859-.03857-.09863v-2.82715c0-.03906.0127-.07324.03857-.10156.02588-.02734.05908-.04199.09863-.04199h.2749c.04004 0 .07373.01465.10205.04199.02783.02832.0415.0625.0415.10156v.26367c.07959-.13574.18945-.2373.32861-.30566.13965-.06738.30908-.10156.5083-.10156h.23291c.04004 0 .07275.01367.09863.03906.02588.02637.03906.05859.03906.09863v.24512c0 .04004-.01318.07227-.03906.0957s-.05859.03613-.09863.03613h-.3584c-.21533 0-.38477.0625-.5083.18848-.12354.125-.18506.29492-.18506.51074v1.75684c0 .04004-.01416.07324-.04199.09863-.02783.02637-.06152.03906-.10156.03906h-.29297z" fill="#25357a"/><path d="m216.604 36.68896c-.04004 0-.07275-.0127-.09863-.03906-.02637-.02539-.03906-.05859-.03906-.09863v-3.96875c0-.03906.0127-.07227.03906-.09863.02588-.02539.05859-.03809.09863-.03809h.28076c.03955 0 .07275.0127.09863.03809.02588.02637.03857.05957.03857.09863v2.08008l1.17773-.98047c.04785-.03906.08447-.06641.11035-.08008s.06885-.02148.12891-.02148h.31641c.03613 0 .06592.0127.08984.03613.02393.02441.03564.05371.03564.08984 0 .01562-.00488.03418-.01465.05371-.01025.01953-.0293.04004-.05713.05957l-1.38037 1.14746 1.52979 1.48828c.04785.04004.07178.07617.07178.10742 0 .03613-.01172.06641-.03564.08984-.02393.02441-.05371.03613-.08984.03613h-.31055c-.06006 0-.104-.00684-.13135-.02051-.02832-.01465-.06396-.04102-.10791-.08105l-1.33301-1.27344v1.2373c0 .04004-.0127.07324-.03857.09863-.02588.02637-.05908.03906-.09863.03906h-.28076z" fill="#25357a"/><path d="m222.37158 36.74854c-.34668 0-.6377-.05371-.87256-.16113-.23535-.10742-.41553-.24609-.54102-.41504-.12549-.16992-.19238-.34766-.2002-.53516 0-.03223.01318-.06055.03906-.08691.02588-.02539.05664-.03906.09229-.03906h.30518c.04785 0 .0835.0127.10742.03613s.04004.05176.04785.08398c.02393.0957.07373.19043.14941.2832.07568.09375.18408.17188.32568.2334s.32373.09277.54688.09277c.34277 0 .59473-.06055.75635-.18262.16113-.12109.2417-.2832.2417-.4873 0-.13867-.04248-.25195-.12842-.33691-.08545-.08594-.21631-.16309-.3916-.23047s-.40234-.1416-.68115-.2207c-.29102-.08398-.53174-.17578-.72314-.27539s-.33398-.22266-.42725-.37012c-.09375-.14746-.14062-.33496-.14062-.5625 0-.21484.05762-.40723.17334-.57617.11572-.16992.28271-.30371.50195-.40332s.48193-.14941.78906-.14941c.24707 0 .46338.03223.64844.09766.18555.06641.33984.1543.46338.26367s.2168.22656.28076.35254c.06348.125.09766.24805.10156.36719 0 .02832-.00977.05469-.02979.08105s-.05176.03906-.0957.03906h-.31689c-.02783 0-.05664-.00781-.08643-.02441-.02979-.01562-.05273-.0459-.06885-.08984-.02393-.16309-.11572-.30078-.2749-.41211-.15967-.11133-.3667-.16699-.62158-.16699-.25928 0-.46924.0498-.63037.14941-.16162.09961-.24219.25488-.24219.46582 0 .13574.0376.24805.11328.33789s.19531.16797.35889.23633c.16309.06738.37646.13965.63965.21484.31836.08789.57959.18066.78271.27832s.35352.21875.45117.36426.14648.33203.14648.55859c0 .25098-.06543.46582-.19727.64258-.13135.17773-.31592.31348-.55273.40625-.2373.09375-.51709.14062-.83984.14062z" fill="#25357a"/><path d="m225.88037 36.68896c-.22314 0-.40479-.04297-.54395-.12891-.13965-.08496-.24121-.20703-.30469-.36426-.06396-.15723-.0957-.34375-.0957-.55859v-1.57812h-.46631c-.04004 0-.07275-.0127-.09863-.03906-.02588-.02539-.03906-.05859-.03906-.09863v-.20312c0-.04004.01318-.07227.03906-.09863.02588-.02539.05859-.03906.09863-.03906h.46631v-.99805c0-.03906.0127-.07227.03857-.09863.02588-.02539.05908-.03809.09863-.03809h.28125c.03955 0 .07227.0127.09814.03809.02588.02637.03906.05957.03906.09863v.99805h.74121c.04395 0 .07764.01367.10156.03906.02393.02637.03564.05859.03564.09863v.20312c0 .04004-.01172.07324-.03564.09863-.02393.02637-.05762.03906-.10156.03906h-.74121v1.53613c0 .1875.03174.33496.0957.44238.06348.10742.17725.16113.34082.16113h.36426c.04004 0 .07275.0127.09863.03906.02588.02539.03906.05859.03906.09863v.21484c0 .04004-.01318.07324-.03906.09863-.02588.02637-.05859.03906-.09863.03906h-.41211z" fill="#25357a"/><path d="m227.14111 36.68896c-.03955 0-.07275-.0127-.09863-.03906-.02588-.02539-.03857-.05859-.03857-.09863v-2.82715c0-.03906.0127-.07324.03857-.10156.02588-.02734.05908-.04199.09863-.04199h.2749c.04004 0 .07373.01465.10205.04199.02783.02832.0415.0625.0415.10156v.26367c.07959-.13574.18945-.2373.32861-.30566.13965-.06738.30908-.10156.5083-.10156h.23291c.04004 0 .07275.01367.09863.03906.02588.02637.03906.05859.03906.09863v.24512c0 .04004-.01318.07227-.03906.0957s-.05859.03613-.09863.03613h-.3584c-.21533 0-.38477.0625-.5083.18848-.12354.125-.18506.29492-.18506.51074v1.75684c0 .04004-.01416.07324-.04199.09863-.02783.02637-.06152.03906-.10156.03906h-.29297z" fill="#25357a"/><path d="m230.4585 36.74854c-.41455 0-.74316-.12598-.98633-.37891-.24316-.25391-.37646-.59863-.40039-1.03711-.00391-.05176-.00586-.11914-.00586-.2002 0-.08203.00195-.14844.00586-.2002.01611-.2832.08154-.53125.19727-.74414.11572-.21387.27393-.37793.4751-.49316.20117-.11621.4375-.17383.7085-.17383.30273 0 .55664.06348.76172.19141.20557.12793.36182.30859.46924.54395.10791.23535.16162.50977.16162.8252v.10156c0 .04395-.01318.07715-.03906.10156-.02588.02344-.05859.03516-.09863.03516h-2.06787v.05469c.00781.16309.04395.31543.10742.45703.06396.1416.15625.25586.27783.34375.12158.08691.26416.13086.42773.13086.14307 0 .2627-.02148.3584-.06543s.17334-.09277.2334-.14648c.05957-.05371.09912-.09668.11914-.12891.03613-.04785.06396-.07617.08398-.08594.01953-.00977.05176-.01562.0957-.01562h.29248c.03613 0 .06689.01172.09277.0332.02588.02246.03662.05273.03271.09277-.00391.05957-.03564.13281-.09521.21777-.06006.08594-.14453.1709-.25439.25391-.10938.08398-.24512.15234-.40625.20703-.16162.05371-.34375.08008-.54688.08008zm-.81885-1.84083h1.6377v-.01758c0-.17969-.03271-.33887-.09863-.47852s-.16064-.25-.28418-.33203c-.12354-.08105-.271-.12207-.44189-.12207-.17139 0-.31787.04102-.43945.12207-.12158.08203-.21436.19238-.27783.33203-.06396.13965-.0957.29883-.0957.47852v.01758z" fill="#25357a"/><path d="m233.80566 36.74854c-.41455 0-.74316-.12598-.98633-.37891-.24316-.25391-.37646-.59863-.40039-1.03711-.00391-.05176-.00586-.11914-.00586-.2002 0-.08203.00195-.14844.00586-.2002.01611-.2832.08154-.53125.19727-.74414.11572-.21387.27393-.37793.4751-.49316.20117-.11621.4375-.17383.7085-.17383.30273 0 .55664.06348.76172.19141.20557.12793.36182.30859.46924.54395.10791.23535.16162.50977.16162.8252v.10156c0 .04395-.01318.07715-.03906.10156-.02588.02344-.05859.03516-.09863.03516h-2.06787v.05469c.00781.16309.04395.31543.10742.45703.06396.1416.15625.25586.27783.34375.12158.08691.26416.13086.42773.13086.14307 0 .2627-.02148.3584-.06543s.17334-.09277.2334-.14648c.05957-.05371.09912-.09668.11914-.12891.03613-.04785.06396-.07617.08398-.08594.01953-.00977.05176-.01562.0957-.01562h.29248c.03613 0 .06689.01172.09277.0332.02588.02246.03662.05273.03271.09277-.00391.05957-.03564.13281-.09521.21777-.06006.08594-.14453.1709-.25439.25391-.10938.08398-.24512.15234-.40625.20703-.16162.05371-.34375.08008-.54688.08008zm-.81884-1.84083h1.6377v-.01758c0-.17969-.03271-.33887-.09863-.47852s-.16064-.25-.28418-.33203c-.12354-.08105-.271-.12207-.44189-.12207-.17139 0-.31787.04102-.43945.12207-.12158.08203-.21436.19238-.27783.33203-.06396.13965-.0957.29883-.0957.47852v.01758z" fill="#25357a"/><path d="m237.10498 36.68896c-.22314 0-.40479-.04297-.54395-.12891-.13965-.08496-.24121-.20703-.30469-.36426-.06396-.15723-.0957-.34375-.0957-.55859v-1.57812h-.46631c-.04004 0-.07275-.0127-.09863-.03906-.02588-.02539-.03906-.05859-.03906-.09863v-.20312c0-.04004.01318-.07227.03906-.09863.02588-.02539.05859-.03906.09863-.03906h.46631v-.99805c0-.03906.0127-.07227.03857-.09863.02588-.02539.05908-.03809.09863-.03809h.28125c.03955 0 .07227.0127.09814.03809.02588.02637.03906.05957.03906.09863v.99805h.74121c.04395 0 .07764.01367.10156.03906.02393.02637.03564.05859.03564.09863v.20312c0 .04004-.01172.07324-.03564.09863-.02393.02637-.05762.03906-.10156.03906h-.74121v1.53613c0 .1875.03174.33496.0957.44238.06348.10742.17725.16113.34082.16113h.36426c.04004 0 .07275.0127.09863.03906.02588.02539.03906.05859.03906.09863v.21484c0 .04004-.01318.07324-.03906.09863-.02588.02637-.05859.03906-.09863.03906h-.41211z" fill="#25357a"/><path d="m429.79102 36.68896c-.04297 0-.07715-.0127-.10156-.03906-.02344-.02539-.03516-.05859-.03516-.09863v-3.90234c0-.04395.01172-.0791.03516-.10547.02441-.02539.05859-.03809.10156-.03809h1.51953c.29395 0 .55078.04785.76758.14355s.38477.2373.50488.42676.17871.42578.17871.70801c0 .2832-.05859.51855-.17871.70605s-.28809.32812-.50488.42383-.47363.14355-.76758.14355h-1.05859v1.49414c0 .04004-.01367.07324-.03906.09863-.02539.02637-.06055.03906-.10449.03906h-.31738zm.45507-2.13378h1.0332c.29492 0 .5166-.06543.66406-.19727s.2207-.32227.2207-.57422c0-.24609-.07129-.4375-.21484-.57324-.14258-.13574-.36621-.20312-.66992-.20312h-1.0332z" fill="#25357a"/><path d="m434.2207 36.74854c-.19922 0-.38086-.04004-.54395-.11914-.16309-.08008-.29492-.1875-.39453-.32324-.09961-.13477-.14941-.28809-.14941-.45996 0-.27539.11133-.49414.33398-.65723.22363-.16309.51465-.27148.87305-.32324l.89062-.125v-.17383c0-.19141-.05469-.34082-.16406-.44824s-.28809-.16113-.53516-.16113c-.17578 0-.31836.03613-.42969.10742-.1123.07227-.18945.16309-.2334.27539-.02441.05957-.06543.08887-.12598.08887h-.26855c-.04395 0-.07715-.0127-.09863-.03809-.02148-.02637-.0332-.05664-.0332-.09277 0-.05957.02344-.13379.06836-.22168.04688-.08691.11719-.17285.21289-.25684.0957-.08301.21777-.1543.36719-.21191s.33203-.08691.54688-.08691c.23926 0 .44043.03125.60352.09277.16406.06152.29297.14453.38574.24805.09375.10352.16113.2207.2041.35254.04102.13184.0625.26562.0625.40039v1.93652c0 .04004-.01367.07324-.03906.09863-.02637.02637-.05859.03906-.09863.03906h-.27539c-.04395 0-.07715-.0127-.10156-.03906-.02441-.02539-.03613-.05859-.03613-.09863v-.25684c-.05078.07129-.12109.14258-.20898.21191-.08789.07031-.19727.12793-.32812.17383-.13184.0459-.29297.06836-.48438.06836zm.125-.44825c.16406 0 .3125-.03418.44922-.10449.13477-.06934.24219-.17773.31934-.3252s.11621-.33301.11621-.55664v-.16699l-.69336.10156c-.2832.04004-.49609.10645-.63867.2002-.14453.09375-.21582.21191-.21582.35547 0 .11133.03223.2041.09863.27832.06641.07324.14941.12793.25098.16406s.20605.05371.31348.05371z" fill="#25357a"/><path d="m436.79102 36.68896c-.04004 0-.07324-.0127-.09961-.03906-.02539-.02539-.03809-.05859-.03809-.09863v-2.82715c0-.03906.0127-.07324.03809-.10156.02637-.02734.05957-.04199.09961-.04199h.27441c.04004 0 .07324.01465.10254.04199.02734.02832.04102.0625.04102.10156v.26367c.08008-.13574.18945-.2373.32812-.30566.14062-.06738.30957-.10156.50879-.10156h.2334c.03906 0 .07227.01367.09766.03906.02637.02637.03906.05859.03906.09863v.24512c0 .04004-.0127.07227-.03906.0957-.02539.02344-.05859.03613-.09766.03613h-.35938c-.21484 0-.38477.0625-.50781.18848-.12305.125-.18555.29492-.18555.51074v1.75684c0 .04004-.01367.07324-.04102.09863-.02832.02637-.0625.03906-.10156.03906h-.29297z" fill="#25357a"/><path d="m439.06836 36.68896c-.04102 0-.07324-.0127-.09961-.03906-.02539-.02539-.03906-.05859-.03906-.09863v-3.96875c0-.03906.01367-.07227.03906-.09863.02637-.02539.05859-.03809.09961-.03809h.28027c.04004 0 .07324.0127.09863.03809.02539.02637.03906.05957.03906.09863v2.08008l1.17773-.98047c.04688-.03906.08398-.06641.10938-.08008.02637-.01367.06934-.02148.12891-.02148h.31641c.03711 0 .06641.0127.08984.03613.02441.02441.03613.05371.03613.08984 0 .01562-.00488.03418-.01465.05371s-.0293.04004-.05664.05957l-1.38086 1.14746 1.5293 1.48828c.04883.04004.07227.07617.07227.10742 0 .03613-.01172.06641-.03516.08984-.02441.02441-.05469.03613-.08984.03613h-.31055c-.06055 0-.10449-.00684-.13184-.02051-.02832-.01465-.06348-.04102-.1084-.08105l-1.33203-1.27344v1.2373c0 .04004-.01367.07324-.03906.09863-.02539.02637-.05859.03906-.09863.03906h-.28027z" fill="#25357a"/><path d="m444.83594 36.74854c-.34766 0-.63867-.05371-.87305-.16113-.23535-.10742-.41602-.24609-.54102-.41504-.125-.16992-.19238-.34766-.2002-.53516 0-.03223.0127-.06055.03906-.08691.02637-.02539.05664-.03906.09277-.03906h.30469c.04785 0 .08398.0127.10742.03613s.04004.05176.04785.08398c.02441.0957.07324.19043.14941.2832.07617.09375.18359.17188.32617.2334.14062.06152.32324.09277.54688.09277.3418 0 .59375-.06055.75586-.18262.16113-.12109.24219-.2832.24219-.4873 0-.13867-.04297-.25195-.12891-.33691-.08594-.08594-.2168-.16309-.3916-.23047s-.40234-.1416-.68066-.2207c-.29102-.08398-.53223-.17578-.72363-.27539s-.33398-.22266-.42676-.37012c-.09375-.14746-.14062-.33496-.14062-.5625 0-.21484.05664-.40723.17285-.57617.11621-.16992.28223-.30371.50195-.40332s.48145-.14941.78906-.14941c.24707 0 .46387.03223.64844.09766.18555.06641.33984.1543.46387.26367.12305.10938.2168.22656.28027.35254.06348.125.09766.24805.10156.36719 0 .02832-.00977.05469-.03027.08105-.01953.02637-.05078.03906-.0957.03906h-.31641c-.02734 0-.05664-.00781-.08594-.02441-.03027-.01562-.05273-.0459-.06934-.08984-.02441-.16309-.11621-.30078-.27441-.41211-.16016-.11133-.36719-.16699-.62207-.16699-.25879 0-.46973.0498-.62988.14941-.16211.09961-.24219.25488-.24219.46582 0 .13574.03711.24805.11328.33789.0752.08984.19531.16797.3584.23633.16309.06738.37598.13965.63965.21484.31836.08789.58008.18066.7832.27832s.35352.21875.45117.36426.14648.33203.14648.55859c0 .25098-.06641.46582-.19727.64258-.13184.17773-.31641.31348-.55273.40625-.23828.09375-.51758.14062-.83984.14062z" fill="#25357a"/><path d="m448.34375 36.68896c-.22266 0-.4043-.04297-.54297-.12891-.14062-.08496-.24219-.20703-.30469-.36426-.06445-.15723-.0957-.34375-.0957-.55859v-1.57812h-.4668c-.04004 0-.07227-.0127-.09863-.03906-.02637-.02539-.03906-.05859-.03906-.09863v-.20312c0-.04004.0127-.07227.03906-.09863.02637-.02539.05859-.03906.09863-.03906h.4668v-.99805c0-.03906.01172-.07227.03809-.09863.02637-.02539.05957-.03809.09863-.03809h.28125c.03906 0 .07227.0127.09766.03809.02637.02637.03906.05957.03906.09863v.99805h.74219c.04297 0 .07715.01367.10156.03906.02344.02637.03516.05859.03516.09863v.20312c0 .04004-.01172.07324-.03516.09863-.02441.02637-.05859.03906-.10156.03906h-.74219v1.53613c0 .1875.03223.33496.0957.44238.06445.10742.17773.16113.3418.16113h.36328c.04102 0 .07324.0127.09961.03906.02539.02539.03906.05859.03906.09863v.21484c0 .04004-.01367.07324-.03906.09863-.02637.02637-.05859.03906-.09961.03906h-.41211z" fill="#25357a"/><path d="m449.60547 36.68896c-.04004 0-.07324-.0127-.09961-.03906-.02539-.02539-.03809-.05859-.03809-.09863v-2.82715c0-.03906.0127-.07324.03809-.10156.02637-.02734.05957-.04199.09961-.04199h.27441c.04004 0 .07324.01465.10254.04199.02734.02832.04102.0625.04102.10156v.26367c.08008-.13574.18945-.2373.32812-.30566.14062-.06738.30957-.10156.50879-.10156h.2334c.03906 0 .07227.01367.09766.03906.02637.02637.03906.05859.03906.09863v.24512c0 .04004-.0127.07227-.03906.0957-.02539.02344-.05859.03613-.09766.03613h-.35938c-.21484 0-.38477.0625-.50781.18848-.12305.125-.18555.29492-.18555.51074v1.75684c0 .04004-.01367.07324-.04102.09863-.02832.02637-.0625.03906-.10156.03906h-.29297z" fill="#25357a"/><path d="m452.92188 36.74854c-.41406 0-.74219-.12598-.98633-.37891-.24219-.25391-.37598-.59863-.40039-1.03711-.00391-.05176-.00586-.11914-.00586-.2002 0-.08203.00195-.14844.00586-.2002.0166-.2832.08203-.53125.19727-.74414.11621-.21387.27441-.37793.47559-.49316.20117-.11621.4375-.17383.70801-.17383.30273 0 .55664.06348.76172.19141.20605.12793.3623.30859.46973.54395.1084.23535.16113.50977.16113.8252v.10156c0 .04395-.0127.07715-.03906.10156-.02539.02344-.05859.03516-.09766.03516h-2.06836v.05469c.00781.16309.04395.31543.10742.45703.06445.1416.15625.25586.27734.34375.12207.08691.26465.13086.42773.13086.14355 0 .26367-.02148.35938-.06543s.17285-.09277.23242-.14648c.06055-.05371.09961-.09668.11914-.12891.03711-.04785.06445-.07617.08398-.08594s.05273-.01562.0957-.01562h.29297c.03613 0 .06641.01172.09277.0332.02637.02246.03613.05273.03223.09277-.00391.05957-.03516.13281-.09473.21777-.05957.08594-.14453.1709-.25488.25391-.10938.08398-.24414.15234-.40625.20703-.16113.05371-.34375.08008-.54688.08008zm-.81836-1.84083h1.6377v-.01758c0-.17969-.03223-.33887-.09863-.47852s-.16016-.25-.28418-.33203c-.12402-.08105-.27051-.12207-.44238-.12207-.1709 0-.31738.04102-.43945.12207-.12109.08203-.21387.19238-.27734.33203-.06445.13965-.0957.29883-.0957.47852v.01758z" fill="#25357a"/><path d="m456.26953 36.74854c-.41406 0-.74316-.12598-.98633-.37891-.24316-.25391-.37695-.59863-.40039-1.03711-.00391-.05176-.00586-.11914-.00586-.2002 0-.08203.00195-.14844.00586-.2002.01562-.2832.08203-.53125.19727-.74414.11523-.21387.27344-.37793.47461-.49316.20117-.11621.4375-.17383.70898-.17383.30273 0 .55664.06348.76172.19141s.36133.30859.46875.54395c.1084.23535.16211.50977.16211.8252v.10156c0 .04395-.01367.07715-.03906.10156-.02539.02344-.05859.03516-.09863.03516h-2.06738v.05469c.00781.16309.04297.31543.10742.45703.06348.1416.15625.25586.27734.34375.12109.08691.26367.13086.42773.13086.14258 0 .2627-.02148.3584-.06543s.17285-.09277.2334-.14648c.05957-.05371.09961-.09668.11914-.12891.03613-.04785.06445-.07617.08398-.08594s.05176-.01562.0957-.01562h.29297c.03516 0 .06641.01172.0918.0332.02637.02246.03711.05273.0332.09277-.00391.05957-.03516.13281-.0957.21777-.05957.08594-.14453.1709-.25391.25391-.10938.08398-.24512.15234-.40625.20703-.16211.05371-.34375.08008-.54688.08008zm-.81836-1.84083h1.63672v-.01758c0-.17969-.03223-.33887-.09766-.47852-.06641-.13965-.16113-.25-.28516-.33203-.12305-.08105-.27051-.12207-.44141-.12207-.17188 0-.31836.04102-.43945.12207-.12109.08203-.21484.19238-.27734.33203-.06445.13965-.0957.29883-.0957.47852z" fill="#25357a"/><path d="m459.56836 36.68896c-.22266 0-.4043-.04297-.54297-.12891-.14062-.08496-.24219-.20703-.30469-.36426-.06445-.15723-.0957-.34375-.0957-.55859v-1.57812h-.4668c-.04004 0-.07227-.0127-.09863-.03906-.02637-.02539-.03906-.05859-.03906-.09863v-.20312c0-.04004.0127-.07227.03906-.09863.02637-.02539.05859-.03906.09863-.03906h.4668v-.99805c0-.03906.01172-.07227.03809-.09863.02637-.02539.05957-.03809.09863-.03809h.28125c.03906 0 .07227.0127.09766.03809.02637.02637.03906.05957.03906.09863v.99805h.74219c.04297 0 .07715.01367.10156.03906.02344.02637.03516.05859.03516.09863v.20312c0 .04004-.01172.07324-.03516.09863-.02441.02637-.05859.03906-.10156.03906h-.74219v1.53613c0 .1875.03223.33496.0957.44238.06445.10742.17773.16113.3418.16113h.36328c.04102 0 .07324.0127.09961.03906.02539.02539.03906.05859.03906.09863v.21484c0 .04004-.01367.07324-.03906.09863-.02637.02637-.05859.03906-.09961.03906h-.41211z" fill="#25357a"/><path d="m526.43945 36.68896c-.04395 0-.07812-.0127-.10156-.03906-.02441-.02539-.03613-.05859-.03613-.09863v-3.90234c0-.04395.01172-.0791.03613-.10547.02344-.02539.05762-.03809.10156-.03809h1.63672c.2998 0 .54297.04883.73242.14648s.3291.22949.41895.39746c.08887.16699.13379.35449.13379.56152 0 .16309-.02637.30371-.08008.4209-.05371.11816-.12109.21387-.2002.28711-.0791.07422-.15723.13086-.2334.1709.15625.0752.29395.19922.41602.37012.12109.17188.18164.37891.18164.62207 0 .21875-.0498.41992-.14844.60352-.09961.18359-.24805.33008-.44531.43945s-.43945.16406-.72656.16406zm.44825-2.41503h1.09961c.25488 0 .44824-.05859.5791-.17578.13281-.11816.19727-.27832.19727-.48145s-.06445-.3584-.19727-.46582c-.13086-.10742-.32422-.16211-.5791-.16211h-1.09961zm0 1.93066h1.15918c.25488 0 .45215-.06934.5918-.20898s.20898-.31055.20898-.51367c0-.21191-.06934-.38574-.20898-.52344s-.33691-.20605-.5918-.20605h-1.15918v1.45215z" fill="#25357a"/><path d="m531.08398 36.74854c-.19922 0-.38086-.04004-.54492-.11914-.16309-.08008-.29492-.1875-.39453-.32324-.09961-.13477-.14844-.28809-.14844-.45996 0-.27539.11133-.49414.33398-.65723s.51367-.27148.87305-.32324l.89062-.125v-.17383c0-.19141-.05469-.34082-.16406-.44824-.11035-.10742-.28906-.16113-.53516-.16113-.17578 0-.31934.03613-.43066.10742-.1123.07227-.18945.16309-.2334.27539-.02344.05957-.06543.08887-.125.08887h-.26953c-.04297 0-.07617-.0127-.09766-.03809-.02246-.02637-.0332-.05664-.0332-.09277 0-.05957.02246-.13379.06836-.22168.0459-.08691.11719-.17285.21289-.25684.0957-.08301.2168-.1543.36719-.21191.14844-.05762.33203-.08691.54688-.08691.23828 0 .43945.03125.60352.09277.16309.06152.29199.14453.38477.24805.09375.10352.16211.2207.2041.35254s.0625.26562.0625.40039v1.93652c0 .04004-.0127.07324-.03809.09863-.02734.02637-.05957.03906-.09961.03906h-.27539c-.04297 0-.07715-.0127-.10156-.03906-.02344-.02539-.03516-.05859-.03516-.09863v-.25684c-.05176.07129-.12109.14258-.20898.21191-.08789.07031-.19727.12793-.3291.17383s-.29297.06836-.4834.06836zm.125-.44825c.16309 0 .3125-.03418.44824-.10449.13574-.06934.24219-.17773.31934-.3252.07812-.14746.11719-.33301.11719-.55664v-.16699l-.69336.10156c-.2832.04004-.49609.10645-.63965.2002s-.21582.21191-.21582.35547c0 .11133.0332.2041.09961.27832.06543.07324.14844.12793.25.16406s.20703.05371.31445.05371z" fill="#25357a"/><path d="m533.65332 36.68896c-.04004 0-.07324-.0127-.09863-.03906-.02539-.02539-.03906-.05859-.03906-.09863v-2.83301c0-.04004.01367-.07227.03906-.09863.02539-.02539.05859-.03906.09863-.03906h.28125c.04004 0 .07227.01367.09863.03906.02539.02637.03906.05859.03906.09863v.2627c.10352-.13477.23438-.24512.39062-.33105.1582-.08594.35938-.12891.60742-.12891.25879 0 .47852.05664.66016.1709.18164.11328.31836.27051.41211.47168s.14062.43555.14062.70215v1.68555c0 .04004-.0127.07324-.03906.09863-.02539.02637-.05859.03906-.09766.03906h-.29883c-.04102 0-.07324-.0127-.09961-.03906-.02539-.02539-.03906-.05859-.03906-.09863v-1.65527c0-.2793-.06738-.49707-.20312-.6543-.13477-.15723-.33398-.23633-.59766-.23633-.24609 0-.44531.0791-.59375.23633-.15039.15723-.22461.375-.22461.6543v1.65527c0 .04004-.01367.07324-.03906.09863-.02539.02637-.05859.03906-.09863.03906h-.29883z" fill="#25357a"/><path d="m537.28125 36.68896c-.04004 0-.07227-.0127-.09863-.03906-.02637-.02539-.03906-.05859-.03906-.09863v-3.96875c0-.03906.0127-.07227.03906-.09863.02637-.02539.05859-.03809.09863-.03809h.28125c.03906 0 .07227.0127.09766.03809.02637.02637.03906.05957.03906.09863v2.08008l1.17773-.98047c.04785-.03906.08398-.06641.11035-.08008s.06934-.02148.12891-.02148h.31641c.03613 0 .06543.0127.08984.03613.02441.02441.03613.05371.03613.08984 0 .01562-.00586.03418-.01562.05371s-.0293.04004-.05664.05957l-1.38086 1.14746 1.53027 1.48828c.04785.04004.07129.07617.07129.10742 0 .03613-.01172.06641-.03516.08984-.02344.02441-.05371.03613-.08984.03613h-.31055c-.06055 0-.10352-.00684-.13086-.02051-.0293-.01465-.06445-.04102-.1084-.08105l-1.33301-1.27344v1.2373c0 .04004-.0127.07324-.03906.09863-.02539.02637-.05859.03906-.09766.03906h-.28125z" fill="#25357a"/><path d="m541.8418 36.68896c-.04395 0-.07812-.0127-.10156-.03906-.02441-.02539-.03613-.05859-.03613-.09863v-3.90234c0-.04395.01172-.0791.03613-.10547.02344-.02539.05762-.03809.10156-.03809h2.46875c.04297 0 .07715.0127.10156.03809.02344.02637.03516.06152.03516.10547v.22656c0 .04395-.01172.07812-.03516.10156-.02441.02441-.05859.03613-.10156.03613h-2.0332v1.30859h1.90137c.04395 0 .07715.01367.10156.03906.02441.02637.03613.06055.03613.10449v.22168c0 .03906-.01172.07227-.03613.09863-.02441.02539-.05762.03809-.10156.03809h-1.90137v1.35742h2.08008c.04492 0 .07812.01172.10156.03516.02441.02441.03613.05859.03613.10254v.23242c0 .04004-.01172.07324-.03613.09863-.02344.02637-.05664.03906-.10156.03906h-2.51562z" fill="#25357a"/><path d="m545.38574 36.68896c-.04004 0-.07324-.0127-.09863-.03906-.02539-.02539-.03906-.05859-.03906-.09863v-2.83301c0-.04004.01367-.07227.03906-.09863.02539-.02539.05859-.03906.09863-.03906h.28125c.04004 0 .07227.01367.09863.03906.02539.02637.03906.05859.03906.09863v.2627c.10352-.13477.23438-.24512.39062-.33105.1582-.08594.35938-.12891.60742-.12891.25879 0 .47852.05664.66016.1709.18164.11328.31836.27051.41211.47168s.14062.43555.14062.70215v1.68555c0 .04004-.0127.07324-.03906.09863-.02539.02637-.05859.03906-.09766.03906h-.29883c-.04102 0-.07324-.0127-.09961-.03906-.02539-.02539-.03906-.05859-.03906-.09863v-1.65527c0-.2793-.06738-.49707-.20312-.6543-.13477-.15723-.33398-.23633-.59766-.23633-.24609 0-.44531.0791-.59375.23633-.15039.15723-.22461.375-.22461.6543v1.65527c0 .04004-.01367.07324-.03906.09863-.02539.02637-.05859.03906-.09863.03906h-.29883z" fill="#25357a"/><path d="m550.00586 36.74854c-.21875 0-.4082-.03906-.56738-.11621-.15918-.07812-.29004-.18359-.3916-.31738-.10156-.13281-.17773-.28516-.22656-.45703-.05078-.1709-.0791-.35254-.08789-.54395-.00391-.06348-.00586-.12305-.00586-.17871s.00195-.11621.00586-.17969c.00879-.1875.03711-.36621.08789-.53809.04883-.1709.125-.32422.22656-.45996s.23242-.24219.3916-.31934c.15918-.07812.34863-.11719.56738-.11719.23535 0 .43066.04199.58594.12598.15527.08301.2832.1875.38281.31055v-1.375c0-.03906.0127-.07227.03906-.09863.02539-.02539.05859-.03809.09766-.03809h.28711c.04004 0 .07227.0127.09961.03809.02539.02637.03809.05957.03809.09863v3.96875c0 .04004-.0127.07324-.03809.09863-.02734.02637-.05957.03906-.09961.03906h-.26855c-.04395 0-.07715-.0127-.10156-.03906-.02441-.02539-.03613-.05859-.03613-.09863v-.25098c-.09961.12793-.22852.23438-.38867.32031-.15918.08496-.3584.12793-.59766.12793zm.12598-.48438c.19922 0 .3584-.04492.47754-.13672.12012-.0918.20898-.20801.26953-.34961.05957-.1416.0918-.28613.0957-.43359.00391-.06348.00586-.14062.00586-.23047s-.00195-.16602-.00586-.22949c-.00391-.13965-.03711-.27734-.09863-.41309-.06152-.13477-.15332-.24707-.27441-.33398-.12207-.08789-.2793-.13184-.46973-.13184-.2041 0-.36426.04492-.48438.13477-.12012.08887-.20508.20703-.25684.35254s-.08203.30176-.08984.46875c-.00391.11621-.00391.23145 0 .34668.00781.16797.03809.32422.08984.46973s.13672.2627.25684.35254.28027.13379.48438.13379z" fill="#25357a"/><path d="m73.45898 160.78418c-.04346 0-.07764-.0127-.10156-.03906-.02393-.02539-.03564-.05859-.03564-.09863v-3.90234c0-.04395.01172-.0791.03564-.10547.02393-.02539.05811-.03809.10156-.03809h1.35693c.41064 0 .74121.06152.99219.18457.25098.12402.43457.30664.5498.54688.11572.24121.17529.53711.17969.8877.00391.17969.00586.33691.00586.47266s-.00195.29102-.00586.46582c-.0083.36719-.06885.6709-.18262.91211-.11328.24121-.29297.41992-.5376.53711-.24512.11816-.56885.17676-.97168.17676h-1.38672zm.44873-.50781h.9082c.2749 0 .49414-.03809.65771-.11426.16309-.0752.28174-.19629.35547-.36426.07373-.16699.1123-.38867.1167-.66309.00781-.12012.01172-.22461.01172-.31445v-.26855c0-.08984-.00391-.19238-.01172-.30762-.0083-.38672-.09961-.67285-.2749-.85742-.17578-.18555-.47021-.27832-.88477-.27832h-.87842v3.16797z" fill="#25357a"/><path d="m77.45166 157.09668c-.03955 0-.07275-.0127-.09863-.03906s-.03857-.05859-.03857-.09863v-.32324c0-.03906.0127-.07324.03857-.10156.02588-.02734.05908-.04102.09863-.04102h.37695c.03955 0 .07373.01367.10156.04102.02783.02832.0415.0625.0415.10156v.32324c0 .04004-.01367.07227-.0415.09863s-.06201.03906-.10156.03906zm.04785 3.6875c-.03955 0-.07275-.0127-.09863-.03906-.02588-.02539-.03857-.05859-.03857-.09863v-2.83301c0-.04004.0127-.07227.03857-.09863.02588-.02539.05908-.03906.09863-.03906h.28711c.03955 0 .07275.01367.09863.03906.02588.02637.03857.05859.03857.09863v2.83301c0 .04004-.0127.07324-.03857.09863-.02588.02637-.05908.03906-.09863.03906z" fill="#25357a"/><path d="m78.9458 160.78418c-.03955 0-.07275-.0127-.09863-.03906-.02588-.02539-.03857-.05859-.03857-.09863v-2.82715c0-.03906.0127-.07324.03857-.10156.02588-.02734.05908-.04199.09863-.04199h.2749c.04004 0 .07373.01465.10205.04199.02783.02832.0415.0625.0415.10156v.26367c.07959-.13574.18945-.2373.32861-.30566.13965-.06738.30908-.10156.5083-.10156h.23291c.04004 0 .07275.01367.09863.03906.02588.02637.03906.05859.03906.09863v.24512c0 .04004-.01318.07227-.03906.0957s-.05859.03613-.09863.03613h-.3584c-.21533 0-.38477.0625-.5083.18848-.12354.125-.18506.29492-.18506.51074v1.75684c0 .04004-.01416.07324-.04199.09863-.02783.02637-.06152.03906-.10156.03906h-.29297z" fill="#25357a"/><path d="m82.29297 160.78418c-.22314 0-.40479-.04297-.54395-.12891-.13965-.08496-.24121-.20703-.30469-.36426-.06396-.15723-.0957-.34375-.0957-.55859v-1.57812h-.46631c-.04004 0-.07275-.0127-.09863-.03906-.02588-.02539-.03906-.05859-.03906-.09863v-.20312c0-.04004.01318-.07227.03906-.09863.02588-.02539.05859-.03906.09863-.03906h.46631v-.99805c0-.03906.0127-.07227.03857-.09863.02588-.02539.05908-.03809.09863-.03809h.28125c.03955 0 .07227.0127.09814.03809.02588.02637.03906.05957.03906.09863v.99805h.74121c.04395 0 .07764.01367.10156.03906.02393.02637.03564.05859.03564.09863v.20312c0 .04004-.01172.07324-.03564.09863-.02393.02637-.05762.03906-.10156.03906h-.74121v1.53613c0 .1875.03174.33496.0957.44238.06348.10742.17725.16113.34082.16113h.36426c.04004 0 .07275.0127.09863.03906.02588.02539.03906.05859.03906.09863v.21484c0 .04004-.01318.07324-.03906.09863-.02588.02637-.05859.03906-.09863.03906h-.41211z" fill="#25357a"/><path d="m83.96045 161.91992c-.03223 0-.06006-.01172-.08398-.03613-.02393-.02344-.03564-.05176-.03564-.08398 0-.01562.00195-.03125.00586-.04688.00391-.0166.01221-.03613.02393-.06055l.46045-1.09375-1.1416-2.69531c-.02002-.04785-.03027-.08203-.03027-.10156 0-.03613.01221-.06543.03613-.08984.02393-.02344.05371-.03613.08984-.03613h.29248c.04395 0 .07666.01074.09863.03027s.03711.04395.04492.07129l.90869 2.17578.93213-2.17578c.01221-.02734.02881-.05176.05078-.07129s.05469-.03027.09863-.03027h.28125c.03564 0 .06543.0127.08936.03613.02393.02441.03613.05176.03613.08398 0 .01953-.01025.05566-.03027.10742l-1.69727 3.91504c-.01172.02734-.02881.05176-.05078.07129-.02197.02051-.05469.03027-.09863.03027h-.28076z" fill="#25357a"/><path d="m88.23975 160.78418c-.04346 0-.07764-.0127-.10156-.03906-.02393-.02539-.03564-.05859-.03564-.09863v-3.90918c0-.03906.01172-.07227.03564-.09863.02393-.02539.05811-.03809.10156-.03809h.31689c.04004 0 .07275.0127.09863.03809.02588.02637.03906.05957.03906.09863v3.52734h1.98438c.04346 0 .07861.0127.10449.03809.02588.02637.03906.06152.03906.10449v.23926c0 .04004-.01318.07324-.03906.09863-.02588.02637-.06104.03906-.10449.03906z" fill="#25357a"/><path d="m92.25684 160.84375c-.19922 0-.38086-.04004-.54395-.11914-.16357-.08008-.29492-.1875-.39453-.32324-.09961-.13477-.14941-.28809-.14941-.45996 0-.27539.11133-.49414.33447-.65723s.51416-.27148.87305-.32324l.89014-.125v-.17383c0-.19141-.05469-.34082-.16406-.44824-.10986-.10742-.28809-.16113-.53516-.16113-.17529 0-.31885.03613-.43018.10742-.11182.07227-.18945.16309-.23291.27539-.02393.05957-.06592.08887-.12598.08887h-.26855c-.04395 0-.07715-.0127-.09863-.03809-.02197-.02637-.0332-.05664-.0332-.09277 0-.05957.02295-.13379.06885-.22168.0459-.08691.1167-.17285.2124-.25684.0957-.08301.21777-.1543.36719-.21191s.33203-.08691.54736-.08691c.23877 0 .43994.03125.60352.09277.16309.06152.29199.14453.38525.24805.09375.10352.16162.2207.20361.35254.0415.13184.0625.26562.0625.40039v1.93652c0 .04004-.01318.07324-.03857.09863-.02637.02637-.05908.03906-.09863.03906h-.27539c-.04346 0-.07764-.0127-.10156-.03906-.02393-.02539-.03564-.05859-.03564-.09863v-.25684c-.05176.07129-.12158.14258-.20947.21191-.0874.07031-.19678.12793-.32861.17383-.13135.0459-.29297.06836-.48389.06836zm.12548-.44824c.16309 0 .3125-.03418.44824-.10449.13525-.06934.24219-.17773.31982-.3252s.11621-.33301.11621-.55664v-.16699l-.69287.10156c-.2832.04004-.49609.10645-.63965.2002s-.21533.21191-.21533.35547c0 .11133.03271.2041.09863.27832.06592.07324.14941.12793.25098.16406s.20605.05371.31396.05371z" fill="#25357a"/><path d="m94.82617 160.78418c-.03955 0-.07275-.0127-.09863-.03906-.02588-.02539-.03857-.05859-.03857-.09863v-2.83301c0-.04004.0127-.07227.03857-.09863.02588-.02539.05908-.03906.09863-.03906h.28125c.03955 0 .07227.01367.09863.03906.02588.02637.03857.05859.03857.09863v.2627c.10352-.13477.23438-.24512.3916-.33105s.35938-.12891.60645-.12891c.25928 0 .47949.05664.66064.1709.18115.11328.31885.27051.4126.47168.09326.20117.14014.43555.14014.70215v1.68555c0 .04004-.0127.07324-.03857.09863-.02588.02637-.05908.03906-.09863.03906h-.29883c-.04004 0-.07275-.0127-.09863-.03906-.02588-.02539-.03906-.05859-.03906-.09863v-1.65527c0-.2793-.06787-.49707-.20312-.6543-.13574-.15723-.33447-.23633-.59766-.23633-.24707 0-.44531.0791-.59473.23633s-.22412.375-.22412.6543v1.65527c0 .04004-.01318.07324-.03906.09863-.02588.02637-.05859.03906-.09863.03906h-.29883z" fill="#25357a"/><path d="m99.5542 160.84375c-.41455 0-.74316-.12598-.98633-.37891-.24316-.25391-.37646-.59863-.40039-1.03711-.00391-.05176-.00586-.11914-.00586-.2002 0-.08203.00195-.14844.00586-.2002.01611-.2832.08154-.53125.19727-.74414.11572-.21387.27393-.37793.4751-.49316.20117-.11621.4375-.17383.7085-.17383.30273 0 .55664.06348.76172.19141.20557.12793.36182.30859.46924.54395.10791.23535.16162.50977.16162.8252v.10156c0 .04395-.01318.07715-.03906.10156-.02588.02344-.05859.03516-.09863.03516h-2.06787v.05469c.00781.16309.04395.31543.10742.45703.06396.1416.15625.25586.27783.34375.12158.08691.26416.13086.42773.13086.14307 0 .2627-.02148.3584-.06543s.17334-.09277.2334-.14648c.05957-.05371.09912-.09668.11914-.12891.03613-.04785.06396-.07617.08398-.08594.01953-.00977.05176-.01562.0957-.01562h.29248c.03613 0 .06689.01172.09277.0332.02588.02246.03662.05273.03271.09277-.00391.05957-.03564.13281-.09521.21777-.06006.08594-.14453.1709-.25439.25391-.10938.08398-.24512.15234-.40625.20703-.16162.05371-.34375.08008-.54688.08008zm-.81885-1.84082h1.6377v-.01758c0-.17969-.03271-.33887-.09863-.47852s-.16064-.25-.28418-.33203c-.12354-.08105-.271-.12207-.44189-.12207-.17139 0-.31787.04102-.43945.12207-.12158.08203-.21436.19238-.27783.33203-.06396.13965-.0957.29883-.0957.47852v.01758z" fill="#25357a"/><path d="m433.50098 134.94873c-.04395 0-.07812-.0127-.10156-.03906-.02441-.02539-.03613-.05859-.03613-.09863v-3.90234c0-.04395.01172-.0791.03613-.10547.02344-.02539.05762-.03809.10156-.03809h1.35645c.41113 0 .74121.06152.99219.18457.25098.12402.43457.30664.5498.54688.11621.24121.17578.53711.17969.8877.00391.17969.00586.33691.00586.47266s-.00195.29102-.00586.46582c-.00781.36719-.06836.6709-.18262.91211-.11328.24121-.29297.41992-.53711.53711-.24512.11816-.56934.17676-.97168.17676h-1.38672zm.44824-.50781h.9082c.27539 0 .49414-.03809.6582-.11426.16309-.0752.28125-.19629.35547-.36426.07324-.16699.1123-.38867.11621-.66309.00781-.12012.01172-.22461.01172-.31445v-.26855c0-.08984-.00391-.19238-.01172-.30762-.00781-.38672-.09961-.67285-.27441-.85742-.17578-.18555-.4707-.27832-.88477-.27832h-.87891v3.16797z" fill="#25357a"/><path d="m437.49316 131.26123c-.03906 0-.07227-.0127-.09863-.03906-.02539-.02637-.03809-.05859-.03809-.09863v-.32324c0-.03906.0127-.07324.03809-.10156.02637-.02734.05957-.04102.09863-.04102h.37695c.04004 0 .07422.01367.10156.04102.02832.02832.04199.0625.04199.10156v.32324c0 .04004-.01367.07227-.04199.09863-.02734.02637-.06152.03906-.10156.03906zm.04786 3.6875c-.03906 0-.07227-.0127-.09863-.03906-.02539-.02539-.03809-.05859-.03809-.09863v-2.83301c0-.04004.0127-.07227.03809-.09863.02637-.02539.05957-.03906.09863-.03906h.28711c.04004 0 .07324.01367.09863.03906.02637.02637.03906.05859.03906.09863v2.83301c0 .04004-.0127.07324-.03906.09863-.02539.02637-.05859.03906-.09863.03906z" fill="#25357a"/><path d="m438.9873 134.94873c-.03906 0-.07227-.0127-.09863-.03906-.02539-.02539-.03809-.05859-.03809-.09863v-2.82715c0-.03906.0127-.07324.03809-.10156.02637-.02734.05957-.04199.09863-.04199h.27539c.04004 0 .07324.01465.10156.04199.02832.02832.04199.0625.04199.10156v.26367c.0791-.13574.18945-.2373.32812-.30566.13965-.06738.30957-.10156.50879-.10156h.23242c.04004 0 .07324.01367.09863.03906.02637.02637.03906.05859.03906.09863v.24512c0 .04004-.0127.07227-.03906.0957-.02539.02344-.05859.03613-.09863.03613h-.3584c-.21484 0-.38477.0625-.50781.18848-.12402.125-.18555.29492-.18555.51074v1.75684c0 .04004-.01367.07324-.04199.09863-.02734.02637-.06152.03906-.10156.03906h-.29297z" fill="#25357a"/><path d="m442.33496 134.94873c-.22363 0-.40527-.04297-.54395-.12891-.13965-.08496-.24121-.20703-.30469-.36426-.06445-.15723-.0957-.34375-.0957-.55859v-1.57812h-.4668c-.04004 0-.07227-.0127-.09863-.03906-.02539-.02539-.03906-.05859-.03906-.09863v-.20312c0-.04004.01367-.07227.03906-.09863.02637-.02539.05859-.03906.09863-.03906h.4668v-.99805c0-.03906.0127-.07227.03809-.09863.02637-.02539.05957-.03809.09863-.03809h.28125c.04004 0 .07227.0127.09863.03809.02539.02637.03906.05957.03906.09863v.99805h.74121c.04395 0 .07715.01367.10156.03906.02344.02637.03516.05859.03516.09863v.20312c0 .04004-.01172.07324-.03516.09863-.02441.02637-.05762.03906-.10156.03906h-.74121v1.53613c0 .1875.03125.33496.0957.44238.06348.10742.17676.16113.34082.16113h.36426c.04004 0 .07227.0127.09863.03906.02539.02539.03906.05859.03906.09863v.21484c0 .04004-.01367.07324-.03906.09863-.02637.02637-.05859.03906-.09863.03906h-.41211z" fill="#25357a"/><path d="m444.00195 136.08447c-.03223 0-.05957-.01172-.08398-.03613-.02344-.02344-.03516-.05176-.03516-.08398 0-.01562.00195-.03125.00586-.04688.00391-.0166.01172-.03613.02344-.06055l.46094-1.09375-1.1416-2.69531c-.02051-.04785-.03027-.08203-.03027-.10156 0-.03613.01172-.06543.03613-.08984.02344-.02344.05371-.03613.08984-.03613h.29199c.04395 0 .07715.01074.09863.03027.02246.01953.03711.04395.04492.07129l.90918 2.17578.93164-2.17578c.0127-.02734.0293-.05176.05078-.07129.02246-.01953.05469-.03027.09863-.03027h.28125c.03613 0 .06543.0127.08984.03613.02344.02441.03613.05176.03613.08398 0 .01953-.01074.05566-.03027.10742l-1.69727 3.91504c-.01172.02734-.0293.05176-.05078.07129-.02246.02051-.05469.03027-.09863.03027h-.28125z" fill="#25357a"/><path d="m448.28125 134.94873c-.04297 0-.07715-.0127-.10156-.03906-.02344-.02539-.03516-.05859-.03516-.09863v-3.90918c0-.03906.01172-.07227.03516-.09863.02441-.02539.05859-.03809.10156-.03809h.31738c.04004 0 .07227.0127.09863.03809.02539.02637.03906.05957.03906.09863v3.52734h1.98438c.04297 0 .07812.0127.10449.03809.02539.02637.03906.06152.03906.10449v.23926c0 .04004-.01367.07324-.03906.09863-.02637.02637-.06152.03906-.10449.03906z" fill="#25357a"/><path d="m452.29883 135.0083c-.19922 0-.38086-.04004-.54395-.11914-.16406-.08008-.29492-.1875-.39453-.32324-.09961-.13477-.14941-.28809-.14941-.45996 0-.27539.11133-.49414.33398-.65723.22363-.16309.51465-.27148.87305-.32324l.89062-.125v-.17383c0-.19141-.05469-.34082-.16406-.44824-.11035-.10742-.28809-.16113-.53516-.16113-.17578 0-.31934.03613-.43066.10742-.11133.07227-.18945.16309-.23242.27539-.02441.05957-.06641.08887-.12598.08887h-.26855c-.04395 0-.07715-.0127-.09863-.03809-.02246-.02637-.0332-.05664-.0332-.09277 0-.05957.02246-.13379.06836-.22168.0459-.08691.11719-.17285.21289-.25684.0957-.08301.21777-.1543.36719-.21191s.33203-.08691.54688-.08691c.23926 0 .44043.03125.60352.09277s.29199.14453.38574.24805.16113.2207.20312.35254.0625.26562.0625.40039v1.93652c0 .04004-.0127.07324-.03809.09863-.02637.02637-.05957.03906-.09863.03906h-.27539c-.04395 0-.07812-.0127-.10156-.03906-.02441-.02539-.03613-.05859-.03613-.09863v-.25684c-.05176.07129-.12109.14258-.20898.21191-.08789.07031-.19727.12793-.3291.17383-.13086.0459-.29297.06836-.4834.06836zm.125-.44824c.16309 0 .3125-.03418.44824-.10449.13574-.06934.24219-.17773.32031-.3252.07715-.14746.11621-.33301.11621-.55664v-.16699l-.69336.10156c-.2832.04004-.49609.10645-.63965.2002s-.21484.21191-.21484.35547c0 .11133.03223.2041.09863.27832.06543.07324.14941.12793.25098.16406s.20605.05371.31348.05371z" fill="#25357a"/><path d="m454.86816 134.94873c-.04004 0-.07324-.0127-.09863-.03906-.02637-.02539-.03906-.05859-.03906-.09863v-2.83301c0-.04004.0127-.07227.03906-.09863.02539-.02539.05859-.03906.09863-.03906h.28125c.03906 0 .07227.01367.09863.03906.02539.02637.03809.05859.03809.09863v.2627c.10352-.13477.23438-.24512.3916-.33105s.35938-.12891.60645-.12891c.25977 0 .47949.05664.66113.1709.18066.11328.31836.27051.41211.47168s.14062.43555.14062.70215v1.68555c0 .04004-.0127.07324-.03906.09863-.02539.02637-.05859.03906-.09863.03906h-.29883c-.04004 0-.07227-.0127-.09863-.03906-.02539-.02539-.03906-.05859-.03906-.09863v-1.65527c0-.2793-.06738-.49707-.20312-.6543s-.33398-.23633-.59766-.23633c-.24707 0-.44531.0791-.59473.23633s-.22363.375-.22363.6543v1.65527c0 .04004-.01367.07324-.03906.09863-.02637.02637-.05859.03906-.09863.03906h-.29883z" fill="#25357a"/><path d="m459.5957 135.0083c-.41406 0-.74316-.12598-.98633-.37891-.24316-.25391-.37598-.59863-.40039-1.03711-.00391-.05176-.00586-.11914-.00586-.2002 0-.08203.00195-.14844.00586-.2002.0166-.2832.08203-.53125.19727-.74414.11621-.21387.27441-.37793.47559-.49316.20117-.11621.4375-.17383.70801-.17383.30273 0 .55664.06348.76172.19141.20605.12793.3623.30859.46973.54395s.16113.50977.16113.8252v.10156c0 .04395-.0127.07715-.03906.10156-.02539.02344-.05859.03516-.09863.03516h-2.06738v.05469c.00781.16309.04395.31543.10742.45703s.15625.25586.27734.34375c.12207.08691.26465.13086.42773.13086.14355 0 .2627-.02148.3584-.06543s.17383-.09277.2334-.14648.09961-.09668.11914-.12891c.03613-.04785.06445-.07617.08398-.08594s.05176-.01562.0957-.01562h.29297c.03613 0 .06641.01172.09277.0332.02539.02246.03613.05273.03223.09277-.00391.05957-.03516.13281-.09473.21777-.06055.08594-.14453.1709-.25488.25391-.10938.08398-.24512.15234-.40625.20703-.16113.05371-.34375.08008-.54688.08008zm-.81836-1.84082h1.6377v-.01758c0-.17969-.0332-.33887-.09863-.47852-.06641-.13965-.16113-.25-.28418-.33203-.12402-.08105-.27148-.12207-.44238-.12207s-.31738.04102-.43945.12207c-.12109.08203-.21387.19238-.27734.33203-.06445.13965-.0957.29883-.0957.47852v.01758z" fill="#25357a"/><path d="m556.5459 134.14844c-.04395 0-.07715-.0127-.10156-.03906-.02441-.02539-.03613-.05859-.03613-.09863v-3.90234c0-.04395.01172-.0791.03613-.10547.02441-.02539.05762-.03809.10156-.03809h1.35645c.41113 0 .74219.06152.99219.18457.25195.12402.43555.30664.55078.54688.11523.24121.1748.53711.17969.8877.00391.17969.00586.33691.00586.47266s-.00195.29102-.00586.46582c-.00879.36719-.06934.6709-.18359.91211-.11328.24121-.29297.41992-.53711.53711-.24512.11816-.56836.17676-.97168.17676h-1.38672zm.44824-.50782h.9082c.27539 0 .49414-.03809.6582-.11426.16309-.0752.28125-.19629.35547-.36426.07422-.16699.1123-.38867.11719-.66309.00781-.12012.01172-.22461.01172-.31445v-.26855c0-.08984-.00391-.19238-.01172-.30762-.00879-.38672-.09961-.67285-.27539-.85742-.17578-.18555-.4707-.27832-.88477-.27832h-.87891v3.16797z" fill="#25357a"/><path d="m560.53906 130.46094c-.04004 0-.07324-.0127-.09961-.03906-.02539-.02637-.03809-.05859-.03809-.09863v-.32324c0-.03906.0127-.07324.03809-.10156.02637-.02734.05957-.04102.09961-.04102h.37695c.03906 0 .07324.01367.10156.04102.02734.02832.04102.0625.04102.10156v.32324c0 .04004-.01367.07227-.04102.09863-.02832.02637-.0625.03906-.10156.03906zm.04688 3.6875c-.03906 0-.07227-.0127-.09766-.03906-.02637-.02539-.03906-.05859-.03906-.09863v-2.83301c0-.04004.0127-.07227.03906-.09863.02539-.02539.05859-.03906.09766-.03906h.28711c.04004 0 .07324.01367.09961.03906.02539.02637.03809.05859.03809.09863v2.83301c0 .04004-.0127.07324-.03809.09863-.02637.02637-.05957.03906-.09961.03906z" fill="#25357a"/><path d="m562.0332 134.14844c-.04004 0-.07324-.0127-.09961-.03906-.02539-.02539-.03809-.05859-.03809-.09863v-2.82715c0-.03906.0127-.07324.03809-.10156.02637-.02734.05957-.04199.09961-.04199h.27441c.04004 0 .07324.01465.10254.04199.02734.02832.04102.0625.04102.10156v.26367c.08008-.13574.18945-.2373.32812-.30566.14062-.06738.30957-.10156.50879-.10156h.2334c.03906 0 .07227.01367.09766.03906.02637.02637.03906.05859.03906.09863v.24512c0 .04004-.0127.07227-.03906.0957-.02539.02344-.05859.03613-.09766.03613h-.35938c-.21484 0-.38477.0625-.50781.18848-.12305.125-.18555.29492-.18555.51074v1.75684c0 .04004-.01367.07324-.04102.09863-.02832.02637-.0625.03906-.10156.03906h-.29297z" fill="#25357a"/><path d="m565.37988 134.14844c-.22363 0-.40527-.04297-.54395-.12891-.13965-.08496-.24121-.20703-.30469-.36426-.06445-.15723-.0957-.34375-.0957-.55859v-1.57812h-.4668c-.03906 0-.07227-.0127-.09766-.03906-.02637-.02539-.03906-.05859-.03906-.09863v-.20312c0-.04004.0127-.07227.03906-.09863.02539-.02539.05859-.03906.09766-.03906h.4668v-.99805c0-.03906.0127-.07227.03906-.09863.02539-.02539.05859-.03809.09766-.03809h.28125c.04004 0 .07227.0127.09863.03809.02637.02637.03906.05957.03906.09863v.99805h.74121c.04395 0 .07812.01367.10156.03906.02344.02637.03516.05859.03516.09863v.20312c0 .04004-.01172.07324-.03516.09863-.02344.02637-.05762.03906-.10156.03906h-.74121v1.53613c0 .1875.03223.33496.0957.44238s.17676.16113.34082.16113h.36426c.04004 0 .07324.0127.09863.03906.02539.02539.03906.05859.03906.09863v.21484c0 .04004-.01367.07324-.03906.09863-.02539.02637-.05859.03906-.09863.03906h-.41211z" fill="#25357a"/><path d="m567.04688 135.28418c-.03125 0-.05957-.01172-.08398-.03613-.02344-.02344-.03516-.05176-.03516-.08398 0-.01562.00195-.03125.00586-.04688.00391-.0166.01172-.03613.02344-.06055l.46094-1.09375-1.1416-2.69531c-.02051-.04785-.03027-.08203-.03027-.10156 0-.03613.01172-.06543.03613-.08984.02441-.02344.05371-.03613.08984-.03613h.29199c.04492 0 .07715.01074.09961.03027.02148.01953.03711.04395.04492.07129l.9082 2.17578.93164-2.17578c.0127-.02734.0293-.05176.05078-.07129.02246-.01953.05469-.03027.09961-.03027h.28125c.03516 0 .06445.0127.08887.03613.02441.02441.03613.05176.03613.08398 0 .01953-.00977.05566-.03027.10742l-1.69727 3.91504c-.01172.02734-.02832.05176-.05078.07129-.02246.02051-.05469.03027-.09863.03027z" fill="#25357a"/><path d="m571.32617 134.14844c-.04297 0-.07715-.0127-.10156-.03906-.02344-.02539-.03516-.05859-.03516-.09863v-3.90918c0-.03906.01172-.07227.03516-.09863.02441-.02539.05859-.03809.10156-.03809h.31738c.04004 0 .07324.0127.09863.03809.02539.02637.03906.05957.03906.09863v3.52734h1.98438c.04297 0 .07812.0127.10449.03809.02637.02637.03906.06152.03906.10449v.23926c0 .04004-.0127.07324-.03906.09863-.02637.02637-.06152.03906-.10449.03906z" fill="#25357a"/><path d="m575.34375 134.20801c-.19922 0-.38086-.04004-.54395-.11914-.16309-.08008-.29492-.1875-.39453-.32324-.09961-.13477-.14941-.28809-.14941-.45996 0-.27539.11133-.49414.33398-.65723.22363-.16309.51465-.27148.87305-.32324l.89062-.125v-.17383c0-.19141-.05469-.34082-.16406-.44824s-.28809-.16113-.53516-.16113c-.17578 0-.31836.03613-.42969.10742-.1123.07227-.18945.16309-.2334.27539-.02441.05957-.06543.08887-.12598.08887h-.26855c-.04395 0-.07715-.0127-.09863-.03809-.02148-.02637-.0332-.05664-.0332-.09277 0-.05957.02344-.13379.06836-.22168.04688-.08691.11719-.17285.21289-.25684.0957-.08301.21777-.1543.36719-.21191s.33203-.08691.54688-.08691c.23926 0 .44043.03125.60352.09277.16406.06152.29297.14453.38574.24805.09375.10352.16113.2207.2041.35254.04102.13184.0625.26562.0625.40039v1.93652c0 .04004-.01367.07324-.03906.09863-.02637.02637-.05859.03906-.09863.03906h-.27539c-.04395 0-.07715-.0127-.10156-.03906-.02441-.02539-.03613-.05859-.03613-.09863v-.25684c-.05078.07129-.12109.14258-.20898.21191-.08789.07031-.19727.12793-.32812.17383-.13184.0459-.29297.06836-.48438.06836zm.125-.44824c.16406 0 .3125-.03418.44922-.10449.13477-.06934.24219-.17773.31934-.3252s.11621-.33301.11621-.55664v-.16699l-.69336.10156c-.2832.04004-.49609.10645-.63867.2002-.14453.09375-.21582.21191-.21582.35547 0 .11133.03223.2041.09863.27832.06641.07324.14941.12793.25098.16406s.20605.05371.31348.05371z" fill="#25357a"/><path d="m577.91309 134.14844c-.04004 0-.07324-.0127-.09863-.03906-.02539-.02539-.03906-.05859-.03906-.09863v-2.83301c0-.04004.01367-.07227.03906-.09863.02539-.02539.05859-.03906.09863-.03906h.28125c.04004 0 .07227.01367.09863.03906.02539.02637.03906.05859.03906.09863v.2627c.10352-.13477.23438-.24512.39062-.33105.1582-.08594.35938-.12891.60742-.12891.25879 0 .47852.05664.66016.1709.18164.11328.31836.27051.41211.47168s.14062.43555.14062.70215v1.68555c0 .04004-.0127.07324-.03906.09863-.02539.02637-.05859.03906-.09766.03906h-.29883c-.04102 0-.07324-.0127-.09961-.03906-.02539-.02539-.03906-.05859-.03906-.09863v-1.65527c0-.2793-.06738-.49707-.20312-.6543-.13477-.15723-.33398-.23633-.59766-.23633-.24609 0-.44531.0791-.59375.23633-.15039.15723-.22461.375-.22461.6543v1.65527c0 .04004-.01367.07324-.03906.09863-.02539.02637-.05859.03906-.09863.03906h-.29883z" fill="#25357a"/><path d="m582.64062 134.20801c-.41406 0-.74219-.12598-.98633-.37891-.24219-.25391-.37598-.59863-.40039-1.03711-.00391-.05176-.00586-.11914-.00586-.2002 0-.08203.00195-.14844.00586-.2002.0166-.2832.08203-.53125.19727-.74414.11621-.21387.27441-.37793.47559-.49316.20117-.11621.4375-.17383.70801-.17383.30273 0 .55664.06348.76172.19141.20605.12793.3623.30859.46973.54395.1084.23535.16113.50977.16113.8252v.10156c0 .04395-.0127.07715-.03906.10156-.02539.02344-.05859.03516-.09766.03516h-2.06836v.05469c.00781.16309.04395.31543.10742.45703.06445.1416.15625.25586.27734.34375.12207.08691.26465.13086.42773.13086.14355 0 .26367-.02148.35938-.06543s.17285-.09277.23242-.14648c.06055-.05371.09961-.09668.11914-.12891.03711-.04785.06445-.07617.08398-.08594s.05273-.01562.0957-.01562h.29297c.03613 0 .06641.01172.09277.0332.02637.02246.03613.05273.03223.09277-.00391.05957-.03516.13281-.09473.21777-.05957.08594-.14453.1709-.25488.25391-.10938.08398-.24414.15234-.40625.20703-.16113.05371-.34375.08008-.54688.08008zm-.81835-1.84082h1.6377v-.01758c0-.17969-.03223-.33887-.09863-.47852s-.16016-.25-.28418-.33203c-.12402-.08105-.27051-.12207-.44238-.12207-.1709 0-.31738.04102-.43945.12207-.12109.08203-.21387.19238-.27734.33203-.06445.13965-.0957.29883-.0957.47852v.01758z" fill="#25357a"/><path d="m479.1434 45.44851 36.70004.29999v75.70004l105.70002-.00003-.09998-75.69997h23.64697v160.64147l-23.64703-14.94152.10004-47.69999h-105.25696l-.44312 129.10001h-22.79995l.20004-104.79999-9.40003.20002v-24.5l-82.37683-.00004-29.70825 8.51226 14.72385-26.14166 17.96121-4.57059 79.40002-.09996v-38.60001h-4.70004z" fill="#e3e7fc"/><path d="m479.1434 45.44851 36.70004.29999v75.70004l105.70002-.00003-.09998-75.69997h23.64697v160.64147l-23.64703-14.94152.10004-47.69999h-105.25696l-.44312 129.10001h-22.79995l.20004-104.79999-9.40003.20002v-24.5l-82.37683-.00004-29.70825 8.51226 14.72385-26.14166 17.96121-4.57059 79.40002-.09996v-38.60001h-4.70004z" fill="url(#h)" opacity=".2"/><g fill="#25357a"><path d="m409.91406 282.69922c-.34668 0-.6377-.05371-.87207-.16113-.23535-.10742-.41602-.24609-.54102-.41504-.12598-.16992-.19238-.34766-.2002-.53516 0-.03223.0127-.06055.03906-.08691.02539-.02539.05664-.03906.0918-.03906h.30566c.04785 0 .08301.0127.10742.03613.02344.02344.04004.05176.04785.08398.02344.0957.07324.19043.14941.2832.0752.09375.18359.17188.3252.2334s.32422.09277.54688.09277c.34277 0 .59473-.06055.75684-.18262.16113-.12109.24121-.2832.24121-.4873 0-.13867-.04199-.25195-.12793-.33691-.08594-.08594-.2168-.16309-.3916-.23047-.17578-.06738-.40234-.1416-.68164-.2207-.29102-.08398-.53125-.17578-.72266-.27539s-.33398-.22266-.42773-.37012-.14062-.33496-.14062-.5625c0-.21484.05762-.40723.17383-.57617.11523-.16992.28223-.30371.50195-.40332.21875-.09961.48145-.14941.78906-.14941.24707 0 .46289.03223.64844.09766.18555.06641.33984.1543.46289.26367.12402.10938.2168.22656.28125.35254.06348.125.09766.24805.10156.36719 0 .02832-.00977.05469-.03027.08105-.01953.02637-.05176.03906-.0957.03906h-.31641c-.02832 0-.05664-.00781-.08691-.02441-.0293-.01562-.05273-.0459-.06836-.08984-.02441-.16309-.11621-.30078-.27539-.41211s-.36621-.16699-.62109-.16699c-.25977 0-.46973.0498-.63086.14941s-.24219.25488-.24219.46582c0 .13574.03809.24805.11328.33789.07617.08984.19531.16797.35938.23633.16309.06738.37598.13965.63965.21484.31836.08789.5791.18066.78223.27832s.35352.21875.45117.36426.14648.33203.14648.55859c0 .25098-.06543.46582-.19727.64258-.13086.17773-.31543.31348-.55273.40625-.2373.09375-.5166.14062-.83984.14062z"/><path d="m413.42285 282.63965c-.22266 0-.4043-.04297-.54395-.12891-.13965-.08496-.24121-.20703-.30469-.36426s-.0957-.34375-.0957-.55859v-1.57812h-.46582c-.04004 0-.07324-.0127-.09863-.03906-.02637-.02539-.03906-.05859-.03906-.09863v-.20312c0-.04004.0127-.07227.03906-.09863.02539-.02539.05859-.03906.09863-.03906h.46582v-.99805c0-.03906.0127-.07227.03906-.09863.02539-.02539.05859-.03809.09863-.03809h.28125c.03906 0 .07227.0127.09766.03809.02637.02637.03906.05957.03906.09863v.99805h.74121c.04395 0 .07812.01367.10156.03906.02441.02637.03613.05859.03613.09863v.20312c0 .04004-.01172.07324-.03613.09863-.02344.02637-.05762.03906-.10156.03906h-.74121v1.53613c0 .1875.03223.33496.0957.44238s.17773.16113.34082.16113h.36426c.04004 0 .07324.0127.09863.03906.02637.02539.03906.05859.03906.09863v.21484c0 .04004-.0127.07324-.03906.09863-.02539.02637-.05859.03906-.09863.03906h-.41211z"/><path d="m415.81934 282.69922c-.30273 0-.55566-.05762-.75879-.17285-.20312-.11621-.3584-.27637-.46582-.48145-.1084-.20508-.16797-.43945-.17969-.70215-.00391-.06738-.00586-.1543-.00586-.25977s.00195-.19043.00586-.25391c.01172-.26758.07227-.50293.18262-.70605.10938-.20312.26562-.3623.46875-.47754.20312-.11621.4541-.17383.75293-.17383s.5498.05762.75293.17383c.2041.11523.36035.27441.46973.47754s.16992.43848.18262.70605c.00391.06348.00586.14844.00586.25391s-.00195.19238-.00586.25977c-.0127.2627-.07227.49707-.17969.70215s-.2627.36523-.46582.48145c-.20312.11523-.45703.17285-.75977.17285zm0-.45996c.24707 0 .44434-.0791.5918-.23633s.22754-.3877.23926-.69043c.00391-.05957.00586-.13477.00586-.22656s-.00195-.16797-.00586-.22754c-.01172-.30273-.0918-.5332-.23926-.69043s-.34473-.23633-.5918-.23633-.44531.0791-.59473.23633-.22754.3877-.23535.69043c-.00488.05957-.00684.13574-.00684.22754s.00195.16699.00684.22656c.00781.30273.08594.5332.23535.69043s.34766.23633.59473.23633z"/><path d="m418.11426 282.63965c-.03906 0-.07227-.0127-.09863-.03906-.02539-.02539-.03809-.05859-.03809-.09863v-2.83301c0-.04004.0127-.07227.03809-.09863.02637-.02539.05957-.03906.09863-.03906h.28125c.04004 0 .07227.01367.09863.03906.02637.02637.03906.05859.03906.09863v.2627c.10352-.13477.23438-.24512.3916-.33105s.35938-.12891.60645-.12891c.25879 0 .47949.05664.66016.1709.18164.11328.31934.27051.41309.47168.09277.20117.13965.43555.13965.70215v1.68555c0 .04004-.0127.07324-.03809.09863-.02637.02637-.05957.03906-.09863.03906h-.29883c-.04004 0-.07324-.0127-.09863-.03906-.02637-.02539-.03906-.05859-.03906-.09863v-1.65527c0-.2793-.06836-.49707-.20312-.6543-.13574-.15723-.33496-.23633-.59766-.23633-.24707 0-.44531.0791-.59473.23633s-.22461.375-.22461.6543v1.65527c0 .04004-.0127.07324-.03906.09863-.02539.02637-.05859.03906-.09863.03906h-.29883z"/><path d="m422.84277 282.69922c-.41504 0-.74316-.12598-.98633-.37891-.24316-.25391-.37695-.59863-.40039-1.03711-.00391-.05176-.00586-.11914-.00586-.2002 0-.08203.00195-.14844.00586-.2002.01562-.2832.08105-.53125.19727-.74414.11523-.21387.27344-.37793.47461-.49316.20117-.11621.4375-.17383.70898-.17383.30273 0 .55664.06348.76172.19141s.36133.30859.46875.54395c.1084.23535.16211.50977.16211.8252v.10156c0 .04395-.01367.07715-.03906.10156-.02637.02344-.05859.03516-.09863.03516h-2.06836v.05469c.00781.16309.04395.31543.10742.45703.06445.1416.15625.25586.27832.34375.12109.08691.26367.13086.42773.13086.14258 0 .2627-.02148.3584-.06543s.17285-.09277.2334-.14648c.05957-.05371.09863-.09668.11914-.12891.03613-.04785.06348-.07617.08398-.08594.01953-.00977.05176-.01562.0957-.01562h.29199c.03613 0 .06738.01172.09277.0332.02637.02246.03711.05273.0332.09277-.00391.05957-.03613.13281-.0957.21777-.05957.08594-.14453.1709-.25391.25391-.10938.08398-.24512.15234-.40625.20703-.16211.05371-.34375.08008-.54688.08008zm-.81933-1.84082h1.6377v-.01758c0-.17969-.03223-.33887-.09863-.47852-.06543-.13965-.16016-.25-.28418-.33203-.12305-.08105-.27051-.12207-.44141-.12207-.17188 0-.31836.04102-.43945.12207-.12207.08203-.21484.19238-.27832.33203s-.0957.29883-.0957.47852v.01758z"/><path d="m425.37695 283.77539c-.03223 0-.06055-.01172-.08398-.03613-.02441-.02344-.03613-.05176-.03613-.08398 0-.01562.00195-.03125.00586-.04688.00391-.0166.0127-.03613.02441-.06055l.45996-1.09375-1.1416-2.69531c-.01953-.04785-.03027-.08203-.03027-.10156 0-.03613.0127-.06543.03613-.08984.02441-.02344.05371-.03613.08984-.03613h.29297c.04395 0 .07617.01074.09863.03027.02148.01953.03711.04395.04492.07129l.9082 2.17578.93262-2.17578c.01172-.02734.02832-.05176.05078-.07129.02148-.01953.05469-.03027.09863-.03027h.28125c.03516 0 .06543.0127.08887.03613.02441.02441.03613.05176.03613.08398 0 .01953-.00977.05566-.03027.10742l-1.69727 3.91504c-.01172.02734-.02832.05176-.05078.07129-.02148.02051-.05469.03027-.09863.03027z"/><path d="m430.86328 282.69922c-.34668 0-.6377-.05371-.87207-.16113-.23535-.10742-.41602-.24609-.54102-.41504-.12598-.16992-.19238-.34766-.2002-.53516 0-.03223.0127-.06055.03906-.08691.02539-.02539.05664-.03906.0918-.03906h.30566c.04785 0 .08301.0127.10742.03613.02344.02344.04004.05176.04785.08398.02344.0957.07324.19043.14941.2832.0752.09375.18359.17188.3252.2334s.32422.09277.54688.09277c.34277 0 .59473-.06055.75684-.18262.16113-.12109.24121-.2832.24121-.4873 0-.13867-.04199-.25195-.12793-.33691-.08594-.08594-.2168-.16309-.3916-.23047-.17578-.06738-.40234-.1416-.68164-.2207-.29102-.08398-.53125-.17578-.72266-.27539s-.33398-.22266-.42773-.37012-.14062-.33496-.14062-.5625c0-.21484.05762-.40723.17383-.57617.11523-.16992.28223-.30371.50195-.40332.21875-.09961.48145-.14941.78906-.14941.24707 0 .46289.03223.64844.09766.18555.06641.33984.1543.46289.26367.12402.10938.2168.22656.28125.35254.06348.125.09766.24805.10156.36719 0 .02832-.00977.05469-.03027.08105-.01953.02637-.05176.03906-.0957.03906h-.31641c-.02832 0-.05664-.00781-.08691-.02441-.0293-.01562-.05273-.0459-.06836-.08984-.02441-.16309-.11621-.30078-.27539-.41211s-.36621-.16699-.62109-.16699c-.25977 0-.46973.0498-.63086.14941s-.24219.25488-.24219.46582c0 .13574.03809.24805.11328.33789.07617.08984.19531.16797.35938.23633.16309.06738.37598.13965.63965.21484.31836.08789.5791.18066.78223.27832s.35352.21875.45117.36426.14648.33203.14648.55859c0 .25098-.06543.46582-.19727.64258-.13086.17773-.31543.31348-.55273.40625-.2373.09375-.5166.14062-.83984.14062z"/><path d="m434.37207 282.63965c-.22363 0-.40527-.04297-.54395-.12891-.13965-.08496-.24121-.20703-.30469-.36426-.06445-.15723-.0957-.34375-.0957-.55859v-1.57812h-.4668c-.04004 0-.07227-.0127-.09863-.03906-.02539-.02539-.03906-.05859-.03906-.09863v-.20312c0-.04004.01367-.07227.03906-.09863.02637-.02539.05859-.03906.09863-.03906h.4668v-.99805c0-.03906.0127-.07227.03809-.09863.02637-.02539.05957-.03809.09863-.03809h.28125c.04004 0 .07227.0127.09863.03809.02539.02637.03906.05957.03906.09863v.99805h.74121c.04395 0 .07715.01367.10156.03906.02344.02637.03516.05859.03516.09863v.20312c0 .04004-.01172.07324-.03516.09863-.02441.02637-.05762.03906-.10156.03906h-.74121v1.53613c0 .1875.03125.33496.0957.44238.06348.10742.17676.16113.34082.16113h.36426c.04004 0 .07227.0127.09863.03906.02539.02539.03906.05859.03906.09863v.21484c0 .04004-.01367.07324-.03906.09863-.02637.02637-.05859.03906-.09863.03906h-.41211z"/><path d="m435.59082 282.63965c-.04004 0-.07227-.0127-.09863-.03906-.02539-.02539-.03906-.05859-.03906-.09863v-.42969c0-.04004.01367-.07324.03906-.09863.02637-.02637.05859-.03906.09863-.03906h.43066c.03906 0 .07324.0127.10156.03906.02734.02539.04199.05859.04199.09863v.42969c0 .04004-.01465.07324-.04199.09863-.02832.02637-.0625.03906-.10156.03906z"/><path d="m356.2998 331.0127c0-.05176.01367-.09277.04199-.12305.02734-.0293.06738-.05078.11914-.0625l3.83789-.77051c.01562-.00391.0293-.00586.04102-.00586h.02441c.03125 0 .05957.01172.08398.03516.02344.02441.03516.05176.03516.08398v.31055c0 .08398-.0332.13184-.10156.14355l-3.08398.60938 2.11621.64551c.03516.0127.06836.0332.09863.06348.0293.0293.04492.07227.04492.12793v.22168c0 .05957-.01562.10352-.04492.13086-.03027.02832-.06348.0459-.09863.05371l-2.11621.65234 3.08398.60352c.06836.01172.10156.06152.10156.14941v.31055c0 .03223-.01172.05957-.03516.08398-.02441.02344-.05273.03516-.08398.03516-.00391 0-.01172-.00098-.02441-.00293-.01172-.00195-.02539-.00293-.04102-.00293l-3.83789-.77051c-.05176-.01172-.0918-.0332-.11914-.06348-.02832-.0293-.04199-.07031-.04199-.12207v-.2334c0-.05566.01367-.09961.04199-.13086.02734-.03223.06348-.05371.10742-.06641l2.27734-.74121-2.27734-.73438c-.04395-.0166-.08008-.03906-.10742-.06934-.02832-.0293-.04199-.07227-.04199-.12793v-.2334z"/><path d="m356.2998 335.1543c0-.03906.0127-.07227.03906-.09863.02539-.02539.05859-.03809.09863-.03809h2.83301c.04004 0 .07227.0127.09863.03809.02539.02637.03906.05957.03906.09863v.28711c0 .04004-.01367.07324-.03906.09863-.02637.02637-.05859.03906-.09863.03906h-2.83301c-.04004 0-.07324-.0127-.09863-.03906-.02637-.02539-.03906-.05859-.03906-.09863zm3.6875-.04785c0-.03906.0127-.07227.03906-.09863.02637-.02539.05859-.03809.09863-.03809h.32324c.03906 0 .07324.0127.10156.03809.02734.02637.04102.05957.04102.09863v.37695c0 .04004-.01367.07422-.04102.10156-.02832.02832-.0625.04199-.10156.04199h-.32324c-.04004 0-.07227-.01367-.09863-.04199-.02637-.02734-.03906-.06152-.03906-.10156z"/><path d="m356.2998 336.60059c0-.03906.0127-.07227.03906-.09863.02539-.02539.05859-.03809.09863-.03809h2.83301c.04004 0 .07227.0127.09863.03809.02539.02637.03906.05957.03906.09863v.28125c0 .04004-.01367.07227-.03906.09863-.02637.02637-.05859.03906-.09863.03906h-.2627c.13477.10352.24512.23438.33105.3916s.12891.35938.12891.60645c0 .25879-.05664.47949-.1709.66016-.11328.18164-.27051.31934-.47168.41309-.20117.09277-.43555.13965-.70215.13965h-1.68555c-.04004 0-.07324-.0127-.09863-.03809-.02637-.02637-.03906-.05957-.03906-.09863v-.29883c0-.04004.0127-.07324.03906-.09863.02539-.02637.05859-.03906.09863-.03906h1.65527c.2793 0 .49707-.06836.6543-.20312.15723-.13574.23633-.33496.23633-.59766 0-.24707-.0791-.44531-.23633-.59473s-.375-.22461-.6543-.22461h-1.65527c-.04004 0-.07324-.0127-.09863-.03906-.02637-.02539-.03906-.05859-.03906-.09863v-.29883z"/><path d="m356.24023 341.34082c0-.2832.05469-.52734.16406-.73242s.2666-.36328.47266-.47461c.20508-.1123.45117-.17188.7373-.17969.06055-.00391.13965-.00586.23926-.00586s.17969.00195.23926.00586c.28711.00781.5332.06738.73828.17969.20508.11133.3623.26953.47266.47461.10938.20508.16406.44922.16406.73242 0 .23145-.03223.42969-.0957.59473s-.14551.30176-.24512.40918-.20703.18848-.32324.24219c-.11523.05371-.22461.08301-.32812.08691-.04004.00391-.07227-.00781-.0957-.03613-.02441-.02832-.03613-.06152-.03613-.10156v-.28711c0-.04004.00879-.06934.02734-.08984.01758-.01953.04883-.03906.09277-.05957.19434-.07129.33203-.16895.41211-.29297.0791-.12305.11914-.27637.11914-.45996 0-.23926-.07324-.43359-.2207-.58301s-.38477-.22949-.71094-.24219c-.14355-.00391-.2832-.00391-.41895 0-.33105.0127-.56836.09277-.71387.24219s-.21875.34375-.21875.58301c0 .18359.04004.33691.12012.45996.0791.12402.2168.22168.41211.29297.04395.02051.0752.04004.0957.05957.01953.02051.03027.0498.03027.08984v.28711c0 .04004-.01367.07324-.03906.10156-.02637.02832-.05859.04004-.09863.03613-.08398-.00391-.16992-.02246-.25684-.05371-.08789-.03223-.17676-.08301-.2666-.15234-.08984-.07031-.16895-.15723-.23926-.26074-.06934-.10352-.125-.22656-.16699-.37012s-.0625-.30859-.0625-.49609z"/><path d="m356.2998 343.52832c0-.04004.0127-.07227.03906-.09863.02539-.02637.05859-.03906.09863-.03906h3.96875c.03906 0 .07227.0127.09863.03906.02539.02637.03809.05859.03809.09863v.29883c0 .04395-.0127.07812-.03809.10156-.02637.02441-.05957.03613-.09863.03613h-1.39258c.13477.10742.24512.23926.32812.39453.08398.15527.12598.35254.12598.5918 0 .25879-.05664.47852-.1709.66016-.11328.18164-.27051.31836-.47168.41211s-.43555.14062-.70215.14062h-1.68555c-.04004 0-.07324-.01172-.09863-.03613-.02637-.02344-.03906-.05762-.03906-.10156v-.29883c0-.03906.0127-.07227.03906-.09863.02539-.02539.05859-.03809.09863-.03809h1.65527c.2793 0 .49707-.06836.6543-.20312.15723-.13574.23633-.33496.23633-.59863 0-.24707-.0791-.44629-.23633-.59766s-.375-.22656-.6543-.22656h-1.65527c-.04004 0-.07324-.01172-.09863-.03613-.02637-.02344-.03906-.05762-.03906-.10156v-.29883z"/><path d="m356.24023 348.26758c0-.41406.12598-.74316.37891-.98633.25391-.24316.59863-.37598 1.03711-.40039.05176-.00391.11914-.00586.2002-.00586.08203 0 .14844.00195.2002.00586.2832.0166.53125.08203.74414.19727.21387.11621.37793.27441.49316.47559.11621.20117.17383.4375.17383.70801 0 .30273-.06348.55664-.19141.76172-.12793.20605-.30859.3623-.54395.46973s-.50977.16113-.8252.16113h-.10156c-.04395 0-.07715-.0127-.10156-.03906-.02344-.02539-.03516-.05859-.03516-.09863v-2.06738h-.05469c-.16309.00781-.31543.04395-.45703.10742s-.25586.15625-.34375.27734c-.08691.12207-.13086.26465-.13086.42773 0 .14355.02148.2627.06543.3584s.09277.17383.14648.2334.09668.09961.12891.11914c.04785.03613.07617.06445.08594.08398s.01562.05176.01562.0957v.29297c0 .03613-.01172.06641-.0332.09277-.02246.02539-.05273.03613-.09277.03223-.05957-.00391-.13281-.03516-.21777-.09473-.08594-.06055-.1709-.14453-.25391-.25488-.08398-.10938-.15234-.24512-.20703-.40625-.05371-.16113-.08008-.34375-.08008-.54688zm1.84082-.81836v1.6377h.01758c.17969 0 .33887-.0332.47852-.09863.13965-.06641.25-.16113.33203-.28418.08105-.12402.12207-.27148.12207-.44238s-.04102-.31738-.12207-.43945c-.08203-.12109-.19238-.21387-.33203-.27734-.13965-.06445-.29883-.0957-.47852-.0957h-.01758z"/><path d="m356.24023 351.44727c0-.22266.02734-.41406.08301-.57324.05664-.15918.12402-.28906.2041-.38867.0791-.09961.15918-.1748.23828-.22461.08008-.0498.14355-.07617.19141-.08008.04395-.00391.07812.00977.10156.04199.02441.03125.03613.06348.03613.0957v.26855c0 .01953-.00293.03711-.00879.05078s-.02344.0332-.05078.05664c-.05566.05176-.11133.10938-.16797.17383-.05566.06348-.10156.1416-.13672.23535-.03613.09375-.05371.21094-.05371.34961 0 .2041.03809.37109.11621.50293.07715.13086.19238.19727.34375.19727.09961 0 .17871-.02734.23926-.08105.05957-.05371.11328-.14941.16113-.28711s.09766-.3252.14941-.56445c.05566-.23926.12402-.42871.20605-.56836s.17969-.23828.29297-.29883c.11328-.05957.24219-.08984.38574-.08984.14746 0 .29004.04395.42676.13184.1377.08789.25.21582.33789.38574.08789.16895.13184.38184.13184.63672 0 .20703-.02637.38379-.07812.53125s-.11621.26953-.19434.36523c-.07715.0957-.1543.16699-.22949.21484-.07617.04785-.13965.07422-.19141.07812-.04004.00391-.07324-.00879-.09863-.03613-.02637-.02832-.03906-.05957-.03906-.0957v-.25098c0-.02832.00586-.05078.01758-.06836.0127-.01855.02637-.03516.04199-.05078.05176-.04004.10352-.08691.15527-.14062s.09473-.12402.12891-.20898c.03418-.08594.05078-.19824.05078-.33789 0-.19922-.04199-.34863-.125-.44824-.08398-.09961-.18945-.14941-.31738-.14941-.0752 0-.14355.02148-.20312.06543s-.11328.12793-.16113.25098-.09961.30664-.15527.5498c-.05176.2627-.12207.4707-.20996.62207-.08691.15137-.18848.25879-.30469.32227-.11523.06348-.24902.0957-.40039.0957-.16699 0-.32031-.04785-.45996-.14355s-.25-.23926-.33203-.42969c-.08105-.19141-.12207-.42676-.12207-.70605z"/><path d="m356.2998 354.62793c0-.22363.04297-.40527.12891-.54395.08496-.13965.20703-.24121.36426-.30469.15723-.06445.34375-.0957.55859-.0957h1.57812v-.4668c0-.04004.0127-.07227.03906-.09863.02539-.02539.05859-.03906.09863-.03906h.20312c.04004 0 .07227.01367.09863.03906.02539.02637.03906.05859.03906.09863v.4668h.99805c.03906 0 .07227.0127.09863.03809.02539.02637.03809.05957.03809.09863v.28125c0 .04004-.0127.07227-.03809.09863-.02637.02539-.05957.03906-.09863.03906h-.99805v.74121c0 .04395-.01367.07715-.03906.10156-.02637.02344-.05859.03516-.09863.03516h-.20312c-.04004 0-.07324-.01172-.09863-.03516-.02637-.02441-.03906-.05762-.03906-.10156v-.74121h-1.53613c-.1875 0-.33496.03125-.44238.0957-.10742.06348-.16113.17676-.16113.34082v.36426c0 .04004-.0127.07227-.03906.09863-.02539.02539-.05859.03906-.09863.03906h-.21484c-.04004 0-.07324-.01367-.09863-.03906-.02637-.02637-.03906-.05859-.03906-.09863v-.41211z"/><path d="m356.24023 356.99414c0-.41406.12598-.74316.37891-.98633.25391-.24316.59863-.37598 1.03711-.40039.05176-.00391.11914-.00586.2002-.00586.08203 0 .14844.00195.2002.00586.2832.0166.53125.08203.74414.19727.21387.11621.37793.27441.49316.47559.11621.20117.17383.4375.17383.70801 0 .30273-.06348.55664-.19141.76172-.12793.20605-.30859.3623-.54395.46973s-.50977.16113-.8252.16113h-.10156c-.04395 0-.07715-.0127-.10156-.03906-.02344-.02539-.03516-.05859-.03516-.09863v-2.06738h-.05469c-.16309.00781-.31543.04395-.45703.10742s-.25586.15625-.34375.27734c-.08691.12207-.13086.26465-.13086.42773 0 .14355.02148.2627.06543.3584s.09277.17383.14648.2334.09668.09961.12891.11914c.04785.03613.07617.06445.08594.08398s.01562.05176.01562.0957v.29297c0 .03613-.01172.06641-.0332.09277-.02246.02539-.05273.03613-.09277.03223-.05957-.00391-.13281-.03516-.21777-.09473-.08594-.06055-.1709-.14453-.25391-.25488-.08398-.10938-.15234-.24512-.20703-.40625-.05371-.16113-.08008-.34375-.08008-.54688zm1.84082-.81836v1.6377h.01758c.17969 0 .33887-.0332.47852-.09863.13965-.06641.25-.16113.33203-.28418.08105-.12402.12207-.27148.12207-.44238s-.04102-.31738-.12207-.43945c-.08203-.12109-.19238-.21387-.33203-.27734-.13965-.06445-.29883-.0957-.47852-.0957h-.01758z"/><path d="m356.2998 359.23535c0-.04004.0127-.07324.03906-.09863.02539-.02637.05859-.03906.09863-.03906h2.82715c.03906 0 .07324.0127.10156.03906.02734.02539.04199.05859.04199.09863v.27441c0 .04004-.01465.07422-.04199.10254-.02832.02734-.0625.04102-.10156.04102h-.26367c.13574.08008.2373.18945.30566.3291.06738.13965.10156.30859.10156.50781v.2334c0 .04004-.01367.07227-.03906.09863-.02637.02539-.05859.03906-.09863.03906h-.24512c-.04004 0-.07227-.01367-.0957-.03906-.02344-.02637-.03613-.05859-.03613-.09863v-.3584c0-.21582-.0625-.38477-.18848-.50879-.125-.12305-.29492-.18457-.51074-.18457h-1.75684c-.04004 0-.07324-.01465-.09863-.04199-.02637-.02832-.03906-.06152-.03906-.10156z"/><path d="m356.2998 363.38379c0-.05176.0127-.0918.03906-.12012.02539-.02734.0625-.05176.11035-.07129l2.77344-.84863c.01953-.00781.04004-.01172.05957-.01172.03613 0 .06543.0127.08984.03809.02344.02637.03613.05469.03613.08691v.2627c0 .04395-.0127.07812-.03613.10156-.02441.02441-.0459.04004-.06543.04785l-2.25391.66406 2.22949.71094c.02832.00781.05566.02539.08398.05078.02734.02637.04199.06445.04199.11621v.2041c0 .05176-.01465.09082-.04199.11914-.02832.02734-.05566.04395-.08398.04785l-2.22949.71094 2.25391.66406c.01953.00391.04102.01758.06543.04102.02344.02441.03613.05859.03613.10254v.26855c0 .03223-.0127.05957-.03613.08398-.02441.02344-.05371.03516-.08984.03516-.01953 0-.04004-.00391-.05957-.01172l-2.77344-.84277c-.04785-.01562-.08496-.03809-.11035-.06543-.02637-.02832-.03906-.07227-.03906-.13184v-.2334c0-.05176.0127-.09375.03906-.12793.02539-.03418.0625-.05664.11035-.06836l2.13965-.69336-2.13965-.69336c-.04785-.0166-.08496-.04004-.11035-.07227-.02637-.03223-.03906-.0752-.03906-.13184v-.23242z"/><path d="m356.24023 368.12891c0-.19922.04004-.38086.11914-.54395.08008-.16309.1875-.29492.32324-.39453.13477-.09961.28809-.14941.45996-.14941.27539 0 .49414.11133.65723.33496.16309.22266.27148.51367.32324.87305l.125.88965h.17383c.19141 0 .34082-.05469.44824-.16406s.16113-.28809.16113-.53516c0-.1748-.03613-.31836-.10742-.42969-.07227-.1123-.16309-.18945-.27539-.2334-.05957-.02344-.08887-.06543-.08887-.12598v-.26855c0-.04395.0127-.07715.03809-.09863.02637-.02148.05664-.0332.09277-.0332.05957 0 .13379.02344.22168.06934.08691.0459.17285.11621.25684.21191.08301.0957.1543.21777.21191.36719s.08691.33203.08691.54785c0 .23828-.03125.43945-.09277.60352-.06152.16309-.14453.29199-.24805.38477-.10352.09375-.2207.16211-.35254.2041-.13184.04102-.26562.0625-.40039.0625h-1.93652c-.04004 0-.07324-.01367-.09863-.03906-.02637-.02637-.03906-.05859-.03906-.09863v-.27539c0-.04297.0127-.07715.03906-.10156.02539-.02344.05859-.03516.09863-.03516h.25684c-.07129-.05176-.14258-.12207-.21191-.20996-.07031-.08691-.12793-.19629-.17383-.32812s-.06836-.29297-.06836-.48438zm.44825.12597c0 .16309.03418.3125.10449.44824.06934.13477.17773.24219.3252.31934.14746.07812.33301.11621.55664.11621h.16699l-.10156-.69238c-.04004-.2832-.10645-.49609-.2002-.63965s-.21191-.21582-.35547-.21582c-.11133 0-.2041.0332-.27832.09863-.07324.06641-.12793.14941-.16406.25098s-.05371.20605-.05371.31445z"/><path d="m356.2998 370.70508c0-.04004.0127-.07227.03906-.09863.02539-.02637.05859-.03906.09863-.03906h3.96875c.03906 0 .07227.0127.09863.03906.02539.02637.03809.05859.03809.09863v.28125c0 .04395-.0127.07715-.03809.10156-.02637.02344-.05957.03516-.09863.03516h-3.96875c-.04004 0-.07324-.01172-.09863-.03516-.02637-.02441-.03906-.05762-.03906-.10156z"/><path d="m356.2998 372.15723c0-.04004.0127-.07227.03906-.09863.02539-.02637.05859-.03906.09863-.03906h3.96875c.03906 0 .07227.0127.09863.03906.02539.02637.03809.05859.03809.09863v.28125c0 .03906-.0127.07227-.03809.09863-.02637.02539-.05957.03809-.09863.03809h-2.08008l.98047 1.17773c.03906.04785.06641.08496.08008.11035.01367.02637.02148.06934.02148.12891v.31641c0 .03613-.0127.06641-.03613.08984-.02441.02441-.05371.03613-.08984.03613-.01562 0-.03418-.00488-.05371-.01465-.01953-.01074-.04004-.0293-.05957-.05762l-1.14746-1.37988-1.48828 1.5293c-.04004.04785-.07617.07227-.10742.07227-.03613 0-.06641-.01172-.08984-.03613-.02441-.02344-.03613-.05371-.03613-.08984v-.31055c0-.05957.00684-.10352.02051-.13086.01465-.02832.04102-.06445.08105-.1084l1.27344-1.33301h-1.2373c-.04004 0-.07324-.0127-.09863-.03809-.02637-.02637-.03906-.05957-.03906-.09863v-.28125z"/><path d="m572.8584 283.09375c-.34668 0-.6377-.05371-.87305-.16113s-.41504-.24609-.54102-.41504c-.125-.16992-.19238-.34766-.2002-.53516 0-.03223.01367-.06055.03906-.08691.02637-.02539.05664-.03906.09277-.03906h.30469c.04785 0 .08398.0127.10742.03613.02441.02344.04004.05176.04785.08398.02441.0957.07422.19043.14941.2832.07617.09375.18457.17188.32617.2334s.32324.09277.54688.09277c.34277 0 .59473-.06055.75586-.18262.16113-.12109.24219-.2832.24219-.4873 0-.13867-.04297-.25195-.12891-.33691-.08496-.08594-.21582-.16309-.3916-.23047-.1748-.06738-.40234-.1416-.68066-.2207-.29102-.08398-.53223-.17578-.72363-.27539s-.33398-.22266-.42676-.37012c-.09375-.14746-.14062-.33496-.14062-.5625 0-.21484.05762-.40723.17285-.57617.11621-.16992.2832-.30371.50195-.40332.21973-.09961.48242-.14941.78906-.14941.24707 0 .46387.03223.64844.09766.18555.06641.33984.1543.46387.26367.12305.10938.2168.22656.28027.35254.06348.125.09766.24805.10156.36719 0 .02832-.00977.05469-.0293.08105-.02051.02637-.05176.03906-.0957.03906h-.31738c-.02734 0-.05664-.00781-.08594-.02441-.03027-.01562-.05273-.0459-.06934-.08984-.02344-.16309-.11523-.30078-.27441-.41211-.16016-.11133-.36719-.16699-.62207-.16699-.25879 0-.46875.0498-.62988.14941-.16211.09961-.24219.25488-.24219.46582 0 .13574.03711.24805.11328.33789.0752.08984.19531.16797.3584.23633.16309.06738.37695.13965.63965.21484.31836.08789.58008.18066.7832.27832s.35352.21875.45117.36426.14648.33203.14648.55859c0 .25098-.06543.46582-.19727.64258-.13184.17773-.31641.31348-.55273.40625-.2373.09375-.51758.14062-.83984.14062z"/><path d="m576.36719 283.03418c-.22363 0-.40527-.04297-.54395-.12891-.13965-.08496-.24121-.20703-.30469-.36426-.06445-.15723-.0957-.34375-.0957-.55859v-1.57812h-.4668c-.04004 0-.07227-.0127-.09863-.03906-.02539-.02539-.03906-.05859-.03906-.09863v-.20312c0-.04004.01367-.07227.03906-.09863.02637-.02539.05859-.03906.09863-.03906h.4668v-.99805c0-.03906.0127-.07227.03809-.09863.02637-.02539.05957-.03809.09863-.03809h.28125c.04004 0 .07227.0127.09863.03809.02539.02637.03906.05957.03906.09863v.99805h.74121c.04395 0 .07715.01367.10156.03906.02344.02637.03516.05859.03516.09863v.20312c0 .04004-.01172.07324-.03516.09863-.02441.02637-.05762.03906-.10156.03906h-.74121v1.53613c0 .1875.03125.33496.0957.44238.06348.10742.17676.16113.34082.16113h.36426c.04004 0 .07227.0127.09863.03906.02539.02539.03906.05859.03906.09863v.21484c0 .04004-.01367.07324-.03906.09863-.02637.02637-.05859.03906-.09863.03906h-.41211z"/><path d="m578.76367 283.09375c-.30273 0-.55566-.05762-.75879-.17285-.2041-.11621-.35938-.27637-.4668-.48145s-.16699-.43945-.17871-.70215c-.00488-.06738-.00684-.1543-.00684-.25977s.00195-.19043.00684-.25391c.01172-.26758.07227-.50293.18164-.70605s.2666-.3623.46973-.47754c.20312-.11621.4541-.17383.75293-.17383s.5498.05762.75293.17383c.20312.11523.35938.27441.46875.47754.11035.20312.1709.43848.18262.70605.00391.06348.00586.14844.00586.25391s-.00195.19238-.00586.25977c-.01172.2627-.07129.49707-.17969.70215-.10742.20508-.2627.36523-.46582.48145-.20312.11523-.45605.17285-.75879.17285zm0-.45996c.24707 0 .44434-.0791.5918-.23633s.22656-.3877.23926-.69043c.00391-.05957.00586-.13477.00586-.22656s-.00195-.16797-.00586-.22754c-.0127-.30273-.0918-.5332-.23926-.69043s-.34473-.23633-.5918-.23633-.44531.0791-.59473.23633-.22852.3877-.23633.69043c-.00391.05957-.00586.13574-.00586.22754s.00195.16699.00586.22656c.00781.30273.08691.5332.23633.69043s.34766.23633.59473.23633z"/><path d="m581.05859 283.03418c-.04004 0-.07324-.0127-.09863-.03906-.02637-.02539-.03906-.05859-.03906-.09863v-2.83301c0-.04004.0127-.07227.03906-.09863.02539-.02539.05859-.03906.09863-.03906h.28125c.03906 0 .07227.01367.09863.03906.02539.02637.03809.05859.03809.09863v.2627c.10352-.13477.23438-.24512.3916-.33105s.35938-.12891.60645-.12891c.25977 0 .47949.05664.66113.1709.18066.11328.31836.27051.41211.47168s.14062.43555.14062.70215v1.68555c0 .04004-.0127.07324-.03906.09863-.02539.02637-.05859.03906-.09863.03906h-.29883c-.04004 0-.07227-.0127-.09863-.03906-.02539-.02539-.03906-.05859-.03906-.09863v-1.65527c0-.2793-.06738-.49707-.20312-.6543s-.33398-.23633-.59766-.23633c-.24707 0-.44531.0791-.59473.23633s-.22363.375-.22363.6543v1.65527c0 .04004-.01367.07324-.03906.09863-.02637.02637-.05859.03906-.09863.03906h-.29883z"/><path d="m585.78613 283.09375c-.41406 0-.74316-.12598-.98633-.37891-.24316-.25391-.37598-.59863-.40039-1.03711-.00391-.05176-.00586-.11914-.00586-.2002 0-.08203.00195-.14844.00586-.2002.0166-.2832.08203-.53125.19727-.74414.11621-.21387.27441-.37793.47559-.49316.20117-.11621.4375-.17383.70801-.17383.30273 0 .55664.06348.76172.19141.20605.12793.3623.30859.46973.54395s.16113.50977.16113.8252v.10156c0 .04395-.0127.07715-.03906.10156-.02539.02344-.05859.03516-.09863.03516h-2.06738v.05469c.00781.16309.04395.31543.10742.45703s.15625.25586.27734.34375c.12207.08691.26465.13086.42773.13086.14355 0 .2627-.02148.3584-.06543s.17383-.09277.2334-.14648.09961-.09668.11914-.12891c.03613-.04785.06445-.07617.08398-.08594s.05176-.01562.0957-.01562h.29297c.03613 0 .06641.01172.09277.0332.02539.02246.03613.05273.03223.09277-.00391.05957-.03516.13281-.09473.21777-.06055.08594-.14453.1709-.25488.25391-.10938.08398-.24512.15234-.40625.20703-.16113.05371-.34375.08008-.54688.08008zm-.81836-1.84082h1.6377v-.01758c0-.17969-.0332-.33887-.09863-.47852-.06641-.13965-.16113-.25-.28418-.33203-.12402-.08105-.27148-.12207-.44238-.12207s-.31738.04102-.43945.12207c-.12109.08203-.21387.19238-.27734.33203-.06445.13965-.0957.29883-.0957.47852v.01758z"/><path d="m588.32031 284.16992c-.03223 0-.05957-.01172-.08398-.03613-.02344-.02344-.03516-.05176-.03516-.08398 0-.01562.00195-.03125.00586-.04688.00391-.0166.01172-.03613.02344-.06055l.46094-1.09375-1.1416-2.69531c-.02051-.04785-.03027-.08203-.03027-.10156 0-.03613.01172-.06543.03613-.08984.02344-.02344.05371-.03613.08984-.03613h.29199c.04395 0 .07715.01074.09863.03027.02246.01953.03711.04395.04492.07129l.90918 2.17578.93164-2.17578c.0127-.02734.0293-.05176.05078-.07129.02246-.01953.05469-.03027.09863-.03027h.28125c.03613 0 .06543.0127.08984.03613.02344.02441.03613.05176.03613.08398 0 .01953-.01074.05566-.03027.10742l-1.69727 3.91504c-.01172.02734-.0293.05176-.05078.07129-.02246.02051-.05469.03027-.09863.03027h-.28125z"/><path d="m593.80762 283.09375c-.34668 0-.6377-.05371-.87305-.16113s-.41504-.24609-.54102-.41504c-.125-.16992-.19238-.34766-.2002-.53516 0-.03223.01367-.06055.03906-.08691.02637-.02539.05664-.03906.09277-.03906h.30469c.04785 0 .08398.0127.10742.03613.02441.02344.04004.05176.04785.08398.02441.0957.07422.19043.14941.2832.07617.09375.18457.17188.32617.2334s.32324.09277.54688.09277c.34277 0 .59473-.06055.75586-.18262.16113-.12109.24219-.2832.24219-.4873 0-.13867-.04297-.25195-.12891-.33691-.08496-.08594-.21582-.16309-.3916-.23047-.1748-.06738-.40234-.1416-.68066-.2207-.29102-.08398-.53223-.17578-.72363-.27539s-.33398-.22266-.42676-.37012c-.09375-.14746-.14062-.33496-.14062-.5625 0-.21484.05762-.40723.17285-.57617.11621-.16992.2832-.30371.50195-.40332.21973-.09961.48242-.14941.78906-.14941.24707 0 .46387.03223.64844.09766.18555.06641.33984.1543.46387.26367.12305.10938.2168.22656.28027.35254.06348.125.09766.24805.10156.36719 0 .02832-.00977.05469-.0293.08105-.02051.02637-.05176.03906-.0957.03906h-.31738c-.02734 0-.05664-.00781-.08594-.02441-.03027-.01562-.05273-.0459-.06934-.08984-.02344-.16309-.11523-.30078-.27441-.41211-.16016-.11133-.36719-.16699-.62207-.16699-.25879 0-.46875.0498-.62988.14941-.16211.09961-.24219.25488-.24219.46582 0 .13574.03711.24805.11328.33789.0752.08984.19531.16797.3584.23633.16309.06738.37695.13965.63965.21484.31836.08789.58008.18066.7832.27832s.35352.21875.45117.36426.14648.33203.14648.55859c0 .25098-.06543.46582-.19727.64258-.13184.17773-.31641.31348-.55273.40625-.2373.09375-.51758.14062-.83984.14062z"/><path d="m597.31543 283.03418c-.22266 0-.4043-.04297-.54395-.12891-.13965-.08496-.24121-.20703-.30469-.36426s-.0957-.34375-.0957-.55859v-1.57812h-.46582c-.04004 0-.07324-.0127-.09863-.03906-.02637-.02539-.03906-.05859-.03906-.09863v-.20312c0-.04004.0127-.07227.03906-.09863.02539-.02539.05859-.03906.09863-.03906h.46582v-.99805c0-.03906.0127-.07227.03906-.09863.02539-.02539.05859-.03809.09863-.03809h.28125c.03906 0 .07227.0127.09766.03809.02637.02637.03906.05957.03906.09863v.99805h.74121c.04395 0 .07812.01367.10156.03906.02441.02637.03613.05859.03613.09863v.20312c0 .04004-.01172.07324-.03613.09863-.02344.02637-.05762.03906-.10156.03906h-.74121v1.53613c0 .1875.03223.33496.0957.44238s.17773.16113.34082.16113h.36426c.04004 0 .07324.0127.09863.03906.02637.02539.03906.05859.03906.09863v.21484c0 .04004-.0127.07324-.03906.09863-.02539.02637-.05859.03906-.09863.03906h-.41211z"/><path d="m598.53516 283.03418c-.04004 0-.07324-.0127-.09863-.03906-.02637-.02539-.03906-.05859-.03906-.09863v-.42969c0-.04004.0127-.07324.03906-.09863.02539-.02637.05859-.03906.09863-.03906h.42969c.04004 0 .07422.0127.10156.03906.02832.02539.04199.05859.04199.09863v.42969c0 .04004-.01367.07324-.04199.09863-.02734.02637-.06152.03906-.10156.03906z"/><path d="m239.42188 284.57422c-.34668 0-.6377-.05371-.87207-.16113-.23535-.10742-.41602-.24609-.54102-.41504-.12598-.16992-.19238-.34766-.2002-.53516 0-.03223.0127-.06055.03906-.08691.02539-.02539.05664-.03906.0918-.03906h.30566c.04785 0 .08301.0127.10742.03613.02344.02344.04004.05176.04785.08398.02344.0957.07324.19043.14941.2832.0752.09375.18359.17188.3252.2334s.32422.09277.54688.09277c.34277 0 .59473-.06055.75684-.18262.16113-.12109.24121-.2832.24121-.4873 0-.13867-.04199-.25195-.12793-.33691-.08594-.08594-.2168-.16309-.3916-.23047-.17578-.06738-.40234-.1416-.68164-.2207-.29102-.08398-.53125-.17578-.72266-.27539s-.33398-.22266-.42773-.37012-.14062-.33496-.14062-.5625c0-.21484.05762-.40723.17383-.57617.11523-.16992.28223-.30371.50195-.40332.21875-.09961.48145-.14941.78906-.14941.24707 0 .46289.03223.64844.09766.18555.06641.33984.1543.46289.26367.12402.10938.2168.22656.28125.35254.06348.125.09766.24805.10156.36719 0 .02832-.00977.05469-.03027.08105-.01953.02637-.05176.03906-.0957.03906h-.31641c-.02832 0-.05664-.00781-.08691-.02441-.0293-.01562-.05273-.0459-.06836-.08984-.02441-.16309-.11621-.30078-.27539-.41211s-.36621-.16699-.62109-.16699c-.25977 0-.46973.0498-.63086.14941s-.24219.25488-.24219.46582c0 .13574.03809.24805.11328.33789.07617.08984.19531.16797.35938.23633.16309.06738.37598.13965.63965.21484.31836.08789.5791.18066.78223.27832s.35352.21875.45117.36426.14648.33203.14648.55859c0 .25098-.06543.46582-.19727.64258-.13086.17773-.31543.31348-.55273.40625-.2373.09375-.5166.14062-.83984.14062z"/><path d="m242.93066 284.51465c-.22266 0-.4043-.04297-.54395-.12891-.13965-.08496-.24121-.20703-.30469-.36426s-.0957-.34375-.0957-.55859v-1.57812h-.46582c-.04004 0-.07324-.0127-.09863-.03906-.02637-.02539-.03906-.05859-.03906-.09863v-.20312c0-.04004.0127-.07227.03906-.09863.02539-.02539.05859-.03906.09863-.03906h.46582v-.99805c0-.03906.0127-.07227.03906-.09863.02539-.02539.05859-.03809.09863-.03809h.28125c.03906 0 .07227.0127.09766.03809.02637.02637.03906.05957.03906.09863v.99805h.74121c.04395 0 .07812.01367.10156.03906.02441.02637.03613.05859.03613.09863v.20312c0 .04004-.01172.07324-.03613.09863-.02344.02637-.05762.03906-.10156.03906h-.74121v1.53613c0 .1875.03223.33496.0957.44238s.17773.16113.34082.16113h.36426c.04004 0 .07324.0127.09863.03906.02637.02539.03906.05859.03906.09863v.21484c0 .04004-.0127.07324-.03906.09863-.02539.02637-.05859.03906-.09863.03906h-.41211z"/><path d="m245.32715 284.57422c-.30273 0-.55566-.05762-.75879-.17285-.20312-.11621-.3584-.27637-.46582-.48145-.1084-.20508-.16797-.43945-.17969-.70215-.00391-.06738-.00586-.1543-.00586-.25977s.00195-.19043.00586-.25391c.01172-.26758.07227-.50293.18262-.70605.10938-.20312.26562-.3623.46875-.47754.20312-.11621.4541-.17383.75293-.17383s.5498.05762.75293.17383c.2041.11523.36035.27441.46973.47754s.16992.43848.18262.70605c.00391.06348.00586.14844.00586.25391s-.00195.19238-.00586.25977c-.0127.2627-.07227.49707-.17969.70215s-.2627.36523-.46582.48145c-.20312.11523-.45703.17285-.75977.17285zm0-.45996c.24707 0 .44434-.0791.5918-.23633s.22754-.3877.23926-.69043c.00391-.05957.00586-.13477.00586-.22656s-.00195-.16797-.00586-.22754c-.01172-.30273-.0918-.5332-.23926-.69043s-.34473-.23633-.5918-.23633-.44531.0791-.59473.23633-.22754.3877-.23535.69043c-.00488.05957-.00684.13574-.00684.22754s.00195.16699.00684.22656c.00781.30273.08594.5332.23535.69043s.34766.23633.59473.23633z"/><path d="m247.62207 284.51465c-.03906 0-.07227-.0127-.09863-.03906-.02539-.02539-.03809-.05859-.03809-.09863v-2.83301c0-.04004.0127-.07227.03809-.09863.02637-.02539.05957-.03906.09863-.03906h.28125c.04004 0 .07227.01367.09863.03906.02637.02637.03906.05859.03906.09863v.2627c.10352-.13477.23438-.24512.3916-.33105s.35938-.12891.60645-.12891c.25879 0 .47949.05664.66016.1709.18164.11328.31934.27051.41309.47168.09277.20117.13965.43555.13965.70215v1.68555c0 .04004-.0127.07324-.03809.09863-.02637.02637-.05957.03906-.09863.03906h-.29883c-.04004 0-.07324-.0127-.09863-.03906-.02637-.02539-.03906-.05859-.03906-.09863v-1.65527c0-.2793-.06836-.49707-.20312-.6543-.13574-.15723-.33496-.23633-.59766-.23633-.24707 0-.44531.0791-.59473.23633s-.22461.375-.22461.6543v1.65527c0 .04004-.0127.07324-.03906.09863-.02539.02637-.05859.03906-.09863.03906h-.29883z"/><path d="m252.35059 284.57422c-.41504 0-.74316-.12598-.98633-.37891-.24316-.25391-.37695-.59863-.40039-1.03711-.00391-.05176-.00586-.11914-.00586-.2002 0-.08203.00195-.14844.00586-.2002.01562-.2832.08105-.53125.19727-.74414.11523-.21387.27344-.37793.47461-.49316.20117-.11621.4375-.17383.70898-.17383.30273 0 .55664.06348.76172.19141s.36133.30859.46875.54395c.1084.23535.16211.50977.16211.8252v.10156c0 .04395-.01367.07715-.03906.10156-.02637.02344-.05859.03516-.09863.03516h-2.06836v.05469c.00781.16309.04395.31543.10742.45703.06445.1416.15625.25586.27832.34375.12109.08691.26367.13086.42773.13086.14258 0 .2627-.02148.3584-.06543s.17285-.09277.2334-.14648c.05957-.05371.09863-.09668.11914-.12891.03613-.04785.06348-.07617.08398-.08594.01953-.00977.05176-.01562.0957-.01562h.29199c.03613 0 .06738.01172.09277.0332.02637.02246.03711.05273.0332.09277-.00391.05957-.03613.13281-.0957.21777-.05957.08594-.14453.1709-.25391.25391-.10938.08398-.24512.15234-.40625.20703-.16211.05371-.34375.08008-.54688.08008zm-.81934-1.84082h1.6377v-.01758c0-.17969-.03223-.33887-.09863-.47852-.06543-.13965-.16016-.25-.28418-.33203-.12305-.08105-.27051-.12207-.44141-.12207-.17188 0-.31836.04102-.43945.12207-.12207.08203-.21484.19238-.27832.33203s-.0957.29883-.0957.47852v.01758z"/><path d="m254.88477 285.65039c-.03223 0-.06055-.01172-.08398-.03613-.02441-.02344-.03613-.05176-.03613-.08398 0-.01562.00195-.03125.00586-.04688.00391-.0166.0127-.03613.02441-.06055l.45996-1.09375-1.1416-2.69531c-.01953-.04785-.03027-.08203-.03027-.10156 0-.03613.0127-.06543.03613-.08984.02441-.02344.05371-.03613.08984-.03613h.29297c.04395 0 .07617.01074.09863.03027.02148.01953.03711.04395.04492.07129l.9082 2.17578.93262-2.17578c.01172-.02734.02832-.05176.05078-.07129.02148-.01953.05469-.03027.09863-.03027h.28125c.03516 0 .06543.0127.08887.03613.02441.02441.03613.05176.03613.08398 0 .01953-.00977.05566-.03027.10742l-1.69727 3.91504c-.01172.02734-.02832.05176-.05078.07129-.02148.02051-.05469.03027-.09863.03027z"/><path d="m260.37109 284.57422c-.34668 0-.6377-.05371-.87207-.16113-.23535-.10742-.41602-.24609-.54102-.41504-.12598-.16992-.19238-.34766-.2002-.53516 0-.03223.0127-.06055.03906-.08691.02539-.02539.05664-.03906.0918-.03906h.30566c.04785 0 .08301.0127.10742.03613.02344.02344.04004.05176.04785.08398.02344.0957.07324.19043.14941.2832.0752.09375.18359.17188.3252.2334s.32422.09277.54688.09277c.34277 0 .59473-.06055.75684-.18262.16113-.12109.24121-.2832.24121-.4873 0-.13867-.04199-.25195-.12793-.33691-.08594-.08594-.2168-.16309-.3916-.23047-.17578-.06738-.40234-.1416-.68164-.2207-.29102-.08398-.53125-.17578-.72266-.27539s-.33398-.22266-.42773-.37012-.14062-.33496-.14062-.5625c0-.21484.05762-.40723.17383-.57617.11523-.16992.28223-.30371.50195-.40332.21875-.09961.48145-.14941.78906-.14941.24707 0 .46289.03223.64844.09766.18555.06641.33984.1543.46289.26367.12402.10938.2168.22656.28125.35254.06348.125.09766.24805.10156.36719 0 .02832-.00977.05469-.03027.08105-.01953.02637-.05176.03906-.0957.03906h-.31641c-.02832 0-.05664-.00781-.08691-.02441-.0293-.01562-.05273-.0459-.06836-.08984-.02441-.16309-.11621-.30078-.27539-.41211s-.36621-.16699-.62109-.16699c-.25977 0-.46973.0498-.63086.14941s-.24219.25488-.24219.46582c0 .13574.03809.24805.11328.33789.07617.08984.19531.16797.35938.23633.16309.06738.37598.13965.63965.21484.31836.08789.5791.18066.78223.27832s.35352.21875.45117.36426.14648.33203.14648.55859c0 .25098-.06543.46582-.19727.64258-.13086.17773-.31543.31348-.55273.40625-.2373.09375-.5166.14062-.83984.14062z"/><path d="m263.87988 284.51465c-.22363 0-.40527-.04297-.54395-.12891-.13965-.08496-.24121-.20703-.30469-.36426-.06445-.15723-.0957-.34375-.0957-.55859v-1.57812h-.4668c-.04004 0-.07227-.0127-.09863-.03906-.02539-.02539-.03906-.05859-.03906-.09863v-.20312c0-.04004.01367-.07227.03906-.09863.02637-.02539.05859-.03906.09863-.03906h.4668v-.99805c0-.03906.0127-.07227.03809-.09863.02637-.02539.05957-.03809.09863-.03809h.28125c.04004 0 .07227.0127.09863.03809.02539.02637.03906.05957.03906.09863v.99805h.74121c.04395 0 .07715.01367.10156.03906.02344.02637.03516.05859.03516.09863v.20312c0 .04004-.01172.07324-.03516.09863-.02441.02637-.05762.03906-.10156.03906h-.74121v1.53613c0 .1875.03125.33496.0957.44238.06348.10742.17676.16113.34082.16113h.36426c.04004 0 .07227.0127.09863.03906.02539.02539.03906.05859.03906.09863v.21484c0 .04004-.01367.07324-.03906.09863-.02637.02637-.05859.03906-.09863.03906h-.41211z"/><path d="m265.09863 284.51465c-.04004 0-.07227-.0127-.09863-.03906-.02539-.02539-.03906-.05859-.03906-.09863v-.42969c0-.04004.01367-.07324.03906-.09863.02637-.02637.05859-.03906.09863-.03906h.43066c.03906 0 .07324.0127.10156.03906.02734.02539.04199.05859.04199.09863v.42969c0 .04004-.01465.07324-.04199.09863-.02832.02637-.0625.03906-.10156.03906z"/><path d="m502.18652 181.60938c0-.34668.05371-.6377.16113-.87207.10742-.23535.24609-.41602.41504-.54102.16992-.12598.34766-.19238.53516-.2002.03223 0 .06055.0127.08691.03906.02539.02539.03906.05664.03906.0918v.30566c0 .04785-.0127.08301-.03613.10742-.02344.02344-.05176.04004-.08398.04785-.0957.02344-.19043.07324-.2832.14941-.09375.0752-.17188.18359-.2334.3252s-.09277.32422-.09277.54688c0 .34277.06055.59473.18262.75684.12012.16113.28223.24121.48633.24121.13867 0 .25195-.04199.33789-.12793s.16309-.2168.23047-.3916c.06738-.17578.1416-.40234.2207-.68164.08398-.29102.17578-.53125.27539-.72266s.22266-.33398.37012-.42773.33496-.14062.5625-.14062c.21484 0 .40723.05762.57617.17383.16992.11523.30371.28223.40332.50195.09961.21875.14941.48145.14941.78906 0 .24707-.03223.46289-.09766.64844-.06641.18555-.15527.33984-.26465.46289-.10938.12402-.22656.2168-.35254.28125-.125.06348-.24805.09766-.36719.10156-.02832 0-.05469-.00977-.08105-.03027-.02637-.01953-.03906-.05176-.03906-.0957v-.31641c0-.02832.00781-.05664.02441-.08691.01562-.0293.04688-.05273.09082-.06836.16309-.02441.30078-.11621.41211-.27539s.16699-.36621.16699-.62109c0-.25977-.0498-.46973-.14941-.63086s-.25488-.24219-.46582-.24219c-.13574 0-.24805.03809-.33789.11328-.08984.07617-.16797.19531-.23633.35938-.06738.16309-.13965.37598-.21484.63965-.08789.31836-.18066.5791-.2793.78223-.09766.20312-.21875.35352-.36426.45117s-.33203.14648-.55859.14648c-.25098 0-.46582-.06543-.64258-.19727-.17773-.13086-.31348-.31543-.40527-.55273-.09375-.2373-.14062-.5166-.14062-.83984z"/><path d="m502.24512 185.11816c0-.22266.04297-.4043.12891-.54395.08496-.13965.20703-.24121.36426-.30469s.34375-.0957.55859-.0957h1.57812v-.46582c0-.04004.0127-.07324.03906-.09863.02539-.02637.05859-.03906.09863-.03906h.20312c.04004 0 .07227.0127.09863.03906.02539.02539.03906.05859.03906.09863v.46582h.99805c.03906 0 .07227.0127.09863.03906.02539.02539.03809.05859.03809.09863v.28125c0 .03906-.0127.07227-.03809.09766-.02637.02637-.05957.03906-.09863.03906h-.99805v.74121c0 .04395-.01367.07812-.03906.10156-.02637.02441-.05859.03613-.09863.03613h-.20312c-.04004 0-.07324-.01172-.09863-.03613-.02637-.02344-.03906-.05762-.03906-.10156v-.74121h-1.53613c-.1875 0-.33496.03223-.44238.0957s-.16113.17773-.16113.34082v.36426c0 .04004-.0127.07324-.03906.09863-.02539.02637-.05859.03906-.09863.03906h-.21484c-.04004 0-.07324-.0127-.09863-.03906-.02637-.02539-.03906-.05859-.03906-.09863v-.41211z"/><path d="m502.18555 187.51465c0-.30273.05762-.55566.17285-.75879.11621-.20312.27637-.3584.48145-.46582.20508-.1084.43945-.16797.70215-.17969.06738-.00391.1543-.00586.25977-.00586s.19043.00195.25391.00586c.26758.01172.50293.07227.70605.18262.20312.10938.3623.26562.47754.46875.11621.20312.17383.4541.17383.75293s-.05762.5498-.17383.75293c-.11523.2041-.27441.36035-.47754.46973s-.43848.16992-.70605.18262c-.06348.00391-.14844.00586-.25391.00586s-.19238-.00195-.25977-.00586c-.2627-.0127-.49707-.07227-.70215-.17969s-.36523-.2627-.48145-.46582c-.11523-.20312-.17285-.45703-.17285-.75977zm.45996 0c0 .24707.0791.44434.23633.5918s.3877.22754.69043.23926c.05957.00391.13477.00586.22656.00586s.16797-.00195.22754-.00586c.30273-.01172.5332-.0918.69043-.23926s.23633-.34473.23633-.5918-.0791-.44531-.23633-.59473-.3877-.22754-.69043-.23535c-.05957-.00488-.13574-.00684-.22754-.00684s-.16699.00195-.22656.00684c-.30273.00781-.5332.08594-.69043.23535s-.23633.34766-.23633.59473z"/><path d="m502.24512 189.80957c0-.03906.0127-.07227.03906-.09863.02539-.02539.05859-.03809.09863-.03809h2.83301c.04004 0 .07227.0127.09863.03809.02539.02637.03906.05957.03906.09863v.28125c0 .04004-.01367.07227-.03906.09863-.02637.02637-.05859.03906-.09863.03906h-.2627c.13477.10352.24512.23438.33105.3916s.12891.35938.12891.60645c0 .25879-.05664.47949-.1709.66016-.11328.18164-.27051.31934-.47168.41309-.20117.09277-.43555.13965-.70215.13965h-1.68555c-.04004 0-.07324-.0127-.09863-.03809-.02637-.02637-.03906-.05957-.03906-.09863v-.29883c0-.04004.0127-.07324.03906-.09863.02539-.02637.05859-.03906.09863-.03906h1.65527c.2793 0 .49707-.06836.6543-.20312.15723-.13574.23633-.33496.23633-.59766 0-.24707-.0791-.44531-.23633-.59473s-.375-.22461-.6543-.22461h-1.65527c-.04004 0-.07324-.0127-.09863-.03906-.02637-.02539-.03906-.05859-.03906-.09863v-.29883z"/><path d="m502.18555 194.53809c0-.41504.12598-.74316.37891-.98633.25391-.24316.59863-.37695 1.03711-.40039.05176-.00391.11914-.00586.2002-.00586.08203 0 .14844.00195.2002.00586.2832.01562.53125.08105.74414.19727.21387.11523.37793.27344.49316.47461.11621.20117.17383.4375.17383.70898 0 .30273-.06348.55664-.19141.76172s-.30859.36133-.54395.46875c-.23535.1084-.50977.16211-.8252.16211h-.10156c-.04395 0-.07715-.01367-.10156-.03906-.02344-.02637-.03516-.05859-.03516-.09863v-2.06836h-.05469c-.16309.00781-.31543.04395-.45703.10742-.1416.06445-.25586.15625-.34375.27832-.08691.12109-.13086.26367-.13086.42773 0 .14258.02148.2627.06543.3584s.09277.17285.14648.2334c.05371.05957.09668.09863.12891.11914.04785.03613.07617.06348.08594.08398.00977.01953.01562.05176.01562.0957v.29199c0 .03613-.01172.06738-.0332.09277-.02246.02637-.05273.03711-.09277.0332-.05957-.00391-.13281-.03613-.21777-.0957-.08594-.05957-.1709-.14453-.25391-.25391-.08398-.10938-.15234-.24512-.20703-.40625-.05371-.16211-.08008-.34375-.08008-.54688zm1.84082-.81934v1.6377h.01758c.17969 0 .33887-.03223.47852-.09863.13965-.06543.25-.16016.33203-.28418.08105-.12305.12207-.27051.12207-.44141 0-.17188-.04102-.31836-.12207-.43945-.08203-.12207-.19238-.21484-.33203-.27832s-.29883-.0957-.47852-.0957h-.01758z"/><path d="m502.18555 197.89648c0-.2832.05469-.52734.16406-.73242s.2666-.36328.47266-.47461c.20508-.1123.45117-.17188.7373-.17969.06055-.00391.13965-.00586.23926-.00586s.17969.00195.23926.00586c.28711.00781.5332.06738.73828.17969.20508.11133.3623.26953.47266.47461.10938.20508.16406.44922.16406.73242 0 .23145-.03223.42969-.0957.59473s-.14551.30176-.24512.40918-.20703.18848-.32324.24219c-.11523.05371-.22461.08301-.32812.08691-.04004.00391-.07227-.00781-.0957-.03613-.02441-.02832-.03613-.06152-.03613-.10156v-.28711c0-.04004.00879-.06934.02734-.08984.01758-.01953.04883-.03906.09277-.05957.19434-.07129.33203-.16895.41211-.29297.0791-.12305.11914-.27637.11914-.45996 0-.23926-.07324-.43359-.2207-.58301s-.38477-.22949-.71094-.24219c-.14355-.00391-.2832-.00391-.41895 0-.33105.0127-.56836.09277-.71387.24219s-.21875.34375-.21875.58301c0 .18359.04004.33691.12012.45996.0791.12402.2168.22168.41211.29297.04395.02051.0752.04004.0957.05957.01953.02051.03027.0498.03027.08984v.28711c0 .04004-.01367.07324-.03906.10156-.02637.02832-.05859.04004-.09863.03613-.08398-.00391-.16992-.02246-.25684-.05371-.08789-.03223-.17676-.08301-.2666-.15234-.08984-.07031-.16895-.15723-.23926-.26074-.06934-.10352-.125-.22656-.16699-.37012s-.0625-.30859-.0625-.49609z"/><path d="m502.18555 201.10059c0-.25586.05664-.47168.16992-.64941.11426-.17676.27246-.31152.47559-.40332s.43652-.13672.69922-.13672h1.68555c.04004 0 .07227.0127.09863.03809.02539.02637.03906.05859.03906.09863v.29883c0 .04004-.01367.07324-.03906.09863-.02637.02637-.05859.03906-.09863.03906h-1.65625c-.59375 0-.88965.25879-.88965.77734 0 .24707.07812.44531.23535.59473s.37598.22363.6543.22363h1.65625c.04004 0 .07227.0127.09863.03906.02539.02637.03906.05859.03906.09863v.29883c0 .04004-.01367.07227-.03906.0957-.02637.02344-.05859.03613-.09863.03613h-2.83301c-.04004 0-.07324-.0127-.09863-.03613-.02637-.02344-.03906-.05566-.03906-.0957v-.28125c0-.03906.0127-.07227.03906-.09863.02539-.02539.05859-.03809.09863-.03809h.2627c-.13965-.1084-.25098-.23828-.33496-.3916-.08301-.15332-.125-.35547-.125-.60645z"/><path d="m502.24512 204.75195c0-.22266.04297-.4043.12891-.54395.08496-.13965.20703-.24121.36426-.30469s.34375-.0957.55859-.0957h1.57812v-.46582c0-.04004.0127-.07324.03906-.09863.02539-.02637.05859-.03906.09863-.03906h.20312c.04004 0 .07227.0127.09863.03906.02539.02539.03906.05859.03906.09863v.46582h.99805c.03906 0 .07227.0127.09863.03906.02539.02539.03809.05859.03809.09863v.28125c0 .03906-.0127.07227-.03809.09766-.02637.02637-.05957.03906-.09863.03906h-.99805v.74121c0 .04395-.01367.07812-.03906.10156-.02637.02441-.05859.03613-.09863.03613h-.20312c-.04004 0-.07324-.01172-.09863-.03613-.02637-.02344-.03906-.05762-.03906-.10156v-.74121h-1.53613c-.1875 0-.33496.03223-.44238.0957s-.16113.17773-.16113.34082v.36426c0 .04004-.0127.07324-.03906.09863-.02539.02637-.05859.03906-.09863.03906h-.21484c-.04004 0-.07324-.0127-.09863-.03906-.02637-.02539-.03906-.05859-.03906-.09863v-.41211z"/><path d="m502.24512 207.08887c0-.22266.04297-.4043.12891-.54395.08496-.13965.20703-.24121.36426-.30469s.34375-.0957.55859-.0957h1.57812v-.46582c0-.04004.0127-.07324.03906-.09863.02539-.02637.05859-.03906.09863-.03906h.20312c.04004 0 .07227.0127.09863.03906.02539.02539.03906.05859.03906.09863v.46582h.99805c.03906 0 .07227.0127.09863.03906.02539.02539.03809.05859.03809.09863v.28125c0 .03906-.0127.07227-.03809.09766-.02637.02637-.05957.03906-.09863.03906h-.99805v.74121c0 .04395-.01367.07812-.03906.10156-.02637.02441-.05859.03613-.09863.03613h-.20312c-.04004 0-.07324-.01172-.09863-.03613-.02637-.02344-.03906-.05762-.03906-.10156v-.74121h-1.53613c-.1875 0-.33496.03223-.44238.0957s-.16113.17773-.16113.34082v.36426c0 .04004-.0127.07324-.03906.09863-.02539.02637-.05859.03906-.09863.03906h-.21484c-.04004 0-.07324-.0127-.09863-.03906-.02637-.02539-.03906-.05859-.03906-.09863v-.41211z"/><path d="m502.18555 209.45605c0-.41504.12598-.74316.37891-.98633.25391-.24316.59863-.37695 1.03711-.40039.05176-.00391.11914-.00586.2002-.00586.08203 0 .14844.00195.2002.00586.2832.01562.53125.08105.74414.19727.21387.11523.37793.27344.49316.47461.11621.20117.17383.4375.17383.70898 0 .30273-.06348.55664-.19141.76172s-.30859.36133-.54395.46875c-.23535.1084-.50977.16211-.8252.16211h-.10156c-.04395 0-.07715-.01367-.10156-.03906-.02344-.02637-.03516-.05859-.03516-.09863v-2.06836h-.05469c-.16309.00781-.31543.04395-.45703.10742-.1416.06445-.25586.15625-.34375.27832-.08691.12109-.13086.26367-.13086.42773 0 .14258.02148.2627.06543.3584s.09277.17285.14648.2334c.05371.05957.09668.09863.12891.11914.04785.03613.07617.06348.08594.08398.00977.01953.01562.05176.01562.0957v.29199c0 .03613-.01172.06738-.0332.09277-.02246.02637-.05273.03711-.09277.0332-.05957-.00391-.13281-.03613-.21777-.0957-.08594-.05957-.1709-.14453-.25391-.25391-.08398-.10938-.15234-.24512-.20703-.40625-.05371-.16211-.08008-.34375-.08008-.54688zm1.84082-.81933v1.6377h.01758c.17969 0 .33887-.03223.47852-.09863.13965-.06543.25-.16016.33203-.28418.08105-.12305.12207-.27051.12207-.44141 0-.17188-.04102-.31836-.12207-.43945-.08203-.12207-.19238-.21484-.33203-.27832s-.29883-.0957-.47852-.0957h-.01758z"/><path d="m502.24512 211.69727c0-.04004.0127-.07324.03906-.09863.02539-.02637.05859-.03906.09863-.03906h2.82715c.03906 0 .07324.0127.10156.03906.02734.02539.04199.05859.04199.09863v.27441c0 .04004-.01465.07422-.04199.10254-.02832.02734-.0625.04102-.10156.04102h-.26367c.13574.08008.2373.18945.30566.3291.06738.13965.10156.30859.10156.50781v.2334c0 .04004-.01367.07227-.03906.09863-.02637.02539-.05859.03906-.09863.03906h-.24512c-.04004 0-.07227-.01367-.0957-.03906-.02344-.02637-.03613-.05859-.03613-.09863v-.3584c0-.21582-.0625-.38477-.18848-.50879-.125-.12305-.29492-.18457-.51074-.18457h-1.75684c-.04004 0-.07324-.01465-.09863-.04199-.02637-.02832-.03906-.06152-.03906-.10156z"/><path d="m502.18555 214.90625c0-.22266.02734-.41406.08301-.57324.05664-.15918.12402-.28906.2041-.38867.0791-.09961.15918-.1748.23828-.22461.08008-.0498.14355-.07617.19141-.08008.04395-.00391.07812.00977.10156.04199.02441.03125.03613.06348.03613.0957v.26855c0 .01953-.00293.03711-.00879.05078s-.02344.0332-.05078.05664c-.05566.05176-.11133.10938-.16797.17383-.05566.06348-.10156.1416-.13672.23535-.03613.09375-.05371.21094-.05371.34961 0 .2041.03809.37109.11621.50293.07715.13086.19238.19727.34375.19727.09961 0 .17871-.02734.23926-.08105.05957-.05371.11328-.14941.16113-.28711s.09766-.3252.14941-.56445c.05566-.23926.12402-.42871.20605-.56836s.17969-.23828.29297-.29883c.11328-.05957.24219-.08984.38574-.08984.14746 0 .29004.04395.42676.13184.1377.08789.25.21582.33789.38574.08789.16895.13184.38184.13184.63672 0 .20703-.02637.38379-.07812.53125s-.11621.26953-.19434.36523c-.07715.0957-.1543.16699-.22949.21484-.07617.04785-.13965.07422-.19141.07812-.04004.00391-.07324-.00879-.09863-.03613-.02637-.02832-.03906-.05957-.03906-.0957v-.25098c0-.02832.00586-.05078.01758-.06836.0127-.01855.02637-.03516.04199-.05078.05176-.04004.10352-.08691.15527-.14062s.09473-.12402.12891-.20898c.03418-.08594.05078-.19824.05078-.33789 0-.19922-.04199-.34863-.125-.44824-.08398-.09961-.18945-.14941-.31738-.14941-.0752 0-.14355.02148-.20312.06543s-.11328.12793-.16113.25098-.09961.30664-.15527.5498c-.05176.2627-.12207.4707-.20996.62207-.08691.15137-.18848.25879-.30469.32227-.11523.06348-.24902.0957-.40039.0957-.16699 0-.32031-.04785-.45996-.14355s-.25-.23926-.33203-.42969c-.08105-.19141-.12207-.42676-.12207-.70605z"/><path d="m502.24512 218.55859c0-.04395.0127-.07812.03906-.10156.02539-.02441.05859-.03613.09863-.03613h3.90918c.03906 0 .07227.01172.09863.03613.02539.02344.03809.05762.03809.10156v.31641c0 .04004-.0127.07324-.03809.09863-.02637.02637-.05957.03906-.09863.03906h-3.52734v1.98438c0 .04395-.0127.0791-.03809.10449-.02637.02637-.06152.03906-.10449.03906h-.23926c-.04004 0-.07324-.0127-.09863-.03906-.02637-.02539-.03906-.06055-.03906-.10449z"/><path d="m502.18555 222.5752c0-.19922.04004-.38086.11914-.54395.08008-.16309.1875-.29492.32324-.39453.13477-.09961.28809-.14941.45996-.14941.27539 0 .49414.11133.65723.33496.16309.22266.27148.51367.32324.87305l.125.88965h.17383c.19141 0 .34082-.05469.44824-.16406s.16113-.28809.16113-.53516c0-.1748-.03613-.31836-.10742-.42969-.07227-.1123-.16309-.18945-.27539-.2334-.05957-.02344-.08887-.06543-.08887-.12598v-.26855c0-.04395.0127-.07715.03809-.09863.02637-.02148.05664-.0332.09277-.0332.05957 0 .13379.02344.22168.06934.08691.0459.17285.11621.25684.21191.08301.0957.1543.21777.21191.36719s.08691.33203.08691.54785c0 .23828-.03125.43945-.09277.60352-.06152.16309-.14453.29199-.24805.38477-.10352.09375-.2207.16211-.35254.2041-.13184.04102-.26562.0625-.40039.0625h-1.93652c-.04004 0-.07324-.01367-.09863-.03906-.02637-.02637-.03906-.05859-.03906-.09863v-.27539c0-.04297.0127-.07715.03906-.10156.02539-.02344.05859-.03516.09863-.03516h.25684c-.07129-.05176-.14258-.12207-.21191-.20996-.07031-.08691-.12793-.19629-.17383-.32812s-.06836-.29297-.06836-.48438zm.44824.12597c0 .16309.03418.3125.10449.44824.06934.13477.17773.24219.3252.31934.14746.07812.33301.11621.55664.11621h.16699l-.10156-.69238c-.04004-.2832-.10645-.49609-.2002-.63965s-.21191-.21582-.35547-.21582c-.11133 0-.2041.0332-.27832.09863-.07324.06641-.12793.14941-.16406.25098s-.05371.20605-.05371.31445z"/><path d="m502.24512 225.14453c0-.03906.0127-.07227.03906-.09863.02539-.02539.05859-.03809.09863-.03809h2.83301c.04004 0 .07227.0127.09863.03809.02539.02637.03906.05957.03906.09863v.28125c0 .04004-.01367.07227-.03906.09863-.02637.02637-.05859.03906-.09863.03906h-.2627c.13477.10352.24512.23438.33105.3916s.12891.35938.12891.60645c0 .25879-.05664.47949-.1709.66016-.11328.18164-.27051.31934-.47168.41309-.20117.09277-.43555.13965-.70215.13965h-1.68555c-.04004 0-.07324-.0127-.09863-.03809-.02637-.02637-.03906-.05957-.03906-.09863v-.29883c0-.04004.0127-.07324.03906-.09863.02539-.02637.05859-.03906.09863-.03906h1.65527c.2793 0 .49707-.06836.6543-.20312.15723-.13574.23633-.33496.23633-.59766 0-.24707-.0791-.44531-.23633-.59473s-.375-.22461-.6543-.22461h-1.65527c-.04004 0-.07324-.0127-.09863-.03906-.02637-.02539-.03906-.05859-.03906-.09863v-.29883z"/><path d="m502.18555 229.87305c0-.41504.12598-.74316.37891-.98633.25391-.24316.59863-.37695 1.03711-.40039.05176-.00391.11914-.00586.2002-.00586.08203 0 .14844.00195.2002.00586.2832.01562.53125.08105.74414.19727.21387.11523.37793.27344.49316.47461.11621.20117.17383.4375.17383.70898 0 .30273-.06348.55664-.19141.76172s-.30859.36133-.54395.46875c-.23535.1084-.50977.16211-.8252.16211h-.10156c-.04395 0-.07715-.01367-.10156-.03906-.02344-.02637-.03516-.05859-.03516-.09863v-2.06836h-.05469c-.16309.00781-.31543.04395-.45703.10742-.1416.06445-.25586.15625-.34375.27832-.08691.12109-.13086.26367-.13086.42773 0 .14258.02148.2627.06543.3584s.09277.17285.14648.2334c.05371.05957.09668.09863.12891.11914.04785.03613.07617.06348.08594.08398.00977.01953.01562.05176.01562.0957v.29199c0 .03613-.01172.06738-.0332.09277-.02246.02637-.05273.03711-.09277.0332-.05957-.00391-.13281-.03613-.21777-.0957-.08594-.05957-.1709-.14453-.25391-.25391-.08398-.10938-.15234-.24512-.20703-.40625-.05371-.16211-.08008-.34375-.08008-.54688zm1.84082-.81934v1.6377h.01758c.17969 0 .33887-.03223.47852-.09863.13965-.06543.25-.16016.33203-.28418.08105-.12305.12207-.27051.12207-.44141 0-.17188-.04102-.31836-.12207-.43945-.08203-.12207-.19238-.21484-.33203-.27832s-.29883-.0957-.47852-.0957h-.01758z"/><path d="m630.73926 61.27246c0-.3667.06738-.67041.20312-.91162s.32422-.42334.56738-.54688.52637-.19141.84863-.20312c.16406-.00439.33887-.00635.52637-.00635s.36621.00195.53809.00635c.32227.01172.60547.07959.84863.20312s.43262.30566.56738.54688c.13574.24121.20312.54492.20312.91162 0 .2749-.03711.51562-.11328.72314-.07617.20703-.17773.37939-.30566.51709-.12793.13721-.26953.2417-.42773.31348-.15723.07178-.31934.11182-.48633.11963-.03613.00391-.06641-.00684-.08984-.03271-.02441-.02588-.03613-.05713-.03613-.09277v-.32861c0-.03613.00977-.06689.03027-.09277.01953-.02588.05566-.04492.10742-.05664.31055-.06787.52344-.19434.64062-.37988.11523-.18506.17285-.41504.17285-.68994 0-.32275-.09082-.57812-.27148-.76514-.18164-.1875-.47168-.28711-.87012-.29883-.32617-.01221-.66113-.01221-1.00391 0-.39844.01172-.68848.11133-.86914.29883-.18164.18701-.27246.44238-.27246.76514 0 .2749.05762.50488.17383.68994.11426.18555.32715.31201.6377.37988.05176.01172.08789.03076.1084.05664.01953.02588.0293.05664.0293.09277v.32861c0 .03564-.01074.06689-.03223.09277-.02246.02588-.05176.03662-.08691.03271-.16797-.00781-.33105-.04785-.49023-.11963s-.30273-.17627-.43066-.31348c-.12695-.1377-.22852-.31006-.30371-.51709-.0752-.20752-.11328-.44824-.11328-.72314z"/><path d="m630.79785 63.8125c0-.04004.0127-.07275.03906-.09863.02539-.02637.05859-.03906.09863-.03906h3.96875c.03906 0 .07227.0127.09863.03906.02539.02588.03809.05859.03809.09863v.28076c0 .04395-.0127.07764-.03809.10156-.02637.02393-.05957.03564-.09863.03564h-3.96875c-.04004 0-.07324-.01172-.09863-.03564-.02637-.02393-.03906-.05762-.03906-.10156z"/><path d="m630.79785 65.25879c0-.03955.0127-.07275.03906-.09863.02539-.02588.05859-.03857.09863-.03857h2.83301c.04004 0 .07227.0127.09863.03857.02539.02588.03906.05908.03906.09863v.28711c0 .03955-.01367.07275-.03906.09863-.02637.02588-.05859.03857-.09863.03857h-2.83301c-.04004 0-.07324-.0127-.09863-.03857-.02637-.02588-.03906-.05908-.03906-.09863zm3.6875-.04785c0-.03955.0127-.07275.03906-.09863s.05859-.03857.09863-.03857h.32324c.03906 0 .07324.0127.10156.03857.02734.02588.04102.05908.04102.09863v.37695c0 .03955-.01367.07373-.04102.10156-.02832.02783-.0625.0415-.10156.0415h-.32324c-.04004 0-.07227-.01367-.09863-.0415s-.03906-.06201-.03906-.10156z"/><path d="m630.79785 66.70508c0-.03955.0127-.07275.03906-.09863.02539-.02588.05859-.03857.09863-.03857h2.83301c.04004 0 .07227.0127.09863.03857.02539.02588.03906.05908.03906.09863v.28125c0 .03955-.01367.07227-.03906.09863-.02637.02588-.05859.03857-.09863.03857h-.2627c.13477.10352.24512.23438.33105.3916s.12891.35938.12891.60645c0 .25928-.05664.47949-.1709.66064-.11328.18115-.27051.31885-.47168.4126-.20117.09326-.43555.14014-.70215.14014h-1.68555c-.04004 0-.07324-.0127-.09863-.03857-.02637-.02588-.03906-.05908-.03906-.09863v-.29883c0-.04004.0127-.07275.03906-.09863.02539-.02588.05859-.03906.09863-.03906h1.65527c.2793 0 .49707-.06787.6543-.20312.15723-.13574.23633-.33447.23633-.59766 0-.24707-.0791-.44531-.23633-.59473s-.375-.22412-.6543-.22412h-1.65527c-.04004 0-.07324-.01318-.09863-.03906-.02637-.02588-.03906-.05859-.03906-.09863v-.29883z"/><path d="m630.79785 70.3335c0-.04004.0127-.07275.03906-.09863.02539-.02637.05859-.03906.09863-.03906h3.96875c.03906 0 .07227.0127.09863.03906.02539.02588.03809.05859.03809.09863v.28076c0 .03955-.0127.07275-.03809.09863-.02637.02588-.05957.03857-.09863.03857h-2.08008l.98047 1.17773c.03906.04785.06641.08447.08008.11035s.02148.06885.02148.12891v.31641c0 .03613-.0127.06592-.03613.08984-.02441.02393-.05371.03564-.08984.03564-.01562 0-.03418-.00488-.05371-.01465-.01953-.01025-.04004-.0293-.05957-.05713l-1.14746-1.38037-1.48828 1.52979c-.04004.04785-.07617.07178-.10742.07178-.03613 0-.06641-.01172-.08984-.03564-.02441-.02393-.03613-.05371-.03613-.08984v-.31055c0-.06006.00684-.104.02051-.13135.01465-.02832.04102-.06396.08105-.10791l1.27344-1.33301h-1.2373c-.04004 0-.07324-.0127-.09863-.03857-.02637-.02588-.03906-.05908-.03906-.09863v-.28076z"/><path d="m630.73828 76.10059c0-.34668.05371-.6377.16113-.87256.10742-.23535.24609-.41553.41504-.54102.16992-.12549.34766-.19238.53516-.2002.03223 0 .06055.01318.08691.03906.02539.02588.03906.05664.03906.09229v.30518c0 .04785-.0127.0835-.03613.10742s-.05176.04004-.08398.04785c-.0957.02393-.19043.07373-.2832.14941-.09375.07568-.17188.18408-.2334.32568s-.09277.32373-.09277.54688c0 .34277.06055.59473.18262.75635.12109.16113.2832.2417.4873.2417.13867 0 .25195-.04248.33691-.12842.08594-.08545.16309-.21631.23047-.3916s.1416-.40234.2207-.68115c.08398-.29102.17578-.53174.27539-.72314s.22266-.33398.37012-.42725c.14746-.09375.33496-.14062.5625-.14062.21484 0 .40723.05762.57617.17334.16992.11572.30371.28271.40332.50195s.14941.48193.14941.78906c0 .24707-.03223.46338-.09766.64844-.06641.18555-.1543.33984-.26367.46338s-.22656.2168-.35254.28076c-.125.06348-.24805.09766-.36719.10156-.02832 0-.05469-.00977-.08105-.02979s-.03906-.05176-.03906-.0957v-.31689c0-.02783.00781-.05664.02441-.08643.01562-.02979.0459-.05273.08984-.06885.16309-.02393.30078-.11572.41211-.2749.11133-.15967.16699-.3667.16699-.62158 0-.25928-.0498-.46924-.14941-.63037-.09961-.16162-.25488-.24219-.46582-.24219-.13574 0-.24805.0376-.33789.11328s-.16797.19531-.23633.35889c-.06738.16309-.13965.37646-.21484.63965-.08789.31836-.18066.57959-.27832.78271s-.21875.35352-.36426.45117-.33203.14648-.55859.14648c-.25098 0-.46582-.06543-.64258-.19727-.17773-.13135-.31348-.31592-.40625-.55273-.09375-.2373-.14062-.51709-.14062-.83984z"/><path d="m630.79785 79.60938c0-.22314.04297-.40479.12891-.54395.08496-.13965.20703-.24121.36426-.30469.15723-.06396.34375-.0957.55859-.0957h1.57812v-.46631c0-.04004.0127-.07275.03906-.09863.02539-.02588.05859-.03906.09863-.03906h.20312c.04004 0 .07227.01318.09863.03906.02539.02588.03906.05859.03906.09863v.46631h.99805c.03906 0 .07227.0127.09863.03857.02539.02588.03809.05908.03809.09863v.28125c0 .03955-.0127.07227-.03809.09814-.02637.02588-.05957.03906-.09863.03906h-.99805v.74121c0 .04395-.01367.07764-.03906.10156-.02637.02393-.05859.03564-.09863.03564h-.20312c-.04004 0-.07324-.01172-.09863-.03564-.02637-.02393-.03906-.05762-.03906-.10156v-.74121h-1.53613c-.1875 0-.33496.03174-.44238.0957-.10742.06348-.16113.17725-.16113.34082v.36426c0 .04004-.0127.07275-.03906.09863-.02539.02588-.05859.03906-.09863.03906h-.21484c-.04004 0-.07324-.01318-.09863-.03906-.02637-.02588-.03906-.05859-.03906-.09863v-.41211z"/><path d="m630.79785 80.87012c0-.03955.0127-.07275.03906-.09863.02539-.02588.05859-.03857.09863-.03857h2.82715c.03906 0 .07324.0127.10156.03857.02734.02588.04199.05908.04199.09863v.2749c0 .04004-.01465.07373-.04199.10205-.02832.02783-.0625.0415-.10156.0415h-.26367c.13574.07959.2373.18945.30566.32861.06738.13965.10156.30908.10156.5083v.23291c0 .04004-.01367.07275-.03906.09863-.02637.02588-.05859.03906-.09863.03906h-.24512c-.04004 0-.07227-.01318-.0957-.03906s-.03613-.05859-.03613-.09863v-.3584c0-.21533-.0625-.38477-.18848-.5083-.125-.12354-.29492-.18506-.51074-.18506h-1.75684c-.04004 0-.07324-.01416-.09863-.04199-.02637-.02783-.03906-.06152-.03906-.10156v-.29297z"/><path d="m630.73828 84.1875c0-.41455.12598-.74316.37891-.98633.25391-.24316.59863-.37646 1.03711-.40039.05176-.00391.11914-.00586.2002-.00586.08203 0 .14844.00195.2002.00586.2832.01611.53125.08154.74414.19727.21387.11572.37793.27393.49316.4751.11621.20117.17383.4375.17383.7085 0 .30273-.06348.55664-.19141.76172-.12793.20557-.30859.36182-.54395.46924-.23535.10791-.50977.16162-.8252.16162h-.10156c-.04395 0-.07715-.01318-.10156-.03906-.02344-.02588-.03516-.05859-.03516-.09863v-2.06787h-.05469c-.16309.00781-.31543.04395-.45703.10742-.1416.06396-.25586.15625-.34375.27783-.08691.12158-.13086.26416-.13086.42773 0 .14307.02148.2627.06543.3584s.09277.17334.14648.2334c.05371.05957.09668.09912.12891.11914.04785.03613.07617.06396.08594.08398.00977.01953.01562.05176.01562.0957v.29248c0 .03613-.01172.06689-.0332.09277-.02246.02588-.05273.03662-.09277.03271-.05957-.00391-.13281-.03564-.21777-.09521-.08594-.06006-.1709-.14453-.25391-.25439-.08398-.10938-.15234-.24512-.20703-.40625-.05371-.16162-.08008-.34375-.08008-.54688zm1.84082-.81885v1.6377h.01758c.17969 0 .33887-.03271.47852-.09863s.25-.16064.33203-.28418c.08105-.12354.12207-.271.12207-.44189 0-.17139-.04102-.31787-.12207-.43945-.08203-.12158-.19238-.21436-.33203-.27783-.13965-.06396-.29883-.0957-.47852-.0957h-.01758z"/><path d="m630.73828 87.53467c0-.41455.12598-.74316.37891-.98633.25391-.24316.59863-.37646 1.03711-.40039.05176-.00391.11914-.00586.2002-.00586.08203 0 .14844.00195.2002.00586.2832.01611.53125.08154.74414.19727.21387.11572.37793.27393.49316.4751.11621.20117.17383.4375.17383.7085 0 .30273-.06348.55664-.19141.76172-.12793.20557-.30859.36182-.54395.46924-.23535.10791-.50977.16162-.8252.16162h-.10156c-.04395 0-.07715-.01318-.10156-.03906-.02344-.02588-.03516-.05859-.03516-.09863v-2.06787h-.05469c-.16309.00781-.31543.04395-.45703.10742-.1416.06396-.25586.15625-.34375.27783-.08691.12158-.13086.26416-.13086.42773 0 .14307.02148.2627.06543.3584s.09277.17334.14648.2334c.05371.05957.09668.09912.12891.11914.04785.03613.07617.06396.08594.08398.00977.01953.01562.05176.01562.0957v.29248c0 .03613-.01172.06689-.0332.09277-.02246.02588-.05273.03662-.09277.03271-.05957-.00391-.13281-.03564-.21777-.09521-.08594-.06006-.1709-.14453-.25391-.25439-.08398-.10938-.15234-.24512-.20703-.40625-.05371-.16162-.08008-.34375-.08008-.54688zm1.84082-.81885v1.6377h.01758c.17969 0 .33887-.03271.47852-.09863s.25-.16064.33203-.28418c.08105-.12354.12207-.271.12207-.44189 0-.17139-.04102-.31787-.12207-.43945-.08203-.12158-.19238-.21436-.33203-.27783-.13965-.06396-.29883-.0957-.47852-.0957h-.01758z"/><path d="m630.79785 90.83398c0-.22314.04297-.40479.12891-.54395.08496-.13965.20703-.24121.36426-.30469.15723-.06396.34375-.0957.55859-.0957h1.57812v-.46631c0-.04004.0127-.07275.03906-.09863.02539-.02588.05859-.03906.09863-.03906h.20312c.04004 0 .07227.01318.09863.03906.02539.02588.03906.05859.03906.09863v.46631h.99805c.03906 0 .07227.0127.09863.03857.02539.02588.03809.05908.03809.09863v.28125c0 .03955-.0127.07227-.03809.09814-.02637.02588-.05957.03906-.09863.03906h-.99805v.74121c0 .04395-.01367.07764-.03906.10156-.02637.02393-.05859.03564-.09863.03564h-.20312c-.04004 0-.07324-.01172-.09863-.03564-.02637-.02393-.03906-.05762-.03906-.10156v-.74121h-1.53613c-.1875 0-.33496.03174-.44238.0957-.10742.06348-.16113.17725-.16113.34082v.36426c0 .04004-.0127.07275-.03906.09863-.02539.02588-.05859.03906-.09863.03906h-.21484c-.04004 0-.07324-.01318-.09863-.03906-.02637-.02588-.03906-.05859-.03906-.09863v-.41211z"/><path d="m630.73926 214.00195c0-.36719.06738-.6709.20312-.91211s.32422-.42285.56738-.54688c.24316-.12305.52637-.19141.84863-.20312.16406-.00391.33887-.00586.52637-.00586s.36621.00195.53809.00586c.32227.01172.60547.08008.84863.20312.24316.12402.43262.30566.56738.54688.13574.24121.20312.54492.20312.91211 0 .27441-.03711.51562-.11328.72266s-.17773.37988-.30566.51758c-.12793.13672-.26953.24121-.42773.31348-.15723.07129-.31934.11133-.48633.11914-.03613.00391-.06641-.00684-.08984-.03223-.02441-.02637-.03613-.05762-.03613-.09277v-.3291c0-.03613.00977-.06641.03027-.09277.01953-.02539.05566-.04492.10742-.05664.31055-.06738.52344-.19434.64062-.37988.11523-.18457.17285-.41504.17285-.68945 0-.32324-.09082-.57812-.27148-.76562-.18164-.1875-.47168-.28711-.87012-.29883-.32617-.01172-.66113-.01172-1.00391 0-.39844.01172-.68848.11133-.86914.29883-.18164.1875-.27246.44238-.27246.76562 0 .27441.05762.50488.17383.68945.11426.18555.32715.3125.6377.37988.05176.01172.08789.03125.1084.05664.01953.02637.0293.05664.0293.09277v.3291c0 .03516-.01074.06641-.03223.09277-.02246.02539-.05176.03613-.08691.03223-.16797-.00781-.33105-.04785-.49023-.11914-.15918-.07227-.30273-.17676-.43066-.31348-.12695-.1377-.22852-.31055-.30371-.51758s-.11328-.44824-.11328-.72266z"/><path d="m630.79785 216.54199c0-.04004.0127-.07324.03906-.09863.02539-.02637.05859-.03906.09863-.03906h3.96875c.03906 0 .07227.0127.09863.03906.02539.02539.03809.05859.03809.09863v.28027c0 .04395-.0127.07812-.03809.10156-.02637.02441-.05957.03613-.09863.03613h-3.96875c-.04004 0-.07324-.01172-.09863-.03613-.02637-.02344-.03906-.05762-.03906-.10156z"/><path d="m630.79785 217.98828c0-.04004.0127-.07324.03906-.09863.02539-.02637.05859-.03906.09863-.03906h2.83301c.04004 0 .07227.0127.09863.03906.02539.02539.03906.05859.03906.09863v.28711c0 .03906-.01367.07227-.03906.09863-.02637.02539-.05859.03809-.09863.03809h-2.83301c-.04004 0-.07324-.0127-.09863-.03809-.02637-.02637-.03906-.05957-.03906-.09863zm3.6875-.04785c0-.04004.0127-.07324.03906-.09863.02637-.02637.05859-.03906.09863-.03906h.32324c.03906 0 .07324.0127.10156.03906.02734.02539.04102.05859.04102.09863v.37695c0 .03906-.01367.07324-.04102.10156-.02832.02734-.0625.04102-.10156.04102h-.32324c-.04004 0-.07227-.01367-.09863-.04102-.02637-.02832-.03906-.0625-.03906-.10156z"/><path d="m630.79785 219.43457c0-.04004.0127-.07324.03906-.09863.02539-.02637.05859-.03906.09863-.03906h2.83301c.04004 0 .07227.0127.09863.03906.02539.02539.03906.05859.03906.09863v.28125c0 .03906-.01367.07227-.03906.09863-.02637.02539-.05859.03809-.09863.03809h-.2627c.13477.10352.24512.23438.33105.3916s.12891.35938.12891.60645c0 .25977-.05664.47949-.1709.66113-.11328.18066-.27051.31836-.47168.41211s-.43555.14062-.70215.14062h-1.68555c-.04004 0-.07324-.0127-.09863-.03906-.02637-.02539-.03906-.05859-.03906-.09863v-.29883c0-.04004.0127-.07227.03906-.09863.02539-.02539.05859-.03906.09863-.03906h1.65527c.2793 0 .49707-.06738.6543-.20312s.23633-.33398.23633-.59766c0-.24707-.0791-.44531-.23633-.59473s-.375-.22363-.6543-.22363h-1.65527c-.04004 0-.07324-.01367-.09863-.03906-.02637-.02637-.03906-.05859-.03906-.09863v-.29883z"/><path d="m630.79785 223.0625c0-.04004.0127-.07227.03906-.09863.02539-.02637.05859-.03906.09863-.03906h3.96875c.03906 0 .07227.0127.09863.03906.02539.02637.03809.05859.03809.09863v.28125c0 .03906-.0127.07227-.03809.09863-.02637.02539-.05957.03809-.09863.03809h-2.08008l.98047 1.17773c.03906.04785.06641.08496.08008.11035.01367.02637.02148.06934.02148.12891v.31641c0 .03613-.0127.06641-.03613.08984-.02441.02441-.05371.03613-.08984.03613-.01562 0-.03418-.00488-.05371-.01465-.01953-.01074-.04004-.0293-.05957-.05762l-1.14746-1.37988-1.48828 1.5293c-.04004.04785-.07617.07227-.10742.07227-.03613 0-.06641-.01172-.08984-.03613-.02441-.02344-.03613-.05371-.03613-.08984v-.31055c0-.05957.00684-.10352.02051-.13086.01465-.02832.04102-.06445.08105-.1084l1.27344-1.33301h-1.2373c-.04004 0-.07324-.0127-.09863-.03809-.02637-.02637-.03906-.05957-.03906-.09863v-.28125z"/><path d="m630.73828 228.83008c0-.34668.05371-.6377.16113-.87305s.24609-.41504.41504-.54102c.16992-.125.34766-.19238.53516-.2002.03223 0 .06055.01367.08691.03906.02539.02637.03906.05664.03906.09277v.30469c0 .04785-.0127.08398-.03613.10742-.02344.02441-.05176.04004-.08398.04785-.0957.02441-.19043.07422-.2832.14941-.09375.07617-.17188.18457-.2334.32617s-.09277.32324-.09277.54688c0 .34277.06055.59473.18262.75586.12109.16113.2832.24219.4873.24219.13867 0 .25195-.04297.33691-.12891.08594-.08496.16309-.21582.23047-.3916.06738-.1748.1416-.40234.2207-.68066.08398-.29102.17578-.53223.27539-.72363s.22266-.33398.37012-.42676c.14746-.09375.33496-.14062.5625-.14062.21484 0 .40723.05762.57617.17285.16992.11621.30371.2832.40332.50195.09961.21973.14941.48242.14941.78906 0 .24707-.03223.46387-.09766.64844-.06641.18555-.1543.33984-.26367.46387-.10938.12305-.22656.2168-.35254.28027-.125.06348-.24805.09766-.36719.10156-.02832 0-.05469-.00977-.08105-.0293-.02637-.02051-.03906-.05176-.03906-.0957v-.31738c0-.02734.00781-.05664.02441-.08594.01562-.03027.0459-.05273.08984-.06934.16309-.02344.30078-.11523.41211-.27441.11133-.16016.16699-.36719.16699-.62207 0-.25879-.0498-.46875-.14941-.62988-.09961-.16211-.25488-.24219-.46582-.24219-.13574 0-.24805.03711-.33789.11328-.08984.0752-.16797.19531-.23633.3584-.06738.16309-.13965.37695-.21484.63965-.08789.31836-.18066.58008-.27832.7832s-.21875.35352-.36426.45117-.33203.14648-.55859.14648c-.25098 0-.46582-.06543-.64258-.19727-.17773-.13184-.31348-.31641-.40625-.55273-.09375-.2373-.14062-.51758-.14062-.83984z"/><path d="m630.79785 232.33887c0-.22363.04297-.40527.12891-.54395.08496-.13965.20703-.24121.36426-.30469.15723-.06445.34375-.0957.55859-.0957h1.57812v-.4668c0-.04004.0127-.07227.03906-.09863.02539-.02539.05859-.03906.09863-.03906h.20312c.04004 0 .07227.01367.09863.03906.02539.02637.03906.05859.03906.09863v.4668h.99805c.03906 0 .07227.0127.09863.03809.02539.02637.03809.05957.03809.09863v.28125c0 .04004-.0127.07227-.03809.09863-.02637.02539-.05957.03906-.09863.03906h-.99805v.74121c0 .04395-.01367.07715-.03906.10156-.02637.02344-.05859.03516-.09863.03516h-.20312c-.04004 0-.07324-.01172-.09863-.03516-.02637-.02441-.03906-.05762-.03906-.10156v-.74121h-1.53613c-.1875 0-.33496.03125-.44238.0957-.10742.06348-.16113.17676-.16113.34082v.36426c0 .04004-.0127.07227-.03906.09863-.02539.02539-.05859.03906-.09863.03906h-.21484c-.04004 0-.07324-.01367-.09863-.03906-.02637-.02637-.03906-.05859-.03906-.09863v-.41211z"/><path d="m630.79785 233.59961c0-.04004.0127-.07324.03906-.09863.02539-.02637.05859-.03906.09863-.03906h2.82715c.03906 0 .07324.0127.10156.03906.02734.02539.04199.05859.04199.09863v.27441c0 .04004-.01465.07422-.04199.10254-.02832.02734-.0625.04102-.10156.04102h-.26367c.13574.08008.2373.18945.30566.3291.06738.13965.10156.30859.10156.50781v.2334c0 .04004-.01367.07227-.03906.09863-.02637.02539-.05859.03906-.09863.03906h-.24512c-.04004 0-.07227-.01367-.0957-.03906-.02344-.02637-.03613-.05859-.03613-.09863v-.3584c0-.21582-.0625-.38477-.18848-.50879-.125-.12305-.29492-.18457-.51074-.18457h-1.75684c-.04004 0-.07324-.01465-.09863-.04199-.02637-.02832-.03906-.06152-.03906-.10156z"/><path d="m630.73828 236.91699c0-.41504.12598-.74316.37891-.98633.25391-.24316.59863-.37695 1.03711-.40039.05176-.00391.11914-.00586.2002-.00586.08203 0 .14844.00195.2002.00586.2832.01562.53125.08105.74414.19727.21387.11523.37793.27344.49316.47461.11621.20117.17383.4375.17383.70898 0 .30273-.06348.55664-.19141.76172s-.30859.36133-.54395.46875c-.23535.1084-.50977.16211-.8252.16211h-.10156c-.04395 0-.07715-.01367-.10156-.03906-.02344-.02637-.03516-.05859-.03516-.09863v-2.06836h-.05469c-.16309.00781-.31543.04395-.45703.10742-.1416.06445-.25586.15625-.34375.27832-.08691.12109-.13086.26367-.13086.42773 0 .14258.02148.2627.06543.3584s.09277.17285.14648.2334c.05371.05957.09668.09863.12891.11914.04785.03613.07617.06348.08594.08398.00977.01953.01562.05176.01562.0957v.29199c0 .03613-.01172.06738-.0332.09277-.02246.02637-.05273.03711-.09277.0332-.05957-.00391-.13281-.03613-.21777-.0957-.08594-.05957-.1709-.14453-.25391-.25391-.08398-.10938-.15234-.24512-.20703-.40625-.05371-.16211-.08008-.34375-.08008-.54688zm1.84082-.81933v1.6377h.01758c.17969 0 .33887-.03223.47852-.09863.13965-.06543.25-.16016.33203-.28418.08105-.12305.12207-.27051.12207-.44141 0-.17188-.04102-.31836-.12207-.43945-.08203-.12207-.19238-.21484-.33203-.27832s-.29883-.0957-.47852-.0957h-.01758z"/><path d="m630.73828 240.26367c0-.41406.12598-.74316.37891-.98633.25391-.24316.59863-.37598 1.03711-.40039.05176-.00391.11914-.00586.2002-.00586.08203 0 .14844.00195.2002.00586.2832.0166.53125.08203.74414.19727.21387.11621.37793.27441.49316.47559.11621.20117.17383.4375.17383.70801 0 .30273-.06348.55664-.19141.76172-.12793.20605-.30859.3623-.54395.46973s-.50977.16113-.8252.16113h-.10156c-.04395 0-.07715-.0127-.10156-.03906-.02344-.02539-.03516-.05859-.03516-.09863v-2.06738h-.05469c-.16309.00781-.31543.04395-.45703.10742s-.25586.15625-.34375.27734c-.08691.12207-.13086.26465-.13086.42773 0 .14355.02148.2627.06543.3584s.09277.17383.14648.2334.09668.09961.12891.11914c.04785.03613.07617.06445.08594.08398s.01562.05176.01562.0957v.29297c0 .03613-.01172.06641-.0332.09277-.02246.02539-.05273.03613-.09277.03223-.05957-.00391-.13281-.03516-.21777-.09473-.08594-.06055-.1709-.14453-.25391-.25488-.08398-.10938-.15234-.24512-.20703-.40625-.05371-.16113-.08008-.34375-.08008-.54688zm1.84082-.81836v1.6377h.01758c.17969 0 .33887-.0332.47852-.09863.13965-.06641.25-.16113.33203-.28418.08105-.12402.12207-.27148.12207-.44238s-.04102-.31738-.12207-.43945c-.08203-.12109-.19238-.21387-.33203-.27734-.13965-.06445-.29883-.0957-.47852-.0957h-.01758z"/><path d="m630.79785 243.56348c0-.22363.04297-.40527.12891-.54395.08496-.13965.20703-.24121.36426-.30469.15723-.06445.34375-.0957.55859-.0957h1.57812v-.4668c0-.04004.0127-.07227.03906-.09863.02539-.02539.05859-.03906.09863-.03906h.20312c.04004 0 .07227.01367.09863.03906.02539.02637.03906.05859.03906.09863v.4668h.99805c.03906 0 .07227.0127.09863.03809.02539.02637.03809.05957.03809.09863v.28125c0 .04004-.0127.07227-.03809.09863-.02637.02539-.05957.03906-.09863.03906h-.99805v.74121c0 .04395-.01367.07715-.03906.10156-.02637.02344-.05859.03516-.09863.03516h-.20312c-.04004 0-.07324-.01172-.09863-.03516-.02637-.02441-.03906-.05762-.03906-.10156v-.74121h-1.53613c-.1875 0-.33496.03125-.44238.0957-.10742.06348-.16113.17676-.16113.34082v.36426c0 .04004-.0127.07227-.03906.09863-.02539.02539-.05859.03906-.09863.03906h-.21484c-.04004 0-.07324-.01367-.09863-.03906-.02637-.02637-.03906-.05859-.03906-.09863v-.41211z"/><path d="m497.18457 67.81299c0-.34668.05371-.6377.16113-.87256.10742-.23535.24609-.41553.41504-.54102.16992-.12549.34766-.19238.53516-.2002.03223 0 .06055.01318.08691.03906.02539.02588.03906.05664.03906.09229v.30518c0 .04785-.0127.0835-.03613.10742s-.05176.04004-.08398.04785c-.0957.02393-.19043.07373-.2832.14941-.09375.07568-.17188.18408-.2334.32568s-.09277.32373-.09277.54688c0 .34277.06055.59473.18262.75635.12012.16113.28223.2417.48633.2417.13867 0 .25195-.04248.33789-.12842.08594-.08545.16309-.21631.23047-.3916s.1416-.40234.2207-.68115c.08398-.29102.17578-.53174.27539-.72314s.22266-.33398.37012-.42725c.14746-.09375.33496-.14062.5625-.14062.21484 0 .40723.05762.57617.17334.16992.11572.30371.28271.40332.50195s.14941.48193.14941.78906c0 .24707-.03223.46338-.09766.64844-.06641.18555-.15527.33984-.26465.46338s-.22656.2168-.35254.28076c-.125.06348-.24805.09766-.36719.10156-.02832 0-.05469-.00977-.08105-.02979s-.03906-.05176-.03906-.0957v-.31689c0-.02783.00781-.05664.02441-.08643.01562-.02979.04688-.05273.09082-.06885.16309-.02393.30078-.11572.41211-.2749.11133-.15967.16699-.3667.16699-.62158 0-.25928-.0498-.46924-.14941-.63037-.09961-.16162-.25488-.24219-.46582-.24219-.13574 0-.24805.0376-.33789.11328s-.16797.19531-.23633.35889c-.06738.16309-.13965.37646-.21484.63965-.08789.31836-.18066.57959-.2793.78271-.09766.20312-.21875.35352-.36426.45117s-.33203.14648-.55859.14648c-.25098 0-.46582-.06543-.64258-.19727-.17773-.13135-.31348-.31592-.40527-.55273-.09375-.2373-.14062-.51709-.14062-.83984z"/><path d="m497.24316 71.32178c0-.22314.04297-.40479.12891-.54395.08496-.13965.20703-.24121.36426-.30469.15723-.06396.34375-.0957.55859-.0957h1.57812v-.46631c0-.04004.0127-.07275.03906-.09863.02539-.02588.05859-.03906.09863-.03906h.20312c.04004 0 .07227.01318.09863.03906.02539.02588.03906.05859.03906.09863v.46631h.99805c.03906 0 .07227.0127.09863.03857.02539.02588.03809.05908.03809.09863v.28125c0 .03955-.0127.07227-.03809.09814-.02637.02588-.05957.03906-.09863.03906h-.99805v.74121c0 .04395-.01367.07764-.03906.10156-.02637.02393-.05859.03564-.09863.03564h-.20312c-.04004 0-.07324-.01172-.09863-.03564-.02637-.02393-.03906-.05762-.03906-.10156v-.74121h-1.53613c-.1875 0-.33496.03174-.44238.0957-.10742.06348-.16113.17725-.16113.34082v.36426c0 .04004-.0127.07275-.03906.09863-.02539.02588-.05859.03906-.09863.03906h-.21484c-.04004 0-.07324-.01318-.09863-.03906-.02637-.02588-.03906-.05859-.03906-.09863v-.41211z"/><path d="m497.18359 73.71826c0-.30273.05762-.55566.17285-.75879.11621-.20361.27637-.35889.48145-.46631.20508-.10791.43945-.16748.70215-.1792.06738-.00439.1543-.00635.25977-.00635s.19043.00195.25391.00635c.26758.01172.50293.07227.70605.18213.20312.10938.3623.26611.47754.46924.11621.20312.17383.4541.17383.75293s-.05762.5498-.17383.75293c-.11523.20361-.27441.35986-.47754.46924-.20312.10986-.43848.17041-.70605.18262-.06348.00391-.14844.00586-.25391.00586s-.19238-.00195-.25977-.00586c-.2627-.01221-.49707-.07178-.70215-.17969-.20508-.10742-.36523-.2627-.48145-.46582-.11523-.20312-.17285-.45654-.17285-.75928zm.45996 0c0 .24707.0791.44434.23633.5918s.3877.22705.69043.23926c.05957.00391.13477.00586.22656.00586s.16797-.00195.22754-.00586c.30273-.01221.5332-.0918.69043-.23926s.23633-.34473.23633-.5918-.0791-.44531-.23633-.59473-.3877-.22803-.69043-.23584c-.05957-.00439-.13574-.00635-.22754-.00635s-.16699.00195-.22656.00635c-.30273.00781-.5332.08643-.69043.23584s-.23633.34766-.23633.59473z"/><path d="m497.24316 76.01318c0-.03955.0127-.07275.03906-.09863.02539-.02588.05859-.03857.09863-.03857h2.83301c.04004 0 .07227.0127.09863.03857.02539.02588.03906.05908.03906.09863v.28125c0 .03955-.01367.07227-.03906.09863-.02637.02588-.05859.03857-.09863.03857h-.2627c.13477.10352.24512.23438.33105.3916s.12891.35938.12891.60645c0 .25928-.05664.47949-.1709.66064-.11328.18115-.27051.31885-.47168.4126-.20117.09326-.43555.14014-.70215.14014h-1.68555c-.04004 0-.07324-.0127-.09863-.03857-.02637-.02588-.03906-.05908-.03906-.09863v-.29883c0-.04004.0127-.07275.03906-.09863.02539-.02588.05859-.03906.09863-.03906h1.65527c.2793 0 .49707-.06787.6543-.20312.15723-.13574.23633-.33447.23633-.59766 0-.24707-.0791-.44531-.23633-.59473s-.375-.22412-.6543-.22412h-1.65527c-.04004 0-.07324-.01318-.09863-.03906-.02637-.02588-.03906-.05859-.03906-.09863v-.29883z"/><path d="m497.18359 80.74121c0-.41455.12598-.74316.37891-.98633.25391-.24316.59863-.37646 1.03711-.40039.05176-.00391.11914-.00586.2002-.00586.08203 0 .14844.00195.2002.00586.2832.01611.53125.08154.74414.19727.21387.11572.37793.27393.49316.4751.11621.20117.17383.4375.17383.7085 0 .30273-.06348.55664-.19141.76172-.12793.20557-.30859.36182-.54395.46924-.23535.10791-.50977.16162-.8252.16162h-.10156c-.04395 0-.07715-.01318-.10156-.03906-.02344-.02588-.03516-.05859-.03516-.09863v-2.06787h-.05469c-.16309.00781-.31543.04395-.45703.10742-.1416.06396-.25586.15625-.34375.27783-.08691.12158-.13086.26416-.13086.42773 0 .14307.02148.2627.06543.3584s.09277.17334.14648.2334c.05371.05957.09668.09912.12891.11914.04785.03613.07617.06396.08594.08398.00977.01953.01562.05176.01562.0957v.29248c0 .03613-.01172.06689-.0332.09277-.02246.02588-.05273.03662-.09277.03271-.05957-.00391-.13281-.03564-.21777-.09521-.08594-.06006-.1709-.14453-.25391-.25439-.08398-.10938-.15234-.24512-.20703-.40625-.05371-.16162-.08008-.34375-.08008-.54688zm1.84082-.81885v1.6377h.01758c.17969 0 .33887-.03271.47852-.09863s.25-.16064.33203-.28418c.08105-.12354.12207-.271.12207-.44189 0-.17139-.04102-.31787-.12207-.43945-.08203-.12158-.19238-.21436-.33203-.27783-.13965-.06396-.29883-.0957-.47852-.0957h-.01758z"/><path d="m497.18359 84.09961c0-.28271.05469-.52686.16406-.73193.10938-.20557.2666-.36377.47266-.4751.20508-.11182.45117-.17139.7373-.1792.06055-.00439.13965-.00635.23926-.00635s.17969.00195.23926.00635c.28711.00781.5332.06738.73828.1792.20508.11133.3623.26953.47266.4751.10938.20508.16406.44922.16406.73193 0 .23145-.03223.42969-.0957.59473-.06348.16553-.14551.30225-.24512.40967s-.20703.18799-.32324.24219c-.11523.05371-.22461.08252-.32812.08643-.04004.00391-.07227-.00781-.0957-.03564-.02441-.02832-.03613-.06201-.03613-.10156v-.28711c0-.04004.00879-.06982.02734-.08984.01758-.02002.04883-.03955.09277-.05957.19434-.07178.33203-.16943.41211-.29297.0791-.12354.11914-.27686.11914-.45996 0-.23926-.07324-.43359-.2207-.58301s-.38477-.22998-.71094-.24219c-.14355-.00391-.2832-.00391-.41895 0-.33105.01221-.56836.09277-.71387.24219s-.21875.34375-.21875.58301c0 .18311.04004.33643.12012.45996.0791.12354.2168.22119.41211.29297.04395.02002.0752.03955.0957.05957.01953.02002.03027.0498.03027.08984v.28711c0 .03955-.01367.07324-.03906.10156-.02637.02783-.05859.03955-.09863.03564-.08398-.00391-.16992-.02197-.25684-.05371-.08789-.03174-.17676-.08301-.2666-.15234-.08984-.06982-.16895-.15674-.23926-.26025-.06934-.10352-.125-.22705-.16699-.37061-.04199-.14307-.0625-.30859-.0625-.49609z"/><path d="m497.18359 87.30371c0-.25537.05664-.47168.16992-.64893.11426-.17725.27246-.31152.47559-.40332s.43652-.13721.69922-.13721h1.68555c.04004 0 .07227.0127.09863.03857.02539.02588.03906.05859.03906.09863v.29883c0 .04004-.01367.07275-.03906.09863-.02637.02588-.05859.03906-.09863.03906h-1.65625c-.59375 0-.88965.25879-.88965.77686 0 .24707.07812.44531.23535.59473s.37598.22412.6543.22412h1.65625c.04004 0 .07227.0127.09863.03906.02539.02588.03906.05859.03906.09863v.29883c0 .03955-.01367.07178-.03906.09521-.02637.02393-.05859.03613-.09863.03613h-2.83301c-.04004 0-.07324-.01221-.09863-.03613-.02637-.02344-.03906-.05566-.03906-.09521v-.28125c0-.03955.0127-.07275.03906-.09863.02539-.02588.05859-.03857.09863-.03857h.2627c-.13965-.10791-.25098-.23828-.33496-.3916-.08301-.15332-.125-.35547-.125-.60645z"/><path d="m497.24316 90.95557c0-.22314.04297-.40479.12891-.54395.08496-.13965.20703-.24121.36426-.30469.15723-.06396.34375-.0957.55859-.0957h1.57812v-.46631c0-.04004.0127-.07275.03906-.09863.02539-.02588.05859-.03906.09863-.03906h.20312c.04004 0 .07227.01318.09863.03906.02539.02588.03906.05859.03906.09863v.46631h.99805c.03906 0 .07227.0127.09863.03857.02539.02588.03809.05908.03809.09863v.28125c0 .03955-.0127.07227-.03809.09814-.02637.02588-.05957.03906-.09863.03906h-.99805v.74121c0 .04395-.01367.07764-.03906.10156-.02637.02393-.05859.03564-.09863.03564h-.20312c-.04004 0-.07324-.01172-.09863-.03564-.02637-.02393-.03906-.05762-.03906-.10156v-.74121h-1.53613c-.1875 0-.33496.03174-.44238.0957-.10742.06348-.16113.17725-.16113.34082v.36426c0 .04004-.0127.07275-.03906.09863-.02539.02588-.05859.03906-.09863.03906h-.21484c-.04004 0-.07324-.01318-.09863-.03906-.02637-.02588-.03906-.05859-.03906-.09863v-.41211z"/><path d="m497.24316 93.29248c0-.22314.04297-.40479.12891-.54395.08496-.13965.20703-.24121.36426-.30469.15723-.06396.34375-.0957.55859-.0957h1.57812v-.46631c0-.04004.0127-.07275.03906-.09863.02539-.02588.05859-.03906.09863-.03906h.20312c.04004 0 .07227.01318.09863.03906.02539.02588.03906.05859.03906.09863v.46631h.99805c.03906 0 .07227.0127.09863.03857.02539.02588.03809.05908.03809.09863v.28125c0 .03955-.0127.07227-.03809.09814-.02637.02588-.05957.03906-.09863.03906h-.99805v.74121c0 .04395-.01367.07764-.03906.10156-.02637.02393-.05859.03564-.09863.03564h-.20312c-.04004 0-.07324-.01172-.09863-.03564-.02637-.02393-.03906-.05762-.03906-.10156v-.74121h-1.53613c-.1875 0-.33496.03174-.44238.0957-.10742.06348-.16113.17725-.16113.34082v.36426c0 .04004-.0127.07275-.03906.09863-.02539.02588-.05859.03906-.09863.03906h-.21484c-.04004 0-.07324-.01318-.09863-.03906-.02637-.02588-.03906-.05859-.03906-.09863v-.41211z"/><path d="m497.18359 95.65918c0-.41455.12598-.74316.37891-.98633.25391-.24316.59863-.37646 1.03711-.40039.05176-.00391.11914-.00586.2002-.00586.08203 0 .14844.00195.2002.00586.2832.01611.53125.08154.74414.19727.21387.11572.37793.27393.49316.4751.11621.20117.17383.4375.17383.7085 0 .30273-.06348.55664-.19141.76172-.12793.20557-.30859.36182-.54395.46924-.23535.10791-.50977.16162-.8252.16162h-.10156c-.04395 0-.07715-.01318-.10156-.03906-.02344-.02588-.03516-.05859-.03516-.09863v-2.06787h-.05469c-.16309.00781-.31543.04395-.45703.10742-.1416.06396-.25586.15625-.34375.27783-.08691.12158-.13086.26416-.13086.42773 0 .14307.02148.2627.06543.3584s.09277.17334.14648.2334c.05371.05957.09668.09912.12891.11914.04785.03613.07617.06396.08594.08398.00977.01953.01562.05176.01562.0957v.29248c0 .03613-.01172.06689-.0332.09277-.02246.02588-.05273.03662-.09277.03271-.05957-.00391-.13281-.03564-.21777-.09521-.08594-.06006-.1709-.14453-.25391-.25439-.08398-.10938-.15234-.24512-.20703-.40625-.05371-.16162-.08008-.34375-.08008-.54688zm1.84082-.81885v1.6377h.01758c.17969 0 .33887-.03271.47852-.09863s.25-.16064.33203-.28418c.08105-.12354.12207-.271.12207-.44189 0-.17139-.04102-.31787-.12207-.43945-.08203-.12158-.19238-.21436-.33203-.27783-.13965-.06396-.29883-.0957-.47852-.0957h-.01758z"/><path d="m497.24316 97.90039c0-.03955.0127-.07275.03906-.09863.02539-.02588.05859-.03857.09863-.03857h2.82715c.03906 0 .07324.0127.10156.03857.02734.02588.04199.05908.04199.09863v.2749c0 .04004-.01465.07373-.04199.10205-.02832.02783-.0625.0415-.10156.0415h-.26367c.13574.07959.2373.18945.30566.32861.06738.13965.10156.30908.10156.5083v.23291c0 .04004-.01367.07275-.03906.09863-.02637.02588-.05859.03906-.09863.03906h-.24512c-.04004 0-.07227-.01318-.0957-.03906s-.03613-.05859-.03613-.09863v-.3584c0-.21533-.0625-.38477-.18848-.5083-.125-.12354-.29492-.18506-.51074-.18506h-1.75684c-.04004 0-.07324-.01416-.09863-.04199-.02637-.02783-.03906-.06152-.03906-.10156v-.29297z"/><path d="m497.18359 101.10986c0-.22314.02734-.41455.08301-.57373.05664-.15918.12402-.28906.2041-.38867.0791-.09961.15918-.17432.23828-.22412.08008-.0498.14355-.07666.19141-.08057.04395-.00391.07812.00977.10156.04199.02441.03174.03613.06348.03613.0957v.26855c0 .02002-.00293.03711-.00879.05127-.00586.01367-.02344.03271-.05078.05664-.05566.05176-.11133.10938-.16797.17334-.05566.06348-.10156.14209-.13672.23584-.03613.09375-.05371.21045-.05371.34961 0 .20361.03809.37061.11621.50244.07715.13135.19238.19727.34375.19727.09961 0 .17871-.02686.23926-.08105.05957-.05371.11328-.14941.16113-.28662.04785-.1377.09766-.32568.14941-.56494.05566-.23926.12402-.42822.20605-.56787s.17969-.23877.29297-.29883c.11328-.05957.24219-.08984.38574-.08984.14746 0 .29004.04395.42676.13184.1377.0874.25.21582.33789.38525s.13184.38184.13184.63672c0 .20703-.02637.38428-.07812.53174s-.11621.26904-.19434.36475c-.07715.0957-.1543.16748-.22949.21533-.07617.04785-.13965.07373-.19141.07764-.04004.00391-.07324-.0083-.09863-.03613-.02637-.02783-.03906-.05957-.03906-.09521v-.25146c0-.02783.00586-.05078.01758-.06836.0127-.01807.02637-.03516.04199-.05078.05176-.04004.10352-.08691.15527-.14062s.09473-.12354.12891-.20898c.03418-.08594.05078-.19824.05078-.33789 0-.19922-.04199-.34863-.125-.44824-.08398-.09961-.18945-.14941-.31738-.14941-.0752 0-.14355.02197-.20312.06592-.05957.04346-.11328.12744-.16113.25098-.04785.12305-.09961.30664-.15527.5498-.05176.2627-.12207.47021-.20996.62158-.08691.15137-.18848.25879-.30469.32275-.11523.06348-.24902.0957-.40039.0957-.16699 0-.32031-.04785-.45996-.14355s-.25-.23926-.33203-.43018c-.08105-.19141-.12207-.42676-.12207-.70557z"/><path d="m497.24316 104.76172c0-.04346.0127-.07764.03906-.10156.02539-.02393.05859-.03564.09863-.03564h3.90918c.03906 0 .07227.01172.09863.03564.02539.02393.03809.05811.03809.10156v.31689c0 .04004-.0127.07275-.03809.09863-.02637.02588-.05957.03906-.09863.03906h-3.52734v1.98438c0 .04346-.0127.07861-.03809.10449-.02637.02588-.06152.03906-.10449.03906h-.23926c-.04004 0-.07324-.01318-.09863-.03906-.02637-.02588-.03906-.06104-.03906-.10449z"/><path d="m497.18359 108.77881c0-.19922.04004-.38086.11914-.54395.08008-.16357.1875-.29492.32324-.39453.13477-.09961.28809-.14941.45996-.14941.27539 0 .49414.11133.65723.33447s.27148.51416.32324.87305l.125.89014h.17383c.19141 0 .34082-.05469.44824-.16406.10742-.10986.16113-.28809.16113-.53516 0-.17529-.03613-.31885-.10742-.43018-.07227-.11182-.16309-.18945-.27539-.23291-.05957-.02393-.08887-.06592-.08887-.12598v-.26855c0-.04395.0127-.07715.03809-.09863.02637-.02197.05664-.0332.09277-.0332.05957 0 .13379.02295.22168.06885.08691.0459.17285.1167.25684.2124.08301.0957.1543.21777.21191.36719s.08691.33203.08691.54736c0 .23877-.03125.43994-.09277.60352-.06152.16309-.14453.29199-.24805.38525-.10352.09375-.2207.16162-.35254.20361-.13184.0415-.26562.0625-.40039.0625h-1.93652c-.04004 0-.07324-.01318-.09863-.03857-.02637-.02637-.03906-.05908-.03906-.09863v-.27539c0-.04346.0127-.07764.03906-.10156.02539-.02393.05859-.03564.09863-.03564h.25684c-.07129-.05176-.14258-.12158-.21191-.20947-.07031-.0874-.12793-.19678-.17383-.32861-.0459-.13135-.06836-.29297-.06836-.48389zm.44825.12549c0 .16309.03418.3125.10449.44824.06934.13525.17773.24219.3252.31982s.33301.11621.55664.11621h.16699l-.10156-.69287c-.04004-.2832-.10645-.49609-.2002-.63965s-.21191-.21533-.35547-.21533c-.11133 0-.2041.03271-.27832.09863-.07324.06592-.12793.14941-.16406.25098s-.05371.20605-.05371.31396z"/><path d="m497.24316 111.34814c0-.03955.0127-.07275.03906-.09863.02539-.02588.05859-.03857.09863-.03857h2.83301c.04004 0 .07227.0127.09863.03857.02539.02588.03906.05908.03906.09863v.28125c0 .03955-.01367.07227-.03906.09863-.02637.02588-.05859.03857-.09863.03857h-.2627c.13477.10352.24512.23438.33105.3916s.12891.35938.12891.60645c0 .25928-.05664.47949-.1709.66064-.11328.18115-.27051.31885-.47168.4126-.20117.09326-.43555.14014-.70215.14014h-1.68555c-.04004 0-.07324-.0127-.09863-.03857-.02637-.02588-.03906-.05908-.03906-.09863v-.29883c0-.04004.0127-.07275.03906-.09863.02539-.02588.05859-.03906.09863-.03906h1.65527c.2793 0 .49707-.06787.6543-.20312.15723-.13574.23633-.33447.23633-.59766 0-.24707-.0791-.44531-.23633-.59473s-.375-.22412-.6543-.22412h-1.65527c-.04004 0-.07324-.01318-.09863-.03906-.02637-.02588-.03906-.05859-.03906-.09863v-.29883z"/><path d="m497.18359 116.07617c0-.41455.12598-.74316.37891-.98633.25391-.24316.59863-.37646 1.03711-.40039.05176-.00391.11914-.00586.2002-.00586.08203 0 .14844.00195.2002.00586.2832.01611.53125.08154.74414.19727.21387.11572.37793.27393.49316.4751.11621.20117.17383.4375.17383.7085 0 .30273-.06348.55664-.19141.76172-.12793.20557-.30859.36182-.54395.46924-.23535.10791-.50977.16162-.8252.16162h-.10156c-.04395 0-.07715-.01318-.10156-.03906-.02344-.02588-.03516-.05859-.03516-.09863v-2.06787h-.05469c-.16309.00781-.31543.04395-.45703.10742-.1416.06396-.25586.15625-.34375.27783-.08691.12158-.13086.26416-.13086.42773 0 .14307.02148.2627.06543.3584s.09277.17334.14648.2334c.05371.05957.09668.09912.12891.11914.04785.03613.07617.06396.08594.08398.00977.01953.01562.05176.01562.0957v.29248c0 .03613-.01172.06689-.0332.09277-.02246.02588-.05273.03662-.09277.03271-.05957-.00391-.13281-.03564-.21777-.09521-.08594-.06006-.1709-.14453-.25391-.25439-.08398-.10938-.15234-.24512-.20703-.40625-.05371-.16162-.08008-.34375-.08008-.54688zm1.84082-.81885v1.6377h.01758c.17969 0 .33887-.03271.47852-.09863s.25-.16064.33203-.28418c.08105-.12354.12207-.271.12207-.44189 0-.17139-.04102-.31787-.12207-.43945-.08203-.12158-.19238-.21436-.33203-.27783-.13965-.06396-.29883-.0957-.47852-.0957h-.01758z"/><path d="m221.35547 300.76074c-.03955 0-.07275-.0127-.09863-.03906-.02588-.02539-.03857-.05859-.03857-.09863v-3.51465h-1.14746c-.04004 0-.07275-.0127-.09863-.03809-.02637-.02637-.03906-.05957-.03906-.09863v-.25098c0-.04395.0127-.0791.03906-.10547.02588-.02539.05859-.03809.09863-.03809h2.88086c.04346 0 .07861.0127.10449.03809.02588.02637.03857.06152.03857.10547v.25098c0 .03906-.0127.07227-.03857.09863-.02588.02539-.06104.03809-.10449.03809h-1.1416v3.51465c0 .04004-.01318.07324-.03906.09863-.02588.02637-.06055.03906-.10449.03906h-.31104z"/><path d="m224.38574 300.82031c-.30273 0-.55566-.05762-.75879-.17285-.20361-.11621-.35889-.27637-.46631-.48145-.10791-.20508-.16748-.43945-.1792-.70215-.00439-.06738-.00635-.1543-.00635-.25977s.00195-.19043.00635-.25391c.01172-.26758.07227-.50293.18213-.70605.10938-.20312.26611-.3623.46924-.47754.20312-.11621.4541-.17383.75293-.17383s.5498.05762.75293.17383c.20361.11523.35986.27441.46924.47754.10986.20312.17041.43848.18262.70605.00391.06348.00586.14844.00586.25391s-.00195.19238-.00586.25977c-.01221.2627-.07178.49707-.17969.70215-.10742.20508-.2627.36523-.46582.48145-.20312.11523-.45654.17285-.75928.17285zm0-.45996c.24707 0 .44434-.0791.5918-.23633s.22705-.3877.23926-.69043c.00391-.05957.00586-.13477.00586-.22656s-.00195-.16797-.00586-.22754c-.01221-.30273-.0918-.5332-.23926-.69043s-.34473-.23633-.5918-.23633-.44531.0791-.59473.23633-.22803.3877-.23584.69043c-.00439.05957-.00635.13574-.00635.22754s.00195.16699.00635.22656c.00781.30273.08643.5332.23584.69043s.34766.23633.59473.23633z"/><path d="m227.28467 300.76074c-.05176 0-.0918-.0127-.11963-.03906-.02783-.02539-.05176-.0625-.07178-.11035l-.84863-2.77344c-.00781-.01953-.01172-.04004-.01172-.05957 0-.03613.0127-.06543.03857-.08984.02588-.02344.05469-.03613.08691-.03613h.2627c.04395 0 .07764.0127.10156.03613.02393.02441.04004.0459.04785.06543l.66357 2.25391.71143-2.22949c.00781-.02832.0249-.05566.05078-.08398.02588-.02734.06445-.04199.11621-.04199h.20361c.05176 0 .09131.01465.11914.04199.02783.02832.04395.05566.04785.08398l.71143 2.22949.66357-2.25391c.00391-.01953.01807-.04102.0415-.06543.02393-.02344.05811-.03613.10205-.03613h.26855c.03223 0 .06006.0127.08398.03613.02393.02441.03564.05371.03564.08984 0 .01953-.00391.04004-.01172.05957l-.84277 2.77344c-.01611.04785-.03809.08496-.06592.11035-.02783.02637-.07178.03906-.13135.03906h-.2334c-.05176 0-.09424-.0127-.12842-.03906-.03369-.02539-.05664-.0625-.06836-.11035l-.69336-2.13965-.69336 2.13965c-.01611.04785-.04004.08496-.07178.11035-.03223.02637-.07568.03906-.13184.03906h-.23291z"/><path d="m232.03076 300.82031c-.19922 0-.38086-.04004-.54395-.11914-.16357-.08008-.29492-.1875-.39453-.32324-.09961-.13477-.14941-.28809-.14941-.45996 0-.27539.11133-.49414.33447-.65723s.51416-.27148.87305-.32324l.89014-.125v-.17383c0-.19141-.05469-.34082-.16406-.44824-.10986-.10742-.28809-.16113-.53516-.16113-.17529 0-.31885.03613-.43018.10742-.11182.07227-.18945.16309-.23291.27539-.02393.05957-.06592.08887-.12598.08887h-.26855c-.04395 0-.07715-.0127-.09863-.03809-.02197-.02637-.0332-.05664-.0332-.09277 0-.05957.02295-.13379.06885-.22168.0459-.08691.1167-.17285.2124-.25684.0957-.08301.21777-.1543.36719-.21191s.33203-.08691.54736-.08691c.23877 0 .43994.03125.60352.09277.16309.06152.29199.14453.38525.24805.09375.10352.16162.2207.20361.35254.0415.13184.0625.26562.0625.40039v1.93652c0 .04004-.01318.07324-.03857.09863-.02637.02637-.05908.03906-.09863.03906h-.27539c-.04346 0-.07764-.0127-.10156-.03906-.02393-.02539-.03564-.05859-.03564-.09863v-.25684c-.05176.07129-.12158.14258-.20947.21191-.0874.07031-.19678.12793-.32861.17383-.13135.0459-.29297.06836-.48389.06836zm.12549-.44824c.16309 0 .3125-.03418.44824-.10449.13525-.06934.24219-.17773.31982-.3252s.11621-.33301.11621-.55664v-.16699l-.69287.10156c-.2832.04004-.49609.10645-.63965.2002s-.21533.21191-.21533.35547c0 .11133.03271.2041.09863.27832.06592.07324.14941.12793.25098.16406s.20605.05371.31396.05371z"/><path d="m234.6001 300.76074c-.03955 0-.07275-.0127-.09863-.03906-.02588-.02539-.03857-.05859-.03857-.09863v-2.82715c0-.03906.0127-.07324.03857-.10156.02588-.02734.05908-.04199.09863-.04199h.2749c.04004 0 .07373.01465.10205.04199.02783.02832.0415.0625.0415.10156v.26367c.07959-.13574.18945-.2373.32861-.30566.13965-.06738.30908-.10156.5083-.10156h.23291c.04004 0 .07275.01367.09863.03906.02588.02637.03906.05859.03906.09863v.24512c0 .04004-.01318.07227-.03906.0957s-.05859.03613-.09863.03613h-.3584c-.21533 0-.38477.0625-.5083.18848-.12354.125-.18506.29492-.18506.51074v1.75684c0 .04004-.01416.07324-.04199.09863-.02783.02637-.06152.03906-.10156.03906h-.29297z"/><path d="m237.8042 300.82031c-.21924 0-.40869-.03906-.56787-.11621-.15967-.07812-.29004-.18359-.3916-.31738-.10156-.13281-.17725-.28516-.22705-.45703-.0498-.1709-.07861-.35254-.08691-.54395-.00391-.06348-.00586-.12305-.00586-.17871s.00195-.11621.00586-.17969c.0083-.1875.03711-.36621.08691-.53809.0498-.1709.12549-.32422.22705-.45996s.23193-.24219.3916-.31934c.15918-.07812.34863-.11719.56787-.11719.23486 0 .43018.04199.58545.12598.15527.08301.2832.1875.38281.31055v-1.375c0-.03906.0127-.07227.03857-.09863.02588-.02539.05859-.03809.09863-.03809h.28711c.03955 0 .07227.0127.09863.03809.02588.02637.03857.05957.03857.09863v3.96875c0 .04004-.0127.07324-.03857.09863-.02637.02637-.05908.03906-.09863.03906h-.26904c-.04395 0-.07764-.0127-.10156-.03906-.02393-.02539-.03613-.05859-.03613-.09863v-.25098c-.09961.12793-.229.23438-.38818.32031-.15967.08496-.35889.12793-.59766.12793zm.12549-.48437c.19922 0 .3584-.04492.47803-.13672s.20898-.20801.26904-.34961c.05957-.1416.09131-.28613.0957-.43359.00391-.06348.00586-.14062.00586-.23047s-.00195-.16602-.00586-.22949c-.00439-.13965-.03711-.27734-.09863-.41309-.06201-.13477-.15381-.24707-.2749-.33398-.12158-.08789-.27832-.13184-.46924-.13184-.20361 0-.36475.04492-.48438.13477-.11963.08887-.20508.20703-.25684.35254s-.08203.30176-.08984.46875c-.00391.11621-.00391.23145 0 .34668.00781.16797.03809.32422.08984.46973s.13721.2627.25684.35254.28076.13379.48438.13379z"/><path d="m241.30029 300.82031c-.22314 0-.41455-.02734-.57373-.08301-.15918-.05664-.28906-.12402-.38867-.2041-.09961-.0791-.17432-.15918-.22412-.23828-.0498-.08008-.07666-.14355-.08057-.19141-.00391-.04395.00977-.07812.04199-.10156.03174-.02441.06348-.03613.0957-.03613h.26855c.02002 0 .03711.00293.05127.00879.01367.00586.03271.02344.05664.05078.05176.05566.10938.11133.17334.16797.06348.05566.14209.10156.23584.13672.09375.03613.21045.05371.34961.05371.20361 0 .37061-.03809.50244-.11621.13135-.07715.19727-.19238.19727-.34375 0-.09961-.02686-.17871-.08105-.23926-.05371-.05957-.14941-.11328-.28662-.16113-.1377-.04785-.32568-.09766-.56494-.14941-.23926-.05566-.42822-.12402-.56787-.20605s-.23877-.17969-.29883-.29297c-.05957-.11328-.08984-.24219-.08984-.38574 0-.14746.04395-.29004.13184-.42676.0874-.1377.21582-.25.38525-.33789s.38184-.13184.63672-.13184c.20703 0 .38428.02637.53174.07812s.26904.11621.36475.19434c.0957.07715.16748.1543.21533.22949.04785.07617.07373.13965.07764.19141.00391.04004-.0083.07324-.03613.09863-.02783.02637-.05957.03906-.09521.03906h-.25146c-.02783 0-.05078-.00586-.06836-.01758-.01807-.0127-.03516-.02637-.05078-.04199-.04004-.05176-.08691-.10352-.14062-.15527s-.12354-.09473-.20898-.12891c-.08594-.03418-.19824-.05078-.33789-.05078-.19922 0-.34863.04199-.44824.125-.09961.08398-.14941.18945-.14941.31738 0 .0752.02197.14355.06592.20312.04346.05957.12744.11328.25098.16113.12305.04785.30664.09961.5498.15527.2627.05176.47021.12207.62158.20996.15137.08691.25879.18848.32275.30469.06348.11523.0957.24902.0957.40039 0 .16699-.04785.32031-.14355.45996s-.23926.25-.43018.33203c-.19141.08105-.42676.12207-.70557.12207z"/><path d="m220.44092 307.93359c-.04346 0-.07764-.0127-.10156-.03906-.02393-.02539-.03564-.05859-.03564-.09863v-3.90234c0-.04395.01172-.0791.03564-.10547.02393-.02539.05811-.03809.10156-.03809h1.6377c.29932 0 .54297.04883.73242.14648.18896.09766.32861.22949.41846.39746.08936.16699.13428.35449.13428.56152 0 .16309-.02686.30371-.08057.4209-.05371.11816-.12061.21387-.2002.28711-.07959.07422-.15771.13086-.23291.1709.15527.0752.29346.19922.41504.37012.12158.17188.18262.37891.18262.62207 0 .21875-.05029.41992-.14941.60352-.09961.18359-.24805.33008-.44531.43945s-.43945.16406-.72656.16406h-1.68555zm.44873-2.41504h1.09961c.25488 0 .44824-.05859.57959-.17578.13184-.11816.19727-.27832.19727-.48145s-.06543-.3584-.19727-.46582c-.13135-.10742-.32471-.16211-.57959-.16211h-1.09961zm0 1.93067h1.15918c.25488 0 .45215-.06934.5918-.20898s.20947-.31055.20947-.51367c0-.21191-.06982-.38574-.20947-.52344s-.33691-.20605-.5918-.20605h-1.15918v1.45215z"/><path d="m225.4917 307.99316c-.30273 0-.55566-.05762-.75879-.17285-.20361-.11621-.35889-.27637-.46631-.48145-.10791-.20508-.16748-.43945-.1792-.70215-.00439-.06738-.00635-.1543-.00635-.25977s.00195-.19043.00635-.25391c.01172-.26758.07227-.50293.18213-.70605.10938-.20312.26611-.3623.46924-.47754.20312-.11621.4541-.17383.75293-.17383s.5498.05762.75293.17383c.20361.11523.35986.27441.46924.47754.10986.20312.17041.43848.18262.70605.00391.06348.00586.14844.00586.25391s-.00195.19238-.00586.25977c-.01221.2627-.07178.49707-.17969.70215-.10742.20508-.2627.36523-.46582.48145-.20312.11523-.45654.17285-.75928.17285zm0-.45996c.24707 0 .44434-.0791.5918-.23633s.22705-.3877.23926-.69043c.00391-.05957.00586-.13477.00586-.22656s-.00195-.16797-.00586-.22754c-.01221-.30273-.0918-.5332-.23926-.69043s-.34473-.23633-.5918-.23633-.44531.0791-.59473.23633-.22803.3877-.23584.69043c-.00439.05957-.00635.13574-.00635.22754s.00195.16699.00635.22656c.00781.30273.08643.5332.23584.69043s.34766.23633.59473.23633z"/><path d="m227.78662 307.93359c-.03955 0-.07275-.0127-.09863-.03906-.02588-.02539-.03857-.05859-.03857-.09863v-2.82715c0-.03906.0127-.07324.03857-.10156.02588-.02734.05908-.04199.09863-.04199h.2749c.04004 0 .07373.01465.10205.04199.02783.02832.0415.0625.0415.10156v.26367c.07959-.13574.18945-.2373.32861-.30566.13965-.06738.30908-.10156.5083-.10156h.23291c.04004 0 .07275.01367.09863.03906.02588.02637.03906.05859.03906.09863v.24512c0 .04004-.01318.07227-.03906.0957s-.05859.03613-.09863.03613h-.3584c-.21533 0-.38477.0625-.5083.18848-.12354.125-.18506.29492-.18506.51074v1.75684c0 .04004-.01416.07324-.04199.09863-.02783.02637-.06152.03906-.10156.03906h-.29297z"/><path d="m231.13379 307.99316c-.30273 0-.55566-.05762-.75879-.17285-.20361-.11621-.35889-.27637-.46631-.48145-.10791-.20508-.16748-.43945-.1792-.70215-.00439-.06738-.00635-.1543-.00635-.25977s.00195-.19043.00635-.25391c.01172-.26758.07227-.50293.18213-.70605.10938-.20312.26611-.3623.46924-.47754.20312-.11621.4541-.17383.75293-.17383s.5498.05762.75293.17383c.20361.11523.35986.27441.46924.47754.10986.20312.17041.43848.18262.70605.00391.06348.00586.14844.00586.25391s-.00195.19238-.00586.25977c-.01221.2627-.07178.49707-.17969.70215-.10742.20508-.2627.36523-.46582.48145-.20312.11523-.45654.17285-.75928.17285zm0-.45996c.24707 0 .44434-.0791.5918-.23633s.22705-.3877.23926-.69043c.00391-.05957.00586-.13477.00586-.22656s-.00195-.16797-.00586-.22754c-.01221-.30273-.0918-.5332-.23926-.69043s-.34473-.23633-.5918-.23633-.44531.0791-.59473.23633-.22803.3877-.23584.69043c-.00439.05957-.00635.13574-.00635.22754s.00195.16699.00635.22656c.00781.30273.08643.5332.23584.69043s.34766.23633.59473.23633z"/><path d="m234.45117 307.99316c-.25537 0-.47168-.05664-.64893-.16992-.17725-.11426-.31152-.27246-.40332-.47559s-.13721-.43652-.13721-.69922v-1.68555c0-.04004.0127-.07227.03857-.09863.02588-.02539.05859-.03906.09863-.03906h.29883c.04004 0 .07275.01367.09863.03906.02588.02637.03906.05859.03906.09863v1.65625c0 .59375.25879.88965.77686.88965.24707 0 .44531-.07812.59473-.23535s.22412-.37598.22412-.6543v-1.65625c0-.04004.0127-.07227.03906-.09863.02588-.02539.05859-.03906.09863-.03906h.29883c.03955 0 .07178.01367.09521.03906.02393.02637.03613.05859.03613.09863v2.83301c0 .04004-.01221.07324-.03613.09863-.02344.02637-.05566.03906-.09521.03906h-.28125c-.03955 0-.07275-.0127-.09863-.03906-.02588-.02539-.03857-.05859-.03857-.09863v-.2627c-.10791.13965-.23828.25098-.3916.33496-.15332.08301-.35547.125-.60645.125z"/><path d="m238.1626 309.24805c-.271 0-.49316-.03516-.6665-.10742-.17334-.07129-.30859-.1582-.40625-.25977s-.16748-.20312-.20947-.30469c-.0415-.10156-.06445-.18262-.06836-.24219-.00439-.04004.00879-.07324.03857-.10156s.06299-.04199.09863-.04199h.28711c.03564 0 .06543.00781.08936.02441.02393.01562.04395.0498.06006.10156.02393.05957.05957.12598.10742.2002.04785.07324.12158.1377.22119.19141s.23926.08008.41846.08008c.18701 0 .34473-.02539.47217-.07715s.22412-.13965.29004-.26367c.06543-.12305.09863-.29492.09863-.51367v-.40625c-.0957.12305-.22119.22559-.37695.30762-.15527.08203-.35059.12207-.58545.12207-.22314 0-.41455-.03809-.57373-.11621-.15967-.07715-.29004-.18262-.3916-.31641s-.17725-.28613-.22705-.45703c-.0498-.17188-.07861-.35059-.08691-.53809-.00391-.11133-.00391-.22168 0-.3291.0083-.1875.03711-.36621.08691-.53809.0498-.1709.12549-.32422.22705-.45996s.23193-.24219.3916-.31934c.15918-.07812.35059-.11719.57373-.11719.23877 0 .43701.04395.59473.13184.15723.08789.28564.19727.38525.32812v-.25684c0-.03906.01318-.07324.03906-.10156.02588-.02734.05859-.04199.09863-.04199h.2749c.03955 0 .07373.01465.10156.04199.02783.02832.04199.0625.04199.10156v2.89941c0 .2666-.04492.50391-.13477.71094-.08936.20703-.23682.37012-.44238.49023-.20508.11914-.48096.17871-.82764.17871zm-.01172-1.76856c.19922 0 .35938-.0459.48096-.1377s.21094-.20703.26904-.34668c.05762-.13965.08838-.28125.09277-.42383.00391-.05664.00586-.125.00586-.20703 0-.08105-.00195-.15039-.00586-.20605-.00439-.14355-.03516-.28418-.09277-.42383-.05811-.13965-.14746-.25488-.26904-.34668s-.28174-.1377-.48096-.1377c-.19971 0-.35889.04492-.47852.13477-.11914.08887-.20508.20703-.25684.35254s-.08154.30176-.08984.46875c-.00391.10352-.00391.20898 0 .31738.0083.16699.03809.32324.08984.46875s.1377.2627.25684.35254c.11963.08984.27881.13477.47852.13477z"/><path d="m240.60156 307.93359c-.04004 0-.07275-.0127-.09863-.03906-.02637-.02539-.03906-.05859-.03906-.09863v-3.96875c0-.03906.0127-.07227.03906-.09863.02588-.02539.05859-.03809.09863-.03809h.29883c.04346 0 .07764.0127.10156.03809.02393.02637.03564.05957.03564.09863v1.39258c.10791-.13477.23926-.24512.39453-.32812.15527-.08398.35254-.12598.5918-.12598.25879 0 .479.05664.66064.1709.18115.11328.31836.27051.41211.47168s.14062.43555.14062.70215v1.68555c0 .04004-.01221.07324-.03613.09863-.02393.02637-.05762.03906-.10156.03906h-.29883c-.03955 0-.07275-.0127-.09863-.03906-.02588-.02539-.03857-.05859-.03857-.09863v-1.65527c0-.2793-.06787-.49707-.20312-.6543-.13574-.15723-.33496-.23633-.59814-.23633-.24707 0-.44629.0791-.59766.23633s-.22705.375-.22705.6543v1.65527c0 .04004-.01172.07324-.03564.09863-.02393.02637-.05811.03906-.10156.03906h-.29883z"/><path d="m245.77686 307.93359c-.03955 0-.07275-.0127-.09814-.03906-.02637-.02539-.03906-.05859-.03906-.09863v-3.90234c0-.04395.0127-.0791.03906-.10547.02539-.02539.05859-.03809.09814-.03809h.29932c.04736 0 .0835.01172.10742.03516.02393.02441.03955.04395.04785.06055l1.26123 2.41406 1.27295-2.41406c.00781-.0166.02295-.03613.04492-.06055.02148-.02344.05664-.03516.10449-.03516h.29297c.04346 0 .07861.0127.10449.03809.02588.02637.03906.06152.03906.10547v3.90234c0 .04004-.01318.07324-.03906.09863-.02588.02637-.06104.03906-.10449.03906h-.29297c-.04004 0-.07275-.0127-.09863-.03906-.02588-.02539-.03906-.05859-.03906-.09863v-2.94043l-.99805 1.94824c-.01611.04004-.03955.07129-.07178.09277-.03174.02246-.07178.0332-.11963.0332h-.18506c-.05176 0-.0918-.01074-.11963-.0332-.02783-.02148-.05176-.05273-.07178-.09277l-1.00391-1.94824v2.94043c0 .04004-.01318.07324-.03906.09863-.02588.02637-.05859.03906-.09863.03906h-.29297z"/><path d="m251.17432 307.99316c-.19922 0-.38086-.04004-.54395-.11914-.16357-.08008-.29492-.1875-.39453-.32324-.09961-.13477-.14941-.28809-.14941-.45996 0-.27539.11133-.49414.33447-.65723s.51416-.27148.87305-.32324l.89014-.125v-.17383c0-.19141-.05469-.34082-.16406-.44824-.10986-.10742-.28809-.16113-.53516-.16113-.17529 0-.31885.03613-.43018.10742-.11182.07227-.18945.16309-.23291.27539-.02393.05957-.06592.08887-.12598.08887h-.26855c-.04395 0-.07715-.0127-.09863-.03809-.02197-.02637-.0332-.05664-.0332-.09277 0-.05957.02295-.13379.06885-.22168.0459-.08691.1167-.17285.2124-.25684.0957-.08301.21777-.1543.36719-.21191s.33203-.08691.54736-.08691c.23877 0 .43994.03125.60352.09277.16309.06152.29199.14453.38525.24805.09375.10352.16162.2207.20361.35254.0415.13184.0625.26562.0625.40039v1.93652c0 .04004-.01318.07324-.03857.09863-.02637.02637-.05908.03906-.09863.03906h-.27539c-.04346 0-.07764-.0127-.10156-.03906-.02393-.02539-.03564-.05859-.03564-.09863v-.25684c-.05176.07129-.12158.14258-.20947.21191-.0874.07031-.19678.12793-.32861.17383-.13135.0459-.29297.06836-.48389.06836zm.12548-.44824c.16309 0 .3125-.03418.44824-.10449.13525-.06934.24219-.17773.31982-.3252s.11621-.33301.11621-.55664v-.16699l-.69287.10156c-.2832.04004-.49609.10645-.63965.2002s-.21533.21191-.21533.35547c0 .11133.03271.2041.09863.27832.06592.07324.14941.12793.25098.16406s.20605.05371.31396.05371z"/><path d="m253.74414 307.93359c-.03955 0-.07275-.0127-.09863-.03906-.02588-.02539-.03857-.05859-.03857-.09863v-2.82715c0-.03906.0127-.07324.03857-.10156.02588-.02734.05908-.04199.09863-.04199h.2749c.04004 0 .07373.01465.10205.04199.02783.02832.0415.0625.0415.10156v.26367c.07959-.13574.18945-.2373.32861-.30566.13965-.06738.30908-.10156.5083-.10156h.23291c.04004 0 .07275.01367.09863.03906.02588.02637.03906.05859.03906.09863v.24512c0 .04004-.01318.07227-.03906.0957s-.05859.03613-.09863.03613h-.3584c-.21533 0-.38477.0625-.5083.18848-.12354.125-.18506.29492-.18506.51074v1.75684c0 .04004-.01416.07324-.04199.09863-.02783.02637-.06152.03906-.10156.03906h-.29297z"/><path d="m256.02148 307.93359c-.04004 0-.07275-.0127-.09863-.03906-.02637-.02539-.03906-.05859-.03906-.09863v-3.96875c0-.03906.0127-.07227.03906-.09863.02588-.02539.05859-.03809.09863-.03809h.28076c.03955 0 .07275.0127.09863.03809.02588.02637.03857.05957.03857.09863v2.08008l1.17773-.98047c.04785-.03906.08447-.06641.11035-.08008s.06885-.02148.12891-.02148h.31641c.03613 0 .06592.0127.08984.03613.02393.02441.03564.05371.03564.08984 0 .01562-.00488.03418-.01465.05371-.01025.01953-.0293.04004-.05713.05957l-1.38037 1.14746 1.52979 1.48828c.04785.04004.07178.07617.07178.10742 0 .03613-.01172.06641-.03564.08984-.02393.02441-.05371.03613-.08984.03613h-.31055c-.06006 0-.104-.00684-.13135-.02051-.02832-.01465-.06396-.04102-.10791-.08105l-1.33301-1.27344v1.2373c0 .04004-.0127.07324-.03857.09863-.02588.02637-.05908.03906-.09863.03906h-.28076z"/><path d="m260.06201 307.99316c-.41455 0-.74316-.12598-.98633-.37891-.24316-.25391-.37646-.59863-.40039-1.03711-.00391-.05176-.00586-.11914-.00586-.2002 0-.08203.00195-.14844.00586-.2002.01611-.2832.08154-.53125.19727-.74414.11572-.21387.27393-.37793.4751-.49316.20117-.11621.4375-.17383.7085-.17383.30273 0 .55664.06348.76172.19141.20557.12793.36182.30859.46924.54395.10791.23535.16162.50977.16162.8252v.10156c0 .04395-.01318.07715-.03906.10156-.02588.02344-.05859.03516-.09863.03516h-2.06787v.05469c.00781.16309.04395.31543.10742.45703.06396.1416.15625.25586.27783.34375.12158.08691.26416.13086.42773.13086.14307 0 .2627-.02148.3584-.06543s.17334-.09277.2334-.14648c.05957-.05371.09912-.09668.11914-.12891.03613-.04785.06396-.07617.08398-.08594.01953-.00977.05176-.01562.0957-.01562h.29248c.03613 0 .06689.01172.09277.0332.02588.02246.03662.05273.03271.09277-.00391.05957-.03564.13281-.09521.21777-.06006.08594-.14453.1709-.25439.25391-.10938.08398-.24512.15234-.40625.20703-.16162.05371-.34375.08008-.54688.08008zm-.81885-1.84082h1.6377v-.01758c0-.17969-.03271-.33887-.09863-.47852s-.16064-.25-.28418-.33203c-.12354-.08105-.271-.12207-.44189-.12207-.17139 0-.31787.04102-.43945.12207-.12158.08203-.21436.19238-.27783.33203-.06396.13965-.0957.29883-.0957.47852v.01758z"/><path d="m263.36133 307.93359c-.22314 0-.40479-.04297-.54395-.12891-.13965-.08496-.24121-.20703-.30469-.36426-.06396-.15723-.0957-.34375-.0957-.55859v-1.57812h-.46631c-.04004 0-.07275-.0127-.09863-.03906-.02588-.02539-.03906-.05859-.03906-.09863v-.20312c0-.04004.01318-.07227.03906-.09863.02588-.02539.05859-.03906.09863-.03906h.46631v-.99805c0-.03906.0127-.07227.03857-.09863.02588-.02539.05908-.03809.09863-.03809h.28125c.03955 0 .07227.0127.09814.03809.02588.02637.03906.05957.03906.09863v.99805h.74121c.04395 0 .07764.01367.10156.03906.02393.02637.03564.05859.03564.09863v.20312c0 .04004-.01172.07324-.03564.09863-.02393.02637-.05762.03906-.10156.03906h-.74121v1.53613c0 .1875.03174.33496.0957.44238.06348.10742.17725.16113.34082.16113h.36426c.04004 0 .07275.0127.09863.03906.02588.02539.03906.05859.03906.09863v.21484c0 .04004-.01318.07324-.03906.09863-.02588.02637-.05859.03906-.09863.03906h-.41211z"/></g><path d="m220.44768 311.22562h5.90799c.18991 0 .285.22961.15073.36389l-2.95399 2.95401c-.08325.08325-.21822.08325-.30145 0l-2.95399-2.95401c-.13428-.13428-.03918-.36389.15073-.36389z" fill="#f4e26e"/><path d="m408.65625-4.27441c-.04004 0-.07324-.0127-.09863-.03906-.02637-.02539-.03906-.05859-.03906-.09863v-3.51465h-1.14746c-.04004 0-.07227-.0127-.09863-.03809-.02637-.02637-.03906-.05957-.03906-.09863v-.25098c0-.04395.0127-.0791.03906-.10547.02637-.02539.05859-.03809.09863-.03809h2.88086c.04395 0 .0791.0127.10449.03809.02637.02637.03906.06152.03906.10547v.25098c0 .03906-.0127.07227-.03906.09863-.02539.02539-.06055.03809-.10449.03809h-1.1416v3.51465c0 .04004-.0127.07324-.03906.09863-.02539.02637-.06055.03906-.10449.03906h-.31055z" fill="#25357a"/><path d="m411.68652-4.21484c-.30273 0-.55566-.05762-.75879-.17285-.2041-.11621-.35938-.27637-.4668-.48145s-.16699-.43945-.17871-.70215c-.00488-.06738-.00684-.1543-.00684-.25977s.00195-.19043.00684-.25391c.01172-.26758.07227-.50293.18164-.70605s.2666-.3623.46973-.47754c.20312-.11621.4541-.17383.75293-.17383s.5498.05762.75293.17383c.20312.11523.35938.27441.46875.47754.11035.20312.1709.43848.18262.70605.00391.06348.00586.14844.00586.25391s-.00195.19238-.00586.25977c-.01172.2627-.07129.49707-.17969.70215-.10742.20508-.2627.36523-.46582.48145-.20312.11523-.45605.17285-.75879.17285zm0-.45996c.24707 0 .44434-.0791.5918-.23633s.22656-.3877.23926-.69043c.00391-.05957.00586-.13477.00586-.22656s-.00195-.16797-.00586-.22754c-.0127-.30273-.0918-.5332-.23926-.69043s-.34473-.23633-.5918-.23633-.44531.0791-.59473.23633-.22852.3877-.23633.69043c-.00391.05957-.00586.13574-.00586.22754s.00195.16699.00586.22656c.00781.30273.08691.5332.23633.69043s.34766.23633.59473.23633z" fill="#25357a"/><path d="m414.58496-4.27441c-.05176 0-.0918-.0127-.11914-.03906-.02832-.02539-.05176-.0625-.07227-.11035l-.84863-2.77344c-.00781-.01953-.01172-.04004-.01172-.05957 0-.03613.0127-.06543.03906-.08984.02539-.02344.05469-.03613.08691-.03613h.2627c.04395 0 .07715.0127.10156.03613.02344.02441.04004.0459.04785.06543l.66309 2.25391.71191-2.22949c.00781-.02832.02441-.05566.05078-.08398.02539-.02734.06445-.04199.11621-.04199h.20312c.05176 0 .0918.01465.11914.04199.02832.02832.04395.05566.04785.08398l.71191 2.22949.66309-2.25391c.00391-.01953.01855-.04102.04199-.06543.02344-.02344.05762-.03613.10156-.03613h.26855c.03223 0 .06055.0127.08398.03613.02441.02441.03613.05371.03613.08984 0 .01953-.00391.04004-.01172.05957l-.84277 2.77344c-.0166.04785-.03809.08496-.06641.11035-.02734.02637-.07129.03906-.13086.03906h-.2334c-.05176 0-.09473-.0127-.12891-.03906-.0332-.02539-.05664-.0625-.06836-.11035l-.69336-2.13965-.69336 2.13965c-.01562.04785-.04004.08496-.07129.11035-.03223.02637-.07617.03906-.13184.03906h-.2334z" fill="#25357a"/><path d="m419.33105-4.21484c-.19922 0-.38086-.04004-.54395-.11914-.16309-.08008-.29492-.1875-.39453-.32324-.09961-.13477-.14941-.28809-.14941-.45996 0-.27539.11133-.49414.33496-.65723.22266-.16309.51367-.27148.87305-.32324l.88965-.125v-.17383c0-.19141-.05469-.34082-.16406-.44824s-.28809-.16113-.53516-.16113c-.1748 0-.31836.03613-.42969.10742-.1123.07227-.18945.16309-.2334.27539-.02344.05957-.06543.08887-.12598.08887h-.26855c-.04395 0-.07715-.0127-.09863-.03809-.02148-.02637-.0332-.05664-.0332-.09277 0-.05957.02344-.13379.06934-.22168.0459-.08691.11621-.17285.21191-.25684.0957-.08301.21777-.1543.36719-.21191s.33203-.08691.54785-.08691c.23828 0 .43945.03125.60352.09277.16309.06152.29199.14453.38477.24805.09375.10352.16211.2207.2041.35254.04102.13184.0625.26562.0625.40039v1.93652c0 .04004-.01367.07324-.03906.09863-.02637.02637-.05859.03906-.09863.03906h-.27539c-.04297 0-.07715-.0127-.10156-.03906-.02344-.02539-.03516-.05859-.03516-.09863v-.25684c-.05176.07129-.12207.14258-.20996.21191-.08691.07031-.19629.12793-.32812.17383s-.29297.06836-.48438.06836zm.12598-.44825c.16309 0 .3125-.03418.44824-.10449.13477-.06934.24219-.17773.31934-.3252.07812-.14746.11621-.33301.11621-.55664v-.16699l-.69238.10156c-.2832.04004-.49609.10645-.63965.2002s-.21582.21191-.21582.35547c0 .11133.0332.2041.09863.27832.06641.07324.14941.12793.25098.16406s.20605.05371.31445.05371z" fill="#25357a"/><path d="m421.90039-4.27441c-.03906 0-.07227-.0127-.09863-.03906-.02539-.02539-.03809-.05859-.03809-.09863v-2.82715c0-.03906.0127-.07324.03809-.10156.02637-.02734.05957-.04199.09863-.04199h.27539c.04004 0 .07324.01465.10156.04199.02832.02832.04199.0625.04199.10156v.26367c.0791-.13574.18945-.2373.32812-.30566.13965-.06738.30957-.10156.50879-.10156h.23242c.04004 0 .07324.01367.09863.03906.02637.02637.03906.05859.03906.09863v.24512c0 .04004-.0127.07227-.03906.0957-.02539.02344-.05859.03613-.09863.03613h-.3584c-.21484 0-.38477.0625-.50781.18848-.12402.125-.18555.29492-.18555.51074v1.75684c0 .04004-.01367.07324-.04199.09863-.02734.02637-.06152.03906-.10156.03906h-.29297z" fill="#25357a"/><path d="m425.10449-4.21484c-.21875 0-.4082-.03906-.56738-.11621-.16016-.07812-.29004-.18359-.3916-.31738-.10156-.13281-.17773-.28516-.22754-.45703-.0498-.1709-.07812-.35254-.08691-.54395-.00391-.06348-.00586-.12305-.00586-.17871s.00195-.11621.00586-.17969c.00879-.1875.03711-.36621.08691-.53809.0498-.1709.12598-.32422.22754-.45996s.23145-.24219.3916-.31934c.15918-.07812.34863-.11719.56738-.11719.23535 0 .43066.04199.58594.12598.15527.08301.2832.1875.38281.31055v-1.375c0-.03906.0127-.07227.03809-.09863.02637-.02539.05859-.03809.09863-.03809h.28711c.04004 0 .07227.0127.09863.03809.02637.02637.03906.05957.03906.09863v3.96875c0 .04004-.0127.07324-.03906.09863-.02637.02637-.05859.03906-.09863.03906h-.26855c-.04395 0-.07812-.0127-.10156-.03906-.02441-.02539-.03613-.05859-.03613-.09863v-.25098c-.09961.12793-.22949.23438-.38867.32031-.15918.08496-.3584.12793-.59766.12793zm.12598-.48438c.19922 0 .3584-.04492.47754-.13672.12012-.0918.20898-.20801.26953-.34961.05957-.1416.09082-.28613.0957-.43359.00391-.06348.00586-.14062.00586-.23047s-.00195-.16602-.00586-.22949c-.00488-.13965-.03711-.27734-.09863-.41309-.0625-.13477-.1543-.24707-.27539-.33398-.12109-.08789-.27832-.13184-.46875-.13184-.2041 0-.36523.04492-.48438.13477-.12012.08887-.20508.20703-.25684.35254s-.08203.30176-.08984.46875c-.00391.11621-.00391.23145 0 .34668.00781.16797.03809.32422.08984.46973s.13672.2627.25684.35254c.11914.08984.28027.13379.48438.13379z" fill="#25357a"/><path d="m428.60059-4.21484c-.22266 0-.41406-.02734-.57324-.08301-.15918-.05664-.28906-.12402-.38867-.2041-.09961-.0791-.1748-.15918-.22461-.23828-.0498-.08008-.07617-.14355-.08008-.19141-.00391-.04395.00977-.07812.04199-.10156.03125-.02441.06348-.03613.0957-.03613h.26855c.01953 0 .03711.00293.05078.00879s.0332.02344.05664.05078c.05176.05566.10938.11133.17383.16797.06348.05566.1416.10156.23535.13672.09375.03613.21094.05371.34961.05371.2041 0 .37109-.03809.50293-.11621.13086-.07715.19727-.19238.19727-.34375 0-.09961-.02734-.17871-.08105-.23926-.05371-.05957-.14941-.11328-.28711-.16113s-.3252-.09766-.56445-.14941c-.23926-.05566-.42871-.12402-.56836-.20605s-.23828-.17969-.29883-.29297c-.05957-.11328-.08984-.24219-.08984-.38574 0-.14746.04395-.29004.13184-.42676.08789-.1377.21582-.25.38574-.33789.16895-.08789.38184-.13184.63672-.13184.20703 0 .38379.02637.53125.07812s.26953.11621.36523.19434c.0957.07715.16699.1543.21484.22949.04785.07617.07422.13965.07812.19141.00391.04004-.00879.07324-.03613.09863-.02832.02637-.05957.03906-.0957.03906h-.25098c-.02832 0-.05078-.00586-.06836-.01758-.01855-.0127-.03516-.02637-.05078-.04199-.04004-.05176-.08691-.10352-.14062-.15527s-.12402-.09473-.20898-.12891c-.08594-.03418-.19824-.05078-.33789-.05078-.19922 0-.34863.04199-.44824.125-.09961.08398-.14941.18945-.14941.31738 0 .0752.02148.14355.06543.20312s.12793.11328.25098.16113.30664.09961.5498.15527c.2627.05176.4707.12207.62207.20996.15137.08691.25879.18848.32227.30469.06348.11523.0957.24902.0957.40039 0 .16699-.04785.32031-.14355.45996s-.23926.25-.42969.33203c-.19141.08105-.42676.12207-.70605.12207z" fill="#25357a"/><path d="m408.94922 2.95801c-.34668 0-.6377-.05371-.87305-.16113s-.41504-.24609-.54102-.41504c-.125-.16992-.19238-.34766-.2002-.53516 0-.03223.01367-.06055.03906-.08691.02637-.02539.05664-.03906.09277-.03906h.30469c.04785 0 .08398.0127.10742.03613.02441.02344.04004.05176.04785.08398.02441.0957.07422.19043.14941.2832.07617.09375.18457.17188.32617.2334s.32324.09277.54688.09277c.34277 0 .59473-.06055.75586-.18262.16113-.12109.24219-.2832.24219-.4873 0-.13867-.04297-.25195-.12891-.33691-.08496-.08594-.21582-.16309-.3916-.23047-.1748-.06738-.40234-.1416-.68066-.2207-.29102-.08398-.53223-.17578-.72363-.27539s-.33398-.22266-.42676-.37012c-.09375-.14746-.14062-.33496-.14062-.5625 0-.21484.05762-.40723.17285-.57617.11621-.16992.2832-.30371.50195-.40332.21973-.09961.48242-.14941.78906-.14941.24707 0 .46387.03223.64844.09766.18555.06641.33984.1543.46387.26367.12305.10938.2168.22656.28027.35254.06348.125.09766.24805.10156.36719 0 .02832-.00977.05469-.0293.08105-.02051.02637-.05176.03906-.0957.03906h-.31738c-.02734 0-.05664-.00781-.08594-.02441-.03027-.01562-.05273-.0459-.06934-.08984-.02344-.16309-.11523-.30078-.27441-.41211-.16016-.11133-.36719-.16699-.62207-.16699-.25879 0-.46875.0498-.62988.14941-.16211.09961-.24219.25488-.24219.46582 0 .13574.03711.24805.11328.33789.0752.08984.19531.16797.3584.23633.16309.06738.37695.13965.63965.21484.31836.08789.58008.18066.7832.27832s.35352.21875.45117.36426.14648.33203.14648.55859c0 .25098-.06543.46582-.19727.64258-.13184.17773-.31641.31348-.55273.40625-.2373.09375-.51758.14062-.83984.14062z" fill="#25357a"/><path d="m412.51758 2.95801c-.30273 0-.55566-.05762-.75879-.17285-.2041-.11621-.35938-.27637-.4668-.48145s-.16699-.43945-.17871-.70215c-.00488-.06738-.00684-.1543-.00684-.25977s.00195-.19043.00684-.25391c.01172-.26758.07227-.50293.18164-.70605s.2666-.3623.46973-.47754c.20312-.11621.4541-.17383.75293-.17383s.5498.05762.75293.17383c.20312.11523.35938.27441.46875.47754.11035.20312.1709.43848.18262.70605.00391.06348.00586.14844.00586.25391s-.00195.19238-.00586.25977c-.01172.2627-.07129.49707-.17969.70215-.10742.20508-.2627.36523-.46582.48145-.20312.11523-.45605.17285-.75879.17285zm0-.45996c.24707 0 .44434-.0791.5918-.23633s.22656-.3877.23926-.69043c.00391-.05957.00586-.13477.00586-.22656s-.00195-.16797-.00586-.22754c-.0127-.30273-.0918-.5332-.23926-.69043s-.34473-.23633-.5918-.23633-.44531.0791-.59473.23633-.22852.3877-.23633.69043c-.00391.05957-.00586.13574-.00586.22754s.00195.16699.00586.22656c.00781.30273.08691.5332.23633.69043s.34766.23633.59473.23633z" fill="#25357a"/><path d="m415.83496 2.95801c-.25586 0-.47168-.05664-.64941-.16992-.17676-.11426-.31152-.27246-.40332-.47559s-.13672-.43652-.13672-.69922v-1.68555c0-.04004.0127-.07227.03809-.09863.02637-.02539.05859-.03906.09863-.03906h.29883c.04004 0 .07324.01367.09863.03906.02637.02637.03906.05859.03906.09863v1.65625c0 .59375.25879.88965.77734.88965.24707 0 .44531-.07812.59473-.23535s.22363-.37598.22363-.6543v-1.65625c0-.04004.0127-.07227.03906-.09863.02637-.02539.05859-.03906.09863-.03906h.29883c.04004 0 .07227.01367.0957.03906.02344.02637.03613.05859.03613.09863v2.83301c0 .04004-.0127.07324-.03613.09863-.02344.02637-.05566.03906-.0957.03906h-.28125c-.03906 0-.07227-.0127-.09863-.03906-.02539-.02539-.03809-.05859-.03809-.09863v-.2627c-.1084.13965-.23828.25098-.3916.33496-.15332.08301-.35547.125-.60645.125z" fill="#25357a"/><path d="m419.48633 2.89844c-.22266 0-.4043-.04297-.54395-.12891-.13965-.08496-.24121-.20703-.30469-.36426s-.0957-.34375-.0957-.55859v-1.57813h-.46582c-.04004 0-.07324-.0127-.09863-.03906-.02637-.02539-.03906-.05859-.03906-.09863v-.20313c0-.04004.0127-.07227.03906-.09863.02539-.02539.05859-.03906.09863-.03906h.46582v-.99805c0-.03906.0127-.07227.03906-.09863.02539-.02539.05859-.03809.09863-.03809h.28125c.03906 0 .07227.0127.09766.03809.02637.02637.03906.05957.03906.09863v.99805h.74121c.04395 0 .07812.01367.10156.03906.02441.02637.03613.05859.03613.09863v.20312c0 .04004-.01172.07324-.03613.09863-.02344.02637-.05762.03906-.10156.03906h-.74121v1.53613c0 .1875.03223.33496.0957.44238s.17773.16113.34082.16113h.36426c.04004 0 .07324.0127.09863.03906.02637.02539.03906.05859.03906.09863v.21484c0 .04004-.0127.07324-.03906.09863-.02539.02637-.05859.03906-.09863.03906h-.41211z" fill="#25357a"/><path d="m420.75391 2.89844c-.04004 0-.07324-.0127-.09863-.03906-.02637-.02539-.03906-.05859-.03906-.09863v-3.96876c0-.03906.0127-.07227.03906-.09863.02539-.02539.05859-.03809.09863-.03809h.29883c.04297 0 .07715.0127.10156.03809.02344.02637.03516.05957.03516.09863v1.39258c.1084-.13477.23926-.24512.39453-.32812.15527-.08398.35254-.12598.5918-.12598.25879 0 .47949.05664.66113.1709.18066.11328.31836.27051.41211.47168s.14062.43555.14062.70215v1.68555c0 .04004-.0127.07324-.03613.09863-.02441.02637-.05762.03906-.10156.03906h-.29883c-.04004 0-.07324-.0127-.09863-.03906-.02637-.02539-.03906-.05859-.03906-.09863v-1.65527c0-.2793-.06738-.49707-.20312-.6543s-.33496-.23633-.59766-.23633c-.24707 0-.44629.0791-.59766.23633s-.22754.375-.22754.6543v1.65527c0 .04004-.01172.07324-.03516.09863-.02441.02637-.05859.03906-.10156.03906z" fill="#25357a"/><path d="m425.0332 2.89844c-.05176 0-.0918-.0127-.12012-.03906-.02734-.02539-.05176-.0625-.07129-.11035l-.84863-2.77344c-.00781-.01953-.01172-.04004-.01172-.05957 0-.03613.0127-.06543.03809-.08984.02637-.02344.05469-.03613.08691-.03613h.2627c.04395 0 .07812.0127.10156.03613.02441.02441.04004.0459.04785.06543l.66406 2.25391.71094-2.22949c.00781-.02832.02539-.05566.05078-.08398.02637-.02734.06445-.04199.11621-.04199h.2041c.05176 0 .09082.01465.11914.04199.02734.02832.04395.05566.04785.08398l.71094 2.22949.66406-2.25391c.00391-.01953.01758-.04102.04102-.06543.02441-.02344.05859-.03613.10254-.03613h.26855c.03223 0 .05957.0127.08398.03613.02344.02441.03516.05371.03516.08984 0 .01953-.00391.04004-.01172.05957l-.84277 2.77344c-.01562.04785-.03809.08496-.06543.11035-.02832.02637-.07227.03906-.13184.03906h-.2334c-.05176 0-.09375-.0127-.12793-.03906-.03418-.02539-.05664-.0625-.06836-.11035l-.69336-2.13965-.69336 2.13965c-.0166.04785-.04004.08496-.07227.11035-.03223.02637-.0752.03906-.13184.03906h-.23242z" fill="#25357a"/><path d="m429.77832 2.95801c-.19922 0-.38086-.04004-.54395-.11914-.16309-.08008-.29492-.1875-.39453-.32324-.09961-.13477-.14941-.28809-.14941-.45996 0-.27539.11133-.49414.33496-.65723.22266-.16309.51367-.27148.87305-.32324l.88965-.125v-.17383c0-.19141-.05469-.34082-.16406-.44824s-.28809-.16113-.53516-.16113c-.1748 0-.31836.03613-.42969.10742-.1123.07227-.18945.16309-.2334.27539-.02344.05957-.06543.08887-.12598.08887h-.26855c-.04395 0-.07715-.0127-.09863-.03809-.02148-.02637-.0332-.05664-.0332-.09277 0-.05957.02344-.13379.06934-.22168.0459-.08691.11621-.17285.21191-.25684.0957-.08301.21777-.1543.36719-.21191s.33203-.08691.54785-.08691c.23828 0 .43945.03125.60352.09277.16309.06152.29199.14453.38477.24805.09375.10352.16211.2207.2041.35254.04102.13184.0625.26562.0625.40039v1.93652c0 .04004-.01367.07324-.03906.09863-.02637.02637-.05859.03906-.09863.03906h-.27539c-.04297 0-.07715-.0127-.10156-.03906-.02344-.02539-.03516-.05859-.03516-.09863v-.25684c-.05176.07129-.12207.14258-.20996.21191-.08691.07031-.19629.12793-.32812.17383s-.29297.06836-.48438.06836zm.12598-.44824c.16309 0 .3125-.03418.44824-.10449.13477-.06934.24219-.17773.31934-.3252.07812-.14746.11621-.33301.11621-.55664v-.16699l-.69238.10156c-.2832.04004-.49609.10645-.63965.2002s-.21582.21191-.21582.35547c0 .11133.0332.2041.09863.27832.06641.07324.14941.12793.25098.16406s.20605.05371.31445.05371z" fill="#25357a"/><path d="m432.34863 2.89844c-.04004 0-.07324-.0127-.09863-.03906-.02637-.02539-.03906-.05859-.03906-.09863v-2.82716c0-.03906.0127-.07324.03906-.10156.02539-.02734.05859-.04199.09863-.04199h.27441c.04004 0 .07422.01465.10254.04199.02734.02832.04102.0625.04102.10156v.26368c.08008-.13574.18945-.2373.3291-.30566.13965-.06738.30859-.10156.50781-.10156h.2334c.04004 0 .07227.01367.09863.03906.02539.02637.03906.05859.03906.09863v.24512c0 .04004-.01367.07227-.03906.0957-.02637.02344-.05859.03613-.09863.03613h-.3584c-.21582 0-.38477.0625-.50879.18848-.12305.125-.18457.29492-.18457.51074v1.75684c0 .04004-.01465.07324-.04199.09863-.02832.02637-.06152.03906-.10156.03906z" fill="#25357a"/><path d="m435.55273 2.95801c-.21973 0-.40918-.03906-.56836-.11621-.15918-.07812-.29004-.18359-.3916-.31738-.10156-.13281-.17676-.28516-.22656-.45703-.0498-.1709-.0791-.35254-.08691-.54395-.00391-.06348-.00586-.12305-.00586-.17871s.00195-.11621.00586-.17969c.00781-.1875.03711-.36621.08691-.53809.0498-.1709.125-.32422.22656-.45996s.23242-.24219.3916-.31934c.15918-.07812.34863-.11719.56836-.11719.23438 0 .42969.04199.58496.12598.15527.08301.2832.1875.38281.31055v-1.375c0-.03906.0127-.07227.03906-.09863.02539-.02539.05859-.03809.09863-.03809h.28711c.03906 0 .07227.0127.09863.03809.02539.02637.03809.05957.03809.09863v3.96875c0 .04004-.0127.07324-.03809.09863-.02637.02637-.05957.03906-.09863.03906h-.26953c-.04395 0-.07715-.0127-.10156-.03906-.02344-.02539-.03613-.05859-.03613-.09863v-.25098c-.09961.12793-.22852.23438-.3877.32031-.16016.08496-.35938.12793-.59766.12793zm.125-.48438c.19922 0 .3584-.04492.47852-.13672.11914-.0918.20898-.20801.26855-.34961s.0918-.28613.0957-.43359c.00391-.06348.00586-.14062.00586-.23047s-.00195-.16602-.00586-.22949c-.00391-.13965-.03711-.27734-.09863-.41309-.06152-.13477-.15332-.24707-.27441-.33398-.12207-.08789-.27832-.13184-.46973-.13184-.20312 0-.36426.04492-.48438.13477-.11914.08887-.20508.20703-.25684.35254s-.08203.30176-.08984.46875c-.00391.11621-.00391.23145 0 .34668.00781.16797.03809.32422.08984.46973s.1377.2627.25684.35254c.12012.08984.28125.13379.48438.13379z" fill="#25357a"/><path d="m439.65234 2.89844c-.04395 0-.07812-.0127-.10156-.03906-.02441-.02539-.03613-.05859-.03613-.09863v-3.90235c0-.04395.01172-.0791.03613-.10547.02344-.02539.05762-.03809.10156-.03809h1.6377c.29883 0 .54297.04883.73242.14648.18848.09766.32812.22949.41797.39746.08984.16699.13477.35449.13477.56152 0 .16309-.02734.30371-.08105.4209-.05371.11816-.12012.21387-.2002.28711-.0791.07422-.15723.13086-.23242.1709.15527.0752.29297.19922.41504.37012.12109.17188.18262.37891.18262.62207 0 .21875-.05078.41992-.14941.60352-.09961.18359-.24805.33008-.44531.43945s-.43945.16406-.72656.16406h-1.68555zm.44825-2.41504h1.09961c.25488 0 .44824-.05859.58008-.17578.13184-.11816.19727-.27832.19727-.48145s-.06543-.3584-.19727-.46582-.3252-.16211-.58008-.16211h-1.09961zm0 1.93066h1.15918c.25488 0 .45215-.06934.5918-.20898s.20996-.31055.20996-.51367c0-.21191-.07031-.38574-.20996-.52344s-.33691-.20605-.5918-.20605h-1.15918v1.45215z" fill="#25357a"/><path d="m443.56738 2.89844c-.04004 0-.07324-.0127-.09863-.03906-.02637-.02539-.03906-.05859-.03906-.09863v-2.82716c0-.03906.0127-.07324.03906-.10156.02539-.02734.05859-.04199.09863-.04199h.27441c.04004 0 .07422.01465.10254.04199.02734.02832.04102.0625.04102.10156v.26368c.08008-.13574.18945-.2373.3291-.30566.13965-.06738.30859-.10156.50781-.10156h.2334c.04004 0 .07227.01367.09863.03906.02539.02637.03906.05859.03906.09863v.24512c0 .04004-.01367.07227-.03906.0957-.02637.02344-.05859.03613-.09863.03613h-.3584c-.21582 0-.38477.0625-.50879.18848-.12305.125-.18457.29492-.18457.51074v1.75684c0 .04004-.01465.07324-.04199.09863-.02832.02637-.06152.03906-.10156.03906z" fill="#25357a"/><path d="m445.79004-.78906c-.03906 0-.07227-.0127-.09863-.03906-.02539-.02637-.03809-.05859-.03809-.09863v-.32324c0-.03906.0127-.07324.03809-.10156.02637-.02734.05957-.04102.09863-.04102h.37695c.04004 0 .07422.01367.10156.04102.02832.02832.04199.0625.04199.10156v.32324c0 .04004-.01367.07227-.04199.09863-.02734.02637-.06152.03906-.10156.03906zm.04785 3.6875c-.03906 0-.07227-.0127-.09863-.03906-.02539-.02539-.03809-.05859-.03809-.09863v-2.83302c0-.04004.0127-.07227.03809-.09863.02637-.02539.05957-.03906.09863-.03906h.28711c.04004 0 .07324.01367.09863.03906.02637.02637.03906.05859.03906.09863v2.83301c0 .04004-.0127.07324-.03906.09863-.02539.02637-.05859.03906-.09863.03906h-.28711z" fill="#25357a"/><path d="m448.2832 2.95801c-.21973 0-.40918-.03906-.56836-.11621-.15918-.07812-.29004-.18359-.3916-.31738-.10156-.13281-.17676-.28516-.22656-.45703-.0498-.1709-.0791-.35254-.08691-.54395-.00391-.06348-.00586-.12305-.00586-.17871s.00195-.11621.00586-.17969c.00781-.1875.03711-.36621.08691-.53809.0498-.1709.125-.32422.22656-.45996s.23242-.24219.3916-.31934c.15918-.07812.34863-.11719.56836-.11719.23438 0 .42969.04199.58496.12598.15527.08301.2832.1875.38281.31055v-1.375c0-.03906.0127-.07227.03906-.09863.02539-.02539.05859-.03809.09863-.03809h.28711c.03906 0 .07227.0127.09863.03809.02539.02637.03809.05957.03809.09863v3.96875c0 .04004-.0127.07324-.03809.09863-.02637.02637-.05957.03906-.09863.03906h-.26953c-.04395 0-.07715-.0127-.10156-.03906-.02344-.02539-.03613-.05859-.03613-.09863v-.25098c-.09961.12793-.22852.23438-.3877.32031-.16016.08496-.35938.12793-.59766.12793zm.125-.48438c.19922 0 .3584-.04492.47852-.13672.11914-.0918.20898-.20801.26855-.34961s.0918-.28613.0957-.43359c.00391-.06348.00586-.14062.00586-.23047s-.00195-.16602-.00586-.22949c-.00391-.13965-.03711-.27734-.09863-.41309-.06152-.13477-.15332-.24707-.27441-.33398-.12207-.08789-.27832-.13184-.46973-.13184-.20312 0-.36426.04492-.48438.13477-.11914.08887-.20508.20703-.25684.35254s-.08203.30176-.08984.46875c-.00391.11621-.00391.23145 0 .34668.00781.16797.03809.32422.08984.46973s.1377.2627.25684.35254c.12012.08984.28125.13379.48438.13379z" fill="#25357a"/><path d="m451.97656 4.21289c-.27148 0-.49316-.03516-.66699-.10742-.17285-.07129-.30859-.1582-.40625-.25977s-.16699-.20312-.20898-.30469-.06445-.18262-.06836-.24219c-.00488-.04004.00879-.07324.03809-.10156.03027-.02832.06348-.04199.09863-.04199h.28711c.03613 0 .06543.00781.08984.02441.02344.01562.04395.0498.05957.10156.02441.05957.05957.12598.10742.2002.04785.07324.12207.1377.22168.19141s.23926.08008.41797.08008c.1875 0 .34473-.02539.47266-.07715.12695-.05176.22363-.13965.29004-.26367.06543-.12305.09863-.29492.09863-.51367v-.40625c-.0957.12305-.22168.22559-.37695.30762s-.35059.12207-.58594.12207c-.22266 0-.41406-.03809-.57324-.11621-.16016-.07715-.29004-.18262-.3916-.31641s-.17773-.28613-.22754-.45703c-.0498-.17188-.07812-.35059-.08691-.53809-.00391-.11133-.00391-.22168 0-.3291.00879-.1875.03711-.36621.08691-.53809.0498-.1709.12598-.32422.22754-.45996s.23145-.24219.3916-.31934c.15918-.07812.35059-.11719.57324-.11719.23926 0 .4375.04395.59473.13184s.28613.19727.38574.32812v-.25683c0-.03906.0127-.07324.03906-.10156.02539-.02734.05859-.04199.09863-.04199h.27441c.04004 0 .07422.01465.10156.04199.02832.02832.04199.0625.04199.10156v2.89941c0 .2666-.04492.50391-.13477.71094-.08887.20703-.23633.37012-.44238.49023-.20508.11914-.48047.17871-.82715.17871zm-.01172-1.76855c.19922 0 .35938-.0459.48047-.1377.12207-.0918.21094-.20703.26953-.34668.05762-.13965.08789-.28125.09277-.42383.00391-.05664.00586-.125.00586-.20703 0-.08105-.00195-.15039-.00586-.20605-.00488-.14355-.03516-.28418-.09277-.42383-.05859-.13965-.14746-.25488-.26953-.34668-.12109-.0918-.28125-.1377-.48047-.1377-.2002 0-.35938.04492-.47852.13477-.11914.08887-.20508.20703-.25684.35254s-.08203.30176-.08984.46875c-.00391.10352-.00391.20898 0 .31738.00781.16699.03809.32324.08984.46875s.1377.2627.25684.35254.27832.13477.47852.13477z" fill="#25357a"/><path d="m455.51465 2.95801c-.41406 0-.74316-.12598-.98633-.37891-.24316-.25391-.37598-.59863-.40039-1.03711-.00391-.05176-.00586-.11914-.00586-.2002 0-.08203.00195-.14844.00586-.2002.0166-.2832.08203-.53125.19727-.74414.11621-.21387.27441-.37793.47559-.49316.20117-.11621.4375-.17383.70801-.17383.30273 0 .55664.06348.76172.19141.20605.12793.3623.30859.46973.54395s.16113.50977.16113.8252v.10156c0 .04395-.0127.07715-.03906.10156-.02539.02344-.05859.03516-.09863.03516h-2.06738v.05469c.00781.16309.04395.31543.10742.45703s.15625.25586.27734.34375c.12207.08691.26465.13086.42773.13086.14355 0 .2627-.02148.3584-.06543s.17383-.09277.2334-.14648.09961-.09668.11914-.12891c.03613-.04785.06445-.07617.08398-.08594s.05176-.01562.0957-.01562h.29297c.03613 0 .06641.01172.09277.0332.02539.02246.03613.05273.03223.09277-.00391.05957-.03516.13281-.09473.21777-.06055.08594-.14453.1709-.25488.25391-.10938.08398-.24512.15234-.40625.20703-.16113.05371-.34375.08008-.54688.08008zm-.81836-1.84082h1.6377v-.01758c0-.17969-.0332-.33887-.09863-.47852-.06641-.13965-.16113-.25-.28418-.33203-.12402-.08105-.27148-.12207-.44238-.12207s-.31738.04102-.43945.12207c-.12109.08203-.21387.19238-.27734.33203-.06445.13965-.0957.29883-.0957.47852v.01758z" fill="#25357a"/><path d="m459.29785 2.89844c-.04297 0-.07715-.0127-.10156-.03906-.02344-.02539-.03516-.05859-.03516-.09863v-3.90235c0-.04395.01172-.0791.03516-.10547.02441-.02539.05859-.03809.10156-.03809h1.45898c.4502 0 .80664.10547 1.06934.31641.26367.21094.39453.52441.39453.93848 0 .30664-.07617.55664-.22949.75s-.3623.32812-.625.40332l.9209 1.58984c.01172.02441.01758.0459.01758.06641 0 .03125-.0127.05957-.03906.08301-.02539.02441-.05469.03613-.08594.03613h-.28711c-.06836 0-.11816-.01758-.14941-.05371-.03223-.03613-.05957-.07227-.08398-.10742l-.86621-1.51855h-1.0459v1.54199c0 .04004-.01367.07324-.03906.09863-.02637.02637-.06152.03906-.10449.03906h-.30566zm.44922-2.1875h.98535c.29883 0 .52246-.0625.66992-.18848.14746-.125.2207-.31152.2207-.55859 0-.24316-.07227-.42871-.21777-.55566-.14551-.12793-.37012-.19141-.67285-.19141h-.98535z" fill="#25357a"/><path d="m464.09766 2.95801c-.21875 0-.4082-.03906-.56738-.11621-.16016-.07812-.29004-.18359-.3916-.31738-.10156-.13281-.17773-.28516-.22754-.45703-.0498-.1709-.07812-.35254-.08691-.54395-.00391-.06348-.00586-.12305-.00586-.17871s.00195-.11621.00586-.17969c.00879-.1875.03711-.36621.08691-.53809.0498-.1709.12598-.32422.22754-.45996s.23145-.24219.3916-.31934c.15918-.07812.34863-.11719.56738-.11719.23535 0 .43066.04199.58594.12598.15527.08301.2832.1875.38281.31055v-1.375c0-.03906.0127-.07227.03809-.09863.02637-.02539.05859-.03809.09863-.03809h.28711c.04004 0 .07227.0127.09863.03809.02637.02637.03906.05957.03906.09863v3.96875c0 .04004-.0127.07324-.03906.09863-.02637.02637-.05859.03906-.09863.03906h-.26855c-.04395 0-.07812-.0127-.10156-.03906-.02441-.02539-.03613-.05859-.03613-.09863v-.25098c-.09961.12793-.22949.23438-.38867.32031-.15918.08496-.3584.12793-.59766.12793zm.12597-.48438c.19922 0 .3584-.04492.47754-.13672.12012-.0918.20898-.20801.26953-.34961.05957-.1416.09082-.28613.0957-.43359.00391-.06348.00586-.14062.00586-.23047s-.00195-.16602-.00586-.22949c-.00488-.13965-.03711-.27734-.09863-.41309-.0625-.13477-.1543-.24707-.27539-.33398-.12109-.08789-.27832-.13184-.46875-.13184-.2041 0-.36523.04492-.48438.13477-.12012.08887-.20508.20703-.25684.35254s-.08203.30176-.08984.46875c-.00391.11621-.00391.23145 0 .34668.00781.16797.03809.32422.08984.46973s.13672.2627.25684.35254c.11914.08984.28027.13379.48438.13379z" fill="#25357a"/><path d="m413.6564 9.57107h-5.90799c-.18991 0-.28503-.2296-.15073-.36389l2.95395-2.95397c.08325-.08324.2182-.08324.30145 0l2.95404 2.95397c.13428.13428.03918.36389-.15073.36389z" fill="#f4e26e"/><path d="m-20.43652 323.12695c-.03955 0-.07275-.0127-.09863-.03906-.02588-.02539-.03857-.05859-.03857-.09863v-3.51465h-1.14746c-.04004 0-.07275-.0127-.09863-.03809-.02637-.02637-.03906-.05957-.03906-.09863v-.25098c0-.04395.0127-.0791.03906-.10547.02588-.02539.05859-.03809.09863-.03809h2.88086c.04346 0 .07861.0127.10449.03809.02588.02637.03857.06152.03857.10547v.25098c0 .03906-.0127.07227-.03857.09863-.02588.02539-.06104.03809-.10449.03809h-1.1416v3.51465c0 .04004-.01318.07324-.03906.09863-.02588.02637-.06055.03906-.10449.03906h-.31104z" fill="#25357a"/><path d="m-17.40625 323.18652c-.30273 0-.55566-.05762-.75879-.17285-.20361-.11621-.35889-.27637-.46631-.48145-.10791-.20508-.16748-.43945-.1792-.70215-.00439-.06738-.00635-.1543-.00635-.25977s.00195-.19043.00635-.25391c.01172-.26758.07227-.50293.18213-.70605.10938-.20312.26611-.3623.46924-.47754.20312-.11621.4541-.17383.75293-.17383s.5498.05762.75293.17383c.20361.11523.35986.27441.46924.47754.10986.20312.17041.43848.18262.70605.00391.06348.00586.14844.00586.25391s-.00195.19238-.00586.25977c-.01221.2627-.07178.49707-.17969.70215-.10742.20508-.2627.36523-.46582.48145-.20312.11523-.45654.17285-.75928.17285zm0-.45996c.24707 0 .44434-.0791.5918-.23633s.22705-.3877.23926-.69043c.00391-.05957.00586-.13477.00586-.22656s-.00195-.16797-.00586-.22754c-.01221-.30273-.0918-.5332-.23926-.69043s-.34473-.23633-.5918-.23633-.44531.0791-.59473.23633-.22803.3877-.23584.69043c-.00439.05957-.00635.13574-.00635.22754s.00195.16699.00635.22656c.00781.30273.08643.5332.23584.69043s.34766.23633.59473.23633z" fill="#25357a"/><path d="m-14.50732 323.12695c-.05176 0-.0918-.0127-.11963-.03906-.02783-.02539-.05176-.0625-.07178-.11035l-.84863-2.77344c-.00781-.01953-.01172-.04004-.01172-.05957 0-.03613.0127-.06543.03857-.08984.02588-.02344.05469-.03613.08691-.03613h.2627c.04395 0 .07764.0127.10156.03613.02393.02441.04004.0459.04785.06543l.66357 2.25391.71143-2.22949c.00781-.02832.0249-.05566.05078-.08398.02588-.02734.06445-.04199.11621-.04199h.20361c.05176 0 .09131.01465.11914.04199.02783.02832.04395.05566.04785.08398l.71143 2.22949.66357-2.25391c.00391-.01953.01807-.04102.0415-.06543.02393-.02344.05811-.03613.10205-.03613h.26855c.03223 0 .06006.0127.08398.03613.02393.02441.03564.05371.03564.08984 0 .01953-.00391.04004-.01172.05957l-.84277 2.77344c-.01611.04785-.03809.08496-.06592.11035-.02783.02637-.07178.03906-.13135.03906h-.2334c-.05176 0-.09424-.0127-.12842-.03906-.03369-.02539-.05664-.0625-.06836-.11035l-.69336-2.13965-.69336 2.13965c-.01611.04785-.04004.08496-.07178.11035-.03223.02637-.07568.03906-.13184.03906h-.23291z" fill="#25357a"/><path d="m-9.76123 323.18652c-.19922 0-.38086-.04004-.54395-.11914-.16357-.08008-.29492-.1875-.39453-.32324-.09961-.13477-.14941-.28809-.14941-.45996 0-.27539.11133-.49414.33447-.65723s.51416-.27148.87305-.32324l.89014-.125v-.17383c0-.19141-.05469-.34082-.16406-.44824-.10986-.10742-.28809-.16113-.53516-.16113-.17529 0-.31885.03613-.43018.10742-.11182.07227-.18945.16309-.23291.27539-.02393.05957-.06592.08887-.12598.08887h-.26855c-.04395 0-.07715-.0127-.09863-.03809-.02197-.02637-.0332-.05664-.0332-.09277 0-.05957.02295-.13379.06885-.22168.0459-.08691.1167-.17285.2124-.25684.0957-.08301.21777-.1543.36719-.21191s.33203-.08691.54736-.08691c.23877 0 .43994.03125.60352.09277.16309.06152.29199.14453.38525.24805.09375.10352.16162.2207.20361.35254.0415.13184.0625.26562.0625.40039v1.93652c0 .04004-.01318.07324-.03857.09863-.02637.02637-.05908.03906-.09863.03906h-.27539c-.04346 0-.07764-.0127-.10156-.03906-.02393-.02539-.03564-.05859-.03564-.09863v-.25684c-.05176.07129-.12158.14258-.20947.21191-.0874.07031-.19678.12793-.32861.17383-.13135.0459-.29297.06836-.48389.06836zm.12549-.44824c.16309 0 .3125-.03418.44824-.10449.13525-.06934.24219-.17773.31982-.3252s.11621-.33301.11621-.55664v-.16699l-.69287.10156c-.2832.04004-.49609.10645-.63965.2002s-.21533.21191-.21533.35547c0 .11133.03271.2041.09863.27832.06592.07324.14941.12793.25098.16406s.20605.05371.31396.05371z" fill="#25357a"/><path d="m-7.19189 323.12695c-.03955 0-.07275-.0127-.09863-.03906-.02588-.02539-.03857-.05859-.03857-.09863v-2.82715c0-.03906.0127-.07324.03857-.10156.02588-.02734.05908-.04199.09863-.04199h.2749c.04004 0 .07373.01465.10205.04199.02783.02832.0415.0625.0415.10156v.26367c.07959-.13574.18945-.2373.32861-.30566.13965-.06738.30908-.10156.5083-.10156h.23291c.04004 0 .07275.01367.09863.03906.02588.02637.03906.05859.03906.09863v.24512c0 .04004-.01318.07227-.03906.0957s-.05859.03613-.09863.03613h-.3584c-.21533 0-.38477.0625-.5083.18848-.12354.125-.18506.29492-.18506.51074v1.75684c0 .04004-.01416.07324-.04199.09863-.02783.02637-.06152.03906-.10156.03906h-.29297z" fill="#25357a"/><path d="m-3.98779 323.18652c-.21924 0-.40869-.03906-.56787-.11621-.15967-.07812-.29004-.18359-.3916-.31738-.10156-.13281-.17725-.28516-.22705-.45703-.0498-.1709-.07861-.35254-.08691-.54395-.00391-.06348-.00586-.12305-.00586-.17871s.00195-.11621.00586-.17969c.0083-.1875.03711-.36621.08691-.53809.0498-.1709.12549-.32422.22705-.45996s.23193-.24219.3916-.31934c.15918-.07812.34863-.11719.56787-.11719.23486 0 .43018.04199.58545.12598.15527.08301.2832.1875.38281.31055v-1.375c0-.03906.0127-.07227.03857-.09863.02588-.02539.05859-.03809.09863-.03809h.28711c.03955 0 .07227.0127.09863.03809.02588.02637.03857.05957.03857.09863v3.96875c0 .04004-.0127.07324-.03857.09863-.02637.02637-.05908.03906-.09863.03906h-.26904c-.04395 0-.07764-.0127-.10156-.03906-.02393-.02539-.03613-.05859-.03613-.09863v-.25098c-.09961.12793-.229.23438-.38818.32031-.15967.08496-.35889.12793-.59766.12793zm.12549-.48437c.19922 0 .3584-.04492.47803-.13672s.20898-.20801.26904-.34961c.05957-.1416.09131-.28613.0957-.43359.00391-.06348.00586-.14062.00586-.23047s-.00195-.16602-.00586-.22949c-.00439-.13965-.03711-.27734-.09863-.41309-.06201-.13477-.15381-.24707-.2749-.33398-.12158-.08789-.27832-.13184-.46924-.13184-.20361 0-.36475.04492-.48438.13477-.11963.08887-.20508.20703-.25684.35254s-.08203.30176-.08984.46875c-.00391.11621-.00391.23145 0 .34668.00781.16797.03809.32422.08984.46973s.13721.2627.25684.35254.28076.13379.48438.13379z" fill="#25357a"/><path d="m-.4917 323.18652c-.22314 0-.41455-.02734-.57373-.08301-.15918-.05664-.28906-.12402-.38867-.2041-.09961-.0791-.17432-.15918-.22412-.23828-.0498-.08008-.07666-.14355-.08057-.19141-.00391-.04395.00977-.07812.04199-.10156.03174-.02441.06348-.03613.0957-.03613h.26855c.02002 0 .03711.00293.05127.00879.01367.00586.03271.02344.05664.05078.05176.05566.10938.11133.17334.16797.06348.05566.14209.10156.23584.13672.09375.03613.21045.05371.34961.05371.20361 0 .37061-.03809.50244-.11621.13135-.07715.19727-.19238.19727-.34375 0-.09961-.02686-.17871-.08105-.23926-.05371-.05957-.14941-.11328-.28662-.16113-.1377-.04785-.32568-.09766-.56494-.14941-.23926-.05566-.42822-.12402-.56787-.20605s-.23877-.17969-.29883-.29297c-.05957-.11328-.08984-.24219-.08984-.38574 0-.14746.04395-.29004.13184-.42676.0874-.1377.21582-.25.38525-.33789s.38184-.13184.63672-.13184c.20703 0 .38428.02637.53174.07812s.26904.11621.36475.19434c.0957.07715.16748.1543.21533.22949.04785.07617.07373.13965.07764.19141.00391.04004-.0083.07324-.03613.09863-.02783.02637-.05957.03906-.09521.03906h-.25146c-.02783 0-.05078-.00586-.06836-.01758-.01807-.0127-.03516-.02637-.05078-.04199-.04004-.05176-.08691-.10352-.14062-.15527s-.12354-.09473-.20898-.12891c-.08594-.03418-.19824-.05078-.33789-.05078-.19922 0-.34863.04199-.44824.125-.09961.08398-.14941.18945-.14941.31738 0 .0752.02197.14355.06592.20312.04346.05957.12744.11328.25098.16113.12305.04785.30664.09961.5498.15527.2627.05176.47021.12207.62158.20996.15137.08691.25879.18848.32275.30469.06348.11523.0957.24902.0957.40039 0 .16699-.04785.32031-.14355.45996s-.23926.25-.43018.33203c-.19141.08105-.42676.12207-.70557.12207z" fill="#25357a"/><path d="m-21.35107 330.2998c-.04346 0-.07764-.0127-.10156-.03906-.02393-.02539-.03564-.05859-.03564-.09863v-3.90918c0-.03906.01172-.07227.03564-.09863.02393-.02539.05811-.03809.10156-.03809h.31689c.04004 0 .07275.0127.09863.03809.02588.02637.03906.05957.03906.09863v3.52734h1.98438c.04346 0 .07861.0127.10449.03809.02588.02637.03906.06152.03906.10449v.23926c0 .04004-.01318.07324-.03906.09863-.02588.02637-.06104.03906-.10449.03906z" fill="#25357a"/><path d="m-16.99365 330.35938c-.30273 0-.55566-.05762-.75879-.17285-.20361-.11621-.35889-.27637-.46631-.48145-.10791-.20508-.16748-.43945-.1792-.70215-.00439-.06738-.00635-.1543-.00635-.25977s.00195-.19043.00635-.25391c.01172-.26758.07227-.50293.18213-.70605.10938-.20312.26611-.3623.46924-.47754.20312-.11621.4541-.17383.75293-.17383s.5498.05762.75293.17383c.20361.11523.35986.27441.46924.47754.10986.20312.17041.43848.18262.70605.00391.06348.00586.14844.00586.25391s-.00195.19238-.00586.25977c-.01221.2627-.07178.49707-.17969.70215-.10742.20508-.2627.36523-.46582.48145-.20312.11523-.45654.17285-.75928.17285zm0-.45997c.24707 0 .44434-.0791.5918-.23633s.22705-.3877.23926-.69043c.00391-.05957.00586-.13477.00586-.22656s-.00195-.16797-.00586-.22754c-.01221-.30273-.0918-.5332-.23926-.69043s-.34473-.23633-.5918-.23633-.44531.0791-.59473.23633-.22803.3877-.23584.69043c-.00439.05957-.00635.13574-.00635.22754s.00195.16699.00635.22656c.00781.30273.08643.5332.23584.69043s.34766.23633.59473.23633z" fill="#25357a"/><path d="m-14.69873 330.2998c-.03955 0-.07275-.0127-.09863-.03906-.02588-.02539-.03857-.05859-.03857-.09863v-2.83301c0-.04004.0127-.07227.03857-.09863.02588-.02539.05908-.03906.09863-.03906h.28125c.03955 0 .07227.01367.09863.03906.02588.02637.03857.05859.03857.09863v.2627c.10352-.13477.23438-.24512.3916-.33105s.35938-.12891.60645-.12891c.25928 0 .47949.05664.66064.1709.18115.11328.31885.27051.4126.47168.09326.20117.14014.43555.14014.70215v1.68555c0 .04004-.0127.07324-.03857.09863-.02588.02637-.05908.03906-.09863.03906h-.29883c-.04004 0-.07275-.0127-.09863-.03906-.02588-.02539-.03906-.05859-.03906-.09863v-1.65527c0-.2793-.06787-.49707-.20312-.6543-.13574-.15723-.33447-.23633-.59766-.23633-.24707 0-.44531.0791-.59473.23633s-.22412.375-.22412.6543v1.65527c0 .04004-.01318.07324-.03906.09863-.02588.02637-.05859.03906-.09863.03906h-.29883z" fill="#25357a"/><path d="m-10.07812 330.35938c-.21924 0-.40869-.03906-.56787-.11621-.15967-.07812-.29004-.18359-.3916-.31738-.10156-.13281-.17725-.28516-.22705-.45703-.0498-.1709-.07861-.35254-.08691-.54395-.00391-.06348-.00586-.12305-.00586-.17871s.00195-.11621.00586-.17969c.0083-.1875.03711-.36621.08691-.53809.0498-.1709.12549-.32422.22705-.45996s.23193-.24219.3916-.31934c.15918-.07812.34863-.11719.56787-.11719.23486 0 .43018.04199.58545.12598.15527.08301.2832.1875.38281.31055v-1.375c0-.03906.0127-.07227.03857-.09863.02588-.02539.05859-.03809.09863-.03809h.28711c.03955 0 .07227.0127.09863.03809.02588.02637.03857.05957.03857.09863v3.96875c0 .04004-.0127.07324-.03857.09863-.02637.02637-.05908.03906-.09863.03906h-.26904c-.04395 0-.07764-.0127-.10156-.03906-.02393-.02539-.03613-.05859-.03613-.09863v-.25098c-.09961.12793-.229.23438-.38818.32031-.15967.08496-.35889.12793-.59766.12793zm.12548-.48438c.19922 0 .3584-.04492.47803-.13672s.20898-.20801.26904-.34961c.05957-.1416.09131-.28613.0957-.43359.00391-.06348.00586-.14062.00586-.23047s-.00195-.16602-.00586-.22949c-.00439-.13965-.03711-.27734-.09863-.41309-.06201-.13477-.15381-.24707-.2749-.33398-.12158-.08789-.27832-.13184-.46924-.13184-.20361 0-.36475.04492-.48438.13477-.11963.08887-.20508.20703-.25684.35254s-.08203.30176-.08984.46875c-.00391.11621-.00391.23145 0 .34668.00781.16797.03809.32422.08984.46973s.13721.2627.25684.35254.28076.13379.48438.13379z" fill="#25357a"/><path d="m-6.38477 330.35938c-.30273 0-.55566-.05762-.75879-.17285-.20361-.11621-.35889-.27637-.46631-.48145-.10791-.20508-.16748-.43945-.1792-.70215-.00439-.06738-.00635-.1543-.00635-.25977s.00195-.19043.00635-.25391c.01172-.26758.07227-.50293.18213-.70605.10938-.20312.26611-.3623.46924-.47754.20312-.11621.4541-.17383.75293-.17383s.5498.05762.75293.17383c.20361.11523.35986.27441.46924.47754.10986.20312.17041.43848.18262.70605.00391.06348.00586.14844.00586.25391s-.00195.19238-.00586.25977c-.01221.2627-.07178.49707-.17969.70215-.10742.20508-.2627.36523-.46582.48145-.20312.11523-.45654.17285-.75928.17285zm0-.45997c.24707 0 .44434-.0791.5918-.23633s.22705-.3877.23926-.69043c.00391-.05957.00586-.13477.00586-.22656s-.00195-.16797-.00586-.22754c-.01221-.30273-.0918-.5332-.23926-.69043s-.34473-.23633-.5918-.23633-.44531.0791-.59473.23633-.22803.3877-.23584.69043c-.00439.05957-.00635.13574-.00635.22754s.00195.16699.00635.22656c.00781.30273.08643.5332.23584.69043s.34766.23633.59473.23633z" fill="#25357a"/><path d="m-4.08984 330.2998c-.03955 0-.07275-.0127-.09863-.03906-.02588-.02539-.03857-.05859-.03857-.09863v-2.83301c0-.04004.0127-.07227.03857-.09863.02588-.02539.05908-.03906.09863-.03906h.28125c.03955 0 .07227.01367.09863.03906.02588.02637.03857.05859.03857.09863v.2627c.10352-.13477.23438-.24512.3916-.33105s.35938-.12891.60645-.12891c.25928 0 .47949.05664.66064.1709.18115.11328.31885.27051.4126.47168.09326.20117.14014.43555.14014.70215v1.68555c0 .04004-.0127.07324-.03857.09863-.02588.02637-.05908.03906-.09863.03906h-.29883c-.04004 0-.07275-.0127-.09863-.03906-.02588-.02539-.03906-.05859-.03906-.09863v-1.65527c0-.2793-.06787-.49707-.20312-.6543-.13574-.15723-.33447-.23633-.59766-.23633-.24707 0-.44531.0791-.59473.23633s-.22412.375-.22412.6543v1.65527c0 .04004-.01318.07324-.03906.09863-.02588.02637-.05859.03906-.09863.03906h-.29883z" fill="#25357a"/><path d="m1.07422 330.2998c-.04346 0-.07764-.0127-.10156-.03906-.02393-.02539-.03564-.05859-.03564-.09863v-3.90234c0-.04395.01172-.0791.03564-.10547.02393-.02539.05811-.03809.10156-.03809h1.6377c.29932 0 .54297.04883.73242.14648.18896.09766.32861.22949.41846.39746.08936.16699.13428.35449.13428.56152 0 .16309-.02686.30371-.08057.4209-.05371.11816-.12061.21387-.2002.28711-.07959.07422-.15771.13086-.23291.1709.15527.0752.29346.19922.41504.37012.12158.17188.18262.37891.18262.62207 0 .21875-.05029.41992-.14941.60352-.09961.18359-.24805.33008-.44531.43945s-.43945.16406-.72656.16406h-1.68555zm.44873-2.41503h1.09961c.25488 0 .44824-.05859.57959-.17578.13184-.11816.19727-.27832.19727-.48145s-.06543-.3584-.19727-.46582c-.13135-.10742-.32471-.16211-.57959-.16211h-1.09961zm0 1.93066h1.15918c.25488 0 .45215-.06934.5918-.20898s.20947-.31055.20947-.51367c0-.21191-.06982-.38574-.20947-.52344s-.33691-.20605-.5918-.20605h-1.15918v1.45215z" fill="#25357a"/><path d="m4.98926 330.2998c-.03955 0-.07275-.0127-.09863-.03906-.02588-.02539-.03857-.05859-.03857-.09863v-2.82715c0-.03906.0127-.07324.03857-.10156.02588-.02734.05908-.04199.09863-.04199h.2749c.04004 0 .07373.01465.10205.04199.02783.02832.0415.0625.0415.10156v.26367c.07959-.13574.18945-.2373.32861-.30566.13965-.06738.30908-.10156.5083-.10156h.23291c.04004 0 .07275.01367.09863.03906.02588.02637.03906.05859.03906.09863v.24512c0 .04004-.01318.07227-.03906.0957s-.05859.03613-.09863.03613h-.3584c-.21533 0-.38477.0625-.5083.18848-.12354.125-.18506.29492-.18506.51074v1.75684c0 .04004-.01416.07324-.04199.09863-.02783.02637-.06152.03906-.10156.03906h-.29297z" fill="#25357a"/><path d="m7.2124 326.6123c-.03955 0-.07275-.0127-.09863-.03906s-.03857-.05859-.03857-.09863v-.32324c0-.03906.0127-.07324.03857-.10156.02588-.02734.05908-.04102.09863-.04102h.37695c.03955 0 .07373.01367.10156.04102.02783.02832.0415.0625.0415.10156v.32324c0 .04004-.01367.07227-.0415.09863s-.06201.03906-.10156.03906zm.04785 3.6875c-.03955 0-.07275-.0127-.09863-.03906-.02588-.02539-.03857-.05859-.03857-.09863v-2.83301c0-.04004.0127-.07227.03857-.09863.02588-.02539.05908-.03906.09863-.03906h.28711c.03955 0 .07275.01367.09863.03906.02588.02637.03857.05859.03857.09863v2.83301c0 .04004-.0127.07324-.03857.09863-.02588.02637-.05908.03906-.09863.03906z" fill="#25357a"/><path d="m9.70508 330.35938c-.21924 0-.40869-.03906-.56787-.11621-.15967-.07812-.29004-.18359-.3916-.31738-.10156-.13281-.17725-.28516-.22705-.45703-.0498-.1709-.07861-.35254-.08691-.54395-.00391-.06348-.00586-.12305-.00586-.17871s.00195-.11621.00586-.17969c.0083-.1875.03711-.36621.08691-.53809.0498-.1709.12549-.32422.22705-.45996s.23193-.24219.3916-.31934c.15918-.07812.34863-.11719.56787-.11719.23486 0 .43018.04199.58545.12598.15527.08301.2832.1875.38281.31055v-1.375c0-.03906.0127-.07227.03857-.09863.02588-.02539.05859-.03809.09863-.03809h.28711c.03955 0 .07227.0127.09863.03809.02588.02637.03857.05957.03857.09863v3.96875c0 .04004-.0127.07324-.03857.09863-.02637.02637-.05908.03906-.09863.03906h-.26904c-.04395 0-.07764-.0127-.10156-.03906-.02393-.02539-.03613-.05859-.03613-.09863v-.25098c-.09961.12793-.229.23438-.38818.32031-.15967.08496-.35889.12793-.59766.12793zm.12549-.48438c.19922 0 .3584-.04492.47803-.13672s.20898-.20801.26904-.34961c.05957-.1416.09131-.28613.0957-.43359.00391-.06348.00586-.14062.00586-.23047s-.00195-.16602-.00586-.22949c-.00439-.13965-.03711-.27734-.09863-.41309-.06201-.13477-.15381-.24707-.2749-.33398-.12158-.08789-.27832-.13184-.46924-.13184-.20361 0-.36475.04492-.48438.13477-.11963.08887-.20508.20703-.25684.35254s-.08203.30176-.08984.46875c-.00391.11621-.00391.23145 0 .34668.00781.16797.03809.32422.08984.46973s.13721.2627.25684.35254.28076.13379.48438.13379z" fill="#25357a"/><path d="m13.39844 331.61426c-.271 0-.49316-.03516-.6665-.10742-.17334-.07129-.30859-.1582-.40625-.25977s-.16748-.20312-.20947-.30469c-.0415-.10156-.06445-.18262-.06836-.24219-.00439-.04004.00879-.07324.03857-.10156s.06299-.04199.09863-.04199h.28711c.03564 0 .06543.00781.08936.02441.02393.01562.04395.0498.06006.10156.02393.05957.05957.12598.10742.2002.04785.07324.12158.1377.22119.19141s.23926.08008.41846.08008c.18701 0 .34473-.02539.47217-.07715s.22412-.13965.29004-.26367c.06543-.12305.09863-.29492.09863-.51367v-.40625c-.0957.12305-.22119.22559-.37695.30762-.15527.08203-.35059.12207-.58545.12207-.22314 0-.41455-.03809-.57373-.11621-.15967-.07715-.29004-.18262-.3916-.31641s-.17725-.28613-.22705-.45703c-.0498-.17188-.07861-.35059-.08691-.53809-.00391-.11133-.00391-.22168 0-.3291.0083-.1875.03711-.36621.08691-.53809.0498-.1709.12549-.32422.22705-.45996s.23193-.24219.3916-.31934c.15918-.07812.35059-.11719.57373-.11719.23877 0 .43701.04395.59473.13184.15723.08789.28564.19727.38525.32812v-.25684c0-.03906.01318-.07324.03906-.10156.02588-.02734.05859-.04199.09863-.04199h.2749c.03955 0 .07373.01465.10156.04199.02783.02832.04199.0625.04199.10156v2.89941c0 .2666-.04492.50391-.13477.71094-.08936.20703-.23682.37012-.44238.49023-.20508.11914-.48096.17871-.82764.17871zm-.01172-1.76856c.19922 0 .35938-.0459.48096-.1377s.21094-.20703.26904-.34668c.05762-.13965.08838-.28125.09277-.42383.00391-.05664.00586-.125.00586-.20703 0-.08105-.00195-.15039-.00586-.20605-.00439-.14355-.03516-.28418-.09277-.42383-.05811-.13965-.14746-.25488-.26904-.34668s-.28174-.1377-.48096-.1377c-.19971 0-.35889.04492-.47852.13477-.11914.08887-.20508.20703-.25684.35254s-.08154.30176-.08984.46875c-.00391.10352-.00391.20898 0 .31738.0083.16699.03809.32324.08984.46875s.1377.2627.25684.35254c.11963.08984.27881.13477.47852.13477z" fill="#25357a"/><path d="m16.93701 330.35938c-.41455 0-.74316-.12598-.98633-.37891-.24316-.25391-.37646-.59863-.40039-1.03711-.00391-.05176-.00586-.11914-.00586-.2002 0-.08203.00195-.14844.00586-.2002.01611-.2832.08154-.53125.19727-.74414.11572-.21387.27393-.37793.4751-.49316.20117-.11621.4375-.17383.7085-.17383.30273 0 .55664.06348.76172.19141.20557.12793.36182.30859.46924.54395.10791.23535.16162.50977.16162.8252v.10156c0 .04395-.01318.07715-.03906.10156-.02588.02344-.05859.03516-.09863.03516h-2.06787v.05469c.00781.16309.04395.31543.10742.45703.06396.1416.15625.25586.27783.34375.12158.08691.26416.13086.42773.13086.14307 0 .2627-.02148.3584-.06543s.17334-.09277.2334-.14648c.05957-.05371.09912-.09668.11914-.12891.03613-.04785.06396-.07617.08398-.08594.01953-.00977.05176-.01562.0957-.01562h.29248c.03613 0 .06689.01172.09277.0332.02588.02246.03662.05273.03271.09277-.00391.05957-.03564.13281-.09521.21777-.06006.08594-.14453.1709-.25439.25391-.10938.08398-.24512.15234-.40625.20703-.16162.05371-.34375.08008-.54688.08008zm-.81885-1.84083h1.6377v-.01758c0-.17969-.03271-.33887-.09863-.47852s-.16064-.25-.28418-.33203c-.12354-.08105-.271-.12207-.44189-.12207-.17139 0-.31787.04102-.43945.12207-.12158.08203-.21436.19238-.27783.33203-.06396.13965-.0957.29883-.0957.47852v.01758z" fill="#25357a"/><path d="m-21.34444 333.59225h5.90799c.18991 0 .28501.22961.15073.36389l-2.954 2.95401c-.08325.08325-.21821.08325-.30146 0l-2.954-2.95401c-.13428-.13428-.03918-.36389.15073-.36389z" fill="#f4e26e"/><path d="m657.51562 102.60889c-.03906 0-.07227-.0127-.09863-.03906-.02637-.02539-.03809-.05859-.03809-.09863v-3.51465h-1.14844c-.03906 0-.07227-.0127-.09766-.03809-.02734-.02637-.03906-.05957-.03906-.09863v-.25098c0-.04395.01172-.0791.03906-.10547.02539-.02539.05859-.03809.09766-.03809h2.88086c.04395 0 .0791.0127.10547.03809.02539.02637.03809.06152.03809.10547v.25098c0 .03906-.0127.07227-.03809.09863-.02637.02539-.06152.03809-.10547.03809h-1.14062v3.51465c0 .04004-.01367.07324-.03906.09863-.02637.02637-.06055.03906-.10547.03906z" fill="#25357a"/><path d="m660.5459 102.66846c-.30273 0-.55566-.05762-.75879-.17285-.20312-.11621-.35938-.27637-.4668-.48145s-.16699-.43945-.17871-.70215c-.00488-.06738-.00684-.1543-.00684-.25977s.00195-.19043.00684-.25391c.01172-.26758.07227-.50293.18262-.70605.10938-.20312.26562-.3623.46875-.47754.20312-.11621.4541-.17383.75293-.17383s.5498.05762.75293.17383c.20312.11523.35938.27441.46875.47754.11035.20312.1709.43848.18359.70605.00391.06348.00586.14844.00586.25391s-.00195.19238-.00586.25977c-.0127.2627-.07227.49707-.17969.70215s-.26367.36523-.4668.48145c-.20312.11523-.45605.17285-.75879.17285zm0-.45996c.24707 0 .44434-.0791.5918-.23633s.22754-.3877.23926-.69043c.00391-.05957.00586-.13477.00586-.22656s-.00195-.16797-.00586-.22754c-.01172-.30273-.0918-.5332-.23926-.69043s-.34473-.23633-.5918-.23633-.44531.0791-.59473.23633-.22852.3877-.23633.69043c-.00391.05957-.00586.13574-.00586.22754s.00195.16699.00586.22656c.00781.30273.08691.5332.23633.69043s.34766.23633.59473.23633z" fill="#25357a"/><path d="m663.44531 102.60889c-.05273 0-.0918-.0127-.12012-.03906-.02832-.02539-.05176-.0625-.07129-.11035l-.84961-2.77344c-.00781-.01953-.01172-.04004-.01172-.05957 0-.03613.01367-.06543.03906-.08984.02539-.02344.05469-.03613.08691-.03613h.2627c.04395 0 .07812.0127.10156.03613.02344.02441.04004.0459.04785.06543l.66309 2.25391.71191-2.22949c.00781-.02832.02441-.05566.05078-.08398.02637-.02734.06445-.04199.11621-.04199h.20312c.05273 0 .0918.01465.11914.04199.02832.02832.04492.05566.04883.08398l.71094 2.22949.66406-2.25391c.00391-.01953.01758-.04102.04102-.06543.02344-.02344.05859-.03613.10156-.03613h.26953c.03125 0 .05957.0127.08398.03613.02344.02441.03516.05371.03516.08984 0 .01953-.00391.04004-.01172.05957l-.84277 2.77344c-.0166.04785-.03809.08496-.06543.11035-.02832.02637-.07227.03906-.13184.03906h-.2334c-.05176 0-.09375-.0127-.12891-.03906-.0332-.02539-.05664-.0625-.06836-.11035l-.69336-2.13965-.69336 2.13965c-.01562.04785-.03906.08496-.07129.11035-.03223.02637-.0752.03906-.13184.03906h-.23242z" fill="#25357a"/><path d="m668.19141 102.66846c-.19922 0-.38086-.04004-.54492-.11914-.16309-.08008-.29492-.1875-.39453-.32324-.09961-.13477-.14844-.28809-.14844-.45996 0-.27539.11133-.49414.33398-.65723s.51367-.27148.87305-.32324l.89062-.125v-.17383c0-.19141-.05469-.34082-.16406-.44824-.11035-.10742-.28906-.16113-.53516-.16113-.17578 0-.31934.03613-.43066.10742-.1123.07227-.18945.16309-.2334.27539-.02344.05957-.06543.08887-.125.08887h-.26953c-.04297 0-.07617-.0127-.09766-.03809-.02246-.02637-.0332-.05664-.0332-.09277 0-.05957.02246-.13379.06836-.22168.0459-.08691.11719-.17285.21289-.25684.0957-.08301.2168-.1543.36719-.21191.14844-.05762.33203-.08691.54688-.08691.23828 0 .43945.03125.60352.09277.16309.06152.29199.14453.38477.24805.09375.10352.16211.2207.2041.35254s.0625.26562.0625.40039v1.93652c0 .04004-.0127.07324-.03809.09863-.02734.02637-.05957.03906-.09961.03906h-.27539c-.04297 0-.07715-.0127-.10156-.03906-.02344-.02539-.03516-.05859-.03516-.09863v-.25684c-.05176.07129-.12109.14258-.20898.21191-.08789.07031-.19727.12793-.3291.17383s-.29297.06836-.4834.06836zm.125-.44825c.16309 0 .3125-.03418.44824-.10449.13574-.06934.24219-.17773.31934-.3252.07812-.14746.11719-.33301.11719-.55664v-.16699l-.69336.10156c-.2832.04004-.49609.10645-.63965.2002s-.21582.21191-.21582.35547c0 .11133.0332.2041.09961.27832.06543.07324.14844.12793.25.16406s.20703.05371.31445.05371z" fill="#25357a"/><path d="m670.75977 102.60889c-.03906 0-.07227-.0127-.09766-.03906-.02637-.02539-.03906-.05859-.03906-.09863v-2.82715c0-.03906.0127-.07324.03906-.10156.02539-.02734.05859-.04199.09766-.04199h.27539c.04004 0 .07422.01465.10156.04199.02832.02832.04199.0625.04199.10156v.26367c.0791-.13574.18945-.2373.3291-.30566.13867-.06738.30859-.10156.50781-.10156h.23242c.04102 0 .07324.01367.09961.03906.02539.02637.03906.05859.03906.09863v.24512c0 .04004-.01367.07227-.03906.0957-.02637.02344-.05859.03613-.09961.03613h-.35742c-.21582 0-.38477.0625-.50879.18848-.12402.125-.18457.29492-.18457.51074v1.75684c0 .04004-.01465.07324-.04297.09863-.02734.02637-.06055.03906-.10156.03906h-.29297z" fill="#25357a"/><path d="m673.96484 102.66846c-.21973 0-.40918-.03906-.56836-.11621-.16016-.07812-.29004-.18359-.3916-.31738-.10156-.13281-.17676-.28516-.22754-.45703-.04883-.1709-.07812-.35254-.08594-.54395-.00391-.06348-.00586-.12305-.00586-.17871s.00195-.11621.00586-.17969c.00781-.1875.03711-.36621.08594-.53809.05078-.1709.12598-.32422.22754-.45996s.23145-.24219.3916-.31934c.15918-.07812.34863-.11719.56836-.11719.23438 0 .42969.04199.58496.12598.15527.08301.2832.1875.38281.31055v-1.375c0-.03906.0127-.07227.03809-.09863.02637-.02539.05859-.03809.09961-.03809h.28711c.03906 0 .07227.0127.09766.03809.02637.02637.03906.05957.03906.09863v3.96875c0 .04004-.0127.07324-.03906.09863-.02539.02637-.05859.03906-.09766.03906h-.26953c-.04395 0-.07812-.0127-.10156-.03906-.02344-.02539-.03613-.05859-.03613-.09863v-.25098c-.09961.12793-.22949.23438-.3877.32031-.16016.08496-.35938.12793-.59766.12793zm.125-.48438c.19922 0 .3584-.04492.47852-.13672.11914-.0918.20898-.20801.26855-.34961s.09082-.28613.0957-.43359c.00391-.06348.00586-.14062.00586-.23047s-.00195-.16602-.00586-.22949c-.00488-.13965-.03711-.27734-.09863-.41309-.0625-.13477-.1543-.24707-.27539-.33398-.12109-.08789-.27734-.13184-.46875-.13184-.20312 0-.36523.04492-.48438.13477-.11914.08887-.20508.20703-.25684.35254s-.08203.30176-.08984.46875c-.00391.11621-.00391.23145 0 .34668.00781.16797.03809.32422.08984.46973s.1377.2627.25684.35254.28125.13379.48438.13379z" fill="#25357a"/><path d="m677.46094 102.66846c-.22363 0-.41504-.02734-.57422-.08301-.15918-.05664-.28906-.12402-.38867-.2041-.09961-.0791-.17383-.15918-.22461-.23828-.04883-.08008-.07617-.14355-.08008-.19141-.00391-.04395.00977-.07812.04199-.10156.03223-.02441.06348-.03613.0957-.03613h.26855c.01953 0 .03711.00293.05078.00879s.0332.02344.05664.05078c.05273.05566.10938.11133.17383.16797.06348.05566.14258.10156.23633.13672.09375.03613.20996.05371.34961.05371.20312 0 .37012-.03809.50195-.11621.13086-.07715.19727-.19238.19727-.34375 0-.09961-.02734-.17871-.08105-.23926-.05371-.05957-.14941-.11328-.28613-.16113-.13867-.04785-.32617-.09766-.56543-.14941-.23926-.05566-.42871-.12402-.56738-.20605-.14062-.08203-.23926-.17969-.29883-.29297-.06055-.11328-.08984-.24219-.08984-.38574 0-.14746.04297-.29004.13086-.42676.08789-.1377.2168-.25.38574-.33789s.38184-.13184.63672-.13184c.20703 0 .38379.02637.53223.07812.14648.05176.26855.11621.36426.19434.0957.07715.16699.1543.21582.22949.04688.07617.07324.13965.07715.19141.00391.04004-.00879.07324-.03613.09863-.02734.02637-.05957.03906-.0957.03906h-.25098c-.02832 0-.05078-.00586-.06836-.01758-.01855-.0127-.03516-.02637-.05078-.04199-.04004-.05176-.08691-.10352-.14062-.15527s-.12402-.09473-.20898-.12891c-.08594-.03418-.19824-.05078-.33789-.05078-.19922 0-.34863.04199-.44824.125-.09961.08398-.14941.18945-.14941.31738 0 .0752.02246.14355.06543.20312.04395.05957.12793.11328.25195.16113.12305.04785.30664.09961.54883.15527.26367.05176.4707.12207.62207.20996.15137.08691.25879.18848.32324.30469.0625.11523.0957.24902.0957.40039 0 .16699-.04883.32031-.14453.45996s-.23828.25-.42969.33203c-.19141.08105-.42676.12207-.70508.12207z" fill="#25357a"/><path d="m657.51562 109.78174c-.03906 0-.07227-.0127-.09863-.03906-.02637-.02539-.03809-.05859-.03809-.09863v-3.51465h-1.14844c-.03906 0-.07227-.0127-.09766-.03809-.02734-.02637-.03906-.05957-.03906-.09863v-.25098c0-.04395.01172-.0791.03906-.10547.02539-.02539.05859-.03809.09766-.03809h2.88086c.04395 0 .0791.0127.10547.03809.02539.02637.03809.06152.03809.10547v.25098c0 .03906-.0127.07227-.03809.09863-.02637.02539-.06152.03809-.10547.03809h-1.14062v3.51465c0 .04004-.01367.07324-.03906.09863-.02637.02637-.06055.03906-.10547.03906z" fill="#25357a"/><path d="m659.87109 109.78174c-.04004 0-.07227-.0127-.09863-.03906-.02637-.02539-.03906-.05859-.03906-.09863v-3.96875c0-.03906.0127-.07227.03906-.09863.02637-.02539.05859-.03809.09863-.03809h.29883c.04297 0 .07812.0127.10156.03809.02344.02637.03516.05957.03516.09863v1.39258c.1084-.13477.24023-.24512.39453-.32812.15625-.08398.35352-.12598.5918-.12598.25977 0 .47949.05664.66113.1709.18066.11328.31836.27051.41211.47168s.14062.43555.14062.70215v1.68555c0 .04004-.0127.07324-.03613.09863-.02344.02637-.05762.03906-.10156.03906h-.29883c-.03906 0-.07227-.0127-.09863-.03906-.02637-.02539-.03809-.05859-.03809-.09863v-1.65527c0-.2793-.06836-.49707-.20312-.6543-.13672-.15723-.33594-.23633-.59863-.23633-.24707 0-.44629.0791-.59766.23633s-.22754.375-.22754.6543v1.65527c0 .04004-.01172.07324-.03516.09863-.02344.02637-.05859.03906-.10156.03906h-.29883z" fill="#25357a"/><path d="m664.23438 109.84131c-.19922 0-.38086-.04004-.54492-.11914-.16309-.08008-.29492-.1875-.39453-.32324-.09961-.13477-.14844-.28809-.14844-.45996 0-.27539.11133-.49414.33398-.65723s.51367-.27148.87305-.32324l.89062-.125v-.17383c0-.19141-.05469-.34082-.16406-.44824-.11035-.10742-.28906-.16113-.53516-.16113-.17578 0-.31934.03613-.43066.10742-.1123.07227-.18945.16309-.2334.27539-.02344.05957-.06543.08887-.125.08887h-.26953c-.04297 0-.07617-.0127-.09766-.03809-.02246-.02637-.0332-.05664-.0332-.09277 0-.05957.02246-.13379.06836-.22168.0459-.08691.11719-.17285.21289-.25684.0957-.08301.2168-.1543.36719-.21191.14844-.05762.33203-.08691.54688-.08691.23828 0 .43945.03125.60352.09277.16309.06152.29199.14453.38477.24805.09375.10352.16211.2207.2041.35254s.0625.26562.0625.40039v1.93652c0 .04004-.0127.07324-.03809.09863-.02734.02637-.05957.03906-.09961.03906h-.27539c-.04297 0-.07715-.0127-.10156-.03906-.02344-.02539-.03516-.05859-.03516-.09863v-.25684c-.05176.07129-.12109.14258-.20898.21191-.08789.07031-.19727.12793-.3291.17383s-.29297.06836-.4834.06836zm.125-.44824c.16309 0 .3125-.03418.44824-.10449.13574-.06934.24219-.17773.31934-.3252.07812-.14746.11719-.33301.11719-.55664v-.16699l-.69336.10156c-.2832.04004-.49609.10645-.63965.2002s-.21582.21191-.21582.35547c0 .11133.0332.2041.09961.27832.06543.07324.14844.12793.25.16406s.20703.05371.31445.05371z" fill="#25357a"/><path d="m666.80371 109.78174c-.04004 0-.07324-.0127-.09863-.03906-.02539-.02539-.03906-.05859-.03906-.09863v-2.83301c0-.04004.01367-.07227.03906-.09863.02539-.02539.05859-.03906.09863-.03906h.26855c.04102 0 .07324.01367.09961.03906.02539.02637.03906.05859.03906.09863v.20898c.09082-.12305.20703-.22168.3457-.2959.13965-.07324.30664-.11035.50195-.11035.45117-.00391.76953.17969.95703.5498.0918-.16699.22461-.30078.40039-.40039s.375-.14941.59766-.14941c.20703 0 .39453.04785.56445.14355s.30273.24023.40039.43359.14648.43555.14648.72559v1.72754c0 .04004-.0127.07324-.03906.09863-.02539.02637-.05859.03906-.09766.03906h-.28125c-.04004 0-.07227-.0127-.09863-.03906-.02637-.02539-.03906-.05859-.03906-.09863v-1.67285c0-.22363-.03223-.39844-.0957-.52637s-.14941-.2168-.25684-.26953c-.10742-.05078-.22461-.07715-.35254-.07715-.10449 0-.20996.02637-.31738.07715-.10742.05273-.19531.1416-.26562.26953s-.10449.30273-.10449.52637v1.67285c0 .04004-.0127.07324-.03906.09863-.02637.02637-.05859.03906-.09863.03906h-.28125c-.03906 0-.07227-.0127-.09766-.03906-.02637-.02539-.03906-.05859-.03906-.09863v-1.67285c0-.22363-.03418-.39844-.10156-.52637-.06836-.12793-.15625-.2168-.26367-.26953-.10742-.05078-.2207-.07715-.33984-.07715-.10352 0-.20898.02637-.31738.07715-.10742.05273-.19629.1416-.26562.26953s-.10449.30078-.10449.51953v1.67969c0 .04004-.01367.07324-.03906.09863-.02539.02637-.05859.03906-.09863.03906h-.28711z" fill="#25357a"/><path d="m673.22266 109.84131c-.41406 0-.74219-.12598-.98633-.37891-.24219-.25391-.37598-.59863-.40039-1.03711-.00391-.05176-.00586-.11914-.00586-.2002 0-.08203.00195-.14844.00586-.2002.0166-.2832.08203-.53125.19727-.74414.11621-.21387.27441-.37793.47559-.49316.20117-.11621.4375-.17383.70801-.17383.30273 0 .55664.06348.76172.19141.20605.12793.3623.30859.46973.54395.1084.23535.16113.50977.16113.8252v.10156c0 .04395-.0127.07715-.03906.10156-.02539.02344-.05859.03516-.09766.03516h-2.06836v.05469c.00781.16309.04395.31543.10742.45703.06445.1416.15625.25586.27734.34375.12207.08691.26465.13086.42773.13086.14355 0 .26367-.02148.35938-.06543s.17285-.09277.23242-.14648c.06055-.05371.09961-.09668.11914-.12891.03711-.04785.06445-.07617.08398-.08594s.05273-.01562.0957-.01562h.29297c.03613 0 .06641.01172.09277.0332.02637.02246.03613.05273.03223.09277-.00391.05957-.03516.13281-.09473.21777-.05957.08594-.14453.1709-.25488.25391-.10938.08398-.24414.15234-.40625.20703-.16113.05371-.34375.08008-.54688.08008zm-.81836-1.84082h1.6377v-.01758c0-.17969-.03223-.33887-.09863-.47852s-.16016-.25-.28418-.33203c-.12402-.08105-.27051-.12207-.44238-.12207-.1709 0-.31738.04102-.43945.12207-.12109.08203-.21387.19238-.27734.33203-.06445.13965-.0957.29883-.0957.47852v.01758z" fill="#25357a"/><path d="m676.40234 109.84131c-.22266 0-.41406-.02734-.57324-.08301-.15918-.05664-.28906-.12402-.38867-.2041-.09961-.0791-.1748-.15918-.22363-.23828-.05078-.08008-.07715-.14355-.08105-.19141-.00391-.04395.00977-.07812.04199-.10156.03125-.02441.06348-.03613.0957-.03613h.26855c.02051 0 .03711.00293.05176.00879.01367.00586.03223.02344.05664.05078.05078.05566.10938.11133.17285.16797.06348.05566.1416.10156.23535.13672.09375.03613.21094.05371.34961.05371.2041 0 .37109-.03809.50293-.11621.13184-.07715.19727-.19238.19727-.34375 0-.09961-.02637-.17871-.08105-.23926-.05371-.05957-.14941-.11328-.28711-.16113-.13672-.04785-.3252-.09766-.56445-.14941-.23926-.05566-.42773-.12402-.56836-.20605-.13867-.08203-.23828-.17969-.29883-.29297-.05859-.11328-.08984-.24219-.08984-.38574 0-.14746.04492-.29004.13281-.42676.08691-.1377.21484-.25.38477-.33789s.38184-.13184.63672-.13184c.20703 0 .38477.02637.53125.07812.14844.05176.26953.11621.36523.19434.0957.07715.16797.1543.21484.22949.04883.07617.07422.13965.07812.19141.00391.04004-.00781.07324-.03613.09863-.02832.02637-.05957.03906-.09473.03906h-.25195c-.02734 0-.05078-.00586-.06836-.01758-.01758-.0127-.03516-.02637-.05078-.04199-.04004-.05176-.08691-.10352-.14062-.15527s-.12305-.09473-.20898-.12891-.19824-.05078-.33789-.05078c-.19922 0-.34863.04199-.44824.125-.09961.08398-.14941.18945-.14941.31738 0 .0752.02148.14355.06641.20312.04297.05957.12695.11328.25.16113s.30664.09961.55078.15527c.26172.05176.46973.12207.62109.20996.15137.08691.25879.18848.32227.30469.06445.11523.0957.24902.0957.40039 0 .16699-.04688.32031-.14258.45996s-.24023.25-.43066.33203c-.19141.08105-.42676.12207-.70605.12207z" fill="#25357a"/><path d="m656.46332 118.24236v-5.90799c0-.18991.22961-.28501.36389-.15073l2.95398 2.95399c.08325.08325.08325.21821 0 .30146l-2.95398 2.95399c-.13428.13428-.36389.03918-.36389-.15072z" fill="#f4e26e"/></svg>';

  // main.ts
  var import_svg_pan_zoom = __toESM(require_browserify());
  var import_moment = __toESM(require_moment());
  if (true) {
    const eventSource = new EventSource("/esbuild");
    let openned = false;
    eventSource.onopen = () => {
      console.log("[LiveReload] Open");
      if (openned) {
        location.reload();
      } else {
        openned = true;
      }
    };
    eventSource.addEventListener("change", (event) => {
      console.log("[LiveReload] Change:", event);
      location.reload();
    });
    eventSource.onerror = (error) => {
      console.log("[LiveReload] Error:", error);
    };
  }
  var EMPTY_SHEET_DATA = {
    table: {
      rows: []
    }
  };
  var BOOKING_SHEET_ID = "19OJPsW20-DwhbuRuvcjMKAwSjpumDMQuiX20XonZ6Nc";
  var UNIT_LABEL_OVERLAP_PADDING = 6;
  var UNIT_LABEL_OFFSET_STEP = 18;
  var UNIT_LABEL_MAX_OFFSET_STEPS = 3;
  var USE_WEIGHTED_UNIT_LABEL_CENTER = true;
  var UNIT_LABEL_CENTER_SAMPLE_STEPS = 12;
  var usesManagedTouchGestures = () => {
    if (navigator.maxTouchPoints > 0) {
      return true;
    }
    if ("ontouchstart" in window) {
      return true;
    }
    if (typeof window.matchMedia !== "function") {
      return false;
    }
    return window.matchMedia("(any-pointer: coarse)").matches;
  };
  var TABLET_LAYOUT_MAX_WIDTH = 991;
  var MOBILE_LAYOUT_MAX_WIDTH = 767;
  var getResponsiveViewportWidth = () => {
    const candidates = [
      window.innerWidth,
      window.visualViewport?.width,
      window.screen?.width
    ].filter((value) => typeof value === "number" && value > 0);
    return candidates.length > 0 ? Math.min(...candidates) : window.innerWidth;
  };
  var syncResponsiveLayoutClasses = () => {
    const root = document.documentElement;
    const width = getResponsiveViewportWidth();
    root.classList.toggle("booking-layout-tablet", width <= TABLET_LAYOUT_MAX_WIDTH);
    root.classList.toggle("booking-layout-mobile", width <= MOBILE_LAYOUT_MAX_WIDTH);
  };
  var Spaces = class {
    constructor() {
      __publicField(this, "spaces", /* @__PURE__ */ new Map());
      const spacesList = document.querySelector("#spaces-list > div");
      if (spacesList === null) throw new Error("Tenants list is null");
      spacesList.childNodes.forEach((t) => {
        if (!(t instanceof HTMLElement)) {
          return;
        }
        const space = {};
        space.innerHTML = t.outerHTML;
        const name = t.querySelector("[data-by=name]");
        space.name = name?.textContent;
        const squareFootage = t.querySelector("[data-by=square-footage]");
        space.squareFootage = Number(squareFootage?.textContent);
        if (space.name === void 0 || space.squareFootage === void 0) {
          return;
        }
        this.spaces.set(space.name, space);
      });
    }
  };
  var Modal = class {
    constructor() {
      __publicField(this, "element");
      const element = document.querySelector("#form-modal");
      if (!(element instanceof HTMLElement)) {
        throw new Error("Form Modal not HTMLElement");
      }
      this.element = element;
    }
    show() {
      this.element.style.display = "flex";
    }
  };
  var EnquiryGeneralForm = class {
    constructor() {
      __publicField(this, "element");
      const element = document.querySelector("#enquiry-general-form");
      if (!(element instanceof HTMLElement)) {
        throw new Error("Form Modal not HTMLElement");
      }
      this.element = element;
    }
    show(show = true) {
      this.element.style.display = show ? "block" : "none";
    }
    hide() {
      this.show(false);
    }
  };
  var BookingToast = class {
    constructor() {
      __publicField(this, "element");
      __publicField(this, "hideTimeout", null);
      let element = document.querySelector("#booking-toast");
      if (!(element instanceof HTMLElement)) {
        element = document.createElement("div");
        element.id = "booking-toast";
        element.setAttribute("role", "status");
        element.setAttribute("aria-live", "polite");
        document.body.appendChild(element);
      }
      this.element = element;
    }
    show(message) {
      this.element.textContent = message;
      this.element.classList.add("booking-toast-visible");
      if (this.hideTimeout !== null) {
        window.clearTimeout(this.hideTimeout);
      }
      this.hideTimeout = window.setTimeout(() => {
        this.element.classList.remove("booking-toast-visible");
        this.hideTimeout = null;
      }, 2600);
    }
  };
  var AvailabilityStatus = class {
    constructor() {
      __publicField(this, "element");
      const parent = document.querySelector("#svg-section");
      if (!(parent instanceof HTMLElement)) {
        throw new Error("SVG section not HTMLElement");
      }
      let element = document.querySelector("#booking-availability-status");
      if (!(element instanceof HTMLElement)) {
        element = document.createElement("div");
        element.id = "booking-availability-status";
        parent.appendChild(element);
      }
      this.element = element;
    }
    showLoading() {
      this.element.textContent = "Loading availability...";
      this.element.classList.add("booking-availability-status-visible");
      this.element.classList.remove("booking-availability-status-warning");
    }
    showWarning() {
      this.element.textContent = "Live availability unavailable";
      this.element.classList.add(
        "booking-availability-status-visible",
        "booking-availability-status-warning"
      );
    }
    hide() {
      this.element.classList.remove(
        "booking-availability-status-visible",
        "booking-availability-status-warning"
      );
    }
  };
  var ZoomControls = class {
    constructor(spz) {
      const parent = document.querySelector("#svg-section");
      if (!(parent instanceof HTMLElement)) {
        console.warn("Zoom controls parent not found");
        return;
      }
      let element = document.querySelector("#map-zoom-controls");
      if (!(element instanceof HTMLElement)) {
        element = document.createElement("div");
        element.id = "map-zoom-controls";
        element.setAttribute("aria-label", "Map zoom controls");
        element.innerHTML = [
          '<button type="button" class="map-zoom-button" data-action="zoom-in" aria-label="Zoom in">+</button>',
          '<button type="button" class="map-zoom-button" data-action="zoom-out" aria-label="Zoom out">-</button>'
        ].join("");
        parent.appendChild(element);
      }
      const zoomIn = element.querySelector('[data-action="zoom-in"]');
      const zoomOut = element.querySelector('[data-action="zoom-out"]');
      if (!(zoomIn instanceof HTMLButtonElement) || !(zoomOut instanceof HTMLButtonElement)) {
        console.warn("Zoom controls missing buttons");
        return;
      }
      zoomIn.addEventListener("click", () => {
        spz.zoomIn();
      });
      zoomOut.addEventListener("click", () => {
        spz.zoomOut();
      });
    }
  };
  var EmbeddedMapGestures = class {
    constructor(spz, svg, onScreenTap) {
      this.spz = spz;
      this.svg = svg;
      this.onScreenTap = onScreenTap;
      __publicField(this, "element");
      __publicField(this, "hint");
      __publicField(this, "hintTimeout", null);
      __publicField(this, "lastWheelEventTime", 0);
      __publicField(this, "tapCandidate", null);
      // Two-finger gesture state
      __publicField(this, "lastTouchCenter", null);
      __publicField(this, "lastTouchDist", null);
      __publicField(this, "handleWheel", (event) => {
        if (!event.metaKey && !event.ctrlKey) {
          this.showHint(`Hold ${this.getModifierLabel()} while scrolling to zoom the map`);
          return;
        }
        event.preventDefault();
        const inverseScreenCTM = this.svg.getScreenCTM()?.inverse();
        if (inverseScreenCTM === void 0) {
          return;
        }
        const point = this.svg.createSVGPoint();
        point.x = event.clientX;
        point.y = event.clientY;
        let delta = event.deltaY || 1;
        const wheelDeltaEvent = event;
        const timeDelta = Date.now() - this.lastWheelEventTime;
        const divider = 3 + Math.max(0, 30 - timeDelta);
        this.lastWheelEventTime = Date.now();
        if (event.deltaMode === 0 && wheelDeltaEvent.wheelDelta !== void 0) {
          delta = event.deltaY === 0 ? 0 : Math.abs(wheelDeltaEvent.wheelDelta) / event.deltaY;
        }
        delta = -0.3 < delta && delta < 0.3 ? delta : (delta > 0 ? 1 : -1) * Math.log(Math.abs(delta) + 10) / divider;
        const relativePoint = point.matrixTransform(inverseScreenCTM);
        const zoom = Math.pow(1 + 0.15, -1 * delta);
        this.spz.zoomAtPointBy(zoom, relativePoint);
      });
      __publicField(this, "handleTouchStart", (event) => {
        if (event.touches.length === 1) {
          if (event.target instanceof Node && !this.svg.contains(event.target)) {
            return;
          }
          const touch = event.touches[0];
          this.tapCandidate = {
            startX: touch.clientX,
            startY: touch.clientY,
            startedAt: Date.now(),
            target: event.target
          };
          this.lastTouchCenter = null;
          this.lastTouchDist = null;
          return;
        }
        if (event.touches.length >= 2) {
          this.tapCandidate = null;
          this.lastTouchCenter = null;
          this.lastTouchDist = null;
          this.showHint("Use the zoom buttons to inspect the map");
        }
      });
      __publicField(this, "handleTouchMove", (event) => {
        if (event.touches.length === 1 && this.tapCandidate !== null) {
          const touch = event.touches[0];
          const dist = Math.hypot(
            touch.clientX - this.tapCandidate.startX,
            touch.clientY - this.tapCandidate.startY
          );
          if (dist > 12) {
            this.showHint("Use two fingers to move the map");
            this.tapCandidate = null;
          }
          return;
        }
      });
      __publicField(this, "handleTouchEnd", (event) => {
        if (event.touches.length === 0 && this.tapCandidate !== null && event.changedTouches.length > 0) {
          const touch = event.changedTouches[0];
          const elapsed = Date.now() - this.tapCandidate.startedAt;
          const dist = Math.hypot(
            touch.clientX - this.tapCandidate.startX,
            touch.clientY - this.tapCandidate.startY
          );
          if (elapsed <= 400 && dist <= 12) {
            event.preventDefault();
            this.triggerManagedTap(touch.clientX, touch.clientY);
          }
        }
        if (event.touches.length < 2) {
          this.lastTouchCenter = null;
          this.lastTouchDist = null;
        }
        if (event.touches.length === 0) {
          this.tapCandidate = null;
        }
      });
      __publicField(this, "handleTouchCancel", (_event) => {
        this.tapCandidate = null;
        this.lastTouchCenter = null;
        this.lastTouchDist = null;
      });
      __publicField(this, "preventSafariGesture", (event) => {
        event.preventDefault();
      });
      const element = document.querySelector("#svg-section");
      if (!(element instanceof HTMLElement)) {
        throw new Error("SVG section not HTMLElement");
      }
      this.element = element;
      let hint = document.querySelector("#map-gesture-hint");
      if (!(hint instanceof HTMLElement)) {
        hint = document.createElement("div");
        hint.id = "map-gesture-hint";
        this.element.appendChild(hint);
      }
      this.hint = hint;
      this.hint.textContent = "";
      this.element.addEventListener("wheel", this.handleWheel, { passive: false });
      if (usesManagedTouchGestures()) {
        this.element.addEventListener("touchstart", this.handleTouchStart, { passive: false });
        this.element.addEventListener("touchmove", this.handleTouchMove, { passive: false });
        this.element.addEventListener("touchend", this.handleTouchEnd, { passive: false });
        this.element.addEventListener("touchcancel", this.handleTouchCancel, { passive: false });
        this.element.addEventListener("gesturestart", this.preventSafariGesture, { passive: false });
        this.element.addEventListener("gesturechange", this.preventSafariGesture, { passive: false });
        this.element.addEventListener("gestureend", this.preventSafariGesture, { passive: false });
      }
    }
    touchCenter(t1, t2) {
      return { x: (t1.clientX + t2.clientX) / 2, y: (t1.clientY + t2.clientY) / 2 };
    }
    touchDist(t1, t2) {
      return Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);
    }
    triggerManagedTap(clientX, clientY) {
      this.onScreenTap(this.tapCandidate?.target ?? null, clientX, clientY);
    }
    getModifierLabel() {
      return /Mac|iPhone|iPad|iPod/.test(navigator.platform) ? "\u2318" : "Ctrl";
    }
    showHint(message) {
      this.hint.textContent = message;
      this.hint.classList.add("map-gesture-hint-visible");
      if (this.hintTimeout !== null) {
        window.clearTimeout(this.hintTimeout);
      }
      this.hintTimeout = window.setTimeout(() => {
        this.hint.classList.remove("map-gesture-hint-visible");
        this.hintTimeout = null;
      }, 1200);
    }
  };
  var UnitLabels = class {
    constructor(svg, units) {
      this.svg = svg;
      __publicField(this, "container");
      __publicField(this, "labels", /* @__PURE__ */ new Map());
      __publicField(this, "centers", /* @__PURE__ */ new Map());
      __publicField(this, "section");
      __publicField(this, "observer");
      __publicField(this, "frame", null);
      __publicField(this, "scheduleUpdate", () => {
        if (this.frame !== null) {
          cancelAnimationFrame(this.frame);
        }
        this.frame = requestAnimationFrame(() => {
          this.frame = null;
          this.updatePositions();
        });
      });
      const section = document.querySelector("#svg-section");
      if (!(section instanceof HTMLElement)) {
        throw new Error("SVG section not HTMLElement");
      }
      this.section = section;
      let container = document.querySelector("#unit-labels");
      if (!(container instanceof HTMLElement)) {
        container = document.createElement("div");
        container.id = "unit-labels";
        this.section.appendChild(container);
      }
      this.container = container;
      for (const unit of units) {
        const label = document.createElement("div");
        label.className = "unit-label-pill";
        label.innerHTML = [
          `<span class="unit-label-pill-text">${unit.title}</span>`,
          '<span class="unit-label-pill-arrow" aria-hidden="true"></span>'
        ].join("");
        this.container.appendChild(label);
        this.labels.set(unit, label);
        this.centers.set(unit, this.computeUnitLabelCenter(unit));
      }
      window.addEventListener("resize", this.scheduleUpdate);
      this.observer = new MutationObserver(() => {
        this.scheduleUpdate();
      });
      this.observer.observe(this.svg, {
        attributes: true,
        subtree: true,
        attributeFilter: ["transform"]
      });
      this.scheduleUpdate();
    }
    syncState() {
      for (const [unit, label] of this.labels) {
        label.classList.toggle("unit-label-selected", unit.isSelected);
        label.classList.toggle("unit-label-unavailable", !unit.isAvailable);
      }
      this.scheduleUpdate();
    }
    updatePositions() {
      const sectionRect = this.section.getBoundingClientRect();
      const occupiedRects = [];
      for (const [unit, label] of this.labels) {
        const rect = unit.path.getBoundingClientRect();
        const screenCTM = unit.path.getScreenCTM();
        const isVisible = rect.width > 0 && rect.height > 0 && rect.bottom >= sectionRect.top && rect.top <= sectionRect.bottom && rect.right >= sectionRect.left && rect.left <= sectionRect.right && screenCTM !== null;
        label.classList.toggle("unit-label-hidden", !isVisible);
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
        let placedRect = null;
        let placedX = centerX;
        let placedY = centerY;
        for (const { x: offsetX, y: offsetY } of candidateOffsets) {
          const candidateX = centerX + offsetX;
          const candidateY = centerY + offsetY;
          const candidateRect = {
            left: candidateX - labelWidth / 2 - UNIT_LABEL_OVERLAP_PADDING,
            right: candidateX + labelWidth / 2 + UNIT_LABEL_OVERLAP_PADDING,
            top: candidateY - labelHeight / 2 - UNIT_LABEL_OVERLAP_PADDING,
            bottom: candidateY + labelHeight / 2 + UNIT_LABEL_OVERLAP_PADDING
          };
          const overlapsExisting = occupiedRects.some((occupiedRect) => {
            return !(candidateRect.right < occupiedRect.left || candidateRect.left > occupiedRect.right || candidateRect.bottom < occupiedRect.top || candidateRect.top > occupiedRect.bottom);
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
            left: placedX - labelWidth / 2 - UNIT_LABEL_OVERLAP_PADDING,
            right: placedX + labelWidth / 2 + UNIT_LABEL_OVERLAP_PADDING,
            top: placedY - labelHeight / 2 - UNIT_LABEL_OVERLAP_PADDING,
            bottom: placedY + labelHeight / 2 + UNIT_LABEL_OVERLAP_PADDING
          };
        }
        label.style.left = `${placedX}px`;
        label.style.top = `${placedY}px`;
        const isOutsideShape = this.isPointOutsideShape(
          unit,
          sectionRect.left + placedX,
          sectionRect.top + placedY
        );
        this.updateArrow(label, centerX - placedX, centerY - placedY, isOutsideShape);
        occupiedRects.push(placedRect);
      }
    }
    computeUnitLabelCenter(unit) {
      const bbox = unit.path.getBBox();
      if (!USE_WEIGHTED_UNIT_LABEL_CENTER || bbox.width === 0 || bbox.height === 0) {
        return {
          x: bbox.x + bbox.width / 2,
          y: bbox.y + bbox.height / 2
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
        [-probeX, -probeY]
      ];
      let totalX = 0;
      let totalY = 0;
      let totalWeight = 0;
      for (let yIndex = 0; yIndex < steps; yIndex++) {
        const y = bbox.y + (yIndex + 0.5) / steps * bbox.height;
        for (let xIndex = 0; xIndex < steps; xIndex++) {
          const x = bbox.x + (xIndex + 0.5) / steps * bbox.width;
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
          x: bbox.x + bbox.width / 2,
          y: bbox.y + bbox.height / 2
        };
      }
      return {
        x: totalX / totalWeight,
        y: totalY / totalWeight
      };
    }
    isPointOutsideShape(unit, clientX, clientY) {
      const inverseScreenCTM = unit.path.getScreenCTM()?.inverse();
      if (inverseScreenCTM === void 0) {
        return false;
      }
      const point = this.svg.createSVGPoint();
      point.x = clientX;
      point.y = clientY;
      const localPoint = point.matrixTransform(inverseScreenCTM);
      return !unit.path.isPointInFill(localPoint);
    }
    updateArrow(label, dx, dy, isOutsideShape) {
      const arrow = label.querySelector(".unit-label-pill-arrow");
      if (!(arrow instanceof HTMLElement)) {
        return;
      }
      const distance = Math.hypot(dx, dy);
      const shouldShowArrow = isOutsideShape && distance > 4;
      label.classList.toggle("unit-label-offset", shouldShowArrow);
      if (!shouldShowArrow) {
        label.style.removeProperty("--unit-label-arrow-angle");
        label.style.removeProperty("--unit-label-arrow-x");
        label.style.removeProperty("--unit-label-arrow-y");
        return;
      }
      const nx = dx / distance;
      const ny = dy / distance;
      const halfWidth = label.offsetWidth / 2;
      const halfHeight = label.offsetHeight / 2;
      const arrowGap = 10;
      const scaleX = Math.abs(nx) > 1e-3 ? (halfWidth + arrowGap) / Math.abs(nx) : Number.POSITIVE_INFINITY;
      const scaleY = Math.abs(ny) > 1e-3 ? (halfHeight + arrowGap) / Math.abs(ny) : Number.POSITIVE_INFINITY;
      const scale = Math.min(scaleX, scaleY);
      const arrowX = nx * scale;
      const arrowY = ny * scale;
      const angle = `${Math.atan2(ny, nx) - Math.PI / 2}rad`;
      label.style.setProperty("--unit-label-arrow-angle", angle);
      label.style.setProperty("--unit-label-arrow-x", `${arrowX}px`);
      label.style.setProperty("--unit-label-arrow-y", `${arrowY}px`);
    }
    getCandidateOffsets(prioritizeCenter) {
      const offsets = prioritizeCenter ? [{ x: 0, y: 0 }] : [];
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
          { x: -distance, y: -distance }
        );
      }
      return offsets;
    }
  };
  var SpaceCard = class {
    constructor(ctx) {
      this.ctx = ctx;
      __publicField(this, "element");
      const element = document.querySelector("#unit-place-holder");
      if (!(element instanceof HTMLElement)) {
        throw new Error("Space card not HTMLElement");
      }
      this.element = element;
    }
    setSpace(space) {
      this.element.innerHTML = space.innerHTML;
      const button = this.element.querySelector(".enquire-now-button");
      button?.addEventListener("click", () => {
        this.ctx.modal.show();
      });
      const closeButton = this.element.querySelector(".booking-map-close");
      if (closeButton instanceof HTMLElement) {
        let closeDown = false;
        closeButton.addEventListener("pointerdown", () => {
          closeDown = true;
        }, { passive: true });
        closeButton.addEventListener("pointerup", () => {
          if (closeDown) {
            closeDown = false;
            this.hide();
          }
        }, { passive: true });
        closeButton.addEventListener("pointercancel", () => {
          closeDown = false;
        }, { passive: true });
        closeButton.addEventListener("click", () => {
          this.hide();
        });
      }
    }
    show(show = true) {
      this.element.style.display = show ? "block" : "none";
    }
    hide() {
      this.show(false);
    }
  };
  var Field = class {
    constructor(selector) {
      __publicField(this, "element");
      const element = document.querySelector(selector);
      if (!(element instanceof HTMLInputElement)) {
        throw new Error(`field not HTMLInputElement with selector ${selector}`);
      }
      this.element = element;
    }
    updateText(text) {
      this.element.value = text;
    }
  };
  var Form = class {
    constructor() {
      __publicField(this, "space");
      __publicField(this, "dates");
      this.space = new Field("#booking-space");
      this.dates = new Field("#booking-dates");
    }
    updateSpace(unit) {
      this.space.updateText(unit.title);
    }
    updateDates(startDate, endDate) {
      this.dates.updateText(`${startDate.format("DD/MM/YYYY")} - ${endDate.format("DD/MM/YYYY")} `);
    }
  };
  var animateRaf = null;
  var animatePanTo = (spz, startX, startY, targetX, targetY) => {
    if (animateRaf !== null) {
      cancelAnimationFrame(animateRaf);
    }
    const durationMs = 220;
    let startTime = null;
    const render = (timestamp) => {
      if (startTime === null) {
        startTime = timestamp;
      }
      const progress = Math.min((timestamp - startTime) / durationMs, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      spz.pan({
        x: targetX * easedProgress + startX * (1 - easedProgress),
        y: targetY * easedProgress + startY * (1 - easedProgress)
      });
      if (progress >= 1) {
        animateRaf = null;
        return;
      }
      animateRaf = requestAnimationFrame(render);
    };
    animateRaf = requestAnimationFrame(render);
  };
  var Unit = class {
    constructor(ctx, path, title) {
      this.ctx = ctx;
      this.path = path;
      this.title = title;
      __publicField(this, "isAvailable", true);
      __publicField(this, "isSelected", false);
      __publicField(this, "lastTapTime", 0);
      path.classList.add("booking-unit");
      path.dataset.bookingUnit = "true";
      path.addEventListener("click", (e) => {
        this.handleTap(e.clientX, e.clientY);
      });
      let ptrDown = null;
      path.addEventListener("pointerdown", (e) => {
        ptrDown = { x: e.clientX, y: e.clientY, time: Date.now() };
      }, { passive: true });
      path.addEventListener("pointerup", (e) => {
        if (ptrDown === null) return;
        const elapsed = Date.now() - ptrDown.time;
        const dist = Math.hypot(e.clientX - ptrDown.x, e.clientY - ptrDown.y);
        ptrDown = null;
        if (elapsed <= 400 && dist <= 12) {
          this.handleTap(e.clientX, e.clientY);
        }
      }, { passive: true });
      path.addEventListener("pointercancel", () => {
        ptrDown = null;
      }, { passive: true });
      path.addEventListener("pointerover", () => {
        ctx.handleUnitPointerOver(this);
      });
      path.addEventListener("pointerleave", () => {
        ctx.handleUnitPointerLeave(this);
      });
    }
    handleTap(clientX, clientY) {
      const now = Date.now();
      if (now - this.lastTapTime < 300) return;
      this.lastTapTime = now;
      const current = this.ctx.spz.getPan();
      const rect = this.ctx.svgContainer.getBoundingClientRect();
      const width = this.ctx.svgContainer.clientWidth;
      const height = this.ctx.svgContainer.clientHeight;
      const pointerX = clientX - rect.left;
      const pointerY = clientY - rect.top;
      const targetX = current.x + width / 2 - pointerX;
      const targetY = current.y + height / 2 - pointerY;
      animatePanTo(this.ctx.spz, current.x, current.y, targetX, targetY);
      this.ctx.handleUnitPointerDown(this);
    }
    highlight(highlight) {
      this.path.classList.toggle("unit-highlighted", highlight);
    }
    select(selected) {
      this.isSelected = selected;
      this.path.classList.toggle("unit-selected", this.isSelected);
    }
    setIsAvailable(isAvailable) {
      this.isAvailable = isAvailable;
      this.path.classList.toggle("unit-available", isAvailable);
      this.path.classList.toggle("unit-unavailable", !isAvailable);
    }
  };
  var Units = class {
    constructor(ctx, paths) {
      this.ctx = ctx;
      __publicField(this, "units", []);
      for (const path of paths) {
        if (!(path instanceof SVGPathElement)) {
          continue;
        }
        let title = null;
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
  };
  var DateRange = class {
    constructor(ctx) {
      __publicField(this, "element");
      __publicField(this, "picker");
      const drp = $("#date-range-picker");
      drp.daterangepicker({
        autoUpdateInput: false,
        autoApply: true,
        parentEl: "body",
        opens: "left",
        drops: "down"
      });
      drp.on("apply.daterangepicker", function(_ev, picker2) {
        $(this).val(picker2.startDate.format("DD/MM/YYYY") + " - " + picker2.endDate.format("DD/MM/YYYY"));
        ctx.handleRangePick(picker2.startDate, picker2.endDate);
      });
      drp.on("cancel.daterangepicker", function() {
        $(this).val("");
      });
      const el = document.querySelector("#date-range-picker");
      if (!(el instanceof HTMLInputElement)) {
        throw new Error("DRP not input");
      }
      this.element = el;
      const picker = drp.data("daterangepicker");
      if (picker === void 0 || picker === null || typeof picker.show !== "function") {
        throw new Error("DRP picker missing");
      }
      this.picker = picker;
      const open = (event) => {
        event.preventDefault();
        this.picker.show();
        this.element.focus();
      };
      el.addEventListener("pointerdown", open);
      el.addEventListener("focus", () => {
        this.picker.show();
      });
      const field = el.closest(".booking-control-field");
      if (field instanceof HTMLElement) {
        field.addEventListener("pointerdown", (event) => {
          if (event.target instanceof HTMLLabelElement) {
            open(event);
          }
        });
      }
      el.addEventListener("change", () => {
        if (el.value.trim() === "") {
          ctx.handleRangeClear();
        }
      });
    }
    reset() {
      this.element.value = "";
    }
  };
  var SquareFootSelect = class {
    constructor(ctx) {
      this.ctx = ctx;
      __publicField(this, "element");
      const element = document.querySelector("#square-footage");
      if (!(element instanceof HTMLSelectElement)) {
        throw new Error(`square foot select not HTMLSelectElement}`);
      }
      this.element = element;
      this.element.addEventListener("change", () => {
        const range = this.element.value;
        const ranges = range.split("-");
        let maximum = Infinity;
        const minimum = Number(ranges[0]);
        if (ranges[1] !== void 0) {
          maximum = Number(ranges[1]);
        }
        this.ctx.handleSpaceChange(minimum, maximum);
      });
    }
    reset() {
      this.element.selectedIndex = 0;
    }
  };
  var ResetFiltersButton = class {
    constructor(dateRange, squareFootSelect, ctx) {
      this.dateRange = dateRange;
      this.squareFootSelect = squareFootSelect;
      this.ctx = ctx;
      __publicField(this, "element");
      let element = document.querySelector("#reset-filters");
      if (!(element instanceof HTMLButtonElement)) {
        const controls = document.querySelector("#booking-controls");
        if (!(controls instanceof HTMLElement)) {
          throw new Error("Booking controls not HTMLElement");
        }
        const action = document.createElement("div");
        action.className = "booking-control booking-control-action";
        element = document.createElement("button");
        element.id = "reset-filters";
        element.type = "button";
        element.setAttribute("aria-label", "Reset filters");
        element.title = "Reset filters";
        const icon = document.createElement("span");
        icon.className = "reset-filters-icon";
        icon.setAttribute("aria-hidden", "true");
        element.appendChild(icon);
        action.appendChild(element);
        controls.appendChild(action);
      }
      this.element = element;
      this.element.addEventListener("click", () => {
        this.dateRange.reset();
        this.squareFootSelect.reset();
        this.ctx.handleResetFilters();
      });
    }
    setVisible(visible) {
      this.element.classList.toggle("reset-filters-visible", visible);
    }
  };
  var ParsedSheet = class {
    constructor(sheet) {
      __publicField(this, "units", /* @__PURE__ */ new Map());
      for (const row of sheet.table.rows) {
        const unit = row.c[0].v;
        const format = "MM/DD/YYYY";
        const startDate = (0, import_moment.default)(row.c[1].f, format);
        const endDate = (0, import_moment.default)(row.c[2].f, format);
        let bookingData = this.units.get(unit);
        if (bookingData === void 0) {
          bookingData = {
            bookings: [],
            isAvailable: true
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
    updateAvailable(startDate, endDate) {
      for (const [_unit, bookingData] of this.units) {
        let isAvailable = true;
        for (const booking of bookingData.bookings) {
          if (booking.startDate.isSameOrBefore(endDate) && booking.endDate.isSameOrAfter(startDate)) {
            isAvailable = false;
            break;
          }
        }
        bookingData.isAvailable = isAvailable;
      }
    }
  };
  var Ctx = class {
    constructor(spz, svgContainer, sheetData) {
      this.spz = spz;
      this.svgContainer = svgContainer;
      __publicField(this, "units");
      __publicField(this, "parsedSheet");
      __publicField(this, "form", new Form());
      __publicField(this, "spaces", new Spaces());
      __publicField(this, "spaceCard", new SpaceCard(this));
      __publicField(this, "unitLabels");
      __publicField(this, "resetFiltersButton");
      __publicField(this, "modal", new Modal());
      __publicField(this, "bookingToast", new BookingToast());
      __publicField(this, "enquiryGeneralForm", new EnquiryGeneralForm());
      __publicField(this, "hasDateFilter", false);
      __publicField(this, "hasInvalidPastDateSelection", false);
      __publicField(this, "minimumSpace", 0);
      __publicField(this, "maximumSpace", Infinity);
      __publicField(this, "activeDateRange", null);
      this.parsedSheet = new ParsedSheet(sheetData);
      const labelledPaths = svgContainer.querySelectorAll("path");
      this.units = new Units(this, labelledPaths);
      this.unitLabels = new UnitLabels(svgContainer, this.units.units);
      const dateRange = new DateRange(this);
      const squareFootSelect = new SquareFootSelect(this);
      this.resetFiltersButton = new ResetFiltersButton(dateRange, squareFootSelect, this);
      this.spaceCard.hide();
      this.unitLabels.syncState();
      this.syncFilterControls();
    }
    handleScreenTap(target, clientX, clientY) {
      const tappedUnit = this.getUnitFromEventTarget(target) ?? this.getUnitFromScreenPoint(clientX, clientY);
      if (tappedUnit !== null) {
        tappedUnit.handleTap(clientX, clientY);
      }
    }
    handleUnitPointerDown(unit) {
      let wasSelected = false;
      for (const u of this.units.units) {
        const selected = u.isAvailable && u === unit && !u.isSelected;
        u.select(selected);
        if (selected) {
          this.form.updateSpace(u);
          const space = this.spaces.spaces.get(u.title);
          if (space === void 0) {
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
    handleUnitPointerOver(unit) {
      for (const u of this.units.units) {
        const highlighted = u === unit;
        if (u.isAvailable) {
          u.highlight(highlighted);
        }
      }
    }
    handleUnitPointerLeave(unit) {
      unit.highlight(false);
    }
    handleRangePick(startDate, endDate) {
      this.hasDateFilter = true;
      this.activeDateRange = { startDate, endDate };
      const today = (0, import_moment.default)().startOf("day");
      const hasInvalidPastDateSelection = startDate.clone().startOf("day").isBefore(today);
      if (hasInvalidPastDateSelection && !this.hasInvalidPastDateSelection) {
        this.bookingToast.show("Historical dates cannot be booked.");
      }
      this.hasInvalidPastDateSelection = hasInvalidPastDateSelection;
      this.parsedSheet.updateAvailable(startDate, endDate);
      this.form.updateDates(startDate, endDate);
      this.update();
    }
    handleRangeClear() {
      this.hasDateFilter = false;
      this.hasInvalidPastDateSelection = false;
      this.activeDateRange = null;
      this.parsedSheet.resetAvailable();
      this.update();
    }
    update() {
      let hasSelectedAvailableUnit = false;
      for (const u of this.units.units) {
        const parsedUnit = this.parsedSheet.units.get(u.title);
        const isAvailable = !this.hasInvalidPastDateSelection && (parsedUnit === void 0 || parsedUnit.isAvailable);
        const space = this.spaces.spaces.get(u.title);
        const isInSpace = space === void 0 || space.squareFootage >= this.minimumSpace && space.squareFootage < this.maximumSpace;
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
    handleSpaceChange(minimum, maximum) {
      this.minimumSpace = minimum;
      this.maximumSpace = maximum;
      this.update();
    }
    handleResetFilters() {
      this.hasDateFilter = false;
      this.hasInvalidPastDateSelection = false;
      this.minimumSpace = 0;
      this.maximumSpace = Infinity;
      this.activeDateRange = null;
      this.parsedSheet.resetAvailable();
      this.update();
    }
    applySheetData(sheetData) {
      this.parsedSheet = new ParsedSheet(sheetData);
      if (this.activeDateRange !== null) {
        this.parsedSheet.updateAvailable(
          this.activeDateRange.startDate,
          this.activeDateRange.endDate
        );
      }
      this.update();
    }
    showAvailabilityLoadError() {
      this.bookingToast.show("Live availability could not be loaded.");
    }
    scheduleLabelUpdate() {
      this.unitLabels.scheduleUpdate();
    }
    syncFilterControls() {
      this.resetFiltersButton.setVisible(this.hasActiveFilters());
    }
    hasActiveFilters() {
      return this.hasDateFilter || this.minimumSpace !== 0 || this.maximumSpace !== Infinity;
    }
    getUnitFromScreenPoint(clientX, clientY) {
      const directHitCandidates = typeof document.elementsFromPoint === "function" ? document.elementsFromPoint(clientX, clientY) : [document.elementFromPoint(clientX, clientY)].filter((element) => element !== null);
      for (const candidate of directHitCandidates) {
        if (!(candidate instanceof SVGPathElement)) {
          continue;
        }
        if (candidate.dataset.bookingUnit !== "true") {
          continue;
        }
        const matchedUnit = this.units.units.find((unit) => unit.path === candidate);
        if (matchedUnit !== void 0) {
          return matchedUnit;
        }
      }
      const testPoint = this.svgContainer.createSVGPoint();
      for (const unit of this.units.units) {
        const pathRect = unit.path.getBoundingClientRect();
        if (clientX < pathRect.left || clientX > pathRect.right || clientY < pathRect.top || clientY > pathRect.bottom || pathRect.width === 0 || pathRect.height === 0) {
          continue;
        }
        const pathBBox = unit.path.getBBox();
        const localX = pathBBox.x + (clientX - pathRect.left) / pathRect.width * pathBBox.width;
        const localY = pathBBox.y + (clientY - pathRect.top) / pathRect.height * pathBBox.height;
        testPoint.x = localX;
        testPoint.y = localY;
        if (unit.path.isPointInFill(testPoint)) {
          return unit;
        }
      }
      return null;
    }
    getUnitFromEventTarget(target) {
      if (!(target instanceof Node)) {
        return null;
      }
      let current = target;
      while (current !== null) {
        if (current instanceof SVGPathElement && current.dataset.bookingUnit === "true") {
          return this.units.units.find((unit) => unit.path === current) ?? null;
        }
        current = current.parentNode;
      }
      return null;
    }
  };
  var fetchSheetData = async () => {
    const url = `https://docs.google.com/spreadsheets/d/${BOOKING_SHEET_ID}/gviz/tq?tqx=out:json`;
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Booking sheet request failed with status ${res.status}`);
    }
    const text = await res.text();
    return JSON.parse(text.substring(47).slice(0, -2));
  };
  var main = () => {
    const svgContainer = document.querySelector("#svg");
    if (svgContainer === null) throw new Error("No SVG container");
    svgContainer.innerHTML = map_layer_compressed_default;
    const svg = svgContainer.firstChild;
    if (!(svg instanceof SVGSVGElement)) {
      throw new Error("Not SVG");
    }
    let ctx = null;
    const isTouchDevice = usesManagedTouchGestures();
    const spz = (0, import_svg_pan_zoom.default)(svg, {
      zoomEnabled: true,
      controlIconsEnabled: false,
      fit: true,
      center: true,
      mouseWheelZoomEnabled: false,
      dblClickZoomEnabled: !isTouchDevice,
      panEnabled: !isTouchDevice,
      customEventsHandler: isTouchDevice ? {
        haltEventListeners: [
          "touchstart",
          "touchend",
          "touchmove",
          "touchleave",
          "touchcancel",
          "mousedown",
          "mouseup",
          "mousemove",
          "mouseleave",
          "pointerdown",
          "pointerup",
          "pointermove",
          "pointerleave",
          "pointercancel"
        ],
        init: () => {
        },
        destroy: () => {
        }
      } : void 0,
      onPan: () => {
        ctx?.scheduleLabelUpdate();
      },
      onZoom: () => {
        ctx?.scheduleLabelUpdate();
      }
    });
    new ZoomControls(spz);
    const availabilityStatus = new AvailabilityStatus();
    availabilityStatus.showLoading();
    ctx = new Ctx(spz, svg, EMPTY_SHEET_DATA);
    new EmbeddedMapGestures(spz, svg, (target, clientX, clientY) => {
      ctx?.handleScreenTap(target, clientX, clientY);
    });
    void fetchSheetData().then((sheetData) => {
      ctx?.applySheetData(sheetData);
      availabilityStatus.hide();
    }).catch((error) => {
      console.warn("Failed to load booking availability", error);
      availabilityStatus.showWarning();
      ctx?.showAvailabilityLoadError();
    });
  };
  document.addEventListener("DOMContentLoaded", (_event) => {
    syncResponsiveLayoutClasses();
    window.addEventListener("resize", syncResponsiveLayoutClasses);
    window.visualViewport?.addEventListener("resize", syncResponsiveLayoutClasses);
    main();
  });
})();
