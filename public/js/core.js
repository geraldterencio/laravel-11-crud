/*!
 * CoreUI v4.1.0 (https://coreui.io)
 * Copyright 2021 The CoreUI Team (https://github.com/orgs/coreui/people)
 * Licensed under MIT (https://coreui.io)
 */
!(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = e())
        : "function" == typeof define && define.amd
        ? define(e)
        : ((t =
              "undefined" != typeof globalThis
                  ? globalThis
                  : t || self).coreui = e());
})(this, function () {
    "use strict";
    const t = "transitionend",
        e = (t) => {
            let e = t.getAttribute("data-coreui-target");
            if (!e || "#" === e) {
                let i = t.getAttribute("href");
                if (!i || (!i.includes("#") && !i.startsWith("."))) return null;
                i.includes("#") &&
                    !i.startsWith("#") &&
                    (i = `#${i.split("#")[1]}`),
                    (e = i && "#" !== i ? i.trim() : null);
            }
            return e;
        },
        i = (t) => {
            const i = e(t);
            return i && document.querySelector(i) ? i : null;
        },
        n = (t) => {
            const i = e(t);
            return i ? document.querySelector(i) : null;
        },
        s = (e) => {
            e.dispatchEvent(new Event(t));
        },
        o = (t) =>
            !(!t || "object" != typeof t) &&
            (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
        r = (t) =>
            o(t)
                ? t.jquery
                    ? t[0]
                    : t
                : "string" == typeof t && t.length > 0
                ? document.querySelector(t)
                : null,
        a = (t, e, i) => {
            Object.keys(i).forEach((n) => {
                const s = i[n],
                    r = e[n],
                    a =
                        r && o(r)
                            ? "element"
                            : null == (l = r)
                            ? `${l}`
                            : {}.toString
                                  .call(l)
                                  .match(/\s([a-z]+)/i)[1]
                                  .toLowerCase();
                var l;
                if (!new RegExp(s).test(a))
                    throw new TypeError(
                        `${t.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${s}".`
                    );
            });
        },
        l = (t) =>
            !(!o(t) || 0 === t.getClientRects().length) &&
            "visible" === getComputedStyle(t).getPropertyValue("visibility"),
        c = (t) =>
            !t ||
            t.nodeType !== Node.ELEMENT_NODE ||
            !!t.classList.contains("disabled") ||
            (void 0 !== t.disabled
                ? t.disabled
                : t.hasAttribute("disabled") &&
                  "false" !== t.getAttribute("disabled")),
        h = (t) => {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof t.getRootNode) {
                const e = t.getRootNode();
                return e instanceof ShadowRoot ? e : null;
            }
            return t instanceof ShadowRoot
                ? t
                : t.parentNode
                ? h(t.parentNode)
                : null;
        },
        d = () => {},
        u = (t) => {
            t.offsetHeight;
        },
        f = () => {
            const { jQuery: t } = window;
            return t && !document.body.hasAttribute("data-coreui-no-jquery")
                ? t
                : null;
        },
        p = [],
        g = () => "rtl" === document.documentElement.dir,
        m = (t) => {
            var e;
            (e = () => {
                const e = f();
                if (e) {
                    const i = t.NAME,
                        n = e.fn[i];
                    (e.fn[i] = t.jQueryInterface),
                        (e.fn[i].Constructor = t),
                        (e.fn[i].noConflict = () => (
                            (e.fn[i] = n), t.jQueryInterface
                        ));
                }
            }),
                "loading" === document.readyState
                    ? (p.length ||
                          document.addEventListener("DOMContentLoaded", () => {
                              p.forEach((t) => t());
                          }),
                      p.push(e))
                    : e();
        },
        _ = (t) => {
            "function" == typeof t && t();
        },
        v = (e, i, n = !0) => {
            if (!n) return void _(e);
            const o =
                ((t) => {
                    if (!t) return 0;
                    let { transitionDuration: e, transitionDelay: i } =
                        window.getComputedStyle(t);
                    const n = Number.parseFloat(e),
                        s = Number.parseFloat(i);
                    return n || s
                        ? ((e = e.split(",")[0]),
                          (i = i.split(",")[0]),
                          1e3 * (Number.parseFloat(e) + Number.parseFloat(i)))
                        : 0;
                })(i) + 5;
            let r = !1;
            const a = ({ target: n }) => {
                n === i && ((r = !0), i.removeEventListener(t, a), _(e));
            };
            i.addEventListener(t, a),
                setTimeout(() => {
                    r || s(i);
                }, o);
        },
        b = (t, e, i, n) => {
            let s = t.indexOf(e);
            if (-1 === s) return t[!i && n ? t.length - 1 : 0];
            const o = t.length;
            return (
                (s += i ? 1 : -1),
                n && (s = (s + o) % o),
                t[Math.max(0, Math.min(s, o - 1))]
            );
        },
        y = /[^.]*(?=\..*)\.|.*/,
        w = /\..*/,
        E = /::\d+$/,
        A = {};
    let C = 1;
    const O = { mouseenter: "mouseover", mouseleave: "mouseout" },
        T = /^(mouseenter|mouseleave)/i,
        L = new Set([
            "click",
            "dblclick",
            "mouseup",
            "mousedown",
            "contextmenu",
            "mousewheel",
            "DOMMouseScroll",
            "mouseover",
            "mouseout",
            "mousemove",
            "selectstart",
            "selectend",
            "keydown",
            "keypress",
            "keyup",
            "orientationchange",
            "touchstart",
            "touchmove",
            "touchend",
            "touchcancel",
            "pointerdown",
            "pointermove",
            "pointerup",
            "pointerleave",
            "pointercancel",
            "gesturestart",
            "gesturechange",
            "gestureend",
            "focus",
            "blur",
            "change",
            "reset",
            "select",
            "submit",
            "focusin",
            "focusout",
            "load",
            "unload",
            "beforeunload",
            "resize",
            "move",
            "DOMContentLoaded",
            "readystatechange",
            "error",
            "abort",
            "scroll",
        ]);
    function k(t, e) {
        return (e && `${e}::${C++}`) || t.uidEvent || C++;
    }
    function x(t) {
        const e = k(t);
        return (t.uidEvent = e), (A[e] = A[e] || {}), A[e];
    }
    function D(t, e, i = null) {
        const n = Object.keys(t);
        for (let s = 0, o = n.length; s < o; s++) {
            const o = t[n[s]];
            if (o.originalHandler === e && o.delegationSelector === i) return o;
        }
        return null;
    }
    function N(t, e, i) {
        const n = "string" == typeof e,
            s = n ? i : e;
        let o = $(t);
        return L.has(o) || (o = t), [n, s, o];
    }
    function S(t, e, i, n, s) {
        if ("string" != typeof e || !t) return;
        if ((i || ((i = n), (n = null)), T.test(e))) {
            const t = (t) =>
                function (e) {
                    if (
                        !e.relatedTarget ||
                        (e.relatedTarget !== e.delegateTarget &&
                            !e.delegateTarget.contains(e.relatedTarget))
                    )
                        return t.call(this, e);
                };
            n ? (n = t(n)) : (i = t(i));
        }
        const [o, r, a] = N(e, i, n),
            l = x(t),
            c = l[a] || (l[a] = {}),
            h = D(c, r, o ? i : null);
        if (h) return void (h.oneOff = h.oneOff && s);
        const d = k(r, e.replace(y, "")),
            u = o
                ? (function (t, e, i) {
                      return function n(s) {
                          const o = t.querySelectorAll(e);
                          for (
                              let { target: r } = s;
                              r && r !== this;
                              r = r.parentNode
                          )
                              for (let a = o.length; a--; )
                                  if (o[a] === r)
                                      return (
                                          (s.delegateTarget = r),
                                          n.oneOff && P.off(t, s.type, e, i),
                                          i.apply(r, [s])
                                      );
                          return null;
                      };
                  })(t, i, n)
                : (function (t, e) {
                      return function i(n) {
                          return (
                              (n.delegateTarget = t),
                              i.oneOff && P.off(t, n.type, e),
                              e.apply(t, [n])
                          );
                      };
                  })(t, i);
        (u.delegationSelector = o ? i : null),
            (u.originalHandler = r),
            (u.oneOff = s),
            (u.uidEvent = d),
            (c[d] = u),
            t.addEventListener(a, u, o);
    }
    function I(t, e, i, n, s) {
        const o = D(e[i], n, s);
        o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
    }
    function $(t) {
        return (t = t.replace(w, "")), O[t] || t;
    }
    const P = {
            on(t, e, i, n) {
                S(t, e, i, n, !1);
            },
            one(t, e, i, n) {
                S(t, e, i, n, !0);
            },
            off(t, e, i, n) {
                if ("string" != typeof e || !t) return;
                const [s, o, r] = N(e, i, n),
                    a = r !== e,
                    l = x(t),
                    c = e.startsWith(".");
                if (void 0 !== o) {
                    if (!l || !l[r]) return;
                    return void I(t, l, r, o, s ? i : null);
                }
                c &&
                    Object.keys(l).forEach((i) => {
                        !(function (t, e, i, n) {
                            const s = e[i] || {};
                            Object.keys(s).forEach((o) => {
                                if (o.includes(n)) {
                                    const n = s[o];
                                    I(
                                        t,
                                        e,
                                        i,
                                        n.originalHandler,
                                        n.delegationSelector
                                    );
                                }
                            });
                        })(t, l, i, e.slice(1));
                    });
                const h = l[r] || {};
                Object.keys(h).forEach((i) => {
                    const n = i.replace(E, "");
                    if (!a || e.includes(n)) {
                        const e = h[i];
                        I(t, l, r, e.originalHandler, e.delegationSelector);
                    }
                });
            },
            trigger(t, e, i) {
                if ("string" != typeof e || !t) return null;
                const n = f(),
                    s = $(e),
                    o = e !== s,
                    r = L.has(s);
                let a,
                    l = !0,
                    c = !0,
                    h = !1,
                    d = null;
                return (
                    o &&
                        n &&
                        ((a = n.Event(e, i)),
                        n(t).trigger(a),
                        (l = !a.isPropagationStopped()),
                        (c = !a.isImmediatePropagationStopped()),
                        (h = a.isDefaultPrevented())),
                    r
                        ? ((d = document.createEvent("HTMLEvents")),
                          d.initEvent(s, l, !0))
                        : (d = new CustomEvent(e, {
                              bubbles: l,
                              cancelable: !0,
                          })),
                    void 0 !== i &&
                        Object.keys(i).forEach((t) => {
                            Object.defineProperty(d, t, { get: () => i[t] });
                        }),
                    h && d.preventDefault(),
                    c && t.dispatchEvent(d),
                    d.defaultPrevented && void 0 !== a && a.preventDefault(),
                    d
                );
            },
        },
        M = new Map(),
        j = {
            set(t, e, i) {
                M.has(t) || M.set(t, new Map());
                const n = M.get(t);
                n.has(e) || 0 === n.size
                    ? n.set(e, i)
                    : console.error(
                          `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                              Array.from(n.keys())[0]
                          }.`
                      );
            },
            get: (t, e) => (M.has(t) && M.get(t).get(e)) || null,
            remove(t, e) {
                if (!M.has(t)) return;
                const i = M.get(t);
                i.delete(e), 0 === i.size && M.delete(t);
            },
        };
    class H {
        constructor(t) {
            (t = r(t)) &&
                ((this._element = t),
                j.set(this._element, this.constructor.DATA_KEY, this));
        }
        dispose() {
            j.remove(this._element, this.constructor.DATA_KEY),
                P.off(this._element, this.constructor.EVENT_KEY),
                Object.getOwnPropertyNames(this).forEach((t) => {
                    this[t] = null;
                });
        }
        _queueCallback(t, e, i = !0) {
            v(t, e, i);
        }
        static getInstance(t) {
            return j.get(r(t), this.DATA_KEY);
        }
        static getOrCreateInstance(t, e = {}) {
            return (
                this.getInstance(t) ||
                new this(t, "object" == typeof e ? e : null)
            );
        }
        static get VERSION() {
            return "4.1.0";
        }
        static get NAME() {
            throw new Error(
                'You have to implement the static method "NAME", for each component!'
            );
        }
        static get DATA_KEY() {
            return `coreui.${this.NAME}`;
        }
        static get EVENT_KEY() {
            return `.${this.DATA_KEY}`;
        }
    }
    const B = (t, e = "hide") => {
        const i = `click.dismiss${t.EVENT_KEY}`,
            s = t.NAME;
        P.on(document, i, `[data-coreui-dismiss="${s}"]`, function (i) {
            if (
                (["A", "AREA"].includes(this.tagName) && i.preventDefault(),
                c(this))
            )
                return;
            const o = n(this) || this.closest(`.${s}`);
            t.getOrCreateInstance(o)[e]();
        });
    };
    class R extends H {
        static get NAME() {
            return "alert";
        }
        close() {
            if (P.trigger(this._element, "close.coreui.alert").defaultPrevented)
                return;
            this._element.classList.remove("show");
            const t = this._element.classList.contains("fade");
            this._queueCallback(() => this._destroyElement(), this._element, t);
        }
        _destroyElement() {
            this._element.remove(),
                P.trigger(this._element, "closed.coreui.alert"),
                this.dispose();
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = R.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (
                        void 0 === e[t] ||
                        t.startsWith("_") ||
                        "constructor" === t
                    )
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    B(R, "close"), m(R);
    const W = '[data-coreui-toggle="button"]';
    class q extends H {
        static get NAME() {
            return "button";
        }
        toggle() {
            this._element.setAttribute(
                "aria-pressed",
                this._element.classList.toggle("active")
            );
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = q.getOrCreateInstance(this);
                "toggle" === t && e[t]();
            });
        }
    }
    function z(t) {
        return (
            "true" === t ||
            ("false" !== t &&
                (t === Number(t).toString()
                    ? Number(t)
                    : "" === t || "null" === t
                    ? null
                    : t))
        );
    }
    function F(t) {
        return t.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
    }
    P.on(document, "click.coreui.button.data-api", W, (t) => {
        t.preventDefault();
        const e = t.target.closest(W);
        q.getOrCreateInstance(e).toggle();
    }),
        m(q);
    const U = {
            setDataAttribute(t, e, i) {
                t.setAttribute(`data-coreui-${F(e)}`, i);
            },
            removeDataAttribute(t, e) {
                t.removeAttribute(`data-coreui-${F(e)}`);
            },
            getDataAttributes(t) {
                if (!t) return {};
                const e = {};
                return (
                    Object.keys(t.dataset)
                        .filter((t) => t.startsWith("coreui"))
                        .forEach((i) => {
                            let n = i.replace(/^coreui/, "");
                            (n =
                                n.charAt(0).toLowerCase() +
                                n.slice(1, n.length)),
                                (e[n] = z(t.dataset[i]));
                        }),
                    e
                );
            },
            getDataAttribute: (t, e) =>
                z(t.getAttribute(`data-coreui-${F(e)}`)),
            offset(t) {
                const e = t.getBoundingClientRect();
                return {
                    top: e.top + window.pageYOffset,
                    left: e.left + window.pageXOffset,
                };
            },
            position: (t) => ({ top: t.offsetTop, left: t.offsetLeft }),
        },
        V = {
            find: (t, e = document.documentElement) =>
                [].concat(...Element.prototype.querySelectorAll.call(e, t)),
            findOne: (t, e = document.documentElement) =>
                Element.prototype.querySelector.call(e, t),
            children: (t, e) =>
                [].concat(...t.children).filter((t) => t.matches(e)),
            parents(t, e) {
                const i = [];
                let n = t.parentNode;
                for (
                    ;
                    n && n.nodeType === Node.ELEMENT_NODE && 3 !== n.nodeType;

                )
                    n.matches(e) && i.push(n), (n = n.parentNode);
                return i;
            },
            prev(t, e) {
                let i = t.previousElementSibling;
                for (; i; ) {
                    if (i.matches(e)) return [i];
                    i = i.previousElementSibling;
                }
                return [];
            },
            next(t, e) {
                let i = t.nextElementSibling;
                for (; i; ) {
                    if (i.matches(e)) return [i];
                    i = i.nextElementSibling;
                }
                return [];
            },
            focusableChildren(t) {
                const e = [
                    "a",
                    "button",
                    "input",
                    "textarea",
                    "select",
                    "details",
                    "[tabindex]",
                    '[contenteditable="true"]',
                ]
                    .map((t) => `${t}:not([tabindex^="-"])`)
                    .join(", ");
                return this.find(e, t).filter((t) => !c(t) && l(t));
            },
        },
        K = "carousel",
        Y = ".coreui.carousel",
        X = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0,
        },
        Q = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean",
        },
        G = "next",
        Z = "prev",
        J = "left",
        tt = "right",
        et = { ArrowLeft: tt, ArrowRight: J },
        it = `slide${Y}`,
        nt = `slid${Y}`,
        st = `keydown${Y}`,
        ot = `mouseenter${Y}`,
        rt = `mouseleave${Y}`,
        at = `touchstart${Y}`,
        lt = `touchmove${Y}`,
        ct = `touchend${Y}`,
        ht = `pointerdown${Y}`,
        dt = `pointerup${Y}`,
        ut = `dragstart${Y}`,
        ft = `load${Y}.data-api`,
        pt = `click${Y}.data-api`,
        gt = "active",
        mt = ".active.carousel-item";
    class _t extends H {
        constructor(t, e) {
            super(t),
                (this._items = null),
                (this._interval = null),
                (this._activeElement = null),
                (this._isPaused = !1),
                (this._isSliding = !1),
                (this.touchTimeout = null),
                (this.touchStartX = 0),
                (this.touchDeltaX = 0),
                (this._config = this._getConfig(e)),
                (this._indicatorsElement = V.findOne(
                    ".carousel-indicators",
                    this._element
                )),
                (this._touchSupported =
                    "ontouchstart" in document.documentElement ||
                    navigator.maxTouchPoints > 0),
                (this._pointerEvent = Boolean(window.PointerEvent)),
                this._addEventListeners();
        }
        static get Default() {
            return X;
        }
        static get NAME() {
            return K;
        }
        next() {
            this._slide(G);
        }
        nextWhenVisible() {
            !document.hidden && l(this._element) && this.next();
        }
        prev() {
            this._slide(Z);
        }
        pause(t) {
            t || (this._isPaused = !0),
                V.findOne(
                    ".carousel-item-next, .carousel-item-prev",
                    this._element
                ) && (s(this._element), this.cycle(!0)),
                clearInterval(this._interval),
                (this._interval = null);
        }
        cycle(t) {
            t || (this._isPaused = !1),
                this._interval &&
                    (clearInterval(this._interval), (this._interval = null)),
                this._config &&
                    this._config.interval &&
                    !this._isPaused &&
                    (this._updateInterval(),
                    (this._interval = setInterval(
                        (document.visibilityState
                            ? this.nextWhenVisible
                            : this.next
                        ).bind(this),
                        this._config.interval
                    )));
        }
        to(t) {
            this._activeElement = V.findOne(mt, this._element);
            const e = this._getItemIndex(this._activeElement);
            if (t > this._items.length - 1 || t < 0) return;
            if (this._isSliding)
                return void P.one(this._element, nt, () => this.to(t));
            if (e === t) return this.pause(), void this.cycle();
            const i = t > e ? G : Z;
            this._slide(i, this._items[t]);
        }
        _getConfig(t) {
            return (
                (t = {
                    ...X,
                    ...U.getDataAttributes(this._element),
                    ...("object" == typeof t ? t : {}),
                }),
                a(K, t, Q),
                t
            );
        }
        _handleSwipe() {
            const t = Math.abs(this.touchDeltaX);
            if (t <= 40) return;
            const e = t / this.touchDeltaX;
            (this.touchDeltaX = 0), e && this._slide(e > 0 ? tt : J);
        }
        _addEventListeners() {
            this._config.keyboard &&
                P.on(this._element, st, (t) => this._keydown(t)),
                "hover" === this._config.pause &&
                    (P.on(this._element, ot, (t) => this.pause(t)),
                    P.on(this._element, rt, (t) => this.cycle(t))),
                this._config.touch &&
                    this._touchSupported &&
                    this._addTouchEventListeners();
        }
        _addTouchEventListeners() {
            const t = (t) =>
                    this._pointerEvent &&
                    ("pen" === t.pointerType || "touch" === t.pointerType),
                e = (e) => {
                    t(e)
                        ? (this.touchStartX = e.clientX)
                        : this._pointerEvent ||
                          (this.touchStartX = e.touches[0].clientX);
                },
                i = (t) => {
                    this.touchDeltaX =
                        t.touches && t.touches.length > 1
                            ? 0
                            : t.touches[0].clientX - this.touchStartX;
                },
                n = (e) => {
                    t(e) && (this.touchDeltaX = e.clientX - this.touchStartX),
                        this._handleSwipe(),
                        "hover" === this._config.pause &&
                            (this.pause(),
                            this.touchTimeout &&
                                clearTimeout(this.touchTimeout),
                            (this.touchTimeout = setTimeout(
                                (t) => this.cycle(t),
                                500 + this._config.interval
                            )));
                };
            V.find(".carousel-item img", this._element).forEach((t) => {
                P.on(t, ut, (t) => t.preventDefault());
            }),
                this._pointerEvent
                    ? (P.on(this._element, ht, (t) => e(t)),
                      P.on(this._element, dt, (t) => n(t)),
                      this._element.classList.add("pointer-event"))
                    : (P.on(this._element, at, (t) => e(t)),
                      P.on(this._element, lt, (t) => i(t)),
                      P.on(this._element, ct, (t) => n(t)));
        }
        _keydown(t) {
            if (/input|textarea/i.test(t.target.tagName)) return;
            const e = et[t.key];
            e && (t.preventDefault(), this._slide(e));
        }
        _getItemIndex(t) {
            return (
                (this._items =
                    t && t.parentNode
                        ? V.find(".carousel-item", t.parentNode)
                        : []),
                this._items.indexOf(t)
            );
        }
        _getItemByOrder(t, e) {
            const i = t === G;
            return b(this._items, e, i, this._config.wrap);
        }
        _triggerSlideEvent(t, e) {
            const i = this._getItemIndex(t),
                n = this._getItemIndex(V.findOne(mt, this._element));
            return P.trigger(this._element, it, {
                relatedTarget: t,
                direction: e,
                from: n,
                to: i,
            });
        }
        _setActiveIndicatorElement(t) {
            if (this._indicatorsElement) {
                const e = V.findOne(".active", this._indicatorsElement);
                e.classList.remove(gt), e.removeAttribute("aria-current");
                const i = V.find(
                    "[data-coreui-target]",
                    this._indicatorsElement
                );
                for (let e = 0; e < i.length; e++)
                    if (
                        Number.parseInt(
                            i[e].getAttribute("data-coreui-slide-to"),
                            10
                        ) === this._getItemIndex(t)
                    ) {
                        i[e].classList.add(gt),
                            i[e].setAttribute("aria-current", "true");
                        break;
                    }
            }
        }
        _updateInterval() {
            const t = this._activeElement || V.findOne(mt, this._element);
            if (!t) return;
            const e = Number.parseInt(
                t.getAttribute("data-coreui-interval"),
                10
            );
            e
                ? ((this._config.defaultInterval =
                      this._config.defaultInterval || this._config.interval),
                  (this._config.interval = e))
                : (this._config.interval =
                      this._config.defaultInterval || this._config.interval);
        }
        _slide(t, e) {
            const i = this._directionToOrder(t),
                n = V.findOne(mt, this._element),
                s = this._getItemIndex(n),
                o = e || this._getItemByOrder(i, n),
                r = this._getItemIndex(o),
                a = Boolean(this._interval),
                l = i === G,
                c = l ? "carousel-item-start" : "carousel-item-end",
                h = l ? "carousel-item-next" : "carousel-item-prev",
                d = this._orderToDirection(i);
            if (o && o.classList.contains(gt))
                return void (this._isSliding = !1);
            if (this._isSliding) return;
            if (this._triggerSlideEvent(o, d).defaultPrevented) return;
            if (!n || !o) return;
            (this._isSliding = !0),
                a && this.pause(),
                this._setActiveIndicatorElement(o),
                (this._activeElement = o);
            const f = () => {
                P.trigger(this._element, nt, {
                    relatedTarget: o,
                    direction: d,
                    from: s,
                    to: r,
                });
            };
            if (this._element.classList.contains("slide")) {
                o.classList.add(h),
                    u(o),
                    n.classList.add(c),
                    o.classList.add(c);
                const t = () => {
                    o.classList.remove(c, h),
                        o.classList.add(gt),
                        n.classList.remove(gt, h, c),
                        (this._isSliding = !1),
                        setTimeout(f, 0);
                };
                this._queueCallback(t, n, !0);
            } else n.classList.remove(gt), o.classList.add(gt), (this._isSliding = !1), f();
            a && this.cycle();
        }
        _directionToOrder(t) {
            return [tt, J].includes(t)
                ? g()
                    ? t === J
                        ? Z
                        : G
                    : t === J
                    ? G
                    : Z
                : t;
        }
        _orderToDirection(t) {
            return [G, Z].includes(t)
                ? g()
                    ? t === Z
                        ? J
                        : tt
                    : t === Z
                    ? tt
                    : J
                : t;
        }
        static carouselInterface(t, e) {
            const i = _t.getOrCreateInstance(t, e);
            let { _config: n } = i;
            "object" == typeof e && (n = { ...n, ...e });
            const s = "string" == typeof e ? e : n.slide;
            if ("number" == typeof e) i.to(e);
            else if ("string" == typeof s) {
                if (void 0 === i[s])
                    throw new TypeError(`No method named "${s}"`);
                i[s]();
            } else n.interval && n.ride && (i.pause(), i.cycle());
        }
        static jQueryInterface(t) {
            return this.each(function () {
                _t.carouselInterface(this, t);
            });
        }
        static dataApiClickHandler(t) {
            const e = n(this);
            if (!e || !e.classList.contains("carousel")) return;
            const i = {
                    ...U.getDataAttributes(e),
                    ...U.getDataAttributes(this),
                },
                s = this.getAttribute("data-coreui-slide-to");
            s && (i.interval = !1),
                _t.carouselInterface(e, i),
                s && _t.getInstance(e).to(s),
                t.preventDefault();
        }
    }
    P.on(
        document,
        pt,
        "[data-coreui-slide], [data-coreui-slide-to]",
        _t.dataApiClickHandler
    ),
        P.on(window, ft, () => {
            const t = V.find('[data-coreui-ride="carousel"]');
            for (let e = 0, i = t.length; e < i; e++)
                _t.carouselInterface(t[e], _t.getInstance(t[e]));
        }),
        m(_t);
    const vt = "collapse",
        bt = "coreui.collapse",
        yt = `.${bt}`,
        wt = { toggle: !0, parent: null },
        Et = { toggle: "boolean", parent: "(null|element)" },
        At = `show${yt}`,
        Ct = `shown${yt}`,
        Ot = `hide${yt}`,
        Tt = `hidden${yt}`,
        Lt = `click${yt}.data-api`,
        kt = "show",
        xt = "collapse",
        Dt = "collapsing",
        Nt = "collapsed",
        St = ":scope .collapse .collapse",
        It = '[data-coreui-toggle="collapse"]';
    class $t extends H {
        constructor(t, e) {
            super(t),
                (this._isTransitioning = !1),
                (this._config = this._getConfig(e)),
                (this._triggerArray = []);
            const n = V.find(It);
            for (let t = 0, e = n.length; t < e; t++) {
                const e = n[t],
                    s = i(e),
                    o = V.find(s).filter((t) => t === this._element);
                null !== s &&
                    o.length &&
                    ((this._selector = s), this._triggerArray.push(e));
            }
            this._initializeChildren(),
                this._config.parent ||
                    this._addAriaAndCollapsedClass(
                        this._triggerArray,
                        this._isShown()
                    ),
                this._config.toggle && this.toggle();
        }
        static get Default() {
            return wt;
        }
        static get NAME() {
            return vt;
        }
        toggle() {
            this._isShown() ? this.hide() : this.show();
        }
        show() {
            if (this._isTransitioning || this._isShown()) return;
            let t,
                e = [];
            if (this._config.parent) {
                const t = V.find(St, this._config.parent);
                e = V.find(
                    ".collapse.show, .collapse.collapsing",
                    this._config.parent
                ).filter((e) => !t.includes(e));
            }
            const i = V.findOne(this._selector);
            if (e.length) {
                const n = e.find((t) => i !== t);
                if (
                    ((t = n ? $t.getInstance(n) : null),
                    t && t._isTransitioning)
                )
                    return;
            }
            if (P.trigger(this._element, At).defaultPrevented) return;
            e.forEach((e) => {
                i !== e && $t.getOrCreateInstance(e, { toggle: !1 }).hide(),
                    t || j.set(e, bt, null);
            });
            const n = this._getDimension();
            this._element.classList.remove(xt),
                this._element.classList.add(Dt),
                (this._element.style[n] = 0),
                this._addAriaAndCollapsedClass(this._triggerArray, !0),
                (this._isTransitioning = !0);
            const s = `scroll${n[0].toUpperCase() + n.slice(1)}`;
            this._queueCallback(
                () => {
                    (this._isTransitioning = !1),
                        this._element.classList.remove(Dt),
                        this._element.classList.add(xt, kt),
                        (this._element.style[n] = ""),
                        P.trigger(this._element, Ct);
                },
                this._element,
                !0
            ),
                (this._element.style[n] = `${this._element[s]}px`);
        }
        hide() {
            if (this._isTransitioning || !this._isShown()) return;
            if (P.trigger(this._element, Ot).defaultPrevented) return;
            const t = this._getDimension();
            (this._element.style[t] = `${
                this._element.getBoundingClientRect()[t]
            }px`),
                u(this._element),
                this._element.classList.add(Dt),
                this._element.classList.remove(xt, kt);
            const e = this._triggerArray.length;
            for (let t = 0; t < e; t++) {
                const e = this._triggerArray[t],
                    i = n(e);
                i &&
                    !this._isShown(i) &&
                    this._addAriaAndCollapsedClass([e], !1);
            }
            (this._isTransitioning = !0),
                (this._element.style[t] = ""),
                this._queueCallback(
                    () => {
                        (this._isTransitioning = !1),
                            this._element.classList.remove(Dt),
                            this._element.classList.add(xt),
                            P.trigger(this._element, Tt);
                    },
                    this._element,
                    !0
                );
        }
        _isShown(t = this._element) {
            return t.classList.contains(kt);
        }
        _getConfig(t) {
            return (
                ((t = {
                    ...wt,
                    ...U.getDataAttributes(this._element),
                    ...t,
                }).toggle = Boolean(t.toggle)),
                (t.parent = r(t.parent)),
                a(vt, t, Et),
                t
            );
        }
        _getDimension() {
            return this._element.classList.contains("collapse-horizontal")
                ? "width"
                : "height";
        }
        _initializeChildren() {
            if (!this._config.parent) return;
            const t = V.find(St, this._config.parent);
            V.find(It, this._config.parent)
                .filter((e) => !t.includes(e))
                .forEach((t) => {
                    const e = n(t);
                    e && this._addAriaAndCollapsedClass([t], this._isShown(e));
                });
        }
        _addAriaAndCollapsedClass(t, e) {
            t.length &&
                t.forEach((t) => {
                    e ? t.classList.remove(Nt) : t.classList.add(Nt),
                        t.setAttribute("aria-expanded", e);
                });
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = {};
                "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1);
                const i = $t.getOrCreateInstance(this, e);
                if ("string" == typeof t) {
                    if (void 0 === i[t])
                        throw new TypeError(`No method named "${t}"`);
                    i[t]();
                }
            });
        }
    }
    P.on(document, Lt, It, function (t) {
        ("A" === t.target.tagName ||
            (t.delegateTarget && "A" === t.delegateTarget.tagName)) &&
            t.preventDefault();
        const e = i(this);
        V.find(e).forEach((t) => {
            $t.getOrCreateInstance(t, { toggle: !1 }).toggle();
        });
    }),
        m($t);
    var Pt = "top",
        Mt = "bottom",
        jt = "right",
        Ht = "left",
        Bt = "auto",
        Rt = [Pt, Mt, jt, Ht],
        Wt = "start",
        qt = "end",
        zt = "clippingParents",
        Ft = "viewport",
        Ut = "popper",
        Vt = "reference",
        Kt = Rt.reduce(function (t, e) {
            return t.concat([e + "-" + Wt, e + "-" + qt]);
        }, []),
        Yt = [].concat(Rt, [Bt]).reduce(function (t, e) {
            return t.concat([e, e + "-" + Wt, e + "-" + qt]);
        }, []),
        Xt = "beforeRead",
        Qt = "read",
        Gt = "afterRead",
        Zt = "beforeMain",
        Jt = "main",
        te = "afterMain",
        ee = "beforeWrite",
        ie = "write",
        ne = "afterWrite",
        se = [Xt, Qt, Gt, Zt, Jt, te, ee, ie, ne];
    function oe(t) {
        return t ? (t.nodeName || "").toLowerCase() : null;
    }
    function re(t) {
        if (null == t) return window;
        if ("[object Window]" !== t.toString()) {
            var e = t.ownerDocument;
            return (e && e.defaultView) || window;
        }
        return t;
    }
    function ae(t) {
        return t instanceof re(t).Element || t instanceof Element;
    }
    function le(t) {
        return t instanceof re(t).HTMLElement || t instanceof HTMLElement;
    }
    function ce(t) {
        return (
            "undefined" != typeof ShadowRoot &&
            (t instanceof re(t).ShadowRoot || t instanceof ShadowRoot)
        );
    }
    const he = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function (t) {
            var e = t.state;
            Object.keys(e.elements).forEach(function (t) {
                var i = e.styles[t] || {},
                    n = e.attributes[t] || {},
                    s = e.elements[t];
                le(s) &&
                    oe(s) &&
                    (Object.assign(s.style, i),
                    Object.keys(n).forEach(function (t) {
                        var e = n[t];
                        !1 === e
                            ? s.removeAttribute(t)
                            : s.setAttribute(t, !0 === e ? "" : e);
                    }));
            });
        },
        effect: function (t) {
            var e = t.state,
                i = {
                    popper: {
                        position: e.options.strategy,
                        left: "0",
                        top: "0",
                        margin: "0",
                    },
                    arrow: { position: "absolute" },
                    reference: {},
                };
            return (
                Object.assign(e.elements.popper.style, i.popper),
                (e.styles = i),
                e.elements.arrow &&
                    Object.assign(e.elements.arrow.style, i.arrow),
                function () {
                    Object.keys(e.elements).forEach(function (t) {
                        var n = e.elements[t],
                            s = e.attributes[t] || {},
                            o = Object.keys(
                                e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]
                            ).reduce(function (t, e) {
                                return (t[e] = ""), t;
                            }, {});
                        le(n) &&
                            oe(n) &&
                            (Object.assign(n.style, o),
                            Object.keys(s).forEach(function (t) {
                                n.removeAttribute(t);
                            }));
                    });
                }
            );
        },
        requires: ["computeStyles"],
    };
    function de(t) {
        return t.split("-")[0];
    }
    var ue = Math.max,
        fe = Math.min,
        pe = Math.round;
    function ge(t, e) {
        void 0 === e && (e = !1);
        var i = t.getBoundingClientRect(),
            n = 1,
            s = 1;
        if (le(t) && e) {
            var o = t.offsetHeight,
                r = t.offsetWidth;
            r > 0 && (n = pe(i.width) / r || 1),
                o > 0 && (s = pe(i.height) / o || 1);
        }
        return {
            width: i.width / n,
            height: i.height / s,
            top: i.top / s,
            right: i.right / n,
            bottom: i.bottom / s,
            left: i.left / n,
            x: i.left / n,
            y: i.top / s,
        };
    }
    function me(t) {
        var e = ge(t),
            i = t.offsetWidth,
            n = t.offsetHeight;
        return (
            Math.abs(e.width - i) <= 1 && (i = e.width),
            Math.abs(e.height - n) <= 1 && (n = e.height),
            { x: t.offsetLeft, y: t.offsetTop, width: i, height: n }
        );
    }
    function _e(t, e) {
        var i = e.getRootNode && e.getRootNode();
        if (t.contains(e)) return !0;
        if (i && ce(i)) {
            var n = e;
            do {
                if (n && t.isSameNode(n)) return !0;
                n = n.parentNode || n.host;
            } while (n);
        }
        return !1;
    }
    function ve(t) {
        return re(t).getComputedStyle(t);
    }
    function be(t) {
        return ["table", "td", "th"].indexOf(oe(t)) >= 0;
    }
    function ye(t) {
        return (
            (ae(t) ? t.ownerDocument : t.document) || window.document
        ).documentElement;
    }
    function we(t) {
        return "html" === oe(t)
            ? t
            : t.assignedSlot ||
                  t.parentNode ||
                  (ce(t) ? t.host : null) ||
                  ye(t);
    }
    function Ee(t) {
        return le(t) && "fixed" !== ve(t).position ? t.offsetParent : null;
    }
    function Ae(t) {
        for (
            var e = re(t), i = Ee(t);
            i && be(i) && "static" === ve(i).position;

        )
            i = Ee(i);
        return i &&
            ("html" === oe(i) ||
                ("body" === oe(i) && "static" === ve(i).position))
            ? e
            : i ||
                  (function (t) {
                      var e =
                          -1 !==
                          navigator.userAgent.toLowerCase().indexOf("firefox");
                      if (
                          -1 !== navigator.userAgent.indexOf("Trident") &&
                          le(t) &&
                          "fixed" === ve(t).position
                      )
                          return null;
                      for (
                          var i = we(t);
                          le(i) && ["html", "body"].indexOf(oe(i)) < 0;

                      ) {
                          var n = ve(i);
                          if (
                              "none" !== n.transform ||
                              "none" !== n.perspective ||
                              "paint" === n.contain ||
                              -1 !==
                                  ["transform", "perspective"].indexOf(
                                      n.willChange
                                  ) ||
                              (e && "filter" === n.willChange) ||
                              (e && n.filter && "none" !== n.filter)
                          )
                              return i;
                          i = i.parentNode;
                      }
                      return null;
                  })(t) ||
                  e;
    }
    function Ce(t) {
        return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
    }
    function Oe(t, e, i) {
        return ue(t, fe(e, i));
    }
    function Te(t) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t);
    }
    function Le(t, e) {
        return e.reduce(function (e, i) {
            return (e[i] = t), e;
        }, {});
    }
    const ke = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function (t) {
            var e,
                i = t.state,
                n = t.name,
                s = t.options,
                o = i.elements.arrow,
                r = i.modifiersData.popperOffsets,
                a = de(i.placement),
                l = Ce(a),
                c = [Ht, jt].indexOf(a) >= 0 ? "height" : "width";
            if (o && r) {
                var h = (function (t, e) {
                        return Te(
                            "number" !=
                                typeof (t =
                                    "function" == typeof t
                                        ? t(
                                              Object.assign({}, e.rects, {
                                                  placement: e.placement,
                                              })
                                          )
                                        : t)
                                ? t
                                : Le(t, Rt)
                        );
                    })(s.padding, i),
                    d = me(o),
                    u = "y" === l ? Pt : Ht,
                    f = "y" === l ? Mt : jt,
                    p =
                        i.rects.reference[c] +
                        i.rects.reference[l] -
                        r[l] -
                        i.rects.popper[c],
                    g = r[l] - i.rects.reference[l],
                    m = Ae(o),
                    _ = m
                        ? "y" === l
                            ? m.clientHeight || 0
                            : m.clientWidth || 0
                        : 0,
                    v = p / 2 - g / 2,
                    b = h[u],
                    y = _ - d[c] - h[f],
                    w = _ / 2 - d[c] / 2 + v,
                    E = Oe(b, w, y),
                    A = l;
                i.modifiersData[n] =
                    (((e = {})[A] = E), (e.centerOffset = E - w), e);
            }
        },
        effect: function (t) {
            var e = t.state,
                i = t.options.element,
                n = void 0 === i ? "[data-popper-arrow]" : i;
            null != n &&
                ("string" != typeof n ||
                    (n = e.elements.popper.querySelector(n))) &&
                _e(e.elements.popper, n) &&
                (e.elements.arrow = n);
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"],
    };
    function xe(t) {
        return t.split("-")[1];
    }
    var De = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
    function Ne(t) {
        var e,
            i = t.popper,
            n = t.popperRect,
            s = t.placement,
            o = t.variation,
            r = t.offsets,
            a = t.position,
            l = t.gpuAcceleration,
            c = t.adaptive,
            h = t.roundOffsets,
            d = t.isFixed,
            u =
                !0 === h
                    ? (function (t) {
                          var e = t.x,
                              i = t.y,
                              n = window.devicePixelRatio || 1;
                          return {
                              x: pe(e * n) / n || 0,
                              y: pe(i * n) / n || 0,
                          };
                      })(r)
                    : "function" == typeof h
                    ? h(r)
                    : r,
            f = u.x,
            p = void 0 === f ? 0 : f,
            g = u.y,
            m = void 0 === g ? 0 : g,
            _ = r.hasOwnProperty("x"),
            v = r.hasOwnProperty("y"),
            b = Ht,
            y = Pt,
            w = window;
        if (c) {
            var E = Ae(i),
                A = "clientHeight",
                C = "clientWidth";
            E === re(i) &&
                "static" !== ve((E = ye(i))).position &&
                "absolute" === a &&
                ((A = "scrollHeight"), (C = "scrollWidth")),
                (E = E),
                (s === Pt || ((s === Ht || s === jt) && o === qt)) &&
                    ((y = Mt),
                    (m -=
                        (d && w.visualViewport
                            ? w.visualViewport.height
                            : E[A]) - n.height),
                    (m *= l ? 1 : -1)),
                (s !== Ht && ((s !== Pt && s !== Mt) || o !== qt)) ||
                    ((b = jt),
                    (p -=
                        (d && w.visualViewport
                            ? w.visualViewport.width
                            : E[C]) - n.width),
                    (p *= l ? 1 : -1));
        }
        var O,
            T = Object.assign({ position: a }, c && De);
        return l
            ? Object.assign(
                  {},
                  T,
                  (((O = {})[y] = v ? "0" : ""),
                  (O[b] = _ ? "0" : ""),
                  (O.transform =
                      (w.devicePixelRatio || 1) <= 1
                          ? "translate(" + p + "px, " + m + "px)"
                          : "translate3d(" + p + "px, " + m + "px, 0)"),
                  O)
              )
            : Object.assign(
                  {},
                  T,
                  (((e = {})[y] = v ? m + "px" : ""),
                  (e[b] = _ ? p + "px" : ""),
                  (e.transform = ""),
                  e)
              );
    }
    const Se = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function (t) {
            var e = t.state,
                i = t.options,
                n = i.gpuAcceleration,
                s = void 0 === n || n,
                o = i.adaptive,
                r = void 0 === o || o,
                a = i.roundOffsets,
                l = void 0 === a || a,
                c = {
                    placement: de(e.placement),
                    variation: xe(e.placement),
                    popper: e.elements.popper,
                    popperRect: e.rects.popper,
                    gpuAcceleration: s,
                    isFixed: "fixed" === e.options.strategy,
                };
            null != e.modifiersData.popperOffsets &&
                (e.styles.popper = Object.assign(
                    {},
                    e.styles.popper,
                    Ne(
                        Object.assign({}, c, {
                            offsets: e.modifiersData.popperOffsets,
                            position: e.options.strategy,
                            adaptive: r,
                            roundOffsets: l,
                        })
                    )
                )),
                null != e.modifiersData.arrow &&
                    (e.styles.arrow = Object.assign(
                        {},
                        e.styles.arrow,
                        Ne(
                            Object.assign({}, c, {
                                offsets: e.modifiersData.arrow,
                                position: "absolute",
                                adaptive: !1,
                                roundOffsets: l,
                            })
                        )
                    )),
                (e.attributes.popper = Object.assign({}, e.attributes.popper, {
                    "data-popper-placement": e.placement,
                }));
        },
        data: {},
    };
    var Ie = { passive: !0 };
    const $e = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function () {},
        effect: function (t) {
            var e = t.state,
                i = t.instance,
                n = t.options,
                s = n.scroll,
                o = void 0 === s || s,
                r = n.resize,
                a = void 0 === r || r,
                l = re(e.elements.popper),
                c = [].concat(
                    e.scrollParents.reference,
                    e.scrollParents.popper
                );
            return (
                o &&
                    c.forEach(function (t) {
                        t.addEventListener("scroll", i.update, Ie);
                    }),
                a && l.addEventListener("resize", i.update, Ie),
                function () {
                    o &&
                        c.forEach(function (t) {
                            t.removeEventListener("scroll", i.update, Ie);
                        }),
                        a && l.removeEventListener("resize", i.update, Ie);
                }
            );
        },
        data: {},
    };
    var Pe = { left: "right", right: "left", bottom: "top", top: "bottom" };
    function Me(t) {
        return t.replace(/left|right|bottom|top/g, function (t) {
            return Pe[t];
        });
    }
    var je = { start: "end", end: "start" };
    function He(t) {
        return t.replace(/start|end/g, function (t) {
            return je[t];
        });
    }
    function Be(t) {
        var e = re(t);
        return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
    }
    function Re(t) {
        return ge(ye(t)).left + Be(t).scrollLeft;
    }
    function We(t) {
        var e = ve(t),
            i = e.overflow,
            n = e.overflowX,
            s = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(i + s + n);
    }
    function qe(t) {
        return ["html", "body", "#document"].indexOf(oe(t)) >= 0
            ? t.ownerDocument.body
            : le(t) && We(t)
            ? t
            : qe(we(t));
    }
    function ze(t, e) {
        var i;
        void 0 === e && (e = []);
        var n = qe(t),
            s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
            o = re(n),
            r = s ? [o].concat(o.visualViewport || [], We(n) ? n : []) : n,
            a = e.concat(r);
        return s ? a : a.concat(ze(we(r)));
    }
    function Fe(t) {
        return Object.assign({}, t, {
            left: t.x,
            top: t.y,
            right: t.x + t.width,
            bottom: t.y + t.height,
        });
    }
    function Ue(t, e) {
        return e === Ft
            ? Fe(
                  (function (t) {
                      var e = re(t),
                          i = ye(t),
                          n = e.visualViewport,
                          s = i.clientWidth,
                          o = i.clientHeight,
                          r = 0,
                          a = 0;
                      return (
                          n &&
                              ((s = n.width),
                              (o = n.height),
                              /^((?!chrome|android).)*safari/i.test(
                                  navigator.userAgent
                              ) || ((r = n.offsetLeft), (a = n.offsetTop))),
                          { width: s, height: o, x: r + Re(t), y: a }
                      );
                  })(t)
              )
            : ae(e)
            ? (function (t) {
                  var e = ge(t);
                  return (
                      (e.top = e.top + t.clientTop),
                      (e.left = e.left + t.clientLeft),
                      (e.bottom = e.top + t.clientHeight),
                      (e.right = e.left + t.clientWidth),
                      (e.width = t.clientWidth),
                      (e.height = t.clientHeight),
                      (e.x = e.left),
                      (e.y = e.top),
                      e
                  );
              })(e)
            : Fe(
                  (function (t) {
                      var e,
                          i = ye(t),
                          n = Be(t),
                          s = null == (e = t.ownerDocument) ? void 0 : e.body,
                          o = ue(
                              i.scrollWidth,
                              i.clientWidth,
                              s ? s.scrollWidth : 0,
                              s ? s.clientWidth : 0
                          ),
                          r = ue(
                              i.scrollHeight,
                              i.clientHeight,
                              s ? s.scrollHeight : 0,
                              s ? s.clientHeight : 0
                          ),
                          a = -n.scrollLeft + Re(t),
                          l = -n.scrollTop;
                      return (
                          "rtl" === ve(s || i).direction &&
                              (a +=
                                  ue(i.clientWidth, s ? s.clientWidth : 0) - o),
                          { width: o, height: r, x: a, y: l }
                      );
                  })(ye(t))
              );
    }
    function Ve(t) {
        var e,
            i = t.reference,
            n = t.element,
            s = t.placement,
            o = s ? de(s) : null,
            r = s ? xe(s) : null,
            a = i.x + i.width / 2 - n.width / 2,
            l = i.y + i.height / 2 - n.height / 2;
        switch (o) {
            case Pt:
                e = { x: a, y: i.y - n.height };
                break;
            case Mt:
                e = { x: a, y: i.y + i.height };
                break;
            case jt:
                e = { x: i.x + i.width, y: l };
                break;
            case Ht:
                e = { x: i.x - n.width, y: l };
                break;
            default:
                e = { x: i.x, y: i.y };
        }
        var c = o ? Ce(o) : null;
        if (null != c) {
            var h = "y" === c ? "height" : "width";
            switch (r) {
                case Wt:
                    e[c] = e[c] - (i[h] / 2 - n[h] / 2);
                    break;
                case qt:
                    e[c] = e[c] + (i[h] / 2 - n[h] / 2);
            }
        }
        return e;
    }
    function Ke(t, e) {
        void 0 === e && (e = {});
        var i = e,
            n = i.placement,
            s = void 0 === n ? t.placement : n,
            o = i.boundary,
            r = void 0 === o ? zt : o,
            a = i.rootBoundary,
            l = void 0 === a ? Ft : a,
            c = i.elementContext,
            h = void 0 === c ? Ut : c,
            d = i.altBoundary,
            u = void 0 !== d && d,
            f = i.padding,
            p = void 0 === f ? 0 : f,
            g = Te("number" != typeof p ? p : Le(p, Rt)),
            m = h === Ut ? Vt : Ut,
            _ = t.rects.popper,
            v = t.elements[u ? m : h],
            b = (function (t, e, i) {
                var n =
                        "clippingParents" === e
                            ? (function (t) {
                                  var e = ze(we(t)),
                                      i =
                                          ["absolute", "fixed"].indexOf(
                                              ve(t).position
                                          ) >= 0,
                                      n = i && le(t) ? Ae(t) : t;
                                  return ae(n)
                                      ? e.filter(function (t) {
                                            return (
                                                ae(t) &&
                                                _e(t, n) &&
                                                "body" !== oe(t) &&
                                                (!i ||
                                                    "static" !== ve(t).position)
                                            );
                                        })
                                      : [];
                              })(t)
                            : [].concat(e),
                    s = [].concat(n, [i]),
                    o = s[0],
                    r = s.reduce(function (e, i) {
                        var n = Ue(t, i);
                        return (
                            (e.top = ue(n.top, e.top)),
                            (e.right = fe(n.right, e.right)),
                            (e.bottom = fe(n.bottom, e.bottom)),
                            (e.left = ue(n.left, e.left)),
                            e
                        );
                    }, Ue(t, o));
                return (
                    (r.width = r.right - r.left),
                    (r.height = r.bottom - r.top),
                    (r.x = r.left),
                    (r.y = r.top),
                    r
                );
            })(ae(v) ? v : v.contextElement || ye(t.elements.popper), r, l),
            y = ge(t.elements.reference),
            w = Ve({
                reference: y,
                element: _,
                strategy: "absolute",
                placement: s,
            }),
            E = Fe(Object.assign({}, _, w)),
            A = h === Ut ? E : y,
            C = {
                top: b.top - A.top + g.top,
                bottom: A.bottom - b.bottom + g.bottom,
                left: b.left - A.left + g.left,
                right: A.right - b.right + g.right,
            },
            O = t.modifiersData.offset;
        if (h === Ut && O) {
            var T = O[s];
            Object.keys(C).forEach(function (t) {
                var e = [jt, Mt].indexOf(t) >= 0 ? 1 : -1,
                    i = [Pt, Mt].indexOf(t) >= 0 ? "y" : "x";
                C[t] += T[i] * e;
            });
        }
        return C;
    }
    function Ye(t, e) {
        void 0 === e && (e = {});
        var i = e,
            n = i.placement,
            s = i.boundary,
            o = i.rootBoundary,
            r = i.padding,
            a = i.flipVariations,
            l = i.allowedAutoPlacements,
            c = void 0 === l ? Yt : l,
            h = xe(n),
            d = h
                ? a
                    ? Kt
                    : Kt.filter(function (t) {
                          return xe(t) === h;
                      })
                : Rt,
            u = d.filter(function (t) {
                return c.indexOf(t) >= 0;
            });
        0 === u.length && (u = d);
        var f = u.reduce(function (e, i) {
            return (
                (e[i] = Ke(t, {
                    placement: i,
                    boundary: s,
                    rootBoundary: o,
                    padding: r,
                })[de(i)]),
                e
            );
        }, {});
        return Object.keys(f).sort(function (t, e) {
            return f[t] - f[e];
        });
    }
    const Xe = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function (t) {
            var e = t.state,
                i = t.options,
                n = t.name;
            if (!e.modifiersData[n]._skip) {
                for (
                    var s = i.mainAxis,
                        o = void 0 === s || s,
                        r = i.altAxis,
                        a = void 0 === r || r,
                        l = i.fallbackPlacements,
                        c = i.padding,
                        h = i.boundary,
                        d = i.rootBoundary,
                        u = i.altBoundary,
                        f = i.flipVariations,
                        p = void 0 === f || f,
                        g = i.allowedAutoPlacements,
                        m = e.options.placement,
                        _ = de(m),
                        v =
                            l ||
                            (_ !== m && p
                                ? (function (t) {
                                      if (de(t) === Bt) return [];
                                      var e = Me(t);
                                      return [He(t), e, He(e)];
                                  })(m)
                                : [Me(m)]),
                        b = [m].concat(v).reduce(function (t, i) {
                            return t.concat(
                                de(i) === Bt
                                    ? Ye(e, {
                                          placement: i,
                                          boundary: h,
                                          rootBoundary: d,
                                          padding: c,
                                          flipVariations: p,
                                          allowedAutoPlacements: g,
                                      })
                                    : i
                            );
                        }, []),
                        y = e.rects.reference,
                        w = e.rects.popper,
                        E = new Map(),
                        A = !0,
                        C = b[0],
                        O = 0;
                    O < b.length;
                    O++
                ) {
                    var T = b[O],
                        L = de(T),
                        k = xe(T) === Wt,
                        x = [Pt, Mt].indexOf(L) >= 0,
                        D = x ? "width" : "height",
                        N = Ke(e, {
                            placement: T,
                            boundary: h,
                            rootBoundary: d,
                            altBoundary: u,
                            padding: c,
                        }),
                        S = x ? (k ? jt : Ht) : k ? Mt : Pt;
                    y[D] > w[D] && (S = Me(S));
                    var I = Me(S),
                        $ = [];
                    if (
                        (o && $.push(N[L] <= 0),
                        a && $.push(N[S] <= 0, N[I] <= 0),
                        $.every(function (t) {
                            return t;
                        }))
                    ) {
                        (C = T), (A = !1);
                        break;
                    }
                    E.set(T, $);
                }
                if (A)
                    for (
                        var P = function (t) {
                                var e = b.find(function (e) {
                                    var i = E.get(e);
                                    if (i)
                                        return i
                                            .slice(0, t)
                                            .every(function (t) {
                                                return t;
                                            });
                                });
                                if (e) return (C = e), "break";
                            },
                            M = p ? 3 : 1;
                        M > 0 && "break" !== P(M);
                        M--
                    );
                e.placement !== C &&
                    ((e.modifiersData[n]._skip = !0),
                    (e.placement = C),
                    (e.reset = !0));
            }
        },
        requiresIfExists: ["offset"],
        data: { _skip: !1 },
    };
    function Qe(t, e, i) {
        return (
            void 0 === i && (i = { x: 0, y: 0 }),
            {
                top: t.top - e.height - i.y,
                right: t.right - e.width + i.x,
                bottom: t.bottom - e.height + i.y,
                left: t.left - e.width - i.x,
            }
        );
    }
    function Ge(t) {
        return [Pt, jt, Mt, Ht].some(function (e) {
            return t[e] >= 0;
        });
    }
    const Ze = {
            name: "hide",
            enabled: !0,
            phase: "main",
            requiresIfExists: ["preventOverflow"],
            fn: function (t) {
                var e = t.state,
                    i = t.name,
                    n = e.rects.reference,
                    s = e.rects.popper,
                    o = e.modifiersData.preventOverflow,
                    r = Ke(e, { elementContext: "reference" }),
                    a = Ke(e, { altBoundary: !0 }),
                    l = Qe(r, n),
                    c = Qe(a, s, o),
                    h = Ge(l),
                    d = Ge(c);
                (e.modifiersData[i] = {
                    referenceClippingOffsets: l,
                    popperEscapeOffsets: c,
                    isReferenceHidden: h,
                    hasPopperEscaped: d,
                }),
                    (e.attributes.popper = Object.assign(
                        {},
                        e.attributes.popper,
                        {
                            "data-popper-reference-hidden": h,
                            "data-popper-escaped": d,
                        }
                    ));
            },
        },
        Je = {
            name: "offset",
            enabled: !0,
            phase: "main",
            requires: ["popperOffsets"],
            fn: function (t) {
                var e = t.state,
                    i = t.options,
                    n = t.name,
                    s = i.offset,
                    o = void 0 === s ? [0, 0] : s,
                    r = Yt.reduce(function (t, i) {
                        return (
                            (t[i] = (function (t, e, i) {
                                var n = de(t),
                                    s = [Ht, Pt].indexOf(n) >= 0 ? -1 : 1,
                                    o =
                                        "function" == typeof i
                                            ? i(
                                                  Object.assign({}, e, {
                                                      placement: t,
                                                  })
                                              )
                                            : i,
                                    r = o[0],
                                    a = o[1];
                                return (
                                    (r = r || 0),
                                    (a = (a || 0) * s),
                                    [Ht, jt].indexOf(n) >= 0
                                        ? { x: a, y: r }
                                        : { x: r, y: a }
                                );
                            })(i, e.rects, o)),
                            t
                        );
                    }, {}),
                    a = r[e.placement],
                    l = a.x,
                    c = a.y;
                null != e.modifiersData.popperOffsets &&
                    ((e.modifiersData.popperOffsets.x += l),
                    (e.modifiersData.popperOffsets.y += c)),
                    (e.modifiersData[n] = r);
            },
        },
        ti = {
            name: "popperOffsets",
            enabled: !0,
            phase: "read",
            fn: function (t) {
                var e = t.state,
                    i = t.name;
                e.modifiersData[i] = Ve({
                    reference: e.rects.reference,
                    element: e.rects.popper,
                    strategy: "absolute",
                    placement: e.placement,
                });
            },
            data: {},
        },
        ei = {
            name: "preventOverflow",
            enabled: !0,
            phase: "main",
            fn: function (t) {
                var e = t.state,
                    i = t.options,
                    n = t.name,
                    s = i.mainAxis,
                    o = void 0 === s || s,
                    r = i.altAxis,
                    a = void 0 !== r && r,
                    l = i.boundary,
                    c = i.rootBoundary,
                    h = i.altBoundary,
                    d = i.padding,
                    u = i.tether,
                    f = void 0 === u || u,
                    p = i.tetherOffset,
                    g = void 0 === p ? 0 : p,
                    m = Ke(e, {
                        boundary: l,
                        rootBoundary: c,
                        padding: d,
                        altBoundary: h,
                    }),
                    _ = de(e.placement),
                    v = xe(e.placement),
                    b = !v,
                    y = Ce(_),
                    w = "x" === y ? "y" : "x",
                    E = e.modifiersData.popperOffsets,
                    A = e.rects.reference,
                    C = e.rects.popper,
                    O =
                        "function" == typeof g
                            ? g(
                                  Object.assign({}, e.rects, {
                                      placement: e.placement,
                                  })
                              )
                            : g,
                    T =
                        "number" == typeof O
                            ? { mainAxis: O, altAxis: O }
                            : Object.assign({ mainAxis: 0, altAxis: 0 }, O),
                    L = e.modifiersData.offset
                        ? e.modifiersData.offset[e.placement]
                        : null,
                    k = { x: 0, y: 0 };
                if (E) {
                    if (o) {
                        var x,
                            D = "y" === y ? Pt : Ht,
                            N = "y" === y ? Mt : jt,
                            S = "y" === y ? "height" : "width",
                            I = E[y],
                            $ = I + m[D],
                            P = I - m[N],
                            M = f ? -C[S] / 2 : 0,
                            j = v === Wt ? A[S] : C[S],
                            H = v === Wt ? -C[S] : -A[S],
                            B = e.elements.arrow,
                            R = f && B ? me(B) : { width: 0, height: 0 },
                            W = e.modifiersData["arrow#persistent"]
                                ? e.modifiersData["arrow#persistent"].padding
                                : { top: 0, right: 0, bottom: 0, left: 0 },
                            q = W[D],
                            z = W[N],
                            F = Oe(0, A[S], R[S]),
                            U = b
                                ? A[S] / 2 - M - F - q - T.mainAxis
                                : j - F - q - T.mainAxis,
                            V = b
                                ? -A[S] / 2 + M + F + z + T.mainAxis
                                : H + F + z + T.mainAxis,
                            K = e.elements.arrow && Ae(e.elements.arrow),
                            Y = K
                                ? "y" === y
                                    ? K.clientTop || 0
                                    : K.clientLeft || 0
                                : 0,
                            X = null != (x = null == L ? void 0 : L[y]) ? x : 0,
                            Q = I + V - X,
                            G = Oe(
                                f ? fe($, I + U - X - Y) : $,
                                I,
                                f ? ue(P, Q) : P
                            );
                        (E[y] = G), (k[y] = G - I);
                    }
                    if (a) {
                        var Z,
                            J = "x" === y ? Pt : Ht,
                            tt = "x" === y ? Mt : jt,
                            et = E[w],
                            it = "y" === w ? "height" : "width",
                            nt = et + m[J],
                            st = et - m[tt],
                            ot = -1 !== [Pt, Ht].indexOf(_),
                            rt =
                                null != (Z = null == L ? void 0 : L[w]) ? Z : 0,
                            at = ot ? nt : et - A[it] - C[it] - rt + T.altAxis,
                            lt = ot ? et + A[it] + C[it] - rt - T.altAxis : st,
                            ct =
                                f && ot
                                    ? (function (t, e, i) {
                                          var n = Oe(t, e, i);
                                          return n > i ? i : n;
                                      })(at, et, lt)
                                    : Oe(f ? at : nt, et, f ? lt : st);
                        (E[w] = ct), (k[w] = ct - et);
                    }
                    e.modifiersData[n] = k;
                }
            },
            requiresIfExists: ["offset"],
        };
    function ii(t, e, i) {
        void 0 === i && (i = !1);
        var n,
            s,
            o = le(e),
            r =
                le(e) &&
                (function (t) {
                    var e = t.getBoundingClientRect(),
                        i = pe(e.width) / t.offsetWidth || 1,
                        n = pe(e.height) / t.offsetHeight || 1;
                    return 1 !== i || 1 !== n;
                })(e),
            a = ye(e),
            l = ge(t, r),
            c = { scrollLeft: 0, scrollTop: 0 },
            h = { x: 0, y: 0 };
        return (
            (o || (!o && !i)) &&
                (("body" !== oe(e) || We(a)) &&
                    (c =
                        (n = e) !== re(n) && le(n)
                            ? {
                                  scrollLeft: (s = n).scrollLeft,
                                  scrollTop: s.scrollTop,
                              }
                            : Be(n)),
                le(e)
                    ? (((h = ge(e, !0)).x += e.clientLeft),
                      (h.y += e.clientTop))
                    : a && (h.x = Re(a))),
            {
                x: l.left + c.scrollLeft - h.x,
                y: l.top + c.scrollTop - h.y,
                width: l.width,
                height: l.height,
            }
        );
    }
    function ni(t) {
        var e = new Map(),
            i = new Set(),
            n = [];
        function s(t) {
            i.add(t.name),
                []
                    .concat(t.requires || [], t.requiresIfExists || [])
                    .forEach(function (t) {
                        if (!i.has(t)) {
                            var n = e.get(t);
                            n && s(n);
                        }
                    }),
                n.push(t);
        }
        return (
            t.forEach(function (t) {
                e.set(t.name, t);
            }),
            t.forEach(function (t) {
                i.has(t.name) || s(t);
            }),
            n
        );
    }
    var si = { placement: "bottom", modifiers: [], strategy: "absolute" };
    function oi() {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
            e[i] = arguments[i];
        return !e.some(function (t) {
            return !(t && "function" == typeof t.getBoundingClientRect);
        });
    }
    function ri(t) {
        void 0 === t && (t = {});
        var e = t,
            i = e.defaultModifiers,
            n = void 0 === i ? [] : i,
            s = e.defaultOptions,
            o = void 0 === s ? si : s;
        return function (t, e, i) {
            void 0 === i && (i = o);
            var s,
                r,
                a = {
                    placement: "bottom",
                    orderedModifiers: [],
                    options: Object.assign({}, si, o),
                    modifiersData: {},
                    elements: { reference: t, popper: e },
                    attributes: {},
                    styles: {},
                },
                l = [],
                c = !1,
                h = {
                    state: a,
                    setOptions: function (i) {
                        var s = "function" == typeof i ? i(a.options) : i;
                        d(),
                            (a.options = Object.assign({}, o, a.options, s)),
                            (a.scrollParents = {
                                reference: ae(t)
                                    ? ze(t)
                                    : t.contextElement
                                    ? ze(t.contextElement)
                                    : [],
                                popper: ze(e),
                            });
                        var r,
                            c,
                            u = (function (t) {
                                var e = ni(t);
                                return se.reduce(function (t, i) {
                                    return t.concat(
                                        e.filter(function (t) {
                                            return t.phase === i;
                                        })
                                    );
                                }, []);
                            })(
                                ((r = [].concat(n, a.options.modifiers)),
                                (c = r.reduce(function (t, e) {
                                    var i = t[e.name];
                                    return (
                                        (t[e.name] = i
                                            ? Object.assign({}, i, e, {
                                                  options: Object.assign(
                                                      {},
                                                      i.options,
                                                      e.options
                                                  ),
                                                  data: Object.assign(
                                                      {},
                                                      i.data,
                                                      e.data
                                                  ),
                                              })
                                            : e),
                                        t
                                    );
                                }, {})),
                                Object.keys(c).map(function (t) {
                                    return c[t];
                                }))
                            );
                        return (
                            (a.orderedModifiers = u.filter(function (t) {
                                return t.enabled;
                            })),
                            a.orderedModifiers.forEach(function (t) {
                                var e = t.name,
                                    i = t.options,
                                    n = void 0 === i ? {} : i,
                                    s = t.effect;
                                if ("function" == typeof s) {
                                    var o = s({
                                        state: a,
                                        name: e,
                                        instance: h,
                                        options: n,
                                    });
                                    l.push(o || function () {});
                                }
                            }),
                            h.update()
                        );
                    },
                    forceUpdate: function () {
                        if (!c) {
                            var t = a.elements,
                                e = t.reference,
                                i = t.popper;
                            if (oi(e, i)) {
                                (a.rects = {
                                    reference: ii(
                                        e,
                                        Ae(i),
                                        "fixed" === a.options.strategy
                                    ),
                                    popper: me(i),
                                }),
                                    (a.reset = !1),
                                    (a.placement = a.options.placement),
                                    a.orderedModifiers.forEach(function (t) {
                                        return (a.modifiersData[t.name] =
                                            Object.assign({}, t.data));
                                    });
                                for (
                                    var n = 0;
                                    n < a.orderedModifiers.length;
                                    n++
                                )
                                    if (!0 !== a.reset) {
                                        var s = a.orderedModifiers[n],
                                            o = s.fn,
                                            r = s.options,
                                            l = void 0 === r ? {} : r,
                                            d = s.name;
                                        "function" == typeof o &&
                                            (a =
                                                o({
                                                    state: a,
                                                    options: l,
                                                    name: d,
                                                    instance: h,
                                                }) || a);
                                    } else (a.reset = !1), (n = -1);
                            }
                        }
                    },
                    update:
                        ((s = function () {
                            return new Promise(function (t) {
                                h.forceUpdate(), t(a);
                            });
                        }),
                        function () {
                            return (
                                r ||
                                    (r = new Promise(function (t) {
                                        Promise.resolve().then(function () {
                                            (r = void 0), t(s());
                                        });
                                    })),
                                r
                            );
                        }),
                    destroy: function () {
                        d(), (c = !0);
                    },
                };
            if (!oi(t, e)) return h;
            function d() {
                l.forEach(function (t) {
                    return t();
                }),
                    (l = []);
            }
            return (
                h.setOptions(i).then(function (t) {
                    !c && i.onFirstUpdate && i.onFirstUpdate(t);
                }),
                h
            );
        };
    }
    var ai = ri(),
        li = ri({ defaultModifiers: [$e, ti, Se, he] }),
        ci = ri({ defaultModifiers: [$e, ti, Se, he, Je, Xe, ei, ke, Ze] });
    const hi = Object.freeze({
            __proto__: null,
            popperGenerator: ri,
            detectOverflow: Ke,
            createPopperBase: ai,
            createPopper: ci,
            createPopperLite: li,
            top: Pt,
            bottom: Mt,
            right: jt,
            left: Ht,
            auto: Bt,
            basePlacements: Rt,
            start: Wt,
            end: qt,
            clippingParents: zt,
            viewport: Ft,
            popper: Ut,
            reference: Vt,
            variationPlacements: Kt,
            placements: Yt,
            beforeRead: Xt,
            read: Qt,
            afterRead: Gt,
            beforeMain: Zt,
            main: Jt,
            afterMain: te,
            beforeWrite: ee,
            write: ie,
            afterWrite: ne,
            modifierPhases: se,
            applyStyles: he,
            arrow: ke,
            computeStyles: Se,
            eventListeners: $e,
            flip: Xe,
            hide: Ze,
            offset: Je,
            popperOffsets: ti,
            preventOverflow: ei,
        }),
        di = "dropdown",
        ui = ".coreui.dropdown",
        fi = "Escape",
        pi = "Space",
        gi = "ArrowUp",
        mi = "ArrowDown",
        _i = new RegExp("ArrowUp|ArrowDown|Escape"),
        vi = `hide${ui}`,
        bi = `hidden${ui}`,
        yi = `show${ui}`,
        wi = `shown${ui}`,
        Ei = `click${ui}.data-api`,
        Ai = `keydown${ui}.data-api`,
        Ci = `keyup${ui}.data-api`,
        Oi = "show",
        Ti = '[data-coreui-toggle="dropdown"]',
        Li = ".dropdown-menu",
        ki = g() ? "top-end" : "top-start",
        xi = g() ? "top-start" : "top-end",
        Di = g() ? "bottom-end" : "bottom-start",
        Ni = g() ? "bottom-start" : "bottom-end",
        Si = g() ? "left-start" : "right-start",
        Ii = g() ? "right-start" : "left-start",
        $i = {
            offset: [0, 2],
            boundary: "clippingParents",
            reference: "toggle",
            display: "dynamic",
            popperConfig: null,
            autoClose: !0,
        },
        Pi = {
            offset: "(array|string|function)",
            boundary: "(string|element)",
            reference: "(string|element|object)",
            display: "string",
            popperConfig: "(null|object|function)",
            autoClose: "(boolean|string)",
        };
    class Mi extends H {
        constructor(t, e) {
            super(t),
                (this._popper = null),
                (this._config = this._getConfig(e)),
                (this._menu = this._getMenuElement()),
                (this._inNavbar = this._detectNavbar());
        }
        static get Default() {
            return $i;
        }
        static get DefaultType() {
            return Pi;
        }
        static get NAME() {
            return di;
        }
        toggle() {
            return this._isShown() ? this.hide() : this.show();
        }
        show() {
            if (c(this._element) || this._isShown(this._menu)) return;
            const t = { relatedTarget: this._element };
            if (P.trigger(this._element, yi, t).defaultPrevented) return;
            const e = Mi.getParentFromElement(this._element);
            this._inNavbar
                ? U.setDataAttribute(this._menu, "popper", "none")
                : this._createPopper(e),
                "ontouchstart" in document.documentElement &&
                    !e.closest(".navbar-nav") &&
                    []
                        .concat(...document.body.children)
                        .forEach((t) => P.on(t, "mouseover", d)),
                this._element.focus(),
                this._element.setAttribute("aria-expanded", !0),
                this._menu.classList.add(Oi),
                this._element.classList.add(Oi),
                P.trigger(this._element, wi, t);
        }
        hide() {
            if (c(this._element) || !this._isShown(this._menu)) return;
            const t = { relatedTarget: this._element };
            this._completeHide(t);
        }
        dispose() {
            this._popper && this._popper.destroy(), super.dispose();
        }
        update() {
            (this._inNavbar = this._detectNavbar()),
                this._popper && this._popper.update();
        }
        _completeHide(t) {
            P.trigger(this._element, vi, t).defaultPrevented ||
                ("ontouchstart" in document.documentElement &&
                    []
                        .concat(...document.body.children)
                        .forEach((t) => P.off(t, "mouseover", d)),
                this._popper && this._popper.destroy(),
                this._menu.classList.remove(Oi),
                this._element.classList.remove(Oi),
                this._element.setAttribute("aria-expanded", "false"),
                U.removeDataAttribute(this._menu, "popper"),
                P.trigger(this._element, bi, t));
        }
        _getConfig(t) {
            if (
                ((t = {
                    ...this.constructor.Default,
                    ...U.getDataAttributes(this._element),
                    ...t,
                }),
                a(di, t, this.constructor.DefaultType),
                "object" == typeof t.reference &&
                    !o(t.reference) &&
                    "function" != typeof t.reference.getBoundingClientRect)
            )
                throw new TypeError(
                    `${di.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
                );
            return t;
        }
        _createPopper(t) {
            if (void 0 === hi)
                throw new TypeError(
                    "Bootstrap's dropdowns require Popper (https://popper.js.org)"
                );
            let e = this._element;
            "parent" === this._config.reference
                ? (e = t)
                : o(this._config.reference)
                ? (e = r(this._config.reference))
                : "object" == typeof this._config.reference &&
                  (e = this._config.reference);
            const i = this._getPopperConfig(),
                n = i.modifiers.find(
                    (t) => "applyStyles" === t.name && !1 === t.enabled
                );
            (this._popper = ci(e, this._menu, i)),
                n && U.setDataAttribute(this._menu, "popper", "static");
        }
        _isShown(t = this._element) {
            return t.classList.contains(Oi);
        }
        _getMenuElement() {
            return V.next(this._element, Li)[0];
        }
        _getPlacement() {
            const t = this._element.parentNode;
            if (t.classList.contains("dropend")) return Si;
            if (t.classList.contains("dropstart")) return Ii;
            const e =
                "end" ===
                getComputedStyle(this._menu)
                    .getPropertyValue("--cui-position")
                    .trim();
            return t.classList.contains("dropup") ? (e ? xi : ki) : e ? Ni : Di;
        }
        _detectNavbar() {
            return null !== this._element.closest(".navbar");
        }
        _getOffset() {
            const { offset: t } = this._config;
            return "string" == typeof t
                ? t.split(",").map((t) => Number.parseInt(t, 10))
                : "function" == typeof t
                ? (e) => t(e, this._element)
                : t;
        }
        _getPopperConfig() {
            const t = {
                placement: this._getPlacement(),
                modifiers: [
                    {
                        name: "preventOverflow",
                        options: { boundary: this._config.boundary },
                    },
                    { name: "offset", options: { offset: this._getOffset() } },
                ],
            };
            return (
                "static" === this._config.display &&
                    (t.modifiers = [{ name: "applyStyles", enabled: !1 }]),
                {
                    ...t,
                    ...("function" == typeof this._config.popperConfig
                        ? this._config.popperConfig(t)
                        : this._config.popperConfig),
                }
            );
        }
        _selectMenuItem({ key: t, target: e }) {
            const i = V.find(
                ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
                this._menu
            ).filter(l);
            i.length && b(i, e, t === mi, !i.includes(e)).focus();
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = Mi.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
        static clearMenus(t) {
            if (
                t &&
                (2 === t.button || ("keyup" === t.type && "Tab" !== t.key))
            )
                return;
            const e = V.find(Ti);
            for (let i = 0, n = e.length; i < n; i++) {
                const n = Mi.getInstance(e[i]);
                if (!n || !1 === n._config.autoClose) continue;
                if (!n._isShown()) continue;
                const s = { relatedTarget: n._element };
                if (t) {
                    const e = t.composedPath(),
                        i = e.includes(n._menu);
                    if (
                        e.includes(n._element) ||
                        ("inside" === n._config.autoClose && !i) ||
                        ("outside" === n._config.autoClose && i)
                    )
                        continue;
                    if (
                        n._menu.contains(t.target) &&
                        (("keyup" === t.type && "Tab" === t.key) ||
                            /input|select|option|textarea|form/i.test(
                                t.target.tagName
                            ))
                    )
                        continue;
                    "click" === t.type && (s.clickEvent = t);
                }
                n._completeHide(s);
            }
        }
        static getParentFromElement(t) {
            return n(t) || t.parentNode;
        }
        static dataApiKeydownHandler(t) {
            if (
                /input|textarea/i.test(t.target.tagName)
                    ? t.key === pi ||
                      (t.key !== fi &&
                          ((t.key !== mi && t.key !== gi) ||
                              t.target.closest(Li)))
                    : !_i.test(t.key)
            )
                return;
            const e = this.classList.contains(Oi);
            if (!e && t.key === fi) return;
            if ((t.preventDefault(), t.stopPropagation(), c(this))) return;
            const i = this.matches(Ti) ? this : V.prev(this, Ti)[0],
                n = Mi.getOrCreateInstance(i);
            if (t.key !== fi)
                return t.key === gi || t.key === mi
                    ? (e || n.show(), void n._selectMenuItem(t))
                    : void ((e && t.key !== pi) || Mi.clearMenus());
            n.hide();
        }
    }
    P.on(document, Ai, Ti, Mi.dataApiKeydownHandler),
        P.on(document, Ai, Li, Mi.dataApiKeydownHandler),
        P.on(document, Ei, Mi.clearMenus),
        P.on(document, Ci, Mi.clearMenus),
        P.on(document, Ei, Ti, function (t) {
            t.preventDefault(), Mi.getOrCreateInstance(this).toggle();
        }),
        m(Mi);
    const ji = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        Hi = ".sticky-top";
    class Bi {
        constructor() {
            this._element = document.body;
        }
        getWidth() {
            const t = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t);
        }
        hide() {
            const t = this.getWidth();
            this._disableOverFlow(),
                this._setElementAttributes(
                    this._element,
                    "paddingRight",
                    (e) => e + t
                ),
                this._setElementAttributes(ji, "paddingRight", (e) => e + t),
                this._setElementAttributes(Hi, "marginRight", (e) => e - t);
        }
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"),
                (this._element.style.overflow = "hidden");
        }
        _setElementAttributes(t, e, i) {
            const n = this.getWidth();
            this._applyManipulationCallback(t, (t) => {
                if (
                    t !== this._element &&
                    window.innerWidth > t.clientWidth + n
                )
                    return;
                this._saveInitialAttribute(t, e);
                const s = window.getComputedStyle(t)[e];
                t.style[e] = `${i(Number.parseFloat(s))}px`;
            });
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow"),
                this._resetElementAttributes(this._element, "paddingRight"),
                this._resetElementAttributes(ji, "paddingRight"),
                this._resetElementAttributes(Hi, "marginRight");
        }
        _saveInitialAttribute(t, e) {
            const i = t.style[e];
            i && U.setDataAttribute(t, e, i);
        }
        _resetElementAttributes(t, e) {
            this._applyManipulationCallback(t, (t) => {
                const i = U.getDataAttribute(t, e);
                void 0 === i
                    ? t.style.removeProperty(e)
                    : (U.removeDataAttribute(t, e), (t.style[e] = i));
            });
        }
        _applyManipulationCallback(t, e) {
            o(t) ? e(t) : V.find(t, this._element).forEach(e);
        }
        isOverflowing() {
            return this.getWidth() > 0;
        }
    }
    const Ri = {
            className: "modal-backdrop",
            isVisible: !0,
            isAnimated: !1,
            rootElement: "body",
            clickCallback: null,
        },
        Wi = {
            className: "string",
            isVisible: "boolean",
            isAnimated: "boolean",
            rootElement: "(element|string)",
            clickCallback: "(function|null)",
        },
        qi = "show",
        zi = "mousedown.coreui.backdrop";
    class Fi {
        constructor(t) {
            (this._config = this._getConfig(t)),
                (this._isAppended = !1),
                (this._element = null);
        }
        show(t) {
            this._config.isVisible
                ? (this._append(),
                  this._config.isAnimated && u(this._getElement()),
                  this._getElement().classList.add(qi),
                  this._emulateAnimation(() => {
                      _(t);
                  }))
                : _(t);
        }
        hide(t) {
            this._config.isVisible
                ? (this._getElement().classList.remove(qi),
                  this._emulateAnimation(() => {
                      this.dispose(), _(t);
                  }))
                : _(t);
        }
        _getElement() {
            if (!this._element) {
                const t = document.createElement("div");
                (t.className = this._config.className),
                    this._config.isAnimated && t.classList.add("fade"),
                    (this._element = t);
            }
            return this._element;
        }
        _getConfig(t) {
            return (
                ((t = {
                    ...Ri,
                    ...("object" == typeof t ? t : {}),
                }).rootElement = r(t.rootElement)),
                a("backdrop", t, Wi),
                t
            );
        }
        _append() {
            this._isAppended ||
                (this._config.rootElement.append(this._getElement()),
                P.on(this._getElement(), zi, () => {
                    _(this._config.clickCallback);
                }),
                (this._isAppended = !0));
        }
        dispose() {
            this._isAppended &&
                (P.off(this._element, zi),
                this._element.remove(),
                (this._isAppended = !1));
        }
        _emulateAnimation(t) {
            v(t, this._getElement(), this._config.isAnimated);
        }
    }
    const Ui = { trapElement: null, autofocus: !0 },
        Vi = { trapElement: "element", autofocus: "boolean" },
        Ki = ".coreui.focustrap",
        Yi = `focusin${Ki}`,
        Xi = `keydown.tab${Ki}`,
        Qi = "backward";
    class Gi {
        constructor(t) {
            (this._config = this._getConfig(t)),
                (this._isActive = !1),
                (this._lastTabNavDirection = null);
        }
        activate() {
            const { trapElement: t, autofocus: e } = this._config;
            this._isActive ||
                (e && t.focus(),
                P.off(document, Ki),
                P.on(document, Yi, (t) => this._handleFocusin(t)),
                P.on(document, Xi, (t) => this._handleKeydown(t)),
                (this._isActive = !0));
        }
        deactivate() {
            this._isActive && ((this._isActive = !1), P.off(document, Ki));
        }
        _handleFocusin(t) {
            const { target: e } = t,
                { trapElement: i } = this._config;
            if (e === document || e === i || i.contains(e)) return;
            const n = V.focusableChildren(i);
            0 === n.length
                ? i.focus()
                : this._lastTabNavDirection === Qi
                ? n[n.length - 1].focus()
                : n[0].focus();
        }
        _handleKeydown(t) {
            "Tab" === t.key &&
                (this._lastTabNavDirection = t.shiftKey ? Qi : "forward");
        }
        _getConfig(t) {
            return (
                (t = { ...Ui, ...("object" == typeof t ? t : {}) }),
                a("focustrap", t, Vi),
                t
            );
        }
    }
    const Zi = "modal",
        Ji = "Escape",
        tn = { backdrop: !0, keyboard: !0, focus: !0 },
        en = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
        },
        nn = "hidden.coreui.modal",
        sn = "show.coreui.modal",
        on = "resize.coreui.modal",
        rn = "click.dismiss.coreui.modal",
        an = "keydown.dismiss.coreui.modal",
        ln = "mousedown.dismiss.coreui.modal",
        cn = "modal-open",
        hn = "show",
        dn = "modal-static";
    class un extends H {
        constructor(t, e) {
            super(t),
                (this._config = this._getConfig(e)),
                (this._dialog = V.findOne(".modal-dialog", this._element)),
                (this._backdrop = this._initializeBackDrop()),
                (this._focustrap = this._initializeFocusTrap()),
                (this._isShown = !1),
                (this._ignoreBackdropClick = !1),
                (this._isTransitioning = !1),
                (this._scrollBar = new Bi());
        }
        static get Default() {
            return tn;
        }
        static get NAME() {
            return Zi;
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t);
        }
        show(t) {
            this._isShown ||
                this._isTransitioning ||
                P.trigger(this._element, sn, { relatedTarget: t })
                    .defaultPrevented ||
                ((this._isShown = !0),
                this._isAnimated() && (this._isTransitioning = !0),
                this._scrollBar.hide(),
                document.body.classList.add(cn),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                P.on(this._dialog, ln, () => {
                    P.one(
                        this._element,
                        "mouseup.dismiss.coreui.modal",
                        (t) => {
                            t.target === this._element &&
                                (this._ignoreBackdropClick = !0);
                        }
                    );
                }),
                this._showBackdrop(() => this._showElement(t)));
        }
        hide() {
            if (!this._isShown || this._isTransitioning) return;
            if (P.trigger(this._element, "hide.coreui.modal").defaultPrevented)
                return;
            this._isShown = !1;
            const t = this._isAnimated();
            t && (this._isTransitioning = !0),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                this._focustrap.deactivate(),
                this._element.classList.remove(hn),
                P.off(this._element, rn),
                P.off(this._dialog, ln),
                this._queueCallback(() => this._hideModal(), this._element, t);
        }
        dispose() {
            [window, this._dialog].forEach((t) => P.off(t, ".coreui.modal")),
                this._backdrop.dispose(),
                this._focustrap.deactivate(),
                super.dispose();
        }
        handleUpdate() {
            this._adjustDialog();
        }
        _initializeBackDrop() {
            return new Fi({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated(),
            });
        }
        _initializeFocusTrap() {
            return new Gi({ trapElement: this._element });
        }
        _getConfig(t) {
            return (
                (t = {
                    ...tn,
                    ...U.getDataAttributes(this._element),
                    ...("object" == typeof t ? t : {}),
                }),
                a(Zi, t, en),
                t
            );
        }
        _showElement(t) {
            const e = this._isAnimated(),
                i = V.findOne(".modal-body", this._dialog);
            (this._element.parentNode &&
                this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
                document.body.append(this._element),
                (this._element.style.display = "block"),
                this._element.removeAttribute("aria-hidden"),
                this._element.setAttribute("aria-modal", !0),
                this._element.setAttribute("role", "dialog"),
                (this._element.scrollTop = 0),
                i && (i.scrollTop = 0),
                e && u(this._element),
                this._element.classList.add(hn),
                this._queueCallback(
                    () => {
                        this._config.focus && this._focustrap.activate(),
                            (this._isTransitioning = !1),
                            P.trigger(this._element, "shown.coreui.modal", {
                                relatedTarget: t,
                            });
                    },
                    this._dialog,
                    e
                );
        }
        _setEscapeEvent() {
            this._isShown
                ? P.on(this._element, an, (t) => {
                      this._config.keyboard && t.key === Ji
                          ? (t.preventDefault(), this.hide())
                          : this._config.keyboard ||
                            t.key !== Ji ||
                            this._triggerBackdropTransition();
                  })
                : P.off(this._element, an);
        }
        _setResizeEvent() {
            this._isShown
                ? P.on(window, on, () => this._adjustDialog())
                : P.off(window, on);
        }
        _hideModal() {
            (this._element.style.display = "none"),
                this._element.setAttribute("aria-hidden", !0),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                (this._isTransitioning = !1),
                this._backdrop.hide(() => {
                    document.body.classList.remove(cn),
                        this._resetAdjustments(),
                        this._scrollBar.reset(),
                        P.trigger(this._element, nn);
                });
        }
        _showBackdrop(t) {
            P.on(this._element, rn, (t) => {
                this._ignoreBackdropClick
                    ? (this._ignoreBackdropClick = !1)
                    : t.target === t.currentTarget &&
                      (!0 === this._config.backdrop
                          ? this.hide()
                          : "static" === this._config.backdrop &&
                            this._triggerBackdropTransition());
            }),
                this._backdrop.show(t);
        }
        _isAnimated() {
            return this._element.classList.contains("fade");
        }
        _triggerBackdropTransition() {
            if (
                P.trigger(this._element, "hidePrevented.coreui.modal")
                    .defaultPrevented
            )
                return;
            const { classList: t, scrollHeight: e, style: i } = this._element,
                n = e > document.documentElement.clientHeight;
            (!n && "hidden" === i.overflowY) ||
                t.contains(dn) ||
                (n || (i.overflowY = "hidden"),
                t.add(dn),
                this._queueCallback(() => {
                    t.remove(dn),
                        n ||
                            this._queueCallback(() => {
                                i.overflowY = "";
                            }, this._dialog);
                }, this._dialog),
                this._element.focus());
        }
        _adjustDialog() {
            const t =
                    this._element.scrollHeight >
                    document.documentElement.clientHeight,
                e = this._scrollBar.getWidth(),
                i = e > 0;
            ((!i && t && !g()) || (i && !t && g())) &&
                (this._element.style.paddingLeft = `${e}px`),
                ((i && !t && !g()) || (!i && t && g())) &&
                    (this._element.style.paddingRight = `${e}px`);
        }
        _resetAdjustments() {
            (this._element.style.paddingLeft = ""),
                (this._element.style.paddingRight = "");
        }
        static jQueryInterface(t, e) {
            return this.each(function () {
                const i = un.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === i[t])
                        throw new TypeError(`No method named "${t}"`);
                    i[t](e);
                }
            });
        }
    }
    P.on(
        document,
        "click.coreui.modal.data-api",
        '[data-coreui-toggle="modal"]',
        function (t) {
            const e = n(this);
            ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
                P.one(e, sn, (t) => {
                    t.defaultPrevented ||
                        P.one(e, nn, () => {
                            l(this) && this.focus();
                        });
                });
            const i = V.findOne(".modal.show");
            i && un.getInstance(i).hide(),
                un.getOrCreateInstance(e).toggle(this);
        }
    ),
        B(un),
        m(un);
    const fn = "navigation",
        pn = "coreui.navigation",
        gn = `.${pn}`,
        mn = { activeLinksExact: !0, groupsAutoCollapse: !0 },
        _n = {
            activeLinksExact: "boolean",
            groupsAutoCollapse: "(string|boolean)",
        },
        vn = "active",
        bn = "show",
        yn = "nav-group-toggle",
        wn = `click${gn}.data-api`,
        En = `load${gn}.data-api`,
        An = ".nav-group",
        Cn = ".nav-group-items",
        On = ".nav-group-toggle";
    class Tn extends H {
        constructor(t, e) {
            super(t),
                (this._config = this._getConfig(e)),
                this._setActiveLink(),
                this._addEventListeners(),
                j.set(t, pn, this);
        }
        static get Default() {
            return mn;
        }
        static get DATA_KEY() {
            return pn;
        }
        static get DefaultType() {
            return _n;
        }
        static get NAME() {
            return fn;
        }
        _getConfig(t) {
            return (
                (t = {
                    ...mn,
                    ...U.getDataAttributes(this._element),
                    ...("object" == typeof t ? t : {}),
                }),
                a(fn, t, _n),
                t
            );
        }
        _setActiveLink() {
            Array.from(this._element.querySelectorAll(".nav-link")).forEach(
                (t) => {
                    if (t.classList.contains(yn)) return;
                    let e = String(window.location);
                    (/\?.*=/.test(e) || /\?./.test(e)) && (e = e.split("?")[0]),
                        /#./.test(e) && (e = e.split("#")[0]),
                        this._config.activeLinksExact &&
                            t.href === e &&
                            (t.classList.add(vn),
                            Array.from(this._getParents(t, An)).forEach((t) => {
                                t.classList.add(bn),
                                    t.setAttribute("aria-expanded", !0);
                            })),
                        !this._config.activeLinksExact &&
                            t.href.startsWith(e) &&
                            (t.classList.add(vn),
                            Array.from(this._getParents(t, An)).forEach((t) => {
                                t.classList.add(bn),
                                    t.setAttribute("aria-expanded", !0);
                            }));
                }
            );
        }
        _getParents(t, e) {
            const i = [];
            for (; t && t !== document; t = t.parentNode)
                e ? t.matches(e) && i.push(t) : i.push(t);
            return i;
        }
        _getAllSiblings(t, e) {
            const i = [];
            t = t.parentNode.firstChild;
            do {
                3 !== t.nodeType &&
                    8 !== t.nodeType &&
                    ((e && !e(t)) || i.push(t));
            } while ((t = t.nextSibling));
            return i;
        }
        _getChildren(t, e) {
            const i = [];
            for (; t; t = t.nextSibling)
                1 === t.nodeType && t !== e && i.push(t);
            return i;
        }
        _getSiblings(t, e) {
            return this._getChildren(t.parentNode.firstChild, t).filter(e);
        }
        _slideDown(t) {
            t.style.height = "auto";
            const e = t.clientHeight;
            (t.style.height = "0px"),
                setTimeout(() => {
                    t.style.height = `${e}px`;
                }, 0),
                this._queueCallback(
                    () => {
                        t.style.height = "auto";
                    },
                    t,
                    !0
                );
        }
        _slideUp(t, e) {
            const i = t.clientHeight;
            (t.style.height = `${i}px`),
                setTimeout(() => {
                    t.style.height = "0px";
                }, 0),
                this._queueCallback(
                    () => {
                        "function" == typeof e && e();
                    },
                    t,
                    !0
                );
        }
        _toggleGroupItems(t) {
            let e = t.target;
            e.classList.contains(yn) || (e = e.closest(On));
            !0 === this._config.groupsAutoCollapse &&
                this._getSiblings(e.parentNode, (t) =>
                    Boolean(
                        t.classList.contains("nav-group") &&
                            t.classList.contains(bn)
                    )
                ).forEach((t) => {
                    this._slideUp(V.findOne(Cn, t), () => {
                        t.classList.remove(bn),
                            t.setAttribute("aria-expanded", !1);
                    });
                }),
                e.parentNode.classList.contains(bn)
                    ? this._slideUp(V.findOne(Cn, e.parentNode), () => {
                          e.parentNode.classList.remove(bn),
                              e.parentNode.setAttribute("aria-expanded", !1);
                      })
                    : (e.parentNode.classList.add(bn),
                      e.parentNode.setAttribute("aria-expanded", !0),
                      this._slideDown(V.findOne(Cn, e.parentNode)));
        }
        _addEventListeners() {
            P.on(this._element, wn, On, (t) => {
                t.preventDefault(), this._toggleGroupItems(t, this);
            });
        }
        static navigationInterface(t, e) {
            const i = Tn.getOrCreateInstance(t, e);
            if ("string" == typeof e) {
                if (void 0 === i[e])
                    throw new TypeError(`No method named "${e}"`);
                i[e]();
            }
        }
        static jQueryInterface(t) {
            return this.each(function () {
                Tn.navigationInterface(this, t);
            });
        }
    }
    P.on(window, En, () => {
        Array.from(
            document.querySelectorAll('[data-coreui="navigation"]')
        ).forEach((t) => {
            Tn.navigationInterface(t);
        });
    }),
        m(Tn);
    const Ln = "offcanvas",
        kn = ".coreui.offcanvas",
        xn = `load${kn}.data-api`,
        Dn = { backdrop: !0, keyboard: !0, scroll: !1 },
        Nn = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" },
        Sn = "show",
        In = ".offcanvas.show",
        $n = `show${kn}`,
        Pn = `shown${kn}`,
        Mn = `hide${kn}`,
        jn = `hidden${kn}`,
        Hn = `click${kn}.data-api`,
        Bn = `keydown.dismiss${kn}`;
    class Rn extends H {
        constructor(t, e) {
            super(t),
                (this._config = this._getConfig(e)),
                (this._isShown = !1),
                (this._backdrop = this._initializeBackDrop()),
                (this._focustrap = this._initializeFocusTrap()),
                this._addEventListeners();
        }
        static get NAME() {
            return Ln;
        }
        static get Default() {
            return Dn;
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t);
        }
        show(t) {
            this._isShown ||
                P.trigger(this._element, $n, { relatedTarget: t })
                    .defaultPrevented ||
                ((this._isShown = !0),
                (this._element.style.visibility = "visible"),
                this._backdrop.show(),
                this._config.scroll || new Bi().hide(),
                this._element.removeAttribute("aria-hidden"),
                this._element.setAttribute("aria-modal", !0),
                this._element.setAttribute("role", "dialog"),
                this._element.classList.add(Sn),
                this._queueCallback(
                    () => {
                        this._config.scroll || this._focustrap.activate(),
                            P.trigger(this._element, Pn, { relatedTarget: t });
                    },
                    this._element,
                    !0
                ));
        }
        hide() {
            this._isShown &&
                (P.trigger(this._element, Mn).defaultPrevented ||
                    (this._focustrap.deactivate(),
                    this._element.blur(),
                    (this._isShown = !1),
                    this._element.classList.remove(Sn),
                    this._backdrop.hide(),
                    this._queueCallback(
                        () => {
                            this._element.setAttribute("aria-hidden", !0),
                                this._element.removeAttribute("aria-modal"),
                                this._element.removeAttribute("role"),
                                (this._element.style.visibility = "hidden"),
                                this._config.scroll || new Bi().reset(),
                                P.trigger(this._element, jn);
                        },
                        this._element,
                        !0
                    )));
        }
        dispose() {
            this._backdrop.dispose(),
                this._focustrap.deactivate(),
                super.dispose();
        }
        _getConfig(t) {
            return (
                (t = {
                    ...Dn,
                    ...U.getDataAttributes(this._element),
                    ...("object" == typeof t ? t : {}),
                }),
                a(Ln, t, Nn),
                t
            );
        }
        _initializeBackDrop() {
            return new Fi({
                className: "offcanvas-backdrop",
                isVisible: this._config.backdrop,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: () => this.hide(),
            });
        }
        _initializeFocusTrap() {
            return new Gi({ trapElement: this._element });
        }
        _addEventListeners() {
            P.on(this._element, Bn, (t) => {
                this._config.keyboard && "Escape" === t.key && this.hide();
            });
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = Rn.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (
                        void 0 === e[t] ||
                        t.startsWith("_") ||
                        "constructor" === t
                    )
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    P.on(document, Hn, '[data-coreui-toggle="offcanvas"]', function (t) {
        const e = n(this);
        if (
            (["A", "AREA"].includes(this.tagName) && t.preventDefault(),
            c(this))
        )
            return;
        P.one(e, jn, () => {
            l(this) && this.focus();
        });
        const i = V.findOne(In);
        i && i !== e && Rn.getInstance(i).hide(),
            Rn.getOrCreateInstance(e).toggle(this);
    }),
        P.on(window, xn, () =>
            V.find(In).forEach((t) => Rn.getOrCreateInstance(t).show())
        ),
        B(Rn),
        m(Rn);
    const Wn = new Set([
            "background",
            "cite",
            "href",
            "itemtype",
            "longdesc",
            "poster",
            "src",
            "xlink:href",
        ]),
        qn = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
        zn =
            /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
        Fn = (t, e) => {
            const i = t.nodeName.toLowerCase();
            if (e.includes(i))
                return (
                    !Wn.has(i) ||
                    Boolean(qn.test(t.nodeValue) || zn.test(t.nodeValue))
                );
            const n = e.filter((t) => t instanceof RegExp);
            for (let t = 0, e = n.length; t < e; t++)
                if (n[t].test(i)) return !0;
            return !1;
        };
    function Un(t, e, i) {
        if (!t.length) return t;
        if (i && "function" == typeof i) return i(t);
        const n = new window.DOMParser().parseFromString(t, "text/html"),
            s = [].concat(...n.body.querySelectorAll("*"));
        for (let t = 0, i = s.length; t < i; t++) {
            const i = s[t],
                n = i.nodeName.toLowerCase();
            if (!Object.keys(e).includes(n)) {
                i.remove();
                continue;
            }
            const o = [].concat(...i.attributes),
                r = [].concat(e["*"] || [], e[n] || []);
            o.forEach((t) => {
                Fn(t, r) || i.removeAttribute(t.nodeName);
            });
        }
        return n.body.innerHTML;
    }
    const Vn = "tooltip",
        Kn = ".coreui.tooltip",
        Yn = new Set(["sanitize", "allowList", "sanitizeFn"]),
        Xn = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(array|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacements: "array",
            boundary: "(string|element)",
            customClass: "(string|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            allowList: "object",
            popperConfig: "(null|object|function)",
        },
        Qn = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: g() ? "left" : "right",
            BOTTOM: "bottom",
            LEFT: g() ? "right" : "left",
        },
        Gn = {
            animation: !0,
            template:
                '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: [0, 0],
            container: !1,
            fallbackPlacements: ["top", "right", "bottom", "left"],
            boundary: "clippingParents",
            customClass: "",
            sanitize: !0,
            sanitizeFn: null,
            allowList: {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "srcset", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: [],
            },
            popperConfig: null,
        },
        Zn = {
            HIDE: `hide${Kn}`,
            HIDDEN: `hidden${Kn}`,
            SHOW: `show${Kn}`,
            SHOWN: `shown${Kn}`,
            INSERTED: `inserted${Kn}`,
            CLICK: `click${Kn}`,
            FOCUSIN: `focusin${Kn}`,
            FOCUSOUT: `focusout${Kn}`,
            MOUSEENTER: `mouseenter${Kn}`,
            MOUSELEAVE: `mouseleave${Kn}`,
        },
        Jn = "fade",
        ts = "show",
        es = "show",
        is = "out",
        ns = ".tooltip-inner",
        ss = ".modal",
        os = "hide.coreui.modal",
        rs = "hover",
        as = "focus";
    class ls extends H {
        constructor(t, e) {
            if (void 0 === hi)
                throw new TypeError(
                    "Bootstrap's tooltips require Popper (https://popper.js.org)"
                );
            super(t),
                (this._isEnabled = !0),
                (this._timeout = 0),
                (this._hoverState = ""),
                (this._activeTrigger = {}),
                (this._popper = null),
                (this._config = this._getConfig(e)),
                (this.tip = null),
                this._setListeners();
        }
        static get Default() {
            return Gn;
        }
        static get NAME() {
            return Vn;
        }
        static get Event() {
            return Zn;
        }
        static get DefaultType() {
            return Xn;
        }
        enable() {
            this._isEnabled = !0;
        }
        disable() {
            this._isEnabled = !1;
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled;
        }
        toggle(t) {
            if (this._isEnabled)
                if (t) {
                    const e = this._initializeOnDelegatedTarget(t);
                    (e._activeTrigger.click = !e._activeTrigger.click),
                        e._isWithActiveTrigger()
                            ? e._enter(null, e)
                            : e._leave(null, e);
                } else {
                    if (this.getTipElement().classList.contains(ts))
                        return void this._leave(null, this);
                    this._enter(null, this);
                }
        }
        dispose() {
            clearTimeout(this._timeout),
                P.off(this._element.closest(ss), os, this._hideModalHandler),
                this.tip && this.tip.remove(),
                this._disposePopper(),
                super.dispose();
        }
        show() {
            if ("none" === this._element.style.display)
                throw new Error("Please use show on visible elements");
            if (!this.isWithContent() || !this._isEnabled) return;
            const t = P.trigger(this._element, this.constructor.Event.SHOW),
                e = h(this._element),
                i =
                    null === e
                        ? this._element.ownerDocument.documentElement.contains(
                              this._element
                          )
                        : e.contains(this._element);
            if (t.defaultPrevented || !i) return;
            "tooltip" === this.constructor.NAME &&
                this.tip &&
                this.getTitle() !== this.tip.querySelector(ns).innerHTML &&
                (this._disposePopper(), this.tip.remove(), (this.tip = null));
            const n = this.getTipElement(),
                s = ((t) => {
                    do {
                        t += Math.floor(1e6 * Math.random());
                    } while (document.getElementById(t));
                    return t;
                })(this.constructor.NAME);
            n.setAttribute("id", s),
                this._element.setAttribute("aria-describedby", s),
                this._config.animation && n.classList.add(Jn);
            const o =
                    "function" == typeof this._config.placement
                        ? this._config.placement.call(this, n, this._element)
                        : this._config.placement,
                r = this._getAttachment(o);
            this._addAttachmentClass(r);
            const { container: a } = this._config;
            j.set(n, this.constructor.DATA_KEY, this),
                this._element.ownerDocument.documentElement.contains(
                    this.tip
                ) ||
                    (a.append(n),
                    P.trigger(this._element, this.constructor.Event.INSERTED)),
                this._popper
                    ? this._popper.update()
                    : (this._popper = ci(
                          this._element,
                          n,
                          this._getPopperConfig(r)
                      )),
                n.classList.add(ts);
            const l = this._resolvePossibleFunction(this._config.customClass);
            l && n.classList.add(...l.split(" ")),
                "ontouchstart" in document.documentElement &&
                    [].concat(...document.body.children).forEach((t) => {
                        P.on(t, "mouseover", d);
                    });
            const c = this.tip.classList.contains(Jn);
            this._queueCallback(
                () => {
                    const t = this._hoverState;
                    (this._hoverState = null),
                        P.trigger(this._element, this.constructor.Event.SHOWN),
                        t === is && this._leave(null, this);
                },
                this.tip,
                c
            );
        }
        hide() {
            if (!this._popper) return;
            const t = this.getTipElement();
            if (
                P.trigger(this._element, this.constructor.Event.HIDE)
                    .defaultPrevented
            )
                return;
            t.classList.remove(ts),
                "ontouchstart" in document.documentElement &&
                    []
                        .concat(...document.body.children)
                        .forEach((t) => P.off(t, "mouseover", d)),
                (this._activeTrigger.click = !1),
                (this._activeTrigger.focus = !1),
                (this._activeTrigger.hover = !1);
            const e = this.tip.classList.contains(Jn);
            this._queueCallback(
                () => {
                    this._isWithActiveTrigger() ||
                        (this._hoverState !== es && t.remove(),
                        this._cleanTipClass(),
                        this._element.removeAttribute("aria-describedby"),
                        P.trigger(this._element, this.constructor.Event.HIDDEN),
                        this._disposePopper());
                },
                this.tip,
                e
            ),
                (this._hoverState = "");
        }
        update() {
            null !== this._popper && this._popper.update();
        }
        isWithContent() {
            return Boolean(this.getTitle());
        }
        getTipElement() {
            if (this.tip) return this.tip;
            const t = document.createElement("div");
            t.innerHTML = this._config.template;
            const e = t.children[0];
            return (
                this.setContent(e),
                e.classList.remove(Jn, ts),
                (this.tip = e),
                this.tip
            );
        }
        setContent(t) {
            this._sanitizeAndSetContent(t, this.getTitle(), ns);
        }
        _sanitizeAndSetContent(t, e, i) {
            const n = V.findOne(i, t);
            e || !n ? this.setElementContent(n, e) : n.remove();
        }
        setElementContent(t, e) {
            if (null !== t)
                return o(e)
                    ? ((e = r(e)),
                      void (this._config.html
                          ? e.parentNode !== t &&
                            ((t.innerHTML = ""), t.append(e))
                          : (t.textContent = e.textContent)))
                    : void (this._config.html
                          ? (this._config.sanitize &&
                                (e = Un(
                                    e,
                                    this._config.allowList,
                                    this._config.sanitizeFn
                                )),
                            (t.innerHTML = e))
                          : (t.textContent = e));
        }
        getTitle() {
            const t =
                this._element.getAttribute("data-coreui-original-title") ||
                this._config.title;
            return this._resolvePossibleFunction(t);
        }
        updateAttachment(t) {
            return "right" === t ? "end" : "left" === t ? "start" : t;
        }
        _initializeOnDelegatedTarget(t, e) {
            return (
                e ||
                this.constructor.getOrCreateInstance(
                    t.delegateTarget,
                    this._getDelegateConfig()
                )
            );
        }
        _getOffset() {
            const { offset: t } = this._config;
            return "string" == typeof t
                ? t.split(",").map((t) => Number.parseInt(t, 10))
                : "function" == typeof t
                ? (e) => t(e, this._element)
                : t;
        }
        _resolvePossibleFunction(t) {
            return "function" == typeof t ? t.call(this._element) : t;
        }
        _getPopperConfig(t) {
            const e = {
                placement: t,
                modifiers: [
                    {
                        name: "flip",
                        options: {
                            fallbackPlacements: this._config.fallbackPlacements,
                        },
                    },
                    { name: "offset", options: { offset: this._getOffset() } },
                    {
                        name: "preventOverflow",
                        options: { boundary: this._config.boundary },
                    },
                    {
                        name: "arrow",
                        options: { element: `.${this.constructor.NAME}-arrow` },
                    },
                    {
                        name: "onChange",
                        enabled: !0,
                        phase: "afterWrite",
                        fn: (t) => this._handlePopperPlacementChange(t),
                    },
                ],
                onFirstUpdate: (t) => {
                    t.options.placement !== t.placement &&
                        this._handlePopperPlacementChange(t);
                },
            };
            return {
                ...e,
                ...("function" == typeof this._config.popperConfig
                    ? this._config.popperConfig(e)
                    : this._config.popperConfig),
            };
        }
        _addAttachmentClass(t) {
            this.getTipElement().classList.add(
                `${this._getBasicClassPrefix()}-${this.updateAttachment(t)}`
            );
        }
        _getAttachment(t) {
            return Qn[t.toUpperCase()];
        }
        _setListeners() {
            this._config.trigger.split(" ").forEach((t) => {
                if ("click" === t)
                    P.on(
                        this._element,
                        this.constructor.Event.CLICK,
                        this._config.selector,
                        (t) => this.toggle(t)
                    );
                else if ("manual" !== t) {
                    const e =
                            t === rs
                                ? this.constructor.Event.MOUSEENTER
                                : this.constructor.Event.FOCUSIN,
                        i =
                            t === rs
                                ? this.constructor.Event.MOUSELEAVE
                                : this.constructor.Event.FOCUSOUT;
                    P.on(this._element, e, this._config.selector, (t) =>
                        this._enter(t)
                    ),
                        P.on(this._element, i, this._config.selector, (t) =>
                            this._leave(t)
                        );
                }
            }),
                (this._hideModalHandler = () => {
                    this._element && this.hide();
                }),
                P.on(this._element.closest(ss), os, this._hideModalHandler),
                this._config.selector
                    ? (this._config = {
                          ...this._config,
                          trigger: "manual",
                          selector: "",
                      })
                    : this._fixTitle();
        }
        _fixTitle() {
            const t = this._element.getAttribute("title"),
                e = typeof this._element.getAttribute(
                    "data-coreui-original-title"
                );
            (t || "string" !== e) &&
                (this._element.setAttribute(
                    "data-coreui-original-title",
                    t || ""
                ),
                !t ||
                    this._element.getAttribute("aria-label") ||
                    this._element.textContent ||
                    this._element.setAttribute("aria-label", t),
                this._element.setAttribute("title", ""));
        }
        _enter(t, e) {
            (e = this._initializeOnDelegatedTarget(t, e)),
                t && (e._activeTrigger["focusin" === t.type ? as : rs] = !0),
                e.getTipElement().classList.contains(ts) || e._hoverState === es
                    ? (e._hoverState = es)
                    : (clearTimeout(e._timeout),
                      (e._hoverState = es),
                      e._config.delay && e._config.delay.show
                          ? (e._timeout = setTimeout(() => {
                                e._hoverState === es && e.show();
                            }, e._config.delay.show))
                          : e.show());
        }
        _leave(t, e) {
            (e = this._initializeOnDelegatedTarget(t, e)),
                t &&
                    (e._activeTrigger["focusout" === t.type ? as : rs] =
                        e._element.contains(t.relatedTarget)),
                e._isWithActiveTrigger() ||
                    (clearTimeout(e._timeout),
                    (e._hoverState = is),
                    e._config.delay && e._config.delay.hide
                        ? (e._timeout = setTimeout(() => {
                              e._hoverState === is && e.hide();
                          }, e._config.delay.hide))
                        : e.hide());
        }
        _isWithActiveTrigger() {
            for (const t in this._activeTrigger)
                if (this._activeTrigger[t]) return !0;
            return !1;
        }
        _getConfig(t) {
            const e = U.getDataAttributes(this._element);
            return (
                Object.keys(e).forEach((t) => {
                    Yn.has(t) && delete e[t];
                }),
                ((t = {
                    ...this.constructor.Default,
                    ...e,
                    ...("object" == typeof t && t ? t : {}),
                }).container =
                    !1 === t.container ? document.body : r(t.container)),
                "number" == typeof t.delay &&
                    (t.delay = { show: t.delay, hide: t.delay }),
                "number" == typeof t.title && (t.title = t.title.toString()),
                "number" == typeof t.content &&
                    (t.content = t.content.toString()),
                a(Vn, t, this.constructor.DefaultType),
                t.sanitize &&
                    (t.template = Un(t.template, t.allowList, t.sanitizeFn)),
                t
            );
        }
        _getDelegateConfig() {
            const t = {};
            for (const e in this._config)
                this.constructor.Default[e] !== this._config[e] &&
                    (t[e] = this._config[e]);
            return t;
        }
        _cleanTipClass() {
            const t = this.getTipElement(),
                e = new RegExp(
                    `(^|\\s)${this._getBasicClassPrefix()}\\S+`,
                    "g"
                ),
                i = t.getAttribute("class").match(e);
            null !== i &&
                i.length > 0 &&
                i.map((t) => t.trim()).forEach((e) => t.classList.remove(e));
        }
        _getBasicClassPrefix() {
            return "bs-tooltip";
        }
        _handlePopperPlacementChange(t) {
            const { state: e } = t;
            e &&
                ((this.tip = e.elements.popper),
                this._cleanTipClass(),
                this._addAttachmentClass(this._getAttachment(e.placement)));
        }
        _disposePopper() {
            this._popper && (this._popper.destroy(), (this._popper = null));
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = ls.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    m(ls);
    const cs = ".coreui.popover",
        hs = {
            ...ls.Default,
            placement: "right",
            offset: [0, 8],
            trigger: "click",
            content: "",
            template:
                '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        },
        ds = { ...ls.DefaultType, content: "(string|element|function)" },
        us = {
            HIDE: `hide${cs}`,
            HIDDEN: `hidden${cs}`,
            SHOW: `show${cs}`,
            SHOWN: `shown${cs}`,
            INSERTED: `inserted${cs}`,
            CLICK: `click${cs}`,
            FOCUSIN: `focusin${cs}`,
            FOCUSOUT: `focusout${cs}`,
            MOUSEENTER: `mouseenter${cs}`,
            MOUSELEAVE: `mouseleave${cs}`,
        };
    class fs extends ls {
        static get Default() {
            return hs;
        }
        static get NAME() {
            return "popover";
        }
        static get Event() {
            return us;
        }
        static get DefaultType() {
            return ds;
        }
        isWithContent() {
            return this.getTitle() || this._getContent();
        }
        setContent(t) {
            this._sanitizeAndSetContent(t, this.getTitle(), ".popover-header"),
                this._sanitizeAndSetContent(
                    t,
                    this._getContent(),
                    ".popover-body"
                );
        }
        _getContent() {
            return this._resolvePossibleFunction(this._config.content);
        }
        _getBasicClassPrefix() {
            return "bs-popover";
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = fs.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    m(fs);
    const ps = "scrollspy",
        gs = ".coreui.scrollspy",
        ms = { offset: 10, method: "auto", target: "" },
        _s = { offset: "number", method: "string", target: "(string|element)" },
        vs = `activate${gs}`,
        bs = `scroll${gs}`,
        ys = `load${gs}.data-api`,
        ws = "active",
        Es = ".nav-link, .list-group-item, .dropdown-item",
        As = "position";
    class Cs extends H {
        constructor(t, e) {
            super(t),
                (this._scrollElement =
                    "BODY" === this._element.tagName ? window : this._element),
                (this._config = this._getConfig(e)),
                (this._offsets = []),
                (this._targets = []),
                (this._activeTarget = null),
                (this._scrollHeight = 0),
                P.on(this._scrollElement, bs, () => this._process()),
                this.refresh(),
                this._process();
        }
        static get Default() {
            return ms;
        }
        static get NAME() {
            return ps;
        }
        refresh() {
            const t =
                    this._scrollElement === this._scrollElement.window
                        ? "offset"
                        : As,
                e = "auto" === this._config.method ? t : this._config.method,
                n = e === As ? this._getScrollTop() : 0;
            (this._offsets = []),
                (this._targets = []),
                (this._scrollHeight = this._getScrollHeight()),
                V.find(Es, this._config.target)
                    .map((t) => {
                        const s = i(t),
                            o = s ? V.findOne(s) : null;
                        if (o) {
                            const t = o.getBoundingClientRect();
                            if (t.width || t.height)
                                return [U[e](o).top + n, s];
                        }
                        return null;
                    })
                    .filter((t) => t)
                    .sort((t, e) => t[0] - e[0])
                    .forEach((t) => {
                        this._offsets.push(t[0]), this._targets.push(t[1]);
                    });
        }
        dispose() {
            P.off(this._scrollElement, gs), super.dispose();
        }
        _getConfig(t) {
            return (
                ((t = {
                    ...ms,
                    ...U.getDataAttributes(this._element),
                    ...("object" == typeof t && t ? t : {}),
                }).target = r(t.target) || document.documentElement),
                a(ps, t, _s),
                t
            );
        }
        _getScrollTop() {
            return this._scrollElement === window
                ? this._scrollElement.pageYOffset
                : this._scrollElement.scrollTop;
        }
        _getScrollHeight() {
            return (
                this._scrollElement.scrollHeight ||
                Math.max(
                    document.body.scrollHeight,
                    document.documentElement.scrollHeight
                )
            );
        }
        _getOffsetHeight() {
            return this._scrollElement === window
                ? window.innerHeight
                : this._scrollElement.getBoundingClientRect().height;
        }
        _process() {
            const t = this._getScrollTop() + this._config.offset,
                e = this._getScrollHeight(),
                i = this._config.offset + e - this._getOffsetHeight();
            if ((this._scrollHeight !== e && this.refresh(), t >= i)) {
                const t = this._targets[this._targets.length - 1];
                this._activeTarget !== t && this._activate(t);
            } else {
                if (
                    this._activeTarget &&
                    t < this._offsets[0] &&
                    this._offsets[0] > 0
                )
                    return (this._activeTarget = null), void this._clear();
                for (let e = this._offsets.length; e--; )
                    this._activeTarget !== this._targets[e] &&
                        t >= this._offsets[e] &&
                        (void 0 === this._offsets[e + 1] ||
                            t < this._offsets[e + 1]) &&
                        this._activate(this._targets[e]);
            }
        }
        _activate(t) {
            (this._activeTarget = t), this._clear();
            const e = Es.split(",").map(
                    (e) => `${e}[data-coreui-target="${t}"],${e}[href="${t}"]`
                ),
                i = V.findOne(e.join(","), this._config.target);
            i.classList.add(ws),
                i.classList.contains("dropdown-item")
                    ? V.findOne(
                          ".dropdown-toggle",
                          i.closest(".dropdown")
                      ).classList.add(ws)
                    : V.parents(i, ".nav, .list-group").forEach((t) => {
                          V.prev(t, ".nav-link, .list-group-item").forEach(
                              (t) => t.classList.add(ws)
                          ),
                              V.prev(t, ".nav-item").forEach((t) => {
                                  V.children(t, ".nav-link").forEach((t) =>
                                      t.classList.add(ws)
                                  );
                              });
                      }),
                P.trigger(this._scrollElement, vs, { relatedTarget: t });
        }
        _clear() {
            V.find(Es, this._config.target)
                .filter((t) => t.classList.contains(ws))
                .forEach((t) => t.classList.remove(ws));
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = Cs.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    P.on(window, ys, () => {
        V.find('[data-coreui-spy="scroll"]').forEach((t) => new Cs(t));
    }),
        m(Cs);
    const Os = "sidebar",
        Ts = ".coreui.sidebar",
        Ls = {},
        ks = {},
        xs = "hide",
        Ds = "show",
        Ns = "sidebar-narrow",
        Ss = "sidebar-narrow-unfoldable",
        Is = `hide${Ts}`,
        $s = `hidden${Ts}`,
        Ps = `show${Ts}`,
        Ms = `shown${Ts}`,
        js = `click${Ts}.data-api`,
        Hs = `load${Ts}.data-api`,
        Bs = ".sidebar";
    class Rs extends H {
        constructor(t, e) {
            super(t),
                (this._config = this._getConfig(e)),
                (this._show = this._isVisible()),
                (this._mobile = this._isMobile()),
                (this._overlaid = this._isOverlaid()),
                (this._narrow = this._isNarrow()),
                (this._unfoldable = this._isUnfoldable()),
                (this._backdrop = null),
                this._addEventListeners();
        }
        static get Default() {
            return Ls;
        }
        static get DefaultType() {
            return ks;
        }
        static get NAME() {
            return Os;
        }
        show() {
            P.trigger(this._element, Ps),
                this._element.classList.contains(xs) &&
                    this._element.classList.remove(xs),
                this._isMobile() &&
                    (this._element.classList.add(Ds), this._showBackdrop()),
                this._queueCallback(
                    () => {
                        !0 === this._isVisible() &&
                            ((this._show = !0),
                            (this._isMobile() || this._isOverlaid()) &&
                                this._addClickOutListener(),
                            P.trigger(this._element, Ms));
                    },
                    this._element,
                    !0
                );
        }
        hide() {
            P.trigger(this._element, Is),
                this._element.classList.contains(Ds) &&
                    this._element.classList.remove(Ds),
                this._isMobile()
                    ? this._removeBackdrop()
                    : this._element.classList.add(xs),
                this._queueCallback(
                    () => {
                        !1 === this._isVisible() &&
                            ((this._show = !1),
                            (this._isMobile() || this._isOverlaid()) &&
                                this._removeClickOutListener(),
                            P.trigger(this._element, $s));
                    },
                    this._element,
                    !0
                );
        }
        toggle() {
            this._isVisible() ? this.hide() : this.show();
        }
        narrow() {
            this._isMobile() || (this._addClassName(Ns), (this._narrow = !0));
        }
        unfoldable() {
            this._isMobile() ||
                (this._addClassName(Ss), (this._unfoldable = !0));
        }
        reset() {
            this._isMobile() ||
                (this._narrow &&
                    (this._element.classList.remove(Ns), (this._narrow = !1)),
                this._unfoldable &&
                    (this._element.classList.remove(Ss),
                    (this._unfoldable = !1)));
        }
        toggleNarrow() {
            this._narrow ? this.reset() : this.narrow();
        }
        toggleUnfoldable() {
            this._unfoldable ? this.reset() : this.unfoldable();
        }
        _getConfig(t) {
            return (
                (t = {
                    ...Ls,
                    ...U.getDataAttributes(this._element),
                    ...("object" == typeof t ? t : {}),
                }),
                a(Os, t, ks),
                t
            );
        }
        _isMobile() {
            return Boolean(
                window
                    .getComputedStyle(this._element, null)
                    .getPropertyValue("--cui-is-mobile")
            );
        }
        _isNarrow() {
            return this._element.classList.contains(Ns);
        }
        _isOverlaid() {
            return this._element.classList.contains("sidebar-overlaid");
        }
        _isUnfoldable() {
            return this._element.classList.contains(Ss);
        }
        _isVisible() {
            const t = this._element.getBoundingClientRect();
            return (
                t.top >= 0 &&
                t.left >= 0 &&
                t.bottom <=
                    (window.innerHeight ||
                        document.documentElement.clientHeight) &&
                t.right <=
                    (window.innerWidth || document.documentElement.clientWidth)
            );
        }
        _addClassName(t) {
            this._element.classList.add(t);
        }
        _removeBackdrop() {
            this._backdrop &&
                (this._backdrop.remove(), (this._backdrop = null));
        }
        _showBackdrop() {
            this._backdrop ||
                ((this._backdrop = document.createElement("div")),
                (this._backdrop.className = "sidebar-backdrop"),
                this._backdrop.classList.add("fade"),
                document.body.append(this._backdrop),
                u(this._backdrop),
                this._backdrop.classList.add(Ds));
        }
        _clickOutListener(t, e) {
            null === t.target.closest(Bs) &&
                (t.preventDefault(), t.stopPropagation(), e.hide());
        }
        _addClickOutListener() {
            P.on(document, js, (t) => {
                this._clickOutListener(t, this);
            });
        }
        _removeClickOutListener() {
            P.off(document, js);
        }
        _addEventListeners() {
            this._mobile && this._show && this._addClickOutListener(),
                this._overlaid && this._show && this._addClickOutListener(),
                P.on(this._element, js, "[data-coreui-toggle]", (t) => {
                    t.preventDefault();
                    const e = U.getDataAttribute(t.target, "toggle");
                    "narrow" === e && this.toggleNarrow(),
                        "unfoldable" === e && this.toggleUnfoldable();
                }),
                P.on(
                    this._element,
                    js,
                    '[data-coreui-close="sidebar"]',
                    (t) => {
                        t.preventDefault(), this.hide();
                    }
                ),
                P.on(window, "resize", () => {
                    this._isMobile() && this._isVisible() && this.hide();
                });
        }
        static sidebarInterface(t, e) {
            const i = Rs.getOrCreateInstance(t, e);
            if ("string" == typeof e) {
                if (void 0 === i[e])
                    throw new TypeError(`No method named "${e}"`);
                i[e]();
            }
        }
        static jQueryInterface(t) {
            return this.each(function () {
                Rs.sidebarInterface(this, t);
            });
        }
    }
    P.on(window, Hs, () => {
        Array.from(document.querySelectorAll(Bs)).forEach((t) => {
            Rs.sidebarInterface(t);
        });
    }),
        m(Rs);
    const Ws = "active",
        qs = "fade",
        zs = "show",
        Fs = ".active",
        Us = ":scope > li > .active";
    class Vs extends H {
        static get NAME() {
            return "tab";
        }
        show() {
            if (
                this._element.parentNode &&
                this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                this._element.classList.contains(Ws)
            )
                return;
            let t;
            const e = n(this._element),
                i = this._element.closest(".nav, .list-group");
            if (i) {
                const e = "UL" === i.nodeName || "OL" === i.nodeName ? Us : Fs;
                (t = V.find(e, i)), (t = t[t.length - 1]);
            }
            const s = t
                ? P.trigger(t, "hide.coreui.tab", {
                      relatedTarget: this._element,
                  })
                : null;
            if (
                P.trigger(this._element, "show.coreui.tab", {
                    relatedTarget: t,
                }).defaultPrevented ||
                (null !== s && s.defaultPrevented)
            )
                return;
            this._activate(this._element, i);
            const o = () => {
                P.trigger(t, "hidden.coreui.tab", {
                    relatedTarget: this._element,
                }),
                    P.trigger(this._element, "shown.coreui.tab", {
                        relatedTarget: t,
                    });
            };
            e ? this._activate(e, e.parentNode, o) : o();
        }
        _activate(t, e, i) {
            const n = (
                    !e || ("UL" !== e.nodeName && "OL" !== e.nodeName)
                        ? V.children(e, Fs)
                        : V.find(Us, e)
                )[0],
                s = i && n && n.classList.contains(qs),
                o = () => this._transitionComplete(t, n, i);
            n && s
                ? (n.classList.remove(zs), this._queueCallback(o, t, !0))
                : o();
        }
        _transitionComplete(t, e, i) {
            if (e) {
                e.classList.remove(Ws);
                const t = V.findOne(
                    ":scope > .dropdown-menu .active",
                    e.parentNode
                );
                t && t.classList.remove(Ws),
                    "tab" === e.getAttribute("role") &&
                        e.setAttribute("aria-selected", !1);
            }
            t.classList.add(Ws),
                "tab" === t.getAttribute("role") &&
                    t.setAttribute("aria-selected", !0),
                u(t),
                t.classList.contains(qs) && t.classList.add(zs);
            let n = t.parentNode;
            if (
                (n && "LI" === n.nodeName && (n = n.parentNode),
                n && n.classList.contains("dropdown-menu"))
            ) {
                const e = t.closest(".dropdown");
                e &&
                    V.find(".dropdown-toggle", e).forEach((t) =>
                        t.classList.add(Ws)
                    ),
                    t.setAttribute("aria-expanded", !0);
            }
            i && i();
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = Vs.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    P.on(
        document,
        "click.coreui.tab.data-api",
        '[data-coreui-toggle="tab"], [data-coreui-toggle="pill"], [data-coreui-toggle="list"]',
        function (t) {
            ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
                c(this) || Vs.getOrCreateInstance(this).show();
        }
    ),
        m(Vs);
    const Ks = "toast",
        Ys = ".coreui.toast",
        Xs = `mouseover${Ys}`,
        Qs = `mouseout${Ys}`,
        Gs = `focusin${Ys}`,
        Zs = `focusout${Ys}`,
        Js = `hide${Ys}`,
        to = `hidden${Ys}`,
        eo = `show${Ys}`,
        io = `shown${Ys}`,
        no = "hide",
        so = "show",
        oo = "showing",
        ro = { animation: "boolean", autohide: "boolean", delay: "number" },
        ao = { animation: !0, autohide: !0, delay: 5e3 };
    class lo extends H {
        constructor(t, e) {
            super(t),
                (this._config = this._getConfig(e)),
                (this._timeout = null),
                (this._hasMouseInteraction = !1),
                (this._hasKeyboardInteraction = !1),
                this._setListeners();
        }
        static get DefaultType() {
            return ro;
        }
        static get Default() {
            return ao;
        }
        static get NAME() {
            return Ks;
        }
        show() {
            P.trigger(this._element, eo).defaultPrevented ||
                (this._clearTimeout(),
                this._config.animation && this._element.classList.add("fade"),
                this._element.classList.remove(no),
                u(this._element),
                this._element.classList.add(so),
                this._element.classList.add(oo),
                this._queueCallback(
                    () => {
                        this._element.classList.remove(oo),
                            P.trigger(this._element, io),
                            this._maybeScheduleHide();
                    },
                    this._element,
                    this._config.animation
                ));
        }
        hide() {
            this._element.classList.contains(so) &&
                (P.trigger(this._element, Js).defaultPrevented ||
                    (this._element.classList.add(oo),
                    this._queueCallback(
                        () => {
                            this._element.classList.add(no),
                                this._element.classList.remove(oo),
                                this._element.classList.remove(so),
                                P.trigger(this._element, to);
                        },
                        this._element,
                        this._config.animation
                    )));
        }
        dispose() {
            this._clearTimeout(),
                this._element.classList.contains(so) &&
                    this._element.classList.remove(so),
                super.dispose();
        }
        _getConfig(t) {
            return (
                (t = {
                    ...ao,
                    ...U.getDataAttributes(this._element),
                    ...("object" == typeof t && t ? t : {}),
                }),
                a(Ks, t, this.constructor.DefaultType),
                t
            );
        }
        _maybeScheduleHide() {
            this._config.autohide &&
                (this._hasMouseInteraction ||
                    this._hasKeyboardInteraction ||
                    (this._timeout = setTimeout(() => {
                        this.hide();
                    }, this._config.delay)));
        }
        _onInteraction(t, e) {
            switch (t.type) {
                case "mouseover":
                case "mouseout":
                    this._hasMouseInteraction = e;
                    break;
                case "focusin":
                case "focusout":
                    this._hasKeyboardInteraction = e;
            }
            if (e) return void this._clearTimeout();
            const i = t.relatedTarget;
            this._element === i ||
                this._element.contains(i) ||
                this._maybeScheduleHide();
        }
        _setListeners() {
            P.on(this._element, Xs, (t) => this._onInteraction(t, !0)),
                P.on(this._element, Qs, (t) => this._onInteraction(t, !1)),
                P.on(this._element, Gs, (t) => this._onInteraction(t, !0)),
                P.on(this._element, Zs, (t) => this._onInteraction(t, !1));
        }
        _clearTimeout() {
            clearTimeout(this._timeout), (this._timeout = null);
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = lo.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    return (
        B(lo),
        m(lo),
        {
            Alert: R,
            Button: q,
            Carousel: _t,
            Collapse: $t,
            Dropdown: Mi,
            Modal: un,
            Navigation: Tn,
            OffCanvas: Rn,
            Popover: fs,
            ScrollSpy: Cs,
            Sidebar: Rs,
            Tab: Vs,
            Toast: lo,
            Tooltip: ls,
        }
    );
});
//# sourceMappingURL=coreui.bundle.min.js.map
