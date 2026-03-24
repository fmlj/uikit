import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as P,r as n}from"./index-ZH-6pyQh.js";import{c as h,i as fe,a as ne}from"./utils-_uLxnvdl.js";import{u as ge}from"./useControllable-BTRR6hV3.js";import{c as ve}from"./variants-C8qliDOr.js";import{C as xe}from"./chevron-down-D1qmGosc.js";import{I as ye}from"./info-CKnY7ViN.js";import{C as be}from"./circle-check-big-Ba-B0jqG.js";import{T as Ce}from"./triangle-alert-Bq5oH3ZW.js";import{C as we}from"./circle-x-CRNxQz7z.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createLucideIcon-BXJdBs6C.js";const je="w-full border rounded-md overflow-hidden",Ne=ne("w-full flex items-center justify-between cursor-pointer touch-manipulation font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm",{variants:{size:{xs:"px-2 py-1.5 text-xs",sm:"px-3 py-2 text-sm",md:"px-4 py-3 text-base",lg:"px-5 py-4 text-lg"},disabled:{true:"opacity-50 cursor-not-allowed",false:"hover:bg-surface/50"}},defaultVariants:{size:"md",disabled:!1}}),Oe=ne("",{variants:{size:{xs:"px-2 pb-2 text-xs",sm:"px-3 pb-3 text-sm",md:"px-4 pb-4 text-base",lg:"px-5 pb-5 text-lg"}},defaultVariants:{size:"md"}}),ke={default:"border-slot bg-background text-text-primary",solid:"border-slot bg-slot text-slot-fg",soft:"border-slot-30 bg-slot-10 text-text-primary"},Ie={default:"text-slot hover:bg-slot-10",solid:"hover:bg-slot-90",soft:"text-slot hover:bg-slot-20"},t=P.memo(({title:l,children:i,color:d="default",size:a="md",variant:r="default",defaultOpen:c=!1,open:le,onChange:ie,disabled:p=!1,className:ce,classNames:s,ref:de})=>{const[o,I]=ge({value:le,defaultValue:c,onChange:ie}),T=P.useId(),S=`collapse-header-${T}`,V=`collapse-content-${T}`,u=n.useRef(null),m=n.useRef(null),z=n.useRef(o),j=n.useRef(0),N=n.useRef(null),pe=n.useCallback(()=>{m.current&&(j.current=m.current.scrollHeight)},[]);n.useLayoutEffect(()=>{u.current&&(u.current.style.height=o?"auto":"0")},[]),n.useLayoutEffect(()=>{var D;const O=u.current,E=m.current;if(!O||!E)return;const me=z.current;if(z.current=o,o===me)return;N.current&&N.current.cancel();const A=j.current||E.scrollHeight;j.current=0;const he=typeof window<"u"&&((D=window.matchMedia)==null?void 0:D.call(window,"(prefers-reduced-motion: reduce)").matches)?0:200,k=O.animate(o?[{height:"0px"},{height:`${A}px`}]:[{height:`${A}px`},{height:"0px"}],{duration:he,easing:"ease-out",fill:"forwards"});k.onfinish=()=>{O.style.height=o?"auto":"0",k.cancel()},N.current=k},[o]);const ue=n.useCallback(()=>{p||I(!o)},[p,o,I]);return e.jsxs("div",{ref:de,className:h("collapse_root",je,ve[d],ke[r],s==null?void 0:s.root,ce),"data-slot":"root",children:[e.jsxs("button",{id:S,type:"button",onClick:ue,onPointerEnter:pe,disabled:p,"aria-expanded":o,"aria-controls":V,className:h("collapse_header",Ne({size:a,disabled:p}),Ie[r],"focus-visible:ring-slot",s==null?void 0:s.header),"data-slot":"header",children:[e.jsx("span",{children:l}),e.jsx(xe,{className:h("collapse_icon",fe[a],"transition-transform duration-300 ease-out flex-shrink-0",o&&"rotate-180",s==null?void 0:s.icon),"data-slot":"icon"})]}),e.jsx("div",{ref:u,id:V,role:"region","aria-labelledby":S,"aria-hidden":!o,className:"overflow-hidden",style:{contain:"content"},children:e.jsx("div",{ref:m,children:e.jsx("div",{className:h("collapse_content",Oe({size:a}),s==null?void 0:s.content),"data-slot":"content",children:i})})})]})});t.displayName="Collapse";t.__docgenInfo={description:"",methods:[],displayName:"Collapse",props:{color:{defaultValue:{value:"'default'",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1},variant:{defaultValue:{value:"'default'",computed:!1},required:!1},defaultOpen:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const Ye={title:"Data Display/Collapse",component:t,tags:["autodocs"],argTypes:{color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"],description:"Theme color"},size:{control:"select",options:["xs","sm","md","lg"],description:"Collapse size"},variant:{control:"select",options:["default","solid","soft"],description:"Visual style variant"},disabled:{control:"boolean",description:"Disabled state"},defaultOpen:{control:"boolean",description:"Initial open state (uncontrolled)"}}},f={args:{title:"Click to expand",children:e.jsx("div",{children:"This is the collapsible content. Click the header to toggle visibility."}),color:"default",size:"md",variant:"default"}},g={args:{title:"This collapse is open by default",children:e.jsx("div",{children:"The content is visible when the component mounts because defaultOpen is set to true."}),color:"primary",defaultOpen:!0}},v={args:{title:"This collapse is disabled",children:e.jsx("div",{children:"This content cannot be seen because the collapse is disabled."}),color:"default",disabled:!0}},x={render:()=>{const[l,i]=n.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>i(!0),className:"px-4 py-2 bg-primary text-white rounded hover:bg-primary/90",children:"Open"}),e.jsx("button",{onClick:()=>i(!1),className:"px-4 py-2 bg-secondary text-white rounded hover:bg-secondary/90",children:"Close"}),e.jsx("button",{onClick:()=>i(!l),className:"px-4 py-2 bg-accent text-white rounded hover:bg-accent/90",children:"Toggle"})]}),e.jsxs("div",{className:"text-sm text-text-secondary",children:["Current state: ",e.jsx("strong",{children:l?"Open":"Closed"})]}),e.jsx(t,{title:"Controlled Collapse",open:l,onChange:i,color:"primary",children:"This collapse is controlled by external state. Use the buttons above to control it."})]})}},y={render:()=>{const[l,i]=n.useState([]),d=a=>{const r=new Date().toLocaleTimeString();i(c=>[...c,`${r}: Collapse ${a?"opened":"closed"}`])};return e.jsxs("div",{className:"space-y-4",children:[e.jsx(t,{title:"Collapse with onChange callback",onChange:d,color:"primary",children:"Toggle this collapse to see events logged below."}),e.jsxs("div",{className:"p-4 bg-surface border border-border rounded",children:[e.jsx("h4",{className:"font-semibold mb-2",children:"Event Log:"}),l.length===0?e.jsx("div",{className:"text-sm text-text-secondary",children:"No events yet"}):e.jsx("div",{className:"space-y-1",children:l.map((a,r)=>e.jsx("div",{className:"text-sm font-mono",children:a},r))})]})]})}},b={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(t,{title:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(ye,{className:"w-4 h-4"}),e.jsx("span",{children:"Information"})]}),color:"info",variant:"soft",defaultOpen:!0,children:"This is an informational message. You can expand or collapse it to manage screen space."}),e.jsx(t,{title:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(be,{className:"w-4 h-4"}),e.jsx("span",{children:"Success"})]}),color:"success",variant:"soft",defaultOpen:!0,children:"Your operation completed successfully! All changes have been saved."}),e.jsx(t,{title:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Ce,{className:"w-4 h-4"}),e.jsx("span",{children:"Warning"})]}),color:"warning",variant:"soft",defaultOpen:!0,children:"Please review the following items before proceeding. Some settings may require your attention."}),e.jsx(t,{title:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(we,{className:"w-4 h-4"}),e.jsx("span",{children:"Error"})]}),color:"error",variant:"soft",defaultOpen:!0,children:"An error occurred while processing your request. Please try again or contact support."})]})},C={render:()=>e.jsxs("div",{className:"max-w-3xl space-y-3",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Frequently Asked Questions"}),e.jsx(t,{title:"What payment methods do you accept?",color:"primary",variant:"default",children:"We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, and Google Pay. For enterprise customers, we also offer invoicing options."}),e.jsx(t,{title:"How do I track my order?",color:"primary",variant:"default",children:"Once your order ships, you'll receive a tracking number via email. You can use this number on our website or the carrier's website to track your package in real-time."}),e.jsx(t,{title:"What is your return policy?",color:"primary",variant:"default",children:"We offer a 30-day money-back guarantee. If you're not satisfied with your purchase, you can return it within 30 days for a full refund. Items must be in their original condition with all tags attached."}),e.jsx(t,{title:"Do you ship internationally?",color:"primary",variant:"default",children:"Yes! We ship to over 100 countries worldwide. International shipping costs and delivery times vary by destination. Customs duties and taxes may apply depending on your country."}),e.jsx(t,{title:"How can I contact customer support?",color:"primary",variant:"default",children:"Our customer support team is available 24/7. You can reach us via email at support@example.com, through our live chat feature, or by calling our toll-free number at 1-800-EXAMPLE."})]})},w={render:()=>{const l=["default","primary","secondary","accent","success","error","warning","info"],i=["default","solid","soft"],d=["xs","sm","md","lg"];return e.jsx("div",{className:"space-y-8",children:i.map(a=>e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-semibold mb-3 capitalize",children:[a," Variant"]}),e.jsx("div",{className:"space-y-6",children:l.map(r=>e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium mb-2 capitalize text-text-secondary",children:r}),e.jsx("div",{className:"grid grid-cols-4 gap-2",children:d.map(c=>e.jsxs(t,{title:`${c}`,color:r,variant:a,size:c,children:[r," ",a," ",c]},c))})]},r))})]},a))})}};var R,W,q;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    title: 'Click to expand',
    children: <div>This is the collapsible content. Click the header to toggle visibility.</div>,
    color: 'default',
    size: 'md',
    variant: 'default'
  }
}`,...(q=(W=f.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var L,M,Y;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    title: 'This collapse is open by default',
    children: <div>The content is visible when the component mounts because defaultOpen is set to true.</div>,
    color: 'primary',
    defaultOpen: true
  }
}`,...(Y=(M=g.parameters)==null?void 0:M.docs)==null?void 0:Y.source}}};var $,H,_;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    title: 'This collapse is disabled',
    children: <div>This content cannot be seen because the collapse is disabled.</div>,
    color: 'default',
    disabled: true
  }
}`,...(_=(H=v.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var F,Q,X;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div className="space-y-4">
        <div className="flex gap-2">
          <button onClick={() => setIsOpen(true)} className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90">
            Open
          </button>
          <button onClick={() => setIsOpen(false)} className="px-4 py-2 bg-secondary text-white rounded hover:bg-secondary/90">
            Close
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="px-4 py-2 bg-accent text-white rounded hover:bg-accent/90">
            Toggle
          </button>
        </div>
        <div className="text-sm text-text-secondary">
          Current state: <strong>{isOpen ? 'Open' : 'Closed'}</strong>
        </div>
        <Collapse title="Controlled Collapse" open={isOpen} onChange={setIsOpen} color="primary">
          This collapse is controlled by external state. Use the buttons above to control it.
        </Collapse>
      </div>;
  }
}`,...(X=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var G,U,B;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    const [log, setLog] = useState<string[]>([]);
    const handleChange = (open: boolean) => {
      const timestamp = new Date().toLocaleTimeString();
      setLog(prev => [...prev, \`\${timestamp}: Collapse \${open ? 'opened' : 'closed'}\`]);
    };
    return <div className="space-y-4">
        <Collapse title="Collapse with onChange callback" onChange={handleChange} color="primary">
          Toggle this collapse to see events logged below.
        </Collapse>
        <div className="p-4 bg-surface border border-border rounded">
          <h4 className="font-semibold mb-2">Event Log:</h4>
          {log.length === 0 ? <div className="text-sm text-text-secondary">No events yet</div> : <div className="space-y-1">
              {log.map((entry, index) => <div key={index} className="text-sm font-mono">{entry}</div>)}
            </div>}
        </div>
      </div>;
  }
}`,...(B=(U=y.parameters)==null?void 0:U.docs)==null?void 0:B.source}}};var J,K,Z;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Collapse title={<div className="flex items-center gap-2">
            <Info className="w-4 h-4" />
            <span>Information</span>
          </div>} color="info" variant="soft" defaultOpen>
        This is an informational message. You can expand or collapse it to manage screen space.
      </Collapse>

      <Collapse title={<div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4" />
            <span>Success</span>
          </div>} color="success" variant="soft" defaultOpen>
        Your operation completed successfully! All changes have been saved.
      </Collapse>

      <Collapse title={<div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            <span>Warning</span>
          </div>} color="warning" variant="soft" defaultOpen>
        Please review the following items before proceeding. Some settings may require your attention.
      </Collapse>

      <Collapse title={<div className="flex items-center gap-2">
            <XCircle className="w-4 h-4" />
            <span>Error</span>
          </div>} color="error" variant="soft" defaultOpen>
        An error occurred while processing your request. Please try again or contact support.
      </Collapse>
    </div>
}`,...(Z=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Z.source}}};var ee,te,ae;C.parameters={...C.parameters,docs:{...(ee=C.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <div className="max-w-3xl space-y-3">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <Collapse title="What payment methods do you accept?" color="primary" variant="default">
        We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, and Google Pay. For enterprise customers, we also offer invoicing options.
      </Collapse>
      <Collapse title="How do I track my order?" color="primary" variant="default">
        Once your order ships, you'll receive a tracking number via email. You can use this number on our website or the carrier's website to track your package in real-time.
      </Collapse>
      <Collapse title="What is your return policy?" color="primary" variant="default">
        We offer a 30-day money-back guarantee. If you're not satisfied with your purchase, you can return it within 30 days for a full refund. Items must be in their original condition with all tags attached.
      </Collapse>
      <Collapse title="Do you ship internationally?" color="primary" variant="default">
        Yes! We ship to over 100 countries worldwide. International shipping costs and delivery times vary by destination. Customs duties and taxes may apply depending on your country.
      </Collapse>
      <Collapse title="How can I contact customer support?" color="primary" variant="default">
        Our customer support team is available 24/7. You can reach us via email at support@example.com, through our live chat feature, or by calling our toll-free number at 1-800-EXAMPLE.
      </Collapse>
    </div>
}`,...(ae=(te=C.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var se,oe,re;w.parameters={...w.parameters,docs:{...(se=w.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => {
    const colors = ['default', 'primary', 'secondary', 'accent', 'success', 'error', 'warning', 'info'] as const;
    const variants = ['default', 'solid', 'soft'] as const;
    const sizes = ['xs', 'sm', 'md', 'lg'] as const;
    return <div className="space-y-8">
        {variants.map(v => <div key={v}>
            <h3 className="text-lg font-semibold mb-3 capitalize">{v} Variant</h3>
            <div className="space-y-6">
              {colors.map(c => <div key={c}>
                  <h4 className="text-sm font-medium mb-2 capitalize text-text-secondary">{c}</h4>
                  <div className="grid grid-cols-4 gap-2">
                    {sizes.map(s => <Collapse key={s} title={\`\${s}\`} color={c} variant={v} size={s}>
                        {c} {v} {s}
                      </Collapse>)}
                  </div>
                </div>)}
            </div>
          </div>)}
      </div>;
  }
}`,...(re=(oe=w.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};const $e=["Default","DefaultOpen","Disabled","ControlledMode","WithCallback","NotificationStyles","FAQ","ColorVariantSizeMatrix"];export{w as ColorVariantSizeMatrix,x as ControlledMode,f as Default,g as DefaultOpen,v as Disabled,C as FAQ,b as NotificationStyles,y as WithCallback,$e as __namedExportsOrder,Ye as default};
