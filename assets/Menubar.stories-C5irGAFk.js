import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as ne,r as n}from"./index-ZH-6pyQh.js";import{u as xe}from"./useMenuNavigation-Cake-z-f.js";import{P as re,a as ie,b as ce}from"./index-M94l2otH.js";import{c as b}from"./utils-_uLxnvdl.js";import{C as we}from"./chevron-right-DY5KYsnV.js";import{C as ve}from"./check-CKCh4cDT.js";import{c as x}from"./createLucideIcon-BXJdBs6C.js";import{F as de}from"./file-text-DaZIRBjV.js";import{F as Se}from"./file-C4Pb4pRw.js";import{F as he,S as ke,C as pe}from"./scissors-CJbfFEOV.js";import{S as be}from"./save-BSO9TH5m.js";import{X as ue}from"./x-ByohdK2B.js";import{C as ye}from"./copy-IW0OH-Me.js";import{E as fe,a as Fe}from"./eye-OFmA4JNg.js";import{S as Ne,M as je}from"./sun-Bn3huqpQ.js";import{M as Te}from"./monitor-B7QOqptH.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-lJNWladF.js";import"./index-C6BiGwLV.js";import"./index-Bo-loign.js";import"./index-BP-xEy0R.js";import"./index-DVyBTwwr.js";import"./Combination-C3reJy6-.js";import"./index-BH7Jj7fg.js";import"./variants-C8qliDOr.js";/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Me=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Re=x("circle",Me);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}]],A=x("file-code",Ee);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}]],Ae=x("panel-left",Oe);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const We=[["path",{d:"M21 7v6h-6",key:"3ptur4"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7",key:"1kgawr"}]],me=x("redo",We);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pe=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],Ce=x("terminal",Pe);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=[["path",{d:"m16 16-3 3 3 3",key:"117b85"}],["path",{d:"M3 12h14.5a1 1 0 0 1 0 7H13",key:"18xa6z"}],["path",{d:"M3 19h6",key:"1ygdsz"}],["path",{d:"M3 5h18",key:"1u36vt"}]],_e=x("text-wrap",Ve);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ie=[["path",{d:"M3 7v6h6",key:"1v2h90"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13",key:"1r6uu6"}]],ge=x("undo",Ie),P="menubar_item relative flex items-center gap-2 px-3 py-1.5 text-sm cursor-pointer transition-colors last:rounded-b-sm first:rounded-t-sm",W=ne.memo(({items:o,classNames:t,onItemClick:s,onClose:u})=>{const[i,d]=n.useState(null),h=n.useMemo(()=>o.some(l=>!l.separator&&l.type!=="label"&&(l.icon||l.type==="checkbox"||l.type==="radio")),[o]),p=n.useMemo(()=>o.map((l,a)=>!l.separator&&l.type!=="label"&&!l.disabled?a:-1).filter(l=>l!==-1),[o]),w=n.useCallback(l=>{const a=o[l];!a||a.children&&a.children.length>0||s(a)},[o,s]),{highlightedIndex:O,handleKeyDown:y,highlightFirst:S}=xe({enabledIndices:p,isOpen:!0,onClose:u,onSelect:w});return n.useEffect(()=>{S()},[S]),n.useEffect(()=>{const l=a=>{y(a),a.stopImmediatePropagation()};return document.addEventListener("keydown",l),()=>document.removeEventListener("keydown",l)},[y]),e.jsx(e.Fragment,{children:o.map((l,a)=>{if(l.separator)return e.jsx("div",{"data-slot":"separator",className:b("menubar_separator h-px bg-border my-1 -mx-1",t==null?void 0:t.separator),role:"separator"},l.key||`separator-${a}`);if(l.type==="label")return e.jsx("div",{"data-slot":"label",className:b("menubar_label px-3 py-1.5 text-xs font-semibold text-text-secondary mx-1",t==null?void 0:t.label),role:"presentation",children:l.label},l.key);const c=l.type==="checkbox"||l.type==="radio",m=l.children&&l.children.length>0,v=O===a;return m?e.jsxs(re,{open:i===l.key,onOpenChange:r=>d(r?l.key:null),children:[e.jsx(ie,{asChild:!0,children:e.jsxs("div",{"data-slot":"item",className:b(P,l.disabled?"opacity-50 cursor-not-allowed":"hover:bg-surface focus-visible:bg-surface focus-visible:outline-none",v&&!l.disabled&&"bg-surface",t==null?void 0:t.item),role:"menuitem","aria-disabled":l.disabled,"aria-haspopup":"menu",tabIndex:l.disabled?-1:0,onMouseEnter:()=>!l.disabled&&d(l.key),children:[l.icon?e.jsx("span",{className:"w-4 h-4 shrink-0",children:l.icon}):h&&e.jsx("span",{className:"w-4 h-4 shrink-0"}),e.jsx("span",{className:"flex-1",children:l.label}),e.jsx(we,{className:"w-4 h-4 ml-2 shrink-0"})]})}),e.jsx(ce,{side:"right",align:"start","data-slot":"submenu",className:b("menubar_submenu min-w-[200px] w-auto p-1 rounded-md",t==null?void 0:t.submenu),onOpenAutoFocus:r=>r.preventDefault(),onCloseAutoFocus:r=>r.preventDefault(),children:e.jsx(W,{items:l.children,classNames:t,onItemClick:s,onClose:u})})]},l.key):e.jsxs("div",{"data-slot":"item",className:b(P,l.disabled?"opacity-50 cursor-not-allowed":"hover:bg-surface focus-visible:bg-surface focus-visible:outline-none",v&&!l.disabled&&"bg-surface",c&&(t==null?void 0:t.checkboxItem),l.type==="radio"&&(t==null?void 0:t.radioItem),t==null?void 0:t.item),role:l.type==="checkbox"?"menuitemcheckbox":l.type==="radio"?"menuitemradio":"menuitem","aria-disabled":l.disabled,"aria-checked":c?l.checked:void 0,tabIndex:l.disabled?-1:0,onClick:()=>!l.disabled&&s(l),children:[c&&e.jsx("span",{className:"w-4 h-4 shrink-0",children:l.checked&&e.jsxs(e.Fragment,{children:[l.type==="checkbox"&&e.jsx(ve,{className:"w-4 h-4"}),l.type==="radio"&&e.jsx(Re,{className:"w-4 h-4 fill-current"})]})}),!c&&(l.icon?e.jsx("span",{className:"w-4 h-4 shrink-0",children:l.icon}):h&&e.jsx("span",{className:"w-4 h-4 shrink-0"})),e.jsx("span",{className:"flex-1",children:l.label}),l.shortcut&&e.jsx("span",{"data-slot":"shortcut",className:b("menubar_shortcut text-xs text-text-secondary ml-auto",t==null?void 0:t.shortcut),children:l.shortcut})]},l.key)})})});W.displayName="MenuItems";const k=ne.memo(({menus:o,className:t,classNames:s,ref:u})=>{const[i,d]=n.useState(null),[h,p]=n.useState(!1),w=n.useCallback((l,a)=>{a||(d(c=>c===l?null:l),p(!0))},[]),O=n.useCallback((l,a)=>{a||h&&i!==null&&d(l)},[h,i]),y=n.useCallback(()=>{d(null),p(!1)},[]),S=n.useCallback(l=>{var a,c,m;l.type==="checkbox"?(a=l.onCheckedChange)==null||a.call(l,!l.checked):l.type==="radio"?(c=l.onCheckedChange)==null||c.call(l,!0):(m=l.onClick)==null||m.call(l),l.type!=="checkbox"&&l.type!=="radio"&&y()},[y]);return n.useEffect(()=>{if(!i)return;const l=a=>{var m,v;const c=o.findIndex(r=>r.key===i);if(a.key==="ArrowRight"){a.preventDefault(),a.stopImmediatePropagation();let r=(c+1)%o.length,C=0;for(;C<o.length&&((m=o[r])!=null&&m.disabled);)r=(r+1)%o.length,C++;const g=o[r];C<o.length&&g&&!g.disabled&&d(g.key)}else if(a.key==="ArrowLeft"){a.preventDefault(),a.stopImmediatePropagation();let r=c-1<0?o.length-1:c-1,C=0;for(;C<o.length&&((v=o[r])!=null&&v.disabled);)r=r-1<0?o.length-1:r-1,C++;const g=o[r];C<o.length&&g&&!g.disabled&&d(g.key)}};return document.addEventListener("keydown",l),()=>document.removeEventListener("keydown",l)},[i,o]),e.jsx("div",{ref:u,"data-slot":"root",className:b("menubar_root flex items-center gap-1 px-2 py-1 bg-background border-b border-border",t,s==null?void 0:s.root),role:"menubar",children:o.map(l=>e.jsxs(re,{open:i===l.key,onOpenChange:a=>{a?(d(l.key),p(!0)):y()},children:[e.jsx(ie,{asChild:!0,children:e.jsx("button",{"data-slot":"trigger",className:b("menubar_trigger px-3 py-1.5 text-sm rounded-sm transition-colors",l.disabled?"opacity-50 cursor-not-allowed":"hover:bg-surface focus-visible:bg-surface focus-visible:outline-none",i===l.key&&"bg-surface",s==null?void 0:s.trigger),role:"menuitem","aria-haspopup":"menu","aria-expanded":i===l.key,"aria-disabled":l.disabled,onClick:()=>w(l.key,l.disabled),onMouseEnter:()=>O(l.key,l.disabled),children:l.label})}),e.jsx(ce,{side:"bottom",align:"start",sideOffset:4,"data-slot":"content",className:b("menubar_content min-w-[200px] w-auto p-1 rounded-md",s==null?void 0:s.content),onOpenAutoFocus:a=>a.preventDefault(),onCloseAutoFocus:a=>a.preventDefault(),onPointerDownOutside:a=>{a.target.closest('[data-slot="root"]')&&a.preventDefault()},children:e.jsx(W,{items:l.items,classNames:s,onItemClick:S,onClose:y})})]},l.key))})});k.displayName="Menubar";k.__docgenInfo={description:"",methods:[],displayName:"Menubar"};const hl={title:"Navigation/Menubar",component:k,tags:["autodocs"],argTypes:{menus:{description:"Array of menus with their items"},className:{description:"Custom className for the menubar root"},classNames:{description:"Custom classNames for specific parts of the menubar"}}},f={render:()=>{const o=[{key:"file",label:"File",items:[{key:"new",label:"New File",onClick:()=>console.log("New File")},{key:"open",label:"Open...",onClick:()=>console.log("Open")},{key:"save",label:"Save",onClick:()=>console.log("Save")},{key:"save-as",label:"Save As...",onClick:()=>console.log("Save As")},{key:"sep1",label:"",separator:!0},{key:"exit",label:"Exit",onClick:()=>console.log("Exit")}]},{key:"edit",label:"Edit",items:[{key:"undo",label:"Undo",onClick:()=>console.log("Undo")},{key:"redo",label:"Redo",onClick:()=>console.log("Redo")},{key:"sep1",label:"",separator:!0},{key:"cut",label:"Cut",onClick:()=>console.log("Cut")},{key:"copy",label:"Copy",onClick:()=>console.log("Copy")},{key:"paste",label:"Paste",onClick:()=>console.log("Paste")}]},{key:"view",label:"View",items:[{key:"toggle-sidebar",label:"Toggle Sidebar",onClick:()=>console.log("Toggle Sidebar")},{key:"toggle-terminal",label:"Toggle Terminal",onClick:()=>console.log("Toggle Terminal")}]}];return e.jsxs("div",{children:[e.jsx(k,{menus:o}),e.jsx("div",{className:"p-8 text-sm text-text-secondary",children:"Click on any menu to see the items. This is a classic application menubar like VS Code or macOS apps."})]})}},F={render:()=>{const o=[{key:"file",label:"File",items:[{key:"new",label:"New File",shortcut:"Ctrl+N",onClick:()=>console.log("New File")},{key:"open",label:"Open...",shortcut:"Ctrl+O",onClick:()=>console.log("Open")},{key:"save",label:"Save",shortcut:"Ctrl+S",onClick:()=>console.log("Save")},{key:"save-as",label:"Save As...",shortcut:"Ctrl+Shift+S",onClick:()=>console.log("Save As")},{key:"sep1",label:"",separator:!0},{key:"exit",label:"Exit",shortcut:"Alt+F4",onClick:()=>console.log("Exit")}]},{key:"edit",label:"Edit",items:[{key:"undo",label:"Undo",shortcut:"Ctrl+Z",onClick:()=>console.log("Undo")},{key:"redo",label:"Redo",shortcut:"Ctrl+Y",onClick:()=>console.log("Redo")},{key:"sep1",label:"",separator:!0},{key:"cut",label:"Cut",shortcut:"Ctrl+X",onClick:()=>console.log("Cut")},{key:"copy",label:"Copy",shortcut:"Ctrl+C",onClick:()=>console.log("Copy")},{key:"paste",label:"Paste",shortcut:"Ctrl+V",onClick:()=>console.log("Paste")}]},{key:"view",label:"View",items:[{key:"toggle-sidebar",label:"Toggle Sidebar",shortcut:"Ctrl+B",onClick:()=>console.log("Toggle Sidebar")},{key:"toggle-terminal",label:"Toggle Terminal",shortcut:"Ctrl+`",onClick:()=>console.log("Toggle Terminal")}]}];return e.jsxs("div",{children:[e.jsx(k,{menus:o}),e.jsx("div",{className:"p-8 text-sm text-text-secondary",children:"Notice the keyboard shortcuts displayed on the right side of each menu item."})]})}},N={render:()=>{const[o,t]=n.useState(!0),[s,u]=n.useState(!0),[i,d]=n.useState(!1),h=[{key:"view",label:"View",items:[{key:"show-sidebar",label:"Show Sidebar",type:"checkbox",checked:o,onCheckedChange:t},{key:"show-status-bar",label:"Show Status Bar",type:"checkbox",checked:s,onCheckedChange:u},{key:"word-wrap",label:"Word Wrap",type:"checkbox",checked:i,onCheckedChange:d}]}];return e.jsxs("div",{children:[e.jsx(k,{menus:h}),e.jsxs("div",{className:"p-8 space-y-2 text-sm",children:[e.jsx("p",{className:"font-medium",children:"Current Settings:"}),e.jsxs("p",{className:"text-text-secondary",children:["Sidebar: ",o?"Visible":"Hidden"]}),e.jsxs("p",{className:"text-text-secondary",children:["Status Bar: ",s?"Visible":"Hidden"]}),e.jsxs("p",{className:"text-text-secondary",children:["Word Wrap: ",i?"Enabled":"Disabled"]})]})]})}},j={render:()=>{const[o,t]=n.useState("system"),s=[{key:"view",label:"View",items:[{key:"theme-label",label:"Theme",type:"label"},{key:"theme-light",label:"Light",type:"radio",checked:o==="light",onCheckedChange:()=>t("light")},{key:"theme-dark",label:"Dark",type:"radio",checked:o==="dark",onCheckedChange:()=>t("dark")},{key:"theme-system",label:"System",type:"radio",checked:o==="system",onCheckedChange:()=>t("system")}]}];return e.jsxs("div",{children:[e.jsx(k,{menus:s}),e.jsxs("div",{className:"p-8 text-sm",children:[e.jsx("p",{className:"font-medium",children:"Current Theme:"}),e.jsx("p",{className:"text-text-secondary capitalize",children:o})]})]})}},T={render:()=>{const o=[{key:"file",label:"File",items:[{key:"new",label:"New File",shortcut:"Ctrl+N",onClick:()=>console.log("New File")},{key:"open-recent",label:"Open Recent",children:[{key:"file1",label:"project-1.tsx",onClick:()=>console.log("Open file1")},{key:"file2",label:"project-2.tsx",onClick:()=>console.log("Open file2")},{key:"file3",label:"project-3.tsx",onClick:()=>console.log("Open file3")},{key:"sep1",label:"",separator:!0},{key:"clear",label:"Clear Recent Files",onClick:()=>console.log("Clear")}]},{key:"sep1",label:"",separator:!0},{key:"save",label:"Save",shortcut:"Ctrl+S",onClick:()=>console.log("Save")},{key:"exit",label:"Exit",onClick:()=>console.log("Exit")}]},{key:"edit",label:"Edit",items:[{key:"find",label:"Find",children:[{key:"find-file",label:"Find in Files",shortcut:"Ctrl+Shift+F",onClick:()=>console.log("Find in Files")},{key:"find-next",label:"Find Next",shortcut:"F3",onClick:()=>console.log("Find Next")},{key:"find-prev",label:"Find Previous",shortcut:"Shift+F3",onClick:()=>console.log("Find Previous")}]},{key:"replace",label:"Replace",children:[{key:"replace-file",label:"Replace in Files",shortcut:"Ctrl+H",onClick:()=>console.log("Replace in Files")},{key:"replace-next",label:"Replace Next",onClick:()=>console.log("Replace Next")}]}]}];return e.jsxs("div",{children:[e.jsx(k,{menus:o}),e.jsx("div",{className:"p-8 text-sm text-text-secondary",children:"Hover over items with arrows to see submenus. Nested menu support for complex navigation."})]})}},M={render:()=>{const o=[{key:"file",label:"File",items:[{key:"new",label:"New File",onClick:()=>console.log("New File")},{key:"open",label:"Open...",onClick:()=>console.log("Open")},{key:"save",label:"Save",disabled:!0,onClick:()=>console.log("Save")},{key:"save-as",label:"Save As...",disabled:!0,onClick:()=>console.log("Save As")}]},{key:"edit",label:"Edit",disabled:!0,items:[{key:"undo",label:"Undo",onClick:()=>console.log("Undo")},{key:"redo",label:"Redo",onClick:()=>console.log("Redo")}]},{key:"view",label:"View",items:[{key:"toggle-sidebar",label:"Toggle Sidebar",onClick:()=>console.log("Toggle Sidebar")}]}];return e.jsxs("div",{children:[e.jsx(k,{menus:o}),e.jsx("div",{className:"p-8 text-sm text-text-secondary",children:"The Edit menu is completely disabled. Save and Save As items are disabled in the File menu."})]})}},R={render:()=>{const o=[{key:"file",label:"File",items:[{key:"new",label:"New File",icon:e.jsx(de,{className:"w-4 h-4"}),shortcut:"Ctrl+N",onClick:()=>console.log("New File")},{key:"open",label:"Open...",icon:e.jsx(he,{className:"w-4 h-4"}),shortcut:"Ctrl+O",onClick:()=>console.log("Open")},{key:"save",label:"Save",icon:e.jsx(be,{className:"w-4 h-4"}),shortcut:"Ctrl+S",onClick:()=>console.log("Save")},{key:"sep1",label:"",separator:!0},{key:"exit",label:"Exit",icon:e.jsx(ue,{className:"w-4 h-4"}),shortcut:"Alt+F4",onClick:()=>console.log("Exit")}]},{key:"edit",label:"Edit",items:[{key:"undo",label:"Undo",icon:e.jsx(ge,{className:"w-4 h-4"}),shortcut:"Ctrl+Z",onClick:()=>console.log("Undo")},{key:"redo",label:"Redo",icon:e.jsx(me,{className:"w-4 h-4"}),shortcut:"Ctrl+Y",onClick:()=>console.log("Redo")},{key:"sep1",label:"",separator:!0},{key:"cut",label:"Cut",icon:e.jsx(ke,{className:"w-4 h-4"}),shortcut:"Ctrl+X",onClick:()=>console.log("Cut")},{key:"copy",label:"Copy",icon:e.jsx(ye,{className:"w-4 h-4"}),shortcut:"Ctrl+C",onClick:()=>console.log("Copy")},{key:"paste",label:"Paste",icon:e.jsx(pe,{className:"w-4 h-4"}),shortcut:"Ctrl+V",onClick:()=>console.log("Paste")}]},{key:"view",label:"View",items:[{key:"toggle-sidebar",label:"Toggle Sidebar",icon:e.jsx(Ae,{className:"w-4 h-4"}),shortcut:"Ctrl+B",onClick:()=>console.log("Toggle Sidebar")},{key:"toggle-terminal",label:"Toggle Terminal",icon:e.jsx(Ce,{className:"w-4 h-4"}),shortcut:"Ctrl+`",onClick:()=>console.log("Toggle Terminal")}]}];return e.jsxs("div",{children:[e.jsx(k,{menus:o}),e.jsx("div",{className:"p-8 text-sm text-text-secondary",children:"All menu items include lucide-react icons for better visual recognition."})]})}},E={render:()=>{const[o,t]=n.useState(!0),[s,u]=n.useState(!1),[i,d]=n.useState(!1),[h,p]=n.useState("dark"),w=[{key:"file",label:"File",items:[{key:"new",label:"New File",icon:e.jsx(de,{className:"w-4 h-4"}),shortcut:"Ctrl+N",onClick:()=>console.log("New File")},{key:"new-from-template",label:"New from Template",icon:e.jsx(Se,{className:"w-4 h-4"}),children:[{key:"react",label:"React Component",icon:e.jsx(A,{className:"w-4 h-4"}),onClick:()=>console.log("React Component")},{key:"html",label:"HTML File",icon:e.jsx(A,{className:"w-4 h-4"}),onClick:()=>console.log("HTML File")},{key:"css",label:"CSS File",icon:e.jsx(A,{className:"w-4 h-4"}),onClick:()=>console.log("CSS File")}]},{key:"open",label:"Open File...",icon:e.jsx(he,{className:"w-4 h-4"}),shortcut:"Ctrl+O",onClick:()=>console.log("Open")},{key:"open-recent",label:"Open Recent",children:[{key:"file1",label:"Button.tsx",onClick:()=>console.log("Open Button.tsx")},{key:"file2",label:"Input.tsx",onClick:()=>console.log("Open Input.tsx")},{key:"file3",label:"Modal.tsx",onClick:()=>console.log("Open Modal.tsx")},{key:"sep1",label:"",separator:!0},{key:"clear",label:"Clear Recent Files",onClick:()=>console.log("Clear")}]},{key:"sep1",label:"",separator:!0},{key:"save",label:"Save",icon:e.jsx(be,{className:"w-4 h-4"}),shortcut:"Ctrl+S",onClick:()=>console.log("Save")},{key:"save-as",label:"Save As...",shortcut:"Ctrl+Shift+S",onClick:()=>console.log("Save As")},{key:"sep2",label:"",separator:!0},{key:"exit",label:"Exit",icon:e.jsx(ue,{className:"w-4 h-4"}),shortcut:"Alt+F4",onClick:()=>console.log("Exit")}]},{key:"edit",label:"Edit",items:[{key:"undo",label:"Undo",icon:e.jsx(ge,{className:"w-4 h-4"}),shortcut:"Ctrl+Z",onClick:()=>console.log("Undo")},{key:"redo",label:"Redo",icon:e.jsx(me,{className:"w-4 h-4"}),shortcut:"Ctrl+Y",onClick:()=>console.log("Redo")},{key:"sep1",label:"",separator:!0},{key:"cut",label:"Cut",icon:e.jsx(ke,{className:"w-4 h-4"}),shortcut:"Ctrl+X",onClick:()=>console.log("Cut")},{key:"copy",label:"Copy",icon:e.jsx(ye,{className:"w-4 h-4"}),shortcut:"Ctrl+C",onClick:()=>console.log("Copy")},{key:"paste",label:"Paste",icon:e.jsx(pe,{className:"w-4 h-4"}),shortcut:"Ctrl+V",onClick:()=>console.log("Paste")},{key:"sep2",label:"",separator:!0},{key:"find",label:"Find",children:[{key:"find-file",label:"Find in Files",shortcut:"Ctrl+Shift+F",onClick:()=>console.log("Find in Files")},{key:"find-next",label:"Find Next",shortcut:"F3",onClick:()=>console.log("Find Next")},{key:"find-prev",label:"Find Previous",shortcut:"Shift+F3",onClick:()=>console.log("Find Previous")}]},{key:"replace",label:"Replace",children:[{key:"replace-file",label:"Replace in Files",shortcut:"Ctrl+H",onClick:()=>console.log("Replace in Files")},{key:"replace-all",label:"Replace All",onClick:()=>console.log("Replace All")}]}]},{key:"view",label:"View",items:[{key:"appearance",label:"Appearance",type:"label"},{key:"show-sidebar",label:"Show Sidebar",icon:o?e.jsx(fe,{className:"w-4 h-4"}):e.jsx(Fe,{className:"w-4 h-4"}),type:"checkbox",checked:o,onCheckedChange:t,shortcut:"Ctrl+B"},{key:"show-minimap",label:"Show Minimap",type:"checkbox",checked:s,onCheckedChange:u},{key:"sep1",label:"",separator:!0},{key:"editor",label:"Editor",type:"label"},{key:"word-wrap",label:"Word Wrap",icon:e.jsx(_e,{className:"w-4 h-4"}),type:"checkbox",checked:i,onCheckedChange:d,shortcut:"Alt+Z"},{key:"sep2",label:"",separator:!0},{key:"theme-label",label:"Theme",type:"label"},{key:"theme-light",label:"Light",icon:e.jsx(Ne,{className:"w-4 h-4"}),type:"radio",checked:h==="light",onCheckedChange:()=>p("light")},{key:"theme-dark",label:"Dark",icon:e.jsx(je,{className:"w-4 h-4"}),type:"radio",checked:h==="dark",onCheckedChange:()=>p("dark")},{key:"theme-system",label:"System",icon:e.jsx(Te,{className:"w-4 h-4"}),type:"radio",checked:h==="system",onCheckedChange:()=>p("system")},{key:"sep3",label:"",separator:!0},{key:"toggle-terminal",label:"Toggle Terminal",icon:e.jsx(Ce,{className:"w-4 h-4"}),shortcut:"Ctrl+`",onClick:()=>console.log("Toggle Terminal")}]}];return e.jsxs("div",{children:[e.jsx(k,{menus:w}),e.jsxs("div",{className:"p-8 border-t border-border bg-surface/30 min-h-[300px]",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Code Editor Simulation"}),e.jsx("p",{className:"text-sm text-text-secondary mb-4",children:"Complete menubar for a code editor with all interactive features."})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 text-sm",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-medium mb-2",children:"View Settings:"}),e.jsxs("ul",{className:"space-y-1 text-text-secondary",children:[e.jsxs("li",{children:["Sidebar: ",o?"Visible":"Hidden"]}),e.jsxs("li",{children:["Minimap: ",s?"Visible":"Hidden"]}),e.jsxs("li",{children:["Word Wrap: ",i?"Enabled":"Disabled"]})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium mb-2",children:"Appearance:"}),e.jsx("ul",{className:"space-y-1 text-text-secondary",children:e.jsxs("li",{children:["Theme: ",h.charAt(0).toUpperCase()+h.slice(1)]})})]})]})]})]})}};var V,_,I;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const menus: MenubarMenu[] = [{
      key: 'file',
      label: 'File',
      items: [{
        key: 'new',
        label: 'New File',
        onClick: () => console.log('New File')
      }, {
        key: 'open',
        label: 'Open...',
        onClick: () => console.log('Open')
      }, {
        key: 'save',
        label: 'Save',
        onClick: () => console.log('Save')
      }, {
        key: 'save-as',
        label: 'Save As...',
        onClick: () => console.log('Save As')
      }, {
        key: 'sep1',
        label: '',
        separator: true
      }, {
        key: 'exit',
        label: 'Exit',
        onClick: () => console.log('Exit')
      }]
    }, {
      key: 'edit',
      label: 'Edit',
      items: [{
        key: 'undo',
        label: 'Undo',
        onClick: () => console.log('Undo')
      }, {
        key: 'redo',
        label: 'Redo',
        onClick: () => console.log('Redo')
      }, {
        key: 'sep1',
        label: '',
        separator: true
      }, {
        key: 'cut',
        label: 'Cut',
        onClick: () => console.log('Cut')
      }, {
        key: 'copy',
        label: 'Copy',
        onClick: () => console.log('Copy')
      }, {
        key: 'paste',
        label: 'Paste',
        onClick: () => console.log('Paste')
      }]
    }, {
      key: 'view',
      label: 'View',
      items: [{
        key: 'toggle-sidebar',
        label: 'Toggle Sidebar',
        onClick: () => console.log('Toggle Sidebar')
      }, {
        key: 'toggle-terminal',
        label: 'Toggle Terminal',
        onClick: () => console.log('Toggle Terminal')
      }]
    }];
    return <div>
        <Menubar menus={menus} />
        <div className="p-8 text-sm text-text-secondary">
          Click on any menu to see the items. This is a classic application menubar like VS Code or macOS apps.
        </div>
      </div>;
  }
}`,...(I=(_=f.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var U,B,D;F.parameters={...F.parameters,docs:{...(U=F.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const menus: MenubarMenu[] = [{
      key: 'file',
      label: 'File',
      items: [{
        key: 'new',
        label: 'New File',
        shortcut: 'Ctrl+N',
        onClick: () => console.log('New File')
      }, {
        key: 'open',
        label: 'Open...',
        shortcut: 'Ctrl+O',
        onClick: () => console.log('Open')
      }, {
        key: 'save',
        label: 'Save',
        shortcut: 'Ctrl+S',
        onClick: () => console.log('Save')
      }, {
        key: 'save-as',
        label: 'Save As...',
        shortcut: 'Ctrl+Shift+S',
        onClick: () => console.log('Save As')
      }, {
        key: 'sep1',
        label: '',
        separator: true
      }, {
        key: 'exit',
        label: 'Exit',
        shortcut: 'Alt+F4',
        onClick: () => console.log('Exit')
      }]
    }, {
      key: 'edit',
      label: 'Edit',
      items: [{
        key: 'undo',
        label: 'Undo',
        shortcut: 'Ctrl+Z',
        onClick: () => console.log('Undo')
      }, {
        key: 'redo',
        label: 'Redo',
        shortcut: 'Ctrl+Y',
        onClick: () => console.log('Redo')
      }, {
        key: 'sep1',
        label: '',
        separator: true
      }, {
        key: 'cut',
        label: 'Cut',
        shortcut: 'Ctrl+X',
        onClick: () => console.log('Cut')
      }, {
        key: 'copy',
        label: 'Copy',
        shortcut: 'Ctrl+C',
        onClick: () => console.log('Copy')
      }, {
        key: 'paste',
        label: 'Paste',
        shortcut: 'Ctrl+V',
        onClick: () => console.log('Paste')
      }]
    }, {
      key: 'view',
      label: 'View',
      items: [{
        key: 'toggle-sidebar',
        label: 'Toggle Sidebar',
        shortcut: 'Ctrl+B',
        onClick: () => console.log('Toggle Sidebar')
      }, {
        key: 'toggle-terminal',
        label: 'Toggle Terminal',
        shortcut: 'Ctrl+\`',
        onClick: () => console.log('Toggle Terminal')
      }]
    }];
    return <div>
        <Menubar menus={menus} />
        <div className="p-8 text-sm text-text-secondary">
          Notice the keyboard shortcuts displayed on the right side of each menu item.
        </div>
      </div>;
  }
}`,...(D=(B=F.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var H,L,X;N.parameters={...N.parameters,docs:{...(H=N.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const [showSidebar, setShowSidebar] = useState(true);
    const [showStatusBar, setShowStatusBar] = useState(true);
    const [wordWrap, setWordWrap] = useState(false);
    const menus: MenubarMenu[] = [{
      key: 'view',
      label: 'View',
      items: [{
        key: 'show-sidebar',
        label: 'Show Sidebar',
        type: 'checkbox',
        checked: showSidebar,
        onCheckedChange: setShowSidebar
      }, {
        key: 'show-status-bar',
        label: 'Show Status Bar',
        type: 'checkbox',
        checked: showStatusBar,
        onCheckedChange: setShowStatusBar
      }, {
        key: 'word-wrap',
        label: 'Word Wrap',
        type: 'checkbox',
        checked: wordWrap,
        onCheckedChange: setWordWrap
      }]
    }];
    return <div>
        <Menubar menus={menus} />
        <div className="p-8 space-y-2 text-sm">
          <p className="font-medium">Current Settings:</p>
          <p className="text-text-secondary">Sidebar: {showSidebar ? 'Visible' : 'Hidden'}</p>
          <p className="text-text-secondary">Status Bar: {showStatusBar ? 'Visible' : 'Hidden'}</p>
          <p className="text-text-secondary">Word Wrap: {wordWrap ? 'Enabled' : 'Disabled'}</p>
        </div>
      </div>;
  }
}`,...(X=(L=N.parameters)==null?void 0:L.docs)==null?void 0:X.source}}};var Z,$,z;j.parameters={...j.parameters,docs:{...(Z=j.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');
    const menus: MenubarMenu[] = [{
      key: 'view',
      label: 'View',
      items: [{
        key: 'theme-label',
        label: 'Theme',
        type: 'label'
      }, {
        key: 'theme-light',
        label: 'Light',
        type: 'radio',
        checked: theme === 'light',
        onCheckedChange: () => setTheme('light')
      }, {
        key: 'theme-dark',
        label: 'Dark',
        type: 'radio',
        checked: theme === 'dark',
        onCheckedChange: () => setTheme('dark')
      }, {
        key: 'theme-system',
        label: 'System',
        type: 'radio',
        checked: theme === 'system',
        onCheckedChange: () => setTheme('system')
      }]
    }];
    return <div>
        <Menubar menus={menus} />
        <div className="p-8 text-sm">
          <p className="font-medium">Current Theme:</p>
          <p className="text-text-secondary capitalize">{theme}</p>
        </div>
      </div>;
  }
}`,...(z=($=j.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var Y,q,G;T.parameters={...T.parameters,docs:{...(Y=T.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    const menus: MenubarMenu[] = [{
      key: 'file',
      label: 'File',
      items: [{
        key: 'new',
        label: 'New File',
        shortcut: 'Ctrl+N',
        onClick: () => console.log('New File')
      }, {
        key: 'open-recent',
        label: 'Open Recent',
        children: [{
          key: 'file1',
          label: 'project-1.tsx',
          onClick: () => console.log('Open file1')
        }, {
          key: 'file2',
          label: 'project-2.tsx',
          onClick: () => console.log('Open file2')
        }, {
          key: 'file3',
          label: 'project-3.tsx',
          onClick: () => console.log('Open file3')
        }, {
          key: 'sep1',
          label: '',
          separator: true
        }, {
          key: 'clear',
          label: 'Clear Recent Files',
          onClick: () => console.log('Clear')
        }]
      }, {
        key: 'sep1',
        label: '',
        separator: true
      }, {
        key: 'save',
        label: 'Save',
        shortcut: 'Ctrl+S',
        onClick: () => console.log('Save')
      }, {
        key: 'exit',
        label: 'Exit',
        onClick: () => console.log('Exit')
      }]
    }, {
      key: 'edit',
      label: 'Edit',
      items: [{
        key: 'find',
        label: 'Find',
        children: [{
          key: 'find-file',
          label: 'Find in Files',
          shortcut: 'Ctrl+Shift+F',
          onClick: () => console.log('Find in Files')
        }, {
          key: 'find-next',
          label: 'Find Next',
          shortcut: 'F3',
          onClick: () => console.log('Find Next')
        }, {
          key: 'find-prev',
          label: 'Find Previous',
          shortcut: 'Shift+F3',
          onClick: () => console.log('Find Previous')
        }]
      }, {
        key: 'replace',
        label: 'Replace',
        children: [{
          key: 'replace-file',
          label: 'Replace in Files',
          shortcut: 'Ctrl+H',
          onClick: () => console.log('Replace in Files')
        }, {
          key: 'replace-next',
          label: 'Replace Next',
          onClick: () => console.log('Replace Next')
        }]
      }]
    }];
    return <div>
        <Menubar menus={menus} />
        <div className="p-8 text-sm text-text-secondary">
          Hover over items with arrows to see submenus. Nested menu support for complex navigation.
        </div>
      </div>;
  }
}`,...(G=(q=T.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,K,Q;M.parameters={...M.parameters,docs:{...(J=M.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const menus: MenubarMenu[] = [{
      key: 'file',
      label: 'File',
      items: [{
        key: 'new',
        label: 'New File',
        onClick: () => console.log('New File')
      }, {
        key: 'open',
        label: 'Open...',
        onClick: () => console.log('Open')
      }, {
        key: 'save',
        label: 'Save',
        disabled: true,
        onClick: () => console.log('Save')
      }, {
        key: 'save-as',
        label: 'Save As...',
        disabled: true,
        onClick: () => console.log('Save As')
      }]
    }, {
      key: 'edit',
      label: 'Edit',
      disabled: true,
      items: [{
        key: 'undo',
        label: 'Undo',
        onClick: () => console.log('Undo')
      }, {
        key: 'redo',
        label: 'Redo',
        onClick: () => console.log('Redo')
      }]
    }, {
      key: 'view',
      label: 'View',
      items: [{
        key: 'toggle-sidebar',
        label: 'Toggle Sidebar',
        onClick: () => console.log('Toggle Sidebar')
      }]
    }];
    return <div>
        <Menubar menus={menus} />
        <div className="p-8 text-sm text-text-secondary">
          The Edit menu is completely disabled. Save and Save As items are disabled in the File menu.
        </div>
      </div>;
  }
}`,...(Q=(K=M.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var ee,le,oe;R.parameters={...R.parameters,docs:{...(ee=R.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => {
    const menus: MenubarMenu[] = [{
      key: 'file',
      label: 'File',
      items: [{
        key: 'new',
        label: 'New File',
        icon: <FileText className="w-4 h-4" />,
        shortcut: 'Ctrl+N',
        onClick: () => console.log('New File')
      }, {
        key: 'open',
        label: 'Open...',
        icon: <FolderOpen className="w-4 h-4" />,
        shortcut: 'Ctrl+O',
        onClick: () => console.log('Open')
      }, {
        key: 'save',
        label: 'Save',
        icon: <Save className="w-4 h-4" />,
        shortcut: 'Ctrl+S',
        onClick: () => console.log('Save')
      }, {
        key: 'sep1',
        label: '',
        separator: true
      }, {
        key: 'exit',
        label: 'Exit',
        icon: <X className="w-4 h-4" />,
        shortcut: 'Alt+F4',
        onClick: () => console.log('Exit')
      }]
    }, {
      key: 'edit',
      label: 'Edit',
      items: [{
        key: 'undo',
        label: 'Undo',
        icon: <Undo className="w-4 h-4" />,
        shortcut: 'Ctrl+Z',
        onClick: () => console.log('Undo')
      }, {
        key: 'redo',
        label: 'Redo',
        icon: <Redo className="w-4 h-4" />,
        shortcut: 'Ctrl+Y',
        onClick: () => console.log('Redo')
      }, {
        key: 'sep1',
        label: '',
        separator: true
      }, {
        key: 'cut',
        label: 'Cut',
        icon: <Scissors className="w-4 h-4" />,
        shortcut: 'Ctrl+X',
        onClick: () => console.log('Cut')
      }, {
        key: 'copy',
        label: 'Copy',
        icon: <Copy className="w-4 h-4" />,
        shortcut: 'Ctrl+C',
        onClick: () => console.log('Copy')
      }, {
        key: 'paste',
        label: 'Paste',
        icon: <ClipboardPaste className="w-4 h-4" />,
        shortcut: 'Ctrl+V',
        onClick: () => console.log('Paste')
      }]
    }, {
      key: 'view',
      label: 'View',
      items: [{
        key: 'toggle-sidebar',
        label: 'Toggle Sidebar',
        icon: <Sidebar className="w-4 h-4" />,
        shortcut: 'Ctrl+B',
        onClick: () => console.log('Toggle Sidebar')
      }, {
        key: 'toggle-terminal',
        label: 'Toggle Terminal',
        icon: <Terminal className="w-4 h-4" />,
        shortcut: 'Ctrl+\`',
        onClick: () => console.log('Toggle Terminal')
      }]
    }];
    return <div>
        <Menubar menus={menus} />
        <div className="p-8 text-sm text-text-secondary">
          All menu items include lucide-react icons for better visual recognition.
        </div>
      </div>;
  }
}`,...(oe=(le=R.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var te,ae,se;E.parameters={...E.parameters,docs:{...(te=E.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => {
    const [showSidebar, setShowSidebar] = useState(true);
    const [showMinimap, setShowMinimap] = useState(false);
    const [wordWrap, setWordWrap] = useState(false);
    const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('dark');
    const menus: MenubarMenu[] = [{
      key: 'file',
      label: 'File',
      items: [{
        key: 'new',
        label: 'New File',
        icon: <FileText className="w-4 h-4" />,
        shortcut: 'Ctrl+N',
        onClick: () => console.log('New File')
      }, {
        key: 'new-from-template',
        label: 'New from Template',
        icon: <File className="w-4 h-4" />,
        children: [{
          key: 'react',
          label: 'React Component',
          icon: <FileCode className="w-4 h-4" />,
          onClick: () => console.log('React Component')
        }, {
          key: 'html',
          label: 'HTML File',
          icon: <FileCode className="w-4 h-4" />,
          onClick: () => console.log('HTML File')
        }, {
          key: 'css',
          label: 'CSS File',
          icon: <FileCode className="w-4 h-4" />,
          onClick: () => console.log('CSS File')
        }]
      }, {
        key: 'open',
        label: 'Open File...',
        icon: <FolderOpen className="w-4 h-4" />,
        shortcut: 'Ctrl+O',
        onClick: () => console.log('Open')
      }, {
        key: 'open-recent',
        label: 'Open Recent',
        children: [{
          key: 'file1',
          label: 'Button.tsx',
          onClick: () => console.log('Open Button.tsx')
        }, {
          key: 'file2',
          label: 'Input.tsx',
          onClick: () => console.log('Open Input.tsx')
        }, {
          key: 'file3',
          label: 'Modal.tsx',
          onClick: () => console.log('Open Modal.tsx')
        }, {
          key: 'sep1',
          label: '',
          separator: true
        }, {
          key: 'clear',
          label: 'Clear Recent Files',
          onClick: () => console.log('Clear')
        }]
      }, {
        key: 'sep1',
        label: '',
        separator: true
      }, {
        key: 'save',
        label: 'Save',
        icon: <Save className="w-4 h-4" />,
        shortcut: 'Ctrl+S',
        onClick: () => console.log('Save')
      }, {
        key: 'save-as',
        label: 'Save As...',
        shortcut: 'Ctrl+Shift+S',
        onClick: () => console.log('Save As')
      }, {
        key: 'sep2',
        label: '',
        separator: true
      }, {
        key: 'exit',
        label: 'Exit',
        icon: <X className="w-4 h-4" />,
        shortcut: 'Alt+F4',
        onClick: () => console.log('Exit')
      }]
    }, {
      key: 'edit',
      label: 'Edit',
      items: [{
        key: 'undo',
        label: 'Undo',
        icon: <Undo className="w-4 h-4" />,
        shortcut: 'Ctrl+Z',
        onClick: () => console.log('Undo')
      }, {
        key: 'redo',
        label: 'Redo',
        icon: <Redo className="w-4 h-4" />,
        shortcut: 'Ctrl+Y',
        onClick: () => console.log('Redo')
      }, {
        key: 'sep1',
        label: '',
        separator: true
      }, {
        key: 'cut',
        label: 'Cut',
        icon: <Scissors className="w-4 h-4" />,
        shortcut: 'Ctrl+X',
        onClick: () => console.log('Cut')
      }, {
        key: 'copy',
        label: 'Copy',
        icon: <Copy className="w-4 h-4" />,
        shortcut: 'Ctrl+C',
        onClick: () => console.log('Copy')
      }, {
        key: 'paste',
        label: 'Paste',
        icon: <ClipboardPaste className="w-4 h-4" />,
        shortcut: 'Ctrl+V',
        onClick: () => console.log('Paste')
      }, {
        key: 'sep2',
        label: '',
        separator: true
      }, {
        key: 'find',
        label: 'Find',
        children: [{
          key: 'find-file',
          label: 'Find in Files',
          shortcut: 'Ctrl+Shift+F',
          onClick: () => console.log('Find in Files')
        }, {
          key: 'find-next',
          label: 'Find Next',
          shortcut: 'F3',
          onClick: () => console.log('Find Next')
        }, {
          key: 'find-prev',
          label: 'Find Previous',
          shortcut: 'Shift+F3',
          onClick: () => console.log('Find Previous')
        }]
      }, {
        key: 'replace',
        label: 'Replace',
        children: [{
          key: 'replace-file',
          label: 'Replace in Files',
          shortcut: 'Ctrl+H',
          onClick: () => console.log('Replace in Files')
        }, {
          key: 'replace-all',
          label: 'Replace All',
          onClick: () => console.log('Replace All')
        }]
      }]
    }, {
      key: 'view',
      label: 'View',
      items: [{
        key: 'appearance',
        label: 'Appearance',
        type: 'label'
      }, {
        key: 'show-sidebar',
        label: 'Show Sidebar',
        icon: showSidebar ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />,
        type: 'checkbox',
        checked: showSidebar,
        onCheckedChange: setShowSidebar,
        shortcut: 'Ctrl+B'
      }, {
        key: 'show-minimap',
        label: 'Show Minimap',
        type: 'checkbox',
        checked: showMinimap,
        onCheckedChange: setShowMinimap
      }, {
        key: 'sep1',
        label: '',
        separator: true
      }, {
        key: 'editor',
        label: 'Editor',
        type: 'label'
      }, {
        key: 'word-wrap',
        label: 'Word Wrap',
        icon: <WrapText className="w-4 h-4" />,
        type: 'checkbox',
        checked: wordWrap,
        onCheckedChange: setWordWrap,
        shortcut: 'Alt+Z'
      }, {
        key: 'sep2',
        label: '',
        separator: true
      }, {
        key: 'theme-label',
        label: 'Theme',
        type: 'label'
      }, {
        key: 'theme-light',
        label: 'Light',
        icon: <Sun className="w-4 h-4" />,
        type: 'radio',
        checked: theme === 'light',
        onCheckedChange: () => setTheme('light')
      }, {
        key: 'theme-dark',
        label: 'Dark',
        icon: <Moon className="w-4 h-4" />,
        type: 'radio',
        checked: theme === 'dark',
        onCheckedChange: () => setTheme('dark')
      }, {
        key: 'theme-system',
        label: 'System',
        icon: <Monitor className="w-4 h-4" />,
        type: 'radio',
        checked: theme === 'system',
        onCheckedChange: () => setTheme('system')
      }, {
        key: 'sep3',
        label: '',
        separator: true
      }, {
        key: 'toggle-terminal',
        label: 'Toggle Terminal',
        icon: <Terminal className="w-4 h-4" />,
        shortcut: 'Ctrl+\`',
        onClick: () => console.log('Toggle Terminal')
      }]
    }];
    return <div>
        <Menubar menus={menus} />
        <div className="p-8 border-t border-border bg-surface/30 min-h-[300px]">
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Code Editor Simulation</h3>
            <p className="text-sm text-text-secondary mb-4">
              Complete menubar for a code editor with all interactive features.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-medium mb-2">View Settings:</p>
              <ul className="space-y-1 text-text-secondary">
                <li>Sidebar: {showSidebar ? 'Visible' : 'Hidden'}</li>
                <li>Minimap: {showMinimap ? 'Visible' : 'Hidden'}</li>
                <li>Word Wrap: {wordWrap ? 'Enabled' : 'Disabled'}</li>
              </ul>
            </div>
            <div>
              <p className="font-medium mb-2">Appearance:</p>
              <ul className="space-y-1 text-text-secondary">
                <li>Theme: {theme.charAt(0).toUpperCase() + theme.slice(1)}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>;
  }
}`,...(se=(ae=E.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};const kl=["Default","WithShortcuts","WithCheckboxItems","WithRadioItems","WithSubmenus","DisabledMenus","WithIcons","CodeEditorMenubar"];export{E as CodeEditorMenubar,f as Default,M as DisabledMenus,N as WithCheckboxItems,R as WithIcons,j as WithRadioItems,F as WithShortcuts,T as WithSubmenus,kl as __namedExportsOrder,hl as default};
