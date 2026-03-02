import { c as createLucideIcon, j as jsxRuntimeExports, a as composeRefs, u as useControllableState, b as useId, P as Presence, d as Primitive, R as ReactRemoveScroll, e as useComposedRefs, h as hideOthers, f as composeEventHandlers, g as createContextScope, i as useFocusGuards, F as FocusScope, D as DismissableLayer, k as createContext2, J as JsxRuntime, l as useRouter, t as twMerge, m as useI18n, S as Search, n as buttonVariants, o as useOnChange, I as I18nLabel, C as ChevronRight, p as e, q as cva } from "./worker-entry-BBknJ_Jh.js";
import { r as reactExports, g as getDefaultExportFromCjs } from "../index.js";
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
  const Slot2 = reactExports.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    const childrenArray = reactExports.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (reactExports.Children.count(newElement) > 1) return reactExports.Children.only(null);
          return reactExports.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return /* @__PURE__ */ jsxRuntimeExports.jsx(SlotClone, { ...slotProps, ref: forwardedRef, children: reactExports.isValidElement(newElement) ? reactExports.cloneElement(newElement, void 0, newChildren) : null });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(SlotClone, { ...slotProps, ref: forwardedRef, children });
  });
  Slot2.displayName = `${ownerName}.Slot`;
  return Slot2;
}
// @__NO_SIDE_EFFECTS__
function createSlotClone(ownerName) {
  const SlotClone = reactExports.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    if (reactExports.isValidElement(children)) {
      const childrenRef = getElementRef(children);
      const props2 = mergeProps(slotProps, children.props);
      if (children.type !== reactExports.Fragment) {
        props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
      }
      return reactExports.cloneElement(children, props2);
    }
    return reactExports.Children.count(children) > 1 ? reactExports.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var SLOTTABLE_IDENTIFIER = /* @__PURE__ */ Symbol("radix.slottable");
function isSlottable(child) {
  return reactExports.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
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
function getElementRef(element2) {
  let getter = Object.getOwnPropertyDescriptor(element2.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element2.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element2, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element2.props.ref;
  }
  return element2.props.ref || element2.ref;
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
  const triggerRef = reactExports.useRef(null);
  const contentRef = reactExports.useRef(null);
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen ?? false,
    onChange: onOpenChange,
    caller: DIALOG_NAME
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
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
      onOpenToggle: reactExports.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
      modal,
      children
    }
  );
};
Dialog.displayName = DIALOG_NAME;
var TRIGGER_NAME = "DialogTrigger";
var DialogTrigger = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...triggerProps } = props;
    const context = useDialogContext(TRIGGER_NAME, __scopeDialog);
    const composedTriggerRef = useComposedRefs(forwardedRef, context.triggerRef);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
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
var DialogOverlay = reactExports.forwardRef(
  (props, forwardedRef) => {
    const portalContext = usePortalContext(OVERLAY_NAME, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...overlayProps } = props;
    const context = useDialogContext(OVERLAY_NAME, props.__scopeDialog);
    return context.modal ? /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlayImpl, { ...overlayProps, ref: forwardedRef }) }) : null;
  }
);
DialogOverlay.displayName = OVERLAY_NAME;
var Slot = /* @__PURE__ */ createSlot("DialogOverlay.RemoveScroll");
var DialogOverlayImpl = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...overlayProps } = props;
    const context = useDialogContext(OVERLAY_NAME, __scopeDialog);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ jsxRuntimeExports.jsx(ReactRemoveScroll, { as: Slot, allowPinchZoom: true, shards: [context.contentRef], children: /* @__PURE__ */ jsxRuntimeExports.jsx(
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
var DialogContent = reactExports.forwardRef(
  (props, forwardedRef) => {
    const portalContext = usePortalContext(CONTENT_NAME, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || context.open, children: context.modal ? /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContentModal, { ...contentProps, ref: forwardedRef }) : /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContentNonModal, { ...contentProps, ref: forwardedRef }) });
  }
);
DialogContent.displayName = CONTENT_NAME;
var DialogContentModal = reactExports.forwardRef(
  (props, forwardedRef) => {
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    const contentRef = reactExports.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, context.contentRef, contentRef);
    reactExports.useEffect(() => {
      const content2 = contentRef.current;
      if (content2) return hideOthers(content2);
    }, []);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
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
var DialogContentNonModal = reactExports.forwardRef(
  (props, forwardedRef) => {
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    const hasInteractedOutsideRef = reactExports.useRef(false);
    const hasPointerDownOutsideRef = reactExports.useRef(false);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
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
var DialogContentImpl = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus, ...contentProps } = props;
    const context = useDialogContext(CONTENT_NAME, __scopeDialog);
    const contentRef = reactExports.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, contentRef);
    useFocusGuards();
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FocusScope,
        {
          asChild: true,
          loop: true,
          trapped: trapFocus,
          onMountAutoFocus: onOpenAutoFocus,
          onUnmountAutoFocus: onCloseAutoFocus,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
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
      /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TitleWarning, { titleId: context.titleId }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DescriptionWarning, { contentRef, descriptionId: context.descriptionId })
      ] })
    ] });
  }
);
var TITLE_NAME = "DialogTitle";
var DialogTitle = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...titleProps } = props;
    const context = useDialogContext(TITLE_NAME, __scopeDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.h2, { id: context.titleId, ...titleProps, ref: forwardedRef });
  }
);
DialogTitle.displayName = TITLE_NAME;
var DESCRIPTION_NAME = "DialogDescription";
var DialogDescription = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...descriptionProps } = props;
    const context = useDialogContext(DESCRIPTION_NAME, __scopeDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.p, { id: context.descriptionId, ...descriptionProps, ref: forwardedRef });
  }
);
DialogDescription.displayName = DESCRIPTION_NAME;
var CLOSE_NAME = "DialogClose";
var DialogClose = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...closeProps } = props;
    const context = useDialogContext(CLOSE_NAME, __scopeDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
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
  reactExports.useEffect(() => {
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
  reactExports.useEffect(() => {
    const describedById = contentRef.current?.getAttribute("aria-describedby");
    if (descriptionId && describedById) {
      const hasDescription = document.getElementById(descriptionId);
      if (!hasDescription) console.warn(MESSAGE);
    }
  }, [MESSAGE, contentRef, descriptionId]);
  return null;
};
const emptyOptions$3 = {};
function toString$1(value, options) {
  const settings = emptyOptions$3;
  const includeImageAlt = typeof settings.includeImageAlt === "boolean" ? settings.includeImageAlt : true;
  const includeHtml = typeof settings.includeHtml === "boolean" ? settings.includeHtml : true;
  return one$3(value, includeImageAlt, includeHtml);
}
function one$3(value, includeImageAlt, includeHtml) {
  if (node(value)) {
    if ("value" in value) {
      return value.type === "html" && !includeHtml ? "" : value.value;
    }
    if (includeImageAlt && "alt" in value && value.alt) {
      return value.alt;
    }
    if ("children" in value) {
      return all$3(value.children, includeImageAlt, includeHtml);
    }
  }
  if (Array.isArray(value)) {
    return all$3(value, includeImageAlt, includeHtml);
  }
  return "";
}
function all$3(values, includeImageAlt, includeHtml) {
  const result = [];
  let index2 = -1;
  while (++index2 < values.length) {
    result[index2] = one$3(values[index2], includeImageAlt, includeHtml);
  }
  return result.join("");
}
function node(value) {
  return Boolean(value && typeof value === "object");
}
const characterEntities = {
  AElig: "Æ",
  AMP: "&",
  Aacute: "Á",
  Abreve: "Ă",
  Acirc: "Â",
  Acy: "А",
  Afr: "𝔄",
  Agrave: "À",
  Alpha: "Α",
  Amacr: "Ā",
  And: "⩓",
  Aogon: "Ą",
  Aopf: "𝔸",
  ApplyFunction: "⁡",
  Aring: "Å",
  Ascr: "𝒜",
  Assign: "≔",
  Atilde: "Ã",
  Auml: "Ä",
  Backslash: "∖",
  Barv: "⫧",
  Barwed: "⌆",
  Bcy: "Б",
  Because: "∵",
  Bernoullis: "ℬ",
  Beta: "Β",
  Bfr: "𝔅",
  Bopf: "𝔹",
  Breve: "˘",
  Bscr: "ℬ",
  Bumpeq: "≎",
  CHcy: "Ч",
  COPY: "©",
  Cacute: "Ć",
  Cap: "⋒",
  CapitalDifferentialD: "ⅅ",
  Cayleys: "ℭ",
  Ccaron: "Č",
  Ccedil: "Ç",
  Ccirc: "Ĉ",
  Cconint: "∰",
  Cdot: "Ċ",
  Cedilla: "¸",
  CenterDot: "·",
  Cfr: "ℭ",
  Chi: "Χ",
  CircleDot: "⊙",
  CircleMinus: "⊖",
  CirclePlus: "⊕",
  CircleTimes: "⊗",
  ClockwiseContourIntegral: "∲",
  CloseCurlyDoubleQuote: "”",
  CloseCurlyQuote: "’",
  Colon: "∷",
  Colone: "⩴",
  Congruent: "≡",
  Conint: "∯",
  ContourIntegral: "∮",
  Copf: "ℂ",
  Coproduct: "∐",
  CounterClockwiseContourIntegral: "∳",
  Cross: "⨯",
  Cscr: "𝒞",
  Cup: "⋓",
  CupCap: "≍",
  DD: "ⅅ",
  DDotrahd: "⤑",
  DJcy: "Ђ",
  DScy: "Ѕ",
  DZcy: "Џ",
  Dagger: "‡",
  Darr: "↡",
  Dashv: "⫤",
  Dcaron: "Ď",
  Dcy: "Д",
  Del: "∇",
  Delta: "Δ",
  Dfr: "𝔇",
  DiacriticalAcute: "´",
  DiacriticalDot: "˙",
  DiacriticalDoubleAcute: "˝",
  DiacriticalGrave: "`",
  DiacriticalTilde: "˜",
  Diamond: "⋄",
  DifferentialD: "ⅆ",
  Dopf: "𝔻",
  Dot: "¨",
  DotDot: "⃜",
  DotEqual: "≐",
  DoubleContourIntegral: "∯",
  DoubleDot: "¨",
  DoubleDownArrow: "⇓",
  DoubleLeftArrow: "⇐",
  DoubleLeftRightArrow: "⇔",
  DoubleLeftTee: "⫤",
  DoubleLongLeftArrow: "⟸",
  DoubleLongLeftRightArrow: "⟺",
  DoubleLongRightArrow: "⟹",
  DoubleRightArrow: "⇒",
  DoubleRightTee: "⊨",
  DoubleUpArrow: "⇑",
  DoubleUpDownArrow: "⇕",
  DoubleVerticalBar: "∥",
  DownArrow: "↓",
  DownArrowBar: "⤓",
  DownArrowUpArrow: "⇵",
  DownBreve: "̑",
  DownLeftRightVector: "⥐",
  DownLeftTeeVector: "⥞",
  DownLeftVector: "↽",
  DownLeftVectorBar: "⥖",
  DownRightTeeVector: "⥟",
  DownRightVector: "⇁",
  DownRightVectorBar: "⥗",
  DownTee: "⊤",
  DownTeeArrow: "↧",
  Downarrow: "⇓",
  Dscr: "𝒟",
  Dstrok: "Đ",
  ENG: "Ŋ",
  ETH: "Ð",
  Eacute: "É",
  Ecaron: "Ě",
  Ecirc: "Ê",
  Ecy: "Э",
  Edot: "Ė",
  Efr: "𝔈",
  Egrave: "È",
  Element: "∈",
  Emacr: "Ē",
  EmptySmallSquare: "◻",
  EmptyVerySmallSquare: "▫",
  Eogon: "Ę",
  Eopf: "𝔼",
  Epsilon: "Ε",
  Equal: "⩵",
  EqualTilde: "≂",
  Equilibrium: "⇌",
  Escr: "ℰ",
  Esim: "⩳",
  Eta: "Η",
  Euml: "Ë",
  Exists: "∃",
  ExponentialE: "ⅇ",
  Fcy: "Ф",
  Ffr: "𝔉",
  FilledSmallSquare: "◼",
  FilledVerySmallSquare: "▪",
  Fopf: "𝔽",
  ForAll: "∀",
  Fouriertrf: "ℱ",
  Fscr: "ℱ",
  GJcy: "Ѓ",
  GT: ">",
  Gamma: "Γ",
  Gammad: "Ϝ",
  Gbreve: "Ğ",
  Gcedil: "Ģ",
  Gcirc: "Ĝ",
  Gcy: "Г",
  Gdot: "Ġ",
  Gfr: "𝔊",
  Gg: "⋙",
  Gopf: "𝔾",
  GreaterEqual: "≥",
  GreaterEqualLess: "⋛",
  GreaterFullEqual: "≧",
  GreaterGreater: "⪢",
  GreaterLess: "≷",
  GreaterSlantEqual: "⩾",
  GreaterTilde: "≳",
  Gscr: "𝒢",
  Gt: "≫",
  HARDcy: "Ъ",
  Hacek: "ˇ",
  Hat: "^",
  Hcirc: "Ĥ",
  Hfr: "ℌ",
  HilbertSpace: "ℋ",
  Hopf: "ℍ",
  HorizontalLine: "─",
  Hscr: "ℋ",
  Hstrok: "Ħ",
  HumpDownHump: "≎",
  HumpEqual: "≏",
  IEcy: "Е",
  IJlig: "Ĳ",
  IOcy: "Ё",
  Iacute: "Í",
  Icirc: "Î",
  Icy: "И",
  Idot: "İ",
  Ifr: "ℑ",
  Igrave: "Ì",
  Im: "ℑ",
  Imacr: "Ī",
  ImaginaryI: "ⅈ",
  Implies: "⇒",
  Int: "∬",
  Integral: "∫",
  Intersection: "⋂",
  InvisibleComma: "⁣",
  InvisibleTimes: "⁢",
  Iogon: "Į",
  Iopf: "𝕀",
  Iota: "Ι",
  Iscr: "ℐ",
  Itilde: "Ĩ",
  Iukcy: "І",
  Iuml: "Ï",
  Jcirc: "Ĵ",
  Jcy: "Й",
  Jfr: "𝔍",
  Jopf: "𝕁",
  Jscr: "𝒥",
  Jsercy: "Ј",
  Jukcy: "Є",
  KHcy: "Х",
  KJcy: "Ќ",
  Kappa: "Κ",
  Kcedil: "Ķ",
  Kcy: "К",
  Kfr: "𝔎",
  Kopf: "𝕂",
  Kscr: "𝒦",
  LJcy: "Љ",
  LT: "<",
  Lacute: "Ĺ",
  Lambda: "Λ",
  Lang: "⟪",
  Laplacetrf: "ℒ",
  Larr: "↞",
  Lcaron: "Ľ",
  Lcedil: "Ļ",
  Lcy: "Л",
  LeftAngleBracket: "⟨",
  LeftArrow: "←",
  LeftArrowBar: "⇤",
  LeftArrowRightArrow: "⇆",
  LeftCeiling: "⌈",
  LeftDoubleBracket: "⟦",
  LeftDownTeeVector: "⥡",
  LeftDownVector: "⇃",
  LeftDownVectorBar: "⥙",
  LeftFloor: "⌊",
  LeftRightArrow: "↔",
  LeftRightVector: "⥎",
  LeftTee: "⊣",
  LeftTeeArrow: "↤",
  LeftTeeVector: "⥚",
  LeftTriangle: "⊲",
  LeftTriangleBar: "⧏",
  LeftTriangleEqual: "⊴",
  LeftUpDownVector: "⥑",
  LeftUpTeeVector: "⥠",
  LeftUpVector: "↿",
  LeftUpVectorBar: "⥘",
  LeftVector: "↼",
  LeftVectorBar: "⥒",
  Leftarrow: "⇐",
  Leftrightarrow: "⇔",
  LessEqualGreater: "⋚",
  LessFullEqual: "≦",
  LessGreater: "≶",
  LessLess: "⪡",
  LessSlantEqual: "⩽",
  LessTilde: "≲",
  Lfr: "𝔏",
  Ll: "⋘",
  Lleftarrow: "⇚",
  Lmidot: "Ŀ",
  LongLeftArrow: "⟵",
  LongLeftRightArrow: "⟷",
  LongRightArrow: "⟶",
  Longleftarrow: "⟸",
  Longleftrightarrow: "⟺",
  Longrightarrow: "⟹",
  Lopf: "𝕃",
  LowerLeftArrow: "↙",
  LowerRightArrow: "↘",
  Lscr: "ℒ",
  Lsh: "↰",
  Lstrok: "Ł",
  Lt: "≪",
  Map: "⤅",
  Mcy: "М",
  MediumSpace: " ",
  Mellintrf: "ℳ",
  Mfr: "𝔐",
  MinusPlus: "∓",
  Mopf: "𝕄",
  Mscr: "ℳ",
  Mu: "Μ",
  NJcy: "Њ",
  Nacute: "Ń",
  Ncaron: "Ň",
  Ncedil: "Ņ",
  Ncy: "Н",
  NegativeMediumSpace: "​",
  NegativeThickSpace: "​",
  NegativeThinSpace: "​",
  NegativeVeryThinSpace: "​",
  NestedGreaterGreater: "≫",
  NestedLessLess: "≪",
  NewLine: "\n",
  Nfr: "𝔑",
  NoBreak: "⁠",
  NonBreakingSpace: " ",
  Nopf: "ℕ",
  Not: "⫬",
  NotCongruent: "≢",
  NotCupCap: "≭",
  NotDoubleVerticalBar: "∦",
  NotElement: "∉",
  NotEqual: "≠",
  NotEqualTilde: "≂̸",
  NotExists: "∄",
  NotGreater: "≯",
  NotGreaterEqual: "≱",
  NotGreaterFullEqual: "≧̸",
  NotGreaterGreater: "≫̸",
  NotGreaterLess: "≹",
  NotGreaterSlantEqual: "⩾̸",
  NotGreaterTilde: "≵",
  NotHumpDownHump: "≎̸",
  NotHumpEqual: "≏̸",
  NotLeftTriangle: "⋪",
  NotLeftTriangleBar: "⧏̸",
  NotLeftTriangleEqual: "⋬",
  NotLess: "≮",
  NotLessEqual: "≰",
  NotLessGreater: "≸",
  NotLessLess: "≪̸",
  NotLessSlantEqual: "⩽̸",
  NotLessTilde: "≴",
  NotNestedGreaterGreater: "⪢̸",
  NotNestedLessLess: "⪡̸",
  NotPrecedes: "⊀",
  NotPrecedesEqual: "⪯̸",
  NotPrecedesSlantEqual: "⋠",
  NotReverseElement: "∌",
  NotRightTriangle: "⋫",
  NotRightTriangleBar: "⧐̸",
  NotRightTriangleEqual: "⋭",
  NotSquareSubset: "⊏̸",
  NotSquareSubsetEqual: "⋢",
  NotSquareSuperset: "⊐̸",
  NotSquareSupersetEqual: "⋣",
  NotSubset: "⊂⃒",
  NotSubsetEqual: "⊈",
  NotSucceeds: "⊁",
  NotSucceedsEqual: "⪰̸",
  NotSucceedsSlantEqual: "⋡",
  NotSucceedsTilde: "≿̸",
  NotSuperset: "⊃⃒",
  NotSupersetEqual: "⊉",
  NotTilde: "≁",
  NotTildeEqual: "≄",
  NotTildeFullEqual: "≇",
  NotTildeTilde: "≉",
  NotVerticalBar: "∤",
  Nscr: "𝒩",
  Ntilde: "Ñ",
  Nu: "Ν",
  OElig: "Œ",
  Oacute: "Ó",
  Ocirc: "Ô",
  Ocy: "О",
  Odblac: "Ő",
  Ofr: "𝔒",
  Ograve: "Ò",
  Omacr: "Ō",
  Omega: "Ω",
  Omicron: "Ο",
  Oopf: "𝕆",
  OpenCurlyDoubleQuote: "“",
  OpenCurlyQuote: "‘",
  Or: "⩔",
  Oscr: "𝒪",
  Oslash: "Ø",
  Otilde: "Õ",
  Otimes: "⨷",
  Ouml: "Ö",
  OverBar: "‾",
  OverBrace: "⏞",
  OverBracket: "⎴",
  OverParenthesis: "⏜",
  PartialD: "∂",
  Pcy: "П",
  Pfr: "𝔓",
  Phi: "Φ",
  Pi: "Π",
  PlusMinus: "±",
  Poincareplane: "ℌ",
  Popf: "ℙ",
  Pr: "⪻",
  Precedes: "≺",
  PrecedesEqual: "⪯",
  PrecedesSlantEqual: "≼",
  PrecedesTilde: "≾",
  Prime: "″",
  Product: "∏",
  Proportion: "∷",
  Proportional: "∝",
  Pscr: "𝒫",
  Psi: "Ψ",
  QUOT: '"',
  Qfr: "𝔔",
  Qopf: "ℚ",
  Qscr: "𝒬",
  RBarr: "⤐",
  REG: "®",
  Racute: "Ŕ",
  Rang: "⟫",
  Rarr: "↠",
  Rarrtl: "⤖",
  Rcaron: "Ř",
  Rcedil: "Ŗ",
  Rcy: "Р",
  Re: "ℜ",
  ReverseElement: "∋",
  ReverseEquilibrium: "⇋",
  ReverseUpEquilibrium: "⥯",
  Rfr: "ℜ",
  Rho: "Ρ",
  RightAngleBracket: "⟩",
  RightArrow: "→",
  RightArrowBar: "⇥",
  RightArrowLeftArrow: "⇄",
  RightCeiling: "⌉",
  RightDoubleBracket: "⟧",
  RightDownTeeVector: "⥝",
  RightDownVector: "⇂",
  RightDownVectorBar: "⥕",
  RightFloor: "⌋",
  RightTee: "⊢",
  RightTeeArrow: "↦",
  RightTeeVector: "⥛",
  RightTriangle: "⊳",
  RightTriangleBar: "⧐",
  RightTriangleEqual: "⊵",
  RightUpDownVector: "⥏",
  RightUpTeeVector: "⥜",
  RightUpVector: "↾",
  RightUpVectorBar: "⥔",
  RightVector: "⇀",
  RightVectorBar: "⥓",
  Rightarrow: "⇒",
  Ropf: "ℝ",
  RoundImplies: "⥰",
  Rrightarrow: "⇛",
  Rscr: "ℛ",
  Rsh: "↱",
  RuleDelayed: "⧴",
  SHCHcy: "Щ",
  SHcy: "Ш",
  SOFTcy: "Ь",
  Sacute: "Ś",
  Sc: "⪼",
  Scaron: "Š",
  Scedil: "Ş",
  Scirc: "Ŝ",
  Scy: "С",
  Sfr: "𝔖",
  ShortDownArrow: "↓",
  ShortLeftArrow: "←",
  ShortRightArrow: "→",
  ShortUpArrow: "↑",
  Sigma: "Σ",
  SmallCircle: "∘",
  Sopf: "𝕊",
  Sqrt: "√",
  Square: "□",
  SquareIntersection: "⊓",
  SquareSubset: "⊏",
  SquareSubsetEqual: "⊑",
  SquareSuperset: "⊐",
  SquareSupersetEqual: "⊒",
  SquareUnion: "⊔",
  Sscr: "𝒮",
  Star: "⋆",
  Sub: "⋐",
  Subset: "⋐",
  SubsetEqual: "⊆",
  Succeeds: "≻",
  SucceedsEqual: "⪰",
  SucceedsSlantEqual: "≽",
  SucceedsTilde: "≿",
  SuchThat: "∋",
  Sum: "∑",
  Sup: "⋑",
  Superset: "⊃",
  SupersetEqual: "⊇",
  Supset: "⋑",
  THORN: "Þ",
  TRADE: "™",
  TSHcy: "Ћ",
  TScy: "Ц",
  Tab: "	",
  Tau: "Τ",
  Tcaron: "Ť",
  Tcedil: "Ţ",
  Tcy: "Т",
  Tfr: "𝔗",
  Therefore: "∴",
  Theta: "Θ",
  ThickSpace: "  ",
  ThinSpace: " ",
  Tilde: "∼",
  TildeEqual: "≃",
  TildeFullEqual: "≅",
  TildeTilde: "≈",
  Topf: "𝕋",
  TripleDot: "⃛",
  Tscr: "𝒯",
  Tstrok: "Ŧ",
  Uacute: "Ú",
  Uarr: "↟",
  Uarrocir: "⥉",
  Ubrcy: "Ў",
  Ubreve: "Ŭ",
  Ucirc: "Û",
  Ucy: "У",
  Udblac: "Ű",
  Ufr: "𝔘",
  Ugrave: "Ù",
  Umacr: "Ū",
  UnderBar: "_",
  UnderBrace: "⏟",
  UnderBracket: "⎵",
  UnderParenthesis: "⏝",
  Union: "⋃",
  UnionPlus: "⊎",
  Uogon: "Ų",
  Uopf: "𝕌",
  UpArrow: "↑",
  UpArrowBar: "⤒",
  UpArrowDownArrow: "⇅",
  UpDownArrow: "↕",
  UpEquilibrium: "⥮",
  UpTee: "⊥",
  UpTeeArrow: "↥",
  Uparrow: "⇑",
  Updownarrow: "⇕",
  UpperLeftArrow: "↖",
  UpperRightArrow: "↗",
  Upsi: "ϒ",
  Upsilon: "Υ",
  Uring: "Ů",
  Uscr: "𝒰",
  Utilde: "Ũ",
  Uuml: "Ü",
  VDash: "⊫",
  Vbar: "⫫",
  Vcy: "В",
  Vdash: "⊩",
  Vdashl: "⫦",
  Vee: "⋁",
  Verbar: "‖",
  Vert: "‖",
  VerticalBar: "∣",
  VerticalLine: "|",
  VerticalSeparator: "❘",
  VerticalTilde: "≀",
  VeryThinSpace: " ",
  Vfr: "𝔙",
  Vopf: "𝕍",
  Vscr: "𝒱",
  Vvdash: "⊪",
  Wcirc: "Ŵ",
  Wedge: "⋀",
  Wfr: "𝔚",
  Wopf: "𝕎",
  Wscr: "𝒲",
  Xfr: "𝔛",
  Xi: "Ξ",
  Xopf: "𝕏",
  Xscr: "𝒳",
  YAcy: "Я",
  YIcy: "Ї",
  YUcy: "Ю",
  Yacute: "Ý",
  Ycirc: "Ŷ",
  Ycy: "Ы",
  Yfr: "𝔜",
  Yopf: "𝕐",
  Yscr: "𝒴",
  Yuml: "Ÿ",
  ZHcy: "Ж",
  Zacute: "Ź",
  Zcaron: "Ž",
  Zcy: "З",
  Zdot: "Ż",
  ZeroWidthSpace: "​",
  Zeta: "Ζ",
  Zfr: "ℨ",
  Zopf: "ℤ",
  Zscr: "𝒵",
  aacute: "á",
  abreve: "ă",
  ac: "∾",
  acE: "∾̳",
  acd: "∿",
  acirc: "â",
  acute: "´",
  acy: "а",
  aelig: "æ",
  af: "⁡",
  afr: "𝔞",
  agrave: "à",
  alefsym: "ℵ",
  aleph: "ℵ",
  alpha: "α",
  amacr: "ā",
  amalg: "⨿",
  amp: "&",
  and: "∧",
  andand: "⩕",
  andd: "⩜",
  andslope: "⩘",
  andv: "⩚",
  ang: "∠",
  ange: "⦤",
  angle: "∠",
  angmsd: "∡",
  angmsdaa: "⦨",
  angmsdab: "⦩",
  angmsdac: "⦪",
  angmsdad: "⦫",
  angmsdae: "⦬",
  angmsdaf: "⦭",
  angmsdag: "⦮",
  angmsdah: "⦯",
  angrt: "∟",
  angrtvb: "⊾",
  angrtvbd: "⦝",
  angsph: "∢",
  angst: "Å",
  angzarr: "⍼",
  aogon: "ą",
  aopf: "𝕒",
  ap: "≈",
  apE: "⩰",
  apacir: "⩯",
  ape: "≊",
  apid: "≋",
  apos: "'",
  approx: "≈",
  approxeq: "≊",
  aring: "å",
  ascr: "𝒶",
  ast: "*",
  asymp: "≈",
  asympeq: "≍",
  atilde: "ã",
  auml: "ä",
  awconint: "∳",
  awint: "⨑",
  bNot: "⫭",
  backcong: "≌",
  backepsilon: "϶",
  backprime: "‵",
  backsim: "∽",
  backsimeq: "⋍",
  barvee: "⊽",
  barwed: "⌅",
  barwedge: "⌅",
  bbrk: "⎵",
  bbrktbrk: "⎶",
  bcong: "≌",
  bcy: "б",
  bdquo: "„",
  becaus: "∵",
  because: "∵",
  bemptyv: "⦰",
  bepsi: "϶",
  bernou: "ℬ",
  beta: "β",
  beth: "ℶ",
  between: "≬",
  bfr: "𝔟",
  bigcap: "⋂",
  bigcirc: "◯",
  bigcup: "⋃",
  bigodot: "⨀",
  bigoplus: "⨁",
  bigotimes: "⨂",
  bigsqcup: "⨆",
  bigstar: "★",
  bigtriangledown: "▽",
  bigtriangleup: "△",
  biguplus: "⨄",
  bigvee: "⋁",
  bigwedge: "⋀",
  bkarow: "⤍",
  blacklozenge: "⧫",
  blacksquare: "▪",
  blacktriangle: "▴",
  blacktriangledown: "▾",
  blacktriangleleft: "◂",
  blacktriangleright: "▸",
  blank: "␣",
  blk12: "▒",
  blk14: "░",
  blk34: "▓",
  block: "█",
  bne: "=⃥",
  bnequiv: "≡⃥",
  bnot: "⌐",
  bopf: "𝕓",
  bot: "⊥",
  bottom: "⊥",
  bowtie: "⋈",
  boxDL: "╗",
  boxDR: "╔",
  boxDl: "╖",
  boxDr: "╓",
  boxH: "═",
  boxHD: "╦",
  boxHU: "╩",
  boxHd: "╤",
  boxHu: "╧",
  boxUL: "╝",
  boxUR: "╚",
  boxUl: "╜",
  boxUr: "╙",
  boxV: "║",
  boxVH: "╬",
  boxVL: "╣",
  boxVR: "╠",
  boxVh: "╫",
  boxVl: "╢",
  boxVr: "╟",
  boxbox: "⧉",
  boxdL: "╕",
  boxdR: "╒",
  boxdl: "┐",
  boxdr: "┌",
  boxh: "─",
  boxhD: "╥",
  boxhU: "╨",
  boxhd: "┬",
  boxhu: "┴",
  boxminus: "⊟",
  boxplus: "⊞",
  boxtimes: "⊠",
  boxuL: "╛",
  boxuR: "╘",
  boxul: "┘",
  boxur: "└",
  boxv: "│",
  boxvH: "╪",
  boxvL: "╡",
  boxvR: "╞",
  boxvh: "┼",
  boxvl: "┤",
  boxvr: "├",
  bprime: "‵",
  breve: "˘",
  brvbar: "¦",
  bscr: "𝒷",
  bsemi: "⁏",
  bsim: "∽",
  bsime: "⋍",
  bsol: "\\",
  bsolb: "⧅",
  bsolhsub: "⟈",
  bull: "•",
  bullet: "•",
  bump: "≎",
  bumpE: "⪮",
  bumpe: "≏",
  bumpeq: "≏",
  cacute: "ć",
  cap: "∩",
  capand: "⩄",
  capbrcup: "⩉",
  capcap: "⩋",
  capcup: "⩇",
  capdot: "⩀",
  caps: "∩︀",
  caret: "⁁",
  caron: "ˇ",
  ccaps: "⩍",
  ccaron: "č",
  ccedil: "ç",
  ccirc: "ĉ",
  ccups: "⩌",
  ccupssm: "⩐",
  cdot: "ċ",
  cedil: "¸",
  cemptyv: "⦲",
  cent: "¢",
  centerdot: "·",
  cfr: "𝔠",
  chcy: "ч",
  check: "✓",
  checkmark: "✓",
  chi: "χ",
  cir: "○",
  cirE: "⧃",
  circ: "ˆ",
  circeq: "≗",
  circlearrowleft: "↺",
  circlearrowright: "↻",
  circledR: "®",
  circledS: "Ⓢ",
  circledast: "⊛",
  circledcirc: "⊚",
  circleddash: "⊝",
  cire: "≗",
  cirfnint: "⨐",
  cirmid: "⫯",
  cirscir: "⧂",
  clubs: "♣",
  clubsuit: "♣",
  colon: ":",
  colone: "≔",
  coloneq: "≔",
  comma: ",",
  commat: "@",
  comp: "∁",
  compfn: "∘",
  complement: "∁",
  complexes: "ℂ",
  cong: "≅",
  congdot: "⩭",
  conint: "∮",
  copf: "𝕔",
  coprod: "∐",
  copy: "©",
  copysr: "℗",
  crarr: "↵",
  cross: "✗",
  cscr: "𝒸",
  csub: "⫏",
  csube: "⫑",
  csup: "⫐",
  csupe: "⫒",
  ctdot: "⋯",
  cudarrl: "⤸",
  cudarrr: "⤵",
  cuepr: "⋞",
  cuesc: "⋟",
  cularr: "↶",
  cularrp: "⤽",
  cup: "∪",
  cupbrcap: "⩈",
  cupcap: "⩆",
  cupcup: "⩊",
  cupdot: "⊍",
  cupor: "⩅",
  cups: "∪︀",
  curarr: "↷",
  curarrm: "⤼",
  curlyeqprec: "⋞",
  curlyeqsucc: "⋟",
  curlyvee: "⋎",
  curlywedge: "⋏",
  curren: "¤",
  curvearrowleft: "↶",
  curvearrowright: "↷",
  cuvee: "⋎",
  cuwed: "⋏",
  cwconint: "∲",
  cwint: "∱",
  cylcty: "⌭",
  dArr: "⇓",
  dHar: "⥥",
  dagger: "†",
  daleth: "ℸ",
  darr: "↓",
  dash: "‐",
  dashv: "⊣",
  dbkarow: "⤏",
  dblac: "˝",
  dcaron: "ď",
  dcy: "д",
  dd: "ⅆ",
  ddagger: "‡",
  ddarr: "⇊",
  ddotseq: "⩷",
  deg: "°",
  delta: "δ",
  demptyv: "⦱",
  dfisht: "⥿",
  dfr: "𝔡",
  dharl: "⇃",
  dharr: "⇂",
  diam: "⋄",
  diamond: "⋄",
  diamondsuit: "♦",
  diams: "♦",
  die: "¨",
  digamma: "ϝ",
  disin: "⋲",
  div: "÷",
  divide: "÷",
  divideontimes: "⋇",
  divonx: "⋇",
  djcy: "ђ",
  dlcorn: "⌞",
  dlcrop: "⌍",
  dollar: "$",
  dopf: "𝕕",
  dot: "˙",
  doteq: "≐",
  doteqdot: "≑",
  dotminus: "∸",
  dotplus: "∔",
  dotsquare: "⊡",
  doublebarwedge: "⌆",
  downarrow: "↓",
  downdownarrows: "⇊",
  downharpoonleft: "⇃",
  downharpoonright: "⇂",
  drbkarow: "⤐",
  drcorn: "⌟",
  drcrop: "⌌",
  dscr: "𝒹",
  dscy: "ѕ",
  dsol: "⧶",
  dstrok: "đ",
  dtdot: "⋱",
  dtri: "▿",
  dtrif: "▾",
  duarr: "⇵",
  duhar: "⥯",
  dwangle: "⦦",
  dzcy: "џ",
  dzigrarr: "⟿",
  eDDot: "⩷",
  eDot: "≑",
  eacute: "é",
  easter: "⩮",
  ecaron: "ě",
  ecir: "≖",
  ecirc: "ê",
  ecolon: "≕",
  ecy: "э",
  edot: "ė",
  ee: "ⅇ",
  efDot: "≒",
  efr: "𝔢",
  eg: "⪚",
  egrave: "è",
  egs: "⪖",
  egsdot: "⪘",
  el: "⪙",
  elinters: "⏧",
  ell: "ℓ",
  els: "⪕",
  elsdot: "⪗",
  emacr: "ē",
  empty: "∅",
  emptyset: "∅",
  emptyv: "∅",
  emsp13: " ",
  emsp14: " ",
  emsp: " ",
  eng: "ŋ",
  ensp: " ",
  eogon: "ę",
  eopf: "𝕖",
  epar: "⋕",
  eparsl: "⧣",
  eplus: "⩱",
  epsi: "ε",
  epsilon: "ε",
  epsiv: "ϵ",
  eqcirc: "≖",
  eqcolon: "≕",
  eqsim: "≂",
  eqslantgtr: "⪖",
  eqslantless: "⪕",
  equals: "=",
  equest: "≟",
  equiv: "≡",
  equivDD: "⩸",
  eqvparsl: "⧥",
  erDot: "≓",
  erarr: "⥱",
  escr: "ℯ",
  esdot: "≐",
  esim: "≂",
  eta: "η",
  eth: "ð",
  euml: "ë",
  euro: "€",
  excl: "!",
  exist: "∃",
  expectation: "ℰ",
  exponentiale: "ⅇ",
  fallingdotseq: "≒",
  fcy: "ф",
  female: "♀",
  ffilig: "ﬃ",
  fflig: "ﬀ",
  ffllig: "ﬄ",
  ffr: "𝔣",
  filig: "ﬁ",
  fjlig: "fj",
  flat: "♭",
  fllig: "ﬂ",
  fltns: "▱",
  fnof: "ƒ",
  fopf: "𝕗",
  forall: "∀",
  fork: "⋔",
  forkv: "⫙",
  fpartint: "⨍",
  frac12: "½",
  frac13: "⅓",
  frac14: "¼",
  frac15: "⅕",
  frac16: "⅙",
  frac18: "⅛",
  frac23: "⅔",
  frac25: "⅖",
  frac34: "¾",
  frac35: "⅗",
  frac38: "⅜",
  frac45: "⅘",
  frac56: "⅚",
  frac58: "⅝",
  frac78: "⅞",
  frasl: "⁄",
  frown: "⌢",
  fscr: "𝒻",
  gE: "≧",
  gEl: "⪌",
  gacute: "ǵ",
  gamma: "γ",
  gammad: "ϝ",
  gap: "⪆",
  gbreve: "ğ",
  gcirc: "ĝ",
  gcy: "г",
  gdot: "ġ",
  ge: "≥",
  gel: "⋛",
  geq: "≥",
  geqq: "≧",
  geqslant: "⩾",
  ges: "⩾",
  gescc: "⪩",
  gesdot: "⪀",
  gesdoto: "⪂",
  gesdotol: "⪄",
  gesl: "⋛︀",
  gesles: "⪔",
  gfr: "𝔤",
  gg: "≫",
  ggg: "⋙",
  gimel: "ℷ",
  gjcy: "ѓ",
  gl: "≷",
  glE: "⪒",
  gla: "⪥",
  glj: "⪤",
  gnE: "≩",
  gnap: "⪊",
  gnapprox: "⪊",
  gne: "⪈",
  gneq: "⪈",
  gneqq: "≩",
  gnsim: "⋧",
  gopf: "𝕘",
  grave: "`",
  gscr: "ℊ",
  gsim: "≳",
  gsime: "⪎",
  gsiml: "⪐",
  gt: ">",
  gtcc: "⪧",
  gtcir: "⩺",
  gtdot: "⋗",
  gtlPar: "⦕",
  gtquest: "⩼",
  gtrapprox: "⪆",
  gtrarr: "⥸",
  gtrdot: "⋗",
  gtreqless: "⋛",
  gtreqqless: "⪌",
  gtrless: "≷",
  gtrsim: "≳",
  gvertneqq: "≩︀",
  gvnE: "≩︀",
  hArr: "⇔",
  hairsp: " ",
  half: "½",
  hamilt: "ℋ",
  hardcy: "ъ",
  harr: "↔",
  harrcir: "⥈",
  harrw: "↭",
  hbar: "ℏ",
  hcirc: "ĥ",
  hearts: "♥",
  heartsuit: "♥",
  hellip: "…",
  hercon: "⊹",
  hfr: "𝔥",
  hksearow: "⤥",
  hkswarow: "⤦",
  hoarr: "⇿",
  homtht: "∻",
  hookleftarrow: "↩",
  hookrightarrow: "↪",
  hopf: "𝕙",
  horbar: "―",
  hscr: "𝒽",
  hslash: "ℏ",
  hstrok: "ħ",
  hybull: "⁃",
  hyphen: "‐",
  iacute: "í",
  ic: "⁣",
  icirc: "î",
  icy: "и",
  iecy: "е",
  iexcl: "¡",
  iff: "⇔",
  ifr: "𝔦",
  igrave: "ì",
  ii: "ⅈ",
  iiiint: "⨌",
  iiint: "∭",
  iinfin: "⧜",
  iiota: "℩",
  ijlig: "ĳ",
  imacr: "ī",
  image: "ℑ",
  imagline: "ℐ",
  imagpart: "ℑ",
  imath: "ı",
  imof: "⊷",
  imped: "Ƶ",
  in: "∈",
  incare: "℅",
  infin: "∞",
  infintie: "⧝",
  inodot: "ı",
  int: "∫",
  intcal: "⊺",
  integers: "ℤ",
  intercal: "⊺",
  intlarhk: "⨗",
  intprod: "⨼",
  iocy: "ё",
  iogon: "į",
  iopf: "𝕚",
  iota: "ι",
  iprod: "⨼",
  iquest: "¿",
  iscr: "𝒾",
  isin: "∈",
  isinE: "⋹",
  isindot: "⋵",
  isins: "⋴",
  isinsv: "⋳",
  isinv: "∈",
  it: "⁢",
  itilde: "ĩ",
  iukcy: "і",
  iuml: "ï",
  jcirc: "ĵ",
  jcy: "й",
  jfr: "𝔧",
  jmath: "ȷ",
  jopf: "𝕛",
  jscr: "𝒿",
  jsercy: "ј",
  jukcy: "є",
  kappa: "κ",
  kappav: "ϰ",
  kcedil: "ķ",
  kcy: "к",
  kfr: "𝔨",
  kgreen: "ĸ",
  khcy: "х",
  kjcy: "ќ",
  kopf: "𝕜",
  kscr: "𝓀",
  lAarr: "⇚",
  lArr: "⇐",
  lAtail: "⤛",
  lBarr: "⤎",
  lE: "≦",
  lEg: "⪋",
  lHar: "⥢",
  lacute: "ĺ",
  laemptyv: "⦴",
  lagran: "ℒ",
  lambda: "λ",
  lang: "⟨",
  langd: "⦑",
  langle: "⟨",
  lap: "⪅",
  laquo: "«",
  larr: "←",
  larrb: "⇤",
  larrbfs: "⤟",
  larrfs: "⤝",
  larrhk: "↩",
  larrlp: "↫",
  larrpl: "⤹",
  larrsim: "⥳",
  larrtl: "↢",
  lat: "⪫",
  latail: "⤙",
  late: "⪭",
  lates: "⪭︀",
  lbarr: "⤌",
  lbbrk: "❲",
  lbrace: "{",
  lbrack: "[",
  lbrke: "⦋",
  lbrksld: "⦏",
  lbrkslu: "⦍",
  lcaron: "ľ",
  lcedil: "ļ",
  lceil: "⌈",
  lcub: "{",
  lcy: "л",
  ldca: "⤶",
  ldquo: "“",
  ldquor: "„",
  ldrdhar: "⥧",
  ldrushar: "⥋",
  ldsh: "↲",
  le: "≤",
  leftarrow: "←",
  leftarrowtail: "↢",
  leftharpoondown: "↽",
  leftharpoonup: "↼",
  leftleftarrows: "⇇",
  leftrightarrow: "↔",
  leftrightarrows: "⇆",
  leftrightharpoons: "⇋",
  leftrightsquigarrow: "↭",
  leftthreetimes: "⋋",
  leg: "⋚",
  leq: "≤",
  leqq: "≦",
  leqslant: "⩽",
  les: "⩽",
  lescc: "⪨",
  lesdot: "⩿",
  lesdoto: "⪁",
  lesdotor: "⪃",
  lesg: "⋚︀",
  lesges: "⪓",
  lessapprox: "⪅",
  lessdot: "⋖",
  lesseqgtr: "⋚",
  lesseqqgtr: "⪋",
  lessgtr: "≶",
  lesssim: "≲",
  lfisht: "⥼",
  lfloor: "⌊",
  lfr: "𝔩",
  lg: "≶",
  lgE: "⪑",
  lhard: "↽",
  lharu: "↼",
  lharul: "⥪",
  lhblk: "▄",
  ljcy: "љ",
  ll: "≪",
  llarr: "⇇",
  llcorner: "⌞",
  llhard: "⥫",
  lltri: "◺",
  lmidot: "ŀ",
  lmoust: "⎰",
  lmoustache: "⎰",
  lnE: "≨",
  lnap: "⪉",
  lnapprox: "⪉",
  lne: "⪇",
  lneq: "⪇",
  lneqq: "≨",
  lnsim: "⋦",
  loang: "⟬",
  loarr: "⇽",
  lobrk: "⟦",
  longleftarrow: "⟵",
  longleftrightarrow: "⟷",
  longmapsto: "⟼",
  longrightarrow: "⟶",
  looparrowleft: "↫",
  looparrowright: "↬",
  lopar: "⦅",
  lopf: "𝕝",
  loplus: "⨭",
  lotimes: "⨴",
  lowast: "∗",
  lowbar: "_",
  loz: "◊",
  lozenge: "◊",
  lozf: "⧫",
  lpar: "(",
  lparlt: "⦓",
  lrarr: "⇆",
  lrcorner: "⌟",
  lrhar: "⇋",
  lrhard: "⥭",
  lrm: "‎",
  lrtri: "⊿",
  lsaquo: "‹",
  lscr: "𝓁",
  lsh: "↰",
  lsim: "≲",
  lsime: "⪍",
  lsimg: "⪏",
  lsqb: "[",
  lsquo: "‘",
  lsquor: "‚",
  lstrok: "ł",
  lt: "<",
  ltcc: "⪦",
  ltcir: "⩹",
  ltdot: "⋖",
  lthree: "⋋",
  ltimes: "⋉",
  ltlarr: "⥶",
  ltquest: "⩻",
  ltrPar: "⦖",
  ltri: "◃",
  ltrie: "⊴",
  ltrif: "◂",
  lurdshar: "⥊",
  luruhar: "⥦",
  lvertneqq: "≨︀",
  lvnE: "≨︀",
  mDDot: "∺",
  macr: "¯",
  male: "♂",
  malt: "✠",
  maltese: "✠",
  map: "↦",
  mapsto: "↦",
  mapstodown: "↧",
  mapstoleft: "↤",
  mapstoup: "↥",
  marker: "▮",
  mcomma: "⨩",
  mcy: "м",
  mdash: "—",
  measuredangle: "∡",
  mfr: "𝔪",
  mho: "℧",
  micro: "µ",
  mid: "∣",
  midast: "*",
  midcir: "⫰",
  middot: "·",
  minus: "−",
  minusb: "⊟",
  minusd: "∸",
  minusdu: "⨪",
  mlcp: "⫛",
  mldr: "…",
  mnplus: "∓",
  models: "⊧",
  mopf: "𝕞",
  mp: "∓",
  mscr: "𝓂",
  mstpos: "∾",
  mu: "μ",
  multimap: "⊸",
  mumap: "⊸",
  nGg: "⋙̸",
  nGt: "≫⃒",
  nGtv: "≫̸",
  nLeftarrow: "⇍",
  nLeftrightarrow: "⇎",
  nLl: "⋘̸",
  nLt: "≪⃒",
  nLtv: "≪̸",
  nRightarrow: "⇏",
  nVDash: "⊯",
  nVdash: "⊮",
  nabla: "∇",
  nacute: "ń",
  nang: "∠⃒",
  nap: "≉",
  napE: "⩰̸",
  napid: "≋̸",
  napos: "ŉ",
  napprox: "≉",
  natur: "♮",
  natural: "♮",
  naturals: "ℕ",
  nbsp: " ",
  nbump: "≎̸",
  nbumpe: "≏̸",
  ncap: "⩃",
  ncaron: "ň",
  ncedil: "ņ",
  ncong: "≇",
  ncongdot: "⩭̸",
  ncup: "⩂",
  ncy: "н",
  ndash: "–",
  ne: "≠",
  neArr: "⇗",
  nearhk: "⤤",
  nearr: "↗",
  nearrow: "↗",
  nedot: "≐̸",
  nequiv: "≢",
  nesear: "⤨",
  nesim: "≂̸",
  nexist: "∄",
  nexists: "∄",
  nfr: "𝔫",
  ngE: "≧̸",
  nge: "≱",
  ngeq: "≱",
  ngeqq: "≧̸",
  ngeqslant: "⩾̸",
  nges: "⩾̸",
  ngsim: "≵",
  ngt: "≯",
  ngtr: "≯",
  nhArr: "⇎",
  nharr: "↮",
  nhpar: "⫲",
  ni: "∋",
  nis: "⋼",
  nisd: "⋺",
  niv: "∋",
  njcy: "њ",
  nlArr: "⇍",
  nlE: "≦̸",
  nlarr: "↚",
  nldr: "‥",
  nle: "≰",
  nleftarrow: "↚",
  nleftrightarrow: "↮",
  nleq: "≰",
  nleqq: "≦̸",
  nleqslant: "⩽̸",
  nles: "⩽̸",
  nless: "≮",
  nlsim: "≴",
  nlt: "≮",
  nltri: "⋪",
  nltrie: "⋬",
  nmid: "∤",
  nopf: "𝕟",
  not: "¬",
  notin: "∉",
  notinE: "⋹̸",
  notindot: "⋵̸",
  notinva: "∉",
  notinvb: "⋷",
  notinvc: "⋶",
  notni: "∌",
  notniva: "∌",
  notnivb: "⋾",
  notnivc: "⋽",
  npar: "∦",
  nparallel: "∦",
  nparsl: "⫽⃥",
  npart: "∂̸",
  npolint: "⨔",
  npr: "⊀",
  nprcue: "⋠",
  npre: "⪯̸",
  nprec: "⊀",
  npreceq: "⪯̸",
  nrArr: "⇏",
  nrarr: "↛",
  nrarrc: "⤳̸",
  nrarrw: "↝̸",
  nrightarrow: "↛",
  nrtri: "⋫",
  nrtrie: "⋭",
  nsc: "⊁",
  nsccue: "⋡",
  nsce: "⪰̸",
  nscr: "𝓃",
  nshortmid: "∤",
  nshortparallel: "∦",
  nsim: "≁",
  nsime: "≄",
  nsimeq: "≄",
  nsmid: "∤",
  nspar: "∦",
  nsqsube: "⋢",
  nsqsupe: "⋣",
  nsub: "⊄",
  nsubE: "⫅̸",
  nsube: "⊈",
  nsubset: "⊂⃒",
  nsubseteq: "⊈",
  nsubseteqq: "⫅̸",
  nsucc: "⊁",
  nsucceq: "⪰̸",
  nsup: "⊅",
  nsupE: "⫆̸",
  nsupe: "⊉",
  nsupset: "⊃⃒",
  nsupseteq: "⊉",
  nsupseteqq: "⫆̸",
  ntgl: "≹",
  ntilde: "ñ",
  ntlg: "≸",
  ntriangleleft: "⋪",
  ntrianglelefteq: "⋬",
  ntriangleright: "⋫",
  ntrianglerighteq: "⋭",
  nu: "ν",
  num: "#",
  numero: "№",
  numsp: " ",
  nvDash: "⊭",
  nvHarr: "⤄",
  nvap: "≍⃒",
  nvdash: "⊬",
  nvge: "≥⃒",
  nvgt: ">⃒",
  nvinfin: "⧞",
  nvlArr: "⤂",
  nvle: "≤⃒",
  nvlt: "<⃒",
  nvltrie: "⊴⃒",
  nvrArr: "⤃",
  nvrtrie: "⊵⃒",
  nvsim: "∼⃒",
  nwArr: "⇖",
  nwarhk: "⤣",
  nwarr: "↖",
  nwarrow: "↖",
  nwnear: "⤧",
  oS: "Ⓢ",
  oacute: "ó",
  oast: "⊛",
  ocir: "⊚",
  ocirc: "ô",
  ocy: "о",
  odash: "⊝",
  odblac: "ő",
  odiv: "⨸",
  odot: "⊙",
  odsold: "⦼",
  oelig: "œ",
  ofcir: "⦿",
  ofr: "𝔬",
  ogon: "˛",
  ograve: "ò",
  ogt: "⧁",
  ohbar: "⦵",
  ohm: "Ω",
  oint: "∮",
  olarr: "↺",
  olcir: "⦾",
  olcross: "⦻",
  oline: "‾",
  olt: "⧀",
  omacr: "ō",
  omega: "ω",
  omicron: "ο",
  omid: "⦶",
  ominus: "⊖",
  oopf: "𝕠",
  opar: "⦷",
  operp: "⦹",
  oplus: "⊕",
  or: "∨",
  orarr: "↻",
  ord: "⩝",
  order: "ℴ",
  orderof: "ℴ",
  ordf: "ª",
  ordm: "º",
  origof: "⊶",
  oror: "⩖",
  orslope: "⩗",
  orv: "⩛",
  oscr: "ℴ",
  oslash: "ø",
  osol: "⊘",
  otilde: "õ",
  otimes: "⊗",
  otimesas: "⨶",
  ouml: "ö",
  ovbar: "⌽",
  par: "∥",
  para: "¶",
  parallel: "∥",
  parsim: "⫳",
  parsl: "⫽",
  part: "∂",
  pcy: "п",
  percnt: "%",
  period: ".",
  permil: "‰",
  perp: "⊥",
  pertenk: "‱",
  pfr: "𝔭",
  phi: "φ",
  phiv: "ϕ",
  phmmat: "ℳ",
  phone: "☎",
  pi: "π",
  pitchfork: "⋔",
  piv: "ϖ",
  planck: "ℏ",
  planckh: "ℎ",
  plankv: "ℏ",
  plus: "+",
  plusacir: "⨣",
  plusb: "⊞",
  pluscir: "⨢",
  plusdo: "∔",
  plusdu: "⨥",
  pluse: "⩲",
  plusmn: "±",
  plussim: "⨦",
  plustwo: "⨧",
  pm: "±",
  pointint: "⨕",
  popf: "𝕡",
  pound: "£",
  pr: "≺",
  prE: "⪳",
  prap: "⪷",
  prcue: "≼",
  pre: "⪯",
  prec: "≺",
  precapprox: "⪷",
  preccurlyeq: "≼",
  preceq: "⪯",
  precnapprox: "⪹",
  precneqq: "⪵",
  precnsim: "⋨",
  precsim: "≾",
  prime: "′",
  primes: "ℙ",
  prnE: "⪵",
  prnap: "⪹",
  prnsim: "⋨",
  prod: "∏",
  profalar: "⌮",
  profline: "⌒",
  profsurf: "⌓",
  prop: "∝",
  propto: "∝",
  prsim: "≾",
  prurel: "⊰",
  pscr: "𝓅",
  psi: "ψ",
  puncsp: " ",
  qfr: "𝔮",
  qint: "⨌",
  qopf: "𝕢",
  qprime: "⁗",
  qscr: "𝓆",
  quaternions: "ℍ",
  quatint: "⨖",
  quest: "?",
  questeq: "≟",
  quot: '"',
  rAarr: "⇛",
  rArr: "⇒",
  rAtail: "⤜",
  rBarr: "⤏",
  rHar: "⥤",
  race: "∽̱",
  racute: "ŕ",
  radic: "√",
  raemptyv: "⦳",
  rang: "⟩",
  rangd: "⦒",
  range: "⦥",
  rangle: "⟩",
  raquo: "»",
  rarr: "→",
  rarrap: "⥵",
  rarrb: "⇥",
  rarrbfs: "⤠",
  rarrc: "⤳",
  rarrfs: "⤞",
  rarrhk: "↪",
  rarrlp: "↬",
  rarrpl: "⥅",
  rarrsim: "⥴",
  rarrtl: "↣",
  rarrw: "↝",
  ratail: "⤚",
  ratio: "∶",
  rationals: "ℚ",
  rbarr: "⤍",
  rbbrk: "❳",
  rbrace: "}",
  rbrack: "]",
  rbrke: "⦌",
  rbrksld: "⦎",
  rbrkslu: "⦐",
  rcaron: "ř",
  rcedil: "ŗ",
  rceil: "⌉",
  rcub: "}",
  rcy: "р",
  rdca: "⤷",
  rdldhar: "⥩",
  rdquo: "”",
  rdquor: "”",
  rdsh: "↳",
  real: "ℜ",
  realine: "ℛ",
  realpart: "ℜ",
  reals: "ℝ",
  rect: "▭",
  reg: "®",
  rfisht: "⥽",
  rfloor: "⌋",
  rfr: "𝔯",
  rhard: "⇁",
  rharu: "⇀",
  rharul: "⥬",
  rho: "ρ",
  rhov: "ϱ",
  rightarrow: "→",
  rightarrowtail: "↣",
  rightharpoondown: "⇁",
  rightharpoonup: "⇀",
  rightleftarrows: "⇄",
  rightleftharpoons: "⇌",
  rightrightarrows: "⇉",
  rightsquigarrow: "↝",
  rightthreetimes: "⋌",
  ring: "˚",
  risingdotseq: "≓",
  rlarr: "⇄",
  rlhar: "⇌",
  rlm: "‏",
  rmoust: "⎱",
  rmoustache: "⎱",
  rnmid: "⫮",
  roang: "⟭",
  roarr: "⇾",
  robrk: "⟧",
  ropar: "⦆",
  ropf: "𝕣",
  roplus: "⨮",
  rotimes: "⨵",
  rpar: ")",
  rpargt: "⦔",
  rppolint: "⨒",
  rrarr: "⇉",
  rsaquo: "›",
  rscr: "𝓇",
  rsh: "↱",
  rsqb: "]",
  rsquo: "’",
  rsquor: "’",
  rthree: "⋌",
  rtimes: "⋊",
  rtri: "▹",
  rtrie: "⊵",
  rtrif: "▸",
  rtriltri: "⧎",
  ruluhar: "⥨",
  rx: "℞",
  sacute: "ś",
  sbquo: "‚",
  sc: "≻",
  scE: "⪴",
  scap: "⪸",
  scaron: "š",
  sccue: "≽",
  sce: "⪰",
  scedil: "ş",
  scirc: "ŝ",
  scnE: "⪶",
  scnap: "⪺",
  scnsim: "⋩",
  scpolint: "⨓",
  scsim: "≿",
  scy: "с",
  sdot: "⋅",
  sdotb: "⊡",
  sdote: "⩦",
  seArr: "⇘",
  searhk: "⤥",
  searr: "↘",
  searrow: "↘",
  sect: "§",
  semi: ";",
  seswar: "⤩",
  setminus: "∖",
  setmn: "∖",
  sext: "✶",
  sfr: "𝔰",
  sfrown: "⌢",
  sharp: "♯",
  shchcy: "щ",
  shcy: "ш",
  shortmid: "∣",
  shortparallel: "∥",
  shy: "­",
  sigma: "σ",
  sigmaf: "ς",
  sigmav: "ς",
  sim: "∼",
  simdot: "⩪",
  sime: "≃",
  simeq: "≃",
  simg: "⪞",
  simgE: "⪠",
  siml: "⪝",
  simlE: "⪟",
  simne: "≆",
  simplus: "⨤",
  simrarr: "⥲",
  slarr: "←",
  smallsetminus: "∖",
  smashp: "⨳",
  smeparsl: "⧤",
  smid: "∣",
  smile: "⌣",
  smt: "⪪",
  smte: "⪬",
  smtes: "⪬︀",
  softcy: "ь",
  sol: "/",
  solb: "⧄",
  solbar: "⌿",
  sopf: "𝕤",
  spades: "♠",
  spadesuit: "♠",
  spar: "∥",
  sqcap: "⊓",
  sqcaps: "⊓︀",
  sqcup: "⊔",
  sqcups: "⊔︀",
  sqsub: "⊏",
  sqsube: "⊑",
  sqsubset: "⊏",
  sqsubseteq: "⊑",
  sqsup: "⊐",
  sqsupe: "⊒",
  sqsupset: "⊐",
  sqsupseteq: "⊒",
  squ: "□",
  square: "□",
  squarf: "▪",
  squf: "▪",
  srarr: "→",
  sscr: "𝓈",
  ssetmn: "∖",
  ssmile: "⌣",
  sstarf: "⋆",
  star: "☆",
  starf: "★",
  straightepsilon: "ϵ",
  straightphi: "ϕ",
  strns: "¯",
  sub: "⊂",
  subE: "⫅",
  subdot: "⪽",
  sube: "⊆",
  subedot: "⫃",
  submult: "⫁",
  subnE: "⫋",
  subne: "⊊",
  subplus: "⪿",
  subrarr: "⥹",
  subset: "⊂",
  subseteq: "⊆",
  subseteqq: "⫅",
  subsetneq: "⊊",
  subsetneqq: "⫋",
  subsim: "⫇",
  subsub: "⫕",
  subsup: "⫓",
  succ: "≻",
  succapprox: "⪸",
  succcurlyeq: "≽",
  succeq: "⪰",
  succnapprox: "⪺",
  succneqq: "⪶",
  succnsim: "⋩",
  succsim: "≿",
  sum: "∑",
  sung: "♪",
  sup1: "¹",
  sup2: "²",
  sup3: "³",
  sup: "⊃",
  supE: "⫆",
  supdot: "⪾",
  supdsub: "⫘",
  supe: "⊇",
  supedot: "⫄",
  suphsol: "⟉",
  suphsub: "⫗",
  suplarr: "⥻",
  supmult: "⫂",
  supnE: "⫌",
  supne: "⊋",
  supplus: "⫀",
  supset: "⊃",
  supseteq: "⊇",
  supseteqq: "⫆",
  supsetneq: "⊋",
  supsetneqq: "⫌",
  supsim: "⫈",
  supsub: "⫔",
  supsup: "⫖",
  swArr: "⇙",
  swarhk: "⤦",
  swarr: "↙",
  swarrow: "↙",
  swnwar: "⤪",
  szlig: "ß",
  target: "⌖",
  tau: "τ",
  tbrk: "⎴",
  tcaron: "ť",
  tcedil: "ţ",
  tcy: "т",
  tdot: "⃛",
  telrec: "⌕",
  tfr: "𝔱",
  there4: "∴",
  therefore: "∴",
  theta: "θ",
  thetasym: "ϑ",
  thetav: "ϑ",
  thickapprox: "≈",
  thicksim: "∼",
  thinsp: " ",
  thkap: "≈",
  thksim: "∼",
  thorn: "þ",
  tilde: "˜",
  times: "×",
  timesb: "⊠",
  timesbar: "⨱",
  timesd: "⨰",
  tint: "∭",
  toea: "⤨",
  top: "⊤",
  topbot: "⌶",
  topcir: "⫱",
  topf: "𝕥",
  topfork: "⫚",
  tosa: "⤩",
  tprime: "‴",
  trade: "™",
  triangle: "▵",
  triangledown: "▿",
  triangleleft: "◃",
  trianglelefteq: "⊴",
  triangleq: "≜",
  triangleright: "▹",
  trianglerighteq: "⊵",
  tridot: "◬",
  trie: "≜",
  triminus: "⨺",
  triplus: "⨹",
  trisb: "⧍",
  tritime: "⨻",
  trpezium: "⏢",
  tscr: "𝓉",
  tscy: "ц",
  tshcy: "ћ",
  tstrok: "ŧ",
  twixt: "≬",
  twoheadleftarrow: "↞",
  twoheadrightarrow: "↠",
  uArr: "⇑",
  uHar: "⥣",
  uacute: "ú",
  uarr: "↑",
  ubrcy: "ў",
  ubreve: "ŭ",
  ucirc: "û",
  ucy: "у",
  udarr: "⇅",
  udblac: "ű",
  udhar: "⥮",
  ufisht: "⥾",
  ufr: "𝔲",
  ugrave: "ù",
  uharl: "↿",
  uharr: "↾",
  uhblk: "▀",
  ulcorn: "⌜",
  ulcorner: "⌜",
  ulcrop: "⌏",
  ultri: "◸",
  umacr: "ū",
  uml: "¨",
  uogon: "ų",
  uopf: "𝕦",
  uparrow: "↑",
  updownarrow: "↕",
  upharpoonleft: "↿",
  upharpoonright: "↾",
  uplus: "⊎",
  upsi: "υ",
  upsih: "ϒ",
  upsilon: "υ",
  upuparrows: "⇈",
  urcorn: "⌝",
  urcorner: "⌝",
  urcrop: "⌎",
  uring: "ů",
  urtri: "◹",
  uscr: "𝓊",
  utdot: "⋰",
  utilde: "ũ",
  utri: "▵",
  utrif: "▴",
  uuarr: "⇈",
  uuml: "ü",
  uwangle: "⦧",
  vArr: "⇕",
  vBar: "⫨",
  vBarv: "⫩",
  vDash: "⊨",
  vangrt: "⦜",
  varepsilon: "ϵ",
  varkappa: "ϰ",
  varnothing: "∅",
  varphi: "ϕ",
  varpi: "ϖ",
  varpropto: "∝",
  varr: "↕",
  varrho: "ϱ",
  varsigma: "ς",
  varsubsetneq: "⊊︀",
  varsubsetneqq: "⫋︀",
  varsupsetneq: "⊋︀",
  varsupsetneqq: "⫌︀",
  vartheta: "ϑ",
  vartriangleleft: "⊲",
  vartriangleright: "⊳",
  vcy: "в",
  vdash: "⊢",
  vee: "∨",
  veebar: "⊻",
  veeeq: "≚",
  vellip: "⋮",
  verbar: "|",
  vert: "|",
  vfr: "𝔳",
  vltri: "⊲",
  vnsub: "⊂⃒",
  vnsup: "⊃⃒",
  vopf: "𝕧",
  vprop: "∝",
  vrtri: "⊳",
  vscr: "𝓋",
  vsubnE: "⫋︀",
  vsubne: "⊊︀",
  vsupnE: "⫌︀",
  vsupne: "⊋︀",
  vzigzag: "⦚",
  wcirc: "ŵ",
  wedbar: "⩟",
  wedge: "∧",
  wedgeq: "≙",
  weierp: "℘",
  wfr: "𝔴",
  wopf: "𝕨",
  wp: "℘",
  wr: "≀",
  wreath: "≀",
  wscr: "𝓌",
  xcap: "⋂",
  xcirc: "◯",
  xcup: "⋃",
  xdtri: "▽",
  xfr: "𝔵",
  xhArr: "⟺",
  xharr: "⟷",
  xi: "ξ",
  xlArr: "⟸",
  xlarr: "⟵",
  xmap: "⟼",
  xnis: "⋻",
  xodot: "⨀",
  xopf: "𝕩",
  xoplus: "⨁",
  xotime: "⨂",
  xrArr: "⟹",
  xrarr: "⟶",
  xscr: "𝓍",
  xsqcup: "⨆",
  xuplus: "⨄",
  xutri: "△",
  xvee: "⋁",
  xwedge: "⋀",
  yacute: "ý",
  yacy: "я",
  ycirc: "ŷ",
  ycy: "ы",
  yen: "¥",
  yfr: "𝔶",
  yicy: "ї",
  yopf: "𝕪",
  yscr: "𝓎",
  yucy: "ю",
  yuml: "ÿ",
  zacute: "ź",
  zcaron: "ž",
  zcy: "з",
  zdot: "ż",
  zeetrf: "ℨ",
  zeta: "ζ",
  zfr: "𝔷",
  zhcy: "ж",
  zigrarr: "⇝",
  zopf: "𝕫",
  zscr: "𝓏",
  zwj: "‍",
  zwnj: "‌"
};
const own$8 = {}.hasOwnProperty;
function decodeNamedCharacterReference(value) {
  return own$8.call(characterEntities, value) ? characterEntities[value] : false;
}
function splice(list2, start, remove, items) {
  const end = list2.length;
  let chunkStart = 0;
  let parameters;
  if (start < 0) {
    start = -start > end ? 0 : end + start;
  } else {
    start = start > end ? end : start;
  }
  remove = remove > 0 ? remove : 0;
  if (items.length < 1e4) {
    parameters = Array.from(items);
    parameters.unshift(start, remove);
    list2.splice(...parameters);
  } else {
    if (remove) list2.splice(start, remove);
    while (chunkStart < items.length) {
      parameters = items.slice(chunkStart, chunkStart + 1e4);
      parameters.unshift(start, 0);
      list2.splice(...parameters);
      chunkStart += 1e4;
      start += 1e4;
    }
  }
}
function push(list2, items) {
  if (list2.length > 0) {
    splice(list2, list2.length, 0, items);
    return list2;
  }
  return items;
}
const hasOwnProperty = {}.hasOwnProperty;
function combineExtensions(extensions) {
  const all2 = {};
  let index2 = -1;
  while (++index2 < extensions.length) {
    syntaxExtension(all2, extensions[index2]);
  }
  return all2;
}
function syntaxExtension(all2, extension2) {
  let hook;
  for (hook in extension2) {
    const maybe = hasOwnProperty.call(all2, hook) ? all2[hook] : void 0;
    const left = maybe || (all2[hook] = {});
    const right = extension2[hook];
    let code2;
    if (right) {
      for (code2 in right) {
        if (!hasOwnProperty.call(left, code2)) left[code2] = [];
        const value = right[code2];
        constructs(
          // @ts-expect-error Looks like a list.
          left[code2],
          Array.isArray(value) ? value : value ? [value] : []
        );
      }
    }
  }
}
function constructs(existing, list2) {
  let index2 = -1;
  const before = [];
  while (++index2 < list2.length) {
    (list2[index2].add === "after" ? existing : before).push(list2[index2]);
  }
  splice(existing, 0, 0, before);
}
function decodeNumericCharacterReference(value, base) {
  const code2 = Number.parseInt(value, base);
  if (
    // C0 except for HT, LF, FF, CR, space.
    code2 < 9 || code2 === 11 || code2 > 13 && code2 < 32 || // Control character (DEL) of C0, and C1 controls.
    code2 > 126 && code2 < 160 || // Lone high surrogates and low surrogates.
    code2 > 55295 && code2 < 57344 || // Noncharacters.
    code2 > 64975 && code2 < 65008 || /* eslint-disable no-bitwise */
    (code2 & 65535) === 65535 || (code2 & 65535) === 65534 || /* eslint-enable no-bitwise */
    // Out of range
    code2 > 1114111
  ) {
    return "�";
  }
  return String.fromCodePoint(code2);
}
function normalizeIdentifier(value) {
  return value.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const asciiAlpha = regexCheck(/[A-Za-z]/);
const asciiAlphanumeric = regexCheck(/[\dA-Za-z]/);
const asciiAtext = regexCheck(/[#-'*+\--9=?A-Z^-~]/);
function asciiControl(code2) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    code2 !== null && (code2 < 32 || code2 === 127)
  );
}
const asciiDigit = regexCheck(/\d/);
const asciiHexDigit = regexCheck(/[\dA-Fa-f]/);
const asciiPunctuation = regexCheck(/[!-/:-@[-`{-~]/);
function markdownLineEnding(code2) {
  return code2 !== null && code2 < -2;
}
function markdownLineEndingOrSpace(code2) {
  return code2 !== null && (code2 < 0 || code2 === 32);
}
function markdownSpace(code2) {
  return code2 === -2 || code2 === -1 || code2 === 32;
}
const unicodePunctuation = regexCheck(/\p{P}|\p{S}/u);
const unicodeWhitespace = regexCheck(/\s/);
function regexCheck(regex) {
  return check;
  function check(code2) {
    return code2 !== null && code2 > -1 && regex.test(String.fromCharCode(code2));
  }
}
function normalizeUri(value) {
  const result = [];
  let index2 = -1;
  let start = 0;
  let skip = 0;
  while (++index2 < value.length) {
    const code2 = value.charCodeAt(index2);
    let replace = "";
    if (code2 === 37 && asciiAlphanumeric(value.charCodeAt(index2 + 1)) && asciiAlphanumeric(value.charCodeAt(index2 + 2))) {
      skip = 2;
    } else if (code2 < 128) {
      if (!/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(code2))) {
        replace = String.fromCharCode(code2);
      }
    } else if (code2 > 55295 && code2 < 57344) {
      const next2 = value.charCodeAt(index2 + 1);
      if (code2 < 56320 && next2 > 56319 && next2 < 57344) {
        replace = String.fromCharCode(code2, next2);
        skip = 1;
      } else {
        replace = "�";
      }
    } else {
      replace = String.fromCharCode(code2);
    }
    if (replace) {
      result.push(value.slice(start, index2), encodeURIComponent(replace));
      start = index2 + skip + 1;
      replace = "";
    }
    if (skip) {
      index2 += skip;
      skip = 0;
    }
  }
  return result.join("") + value.slice(start);
}
function factorySpace(effects, ok2, type, max) {
  const limit = max ? max - 1 : Number.POSITIVE_INFINITY;
  let size = 0;
  return start;
  function start(code2) {
    if (markdownSpace(code2)) {
      effects.enter(type);
      return prefix(code2);
    }
    return ok2(code2);
  }
  function prefix(code2) {
    if (markdownSpace(code2) && size++ < limit) {
      effects.consume(code2);
      return prefix;
    }
    effects.exit(type);
    return ok2(code2);
  }
}
const content$1 = {
  tokenize: initializeContent
};
function initializeContent(effects) {
  const contentStart = effects.attempt(this.parser.constructs.contentInitial, afterContentStartConstruct, paragraphInitial);
  let previous2;
  return contentStart;
  function afterContentStartConstruct(code2) {
    if (code2 === null) {
      effects.consume(code2);
      return;
    }
    effects.enter("lineEnding");
    effects.consume(code2);
    effects.exit("lineEnding");
    return factorySpace(effects, contentStart, "linePrefix");
  }
  function paragraphInitial(code2) {
    effects.enter("paragraph");
    return lineStart(code2);
  }
  function lineStart(code2) {
    const token = effects.enter("chunkText", {
      contentType: "text",
      previous: previous2
    });
    if (previous2) {
      previous2.next = token;
    }
    previous2 = token;
    return data(code2);
  }
  function data(code2) {
    if (code2 === null) {
      effects.exit("chunkText");
      effects.exit("paragraph");
      effects.consume(code2);
      return;
    }
    if (markdownLineEnding(code2)) {
      effects.consume(code2);
      effects.exit("chunkText");
      return lineStart;
    }
    effects.consume(code2);
    return data;
  }
}
const document$2 = {
  tokenize: initializeDocument
};
const containerConstruct = {
  tokenize: tokenizeContainer
};
function initializeDocument(effects) {
  const self2 = this;
  const stack = [];
  let continued = 0;
  let childFlow;
  let childToken;
  let lineStartOffset;
  return start;
  function start(code2) {
    if (continued < stack.length) {
      const item = stack[continued];
      self2.containerState = item[1];
      return effects.attempt(item[0].continuation, documentContinue, checkNewContainers)(code2);
    }
    return checkNewContainers(code2);
  }
  function documentContinue(code2) {
    continued++;
    if (self2.containerState._closeFlow) {
      self2.containerState._closeFlow = void 0;
      if (childFlow) {
        closeFlow();
      }
      const indexBeforeExits = self2.events.length;
      let indexBeforeFlow = indexBeforeExits;
      let point2;
      while (indexBeforeFlow--) {
        if (self2.events[indexBeforeFlow][0] === "exit" && self2.events[indexBeforeFlow][1].type === "chunkFlow") {
          point2 = self2.events[indexBeforeFlow][1].end;
          break;
        }
      }
      exitContainers(continued);
      let index2 = indexBeforeExits;
      while (index2 < self2.events.length) {
        self2.events[index2][1].end = {
          ...point2
        };
        index2++;
      }
      splice(self2.events, indexBeforeFlow + 1, 0, self2.events.slice(indexBeforeExits));
      self2.events.length = index2;
      return checkNewContainers(code2);
    }
    return start(code2);
  }
  function checkNewContainers(code2) {
    if (continued === stack.length) {
      if (!childFlow) {
        return documentContinued(code2);
      }
      if (childFlow.currentConstruct && childFlow.currentConstruct.concrete) {
        return flowStart(code2);
      }
      self2.interrupt = Boolean(childFlow.currentConstruct && !childFlow._gfmTableDynamicInterruptHack);
    }
    self2.containerState = {};
    return effects.check(containerConstruct, thereIsANewContainer, thereIsNoNewContainer)(code2);
  }
  function thereIsANewContainer(code2) {
    if (childFlow) closeFlow();
    exitContainers(continued);
    return documentContinued(code2);
  }
  function thereIsNoNewContainer(code2) {
    self2.parser.lazy[self2.now().line] = continued !== stack.length;
    lineStartOffset = self2.now().offset;
    return flowStart(code2);
  }
  function documentContinued(code2) {
    self2.containerState = {};
    return effects.attempt(containerConstruct, containerContinue, flowStart)(code2);
  }
  function containerContinue(code2) {
    continued++;
    stack.push([self2.currentConstruct, self2.containerState]);
    return documentContinued(code2);
  }
  function flowStart(code2) {
    if (code2 === null) {
      if (childFlow) closeFlow();
      exitContainers(0);
      effects.consume(code2);
      return;
    }
    childFlow = childFlow || self2.parser.flow(self2.now());
    effects.enter("chunkFlow", {
      _tokenizer: childFlow,
      contentType: "flow",
      previous: childToken
    });
    return flowContinue(code2);
  }
  function flowContinue(code2) {
    if (code2 === null) {
      writeToChild(effects.exit("chunkFlow"), true);
      exitContainers(0);
      effects.consume(code2);
      return;
    }
    if (markdownLineEnding(code2)) {
      effects.consume(code2);
      writeToChild(effects.exit("chunkFlow"));
      continued = 0;
      self2.interrupt = void 0;
      return start;
    }
    effects.consume(code2);
    return flowContinue;
  }
  function writeToChild(token, endOfFile) {
    const stream = self2.sliceStream(token);
    if (endOfFile) stream.push(null);
    token.previous = childToken;
    if (childToken) childToken.next = token;
    childToken = token;
    childFlow.defineSkip(token.start);
    childFlow.write(stream);
    if (self2.parser.lazy[token.start.line]) {
      let index2 = childFlow.events.length;
      while (index2--) {
        if (
          // The token starts before the line ending…
          childFlow.events[index2][1].start.offset < lineStartOffset && // …and either is not ended yet…
          (!childFlow.events[index2][1].end || // …or ends after it.
          childFlow.events[index2][1].end.offset > lineStartOffset)
        ) {
          return;
        }
      }
      const indexBeforeExits = self2.events.length;
      let indexBeforeFlow = indexBeforeExits;
      let seen;
      let point2;
      while (indexBeforeFlow--) {
        if (self2.events[indexBeforeFlow][0] === "exit" && self2.events[indexBeforeFlow][1].type === "chunkFlow") {
          if (seen) {
            point2 = self2.events[indexBeforeFlow][1].end;
            break;
          }
          seen = true;
        }
      }
      exitContainers(continued);
      index2 = indexBeforeExits;
      while (index2 < self2.events.length) {
        self2.events[index2][1].end = {
          ...point2
        };
        index2++;
      }
      splice(self2.events, indexBeforeFlow + 1, 0, self2.events.slice(indexBeforeExits));
      self2.events.length = index2;
    }
  }
  function exitContainers(size) {
    let index2 = stack.length;
    while (index2-- > size) {
      const entry = stack[index2];
      self2.containerState = entry[1];
      entry[0].exit.call(self2, effects);
    }
    stack.length = size;
  }
  function closeFlow() {
    childFlow.write([null]);
    childToken = void 0;
    childFlow = void 0;
    self2.containerState._closeFlow = void 0;
  }
}
function tokenizeContainer(effects, ok2, nok) {
  return factorySpace(effects, effects.attempt(this.parser.constructs.document, ok2, nok), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function classifyCharacter(code2) {
  if (code2 === null || markdownLineEndingOrSpace(code2) || unicodeWhitespace(code2)) {
    return 1;
  }
  if (unicodePunctuation(code2)) {
    return 2;
  }
}
function resolveAll(constructs2, events, context) {
  const called = [];
  let index2 = -1;
  while (++index2 < constructs2.length) {
    const resolve = constructs2[index2].resolveAll;
    if (resolve && !called.includes(resolve)) {
      events = resolve(events, context);
      called.push(resolve);
    }
  }
  return events;
}
const attention = {
  name: "attention",
  resolveAll: resolveAllAttention,
  tokenize: tokenizeAttention
};
function resolveAllAttention(events, context) {
  let index2 = -1;
  let open;
  let group;
  let text2;
  let openingSequence;
  let closingSequence;
  let use;
  let nextEvents;
  let offset;
  while (++index2 < events.length) {
    if (events[index2][0] === "enter" && events[index2][1].type === "attentionSequence" && events[index2][1]._close) {
      open = index2;
      while (open--) {
        if (events[open][0] === "exit" && events[open][1].type === "attentionSequence" && events[open][1]._open && // If the markers are the same:
        context.sliceSerialize(events[open][1]).charCodeAt(0) === context.sliceSerialize(events[index2][1]).charCodeAt(0)) {
          if ((events[open][1]._close || events[index2][1]._open) && (events[index2][1].end.offset - events[index2][1].start.offset) % 3 && !((events[open][1].end.offset - events[open][1].start.offset + events[index2][1].end.offset - events[index2][1].start.offset) % 3)) {
            continue;
          }
          use = events[open][1].end.offset - events[open][1].start.offset > 1 && events[index2][1].end.offset - events[index2][1].start.offset > 1 ? 2 : 1;
          const start = {
            ...events[open][1].end
          };
          const end = {
            ...events[index2][1].start
          };
          movePoint(start, -use);
          movePoint(end, use);
          openingSequence = {
            type: use > 1 ? "strongSequence" : "emphasisSequence",
            start,
            end: {
              ...events[open][1].end
            }
          };
          closingSequence = {
            type: use > 1 ? "strongSequence" : "emphasisSequence",
            start: {
              ...events[index2][1].start
            },
            end
          };
          text2 = {
            type: use > 1 ? "strongText" : "emphasisText",
            start: {
              ...events[open][1].end
            },
            end: {
              ...events[index2][1].start
            }
          };
          group = {
            type: use > 1 ? "strong" : "emphasis",
            start: {
              ...openingSequence.start
            },
            end: {
              ...closingSequence.end
            }
          };
          events[open][1].end = {
            ...openingSequence.start
          };
          events[index2][1].start = {
            ...closingSequence.end
          };
          nextEvents = [];
          if (events[open][1].end.offset - events[open][1].start.offset) {
            nextEvents = push(nextEvents, [["enter", events[open][1], context], ["exit", events[open][1], context]]);
          }
          nextEvents = push(nextEvents, [["enter", group, context], ["enter", openingSequence, context], ["exit", openingSequence, context], ["enter", text2, context]]);
          nextEvents = push(nextEvents, resolveAll(context.parser.constructs.insideSpan.null, events.slice(open + 1, index2), context));
          nextEvents = push(nextEvents, [["exit", text2, context], ["enter", closingSequence, context], ["exit", closingSequence, context], ["exit", group, context]]);
          if (events[index2][1].end.offset - events[index2][1].start.offset) {
            offset = 2;
            nextEvents = push(nextEvents, [["enter", events[index2][1], context], ["exit", events[index2][1], context]]);
          } else {
            offset = 0;
          }
          splice(events, open - 1, index2 - open + 3, nextEvents);
          index2 = open + nextEvents.length - offset - 2;
          break;
        }
      }
    }
  }
  index2 = -1;
  while (++index2 < events.length) {
    if (events[index2][1].type === "attentionSequence") {
      events[index2][1].type = "data";
    }
  }
  return events;
}
function tokenizeAttention(effects, ok2) {
  const attentionMarkers2 = this.parser.constructs.attentionMarkers.null;
  const previous2 = this.previous;
  const before = classifyCharacter(previous2);
  let marker;
  return start;
  function start(code2) {
    marker = code2;
    effects.enter("attentionSequence");
    return inside(code2);
  }
  function inside(code2) {
    if (code2 === marker) {
      effects.consume(code2);
      return inside;
    }
    const token = effects.exit("attentionSequence");
    const after = classifyCharacter(code2);
    const open = !after || after === 2 && before || attentionMarkers2.includes(code2);
    const close = !before || before === 2 && after || attentionMarkers2.includes(previous2);
    token._open = Boolean(marker === 42 ? open : open && (before || !close));
    token._close = Boolean(marker === 42 ? close : close && (after || !open));
    return ok2(code2);
  }
}
function movePoint(point2, offset) {
  point2.column += offset;
  point2.offset += offset;
  point2._bufferIndex += offset;
}
const autolink = {
  name: "autolink",
  tokenize: tokenizeAutolink
};
function tokenizeAutolink(effects, ok2, nok) {
  let size = 0;
  return start;
  function start(code2) {
    effects.enter("autolink");
    effects.enter("autolinkMarker");
    effects.consume(code2);
    effects.exit("autolinkMarker");
    effects.enter("autolinkProtocol");
    return open;
  }
  function open(code2) {
    if (asciiAlpha(code2)) {
      effects.consume(code2);
      return schemeOrEmailAtext;
    }
    if (code2 === 64) {
      return nok(code2);
    }
    return emailAtext(code2);
  }
  function schemeOrEmailAtext(code2) {
    if (code2 === 43 || code2 === 45 || code2 === 46 || asciiAlphanumeric(code2)) {
      size = 1;
      return schemeInsideOrEmailAtext(code2);
    }
    return emailAtext(code2);
  }
  function schemeInsideOrEmailAtext(code2) {
    if (code2 === 58) {
      effects.consume(code2);
      size = 0;
      return urlInside;
    }
    if ((code2 === 43 || code2 === 45 || code2 === 46 || asciiAlphanumeric(code2)) && size++ < 32) {
      effects.consume(code2);
      return schemeInsideOrEmailAtext;
    }
    size = 0;
    return emailAtext(code2);
  }
  function urlInside(code2) {
    if (code2 === 62) {
      effects.exit("autolinkProtocol");
      effects.enter("autolinkMarker");
      effects.consume(code2);
      effects.exit("autolinkMarker");
      effects.exit("autolink");
      return ok2;
    }
    if (code2 === null || code2 === 32 || code2 === 60 || asciiControl(code2)) {
      return nok(code2);
    }
    effects.consume(code2);
    return urlInside;
  }
  function emailAtext(code2) {
    if (code2 === 64) {
      effects.consume(code2);
      return emailAtSignOrDot;
    }
    if (asciiAtext(code2)) {
      effects.consume(code2);
      return emailAtext;
    }
    return nok(code2);
  }
  function emailAtSignOrDot(code2) {
    return asciiAlphanumeric(code2) ? emailLabel(code2) : nok(code2);
  }
  function emailLabel(code2) {
    if (code2 === 46) {
      effects.consume(code2);
      size = 0;
      return emailAtSignOrDot;
    }
    if (code2 === 62) {
      effects.exit("autolinkProtocol").type = "autolinkEmail";
      effects.enter("autolinkMarker");
      effects.consume(code2);
      effects.exit("autolinkMarker");
      effects.exit("autolink");
      return ok2;
    }
    return emailValue(code2);
  }
  function emailValue(code2) {
    if ((code2 === 45 || asciiAlphanumeric(code2)) && size++ < 63) {
      const next2 = code2 === 45 ? emailValue : emailLabel;
      effects.consume(code2);
      return next2;
    }
    return nok(code2);
  }
}
const blankLine = {
  partial: true,
  tokenize: tokenizeBlankLine
};
function tokenizeBlankLine(effects, ok2, nok) {
  return start;
  function start(code2) {
    return markdownSpace(code2) ? factorySpace(effects, after, "linePrefix")(code2) : after(code2);
  }
  function after(code2) {
    return code2 === null || markdownLineEnding(code2) ? ok2(code2) : nok(code2);
  }
}
const blockQuote = {
  continuation: {
    tokenize: tokenizeBlockQuoteContinuation
  },
  exit,
  name: "blockQuote",
  tokenize: tokenizeBlockQuoteStart
};
function tokenizeBlockQuoteStart(effects, ok2, nok) {
  const self2 = this;
  return start;
  function start(code2) {
    if (code2 === 62) {
      const state = self2.containerState;
      if (!state.open) {
        effects.enter("blockQuote", {
          _container: true
        });
        state.open = true;
      }
      effects.enter("blockQuotePrefix");
      effects.enter("blockQuoteMarker");
      effects.consume(code2);
      effects.exit("blockQuoteMarker");
      return after;
    }
    return nok(code2);
  }
  function after(code2) {
    if (markdownSpace(code2)) {
      effects.enter("blockQuotePrefixWhitespace");
      effects.consume(code2);
      effects.exit("blockQuotePrefixWhitespace");
      effects.exit("blockQuotePrefix");
      return ok2;
    }
    effects.exit("blockQuotePrefix");
    return ok2(code2);
  }
}
function tokenizeBlockQuoteContinuation(effects, ok2, nok) {
  const self2 = this;
  return contStart;
  function contStart(code2) {
    if (markdownSpace(code2)) {
      return factorySpace(effects, contBefore, "linePrefix", self2.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(code2);
    }
    return contBefore(code2);
  }
  function contBefore(code2) {
    return effects.attempt(blockQuote, ok2, nok)(code2);
  }
}
function exit(effects) {
  effects.exit("blockQuote");
}
const characterEscape = {
  name: "characterEscape",
  tokenize: tokenizeCharacterEscape
};
function tokenizeCharacterEscape(effects, ok2, nok) {
  return start;
  function start(code2) {
    effects.enter("characterEscape");
    effects.enter("escapeMarker");
    effects.consume(code2);
    effects.exit("escapeMarker");
    return inside;
  }
  function inside(code2) {
    if (asciiPunctuation(code2)) {
      effects.enter("characterEscapeValue");
      effects.consume(code2);
      effects.exit("characterEscapeValue");
      effects.exit("characterEscape");
      return ok2;
    }
    return nok(code2);
  }
}
const characterReference = {
  name: "characterReference",
  tokenize: tokenizeCharacterReference
};
function tokenizeCharacterReference(effects, ok2, nok) {
  const self2 = this;
  let size = 0;
  let max;
  let test;
  return start;
  function start(code2) {
    effects.enter("characterReference");
    effects.enter("characterReferenceMarker");
    effects.consume(code2);
    effects.exit("characterReferenceMarker");
    return open;
  }
  function open(code2) {
    if (code2 === 35) {
      effects.enter("characterReferenceMarkerNumeric");
      effects.consume(code2);
      effects.exit("characterReferenceMarkerNumeric");
      return numeric;
    }
    effects.enter("characterReferenceValue");
    max = 31;
    test = asciiAlphanumeric;
    return value(code2);
  }
  function numeric(code2) {
    if (code2 === 88 || code2 === 120) {
      effects.enter("characterReferenceMarkerHexadecimal");
      effects.consume(code2);
      effects.exit("characterReferenceMarkerHexadecimal");
      effects.enter("characterReferenceValue");
      max = 6;
      test = asciiHexDigit;
      return value;
    }
    effects.enter("characterReferenceValue");
    max = 7;
    test = asciiDigit;
    return value(code2);
  }
  function value(code2) {
    if (code2 === 59 && size) {
      const token = effects.exit("characterReferenceValue");
      if (test === asciiAlphanumeric && !decodeNamedCharacterReference(self2.sliceSerialize(token))) {
        return nok(code2);
      }
      effects.enter("characterReferenceMarker");
      effects.consume(code2);
      effects.exit("characterReferenceMarker");
      effects.exit("characterReference");
      return ok2;
    }
    if (test(code2) && size++ < max) {
      effects.consume(code2);
      return value;
    }
    return nok(code2);
  }
}
const nonLazyContinuation = {
  partial: true,
  tokenize: tokenizeNonLazyContinuation
};
const codeFenced = {
  concrete: true,
  name: "codeFenced",
  tokenize: tokenizeCodeFenced
};
function tokenizeCodeFenced(effects, ok2, nok) {
  const self2 = this;
  const closeStart = {
    partial: true,
    tokenize: tokenizeCloseStart
  };
  let initialPrefix = 0;
  let sizeOpen = 0;
  let marker;
  return start;
  function start(code2) {
    return beforeSequenceOpen(code2);
  }
  function beforeSequenceOpen(code2) {
    const tail = self2.events[self2.events.length - 1];
    initialPrefix = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], true).length : 0;
    marker = code2;
    effects.enter("codeFenced");
    effects.enter("codeFencedFence");
    effects.enter("codeFencedFenceSequence");
    return sequenceOpen(code2);
  }
  function sequenceOpen(code2) {
    if (code2 === marker) {
      sizeOpen++;
      effects.consume(code2);
      return sequenceOpen;
    }
    if (sizeOpen < 3) {
      return nok(code2);
    }
    effects.exit("codeFencedFenceSequence");
    return markdownSpace(code2) ? factorySpace(effects, infoBefore, "whitespace")(code2) : infoBefore(code2);
  }
  function infoBefore(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      effects.exit("codeFencedFence");
      return self2.interrupt ? ok2(code2) : effects.check(nonLazyContinuation, atNonLazyBreak, after)(code2);
    }
    effects.enter("codeFencedFenceInfo");
    effects.enter("chunkString", {
      contentType: "string"
    });
    return info(code2);
  }
  function info(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      effects.exit("chunkString");
      effects.exit("codeFencedFenceInfo");
      return infoBefore(code2);
    }
    if (markdownSpace(code2)) {
      effects.exit("chunkString");
      effects.exit("codeFencedFenceInfo");
      return factorySpace(effects, metaBefore, "whitespace")(code2);
    }
    if (code2 === 96 && code2 === marker) {
      return nok(code2);
    }
    effects.consume(code2);
    return info;
  }
  function metaBefore(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      return infoBefore(code2);
    }
    effects.enter("codeFencedFenceMeta");
    effects.enter("chunkString", {
      contentType: "string"
    });
    return meta(code2);
  }
  function meta(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      effects.exit("chunkString");
      effects.exit("codeFencedFenceMeta");
      return infoBefore(code2);
    }
    if (code2 === 96 && code2 === marker) {
      return nok(code2);
    }
    effects.consume(code2);
    return meta;
  }
  function atNonLazyBreak(code2) {
    return effects.attempt(closeStart, after, contentBefore)(code2);
  }
  function contentBefore(code2) {
    effects.enter("lineEnding");
    effects.consume(code2);
    effects.exit("lineEnding");
    return contentStart;
  }
  function contentStart(code2) {
    return initialPrefix > 0 && markdownSpace(code2) ? factorySpace(effects, beforeContentChunk, "linePrefix", initialPrefix + 1)(code2) : beforeContentChunk(code2);
  }
  function beforeContentChunk(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      return effects.check(nonLazyContinuation, atNonLazyBreak, after)(code2);
    }
    effects.enter("codeFlowValue");
    return contentChunk(code2);
  }
  function contentChunk(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      effects.exit("codeFlowValue");
      return beforeContentChunk(code2);
    }
    effects.consume(code2);
    return contentChunk;
  }
  function after(code2) {
    effects.exit("codeFenced");
    return ok2(code2);
  }
  function tokenizeCloseStart(effects2, ok3, nok2) {
    let size = 0;
    return startBefore;
    function startBefore(code2) {
      effects2.enter("lineEnding");
      effects2.consume(code2);
      effects2.exit("lineEnding");
      return start2;
    }
    function start2(code2) {
      effects2.enter("codeFencedFence");
      return markdownSpace(code2) ? factorySpace(effects2, beforeSequenceClose, "linePrefix", self2.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(code2) : beforeSequenceClose(code2);
    }
    function beforeSequenceClose(code2) {
      if (code2 === marker) {
        effects2.enter("codeFencedFenceSequence");
        return sequenceClose(code2);
      }
      return nok2(code2);
    }
    function sequenceClose(code2) {
      if (code2 === marker) {
        size++;
        effects2.consume(code2);
        return sequenceClose;
      }
      if (size >= sizeOpen) {
        effects2.exit("codeFencedFenceSequence");
        return markdownSpace(code2) ? factorySpace(effects2, sequenceCloseAfter, "whitespace")(code2) : sequenceCloseAfter(code2);
      }
      return nok2(code2);
    }
    function sequenceCloseAfter(code2) {
      if (code2 === null || markdownLineEnding(code2)) {
        effects2.exit("codeFencedFence");
        return ok3(code2);
      }
      return nok2(code2);
    }
  }
}
function tokenizeNonLazyContinuation(effects, ok2, nok) {
  const self2 = this;
  return start;
  function start(code2) {
    if (code2 === null) {
      return nok(code2);
    }
    effects.enter("lineEnding");
    effects.consume(code2);
    effects.exit("lineEnding");
    return lineStart;
  }
  function lineStart(code2) {
    return self2.parser.lazy[self2.now().line] ? nok(code2) : ok2(code2);
  }
}
const codeIndented = {
  name: "codeIndented",
  tokenize: tokenizeCodeIndented
};
const furtherStart = {
  partial: true,
  tokenize: tokenizeFurtherStart
};
function tokenizeCodeIndented(effects, ok2, nok) {
  const self2 = this;
  return start;
  function start(code2) {
    effects.enter("codeIndented");
    return factorySpace(effects, afterPrefix, "linePrefix", 4 + 1)(code2);
  }
  function afterPrefix(code2) {
    const tail = self2.events[self2.events.length - 1];
    return tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4 ? atBreak(code2) : nok(code2);
  }
  function atBreak(code2) {
    if (code2 === null) {
      return after(code2);
    }
    if (markdownLineEnding(code2)) {
      return effects.attempt(furtherStart, atBreak, after)(code2);
    }
    effects.enter("codeFlowValue");
    return inside(code2);
  }
  function inside(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      effects.exit("codeFlowValue");
      return atBreak(code2);
    }
    effects.consume(code2);
    return inside;
  }
  function after(code2) {
    effects.exit("codeIndented");
    return ok2(code2);
  }
}
function tokenizeFurtherStart(effects, ok2, nok) {
  const self2 = this;
  return furtherStart2;
  function furtherStart2(code2) {
    if (self2.parser.lazy[self2.now().line]) {
      return nok(code2);
    }
    if (markdownLineEnding(code2)) {
      effects.enter("lineEnding");
      effects.consume(code2);
      effects.exit("lineEnding");
      return furtherStart2;
    }
    return factorySpace(effects, afterPrefix, "linePrefix", 4 + 1)(code2);
  }
  function afterPrefix(code2) {
    const tail = self2.events[self2.events.length - 1];
    return tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4 ? ok2(code2) : markdownLineEnding(code2) ? furtherStart2(code2) : nok(code2);
  }
}
const codeText = {
  name: "codeText",
  previous,
  resolve: resolveCodeText,
  tokenize: tokenizeCodeText
};
function resolveCodeText(events) {
  let tailExitIndex = events.length - 4;
  let headEnterIndex = 3;
  let index2;
  let enter;
  if ((events[headEnterIndex][1].type === "lineEnding" || events[headEnterIndex][1].type === "space") && (events[tailExitIndex][1].type === "lineEnding" || events[tailExitIndex][1].type === "space")) {
    index2 = headEnterIndex;
    while (++index2 < tailExitIndex) {
      if (events[index2][1].type === "codeTextData") {
        events[headEnterIndex][1].type = "codeTextPadding";
        events[tailExitIndex][1].type = "codeTextPadding";
        headEnterIndex += 2;
        tailExitIndex -= 2;
        break;
      }
    }
  }
  index2 = headEnterIndex - 1;
  tailExitIndex++;
  while (++index2 <= tailExitIndex) {
    if (enter === void 0) {
      if (index2 !== tailExitIndex && events[index2][1].type !== "lineEnding") {
        enter = index2;
      }
    } else if (index2 === tailExitIndex || events[index2][1].type === "lineEnding") {
      events[enter][1].type = "codeTextData";
      if (index2 !== enter + 2) {
        events[enter][1].end = events[index2 - 1][1].end;
        events.splice(enter + 2, index2 - enter - 2);
        tailExitIndex -= index2 - enter - 2;
        index2 = enter + 2;
      }
      enter = void 0;
    }
  }
  return events;
}
function previous(code2) {
  return code2 !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function tokenizeCodeText(effects, ok2, nok) {
  let sizeOpen = 0;
  let size;
  let token;
  return start;
  function start(code2) {
    effects.enter("codeText");
    effects.enter("codeTextSequence");
    return sequenceOpen(code2);
  }
  function sequenceOpen(code2) {
    if (code2 === 96) {
      effects.consume(code2);
      sizeOpen++;
      return sequenceOpen;
    }
    effects.exit("codeTextSequence");
    return between2(code2);
  }
  function between2(code2) {
    if (code2 === null) {
      return nok(code2);
    }
    if (code2 === 32) {
      effects.enter("space");
      effects.consume(code2);
      effects.exit("space");
      return between2;
    }
    if (code2 === 96) {
      token = effects.enter("codeTextSequence");
      size = 0;
      return sequenceClose(code2);
    }
    if (markdownLineEnding(code2)) {
      effects.enter("lineEnding");
      effects.consume(code2);
      effects.exit("lineEnding");
      return between2;
    }
    effects.enter("codeTextData");
    return data(code2);
  }
  function data(code2) {
    if (code2 === null || code2 === 32 || code2 === 96 || markdownLineEnding(code2)) {
      effects.exit("codeTextData");
      return between2(code2);
    }
    effects.consume(code2);
    return data;
  }
  function sequenceClose(code2) {
    if (code2 === 96) {
      effects.consume(code2);
      size++;
      return sequenceClose;
    }
    if (size === sizeOpen) {
      effects.exit("codeTextSequence");
      effects.exit("codeText");
      return ok2(code2);
    }
    token.type = "codeTextData";
    return data(code2);
  }
}
class SpliceBuffer {
  /**
   * @param {ReadonlyArray<T> | null | undefined} [initial]
   *   Initial items (optional).
   * @returns
   *   Splice buffer.
   */
  constructor(initial) {
    this.left = initial ? [...initial] : [];
    this.right = [];
  }
  /**
   * Array access;
   * does not move the cursor.
   *
   * @param {number} index
   *   Index.
   * @return {T}
   *   Item.
   */
  get(index2) {
    if (index2 < 0 || index2 >= this.left.length + this.right.length) {
      throw new RangeError("Cannot access index `" + index2 + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
    }
    if (index2 < this.left.length) return this.left[index2];
    return this.right[this.right.length - index2 + this.left.length - 1];
  }
  /**
   * The length of the splice buffer, one greater than the largest index in the
   * array.
   */
  get length() {
    return this.left.length + this.right.length;
  }
  /**
   * Remove and return `list[0]`;
   * moves the cursor to `0`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  shift() {
    this.setCursor(0);
    return this.right.pop();
  }
  /**
   * Slice the buffer to get an array;
   * does not move the cursor.
   *
   * @param {number} start
   *   Start.
   * @param {number | null | undefined} [end]
   *   End (optional).
   * @returns {Array<T>}
   *   Array of items.
   */
  slice(start, end) {
    const stop = end === null || end === void 0 ? Number.POSITIVE_INFINITY : end;
    if (stop < this.left.length) {
      return this.left.slice(start, stop);
    }
    if (start > this.left.length) {
      return this.right.slice(this.right.length - stop + this.left.length, this.right.length - start + this.left.length).reverse();
    }
    return this.left.slice(start).concat(this.right.slice(this.right.length - stop + this.left.length).reverse());
  }
  /**
   * Mimics the behavior of Array.prototype.splice() except for the change of
   * interface necessary to avoid segfaults when patching in very large arrays.
   *
   * This operation moves cursor is moved to `start` and results in the cursor
   * placed after any inserted items.
   *
   * @param {number} start
   *   Start;
   *   zero-based index at which to start changing the array;
   *   negative numbers count backwards from the end of the array and values
   *   that are out-of bounds are clamped to the appropriate end of the array.
   * @param {number | null | undefined} [deleteCount=0]
   *   Delete count (default: `0`);
   *   maximum number of elements to delete, starting from start.
   * @param {Array<T> | null | undefined} [items=[]]
   *   Items to include in place of the deleted items (default: `[]`).
   * @return {Array<T>}
   *   Any removed items.
   */
  splice(start, deleteCount, items) {
    const count = deleteCount || 0;
    this.setCursor(Math.trunc(start));
    const removed = this.right.splice(this.right.length - count, Number.POSITIVE_INFINITY);
    if (items) chunkedPush(this.left, items);
    return removed.reverse();
  }
  /**
   * Remove and return the highest-numbered item in the array, so
   * `list[list.length - 1]`;
   * Moves the cursor to `length`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  pop() {
    this.setCursor(Number.POSITIVE_INFINITY);
    return this.left.pop();
  }
  /**
   * Inserts a single item to the high-numbered side of the array;
   * moves the cursor to `length`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  push(item) {
    this.setCursor(Number.POSITIVE_INFINITY);
    this.left.push(item);
  }
  /**
   * Inserts many items to the high-numbered side of the array.
   * Moves the cursor to `length`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  pushMany(items) {
    this.setCursor(Number.POSITIVE_INFINITY);
    chunkedPush(this.left, items);
  }
  /**
   * Inserts a single item to the low-numbered side of the array;
   * Moves the cursor to `0`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  unshift(item) {
    this.setCursor(0);
    this.right.push(item);
  }
  /**
   * Inserts many items to the low-numbered side of the array;
   * moves the cursor to `0`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  unshiftMany(items) {
    this.setCursor(0);
    chunkedPush(this.right, items.reverse());
  }
  /**
   * Move the cursor to a specific position in the array. Requires
   * time proportional to the distance moved.
   *
   * If `n < 0`, the cursor will end up at the beginning.
   * If `n > length`, the cursor will end up at the end.
   *
   * @param {number} n
   *   Position.
   * @return {undefined}
   *   Nothing.
   */
  setCursor(n) {
    if (n === this.left.length || n > this.left.length && this.right.length === 0 || n < 0 && this.left.length === 0) return;
    if (n < this.left.length) {
      const removed = this.left.splice(n, Number.POSITIVE_INFINITY);
      chunkedPush(this.right, removed.reverse());
    } else {
      const removed = this.right.splice(this.left.length + this.right.length - n, Number.POSITIVE_INFINITY);
      chunkedPush(this.left, removed.reverse());
    }
  }
}
function chunkedPush(list2, right) {
  let chunkStart = 0;
  if (right.length < 1e4) {
    list2.push(...right);
  } else {
    while (chunkStart < right.length) {
      list2.push(...right.slice(chunkStart, chunkStart + 1e4));
      chunkStart += 1e4;
    }
  }
}
function subtokenize(eventsArray) {
  const jumps = {};
  let index2 = -1;
  let event;
  let lineIndex;
  let otherIndex;
  let otherEvent;
  let parameters;
  let subevents;
  let more;
  const events = new SpliceBuffer(eventsArray);
  while (++index2 < events.length) {
    while (index2 in jumps) {
      index2 = jumps[index2];
    }
    event = events.get(index2);
    if (index2 && event[1].type === "chunkFlow" && events.get(index2 - 1)[1].type === "listItemPrefix") {
      subevents = event[1]._tokenizer.events;
      otherIndex = 0;
      if (otherIndex < subevents.length && subevents[otherIndex][1].type === "lineEndingBlank") {
        otherIndex += 2;
      }
      if (otherIndex < subevents.length && subevents[otherIndex][1].type === "content") {
        while (++otherIndex < subevents.length) {
          if (subevents[otherIndex][1].type === "content") {
            break;
          }
          if (subevents[otherIndex][1].type === "chunkText") {
            subevents[otherIndex][1]._isInFirstContentOfListItem = true;
            otherIndex++;
          }
        }
      }
    }
    if (event[0] === "enter") {
      if (event[1].contentType) {
        Object.assign(jumps, subcontent(events, index2));
        index2 = jumps[index2];
        more = true;
      }
    } else if (event[1]._container) {
      otherIndex = index2;
      lineIndex = void 0;
      while (otherIndex--) {
        otherEvent = events.get(otherIndex);
        if (otherEvent[1].type === "lineEnding" || otherEvent[1].type === "lineEndingBlank") {
          if (otherEvent[0] === "enter") {
            if (lineIndex) {
              events.get(lineIndex)[1].type = "lineEndingBlank";
            }
            otherEvent[1].type = "lineEnding";
            lineIndex = otherIndex;
          }
        } else if (otherEvent[1].type === "linePrefix" || otherEvent[1].type === "listItemIndent") ;
        else {
          break;
        }
      }
      if (lineIndex) {
        event[1].end = {
          ...events.get(lineIndex)[1].start
        };
        parameters = events.slice(lineIndex, index2);
        parameters.unshift(event);
        events.splice(lineIndex, index2 - lineIndex + 1, parameters);
      }
    }
  }
  splice(eventsArray, 0, Number.POSITIVE_INFINITY, events.slice(0));
  return !more;
}
function subcontent(events, eventIndex) {
  const token = events.get(eventIndex)[1];
  const context = events.get(eventIndex)[2];
  let startPosition = eventIndex - 1;
  const startPositions = [];
  let tokenizer = token._tokenizer;
  if (!tokenizer) {
    tokenizer = context.parser[token.contentType](token.start);
    if (token._contentTypeTextTrailing) {
      tokenizer._contentTypeTextTrailing = true;
    }
  }
  const childEvents = tokenizer.events;
  const jumps = [];
  const gaps = {};
  let stream;
  let previous2;
  let index2 = -1;
  let current = token;
  let adjust = 0;
  let start = 0;
  const breaks = [start];
  while (current) {
    while (events.get(++startPosition)[1] !== current) {
    }
    startPositions.push(startPosition);
    if (!current._tokenizer) {
      stream = context.sliceStream(current);
      if (!current.next) {
        stream.push(null);
      }
      if (previous2) {
        tokenizer.defineSkip(current.start);
      }
      if (current._isInFirstContentOfListItem) {
        tokenizer._gfmTasklistFirstContentOfListItem = true;
      }
      tokenizer.write(stream);
      if (current._isInFirstContentOfListItem) {
        tokenizer._gfmTasklistFirstContentOfListItem = void 0;
      }
    }
    previous2 = current;
    current = current.next;
  }
  current = token;
  while (++index2 < childEvents.length) {
    if (
      // Find a void token that includes a break.
      childEvents[index2][0] === "exit" && childEvents[index2 - 1][0] === "enter" && childEvents[index2][1].type === childEvents[index2 - 1][1].type && childEvents[index2][1].start.line !== childEvents[index2][1].end.line
    ) {
      start = index2 + 1;
      breaks.push(start);
      current._tokenizer = void 0;
      current.previous = void 0;
      current = current.next;
    }
  }
  tokenizer.events = [];
  if (current) {
    current._tokenizer = void 0;
    current.previous = void 0;
  } else {
    breaks.pop();
  }
  index2 = breaks.length;
  while (index2--) {
    const slice = childEvents.slice(breaks[index2], breaks[index2 + 1]);
    const start2 = startPositions.pop();
    jumps.push([start2, start2 + slice.length - 1]);
    events.splice(start2, 2, slice);
  }
  jumps.reverse();
  index2 = -1;
  while (++index2 < jumps.length) {
    gaps[adjust + jumps[index2][0]] = adjust + jumps[index2][1];
    adjust += jumps[index2][1] - jumps[index2][0] - 1;
  }
  return gaps;
}
const content = {
  resolve: resolveContent,
  tokenize: tokenizeContent
};
const continuationConstruct = {
  partial: true,
  tokenize: tokenizeContinuation
};
function resolveContent(events) {
  subtokenize(events);
  return events;
}
function tokenizeContent(effects, ok2) {
  let previous2;
  return chunkStart;
  function chunkStart(code2) {
    effects.enter("content");
    previous2 = effects.enter("chunkContent", {
      contentType: "content"
    });
    return chunkInside(code2);
  }
  function chunkInside(code2) {
    if (code2 === null) {
      return contentEnd(code2);
    }
    if (markdownLineEnding(code2)) {
      return effects.check(continuationConstruct, contentContinue, contentEnd)(code2);
    }
    effects.consume(code2);
    return chunkInside;
  }
  function contentEnd(code2) {
    effects.exit("chunkContent");
    effects.exit("content");
    return ok2(code2);
  }
  function contentContinue(code2) {
    effects.consume(code2);
    effects.exit("chunkContent");
    previous2.next = effects.enter("chunkContent", {
      contentType: "content",
      previous: previous2
    });
    previous2 = previous2.next;
    return chunkInside;
  }
}
function tokenizeContinuation(effects, ok2, nok) {
  const self2 = this;
  return startLookahead;
  function startLookahead(code2) {
    effects.exit("chunkContent");
    effects.enter("lineEnding");
    effects.consume(code2);
    effects.exit("lineEnding");
    return factorySpace(effects, prefixed, "linePrefix");
  }
  function prefixed(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      return nok(code2);
    }
    const tail = self2.events[self2.events.length - 1];
    if (!self2.parser.constructs.disable.null.includes("codeIndented") && tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4) {
      return ok2(code2);
    }
    return effects.interrupt(self2.parser.constructs.flow, nok, ok2)(code2);
  }
}
function factoryDestination(effects, ok2, nok, type, literalType, literalMarkerType, rawType, stringType, max) {
  const limit = max || Number.POSITIVE_INFINITY;
  let balance = 0;
  return start;
  function start(code2) {
    if (code2 === 60) {
      effects.enter(type);
      effects.enter(literalType);
      effects.enter(literalMarkerType);
      effects.consume(code2);
      effects.exit(literalMarkerType);
      return enclosedBefore;
    }
    if (code2 === null || code2 === 32 || code2 === 41 || asciiControl(code2)) {
      return nok(code2);
    }
    effects.enter(type);
    effects.enter(rawType);
    effects.enter(stringType);
    effects.enter("chunkString", {
      contentType: "string"
    });
    return raw2(code2);
  }
  function enclosedBefore(code2) {
    if (code2 === 62) {
      effects.enter(literalMarkerType);
      effects.consume(code2);
      effects.exit(literalMarkerType);
      effects.exit(literalType);
      effects.exit(type);
      return ok2;
    }
    effects.enter(stringType);
    effects.enter("chunkString", {
      contentType: "string"
    });
    return enclosed(code2);
  }
  function enclosed(code2) {
    if (code2 === 62) {
      effects.exit("chunkString");
      effects.exit(stringType);
      return enclosedBefore(code2);
    }
    if (code2 === null || code2 === 60 || markdownLineEnding(code2)) {
      return nok(code2);
    }
    effects.consume(code2);
    return code2 === 92 ? enclosedEscape : enclosed;
  }
  function enclosedEscape(code2) {
    if (code2 === 60 || code2 === 62 || code2 === 92) {
      effects.consume(code2);
      return enclosed;
    }
    return enclosed(code2);
  }
  function raw2(code2) {
    if (!balance && (code2 === null || code2 === 41 || markdownLineEndingOrSpace(code2))) {
      effects.exit("chunkString");
      effects.exit(stringType);
      effects.exit(rawType);
      effects.exit(type);
      return ok2(code2);
    }
    if (balance < limit && code2 === 40) {
      effects.consume(code2);
      balance++;
      return raw2;
    }
    if (code2 === 41) {
      effects.consume(code2);
      balance--;
      return raw2;
    }
    if (code2 === null || code2 === 32 || code2 === 40 || asciiControl(code2)) {
      return nok(code2);
    }
    effects.consume(code2);
    return code2 === 92 ? rawEscape : raw2;
  }
  function rawEscape(code2) {
    if (code2 === 40 || code2 === 41 || code2 === 92) {
      effects.consume(code2);
      return raw2;
    }
    return raw2(code2);
  }
}
function factoryLabel(effects, ok2, nok, type, markerType, stringType) {
  const self2 = this;
  let size = 0;
  let seen;
  return start;
  function start(code2) {
    effects.enter(type);
    effects.enter(markerType);
    effects.consume(code2);
    effects.exit(markerType);
    effects.enter(stringType);
    return atBreak;
  }
  function atBreak(code2) {
    if (size > 999 || code2 === null || code2 === 91 || code2 === 93 && !seen || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    code2 === 94 && !size && "_hiddenFootnoteSupport" in self2.parser.constructs) {
      return nok(code2);
    }
    if (code2 === 93) {
      effects.exit(stringType);
      effects.enter(markerType);
      effects.consume(code2);
      effects.exit(markerType);
      effects.exit(type);
      return ok2;
    }
    if (markdownLineEnding(code2)) {
      effects.enter("lineEnding");
      effects.consume(code2);
      effects.exit("lineEnding");
      return atBreak;
    }
    effects.enter("chunkString", {
      contentType: "string"
    });
    return labelInside(code2);
  }
  function labelInside(code2) {
    if (code2 === null || code2 === 91 || code2 === 93 || markdownLineEnding(code2) || size++ > 999) {
      effects.exit("chunkString");
      return atBreak(code2);
    }
    effects.consume(code2);
    if (!seen) seen = !markdownSpace(code2);
    return code2 === 92 ? labelEscape : labelInside;
  }
  function labelEscape(code2) {
    if (code2 === 91 || code2 === 92 || code2 === 93) {
      effects.consume(code2);
      size++;
      return labelInside;
    }
    return labelInside(code2);
  }
}
function factoryTitle(effects, ok2, nok, type, markerType, stringType) {
  let marker;
  return start;
  function start(code2) {
    if (code2 === 34 || code2 === 39 || code2 === 40) {
      effects.enter(type);
      effects.enter(markerType);
      effects.consume(code2);
      effects.exit(markerType);
      marker = code2 === 40 ? 41 : code2;
      return begin;
    }
    return nok(code2);
  }
  function begin(code2) {
    if (code2 === marker) {
      effects.enter(markerType);
      effects.consume(code2);
      effects.exit(markerType);
      effects.exit(type);
      return ok2;
    }
    effects.enter(stringType);
    return atBreak(code2);
  }
  function atBreak(code2) {
    if (code2 === marker) {
      effects.exit(stringType);
      return begin(marker);
    }
    if (code2 === null) {
      return nok(code2);
    }
    if (markdownLineEnding(code2)) {
      effects.enter("lineEnding");
      effects.consume(code2);
      effects.exit("lineEnding");
      return factorySpace(effects, atBreak, "linePrefix");
    }
    effects.enter("chunkString", {
      contentType: "string"
    });
    return inside(code2);
  }
  function inside(code2) {
    if (code2 === marker || code2 === null || markdownLineEnding(code2)) {
      effects.exit("chunkString");
      return atBreak(code2);
    }
    effects.consume(code2);
    return code2 === 92 ? escape : inside;
  }
  function escape(code2) {
    if (code2 === marker || code2 === 92) {
      effects.consume(code2);
      return inside;
    }
    return inside(code2);
  }
}
function factoryWhitespace(effects, ok2) {
  let seen;
  return start;
  function start(code2) {
    if (markdownLineEnding(code2)) {
      effects.enter("lineEnding");
      effects.consume(code2);
      effects.exit("lineEnding");
      seen = true;
      return start;
    }
    if (markdownSpace(code2)) {
      return factorySpace(effects, start, seen ? "linePrefix" : "lineSuffix")(code2);
    }
    return ok2(code2);
  }
}
const definition$1 = {
  name: "definition",
  tokenize: tokenizeDefinition
};
const titleBefore = {
  partial: true,
  tokenize: tokenizeTitleBefore
};
function tokenizeDefinition(effects, ok2, nok) {
  const self2 = this;
  let identifier;
  return start;
  function start(code2) {
    effects.enter("definition");
    return before(code2);
  }
  function before(code2) {
    return factoryLabel.call(
      self2,
      effects,
      labelAfter,
      // Note: we don’t need to reset the way `markdown-rs` does.
      nok,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(code2);
  }
  function labelAfter(code2) {
    identifier = normalizeIdentifier(self2.sliceSerialize(self2.events[self2.events.length - 1][1]).slice(1, -1));
    if (code2 === 58) {
      effects.enter("definitionMarker");
      effects.consume(code2);
      effects.exit("definitionMarker");
      return markerAfter;
    }
    return nok(code2);
  }
  function markerAfter(code2) {
    return markdownLineEndingOrSpace(code2) ? factoryWhitespace(effects, destinationBefore)(code2) : destinationBefore(code2);
  }
  function destinationBefore(code2) {
    return factoryDestination(
      effects,
      destinationAfter,
      // Note: we don’t need to reset the way `markdown-rs` does.
      nok,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(code2);
  }
  function destinationAfter(code2) {
    return effects.attempt(titleBefore, after, after)(code2);
  }
  function after(code2) {
    return markdownSpace(code2) ? factorySpace(effects, afterWhitespace, "whitespace")(code2) : afterWhitespace(code2);
  }
  function afterWhitespace(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      effects.exit("definition");
      self2.parser.defined.push(identifier);
      return ok2(code2);
    }
    return nok(code2);
  }
}
function tokenizeTitleBefore(effects, ok2, nok) {
  return titleBefore2;
  function titleBefore2(code2) {
    return markdownLineEndingOrSpace(code2) ? factoryWhitespace(effects, beforeMarker)(code2) : nok(code2);
  }
  function beforeMarker(code2) {
    return factoryTitle(effects, titleAfter, nok, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(code2);
  }
  function titleAfter(code2) {
    return markdownSpace(code2) ? factorySpace(effects, titleAfterOptionalWhitespace, "whitespace")(code2) : titleAfterOptionalWhitespace(code2);
  }
  function titleAfterOptionalWhitespace(code2) {
    return code2 === null || markdownLineEnding(code2) ? ok2(code2) : nok(code2);
  }
}
const hardBreakEscape = {
  name: "hardBreakEscape",
  tokenize: tokenizeHardBreakEscape
};
function tokenizeHardBreakEscape(effects, ok2, nok) {
  return start;
  function start(code2) {
    effects.enter("hardBreakEscape");
    effects.consume(code2);
    return after;
  }
  function after(code2) {
    if (markdownLineEnding(code2)) {
      effects.exit("hardBreakEscape");
      return ok2(code2);
    }
    return nok(code2);
  }
}
const headingAtx = {
  name: "headingAtx",
  resolve: resolveHeadingAtx,
  tokenize: tokenizeHeadingAtx
};
function resolveHeadingAtx(events, context) {
  let contentEnd = events.length - 2;
  let contentStart = 3;
  let content2;
  let text2;
  if (events[contentStart][1].type === "whitespace") {
    contentStart += 2;
  }
  if (contentEnd - 2 > contentStart && events[contentEnd][1].type === "whitespace") {
    contentEnd -= 2;
  }
  if (events[contentEnd][1].type === "atxHeadingSequence" && (contentStart === contentEnd - 1 || contentEnd - 4 > contentStart && events[contentEnd - 2][1].type === "whitespace")) {
    contentEnd -= contentStart + 1 === contentEnd ? 2 : 4;
  }
  if (contentEnd > contentStart) {
    content2 = {
      type: "atxHeadingText",
      start: events[contentStart][1].start,
      end: events[contentEnd][1].end
    };
    text2 = {
      type: "chunkText",
      start: events[contentStart][1].start,
      end: events[contentEnd][1].end,
      contentType: "text"
    };
    splice(events, contentStart, contentEnd - contentStart + 1, [["enter", content2, context], ["enter", text2, context], ["exit", text2, context], ["exit", content2, context]]);
  }
  return events;
}
function tokenizeHeadingAtx(effects, ok2, nok) {
  let size = 0;
  return start;
  function start(code2) {
    effects.enter("atxHeading");
    return before(code2);
  }
  function before(code2) {
    effects.enter("atxHeadingSequence");
    return sequenceOpen(code2);
  }
  function sequenceOpen(code2) {
    if (code2 === 35 && size++ < 6) {
      effects.consume(code2);
      return sequenceOpen;
    }
    if (code2 === null || markdownLineEndingOrSpace(code2)) {
      effects.exit("atxHeadingSequence");
      return atBreak(code2);
    }
    return nok(code2);
  }
  function atBreak(code2) {
    if (code2 === 35) {
      effects.enter("atxHeadingSequence");
      return sequenceFurther(code2);
    }
    if (code2 === null || markdownLineEnding(code2)) {
      effects.exit("atxHeading");
      return ok2(code2);
    }
    if (markdownSpace(code2)) {
      return factorySpace(effects, atBreak, "whitespace")(code2);
    }
    effects.enter("atxHeadingText");
    return data(code2);
  }
  function sequenceFurther(code2) {
    if (code2 === 35) {
      effects.consume(code2);
      return sequenceFurther;
    }
    effects.exit("atxHeadingSequence");
    return atBreak(code2);
  }
  function data(code2) {
    if (code2 === null || code2 === 35 || markdownLineEndingOrSpace(code2)) {
      effects.exit("atxHeadingText");
      return atBreak(code2);
    }
    effects.consume(code2);
    return data;
  }
}
const htmlBlockNames = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
];
const htmlRawNames = ["pre", "script", "style", "textarea"];
const htmlFlow = {
  concrete: true,
  name: "htmlFlow",
  resolveTo: resolveToHtmlFlow,
  tokenize: tokenizeHtmlFlow
};
const blankLineBefore = {
  partial: true,
  tokenize: tokenizeBlankLineBefore
};
const nonLazyContinuationStart = {
  partial: true,
  tokenize: tokenizeNonLazyContinuationStart
};
function resolveToHtmlFlow(events) {
  let index2 = events.length;
  while (index2--) {
    if (events[index2][0] === "enter" && events[index2][1].type === "htmlFlow") {
      break;
    }
  }
  if (index2 > 1 && events[index2 - 2][1].type === "linePrefix") {
    events[index2][1].start = events[index2 - 2][1].start;
    events[index2 + 1][1].start = events[index2 - 2][1].start;
    events.splice(index2 - 2, 2);
  }
  return events;
}
function tokenizeHtmlFlow(effects, ok2, nok) {
  const self2 = this;
  let marker;
  let closingTag;
  let buffer;
  let index2;
  let markerB;
  return start;
  function start(code2) {
    return before(code2);
  }
  function before(code2) {
    effects.enter("htmlFlow");
    effects.enter("htmlFlowData");
    effects.consume(code2);
    return open;
  }
  function open(code2) {
    if (code2 === 33) {
      effects.consume(code2);
      return declarationOpen;
    }
    if (code2 === 47) {
      effects.consume(code2);
      closingTag = true;
      return tagCloseStart;
    }
    if (code2 === 63) {
      effects.consume(code2);
      marker = 3;
      return self2.interrupt ? ok2 : continuationDeclarationInside;
    }
    if (asciiAlpha(code2)) {
      effects.consume(code2);
      buffer = String.fromCharCode(code2);
      return tagName;
    }
    return nok(code2);
  }
  function declarationOpen(code2) {
    if (code2 === 45) {
      effects.consume(code2);
      marker = 2;
      return commentOpenInside;
    }
    if (code2 === 91) {
      effects.consume(code2);
      marker = 5;
      index2 = 0;
      return cdataOpenInside;
    }
    if (asciiAlpha(code2)) {
      effects.consume(code2);
      marker = 4;
      return self2.interrupt ? ok2 : continuationDeclarationInside;
    }
    return nok(code2);
  }
  function commentOpenInside(code2) {
    if (code2 === 45) {
      effects.consume(code2);
      return self2.interrupt ? ok2 : continuationDeclarationInside;
    }
    return nok(code2);
  }
  function cdataOpenInside(code2) {
    const value = "CDATA[";
    if (code2 === value.charCodeAt(index2++)) {
      effects.consume(code2);
      if (index2 === value.length) {
        return self2.interrupt ? ok2 : continuation;
      }
      return cdataOpenInside;
    }
    return nok(code2);
  }
  function tagCloseStart(code2) {
    if (asciiAlpha(code2)) {
      effects.consume(code2);
      buffer = String.fromCharCode(code2);
      return tagName;
    }
    return nok(code2);
  }
  function tagName(code2) {
    if (code2 === null || code2 === 47 || code2 === 62 || markdownLineEndingOrSpace(code2)) {
      const slash = code2 === 47;
      const name2 = buffer.toLowerCase();
      if (!slash && !closingTag && htmlRawNames.includes(name2)) {
        marker = 1;
        return self2.interrupt ? ok2(code2) : continuation(code2);
      }
      if (htmlBlockNames.includes(buffer.toLowerCase())) {
        marker = 6;
        if (slash) {
          effects.consume(code2);
          return basicSelfClosing;
        }
        return self2.interrupt ? ok2(code2) : continuation(code2);
      }
      marker = 7;
      return self2.interrupt && !self2.parser.lazy[self2.now().line] ? nok(code2) : closingTag ? completeClosingTagAfter(code2) : completeAttributeNameBefore(code2);
    }
    if (code2 === 45 || asciiAlphanumeric(code2)) {
      effects.consume(code2);
      buffer += String.fromCharCode(code2);
      return tagName;
    }
    return nok(code2);
  }
  function basicSelfClosing(code2) {
    if (code2 === 62) {
      effects.consume(code2);
      return self2.interrupt ? ok2 : continuation;
    }
    return nok(code2);
  }
  function completeClosingTagAfter(code2) {
    if (markdownSpace(code2)) {
      effects.consume(code2);
      return completeClosingTagAfter;
    }
    return completeEnd(code2);
  }
  function completeAttributeNameBefore(code2) {
    if (code2 === 47) {
      effects.consume(code2);
      return completeEnd;
    }
    if (code2 === 58 || code2 === 95 || asciiAlpha(code2)) {
      effects.consume(code2);
      return completeAttributeName;
    }
    if (markdownSpace(code2)) {
      effects.consume(code2);
      return completeAttributeNameBefore;
    }
    return completeEnd(code2);
  }
  function completeAttributeName(code2) {
    if (code2 === 45 || code2 === 46 || code2 === 58 || code2 === 95 || asciiAlphanumeric(code2)) {
      effects.consume(code2);
      return completeAttributeName;
    }
    return completeAttributeNameAfter(code2);
  }
  function completeAttributeNameAfter(code2) {
    if (code2 === 61) {
      effects.consume(code2);
      return completeAttributeValueBefore;
    }
    if (markdownSpace(code2)) {
      effects.consume(code2);
      return completeAttributeNameAfter;
    }
    return completeAttributeNameBefore(code2);
  }
  function completeAttributeValueBefore(code2) {
    if (code2 === null || code2 === 60 || code2 === 61 || code2 === 62 || code2 === 96) {
      return nok(code2);
    }
    if (code2 === 34 || code2 === 39) {
      effects.consume(code2);
      markerB = code2;
      return completeAttributeValueQuoted;
    }
    if (markdownSpace(code2)) {
      effects.consume(code2);
      return completeAttributeValueBefore;
    }
    return completeAttributeValueUnquoted(code2);
  }
  function completeAttributeValueQuoted(code2) {
    if (code2 === markerB) {
      effects.consume(code2);
      markerB = null;
      return completeAttributeValueQuotedAfter;
    }
    if (code2 === null || markdownLineEnding(code2)) {
      return nok(code2);
    }
    effects.consume(code2);
    return completeAttributeValueQuoted;
  }
  function completeAttributeValueUnquoted(code2) {
    if (code2 === null || code2 === 34 || code2 === 39 || code2 === 47 || code2 === 60 || code2 === 61 || code2 === 62 || code2 === 96 || markdownLineEndingOrSpace(code2)) {
      return completeAttributeNameAfter(code2);
    }
    effects.consume(code2);
    return completeAttributeValueUnquoted;
  }
  function completeAttributeValueQuotedAfter(code2) {
    if (code2 === 47 || code2 === 62 || markdownSpace(code2)) {
      return completeAttributeNameBefore(code2);
    }
    return nok(code2);
  }
  function completeEnd(code2) {
    if (code2 === 62) {
      effects.consume(code2);
      return completeAfter;
    }
    return nok(code2);
  }
  function completeAfter(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      return continuation(code2);
    }
    if (markdownSpace(code2)) {
      effects.consume(code2);
      return completeAfter;
    }
    return nok(code2);
  }
  function continuation(code2) {
    if (code2 === 45 && marker === 2) {
      effects.consume(code2);
      return continuationCommentInside;
    }
    if (code2 === 60 && marker === 1) {
      effects.consume(code2);
      return continuationRawTagOpen;
    }
    if (code2 === 62 && marker === 4) {
      effects.consume(code2);
      return continuationClose;
    }
    if (code2 === 63 && marker === 3) {
      effects.consume(code2);
      return continuationDeclarationInside;
    }
    if (code2 === 93 && marker === 5) {
      effects.consume(code2);
      return continuationCdataInside;
    }
    if (markdownLineEnding(code2) && (marker === 6 || marker === 7)) {
      effects.exit("htmlFlowData");
      return effects.check(blankLineBefore, continuationAfter, continuationStart)(code2);
    }
    if (code2 === null || markdownLineEnding(code2)) {
      effects.exit("htmlFlowData");
      return continuationStart(code2);
    }
    effects.consume(code2);
    return continuation;
  }
  function continuationStart(code2) {
    return effects.check(nonLazyContinuationStart, continuationStartNonLazy, continuationAfter)(code2);
  }
  function continuationStartNonLazy(code2) {
    effects.enter("lineEnding");
    effects.consume(code2);
    effects.exit("lineEnding");
    return continuationBefore;
  }
  function continuationBefore(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      return continuationStart(code2);
    }
    effects.enter("htmlFlowData");
    return continuation(code2);
  }
  function continuationCommentInside(code2) {
    if (code2 === 45) {
      effects.consume(code2);
      return continuationDeclarationInside;
    }
    return continuation(code2);
  }
  function continuationRawTagOpen(code2) {
    if (code2 === 47) {
      effects.consume(code2);
      buffer = "";
      return continuationRawEndTag;
    }
    return continuation(code2);
  }
  function continuationRawEndTag(code2) {
    if (code2 === 62) {
      const name2 = buffer.toLowerCase();
      if (htmlRawNames.includes(name2)) {
        effects.consume(code2);
        return continuationClose;
      }
      return continuation(code2);
    }
    if (asciiAlpha(code2) && buffer.length < 8) {
      effects.consume(code2);
      buffer += String.fromCharCode(code2);
      return continuationRawEndTag;
    }
    return continuation(code2);
  }
  function continuationCdataInside(code2) {
    if (code2 === 93) {
      effects.consume(code2);
      return continuationDeclarationInside;
    }
    return continuation(code2);
  }
  function continuationDeclarationInside(code2) {
    if (code2 === 62) {
      effects.consume(code2);
      return continuationClose;
    }
    if (code2 === 45 && marker === 2) {
      effects.consume(code2);
      return continuationDeclarationInside;
    }
    return continuation(code2);
  }
  function continuationClose(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      effects.exit("htmlFlowData");
      return continuationAfter(code2);
    }
    effects.consume(code2);
    return continuationClose;
  }
  function continuationAfter(code2) {
    effects.exit("htmlFlow");
    return ok2(code2);
  }
}
function tokenizeNonLazyContinuationStart(effects, ok2, nok) {
  const self2 = this;
  return start;
  function start(code2) {
    if (markdownLineEnding(code2)) {
      effects.enter("lineEnding");
      effects.consume(code2);
      effects.exit("lineEnding");
      return after;
    }
    return nok(code2);
  }
  function after(code2) {
    return self2.parser.lazy[self2.now().line] ? nok(code2) : ok2(code2);
  }
}
function tokenizeBlankLineBefore(effects, ok2, nok) {
  return start;
  function start(code2) {
    effects.enter("lineEnding");
    effects.consume(code2);
    effects.exit("lineEnding");
    return effects.attempt(blankLine, ok2, nok);
  }
}
const htmlText = {
  name: "htmlText",
  tokenize: tokenizeHtmlText
};
function tokenizeHtmlText(effects, ok2, nok) {
  const self2 = this;
  let marker;
  let index2;
  let returnState;
  return start;
  function start(code2) {
    effects.enter("htmlText");
    effects.enter("htmlTextData");
    effects.consume(code2);
    return open;
  }
  function open(code2) {
    if (code2 === 33) {
      effects.consume(code2);
      return declarationOpen;
    }
    if (code2 === 47) {
      effects.consume(code2);
      return tagCloseStart;
    }
    if (code2 === 63) {
      effects.consume(code2);
      return instruction;
    }
    if (asciiAlpha(code2)) {
      effects.consume(code2);
      return tagOpen;
    }
    return nok(code2);
  }
  function declarationOpen(code2) {
    if (code2 === 45) {
      effects.consume(code2);
      return commentOpenInside;
    }
    if (code2 === 91) {
      effects.consume(code2);
      index2 = 0;
      return cdataOpenInside;
    }
    if (asciiAlpha(code2)) {
      effects.consume(code2);
      return declaration;
    }
    return nok(code2);
  }
  function commentOpenInside(code2) {
    if (code2 === 45) {
      effects.consume(code2);
      return commentEnd;
    }
    return nok(code2);
  }
  function comment2(code2) {
    if (code2 === null) {
      return nok(code2);
    }
    if (code2 === 45) {
      effects.consume(code2);
      return commentClose;
    }
    if (markdownLineEnding(code2)) {
      returnState = comment2;
      return lineEndingBefore(code2);
    }
    effects.consume(code2);
    return comment2;
  }
  function commentClose(code2) {
    if (code2 === 45) {
      effects.consume(code2);
      return commentEnd;
    }
    return comment2(code2);
  }
  function commentEnd(code2) {
    return code2 === 62 ? end(code2) : code2 === 45 ? commentClose(code2) : comment2(code2);
  }
  function cdataOpenInside(code2) {
    const value = "CDATA[";
    if (code2 === value.charCodeAt(index2++)) {
      effects.consume(code2);
      return index2 === value.length ? cdata : cdataOpenInside;
    }
    return nok(code2);
  }
  function cdata(code2) {
    if (code2 === null) {
      return nok(code2);
    }
    if (code2 === 93) {
      effects.consume(code2);
      return cdataClose;
    }
    if (markdownLineEnding(code2)) {
      returnState = cdata;
      return lineEndingBefore(code2);
    }
    effects.consume(code2);
    return cdata;
  }
  function cdataClose(code2) {
    if (code2 === 93) {
      effects.consume(code2);
      return cdataEnd;
    }
    return cdata(code2);
  }
  function cdataEnd(code2) {
    if (code2 === 62) {
      return end(code2);
    }
    if (code2 === 93) {
      effects.consume(code2);
      return cdataEnd;
    }
    return cdata(code2);
  }
  function declaration(code2) {
    if (code2 === null || code2 === 62) {
      return end(code2);
    }
    if (markdownLineEnding(code2)) {
      returnState = declaration;
      return lineEndingBefore(code2);
    }
    effects.consume(code2);
    return declaration;
  }
  function instruction(code2) {
    if (code2 === null) {
      return nok(code2);
    }
    if (code2 === 63) {
      effects.consume(code2);
      return instructionClose;
    }
    if (markdownLineEnding(code2)) {
      returnState = instruction;
      return lineEndingBefore(code2);
    }
    effects.consume(code2);
    return instruction;
  }
  function instructionClose(code2) {
    return code2 === 62 ? end(code2) : instruction(code2);
  }
  function tagCloseStart(code2) {
    if (asciiAlpha(code2)) {
      effects.consume(code2);
      return tagClose;
    }
    return nok(code2);
  }
  function tagClose(code2) {
    if (code2 === 45 || asciiAlphanumeric(code2)) {
      effects.consume(code2);
      return tagClose;
    }
    return tagCloseBetween(code2);
  }
  function tagCloseBetween(code2) {
    if (markdownLineEnding(code2)) {
      returnState = tagCloseBetween;
      return lineEndingBefore(code2);
    }
    if (markdownSpace(code2)) {
      effects.consume(code2);
      return tagCloseBetween;
    }
    return end(code2);
  }
  function tagOpen(code2) {
    if (code2 === 45 || asciiAlphanumeric(code2)) {
      effects.consume(code2);
      return tagOpen;
    }
    if (code2 === 47 || code2 === 62 || markdownLineEndingOrSpace(code2)) {
      return tagOpenBetween(code2);
    }
    return nok(code2);
  }
  function tagOpenBetween(code2) {
    if (code2 === 47) {
      effects.consume(code2);
      return end;
    }
    if (code2 === 58 || code2 === 95 || asciiAlpha(code2)) {
      effects.consume(code2);
      return tagOpenAttributeName;
    }
    if (markdownLineEnding(code2)) {
      returnState = tagOpenBetween;
      return lineEndingBefore(code2);
    }
    if (markdownSpace(code2)) {
      effects.consume(code2);
      return tagOpenBetween;
    }
    return end(code2);
  }
  function tagOpenAttributeName(code2) {
    if (code2 === 45 || code2 === 46 || code2 === 58 || code2 === 95 || asciiAlphanumeric(code2)) {
      effects.consume(code2);
      return tagOpenAttributeName;
    }
    return tagOpenAttributeNameAfter(code2);
  }
  function tagOpenAttributeNameAfter(code2) {
    if (code2 === 61) {
      effects.consume(code2);
      return tagOpenAttributeValueBefore;
    }
    if (markdownLineEnding(code2)) {
      returnState = tagOpenAttributeNameAfter;
      return lineEndingBefore(code2);
    }
    if (markdownSpace(code2)) {
      effects.consume(code2);
      return tagOpenAttributeNameAfter;
    }
    return tagOpenBetween(code2);
  }
  function tagOpenAttributeValueBefore(code2) {
    if (code2 === null || code2 === 60 || code2 === 61 || code2 === 62 || code2 === 96) {
      return nok(code2);
    }
    if (code2 === 34 || code2 === 39) {
      effects.consume(code2);
      marker = code2;
      return tagOpenAttributeValueQuoted;
    }
    if (markdownLineEnding(code2)) {
      returnState = tagOpenAttributeValueBefore;
      return lineEndingBefore(code2);
    }
    if (markdownSpace(code2)) {
      effects.consume(code2);
      return tagOpenAttributeValueBefore;
    }
    effects.consume(code2);
    return tagOpenAttributeValueUnquoted;
  }
  function tagOpenAttributeValueQuoted(code2) {
    if (code2 === marker) {
      effects.consume(code2);
      marker = void 0;
      return tagOpenAttributeValueQuotedAfter;
    }
    if (code2 === null) {
      return nok(code2);
    }
    if (markdownLineEnding(code2)) {
      returnState = tagOpenAttributeValueQuoted;
      return lineEndingBefore(code2);
    }
    effects.consume(code2);
    return tagOpenAttributeValueQuoted;
  }
  function tagOpenAttributeValueUnquoted(code2) {
    if (code2 === null || code2 === 34 || code2 === 39 || code2 === 60 || code2 === 61 || code2 === 96) {
      return nok(code2);
    }
    if (code2 === 47 || code2 === 62 || markdownLineEndingOrSpace(code2)) {
      return tagOpenBetween(code2);
    }
    effects.consume(code2);
    return tagOpenAttributeValueUnquoted;
  }
  function tagOpenAttributeValueQuotedAfter(code2) {
    if (code2 === 47 || code2 === 62 || markdownLineEndingOrSpace(code2)) {
      return tagOpenBetween(code2);
    }
    return nok(code2);
  }
  function end(code2) {
    if (code2 === 62) {
      effects.consume(code2);
      effects.exit("htmlTextData");
      effects.exit("htmlText");
      return ok2;
    }
    return nok(code2);
  }
  function lineEndingBefore(code2) {
    effects.exit("htmlTextData");
    effects.enter("lineEnding");
    effects.consume(code2);
    effects.exit("lineEnding");
    return lineEndingAfter;
  }
  function lineEndingAfter(code2) {
    return markdownSpace(code2) ? factorySpace(effects, lineEndingAfterPrefix, "linePrefix", self2.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(code2) : lineEndingAfterPrefix(code2);
  }
  function lineEndingAfterPrefix(code2) {
    effects.enter("htmlTextData");
    return returnState(code2);
  }
}
const labelEnd = {
  name: "labelEnd",
  resolveAll: resolveAllLabelEnd,
  resolveTo: resolveToLabelEnd,
  tokenize: tokenizeLabelEnd
};
const resourceConstruct = {
  tokenize: tokenizeResource
};
const referenceFullConstruct = {
  tokenize: tokenizeReferenceFull
};
const referenceCollapsedConstruct = {
  tokenize: tokenizeReferenceCollapsed
};
function resolveAllLabelEnd(events) {
  let index2 = -1;
  const newEvents = [];
  while (++index2 < events.length) {
    const token = events[index2][1];
    newEvents.push(events[index2]);
    if (token.type === "labelImage" || token.type === "labelLink" || token.type === "labelEnd") {
      const offset = token.type === "labelImage" ? 4 : 2;
      token.type = "data";
      index2 += offset;
    }
  }
  if (events.length !== newEvents.length) {
    splice(events, 0, events.length, newEvents);
  }
  return events;
}
function resolveToLabelEnd(events, context) {
  let index2 = events.length;
  let offset = 0;
  let token;
  let open;
  let close;
  let media;
  while (index2--) {
    token = events[index2][1];
    if (open) {
      if (token.type === "link" || token.type === "labelLink" && token._inactive) {
        break;
      }
      if (events[index2][0] === "enter" && token.type === "labelLink") {
        token._inactive = true;
      }
    } else if (close) {
      if (events[index2][0] === "enter" && (token.type === "labelImage" || token.type === "labelLink") && !token._balanced) {
        open = index2;
        if (token.type !== "labelLink") {
          offset = 2;
          break;
        }
      }
    } else if (token.type === "labelEnd") {
      close = index2;
    }
  }
  const group = {
    type: events[open][1].type === "labelLink" ? "link" : "image",
    start: {
      ...events[open][1].start
    },
    end: {
      ...events[events.length - 1][1].end
    }
  };
  const label = {
    type: "label",
    start: {
      ...events[open][1].start
    },
    end: {
      ...events[close][1].end
    }
  };
  const text2 = {
    type: "labelText",
    start: {
      ...events[open + offset + 2][1].end
    },
    end: {
      ...events[close - 2][1].start
    }
  };
  media = [["enter", group, context], ["enter", label, context]];
  media = push(media, events.slice(open + 1, open + offset + 3));
  media = push(media, [["enter", text2, context]]);
  media = push(media, resolveAll(context.parser.constructs.insideSpan.null, events.slice(open + offset + 4, close - 3), context));
  media = push(media, [["exit", text2, context], events[close - 2], events[close - 1], ["exit", label, context]]);
  media = push(media, events.slice(close + 1));
  media = push(media, [["exit", group, context]]);
  splice(events, open, events.length, media);
  return events;
}
function tokenizeLabelEnd(effects, ok2, nok) {
  const self2 = this;
  let index2 = self2.events.length;
  let labelStart;
  let defined;
  while (index2--) {
    if ((self2.events[index2][1].type === "labelImage" || self2.events[index2][1].type === "labelLink") && !self2.events[index2][1]._balanced) {
      labelStart = self2.events[index2][1];
      break;
    }
  }
  return start;
  function start(code2) {
    if (!labelStart) {
      return nok(code2);
    }
    if (labelStart._inactive) {
      return labelEndNok(code2);
    }
    defined = self2.parser.defined.includes(normalizeIdentifier(self2.sliceSerialize({
      start: labelStart.end,
      end: self2.now()
    })));
    effects.enter("labelEnd");
    effects.enter("labelMarker");
    effects.consume(code2);
    effects.exit("labelMarker");
    effects.exit("labelEnd");
    return after;
  }
  function after(code2) {
    if (code2 === 40) {
      return effects.attempt(resourceConstruct, labelEndOk, defined ? labelEndOk : labelEndNok)(code2);
    }
    if (code2 === 91) {
      return effects.attempt(referenceFullConstruct, labelEndOk, defined ? referenceNotFull : labelEndNok)(code2);
    }
    return defined ? labelEndOk(code2) : labelEndNok(code2);
  }
  function referenceNotFull(code2) {
    return effects.attempt(referenceCollapsedConstruct, labelEndOk, labelEndNok)(code2);
  }
  function labelEndOk(code2) {
    return ok2(code2);
  }
  function labelEndNok(code2) {
    labelStart._balanced = true;
    return nok(code2);
  }
}
function tokenizeResource(effects, ok2, nok) {
  return resourceStart;
  function resourceStart(code2) {
    effects.enter("resource");
    effects.enter("resourceMarker");
    effects.consume(code2);
    effects.exit("resourceMarker");
    return resourceBefore;
  }
  function resourceBefore(code2) {
    return markdownLineEndingOrSpace(code2) ? factoryWhitespace(effects, resourceOpen)(code2) : resourceOpen(code2);
  }
  function resourceOpen(code2) {
    if (code2 === 41) {
      return resourceEnd(code2);
    }
    return factoryDestination(effects, resourceDestinationAfter, resourceDestinationMissing, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(code2);
  }
  function resourceDestinationAfter(code2) {
    return markdownLineEndingOrSpace(code2) ? factoryWhitespace(effects, resourceBetween)(code2) : resourceEnd(code2);
  }
  function resourceDestinationMissing(code2) {
    return nok(code2);
  }
  function resourceBetween(code2) {
    if (code2 === 34 || code2 === 39 || code2 === 40) {
      return factoryTitle(effects, resourceTitleAfter, nok, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(code2);
    }
    return resourceEnd(code2);
  }
  function resourceTitleAfter(code2) {
    return markdownLineEndingOrSpace(code2) ? factoryWhitespace(effects, resourceEnd)(code2) : resourceEnd(code2);
  }
  function resourceEnd(code2) {
    if (code2 === 41) {
      effects.enter("resourceMarker");
      effects.consume(code2);
      effects.exit("resourceMarker");
      effects.exit("resource");
      return ok2;
    }
    return nok(code2);
  }
}
function tokenizeReferenceFull(effects, ok2, nok) {
  const self2 = this;
  return referenceFull;
  function referenceFull(code2) {
    return factoryLabel.call(self2, effects, referenceFullAfter, referenceFullMissing, "reference", "referenceMarker", "referenceString")(code2);
  }
  function referenceFullAfter(code2) {
    return self2.parser.defined.includes(normalizeIdentifier(self2.sliceSerialize(self2.events[self2.events.length - 1][1]).slice(1, -1))) ? ok2(code2) : nok(code2);
  }
  function referenceFullMissing(code2) {
    return nok(code2);
  }
}
function tokenizeReferenceCollapsed(effects, ok2, nok) {
  return referenceCollapsedStart;
  function referenceCollapsedStart(code2) {
    effects.enter("reference");
    effects.enter("referenceMarker");
    effects.consume(code2);
    effects.exit("referenceMarker");
    return referenceCollapsedOpen;
  }
  function referenceCollapsedOpen(code2) {
    if (code2 === 93) {
      effects.enter("referenceMarker");
      effects.consume(code2);
      effects.exit("referenceMarker");
      effects.exit("reference");
      return ok2;
    }
    return nok(code2);
  }
}
const labelStartImage = {
  name: "labelStartImage",
  resolveAll: labelEnd.resolveAll,
  tokenize: tokenizeLabelStartImage
};
function tokenizeLabelStartImage(effects, ok2, nok) {
  const self2 = this;
  return start;
  function start(code2) {
    effects.enter("labelImage");
    effects.enter("labelImageMarker");
    effects.consume(code2);
    effects.exit("labelImageMarker");
    return open;
  }
  function open(code2) {
    if (code2 === 91) {
      effects.enter("labelMarker");
      effects.consume(code2);
      effects.exit("labelMarker");
      effects.exit("labelImage");
      return after;
    }
    return nok(code2);
  }
  function after(code2) {
    return code2 === 94 && "_hiddenFootnoteSupport" in self2.parser.constructs ? nok(code2) : ok2(code2);
  }
}
const labelStartLink = {
  name: "labelStartLink",
  resolveAll: labelEnd.resolveAll,
  tokenize: tokenizeLabelStartLink
};
function tokenizeLabelStartLink(effects, ok2, nok) {
  const self2 = this;
  return start;
  function start(code2) {
    effects.enter("labelLink");
    effects.enter("labelMarker");
    effects.consume(code2);
    effects.exit("labelMarker");
    effects.exit("labelLink");
    return after;
  }
  function after(code2) {
    return code2 === 94 && "_hiddenFootnoteSupport" in self2.parser.constructs ? nok(code2) : ok2(code2);
  }
}
const lineEnding = {
  name: "lineEnding",
  tokenize: tokenizeLineEnding
};
function tokenizeLineEnding(effects, ok2) {
  return start;
  function start(code2) {
    effects.enter("lineEnding");
    effects.consume(code2);
    effects.exit("lineEnding");
    return factorySpace(effects, ok2, "linePrefix");
  }
}
const thematicBreak$2 = {
  name: "thematicBreak",
  tokenize: tokenizeThematicBreak
};
function tokenizeThematicBreak(effects, ok2, nok) {
  let size = 0;
  let marker;
  return start;
  function start(code2) {
    effects.enter("thematicBreak");
    return before(code2);
  }
  function before(code2) {
    marker = code2;
    return atBreak(code2);
  }
  function atBreak(code2) {
    if (code2 === marker) {
      effects.enter("thematicBreakSequence");
      return sequence(code2);
    }
    if (size >= 3 && (code2 === null || markdownLineEnding(code2))) {
      effects.exit("thematicBreak");
      return ok2(code2);
    }
    return nok(code2);
  }
  function sequence(code2) {
    if (code2 === marker) {
      effects.consume(code2);
      size++;
      return sequence;
    }
    effects.exit("thematicBreakSequence");
    return markdownSpace(code2) ? factorySpace(effects, atBreak, "whitespace")(code2) : atBreak(code2);
  }
}
const list$3 = {
  continuation: {
    tokenize: tokenizeListContinuation
  },
  exit: tokenizeListEnd,
  name: "list",
  tokenize: tokenizeListStart
};
const listItemPrefixWhitespaceConstruct = {
  partial: true,
  tokenize: tokenizeListItemPrefixWhitespace
};
const indentConstruct = {
  partial: true,
  tokenize: tokenizeIndent
};
function tokenizeListStart(effects, ok2, nok) {
  const self2 = this;
  const tail = self2.events[self2.events.length - 1];
  let initialSize = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], true).length : 0;
  let size = 0;
  return start;
  function start(code2) {
    const kind = self2.containerState.type || (code2 === 42 || code2 === 43 || code2 === 45 ? "listUnordered" : "listOrdered");
    if (kind === "listUnordered" ? !self2.containerState.marker || code2 === self2.containerState.marker : asciiDigit(code2)) {
      if (!self2.containerState.type) {
        self2.containerState.type = kind;
        effects.enter(kind, {
          _container: true
        });
      }
      if (kind === "listUnordered") {
        effects.enter("listItemPrefix");
        return code2 === 42 || code2 === 45 ? effects.check(thematicBreak$2, nok, atMarker)(code2) : atMarker(code2);
      }
      if (!self2.interrupt || code2 === 49) {
        effects.enter("listItemPrefix");
        effects.enter("listItemValue");
        return inside(code2);
      }
    }
    return nok(code2);
  }
  function inside(code2) {
    if (asciiDigit(code2) && ++size < 10) {
      effects.consume(code2);
      return inside;
    }
    if ((!self2.interrupt || size < 2) && (self2.containerState.marker ? code2 === self2.containerState.marker : code2 === 41 || code2 === 46)) {
      effects.exit("listItemValue");
      return atMarker(code2);
    }
    return nok(code2);
  }
  function atMarker(code2) {
    effects.enter("listItemMarker");
    effects.consume(code2);
    effects.exit("listItemMarker");
    self2.containerState.marker = self2.containerState.marker || code2;
    return effects.check(
      blankLine,
      // Can’t be empty when interrupting.
      self2.interrupt ? nok : onBlank,
      effects.attempt(listItemPrefixWhitespaceConstruct, endOfPrefix, otherPrefix)
    );
  }
  function onBlank(code2) {
    self2.containerState.initialBlankLine = true;
    initialSize++;
    return endOfPrefix(code2);
  }
  function otherPrefix(code2) {
    if (markdownSpace(code2)) {
      effects.enter("listItemPrefixWhitespace");
      effects.consume(code2);
      effects.exit("listItemPrefixWhitespace");
      return endOfPrefix;
    }
    return nok(code2);
  }
  function endOfPrefix(code2) {
    self2.containerState.size = initialSize + self2.sliceSerialize(effects.exit("listItemPrefix"), true).length;
    return ok2(code2);
  }
}
function tokenizeListContinuation(effects, ok2, nok) {
  const self2 = this;
  self2.containerState._closeFlow = void 0;
  return effects.check(blankLine, onBlank, notBlank);
  function onBlank(code2) {
    self2.containerState.furtherBlankLines = self2.containerState.furtherBlankLines || self2.containerState.initialBlankLine;
    return factorySpace(effects, ok2, "listItemIndent", self2.containerState.size + 1)(code2);
  }
  function notBlank(code2) {
    if (self2.containerState.furtherBlankLines || !markdownSpace(code2)) {
      self2.containerState.furtherBlankLines = void 0;
      self2.containerState.initialBlankLine = void 0;
      return notInCurrentItem(code2);
    }
    self2.containerState.furtherBlankLines = void 0;
    self2.containerState.initialBlankLine = void 0;
    return effects.attempt(indentConstruct, ok2, notInCurrentItem)(code2);
  }
  function notInCurrentItem(code2) {
    self2.containerState._closeFlow = true;
    self2.interrupt = void 0;
    return factorySpace(effects, effects.attempt(list$3, ok2, nok), "linePrefix", self2.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(code2);
  }
}
function tokenizeIndent(effects, ok2, nok) {
  const self2 = this;
  return factorySpace(effects, afterPrefix, "listItemIndent", self2.containerState.size + 1);
  function afterPrefix(code2) {
    const tail = self2.events[self2.events.length - 1];
    return tail && tail[1].type === "listItemIndent" && tail[2].sliceSerialize(tail[1], true).length === self2.containerState.size ? ok2(code2) : nok(code2);
  }
}
function tokenizeListEnd(effects) {
  effects.exit(this.containerState.type);
}
function tokenizeListItemPrefixWhitespace(effects, ok2, nok) {
  const self2 = this;
  return factorySpace(effects, afterPrefix, "listItemPrefixWhitespace", self2.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4 + 1);
  function afterPrefix(code2) {
    const tail = self2.events[self2.events.length - 1];
    return !markdownSpace(code2) && tail && tail[1].type === "listItemPrefixWhitespace" ? ok2(code2) : nok(code2);
  }
}
const setextUnderline = {
  name: "setextUnderline",
  resolveTo: resolveToSetextUnderline,
  tokenize: tokenizeSetextUnderline
};
function resolveToSetextUnderline(events, context) {
  let index2 = events.length;
  let content2;
  let text2;
  let definition2;
  while (index2--) {
    if (events[index2][0] === "enter") {
      if (events[index2][1].type === "content") {
        content2 = index2;
        break;
      }
      if (events[index2][1].type === "paragraph") {
        text2 = index2;
      }
    } else {
      if (events[index2][1].type === "content") {
        events.splice(index2, 1);
      }
      if (!definition2 && events[index2][1].type === "definition") {
        definition2 = index2;
      }
    }
  }
  const heading2 = {
    type: "setextHeading",
    start: {
      ...events[content2][1].start
    },
    end: {
      ...events[events.length - 1][1].end
    }
  };
  events[text2][1].type = "setextHeadingText";
  if (definition2) {
    events.splice(text2, 0, ["enter", heading2, context]);
    events.splice(definition2 + 1, 0, ["exit", events[content2][1], context]);
    events[content2][1].end = {
      ...events[definition2][1].end
    };
  } else {
    events[content2][1] = heading2;
  }
  events.push(["exit", heading2, context]);
  return events;
}
function tokenizeSetextUnderline(effects, ok2, nok) {
  const self2 = this;
  let marker;
  return start;
  function start(code2) {
    let index2 = self2.events.length;
    let paragraph2;
    while (index2--) {
      if (self2.events[index2][1].type !== "lineEnding" && self2.events[index2][1].type !== "linePrefix" && self2.events[index2][1].type !== "content") {
        paragraph2 = self2.events[index2][1].type === "paragraph";
        break;
      }
    }
    if (!self2.parser.lazy[self2.now().line] && (self2.interrupt || paragraph2)) {
      effects.enter("setextHeadingLine");
      marker = code2;
      return before(code2);
    }
    return nok(code2);
  }
  function before(code2) {
    effects.enter("setextHeadingLineSequence");
    return inside(code2);
  }
  function inside(code2) {
    if (code2 === marker) {
      effects.consume(code2);
      return inside;
    }
    effects.exit("setextHeadingLineSequence");
    return markdownSpace(code2) ? factorySpace(effects, after, "lineSuffix")(code2) : after(code2);
  }
  function after(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      effects.exit("setextHeadingLine");
      return ok2(code2);
    }
    return nok(code2);
  }
}
const flow$1 = {
  tokenize: initializeFlow
};
function initializeFlow(effects) {
  const self2 = this;
  const initial = effects.attempt(
    // Try to parse a blank line.
    blankLine,
    atBlankEnding,
    // Try to parse initial flow (essentially, only code).
    effects.attempt(this.parser.constructs.flowInitial, afterConstruct, factorySpace(effects, effects.attempt(this.parser.constructs.flow, afterConstruct, effects.attempt(content, afterConstruct)), "linePrefix"))
  );
  return initial;
  function atBlankEnding(code2) {
    if (code2 === null) {
      effects.consume(code2);
      return;
    }
    effects.enter("lineEndingBlank");
    effects.consume(code2);
    effects.exit("lineEndingBlank");
    self2.currentConstruct = void 0;
    return initial;
  }
  function afterConstruct(code2) {
    if (code2 === null) {
      effects.consume(code2);
      return;
    }
    effects.enter("lineEnding");
    effects.consume(code2);
    effects.exit("lineEnding");
    self2.currentConstruct = void 0;
    return initial;
  }
}
const resolver = {
  resolveAll: createResolver()
};
const string$1 = initializeFactory("string");
const text$6 = initializeFactory("text");
function initializeFactory(field) {
  return {
    resolveAll: createResolver(field === "text" ? resolveAllLineSuffixes : void 0),
    tokenize: initializeText
  };
  function initializeText(effects) {
    const self2 = this;
    const constructs2 = this.parser.constructs[field];
    const text2 = effects.attempt(constructs2, start, notText);
    return start;
    function start(code2) {
      return atBreak(code2) ? text2(code2) : notText(code2);
    }
    function notText(code2) {
      if (code2 === null) {
        effects.consume(code2);
        return;
      }
      effects.enter("data");
      effects.consume(code2);
      return data;
    }
    function data(code2) {
      if (atBreak(code2)) {
        effects.exit("data");
        return text2(code2);
      }
      effects.consume(code2);
      return data;
    }
    function atBreak(code2) {
      if (code2 === null) {
        return true;
      }
      const list2 = constructs2[code2];
      let index2 = -1;
      if (list2) {
        while (++index2 < list2.length) {
          const item = list2[index2];
          if (!item.previous || item.previous.call(self2, self2.previous)) {
            return true;
          }
        }
      }
      return false;
    }
  }
}
function createResolver(extraResolver) {
  return resolveAllText;
  function resolveAllText(events, context) {
    let index2 = -1;
    let enter;
    while (++index2 <= events.length) {
      if (enter === void 0) {
        if (events[index2] && events[index2][1].type === "data") {
          enter = index2;
          index2++;
        }
      } else if (!events[index2] || events[index2][1].type !== "data") {
        if (index2 !== enter + 2) {
          events[enter][1].end = events[index2 - 1][1].end;
          events.splice(enter + 2, index2 - enter - 2);
          index2 = enter + 2;
        }
        enter = void 0;
      }
    }
    return extraResolver ? extraResolver(events, context) : events;
  }
}
function resolveAllLineSuffixes(events, context) {
  let eventIndex = 0;
  while (++eventIndex <= events.length) {
    if ((eventIndex === events.length || events[eventIndex][1].type === "lineEnding") && events[eventIndex - 1][1].type === "data") {
      const data = events[eventIndex - 1][1];
      const chunks = context.sliceStream(data);
      let index2 = chunks.length;
      let bufferIndex = -1;
      let size = 0;
      let tabs;
      while (index2--) {
        const chunk = chunks[index2];
        if (typeof chunk === "string") {
          bufferIndex = chunk.length;
          while (chunk.charCodeAt(bufferIndex - 1) === 32) {
            size++;
            bufferIndex--;
          }
          if (bufferIndex) break;
          bufferIndex = -1;
        } else if (chunk === -2) {
          tabs = true;
          size++;
        } else if (chunk === -1) ;
        else {
          index2++;
          break;
        }
      }
      if (context._contentTypeTextTrailing && eventIndex === events.length) {
        size = 0;
      }
      if (size) {
        const token = {
          type: eventIndex === events.length || tabs || size < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: index2 ? bufferIndex : data.start._bufferIndex + bufferIndex,
            _index: data.start._index + index2,
            line: data.end.line,
            column: data.end.column - size,
            offset: data.end.offset - size
          },
          end: {
            ...data.end
          }
        };
        data.end = {
          ...token.start
        };
        if (data.start.offset === data.end.offset) {
          Object.assign(data, token);
        } else {
          events.splice(eventIndex, 0, ["enter", token, context], ["exit", token, context]);
          eventIndex += 2;
        }
      }
      eventIndex++;
    }
  }
  return events;
}
const document$1 = {
  [42]: list$3,
  [43]: list$3,
  [45]: list$3,
  [48]: list$3,
  [49]: list$3,
  [50]: list$3,
  [51]: list$3,
  [52]: list$3,
  [53]: list$3,
  [54]: list$3,
  [55]: list$3,
  [56]: list$3,
  [57]: list$3,
  [62]: blockQuote
};
const contentInitial = {
  [91]: definition$1
};
const flowInitial = {
  [-2]: codeIndented,
  [-1]: codeIndented,
  [32]: codeIndented
};
const flow = {
  [35]: headingAtx,
  [42]: thematicBreak$2,
  [45]: [setextUnderline, thematicBreak$2],
  [60]: htmlFlow,
  [61]: setextUnderline,
  [95]: thematicBreak$2,
  [96]: codeFenced,
  [126]: codeFenced
};
const string = {
  [38]: characterReference,
  [92]: characterEscape
};
const text$5 = {
  [-5]: lineEnding,
  [-4]: lineEnding,
  [-3]: lineEnding,
  [33]: labelStartImage,
  [38]: characterReference,
  [42]: attention,
  [60]: [autolink, htmlText],
  [91]: labelStartLink,
  [92]: [hardBreakEscape, characterEscape],
  [93]: labelEnd,
  [95]: attention,
  [96]: codeText
};
const insideSpan = {
  null: [attention, resolver]
};
const attentionMarkers = {
  null: [42, 95]
};
const disable = {
  null: []
};
const defaultConstructs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers,
  contentInitial,
  disable,
  document: document$1,
  flow,
  flowInitial,
  insideSpan,
  string,
  text: text$5
}, Symbol.toStringTag, { value: "Module" }));
function createTokenizer(parser, initialize, from) {
  let point2 = {
    _bufferIndex: -1,
    _index: 0,
    line: from && from.line || 1,
    column: from && from.column || 1,
    offset: from && from.offset || 0
  };
  const columnStart = {};
  const resolveAllConstructs = [];
  let chunks = [];
  let stack = [];
  const effects = {
    attempt: constructFactory(onsuccessfulconstruct),
    check: constructFactory(onsuccessfulcheck),
    consume,
    enter,
    exit: exit2,
    interrupt: constructFactory(onsuccessfulcheck, {
      interrupt: true
    })
  };
  const context = {
    code: null,
    containerState: {},
    defineSkip,
    events: [],
    now,
    parser,
    previous: null,
    sliceSerialize,
    sliceStream,
    write
  };
  let state = initialize.tokenize.call(context, effects);
  if (initialize.resolveAll) {
    resolveAllConstructs.push(initialize);
  }
  return context;
  function write(slice) {
    chunks = push(chunks, slice);
    main();
    if (chunks[chunks.length - 1] !== null) {
      return [];
    }
    addResult(initialize, 0);
    context.events = resolveAll(resolveAllConstructs, context.events, context);
    return context.events;
  }
  function sliceSerialize(token, expandTabs) {
    return serializeChunks(sliceStream(token), expandTabs);
  }
  function sliceStream(token) {
    return sliceChunks(chunks, token);
  }
  function now() {
    const {
      _bufferIndex,
      _index,
      line,
      column,
      offset
    } = point2;
    return {
      _bufferIndex,
      _index,
      line,
      column,
      offset
    };
  }
  function defineSkip(value) {
    columnStart[value.line] = value.column;
    accountForPotentialSkip();
  }
  function main() {
    let chunkIndex;
    while (point2._index < chunks.length) {
      const chunk = chunks[point2._index];
      if (typeof chunk === "string") {
        chunkIndex = point2._index;
        if (point2._bufferIndex < 0) {
          point2._bufferIndex = 0;
        }
        while (point2._index === chunkIndex && point2._bufferIndex < chunk.length) {
          go(chunk.charCodeAt(point2._bufferIndex));
        }
      } else {
        go(chunk);
      }
    }
  }
  function go(code2) {
    state = state(code2);
  }
  function consume(code2) {
    if (markdownLineEnding(code2)) {
      point2.line++;
      point2.column = 1;
      point2.offset += code2 === -3 ? 2 : 1;
      accountForPotentialSkip();
    } else if (code2 !== -1) {
      point2.column++;
      point2.offset++;
    }
    if (point2._bufferIndex < 0) {
      point2._index++;
    } else {
      point2._bufferIndex++;
      if (point2._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
      // strings.
      /** @type {string} */
      chunks[point2._index].length) {
        point2._bufferIndex = -1;
        point2._index++;
      }
    }
    context.previous = code2;
  }
  function enter(type, fields) {
    const token = fields || {};
    token.type = type;
    token.start = now();
    context.events.push(["enter", token, context]);
    stack.push(token);
    return token;
  }
  function exit2(type) {
    const token = stack.pop();
    token.end = now();
    context.events.push(["exit", token, context]);
    return token;
  }
  function onsuccessfulconstruct(construct, info) {
    addResult(construct, info.from);
  }
  function onsuccessfulcheck(_, info) {
    info.restore();
  }
  function constructFactory(onreturn, fields) {
    return hook;
    function hook(constructs2, returnState, bogusState) {
      let listOfConstructs;
      let constructIndex;
      let currentConstruct;
      let info;
      return Array.isArray(constructs2) ? (
        /* c8 ignore next 1 */
        handleListOfConstructs(constructs2)
      ) : "tokenize" in constructs2 ? (
        // Looks like a construct.
        handleListOfConstructs([
          /** @type {Construct} */
          constructs2
        ])
      ) : handleMapOfConstructs(constructs2);
      function handleMapOfConstructs(map2) {
        return start;
        function start(code2) {
          const left = code2 !== null && map2[code2];
          const all2 = code2 !== null && map2.null;
          const list2 = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(left) ? left : left ? [left] : [],
            ...Array.isArray(all2) ? all2 : all2 ? [all2] : []
          ];
          return handleListOfConstructs(list2)(code2);
        }
      }
      function handleListOfConstructs(list2) {
        listOfConstructs = list2;
        constructIndex = 0;
        if (list2.length === 0) {
          return bogusState;
        }
        return handleConstruct(list2[constructIndex]);
      }
      function handleConstruct(construct) {
        return start;
        function start(code2) {
          info = store();
          currentConstruct = construct;
          if (!construct.partial) {
            context.currentConstruct = construct;
          }
          if (construct.name && context.parser.constructs.disable.null.includes(construct.name)) {
            return nok();
          }
          return construct.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            fields ? Object.assign(Object.create(context), fields) : context,
            effects,
            ok2,
            nok
          )(code2);
        }
      }
      function ok2(code2) {
        onreturn(currentConstruct, info);
        return returnState;
      }
      function nok(code2) {
        info.restore();
        if (++constructIndex < listOfConstructs.length) {
          return handleConstruct(listOfConstructs[constructIndex]);
        }
        return bogusState;
      }
    }
  }
  function addResult(construct, from2) {
    if (construct.resolveAll && !resolveAllConstructs.includes(construct)) {
      resolveAllConstructs.push(construct);
    }
    if (construct.resolve) {
      splice(context.events, from2, context.events.length - from2, construct.resolve(context.events.slice(from2), context));
    }
    if (construct.resolveTo) {
      context.events = construct.resolveTo(context.events, context);
    }
  }
  function store() {
    const startPoint = now();
    const startPrevious = context.previous;
    const startCurrentConstruct = context.currentConstruct;
    const startEventsIndex = context.events.length;
    const startStack = Array.from(stack);
    return {
      from: startEventsIndex,
      restore
    };
    function restore() {
      point2 = startPoint;
      context.previous = startPrevious;
      context.currentConstruct = startCurrentConstruct;
      context.events.length = startEventsIndex;
      stack = startStack;
      accountForPotentialSkip();
    }
  }
  function accountForPotentialSkip() {
    if (point2.line in columnStart && point2.column < 2) {
      point2.column = columnStart[point2.line];
      point2.offset += columnStart[point2.line] - 1;
    }
  }
}
function sliceChunks(chunks, token) {
  const startIndex = token.start._index;
  const startBufferIndex = token.start._bufferIndex;
  const endIndex = token.end._index;
  const endBufferIndex = token.end._bufferIndex;
  let view;
  if (startIndex === endIndex) {
    view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)];
  } else {
    view = chunks.slice(startIndex, endIndex);
    if (startBufferIndex > -1) {
      const head = view[0];
      if (typeof head === "string") {
        view[0] = head.slice(startBufferIndex);
      } else {
        view.shift();
      }
    }
    if (endBufferIndex > 0) {
      view.push(chunks[endIndex].slice(0, endBufferIndex));
    }
  }
  return view;
}
function serializeChunks(chunks, expandTabs) {
  let index2 = -1;
  const result = [];
  let atTab;
  while (++index2 < chunks.length) {
    const chunk = chunks[index2];
    let value;
    if (typeof chunk === "string") {
      value = chunk;
    } else switch (chunk) {
      case -5: {
        value = "\r";
        break;
      }
      case -4: {
        value = "\n";
        break;
      }
      case -3: {
        value = "\r\n";
        break;
      }
      case -2: {
        value = expandTabs ? " " : "	";
        break;
      }
      case -1: {
        if (!expandTabs && atTab) continue;
        value = " ";
        break;
      }
      default: {
        value = String.fromCharCode(chunk);
      }
    }
    atTab = chunk === -2;
    result.push(value);
  }
  return result.join("");
}
function parse$2(options) {
  const settings = options || {};
  const constructs2 = (
    /** @type {FullNormalizedExtension} */
    combineExtensions([defaultConstructs, ...settings.extensions || []])
  );
  const parser = {
    constructs: constructs2,
    content: create2(content$1),
    defined: [],
    document: create2(document$2),
    flow: create2(flow$1),
    lazy: {},
    string: create2(string$1),
    text: create2(text$6)
  };
  return parser;
  function create2(initial) {
    return creator;
    function creator(from) {
      return createTokenizer(parser, initial, from);
    }
  }
}
function postprocess(events) {
  while (!subtokenize(events)) {
  }
  return events;
}
const search$1 = /[\0\t\n\r]/g;
function preprocess() {
  let column = 1;
  let buffer = "";
  let start = true;
  let atCarriageReturn;
  return preprocessor;
  function preprocessor(value, encoding, end) {
    const chunks = [];
    let match;
    let next2;
    let startPosition;
    let endPosition;
    let code2;
    value = buffer + (typeof value === "string" ? value.toString() : new TextDecoder(encoding || void 0).decode(value));
    startPosition = 0;
    buffer = "";
    if (start) {
      if (value.charCodeAt(0) === 65279) {
        startPosition++;
      }
      start = void 0;
    }
    while (startPosition < value.length) {
      search$1.lastIndex = startPosition;
      match = search$1.exec(value);
      endPosition = match && match.index !== void 0 ? match.index : value.length;
      code2 = value.charCodeAt(endPosition);
      if (!match) {
        buffer = value.slice(startPosition);
        break;
      }
      if (code2 === 10 && startPosition === endPosition && atCarriageReturn) {
        chunks.push(-3);
        atCarriageReturn = void 0;
      } else {
        if (atCarriageReturn) {
          chunks.push(-5);
          atCarriageReturn = void 0;
        }
        if (startPosition < endPosition) {
          chunks.push(value.slice(startPosition, endPosition));
          column += endPosition - startPosition;
        }
        switch (code2) {
          case 0: {
            chunks.push(65533);
            column++;
            break;
          }
          case 9: {
            next2 = Math.ceil(column / 4) * 4;
            chunks.push(-2);
            while (column++ < next2) chunks.push(-1);
            break;
          }
          case 10: {
            chunks.push(-4);
            column = 1;
            break;
          }
          default: {
            atCarriageReturn = true;
            column = 1;
          }
        }
      }
      startPosition = endPosition + 1;
    }
    if (end) {
      if (atCarriageReturn) chunks.push(-5);
      if (buffer) chunks.push(buffer);
      chunks.push(null);
    }
    return chunks;
  }
}
const characterEscapeOrReference = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function decodeString(value) {
  return value.replace(characterEscapeOrReference, decode);
}
function decode($0, $1, $2) {
  if ($1) {
    return $1;
  }
  const head = $2.charCodeAt(0);
  if (head === 35) {
    const head2 = $2.charCodeAt(1);
    const hex = head2 === 120 || head2 === 88;
    return decodeNumericCharacterReference($2.slice(hex ? 2 : 1), hex ? 16 : 10);
  }
  return decodeNamedCharacterReference($2) || $0;
}
function stringifyPosition(value) {
  if (!value || typeof value !== "object") {
    return "";
  }
  if ("position" in value || "type" in value) {
    return position$2(value.position);
  }
  if ("start" in value || "end" in value) {
    return position$2(value);
  }
  if ("line" in value || "column" in value) {
    return point$3(value);
  }
  return "";
}
function point$3(point2) {
  return index(point2 && point2.line) + ":" + index(point2 && point2.column);
}
function position$2(pos) {
  return point$3(pos && pos.start) + "-" + point$3(pos && pos.end);
}
function index(value) {
  return value && typeof value === "number" ? value : 1;
}
const own$7 = {}.hasOwnProperty;
function fromMarkdown(value, encoding, options) {
  if (encoding && typeof encoding === "object") {
    options = encoding;
    encoding = void 0;
  }
  return compiler(options)(postprocess(parse$2(options).document().write(preprocess()(value, encoding, true))));
}
function compiler(options) {
  const config = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: opener(link2),
      autolinkProtocol: onenterdata,
      autolinkEmail: onenterdata,
      atxHeading: opener(heading2),
      blockQuote: opener(blockQuote2),
      characterEscape: onenterdata,
      characterReference: onenterdata,
      codeFenced: opener(codeFlow),
      codeFencedFenceInfo: buffer,
      codeFencedFenceMeta: buffer,
      codeIndented: opener(codeFlow, buffer),
      codeText: opener(codeText2, buffer),
      codeTextData: onenterdata,
      data: onenterdata,
      codeFlowValue: onenterdata,
      definition: opener(definition2),
      definitionDestinationString: buffer,
      definitionLabelString: buffer,
      definitionTitleString: buffer,
      emphasis: opener(emphasis2),
      hardBreakEscape: opener(hardBreak2),
      hardBreakTrailing: opener(hardBreak2),
      htmlFlow: opener(html2, buffer),
      htmlFlowData: onenterdata,
      htmlText: opener(html2, buffer),
      htmlTextData: onenterdata,
      image: opener(image2),
      label: buffer,
      link: opener(link2),
      listItem: opener(listItem2),
      listItemValue: onenterlistitemvalue,
      listOrdered: opener(list2, onenterlistordered),
      listUnordered: opener(list2),
      paragraph: opener(paragraph2),
      reference: onenterreference,
      referenceString: buffer,
      resourceDestinationString: buffer,
      resourceTitleString: buffer,
      setextHeading: opener(heading2),
      strong: opener(strong2),
      thematicBreak: opener(thematicBreak2)
    },
    exit: {
      atxHeading: closer(),
      atxHeadingSequence: onexitatxheadingsequence,
      autolink: closer(),
      autolinkEmail: onexitautolinkemail,
      autolinkProtocol: onexitautolinkprotocol,
      blockQuote: closer(),
      characterEscapeValue: onexitdata,
      characterReferenceMarkerHexadecimal: onexitcharacterreferencemarker,
      characterReferenceMarkerNumeric: onexitcharacterreferencemarker,
      characterReferenceValue: onexitcharacterreferencevalue,
      characterReference: onexitcharacterreference,
      codeFenced: closer(onexitcodefenced),
      codeFencedFence: onexitcodefencedfence,
      codeFencedFenceInfo: onexitcodefencedfenceinfo,
      codeFencedFenceMeta: onexitcodefencedfencemeta,
      codeFlowValue: onexitdata,
      codeIndented: closer(onexitcodeindented),
      codeText: closer(onexitcodetext),
      codeTextData: onexitdata,
      data: onexitdata,
      definition: closer(),
      definitionDestinationString: onexitdefinitiondestinationstring,
      definitionLabelString: onexitdefinitionlabelstring,
      definitionTitleString: onexitdefinitiontitlestring,
      emphasis: closer(),
      hardBreakEscape: closer(onexithardbreak),
      hardBreakTrailing: closer(onexithardbreak),
      htmlFlow: closer(onexithtmlflow),
      htmlFlowData: onexitdata,
      htmlText: closer(onexithtmltext),
      htmlTextData: onexitdata,
      image: closer(onexitimage),
      label: onexitlabel,
      labelText: onexitlabeltext,
      lineEnding: onexitlineending,
      link: closer(onexitlink),
      listItem: closer(),
      listOrdered: closer(),
      listUnordered: closer(),
      paragraph: closer(),
      referenceString: onexitreferencestring,
      resourceDestinationString: onexitresourcedestinationstring,
      resourceTitleString: onexitresourcetitlestring,
      resource: onexitresource,
      setextHeading: closer(onexitsetextheading),
      setextHeadingLineSequence: onexitsetextheadinglinesequence,
      setextHeadingText: onexitsetextheadingtext,
      strong: closer(),
      thematicBreak: closer()
    }
  };
  configure$1(config, (options || {}).mdastExtensions || []);
  const data = {};
  return compile;
  function compile(events) {
    let tree = {
      type: "root",
      children: []
    };
    const context = {
      stack: [tree],
      tokenStack: [],
      config,
      enter,
      exit: exit2,
      buffer,
      resume,
      data
    };
    const listStack = [];
    let index2 = -1;
    while (++index2 < events.length) {
      if (events[index2][1].type === "listOrdered" || events[index2][1].type === "listUnordered") {
        if (events[index2][0] === "enter") {
          listStack.push(index2);
        } else {
          const tail = listStack.pop();
          index2 = prepareList(events, tail, index2);
        }
      }
    }
    index2 = -1;
    while (++index2 < events.length) {
      const handler = config[events[index2][0]];
      if (own$7.call(handler, events[index2][1].type)) {
        handler[events[index2][1].type].call(Object.assign({
          sliceSerialize: events[index2][2].sliceSerialize
        }, context), events[index2][1]);
      }
    }
    if (context.tokenStack.length > 0) {
      const tail = context.tokenStack[context.tokenStack.length - 1];
      const handler = tail[1] || defaultOnError;
      handler.call(context, void 0, tail[0]);
    }
    tree.position = {
      start: point$2(events.length > 0 ? events[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: point$2(events.length > 0 ? events[events.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    };
    index2 = -1;
    while (++index2 < config.transforms.length) {
      tree = config.transforms[index2](tree) || tree;
    }
    return tree;
  }
  function prepareList(events, start, length) {
    let index2 = start - 1;
    let containerBalance = -1;
    let listSpread = false;
    let listItem3;
    let lineIndex;
    let firstBlankLineIndex;
    let atMarker;
    while (++index2 <= length) {
      const event = events[index2];
      switch (event[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          if (event[0] === "enter") {
            containerBalance++;
          } else {
            containerBalance--;
          }
          atMarker = void 0;
          break;
        }
        case "lineEndingBlank": {
          if (event[0] === "enter") {
            if (listItem3 && !atMarker && !containerBalance && !firstBlankLineIndex) {
              firstBlankLineIndex = index2;
            }
            atMarker = void 0;
          }
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace": {
          break;
        }
        default: {
          atMarker = void 0;
        }
      }
      if (!containerBalance && event[0] === "enter" && event[1].type === "listItemPrefix" || containerBalance === -1 && event[0] === "exit" && (event[1].type === "listUnordered" || event[1].type === "listOrdered")) {
        if (listItem3) {
          let tailIndex = index2;
          lineIndex = void 0;
          while (tailIndex--) {
            const tailEvent = events[tailIndex];
            if (tailEvent[1].type === "lineEnding" || tailEvent[1].type === "lineEndingBlank") {
              if (tailEvent[0] === "exit") continue;
              if (lineIndex) {
                events[lineIndex][1].type = "lineEndingBlank";
                listSpread = true;
              }
              tailEvent[1].type = "lineEnding";
              lineIndex = tailIndex;
            } else if (tailEvent[1].type === "linePrefix" || tailEvent[1].type === "blockQuotePrefix" || tailEvent[1].type === "blockQuotePrefixWhitespace" || tailEvent[1].type === "blockQuoteMarker" || tailEvent[1].type === "listItemIndent") ;
            else {
              break;
            }
          }
          if (firstBlankLineIndex && (!lineIndex || firstBlankLineIndex < lineIndex)) {
            listItem3._spread = true;
          }
          listItem3.end = Object.assign({}, lineIndex ? events[lineIndex][1].start : event[1].end);
          events.splice(lineIndex || index2, 0, ["exit", listItem3, event[2]]);
          index2++;
          length++;
        }
        if (event[1].type === "listItemPrefix") {
          const item = {
            type: "listItem",
            _spread: false,
            start: Object.assign({}, event[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          listItem3 = item;
          events.splice(index2, 0, ["enter", item, event[2]]);
          index2++;
          length++;
          firstBlankLineIndex = void 0;
          atMarker = true;
        }
      }
    }
    events[start][1]._spread = listSpread;
    return length;
  }
  function opener(create2, and) {
    return open;
    function open(token) {
      enter.call(this, create2(token), token);
      if (and) and.call(this, token);
    }
  }
  function buffer() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function enter(node2, token, errorHandler) {
    const parent = this.stack[this.stack.length - 1];
    const siblings = parent.children;
    siblings.push(node2);
    this.stack.push(node2);
    this.tokenStack.push([token, errorHandler || void 0]);
    node2.position = {
      start: point$2(token.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function closer(and) {
    return close;
    function close(token) {
      if (and) and.call(this, token);
      exit2.call(this, token);
    }
  }
  function exit2(token, onExitError) {
    const node2 = this.stack.pop();
    const open = this.tokenStack.pop();
    if (!open) {
      throw new Error("Cannot close `" + token.type + "` (" + stringifyPosition({
        start: token.start,
        end: token.end
      }) + "): it’s not open");
    } else if (open[0].type !== token.type) {
      if (onExitError) {
        onExitError.call(this, token, open[0]);
      } else {
        const handler = open[1] || defaultOnError;
        handler.call(this, token, open[0]);
      }
    }
    node2.position.end = point$2(token.end);
  }
  function resume() {
    return toString$1(this.stack.pop());
  }
  function onenterlistordered() {
    this.data.expectingFirstListItemValue = true;
  }
  function onenterlistitemvalue(token) {
    if (this.data.expectingFirstListItemValue) {
      const ancestor = this.stack[this.stack.length - 2];
      ancestor.start = Number.parseInt(this.sliceSerialize(token), 10);
      this.data.expectingFirstListItemValue = void 0;
    }
  }
  function onexitcodefencedfenceinfo() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.lang = data2;
  }
  function onexitcodefencedfencemeta() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.meta = data2;
  }
  function onexitcodefencedfence() {
    if (this.data.flowCodeInside) return;
    this.buffer();
    this.data.flowCodeInside = true;
  }
  function onexitcodefenced() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.value = data2.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "");
    this.data.flowCodeInside = void 0;
  }
  function onexitcodeindented() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.value = data2.replace(/(\r?\n|\r)$/g, "");
  }
  function onexitdefinitionlabelstring(token) {
    const label = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.label = label;
    node2.identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
  }
  function onexitdefinitiontitlestring() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.title = data2;
  }
  function onexitdefinitiondestinationstring() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.url = data2;
  }
  function onexitatxheadingsequence(token) {
    const node2 = this.stack[this.stack.length - 1];
    if (!node2.depth) {
      const depth = this.sliceSerialize(token).length;
      node2.depth = depth;
    }
  }
  function onexitsetextheadingtext() {
    this.data.setextHeadingSlurpLineEnding = true;
  }
  function onexitsetextheadinglinesequence(token) {
    const node2 = this.stack[this.stack.length - 1];
    node2.depth = this.sliceSerialize(token).codePointAt(0) === 61 ? 1 : 2;
  }
  function onexitsetextheading() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function onenterdata(token) {
    const node2 = this.stack[this.stack.length - 1];
    const siblings = node2.children;
    let tail = siblings[siblings.length - 1];
    if (!tail || tail.type !== "text") {
      tail = text2();
      tail.position = {
        start: point$2(token.start),
        // @ts-expect-error: we’ll add `end` later.
        end: void 0
      };
      siblings.push(tail);
    }
    this.stack.push(tail);
  }
  function onexitdata(token) {
    const tail = this.stack.pop();
    tail.value += this.sliceSerialize(token);
    tail.position.end = point$2(token.end);
  }
  function onexitlineending(token) {
    const context = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const tail = context.children[context.children.length - 1];
      tail.position.end = point$2(token.end);
      this.data.atHardBreak = void 0;
      return;
    }
    if (!this.data.setextHeadingSlurpLineEnding && config.canContainEols.includes(context.type)) {
      onenterdata.call(this, token);
      onexitdata.call(this, token);
    }
  }
  function onexithardbreak() {
    this.data.atHardBreak = true;
  }
  function onexithtmlflow() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.value = data2;
  }
  function onexithtmltext() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.value = data2;
  }
  function onexitcodetext() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.value = data2;
  }
  function onexitlink() {
    const node2 = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const referenceType = this.data.referenceType || "shortcut";
      node2.type += "Reference";
      node2.referenceType = referenceType;
      delete node2.url;
      delete node2.title;
    } else {
      delete node2.identifier;
      delete node2.label;
    }
    this.data.referenceType = void 0;
  }
  function onexitimage() {
    const node2 = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const referenceType = this.data.referenceType || "shortcut";
      node2.type += "Reference";
      node2.referenceType = referenceType;
      delete node2.url;
      delete node2.title;
    } else {
      delete node2.identifier;
      delete node2.label;
    }
    this.data.referenceType = void 0;
  }
  function onexitlabeltext(token) {
    const string2 = this.sliceSerialize(token);
    const ancestor = this.stack[this.stack.length - 2];
    ancestor.label = decodeString(string2);
    ancestor.identifier = normalizeIdentifier(string2).toLowerCase();
  }
  function onexitlabel() {
    const fragment2 = this.stack[this.stack.length - 1];
    const value = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    this.data.inReference = true;
    if (node2.type === "link") {
      const children = fragment2.children;
      node2.children = children;
    } else {
      node2.alt = value;
    }
  }
  function onexitresourcedestinationstring() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.url = data2;
  }
  function onexitresourcetitlestring() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.title = data2;
  }
  function onexitresource() {
    this.data.inReference = void 0;
  }
  function onenterreference() {
    this.data.referenceType = "collapsed";
  }
  function onexitreferencestring(token) {
    const label = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.label = label;
    node2.identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
    this.data.referenceType = "full";
  }
  function onexitcharacterreferencemarker(token) {
    this.data.characterReferenceType = token.type;
  }
  function onexitcharacterreferencevalue(token) {
    const data2 = this.sliceSerialize(token);
    const type = this.data.characterReferenceType;
    let value;
    if (type) {
      value = decodeNumericCharacterReference(data2, type === "characterReferenceMarkerNumeric" ? 10 : 16);
      this.data.characterReferenceType = void 0;
    } else {
      const result = decodeNamedCharacterReference(data2);
      value = result;
    }
    const tail = this.stack[this.stack.length - 1];
    tail.value += value;
  }
  function onexitcharacterreference(token) {
    const tail = this.stack.pop();
    tail.position.end = point$2(token.end);
  }
  function onexitautolinkprotocol(token) {
    onexitdata.call(this, token);
    const node2 = this.stack[this.stack.length - 1];
    node2.url = this.sliceSerialize(token);
  }
  function onexitautolinkemail(token) {
    onexitdata.call(this, token);
    const node2 = this.stack[this.stack.length - 1];
    node2.url = "mailto:" + this.sliceSerialize(token);
  }
  function blockQuote2() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function codeFlow() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function codeText2() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function definition2() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function emphasis2() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function heading2() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function hardBreak2() {
    return {
      type: "break"
    };
  }
  function html2() {
    return {
      type: "html",
      value: ""
    };
  }
  function image2() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function link2() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function list2(token) {
    return {
      type: "list",
      ordered: token.type === "listOrdered",
      start: null,
      spread: token._spread,
      children: []
    };
  }
  function listItem2(token) {
    return {
      type: "listItem",
      spread: token._spread,
      checked: null,
      children: []
    };
  }
  function paragraph2() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function strong2() {
    return {
      type: "strong",
      children: []
    };
  }
  function text2() {
    return {
      type: "text",
      value: ""
    };
  }
  function thematicBreak2() {
    return {
      type: "thematicBreak"
    };
  }
}
function point$2(d) {
  return {
    line: d.line,
    column: d.column,
    offset: d.offset
  };
}
function configure$1(combined, extensions) {
  let index2 = -1;
  while (++index2 < extensions.length) {
    const value = extensions[index2];
    if (Array.isArray(value)) {
      configure$1(combined, value);
    } else {
      extension(combined, value);
    }
  }
}
function extension(combined, extension2) {
  let key;
  for (key in extension2) {
    if (own$7.call(extension2, key)) {
      switch (key) {
        case "canContainEols": {
          const right = extension2[key];
          if (right) {
            combined[key].push(...right);
          }
          break;
        }
        case "transforms": {
          const right = extension2[key];
          if (right) {
            combined[key].push(...right);
          }
          break;
        }
        case "enter":
        case "exit": {
          const right = extension2[key];
          if (right) {
            Object.assign(combined[key], right);
          }
          break;
        }
      }
    }
  }
}
function defaultOnError(left, right) {
  if (left) {
    throw new Error("Cannot close `" + left.type + "` (" + stringifyPosition({
      start: left.start,
      end: left.end
    }) + "): a different token (`" + right.type + "`, " + stringifyPosition({
      start: right.start,
      end: right.end
    }) + ") is open");
  } else {
    throw new Error("Cannot close document, a token (`" + right.type + "`, " + stringifyPosition({
      start: right.start,
      end: right.end
    }) + ") is still open");
  }
}
function remarkParse(options) {
  const self2 = this;
  self2.parser = parser;
  function parser(doc) {
    return fromMarkdown(doc, {
      ...self2.data("settings"),
      ...options,
      // Note: these options are not in the readme.
      // The goal is for them to be set by plugins on `data` instead of being
      // passed by users.
      extensions: self2.data("micromarkExtensions") || [],
      mdastExtensions: self2.data("fromMarkdownExtensions") || []
    });
  }
}
const own$6 = {}.hasOwnProperty;
function zwitch(key, options) {
  const settings = options || {};
  function one2(value, ...parameters) {
    let fn = one2.invalid;
    const handlers2 = one2.handlers;
    if (value && own$6.call(value, key)) {
      const id = String(value[key]);
      fn = own$6.call(handlers2, id) ? handlers2[id] : one2.unknown;
    }
    if (fn) {
      return fn.call(this, value, ...parameters);
    }
  }
  one2.handlers = settings.handlers || {};
  one2.invalid = settings.invalid;
  one2.unknown = settings.unknown;
  return one2;
}
const own$5 = {}.hasOwnProperty;
function configure(base, extension2) {
  let index2 = -1;
  let key;
  if (extension2.extensions) {
    while (++index2 < extension2.extensions.length) {
      configure(base, extension2.extensions[index2]);
    }
  }
  for (key in extension2) {
    if (own$5.call(extension2, key)) {
      switch (key) {
        case "extensions": {
          break;
        }
        /* c8 ignore next 4 */
        case "unsafe": {
          list$2(base[key], extension2[key]);
          break;
        }
        case "join": {
          list$2(base[key], extension2[key]);
          break;
        }
        case "handlers": {
          map$2(base[key], extension2[key]);
          break;
        }
        default: {
          base.options[key] = extension2[key];
        }
      }
    }
  }
  return base;
}
function list$2(left, right) {
  if (right) {
    left.push(...right);
  }
}
function map$2(left, right) {
  if (right) {
    Object.assign(left, right);
  }
}
function blockquote$1(node2, _, state, info) {
  const exit2 = state.enter("blockquote");
  const tracker = state.createTracker(info);
  tracker.move("> ");
  tracker.shift(2);
  const value = state.indentLines(
    state.containerFlow(node2, tracker.current()),
    map$1
  );
  exit2();
  return value;
}
function map$1(line, _, blank) {
  return ">" + (blank ? "" : " ") + line;
}
function patternInScope(stack, pattern) {
  return listInScope(stack, pattern.inConstruct, true) && !listInScope(stack, pattern.notInConstruct, false);
}
function listInScope(stack, list2, none) {
  if (typeof list2 === "string") {
    list2 = [list2];
  }
  if (!list2 || list2.length === 0) {
    return none;
  }
  let index2 = -1;
  while (++index2 < list2.length) {
    if (stack.includes(list2[index2])) {
      return true;
    }
  }
  return false;
}
function hardBreak$1(_, _1, state, info) {
  let index2 = -1;
  while (++index2 < state.unsafe.length) {
    if (state.unsafe[index2].character === "\n" && patternInScope(state.stack, state.unsafe[index2])) {
      return /[ \t]/.test(info.before) ? "" : " ";
    }
  }
  return "\\\n";
}
function longestStreak(value, substring) {
  const source = String(value);
  let index2 = source.indexOf(substring);
  let expected = index2;
  let count = 0;
  let max = 0;
  if (typeof substring !== "string") {
    throw new TypeError("Expected substring");
  }
  while (index2 !== -1) {
    if (index2 === expected) {
      if (++count > max) {
        max = count;
      }
    } else {
      count = 1;
    }
    expected = index2 + substring.length;
    index2 = source.indexOf(substring, expected);
  }
  return max;
}
function formatCodeAsIndented(node2, state) {
  return Boolean(
    state.options.fences === false && node2.value && // If there’s no info…
    !node2.lang && // And there’s a non-whitespace character…
    /[^ \r\n]/.test(node2.value) && // And the value doesn’t start or end in a blank…
    !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(node2.value)
  );
}
function checkFence(state) {
  const marker = state.options.fence || "`";
  if (marker !== "`" && marker !== "~") {
    throw new Error(
      "Cannot serialize code with `" + marker + "` for `options.fence`, expected `` ` `` or `~`"
    );
  }
  return marker;
}
function code$1(node2, _, state, info) {
  const marker = checkFence(state);
  const raw2 = node2.value || "";
  const suffix = marker === "`" ? "GraveAccent" : "Tilde";
  if (formatCodeAsIndented(node2, state)) {
    const exit3 = state.enter("codeIndented");
    const value2 = state.indentLines(raw2, map);
    exit3();
    return value2;
  }
  const tracker = state.createTracker(info);
  const sequence = marker.repeat(Math.max(longestStreak(raw2, marker) + 1, 3));
  const exit2 = state.enter("codeFenced");
  let value = tracker.move(sequence);
  if (node2.lang) {
    const subexit = state.enter(`codeFencedLang${suffix}`);
    value += tracker.move(
      state.safe(node2.lang, {
        before: value,
        after: " ",
        encode: ["`"],
        ...tracker.current()
      })
    );
    subexit();
  }
  if (node2.lang && node2.meta) {
    const subexit = state.enter(`codeFencedMeta${suffix}`);
    value += tracker.move(" ");
    value += tracker.move(
      state.safe(node2.meta, {
        before: value,
        after: "\n",
        encode: ["`"],
        ...tracker.current()
      })
    );
    subexit();
  }
  value += tracker.move("\n");
  if (raw2) {
    value += tracker.move(raw2 + "\n");
  }
  value += tracker.move(sequence);
  exit2();
  return value;
}
function map(line, _, blank) {
  return (blank ? "" : "    ") + line;
}
function checkQuote(state) {
  const marker = state.options.quote || '"';
  if (marker !== '"' && marker !== "'") {
    throw new Error(
      "Cannot serialize title with `" + marker + "` for `options.quote`, expected `\"`, or `'`"
    );
  }
  return marker;
}
function definition(node2, _, state, info) {
  const quote = checkQuote(state);
  const suffix = quote === '"' ? "Quote" : "Apostrophe";
  const exit2 = state.enter("definition");
  let subexit = state.enter("label");
  const tracker = state.createTracker(info);
  let value = tracker.move("[");
  value += tracker.move(
    state.safe(state.associationId(node2), {
      before: value,
      after: "]",
      ...tracker.current()
    })
  );
  value += tracker.move("]: ");
  subexit();
  if (
    // If there’s no url, or…
    !node2.url || // If there are control characters or whitespace.
    /[\0- \u007F]/.test(node2.url)
  ) {
    subexit = state.enter("destinationLiteral");
    value += tracker.move("<");
    value += tracker.move(
      state.safe(node2.url, { before: value, after: ">", ...tracker.current() })
    );
    value += tracker.move(">");
  } else {
    subexit = state.enter("destinationRaw");
    value += tracker.move(
      state.safe(node2.url, {
        before: value,
        after: node2.title ? " " : "\n",
        ...tracker.current()
      })
    );
  }
  subexit();
  if (node2.title) {
    subexit = state.enter(`title${suffix}`);
    value += tracker.move(" " + quote);
    value += tracker.move(
      state.safe(node2.title, {
        before: value,
        after: quote,
        ...tracker.current()
      })
    );
    value += tracker.move(quote);
    subexit();
  }
  exit2();
  return value;
}
function checkEmphasis(state) {
  const marker = state.options.emphasis || "*";
  if (marker !== "*" && marker !== "_") {
    throw new Error(
      "Cannot serialize emphasis with `" + marker + "` for `options.emphasis`, expected `*`, or `_`"
    );
  }
  return marker;
}
function encodeCharacterReference(code2) {
  return "&#x" + code2.toString(16).toUpperCase() + ";";
}
function encodeInfo(outside, inside, marker) {
  const outsideKind = classifyCharacter(outside);
  const insideKind = classifyCharacter(inside);
  if (outsideKind === void 0) {
    return insideKind === void 0 ? (
      // Letter inside:
      // we have to encode *both* letters for `_` as it is looser.
      // it already forms for `*` (and GFMs `~`).
      marker === "_" ? { inside: true, outside: true } : { inside: false, outside: false }
    ) : insideKind === 1 ? (
      // Whitespace inside: encode both (letter, whitespace).
      { inside: true, outside: true }
    ) : (
      // Punctuation inside: encode outer (letter)
      { inside: false, outside: true }
    );
  }
  if (outsideKind === 1) {
    return insideKind === void 0 ? (
      // Letter inside: already forms.
      { inside: false, outside: false }
    ) : insideKind === 1 ? (
      // Whitespace inside: encode both (whitespace).
      { inside: true, outside: true }
    ) : (
      // Punctuation inside: already forms.
      { inside: false, outside: false }
    );
  }
  return insideKind === void 0 ? (
    // Letter inside: already forms.
    { inside: false, outside: false }
  ) : insideKind === 1 ? (
    // Whitespace inside: encode inner (whitespace).
    { inside: true, outside: false }
  ) : (
    // Punctuation inside: already forms.
    { inside: false, outside: false }
  );
}
emphasis$1.peek = emphasisPeek;
function emphasis$1(node2, _, state, info) {
  const marker = checkEmphasis(state);
  const exit2 = state.enter("emphasis");
  const tracker = state.createTracker(info);
  const before = tracker.move(marker);
  let between2 = tracker.move(
    state.containerPhrasing(node2, {
      after: marker,
      before,
      ...tracker.current()
    })
  );
  const betweenHead = between2.charCodeAt(0);
  const open = encodeInfo(
    info.before.charCodeAt(info.before.length - 1),
    betweenHead,
    marker
  );
  if (open.inside) {
    between2 = encodeCharacterReference(betweenHead) + between2.slice(1);
  }
  const betweenTail = between2.charCodeAt(between2.length - 1);
  const close = encodeInfo(info.after.charCodeAt(0), betweenTail, marker);
  if (close.inside) {
    between2 = between2.slice(0, -1) + encodeCharacterReference(betweenTail);
  }
  const after = tracker.move(marker);
  exit2();
  state.attentionEncodeSurroundingInfo = {
    after: close.outside,
    before: open.outside
  };
  return before + between2 + after;
}
function emphasisPeek(_, _1, state) {
  return state.options.emphasis || "*";
}
const convert = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {Check}
   */
  (function(test) {
    if (test === null || test === void 0) {
      return ok$1;
    }
    if (typeof test === "function") {
      return castFactory(test);
    }
    if (typeof test === "object") {
      return Array.isArray(test) ? anyFactory(test) : (
        // Cast because `ReadonlyArray` goes into the above but `isArray`
        // narrows to `Array`.
        propertiesFactory(
          /** @type {Props} */
          test
        )
      );
    }
    if (typeof test === "string") {
      return typeFactory(test);
    }
    throw new Error("Expected function, string, or object as test");
  })
);
function anyFactory(tests) {
  const checks2 = [];
  let index2 = -1;
  while (++index2 < tests.length) {
    checks2[index2] = convert(tests[index2]);
  }
  return castFactory(any);
  function any(...parameters) {
    let index3 = -1;
    while (++index3 < checks2.length) {
      if (checks2[index3].apply(this, parameters)) return true;
    }
    return false;
  }
}
function propertiesFactory(check) {
  const checkAsRecord = (
    /** @type {Record<string, unknown>} */
    check
  );
  return castFactory(all2);
  function all2(node2) {
    const nodeAsRecord = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      node2
    );
    let key;
    for (key in check) {
      if (nodeAsRecord[key] !== checkAsRecord[key]) return false;
    }
    return true;
  }
}
function typeFactory(check) {
  return castFactory(type);
  function type(node2) {
    return node2 && node2.type === check;
  }
}
function castFactory(testFunction) {
  return check;
  function check(value, index2, parent) {
    return Boolean(
      looksLikeANode(value) && testFunction.call(
        this,
        value,
        typeof index2 === "number" ? index2 : void 0,
        parent || void 0
      )
    );
  }
}
function ok$1() {
  return true;
}
function looksLikeANode(value) {
  return value !== null && typeof value === "object" && "type" in value;
}
function color(d) {
  return d;
}
const empty$1 = [];
const CONTINUE = true;
const EXIT = false;
const SKIP = "skip";
function visitParents(tree, test, visitor, reverse) {
  let check;
  if (typeof test === "function" && typeof visitor !== "function") {
    reverse = visitor;
    visitor = test;
  } else {
    check = test;
  }
  const is = convert(check);
  const step = reverse ? -1 : 1;
  factory(tree, void 0, [])();
  function factory(node2, index2, parents) {
    const value = (
      /** @type {Record<string, unknown>} */
      node2 && typeof node2 === "object" ? node2 : {}
    );
    if (typeof value.type === "string") {
      const name2 = (
        // `hast`
        typeof value.tagName === "string" ? value.tagName : (
          // `xast`
          typeof value.name === "string" ? value.name : void 0
        )
      );
      Object.defineProperty(visit2, "name", {
        value: "node (" + color(node2.type + (name2 ? "<" + name2 + ">" : "")) + ")"
      });
    }
    return visit2;
    function visit2() {
      let result = empty$1;
      let subresult;
      let offset;
      let grandparents;
      if (!test || is(node2, index2, parents[parents.length - 1] || void 0)) {
        result = toResult(visitor(node2, parents));
        if (result[0] === EXIT) {
          return result;
        }
      }
      if ("children" in node2 && node2.children) {
        const nodeAsParent = (
          /** @type {UnistParent} */
          node2
        );
        if (nodeAsParent.children && result[0] !== SKIP) {
          offset = (reverse ? nodeAsParent.children.length : -1) + step;
          grandparents = parents.concat(nodeAsParent);
          while (offset > -1 && offset < nodeAsParent.children.length) {
            const child = nodeAsParent.children[offset];
            subresult = factory(child, offset, grandparents)();
            if (subresult[0] === EXIT) {
              return subresult;
            }
            offset = typeof subresult[1] === "number" ? subresult[1] : offset + step;
          }
        }
      }
      return result;
    }
  }
}
function toResult(value) {
  if (Array.isArray(value)) {
    return value;
  }
  if (typeof value === "number") {
    return [CONTINUE, value];
  }
  return value === null || value === void 0 ? empty$1 : [value];
}
function visit(tree, testOrVisitor, visitorOrReverse, maybeReverse) {
  let reverse;
  let test;
  let visitor;
  if (typeof testOrVisitor === "function" && typeof visitorOrReverse !== "function") {
    test = void 0;
    visitor = testOrVisitor;
    reverse = visitorOrReverse;
  } else {
    test = testOrVisitor;
    visitor = visitorOrReverse;
    reverse = maybeReverse;
  }
  visitParents(tree, test, overload, reverse);
  function overload(node2, parents) {
    const parent = parents[parents.length - 1];
    const index2 = parent ? parent.children.indexOf(node2) : void 0;
    return visitor(node2, index2, parent);
  }
}
function formatHeadingAsSetext(node2, state) {
  let literalWithBreak = false;
  visit(node2, function(node3) {
    if ("value" in node3 && /\r?\n|\r/.test(node3.value) || node3.type === "break") {
      literalWithBreak = true;
      return EXIT;
    }
  });
  return Boolean(
    (!node2.depth || node2.depth < 3) && toString$1(node2) && (state.options.setext || literalWithBreak)
  );
}
function heading$1(node2, _, state, info) {
  const rank = Math.max(Math.min(6, node2.depth || 1), 1);
  const tracker = state.createTracker(info);
  if (formatHeadingAsSetext(node2, state)) {
    const exit3 = state.enter("headingSetext");
    const subexit2 = state.enter("phrasing");
    const value2 = state.containerPhrasing(node2, {
      ...tracker.current(),
      before: "\n",
      after: "\n"
    });
    subexit2();
    exit3();
    return value2 + "\n" + (rank === 1 ? "=" : "-").repeat(
      // The whole size…
      value2.length - // Minus the position of the character after the last EOL (or
      // 0 if there is none)…
      (Math.max(value2.lastIndexOf("\r"), value2.lastIndexOf("\n")) + 1)
    );
  }
  const sequence = "#".repeat(rank);
  const exit2 = state.enter("headingAtx");
  const subexit = state.enter("phrasing");
  tracker.move(sequence + " ");
  let value = state.containerPhrasing(node2, {
    before: "# ",
    after: "\n",
    ...tracker.current()
  });
  if (/^[\t ]/.test(value)) {
    value = encodeCharacterReference(value.charCodeAt(0)) + value.slice(1);
  }
  value = value ? sequence + " " + value : sequence;
  if (state.options.closeAtx) {
    value += " " + sequence;
  }
  subexit();
  exit2();
  return value;
}
html$3.peek = htmlPeek;
function html$3(node2) {
  return node2.value || "";
}
function htmlPeek() {
  return "<";
}
image$1.peek = imagePeek;
function image$1(node2, _, state, info) {
  const quote = checkQuote(state);
  const suffix = quote === '"' ? "Quote" : "Apostrophe";
  const exit2 = state.enter("image");
  let subexit = state.enter("label");
  const tracker = state.createTracker(info);
  let value = tracker.move("![");
  value += tracker.move(
    state.safe(node2.alt, { before: value, after: "]", ...tracker.current() })
  );
  value += tracker.move("](");
  subexit();
  if (
    // If there’s no url but there is a title…
    !node2.url && node2.title || // If there are control characters or whitespace.
    /[\0- \u007F]/.test(node2.url)
  ) {
    subexit = state.enter("destinationLiteral");
    value += tracker.move("<");
    value += tracker.move(
      state.safe(node2.url, { before: value, after: ">", ...tracker.current() })
    );
    value += tracker.move(">");
  } else {
    subexit = state.enter("destinationRaw");
    value += tracker.move(
      state.safe(node2.url, {
        before: value,
        after: node2.title ? " " : ")",
        ...tracker.current()
      })
    );
  }
  subexit();
  if (node2.title) {
    subexit = state.enter(`title${suffix}`);
    value += tracker.move(" " + quote);
    value += tracker.move(
      state.safe(node2.title, {
        before: value,
        after: quote,
        ...tracker.current()
      })
    );
    value += tracker.move(quote);
    subexit();
  }
  value += tracker.move(")");
  exit2();
  return value;
}
function imagePeek() {
  return "!";
}
imageReference$1.peek = imageReferencePeek;
function imageReference$1(node2, _, state, info) {
  const type = node2.referenceType;
  const exit2 = state.enter("imageReference");
  let subexit = state.enter("label");
  const tracker = state.createTracker(info);
  let value = tracker.move("![");
  const alt = state.safe(node2.alt, {
    before: value,
    after: "]",
    ...tracker.current()
  });
  value += tracker.move(alt + "][");
  subexit();
  const stack = state.stack;
  state.stack = [];
  subexit = state.enter("reference");
  const reference = state.safe(state.associationId(node2), {
    before: value,
    after: "]",
    ...tracker.current()
  });
  subexit();
  state.stack = stack;
  exit2();
  if (type === "full" || !alt || alt !== reference) {
    value += tracker.move(reference + "]");
  } else if (type === "shortcut") {
    value = value.slice(0, -1);
  } else {
    value += tracker.move("]");
  }
  return value;
}
function imageReferencePeek() {
  return "!";
}
inlineCode$1.peek = inlineCodePeek;
function inlineCode$1(node2, _, state) {
  let value = node2.value || "";
  let sequence = "`";
  let index2 = -1;
  while (new RegExp("(^|[^`])" + sequence + "([^`]|$)").test(value)) {
    sequence += "`";
  }
  if (/[^ \r\n]/.test(value) && (/^[ \r\n]/.test(value) && /[ \r\n]$/.test(value) || /^`|`$/.test(value))) {
    value = " " + value + " ";
  }
  while (++index2 < state.unsafe.length) {
    const pattern = state.unsafe[index2];
    const expression = state.compilePattern(pattern);
    let match;
    if (!pattern.atBreak) continue;
    while (match = expression.exec(value)) {
      let position2 = match.index;
      if (value.charCodeAt(position2) === 10 && value.charCodeAt(position2 - 1) === 13) {
        position2--;
      }
      value = value.slice(0, position2) + " " + value.slice(match.index + 1);
    }
  }
  return sequence + value + sequence;
}
function inlineCodePeek() {
  return "`";
}
function formatLinkAsAutolink(node2, state) {
  const raw2 = toString$1(node2);
  return Boolean(
    !state.options.resourceLink && // If there’s a url…
    node2.url && // And there’s a no title…
    !node2.title && // And the content of `node` is a single text node…
    node2.children && node2.children.length === 1 && node2.children[0].type === "text" && // And if the url is the same as the content…
    (raw2 === node2.url || "mailto:" + raw2 === node2.url) && // And that starts w/ a protocol…
    /^[a-z][a-z+.-]+:/i.test(node2.url) && // And that doesn’t contain ASCII control codes (character escapes and
    // references don’t work), space, or angle brackets…
    !/[\0- <>\u007F]/.test(node2.url)
  );
}
link$1.peek = linkPeek;
function link$1(node2, _, state, info) {
  const quote = checkQuote(state);
  const suffix = quote === '"' ? "Quote" : "Apostrophe";
  const tracker = state.createTracker(info);
  let exit2;
  let subexit;
  if (formatLinkAsAutolink(node2, state)) {
    const stack = state.stack;
    state.stack = [];
    exit2 = state.enter("autolink");
    let value2 = tracker.move("<");
    value2 += tracker.move(
      state.containerPhrasing(node2, {
        before: value2,
        after: ">",
        ...tracker.current()
      })
    );
    value2 += tracker.move(">");
    exit2();
    state.stack = stack;
    return value2;
  }
  exit2 = state.enter("link");
  subexit = state.enter("label");
  let value = tracker.move("[");
  value += tracker.move(
    state.containerPhrasing(node2, {
      before: value,
      after: "](",
      ...tracker.current()
    })
  );
  value += tracker.move("](");
  subexit();
  if (
    // If there’s no url but there is a title…
    !node2.url && node2.title || // If there are control characters or whitespace.
    /[\0- \u007F]/.test(node2.url)
  ) {
    subexit = state.enter("destinationLiteral");
    value += tracker.move("<");
    value += tracker.move(
      state.safe(node2.url, { before: value, after: ">", ...tracker.current() })
    );
    value += tracker.move(">");
  } else {
    subexit = state.enter("destinationRaw");
    value += tracker.move(
      state.safe(node2.url, {
        before: value,
        after: node2.title ? " " : ")",
        ...tracker.current()
      })
    );
  }
  subexit();
  if (node2.title) {
    subexit = state.enter(`title${suffix}`);
    value += tracker.move(" " + quote);
    value += tracker.move(
      state.safe(node2.title, {
        before: value,
        after: quote,
        ...tracker.current()
      })
    );
    value += tracker.move(quote);
    subexit();
  }
  value += tracker.move(")");
  exit2();
  return value;
}
function linkPeek(node2, _, state) {
  return formatLinkAsAutolink(node2, state) ? "<" : "[";
}
linkReference$1.peek = linkReferencePeek;
function linkReference$1(node2, _, state, info) {
  const type = node2.referenceType;
  const exit2 = state.enter("linkReference");
  let subexit = state.enter("label");
  const tracker = state.createTracker(info);
  let value = tracker.move("[");
  const text2 = state.containerPhrasing(node2, {
    before: value,
    after: "]",
    ...tracker.current()
  });
  value += tracker.move(text2 + "][");
  subexit();
  const stack = state.stack;
  state.stack = [];
  subexit = state.enter("reference");
  const reference = state.safe(state.associationId(node2), {
    before: value,
    after: "]",
    ...tracker.current()
  });
  subexit();
  state.stack = stack;
  exit2();
  if (type === "full" || !text2 || text2 !== reference) {
    value += tracker.move(reference + "]");
  } else if (type === "shortcut") {
    value = value.slice(0, -1);
  } else {
    value += tracker.move("]");
  }
  return value;
}
function linkReferencePeek() {
  return "[";
}
function checkBullet(state) {
  const marker = state.options.bullet || "*";
  if (marker !== "*" && marker !== "+" && marker !== "-") {
    throw new Error(
      "Cannot serialize items with `" + marker + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  }
  return marker;
}
function checkBulletOther(state) {
  const bullet = checkBullet(state);
  const bulletOther = state.options.bulletOther;
  if (!bulletOther) {
    return bullet === "*" ? "-" : "*";
  }
  if (bulletOther !== "*" && bulletOther !== "+" && bulletOther !== "-") {
    throw new Error(
      "Cannot serialize items with `" + bulletOther + "` for `options.bulletOther`, expected `*`, `+`, or `-`"
    );
  }
  if (bulletOther === bullet) {
    throw new Error(
      "Expected `bullet` (`" + bullet + "`) and `bulletOther` (`" + bulletOther + "`) to be different"
    );
  }
  return bulletOther;
}
function checkBulletOrdered(state) {
  const marker = state.options.bulletOrdered || ".";
  if (marker !== "." && marker !== ")") {
    throw new Error(
      "Cannot serialize items with `" + marker + "` for `options.bulletOrdered`, expected `.` or `)`"
    );
  }
  return marker;
}
function checkRule(state) {
  const marker = state.options.rule || "*";
  if (marker !== "*" && marker !== "-" && marker !== "_") {
    throw new Error(
      "Cannot serialize rules with `" + marker + "` for `options.rule`, expected `*`, `-`, or `_`"
    );
  }
  return marker;
}
function list$1(node2, parent, state, info) {
  const exit2 = state.enter("list");
  const bulletCurrent = state.bulletCurrent;
  let bullet = node2.ordered ? checkBulletOrdered(state) : checkBullet(state);
  const bulletOther = node2.ordered ? bullet === "." ? ")" : "." : checkBulletOther(state);
  let useDifferentMarker = parent && state.bulletLastUsed ? bullet === state.bulletLastUsed : false;
  if (!node2.ordered) {
    const firstListItem = node2.children ? node2.children[0] : void 0;
    if (
      // Bullet could be used as a thematic break marker:
      (bullet === "*" || bullet === "-") && // Empty first list item:
      firstListItem && (!firstListItem.children || !firstListItem.children[0]) && // Directly in two other list items:
      state.stack[state.stack.length - 1] === "list" && state.stack[state.stack.length - 2] === "listItem" && state.stack[state.stack.length - 3] === "list" && state.stack[state.stack.length - 4] === "listItem" && // That are each the first child.
      state.indexStack[state.indexStack.length - 1] === 0 && state.indexStack[state.indexStack.length - 2] === 0 && state.indexStack[state.indexStack.length - 3] === 0
    ) {
      useDifferentMarker = true;
    }
    if (checkRule(state) === bullet && firstListItem) {
      let index2 = -1;
      while (++index2 < node2.children.length) {
        const item = node2.children[index2];
        if (item && item.type === "listItem" && item.children && item.children[0] && item.children[0].type === "thematicBreak") {
          useDifferentMarker = true;
          break;
        }
      }
    }
  }
  if (useDifferentMarker) {
    bullet = bulletOther;
  }
  state.bulletCurrent = bullet;
  const value = state.containerFlow(node2, info);
  state.bulletLastUsed = bullet;
  state.bulletCurrent = bulletCurrent;
  exit2();
  return value;
}
function checkListItemIndent(state) {
  const style2 = state.options.listItemIndent || "one";
  if (style2 !== "tab" && style2 !== "one" && style2 !== "mixed") {
    throw new Error(
      "Cannot serialize items with `" + style2 + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  }
  return style2;
}
function listItem$1(node2, parent, state, info) {
  const listItemIndent = checkListItemIndent(state);
  let bullet = state.bulletCurrent || checkBullet(state);
  if (parent && parent.type === "list" && parent.ordered) {
    bullet = (typeof parent.start === "number" && parent.start > -1 ? parent.start : 1) + (state.options.incrementListMarker === false ? 0 : parent.children.indexOf(node2)) + bullet;
  }
  let size = bullet.length + 1;
  if (listItemIndent === "tab" || listItemIndent === "mixed" && (parent && parent.type === "list" && parent.spread || node2.spread)) {
    size = Math.ceil(size / 4) * 4;
  }
  const tracker = state.createTracker(info);
  tracker.move(bullet + " ".repeat(size - bullet.length));
  tracker.shift(size);
  const exit2 = state.enter("listItem");
  const value = state.indentLines(
    state.containerFlow(node2, tracker.current()),
    map2
  );
  exit2();
  return value;
  function map2(line, index2, blank) {
    if (index2) {
      return (blank ? "" : " ".repeat(size)) + line;
    }
    return (blank ? bullet : bullet + " ".repeat(size - bullet.length)) + line;
  }
}
function paragraph$1(node2, _, state, info) {
  const exit2 = state.enter("paragraph");
  const subexit = state.enter("phrasing");
  const value = state.containerPhrasing(node2, info);
  subexit();
  exit2();
  return value;
}
const phrasing = (
  /** @type {(node?: unknown) => node is Exclude<PhrasingContent, Html>} */
  convert([
    "break",
    "delete",
    "emphasis",
    // To do: next major: removed since footnotes were added to GFM.
    "footnote",
    "footnoteReference",
    "image",
    "imageReference",
    "inlineCode",
    // Enabled by `mdast-util-math`:
    "inlineMath",
    "link",
    "linkReference",
    // Enabled by `mdast-util-mdx`:
    "mdxJsxTextElement",
    // Enabled by `mdast-util-mdx`:
    "mdxTextExpression",
    "strong",
    "text",
    // Enabled by `mdast-util-directive`:
    "textDirective"
  ])
);
function root$4(node2, _, state, info) {
  const hasPhrasing = node2.children.some(function(d) {
    return phrasing(d);
  });
  const container = hasPhrasing ? state.containerPhrasing : state.containerFlow;
  return container.call(state, node2, info);
}
function checkStrong(state) {
  const marker = state.options.strong || "*";
  if (marker !== "*" && marker !== "_") {
    throw new Error(
      "Cannot serialize strong with `" + marker + "` for `options.strong`, expected `*`, or `_`"
    );
  }
  return marker;
}
strong$1.peek = strongPeek;
function strong$1(node2, _, state, info) {
  const marker = checkStrong(state);
  const exit2 = state.enter("strong");
  const tracker = state.createTracker(info);
  const before = tracker.move(marker + marker);
  let between2 = tracker.move(
    state.containerPhrasing(node2, {
      after: marker,
      before,
      ...tracker.current()
    })
  );
  const betweenHead = between2.charCodeAt(0);
  const open = encodeInfo(
    info.before.charCodeAt(info.before.length - 1),
    betweenHead,
    marker
  );
  if (open.inside) {
    between2 = encodeCharacterReference(betweenHead) + between2.slice(1);
  }
  const betweenTail = between2.charCodeAt(between2.length - 1);
  const close = encodeInfo(info.after.charCodeAt(0), betweenTail, marker);
  if (close.inside) {
    between2 = between2.slice(0, -1) + encodeCharacterReference(betweenTail);
  }
  const after = tracker.move(marker + marker);
  exit2();
  state.attentionEncodeSurroundingInfo = {
    after: close.outside,
    before: open.outside
  };
  return before + between2 + after;
}
function strongPeek(_, _1, state) {
  return state.options.strong || "*";
}
function text$4(node2, _, state, info) {
  return state.safe(node2.value, info);
}
function checkRuleRepetition(state) {
  const repetition = state.options.ruleRepetition || 3;
  if (repetition < 3) {
    throw new Error(
      "Cannot serialize rules with repetition `" + repetition + "` for `options.ruleRepetition`, expected `3` or more"
    );
  }
  return repetition;
}
function thematicBreak$1(_, _1, state) {
  const value = (checkRule(state) + (state.options.ruleSpaces ? " " : "")).repeat(checkRuleRepetition(state));
  return state.options.ruleSpaces ? value.slice(0, -1) : value;
}
const handle = {
  blockquote: blockquote$1,
  break: hardBreak$1,
  code: code$1,
  definition,
  emphasis: emphasis$1,
  hardBreak: hardBreak$1,
  heading: heading$1,
  html: html$3,
  image: image$1,
  imageReference: imageReference$1,
  inlineCode: inlineCode$1,
  link: link$1,
  linkReference: linkReference$1,
  list: list$1,
  listItem: listItem$1,
  paragraph: paragraph$1,
  root: root$4,
  strong: strong$1,
  text: text$4,
  thematicBreak: thematicBreak$1
};
const join$1 = [joinDefaults];
function joinDefaults(left, right, parent, state) {
  if (right.type === "code" && formatCodeAsIndented(right, state) && (left.type === "list" || left.type === right.type && formatCodeAsIndented(left, state))) {
    return false;
  }
  if ("spread" in parent && typeof parent.spread === "boolean") {
    if (left.type === "paragraph" && // Two paragraphs.
    (left.type === right.type || right.type === "definition" || // Paragraph followed by a setext heading.
    right.type === "heading" && formatHeadingAsSetext(right, state))) {
      return;
    }
    return parent.spread ? 1 : 0;
  }
}
const fullPhrasingSpans = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
const unsafe = [
  { character: "	", after: "[\\r\\n]", inConstruct: "phrasing" },
  { character: "	", before: "[\\r\\n]", inConstruct: "phrasing" },
  {
    character: "	",
    inConstruct: ["codeFencedLangGraveAccent", "codeFencedLangTilde"]
  },
  {
    character: "\r",
    inConstruct: [
      "codeFencedLangGraveAccent",
      "codeFencedLangTilde",
      "codeFencedMetaGraveAccent",
      "codeFencedMetaTilde",
      "destinationLiteral",
      "headingAtx"
    ]
  },
  {
    character: "\n",
    inConstruct: [
      "codeFencedLangGraveAccent",
      "codeFencedLangTilde",
      "codeFencedMetaGraveAccent",
      "codeFencedMetaTilde",
      "destinationLiteral",
      "headingAtx"
    ]
  },
  { character: " ", after: "[\\r\\n]", inConstruct: "phrasing" },
  { character: " ", before: "[\\r\\n]", inConstruct: "phrasing" },
  {
    character: " ",
    inConstruct: ["codeFencedLangGraveAccent", "codeFencedLangTilde"]
  },
  // An exclamation mark can start an image, if it is followed by a link or
  // a link reference.
  {
    character: "!",
    after: "\\[",
    inConstruct: "phrasing",
    notInConstruct: fullPhrasingSpans
  },
  // A quote can break out of a title.
  { character: '"', inConstruct: "titleQuote" },
  // A number sign could start an ATX heading if it starts a line.
  { atBreak: true, character: "#" },
  { character: "#", inConstruct: "headingAtx", after: "(?:[\r\n]|$)" },
  // Dollar sign and percentage are not used in markdown.
  // An ampersand could start a character reference.
  { character: "&", after: "[#A-Za-z]", inConstruct: "phrasing" },
  // An apostrophe can break out of a title.
  { character: "'", inConstruct: "titleApostrophe" },
  // A left paren could break out of a destination raw.
  { character: "(", inConstruct: "destinationRaw" },
  // A left paren followed by `]` could make something into a link or image.
  {
    before: "\\]",
    character: "(",
    inConstruct: "phrasing",
    notInConstruct: fullPhrasingSpans
  },
  // A right paren could start a list item or break out of a destination
  // raw.
  { atBreak: true, before: "\\d+", character: ")" },
  { character: ")", inConstruct: "destinationRaw" },
  // An asterisk can start thematic breaks, list items, emphasis, strong.
  { atBreak: true, character: "*", after: "(?:[ 	\r\n*])" },
  { character: "*", inConstruct: "phrasing", notInConstruct: fullPhrasingSpans },
  // A plus sign could start a list item.
  { atBreak: true, character: "+", after: "(?:[ 	\r\n])" },
  // A dash can start thematic breaks, list items, and setext heading
  // underlines.
  { atBreak: true, character: "-", after: "(?:[ 	\r\n-])" },
  // A dot could start a list item.
  { atBreak: true, before: "\\d+", character: ".", after: "(?:[ 	\r\n]|$)" },
  // Slash, colon, and semicolon are not used in markdown for constructs.
  // A less than can start html (flow or text) or an autolink.
  // HTML could start with an exclamation mark (declaration, cdata, comment),
  // slash (closing tag), question mark (instruction), or a letter (tag).
  // An autolink also starts with a letter.
  // Finally, it could break out of a destination literal.
  { atBreak: true, character: "<", after: "[!/?A-Za-z]" },
  {
    character: "<",
    after: "[!/?A-Za-z]",
    inConstruct: "phrasing",
    notInConstruct: fullPhrasingSpans
  },
  { character: "<", inConstruct: "destinationLiteral" },
  // An equals to can start setext heading underlines.
  { atBreak: true, character: "=" },
  // A greater than can start block quotes and it can break out of a
  // destination literal.
  { atBreak: true, character: ">" },
  { character: ">", inConstruct: "destinationLiteral" },
  // Question mark and at sign are not used in markdown for constructs.
  // A left bracket can start definitions, references, labels,
  { atBreak: true, character: "[" },
  { character: "[", inConstruct: "phrasing", notInConstruct: fullPhrasingSpans },
  { character: "[", inConstruct: ["label", "reference"] },
  // A backslash can start an escape (when followed by punctuation) or a
  // hard break (when followed by an eol).
  // Note: typical escapes are handled in `safe`!
  { character: "\\", after: "[\\r\\n]", inConstruct: "phrasing" },
  // A right bracket can exit labels.
  { character: "]", inConstruct: ["label", "reference"] },
  // Caret is not used in markdown for constructs.
  // An underscore can start emphasis, strong, or a thematic break.
  { atBreak: true, character: "_" },
  { character: "_", inConstruct: "phrasing", notInConstruct: fullPhrasingSpans },
  // A grave accent can start code (fenced or text), or it can break out of
  // a grave accent code fence.
  { atBreak: true, character: "`" },
  {
    character: "`",
    inConstruct: ["codeFencedLangGraveAccent", "codeFencedMetaGraveAccent"]
  },
  { character: "`", inConstruct: "phrasing", notInConstruct: fullPhrasingSpans },
  // Left brace, vertical bar, right brace are not used in markdown for
  // constructs.
  // A tilde can start code (fenced).
  { atBreak: true, character: "~" }
];
function association(node2) {
  if (node2.label || !node2.identifier) {
    return node2.label || "";
  }
  return decodeString(node2.identifier);
}
function compilePattern(pattern) {
  if (!pattern._compiled) {
    const before = (pattern.atBreak ? "[\\r\\n][\\t ]*" : "") + (pattern.before ? "(?:" + pattern.before + ")" : "");
    pattern._compiled = new RegExp(
      (before ? "(" + before + ")" : "") + (/[|\\{}()[\]^$+*?.-]/.test(pattern.character) ? "\\" : "") + pattern.character + (pattern.after ? "(?:" + pattern.after + ")" : ""),
      "g"
    );
  }
  return pattern._compiled;
}
function containerPhrasing(parent, state, info) {
  const indexStack = state.indexStack;
  const children = parent.children || [];
  const results = [];
  let index2 = -1;
  let before = info.before;
  let encodeAfter;
  indexStack.push(-1);
  let tracker = state.createTracker(info);
  while (++index2 < children.length) {
    const child = children[index2];
    let after;
    indexStack[indexStack.length - 1] = index2;
    if (index2 + 1 < children.length) {
      let handle2 = state.handle.handlers[children[index2 + 1].type];
      if (handle2 && handle2.peek) handle2 = handle2.peek;
      after = handle2 ? handle2(children[index2 + 1], parent, state, {
        before: "",
        after: "",
        ...tracker.current()
      }).charAt(0) : "";
    } else {
      after = info.after;
    }
    if (results.length > 0 && (before === "\r" || before === "\n") && child.type === "html") {
      results[results.length - 1] = results[results.length - 1].replace(
        /(\r?\n|\r)$/,
        " "
      );
      before = " ";
      tracker = state.createTracker(info);
      tracker.move(results.join(""));
    }
    let value = state.handle(child, parent, state, {
      ...tracker.current(),
      after,
      before
    });
    if (encodeAfter && encodeAfter === value.slice(0, 1)) {
      value = encodeCharacterReference(encodeAfter.charCodeAt(0)) + value.slice(1);
    }
    const encodingInfo = state.attentionEncodeSurroundingInfo;
    state.attentionEncodeSurroundingInfo = void 0;
    encodeAfter = void 0;
    if (encodingInfo) {
      if (results.length > 0 && encodingInfo.before && before === results[results.length - 1].slice(-1)) {
        results[results.length - 1] = results[results.length - 1].slice(0, -1) + encodeCharacterReference(before.charCodeAt(0));
      }
      if (encodingInfo.after) encodeAfter = after;
    }
    tracker.move(value);
    results.push(value);
    before = value.slice(-1);
  }
  indexStack.pop();
  return results.join("");
}
function containerFlow(parent, state, info) {
  const indexStack = state.indexStack;
  const children = parent.children || [];
  const tracker = state.createTracker(info);
  const results = [];
  let index2 = -1;
  indexStack.push(-1);
  while (++index2 < children.length) {
    const child = children[index2];
    indexStack[indexStack.length - 1] = index2;
    results.push(
      tracker.move(
        state.handle(child, parent, state, {
          before: "\n",
          after: "\n",
          ...tracker.current()
        })
      )
    );
    if (child.type !== "list") {
      state.bulletLastUsed = void 0;
    }
    if (index2 < children.length - 1) {
      results.push(
        tracker.move(between(child, children[index2 + 1], parent, state))
      );
    }
  }
  indexStack.pop();
  return results.join("");
}
function between(left, right, parent, state) {
  let index2 = state.join.length;
  while (index2--) {
    const result = state.join[index2](left, right, parent, state);
    if (result === true || result === 1) {
      break;
    }
    if (typeof result === "number") {
      return "\n".repeat(1 + result);
    }
    if (result === false) {
      return "\n\n<!---->\n\n";
    }
  }
  return "\n\n";
}
const eol = /\r?\n|\r/g;
function indentLines(value, map2) {
  const result = [];
  let start = 0;
  let line = 0;
  let match;
  while (match = eol.exec(value)) {
    one2(value.slice(start, match.index));
    result.push(match[0]);
    start = match.index + match[0].length;
    line++;
  }
  one2(value.slice(start));
  return result.join("");
  function one2(value2) {
    result.push(map2(value2, line, !value2));
  }
}
function safe(state, input, config) {
  const value = (config.before || "") + (input || "") + (config.after || "");
  const positions = [];
  const result = [];
  const infos = {};
  let index2 = -1;
  while (++index2 < state.unsafe.length) {
    const pattern = state.unsafe[index2];
    if (!patternInScope(state.stack, pattern)) {
      continue;
    }
    const expression = state.compilePattern(pattern);
    let match;
    while (match = expression.exec(value)) {
      const before = "before" in pattern || Boolean(pattern.atBreak);
      const after = "after" in pattern;
      const position2 = match.index + (before ? match[1].length : 0);
      if (positions.includes(position2)) {
        if (infos[position2].before && !before) {
          infos[position2].before = false;
        }
        if (infos[position2].after && !after) {
          infos[position2].after = false;
        }
      } else {
        positions.push(position2);
        infos[position2] = { before, after };
      }
    }
  }
  positions.sort(numerical);
  let start = config.before ? config.before.length : 0;
  const end = value.length - (config.after ? config.after.length : 0);
  index2 = -1;
  while (++index2 < positions.length) {
    const position2 = positions[index2];
    if (position2 < start || position2 >= end) {
      continue;
    }
    if (position2 + 1 < end && positions[index2 + 1] === position2 + 1 && infos[position2].after && !infos[position2 + 1].before && !infos[position2 + 1].after || positions[index2 - 1] === position2 - 1 && infos[position2].before && !infos[position2 - 1].before && !infos[position2 - 1].after) {
      continue;
    }
    if (start !== position2) {
      result.push(escapeBackslashes(value.slice(start, position2), "\\"));
    }
    start = position2;
    if (/[!-/:-@[-`{-~]/.test(value.charAt(position2)) && (!config.encode || !config.encode.includes(value.charAt(position2)))) {
      result.push("\\");
    } else {
      result.push(encodeCharacterReference(value.charCodeAt(position2)));
      start++;
    }
  }
  result.push(escapeBackslashes(value.slice(start, end), config.after));
  return result.join("");
}
function numerical(a, b) {
  return a - b;
}
function escapeBackslashes(value, after) {
  const expression = /\\(?=[!-/:-@[-`{-~])/g;
  const positions = [];
  const results = [];
  const whole = value + after;
  let index2 = -1;
  let start = 0;
  let match;
  while (match = expression.exec(whole)) {
    positions.push(match.index);
  }
  while (++index2 < positions.length) {
    if (start !== positions[index2]) {
      results.push(value.slice(start, positions[index2]));
    }
    results.push("\\");
    start = positions[index2];
  }
  results.push(value.slice(start));
  return results.join("");
}
function track(config) {
  const options = config || {};
  const now = options.now || {};
  let lineShift = options.lineShift || 0;
  let line = now.line || 1;
  let column = now.column || 1;
  return { move, current, shift };
  function current() {
    return { now: { line, column }, lineShift };
  }
  function shift(value) {
    lineShift += value;
  }
  function move(input) {
    const value = input || "";
    const chunks = value.split(/\r?\n|\r/g);
    const tail = chunks[chunks.length - 1];
    line += chunks.length - 1;
    column = chunks.length === 1 ? column + tail.length : 1 + tail.length + lineShift;
    return value;
  }
}
function toMarkdown(tree, options) {
  const settings = options || {};
  const state = {
    associationId: association,
    containerPhrasing: containerPhrasingBound,
    containerFlow: containerFlowBound,
    createTracker: track,
    compilePattern,
    enter,
    // @ts-expect-error: GFM / frontmatter are typed in `mdast` but not defined
    // here.
    handlers: { ...handle },
    // @ts-expect-error: add `handle` in a second.
    handle: void 0,
    indentLines,
    indexStack: [],
    join: [...join$1],
    options: {},
    safe: safeBound,
    stack: [],
    unsafe: [...unsafe]
  };
  configure(state, settings);
  if (state.options.tightDefinitions) {
    state.join.push(joinDefinition);
  }
  state.handle = zwitch("type", {
    invalid,
    unknown: unknown$1,
    handlers: state.handlers
  });
  let result = state.handle(tree, void 0, state, {
    before: "\n",
    after: "\n",
    now: { line: 1, column: 1 },
    lineShift: 0
  });
  if (result && result.charCodeAt(result.length - 1) !== 10 && result.charCodeAt(result.length - 1) !== 13) {
    result += "\n";
  }
  return result;
  function enter(name2) {
    state.stack.push(name2);
    return exit2;
    function exit2() {
      state.stack.pop();
    }
  }
}
function invalid(value) {
  throw new Error("Cannot handle value `" + value + "`, expected node");
}
function unknown$1(value) {
  const node2 = (
    /** @type {Nodes} */
    value
  );
  throw new Error("Cannot handle unknown node `" + node2.type + "`");
}
function joinDefinition(left, right) {
  if (left.type === "definition" && left.type === right.type) {
    return 0;
  }
}
function containerPhrasingBound(parent, info) {
  return containerPhrasing(parent, this, info);
}
function containerFlowBound(parent, info) {
  return containerFlow(parent, this, info);
}
function safeBound(value, config) {
  return safe(this, value, config);
}
function remarkStringify(options) {
  const self2 = this;
  self2.compiler = compiler2;
  function compiler2(tree) {
    return toMarkdown(tree, {
      ...self2.data("settings"),
      ...options,
      // Note: this option is not in the readme.
      // The goal is for it to be set by plugins on `data` instead of being
      // passed by users.
      extensions: self2.data("toMarkdownExtensions") || []
    });
  }
}
function bail(error) {
  if (error) {
    throw error;
  }
}
var extend$1;
var hasRequiredExtend;
function requireExtend() {
  if (hasRequiredExtend) return extend$1;
  hasRequiredExtend = 1;
  var hasOwn = Object.prototype.hasOwnProperty;
  var toStr = Object.prototype.toString;
  var defineProperty = Object.defineProperty;
  var gOPD = Object.getOwnPropertyDescriptor;
  var isArray = function isArray2(arr) {
    if (typeof Array.isArray === "function") {
      return Array.isArray(arr);
    }
    return toStr.call(arr) === "[object Array]";
  };
  var isPlainObject2 = function isPlainObject3(obj) {
    if (!obj || toStr.call(obj) !== "[object Object]") {
      return false;
    }
    var hasOwnConstructor = hasOwn.call(obj, "constructor");
    var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, "isPrototypeOf");
    if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
      return false;
    }
    var key;
    for (key in obj) {
    }
    return typeof key === "undefined" || hasOwn.call(obj, key);
  };
  var setProperty = function setProperty2(target, options) {
    if (defineProperty && options.name === "__proto__") {
      defineProperty(target, options.name, {
        enumerable: true,
        configurable: true,
        value: options.newValue,
        writable: true
      });
    } else {
      target[options.name] = options.newValue;
    }
  };
  var getProperty = function getProperty2(obj, name2) {
    if (name2 === "__proto__") {
      if (!hasOwn.call(obj, name2)) {
        return void 0;
      } else if (gOPD) {
        return gOPD(obj, name2).value;
      }
    }
    return obj[name2];
  };
  extend$1 = function extend2() {
    var options, name2, src, copy, copyIsArray, clone;
    var target = arguments[0];
    var i = 1;
    var length = arguments.length;
    var deep = false;
    if (typeof target === "boolean") {
      deep = target;
      target = arguments[1] || {};
      i = 2;
    }
    if (target == null || typeof target !== "object" && typeof target !== "function") {
      target = {};
    }
    for (; i < length; ++i) {
      options = arguments[i];
      if (options != null) {
        for (name2 in options) {
          src = getProperty(target, name2);
          copy = getProperty(options, name2);
          if (target !== copy) {
            if (deep && copy && (isPlainObject2(copy) || (copyIsArray = isArray(copy)))) {
              if (copyIsArray) {
                copyIsArray = false;
                clone = src && isArray(src) ? src : [];
              } else {
                clone = src && isPlainObject2(src) ? src : {};
              }
              setProperty(target, { name: name2, newValue: extend2(deep, clone, copy) });
            } else if (typeof copy !== "undefined") {
              setProperty(target, { name: name2, newValue: copy });
            }
          }
        }
      }
    }
    return target;
  };
  return extend$1;
}
var extendExports = requireExtend();
const extend = /* @__PURE__ */ getDefaultExportFromCjs(extendExports);
function ok() {
}
function isPlainObject(value) {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in value) && !(Symbol.iterator in value);
}
function trough() {
  const fns = [];
  const pipeline = { run, use };
  return pipeline;
  function run(...values) {
    let middlewareIndex = -1;
    const callback = values.pop();
    if (typeof callback !== "function") {
      throw new TypeError("Expected function as last argument, not " + callback);
    }
    next2(null, ...values);
    function next2(error, ...output) {
      const fn = fns[++middlewareIndex];
      let index2 = -1;
      if (error) {
        callback(error);
        return;
      }
      while (++index2 < values.length) {
        if (output[index2] === null || output[index2] === void 0) {
          output[index2] = values[index2];
        }
      }
      values = output;
      if (fn) {
        wrap$1(fn, next2)(...output);
      } else {
        callback(null, ...output);
      }
    }
  }
  function use(middelware) {
    if (typeof middelware !== "function") {
      throw new TypeError(
        "Expected `middelware` to be a function, not " + middelware
      );
    }
    fns.push(middelware);
    return pipeline;
  }
}
function wrap$1(middleware, callback) {
  let called;
  return wrapped;
  function wrapped(...parameters) {
    const fnExpectsCallback = middleware.length > parameters.length;
    let result;
    if (fnExpectsCallback) {
      parameters.push(done);
    }
    try {
      result = middleware.apply(this, parameters);
    } catch (error) {
      const exception = (
        /** @type {Error} */
        error
      );
      if (fnExpectsCallback && called) {
        throw exception;
      }
      return done(exception);
    }
    if (!fnExpectsCallback) {
      if (result && result.then && typeof result.then === "function") {
        result.then(then, done);
      } else if (result instanceof Error) {
        done(result);
      } else {
        then(result);
      }
    }
  }
  function done(error, ...output) {
    if (!called) {
      called = true;
      callback(error, ...output);
    }
  }
  function then(value) {
    done(null, value);
  }
}
class VFileMessage extends Error {
  /**
   * Create a message for `reason`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {Options | null | undefined} [options]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | Options | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns
   *   Instance of `VFileMessage`.
   */
  // eslint-disable-next-line complexity
  constructor(causeOrReason, optionsOrParentOrPlace, origin) {
    super();
    if (typeof optionsOrParentOrPlace === "string") {
      origin = optionsOrParentOrPlace;
      optionsOrParentOrPlace = void 0;
    }
    let reason = "";
    let options = {};
    let legacyCause = false;
    if (optionsOrParentOrPlace) {
      if ("line" in optionsOrParentOrPlace && "column" in optionsOrParentOrPlace) {
        options = { place: optionsOrParentOrPlace };
      } else if ("start" in optionsOrParentOrPlace && "end" in optionsOrParentOrPlace) {
        options = { place: optionsOrParentOrPlace };
      } else if ("type" in optionsOrParentOrPlace) {
        options = {
          ancestors: [optionsOrParentOrPlace],
          place: optionsOrParentOrPlace.position
        };
      } else {
        options = { ...optionsOrParentOrPlace };
      }
    }
    if (typeof causeOrReason === "string") {
      reason = causeOrReason;
    } else if (!options.cause && causeOrReason) {
      legacyCause = true;
      reason = causeOrReason.message;
      options.cause = causeOrReason;
    }
    if (!options.ruleId && !options.source && typeof origin === "string") {
      const index2 = origin.indexOf(":");
      if (index2 === -1) {
        options.ruleId = origin;
      } else {
        options.source = origin.slice(0, index2);
        options.ruleId = origin.slice(index2 + 1);
      }
    }
    if (!options.place && options.ancestors && options.ancestors) {
      const parent = options.ancestors[options.ancestors.length - 1];
      if (parent) {
        options.place = parent.position;
      }
    }
    const start = options.place && "start" in options.place ? options.place.start : options.place;
    this.ancestors = options.ancestors || void 0;
    this.cause = options.cause || void 0;
    this.column = start ? start.column : void 0;
    this.fatal = void 0;
    this.file = "";
    this.message = reason;
    this.line = start ? start.line : void 0;
    this.name = stringifyPosition(options.place) || "1:1";
    this.place = options.place || void 0;
    this.reason = this.message;
    this.ruleId = options.ruleId || void 0;
    this.source = options.source || void 0;
    this.stack = legacyCause && options.cause && typeof options.cause.stack === "string" ? options.cause.stack : "";
    this.actual = void 0;
    this.expected = void 0;
    this.note = void 0;
    this.url = void 0;
  }
}
VFileMessage.prototype.file = "";
VFileMessage.prototype.name = "";
VFileMessage.prototype.reason = "";
VFileMessage.prototype.message = "";
VFileMessage.prototype.stack = "";
VFileMessage.prototype.column = void 0;
VFileMessage.prototype.line = void 0;
VFileMessage.prototype.ancestors = void 0;
VFileMessage.prototype.cause = void 0;
VFileMessage.prototype.fatal = void 0;
VFileMessage.prototype.place = void 0;
VFileMessage.prototype.ruleId = void 0;
VFileMessage.prototype.source = void 0;
const minpath = { basename, dirname, extname, join, sep: "/" };
function basename(path, extname2) {
  if (extname2 !== void 0 && typeof extname2 !== "string") {
    throw new TypeError('"ext" argument must be a string');
  }
  assertPath$1(path);
  let start = 0;
  let end = -1;
  let index2 = path.length;
  let seenNonSlash;
  if (extname2 === void 0 || extname2.length === 0 || extname2.length > path.length) {
    while (index2--) {
      if (path.codePointAt(index2) === 47) {
        if (seenNonSlash) {
          start = index2 + 1;
          break;
        }
      } else if (end < 0) {
        seenNonSlash = true;
        end = index2 + 1;
      }
    }
    return end < 0 ? "" : path.slice(start, end);
  }
  if (extname2 === path) {
    return "";
  }
  let firstNonSlashEnd = -1;
  let extnameIndex = extname2.length - 1;
  while (index2--) {
    if (path.codePointAt(index2) === 47) {
      if (seenNonSlash) {
        start = index2 + 1;
        break;
      }
    } else {
      if (firstNonSlashEnd < 0) {
        seenNonSlash = true;
        firstNonSlashEnd = index2 + 1;
      }
      if (extnameIndex > -1) {
        if (path.codePointAt(index2) === extname2.codePointAt(extnameIndex--)) {
          if (extnameIndex < 0) {
            end = index2;
          }
        } else {
          extnameIndex = -1;
          end = firstNonSlashEnd;
        }
      }
    }
  }
  if (start === end) {
    end = firstNonSlashEnd;
  } else if (end < 0) {
    end = path.length;
  }
  return path.slice(start, end);
}
function dirname(path) {
  assertPath$1(path);
  if (path.length === 0) {
    return ".";
  }
  let end = -1;
  let index2 = path.length;
  let unmatchedSlash;
  while (--index2) {
    if (path.codePointAt(index2) === 47) {
      if (unmatchedSlash) {
        end = index2;
        break;
      }
    } else if (!unmatchedSlash) {
      unmatchedSlash = true;
    }
  }
  return end < 0 ? path.codePointAt(0) === 47 ? "/" : "." : end === 1 && path.codePointAt(0) === 47 ? "//" : path.slice(0, end);
}
function extname(path) {
  assertPath$1(path);
  let index2 = path.length;
  let end = -1;
  let startPart = 0;
  let startDot = -1;
  let preDotState = 0;
  let unmatchedSlash;
  while (index2--) {
    const code2 = path.codePointAt(index2);
    if (code2 === 47) {
      if (unmatchedSlash) {
        startPart = index2 + 1;
        break;
      }
      continue;
    }
    if (end < 0) {
      unmatchedSlash = true;
      end = index2 + 1;
    }
    if (code2 === 46) {
      if (startDot < 0) {
        startDot = index2;
      } else if (preDotState !== 1) {
        preDotState = 1;
      }
    } else if (startDot > -1) {
      preDotState = -1;
    }
  }
  if (startDot < 0 || end < 0 || // We saw a non-dot character immediately before the dot.
  preDotState === 0 || // The (right-most) trimmed path component is exactly `..`.
  preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return "";
  }
  return path.slice(startDot, end);
}
function join(...segments) {
  let index2 = -1;
  let joined;
  while (++index2 < segments.length) {
    assertPath$1(segments[index2]);
    if (segments[index2]) {
      joined = joined === void 0 ? segments[index2] : joined + "/" + segments[index2];
    }
  }
  return joined === void 0 ? "." : normalize$1(joined);
}
function normalize$1(path) {
  assertPath$1(path);
  const absolute = path.codePointAt(0) === 47;
  let value = normalizeString(path, !absolute);
  if (value.length === 0 && !absolute) {
    value = ".";
  }
  if (value.length > 0 && path.codePointAt(path.length - 1) === 47) {
    value += "/";
  }
  return absolute ? "/" + value : value;
}
function normalizeString(path, allowAboveRoot) {
  let result = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let index2 = -1;
  let code2;
  let lastSlashIndex;
  while (++index2 <= path.length) {
    if (index2 < path.length) {
      code2 = path.codePointAt(index2);
    } else if (code2 === 47) {
      break;
    } else {
      code2 = 47;
    }
    if (code2 === 47) {
      if (lastSlash === index2 - 1 || dots === 1) ;
      else if (lastSlash !== index2 - 1 && dots === 2) {
        if (result.length < 2 || lastSegmentLength !== 2 || result.codePointAt(result.length - 1) !== 46 || result.codePointAt(result.length - 2) !== 46) {
          if (result.length > 2) {
            lastSlashIndex = result.lastIndexOf("/");
            if (lastSlashIndex !== result.length - 1) {
              if (lastSlashIndex < 0) {
                result = "";
                lastSegmentLength = 0;
              } else {
                result = result.slice(0, lastSlashIndex);
                lastSegmentLength = result.length - 1 - result.lastIndexOf("/");
              }
              lastSlash = index2;
              dots = 0;
              continue;
            }
          } else if (result.length > 0) {
            result = "";
            lastSegmentLength = 0;
            lastSlash = index2;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          result = result.length > 0 ? result + "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (result.length > 0) {
          result += "/" + path.slice(lastSlash + 1, index2);
        } else {
          result = path.slice(lastSlash + 1, index2);
        }
        lastSegmentLength = index2 - lastSlash - 1;
      }
      lastSlash = index2;
      dots = 0;
    } else if (code2 === 46 && dots > -1) {
      dots++;
    } else {
      dots = -1;
    }
  }
  return result;
}
function assertPath$1(path) {
  if (typeof path !== "string") {
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(path)
    );
  }
}
const minproc = { cwd };
function cwd() {
  return "/";
}
function isUrl(fileUrlOrPath) {
  return Boolean(
    fileUrlOrPath !== null && typeof fileUrlOrPath === "object" && "href" in fileUrlOrPath && fileUrlOrPath.href && "protocol" in fileUrlOrPath && fileUrlOrPath.protocol && // @ts-expect-error: indexing is fine.
    fileUrlOrPath.auth === void 0
  );
}
function urlToPath(path) {
  if (typeof path === "string") {
    path = new URL(path);
  } else if (!isUrl(path)) {
    const error = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + path + "`"
    );
    error.code = "ERR_INVALID_ARG_TYPE";
    throw error;
  }
  if (path.protocol !== "file:") {
    const error = new TypeError("The URL must be of scheme file");
    error.code = "ERR_INVALID_URL_SCHEME";
    throw error;
  }
  return getPathFromURLPosix(path);
}
function getPathFromURLPosix(url) {
  if (url.hostname !== "") {
    const error = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    error.code = "ERR_INVALID_FILE_URL_HOST";
    throw error;
  }
  const pathname = url.pathname;
  let index2 = -1;
  while (++index2 < pathname.length) {
    if (pathname.codePointAt(index2) === 37 && pathname.codePointAt(index2 + 1) === 50) {
      const third = pathname.codePointAt(index2 + 2);
      if (third === 70 || third === 102) {
        const error = new TypeError(
          "File URL path must not include encoded / characters"
        );
        error.code = "ERR_INVALID_FILE_URL_PATH";
        throw error;
      }
    }
  }
  return decodeURIComponent(pathname);
}
const order = (
  /** @type {const} */
  [
    "history",
    "path",
    "basename",
    "stem",
    "extname",
    "dirname"
  ]
);
class VFile {
  /**
   * Create a new virtual file.
   *
   * `options` is treated as:
   *
   * *   `string` or `Uint8Array` — `{value: options}`
   * *   `URL` — `{path: options}`
   * *   `VFile` — shallow copies its data over to the new file
   * *   `object` — all fields are shallow copied over to the new file
   *
   * Path related fields are set in the following order (least specific to
   * most specific): `history`, `path`, `basename`, `stem`, `extname`,
   * `dirname`.
   *
   * You cannot set `dirname` or `extname` without setting either `history`,
   * `path`, `basename`, or `stem` too.
   *
   * @param {Compatible | null | undefined} [value]
   *   File value.
   * @returns
   *   New instance.
   */
  constructor(value) {
    let options;
    if (!value) {
      options = {};
    } else if (isUrl(value)) {
      options = { path: value };
    } else if (typeof value === "string" || isUint8Array$1(value)) {
      options = { value };
    } else {
      options = value;
    }
    this.cwd = "cwd" in options ? "" : minproc.cwd();
    this.data = {};
    this.history = [];
    this.messages = [];
    this.value;
    this.map;
    this.result;
    this.stored;
    let index2 = -1;
    while (++index2 < order.length) {
      const field2 = order[index2];
      if (field2 in options && options[field2] !== void 0 && options[field2] !== null) {
        this[field2] = field2 === "history" ? [...options[field2]] : options[field2];
      }
    }
    let field;
    for (field in options) {
      if (!order.includes(field)) {
        this[field] = options[field];
      }
    }
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path === "string" ? minpath.basename(this.path) : void 0;
  }
  /**
   * Set basename (including extname) (`'index.min.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} basename
   *   Basename.
   * @returns {undefined}
   *   Nothing.
   */
  set basename(basename2) {
    assertNonEmpty(basename2, "basename");
    assertPart(basename2, "basename");
    this.path = minpath.join(this.dirname || "", basename2);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path === "string" ? minpath.dirname(this.path) : void 0;
  }
  /**
   * Set the parent path (example: `'~'`).
   *
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} dirname
   *   Dirname.
   * @returns {undefined}
   *   Nothing.
   */
  set dirname(dirname2) {
    assertPath(this.basename, "dirname");
    this.path = minpath.join(dirname2 || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path === "string" ? minpath.extname(this.path) : void 0;
  }
  /**
   * Set the extname (including dot) (example: `'.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} extname
   *   Extname.
   * @returns {undefined}
   *   Nothing.
   */
  set extname(extname2) {
    assertPart(extname2, "extname");
    assertPath(this.dirname, "extname");
    if (extname2) {
      if (extname2.codePointAt(0) !== 46) {
        throw new Error("`extname` must start with `.`");
      }
      if (extname2.includes(".", 1)) {
        throw new Error("`extname` cannot contain multiple dots");
      }
    }
    this.path = minpath.join(this.dirname, this.stem + (extname2 || ""));
  }
  /**
   * Get the full path (example: `'~/index.min.js'`).
   *
   * @returns {string}
   *   Path.
   */
  get path() {
    return this.history[this.history.length - 1];
  }
  /**
   * Set the full path (example: `'~/index.min.js'`).
   *
   * Cannot be nullified.
   * You can set a file URL (a `URL` object with a `file:` protocol) which will
   * be turned into a path with `url.fileURLToPath`.
   *
   * @param {URL | string} path
   *   Path.
   * @returns {undefined}
   *   Nothing.
   */
  set path(path) {
    if (isUrl(path)) {
      path = urlToPath(path);
    }
    assertNonEmpty(path, "path");
    if (this.path !== path) {
      this.history.push(path);
    }
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path === "string" ? minpath.basename(this.path, this.extname) : void 0;
  }
  /**
   * Set the stem (basename w/o extname) (example: `'index.min'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} stem
   *   Stem.
   * @returns {undefined}
   *   Nothing.
   */
  set stem(stem) {
    assertNonEmpty(stem, "stem");
    assertPart(stem, "stem");
    this.path = minpath.join(this.dirname || "", stem + (this.extname || ""));
  }
  // Normal prototypal methods.
  /**
   * Create a fatal message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `true` (error; file not usable)
   * and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {never}
   *   Never.
   * @throws {VFileMessage}
   *   Message.
   */
  fail(causeOrReason, optionsOrParentOrPlace, origin) {
    const message = this.message(causeOrReason, optionsOrParentOrPlace, origin);
    message.fatal = true;
    throw message;
  }
  /**
   * Create an info message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `undefined` (info; change
   * likely not needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  info(causeOrReason, optionsOrParentOrPlace, origin) {
    const message = this.message(causeOrReason, optionsOrParentOrPlace, origin);
    message.fatal = void 0;
    return message;
  }
  /**
   * Create a message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `false` (warning; change may be
   * needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  message(causeOrReason, optionsOrParentOrPlace, origin) {
    const message = new VFileMessage(
      // @ts-expect-error: the overloads are fine.
      causeOrReason,
      optionsOrParentOrPlace,
      origin
    );
    if (this.path) {
      message.name = this.path + ":" + message.name;
      message.file = this.path;
    }
    message.fatal = false;
    this.messages.push(message);
    return message;
  }
  /**
   * Serialize the file.
   *
   * > **Note**: which encodings are supported depends on the engine.
   * > For info on Node.js, see:
   * > <https://nodejs.org/api/util.html#whatwg-supported-encodings>.
   *
   * @param {string | null | undefined} [encoding='utf8']
   *   Character encoding to understand `value` as when it’s a `Uint8Array`
   *   (default: `'utf-8'`).
   * @returns {string}
   *   Serialized file.
   */
  toString(encoding) {
    if (this.value === void 0) {
      return "";
    }
    if (typeof this.value === "string") {
      return this.value;
    }
    const decoder = new TextDecoder(encoding || void 0);
    return decoder.decode(this.value);
  }
}
function assertPart(part, name2) {
  if (part && part.includes(minpath.sep)) {
    throw new Error(
      "`" + name2 + "` cannot be a path: did not expect `" + minpath.sep + "`"
    );
  }
}
function assertNonEmpty(part, name2) {
  if (!part) {
    throw new Error("`" + name2 + "` cannot be empty");
  }
}
function assertPath(path, name2) {
  if (!path) {
    throw new Error("Setting `" + name2 + "` requires `path` to be set too");
  }
}
function isUint8Array$1(value) {
  return Boolean(
    value && typeof value === "object" && "byteLength" in value && "byteOffset" in value
  );
}
const CallableInstance = (
  /**
   * @type {new <Parameters extends Array<unknown>, Result>(property: string | symbol) => (...parameters: Parameters) => Result}
   */
  /** @type {unknown} */
  /**
   * @this {Function}
   * @param {string | symbol} property
   * @returns {(...parameters: Array<unknown>) => unknown}
   */
  (function(property) {
    const self2 = this;
    const constr = self2.constructor;
    const proto2 = (
      /** @type {Record<string | symbol, Function>} */
      // Prototypes do exist.
      // type-coverage:ignore-next-line
      constr.prototype
    );
    const value = proto2[property];
    const apply = function() {
      return value.apply(apply, arguments);
    };
    Object.setPrototypeOf(apply, proto2);
    return apply;
  })
);
const own$4 = {}.hasOwnProperty;
class Processor extends CallableInstance {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy");
    this.Compiler = void 0;
    this.Parser = void 0;
    this.attachers = [];
    this.compiler = void 0;
    this.freezeIndex = -1;
    this.frozen = void 0;
    this.namespace = {};
    this.parser = void 0;
    this.transformers = trough();
  }
  /**
   * Copy a processor.
   *
   * @deprecated
   *   This is a private internal method and should not be used.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   New *unfrozen* processor ({@linkcode Processor}) that is
   *   configured to work the same as its ancestor.
   *   When the descendant processor is configured in the future it does not
   *   affect the ancestral processor.
   */
  copy() {
    const destination = (
      /** @type {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>} */
      new Processor()
    );
    let index2 = -1;
    while (++index2 < this.attachers.length) {
      const attacher = this.attachers[index2];
      destination.use(...attacher);
    }
    destination.data(extend(true, {}, this.namespace));
    return destination;
  }
  /**
   * Configure the processor with info available to all plugins.
   * Information is stored in an object.
   *
   * Typically, options can be given to a specific plugin, but sometimes it
   * makes sense to have information shared with several plugins.
   * For example, a list of HTML elements that are self-closing, which is
   * needed during all phases.
   *
   * > **Note**: setting information cannot occur on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * > **Note**: to register custom data in TypeScript, augment the
   * > {@linkcode Data} interface.
   *
   * @example
   *   This example show how to get and set info:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   const processor = unified().data('alpha', 'bravo')
   *
   *   processor.data('alpha') // => 'bravo'
   *
   *   processor.data() // => {alpha: 'bravo'}
   *
   *   processor.data({charlie: 'delta'})
   *
   *   processor.data() // => {charlie: 'delta'}
   *   ```
   *
   * @template {keyof Data} Key
   *
   * @overload
   * @returns {Data}
   *
   * @overload
   * @param {Data} dataset
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Key} key
   * @returns {Data[Key]}
   *
   * @overload
   * @param {Key} key
   * @param {Data[Key]} value
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @param {Data | Key} [key]
   *   Key to get or set, or entire dataset to set, or nothing to get the
   *   entire dataset (optional).
   * @param {Data[Key]} [value]
   *   Value to set (optional).
   * @returns {unknown}
   *   The current processor when setting, the value at `key` when getting, or
   *   the entire dataset when getting without key.
   */
  data(key, value) {
    if (typeof key === "string") {
      if (arguments.length === 2) {
        assertUnfrozen("data", this.frozen);
        this.namespace[key] = value;
        return this;
      }
      return own$4.call(this.namespace, key) && this.namespace[key] || void 0;
    }
    if (key) {
      assertUnfrozen("data", this.frozen);
      this.namespace = key;
      return this;
    }
    return this.namespace;
  }
  /**
   * Freeze a processor.
   *
   * Frozen processors are meant to be extended and not to be configured
   * directly.
   *
   * When a processor is frozen it cannot be unfrozen.
   * New processors working the same way can be created by calling the
   * processor.
   *
   * It’s possible to freeze processors explicitly by calling `.freeze()`.
   * Processors freeze automatically when `.parse()`, `.run()`, `.runSync()`,
   * `.stringify()`, `.process()`, or `.processSync()` are called.
   *
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   The current processor.
   */
  freeze() {
    if (this.frozen) {
      return this;
    }
    const self2 = (
      /** @type {Processor} */
      /** @type {unknown} */
      this
    );
    while (++this.freezeIndex < this.attachers.length) {
      const [attacher, ...options] = this.attachers[this.freezeIndex];
      if (options[0] === false) {
        continue;
      }
      if (options[0] === true) {
        options[0] = void 0;
      }
      const transformer = attacher.call(self2, ...options);
      if (typeof transformer === "function") {
        this.transformers.use(transformer);
      }
    }
    this.frozen = true;
    this.freezeIndex = Number.POSITIVE_INFINITY;
    return this;
  }
  /**
   * Parse text to a syntax tree.
   *
   * > **Note**: `parse` freezes the processor if not already *frozen*.
   *
   * > **Note**: `parse` performs the parse phase, not the run phase or other
   * > phases.
   *
   * @param {Compatible | undefined} [file]
   *   file to parse (optional); typically `string` or `VFile`; any value
   *   accepted as `x` in `new VFile(x)`.
   * @returns {ParseTree extends undefined ? Node : ParseTree}
   *   Syntax tree representing `file`.
   */
  parse(file) {
    this.freeze();
    const realFile = vfile(file);
    const parser = this.parser || this.Parser;
    assertParser("parse", parser);
    return parser(String(realFile), realFile);
  }
  /**
   * Process the given file as configured on the processor.
   *
   * > **Note**: `process` freezes the processor if not already *frozen*.
   *
   * > **Note**: `process` performs the parse, run, and stringify phases.
   *
   * @overload
   * @param {Compatible | undefined} file
   * @param {ProcessCallback<VFileWithOutput<CompileResult>>} done
   * @returns {undefined}
   *
   * @overload
   * @param {Compatible | undefined} [file]
   * @returns {Promise<VFileWithOutput<CompileResult>>}
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`]; any value accepted as
   *   `x` in `new VFile(x)`.
   * @param {ProcessCallback<VFileWithOutput<CompileResult>> | undefined} [done]
   *   Callback (optional).
   * @returns {Promise<VFile> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise a promise, rejected with a fatal error or resolved with the
   *   processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  process(file, done) {
    const self2 = this;
    this.freeze();
    assertParser("process", this.parser || this.Parser);
    assertCompiler("process", this.compiler || this.Compiler);
    return done ? executor(void 0, done) : new Promise(executor);
    function executor(resolve, reject) {
      const realFile = vfile(file);
      const parseTree = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        self2.parse(realFile)
      );
      self2.run(parseTree, realFile, function(error, tree, file2) {
        if (error || !tree || !file2) {
          return realDone(error);
        }
        const compileTree = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          tree
        );
        const compileResult = self2.stringify(compileTree, file2);
        if (looksLikeAValue(compileResult)) {
          file2.value = compileResult;
        } else {
          file2.result = compileResult;
        }
        realDone(
          error,
          /** @type {VFileWithOutput<CompileResult>} */
          file2
        );
      });
      function realDone(error, file2) {
        if (error || !file2) {
          reject(error);
        } else if (resolve) {
          resolve(file2);
        } else {
          done(void 0, file2);
        }
      }
    }
  }
  /**
   * Process the given file as configured on the processor.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `processSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `processSync` performs the parse, run, and stringify phases.
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`; any value accepted as
   *   `x` in `new VFile(x)`.
   * @returns {VFileWithOutput<CompileResult>}
   *   The processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  processSync(file) {
    let complete = false;
    let result;
    this.freeze();
    assertParser("processSync", this.parser || this.Parser);
    assertCompiler("processSync", this.compiler || this.Compiler);
    this.process(file, realDone);
    assertDone("processSync", "process", complete);
    return result;
    function realDone(error, file2) {
      complete = true;
      bail(error);
      result = file2;
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * > **Note**: `run` freezes the processor if not already *frozen*.
   *
   * > **Note**: `run` performs the run phase, not other phases.
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} file
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} [file]
   * @returns {Promise<TailTree extends undefined ? Node : TailTree>}
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {(
   *   RunCallback<TailTree extends undefined ? Node : TailTree> |
   *   Compatible
   * )} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} [done]
   *   Callback (optional).
   * @returns {Promise<TailTree extends undefined ? Node : TailTree> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise, a promise rejected with a fatal error or resolved with the
   *   transformed tree.
   */
  run(tree, file, done) {
    assertNode(tree);
    this.freeze();
    const transformers = this.transformers;
    if (!done && typeof file === "function") {
      done = file;
      file = void 0;
    }
    return done ? executor(void 0, done) : new Promise(executor);
    function executor(resolve, reject) {
      const realFile = vfile(file);
      transformers.run(tree, realFile, realDone);
      function realDone(error, outputTree, file2) {
        const resultingTree = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          outputTree || tree
        );
        if (error) {
          reject(error);
        } else if (resolve) {
          resolve(resultingTree);
        } else {
          done(void 0, resultingTree, file2);
        }
      }
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `runSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `runSync` performs the run phase, not other phases.
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {TailTree extends undefined ? Node : TailTree}
   *   Transformed tree.
   */
  runSync(tree, file) {
    let complete = false;
    let result;
    this.run(tree, file, realDone);
    assertDone("runSync", "run", complete);
    return result;
    function realDone(error, tree2) {
      bail(error);
      result = tree2;
      complete = true;
    }
  }
  /**
   * Compile a syntax tree.
   *
   * > **Note**: `stringify` freezes the processor if not already *frozen*.
   *
   * > **Note**: `stringify` performs the stringify phase, not the run phase
   * > or other phases.
   *
   * @param {CompileTree extends undefined ? Node : CompileTree} tree
   *   Tree to compile.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {CompileResult extends undefined ? Value : CompileResult}
   *   Textual representation of the tree (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most compilers
   *   > return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  stringify(tree, file) {
    this.freeze();
    const realFile = vfile(file);
    const compiler2 = this.compiler || this.Compiler;
    assertCompiler("stringify", compiler2);
    assertNode(tree);
    return compiler2(tree, realFile);
  }
  /**
   * Configure the processor to use a plugin, a list of usable values, or a
   * preset.
   *
   * If the processor is already using a plugin, the previous plugin
   * configuration is changed based on the options that are passed in.
   * In other words, the plugin is not added a second time.
   *
   * > **Note**: `use` cannot be called on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * @example
   *   There are many ways to pass plugins to `.use()`.
   *   This example gives an overview:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   unified()
   *     // Plugin with options:
   *     .use(pluginA, {x: true, y: true})
   *     // Passing the same plugin again merges configuration (to `{x: true, y: false, z: true}`):
   *     .use(pluginA, {y: false, z: true})
   *     // Plugins:
   *     .use([pluginB, pluginC])
   *     // Two plugins, the second with options:
   *     .use([pluginD, [pluginE, {}]])
   *     // Preset with plugins and settings:
   *     .use({plugins: [pluginF, [pluginG, {}]], settings: {position: false}})
   *     // Settings only:
   *     .use({settings: {position: false}})
   *   ```
   *
   * @template {Array<unknown>} [Parameters=[]]
   * @template {Node | string | undefined} [Input=undefined]
   * @template [Output=Input]
   *
   * @overload
   * @param {Preset | null | undefined} [preset]
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {PluggableList} list
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Plugin<Parameters, Input, Output>} plugin
   * @param {...(Parameters | [boolean])} parameters
   * @returns {UsePlugin<ParseTree, HeadTree, TailTree, CompileTree, CompileResult, Input, Output>}
   *
   * @param {PluggableList | Plugin | Preset | null | undefined} value
   *   Usable value.
   * @param {...unknown} parameters
   *   Parameters, when a plugin is given as a usable value.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   Current processor.
   */
  use(value, ...parameters) {
    const attachers = this.attachers;
    const namespace = this.namespace;
    assertUnfrozen("use", this.frozen);
    if (value === null || value === void 0) ;
    else if (typeof value === "function") {
      addPlugin(value, parameters);
    } else if (typeof value === "object") {
      if (Array.isArray(value)) {
        addList(value);
      } else {
        addPreset(value);
      }
    } else {
      throw new TypeError("Expected usable value, not `" + value + "`");
    }
    return this;
    function add(value2) {
      if (typeof value2 === "function") {
        addPlugin(value2, []);
      } else if (typeof value2 === "object") {
        if (Array.isArray(value2)) {
          const [plugin, ...parameters2] = (
            /** @type {PluginTuple<Array<unknown>>} */
            value2
          );
          addPlugin(plugin, parameters2);
        } else {
          addPreset(value2);
        }
      } else {
        throw new TypeError("Expected usable value, not `" + value2 + "`");
      }
    }
    function addPreset(result) {
      if (!("plugins" in result) && !("settings" in result)) {
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      }
      addList(result.plugins);
      if (result.settings) {
        namespace.settings = extend(true, namespace.settings, result.settings);
      }
    }
    function addList(plugins) {
      let index2 = -1;
      if (plugins === null || plugins === void 0) ;
      else if (Array.isArray(plugins)) {
        while (++index2 < plugins.length) {
          const thing = plugins[index2];
          add(thing);
        }
      } else {
        throw new TypeError("Expected a list of plugins, not `" + plugins + "`");
      }
    }
    function addPlugin(plugin, parameters2) {
      let index2 = -1;
      let entryIndex = -1;
      while (++index2 < attachers.length) {
        if (attachers[index2][0] === plugin) {
          entryIndex = index2;
          break;
        }
      }
      if (entryIndex === -1) {
        attachers.push([plugin, ...parameters2]);
      } else if (parameters2.length > 0) {
        let [primary, ...rest] = parameters2;
        const currentPrimary = attachers[entryIndex][1];
        if (isPlainObject(currentPrimary) && isPlainObject(primary)) {
          primary = extend(true, currentPrimary, primary);
        }
        attachers[entryIndex] = [plugin, primary, ...rest];
      }
    }
  }
}
const unified = new Processor().freeze();
function assertParser(name2, value) {
  if (typeof value !== "function") {
    throw new TypeError("Cannot `" + name2 + "` without `parser`");
  }
}
function assertCompiler(name2, value) {
  if (typeof value !== "function") {
    throw new TypeError("Cannot `" + name2 + "` without `compiler`");
  }
}
function assertUnfrozen(name2, frozen) {
  if (frozen) {
    throw new Error(
      "Cannot call `" + name2 + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
  }
}
function assertNode(node2) {
  if (!isPlainObject(node2) || typeof node2.type !== "string") {
    throw new TypeError("Expected node, got `" + node2 + "`");
  }
}
function assertDone(name2, asyncName, complete) {
  if (!complete) {
    throw new Error(
      "`" + name2 + "` finished async. Use `" + asyncName + "` instead"
    );
  }
}
function vfile(value) {
  return looksLikeAVFile(value) ? value : new VFile(value);
}
function looksLikeAVFile(value) {
  return Boolean(
    value && typeof value === "object" && "message" in value && "messages" in value
  );
}
function looksLikeAValue(value) {
  return typeof value === "string" || isUint8Array(value);
}
function isUint8Array(value) {
  return Boolean(
    value && typeof value === "object" && "byteLength" in value && "byteOffset" in value
  );
}
const remark = unified().use(remarkParse).use(remarkStringify).freeze();
function blockquote(state, node2) {
  const result = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: state.wrap(state.all(node2), true)
  };
  state.patch(node2, result);
  return state.applyData(node2, result);
}
function hardBreak(state, node2) {
  const result = { type: "element", tagName: "br", properties: {}, children: [] };
  state.patch(node2, result);
  return [state.applyData(node2, result), { type: "text", value: "\n" }];
}
function code(state, node2) {
  const value = node2.value ? node2.value + "\n" : "";
  const properties = {};
  const language = node2.lang ? node2.lang.split(/\s+/) : [];
  if (language.length > 0) {
    properties.className = ["language-" + language[0]];
  }
  let result = {
    type: "element",
    tagName: "code",
    properties,
    children: [{ type: "text", value }]
  };
  if (node2.meta) {
    result.data = { meta: node2.meta };
  }
  state.patch(node2, result);
  result = state.applyData(node2, result);
  result = { type: "element", tagName: "pre", properties: {}, children: [result] };
  state.patch(node2, result);
  return result;
}
function strikethrough(state, node2) {
  const result = {
    type: "element",
    tagName: "del",
    properties: {},
    children: state.all(node2)
  };
  state.patch(node2, result);
  return state.applyData(node2, result);
}
function emphasis(state, node2) {
  const result = {
    type: "element",
    tagName: "em",
    properties: {},
    children: state.all(node2)
  };
  state.patch(node2, result);
  return state.applyData(node2, result);
}
function footnoteReference(state, node2) {
  const clobberPrefix = typeof state.options.clobberPrefix === "string" ? state.options.clobberPrefix : "user-content-";
  const id = String(node2.identifier).toUpperCase();
  const safeId = normalizeUri(id.toLowerCase());
  const index2 = state.footnoteOrder.indexOf(id);
  let counter;
  let reuseCounter = state.footnoteCounts.get(id);
  if (reuseCounter === void 0) {
    reuseCounter = 0;
    state.footnoteOrder.push(id);
    counter = state.footnoteOrder.length;
  } else {
    counter = index2 + 1;
  }
  reuseCounter += 1;
  state.footnoteCounts.set(id, reuseCounter);
  const link2 = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + clobberPrefix + "fn-" + safeId,
      id: clobberPrefix + "fnref-" + safeId + (reuseCounter > 1 ? "-" + reuseCounter : ""),
      dataFootnoteRef: true,
      ariaDescribedBy: ["footnote-label"]
    },
    children: [{ type: "text", value: String(counter) }]
  };
  state.patch(node2, link2);
  const sup = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [link2]
  };
  state.patch(node2, sup);
  return state.applyData(node2, sup);
}
function heading(state, node2) {
  const result = {
    type: "element",
    tagName: "h" + node2.depth,
    properties: {},
    children: state.all(node2)
  };
  state.patch(node2, result);
  return state.applyData(node2, result);
}
function html$2(state, node2) {
  if (state.options.allowDangerousHtml) {
    const result = { type: "raw", value: node2.value };
    state.patch(node2, result);
    return state.applyData(node2, result);
  }
  return void 0;
}
function revert(state, node2) {
  const subtype = node2.referenceType;
  let suffix = "]";
  if (subtype === "collapsed") {
    suffix += "[]";
  } else if (subtype === "full") {
    suffix += "[" + (node2.label || node2.identifier) + "]";
  }
  if (node2.type === "imageReference") {
    return [{ type: "text", value: "![" + node2.alt + suffix }];
  }
  const contents = state.all(node2);
  const head = contents[0];
  if (head && head.type === "text") {
    head.value = "[" + head.value;
  } else {
    contents.unshift({ type: "text", value: "[" });
  }
  const tail = contents[contents.length - 1];
  if (tail && tail.type === "text") {
    tail.value += suffix;
  } else {
    contents.push({ type: "text", value: suffix });
  }
  return contents;
}
function imageReference(state, node2) {
  const id = String(node2.identifier).toUpperCase();
  const definition2 = state.definitionById.get(id);
  if (!definition2) {
    return revert(state, node2);
  }
  const properties = { src: normalizeUri(definition2.url || ""), alt: node2.alt };
  if (definition2.title !== null && definition2.title !== void 0) {
    properties.title = definition2.title;
  }
  const result = { type: "element", tagName: "img", properties, children: [] };
  state.patch(node2, result);
  return state.applyData(node2, result);
}
function image(state, node2) {
  const properties = { src: normalizeUri(node2.url) };
  if (node2.alt !== null && node2.alt !== void 0) {
    properties.alt = node2.alt;
  }
  if (node2.title !== null && node2.title !== void 0) {
    properties.title = node2.title;
  }
  const result = { type: "element", tagName: "img", properties, children: [] };
  state.patch(node2, result);
  return state.applyData(node2, result);
}
function inlineCode(state, node2) {
  const text2 = { type: "text", value: node2.value.replace(/\r?\n|\r/g, " ") };
  state.patch(node2, text2);
  const result = {
    type: "element",
    tagName: "code",
    properties: {},
    children: [text2]
  };
  state.patch(node2, result);
  return state.applyData(node2, result);
}
function linkReference(state, node2) {
  const id = String(node2.identifier).toUpperCase();
  const definition2 = state.definitionById.get(id);
  if (!definition2) {
    return revert(state, node2);
  }
  const properties = { href: normalizeUri(definition2.url || "") };
  if (definition2.title !== null && definition2.title !== void 0) {
    properties.title = definition2.title;
  }
  const result = {
    type: "element",
    tagName: "a",
    properties,
    children: state.all(node2)
  };
  state.patch(node2, result);
  return state.applyData(node2, result);
}
function link(state, node2) {
  const properties = { href: normalizeUri(node2.url) };
  if (node2.title !== null && node2.title !== void 0) {
    properties.title = node2.title;
  }
  const result = {
    type: "element",
    tagName: "a",
    properties,
    children: state.all(node2)
  };
  state.patch(node2, result);
  return state.applyData(node2, result);
}
function listItem(state, node2, parent) {
  const results = state.all(node2);
  const loose = parent ? listLoose(parent) : listItemLoose(node2);
  const properties = {};
  const children = [];
  if (typeof node2.checked === "boolean") {
    const head = results[0];
    let paragraph2;
    if (head && head.type === "element" && head.tagName === "p") {
      paragraph2 = head;
    } else {
      paragraph2 = { type: "element", tagName: "p", properties: {}, children: [] };
      results.unshift(paragraph2);
    }
    if (paragraph2.children.length > 0) {
      paragraph2.children.unshift({ type: "text", value: " " });
    }
    paragraph2.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: node2.checked, disabled: true },
      children: []
    });
    properties.className = ["task-list-item"];
  }
  let index2 = -1;
  while (++index2 < results.length) {
    const child = results[index2];
    if (loose || index2 !== 0 || child.type !== "element" || child.tagName !== "p") {
      children.push({ type: "text", value: "\n" });
    }
    if (child.type === "element" && child.tagName === "p" && !loose) {
      children.push(...child.children);
    } else {
      children.push(child);
    }
  }
  const tail = results[results.length - 1];
  if (tail && (loose || tail.type !== "element" || tail.tagName !== "p")) {
    children.push({ type: "text", value: "\n" });
  }
  const result = { type: "element", tagName: "li", properties, children };
  state.patch(node2, result);
  return state.applyData(node2, result);
}
function listLoose(node2) {
  let loose = false;
  if (node2.type === "list") {
    loose = node2.spread || false;
    const children = node2.children;
    let index2 = -1;
    while (!loose && ++index2 < children.length) {
      loose = listItemLoose(children[index2]);
    }
  }
  return loose;
}
function listItemLoose(node2) {
  const spread = node2.spread;
  return spread === null || spread === void 0 ? node2.children.length > 1 : spread;
}
function list(state, node2) {
  const properties = {};
  const results = state.all(node2);
  let index2 = -1;
  if (typeof node2.start === "number" && node2.start !== 1) {
    properties.start = node2.start;
  }
  while (++index2 < results.length) {
    const child = results[index2];
    if (child.type === "element" && child.tagName === "li" && child.properties && Array.isArray(child.properties.className) && child.properties.className.includes("task-list-item")) {
      properties.className = ["contains-task-list"];
      break;
    }
  }
  const result = {
    type: "element",
    tagName: node2.ordered ? "ol" : "ul",
    properties,
    children: state.wrap(results, true)
  };
  state.patch(node2, result);
  return state.applyData(node2, result);
}
function paragraph(state, node2) {
  const result = {
    type: "element",
    tagName: "p",
    properties: {},
    children: state.all(node2)
  };
  state.patch(node2, result);
  return state.applyData(node2, result);
}
function root$3(state, node2) {
  const result = { type: "root", children: state.wrap(state.all(node2)) };
  state.patch(node2, result);
  return state.applyData(node2, result);
}
function strong(state, node2) {
  const result = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: state.all(node2)
  };
  state.patch(node2, result);
  return state.applyData(node2, result);
}
const pointEnd = point$1("end");
const pointStart = point$1("start");
function point$1(type) {
  return point2;
  function point2(node2) {
    const point3 = node2 && node2.position && node2.position[type] || {};
    if (typeof point3.line === "number" && point3.line > 0 && typeof point3.column === "number" && point3.column > 0) {
      return {
        line: point3.line,
        column: point3.column,
        offset: typeof point3.offset === "number" && point3.offset > -1 ? point3.offset : void 0
      };
    }
  }
}
function position$1(node2) {
  const start = pointStart(node2);
  const end = pointEnd(node2);
  if (start && end) {
    return { start, end };
  }
}
function table(state, node2) {
  const rows = state.all(node2);
  const firstRow = rows.shift();
  const tableContent = [];
  if (firstRow) {
    const head = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: state.wrap([firstRow], true)
    };
    state.patch(node2.children[0], head);
    tableContent.push(head);
  }
  if (rows.length > 0) {
    const body = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: state.wrap(rows, true)
    };
    const start = pointStart(node2.children[1]);
    const end = pointEnd(node2.children[node2.children.length - 1]);
    if (start && end) body.position = { start, end };
    tableContent.push(body);
  }
  const result = {
    type: "element",
    tagName: "table",
    properties: {},
    children: state.wrap(tableContent, true)
  };
  state.patch(node2, result);
  return state.applyData(node2, result);
}
function tableRow(state, node2, parent) {
  const siblings = parent ? parent.children : void 0;
  const rowIndex = siblings ? siblings.indexOf(node2) : 1;
  const tagName = rowIndex === 0 ? "th" : "td";
  const align = parent && parent.type === "table" ? parent.align : void 0;
  const length = align ? align.length : node2.children.length;
  let cellIndex = -1;
  const cells = [];
  while (++cellIndex < length) {
    const cell = node2.children[cellIndex];
    const properties = {};
    const alignValue = align ? align[cellIndex] : void 0;
    if (alignValue) {
      properties.align = alignValue;
    }
    let result2 = { type: "element", tagName, properties, children: [] };
    if (cell) {
      result2.children = state.all(cell);
      state.patch(cell, result2);
      result2 = state.applyData(cell, result2);
    }
    cells.push(result2);
  }
  const result = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: state.wrap(cells, true)
  };
  state.patch(node2, result);
  return state.applyData(node2, result);
}
function tableCell(state, node2) {
  const result = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: state.all(node2)
  };
  state.patch(node2, result);
  return state.applyData(node2, result);
}
const tab = 9;
const space = 32;
function trimLines(value) {
  const source = String(value);
  const search2 = /\r?\n|\r/g;
  let match = search2.exec(source);
  let last = 0;
  const lines = [];
  while (match) {
    lines.push(
      trimLine(source.slice(last, match.index), last > 0, true),
      match[0]
    );
    last = match.index + match[0].length;
    match = search2.exec(source);
  }
  lines.push(trimLine(source.slice(last), last > 0, false));
  return lines.join("");
}
function trimLine(value, start, end) {
  let startIndex = 0;
  let endIndex = value.length;
  if (start) {
    let code2 = value.codePointAt(startIndex);
    while (code2 === tab || code2 === space) {
      startIndex++;
      code2 = value.codePointAt(startIndex);
    }
  }
  if (end) {
    let code2 = value.codePointAt(endIndex - 1);
    while (code2 === tab || code2 === space) {
      endIndex--;
      code2 = value.codePointAt(endIndex - 1);
    }
  }
  return endIndex > startIndex ? value.slice(startIndex, endIndex) : "";
}
function text$3(state, node2) {
  const result = { type: "text", value: trimLines(String(node2.value)) };
  state.patch(node2, result);
  return state.applyData(node2, result);
}
function thematicBreak(state, node2) {
  const result = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  state.patch(node2, result);
  return state.applyData(node2, result);
}
const handlers = {
  blockquote,
  break: hardBreak,
  code,
  delete: strikethrough,
  emphasis,
  footnoteReference,
  heading,
  html: html$2,
  imageReference,
  image,
  inlineCode,
  linkReference,
  link,
  listItem,
  list,
  paragraph,
  // @ts-expect-error: root is different, but hard to type.
  root: root$3,
  strong,
  table,
  tableCell,
  tableRow,
  text: text$3,
  thematicBreak,
  toml: ignore,
  yaml: ignore,
  definition: ignore,
  footnoteDefinition: ignore
};
function ignore() {
  return void 0;
}
const VOID = -1;
const PRIMITIVE = 0;
const ARRAY = 1;
const OBJECT = 2;
const DATE = 3;
const REGEXP = 4;
const MAP = 5;
const SET = 6;
const ERROR = 7;
const BIGINT = 8;
const env = typeof self === "object" ? self : globalThis;
const deserializer = ($2, _) => {
  const as = (out, index2) => {
    $2.set(index2, out);
    return out;
  };
  const unpair = (index2) => {
    if ($2.has(index2))
      return $2.get(index2);
    const [type, value] = _[index2];
    switch (type) {
      case PRIMITIVE:
      case VOID:
        return as(value, index2);
      case ARRAY: {
        const arr = as([], index2);
        for (const index3 of value)
          arr.push(unpair(index3));
        return arr;
      }
      case OBJECT: {
        const object = as({}, index2);
        for (const [key, index3] of value)
          object[unpair(key)] = unpair(index3);
        return object;
      }
      case DATE:
        return as(new Date(value), index2);
      case REGEXP: {
        const { source, flags } = value;
        return as(new RegExp(source, flags), index2);
      }
      case MAP: {
        const map2 = as(/* @__PURE__ */ new Map(), index2);
        for (const [key, index3] of value)
          map2.set(unpair(key), unpair(index3));
        return map2;
      }
      case SET: {
        const set = as(/* @__PURE__ */ new Set(), index2);
        for (const index3 of value)
          set.add(unpair(index3));
        return set;
      }
      case ERROR: {
        const { name: name2, message } = value;
        return as(new env[name2](message), index2);
      }
      case BIGINT:
        return as(BigInt(value), index2);
      case "BigInt":
        return as(Object(BigInt(value)), index2);
      case "ArrayBuffer":
        return as(new Uint8Array(value).buffer, value);
      case "DataView": {
        const { buffer } = new Uint8Array(value);
        return as(new DataView(buffer), value);
      }
    }
    return as(new env[type](value), index2);
  };
  return unpair;
};
const deserialize = (serialized) => deserializer(/* @__PURE__ */ new Map(), serialized)(0);
const EMPTY = "";
const { toString } = {};
const { keys } = Object;
const typeOf = (value) => {
  const type = typeof value;
  if (type !== "object" || !value)
    return [PRIMITIVE, type];
  const asString = toString.call(value).slice(8, -1);
  switch (asString) {
    case "Array":
      return [ARRAY, EMPTY];
    case "Object":
      return [OBJECT, EMPTY];
    case "Date":
      return [DATE, EMPTY];
    case "RegExp":
      return [REGEXP, EMPTY];
    case "Map":
      return [MAP, EMPTY];
    case "Set":
      return [SET, EMPTY];
    case "DataView":
      return [ARRAY, asString];
  }
  if (asString.includes("Array"))
    return [ARRAY, asString];
  if (asString.includes("Error"))
    return [ERROR, asString];
  return [OBJECT, asString];
};
const shouldSkip = ([TYPE, type]) => TYPE === PRIMITIVE && (type === "function" || type === "symbol");
const serializer = (strict, json, $2, _) => {
  const as = (out, value) => {
    const index2 = _.push(out) - 1;
    $2.set(value, index2);
    return index2;
  };
  const pair = (value) => {
    if ($2.has(value))
      return $2.get(value);
    let [TYPE, type] = typeOf(value);
    switch (TYPE) {
      case PRIMITIVE: {
        let entry = value;
        switch (type) {
          case "bigint":
            TYPE = BIGINT;
            entry = value.toString();
            break;
          case "function":
          case "symbol":
            if (strict)
              throw new TypeError("unable to serialize " + type);
            entry = null;
            break;
          case "undefined":
            return as([VOID], value);
        }
        return as([TYPE, entry], value);
      }
      case ARRAY: {
        if (type) {
          let spread = value;
          if (type === "DataView") {
            spread = new Uint8Array(value.buffer);
          } else if (type === "ArrayBuffer") {
            spread = new Uint8Array(value);
          }
          return as([type, [...spread]], value);
        }
        const arr = [];
        const index2 = as([TYPE, arr], value);
        for (const entry of value)
          arr.push(pair(entry));
        return index2;
      }
      case OBJECT: {
        if (type) {
          switch (type) {
            case "BigInt":
              return as([type, value.toString()], value);
            case "Boolean":
            case "Number":
            case "String":
              return as([type, value.valueOf()], value);
          }
        }
        if (json && "toJSON" in value)
          return pair(value.toJSON());
        const entries = [];
        const index2 = as([TYPE, entries], value);
        for (const key of keys(value)) {
          if (strict || !shouldSkip(typeOf(value[key])))
            entries.push([pair(key), pair(value[key])]);
        }
        return index2;
      }
      case DATE:
        return as([TYPE, value.toISOString()], value);
      case REGEXP: {
        const { source, flags } = value;
        return as([TYPE, { source, flags }], value);
      }
      case MAP: {
        const entries = [];
        const index2 = as([TYPE, entries], value);
        for (const [key, entry] of value) {
          if (strict || !(shouldSkip(typeOf(key)) || shouldSkip(typeOf(entry))))
            entries.push([pair(key), pair(entry)]);
        }
        return index2;
      }
      case SET: {
        const entries = [];
        const index2 = as([TYPE, entries], value);
        for (const entry of value) {
          if (strict || !shouldSkip(typeOf(entry)))
            entries.push(pair(entry));
        }
        return index2;
      }
    }
    const { message } = value;
    return as([TYPE, { name: type, message }], value);
  };
  return pair;
};
const serialize = (value, { json, lossy } = {}) => {
  const _ = [];
  return serializer(!(json || lossy), !!json, /* @__PURE__ */ new Map(), _)(value), _;
};
const structuredClone$1 = typeof structuredClone === "function" ? (
  /* c8 ignore start */
  (any, options) => options && ("json" in options || "lossy" in options) ? deserialize(serialize(any, options)) : structuredClone(any)
) : (any, options) => deserialize(serialize(any, options));
function defaultFootnoteBackContent(_, rereferenceIndex) {
  const result = [{ type: "text", value: "↩" }];
  if (rereferenceIndex > 1) {
    result.push({
      type: "element",
      tagName: "sup",
      properties: {},
      children: [{ type: "text", value: String(rereferenceIndex) }]
    });
  }
  return result;
}
function defaultFootnoteBackLabel(referenceIndex, rereferenceIndex) {
  return "Back to reference " + (referenceIndex + 1) + (rereferenceIndex > 1 ? "-" + rereferenceIndex : "");
}
function footer(state) {
  const clobberPrefix = typeof state.options.clobberPrefix === "string" ? state.options.clobberPrefix : "user-content-";
  const footnoteBackContent = state.options.footnoteBackContent || defaultFootnoteBackContent;
  const footnoteBackLabel = state.options.footnoteBackLabel || defaultFootnoteBackLabel;
  const footnoteLabel = state.options.footnoteLabel || "Footnotes";
  const footnoteLabelTagName = state.options.footnoteLabelTagName || "h2";
  const footnoteLabelProperties = state.options.footnoteLabelProperties || {
    className: ["sr-only"]
  };
  const listItems = [];
  let referenceIndex = -1;
  while (++referenceIndex < state.footnoteOrder.length) {
    const definition2 = state.footnoteById.get(
      state.footnoteOrder[referenceIndex]
    );
    if (!definition2) {
      continue;
    }
    const content2 = state.all(definition2);
    const id = String(definition2.identifier).toUpperCase();
    const safeId = normalizeUri(id.toLowerCase());
    let rereferenceIndex = 0;
    const backReferences = [];
    const counts = state.footnoteCounts.get(id);
    while (counts !== void 0 && ++rereferenceIndex <= counts) {
      if (backReferences.length > 0) {
        backReferences.push({ type: "text", value: " " });
      }
      let children = typeof footnoteBackContent === "string" ? footnoteBackContent : footnoteBackContent(referenceIndex, rereferenceIndex);
      if (typeof children === "string") {
        children = { type: "text", value: children };
      }
      backReferences.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + clobberPrefix + "fnref-" + safeId + (rereferenceIndex > 1 ? "-" + rereferenceIndex : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof footnoteBackLabel === "string" ? footnoteBackLabel : footnoteBackLabel(referenceIndex, rereferenceIndex),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(children) ? children : [children]
      });
    }
    const tail = content2[content2.length - 1];
    if (tail && tail.type === "element" && tail.tagName === "p") {
      const tailTail = tail.children[tail.children.length - 1];
      if (tailTail && tailTail.type === "text") {
        tailTail.value += " ";
      } else {
        tail.children.push({ type: "text", value: " " });
      }
      tail.children.push(...backReferences);
    } else {
      content2.push(...backReferences);
    }
    const listItem2 = {
      type: "element",
      tagName: "li",
      properties: { id: clobberPrefix + "fn-" + safeId },
      children: state.wrap(content2, true)
    };
    state.patch(definition2, listItem2);
    listItems.push(listItem2);
  }
  if (listItems.length === 0) {
    return;
  }
  return {
    type: "element",
    tagName: "section",
    properties: { dataFootnotes: true, className: ["footnotes"] },
    children: [
      {
        type: "element",
        tagName: footnoteLabelTagName,
        properties: {
          ...structuredClone$1(footnoteLabelProperties),
          id: "footnote-label"
        },
        children: [{ type: "text", value: footnoteLabel }]
      },
      { type: "text", value: "\n" },
      {
        type: "element",
        tagName: "ol",
        properties: {},
        children: state.wrap(listItems, true)
      },
      { type: "text", value: "\n" }
    ]
  };
}
const own$3 = {}.hasOwnProperty;
const emptyOptions$2 = {};
function createState(tree, options) {
  const settings = options || emptyOptions$2;
  const definitionById = /* @__PURE__ */ new Map();
  const footnoteById = /* @__PURE__ */ new Map();
  const footnoteCounts = /* @__PURE__ */ new Map();
  const handlers$1 = { ...handlers, ...settings.handlers };
  const state = {
    all: all2,
    applyData,
    definitionById,
    footnoteById,
    footnoteCounts,
    footnoteOrder: [],
    handlers: handlers$1,
    one: one2,
    options: settings,
    patch: patch$2,
    wrap
  };
  visit(tree, function(node2) {
    if (node2.type === "definition" || node2.type === "footnoteDefinition") {
      const map2 = node2.type === "definition" ? definitionById : footnoteById;
      const id = String(node2.identifier).toUpperCase();
      if (!map2.has(id)) {
        map2.set(id, node2);
      }
    }
  });
  return state;
  function one2(node2, parent) {
    const type = node2.type;
    const handle2 = state.handlers[type];
    if (own$3.call(state.handlers, type) && handle2) {
      return handle2(state, node2, parent);
    }
    if (state.options.passThrough && state.options.passThrough.includes(type)) {
      if ("children" in node2) {
        const { children, ...shallow } = node2;
        const result = structuredClone$1(shallow);
        result.children = state.all(node2);
        return result;
      }
      return structuredClone$1(node2);
    }
    const unknown2 = state.options.unknownHandler || defaultUnknownHandler;
    return unknown2(state, node2, parent);
  }
  function all2(parent) {
    const values = [];
    if ("children" in parent) {
      const nodes = parent.children;
      let index2 = -1;
      while (++index2 < nodes.length) {
        const result = state.one(nodes[index2], parent);
        if (result) {
          if (index2 && nodes[index2 - 1].type === "break") {
            if (!Array.isArray(result) && result.type === "text") {
              result.value = trimMarkdownSpaceStart(result.value);
            }
            if (!Array.isArray(result) && result.type === "element") {
              const head = result.children[0];
              if (head && head.type === "text") {
                head.value = trimMarkdownSpaceStart(head.value);
              }
            }
          }
          if (Array.isArray(result)) {
            values.push(...result);
          } else {
            values.push(result);
          }
        }
      }
    }
    return values;
  }
}
function patch$2(from, to) {
  if (from.position) to.position = position$1(from);
}
function applyData(from, to) {
  let result = to;
  if (from && from.data) {
    const hName = from.data.hName;
    const hChildren = from.data.hChildren;
    const hProperties = from.data.hProperties;
    if (typeof hName === "string") {
      if (result.type === "element") {
        result.tagName = hName;
      } else {
        const children = "children" in result ? result.children : [result];
        result = { type: "element", tagName: hName, properties: {}, children };
      }
    }
    if (result.type === "element" && hProperties) {
      Object.assign(result.properties, structuredClone$1(hProperties));
    }
    if ("children" in result && result.children && hChildren !== null && hChildren !== void 0) {
      result.children = hChildren;
    }
  }
  return result;
}
function defaultUnknownHandler(state, node2) {
  const data = node2.data || {};
  const result = "value" in node2 && !(own$3.call(data, "hProperties") || own$3.call(data, "hChildren")) ? { type: "text", value: node2.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: state.all(node2)
  };
  state.patch(node2, result);
  return state.applyData(node2, result);
}
function wrap(nodes, loose) {
  const result = [];
  let index2 = -1;
  if (loose) {
    result.push({ type: "text", value: "\n" });
  }
  while (++index2 < nodes.length) {
    if (index2) result.push({ type: "text", value: "\n" });
    result.push(nodes[index2]);
  }
  if (loose && nodes.length > 0) {
    result.push({ type: "text", value: "\n" });
  }
  return result;
}
function trimMarkdownSpaceStart(value) {
  let index2 = 0;
  let code2 = value.charCodeAt(index2);
  while (code2 === 9 || code2 === 32) {
    index2++;
    code2 = value.charCodeAt(index2);
  }
  return value.slice(index2);
}
function toHast(tree, options) {
  const state = createState(tree, options);
  const node2 = state.one(tree, void 0);
  const foot = footer(state);
  const result = Array.isArray(node2) ? { type: "root", children: node2 } : node2 || { type: "root", children: [] };
  if (foot) {
    result.children.push({ type: "text", value: "\n" }, foot);
  }
  return result;
}
function remarkRehype(destination, options) {
  if (destination && "run" in destination) {
    return async function(tree, file) {
      const hastTree = (
        /** @type {HastRoot} */
        toHast(tree, { file, ...options })
      );
      await destination.run(hastTree, file);
    };
  }
  return function(tree, file) {
    return (
      /** @type {HastRoot} */
      toHast(tree, { file, ...destination || options })
    );
  };
}
function parse$1(value) {
  const tokens = [];
  const input = String(value || "");
  let index2 = input.indexOf(",");
  let start = 0;
  let end = false;
  while (!end) {
    if (index2 === -1) {
      index2 = input.length;
      end = true;
    }
    const token = input.slice(start, index2).trim();
    if (token || !end) {
      tokens.push(token);
    }
    start = index2 + 1;
    index2 = input.indexOf(",", start);
  }
  return tokens;
}
function stringify$1(values, options) {
  const settings = {};
  const input = values[values.length - 1] === "" ? [...values, ""] : values;
  return input.join(
    (settings.padRight ? " " : "") + "," + (settings.padLeft === false ? "" : " ")
  ).trim();
}
const nameRe = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u;
const nameReJsx = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u;
const emptyOptions$1 = {};
function name(name2, options) {
  const settings = emptyOptions$1;
  const re2 = settings.jsx ? nameReJsx : nameRe;
  return re2.test(name2);
}
const re = /[ \t\n\f\r]/g;
function whitespace(thing) {
  return typeof thing === "object" ? thing.type === "text" ? empty(thing.value) : false : empty(thing);
}
function empty(value) {
  return value.replace(re, "") === "";
}
class Schema {
  /**
   * @param {SchemaType['property']} property
   *   Property.
   * @param {SchemaType['normal']} normal
   *   Normal.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Schema.
   */
  constructor(property, normal, space2) {
    this.normal = normal;
    this.property = property;
    if (space2) {
      this.space = space2;
    }
  }
}
Schema.prototype.normal = {};
Schema.prototype.property = {};
Schema.prototype.space = void 0;
function merge(definitions, space2) {
  const property = {};
  const normal = {};
  for (const definition2 of definitions) {
    Object.assign(property, definition2.property);
    Object.assign(normal, definition2.normal);
  }
  return new Schema(property, normal, space2);
}
function normalize(value) {
  return value.toLowerCase();
}
class Info {
  /**
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @returns
   *   Info.
   */
  constructor(property, attribute) {
    this.attribute = attribute;
    this.property = property;
  }
}
Info.prototype.attribute = "";
Info.prototype.booleanish = false;
Info.prototype.boolean = false;
Info.prototype.commaOrSpaceSeparated = false;
Info.prototype.commaSeparated = false;
Info.prototype.defined = false;
Info.prototype.mustUseProperty = false;
Info.prototype.number = false;
Info.prototype.overloadedBoolean = false;
Info.prototype.property = "";
Info.prototype.spaceSeparated = false;
Info.prototype.space = void 0;
let powers = 0;
const boolean = increment();
const booleanish = increment();
const overloadedBoolean = increment();
const number = increment();
const spaceSeparated = increment();
const commaSeparated = increment();
const commaOrSpaceSeparated = increment();
function increment() {
  return 2 ** ++powers;
}
const types = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean,
  booleanish,
  commaOrSpaceSeparated,
  commaSeparated,
  number,
  overloadedBoolean,
  spaceSeparated
}, Symbol.toStringTag, { value: "Module" }));
const checks = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(types)
);
class DefinedInfo extends Info {
  /**
   * @constructor
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @param {number | null | undefined} [mask]
   *   Mask.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Info.
   */
  constructor(property, attribute, mask, space2) {
    let index2 = -1;
    super(property, attribute);
    mark(this, "space", space2);
    if (typeof mask === "number") {
      while (++index2 < checks.length) {
        const check = checks[index2];
        mark(this, checks[index2], (mask & types[check]) === types[check]);
      }
    }
  }
}
DefinedInfo.prototype.defined = true;
function mark(values, key, value) {
  if (value) {
    values[key] = value;
  }
}
function create(definition2) {
  const properties = {};
  const normals = {};
  for (const [property, value] of Object.entries(definition2.properties)) {
    const info = new DefinedInfo(
      property,
      definition2.transform(definition2.attributes || {}, property),
      value,
      definition2.space
    );
    if (definition2.mustUseProperty && definition2.mustUseProperty.includes(property)) {
      info.mustUseProperty = true;
    }
    properties[property] = info;
    normals[normalize(property)] = property;
    normals[normalize(info.attribute)] = property;
  }
  return new Schema(properties, normals, definition2.space);
}
const aria = create({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: booleanish,
    ariaAutoComplete: null,
    ariaBusy: booleanish,
    ariaChecked: booleanish,
    ariaColCount: number,
    ariaColIndex: number,
    ariaColSpan: number,
    ariaControls: spaceSeparated,
    ariaCurrent: null,
    ariaDescribedBy: spaceSeparated,
    ariaDetails: null,
    ariaDisabled: booleanish,
    ariaDropEffect: spaceSeparated,
    ariaErrorMessage: null,
    ariaExpanded: booleanish,
    ariaFlowTo: spaceSeparated,
    ariaGrabbed: booleanish,
    ariaHasPopup: null,
    ariaHidden: booleanish,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: spaceSeparated,
    ariaLevel: number,
    ariaLive: null,
    ariaModal: booleanish,
    ariaMultiLine: booleanish,
    ariaMultiSelectable: booleanish,
    ariaOrientation: null,
    ariaOwns: spaceSeparated,
    ariaPlaceholder: null,
    ariaPosInSet: number,
    ariaPressed: booleanish,
    ariaReadOnly: booleanish,
    ariaRelevant: null,
    ariaRequired: booleanish,
    ariaRoleDescription: spaceSeparated,
    ariaRowCount: number,
    ariaRowIndex: number,
    ariaRowSpan: number,
    ariaSelected: booleanish,
    ariaSetSize: number,
    ariaSort: null,
    ariaValueMax: number,
    ariaValueMin: number,
    ariaValueNow: number,
    ariaValueText: null,
    role: null
  },
  transform(_, property) {
    return property === "role" ? property : "aria-" + property.slice(4).toLowerCase();
  }
});
function caseSensitiveTransform(attributes, attribute) {
  return attribute in attributes ? attributes[attribute] : attribute;
}
function caseInsensitiveTransform(attributes, property) {
  return caseSensitiveTransform(attributes, property.toLowerCase());
}
const html$1 = create({
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: commaSeparated,
    acceptCharset: spaceSeparated,
    accessKey: spaceSeparated,
    action: null,
    allow: null,
    allowFullScreen: boolean,
    allowPaymentRequest: boolean,
    allowUserMedia: boolean,
    alt: null,
    as: null,
    async: boolean,
    autoCapitalize: null,
    autoComplete: spaceSeparated,
    autoFocus: boolean,
    autoPlay: boolean,
    blocking: spaceSeparated,
    capture: null,
    charSet: null,
    checked: boolean,
    cite: null,
    className: spaceSeparated,
    cols: number,
    colSpan: null,
    content: null,
    contentEditable: booleanish,
    controls: boolean,
    controlsList: spaceSeparated,
    coords: number | commaSeparated,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: boolean,
    defer: boolean,
    dir: null,
    dirName: null,
    disabled: boolean,
    download: overloadedBoolean,
    draggable: booleanish,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: boolean,
    formTarget: null,
    headers: spaceSeparated,
    height: number,
    hidden: overloadedBoolean,
    high: number,
    href: null,
    hrefLang: null,
    htmlFor: spaceSeparated,
    httpEquiv: spaceSeparated,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: boolean,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: boolean,
    itemId: null,
    itemProp: spaceSeparated,
    itemRef: spaceSeparated,
    itemScope: boolean,
    itemType: spaceSeparated,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: boolean,
    low: number,
    manifest: null,
    max: null,
    maxLength: number,
    media: null,
    method: null,
    min: null,
    minLength: number,
    multiple: boolean,
    muted: boolean,
    name: null,
    nonce: null,
    noModule: boolean,
    noValidate: boolean,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforeMatch: null,
    onBeforePrint: null,
    onBeforeToggle: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onScrollEnd: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: boolean,
    optimum: number,
    pattern: null,
    ping: spaceSeparated,
    placeholder: null,
    playsInline: boolean,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: boolean,
    referrerPolicy: null,
    rel: spaceSeparated,
    required: boolean,
    reversed: boolean,
    rows: number,
    rowSpan: number,
    sandbox: spaceSeparated,
    scope: null,
    scoped: boolean,
    seamless: boolean,
    selected: boolean,
    shadowRootClonable: boolean,
    shadowRootDelegatesFocus: boolean,
    shadowRootMode: null,
    shape: null,
    size: number,
    sizes: null,
    slot: null,
    span: number,
    spellCheck: booleanish,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: number,
    step: null,
    style: null,
    tabIndex: number,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: boolean,
    useMap: null,
    value: booleanish,
    width: number,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: spaceSeparated,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: number,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: number,
    // `<body>`
    cellPadding: null,
    // `<table>`
    cellSpacing: null,
    // `<table>`
    char: null,
    // Several table elements. When `align=char`, sets the character to align on
    charOff: null,
    // Several table elements. When `char`, offsets the alignment
    classId: null,
    // `<object>`
    clear: null,
    // `<br>`. Use CSS `clear` instead
    code: null,
    // `<object>`
    codeBase: null,
    // `<object>`
    codeType: null,
    // `<object>`
    color: null,
    // `<font>` and `<hr>`. Use CSS instead
    compact: boolean,
    // Lists. Use CSS to reduce space between items instead
    declare: boolean,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: number,
    // `<img>` and `<object>`
    leftMargin: number,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: number,
    // `<body>`
    marginWidth: number,
    // `<body>`
    noResize: boolean,
    // `<frame>`
    noHref: boolean,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: boolean,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: boolean,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: number,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: booleanish,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: number,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: number,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: boolean,
    disableRemotePlayback: boolean,
    prefix: null,
    property: null,
    results: number,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: caseInsensitiveTransform
});
const svg$1 = create({
  attributes: {
    accentHeight: "accent-height",
    alignmentBaseline: "alignment-baseline",
    arabicForm: "arabic-form",
    baselineShift: "baseline-shift",
    capHeight: "cap-height",
    className: "class",
    clipPath: "clip-path",
    clipRule: "clip-rule",
    colorInterpolation: "color-interpolation",
    colorInterpolationFilters: "color-interpolation-filters",
    colorProfile: "color-profile",
    colorRendering: "color-rendering",
    crossOrigin: "crossorigin",
    dataType: "datatype",
    dominantBaseline: "dominant-baseline",
    enableBackground: "enable-background",
    fillOpacity: "fill-opacity",
    fillRule: "fill-rule",
    floodColor: "flood-color",
    floodOpacity: "flood-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSizeAdjust: "font-size-adjust",
    fontStretch: "font-stretch",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    glyphName: "glyph-name",
    glyphOrientationHorizontal: "glyph-orientation-horizontal",
    glyphOrientationVertical: "glyph-orientation-vertical",
    hrefLang: "hreflang",
    horizAdvX: "horiz-adv-x",
    horizOriginX: "horiz-origin-x",
    horizOriginY: "horiz-origin-y",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    lightingColor: "lighting-color",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    navDown: "nav-down",
    navDownLeft: "nav-down-left",
    navDownRight: "nav-down-right",
    navLeft: "nav-left",
    navNext: "nav-next",
    navPrev: "nav-prev",
    navRight: "nav-right",
    navUp: "nav-up",
    navUpLeft: "nav-up-left",
    navUpRight: "nav-up-right",
    onAbort: "onabort",
    onActivate: "onactivate",
    onAfterPrint: "onafterprint",
    onBeforePrint: "onbeforeprint",
    onBegin: "onbegin",
    onCancel: "oncancel",
    onCanPlay: "oncanplay",
    onCanPlayThrough: "oncanplaythrough",
    onChange: "onchange",
    onClick: "onclick",
    onClose: "onclose",
    onCopy: "oncopy",
    onCueChange: "oncuechange",
    onCut: "oncut",
    onDblClick: "ondblclick",
    onDrag: "ondrag",
    onDragEnd: "ondragend",
    onDragEnter: "ondragenter",
    onDragExit: "ondragexit",
    onDragLeave: "ondragleave",
    onDragOver: "ondragover",
    onDragStart: "ondragstart",
    onDrop: "ondrop",
    onDurationChange: "ondurationchange",
    onEmptied: "onemptied",
    onEnd: "onend",
    onEnded: "onended",
    onError: "onerror",
    onFocus: "onfocus",
    onFocusIn: "onfocusin",
    onFocusOut: "onfocusout",
    onHashChange: "onhashchange",
    onInput: "oninput",
    onInvalid: "oninvalid",
    onKeyDown: "onkeydown",
    onKeyPress: "onkeypress",
    onKeyUp: "onkeyup",
    onLoad: "onload",
    onLoadedData: "onloadeddata",
    onLoadedMetadata: "onloadedmetadata",
    onLoadStart: "onloadstart",
    onMessage: "onmessage",
    onMouseDown: "onmousedown",
    onMouseEnter: "onmouseenter",
    onMouseLeave: "onmouseleave",
    onMouseMove: "onmousemove",
    onMouseOut: "onmouseout",
    onMouseOver: "onmouseover",
    onMouseUp: "onmouseup",
    onMouseWheel: "onmousewheel",
    onOffline: "onoffline",
    onOnline: "ononline",
    onPageHide: "onpagehide",
    onPageShow: "onpageshow",
    onPaste: "onpaste",
    onPause: "onpause",
    onPlay: "onplay",
    onPlaying: "onplaying",
    onPopState: "onpopstate",
    onProgress: "onprogress",
    onRateChange: "onratechange",
    onRepeat: "onrepeat",
    onReset: "onreset",
    onResize: "onresize",
    onScroll: "onscroll",
    onSeeked: "onseeked",
    onSeeking: "onseeking",
    onSelect: "onselect",
    onShow: "onshow",
    onStalled: "onstalled",
    onStorage: "onstorage",
    onSubmit: "onsubmit",
    onSuspend: "onsuspend",
    onTimeUpdate: "ontimeupdate",
    onToggle: "ontoggle",
    onUnload: "onunload",
    onVolumeChange: "onvolumechange",
    onWaiting: "onwaiting",
    onZoom: "onzoom",
    overlinePosition: "overline-position",
    overlineThickness: "overline-thickness",
    paintOrder: "paint-order",
    panose1: "panose-1",
    pointerEvents: "pointer-events",
    referrerPolicy: "referrerpolicy",
    renderingIntent: "rendering-intent",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strikethroughPosition: "strikethrough-position",
    strikethroughThickness: "strikethrough-thickness",
    strokeDashArray: "stroke-dasharray",
    strokeDashOffset: "stroke-dashoffset",
    strokeLineCap: "stroke-linecap",
    strokeLineJoin: "stroke-linejoin",
    strokeMiterLimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    tabIndex: "tabindex",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    transformOrigin: "transform-origin",
    typeOf: "typeof",
    underlinePosition: "underline-position",
    underlineThickness: "underline-thickness",
    unicodeBidi: "unicode-bidi",
    unicodeRange: "unicode-range",
    unitsPerEm: "units-per-em",
    vAlphabetic: "v-alphabetic",
    vHanging: "v-hanging",
    vIdeographic: "v-ideographic",
    vMathematical: "v-mathematical",
    vectorEffect: "vector-effect",
    vertAdvY: "vert-adv-y",
    vertOriginX: "vert-origin-x",
    vertOriginY: "vert-origin-y",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xHeight: "x-height",
    // These were camelcased in Tiny. Now lowercased in SVG 2
    playbackOrder: "playbackorder",
    timelineBegin: "timelinebegin"
  },
  properties: {
    about: commaOrSpaceSeparated,
    accentHeight: number,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: number,
    amplitude: number,
    arabicForm: null,
    ascent: number,
    attributeName: null,
    attributeType: null,
    azimuth: number,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: number,
    by: null,
    calcMode: null,
    capHeight: number,
    className: spaceSeparated,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: number,
    diffuseConstant: number,
    direction: null,
    display: null,
    dur: null,
    divisor: number,
    dominantBaseline: null,
    download: boolean,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: number,
    enableBackground: null,
    end: null,
    event: null,
    exponent: number,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: number,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: commaSeparated,
    g2: commaSeparated,
    glyphName: commaSeparated,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: number,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: number,
    horizOriginX: number,
    horizOriginY: number,
    id: null,
    ideographic: number,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: number,
    k: number,
    k1: number,
    k2: number,
    k3: number,
    k4: number,
    kernelMatrix: commaOrSpaceSeparated,
    kernelUnitLength: null,
    keyPoints: null,
    // SEMI_COLON_SEPARATED
    keySplines: null,
    // SEMI_COLON_SEPARATED
    keyTimes: null,
    // SEMI_COLON_SEPARATED
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: number,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: number,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: number,
    overlineThickness: number,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: number,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: spaceSeparated,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: number,
    pointsAtY: number,
    pointsAtZ: number,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: commaOrSpaceSeparated,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: commaOrSpaceSeparated,
    rev: commaOrSpaceSeparated,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: commaOrSpaceSeparated,
    requiredFeatures: commaOrSpaceSeparated,
    requiredFonts: commaOrSpaceSeparated,
    requiredFormats: commaOrSpaceSeparated,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: number,
    specularExponent: number,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: number,
    strikethroughThickness: number,
    string: null,
    stroke: null,
    strokeDashArray: commaOrSpaceSeparated,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: number,
    strokeOpacity: number,
    strokeWidth: null,
    style: null,
    surfaceScale: number,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: commaOrSpaceSeparated,
    tabIndex: number,
    tableValues: null,
    target: null,
    targetX: number,
    targetY: number,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: commaOrSpaceSeparated,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: number,
    underlineThickness: number,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: number,
    values: null,
    vAlphabetic: number,
    vMathematical: number,
    vectorEffect: null,
    vHanging: number,
    vIdeographic: number,
    version: null,
    vertAdvY: number,
    vertOriginX: number,
    vertOriginY: number,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: number,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  },
  space: "svg",
  transform: caseSensitiveTransform
});
const xlink = create({
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  },
  space: "xlink",
  transform(_, property) {
    return "xlink:" + property.slice(5).toLowerCase();
  }
});
const xmlns = create({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: caseInsensitiveTransform
});
const xml = create({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(_, property) {
    return "xml:" + property.slice(3).toLowerCase();
  }
});
const hastToReact = {
  classId: "classID",
  dataType: "datatype",
  itemId: "itemID",
  strokeDashArray: "strokeDasharray",
  strokeDashOffset: "strokeDashoffset",
  strokeLineCap: "strokeLinecap",
  strokeLineJoin: "strokeLinejoin",
  strokeMiterLimit: "strokeMiterlimit",
  typeOf: "typeof",
  xLinkActuate: "xlinkActuate",
  xLinkArcRole: "xlinkArcrole",
  xLinkHref: "xlinkHref",
  xLinkRole: "xlinkRole",
  xLinkShow: "xlinkShow",
  xLinkTitle: "xlinkTitle",
  xLinkType: "xlinkType",
  xmlnsXLink: "xmlnsXlink"
};
const cap$1 = /[A-Z]/g;
const dash = /-[a-z]/g;
const valid = /^data[-\w.:]+$/i;
function find(schema, value) {
  const normal = normalize(value);
  let property = value;
  let Type = Info;
  if (normal in schema.normal) {
    return schema.property[schema.normal[normal]];
  }
  if (normal.length > 4 && normal.slice(0, 4) === "data" && valid.test(value)) {
    if (value.charAt(4) === "-") {
      const rest = value.slice(5).replace(dash, camelcase);
      property = "data" + rest.charAt(0).toUpperCase() + rest.slice(1);
    } else {
      const rest = value.slice(4);
      if (!dash.test(rest)) {
        let dashes = rest.replace(cap$1, kebab);
        if (dashes.charAt(0) !== "-") {
          dashes = "-" + dashes;
        }
        value = "data" + dashes;
      }
    }
    Type = DefinedInfo;
  }
  return new Type(property, value);
}
function kebab($0) {
  return "-" + $0.toLowerCase();
}
function camelcase($0) {
  return $0.charAt(1).toUpperCase();
}
const html = merge([aria, html$1, xlink, xmlns, xml], "html");
const svg = merge([aria, svg$1, xlink, xmlns, xml], "svg");
function parse(value) {
  const input = String(value || "").trim();
  return input ? input.split(/[ \t\n\r\f]+/g) : [];
}
function stringify(values) {
  return values.join(" ").trim();
}
var cjs$2 = {};
var cjs$1;
var hasRequiredCjs$2;
function requireCjs$2() {
  if (hasRequiredCjs$2) return cjs$1;
  hasRequiredCjs$2 = 1;
  var COMMENT_REGEX = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
  var NEWLINE_REGEX = /\n/g;
  var WHITESPACE_REGEX = /^\s*/;
  var PROPERTY_REGEX = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;
  var COLON_REGEX = /^:\s*/;
  var VALUE_REGEX = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;
  var SEMICOLON_REGEX = /^[;\s]*/;
  var TRIM_REGEX = /^\s+|\s+$/g;
  var NEWLINE = "\n";
  var FORWARD_SLASH = "/";
  var ASTERISK = "*";
  var EMPTY_STRING = "";
  var TYPE_COMMENT = "comment";
  var TYPE_DECLARATION = "declaration";
  function index2(style2, options) {
    if (typeof style2 !== "string") {
      throw new TypeError("First argument must be a string");
    }
    if (!style2) return [];
    options = options || {};
    var lineno = 1;
    var column = 1;
    function updatePosition(str) {
      var lines = str.match(NEWLINE_REGEX);
      if (lines) lineno += lines.length;
      var i = str.lastIndexOf(NEWLINE);
      column = ~i ? str.length - i : column + str.length;
    }
    function position2() {
      var start = { line: lineno, column };
      return function(node2) {
        node2.position = new Position(start);
        whitespace2();
        return node2;
      };
    }
    function Position(start) {
      this.start = start;
      this.end = { line: lineno, column };
      this.source = options.source;
    }
    Position.prototype.content = style2;
    function error(msg) {
      var err = new Error(
        options.source + ":" + lineno + ":" + column + ": " + msg
      );
      err.reason = msg;
      err.filename = options.source;
      err.line = lineno;
      err.column = column;
      err.source = style2;
      if (options.silent) ;
      else {
        throw err;
      }
    }
    function match(re2) {
      var m = re2.exec(style2);
      if (!m) return;
      var str = m[0];
      updatePosition(str);
      style2 = style2.slice(str.length);
      return m;
    }
    function whitespace2() {
      match(WHITESPACE_REGEX);
    }
    function comments(rules) {
      var c;
      rules = rules || [];
      while (c = comment2()) {
        if (c !== false) {
          rules.push(c);
        }
      }
      return rules;
    }
    function comment2() {
      var pos = position2();
      if (FORWARD_SLASH != style2.charAt(0) || ASTERISK != style2.charAt(1)) return;
      var i = 2;
      while (EMPTY_STRING != style2.charAt(i) && (ASTERISK != style2.charAt(i) || FORWARD_SLASH != style2.charAt(i + 1))) {
        ++i;
      }
      i += 2;
      if (EMPTY_STRING === style2.charAt(i - 1)) {
        return error("End of comment missing");
      }
      var str = style2.slice(2, i - 2);
      column += 2;
      updatePosition(str);
      style2 = style2.slice(i);
      column += 2;
      return pos({
        type: TYPE_COMMENT,
        comment: str
      });
    }
    function declaration() {
      var pos = position2();
      var prop = match(PROPERTY_REGEX);
      if (!prop) return;
      comment2();
      if (!match(COLON_REGEX)) return error("property missing ':'");
      var val = match(VALUE_REGEX);
      var ret = pos({
        type: TYPE_DECLARATION,
        property: trim(prop[0].replace(COMMENT_REGEX, EMPTY_STRING)),
        value: val ? trim(val[0].replace(COMMENT_REGEX, EMPTY_STRING)) : EMPTY_STRING
      });
      match(SEMICOLON_REGEX);
      return ret;
    }
    function declarations() {
      var decls = [];
      comments(decls);
      var decl;
      while (decl = declaration()) {
        if (decl !== false) {
          decls.push(decl);
          comments(decls);
        }
      }
      return decls;
    }
    whitespace2();
    return declarations();
  }
  function trim(str) {
    return str ? str.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;
  }
  cjs$1 = index2;
  return cjs$1;
}
var hasRequiredCjs$1;
function requireCjs$1() {
  if (hasRequiredCjs$1) return cjs$2;
  hasRequiredCjs$1 = 1;
  var __importDefault = cjs$2 && cjs$2.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
  };
  Object.defineProperty(cjs$2, "__esModule", { value: true });
  cjs$2.default = StyleToObject;
  const inline_style_parser_1 = __importDefault(requireCjs$2());
  function StyleToObject(style2, iterator) {
    let styleObject = null;
    if (!style2 || typeof style2 !== "string") {
      return styleObject;
    }
    const declarations = (0, inline_style_parser_1.default)(style2);
    const hasIterator = typeof iterator === "function";
    declarations.forEach((declaration) => {
      if (declaration.type !== "declaration") {
        return;
      }
      const { property, value } = declaration;
      if (hasIterator) {
        iterator(property, value, declaration);
      } else if (value) {
        styleObject = styleObject || {};
        styleObject[property] = value;
      }
    });
    return styleObject;
  }
  return cjs$2;
}
var utilities = {};
var hasRequiredUtilities;
function requireUtilities() {
  if (hasRequiredUtilities) return utilities;
  hasRequiredUtilities = 1;
  Object.defineProperty(utilities, "__esModule", { value: true });
  utilities.camelCase = void 0;
  var CUSTOM_PROPERTY_REGEX = /^--[a-zA-Z0-9_-]+$/;
  var HYPHEN_REGEX = /-([a-z])/g;
  var NO_HYPHEN_REGEX = /^[^-]+$/;
  var VENDOR_PREFIX_REGEX = /^-(webkit|moz|ms|o|khtml)-/;
  var MS_VENDOR_PREFIX_REGEX = /^-(ms)-/;
  var skipCamelCase = function(property) {
    return !property || NO_HYPHEN_REGEX.test(property) || CUSTOM_PROPERTY_REGEX.test(property);
  };
  var capitalize = function(match, character) {
    return character.toUpperCase();
  };
  var trimHyphen = function(match, prefix) {
    return "".concat(prefix, "-");
  };
  var camelCase = function(property, options) {
    if (options === void 0) {
      options = {};
    }
    if (skipCamelCase(property)) {
      return property;
    }
    property = property.toLowerCase();
    if (options.reactCompat) {
      property = property.replace(MS_VENDOR_PREFIX_REGEX, trimHyphen);
    } else {
      property = property.replace(VENDOR_PREFIX_REGEX, trimHyphen);
    }
    return property.replace(HYPHEN_REGEX, capitalize);
  };
  utilities.camelCase = camelCase;
  return utilities;
}
var cjs;
var hasRequiredCjs;
function requireCjs() {
  if (hasRequiredCjs) return cjs;
  hasRequiredCjs = 1;
  var __importDefault = cjs && cjs.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
  };
  var style_to_object_1 = __importDefault(requireCjs$1());
  var utilities_1 = requireUtilities();
  function StyleToJS(style2, options) {
    var output = {};
    if (!style2 || typeof style2 !== "string") {
      return output;
    }
    (0, style_to_object_1.default)(style2, function(property, value) {
      if (property && value) {
        output[(0, utilities_1.camelCase)(property, options)] = value;
      }
    });
    return output;
  }
  StyleToJS.default = StyleToJS;
  cjs = StyleToJS;
  return cjs;
}
var cjsExports = requireCjs();
const styleToJs = /* @__PURE__ */ getDefaultExportFromCjs(cjsExports);
const own$2 = {}.hasOwnProperty;
const emptyMap = /* @__PURE__ */ new Map();
const cap = /[A-Z]/g;
const tableElements = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]);
const tableCellElement = /* @__PURE__ */ new Set(["td", "th"]);
const docs = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function toJsxRuntime(tree, options) {
  if (!options || options.Fragment === void 0) {
    throw new TypeError("Expected `Fragment` in options");
  }
  const filePath = options.filePath || void 0;
  let create2;
  if (options.development) {
    if (typeof options.jsxDEV !== "function") {
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    }
    create2 = developmentCreate(filePath, options.jsxDEV);
  } else {
    if (typeof options.jsx !== "function") {
      throw new TypeError("Expected `jsx` in production options");
    }
    if (typeof options.jsxs !== "function") {
      throw new TypeError("Expected `jsxs` in production options");
    }
    create2 = productionCreate(filePath, options.jsx, options.jsxs);
  }
  const state = {
    Fragment: options.Fragment,
    ancestors: [],
    components: options.components || {},
    create: create2,
    elementAttributeNameCase: options.elementAttributeNameCase || "react",
    evaluater: options.createEvaluater ? options.createEvaluater() : void 0,
    filePath,
    ignoreInvalidStyle: options.ignoreInvalidStyle || false,
    passKeys: options.passKeys !== false,
    passNode: options.passNode || false,
    schema: options.space === "svg" ? svg : html,
    stylePropertyNameCase: options.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: options.tableCellAlignToStyle !== false
  };
  const result = one$2(state, tree, void 0);
  if (result && typeof result !== "string") {
    return result;
  }
  return state.create(
    tree,
    state.Fragment,
    { children: result || void 0 },
    void 0
  );
}
function one$2(state, node2, key) {
  if (node2.type === "element") {
    return element$3(state, node2, key);
  }
  if (node2.type === "mdxFlowExpression" || node2.type === "mdxTextExpression") {
    return mdxExpression(state, node2);
  }
  if (node2.type === "mdxJsxFlowElement" || node2.type === "mdxJsxTextElement") {
    return mdxJsxElement(state, node2, key);
  }
  if (node2.type === "mdxjsEsm") {
    return mdxEsm(state, node2);
  }
  if (node2.type === "root") {
    return root$2(state, node2, key);
  }
  if (node2.type === "text") {
    return text$2(state, node2);
  }
}
function element$3(state, node2, key) {
  const parentSchema = state.schema;
  let schema = parentSchema;
  if (node2.tagName.toLowerCase() === "svg" && parentSchema.space === "html") {
    schema = svg;
    state.schema = schema;
  }
  state.ancestors.push(node2);
  const type = findComponentFromName(state, node2.tagName, false);
  const props = createElementProps(state, node2);
  let children = createChildren(state, node2);
  if (tableElements.has(node2.tagName)) {
    children = children.filter(function(child) {
      return typeof child === "string" ? !whitespace(child) : true;
    });
  }
  addNode(state, props, type, node2);
  addChildren(props, children);
  state.ancestors.pop();
  state.schema = parentSchema;
  return state.create(node2, type, props, key);
}
function mdxExpression(state, node2) {
  if (node2.data && node2.data.estree && state.evaluater) {
    const program = node2.data.estree;
    const expression = program.body[0];
    ok(expression.type === "ExpressionStatement");
    return (
      /** @type {Child | undefined} */
      state.evaluater.evaluateExpression(expression.expression)
    );
  }
  crashEstree(state, node2.position);
}
function mdxEsm(state, node2) {
  if (node2.data && node2.data.estree && state.evaluater) {
    return (
      /** @type {Child | undefined} */
      state.evaluater.evaluateProgram(node2.data.estree)
    );
  }
  crashEstree(state, node2.position);
}
function mdxJsxElement(state, node2, key) {
  const parentSchema = state.schema;
  let schema = parentSchema;
  if (node2.name === "svg" && parentSchema.space === "html") {
    schema = svg;
    state.schema = schema;
  }
  state.ancestors.push(node2);
  const type = node2.name === null ? state.Fragment : findComponentFromName(state, node2.name, true);
  const props = createJsxElementProps(state, node2);
  const children = createChildren(state, node2);
  addNode(state, props, type, node2);
  addChildren(props, children);
  state.ancestors.pop();
  state.schema = parentSchema;
  return state.create(node2, type, props, key);
}
function root$2(state, node2, key) {
  const props = {};
  addChildren(props, createChildren(state, node2));
  return state.create(node2, state.Fragment, props, key);
}
function text$2(_, node2) {
  return node2.value;
}
function addNode(state, props, type, node2) {
  if (typeof type !== "string" && type !== state.Fragment && state.passNode) {
    props.node = node2;
  }
}
function addChildren(props, children) {
  if (children.length > 0) {
    const value = children.length > 1 ? children : children[0];
    if (value) {
      props.children = value;
    }
  }
}
function productionCreate(_, jsx, jsxs) {
  return create2;
  function create2(_2, type, props, key) {
    const isStaticChildren = Array.isArray(props.children);
    const fn = isStaticChildren ? jsxs : jsx;
    return key ? fn(type, props, key) : fn(type, props);
  }
}
function developmentCreate(filePath, jsxDEV) {
  return create2;
  function create2(node2, type, props, key) {
    const isStaticChildren = Array.isArray(props.children);
    const point2 = pointStart(node2);
    return jsxDEV(
      type,
      props,
      key,
      isStaticChildren,
      {
        columnNumber: point2 ? point2.column - 1 : void 0,
        fileName: filePath,
        lineNumber: point2 ? point2.line : void 0
      },
      void 0
    );
  }
}
function createElementProps(state, node2) {
  const props = {};
  let alignValue;
  let prop;
  for (prop in node2.properties) {
    if (prop !== "children" && own$2.call(node2.properties, prop)) {
      const result = createProperty$1(state, prop, node2.properties[prop]);
      if (result) {
        const [key, value] = result;
        if (state.tableCellAlignToStyle && key === "align" && typeof value === "string" && tableCellElement.has(node2.tagName)) {
          alignValue = value;
        } else {
          props[key] = value;
        }
      }
    }
  }
  if (alignValue) {
    const style2 = (
      /** @type {Style} */
      props.style || (props.style = {})
    );
    style2[state.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = alignValue;
  }
  return props;
}
function createJsxElementProps(state, node2) {
  const props = {};
  for (const attribute of node2.attributes) {
    if (attribute.type === "mdxJsxExpressionAttribute") {
      if (attribute.data && attribute.data.estree && state.evaluater) {
        const program = attribute.data.estree;
        const expression = program.body[0];
        ok(expression.type === "ExpressionStatement");
        const objectExpression = expression.expression;
        ok(objectExpression.type === "ObjectExpression");
        const property = objectExpression.properties[0];
        ok(property.type === "SpreadElement");
        Object.assign(
          props,
          state.evaluater.evaluateExpression(property.argument)
        );
      } else {
        crashEstree(state, node2.position);
      }
    } else {
      const name2 = attribute.name;
      let value;
      if (attribute.value && typeof attribute.value === "object") {
        if (attribute.value.data && attribute.value.data.estree && state.evaluater) {
          const program = attribute.value.data.estree;
          const expression = program.body[0];
          ok(expression.type === "ExpressionStatement");
          value = state.evaluater.evaluateExpression(expression.expression);
        } else {
          crashEstree(state, node2.position);
        }
      } else {
        value = attribute.value === null ? true : attribute.value;
      }
      props[name2] = /** @type {Props[keyof Props]} */
      value;
    }
  }
  return props;
}
function createChildren(state, node2) {
  const children = [];
  let index2 = -1;
  const countsByName = state.passKeys ? /* @__PURE__ */ new Map() : emptyMap;
  while (++index2 < node2.children.length) {
    const child = node2.children[index2];
    let key;
    if (state.passKeys) {
      const name2 = child.type === "element" ? child.tagName : child.type === "mdxJsxFlowElement" || child.type === "mdxJsxTextElement" ? child.name : void 0;
      if (name2) {
        const count = countsByName.get(name2) || 0;
        key = name2 + "-" + count;
        countsByName.set(name2, count + 1);
      }
    }
    const result = one$2(state, child, key);
    if (result !== void 0) children.push(result);
  }
  return children;
}
function createProperty$1(state, prop, value) {
  const info = find(state.schema, prop);
  if (value === null || value === void 0 || typeof value === "number" && Number.isNaN(value)) {
    return;
  }
  if (Array.isArray(value)) {
    value = info.commaSeparated ? stringify$1(value) : stringify(value);
  }
  if (info.property === "style") {
    let styleObject = typeof value === "object" ? value : parseStyle(state, String(value));
    if (state.stylePropertyNameCase === "css") {
      styleObject = transformStylesToCssCasing(styleObject);
    }
    return ["style", styleObject];
  }
  return [
    state.elementAttributeNameCase === "react" && info.space ? hastToReact[info.property] || info.property : info.attribute,
    value
  ];
}
function parseStyle(state, value) {
  try {
    return styleToJs(value, { reactCompat: true });
  } catch (error) {
    if (state.ignoreInvalidStyle) {
      return {};
    }
    const cause = (
      /** @type {Error} */
      error
    );
    const message = new VFileMessage("Cannot parse `style` attribute", {
      ancestors: state.ancestors,
      cause,
      ruleId: "style",
      source: "hast-util-to-jsx-runtime"
    });
    message.file = state.filePath || void 0;
    message.url = docs + "#cannot-parse-style-attribute";
    throw message;
  }
}
function findComponentFromName(state, name$1, allowExpression) {
  let result;
  if (!allowExpression) {
    result = { type: "Literal", value: name$1 };
  } else if (name$1.includes(".")) {
    const identifiers = name$1.split(".");
    let index2 = -1;
    let node2;
    while (++index2 < identifiers.length) {
      const prop = name(identifiers[index2]) ? { type: "Identifier", name: identifiers[index2] } : { type: "Literal", value: identifiers[index2] };
      node2 = node2 ? {
        type: "MemberExpression",
        object: node2,
        property: prop,
        computed: Boolean(index2 && prop.type === "Literal"),
        optional: false
      } : prop;
    }
    result = node2;
  } else {
    result = name(name$1) && !/^[a-z]/.test(name$1) ? { type: "Identifier", name: name$1 } : { type: "Literal", value: name$1 };
  }
  if (result.type === "Literal") {
    const name2 = (
      /** @type {string | number} */
      result.value
    );
    return own$2.call(state.components, name2) ? state.components[name2] : name2;
  }
  if (state.evaluater) {
    return state.evaluater.evaluateExpression(result);
  }
  crashEstree(state);
}
function crashEstree(state, place) {
  const message = new VFileMessage(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: state.ancestors,
      place,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  message.file = state.filePath || void 0;
  message.url = docs + "#cannot-handle-mdx-estrees-without-createevaluater";
  throw message;
}
function transformStylesToCssCasing(domCasing) {
  const cssCasing = {};
  let from;
  for (from in domCasing) {
    if (own$2.call(domCasing, from)) {
      cssCasing[transformStyleToCssCasing(from)] = domCasing[from];
    }
  }
  return cssCasing;
}
function transformStyleToCssCasing(from) {
  let to = from.replace(cap, toDash);
  if (to.slice(0, 3) === "ms-") to = "-" + to;
  return to;
}
function toDash($0) {
  return "-" + $0.toLowerCase();
}
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
  function parse2(file, _props) {
    return processor.parse(file);
  }
  return {
    Markdown(props) {
      const { async = false, children } = props;
      const file = new VFile(children);
      const key = String(file.value);
      if (async) {
        promises[key] ??= processor.run(parse2(file), file);
        return render(reactExports.use(promises[key]), file, props);
      }
      cache[key] ??= processor.runSync(parse2(file), file);
      return render(cache[key], file, props);
    },
    async MarkdownServer(props) {
      const file = new VFile(props.children);
      return render(await processor.run(parse2(file), file), file, props);
    }
  };
}
const search = /[#.]/g;
function parseSelector(selector, defaultTagName) {
  const value = selector || "";
  const props = {};
  let start = 0;
  let previous2;
  let tagName;
  while (start < value.length) {
    search.lastIndex = start;
    const match = search.exec(value);
    const subvalue = value.slice(start, match ? match.index : value.length);
    if (subvalue) {
      if (!previous2) {
        tagName = subvalue;
      } else if (previous2 === "#") {
        props.id = subvalue;
      } else if (Array.isArray(props.className)) {
        props.className.push(subvalue);
      } else {
        props.className = [subvalue];
      }
      start += subvalue.length;
    }
    if (match) {
      previous2 = match[0];
      start++;
    }
  }
  return {
    type: "element",
    // @ts-expect-error: tag name is parsed.
    tagName: tagName || defaultTagName || "div",
    properties: props,
    children: []
  };
}
function createH(schema, defaultTagName, caseSensitive) {
  const adjust = caseSensitive ? createAdjustMap(caseSensitive) : void 0;
  function h2(selector, properties, ...children) {
    let node2;
    if (selector === null || selector === void 0) {
      node2 = { type: "root", children: [] };
      const child = (
        /** @type {Child} */
        properties
      );
      children.unshift(child);
    } else {
      node2 = parseSelector(selector, defaultTagName);
      const lower = node2.tagName.toLowerCase();
      const adjusted = adjust ? adjust.get(lower) : void 0;
      node2.tagName = adjusted || lower;
      if (isChild(properties)) {
        children.unshift(properties);
      } else {
        for (const [key, value] of Object.entries(properties)) {
          addProperty(schema, node2.properties, key, value);
        }
      }
    }
    for (const child of children) {
      addChild(node2.children, child);
    }
    if (node2.type === "element" && node2.tagName === "template") {
      node2.content = { type: "root", children: node2.children };
      node2.children = [];
    }
    return node2;
  }
  return h2;
}
function isChild(value) {
  if (value === null || typeof value !== "object" || Array.isArray(value)) {
    return true;
  }
  if (typeof value.type !== "string") return false;
  const record = (
    /** @type {Record<string, unknown>} */
    value
  );
  const keys2 = Object.keys(value);
  for (const key of keys2) {
    const value2 = record[key];
    if (value2 && typeof value2 === "object") {
      if (!Array.isArray(value2)) return true;
      const list2 = (
        /** @type {ReadonlyArray<unknown>} */
        value2
      );
      for (const item of list2) {
        if (typeof item !== "number" && typeof item !== "string") {
          return true;
        }
      }
    }
  }
  if ("children" in value && Array.isArray(value.children)) {
    return true;
  }
  return false;
}
function addProperty(schema, properties, key, value) {
  const info = find(schema, key);
  let result;
  if (value === null || value === void 0) return;
  if (typeof value === "number") {
    if (Number.isNaN(value)) return;
    result = value;
  } else if (typeof value === "boolean") {
    result = value;
  } else if (typeof value === "string") {
    if (info.spaceSeparated) {
      result = parse(value);
    } else if (info.commaSeparated) {
      result = parse$1(value);
    } else if (info.commaOrSpaceSeparated) {
      result = parse(parse$1(value).join(" "));
    } else {
      result = parsePrimitive(info, info.property, value);
    }
  } else if (Array.isArray(value)) {
    result = [...value];
  } else {
    result = info.property === "style" ? style(value) : String(value);
  }
  if (Array.isArray(result)) {
    const finalResult = [];
    for (const item of result) {
      finalResult.push(
        /** @type {number | string} */
        parsePrimitive(info, info.property, item)
      );
    }
    result = finalResult;
  }
  if (info.property === "className" && Array.isArray(properties.className)) {
    result = properties.className.concat(
      /** @type {Array<number | string> | number | string} */
      result
    );
  }
  properties[info.property] = result;
}
function addChild(nodes, value) {
  if (value === null || value === void 0) ;
  else if (typeof value === "number" || typeof value === "string") {
    nodes.push({ type: "text", value: String(value) });
  } else if (Array.isArray(value)) {
    for (const child of value) {
      addChild(nodes, child);
    }
  } else if (typeof value === "object" && "type" in value) {
    if (value.type === "root") {
      addChild(nodes, value.children);
    } else {
      nodes.push(value);
    }
  } else {
    throw new Error("Expected node, nodes, or string, got `" + value + "`");
  }
}
function parsePrimitive(info, name2, value) {
  if (typeof value === "string") {
    if (info.number && value && !Number.isNaN(Number(value))) {
      return Number(value);
    }
    if ((info.boolean || info.overloadedBoolean) && (value === "" || normalize(value) === normalize(name2))) {
      return true;
    }
  }
  return value;
}
function style(styles) {
  const result = [];
  for (const [key, value] of Object.entries(styles)) {
    result.push([key, value].join(": "));
  }
  return result.join("; ");
}
function createAdjustMap(values) {
  const result = /* @__PURE__ */ new Map();
  for (const value of values) {
    result.set(value.toLowerCase(), value);
  }
  return result;
}
const svgCaseSensitiveTagNames = [
  "altGlyph",
  "altGlyphDef",
  "altGlyphItem",
  "animateColor",
  "animateMotion",
  "animateTransform",
  "clipPath",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "foreignObject",
  "glyphRef",
  "linearGradient",
  "radialGradient",
  "solidColor",
  "textArea",
  "textPath"
];
const h = createH(html, "div");
const s = createH(svg, "g", svgCaseSensitiveTagNames);
function location(file) {
  const value = String(file);
  const indices = [];
  return { toOffset, toPoint };
  function toPoint(offset) {
    if (typeof offset === "number" && offset > -1 && offset <= value.length) {
      let index2 = 0;
      while (true) {
        let end = indices[index2];
        if (end === void 0) {
          const eol2 = next(value, indices[index2 - 1]);
          end = eol2 === -1 ? value.length + 1 : eol2 + 1;
          indices[index2] = end;
        }
        if (end > offset) {
          return {
            line: index2 + 1,
            column: offset - (index2 > 0 ? indices[index2 - 1] : 0) + 1,
            offset
          };
        }
        index2++;
      }
    }
  }
  function toOffset(point2) {
    if (point2 && typeof point2.line === "number" && typeof point2.column === "number" && !Number.isNaN(point2.line) && !Number.isNaN(point2.column)) {
      while (indices.length < point2.line) {
        const from = indices[indices.length - 1];
        const eol2 = next(value, from);
        const end = eol2 === -1 ? value.length + 1 : eol2 + 1;
        if (from === end) break;
        indices.push(end);
      }
      const offset = (point2.line > 1 ? indices[point2.line - 2] : 0) + point2.column - 1;
      if (offset < indices[point2.line - 1]) return offset;
    }
  }
}
function next(value, from) {
  const cr = value.indexOf("\r", from);
  const lf = value.indexOf("\n", from);
  if (lf === -1) return cr;
  if (cr === -1 || cr + 1 === lf) return lf;
  return cr < lf ? cr : lf;
}
const webNamespaces = {
  html: "http://www.w3.org/1999/xhtml",
  mathml: "http://www.w3.org/1998/Math/MathML",
  svg: "http://www.w3.org/2000/svg",
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
const own$1 = {}.hasOwnProperty;
const proto = Object.prototype;
function fromParse5(tree, options) {
  const settings = options || {};
  return one$1(
    {
      file: settings.file || void 0,
      location: false,
      schema: settings.space === "svg" ? svg : html,
      verbose: settings.verbose || false
    },
    tree
  );
}
function one$1(state, node2) {
  let result;
  switch (node2.nodeName) {
    case "#comment": {
      const reference = (
        /** @type {DefaultTreeAdapterMap['commentNode']} */
        node2
      );
      result = { type: "comment", value: reference.data };
      patch$1(state, reference, result);
      return result;
    }
    case "#document":
    case "#document-fragment": {
      const reference = (
        /** @type {DefaultTreeAdapterMap['document'] | DefaultTreeAdapterMap['documentFragment']} */
        node2
      );
      const quirksMode = "mode" in reference ? reference.mode === "quirks" || reference.mode === "limited-quirks" : false;
      result = {
        type: "root",
        children: all$2(state, node2.childNodes),
        data: { quirksMode }
      };
      if (state.file && state.location) {
        const document2 = String(state.file);
        const loc = location(document2);
        const start = loc.toPoint(0);
        const end = loc.toPoint(document2.length);
        result.position = { start, end };
      }
      return result;
    }
    case "#documentType": {
      const reference = (
        /** @type {DefaultTreeAdapterMap['documentType']} */
        node2
      );
      result = { type: "doctype" };
      patch$1(state, reference, result);
      return result;
    }
    case "#text": {
      const reference = (
        /** @type {DefaultTreeAdapterMap['textNode']} */
        node2
      );
      result = { type: "text", value: reference.value };
      patch$1(state, reference, result);
      return result;
    }
    // Element.
    default: {
      const reference = (
        /** @type {DefaultTreeAdapterMap['element']} */
        node2
      );
      result = element$2(state, reference);
      return result;
    }
  }
}
function all$2(state, nodes) {
  let index2 = -1;
  const results = [];
  while (++index2 < nodes.length) {
    const result = (
      /** @type {RootContent} */
      one$1(state, nodes[index2])
    );
    results.push(result);
  }
  return results;
}
function element$2(state, node2) {
  const schema = state.schema;
  state.schema = node2.namespaceURI === webNamespaces.svg ? svg : html;
  let index2 = -1;
  const properties = {};
  while (++index2 < node2.attrs.length) {
    const attribute = node2.attrs[index2];
    const name2 = (attribute.prefix ? attribute.prefix + ":" : "") + attribute.name;
    if (!own$1.call(proto, name2)) {
      properties[name2] = attribute.value;
    }
  }
  const x = state.schema.space === "svg" ? s : h;
  const result = x(node2.tagName, properties, all$2(state, node2.childNodes));
  patch$1(state, node2, result);
  if (result.tagName === "template") {
    const reference = (
      /** @type {DefaultTreeAdapterMap['template']} */
      node2
    );
    const pos = reference.sourceCodeLocation;
    const startTag2 = pos && pos.startTag && position(pos.startTag);
    const endTag2 = pos && pos.endTag && position(pos.endTag);
    const content2 = (
      /** @type {Root} */
      one$1(state, reference.content)
    );
    if (startTag2 && endTag2 && state.file) {
      content2.position = { start: startTag2.end, end: endTag2.start };
    }
    result.content = content2;
  }
  state.schema = schema;
  return result;
}
function patch$1(state, from, to) {
  if ("sourceCodeLocation" in from && from.sourceCodeLocation && state.file) {
    const position2 = createLocation(state, to, from.sourceCodeLocation);
    if (position2) {
      state.location = true;
      to.position = position2;
    }
  }
}
function createLocation(state, node2, location2) {
  const result = position(location2);
  if (node2.type === "element") {
    const tail = node2.children[node2.children.length - 1];
    if (result && !location2.endTag && tail && tail.position && tail.position.end) {
      result.end = Object.assign({}, tail.position.end);
    }
    if (state.verbose) {
      const properties = {};
      let key;
      if (location2.attrs) {
        for (key in location2.attrs) {
          if (own$1.call(location2.attrs, key)) {
            properties[find(state.schema, key).property] = position(
              location2.attrs[key]
            );
          }
        }
      }
      ok(location2.startTag);
      const opening = position(location2.startTag);
      const closing = location2.endTag ? position(location2.endTag) : void 0;
      const data = { opening };
      if (closing) data.closing = closing;
      data.properties = properties;
      node2.data = { position: data };
    }
  }
  return result;
}
function position(loc) {
  const start = point({
    line: loc.startLine,
    column: loc.startCol,
    offset: loc.startOffset
  });
  const end = point({
    line: loc.endLine,
    column: loc.endCol,
    offset: loc.endOffset
  });
  return start || end ? { start, end } : void 0;
}
function point(point2) {
  return point2.line && point2.column ? point2 : void 0;
}
const emptyOptions = {};
const own = {}.hasOwnProperty;
const one = zwitch("type", { handlers: { root: root$1, element: element$1, text: text$1, comment: comment$1, doctype: doctype$1 } });
function toParse5(tree, options) {
  const settings = options || emptyOptions;
  const space2 = settings.space;
  return one(tree, space2 === "svg" ? svg : html);
}
function root$1(node2, schema) {
  const result = {
    nodeName: "#document",
    // @ts-expect-error: `parse5` uses enums, which are actually strings.
    mode: (node2.data || {}).quirksMode ? "quirks" : "no-quirks",
    childNodes: []
  };
  result.childNodes = all$1(node2.children, result, schema);
  patch(node2, result);
  return result;
}
function fragment(node2, schema) {
  const result = { nodeName: "#document-fragment", childNodes: [] };
  result.childNodes = all$1(node2.children, result, schema);
  patch(node2, result);
  return result;
}
function doctype$1(node2) {
  const result = {
    nodeName: "#documentType",
    name: "html",
    publicId: "",
    systemId: "",
    parentNode: null
  };
  patch(node2, result);
  return result;
}
function text$1(node2) {
  const result = {
    nodeName: "#text",
    value: node2.value,
    parentNode: null
  };
  patch(node2, result);
  return result;
}
function comment$1(node2) {
  const result = {
    nodeName: "#comment",
    data: node2.value,
    parentNode: null
  };
  patch(node2, result);
  return result;
}
function element$1(node2, schema) {
  const parentSchema = schema;
  let currentSchema = parentSchema;
  if (node2.type === "element" && node2.tagName.toLowerCase() === "svg" && parentSchema.space === "html") {
    currentSchema = svg;
  }
  const attrs = [];
  let prop;
  if (node2.properties) {
    for (prop in node2.properties) {
      if (prop !== "children" && own.call(node2.properties, prop)) {
        const result2 = createProperty(
          currentSchema,
          prop,
          node2.properties[prop]
        );
        if (result2) {
          attrs.push(result2);
        }
      }
    }
  }
  const space2 = currentSchema.space;
  const result = {
    nodeName: node2.tagName,
    tagName: node2.tagName,
    attrs,
    // @ts-expect-error: `parse5` types are wrong.
    namespaceURI: webNamespaces[space2],
    childNodes: [],
    parentNode: null
  };
  result.childNodes = all$1(node2.children, result, currentSchema);
  patch(node2, result);
  if (node2.tagName === "template" && node2.content) {
    result.content = fragment(node2.content, currentSchema);
  }
  return result;
}
function createProperty(schema, prop, value) {
  const info = find(schema, prop);
  if (value === false || value === null || value === void 0 || typeof value === "number" && Number.isNaN(value) || !value && info.boolean) {
    return;
  }
  if (Array.isArray(value)) {
    value = info.commaSeparated ? stringify$1(value) : stringify(value);
  }
  const attribute = {
    name: info.attribute,
    value: value === true ? "" : String(value)
  };
  if (info.space && info.space !== "html" && info.space !== "svg") {
    const index2 = attribute.name.indexOf(":");
    if (index2 < 0) {
      attribute.prefix = "";
    } else {
      attribute.name = attribute.name.slice(index2 + 1);
      attribute.prefix = info.attribute.slice(0, index2);
    }
    attribute.namespace = webNamespaces[info.space];
  }
  return attribute;
}
function all$1(children, parentNode, schema) {
  let index2 = -1;
  const results = [];
  if (children) {
    while (++index2 < children.length) {
      const child = one(children[index2], schema);
      child.parentNode = parentNode;
      results.push(child);
    }
  }
  return results;
}
function patch(from, to) {
  const position2 = from.position;
  if (position2 && position2.start && position2.end) {
    ok(typeof position2.start.offset === "number");
    ok(typeof position2.end.offset === "number");
    to.sourceCodeLocation = {
      startLine: position2.start.line,
      startCol: position2.start.column,
      startOffset: position2.start.offset,
      endLine: position2.end.line,
      endCol: position2.end.column,
      endOffset: position2.end.offset
    };
  }
}
const htmlVoidElements = [
  "area",
  "base",
  "basefont",
  "bgsound",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "image",
  "img",
  "input",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
];
const UNDEFINED_CODE_POINTS = /* @__PURE__ */ new Set([
  65534,
  65535,
  131070,
  131071,
  196606,
  196607,
  262142,
  262143,
  327678,
  327679,
  393214,
  393215,
  458750,
  458751,
  524286,
  524287,
  589822,
  589823,
  655358,
  655359,
  720894,
  720895,
  786430,
  786431,
  851966,
  851967,
  917502,
  917503,
  983038,
  983039,
  1048574,
  1048575,
  1114110,
  1114111
]);
const REPLACEMENT_CHARACTER = "�";
var CODE_POINTS;
(function(CODE_POINTS2) {
  CODE_POINTS2[CODE_POINTS2["EOF"] = -1] = "EOF";
  CODE_POINTS2[CODE_POINTS2["NULL"] = 0] = "NULL";
  CODE_POINTS2[CODE_POINTS2["TABULATION"] = 9] = "TABULATION";
  CODE_POINTS2[CODE_POINTS2["CARRIAGE_RETURN"] = 13] = "CARRIAGE_RETURN";
  CODE_POINTS2[CODE_POINTS2["LINE_FEED"] = 10] = "LINE_FEED";
  CODE_POINTS2[CODE_POINTS2["FORM_FEED"] = 12] = "FORM_FEED";
  CODE_POINTS2[CODE_POINTS2["SPACE"] = 32] = "SPACE";
  CODE_POINTS2[CODE_POINTS2["EXCLAMATION_MARK"] = 33] = "EXCLAMATION_MARK";
  CODE_POINTS2[CODE_POINTS2["QUOTATION_MARK"] = 34] = "QUOTATION_MARK";
  CODE_POINTS2[CODE_POINTS2["AMPERSAND"] = 38] = "AMPERSAND";
  CODE_POINTS2[CODE_POINTS2["APOSTROPHE"] = 39] = "APOSTROPHE";
  CODE_POINTS2[CODE_POINTS2["HYPHEN_MINUS"] = 45] = "HYPHEN_MINUS";
  CODE_POINTS2[CODE_POINTS2["SOLIDUS"] = 47] = "SOLIDUS";
  CODE_POINTS2[CODE_POINTS2["DIGIT_0"] = 48] = "DIGIT_0";
  CODE_POINTS2[CODE_POINTS2["DIGIT_9"] = 57] = "DIGIT_9";
  CODE_POINTS2[CODE_POINTS2["SEMICOLON"] = 59] = "SEMICOLON";
  CODE_POINTS2[CODE_POINTS2["LESS_THAN_SIGN"] = 60] = "LESS_THAN_SIGN";
  CODE_POINTS2[CODE_POINTS2["EQUALS_SIGN"] = 61] = "EQUALS_SIGN";
  CODE_POINTS2[CODE_POINTS2["GREATER_THAN_SIGN"] = 62] = "GREATER_THAN_SIGN";
  CODE_POINTS2[CODE_POINTS2["QUESTION_MARK"] = 63] = "QUESTION_MARK";
  CODE_POINTS2[CODE_POINTS2["LATIN_CAPITAL_A"] = 65] = "LATIN_CAPITAL_A";
  CODE_POINTS2[CODE_POINTS2["LATIN_CAPITAL_Z"] = 90] = "LATIN_CAPITAL_Z";
  CODE_POINTS2[CODE_POINTS2["RIGHT_SQUARE_BRACKET"] = 93] = "RIGHT_SQUARE_BRACKET";
  CODE_POINTS2[CODE_POINTS2["GRAVE_ACCENT"] = 96] = "GRAVE_ACCENT";
  CODE_POINTS2[CODE_POINTS2["LATIN_SMALL_A"] = 97] = "LATIN_SMALL_A";
  CODE_POINTS2[CODE_POINTS2["LATIN_SMALL_Z"] = 122] = "LATIN_SMALL_Z";
})(CODE_POINTS || (CODE_POINTS = {}));
const SEQUENCES = {
  DASH_DASH: "--",
  CDATA_START: "[CDATA[",
  DOCTYPE: "doctype",
  SCRIPT: "script",
  PUBLIC: "public",
  SYSTEM: "system"
};
function isSurrogate(cp) {
  return cp >= 55296 && cp <= 57343;
}
function isSurrogatePair(cp) {
  return cp >= 56320 && cp <= 57343;
}
function getSurrogatePairCodePoint(cp1, cp2) {
  return (cp1 - 55296) * 1024 + 9216 + cp2;
}
function isControlCodePoint(cp) {
  return cp !== 32 && cp !== 10 && cp !== 13 && cp !== 9 && cp !== 12 && cp >= 1 && cp <= 31 || cp >= 127 && cp <= 159;
}
function isUndefinedCodePoint(cp) {
  return cp >= 64976 && cp <= 65007 || UNDEFINED_CODE_POINTS.has(cp);
}
var ERR;
(function(ERR2) {
  ERR2["controlCharacterInInputStream"] = "control-character-in-input-stream";
  ERR2["noncharacterInInputStream"] = "noncharacter-in-input-stream";
  ERR2["surrogateInInputStream"] = "surrogate-in-input-stream";
  ERR2["nonVoidHtmlElementStartTagWithTrailingSolidus"] = "non-void-html-element-start-tag-with-trailing-solidus";
  ERR2["endTagWithAttributes"] = "end-tag-with-attributes";
  ERR2["endTagWithTrailingSolidus"] = "end-tag-with-trailing-solidus";
  ERR2["unexpectedSolidusInTag"] = "unexpected-solidus-in-tag";
  ERR2["unexpectedNullCharacter"] = "unexpected-null-character";
  ERR2["unexpectedQuestionMarkInsteadOfTagName"] = "unexpected-question-mark-instead-of-tag-name";
  ERR2["invalidFirstCharacterOfTagName"] = "invalid-first-character-of-tag-name";
  ERR2["unexpectedEqualsSignBeforeAttributeName"] = "unexpected-equals-sign-before-attribute-name";
  ERR2["missingEndTagName"] = "missing-end-tag-name";
  ERR2["unexpectedCharacterInAttributeName"] = "unexpected-character-in-attribute-name";
  ERR2["unknownNamedCharacterReference"] = "unknown-named-character-reference";
  ERR2["missingSemicolonAfterCharacterReference"] = "missing-semicolon-after-character-reference";
  ERR2["unexpectedCharacterAfterDoctypeSystemIdentifier"] = "unexpected-character-after-doctype-system-identifier";
  ERR2["unexpectedCharacterInUnquotedAttributeValue"] = "unexpected-character-in-unquoted-attribute-value";
  ERR2["eofBeforeTagName"] = "eof-before-tag-name";
  ERR2["eofInTag"] = "eof-in-tag";
  ERR2["missingAttributeValue"] = "missing-attribute-value";
  ERR2["missingWhitespaceBetweenAttributes"] = "missing-whitespace-between-attributes";
  ERR2["missingWhitespaceAfterDoctypePublicKeyword"] = "missing-whitespace-after-doctype-public-keyword";
  ERR2["missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers"] = "missing-whitespace-between-doctype-public-and-system-identifiers";
  ERR2["missingWhitespaceAfterDoctypeSystemKeyword"] = "missing-whitespace-after-doctype-system-keyword";
  ERR2["missingQuoteBeforeDoctypePublicIdentifier"] = "missing-quote-before-doctype-public-identifier";
  ERR2["missingQuoteBeforeDoctypeSystemIdentifier"] = "missing-quote-before-doctype-system-identifier";
  ERR2["missingDoctypePublicIdentifier"] = "missing-doctype-public-identifier";
  ERR2["missingDoctypeSystemIdentifier"] = "missing-doctype-system-identifier";
  ERR2["abruptDoctypePublicIdentifier"] = "abrupt-doctype-public-identifier";
  ERR2["abruptDoctypeSystemIdentifier"] = "abrupt-doctype-system-identifier";
  ERR2["cdataInHtmlContent"] = "cdata-in-html-content";
  ERR2["incorrectlyOpenedComment"] = "incorrectly-opened-comment";
  ERR2["eofInScriptHtmlCommentLikeText"] = "eof-in-script-html-comment-like-text";
  ERR2["eofInDoctype"] = "eof-in-doctype";
  ERR2["nestedComment"] = "nested-comment";
  ERR2["abruptClosingOfEmptyComment"] = "abrupt-closing-of-empty-comment";
  ERR2["eofInComment"] = "eof-in-comment";
  ERR2["incorrectlyClosedComment"] = "incorrectly-closed-comment";
  ERR2["eofInCdata"] = "eof-in-cdata";
  ERR2["absenceOfDigitsInNumericCharacterReference"] = "absence-of-digits-in-numeric-character-reference";
  ERR2["nullCharacterReference"] = "null-character-reference";
  ERR2["surrogateCharacterReference"] = "surrogate-character-reference";
  ERR2["characterReferenceOutsideUnicodeRange"] = "character-reference-outside-unicode-range";
  ERR2["controlCharacterReference"] = "control-character-reference";
  ERR2["noncharacterCharacterReference"] = "noncharacter-character-reference";
  ERR2["missingWhitespaceBeforeDoctypeName"] = "missing-whitespace-before-doctype-name";
  ERR2["missingDoctypeName"] = "missing-doctype-name";
  ERR2["invalidCharacterSequenceAfterDoctypeName"] = "invalid-character-sequence-after-doctype-name";
  ERR2["duplicateAttribute"] = "duplicate-attribute";
  ERR2["nonConformingDoctype"] = "non-conforming-doctype";
  ERR2["missingDoctype"] = "missing-doctype";
  ERR2["misplacedDoctype"] = "misplaced-doctype";
  ERR2["endTagWithoutMatchingOpenElement"] = "end-tag-without-matching-open-element";
  ERR2["closingOfElementWithOpenChildElements"] = "closing-of-element-with-open-child-elements";
  ERR2["disallowedContentInNoscriptInHead"] = "disallowed-content-in-noscript-in-head";
  ERR2["openElementsLeftAfterEof"] = "open-elements-left-after-eof";
  ERR2["abandonedHeadElementChild"] = "abandoned-head-element-child";
  ERR2["misplacedStartTagForHeadElement"] = "misplaced-start-tag-for-head-element";
  ERR2["nestedNoscriptInHead"] = "nested-noscript-in-head";
  ERR2["eofInElementThatCanContainOnlyText"] = "eof-in-element-that-can-contain-only-text";
})(ERR || (ERR = {}));
const DEFAULT_BUFFER_WATERLINE = 1 << 16;
class Preprocessor {
  constructor(handler) {
    this.handler = handler;
    this.html = "";
    this.pos = -1;
    this.lastGapPos = -2;
    this.gapStack = [];
    this.skipNextNewLine = false;
    this.lastChunkWritten = false;
    this.endOfChunkHit = false;
    this.bufferWaterline = DEFAULT_BUFFER_WATERLINE;
    this.isEol = false;
    this.lineStartPos = 0;
    this.droppedBufferSize = 0;
    this.line = 1;
    this.lastErrOffset = -1;
  }
  /** The column on the current line. If we just saw a gap (eg. a surrogate pair), return the index before. */
  get col() {
    return this.pos - this.lineStartPos + Number(this.lastGapPos !== this.pos);
  }
  get offset() {
    return this.droppedBufferSize + this.pos;
  }
  getError(code2, cpOffset) {
    const { line, col, offset } = this;
    const startCol = col + cpOffset;
    const startOffset = offset + cpOffset;
    return {
      code: code2,
      startLine: line,
      endLine: line,
      startCol,
      endCol: startCol,
      startOffset,
      endOffset: startOffset
    };
  }
  _err(code2) {
    if (this.handler.onParseError && this.lastErrOffset !== this.offset) {
      this.lastErrOffset = this.offset;
      this.handler.onParseError(this.getError(code2, 0));
    }
  }
  _addGap() {
    this.gapStack.push(this.lastGapPos);
    this.lastGapPos = this.pos;
  }
  _processSurrogate(cp) {
    if (this.pos !== this.html.length - 1) {
      const nextCp = this.html.charCodeAt(this.pos + 1);
      if (isSurrogatePair(nextCp)) {
        this.pos++;
        this._addGap();
        return getSurrogatePairCodePoint(cp, nextCp);
      }
    } else if (!this.lastChunkWritten) {
      this.endOfChunkHit = true;
      return CODE_POINTS.EOF;
    }
    this._err(ERR.surrogateInInputStream);
    return cp;
  }
  willDropParsedChunk() {
    return this.pos > this.bufferWaterline;
  }
  dropParsedChunk() {
    if (this.willDropParsedChunk()) {
      this.html = this.html.substring(this.pos);
      this.lineStartPos -= this.pos;
      this.droppedBufferSize += this.pos;
      this.pos = 0;
      this.lastGapPos = -2;
      this.gapStack.length = 0;
    }
  }
  write(chunk, isLastChunk) {
    if (this.html.length > 0) {
      this.html += chunk;
    } else {
      this.html = chunk;
    }
    this.endOfChunkHit = false;
    this.lastChunkWritten = isLastChunk;
  }
  insertHtmlAtCurrentPos(chunk) {
    this.html = this.html.substring(0, this.pos + 1) + chunk + this.html.substring(this.pos + 1);
    this.endOfChunkHit = false;
  }
  startsWith(pattern, caseSensitive) {
    if (this.pos + pattern.length > this.html.length) {
      this.endOfChunkHit = !this.lastChunkWritten;
      return false;
    }
    if (caseSensitive) {
      return this.html.startsWith(pattern, this.pos);
    }
    for (let i = 0; i < pattern.length; i++) {
      const cp = this.html.charCodeAt(this.pos + i) | 32;
      if (cp !== pattern.charCodeAt(i)) {
        return false;
      }
    }
    return true;
  }
  peek(offset) {
    const pos = this.pos + offset;
    if (pos >= this.html.length) {
      this.endOfChunkHit = !this.lastChunkWritten;
      return CODE_POINTS.EOF;
    }
    const code2 = this.html.charCodeAt(pos);
    return code2 === CODE_POINTS.CARRIAGE_RETURN ? CODE_POINTS.LINE_FEED : code2;
  }
  advance() {
    this.pos++;
    if (this.isEol) {
      this.isEol = false;
      this.line++;
      this.lineStartPos = this.pos;
    }
    if (this.pos >= this.html.length) {
      this.endOfChunkHit = !this.lastChunkWritten;
      return CODE_POINTS.EOF;
    }
    let cp = this.html.charCodeAt(this.pos);
    if (cp === CODE_POINTS.CARRIAGE_RETURN) {
      this.isEol = true;
      this.skipNextNewLine = true;
      return CODE_POINTS.LINE_FEED;
    }
    if (cp === CODE_POINTS.LINE_FEED) {
      this.isEol = true;
      if (this.skipNextNewLine) {
        this.line--;
        this.skipNextNewLine = false;
        this._addGap();
        return this.advance();
      }
    }
    this.skipNextNewLine = false;
    if (isSurrogate(cp)) {
      cp = this._processSurrogate(cp);
    }
    const isCommonValidRange = this.handler.onParseError === null || cp > 31 && cp < 127 || cp === CODE_POINTS.LINE_FEED || cp === CODE_POINTS.CARRIAGE_RETURN || cp > 159 && cp < 64976;
    if (!isCommonValidRange) {
      this._checkForProblematicCharacters(cp);
    }
    return cp;
  }
  _checkForProblematicCharacters(cp) {
    if (isControlCodePoint(cp)) {
      this._err(ERR.controlCharacterInInputStream);
    } else if (isUndefinedCodePoint(cp)) {
      this._err(ERR.noncharacterInInputStream);
    }
  }
  retreat(count) {
    this.pos -= count;
    while (this.pos < this.lastGapPos) {
      this.lastGapPos = this.gapStack.pop();
      this.pos--;
    }
    this.isEol = false;
  }
}
var TokenType;
(function(TokenType2) {
  TokenType2[TokenType2["CHARACTER"] = 0] = "CHARACTER";
  TokenType2[TokenType2["NULL_CHARACTER"] = 1] = "NULL_CHARACTER";
  TokenType2[TokenType2["WHITESPACE_CHARACTER"] = 2] = "WHITESPACE_CHARACTER";
  TokenType2[TokenType2["START_TAG"] = 3] = "START_TAG";
  TokenType2[TokenType2["END_TAG"] = 4] = "END_TAG";
  TokenType2[TokenType2["COMMENT"] = 5] = "COMMENT";
  TokenType2[TokenType2["DOCTYPE"] = 6] = "DOCTYPE";
  TokenType2[TokenType2["EOF"] = 7] = "EOF";
  TokenType2[TokenType2["HIBERNATION"] = 8] = "HIBERNATION";
})(TokenType || (TokenType = {}));
function getTokenAttr(token, attrName) {
  for (let i = token.attrs.length - 1; i >= 0; i--) {
    if (token.attrs[i].name === attrName) {
      return token.attrs[i].value;
    }
  }
  return null;
}
const htmlDecodeTree = /* @__PURE__ */ new Uint16Array(
  // prettier-ignore
  /* @__PURE__ */ 'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map((c) => c.charCodeAt(0))
);
const decodeMap = /* @__PURE__ */ new Map([
  [0, 65533],
  // C1 Unicode control character reference replacements
  [128, 8364],
  [130, 8218],
  [131, 402],
  [132, 8222],
  [133, 8230],
  [134, 8224],
  [135, 8225],
  [136, 710],
  [137, 8240],
  [138, 352],
  [139, 8249],
  [140, 338],
  [142, 381],
  [145, 8216],
  [146, 8217],
  [147, 8220],
  [148, 8221],
  [149, 8226],
  [150, 8211],
  [151, 8212],
  [152, 732],
  [153, 8482],
  [154, 353],
  [155, 8250],
  [156, 339],
  [158, 382],
  [159, 376]
]);
function replaceCodePoint(codePoint) {
  var _a;
  if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) {
    return 65533;
  }
  return (_a = decodeMap.get(codePoint)) !== null && _a !== void 0 ? _a : codePoint;
}
var CharCodes;
(function(CharCodes2) {
  CharCodes2[CharCodes2["NUM"] = 35] = "NUM";
  CharCodes2[CharCodes2["SEMI"] = 59] = "SEMI";
  CharCodes2[CharCodes2["EQUALS"] = 61] = "EQUALS";
  CharCodes2[CharCodes2["ZERO"] = 48] = "ZERO";
  CharCodes2[CharCodes2["NINE"] = 57] = "NINE";
  CharCodes2[CharCodes2["LOWER_A"] = 97] = "LOWER_A";
  CharCodes2[CharCodes2["LOWER_F"] = 102] = "LOWER_F";
  CharCodes2[CharCodes2["LOWER_X"] = 120] = "LOWER_X";
  CharCodes2[CharCodes2["LOWER_Z"] = 122] = "LOWER_Z";
  CharCodes2[CharCodes2["UPPER_A"] = 65] = "UPPER_A";
  CharCodes2[CharCodes2["UPPER_F"] = 70] = "UPPER_F";
  CharCodes2[CharCodes2["UPPER_Z"] = 90] = "UPPER_Z";
})(CharCodes || (CharCodes = {}));
const TO_LOWER_BIT = 32;
var BinTrieFlags;
(function(BinTrieFlags2) {
  BinTrieFlags2[BinTrieFlags2["VALUE_LENGTH"] = 49152] = "VALUE_LENGTH";
  BinTrieFlags2[BinTrieFlags2["BRANCH_LENGTH"] = 16256] = "BRANCH_LENGTH";
  BinTrieFlags2[BinTrieFlags2["JUMP_TABLE"] = 127] = "JUMP_TABLE";
})(BinTrieFlags || (BinTrieFlags = {}));
function isNumber(code2) {
  return code2 >= CharCodes.ZERO && code2 <= CharCodes.NINE;
}
function isHexadecimalCharacter(code2) {
  return code2 >= CharCodes.UPPER_A && code2 <= CharCodes.UPPER_F || code2 >= CharCodes.LOWER_A && code2 <= CharCodes.LOWER_F;
}
function isAsciiAlphaNumeric$1(code2) {
  return code2 >= CharCodes.UPPER_A && code2 <= CharCodes.UPPER_Z || code2 >= CharCodes.LOWER_A && code2 <= CharCodes.LOWER_Z || isNumber(code2);
}
function isEntityInAttributeInvalidEnd(code2) {
  return code2 === CharCodes.EQUALS || isAsciiAlphaNumeric$1(code2);
}
var EntityDecoderState;
(function(EntityDecoderState2) {
  EntityDecoderState2[EntityDecoderState2["EntityStart"] = 0] = "EntityStart";
  EntityDecoderState2[EntityDecoderState2["NumericStart"] = 1] = "NumericStart";
  EntityDecoderState2[EntityDecoderState2["NumericDecimal"] = 2] = "NumericDecimal";
  EntityDecoderState2[EntityDecoderState2["NumericHex"] = 3] = "NumericHex";
  EntityDecoderState2[EntityDecoderState2["NamedEntity"] = 4] = "NamedEntity";
})(EntityDecoderState || (EntityDecoderState = {}));
var DecodingMode;
(function(DecodingMode2) {
  DecodingMode2[DecodingMode2["Legacy"] = 0] = "Legacy";
  DecodingMode2[DecodingMode2["Strict"] = 1] = "Strict";
  DecodingMode2[DecodingMode2["Attribute"] = 2] = "Attribute";
})(DecodingMode || (DecodingMode = {}));
class EntityDecoder {
  constructor(decodeTree, emitCodePoint, errors) {
    this.decodeTree = decodeTree;
    this.emitCodePoint = emitCodePoint;
    this.errors = errors;
    this.state = EntityDecoderState.EntityStart;
    this.consumed = 1;
    this.result = 0;
    this.treeIndex = 0;
    this.excess = 1;
    this.decodeMode = DecodingMode.Strict;
  }
  /** Resets the instance to make it reusable. */
  startEntity(decodeMode) {
    this.decodeMode = decodeMode;
    this.state = EntityDecoderState.EntityStart;
    this.result = 0;
    this.treeIndex = 0;
    this.excess = 1;
    this.consumed = 1;
  }
  /**
   * Write an entity to the decoder. This can be called multiple times with partial entities.
   * If the entity is incomplete, the decoder will return -1.
   *
   * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
   * entity is incomplete, and resume when the next string is written.
   *
   * @param input The string containing the entity (or a continuation of the entity).
   * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  write(input, offset) {
    switch (this.state) {
      case EntityDecoderState.EntityStart: {
        if (input.charCodeAt(offset) === CharCodes.NUM) {
          this.state = EntityDecoderState.NumericStart;
          this.consumed += 1;
          return this.stateNumericStart(input, offset + 1);
        }
        this.state = EntityDecoderState.NamedEntity;
        return this.stateNamedEntity(input, offset);
      }
      case EntityDecoderState.NumericStart: {
        return this.stateNumericStart(input, offset);
      }
      case EntityDecoderState.NumericDecimal: {
        return this.stateNumericDecimal(input, offset);
      }
      case EntityDecoderState.NumericHex: {
        return this.stateNumericHex(input, offset);
      }
      case EntityDecoderState.NamedEntity: {
        return this.stateNamedEntity(input, offset);
      }
    }
  }
  /**
   * Switches between the numeric decimal and hexadecimal states.
   *
   * Equivalent to the `Numeric character reference state` in the HTML spec.
   *
   * @param input The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericStart(input, offset) {
    if (offset >= input.length) {
      return -1;
    }
    if ((input.charCodeAt(offset) | TO_LOWER_BIT) === CharCodes.LOWER_X) {
      this.state = EntityDecoderState.NumericHex;
      this.consumed += 1;
      return this.stateNumericHex(input, offset + 1);
    }
    this.state = EntityDecoderState.NumericDecimal;
    return this.stateNumericDecimal(input, offset);
  }
  addToNumericResult(input, start, end, base) {
    if (start !== end) {
      const digitCount = end - start;
      this.result = this.result * Math.pow(base, digitCount) + Number.parseInt(input.substr(start, digitCount), base);
      this.consumed += digitCount;
    }
  }
  /**
   * Parses a hexadecimal numeric entity.
   *
   * Equivalent to the `Hexademical character reference state` in the HTML spec.
   *
   * @param input The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericHex(input, offset) {
    const startIndex = offset;
    while (offset < input.length) {
      const char = input.charCodeAt(offset);
      if (isNumber(char) || isHexadecimalCharacter(char)) {
        offset += 1;
      } else {
        this.addToNumericResult(input, startIndex, offset, 16);
        return this.emitNumericEntity(char, 3);
      }
    }
    this.addToNumericResult(input, startIndex, offset, 16);
    return -1;
  }
  /**
   * Parses a decimal numeric entity.
   *
   * Equivalent to the `Decimal character reference state` in the HTML spec.
   *
   * @param input The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericDecimal(input, offset) {
    const startIndex = offset;
    while (offset < input.length) {
      const char = input.charCodeAt(offset);
      if (isNumber(char)) {
        offset += 1;
      } else {
        this.addToNumericResult(input, startIndex, offset, 10);
        return this.emitNumericEntity(char, 2);
      }
    }
    this.addToNumericResult(input, startIndex, offset, 10);
    return -1;
  }
  /**
   * Validate and emit a numeric entity.
   *
   * Implements the logic from the `Hexademical character reference start
   * state` and `Numeric character reference end state` in the HTML spec.
   *
   * @param lastCp The last code point of the entity. Used to see if the
   *               entity was terminated with a semicolon.
   * @param expectedLength The minimum number of characters that should be
   *                       consumed. Used to validate that at least one digit
   *                       was consumed.
   * @returns The number of characters that were consumed.
   */
  emitNumericEntity(lastCp, expectedLength) {
    var _a;
    if (this.consumed <= expectedLength) {
      (_a = this.errors) === null || _a === void 0 ? void 0 : _a.absenceOfDigitsInNumericCharacterReference(this.consumed);
      return 0;
    }
    if (lastCp === CharCodes.SEMI) {
      this.consumed += 1;
    } else if (this.decodeMode === DecodingMode.Strict) {
      return 0;
    }
    this.emitCodePoint(replaceCodePoint(this.result), this.consumed);
    if (this.errors) {
      if (lastCp !== CharCodes.SEMI) {
        this.errors.missingSemicolonAfterCharacterReference();
      }
      this.errors.validateNumericCharacterReference(this.result);
    }
    return this.consumed;
  }
  /**
   * Parses a named entity.
   *
   * Equivalent to the `Named character reference state` in the HTML spec.
   *
   * @param input The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNamedEntity(input, offset) {
    const { decodeTree } = this;
    let current = decodeTree[this.treeIndex];
    let valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
    for (; offset < input.length; offset++, this.excess++) {
      const char = input.charCodeAt(offset);
      this.treeIndex = determineBranch(decodeTree, current, this.treeIndex + Math.max(1, valueLength), char);
      if (this.treeIndex < 0) {
        return this.result === 0 || // If we are parsing an attribute
        this.decodeMode === DecodingMode.Attribute && // We shouldn't have consumed any characters after the entity,
        (valueLength === 0 || // And there should be no invalid characters.
        isEntityInAttributeInvalidEnd(char)) ? 0 : this.emitNotTerminatedNamedEntity();
      }
      current = decodeTree[this.treeIndex];
      valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
      if (valueLength !== 0) {
        if (char === CharCodes.SEMI) {
          return this.emitNamedEntityData(this.treeIndex, valueLength, this.consumed + this.excess);
        }
        if (this.decodeMode !== DecodingMode.Strict) {
          this.result = this.treeIndex;
          this.consumed += this.excess;
          this.excess = 0;
        }
      }
    }
    return -1;
  }
  /**
   * Emit a named entity that was not terminated with a semicolon.
   *
   * @returns The number of characters consumed.
   */
  emitNotTerminatedNamedEntity() {
    var _a;
    const { result, decodeTree } = this;
    const valueLength = (decodeTree[result] & BinTrieFlags.VALUE_LENGTH) >> 14;
    this.emitNamedEntityData(result, valueLength, this.consumed);
    (_a = this.errors) === null || _a === void 0 ? void 0 : _a.missingSemicolonAfterCharacterReference();
    return this.consumed;
  }
  /**
   * Emit a named entity.
   *
   * @param result The index of the entity in the decode tree.
   * @param valueLength The number of bytes in the entity.
   * @param consumed The number of characters consumed.
   *
   * @returns The number of characters consumed.
   */
  emitNamedEntityData(result, valueLength, consumed) {
    const { decodeTree } = this;
    this.emitCodePoint(valueLength === 1 ? decodeTree[result] & ~BinTrieFlags.VALUE_LENGTH : decodeTree[result + 1], consumed);
    if (valueLength === 3) {
      this.emitCodePoint(decodeTree[result + 2], consumed);
    }
    return consumed;
  }
  /**
   * Signal to the parser that the end of the input was reached.
   *
   * Remaining data will be emitted and relevant errors will be produced.
   *
   * @returns The number of characters consumed.
   */
  end() {
    var _a;
    switch (this.state) {
      case EntityDecoderState.NamedEntity: {
        return this.result !== 0 && (this.decodeMode !== DecodingMode.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
      }
      // Otherwise, emit a numeric entity if we have one.
      case EntityDecoderState.NumericDecimal: {
        return this.emitNumericEntity(0, 2);
      }
      case EntityDecoderState.NumericHex: {
        return this.emitNumericEntity(0, 3);
      }
      case EntityDecoderState.NumericStart: {
        (_a = this.errors) === null || _a === void 0 ? void 0 : _a.absenceOfDigitsInNumericCharacterReference(this.consumed);
        return 0;
      }
      case EntityDecoderState.EntityStart: {
        return 0;
      }
    }
  }
}
function determineBranch(decodeTree, current, nodeIndex, char) {
  const branchCount = (current & BinTrieFlags.BRANCH_LENGTH) >> 7;
  const jumpOffset = current & BinTrieFlags.JUMP_TABLE;
  if (branchCount === 0) {
    return jumpOffset !== 0 && char === jumpOffset ? nodeIndex : -1;
  }
  if (jumpOffset) {
    const value = char - jumpOffset;
    return value < 0 || value >= branchCount ? -1 : decodeTree[nodeIndex + value] - 1;
  }
  let lo = nodeIndex;
  let hi = lo + branchCount - 1;
  while (lo <= hi) {
    const mid = lo + hi >>> 1;
    const midValue = decodeTree[mid];
    if (midValue < char) {
      lo = mid + 1;
    } else if (midValue > char) {
      hi = mid - 1;
    } else {
      return decodeTree[mid + branchCount];
    }
  }
  return -1;
}
var NS;
(function(NS2) {
  NS2["HTML"] = "http://www.w3.org/1999/xhtml";
  NS2["MATHML"] = "http://www.w3.org/1998/Math/MathML";
  NS2["SVG"] = "http://www.w3.org/2000/svg";
  NS2["XLINK"] = "http://www.w3.org/1999/xlink";
  NS2["XML"] = "http://www.w3.org/XML/1998/namespace";
  NS2["XMLNS"] = "http://www.w3.org/2000/xmlns/";
})(NS || (NS = {}));
var ATTRS;
(function(ATTRS2) {
  ATTRS2["TYPE"] = "type";
  ATTRS2["ACTION"] = "action";
  ATTRS2["ENCODING"] = "encoding";
  ATTRS2["PROMPT"] = "prompt";
  ATTRS2["NAME"] = "name";
  ATTRS2["COLOR"] = "color";
  ATTRS2["FACE"] = "face";
  ATTRS2["SIZE"] = "size";
})(ATTRS || (ATTRS = {}));
var DOCUMENT_MODE;
(function(DOCUMENT_MODE2) {
  DOCUMENT_MODE2["NO_QUIRKS"] = "no-quirks";
  DOCUMENT_MODE2["QUIRKS"] = "quirks";
  DOCUMENT_MODE2["LIMITED_QUIRKS"] = "limited-quirks";
})(DOCUMENT_MODE || (DOCUMENT_MODE = {}));
var TAG_NAMES;
(function(TAG_NAMES2) {
  TAG_NAMES2["A"] = "a";
  TAG_NAMES2["ADDRESS"] = "address";
  TAG_NAMES2["ANNOTATION_XML"] = "annotation-xml";
  TAG_NAMES2["APPLET"] = "applet";
  TAG_NAMES2["AREA"] = "area";
  TAG_NAMES2["ARTICLE"] = "article";
  TAG_NAMES2["ASIDE"] = "aside";
  TAG_NAMES2["B"] = "b";
  TAG_NAMES2["BASE"] = "base";
  TAG_NAMES2["BASEFONT"] = "basefont";
  TAG_NAMES2["BGSOUND"] = "bgsound";
  TAG_NAMES2["BIG"] = "big";
  TAG_NAMES2["BLOCKQUOTE"] = "blockquote";
  TAG_NAMES2["BODY"] = "body";
  TAG_NAMES2["BR"] = "br";
  TAG_NAMES2["BUTTON"] = "button";
  TAG_NAMES2["CAPTION"] = "caption";
  TAG_NAMES2["CENTER"] = "center";
  TAG_NAMES2["CODE"] = "code";
  TAG_NAMES2["COL"] = "col";
  TAG_NAMES2["COLGROUP"] = "colgroup";
  TAG_NAMES2["DD"] = "dd";
  TAG_NAMES2["DESC"] = "desc";
  TAG_NAMES2["DETAILS"] = "details";
  TAG_NAMES2["DIALOG"] = "dialog";
  TAG_NAMES2["DIR"] = "dir";
  TAG_NAMES2["DIV"] = "div";
  TAG_NAMES2["DL"] = "dl";
  TAG_NAMES2["DT"] = "dt";
  TAG_NAMES2["EM"] = "em";
  TAG_NAMES2["EMBED"] = "embed";
  TAG_NAMES2["FIELDSET"] = "fieldset";
  TAG_NAMES2["FIGCAPTION"] = "figcaption";
  TAG_NAMES2["FIGURE"] = "figure";
  TAG_NAMES2["FONT"] = "font";
  TAG_NAMES2["FOOTER"] = "footer";
  TAG_NAMES2["FOREIGN_OBJECT"] = "foreignObject";
  TAG_NAMES2["FORM"] = "form";
  TAG_NAMES2["FRAME"] = "frame";
  TAG_NAMES2["FRAMESET"] = "frameset";
  TAG_NAMES2["H1"] = "h1";
  TAG_NAMES2["H2"] = "h2";
  TAG_NAMES2["H3"] = "h3";
  TAG_NAMES2["H4"] = "h4";
  TAG_NAMES2["H5"] = "h5";
  TAG_NAMES2["H6"] = "h6";
  TAG_NAMES2["HEAD"] = "head";
  TAG_NAMES2["HEADER"] = "header";
  TAG_NAMES2["HGROUP"] = "hgroup";
  TAG_NAMES2["HR"] = "hr";
  TAG_NAMES2["HTML"] = "html";
  TAG_NAMES2["I"] = "i";
  TAG_NAMES2["IMG"] = "img";
  TAG_NAMES2["IMAGE"] = "image";
  TAG_NAMES2["INPUT"] = "input";
  TAG_NAMES2["IFRAME"] = "iframe";
  TAG_NAMES2["KEYGEN"] = "keygen";
  TAG_NAMES2["LABEL"] = "label";
  TAG_NAMES2["LI"] = "li";
  TAG_NAMES2["LINK"] = "link";
  TAG_NAMES2["LISTING"] = "listing";
  TAG_NAMES2["MAIN"] = "main";
  TAG_NAMES2["MALIGNMARK"] = "malignmark";
  TAG_NAMES2["MARQUEE"] = "marquee";
  TAG_NAMES2["MATH"] = "math";
  TAG_NAMES2["MENU"] = "menu";
  TAG_NAMES2["META"] = "meta";
  TAG_NAMES2["MGLYPH"] = "mglyph";
  TAG_NAMES2["MI"] = "mi";
  TAG_NAMES2["MO"] = "mo";
  TAG_NAMES2["MN"] = "mn";
  TAG_NAMES2["MS"] = "ms";
  TAG_NAMES2["MTEXT"] = "mtext";
  TAG_NAMES2["NAV"] = "nav";
  TAG_NAMES2["NOBR"] = "nobr";
  TAG_NAMES2["NOFRAMES"] = "noframes";
  TAG_NAMES2["NOEMBED"] = "noembed";
  TAG_NAMES2["NOSCRIPT"] = "noscript";
  TAG_NAMES2["OBJECT"] = "object";
  TAG_NAMES2["OL"] = "ol";
  TAG_NAMES2["OPTGROUP"] = "optgroup";
  TAG_NAMES2["OPTION"] = "option";
  TAG_NAMES2["P"] = "p";
  TAG_NAMES2["PARAM"] = "param";
  TAG_NAMES2["PLAINTEXT"] = "plaintext";
  TAG_NAMES2["PRE"] = "pre";
  TAG_NAMES2["RB"] = "rb";
  TAG_NAMES2["RP"] = "rp";
  TAG_NAMES2["RT"] = "rt";
  TAG_NAMES2["RTC"] = "rtc";
  TAG_NAMES2["RUBY"] = "ruby";
  TAG_NAMES2["S"] = "s";
  TAG_NAMES2["SCRIPT"] = "script";
  TAG_NAMES2["SEARCH"] = "search";
  TAG_NAMES2["SECTION"] = "section";
  TAG_NAMES2["SELECT"] = "select";
  TAG_NAMES2["SOURCE"] = "source";
  TAG_NAMES2["SMALL"] = "small";
  TAG_NAMES2["SPAN"] = "span";
  TAG_NAMES2["STRIKE"] = "strike";
  TAG_NAMES2["STRONG"] = "strong";
  TAG_NAMES2["STYLE"] = "style";
  TAG_NAMES2["SUB"] = "sub";
  TAG_NAMES2["SUMMARY"] = "summary";
  TAG_NAMES2["SUP"] = "sup";
  TAG_NAMES2["TABLE"] = "table";
  TAG_NAMES2["TBODY"] = "tbody";
  TAG_NAMES2["TEMPLATE"] = "template";
  TAG_NAMES2["TEXTAREA"] = "textarea";
  TAG_NAMES2["TFOOT"] = "tfoot";
  TAG_NAMES2["TD"] = "td";
  TAG_NAMES2["TH"] = "th";
  TAG_NAMES2["THEAD"] = "thead";
  TAG_NAMES2["TITLE"] = "title";
  TAG_NAMES2["TR"] = "tr";
  TAG_NAMES2["TRACK"] = "track";
  TAG_NAMES2["TT"] = "tt";
  TAG_NAMES2["U"] = "u";
  TAG_NAMES2["UL"] = "ul";
  TAG_NAMES2["SVG"] = "svg";
  TAG_NAMES2["VAR"] = "var";
  TAG_NAMES2["WBR"] = "wbr";
  TAG_NAMES2["XMP"] = "xmp";
})(TAG_NAMES || (TAG_NAMES = {}));
var TAG_ID;
(function(TAG_ID2) {
  TAG_ID2[TAG_ID2["UNKNOWN"] = 0] = "UNKNOWN";
  TAG_ID2[TAG_ID2["A"] = 1] = "A";
  TAG_ID2[TAG_ID2["ADDRESS"] = 2] = "ADDRESS";
  TAG_ID2[TAG_ID2["ANNOTATION_XML"] = 3] = "ANNOTATION_XML";
  TAG_ID2[TAG_ID2["APPLET"] = 4] = "APPLET";
  TAG_ID2[TAG_ID2["AREA"] = 5] = "AREA";
  TAG_ID2[TAG_ID2["ARTICLE"] = 6] = "ARTICLE";
  TAG_ID2[TAG_ID2["ASIDE"] = 7] = "ASIDE";
  TAG_ID2[TAG_ID2["B"] = 8] = "B";
  TAG_ID2[TAG_ID2["BASE"] = 9] = "BASE";
  TAG_ID2[TAG_ID2["BASEFONT"] = 10] = "BASEFONT";
  TAG_ID2[TAG_ID2["BGSOUND"] = 11] = "BGSOUND";
  TAG_ID2[TAG_ID2["BIG"] = 12] = "BIG";
  TAG_ID2[TAG_ID2["BLOCKQUOTE"] = 13] = "BLOCKQUOTE";
  TAG_ID2[TAG_ID2["BODY"] = 14] = "BODY";
  TAG_ID2[TAG_ID2["BR"] = 15] = "BR";
  TAG_ID2[TAG_ID2["BUTTON"] = 16] = "BUTTON";
  TAG_ID2[TAG_ID2["CAPTION"] = 17] = "CAPTION";
  TAG_ID2[TAG_ID2["CENTER"] = 18] = "CENTER";
  TAG_ID2[TAG_ID2["CODE"] = 19] = "CODE";
  TAG_ID2[TAG_ID2["COL"] = 20] = "COL";
  TAG_ID2[TAG_ID2["COLGROUP"] = 21] = "COLGROUP";
  TAG_ID2[TAG_ID2["DD"] = 22] = "DD";
  TAG_ID2[TAG_ID2["DESC"] = 23] = "DESC";
  TAG_ID2[TAG_ID2["DETAILS"] = 24] = "DETAILS";
  TAG_ID2[TAG_ID2["DIALOG"] = 25] = "DIALOG";
  TAG_ID2[TAG_ID2["DIR"] = 26] = "DIR";
  TAG_ID2[TAG_ID2["DIV"] = 27] = "DIV";
  TAG_ID2[TAG_ID2["DL"] = 28] = "DL";
  TAG_ID2[TAG_ID2["DT"] = 29] = "DT";
  TAG_ID2[TAG_ID2["EM"] = 30] = "EM";
  TAG_ID2[TAG_ID2["EMBED"] = 31] = "EMBED";
  TAG_ID2[TAG_ID2["FIELDSET"] = 32] = "FIELDSET";
  TAG_ID2[TAG_ID2["FIGCAPTION"] = 33] = "FIGCAPTION";
  TAG_ID2[TAG_ID2["FIGURE"] = 34] = "FIGURE";
  TAG_ID2[TAG_ID2["FONT"] = 35] = "FONT";
  TAG_ID2[TAG_ID2["FOOTER"] = 36] = "FOOTER";
  TAG_ID2[TAG_ID2["FOREIGN_OBJECT"] = 37] = "FOREIGN_OBJECT";
  TAG_ID2[TAG_ID2["FORM"] = 38] = "FORM";
  TAG_ID2[TAG_ID2["FRAME"] = 39] = "FRAME";
  TAG_ID2[TAG_ID2["FRAMESET"] = 40] = "FRAMESET";
  TAG_ID2[TAG_ID2["H1"] = 41] = "H1";
  TAG_ID2[TAG_ID2["H2"] = 42] = "H2";
  TAG_ID2[TAG_ID2["H3"] = 43] = "H3";
  TAG_ID2[TAG_ID2["H4"] = 44] = "H4";
  TAG_ID2[TAG_ID2["H5"] = 45] = "H5";
  TAG_ID2[TAG_ID2["H6"] = 46] = "H6";
  TAG_ID2[TAG_ID2["HEAD"] = 47] = "HEAD";
  TAG_ID2[TAG_ID2["HEADER"] = 48] = "HEADER";
  TAG_ID2[TAG_ID2["HGROUP"] = 49] = "HGROUP";
  TAG_ID2[TAG_ID2["HR"] = 50] = "HR";
  TAG_ID2[TAG_ID2["HTML"] = 51] = "HTML";
  TAG_ID2[TAG_ID2["I"] = 52] = "I";
  TAG_ID2[TAG_ID2["IMG"] = 53] = "IMG";
  TAG_ID2[TAG_ID2["IMAGE"] = 54] = "IMAGE";
  TAG_ID2[TAG_ID2["INPUT"] = 55] = "INPUT";
  TAG_ID2[TAG_ID2["IFRAME"] = 56] = "IFRAME";
  TAG_ID2[TAG_ID2["KEYGEN"] = 57] = "KEYGEN";
  TAG_ID2[TAG_ID2["LABEL"] = 58] = "LABEL";
  TAG_ID2[TAG_ID2["LI"] = 59] = "LI";
  TAG_ID2[TAG_ID2["LINK"] = 60] = "LINK";
  TAG_ID2[TAG_ID2["LISTING"] = 61] = "LISTING";
  TAG_ID2[TAG_ID2["MAIN"] = 62] = "MAIN";
  TAG_ID2[TAG_ID2["MALIGNMARK"] = 63] = "MALIGNMARK";
  TAG_ID2[TAG_ID2["MARQUEE"] = 64] = "MARQUEE";
  TAG_ID2[TAG_ID2["MATH"] = 65] = "MATH";
  TAG_ID2[TAG_ID2["MENU"] = 66] = "MENU";
  TAG_ID2[TAG_ID2["META"] = 67] = "META";
  TAG_ID2[TAG_ID2["MGLYPH"] = 68] = "MGLYPH";
  TAG_ID2[TAG_ID2["MI"] = 69] = "MI";
  TAG_ID2[TAG_ID2["MO"] = 70] = "MO";
  TAG_ID2[TAG_ID2["MN"] = 71] = "MN";
  TAG_ID2[TAG_ID2["MS"] = 72] = "MS";
  TAG_ID2[TAG_ID2["MTEXT"] = 73] = "MTEXT";
  TAG_ID2[TAG_ID2["NAV"] = 74] = "NAV";
  TAG_ID2[TAG_ID2["NOBR"] = 75] = "NOBR";
  TAG_ID2[TAG_ID2["NOFRAMES"] = 76] = "NOFRAMES";
  TAG_ID2[TAG_ID2["NOEMBED"] = 77] = "NOEMBED";
  TAG_ID2[TAG_ID2["NOSCRIPT"] = 78] = "NOSCRIPT";
  TAG_ID2[TAG_ID2["OBJECT"] = 79] = "OBJECT";
  TAG_ID2[TAG_ID2["OL"] = 80] = "OL";
  TAG_ID2[TAG_ID2["OPTGROUP"] = 81] = "OPTGROUP";
  TAG_ID2[TAG_ID2["OPTION"] = 82] = "OPTION";
  TAG_ID2[TAG_ID2["P"] = 83] = "P";
  TAG_ID2[TAG_ID2["PARAM"] = 84] = "PARAM";
  TAG_ID2[TAG_ID2["PLAINTEXT"] = 85] = "PLAINTEXT";
  TAG_ID2[TAG_ID2["PRE"] = 86] = "PRE";
  TAG_ID2[TAG_ID2["RB"] = 87] = "RB";
  TAG_ID2[TAG_ID2["RP"] = 88] = "RP";
  TAG_ID2[TAG_ID2["RT"] = 89] = "RT";
  TAG_ID2[TAG_ID2["RTC"] = 90] = "RTC";
  TAG_ID2[TAG_ID2["RUBY"] = 91] = "RUBY";
  TAG_ID2[TAG_ID2["S"] = 92] = "S";
  TAG_ID2[TAG_ID2["SCRIPT"] = 93] = "SCRIPT";
  TAG_ID2[TAG_ID2["SEARCH"] = 94] = "SEARCH";
  TAG_ID2[TAG_ID2["SECTION"] = 95] = "SECTION";
  TAG_ID2[TAG_ID2["SELECT"] = 96] = "SELECT";
  TAG_ID2[TAG_ID2["SOURCE"] = 97] = "SOURCE";
  TAG_ID2[TAG_ID2["SMALL"] = 98] = "SMALL";
  TAG_ID2[TAG_ID2["SPAN"] = 99] = "SPAN";
  TAG_ID2[TAG_ID2["STRIKE"] = 100] = "STRIKE";
  TAG_ID2[TAG_ID2["STRONG"] = 101] = "STRONG";
  TAG_ID2[TAG_ID2["STYLE"] = 102] = "STYLE";
  TAG_ID2[TAG_ID2["SUB"] = 103] = "SUB";
  TAG_ID2[TAG_ID2["SUMMARY"] = 104] = "SUMMARY";
  TAG_ID2[TAG_ID2["SUP"] = 105] = "SUP";
  TAG_ID2[TAG_ID2["TABLE"] = 106] = "TABLE";
  TAG_ID2[TAG_ID2["TBODY"] = 107] = "TBODY";
  TAG_ID2[TAG_ID2["TEMPLATE"] = 108] = "TEMPLATE";
  TAG_ID2[TAG_ID2["TEXTAREA"] = 109] = "TEXTAREA";
  TAG_ID2[TAG_ID2["TFOOT"] = 110] = "TFOOT";
  TAG_ID2[TAG_ID2["TD"] = 111] = "TD";
  TAG_ID2[TAG_ID2["TH"] = 112] = "TH";
  TAG_ID2[TAG_ID2["THEAD"] = 113] = "THEAD";
  TAG_ID2[TAG_ID2["TITLE"] = 114] = "TITLE";
  TAG_ID2[TAG_ID2["TR"] = 115] = "TR";
  TAG_ID2[TAG_ID2["TRACK"] = 116] = "TRACK";
  TAG_ID2[TAG_ID2["TT"] = 117] = "TT";
  TAG_ID2[TAG_ID2["U"] = 118] = "U";
  TAG_ID2[TAG_ID2["UL"] = 119] = "UL";
  TAG_ID2[TAG_ID2["SVG"] = 120] = "SVG";
  TAG_ID2[TAG_ID2["VAR"] = 121] = "VAR";
  TAG_ID2[TAG_ID2["WBR"] = 122] = "WBR";
  TAG_ID2[TAG_ID2["XMP"] = 123] = "XMP";
})(TAG_ID || (TAG_ID = {}));
const TAG_NAME_TO_ID = /* @__PURE__ */ new Map([
  [TAG_NAMES.A, TAG_ID.A],
  [TAG_NAMES.ADDRESS, TAG_ID.ADDRESS],
  [TAG_NAMES.ANNOTATION_XML, TAG_ID.ANNOTATION_XML],
  [TAG_NAMES.APPLET, TAG_ID.APPLET],
  [TAG_NAMES.AREA, TAG_ID.AREA],
  [TAG_NAMES.ARTICLE, TAG_ID.ARTICLE],
  [TAG_NAMES.ASIDE, TAG_ID.ASIDE],
  [TAG_NAMES.B, TAG_ID.B],
  [TAG_NAMES.BASE, TAG_ID.BASE],
  [TAG_NAMES.BASEFONT, TAG_ID.BASEFONT],
  [TAG_NAMES.BGSOUND, TAG_ID.BGSOUND],
  [TAG_NAMES.BIG, TAG_ID.BIG],
  [TAG_NAMES.BLOCKQUOTE, TAG_ID.BLOCKQUOTE],
  [TAG_NAMES.BODY, TAG_ID.BODY],
  [TAG_NAMES.BR, TAG_ID.BR],
  [TAG_NAMES.BUTTON, TAG_ID.BUTTON],
  [TAG_NAMES.CAPTION, TAG_ID.CAPTION],
  [TAG_NAMES.CENTER, TAG_ID.CENTER],
  [TAG_NAMES.CODE, TAG_ID.CODE],
  [TAG_NAMES.COL, TAG_ID.COL],
  [TAG_NAMES.COLGROUP, TAG_ID.COLGROUP],
  [TAG_NAMES.DD, TAG_ID.DD],
  [TAG_NAMES.DESC, TAG_ID.DESC],
  [TAG_NAMES.DETAILS, TAG_ID.DETAILS],
  [TAG_NAMES.DIALOG, TAG_ID.DIALOG],
  [TAG_NAMES.DIR, TAG_ID.DIR],
  [TAG_NAMES.DIV, TAG_ID.DIV],
  [TAG_NAMES.DL, TAG_ID.DL],
  [TAG_NAMES.DT, TAG_ID.DT],
  [TAG_NAMES.EM, TAG_ID.EM],
  [TAG_NAMES.EMBED, TAG_ID.EMBED],
  [TAG_NAMES.FIELDSET, TAG_ID.FIELDSET],
  [TAG_NAMES.FIGCAPTION, TAG_ID.FIGCAPTION],
  [TAG_NAMES.FIGURE, TAG_ID.FIGURE],
  [TAG_NAMES.FONT, TAG_ID.FONT],
  [TAG_NAMES.FOOTER, TAG_ID.FOOTER],
  [TAG_NAMES.FOREIGN_OBJECT, TAG_ID.FOREIGN_OBJECT],
  [TAG_NAMES.FORM, TAG_ID.FORM],
  [TAG_NAMES.FRAME, TAG_ID.FRAME],
  [TAG_NAMES.FRAMESET, TAG_ID.FRAMESET],
  [TAG_NAMES.H1, TAG_ID.H1],
  [TAG_NAMES.H2, TAG_ID.H2],
  [TAG_NAMES.H3, TAG_ID.H3],
  [TAG_NAMES.H4, TAG_ID.H4],
  [TAG_NAMES.H5, TAG_ID.H5],
  [TAG_NAMES.H6, TAG_ID.H6],
  [TAG_NAMES.HEAD, TAG_ID.HEAD],
  [TAG_NAMES.HEADER, TAG_ID.HEADER],
  [TAG_NAMES.HGROUP, TAG_ID.HGROUP],
  [TAG_NAMES.HR, TAG_ID.HR],
  [TAG_NAMES.HTML, TAG_ID.HTML],
  [TAG_NAMES.I, TAG_ID.I],
  [TAG_NAMES.IMG, TAG_ID.IMG],
  [TAG_NAMES.IMAGE, TAG_ID.IMAGE],
  [TAG_NAMES.INPUT, TAG_ID.INPUT],
  [TAG_NAMES.IFRAME, TAG_ID.IFRAME],
  [TAG_NAMES.KEYGEN, TAG_ID.KEYGEN],
  [TAG_NAMES.LABEL, TAG_ID.LABEL],
  [TAG_NAMES.LI, TAG_ID.LI],
  [TAG_NAMES.LINK, TAG_ID.LINK],
  [TAG_NAMES.LISTING, TAG_ID.LISTING],
  [TAG_NAMES.MAIN, TAG_ID.MAIN],
  [TAG_NAMES.MALIGNMARK, TAG_ID.MALIGNMARK],
  [TAG_NAMES.MARQUEE, TAG_ID.MARQUEE],
  [TAG_NAMES.MATH, TAG_ID.MATH],
  [TAG_NAMES.MENU, TAG_ID.MENU],
  [TAG_NAMES.META, TAG_ID.META],
  [TAG_NAMES.MGLYPH, TAG_ID.MGLYPH],
  [TAG_NAMES.MI, TAG_ID.MI],
  [TAG_NAMES.MO, TAG_ID.MO],
  [TAG_NAMES.MN, TAG_ID.MN],
  [TAG_NAMES.MS, TAG_ID.MS],
  [TAG_NAMES.MTEXT, TAG_ID.MTEXT],
  [TAG_NAMES.NAV, TAG_ID.NAV],
  [TAG_NAMES.NOBR, TAG_ID.NOBR],
  [TAG_NAMES.NOFRAMES, TAG_ID.NOFRAMES],
  [TAG_NAMES.NOEMBED, TAG_ID.NOEMBED],
  [TAG_NAMES.NOSCRIPT, TAG_ID.NOSCRIPT],
  [TAG_NAMES.OBJECT, TAG_ID.OBJECT],
  [TAG_NAMES.OL, TAG_ID.OL],
  [TAG_NAMES.OPTGROUP, TAG_ID.OPTGROUP],
  [TAG_NAMES.OPTION, TAG_ID.OPTION],
  [TAG_NAMES.P, TAG_ID.P],
  [TAG_NAMES.PARAM, TAG_ID.PARAM],
  [TAG_NAMES.PLAINTEXT, TAG_ID.PLAINTEXT],
  [TAG_NAMES.PRE, TAG_ID.PRE],
  [TAG_NAMES.RB, TAG_ID.RB],
  [TAG_NAMES.RP, TAG_ID.RP],
  [TAG_NAMES.RT, TAG_ID.RT],
  [TAG_NAMES.RTC, TAG_ID.RTC],
  [TAG_NAMES.RUBY, TAG_ID.RUBY],
  [TAG_NAMES.S, TAG_ID.S],
  [TAG_NAMES.SCRIPT, TAG_ID.SCRIPT],
  [TAG_NAMES.SEARCH, TAG_ID.SEARCH],
  [TAG_NAMES.SECTION, TAG_ID.SECTION],
  [TAG_NAMES.SELECT, TAG_ID.SELECT],
  [TAG_NAMES.SOURCE, TAG_ID.SOURCE],
  [TAG_NAMES.SMALL, TAG_ID.SMALL],
  [TAG_NAMES.SPAN, TAG_ID.SPAN],
  [TAG_NAMES.STRIKE, TAG_ID.STRIKE],
  [TAG_NAMES.STRONG, TAG_ID.STRONG],
  [TAG_NAMES.STYLE, TAG_ID.STYLE],
  [TAG_NAMES.SUB, TAG_ID.SUB],
  [TAG_NAMES.SUMMARY, TAG_ID.SUMMARY],
  [TAG_NAMES.SUP, TAG_ID.SUP],
  [TAG_NAMES.TABLE, TAG_ID.TABLE],
  [TAG_NAMES.TBODY, TAG_ID.TBODY],
  [TAG_NAMES.TEMPLATE, TAG_ID.TEMPLATE],
  [TAG_NAMES.TEXTAREA, TAG_ID.TEXTAREA],
  [TAG_NAMES.TFOOT, TAG_ID.TFOOT],
  [TAG_NAMES.TD, TAG_ID.TD],
  [TAG_NAMES.TH, TAG_ID.TH],
  [TAG_NAMES.THEAD, TAG_ID.THEAD],
  [TAG_NAMES.TITLE, TAG_ID.TITLE],
  [TAG_NAMES.TR, TAG_ID.TR],
  [TAG_NAMES.TRACK, TAG_ID.TRACK],
  [TAG_NAMES.TT, TAG_ID.TT],
  [TAG_NAMES.U, TAG_ID.U],
  [TAG_NAMES.UL, TAG_ID.UL],
  [TAG_NAMES.SVG, TAG_ID.SVG],
  [TAG_NAMES.VAR, TAG_ID.VAR],
  [TAG_NAMES.WBR, TAG_ID.WBR],
  [TAG_NAMES.XMP, TAG_ID.XMP]
]);
function getTagID(tagName) {
  var _a;
  return (_a = TAG_NAME_TO_ID.get(tagName)) !== null && _a !== void 0 ? _a : TAG_ID.UNKNOWN;
}
const $ = TAG_ID;
const SPECIAL_ELEMENTS = {
  [NS.HTML]: /* @__PURE__ */ new Set([
    $.ADDRESS,
    $.APPLET,
    $.AREA,
    $.ARTICLE,
    $.ASIDE,
    $.BASE,
    $.BASEFONT,
    $.BGSOUND,
    $.BLOCKQUOTE,
    $.BODY,
    $.BR,
    $.BUTTON,
    $.CAPTION,
    $.CENTER,
    $.COL,
    $.COLGROUP,
    $.DD,
    $.DETAILS,
    $.DIR,
    $.DIV,
    $.DL,
    $.DT,
    $.EMBED,
    $.FIELDSET,
    $.FIGCAPTION,
    $.FIGURE,
    $.FOOTER,
    $.FORM,
    $.FRAME,
    $.FRAMESET,
    $.H1,
    $.H2,
    $.H3,
    $.H4,
    $.H5,
    $.H6,
    $.HEAD,
    $.HEADER,
    $.HGROUP,
    $.HR,
    $.HTML,
    $.IFRAME,
    $.IMG,
    $.INPUT,
    $.LI,
    $.LINK,
    $.LISTING,
    $.MAIN,
    $.MARQUEE,
    $.MENU,
    $.META,
    $.NAV,
    $.NOEMBED,
    $.NOFRAMES,
    $.NOSCRIPT,
    $.OBJECT,
    $.OL,
    $.P,
    $.PARAM,
    $.PLAINTEXT,
    $.PRE,
    $.SCRIPT,
    $.SECTION,
    $.SELECT,
    $.SOURCE,
    $.STYLE,
    $.SUMMARY,
    $.TABLE,
    $.TBODY,
    $.TD,
    $.TEMPLATE,
    $.TEXTAREA,
    $.TFOOT,
    $.TH,
    $.THEAD,
    $.TITLE,
    $.TR,
    $.TRACK,
    $.UL,
    $.WBR,
    $.XMP
  ]),
  [NS.MATHML]: /* @__PURE__ */ new Set([$.MI, $.MO, $.MN, $.MS, $.MTEXT, $.ANNOTATION_XML]),
  [NS.SVG]: /* @__PURE__ */ new Set([$.TITLE, $.FOREIGN_OBJECT, $.DESC]),
  [NS.XLINK]: /* @__PURE__ */ new Set(),
  [NS.XML]: /* @__PURE__ */ new Set(),
  [NS.XMLNS]: /* @__PURE__ */ new Set()
};
const NUMBERED_HEADERS = /* @__PURE__ */ new Set([$.H1, $.H2, $.H3, $.H4, $.H5, $.H6]);
/* @__PURE__ */ new Set([
  TAG_NAMES.STYLE,
  TAG_NAMES.SCRIPT,
  TAG_NAMES.XMP,
  TAG_NAMES.IFRAME,
  TAG_NAMES.NOEMBED,
  TAG_NAMES.NOFRAMES,
  TAG_NAMES.PLAINTEXT
]);
var State;
(function(State2) {
  State2[State2["DATA"] = 0] = "DATA";
  State2[State2["RCDATA"] = 1] = "RCDATA";
  State2[State2["RAWTEXT"] = 2] = "RAWTEXT";
  State2[State2["SCRIPT_DATA"] = 3] = "SCRIPT_DATA";
  State2[State2["PLAINTEXT"] = 4] = "PLAINTEXT";
  State2[State2["TAG_OPEN"] = 5] = "TAG_OPEN";
  State2[State2["END_TAG_OPEN"] = 6] = "END_TAG_OPEN";
  State2[State2["TAG_NAME"] = 7] = "TAG_NAME";
  State2[State2["RCDATA_LESS_THAN_SIGN"] = 8] = "RCDATA_LESS_THAN_SIGN";
  State2[State2["RCDATA_END_TAG_OPEN"] = 9] = "RCDATA_END_TAG_OPEN";
  State2[State2["RCDATA_END_TAG_NAME"] = 10] = "RCDATA_END_TAG_NAME";
  State2[State2["RAWTEXT_LESS_THAN_SIGN"] = 11] = "RAWTEXT_LESS_THAN_SIGN";
  State2[State2["RAWTEXT_END_TAG_OPEN"] = 12] = "RAWTEXT_END_TAG_OPEN";
  State2[State2["RAWTEXT_END_TAG_NAME"] = 13] = "RAWTEXT_END_TAG_NAME";
  State2[State2["SCRIPT_DATA_LESS_THAN_SIGN"] = 14] = "SCRIPT_DATA_LESS_THAN_SIGN";
  State2[State2["SCRIPT_DATA_END_TAG_OPEN"] = 15] = "SCRIPT_DATA_END_TAG_OPEN";
  State2[State2["SCRIPT_DATA_END_TAG_NAME"] = 16] = "SCRIPT_DATA_END_TAG_NAME";
  State2[State2["SCRIPT_DATA_ESCAPE_START"] = 17] = "SCRIPT_DATA_ESCAPE_START";
  State2[State2["SCRIPT_DATA_ESCAPE_START_DASH"] = 18] = "SCRIPT_DATA_ESCAPE_START_DASH";
  State2[State2["SCRIPT_DATA_ESCAPED"] = 19] = "SCRIPT_DATA_ESCAPED";
  State2[State2["SCRIPT_DATA_ESCAPED_DASH"] = 20] = "SCRIPT_DATA_ESCAPED_DASH";
  State2[State2["SCRIPT_DATA_ESCAPED_DASH_DASH"] = 21] = "SCRIPT_DATA_ESCAPED_DASH_DASH";
  State2[State2["SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN"] = 22] = "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN";
  State2[State2["SCRIPT_DATA_ESCAPED_END_TAG_OPEN"] = 23] = "SCRIPT_DATA_ESCAPED_END_TAG_OPEN";
  State2[State2["SCRIPT_DATA_ESCAPED_END_TAG_NAME"] = 24] = "SCRIPT_DATA_ESCAPED_END_TAG_NAME";
  State2[State2["SCRIPT_DATA_DOUBLE_ESCAPE_START"] = 25] = "SCRIPT_DATA_DOUBLE_ESCAPE_START";
  State2[State2["SCRIPT_DATA_DOUBLE_ESCAPED"] = 26] = "SCRIPT_DATA_DOUBLE_ESCAPED";
  State2[State2["SCRIPT_DATA_DOUBLE_ESCAPED_DASH"] = 27] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH";
  State2[State2["SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH"] = 28] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH";
  State2[State2["SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN"] = 29] = "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN";
  State2[State2["SCRIPT_DATA_DOUBLE_ESCAPE_END"] = 30] = "SCRIPT_DATA_DOUBLE_ESCAPE_END";
  State2[State2["BEFORE_ATTRIBUTE_NAME"] = 31] = "BEFORE_ATTRIBUTE_NAME";
  State2[State2["ATTRIBUTE_NAME"] = 32] = "ATTRIBUTE_NAME";
  State2[State2["AFTER_ATTRIBUTE_NAME"] = 33] = "AFTER_ATTRIBUTE_NAME";
  State2[State2["BEFORE_ATTRIBUTE_VALUE"] = 34] = "BEFORE_ATTRIBUTE_VALUE";
  State2[State2["ATTRIBUTE_VALUE_DOUBLE_QUOTED"] = 35] = "ATTRIBUTE_VALUE_DOUBLE_QUOTED";
  State2[State2["ATTRIBUTE_VALUE_SINGLE_QUOTED"] = 36] = "ATTRIBUTE_VALUE_SINGLE_QUOTED";
  State2[State2["ATTRIBUTE_VALUE_UNQUOTED"] = 37] = "ATTRIBUTE_VALUE_UNQUOTED";
  State2[State2["AFTER_ATTRIBUTE_VALUE_QUOTED"] = 38] = "AFTER_ATTRIBUTE_VALUE_QUOTED";
  State2[State2["SELF_CLOSING_START_TAG"] = 39] = "SELF_CLOSING_START_TAG";
  State2[State2["BOGUS_COMMENT"] = 40] = "BOGUS_COMMENT";
  State2[State2["MARKUP_DECLARATION_OPEN"] = 41] = "MARKUP_DECLARATION_OPEN";
  State2[State2["COMMENT_START"] = 42] = "COMMENT_START";
  State2[State2["COMMENT_START_DASH"] = 43] = "COMMENT_START_DASH";
  State2[State2["COMMENT"] = 44] = "COMMENT";
  State2[State2["COMMENT_LESS_THAN_SIGN"] = 45] = "COMMENT_LESS_THAN_SIGN";
  State2[State2["COMMENT_LESS_THAN_SIGN_BANG"] = 46] = "COMMENT_LESS_THAN_SIGN_BANG";
  State2[State2["COMMENT_LESS_THAN_SIGN_BANG_DASH"] = 47] = "COMMENT_LESS_THAN_SIGN_BANG_DASH";
  State2[State2["COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH"] = 48] = "COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH";
  State2[State2["COMMENT_END_DASH"] = 49] = "COMMENT_END_DASH";
  State2[State2["COMMENT_END"] = 50] = "COMMENT_END";
  State2[State2["COMMENT_END_BANG"] = 51] = "COMMENT_END_BANG";
  State2[State2["DOCTYPE"] = 52] = "DOCTYPE";
  State2[State2["BEFORE_DOCTYPE_NAME"] = 53] = "BEFORE_DOCTYPE_NAME";
  State2[State2["DOCTYPE_NAME"] = 54] = "DOCTYPE_NAME";
  State2[State2["AFTER_DOCTYPE_NAME"] = 55] = "AFTER_DOCTYPE_NAME";
  State2[State2["AFTER_DOCTYPE_PUBLIC_KEYWORD"] = 56] = "AFTER_DOCTYPE_PUBLIC_KEYWORD";
  State2[State2["BEFORE_DOCTYPE_PUBLIC_IDENTIFIER"] = 57] = "BEFORE_DOCTYPE_PUBLIC_IDENTIFIER";
  State2[State2["DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED"] = 58] = "DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED";
  State2[State2["DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED"] = 59] = "DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED";
  State2[State2["AFTER_DOCTYPE_PUBLIC_IDENTIFIER"] = 60] = "AFTER_DOCTYPE_PUBLIC_IDENTIFIER";
  State2[State2["BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS"] = 61] = "BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS";
  State2[State2["AFTER_DOCTYPE_SYSTEM_KEYWORD"] = 62] = "AFTER_DOCTYPE_SYSTEM_KEYWORD";
  State2[State2["BEFORE_DOCTYPE_SYSTEM_IDENTIFIER"] = 63] = "BEFORE_DOCTYPE_SYSTEM_IDENTIFIER";
  State2[State2["DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED"] = 64] = "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED";
  State2[State2["DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED"] = 65] = "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED";
  State2[State2["AFTER_DOCTYPE_SYSTEM_IDENTIFIER"] = 66] = "AFTER_DOCTYPE_SYSTEM_IDENTIFIER";
  State2[State2["BOGUS_DOCTYPE"] = 67] = "BOGUS_DOCTYPE";
  State2[State2["CDATA_SECTION"] = 68] = "CDATA_SECTION";
  State2[State2["CDATA_SECTION_BRACKET"] = 69] = "CDATA_SECTION_BRACKET";
  State2[State2["CDATA_SECTION_END"] = 70] = "CDATA_SECTION_END";
  State2[State2["CHARACTER_REFERENCE"] = 71] = "CHARACTER_REFERENCE";
  State2[State2["AMBIGUOUS_AMPERSAND"] = 72] = "AMBIGUOUS_AMPERSAND";
})(State || (State = {}));
const TokenizerMode = {
  DATA: State.DATA,
  RCDATA: State.RCDATA,
  RAWTEXT: State.RAWTEXT,
  SCRIPT_DATA: State.SCRIPT_DATA,
  PLAINTEXT: State.PLAINTEXT,
  CDATA_SECTION: State.CDATA_SECTION
};
function isAsciiDigit(cp) {
  return cp >= CODE_POINTS.DIGIT_0 && cp <= CODE_POINTS.DIGIT_9;
}
function isAsciiUpper(cp) {
  return cp >= CODE_POINTS.LATIN_CAPITAL_A && cp <= CODE_POINTS.LATIN_CAPITAL_Z;
}
function isAsciiLower(cp) {
  return cp >= CODE_POINTS.LATIN_SMALL_A && cp <= CODE_POINTS.LATIN_SMALL_Z;
}
function isAsciiLetter(cp) {
  return isAsciiLower(cp) || isAsciiUpper(cp);
}
function isAsciiAlphaNumeric(cp) {
  return isAsciiLetter(cp) || isAsciiDigit(cp);
}
function toAsciiLower(cp) {
  return cp + 32;
}
function isWhitespace(cp) {
  return cp === CODE_POINTS.SPACE || cp === CODE_POINTS.LINE_FEED || cp === CODE_POINTS.TABULATION || cp === CODE_POINTS.FORM_FEED;
}
function isScriptDataDoubleEscapeSequenceEnd(cp) {
  return isWhitespace(cp) || cp === CODE_POINTS.SOLIDUS || cp === CODE_POINTS.GREATER_THAN_SIGN;
}
function getErrorForNumericCharacterReference(code2) {
  if (code2 === CODE_POINTS.NULL) {
    return ERR.nullCharacterReference;
  } else if (code2 > 1114111) {
    return ERR.characterReferenceOutsideUnicodeRange;
  } else if (isSurrogate(code2)) {
    return ERR.surrogateCharacterReference;
  } else if (isUndefinedCodePoint(code2)) {
    return ERR.noncharacterCharacterReference;
  } else if (isControlCodePoint(code2) || code2 === CODE_POINTS.CARRIAGE_RETURN) {
    return ERR.controlCharacterReference;
  }
  return null;
}
class Tokenizer {
  constructor(options, handler) {
    this.options = options;
    this.handler = handler;
    this.paused = false;
    this.inLoop = false;
    this.inForeignNode = false;
    this.lastStartTagName = "";
    this.active = false;
    this.state = State.DATA;
    this.returnState = State.DATA;
    this.entityStartPos = 0;
    this.consumedAfterSnapshot = -1;
    this.currentCharacterToken = null;
    this.currentToken = null;
    this.currentAttr = { name: "", value: "" };
    this.preprocessor = new Preprocessor(handler);
    this.currentLocation = this.getCurrentLocation(-1);
    this.entityDecoder = new EntityDecoder(htmlDecodeTree, (cp, consumed) => {
      this.preprocessor.pos = this.entityStartPos + consumed - 1;
      this._flushCodePointConsumedAsCharacterReference(cp);
    }, handler.onParseError ? {
      missingSemicolonAfterCharacterReference: () => {
        this._err(ERR.missingSemicolonAfterCharacterReference, 1);
      },
      absenceOfDigitsInNumericCharacterReference: (consumed) => {
        this._err(ERR.absenceOfDigitsInNumericCharacterReference, this.entityStartPos - this.preprocessor.pos + consumed);
      },
      validateNumericCharacterReference: (code2) => {
        const error = getErrorForNumericCharacterReference(code2);
        if (error)
          this._err(error, 1);
      }
    } : void 0);
  }
  //Errors
  _err(code2, cpOffset = 0) {
    var _a, _b;
    (_b = (_a = this.handler).onParseError) === null || _b === void 0 ? void 0 : _b.call(_a, this.preprocessor.getError(code2, cpOffset));
  }
  // NOTE: `offset` may never run across line boundaries.
  getCurrentLocation(offset) {
    if (!this.options.sourceCodeLocationInfo) {
      return null;
    }
    return {
      startLine: this.preprocessor.line,
      startCol: this.preprocessor.col - offset,
      startOffset: this.preprocessor.offset - offset,
      endLine: -1,
      endCol: -1,
      endOffset: -1
    };
  }
  _runParsingLoop() {
    if (this.inLoop)
      return;
    this.inLoop = true;
    while (this.active && !this.paused) {
      this.consumedAfterSnapshot = 0;
      const cp = this._consume();
      if (!this._ensureHibernation()) {
        this._callState(cp);
      }
    }
    this.inLoop = false;
  }
  //API
  pause() {
    this.paused = true;
  }
  resume(writeCallback) {
    if (!this.paused) {
      throw new Error("Parser was already resumed");
    }
    this.paused = false;
    if (this.inLoop)
      return;
    this._runParsingLoop();
    if (!this.paused) {
      writeCallback === null || writeCallback === void 0 ? void 0 : writeCallback();
    }
  }
  write(chunk, isLastChunk, writeCallback) {
    this.active = true;
    this.preprocessor.write(chunk, isLastChunk);
    this._runParsingLoop();
    if (!this.paused) {
      writeCallback === null || writeCallback === void 0 ? void 0 : writeCallback();
    }
  }
  insertHtmlAtCurrentPos(chunk) {
    this.active = true;
    this.preprocessor.insertHtmlAtCurrentPos(chunk);
    this._runParsingLoop();
  }
  //Hibernation
  _ensureHibernation() {
    if (this.preprocessor.endOfChunkHit) {
      this.preprocessor.retreat(this.consumedAfterSnapshot);
      this.consumedAfterSnapshot = 0;
      this.active = false;
      return true;
    }
    return false;
  }
  //Consumption
  _consume() {
    this.consumedAfterSnapshot++;
    return this.preprocessor.advance();
  }
  _advanceBy(count) {
    this.consumedAfterSnapshot += count;
    for (let i = 0; i < count; i++) {
      this.preprocessor.advance();
    }
  }
  _consumeSequenceIfMatch(pattern, caseSensitive) {
    if (this.preprocessor.startsWith(pattern, caseSensitive)) {
      this._advanceBy(pattern.length - 1);
      return true;
    }
    return false;
  }
  //Token creation
  _createStartTagToken() {
    this.currentToken = {
      type: TokenType.START_TAG,
      tagName: "",
      tagID: TAG_ID.UNKNOWN,
      selfClosing: false,
      ackSelfClosing: false,
      attrs: [],
      location: this.getCurrentLocation(1)
    };
  }
  _createEndTagToken() {
    this.currentToken = {
      type: TokenType.END_TAG,
      tagName: "",
      tagID: TAG_ID.UNKNOWN,
      selfClosing: false,
      ackSelfClosing: false,
      attrs: [],
      location: this.getCurrentLocation(2)
    };
  }
  _createCommentToken(offset) {
    this.currentToken = {
      type: TokenType.COMMENT,
      data: "",
      location: this.getCurrentLocation(offset)
    };
  }
  _createDoctypeToken(initialName) {
    this.currentToken = {
      type: TokenType.DOCTYPE,
      name: initialName,
      forceQuirks: false,
      publicId: null,
      systemId: null,
      location: this.currentLocation
    };
  }
  _createCharacterToken(type, chars) {
    this.currentCharacterToken = {
      type,
      chars,
      location: this.currentLocation
    };
  }
  //Tag attributes
  _createAttr(attrNameFirstCh) {
    this.currentAttr = {
      name: attrNameFirstCh,
      value: ""
    };
    this.currentLocation = this.getCurrentLocation(0);
  }
  _leaveAttrName() {
    var _a;
    var _b;
    const token = this.currentToken;
    if (getTokenAttr(token, this.currentAttr.name) === null) {
      token.attrs.push(this.currentAttr);
      if (token.location && this.currentLocation) {
        const attrLocations = (_a = (_b = token.location).attrs) !== null && _a !== void 0 ? _a : _b.attrs = /* @__PURE__ */ Object.create(null);
        attrLocations[this.currentAttr.name] = this.currentLocation;
        this._leaveAttrValue();
      }
    } else {
      this._err(ERR.duplicateAttribute);
    }
  }
  _leaveAttrValue() {
    if (this.currentLocation) {
      this.currentLocation.endLine = this.preprocessor.line;
      this.currentLocation.endCol = this.preprocessor.col;
      this.currentLocation.endOffset = this.preprocessor.offset;
    }
  }
  //Token emission
  prepareToken(ct) {
    this._emitCurrentCharacterToken(ct.location);
    this.currentToken = null;
    if (ct.location) {
      ct.location.endLine = this.preprocessor.line;
      ct.location.endCol = this.preprocessor.col + 1;
      ct.location.endOffset = this.preprocessor.offset + 1;
    }
    this.currentLocation = this.getCurrentLocation(-1);
  }
  emitCurrentTagToken() {
    const ct = this.currentToken;
    this.prepareToken(ct);
    ct.tagID = getTagID(ct.tagName);
    if (ct.type === TokenType.START_TAG) {
      this.lastStartTagName = ct.tagName;
      this.handler.onStartTag(ct);
    } else {
      if (ct.attrs.length > 0) {
        this._err(ERR.endTagWithAttributes);
      }
      if (ct.selfClosing) {
        this._err(ERR.endTagWithTrailingSolidus);
      }
      this.handler.onEndTag(ct);
    }
    this.preprocessor.dropParsedChunk();
  }
  emitCurrentComment(ct) {
    this.prepareToken(ct);
    this.handler.onComment(ct);
    this.preprocessor.dropParsedChunk();
  }
  emitCurrentDoctype(ct) {
    this.prepareToken(ct);
    this.handler.onDoctype(ct);
    this.preprocessor.dropParsedChunk();
  }
  _emitCurrentCharacterToken(nextLocation) {
    if (this.currentCharacterToken) {
      if (nextLocation && this.currentCharacterToken.location) {
        this.currentCharacterToken.location.endLine = nextLocation.startLine;
        this.currentCharacterToken.location.endCol = nextLocation.startCol;
        this.currentCharacterToken.location.endOffset = nextLocation.startOffset;
      }
      switch (this.currentCharacterToken.type) {
        case TokenType.CHARACTER: {
          this.handler.onCharacter(this.currentCharacterToken);
          break;
        }
        case TokenType.NULL_CHARACTER: {
          this.handler.onNullCharacter(this.currentCharacterToken);
          break;
        }
        case TokenType.WHITESPACE_CHARACTER: {
          this.handler.onWhitespaceCharacter(this.currentCharacterToken);
          break;
        }
      }
      this.currentCharacterToken = null;
    }
  }
  _emitEOFToken() {
    const location2 = this.getCurrentLocation(0);
    if (location2) {
      location2.endLine = location2.startLine;
      location2.endCol = location2.startCol;
      location2.endOffset = location2.startOffset;
    }
    this._emitCurrentCharacterToken(location2);
    this.handler.onEof({ type: TokenType.EOF, location: location2 });
    this.active = false;
  }
  //Characters emission
  //OPTIMIZATION: The specification uses only one type of character token (one token per character).
  //This causes a huge memory overhead and a lot of unnecessary parser loops. parse5 uses 3 groups of characters.
  //If we have a sequence of characters that belong to the same group, the parser can process it
  //as a single solid character token.
  //So, there are 3 types of character tokens in parse5:
  //1)TokenType.NULL_CHARACTER - \u0000-character sequences (e.g. '\u0000\u0000\u0000')
  //2)TokenType.WHITESPACE_CHARACTER - any whitespace/new-line character sequences (e.g. '\n  \r\t   \f')
  //3)TokenType.CHARACTER - any character sequence which don't belong to groups 1 and 2 (e.g. 'abcdef1234@@#$%^')
  _appendCharToCurrentCharacterToken(type, ch) {
    if (this.currentCharacterToken) {
      if (this.currentCharacterToken.type === type) {
        this.currentCharacterToken.chars += ch;
        return;
      } else {
        this.currentLocation = this.getCurrentLocation(0);
        this._emitCurrentCharacterToken(this.currentLocation);
        this.preprocessor.dropParsedChunk();
      }
    }
    this._createCharacterToken(type, ch);
  }
  _emitCodePoint(cp) {
    const type = isWhitespace(cp) ? TokenType.WHITESPACE_CHARACTER : cp === CODE_POINTS.NULL ? TokenType.NULL_CHARACTER : TokenType.CHARACTER;
    this._appendCharToCurrentCharacterToken(type, String.fromCodePoint(cp));
  }
  //NOTE: used when we emit characters explicitly.
  //This is always for non-whitespace and non-null characters, which allows us to avoid additional checks.
  _emitChars(ch) {
    this._appendCharToCurrentCharacterToken(TokenType.CHARACTER, ch);
  }
  // Character reference helpers
  _startCharacterReference() {
    this.returnState = this.state;
    this.state = State.CHARACTER_REFERENCE;
    this.entityStartPos = this.preprocessor.pos;
    this.entityDecoder.startEntity(this._isCharacterReferenceInAttribute() ? DecodingMode.Attribute : DecodingMode.Legacy);
  }
  _isCharacterReferenceInAttribute() {
    return this.returnState === State.ATTRIBUTE_VALUE_DOUBLE_QUOTED || this.returnState === State.ATTRIBUTE_VALUE_SINGLE_QUOTED || this.returnState === State.ATTRIBUTE_VALUE_UNQUOTED;
  }
  _flushCodePointConsumedAsCharacterReference(cp) {
    if (this._isCharacterReferenceInAttribute()) {
      this.currentAttr.value += String.fromCodePoint(cp);
    } else {
      this._emitCodePoint(cp);
    }
  }
  // Calling states this way turns out to be much faster than any other approach.
  _callState(cp) {
    switch (this.state) {
      case State.DATA: {
        this._stateData(cp);
        break;
      }
      case State.RCDATA: {
        this._stateRcdata(cp);
        break;
      }
      case State.RAWTEXT: {
        this._stateRawtext(cp);
        break;
      }
      case State.SCRIPT_DATA: {
        this._stateScriptData(cp);
        break;
      }
      case State.PLAINTEXT: {
        this._statePlaintext(cp);
        break;
      }
      case State.TAG_OPEN: {
        this._stateTagOpen(cp);
        break;
      }
      case State.END_TAG_OPEN: {
        this._stateEndTagOpen(cp);
        break;
      }
      case State.TAG_NAME: {
        this._stateTagName(cp);
        break;
      }
      case State.RCDATA_LESS_THAN_SIGN: {
        this._stateRcdataLessThanSign(cp);
        break;
      }
      case State.RCDATA_END_TAG_OPEN: {
        this._stateRcdataEndTagOpen(cp);
        break;
      }
      case State.RCDATA_END_TAG_NAME: {
        this._stateRcdataEndTagName(cp);
        break;
      }
      case State.RAWTEXT_LESS_THAN_SIGN: {
        this._stateRawtextLessThanSign(cp);
        break;
      }
      case State.RAWTEXT_END_TAG_OPEN: {
        this._stateRawtextEndTagOpen(cp);
        break;
      }
      case State.RAWTEXT_END_TAG_NAME: {
        this._stateRawtextEndTagName(cp);
        break;
      }
      case State.SCRIPT_DATA_LESS_THAN_SIGN: {
        this._stateScriptDataLessThanSign(cp);
        break;
      }
      case State.SCRIPT_DATA_END_TAG_OPEN: {
        this._stateScriptDataEndTagOpen(cp);
        break;
      }
      case State.SCRIPT_DATA_END_TAG_NAME: {
        this._stateScriptDataEndTagName(cp);
        break;
      }
      case State.SCRIPT_DATA_ESCAPE_START: {
        this._stateScriptDataEscapeStart(cp);
        break;
      }
      case State.SCRIPT_DATA_ESCAPE_START_DASH: {
        this._stateScriptDataEscapeStartDash(cp);
        break;
      }
      case State.SCRIPT_DATA_ESCAPED: {
        this._stateScriptDataEscaped(cp);
        break;
      }
      case State.SCRIPT_DATA_ESCAPED_DASH: {
        this._stateScriptDataEscapedDash(cp);
        break;
      }
      case State.SCRIPT_DATA_ESCAPED_DASH_DASH: {
        this._stateScriptDataEscapedDashDash(cp);
        break;
      }
      case State.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN: {
        this._stateScriptDataEscapedLessThanSign(cp);
        break;
      }
      case State.SCRIPT_DATA_ESCAPED_END_TAG_OPEN: {
        this._stateScriptDataEscapedEndTagOpen(cp);
        break;
      }
      case State.SCRIPT_DATA_ESCAPED_END_TAG_NAME: {
        this._stateScriptDataEscapedEndTagName(cp);
        break;
      }
      case State.SCRIPT_DATA_DOUBLE_ESCAPE_START: {
        this._stateScriptDataDoubleEscapeStart(cp);
        break;
      }
      case State.SCRIPT_DATA_DOUBLE_ESCAPED: {
        this._stateScriptDataDoubleEscaped(cp);
        break;
      }
      case State.SCRIPT_DATA_DOUBLE_ESCAPED_DASH: {
        this._stateScriptDataDoubleEscapedDash(cp);
        break;
      }
      case State.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH: {
        this._stateScriptDataDoubleEscapedDashDash(cp);
        break;
      }
      case State.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN: {
        this._stateScriptDataDoubleEscapedLessThanSign(cp);
        break;
      }
      case State.SCRIPT_DATA_DOUBLE_ESCAPE_END: {
        this._stateScriptDataDoubleEscapeEnd(cp);
        break;
      }
      case State.BEFORE_ATTRIBUTE_NAME: {
        this._stateBeforeAttributeName(cp);
        break;
      }
      case State.ATTRIBUTE_NAME: {
        this._stateAttributeName(cp);
        break;
      }
      case State.AFTER_ATTRIBUTE_NAME: {
        this._stateAfterAttributeName(cp);
        break;
      }
      case State.BEFORE_ATTRIBUTE_VALUE: {
        this._stateBeforeAttributeValue(cp);
        break;
      }
      case State.ATTRIBUTE_VALUE_DOUBLE_QUOTED: {
        this._stateAttributeValueDoubleQuoted(cp);
        break;
      }
      case State.ATTRIBUTE_VALUE_SINGLE_QUOTED: {
        this._stateAttributeValueSingleQuoted(cp);
        break;
      }
      case State.ATTRIBUTE_VALUE_UNQUOTED: {
        this._stateAttributeValueUnquoted(cp);
        break;
      }
      case State.AFTER_ATTRIBUTE_VALUE_QUOTED: {
        this._stateAfterAttributeValueQuoted(cp);
        break;
      }
      case State.SELF_CLOSING_START_TAG: {
        this._stateSelfClosingStartTag(cp);
        break;
      }
      case State.BOGUS_COMMENT: {
        this._stateBogusComment(cp);
        break;
      }
      case State.MARKUP_DECLARATION_OPEN: {
        this._stateMarkupDeclarationOpen(cp);
        break;
      }
      case State.COMMENT_START: {
        this._stateCommentStart(cp);
        break;
      }
      case State.COMMENT_START_DASH: {
        this._stateCommentStartDash(cp);
        break;
      }
      case State.COMMENT: {
        this._stateComment(cp);
        break;
      }
      case State.COMMENT_LESS_THAN_SIGN: {
        this._stateCommentLessThanSign(cp);
        break;
      }
      case State.COMMENT_LESS_THAN_SIGN_BANG: {
        this._stateCommentLessThanSignBang(cp);
        break;
      }
      case State.COMMENT_LESS_THAN_SIGN_BANG_DASH: {
        this._stateCommentLessThanSignBangDash(cp);
        break;
      }
      case State.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH: {
        this._stateCommentLessThanSignBangDashDash(cp);
        break;
      }
      case State.COMMENT_END_DASH: {
        this._stateCommentEndDash(cp);
        break;
      }
      case State.COMMENT_END: {
        this._stateCommentEnd(cp);
        break;
      }
      case State.COMMENT_END_BANG: {
        this._stateCommentEndBang(cp);
        break;
      }
      case State.DOCTYPE: {
        this._stateDoctype(cp);
        break;
      }
      case State.BEFORE_DOCTYPE_NAME: {
        this._stateBeforeDoctypeName(cp);
        break;
      }
      case State.DOCTYPE_NAME: {
        this._stateDoctypeName(cp);
        break;
      }
      case State.AFTER_DOCTYPE_NAME: {
        this._stateAfterDoctypeName(cp);
        break;
      }
      case State.AFTER_DOCTYPE_PUBLIC_KEYWORD: {
        this._stateAfterDoctypePublicKeyword(cp);
        break;
      }
      case State.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER: {
        this._stateBeforeDoctypePublicIdentifier(cp);
        break;
      }
      case State.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED: {
        this._stateDoctypePublicIdentifierDoubleQuoted(cp);
        break;
      }
      case State.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED: {
        this._stateDoctypePublicIdentifierSingleQuoted(cp);
        break;
      }
      case State.AFTER_DOCTYPE_PUBLIC_IDENTIFIER: {
        this._stateAfterDoctypePublicIdentifier(cp);
        break;
      }
      case State.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS: {
        this._stateBetweenDoctypePublicAndSystemIdentifiers(cp);
        break;
      }
      case State.AFTER_DOCTYPE_SYSTEM_KEYWORD: {
        this._stateAfterDoctypeSystemKeyword(cp);
        break;
      }
      case State.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER: {
        this._stateBeforeDoctypeSystemIdentifier(cp);
        break;
      }
      case State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED: {
        this._stateDoctypeSystemIdentifierDoubleQuoted(cp);
        break;
      }
      case State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED: {
        this._stateDoctypeSystemIdentifierSingleQuoted(cp);
        break;
      }
      case State.AFTER_DOCTYPE_SYSTEM_IDENTIFIER: {
        this._stateAfterDoctypeSystemIdentifier(cp);
        break;
      }
      case State.BOGUS_DOCTYPE: {
        this._stateBogusDoctype(cp);
        break;
      }
      case State.CDATA_SECTION: {
        this._stateCdataSection(cp);
        break;
      }
      case State.CDATA_SECTION_BRACKET: {
        this._stateCdataSectionBracket(cp);
        break;
      }
      case State.CDATA_SECTION_END: {
        this._stateCdataSectionEnd(cp);
        break;
      }
      case State.CHARACTER_REFERENCE: {
        this._stateCharacterReference();
        break;
      }
      case State.AMBIGUOUS_AMPERSAND: {
        this._stateAmbiguousAmpersand(cp);
        break;
      }
      default: {
        throw new Error("Unknown state");
      }
    }
  }
  // State machine
  // Data state
  //------------------------------------------------------------------
  _stateData(cp) {
    switch (cp) {
      case CODE_POINTS.LESS_THAN_SIGN: {
        this.state = State.TAG_OPEN;
        break;
      }
      case CODE_POINTS.AMPERSAND: {
        this._startCharacterReference();
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter);
        this._emitCodePoint(cp);
        break;
      }
      case CODE_POINTS.EOF: {
        this._emitEOFToken();
        break;
      }
      default: {
        this._emitCodePoint(cp);
      }
    }
  }
  //  RCDATA state
  //------------------------------------------------------------------
  _stateRcdata(cp) {
    switch (cp) {
      case CODE_POINTS.AMPERSAND: {
        this._startCharacterReference();
        break;
      }
      case CODE_POINTS.LESS_THAN_SIGN: {
        this.state = State.RCDATA_LESS_THAN_SIGN;
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter);
        this._emitChars(REPLACEMENT_CHARACTER);
        break;
      }
      case CODE_POINTS.EOF: {
        this._emitEOFToken();
        break;
      }
      default: {
        this._emitCodePoint(cp);
      }
    }
  }
  // RAWTEXT state
  //------------------------------------------------------------------
  _stateRawtext(cp) {
    switch (cp) {
      case CODE_POINTS.LESS_THAN_SIGN: {
        this.state = State.RAWTEXT_LESS_THAN_SIGN;
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter);
        this._emitChars(REPLACEMENT_CHARACTER);
        break;
      }
      case CODE_POINTS.EOF: {
        this._emitEOFToken();
        break;
      }
      default: {
        this._emitCodePoint(cp);
      }
    }
  }
  // Script data state
  //------------------------------------------------------------------
  _stateScriptData(cp) {
    switch (cp) {
      case CODE_POINTS.LESS_THAN_SIGN: {
        this.state = State.SCRIPT_DATA_LESS_THAN_SIGN;
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter);
        this._emitChars(REPLACEMENT_CHARACTER);
        break;
      }
      case CODE_POINTS.EOF: {
        this._emitEOFToken();
        break;
      }
      default: {
        this._emitCodePoint(cp);
      }
    }
  }
  // PLAINTEXT state
  //------------------------------------------------------------------
  _statePlaintext(cp) {
    switch (cp) {
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter);
        this._emitChars(REPLACEMENT_CHARACTER);
        break;
      }
      case CODE_POINTS.EOF: {
        this._emitEOFToken();
        break;
      }
      default: {
        this._emitCodePoint(cp);
      }
    }
  }
  // Tag open state
  //------------------------------------------------------------------
  _stateTagOpen(cp) {
    if (isAsciiLetter(cp)) {
      this._createStartTagToken();
      this.state = State.TAG_NAME;
      this._stateTagName(cp);
    } else
      switch (cp) {
        case CODE_POINTS.EXCLAMATION_MARK: {
          this.state = State.MARKUP_DECLARATION_OPEN;
          break;
        }
        case CODE_POINTS.SOLIDUS: {
          this.state = State.END_TAG_OPEN;
          break;
        }
        case CODE_POINTS.QUESTION_MARK: {
          this._err(ERR.unexpectedQuestionMarkInsteadOfTagName);
          this._createCommentToken(1);
          this.state = State.BOGUS_COMMENT;
          this._stateBogusComment(cp);
          break;
        }
        case CODE_POINTS.EOF: {
          this._err(ERR.eofBeforeTagName);
          this._emitChars("<");
          this._emitEOFToken();
          break;
        }
        default: {
          this._err(ERR.invalidFirstCharacterOfTagName);
          this._emitChars("<");
          this.state = State.DATA;
          this._stateData(cp);
        }
      }
  }
  // End tag open state
  //------------------------------------------------------------------
  _stateEndTagOpen(cp) {
    if (isAsciiLetter(cp)) {
      this._createEndTagToken();
      this.state = State.TAG_NAME;
      this._stateTagName(cp);
    } else
      switch (cp) {
        case CODE_POINTS.GREATER_THAN_SIGN: {
          this._err(ERR.missingEndTagName);
          this.state = State.DATA;
          break;
        }
        case CODE_POINTS.EOF: {
          this._err(ERR.eofBeforeTagName);
          this._emitChars("</");
          this._emitEOFToken();
          break;
        }
        default: {
          this._err(ERR.invalidFirstCharacterOfTagName);
          this._createCommentToken(2);
          this.state = State.BOGUS_COMMENT;
          this._stateBogusComment(cp);
        }
      }
  }
  // Tag name state
  //------------------------------------------------------------------
  _stateTagName(cp) {
    const token = this.currentToken;
    switch (cp) {
      case CODE_POINTS.SPACE:
      case CODE_POINTS.LINE_FEED:
      case CODE_POINTS.TABULATION:
      case CODE_POINTS.FORM_FEED: {
        this.state = State.BEFORE_ATTRIBUTE_NAME;
        break;
      }
      case CODE_POINTS.SOLIDUS: {
        this.state = State.SELF_CLOSING_START_TAG;
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this.state = State.DATA;
        this.emitCurrentTagToken();
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter);
        token.tagName += REPLACEMENT_CHARACTER;
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInTag);
        this._emitEOFToken();
        break;
      }
      default: {
        token.tagName += String.fromCodePoint(isAsciiUpper(cp) ? toAsciiLower(cp) : cp);
      }
    }
  }
  // RCDATA less-than sign state
  //------------------------------------------------------------------
  _stateRcdataLessThanSign(cp) {
    if (cp === CODE_POINTS.SOLIDUS) {
      this.state = State.RCDATA_END_TAG_OPEN;
    } else {
      this._emitChars("<");
      this.state = State.RCDATA;
      this._stateRcdata(cp);
    }
  }
  // RCDATA end tag open state
  //------------------------------------------------------------------
  _stateRcdataEndTagOpen(cp) {
    if (isAsciiLetter(cp)) {
      this.state = State.RCDATA_END_TAG_NAME;
      this._stateRcdataEndTagName(cp);
    } else {
      this._emitChars("</");
      this.state = State.RCDATA;
      this._stateRcdata(cp);
    }
  }
  handleSpecialEndTag(_cp) {
    if (!this.preprocessor.startsWith(this.lastStartTagName, false)) {
      return !this._ensureHibernation();
    }
    this._createEndTagToken();
    const token = this.currentToken;
    token.tagName = this.lastStartTagName;
    const cp = this.preprocessor.peek(this.lastStartTagName.length);
    switch (cp) {
      case CODE_POINTS.SPACE:
      case CODE_POINTS.LINE_FEED:
      case CODE_POINTS.TABULATION:
      case CODE_POINTS.FORM_FEED: {
        this._advanceBy(this.lastStartTagName.length);
        this.state = State.BEFORE_ATTRIBUTE_NAME;
        return false;
      }
      case CODE_POINTS.SOLIDUS: {
        this._advanceBy(this.lastStartTagName.length);
        this.state = State.SELF_CLOSING_START_TAG;
        return false;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this._advanceBy(this.lastStartTagName.length);
        this.emitCurrentTagToken();
        this.state = State.DATA;
        return false;
      }
      default: {
        return !this._ensureHibernation();
      }
    }
  }
  // RCDATA end tag name state
  //------------------------------------------------------------------
  _stateRcdataEndTagName(cp) {
    if (this.handleSpecialEndTag(cp)) {
      this._emitChars("</");
      this.state = State.RCDATA;
      this._stateRcdata(cp);
    }
  }
  // RAWTEXT less-than sign state
  //------------------------------------------------------------------
  _stateRawtextLessThanSign(cp) {
    if (cp === CODE_POINTS.SOLIDUS) {
      this.state = State.RAWTEXT_END_TAG_OPEN;
    } else {
      this._emitChars("<");
      this.state = State.RAWTEXT;
      this._stateRawtext(cp);
    }
  }
  // RAWTEXT end tag open state
  //------------------------------------------------------------------
  _stateRawtextEndTagOpen(cp) {
    if (isAsciiLetter(cp)) {
      this.state = State.RAWTEXT_END_TAG_NAME;
      this._stateRawtextEndTagName(cp);
    } else {
      this._emitChars("</");
      this.state = State.RAWTEXT;
      this._stateRawtext(cp);
    }
  }
  // RAWTEXT end tag name state
  //------------------------------------------------------------------
  _stateRawtextEndTagName(cp) {
    if (this.handleSpecialEndTag(cp)) {
      this._emitChars("</");
      this.state = State.RAWTEXT;
      this._stateRawtext(cp);
    }
  }
  // Script data less-than sign state
  //------------------------------------------------------------------
  _stateScriptDataLessThanSign(cp) {
    switch (cp) {
      case CODE_POINTS.SOLIDUS: {
        this.state = State.SCRIPT_DATA_END_TAG_OPEN;
        break;
      }
      case CODE_POINTS.EXCLAMATION_MARK: {
        this.state = State.SCRIPT_DATA_ESCAPE_START;
        this._emitChars("<!");
        break;
      }
      default: {
        this._emitChars("<");
        this.state = State.SCRIPT_DATA;
        this._stateScriptData(cp);
      }
    }
  }
  // Script data end tag open state
  //------------------------------------------------------------------
  _stateScriptDataEndTagOpen(cp) {
    if (isAsciiLetter(cp)) {
      this.state = State.SCRIPT_DATA_END_TAG_NAME;
      this._stateScriptDataEndTagName(cp);
    } else {
      this._emitChars("</");
      this.state = State.SCRIPT_DATA;
      this._stateScriptData(cp);
    }
  }
  // Script data end tag name state
  //------------------------------------------------------------------
  _stateScriptDataEndTagName(cp) {
    if (this.handleSpecialEndTag(cp)) {
      this._emitChars("</");
      this.state = State.SCRIPT_DATA;
      this._stateScriptData(cp);
    }
  }
  // Script data escape start state
  //------------------------------------------------------------------
  _stateScriptDataEscapeStart(cp) {
    if (cp === CODE_POINTS.HYPHEN_MINUS) {
      this.state = State.SCRIPT_DATA_ESCAPE_START_DASH;
      this._emitChars("-");
    } else {
      this.state = State.SCRIPT_DATA;
      this._stateScriptData(cp);
    }
  }
  // Script data escape start dash state
  //------------------------------------------------------------------
  _stateScriptDataEscapeStartDash(cp) {
    if (cp === CODE_POINTS.HYPHEN_MINUS) {
      this.state = State.SCRIPT_DATA_ESCAPED_DASH_DASH;
      this._emitChars("-");
    } else {
      this.state = State.SCRIPT_DATA;
      this._stateScriptData(cp);
    }
  }
  // Script data escaped state
  //------------------------------------------------------------------
  _stateScriptDataEscaped(cp) {
    switch (cp) {
      case CODE_POINTS.HYPHEN_MINUS: {
        this.state = State.SCRIPT_DATA_ESCAPED_DASH;
        this._emitChars("-");
        break;
      }
      case CODE_POINTS.LESS_THAN_SIGN: {
        this.state = State.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter);
        this._emitChars(REPLACEMENT_CHARACTER);
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInScriptHtmlCommentLikeText);
        this._emitEOFToken();
        break;
      }
      default: {
        this._emitCodePoint(cp);
      }
    }
  }
  // Script data escaped dash state
  //------------------------------------------------------------------
  _stateScriptDataEscapedDash(cp) {
    switch (cp) {
      case CODE_POINTS.HYPHEN_MINUS: {
        this.state = State.SCRIPT_DATA_ESCAPED_DASH_DASH;
        this._emitChars("-");
        break;
      }
      case CODE_POINTS.LESS_THAN_SIGN: {
        this.state = State.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter);
        this.state = State.SCRIPT_DATA_ESCAPED;
        this._emitChars(REPLACEMENT_CHARACTER);
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInScriptHtmlCommentLikeText);
        this._emitEOFToken();
        break;
      }
      default: {
        this.state = State.SCRIPT_DATA_ESCAPED;
        this._emitCodePoint(cp);
      }
    }
  }
  // Script data escaped dash dash state
  //------------------------------------------------------------------
  _stateScriptDataEscapedDashDash(cp) {
    switch (cp) {
      case CODE_POINTS.HYPHEN_MINUS: {
        this._emitChars("-");
        break;
      }
      case CODE_POINTS.LESS_THAN_SIGN: {
        this.state = State.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this.state = State.SCRIPT_DATA;
        this._emitChars(">");
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter);
        this.state = State.SCRIPT_DATA_ESCAPED;
        this._emitChars(REPLACEMENT_CHARACTER);
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInScriptHtmlCommentLikeText);
        this._emitEOFToken();
        break;
      }
      default: {
        this.state = State.SCRIPT_DATA_ESCAPED;
        this._emitCodePoint(cp);
      }
    }
  }
  // Script data escaped less-than sign state
  //------------------------------------------------------------------
  _stateScriptDataEscapedLessThanSign(cp) {
    if (cp === CODE_POINTS.SOLIDUS) {
      this.state = State.SCRIPT_DATA_ESCAPED_END_TAG_OPEN;
    } else if (isAsciiLetter(cp)) {
      this._emitChars("<");
      this.state = State.SCRIPT_DATA_DOUBLE_ESCAPE_START;
      this._stateScriptDataDoubleEscapeStart(cp);
    } else {
      this._emitChars("<");
      this.state = State.SCRIPT_DATA_ESCAPED;
      this._stateScriptDataEscaped(cp);
    }
  }
  // Script data escaped end tag open state
  //------------------------------------------------------------------
  _stateScriptDataEscapedEndTagOpen(cp) {
    if (isAsciiLetter(cp)) {
      this.state = State.SCRIPT_DATA_ESCAPED_END_TAG_NAME;
      this._stateScriptDataEscapedEndTagName(cp);
    } else {
      this._emitChars("</");
      this.state = State.SCRIPT_DATA_ESCAPED;
      this._stateScriptDataEscaped(cp);
    }
  }
  // Script data escaped end tag name state
  //------------------------------------------------------------------
  _stateScriptDataEscapedEndTagName(cp) {
    if (this.handleSpecialEndTag(cp)) {
      this._emitChars("</");
      this.state = State.SCRIPT_DATA_ESCAPED;
      this._stateScriptDataEscaped(cp);
    }
  }
  // Script data double escape start state
  //------------------------------------------------------------------
  _stateScriptDataDoubleEscapeStart(cp) {
    if (this.preprocessor.startsWith(SEQUENCES.SCRIPT, false) && isScriptDataDoubleEscapeSequenceEnd(this.preprocessor.peek(SEQUENCES.SCRIPT.length))) {
      this._emitCodePoint(cp);
      for (let i = 0; i < SEQUENCES.SCRIPT.length; i++) {
        this._emitCodePoint(this._consume());
      }
      this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
    } else if (!this._ensureHibernation()) {
      this.state = State.SCRIPT_DATA_ESCAPED;
      this._stateScriptDataEscaped(cp);
    }
  }
  // Script data double escaped state
  //------------------------------------------------------------------
  _stateScriptDataDoubleEscaped(cp) {
    switch (cp) {
      case CODE_POINTS.HYPHEN_MINUS: {
        this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_DASH;
        this._emitChars("-");
        break;
      }
      case CODE_POINTS.LESS_THAN_SIGN: {
        this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN;
        this._emitChars("<");
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter);
        this._emitChars(REPLACEMENT_CHARACTER);
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInScriptHtmlCommentLikeText);
        this._emitEOFToken();
        break;
      }
      default: {
        this._emitCodePoint(cp);
      }
    }
  }
  // Script data double escaped dash state
  //------------------------------------------------------------------
  _stateScriptDataDoubleEscapedDash(cp) {
    switch (cp) {
      case CODE_POINTS.HYPHEN_MINUS: {
        this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH;
        this._emitChars("-");
        break;
      }
      case CODE_POINTS.LESS_THAN_SIGN: {
        this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN;
        this._emitChars("<");
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter);
        this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
        this._emitChars(REPLACEMENT_CHARACTER);
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInScriptHtmlCommentLikeText);
        this._emitEOFToken();
        break;
      }
      default: {
        this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
        this._emitCodePoint(cp);
      }
    }
  }
  // Script data double escaped dash dash state
  //------------------------------------------------------------------
  _stateScriptDataDoubleEscapedDashDash(cp) {
    switch (cp) {
      case CODE_POINTS.HYPHEN_MINUS: {
        this._emitChars("-");
        break;
      }
      case CODE_POINTS.LESS_THAN_SIGN: {
        this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN;
        this._emitChars("<");
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this.state = State.SCRIPT_DATA;
        this._emitChars(">");
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter);
        this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
        this._emitChars(REPLACEMENT_CHARACTER);
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInScriptHtmlCommentLikeText);
        this._emitEOFToken();
        break;
      }
      default: {
        this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
        this._emitCodePoint(cp);
      }
    }
  }
  // Script data double escaped less-than sign state
  //------------------------------------------------------------------
  _stateScriptDataDoubleEscapedLessThanSign(cp) {
    if (cp === CODE_POINTS.SOLIDUS) {
      this.state = State.SCRIPT_DATA_DOUBLE_ESCAPE_END;
      this._emitChars("/");
    } else {
      this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
      this._stateScriptDataDoubleEscaped(cp);
    }
  }
  // Script data double escape end state
  //------------------------------------------------------------------
  _stateScriptDataDoubleEscapeEnd(cp) {
    if (this.preprocessor.startsWith(SEQUENCES.SCRIPT, false) && isScriptDataDoubleEscapeSequenceEnd(this.preprocessor.peek(SEQUENCES.SCRIPT.length))) {
      this._emitCodePoint(cp);
      for (let i = 0; i < SEQUENCES.SCRIPT.length; i++) {
        this._emitCodePoint(this._consume());
      }
      this.state = State.SCRIPT_DATA_ESCAPED;
    } else if (!this._ensureHibernation()) {
      this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
      this._stateScriptDataDoubleEscaped(cp);
    }
  }
  // Before attribute name state
  //------------------------------------------------------------------
  _stateBeforeAttributeName(cp) {
    switch (cp) {
      case CODE_POINTS.SPACE:
      case CODE_POINTS.LINE_FEED:
      case CODE_POINTS.TABULATION:
      case CODE_POINTS.FORM_FEED: {
        break;
      }
      case CODE_POINTS.SOLIDUS:
      case CODE_POINTS.GREATER_THAN_SIGN:
      case CODE_POINTS.EOF: {
        this.state = State.AFTER_ATTRIBUTE_NAME;
        this._stateAfterAttributeName(cp);
        break;
      }
      case CODE_POINTS.EQUALS_SIGN: {
        this._err(ERR.unexpectedEqualsSignBeforeAttributeName);
        this._createAttr("=");
        this.state = State.ATTRIBUTE_NAME;
        break;
      }
      default: {
        this._createAttr("");
        this.state = State.ATTRIBUTE_NAME;
        this._stateAttributeName(cp);
      }
    }
  }
  // Attribute name state
  //------------------------------------------------------------------
  _stateAttributeName(cp) {
    switch (cp) {
      case CODE_POINTS.SPACE:
      case CODE_POINTS.LINE_FEED:
      case CODE_POINTS.TABULATION:
      case CODE_POINTS.FORM_FEED:
      case CODE_POINTS.SOLIDUS:
      case CODE_POINTS.GREATER_THAN_SIGN:
      case CODE_POINTS.EOF: {
        this._leaveAttrName();
        this.state = State.AFTER_ATTRIBUTE_NAME;
        this._stateAfterAttributeName(cp);
        break;
      }
      case CODE_POINTS.EQUALS_SIGN: {
        this._leaveAttrName();
        this.state = State.BEFORE_ATTRIBUTE_VALUE;
        break;
      }
      case CODE_POINTS.QUOTATION_MARK:
      case CODE_POINTS.APOSTROPHE:
      case CODE_POINTS.LESS_THAN_SIGN: {
        this._err(ERR.unexpectedCharacterInAttributeName);
        this.currentAttr.name += String.fromCodePoint(cp);
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter);
        this.currentAttr.name += REPLACEMENT_CHARACTER;
        break;
      }
      default: {
        this.currentAttr.name += String.fromCodePoint(isAsciiUpper(cp) ? toAsciiLower(cp) : cp);
      }
    }
  }
  // After attribute name state
  //------------------------------------------------------------------
  _stateAfterAttributeName(cp) {
    switch (cp) {
      case CODE_POINTS.SPACE:
      case CODE_POINTS.LINE_FEED:
      case CODE_POINTS.TABULATION:
      case CODE_POINTS.FORM_FEED: {
        break;
      }
      case CODE_POINTS.SOLIDUS: {
        this.state = State.SELF_CLOSING_START_TAG;
        break;
      }
      case CODE_POINTS.EQUALS_SIGN: {
        this.state = State.BEFORE_ATTRIBUTE_VALUE;
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this.state = State.DATA;
        this.emitCurrentTagToken();
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInTag);
        this._emitEOFToken();
        break;
      }
      default: {
        this._createAttr("");
        this.state = State.ATTRIBUTE_NAME;
        this._stateAttributeName(cp);
      }
    }
  }
  // Before attribute value state
  //------------------------------------------------------------------
  _stateBeforeAttributeValue(cp) {
    switch (cp) {
      case CODE_POINTS.SPACE:
      case CODE_POINTS.LINE_FEED:
      case CODE_POINTS.TABULATION:
      case CODE_POINTS.FORM_FEED: {
        break;
      }
      case CODE_POINTS.QUOTATION_MARK: {
        this.state = State.ATTRIBUTE_VALUE_DOUBLE_QUOTED;
        break;
      }
      case CODE_POINTS.APOSTROPHE: {
        this.state = State.ATTRIBUTE_VALUE_SINGLE_QUOTED;
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this._err(ERR.missingAttributeValue);
        this.state = State.DATA;
        this.emitCurrentTagToken();
        break;
      }
      default: {
        this.state = State.ATTRIBUTE_VALUE_UNQUOTED;
        this._stateAttributeValueUnquoted(cp);
      }
    }
  }
  // Attribute value (double-quoted) state
  //------------------------------------------------------------------
  _stateAttributeValueDoubleQuoted(cp) {
    switch (cp) {
      case CODE_POINTS.QUOTATION_MARK: {
        this.state = State.AFTER_ATTRIBUTE_VALUE_QUOTED;
        break;
      }
      case CODE_POINTS.AMPERSAND: {
        this._startCharacterReference();
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter);
        this.currentAttr.value += REPLACEMENT_CHARACTER;
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInTag);
        this._emitEOFToken();
        break;
      }
      default: {
        this.currentAttr.value += String.fromCodePoint(cp);
      }
    }
  }
  // Attribute value (single-quoted) state
  //------------------------------------------------------------------
  _stateAttributeValueSingleQuoted(cp) {
    switch (cp) {
      case CODE_POINTS.APOSTROPHE: {
        this.state = State.AFTER_ATTRIBUTE_VALUE_QUOTED;
        break;
      }
      case CODE_POINTS.AMPERSAND: {
        this._startCharacterReference();
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter);
        this.currentAttr.value += REPLACEMENT_CHARACTER;
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInTag);
        this._emitEOFToken();
        break;
      }
      default: {
        this.currentAttr.value += String.fromCodePoint(cp);
      }
    }
  }
  // Attribute value (unquoted) state
  //------------------------------------------------------------------
  _stateAttributeValueUnquoted(cp) {
    switch (cp) {
      case CODE_POINTS.SPACE:
      case CODE_POINTS.LINE_FEED:
      case CODE_POINTS.TABULATION:
      case CODE_POINTS.FORM_FEED: {
        this._leaveAttrValue();
        this.state = State.BEFORE_ATTRIBUTE_NAME;
        break;
      }
      case CODE_POINTS.AMPERSAND: {
        this._startCharacterReference();
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this._leaveAttrValue();
        this.state = State.DATA;
        this.emitCurrentTagToken();
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter);
        this.currentAttr.value += REPLACEMENT_CHARACTER;
        break;
      }
      case CODE_POINTS.QUOTATION_MARK:
      case CODE_POINTS.APOSTROPHE:
      case CODE_POINTS.LESS_THAN_SIGN:
      case CODE_POINTS.EQUALS_SIGN:
      case CODE_POINTS.GRAVE_ACCENT: {
        this._err(ERR.unexpectedCharacterInUnquotedAttributeValue);
        this.currentAttr.value += String.fromCodePoint(cp);
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInTag);
        this._emitEOFToken();
        break;
      }
      default: {
        this.currentAttr.value += String.fromCodePoint(cp);
      }
    }
  }
  // After attribute value (quoted) state
  //------------------------------------------------------------------
  _stateAfterAttributeValueQuoted(cp) {
    switch (cp) {
      case CODE_POINTS.SPACE:
      case CODE_POINTS.LINE_FEED:
      case CODE_POINTS.TABULATION:
      case CODE_POINTS.FORM_FEED: {
        this._leaveAttrValue();
        this.state = State.BEFORE_ATTRIBUTE_NAME;
        break;
      }
      case CODE_POINTS.SOLIDUS: {
        this._leaveAttrValue();
        this.state = State.SELF_CLOSING_START_TAG;
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this._leaveAttrValue();
        this.state = State.DATA;
        this.emitCurrentTagToken();
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInTag);
        this._emitEOFToken();
        break;
      }
      default: {
        this._err(ERR.missingWhitespaceBetweenAttributes);
        this.state = State.BEFORE_ATTRIBUTE_NAME;
        this._stateBeforeAttributeName(cp);
      }
    }
  }
  // Self-closing start tag state
  //------------------------------------------------------------------
  _stateSelfClosingStartTag(cp) {
    switch (cp) {
      case CODE_POINTS.GREATER_THAN_SIGN: {
        const token = this.currentToken;
        token.selfClosing = true;
        this.state = State.DATA;
        this.emitCurrentTagToken();
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInTag);
        this._emitEOFToken();
        break;
      }
      default: {
        this._err(ERR.unexpectedSolidusInTag);
        this.state = State.BEFORE_ATTRIBUTE_NAME;
        this._stateBeforeAttributeName(cp);
      }
    }
  }
  // Bogus comment state
  //------------------------------------------------------------------
  _stateBogusComment(cp) {
    const token = this.currentToken;
    switch (cp) {
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this.state = State.DATA;
        this.emitCurrentComment(token);
        break;
      }
      case CODE_POINTS.EOF: {
        this.emitCurrentComment(token);
        this._emitEOFToken();
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter);
        token.data += REPLACEMENT_CHARACTER;
        break;
      }
      default: {
        token.data += String.fromCodePoint(cp);
      }
    }
  }
  // Markup declaration open state
  //------------------------------------------------------------------
  _stateMarkupDeclarationOpen(cp) {
    if (this._consumeSequenceIfMatch(SEQUENCES.DASH_DASH, true)) {
      this._createCommentToken(SEQUENCES.DASH_DASH.length + 1);
      this.state = State.COMMENT_START;
    } else if (this._consumeSequenceIfMatch(SEQUENCES.DOCTYPE, false)) {
      this.currentLocation = this.getCurrentLocation(SEQUENCES.DOCTYPE.length + 1);
      this.state = State.DOCTYPE;
    } else if (this._consumeSequenceIfMatch(SEQUENCES.CDATA_START, true)) {
      if (this.inForeignNode) {
        this.state = State.CDATA_SECTION;
      } else {
        this._err(ERR.cdataInHtmlContent);
        this._createCommentToken(SEQUENCES.CDATA_START.length + 1);
        this.currentToken.data = "[CDATA[";
        this.state = State.BOGUS_COMMENT;
      }
    } else if (!this._ensureHibernation()) {
      this._err(ERR.incorrectlyOpenedComment);
      this._createCommentToken(2);
      this.state = State.BOGUS_COMMENT;
      this._stateBogusComment(cp);
    }
  }
  // Comment start state
  //------------------------------------------------------------------
  _stateCommentStart(cp) {
    switch (cp) {
      case CODE_POINTS.HYPHEN_MINUS: {
        this.state = State.COMMENT_START_DASH;
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this._err(ERR.abruptClosingOfEmptyComment);
        this.state = State.DATA;
        const token = this.currentToken;
        this.emitCurrentComment(token);
        break;
      }
      default: {
        this.state = State.COMMENT;
        this._stateComment(cp);
      }
    }
  }
  // Comment start dash state
  //------------------------------------------------------------------
  _stateCommentStartDash(cp) {
    const token = this.currentToken;
    switch (cp) {
      case CODE_POINTS.HYPHEN_MINUS: {
        this.state = State.COMMENT_END;
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this._err(ERR.abruptClosingOfEmptyComment);
        this.state = State.DATA;
        this.emitCurrentComment(token);
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInComment);
        this.emitCurrentComment(token);
        this._emitEOFToken();
        break;
      }
      default: {
        token.data += "-";
        this.state = State.COMMENT;
        this._stateComment(cp);
      }
    }
  }
  // Comment state
  //------------------------------------------------------------------
  _stateComment(cp) {
    const token = this.currentToken;
    switch (cp) {
      case CODE_POINTS.HYPHEN_MINUS: {
        this.state = State.COMMENT_END_DASH;
        break;
      }
      case CODE_POINTS.LESS_THAN_SIGN: {
        token.data += "<";
        this.state = State.COMMENT_LESS_THAN_SIGN;
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter);
        token.data += REPLACEMENT_CHARACTER;
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInComment);
        this.emitCurrentComment(token);
        this._emitEOFToken();
        break;
      }
      default: {
        token.data += String.fromCodePoint(cp);
      }
    }
  }
  // Comment less-than sign state
  //------------------------------------------------------------------
  _stateCommentLessThanSign(cp) {
    const token = this.currentToken;
    switch (cp) {
      case CODE_POINTS.EXCLAMATION_MARK: {
        token.data += "!";
        this.state = State.COMMENT_LESS_THAN_SIGN_BANG;
        break;
      }
      case CODE_POINTS.LESS_THAN_SIGN: {
        token.data += "<";
        break;
      }
      default: {
        this.state = State.COMMENT;
        this._stateComment(cp);
      }
    }
  }
  // Comment less-than sign bang state
  //------------------------------------------------------------------
  _stateCommentLessThanSignBang(cp) {
    if (cp === CODE_POINTS.HYPHEN_MINUS) {
      this.state = State.COMMENT_LESS_THAN_SIGN_BANG_DASH;
    } else {
      this.state = State.COMMENT;
      this._stateComment(cp);
    }
  }
  // Comment less-than sign bang dash state
  //------------------------------------------------------------------
  _stateCommentLessThanSignBangDash(cp) {
    if (cp === CODE_POINTS.HYPHEN_MINUS) {
      this.state = State.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH;
    } else {
      this.state = State.COMMENT_END_DASH;
      this._stateCommentEndDash(cp);
    }
  }
  // Comment less-than sign bang dash dash state
  //------------------------------------------------------------------
  _stateCommentLessThanSignBangDashDash(cp) {
    if (cp !== CODE_POINTS.GREATER_THAN_SIGN && cp !== CODE_POINTS.EOF) {
      this._err(ERR.nestedComment);
    }
    this.state = State.COMMENT_END;
    this._stateCommentEnd(cp);
  }
  // Comment end dash state
  //------------------------------------------------------------------
  _stateCommentEndDash(cp) {
    const token = this.currentToken;
    switch (cp) {
      case CODE_POINTS.HYPHEN_MINUS: {
        this.state = State.COMMENT_END;
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInComment);
        this.emitCurrentComment(token);
        this._emitEOFToken();
        break;
      }
      default: {
        token.data += "-";
        this.state = State.COMMENT;
        this._stateComment(cp);
      }
    }
  }
  // Comment end state
  //------------------------------------------------------------------
  _stateCommentEnd(cp) {
    const token = this.currentToken;
    switch (cp) {
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this.state = State.DATA;
        this.emitCurrentComment(token);
        break;
      }
      case CODE_POINTS.EXCLAMATION_MARK: {
        this.state = State.COMMENT_END_BANG;
        break;
      }
      case CODE_POINTS.HYPHEN_MINUS: {
        token.data += "-";
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInComment);
        this.emitCurrentComment(token);
        this._emitEOFToken();
        break;
      }
      default: {
        token.data += "--";
        this.state = State.COMMENT;
        this._stateComment(cp);
      }
    }
  }
  // Comment end bang state
  //------------------------------------------------------------------
  _stateCommentEndBang(cp) {
    const token = this.currentToken;
    switch (cp) {
      case CODE_POINTS.HYPHEN_MINUS: {
        token.data += "--!";
        this.state = State.COMMENT_END_DASH;
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this._err(ERR.incorrectlyClosedComment);
        this.state = State.DATA;
        this.emitCurrentComment(token);
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInComment);
        this.emitCurrentComment(token);
        this._emitEOFToken();
        break;
      }
      default: {
        token.data += "--!";
        this.state = State.COMMENT;
        this._stateComment(cp);
      }
    }
  }
  // DOCTYPE state
  //------------------------------------------------------------------
  _stateDoctype(cp) {
    switch (cp) {
      case CODE_POINTS.SPACE:
      case CODE_POINTS.LINE_FEED:
      case CODE_POINTS.TABULATION:
      case CODE_POINTS.FORM_FEED: {
        this.state = State.BEFORE_DOCTYPE_NAME;
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this.state = State.BEFORE_DOCTYPE_NAME;
        this._stateBeforeDoctypeName(cp);
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInDoctype);
        this._createDoctypeToken(null);
        const token = this.currentToken;
        token.forceQuirks = true;
        this.emitCurrentDoctype(token);
        this._emitEOFToken();
        break;
      }
      default: {
        this._err(ERR.missingWhitespaceBeforeDoctypeName);
        this.state = State.BEFORE_DOCTYPE_NAME;
        this._stateBeforeDoctypeName(cp);
      }
    }
  }
  // Before DOCTYPE name state
  //------------------------------------------------------------------
  _stateBeforeDoctypeName(cp) {
    if (isAsciiUpper(cp)) {
      this._createDoctypeToken(String.fromCharCode(toAsciiLower(cp)));
      this.state = State.DOCTYPE_NAME;
    } else
      switch (cp) {
        case CODE_POINTS.SPACE:
        case CODE_POINTS.LINE_FEED:
        case CODE_POINTS.TABULATION:
        case CODE_POINTS.FORM_FEED: {
          break;
        }
        case CODE_POINTS.NULL: {
          this._err(ERR.unexpectedNullCharacter);
          this._createDoctypeToken(REPLACEMENT_CHARACTER);
          this.state = State.DOCTYPE_NAME;
          break;
        }
        case CODE_POINTS.GREATER_THAN_SIGN: {
          this._err(ERR.missingDoctypeName);
          this._createDoctypeToken(null);
          const token = this.currentToken;
          token.forceQuirks = true;
          this.emitCurrentDoctype(token);
          this.state = State.DATA;
          break;
        }
        case CODE_POINTS.EOF: {
          this._err(ERR.eofInDoctype);
          this._createDoctypeToken(null);
          const token = this.currentToken;
          token.forceQuirks = true;
          this.emitCurrentDoctype(token);
          this._emitEOFToken();
          break;
        }
        default: {
          this._createDoctypeToken(String.fromCodePoint(cp));
          this.state = State.DOCTYPE_NAME;
        }
      }
  }
  // DOCTYPE name state
  //------------------------------------------------------------------
  _stateDoctypeName(cp) {
    const token = this.currentToken;
    switch (cp) {
      case CODE_POINTS.SPACE:
      case CODE_POINTS.LINE_FEED:
      case CODE_POINTS.TABULATION:
      case CODE_POINTS.FORM_FEED: {
        this.state = State.AFTER_DOCTYPE_NAME;
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this.state = State.DATA;
        this.emitCurrentDoctype(token);
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter);
        token.name += REPLACEMENT_CHARACTER;
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInDoctype);
        token.forceQuirks = true;
        this.emitCurrentDoctype(token);
        this._emitEOFToken();
        break;
      }
      default: {
        token.name += String.fromCodePoint(isAsciiUpper(cp) ? toAsciiLower(cp) : cp);
      }
    }
  }
  // After DOCTYPE name state
  //------------------------------------------------------------------
  _stateAfterDoctypeName(cp) {
    const token = this.currentToken;
    switch (cp) {
      case CODE_POINTS.SPACE:
      case CODE_POINTS.LINE_FEED:
      case CODE_POINTS.TABULATION:
      case CODE_POINTS.FORM_FEED: {
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this.state = State.DATA;
        this.emitCurrentDoctype(token);
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInDoctype);
        token.forceQuirks = true;
        this.emitCurrentDoctype(token);
        this._emitEOFToken();
        break;
      }
      default: {
        if (this._consumeSequenceIfMatch(SEQUENCES.PUBLIC, false)) {
          this.state = State.AFTER_DOCTYPE_PUBLIC_KEYWORD;
        } else if (this._consumeSequenceIfMatch(SEQUENCES.SYSTEM, false)) {
          this.state = State.AFTER_DOCTYPE_SYSTEM_KEYWORD;
        } else if (!this._ensureHibernation()) {
          this._err(ERR.invalidCharacterSequenceAfterDoctypeName);
          token.forceQuirks = true;
          this.state = State.BOGUS_DOCTYPE;
          this._stateBogusDoctype(cp);
        }
      }
    }
  }
  // After DOCTYPE public keyword state
  //------------------------------------------------------------------
  _stateAfterDoctypePublicKeyword(cp) {
    const token = this.currentToken;
    switch (cp) {
      case CODE_POINTS.SPACE:
      case CODE_POINTS.LINE_FEED:
      case CODE_POINTS.TABULATION:
      case CODE_POINTS.FORM_FEED: {
        this.state = State.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;
        break;
      }
      case CODE_POINTS.QUOTATION_MARK: {
        this._err(ERR.missingWhitespaceAfterDoctypePublicKeyword);
        token.publicId = "";
        this.state = State.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case CODE_POINTS.APOSTROPHE: {
        this._err(ERR.missingWhitespaceAfterDoctypePublicKeyword);
        token.publicId = "";
        this.state = State.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this._err(ERR.missingDoctypePublicIdentifier);
        token.forceQuirks = true;
        this.state = State.DATA;
        this.emitCurrentDoctype(token);
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInDoctype);
        token.forceQuirks = true;
        this.emitCurrentDoctype(token);
        this._emitEOFToken();
        break;
      }
      default: {
        this._err(ERR.missingQuoteBeforeDoctypePublicIdentifier);
        token.forceQuirks = true;
        this.state = State.BOGUS_DOCTYPE;
        this._stateBogusDoctype(cp);
      }
    }
  }
  // Before DOCTYPE public identifier state
  //------------------------------------------------------------------
  _stateBeforeDoctypePublicIdentifier(cp) {
    const token = this.currentToken;
    switch (cp) {
      case CODE_POINTS.SPACE:
      case CODE_POINTS.LINE_FEED:
      case CODE_POINTS.TABULATION:
      case CODE_POINTS.FORM_FEED: {
        break;
      }
      case CODE_POINTS.QUOTATION_MARK: {
        token.publicId = "";
        this.state = State.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case CODE_POINTS.APOSTROPHE: {
        token.publicId = "";
        this.state = State.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this._err(ERR.missingDoctypePublicIdentifier);
        token.forceQuirks = true;
        this.state = State.DATA;
        this.emitCurrentDoctype(token);
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInDoctype);
        token.forceQuirks = true;
        this.emitCurrentDoctype(token);
        this._emitEOFToken();
        break;
      }
      default: {
        this._err(ERR.missingQuoteBeforeDoctypePublicIdentifier);
        token.forceQuirks = true;
        this.state = State.BOGUS_DOCTYPE;
        this._stateBogusDoctype(cp);
      }
    }
  }
  // DOCTYPE public identifier (double-quoted) state
  //------------------------------------------------------------------
  _stateDoctypePublicIdentifierDoubleQuoted(cp) {
    const token = this.currentToken;
    switch (cp) {
      case CODE_POINTS.QUOTATION_MARK: {
        this.state = State.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter);
        token.publicId += REPLACEMENT_CHARACTER;
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this._err(ERR.abruptDoctypePublicIdentifier);
        token.forceQuirks = true;
        this.emitCurrentDoctype(token);
        this.state = State.DATA;
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInDoctype);
        token.forceQuirks = true;
        this.emitCurrentDoctype(token);
        this._emitEOFToken();
        break;
      }
      default: {
        token.publicId += String.fromCodePoint(cp);
      }
    }
  }
  // DOCTYPE public identifier (single-quoted) state
  //------------------------------------------------------------------
  _stateDoctypePublicIdentifierSingleQuoted(cp) {
    const token = this.currentToken;
    switch (cp) {
      case CODE_POINTS.APOSTROPHE: {
        this.state = State.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter);
        token.publicId += REPLACEMENT_CHARACTER;
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this._err(ERR.abruptDoctypePublicIdentifier);
        token.forceQuirks = true;
        this.emitCurrentDoctype(token);
        this.state = State.DATA;
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInDoctype);
        token.forceQuirks = true;
        this.emitCurrentDoctype(token);
        this._emitEOFToken();
        break;
      }
      default: {
        token.publicId += String.fromCodePoint(cp);
      }
    }
  }
  // After DOCTYPE public identifier state
  //------------------------------------------------------------------
  _stateAfterDoctypePublicIdentifier(cp) {
    const token = this.currentToken;
    switch (cp) {
      case CODE_POINTS.SPACE:
      case CODE_POINTS.LINE_FEED:
      case CODE_POINTS.TABULATION:
      case CODE_POINTS.FORM_FEED: {
        this.state = State.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this.state = State.DATA;
        this.emitCurrentDoctype(token);
        break;
      }
      case CODE_POINTS.QUOTATION_MARK: {
        this._err(ERR.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers);
        token.systemId = "";
        this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case CODE_POINTS.APOSTROPHE: {
        this._err(ERR.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers);
        token.systemId = "";
        this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInDoctype);
        token.forceQuirks = true;
        this.emitCurrentDoctype(token);
        this._emitEOFToken();
        break;
      }
      default: {
        this._err(ERR.missingQuoteBeforeDoctypeSystemIdentifier);
        token.forceQuirks = true;
        this.state = State.BOGUS_DOCTYPE;
        this._stateBogusDoctype(cp);
      }
    }
  }
  // Between DOCTYPE public and system identifiers state
  //------------------------------------------------------------------
  _stateBetweenDoctypePublicAndSystemIdentifiers(cp) {
    const token = this.currentToken;
    switch (cp) {
      case CODE_POINTS.SPACE:
      case CODE_POINTS.LINE_FEED:
      case CODE_POINTS.TABULATION:
      case CODE_POINTS.FORM_FEED: {
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this.emitCurrentDoctype(token);
        this.state = State.DATA;
        break;
      }
      case CODE_POINTS.QUOTATION_MARK: {
        token.systemId = "";
        this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case CODE_POINTS.APOSTROPHE: {
        token.systemId = "";
        this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInDoctype);
        token.forceQuirks = true;
        this.emitCurrentDoctype(token);
        this._emitEOFToken();
        break;
      }
      default: {
        this._err(ERR.missingQuoteBeforeDoctypeSystemIdentifier);
        token.forceQuirks = true;
        this.state = State.BOGUS_DOCTYPE;
        this._stateBogusDoctype(cp);
      }
    }
  }
  // After DOCTYPE system keyword state
  //------------------------------------------------------------------
  _stateAfterDoctypeSystemKeyword(cp) {
    const token = this.currentToken;
    switch (cp) {
      case CODE_POINTS.SPACE:
      case CODE_POINTS.LINE_FEED:
      case CODE_POINTS.TABULATION:
      case CODE_POINTS.FORM_FEED: {
        this.state = State.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;
        break;
      }
      case CODE_POINTS.QUOTATION_MARK: {
        this._err(ERR.missingWhitespaceAfterDoctypeSystemKeyword);
        token.systemId = "";
        this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case CODE_POINTS.APOSTROPHE: {
        this._err(ERR.missingWhitespaceAfterDoctypeSystemKeyword);
        token.systemId = "";
        this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this._err(ERR.missingDoctypeSystemIdentifier);
        token.forceQuirks = true;
        this.state = State.DATA;
        this.emitCurrentDoctype(token);
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInDoctype);
        token.forceQuirks = true;
        this.emitCurrentDoctype(token);
        this._emitEOFToken();
        break;
      }
      default: {
        this._err(ERR.missingQuoteBeforeDoctypeSystemIdentifier);
        token.forceQuirks = true;
        this.state = State.BOGUS_DOCTYPE;
        this._stateBogusDoctype(cp);
      }
    }
  }
  // Before DOCTYPE system identifier state
  //------------------------------------------------------------------
  _stateBeforeDoctypeSystemIdentifier(cp) {
    const token = this.currentToken;
    switch (cp) {
      case CODE_POINTS.SPACE:
      case CODE_POINTS.LINE_FEED:
      case CODE_POINTS.TABULATION:
      case CODE_POINTS.FORM_FEED: {
        break;
      }
      case CODE_POINTS.QUOTATION_MARK: {
        token.systemId = "";
        this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case CODE_POINTS.APOSTROPHE: {
        token.systemId = "";
        this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this._err(ERR.missingDoctypeSystemIdentifier);
        token.forceQuirks = true;
        this.state = State.DATA;
        this.emitCurrentDoctype(token);
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInDoctype);
        token.forceQuirks = true;
        this.emitCurrentDoctype(token);
        this._emitEOFToken();
        break;
      }
      default: {
        this._err(ERR.missingQuoteBeforeDoctypeSystemIdentifier);
        token.forceQuirks = true;
        this.state = State.BOGUS_DOCTYPE;
        this._stateBogusDoctype(cp);
      }
    }
  }
  // DOCTYPE system identifier (double-quoted) state
  //------------------------------------------------------------------
  _stateDoctypeSystemIdentifierDoubleQuoted(cp) {
    const token = this.currentToken;
    switch (cp) {
      case CODE_POINTS.QUOTATION_MARK: {
        this.state = State.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter);
        token.systemId += REPLACEMENT_CHARACTER;
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this._err(ERR.abruptDoctypeSystemIdentifier);
        token.forceQuirks = true;
        this.emitCurrentDoctype(token);
        this.state = State.DATA;
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInDoctype);
        token.forceQuirks = true;
        this.emitCurrentDoctype(token);
        this._emitEOFToken();
        break;
      }
      default: {
        token.systemId += String.fromCodePoint(cp);
      }
    }
  }
  // DOCTYPE system identifier (single-quoted) state
  //------------------------------------------------------------------
  _stateDoctypeSystemIdentifierSingleQuoted(cp) {
    const token = this.currentToken;
    switch (cp) {
      case CODE_POINTS.APOSTROPHE: {
        this.state = State.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter);
        token.systemId += REPLACEMENT_CHARACTER;
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this._err(ERR.abruptDoctypeSystemIdentifier);
        token.forceQuirks = true;
        this.emitCurrentDoctype(token);
        this.state = State.DATA;
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInDoctype);
        token.forceQuirks = true;
        this.emitCurrentDoctype(token);
        this._emitEOFToken();
        break;
      }
      default: {
        token.systemId += String.fromCodePoint(cp);
      }
    }
  }
  // After DOCTYPE system identifier state
  //------------------------------------------------------------------
  _stateAfterDoctypeSystemIdentifier(cp) {
    const token = this.currentToken;
    switch (cp) {
      case CODE_POINTS.SPACE:
      case CODE_POINTS.LINE_FEED:
      case CODE_POINTS.TABULATION:
      case CODE_POINTS.FORM_FEED: {
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this.emitCurrentDoctype(token);
        this.state = State.DATA;
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInDoctype);
        token.forceQuirks = true;
        this.emitCurrentDoctype(token);
        this._emitEOFToken();
        break;
      }
      default: {
        this._err(ERR.unexpectedCharacterAfterDoctypeSystemIdentifier);
        this.state = State.BOGUS_DOCTYPE;
        this._stateBogusDoctype(cp);
      }
    }
  }
  // Bogus DOCTYPE state
  //------------------------------------------------------------------
  _stateBogusDoctype(cp) {
    const token = this.currentToken;
    switch (cp) {
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this.emitCurrentDoctype(token);
        this.state = State.DATA;
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter);
        break;
      }
      case CODE_POINTS.EOF: {
        this.emitCurrentDoctype(token);
        this._emitEOFToken();
        break;
      }
    }
  }
  // CDATA section state
  //------------------------------------------------------------------
  _stateCdataSection(cp) {
    switch (cp) {
      case CODE_POINTS.RIGHT_SQUARE_BRACKET: {
        this.state = State.CDATA_SECTION_BRACKET;
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInCdata);
        this._emitEOFToken();
        break;
      }
      default: {
        this._emitCodePoint(cp);
      }
    }
  }
  // CDATA section bracket state
  //------------------------------------------------------------------
  _stateCdataSectionBracket(cp) {
    if (cp === CODE_POINTS.RIGHT_SQUARE_BRACKET) {
      this.state = State.CDATA_SECTION_END;
    } else {
      this._emitChars("]");
      this.state = State.CDATA_SECTION;
      this._stateCdataSection(cp);
    }
  }
  // CDATA section end state
  //------------------------------------------------------------------
  _stateCdataSectionEnd(cp) {
    switch (cp) {
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this.state = State.DATA;
        break;
      }
      case CODE_POINTS.RIGHT_SQUARE_BRACKET: {
        this._emitChars("]");
        break;
      }
      default: {
        this._emitChars("]]");
        this.state = State.CDATA_SECTION;
        this._stateCdataSection(cp);
      }
    }
  }
  // Character reference state
  //------------------------------------------------------------------
  _stateCharacterReference() {
    let length = this.entityDecoder.write(this.preprocessor.html, this.preprocessor.pos);
    if (length < 0) {
      if (this.preprocessor.lastChunkWritten) {
        length = this.entityDecoder.end();
      } else {
        this.active = false;
        this.preprocessor.pos = this.preprocessor.html.length - 1;
        this.consumedAfterSnapshot = 0;
        this.preprocessor.endOfChunkHit = true;
        return;
      }
    }
    if (length === 0) {
      this.preprocessor.pos = this.entityStartPos;
      this._flushCodePointConsumedAsCharacterReference(CODE_POINTS.AMPERSAND);
      this.state = !this._isCharacterReferenceInAttribute() && isAsciiAlphaNumeric(this.preprocessor.peek(1)) ? State.AMBIGUOUS_AMPERSAND : this.returnState;
    } else {
      this.state = this.returnState;
    }
  }
  // Ambiguos ampersand state
  //------------------------------------------------------------------
  _stateAmbiguousAmpersand(cp) {
    if (isAsciiAlphaNumeric(cp)) {
      this._flushCodePointConsumedAsCharacterReference(cp);
    } else {
      if (cp === CODE_POINTS.SEMICOLON) {
        this._err(ERR.unknownNamedCharacterReference);
      }
      this.state = this.returnState;
      this._callState(cp);
    }
  }
}
const IMPLICIT_END_TAG_REQUIRED = /* @__PURE__ */ new Set([TAG_ID.DD, TAG_ID.DT, TAG_ID.LI, TAG_ID.OPTGROUP, TAG_ID.OPTION, TAG_ID.P, TAG_ID.RB, TAG_ID.RP, TAG_ID.RT, TAG_ID.RTC]);
const IMPLICIT_END_TAG_REQUIRED_THOROUGHLY = /* @__PURE__ */ new Set([
  ...IMPLICIT_END_TAG_REQUIRED,
  TAG_ID.CAPTION,
  TAG_ID.COLGROUP,
  TAG_ID.TBODY,
  TAG_ID.TD,
  TAG_ID.TFOOT,
  TAG_ID.TH,
  TAG_ID.THEAD,
  TAG_ID.TR
]);
const SCOPING_ELEMENTS_HTML = /* @__PURE__ */ new Set([
  TAG_ID.APPLET,
  TAG_ID.CAPTION,
  TAG_ID.HTML,
  TAG_ID.MARQUEE,
  TAG_ID.OBJECT,
  TAG_ID.TABLE,
  TAG_ID.TD,
  TAG_ID.TEMPLATE,
  TAG_ID.TH
]);
const SCOPING_ELEMENTS_HTML_LIST = /* @__PURE__ */ new Set([...SCOPING_ELEMENTS_HTML, TAG_ID.OL, TAG_ID.UL]);
const SCOPING_ELEMENTS_HTML_BUTTON = /* @__PURE__ */ new Set([...SCOPING_ELEMENTS_HTML, TAG_ID.BUTTON]);
const SCOPING_ELEMENTS_MATHML = /* @__PURE__ */ new Set([TAG_ID.ANNOTATION_XML, TAG_ID.MI, TAG_ID.MN, TAG_ID.MO, TAG_ID.MS, TAG_ID.MTEXT]);
const SCOPING_ELEMENTS_SVG = /* @__PURE__ */ new Set([TAG_ID.DESC, TAG_ID.FOREIGN_OBJECT, TAG_ID.TITLE]);
const TABLE_ROW_CONTEXT = /* @__PURE__ */ new Set([TAG_ID.TR, TAG_ID.TEMPLATE, TAG_ID.HTML]);
const TABLE_BODY_CONTEXT = /* @__PURE__ */ new Set([TAG_ID.TBODY, TAG_ID.TFOOT, TAG_ID.THEAD, TAG_ID.TEMPLATE, TAG_ID.HTML]);
const TABLE_CONTEXT = /* @__PURE__ */ new Set([TAG_ID.TABLE, TAG_ID.TEMPLATE, TAG_ID.HTML]);
const TABLE_CELLS = /* @__PURE__ */ new Set([TAG_ID.TD, TAG_ID.TH]);
class OpenElementStack {
  get currentTmplContentOrNode() {
    return this._isInTemplate() ? this.treeAdapter.getTemplateContent(this.current) : this.current;
  }
  constructor(document2, treeAdapter, handler) {
    this.treeAdapter = treeAdapter;
    this.handler = handler;
    this.items = [];
    this.tagIDs = [];
    this.stackTop = -1;
    this.tmplCount = 0;
    this.currentTagId = TAG_ID.UNKNOWN;
    this.current = document2;
  }
  //Index of element
  _indexOf(element2) {
    return this.items.lastIndexOf(element2, this.stackTop);
  }
  //Update current element
  _isInTemplate() {
    return this.currentTagId === TAG_ID.TEMPLATE && this.treeAdapter.getNamespaceURI(this.current) === NS.HTML;
  }
  _updateCurrentElement() {
    this.current = this.items[this.stackTop];
    this.currentTagId = this.tagIDs[this.stackTop];
  }
  //Mutations
  push(element2, tagID) {
    this.stackTop++;
    this.items[this.stackTop] = element2;
    this.current = element2;
    this.tagIDs[this.stackTop] = tagID;
    this.currentTagId = tagID;
    if (this._isInTemplate()) {
      this.tmplCount++;
    }
    this.handler.onItemPush(element2, tagID, true);
  }
  pop() {
    const popped = this.current;
    if (this.tmplCount > 0 && this._isInTemplate()) {
      this.tmplCount--;
    }
    this.stackTop--;
    this._updateCurrentElement();
    this.handler.onItemPop(popped, true);
  }
  replace(oldElement, newElement) {
    const idx = this._indexOf(oldElement);
    this.items[idx] = newElement;
    if (idx === this.stackTop) {
      this.current = newElement;
    }
  }
  insertAfter(referenceElement, newElement, newElementID) {
    const insertionIdx = this._indexOf(referenceElement) + 1;
    this.items.splice(insertionIdx, 0, newElement);
    this.tagIDs.splice(insertionIdx, 0, newElementID);
    this.stackTop++;
    if (insertionIdx === this.stackTop) {
      this._updateCurrentElement();
    }
    if (this.current && this.currentTagId !== void 0) {
      this.handler.onItemPush(this.current, this.currentTagId, insertionIdx === this.stackTop);
    }
  }
  popUntilTagNamePopped(tagName) {
    let targetIdx = this.stackTop + 1;
    do {
      targetIdx = this.tagIDs.lastIndexOf(tagName, targetIdx - 1);
    } while (targetIdx > 0 && this.treeAdapter.getNamespaceURI(this.items[targetIdx]) !== NS.HTML);
    this.shortenToLength(Math.max(targetIdx, 0));
  }
  shortenToLength(idx) {
    while (this.stackTop >= idx) {
      const popped = this.current;
      if (this.tmplCount > 0 && this._isInTemplate()) {
        this.tmplCount -= 1;
      }
      this.stackTop--;
      this._updateCurrentElement();
      this.handler.onItemPop(popped, this.stackTop < idx);
    }
  }
  popUntilElementPopped(element2) {
    const idx = this._indexOf(element2);
    this.shortenToLength(Math.max(idx, 0));
  }
  popUntilPopped(tagNames, targetNS) {
    const idx = this._indexOfTagNames(tagNames, targetNS);
    this.shortenToLength(Math.max(idx, 0));
  }
  popUntilNumberedHeaderPopped() {
    this.popUntilPopped(NUMBERED_HEADERS, NS.HTML);
  }
  popUntilTableCellPopped() {
    this.popUntilPopped(TABLE_CELLS, NS.HTML);
  }
  popAllUpToHtmlElement() {
    this.tmplCount = 0;
    this.shortenToLength(1);
  }
  _indexOfTagNames(tagNames, namespace) {
    for (let i = this.stackTop; i >= 0; i--) {
      if (tagNames.has(this.tagIDs[i]) && this.treeAdapter.getNamespaceURI(this.items[i]) === namespace) {
        return i;
      }
    }
    return -1;
  }
  clearBackTo(tagNames, targetNS) {
    const idx = this._indexOfTagNames(tagNames, targetNS);
    this.shortenToLength(idx + 1);
  }
  clearBackToTableContext() {
    this.clearBackTo(TABLE_CONTEXT, NS.HTML);
  }
  clearBackToTableBodyContext() {
    this.clearBackTo(TABLE_BODY_CONTEXT, NS.HTML);
  }
  clearBackToTableRowContext() {
    this.clearBackTo(TABLE_ROW_CONTEXT, NS.HTML);
  }
  remove(element2) {
    const idx = this._indexOf(element2);
    if (idx >= 0) {
      if (idx === this.stackTop) {
        this.pop();
      } else {
        this.items.splice(idx, 1);
        this.tagIDs.splice(idx, 1);
        this.stackTop--;
        this._updateCurrentElement();
        this.handler.onItemPop(element2, false);
      }
    }
  }
  //Search
  tryPeekProperlyNestedBodyElement() {
    return this.stackTop >= 1 && this.tagIDs[1] === TAG_ID.BODY ? this.items[1] : null;
  }
  contains(element2) {
    return this._indexOf(element2) > -1;
  }
  getCommonAncestor(element2) {
    const elementIdx = this._indexOf(element2) - 1;
    return elementIdx >= 0 ? this.items[elementIdx] : null;
  }
  isRootHtmlElementCurrent() {
    return this.stackTop === 0 && this.tagIDs[0] === TAG_ID.HTML;
  }
  //Element in scope
  hasInDynamicScope(tagName, htmlScope) {
    for (let i = this.stackTop; i >= 0; i--) {
      const tn = this.tagIDs[i];
      switch (this.treeAdapter.getNamespaceURI(this.items[i])) {
        case NS.HTML: {
          if (tn === tagName)
            return true;
          if (htmlScope.has(tn))
            return false;
          break;
        }
        case NS.SVG: {
          if (SCOPING_ELEMENTS_SVG.has(tn))
            return false;
          break;
        }
        case NS.MATHML: {
          if (SCOPING_ELEMENTS_MATHML.has(tn))
            return false;
          break;
        }
      }
    }
    return true;
  }
  hasInScope(tagName) {
    return this.hasInDynamicScope(tagName, SCOPING_ELEMENTS_HTML);
  }
  hasInListItemScope(tagName) {
    return this.hasInDynamicScope(tagName, SCOPING_ELEMENTS_HTML_LIST);
  }
  hasInButtonScope(tagName) {
    return this.hasInDynamicScope(tagName, SCOPING_ELEMENTS_HTML_BUTTON);
  }
  hasNumberedHeaderInScope() {
    for (let i = this.stackTop; i >= 0; i--) {
      const tn = this.tagIDs[i];
      switch (this.treeAdapter.getNamespaceURI(this.items[i])) {
        case NS.HTML: {
          if (NUMBERED_HEADERS.has(tn))
            return true;
          if (SCOPING_ELEMENTS_HTML.has(tn))
            return false;
          break;
        }
        case NS.SVG: {
          if (SCOPING_ELEMENTS_SVG.has(tn))
            return false;
          break;
        }
        case NS.MATHML: {
          if (SCOPING_ELEMENTS_MATHML.has(tn))
            return false;
          break;
        }
      }
    }
    return true;
  }
  hasInTableScope(tagName) {
    for (let i = this.stackTop; i >= 0; i--) {
      if (this.treeAdapter.getNamespaceURI(this.items[i]) !== NS.HTML) {
        continue;
      }
      switch (this.tagIDs[i]) {
        case tagName: {
          return true;
        }
        case TAG_ID.TABLE:
        case TAG_ID.HTML: {
          return false;
        }
      }
    }
    return true;
  }
  hasTableBodyContextInTableScope() {
    for (let i = this.stackTop; i >= 0; i--) {
      if (this.treeAdapter.getNamespaceURI(this.items[i]) !== NS.HTML) {
        continue;
      }
      switch (this.tagIDs[i]) {
        case TAG_ID.TBODY:
        case TAG_ID.THEAD:
        case TAG_ID.TFOOT: {
          return true;
        }
        case TAG_ID.TABLE:
        case TAG_ID.HTML: {
          return false;
        }
      }
    }
    return true;
  }
  hasInSelectScope(tagName) {
    for (let i = this.stackTop; i >= 0; i--) {
      if (this.treeAdapter.getNamespaceURI(this.items[i]) !== NS.HTML) {
        continue;
      }
      switch (this.tagIDs[i]) {
        case tagName: {
          return true;
        }
        case TAG_ID.OPTION:
        case TAG_ID.OPTGROUP: {
          break;
        }
        default: {
          return false;
        }
      }
    }
    return true;
  }
  //Implied end tags
  generateImpliedEndTags() {
    while (this.currentTagId !== void 0 && IMPLICIT_END_TAG_REQUIRED.has(this.currentTagId)) {
      this.pop();
    }
  }
  generateImpliedEndTagsThoroughly() {
    while (this.currentTagId !== void 0 && IMPLICIT_END_TAG_REQUIRED_THOROUGHLY.has(this.currentTagId)) {
      this.pop();
    }
  }
  generateImpliedEndTagsWithExclusion(exclusionId) {
    while (this.currentTagId !== void 0 && this.currentTagId !== exclusionId && IMPLICIT_END_TAG_REQUIRED_THOROUGHLY.has(this.currentTagId)) {
      this.pop();
    }
  }
}
const NOAH_ARK_CAPACITY = 3;
var EntryType;
(function(EntryType2) {
  EntryType2[EntryType2["Marker"] = 0] = "Marker";
  EntryType2[EntryType2["Element"] = 1] = "Element";
})(EntryType || (EntryType = {}));
const MARKER = { type: EntryType.Marker };
class FormattingElementList {
  constructor(treeAdapter) {
    this.treeAdapter = treeAdapter;
    this.entries = [];
    this.bookmark = null;
  }
  //Noah Ark's condition
  //OPTIMIZATION: at first we try to find possible candidates for exclusion using
  //lightweight heuristics without thorough attributes check.
  _getNoahArkConditionCandidates(newElement, neAttrs) {
    const candidates = [];
    const neAttrsLength = neAttrs.length;
    const neTagName = this.treeAdapter.getTagName(newElement);
    const neNamespaceURI = this.treeAdapter.getNamespaceURI(newElement);
    for (let i = 0; i < this.entries.length; i++) {
      const entry = this.entries[i];
      if (entry.type === EntryType.Marker) {
        break;
      }
      const { element: element2 } = entry;
      if (this.treeAdapter.getTagName(element2) === neTagName && this.treeAdapter.getNamespaceURI(element2) === neNamespaceURI) {
        const elementAttrs = this.treeAdapter.getAttrList(element2);
        if (elementAttrs.length === neAttrsLength) {
          candidates.push({ idx: i, attrs: elementAttrs });
        }
      }
    }
    return candidates;
  }
  _ensureNoahArkCondition(newElement) {
    if (this.entries.length < NOAH_ARK_CAPACITY)
      return;
    const neAttrs = this.treeAdapter.getAttrList(newElement);
    const candidates = this._getNoahArkConditionCandidates(newElement, neAttrs);
    if (candidates.length < NOAH_ARK_CAPACITY)
      return;
    const neAttrsMap = new Map(neAttrs.map((neAttr) => [neAttr.name, neAttr.value]));
    let validCandidates = 0;
    for (let i = 0; i < candidates.length; i++) {
      const candidate = candidates[i];
      if (candidate.attrs.every((cAttr) => neAttrsMap.get(cAttr.name) === cAttr.value)) {
        validCandidates += 1;
        if (validCandidates >= NOAH_ARK_CAPACITY) {
          this.entries.splice(candidate.idx, 1);
        }
      }
    }
  }
  //Mutations
  insertMarker() {
    this.entries.unshift(MARKER);
  }
  pushElement(element2, token) {
    this._ensureNoahArkCondition(element2);
    this.entries.unshift({
      type: EntryType.Element,
      element: element2,
      token
    });
  }
  insertElementAfterBookmark(element2, token) {
    const bookmarkIdx = this.entries.indexOf(this.bookmark);
    this.entries.splice(bookmarkIdx, 0, {
      type: EntryType.Element,
      element: element2,
      token
    });
  }
  removeEntry(entry) {
    const entryIndex = this.entries.indexOf(entry);
    if (entryIndex !== -1) {
      this.entries.splice(entryIndex, 1);
    }
  }
  /**
   * Clears the list of formatting elements up to the last marker.
   *
   * @see https://html.spec.whatwg.org/multipage/parsing.html#clear-the-list-of-active-formatting-elements-up-to-the-last-marker
   */
  clearToLastMarker() {
    const markerIdx = this.entries.indexOf(MARKER);
    if (markerIdx === -1) {
      this.entries.length = 0;
    } else {
      this.entries.splice(0, markerIdx + 1);
    }
  }
  //Search
  getElementEntryInScopeWithTagName(tagName) {
    const entry = this.entries.find((entry2) => entry2.type === EntryType.Marker || this.treeAdapter.getTagName(entry2.element) === tagName);
    return entry && entry.type === EntryType.Element ? entry : null;
  }
  getElementEntry(element2) {
    return this.entries.find((entry) => entry.type === EntryType.Element && entry.element === element2);
  }
}
const defaultTreeAdapter = {
  //Node construction
  createDocument() {
    return {
      nodeName: "#document",
      mode: DOCUMENT_MODE.NO_QUIRKS,
      childNodes: []
    };
  },
  createDocumentFragment() {
    return {
      nodeName: "#document-fragment",
      childNodes: []
    };
  },
  createElement(tagName, namespaceURI, attrs) {
    return {
      nodeName: tagName,
      tagName,
      attrs,
      namespaceURI,
      childNodes: [],
      parentNode: null
    };
  },
  createCommentNode(data) {
    return {
      nodeName: "#comment",
      data,
      parentNode: null
    };
  },
  createTextNode(value) {
    return {
      nodeName: "#text",
      value,
      parentNode: null
    };
  },
  //Tree mutation
  appendChild(parentNode, newNode) {
    parentNode.childNodes.push(newNode);
    newNode.parentNode = parentNode;
  },
  insertBefore(parentNode, newNode, referenceNode) {
    const insertionIdx = parentNode.childNodes.indexOf(referenceNode);
    parentNode.childNodes.splice(insertionIdx, 0, newNode);
    newNode.parentNode = parentNode;
  },
  setTemplateContent(templateElement, contentElement) {
    templateElement.content = contentElement;
  },
  getTemplateContent(templateElement) {
    return templateElement.content;
  },
  setDocumentType(document2, name2, publicId, systemId) {
    const doctypeNode = document2.childNodes.find((node2) => node2.nodeName === "#documentType");
    if (doctypeNode) {
      doctypeNode.name = name2;
      doctypeNode.publicId = publicId;
      doctypeNode.systemId = systemId;
    } else {
      const node2 = {
        nodeName: "#documentType",
        name: name2,
        publicId,
        systemId,
        parentNode: null
      };
      defaultTreeAdapter.appendChild(document2, node2);
    }
  },
  setDocumentMode(document2, mode) {
    document2.mode = mode;
  },
  getDocumentMode(document2) {
    return document2.mode;
  },
  detachNode(node2) {
    if (node2.parentNode) {
      const idx = node2.parentNode.childNodes.indexOf(node2);
      node2.parentNode.childNodes.splice(idx, 1);
      node2.parentNode = null;
    }
  },
  insertText(parentNode, text2) {
    if (parentNode.childNodes.length > 0) {
      const prevNode = parentNode.childNodes[parentNode.childNodes.length - 1];
      if (defaultTreeAdapter.isTextNode(prevNode)) {
        prevNode.value += text2;
        return;
      }
    }
    defaultTreeAdapter.appendChild(parentNode, defaultTreeAdapter.createTextNode(text2));
  },
  insertTextBefore(parentNode, text2, referenceNode) {
    const prevNode = parentNode.childNodes[parentNode.childNodes.indexOf(referenceNode) - 1];
    if (prevNode && defaultTreeAdapter.isTextNode(prevNode)) {
      prevNode.value += text2;
    } else {
      defaultTreeAdapter.insertBefore(parentNode, defaultTreeAdapter.createTextNode(text2), referenceNode);
    }
  },
  adoptAttributes(recipient, attrs) {
    const recipientAttrsMap = new Set(recipient.attrs.map((attr) => attr.name));
    for (let j = 0; j < attrs.length; j++) {
      if (!recipientAttrsMap.has(attrs[j].name)) {
        recipient.attrs.push(attrs[j]);
      }
    }
  },
  //Tree traversing
  getFirstChild(node2) {
    return node2.childNodes[0];
  },
  getChildNodes(node2) {
    return node2.childNodes;
  },
  getParentNode(node2) {
    return node2.parentNode;
  },
  getAttrList(element2) {
    return element2.attrs;
  },
  //Node data
  getTagName(element2) {
    return element2.tagName;
  },
  getNamespaceURI(element2) {
    return element2.namespaceURI;
  },
  getTextNodeContent(textNode) {
    return textNode.value;
  },
  getCommentNodeContent(commentNode) {
    return commentNode.data;
  },
  getDocumentTypeNodeName(doctypeNode) {
    return doctypeNode.name;
  },
  getDocumentTypeNodePublicId(doctypeNode) {
    return doctypeNode.publicId;
  },
  getDocumentTypeNodeSystemId(doctypeNode) {
    return doctypeNode.systemId;
  },
  //Node types
  isTextNode(node2) {
    return node2.nodeName === "#text";
  },
  isCommentNode(node2) {
    return node2.nodeName === "#comment";
  },
  isDocumentTypeNode(node2) {
    return node2.nodeName === "#documentType";
  },
  isElementNode(node2) {
    return Object.prototype.hasOwnProperty.call(node2, "tagName");
  },
  // Source code location
  setNodeSourceCodeLocation(node2, location2) {
    node2.sourceCodeLocation = location2;
  },
  getNodeSourceCodeLocation(node2) {
    return node2.sourceCodeLocation;
  },
  updateNodeSourceCodeLocation(node2, endLocation) {
    node2.sourceCodeLocation = { ...node2.sourceCodeLocation, ...endLocation };
  }
};
const VALID_DOCTYPE_NAME = "html";
const VALID_SYSTEM_ID = "about:legacy-compat";
const QUIRKS_MODE_SYSTEM_ID = "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd";
const QUIRKS_MODE_PUBLIC_ID_PREFIXES = [
  "+//silmaril//dtd html pro v0r11 19970101//",
  "-//as//dtd html 3.0 aswedit + extensions//",
  "-//advasoft ltd//dtd html 3.0 aswedit + extensions//",
  "-//ietf//dtd html 2.0 level 1//",
  "-//ietf//dtd html 2.0 level 2//",
  "-//ietf//dtd html 2.0 strict level 1//",
  "-//ietf//dtd html 2.0 strict level 2//",
  "-//ietf//dtd html 2.0 strict//",
  "-//ietf//dtd html 2.0//",
  "-//ietf//dtd html 2.1e//",
  "-//ietf//dtd html 3.0//",
  "-//ietf//dtd html 3.2 final//",
  "-//ietf//dtd html 3.2//",
  "-//ietf//dtd html 3//",
  "-//ietf//dtd html level 0//",
  "-//ietf//dtd html level 1//",
  "-//ietf//dtd html level 2//",
  "-//ietf//dtd html level 3//",
  "-//ietf//dtd html strict level 0//",
  "-//ietf//dtd html strict level 1//",
  "-//ietf//dtd html strict level 2//",
  "-//ietf//dtd html strict level 3//",
  "-//ietf//dtd html strict//",
  "-//ietf//dtd html//",
  "-//metrius//dtd metrius presentational//",
  "-//microsoft//dtd internet explorer 2.0 html strict//",
  "-//microsoft//dtd internet explorer 2.0 html//",
  "-//microsoft//dtd internet explorer 2.0 tables//",
  "-//microsoft//dtd internet explorer 3.0 html strict//",
  "-//microsoft//dtd internet explorer 3.0 html//",
  "-//microsoft//dtd internet explorer 3.0 tables//",
  "-//netscape comm. corp.//dtd html//",
  "-//netscape comm. corp.//dtd strict html//",
  "-//o'reilly and associates//dtd html 2.0//",
  "-//o'reilly and associates//dtd html extended 1.0//",
  "-//o'reilly and associates//dtd html extended relaxed 1.0//",
  "-//sq//dtd html 2.0 hotmetal + extensions//",
  "-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//",
  "-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//",
  "-//spyglass//dtd html 2.0 extended//",
  "-//sun microsystems corp.//dtd hotjava html//",
  "-//sun microsystems corp.//dtd hotjava strict html//",
  "-//w3c//dtd html 3 1995-03-24//",
  "-//w3c//dtd html 3.2 draft//",
  "-//w3c//dtd html 3.2 final//",
  "-//w3c//dtd html 3.2//",
  "-//w3c//dtd html 3.2s draft//",
  "-//w3c//dtd html 4.0 frameset//",
  "-//w3c//dtd html 4.0 transitional//",
  "-//w3c//dtd html experimental 19960712//",
  "-//w3c//dtd html experimental 970421//",
  "-//w3c//dtd w3 html//",
  "-//w3o//dtd w3 html 3.0//",
  "-//webtechs//dtd mozilla html 2.0//",
  "-//webtechs//dtd mozilla html//"
];
const QUIRKS_MODE_NO_SYSTEM_ID_PUBLIC_ID_PREFIXES = [
  ...QUIRKS_MODE_PUBLIC_ID_PREFIXES,
  "-//w3c//dtd html 4.01 frameset//",
  "-//w3c//dtd html 4.01 transitional//"
];
const QUIRKS_MODE_PUBLIC_IDS = /* @__PURE__ */ new Set([
  "-//w3o//dtd w3 html strict 3.0//en//",
  "-/w3c/dtd html 4.0 transitional/en",
  "html"
]);
const LIMITED_QUIRKS_PUBLIC_ID_PREFIXES = ["-//w3c//dtd xhtml 1.0 frameset//", "-//w3c//dtd xhtml 1.0 transitional//"];
const LIMITED_QUIRKS_WITH_SYSTEM_ID_PUBLIC_ID_PREFIXES = [
  ...LIMITED_QUIRKS_PUBLIC_ID_PREFIXES,
  "-//w3c//dtd html 4.01 frameset//",
  "-//w3c//dtd html 4.01 transitional//"
];
function hasPrefix(publicId, prefixes) {
  return prefixes.some((prefix) => publicId.startsWith(prefix));
}
function isConforming(token) {
  return token.name === VALID_DOCTYPE_NAME && token.publicId === null && (token.systemId === null || token.systemId === VALID_SYSTEM_ID);
}
function getDocumentMode(token) {
  if (token.name !== VALID_DOCTYPE_NAME) {
    return DOCUMENT_MODE.QUIRKS;
  }
  const { systemId } = token;
  if (systemId && systemId.toLowerCase() === QUIRKS_MODE_SYSTEM_ID) {
    return DOCUMENT_MODE.QUIRKS;
  }
  let { publicId } = token;
  if (publicId !== null) {
    publicId = publicId.toLowerCase();
    if (QUIRKS_MODE_PUBLIC_IDS.has(publicId)) {
      return DOCUMENT_MODE.QUIRKS;
    }
    let prefixes = systemId === null ? QUIRKS_MODE_NO_SYSTEM_ID_PUBLIC_ID_PREFIXES : QUIRKS_MODE_PUBLIC_ID_PREFIXES;
    if (hasPrefix(publicId, prefixes)) {
      return DOCUMENT_MODE.QUIRKS;
    }
    prefixes = systemId === null ? LIMITED_QUIRKS_PUBLIC_ID_PREFIXES : LIMITED_QUIRKS_WITH_SYSTEM_ID_PUBLIC_ID_PREFIXES;
    if (hasPrefix(publicId, prefixes)) {
      return DOCUMENT_MODE.LIMITED_QUIRKS;
    }
  }
  return DOCUMENT_MODE.NO_QUIRKS;
}
const MIME_TYPES = {
  TEXT_HTML: "text/html",
  APPLICATION_XML: "application/xhtml+xml"
};
const DEFINITION_URL_ATTR = "definitionurl";
const ADJUSTED_DEFINITION_URL_ATTR = "definitionURL";
const SVG_ATTRS_ADJUSTMENT_MAP = new Map([
  "attributeName",
  "attributeType",
  "baseFrequency",
  "baseProfile",
  "calcMode",
  "clipPathUnits",
  "diffuseConstant",
  "edgeMode",
  "filterUnits",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "kernelMatrix",
  "kernelUnitLength",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "limitingConeAngle",
  "markerHeight",
  "markerUnits",
  "markerWidth",
  "maskContentUnits",
  "maskUnits",
  "numOctaves",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "refX",
  "refY",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "specularConstant",
  "specularExponent",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stitchTiles",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textLength",
  "viewBox",
  "viewTarget",
  "xChannelSelector",
  "yChannelSelector",
  "zoomAndPan"
].map((attr) => [attr.toLowerCase(), attr]));
const XML_ATTRS_ADJUSTMENT_MAP = /* @__PURE__ */ new Map([
  ["xlink:actuate", { prefix: "xlink", name: "actuate", namespace: NS.XLINK }],
  ["xlink:arcrole", { prefix: "xlink", name: "arcrole", namespace: NS.XLINK }],
  ["xlink:href", { prefix: "xlink", name: "href", namespace: NS.XLINK }],
  ["xlink:role", { prefix: "xlink", name: "role", namespace: NS.XLINK }],
  ["xlink:show", { prefix: "xlink", name: "show", namespace: NS.XLINK }],
  ["xlink:title", { prefix: "xlink", name: "title", namespace: NS.XLINK }],
  ["xlink:type", { prefix: "xlink", name: "type", namespace: NS.XLINK }],
  ["xml:lang", { prefix: "xml", name: "lang", namespace: NS.XML }],
  ["xml:space", { prefix: "xml", name: "space", namespace: NS.XML }],
  ["xmlns", { prefix: "", name: "xmlns", namespace: NS.XMLNS }],
  ["xmlns:xlink", { prefix: "xmlns", name: "xlink", namespace: NS.XMLNS }]
]);
const SVG_TAG_NAMES_ADJUSTMENT_MAP = new Map([
  "altGlyph",
  "altGlyphDef",
  "altGlyphItem",
  "animateColor",
  "animateMotion",
  "animateTransform",
  "clipPath",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "foreignObject",
  "glyphRef",
  "linearGradient",
  "radialGradient",
  "textPath"
].map((tn) => [tn.toLowerCase(), tn]));
const EXITS_FOREIGN_CONTENT = /* @__PURE__ */ new Set([
  TAG_ID.B,
  TAG_ID.BIG,
  TAG_ID.BLOCKQUOTE,
  TAG_ID.BODY,
  TAG_ID.BR,
  TAG_ID.CENTER,
  TAG_ID.CODE,
  TAG_ID.DD,
  TAG_ID.DIV,
  TAG_ID.DL,
  TAG_ID.DT,
  TAG_ID.EM,
  TAG_ID.EMBED,
  TAG_ID.H1,
  TAG_ID.H2,
  TAG_ID.H3,
  TAG_ID.H4,
  TAG_ID.H5,
  TAG_ID.H6,
  TAG_ID.HEAD,
  TAG_ID.HR,
  TAG_ID.I,
  TAG_ID.IMG,
  TAG_ID.LI,
  TAG_ID.LISTING,
  TAG_ID.MENU,
  TAG_ID.META,
  TAG_ID.NOBR,
  TAG_ID.OL,
  TAG_ID.P,
  TAG_ID.PRE,
  TAG_ID.RUBY,
  TAG_ID.S,
  TAG_ID.SMALL,
  TAG_ID.SPAN,
  TAG_ID.STRONG,
  TAG_ID.STRIKE,
  TAG_ID.SUB,
  TAG_ID.SUP,
  TAG_ID.TABLE,
  TAG_ID.TT,
  TAG_ID.U,
  TAG_ID.UL,
  TAG_ID.VAR
]);
function causesExit(startTagToken) {
  const tn = startTagToken.tagID;
  const isFontWithAttrs = tn === TAG_ID.FONT && startTagToken.attrs.some(({ name: name2 }) => name2 === ATTRS.COLOR || name2 === ATTRS.SIZE || name2 === ATTRS.FACE);
  return isFontWithAttrs || EXITS_FOREIGN_CONTENT.has(tn);
}
function adjustTokenMathMLAttrs(token) {
  for (let i = 0; i < token.attrs.length; i++) {
    if (token.attrs[i].name === DEFINITION_URL_ATTR) {
      token.attrs[i].name = ADJUSTED_DEFINITION_URL_ATTR;
      break;
    }
  }
}
function adjustTokenSVGAttrs(token) {
  for (let i = 0; i < token.attrs.length; i++) {
    const adjustedAttrName = SVG_ATTRS_ADJUSTMENT_MAP.get(token.attrs[i].name);
    if (adjustedAttrName != null) {
      token.attrs[i].name = adjustedAttrName;
    }
  }
}
function adjustTokenXMLAttrs(token) {
  for (let i = 0; i < token.attrs.length; i++) {
    const adjustedAttrEntry = XML_ATTRS_ADJUSTMENT_MAP.get(token.attrs[i].name);
    if (adjustedAttrEntry) {
      token.attrs[i].prefix = adjustedAttrEntry.prefix;
      token.attrs[i].name = adjustedAttrEntry.name;
      token.attrs[i].namespace = adjustedAttrEntry.namespace;
    }
  }
}
function adjustTokenSVGTagName(token) {
  const adjustedTagName = SVG_TAG_NAMES_ADJUSTMENT_MAP.get(token.tagName);
  if (adjustedTagName != null) {
    token.tagName = adjustedTagName;
    token.tagID = getTagID(token.tagName);
  }
}
function isMathMLTextIntegrationPoint(tn, ns) {
  return ns === NS.MATHML && (tn === TAG_ID.MI || tn === TAG_ID.MO || tn === TAG_ID.MN || tn === TAG_ID.MS || tn === TAG_ID.MTEXT);
}
function isHtmlIntegrationPoint(tn, ns, attrs) {
  if (ns === NS.MATHML && tn === TAG_ID.ANNOTATION_XML) {
    for (let i = 0; i < attrs.length; i++) {
      if (attrs[i].name === ATTRS.ENCODING) {
        const value = attrs[i].value.toLowerCase();
        return value === MIME_TYPES.TEXT_HTML || value === MIME_TYPES.APPLICATION_XML;
      }
    }
  }
  return ns === NS.SVG && (tn === TAG_ID.FOREIGN_OBJECT || tn === TAG_ID.DESC || tn === TAG_ID.TITLE);
}
function isIntegrationPoint(tn, ns, attrs, foreignNS) {
  return (!foreignNS || foreignNS === NS.HTML) && isHtmlIntegrationPoint(tn, ns, attrs) || (!foreignNS || foreignNS === NS.MATHML) && isMathMLTextIntegrationPoint(tn, ns);
}
const HIDDEN_INPUT_TYPE = "hidden";
const AA_OUTER_LOOP_ITER = 8;
const AA_INNER_LOOP_ITER = 3;
var InsertionMode;
(function(InsertionMode2) {
  InsertionMode2[InsertionMode2["INITIAL"] = 0] = "INITIAL";
  InsertionMode2[InsertionMode2["BEFORE_HTML"] = 1] = "BEFORE_HTML";
  InsertionMode2[InsertionMode2["BEFORE_HEAD"] = 2] = "BEFORE_HEAD";
  InsertionMode2[InsertionMode2["IN_HEAD"] = 3] = "IN_HEAD";
  InsertionMode2[InsertionMode2["IN_HEAD_NO_SCRIPT"] = 4] = "IN_HEAD_NO_SCRIPT";
  InsertionMode2[InsertionMode2["AFTER_HEAD"] = 5] = "AFTER_HEAD";
  InsertionMode2[InsertionMode2["IN_BODY"] = 6] = "IN_BODY";
  InsertionMode2[InsertionMode2["TEXT"] = 7] = "TEXT";
  InsertionMode2[InsertionMode2["IN_TABLE"] = 8] = "IN_TABLE";
  InsertionMode2[InsertionMode2["IN_TABLE_TEXT"] = 9] = "IN_TABLE_TEXT";
  InsertionMode2[InsertionMode2["IN_CAPTION"] = 10] = "IN_CAPTION";
  InsertionMode2[InsertionMode2["IN_COLUMN_GROUP"] = 11] = "IN_COLUMN_GROUP";
  InsertionMode2[InsertionMode2["IN_TABLE_BODY"] = 12] = "IN_TABLE_BODY";
  InsertionMode2[InsertionMode2["IN_ROW"] = 13] = "IN_ROW";
  InsertionMode2[InsertionMode2["IN_CELL"] = 14] = "IN_CELL";
  InsertionMode2[InsertionMode2["IN_SELECT"] = 15] = "IN_SELECT";
  InsertionMode2[InsertionMode2["IN_SELECT_IN_TABLE"] = 16] = "IN_SELECT_IN_TABLE";
  InsertionMode2[InsertionMode2["IN_TEMPLATE"] = 17] = "IN_TEMPLATE";
  InsertionMode2[InsertionMode2["AFTER_BODY"] = 18] = "AFTER_BODY";
  InsertionMode2[InsertionMode2["IN_FRAMESET"] = 19] = "IN_FRAMESET";
  InsertionMode2[InsertionMode2["AFTER_FRAMESET"] = 20] = "AFTER_FRAMESET";
  InsertionMode2[InsertionMode2["AFTER_AFTER_BODY"] = 21] = "AFTER_AFTER_BODY";
  InsertionMode2[InsertionMode2["AFTER_AFTER_FRAMESET"] = 22] = "AFTER_AFTER_FRAMESET";
})(InsertionMode || (InsertionMode = {}));
const BASE_LOC = {
  startLine: -1,
  startCol: -1,
  startOffset: -1,
  endLine: -1,
  endCol: -1,
  endOffset: -1
};
const TABLE_STRUCTURE_TAGS = /* @__PURE__ */ new Set([TAG_ID.TABLE, TAG_ID.TBODY, TAG_ID.TFOOT, TAG_ID.THEAD, TAG_ID.TR]);
const defaultParserOptions = {
  scriptingEnabled: true,
  sourceCodeLocationInfo: false,
  treeAdapter: defaultTreeAdapter,
  onParseError: null
};
class Parser {
  constructor(options, document2, fragmentContext = null, scriptHandler = null) {
    this.fragmentContext = fragmentContext;
    this.scriptHandler = scriptHandler;
    this.currentToken = null;
    this.stopped = false;
    this.insertionMode = InsertionMode.INITIAL;
    this.originalInsertionMode = InsertionMode.INITIAL;
    this.headElement = null;
    this.formElement = null;
    this.currentNotInHTML = false;
    this.tmplInsertionModeStack = [];
    this.pendingCharacterTokens = [];
    this.hasNonWhitespacePendingCharacterToken = false;
    this.framesetOk = true;
    this.skipNextNewLine = false;
    this.fosterParentingEnabled = false;
    this.options = {
      ...defaultParserOptions,
      ...options
    };
    this.treeAdapter = this.options.treeAdapter;
    this.onParseError = this.options.onParseError;
    if (this.onParseError) {
      this.options.sourceCodeLocationInfo = true;
    }
    this.document = document2 !== null && document2 !== void 0 ? document2 : this.treeAdapter.createDocument();
    this.tokenizer = new Tokenizer(this.options, this);
    this.activeFormattingElements = new FormattingElementList(this.treeAdapter);
    this.fragmentContextID = fragmentContext ? getTagID(this.treeAdapter.getTagName(fragmentContext)) : TAG_ID.UNKNOWN;
    this._setContextModes(fragmentContext !== null && fragmentContext !== void 0 ? fragmentContext : this.document, this.fragmentContextID);
    this.openElements = new OpenElementStack(this.document, this.treeAdapter, this);
  }
  // API
  static parse(html2, options) {
    const parser = new this(options);
    parser.tokenizer.write(html2, true);
    return parser.document;
  }
  static getFragmentParser(fragmentContext, options) {
    const opts = {
      ...defaultParserOptions,
      ...options
    };
    fragmentContext !== null && fragmentContext !== void 0 ? fragmentContext : fragmentContext = opts.treeAdapter.createElement(TAG_NAMES.TEMPLATE, NS.HTML, []);
    const documentMock = opts.treeAdapter.createElement("documentmock", NS.HTML, []);
    const parser = new this(opts, documentMock, fragmentContext);
    if (parser.fragmentContextID === TAG_ID.TEMPLATE) {
      parser.tmplInsertionModeStack.unshift(InsertionMode.IN_TEMPLATE);
    }
    parser._initTokenizerForFragmentParsing();
    parser._insertFakeRootElement();
    parser._resetInsertionMode();
    parser._findFormInFragmentContext();
    return parser;
  }
  getFragment() {
    const rootElement = this.treeAdapter.getFirstChild(this.document);
    const fragment2 = this.treeAdapter.createDocumentFragment();
    this._adoptNodes(rootElement, fragment2);
    return fragment2;
  }
  //Errors
  /** @internal */
  _err(token, code2, beforeToken) {
    var _a;
    if (!this.onParseError)
      return;
    const loc = (_a = token.location) !== null && _a !== void 0 ? _a : BASE_LOC;
    const err = {
      code: code2,
      startLine: loc.startLine,
      startCol: loc.startCol,
      startOffset: loc.startOffset,
      endLine: beforeToken ? loc.startLine : loc.endLine,
      endCol: beforeToken ? loc.startCol : loc.endCol,
      endOffset: beforeToken ? loc.startOffset : loc.endOffset
    };
    this.onParseError(err);
  }
  //Stack events
  /** @internal */
  onItemPush(node2, tid, isTop) {
    var _a, _b;
    (_b = (_a = this.treeAdapter).onItemPush) === null || _b === void 0 ? void 0 : _b.call(_a, node2);
    if (isTop && this.openElements.stackTop > 0)
      this._setContextModes(node2, tid);
  }
  /** @internal */
  onItemPop(node2, isTop) {
    var _a, _b;
    if (this.options.sourceCodeLocationInfo) {
      this._setEndLocation(node2, this.currentToken);
    }
    (_b = (_a = this.treeAdapter).onItemPop) === null || _b === void 0 ? void 0 : _b.call(_a, node2, this.openElements.current);
    if (isTop) {
      let current;
      let currentTagId;
      if (this.openElements.stackTop === 0 && this.fragmentContext) {
        current = this.fragmentContext;
        currentTagId = this.fragmentContextID;
      } else {
        ({ current, currentTagId } = this.openElements);
      }
      this._setContextModes(current, currentTagId);
    }
  }
  _setContextModes(current, tid) {
    const isHTML = current === this.document || current && this.treeAdapter.getNamespaceURI(current) === NS.HTML;
    this.currentNotInHTML = !isHTML;
    this.tokenizer.inForeignNode = !isHTML && current !== void 0 && tid !== void 0 && !this._isIntegrationPoint(tid, current);
  }
  /** @protected */
  _switchToTextParsing(currentToken, nextTokenizerState) {
    this._insertElement(currentToken, NS.HTML);
    this.tokenizer.state = nextTokenizerState;
    this.originalInsertionMode = this.insertionMode;
    this.insertionMode = InsertionMode.TEXT;
  }
  switchToPlaintextParsing() {
    this.insertionMode = InsertionMode.TEXT;
    this.originalInsertionMode = InsertionMode.IN_BODY;
    this.tokenizer.state = TokenizerMode.PLAINTEXT;
  }
  //Fragment parsing
  /** @protected */
  _getAdjustedCurrentElement() {
    return this.openElements.stackTop === 0 && this.fragmentContext ? this.fragmentContext : this.openElements.current;
  }
  /** @protected */
  _findFormInFragmentContext() {
    let node2 = this.fragmentContext;
    while (node2) {
      if (this.treeAdapter.getTagName(node2) === TAG_NAMES.FORM) {
        this.formElement = node2;
        break;
      }
      node2 = this.treeAdapter.getParentNode(node2);
    }
  }
  _initTokenizerForFragmentParsing() {
    if (!this.fragmentContext || this.treeAdapter.getNamespaceURI(this.fragmentContext) !== NS.HTML) {
      return;
    }
    switch (this.fragmentContextID) {
      case TAG_ID.TITLE:
      case TAG_ID.TEXTAREA: {
        this.tokenizer.state = TokenizerMode.RCDATA;
        break;
      }
      case TAG_ID.STYLE:
      case TAG_ID.XMP:
      case TAG_ID.IFRAME:
      case TAG_ID.NOEMBED:
      case TAG_ID.NOFRAMES:
      case TAG_ID.NOSCRIPT: {
        this.tokenizer.state = TokenizerMode.RAWTEXT;
        break;
      }
      case TAG_ID.SCRIPT: {
        this.tokenizer.state = TokenizerMode.SCRIPT_DATA;
        break;
      }
      case TAG_ID.PLAINTEXT: {
        this.tokenizer.state = TokenizerMode.PLAINTEXT;
        break;
      }
    }
  }
  //Tree mutation
  /** @protected */
  _setDocumentType(token) {
    const name2 = token.name || "";
    const publicId = token.publicId || "";
    const systemId = token.systemId || "";
    this.treeAdapter.setDocumentType(this.document, name2, publicId, systemId);
    if (token.location) {
      const documentChildren = this.treeAdapter.getChildNodes(this.document);
      const docTypeNode = documentChildren.find((node2) => this.treeAdapter.isDocumentTypeNode(node2));
      if (docTypeNode) {
        this.treeAdapter.setNodeSourceCodeLocation(docTypeNode, token.location);
      }
    }
  }
  /** @protected */
  _attachElementToTree(element2, location2) {
    if (this.options.sourceCodeLocationInfo) {
      const loc = location2 && {
        ...location2,
        startTag: location2
      };
      this.treeAdapter.setNodeSourceCodeLocation(element2, loc);
    }
    if (this._shouldFosterParentOnInsertion()) {
      this._fosterParentElement(element2);
    } else {
      const parent = this.openElements.currentTmplContentOrNode;
      this.treeAdapter.appendChild(parent !== null && parent !== void 0 ? parent : this.document, element2);
    }
  }
  /**
   * For self-closing tags. Add an element to the tree, but skip adding it
   * to the stack.
   */
  /** @protected */
  _appendElement(token, namespaceURI) {
    const element2 = this.treeAdapter.createElement(token.tagName, namespaceURI, token.attrs);
    this._attachElementToTree(element2, token.location);
  }
  /** @protected */
  _insertElement(token, namespaceURI) {
    const element2 = this.treeAdapter.createElement(token.tagName, namespaceURI, token.attrs);
    this._attachElementToTree(element2, token.location);
    this.openElements.push(element2, token.tagID);
  }
  /** @protected */
  _insertFakeElement(tagName, tagID) {
    const element2 = this.treeAdapter.createElement(tagName, NS.HTML, []);
    this._attachElementToTree(element2, null);
    this.openElements.push(element2, tagID);
  }
  /** @protected */
  _insertTemplate(token) {
    const tmpl = this.treeAdapter.createElement(token.tagName, NS.HTML, token.attrs);
    const content2 = this.treeAdapter.createDocumentFragment();
    this.treeAdapter.setTemplateContent(tmpl, content2);
    this._attachElementToTree(tmpl, token.location);
    this.openElements.push(tmpl, token.tagID);
    if (this.options.sourceCodeLocationInfo)
      this.treeAdapter.setNodeSourceCodeLocation(content2, null);
  }
  /** @protected */
  _insertFakeRootElement() {
    const element2 = this.treeAdapter.createElement(TAG_NAMES.HTML, NS.HTML, []);
    if (this.options.sourceCodeLocationInfo)
      this.treeAdapter.setNodeSourceCodeLocation(element2, null);
    this.treeAdapter.appendChild(this.openElements.current, element2);
    this.openElements.push(element2, TAG_ID.HTML);
  }
  /** @protected */
  _appendCommentNode(token, parent) {
    const commentNode = this.treeAdapter.createCommentNode(token.data);
    this.treeAdapter.appendChild(parent, commentNode);
    if (this.options.sourceCodeLocationInfo) {
      this.treeAdapter.setNodeSourceCodeLocation(commentNode, token.location);
    }
  }
  /** @protected */
  _insertCharacters(token) {
    let parent;
    let beforeElement;
    if (this._shouldFosterParentOnInsertion()) {
      ({ parent, beforeElement } = this._findFosterParentingLocation());
      if (beforeElement) {
        this.treeAdapter.insertTextBefore(parent, token.chars, beforeElement);
      } else {
        this.treeAdapter.insertText(parent, token.chars);
      }
    } else {
      parent = this.openElements.currentTmplContentOrNode;
      this.treeAdapter.insertText(parent, token.chars);
    }
    if (!token.location)
      return;
    const siblings = this.treeAdapter.getChildNodes(parent);
    const textNodeIdx = beforeElement ? siblings.lastIndexOf(beforeElement) : siblings.length;
    const textNode = siblings[textNodeIdx - 1];
    const tnLoc = this.treeAdapter.getNodeSourceCodeLocation(textNode);
    if (tnLoc) {
      const { endLine, endCol, endOffset } = token.location;
      this.treeAdapter.updateNodeSourceCodeLocation(textNode, { endLine, endCol, endOffset });
    } else if (this.options.sourceCodeLocationInfo) {
      this.treeAdapter.setNodeSourceCodeLocation(textNode, token.location);
    }
  }
  /** @protected */
  _adoptNodes(donor, recipient) {
    for (let child = this.treeAdapter.getFirstChild(donor); child; child = this.treeAdapter.getFirstChild(donor)) {
      this.treeAdapter.detachNode(child);
      this.treeAdapter.appendChild(recipient, child);
    }
  }
  /** @protected */
  _setEndLocation(element2, closingToken) {
    if (this.treeAdapter.getNodeSourceCodeLocation(element2) && closingToken.location) {
      const ctLoc = closingToken.location;
      const tn = this.treeAdapter.getTagName(element2);
      const endLoc = (
        // NOTE: For cases like <p> <p> </p> - First 'p' closes without a closing
        // tag and for cases like <td> <p> </td> - 'p' closes without a closing tag.
        closingToken.type === TokenType.END_TAG && tn === closingToken.tagName ? {
          endTag: { ...ctLoc },
          endLine: ctLoc.endLine,
          endCol: ctLoc.endCol,
          endOffset: ctLoc.endOffset
        } : {
          endLine: ctLoc.startLine,
          endCol: ctLoc.startCol,
          endOffset: ctLoc.startOffset
        }
      );
      this.treeAdapter.updateNodeSourceCodeLocation(element2, endLoc);
    }
  }
  //Token processing
  shouldProcessStartTagTokenInForeignContent(token) {
    if (!this.currentNotInHTML)
      return false;
    let current;
    let currentTagId;
    if (this.openElements.stackTop === 0 && this.fragmentContext) {
      current = this.fragmentContext;
      currentTagId = this.fragmentContextID;
    } else {
      ({ current, currentTagId } = this.openElements);
    }
    if (token.tagID === TAG_ID.SVG && this.treeAdapter.getTagName(current) === TAG_NAMES.ANNOTATION_XML && this.treeAdapter.getNamespaceURI(current) === NS.MATHML) {
      return false;
    }
    return (
      // Check that `current` is not an integration point for HTML or MathML elements.
      this.tokenizer.inForeignNode || // If it _is_ an integration point, then we might have to check that it is not an HTML
      // integration point.
      (token.tagID === TAG_ID.MGLYPH || token.tagID === TAG_ID.MALIGNMARK) && currentTagId !== void 0 && !this._isIntegrationPoint(currentTagId, current, NS.HTML)
    );
  }
  /** @protected */
  _processToken(token) {
    switch (token.type) {
      case TokenType.CHARACTER: {
        this.onCharacter(token);
        break;
      }
      case TokenType.NULL_CHARACTER: {
        this.onNullCharacter(token);
        break;
      }
      case TokenType.COMMENT: {
        this.onComment(token);
        break;
      }
      case TokenType.DOCTYPE: {
        this.onDoctype(token);
        break;
      }
      case TokenType.START_TAG: {
        this._processStartTag(token);
        break;
      }
      case TokenType.END_TAG: {
        this.onEndTag(token);
        break;
      }
      case TokenType.EOF: {
        this.onEof(token);
        break;
      }
      case TokenType.WHITESPACE_CHARACTER: {
        this.onWhitespaceCharacter(token);
        break;
      }
    }
  }
  //Integration points
  /** @protected */
  _isIntegrationPoint(tid, element2, foreignNS) {
    const ns = this.treeAdapter.getNamespaceURI(element2);
    const attrs = this.treeAdapter.getAttrList(element2);
    return isIntegrationPoint(tid, ns, attrs, foreignNS);
  }
  //Active formatting elements reconstruction
  /** @protected */
  _reconstructActiveFormattingElements() {
    const listLength = this.activeFormattingElements.entries.length;
    if (listLength) {
      const endIndex = this.activeFormattingElements.entries.findIndex((entry) => entry.type === EntryType.Marker || this.openElements.contains(entry.element));
      const unopenIdx = endIndex === -1 ? listLength - 1 : endIndex - 1;
      for (let i = unopenIdx; i >= 0; i--) {
        const entry = this.activeFormattingElements.entries[i];
        this._insertElement(entry.token, this.treeAdapter.getNamespaceURI(entry.element));
        entry.element = this.openElements.current;
      }
    }
  }
  //Close elements
  /** @protected */
  _closeTableCell() {
    this.openElements.generateImpliedEndTags();
    this.openElements.popUntilTableCellPopped();
    this.activeFormattingElements.clearToLastMarker();
    this.insertionMode = InsertionMode.IN_ROW;
  }
  /** @protected */
  _closePElement() {
    this.openElements.generateImpliedEndTagsWithExclusion(TAG_ID.P);
    this.openElements.popUntilTagNamePopped(TAG_ID.P);
  }
  //Insertion modes
  /** @protected */
  _resetInsertionMode() {
    for (let i = this.openElements.stackTop; i >= 0; i--) {
      switch (i === 0 && this.fragmentContext ? this.fragmentContextID : this.openElements.tagIDs[i]) {
        case TAG_ID.TR: {
          this.insertionMode = InsertionMode.IN_ROW;
          return;
        }
        case TAG_ID.TBODY:
        case TAG_ID.THEAD:
        case TAG_ID.TFOOT: {
          this.insertionMode = InsertionMode.IN_TABLE_BODY;
          return;
        }
        case TAG_ID.CAPTION: {
          this.insertionMode = InsertionMode.IN_CAPTION;
          return;
        }
        case TAG_ID.COLGROUP: {
          this.insertionMode = InsertionMode.IN_COLUMN_GROUP;
          return;
        }
        case TAG_ID.TABLE: {
          this.insertionMode = InsertionMode.IN_TABLE;
          return;
        }
        case TAG_ID.BODY: {
          this.insertionMode = InsertionMode.IN_BODY;
          return;
        }
        case TAG_ID.FRAMESET: {
          this.insertionMode = InsertionMode.IN_FRAMESET;
          return;
        }
        case TAG_ID.SELECT: {
          this._resetInsertionModeForSelect(i);
          return;
        }
        case TAG_ID.TEMPLATE: {
          this.insertionMode = this.tmplInsertionModeStack[0];
          return;
        }
        case TAG_ID.HTML: {
          this.insertionMode = this.headElement ? InsertionMode.AFTER_HEAD : InsertionMode.BEFORE_HEAD;
          return;
        }
        case TAG_ID.TD:
        case TAG_ID.TH: {
          if (i > 0) {
            this.insertionMode = InsertionMode.IN_CELL;
            return;
          }
          break;
        }
        case TAG_ID.HEAD: {
          if (i > 0) {
            this.insertionMode = InsertionMode.IN_HEAD;
            return;
          }
          break;
        }
      }
    }
    this.insertionMode = InsertionMode.IN_BODY;
  }
  /** @protected */
  _resetInsertionModeForSelect(selectIdx) {
    if (selectIdx > 0) {
      for (let i = selectIdx - 1; i > 0; i--) {
        const tn = this.openElements.tagIDs[i];
        if (tn === TAG_ID.TEMPLATE) {
          break;
        } else if (tn === TAG_ID.TABLE) {
          this.insertionMode = InsertionMode.IN_SELECT_IN_TABLE;
          return;
        }
      }
    }
    this.insertionMode = InsertionMode.IN_SELECT;
  }
  //Foster parenting
  /** @protected */
  _isElementCausesFosterParenting(tn) {
    return TABLE_STRUCTURE_TAGS.has(tn);
  }
  /** @protected */
  _shouldFosterParentOnInsertion() {
    return this.fosterParentingEnabled && this.openElements.currentTagId !== void 0 && this._isElementCausesFosterParenting(this.openElements.currentTagId);
  }
  /** @protected */
  _findFosterParentingLocation() {
    for (let i = this.openElements.stackTop; i >= 0; i--) {
      const openElement = this.openElements.items[i];
      switch (this.openElements.tagIDs[i]) {
        case TAG_ID.TEMPLATE: {
          if (this.treeAdapter.getNamespaceURI(openElement) === NS.HTML) {
            return { parent: this.treeAdapter.getTemplateContent(openElement), beforeElement: null };
          }
          break;
        }
        case TAG_ID.TABLE: {
          const parent = this.treeAdapter.getParentNode(openElement);
          if (parent) {
            return { parent, beforeElement: openElement };
          }
          return { parent: this.openElements.items[i - 1], beforeElement: null };
        }
      }
    }
    return { parent: this.openElements.items[0], beforeElement: null };
  }
  /** @protected */
  _fosterParentElement(element2) {
    const location2 = this._findFosterParentingLocation();
    if (location2.beforeElement) {
      this.treeAdapter.insertBefore(location2.parent, element2, location2.beforeElement);
    } else {
      this.treeAdapter.appendChild(location2.parent, element2);
    }
  }
  //Special elements
  /** @protected */
  _isSpecialElement(element2, id) {
    const ns = this.treeAdapter.getNamespaceURI(element2);
    return SPECIAL_ELEMENTS[ns].has(id);
  }
  /** @internal */
  onCharacter(token) {
    this.skipNextNewLine = false;
    if (this.tokenizer.inForeignNode) {
      characterInForeignContent(this, token);
      return;
    }
    switch (this.insertionMode) {
      case InsertionMode.INITIAL: {
        tokenInInitialMode(this, token);
        break;
      }
      case InsertionMode.BEFORE_HTML: {
        tokenBeforeHtml(this, token);
        break;
      }
      case InsertionMode.BEFORE_HEAD: {
        tokenBeforeHead(this, token);
        break;
      }
      case InsertionMode.IN_HEAD: {
        tokenInHead(this, token);
        break;
      }
      case InsertionMode.IN_HEAD_NO_SCRIPT: {
        tokenInHeadNoScript(this, token);
        break;
      }
      case InsertionMode.AFTER_HEAD: {
        tokenAfterHead(this, token);
        break;
      }
      case InsertionMode.IN_BODY:
      case InsertionMode.IN_CAPTION:
      case InsertionMode.IN_CELL:
      case InsertionMode.IN_TEMPLATE: {
        characterInBody(this, token);
        break;
      }
      case InsertionMode.TEXT:
      case InsertionMode.IN_SELECT:
      case InsertionMode.IN_SELECT_IN_TABLE: {
        this._insertCharacters(token);
        break;
      }
      case InsertionMode.IN_TABLE:
      case InsertionMode.IN_TABLE_BODY:
      case InsertionMode.IN_ROW: {
        characterInTable(this, token);
        break;
      }
      case InsertionMode.IN_TABLE_TEXT: {
        characterInTableText(this, token);
        break;
      }
      case InsertionMode.IN_COLUMN_GROUP: {
        tokenInColumnGroup(this, token);
        break;
      }
      case InsertionMode.AFTER_BODY: {
        tokenAfterBody(this, token);
        break;
      }
      case InsertionMode.AFTER_AFTER_BODY: {
        tokenAfterAfterBody(this, token);
        break;
      }
    }
  }
  /** @internal */
  onNullCharacter(token) {
    this.skipNextNewLine = false;
    if (this.tokenizer.inForeignNode) {
      nullCharacterInForeignContent(this, token);
      return;
    }
    switch (this.insertionMode) {
      case InsertionMode.INITIAL: {
        tokenInInitialMode(this, token);
        break;
      }
      case InsertionMode.BEFORE_HTML: {
        tokenBeforeHtml(this, token);
        break;
      }
      case InsertionMode.BEFORE_HEAD: {
        tokenBeforeHead(this, token);
        break;
      }
      case InsertionMode.IN_HEAD: {
        tokenInHead(this, token);
        break;
      }
      case InsertionMode.IN_HEAD_NO_SCRIPT: {
        tokenInHeadNoScript(this, token);
        break;
      }
      case InsertionMode.AFTER_HEAD: {
        tokenAfterHead(this, token);
        break;
      }
      case InsertionMode.TEXT: {
        this._insertCharacters(token);
        break;
      }
      case InsertionMode.IN_TABLE:
      case InsertionMode.IN_TABLE_BODY:
      case InsertionMode.IN_ROW: {
        characterInTable(this, token);
        break;
      }
      case InsertionMode.IN_COLUMN_GROUP: {
        tokenInColumnGroup(this, token);
        break;
      }
      case InsertionMode.AFTER_BODY: {
        tokenAfterBody(this, token);
        break;
      }
      case InsertionMode.AFTER_AFTER_BODY: {
        tokenAfterAfterBody(this, token);
        break;
      }
    }
  }
  /** @internal */
  onComment(token) {
    this.skipNextNewLine = false;
    if (this.currentNotInHTML) {
      appendComment(this, token);
      return;
    }
    switch (this.insertionMode) {
      case InsertionMode.INITIAL:
      case InsertionMode.BEFORE_HTML:
      case InsertionMode.BEFORE_HEAD:
      case InsertionMode.IN_HEAD:
      case InsertionMode.IN_HEAD_NO_SCRIPT:
      case InsertionMode.AFTER_HEAD:
      case InsertionMode.IN_BODY:
      case InsertionMode.IN_TABLE:
      case InsertionMode.IN_CAPTION:
      case InsertionMode.IN_COLUMN_GROUP:
      case InsertionMode.IN_TABLE_BODY:
      case InsertionMode.IN_ROW:
      case InsertionMode.IN_CELL:
      case InsertionMode.IN_SELECT:
      case InsertionMode.IN_SELECT_IN_TABLE:
      case InsertionMode.IN_TEMPLATE:
      case InsertionMode.IN_FRAMESET:
      case InsertionMode.AFTER_FRAMESET: {
        appendComment(this, token);
        break;
      }
      case InsertionMode.IN_TABLE_TEXT: {
        tokenInTableText(this, token);
        break;
      }
      case InsertionMode.AFTER_BODY: {
        appendCommentToRootHtmlElement(this, token);
        break;
      }
      case InsertionMode.AFTER_AFTER_BODY:
      case InsertionMode.AFTER_AFTER_FRAMESET: {
        appendCommentToDocument(this, token);
        break;
      }
    }
  }
  /** @internal */
  onDoctype(token) {
    this.skipNextNewLine = false;
    switch (this.insertionMode) {
      case InsertionMode.INITIAL: {
        doctypeInInitialMode(this, token);
        break;
      }
      case InsertionMode.BEFORE_HEAD:
      case InsertionMode.IN_HEAD:
      case InsertionMode.IN_HEAD_NO_SCRIPT:
      case InsertionMode.AFTER_HEAD: {
        this._err(token, ERR.misplacedDoctype);
        break;
      }
      case InsertionMode.IN_TABLE_TEXT: {
        tokenInTableText(this, token);
        break;
      }
    }
  }
  /** @internal */
  onStartTag(token) {
    this.skipNextNewLine = false;
    this.currentToken = token;
    this._processStartTag(token);
    if (token.selfClosing && !token.ackSelfClosing) {
      this._err(token, ERR.nonVoidHtmlElementStartTagWithTrailingSolidus);
    }
  }
  /**
   * Processes a given start tag.
   *
   * `onStartTag` checks if a self-closing tag was recognized. When a token
   * is moved inbetween multiple insertion modes, this check for self-closing
   * could lead to false positives. To avoid this, `_processStartTag` is used
   * for nested calls.
   *
   * @param token The token to process.
   * @protected
   */
  _processStartTag(token) {
    if (this.shouldProcessStartTagTokenInForeignContent(token)) {
      startTagInForeignContent(this, token);
    } else {
      this._startTagOutsideForeignContent(token);
    }
  }
  /** @protected */
  _startTagOutsideForeignContent(token) {
    switch (this.insertionMode) {
      case InsertionMode.INITIAL: {
        tokenInInitialMode(this, token);
        break;
      }
      case InsertionMode.BEFORE_HTML: {
        startTagBeforeHtml(this, token);
        break;
      }
      case InsertionMode.BEFORE_HEAD: {
        startTagBeforeHead(this, token);
        break;
      }
      case InsertionMode.IN_HEAD: {
        startTagInHead(this, token);
        break;
      }
      case InsertionMode.IN_HEAD_NO_SCRIPT: {
        startTagInHeadNoScript(this, token);
        break;
      }
      case InsertionMode.AFTER_HEAD: {
        startTagAfterHead(this, token);
        break;
      }
      case InsertionMode.IN_BODY: {
        startTagInBody(this, token);
        break;
      }
      case InsertionMode.IN_TABLE: {
        startTagInTable(this, token);
        break;
      }
      case InsertionMode.IN_TABLE_TEXT: {
        tokenInTableText(this, token);
        break;
      }
      case InsertionMode.IN_CAPTION: {
        startTagInCaption(this, token);
        break;
      }
      case InsertionMode.IN_COLUMN_GROUP: {
        startTagInColumnGroup(this, token);
        break;
      }
      case InsertionMode.IN_TABLE_BODY: {
        startTagInTableBody(this, token);
        break;
      }
      case InsertionMode.IN_ROW: {
        startTagInRow(this, token);
        break;
      }
      case InsertionMode.IN_CELL: {
        startTagInCell(this, token);
        break;
      }
      case InsertionMode.IN_SELECT: {
        startTagInSelect(this, token);
        break;
      }
      case InsertionMode.IN_SELECT_IN_TABLE: {
        startTagInSelectInTable(this, token);
        break;
      }
      case InsertionMode.IN_TEMPLATE: {
        startTagInTemplate(this, token);
        break;
      }
      case InsertionMode.AFTER_BODY: {
        startTagAfterBody(this, token);
        break;
      }
      case InsertionMode.IN_FRAMESET: {
        startTagInFrameset(this, token);
        break;
      }
      case InsertionMode.AFTER_FRAMESET: {
        startTagAfterFrameset(this, token);
        break;
      }
      case InsertionMode.AFTER_AFTER_BODY: {
        startTagAfterAfterBody(this, token);
        break;
      }
      case InsertionMode.AFTER_AFTER_FRAMESET: {
        startTagAfterAfterFrameset(this, token);
        break;
      }
    }
  }
  /** @internal */
  onEndTag(token) {
    this.skipNextNewLine = false;
    this.currentToken = token;
    if (this.currentNotInHTML) {
      endTagInForeignContent(this, token);
    } else {
      this._endTagOutsideForeignContent(token);
    }
  }
  /** @protected */
  _endTagOutsideForeignContent(token) {
    switch (this.insertionMode) {
      case InsertionMode.INITIAL: {
        tokenInInitialMode(this, token);
        break;
      }
      case InsertionMode.BEFORE_HTML: {
        endTagBeforeHtml(this, token);
        break;
      }
      case InsertionMode.BEFORE_HEAD: {
        endTagBeforeHead(this, token);
        break;
      }
      case InsertionMode.IN_HEAD: {
        endTagInHead(this, token);
        break;
      }
      case InsertionMode.IN_HEAD_NO_SCRIPT: {
        endTagInHeadNoScript(this, token);
        break;
      }
      case InsertionMode.AFTER_HEAD: {
        endTagAfterHead(this, token);
        break;
      }
      case InsertionMode.IN_BODY: {
        endTagInBody(this, token);
        break;
      }
      case InsertionMode.TEXT: {
        endTagInText(this, token);
        break;
      }
      case InsertionMode.IN_TABLE: {
        endTagInTable(this, token);
        break;
      }
      case InsertionMode.IN_TABLE_TEXT: {
        tokenInTableText(this, token);
        break;
      }
      case InsertionMode.IN_CAPTION: {
        endTagInCaption(this, token);
        break;
      }
      case InsertionMode.IN_COLUMN_GROUP: {
        endTagInColumnGroup(this, token);
        break;
      }
      case InsertionMode.IN_TABLE_BODY: {
        endTagInTableBody(this, token);
        break;
      }
      case InsertionMode.IN_ROW: {
        endTagInRow(this, token);
        break;
      }
      case InsertionMode.IN_CELL: {
        endTagInCell(this, token);
        break;
      }
      case InsertionMode.IN_SELECT: {
        endTagInSelect(this, token);
        break;
      }
      case InsertionMode.IN_SELECT_IN_TABLE: {
        endTagInSelectInTable(this, token);
        break;
      }
      case InsertionMode.IN_TEMPLATE: {
        endTagInTemplate(this, token);
        break;
      }
      case InsertionMode.AFTER_BODY: {
        endTagAfterBody(this, token);
        break;
      }
      case InsertionMode.IN_FRAMESET: {
        endTagInFrameset(this, token);
        break;
      }
      case InsertionMode.AFTER_FRAMESET: {
        endTagAfterFrameset(this, token);
        break;
      }
      case InsertionMode.AFTER_AFTER_BODY: {
        tokenAfterAfterBody(this, token);
        break;
      }
    }
  }
  /** @internal */
  onEof(token) {
    switch (this.insertionMode) {
      case InsertionMode.INITIAL: {
        tokenInInitialMode(this, token);
        break;
      }
      case InsertionMode.BEFORE_HTML: {
        tokenBeforeHtml(this, token);
        break;
      }
      case InsertionMode.BEFORE_HEAD: {
        tokenBeforeHead(this, token);
        break;
      }
      case InsertionMode.IN_HEAD: {
        tokenInHead(this, token);
        break;
      }
      case InsertionMode.IN_HEAD_NO_SCRIPT: {
        tokenInHeadNoScript(this, token);
        break;
      }
      case InsertionMode.AFTER_HEAD: {
        tokenAfterHead(this, token);
        break;
      }
      case InsertionMode.IN_BODY:
      case InsertionMode.IN_TABLE:
      case InsertionMode.IN_CAPTION:
      case InsertionMode.IN_COLUMN_GROUP:
      case InsertionMode.IN_TABLE_BODY:
      case InsertionMode.IN_ROW:
      case InsertionMode.IN_CELL:
      case InsertionMode.IN_SELECT:
      case InsertionMode.IN_SELECT_IN_TABLE: {
        eofInBody(this, token);
        break;
      }
      case InsertionMode.TEXT: {
        eofInText(this, token);
        break;
      }
      case InsertionMode.IN_TABLE_TEXT: {
        tokenInTableText(this, token);
        break;
      }
      case InsertionMode.IN_TEMPLATE: {
        eofInTemplate(this, token);
        break;
      }
      case InsertionMode.AFTER_BODY:
      case InsertionMode.IN_FRAMESET:
      case InsertionMode.AFTER_FRAMESET:
      case InsertionMode.AFTER_AFTER_BODY:
      case InsertionMode.AFTER_AFTER_FRAMESET: {
        stopParsing(this, token);
        break;
      }
    }
  }
  /** @internal */
  onWhitespaceCharacter(token) {
    if (this.skipNextNewLine) {
      this.skipNextNewLine = false;
      if (token.chars.charCodeAt(0) === CODE_POINTS.LINE_FEED) {
        if (token.chars.length === 1) {
          return;
        }
        token.chars = token.chars.substr(1);
      }
    }
    if (this.tokenizer.inForeignNode) {
      this._insertCharacters(token);
      return;
    }
    switch (this.insertionMode) {
      case InsertionMode.IN_HEAD:
      case InsertionMode.IN_HEAD_NO_SCRIPT:
      case InsertionMode.AFTER_HEAD:
      case InsertionMode.TEXT:
      case InsertionMode.IN_COLUMN_GROUP:
      case InsertionMode.IN_SELECT:
      case InsertionMode.IN_SELECT_IN_TABLE:
      case InsertionMode.IN_FRAMESET:
      case InsertionMode.AFTER_FRAMESET: {
        this._insertCharacters(token);
        break;
      }
      case InsertionMode.IN_BODY:
      case InsertionMode.IN_CAPTION:
      case InsertionMode.IN_CELL:
      case InsertionMode.IN_TEMPLATE:
      case InsertionMode.AFTER_BODY:
      case InsertionMode.AFTER_AFTER_BODY:
      case InsertionMode.AFTER_AFTER_FRAMESET: {
        whitespaceCharacterInBody(this, token);
        break;
      }
      case InsertionMode.IN_TABLE:
      case InsertionMode.IN_TABLE_BODY:
      case InsertionMode.IN_ROW: {
        characterInTable(this, token);
        break;
      }
      case InsertionMode.IN_TABLE_TEXT: {
        whitespaceCharacterInTableText(this, token);
        break;
      }
    }
  }
}
function aaObtainFormattingElementEntry(p, token) {
  let formattingElementEntry = p.activeFormattingElements.getElementEntryInScopeWithTagName(token.tagName);
  if (formattingElementEntry) {
    if (!p.openElements.contains(formattingElementEntry.element)) {
      p.activeFormattingElements.removeEntry(formattingElementEntry);
      formattingElementEntry = null;
    } else if (!p.openElements.hasInScope(token.tagID)) {
      formattingElementEntry = null;
    }
  } else {
    genericEndTagInBody(p, token);
  }
  return formattingElementEntry;
}
function aaObtainFurthestBlock(p, formattingElementEntry) {
  let furthestBlock = null;
  let idx = p.openElements.stackTop;
  for (; idx >= 0; idx--) {
    const element2 = p.openElements.items[idx];
    if (element2 === formattingElementEntry.element) {
      break;
    }
    if (p._isSpecialElement(element2, p.openElements.tagIDs[idx])) {
      furthestBlock = element2;
    }
  }
  if (!furthestBlock) {
    p.openElements.shortenToLength(Math.max(idx, 0));
    p.activeFormattingElements.removeEntry(formattingElementEntry);
  }
  return furthestBlock;
}
function aaInnerLoop(p, furthestBlock, formattingElement) {
  let lastElement = furthestBlock;
  let nextElement = p.openElements.getCommonAncestor(furthestBlock);
  for (let i = 0, element2 = nextElement; element2 !== formattingElement; i++, element2 = nextElement) {
    nextElement = p.openElements.getCommonAncestor(element2);
    const elementEntry = p.activeFormattingElements.getElementEntry(element2);
    const counterOverflow = elementEntry && i >= AA_INNER_LOOP_ITER;
    const shouldRemoveFromOpenElements = !elementEntry || counterOverflow;
    if (shouldRemoveFromOpenElements) {
      if (counterOverflow) {
        p.activeFormattingElements.removeEntry(elementEntry);
      }
      p.openElements.remove(element2);
    } else {
      element2 = aaRecreateElementFromEntry(p, elementEntry);
      if (lastElement === furthestBlock) {
        p.activeFormattingElements.bookmark = elementEntry;
      }
      p.treeAdapter.detachNode(lastElement);
      p.treeAdapter.appendChild(element2, lastElement);
      lastElement = element2;
    }
  }
  return lastElement;
}
function aaRecreateElementFromEntry(p, elementEntry) {
  const ns = p.treeAdapter.getNamespaceURI(elementEntry.element);
  const newElement = p.treeAdapter.createElement(elementEntry.token.tagName, ns, elementEntry.token.attrs);
  p.openElements.replace(elementEntry.element, newElement);
  elementEntry.element = newElement;
  return newElement;
}
function aaInsertLastNodeInCommonAncestor(p, commonAncestor, lastElement) {
  const tn = p.treeAdapter.getTagName(commonAncestor);
  const tid = getTagID(tn);
  if (p._isElementCausesFosterParenting(tid)) {
    p._fosterParentElement(lastElement);
  } else {
    const ns = p.treeAdapter.getNamespaceURI(commonAncestor);
    if (tid === TAG_ID.TEMPLATE && ns === NS.HTML) {
      commonAncestor = p.treeAdapter.getTemplateContent(commonAncestor);
    }
    p.treeAdapter.appendChild(commonAncestor, lastElement);
  }
}
function aaReplaceFormattingElement(p, furthestBlock, formattingElementEntry) {
  const ns = p.treeAdapter.getNamespaceURI(formattingElementEntry.element);
  const { token } = formattingElementEntry;
  const newElement = p.treeAdapter.createElement(token.tagName, ns, token.attrs);
  p._adoptNodes(furthestBlock, newElement);
  p.treeAdapter.appendChild(furthestBlock, newElement);
  p.activeFormattingElements.insertElementAfterBookmark(newElement, token);
  p.activeFormattingElements.removeEntry(formattingElementEntry);
  p.openElements.remove(formattingElementEntry.element);
  p.openElements.insertAfter(furthestBlock, newElement, token.tagID);
}
function callAdoptionAgency(p, token) {
  for (let i = 0; i < AA_OUTER_LOOP_ITER; i++) {
    const formattingElementEntry = aaObtainFormattingElementEntry(p, token);
    if (!formattingElementEntry) {
      break;
    }
    const furthestBlock = aaObtainFurthestBlock(p, formattingElementEntry);
    if (!furthestBlock) {
      break;
    }
    p.activeFormattingElements.bookmark = formattingElementEntry;
    const lastElement = aaInnerLoop(p, furthestBlock, formattingElementEntry.element);
    const commonAncestor = p.openElements.getCommonAncestor(formattingElementEntry.element);
    p.treeAdapter.detachNode(lastElement);
    if (commonAncestor)
      aaInsertLastNodeInCommonAncestor(p, commonAncestor, lastElement);
    aaReplaceFormattingElement(p, furthestBlock, formattingElementEntry);
  }
}
function appendComment(p, token) {
  p._appendCommentNode(token, p.openElements.currentTmplContentOrNode);
}
function appendCommentToRootHtmlElement(p, token) {
  p._appendCommentNode(token, p.openElements.items[0]);
}
function appendCommentToDocument(p, token) {
  p._appendCommentNode(token, p.document);
}
function stopParsing(p, token) {
  p.stopped = true;
  if (token.location) {
    const target = p.fragmentContext ? 0 : 2;
    for (let i = p.openElements.stackTop; i >= target; i--) {
      p._setEndLocation(p.openElements.items[i], token);
    }
    if (!p.fragmentContext && p.openElements.stackTop >= 0) {
      const htmlElement = p.openElements.items[0];
      const htmlLocation = p.treeAdapter.getNodeSourceCodeLocation(htmlElement);
      if (htmlLocation && !htmlLocation.endTag) {
        p._setEndLocation(htmlElement, token);
        if (p.openElements.stackTop >= 1) {
          const bodyElement = p.openElements.items[1];
          const bodyLocation = p.treeAdapter.getNodeSourceCodeLocation(bodyElement);
          if (bodyLocation && !bodyLocation.endTag) {
            p._setEndLocation(bodyElement, token);
          }
        }
      }
    }
  }
}
function doctypeInInitialMode(p, token) {
  p._setDocumentType(token);
  const mode = token.forceQuirks ? DOCUMENT_MODE.QUIRKS : getDocumentMode(token);
  if (!isConforming(token)) {
    p._err(token, ERR.nonConformingDoctype);
  }
  p.treeAdapter.setDocumentMode(p.document, mode);
  p.insertionMode = InsertionMode.BEFORE_HTML;
}
function tokenInInitialMode(p, token) {
  p._err(token, ERR.missingDoctype, true);
  p.treeAdapter.setDocumentMode(p.document, DOCUMENT_MODE.QUIRKS);
  p.insertionMode = InsertionMode.BEFORE_HTML;
  p._processToken(token);
}
function startTagBeforeHtml(p, token) {
  if (token.tagID === TAG_ID.HTML) {
    p._insertElement(token, NS.HTML);
    p.insertionMode = InsertionMode.BEFORE_HEAD;
  } else {
    tokenBeforeHtml(p, token);
  }
}
function endTagBeforeHtml(p, token) {
  const tn = token.tagID;
  if (tn === TAG_ID.HTML || tn === TAG_ID.HEAD || tn === TAG_ID.BODY || tn === TAG_ID.BR) {
    tokenBeforeHtml(p, token);
  }
}
function tokenBeforeHtml(p, token) {
  p._insertFakeRootElement();
  p.insertionMode = InsertionMode.BEFORE_HEAD;
  p._processToken(token);
}
function startTagBeforeHead(p, token) {
  switch (token.tagID) {
    case TAG_ID.HTML: {
      startTagInBody(p, token);
      break;
    }
    case TAG_ID.HEAD: {
      p._insertElement(token, NS.HTML);
      p.headElement = p.openElements.current;
      p.insertionMode = InsertionMode.IN_HEAD;
      break;
    }
    default: {
      tokenBeforeHead(p, token);
    }
  }
}
function endTagBeforeHead(p, token) {
  const tn = token.tagID;
  if (tn === TAG_ID.HEAD || tn === TAG_ID.BODY || tn === TAG_ID.HTML || tn === TAG_ID.BR) {
    tokenBeforeHead(p, token);
  } else {
    p._err(token, ERR.endTagWithoutMatchingOpenElement);
  }
}
function tokenBeforeHead(p, token) {
  p._insertFakeElement(TAG_NAMES.HEAD, TAG_ID.HEAD);
  p.headElement = p.openElements.current;
  p.insertionMode = InsertionMode.IN_HEAD;
  p._processToken(token);
}
function startTagInHead(p, token) {
  switch (token.tagID) {
    case TAG_ID.HTML: {
      startTagInBody(p, token);
      break;
    }
    case TAG_ID.BASE:
    case TAG_ID.BASEFONT:
    case TAG_ID.BGSOUND:
    case TAG_ID.LINK:
    case TAG_ID.META: {
      p._appendElement(token, NS.HTML);
      token.ackSelfClosing = true;
      break;
    }
    case TAG_ID.TITLE: {
      p._switchToTextParsing(token, TokenizerMode.RCDATA);
      break;
    }
    case TAG_ID.NOSCRIPT: {
      if (p.options.scriptingEnabled) {
        p._switchToTextParsing(token, TokenizerMode.RAWTEXT);
      } else {
        p._insertElement(token, NS.HTML);
        p.insertionMode = InsertionMode.IN_HEAD_NO_SCRIPT;
      }
      break;
    }
    case TAG_ID.NOFRAMES:
    case TAG_ID.STYLE: {
      p._switchToTextParsing(token, TokenizerMode.RAWTEXT);
      break;
    }
    case TAG_ID.SCRIPT: {
      p._switchToTextParsing(token, TokenizerMode.SCRIPT_DATA);
      break;
    }
    case TAG_ID.TEMPLATE: {
      p._insertTemplate(token);
      p.activeFormattingElements.insertMarker();
      p.framesetOk = false;
      p.insertionMode = InsertionMode.IN_TEMPLATE;
      p.tmplInsertionModeStack.unshift(InsertionMode.IN_TEMPLATE);
      break;
    }
    case TAG_ID.HEAD: {
      p._err(token, ERR.misplacedStartTagForHeadElement);
      break;
    }
    default: {
      tokenInHead(p, token);
    }
  }
}
function endTagInHead(p, token) {
  switch (token.tagID) {
    case TAG_ID.HEAD: {
      p.openElements.pop();
      p.insertionMode = InsertionMode.AFTER_HEAD;
      break;
    }
    case TAG_ID.BODY:
    case TAG_ID.BR:
    case TAG_ID.HTML: {
      tokenInHead(p, token);
      break;
    }
    case TAG_ID.TEMPLATE: {
      templateEndTagInHead(p, token);
      break;
    }
    default: {
      p._err(token, ERR.endTagWithoutMatchingOpenElement);
    }
  }
}
function templateEndTagInHead(p, token) {
  if (p.openElements.tmplCount > 0) {
    p.openElements.generateImpliedEndTagsThoroughly();
    if (p.openElements.currentTagId !== TAG_ID.TEMPLATE) {
      p._err(token, ERR.closingOfElementWithOpenChildElements);
    }
    p.openElements.popUntilTagNamePopped(TAG_ID.TEMPLATE);
    p.activeFormattingElements.clearToLastMarker();
    p.tmplInsertionModeStack.shift();
    p._resetInsertionMode();
  } else {
    p._err(token, ERR.endTagWithoutMatchingOpenElement);
  }
}
function tokenInHead(p, token) {
  p.openElements.pop();
  p.insertionMode = InsertionMode.AFTER_HEAD;
  p._processToken(token);
}
function startTagInHeadNoScript(p, token) {
  switch (token.tagID) {
    case TAG_ID.HTML: {
      startTagInBody(p, token);
      break;
    }
    case TAG_ID.BASEFONT:
    case TAG_ID.BGSOUND:
    case TAG_ID.HEAD:
    case TAG_ID.LINK:
    case TAG_ID.META:
    case TAG_ID.NOFRAMES:
    case TAG_ID.STYLE: {
      startTagInHead(p, token);
      break;
    }
    case TAG_ID.NOSCRIPT: {
      p._err(token, ERR.nestedNoscriptInHead);
      break;
    }
    default: {
      tokenInHeadNoScript(p, token);
    }
  }
}
function endTagInHeadNoScript(p, token) {
  switch (token.tagID) {
    case TAG_ID.NOSCRIPT: {
      p.openElements.pop();
      p.insertionMode = InsertionMode.IN_HEAD;
      break;
    }
    case TAG_ID.BR: {
      tokenInHeadNoScript(p, token);
      break;
    }
    default: {
      p._err(token, ERR.endTagWithoutMatchingOpenElement);
    }
  }
}
function tokenInHeadNoScript(p, token) {
  const errCode = token.type === TokenType.EOF ? ERR.openElementsLeftAfterEof : ERR.disallowedContentInNoscriptInHead;
  p._err(token, errCode);
  p.openElements.pop();
  p.insertionMode = InsertionMode.IN_HEAD;
  p._processToken(token);
}
function startTagAfterHead(p, token) {
  switch (token.tagID) {
    case TAG_ID.HTML: {
      startTagInBody(p, token);
      break;
    }
    case TAG_ID.BODY: {
      p._insertElement(token, NS.HTML);
      p.framesetOk = false;
      p.insertionMode = InsertionMode.IN_BODY;
      break;
    }
    case TAG_ID.FRAMESET: {
      p._insertElement(token, NS.HTML);
      p.insertionMode = InsertionMode.IN_FRAMESET;
      break;
    }
    case TAG_ID.BASE:
    case TAG_ID.BASEFONT:
    case TAG_ID.BGSOUND:
    case TAG_ID.LINK:
    case TAG_ID.META:
    case TAG_ID.NOFRAMES:
    case TAG_ID.SCRIPT:
    case TAG_ID.STYLE:
    case TAG_ID.TEMPLATE:
    case TAG_ID.TITLE: {
      p._err(token, ERR.abandonedHeadElementChild);
      p.openElements.push(p.headElement, TAG_ID.HEAD);
      startTagInHead(p, token);
      p.openElements.remove(p.headElement);
      break;
    }
    case TAG_ID.HEAD: {
      p._err(token, ERR.misplacedStartTagForHeadElement);
      break;
    }
    default: {
      tokenAfterHead(p, token);
    }
  }
}
function endTagAfterHead(p, token) {
  switch (token.tagID) {
    case TAG_ID.BODY:
    case TAG_ID.HTML:
    case TAG_ID.BR: {
      tokenAfterHead(p, token);
      break;
    }
    case TAG_ID.TEMPLATE: {
      templateEndTagInHead(p, token);
      break;
    }
    default: {
      p._err(token, ERR.endTagWithoutMatchingOpenElement);
    }
  }
}
function tokenAfterHead(p, token) {
  p._insertFakeElement(TAG_NAMES.BODY, TAG_ID.BODY);
  p.insertionMode = InsertionMode.IN_BODY;
  modeInBody(p, token);
}
function modeInBody(p, token) {
  switch (token.type) {
    case TokenType.CHARACTER: {
      characterInBody(p, token);
      break;
    }
    case TokenType.WHITESPACE_CHARACTER: {
      whitespaceCharacterInBody(p, token);
      break;
    }
    case TokenType.COMMENT: {
      appendComment(p, token);
      break;
    }
    case TokenType.START_TAG: {
      startTagInBody(p, token);
      break;
    }
    case TokenType.END_TAG: {
      endTagInBody(p, token);
      break;
    }
    case TokenType.EOF: {
      eofInBody(p, token);
      break;
    }
  }
}
function whitespaceCharacterInBody(p, token) {
  p._reconstructActiveFormattingElements();
  p._insertCharacters(token);
}
function characterInBody(p, token) {
  p._reconstructActiveFormattingElements();
  p._insertCharacters(token);
  p.framesetOk = false;
}
function htmlStartTagInBody(p, token) {
  if (p.openElements.tmplCount === 0) {
    p.treeAdapter.adoptAttributes(p.openElements.items[0], token.attrs);
  }
}
function bodyStartTagInBody(p, token) {
  const bodyElement = p.openElements.tryPeekProperlyNestedBodyElement();
  if (bodyElement && p.openElements.tmplCount === 0) {
    p.framesetOk = false;
    p.treeAdapter.adoptAttributes(bodyElement, token.attrs);
  }
}
function framesetStartTagInBody(p, token) {
  const bodyElement = p.openElements.tryPeekProperlyNestedBodyElement();
  if (p.framesetOk && bodyElement) {
    p.treeAdapter.detachNode(bodyElement);
    p.openElements.popAllUpToHtmlElement();
    p._insertElement(token, NS.HTML);
    p.insertionMode = InsertionMode.IN_FRAMESET;
  }
}
function addressStartTagInBody(p, token) {
  if (p.openElements.hasInButtonScope(TAG_ID.P)) {
    p._closePElement();
  }
  p._insertElement(token, NS.HTML);
}
function numberedHeaderStartTagInBody(p, token) {
  if (p.openElements.hasInButtonScope(TAG_ID.P)) {
    p._closePElement();
  }
  if (p.openElements.currentTagId !== void 0 && NUMBERED_HEADERS.has(p.openElements.currentTagId)) {
    p.openElements.pop();
  }
  p._insertElement(token, NS.HTML);
}
function preStartTagInBody(p, token) {
  if (p.openElements.hasInButtonScope(TAG_ID.P)) {
    p._closePElement();
  }
  p._insertElement(token, NS.HTML);
  p.skipNextNewLine = true;
  p.framesetOk = false;
}
function formStartTagInBody(p, token) {
  const inTemplate = p.openElements.tmplCount > 0;
  if (!p.formElement || inTemplate) {
    if (p.openElements.hasInButtonScope(TAG_ID.P)) {
      p._closePElement();
    }
    p._insertElement(token, NS.HTML);
    if (!inTemplate) {
      p.formElement = p.openElements.current;
    }
  }
}
function listItemStartTagInBody(p, token) {
  p.framesetOk = false;
  const tn = token.tagID;
  for (let i = p.openElements.stackTop; i >= 0; i--) {
    const elementId = p.openElements.tagIDs[i];
    if (tn === TAG_ID.LI && elementId === TAG_ID.LI || (tn === TAG_ID.DD || tn === TAG_ID.DT) && (elementId === TAG_ID.DD || elementId === TAG_ID.DT)) {
      p.openElements.generateImpliedEndTagsWithExclusion(elementId);
      p.openElements.popUntilTagNamePopped(elementId);
      break;
    }
    if (elementId !== TAG_ID.ADDRESS && elementId !== TAG_ID.DIV && elementId !== TAG_ID.P && p._isSpecialElement(p.openElements.items[i], elementId)) {
      break;
    }
  }
  if (p.openElements.hasInButtonScope(TAG_ID.P)) {
    p._closePElement();
  }
  p._insertElement(token, NS.HTML);
}
function plaintextStartTagInBody(p, token) {
  if (p.openElements.hasInButtonScope(TAG_ID.P)) {
    p._closePElement();
  }
  p._insertElement(token, NS.HTML);
  p.tokenizer.state = TokenizerMode.PLAINTEXT;
}
function buttonStartTagInBody(p, token) {
  if (p.openElements.hasInScope(TAG_ID.BUTTON)) {
    p.openElements.generateImpliedEndTags();
    p.openElements.popUntilTagNamePopped(TAG_ID.BUTTON);
  }
  p._reconstructActiveFormattingElements();
  p._insertElement(token, NS.HTML);
  p.framesetOk = false;
}
function aStartTagInBody(p, token) {
  const activeElementEntry = p.activeFormattingElements.getElementEntryInScopeWithTagName(TAG_NAMES.A);
  if (activeElementEntry) {
    callAdoptionAgency(p, token);
    p.openElements.remove(activeElementEntry.element);
    p.activeFormattingElements.removeEntry(activeElementEntry);
  }
  p._reconstructActiveFormattingElements();
  p._insertElement(token, NS.HTML);
  p.activeFormattingElements.pushElement(p.openElements.current, token);
}
function bStartTagInBody(p, token) {
  p._reconstructActiveFormattingElements();
  p._insertElement(token, NS.HTML);
  p.activeFormattingElements.pushElement(p.openElements.current, token);
}
function nobrStartTagInBody(p, token) {
  p._reconstructActiveFormattingElements();
  if (p.openElements.hasInScope(TAG_ID.NOBR)) {
    callAdoptionAgency(p, token);
    p._reconstructActiveFormattingElements();
  }
  p._insertElement(token, NS.HTML);
  p.activeFormattingElements.pushElement(p.openElements.current, token);
}
function appletStartTagInBody(p, token) {
  p._reconstructActiveFormattingElements();
  p._insertElement(token, NS.HTML);
  p.activeFormattingElements.insertMarker();
  p.framesetOk = false;
}
function tableStartTagInBody(p, token) {
  if (p.treeAdapter.getDocumentMode(p.document) !== DOCUMENT_MODE.QUIRKS && p.openElements.hasInButtonScope(TAG_ID.P)) {
    p._closePElement();
  }
  p._insertElement(token, NS.HTML);
  p.framesetOk = false;
  p.insertionMode = InsertionMode.IN_TABLE;
}
function areaStartTagInBody(p, token) {
  p._reconstructActiveFormattingElements();
  p._appendElement(token, NS.HTML);
  p.framesetOk = false;
  token.ackSelfClosing = true;
}
function isHiddenInput(token) {
  const inputType = getTokenAttr(token, ATTRS.TYPE);
  return inputType != null && inputType.toLowerCase() === HIDDEN_INPUT_TYPE;
}
function inputStartTagInBody(p, token) {
  p._reconstructActiveFormattingElements();
  p._appendElement(token, NS.HTML);
  if (!isHiddenInput(token)) {
    p.framesetOk = false;
  }
  token.ackSelfClosing = true;
}
function paramStartTagInBody(p, token) {
  p._appendElement(token, NS.HTML);
  token.ackSelfClosing = true;
}
function hrStartTagInBody(p, token) {
  if (p.openElements.hasInButtonScope(TAG_ID.P)) {
    p._closePElement();
  }
  p._appendElement(token, NS.HTML);
  p.framesetOk = false;
  token.ackSelfClosing = true;
}
function imageStartTagInBody(p, token) {
  token.tagName = TAG_NAMES.IMG;
  token.tagID = TAG_ID.IMG;
  areaStartTagInBody(p, token);
}
function textareaStartTagInBody(p, token) {
  p._insertElement(token, NS.HTML);
  p.skipNextNewLine = true;
  p.tokenizer.state = TokenizerMode.RCDATA;
  p.originalInsertionMode = p.insertionMode;
  p.framesetOk = false;
  p.insertionMode = InsertionMode.TEXT;
}
function xmpStartTagInBody(p, token) {
  if (p.openElements.hasInButtonScope(TAG_ID.P)) {
    p._closePElement();
  }
  p._reconstructActiveFormattingElements();
  p.framesetOk = false;
  p._switchToTextParsing(token, TokenizerMode.RAWTEXT);
}
function iframeStartTagInBody(p, token) {
  p.framesetOk = false;
  p._switchToTextParsing(token, TokenizerMode.RAWTEXT);
}
function rawTextStartTagInBody(p, token) {
  p._switchToTextParsing(token, TokenizerMode.RAWTEXT);
}
function selectStartTagInBody(p, token) {
  p._reconstructActiveFormattingElements();
  p._insertElement(token, NS.HTML);
  p.framesetOk = false;
  p.insertionMode = p.insertionMode === InsertionMode.IN_TABLE || p.insertionMode === InsertionMode.IN_CAPTION || p.insertionMode === InsertionMode.IN_TABLE_BODY || p.insertionMode === InsertionMode.IN_ROW || p.insertionMode === InsertionMode.IN_CELL ? InsertionMode.IN_SELECT_IN_TABLE : InsertionMode.IN_SELECT;
}
function optgroupStartTagInBody(p, token) {
  if (p.openElements.currentTagId === TAG_ID.OPTION) {
    p.openElements.pop();
  }
  p._reconstructActiveFormattingElements();
  p._insertElement(token, NS.HTML);
}
function rbStartTagInBody(p, token) {
  if (p.openElements.hasInScope(TAG_ID.RUBY)) {
    p.openElements.generateImpliedEndTags();
  }
  p._insertElement(token, NS.HTML);
}
function rtStartTagInBody(p, token) {
  if (p.openElements.hasInScope(TAG_ID.RUBY)) {
    p.openElements.generateImpliedEndTagsWithExclusion(TAG_ID.RTC);
  }
  p._insertElement(token, NS.HTML);
}
function mathStartTagInBody(p, token) {
  p._reconstructActiveFormattingElements();
  adjustTokenMathMLAttrs(token);
  adjustTokenXMLAttrs(token);
  if (token.selfClosing) {
    p._appendElement(token, NS.MATHML);
  } else {
    p._insertElement(token, NS.MATHML);
  }
  token.ackSelfClosing = true;
}
function svgStartTagInBody(p, token) {
  p._reconstructActiveFormattingElements();
  adjustTokenSVGAttrs(token);
  adjustTokenXMLAttrs(token);
  if (token.selfClosing) {
    p._appendElement(token, NS.SVG);
  } else {
    p._insertElement(token, NS.SVG);
  }
  token.ackSelfClosing = true;
}
function genericStartTagInBody(p, token) {
  p._reconstructActiveFormattingElements();
  p._insertElement(token, NS.HTML);
}
function startTagInBody(p, token) {
  switch (token.tagID) {
    case TAG_ID.I:
    case TAG_ID.S:
    case TAG_ID.B:
    case TAG_ID.U:
    case TAG_ID.EM:
    case TAG_ID.TT:
    case TAG_ID.BIG:
    case TAG_ID.CODE:
    case TAG_ID.FONT:
    case TAG_ID.SMALL:
    case TAG_ID.STRIKE:
    case TAG_ID.STRONG: {
      bStartTagInBody(p, token);
      break;
    }
    case TAG_ID.A: {
      aStartTagInBody(p, token);
      break;
    }
    case TAG_ID.H1:
    case TAG_ID.H2:
    case TAG_ID.H3:
    case TAG_ID.H4:
    case TAG_ID.H5:
    case TAG_ID.H6: {
      numberedHeaderStartTagInBody(p, token);
      break;
    }
    case TAG_ID.P:
    case TAG_ID.DL:
    case TAG_ID.OL:
    case TAG_ID.UL:
    case TAG_ID.DIV:
    case TAG_ID.DIR:
    case TAG_ID.NAV:
    case TAG_ID.MAIN:
    case TAG_ID.MENU:
    case TAG_ID.ASIDE:
    case TAG_ID.CENTER:
    case TAG_ID.FIGURE:
    case TAG_ID.FOOTER:
    case TAG_ID.HEADER:
    case TAG_ID.HGROUP:
    case TAG_ID.DIALOG:
    case TAG_ID.DETAILS:
    case TAG_ID.ADDRESS:
    case TAG_ID.ARTICLE:
    case TAG_ID.SEARCH:
    case TAG_ID.SECTION:
    case TAG_ID.SUMMARY:
    case TAG_ID.FIELDSET:
    case TAG_ID.BLOCKQUOTE:
    case TAG_ID.FIGCAPTION: {
      addressStartTagInBody(p, token);
      break;
    }
    case TAG_ID.LI:
    case TAG_ID.DD:
    case TAG_ID.DT: {
      listItemStartTagInBody(p, token);
      break;
    }
    case TAG_ID.BR:
    case TAG_ID.IMG:
    case TAG_ID.WBR:
    case TAG_ID.AREA:
    case TAG_ID.EMBED:
    case TAG_ID.KEYGEN: {
      areaStartTagInBody(p, token);
      break;
    }
    case TAG_ID.HR: {
      hrStartTagInBody(p, token);
      break;
    }
    case TAG_ID.RB:
    case TAG_ID.RTC: {
      rbStartTagInBody(p, token);
      break;
    }
    case TAG_ID.RT:
    case TAG_ID.RP: {
      rtStartTagInBody(p, token);
      break;
    }
    case TAG_ID.PRE:
    case TAG_ID.LISTING: {
      preStartTagInBody(p, token);
      break;
    }
    case TAG_ID.XMP: {
      xmpStartTagInBody(p, token);
      break;
    }
    case TAG_ID.SVG: {
      svgStartTagInBody(p, token);
      break;
    }
    case TAG_ID.HTML: {
      htmlStartTagInBody(p, token);
      break;
    }
    case TAG_ID.BASE:
    case TAG_ID.LINK:
    case TAG_ID.META:
    case TAG_ID.STYLE:
    case TAG_ID.TITLE:
    case TAG_ID.SCRIPT:
    case TAG_ID.BGSOUND:
    case TAG_ID.BASEFONT:
    case TAG_ID.TEMPLATE: {
      startTagInHead(p, token);
      break;
    }
    case TAG_ID.BODY: {
      bodyStartTagInBody(p, token);
      break;
    }
    case TAG_ID.FORM: {
      formStartTagInBody(p, token);
      break;
    }
    case TAG_ID.NOBR: {
      nobrStartTagInBody(p, token);
      break;
    }
    case TAG_ID.MATH: {
      mathStartTagInBody(p, token);
      break;
    }
    case TAG_ID.TABLE: {
      tableStartTagInBody(p, token);
      break;
    }
    case TAG_ID.INPUT: {
      inputStartTagInBody(p, token);
      break;
    }
    case TAG_ID.PARAM:
    case TAG_ID.TRACK:
    case TAG_ID.SOURCE: {
      paramStartTagInBody(p, token);
      break;
    }
    case TAG_ID.IMAGE: {
      imageStartTagInBody(p, token);
      break;
    }
    case TAG_ID.BUTTON: {
      buttonStartTagInBody(p, token);
      break;
    }
    case TAG_ID.APPLET:
    case TAG_ID.OBJECT:
    case TAG_ID.MARQUEE: {
      appletStartTagInBody(p, token);
      break;
    }
    case TAG_ID.IFRAME: {
      iframeStartTagInBody(p, token);
      break;
    }
    case TAG_ID.SELECT: {
      selectStartTagInBody(p, token);
      break;
    }
    case TAG_ID.OPTION:
    case TAG_ID.OPTGROUP: {
      optgroupStartTagInBody(p, token);
      break;
    }
    case TAG_ID.NOEMBED:
    case TAG_ID.NOFRAMES: {
      rawTextStartTagInBody(p, token);
      break;
    }
    case TAG_ID.FRAMESET: {
      framesetStartTagInBody(p, token);
      break;
    }
    case TAG_ID.TEXTAREA: {
      textareaStartTagInBody(p, token);
      break;
    }
    case TAG_ID.NOSCRIPT: {
      if (p.options.scriptingEnabled) {
        rawTextStartTagInBody(p, token);
      } else {
        genericStartTagInBody(p, token);
      }
      break;
    }
    case TAG_ID.PLAINTEXT: {
      plaintextStartTagInBody(p, token);
      break;
    }
    case TAG_ID.COL:
    case TAG_ID.TH:
    case TAG_ID.TD:
    case TAG_ID.TR:
    case TAG_ID.HEAD:
    case TAG_ID.FRAME:
    case TAG_ID.TBODY:
    case TAG_ID.TFOOT:
    case TAG_ID.THEAD:
    case TAG_ID.CAPTION:
    case TAG_ID.COLGROUP: {
      break;
    }
    default: {
      genericStartTagInBody(p, token);
    }
  }
}
function bodyEndTagInBody(p, token) {
  if (p.openElements.hasInScope(TAG_ID.BODY)) {
    p.insertionMode = InsertionMode.AFTER_BODY;
    if (p.options.sourceCodeLocationInfo) {
      const bodyElement = p.openElements.tryPeekProperlyNestedBodyElement();
      if (bodyElement) {
        p._setEndLocation(bodyElement, token);
      }
    }
  }
}
function htmlEndTagInBody(p, token) {
  if (p.openElements.hasInScope(TAG_ID.BODY)) {
    p.insertionMode = InsertionMode.AFTER_BODY;
    endTagAfterBody(p, token);
  }
}
function addressEndTagInBody(p, token) {
  const tn = token.tagID;
  if (p.openElements.hasInScope(tn)) {
    p.openElements.generateImpliedEndTags();
    p.openElements.popUntilTagNamePopped(tn);
  }
}
function formEndTagInBody(p) {
  const inTemplate = p.openElements.tmplCount > 0;
  const { formElement } = p;
  if (!inTemplate) {
    p.formElement = null;
  }
  if ((formElement || inTemplate) && p.openElements.hasInScope(TAG_ID.FORM)) {
    p.openElements.generateImpliedEndTags();
    if (inTemplate) {
      p.openElements.popUntilTagNamePopped(TAG_ID.FORM);
    } else if (formElement) {
      p.openElements.remove(formElement);
    }
  }
}
function pEndTagInBody(p) {
  if (!p.openElements.hasInButtonScope(TAG_ID.P)) {
    p._insertFakeElement(TAG_NAMES.P, TAG_ID.P);
  }
  p._closePElement();
}
function liEndTagInBody(p) {
  if (p.openElements.hasInListItemScope(TAG_ID.LI)) {
    p.openElements.generateImpliedEndTagsWithExclusion(TAG_ID.LI);
    p.openElements.popUntilTagNamePopped(TAG_ID.LI);
  }
}
function ddEndTagInBody(p, token) {
  const tn = token.tagID;
  if (p.openElements.hasInScope(tn)) {
    p.openElements.generateImpliedEndTagsWithExclusion(tn);
    p.openElements.popUntilTagNamePopped(tn);
  }
}
function numberedHeaderEndTagInBody(p) {
  if (p.openElements.hasNumberedHeaderInScope()) {
    p.openElements.generateImpliedEndTags();
    p.openElements.popUntilNumberedHeaderPopped();
  }
}
function appletEndTagInBody(p, token) {
  const tn = token.tagID;
  if (p.openElements.hasInScope(tn)) {
    p.openElements.generateImpliedEndTags();
    p.openElements.popUntilTagNamePopped(tn);
    p.activeFormattingElements.clearToLastMarker();
  }
}
function brEndTagInBody(p) {
  p._reconstructActiveFormattingElements();
  p._insertFakeElement(TAG_NAMES.BR, TAG_ID.BR);
  p.openElements.pop();
  p.framesetOk = false;
}
function genericEndTagInBody(p, token) {
  const tn = token.tagName;
  const tid = token.tagID;
  for (let i = p.openElements.stackTop; i > 0; i--) {
    const element2 = p.openElements.items[i];
    const elementId = p.openElements.tagIDs[i];
    if (tid === elementId && (tid !== TAG_ID.UNKNOWN || p.treeAdapter.getTagName(element2) === tn)) {
      p.openElements.generateImpliedEndTagsWithExclusion(tid);
      if (p.openElements.stackTop >= i)
        p.openElements.shortenToLength(i);
      break;
    }
    if (p._isSpecialElement(element2, elementId)) {
      break;
    }
  }
}
function endTagInBody(p, token) {
  switch (token.tagID) {
    case TAG_ID.A:
    case TAG_ID.B:
    case TAG_ID.I:
    case TAG_ID.S:
    case TAG_ID.U:
    case TAG_ID.EM:
    case TAG_ID.TT:
    case TAG_ID.BIG:
    case TAG_ID.CODE:
    case TAG_ID.FONT:
    case TAG_ID.NOBR:
    case TAG_ID.SMALL:
    case TAG_ID.STRIKE:
    case TAG_ID.STRONG: {
      callAdoptionAgency(p, token);
      break;
    }
    case TAG_ID.P: {
      pEndTagInBody(p);
      break;
    }
    case TAG_ID.DL:
    case TAG_ID.UL:
    case TAG_ID.OL:
    case TAG_ID.DIR:
    case TAG_ID.DIV:
    case TAG_ID.NAV:
    case TAG_ID.PRE:
    case TAG_ID.MAIN:
    case TAG_ID.MENU:
    case TAG_ID.ASIDE:
    case TAG_ID.BUTTON:
    case TAG_ID.CENTER:
    case TAG_ID.FIGURE:
    case TAG_ID.FOOTER:
    case TAG_ID.HEADER:
    case TAG_ID.HGROUP:
    case TAG_ID.DIALOG:
    case TAG_ID.ADDRESS:
    case TAG_ID.ARTICLE:
    case TAG_ID.DETAILS:
    case TAG_ID.SEARCH:
    case TAG_ID.SECTION:
    case TAG_ID.SUMMARY:
    case TAG_ID.LISTING:
    case TAG_ID.FIELDSET:
    case TAG_ID.BLOCKQUOTE:
    case TAG_ID.FIGCAPTION: {
      addressEndTagInBody(p, token);
      break;
    }
    case TAG_ID.LI: {
      liEndTagInBody(p);
      break;
    }
    case TAG_ID.DD:
    case TAG_ID.DT: {
      ddEndTagInBody(p, token);
      break;
    }
    case TAG_ID.H1:
    case TAG_ID.H2:
    case TAG_ID.H3:
    case TAG_ID.H4:
    case TAG_ID.H5:
    case TAG_ID.H6: {
      numberedHeaderEndTagInBody(p);
      break;
    }
    case TAG_ID.BR: {
      brEndTagInBody(p);
      break;
    }
    case TAG_ID.BODY: {
      bodyEndTagInBody(p, token);
      break;
    }
    case TAG_ID.HTML: {
      htmlEndTagInBody(p, token);
      break;
    }
    case TAG_ID.FORM: {
      formEndTagInBody(p);
      break;
    }
    case TAG_ID.APPLET:
    case TAG_ID.OBJECT:
    case TAG_ID.MARQUEE: {
      appletEndTagInBody(p, token);
      break;
    }
    case TAG_ID.TEMPLATE: {
      templateEndTagInHead(p, token);
      break;
    }
    default: {
      genericEndTagInBody(p, token);
    }
  }
}
function eofInBody(p, token) {
  if (p.tmplInsertionModeStack.length > 0) {
    eofInTemplate(p, token);
  } else {
    stopParsing(p, token);
  }
}
function endTagInText(p, token) {
  var _a;
  if (token.tagID === TAG_ID.SCRIPT) {
    (_a = p.scriptHandler) === null || _a === void 0 ? void 0 : _a.call(p, p.openElements.current);
  }
  p.openElements.pop();
  p.insertionMode = p.originalInsertionMode;
}
function eofInText(p, token) {
  p._err(token, ERR.eofInElementThatCanContainOnlyText);
  p.openElements.pop();
  p.insertionMode = p.originalInsertionMode;
  p.onEof(token);
}
function characterInTable(p, token) {
  if (p.openElements.currentTagId !== void 0 && TABLE_STRUCTURE_TAGS.has(p.openElements.currentTagId)) {
    p.pendingCharacterTokens.length = 0;
    p.hasNonWhitespacePendingCharacterToken = false;
    p.originalInsertionMode = p.insertionMode;
    p.insertionMode = InsertionMode.IN_TABLE_TEXT;
    switch (token.type) {
      case TokenType.CHARACTER: {
        characterInTableText(p, token);
        break;
      }
      case TokenType.WHITESPACE_CHARACTER: {
        whitespaceCharacterInTableText(p, token);
        break;
      }
    }
  } else {
    tokenInTable(p, token);
  }
}
function captionStartTagInTable(p, token) {
  p.openElements.clearBackToTableContext();
  p.activeFormattingElements.insertMarker();
  p._insertElement(token, NS.HTML);
  p.insertionMode = InsertionMode.IN_CAPTION;
}
function colgroupStartTagInTable(p, token) {
  p.openElements.clearBackToTableContext();
  p._insertElement(token, NS.HTML);
  p.insertionMode = InsertionMode.IN_COLUMN_GROUP;
}
function colStartTagInTable(p, token) {
  p.openElements.clearBackToTableContext();
  p._insertFakeElement(TAG_NAMES.COLGROUP, TAG_ID.COLGROUP);
  p.insertionMode = InsertionMode.IN_COLUMN_GROUP;
  startTagInColumnGroup(p, token);
}
function tbodyStartTagInTable(p, token) {
  p.openElements.clearBackToTableContext();
  p._insertElement(token, NS.HTML);
  p.insertionMode = InsertionMode.IN_TABLE_BODY;
}
function tdStartTagInTable(p, token) {
  p.openElements.clearBackToTableContext();
  p._insertFakeElement(TAG_NAMES.TBODY, TAG_ID.TBODY);
  p.insertionMode = InsertionMode.IN_TABLE_BODY;
  startTagInTableBody(p, token);
}
function tableStartTagInTable(p, token) {
  if (p.openElements.hasInTableScope(TAG_ID.TABLE)) {
    p.openElements.popUntilTagNamePopped(TAG_ID.TABLE);
    p._resetInsertionMode();
    p._processStartTag(token);
  }
}
function inputStartTagInTable(p, token) {
  if (isHiddenInput(token)) {
    p._appendElement(token, NS.HTML);
  } else {
    tokenInTable(p, token);
  }
  token.ackSelfClosing = true;
}
function formStartTagInTable(p, token) {
  if (!p.formElement && p.openElements.tmplCount === 0) {
    p._insertElement(token, NS.HTML);
    p.formElement = p.openElements.current;
    p.openElements.pop();
  }
}
function startTagInTable(p, token) {
  switch (token.tagID) {
    case TAG_ID.TD:
    case TAG_ID.TH:
    case TAG_ID.TR: {
      tdStartTagInTable(p, token);
      break;
    }
    case TAG_ID.STYLE:
    case TAG_ID.SCRIPT:
    case TAG_ID.TEMPLATE: {
      startTagInHead(p, token);
      break;
    }
    case TAG_ID.COL: {
      colStartTagInTable(p, token);
      break;
    }
    case TAG_ID.FORM: {
      formStartTagInTable(p, token);
      break;
    }
    case TAG_ID.TABLE: {
      tableStartTagInTable(p, token);
      break;
    }
    case TAG_ID.TBODY:
    case TAG_ID.TFOOT:
    case TAG_ID.THEAD: {
      tbodyStartTagInTable(p, token);
      break;
    }
    case TAG_ID.INPUT: {
      inputStartTagInTable(p, token);
      break;
    }
    case TAG_ID.CAPTION: {
      captionStartTagInTable(p, token);
      break;
    }
    case TAG_ID.COLGROUP: {
      colgroupStartTagInTable(p, token);
      break;
    }
    default: {
      tokenInTable(p, token);
    }
  }
}
function endTagInTable(p, token) {
  switch (token.tagID) {
    case TAG_ID.TABLE: {
      if (p.openElements.hasInTableScope(TAG_ID.TABLE)) {
        p.openElements.popUntilTagNamePopped(TAG_ID.TABLE);
        p._resetInsertionMode();
      }
      break;
    }
    case TAG_ID.TEMPLATE: {
      templateEndTagInHead(p, token);
      break;
    }
    case TAG_ID.BODY:
    case TAG_ID.CAPTION:
    case TAG_ID.COL:
    case TAG_ID.COLGROUP:
    case TAG_ID.HTML:
    case TAG_ID.TBODY:
    case TAG_ID.TD:
    case TAG_ID.TFOOT:
    case TAG_ID.TH:
    case TAG_ID.THEAD:
    case TAG_ID.TR: {
      break;
    }
    default: {
      tokenInTable(p, token);
    }
  }
}
function tokenInTable(p, token) {
  const savedFosterParentingState = p.fosterParentingEnabled;
  p.fosterParentingEnabled = true;
  modeInBody(p, token);
  p.fosterParentingEnabled = savedFosterParentingState;
}
function whitespaceCharacterInTableText(p, token) {
  p.pendingCharacterTokens.push(token);
}
function characterInTableText(p, token) {
  p.pendingCharacterTokens.push(token);
  p.hasNonWhitespacePendingCharacterToken = true;
}
function tokenInTableText(p, token) {
  let i = 0;
  if (p.hasNonWhitespacePendingCharacterToken) {
    for (; i < p.pendingCharacterTokens.length; i++) {
      tokenInTable(p, p.pendingCharacterTokens[i]);
    }
  } else {
    for (; i < p.pendingCharacterTokens.length; i++) {
      p._insertCharacters(p.pendingCharacterTokens[i]);
    }
  }
  p.insertionMode = p.originalInsertionMode;
  p._processToken(token);
}
const TABLE_VOID_ELEMENTS = /* @__PURE__ */ new Set([TAG_ID.CAPTION, TAG_ID.COL, TAG_ID.COLGROUP, TAG_ID.TBODY, TAG_ID.TD, TAG_ID.TFOOT, TAG_ID.TH, TAG_ID.THEAD, TAG_ID.TR]);
function startTagInCaption(p, token) {
  const tn = token.tagID;
  if (TABLE_VOID_ELEMENTS.has(tn)) {
    if (p.openElements.hasInTableScope(TAG_ID.CAPTION)) {
      p.openElements.generateImpliedEndTags();
      p.openElements.popUntilTagNamePopped(TAG_ID.CAPTION);
      p.activeFormattingElements.clearToLastMarker();
      p.insertionMode = InsertionMode.IN_TABLE;
      startTagInTable(p, token);
    }
  } else {
    startTagInBody(p, token);
  }
}
function endTagInCaption(p, token) {
  const tn = token.tagID;
  switch (tn) {
    case TAG_ID.CAPTION:
    case TAG_ID.TABLE: {
      if (p.openElements.hasInTableScope(TAG_ID.CAPTION)) {
        p.openElements.generateImpliedEndTags();
        p.openElements.popUntilTagNamePopped(TAG_ID.CAPTION);
        p.activeFormattingElements.clearToLastMarker();
        p.insertionMode = InsertionMode.IN_TABLE;
        if (tn === TAG_ID.TABLE) {
          endTagInTable(p, token);
        }
      }
      break;
    }
    case TAG_ID.BODY:
    case TAG_ID.COL:
    case TAG_ID.COLGROUP:
    case TAG_ID.HTML:
    case TAG_ID.TBODY:
    case TAG_ID.TD:
    case TAG_ID.TFOOT:
    case TAG_ID.TH:
    case TAG_ID.THEAD:
    case TAG_ID.TR: {
      break;
    }
    default: {
      endTagInBody(p, token);
    }
  }
}
function startTagInColumnGroup(p, token) {
  switch (token.tagID) {
    case TAG_ID.HTML: {
      startTagInBody(p, token);
      break;
    }
    case TAG_ID.COL: {
      p._appendElement(token, NS.HTML);
      token.ackSelfClosing = true;
      break;
    }
    case TAG_ID.TEMPLATE: {
      startTagInHead(p, token);
      break;
    }
    default: {
      tokenInColumnGroup(p, token);
    }
  }
}
function endTagInColumnGroup(p, token) {
  switch (token.tagID) {
    case TAG_ID.COLGROUP: {
      if (p.openElements.currentTagId === TAG_ID.COLGROUP) {
        p.openElements.pop();
        p.insertionMode = InsertionMode.IN_TABLE;
      }
      break;
    }
    case TAG_ID.TEMPLATE: {
      templateEndTagInHead(p, token);
      break;
    }
    case TAG_ID.COL: {
      break;
    }
    default: {
      tokenInColumnGroup(p, token);
    }
  }
}
function tokenInColumnGroup(p, token) {
  if (p.openElements.currentTagId === TAG_ID.COLGROUP) {
    p.openElements.pop();
    p.insertionMode = InsertionMode.IN_TABLE;
    p._processToken(token);
  }
}
function startTagInTableBody(p, token) {
  switch (token.tagID) {
    case TAG_ID.TR: {
      p.openElements.clearBackToTableBodyContext();
      p._insertElement(token, NS.HTML);
      p.insertionMode = InsertionMode.IN_ROW;
      break;
    }
    case TAG_ID.TH:
    case TAG_ID.TD: {
      p.openElements.clearBackToTableBodyContext();
      p._insertFakeElement(TAG_NAMES.TR, TAG_ID.TR);
      p.insertionMode = InsertionMode.IN_ROW;
      startTagInRow(p, token);
      break;
    }
    case TAG_ID.CAPTION:
    case TAG_ID.COL:
    case TAG_ID.COLGROUP:
    case TAG_ID.TBODY:
    case TAG_ID.TFOOT:
    case TAG_ID.THEAD: {
      if (p.openElements.hasTableBodyContextInTableScope()) {
        p.openElements.clearBackToTableBodyContext();
        p.openElements.pop();
        p.insertionMode = InsertionMode.IN_TABLE;
        startTagInTable(p, token);
      }
      break;
    }
    default: {
      startTagInTable(p, token);
    }
  }
}
function endTagInTableBody(p, token) {
  const tn = token.tagID;
  switch (token.tagID) {
    case TAG_ID.TBODY:
    case TAG_ID.TFOOT:
    case TAG_ID.THEAD: {
      if (p.openElements.hasInTableScope(tn)) {
        p.openElements.clearBackToTableBodyContext();
        p.openElements.pop();
        p.insertionMode = InsertionMode.IN_TABLE;
      }
      break;
    }
    case TAG_ID.TABLE: {
      if (p.openElements.hasTableBodyContextInTableScope()) {
        p.openElements.clearBackToTableBodyContext();
        p.openElements.pop();
        p.insertionMode = InsertionMode.IN_TABLE;
        endTagInTable(p, token);
      }
      break;
    }
    case TAG_ID.BODY:
    case TAG_ID.CAPTION:
    case TAG_ID.COL:
    case TAG_ID.COLGROUP:
    case TAG_ID.HTML:
    case TAG_ID.TD:
    case TAG_ID.TH:
    case TAG_ID.TR: {
      break;
    }
    default: {
      endTagInTable(p, token);
    }
  }
}
function startTagInRow(p, token) {
  switch (token.tagID) {
    case TAG_ID.TH:
    case TAG_ID.TD: {
      p.openElements.clearBackToTableRowContext();
      p._insertElement(token, NS.HTML);
      p.insertionMode = InsertionMode.IN_CELL;
      p.activeFormattingElements.insertMarker();
      break;
    }
    case TAG_ID.CAPTION:
    case TAG_ID.COL:
    case TAG_ID.COLGROUP:
    case TAG_ID.TBODY:
    case TAG_ID.TFOOT:
    case TAG_ID.THEAD:
    case TAG_ID.TR: {
      if (p.openElements.hasInTableScope(TAG_ID.TR)) {
        p.openElements.clearBackToTableRowContext();
        p.openElements.pop();
        p.insertionMode = InsertionMode.IN_TABLE_BODY;
        startTagInTableBody(p, token);
      }
      break;
    }
    default: {
      startTagInTable(p, token);
    }
  }
}
function endTagInRow(p, token) {
  switch (token.tagID) {
    case TAG_ID.TR: {
      if (p.openElements.hasInTableScope(TAG_ID.TR)) {
        p.openElements.clearBackToTableRowContext();
        p.openElements.pop();
        p.insertionMode = InsertionMode.IN_TABLE_BODY;
      }
      break;
    }
    case TAG_ID.TABLE: {
      if (p.openElements.hasInTableScope(TAG_ID.TR)) {
        p.openElements.clearBackToTableRowContext();
        p.openElements.pop();
        p.insertionMode = InsertionMode.IN_TABLE_BODY;
        endTagInTableBody(p, token);
      }
      break;
    }
    case TAG_ID.TBODY:
    case TAG_ID.TFOOT:
    case TAG_ID.THEAD: {
      if (p.openElements.hasInTableScope(token.tagID) || p.openElements.hasInTableScope(TAG_ID.TR)) {
        p.openElements.clearBackToTableRowContext();
        p.openElements.pop();
        p.insertionMode = InsertionMode.IN_TABLE_BODY;
        endTagInTableBody(p, token);
      }
      break;
    }
    case TAG_ID.BODY:
    case TAG_ID.CAPTION:
    case TAG_ID.COL:
    case TAG_ID.COLGROUP:
    case TAG_ID.HTML:
    case TAG_ID.TD:
    case TAG_ID.TH: {
      break;
    }
    default: {
      endTagInTable(p, token);
    }
  }
}
function startTagInCell(p, token) {
  const tn = token.tagID;
  if (TABLE_VOID_ELEMENTS.has(tn)) {
    if (p.openElements.hasInTableScope(TAG_ID.TD) || p.openElements.hasInTableScope(TAG_ID.TH)) {
      p._closeTableCell();
      startTagInRow(p, token);
    }
  } else {
    startTagInBody(p, token);
  }
}
function endTagInCell(p, token) {
  const tn = token.tagID;
  switch (tn) {
    case TAG_ID.TD:
    case TAG_ID.TH: {
      if (p.openElements.hasInTableScope(tn)) {
        p.openElements.generateImpliedEndTags();
        p.openElements.popUntilTagNamePopped(tn);
        p.activeFormattingElements.clearToLastMarker();
        p.insertionMode = InsertionMode.IN_ROW;
      }
      break;
    }
    case TAG_ID.TABLE:
    case TAG_ID.TBODY:
    case TAG_ID.TFOOT:
    case TAG_ID.THEAD:
    case TAG_ID.TR: {
      if (p.openElements.hasInTableScope(tn)) {
        p._closeTableCell();
        endTagInRow(p, token);
      }
      break;
    }
    case TAG_ID.BODY:
    case TAG_ID.CAPTION:
    case TAG_ID.COL:
    case TAG_ID.COLGROUP:
    case TAG_ID.HTML: {
      break;
    }
    default: {
      endTagInBody(p, token);
    }
  }
}
function startTagInSelect(p, token) {
  switch (token.tagID) {
    case TAG_ID.HTML: {
      startTagInBody(p, token);
      break;
    }
    case TAG_ID.OPTION: {
      if (p.openElements.currentTagId === TAG_ID.OPTION) {
        p.openElements.pop();
      }
      p._insertElement(token, NS.HTML);
      break;
    }
    case TAG_ID.OPTGROUP: {
      if (p.openElements.currentTagId === TAG_ID.OPTION) {
        p.openElements.pop();
      }
      if (p.openElements.currentTagId === TAG_ID.OPTGROUP) {
        p.openElements.pop();
      }
      p._insertElement(token, NS.HTML);
      break;
    }
    case TAG_ID.HR: {
      if (p.openElements.currentTagId === TAG_ID.OPTION) {
        p.openElements.pop();
      }
      if (p.openElements.currentTagId === TAG_ID.OPTGROUP) {
        p.openElements.pop();
      }
      p._appendElement(token, NS.HTML);
      token.ackSelfClosing = true;
      break;
    }
    case TAG_ID.INPUT:
    case TAG_ID.KEYGEN:
    case TAG_ID.TEXTAREA:
    case TAG_ID.SELECT: {
      if (p.openElements.hasInSelectScope(TAG_ID.SELECT)) {
        p.openElements.popUntilTagNamePopped(TAG_ID.SELECT);
        p._resetInsertionMode();
        if (token.tagID !== TAG_ID.SELECT) {
          p._processStartTag(token);
        }
      }
      break;
    }
    case TAG_ID.SCRIPT:
    case TAG_ID.TEMPLATE: {
      startTagInHead(p, token);
      break;
    }
  }
}
function endTagInSelect(p, token) {
  switch (token.tagID) {
    case TAG_ID.OPTGROUP: {
      if (p.openElements.stackTop > 0 && p.openElements.currentTagId === TAG_ID.OPTION && p.openElements.tagIDs[p.openElements.stackTop - 1] === TAG_ID.OPTGROUP) {
        p.openElements.pop();
      }
      if (p.openElements.currentTagId === TAG_ID.OPTGROUP) {
        p.openElements.pop();
      }
      break;
    }
    case TAG_ID.OPTION: {
      if (p.openElements.currentTagId === TAG_ID.OPTION) {
        p.openElements.pop();
      }
      break;
    }
    case TAG_ID.SELECT: {
      if (p.openElements.hasInSelectScope(TAG_ID.SELECT)) {
        p.openElements.popUntilTagNamePopped(TAG_ID.SELECT);
        p._resetInsertionMode();
      }
      break;
    }
    case TAG_ID.TEMPLATE: {
      templateEndTagInHead(p, token);
      break;
    }
  }
}
function startTagInSelectInTable(p, token) {
  const tn = token.tagID;
  if (tn === TAG_ID.CAPTION || tn === TAG_ID.TABLE || tn === TAG_ID.TBODY || tn === TAG_ID.TFOOT || tn === TAG_ID.THEAD || tn === TAG_ID.TR || tn === TAG_ID.TD || tn === TAG_ID.TH) {
    p.openElements.popUntilTagNamePopped(TAG_ID.SELECT);
    p._resetInsertionMode();
    p._processStartTag(token);
  } else {
    startTagInSelect(p, token);
  }
}
function endTagInSelectInTable(p, token) {
  const tn = token.tagID;
  if (tn === TAG_ID.CAPTION || tn === TAG_ID.TABLE || tn === TAG_ID.TBODY || tn === TAG_ID.TFOOT || tn === TAG_ID.THEAD || tn === TAG_ID.TR || tn === TAG_ID.TD || tn === TAG_ID.TH) {
    if (p.openElements.hasInTableScope(tn)) {
      p.openElements.popUntilTagNamePopped(TAG_ID.SELECT);
      p._resetInsertionMode();
      p.onEndTag(token);
    }
  } else {
    endTagInSelect(p, token);
  }
}
function startTagInTemplate(p, token) {
  switch (token.tagID) {
    // First, handle tags that can start without a mode change
    case TAG_ID.BASE:
    case TAG_ID.BASEFONT:
    case TAG_ID.BGSOUND:
    case TAG_ID.LINK:
    case TAG_ID.META:
    case TAG_ID.NOFRAMES:
    case TAG_ID.SCRIPT:
    case TAG_ID.STYLE:
    case TAG_ID.TEMPLATE:
    case TAG_ID.TITLE: {
      startTagInHead(p, token);
      break;
    }
    // Re-process the token in the appropriate mode
    case TAG_ID.CAPTION:
    case TAG_ID.COLGROUP:
    case TAG_ID.TBODY:
    case TAG_ID.TFOOT:
    case TAG_ID.THEAD: {
      p.tmplInsertionModeStack[0] = InsertionMode.IN_TABLE;
      p.insertionMode = InsertionMode.IN_TABLE;
      startTagInTable(p, token);
      break;
    }
    case TAG_ID.COL: {
      p.tmplInsertionModeStack[0] = InsertionMode.IN_COLUMN_GROUP;
      p.insertionMode = InsertionMode.IN_COLUMN_GROUP;
      startTagInColumnGroup(p, token);
      break;
    }
    case TAG_ID.TR: {
      p.tmplInsertionModeStack[0] = InsertionMode.IN_TABLE_BODY;
      p.insertionMode = InsertionMode.IN_TABLE_BODY;
      startTagInTableBody(p, token);
      break;
    }
    case TAG_ID.TD:
    case TAG_ID.TH: {
      p.tmplInsertionModeStack[0] = InsertionMode.IN_ROW;
      p.insertionMode = InsertionMode.IN_ROW;
      startTagInRow(p, token);
      break;
    }
    default: {
      p.tmplInsertionModeStack[0] = InsertionMode.IN_BODY;
      p.insertionMode = InsertionMode.IN_BODY;
      startTagInBody(p, token);
    }
  }
}
function endTagInTemplate(p, token) {
  if (token.tagID === TAG_ID.TEMPLATE) {
    templateEndTagInHead(p, token);
  }
}
function eofInTemplate(p, token) {
  if (p.openElements.tmplCount > 0) {
    p.openElements.popUntilTagNamePopped(TAG_ID.TEMPLATE);
    p.activeFormattingElements.clearToLastMarker();
    p.tmplInsertionModeStack.shift();
    p._resetInsertionMode();
    p.onEof(token);
  } else {
    stopParsing(p, token);
  }
}
function startTagAfterBody(p, token) {
  if (token.tagID === TAG_ID.HTML) {
    startTagInBody(p, token);
  } else {
    tokenAfterBody(p, token);
  }
}
function endTagAfterBody(p, token) {
  var _a;
  if (token.tagID === TAG_ID.HTML) {
    if (!p.fragmentContext) {
      p.insertionMode = InsertionMode.AFTER_AFTER_BODY;
    }
    if (p.options.sourceCodeLocationInfo && p.openElements.tagIDs[0] === TAG_ID.HTML) {
      p._setEndLocation(p.openElements.items[0], token);
      const bodyElement = p.openElements.items[1];
      if (bodyElement && !((_a = p.treeAdapter.getNodeSourceCodeLocation(bodyElement)) === null || _a === void 0 ? void 0 : _a.endTag)) {
        p._setEndLocation(bodyElement, token);
      }
    }
  } else {
    tokenAfterBody(p, token);
  }
}
function tokenAfterBody(p, token) {
  p.insertionMode = InsertionMode.IN_BODY;
  modeInBody(p, token);
}
function startTagInFrameset(p, token) {
  switch (token.tagID) {
    case TAG_ID.HTML: {
      startTagInBody(p, token);
      break;
    }
    case TAG_ID.FRAMESET: {
      p._insertElement(token, NS.HTML);
      break;
    }
    case TAG_ID.FRAME: {
      p._appendElement(token, NS.HTML);
      token.ackSelfClosing = true;
      break;
    }
    case TAG_ID.NOFRAMES: {
      startTagInHead(p, token);
      break;
    }
  }
}
function endTagInFrameset(p, token) {
  if (token.tagID === TAG_ID.FRAMESET && !p.openElements.isRootHtmlElementCurrent()) {
    p.openElements.pop();
    if (!p.fragmentContext && p.openElements.currentTagId !== TAG_ID.FRAMESET) {
      p.insertionMode = InsertionMode.AFTER_FRAMESET;
    }
  }
}
function startTagAfterFrameset(p, token) {
  switch (token.tagID) {
    case TAG_ID.HTML: {
      startTagInBody(p, token);
      break;
    }
    case TAG_ID.NOFRAMES: {
      startTagInHead(p, token);
      break;
    }
  }
}
function endTagAfterFrameset(p, token) {
  if (token.tagID === TAG_ID.HTML) {
    p.insertionMode = InsertionMode.AFTER_AFTER_FRAMESET;
  }
}
function startTagAfterAfterBody(p, token) {
  if (token.tagID === TAG_ID.HTML) {
    startTagInBody(p, token);
  } else {
    tokenAfterAfterBody(p, token);
  }
}
function tokenAfterAfterBody(p, token) {
  p.insertionMode = InsertionMode.IN_BODY;
  modeInBody(p, token);
}
function startTagAfterAfterFrameset(p, token) {
  switch (token.tagID) {
    case TAG_ID.HTML: {
      startTagInBody(p, token);
      break;
    }
    case TAG_ID.NOFRAMES: {
      startTagInHead(p, token);
      break;
    }
  }
}
function nullCharacterInForeignContent(p, token) {
  token.chars = REPLACEMENT_CHARACTER;
  p._insertCharacters(token);
}
function characterInForeignContent(p, token) {
  p._insertCharacters(token);
  p.framesetOk = false;
}
function popUntilHtmlOrIntegrationPoint(p) {
  while (p.treeAdapter.getNamespaceURI(p.openElements.current) !== NS.HTML && p.openElements.currentTagId !== void 0 && !p._isIntegrationPoint(p.openElements.currentTagId, p.openElements.current)) {
    p.openElements.pop();
  }
}
function startTagInForeignContent(p, token) {
  if (causesExit(token)) {
    popUntilHtmlOrIntegrationPoint(p);
    p._startTagOutsideForeignContent(token);
  } else {
    const current = p._getAdjustedCurrentElement();
    const currentNs = p.treeAdapter.getNamespaceURI(current);
    if (currentNs === NS.MATHML) {
      adjustTokenMathMLAttrs(token);
    } else if (currentNs === NS.SVG) {
      adjustTokenSVGTagName(token);
      adjustTokenSVGAttrs(token);
    }
    adjustTokenXMLAttrs(token);
    if (token.selfClosing) {
      p._appendElement(token, currentNs);
    } else {
      p._insertElement(token, currentNs);
    }
    token.ackSelfClosing = true;
  }
}
function endTagInForeignContent(p, token) {
  if (token.tagID === TAG_ID.P || token.tagID === TAG_ID.BR) {
    popUntilHtmlOrIntegrationPoint(p);
    p._endTagOutsideForeignContent(token);
    return;
  }
  for (let i = p.openElements.stackTop; i > 0; i--) {
    const element2 = p.openElements.items[i];
    if (p.treeAdapter.getNamespaceURI(element2) === NS.HTML) {
      p._endTagOutsideForeignContent(token);
      break;
    }
    const tagName = p.treeAdapter.getTagName(element2);
    if (tagName.toLowerCase() === token.tagName) {
      token.tagName = tagName;
      p.openElements.shortenToLength(i);
      break;
    }
  }
}
/* @__PURE__ */ new Set([
  TAG_NAMES.AREA,
  TAG_NAMES.BASE,
  TAG_NAMES.BASEFONT,
  TAG_NAMES.BGSOUND,
  TAG_NAMES.BR,
  TAG_NAMES.COL,
  TAG_NAMES.EMBED,
  TAG_NAMES.FRAME,
  TAG_NAMES.HR,
  TAG_NAMES.IMG,
  TAG_NAMES.INPUT,
  TAG_NAMES.KEYGEN,
  TAG_NAMES.LINK,
  TAG_NAMES.META,
  TAG_NAMES.PARAM,
  TAG_NAMES.SOURCE,
  TAG_NAMES.TRACK,
  TAG_NAMES.WBR
]);
const gfmTagfilterExpression = /<(\/?)(iframe|noembed|noframes|plaintext|script|style|textarea|title|xmp)(?=[\t\n\f\r />])/gi;
const knownMdxNames = /* @__PURE__ */ new Set([
  "mdxFlowExpression",
  "mdxJsxFlowElement",
  "mdxJsxTextElement",
  "mdxTextExpression",
  "mdxjsEsm"
]);
const parseOptions = { sourceCodeLocationInfo: true, scriptingEnabled: false };
function raw(tree, options) {
  const document2 = documentMode(tree);
  const one2 = zwitch("type", {
    handlers: { root, element, text, comment, doctype, raw: handleRaw },
    unknown
  });
  const state = {
    parser: document2 ? new Parser(parseOptions) : Parser.getFragmentParser(void 0, parseOptions),
    handle(node2) {
      one2(node2, state);
    },
    stitches: false,
    options: options || {}
  };
  one2(tree, state);
  resetTokenizer(state, pointStart());
  const p5 = document2 ? state.parser.document : state.parser.getFragment();
  const result = fromParse5(p5, {
    // To do: support `space`?
    file: state.options.file
  });
  if (state.stitches) {
    visit(result, "comment", function(node2, index2, parent) {
      const stitch2 = (
        /** @type {Stitch} */
        /** @type {unknown} */
        node2
      );
      if (stitch2.value.stitch && parent && index2 !== void 0) {
        const siblings = parent.children;
        siblings[index2] = stitch2.value.stitch;
        return index2;
      }
    });
  }
  if (result.type === "root" && result.children.length === 1 && result.children[0].type === tree.type) {
    return result.children[0];
  }
  return result;
}
function all(nodes, state) {
  let index2 = -1;
  if (nodes) {
    while (++index2 < nodes.length) {
      state.handle(nodes[index2]);
    }
  }
}
function root(node2, state) {
  all(node2.children, state);
}
function element(node2, state) {
  startTag(node2, state);
  all(node2.children, state);
  endTag(node2, state);
}
function text(node2, state) {
  if (state.parser.tokenizer.state > 4) {
    state.parser.tokenizer.state = 0;
  }
  const token = {
    type: TokenType.CHARACTER,
    chars: node2.value,
    location: createParse5Location(node2)
  };
  resetTokenizer(state, pointStart(node2));
  state.parser.currentToken = token;
  state.parser._processToken(state.parser.currentToken);
}
function doctype(node2, state) {
  const token = {
    type: TokenType.DOCTYPE,
    name: "html",
    forceQuirks: false,
    publicId: "",
    systemId: "",
    location: createParse5Location(node2)
  };
  resetTokenizer(state, pointStart(node2));
  state.parser.currentToken = token;
  state.parser._processToken(state.parser.currentToken);
}
function stitch(node2, state) {
  state.stitches = true;
  const clone = cloneWithoutChildren(node2);
  if ("children" in node2 && "children" in clone) {
    const fakeRoot = (
      /** @type {Root} */
      raw({ type: "root", children: node2.children }, state.options)
    );
    clone.children = fakeRoot.children;
  }
  comment({ type: "comment", value: { stitch: clone } }, state);
}
function comment(node2, state) {
  const data = node2.value;
  const token = {
    type: TokenType.COMMENT,
    data,
    location: createParse5Location(node2)
  };
  resetTokenizer(state, pointStart(node2));
  state.parser.currentToken = token;
  state.parser._processToken(state.parser.currentToken);
}
function handleRaw(node2, state) {
  state.parser.tokenizer.preprocessor.html = "";
  state.parser.tokenizer.preprocessor.pos = -1;
  state.parser.tokenizer.preprocessor.lastGapPos = -2;
  state.parser.tokenizer.preprocessor.gapStack = [];
  state.parser.tokenizer.preprocessor.skipNextNewLine = false;
  state.parser.tokenizer.preprocessor.lastChunkWritten = false;
  state.parser.tokenizer.preprocessor.endOfChunkHit = false;
  state.parser.tokenizer.preprocessor.isEol = false;
  setPoint(state, pointStart(node2));
  state.parser.tokenizer.write(
    state.options.tagfilter ? node2.value.replace(gfmTagfilterExpression, "&lt;$1$2") : node2.value,
    false
  );
  state.parser.tokenizer._runParsingLoop();
  if (state.parser.tokenizer.state === 72 || // @ts-expect-error: removed.
  state.parser.tokenizer.state === 78) {
    state.parser.tokenizer.preprocessor.lastChunkWritten = true;
    const cp = state.parser.tokenizer._consume();
    state.parser.tokenizer._callState(cp);
  }
}
function unknown(node_, state) {
  const node2 = (
    /** @type {Nodes} */
    node_
  );
  if (state.options.passThrough && state.options.passThrough.includes(node2.type)) {
    stitch(node2, state);
  } else {
    let extra = "";
    if (knownMdxNames.has(node2.type)) {
      extra = ". It looks like you are using MDX nodes with `hast-util-raw` (or `rehype-raw`). If you use this because you are using remark or rehype plugins that inject `'html'` nodes, then please raise an issue with that plugin, as its a bad and slow idea. If you use this because you are using markdown syntax, then you have to configure this utility (or plugin) to pass through these nodes (see `passThrough` in docs), but you can also migrate to use the MDX syntax";
    }
    throw new Error("Cannot compile `" + node2.type + "` node" + extra);
  }
}
function resetTokenizer(state, point2) {
  setPoint(state, point2);
  const token = state.parser.tokenizer.currentCharacterToken;
  if (token && token.location) {
    token.location.endLine = state.parser.tokenizer.preprocessor.line;
    token.location.endCol = state.parser.tokenizer.preprocessor.col + 1;
    token.location.endOffset = state.parser.tokenizer.preprocessor.offset + 1;
    state.parser.currentToken = token;
    state.parser._processToken(state.parser.currentToken);
  }
  state.parser.tokenizer.paused = false;
  state.parser.tokenizer.inLoop = false;
  state.parser.tokenizer.active = false;
  state.parser.tokenizer.returnState = TokenizerMode.DATA;
  state.parser.tokenizer.charRefCode = -1;
  state.parser.tokenizer.consumedAfterSnapshot = -1;
  state.parser.tokenizer.currentLocation = null;
  state.parser.tokenizer.currentCharacterToken = null;
  state.parser.tokenizer.currentToken = null;
  state.parser.tokenizer.currentAttr = { name: "", value: "" };
}
function setPoint(state, point2) {
  if (point2 && point2.offset !== void 0) {
    const location2 = {
      startLine: point2.line,
      startCol: point2.column,
      startOffset: point2.offset,
      endLine: -1,
      endCol: -1,
      endOffset: -1
    };
    state.parser.tokenizer.preprocessor.lineStartPos = -point2.column + 1;
    state.parser.tokenizer.preprocessor.droppedBufferSize = point2.offset;
    state.parser.tokenizer.preprocessor.line = point2.line;
    state.parser.tokenizer.currentLocation = location2;
  }
}
function startTag(node2, state) {
  const tagName = node2.tagName.toLowerCase();
  if (state.parser.tokenizer.state === TokenizerMode.PLAINTEXT) return;
  resetTokenizer(state, pointStart(node2));
  const current = state.parser.openElements.current;
  let ns = "namespaceURI" in current ? current.namespaceURI : webNamespaces.html;
  if (ns === webNamespaces.html && tagName === "svg") {
    ns = webNamespaces.svg;
  }
  const result = toParse5(
    // Shallow clone to not delve into `children`: we only need the attributes.
    { ...node2, children: [] },
    { space: ns === webNamespaces.svg ? "svg" : "html" }
  );
  const tag = {
    type: TokenType.START_TAG,
    tagName,
    tagID: getTagID(tagName),
    // We always send start and end tags.
    selfClosing: false,
    ackSelfClosing: false,
    // Always element.
    /* c8 ignore next */
    attrs: "attrs" in result ? result.attrs : [],
    location: createParse5Location(node2)
  };
  state.parser.currentToken = tag;
  state.parser._processToken(state.parser.currentToken);
  state.parser.tokenizer.lastStartTagName = tagName;
}
function endTag(node2, state) {
  const tagName = node2.tagName.toLowerCase();
  if (!state.parser.tokenizer.inForeignNode && htmlVoidElements.includes(tagName)) {
    return;
  }
  if (state.parser.tokenizer.state === TokenizerMode.PLAINTEXT) return;
  resetTokenizer(state, pointEnd(node2));
  const tag = {
    type: TokenType.END_TAG,
    tagName,
    tagID: getTagID(tagName),
    selfClosing: false,
    ackSelfClosing: false,
    attrs: [],
    location: createParse5Location(node2)
  };
  state.parser.currentToken = tag;
  state.parser._processToken(state.parser.currentToken);
  if (
    // Current element is closed.
    tagName === state.parser.tokenizer.lastStartTagName && // `<textarea>` and `<title>`
    (state.parser.tokenizer.state === TokenizerMode.RCDATA || // `<iframe>`, `<noembed>`, `<noframes>`, `<style>`, `<xmp>`
    state.parser.tokenizer.state === TokenizerMode.RAWTEXT || // `<script>`
    state.parser.tokenizer.state === TokenizerMode.SCRIPT_DATA)
  ) {
    state.parser.tokenizer.state = TokenizerMode.DATA;
  }
}
function documentMode(node2) {
  const head = node2.type === "root" ? node2.children[0] : node2;
  return Boolean(
    head && (head.type === "doctype" || head.type === "element" && head.tagName.toLowerCase() === "html")
  );
}
function createParse5Location(node2) {
  const start = pointStart(node2) || {
    line: void 0,
    column: void 0,
    offset: void 0
  };
  const end = pointEnd(node2) || {
    line: void 0,
    column: void 0,
    offset: void 0
  };
  const location2 = {
    startLine: start.line,
    startCol: start.column,
    startOffset: start.offset,
    endLine: end.line,
    endCol: end.column,
    endOffset: end.offset
  };
  return location2;
}
function cloneWithoutChildren(node2) {
  return "children" in node2 ? structuredClone$1({ ...node2, children: [] }) : structuredClone$1(node2);
}
function rehypeRaw(options) {
  return function(tree, file) {
    const result = (
      /** @type {Root} */
      raw(tree, { ...options, file })
    );
    return result;
  };
}
const RootContext = reactExports.createContext(null);
const ListContext = reactExports.createContext(null);
const TagsListContext = reactExports.createContext(null);
const PreContext = reactExports.createContext(false);
const mdRenderer = createMarkdownRenderer({
  remarkRehypeOptions: { allowDangerousHtml: true },
  rehypePlugins: [rehypeRaw, rehypeCustomElements]
});
const mdComponents = {
  mark(props) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      ...props,
      className: "text-fd-primary underline"
    });
  },
  a: "span",
  p(props) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
      ...props,
      className: "min-w-0"
    });
  },
  strong(props) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("strong", {
      ...props,
      className: "text-fd-accent-foreground font-medium"
    });
  },
  code(props) {
    if (reactExports.use(PreContext)) return /* @__PURE__ */ jsxRuntimeExports.jsx("code", {
      ...props,
      className: "mask-[linear-gradient(to_bottom,white,white_30px,transparent_80px)]"
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx("code", {
      ...props,
      className: "border rounded-md px-px bg-fd-secondary text-fd-secondary-foreground"
    });
  },
  custom({ _tagName = "fragment", children, ...rest }) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
      className: "inline-flex max-w-full items-center border p-0.5 rounded-md bg-fd-card text-fd-card-foreground divide-x divide-fd-border",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", {
          className: "rounded-sm px-0.5 me-1 bg-fd-primary font-medium text-xs text-fd-primary-foreground border-none",
          children: _tagName
        }),
        Object.entries(rest).map(([k, v]) => {
          if (typeof v !== "string") return;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("code", {
            className: "truncate text-xs text-fd-muted-foreground px-1",
            children: [/* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
              className: "text-fd-card-foreground",
              children: [k, ": "]
            }), v]
          }, k);
        }),
        children && /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
          className: "ps-1",
          children
        })
      ]
    });
  },
  pre(props) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("pre", {
      ...props,
      className: twMerge("flex flex-col border rounded-md my-0.5 p-2 bg-fd-secondary text-fd-secondary-foreground max-h-20 overflow-hidden", props.className),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(PreContext, {
        value: true,
        children: props.children
      })
    });
  }
};
function rehypeCustomElements() {
  return (tree) => {
    visit(tree, (node2) => {
      if (node2.type === "element" && document.createElement(node2.tagName) instanceof HTMLUnknownElement) {
        node2.properties._tagName = node2.tagName;
        node2.tagName = "custom";
      }
    });
  };
}
function SearchDialog({ open, onOpenChange, search: search2, onSearchChange, isLoading = false, onSelect: onSelectProp, children }) {
  const router = useRouter();
  const onOpenChangeCallback = reactExports.useRef(onOpenChange);
  onOpenChangeCallback.current = onOpenChange;
  const onSearchChangeCallback = reactExports.useRef(onSearchChange);
  onSearchChangeCallback.current = onSearchChange;
  const onSelect = (item) => {
    if (item.type === "action") item.onSelect();
    else if (item.external) window.open(item.url, "_blank")?.focus();
    else router.push(item.url);
    onOpenChange(false);
    onSelectProp?.(item);
  };
  const onSelectCallback = reactExports.useRef(onSelect);
  onSelectCallback.current = onSelect;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, {
    open,
    onOpenChange,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(RootContext, {
      value: reactExports.useMemo(() => ({
        open,
        search: search2,
        isLoading,
        onOpenChange: (v) => onOpenChangeCallback.current(v),
        onSearchChange: (v) => onSearchChangeCallback.current(v),
        onSelect: (v) => onSelectCallback.current(v)
      }), [
        isLoading,
        open,
        search2
      ]),
      children
    })
  });
}
function SearchDialogHeader(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    ...props,
    className: twMerge("flex flex-row items-center gap-2 p-3", props.className)
  });
}
function SearchDialogInput(props) {
  const { text: text2 } = useI18n();
  const { search: search2, onSearchChange } = useSearch();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("input", {
    ...props,
    value: search2,
    onChange: (e2) => onSearchChange(e2.target.value),
    placeholder: text2.search,
    className: "w-0 flex-1 bg-transparent text-lg placeholder:text-fd-muted-foreground focus-visible:outline-none"
  });
}
function SearchDialogClose({ children = "ESC", className, ...props }) {
  const { onOpenChange } = useSearch();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    ...props,
    className: twMerge("bg-fd-secondary/50 p-3 empty:hidden", props.className)
  });
}
function SearchDialogOverlay(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, {
    ...props,
    className: twMerge("fixed inset-0 z-50 backdrop-blur-xs bg-fd-overlay data-[state=open]:animate-fd-fade-in data-[state=closed]:animate-fd-fade-out", props.className)
  });
}
function SearchDialogContent({ children, ...props }) {
  const { text: text2 } = useI18n();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, {
    "aria-describedby": void 0,
    ...props,
    className: twMerge("fixed left-1/2 top-4 md:top-[calc(50%-250px)] z-50 w-[calc(100%-1rem)] max-w-screen-sm -translate-x-1/2 rounded-xl border bg-fd-popover text-fd-popover-foreground shadow-2xl shadow-black/50 overflow-hidden data-[state=closed]:animate-fd-dialog-out data-[state=open]:animate-fd-dialog-in", "*:border-b *:has-[+:last-child[data-empty=true]]:border-b-0 *:data-[empty=true]:border-b-0 *:last:border-b-0", props.className),
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, {
      className: "hidden",
      children: text2.search
    }), children]
  });
}
function SearchDialogList({ items = null, Empty = () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
  className: "py-12 text-center text-sm text-fd-muted-foreground",
  children: /* @__PURE__ */ jsxRuntimeExports.jsx(I18nLabel, { label: "searchNoResult" })
}), Item = (props2) => /* @__PURE__ */ jsxRuntimeExports.jsx(SearchDialogListItem, { ...props2 }), ...props }) {
  const ref = reactExports.useRef(null);
  const { onSelect } = useSearch();
  const [active, setActive] = reactExports.useState(() => items && items.length > 0 ? items[0].id : null);
  const onKey = reactExports.useEffectEvent((e2) => {
    if (!items || e2.isComposing) return;
    if (e2.key === "ArrowDown" || e2.key == "ArrowUp") {
      let idx = items.findIndex((item) => item.id === active);
      if (idx === -1) idx = 0;
      else if (e2.key === "ArrowDown") idx++;
      else idx--;
      setActive(items.at(idx % items.length)?.id ?? null);
      e2.preventDefault();
    }
    if (e2.key === "Enter") {
      const selected = items.find((item) => item.id === active);
      if (selected) onSelect(selected);
      e2.preventDefault();
    }
  });
  reactExports.useEffect(() => {
    const element2 = ref.current;
    if (!element2) return;
    const observer = new ResizeObserver(() => {
      const viewport2 = element2.firstElementChild;
      element2.style.setProperty("--fd-animated-height", `${viewport2.clientHeight}px`);
    });
    const viewport = element2.firstElementChild;
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    ...props,
    ref,
    "data-empty": items === null,
    className: twMerge("overflow-hidden h-(--fd-animated-height) transition-[height]", props.className),
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      className: twMerge("w-full flex flex-col overflow-y-auto max-h-[460px] p-1", !items && "hidden"),
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ListContext, {
        value: reactExports.useMemo(() => ({
          active,
          setActive
        }), [active]),
        children: [items?.length === 0 && Empty(), items?.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Fragment, { children: Item({
          item,
          onClick: () => onSelect(item)
        }) }, item.id))]
      })
    })
  });
}
function SearchDialogListItem({ item, className, children, renderMarkdown = (s2) => /* @__PURE__ */ jsxRuntimeExports.jsx(mdRenderer.Markdown, {
  components: mdComponents,
  children: s2
}), renderHighlights: _, ...props }) {
  const { active: activeId, setActive } = useSearchList();
  const active = item.id === activeId;
  if (item.type === "action") children ??= item.node;
  else children ??= /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      className: "inline-flex items-center text-fd-muted-foreground text-xs empty:hidden",
      children: item.breadcrumbs?.map((item2, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [i > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-4 rtl:rotate-180" }), item2] }, i))
    }),
    item.type !== "page" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      role: "none",
      className: "absolute start-3 inset-y-0 w-px bg-fd-border"
    }),
    item.type === "heading" && /* @__PURE__ */ jsxRuntimeExports.jsx(Hash, { className: "absolute start-6 top-2.5 size-4 text-fd-muted-foreground" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      className: twMerge("min-w-0", item.type === "text" && "ps-4", item.type === "heading" && "ps-8", item.type === "page" || item.type === "heading" ? "font-medium" : "text-fd-popover-foreground/80"),
      children: typeof item.content === "string" ? renderMarkdown(item.content) : item.content
    })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
    type: "button",
    ref: reactExports.useCallback((element2) => {
      if (active && element2) e(element2, {
        scrollMode: "if-needed",
        block: "nearest",
        boundary: element2.parentElement
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Search, {
    ...props,
    className: twMerge("size-5 text-fd-muted-foreground", isLoading && "animate-pulse duration-400", props.className)
  });
}
const itemVariants = cva("rounded-md border px-2 py-0.5 text-xs font-medium text-fd-muted-foreground transition-colors", { variants: { active: { true: "bg-fd-accent text-fd-accent-foreground" } } });
function TagsList({ tag, onTagChange, allowClear = false, ...props }) {
  const onTagChangeCallback = reactExports.useRef(onTagChange);
  onTagChangeCallback.current = onTagChange;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    ...props,
    className: twMerge("flex items-center gap-1 flex-wrap", props.className),
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(TagsListContext, {
      value: reactExports.useMemo(() => ({
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
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
  const ctx = reactExports.use(RootContext);
  if (!ctx) throw new Error("Missing <SearchDialog />");
  return ctx;
}
function useTagsList() {
  const ctx = reactExports.use(TagsListContext);
  if (!ctx) throw new Error("Missing <TagsList />");
  return ctx;
}
function useSearchList() {
  const ctx = reactExports.use(ListContext);
  if (!ctx) throw new Error("Missing <SearchDialogList />");
  return ctx;
}
function useDebounce(value, delayMs = 1e3) {
  const [debouncedValue, setDebouncedValue] = reactExports.useState(value);
  reactExports.useEffect(() => {
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
  const [search2, setSearch] = reactExports.useState("");
  const [results, setResults] = reactExports.useState("empty");
  const [error, setError] = reactExports.useState();
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const debouncedValue = useDebounce(search2, delayMs);
  const onStart = reactExports.useRef(void 0);
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
          const { searchDocs } = await import("./algolia-CfKKhsrI-B5V6bCLm.js");
          return searchDocs(debouncedValue, client);
        }
        case "orama-cloud": {
          const { searchDocs } = await import("./orama-cloud-cgTJNLo0-B9Lr-ZGC.js");
          return searchDocs(debouncedValue, client);
        }
        case "orama-cloud-legacy": {
          const { searchDocs } = await import("./orama-cloud-legacy-Caf8mcU9-BuYCtMyO.js");
          return searchDocs(debouncedValue, client);
        }
        case "mixedbread": {
          const { search: search3 } = await import("./mixedbread-TBJmV3co-DZXWiPap.js");
          return search3(debouncedValue, client);
        }
        case "static": {
          const { search: search3 } = await import("./static-BUXJwBmr-2X5RB0Td.js");
          return search3(debouncedValue, client);
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
    search: search2,
    setSearch,
    query: {
      isLoading,
      data: results,
      error
    }
  };
}
function DefaultSearchDialog({ defaultTag, tags = [], api, delayMs, type = "fetch", allowClear = false, links = [], footer: footer2, ...props }) {
  const { locale } = useI18n();
  const [tag, setTag] = reactExports.useState(defaultTag);
  const { search: search2, setSearch, query } = useDocsSearch(type === "fetch" ? {
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
  const defaultItems = reactExports.useMemo(() => {
    if (links.length === 0) return null;
    return links.map(([name2, link2]) => ({
      type: "page",
      id: name2,
      content: name2,
      url: link2
    }));
  }, [links]);
  useOnChange(defaultTag, (v) => {
    setTag(v);
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SearchDialog, {
    search: search2,
    onSearchChange: setSearch,
    isLoading: query.isLoading,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SearchDialogOverlay, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(SearchDialogContent, { children: [/* @__PURE__ */ jsxRuntimeExports.jsxs(SearchDialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SearchDialogIcon, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SearchDialogInput, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SearchDialogClose, {})
      ] }), /* @__PURE__ */ jsxRuntimeExports.jsx(SearchDialogList, { items: query.data !== "empty" ? query.data : defaultItems })] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(SearchDialogFooter, { children: [tags.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(TagsList, {
        tag,
        onTagChange: setTag,
        allowClear,
        children: tags.map((tag2) => /* @__PURE__ */ jsxRuntimeExports.jsx(TagsListItem, {
          value: tag2.value,
          children: tag2.name
        }, tag2.value))
      }), footer2] })
    ]
  });
}
const searchDefault = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: DefaultSearchDialog
}, Symbol.toStringTag, { value: "Module" }));
export {
  remark as r,
  searchDefault as s,
  visit as v
};
