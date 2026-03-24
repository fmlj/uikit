import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as Fe,r as d}from"./index-ZH-6pyQh.js";import{c as g}from"./utils-_uLxnvdl.js";import{c as Ie}from"./variants-C8qliDOr.js";import{B as f}from"./index-23ax1BAm.js";import{Z as _e}from"./zap-Bp22WUqo.js";import{S as Ne}from"./shield-syPj5L6h.js";import{c as qe}from"./createLucideIcon-BXJdBs6C.js";import{U as _}from"./users-CmrXRWI9.js";import{S as q}from"./settings-D1wlBKo1.js";import{B as De}from"./bell-BD3KA5A_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-ZW2Bszwo.js";import"./index-Bo-loign.js";import"./index-BoArNvwV.js";import"./useRipple-BuuTbn0W.js";/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ue=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],G=qe("chart-column",Ue);function We(t){return typeof t=="function"?t():document.querySelector(t)}function Xe(t){return typeof window>"u"?"0px":getComputedStyle(t).borderRadius||"0px"}function Ye(t,r,a){const l=r.split("-")[0],s=r.split("-")[1];let h=0,c=0;const C=t.left+t.width/2,T=t.top+t.height/2;return l==="bottom"?(h=t.bottom+a,c=s==="start"?t.left:s==="end"?t.right:C):l==="top"?(h=t.top-a,c=s==="start"?t.left:s==="end"?t.right:C):l==="left"?(h=s==="start"?t.top:s==="end"?t.bottom:T,c=t.left-a):(h=s==="start"?t.top:s==="end"?t.bottom:T,c=t.right+a),{top:h,left:c}}function Ze(t,r,a){const l=r.split("-")[0],s=r.split("-")[1],h=Ye(t,r,a),c={position:"fixed",top:h.top,left:h.left};return l==="bottom"?s?s==="end"&&(c.transform="translateX(-100%)"):c.transform="translateX(-50%)":l==="top"?s?s==="start"?c.transform="translateY(-100%)":c.transform="translate(-100%, -100%)":c.transform="translate(-50%, -100%)":l==="left"?s?s==="start"?c.transform="translateX(-100%)":c.transform="translate(-100%, -100%)":c.transform="translate(-100%, -50%)":s?s==="end"&&(c.transform="translateY(-100%)"):c.transform="translateY(-50%)",c}const Ge={xs:{padding:4,gap:8,popover:"p-3 max-w-[260px]",title:"text-sm font-semibold",desc:"text-xs",btn:"h-6 px-2.5 text-xs"},sm:{padding:6,gap:10,popover:"p-3.5 max-w-[300px]",title:"text-sm font-semibold",desc:"text-sm",btn:"h-7 px-3 text-xs"},md:{padding:8,gap:12,popover:"p-4 max-w-[340px]",title:"text-base font-semibold",desc:"text-sm",btn:"h-8 px-3 text-sm"},lg:{padding:10,gap:14,popover:"p-5 max-w-[400px]",title:"text-lg font-semibold",desc:"text-base",btn:"h-9 px-4 text-sm"}},m="cubic-bezier(0.4, 0, 0.2, 1)",u="350ms",b=Fe.memo(({steps:t,open:r,onOpenChange:a,current:l,onCurrentChange:s,color:h="primary",size:c="md",showProgress:C=!0,showSkip:T=!0,skipText:ye="Skip",finishText:je="Finish",nextText:Se="Next",prevText:we="Back",onFinish:M,onSkip:A,overlayClickable:Ce=!1,className:Te,classNames:i})=>{const[ke,ze]=d.useState(!1),[Oe,D]=d.useState(0),y=r!==void 0?r:ke,v=l!==void 0?l:Oe,[x,L]=d.useState(null),[U,Be]=d.useState("0px"),[j,V]=d.useState(!1),Pe=d.useRef(null),W=d.useCallback(o=>{r===void 0&&ze(o),a==null||a(o)},[r,a]),X=d.useCallback(o=>{l===void 0&&D(o),s==null||s(o)},[l,s]),n=t[v],p=Ge[c];d.useEffect(()=>{if(y){V(!0);const o=setTimeout(()=>V(!1),400);return()=>clearTimeout(o)}},[y]),d.useEffect(()=>{if(!y||!n){L(null);return}const o=We(n.target);if(!o){L(null);return}const N=()=>{L(o.getBoundingClientRect()),Be(Xe(o))};N(),o.scrollIntoView({behavior:"smooth",block:"center"});const I=[window];let S=o.parentElement;for(;S;){const{overflow:w,overflowX:Le,overflowY:Ve}=getComputedStyle(S);/auto|scroll/.test(w+Le+Ve)&&I.push(S),S=S.parentElement}const Z=new ResizeObserver(N);Z.observe(o);for(const w of I)w.addEventListener("scroll",N,{passive:!0});return window.addEventListener("resize",N,{passive:!0}),()=>{Z.disconnect();for(const w of I)w.removeEventListener("scroll",N);window.removeEventListener("resize",N)}},[y,v,n]);const $e=()=>{var o;(o=n==null?void 0:n.onNext)==null||o.call(n),v<t.length-1?X(v+1):(W(!1),M==null||M())},Re=()=>{var o;(o=n==null?void 0:n.onPrev)==null||o.call(n),v>0&&X(v-1)},F=()=>{W(!1),l===void 0&&D(0),A==null||A()};if(d.useEffect(()=>{if(!y)return;const o=N=>{N.key==="Escape"&&F()};return document.addEventListener("keydown",o),()=>document.removeEventListener("keydown",o)},[y]),!y||!n)return null;const Ee=n.placement||"bottom",Y=v===t.length-1,Me=x?{position:"fixed",top:x.top-p.padding,left:x.left-p.padding,width:x.width+p.padding*2,height:x.height+p.padding*2,borderRadius:U,boxShadow:"0 0 0 9999px rgba(0, 0, 0, 0.5)",transition:j?"none":`top ${u} ${m}, left ${u} ${m}, width ${u} ${m}, height ${u} ${m}, border-radius ${u} ${m}`,pointerEvents:"none",opacity:j?0:1,animation:j?"none":void 0}:{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)"},Ae=x?{...Ze(x,Ee,p.gap),transition:j?"none":`top ${u} ${m}, left ${u} ${m}, bottom ${u} ${m}, right ${u} ${m}`}:{position:"fixed",opacity:0};return e.jsxs("div",{"data-slot":"root",className:g("tour_root",Ie[h],i==null?void 0:i.root,Te),style:{opacity:j?0:1,transition:`opacity 300ms ${m}`},ref:o=>{o&&j&&requestAnimationFrame(()=>V(!1))},children:[e.jsx("div",{"data-slot":"overlay",className:g("tour_overlay","z-[var(--z-overlay)]",i==null?void 0:i.overlay),onClick:Ce?F:void 0,style:Me}),x&&e.jsx("div",{"data-slot":"highlight",className:"fixed z-[var(--z-overlay)] pointer-events-none",style:{top:x.top-p.padding,left:x.left-p.padding,width:x.width+p.padding*2,height:x.height+p.padding*2,borderRadius:U,boxShadow:"0 0 0 2px var(--color-slot, #3b82f6), 0 0 12px 2px color-mix(in srgb, var(--color-slot, #3b82f6) 30%, transparent)",transition:`top ${u} ${m}, left ${u} ${m}, width ${u} ${m}, height ${u} ${m}, border-radius ${u} ${m}`}}),e.jsxs("div",{ref:Pe,"data-slot":"popover",className:g("tour_popover","z-[calc(var(--z-overlay)+1)] rounded-lg border border-border bg-background shadow-lg",p.popover,i==null?void 0:i.popover),style:Ae,children:[n.cover&&e.jsx("div",{"data-slot":"cover",className:g("tour_cover","mb-3 rounded-md overflow-hidden",i==null?void 0:i.cover),children:n.cover}),e.jsx("div",{"data-slot":"title",className:g("tour_title",p.title,"text-text-primary",i==null?void 0:i.title),children:n.title}),n.description&&e.jsx("div",{"data-slot":"description",className:g("tour_description",p.desc,"text-text-secondary mt-1",i==null?void 0:i.description),children:n.description}),e.jsxs("div",{"data-slot":"footer",className:g("tour_footer","flex items-center justify-between mt-3 gap-2",i==null?void 0:i.footer),children:[e.jsx("div",{className:"flex items-center gap-2",children:C&&e.jsxs("span",{"data-slot":"indicator",className:g("tour_indicator","text-xs text-text-secondary",i==null?void 0:i.indicator),children:[v+1," / ",t.length]})}),e.jsxs("div",{className:"flex items-center gap-2",children:[T&&!Y&&e.jsx("button",{type:"button",onClick:F,className:g("inline-flex items-center justify-center rounded-md text-text-secondary hover:text-text-primary transition-colors font-medium cursor-pointer",p.btn),children:ye}),v>0&&e.jsx("button",{type:"button",onClick:Re,className:g("inline-flex items-center justify-center rounded-md border border-border bg-background text-text-primary hover:bg-surface transition-colors font-medium cursor-pointer",p.btn),children:n.prevText||we}),e.jsx("button",{type:"button",onClick:$e,className:g("inline-flex items-center justify-center rounded-md bg-slot text-slot-fg hover:bg-slot-90 transition-colors font-medium cursor-pointer",p.btn),children:Y?je:n.nextText||Se})]})]})]})]})});b.displayName="Tour";b.__docgenInfo={description:"",methods:[],displayName:"Tour",props:{color:{defaultValue:{value:"'primary'",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1},showProgress:{defaultValue:{value:"true",computed:!1},required:!1},showSkip:{defaultValue:{value:"true",computed:!1},required:!1},skipText:{defaultValue:{value:"'Skip'",computed:!1},required:!1},finishText:{defaultValue:{value:"'Finish'",computed:!1},required:!1},nextText:{defaultValue:{value:"'Next'",computed:!1},required:!1},prevText:{defaultValue:{value:"'Back'",computed:!1},required:!1},overlayClickable:{defaultValue:{value:"false",computed:!1},required:!1}}};const mt={title:"Feedback/Tour",component:b,tags:["autodocs"],parameters:{docs:{description:{component:"Step-by-step guided tour that highlights elements on the page. Supports multiple placements, sizes, colors, and custom content per step."}}}},k={render:()=>{const[t,r]=d.useState(!1);return e.jsxs("div",{className:"p-12 space-y-8",children:[e.jsx(f,{id:"tour-start",onClick:()=>r(!0),children:"Start Tour"}),e.jsxs("div",{className:"grid grid-cols-3 gap-6",children:[e.jsxs("div",{id:"tour-feature-1",className:"p-6 rounded-lg border border-border",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Feature 1"}),e.jsx("p",{className:"text-sm text-text-secondary",children:"Dashboard analytics and insights"})]}),e.jsxs("div",{id:"tour-feature-2",className:"p-6 rounded-lg border border-border",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Feature 2"}),e.jsx("p",{className:"text-sm text-text-secondary",children:"Team collaboration tools"})]}),e.jsxs("div",{id:"tour-feature-3",className:"p-6 rounded-lg border border-border",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Feature 3"}),e.jsx("p",{className:"text-sm text-text-secondary",children:"Real-time notifications"})]})]}),e.jsx(b,{open:t,onOpenChange:r,onFinish:()=>alert("Tour complete!"),steps:[{target:"#tour-start",title:"Welcome!",description:"Click here anytime to restart the tour.",placement:"bottom"},{target:"#tour-feature-1",title:"Analytics",description:"View your dashboard analytics and key metrics here."},{target:"#tour-feature-2",title:"Collaboration",description:"Invite team members and work together in real-time."},{target:"#tour-feature-3",title:"Stay Updated",description:"Never miss important updates with real-time notifications."}]})]})}},z={render:()=>{const[t,r]=d.useState(!1);return e.jsxs("div",{className:"p-16",children:[e.jsx("div",{className:"flex justify-center",children:e.jsx(f,{id:"placement-target",onClick:()=>r(!0),children:"Start Placement Tour"})}),e.jsxs("div",{className:"mt-8 grid grid-cols-4 gap-4",children:[e.jsx("div",{id:"pl-top",className:"p-4 rounded-lg border border-border text-center text-sm",children:"Top"}),e.jsx("div",{id:"pl-right",className:"p-4 rounded-lg border border-border text-center text-sm",children:"Right"}),e.jsx("div",{id:"pl-bottom",className:"p-4 rounded-lg border border-border text-center text-sm",children:"Bottom"}),e.jsx("div",{id:"pl-left",className:"p-4 rounded-lg border border-border text-center text-sm",children:"Left"})]}),e.jsx(b,{open:t,onOpenChange:r,steps:[{target:"#pl-top",title:"Top Placement",description:"Popover appears above the target.",placement:"top"},{target:"#pl-right",title:"Right Placement",description:"Popover appears to the right.",placement:"right"},{target:"#pl-bottom",title:"Bottom Placement",description:"Popover appears below the target.",placement:"bottom"},{target:"#pl-left",title:"Left Placement",description:"Popover appears to the left.",placement:"left"}]})]})}},O={render:()=>{const[t,r]=d.useState(!1);return e.jsxs("div",{className:"p-12 space-y-8",children:[e.jsx(f,{id:"size-start",onClick:()=>r(!0),children:"Start Size Tour"}),e.jsxs("div",{className:"grid grid-cols-4 gap-4",children:[e.jsx("div",{id:"size-xs",className:"p-4 rounded-lg border border-border text-center",children:e.jsx("span",{className:"text-xs font-mono",children:"xs"})}),e.jsx("div",{id:"size-sm",className:"p-4 rounded-lg border border-border text-center",children:e.jsx("span",{className:"text-sm font-mono",children:"sm"})}),e.jsx("div",{id:"size-md",className:"p-4 rounded-lg border border-border text-center",children:e.jsx("span",{className:"text-base font-mono",children:"md"})}),e.jsx("div",{id:"size-lg",className:"p-4 rounded-lg border border-border text-center",children:e.jsx("span",{className:"text-lg font-mono",children:"lg"})})]}),e.jsx(b,{open:t,onOpenChange:r,steps:[{target:"#size-xs",title:"Extra Small",description:"Compact popover for tight spaces."},{target:"#size-sm",title:"Small",description:"Slightly larger with more breathing room."},{target:"#size-md",title:"Medium",description:"Default size. Works for most use cases."},{target:"#size-lg",title:"Large",description:"Maximum readability with generous padding."}],size:"md"})]})}},B={render:()=>{const[t,r]=d.useState(!1),[a,l]=d.useState("primary");return e.jsxs("div",{className:"p-12 space-y-6",children:[e.jsx("div",{className:"flex gap-2 flex-wrap",children:["default","primary","success","warning","error","info"].map(s=>e.jsx(f,{size:"sm",variant:a===s?"solid":"outline",color:s==="default"?void 0:s,onClick:()=>{l(s),r(!0)},children:s},s))}),e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsxs("div",{id:"color-1",className:"p-5 rounded-lg border border-border",children:[e.jsx("h4",{className:"font-medium text-sm mb-1",children:"Step 1"}),e.jsx("p",{className:"text-xs text-text-secondary",children:"First step content"})]}),e.jsxs("div",{id:"color-2",className:"p-5 rounded-lg border border-border",children:[e.jsx("h4",{className:"font-medium text-sm mb-1",children:"Step 2"}),e.jsx("p",{className:"text-xs text-text-secondary",children:"Second step content"})]}),e.jsxs("div",{id:"color-3",className:"p-5 rounded-lg border border-border",children:[e.jsx("h4",{className:"font-medium text-sm mb-1",children:"Step 3"}),e.jsx("p",{className:"text-xs text-text-secondary",children:"Third step content"})]})]}),e.jsx(b,{open:t,onOpenChange:r,color:a,steps:[{target:"#color-1",title:"Colored Tour",description:`This tour uses the "${a}" color theme.`},{target:"#color-2",title:"Consistent Theming",description:"All steps share the same color."},{target:"#color-3",title:"Done!",description:"The color prop applies to buttons, progress indicators, and highlight."}]})]})}},P={render:()=>{const[t,r]=d.useState(!1);return e.jsxs("div",{className:"p-12 space-y-8",children:[e.jsx(f,{id:"cover-start",color:"primary",onClick:()=>r(!0),children:"Start Onboarding"}),e.jsxs("div",{className:"grid grid-cols-3 gap-6",children:[e.jsxs("div",{id:"cover-analytics",className:"p-6 rounded-lg border border-border flex items-center gap-3",children:[e.jsx(G,{className:"w-8 h-8 text-primary"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-sm",children:"Analytics"}),e.jsx("p",{className:"text-xs text-text-secondary",children:"Track metrics"})]})]}),e.jsxs("div",{id:"cover-team",className:"p-6 rounded-lg border border-border flex items-center gap-3",children:[e.jsx(_,{className:"w-8 h-8 text-success"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-sm",children:"Team"}),e.jsx("p",{className:"text-xs text-text-secondary",children:"Manage members"})]})]}),e.jsxs("div",{id:"cover-settings",className:"p-6 rounded-lg border border-border flex items-center gap-3",children:[e.jsx(q,{className:"w-8 h-8 text-warning"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-sm",children:"Settings"}),e.jsx("p",{className:"text-xs text-text-secondary",children:"Configure app"})]})]})]}),e.jsx(b,{open:t,onOpenChange:r,color:"primary",size:"lg",steps:[{target:"#cover-analytics",title:"Analytics Dashboard",description:"Monitor real-time metrics, user engagement, and performance data.",cover:e.jsx("div",{className:"rounded-md bg-primary/5 border border-primary/20 p-4 flex items-center justify-center",children:e.jsx(G,{className:"w-12 h-12 text-primary"})})},{target:"#cover-team",title:"Team Management",description:"Invite team members, assign roles, and manage permissions.",cover:e.jsx("div",{className:"rounded-md bg-success/5 border border-success/20 p-4 flex items-center justify-center",children:e.jsx(_,{className:"w-12 h-12 text-success"})})},{target:"#cover-settings",title:"App Settings",description:"Customize your workspace, integrations, and notification preferences.",cover:e.jsx("div",{className:"rounded-md bg-warning/5 border border-warning/20 p-4 flex items-center justify-center",children:e.jsx(q,{className:"w-12 h-12 text-warning"})})}]})]})}},$={render:()=>{const[t,r]=d.useState(!1),[a,l]=d.useState(0);return e.jsxs("div",{className:"p-12 space-y-6",children:[e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx(f,{onClick:()=>{l(0),r(!0)},children:"Start Tour"}),e.jsxs("span",{className:"text-sm text-text-secondary",children:["Step: ",a+1," / 3"]}),e.jsxs("div",{className:"flex gap-1",children:[e.jsx(f,{size:"sm",variant:"outline",onClick:()=>l(Math.max(0,a-1)),disabled:a===0,children:"Prev"}),e.jsx(f,{size:"sm",variant:"outline",onClick:()=>l(Math.min(2,a+1)),disabled:a===2,children:"Next"})]})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsx("div",{id:"ctrl-1",className:"p-5 rounded-lg border border-border",children:"Step 1"}),e.jsx("div",{id:"ctrl-2",className:"p-5 rounded-lg border border-border",children:"Step 2"}),e.jsx("div",{id:"ctrl-3",className:"p-5 rounded-lg border border-border",children:"Step 3"})]}),e.jsx(b,{open:t,onOpenChange:r,current:a,onCurrentChange:l,steps:[{target:"#ctrl-1",title:"Step 1",description:"Controlled via external state."},{target:"#ctrl-2",title:"Step 2",description:"Use onCurrentChange to sync."},{target:"#ctrl-3",title:"Step 3",description:"Buttons outside control navigation."}]})]})}},R={render:()=>{const[t,r]=d.useState(!1);return e.jsxs("div",{className:"p-12 space-y-8",children:[e.jsx(f,{id:"label-start",onClick:()=>r(!0),children:"Iniciar recorrido"}),e.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[e.jsxs("div",{id:"label-1",className:"p-6 rounded-lg border border-border",children:[e.jsx(_e,{className:"w-6 h-6 text-warning mb-2"}),e.jsx("h4",{className:"font-semibold text-sm",children:"Rendimiento"})]}),e.jsxs("div",{id:"label-2",className:"p-6 rounded-lg border border-border",children:[e.jsx(Ne,{className:"w-6 h-6 text-success mb-2"}),e.jsx("h4",{className:"font-semibold text-sm",children:"Seguridad"})]})]}),e.jsx(b,{open:t,onOpenChange:r,nextText:"Siguiente",prevText:"Anterior",skipText:"Omitir",finishText:"Finalizar",showSkip:!0,showProgress:!0,steps:[{target:"#label-start",title:"Bienvenido",description:"Este es un recorrido con etiquetas en español.",placement:"bottom"},{target:"#label-1",title:"Rendimiento",description:"Monitorea el rendimiento de tu aplicación."},{target:"#label-2",title:"Seguridad",description:"Configura las opciones de seguridad de tu cuenta."}]})]})}},E={render:()=>{const[t,r]=d.useState(!1);return e.jsxs("div",{className:"p-12 space-y-8",children:[e.jsx(f,{id:"prog-start",onClick:()=>r(!0),children:"Start Tour with Progress"}),e.jsxs("div",{className:"grid grid-cols-4 gap-4",children:[e.jsxs("div",{id:"prog-1",className:"p-4 rounded-lg border border-border text-center text-sm",children:[e.jsx(De,{className:"w-5 h-5 mx-auto mb-1 text-info"}),"Notifications"]}),e.jsxs("div",{id:"prog-2",className:"p-4 rounded-lg border border-border text-center text-sm",children:[e.jsx(_,{className:"w-5 h-5 mx-auto mb-1 text-primary"}),"Team"]}),e.jsxs("div",{id:"prog-3",className:"p-4 rounded-lg border border-border text-center text-sm",children:[e.jsx(q,{className:"w-5 h-5 mx-auto mb-1 text-warning"}),"Settings"]}),e.jsxs("div",{id:"prog-4",className:"p-4 rounded-lg border border-border text-center text-sm",children:[e.jsx(Ne,{className:"w-5 h-5 mx-auto mb-1 text-success"}),"Security"]})]}),e.jsx(b,{open:t,onOpenChange:r,showProgress:!0,showSkip:!0,color:"primary",onSkip:()=>alert("Tour skipped"),onFinish:()=>alert("Tour finished!"),steps:[{target:"#prog-1",title:"Notifications",description:"Configure how you receive alerts and updates."},{target:"#prog-2",title:"Team",description:"Manage your team members and their roles."},{target:"#prog-3",title:"Settings",description:"Customize your workspace preferences."},{target:"#prog-4",title:"Security",description:"Set up two-factor authentication and security rules."}]})]})}};var H,J,K;k.parameters={...k.parameters,docs:{...(H=k.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div className="p-12 space-y-8">
        <Button id="tour-start" onClick={() => setOpen(true)}>
          Start Tour
        </Button>

        <div className="grid grid-cols-3 gap-6">
          <div id="tour-feature-1" className="p-6 rounded-lg border border-border">
            <h3 className="font-semibold mb-2">Feature 1</h3>
            <p className="text-sm text-text-secondary">
              Dashboard analytics and insights
            </p>
          </div>
          <div id="tour-feature-2" className="p-6 rounded-lg border border-border">
            <h3 className="font-semibold mb-2">Feature 2</h3>
            <p className="text-sm text-text-secondary">
              Team collaboration tools
            </p>
          </div>
          <div id="tour-feature-3" className="p-6 rounded-lg border border-border">
            <h3 className="font-semibold mb-2">Feature 3</h3>
            <p className="text-sm text-text-secondary">
              Real-time notifications
            </p>
          </div>
        </div>

        <Tour open={open} onOpenChange={setOpen} onFinish={() => alert('Tour complete!')} steps={[{
        target: '#tour-start',
        title: 'Welcome!',
        description: 'Click here anytime to restart the tour.',
        placement: 'bottom'
      }, {
        target: '#tour-feature-1',
        title: 'Analytics',
        description: 'View your dashboard analytics and key metrics here.'
      }, {
        target: '#tour-feature-2',
        title: 'Collaboration',
        description: 'Invite team members and work together in real-time.'
      }, {
        target: '#tour-feature-3',
        title: 'Stay Updated',
        description: 'Never miss important updates with real-time notifications.'
      }]} />
      </div>;
  }
}`,...(K=(J=k.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,ee,te;z.parameters={...z.parameters,docs:{...(Q=z.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div className="p-16">
        <div className="flex justify-center">
          <Button id="placement-target" onClick={() => setOpen(true)}>
            Start Placement Tour
          </Button>
        </div>

        <div className="mt-8 grid grid-cols-4 gap-4">
          <div id="pl-top" className="p-4 rounded-lg border border-border text-center text-sm">Top</div>
          <div id="pl-right" className="p-4 rounded-lg border border-border text-center text-sm">Right</div>
          <div id="pl-bottom" className="p-4 rounded-lg border border-border text-center text-sm">Bottom</div>
          <div id="pl-left" className="p-4 rounded-lg border border-border text-center text-sm">Left</div>
        </div>

        <Tour open={open} onOpenChange={setOpen} steps={[{
        target: '#pl-top',
        title: 'Top Placement',
        description: 'Popover appears above the target.',
        placement: 'top'
      }, {
        target: '#pl-right',
        title: 'Right Placement',
        description: 'Popover appears to the right.',
        placement: 'right'
      }, {
        target: '#pl-bottom',
        title: 'Bottom Placement',
        description: 'Popover appears below the target.',
        placement: 'bottom'
      }, {
        target: '#pl-left',
        title: 'Left Placement',
        description: 'Popover appears to the left.',
        placement: 'left'
      }]} />
      </div>;
  }
}`,...(te=(ee=z.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var re,se,oe;O.parameters={...O.parameters,docs:{...(re=O.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div className="p-12 space-y-8">
        <Button id="size-start" onClick={() => setOpen(true)}>
          Start Size Tour
        </Button>

        <div className="grid grid-cols-4 gap-4">
          <div id="size-xs" className="p-4 rounded-lg border border-border text-center">
            <span className="text-xs font-mono">xs</span>
          </div>
          <div id="size-sm" className="p-4 rounded-lg border border-border text-center">
            <span className="text-sm font-mono">sm</span>
          </div>
          <div id="size-md" className="p-4 rounded-lg border border-border text-center">
            <span className="text-base font-mono">md</span>
          </div>
          <div id="size-lg" className="p-4 rounded-lg border border-border text-center">
            <span className="text-lg font-mono">lg</span>
          </div>
        </div>

        <Tour open={open} onOpenChange={setOpen} steps={[{
        target: '#size-xs',
        title: 'Extra Small',
        description: 'Compact popover for tight spaces.'
      }, {
        target: '#size-sm',
        title: 'Small',
        description: 'Slightly larger with more breathing room.'
      }, {
        target: '#size-md',
        title: 'Medium',
        description: 'Default size. Works for most use cases.'
      }, {
        target: '#size-lg',
        title: 'Large',
        description: 'Maximum readability with generous padding.'
      }]} size="md" />
      </div>;
  }
}`,...(oe=(se=O.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ie,ae,ne;B.parameters={...B.parameters,docs:{...(ie=B.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const [color, setColor] = useState<'default' | 'primary' | 'success' | 'warning' | 'error' | 'info'>('primary');
    return <div className="p-12 space-y-6">
        <div className="flex gap-2 flex-wrap">
          {(['default', 'primary', 'success', 'warning', 'error', 'info'] as const).map(c => <Button key={c} size="sm" variant={color === c ? 'solid' : 'outline'} color={c === 'default' ? undefined : c} onClick={() => {
          setColor(c);
          setOpen(true);
        }}>
              {c}
            </Button>)}
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div id="color-1" className="p-5 rounded-lg border border-border">
            <h4 className="font-medium text-sm mb-1">Step 1</h4>
            <p className="text-xs text-text-secondary">First step content</p>
          </div>
          <div id="color-2" className="p-5 rounded-lg border border-border">
            <h4 className="font-medium text-sm mb-1">Step 2</h4>
            <p className="text-xs text-text-secondary">Second step content</p>
          </div>
          <div id="color-3" className="p-5 rounded-lg border border-border">
            <h4 className="font-medium text-sm mb-1">Step 3</h4>
            <p className="text-xs text-text-secondary">Third step content</p>
          </div>
        </div>

        <Tour open={open} onOpenChange={setOpen} color={color} steps={[{
        target: '#color-1',
        title: 'Colored Tour',
        description: \`This tour uses the "\${color}" color theme.\`
      }, {
        target: '#color-2',
        title: 'Consistent Theming',
        description: 'All steps share the same color.'
      }, {
        target: '#color-3',
        title: 'Done!',
        description: 'The color prop applies to buttons, progress indicators, and highlight.'
      }]} />
      </div>;
  }
}`,...(ne=(ae=B.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var de,le,ce;P.parameters={...P.parameters,docs:{...(de=P.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div className="p-12 space-y-8">
        <Button id="cover-start" color="primary" onClick={() => setOpen(true)}>
          Start Onboarding
        </Button>

        <div className="grid grid-cols-3 gap-6">
          <div id="cover-analytics" className="p-6 rounded-lg border border-border flex items-center gap-3">
            <BarChart3 className="w-8 h-8 text-primary" />
            <div>
              <h4 className="font-semibold text-sm">Analytics</h4>
              <p className="text-xs text-text-secondary">Track metrics</p>
            </div>
          </div>
          <div id="cover-team" className="p-6 rounded-lg border border-border flex items-center gap-3">
            <Users className="w-8 h-8 text-success" />
            <div>
              <h4 className="font-semibold text-sm">Team</h4>
              <p className="text-xs text-text-secondary">Manage members</p>
            </div>
          </div>
          <div id="cover-settings" className="p-6 rounded-lg border border-border flex items-center gap-3">
            <Settings className="w-8 h-8 text-warning" />
            <div>
              <h4 className="font-semibold text-sm">Settings</h4>
              <p className="text-xs text-text-secondary">Configure app</p>
            </div>
          </div>
        </div>

        <Tour open={open} onOpenChange={setOpen} color="primary" size="lg" steps={[{
        target: '#cover-analytics',
        title: 'Analytics Dashboard',
        description: 'Monitor real-time metrics, user engagement, and performance data.',
        cover: <div className="rounded-md bg-primary/5 border border-primary/20 p-4 flex items-center justify-center">
                  <BarChart3 className="w-12 h-12 text-primary" />
                </div>
      }, {
        target: '#cover-team',
        title: 'Team Management',
        description: 'Invite team members, assign roles, and manage permissions.',
        cover: <div className="rounded-md bg-success/5 border border-success/20 p-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-success" />
                </div>
      }, {
        target: '#cover-settings',
        title: 'App Settings',
        description: 'Customize your workspace, integrations, and notification preferences.',
        cover: <div className="rounded-md bg-warning/5 border border-warning/20 p-4 flex items-center justify-center">
                  <Settings className="w-12 h-12 text-warning" />
                </div>
      }]} />
      </div>;
  }
}`,...(ce=(le=P.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var pe,me,ue;$.parameters={...$.parameters,docs:{...(pe=$.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const [current, setCurrent] = useState(0);
    return <div className="p-12 space-y-6">
        <div className="flex gap-2 items-center">
          <Button onClick={() => {
          setCurrent(0);
          setOpen(true);
        }}>
            Start Tour
          </Button>
          <span className="text-sm text-text-secondary">
            Step: {current + 1} / 3
          </span>
          <div className="flex gap-1">
            <Button size="sm" variant="outline" onClick={() => setCurrent(Math.max(0, current - 1))} disabled={current === 0}>
              Prev
            </Button>
            <Button size="sm" variant="outline" onClick={() => setCurrent(Math.min(2, current + 1))} disabled={current === 2}>
              Next
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div id="ctrl-1" className="p-5 rounded-lg border border-border">Step 1</div>
          <div id="ctrl-2" className="p-5 rounded-lg border border-border">Step 2</div>
          <div id="ctrl-3" className="p-5 rounded-lg border border-border">Step 3</div>
        </div>

        <Tour open={open} onOpenChange={setOpen} current={current} onCurrentChange={setCurrent} steps={[{
        target: '#ctrl-1',
        title: 'Step 1',
        description: 'Controlled via external state.'
      }, {
        target: '#ctrl-2',
        title: 'Step 2',
        description: 'Use onCurrentChange to sync.'
      }, {
        target: '#ctrl-3',
        title: 'Step 3',
        description: 'Buttons outside control navigation.'
      }]} />
      </div>;
  }
}`,...(ue=(me=$.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var xe,ge,be;R.parameters={...R.parameters,docs:{...(xe=R.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div className="p-12 space-y-8">
        <Button id="label-start" onClick={() => setOpen(true)}>
          Iniciar recorrido
        </Button>

        <div className="grid grid-cols-2 gap-6">
          <div id="label-1" className="p-6 rounded-lg border border-border">
            <Zap className="w-6 h-6 text-warning mb-2" />
            <h4 className="font-semibold text-sm">Rendimiento</h4>
          </div>
          <div id="label-2" className="p-6 rounded-lg border border-border">
            <Shield className="w-6 h-6 text-success mb-2" />
            <h4 className="font-semibold text-sm">Seguridad</h4>
          </div>
        </div>

        <Tour open={open} onOpenChange={setOpen} nextText="Siguiente" prevText="Anterior" skipText="Omitir" finishText="Finalizar" showSkip showProgress steps={[{
        target: '#label-start',
        title: 'Bienvenido',
        description: 'Este es un recorrido con etiquetas en español.',
        placement: 'bottom'
      }, {
        target: '#label-1',
        title: 'Rendimiento',
        description: 'Monitorea el rendimiento de tu aplicación.'
      }, {
        target: '#label-2',
        title: 'Seguridad',
        description: 'Configura las opciones de seguridad de tu cuenta.'
      }]} />
      </div>;
  }
}`,...(be=(ge=R.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var he,fe,ve;E.parameters={...E.parameters,docs:{...(he=E.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div className="p-12 space-y-8">
        <Button id="prog-start" onClick={() => setOpen(true)}>
          Start Tour with Progress
        </Button>

        <div className="grid grid-cols-4 gap-4">
          <div id="prog-1" className="p-4 rounded-lg border border-border text-center text-sm">
            <Bell className="w-5 h-5 mx-auto mb-1 text-info" />
            Notifications
          </div>
          <div id="prog-2" className="p-4 rounded-lg border border-border text-center text-sm">
            <Users className="w-5 h-5 mx-auto mb-1 text-primary" />
            Team
          </div>
          <div id="prog-3" className="p-4 rounded-lg border border-border text-center text-sm">
            <Settings className="w-5 h-5 mx-auto mb-1 text-warning" />
            Settings
          </div>
          <div id="prog-4" className="p-4 rounded-lg border border-border text-center text-sm">
            <Shield className="w-5 h-5 mx-auto mb-1 text-success" />
            Security
          </div>
        </div>

        <Tour open={open} onOpenChange={setOpen} showProgress showSkip color="primary" onSkip={() => alert('Tour skipped')} onFinish={() => alert('Tour finished!')} steps={[{
        target: '#prog-1',
        title: 'Notifications',
        description: 'Configure how you receive alerts and updates.'
      }, {
        target: '#prog-2',
        title: 'Team',
        description: 'Manage your team members and their roles.'
      }, {
        target: '#prog-3',
        title: 'Settings',
        description: 'Customize your workspace preferences.'
      }, {
        target: '#prog-4',
        title: 'Security',
        description: 'Set up two-factor authentication and security rules.'
      }]} />
      </div>;
  }
}`,...(ve=(fe=E.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};const ut=["Default","Placements","Sizes","Colors","WithCoverImage","Controlled","CustomLabels","WithProgressAndSkip"];export{B as Colors,$ as Controlled,R as CustomLabels,k as Default,z as Placements,O as Sizes,P as WithCoverImage,E as WithProgressAndSkip,ut as __namedExportsOrder,mt as default};
