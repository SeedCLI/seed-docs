import { c as createLucideIcon, a as composeRefs, u as useControllableState, b as useId, P as Presence, d as Primitive, R as ReactRemoveScroll, e as useComposedRefs, f as createContextScope, g as useFocusGuards, F as FocusScope, D as DismissableLayer, h as createContext2, i as useRouter, j as useI18n, S as Search, k as buttonVariants, l as useOnChange, I as I18nLabel, C as ChevronRight } from "./facade__virtual_vinext-rsc-entry-CTUUoInW.js";
import { twMerge } from "tailwind-merge";
import * as React from "react";
import { use, useRef, useMemo, useState, useEffectEvent, useEffect, Fragment as Fragment$1, createContext, useCallback } from "react";
import * as JsxRuntime from "react/jsx-runtime";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { cva } from "class-variance-authority";
import scrollIntoView from "scroll-into-view-if-needed";
import { composeEventHandlers } from "@radix-ui/primitive";
import { hideOthers } from "aria-hidden";
import { remark } from "remark";
import remarkRehype from "remark-rehype";
import { VFile } from "vfile";
import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import rehypeRaw from "rehype-raw";
import { visit } from "unist-util-visit";
import "../index.js";
import "../__vite_rsc_assets_manifest.js";
import "react-dom";
import "react-dom/server.edge";
import "node:async_hooks";
import "@unpic/core";
import "@radix-ui/number";
import "@floating-ui/dom";
import "tslib";
import "get-nonce";
const __iconNode = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
];
const Hash = createLucideIcon("hash", __iconNode);
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
var DIALOG_NAME = "Dialog";
var [createDialogContext] = createContextScope(DIALOG_NAME);
var [DialogProvider, useDialogContext] = createDialogContext(DIALOG_NAME);
var Dialog = (props) => {
  const {
    __scopeDialog,
    children,
    open: openProp,
    defaultOpen,
    onOpenChange,
    modal = true
  } = props;
  const triggerRef = React.useRef(null);
  const contentRef = React.useRef(null);
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen ?? false,
    onChange: onOpenChange,
    caller: DIALOG_NAME
  });
  return /* @__PURE__ */ jsx(
    DialogProvider,
    {
      scope: __scopeDialog,
      triggerRef,
      contentRef,
      contentId: useId(),
      titleId: useId(),
      descriptionId: useId(),
      open,
      onOpenChange: setOpen,
      onOpenToggle: React.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
      modal,
      children
    }
  );
};
Dialog.displayName = DIALOG_NAME;
var TRIGGER_NAME = "DialogTrigger";
var DialogTrigger = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...triggerProps } = props;
    const context = useDialogContext(TRIGGER_NAME, __scopeDialog);
    const composedTriggerRef = useComposedRefs(forwardedRef, context.triggerRef);
    return /* @__PURE__ */ jsx(
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
  }
);
DialogTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME = "DialogPortal";
var [PortalProvider, usePortalContext] = createDialogContext(PORTAL_NAME, {
  forceMount: void 0
});
var OVERLAY_NAME = "DialogOverlay";
var DialogOverlay = React.forwardRef(
  (props, forwardedRef) => {
    const portalContext = usePortalContext(OVERLAY_NAME, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...overlayProps } = props;
    const context = useDialogContext(OVERLAY_NAME, props.__scopeDialog);
    return context.modal ? /* @__PURE__ */ jsx(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ jsx(DialogOverlayImpl, { ...overlayProps, ref: forwardedRef }) }) : null;
  }
);
DialogOverlay.displayName = OVERLAY_NAME;
var Slot = /* @__PURE__ */ createSlot("DialogOverlay.RemoveScroll");
var DialogOverlayImpl = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...overlayProps } = props;
    const context = useDialogContext(OVERLAY_NAME, __scopeDialog);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ jsx(ReactRemoveScroll, { as: Slot, allowPinchZoom: true, shards: [context.contentRef], children: /* @__PURE__ */ jsx(
        Primitive.div,
        {
          "data-state": getState(context.open),
          ...overlayProps,
          ref: forwardedRef,
          style: { pointerEvents: "auto", ...overlayProps.style }
        }
      ) })
    );
  }
);
var CONTENT_NAME = "DialogContent";
var DialogContent = React.forwardRef(
  (props, forwardedRef) => {
    const portalContext = usePortalContext(CONTENT_NAME, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    return /* @__PURE__ */ jsx(Presence, { present: forceMount || context.open, children: context.modal ? /* @__PURE__ */ jsx(DialogContentModal, { ...contentProps, ref: forwardedRef }) : /* @__PURE__ */ jsx(DialogContentNonModal, { ...contentProps, ref: forwardedRef }) });
  }
);
DialogContent.displayName = CONTENT_NAME;
var DialogContentModal = React.forwardRef(
  (props, forwardedRef) => {
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    const contentRef = React.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, context.contentRef, contentRef);
    React.useEffect(() => {
      const content = contentRef.current;
      if (content) return hideOthers(content);
    }, []);
    return /* @__PURE__ */ jsx(
      DialogContentImpl,
      {
        ...props,
        ref: composedRefs,
        trapFocus: context.open,
        disableOutsidePointerEvents: true,
        onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, (event) => {
          event.preventDefault();
          context.triggerRef.current?.focus();
        }),
        onPointerDownOutside: composeEventHandlers(props.onPointerDownOutside, (event) => {
          const originalEvent = event.detail.originalEvent;
          const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
          const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
          if (isRightClick) event.preventDefault();
        }),
        onFocusOutside: composeEventHandlers(
          props.onFocusOutside,
          (event) => event.preventDefault()
        )
      }
    );
  }
);
var DialogContentNonModal = React.forwardRef(
  (props, forwardedRef) => {
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    const hasInteractedOutsideRef = React.useRef(false);
    const hasPointerDownOutsideRef = React.useRef(false);
    return /* @__PURE__ */ jsx(
      DialogContentImpl,
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
var DialogContentImpl = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus, ...contentProps } = props;
    const context = useDialogContext(CONTENT_NAME, __scopeDialog);
    const contentRef = React.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, contentRef);
    useFocusGuards();
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
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
              role: "dialog",
              id: context.contentId,
              "aria-describedby": context.descriptionId,
              "aria-labelledby": context.titleId,
              "data-state": getState(context.open),
              ...contentProps,
              ref: composedRefs,
              onDismiss: () => context.onOpenChange(false)
            }
          )
        }
      ),
      /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(TitleWarning, { titleId: context.titleId }),
        /* @__PURE__ */ jsx(DescriptionWarning, { contentRef, descriptionId: context.descriptionId })
      ] })
    ] });
  }
);
var TITLE_NAME = "DialogTitle";
var DialogTitle = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...titleProps } = props;
    const context = useDialogContext(TITLE_NAME, __scopeDialog);
    return /* @__PURE__ */ jsx(Primitive.h2, { id: context.titleId, ...titleProps, ref: forwardedRef });
  }
);
DialogTitle.displayName = TITLE_NAME;
var DESCRIPTION_NAME = "DialogDescription";
var DialogDescription = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...descriptionProps } = props;
    const context = useDialogContext(DESCRIPTION_NAME, __scopeDialog);
    return /* @__PURE__ */ jsx(Primitive.p, { id: context.descriptionId, ...descriptionProps, ref: forwardedRef });
  }
);
DialogDescription.displayName = DESCRIPTION_NAME;
var CLOSE_NAME = "DialogClose";
var DialogClose = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...closeProps } = props;
    const context = useDialogContext(CLOSE_NAME, __scopeDialog);
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
DialogClose.displayName = CLOSE_NAME;
function getState(open) {
  return open ? "open" : "closed";
}
var TITLE_WARNING_NAME = "DialogTitleWarning";
var [WarningProvider, useWarningContext] = createContext2(TITLE_WARNING_NAME, {
  contentName: CONTENT_NAME,
  titleName: TITLE_NAME,
  docsSlug: "dialog"
});
var TitleWarning = ({ titleId }) => {
  const titleWarningContext = useWarningContext(TITLE_WARNING_NAME);
  const MESSAGE = `\`${titleWarningContext.contentName}\` requires a \`${titleWarningContext.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${titleWarningContext.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${titleWarningContext.docsSlug}`;
  React.useEffect(() => {
    if (titleId) {
      const hasTitle = document.getElementById(titleId);
      if (!hasTitle) console.error(MESSAGE);
    }
  }, [MESSAGE, titleId]);
  return null;
};
var DESCRIPTION_WARNING_NAME = "DialogDescriptionWarning";
var DescriptionWarning = ({ contentRef, descriptionId }) => {
  const descriptionWarningContext = useWarningContext(DESCRIPTION_WARNING_NAME);
  const MESSAGE = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${descriptionWarningContext.contentName}}.`;
  React.useEffect(() => {
    const describedById = contentRef.current?.getAttribute("aria-describedby");
    if (descriptionId && describedById) {
      const hasDescription = document.getElementById(descriptionId);
      if (!hasDescription) console.warn(MESSAGE);
    }
  }, [MESSAGE, contentRef, descriptionId]);
  return null;
};
function createMarkdownRenderer({ rehypePlugins = [], remarkPlugins = [], remarkRehypeOptions } = {}) {
  const processor = remark().use(remarkPlugins).use(remarkRehype, remarkRehypeOptions).use(rehypePlugins);
  const cache = {};
  const promises = {};
  function render(tree, file, props) {
    return toJsxRuntime(tree, {
      development: false,
      filePath: file.path,
      components: props.components,
      ...JsxRuntime
    });
  }
  function parse(file, _props) {
    return processor.parse(file);
  }
  return {
    Markdown(props) {
      const { async = false, children } = props;
      const file = new VFile(children);
      const key = String(file.value);
      if (async) {
        promises[key] ??= processor.run(parse(file), file);
        return render(use(promises[key]), file, props);
      }
      cache[key] ??= processor.runSync(parse(file), file);
      return render(cache[key], file, props);
    },
    async MarkdownServer(props) {
      const file = new VFile(props.children);
      return render(await processor.run(parse(file), file), file, props);
    }
  };
}
const RootContext = createContext(null);
const ListContext = createContext(null);
const TagsListContext = createContext(null);
const PreContext = createContext(false);
const mdRenderer = createMarkdownRenderer({
  remarkRehypeOptions: { allowDangerousHtml: true },
  rehypePlugins: [rehypeRaw, rehypeCustomElements]
});
const mdComponents = {
  mark(props) {
    return /* @__PURE__ */ jsx("span", {
      ...props,
      className: "text-fd-primary underline"
    });
  },
  a: "span",
  p(props) {
    return /* @__PURE__ */ jsx("p", {
      ...props,
      className: "min-w-0"
    });
  },
  strong(props) {
    return /* @__PURE__ */ jsx("strong", {
      ...props,
      className: "text-fd-accent-foreground font-medium"
    });
  },
  code(props) {
    if (use(PreContext)) return /* @__PURE__ */ jsx("code", {
      ...props,
      className: "mask-[linear-gradient(to_bottom,white,white_30px,transparent_80px)]"
    });
    return /* @__PURE__ */ jsx("code", {
      ...props,
      className: "border rounded-md px-px bg-fd-secondary text-fd-secondary-foreground"
    });
  },
  custom({ _tagName = "fragment", children, ...rest }) {
    return /* @__PURE__ */ jsxs("span", {
      className: "inline-flex max-w-full items-center border p-0.5 rounded-md bg-fd-card text-fd-card-foreground divide-x divide-fd-border",
      children: [
        /* @__PURE__ */ jsx("code", {
          className: "rounded-sm px-0.5 me-1 bg-fd-primary font-medium text-xs text-fd-primary-foreground border-none",
          children: _tagName
        }),
        Object.entries(rest).map(([k, v]) => {
          if (typeof v !== "string") return;
          return /* @__PURE__ */ jsxs("code", {
            className: "truncate text-xs text-fd-muted-foreground px-1",
            children: [/* @__PURE__ */ jsxs("span", {
              className: "text-fd-card-foreground",
              children: [k, ": "]
            }), v]
          }, k);
        }),
        children && /* @__PURE__ */ jsx("span", {
          className: "ps-1",
          children
        })
      ]
    });
  },
  pre(props) {
    return /* @__PURE__ */ jsx("pre", {
      ...props,
      className: twMerge("flex flex-col border rounded-md my-0.5 p-2 bg-fd-secondary text-fd-secondary-foreground max-h-20 overflow-hidden", props.className),
      children: /* @__PURE__ */ jsx(PreContext, {
        value: true,
        children: props.children
      })
    });
  }
};
function rehypeCustomElements() {
  return (tree) => {
    visit(tree, (node) => {
      if (node.type === "element" && document.createElement(node.tagName) instanceof HTMLUnknownElement) {
        node.properties._tagName = node.tagName;
        node.tagName = "custom";
      }
    });
  };
}
function SearchDialog({ open, onOpenChange, search, onSearchChange, isLoading = false, onSelect: onSelectProp, children }) {
  const router = useRouter();
  const onOpenChangeCallback = useRef(onOpenChange);
  onOpenChangeCallback.current = onOpenChange;
  const onSearchChangeCallback = useRef(onSearchChange);
  onSearchChangeCallback.current = onSearchChange;
  const onSelect = (item) => {
    if (item.type === "action") item.onSelect();
    else if (item.external) window.open(item.url, "_blank")?.focus();
    else router.push(item.url);
    onOpenChange(false);
    onSelectProp?.(item);
  };
  const onSelectCallback = useRef(onSelect);
  onSelectCallback.current = onSelect;
  return /* @__PURE__ */ jsx(Dialog, {
    open,
    onOpenChange,
    children: /* @__PURE__ */ jsx(RootContext, {
      value: useMemo(() => ({
        open,
        search,
        isLoading,
        onOpenChange: (v) => onOpenChangeCallback.current(v),
        onSearchChange: (v) => onSearchChangeCallback.current(v),
        onSelect: (v) => onSelectCallback.current(v)
      }), [
        isLoading,
        open,
        search
      ]),
      children
    })
  });
}
function SearchDialogHeader(props) {
  return /* @__PURE__ */ jsx("div", {
    ...props,
    className: twMerge("flex flex-row items-center gap-2 p-3", props.className)
  });
}
function SearchDialogInput(props) {
  const { text } = useI18n();
  const { search, onSearchChange } = useSearch();
  return /* @__PURE__ */ jsx("input", {
    ...props,
    value: search,
    onChange: (e) => onSearchChange(e.target.value),
    placeholder: text.search,
    className: "w-0 flex-1 bg-transparent text-lg placeholder:text-fd-muted-foreground focus-visible:outline-none"
  });
}
function SearchDialogClose({ children = "ESC", className, ...props }) {
  const { onOpenChange } = useSearch();
  return /* @__PURE__ */ jsx("button", {
    type: "button",
    onClick: () => onOpenChange(false),
    className: twMerge(buttonVariants({
      color: "outline",
      size: "sm",
      className: "font-mono text-fd-muted-foreground"
    }), className),
    ...props,
    children
  });
}
function SearchDialogFooter(props) {
  return /* @__PURE__ */ jsx("div", {
    ...props,
    className: twMerge("bg-fd-secondary/50 p-3 empty:hidden", props.className)
  });
}
function SearchDialogOverlay(props) {
  return /* @__PURE__ */ jsx(DialogOverlay, {
    ...props,
    className: twMerge("fixed inset-0 z-50 backdrop-blur-xs bg-fd-overlay data-[state=open]:animate-fd-fade-in data-[state=closed]:animate-fd-fade-out", props.className)
  });
}
function SearchDialogContent({ children, ...props }) {
  const { text } = useI18n();
  return /* @__PURE__ */ jsxs(DialogContent, {
    "aria-describedby": void 0,
    ...props,
    className: twMerge("fixed left-1/2 top-4 md:top-[calc(50%-250px)] z-50 w-[calc(100%-1rem)] max-w-screen-sm -translate-x-1/2 rounded-xl border bg-fd-popover text-fd-popover-foreground shadow-2xl shadow-black/50 overflow-hidden data-[state=closed]:animate-fd-dialog-out data-[state=open]:animate-fd-dialog-in", "*:border-b *:has-[+:last-child[data-empty=true]]:border-b-0 *:data-[empty=true]:border-b-0 *:last:border-b-0", props.className),
    children: [/* @__PURE__ */ jsx(DialogTitle, {
      className: "hidden",
      children: text.search
    }), children]
  });
}
function SearchDialogList({ items = null, Empty = () => /* @__PURE__ */ jsx("div", {
  className: "py-12 text-center text-sm text-fd-muted-foreground",
  children: /* @__PURE__ */ jsx(I18nLabel, { label: "searchNoResult" })
}), Item = (props2) => /* @__PURE__ */ jsx(SearchDialogListItem, { ...props2 }), ...props }) {
  const ref = useRef(null);
  const { onSelect } = useSearch();
  const [active, setActive] = useState(() => items && items.length > 0 ? items[0].id : null);
  const onKey = useEffectEvent((e) => {
    if (!items || e.isComposing) return;
    if (e.key === "ArrowDown" || e.key == "ArrowUp") {
      let idx = items.findIndex((item) => item.id === active);
      if (idx === -1) idx = 0;
      else if (e.key === "ArrowDown") idx++;
      else idx--;
      setActive(items.at(idx % items.length)?.id ?? null);
      e.preventDefault();
    }
    if (e.key === "Enter") {
      const selected = items.find((item) => item.id === active);
      if (selected) onSelect(selected);
      e.preventDefault();
    }
  });
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new ResizeObserver(() => {
      const viewport2 = element.firstElementChild;
      element.style.setProperty("--fd-animated-height", `${viewport2.clientHeight}px`);
    });
    const viewport = element.firstElementChild;
    if (viewport) observer.observe(viewport);
    window.addEventListener("keydown", onKey);
    return () => {
      observer.disconnect();
      window.removeEventListener("keydown", onKey);
    };
  }, []);
  useOnChange(items, () => {
    if (items && items.length > 0) setActive(items[0].id);
  });
  return /* @__PURE__ */ jsx("div", {
    ...props,
    ref,
    "data-empty": items === null,
    className: twMerge("overflow-hidden h-(--fd-animated-height) transition-[height]", props.className),
    children: /* @__PURE__ */ jsx("div", {
      className: twMerge("w-full flex flex-col overflow-y-auto max-h-[460px] p-1", !items && "hidden"),
      children: /* @__PURE__ */ jsxs(ListContext, {
        value: useMemo(() => ({
          active,
          setActive
        }), [active]),
        children: [items?.length === 0 && Empty(), items?.map((item) => /* @__PURE__ */ jsx(Fragment$1, { children: Item({
          item,
          onClick: () => onSelect(item)
        }) }, item.id))]
      })
    })
  });
}
function SearchDialogListItem({ item, className, children, renderMarkdown = (s) => /* @__PURE__ */ jsx(mdRenderer.Markdown, {
  components: mdComponents,
  children: s
}), renderHighlights: _, ...props }) {
  const { active: activeId, setActive } = useSearchList();
  const active = item.id === activeId;
  if (item.type === "action") children ??= item.node;
  else children ??= /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", {
      className: "inline-flex items-center text-fd-muted-foreground text-xs empty:hidden",
      children: item.breadcrumbs?.map((item2, i) => /* @__PURE__ */ jsxs(Fragment$1, { children: [i > 0 && /* @__PURE__ */ jsx(ChevronRight, { className: "size-4 rtl:rotate-180" }), item2] }, i))
    }),
    item.type !== "page" && /* @__PURE__ */ jsx("div", {
      role: "none",
      className: "absolute start-3 inset-y-0 w-px bg-fd-border"
    }),
    item.type === "heading" && /* @__PURE__ */ jsx(Hash, { className: "absolute start-6 top-2.5 size-4 text-fd-muted-foreground" }),
    /* @__PURE__ */ jsx("div", {
      className: twMerge("min-w-0", item.type === "text" && "ps-4", item.type === "heading" && "ps-8", item.type === "page" || item.type === "heading" ? "font-medium" : "text-fd-popover-foreground/80"),
      children: typeof item.content === "string" ? renderMarkdown(item.content) : item.content
    })
  ] });
  return /* @__PURE__ */ jsx("button", {
    type: "button",
    ref: useCallback((element) => {
      if (active && element) scrollIntoView(element, {
        scrollMode: "if-needed",
        block: "nearest",
        boundary: element.parentElement
      });
    }, [active]),
    "aria-selected": active,
    className: twMerge("relative select-none shrink-0 px-2.5 py-2 text-start text-sm overflow-hidden rounded-lg", active && "bg-fd-accent text-fd-accent-foreground", className),
    onPointerMove: () => setActive(item.id),
    ...props,
    children
  });
}
function SearchDialogIcon(props) {
  const { isLoading } = useSearch();
  return /* @__PURE__ */ jsx(Search, {
    ...props,
    className: twMerge("size-5 text-fd-muted-foreground", isLoading && "animate-pulse duration-400", props.className)
  });
}
const itemVariants = cva("rounded-md border px-2 py-0.5 text-xs font-medium text-fd-muted-foreground transition-colors", { variants: { active: { true: "bg-fd-accent text-fd-accent-foreground" } } });
function TagsList({ tag, onTagChange, allowClear = false, ...props }) {
  const onTagChangeCallback = useRef(onTagChange);
  onTagChangeCallback.current = onTagChange;
  return /* @__PURE__ */ jsx("div", {
    ...props,
    className: twMerge("flex items-center gap-1 flex-wrap", props.className),
    children: /* @__PURE__ */ jsx(TagsListContext, {
      value: useMemo(() => ({
        value: tag,
        onValueChange: (v) => onTagChangeCallback.current(v),
        allowClear
      }), [allowClear, tag]),
      children: props.children
    })
  });
}
function TagsListItem({ value, className, ...props }) {
  const { onValueChange, value: selectedValue, allowClear } = useTagsList();
  const selected = value === selectedValue;
  return /* @__PURE__ */ jsx("button", {
    type: "button",
    "data-active": selected,
    className: twMerge(itemVariants({
      active: selected,
      className
    })),
    onClick: () => onValueChange(selected && allowClear ? void 0 : value),
    tabIndex: -1,
    ...props,
    children: props.children
  });
}
function useSearch() {
  const ctx = use(RootContext);
  if (!ctx) throw new Error("Missing <SearchDialog />");
  return ctx;
}
function useTagsList() {
  const ctx = use(TagsListContext);
  if (!ctx) throw new Error("Missing <TagsList />");
  return ctx;
}
function useSearchList() {
  const ctx = use(ListContext);
  if (!ctx) throw new Error("Missing <SearchDialogList />");
  return ctx;
}
function useDebounce(value, delayMs = 1e3) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    if (delayMs === 0) return;
    const handler = window.setTimeout(() => {
      setDebouncedValue(value);
    }, delayMs);
    return () => clearTimeout(handler);
  }, [delayMs, value]);
  if (delayMs === 0) return value;
  return debouncedValue;
}
function isDeepEqual(a, b) {
  if (a === b) return true;
  if (Array.isArray(a) && Array.isArray(b)) return b.length === a.length && a.every((v, i) => isDeepEqual(v, b[i]));
  if (typeof a === "object" && a && typeof b === "object" && b) {
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    return aKeys.length === bKeys.length && aKeys.every((key) => Object.hasOwn(b, key) && isDeepEqual(a[key], b[key]));
  }
  return false;
}
function useDocsSearch(clientOptions, deps) {
  const { delayMs = 100, allowEmpty = false, ...client } = clientOptions;
  const [search, setSearch] = useState("");
  const [results, setResults] = useState("empty");
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const debouncedValue = useDebounce(search, delayMs);
  const onStart = useRef(void 0);
  useOnChange([clientOptions, debouncedValue], () => {
    if (onStart.current) {
      onStart.current();
      onStart.current = void 0;
    }
    setIsLoading(true);
    let interrupt = false;
    onStart.current = () => {
      interrupt = true;
    };
    async function run() {
      if (debouncedValue.length === 0 && !allowEmpty) return "empty";
      switch (client.type) {
        case "fetch": {
          const { fetchDocs } = await import("./fetch-D_OY-eAB-CII4epom.js");
          return fetchDocs(debouncedValue, client);
        }
        case "algolia": {
          const { searchDocs } = await import("./algolia-CfKKhsrI-D2uR3aId.js");
          return searchDocs(debouncedValue, client);
        }
        case "orama-cloud": {
          const { searchDocs } = await import("./orama-cloud-cgTJNLo0-BVBjUpME.js");
          return searchDocs(debouncedValue, client);
        }
        case "orama-cloud-legacy": {
          const { searchDocs } = await import("./orama-cloud-legacy-Caf8mcU9-CJPwyPL7.js");
          return searchDocs(debouncedValue, client);
        }
        case "mixedbread": {
          const { search: search2 } = await import("./mixedbread-TBJmV3co-BLQPL2cH.js");
          return search2(debouncedValue, client);
        }
        case "static": {
          const { search: search2 } = await import("./static-BUXJwBmr-CyrEwyPq.js");
          return search2(debouncedValue, client);
        }
        default:
          throw new Error("unknown search client");
      }
    }
    run().then((res) => {
      if (interrupt) return;
      setError(void 0);
      setResults(res);
    }).catch((err) => {
      setError(err);
    }).finally(() => {
      setIsLoading(false);
    });
  }, (a, b) => !isDeepEqual(a, b));
  return {
    search,
    setSearch,
    query: {
      isLoading,
      data: results,
      error
    }
  };
}
function DefaultSearchDialog({ defaultTag, tags = [], api, delayMs, type = "fetch", allowClear = false, links = [], footer, ...props }) {
  const { locale } = useI18n();
  const [tag, setTag] = useState(defaultTag);
  const { search, setSearch, query } = useDocsSearch(type === "fetch" ? {
    type: "fetch",
    api,
    locale,
    tag,
    delayMs
  } : {
    type: "static",
    from: api,
    locale,
    tag,
    delayMs
  });
  const defaultItems = useMemo(() => {
    if (links.length === 0) return null;
    return links.map(([name, link]) => ({
      type: "page",
      id: name,
      content: name,
      url: link
    }));
  }, [links]);
  useOnChange(defaultTag, (v) => {
    setTag(v);
  });
  return /* @__PURE__ */ jsxs(SearchDialog, {
    search,
    onSearchChange: setSearch,
    isLoading: query.isLoading,
    ...props,
    children: [
      /* @__PURE__ */ jsx(SearchDialogOverlay, {}),
      /* @__PURE__ */ jsxs(SearchDialogContent, { children: [/* @__PURE__ */ jsxs(SearchDialogHeader, { children: [
        /* @__PURE__ */ jsx(SearchDialogIcon, {}),
        /* @__PURE__ */ jsx(SearchDialogInput, {}),
        /* @__PURE__ */ jsx(SearchDialogClose, {})
      ] }), /* @__PURE__ */ jsx(SearchDialogList, { items: query.data !== "empty" ? query.data : defaultItems })] }),
      /* @__PURE__ */ jsxs(SearchDialogFooter, { children: [tags.length > 0 && /* @__PURE__ */ jsx(TagsList, {
        tag,
        onTagChange: setTag,
        allowClear,
        children: tags.map((tag2) => /* @__PURE__ */ jsx(TagsListItem, {
          value: tag2.value,
          children: tag2.name
        }, tag2.value))
      }), footer] })
    ]
  });
}
export {
  DefaultSearchDialog as default
};
