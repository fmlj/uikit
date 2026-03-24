import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as Ne,A as Oe,P as Se,C as Me,T as Re}from"./index-lJNWladF.js";import{R as Ee,r as i}from"./index-ZH-6pyQh.js";import{u as Pe,R as Fe}from"./useRipple-BuuTbn0W.js";import{u as Le}from"./useMenuNavigation-Cake-z-f.js";import{c as u}from"./utils-_uLxnvdl.js";import{c as Ae}from"./variants-C8qliDOr.js";import{C as qe}from"./chevron-right-DY5KYsnV.js";import{C as E}from"./copy-IW0OH-Me.js";import{S as A,C as P,F as q}from"./scissors-CJbfFEOV.js";import{T as j}from"./trash-2-vrMpzzku.js";import{c as _e}from"./createLucideIcon-BXJdBs6C.js";import{S as ze}from"./settings-D1wlBKo1.js";import{S as Ie}from"./share-2-JEmWnStU.js";import{S as Ve}from"./save-BSO9TH5m.js";import"./index-C6BiGwLV.js";import"./index-Bo-loign.js";import"./index-BP-xEy0R.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DVyBTwwr.js";import"./Combination-C3reJy6-.js";import"./index-BH7Jj7fg.js";/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xe=[["path",{d:"M12.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v9.34",key:"o6klzx"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10.378 12.622a1 1 0 0 1 3 3.003L8.36 20.637a2 2 0 0 1-.854.506l-2.867.837a.5.5 0 0 1-.62-.62l.836-2.869a2 2 0 0 1 .506-.853z",key:"zhnas1"}]],L=_e("file-pen",Xe),Te=({children:r,disabled:s,className:p,...o})=>{const{ripples:a,onPointerDown:d,onAnimationEnd:m}=Pe(!s);return e.jsxs("div",{className:u(p,"relative overflow-hidden"),onPointerDown:d,...o,children:[r,e.jsx(Fe,{ripples:a,onAnimationEnd:m})]})},De=({item:r,onClose:s,level:p,classNames:o,color:a="default",openDelay:d=200,closeDelay:m=300})=>{const[w,y]=i.useState(!1),h=i.useRef(void 0),b=i.useRef(void 0),v=i.useCallback(()=>{r.disabled||(b.current&&clearTimeout(b.current),h.current=setTimeout(()=>{y(!0)},d))},[r.disabled,d]),C=i.useCallback(()=>{h.current&&clearTimeout(h.current),b.current=setTimeout(()=>{y(!1)},m)},[m]),g=i.useCallback(k=>{var f;!r.disabled&&!r.children&&(k.stopPropagation(),(f=r.onClick)==null||f.call(r),s())},[r,s]);return i.useEffect(()=>()=>{h.current&&clearTimeout(h.current),b.current&&clearTimeout(b.current)},[]),e.jsxs(Ne,{open:w,onOpenChange:y,children:[e.jsx(Re,{asChild:!0,children:e.jsx("div",{className:"relative",onMouseEnter:v,onMouseLeave:C,role:"menuitem","aria-haspopup":"true","aria-expanded":w,"aria-disabled":r.disabled,tabIndex:-1,"data-slot":"submenu-trigger",children:e.jsxs(Te,{disabled:!!r.disabled,className:u("contextMenu_item flex items-center justify-between gap-3 px-3 py-2 text-sm cursor-pointer rounded-sm transition-colors mx-1",r.disabled?"opacity-50 cursor-not-allowed":"hover:bg-slot-10 hover:text-slot focus-visible:bg-slot-10 focus-visible:text-slot focus-visible:outline-none",o==null?void 0:o.item),onClick:g,children:[e.jsxs("div",{className:"flex items-center gap-2 flex-1",children:[r.icon&&e.jsx("span",{className:u("contextMenu_itemIcon shrink-0 w-4 h-4",o==null?void 0:o.itemIcon),children:r.icon}),e.jsx("span",{className:u("contextMenu_itemLabel",o==null?void 0:o.itemLabel),children:r.label})]}),r.children&&e.jsx(qe,{className:"w-4 h-4 text-text-secondary shrink-0"}),r.shortcut&&e.jsx("span",{className:"text-xs text-text-secondary shrink-0",children:r.shortcut})]})})}),r.children&&e.jsx(Se,{children:e.jsx(Me,{side:"right",align:"start",sideOffset:4,alignOffset:-4,onMouseEnter:v,onMouseLeave:C,className:u("data-[state=open]:animate-in data-[state=closed]:animate-out","data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0","data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95","data-[side=bottom]:slide-in-from-top-2","data-[side=left]:slide-in-from-right-2","data-[side=right]:slide-in-from-left-2","data-[side=top]:slide-in-from-bottom-2","z-(--z-popover)",o==null?void 0:o.submenu),children:e.jsx(F,{items:r.children,onClose:s,level:p+1,classNames:o,color:a})})})]})};De.displayName="ContextMenuSubMenu";const F=({items:r,onClose:s,level:p=0,className:o,classNames:a,style:d,color:m="default",submenuOpenDelay:w,submenuCloseDelay:y,...h})=>{const b=i.useRef(null),v=i.useMemo(()=>r.map((t,l)=>!t.separator&&!t.disabled?l:-1).filter(t=>t!==-1),[r]),C=i.useCallback(t=>{var x;const l=r[t];l&&!l.children&&((x=l.onClick)==null||x.call(l),s())},[r,s]),{highlightedIndex:g,handleKeyDown:k,highlightFirst:f}=Le({enabledIndices:v,isOpen:!0,onClose:s,onSelect:C});return i.useEffect(()=>{f()},[f]),i.useEffect(()=>{const t=l=>{if(l.key==="ArrowLeft"&&p>0){l.preventDefault(),l.stopImmediatePropagation(),s();return}k(l),l.stopImmediatePropagation()};return document.addEventListener("keydown",t),()=>document.removeEventListener("keydown",t)},[k,p,s]),e.jsx("div",{ref:b,className:u("contextMenu_content min-w-[180px] rounded-md border border-border bg-background shadow-lg py-1",Ae[m],p===0&&"animate-in fade-in-0 zoom-in-95",o,a==null?void 0:a.content),style:d,role:"menu","aria-orientation":"vertical",tabIndex:-1,...h,children:r.map((t,l)=>{if(t.separator)return e.jsx("div",{className:u("contextMenu_divider h-px bg-border my-1",a==null?void 0:a.divider),role:"separator","aria-orientation":"horizontal","data-slot":"separator"},`separator-${l}`);if(t.children)return e.jsx(De,{item:t,onClose:s,level:p,classNames:a,color:m,openDelay:w,closeDelay:y},t.key);const x=g===l;return e.jsxs(Te,{disabled:!!t.disabled,className:u("contextMenu_item flex items-center justify-between gap-3 px-3 py-2 text-sm cursor-pointer rounded-sm transition-colors mx-1",t.disabled?"opacity-50 cursor-not-allowed":"hover:bg-slot-10 hover:text-slot focus-visible:bg-slot-10 focus-visible:text-slot focus-visible:outline-none",x&&!t.disabled&&"bg-slot-10 text-slot",a==null?void 0:a.item),onClick:()=>{var n;t.disabled||((n=t.onClick)==null||n.call(t),s())},role:"menuitem",tabIndex:-1,"aria-disabled":t.disabled,"data-slot":"item",children:[e.jsxs("div",{className:"flex items-center gap-2 flex-1",children:[t.icon&&e.jsx("span",{className:u("contextMenu_itemIcon shrink-0 w-4 h-4",a==null?void 0:a.itemIcon),"data-slot":"item-icon",children:t.icon}),e.jsx("span",{className:u("contextMenu_itemLabel",a==null?void 0:a.itemLabel),"data-slot":"item-label",children:t.label})]}),t.shortcut&&e.jsx("span",{className:"text-xs text-text-secondary shrink-0","data-slot":"shortcut",children:t.shortcut})]},t.key)})})};F.displayName="ContextMenuContent";const c=Ee.memo(({children:r,items:s,className:p,classNames:o,disabled:a=!1,onOpenChange:d,open:m,color:w="default",submenuOpenDelay:y,submenuCloseDelay:h})=>{const[b,v]=i.useState(!1),[C,g]=i.useState(null),k=m!==void 0,f=k?m:b,t=i.useCallback(n=>{k||v(n),d==null||d(n)},[k,d]),l=i.useCallback(n=>{a||(n.preventDefault(),n.stopPropagation(),g({width:0,height:0,x:n.clientX,y:n.clientY,top:n.clientY,left:n.clientX,right:n.clientX,bottom:n.clientY,toJSON:()=>{}}),t(!0))},[a,t]),x=i.useCallback(()=>{t(!1),g(null)},[t]);return e.jsxs(Ne,{open:f,onOpenChange:t,children:[C&&e.jsx(Oe,{virtualRef:{current:{getBoundingClientRect:()=>C}}}),e.jsx("div",{onContextMenu:l,className:u("contextMenu_root inline-block",p,o==null?void 0:o.root),role:"presentation","data-slot":"root",children:r}),e.jsx(Se,{children:e.jsx(Me,{side:"bottom",align:"start",sideOffset:0,alignOffset:0,onOpenAutoFocus:n=>n.preventDefault(),onCloseAutoFocus:n=>n.preventDefault(),onEscapeKeyDown:x,onPointerDownOutside:x,onInteractOutside:x,className:"z-[var(--z-popover)]",children:e.jsx(F,{items:s,onClose:x,classNames:o,color:w,submenuOpenDelay:y,submenuCloseDelay:h})})})]})});c.displayName="ContextMenu";c.__docgenInfo={description:"ContextMenu component based on Popover",methods:[],displayName:"ContextMenu",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"ContextMenuItem"}],raw:"ContextMenuItem[]"},description:""},className:{required:!1,tsType:{name:"string"},description:""},classNames:{required:!1,tsType:{name:"ContextMenuClassNames"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},color:{required:!1,tsType:{name:"union",raw:`| 'default'
| 'primary'
| 'secondary'
| 'accent'
| 'success'
| 'error'
| 'warning'
| 'info'`,elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'accent'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"}]},description:"",defaultValue:{value:'"default"',computed:!1}},submenuOpenDelay:{required:!1,tsType:{name:"number"},description:"Delay (ms) before submenu opens on hover @default 200"},submenuCloseDelay:{required:!1,tsType:{name:"number"},description:"Delay (ms) before submenu closes on mouse leave @default 300"}}};F.__docgenInfo={description:"Context menu content component",methods:[],displayName:"ContextMenuContent",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"ContextMenuItem"}],raw:"ContextMenuItem[]"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},level:{required:!1,tsType:{name:"number"},description:"Nesting level (for styling)",defaultValue:{value:"0",computed:!1}},classNames:{required:!1,tsType:{name:"ContextMenuClassNames"},description:""},color:{required:!1,tsType:{name:"union",raw:`| 'default'
| 'primary'
| 'secondary'
| 'accent'
| 'success'
| 'error'
| 'warning'
| 'info'`,elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'accent'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"}]},description:"",defaultValue:{value:'"default"',computed:!1}},submenuOpenDelay:{required:!1,tsType:{name:"number"},description:"Delay (ms) before submenu opens on hover @default 200"},submenuCloseDelay:{required:!1,tsType:{name:"number"},description:"Delay (ms) before submenu closes on mouse leave @default 300"}}};const ut={title:"Navigation/ContextMenu",component:c,parameters:{layout:"centered"},tags:["autodocs"]},N={render:()=>e.jsx(c,{items:[{key:"copy",label:"Copy",icon:e.jsx(E,{className:"w-4 h-4"}),shortcut:"Ctrl+C",onClick:()=>alert("Copy clicked")},{key:"cut",label:"Cut",icon:e.jsx(A,{className:"w-4 h-4"}),shortcut:"Ctrl+X",onClick:()=>alert("Cut clicked")},{key:"paste",label:"Paste",icon:e.jsx(P,{className:"w-4 h-4"}),shortcut:"Ctrl+V",onClick:()=>alert("Paste clicked")},{key:"separator-1",separator:!0},{key:"delete",label:"Delete",icon:e.jsx(j,{className:"w-4 h-4"}),onClick:()=>alert("Delete clicked")}],children:e.jsx("div",{className:"w-[300px] h-[200px] flex items-center justify-center border-2 border-dashed border-border rounded-md bg-surface",children:e.jsx("p",{className:"text-text-secondary",children:"Right click here"})})})},S={render:()=>{const r=["default","primary","secondary","accent","success","error","warning","info"];return e.jsx("div",{className:"grid grid-cols-2 gap-4",children:r.map(s=>e.jsx(c,{color:s,items:[{key:"copy",label:"Copy",icon:e.jsx(E,{className:"w-4 h-4"}),shortcut:"Ctrl+C",onClick:()=>{}},{key:"cut",label:"Cut",icon:e.jsx(A,{className:"w-4 h-4"}),shortcut:"Ctrl+X",onClick:()=>{}},{key:"paste",label:"Paste",icon:e.jsx(P,{className:"w-4 h-4"}),shortcut:"Ctrl+V",onClick:()=>{}},{key:"separator-1",separator:!0},{key:"delete",label:"Delete",icon:e.jsx(j,{className:"w-4 h-4"}),onClick:()=>{}}],children:e.jsx("div",{className:"w-full h-[120px] flex items-center justify-center border-2 border-dashed border-border rounded-md bg-surface",children:e.jsxs("p",{className:"text-text-secondary text-sm capitalize",children:["Right click — ",s]})})},s))})}},M={render:()=>e.jsx(c,{items:[{key:"new",label:"New",icon:e.jsx(L,{className:"w-4 h-4"}),children:[{key:"new-file",label:"File",onClick:()=>alert("New File")},{key:"new-folder",label:"Folder",icon:e.jsx(q,{className:"w-4 h-4"}),onClick:()=>alert("New Folder")},{key:"separator-new",separator:!0},{key:"new-advanced",label:"Advanced",children:[{key:"new-component",label:"React Component",onClick:()=>alert("New React Component")},{key:"new-hook",label:"Custom Hook",onClick:()=>alert("New Custom Hook")}]}]},{key:"open",label:"Open",icon:e.jsx(q,{className:"w-4 h-4"}),onClick:()=>alert("Open clicked")},{key:"save",label:"Save",icon:e.jsx(Ve,{className:"w-4 h-4"}),shortcut:"Ctrl+S",onClick:()=>alert("Save clicked")},{key:"separator-1",separator:!0},{key:"share",label:"Share",icon:e.jsx(Ie,{className:"w-4 h-4"}),children:[{key:"share-email",label:"Email",onClick:()=>alert("Share via Email")},{key:"share-link",label:"Copy Link",onClick:()=>alert("Copy Link")},{key:"share-social",label:"Social Media",children:[{key:"share-facebook",label:"Facebook",onClick:()=>alert("Share to Facebook")},{key:"share-twitter",label:"Twitter",onClick:()=>alert("Share to Twitter")},{key:"share-linkedin",label:"LinkedIn",onClick:()=>alert("Share to LinkedIn")}]}]}],children:e.jsx("div",{className:"w-[300px] h-[200px] flex items-center justify-center border-2 border-dashed border-border rounded-md bg-surface",children:e.jsx("p",{className:"text-text-secondary",children:"Right click to see nested menus"})})})},I={render:()=>e.jsx(c,{items:[{key:"copy",label:"Copy",icon:e.jsx(E,{className:"w-4 h-4"}),shortcut:"Ctrl+C",onClick:()=>alert("Copy clicked")},{key:"cut",label:"Cut (Disabled)",icon:e.jsx(A,{className:"w-4 h-4"}),shortcut:"Ctrl+X",disabled:!0,onClick:()=>alert("This should not appear")},{key:"paste",label:"Paste (Disabled)",icon:e.jsx(P,{className:"w-4 h-4"}),shortcut:"Ctrl+V",disabled:!0,onClick:()=>alert("This should not appear")},{key:"separator-1",separator:!0},{key:"delete",label:"Delete",icon:e.jsx(j,{className:"w-4 h-4"}),onClick:()=>alert("Delete clicked")}],children:e.jsx("div",{className:"w-[300px] h-[200px] flex items-center justify-center border-2 border-dashed border-border rounded-md bg-surface",children:e.jsx("p",{className:"text-text-secondary",children:"Right click to see disabled items"})})})},T={render:()=>e.jsx(c,{items:[{key:"option1",label:"Option 1",onClick:()=>alert("Option 1")},{key:"option2",label:"Option 2",onClick:()=>alert("Option 2")},{key:"option3",label:"Option 3",onClick:()=>alert("Option 3")},{key:"separator-1",separator:!0},{key:"settings",label:"Settings",onClick:()=>alert("Settings")}],children:e.jsx("div",{className:"w-[300px] h-[200px] flex items-center justify-center border-2 border-dashed border-border rounded-md bg-surface",children:e.jsx("p",{className:"text-text-secondary",children:"Simple menu without icons"})})})},D={render:()=>e.jsx(c,{disabled:!0,items:[{key:"copy",label:"Copy",icon:e.jsx(E,{className:"w-4 h-4"}),onClick:()=>alert("Copy clicked")},{key:"paste",label:"Paste",icon:e.jsx(P,{className:"w-4 h-4"}),onClick:()=>alert("Paste clicked")}],children:e.jsx("div",{className:"w-[300px] h-[200px] flex items-center justify-center border-2 border-dashed border-border rounded-md bg-surface",children:e.jsx("p",{className:"text-text-secondary",children:"Context menu is disabled (right click won't work)"})})})},O={render:()=>e.jsx(c,{items:[{key:"copy",label:"Copy",icon:e.jsx(E,{className:"w-4 h-4"}),shortcut:"Ctrl+C",onClick:()=>{navigator.clipboard.writeText("Sample text to copy"),alert("Text copied to clipboard")}},{key:"separator-1",separator:!0},{key:"select-all",label:"Select All",shortcut:"Ctrl+A",onClick:()=>alert("Select All")}],children:e.jsxs("div",{className:"w-[400px] p-6 border border-border rounded-md bg-surface",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Sample Text"}),e.jsx("p",{className:"text-text-secondary",children:"Right-click on this text to see the context menu. You can copy, select all, or perform other text operations."})]})})},R={render:()=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx(c,{items:[{key:"edit",label:"Edit",icon:e.jsx(L,{className:"w-4 h-4"}),onClick:()=>alert("Edit Item 1")},{key:"delete",label:"Delete",icon:e.jsx(j,{className:"w-4 h-4"}),onClick:()=>alert("Delete Item 1")}],children:e.jsx("div",{className:"w-[150px] h-[150px] flex items-center justify-center border-2 border-dashed border-primary rounded-md bg-primary/5",children:e.jsx("p",{className:"text-primary font-semibold",children:"Item 1"})})}),e.jsx(c,{items:[{key:"edit",label:"Edit",icon:e.jsx(L,{className:"w-4 h-4"}),onClick:()=>alert("Edit Item 2")},{key:"settings",label:"Settings",icon:e.jsx(ze,{className:"w-4 h-4"}),onClick:()=>alert("Settings Item 2")},{key:"separator-1",separator:!0},{key:"delete",label:"Delete",icon:e.jsx(j,{className:"w-4 h-4"}),onClick:()=>alert("Delete Item 2")}],children:e.jsx("div",{className:"w-[150px] h-[150px] flex items-center justify-center border-2 border-dashed border-success rounded-md bg-success/5",children:e.jsx("p",{className:"text-success font-semibold",children:"Item 2"})})}),e.jsx(c,{items:[{key:"share",label:"Share",icon:e.jsx(Ie,{className:"w-4 h-4"}),onClick:()=>alert("Share Item 3")},{key:"delete",label:"Delete",icon:e.jsx(j,{className:"w-4 h-4"}),onClick:()=>alert("Delete Item 3")}],children:e.jsx("div",{className:"w-[150px] h-[150px] flex items-center justify-center border-2 border-dashed border-error rounded-md bg-error/5",children:e.jsx("p",{className:"text-error font-semibold",children:"Item 3"})})})]})};var _,z,V,X,H;N.parameters={...N.parameters,docs:{...(_=N.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <ContextMenu items={[{
    key: 'copy',
    label: 'Copy',
    icon: <Copy className="w-4 h-4" />,
    shortcut: 'Ctrl+C',
    onClick: () => alert('Copy clicked')
  }, {
    key: 'cut',
    label: 'Cut',
    icon: <Scissors className="w-4 h-4" />,
    shortcut: 'Ctrl+X',
    onClick: () => alert('Cut clicked')
  }, {
    key: 'paste',
    label: 'Paste',
    icon: <ClipboardPaste className="w-4 h-4" />,
    shortcut: 'Ctrl+V',
    onClick: () => alert('Paste clicked')
  }, {
    key: 'separator-1',
    separator: true
  }, {
    key: 'delete',
    label: 'Delete',
    icon: <Trash2 className="w-4 h-4" />,
    onClick: () => alert('Delete clicked')
  }]}>
      <div className="w-[300px] h-[200px] flex items-center justify-center border-2 border-dashed border-border rounded-md bg-surface">
        <p className="text-text-secondary">Right click here</p>
      </div>
    </ContextMenu>
}`,...(V=(z=N.parameters)==null?void 0:z.docs)==null?void 0:V.source},description:{story:"Basic example of a context menu with icons and keyboard shortcuts",...(H=(X=N.parameters)==null?void 0:X.docs)==null?void 0:H.description}}};var W,Y,B,K,J;S.parameters={...S.parameters,docs:{...(W=S.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const colors = ['default', 'primary', 'secondary', 'accent', 'success', 'error', 'warning', 'info'] as const;
    return <div className="grid grid-cols-2 gap-4">
        {colors.map(color => <ContextMenu key={color} color={color} items={[{
        key: 'copy',
        label: 'Copy',
        icon: <Copy className="w-4 h-4" />,
        shortcut: 'Ctrl+C',
        onClick: () => {}
      }, {
        key: 'cut',
        label: 'Cut',
        icon: <Scissors className="w-4 h-4" />,
        shortcut: 'Ctrl+X',
        onClick: () => {}
      }, {
        key: 'paste',
        label: 'Paste',
        icon: <ClipboardPaste className="w-4 h-4" />,
        shortcut: 'Ctrl+V',
        onClick: () => {}
      }, {
        key: 'separator-1',
        separator: true
      }, {
        key: 'delete',
        label: 'Delete',
        icon: <Trash2 className="w-4 h-4" />,
        onClick: () => {}
      }]}>
            <div className="w-full h-[120px] flex items-center justify-center border-2 border-dashed border-border rounded-md bg-surface">
              <p className="text-text-secondary text-sm capitalize">Right click — {color}</p>
            </div>
          </ContextMenu>)}
      </div>;
  }
}`,...(B=(Y=S.parameters)==null?void 0:Y.docs)==null?void 0:B.source},description:{story:"All 8 color variants available for the context menu",...(J=(K=S.parameters)==null?void 0:K.docs)==null?void 0:J.description}}};var $,G,Q,U,Z;M.parameters={...M.parameters,docs:{...($=M.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <ContextMenu items={[{
    key: 'new',
    label: 'New',
    icon: <FileEdit className="w-4 h-4" />,
    children: [{
      key: 'new-file',
      label: 'File',
      onClick: () => alert('New File')
    }, {
      key: 'new-folder',
      label: 'Folder',
      icon: <FolderOpen className="w-4 h-4" />,
      onClick: () => alert('New Folder')
    }, {
      key: 'separator-new',
      separator: true
    }, {
      key: 'new-advanced',
      label: 'Advanced',
      children: [{
        key: 'new-component',
        label: 'React Component',
        onClick: () => alert('New React Component')
      }, {
        key: 'new-hook',
        label: 'Custom Hook',
        onClick: () => alert('New Custom Hook')
      }]
    }]
  }, {
    key: 'open',
    label: 'Open',
    icon: <FolderOpen className="w-4 h-4" />,
    onClick: () => alert('Open clicked')
  }, {
    key: 'save',
    label: 'Save',
    icon: <Save className="w-4 h-4" />,
    shortcut: 'Ctrl+S',
    onClick: () => alert('Save clicked')
  }, {
    key: 'separator-1',
    separator: true
  }, {
    key: 'share',
    label: 'Share',
    icon: <Share2 className="w-4 h-4" />,
    children: [{
      key: 'share-email',
      label: 'Email',
      onClick: () => alert('Share via Email')
    }, {
      key: 'share-link',
      label: 'Copy Link',
      onClick: () => alert('Copy Link')
    }, {
      key: 'share-social',
      label: 'Social Media',
      children: [{
        key: 'share-facebook',
        label: 'Facebook',
        onClick: () => alert('Share to Facebook')
      }, {
        key: 'share-twitter',
        label: 'Twitter',
        onClick: () => alert('Share to Twitter')
      }, {
        key: 'share-linkedin',
        label: 'LinkedIn',
        onClick: () => alert('Share to LinkedIn')
      }]
    }]
  }]}>
      <div className="w-[300px] h-[200px] flex items-center justify-center border-2 border-dashed border-border rounded-md bg-surface">
        <p className="text-text-secondary">Right click to see nested menus</p>
      </div>
    </ContextMenu>
}`,...(Q=(G=M.parameters)==null?void 0:G.docs)==null?void 0:Q.source},description:{story:"Context menu with nested submenus",...(Z=(U=M.parameters)==null?void 0:U.docs)==null?void 0:Z.description}}};var ee,te,re,ae,oe;I.parameters={...I.parameters,docs:{...(ee=I.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <ContextMenu items={[{
    key: 'copy',
    label: 'Copy',
    icon: <Copy className="w-4 h-4" />,
    shortcut: 'Ctrl+C',
    onClick: () => alert('Copy clicked')
  }, {
    key: 'cut',
    label: 'Cut (Disabled)',
    icon: <Scissors className="w-4 h-4" />,
    shortcut: 'Ctrl+X',
    disabled: true,
    onClick: () => alert('This should not appear')
  }, {
    key: 'paste',
    label: 'Paste (Disabled)',
    icon: <ClipboardPaste className="w-4 h-4" />,
    shortcut: 'Ctrl+V',
    disabled: true,
    onClick: () => alert('This should not appear')
  }, {
    key: 'separator-1',
    separator: true
  }, {
    key: 'delete',
    label: 'Delete',
    icon: <Trash2 className="w-4 h-4" />,
    onClick: () => alert('Delete clicked')
  }]}>
      <div className="w-[300px] h-[200px] flex items-center justify-center border-2 border-dashed border-border rounded-md bg-surface">
        <p className="text-text-secondary">
          Right click to see disabled items
        </p>
      </div>
    </ContextMenu>
}`,...(re=(te=I.parameters)==null?void 0:te.docs)==null?void 0:re.source},description:{story:"Context menu with disabled items",...(oe=(ae=I.parameters)==null?void 0:ae.docs)==null?void 0:oe.description}}};var se,le,ne,ie,ce;T.parameters={...T.parameters,docs:{...(se=T.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <ContextMenu items={[{
    key: 'option1',
    label: 'Option 1',
    onClick: () => alert('Option 1')
  }, {
    key: 'option2',
    label: 'Option 2',
    onClick: () => alert('Option 2')
  }, {
    key: 'option3',
    label: 'Option 3',
    onClick: () => alert('Option 3')
  }, {
    key: 'separator-1',
    separator: true
  }, {
    key: 'settings',
    label: 'Settings',
    onClick: () => alert('Settings')
  }]}>
      <div className="w-[300px] h-[200px] flex items-center justify-center border-2 border-dashed border-border rounded-md bg-surface">
        <p className="text-text-secondary">Simple menu without icons</p>
      </div>
    </ContextMenu>
}`,...(ne=(le=T.parameters)==null?void 0:le.docs)==null?void 0:ne.source},description:{story:"Context menu without icons",...(ce=(ie=T.parameters)==null?void 0:ie.docs)==null?void 0:ce.description}}};var de,ue,pe,me,he;D.parameters={...D.parameters,docs:{...(de=D.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => <ContextMenu disabled={true} items={[{
    key: 'copy',
    label: 'Copy',
    icon: <Copy className="w-4 h-4" />,
    onClick: () => alert('Copy clicked')
  }, {
    key: 'paste',
    label: 'Paste',
    icon: <ClipboardPaste className="w-4 h-4" />,
    onClick: () => alert('Paste clicked')
  }]}>
      <div className="w-[300px] h-[200px] flex items-center justify-center border-2 border-dashed border-border rounded-md bg-surface">
        <p className="text-text-secondary">
          Context menu is disabled (right click won&apos;t work)
        </p>
      </div>
    </ContextMenu>
}`,...(pe=(ue=D.parameters)==null?void 0:ue.docs)==null?void 0:pe.source},description:{story:"Disabled context menu",...(he=(me=D.parameters)==null?void 0:me.docs)==null?void 0:he.description}}};var be,xe,ke,ye,Ce;O.parameters={...O.parameters,docs:{...(be=O.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => <ContextMenu items={[{
    key: 'copy',
    label: 'Copy',
    icon: <Copy className="w-4 h-4" />,
    shortcut: 'Ctrl+C',
    onClick: () => {
      navigator.clipboard.writeText('Sample text to copy');
      alert('Text copied to clipboard');
    }
  }, {
    key: 'separator-1',
    separator: true
  }, {
    key: 'select-all',
    label: 'Select All',
    shortcut: 'Ctrl+A',
    onClick: () => alert('Select All')
  }]}>
      <div className="w-[400px] p-6 border border-border rounded-md bg-surface">
        <h3 className="text-lg font-semibold mb-2">Sample Text</h3>
        <p className="text-text-secondary">
          Right-click on this text to see the context menu. You can copy, select
          all, or perform other text operations.
        </p>
      </div>
    </ContextMenu>
}`,...(ke=(xe=O.parameters)==null?void 0:xe.docs)==null?void 0:ke.source},description:{story:"Context menu on text",...(Ce=(ye=O.parameters)==null?void 0:ye.docs)==null?void 0:Ce.description}}};var fe,we,ve,ge,je;R.parameters={...R.parameters,docs:{...(fe=R.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
      <ContextMenu items={[{
      key: 'edit',
      label: 'Edit',
      icon: <FileEdit className="w-4 h-4" />,
      onClick: () => alert('Edit Item 1')
    }, {
      key: 'delete',
      label: 'Delete',
      icon: <Trash2 className="w-4 h-4" />,
      onClick: () => alert('Delete Item 1')
    }]}>
        <div className="w-[150px] h-[150px] flex items-center justify-center border-2 border-dashed border-primary rounded-md bg-primary/5">
          <p className="text-primary font-semibold">Item 1</p>
        </div>
      </ContextMenu>

      <ContextMenu items={[{
      key: 'edit',
      label: 'Edit',
      icon: <FileEdit className="w-4 h-4" />,
      onClick: () => alert('Edit Item 2')
    }, {
      key: 'settings',
      label: 'Settings',
      icon: <Settings className="w-4 h-4" />,
      onClick: () => alert('Settings Item 2')
    }, {
      key: 'separator-1',
      separator: true
    }, {
      key: 'delete',
      label: 'Delete',
      icon: <Trash2 className="w-4 h-4" />,
      onClick: () => alert('Delete Item 2')
    }]}>
        <div className="w-[150px] h-[150px] flex items-center justify-center border-2 border-dashed border-success rounded-md bg-success/5">
          <p className="text-success font-semibold">Item 2</p>
        </div>
      </ContextMenu>

      <ContextMenu items={[{
      key: 'share',
      label: 'Share',
      icon: <Share2 className="w-4 h-4" />,
      onClick: () => alert('Share Item 3')
    }, {
      key: 'delete',
      label: 'Delete',
      icon: <Trash2 className="w-4 h-4" />,
      onClick: () => alert('Delete Item 3')
    }]}>
        <div className="w-[150px] h-[150px] flex items-center justify-center border-2 border-dashed border-error rounded-md bg-error/5">
          <p className="text-error font-semibold">Item 3</p>
        </div>
      </ContextMenu>
    </div>
}`,...(ve=(we=R.parameters)==null?void 0:we.docs)==null?void 0:ve.source},description:{story:"Multiple items with context menu",...(je=(ge=R.parameters)==null?void 0:ge.docs)==null?void 0:je.description}}};const pt=["Default","ColorVariants","WithNestedMenu","WithDisabledItems","WithoutIcons","Disabled","OnText","MultipleItems"];export{S as ColorVariants,N as Default,D as Disabled,R as MultipleItems,O as OnText,I as WithDisabledItems,M as WithNestedMenu,T as WithoutIcons,pt as __namedExportsOrder,ut as default};
