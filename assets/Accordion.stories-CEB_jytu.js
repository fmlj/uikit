import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as Ne,r as i}from"./index-ZH-6pyQh.js";import{c as m,a as z,i as Ce}from"./utils-_uLxnvdl.js";import{c as _}from"./variants-C8qliDOr.js";import{C as Ae}from"./chevron-down-D1qmGosc.js";import{C as Se}from"./circle-question-mark-Dhggi-b3.js";import{M as Me}from"./minus-Bn6CyQhd.js";import{P as Ie}from"./plus-BOfjiqhk.js";import{U as q}from"./user-BM8Midap.js";import{B as ke}from"./bell-BD3KA5A_.js";import{S as H}from"./shield-syPj5L6h.js";import{S as je}from"./settings-D1wlBKo1.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createLucideIcon-BXJdBs6C.js";const Ve=z("w-full",{variants:{variant:{default:"space-y-0 divide-y divide-border rounded-lg overflow-hidden",solid:"space-y-0 divide-y divide-border/50 rounded-lg overflow-hidden",soft:"space-y-0 divide-y divide-border/30 rounded-lg overflow-hidden",bordered:"space-y-0 divide-y border border-slot rounded-lg overflow-hidden",splitted:"space-y-2"},color:_,showDivider:{true:"",false:""}},compoundVariants:[{variant:"default",showDivider:!1,class:"divide-y-0"},{variant:"solid",showDivider:!1,class:"divide-y-0"},{variant:"soft",showDivider:!1,class:"divide-y-0"},{variant:"bordered",showDivider:!1,class:"divide-y-0"},{variant:"bordered",color:"default",class:"divide-border"}],defaultVariants:{variant:"default",color:"default",showDivider:!0}}),Ee=z("",{variants:{variant:{default:"bg-transparent",solid:"bg-slot text-slot-fg",soft:"bg-slot-10",bordered:"bg-transparent border-slot-20",splitted:"border rounded-lg overflow-hidden border-slot"},color:_},compoundVariants:[{variant:"soft",color:"default",class:"bg-surface/50"},{variant:"bordered",color:"default",class:"border-border"}],defaultVariants:{variant:"default",color:"default"}}),De=z(["flex items-center w-full text-left font-medium text-text-primary touch-manipulation","focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-slot","disabled:opacity-50 disabled:cursor-not-allowed"],{variants:{size:{xs:"px-(--accordion-padding-x-xs) py-(--accordion-padding-y-xs) text-xs gap-2",sm:"px-(--accordion-padding-x-sm) py-(--accordion-padding-y-sm) text-sm gap-2",md:"px-(--accordion-padding-x-md) py-(--accordion-padding-y-md) text-base gap-3",lg:"px-(--accordion-padding-x-lg) py-(--accordion-padding-y-lg) text-lg gap-3"},color:_,disabled:{true:"cursor-not-allowed",false:"cursor-pointer hover:bg-surface/50"}},defaultVariants:{size:"md",color:"default",disabled:!1}}),We=z("text-text-secondary",{variants:{size:{xs:"px-(--accordion-padding-x-xs) pb-(--accordion-padding-y-xs) text-xs",sm:"px-(--accordion-padding-x-sm) pb-(--accordion-padding-y-sm) text-sm",md:"px-(--accordion-padding-x-md) pb-(--accordion-padding-y-md) text-base",lg:"px-(--accordion-padding-x-lg) pb-(--accordion-padding-y-lg) text-lg"}},defaultVariants:{size:"md"}}),Q=(n,t)=>t?"text-slot":"text-text-secondary",Pe=Ne.memo(({item:n,isActive:t,baseId:l,size:o,color:d,variant:x,isSolidColored:c,expandIcon:u,expandIconPosition:k,destroyOnClose:B,onToggle:j,classNames:s,itemClassName:F})=>{const P=`${l}-header-${n.key}`,C=`${l}-panel-${n.key}`,y=i.useRef(null),h=i.useRef(null),A=i.useRef(t),g=i.useRef(0),v=i.useRef(null),O=i.useCallback(()=>{h.current&&(g.current=h.current.scrollHeight)},[]);i.useLayoutEffect(()=>{y.current&&(y.current.style.height=t?"auto":"0")},[]),i.useLayoutEffect(()=>{var G;const p=y.current,S=h.current;if(!p||!S)return;const a=A.current;if(A.current=t,t===a)return;v.current&&v.current.cancel();const M=g.current||S.scrollHeight;g.current=0;const w=typeof window<"u"&&((G=window.matchMedia)==null?void 0:G.call(window,"(prefers-reduced-motion: reduce)").matches)?0:200,N=p.animate(t?[{height:"0px"},{height:`${M}px`}]:[{height:`${M}px`},{height:"0px"}],{duration:w,easing:"ease-out",fill:"forwards"});N.onfinish=()=>{p.style.height=t?"auto":"0",N.cancel()},v.current=N},[t]);const r=p=>u===!1?null:typeof u=="function"?u(p):u?e.jsx("span",{className:m("shrink-0 transition-transform duration-300",p&&"rotate-180"),children:u}):e.jsx(Ae,{className:m("shrink-0 transition-transform duration-300",p&&"rotate-180",c?"text-inherit":Q(d,p),Ce[o])});return e.jsxs("div",{"data-slot":"item",className:m("accordion_item",Ee({variant:x,color:d}),n.disabled&&"opacity-50",s==null?void 0:s.item,F),children:[e.jsxs("button",{type:"button",id:P,"aria-expanded":t,"aria-controls":C,"aria-disabled":n.disabled,disabled:n.disabled,onClick:()=>j(n.key,n.disabled),onPointerEnter:O,"data-slot":"trigger",className:m("accordion_trigger",De({size:o,color:d,disabled:n.disabled}),s==null?void 0:s.trigger),children:[k==="left"&&r(t),n.icon&&e.jsx("span",{"data-slot":"icon",className:m("accordion_icon","shrink-0",c?"text-inherit":Q(d,t),s==null?void 0:s.icon),children:n.icon}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("div",{className:m(!c&&t&&d!=="default"&&"text-slot"),children:n.title}),n.subtitle&&e.jsx("div",{className:m("font-normal mt-0.5",c?"text-inherit opacity-80":"text-text-secondary"),children:n.subtitle})]}),n.extra&&e.jsx("span",{className:m("shrink-0",c?"text-inherit opacity-80":"text-text-secondary"),children:n.extra}),k==="right"&&r(t)]}),e.jsx("div",{ref:y,id:C,role:"region","aria-labelledby":P,"aria-hidden":!t,className:"overflow-hidden",style:{contain:"content"},children:e.jsx("div",{ref:h,children:(!B||t)&&e.jsx("div",{"data-slot":"content",className:m("accordion_content",We({size:o}),c&&"text-inherit opacity-90",s==null?void 0:s.content),children:n.content})})})]})});Pe.displayName="AccordionItem";const f=Ne.memo(({items:n,color:t="default",size:l="md",variant:o="default",defaultActiveKey:d,activeKey:x,onChange:c,multiple:u=!1,expandIcon:k,expandIconPosition:B="right",collapsible:j=!0,destroyOnClose:s=!1,showDivider:F=!0,className:P,itemClassName:C,classNames:y,ref:h})=>{const A=o==="solid"&&t!=="default",g=i.useId(),[v,O]=i.useState(d?u&&!Array.isArray(d)?[d]:d:u?[]:""),r=x!==void 0?x:v,p=i.useCallback(a=>Array.isArray(r)?r.includes(a):r===a,[r]),S=i.useCallback((a,M)=>{if(M)return;let b;if(u){const w=Array.isArray(r)?r:r?[r]:[];b=w.includes(a)?w.filter(N=>N!==a):[...w,a]}else{if(!j&&r===a)return;b=r===a?"":a}x===void 0&&O(b),c==null||c(b)},[u,r,j,x,c]);return e.jsx("div",{ref:h,"data-slot":"root",className:m("accordion_root",Ve({variant:o,color:t,showDivider:F&&o!=="splitted"}),y==null?void 0:y.root,P),children:n.map(a=>e.jsx(Pe,{item:a,isActive:p(a.key),baseId:g,size:l,color:t,variant:o,isSolidColored:A,expandIcon:k,expandIconPosition:B,destroyOnClose:s,onToggle:S,classNames:y,itemClassName:C},a.key))})});f.displayName="Accordion";f.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{color:{defaultValue:{value:'"default"',computed:!1},required:!1},size:{defaultValue:{value:'"md"',computed:!1},required:!1},variant:{defaultValue:{value:'"default"',computed:!1},required:!1},multiple:{defaultValue:{value:"false",computed:!1},required:!1},expandIconPosition:{defaultValue:{value:'"right"',computed:!1},required:!1},collapsible:{defaultValue:{value:"true",computed:!1},required:!1},destroyOnClose:{defaultValue:{value:"false",computed:!1},required:!1},showDivider:{defaultValue:{value:"true",computed:!1},required:!1}}};const Ye={title:"Data Display/Accordion",component:f,tags:["autodocs"],argTypes:{color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"],description:"Theme color"},size:{control:"select",options:["xs","sm","md","lg"],description:"Accordion size"},variant:{control:"select",options:["default","solid","soft","bordered","splitted"],description:"Visual style variant"},multiple:{control:"boolean",description:"Allow multiple panels to be open simultaneously"},expandIconPosition:{control:"select",options:["left","right"],description:"Position of expand icon"},collapsible:{control:"boolean",description:"Prevent all panels from closing (requires at least one open)"},destroyOnClose:{control:"boolean",description:"Unmount content when collapsed"},showDivider:{control:"boolean",description:"Show divider between items"}}},T=[{key:"1",title:"What is your return policy?",content:"We offer a 30-day return policy on all items. Items must be in their original condition with tags attached. Please contact our support team to initiate a return."},{key:"2",title:"How long does shipping take?",content:"Standard shipping typically takes 5-7 business days. Express shipping options are available at checkout for 2-3 day delivery."},{key:"3",title:"Do you ship internationally?",content:"Yes, we ship to over 50 countries worldwide. International shipping costs and delivery times vary by destination."}],I={args:{items:T,color:"default",size:"md",variant:"default"}},V={args:{items:[{key:"1",title:"User Profile",icon:e.jsx(q,{className:"w-5 h-5"}),content:"Manage your profile settings and personal information."},{key:"2",title:"Notifications",icon:e.jsx(ke,{className:"w-5 h-5"}),content:"Configure your notification preferences."},{key:"3",title:"Security",icon:e.jsx(H,{className:"w-5 h-5"}),content:"Update your password and security settings."},{key:"4",title:"Settings",icon:e.jsx(je,{className:"w-5 h-5"}),content:"General application settings."}],color:"primary",variant:"bordered"}},E={args:{items:[{key:"1",title:"Basic Plan",subtitle:"$9.99/month",icon:e.jsx(q,{className:"w-5 h-5"}),content:"Perfect for individuals. Includes 10GB storage, email support, and basic features."},{key:"2",title:"Pro Plan",subtitle:"$29.99/month - Most Popular",icon:e.jsx(H,{className:"w-5 h-5"}),content:"For professionals. Includes 100GB storage, priority support, and advanced features.",extra:e.jsx("span",{className:"text-xs bg-primary text-white px-2 py-0.5 rounded-full",children:"Popular"})},{key:"3",title:"Enterprise Plan",subtitle:"Custom pricing",icon:e.jsx(je,{className:"w-5 h-5"}),content:"For large teams. Unlimited storage, dedicated support, and custom integrations."}],color:"primary",variant:"splitted"}},D={args:{items:[{key:"1",title:"Account Settings",extra:e.jsx("span",{className:"text-xs text-success",children:"Active"}),content:"Manage your account preferences and settings."},{key:"2",title:"Billing Information",extra:e.jsx("span",{className:"text-xs text-warning",children:"Action Required"}),content:"Update your payment methods and billing details."},{key:"3",title:"API Access",extra:e.jsx("span",{className:"text-xs text-text-secondary",children:"Disabled"}),content:"Configure API keys and access tokens."}],variant:"bordered"}},W={args:{items:T,multiple:!0,defaultActiveKey:["1","3"],color:"primary",variant:"splitted"}},$={render:()=>{const[n,t]=i.useState("1");return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex gap-2 flex-wrap",children:[e.jsx("button",{onClick:()=>t("1"),className:"px-4 py-2 bg-primary text-white rounded hover:bg-primary/90",children:"Open First"}),e.jsx("button",{onClick:()=>t("2"),className:"px-4 py-2 bg-primary text-white rounded hover:bg-primary/90",children:"Open Second"}),e.jsx("button",{onClick:()=>t("3"),className:"px-4 py-2 bg-primary text-white rounded hover:bg-primary/90",children:"Open Third"}),e.jsx("button",{onClick:()=>t(""),className:"px-4 py-2 bg-secondary text-white rounded hover:bg-secondary/90",children:"Close All"})]}),e.jsxs("div",{className:"text-sm text-text-secondary",children:["Current active key: ",e.jsx("strong",{children:n||"none"})]}),e.jsx(f,{items:T,activeKey:n,onChange:t,color:"primary",variant:"bordered"})]})}},R={render:()=>e.jsxs("div",{className:"max-w-3xl",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[e.jsx(Se,{className:"w-6 h-6 text-primary"}),e.jsx("h2",{className:"text-2xl font-bold",children:"Frequently Asked Questions"})]}),e.jsx(f,{items:[{key:"1",title:"How do I reset my password?",content:'Click on the "Forgot Password" link on the login page. Enter your email address and we will send you instructions to reset your password.'},{key:"2",title:"Can I change my subscription plan?",content:"Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes take effect at the start of your next billing cycle."},{key:"3",title:"What payment methods do you accept?",content:"We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise customers."},{key:"4",title:"Is my data secure?",content:"Absolutely. We use industry-standard encryption to protect your data both in transit and at rest. Our infrastructure is regularly audited for security compliance."},{key:"5",title:"Do you offer customer support?",content:"Yes! We offer 24/7 email support for all plans. Premium and Enterprise plans also include phone support and dedicated account managers."}],color:"primary",variant:"soft",expandIcon:n=>n?e.jsx(Me,{className:"w-5 h-5"}):e.jsx(Ie,{className:"w-5 h-5"})})]})},K={render:()=>e.jsxs("div",{className:"max-w-2xl",children:[e.jsx("h2",{className:"text-xl font-bold mb-4",children:"Settings"}),e.jsx(f,{items:[{key:"profile",title:"Profile Settings",subtitle:"Manage your public profile",icon:e.jsx(q,{className:"w-5 h-5"}),content:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center",children:e.jsx(q,{className:"w-6 h-6 text-primary"})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-semibold",children:"John Doe"}),e.jsx("div",{className:"text-sm text-text-secondary",children:"john.doe@example.com"})]})]}),e.jsx("button",{className:"px-4 py-2 bg-primary text-white rounded hover:bg-primary/90",children:"Edit Profile"})]})},{key:"notifications",title:"Notification Preferences",subtitle:"Choose what updates you receive",icon:e.jsx(ke,{className:"w-5 h-5"}),content:e.jsxs("div",{className:"space-y-2",children:[e.jsxs("label",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox",className:"rounded",defaultChecked:!0}),e.jsx("span",{children:"Email notifications"})]}),e.jsxs("label",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox",className:"rounded"}),e.jsx("span",{children:"Push notifications"})]}),e.jsxs("label",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox",className:"rounded",defaultChecked:!0}),e.jsx("span",{children:"Weekly digest"})]})]})},{key:"security",title:"Security & Privacy",subtitle:"Protect your account",icon:e.jsx(H,{className:"w-5 h-5"}),extra:e.jsx("span",{className:"text-xs text-success",children:"Secure"}),content:e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm",children:"Two-factor authentication is enabled."}),e.jsx("button",{className:"text-primary hover:underline text-sm",children:"Manage security settings"})]})}],color:"primary",variant:"splitted",defaultActiveKey:"profile"})]})},U={render:()=>{const n=["default","primary","secondary","accent","success","error","warning","info"],t=["default","solid","soft","bordered","splitted"];return e.jsx("div",{className:"space-y-8",children:t.map(l=>e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3 capitalize",children:l}),e.jsx("div",{className:"space-y-2",children:n.map(o=>e.jsx(f,{items:[{key:"1",title:`${o} ${l} - Item 1`,content:"Content 1"},{key:"2",title:`${o} ${l} - Item 2`,content:"Content 2"}],color:o,variant:l,size:"md"},o))})]},l))})}};var Y,J,L;I.parameters={...I.parameters,docs:{...(Y=I.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    color: "default",
    size: "md",
    variant: "default"
  }
}`,...(L=(J=I.parameters)==null?void 0:J.docs)==null?void 0:L.source}}};var X,Z,ee;V.parameters={...V.parameters,docs:{...(X=V.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    items: [{
      key: "1",
      title: "User Profile",
      icon: <User className="w-5 h-5" />,
      content: "Manage your profile settings and personal information."
    }, {
      key: "2",
      title: "Notifications",
      icon: <Bell className="w-5 h-5" />,
      content: "Configure your notification preferences."
    }, {
      key: "3",
      title: "Security",
      icon: <Shield className="w-5 h-5" />,
      content: "Update your password and security settings."
    }, {
      key: "4",
      title: "Settings",
      icon: <Settings className="w-5 h-5" />,
      content: "General application settings."
    }],
    color: "primary",
    variant: "bordered"
  }
}`,...(ee=(Z=V.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,ae;E.parameters={...E.parameters,docs:{...(te=E.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    items: [{
      key: "1",
      title: "Basic Plan",
      subtitle: "$9.99/month",
      icon: <User className="w-5 h-5" />,
      content: "Perfect for individuals. Includes 10GB storage, email support, and basic features."
    }, {
      key: "2",
      title: "Pro Plan",
      subtitle: "$29.99/month - Most Popular",
      icon: <Shield className="w-5 h-5" />,
      content: "For professionals. Includes 100GB storage, priority support, and advanced features.",
      extra: <span className="text-xs bg-primary text-white px-2 py-0.5 rounded-full">
            Popular
          </span>
    }, {
      key: "3",
      title: "Enterprise Plan",
      subtitle: "Custom pricing",
      icon: <Settings className="w-5 h-5" />,
      content: "For large teams. Unlimited storage, dedicated support, and custom integrations."
    }],
    color: "primary",
    variant: "splitted"
  }
}`,...(ae=(ne=E.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var se,re,oe;D.parameters={...D.parameters,docs:{...(se=D.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    items: [{
      key: "1",
      title: "Account Settings",
      extra: <span className="text-xs text-success">Active</span>,
      content: "Manage your account preferences and settings."
    }, {
      key: "2",
      title: "Billing Information",
      extra: <span className="text-xs text-warning">Action Required</span>,
      content: "Update your payment methods and billing details."
    }, {
      key: "3",
      title: "API Access",
      extra: <span className="text-xs text-text-secondary">Disabled</span>,
      content: "Configure API keys and access tokens."
    }],
    variant: "bordered"
  }
}`,...(oe=(re=D.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ie,ce,le;W.parameters={...W.parameters,docs:{...(ie=W.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    multiple: true,
    defaultActiveKey: ["1", "3"],
    color: "primary",
    variant: "splitted"
  }
}`,...(le=(ce=W.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var de,ue,pe;$.parameters={...$.parameters,docs:{...(de=$.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => {
    const [activeKey, setActiveKey] = useState<string | string[]>("1");
    return <div className="space-y-4">
        <div className="flex gap-2 flex-wrap">
          <button onClick={() => setActiveKey("1")} className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90">
            Open First
          </button>
          <button onClick={() => setActiveKey("2")} className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90">
            Open Second
          </button>
          <button onClick={() => setActiveKey("3")} className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90">
            Open Third
          </button>
          <button onClick={() => setActiveKey("")} className="px-4 py-2 bg-secondary text-white rounded hover:bg-secondary/90">
            Close All
          </button>
        </div>
        <div className="text-sm text-text-secondary">
          Current active key: <strong>{activeKey || "none"}</strong>
        </div>
        <Accordion items={sampleItems} activeKey={activeKey} onChange={setActiveKey} color="primary" variant="bordered" />
      </div>;
  }
}`,...(pe=(ue=$.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var me,ye,fe;R.parameters={...R.parameters,docs:{...(me=R.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => <div className="max-w-3xl">
      <div className="flex items-center gap-2 mb-4">
        <HelpCircle className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
      </div>
      <Accordion items={[{
      key: "1",
      title: "How do I reset my password?",
      content: 'Click on the "Forgot Password" link on the login page. Enter your email address and we will send you instructions to reset your password.'
    }, {
      key: "2",
      title: "Can I change my subscription plan?",
      content: "Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes take effect at the start of your next billing cycle."
    }, {
      key: "3",
      title: "What payment methods do you accept?",
      content: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise customers."
    }, {
      key: "4",
      title: "Is my data secure?",
      content: "Absolutely. We use industry-standard encryption to protect your data both in transit and at rest. Our infrastructure is regularly audited for security compliance."
    }, {
      key: "5",
      title: "Do you offer customer support?",
      content: "Yes! We offer 24/7 email support for all plans. Premium and Enterprise plans also include phone support and dedicated account managers."
    }]} color="primary" variant="soft" expandIcon={isExpanded => isExpanded ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />} />
    </div>
}`,...(fe=(ye=R.parameters)==null?void 0:ye.docs)==null?void 0:fe.source}}};var xe,he,ge;K.parameters={...K.parameters,docs:{...(xe=K.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => <div className="max-w-2xl">
      <h2 className="text-xl font-bold mb-4">Settings</h2>
      <Accordion items={[{
      key: "profile",
      title: "Profile Settings",
      subtitle: "Manage your public profile",
      icon: <User className="w-5 h-5" />,
      content: <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">John Doe</div>
                    <div className="text-sm text-text-secondary">
                      john.doe@example.com
                    </div>
                  </div>
                </div>
                <button className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90">
                  Edit Profile
                </button>
              </div>
    }, {
      key: "notifications",
      title: "Notification Preferences",
      subtitle: "Choose what updates you receive",
      icon: <Bell className="w-5 h-5" />,
      content: <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" defaultChecked />
                  <span>Email notifications</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Push notifications</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" defaultChecked />
                  <span>Weekly digest</span>
                </label>
              </div>
    }, {
      key: "security",
      title: "Security & Privacy",
      subtitle: "Protect your account",
      icon: <Shield className="w-5 h-5" />,
      extra: <span className="text-xs text-success">Secure</span>,
      content: <div className="space-y-2">
                <p className="text-sm">Two-factor authentication is enabled.</p>
                <button className="text-primary hover:underline text-sm">
                  Manage security settings
                </button>
              </div>
    }]} color="primary" variant="splitted" defaultActiveKey="profile" />
    </div>
}`,...(ge=(he=K.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};var ve,be,we;U.parameters={...U.parameters,docs:{...(ve=U.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: () => {
    const colors = ['default', 'primary', 'secondary', 'accent', 'success', 'error', 'warning', 'info'] as const;
    const variants = ['default', 'solid', 'soft', 'bordered', 'splitted'] as const;
    return <div className="space-y-8">
        {variants.map(v => <div key={v}>
            <h3 className="text-lg font-semibold mb-3 capitalize">{v}</h3>
            <div className="space-y-2">
              {colors.map(c => <Accordion key={c} items={[{
            key: '1',
            title: \`\${c} \${v} - Item 1\`,
            content: 'Content 1'
          }, {
            key: '2',
            title: \`\${c} \${v} - Item 2\`,
            content: 'Content 2'
          }]} color={c} variant={v} size="md" />)}
            </div>
          </div>)}
      </div>;
  }
}`,...(we=(be=U.parameters)==null?void 0:be.docs)==null?void 0:we.source}}};const Je=["Default","WithIcons","WithSubtitles","WithExtraContent","MultipleMode","ControlledMode","FAQ","SettingsPanel","ColorVariantMatrix"];export{U as ColorVariantMatrix,$ as ControlledMode,I as Default,R as FAQ,W as MultipleMode,K as SettingsPanel,D as WithExtraContent,V as WithIcons,E as WithSubtitles,Je as __namedExportsOrder,Ye as default};
