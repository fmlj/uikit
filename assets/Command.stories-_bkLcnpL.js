import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as F,i as Na,a as G}from"./utils-_uLxnvdl.js";import{R as ba,P as Ia,O as wa,a as ka}from"./index-DITbyant.js";import{r as s}from"./index-ZH-6pyQh.js";import"./index-BP-xEy0R.js";import{c as Ea}from"./index-ZW2Bszwo.js";import{a as B}from"./index-C6BiGwLV.js";import{c as J}from"./index-Bo-loign.js";import{c as Va}from"./variants-C8qliDOr.js";import{a as Fa,c as _a,d as Ma,e as Ta,b as za}from"./index-CGmHETr0.js";import{S as le}from"./search-DfqimKq8.js";import{C as ke}from"./calendar-DcUEuZqF.js";import{U as ie}from"./user-BM8Midap.js";import{S as X}from"./settings-D1wlBKo1.js";import{S as Ga}from"./square-pen-BpIz_lVT.js";import{C as qe}from"./copy-IW0OH-Me.js";import{F as K}from"./file-text-DaZIRBjV.js";import{D as be}from"./download-DHgBCDXU.js";import{U as pa}from"./upload-CmkD6Ht7.js";import{F as Ee}from"./folder-CemrozX2.js";import{S as Ra}from"./star-CXKHNDnr.js";import{c as ha}from"./createLucideIcon-BXJdBs6C.js";import{H as Ve}from"./house-DCjPrFcn.js";import{M as La}from"./mail-1HDD9Lg3.js";import{B as Aa}from"./bell-BD3KA5A_.js";import{S as qa}from"./share-BYSDQbS3.js";import"./Combination-C3reJy6-.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DVyBTwwr.js";import"./x-ByohdK2B.js";/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pa=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],Ua=ha("message-square",Pa);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Da=[["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Oa=ha("trash",Da);var Pe=1,Ha=.9,$a=.8,Ba=.17,Se=.1,ye=.999,Ka=.9999,Wa=.99,Qa=/[\\\/_+.#"@\[\(\{&]/,Ja=/[\\\/_+.#"@\[\(\{&]/g,Xa=/[\s-]/,xa=/[\s-]/g;function Ie(n,t,a,m,o,d,i){if(d===t.length)return o===n.length?Pe:Wa;var h=`${o},${d}`;if(i[h]!==void 0)return i[h];for(var S=m.charAt(d),u=a.indexOf(S,o),f=0,v,E,I,R;u>=0;)v=Ie(n,t,a,m,u+1,d+1,i),v>f&&(u===o?v*=Pe:Qa.test(n.charAt(u-1))?(v*=$a,I=n.slice(o,u-1).match(Ja),I&&o>0&&(v*=Math.pow(ye,I.length))):Xa.test(n.charAt(u-1))?(v*=Ha,R=n.slice(o,u-1).match(xa),R&&o>0&&(v*=Math.pow(ye,R.length))):(v*=Ba,o>0&&(v*=Math.pow(ye,u-o))),n.charAt(u)!==t.charAt(d)&&(v*=Ka)),(v<Se&&a.charAt(u-1)===m.charAt(d+1)||m.charAt(d+1)===m.charAt(d)&&a.charAt(u-1)!==m.charAt(d))&&(E=Ie(n,t,a,m,u+1,d+2,i),E*Se>v&&(v=E*Se)),v>f&&(f=v),u=a.indexOf(S,u+1);return i[h]=f,f}function Ue(n){return n.toLowerCase().replace(xa," ")}function Ya(n,t,a){return n=a&&a.length>0?`${n+" "+a.join(" ")}`:n,Ie(n,t,Ue(n),Ue(t),0,0,{})}var Za=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],A=Za.reduce((n,t)=>{const a=Ea(`Primitive.${t}`),m=s.forwardRef((o,d)=>{const{asChild:i,...h}=o,S=i?a:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),e.jsx(S,{...h,ref:d})});return m.displayName=`Primitive.${t}`,{...n,[t]:m}},{}),Q='[cmdk-group=""]',Ne='[cmdk-group-items=""]',en='[cmdk-group-heading=""]',Ca='[cmdk-item=""]',De=`${Ca}:not([aria-disabled="true"])`,we="cmdk-item-select",H="data-value",an=(n,t,a)=>Ya(n,t,a),fa=s.createContext(void 0),Y=()=>s.useContext(fa),ga=s.createContext(void 0),Fe=()=>s.useContext(ga),va=s.createContext(void 0),ja=s.forwardRef((n,t)=>{let a=$(()=>{var r,p;return{search:"",value:(p=(r=n.value)!=null?r:n.defaultValue)!=null?p:"",selectedItemId:void 0,filtered:{count:0,items:new Map,groups:new Set}}}),m=$(()=>new Set),o=$(()=>new Map),d=$(()=>new Map),i=$(()=>new Set),h=Sa(n),{label:S,children:u,value:f,onValueChange:v,filter:E,shouldFilter:I,loop:R,disablePointerSelection:ue=!1,vimBindings:q=!0,...Z}=n,pe=B(),Me=B(),he=B(),P=s.useRef(null),y=pn();U(()=>{if(f!==void 0){let r=f.trim();a.current.value=r,w.emit()}},[f]),U(()=>{y(6,ze)},[]);let w=s.useMemo(()=>({subscribe:r=>(i.current.add(r),()=>i.current.delete(r)),snapshot:()=>a.current,setState:(r,p,x)=>{var l,C,j,k;if(!Object.is(a.current[r],p)){if(a.current[r]=p,r==="search")ge(),Ce(),y(1,fe);else if(r==="value"){if(document.activeElement.hasAttribute("cmdk-input")||document.activeElement.hasAttribute("cmdk-root")){let b=document.getElementById(he);b?b.focus():(l=document.getElementById(pe))==null||l.focus()}if(y(7,()=>{var b;a.current.selectedItemId=(b=O())==null?void 0:b.id,w.emit()}),x||y(5,ze),((C=h.current)==null?void 0:C.value)!==void 0){let b=p??"";(k=(j=h.current).onValueChange)==null||k.call(j,b);return}}w.emit()}},emit:()=>{i.current.forEach(r=>r())}}),[]),xe=s.useMemo(()=>({value:(r,p,x)=>{var l;p!==((l=d.current.get(r))==null?void 0:l.value)&&(d.current.set(r,{value:p,keywords:x}),a.current.filtered.items.set(r,Te(p,x)),y(2,()=>{Ce(),w.emit()}))},item:(r,p)=>(m.current.add(r),p&&(o.current.has(p)?o.current.get(p).add(r):o.current.set(p,new Set([r]))),y(3,()=>{ge(),Ce(),a.current.value||fe(),w.emit()}),()=>{d.current.delete(r),m.current.delete(r),a.current.filtered.items.delete(r);let x=O();y(4,()=>{ge(),(x==null?void 0:x.getAttribute("id"))===r&&fe(),w.emit()})}),group:r=>(o.current.has(r)||o.current.set(r,new Set),()=>{d.current.delete(r),o.current.delete(r)}),filter:()=>h.current.shouldFilter,label:S||n["aria-label"],getDisablePointerSelection:()=>h.current.disablePointerSelection,listId:pe,inputId:he,labelId:Me,listInnerRef:P}),[]);function Te(r,p){var x,l;let C=(l=(x=h.current)==null?void 0:x.filter)!=null?l:an;return r?C(r,a.current.search,p):0}function Ce(){if(!a.current.search||h.current.shouldFilter===!1)return;let r=a.current.filtered.items,p=[];a.current.filtered.groups.forEach(l=>{let C=o.current.get(l),j=0;C.forEach(k=>{let b=r.get(k);j=Math.max(b,j)}),p.push([l,j])});let x=P.current;W().sort((l,C)=>{var j,k;let b=l.getAttribute("id"),ee=C.getAttribute("id");return((j=r.get(ee))!=null?j:0)-((k=r.get(b))!=null?k:0)}).forEach(l=>{let C=l.closest(Ne);C?C.appendChild(l.parentElement===C?l:l.closest(`${Ne} > *`)):x.appendChild(l.parentElement===x?l:l.closest(`${Ne} > *`))}),p.sort((l,C)=>C[1]-l[1]).forEach(l=>{var C;let j=(C=P.current)==null?void 0:C.querySelector(`${Q}[${H}="${encodeURIComponent(l[0])}"]`);j==null||j.parentElement.appendChild(j)})}function fe(){let r=W().find(x=>x.getAttribute("aria-disabled")!=="true"),p=r==null?void 0:r.getAttribute(H);w.setState("value",p||void 0)}function ge(){var r,p,x,l;if(!a.current.search||h.current.shouldFilter===!1){a.current.filtered.count=m.current.size;return}a.current.filtered.groups=new Set;let C=0;for(let j of m.current){let k=(p=(r=d.current.get(j))==null?void 0:r.value)!=null?p:"",b=(l=(x=d.current.get(j))==null?void 0:x.keywords)!=null?l:[],ee=Te(k,b);a.current.filtered.items.set(j,ee),ee>0&&C++}for(let[j,k]of o.current)for(let b of k)if(a.current.filtered.items.get(b)>0){a.current.filtered.groups.add(j);break}a.current.filtered.count=C}function ze(){var r,p,x;let l=O();l&&(((r=l.parentElement)==null?void 0:r.firstChild)===l&&((x=(p=l.closest(Q))==null?void 0:p.querySelector(en))==null||x.scrollIntoView({block:"nearest"})),l.scrollIntoView({block:"nearest"}))}function O(){var r;return(r=P.current)==null?void 0:r.querySelector(`${Ca}[aria-selected="true"]`)}function W(){var r;return Array.from(((r=P.current)==null?void 0:r.querySelectorAll(De))||[])}function ve(r){let p=W()[r];p&&w.setState("value",p.getAttribute(H))}function je(r){var p;let x=O(),l=W(),C=l.findIndex(k=>k===x),j=l[C+r];(p=h.current)!=null&&p.loop&&(j=C+r<0?l[l.length-1]:C+r===l.length?l[0]:l[C+r]),j&&w.setState("value",j.getAttribute(H))}function Ge(r){let p=O(),x=p==null?void 0:p.closest(Q),l;for(;x&&!l;)x=r>0?cn(x,Q):un(x,Q),l=x==null?void 0:x.querySelector(De);l?w.setState("value",l.getAttribute(H)):je(r)}let Re=()=>ve(W().length-1),Le=r=>{r.preventDefault(),r.metaKey?Re():r.altKey?Ge(1):je(1)},Ae=r=>{r.preventDefault(),r.metaKey?ve(0):r.altKey?Ge(-1):je(-1)};return s.createElement(A.div,{ref:t,tabIndex:-1,...Z,"cmdk-root":"",onKeyDown:r=>{var p;(p=Z.onKeyDown)==null||p.call(Z,r);let x=r.nativeEvent.isComposing||r.keyCode===229;if(!(r.defaultPrevented||x))switch(r.key){case"n":case"j":{q&&r.ctrlKey&&Le(r);break}case"ArrowDown":{Le(r);break}case"p":case"k":{q&&r.ctrlKey&&Ae(r);break}case"ArrowUp":{Ae(r);break}case"Home":{r.preventDefault(),ve(0);break}case"End":{r.preventDefault(),Re();break}case"Enter":{r.preventDefault();let l=O();if(l){let C=new Event(we);l.dispatchEvent(C)}}}}},s.createElement("label",{"cmdk-label":"",htmlFor:xe.inputId,id:xe.labelId,style:xn},S),ce(n,r=>s.createElement(ga.Provider,{value:w},s.createElement(fa.Provider,{value:xe},r))))}),nn=s.forwardRef((n,t)=>{var a,m;let o=B(),d=s.useRef(null),i=s.useContext(va),h=Y(),S=Sa(n),u=(m=(a=S.current)==null?void 0:a.forceMount)!=null?m:i==null?void 0:i.forceMount;U(()=>{if(!u)return h.item(o,i==null?void 0:i.id)},[u]);let f=ya(o,d,[n.value,n.children,d],n.keywords),v=Fe(),E=L(y=>y.value&&y.value===f.current),I=L(y=>u||h.filter()===!1?!0:y.search?y.filtered.items.get(o)>0:!0);s.useEffect(()=>{let y=d.current;if(!(!y||n.disabled))return y.addEventListener(we,R),()=>y.removeEventListener(we,R)},[I,n.onSelect,n.disabled]);function R(){var y,w;ue(),(w=(y=S.current).onSelect)==null||w.call(y,f.current)}function ue(){v.setState("value",f.current,!0)}if(!I)return null;let{disabled:q,value:Z,onSelect:pe,forceMount:Me,keywords:he,...P}=n;return s.createElement(A.div,{ref:J(d,t),...P,id:o,"cmdk-item":"",role:"option","aria-disabled":!!q,"aria-selected":!!E,"data-disabled":!!q,"data-selected":!!E,onPointerMove:q||h.getDisablePointerSelection()?void 0:ue,onClick:q?void 0:R},n.children)}),tn=s.forwardRef((n,t)=>{let{heading:a,children:m,forceMount:o,...d}=n,i=B(),h=s.useRef(null),S=s.useRef(null),u=B(),f=Y(),v=L(I=>o||f.filter()===!1?!0:I.search?I.filtered.groups.has(i):!0);U(()=>f.group(i),[]),ya(i,h,[n.value,n.heading,S]);let E=s.useMemo(()=>({id:i,forceMount:o}),[o]);return s.createElement(A.div,{ref:J(h,t),...d,"cmdk-group":"",role:"presentation",hidden:v?void 0:!0},a&&s.createElement("div",{ref:S,"cmdk-group-heading":"","aria-hidden":!0,id:u},a),ce(n,I=>s.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":a?u:void 0},s.createElement(va.Provider,{value:E},I))))}),rn=s.forwardRef((n,t)=>{let{alwaysRender:a,...m}=n,o=s.useRef(null),d=L(i=>!i.search);return!a&&!d?null:s.createElement(A.div,{ref:J(o,t),...m,"cmdk-separator":"",role:"separator"})}),sn=s.forwardRef((n,t)=>{let{onValueChange:a,...m}=n,o=n.value!=null,d=Fe(),i=L(u=>u.search),h=L(u=>u.selectedItemId),S=Y();return s.useEffect(()=>{n.value!=null&&d.setState("search",n.value)},[n.value]),s.createElement(A.input,{ref:t,...m,"cmdk-input":"",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,"aria-controls":S.listId,"aria-labelledby":S.labelId,"aria-activedescendant":h,id:S.inputId,type:"text",value:o?n.value:i,onChange:u=>{o||d.setState("search",u.target.value),a==null||a(u.target.value)}})}),mn=s.forwardRef((n,t)=>{let{children:a,label:m="Suggestions",...o}=n,d=s.useRef(null),i=s.useRef(null),h=L(u=>u.selectedItemId),S=Y();return s.useEffect(()=>{if(i.current&&d.current){let u=i.current,f=d.current,v,E=new ResizeObserver(()=>{v=requestAnimationFrame(()=>{let I=u.offsetHeight;f.style.setProperty("--cmdk-list-height",I.toFixed(1)+"px")})});return E.observe(u),()=>{cancelAnimationFrame(v),E.unobserve(u)}}},[]),s.createElement(A.div,{ref:J(d,t),...o,"cmdk-list":"",role:"listbox",tabIndex:-1,"aria-activedescendant":h,"aria-label":m,id:S.listId},ce(n,u=>s.createElement("div",{ref:J(i,S.listInnerRef),"cmdk-list-sizer":""},u)))}),on=s.forwardRef((n,t)=>{let{open:a,onOpenChange:m,overlayClassName:o,contentClassName:d,container:i,...h}=n;return s.createElement(ba,{open:a,onOpenChange:m},s.createElement(Ia,{container:i},s.createElement(wa,{"cmdk-overlay":"",className:o}),s.createElement(ka,{"aria-label":n.label,"cmdk-dialog":"",className:d},s.createElement(ja,{ref:t,...h}))))}),dn=s.forwardRef((n,t)=>L(a=>a.filtered.count===0)?s.createElement(A.div,{ref:t,...n,"cmdk-empty":"",role:"presentation"}):null),ln=s.forwardRef((n,t)=>{let{progress:a,children:m,label:o="Loading...",...d}=n;return s.createElement(A.div,{ref:t,...d,"cmdk-loading":"",role:"progressbar","aria-valuenow":a,"aria-valuemin":0,"aria-valuemax":100,"aria-label":o},ce(n,i=>s.createElement("div",{"aria-hidden":!0},i)))}),D=Object.assign(ja,{List:mn,Item:nn,Input:sn,Group:tn,Separator:rn,Dialog:on,Empty:dn,Loading:ln});function cn(n,t){let a=n.nextElementSibling;for(;a;){if(a.matches(t))return a;a=a.nextElementSibling}}function un(n,t){let a=n.previousElementSibling;for(;a;){if(a.matches(t))return a;a=a.previousElementSibling}}function Sa(n){let t=s.useRef(n);return U(()=>{t.current=n}),t}var U=typeof window>"u"?s.useEffect:s.useLayoutEffect;function $(n){let t=s.useRef();return t.current===void 0&&(t.current=n()),t}function L(n){let t=Fe(),a=()=>n(t.snapshot());return s.useSyncExternalStore(t.subscribe,a,a)}function ya(n,t,a,m=[]){let o=s.useRef(),d=Y();return U(()=>{var i;let h=(()=>{var u;for(let f of a){if(typeof f=="string")return f.trim();if(typeof f=="object"&&"current"in f)return f.current?(u=f.current.textContent)==null?void 0:u.trim():o.current}})(),S=m.map(u=>u.trim());d.value(n,h,S),(i=t.current)==null||i.setAttribute(H,h),o.current=h}),o}var pn=()=>{let[n,t]=s.useState(),a=$(()=>new Map);return U(()=>{a.current.forEach(m=>m()),a.current=new Map},[n]),(m,o)=>{a.current.set(m,o),t({})}};function hn(n){let t=n.type;return typeof t=="function"?t(n.props):"render"in t?t.render(n.props):n}function ce({asChild:n,children:t},a){return n&&s.isValidElement(t)?s.cloneElement(hn(t),{ref:t.ref},a(t.props.children)):a(t)}var xn={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"};const Cn=G("flex h-full w-full flex-col overflow-hidden rounded-md bg-background text-text-primary",{variants:{size:{xs:"text-xs",sm:"text-sm",md:"text-base",lg:"text-lg"}},defaultVariants:{size:"md"}}),V=s.memo(({className:n,size:t="md",classNames:a,...m})=>e.jsx(D,{"data-slot":"command",className:F("command_root",Cn({size:t}),a==null?void 0:a.root,n),...m}));V.displayName="Command";const _e=s.memo(({title:n="Command Palette",description:t="Search for a command to run...",children:a,className:m,showCloseButton:o=!0,size:d="md",...i})=>e.jsxs(Fa,{...i,children:[e.jsxs(_a,{className:"sr-only",children:[e.jsx(Ma,{children:n}),e.jsx(Ta,{children:t})]}),e.jsx(za,{className:F("overflow-hidden p-0",m),showCloseButton:o,children:e.jsx(V,{size:d,className:"[&_[cmdk-group-heading]]:text-text-secondary [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0",children:a})})]}));_e.displayName="CommandModal";const fn=G("flex w-full bg-transparent outline-hidden disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-text-secondary/50 text-text-primary",{variants:{size:{xs:"text-xs",sm:"text-sm",md:"text-base",lg:"text-lg"}},defaultVariants:{size:"md"}}),gn=G("flex items-center gap-2 border-b border-border px-3",{variants:{size:{xs:"h-6",sm:"h-8",md:"h-10",lg:"h-12"}},defaultVariants:{size:"md"}}),_=s.memo(({className:n,size:t="md",classNames:a,...m})=>e.jsxs("div",{"data-slot":"command-input-wrapper",className:gn({size:t}),children:[e.jsx(le,{"data-slot":"command-input-icon",className:F("command_inputIcon","shrink-0 opacity-50 text-text-secondary",Na[t],a==null?void 0:a.inputIcon)}),e.jsx(D.Input,{"data-slot":"command-input",className:F("command_input",fn({size:t}),a==null?void 0:a.input,n),...m})]}));_.displayName="CommandInput";const vn=G("scroll-py-1 overflow-x-hidden overflow-y-auto",{variants:{size:{xs:"max-h-[150px]",sm:"max-h-[200px]",md:"max-h-[300px]",lg:"max-h-[400px]"}},defaultVariants:{size:"md"}}),M=s.memo(({className:n,size:t="md",classNames:a,...m})=>e.jsx(D.List,{"data-slot":"command-list",className:F("command_list",vn({size:t}),a==null?void 0:a.list,n),...m}));M.displayName="CommandList";const jn=G("text-center text-text-secondary",{variants:{size:{xs:"py-3 text-[10px]",sm:"py-4 text-xs",md:"py-6 text-sm",lg:"py-8 text-base"}},defaultVariants:{size:"md"}}),T=s.memo(({size:n="md",classNames:t,...a})=>e.jsx(D.Empty,{"data-slot":"command-empty",className:F("command_empty",jn({size:n}),t==null?void 0:t.empty),...a}));T.displayName="CommandEmpty";const Sn=G("overflow-hidden text-text-primary [&_[cmdk-group-heading]]:text-text-secondary [&_[cmdk-group-heading]]:font-medium",{variants:{size:{xs:"p-0.5 [&_[cmdk-group-heading]]:px-1 [&_[cmdk-group-heading]]:py-0.5 [&_[cmdk-group-heading]]:text-[9px]",sm:"p-0.5 [&_[cmdk-group-heading]]:px-1.5 [&_[cmdk-group-heading]]:py-1 [&_[cmdk-group-heading]]:text-[10px]",md:"p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs",lg:"p-1.5 [&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-sm"}},defaultVariants:{size:"md"}}),N=s.memo(({className:n,size:t="md",classNames:a,...m})=>e.jsx(D.Group,{"data-slot":"command-group",className:F("command_group",Sn({size:t}),a==null?void 0:a.group,n),...m}));N.displayName="CommandGroup";const yn=G("bg-border h-px",{variants:{size:{xs:"-mx-0",sm:"-mx-0.5",md:"-mx-1",lg:"-mx-1.5"}},defaultVariants:{size:"md"}}),z=s.memo(({className:n,size:t="md",...a})=>e.jsx(D.Separator,{"data-slot":"command-separator",className:F(yn({size:t}),n),...a}));z.displayName="CommandSeparator";const Nn=G("relative flex cursor-default items-center gap-2 rounded-sm outline-hidden select-none text-text-primary data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='text-'])]:text-text-secondary transition-colors",{variants:{size:{xs:"px-1 py-0.5 text-[10px] gap-1 [&_svg:not([class*='size-'])]:size-3",sm:"px-1.5 py-1 text-xs gap-1.5 [&_svg:not([class*='size-'])]:size-3.5",md:"px-2 py-1.5 text-sm gap-2 [&_svg:not([class*='size-'])]:size-4",lg:"px-3 py-2 text-base gap-2.5 [&_svg:not([class*='size-'])]:size-5"}},defaultVariants:{size:"md"}}),c=s.memo(({className:n,size:t="md",color:a="primary",classNames:m,...o})=>e.jsx(D.Item,{"data-slot":"command-item",className:F("command_item",Nn({size:t}),Va[a],"data-[selected=true]:bg-slot-10 data-[selected=true]:text-slot",m==null?void 0:m.item,n),...o}));c.displayName="CommandItem";const bn=G("ml-auto tracking-widest text-text-secondary opacity-60",{variants:{size:{xs:"text-[9px]",sm:"text-[10px]",md:"text-xs",lg:"text-sm"}},defaultVariants:{size:"md"}}),g=s.memo(({className:n,size:t="md",classNames:a,...m})=>e.jsx("span",{"data-slot":"command-shortcut",className:F("command_shortcut",bn({size:t}),a==null?void 0:a.shortcut,n),...m}));g.displayName="CommandShortcut";V.__docgenInfo={description:"",methods:[],displayName:"Command",props:{size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},classNames:{required:!1,tsType:{name:"CommandClassNames"},description:""}}};_e.__docgenInfo={description:"",methods:[],displayName:"CommandModal",props:{title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Command Palette'",computed:!1}},description:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Search for a command to run...'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}}}};_.__docgenInfo={description:"",methods:[],displayName:"CommandInput",props:{size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},classNames:{required:!1,tsType:{name:"CommandClassNames"},description:""}}};M.__docgenInfo={description:"",methods:[],displayName:"CommandList",props:{size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},classNames:{required:!1,tsType:{name:"CommandClassNames"},description:""}}};T.__docgenInfo={description:"",methods:[],displayName:"CommandEmpty",props:{size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},classNames:{required:!1,tsType:{name:"CommandClassNames"},description:""}}};N.__docgenInfo={description:"",methods:[],displayName:"CommandGroup",props:{size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},classNames:{required:!1,tsType:{name:"CommandClassNames"},description:""}}};c.__docgenInfo={description:"",methods:[],displayName:"CommandItem",props:{size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:`| 'default'
| 'primary'
| 'secondary'
| 'accent'
| 'success'
| 'error'
| 'warning'
| 'info'`,elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'accent'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},classNames:{required:!1,tsType:{name:"CommandClassNames"},description:""}}};g.__docgenInfo={description:"",methods:[],displayName:"CommandShortcut",props:{size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},classNames:{required:!1,tsType:{name:"CommandClassNames"},description:""}}};z.__docgenInfo={description:"",methods:[],displayName:"CommandSeparator",props:{size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}}}};const at={title:"Navigation/Command",component:V,tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg"],description:"Command palette size"}}},ae={render:()=>e.jsxs(V,{className:"rounded-lg border border-border shadow-md",children:[e.jsx(_,{placeholder:"Type a command or search..."}),e.jsxs(M,{children:[e.jsx(T,{children:"No results found."}),e.jsxs(N,{heading:"Suggestions",children:[e.jsxs(c,{children:[e.jsx(ke,{className:"mr-2"}),e.jsx("span",{children:"Calendar"})]}),e.jsxs(c,{children:[e.jsx(ie,{className:"mr-2"}),e.jsx("span",{children:"Search Users"})]}),e.jsxs(c,{children:[e.jsx(X,{className:"mr-2"}),e.jsx("span",{children:"Settings"})]})]})]})]})},ne={render:()=>e.jsxs(V,{className:"rounded-lg border border-border shadow-md",children:[e.jsx(_,{placeholder:"Type a command or search..."}),e.jsxs(M,{children:[e.jsx(T,{children:"No results found."}),e.jsxs(N,{heading:"Suggestions",children:[e.jsxs(c,{children:[e.jsx(Ve,{className:"mr-2"}),e.jsx("span",{children:"Home"}),e.jsx(g,{children:"⌘H"})]}),e.jsxs(c,{children:[e.jsx(le,{className:"mr-2"}),e.jsx("span",{children:"Search"}),e.jsx(g,{children:"⌘K"})]}),e.jsxs(c,{children:[e.jsx(X,{className:"mr-2"}),e.jsx("span",{children:"Settings"}),e.jsx(g,{children:"⌘,"})]})]}),e.jsx(z,{}),e.jsxs(N,{heading:"Files",children:[e.jsxs(c,{children:[e.jsx(K,{className:"mr-2"}),e.jsx("span",{children:"New File"}),e.jsx(g,{children:"⌘N"})]}),e.jsxs(c,{children:[e.jsx(Ee,{className:"mr-2"}),e.jsx("span",{children:"New Folder"}),e.jsx(g,{children:"⇧⌘N"})]})]})]})]})},te={render:()=>e.jsxs(V,{className:"rounded-lg border border-border shadow-md",children:[e.jsx(_,{placeholder:"Type a command or search..."}),e.jsxs(M,{children:[e.jsx(T,{children:"No results found."}),e.jsxs(N,{heading:"Navigation",children:[e.jsxs(c,{children:[e.jsx(Ve,{className:"mr-2"}),e.jsx("span",{children:"Home"})]}),e.jsxs(c,{children:[e.jsx(ie,{className:"mr-2"}),e.jsx("span",{children:"Profile"})]}),e.jsxs(c,{children:[e.jsx(X,{className:"mr-2"}),e.jsx("span",{children:"Settings"})]})]}),e.jsx(z,{}),e.jsxs(N,{heading:"Communication",children:[e.jsxs(c,{children:[e.jsx(La,{className:"mr-2"}),e.jsx("span",{children:"Messages"})]}),e.jsxs(c,{children:[e.jsx(Aa,{className:"mr-2"}),e.jsx("span",{children:"Notifications"})]}),e.jsxs(c,{children:[e.jsx(Ua,{className:"mr-2"}),e.jsx("span",{children:"Comments"})]})]}),e.jsx(z,{}),e.jsxs(N,{heading:"Actions",children:[e.jsxs(c,{children:[e.jsx(be,{className:"mr-2"}),e.jsx("span",{children:"Download"})]}),e.jsxs(c,{children:[e.jsx(pa,{className:"mr-2"}),e.jsx("span",{children:"Upload"})]}),e.jsxs(c,{children:[e.jsx(qa,{className:"mr-2"}),e.jsx("span",{children:"Share"})]})]})]})]})},re={render:()=>{const[n,t]=s.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsxs(V,{className:"rounded-lg border border-border shadow-md",children:[e.jsx(_,{placeholder:"Type a command or search..."}),e.jsxs(M,{children:[e.jsx(T,{children:"No results found."}),e.jsxs(N,{heading:"Actions",children:[e.jsxs(c,{onSelect:()=>t("Home"),children:[e.jsx(Ve,{className:"mr-2"}),e.jsx("span",{children:"Home"})]}),e.jsxs(c,{onSelect:()=>t("Profile"),children:[e.jsx(ie,{className:"mr-2"}),e.jsx("span",{children:"Profile"})]}),e.jsxs(c,{onSelect:()=>t("Settings"),children:[e.jsx(X,{className:"mr-2"}),e.jsx("span",{children:"Settings"})]}),e.jsxs(c,{onSelect:()=>t("Calendar"),children:[e.jsx(ke,{className:"mr-2"}),e.jsx("span",{children:"Calendar"})]})]})]})]}),n&&e.jsx("div",{className:"p-4 bg-surface border border-border rounded-lg",children:e.jsxs("p",{className:"text-sm",children:["Selected: ",e.jsx("strong",{children:n})]})})]})}},se={render:()=>{const[n,t]=s.useState(!1),[a,m]=s.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsx("button",{onClick:()=>t(!0),className:"px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors",children:"Open Command Palette"}),e.jsx("p",{className:"text-sm text-text-secondary",children:"Press the button or use keyboard shortcut ⌘K to open"}),a&&e.jsx("div",{className:"p-4 bg-surface border border-border rounded-lg",children:e.jsxs("p",{className:"text-sm",children:["Last selected: ",e.jsx("strong",{children:a})]})}),e.jsxs(_e,{open:n,onOpenChange:t,children:[e.jsx(_,{placeholder:"Type a command or search..."}),e.jsxs(M,{children:[e.jsx(T,{children:"No results found."}),e.jsxs(N,{heading:"Suggestions",children:[e.jsxs(c,{onSelect:()=>{m("Calendar"),t(!1)},children:[e.jsx(ke,{className:"mr-2"}),e.jsx("span",{children:"Calendar"})]}),e.jsxs(c,{onSelect:()=>{m("Search Users"),t(!1)},children:[e.jsx(ie,{className:"mr-2"}),e.jsx("span",{children:"Search Users"})]}),e.jsxs(c,{onSelect:()=>{m("Settings"),t(!1)},children:[e.jsx(X,{className:"mr-2"}),e.jsx("span",{children:"Settings"})]})]}),e.jsx(z,{}),e.jsxs(N,{heading:"Quick Actions",children:[e.jsxs(c,{onSelect:()=>{m("New File"),t(!1)},children:[e.jsx(K,{className:"mr-2"}),e.jsx("span",{children:"New File"}),e.jsx(g,{children:"⌘N"})]}),e.jsxs(c,{onSelect:()=>{m("New Folder"),t(!1)},children:[e.jsx(Ee,{className:"mr-2"}),e.jsx("span",{children:"New Folder"}),e.jsx(g,{children:"⇧⌘N"})]})]})]})]})]})}},me={render:()=>e.jsxs(V,{className:"rounded-lg border border-border shadow-md",children:[e.jsx(_,{placeholder:"Search files..."}),e.jsxs(M,{children:[e.jsx(T,{children:"No files found."}),e.jsxs(N,{heading:"Recent Files",children:[e.jsxs(c,{children:[e.jsx(K,{className:"mr-2"}),e.jsx("span",{children:"document.pdf"}),e.jsx(g,{children:"2 hours ago"})]}),e.jsxs(c,{children:[e.jsx(K,{className:"mr-2"}),e.jsx("span",{children:"presentation.pptx"}),e.jsx(g,{children:"5 hours ago"})]}),e.jsxs(c,{children:[e.jsx(K,{className:"mr-2"}),e.jsx("span",{children:"spreadsheet.xlsx"}),e.jsx(g,{children:"1 day ago"})]})]}),e.jsx(z,{}),e.jsxs(N,{heading:"Actions",children:[e.jsxs(c,{children:[e.jsx(pa,{className:"mr-2"}),e.jsx("span",{children:"Upload File"}),e.jsx(g,{children:"⌘U"})]}),e.jsxs(c,{children:[e.jsx(Ee,{className:"mr-2"}),e.jsx("span",{children:"New Folder"}),e.jsx(g,{children:"⇧⌘N"})]}),e.jsxs(c,{children:[e.jsx(Ra,{className:"mr-2"}),e.jsx("span",{children:"View Starred"}),e.jsx(g,{children:"⌘S"})]}),e.jsxs(c,{children:[e.jsx(Oa,{className:"mr-2"}),e.jsx("span",{children:"View Trash"}),e.jsx(g,{children:"⌘T"})]})]})]})]})},oe={render:()=>e.jsxs(V,{className:"rounded-lg border border-border shadow-md",children:[e.jsx(_,{placeholder:"Search commands..."}),e.jsxs(M,{children:[e.jsx(T,{children:"No commands found."}),e.jsxs(N,{heading:"Edit",children:[e.jsxs(c,{children:[e.jsx(Ga,{className:"mr-2"}),e.jsx("span",{children:"Edit"}),e.jsx(g,{children:"⌘E"})]}),e.jsxs(c,{children:[e.jsx(qe,{className:"mr-2"}),e.jsx("span",{children:"Copy"}),e.jsx(g,{children:"⌘C"})]}),e.jsxs(c,{children:[e.jsx(qe,{className:"mr-2"}),e.jsx("span",{children:"Paste"}),e.jsx(g,{children:"⌘V"})]})]}),e.jsx(z,{}),e.jsxs(N,{heading:"File",children:[e.jsxs(c,{children:[e.jsx(K,{className:"mr-2"}),e.jsx("span",{children:"New File"}),e.jsx(g,{children:"⌘N"})]}),e.jsxs(c,{children:[e.jsx(be,{className:"mr-2"}),e.jsx("span",{children:"Save"}),e.jsx(g,{children:"⌘S"})]}),e.jsxs(c,{children:[e.jsx(be,{className:"mr-2"}),e.jsx("span",{children:"Save As"}),e.jsx(g,{children:"⇧⌘S"})]})]}),e.jsx(z,{}),e.jsxs(N,{heading:"View",children:[e.jsxs(c,{children:[e.jsx(le,{className:"mr-2"}),e.jsx("span",{children:"Find"}),e.jsx(g,{children:"⌘F"})]}),e.jsxs(c,{children:[e.jsx(le,{className:"mr-2"}),e.jsx("span",{children:"Find and Replace"}),e.jsx(g,{children:"⌘H"})]})]})]})]})},de={render:()=>{const[n,t]=s.useState(""),m=[{name:"Apple",category:"Fruits"},{name:"Banana",category:"Fruits"},{name:"Carrot",category:"Vegetables"},{name:"Broccoli",category:"Vegetables"},{name:"Chicken",category:"Meat"},{name:"Beef",category:"Meat"}].filter(d=>d.name.toLowerCase().includes(n.toLowerCase())),o=m.reduce((d,i)=>(d[i.category]||(d[i.category]=[]),d[i.category].push(i),d),{});return e.jsxs(V,{className:"rounded-lg border border-border shadow-md",children:[e.jsx(_,{placeholder:"Search items...",value:n,onValueChange:t}),e.jsxs(M,{children:[m.length===0&&e.jsx(T,{children:"No items found."}),Object.entries(o).map(([d,i])=>e.jsx(N,{heading:d,children:i.map(h=>e.jsx(c,{children:e.jsx("span",{children:h.name})},h.name))},d))]})]})}};var Oe,He,$e;ae.parameters={...ae.parameters,docs:{...(Oe=ae.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  render: () => <Command className="rounded-lg border border-border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <Calendar className="mr-2" />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <User className="mr-2" />
            <span>Search Users</span>
          </CommandItem>
          <CommandItem>
            <Settings className="mr-2" />
            <span>Settings</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
}`,...($e=(He=ae.parameters)==null?void 0:He.docs)==null?void 0:$e.source}}};var Be,Ke,We;ne.parameters={...ne.parameters,docs:{...(Be=ne.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  render: () => <Command className="rounded-lg border border-border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <Home className="mr-2" />
            <span>Home</span>
            <CommandShortcut>⌘H</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Search className="mr-2" />
            <span>Search</span>
            <CommandShortcut>⌘K</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings className="mr-2" />
            <span>Settings</span>
            <CommandShortcut>⌘,</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Files">
          <CommandItem>
            <FileText className="mr-2" />
            <span>New File</span>
            <CommandShortcut>⌘N</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Folder className="mr-2" />
            <span>New Folder</span>
            <CommandShortcut>⇧⌘N</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
}`,...(We=(Ke=ne.parameters)==null?void 0:Ke.docs)==null?void 0:We.source}}};var Qe,Je,Xe;te.parameters={...te.parameters,docs:{...(Qe=te.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  render: () => <Command className="rounded-lg border border-border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigation">
          <CommandItem>
            <Home className="mr-2" />
            <span>Home</span>
          </CommandItem>
          <CommandItem>
            <User className="mr-2" />
            <span>Profile</span>
          </CommandItem>
          <CommandItem>
            <Settings className="mr-2" />
            <span>Settings</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Communication">
          <CommandItem>
            <Mail className="mr-2" />
            <span>Messages</span>
          </CommandItem>
          <CommandItem>
            <Bell className="mr-2" />
            <span>Notifications</span>
          </CommandItem>
          <CommandItem>
            <MessageSquare className="mr-2" />
            <span>Comments</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Actions">
          <CommandItem>
            <Download className="mr-2" />
            <span>Download</span>
          </CommandItem>
          <CommandItem>
            <Upload className="mr-2" />
            <span>Upload</span>
          </CommandItem>
          <CommandItem>
            <Share className="mr-2" />
            <span>Share</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
}`,...(Xe=(Je=te.parameters)==null?void 0:Je.docs)==null?void 0:Xe.source}}};var Ye,Ze,ea;re.parameters={...re.parameters,docs:{...(Ye=re.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  render: () => {
    const [selectedItem, setSelectedItem] = useState<string>('');
    return <div className="space-y-4">
        <Command className="rounded-lg border border-border shadow-md">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Actions">
              <CommandItem onSelect={() => setSelectedItem('Home')}>
                <Home className="mr-2" />
                <span>Home</span>
              </CommandItem>
              <CommandItem onSelect={() => setSelectedItem('Profile')}>
                <User className="mr-2" />
                <span>Profile</span>
              </CommandItem>
              <CommandItem onSelect={() => setSelectedItem('Settings')}>
                <Settings className="mr-2" />
                <span>Settings</span>
              </CommandItem>
              <CommandItem onSelect={() => setSelectedItem('Calendar')}>
                <Calendar className="mr-2" />
                <span>Calendar</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
        {selectedItem && <div className="p-4 bg-surface border border-border rounded-lg">
            <p className="text-sm">
              Selected: <strong>{selectedItem}</strong>
            </p>
          </div>}
      </div>;
  }
}`,...(ea=(Ze=re.parameters)==null?void 0:Ze.docs)==null?void 0:ea.source}}};var aa,na,ta;se.parameters={...se.parameters,docs:{...(aa=se.parameters)==null?void 0:aa.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const [selectedCommand, setSelectedCommand] = useState('');
    return <div className="space-y-4">
        <button onClick={() => setOpen(true)} className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors">
          Open Command Palette
        </button>
        <p className="text-sm text-text-secondary">
          Press the button or use keyboard shortcut ⌘K to open
        </p>
        {selectedCommand && <div className="p-4 bg-surface border border-border rounded-lg">
            <p className="text-sm">
              Last selected: <strong>{selectedCommand}</strong>
            </p>
          </div>}
        <CommandModal open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem onSelect={() => {
              setSelectedCommand('Calendar');
              setOpen(false);
            }}>
                <Calendar className="mr-2" />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem onSelect={() => {
              setSelectedCommand('Search Users');
              setOpen(false);
            }}>
                <User className="mr-2" />
                <span>Search Users</span>
              </CommandItem>
              <CommandItem onSelect={() => {
              setSelectedCommand('Settings');
              setOpen(false);
            }}>
                <Settings className="mr-2" />
                <span>Settings</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Quick Actions">
              <CommandItem onSelect={() => {
              setSelectedCommand('New File');
              setOpen(false);
            }}>
                <FileText className="mr-2" />
                <span>New File</span>
                <CommandShortcut>⌘N</CommandShortcut>
              </CommandItem>
              <CommandItem onSelect={() => {
              setSelectedCommand('New Folder');
              setOpen(false);
            }}>
                <Folder className="mr-2" />
                <span>New Folder</span>
                <CommandShortcut>⇧⌘N</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandModal>
      </div>;
  }
}`,...(ta=(na=se.parameters)==null?void 0:na.docs)==null?void 0:ta.source}}};var ra,sa,ma;me.parameters={...me.parameters,docs:{...(ra=me.parameters)==null?void 0:ra.docs,source:{originalSource:`{
  render: () => <Command className="rounded-lg border border-border shadow-md">
      <CommandInput placeholder="Search files..." />
      <CommandList>
        <CommandEmpty>No files found.</CommandEmpty>
        <CommandGroup heading="Recent Files">
          <CommandItem>
            <FileText className="mr-2" />
            <span>document.pdf</span>
            <CommandShortcut>2 hours ago</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <FileText className="mr-2" />
            <span>presentation.pptx</span>
            <CommandShortcut>5 hours ago</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <FileText className="mr-2" />
            <span>spreadsheet.xlsx</span>
            <CommandShortcut>1 day ago</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Actions">
          <CommandItem>
            <Upload className="mr-2" />
            <span>Upload File</span>
            <CommandShortcut>⌘U</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Folder className="mr-2" />
            <span>New Folder</span>
            <CommandShortcut>⇧⌘N</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Star className="mr-2" />
            <span>View Starred</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Trash className="mr-2" />
            <span>View Trash</span>
            <CommandShortcut>⌘T</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
}`,...(ma=(sa=me.parameters)==null?void 0:sa.docs)==null?void 0:ma.source}}};var oa,da,la;oe.parameters={...oe.parameters,docs:{...(oa=oe.parameters)==null?void 0:oa.docs,source:{originalSource:`{
  render: () => <Command className="rounded-lg border border-border shadow-md">
      <CommandInput placeholder="Search commands..." />
      <CommandList>
        <CommandEmpty>No commands found.</CommandEmpty>
        <CommandGroup heading="Edit">
          <CommandItem>
            <Edit className="mr-2" />
            <span>Edit</span>
            <CommandShortcut>⌘E</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Copy className="mr-2" />
            <span>Copy</span>
            <CommandShortcut>⌘C</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Copy className="mr-2" />
            <span>Paste</span>
            <CommandShortcut>⌘V</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="File">
          <CommandItem>
            <FileText className="mr-2" />
            <span>New File</span>
            <CommandShortcut>⌘N</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Download className="mr-2" />
            <span>Save</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Download className="mr-2" />
            <span>Save As</span>
            <CommandShortcut>⇧⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="View">
          <CommandItem>
            <Search className="mr-2" />
            <span>Find</span>
            <CommandShortcut>⌘F</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Search className="mr-2" />
            <span>Find and Replace</span>
            <CommandShortcut>⌘H</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
}`,...(la=(da=oe.parameters)==null?void 0:da.docs)==null?void 0:la.source}}};var ia,ca,ua;de.parameters={...de.parameters,docs:{...(ia=de.parameters)==null?void 0:ia.docs,source:{originalSource:`{
  render: () => {
    const [searchValue, setSearchValue] = useState('');
    const items = [{
      name: 'Apple',
      category: 'Fruits'
    }, {
      name: 'Banana',
      category: 'Fruits'
    }, {
      name: 'Carrot',
      category: 'Vegetables'
    }, {
      name: 'Broccoli',
      category: 'Vegetables'
    }, {
      name: 'Chicken',
      category: 'Meat'
    }, {
      name: 'Beef',
      category: 'Meat'
    }];
    const filteredItems = items.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()));
    const groupedItems = filteredItems.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {} as Record<string, typeof items>);
    return <Command className="rounded-lg border border-border shadow-md">
        <CommandInput placeholder="Search items..." value={searchValue} onValueChange={setSearchValue} />
        <CommandList>
          {filteredItems.length === 0 && <CommandEmpty>No items found.</CommandEmpty>}
          {Object.entries(groupedItems).map(([category, categoryItems]) => <CommandGroup key={category} heading={category}>
              {categoryItems.map(item => <CommandItem key={item.name}>
                  <span>{item.name}</span>
                </CommandItem>)}
            </CommandGroup>)}
        </CommandList>
      </Command>;
  }
}`,...(ua=(ca=de.parameters)==null?void 0:ca.docs)==null?void 0:ua.source}}};const nt=["Default","WithShortcuts","MultipleGroups","Interactive","ModalExample","FileManager","EditorCommands","SearchWithFiltering"];export{ae as Default,oe as EditorCommands,me as FileManager,re as Interactive,se as ModalExample,te as MultipleGroups,de as SearchWithFiltering,ne as WithShortcuts,nt as __namedExportsOrder,at as default};
