import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import * as React from "react";
import React__default, { use, createContext, useMemo, useContext, useRef, useState, useEffectEvent, useEffect, Suspense, lazy, forwardRef, useCallback, createElement, useLayoutEffect, Fragment as Fragment$1, useId as useId$1 } from "react";
import { t as toRscUrl, g as getPrefetchedUrls, s as storePrefetchResponse, u as useParams, a as useRouter$1, b as usePathname$1, c as getLayoutSegmentContext } from "../index.js";
import { transformProps, transformSourceProps } from "@unpic/core";
import { twMerge } from "tailwind-merge";
import { cva } from "class-variance-authority";
import { composeEventHandlers } from "@radix-ui/primitive";
import * as ReactDOM from "react-dom";
import ReactDOM__default from "react-dom";
import { clamp as clamp$1 } from "@radix-ui/number";
import scrollIntoView from "scroll-into-view-if-needed";
import { computePosition, offset as offset$1, shift as shift$1, limitShift as limitShift$1, flip as flip$1, size as size$1, hide as hide$1, arrow as arrow$2, autoUpdate } from "@floating-ui/dom";
import { hideOthers } from "aria-hidden";
import { __assign, __rest, __spreadArray } from "tslib";
import { getNonce } from "get-nonce";
const notImplemented = () => {
  throw new Error("You need to wrap your application inside `FrameworkProvider`.");
};
const FrameworkContext = createContext({
  useParams: notImplemented,
  useRouter: notImplemented,
  usePathname: notImplemented
});
function FrameworkProvider({ Link: Link3, useRouter: useRouter2, useParams: useParams2, usePathname: usePathname2, Image: Image3, children }) {
  return /* @__PURE__ */ jsx(FrameworkContext, {
    value: useMemo(() => ({
      usePathname: usePathname2,
      useRouter: useRouter2,
      Link: Link3,
      Image: Image3,
      useParams: useParams2
    }), [
      Link3,
      usePathname2,
      useRouter2,
      useParams2,
      Image3
    ]),
    children
  });
}
function usePathname() {
  return use(FrameworkContext).usePathname();
}
function useRouter() {
  return use(FrameworkContext).useRouter();
}
function Image$2(props) {
  const { Image: Image3 } = use(FrameworkContext);
  if (!Image3) {
    const { src, alt, priority, ...rest } = props;
    return /* @__PURE__ */ jsx("img", {
      alt,
      src,
      fetchPriority: priority ? "high" : "auto",
      ...rest
    });
  }
  return /* @__PURE__ */ jsx(Image3, { ...props });
}
function Link$2(props) {
  const { Link: Link3 } = use(FrameworkContext);
  if (!Link3) {
    const { href, prefetch: _2, ...rest } = props;
    return /* @__PURE__ */ jsx("a", {
      href,
      ...rest
    });
  }
  return /* @__PURE__ */ jsx(Link3, { ...props });
}
const defaultTranslations = {
  search: "Search",
  searchNoResult: "No results found",
  toc: "On this page",
  tocNoHeadings: "No Headings",
  lastUpdate: "Last updated on",
  chooseLanguage: "Choose a language",
  nextPage: "Next Page",
  previousPage: "Previous Page",
  chooseTheme: "Theme",
  editOnGithub: "Edit on GitHub"
};
const I18nContext = createContext({ text: defaultTranslations });
function I18nLabel(props) {
  const { text } = useI18n();
  return text[props.label];
}
function useI18n() {
  return useContext(I18nContext);
}
function I18nProvider({ locales = [], locale, onLocaleChange, children, translations }) {
  const router = useRouter();
  const pathname = usePathname();
  const onChange = (value) => {
    if (onLocaleChange) return onLocaleChange(value);
    const segments = pathname.split("/").filter((v) => v.length > 0);
    if (segments[0] !== locale) segments.unshift(value);
    else segments[0] = value;
    router.push(`/${segments.join("/")}`);
  };
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;
  return /* @__PURE__ */ jsx(I18nContext, {
    value: useMemo(() => ({
      locale,
      locales,
      text: {
        ...defaultTranslations,
        ...translations
      },
      onChange: (v) => onChangeRef.current(v)
    }), [
      locale,
      locales,
      translations
    ]),
    children
  });
}
const SearchContext = createContext({
  enabled: false,
  open: false,
  hotKey: [],
  setOpenSearch: () => void 0
});
function useSearchContext() {
  return use(SearchContext);
}
function MetaOrControl() {
  const [key, setKey] = useState("⌘");
  useEffect(() => {
    if (window.navigator.userAgent.includes("Windows")) setKey("Ctrl");
  }, []);
  return key;
}
function SearchProvider({ SearchDialog, children, preload = true, options, hotKey = [{
  key: (e) => e.metaKey || e.ctrlKey,
  display: /* @__PURE__ */ jsx(MetaOrControl, {})
}, {
  key: "k",
  display: "K"
}], links }) {
  const [isOpen, setIsOpen] = useState(preload ? false : void 0);
  const onKeyDown = useEffectEvent((e) => {
    if (hotKey.every((v) => typeof v.key === "string" ? e.key === v.key : v.key(e))) {
      setIsOpen((open) => !open);
      e.preventDefault();
    }
  });
  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [hotKey]);
  return /* @__PURE__ */ jsxs(SearchContext, {
    value: useMemo(() => ({
      enabled: true,
      open: isOpen ?? false,
      hotKey,
      setOpenSearch: setIsOpen
    }), [isOpen, hotKey]),
    children: [isOpen !== void 0 && /* @__PURE__ */ jsx(Suspense, {
      fallback: null,
      children: /* @__PURE__ */ jsx(SearchDialog, {
        open: isOpen,
        onOpenChange: setIsOpen,
        links,
        ...options
      })
    }), children]
  });
}
var DirectionContext = React.createContext(void 0);
var DirectionProvider = (props) => {
  const { dir, children } = props;
  return /* @__PURE__ */ jsx(DirectionContext.Provider, { value: dir, children });
};
function useDirection(localDir) {
  const globalDir = React.useContext(DirectionContext);
  return localDir || globalDir || "ltr";
}
var M = (e, i, s, u, m, a, l, h) => {
  let d = document.documentElement, w = ["light", "dark"];
  function p(n) {
    (Array.isArray(e) ? e : [e]).forEach((y) => {
      let k = y === "class", S = k && a ? m.map((f) => a[f] || f) : m;
      k ? (d.classList.remove(...S), d.classList.add(a && a[n] ? a[n] : n)) : d.setAttribute(y, n);
    }), R(n);
  }
  function R(n) {
    h && w.includes(n) && (d.style.colorScheme = n);
  }
  function c() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  if (u) p(u);
  else try {
    let n = localStorage.getItem(i) || s, y = l && n === "system" ? c() : n;
    p(y);
  } catch (n) {
  }
};
var b = ["light", "dark"], I = "(prefers-color-scheme: dark)", O = typeof window == "undefined", x = React.createContext(void 0), U = { setTheme: (e) => {
}, themes: [] }, z = () => {
  var e;
  return (e = React.useContext(x)) != null ? e : U;
}, J = (e) => React.useContext(x) ? React.createElement(React.Fragment, null, e.children) : React.createElement(V, { ...e }), N = ["light", "dark"], V = ({ forcedTheme: e, disableTransitionOnChange: i = false, enableSystem: s = true, enableColorScheme: u = true, storageKey: m = "theme", themes: a = N, defaultTheme: l = s ? "system" : "light", attribute: h = "data-theme", value: d, children: w, nonce: p, scriptProps: R }) => {
  let [c, n] = React.useState(() => H(m, l)), [T, y] = React.useState(() => c === "system" ? E() : c), k = d ? Object.values(d) : a, S = React.useCallback((o) => {
    let r = o;
    if (!r) return;
    o === "system" && s && (r = E());
    let v = d ? d[r] : r, C = i ? W(p) : null, P = document.documentElement, L = (g) => {
      g === "class" ? (P.classList.remove(...k), v && P.classList.add(v)) : g.startsWith("data-") && (v ? P.setAttribute(g, v) : P.removeAttribute(g));
    };
    if (Array.isArray(h) ? h.forEach(L) : L(h), u) {
      let g = b.includes(l) ? l : null, D = b.includes(r) ? r : g;
      P.style.colorScheme = D;
    }
    C == null || C();
  }, [p]), f = React.useCallback((o) => {
    let r = typeof o == "function" ? o(c) : o;
    n(r);
    try {
      localStorage.setItem(m, r);
    } catch (v) {
    }
  }, [c]), A = React.useCallback((o) => {
    let r = E(o);
    y(r), c === "system" && s && !e && S("system");
  }, [c, e]);
  React.useEffect(() => {
    let o = window.matchMedia(I);
    return o.addListener(A), A(o), () => o.removeListener(A);
  }, [A]), React.useEffect(() => {
    let o = (r) => {
      r.key === m && (r.newValue ? n(r.newValue) : f(l));
    };
    return window.addEventListener("storage", o), () => window.removeEventListener("storage", o);
  }, [f]), React.useEffect(() => {
    S(e != null ? e : c);
  }, [e, c]);
  let Q = React.useMemo(() => ({ theme: c, setTheme: f, forcedTheme: e, resolvedTheme: c === "system" ? T : c, themes: s ? [...a, "system"] : a, systemTheme: s ? T : void 0 }), [c, f, e, T, s, a]);
  return React.createElement(x.Provider, { value: Q }, React.createElement(_, { forcedTheme: e, storageKey: m, attribute: h, enableSystem: s, enableColorScheme: u, defaultTheme: l, value: d, themes: a, nonce: p, scriptProps: R }), w);
}, _ = React.memo(({ forcedTheme: e, storageKey: i, attribute: s, enableSystem: u, enableColorScheme: m, defaultTheme: a, value: l, themes: h, nonce: d, scriptProps: w }) => {
  let p = JSON.stringify([s, i, a, e, h, l, u, m]).slice(1, -1);
  return React.createElement("script", { ...w, suppressHydrationWarning: true, nonce: typeof window == "undefined" ? d : "", dangerouslySetInnerHTML: { __html: `(${M.toString()})(${p})` } });
}), H = (e, i) => {
  if (O) return;
  let s;
  try {
    s = localStorage.getItem(e) || void 0;
  } catch (u) {
  }
  return s || i;
}, W = (e) => {
  let i = document.createElement("style");
  return e && i.setAttribute("nonce", e), i.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(i), () => {
    window.getComputedStyle(document.body), setTimeout(() => {
      document.head.removeChild(i);
    }, 1);
  };
}, E = (e) => (e || (e = window.matchMedia(I)), e.matches ? "dark" : "light");
const DefaultSearchDialog = lazy(() => import("./search-default-CFx-Yegw.js"));
function RootProvider$1({ children, dir = "ltr", theme = {}, search, i18n }) {
  let body = children;
  if (search?.enabled !== false) body = /* @__PURE__ */ jsx(SearchProvider, {
    SearchDialog: DefaultSearchDialog,
    ...search,
    children: body
  });
  if (theme?.enabled !== false) body = /* @__PURE__ */ jsx(J, {
    attribute: "class",
    defaultTheme: "system",
    enableSystem: true,
    disableTransitionOnChange: true,
    ...theme,
    children: body
  });
  if (i18n) body = /* @__PURE__ */ jsx(I18nProvider, {
    ...i18n,
    children: body
  });
  return /* @__PURE__ */ jsx(DirectionProvider, {
    dir,
    children: body
  });
}
const DANGEROUS_SCHEME_RE = /^[\s\u200B\uFEFF]*(javascript|data|vbscript)\s*:/i;
function isDangerousScheme(url) {
  return DANGEROUS_SCHEME_RE.test(url);
}
const LinkStatusContext = createContext({ pending: false });
function resolveHref(href) {
  if (typeof href === "string")
    return href;
  let url = href.pathname ?? "/";
  if (href.query) {
    const params = new URLSearchParams(href.query);
    url += `?${params.toString()}`;
  }
  return url;
}
function withBasePath(path) {
  {
    return path;
  }
}
function isHashOnlyChange(href) {
  if (href.startsWith("#"))
    return true;
  try {
    const current = new URL(window.location.href);
    const next = new URL(href, window.location.href);
    return current.pathname === next.pathname && current.search === next.search && next.hash !== "";
  } catch {
    return false;
  }
}
function resolveRelativeHref(href) {
  if (typeof window === "undefined")
    return href;
  if (href.startsWith("/") || href.startsWith("http://") || href.startsWith("https://") || href.startsWith("//")) {
    return href;
  }
  try {
    const resolved = new URL(href, window.location.href);
    return resolved.pathname + resolved.search + resolved.hash;
  } catch {
    return href;
  }
}
function scrollToHash(hash) {
  if (!hash || hash === "#") {
    window.scrollTo(0, 0);
    return;
  }
  const id = hash.slice(1);
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "auto" });
  }
}
function prefetchUrl(href) {
  if (typeof window === "undefined")
    return;
  const fullHref = withBasePath(href);
  if (fullHref.startsWith("http://") || fullHref.startsWith("https://") || fullHref.startsWith("//"))
    return;
  const rscUrl = toRscUrl(fullHref);
  const prefetched = getPrefetchedUrls();
  if (prefetched.has(rscUrl))
    return;
  prefetched.add(rscUrl);
  const schedule = window.requestIdleCallback ?? ((fn) => setTimeout(fn, 100));
  schedule(() => {
    const win = window;
    if (typeof win.__VINEXT_RSC_NAVIGATE__ === "function") {
      fetch(rscUrl, {
        headers: { Accept: "text/x-component" },
        credentials: "include",
        priority: "low",
        // @ts-expect-error — purpose is a valid fetch option in some browsers
        purpose: "prefetch"
      }).then((response) => {
        if (response.ok) {
          storePrefetchResponse(rscUrl, response);
        } else {
          prefetched.delete(rscUrl);
        }
      }).catch(() => {
        prefetched.delete(rscUrl);
      });
    } else if (win.__NEXT_DATA__?.__vinext?.pageModuleUrl) {
      const link = document.createElement("link");
      link.rel = "prefetch";
      link.href = fullHref;
      link.as = "document";
      document.head.appendChild(link);
    }
  });
}
let sharedObserver = null;
const observerCallbacks = /* @__PURE__ */ new WeakMap();
function getSharedObserver() {
  if (typeof window === "undefined" || typeof IntersectionObserver === "undefined")
    return null;
  if (sharedObserver)
    return sharedObserver;
  sharedObserver = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        const callback = observerCallbacks.get(entry.target);
        if (callback) {
          callback();
          sharedObserver?.unobserve(entry.target);
          observerCallbacks.delete(entry.target);
        }
      }
    }
  }, {
    // Start prefetching when the link is within 250px of the viewport.
    // This gives the browser a head start before the user scrolls to it.
    rootMargin: "250px"
  });
  return sharedObserver;
}
function getDefaultLocale() {
  if (typeof window !== "undefined") {
    return window.__VINEXT_DEFAULT_LOCALE__;
  }
  return globalThis.__VINEXT_DEFAULT_LOCALE__;
}
function applyLocaleToHref(href, locale) {
  if (locale === false) {
    return href;
  }
  if (locale === void 0) {
    return href;
  }
  const defaultLocale = getDefaultLocale();
  if (locale === defaultLocale) {
    return href;
  }
  if (href.startsWith(`/${locale}/`) || href === `/${locale}`) {
    return href;
  }
  return `/${locale}${href.startsWith("/") ? href : `/${href}`}`;
}
const Link$1 = forwardRef(function Link2({ href, as, replace = false, prefetch: prefetchProp, scroll = true, children, onClick, onNavigate, ...rest }, forwardedRef) {
  const { locale, ...restWithoutLocale } = rest;
  const resolvedHref = as ?? resolveHref(href);
  if (typeof resolvedHref === "string" && isDangerousScheme(resolvedHref)) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(`<Link> blocked dangerous href: ${resolvedHref}`);
    }
    const { passHref: _p2, ...safeProps } = restWithoutLocale;
    return jsx("a", { ...safeProps, children });
  }
  const localizedHref = applyLocaleToHref(resolvedHref, locale);
  const fullHref = withBasePath(localizedHref);
  const [pending, setPending] = useState(false);
  const mountedRef = useRef(true);
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);
  const internalRef = useRef(null);
  const shouldPrefetch = prefetchProp !== false;
  const setRefs = useCallback((node) => {
    internalRef.current = node;
    if (typeof forwardedRef === "function")
      forwardedRef(node);
    else if (forwardedRef)
      forwardedRef.current = node;
  }, [forwardedRef]);
  useEffect(() => {
    if (!shouldPrefetch || typeof window === "undefined")
      return;
    const node = internalRef.current;
    if (!node)
      return;
    if (localizedHref.startsWith("http://") || localizedHref.startsWith("https://") || localizedHref.startsWith("//"))
      return;
    const observer = getSharedObserver();
    if (!observer)
      return;
    observerCallbacks.set(node, () => prefetchUrl(localizedHref));
    observer.observe(node);
    return () => {
      observer.unobserve(node);
      observerCallbacks.delete(node);
    };
  }, [shouldPrefetch, localizedHref]);
  const handleClick = async (e) => {
    if (onClick)
      onClick(e);
    if (e.defaultPrevented)
      return;
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
      return;
    }
    if (e.currentTarget.target && e.currentTarget.target !== "_self") {
      return;
    }
    if (resolvedHref.startsWith("http://") || resolvedHref.startsWith("https://") || resolvedHref.startsWith("//")) {
      return;
    }
    e.preventDefault();
    if (onNavigate) {
      try {
        const navUrl = new URL(resolvedHref, window.location.origin);
        let prevented = false;
        const navEvent = {
          url: navUrl,
          preventDefault() {
            prevented = true;
          },
          get defaultPrevented() {
            return prevented;
          }
        };
        onNavigate(navEvent);
        if (navEvent.defaultPrevented) {
          return;
        }
      } catch {
      }
    }
    if (!replace) {
      const state = window.history.state ?? {};
      window.history.replaceState({ ...state, __vinext_scrollX: window.scrollX, __vinext_scrollY: window.scrollY }, "");
    }
    const absoluteHref = resolveRelativeHref(resolvedHref);
    const absoluteFullHref = withBasePath(absoluteHref);
    if (typeof window !== "undefined" && isHashOnlyChange(absoluteFullHref)) {
      const hash2 = absoluteFullHref.includes("#") ? absoluteFullHref.slice(absoluteFullHref.indexOf("#")) : "";
      if (replace) {
        window.history.replaceState(null, "", absoluteFullHref);
      } else {
        window.history.pushState(null, "", absoluteFullHref);
      }
      if (scroll) {
        scrollToHash(hash2);
      }
      return;
    }
    const hashIdx = absoluteFullHref.indexOf("#");
    const hash = hashIdx !== -1 ? absoluteFullHref.slice(hashIdx) : "";
    const win = window;
    if (typeof win.__VINEXT_RSC_NAVIGATE__ === "function") {
      if (replace) {
        window.history.replaceState(null, "", absoluteFullHref);
      } else {
        window.history.pushState(null, "", absoluteFullHref);
      }
      setPending(true);
      try {
        await win.__VINEXT_RSC_NAVIGATE__(absoluteFullHref);
      } finally {
        if (mountedRef.current)
          setPending(false);
      }
    } else {
      try {
        const routerModule = await import("./router-Byo2jdDs.js");
        const Router = routerModule.default;
        if (replace) {
          await Router.replace(absoluteHref, void 0, { scroll });
        } else {
          await Router.push(absoluteHref, void 0, { scroll });
        }
      } catch {
        if (replace) {
          window.history.replaceState({}, "", absoluteFullHref);
        } else {
          window.history.pushState({}, "", absoluteFullHref);
        }
        window.dispatchEvent(new PopStateEvent("popstate"));
      }
    }
    if (scroll) {
      if (hash) {
        scrollToHash(hash);
      } else {
        window.scrollTo(0, 0);
      }
    }
  };
  const { passHref: _p, ...anchorProps } = restWithoutLocale;
  const linkStatusValue = React__default.useMemo(() => ({ pending }), [pending]);
  return jsx(LinkStatusContext.Provider, { value: linkStatusValue, children: jsx("a", { ref: setRefs, href: fullHref, onClick: handleClick, ...anchorProps, children }) });
});
var nestedKeys = /* @__PURE__ */ new Set(["style"]);
var isNewReact = "use" in React;
var fixedMap = {
  srcset: "srcSet",
  fetchpriority: isNewReact ? "fetchPriority" : "fetchpriority"
};
var camelize = (key) => {
  if (key.startsWith("data-") || key.startsWith("aria-")) {
    return key;
  }
  return fixedMap[key] || key.replace(/-./g, (suffix) => suffix[1].toUpperCase());
};
function camelizeProps(props) {
  return Object.fromEntries(
    Object.entries(props).map(([k, v]) => [
      camelize(k),
      nestedKeys.has(k) && v && typeof v !== "string" ? camelizeProps(v) : v
    ])
  );
}
var Image$1 = React.forwardRef(
  function Image2(props, ref) {
    const camelizedProps = camelizeProps(
      transformProps(props)
    );
    return /* @__PURE__ */ jsx("img", { ...camelizedProps, ref });
  }
);
React.forwardRef(
  function Source2(props, ref) {
    const camelizedProps = camelizeProps(
      transformSourceProps(
        props
      )
    );
    return /* @__PURE__ */ jsx("source", { ...camelizedProps, ref });
  }
);
function globToRegex(pattern, separator) {
  let regexStr = "^";
  const doubleStar = separator === "." ? ".+" : ".*";
  const singleStar = separator === "." ? "[^.]+" : "[^/]+";
  const parts = pattern.split("**");
  for (let i = 0; i < parts.length; i++) {
    if (i > 0) {
      regexStr += doubleStar;
    }
    const subParts = parts[i].split("*");
    for (let j = 0; j < subParts.length; j++) {
      if (j > 0) {
        regexStr += singleStar;
      }
      regexStr += subParts[j].replace(/[.+?^${}()|[\]\\]/g, "\\$&");
    }
  }
  regexStr += "$";
  return new RegExp(regexStr);
}
function matchRemotePattern(pattern, url) {
  if (pattern.protocol !== void 0) {
    if (pattern.protocol.replace(/:$/, "") !== url.protocol.replace(/:$/, "")) {
      return false;
    }
  }
  if (pattern.port !== void 0) {
    if (pattern.port !== url.port) {
      return false;
    }
  }
  if (!globToRegex(pattern.hostname, ".").test(url.hostname)) {
    return false;
  }
  if (pattern.search !== void 0) {
    if (pattern.search !== url.search) {
      return false;
    }
  }
  const pathnamePattern = pattern.pathname ?? "**";
  if (!globToRegex(pathnamePattern, "/").test(url.pathname)) {
    return false;
  }
  return true;
}
function hasRemoteMatch(domains, remotePatterns, url) {
  return domains.some((domain) => url.hostname === domain) || remotePatterns.some((p) => matchRemotePattern(p, url));
}
const __imageRemotePatterns = (() => {
  try {
    return JSON.parse("[]");
  } catch {
    return [];
  }
})();
const __imageDomains = (() => {
  try {
    return JSON.parse("[]");
  } catch {
    return [];
  }
})();
const __hasImageConfig = __imageRemotePatterns.length > 0 || __imageDomains.length > 0;
const __isDev = process.env.NODE_ENV !== "production";
const __imageDeviceSizes = (() => {
  try {
    return JSON.parse("[640,750,828,1080,1200,1920,2048,3840]");
  } catch {
    return [640, 750, 828, 1080, 1200, 1920, 2048, 3840];
  }
})();
function validateRemoteUrl(src) {
  if (!__hasImageConfig) {
    return { allowed: true };
  }
  let url;
  try {
    url = new URL(src, "http://n");
  } catch {
    return { allowed: false, reason: `Invalid URL: ${src}` };
  }
  if (hasRemoteMatch(__imageDomains, __imageRemotePatterns, url)) {
    return { allowed: true };
  }
  return {
    allowed: false,
    reason: `Image URL "${src}" is not configured in images.remotePatterns or images.domains in next.config.js. See: https://nextjs.org/docs/messages/next-image-unconfigured-host`
  };
}
function sanitizeBlurDataURL(url) {
  if (!url.startsWith("data:image/"))
    return void 0;
  if (/[)(}{\\'"\n\r]/.test(url))
    return void 0;
  return url;
}
function isRemoteUrl(src) {
  return src.startsWith("http://") || src.startsWith("https://") || src.startsWith("//");
}
const RESPONSIVE_WIDTHS = __imageDeviceSizes;
function imageOptimizationUrl(src, width, quality = 75) {
  return `/_vinext/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality}`;
}
function generateSrcSet(src, originalWidth, quality = 75) {
  const widths = RESPONSIVE_WIDTHS.filter((w) => w <= originalWidth * 2);
  if (widths.length === 0)
    return `${imageOptimizationUrl(src, originalWidth, quality)} ${originalWidth}w`;
  return widths.map((w) => `${imageOptimizationUrl(src, w, quality)} ${w}w`).join(", ");
}
const Image = forwardRef(function Image22({ src: srcProp, alt, width, height, fill, priority, quality, placeholder, blurDataURL, loader, sizes, className, style, unoptimized: _unoptimized, overrideSrc: _overrideSrc, loading, ...rest }, ref) {
  const src = typeof srcProp === "string" ? srcProp : srcProp.src;
  const imgWidth = width ?? (typeof srcProp === "object" ? srcProp.width : void 0);
  const imgHeight = height ?? (typeof srcProp === "object" ? srcProp.height : void 0);
  const imgBlurDataURL = blurDataURL ?? (typeof srcProp === "object" ? srcProp.blurDataURL : void 0);
  if (loader) {
    const resolvedSrc = loader({ src, width: imgWidth ?? 0, quality: quality ?? 75 });
    return jsx("img", { ref, src: resolvedSrc, alt, width: fill ? void 0 : imgWidth, height: fill ? void 0 : imgHeight, loading: priority ? "eager" : loading ?? "lazy", decoding: "async", sizes, className, style: fill ? { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", ...style } : style, ...rest });
  }
  if (isRemoteUrl(src)) {
    const validation = validateRemoteUrl(src);
    if (!validation.allowed) {
      if (__isDev) {
        console.warn(`[next/image] ${validation.reason}`);
      } else {
        console.error(`[next/image] ${validation.reason}`);
        return null;
      }
    }
    const sanitizedBlur = imgBlurDataURL ? sanitizeBlurDataURL(imgBlurDataURL) : void 0;
    const bg = placeholder === "blur" && sanitizedBlur ? `url(${sanitizedBlur})` : void 0;
    if (fill) {
      return jsx(Image$1, { src, alt, layout: "fullWidth", priority, sizes, className, background: bg });
    }
    if (imgWidth && imgHeight) {
      return jsx(Image$1, { src, alt, width: imgWidth, height: imgHeight, layout: "constrained", priority, sizes, className, background: bg });
    }
  }
  const imgQuality = quality ?? 75;
  const skipOptimization = _unoptimized === true;
  const srcSet = imgWidth && !fill && !skipOptimization ? generateSrcSet(src, imgWidth, imgQuality) : imgWidth && !fill ? RESPONSIVE_WIDTHS.filter((w) => w <= imgWidth * 2).map((w) => `${src} ${w}w`).join(", ") || `${src} ${imgWidth}w` : void 0;
  const optimizedSrc = skipOptimization ? src : imgWidth ? imageOptimizationUrl(src, imgWidth, imgQuality) : imageOptimizationUrl(src, RESPONSIVE_WIDTHS[0], imgQuality);
  const sanitizedLocalBlur = imgBlurDataURL ? sanitizeBlurDataURL(imgBlurDataURL) : void 0;
  const blurStyle = placeholder === "blur" && sanitizedLocalBlur ? {
    backgroundImage: `url(${sanitizedLocalBlur})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  } : void 0;
  return jsx("img", { ref, src: optimizedSrc, alt, width: fill ? void 0 : imgWidth, height: fill ? void 0 : imgHeight, loading: priority ? "eager" : loading ?? "lazy", fetchPriority: priority ? "high" : void 0, decoding: "async", srcSet, sizes: sizes ?? (fill ? "100vw" : void 0), className, "data-nimg": fill ? "fill" : "1", style: fill ? { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", ...blurStyle, ...style } : { ...blurStyle, ...style }, ...rest });
});
function NextProvider({ children, Link: CustomLink, Image: CustomImage }) {
  return /* @__PURE__ */ jsx(FrameworkProvider, {
    usePathname: usePathname$1,
    useRouter: useRouter$1,
    useParams,
    Link: CustomLink ?? Link$1,
    Image: CustomImage ?? Image,
    children
  });
}
function RootProvider({ components, ...props }) {
  return /* @__PURE__ */ jsx(NextProvider, {
    Link: components?.Link,
    Image: components?.Image,
    children: /* @__PURE__ */ jsx(RootProvider$1, {
      ...props,
      children: props.children
    })
  });
}
const variants = {
  primary: "bg-fd-primary text-fd-primary-foreground hover:bg-fd-primary/80 disabled:bg-fd-secondary disabled:text-fd-secondary-foreground",
  outline: "border hover:bg-fd-accent hover:text-fd-accent-foreground",
  ghost: "hover:bg-fd-accent hover:text-fd-accent-foreground",
  secondary: "border bg-fd-secondary text-fd-secondary-foreground hover:bg-fd-accent hover:text-fd-accent-foreground"
};
const buttonVariants = cva("inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors duration-100 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring", { variants: {
  variant: variants,
  color: variants,
  size: {
    sm: "gap-1 px-2 py-1.5 text-xs",
    icon: "p-1.5 [&_svg]:size-5",
    "icon-sm": "p-1.5 [&_svg]:size-4.5",
    "icon-xs": "p-1 [&_svg]:size-4"
  }
} });
function normalizeUrl(url) {
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  if (!url.startsWith("/")) url = "/" + url;
  if (url.length > 1 && url.endsWith("/")) url = url.slice(0, -1);
  return url;
}
function findPath(nodes, matcher, options = {}) {
  const { includeSeparator = true } = options;
  function run(nodes2) {
    let separator;
    for (const node of nodes2) {
      if (matcher(node)) {
        const items = [];
        if (separator) items.push(separator);
        items.push(node);
        return items;
      }
      if (node.type === "separator" && includeSeparator) {
        separator = node;
        continue;
      }
      if (node.type === "folder") {
        const items = node.index && matcher(node.index) ? [node.index] : run(node.children);
        if (items) {
          items.unshift(node);
          if (separator) items.unshift(separator);
          return items;
        }
      }
    }
  }
  return run(nodes) ?? null;
}
function getBreadcrumbItemsFromPath(tree, path, options) {
  const { includePage = false, includeSeparator = false, includeRoot = false } = options;
  let items = [];
  for (let i = 0; i < path.length; i++) {
    const item = path[i];
    switch (item.type) {
      case "page":
        if (includePage) items.push({
          name: item.name,
          url: item.url
        });
        break;
      case "folder":
        if (item.root && !includeRoot) {
          items = [];
          break;
        }
        if (i === path.length - 1 || item.index !== path[i + 1]) items.push({
          name: item.name,
          url: item.index?.url
        });
        break;
      case "separator":
        if (item.name && includeSeparator) items.push({ name: item.name });
        break;
    }
  }
  if (includeRoot) items.unshift({
    name: tree.name,
    url: typeof includeRoot === "object" ? includeRoot.url : void 0
  });
  return items;
}
function searchPath(nodes, url) {
  const normalizedUrl = normalizeUrl(url);
  return findPath(nodes, (node) => node.type === "page" && node.url === normalizedUrl);
}
const TreeContext = createContext(null);
const PathContext = createContext([]);
function TreeContextProvider({ tree: rawTree, children }) {
  const nextIdRef = useRef(0);
  const pathname = usePathname();
  const tree = useMemo(() => rawTree, [rawTree.$id ?? rawTree]);
  const path = useMemo(() => {
    return searchPath(tree.children, pathname) ?? (tree.fallback ? searchPath(tree.fallback.children, pathname) : null) ?? [];
  }, [tree, pathname]);
  const root = path.findLast((item) => item.type === "folder" && item.root) ?? tree;
  root.$id ??= String(nextIdRef.current++);
  return /* @__PURE__ */ jsx(TreeContext, {
    value: useMemo(() => ({
      root,
      full: tree
    }), [root, tree]),
    children: /* @__PURE__ */ jsx(PathContext, {
      value: path,
      children
    })
  });
}
function useTreePath() {
  return use(PathContext);
}
function useTreeContext() {
  const ctx = use(TreeContext);
  if (!ctx) throw new Error("You must wrap this component under <DocsLayout />");
  return ctx;
}
function createContext2(rootComponentName, defaultContext) {
  const Context = React.createContext(defaultContext);
  const Provider = (props) => {
    const { children, ...context } = props;
    const value = React.useMemo(() => context, Object.values(context));
    return /* @__PURE__ */ jsx(Context.Provider, { value, children });
  };
  Provider.displayName = rootComponentName + "Provider";
  function useContext2(consumerName) {
    const context = React.useContext(Context);
    if (context) return context;
    if (defaultContext !== void 0) return defaultContext;
    throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
  }
  return [Provider, useContext2];
}
function createContextScope(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext3(rootComponentName, defaultContext) {
    const BaseContext = React.createContext(defaultContext);
    const index2 = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    const Provider = (props) => {
      const { scope, children, ...context } = props;
      const Context = scope?.[scopeName]?.[index2] || BaseContext;
      const value = React.useMemo(() => context, Object.values(context));
      return /* @__PURE__ */ jsx(Context.Provider, { value, children });
    };
    Provider.displayName = rootComponentName + "Provider";
    function useContext2(consumerName, scope) {
      const Context = scope?.[scopeName]?.[index2] || BaseContext;
      const context = React.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [Provider, useContext2];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return React.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = scope?.[scopeName] || scopeContexts;
      return React.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext3, composeContextScopes(createScope, ...createContextScopeDeps)];
}
function composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return React.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}
var useLayoutEffect2 = globalThis?.document ? React.useLayoutEffect : () => {
};
var useInsertionEffect = React[" useInsertionEffect ".trim().toString()] || useLayoutEffect2;
function useControllableState({
  prop,
  defaultProp,
  onChange = () => {
  },
  caller
}) {
  const [uncontrolledProp, setUncontrolledProp, onChangeRef] = useUncontrolledState({
    defaultProp,
    onChange
  });
  const isControlled = prop !== void 0;
  const value = isControlled ? prop : uncontrolledProp;
  {
    const isControlledRef = React.useRef(prop !== void 0);
    React.useEffect(() => {
      const wasControlled = isControlledRef.current;
      if (wasControlled !== isControlled) {
        const from = wasControlled ? "controlled" : "uncontrolled";
        const to = isControlled ? "controlled" : "uncontrolled";
        console.warn(
          `${caller} is changing from ${from} to ${to}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        );
      }
      isControlledRef.current = isControlled;
    }, [isControlled, caller]);
  }
  const setValue = React.useCallback(
    (nextValue) => {
      if (isControlled) {
        const value2 = isFunction(nextValue) ? nextValue(prop) : nextValue;
        if (value2 !== prop) {
          onChangeRef.current?.(value2);
        }
      } else {
        setUncontrolledProp(nextValue);
      }
    },
    [isControlled, prop, setUncontrolledProp, onChangeRef]
  );
  return [value, setValue];
}
function useUncontrolledState({
  defaultProp,
  onChange
}) {
  const [value, setValue] = React.useState(defaultProp);
  const prevValueRef = React.useRef(value);
  const onChangeRef = React.useRef(onChange);
  useInsertionEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);
  React.useEffect(() => {
    if (prevValueRef.current !== value) {
      onChangeRef.current?.(value);
      prevValueRef.current = value;
    }
  }, [value, prevValueRef]);
  return [value, setValue, onChangeRef];
}
function isFunction(value) {
  return typeof value === "function";
}
function setRef(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
function composeRefs(...refs) {
  return (node) => {
    let hasCleanup = false;
    const cleanups = refs.map((ref) => {
      const cleanup = setRef(ref, node);
      if (!hasCleanup && typeof cleanup == "function") {
        hasCleanup = true;
      }
      return cleanup;
    });
    if (hasCleanup) {
      return () => {
        for (let i = 0; i < cleanups.length; i++) {
          const cleanup = cleanups[i];
          if (typeof cleanup == "function") {
            cleanup();
          } else {
            setRef(refs[i], null);
          }
        }
      };
    }
  };
}
function useComposedRefs(...refs) {
  return React.useCallback(composeRefs(...refs), refs);
}
// @__NO_SIDE_EFFECTS__
function createSlot$2(ownerName) {
  const SlotClone = /* @__PURE__ */ createSlotClone$2(ownerName);
  const Slot2 = React.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    const childrenArray = React.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable$2);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (React.Children.count(newElement) > 1) return React.Children.only(null);
          return React.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return /* @__PURE__ */ jsx(SlotClone, { ...slotProps, ref: forwardedRef, children: React.isValidElement(newElement) ? React.cloneElement(newElement, void 0, newChildren) : null });
    }
    return /* @__PURE__ */ jsx(SlotClone, { ...slotProps, ref: forwardedRef, children });
  });
  Slot2.displayName = `${ownerName}.Slot`;
  return Slot2;
}
// @__NO_SIDE_EFFECTS__
function createSlotClone$2(ownerName) {
  const SlotClone = React.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    if (React.isValidElement(children)) {
      const childrenRef = getElementRef$3(children);
      const props2 = mergeProps$2(slotProps, children.props);
      if (children.type !== React.Fragment) {
        props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
      }
      return React.cloneElement(children, props2);
    }
    return React.Children.count(children) > 1 ? React.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var SLOTTABLE_IDENTIFIER$2 = /* @__PURE__ */ Symbol("radix.slottable");
function isSlottable$2(child) {
  return React.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER$2;
}
function mergeProps$2(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef$3(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}
var NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive = NODES.reduce((primitive, node) => {
  const Slot2 = /* @__PURE__ */ createSlot$2(`Primitive.${node}`);
  const Node2 = React.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot2 : node;
    if (typeof window !== "undefined") {
      window[/* @__PURE__ */ Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ jsx(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node2.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node2 };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
  if (target) ReactDOM.flushSync(() => target.dispatchEvent(event));
}
function useStateMachine$1(initialState, machine) {
  return React.useReducer((state, event) => {
    const nextState = machine[state][event];
    return nextState ?? state;
  }, initialState);
}
var Presence = (props) => {
  const { present, children } = props;
  const presence = usePresence(present);
  const child = typeof children === "function" ? children({ present: presence.isPresent }) : React.Children.only(children);
  const ref = useComposedRefs(presence.ref, getElementRef$2(child));
  const forceMount = typeof children === "function";
  return forceMount || presence.isPresent ? React.cloneElement(child, { ref }) : null;
};
Presence.displayName = "Presence";
function usePresence(present) {
  const [node, setNode] = React.useState();
  const stylesRef = React.useRef(null);
  const prevPresentRef = React.useRef(present);
  const prevAnimationNameRef = React.useRef("none");
  const initialState = present ? "mounted" : "unmounted";
  const [state, send] = useStateMachine$1(initialState, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  React.useEffect(() => {
    const currentAnimationName = getAnimationName(stylesRef.current);
    prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
  }, [state]);
  useLayoutEffect2(() => {
    const styles = stylesRef.current;
    const wasPresent = prevPresentRef.current;
    const hasPresentChanged = wasPresent !== present;
    if (hasPresentChanged) {
      const prevAnimationName = prevAnimationNameRef.current;
      const currentAnimationName = getAnimationName(styles);
      if (present) {
        send("MOUNT");
      } else if (currentAnimationName === "none" || styles?.display === "none") {
        send("UNMOUNT");
      } else {
        const isAnimating = prevAnimationName !== currentAnimationName;
        if (wasPresent && isAnimating) {
          send("ANIMATION_OUT");
        } else {
          send("UNMOUNT");
        }
      }
      prevPresentRef.current = present;
    }
  }, [present, send]);
  useLayoutEffect2(() => {
    if (node) {
      let timeoutId;
      const ownerWindow = node.ownerDocument.defaultView ?? window;
      const handleAnimationEnd = (event) => {
        const currentAnimationName = getAnimationName(stylesRef.current);
        const isCurrentAnimation = currentAnimationName.includes(CSS.escape(event.animationName));
        if (event.target === node && isCurrentAnimation) {
          send("ANIMATION_END");
          if (!prevPresentRef.current) {
            const currentFillMode = node.style.animationFillMode;
            node.style.animationFillMode = "forwards";
            timeoutId = ownerWindow.setTimeout(() => {
              if (node.style.animationFillMode === "forwards") {
                node.style.animationFillMode = currentFillMode;
              }
            });
          }
        }
      };
      const handleAnimationStart = (event) => {
        if (event.target === node) {
          prevAnimationNameRef.current = getAnimationName(stylesRef.current);
        }
      };
      node.addEventListener("animationstart", handleAnimationStart);
      node.addEventListener("animationcancel", handleAnimationEnd);
      node.addEventListener("animationend", handleAnimationEnd);
      return () => {
        ownerWindow.clearTimeout(timeoutId);
        node.removeEventListener("animationstart", handleAnimationStart);
        node.removeEventListener("animationcancel", handleAnimationEnd);
        node.removeEventListener("animationend", handleAnimationEnd);
      };
    } else {
      send("ANIMATION_END");
    }
  }, [node, send]);
  return {
    isPresent: ["mounted", "unmountSuspended"].includes(state),
    ref: React.useCallback((node2) => {
      stylesRef.current = node2 ? getComputedStyle(node2) : null;
      setNode(node2);
    }, [])
  };
}
function getAnimationName(styles) {
  return styles?.animationName || "none";
}
function getElementRef$2(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}
var useReactId = React[" useId ".trim().toString()] || (() => void 0);
var count$1 = 0;
function useId(deterministicId) {
  const [id, setId] = React.useState(useReactId());
  useLayoutEffect2(() => {
    setId((reactId) => reactId ?? String(count$1++));
  }, [deterministicId]);
  return deterministicId || (id ? `radix-${id}` : "");
}
var COLLAPSIBLE_NAME = "Collapsible";
var [createCollapsibleContext] = createContextScope(COLLAPSIBLE_NAME);
var [CollapsibleProvider, useCollapsibleContext] = createCollapsibleContext(COLLAPSIBLE_NAME);
var Collapsible$1 = React.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeCollapsible,
      open: openProp,
      defaultOpen,
      disabled,
      onOpenChange,
      ...collapsibleProps
    } = props;
    const [open, setOpen] = useControllableState({
      prop: openProp,
      defaultProp: defaultOpen ?? false,
      onChange: onOpenChange,
      caller: COLLAPSIBLE_NAME
    });
    return /* @__PURE__ */ jsx(
      CollapsibleProvider,
      {
        scope: __scopeCollapsible,
        disabled,
        contentId: useId(),
        open,
        onOpenToggle: React.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
        children: /* @__PURE__ */ jsx(
          Primitive.div,
          {
            "data-state": getState$1(open),
            "data-disabled": disabled ? "" : void 0,
            ...collapsibleProps,
            ref: forwardedRef
          }
        )
      }
    );
  }
);
Collapsible$1.displayName = COLLAPSIBLE_NAME;
var TRIGGER_NAME$2 = "CollapsibleTrigger";
var CollapsibleTrigger$1 = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeCollapsible, ...triggerProps } = props;
    const context = useCollapsibleContext(TRIGGER_NAME$2, __scopeCollapsible);
    return /* @__PURE__ */ jsx(
      Primitive.button,
      {
        type: "button",
        "aria-controls": context.contentId,
        "aria-expanded": context.open || false,
        "data-state": getState$1(context.open),
        "data-disabled": context.disabled ? "" : void 0,
        disabled: context.disabled,
        ...triggerProps,
        ref: forwardedRef,
        onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
      }
    );
  }
);
CollapsibleTrigger$1.displayName = TRIGGER_NAME$2;
var CONTENT_NAME$3 = "CollapsibleContent";
var CollapsibleContent$1 = React.forwardRef(
  (props, forwardedRef) => {
    const { forceMount, ...contentProps } = props;
    const context = useCollapsibleContext(CONTENT_NAME$3, props.__scopeCollapsible);
    return /* @__PURE__ */ jsx(Presence, { present: forceMount || context.open, children: ({ present }) => /* @__PURE__ */ jsx(CollapsibleContentImpl, { ...contentProps, ref: forwardedRef, present }) });
  }
);
CollapsibleContent$1.displayName = CONTENT_NAME$3;
var CollapsibleContentImpl = React.forwardRef((props, forwardedRef) => {
  const { __scopeCollapsible, present, children, ...contentProps } = props;
  const context = useCollapsibleContext(CONTENT_NAME$3, __scopeCollapsible);
  const [isPresent, setIsPresent] = React.useState(present);
  const ref = React.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const heightRef = React.useRef(0);
  const height = heightRef.current;
  const widthRef = React.useRef(0);
  const width = widthRef.current;
  const isOpen = context.open || isPresent;
  const isMountAnimationPreventedRef = React.useRef(isOpen);
  const originalStylesRef = React.useRef(void 0);
  React.useEffect(() => {
    const rAF = requestAnimationFrame(() => isMountAnimationPreventedRef.current = false);
    return () => cancelAnimationFrame(rAF);
  }, []);
  useLayoutEffect2(() => {
    const node = ref.current;
    if (node) {
      originalStylesRef.current = originalStylesRef.current || {
        transitionDuration: node.style.transitionDuration,
        animationName: node.style.animationName
      };
      node.style.transitionDuration = "0s";
      node.style.animationName = "none";
      const rect = node.getBoundingClientRect();
      heightRef.current = rect.height;
      widthRef.current = rect.width;
      if (!isMountAnimationPreventedRef.current) {
        node.style.transitionDuration = originalStylesRef.current.transitionDuration;
        node.style.animationName = originalStylesRef.current.animationName;
      }
      setIsPresent(present);
    }
  }, [context.open, present]);
  return /* @__PURE__ */ jsx(
    Primitive.div,
    {
      "data-state": getState$1(context.open),
      "data-disabled": context.disabled ? "" : void 0,
      id: context.contentId,
      hidden: !isOpen,
      ...contentProps,
      ref: composedRefs,
      style: {
        [`--radix-collapsible-content-height`]: height ? `${height}px` : void 0,
        [`--radix-collapsible-content-width`]: width ? `${width}px` : void 0,
        ...props.style
      },
      children: isOpen && children
    }
  );
});
function getState$1(open) {
  return open ? "open" : "closed";
}
var Root$3 = Collapsible$1;
const Collapsible = Root$3;
const CollapsibleTrigger = CollapsibleTrigger$1;
const CollapsibleContent = forwardRef(({ children, ...props }, ref) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return /* @__PURE__ */ jsx(CollapsibleContent$1, {
    ref,
    ...props,
    className: twMerge("overflow-hidden", mounted && "data-[state=closed]:animate-fd-collapsible-up data-[state=open]:animate-fd-collapsible-down", props.className),
    children
  });
});
CollapsibleContent.displayName = CollapsibleContent$1.displayName;
function useCallbackRef$1(callback) {
  const callbackRef = React.useRef(callback);
  React.useEffect(() => {
    callbackRef.current = callback;
  });
  return React.useMemo(() => (...args) => callbackRef.current?.(...args), []);
}
function useStateMachine(initialState, machine) {
  return React.useReducer((state, event) => {
    const nextState = machine[state][event];
    return nextState ?? state;
  }, initialState);
}
var SCROLL_AREA_NAME = "ScrollArea";
var [createScrollAreaContext] = createContextScope(SCROLL_AREA_NAME);
var [ScrollAreaProvider, useScrollAreaContext] = createScrollAreaContext(SCROLL_AREA_NAME);
var ScrollArea$1 = React.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeScrollArea,
      type = "hover",
      dir,
      scrollHideDelay = 600,
      ...scrollAreaProps
    } = props;
    const [scrollArea, setScrollArea] = React.useState(null);
    const [viewport, setViewport] = React.useState(null);
    const [content, setContent] = React.useState(null);
    const [scrollbarX, setScrollbarX] = React.useState(null);
    const [scrollbarY, setScrollbarY] = React.useState(null);
    const [cornerWidth, setCornerWidth] = React.useState(0);
    const [cornerHeight, setCornerHeight] = React.useState(0);
    const [scrollbarXEnabled, setScrollbarXEnabled] = React.useState(false);
    const [scrollbarYEnabled, setScrollbarYEnabled] = React.useState(false);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setScrollArea(node));
    const direction = useDirection(dir);
    return /* @__PURE__ */ jsx(
      ScrollAreaProvider,
      {
        scope: __scopeScrollArea,
        type,
        dir: direction,
        scrollHideDelay,
        scrollArea,
        viewport,
        onViewportChange: setViewport,
        content,
        onContentChange: setContent,
        scrollbarX,
        onScrollbarXChange: setScrollbarX,
        scrollbarXEnabled,
        onScrollbarXEnabledChange: setScrollbarXEnabled,
        scrollbarY,
        onScrollbarYChange: setScrollbarY,
        scrollbarYEnabled,
        onScrollbarYEnabledChange: setScrollbarYEnabled,
        onCornerWidthChange: setCornerWidth,
        onCornerHeightChange: setCornerHeight,
        children: /* @__PURE__ */ jsx(
          Primitive.div,
          {
            dir: direction,
            ...scrollAreaProps,
            ref: composedRefs,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              ["--radix-scroll-area-corner-width"]: cornerWidth + "px",
              ["--radix-scroll-area-corner-height"]: cornerHeight + "px",
              ...props.style
            }
          }
        )
      }
    );
  }
);
ScrollArea$1.displayName = SCROLL_AREA_NAME;
var VIEWPORT_NAME = "ScrollAreaViewport";
var ScrollAreaViewport = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeScrollArea, children, nonce, ...viewportProps } = props;
    const context = useScrollAreaContext(VIEWPORT_NAME, __scopeScrollArea);
    const ref = React.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref, context.onViewportChange);
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: `[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}`
          },
          nonce
        }
      ),
      /* @__PURE__ */ jsx(
        Primitive.div,
        {
          "data-radix-scroll-area-viewport": "",
          ...viewportProps,
          ref: composedRefs,
          style: {
            /**
             * We don't support `visible` because the intention is to have at least one scrollbar
             * if this component is used and `visible` will behave like `auto` in that case
             * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#description
             *
             * We don't handle `auto` because the intention is for the native implementation
             * to be hidden if using this component. We just want to ensure the node is scrollable
             * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
             * the browser from having to work out whether to render native scrollbars or not,
             * we tell it to with the intention of hiding them in CSS.
             */
            overflowX: context.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: context.scrollbarYEnabled ? "scroll" : "hidden",
            ...props.style
          },
          children: /* @__PURE__ */ jsx("div", { ref: context.onContentChange, style: { minWidth: "100%", display: "table" }, children })
        }
      )
    ] });
  }
);
ScrollAreaViewport.displayName = VIEWPORT_NAME;
var SCROLLBAR_NAME = "ScrollAreaScrollbar";
var ScrollAreaScrollbar = React.forwardRef(
  (props, forwardedRef) => {
    const { forceMount, ...scrollbarProps } = props;
    const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
    const { onScrollbarXEnabledChange, onScrollbarYEnabledChange } = context;
    const isHorizontal = props.orientation === "horizontal";
    React.useEffect(() => {
      isHorizontal ? onScrollbarXEnabledChange(true) : onScrollbarYEnabledChange(true);
      return () => {
        isHorizontal ? onScrollbarXEnabledChange(false) : onScrollbarYEnabledChange(false);
      };
    }, [isHorizontal, onScrollbarXEnabledChange, onScrollbarYEnabledChange]);
    return context.type === "hover" ? /* @__PURE__ */ jsx(ScrollAreaScrollbarHover, { ...scrollbarProps, ref: forwardedRef, forceMount }) : context.type === "scroll" ? /* @__PURE__ */ jsx(ScrollAreaScrollbarScroll, { ...scrollbarProps, ref: forwardedRef, forceMount }) : context.type === "auto" ? /* @__PURE__ */ jsx(ScrollAreaScrollbarAuto, { ...scrollbarProps, ref: forwardedRef, forceMount }) : context.type === "always" ? /* @__PURE__ */ jsx(ScrollAreaScrollbarVisible, { ...scrollbarProps, ref: forwardedRef }) : null;
  }
);
ScrollAreaScrollbar.displayName = SCROLLBAR_NAME;
var ScrollAreaScrollbarHover = React.forwardRef((props, forwardedRef) => {
  const { forceMount, ...scrollbarProps } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const scrollArea = context.scrollArea;
    let hideTimer = 0;
    if (scrollArea) {
      const handlePointerEnter = () => {
        window.clearTimeout(hideTimer);
        setVisible(true);
      };
      const handlePointerLeave = () => {
        hideTimer = window.setTimeout(() => setVisible(false), context.scrollHideDelay);
      };
      scrollArea.addEventListener("pointerenter", handlePointerEnter);
      scrollArea.addEventListener("pointerleave", handlePointerLeave);
      return () => {
        window.clearTimeout(hideTimer);
        scrollArea.removeEventListener("pointerenter", handlePointerEnter);
        scrollArea.removeEventListener("pointerleave", handlePointerLeave);
      };
    }
  }, [context.scrollArea, context.scrollHideDelay]);
  return /* @__PURE__ */ jsx(Presence, { present: forceMount || visible, children: /* @__PURE__ */ jsx(
    ScrollAreaScrollbarAuto,
    {
      "data-state": visible ? "visible" : "hidden",
      ...scrollbarProps,
      ref: forwardedRef
    }
  ) });
});
var ScrollAreaScrollbarScroll = React.forwardRef((props, forwardedRef) => {
  const { forceMount, ...scrollbarProps } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const isHorizontal = props.orientation === "horizontal";
  const debounceScrollEnd = useDebounceCallback(() => send("SCROLL_END"), 100);
  const [state, send] = useStateMachine("hidden", {
    hidden: {
      SCROLL: "scrolling"
    },
    scrolling: {
      SCROLL_END: "idle",
      POINTER_ENTER: "interacting"
    },
    interacting: {
      SCROLL: "interacting",
      POINTER_LEAVE: "idle"
    },
    idle: {
      HIDE: "hidden",
      SCROLL: "scrolling",
      POINTER_ENTER: "interacting"
    }
  });
  React.useEffect(() => {
    if (state === "idle") {
      const hideTimer = window.setTimeout(() => send("HIDE"), context.scrollHideDelay);
      return () => window.clearTimeout(hideTimer);
    }
  }, [state, context.scrollHideDelay, send]);
  React.useEffect(() => {
    const viewport = context.viewport;
    const scrollDirection = isHorizontal ? "scrollLeft" : "scrollTop";
    if (viewport) {
      let prevScrollPos = viewport[scrollDirection];
      const handleScroll2 = () => {
        const scrollPos = viewport[scrollDirection];
        const hasScrollInDirectionChanged = prevScrollPos !== scrollPos;
        if (hasScrollInDirectionChanged) {
          send("SCROLL");
          debounceScrollEnd();
        }
        prevScrollPos = scrollPos;
      };
      viewport.addEventListener("scroll", handleScroll2);
      return () => viewport.removeEventListener("scroll", handleScroll2);
    }
  }, [context.viewport, isHorizontal, send, debounceScrollEnd]);
  return /* @__PURE__ */ jsx(Presence, { present: forceMount || state !== "hidden", children: /* @__PURE__ */ jsx(
    ScrollAreaScrollbarVisible,
    {
      "data-state": state === "hidden" ? "hidden" : "visible",
      ...scrollbarProps,
      ref: forwardedRef,
      onPointerEnter: composeEventHandlers(props.onPointerEnter, () => send("POINTER_ENTER")),
      onPointerLeave: composeEventHandlers(props.onPointerLeave, () => send("POINTER_LEAVE"))
    }
  ) });
});
var ScrollAreaScrollbarAuto = React.forwardRef((props, forwardedRef) => {
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const { forceMount, ...scrollbarProps } = props;
  const [visible, setVisible] = React.useState(false);
  const isHorizontal = props.orientation === "horizontal";
  const handleResize = useDebounceCallback(() => {
    if (context.viewport) {
      const isOverflowX = context.viewport.offsetWidth < context.viewport.scrollWidth;
      const isOverflowY = context.viewport.offsetHeight < context.viewport.scrollHeight;
      setVisible(isHorizontal ? isOverflowX : isOverflowY);
    }
  }, 10);
  useResizeObserver(context.viewport, handleResize);
  useResizeObserver(context.content, handleResize);
  return /* @__PURE__ */ jsx(Presence, { present: forceMount || visible, children: /* @__PURE__ */ jsx(
    ScrollAreaScrollbarVisible,
    {
      "data-state": visible ? "visible" : "hidden",
      ...scrollbarProps,
      ref: forwardedRef
    }
  ) });
});
var ScrollAreaScrollbarVisible = React.forwardRef((props, forwardedRef) => {
  const { orientation = "vertical", ...scrollbarProps } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const thumbRef = React.useRef(null);
  const pointerOffsetRef = React.useRef(0);
  const [sizes, setSizes] = React.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  });
  const thumbRatio = getThumbRatio(sizes.viewport, sizes.content);
  const commonProps = {
    ...scrollbarProps,
    sizes,
    onSizesChange: setSizes,
    hasThumb: Boolean(thumbRatio > 0 && thumbRatio < 1),
    onThumbChange: (thumb) => thumbRef.current = thumb,
    onThumbPointerUp: () => pointerOffsetRef.current = 0,
    onThumbPointerDown: (pointerPos) => pointerOffsetRef.current = pointerPos
  };
  function getScrollPosition(pointerPos, dir) {
    return getScrollPositionFromPointer(pointerPos, pointerOffsetRef.current, sizes, dir);
  }
  if (orientation === "horizontal") {
    return /* @__PURE__ */ jsx(
      ScrollAreaScrollbarX,
      {
        ...commonProps,
        ref: forwardedRef,
        onThumbPositionChange: () => {
          if (context.viewport && thumbRef.current) {
            const scrollPos = context.viewport.scrollLeft;
            const offset2 = getThumbOffsetFromScroll(scrollPos, sizes, context.dir);
            thumbRef.current.style.transform = `translate3d(${offset2}px, 0, 0)`;
          }
        },
        onWheelScroll: (scrollPos) => {
          if (context.viewport) context.viewport.scrollLeft = scrollPos;
        },
        onDragScroll: (pointerPos) => {
          if (context.viewport) {
            context.viewport.scrollLeft = getScrollPosition(pointerPos, context.dir);
          }
        }
      }
    );
  }
  if (orientation === "vertical") {
    return /* @__PURE__ */ jsx(
      ScrollAreaScrollbarY,
      {
        ...commonProps,
        ref: forwardedRef,
        onThumbPositionChange: () => {
          if (context.viewport && thumbRef.current) {
            const scrollPos = context.viewport.scrollTop;
            const offset2 = getThumbOffsetFromScroll(scrollPos, sizes);
            thumbRef.current.style.transform = `translate3d(0, ${offset2}px, 0)`;
          }
        },
        onWheelScroll: (scrollPos) => {
          if (context.viewport) context.viewport.scrollTop = scrollPos;
        },
        onDragScroll: (pointerPos) => {
          if (context.viewport) context.viewport.scrollTop = getScrollPosition(pointerPos);
        }
      }
    );
  }
  return null;
});
var ScrollAreaScrollbarX = React.forwardRef((props, forwardedRef) => {
  const { sizes, onSizesChange, ...scrollbarProps } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const [computedStyle, setComputedStyle] = React.useState();
  const ref = React.useRef(null);
  const composeRefs2 = useComposedRefs(forwardedRef, ref, context.onScrollbarXChange);
  React.useEffect(() => {
    if (ref.current) setComputedStyle(getComputedStyle(ref.current));
  }, [ref]);
  return /* @__PURE__ */ jsx(
    ScrollAreaScrollbarImpl,
    {
      "data-orientation": "horizontal",
      ...scrollbarProps,
      ref: composeRefs2,
      sizes,
      style: {
        bottom: 0,
        left: context.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: context.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        ["--radix-scroll-area-thumb-width"]: getThumbSize(sizes) + "px",
        ...props.style
      },
      onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.x),
      onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.x),
      onWheelScroll: (event, maxScrollPos) => {
        if (context.viewport) {
          const scrollPos = context.viewport.scrollLeft + event.deltaX;
          props.onWheelScroll(scrollPos);
          if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) {
            event.preventDefault();
          }
        }
      },
      onResize: () => {
        if (ref.current && context.viewport && computedStyle) {
          onSizesChange({
            content: context.viewport.scrollWidth,
            viewport: context.viewport.offsetWidth,
            scrollbar: {
              size: ref.current.clientWidth,
              paddingStart: toInt(computedStyle.paddingLeft),
              paddingEnd: toInt(computedStyle.paddingRight)
            }
          });
        }
      }
    }
  );
});
var ScrollAreaScrollbarY = React.forwardRef((props, forwardedRef) => {
  const { sizes, onSizesChange, ...scrollbarProps } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const [computedStyle, setComputedStyle] = React.useState();
  const ref = React.useRef(null);
  const composeRefs2 = useComposedRefs(forwardedRef, ref, context.onScrollbarYChange);
  React.useEffect(() => {
    if (ref.current) setComputedStyle(getComputedStyle(ref.current));
  }, [ref]);
  return /* @__PURE__ */ jsx(
    ScrollAreaScrollbarImpl,
    {
      "data-orientation": "vertical",
      ...scrollbarProps,
      ref: composeRefs2,
      sizes,
      style: {
        top: 0,
        right: context.dir === "ltr" ? 0 : void 0,
        left: context.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        ["--radix-scroll-area-thumb-height"]: getThumbSize(sizes) + "px",
        ...props.style
      },
      onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.y),
      onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.y),
      onWheelScroll: (event, maxScrollPos) => {
        if (context.viewport) {
          const scrollPos = context.viewport.scrollTop + event.deltaY;
          props.onWheelScroll(scrollPos);
          if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) {
            event.preventDefault();
          }
        }
      },
      onResize: () => {
        if (ref.current && context.viewport && computedStyle) {
          onSizesChange({
            content: context.viewport.scrollHeight,
            viewport: context.viewport.offsetHeight,
            scrollbar: {
              size: ref.current.clientHeight,
              paddingStart: toInt(computedStyle.paddingTop),
              paddingEnd: toInt(computedStyle.paddingBottom)
            }
          });
        }
      }
    }
  );
});
var [ScrollbarProvider, useScrollbarContext] = createScrollAreaContext(SCROLLBAR_NAME);
var ScrollAreaScrollbarImpl = React.forwardRef((props, forwardedRef) => {
  const {
    __scopeScrollArea,
    sizes,
    hasThumb,
    onThumbChange,
    onThumbPointerUp,
    onThumbPointerDown,
    onThumbPositionChange,
    onDragScroll,
    onWheelScroll,
    onResize,
    ...scrollbarProps
  } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, __scopeScrollArea);
  const [scrollbar, setScrollbar] = React.useState(null);
  const composeRefs2 = useComposedRefs(forwardedRef, (node) => setScrollbar(node));
  const rectRef = React.useRef(null);
  const prevWebkitUserSelectRef = React.useRef("");
  const viewport = context.viewport;
  const maxScrollPos = sizes.content - sizes.viewport;
  const handleWheelScroll = useCallbackRef$1(onWheelScroll);
  const handleThumbPositionChange = useCallbackRef$1(onThumbPositionChange);
  const handleResize = useDebounceCallback(onResize, 10);
  function handleDragScroll(event) {
    if (rectRef.current) {
      const x2 = event.clientX - rectRef.current.left;
      const y = event.clientY - rectRef.current.top;
      onDragScroll({ x: x2, y });
    }
  }
  React.useEffect(() => {
    const handleWheel = (event) => {
      const element = event.target;
      const isScrollbarWheel = scrollbar?.contains(element);
      if (isScrollbarWheel) handleWheelScroll(event, maxScrollPos);
    };
    document.addEventListener("wheel", handleWheel, { passive: false });
    return () => document.removeEventListener("wheel", handleWheel, { passive: false });
  }, [viewport, scrollbar, maxScrollPos, handleWheelScroll]);
  React.useEffect(handleThumbPositionChange, [sizes, handleThumbPositionChange]);
  useResizeObserver(scrollbar, handleResize);
  useResizeObserver(context.content, handleResize);
  return /* @__PURE__ */ jsx(
    ScrollbarProvider,
    {
      scope: __scopeScrollArea,
      scrollbar,
      hasThumb,
      onThumbChange: useCallbackRef$1(onThumbChange),
      onThumbPointerUp: useCallbackRef$1(onThumbPointerUp),
      onThumbPositionChange: handleThumbPositionChange,
      onThumbPointerDown: useCallbackRef$1(onThumbPointerDown),
      children: /* @__PURE__ */ jsx(
        Primitive.div,
        {
          ...scrollbarProps,
          ref: composeRefs2,
          style: { position: "absolute", ...scrollbarProps.style },
          onPointerDown: composeEventHandlers(props.onPointerDown, (event) => {
            const mainPointer = 0;
            if (event.button === mainPointer) {
              const element = event.target;
              element.setPointerCapture(event.pointerId);
              rectRef.current = scrollbar.getBoundingClientRect();
              prevWebkitUserSelectRef.current = document.body.style.webkitUserSelect;
              document.body.style.webkitUserSelect = "none";
              if (context.viewport) context.viewport.style.scrollBehavior = "auto";
              handleDragScroll(event);
            }
          }),
          onPointerMove: composeEventHandlers(props.onPointerMove, handleDragScroll),
          onPointerUp: composeEventHandlers(props.onPointerUp, (event) => {
            const element = event.target;
            if (element.hasPointerCapture(event.pointerId)) {
              element.releasePointerCapture(event.pointerId);
            }
            document.body.style.webkitUserSelect = prevWebkitUserSelectRef.current;
            if (context.viewport) context.viewport.style.scrollBehavior = "";
            rectRef.current = null;
          })
        }
      )
    }
  );
});
var THUMB_NAME = "ScrollAreaThumb";
var ScrollAreaThumb = React.forwardRef(
  (props, forwardedRef) => {
    const { forceMount, ...thumbProps } = props;
    const scrollbarContext = useScrollbarContext(THUMB_NAME, props.__scopeScrollArea);
    return /* @__PURE__ */ jsx(Presence, { present: forceMount || scrollbarContext.hasThumb, children: /* @__PURE__ */ jsx(ScrollAreaThumbImpl, { ref: forwardedRef, ...thumbProps }) });
  }
);
var ScrollAreaThumbImpl = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeScrollArea, style, ...thumbProps } = props;
    const scrollAreaContext = useScrollAreaContext(THUMB_NAME, __scopeScrollArea);
    const scrollbarContext = useScrollbarContext(THUMB_NAME, __scopeScrollArea);
    const { onThumbPositionChange } = scrollbarContext;
    const composedRef = useComposedRefs(
      forwardedRef,
      (node) => scrollbarContext.onThumbChange(node)
    );
    const removeUnlinkedScrollListenerRef = React.useRef(void 0);
    const debounceScrollEnd = useDebounceCallback(() => {
      if (removeUnlinkedScrollListenerRef.current) {
        removeUnlinkedScrollListenerRef.current();
        removeUnlinkedScrollListenerRef.current = void 0;
      }
    }, 100);
    React.useEffect(() => {
      const viewport = scrollAreaContext.viewport;
      if (viewport) {
        const handleScroll2 = () => {
          debounceScrollEnd();
          if (!removeUnlinkedScrollListenerRef.current) {
            const listener = addUnlinkedScrollListener(viewport, onThumbPositionChange);
            removeUnlinkedScrollListenerRef.current = listener;
            onThumbPositionChange();
          }
        };
        onThumbPositionChange();
        viewport.addEventListener("scroll", handleScroll2);
        return () => viewport.removeEventListener("scroll", handleScroll2);
      }
    }, [scrollAreaContext.viewport, debounceScrollEnd, onThumbPositionChange]);
    return /* @__PURE__ */ jsx(
      Primitive.div,
      {
        "data-state": scrollbarContext.hasThumb ? "visible" : "hidden",
        ...thumbProps,
        ref: composedRef,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...style
        },
        onPointerDownCapture: composeEventHandlers(props.onPointerDownCapture, (event) => {
          const thumb = event.target;
          const thumbRect = thumb.getBoundingClientRect();
          const x2 = event.clientX - thumbRect.left;
          const y = event.clientY - thumbRect.top;
          scrollbarContext.onThumbPointerDown({ x: x2, y });
        }),
        onPointerUp: composeEventHandlers(props.onPointerUp, scrollbarContext.onThumbPointerUp)
      }
    );
  }
);
ScrollAreaThumb.displayName = THUMB_NAME;
var CORNER_NAME = "ScrollAreaCorner";
var ScrollAreaCorner = React.forwardRef(
  (props, forwardedRef) => {
    const context = useScrollAreaContext(CORNER_NAME, props.__scopeScrollArea);
    const hasBothScrollbarsVisible = Boolean(context.scrollbarX && context.scrollbarY);
    const hasCorner = context.type !== "scroll" && hasBothScrollbarsVisible;
    return hasCorner ? /* @__PURE__ */ jsx(ScrollAreaCornerImpl, { ...props, ref: forwardedRef }) : null;
  }
);
ScrollAreaCorner.displayName = CORNER_NAME;
var ScrollAreaCornerImpl = React.forwardRef((props, forwardedRef) => {
  const { __scopeScrollArea, ...cornerProps } = props;
  const context = useScrollAreaContext(CORNER_NAME, __scopeScrollArea);
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);
  const hasSize = Boolean(width && height);
  useResizeObserver(context.scrollbarX, () => {
    const height2 = context.scrollbarX?.offsetHeight || 0;
    context.onCornerHeightChange(height2);
    setHeight(height2);
  });
  useResizeObserver(context.scrollbarY, () => {
    const width2 = context.scrollbarY?.offsetWidth || 0;
    context.onCornerWidthChange(width2);
    setWidth(width2);
  });
  return hasSize ? /* @__PURE__ */ jsx(
    Primitive.div,
    {
      ...cornerProps,
      ref: forwardedRef,
      style: {
        width,
        height,
        position: "absolute",
        right: context.dir === "ltr" ? 0 : void 0,
        left: context.dir === "rtl" ? 0 : void 0,
        bottom: 0,
        ...props.style
      }
    }
  ) : null;
});
function toInt(value) {
  return value ? parseInt(value, 10) : 0;
}
function getThumbRatio(viewportSize, contentSize) {
  const ratio = viewportSize / contentSize;
  return isNaN(ratio) ? 0 : ratio;
}
function getThumbSize(sizes) {
  const ratio = getThumbRatio(sizes.viewport, sizes.content);
  const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
  const thumbSize = (sizes.scrollbar.size - scrollbarPadding) * ratio;
  return Math.max(thumbSize, 18);
}
function getScrollPositionFromPointer(pointerPos, pointerOffset, sizes, dir = "ltr") {
  const thumbSizePx = getThumbSize(sizes);
  const thumbCenter = thumbSizePx / 2;
  const offset2 = pointerOffset || thumbCenter;
  const thumbOffsetFromEnd = thumbSizePx - offset2;
  const minPointerPos = sizes.scrollbar.paddingStart + offset2;
  const maxPointerPos = sizes.scrollbar.size - sizes.scrollbar.paddingEnd - thumbOffsetFromEnd;
  const maxScrollPos = sizes.content - sizes.viewport;
  const scrollRange = dir === "ltr" ? [0, maxScrollPos] : [maxScrollPos * -1, 0];
  const interpolate = linearScale([minPointerPos, maxPointerPos], scrollRange);
  return interpolate(pointerPos);
}
function getThumbOffsetFromScroll(scrollPos, sizes, dir = "ltr") {
  const thumbSizePx = getThumbSize(sizes);
  const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
  const scrollbar = sizes.scrollbar.size - scrollbarPadding;
  const maxScrollPos = sizes.content - sizes.viewport;
  const maxThumbPos = scrollbar - thumbSizePx;
  const scrollClampRange = dir === "ltr" ? [0, maxScrollPos] : [maxScrollPos * -1, 0];
  const scrollWithoutMomentum = clamp$1(scrollPos, scrollClampRange);
  const interpolate = linearScale([0, maxScrollPos], [0, maxThumbPos]);
  return interpolate(scrollWithoutMomentum);
}
function linearScale(input, output) {
  return (value) => {
    if (input[0] === input[1] || output[0] === output[1]) return output[0];
    const ratio = (output[1] - output[0]) / (input[1] - input[0]);
    return output[0] + ratio * (value - input[0]);
  };
}
function isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos) {
  return scrollPos > 0 && scrollPos < maxScrollPos;
}
var addUnlinkedScrollListener = (node, handler = () => {
}) => {
  let prevPosition = { left: node.scrollLeft, top: node.scrollTop };
  let rAF = 0;
  (function loop() {
    const position = { left: node.scrollLeft, top: node.scrollTop };
    const isHorizontalScroll = prevPosition.left !== position.left;
    const isVerticalScroll = prevPosition.top !== position.top;
    if (isHorizontalScroll || isVerticalScroll) handler();
    prevPosition = position;
    rAF = window.requestAnimationFrame(loop);
  })();
  return () => window.cancelAnimationFrame(rAF);
};
function useDebounceCallback(callback, delay) {
  const handleCallback = useCallbackRef$1(callback);
  const debounceTimerRef = React.useRef(0);
  React.useEffect(() => () => window.clearTimeout(debounceTimerRef.current), []);
  return React.useCallback(() => {
    window.clearTimeout(debounceTimerRef.current);
    debounceTimerRef.current = window.setTimeout(handleCallback, delay);
  }, [handleCallback, delay]);
}
function useResizeObserver(element, onResize) {
  const handleResize = useCallbackRef$1(onResize);
  useLayoutEffect2(() => {
    let rAF = 0;
    if (element) {
      const resizeObserver = new ResizeObserver(() => {
        cancelAnimationFrame(rAF);
        rAF = window.requestAnimationFrame(handleResize);
      });
      resizeObserver.observe(element);
      return () => {
        window.cancelAnimationFrame(rAF);
        resizeObserver.unobserve(element);
      };
    }
  }, [element, handleResize]);
}
var Root$2 = ScrollArea$1;
var Viewport = ScrollAreaViewport;
var Scrollbar = ScrollAreaScrollbar;
var Corner = ScrollAreaCorner;
const ScrollArea = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(Root$2, {
  ref,
  type: "scroll",
  className: twMerge("overflow-hidden", className),
  ...props,
  children: [
    children,
    /* @__PURE__ */ jsx(Corner, {}),
    /* @__PURE__ */ jsx(ScrollBar, { orientation: "vertical" })
  ]
}));
ScrollArea.displayName = Root$2.displayName;
const ScrollViewport = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(Viewport, {
  ref,
  className: twMerge("size-full rounded-[inherit]", className),
  ...props,
  children
}));
ScrollViewport.displayName = Viewport.displayName;
const ScrollBar = React.forwardRef(({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ jsx(Scrollbar, {
  ref,
  orientation,
  className: twMerge("flex select-none data-[state=hidden]:animate-fd-fade-out", orientation === "vertical" && "h-full w-1.5", orientation === "horizontal" && "h-1.5 flex-col", className),
  ...props,
  children: /* @__PURE__ */ jsx(ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-fd-border" })
}));
ScrollBar.displayName = Scrollbar.displayName;
const Link = forwardRef(({ href = "#", external = href.match(/^\w+:/) || href.startsWith("//"), prefetch, children, ...props }, ref) => {
  if (external) return /* @__PURE__ */ jsx("a", {
    ref,
    href,
    rel: "noreferrer noopener",
    target: "_blank",
    ...props,
    children
  });
  return /* @__PURE__ */ jsx(Link$2, {
    ref,
    href,
    prefetch,
    ...props,
    children
  });
});
Link.displayName = "Link";
const mergeClasses = (...classes) => classes.filter((className, index2, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index2;
}).join(" ").trim();
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};
const Icon = forwardRef(
  ({
    color = "currentColor",
    size: size2 = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size2,
      height: size2,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size2) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
const createLucideIcon = (iconName, iconNode) => {
  const Component = forwardRef(
    ({ className, ...props }, ref) => createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
const __iconNode$e = [
  [
    "path",
    {
      d: "M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1",
      key: "ns4c3b"
    }
  ],
  ["path", { d: "m12 15 5 6H7Z", key: "14qnn2" }]
];
const Airplay = createLucideIcon("airplay", __iconNode$e);
const __iconNode$d = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = createLucideIcon("check", __iconNode$d);
const __iconNode$c = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
const ChevronDown = createLucideIcon("chevron-down", __iconNode$c);
const __iconNode$b = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = createLucideIcon("chevron-left", __iconNode$b);
const __iconNode$a = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = createLucideIcon("chevron-right", __iconNode$a);
const __iconNode$9 = [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
];
const ChevronsUpDown = createLucideIcon("chevrons-up-down", __iconNode$9);
const __iconNode$8 = [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ]
];
const Clipboard = createLucideIcon("clipboard", __iconNode$8);
const __iconNode$7 = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
];
const Copy = createLucideIcon("copy", __iconNode$7);
const __iconNode$6 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
];
const ExternalLink = createLucideIcon("external-link", __iconNode$6);
const __iconNode$5 = [
  ["path", { d: "m5 8 6 6", key: "1wu5hv" }],
  ["path", { d: "m4 14 6-6 2-3", key: "1k1g8d" }],
  ["path", { d: "M2 5h12", key: "or177f" }],
  ["path", { d: "M7 2h1", key: "1t2jsx" }],
  ["path", { d: "m22 22-5-10-5 10", key: "don7ne" }],
  ["path", { d: "M14 18h6", key: "1m8k6r" }]
];
const Languages = createLucideIcon("languages", __iconNode$5);
const __iconNode$4 = [
  [
    "path",
    {
      d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
      key: "kfwtm"
    }
  ]
];
const Moon = createLucideIcon("moon", __iconNode$4);
const __iconNode$3 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
];
const PanelLeft = createLucideIcon("panel-left", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = createLucideIcon("search", __iconNode$2);
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
];
const Sun = createLucideIcon("sun", __iconNode$1);
const __iconNode = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 19H3", key: "z6ezky" }]
];
const TextAlignStart = createLucideIcon("text-align-start", __iconNode);
function isDifferent(a, b2) {
  if (Array.isArray(a) && Array.isArray(b2)) return b2.length !== a.length || a.some((v, i) => isDifferent(v, b2[i]));
  return a !== b2;
}
function useOnChange(value, onChange, isUpdated = isDifferent) {
  const [prev, setPrev] = useState(value);
  if (isUpdated(prev, value)) {
    onChange(value, prev);
    setPrev(value);
  }
}
function useMediaQuery(query, disabled = false) {
  const [isMatch, setMatch] = useState(null);
  useEffect(() => {
    if (disabled) return;
    const mediaQueryList = window.matchMedia(query);
    const handleChange = () => {
      setMatch(mediaQueryList.matches);
    };
    handleChange();
    mediaQueryList.addEventListener("change", handleChange);
    return () => {
      mediaQueryList.removeEventListener("change", handleChange);
    };
  }, [disabled, query]);
  return isMatch;
}
const SidebarContext = createContext(null);
const FolderContext = createContext(null);
function SidebarProvider({ defaultOpenLevel = 0, prefetch, children }) {
  const closeOnRedirect = useRef(true);
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();
  const mode = useMediaQuery("(width < 768px)") ? "drawer" : "full";
  useOnChange(pathname, () => {
    if (closeOnRedirect.current) setOpen(false);
    closeOnRedirect.current = true;
  });
  return /* @__PURE__ */ jsx(SidebarContext, {
    value: useMemo(() => ({
      open,
      setOpen,
      collapsed,
      setCollapsed,
      closeOnRedirect,
      defaultOpenLevel,
      prefetch,
      mode
    }), [
      open,
      collapsed,
      defaultOpenLevel,
      prefetch,
      mode
    ]),
    children
  });
}
function useSidebar() {
  const ctx = use(SidebarContext);
  if (!ctx) throw new Error("Missing SidebarContext, make sure you have wrapped the component in <DocsLayout /> and the context is available.");
  return ctx;
}
function useFolder() {
  return use(FolderContext);
}
function useFolderDepth() {
  return use(FolderContext)?.depth ?? 0;
}
function SidebarContent$1({ mode: allowedMode = "full", children }) {
  const { collapsed, mode } = useSidebar();
  const [hover, setHover] = useState(false);
  const ref = useRef(null);
  const timerRef = useRef(0);
  useOnChange(collapsed, () => {
    if (collapsed) setHover(false);
  });
  if (allowedMode !== true && allowedMode !== mode) return;
  function shouldIgnoreHover(e) {
    const element = ref.current;
    if (!element) return true;
    return !collapsed || e.pointerType === "touch" || element.getAnimations().length > 0;
  }
  return children({
    ref,
    collapsed,
    hovered: hover,
    onPointerEnter(e) {
      if (shouldIgnoreHover(e)) return;
      window.clearTimeout(timerRef.current);
      setHover(true);
    },
    onPointerLeave(e) {
      if (shouldIgnoreHover(e)) return;
      window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => setHover(false), Math.min(e.clientX, document.body.clientWidth - e.clientX) > 100 ? 0 : 500);
    }
  });
}
function SidebarDrawerOverlay(props) {
  const { open, setOpen, mode } = useSidebar();
  if (mode !== "drawer") return;
  return /* @__PURE__ */ jsx(Presence, {
    present: open,
    children: /* @__PURE__ */ jsx("div", {
      "data-state": open ? "open" : "closed",
      onClick: () => setOpen(false),
      ...props
    })
  });
}
function SidebarDrawerContent({ className, children, ...props }) {
  const { open, mode } = useSidebar();
  const state = open ? "open" : "closed";
  if (mode !== "drawer") return;
  return /* @__PURE__ */ jsx(Presence, {
    present: open,
    children: ({ present }) => /* @__PURE__ */ jsx("aside", {
      id: "nd-sidebar-mobile",
      "data-state": state,
      className: twMerge(!present && "invisible", className),
      ...props,
      children
    })
  });
}
function SidebarViewport(props) {
  return /* @__PURE__ */ jsx(ScrollArea, {
    ...props,
    className: twMerge("min-h-0 flex-1", props.className),
    children: /* @__PURE__ */ jsx(ScrollViewport, {
      className: "p-4 overscroll-contain",
      style: { maskImage: "linear-gradient(to bottom, transparent, white 12px, white calc(100% - 12px), transparent)" },
      children: props.children
    })
  });
}
function SidebarSeparator$1(props) {
  const depth = useFolderDepth();
  return /* @__PURE__ */ jsx("p", {
    ...props,
    className: twMerge("inline-flex items-center gap-2 mb-1.5 px-2 mt-6 empty:mb-0", depth === 0 && "first:mt-0", props.className),
    children: props.children
  });
}
function SidebarItem$1({ icon, active = false, children, ...props }) {
  const ref = useRef(null);
  const { prefetch } = useSidebar();
  useAutoScroll(active, ref);
  return /* @__PURE__ */ jsxs(Link, {
    ref,
    "data-active": active,
    prefetch,
    ...props,
    children: [icon ?? (props.external ? /* @__PURE__ */ jsx(ExternalLink, {}) : null), children]
  });
}
function SidebarFolder({ defaultOpen: defaultOpenProp, collapsible = true, active = false, children, ...props }) {
  const { defaultOpenLevel } = useSidebar();
  const depth = useFolderDepth() + 1;
  const defaultOpen = collapsible === false || active || (defaultOpenProp ?? defaultOpenLevel >= depth);
  const [open, setOpen] = useState(defaultOpen);
  useOnChange(defaultOpen, (v) => {
    if (v) setOpen(v);
  });
  return /* @__PURE__ */ jsx(Collapsible, {
    open,
    onOpenChange: setOpen,
    disabled: !collapsible,
    ...props,
    children: /* @__PURE__ */ jsx(FolderContext, {
      value: useMemo(() => ({
        open,
        setOpen,
        depth,
        collapsible
      }), [
        collapsible,
        depth,
        open
      ]),
      children
    })
  });
}
function SidebarFolderTrigger$1({ children, ...props }) {
  const { open, collapsible } = use(FolderContext);
  if (collapsible) return /* @__PURE__ */ jsxs(CollapsibleTrigger, {
    ...props,
    children: [children, /* @__PURE__ */ jsx(ChevronDown, {
      "data-icon": true,
      className: twMerge("ms-auto transition-transform", !open && "-rotate-90")
    })]
  });
  return /* @__PURE__ */ jsx("div", {
    ...props,
    children
  });
}
function SidebarFolderLink$1({ children, active = false, ...props }) {
  const ref = useRef(null);
  const { open, setOpen, collapsible } = use(FolderContext);
  const { prefetch } = useSidebar();
  useAutoScroll(active, ref);
  return /* @__PURE__ */ jsxs(Link, {
    ref,
    "data-active": active,
    onClick: (e) => {
      if (!collapsible) return;
      if (e.target instanceof Element && e.target.matches("[data-icon], [data-icon] *")) {
        setOpen(!open);
        e.preventDefault();
      } else setOpen(active ? !open : true);
    },
    prefetch,
    ...props,
    children: [children, collapsible && /* @__PURE__ */ jsx(ChevronDown, {
      "data-icon": true,
      className: twMerge("ms-auto transition-transform", !open && "-rotate-90")
    })]
  });
}
function SidebarFolderContent$1(props) {
  return /* @__PURE__ */ jsx(CollapsibleContent, {
    ...props,
    children: props.children
  });
}
function SidebarTrigger({ children, ...props }) {
  const { setOpen } = useSidebar();
  return /* @__PURE__ */ jsx("button", {
    "aria-label": "Open Sidebar",
    onClick: () => setOpen((prev) => !prev),
    ...props,
    children
  });
}
function SidebarCollapseTrigger(props) {
  const { collapsed, setCollapsed } = useSidebar();
  return /* @__PURE__ */ jsx("button", {
    type: "button",
    "aria-label": "Collapse Sidebar",
    "data-collapsed": collapsed,
    onClick: () => {
      setCollapsed((prev) => !prev);
    },
    ...props,
    children: props.children
  });
}
function useAutoScroll(active, ref) {
  const { mode } = useSidebar();
  useEffect(() => {
    if (active && ref.current) scrollIntoView(ref.current, {
      boundary: document.getElementById(mode === "drawer" ? "nd-sidebar-mobile" : "nd-sidebar"),
      scrollMode: "if-needed"
    });
  }, [
    active,
    mode,
    ref
  ]);
}
function normalize(urlOrPath) {
  if (urlOrPath.length > 1 && urlOrPath.endsWith("/")) return urlOrPath.slice(0, -1);
  return urlOrPath;
}
function isActive(href, pathname, nested = false) {
  href = normalize(href);
  pathname = normalize(pathname);
  return href === pathname || nested && pathname.startsWith(`${href}/`);
}
function useEscapeKeydown(onEscapeKeyDownProp, ownerDocument = globalThis?.document) {
  const onEscapeKeyDown = useCallbackRef$1(onEscapeKeyDownProp);
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onEscapeKeyDown(event);
      }
    };
    ownerDocument.addEventListener("keydown", handleKeyDown, { capture: true });
    return () => ownerDocument.removeEventListener("keydown", handleKeyDown, { capture: true });
  }, [onEscapeKeyDown, ownerDocument]);
}
var DISMISSABLE_LAYER_NAME = "DismissableLayer";
var CONTEXT_UPDATE = "dismissableLayer.update";
var POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
var FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
var originalBodyPointerEvents;
var DismissableLayerContext = React.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
});
var DismissableLayer = React.forwardRef(
  (props, forwardedRef) => {
    const {
      disableOutsidePointerEvents = false,
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside,
      onInteractOutside,
      onDismiss,
      ...layerProps
    } = props;
    const context = React.useContext(DismissableLayerContext);
    const [node, setNode] = React.useState(null);
    const ownerDocument = node?.ownerDocument ?? globalThis?.document;
    const [, force] = React.useState({});
    const composedRefs = useComposedRefs(forwardedRef, (node2) => setNode(node2));
    const layers = Array.from(context.layers);
    const [highestLayerWithOutsidePointerEventsDisabled] = [...context.layersWithOutsidePointerEventsDisabled].slice(-1);
    const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
    const index2 = node ? layers.indexOf(node) : -1;
    const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
    const isPointerEventsEnabled = index2 >= highestLayerWithOutsidePointerEventsDisabledIndex;
    const pointerDownOutside = usePointerDownOutside((event) => {
      const target = event.target;
      const isPointerDownOnBranch = [...context.branches].some((branch) => branch.contains(target));
      if (!isPointerEventsEnabled || isPointerDownOnBranch) return;
      onPointerDownOutside?.(event);
      onInteractOutside?.(event);
      if (!event.defaultPrevented) onDismiss?.();
    }, ownerDocument);
    const focusOutside = useFocusOutside((event) => {
      const target = event.target;
      const isFocusInBranch = [...context.branches].some((branch) => branch.contains(target));
      if (isFocusInBranch) return;
      onFocusOutside?.(event);
      onInteractOutside?.(event);
      if (!event.defaultPrevented) onDismiss?.();
    }, ownerDocument);
    useEscapeKeydown((event) => {
      const isHighestLayer = index2 === context.layers.size - 1;
      if (!isHighestLayer) return;
      onEscapeKeyDown?.(event);
      if (!event.defaultPrevented && onDismiss) {
        event.preventDefault();
        onDismiss();
      }
    }, ownerDocument);
    React.useEffect(() => {
      if (!node) return;
      if (disableOutsidePointerEvents) {
        if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
          originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
          ownerDocument.body.style.pointerEvents = "none";
        }
        context.layersWithOutsidePointerEventsDisabled.add(node);
      }
      context.layers.add(node);
      dispatchUpdate();
      return () => {
        if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1) {
          ownerDocument.body.style.pointerEvents = originalBodyPointerEvents;
        }
      };
    }, [node, ownerDocument, disableOutsidePointerEvents, context]);
    React.useEffect(() => {
      return () => {
        if (!node) return;
        context.layers.delete(node);
        context.layersWithOutsidePointerEventsDisabled.delete(node);
        dispatchUpdate();
      };
    }, [node, context]);
    React.useEffect(() => {
      const handleUpdate = () => force({});
      document.addEventListener(CONTEXT_UPDATE, handleUpdate);
      return () => document.removeEventListener(CONTEXT_UPDATE, handleUpdate);
    }, []);
    return /* @__PURE__ */ jsx(
      Primitive.div,
      {
        ...layerProps,
        ref: composedRefs,
        style: {
          pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
          ...props.style
        },
        onFocusCapture: composeEventHandlers(props.onFocusCapture, focusOutside.onFocusCapture),
        onBlurCapture: composeEventHandlers(props.onBlurCapture, focusOutside.onBlurCapture),
        onPointerDownCapture: composeEventHandlers(
          props.onPointerDownCapture,
          pointerDownOutside.onPointerDownCapture
        )
      }
    );
  }
);
DismissableLayer.displayName = DISMISSABLE_LAYER_NAME;
var BRANCH_NAME = "DismissableLayerBranch";
var DismissableLayerBranch = React.forwardRef((props, forwardedRef) => {
  const context = React.useContext(DismissableLayerContext);
  const ref = React.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  React.useEffect(() => {
    const node = ref.current;
    if (node) {
      context.branches.add(node);
      return () => {
        context.branches.delete(node);
      };
    }
  }, [context.branches]);
  return /* @__PURE__ */ jsx(Primitive.div, { ...props, ref: composedRefs });
});
DismissableLayerBranch.displayName = BRANCH_NAME;
function usePointerDownOutside(onPointerDownOutside, ownerDocument = globalThis?.document) {
  const handlePointerDownOutside = useCallbackRef$1(onPointerDownOutside);
  const isPointerInsideReactTreeRef = React.useRef(false);
  const handleClickRef = React.useRef(() => {
  });
  React.useEffect(() => {
    const handlePointerDown = (event) => {
      if (event.target && !isPointerInsideReactTreeRef.current) {
        let handleAndDispatchPointerDownOutsideEvent2 = function() {
          handleAndDispatchCustomEvent(
            POINTER_DOWN_OUTSIDE,
            handlePointerDownOutside,
            eventDetail,
            { discrete: true }
          );
        };
        const eventDetail = { originalEvent: event };
        if (event.pointerType === "touch") {
          ownerDocument.removeEventListener("click", handleClickRef.current);
          handleClickRef.current = handleAndDispatchPointerDownOutsideEvent2;
          ownerDocument.addEventListener("click", handleClickRef.current, { once: true });
        } else {
          handleAndDispatchPointerDownOutsideEvent2();
        }
      } else {
        ownerDocument.removeEventListener("click", handleClickRef.current);
      }
      isPointerInsideReactTreeRef.current = false;
    };
    const timerId = window.setTimeout(() => {
      ownerDocument.addEventListener("pointerdown", handlePointerDown);
    }, 0);
    return () => {
      window.clearTimeout(timerId);
      ownerDocument.removeEventListener("pointerdown", handlePointerDown);
      ownerDocument.removeEventListener("click", handleClickRef.current);
    };
  }, [ownerDocument, handlePointerDownOutside]);
  return {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => isPointerInsideReactTreeRef.current = true
  };
}
function useFocusOutside(onFocusOutside, ownerDocument = globalThis?.document) {
  const handleFocusOutside = useCallbackRef$1(onFocusOutside);
  const isFocusInsideReactTreeRef = React.useRef(false);
  React.useEffect(() => {
    const handleFocus = (event) => {
      if (event.target && !isFocusInsideReactTreeRef.current) {
        const eventDetail = { originalEvent: event };
        handleAndDispatchCustomEvent(FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
          discrete: false
        });
      }
    };
    ownerDocument.addEventListener("focusin", handleFocus);
    return () => ownerDocument.removeEventListener("focusin", handleFocus);
  }, [ownerDocument, handleFocusOutside]);
  return {
    onFocusCapture: () => isFocusInsideReactTreeRef.current = true,
    onBlurCapture: () => isFocusInsideReactTreeRef.current = false
  };
}
function dispatchUpdate() {
  const event = new CustomEvent(CONTEXT_UPDATE);
  document.dispatchEvent(event);
}
function handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
  const target = detail.originalEvent.target;
  const event = new CustomEvent(name, { bubbles: false, cancelable: true, detail });
  if (handler) target.addEventListener(name, handler, { once: true });
  if (discrete) {
    dispatchDiscreteCustomEvent(target, event);
  } else {
    target.dispatchEvent(event);
  }
}
var count = 0;
function useFocusGuards() {
  React.useEffect(() => {
    const edgeGuards = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement("afterbegin", edgeGuards[0] ?? createFocusGuard());
    document.body.insertAdjacentElement("beforeend", edgeGuards[1] ?? createFocusGuard());
    count++;
    return () => {
      if (count === 1) {
        document.querySelectorAll("[data-radix-focus-guard]").forEach((node) => node.remove());
      }
      count--;
    };
  }, []);
}
function createFocusGuard() {
  const element = document.createElement("span");
  element.setAttribute("data-radix-focus-guard", "");
  element.tabIndex = 0;
  element.style.outline = "none";
  element.style.opacity = "0";
  element.style.position = "fixed";
  element.style.pointerEvents = "none";
  return element;
}
var AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
var AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
var EVENT_OPTIONS$1 = { bubbles: false, cancelable: true };
var FOCUS_SCOPE_NAME = "FocusScope";
var FocusScope = React.forwardRef((props, forwardedRef) => {
  const {
    loop = false,
    trapped = false,
    onMountAutoFocus: onMountAutoFocusProp,
    onUnmountAutoFocus: onUnmountAutoFocusProp,
    ...scopeProps
  } = props;
  const [container, setContainer] = React.useState(null);
  const onMountAutoFocus = useCallbackRef$1(onMountAutoFocusProp);
  const onUnmountAutoFocus = useCallbackRef$1(onUnmountAutoFocusProp);
  const lastFocusedElementRef = React.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, (node) => setContainer(node));
  const focusScope = React.useRef({
    paused: false,
    pause() {
      this.paused = true;
    },
    resume() {
      this.paused = false;
    }
  }).current;
  React.useEffect(() => {
    if (trapped) {
      let handleFocusIn2 = function(event) {
        if (focusScope.paused || !container) return;
        const target = event.target;
        if (container.contains(target)) {
          lastFocusedElementRef.current = target;
        } else {
          focus(lastFocusedElementRef.current, { select: true });
        }
      }, handleFocusOut2 = function(event) {
        if (focusScope.paused || !container) return;
        const relatedTarget = event.relatedTarget;
        if (relatedTarget === null) return;
        if (!container.contains(relatedTarget)) {
          focus(lastFocusedElementRef.current, { select: true });
        }
      }, handleMutations2 = function(mutations) {
        const focusedElement = document.activeElement;
        if (focusedElement !== document.body) return;
        for (const mutation of mutations) {
          if (mutation.removedNodes.length > 0) focus(container);
        }
      };
      document.addEventListener("focusin", handleFocusIn2);
      document.addEventListener("focusout", handleFocusOut2);
      const mutationObserver = new MutationObserver(handleMutations2);
      if (container) mutationObserver.observe(container, { childList: true, subtree: true });
      return () => {
        document.removeEventListener("focusin", handleFocusIn2);
        document.removeEventListener("focusout", handleFocusOut2);
        mutationObserver.disconnect();
      };
    }
  }, [trapped, container, focusScope.paused]);
  React.useEffect(() => {
    if (container) {
      focusScopesStack.add(focusScope);
      const previouslyFocusedElement = document.activeElement;
      const hasFocusedCandidate = container.contains(previouslyFocusedElement);
      if (!hasFocusedCandidate) {
        const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS$1);
        container.addEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
        container.dispatchEvent(mountEvent);
        if (!mountEvent.defaultPrevented) {
          focusFirst$1(removeLinks(getTabbableCandidates(container)), { select: true });
          if (document.activeElement === previouslyFocusedElement) {
            focus(container);
          }
        }
      }
      return () => {
        container.removeEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
        setTimeout(() => {
          const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS$1);
          container.addEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          container.dispatchEvent(unmountEvent);
          if (!unmountEvent.defaultPrevented) {
            focus(previouslyFocusedElement ?? document.body, { select: true });
          }
          container.removeEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          focusScopesStack.remove(focusScope);
        }, 0);
      };
    }
  }, [container, onMountAutoFocus, onUnmountAutoFocus, focusScope]);
  const handleKeyDown = React.useCallback(
    (event) => {
      if (!loop && !trapped) return;
      if (focusScope.paused) return;
      const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
      const focusedElement = document.activeElement;
      if (isTabKey && focusedElement) {
        const container2 = event.currentTarget;
        const [first, last] = getTabbableEdges(container2);
        const hasTabbableElementsInside = first && last;
        if (!hasTabbableElementsInside) {
          if (focusedElement === container2) event.preventDefault();
        } else {
          if (!event.shiftKey && focusedElement === last) {
            event.preventDefault();
            if (loop) focus(first, { select: true });
          } else if (event.shiftKey && focusedElement === first) {
            event.preventDefault();
            if (loop) focus(last, { select: true });
          }
        }
      }
    },
    [loop, trapped, focusScope.paused]
  );
  return /* @__PURE__ */ jsx(Primitive.div, { tabIndex: -1, ...scopeProps, ref: composedRefs, onKeyDown: handleKeyDown });
});
FocusScope.displayName = FOCUS_SCOPE_NAME;
function focusFirst$1(candidates, { select = false } = {}) {
  const previouslyFocusedElement = document.activeElement;
  for (const candidate of candidates) {
    focus(candidate, { select });
    if (document.activeElement !== previouslyFocusedElement) return;
  }
}
function getTabbableEdges(container) {
  const candidates = getTabbableCandidates(container);
  const first = findVisible(candidates, container);
  const last = findVisible(candidates.reverse(), container);
  return [first, last];
}
function getTabbableCandidates(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode()) nodes.push(walker.currentNode);
  return nodes;
}
function findVisible(elements, container) {
  for (const element of elements) {
    if (!isHidden(element, { upTo: container })) return element;
  }
}
function isHidden(node, { upTo }) {
  if (getComputedStyle(node).visibility === "hidden") return true;
  while (node) {
    if (upTo !== void 0 && node === upTo) return false;
    if (getComputedStyle(node).display === "none") return true;
    node = node.parentElement;
  }
  return false;
}
function isSelectableInput(element) {
  return element instanceof HTMLInputElement && "select" in element;
}
function focus(element, { select = false } = {}) {
  if (element && element.focus) {
    const previouslyFocusedElement = document.activeElement;
    element.focus({ preventScroll: true });
    if (element !== previouslyFocusedElement && isSelectableInput(element) && select)
      element.select();
  }
}
var focusScopesStack = createFocusScopesStack();
function createFocusScopesStack() {
  let stack = [];
  return {
    add(focusScope) {
      const activeFocusScope = stack[0];
      if (focusScope !== activeFocusScope) {
        activeFocusScope?.pause();
      }
      stack = arrayRemove(stack, focusScope);
      stack.unshift(focusScope);
    },
    remove(focusScope) {
      stack = arrayRemove(stack, focusScope);
      stack[0]?.resume();
    }
  };
}
function arrayRemove(array, item) {
  const updatedArray = [...array];
  const index2 = updatedArray.indexOf(item);
  if (index2 !== -1) {
    updatedArray.splice(index2, 1);
  }
  return updatedArray;
}
function removeLinks(items) {
  return items.filter((item) => item.tagName !== "A");
}
var isClient = typeof document !== "undefined";
var noop = function noop2() {
};
var index = isClient ? useLayoutEffect : noop;
function deepEqual(a, b2) {
  if (a === b2) {
    return true;
  }
  if (typeof a !== typeof b2) {
    return false;
  }
  if (typeof a === "function" && a.toString() === b2.toString()) {
    return true;
  }
  let length;
  let i;
  let keys;
  if (a && b2 && typeof a === "object") {
    if (Array.isArray(a)) {
      length = a.length;
      if (length !== b2.length) return false;
      for (i = length; i-- !== 0; ) {
        if (!deepEqual(a[i], b2[i])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b2).length) {
      return false;
    }
    for (i = length; i-- !== 0; ) {
      if (!{}.hasOwnProperty.call(b2, keys[i])) {
        return false;
      }
    }
    for (i = length; i-- !== 0; ) {
      const key = keys[i];
      if (key === "_owner" && a.$$typeof) {
        continue;
      }
      if (!deepEqual(a[key], b2[key])) {
        return false;
      }
    }
    return true;
  }
  return a !== a && b2 !== b2;
}
function getDPR(element) {
  if (typeof window === "undefined") {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}
function useLatestRef(value) {
  const ref = React.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform,
    elements: {
      reference: externalReference,
      floating: externalFloating
    } = {},
    transform = true,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = React.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = React.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const [_reference, _setReference] = React.useState(null);
  const [_floating, _setFloating] = React.useState(null);
  const setReference = React.useCallback((node) => {
    if (node !== referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = React.useCallback((node) => {
    if (node !== floatingRef.current) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, []);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = React.useRef(null);
  const floatingRef = React.useRef(null);
  const dataRef = React.useRef(data);
  const hasWhileElementsMounted = whileElementsMounted != null;
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform);
  const openRef = useLatestRef(open);
  const update = React.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    computePosition(referenceRef.current, floatingRef.current, config).then((data2) => {
      const fullData = {
        ...data2,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: openRef.current !== false
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        ReactDOM.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef, openRef]);
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData((data2) => ({
        ...data2,
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = React.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (referenceEl) referenceRef.current = referenceEl;
    if (floatingEl) floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update);
      }
      update();
    }
  }, [referenceEl, floatingEl, update, whileElementsMountedRef, hasWhileElementsMounted]);
  const refs = React.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = React.useMemo(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]);
  const floatingStyles = React.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!elements.floating) {
      return initialStyles;
    }
    const x2 = roundByDPR(elements.floating, data.x);
    const y = roundByDPR(elements.floating, data.y);
    if (transform) {
      return {
        ...initialStyles,
        transform: "translate(" + x2 + "px, " + y + "px)",
        ...getDPR(elements.floating) >= 1.5 && {
          willChange: "transform"
        }
      };
    }
    return {
      position: strategy,
      left: x2,
      top: y
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return React.useMemo(() => ({
    ...data,
    update,
    refs,
    elements,
    floatingStyles
  }), [data, update, refs, elements, floatingStyles]);
}
const arrow$1 = (options) => {
  function isRef(value) {
    return {}.hasOwnProperty.call(value, "current");
  }
  return {
    name: "arrow",
    options,
    fn(state) {
      const {
        element,
        padding
      } = typeof options === "function" ? options(state) : options;
      if (element && isRef(element)) {
        if (element.current != null) {
          return arrow$2({
            element: element.current,
            padding
          }).fn(state);
        }
        return {};
      }
      if (element) {
        return arrow$2({
          element,
          padding
        }).fn(state);
      }
      return {};
    }
  };
};
const offset = (options, deps) => ({
  ...offset$1(options),
  options: [options, deps]
});
const shift = (options, deps) => ({
  ...shift$1(options),
  options: [options, deps]
});
const limitShift = (options, deps) => ({
  ...limitShift$1(options),
  options: [options, deps]
});
const flip = (options, deps) => ({
  ...flip$1(options),
  options: [options, deps]
});
const size = (options, deps) => ({
  ...size$1(options),
  options: [options, deps]
});
const hide = (options, deps) => ({
  ...hide$1(options),
  options: [options, deps]
});
const arrow = (options, deps) => ({
  ...arrow$1(options),
  options: [options, deps]
});
var NAME = "Arrow";
var Arrow$1 = React.forwardRef((props, forwardedRef) => {
  const { children, width = 10, height = 5, ...arrowProps } = props;
  return /* @__PURE__ */ jsx(
    Primitive.svg,
    {
      ...arrowProps,
      ref: forwardedRef,
      width,
      height,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: props.asChild ? children : /* @__PURE__ */ jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Arrow$1.displayName = NAME;
var Root$1 = Arrow$1;
function useSize(element) {
  const [size2, setSize] = React.useState(void 0);
  useLayoutEffect2(() => {
    if (element) {
      setSize({ width: element.offsetWidth, height: element.offsetHeight });
      const resizeObserver = new ResizeObserver((entries) => {
        if (!Array.isArray(entries)) {
          return;
        }
        if (!entries.length) {
          return;
        }
        const entry = entries[0];
        let width;
        let height;
        if ("borderBoxSize" in entry) {
          const borderSizeEntry = entry["borderBoxSize"];
          const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
          width = borderSize["inlineSize"];
          height = borderSize["blockSize"];
        } else {
          width = element.offsetWidth;
          height = element.offsetHeight;
        }
        setSize({ width, height });
      });
      resizeObserver.observe(element, { box: "border-box" });
      return () => resizeObserver.unobserve(element);
    } else {
      setSize(void 0);
    }
  }, [element]);
  return size2;
}
var POPPER_NAME = "Popper";
var [createPopperContext, createPopperScope] = createContextScope(POPPER_NAME);
var [PopperProvider, usePopperContext] = createPopperContext(POPPER_NAME);
var Popper = (props) => {
  const { __scopePopper, children } = props;
  const [anchor, setAnchor] = React.useState(null);
  return /* @__PURE__ */ jsx(PopperProvider, { scope: __scopePopper, anchor, onAnchorChange: setAnchor, children });
};
Popper.displayName = POPPER_NAME;
var ANCHOR_NAME$1 = "PopperAnchor";
var PopperAnchor = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopePopper, virtualRef, ...anchorProps } = props;
    const context = usePopperContext(ANCHOR_NAME$1, __scopePopper);
    const ref = React.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const anchorRef = React.useRef(null);
    React.useEffect(() => {
      const previousAnchor = anchorRef.current;
      anchorRef.current = virtualRef?.current || ref.current;
      if (previousAnchor !== anchorRef.current) {
        context.onAnchorChange(anchorRef.current);
      }
    });
    return virtualRef ? null : /* @__PURE__ */ jsx(Primitive.div, { ...anchorProps, ref: composedRefs });
  }
);
PopperAnchor.displayName = ANCHOR_NAME$1;
var CONTENT_NAME$2 = "PopperContent";
var [PopperContentProvider, useContentContext] = createPopperContext(CONTENT_NAME$2);
var PopperContent = React.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopePopper,
      side = "bottom",
      sideOffset = 0,
      align = "center",
      alignOffset = 0,
      arrowPadding = 0,
      avoidCollisions = true,
      collisionBoundary = [],
      collisionPadding: collisionPaddingProp = 0,
      sticky = "partial",
      hideWhenDetached = false,
      updatePositionStrategy = "optimized",
      onPlaced,
      ...contentProps
    } = props;
    const context = usePopperContext(CONTENT_NAME$2, __scopePopper);
    const [content, setContent] = React.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setContent(node));
    const [arrow$12, setArrow] = React.useState(null);
    const arrowSize = useSize(arrow$12);
    const arrowWidth = arrowSize?.width ?? 0;
    const arrowHeight = arrowSize?.height ?? 0;
    const desiredPlacement = side + (align !== "center" ? "-" + align : "");
    const collisionPadding = typeof collisionPaddingProp === "number" ? collisionPaddingProp : { top: 0, right: 0, bottom: 0, left: 0, ...collisionPaddingProp };
    const boundary = Array.isArray(collisionBoundary) ? collisionBoundary : [collisionBoundary];
    const hasExplicitBoundaries = boundary.length > 0;
    const detectOverflowOptions = {
      padding: collisionPadding,
      boundary: boundary.filter(isNotNull),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: hasExplicitBoundaries
    };
    const { refs, floatingStyles, placement, isPositioned, middlewareData } = useFloating({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: desiredPlacement,
      whileElementsMounted: (...args) => {
        const cleanup = autoUpdate(...args, {
          animationFrame: updatePositionStrategy === "always"
        });
        return cleanup;
      },
      elements: {
        reference: context.anchor
      },
      middleware: [
        offset({ mainAxis: sideOffset + arrowHeight, alignmentAxis: alignOffset }),
        avoidCollisions && shift({
          mainAxis: true,
          crossAxis: false,
          limiter: sticky === "partial" ? limitShift() : void 0,
          ...detectOverflowOptions
        }),
        avoidCollisions && flip({ ...detectOverflowOptions }),
        size({
          ...detectOverflowOptions,
          apply: ({ elements, rects, availableWidth, availableHeight }) => {
            const { width: anchorWidth, height: anchorHeight } = rects.reference;
            const contentStyle = elements.floating.style;
            contentStyle.setProperty("--radix-popper-available-width", `${availableWidth}px`);
            contentStyle.setProperty("--radix-popper-available-height", `${availableHeight}px`);
            contentStyle.setProperty("--radix-popper-anchor-width", `${anchorWidth}px`);
            contentStyle.setProperty("--radix-popper-anchor-height", `${anchorHeight}px`);
          }
        }),
        arrow$12 && arrow({ element: arrow$12, padding: arrowPadding }),
        transformOrigin({ arrowWidth, arrowHeight }),
        hideWhenDetached && hide({ strategy: "referenceHidden", ...detectOverflowOptions })
      ]
    });
    const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
    const handlePlaced = useCallbackRef$1(onPlaced);
    useLayoutEffect2(() => {
      if (isPositioned) {
        handlePlaced?.();
      }
    }, [isPositioned, handlePlaced]);
    const arrowX = middlewareData.arrow?.x;
    const arrowY = middlewareData.arrow?.y;
    const cannotCenterArrow = middlewareData.arrow?.centerOffset !== 0;
    const [contentZIndex, setContentZIndex] = React.useState();
    useLayoutEffect2(() => {
      if (content) setContentZIndex(window.getComputedStyle(content).zIndex);
    }, [content]);
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref: refs.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...floatingStyles,
          transform: isPositioned ? floatingStyles.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: contentZIndex,
          ["--radix-popper-transform-origin"]: [
            middlewareData.transformOrigin?.x,
            middlewareData.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...middlewareData.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: props.dir,
        children: /* @__PURE__ */ jsx(
          PopperContentProvider,
          {
            scope: __scopePopper,
            placedSide,
            onArrowChange: setArrow,
            arrowX,
            arrowY,
            shouldHideArrow: cannotCenterArrow,
            children: /* @__PURE__ */ jsx(
              Primitive.div,
              {
                "data-side": placedSide,
                "data-align": placedAlign,
                ...contentProps,
                ref: composedRefs,
                style: {
                  ...contentProps.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: !isPositioned ? "none" : void 0
                }
              }
            )
          }
        )
      }
    );
  }
);
PopperContent.displayName = CONTENT_NAME$2;
var ARROW_NAME$1 = "PopperArrow";
var OPPOSITE_SIDE = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
};
var PopperArrow = React.forwardRef(function PopperArrow2(props, forwardedRef) {
  const { __scopePopper, ...arrowProps } = props;
  const contentContext = useContentContext(ARROW_NAME$1, __scopePopper);
  const baseSide = OPPOSITE_SIDE[contentContext.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ jsx(
      "span",
      {
        ref: contentContext.onArrowChange,
        style: {
          position: "absolute",
          left: contentContext.arrowX,
          top: contentContext.arrowY,
          [baseSide]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[contentContext.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: `rotate(180deg)`,
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[contentContext.placedSide],
          visibility: contentContext.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ jsx(
          Root$1,
          {
            ...arrowProps,
            ref: forwardedRef,
            style: {
              ...arrowProps.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
PopperArrow.displayName = ARROW_NAME$1;
function isNotNull(value) {
  return value !== null;
}
var transformOrigin = (options) => ({
  name: "transformOrigin",
  options,
  fn(data) {
    const { placement, rects, middlewareData } = data;
    const cannotCenterArrow = middlewareData.arrow?.centerOffset !== 0;
    const isArrowHidden = cannotCenterArrow;
    const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
    const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
    const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
    const noArrowAlign = { start: "0%", center: "50%", end: "100%" }[placedAlign];
    const arrowXCenter = (middlewareData.arrow?.x ?? 0) + arrowWidth / 2;
    const arrowYCenter = (middlewareData.arrow?.y ?? 0) + arrowHeight / 2;
    let x2 = "";
    let y = "";
    if (placedSide === "bottom") {
      x2 = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
      y = `${-arrowHeight}px`;
    } else if (placedSide === "top") {
      x2 = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
      y = `${rects.floating.height + arrowHeight}px`;
    } else if (placedSide === "right") {
      x2 = `${-arrowHeight}px`;
      y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
    } else if (placedSide === "left") {
      x2 = `${rects.floating.width + arrowHeight}px`;
      y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
    }
    return { data: { x: x2, y } };
  }
});
function getSideAndAlignFromPlacement(placement) {
  const [side, align = "center"] = placement.split("-");
  return [side, align];
}
var Root2$1 = Popper;
var Anchor = PopperAnchor;
var Content = PopperContent;
var Arrow = PopperArrow;
var PORTAL_NAME$1 = "Portal";
var Portal$1 = React.forwardRef((props, forwardedRef) => {
  const { container: containerProp, ...portalProps } = props;
  const [mounted, setMounted] = React.useState(false);
  useLayoutEffect2(() => setMounted(true), []);
  const container = containerProp || mounted && globalThis?.document?.body;
  return container ? ReactDOM__default.createPortal(/* @__PURE__ */ jsx(Primitive.div, { ...portalProps, ref: forwardedRef }), container) : null;
});
Portal$1.displayName = PORTAL_NAME$1;
// @__NO_SIDE_EFFECTS__
function createSlot$1(ownerName) {
  const SlotClone = /* @__PURE__ */ createSlotClone$1(ownerName);
  const Slot2 = React.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    const childrenArray = React.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable$1);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (React.Children.count(newElement) > 1) return React.Children.only(null);
          return React.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return /* @__PURE__ */ jsx(SlotClone, { ...slotProps, ref: forwardedRef, children: React.isValidElement(newElement) ? React.cloneElement(newElement, void 0, newChildren) : null });
    }
    return /* @__PURE__ */ jsx(SlotClone, { ...slotProps, ref: forwardedRef, children });
  });
  Slot2.displayName = `${ownerName}.Slot`;
  return Slot2;
}
// @__NO_SIDE_EFFECTS__
function createSlotClone$1(ownerName) {
  const SlotClone = React.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    if (React.isValidElement(children)) {
      const childrenRef = getElementRef$1(children);
      const props2 = mergeProps$1(slotProps, children.props);
      if (children.type !== React.Fragment) {
        props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
      }
      return React.cloneElement(children, props2);
    }
    return React.Children.count(children) > 1 ? React.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var SLOTTABLE_IDENTIFIER$1 = /* @__PURE__ */ Symbol("radix.slottable");
function isSlottable$1(child) {
  return React.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER$1;
}
function mergeProps$1(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef$1(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}
var zeroRightClassName = "right-scroll-bar-position";
var fullWidthClassName = "width-before-scroll-bar";
var noScrollbarsClassName = "with-scroll-bars-hidden";
var removedBarSizeVariable = "--removed-body-scroll-bar-size";
function assignRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
  return ref;
}
function useCallbackRef(initialValue, callback) {
  var ref = useState(function() {
    return {
      // value
      value: initialValue,
      // last callback
      callback,
      // "memoized" public interface
      facade: {
        get current() {
          return ref.value;
        },
        set current(value) {
          var last = ref.value;
          if (last !== value) {
            ref.value = value;
            ref.callback(value, last);
          }
        }
      }
    };
  })[0];
  ref.callback = callback;
  return ref.facade;
}
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;
var currentValues = /* @__PURE__ */ new WeakMap();
function useMergeRefs(refs, defaultValue) {
  var callbackRef = useCallbackRef(null, function(newValue) {
    return refs.forEach(function(ref) {
      return assignRef(ref, newValue);
    });
  });
  useIsomorphicLayoutEffect(function() {
    var oldValue = currentValues.get(callbackRef);
    if (oldValue) {
      var prevRefs_1 = new Set(oldValue);
      var nextRefs_1 = new Set(refs);
      var current_1 = callbackRef.current;
      prevRefs_1.forEach(function(ref) {
        if (!nextRefs_1.has(ref)) {
          assignRef(ref, null);
        }
      });
      nextRefs_1.forEach(function(ref) {
        if (!prevRefs_1.has(ref)) {
          assignRef(ref, current_1);
        }
      });
    }
    currentValues.set(callbackRef, refs);
  }, [refs]);
  return callbackRef;
}
function ItoI(a) {
  return a;
}
function innerCreateMedium(defaults, middleware) {
  if (middleware === void 0) {
    middleware = ItoI;
  }
  var buffer = [];
  var assigned = false;
  var medium = {
    read: function() {
      if (assigned) {
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      }
      if (buffer.length) {
        return buffer[buffer.length - 1];
      }
      return defaults;
    },
    useMedium: function(data) {
      var item = middleware(data, assigned);
      buffer.push(item);
      return function() {
        buffer = buffer.filter(function(x2) {
          return x2 !== item;
        });
      };
    },
    assignSyncMedium: function(cb) {
      assigned = true;
      while (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
      }
      buffer = {
        push: function(x2) {
          return cb(x2);
        },
        filter: function() {
          return buffer;
        }
      };
    },
    assignMedium: function(cb) {
      assigned = true;
      var pendingQueue = [];
      if (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
        pendingQueue = buffer;
      }
      var executeQueue = function() {
        var cbs2 = pendingQueue;
        pendingQueue = [];
        cbs2.forEach(cb);
      };
      var cycle = function() {
        return Promise.resolve().then(executeQueue);
      };
      cycle();
      buffer = {
        push: function(x2) {
          pendingQueue.push(x2);
          cycle();
        },
        filter: function(filter) {
          pendingQueue = pendingQueue.filter(filter);
          return buffer;
        }
      };
    }
  };
  return medium;
}
function createSidecarMedium(options) {
  if (options === void 0) {
    options = {};
  }
  var medium = innerCreateMedium(null);
  medium.options = __assign({ async: true, ssr: false }, options);
  return medium;
}
var SideCar$1 = function(_a) {
  var sideCar = _a.sideCar, rest = __rest(_a, ["sideCar"]);
  if (!sideCar) {
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  }
  var Target = sideCar.read();
  if (!Target) {
    throw new Error("Sidecar medium not found");
  }
  return React.createElement(Target, __assign({}, rest));
};
SideCar$1.isSideCarExport = true;
function exportSidecar(medium, exported) {
  medium.useMedium(exported);
  return SideCar$1;
}
var effectCar = createSidecarMedium();
var nothing = function() {
  return;
};
var RemoveScroll = React.forwardRef(function(props, parentRef) {
  var ref = React.useRef(null);
  var _a = React.useState({
    onScrollCapture: nothing,
    onWheelCapture: nothing,
    onTouchMoveCapture: nothing
  }), callbacks = _a[0], setCallbacks = _a[1];
  var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noRelative = props.noRelative, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? "div" : _b, gapMode = props.gapMode, rest = __rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]);
  var SideCar2 = sideCar;
  var containerRef = useMergeRefs([ref, parentRef]);
  var containerProps = __assign(__assign({}, rest), callbacks);
  return React.createElement(
    React.Fragment,
    null,
    enabled && React.createElement(SideCar2, { sideCar: effectCar, removeScrollBar, shards, noRelative, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref, gapMode }),
    forwardProps ? React.cloneElement(React.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef })) : React.createElement(Container, __assign({}, containerProps, { className, ref: containerRef }), children)
  );
});
RemoveScroll.defaultProps = {
  enabled: true,
  removeScrollBar: true,
  inert: false
};
RemoveScroll.classNames = {
  fullWidth: fullWidthClassName,
  zeroRight: zeroRightClassName
};
function makeStyleTag() {
  if (!document)
    return null;
  var tag = document.createElement("style");
  tag.type = "text/css";
  var nonce = getNonce();
  if (nonce) {
    tag.setAttribute("nonce", nonce);
  }
  return tag;
}
function injectStyles(tag, css) {
  if (tag.styleSheet) {
    tag.styleSheet.cssText = css;
  } else {
    tag.appendChild(document.createTextNode(css));
  }
}
function insertStyleTag(tag) {
  var head = document.head || document.getElementsByTagName("head")[0];
  head.appendChild(tag);
}
var stylesheetSingleton = function() {
  var counter = 0;
  var stylesheet = null;
  return {
    add: function(style) {
      if (counter == 0) {
        if (stylesheet = makeStyleTag()) {
          injectStyles(stylesheet, style);
          insertStyleTag(stylesheet);
        }
      }
      counter++;
    },
    remove: function() {
      counter--;
      if (!counter && stylesheet) {
        stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
        stylesheet = null;
      }
    }
  };
};
var styleHookSingleton = function() {
  var sheet = stylesheetSingleton();
  return function(styles, isDynamic) {
    React.useEffect(function() {
      sheet.add(styles);
      return function() {
        sheet.remove();
      };
    }, [styles && isDynamic]);
  };
};
var styleSingleton = function() {
  var useStyle = styleHookSingleton();
  var Sheet = function(_a) {
    var styles = _a.styles, dynamic = _a.dynamic;
    useStyle(styles, dynamic);
    return null;
  };
  return Sheet;
};
var zeroGap = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
};
var parse = function(x2) {
  return parseInt(x2 || "", 10) || 0;
};
var getOffset = function(gapMode) {
  var cs = window.getComputedStyle(document.body);
  var left = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
  var top = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
  var right = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
  return [parse(left), parse(top), parse(right)];
};
var getGapWidth = function(gapMode) {
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  if (typeof window === "undefined") {
    return zeroGap;
  }
  var offsets = getOffset(gapMode);
  var documentWidth = document.documentElement.clientWidth;
  var windowWidth = window.innerWidth;
  return {
    left: offsets[0],
    top: offsets[1],
    right: offsets[2],
    gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
  };
};
var Style = styleSingleton();
var lockAttribute = "data-scroll-locked";
var getStyles = function(_a, allowRelative, gapMode, important) {
  var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body[").concat(lockAttribute, "] {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
    allowRelative && "position: relative ".concat(important, ";"),
    gapMode === "margin" && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
    gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
  ].filter(Boolean).join(""), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body[").concat(lockAttribute, "] {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
};
var getCurrentUseCounter = function() {
  var counter = parseInt(document.body.getAttribute(lockAttribute) || "0", 10);
  return isFinite(counter) ? counter : 0;
};
var useLockAttribute = function() {
  React.useEffect(function() {
    document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString());
    return function() {
      var newCounter = getCurrentUseCounter() - 1;
      if (newCounter <= 0) {
        document.body.removeAttribute(lockAttribute);
      } else {
        document.body.setAttribute(lockAttribute, newCounter.toString());
      }
    };
  }, []);
};
var RemoveScrollBar = function(_a) {
  var noRelative = _a.noRelative, noImportant = _a.noImportant, _b = _a.gapMode, gapMode = _b === void 0 ? "margin" : _b;
  useLockAttribute();
  var gap = React.useMemo(function() {
    return getGapWidth(gapMode);
  }, [gapMode]);
  return React.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
};
var passiveSupported = false;
if (typeof window !== "undefined") {
  try {
    var options = Object.defineProperty({}, "passive", {
      get: function() {
        passiveSupported = true;
        return true;
      }
    });
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, options);
  } catch (err) {
    passiveSupported = false;
  }
}
var nonPassive = passiveSupported ? { passive: false } : false;
var alwaysContainsScroll = function(node) {
  return node.tagName === "TEXTAREA";
};
var elementCanBeScrolled = function(node, overflow) {
  if (!(node instanceof Element)) {
    return false;
  }
  var styles = window.getComputedStyle(node);
  return (
    // not-not-scrollable
    styles[overflow] !== "hidden" && // contains scroll inside self
    !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === "visible")
  );
};
var elementCouldBeVScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowY");
};
var elementCouldBeHScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowX");
};
var locationCouldBeScrolled = function(axis, node) {
  var ownerDocument = node.ownerDocument;
  var current = node;
  do {
    if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
      current = current.host;
    }
    var isScrollable = elementCouldBeScrolled(axis, current);
    if (isScrollable) {
      var _a = getScrollVariables(axis, current), scrollHeight = _a[1], clientHeight = _a[2];
      if (scrollHeight > clientHeight) {
        return true;
      }
    }
    current = current.parentNode;
  } while (current && current !== ownerDocument.body);
  return false;
};
var getVScrollVariables = function(_a) {
  var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
  return [
    scrollTop,
    scrollHeight,
    clientHeight
  ];
};
var getHScrollVariables = function(_a) {
  var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
  return [
    scrollLeft,
    scrollWidth,
    clientWidth
  ];
};
var elementCouldBeScrolled = function(axis, node) {
  return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function(axis, node) {
  return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function(axis, direction) {
  return axis === "h" && direction === "rtl" ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
  var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
  var delta = directionFactor * sourceDelta;
  var target = event.target;
  var targetInLock = endTarget.contains(target);
  var shouldCancelScroll = false;
  var isDeltaPositive = delta > 0;
  var availableScroll = 0;
  var availableScrollTop = 0;
  do {
    if (!target) {
      break;
    }
    var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
    var elementScroll = scroll_1 - capacity - directionFactor * position;
    if (position || elementScroll) {
      if (elementCouldBeScrolled(axis, target)) {
        availableScroll += elementScroll;
        availableScrollTop += position;
      }
    }
    var parent_1 = target.parentNode;
    target = parent_1 && parent_1.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? parent_1.host : parent_1;
  } while (
    // portaled content
    !targetInLock && target !== document.body || // self content
    targetInLock && (endTarget.contains(target) || endTarget === target)
  );
  if (isDeltaPositive && (Math.abs(availableScroll) < 1 || false)) {
    shouldCancelScroll = true;
  } else if (!isDeltaPositive && (Math.abs(availableScrollTop) < 1 || false)) {
    shouldCancelScroll = true;
  }
  return shouldCancelScroll;
};
var getTouchXY = function(event) {
  return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function(event) {
  return [event.deltaX, event.deltaY];
};
var extractRef = function(ref) {
  return ref && "current" in ref ? ref.current : ref;
};
var deltaCompare = function(x2, y) {
  return x2[0] === y[0] && x2[1] === y[1];
};
var generateStyle = function(id) {
  return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
  var shouldPreventQueue = React.useRef([]);
  var touchStartRef = React.useRef([0, 0]);
  var activeAxis = React.useRef();
  var id = React.useState(idCounter++)[0];
  var Style2 = React.useState(styleSingleton)[0];
  var lastProps = React.useRef(props);
  React.useEffect(function() {
    lastProps.current = props;
  }, [props]);
  React.useEffect(function() {
    if (props.inert) {
      document.body.classList.add("block-interactivity-".concat(id));
      var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
      allow_1.forEach(function(el) {
        return el.classList.add("allow-interactivity-".concat(id));
      });
      return function() {
        document.body.classList.remove("block-interactivity-".concat(id));
        allow_1.forEach(function(el) {
          return el.classList.remove("allow-interactivity-".concat(id));
        });
      };
    }
    return;
  }, [props.inert, props.lockRef.current, props.shards]);
  var shouldCancelEvent = React.useCallback(function(event, parent) {
    if ("touches" in event && event.touches.length === 2 || event.type === "wheel" && event.ctrlKey) {
      return !lastProps.current.allowPinchZoom;
    }
    var touch = getTouchXY(event);
    var touchStart = touchStartRef.current;
    var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
    var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
    var currentAxis;
    var target = event.target;
    var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
    if ("touches" in event && moveDirection === "h" && target.type === "range") {
      return false;
    }
    var selection = window.getSelection();
    var anchorNode = selection && selection.anchorNode;
    var isTouchingSelection = anchorNode ? anchorNode === target || anchorNode.contains(target) : false;
    if (isTouchingSelection) {
      return false;
    }
    var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    if (!canBeScrolledInMainDirection) {
      return true;
    }
    if (canBeScrolledInMainDirection) {
      currentAxis = moveDirection;
    } else {
      currentAxis = moveDirection === "v" ? "h" : "v";
      canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    }
    if (!canBeScrolledInMainDirection) {
      return false;
    }
    if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) {
      activeAxis.current = currentAxis;
    }
    if (!currentAxis) {
      return true;
    }
    var cancelingAxis = activeAxis.current || currentAxis;
    return handleScroll(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY);
  }, []);
  var shouldPrevent = React.useCallback(function(_event) {
    var event = _event;
    if (!lockStack.length || lockStack[lockStack.length - 1] !== Style2) {
      return;
    }
    var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event);
    var sourceEvent = shouldPreventQueue.current.filter(function(e) {
      return e.name === event.type && (e.target === event.target || event.target === e.shadowParent) && deltaCompare(e.delta, delta);
    })[0];
    if (sourceEvent && sourceEvent.should) {
      if (event.cancelable) {
        event.preventDefault();
      }
      return;
    }
    if (!sourceEvent) {
      var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
        return node.contains(event.target);
      });
      var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
      if (shouldStop) {
        if (event.cancelable) {
          event.preventDefault();
        }
      }
    }
  }, []);
  var shouldCancel = React.useCallback(function(name, delta, target, should) {
    var event = { name, delta, target, should, shadowParent: getOutermostShadowParent(target) };
    shouldPreventQueue.current.push(event);
    setTimeout(function() {
      shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
        return e !== event;
      });
    }, 1);
  }, []);
  var scrollTouchStart = React.useCallback(function(event) {
    touchStartRef.current = getTouchXY(event);
    activeAxis.current = void 0;
  }, []);
  var scrollWheel = React.useCallback(function(event) {
    shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  var scrollTouchMove = React.useCallback(function(event) {
    shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  React.useEffect(function() {
    lockStack.push(Style2);
    props.setCallbacks({
      onScrollCapture: scrollWheel,
      onWheelCapture: scrollWheel,
      onTouchMoveCapture: scrollTouchMove
    });
    document.addEventListener("wheel", shouldPrevent, nonPassive);
    document.addEventListener("touchmove", shouldPrevent, nonPassive);
    document.addEventListener("touchstart", scrollTouchStart, nonPassive);
    return function() {
      lockStack = lockStack.filter(function(inst) {
        return inst !== Style2;
      });
      document.removeEventListener("wheel", shouldPrevent, nonPassive);
      document.removeEventListener("touchmove", shouldPrevent, nonPassive);
      document.removeEventListener("touchstart", scrollTouchStart, nonPassive);
    };
  }, []);
  var removeScrollBar = props.removeScrollBar, inert = props.inert;
  return React.createElement(
    React.Fragment,
    null,
    inert ? React.createElement(Style2, { styles: generateStyle(id) }) : null,
    removeScrollBar ? React.createElement(RemoveScrollBar, { noRelative: props.noRelative, gapMode: props.gapMode }) : null
  );
}
function getOutermostShadowParent(node) {
  var shadowParent = null;
  while (node !== null) {
    if (node instanceof ShadowRoot) {
      shadowParent = node.host;
      node = node.host;
    }
    node = node.parentNode;
  }
  return shadowParent;
}
const SideCar = exportSidecar(effectCar, RemoveScrollSideCar);
var ReactRemoveScroll = React.forwardRef(function(props, ref) {
  return React.createElement(RemoveScroll, __assign({}, props, { ref, sideCar: SideCar }));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var POPOVER_NAME = "Popover";
var [createPopoverContext] = createContextScope(POPOVER_NAME, [
  createPopperScope
]);
var usePopperScope = createPopperScope();
var [PopoverProvider, usePopoverContext] = createPopoverContext(POPOVER_NAME);
var Popover$1 = (props) => {
  const {
    __scopePopover,
    children,
    open: openProp,
    defaultOpen,
    onOpenChange,
    modal = false
  } = props;
  const popperScope = usePopperScope(__scopePopover);
  const triggerRef = React.useRef(null);
  const [hasCustomAnchor, setHasCustomAnchor] = React.useState(false);
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen ?? false,
    onChange: onOpenChange,
    caller: POPOVER_NAME
  });
  return /* @__PURE__ */ jsx(Root2$1, { ...popperScope, children: /* @__PURE__ */ jsx(
    PopoverProvider,
    {
      scope: __scopePopover,
      contentId: useId(),
      triggerRef,
      open,
      onOpenChange: setOpen,
      onOpenToggle: React.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
      hasCustomAnchor,
      onCustomAnchorAdd: React.useCallback(() => setHasCustomAnchor(true), []),
      onCustomAnchorRemove: React.useCallback(() => setHasCustomAnchor(false), []),
      modal,
      children
    }
  ) });
};
Popover$1.displayName = POPOVER_NAME;
var ANCHOR_NAME = "PopoverAnchor";
var PopoverAnchor = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopePopover, ...anchorProps } = props;
    const context = usePopoverContext(ANCHOR_NAME, __scopePopover);
    const popperScope = usePopperScope(__scopePopover);
    const { onCustomAnchorAdd, onCustomAnchorRemove } = context;
    React.useEffect(() => {
      onCustomAnchorAdd();
      return () => onCustomAnchorRemove();
    }, [onCustomAnchorAdd, onCustomAnchorRemove]);
    return /* @__PURE__ */ jsx(Anchor, { ...popperScope, ...anchorProps, ref: forwardedRef });
  }
);
PopoverAnchor.displayName = ANCHOR_NAME;
var TRIGGER_NAME$1 = "PopoverTrigger";
var PopoverTrigger$1 = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopePopover, ...triggerProps } = props;
    const context = usePopoverContext(TRIGGER_NAME$1, __scopePopover);
    const popperScope = usePopperScope(__scopePopover);
    const composedTriggerRef = useComposedRefs(forwardedRef, context.triggerRef);
    const trigger = /* @__PURE__ */ jsx(
      Primitive.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": context.open,
        "aria-controls": context.contentId,
        "data-state": getState(context.open),
        ...triggerProps,
        ref: composedTriggerRef,
        onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
      }
    );
    return context.hasCustomAnchor ? trigger : /* @__PURE__ */ jsx(Anchor, { asChild: true, ...popperScope, children: trigger });
  }
);
PopoverTrigger$1.displayName = TRIGGER_NAME$1;
var PORTAL_NAME = "PopoverPortal";
var [PortalProvider, usePortalContext] = createPopoverContext(PORTAL_NAME, {
  forceMount: void 0
});
var PopoverPortal = (props) => {
  const { __scopePopover, forceMount, children, container } = props;
  const context = usePopoverContext(PORTAL_NAME, __scopePopover);
  return /* @__PURE__ */ jsx(PortalProvider, { scope: __scopePopover, forceMount, children: /* @__PURE__ */ jsx(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ jsx(Portal$1, { asChild: true, container, children }) }) });
};
PopoverPortal.displayName = PORTAL_NAME;
var CONTENT_NAME$1 = "PopoverContent";
var PopoverContent$1 = React.forwardRef(
  (props, forwardedRef) => {
    const portalContext = usePortalContext(CONTENT_NAME$1, props.__scopePopover);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = usePopoverContext(CONTENT_NAME$1, props.__scopePopover);
    return /* @__PURE__ */ jsx(Presence, { present: forceMount || context.open, children: context.modal ? /* @__PURE__ */ jsx(PopoverContentModal, { ...contentProps, ref: forwardedRef }) : /* @__PURE__ */ jsx(PopoverContentNonModal, { ...contentProps, ref: forwardedRef }) });
  }
);
PopoverContent$1.displayName = CONTENT_NAME$1;
var Slot = /* @__PURE__ */ createSlot$1("PopoverContent.RemoveScroll");
var PopoverContentModal = React.forwardRef(
  (props, forwardedRef) => {
    const context = usePopoverContext(CONTENT_NAME$1, props.__scopePopover);
    const contentRef = React.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, contentRef);
    const isRightClickOutsideRef = React.useRef(false);
    React.useEffect(() => {
      const content = contentRef.current;
      if (content) return hideOthers(content);
    }, []);
    return /* @__PURE__ */ jsx(ReactRemoveScroll, { as: Slot, allowPinchZoom: true, children: /* @__PURE__ */ jsx(
      PopoverContentImpl,
      {
        ...props,
        ref: composedRefs,
        trapFocus: context.open,
        disableOutsidePointerEvents: true,
        onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, (event) => {
          event.preventDefault();
          if (!isRightClickOutsideRef.current) context.triggerRef.current?.focus();
        }),
        onPointerDownOutside: composeEventHandlers(
          props.onPointerDownOutside,
          (event) => {
            const originalEvent = event.detail.originalEvent;
            const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
            const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
            isRightClickOutsideRef.current = isRightClick;
          },
          { checkForDefaultPrevented: false }
        ),
        onFocusOutside: composeEventHandlers(
          props.onFocusOutside,
          (event) => event.preventDefault(),
          { checkForDefaultPrevented: false }
        )
      }
    ) });
  }
);
var PopoverContentNonModal = React.forwardRef(
  (props, forwardedRef) => {
    const context = usePopoverContext(CONTENT_NAME$1, props.__scopePopover);
    const hasInteractedOutsideRef = React.useRef(false);
    const hasPointerDownOutsideRef = React.useRef(false);
    return /* @__PURE__ */ jsx(
      PopoverContentImpl,
      {
        ...props,
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (event) => {
          props.onCloseAutoFocus?.(event);
          if (!event.defaultPrevented) {
            if (!hasInteractedOutsideRef.current) context.triggerRef.current?.focus();
            event.preventDefault();
          }
          hasInteractedOutsideRef.current = false;
          hasPointerDownOutsideRef.current = false;
        },
        onInteractOutside: (event) => {
          props.onInteractOutside?.(event);
          if (!event.defaultPrevented) {
            hasInteractedOutsideRef.current = true;
            if (event.detail.originalEvent.type === "pointerdown") {
              hasPointerDownOutsideRef.current = true;
            }
          }
          const target = event.target;
          const targetIsTrigger = context.triggerRef.current?.contains(target);
          if (targetIsTrigger) event.preventDefault();
          if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current) {
            event.preventDefault();
          }
        }
      }
    );
  }
);
var PopoverContentImpl = React.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopePopover,
      trapFocus,
      onOpenAutoFocus,
      onCloseAutoFocus,
      disableOutsidePointerEvents,
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside,
      onInteractOutside,
      ...contentProps
    } = props;
    const context = usePopoverContext(CONTENT_NAME$1, __scopePopover);
    const popperScope = usePopperScope(__scopePopover);
    useFocusGuards();
    return /* @__PURE__ */ jsx(
      FocusScope,
      {
        asChild: true,
        loop: true,
        trapped: trapFocus,
        onMountAutoFocus: onOpenAutoFocus,
        onUnmountAutoFocus: onCloseAutoFocus,
        children: /* @__PURE__ */ jsx(
          DismissableLayer,
          {
            asChild: true,
            disableOutsidePointerEvents,
            onInteractOutside,
            onEscapeKeyDown,
            onPointerDownOutside,
            onFocusOutside,
            onDismiss: () => context.onOpenChange(false),
            children: /* @__PURE__ */ jsx(
              Content,
              {
                "data-state": getState(context.open),
                role: "dialog",
                id: context.contentId,
                ...popperScope,
                ...contentProps,
                ref: forwardedRef,
                style: {
                  ...contentProps.style,
                  // re-namespace exposed content custom properties
                  ...{
                    "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                    "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                    "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                    "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                  }
                }
              }
            )
          }
        )
      }
    );
  }
);
var CLOSE_NAME = "PopoverClose";
var PopoverClose = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopePopover, ...closeProps } = props;
    const context = usePopoverContext(CLOSE_NAME, __scopePopover);
    return /* @__PURE__ */ jsx(
      Primitive.button,
      {
        type: "button",
        ...closeProps,
        ref: forwardedRef,
        onClick: composeEventHandlers(props.onClick, () => context.onOpenChange(false))
      }
    );
  }
);
PopoverClose.displayName = CLOSE_NAME;
var ARROW_NAME = "PopoverArrow";
var PopoverArrow = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopePopover, ...arrowProps } = props;
    const popperScope = usePopperScope(__scopePopover);
    return /* @__PURE__ */ jsx(Arrow, { ...popperScope, ...arrowProps, ref: forwardedRef });
  }
);
PopoverArrow.displayName = ARROW_NAME;
function getState(open) {
  return open ? "open" : "closed";
}
var Root2 = Popover$1;
var Trigger = PopoverTrigger$1;
var Portal = PopoverPortal;
var Content2 = PopoverContent$1;
const Popover = Root2;
const PopoverTrigger = Trigger;
const PopoverContent = React.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(Portal, { children: /* @__PURE__ */ jsx(Content2, {
  ref,
  align,
  sideOffset,
  side: "bottom",
  className: twMerge("z-50 origin-(--radix-popover-content-transform-origin) overflow-y-auto max-h-(--radix-popover-content-available-height) min-w-[240px] max-w-[98vw] rounded-xl border bg-fd-popover/60 backdrop-blur-lg p-2 text-sm text-fd-popover-foreground shadow-lg focus-visible:outline-none data-[state=closed]:animate-fd-popover-out data-[state=open]:animate-fd-popover-in", className),
  ...props
}) }));
PopoverContent.displayName = Content2.displayName;
function SidebarTabsDropdown({ options, placeholder, ...props }) {
  const [open, setOpen] = useState(false);
  const { closeOnRedirect } = useSidebar();
  const pathname = usePathname();
  const selected = useMemo(() => {
    return options.findLast((item2) => isTabActive(item2, pathname));
  }, [options, pathname]);
  const onClick = () => {
    closeOnRedirect.current = false;
    setOpen(false);
  };
  const item = selected ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
    className: "size-9 shrink-0 empty:hidden md:size-5",
    children: selected.icon
  }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
    className: "text-sm font-medium",
    children: selected.title
  }), /* @__PURE__ */ jsx("p", {
    className: "text-sm text-fd-muted-foreground empty:hidden md:hidden",
    children: selected.description
  })] })] }) : placeholder;
  return /* @__PURE__ */ jsxs(Popover, {
    open,
    onOpenChange: setOpen,
    children: [item && /* @__PURE__ */ jsxs(PopoverTrigger, {
      ...props,
      className: twMerge("flex items-center gap-2 rounded-lg p-2 border bg-fd-secondary/50 text-start text-fd-secondary-foreground transition-colors hover:bg-fd-accent data-[state=open]:bg-fd-accent data-[state=open]:text-fd-accent-foreground", props.className),
      children: [item, /* @__PURE__ */ jsx(ChevronsUpDown, { className: "shrink-0 ms-auto size-4 text-fd-muted-foreground" })]
    }), /* @__PURE__ */ jsx(PopoverContent, {
      className: "flex flex-col gap-1 w-(--radix-popover-trigger-width) p-1 fd-scroll-container",
      children: options.map((item2) => {
        const isActive2 = selected && item2.url === selected.url;
        if (!isActive2 && item2.unlisted) return;
        return /* @__PURE__ */ jsxs(Link, {
          href: item2.url,
          onClick,
          ...item2.props,
          className: twMerge("flex items-center gap-2 rounded-lg p-1.5 hover:bg-fd-accent hover:text-fd-accent-foreground", item2.props?.className),
          children: [
            /* @__PURE__ */ jsx("div", {
              className: "shrink-0 size-9 md:mb-auto md:size-5 empty:hidden",
              children: item2.icon
            }),
            /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
              className: "text-sm font-medium leading-none",
              children: item2.title
            }), /* @__PURE__ */ jsx("p", {
              className: "text-[0.8125rem] text-fd-muted-foreground mt-1 empty:hidden",
              children: item2.description
            })] }),
            /* @__PURE__ */ jsx(Check, { className: twMerge("shrink-0 ms-auto size-3.5 text-fd-primary", !isActive2 && "invisible") })
          ]
        }, item2.url);
      })
    })]
  });
}
function isTabActive(tab, pathname) {
  if (tab.urls) return tab.urls.has(normalize(pathname));
  return isActive(tab.url, pathname, true);
}
function useIsScrollTop({ enabled = true }) {
  const [isTop, setIsTop] = useState();
  useEffect(() => {
    if (!enabled) return;
    const listener = () => {
      setIsTop(window.scrollY < 10);
    };
    listener();
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, [enabled]);
  return isTop;
}
const LayoutContext = createContext(null);
function LayoutContextProvider({ navTransparentMode = "none", children }) {
  const isTop = useIsScrollTop({ enabled: navTransparentMode === "top" }) ?? true;
  const isNavTransparent = navTransparentMode === "top" ? isTop : navTransparentMode === "always";
  return /* @__PURE__ */ jsx(LayoutContext, {
    value: useMemo(() => ({ isNavTransparent }), [isNavTransparent]),
    children
  });
}
function LayoutHeader(props) {
  const { isNavTransparent } = use(LayoutContext);
  return /* @__PURE__ */ jsx("header", {
    "data-transparent": isNavTransparent,
    ...props,
    children: props.children
  });
}
function LayoutBody({ className, style, children, ...props }) {
  const { collapsed } = useSidebar();
  return /* @__PURE__ */ jsx("div", {
    id: "nd-docs-layout",
    className: twMerge("grid transition-[grid-template-columns] overflow-x-clip min-h-(--fd-docs-height) [--fd-docs-height:100dvh] [--fd-header-height:0px] [--fd-toc-popover-height:0px] [--fd-sidebar-width:0px] [--fd-toc-width:0px]", className),
    "data-sidebar-collapsed": collapsed,
    style: {
      gridTemplate: `"sidebar sidebar header toc toc"
        "sidebar sidebar toc-popover toc toc"
        "sidebar sidebar main toc toc" 1fr / minmax(min-content, 1fr) var(--fd-sidebar-col) minmax(0, calc(var(--fd-layout-width,97rem) - var(--fd-sidebar-width) - var(--fd-toc-width))) var(--fd-toc-width) minmax(min-content, 1fr)`,
      "--fd-docs-row-1": "var(--fd-banner-height, 0px)",
      "--fd-docs-row-2": "calc(var(--fd-docs-row-1) + var(--fd-header-height))",
      "--fd-docs-row-3": "calc(var(--fd-docs-row-2) + var(--fd-toc-popover-height))",
      "--fd-sidebar-col": collapsed ? "0px" : "var(--fd-sidebar-width)",
      ...style
    },
    ...props,
    children
  });
}
function LayoutTabs({ options, ...props }) {
  const pathname = usePathname();
  const selected = useMemo(() => {
    return options.findLast((option) => isTabActive(option, pathname));
  }, [options, pathname]);
  return /* @__PURE__ */ jsx("div", {
    ...props,
    className: twMerge("flex flex-row items-end gap-6 overflow-auto [grid-area:main]", props.className),
    children: options.map((option, i) => /* @__PURE__ */ jsx(Link, {
      href: option.url,
      className: twMerge("inline-flex border-b-2 border-transparent transition-colors items-center pb-1.5 font-medium gap-2 text-fd-muted-foreground text-sm text-nowrap hover:text-fd-accent-foreground", option.unlisted && selected !== option && "hidden", selected === option && "border-fd-primary text-fd-primary"),
      children: option.title
    }, i))
  });
}
function LinkItem({ ref, item, ...props }) {
  const active = useLinkItemActive(item);
  return /* @__PURE__ */ jsx(Link, {
    ref,
    href: item.url,
    external: item.external,
    ...props,
    "data-active": active,
    children: props.children
  });
}
function useLinkItemActive(link) {
  const pathname = usePathname();
  if (link.type === "custom" || !link.url) return false;
  if (link.active === "none") return false;
  return isActive(link.url, pathname, link.active === "nested-url");
}
function SearchToggle({ hideIfDisabled, size: size2 = "icon-sm", color = "ghost", ...props }) {
  const { setOpenSearch, enabled } = useSearchContext();
  if (hideIfDisabled && !enabled) return null;
  return /* @__PURE__ */ jsx("button", {
    type: "button",
    className: twMerge(buttonVariants({
      size: size2,
      color
    }), props.className),
    "data-search": "",
    "aria-label": "Open Search",
    onClick: () => {
      setOpenSearch(true);
    },
    children: /* @__PURE__ */ jsx(Search, {})
  });
}
function LargeSearchToggle({ hideIfDisabled, ...props }) {
  const { enabled, hotKey, setOpenSearch } = useSearchContext();
  const { text } = useI18n();
  if (hideIfDisabled && !enabled) return null;
  return /* @__PURE__ */ jsxs("button", {
    type: "button",
    "data-search-full": "",
    ...props,
    className: twMerge("inline-flex items-center gap-2 rounded-lg border bg-fd-secondary/50 p-1.5 ps-2 text-sm text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground", props.className),
    onClick: () => {
      setOpenSearch(true);
    },
    children: [
      /* @__PURE__ */ jsx(Search, { className: "size-4" }),
      text.search,
      /* @__PURE__ */ jsx("div", {
        className: "ms-auto inline-flex gap-0.5",
        children: hotKey.map((k, i) => /* @__PURE__ */ jsx("kbd", {
          className: "rounded-md border bg-fd-background px-1.5",
          children: k.display
        }, i))
      })
    ]
  });
}
function mergeRefs$1(...refs) {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") ref(value);
      else if (ref) ref.current = value;
    });
  };
}
function createLinkItemRenderer({ SidebarFolder: SidebarFolder2, SidebarFolderContent: SidebarFolderContent2, SidebarFolderLink: SidebarFolderLink2, SidebarFolderTrigger: SidebarFolderTrigger2, SidebarItem: SidebarItem2 }) {
  return function SidebarLinkItem2({ item, ...props }) {
    const active = useLinkItemActive(item);
    if (item.type === "custom") return /* @__PURE__ */ jsx("div", {
      ...props,
      children: item.children
    });
    if (item.type === "menu") return /* @__PURE__ */ jsxs(SidebarFolder2, {
      ...props,
      children: [item.url ? /* @__PURE__ */ jsxs(SidebarFolderLink2, {
        href: item.url,
        active,
        external: item.external,
        children: [item.icon, item.text]
      }) : /* @__PURE__ */ jsxs(SidebarFolderTrigger2, { children: [item.icon, item.text] }), /* @__PURE__ */ jsx(SidebarFolderContent2, { children: item.items.map((child, i) => /* @__PURE__ */ jsx(SidebarLinkItem2, { item: child }, i)) })]
    });
    return /* @__PURE__ */ jsx(SidebarItem2, {
      href: item.url,
      icon: item.icon,
      external: item.external,
      active,
      ...props,
      children: item.text
    });
  };
}
const RendererContext = createContext(null);
function createPageTreeRenderer({ SidebarFolder: SidebarFolder2, SidebarFolderContent: SidebarFolderContent2, SidebarFolderLink: SidebarFolderLink2, SidebarFolderTrigger: SidebarFolderTrigger2, SidebarSeparator: SidebarSeparator2, SidebarItem: SidebarItem2 }) {
  function renderList(nodes) {
    return nodes.map((node, i) => /* @__PURE__ */ jsx(PageTreeNode, { node }, i));
  }
  function PageTreeNode({ node }) {
    const { Separator, Item: Item2, Folder, pathname } = use(RendererContext);
    if (node.type === "separator") {
      if (Separator) return /* @__PURE__ */ jsx(Separator, { item: node });
      return /* @__PURE__ */ jsxs(SidebarSeparator2, { children: [node.icon, node.name] });
    }
    if (node.type === "folder") {
      const path = useTreePath();
      if (Folder) return /* @__PURE__ */ jsx(Folder, {
        item: node,
        children: renderList(node.children)
      });
      return /* @__PURE__ */ jsxs(SidebarFolder2, {
        collapsible: node.collapsible,
        active: path.includes(node),
        defaultOpen: node.defaultOpen,
        children: [node.index ? /* @__PURE__ */ jsxs(SidebarFolderLink2, {
          href: node.index.url,
          active: isActive(node.index.url, pathname),
          external: node.index.external,
          children: [node.icon, node.name]
        }) : /* @__PURE__ */ jsxs(SidebarFolderTrigger2, { children: [node.icon, node.name] }), /* @__PURE__ */ jsx(SidebarFolderContent2, { children: renderList(node.children) })]
      });
    }
    if (Item2) return /* @__PURE__ */ jsx(Item2, { item: node });
    return /* @__PURE__ */ jsx(SidebarItem2, {
      href: node.url,
      external: node.external,
      active: isActive(node.url, pathname),
      icon: node.icon,
      children: node.name
    });
  }
  return function SidebarPageTree2(components) {
    const { Folder, Item: Item2, Separator } = components;
    const { root } = useTreeContext();
    const pathname = usePathname();
    return /* @__PURE__ */ jsx(RendererContext, {
      value: useMemo(() => ({
        Folder,
        Item: Item2,
        Separator,
        pathname
      }), [
        Folder,
        Item2,
        Separator,
        pathname
      ]),
      children: /* @__PURE__ */ jsx(Fragment$1, { children: renderList(root.children) }, root.$id)
    });
  };
}
const itemVariants$1 = cva("relative flex flex-row items-center gap-2 rounded-lg p-2 text-start text-fd-muted-foreground wrap-anywhere [&_svg]:size-4 [&_svg]:shrink-0", { variants: {
  variant: {
    link: "transition-colors hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80 hover:transition-none data-[active=true]:bg-fd-primary/10 data-[active=true]:text-fd-primary data-[active=true]:hover:transition-colors",
    button: "transition-colors hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80 hover:transition-none"
  },
  highlight: { true: "data-[active=true]:before:content-[''] data-[active=true]:before:bg-fd-primary data-[active=true]:before:absolute data-[active=true]:before:w-px data-[active=true]:before:inset-y-2.5 data-[active=true]:before:start-2.5" }
} });
function getItemOffset$1(depth) {
  return `calc(${2 + 3 * depth} * var(--spacing))`;
}
function SidebarContent({ ref: refProp, className, children, ...props }) {
  const ref = useRef(null);
  return /* @__PURE__ */ jsx(SidebarContent$1, { children: ({ collapsed, hovered, ref: asideRef, ...rest }) => /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
    "data-sidebar-placeholder": "",
    className: "sticky top-(--fd-docs-row-1) z-20 [grid-area:sidebar] pointer-events-none *:pointer-events-auto h-[calc(var(--fd-docs-height)-var(--fd-docs-row-1))] md:layout:[--fd-sidebar-width:268px] max-md:hidden",
    children: [collapsed && /* @__PURE__ */ jsx("div", {
      className: "absolute start-0 inset-y-0 w-4",
      ...rest
    }), /* @__PURE__ */ jsx("aside", {
      id: "nd-sidebar",
      ref: mergeRefs$1(ref, refProp, asideRef),
      "data-collapsed": collapsed,
      "data-hovered": collapsed && hovered,
      className: twMerge("absolute flex flex-col w-full start-0 inset-y-0 items-end bg-fd-card text-sm border-e duration-250 *:w-(--fd-sidebar-width)", collapsed && ["inset-y-2 rounded-xl transition-transform border w-(--fd-sidebar-width)", hovered ? "shadow-lg translate-x-2 rtl:-translate-x-2" : "-translate-x-(--fd-sidebar-width) rtl:translate-x-full"], ref.current && ref.current.getAttribute("data-collapsed") === "true" !== collapsed && "transition-[width,inset-block,translate,background-color]", className),
      ...props,
      ...rest,
      children
    })]
  }), /* @__PURE__ */ jsxs("div", {
    "data-sidebar-panel": "",
    className: twMerge("fixed flex top-[calc(--spacing(4)+var(--fd-docs-row-3))] start-4 shadow-lg transition-opacity rounded-xl p-0.5 border bg-fd-muted text-fd-muted-foreground z-10", (!collapsed || hovered) && "pointer-events-none opacity-0"),
    children: [/* @__PURE__ */ jsx(SidebarCollapseTrigger, {
      className: twMerge(buttonVariants({
        color: "ghost",
        size: "icon-sm",
        className: "rounded-lg"
      })),
      children: /* @__PURE__ */ jsx(PanelLeft, {})
    }), /* @__PURE__ */ jsx(SearchToggle, {
      className: "rounded-lg",
      hideIfDisabled: true
    })]
  })] }) });
}
function SidebarDrawer({ children, className, ...props }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(SidebarDrawerOverlay, { className: "fixed z-40 inset-0 backdrop-blur-xs data-[state=open]:animate-fd-fade-in data-[state=closed]:animate-fd-fade-out" }), /* @__PURE__ */ jsx(SidebarDrawerContent, {
    className: twMerge("fixed text-[0.9375rem] flex flex-col shadow-lg border-s end-0 inset-y-0 w-[85%] max-w-[380px] z-40 bg-fd-background data-[state=open]:animate-fd-sidebar-in data-[state=closed]:animate-fd-sidebar-out", className),
    ...props,
    children
  })] });
}
function SidebarSeparator({ className, style, children, ...props }) {
  const depth = useFolderDepth();
  return /* @__PURE__ */ jsx(SidebarSeparator$1, {
    className: twMerge("[&_svg]:size-4 [&_svg]:shrink-0", className),
    style: {
      paddingInlineStart: getItemOffset$1(depth),
      ...style
    },
    ...props,
    children
  });
}
function SidebarItem({ className, style, children, ...props }) {
  const depth = useFolderDepth();
  return /* @__PURE__ */ jsx(SidebarItem$1, {
    className: twMerge(itemVariants$1({
      variant: "link",
      highlight: depth >= 1
    }), className),
    style: {
      paddingInlineStart: getItemOffset$1(depth),
      ...style
    },
    ...props,
    children
  });
}
function SidebarFolderTrigger({ className, style, ...props }) {
  const { depth, collapsible } = useFolder();
  return /* @__PURE__ */ jsx(SidebarFolderTrigger$1, {
    className: twMerge(itemVariants$1({ variant: collapsible ? "button" : null }), "w-full", className),
    style: {
      paddingInlineStart: getItemOffset$1(depth - 1),
      ...style
    },
    ...props,
    children: props.children
  });
}
function SidebarFolderLink({ className, style, ...props }) {
  const depth = useFolderDepth();
  return /* @__PURE__ */ jsx(SidebarFolderLink$1, {
    className: twMerge(itemVariants$1({
      variant: "link",
      highlight: depth > 1
    }), "w-full", className),
    style: {
      paddingInlineStart: getItemOffset$1(depth - 1),
      ...style
    },
    ...props,
    children: props.children
  });
}
function SidebarFolderContent({ className, children, ...props }) {
  const depth = useFolderDepth();
  return /* @__PURE__ */ jsx(SidebarFolderContent$1, {
    className: twMerge("relative", depth === 1 && "before:content-[''] before:absolute before:w-px before:inset-y-1 before:bg-fd-border before:start-2.5", className),
    ...props,
    children
  });
}
const SidebarPageTree = createPageTreeRenderer({
  SidebarFolder,
  SidebarFolderContent,
  SidebarFolderLink,
  SidebarFolderTrigger,
  SidebarItem,
  SidebarSeparator
});
const SidebarLinkItem = createLinkItemRenderer({
  SidebarFolder,
  SidebarFolderContent,
  SidebarFolderLink,
  SidebarFolderTrigger,
  SidebarItem
});
function resolveLinkItems({ links = [], githubUrl }) {
  const result = [...links];
  if (githubUrl) result.push({
    type: "icon",
    url: githubUrl,
    text: "Github",
    label: "GitHub",
    icon: /* @__PURE__ */ jsx("svg", {
      role: "img",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      children: /* @__PURE__ */ jsx("path", { d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" })
    }),
    external: true
  });
  return result;
}
function renderTitleNav({ title, url = "/" }, props) {
  if (typeof title === "function") return title({
    href: url,
    ...props
  });
  return /* @__PURE__ */ jsx(Link, {
    href: url,
    ...props,
    children: title
  });
}
function useLinkItems({ githubUrl, links }) {
  return useMemo(() => {
    const all = resolveLinkItems({
      links,
      githubUrl
    });
    const navItems = [];
    const menuItems = [];
    for (const item of all) switch (item.on) {
      case "menu":
        menuItems.push(item);
        break;
      case "nav":
        navItems.push(item);
        break;
      default:
        navItems.push(item);
        menuItems.push(item);
    }
    return {
      navItems,
      menuItems,
      all
    };
  }, [links, githubUrl]);
}
function LanguageToggle(props) {
  const context = useI18n();
  if (!context.locales) throw new Error("Missing `<I18nProvider />`");
  return /* @__PURE__ */ jsxs(Popover, { children: [/* @__PURE__ */ jsx(PopoverTrigger, {
    "aria-label": context.text.chooseLanguage,
    ...props,
    className: twMerge(buttonVariants({
      color: "ghost",
      className: "gap-1.5 p-1.5"
    }), props.className),
    children: props.children
  }), /* @__PURE__ */ jsxs(PopoverContent, {
    className: "flex flex-col overflow-x-hidden p-0",
    children: [/* @__PURE__ */ jsx("p", {
      className: "mb-1 p-2 text-xs font-medium text-fd-muted-foreground",
      children: context.text.chooseLanguage
    }), context.locales.map((item) => /* @__PURE__ */ jsx("button", {
      type: "button",
      className: twMerge("p-2 text-start text-sm", item.locale === context.locale ? "bg-fd-primary/10 font-medium text-fd-primary" : "hover:bg-fd-accent hover:text-fd-accent-foreground"),
      onClick: () => {
        context.onChange?.(item.locale);
      },
      children: item.name
    }, item.locale))]
  })] });
}
function LanguageToggleText(props) {
  const context = useI18n();
  const text = context.locales?.find((item) => item.locale === context.locale)?.name;
  return /* @__PURE__ */ jsx("span", {
    ...props,
    children: text
  });
}
const itemVariants = cva("size-6.5 p-1.5 text-fd-muted-foreground", { variants: { active: {
  true: "bg-fd-accent text-fd-accent-foreground",
  false: "text-fd-muted-foreground"
} } });
const full = [
  ["light", Sun],
  ["dark", Moon],
  ["system", Airplay]
];
function ThemeToggle({ className, mode = "light-dark", ...props }) {
  const { setTheme, theme, resolvedTheme } = z();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const container = twMerge("inline-flex items-center rounded-full border p-1 *:rounded-full", className);
  if (mode === "light-dark") {
    const value2 = mounted ? resolvedTheme : null;
    return /* @__PURE__ */ jsx("button", {
      className: container,
      "aria-label": `Toggle Theme`,
      onClick: () => setTheme(value2 === "light" ? "dark" : "light"),
      "data-theme-toggle": "",
      children: full.map(([key, Icon2]) => {
        if (key === "system") return;
        return /* @__PURE__ */ jsx(Icon2, {
          fill: "currentColor",
          className: twMerge(itemVariants({ active: value2 === key }))
        }, key);
      })
    });
  }
  const value = mounted ? theme : null;
  return /* @__PURE__ */ jsx("div", {
    className: container,
    "data-theme-toggle": "",
    ...props,
    children: full.map(([key, Icon2]) => /* @__PURE__ */ jsx("button", {
      "aria-label": key,
      className: twMerge(itemVariants({ active: value === key })),
      onClick: () => setTheme(key),
      children: /* @__PURE__ */ jsx(Icon2, {
        className: "size-full",
        fill: "currentColor"
      })
    }, key))
  });
}
const defaultTransform = (option, node) => {
  if (!node.icon) return option;
  return {
    ...option,
    icon: /* @__PURE__ */ jsx("div", {
      className: "size-full [&_svg]:size-full max-md:p-1.5 max-md:rounded-md max-md:border max-md:bg-fd-secondary",
      children: node.icon
    })
  };
};
function getSidebarTabs(tree, { transform = defaultTransform } = {}) {
  const results = [];
  function scanOptions(node, unlisted) {
    if ("root" in node && node.root) {
      const urls = getFolderUrls(node);
      if (urls.size > 0) {
        const option = {
          url: urls.values().next().value ?? "",
          title: node.name,
          icon: node.icon,
          unlisted,
          description: node.description,
          urls
        };
        const mapped = transform ? transform(option, node) : option;
        if (mapped) results.push(mapped);
      }
    }
    for (const child of node.children) if (child.type === "folder") scanOptions(child, unlisted);
  }
  scanOptions(tree);
  if (tree.fallback) scanOptions(tree.fallback, true);
  return results;
}
function getFolderUrls(folder, output = /* @__PURE__ */ new Set()) {
  if (folder.index) output.add(folder.index.url);
  for (const child of folder.children) {
    if (child.type === "page" && !child.external) output.add(child.url);
    if (child.type === "folder") getFolderUrls(child, output);
  }
  return output;
}
function DocsLayout({ nav: { transparentMode, ...nav } = {}, sidebar: { tabs: sidebarTabs, enabled: sidebarEnabled = true, defaultOpenLevel, prefetch, ...sidebarProps } = {}, searchToggle = {}, themeSwitch = {}, tabMode = "auto", i18n = false, children, tree, ...props }) {
  const tabs = useMemo(() => {
    if (Array.isArray(sidebarTabs)) return sidebarTabs;
    if (typeof sidebarTabs === "object") return getSidebarTabs(tree, sidebarTabs);
    if (sidebarTabs !== false) return getSidebarTabs(tree);
    return [];
  }, [tree, sidebarTabs]);
  const { menuItems } = useLinkItems(props);
  function sidebar() {
    const { footer, banner, collapsible = true, component, components, ...rest } = sidebarProps;
    if (component) return component;
    const iconLinks = menuItems.filter((item) => item.type === "icon");
    const viewport = /* @__PURE__ */ jsxs(SidebarViewport, { children: [menuItems.filter((v) => v.type !== "icon").map((item, i, list) => /* @__PURE__ */ jsx(SidebarLinkItem, {
      item,
      className: twMerge(i === list.length - 1 && "mb-4")
    }, i)), /* @__PURE__ */ jsx(SidebarPageTree, { ...components })] });
    return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs(SidebarContent, {
      ...rest,
      children: [
        /* @__PURE__ */ jsxs("div", {
          className: "flex flex-col gap-3 p-4 pb-2",
          children: [
            /* @__PURE__ */ jsxs("div", {
              className: "flex",
              children: [
                renderTitleNav(nav, { className: "inline-flex text-[0.9375rem] items-center gap-2.5 font-medium me-auto" }),
                nav.children,
                collapsible && /* @__PURE__ */ jsx(SidebarCollapseTrigger, {
                  className: twMerge(buttonVariants({
                    color: "ghost",
                    size: "icon-sm",
                    className: "mb-auto text-fd-muted-foreground"
                  })),
                  children: /* @__PURE__ */ jsx(PanelLeft, {})
                })
              ]
            }),
            searchToggle.enabled !== false && (searchToggle.components?.lg ?? /* @__PURE__ */ jsx(LargeSearchToggle, { hideIfDisabled: true })),
            tabs.length > 0 && tabMode === "auto" && /* @__PURE__ */ jsx(SidebarTabsDropdown, { options: tabs }),
            banner
          ]
        }),
        viewport,
        (i18n || iconLinks.length > 0 || themeSwitch?.enabled !== false || footer) && /* @__PURE__ */ jsxs("div", {
          className: "flex flex-col border-t p-4 pt-2 empty:hidden",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "flex text-fd-muted-foreground items-center empty:hidden",
            children: [
              i18n && /* @__PURE__ */ jsx(LanguageToggle, { children: /* @__PURE__ */ jsx(Languages, { className: "size-4.5" }) }),
              iconLinks.map((item, i) => /* @__PURE__ */ jsx(LinkItem, {
                item,
                className: twMerge(buttonVariants({
                  size: "icon-sm",
                  color: "ghost"
                })),
                "aria-label": item.label,
                children: item.icon
              }, i)),
              themeSwitch.enabled !== false && (themeSwitch.component ?? /* @__PURE__ */ jsx(ThemeToggle, {
                className: "ms-auto p-0",
                mode: themeSwitch.mode
              }))
            ]
          }), footer]
        })
      ]
    }), /* @__PURE__ */ jsxs(SidebarDrawer, { children: [
      /* @__PURE__ */ jsxs("div", {
        className: "flex flex-col gap-3 p-4 pb-2",
        children: [
          /* @__PURE__ */ jsxs("div", {
            className: "flex text-fd-muted-foreground items-center gap-1.5",
            children: [
              /* @__PURE__ */ jsx("div", {
                className: "flex flex-1",
                children: iconLinks.map((item, i) => /* @__PURE__ */ jsx(LinkItem, {
                  item,
                  className: twMerge(buttonVariants({
                    size: "icon-sm",
                    color: "ghost",
                    className: "p-2"
                  })),
                  "aria-label": item.label,
                  children: item.icon
                }, i))
              }),
              i18n && /* @__PURE__ */ jsxs(LanguageToggle, { children: [/* @__PURE__ */ jsx(Languages, { className: "size-4.5" }), /* @__PURE__ */ jsx(LanguageToggleText, {})] }),
              themeSwitch.enabled !== false && (themeSwitch.component ?? /* @__PURE__ */ jsx(ThemeToggle, {
                className: "p-0",
                mode: themeSwitch.mode
              })),
              /* @__PURE__ */ jsx(SidebarTrigger, {
                className: twMerge(buttonVariants({
                  color: "ghost",
                  size: "icon-sm",
                  className: "p-2"
                })),
                children: /* @__PURE__ */ jsx(PanelLeft, {})
              })
            ]
          }),
          tabs.length > 0 && /* @__PURE__ */ jsx(SidebarTabsDropdown, { options: tabs }),
          banner
        ]
      }),
      viewport,
      /* @__PURE__ */ jsx("div", {
        className: "flex flex-col border-t p-4 pt-2 empty:hidden",
        children: footer
      })
    ] })] });
  }
  return /* @__PURE__ */ jsx(TreeContextProvider, {
    tree,
    children: /* @__PURE__ */ jsx(LayoutContextProvider, {
      navTransparentMode: transparentMode,
      children: /* @__PURE__ */ jsx(SidebarProvider, {
        defaultOpenLevel,
        prefetch,
        children: /* @__PURE__ */ jsxs(LayoutBody, {
          ...props.containerProps,
          children: [
            nav.enabled !== false && (nav.component ?? /* @__PURE__ */ jsxs(LayoutHeader, {
              id: "nd-subnav",
              className: "[grid-area:header] sticky top-(--fd-docs-row-1) z-30 flex items-center ps-4 pe-2.5 border-b transition-colors backdrop-blur-sm h-(--fd-header-height) md:hidden max-md:layout:[--fd-header-height:--spacing(14)] data-[transparent=false]:bg-fd-background/80",
              children: [
                renderTitleNav(nav, { className: "inline-flex items-center gap-2.5 font-semibold" }),
                /* @__PURE__ */ jsx("div", {
                  className: "flex-1",
                  children: nav.children
                }),
                searchToggle.enabled !== false && (searchToggle.components?.sm ?? /* @__PURE__ */ jsx(SearchToggle, {
                  className: "p-2",
                  hideIfDisabled: true
                })),
                sidebarEnabled && /* @__PURE__ */ jsx(SidebarTrigger, {
                  className: twMerge(buttonVariants({
                    color: "ghost",
                    size: "icon-sm",
                    className: "p-2"
                  })),
                  children: /* @__PURE__ */ jsx(PanelLeft, {})
                })
              ]
            })),
            sidebarEnabled && sidebar(),
            tabMode === "top" && tabs.length > 0 && /* @__PURE__ */ jsx(LayoutTabs, {
              options: tabs,
              className: "z-10 bg-fd-background border-b px-6 pt-3 xl:px-8 max-md:hidden"
            }),
            children
          ]
        })
      })
    })
  });
}
function DocsLayoutClient({
  tree,
  options,
  children
}) {
  return /* @__PURE__ */ jsx(RootProvider, { children: /* @__PURE__ */ jsx(DocsLayout, { tree, ...options, children }) });
}
function mergeRefs(...refs) {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") ref(value);
      else if (ref != null) ref.current = value;
    });
  };
}
const ActiveAnchorContext = createContext([]);
const ScrollContext = createContext({ current: null });
function useActiveAnchor() {
  return useContext(ActiveAnchorContext)[0];
}
function useActiveAnchors() {
  return useContext(ActiveAnchorContext);
}
function ScrollProvider({ containerRef, children }) {
  return /* @__PURE__ */ jsx(ScrollContext.Provider, {
    value: containerRef,
    children
  });
}
function AnchorProvider({ toc, single = false, children }) {
  const headings = useMemo(() => {
    return toc.map((item) => item.url.split("#")[1]);
  }, [toc]);
  return /* @__PURE__ */ jsx(ActiveAnchorContext.Provider, {
    value: useAnchorObserver(headings, single),
    children
  });
}
function TOCItem$2({ ref, onActiveChange = () => null, ...props }) {
  const containerRef = useContext(ScrollContext);
  const anchorRef = useRef(null);
  const activeOrder = useActiveAnchors().indexOf(props.href.slice(1));
  const isActive2 = activeOrder !== -1;
  const shouldScroll = activeOrder === 0;
  const onActiveChangeEvent = useEffectEvent(onActiveChange);
  useLayoutEffect(() => {
    const anchor = anchorRef.current;
    const container = containerRef.current;
    if (container && anchor && shouldScroll) scrollIntoView(anchor, {
      behavior: "smooth",
      block: "center",
      inline: "center",
      scrollMode: "always",
      boundary: container
    });
  }, [containerRef, shouldScroll]);
  useEffect(() => {
    return () => onActiveChangeEvent(isActive2);
  }, [isActive2]);
  return /* @__PURE__ */ jsx("a", {
    ref: mergeRefs(anchorRef, ref),
    "data-active": isActive2,
    ...props,
    children: props.children
  });
}
function useAnchorObserver(watch, single) {
  const observerRef = useRef(null);
  const [activeAnchor, setActiveAnchor] = useState(() => []);
  const stateRef = useRef(null);
  const onChange = useEffectEvent((entries) => {
    stateRef.current ??= { visible: /* @__PURE__ */ new Set() };
    const state = stateRef.current;
    for (const entry of entries) if (entry.isIntersecting) state.visible.add(entry.target.id);
    else state.visible.delete(entry.target.id);
    if (state.visible.size === 0) {
      const viewTop = entries.length > 0 ? entries[0]?.rootBounds?.top ?? 0 : 0;
      let fallback;
      let min = -1;
      for (const id of watch) {
        const element = document.getElementById(id);
        if (!element) continue;
        const d = Math.abs(viewTop - element.getBoundingClientRect().top);
        if (min === -1 || d < min) {
          fallback = element;
          min = d;
        }
      }
      setActiveAnchor(fallback ? [fallback.id] : []);
    } else {
      const items = watch.filter((item) => state.visible.has(item));
      setActiveAnchor(single ? items.slice(0, 1) : items);
    }
  });
  useEffect(() => {
    if (observerRef.current) return;
    observerRef.current = new IntersectionObserver(onChange, {
      rootMargin: "0px",
      threshold: 0.98
    });
    return () => {
      observerRef.current?.disconnect();
      observerRef.current = null;
    };
  }, []);
  useEffect(() => {
    const observer = observerRef.current;
    if (!observer) return;
    const elements = watch.flatMap((heading) => document.getElementById(heading) ?? []);
    for (const element of elements) observer.observe(element);
    return () => {
      for (const element of elements) observer.unobserve(element);
    };
  }, [watch]);
  return activeAnchor;
}
const TOCContext = createContext([]);
function useTOCItems() {
  return use(TOCContext);
}
function TOCProvider({ toc, children, ...props }) {
  return /* @__PURE__ */ jsx(TOCContext, {
    value: toc,
    children: /* @__PURE__ */ jsx(AnchorProvider, {
      toc,
      ...props,
      children
    })
  });
}
function TOCScrollArea({ ref, className, ...props }) {
  const viewRef = useRef(null);
  return /* @__PURE__ */ jsx("div", {
    ref: mergeRefs$1(viewRef, ref),
    className: twMerge("relative min-h-0 text-sm ms-px overflow-auto [scrollbar-width:none] mask-[linear-gradient(to_bottom,transparent,white_16px,white_calc(100%-16px),transparent)] py-3", className),
    ...props,
    children: /* @__PURE__ */ jsx(ScrollProvider, {
      containerRef: viewRef,
      children: props.children
    })
  });
}
function TocThumb({ containerRef, ...props }) {
  const thumbRef = useRef(null);
  const active = useActiveAnchors();
  function update(info) {
    const element = thumbRef.current;
    if (!element) return;
    element.style.setProperty("--fd-top", `${info[0]}px`);
    element.style.setProperty("--fd-height", `${info[1]}px`);
  }
  const onPrint = useEffectEvent(() => {
    if (containerRef.current) update(calc(containerRef.current, active));
  });
  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const observer = new ResizeObserver(onPrint);
    observer.observe(container);
    return () => {
      observer.disconnect();
    };
  }, [containerRef]);
  useOnChange(active, () => {
    if (containerRef.current) update(calc(containerRef.current, active));
  });
  return /* @__PURE__ */ jsx("div", {
    ref: thumbRef,
    "data-hidden": active.length === 0,
    ...props
  });
}
function calc(container, active) {
  if (active.length === 0 || container.clientHeight === 0) return [0, 0];
  let upper = Number.MAX_VALUE, lower = 0;
  for (const item of active) {
    const element = container.querySelector(`a[href="#${item}"]`);
    if (!element) continue;
    const styles = getComputedStyle(element);
    upper = Math.min(upper, element.offsetTop + parseFloat(styles.paddingTop));
    lower = Math.max(lower, element.offsetTop + element.clientHeight - parseFloat(styles.paddingBottom));
  }
  return [upper, lower - upper];
}
const footerCache = /* @__PURE__ */ new Map();
function useFooterItems() {
  const { root } = useTreeContext();
  const cached = footerCache.get(root.$id);
  if (cached) return cached;
  const list = [];
  function onNode(node) {
    if (node.type === "folder") {
      if (node.index) onNode(node.index);
      for (const child of node.children) onNode(child);
    } else if (node.type === "page" && !node.external) list.push(node);
  }
  for (const child of root.children) onNode(child);
  footerCache.set(root.$id, list);
  return list;
}
const TocPopoverContext = createContext(null);
function PageTOCPopover({ className, children, ...rest }) {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  const { isNavTransparent } = use(LayoutContext);
  const onClick = useEffectEvent((e) => {
    if (!open) return;
    if (ref.current && !ref.current.contains(e.target)) setOpen(false);
  });
  useEffect(() => {
    window.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("click", onClick);
    };
  }, []);
  return /* @__PURE__ */ jsx(TocPopoverContext, {
    value: useMemo(() => ({
      open,
      setOpen
    }), [setOpen, open]),
    children: /* @__PURE__ */ jsx(Collapsible, {
      open,
      onOpenChange: setOpen,
      "data-toc-popover": "",
      className: twMerge("sticky top-(--fd-docs-row-2) z-10 [grid-area:toc-popover] h-(--fd-toc-popover-height) xl:hidden max-xl:layout:[--fd-toc-popover-height:--spacing(10)]", className),
      ...rest,
      children: /* @__PURE__ */ jsx("header", {
        ref,
        className: twMerge("border-b backdrop-blur-sm transition-colors", (!isNavTransparent || open) && "bg-fd-background/80", open && "shadow-lg"),
        children
      })
    })
  });
}
function PageTOCPopoverTrigger({ className, ...props }) {
  const { text } = useI18n();
  const { open } = use(TocPopoverContext);
  const items = useTOCItems();
  const active = useActiveAnchor();
  const selected = useMemo(() => items.findIndex((item) => active === item.url.slice(1)), [items, active]);
  const path = useTreePath().at(-1);
  const showItem = selected !== -1 && !open;
  return /* @__PURE__ */ jsxs(CollapsibleTrigger, {
    className: twMerge("flex w-full h-10 items-center text-sm text-fd-muted-foreground gap-2.5 px-4 py-2.5 text-start focus-visible:outline-none [&_svg]:size-4 md:px-6", className),
    "data-toc-popover-trigger": "",
    ...props,
    children: [
      /* @__PURE__ */ jsx(ProgressCircle, {
        value: (selected + 1) / Math.max(1, items.length),
        max: 1,
        className: twMerge("shrink-0", open && "text-fd-primary")
      }),
      /* @__PURE__ */ jsxs("span", {
        className: "grid flex-1 *:my-auto *:row-start-1 *:col-start-1",
        children: [/* @__PURE__ */ jsx("span", {
          className: twMerge("truncate transition-[opacity,translate,color]", open && "text-fd-foreground", showItem && "opacity-0 -translate-y-full pointer-events-none"),
          children: path?.name ?? text.toc
        }), /* @__PURE__ */ jsx("span", {
          className: twMerge("truncate transition-[opacity,translate]", !showItem && "opacity-0 translate-y-full pointer-events-none"),
          children: items[selected]?.title
        })]
      }),
      /* @__PURE__ */ jsx(ChevronDown, { className: twMerge("shrink-0 transition-transform mx-0.5", open && "rotate-180") })
    ]
  });
}
function clamp(input, min, max) {
  if (input < min) return min;
  if (input > max) return max;
  return input;
}
function ProgressCircle({ value, strokeWidth = 2, size: size2 = 24, min = 0, max = 100, ...restSvgProps }) {
  const normalizedValue = clamp(value, min, max);
  const radius = (size2 - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = normalizedValue / max * circumference;
  const circleProps = {
    cx: size2 / 2,
    cy: size2 / 2,
    r: radius,
    fill: "none",
    strokeWidth
  };
  return /* @__PURE__ */ jsxs("svg", {
    role: "progressbar",
    viewBox: `0 0 ${size2} ${size2}`,
    "aria-valuenow": normalizedValue,
    "aria-valuemin": min,
    "aria-valuemax": max,
    ...restSvgProps,
    children: [/* @__PURE__ */ jsx("circle", {
      ...circleProps,
      className: "stroke-current/25"
    }), /* @__PURE__ */ jsx("circle", {
      ...circleProps,
      stroke: "currentColor",
      strokeDasharray: circumference,
      strokeDashoffset: circumference - progress,
      strokeLinecap: "round",
      transform: `rotate(-90 ${size2 / 2} ${size2 / 2})`,
      className: "transition-all"
    })]
  });
}
function PageTOCPopoverContent(props) {
  return /* @__PURE__ */ jsx(CollapsibleContent, {
    "data-toc-popover-content": "",
    ...props,
    className: twMerge("flex flex-col px-4 max-h-[50vh] md:px-6", props.className),
    children: props.children
  });
}
function PageFooter({ items, children, className, ...props }) {
  const footerList = useFooterItems();
  const pathname = usePathname();
  const { previous, next } = useMemo(() => {
    if (items) return items;
    const idx = footerList.findIndex((item) => isActive(item.url, pathname));
    if (idx === -1) return {};
    return {
      previous: footerList[idx - 1],
      next: footerList[idx + 1]
    };
  }, [
    footerList,
    items,
    pathname
  ]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
    className: twMerge("@container grid gap-4", previous && next ? "grid-cols-2" : "grid-cols-1", className),
    ...props,
    children: [previous && /* @__PURE__ */ jsx(FooterItem, {
      item: previous,
      index: 0
    }), next && /* @__PURE__ */ jsx(FooterItem, {
      item: next,
      index: 1
    })]
  }), children] });
}
function FooterItem({ item, index: index2 }) {
  const { text } = useI18n();
  const Icon2 = index2 === 0 ? ChevronLeft : ChevronRight;
  return /* @__PURE__ */ jsxs(Link, {
    href: item.url,
    className: twMerge("flex flex-col gap-2 rounded-lg border p-4 text-sm transition-colors hover:bg-fd-accent/80 hover:text-fd-accent-foreground @max-lg:col-span-full", index2 === 1 && "text-end"),
    children: [/* @__PURE__ */ jsxs("div", {
      className: twMerge("inline-flex items-center gap-1.5 font-medium", index2 === 1 && "flex-row-reverse"),
      children: [/* @__PURE__ */ jsx(Icon2, { className: "-mx-1 size-4 shrink-0 rtl:rotate-180" }), /* @__PURE__ */ jsx("p", { children: item.name })]
    }), /* @__PURE__ */ jsx("p", {
      className: "text-fd-muted-foreground truncate",
      children: item.description ?? (index2 === 0 ? text.previousPage : text.nextPage)
    })]
  });
}
function PageBreadcrumb({ includeRoot, includeSeparator, includePage, ...props }) {
  const path = useTreePath();
  const { root } = useTreeContext();
  const items = useMemo(() => {
    return getBreadcrumbItemsFromPath(root, path, {
      includePage,
      includeSeparator,
      includeRoot
    });
  }, [
    includePage,
    includeRoot,
    includeSeparator,
    path,
    root
  ]);
  if (items.length === 0) return null;
  return /* @__PURE__ */ jsx("div", {
    ...props,
    className: twMerge("flex items-center gap-1.5 text-sm text-fd-muted-foreground", props.className),
    children: items.map((item, i) => {
      const className = twMerge("truncate", i === items.length - 1 && "text-fd-primary font-medium");
      return /* @__PURE__ */ jsxs(Fragment$1, { children: [i !== 0 && /* @__PURE__ */ jsx(ChevronRight, { className: "size-3.5 shrink-0" }), item.url ? /* @__PURE__ */ jsx(Link, {
        href: item.url,
        className: twMerge(className, "transition-opacity hover:opacity-80"),
        children: item.name
      }) : /* @__PURE__ */ jsx("span", {
        className,
        children: item.name
      })] }, i);
    })
  });
}
function TOCItems$1({ ref, className, ...props }) {
  const containerRef = useRef(null);
  const items = useTOCItems();
  const { text } = useI18n();
  if (items.length === 0) return /* @__PURE__ */ jsx("div", {
    className: "rounded-lg border bg-fd-card p-3 text-xs text-fd-muted-foreground",
    children: text.tocNoHeadings
  });
  return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(TocThumb, {
    containerRef,
    className: "absolute top-(--fd-top) h-(--fd-height) w-0.5 rounded-e-sm bg-fd-primary transition-[top,height] ease-linear"
  }), /* @__PURE__ */ jsx("div", {
    ref: mergeRefs$1(ref, containerRef),
    className: twMerge("flex flex-col border-s border-fd-foreground/10", className),
    ...props,
    children: items.map((item) => /* @__PURE__ */ jsx(TOCItem$1, { item }, item.url))
  })] });
}
function TOCItem$1({ item }) {
  return /* @__PURE__ */ jsx(TOCItem$2, {
    href: item.url,
    className: twMerge("prose py-1.5 text-sm text-fd-muted-foreground transition-colors wrap-anywhere first:pt-0 last:pb-0 data-[active=true]:text-fd-primary", item.depth <= 2 && "ps-3", item.depth === 3 && "ps-6", item.depth >= 4 && "ps-8"),
    children: item.title
  });
}
function TOCItems({ ref, className, ...props }) {
  const containerRef = useRef(null);
  const items = useTOCItems();
  const { text } = useI18n();
  const [svg, setSvg] = useState();
  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    function onResize() {
      if (container.clientHeight === 0) return;
      let w = 0, h = 0;
      const d = [];
      for (let i = 0; i < items.length; i++) {
        const element = container.querySelector(`a[href="#${items[i].url.slice(1)}"]`);
        if (!element) continue;
        const styles = getComputedStyle(element);
        const offset2 = getLineOffset(items[i].depth) + 1, top = element.offsetTop + parseFloat(styles.paddingTop), bottom = element.offsetTop + element.clientHeight - parseFloat(styles.paddingBottom);
        w = Math.max(offset2, w);
        h = Math.max(h, bottom);
        d.push(`${i === 0 ? "M" : "L"}${offset2} ${top}`);
        d.push(`L${offset2} ${bottom}`);
      }
      setSvg({
        path: d.join(" "),
        width: w + 1,
        height: h
      });
    }
    const observer = new ResizeObserver(onResize);
    onResize();
    observer.observe(container);
    return () => {
      observer.disconnect();
    };
  }, [items]);
  if (items.length === 0) return /* @__PURE__ */ jsx("div", {
    className: "rounded-lg border bg-fd-card p-3 text-xs text-fd-muted-foreground",
    children: text.tocNoHeadings
  });
  return /* @__PURE__ */ jsxs(Fragment, { children: [svg && /* @__PURE__ */ jsx("div", {
    className: "absolute start-0 top-0 rtl:-scale-x-100",
    style: {
      width: svg.width,
      height: svg.height,
      maskImage: `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${svg.width} ${svg.height}"><path d="${svg.path}" stroke="black" stroke-width="1" fill="none" /></svg>`)}")`
    },
    children: /* @__PURE__ */ jsx(TocThumb, {
      containerRef,
      className: "absolute w-full top-(--fd-top) h-(--fd-height) bg-fd-primary transition-[top,height]"
    })
  }), /* @__PURE__ */ jsx("div", {
    ref: mergeRefs$1(containerRef, ref),
    className: twMerge("flex flex-col", className),
    ...props,
    children: items.map((item, i) => /* @__PURE__ */ jsx(TOCItem, {
      item,
      upper: items[i - 1]?.depth,
      lower: items[i + 1]?.depth
    }, item.url))
  })] });
}
function getItemOffset(depth) {
  if (depth <= 2) return 14;
  if (depth === 3) return 26;
  return 36;
}
function getLineOffset(depth) {
  return depth >= 3 ? 10 : 0;
}
function TOCItem({ item, upper = item.depth, lower = item.depth }) {
  const offset2 = getLineOffset(item.depth), upperOffset = getLineOffset(upper), lowerOffset = getLineOffset(lower);
  return /* @__PURE__ */ jsxs(TOCItem$2, {
    href: item.url,
    style: { paddingInlineStart: getItemOffset(item.depth) },
    className: "prose relative py-1.5 text-sm text-fd-muted-foreground hover:text-fd-accent-foreground transition-colors wrap-anywhere first:pt-0 last:pb-0 data-[active=true]:text-fd-primary",
    children: [
      offset2 !== upperOffset && /* @__PURE__ */ jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        className: "absolute -top-1.5 start-0 size-4 rtl:-scale-x-100",
        children: /* @__PURE__ */ jsx("line", {
          x1: upperOffset,
          y1: "0",
          x2: offset2,
          y2: "12",
          className: "stroke-fd-foreground/10",
          strokeWidth: "1"
        })
      }),
      /* @__PURE__ */ jsx("div", {
        className: twMerge("absolute inset-y-0 w-px bg-fd-foreground/10", offset2 !== upperOffset && "top-1.5", offset2 !== lowerOffset && "bottom-1.5"),
        style: { insetInlineStart: offset2 }
      }),
      item.title
    ]
  });
}
function DocsPage({ breadcrumb: { enabled: breadcrumbEnabled = true, component: breadcrumb, ...breadcrumbProps } = {}, footer: { enabled: footerEnabled, component: footerReplace, ...footerProps } = {}, full: full2 = false, tableOfContentPopover: { enabled: tocPopoverEnabled, component: tocPopover, ...tocPopoverOptions } = {}, tableOfContent: { enabled: tocEnabled, component: tocReplace, ...tocOptions } = {}, toc = [], children, className }) {
  tocEnabled ??= !full2 && (toc.length > 0 || tocOptions.footer !== void 0 || tocOptions.header !== void 0);
  tocPopoverEnabled ??= toc.length > 0 || tocPopoverOptions.header !== void 0 || tocPopoverOptions.footer !== void 0;
  let wrapper = (children2) => children2;
  if (tocEnabled || tocPopoverEnabled) wrapper = (children2) => /* @__PURE__ */ jsx(TOCProvider, {
    single: tocOptions.single,
    toc,
    children: children2
  });
  return wrapper(/* @__PURE__ */ jsxs(Fragment, { children: [
    tocPopoverEnabled && (tocPopover ?? /* @__PURE__ */ jsxs(PageTOCPopover, { children: [/* @__PURE__ */ jsx(PageTOCPopoverTrigger, {}), /* @__PURE__ */ jsxs(PageTOCPopoverContent, { children: [
      tocPopoverOptions.header,
      /* @__PURE__ */ jsx(TOCScrollArea, { children: tocPopoverOptions.style === "clerk" ? /* @__PURE__ */ jsx(TOCItems, {}) : /* @__PURE__ */ jsx(TOCItems$1, {}) }),
      tocPopoverOptions.footer
    ] })] })),
    /* @__PURE__ */ jsxs("article", {
      id: "nd-page",
      "data-full": full2,
      className: twMerge("flex flex-col w-full max-w-[900px] mx-auto [grid-area:main] px-4 py-6 gap-4 md:px-6 md:pt-8 xl:px-8 xl:pt-14", full2 ? "max-w-[1168px]" : "xl:layout:[--fd-toc-width:268px]", className),
      children: [
        breadcrumbEnabled && (breadcrumb ?? /* @__PURE__ */ jsx(PageBreadcrumb, { ...breadcrumbProps })),
        children,
        footerEnabled !== false && (footerReplace ?? /* @__PURE__ */ jsx(PageFooter, { ...footerProps }))
      ]
    }),
    tocEnabled && (tocReplace ?? /* @__PURE__ */ jsxs("div", {
      id: "nd-toc",
      className: "sticky top-(--fd-docs-row-1) h-[calc(var(--fd-docs-height)-var(--fd-docs-row-1))] flex flex-col [grid-area:toc] w-(--fd-toc-width) pt-12 pe-4 pb-2 max-xl:hidden",
      children: [
        tocOptions.header,
        /* @__PURE__ */ jsxs("h3", {
          id: "toc-title",
          className: "inline-flex items-center gap-1.5 text-sm text-fd-muted-foreground",
          children: [/* @__PURE__ */ jsx(TextAlignStart, { className: "size-4" }), /* @__PURE__ */ jsx(I18nLabel, { label: "toc" })]
        }),
        /* @__PURE__ */ jsx(TOCScrollArea, { children: tocOptions.style === "clerk" ? /* @__PURE__ */ jsx(TOCItems, {}) : /* @__PURE__ */ jsx(TOCItems$1, {}) }),
        tocOptions.footer
      ]
    }))
  ] }));
}
function DocsBody({ children, className, ...props }) {
  return /* @__PURE__ */ jsx("div", {
    ...props,
    className: twMerge("prose flex-1", className),
    children
  });
}
function DocsDescription({ children, className, ...props }) {
  if (children === void 0) return null;
  return /* @__PURE__ */ jsx("p", {
    ...props,
    className: twMerge("mb-8 text-lg text-fd-muted-foreground", className),
    children
  });
}
function DocsTitle({ children, className, ...props }) {
  return /* @__PURE__ */ jsx("h1", {
    ...props,
    className: twMerge("text-[1.75em] font-semibold", className),
    children
  });
}
function DocsPageClient({
  toc,
  full: full2,
  title,
  description,
  actions,
  children
}) {
  return /* @__PURE__ */ jsxs(DocsPage, { toc, full: full2, children: [
    /* @__PURE__ */ jsx(DocsTitle, { children: title }),
    /* @__PURE__ */ jsx(DocsDescription, { className: "mb-0", children: description }),
    actions,
    /* @__PURE__ */ jsx(DocsBody, { children })
  ] });
}
function useCopyButton(onCopy) {
  const [checked, setChecked] = useState(false);
  const callbackRef = useRef(onCopy);
  const timeoutRef = useRef(null);
  callbackRef.current = onCopy;
  const onClick = useCallback(() => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    Promise.resolve(callbackRef.current()).then(() => {
      setChecked(true);
      timeoutRef.current = window.setTimeout(() => {
        setChecked(false);
      }, 1500);
    });
  }, []);
  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);
  return [checked, onClick];
}
const cache = /* @__PURE__ */ new Map();
function LLMCopyButton({
  /**
   * A URL to fetch the raw Markdown/MDX content of page
   */
  markdownUrl
}) {
  const [isLoading, setLoading] = useState(false);
  const [checked, onClick] = useCopyButton(async () => {
    const cached = cache.get(markdownUrl);
    if (cached) return navigator.clipboard.writeText(cached);
    setLoading(true);
    try {
      await navigator.clipboard.write([
        new ClipboardItem({
          "text/plain": fetch(markdownUrl).then(async (res) => {
            const content = await res.text();
            cache.set(markdownUrl, content);
            return content;
          })
        })
      ]);
    } finally {
      setLoading(false);
    }
  });
  return /* @__PURE__ */ jsxs(
    "button",
    {
      disabled: isLoading,
      className: twMerge(
        buttonVariants({
          color: "secondary",
          size: "sm",
          className: "gap-2 [&_svg]:size-3.5 [&_svg]:text-fd-muted-foreground"
        })
      ),
      onClick,
      children: [
        checked ? /* @__PURE__ */ jsx(Check, {}) : /* @__PURE__ */ jsx(Copy, {}),
        "Copy Markdown"
      ]
    }
  );
}
function ViewOptions({
  markdownUrl,
  githubUrl
}) {
  const items = useMemo(() => {
    const pageUrl = typeof window !== "undefined" ? window.location.href : "loading";
    const q = `Read ${pageUrl}, I want to ask questions about it.`;
    return [
      {
        title: "Open in GitHub",
        href: githubUrl,
        icon: /* @__PURE__ */ jsxs("svg", { fill: "currentColor", role: "img", viewBox: "0 0 24 24", children: [
          /* @__PURE__ */ jsx("title", { children: "GitHub" }),
          /* @__PURE__ */ jsx("path", { d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" })
        ] })
      },
      {
        title: "View as Markdown",
        href: markdownUrl,
        icon: /* @__PURE__ */ jsx(TextAlignStart, {})
      },
      {
        title: "Open in Scira AI",
        href: `https://scira.ai/?${new URLSearchParams({
          q
        })}`,
        icon: /* @__PURE__ */ jsxs(
          "svg",
          {
            width: "910",
            height: "934",
            viewBox: "0 0 910 934",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              /* @__PURE__ */ jsx("title", { children: "Scira AI" }),
              /* @__PURE__ */ jsx(
                "path",
                {
                  d: "M647.664 197.775C569.13 189.049 525.5 145.419 516.774 66.8849C508.048 145.419 464.418 189.049 385.884 197.775C464.418 206.501 508.048 250.131 516.774 328.665C525.5 250.131 569.13 206.501 647.664 197.775Z",
                  fill: "currentColor",
                  stroke: "currentColor",
                  strokeWidth: "8",
                  strokeLinejoin: "round"
                }
              ),
              /* @__PURE__ */ jsx(
                "path",
                {
                  d: "M516.774 304.217C510.299 275.491 498.208 252.087 480.335 234.214C462.462 216.341 439.058 204.251 410.333 197.775C439.059 191.3 462.462 179.209 480.335 161.336C498.208 143.463 510.299 120.06 516.774 91.334C523.25 120.059 535.34 143.463 553.213 161.336C571.086 179.209 594.49 191.3 623.216 197.775C594.49 204.251 571.086 216.341 553.213 234.214C535.34 252.087 523.25 275.491 516.774 304.217Z",
                  fill: "currentColor",
                  stroke: "currentColor",
                  strokeWidth: "8",
                  strokeLinejoin: "round"
                }
              ),
              /* @__PURE__ */ jsx(
                "path",
                {
                  d: "M857.5 508.116C763.259 497.644 710.903 445.288 700.432 351.047C689.961 445.288 637.605 497.644 543.364 508.116C637.605 518.587 689.961 570.943 700.432 665.184C710.903 570.943 763.259 518.587 857.5 508.116Z",
                  stroke: "currentColor",
                  strokeWidth: "20",
                  strokeLinejoin: "round"
                }
              ),
              /* @__PURE__ */ jsx(
                "path",
                {
                  d: "M700.432 615.957C691.848 589.05 678.575 566.357 660.383 548.165C642.191 529.973 619.499 516.7 592.593 508.116C619.499 499.533 642.191 486.258 660.383 468.066C678.575 449.874 691.848 427.181 700.432 400.274C709.015 427.181 722.289 449.874 740.481 468.066C758.673 486.258 781.365 499.533 808.271 508.116C781.365 516.7 758.673 529.973 740.481 548.165C722.289 566.357 709.015 589.05 700.432 615.957Z",
                  stroke: "currentColor",
                  strokeWidth: "20",
                  strokeLinejoin: "round"
                }
              ),
              /* @__PURE__ */ jsx(
                "path",
                {
                  d: "M889.949 121.237C831.049 114.692 798.326 81.9698 791.782 23.0692C785.237 81.9698 752.515 114.692 693.614 121.237C752.515 127.781 785.237 160.504 791.782 219.404C798.326 160.504 831.049 127.781 889.949 121.237Z",
                  fill: "currentColor",
                  stroke: "currentColor",
                  strokeWidth: "8",
                  strokeLinejoin: "round"
                }
              ),
              /* @__PURE__ */ jsx(
                "path",
                {
                  d: "M791.782 196.795C786.697 176.937 777.869 160.567 765.16 147.858C752.452 135.15 736.082 126.322 716.226 121.237C736.082 116.152 752.452 107.324 765.16 94.6152C777.869 81.9065 786.697 65.5368 791.782 45.6797C796.867 65.5367 805.695 81.9066 818.403 94.6152C831.112 107.324 847.481 116.152 867.338 121.237C847.481 126.322 831.112 135.15 818.403 147.858C805.694 160.567 796.867 176.937 791.782 196.795Z",
                  fill: "currentColor",
                  stroke: "currentColor",
                  strokeWidth: "8",
                  strokeLinejoin: "round"
                }
              ),
              /* @__PURE__ */ jsx(
                "path",
                {
                  d: "M760.632 764.337C720.719 814.616 669.835 855.1 611.872 882.692C553.91 910.285 490.404 924.255 426.213 923.533C362.022 922.812 298.846 907.419 241.518 878.531C184.19 849.643 134.228 808.026 95.4548 756.863C56.6815 705.7 30.1238 646.346 17.8129 583.343C5.50207 520.339 7.76433 455.354 24.4266 393.359C41.089 331.364 71.7099 274.001 113.947 225.658C156.184 177.315 208.919 139.273 268.117 114.442",
                  stroke: "currentColor",
                  strokeWidth: "30",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                }
              )
            ]
          }
        )
      },
      {
        title: "Open in ChatGPT",
        href: `https://chatgpt.com/?${new URLSearchParams({
          hints: "search",
          q
        })}`,
        icon: /* @__PURE__ */ jsxs(
          "svg",
          {
            role: "img",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              /* @__PURE__ */ jsx("title", { children: "OpenAI" }),
              /* @__PURE__ */ jsx("path", { d: "M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" })
            ]
          }
        )
      },
      {
        title: "Open in Claude",
        href: `https://claude.ai/new?${new URLSearchParams({
          q
        })}`,
        icon: /* @__PURE__ */ jsxs(
          "svg",
          {
            fill: "currentColor",
            role: "img",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              /* @__PURE__ */ jsx("title", { children: "Anthropic" }),
              /* @__PURE__ */ jsx("path", { d: "M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z" })
            ]
          }
        )
      },
      {
        title: "Open in Cursor",
        icon: /* @__PURE__ */ jsxs(
          "svg",
          {
            fill: "currentColor",
            role: "img",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              /* @__PURE__ */ jsx("title", { children: "Cursor" }),
              /* @__PURE__ */ jsx("path", { d: "M11.503.131 1.891 5.678a.84.84 0 0 0-.42.726v11.188c0 .3.162.575.42.724l9.609 5.55a1 1 0 0 0 .998 0l9.61-5.55a.84.84 0 0 0 .42-.724V6.404a.84.84 0 0 0-.42-.726L12.497.131a1.01 1.01 0 0 0-.996 0M2.657 6.338h18.55c.263 0 .43.287.297.515L12.23 22.918c-.062.107-.229.064-.229-.06V12.335a.59.59 0 0 0-.295-.51l-9.11-5.257c-.109-.063-.064-.23.061-.23" })
            ]
          }
        ),
        href: `https://cursor.com/link/prompt?${new URLSearchParams({
          text: q
        })}`
      }
    ];
  }, [githubUrl, markdownUrl]);
  return /* @__PURE__ */ jsxs(Popover, { children: [
    /* @__PURE__ */ jsxs(
      PopoverTrigger,
      {
        className: twMerge(
          buttonVariants({
            color: "secondary",
            size: "sm",
            className: "gap-2"
          })
        ),
        children: [
          "Open",
          /* @__PURE__ */ jsx(ChevronDown, { className: "size-3.5 text-fd-muted-foreground" })
        ]
      }
    ),
    /* @__PURE__ */ jsx(PopoverContent, { className: "flex flex-col", children: items.map((item) => /* @__PURE__ */ jsxs(
      "a",
      {
        href: item.href,
        rel: "noreferrer noopener",
        target: "_blank",
        className: "text-sm p-2 rounded-lg inline-flex items-center gap-2 hover:text-fd-accent-foreground hover:bg-fd-accent [&_svg]:size-4",
        children: [
          item.icon,
          item.title,
          /* @__PURE__ */ jsx(ExternalLink, { className: "text-fd-muted-foreground size-3.5 ms-auto" })
        ]
      },
      item.href
    )) })
  ] });
}
// @__NO_SIDE_EFFECTS__
function createSlot(ownerName) {
  const SlotClone = /* @__PURE__ */ createSlotClone(ownerName);
  const Slot2 = React.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    const childrenArray = React.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (React.Children.count(newElement) > 1) return React.Children.only(null);
          return React.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return /* @__PURE__ */ jsx(SlotClone, { ...slotProps, ref: forwardedRef, children: React.isValidElement(newElement) ? React.cloneElement(newElement, void 0, newChildren) : null });
    }
    return /* @__PURE__ */ jsx(SlotClone, { ...slotProps, ref: forwardedRef, children });
  });
  Slot2.displayName = `${ownerName}.Slot`;
  return Slot2;
}
// @__NO_SIDE_EFFECTS__
function createSlotClone(ownerName) {
  const SlotClone = React.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    if (React.isValidElement(children)) {
      const childrenRef = getElementRef(children);
      const props2 = mergeProps(slotProps, children.props);
      if (children.type !== React.Fragment) {
        props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
      }
      return React.cloneElement(children, props2);
    }
    return React.Children.count(children) > 1 ? React.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var SLOTTABLE_IDENTIFIER = /* @__PURE__ */ Symbol("radix.slottable");
function isSlottable(child) {
  return React.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
function mergeProps(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}
function createCollection(name) {
  const PROVIDER_NAME = name + "CollectionProvider";
  const [createCollectionContext, createCollectionScope2] = createContextScope(PROVIDER_NAME);
  const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(
    PROVIDER_NAME,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  );
  const CollectionProvider = (props) => {
    const { scope, children } = props;
    const ref = React__default.useRef(null);
    const itemMap = React__default.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ jsx(CollectionProviderImpl, { scope, itemMap, collectionRef: ref, children });
  };
  CollectionProvider.displayName = PROVIDER_NAME;
  const COLLECTION_SLOT_NAME = name + "CollectionSlot";
  const CollectionSlotImpl = /* @__PURE__ */ createSlot(COLLECTION_SLOT_NAME);
  const CollectionSlot = React__default.forwardRef(
    (props, forwardedRef) => {
      const { scope, children } = props;
      const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);
      const composedRefs = useComposedRefs(forwardedRef, context.collectionRef);
      return /* @__PURE__ */ jsx(CollectionSlotImpl, { ref: composedRefs, children });
    }
  );
  CollectionSlot.displayName = COLLECTION_SLOT_NAME;
  const ITEM_SLOT_NAME = name + "CollectionItemSlot";
  const ITEM_DATA_ATTR = "data-radix-collection-item";
  const CollectionItemSlotImpl = /* @__PURE__ */ createSlot(ITEM_SLOT_NAME);
  const CollectionItemSlot = React__default.forwardRef(
    (props, forwardedRef) => {
      const { scope, children, ...itemData } = props;
      const ref = React__default.useRef(null);
      const composedRefs = useComposedRefs(forwardedRef, ref);
      const context = useCollectionContext(ITEM_SLOT_NAME, scope);
      React__default.useEffect(() => {
        context.itemMap.set(ref, { ref, ...itemData });
        return () => void context.itemMap.delete(ref);
      });
      return /* @__PURE__ */ jsx(CollectionItemSlotImpl, { ...{ [ITEM_DATA_ATTR]: "" }, ref: composedRefs, children });
    }
  );
  CollectionItemSlot.displayName = ITEM_SLOT_NAME;
  function useCollection2(scope) {
    const context = useCollectionContext(name + "CollectionConsumer", scope);
    const getItems = React__default.useCallback(() => {
      const collectionNode = context.collectionRef.current;
      if (!collectionNode) return [];
      const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
      const items = Array.from(context.itemMap.values());
      const orderedItems = items.sort(
        (a, b2) => orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b2.ref.current)
      );
      return orderedItems;
    }, [context.collectionRef, context.itemMap]);
    return getItems;
  }
  return [
    { Provider: CollectionProvider, Slot: CollectionSlot, ItemSlot: CollectionItemSlot },
    useCollection2,
    createCollectionScope2
  ];
}
var ENTRY_FOCUS = "rovingFocusGroup.onEntryFocus";
var EVENT_OPTIONS = { bubbles: false, cancelable: true };
var GROUP_NAME = "RovingFocusGroup";
var [Collection, useCollection, createCollectionScope] = createCollection(GROUP_NAME);
var [createRovingFocusGroupContext, createRovingFocusGroupScope] = createContextScope(
  GROUP_NAME,
  [createCollectionScope]
);
var [RovingFocusProvider, useRovingFocusContext] = createRovingFocusGroupContext(GROUP_NAME);
var RovingFocusGroup = React.forwardRef(
  (props, forwardedRef) => {
    return /* @__PURE__ */ jsx(Collection.Provider, { scope: props.__scopeRovingFocusGroup, children: /* @__PURE__ */ jsx(Collection.Slot, { scope: props.__scopeRovingFocusGroup, children: /* @__PURE__ */ jsx(RovingFocusGroupImpl, { ...props, ref: forwardedRef }) }) });
  }
);
RovingFocusGroup.displayName = GROUP_NAME;
var RovingFocusGroupImpl = React.forwardRef((props, forwardedRef) => {
  const {
    __scopeRovingFocusGroup,
    orientation,
    loop = false,
    dir,
    currentTabStopId: currentTabStopIdProp,
    defaultCurrentTabStopId,
    onCurrentTabStopIdChange,
    onEntryFocus,
    preventScrollOnEntryFocus = false,
    ...groupProps
  } = props;
  const ref = React.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const direction = useDirection(dir);
  const [currentTabStopId, setCurrentTabStopId] = useControllableState({
    prop: currentTabStopIdProp,
    defaultProp: defaultCurrentTabStopId ?? null,
    onChange: onCurrentTabStopIdChange,
    caller: GROUP_NAME
  });
  const [isTabbingBackOut, setIsTabbingBackOut] = React.useState(false);
  const handleEntryFocus = useCallbackRef$1(onEntryFocus);
  const getItems = useCollection(__scopeRovingFocusGroup);
  const isClickFocusRef = React.useRef(false);
  const [focusableItemsCount, setFocusableItemsCount] = React.useState(0);
  React.useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener(ENTRY_FOCUS, handleEntryFocus);
      return () => node.removeEventListener(ENTRY_FOCUS, handleEntryFocus);
    }
  }, [handleEntryFocus]);
  return /* @__PURE__ */ jsx(
    RovingFocusProvider,
    {
      scope: __scopeRovingFocusGroup,
      orientation,
      dir: direction,
      loop,
      currentTabStopId,
      onItemFocus: React.useCallback(
        (tabStopId) => setCurrentTabStopId(tabStopId),
        [setCurrentTabStopId]
      ),
      onItemShiftTab: React.useCallback(() => setIsTabbingBackOut(true), []),
      onFocusableItemAdd: React.useCallback(
        () => setFocusableItemsCount((prevCount) => prevCount + 1),
        []
      ),
      onFocusableItemRemove: React.useCallback(
        () => setFocusableItemsCount((prevCount) => prevCount - 1),
        []
      ),
      children: /* @__PURE__ */ jsx(
        Primitive.div,
        {
          tabIndex: isTabbingBackOut || focusableItemsCount === 0 ? -1 : 0,
          "data-orientation": orientation,
          ...groupProps,
          ref: composedRefs,
          style: { outline: "none", ...props.style },
          onMouseDown: composeEventHandlers(props.onMouseDown, () => {
            isClickFocusRef.current = true;
          }),
          onFocus: composeEventHandlers(props.onFocus, (event) => {
            const isKeyboardFocus = !isClickFocusRef.current;
            if (event.target === event.currentTarget && isKeyboardFocus && !isTabbingBackOut) {
              const entryFocusEvent = new CustomEvent(ENTRY_FOCUS, EVENT_OPTIONS);
              event.currentTarget.dispatchEvent(entryFocusEvent);
              if (!entryFocusEvent.defaultPrevented) {
                const items = getItems().filter((item) => item.focusable);
                const activeItem = items.find((item) => item.active);
                const currentItem = items.find((item) => item.id === currentTabStopId);
                const candidateItems = [activeItem, currentItem, ...items].filter(
                  Boolean
                );
                const candidateNodes = candidateItems.map((item) => item.ref.current);
                focusFirst(candidateNodes, preventScrollOnEntryFocus);
              }
            }
            isClickFocusRef.current = false;
          }),
          onBlur: composeEventHandlers(props.onBlur, () => setIsTabbingBackOut(false))
        }
      )
    }
  );
});
var ITEM_NAME = "RovingFocusGroupItem";
var RovingFocusGroupItem = React.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeRovingFocusGroup,
      focusable = true,
      active = false,
      tabStopId,
      children,
      ...itemProps
    } = props;
    const autoId = useId();
    const id = tabStopId || autoId;
    const context = useRovingFocusContext(ITEM_NAME, __scopeRovingFocusGroup);
    const isCurrentTabStop = context.currentTabStopId === id;
    const getItems = useCollection(__scopeRovingFocusGroup);
    const { onFocusableItemAdd, onFocusableItemRemove, currentTabStopId } = context;
    React.useEffect(() => {
      if (focusable) {
        onFocusableItemAdd();
        return () => onFocusableItemRemove();
      }
    }, [focusable, onFocusableItemAdd, onFocusableItemRemove]);
    return /* @__PURE__ */ jsx(
      Collection.ItemSlot,
      {
        scope: __scopeRovingFocusGroup,
        id,
        focusable,
        active,
        children: /* @__PURE__ */ jsx(
          Primitive.span,
          {
            tabIndex: isCurrentTabStop ? 0 : -1,
            "data-orientation": context.orientation,
            ...itemProps,
            ref: forwardedRef,
            onMouseDown: composeEventHandlers(props.onMouseDown, (event) => {
              if (!focusable) event.preventDefault();
              else context.onItemFocus(id);
            }),
            onFocus: composeEventHandlers(props.onFocus, () => context.onItemFocus(id)),
            onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
              if (event.key === "Tab" && event.shiftKey) {
                context.onItemShiftTab();
                return;
              }
              if (event.target !== event.currentTarget) return;
              const focusIntent = getFocusIntent(event, context.orientation, context.dir);
              if (focusIntent !== void 0) {
                if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;
                event.preventDefault();
                const items = getItems().filter((item) => item.focusable);
                let candidateNodes = items.map((item) => item.ref.current);
                if (focusIntent === "last") candidateNodes.reverse();
                else if (focusIntent === "prev" || focusIntent === "next") {
                  if (focusIntent === "prev") candidateNodes.reverse();
                  const currentIndex = candidateNodes.indexOf(event.currentTarget);
                  candidateNodes = context.loop ? wrapArray(candidateNodes, currentIndex + 1) : candidateNodes.slice(currentIndex + 1);
                }
                setTimeout(() => focusFirst(candidateNodes));
              }
            }),
            children: typeof children === "function" ? children({ isCurrentTabStop, hasTabStop: currentTabStopId != null }) : children
          }
        )
      }
    );
  }
);
RovingFocusGroupItem.displayName = ITEM_NAME;
var MAP_KEY_TO_FOCUS_INTENT = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function getDirectionAwareKey(key, dir) {
  if (dir !== "rtl") return key;
  return key === "ArrowLeft" ? "ArrowRight" : key === "ArrowRight" ? "ArrowLeft" : key;
}
function getFocusIntent(event, orientation, dir) {
  const key = getDirectionAwareKey(event.key, dir);
  if (orientation === "vertical" && ["ArrowLeft", "ArrowRight"].includes(key)) return void 0;
  if (orientation === "horizontal" && ["ArrowUp", "ArrowDown"].includes(key)) return void 0;
  return MAP_KEY_TO_FOCUS_INTENT[key];
}
function focusFirst(candidates, preventScroll = false) {
  const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
  for (const candidate of candidates) {
    if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
    candidate.focus({ preventScroll });
    if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
  }
}
function wrapArray(array, startIndex) {
  return array.map((_2, index2) => array[(startIndex + index2) % array.length]);
}
var Root = RovingFocusGroup;
var Item = RovingFocusGroupItem;
var TABS_NAME = "Tabs";
var [createTabsContext] = createContextScope(TABS_NAME, [
  createRovingFocusGroupScope
]);
var useRovingFocusGroupScope = createRovingFocusGroupScope();
var [TabsProvider, useTabsContext] = createTabsContext(TABS_NAME);
var Tabs$2 = React.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeTabs,
      value: valueProp,
      onValueChange,
      defaultValue,
      orientation = "horizontal",
      dir,
      activationMode = "automatic",
      ...tabsProps
    } = props;
    const direction = useDirection(dir);
    const [value, setValue] = useControllableState({
      prop: valueProp,
      onChange: onValueChange,
      defaultProp: defaultValue ?? "",
      caller: TABS_NAME
    });
    return /* @__PURE__ */ jsx(
      TabsProvider,
      {
        scope: __scopeTabs,
        baseId: useId(),
        value,
        onValueChange: setValue,
        orientation,
        dir: direction,
        activationMode,
        children: /* @__PURE__ */ jsx(
          Primitive.div,
          {
            dir: direction,
            "data-orientation": orientation,
            ...tabsProps,
            ref: forwardedRef
          }
        )
      }
    );
  }
);
Tabs$2.displayName = TABS_NAME;
var TAB_LIST_NAME = "TabsList";
var TabsList$2 = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTabs, loop = true, ...listProps } = props;
    const context = useTabsContext(TAB_LIST_NAME, __scopeTabs);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
    return /* @__PURE__ */ jsx(
      Root,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        orientation: context.orientation,
        dir: context.dir,
        loop,
        children: /* @__PURE__ */ jsx(
          Primitive.div,
          {
            role: "tablist",
            "aria-orientation": context.orientation,
            ...listProps,
            ref: forwardedRef
          }
        )
      }
    );
  }
);
TabsList$2.displayName = TAB_LIST_NAME;
var TRIGGER_NAME = "TabsTrigger";
var TabsTrigger$2 = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTabs, value, disabled = false, ...triggerProps } = props;
    const context = useTabsContext(TRIGGER_NAME, __scopeTabs);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
    const triggerId = makeTriggerId(context.baseId, value);
    const contentId = makeContentId(context.baseId, value);
    const isSelected = value === context.value;
    return /* @__PURE__ */ jsx(
      Item,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        focusable: !disabled,
        active: isSelected,
        children: /* @__PURE__ */ jsx(
          Primitive.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": isSelected,
            "aria-controls": contentId,
            "data-state": isSelected ? "active" : "inactive",
            "data-disabled": disabled ? "" : void 0,
            disabled,
            id: triggerId,
            ...triggerProps,
            ref: forwardedRef,
            onMouseDown: composeEventHandlers(props.onMouseDown, (event) => {
              if (!disabled && event.button === 0 && event.ctrlKey === false) {
                context.onValueChange(value);
              } else {
                event.preventDefault();
              }
            }),
            onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
              if ([" ", "Enter"].includes(event.key)) context.onValueChange(value);
            }),
            onFocus: composeEventHandlers(props.onFocus, () => {
              const isAutomaticActivation = context.activationMode !== "manual";
              if (!isSelected && !disabled && isAutomaticActivation) {
                context.onValueChange(value);
              }
            })
          }
        )
      }
    );
  }
);
TabsTrigger$2.displayName = TRIGGER_NAME;
var CONTENT_NAME = "TabsContent";
var TabsContent$2 = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTabs, value, forceMount, children, ...contentProps } = props;
    const context = useTabsContext(CONTENT_NAME, __scopeTabs);
    const triggerId = makeTriggerId(context.baseId, value);
    const contentId = makeContentId(context.baseId, value);
    const isSelected = value === context.value;
    const isMountAnimationPreventedRef = React.useRef(isSelected);
    React.useEffect(() => {
      const rAF = requestAnimationFrame(() => isMountAnimationPreventedRef.current = false);
      return () => cancelAnimationFrame(rAF);
    }, []);
    return /* @__PURE__ */ jsx(Presence, { present: forceMount || isSelected, children: ({ present }) => /* @__PURE__ */ jsx(
      Primitive.div,
      {
        "data-state": isSelected ? "active" : "inactive",
        "data-orientation": context.orientation,
        role: "tabpanel",
        "aria-labelledby": triggerId,
        hidden: !present,
        id: contentId,
        tabIndex: 0,
        ...contentProps,
        ref: forwardedRef,
        style: {
          ...props.style,
          animationDuration: isMountAnimationPreventedRef.current ? "0s" : void 0
        },
        children: present && children
      }
    ) });
  }
);
TabsContent$2.displayName = CONTENT_NAME;
function makeTriggerId(baseId, value) {
  return `${baseId}-trigger-${value}`;
}
function makeContentId(baseId, value) {
  return `${baseId}-content-${value}`;
}
const listeners = /* @__PURE__ */ new Map();
const TabsContext$2 = createContext(null);
function useTabContext$1() {
  const ctx = use(TabsContext$2);
  if (!ctx) throw new Error("You must wrap your component in <Tabs>");
  return ctx;
}
const TabsList$1 = TabsList$2;
const TabsTrigger$1 = TabsTrigger$2;
function Tabs$1({ ref, groupId, persist = false, updateAnchor = false, defaultValue, value: _value, onValueChange: _onValueChange, ...props }) {
  const tabsRef = useRef(null);
  const valueToIdMap = useMemo(() => /* @__PURE__ */ new Map(), []);
  const [value, setValue] = _value === void 0 ? useState(defaultValue) : [_value, useEffectEvent((v) => _onValueChange?.(v))];
  useLayoutEffect(() => {
    if (!groupId) return;
    let previous = sessionStorage.getItem(groupId);
    if (persist) previous ??= localStorage.getItem(groupId);
    if (previous) setValue(previous);
    const groupListeners = listeners.get(groupId) ?? /* @__PURE__ */ new Set();
    groupListeners.add(setValue);
    listeners.set(groupId, groupListeners);
    return () => {
      groupListeners.delete(setValue);
    };
  }, [
    groupId,
    persist,
    setValue
  ]);
  useLayoutEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    for (const [value2, id] of valueToIdMap.entries()) if (id === hash) {
      setValue(value2);
      tabsRef.current?.scrollIntoView();
      break;
    }
  }, [setValue, valueToIdMap]);
  return /* @__PURE__ */ jsx(Tabs$2, {
    ref: mergeRefs$1(ref, tabsRef),
    value,
    onValueChange: (v) => {
      if (updateAnchor) {
        const id = valueToIdMap.get(v);
        if (id) window.history.replaceState(null, "", `#${id}`);
      }
      if (groupId) {
        const groupListeners = listeners.get(groupId);
        if (groupListeners) for (const listener of groupListeners) listener(v);
        sessionStorage.setItem(groupId, v);
        if (persist) localStorage.setItem(groupId, v);
      } else setValue(v);
    },
    ...props,
    children: /* @__PURE__ */ jsx(TabsContext$2, {
      value: useMemo(() => ({ valueToIdMap }), [valueToIdMap]),
      children: props.children
    })
  });
}
function TabsContent$1({ value, ...props }) {
  const { valueToIdMap } = useTabContext$1();
  if (props.id) valueToIdMap.set(value, props.id);
  return /* @__PURE__ */ jsx(TabsContent$2, {
    value,
    ...props,
    children: props.children
  });
}
const TabsContext$1 = createContext(null);
function Pre(props) {
  return /* @__PURE__ */ jsx("pre", {
    ...props,
    className: twMerge("min-w-full w-max *:flex *:flex-col", props.className),
    children: props.children
  });
}
function CodeBlock({ ref, title, allowCopy = true, keepBackground = false, icon, viewportProps = {}, children, Actions = (props2) => /* @__PURE__ */ jsx("div", {
  ...props2,
  className: twMerge("empty:hidden", props2.className)
}), ...props }) {
  const inTab = use(TabsContext$1) !== null;
  const areaRef = useRef(null);
  return /* @__PURE__ */ jsxs("figure", {
    ref,
    dir: "ltr",
    ...props,
    tabIndex: -1,
    className: twMerge(inTab ? "bg-fd-secondary -mx-px -mb-px last:rounded-b-xl" : "my-4 bg-fd-card rounded-xl", keepBackground && "bg-(--shiki-light-bg) dark:bg-(--shiki-dark-bg)", "shiki relative border shadow-sm not-prose overflow-hidden text-sm", props.className),
    children: [title ? /* @__PURE__ */ jsxs("div", {
      className: "flex text-fd-muted-foreground items-center gap-2 h-9.5 border-b px-4",
      children: [
        typeof icon === "string" ? /* @__PURE__ */ jsx("div", {
          className: "[&_svg]:size-3.5",
          dangerouslySetInnerHTML: { __html: icon }
        }) : icon,
        /* @__PURE__ */ jsx("figcaption", {
          className: "flex-1 truncate",
          children: title
        }),
        Actions({
          className: "-me-2",
          children: allowCopy && /* @__PURE__ */ jsx(CopyButton, { containerRef: areaRef })
        })
      ]
    }) : Actions({
      className: "absolute top-3 right-2 z-2 backdrop-blur-lg rounded-lg text-fd-muted-foreground",
      children: allowCopy && /* @__PURE__ */ jsx(CopyButton, { containerRef: areaRef })
    }), /* @__PURE__ */ jsx("div", {
      ref: areaRef,
      ...viewportProps,
      role: "region",
      tabIndex: 0,
      className: twMerge("text-[0.8125rem] py-3.5 overflow-auto max-h-[600px] fd-scroll-container focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-fd-ring", viewportProps.className),
      style: {
        "--padding-right": !title ? "calc(var(--spacing) * 8)" : void 0,
        counterSet: props["data-line-numbers"] ? `line ${Number(props["data-line-numbers-start"] ?? 1) - 1}` : void 0,
        ...viewportProps.style
      },
      children
    })]
  });
}
function CopyButton({ className, containerRef, ...props }) {
  const [checked, onClick] = useCopyButton(() => {
    const pre = containerRef.current?.getElementsByTagName("pre").item(0);
    if (!pre) return;
    const clone = pre.cloneNode(true);
    clone.querySelectorAll(".nd-copy-ignore").forEach((node) => {
      node.replaceWith("\n");
    });
    navigator.clipboard.writeText(clone.textContent ?? "");
  });
  return /* @__PURE__ */ jsx("button", {
    type: "button",
    "data-checked": checked || void 0,
    className: twMerge(buttonVariants({
      className: "hover:text-fd-accent-foreground data-checked:text-fd-accent-foreground",
      size: "icon-xs"
    }), className),
    "aria-label": checked ? "Copied Text" : "Copy Text",
    onClick,
    ...props,
    children: checked ? /* @__PURE__ */ jsx(Check, {}) : /* @__PURE__ */ jsx(Clipboard, {})
  });
}
function CodeBlockTabs({ ref, ...props }) {
  const containerRef = useRef(null);
  const nested = use(TabsContext$1) !== null;
  return /* @__PURE__ */ jsx(Tabs$1, {
    ref: mergeRefs$1(containerRef, ref),
    ...props,
    className: twMerge("bg-fd-card rounded-xl border", !nested && "my-4", props.className),
    children: /* @__PURE__ */ jsx(TabsContext$1, {
      value: useMemo(() => ({
        containerRef,
        nested
      }), [nested]),
      children: props.children
    })
  });
}
function CodeBlockTabsList(props) {
  return /* @__PURE__ */ jsx(TabsList$1, {
    ...props,
    className: twMerge("flex flex-row px-2 overflow-x-auto text-fd-muted-foreground", props.className),
    children: props.children
  });
}
function CodeBlockTabsTrigger({ children, ...props }) {
  return /* @__PURE__ */ jsxs(TabsTrigger$1, {
    ...props,
    className: twMerge("relative group inline-flex text-sm font-medium text-nowrap items-center transition-colors gap-2 px-2 py-1.5 hover:text-fd-accent-foreground data-[state=active]:text-fd-primary [&_svg]:size-3.5", props.className),
    children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-x-2 bottom-0 h-px group-data-[state=active]:bg-fd-primary" }), children]
  });
}
function CodeBlockTab(props) {
  return /* @__PURE__ */ jsx(TabsContent$1, { ...props });
}
const TabsContext = createContext(null);
function useTabContext() {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error("You must wrap your component in <Tabs>");
  return ctx;
}
const TabsList = React.forwardRef((props, ref) => /* @__PURE__ */ jsx(TabsList$1, {
  ref,
  ...props,
  className: twMerge("flex gap-3.5 text-fd-secondary-foreground overflow-x-auto px-4 not-prose", props.className)
}));
TabsList.displayName = "TabsList";
const TabsTrigger = React.forwardRef((props, ref) => /* @__PURE__ */ jsx(TabsTrigger$1, {
  ref,
  ...props,
  className: twMerge("inline-flex items-center gap-2 whitespace-nowrap text-fd-muted-foreground border-b border-transparent py-2 text-sm font-medium transition-colors [&_svg]:size-4 hover:text-fd-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-fd-primary data-[state=active]:text-fd-primary", props.className)
}));
TabsTrigger.displayName = "TabsTrigger";
function Tabs({ ref, className, items, label, defaultIndex = 0, defaultValue = items ? escapeValue(items[defaultIndex]) : void 0, ...props }) {
  const [value, setValue] = useState(defaultValue);
  const collection = useMemo(() => [], []);
  return /* @__PURE__ */ jsxs(Tabs$1, {
    ref,
    className: twMerge("flex flex-col overflow-hidden rounded-xl border bg-fd-secondary my-4", className),
    value,
    onValueChange: (v) => {
      if (items && !items.some((item) => escapeValue(item) === v)) return;
      setValue(v);
    },
    ...props,
    children: [items && /* @__PURE__ */ jsxs(TabsList, { children: [label && /* @__PURE__ */ jsx("span", {
      className: "text-sm font-medium my-auto me-auto",
      children: label
    }), items.map((item) => /* @__PURE__ */ jsx(TabsTrigger, {
      value: escapeValue(item),
      children: item
    }, item))] }), /* @__PURE__ */ jsx(TabsContext.Provider, {
      value: useMemo(() => ({
        items,
        collection
      }), [collection, items]),
      children: props.children
    })]
  });
}
function Tab({ value, ...props }) {
  const { items } = useTabContext();
  const resolved = value ?? items?.at(useCollectionIndex());
  if (!resolved) throw new Error("Failed to resolve tab `value`, please pass a `value` prop to the Tab component.");
  return /* @__PURE__ */ jsx(TabsContent, {
    value: escapeValue(resolved),
    ...props,
    children: props.children
  });
}
function TabsContent({ value, className, ...props }) {
  return /* @__PURE__ */ jsx(TabsContent$1, {
    value,
    forceMount: true,
    className: twMerge("p-4 text-[0.9375rem] bg-fd-background rounded-xl outline-none prose-no-margin data-[state=inactive]:hidden [&>figure:only-child]:-m-4 [&>figure:only-child]:border-none", className),
    ...props,
    children: props.children
  });
}
function useCollectionIndex() {
  const key = useId$1();
  const { collection } = useTabContext();
  useEffect(() => {
    return () => {
      const idx = collection.indexOf(key);
      if (idx !== -1) collection.splice(idx, 1);
    };
  }, [key, collection]);
  if (!collection.includes(key)) collection.push(key);
  return collection.indexOf(key);
}
function escapeValue(v) {
  return v.toLowerCase().replace(/\s/, "-");
}
class ErrorBoundary extends React__default.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    if (error && typeof error === "object" && "digest" in error) {
      const digest = String(error.digest);
      if (digest === "NEXT_NOT_FOUND" || // legacy compat
      digest.startsWith("NEXT_HTTP_ERROR_FALLBACK;") || digest.startsWith("NEXT_REDIRECT;")) {
        throw error;
      }
    }
    return { error };
  }
  reset = () => {
    this.setState({ error: null });
  };
  render() {
    if (this.state.error) {
      const FallbackComponent = this.props.fallback;
      return jsx(FallbackComponent, { error: this.state.error, reset: this.reset });
    }
    return this.props.children;
  }
}
class NotFoundBoundaryInner extends React__default.Component {
  constructor(props) {
    super(props);
    this.state = { notFound: false, previousPathname: props.pathname };
  }
  static getDerivedStateFromProps(props, state) {
    if (props.pathname !== state.previousPathname && state.notFound) {
      return { notFound: false, previousPathname: props.pathname };
    }
    return { notFound: state.notFound, previousPathname: props.pathname };
  }
  static getDerivedStateFromError(error) {
    if (error && typeof error === "object" && "digest" in error) {
      const digest = String(error.digest);
      if (digest === "NEXT_NOT_FOUND" || digest.startsWith("NEXT_HTTP_ERROR_FALLBACK;404")) {
        return { notFound: true };
      }
    }
    throw error;
  }
  render() {
    if (this.state.notFound) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}
function NotFoundBoundary({ fallback, children }) {
  const pathname = usePathname$1();
  return jsx(NotFoundBoundaryInner, { pathname, fallback, children });
}
function LayoutSegmentProvider({ depth, children }) {
  const ctx = getLayoutSegmentContext();
  if (!ctx) {
    return children;
  }
  return createElement(ctx.Provider, { value: depth }, children);
}
const export_f5d2887272df = {
  DocsLayoutClient
};
const export_3c56a20d82f7 = {
  DocsPageClient
};
const export_dd935e2b426a = {
  LLMCopyButton,
  ViewOptions
};
const export_becc1a081aff = {
  Image: Image$2
};
const export_0817f5b3b49f = {
  default: Link
};
const export_327bb606fa81 = {
  CodeBlock,
  CodeBlockTab,
  CodeBlockTabs,
  CodeBlockTabsList,
  CodeBlockTabsTrigger,
  Pre
};
const export_95bdd8cb34e3 = {
  Tab,
  Tabs
};
const export_f29e6e234fea = {
  ErrorBoundary,
  NotFoundBoundary
};
const export_0deffcb8ffd7 = {
  LayoutSegmentProvider
};
const facade__virtual_vinextRscEntry = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  export_0817f5b3b49f,
  export_0deffcb8ffd7,
  export_327bb606fa81,
  export_3c56a20d82f7,
  export_95bdd8cb34e3,
  export_becc1a081aff,
  export_dd935e2b426a,
  export_f29e6e234fea,
  export_f5d2887272df
}, Symbol.toStringTag, { value: "Module" }));
export {
  ChevronRight as C,
  DismissableLayer as D,
  FocusScope as F,
  I18nLabel as I,
  Presence as P,
  ReactRemoveScroll as R,
  Search as S,
  composeRefs as a,
  useId as b,
  createLucideIcon as c,
  Primitive as d,
  useComposedRefs as e,
  createContextScope as f,
  useFocusGuards as g,
  createContext2 as h,
  useRouter as i,
  useI18n as j,
  buttonVariants as k,
  useOnChange as l,
  facade__virtual_vinextRscEntry as m,
  useControllableState as u
};
