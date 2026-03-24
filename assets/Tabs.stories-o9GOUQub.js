import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as _e,r as n}from"./index-ZH-6pyQh.js";import{c as u,a as Re}from"./utils-_uLxnvdl.js";import{c as Fe}from"./variants-C8qliDOr.js";import{H as k}from"./house-DCjPrFcn.js";import{U as j}from"./user-BM8Midap.js";import{S as W}from"./shopping-cart-DxzqVIld.js";import{S as C}from"./settings-D1wlBKo1.js";import{B as S}from"./bell-BD3KA5A_.js";import{M as Me}from"./mail-1HDD9Lg3.js";import{C as Pe}from"./calendar-DcUEuZqF.js";import{F as Ve}from"./file-text-DaZIRBjV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createLucideIcon-BXJdBs6C.js";const We=typeof window<"u"?n.useLayoutEffect:n.useEffect,g=["default","primary","secondary","accent","success","error","warning","info"],qe=Re("flex relative",{variants:{size:{xs:"gap-(--tabs-gap-xs)",sm:"gap-(--tabs-gap-sm)",md:"gap-(--tabs-gap-md)",lg:"gap-(--tabs-gap-lg)"},variant:{default:"border-b",solid:"border-b",soft:"border-b",pill:"bg-surface p-0.5 border border-border gap-0 w-fit"},radius:{xs:"",sm:"",md:"",lg:"",full:""}},compoundVariants:[{variant:"pill",radius:"xs",className:"rounded-sm"},{variant:"pill",radius:"sm",className:"rounded-md"},{variant:"pill",radius:"md",className:"rounded-lg"},{variant:"pill",radius:"lg",className:"rounded-xl"},{variant:"pill",radius:"full",className:"rounded-full"}],defaultVariants:{size:"md",variant:"default",radius:"md"}}),Be={xs:"rounded-xs",sm:"rounded-sm",md:"rounded-md",lg:"rounded-lg",full:"rounded-full"},Je=Re("relative z-[1] font-medium transition-colors duration-200 ease-out cursor-pointer flex items-center gap-2 whitespace-nowrap shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-slot/50 focus-visible:rounded-sm",{variants:{size:{xs:"text-xs px-(--tabs-padding-x-xs) py-(--tabs-padding-y-xs)",sm:"text-sm px-(--tabs-padding-x-sm) py-(--tabs-padding-y-sm)",md:"text-base px-(--tabs-padding-x-md) py-(--tabs-padding-y-md)",lg:"text-lg px-(--tabs-padding-x-lg) py-(--tabs-padding-y-lg)"},variant:{default:"pb-2 -mb-px",solid:"pb-2 -mb-px",soft:"pb-2 -mb-px",pill:""},radius:{xs:"",sm:"",md:"",lg:"",full:""},color:{default:"",primary:"",secondary:"",accent:"",success:"",error:"",warning:"",info:""},active:{true:"",false:""}},compoundVariants:[...g.map(a=>({color:a,active:!1,className:"text-text-secondary hover:text-text-primary"})),...g.map(a=>({variant:"pill",color:a,active:!0,className:"text-slot-fg"})),...g.map(a=>({variant:"default",color:a,active:!0,className:"text-slot"})),...g.map(a=>({variant:"solid",color:a,active:!0,className:"text-slot"})),...g.map(a=>({variant:"soft",color:a,active:!0,className:"text-slot"})),...g.map(a=>({variant:"pill",color:a,active:!1,className:"bg-transparent hover:bg-background/50"})),{variant:"pill",radius:"xs",className:"rounded-xs"},{variant:"pill",radius:"sm",className:"rounded-sm"},{variant:"pill",radius:"md",className:"rounded-md"},{variant:"pill",radius:"lg",className:"rounded-lg"},{variant:"pill",radius:"full",className:"rounded-full"}],defaultVariants:{size:"md",variant:"default",color:"primary",radius:"md",active:!1}}),d=_e.memo(({items:a,defaultActiveKey:l,activeKey:i,color:o="primary",size:E="md",variant:f="default",radius:L="md",onChange:T,className:Ie,classNames:r})=>{var J;const[Oe,$e]=n.useState(l||((J=a[0])==null?void 0:J.key)||""),_=n.useRef(null),h=n.useRef(new Map),[Ke,B]=n.useState({}),[w,He]=n.useState(!1),A=n.useId(),y=i!==void 0?i:Oe,N=n.useCallback(()=>{const s=h.current.get(y),m=_.current;if(!s||!m)return;const t=s.offsetLeft,v=s.offsetWidth,p=s.offsetHeight;if(f==="pill"){let x=0;if(typeof window<"u"){const Le=window.getComputedStyle(m);x=parseFloat(Le.paddingLeft)||0}B({transform:`translateX(${t-x}px)`,width:`${v}px`,height:`${p}px`,opacity:1})}else B({transform:`translateX(${t}px)`,width:`${v}px`,opacity:1});w||requestAnimationFrame(()=>He(!0))},[y,f,w]);We(()=>{N()},[N,a,E]),n.useEffect(()=>{const s=h.current.get(y);s!=null&&s.scrollIntoView&&s.scrollIntoView({block:"nearest",inline:"nearest",behavior:w?"smooth":"auto"})},[y,w]),n.useEffect(()=>{if(typeof window>"u")return;const s=()=>{requestAnimationFrame(()=>{N()})};return window.addEventListener("resize",s),window.addEventListener("orientationchange",s),()=>{window.removeEventListener("resize",s),window.removeEventListener("orientationchange",s)}},[N]),n.useEffect(()=>{const s=_.current;if(!s||typeof ResizeObserver>"u")return;const m=new ResizeObserver(()=>{requestAnimationFrame(()=>{N()})});return m.observe(s),()=>{m.disconnect()}},[N]);const F=n.useCallback((s,m)=>{m||(i===void 0&&$e(s),T==null||T(s),requestAnimationFrame(()=>{const t=h.current.get(s);t==null||t.focus()}))},[i,T]),Ue=n.useCallback((s,m)=>{const t=a.map((c,x)=>c.disabled?-1:x).filter(c=>c!==-1),v=t.indexOf(m);let p;switch(s.key){case"ArrowLeft":case"ArrowUp":s.preventDefault(),p=t[v>0?v-1:t.length-1];break;case"ArrowRight":case"ArrowDown":s.preventDefault(),p=t[v<t.length-1?v+1:0];break;case"Home":s.preventDefault(),p=t[0];break;case"End":s.preventDefault(),p=t[t.length-1];break}if(p!==void 0){const c=a[p];if(c){F(c.key);const x=h.current.get(c.key);x==null||x.focus()}}},[a,F]),b=a.find(s=>s.key===y),Ee=f==="pill";return e.jsxs("div",{"data-slot":"tabs_root",className:u("tabs_root w-full",Fe[o],r==null?void 0:r.root,Ie),children:[e.jsxs("div",{ref:_,role:"tablist","aria-orientation":"horizontal","data-slot":"tabs_list",className:u("tabs_list overflow-x-auto",qe({size:E,variant:f,radius:L}),f!=="pill"&&"border-border",r==null?void 0:r.list),children:[e.jsx("span",{"data-slot":"tabs_indicator",className:u("tabs_indicator absolute pointer-events-none",Ee?u(Be[L],"shadow-sm top-0.5","bg-slot"):u("bottom-0 h-0.5 rounded-full","bg-slot"),w?"transition-[transform,width] duration-300 ease-out":"",r==null?void 0:r.indicator),style:Ke,"aria-hidden":"true"}),a.map((s,m)=>{const t=s.key===y,v=`tab-${A}-${s.key}`,p=`panel-${A}-${s.key}`;return e.jsxs("button",{ref:c=>{c?h.current.set(s.key,c):h.current.delete(s.key)},id:v,role:"tab",type:"button","aria-selected":t,"aria-controls":p,tabIndex:t?0:-1,"data-slot":"tabs_tab",className:u("tabs_tab",Je({size:E,variant:f,radius:L,color:o,active:t}),s.disabled&&"opacity-50 cursor-not-allowed",r==null?void 0:r.tab,t&&(r==null?void 0:r.tabActive)),onClick:()=>F(s.key,s.disabled),onKeyDown:c=>Ue(c,m),disabled:s.disabled,children:[s.icon&&e.jsx("span",{"aria-hidden":"true",children:s.icon}),s.label]},s.key)})]}),(b==null?void 0:b.content)&&e.jsx("div",{id:`panel-${A}-${b.key}`,role:"tabpanel","aria-labelledby":`tab-${A}-${b.key}`,"data-slot":"tabs_panel",className:u("tabs_panel","py-4 animate-in fade-in slide-in-from-bottom-2 duration-300",r==null?void 0:r.panel),children:b==null?void 0:b.content})]})});d.displayName="Tabs";d.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{color:{defaultValue:{value:'"primary"',computed:!1},required:!1},size:{defaultValue:{value:'"md"',computed:!1},required:!1},variant:{defaultValue:{value:'"default"',computed:!1},required:!1},radius:{defaultValue:{value:'"md"',computed:!1},required:!1}}};const ds={title:"Navigation/Tabs",component:d,tags:["autodocs"],argTypes:{color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"],description:"Theme color"},size:{control:"select",options:["xs","sm","md","lg"],description:"Tab size"},variant:{control:"select",options:["default","solid","soft","pill"],description:"Visual style variant"},radius:{control:"select",options:["xs","sm","md","lg","full"],description:"Border radius (visible on pill variant)"}}},q=[{key:"home",label:"Home",content:e.jsx("div",{className:"p-4",children:"Welcome to the home section. This is where your main content lives."})},{key:"profile",label:"Profile",content:e.jsx("div",{className:"p-4",children:"View and edit your profile information here."})},{key:"settings",label:"Settings",content:e.jsx("div",{className:"p-4",children:"Manage your account settings and preferences."})}],Ge=[{key:"home",label:"Home",icon:e.jsx(k,{className:"w-4 h-4"}),content:e.jsx("div",{className:"p-4",children:"Welcome to the home section. This is where your main content lives."})},{key:"profile",label:"Profile",icon:e.jsx(j,{className:"w-4 h-4"}),content:e.jsx("div",{className:"p-4",children:"View and edit your profile information here."})},{key:"settings",label:"Settings",icon:e.jsx(C,{className:"w-4 h-4"}),content:e.jsx("div",{className:"p-4",children:"Manage your account settings and preferences."})},{key:"notifications",label:"Notifications",icon:e.jsx(S,{className:"w-4 h-4"}),content:e.jsx("div",{className:"p-4",children:"View your recent notifications and alerts."})}],z={args:{items:q,color:"primary",size:"md",variant:"default"}},D={args:{items:Ge,color:"primary",variant:"default"}},R={args:{items:[{key:"home",label:"",icon:e.jsx(k,{className:"w-5 h-5"}),content:e.jsx("div",{className:"p-4",children:"Home content"})},{key:"user",label:"",icon:e.jsx(j,{className:"w-5 h-5"}),content:e.jsx("div",{className:"p-4",children:"User profile content"})},{key:"settings",label:"",icon:e.jsx(C,{className:"w-5 h-5"}),content:e.jsx("div",{className:"p-4",children:"Settings content"})},{key:"notifications",label:"",icon:e.jsx(S,{className:"w-5 h-5"}),content:e.jsx("div",{className:"p-4",children:"Notifications content"})}],color:"primary",variant:"pill"}},M={args:{items:[{key:"active1",label:"Active",content:e.jsx("div",{className:"p-4",children:"This tab is active and clickable."})},{key:"disabled",label:"Disabled",content:e.jsx("div",{className:"p-4",children:"This content is not accessible."}),disabled:!0},{key:"active2",label:"Another Active",content:e.jsx("div",{className:"p-4",children:"This tab is also active."})}],color:"primary"}},P={args:{items:q,defaultActiveKey:"settings",color:"primary"}},V={render:()=>{const[a,l]=n.useState("home");return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>l("home"),className:"px-4 py-2 bg-primary text-white rounded hover:bg-primary/90",children:"Go to Home"}),e.jsx("button",{onClick:()=>l("profile"),className:"px-4 py-2 bg-primary text-white rounded hover:bg-primary/90",children:"Go to Profile"}),e.jsx("button",{onClick:()=>l("settings"),className:"px-4 py-2 bg-primary text-white rounded hover:bg-primary/90",children:"Go to Settings"})]}),e.jsxs("div",{className:"text-sm text-text-secondary",children:["Current tab: ",e.jsx("strong",{children:a})]}),e.jsx(d,{items:q,activeKey:a,onChange:l,color:"primary"})]})}},I={name:"Overflow Scroll (Auto-scroll to Active)",render:()=>{const a=[{key:"home",label:"Home",icon:e.jsx(k,{className:"w-4 h-4"}),content:e.jsx("div",{className:"p-4",children:"Home content"})},{key:"profile",label:"Profile",icon:e.jsx(j,{className:"w-4 h-4"}),content:e.jsx("div",{className:"p-4",children:"Profile content"})},{key:"messages",label:"Messages",icon:e.jsx(Me,{className:"w-4 h-4"}),content:e.jsx("div",{className:"p-4",children:"Messages content"})},{key:"calendar",label:"Calendar",icon:e.jsx(Pe,{className:"w-4 h-4"}),content:e.jsx("div",{className:"p-4",children:"Calendar content"})},{key:"documents",label:"Documents",icon:e.jsx(Ve,{className:"w-4 h-4"}),content:e.jsx("div",{className:"p-4",children:"Documents content"})},{key:"settings",label:"Settings",icon:e.jsx(C,{className:"w-4 h-4"}),content:e.jsx("div",{className:"p-4",children:"Settings content"})},{key:"notifications",label:"Notifications",icon:e.jsx(S,{className:"w-4 h-4"}),content:e.jsx("div",{className:"p-4",children:"Notifications content"})},{key:"cart",label:"Shopping Cart",icon:e.jsx(W,{className:"w-4 h-4"}),content:e.jsx("div",{className:"p-4",children:"Cart content"})}],[l,i]=n.useState("home");return e.jsxs("div",{className:"space-y-4 max-w-md",children:[e.jsx("p",{className:"text-sm text-text-secondary",children:"Click buttons to jump to off-screen tabs — the tab list scrolls automatically."}),e.jsx("div",{className:"flex flex-wrap gap-2",children:a.map(o=>e.jsx("button",{onClick:()=>i(o.key),className:`px-3 py-1 text-xs rounded ${l===o.key?"bg-primary text-white":"bg-surface border border-border text-text-primary hover:bg-surface-hover"}`,children:o.label},o.key))}),e.jsx(d,{items:a,activeKey:l,onChange:i,color:"primary"})]})}},O={render:()=>e.jsxs("div",{className:"max-w-4xl",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Analytics Dashboard"}),e.jsx(d,{items:[{key:"overview",label:"Overview",icon:e.jsx(k,{className:"w-4 h-4"}),content:e.jsx("div",{className:"p-6 space-y-4",children:e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsxs("div",{className:"p-4 bg-surface rounded-lg border border-border",children:[e.jsx("div",{className:"text-sm text-text-secondary",children:"Total Users"}),e.jsx("div",{className:"text-2xl font-bold",children:"1,234"}),e.jsx("div",{className:"text-xs text-success",children:"+12% from last month"})]}),e.jsxs("div",{className:"p-4 bg-surface rounded-lg border border-border",children:[e.jsx("div",{className:"text-sm text-text-secondary",children:"Revenue"}),e.jsx("div",{className:"text-2xl font-bold",children:"$45,678"}),e.jsx("div",{className:"text-xs text-success",children:"+8% from last month"})]}),e.jsxs("div",{className:"p-4 bg-surface rounded-lg border border-border",children:[e.jsx("div",{className:"text-sm text-text-secondary",children:"Active Sessions"}),e.jsx("div",{className:"text-2xl font-bold",children:"567"}),e.jsx("div",{className:"text-xs text-error",children:"-3% from last hour"})]})]})})},{key:"users",label:"Users",icon:e.jsx(j,{className:"w-4 h-4"}),content:e.jsx("div",{className:"p-6",children:e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between items-center p-3 bg-surface rounded border border-border",children:[e.jsx("span",{className:"font-medium",children:"John Doe"}),e.jsx("span",{className:"text-sm text-text-secondary",children:"john@example.com"})]}),e.jsxs("div",{className:"flex justify-between items-center p-3 bg-surface rounded border border-border",children:[e.jsx("span",{className:"font-medium",children:"Jane Smith"}),e.jsx("span",{className:"text-sm text-text-secondary",children:"jane@example.com"})]}),e.jsxs("div",{className:"flex justify-between items-center p-3 bg-surface rounded border border-border",children:[e.jsx("span",{className:"font-medium",children:"Bob Johnson"}),e.jsx("span",{className:"text-sm text-text-secondary",children:"bob@example.com"})]})]})})},{key:"orders",label:"Orders",icon:e.jsx(W,{className:"w-4 h-4"}),content:e.jsx("div",{className:"p-6",children:e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between items-center p-3 bg-surface rounded border border-border",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-medium",children:"Order #1234"}),e.jsx("div",{className:"text-sm text-text-secondary",children:"2 items"})]}),e.jsxs("div",{className:"text-right",children:[e.jsx("div",{className:"font-medium",children:"$89.99"}),e.jsx("div",{className:"text-xs text-success",children:"Delivered"})]})]}),e.jsxs("div",{className:"flex justify-between items-center p-3 bg-surface rounded border border-border",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-medium",children:"Order #1235"}),e.jsx("div",{className:"text-sm text-text-secondary",children:"5 items"})]}),e.jsxs("div",{className:"text-right",children:[e.jsx("div",{className:"font-medium",children:"$234.50"}),e.jsx("div",{className:"text-xs text-warning",children:"Processing"})]})]})]})})}],color:"primary",variant:"default",size:"md"})]})},$={render:()=>e.jsxs("div",{className:"max-w-3xl",children:[e.jsx("h2",{className:"text-xl font-bold mb-4",children:"User Settings"}),e.jsx(d,{items:[{key:"profile",label:"Profile",icon:e.jsx(j,{className:"w-4 h-4"}),content:e.jsxs("div",{className:"p-6 space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"Full Name"}),e.jsx("input",{type:"text",defaultValue:"John Doe",className:"w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"Email"}),e.jsx("input",{type:"email",defaultValue:"john.doe@example.com",className:"w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"Bio"}),e.jsx("textarea",{rows:4,defaultValue:"Software developer passionate about UI/UX design.",className:"w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"})]}),e.jsx("button",{className:"px-4 py-2 bg-primary text-white rounded hover:bg-primary/90",children:"Save Changes"})]})},{key:"notifications",label:"Notifications",icon:e.jsx(S,{className:"w-4 h-4"}),content:e.jsxs("div",{className:"p-6 space-y-4",children:[e.jsxs("label",{className:"flex items-center gap-3",children:[e.jsx("input",{type:"checkbox",defaultChecked:!0,className:"rounded"}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium",children:"Email notifications"}),e.jsx("div",{className:"text-sm text-text-secondary",children:"Receive email about your account activity"})]})]}),e.jsxs("label",{className:"flex items-center gap-3",children:[e.jsx("input",{type:"checkbox",defaultChecked:!0,className:"rounded"}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium",children:"Push notifications"}),e.jsx("div",{className:"text-sm text-text-secondary",children:"Receive push notifications on your device"})]})]}),e.jsxs("label",{className:"flex items-center gap-3",children:[e.jsx("input",{type:"checkbox",className:"rounded"}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium",children:"SMS notifications"}),e.jsx("div",{className:"text-sm text-text-secondary",children:"Receive text messages about important updates"})]})]})]})},{key:"privacy",label:"Privacy",icon:e.jsx(C,{className:"w-4 h-4"}),content:e.jsxs("div",{className:"p-6 space-y-4",children:[e.jsxs("label",{className:"flex items-center gap-3",children:[e.jsx("input",{type:"checkbox",defaultChecked:!0,className:"rounded"}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium",children:"Public profile"}),e.jsx("div",{className:"text-sm text-text-secondary",children:"Make your profile visible to everyone"})]})]}),e.jsxs("label",{className:"flex items-center gap-3",children:[e.jsx("input",{type:"checkbox",className:"rounded"}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium",children:"Show email"}),e.jsx("div",{className:"text-sm text-text-secondary",children:"Display your email on your profile"})]})]}),e.jsxs("label",{className:"flex items-center gap-3",children:[e.jsx("input",{type:"checkbox",defaultChecked:!0,className:"rounded"}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium",children:"Activity status"}),e.jsx("div",{className:"text-sm text-text-secondary",children:"Show when you're online"})]})]})]})}],color:"primary",variant:"pill",size:"md"})]})},K={render:()=>{const a=["xs","sm","md","lg","full"],l=[{key:"overview",label:"Overview",content:e.jsx("div",{className:"p-4",children:"Overview content"})},{key:"analytics",label:"Analytics",content:e.jsx("div",{className:"p-4",children:"Analytics content"})},{key:"reports",label:"Reports",content:e.jsx("div",{className:"p-4",children:"Reports content"})}];return e.jsx("div",{className:"space-y-6",children:a.map(i=>e.jsxs("div",{children:[e.jsxs("div",{className:"text-sm font-medium mb-2 text-text-secondary",children:['radius="',i,'"']}),e.jsx(d,{items:l,variant:"pill",radius:i,color:"primary"})]},i))})}},H={render:()=>{const a=["default","primary","secondary","accent","success","error","warning","info"],l=["default","solid","soft","pill"];return e.jsx("div",{className:"space-y-8",children:l.map(i=>e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-semibold mb-3 capitalize",children:[i," Variant"]}),e.jsx("div",{className:"space-y-4",children:a.map(o=>e.jsx(d,{items:[{key:"1",label:`${o} Tab 1`,content:e.jsxs("div",{className:"p-4",children:["Content for ",o," ",i," Tab 1"]})},{key:"2",label:`${o} Tab 2`,content:e.jsxs("div",{className:"p-4",children:["Content for ",o," ",i," Tab 2"]})},{key:"3",label:`${o} Tab 3`,content:e.jsxs("div",{className:"p-4",children:["Content for ",o," ",i," Tab 3"]})}],color:o,variant:i,size:"md"},o))})]},i))})}},U={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Many Tabs (Test Overflow & Positioning)"}),e.jsx("div",{className:"border border-border rounded-lg p-4",children:e.jsx(d,{items:[{key:"home",label:"Home",icon:e.jsx(k,{className:"w-4 h-4"}),content:e.jsx("div",{className:"p-4",children:"Home content"})},{key:"profile",label:"Profile",icon:e.jsx(j,{className:"w-4 h-4"}),content:e.jsx("div",{className:"p-4",children:"Profile content"})},{key:"messages",label:"Messages",icon:e.jsx(Me,{className:"w-4 h-4"}),content:e.jsx("div",{className:"p-4",children:"Messages content"})},{key:"calendar",label:"Calendar",icon:e.jsx(Pe,{className:"w-4 h-4"}),content:e.jsx("div",{className:"p-4",children:"Calendar content"})},{key:"documents",label:"Documents",icon:e.jsx(Ve,{className:"w-4 h-4"}),content:e.jsx("div",{className:"p-4",children:"Documents content"})},{key:"settings",label:"Settings",icon:e.jsx(C,{className:"w-4 h-4"}),content:e.jsx("div",{className:"p-4",children:"Settings content"})},{key:"notifications",label:"Notifications",icon:e.jsx(S,{className:"w-4 h-4"}),content:e.jsx("div",{className:"p-4",children:"Notifications content"})},{key:"cart",label:"Shopping Cart",icon:e.jsx(W,{className:"w-4 h-4"}),content:e.jsx("div",{className:"p-4",children:"Cart content"})}],color:"primary",variant:"default",size:"md"})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Pills on Mobile"}),e.jsx("div",{className:"border border-border rounded-lg p-4",children:e.jsx(d,{items:[{key:"all",label:"All Items",content:e.jsx("div",{className:"p-4",children:"All items"})},{key:"active",label:"Active",content:e.jsx("div",{className:"p-4",children:"Active items"})},{key:"completed",label:"Completed",content:e.jsx("div",{className:"p-4",children:"Completed items"})},{key:"archived",label:"Archived",content:e.jsx("div",{className:"p-4",children:"Archived items"})}],color:"primary",variant:"pill",size:"md"})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Different Sizes (Resize Window to Test)"}),e.jsx("div",{className:"space-y-4",children:["xs","sm","md","lg"].map(a=>e.jsxs("div",{className:"border border-border rounded-lg p-4",children:[e.jsxs("div",{className:"text-sm font-medium mb-2",children:["Size: ",a]}),e.jsx(d,{items:[{key:"tab1",label:"Tab One",content:e.jsx("div",{className:"p-4",children:"Content 1"})},{key:"tab2",label:"Tab Two",content:e.jsx("div",{className:"p-4",children:"Content 2"})},{key:"tab3",label:"Tab Three",content:e.jsx("div",{className:"p-4",children:"Content 3"})},{key:"tab4",label:"Tab Four",content:e.jsx("div",{className:"p-4",children:"Content 4"})}],color:"primary",variant:"default",size:a})]},a))})]}),e.jsx("div",{className:"p-4 bg-warning/10 border border-warning rounded",children:e.jsxs("p",{className:"text-sm",children:[e.jsx("strong",{children:"Test Instructions:"}),e.jsx("br",{}),"1. Resize your browser window to test mobile/tablet/desktop breakpoints",e.jsx("br",{}),"2. Rotate your device (portrait ↔ landscape)",e.jsx("br",{}),"3. Click different tabs and verify the indicator animates smoothly to the correct position",e.jsx("br",{}),"4. Zoom in/out using browser zoom (Cmd/Ctrl + Plus/Minus)",e.jsx("br",{}),"5. Change system font size and verify indicator follows tab"]})})]}),parameters:{viewport:{defaultViewport:"mobile1"}}};var G,X,Z;z.parameters={...z.parameters,docs:{...(G=z.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    items: basicTabs,
    color: 'primary',
    size: 'md',
    variant: 'default'
  }
}`,...(Z=(X=z.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var Q,Y,ee;D.parameters={...D.parameters,docs:{...(Q=D.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    items: tabsWithIcons,
    color: 'primary',
    variant: 'default'
  }
}`,...(ee=(Y=D.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var se,ae,te;R.parameters={...R.parameters,docs:{...(se=R.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    items: [{
      key: 'home',
      label: '',
      icon: <Home className="w-5 h-5" />,
      content: <div className="p-4">Home content</div>
    }, {
      key: 'user',
      label: '',
      icon: <User className="w-5 h-5" />,
      content: <div className="p-4">User profile content</div>
    }, {
      key: 'settings',
      label: '',
      icon: <Settings className="w-5 h-5" />,
      content: <div className="p-4">Settings content</div>
    }, {
      key: 'notifications',
      label: '',
      icon: <Bell className="w-5 h-5" />,
      content: <div className="p-4">Notifications content</div>
    }],
    color: 'primary',
    variant: 'pill'
  }
}`,...(te=(ae=R.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var ie,re,oe;M.parameters={...M.parameters,docs:{...(ie=M.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    items: [{
      key: 'active1',
      label: 'Active',
      content: <div className="p-4">This tab is active and clickable.</div>
    }, {
      key: 'disabled',
      label: 'Disabled',
      content: <div className="p-4">This content is not accessible.</div>,
      disabled: true
    }, {
      key: 'active2',
      label: 'Another Active',
      content: <div className="p-4">This tab is also active.</div>
    }],
    color: 'primary'
  }
}`,...(oe=(re=M.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ne,le,ce;P.parameters={...P.parameters,docs:{...(ne=P.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    items: basicTabs,
    defaultActiveKey: 'settings',
    color: 'primary'
  }
}`,...(ce=(le=P.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var de,me,pe;V.parameters={...V.parameters,docs:{...(de=V.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => {
    const [activeKey, setActiveKey] = useState('home');
    return <div className="space-y-4">
        <div className="flex gap-2">
          <button onClick={() => setActiveKey('home')} className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90">
            Go to Home
          </button>
          <button onClick={() => setActiveKey('profile')} className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90">
            Go to Profile
          </button>
          <button onClick={() => setActiveKey('settings')} className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90">
            Go to Settings
          </button>
        </div>
        <div className="text-sm text-text-secondary">
          Current tab: <strong>{activeKey}</strong>
        </div>
        <Tabs items={basicTabs} activeKey={activeKey} onChange={setActiveKey} color="primary" />
      </div>;
  }
}`,...(pe=(me=V.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ve,be,xe;I.parameters={...I.parameters,docs:{...(ve=I.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  name: 'Overflow Scroll (Auto-scroll to Active)',
  render: () => {
    const allTabs = [{
      key: 'home',
      label: 'Home',
      icon: <Home className="w-4 h-4" />,
      content: <div className="p-4">Home content</div>
    }, {
      key: 'profile',
      label: 'Profile',
      icon: <User className="w-4 h-4" />,
      content: <div className="p-4">Profile content</div>
    }, {
      key: 'messages',
      label: 'Messages',
      icon: <Mail className="w-4 h-4" />,
      content: <div className="p-4">Messages content</div>
    }, {
      key: 'calendar',
      label: 'Calendar',
      icon: <Calendar className="w-4 h-4" />,
      content: <div className="p-4">Calendar content</div>
    }, {
      key: 'documents',
      label: 'Documents',
      icon: <FileText className="w-4 h-4" />,
      content: <div className="p-4">Documents content</div>
    }, {
      key: 'settings',
      label: 'Settings',
      icon: <Settings className="w-4 h-4" />,
      content: <div className="p-4">Settings content</div>
    }, {
      key: 'notifications',
      label: 'Notifications',
      icon: <Bell className="w-4 h-4" />,
      content: <div className="p-4">Notifications content</div>
    }, {
      key: 'cart',
      label: 'Shopping Cart',
      icon: <ShoppingCart className="w-4 h-4" />,
      content: <div className="p-4">Cart content</div>
    }];
    const [activeKey, setActiveKey] = useState('home');
    return <div className="space-y-4 max-w-md">
        <p className="text-sm text-text-secondary">
          Click buttons to jump to off-screen tabs — the tab list scrolls automatically.
        </p>
        <div className="flex flex-wrap gap-2">
          {allTabs.map(tab => <button key={tab.key} onClick={() => setActiveKey(tab.key)} className={\`px-3 py-1 text-xs rounded \${activeKey === tab.key ? 'bg-primary text-white' : 'bg-surface border border-border text-text-primary hover:bg-surface-hover'}\`}>
              {tab.label}
            </button>)}
        </div>
        <Tabs items={allTabs} activeKey={activeKey} onChange={setActiveKey} color="primary" />
      </div>;
  }
}`,...(xe=(be=I.parameters)==null?void 0:be.docs)==null?void 0:xe.source}}};var ue,fe,he;O.parameters={...O.parameters,docs:{...(ue=O.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => <div className="max-w-4xl">
      <h2 className="text-2xl font-bold mb-4">Analytics Dashboard</h2>
      <Tabs items={[{
      key: 'overview',
      label: 'Overview',
      icon: <Home className="w-4 h-4" />,
      content: <div className="p-6 space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 bg-surface rounded-lg border border-border">
                    <div className="text-sm text-text-secondary">Total Users</div>
                    <div className="text-2xl font-bold">1,234</div>
                    <div className="text-xs text-success">+12% from last month</div>
                  </div>
                  <div className="p-4 bg-surface rounded-lg border border-border">
                    <div className="text-sm text-text-secondary">Revenue</div>
                    <div className="text-2xl font-bold">$45,678</div>
                    <div className="text-xs text-success">+8% from last month</div>
                  </div>
                  <div className="p-4 bg-surface rounded-lg border border-border">
                    <div className="text-sm text-text-secondary">Active Sessions</div>
                    <div className="text-2xl font-bold">567</div>
                    <div className="text-xs text-error">-3% from last hour</div>
                  </div>
                </div>
              </div>
    }, {
      key: 'users',
      label: 'Users',
      icon: <User className="w-4 h-4" />,
      content: <div className="p-6">
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-3 bg-surface rounded border border-border">
                    <span className="font-medium">John Doe</span>
                    <span className="text-sm text-text-secondary">john@example.com</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-surface rounded border border-border">
                    <span className="font-medium">Jane Smith</span>
                    <span className="text-sm text-text-secondary">jane@example.com</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-surface rounded border border-border">
                    <span className="font-medium">Bob Johnson</span>
                    <span className="text-sm text-text-secondary">bob@example.com</span>
                  </div>
                </div>
              </div>
    }, {
      key: 'orders',
      label: 'Orders',
      icon: <ShoppingCart className="w-4 h-4" />,
      content: <div className="p-6">
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-3 bg-surface rounded border border-border">
                    <div>
                      <div className="font-medium">Order #1234</div>
                      <div className="text-sm text-text-secondary">2 items</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">$89.99</div>
                      <div className="text-xs text-success">Delivered</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-surface rounded border border-border">
                    <div>
                      <div className="font-medium">Order #1235</div>
                      <div className="text-sm text-text-secondary">5 items</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">$234.50</div>
                      <div className="text-xs text-warning">Processing</div>
                    </div>
                  </div>
                </div>
              </div>
    }]} color="primary" variant="default" size="md" />
    </div>
}`,...(he=(fe=O.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};var ye,Ne,ge;$.parameters={...$.parameters,docs:{...(ye=$.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => <div className="max-w-3xl">
      <h2 className="text-xl font-bold mb-4">User Settings</h2>
      <Tabs items={[{
      key: 'profile',
      label: 'Profile',
      icon: <User className="w-4 h-4" />,
      content: <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Full Name</label>
                  <input type="text" defaultValue="John Doe" className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input type="email" defaultValue="john.doe@example.com" className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Bio</label>
                  <textarea rows={4} defaultValue="Software developer passionate about UI/UX design." className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <button className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90">
                  Save Changes
                </button>
              </div>
    }, {
      key: 'notifications',
      label: 'Notifications',
      icon: <Bell className="w-4 h-4" />,
      content: <div className="p-6 space-y-4">
                <label className="flex items-center gap-3">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <div>
                    <div className="font-medium">Email notifications</div>
                    <div className="text-sm text-text-secondary">Receive email about your account activity</div>
                  </div>
                </label>
                <label className="flex items-center gap-3">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <div>
                    <div className="font-medium">Push notifications</div>
                    <div className="text-sm text-text-secondary">Receive push notifications on your device</div>
                  </div>
                </label>
                <label className="flex items-center gap-3">
                  <input type="checkbox" className="rounded" />
                  <div>
                    <div className="font-medium">SMS notifications</div>
                    <div className="text-sm text-text-secondary">Receive text messages about important updates</div>
                  </div>
                </label>
              </div>
    }, {
      key: 'privacy',
      label: 'Privacy',
      icon: <Settings className="w-4 h-4" />,
      content: <div className="p-6 space-y-4">
                <label className="flex items-center gap-3">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <div>
                    <div className="font-medium">Public profile</div>
                    <div className="text-sm text-text-secondary">Make your profile visible to everyone</div>
                  </div>
                </label>
                <label className="flex items-center gap-3">
                  <input type="checkbox" className="rounded" />
                  <div>
                    <div className="font-medium">Show email</div>
                    <div className="text-sm text-text-secondary">Display your email on your profile</div>
                  </div>
                </label>
                <label className="flex items-center gap-3">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <div>
                    <div className="font-medium">Activity status</div>
                    <div className="text-sm text-text-secondary">Show when you're online</div>
                  </div>
                </label>
              </div>
    }]} color="primary" variant="pill" size="md" />
    </div>
}`,...(ge=(Ne=$.parameters)==null?void 0:Ne.docs)==null?void 0:ge.source}}};var je,we,ke;K.parameters={...K.parameters,docs:{...(je=K.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: () => {
    const radii = ['xs', 'sm', 'md', 'lg', 'full'] as const;
    const pillTabs = [{
      key: 'overview',
      label: 'Overview',
      content: <div className="p-4">Overview content</div>
    }, {
      key: 'analytics',
      label: 'Analytics',
      content: <div className="p-4">Analytics content</div>
    }, {
      key: 'reports',
      label: 'Reports',
      content: <div className="p-4">Reports content</div>
    }];
    return <div className="space-y-6">
        {radii.map(r => <div key={r}>
            <div className="text-sm font-medium mb-2 text-text-secondary">radius=&quot;{r}&quot;</div>
            <Tabs items={pillTabs} variant="pill" radius={r} color="primary" />
          </div>)}
      </div>;
  }
}`,...(ke=(we=K.parameters)==null?void 0:we.docs)==null?void 0:ke.source}}};var Ce,Se,Te;H.parameters={...H.parameters,docs:{...(Ce=H.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: () => {
    const colors = ['default', 'primary', 'secondary', 'accent', 'success', 'error', 'warning', 'info'] as const;
    const variants = ['default', 'solid', 'soft', 'pill'] as const;
    return <div className="space-y-8">
        {variants.map(v => <div key={v}>
            <h3 className="text-lg font-semibold mb-3 capitalize">{v} Variant</h3>
            <div className="space-y-4">
              {colors.map(c => <Tabs key={c} items={[{
            key: '1',
            label: \`\${c} Tab 1\`,
            content: <div className="p-4">Content for {c} {v} Tab 1</div>
          }, {
            key: '2',
            label: \`\${c} Tab 2\`,
            content: <div className="p-4">Content for {c} {v} Tab 2</div>
          }, {
            key: '3',
            label: \`\${c} Tab 3\`,
            content: <div className="p-4">Content for {c} {v} Tab 3</div>
          }]} color={c} variant={v} size="md" />)}
            </div>
          </div>)}
      </div>;
  }
}`,...(Te=(Se=H.parameters)==null?void 0:Se.docs)==null?void 0:Te.source}}};var Ae,ze,De;U.parameters={...U.parameters,docs:{...(Ae=U.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-3">Many Tabs (Test Overflow & Positioning)</h3>
        <div className="border border-border rounded-lg p-4">
          <Tabs items={[{
          key: 'home',
          label: 'Home',
          icon: <Home className="w-4 h-4" />,
          content: <div className="p-4">Home content</div>
        }, {
          key: 'profile',
          label: 'Profile',
          icon: <User className="w-4 h-4" />,
          content: <div className="p-4">Profile content</div>
        }, {
          key: 'messages',
          label: 'Messages',
          icon: <Mail className="w-4 h-4" />,
          content: <div className="p-4">Messages content</div>
        }, {
          key: 'calendar',
          label: 'Calendar',
          icon: <Calendar className="w-4 h-4" />,
          content: <div className="p-4">Calendar content</div>
        }, {
          key: 'documents',
          label: 'Documents',
          icon: <FileText className="w-4 h-4" />,
          content: <div className="p-4">Documents content</div>
        }, {
          key: 'settings',
          label: 'Settings',
          icon: <Settings className="w-4 h-4" />,
          content: <div className="p-4">Settings content</div>
        }, {
          key: 'notifications',
          label: 'Notifications',
          icon: <Bell className="w-4 h-4" />,
          content: <div className="p-4">Notifications content</div>
        }, {
          key: 'cart',
          label: 'Shopping Cart',
          icon: <ShoppingCart className="w-4 h-4" />,
          content: <div className="p-4">Cart content</div>
        }]} color="primary" variant="default" size="md" />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Pills on Mobile</h3>
        <div className="border border-border rounded-lg p-4">
          <Tabs items={[{
          key: 'all',
          label: 'All Items',
          content: <div className="p-4">All items</div>
        }, {
          key: 'active',
          label: 'Active',
          content: <div className="p-4">Active items</div>
        }, {
          key: 'completed',
          label: 'Completed',
          content: <div className="p-4">Completed items</div>
        }, {
          key: 'archived',
          label: 'Archived',
          content: <div className="p-4">Archived items</div>
        }]} color="primary" variant="pill" size="md" />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Different Sizes (Resize Window to Test)</h3>
        <div className="space-y-4">
          {(['xs', 'sm', 'md', 'lg'] as const).map(size => <div key={size} className="border border-border rounded-lg p-4">
              <div className="text-sm font-medium mb-2">Size: {size}</div>
              <Tabs items={[{
            key: 'tab1',
            label: 'Tab One',
            content: <div className="p-4">Content 1</div>
          }, {
            key: 'tab2',
            label: 'Tab Two',
            content: <div className="p-4">Content 2</div>
          }, {
            key: 'tab3',
            label: 'Tab Three',
            content: <div className="p-4">Content 3</div>
          }, {
            key: 'tab4',
            label: 'Tab Four',
            content: <div className="p-4">Content 4</div>
          }]} color="primary" variant="default" size={size} />
            </div>)}
        </div>
      </div>

      <div className="p-4 bg-warning/10 border border-warning rounded">
        <p className="text-sm">
          <strong>Test Instructions:</strong>
          <br />
          1. Resize your browser window to test mobile/tablet/desktop breakpoints
          <br />
          2. Rotate your device (portrait ↔ landscape)
          <br />
          3. Click different tabs and verify the indicator animates smoothly to the correct position
          <br />
          4. Zoom in/out using browser zoom (Cmd/Ctrl + Plus/Minus)
          <br />
          5. Change system font size and verify indicator follows tab
        </p>
      </div>
    </div>,
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...(De=(ze=U.parameters)==null?void 0:ze.docs)==null?void 0:De.source}}};const ms=["Default","WithIcons","IconsOnly","WithDisabledTabs","WithDefaultActive","ControlledMode","OverflowScrollDemo","Dashboard","UserSettings","RadiusComparison","ColorVariantMatrix","MobileResponsiveTest"];export{H as ColorVariantMatrix,V as ControlledMode,O as Dashboard,z as Default,R as IconsOnly,U as MobileResponsiveTest,I as OverflowScrollDemo,K as RadiusComparison,$ as UserSettings,P as WithDefaultActive,M as WithDisabledTabs,D as WithIcons,ms as __namedExportsOrder,ds as default};
