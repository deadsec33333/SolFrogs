(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const n of document.querySelectorAll('link[rel="modulepreload"]'))
        s(n);
    new MutationObserver(n=>{
        for (const r of n)
            if (r.type === "childList")
                for (const o of r.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && s(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function t(n) {
        const r = {};
        return n.integrity && (r.integrity = n.integrity),
        n.referrerPolicy && (r.referrerPolicy = n.referrerPolicy),
        n.crossOrigin === "use-credentials" ? r.credentials = "include" : n.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin",
        r
    }
    function s(n) {
        if (n.ep)
            return;
        n.ep = !0;
        const r = t(n);
        fetch(n.href, r)
    }
}
)();
const q = document.querySelector(".header__menu-toggle")
  , Se = document.querySelector(".main-menu");
q && q.addEventListener("click", ()=>{
    q.classList.toggle("active"),
    Se.classList.toggle("active")
}
);
document.querySelectorAll(".main-menu__item-link").forEach(i=>{
    i.addEventListener("click", e=>{
        e.preventDefault();
        const t = e.target.href.split("#")[1]
          , s = document.getElementById(t);
        q.classList.remove("active"),
        Se.classList.remove("active"),
        window.scrollTo({
            top: s.offsetTop - 50,
            left: 0,
            behavior: "smooth"
        })
    }
    )
}
);
setTimeout(()=>{
    document.querySelector(".section-intro__video").play()
}
, 500);
function fe(i) {
    return i !== null && typeof i == "object" && "constructor"in i && i.constructor === Object
}
function le(i, e) {
    i === void 0 && (i = {}),
    e === void 0 && (e = {}),
    Object.keys(e).forEach(t=>{
        typeof i[t] > "u" ? i[t] = e[t] : fe(e[t]) && fe(i[t]) && Object.keys(e[t]).length > 0 && le(i[t], e[t])
    }
    )
}
const ye = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: {
        blur() {},
        nodeName: ""
    },
    querySelector() {
        return null
    },
    querySelectorAll() {
        return []
    },
    getElementById() {
        return null
    },
    createEvent() {
        return {
            initEvent() {}
        }
    },
    createElement() {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName() {
                return []
            }
        }
    },
    createElementNS() {
        return {}
    },
    importNode() {
        return null
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    }
};
function V() {
    const i = typeof document < "u" ? document : {};
    return le(i, ye),
    i
}
const Oe = {
    document: ye,
    navigator: {
        userAgent: ""
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    },
    history: {
        replaceState() {},
        pushState() {},
        go() {},
        back() {}
    },
    CustomEvent: function() {
        return this
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle() {
        return {
            getPropertyValue() {
                return ""
            }
        }
    },
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia() {
        return {}
    },
    requestAnimationFrame(i) {
        return typeof setTimeout > "u" ? (i(),
        null) : setTimeout(i, 0)
    },
    cancelAnimationFrame(i) {
        typeof setTimeout > "u" || clearTimeout(i)
    }
};
function k() {
    const i = typeof window < "u" ? window : {};
    return le(i, Oe),
    i
}
function ze(i) {
    return i === void 0 && (i = ""),
    i.trim().split(" ").filter(e=>!!e.trim())
}
function ke(i) {
    const e = i;
    Object.keys(e).forEach(t=>{
        try {
            e[t] = null
        } catch {}
        try {
            delete e[t]
        } catch {}
    }
    )
}
function re(i, e) {
    return e === void 0 && (e = 0),
    setTimeout(i, e)
}
function j() {
    return Date.now()
}
function Ge(i) {
    const e = k();
    let t;
    return e.getComputedStyle && (t = e.getComputedStyle(i, null)),
    !t && i.currentStyle && (t = i.currentStyle),
    t || (t = i.style),
    t
}
function De(i, e) {
    e === void 0 && (e = "x");
    const t = k();
    let s, n, r;
    const o = Ge(i);
    return t.WebKitCSSMatrix ? (n = o.transform || o.webkitTransform,
    n.split(",").length > 6 && (n = n.split(", ").map(l=>l.replace(",", ".")).join(", ")),
    r = new t.WebKitCSSMatrix(n === "none" ? "" : n)) : (r = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
    s = r.toString().split(",")),
    e === "x" && (t.WebKitCSSMatrix ? n = r.m41 : s.length === 16 ? n = parseFloat(s[12]) : n = parseFloat(s[4])),
    e === "y" && (t.WebKitCSSMatrix ? n = r.m42 : s.length === 16 ? n = parseFloat(s[13]) : n = parseFloat(s[5])),
    n || 0
}
function H(i) {
    return typeof i == "object" && i !== null && i.constructor && Object.prototype.toString.call(i).slice(8, -1) === "Object"
}
function _e(i) {
    return typeof window < "u" && typeof window.HTMLElement < "u" ? i instanceof HTMLElement : i && (i.nodeType === 1 || i.nodeType === 11)
}
function z() {
    const i = Object(arguments.length <= 0 ? void 0 : arguments[0])
      , e = ["__proto__", "constructor", "prototype"];
    for (let t = 1; t < arguments.length; t += 1) {
        const s = t < 0 || arguments.length <= t ? void 0 : arguments[t];
        if (s != null && !_e(s)) {
            const n = Object.keys(Object(s)).filter(r=>e.indexOf(r) < 0);
            for (let r = 0, o = n.length; r < o; r += 1) {
                const l = n[r]
                  , a = Object.getOwnPropertyDescriptor(s, l);
                a !== void 0 && a.enumerable && (H(i[l]) && H(s[l]) ? s[l].__swiper__ ? i[l] = s[l] : z(i[l], s[l]) : !H(i[l]) && H(s[l]) ? (i[l] = {},
                s[l].__swiper__ ? i[l] = s[l] : z(i[l], s[l])) : i[l] = s[l])
            }
        }
    }
    return i
}
function R(i, e, t) {
    i.style.setProperty(e, t)
}
function Te(i) {
    let {swiper: e, targetPosition: t, side: s} = i;
    const n = k()
      , r = -e.translate;
    let o = null, l;
    const a = e.params.speed;
    e.wrapperEl.style.scrollSnapType = "none",
    n.cancelAnimationFrame(e.cssModeFrameID);
    const c = t > r ? "next" : "prev"
      , u = (v,g)=>c === "next" && v >= g || c === "prev" && v <= g
      , p = ()=>{
        l = new Date().getTime(),
        o === null && (o = l);
        const v = Math.max(Math.min((l - o) / a, 1), 0)
          , g = .5 - Math.cos(v * Math.PI) / 2;
        let h = r + g * (t - r);
        if (u(h, t) && (h = t),
        e.wrapperEl.scrollTo({
            [s]: h
        }),
        u(h, t)) {
            e.wrapperEl.style.overflow = "hidden",
            e.wrapperEl.style.scrollSnapType = "",
            setTimeout(()=>{
                e.wrapperEl.style.overflow = "",
                e.wrapperEl.scrollTo({
                    [s]: h
                })
            }
            ),
            n.cancelAnimationFrame(e.cssModeFrameID);
            return
        }
        e.cssModeFrameID = n.requestAnimationFrame(p)
    }
    ;
    p()
}
function _(i, e) {
    return e === void 0 && (e = ""),
    [...i.children].filter(t=>t.matches(e))
}
function Y(i) {
    try {
        console.warn(i);
        return
    } catch {}
}
function X(i, e) {
    e === void 0 && (e = []);
    const t = document.createElement(i);
    return t.classList.add(...Array.isArray(e) ? e : ze(e)),
    t
}
function Be(i, e) {
    const t = [];
    for (; i.previousElementSibling; ) {
        const s = i.previousElementSibling;
        e ? s.matches(e) && t.push(s) : t.push(s),
        i = s
    }
    return t
}
function $e(i, e) {
    const t = [];
    for (; i.nextElementSibling; ) {
        const s = i.nextElementSibling;
        e ? s.matches(e) && t.push(s) : t.push(s),
        i = s
    }
    return t
}
function $(i, e) {
    return k().getComputedStyle(i, null).getPropertyValue(e)
}
function U(i) {
    let e = i, t;
    if (e) {
        for (t = 0; (e = e.previousSibling) !== null; )
            e.nodeType === 1 && (t += 1);
        return t
    }
}
function be(i, e) {
    const t = [];
    let s = i.parentElement;
    for (; s; )
        e ? s.matches(e) && t.push(s) : t.push(s),
        s = s.parentElement;
    return t
}
function ne(i, e, t) {
    const s = k();
    return i[e === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(s.getComputedStyle(i, null).getPropertyValue(e === "width" ? "margin-right" : "margin-top")) + parseFloat(s.getComputedStyle(i, null).getPropertyValue(e === "width" ? "margin-left" : "margin-bottom"))
}
function A(i) {
    return (Array.isArray(i) ? i : [i]).filter(e=>!!e)
}
let K;
function Ve() {
    const i = k()
      , e = V();
    return {
        smoothScroll: e.documentElement && e.documentElement.style && "scrollBehavior"in e.documentElement.style,
        touch: !!("ontouchstart"in i || i.DocumentTouch && e instanceof i.DocumentTouch)
    }
}
function xe() {
    return K || (K = Ve()),
    K
}
let J;
function Fe(i) {
    let {userAgent: e} = i === void 0 ? {} : i;
    const t = xe()
      , s = k()
      , n = s.navigator.platform
      , r = e || s.navigator.userAgent
      , o = {
        ios: !1,
        android: !1
    }
      , l = s.screen.width
      , a = s.screen.height
      , c = r.match(/(Android);?[\s\/]+([\d.]+)?/);
    let u = r.match(/(iPad).*OS\s([\d_]+)/);
    const p = r.match(/(iPod)(.*OS\s([\d_]+))?/)
      , v = !u && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
      , g = n === "Win32";
    let h = n === "MacIntel";
    const w = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    return !u && h && t.touch && w.indexOf(`${l}x${a}`) >= 0 && (u = r.match(/(Version)\/([\d.]+)/),
    u || (u = [0, 1, "13_0_0"]),
    h = !1),
    c && !g && (o.os = "android",
    o.android = !0),
    (u || v || p) && (o.os = "ios",
    o.ios = !0),
    o
}
function Ee(i) {
    return i === void 0 && (i = {}),
    J || (J = Fe(i)),
    J
}
let Q;
function Ne() {
    const i = k()
      , e = Ee();
    let t = !1;
    function s() {
        const l = i.navigator.userAgent.toLowerCase();
        return l.indexOf("safari") >= 0 && l.indexOf("chrome") < 0 && l.indexOf("android") < 0
    }
    if (s()) {
        const l = String(i.navigator.userAgent);
        if (l.includes("Version/")) {
            const [a,c] = l.split("Version/")[1].split(" ")[0].split(".").map(u=>Number(u));
            t = a < 16 || a === 16 && c < 2
        }
    }
    const n = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(i.navigator.userAgent)
      , r = s()
      , o = r || n && e.ios;
    return {
        isSafari: t || r,
        needPerspectiveFix: t,
        need3dFix: o,
        isWebView: n
    }
}
function He() {
    return Q || (Q = Ne()),
    Q
}
function Re(i) {
    let {swiper: e, on: t, emit: s} = i;
    const n = k();
    let r = null
      , o = null;
    const l = ()=>{
        !e || e.destroyed || !e.initialized || (s("beforeResize"),
        s("resize"))
    }
      , a = ()=>{
        !e || e.destroyed || !e.initialized || (r = new ResizeObserver(p=>{
            o = n.requestAnimationFrame(()=>{
                const {width: v, height: g} = e;
                let h = v
                  , w = g;
                p.forEach(T=>{
                    let {contentBoxSize: d, contentRect: f, target: m} = T;
                    m && m !== e.el || (h = f ? f.width : (d[0] || d).inlineSize,
                    w = f ? f.height : (d[0] || d).blockSize)
                }
                ),
                (h !== v || w !== g) && l()
            }
            )
        }
        ),
        r.observe(e.el))
    }
      , c = ()=>{
        o && n.cancelAnimationFrame(o),
        r && r.unobserve && e.el && (r.unobserve(e.el),
        r = null)
    }
      , u = ()=>{
        !e || e.destroyed || !e.initialized || s("orientationchange")
    }
    ;
    t("init", ()=>{
        if (e.params.resizeObserver && typeof n.ResizeObserver < "u") {
            a();
            return
        }
        n.addEventListener("resize", l),
        n.addEventListener("orientationchange", u)
    }
    ),
    t("destroy", ()=>{
        c(),
        n.removeEventListener("resize", l),
        n.removeEventListener("orientationchange", u)
    }
    )
}
function qe(i) {
    let {swiper: e, extendParams: t, on: s, emit: n} = i;
    const r = []
      , o = k()
      , l = function(u, p) {
        p === void 0 && (p = {});
        const v = o.MutationObserver || o.WebkitMutationObserver
          , g = new v(h=>{
            if (e.__preventObserver__)
                return;
            if (h.length === 1) {
                n("observerUpdate", h[0]);
                return
            }
            const w = function() {
                n("observerUpdate", h[0])
            };
            o.requestAnimationFrame ? o.requestAnimationFrame(w) : o.setTimeout(w, 0)
        }
        );
        g.observe(u, {
            attributes: typeof p.attributes > "u" ? !0 : p.attributes,
            childList: typeof p.childList > "u" ? !0 : p.childList,
            characterData: typeof p.characterData > "u" ? !0 : p.characterData
        }),
        r.push(g)
    }
      , a = ()=>{
        if (e.params.observer) {
            if (e.params.observeParents) {
                const u = be(e.hostEl);
                for (let p = 0; p < u.length; p += 1)
                    l(u[p])
            }
            l(e.hostEl, {
                childList: e.params.observeSlideChildren
            }),
            l(e.wrapperEl, {
                attributes: !1
            })
        }
    }
      , c = ()=>{
        r.forEach(u=>{
            u.disconnect()
        }
        ),
        r.splice(0, r.length)
    }
    ;
    t({
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
    }),
    s("init", a),
    s("destroy", c)
}
var We = {
    on(i, e, t) {
        const s = this;
        if (!s.eventsListeners || s.destroyed || typeof e != "function")
            return s;
        const n = t ? "unshift" : "push";
        return i.split(" ").forEach(r=>{
            s.eventsListeners[r] || (s.eventsListeners[r] = []),
            s.eventsListeners[r][n](e)
        }
        ),
        s
    },
    once(i, e, t) {
        const s = this;
        if (!s.eventsListeners || s.destroyed || typeof e != "function")
            return s;
        function n() {
            s.off(i, n),
            n.__emitterProxy && delete n.__emitterProxy;
            for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
                o[l] = arguments[l];
            e.apply(s, o)
        }
        return n.__emitterProxy = e,
        s.on(i, n, t)
    },
    onAny(i, e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed || typeof i != "function")
            return t;
        const s = e ? "unshift" : "push";
        return t.eventsAnyListeners.indexOf(i) < 0 && t.eventsAnyListeners[s](i),
        t
    },
    offAny(i) {
        const e = this;
        if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners)
            return e;
        const t = e.eventsAnyListeners.indexOf(i);
        return t >= 0 && e.eventsAnyListeners.splice(t, 1),
        e
    },
    off(i, e) {
        const t = this;
        return !t.eventsListeners || t.destroyed || !t.eventsListeners || i.split(" ").forEach(s=>{
            typeof e > "u" ? t.eventsListeners[s] = [] : t.eventsListeners[s] && t.eventsListeners[s].forEach((n,r)=>{
                (n === e || n.__emitterProxy && n.__emitterProxy === e) && t.eventsListeners[s].splice(r, 1)
            }
            )
        }
        ),
        t
    },
    emit() {
        const i = this;
        if (!i.eventsListeners || i.destroyed || !i.eventsListeners)
            return i;
        let e, t, s;
        for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
        return typeof r[0] == "string" || Array.isArray(r[0]) ? (e = r[0],
        t = r.slice(1, r.length),
        s = i) : (e = r[0].events,
        t = r[0].data,
        s = r[0].context || i),
        t.unshift(s),
        (Array.isArray(e) ? e : e.split(" ")).forEach(a=>{
            i.eventsAnyListeners && i.eventsAnyListeners.length && i.eventsAnyListeners.forEach(c=>{
                c.apply(s, [a, ...t])
            }
            ),
            i.eventsListeners && i.eventsListeners[a] && i.eventsListeners[a].forEach(c=>{
                c.apply(s, t)
            }
            )
        }
        ),
        i
    }
};
function je() {
    const i = this;
    let e, t;
    const s = i.el;
    typeof i.params.width < "u" && i.params.width !== null ? e = i.params.width : e = s.clientWidth,
    typeof i.params.height < "u" && i.params.height !== null ? t = i.params.height : t = s.clientHeight,
    !(e === 0 && i.isHorizontal() || t === 0 && i.isVertical()) && (e = e - parseInt($(s, "padding-left") || 0, 10) - parseInt($(s, "padding-right") || 0, 10),
    t = t - parseInt($(s, "padding-top") || 0, 10) - parseInt($(s, "padding-bottom") || 0, 10),
    Number.isNaN(e) && (e = 0),
    Number.isNaN(t) && (t = 0),
    Object.assign(i, {
        width: e,
        height: t,
        size: i.isHorizontal() ? e : t
    }))
}
function Ye() {
    const i = this;
    function e(y, C) {
        return parseFloat(y.getPropertyValue(i.getDirectionLabel(C)) || 0)
    }
    const t = i.params
      , {wrapperEl: s, slidesEl: n, size: r, rtlTranslate: o, wrongRTL: l} = i
      , a = i.virtual && t.virtual.enabled
      , c = a ? i.virtual.slides.length : i.slides.length
      , u = _(n, `.${i.params.slideClass}, swiper-slide`)
      , p = a ? i.virtual.slides.length : u.length;
    let v = [];
    const g = []
      , h = [];
    let w = t.slidesOffsetBefore;
    typeof w == "function" && (w = t.slidesOffsetBefore.call(i));
    let T = t.slidesOffsetAfter;
    typeof T == "function" && (T = t.slidesOffsetAfter.call(i));
    const d = i.snapGrid.length
      , f = i.slidesGrid.length;
    let m = t.spaceBetween
      , S = -w
      , b = 0
      , L = 0;
    if (typeof r > "u")
        return;
    typeof m == "string" && m.indexOf("%") >= 0 ? m = parseFloat(m.replace("%", "")) / 100 * r : typeof m == "string" && (m = parseFloat(m)),
    i.virtualSize = -m,
    u.forEach(y=>{
        o ? y.style.marginLeft = "" : y.style.marginRight = "",
        y.style.marginBottom = "",
        y.style.marginTop = ""
    }
    ),
    t.centeredSlides && t.cssMode && (R(s, "--swiper-centered-offset-before", ""),
    R(s, "--swiper-centered-offset-after", ""));
    const D = t.grid && t.grid.rows > 1 && i.grid;
    D ? i.grid.initSlides(u) : i.grid && i.grid.unsetSlides();
    let M;
    const O = t.slidesPerView === "auto" && t.breakpoints && Object.keys(t.breakpoints).filter(y=>typeof t.breakpoints[y].slidesPerView < "u").length > 0;
    for (let y = 0; y < p; y += 1) {
        M = 0;
        let C;
        if (u[y] && (C = u[y]),
        D && i.grid.updateSlide(y, C, u),
        !(u[y] && $(C, "display") === "none")) {
            if (t.slidesPerView === "auto") {
                O && (u[y].style[i.getDirectionLabel("width")] = "");
                const E = getComputedStyle(C)
                  , x = C.style.transform
                  , P = C.style.webkitTransform;
                if (x && (C.style.transform = "none"),
                P && (C.style.webkitTransform = "none"),
                t.roundLengths)
                    M = i.isHorizontal() ? ne(C, "width") : ne(C, "height");
                else {
                    const I = e(E, "width")
                      , B = e(E, "padding-left")
                      , Le = e(E, "padding-right")
                      , oe = e(E, "margin-left")
                      , de = e(E, "margin-right")
                      , ce = E.getPropertyValue("box-sizing");
                    if (ce && ce === "border-box")
                        M = I + oe + de;
                    else {
                        const {clientWidth: Ie, offsetWidth: Ae} = C;
                        M = I + B + Le + oe + de + (Ae - Ie)
                    }
                }
                x && (C.style.transform = x),
                P && (C.style.webkitTransform = P),
                t.roundLengths && (M = Math.floor(M))
            } else
                M = (r - (t.slidesPerView - 1) * m) / t.slidesPerView,
                t.roundLengths && (M = Math.floor(M)),
                u[y] && (u[y].style[i.getDirectionLabel("width")] = `${M}px`);
            u[y] && (u[y].swiperSlideSize = M),
            h.push(M),
            t.centeredSlides ? (S = S + M / 2 + b / 2 + m,
            b === 0 && y !== 0 && (S = S - r / 2 - m),
            y === 0 && (S = S - r / 2 - m),
            Math.abs(S) < 1 / 1e3 && (S = 0),
            t.roundLengths && (S = Math.floor(S)),
            L % t.slidesPerGroup === 0 && v.push(S),
            g.push(S)) : (t.roundLengths && (S = Math.floor(S)),
            (L - Math.min(i.params.slidesPerGroupSkip, L)) % i.params.slidesPerGroup === 0 && v.push(S),
            g.push(S),
            S = S + M + m),
            i.virtualSize += M + m,
            b = M,
            L += 1
        }
    }
    if (i.virtualSize = Math.max(i.virtualSize, r) + T,
    o && l && (t.effect === "slide" || t.effect === "coverflow") && (s.style.width = `${i.virtualSize + m}px`),
    t.setWrapperSize && (s.style[i.getDirectionLabel("width")] = `${i.virtualSize + m}px`),
    D && i.grid.updateWrapperSize(M, v),
    !t.centeredSlides) {
        const y = [];
        for (let C = 0; C < v.length; C += 1) {
            let E = v[C];
            t.roundLengths && (E = Math.floor(E)),
            v[C] <= i.virtualSize - r && y.push(E)
        }
        v = y,
        Math.floor(i.virtualSize - r) - Math.floor(v[v.length - 1]) > 1 && v.push(i.virtualSize - r)
    }
    if (a && t.loop) {
        const y = h[0] + m;
        if (t.slidesPerGroup > 1) {
            const C = Math.ceil((i.virtual.slidesBefore + i.virtual.slidesAfter) / t.slidesPerGroup)
              , E = y * t.slidesPerGroup;
            for (let x = 0; x < C; x += 1)
                v.push(v[v.length - 1] + E)
        }
        for (let C = 0; C < i.virtual.slidesBefore + i.virtual.slidesAfter; C += 1)
            t.slidesPerGroup === 1 && v.push(v[v.length - 1] + y),
            g.push(g[g.length - 1] + y),
            i.virtualSize += y
    }
    if (v.length === 0 && (v = [0]),
    m !== 0) {
        const y = i.isHorizontal() && o ? "marginLeft" : i.getDirectionLabel("marginRight");
        u.filter((C,E)=>!t.cssMode || t.loop ? !0 : E !== u.length - 1).forEach(C=>{
            C.style[y] = `${m}px`
        }
        )
    }
    if (t.centeredSlides && t.centeredSlidesBounds) {
        let y = 0;
        h.forEach(E=>{
            y += E + (m || 0)
        }
        ),
        y -= m;
        const C = y - r;
        v = v.map(E=>E <= 0 ? -w : E > C ? C + T : E)
    }
    if (t.centerInsufficientSlides) {
        let y = 0;
        if (h.forEach(C=>{
            y += C + (m || 0)
        }
        ),
        y -= m,
        y < r) {
            const C = (r - y) / 2;
            v.forEach((E,x)=>{
                v[x] = E - C
            }
            ),
            g.forEach((E,x)=>{
                g[x] = E + C
            }
            )
        }
    }
    if (Object.assign(i, {
        slides: u,
        snapGrid: v,
        slidesGrid: g,
        slidesSizesGrid: h
    }),
    t.centeredSlides && t.cssMode && !t.centeredSlidesBounds) {
        R(s, "--swiper-centered-offset-before", `${-v[0]}px`),
        R(s, "--swiper-centered-offset-after", `${i.size / 2 - h[h.length - 1] / 2}px`);
        const y = -i.snapGrid[0]
          , C = -i.slidesGrid[0];
        i.snapGrid = i.snapGrid.map(E=>E + y),
        i.slidesGrid = i.slidesGrid.map(E=>E + C)
    }
    if (p !== c && i.emit("slidesLengthChange"),
    v.length !== d && (i.params.watchOverflow && i.checkOverflow(),
    i.emit("snapGridLengthChange")),
    g.length !== f && i.emit("slidesGridLengthChange"),
    t.watchSlidesProgress && i.updateSlidesOffset(),
    i.emit("slidesUpdated"),
    !a && !t.cssMode && (t.effect === "slide" || t.effect === "fade")) {
        const y = `${t.containerModifierClass}backface-hidden`
          , C = i.el.classList.contains(y);
        p <= t.maxBackfaceHiddenSlides ? C || i.el.classList.add(y) : C && i.el.classList.remove(y)
    }
}
function Xe(i) {
    const e = this
      , t = []
      , s = e.virtual && e.params.virtual.enabled;
    let n = 0, r;
    typeof i == "number" ? e.setTransition(i) : i === !0 && e.setTransition(e.params.speed);
    const o = l=>s ? e.slides[e.getSlideIndexByData(l)] : e.slides[l];
    if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
        if (e.params.centeredSlides)
            (e.visibleSlides || []).forEach(l=>{
                t.push(l)
            }
            );
        else
            for (r = 0; r < Math.ceil(e.params.slidesPerView); r += 1) {
                const l = e.activeIndex + r;
                if (l > e.slides.length && !s)
                    break;
                t.push(o(l))
            }
    else
        t.push(o(e.activeIndex));
    for (r = 0; r < t.length; r += 1)
        if (typeof t[r] < "u") {
            const l = t[r].offsetHeight;
            n = l > n ? l : n
        }
    (n || n === 0) && (e.wrapperEl.style.height = `${n}px`)
}
function Ue() {
    const i = this
      , e = i.slides
      , t = i.isElement ? i.isHorizontal() ? i.wrapperEl.offsetLeft : i.wrapperEl.offsetTop : 0;
    for (let s = 0; s < e.length; s += 1)
        e[s].swiperSlideOffset = (i.isHorizontal() ? e[s].offsetLeft : e[s].offsetTop) - t - i.cssOverflowAdjustment()
}
function Ke(i) {
    i === void 0 && (i = this && this.translate || 0);
    const e = this
      , t = e.params
      , {slides: s, rtlTranslate: n, snapGrid: r} = e;
    if (s.length === 0)
        return;
    typeof s[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
    let o = -i;
    n && (o = i),
    s.forEach(a=>{
        a.classList.remove(t.slideVisibleClass, t.slideFullyVisibleClass)
    }
    ),
    e.visibleSlidesIndexes = [],
    e.visibleSlides = [];
    let l = t.spaceBetween;
    typeof l == "string" && l.indexOf("%") >= 0 ? l = parseFloat(l.replace("%", "")) / 100 * e.size : typeof l == "string" && (l = parseFloat(l));
    for (let a = 0; a < s.length; a += 1) {
        const c = s[a];
        let u = c.swiperSlideOffset;
        t.cssMode && t.centeredSlides && (u -= s[0].swiperSlideOffset);
        const p = (o + (t.centeredSlides ? e.minTranslate() : 0) - u) / (c.swiperSlideSize + l)
          , v = (o - r[0] + (t.centeredSlides ? e.minTranslate() : 0) - u) / (c.swiperSlideSize + l)
          , g = -(o - u)
          , h = g + e.slidesSizesGrid[a]
          , w = g >= 0 && g <= e.size - e.slidesSizesGrid[a];
        (g >= 0 && g < e.size - 1 || h > 1 && h <= e.size || g <= 0 && h >= e.size) && (e.visibleSlides.push(c),
        e.visibleSlidesIndexes.push(a),
        s[a].classList.add(t.slideVisibleClass)),
        w && s[a].classList.add(t.slideFullyVisibleClass),
        c.progress = n ? -p : p,
        c.originalProgress = n ? -v : v
    }
}
function Je(i) {
    const e = this;
    if (typeof i > "u") {
        const u = e.rtlTranslate ? -1 : 1;
        i = e && e.translate && e.translate * u || 0
    }
    const t = e.params
      , s = e.maxTranslate() - e.minTranslate();
    let {progress: n, isBeginning: r, isEnd: o, progressLoop: l} = e;
    const a = r
      , c = o;
    if (s === 0)
        n = 0,
        r = !0,
        o = !0;
    else {
        n = (i - e.minTranslate()) / s;
        const u = Math.abs(i - e.minTranslate()) < 1
          , p = Math.abs(i - e.maxTranslate()) < 1;
        r = u || n <= 0,
        o = p || n >= 1,
        u && (n = 0),
        p && (n = 1)
    }
    if (t.loop) {
        const u = e.getSlideIndexByData(0)
          , p = e.getSlideIndexByData(e.slides.length - 1)
          , v = e.slidesGrid[u]
          , g = e.slidesGrid[p]
          , h = e.slidesGrid[e.slidesGrid.length - 1]
          , w = Math.abs(i);
        w >= v ? l = (w - v) / h : l = (w + h - g) / h,
        l > 1 && (l -= 1)
    }
    Object.assign(e, {
        progress: n,
        progressLoop: l,
        isBeginning: r,
        isEnd: o
    }),
    (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && e.updateSlidesProgress(i),
    r && !a && e.emit("reachBeginning toEdge"),
    o && !c && e.emit("reachEnd toEdge"),
    (a && !r || c && !o) && e.emit("fromEdge"),
    e.emit("progress", n)
}
const Z = (i,e,t)=>{
    e && !i.classList.contains(t) ? i.classList.add(t) : !e && i.classList.contains(t) && i.classList.remove(t)
}
;
function Qe() {
    const i = this
      , {slides: e, params: t, slidesEl: s, activeIndex: n} = i
      , r = i.virtual && t.virtual.enabled
      , o = i.grid && t.grid && t.grid.rows > 1
      , l = p=>_(s, `.${t.slideClass}${p}, swiper-slide${p}`)[0];
    let a, c, u;
    if (r)
        if (t.loop) {
            let p = n - i.virtual.slidesBefore;
            p < 0 && (p = i.virtual.slides.length + p),
            p >= i.virtual.slides.length && (p -= i.virtual.slides.length),
            a = l(`[data-swiper-slide-index="${p}"]`)
        } else
            a = l(`[data-swiper-slide-index="${n}"]`);
    else
        o ? (a = e.filter(p=>p.column === n)[0],
        u = e.filter(p=>p.column === n + 1)[0],
        c = e.filter(p=>p.column === n - 1)[0]) : a = e[n];
    a && (o || (u = $e(a, `.${t.slideClass}, swiper-slide`)[0],
    t.loop && !u && (u = e[0]),
    c = Be(a, `.${t.slideClass}, swiper-slide`)[0],
    t.loop && !c === 0 && (c = e[e.length - 1]))),
    e.forEach(p=>{
        Z(p, p === a, t.slideActiveClass),
        Z(p, p === u, t.slideNextClass),
        Z(p, p === c, t.slidePrevClass)
    }
    ),
    i.emitSlidesClasses()
}
const W = (i,e)=>{
    if (!i || i.destroyed || !i.params)
        return;
    const t = ()=>i.isElement ? "swiper-slide" : `.${i.params.slideClass}`
      , s = e.closest(t());
    if (s) {
        let n = s.querySelector(`.${i.params.lazyPreloaderClass}`);
        !n && i.isElement && (s.shadowRoot ? n = s.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`) : requestAnimationFrame(()=>{
            s.shadowRoot && (n = s.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`),
            n && n.remove())
        }
        )),
        n && n.remove()
    }
}
  , ee = (i,e)=>{
    if (!i.slides[e])
        return;
    const t = i.slides[e].querySelector('[loading="lazy"]');
    t && t.removeAttribute("loading")
}
  , ae = i=>{
    if (!i || i.destroyed || !i.params)
        return;
    let e = i.params.lazyPreloadPrevNext;
    const t = i.slides.length;
    if (!t || !e || e < 0)
        return;
    e = Math.min(e, t);
    const s = i.params.slidesPerView === "auto" ? i.slidesPerViewDynamic() : Math.ceil(i.params.slidesPerView)
      , n = i.activeIndex;
    if (i.params.grid && i.params.grid.rows > 1) {
        const o = n
          , l = [o - e];
        l.push(...Array.from({
            length: e
        }).map((a,c)=>o + s + c)),
        i.slides.forEach((a,c)=>{
            l.includes(a.column) && ee(i, c)
        }
        );
        return
    }
    const r = n + s - 1;
    if (i.params.rewind || i.params.loop)
        for (let o = n - e; o <= r + e; o += 1) {
            const l = (o % t + t) % t;
            (l < n || l > r) && ee(i, l)
        }
    else
        for (let o = Math.max(n - e, 0); o <= Math.min(r + e, t - 1); o += 1)
            o !== n && (o > r || o < n) && ee(i, o)
}
;
function Ze(i) {
    const {slidesGrid: e, params: t} = i
      , s = i.rtlTranslate ? i.translate : -i.translate;
    let n;
    for (let r = 0; r < e.length; r += 1)
        typeof e[r + 1] < "u" ? s >= e[r] && s < e[r + 1] - (e[r + 1] - e[r]) / 2 ? n = r : s >= e[r] && s < e[r + 1] && (n = r + 1) : s >= e[r] && (n = r);
    return t.normalizeSlideIndex && (n < 0 || typeof n > "u") && (n = 0),
    n
}
function et(i) {
    const e = this
      , t = e.rtlTranslate ? e.translate : -e.translate
      , {snapGrid: s, params: n, activeIndex: r, realIndex: o, snapIndex: l} = e;
    let a = i, c;
    const u = g=>{
        let h = g - e.virtual.slidesBefore;
        return h < 0 && (h = e.virtual.slides.length + h),
        h >= e.virtual.slides.length && (h -= e.virtual.slides.length),
        h
    }
    ;
    if (typeof a > "u" && (a = Ze(e)),
    s.indexOf(t) >= 0)
        c = s.indexOf(t);
    else {
        const g = Math.min(n.slidesPerGroupSkip, a);
        c = g + Math.floor((a - g) / n.slidesPerGroup)
    }
    if (c >= s.length && (c = s.length - 1),
    a === r && !e.params.loop) {
        c !== l && (e.snapIndex = c,
        e.emit("snapIndexChange"));
        return
    }
    if (a === r && e.params.loop && e.virtual && e.params.virtual.enabled) {
        e.realIndex = u(a);
        return
    }
    const p = e.grid && n.grid && n.grid.rows > 1;
    let v;
    if (e.virtual && n.virtual.enabled && n.loop)
        v = u(a);
    else if (p) {
        const g = e.slides.filter(w=>w.column === a)[0];
        let h = parseInt(g.getAttribute("data-swiper-slide-index"), 10);
        Number.isNaN(h) && (h = Math.max(e.slides.indexOf(g), 0)),
        v = Math.floor(h / n.grid.rows)
    } else if (e.slides[a]) {
        const g = e.slides[a].getAttribute("data-swiper-slide-index");
        g ? v = parseInt(g, 10) : v = a
    } else
        v = a;
    Object.assign(e, {
        previousSnapIndex: l,
        snapIndex: c,
        previousRealIndex: o,
        realIndex: v,
        previousIndex: r,
        activeIndex: a
    }),
    e.initialized && ae(e),
    e.emit("activeIndexChange"),
    e.emit("snapIndexChange"),
    (e.initialized || e.params.runCallbacksOnInit) && (o !== v && e.emit("realIndexChange"),
    e.emit("slideChange"))
}
function tt(i, e) {
    const t = this
      , s = t.params;
    let n = i.closest(`.${s.slideClass}, swiper-slide`);
    !n && t.isElement && e && e.length > 1 && e.includes(i) && [...e.slice(e.indexOf(i) + 1, e.length)].forEach(l=>{
        !n && l.matches && l.matches(`.${s.slideClass}, swiper-slide`) && (n = l)
    }
    );
    let r = !1, o;
    if (n) {
        for (let l = 0; l < t.slides.length; l += 1)
            if (t.slides[l] === n) {
                r = !0,
                o = l;
                break
            }
    }
    if (n && r)
        t.clickedSlide = n,
        t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(n.getAttribute("data-swiper-slide-index"), 10) : t.clickedIndex = o;
    else {
        t.clickedSlide = void 0,
        t.clickedIndex = void 0;
        return
    }
    s.slideToClickedSlide && t.clickedIndex !== void 0 && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
}
var it = {
    updateSize: je,
    updateSlides: Ye,
    updateAutoHeight: Xe,
    updateSlidesOffset: Ue,
    updateSlidesProgress: Ke,
    updateProgress: Je,
    updateSlidesClasses: Qe,
    updateActiveIndex: et,
    updateClickedSlide: tt
};
function st(i) {
    i === void 0 && (i = this.isHorizontal() ? "x" : "y");
    const e = this
      , {params: t, rtlTranslate: s, translate: n, wrapperEl: r} = e;
    if (t.virtualTranslate)
        return s ? -n : n;
    if (t.cssMode)
        return n;
    let o = De(r, i);
    return o += e.cssOverflowAdjustment(),
    s && (o = -o),
    o || 0
}
function rt(i, e) {
    const t = this
      , {rtlTranslate: s, params: n, wrapperEl: r, progress: o} = t;
    let l = 0
      , a = 0;
    const c = 0;
    t.isHorizontal() ? l = s ? -i : i : a = i,
    n.roundLengths && (l = Math.floor(l),
    a = Math.floor(a)),
    t.previousTranslate = t.translate,
    t.translate = t.isHorizontal() ? l : a,
    n.cssMode ? r[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal() ? -l : -a : n.virtualTranslate || (t.isHorizontal() ? l -= t.cssOverflowAdjustment() : a -= t.cssOverflowAdjustment(),
    r.style.transform = `translate3d(${l}px, ${a}px, ${c}px)`);
    let u;
    const p = t.maxTranslate() - t.minTranslate();
    p === 0 ? u = 0 : u = (i - t.minTranslate()) / p,
    u !== o && t.updateProgress(i),
    t.emit("setTranslate", t.translate, e)
}
function nt() {
    return -this.snapGrid[0]
}
function at() {
    return -this.snapGrid[this.snapGrid.length - 1]
}
function lt(i, e, t, s, n) {
    i === void 0 && (i = 0),
    e === void 0 && (e = this.params.speed),
    t === void 0 && (t = !0),
    s === void 0 && (s = !0);
    const r = this
      , {params: o, wrapperEl: l} = r;
    if (r.animating && o.preventInteractionOnTransition)
        return !1;
    const a = r.minTranslate()
      , c = r.maxTranslate();
    let u;
    if (s && i > a ? u = a : s && i < c ? u = c : u = i,
    r.updateProgress(u),
    o.cssMode) {
        const p = r.isHorizontal();
        if (e === 0)
            l[p ? "scrollLeft" : "scrollTop"] = -u;
        else {
            if (!r.support.smoothScroll)
                return Te({
                    swiper: r,
                    targetPosition: -u,
                    side: p ? "left" : "top"
                }),
                !0;
            l.scrollTo({
                [p ? "left" : "top"]: -u,
                behavior: "smooth"
            })
        }
        return !0
    }
    return e === 0 ? (r.setTransition(0),
    r.setTranslate(u),
    t && (r.emit("beforeTransitionStart", e, n),
    r.emit("transitionEnd"))) : (r.setTransition(e),
    r.setTranslate(u),
    t && (r.emit("beforeTransitionStart", e, n),
    r.emit("transitionStart")),
    r.animating || (r.animating = !0,
    r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(v) {
        !r || r.destroyed || v.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd),
        r.onTranslateToWrapperTransitionEnd = null,
        delete r.onTranslateToWrapperTransitionEnd,
        r.animating = !1,
        t && r.emit("transitionEnd"))
    }
    ),
    r.wrapperEl.addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd))),
    !0
}
var ot = {
    getTranslate: st,
    setTranslate: rt,
    minTranslate: nt,
    maxTranslate: at,
    translateTo: lt
};
function dt(i, e) {
    const t = this;
    t.params.cssMode || (t.wrapperEl.style.transitionDuration = `${i}ms`,
    t.wrapperEl.style.transitionDelay = i === 0 ? "0ms" : ""),
    t.emit("setTransition", i, e)
}
function Ce(i) {
    let {swiper: e, runCallbacks: t, direction: s, step: n} = i;
    const {activeIndex: r, previousIndex: o} = e;
    let l = s;
    if (l || (r > o ? l = "next" : r < o ? l = "prev" : l = "reset"),
    e.emit(`transition${n}`),
    t && r !== o) {
        if (l === "reset") {
            e.emit(`slideResetTransition${n}`);
            return
        }
        e.emit(`slideChangeTransition${n}`),
        l === "next" ? e.emit(`slideNextTransition${n}`) : e.emit(`slidePrevTransition${n}`)
    }
}
function ct(i, e) {
    i === void 0 && (i = !0);
    const t = this
      , {params: s} = t;
    s.cssMode || (s.autoHeight && t.updateAutoHeight(),
    Ce({
        swiper: t,
        runCallbacks: i,
        direction: e,
        step: "Start"
    }))
}
function ft(i, e) {
    i === void 0 && (i = !0);
    const t = this
      , {params: s} = t;
    t.animating = !1,
    !s.cssMode && (t.setTransition(0),
    Ce({
        swiper: t,
        runCallbacks: i,
        direction: e,
        step: "End"
    }))
}
var ut = {
    setTransition: dt,
    transitionStart: ct,
    transitionEnd: ft
};
function pt(i, e, t, s, n) {
    i === void 0 && (i = 0),
    t === void 0 && (t = !0),
    typeof i == "string" && (i = parseInt(i, 10));
    const r = this;
    let o = i;
    o < 0 && (o = 0);
    const {params: l, snapGrid: a, slidesGrid: c, previousIndex: u, activeIndex: p, rtlTranslate: v, wrapperEl: g, enabled: h} = r;
    if (!h && !s && !n || r.destroyed || r.animating && l.preventInteractionOnTransition)
        return !1;
    typeof e > "u" && (e = r.params.speed);
    const w = Math.min(r.params.slidesPerGroupSkip, o);
    let T = w + Math.floor((o - w) / r.params.slidesPerGroup);
    T >= a.length && (T = a.length - 1);
    const d = -a[T];
    if (l.normalizeSlideIndex)
        for (let m = 0; m < c.length; m += 1) {
            const S = -Math.floor(d * 100)
              , b = Math.floor(c[m] * 100)
              , L = Math.floor(c[m + 1] * 100);
            typeof c[m + 1] < "u" ? S >= b && S < L - (L - b) / 2 ? o = m : S >= b && S < L && (o = m + 1) : S >= b && (o = m)
        }
    if (r.initialized && o !== p && (!r.allowSlideNext && (v ? d > r.translate && d > r.minTranslate() : d < r.translate && d < r.minTranslate()) || !r.allowSlidePrev && d > r.translate && d > r.maxTranslate() && (p || 0) !== o))
        return !1;
    o !== (u || 0) && t && r.emit("beforeSlideChangeStart"),
    r.updateProgress(d);
    let f;
    if (o > p ? f = "next" : o < p ? f = "prev" : f = "reset",
    v && -d === r.translate || !v && d === r.translate)
        return r.updateActiveIndex(o),
        l.autoHeight && r.updateAutoHeight(),
        r.updateSlidesClasses(),
        l.effect !== "slide" && r.setTranslate(d),
        f !== "reset" && (r.transitionStart(t, f),
        r.transitionEnd(t, f)),
        !1;
    if (l.cssMode) {
        const m = r.isHorizontal()
          , S = v ? d : -d;
        if (e === 0) {
            const b = r.virtual && r.params.virtual.enabled;
            b && (r.wrapperEl.style.scrollSnapType = "none",
            r._immediateVirtual = !0),
            b && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0 ? (r._cssModeVirtualInitialSet = !0,
            requestAnimationFrame(()=>{
                g[m ? "scrollLeft" : "scrollTop"] = S
            }
            )) : g[m ? "scrollLeft" : "scrollTop"] = S,
            b && requestAnimationFrame(()=>{
                r.wrapperEl.style.scrollSnapType = "",
                r._immediateVirtual = !1
            }
            )
        } else {
            if (!r.support.smoothScroll)
                return Te({
                    swiper: r,
                    targetPosition: S,
                    side: m ? "left" : "top"
                }),
                !0;
            g.scrollTo({
                [m ? "left" : "top"]: S,
                behavior: "smooth"
            })
        }
        return !0
    }
    return r.setTransition(e),
    r.setTranslate(d),
    r.updateActiveIndex(o),
    r.updateSlidesClasses(),
    r.emit("beforeTransitionStart", e, s),
    r.transitionStart(t, f),
    e === 0 ? r.transitionEnd(t, f) : r.animating || (r.animating = !0,
    r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(S) {
        !r || r.destroyed || S.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
        r.onSlideToWrapperTransitionEnd = null,
        delete r.onSlideToWrapperTransitionEnd,
        r.transitionEnd(t, f))
    }
    ),
    r.wrapperEl.addEventListener("transitionend", r.onSlideToWrapperTransitionEnd)),
    !0
}
function mt(i, e, t, s) {
    i === void 0 && (i = 0),
    t === void 0 && (t = !0),
    typeof i == "string" && (i = parseInt(i, 10));
    const n = this;
    if (n.destroyed)
        return;
    typeof e > "u" && (e = n.params.speed);
    const r = n.grid && n.params.grid && n.params.grid.rows > 1;
    let o = i;
    if (n.params.loop)
        if (n.virtual && n.params.virtual.enabled)
            o = o + n.virtual.slidesBefore;
        else {
            let l;
            if (r) {
                const v = o * n.params.grid.rows;
                l = n.slides.filter(g=>g.getAttribute("data-swiper-slide-index") * 1 === v)[0].column
            } else
                l = n.getSlideIndexByData(o);
            const a = r ? Math.ceil(n.slides.length / n.params.grid.rows) : n.slides.length
              , {centeredSlides: c} = n.params;
            let u = n.params.slidesPerView;
            u === "auto" ? u = n.slidesPerViewDynamic() : (u = Math.ceil(parseFloat(n.params.slidesPerView, 10)),
            c && u % 2 === 0 && (u = u + 1));
            let p = a - l < u;
            if (c && (p = p || l < Math.ceil(u / 2)),
            s && c && n.params.slidesPerView !== "auto" && !r && (p = !1),
            p) {
                const v = c ? l < n.activeIndex ? "prev" : "next" : l - n.activeIndex - 1 < n.params.slidesPerView ? "next" : "prev";
                n.loopFix({
                    direction: v,
                    slideTo: !0,
                    activeSlideIndex: v === "next" ? l + 1 : l - a + 1,
                    slideRealIndex: v === "next" ? n.realIndex : void 0
                })
            }
            if (r) {
                const v = o * n.params.grid.rows;
                o = n.slides.filter(g=>g.getAttribute("data-swiper-slide-index") * 1 === v)[0].column
            } else
                o = n.getSlideIndexByData(o)
        }
    return requestAnimationFrame(()=>{
        n.slideTo(o, e, t, s)
    }
    ),
    n
}
function ht(i, e, t) {
    e === void 0 && (e = !0);
    const s = this
      , {enabled: n, params: r, animating: o} = s;
    if (!n || s.destroyed)
        return s;
    typeof i > "u" && (i = s.params.speed);
    let l = r.slidesPerGroup;
    r.slidesPerView === "auto" && r.slidesPerGroup === 1 && r.slidesPerGroupAuto && (l = Math.max(s.slidesPerViewDynamic("current", !0), 1));
    const a = s.activeIndex < r.slidesPerGroupSkip ? 1 : l
      , c = s.virtual && r.virtual.enabled;
    if (r.loop) {
        if (o && !c && r.loopPreventsSliding)
            return !1;
        if (s.loopFix({
            direction: "next"
        }),
        s._clientLeft = s.wrapperEl.clientLeft,
        s.activeIndex === s.slides.length - 1 && r.cssMode)
            return requestAnimationFrame(()=>{
                s.slideTo(s.activeIndex + a, i, e, t)
            }
            ),
            !0
    }
    return r.rewind && s.isEnd ? s.slideTo(0, i, e, t) : s.slideTo(s.activeIndex + a, i, e, t)
}
function gt(i, e, t) {
    e === void 0 && (e = !0);
    const s = this
      , {params: n, snapGrid: r, slidesGrid: o, rtlTranslate: l, enabled: a, animating: c} = s;
    if (!a || s.destroyed)
        return s;
    typeof i > "u" && (i = s.params.speed);
    const u = s.virtual && n.virtual.enabled;
    if (n.loop) {
        if (c && !u && n.loopPreventsSliding)
            return !1;
        s.loopFix({
            direction: "prev"
        }),
        s._clientLeft = s.wrapperEl.clientLeft
    }
    const p = l ? s.translate : -s.translate;
    function v(d) {
        return d < 0 ? -Math.floor(Math.abs(d)) : Math.floor(d)
    }
    const g = v(p)
      , h = r.map(d=>v(d));
    let w = r[h.indexOf(g) - 1];
    if (typeof w > "u" && n.cssMode) {
        let d;
        r.forEach((f,m)=>{
            g >= f && (d = m)
        }
        ),
        typeof d < "u" && (w = r[d > 0 ? d - 1 : d])
    }
    let T = 0;
    if (typeof w < "u" && (T = o.indexOf(w),
    T < 0 && (T = s.activeIndex - 1),
    n.slidesPerView === "auto" && n.slidesPerGroup === 1 && n.slidesPerGroupAuto && (T = T - s.slidesPerViewDynamic("previous", !0) + 1,
    T = Math.max(T, 0))),
    n.rewind && s.isBeginning) {
        const d = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
        return s.slideTo(d, i, e, t)
    } else if (n.loop && s.activeIndex === 0 && n.cssMode)
        return requestAnimationFrame(()=>{
            s.slideTo(T, i, e, t)
        }
        ),
        !0;
    return s.slideTo(T, i, e, t)
}
function vt(i, e, t) {
    e === void 0 && (e = !0);
    const s = this;
    if (!s.destroyed)
        return typeof i > "u" && (i = s.params.speed),
        s.slideTo(s.activeIndex, i, e, t)
}
function wt(i, e, t, s) {
    e === void 0 && (e = !0),
    s === void 0 && (s = .5);
    const n = this;
    if (n.destroyed)
        return;
    typeof i > "u" && (i = n.params.speed);
    let r = n.activeIndex;
    const o = Math.min(n.params.slidesPerGroupSkip, r)
      , l = o + Math.floor((r - o) / n.params.slidesPerGroup)
      , a = n.rtlTranslate ? n.translate : -n.translate;
    if (a >= n.snapGrid[l]) {
        const c = n.snapGrid[l]
          , u = n.snapGrid[l + 1];
        a - c > (u - c) * s && (r += n.params.slidesPerGroup)
    } else {
        const c = n.snapGrid[l - 1]
          , u = n.snapGrid[l];
        a - c <= (u - c) * s && (r -= n.params.slidesPerGroup)
    }
    return r = Math.max(r, 0),
    r = Math.min(r, n.slidesGrid.length - 1),
    n.slideTo(r, i, e, t)
}
function St() {
    const i = this;
    if (i.destroyed)
        return;
    const {params: e, slidesEl: t} = i
      , s = e.slidesPerView === "auto" ? i.slidesPerViewDynamic() : e.slidesPerView;
    let n = i.clickedIndex, r;
    const o = i.isElement ? "swiper-slide" : `.${e.slideClass}`;
    if (e.loop) {
        if (i.animating)
            return;
        r = parseInt(i.clickedSlide.getAttribute("data-swiper-slide-index"), 10),
        e.centeredSlides ? n < i.loopedSlides - s / 2 || n > i.slides.length - i.loopedSlides + s / 2 ? (i.loopFix(),
        n = i.getSlideIndex(_(t, `${o}[data-swiper-slide-index="${r}"]`)[0]),
        re(()=>{
            i.slideTo(n)
        }
        )) : i.slideTo(n) : n > i.slides.length - s ? (i.loopFix(),
        n = i.getSlideIndex(_(t, `${o}[data-swiper-slide-index="${r}"]`)[0]),
        re(()=>{
            i.slideTo(n)
        }
        )) : i.slideTo(n)
    } else
        i.slideTo(n)
}
var yt = {
    slideTo: pt,
    slideToLoop: mt,
    slideNext: ht,
    slidePrev: gt,
    slideReset: vt,
    slideToClosest: wt,
    slideToClickedSlide: St
};
function Tt(i) {
    const e = this
      , {params: t, slidesEl: s} = e;
    if (!t.loop || e.virtual && e.params.virtual.enabled)
        return;
    const n = ()=>{
        _(s, `.${t.slideClass}, swiper-slide`).forEach((p,v)=>{
            p.setAttribute("data-swiper-slide-index", v)
        }
        )
    }
      , r = e.grid && t.grid && t.grid.rows > 1
      , o = t.slidesPerGroup * (r ? t.grid.rows : 1)
      , l = e.slides.length % o !== 0
      , a = r && e.slides.length % t.grid.rows !== 0
      , c = u=>{
        for (let p = 0; p < u; p += 1) {
            const v = e.isElement ? X("swiper-slide", [t.slideBlankClass]) : X("div", [t.slideClass, t.slideBlankClass]);
            e.slidesEl.append(v)
        }
    }
    ;
    if (l) {
        if (t.loopAddBlankSlides) {
            const u = o - e.slides.length % o;
            c(u),
            e.recalcSlides(),
            e.updateSlides()
        } else
            Y("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        n()
    } else if (a) {
        if (t.loopAddBlankSlides) {
            const u = t.grid.rows - e.slides.length % t.grid.rows;
            c(u),
            e.recalcSlides(),
            e.updateSlides()
        } else
            Y("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        n()
    } else
        n();
    e.loopFix({
        slideRealIndex: i,
        direction: t.centeredSlides ? void 0 : "next"
    })
}
function bt(i) {
    let {slideRealIndex: e, slideTo: t=!0, direction: s, setTranslate: n, activeSlideIndex: r, byController: o, byMousewheel: l} = i === void 0 ? {} : i;
    const a = this;
    if (!a.params.loop)
        return;
    a.emit("beforeLoopFix");
    const {slides: c, allowSlidePrev: u, allowSlideNext: p, slidesEl: v, params: g} = a
      , {centeredSlides: h} = g;
    if (a.allowSlidePrev = !0,
    a.allowSlideNext = !0,
    a.virtual && g.virtual.enabled) {
        t && (!g.centeredSlides && a.snapIndex === 0 ? a.slideTo(a.virtual.slides.length, 0, !1, !0) : g.centeredSlides && a.snapIndex < g.slidesPerView ? a.slideTo(a.virtual.slides.length + a.snapIndex, 0, !1, !0) : a.snapIndex === a.snapGrid.length - 1 && a.slideTo(a.virtual.slidesBefore, 0, !1, !0)),
        a.allowSlidePrev = u,
        a.allowSlideNext = p,
        a.emit("loopFix");
        return
    }
    let w = g.slidesPerView;
    w === "auto" ? w = a.slidesPerViewDynamic() : (w = Math.ceil(parseFloat(g.slidesPerView, 10)),
    h && w % 2 === 0 && (w = w + 1));
    const T = g.slidesPerGroupAuto ? w : g.slidesPerGroup;
    let d = T;
    d % T !== 0 && (d += T - d % T),
    d += g.loopAdditionalSlides,
    a.loopedSlides = d;
    const f = a.grid && g.grid && g.grid.rows > 1;
    c.length < w + d ? Y("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : f && g.grid.fill === "row" && Y("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
    const m = []
      , S = [];
    let b = a.activeIndex;
    typeof r > "u" ? r = a.getSlideIndex(c.filter(x=>x.classList.contains(g.slideActiveClass))[0]) : b = r;
    const L = s === "next" || !s
      , D = s === "prev" || !s;
    let M = 0
      , O = 0;
    const y = f ? Math.ceil(c.length / g.grid.rows) : c.length
      , E = (f ? c[r].column : r) + (h && typeof n > "u" ? -w / 2 + .5 : 0);
    if (E < d) {
        M = Math.max(d - E, T);
        for (let x = 0; x < d - E; x += 1) {
            const P = x - Math.floor(x / y) * y;
            if (f) {
                const I = y - P - 1;
                for (let B = c.length - 1; B >= 0; B -= 1)
                    c[B].column === I && m.push(B)
            } else
                m.push(y - P - 1)
        }
    } else if (E + w > y - d) {
        O = Math.max(E - (y - d * 2), T);
        for (let x = 0; x < O; x += 1) {
            const P = x - Math.floor(x / y) * y;
            f ? c.forEach((I,B)=>{
                I.column === P && S.push(B)
            }
            ) : S.push(P)
        }
    }
    if (a.__preventObserver__ = !0,
    requestAnimationFrame(()=>{
        a.__preventObserver__ = !1
    }
    ),
    D && m.forEach(x=>{
        c[x].swiperLoopMoveDOM = !0,
        v.prepend(c[x]),
        c[x].swiperLoopMoveDOM = !1
    }
    ),
    L && S.forEach(x=>{
        c[x].swiperLoopMoveDOM = !0,
        v.append(c[x]),
        c[x].swiperLoopMoveDOM = !1
    }
    ),
    a.recalcSlides(),
    g.slidesPerView === "auto" ? a.updateSlides() : f && (m.length > 0 && D || S.length > 0 && L) && a.slides.forEach((x,P)=>{
        a.grid.updateSlide(P, x, a.slides)
    }
    ),
    g.watchSlidesProgress && a.updateSlidesOffset(),
    t) {
        if (m.length > 0 && D) {
            if (typeof e > "u") {
                const x = a.slidesGrid[b]
                  , I = a.slidesGrid[b + M] - x;
                l ? a.setTranslate(a.translate - I) : (a.slideTo(b + Math.ceil(M), 0, !1, !0),
                n && (a.touchEventsData.startTranslate = a.touchEventsData.startTranslate - I,
                a.touchEventsData.currentTranslate = a.touchEventsData.currentTranslate - I))
            } else if (n) {
                const x = f ? m.length / g.grid.rows : m.length;
                a.slideTo(a.activeIndex + x, 0, !1, !0),
                a.touchEventsData.currentTranslate = a.translate
            }
        } else if (S.length > 0 && L)
            if (typeof e > "u") {
                const x = a.slidesGrid[b]
                  , I = a.slidesGrid[b - O] - x;
                l ? a.setTranslate(a.translate - I) : (a.slideTo(b - O, 0, !1, !0),
                n && (a.touchEventsData.startTranslate = a.touchEventsData.startTranslate - I,
                a.touchEventsData.currentTranslate = a.touchEventsData.currentTranslate - I))
            } else {
                const x = f ? S.length / g.grid.rows : S.length;
                a.slideTo(a.activeIndex - x, 0, !1, !0)
            }
    }
    if (a.allowSlidePrev = u,
    a.allowSlideNext = p,
    a.controller && a.controller.control && !o) {
        const x = {
            slideRealIndex: e,
            direction: s,
            setTranslate: n,
            activeSlideIndex: r,
            byController: !0
        };
        Array.isArray(a.controller.control) ? a.controller.control.forEach(P=>{
            !P.destroyed && P.params.loop && P.loopFix({
                ...x,
                slideTo: P.params.slidesPerView === g.slidesPerView ? t : !1
            })
        }
        ) : a.controller.control instanceof a.constructor && a.controller.control.params.loop && a.controller.control.loopFix({
            ...x,
            slideTo: a.controller.control.params.slidesPerView === g.slidesPerView ? t : !1
        })
    }
    a.emit("loopFix")
}
function xt() {
    const i = this
      , {params: e, slidesEl: t} = i;
    if (!e.loop || i.virtual && i.params.virtual.enabled)
        return;
    i.recalcSlides();
    const s = [];
    i.slides.forEach(n=>{
        const r = typeof n.swiperSlideIndex > "u" ? n.getAttribute("data-swiper-slide-index") * 1 : n.swiperSlideIndex;
        s[r] = n
    }
    ),
    i.slides.forEach(n=>{
        n.removeAttribute("data-swiper-slide-index")
    }
    ),
    s.forEach(n=>{
        t.append(n)
    }
    ),
    i.recalcSlides(),
    i.slideTo(i.realIndex, 0)
}
var Et = {
    loopCreate: Tt,
    loopFix: bt,
    loopDestroy: xt
};
function Ct(i) {
    const e = this;
    if (!e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode)
        return;
    const t = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
    e.isElement && (e.__preventObserver__ = !0),
    t.style.cursor = "move",
    t.style.cursor = i ? "grabbing" : "grab",
    e.isElement && requestAnimationFrame(()=>{
        e.__preventObserver__ = !1
    }
    )
}
function Mt() {
    const i = this;
    i.params.watchOverflow && i.isLocked || i.params.cssMode || (i.isElement && (i.__preventObserver__ = !0),
    i[i.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "",
    i.isElement && requestAnimationFrame(()=>{
        i.__preventObserver__ = !1
    }
    ))
}
var Pt = {
    setGrabCursor: Ct,
    unsetGrabCursor: Mt
};
function Lt(i, e) {
    e === void 0 && (e = this);
    function t(s) {
        if (!s || s === V() || s === k())
            return null;
        s.assignedSlot && (s = s.assignedSlot);
        const n = s.closest(i);
        return !n && !s.getRootNode ? null : n || t(s.getRootNode().host)
    }
    return t(e)
}
function ue(i, e, t) {
    const s = k()
      , {params: n} = i
      , r = n.edgeSwipeDetection
      , o = n.edgeSwipeThreshold;
    return r && (t <= o || t >= s.innerWidth - o) ? r === "prevent" ? (e.preventDefault(),
    !0) : !1 : !0
}
function It(i) {
    const e = this
      , t = V();
    let s = i;
    s.originalEvent && (s = s.originalEvent);
    const n = e.touchEventsData;
    if (s.type === "pointerdown") {
        if (n.pointerId !== null && n.pointerId !== s.pointerId)
            return;
        n.pointerId = s.pointerId
    } else
        s.type === "touchstart" && s.targetTouches.length === 1 && (n.touchId = s.targetTouches[0].identifier);
    if (s.type === "touchstart") {
        ue(e, s, s.targetTouches[0].pageX);
        return
    }
    const {params: r, touches: o, enabled: l} = e;
    if (!l || !r.simulateTouch && s.pointerType === "mouse" || e.animating && r.preventInteractionOnTransition)
        return;
    !e.animating && r.cssMode && r.loop && e.loopFix();
    let a = s.target;
    if (r.touchEventsTarget === "wrapper" && !e.wrapperEl.contains(a) || "which"in s && s.which === 3 || "button"in s && s.button > 0 || n.isTouched && n.isMoved)
        return;
    const c = !!r.noSwipingClass && r.noSwipingClass !== ""
      , u = s.composedPath ? s.composedPath() : s.path;
    c && s.target && s.target.shadowRoot && u && (a = u[0]);
    const p = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`
      , v = !!(s.target && s.target.shadowRoot);
    if (r.noSwiping && (v ? Lt(p, a) : a.closest(p))) {
        e.allowClick = !0;
        return
    }
    if (r.swipeHandler && !a.closest(r.swipeHandler))
        return;
    o.currentX = s.pageX,
    o.currentY = s.pageY;
    const g = o.currentX
      , h = o.currentY;
    if (!ue(e, s, g))
        return;
    Object.assign(n, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0
    }),
    o.startX = g,
    o.startY = h,
    n.touchStartTime = j(),
    e.allowClick = !0,
    e.updateSize(),
    e.swipeDirection = void 0,
    r.threshold > 0 && (n.allowThresholdMove = !1);
    let w = !0;
    a.matches(n.focusableElements) && (w = !1,
    a.nodeName === "SELECT" && (n.isTouched = !1)),
    t.activeElement && t.activeElement.matches(n.focusableElements) && t.activeElement !== a && t.activeElement.blur();
    const T = w && e.allowTouchMove && r.touchStartPreventDefault;
    (r.touchStartForcePreventDefault || T) && !a.isContentEditable && s.preventDefault(),
    r.freeMode && r.freeMode.enabled && e.freeMode && e.animating && !r.cssMode && e.freeMode.onTouchStart(),
    e.emit("touchStart", s)
}
function At(i) {
    const e = V()
      , t = this
      , s = t.touchEventsData
      , {params: n, touches: r, rtlTranslate: o, enabled: l} = t;
    if (!l || !n.simulateTouch && i.pointerType === "mouse")
        return;
    let a = i;
    if (a.originalEvent && (a = a.originalEvent),
    a.type === "pointermove" && (s.touchId !== null || a.pointerId !== s.pointerId))
        return;
    let c;
    if (a.type === "touchmove") {
        if (c = [...a.changedTouches].filter(L=>L.identifier === s.touchId)[0],
        !c || c.identifier !== s.touchId)
            return
    } else
        c = a;
    if (!s.isTouched) {
        s.startMoving && s.isScrolling && t.emit("touchMoveOpposite", a);
        return
    }
    const u = c.pageX
      , p = c.pageY;
    if (a.preventedByNestedSwiper) {
        r.startX = u,
        r.startY = p;
        return
    }
    if (!t.allowTouchMove) {
        a.target.matches(s.focusableElements) || (t.allowClick = !1),
        s.isTouched && (Object.assign(r, {
            startX: u,
            startY: p,
            currentX: u,
            currentY: p
        }),
        s.touchStartTime = j());
        return
    }
    if (n.touchReleaseOnEdges && !n.loop) {
        if (t.isVertical()) {
            if (p < r.startY && t.translate <= t.maxTranslate() || p > r.startY && t.translate >= t.minTranslate()) {
                s.isTouched = !1,
                s.isMoved = !1;
                return
            }
        } else if (u < r.startX && t.translate <= t.maxTranslate() || u > r.startX && t.translate >= t.minTranslate())
            return
    }
    if (e.activeElement && a.target === e.activeElement && a.target.matches(s.focusableElements)) {
        s.isMoved = !0,
        t.allowClick = !1;
        return
    }
    s.allowTouchCallbacks && t.emit("touchMove", a),
    r.previousX = r.currentX,
    r.previousY = r.currentY,
    r.currentX = u,
    r.currentY = p;
    const v = r.currentX - r.startX
      , g = r.currentY - r.startY;
    if (t.params.threshold && Math.sqrt(v ** 2 + g ** 2) < t.params.threshold)
        return;
    if (typeof s.isScrolling > "u") {
        let L;
        t.isHorizontal() && r.currentY === r.startY || t.isVertical() && r.currentX === r.startX ? s.isScrolling = !1 : v * v + g * g >= 25 && (L = Math.atan2(Math.abs(g), Math.abs(v)) * 180 / Math.PI,
        s.isScrolling = t.isHorizontal() ? L > n.touchAngle : 90 - L > n.touchAngle)
    }
    if (s.isScrolling && t.emit("touchMoveOpposite", a),
    typeof s.startMoving > "u" && (r.currentX !== r.startX || r.currentY !== r.startY) && (s.startMoving = !0),
    s.isScrolling || a.type === "touchmove" && s.preventTouchMoveFromPointerMove) {
        s.isTouched = !1;
        return
    }
    if (!s.startMoving)
        return;
    t.allowClick = !1,
    !n.cssMode && a.cancelable && a.preventDefault(),
    n.touchMoveStopPropagation && !n.nested && a.stopPropagation();
    let h = t.isHorizontal() ? v : g
      , w = t.isHorizontal() ? r.currentX - r.previousX : r.currentY - r.previousY;
    n.oneWayMovement && (h = Math.abs(h) * (o ? 1 : -1),
    w = Math.abs(w) * (o ? 1 : -1)),
    r.diff = h,
    h *= n.touchRatio,
    o && (h = -h,
    w = -w);
    const T = t.touchesDirection;
    t.swipeDirection = h > 0 ? "prev" : "next",
    t.touchesDirection = w > 0 ? "prev" : "next";
    const d = t.params.loop && !n.cssMode
      , f = t.touchesDirection === "next" && t.allowSlideNext || t.touchesDirection === "prev" && t.allowSlidePrev;
    if (!s.isMoved) {
        if (d && f && t.loopFix({
            direction: t.swipeDirection
        }),
        s.startTranslate = t.getTranslate(),
        t.setTransition(0),
        t.animating) {
            const L = new window.CustomEvent("transitionend",{
                bubbles: !0,
                cancelable: !0
            });
            t.wrapperEl.dispatchEvent(L)
        }
        s.allowMomentumBounce = !1,
        n.grabCursor && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!0),
        t.emit("sliderFirstMove", a)
    }
    let m;
    if (new Date().getTime(),
    s.isMoved && s.allowThresholdMove && T !== t.touchesDirection && d && f && Math.abs(h) >= 1) {
        Object.assign(r, {
            startX: u,
            startY: p,
            currentX: u,
            currentY: p,
            startTranslate: s.currentTranslate
        }),
        s.loopSwapReset = !0,
        s.startTranslate = s.currentTranslate;
        return
    }
    t.emit("sliderMove", a),
    s.isMoved = !0,
    s.currentTranslate = h + s.startTranslate;
    let S = !0
      , b = n.resistanceRatio;
    if (n.touchReleaseOnEdges && (b = 0),
    h > 0 ? (d && f && !m && s.allowThresholdMove && s.currentTranslate > (n.centeredSlides ? t.minTranslate() - t.slidesSizesGrid[t.activeIndex + 1] : t.minTranslate()) && t.loopFix({
        direction: "prev",
        setTranslate: !0,
        activeSlideIndex: 0
    }),
    s.currentTranslate > t.minTranslate() && (S = !1,
    n.resistance && (s.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + s.startTranslate + h) ** b))) : h < 0 && (d && f && !m && s.allowThresholdMove && s.currentTranslate < (n.centeredSlides ? t.maxTranslate() + t.slidesSizesGrid[t.slidesSizesGrid.length - 1] : t.maxTranslate()) && t.loopFix({
        direction: "next",
        setTranslate: !0,
        activeSlideIndex: t.slides.length - (n.slidesPerView === "auto" ? t.slidesPerViewDynamic() : Math.ceil(parseFloat(n.slidesPerView, 10)))
    }),
    s.currentTranslate < t.maxTranslate() && (S = !1,
    n.resistance && (s.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - s.startTranslate - h) ** b))),
    S && (a.preventedByNestedSwiper = !0),
    !t.allowSlideNext && t.swipeDirection === "next" && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate),
    !t.allowSlidePrev && t.swipeDirection === "prev" && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate),
    !t.allowSlidePrev && !t.allowSlideNext && (s.currentTranslate = s.startTranslate),
    n.threshold > 0)
        if (Math.abs(h) > n.threshold || s.allowThresholdMove) {
            if (!s.allowThresholdMove) {
                s.allowThresholdMove = !0,
                r.startX = r.currentX,
                r.startY = r.currentY,
                s.currentTranslate = s.startTranslate,
                r.diff = t.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY;
                return
            }
        } else {
            s.currentTranslate = s.startTranslate;
            return
        }
    !n.followFinger || n.cssMode || ((n.freeMode && n.freeMode.enabled && t.freeMode || n.watchSlidesProgress) && (t.updateActiveIndex(),
    t.updateSlidesClasses()),
    n.freeMode && n.freeMode.enabled && t.freeMode && t.freeMode.onTouchMove(),
    t.updateProgress(s.currentTranslate),
    t.setTranslate(s.currentTranslate))
}
function Ot(i) {
    const e = this
      , t = e.touchEventsData;
    let s = i;
    s.originalEvent && (s = s.originalEvent);
    let n;
    if (s.type === "touchend" || s.type === "touchcancel") {
        if (n = [...s.changedTouches].filter(b=>b.identifier === t.touchId)[0],
        !n || n.identifier !== t.touchId)
            return
    } else {
        if (t.touchId !== null || s.pointerId !== t.pointerId)
            return;
        n = s
    }
    if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(s.type) && !(["pointercancel", "contextmenu"].includes(s.type) && (e.browser.isSafari || e.browser.isWebView)))
        return;
    t.pointerId = null,
    t.touchId = null;
    const {params: o, touches: l, rtlTranslate: a, slidesGrid: c, enabled: u} = e;
    if (!u || !o.simulateTouch && s.pointerType === "mouse")
        return;
    if (t.allowTouchCallbacks && e.emit("touchEnd", s),
    t.allowTouchCallbacks = !1,
    !t.isTouched) {
        t.isMoved && o.grabCursor && e.setGrabCursor(!1),
        t.isMoved = !1,
        t.startMoving = !1;
        return
    }
    o.grabCursor && t.isMoved && t.isTouched && (e.allowSlideNext === !0 || e.allowSlidePrev === !0) && e.setGrabCursor(!1);
    const p = j()
      , v = p - t.touchStartTime;
    if (e.allowClick) {
        const b = s.path || s.composedPath && s.composedPath();
        e.updateClickedSlide(b && b[0] || s.target, b),
        e.emit("tap click", s),
        v < 300 && p - t.lastClickTime < 300 && e.emit("doubleTap doubleClick", s)
    }
    if (t.lastClickTime = j(),
    re(()=>{
        e.destroyed || (e.allowClick = !0)
    }
    ),
    !t.isTouched || !t.isMoved || !e.swipeDirection || l.diff === 0 && !t.loopSwapReset || t.currentTranslate === t.startTranslate && !t.loopSwapReset) {
        t.isTouched = !1,
        t.isMoved = !1,
        t.startMoving = !1;
        return
    }
    t.isTouched = !1,
    t.isMoved = !1,
    t.startMoving = !1;
    let g;
    if (o.followFinger ? g = a ? e.translate : -e.translate : g = -t.currentTranslate,
    o.cssMode)
        return;
    if (o.freeMode && o.freeMode.enabled) {
        e.freeMode.onTouchEnd({
            currentPos: g
        });
        return
    }
    const h = g >= -e.maxTranslate() && !e.params.loop;
    let w = 0
      , T = e.slidesSizesGrid[0];
    for (let b = 0; b < c.length; b += b < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup) {
        const L = b < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
        typeof c[b + L] < "u" ? (h || g >= c[b] && g < c[b + L]) && (w = b,
        T = c[b + L] - c[b]) : (h || g >= c[b]) && (w = b,
        T = c[c.length - 1] - c[c.length - 2])
    }
    let d = null
      , f = null;
    o.rewind && (e.isBeginning ? f = o.virtual && o.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (d = 0));
    const m = (g - c[w]) / T
      , S = w < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
    if (v > o.longSwipesMs) {
        if (!o.longSwipes) {
            e.slideTo(e.activeIndex);
            return
        }
        e.swipeDirection === "next" && (m >= o.longSwipesRatio ? e.slideTo(o.rewind && e.isEnd ? d : w + S) : e.slideTo(w)),
        e.swipeDirection === "prev" && (m > 1 - o.longSwipesRatio ? e.slideTo(w + S) : f !== null && m < 0 && Math.abs(m) > o.longSwipesRatio ? e.slideTo(f) : e.slideTo(w))
    } else {
        if (!o.shortSwipes) {
            e.slideTo(e.activeIndex);
            return
        }
        e.navigation && (s.target === e.navigation.nextEl || s.target === e.navigation.prevEl) ? s.target === e.navigation.nextEl ? e.slideTo(w + S) : e.slideTo(w) : (e.swipeDirection === "next" && e.slideTo(d !== null ? d : w + S),
        e.swipeDirection === "prev" && e.slideTo(f !== null ? f : w))
    }
}
function pe() {
    const i = this
      , {params: e, el: t} = i;
    if (t && t.offsetWidth === 0)
        return;
    e.breakpoints && i.setBreakpoint();
    const {allowSlideNext: s, allowSlidePrev: n, snapGrid: r} = i
      , o = i.virtual && i.params.virtual.enabled;
    i.allowSlideNext = !0,
    i.allowSlidePrev = !0,
    i.updateSize(),
    i.updateSlides(),
    i.updateSlidesClasses();
    const l = o && e.loop;
    (e.slidesPerView === "auto" || e.slidesPerView > 1) && i.isEnd && !i.isBeginning && !i.params.centeredSlides && !l ? i.slideTo(i.slides.length - 1, 0, !1, !0) : i.params.loop && !o ? i.slideToLoop(i.realIndex, 0, !1, !0) : i.slideTo(i.activeIndex, 0, !1, !0),
    i.autoplay && i.autoplay.running && i.autoplay.paused && (clearTimeout(i.autoplay.resizeTimeout),
    i.autoplay.resizeTimeout = setTimeout(()=>{
        i.autoplay && i.autoplay.running && i.autoplay.paused && i.autoplay.resume()
    }
    , 500)),
    i.allowSlidePrev = n,
    i.allowSlideNext = s,
    i.params.watchOverflow && r !== i.snapGrid && i.checkOverflow()
}
function zt(i) {
    const e = this;
    e.enabled && (e.allowClick || (e.params.preventClicks && i.preventDefault(),
    e.params.preventClicksPropagation && e.animating && (i.stopPropagation(),
    i.stopImmediatePropagation())))
}
function kt() {
    const i = this
      , {wrapperEl: e, rtlTranslate: t, enabled: s} = i;
    if (!s)
        return;
    i.previousTranslate = i.translate,
    i.isHorizontal() ? i.translate = -e.scrollLeft : i.translate = -e.scrollTop,
    i.translate === 0 && (i.translate = 0),
    i.updateActiveIndex(),
    i.updateSlidesClasses();
    let n;
    const r = i.maxTranslate() - i.minTranslate();
    r === 0 ? n = 0 : n = (i.translate - i.minTranslate()) / r,
    n !== i.progress && i.updateProgress(t ? -i.translate : i.translate),
    i.emit("setTranslate", i.translate, !1)
}
function Gt(i) {
    const e = this;
    W(e, i.target),
    !(e.params.cssMode || e.params.slidesPerView !== "auto" && !e.params.autoHeight) && e.update()
}
function Dt() {
    const i = this;
    i.documentTouchHandlerProceeded || (i.documentTouchHandlerProceeded = !0,
    i.params.touchReleaseOnEdges && (i.el.style.touchAction = "auto"))
}
const Me = (i,e)=>{
    const t = V()
      , {params: s, el: n, wrapperEl: r, device: o} = i
      , l = !!s.nested
      , a = e === "on" ? "addEventListener" : "removeEventListener"
      , c = e;
    t[a]("touchstart", i.onDocumentTouchStart, {
        passive: !1,
        capture: l
    }),
    n[a]("touchstart", i.onTouchStart, {
        passive: !1
    }),
    n[a]("pointerdown", i.onTouchStart, {
        passive: !1
    }),
    t[a]("touchmove", i.onTouchMove, {
        passive: !1,
        capture: l
    }),
    t[a]("pointermove", i.onTouchMove, {
        passive: !1,
        capture: l
    }),
    t[a]("touchend", i.onTouchEnd, {
        passive: !0
    }),
    t[a]("pointerup", i.onTouchEnd, {
        passive: !0
    }),
    t[a]("pointercancel", i.onTouchEnd, {
        passive: !0
    }),
    t[a]("touchcancel", i.onTouchEnd, {
        passive: !0
    }),
    t[a]("pointerout", i.onTouchEnd, {
        passive: !0
    }),
    t[a]("pointerleave", i.onTouchEnd, {
        passive: !0
    }),
    t[a]("contextmenu", i.onTouchEnd, {
        passive: !0
    }),
    (s.preventClicks || s.preventClicksPropagation) && n[a]("click", i.onClick, !0),
    s.cssMode && r[a]("scroll", i.onScroll),
    s.updateOnWindowResize ? i[c](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", pe, !0) : i[c]("observerUpdate", pe, !0),
    n[a]("load", i.onLoad, {
        capture: !0
    })
}
;
function _t() {
    const i = this
      , {params: e} = i;
    i.onTouchStart = It.bind(i),
    i.onTouchMove = At.bind(i),
    i.onTouchEnd = Ot.bind(i),
    i.onDocumentTouchStart = Dt.bind(i),
    e.cssMode && (i.onScroll = kt.bind(i)),
    i.onClick = zt.bind(i),
    i.onLoad = Gt.bind(i),
    Me(i, "on")
}
function Bt() {
    Me(this, "off")
}
var $t = {
    attachEvents: _t,
    detachEvents: Bt
};
const me = (i,e)=>i.grid && e.grid && e.grid.rows > 1;
function Vt() {
    const i = this
      , {realIndex: e, initialized: t, params: s, el: n} = i
      , r = s.breakpoints;
    if (!r || r && Object.keys(r).length === 0)
        return;
    const o = i.getBreakpoint(r, i.params.breakpointsBase, i.el);
    if (!o || i.currentBreakpoint === o)
        return;
    const a = (o in r ? r[o] : void 0) || i.originalParams
      , c = me(i, s)
      , u = me(i, a)
      , p = i.params.grabCursor
      , v = a.grabCursor
      , g = s.enabled;
    c && !u ? (n.classList.remove(`${s.containerModifierClass}grid`, `${s.containerModifierClass}grid-column`),
    i.emitContainerClasses()) : !c && u && (n.classList.add(`${s.containerModifierClass}grid`),
    (a.grid.fill && a.grid.fill === "column" || !a.grid.fill && s.grid.fill === "column") && n.classList.add(`${s.containerModifierClass}grid-column`),
    i.emitContainerClasses()),
    p && !v ? i.unsetGrabCursor() : !p && v && i.setGrabCursor(),
    ["navigation", "pagination", "scrollbar"].forEach(m=>{
        if (typeof a[m] > "u")
            return;
        const S = s[m] && s[m].enabled
          , b = a[m] && a[m].enabled;
        S && !b && i[m].disable(),
        !S && b && i[m].enable()
    }
    );
    const h = a.direction && a.direction !== s.direction
      , w = s.loop && (a.slidesPerView !== s.slidesPerView || h)
      , T = s.loop;
    h && t && i.changeDirection(),
    z(i.params, a);
    const d = i.params.enabled
      , f = i.params.loop;
    Object.assign(i, {
        allowTouchMove: i.params.allowTouchMove,
        allowSlideNext: i.params.allowSlideNext,
        allowSlidePrev: i.params.allowSlidePrev
    }),
    g && !d ? i.disable() : !g && d && i.enable(),
    i.currentBreakpoint = o,
    i.emit("_beforeBreakpoint", a),
    t && (w ? (i.loopDestroy(),
    i.loopCreate(e),
    i.updateSlides()) : !T && f ? (i.loopCreate(e),
    i.updateSlides()) : T && !f && i.loopDestroy()),
    i.emit("breakpoint", a)
}
function Ft(i, e, t) {
    if (e === void 0 && (e = "window"),
    !i || e === "container" && !t)
        return;
    let s = !1;
    const n = k()
      , r = e === "window" ? n.innerHeight : t.clientHeight
      , o = Object.keys(i).map(l=>{
        if (typeof l == "string" && l.indexOf("@") === 0) {
            const a = parseFloat(l.substr(1));
            return {
                value: r * a,
                point: l
            }
        }
        return {
            value: l,
            point: l
        }
    }
    );
    o.sort((l,a)=>parseInt(l.value, 10) - parseInt(a.value, 10));
    for (let l = 0; l < o.length; l += 1) {
        const {point: a, value: c} = o[l];
        e === "window" ? n.matchMedia(`(min-width: ${c}px)`).matches && (s = a) : c <= t.clientWidth && (s = a)
    }
    return s || "max"
}
var Nt = {
    setBreakpoint: Vt,
    getBreakpoint: Ft
};
function Ht(i, e) {
    const t = [];
    return i.forEach(s=>{
        typeof s == "object" ? Object.keys(s).forEach(n=>{
            s[n] && t.push(e + n)
        }
        ) : typeof s == "string" && t.push(e + s)
    }
    ),
    t
}
function Rt() {
    const i = this
      , {classNames: e, params: t, rtl: s, el: n, device: r} = i
      , o = Ht(["initialized", t.direction, {
        "free-mode": i.params.freeMode && t.freeMode.enabled
    }, {
        autoheight: t.autoHeight
    }, {
        rtl: s
    }, {
        grid: t.grid && t.grid.rows > 1
    }, {
        "grid-column": t.grid && t.grid.rows > 1 && t.grid.fill === "column"
    }, {
        android: r.android
    }, {
        ios: r.ios
    }, {
        "css-mode": t.cssMode
    }, {
        centered: t.cssMode && t.centeredSlides
    }, {
        "watch-progress": t.watchSlidesProgress
    }], t.containerModifierClass);
    e.push(...o),
    n.classList.add(...e),
    i.emitContainerClasses()
}
function qt() {
    const i = this
      , {el: e, classNames: t} = i;
    e.classList.remove(...t),
    i.emitContainerClasses()
}
var Wt = {
    addClasses: Rt,
    removeClasses: qt
};
function jt() {
    const i = this
      , {isLocked: e, params: t} = i
      , {slidesOffsetBefore: s} = t;
    if (s) {
        const n = i.slides.length - 1
          , r = i.slidesGrid[n] + i.slidesSizesGrid[n] + s * 2;
        i.isLocked = i.size > r
    } else
        i.isLocked = i.snapGrid.length === 1;
    t.allowSlideNext === !0 && (i.allowSlideNext = !i.isLocked),
    t.allowSlidePrev === !0 && (i.allowSlidePrev = !i.isLocked),
    e && e !== i.isLocked && (i.isEnd = !1),
    e !== i.isLocked && i.emit(i.isLocked ? "lock" : "unlock")
}
var Yt = {
    checkOverflow: jt
}
  , he = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: .5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: .85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1
};
function Xt(i, e) {
    return function(s) {
        s === void 0 && (s = {});
        const n = Object.keys(s)[0]
          , r = s[n];
        if (typeof r != "object" || r === null) {
            z(e, s);
            return
        }
        if (i[n] === !0 && (i[n] = {
            enabled: !0
        }),
        n === "navigation" && i[n] && i[n].enabled && !i[n].prevEl && !i[n].nextEl && (i[n].auto = !0),
        ["pagination", "scrollbar"].indexOf(n) >= 0 && i[n] && i[n].enabled && !i[n].el && (i[n].auto = !0),
        !(n in i && "enabled"in r)) {
            z(e, s);
            return
        }
        typeof i[n] == "object" && !("enabled"in i[n]) && (i[n].enabled = !0),
        i[n] || (i[n] = {
            enabled: !1
        }),
        z(e, s)
    }
}
const te = {
    eventsEmitter: We,
    update: it,
    translate: ot,
    transition: ut,
    slide: yt,
    loop: Et,
    grabCursor: Pt,
    events: $t,
    breakpoints: Nt,
    checkOverflow: Yt,
    classes: Wt
}
  , ie = {};
class G {
    constructor() {
        let e, t;
        for (var s = arguments.length, n = new Array(s), r = 0; r < s; r++)
            n[r] = arguments[r];
        n.length === 1 && n[0].constructor && Object.prototype.toString.call(n[0]).slice(8, -1) === "Object" ? t = n[0] : [e,t] = n,
        t || (t = {}),
        t = z({}, t),
        e && !t.el && (t.el = e);
        const o = V();
        if (t.el && typeof t.el == "string" && o.querySelectorAll(t.el).length > 1) {
            const u = [];
            return o.querySelectorAll(t.el).forEach(p=>{
                const v = z({}, t, {
                    el: p
                });
                u.push(new G(v))
            }
            ),
            u
        }
        const l = this;
        l.__swiper__ = !0,
        l.support = xe(),
        l.device = Ee({
            userAgent: t.userAgent
        }),
        l.browser = He(),
        l.eventsListeners = {},
        l.eventsAnyListeners = [],
        l.modules = [...l.__modules__],
        t.modules && Array.isArray(t.modules) && l.modules.push(...t.modules);
        const a = {};
        l.modules.forEach(u=>{
            u({
                params: t,
                swiper: l,
                extendParams: Xt(t, a),
                on: l.on.bind(l),
                once: l.once.bind(l),
                off: l.off.bind(l),
                emit: l.emit.bind(l)
            })
        }
        );
        const c = z({}, he, a);
        return l.params = z({}, c, ie, t),
        l.originalParams = z({}, l.params),
        l.passedParams = z({}, t),
        l.params && l.params.on && Object.keys(l.params.on).forEach(u=>{
            l.on(u, l.params.on[u])
        }
        ),
        l.params && l.params.onAny && l.onAny(l.params.onAny),
        Object.assign(l, {
            enabled: l.params.enabled,
            el: e,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal() {
                return l.params.direction === "horizontal"
            },
            isVertical() {
                return l.params.direction === "vertical"
            },
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            cssOverflowAdjustment() {
                return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
            },
            allowSlideNext: l.params.allowSlideNext,
            allowSlidePrev: l.params.allowSlidePrev,
            touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: l.params.focusableElements,
                lastClickTime: 0,
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                startMoving: void 0,
                pointerId: null,
                touchId: null
            },
            allowClick: !0,
            allowTouchMove: l.params.allowTouchMove,
            touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
        }),
        l.emit("_swiper"),
        l.params.init && l.init(),
        l
    }
    getDirectionLabel(e) {
        return this.isHorizontal() ? e : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom"
        }[e]
    }
    getSlideIndex(e) {
        const {slidesEl: t, params: s} = this
          , n = _(t, `.${s.slideClass}, swiper-slide`)
          , r = U(n[0]);
        return U(e) - r
    }
    getSlideIndexByData(e) {
        return this.getSlideIndex(this.slides.filter(t=>t.getAttribute("data-swiper-slide-index") * 1 === e)[0])
    }
    recalcSlides() {
        const e = this
          , {slidesEl: t, params: s} = e;
        e.slides = _(t, `.${s.slideClass}, swiper-slide`)
    }
    enable() {
        const e = this;
        e.enabled || (e.enabled = !0,
        e.params.grabCursor && e.setGrabCursor(),
        e.emit("enable"))
    }
    disable() {
        const e = this;
        e.enabled && (e.enabled = !1,
        e.params.grabCursor && e.unsetGrabCursor(),
        e.emit("disable"))
    }
    setProgress(e, t) {
        const s = this;
        e = Math.min(Math.max(e, 0), 1);
        const n = s.minTranslate()
          , o = (s.maxTranslate() - n) * e + n;
        s.translateTo(o, typeof t > "u" ? 0 : t),
        s.updateActiveIndex(),
        s.updateSlidesClasses()
    }
    emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el)
            return;
        const t = e.el.className.split(" ").filter(s=>s.indexOf("swiper") === 0 || s.indexOf(e.params.containerModifierClass) === 0);
        e.emit("_containerClasses", t.join(" "))
    }
    getSlideClasses(e) {
        const t = this;
        return t.destroyed ? "" : e.className.split(" ").filter(s=>s.indexOf("swiper-slide") === 0 || s.indexOf(t.params.slideClass) === 0).join(" ")
    }
    emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el)
            return;
        const t = [];
        e.slides.forEach(s=>{
            const n = e.getSlideClasses(s);
            t.push({
                slideEl: s,
                classNames: n
            }),
            e.emit("_slideClass", s, n)
        }
        ),
        e.emit("_slideClasses", t)
    }
    slidesPerViewDynamic(e, t) {
        e === void 0 && (e = "current"),
        t === void 0 && (t = !1);
        const s = this
          , {params: n, slides: r, slidesGrid: o, slidesSizesGrid: l, size: a, activeIndex: c} = s;
        let u = 1;
        if (typeof n.slidesPerView == "number")
            return n.slidesPerView;
        if (n.centeredSlides) {
            let p = r[c] ? Math.ceil(r[c].swiperSlideSize) : 0, v;
            for (let g = c + 1; g < r.length; g += 1)
                r[g] && !v && (p += Math.ceil(r[g].swiperSlideSize),
                u += 1,
                p > a && (v = !0));
            for (let g = c - 1; g >= 0; g -= 1)
                r[g] && !v && (p += r[g].swiperSlideSize,
                u += 1,
                p > a && (v = !0))
        } else if (e === "current")
            for (let p = c + 1; p < r.length; p += 1)
                (t ? o[p] + l[p] - o[c] < a : o[p] - o[c] < a) && (u += 1);
        else
            for (let p = c - 1; p >= 0; p -= 1)
                o[c] - o[p] < a && (u += 1);
        return u
    }
    update() {
        const e = this;
        if (!e || e.destroyed)
            return;
        const {snapGrid: t, params: s} = e;
        s.breakpoints && e.setBreakpoint(),
        [...e.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{
            o.complete && W(e, o)
        }
        ),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses();
        function n() {
            const o = e.rtlTranslate ? e.translate * -1 : e.translate
              , l = Math.min(Math.max(o, e.maxTranslate()), e.minTranslate());
            e.setTranslate(l),
            e.updateActiveIndex(),
            e.updateSlidesClasses()
        }
        let r;
        if (s.freeMode && s.freeMode.enabled && !s.cssMode)
            n(),
            s.autoHeight && e.updateAutoHeight();
        else {
            if ((s.slidesPerView === "auto" || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
                const o = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
                r = e.slideTo(o.length - 1, 0, !1, !0)
            } else
                r = e.slideTo(e.activeIndex, 0, !1, !0);
            r || n()
        }
        s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
        e.emit("update")
    }
    changeDirection(e, t) {
        t === void 0 && (t = !0);
        const s = this
          , n = s.params.direction;
        return e || (e = n === "horizontal" ? "vertical" : "horizontal"),
        e === n || e !== "horizontal" && e !== "vertical" || (s.el.classList.remove(`${s.params.containerModifierClass}${n}`),
        s.el.classList.add(`${s.params.containerModifierClass}${e}`),
        s.emitContainerClasses(),
        s.params.direction = e,
        s.slides.forEach(r=>{
            e === "vertical" ? r.style.width = "" : r.style.height = ""
        }
        ),
        s.emit("changeDirection"),
        t && s.update()),
        s
    }
    changeLanguageDirection(e) {
        const t = this;
        t.rtl && e === "rtl" || !t.rtl && e === "ltr" || (t.rtl = e === "rtl",
        t.rtlTranslate = t.params.direction === "horizontal" && t.rtl,
        t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
        t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
        t.el.dir = "ltr"),
        t.update())
    }
    mount(e) {
        const t = this;
        if (t.mounted)
            return !0;
        let s = e || t.params.el;
        if (typeof s == "string" && (s = document.querySelector(s)),
        !s)
            return !1;
        s.swiper = t,
        s.parentNode && s.parentNode.host && s.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
        const n = ()=>`.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let o = s && s.shadowRoot && s.shadowRoot.querySelector ? s.shadowRoot.querySelector(n()) : _(s, n())[0];
        return !o && t.params.createElements && (o = X("div", t.params.wrapperClass),
        s.append(o),
        _(s, `.${t.params.slideClass}`).forEach(l=>{
            o.append(l)
        }
        )),
        Object.assign(t, {
            el: s,
            wrapperEl: o,
            slidesEl: t.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : o,
            hostEl: t.isElement ? s.parentNode.host : s,
            mounted: !0,
            rtl: s.dir.toLowerCase() === "rtl" || $(s, "direction") === "rtl",
            rtlTranslate: t.params.direction === "horizontal" && (s.dir.toLowerCase() === "rtl" || $(s, "direction") === "rtl"),
            wrongRTL: $(o, "display") === "-webkit-box"
        }),
        !0
    }
    init(e) {
        const t = this;
        if (t.initialized || t.mount(e) === !1)
            return t;
        t.emit("beforeInit"),
        t.params.breakpoints && t.setBreakpoint(),
        t.addClasses(),
        t.updateSize(),
        t.updateSlides(),
        t.params.watchOverflow && t.checkOverflow(),
        t.params.grabCursor && t.enabled && t.setGrabCursor(),
        t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
        t.params.loop && t.loopCreate(),
        t.attachEvents();
        const n = [...t.el.querySelectorAll('[loading="lazy"]')];
        return t.isElement && n.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
        n.forEach(r=>{
            r.complete ? W(t, r) : r.addEventListener("load", o=>{
                W(t, o.target)
            }
            )
        }
        ),
        ae(t),
        t.initialized = !0,
        ae(t),
        t.emit("init"),
        t.emit("afterInit"),
        t
    }
    destroy(e, t) {
        e === void 0 && (e = !0),
        t === void 0 && (t = !0);
        const s = this
          , {params: n, el: r, wrapperEl: o, slides: l} = s;
        return typeof s.params > "u" || s.destroyed || (s.emit("beforeDestroy"),
        s.initialized = !1,
        s.detachEvents(),
        n.loop && s.loopDestroy(),
        t && (s.removeClasses(),
        r.removeAttribute("style"),
        o.removeAttribute("style"),
        l && l.length && l.forEach(a=>{
            a.classList.remove(n.slideVisibleClass, n.slideFullyVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass),
            a.removeAttribute("style"),
            a.removeAttribute("data-swiper-slide-index")
        }
        )),
        s.emit("destroy"),
        Object.keys(s.eventsListeners).forEach(a=>{
            s.off(a)
        }
        ),
        e !== !1 && (s.el.swiper = null,
        ke(s)),
        s.destroyed = !0),
        null
    }
    static extendDefaults(e) {
        z(ie, e)
    }
    static get extendedDefaults() {
        return ie
    }
    static get defaults() {
        return he
    }
    static installModule(e) {
        G.prototype.__modules__ || (G.prototype.__modules__ = []);
        const t = G.prototype.__modules__;
        typeof e == "function" && t.indexOf(e) < 0 && t.push(e)
    }
    static use(e) {
        return Array.isArray(e) ? (e.forEach(t=>G.installModule(t)),
        G) : (G.installModule(e),
        G)
    }
}
Object.keys(te).forEach(i=>{
    Object.keys(te[i]).forEach(e=>{
        G.prototype[e] = te[i][e]
    }
    )
}
);
G.use([Re, qe]);
function Pe(i, e, t, s) {
    return i.params.createElements && Object.keys(s).forEach(n=>{
        if (!t[n] && t.auto === !0) {
            let r = _(i.el, `.${s[n]}`)[0];
            r || (r = X("div", s[n]),
            r.className = s[n],
            i.el.append(r)),
            t[n] = r,
            e[n] = r
        }
    }
    ),
    t
}
function Ut(i) {
    let {swiper: e, extendParams: t, on: s, emit: n} = i;
    t({
        navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled"
        }
    }),
    e.navigation = {
        nextEl: null,
        prevEl: null
    };
    function r(h) {
        let w;
        return h && typeof h == "string" && e.isElement && (w = e.el.querySelector(h),
        w) ? w : (h && (typeof h == "string" && (w = [...document.querySelectorAll(h)]),
        e.params.uniqueNavElements && typeof h == "string" && w && w.length > 1 && e.el.querySelectorAll(h).length === 1 ? w = e.el.querySelector(h) : w && w.length === 1 && (w = w[0])),
        h && !w ? h : w)
    }
    function o(h, w) {
        const T = e.params.navigation;
        h = A(h),
        h.forEach(d=>{
            d && (d.classList[w ? "add" : "remove"](...T.disabledClass.split(" ")),
            d.tagName === "BUTTON" && (d.disabled = w),
            e.params.watchOverflow && e.enabled && d.classList[e.isLocked ? "add" : "remove"](T.lockClass))
        }
        )
    }
    function l() {
        const {nextEl: h, prevEl: w} = e.navigation;
        if (e.params.loop) {
            o(w, !1),
            o(h, !1);
            return
        }
        o(w, e.isBeginning && !e.params.rewind),
        o(h, e.isEnd && !e.params.rewind)
    }
    function a(h) {
        h.preventDefault(),
        !(e.isBeginning && !e.params.loop && !e.params.rewind) && (e.slidePrev(),
        n("navigationPrev"))
    }
    function c(h) {
        h.preventDefault(),
        !(e.isEnd && !e.params.loop && !e.params.rewind) && (e.slideNext(),
        n("navigationNext"))
    }
    function u() {
        const h = e.params.navigation;
        if (e.params.navigation = Pe(e, e.originalParams.navigation, e.params.navigation, {
            nextEl: "swiper-button-next",
            prevEl: "swiper-button-prev"
        }),
        !(h.nextEl || h.prevEl))
            return;
        let w = r(h.nextEl)
          , T = r(h.prevEl);
        Object.assign(e.navigation, {
            nextEl: w,
            prevEl: T
        }),
        w = A(w),
        T = A(T);
        const d = (f,m)=>{
            f && f.addEventListener("click", m === "next" ? c : a),
            !e.enabled && f && f.classList.add(...h.lockClass.split(" "))
        }
        ;
        w.forEach(f=>d(f, "next")),
        T.forEach(f=>d(f, "prev"))
    }
    function p() {
        let {nextEl: h, prevEl: w} = e.navigation;
        h = A(h),
        w = A(w);
        const T = (d,f)=>{
            d.removeEventListener("click", f === "next" ? c : a),
            d.classList.remove(...e.params.navigation.disabledClass.split(" "))
        }
        ;
        h.forEach(d=>T(d, "next")),
        w.forEach(d=>T(d, "prev"))
    }
    s("init", ()=>{
        e.params.navigation.enabled === !1 ? g() : (u(),
        l())
    }
    ),
    s("toEdge fromEdge lock unlock", ()=>{
        l()
    }
    ),
    s("destroy", ()=>{
        p()
    }
    ),
    s("enable disable", ()=>{
        let {nextEl: h, prevEl: w} = e.navigation;
        if (h = A(h),
        w = A(w),
        e.enabled) {
            l();
            return
        }
        [...h, ...w].filter(T=>!!T).forEach(T=>T.classList.add(e.params.navigation.lockClass))
    }
    ),
    s("click", (h,w)=>{
        let {nextEl: T, prevEl: d} = e.navigation;
        T = A(T),
        d = A(d);
        const f = w.target;
        if (e.params.navigation.hideOnClick && !d.includes(f) && !T.includes(f)) {
            if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === f || e.pagination.el.contains(f)))
                return;
            let m;
            T.length ? m = T[0].classList.contains(e.params.navigation.hiddenClass) : d.length && (m = d[0].classList.contains(e.params.navigation.hiddenClass)),
            n(m === !0 ? "navigationShow" : "navigationHide"),
            [...T, ...d].filter(S=>!!S).forEach(S=>S.classList.toggle(e.params.navigation.hiddenClass))
        }
    }
    );
    const v = ()=>{
        e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),
        u(),
        l()
    }
      , g = ()=>{
        e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),
        p()
    }
    ;
    Object.assign(e.navigation, {
        enable: v,
        disable: g,
        update: l,
        init: u,
        destroy: p
    })
}
function F(i) {
    return i === void 0 && (i = ""),
    `.${i.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`
}
function Kt(i) {
    let {swiper: e, extendParams: t, on: s, emit: n} = i;
    const r = "swiper-pagination";
    t({
        pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: d=>d,
            formatFractionTotal: d=>d,
            bulletClass: `${r}-bullet`,
            bulletActiveClass: `${r}-bullet-active`,
            modifierClass: `${r}-`,
            currentClass: `${r}-current`,
            totalClass: `${r}-total`,
            hiddenClass: `${r}-hidden`,
            progressbarFillClass: `${r}-progressbar-fill`,
            progressbarOppositeClass: `${r}-progressbar-opposite`,
            clickableClass: `${r}-clickable`,
            lockClass: `${r}-lock`,
            horizontalClass: `${r}-horizontal`,
            verticalClass: `${r}-vertical`,
            paginationDisabledClass: `${r}-disabled`
        }
    }),
    e.pagination = {
        el: null,
        bullets: []
    };
    let o, l = 0;
    function a() {
        return !e.params.pagination.el || !e.pagination.el || Array.isArray(e.pagination.el) && e.pagination.el.length === 0
    }
    function c(d, f) {
        const {bulletActiveClass: m} = e.params.pagination;
        d && (d = d[`${f === "prev" ? "previous" : "next"}ElementSibling`],
        d && (d.classList.add(`${m}-${f}`),
        d = d[`${f === "prev" ? "previous" : "next"}ElementSibling`],
        d && d.classList.add(`${m}-${f}-${f}`)))
    }
    function u(d) {
        const f = d.target.closest(F(e.params.pagination.bulletClass));
        if (!f)
            return;
        d.preventDefault();
        const m = U(f) * e.params.slidesPerGroup;
        if (e.params.loop) {
            if (e.realIndex === m)
                return;
            e.slideToLoop(m)
        } else
            e.slideTo(m)
    }
    function p() {
        const d = e.rtl
          , f = e.params.pagination;
        if (a())
            return;
        let m = e.pagination.el;
        m = A(m);
        let S, b;
        const L = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length
          , D = e.params.loop ? Math.ceil(L / e.params.slidesPerGroup) : e.snapGrid.length;
        if (e.params.loop ? (b = e.previousRealIndex || 0,
        S = e.params.slidesPerGroup > 1 ? Math.floor(e.realIndex / e.params.slidesPerGroup) : e.realIndex) : typeof e.snapIndex < "u" ? (S = e.snapIndex,
        b = e.previousSnapIndex) : (b = e.previousIndex || 0,
        S = e.activeIndex || 0),
        f.type === "bullets" && e.pagination.bullets && e.pagination.bullets.length > 0) {
            const M = e.pagination.bullets;
            let O, y, C;
            if (f.dynamicBullets && (o = ne(M[0], e.isHorizontal() ? "width" : "height"),
            m.forEach(E=>{
                E.style[e.isHorizontal() ? "width" : "height"] = `${o * (f.dynamicMainBullets + 4)}px`
            }
            ),
            f.dynamicMainBullets > 1 && b !== void 0 && (l += S - (b || 0),
            l > f.dynamicMainBullets - 1 ? l = f.dynamicMainBullets - 1 : l < 0 && (l = 0)),
            O = Math.max(S - l, 0),
            y = O + (Math.min(M.length, f.dynamicMainBullets) - 1),
            C = (y + O) / 2),
            M.forEach(E=>{
                const x = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(P=>`${f.bulletActiveClass}${P}`)].map(P=>typeof P == "string" && P.includes(" ") ? P.split(" ") : P).flat();
                E.classList.remove(...x)
            }
            ),
            m.length > 1)
                M.forEach(E=>{
                    const x = U(E);
                    x === S ? E.classList.add(...f.bulletActiveClass.split(" ")) : e.isElement && E.setAttribute("part", "bullet"),
                    f.dynamicBullets && (x >= O && x <= y && E.classList.add(...`${f.bulletActiveClass}-main`.split(" ")),
                    x === O && c(E, "prev"),
                    x === y && c(E, "next"))
                }
                );
            else {
                const E = M[S];
                if (E && E.classList.add(...f.bulletActiveClass.split(" ")),
                e.isElement && M.forEach((x,P)=>{
                    x.setAttribute("part", P === S ? "bullet-active" : "bullet")
                }
                ),
                f.dynamicBullets) {
                    const x = M[O]
                      , P = M[y];
                    for (let I = O; I <= y; I += 1)
                        M[I] && M[I].classList.add(...`${f.bulletActiveClass}-main`.split(" "));
                    c(x, "prev"),
                    c(P, "next")
                }
            }
            if (f.dynamicBullets) {
                const E = Math.min(M.length, f.dynamicMainBullets + 4)
                  , x = (o * E - o) / 2 - C * o
                  , P = d ? "right" : "left";
                M.forEach(I=>{
                    I.style[e.isHorizontal() ? P : "top"] = `${x}px`
                }
                )
            }
        }
        m.forEach((M,O)=>{
            if (f.type === "fraction" && (M.querySelectorAll(F(f.currentClass)).forEach(y=>{
                y.textContent = f.formatFractionCurrent(S + 1)
            }
            ),
            M.querySelectorAll(F(f.totalClass)).forEach(y=>{
                y.textContent = f.formatFractionTotal(D)
            }
            )),
            f.type === "progressbar") {
                let y;
                f.progressbarOpposite ? y = e.isHorizontal() ? "vertical" : "horizontal" : y = e.isHorizontal() ? "horizontal" : "vertical";
                const C = (S + 1) / D;
                let E = 1
                  , x = 1;
                y === "horizontal" ? E = C : x = C,
                M.querySelectorAll(F(f.progressbarFillClass)).forEach(P=>{
                    P.style.transform = `translate3d(0,0,0) scaleX(${E}) scaleY(${x})`,
                    P.style.transitionDuration = `${e.params.speed}ms`
                }
                )
            }
            f.type === "custom" && f.renderCustom ? (M.innerHTML = f.renderCustom(e, S + 1, D),
            O === 0 && n("paginationRender", M)) : (O === 0 && n("paginationRender", M),
            n("paginationUpdate", M)),
            e.params.watchOverflow && e.enabled && M.classList[e.isLocked ? "add" : "remove"](f.lockClass)
        }
        )
    }
    function v() {
        const d = e.params.pagination;
        if (a())
            return;
        const f = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.grid && e.params.grid.rows > 1 ? e.slides.length / Math.ceil(e.params.grid.rows) : e.slides.length;
        let m = e.pagination.el;
        m = A(m);
        let S = "";
        if (d.type === "bullets") {
            let b = e.params.loop ? Math.ceil(f / e.params.slidesPerGroup) : e.snapGrid.length;
            e.params.freeMode && e.params.freeMode.enabled && b > f && (b = f);
            for (let L = 0; L < b; L += 1)
                d.renderBullet ? S += d.renderBullet.call(e, L, d.bulletClass) : S += `<${d.bulletElement} ${e.isElement ? 'part="bullet"' : ""} class="${d.bulletClass}"></${d.bulletElement}>`
        }
        d.type === "fraction" && (d.renderFraction ? S = d.renderFraction.call(e, d.currentClass, d.totalClass) : S = `<span class="${d.currentClass}"></span> / <span class="${d.totalClass}"></span>`),
        d.type === "progressbar" && (d.renderProgressbar ? S = d.renderProgressbar.call(e, d.progressbarFillClass) : S = `<span class="${d.progressbarFillClass}"></span>`),
        e.pagination.bullets = [],
        m.forEach(b=>{
            d.type !== "custom" && (b.innerHTML = S || ""),
            d.type === "bullets" && e.pagination.bullets.push(...b.querySelectorAll(F(d.bulletClass)))
        }
        ),
        d.type !== "custom" && n("paginationRender", m[0])
    }
    function g() {
        e.params.pagination = Pe(e, e.originalParams.pagination, e.params.pagination, {
            el: "swiper-pagination"
        });
        const d = e.params.pagination;
        if (!d.el)
            return;
        let f;
        typeof d.el == "string" && e.isElement && (f = e.el.querySelector(d.el)),
        !f && typeof d.el == "string" && (f = [...document.querySelectorAll(d.el)]),
        f || (f = d.el),
        !(!f || f.length === 0) && (e.params.uniqueNavElements && typeof d.el == "string" && Array.isArray(f) && f.length > 1 && (f = [...e.el.querySelectorAll(d.el)],
        f.length > 1 && (f = f.filter(m=>be(m, ".swiper")[0] === e.el)[0])),
        Array.isArray(f) && f.length === 1 && (f = f[0]),
        Object.assign(e.pagination, {
            el: f
        }),
        f = A(f),
        f.forEach(m=>{
            d.type === "bullets" && d.clickable && m.classList.add(...(d.clickableClass || "").split(" ")),
            m.classList.add(d.modifierClass + d.type),
            m.classList.add(e.isHorizontal() ? d.horizontalClass : d.verticalClass),
            d.type === "bullets" && d.dynamicBullets && (m.classList.add(`${d.modifierClass}${d.type}-dynamic`),
            l = 0,
            d.dynamicMainBullets < 1 && (d.dynamicMainBullets = 1)),
            d.type === "progressbar" && d.progressbarOpposite && m.classList.add(d.progressbarOppositeClass),
            d.clickable && m.addEventListener("click", u),
            e.enabled || m.classList.add(d.lockClass)
        }
        ))
    }
    function h() {
        const d = e.params.pagination;
        if (a())
            return;
        let f = e.pagination.el;
        f && (f = A(f),
        f.forEach(m=>{
            m.classList.remove(d.hiddenClass),
            m.classList.remove(d.modifierClass + d.type),
            m.classList.remove(e.isHorizontal() ? d.horizontalClass : d.verticalClass),
            d.clickable && (m.classList.remove(...(d.clickableClass || "").split(" ")),
            m.removeEventListener("click", u))
        }
        )),
        e.pagination.bullets && e.pagination.bullets.forEach(m=>m.classList.remove(...d.bulletActiveClass.split(" ")))
    }
    s("changeDirection", ()=>{
        if (!e.pagination || !e.pagination.el)
            return;
        const d = e.params.pagination;
        let {el: f} = e.pagination;
        f = A(f),
        f.forEach(m=>{
            m.classList.remove(d.horizontalClass, d.verticalClass),
            m.classList.add(e.isHorizontal() ? d.horizontalClass : d.verticalClass)
        }
        )
    }
    ),
    s("init", ()=>{
        e.params.pagination.enabled === !1 ? T() : (g(),
        v(),
        p())
    }
    ),
    s("activeIndexChange", ()=>{
        typeof e.snapIndex > "u" && p()
    }
    ),
    s("snapIndexChange", ()=>{
        p()
    }
    ),
    s("snapGridLengthChange", ()=>{
        v(),
        p()
    }
    ),
    s("destroy", ()=>{
        h()
    }
    ),
    s("enable disable", ()=>{
        let {el: d} = e.pagination;
        d && (d = A(d),
        d.forEach(f=>f.classList[e.enabled ? "remove" : "add"](e.params.pagination.lockClass)))
    }
    ),
    s("lock unlock", ()=>{
        p()
    }
    ),
    s("click", (d,f)=>{
        const m = f.target
          , S = A(e.pagination.el);
        if (e.params.pagination.el && e.params.pagination.hideOnClick && S && S.length > 0 && !m.classList.contains(e.params.pagination.bulletClass)) {
            if (e.navigation && (e.navigation.nextEl && m === e.navigation.nextEl || e.navigation.prevEl && m === e.navigation.prevEl))
                return;
            const b = S[0].classList.contains(e.params.pagination.hiddenClass);
            n(b === !0 ? "paginationShow" : "paginationHide"),
            S.forEach(L=>L.classList.toggle(e.params.pagination.hiddenClass))
        }
    }
    );
    const w = ()=>{
        e.el.classList.remove(e.params.pagination.paginationDisabledClass);
        let {el: d} = e.pagination;
        d && (d = A(d),
        d.forEach(f=>f.classList.remove(e.params.pagination.paginationDisabledClass))),
        g(),
        v(),
        p()
    }
      , T = ()=>{
        e.el.classList.add(e.params.pagination.paginationDisabledClass);
        let {el: d} = e.pagination;
        d && (d = A(d),
        d.forEach(f=>f.classList.add(e.params.pagination.paginationDisabledClass))),
        h()
    }
    ;
    Object.assign(e.pagination, {
        enable: w,
        disable: T,
        render: v,
        update: p,
        init: g,
        destroy: h
    })
}
const se = document.querySelector(".section-quotes__slider-wrapper");
var ve, we;
if (se) {
    const i = new G(".swiper",{
        modules: [Ut, Kt],
        loop: !0,
        pagination: {
            el: ".swiper-pagination"
        },
        autoHeight: !0
    });
    (ve = se.querySelector(".section-quotes__slider-next")) == null || ve.addEventListener("click", ()=>{
        i.slideNext()
    }
    ),
    (we = se.querySelector(".section-quotes__slider-prev")) == null || we.addEventListener("click", ()=>{
        i.slidePrev()
    }
    )
}
document.querySelectorAll(".section-compare__selector-item").forEach(i=>{
    i.addEventListener("click", ()=>{
        document.querySelectorAll(".section-compare__list-item").forEach(e=>{
            e.dataset.tab === i.dataset.target ? e.classList.add("section-compare__list-item-selected") : e.classList.remove("section-compare__list-item-selected")
        }
        ),
        document.querySelectorAll(".section-compare__selector-item").forEach(e=>{
            e.dataset.target === i.dataset.target ? e.classList.add("section-compare__selector-item_active") : e.classList.remove("section-compare__selector-item_active")
        }
        )
    }
    )
}
);
document.querySelectorAll(".section-faq__list-item").forEach(i=>{
    i.addEventListener("click", ()=>{
        i.classList.toggle("opened")
    }
    )
}
);
const ge = i=>{
    const e = document.createElement("textarea");
    e.value = i ?? "",
    e.style.position = "absolute",
    e.style.opacity = "0",
    document.body.appendChild(e),
    e.select(),
    document.execCommand("copy"),
    e.remove()
}
  , Jt = i=>{
    navigator.clipboard ? navigator.clipboard.writeText(i).then(function() {}).catch(function() {
        ge(i)
    }) : ge(i)
}
  , N = document.querySelector(".contract-tab__copy");
if (N) {
    const i = N.querySelector(".contract-tab__copy-btn");
    i == null || i.addEventListener("click", ()=>{
        N.classList.add("contract-tab__copy_copied"),
        Jt(N.dataset.copy),
        setTimeout(()=>{
            N.classList.remove("contract-tab__copy_copied")
        }
        , 3e3)
    }
    )
}
