import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as E,r as Y}from"./index-ZH-6pyQh.js";import{c as a,a as v}from"./utils-_uLxnvdl.js";import{c as O}from"./variants-C8qliDOr.js";import{S as xe}from"./shopping-cart-DxzqVIld.js";import{T as he}from"./truck-BzJC0TNF.js";import{C as fe}from"./credit-card-pFzRDpgt.js";import{C as g}from"./check-CKCh4cDT.js";import{H as je}from"./house-DCjPrFcn.js";import{U as ye}from"./user-BM8Midap.js";import{S as Ce}from"./settings-D1wlBKo1.js";import{F as we}from"./file-text-DaZIRBjV.js";import{M as ke}from"./mail-1HDD9Lg3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createLucideIcon-BXJdBs6C.js";const W=v("rounded-full flex items-center justify-center font-medium transition-[colors,transform]",{variants:{size:{xs:"w-6 h-6 text-xs",sm:"w-8 h-8 text-sm",md:"w-10 h-10 text-base",lg:"w-12 h-12 text-lg"}},defaultVariants:{size:"md"}}),Ne=v("rounded-full transition-[colors,transform]",{variants:{size:{xs:"w-2 h-2",sm:"w-3 h-3",md:"w-4 h-4",lg:"w-5 h-5"}},defaultVariants:{size:"md"}}),T=v("font-medium",{variants:{size:{xs:"text-xs",sm:"text-sm",md:"text-base",lg:"text-lg"}},defaultVariants:{size:"md"}}),A=v("text-text-secondary",{variants:{size:{xs:"text-xs",sm:"text-xs",md:"text-sm",lg:"text-sm"}},defaultVariants:{size:"md"}}),S=v("bg-border",{variants:{size:{xs:"h-0.5",sm:"h-0.5",md:"h-1",lg:"h-1"}},defaultVariants:{size:"md"}}),F=(t,i)=>{const d=i==="error",n=i==="wait";return d?t==="solid"?"bg-error text-error-foreground border-2 border-error":t==="soft"?"bg-error/10 border-2 border-error/50 text-error":"bg-error/20 border-2 border-error text-error":n?t==="solid"?"bg-slot-20 text-slot-fg opacity-50 border-2 border-slot-20":"bg-slot-10 border-2 border-slot-20 text-text-secondary":t==="solid"?"bg-slot text-slot-fg border-2 border-slot":t==="soft"?"bg-slot-10 border-2 border-slot-50 text-slot":"bg-slot-20 border-2 border-slot text-slot"},y=(t,i)=>i?t==="soft"?"bg-slot-50":"bg-slot":"bg-border/50",p=E.memo(({steps:t,currentStep:i,color:d="primary",size:n="md",variant:c="default",orientation:ve="horizontal",type:Se="numbered",status:$,onStepClick:x,className:M,classNames:r})=>{const f=(s,o)=>o.status?o.status:s===i&&$==="error"?"error":s<i?"finish":s===i?$||"process":"wait",h=(s,o)=>{o||x==null||x(s)};return ve==="vertical"?e.jsx("div",{"data-slot":"root",role:"list",className:a("stepper_root","flex flex-col",O[d],r==null?void 0:r.root,M),children:t.map((s,o)=>{const l=f(o,s),m=!s.disabled&&x;return e.jsxs("div",{role:"listitem","aria-label":`Step ${o+1} of ${t.length}`,className:a("stepper_step","flex",l==="process"&&(r==null?void 0:r.stepActive),l==="finish"&&(r==null?void 0:r.stepCompleted),r==null?void 0:r.step),...o===i&&{"aria-current":"step"},children:[e.jsxs("div",{className:"flex flex-col items-center mr-4",children:[e.jsx("div",{...m&&{role:"button",tabIndex:0,onKeyDown:u=>{(u.key==="Enter"||u.key===" ")&&(u.preventDefault(),h(o,s.disabled))}},className:a("stepper_icon",W({size:n}),F(c,l),m&&"cursor-pointer hover:scale-105 transition-transform duration-150",s.disabled&&"opacity-50 cursor-not-allowed",r==null?void 0:r.icon),onClick:()=>h(o,s.disabled),children:s.icon||o+1}),o<t.length-1&&e.jsx("div",{className:a("stepper_connector","w-0.5 flex-1 my-2",y(c,l==="finish"),r==null?void 0:r.connector)})]}),e.jsxs("div",{className:a("pb-8",o===t.length-1&&"pb-0"),children:[e.jsx("div",{className:a("stepper_label",T({size:n}),l==="wait"?"text-text-secondary":"text-text-primary",l==="error"&&"text-error",r==null?void 0:r.label),children:s.label}),s.description&&e.jsx("div",{className:a("stepper_description",A({size:n}),"mt-1",r==null?void 0:r.description),children:s.description})]})]},o)})}):Se==="dots"?e.jsx("div",{role:"list",className:a("stepper_root","flex items-start",O[d],r==null?void 0:r.root,M),children:t.map((s,o)=>{const l=f(o,s),m=!s.disabled&&x,u=t[o-1],I=o>0&&u?f(o-1,u):"wait";return e.jsx(E.Fragment,{children:e.jsxs("div",{role:"listitem","aria-label":`Step ${o+1} of ${t.length}`,className:a("stepper_step","flex flex-col items-center flex-1",o===0&&"items-start",o===t.length-1&&"items-end",l==="process"&&(r==null?void 0:r.stepActive),l==="finish"&&(r==null?void 0:r.stepCompleted),r==null?void 0:r.step),...o===i&&{"aria-current":"step"},children:[e.jsxs("div",{className:"flex items-center w-full",children:[o>0&&e.jsx("div",{className:a("stepper_connector","flex-1",S({size:n}),y(c,I==="finish"),r==null?void 0:r.connector)}),e.jsx("div",{...m&&{role:"button",tabIndex:0,onKeyDown:b=>{(b.key==="Enter"||b.key===" ")&&(b.preventDefault(),h(o,s.disabled))}},className:a("stepper_icon",Ne({size:n}),F(c,l),m&&"cursor-pointer hover:scale-105 transition-transform duration-150",s.disabled&&"opacity-50 cursor-not-allowed","flex-shrink-0",r==null?void 0:r.icon),onClick:()=>h(o,s.disabled)}),o<t.length-1&&e.jsx("div",{className:a("stepper_connector","flex-1",S({size:n}),y(c,l==="finish"),r==null?void 0:r.connector)})]}),e.jsxs("div",{className:a("mt-2 px-2",o===0&&"text-left",o===t.length-1&&"text-right",o>0&&o<t.length-1&&"text-center"),children:[e.jsx("div",{className:a("stepper_label",T({size:n}),l==="wait"?"text-text-secondary":"text-text-primary",l==="error"&&"text-error",r==null?void 0:r.label),children:s.label}),s.description&&e.jsx("div",{className:a("stepper_description",A({size:n}),"mt-1",r==null?void 0:r.description),children:s.description})]})]})},o)})}):e.jsx("div",{role:"list",className:a("stepper_root","flex items-start",O[d],r==null?void 0:r.root,M),children:t.map((s,o)=>{const l=f(o,s),m=!s.disabled&&x,u=t[o-1],I=o>0&&u?f(o-1,u):"wait";return e.jsx(E.Fragment,{children:e.jsxs("div",{role:"listitem","aria-label":`Step ${o+1} of ${t.length}`,className:a("stepper_step","flex flex-col items-center flex-1",o===0&&"items-start",o===t.length-1&&"items-end",l==="process"&&(r==null?void 0:r.stepActive),l==="finish"&&(r==null?void 0:r.stepCompleted),r==null?void 0:r.step),...o===i&&{"aria-current":"step"},children:[e.jsxs("div",{className:"flex items-center w-full",children:[o>0&&e.jsx("div",{className:a("stepper_connector","flex-1",S({size:n}),y(c,I==="finish"),r==null?void 0:r.connector)}),e.jsx("div",{...m&&{role:"button",tabIndex:0,onKeyDown:b=>{(b.key==="Enter"||b.key===" ")&&(b.preventDefault(),h(o,s.disabled))}},className:a("stepper_icon",W({size:n}),F(c,l),m&&"cursor-pointer hover:scale-105 transition-transform duration-150",s.disabled&&"opacity-50 cursor-not-allowed","flex-shrink-0",r==null?void 0:r.icon),onClick:()=>h(o,s.disabled),children:s.icon||o+1}),o<t.length-1&&e.jsx("div",{className:a("stepper_connector","flex-1",S({size:n}),y(c,l==="finish"),r==null?void 0:r.connector)})]}),e.jsxs("div",{className:a("mt-2 px-2",o===0&&"text-left",o===t.length-1&&"text-right",o>0&&o<t.length-1&&"text-center"),children:[e.jsx("div",{className:a("stepper_label",T({size:n}),l==="wait"?"text-text-secondary":"text-text-primary",l==="error"&&"text-error",r==null?void 0:r.label),children:s.label}),s.description&&e.jsx("div",{className:a("stepper_description",A({size:n}),"mt-1",r==null?void 0:r.description),children:s.description})]})]})},o)})})});p.displayName="Stepper";p.__docgenInfo={description:"",methods:[],displayName:"Stepper",props:{color:{defaultValue:{value:'"primary"',computed:!1},required:!1},size:{defaultValue:{value:'"md"',computed:!1},required:!1},variant:{defaultValue:{value:'"default"',computed:!1},required:!1},orientation:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},type:{defaultValue:{value:'"numbered"',computed:!1},required:!1}}};const qe={title:"Navigation/Stepper",component:p,tags:["autodocs"],argTypes:{currentStep:{control:"number",description:"Current active step index (0-based)"},color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"],description:"Theme color"},size:{control:"select",options:["xs","sm","md","lg"],description:"Size variant"},variant:{control:"select",options:["default","solid","soft"],description:"Visual style variant"},orientation:{control:"select",options:["horizontal","vertical"],description:"Layout orientation"},type:{control:"select",options:["numbered","dots"],description:"Step indicator type"},status:{control:"select",options:["wait","process","finish","error"],description:"Overall status for current step"}}},ge=[{label:"Step 1",description:"First step description"},{label:"Step 2",description:"Second step description"},{label:"Step 3",description:"Third step description"},{label:"Step 4",description:"Fourth step description"}],D=[{label:"Cart",description:"Review your items",icon:e.jsx(xe,{className:"w-5 h-5"})},{label:"Shipping",description:"Enter shipping details",icon:e.jsx(he,{className:"w-5 h-5"})},{label:"Payment",description:"Complete payment",icon:e.jsx(fe,{className:"w-5 h-5"})},{label:"Confirm",description:"Order confirmation",icon:e.jsx(g,{className:"w-5 h-5"})}],Ve=[{label:"Account",description:"Create your account",icon:e.jsx(ye,{className:"w-5 h-5"})},{label:"Profile",description:"Complete your profile",icon:e.jsx(we,{className:"w-5 h-5"})},{label:"Verify",description:"Verify your email",icon:e.jsx(ke,{className:"w-5 h-5"})},{label:"Done",description:"Start using the app",icon:e.jsx(g,{className:"w-5 h-5"})}],j={args:{steps:ge,currentStep:1,color:"primary",size:"md",variant:"default",orientation:"horizontal",type:"numbered"}},C={args:{steps:D,currentStep:1,color:"primary"}},w={render:()=>e.jsxs("div",{className:"space-y-12",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4",children:"Dots - Primary"}),e.jsx(p,{steps:ge,currentStep:1,type:"dots",color:"primary"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4",children:"Dots - Success"}),e.jsx(p,{steps:[{label:"Start",description:"Begin the process"},{label:"Middle",description:"Process in progress"},{label:"End",description:"Complete the process"}],currentStep:1,type:"dots",color:"success"})]})]})},k={args:{orientation:"horizontal"},render:()=>e.jsx("div",{className:"space-y-8",children:e.jsxs("div",{className:"max-w-md",children:[e.jsx("h3",{className:"text-sm font-semibold mb-4",children:"Vertical - Numbered"}),e.jsx(p,{steps:Ve,currentStep:1,orientation:"vertical",color:"primary"})]})})},N={render:()=>e.jsxs("div",{className:"max-w-2xl",children:[e.jsx("h3",{className:"text-sm font-semibold mb-4",children:"Setup Process"}),e.jsx(p,{steps:[{label:"Create Account",description:"Sign up with your email and create a secure password"},{label:"Verify Email",description:"Check your inbox and verify your email address"},{label:"Complete Profile",description:"Add your personal information and preferences"},{label:"Choose Plan",description:"Select a subscription plan that fits your needs"}],currentStep:1,orientation:"vertical",color:"accent",size:"md"})]})},V={render:()=>{const[t,i]=Y.useState(1);return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"text-sm text-text-secondary",children:"Click on any completed step to navigate back"}),e.jsx(p,{steps:D,currentStep:t,onStepClick:d=>{d<=t&&i(d)},color:"primary"}),e.jsxs("div",{className:"flex gap-2 mt-4",children:[e.jsx("button",{onClick:()=>i(Math.max(0,t-1)),disabled:t===0,className:"px-4 py-2 bg-border text-text-primary rounded hover:bg-border/80 disabled:opacity-50 disabled:cursor-not-allowed",children:"Previous"}),e.jsx("button",{onClick:()=>i(Math.min(D.length-1,t+1)),disabled:t===D.length-1,className:"px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed",children:"Next"})]})]})}},P={render:()=>{const[t,i]=Y.useState(0),d=[{label:"Shopping Cart",description:"Review your items",icon:e.jsx(xe,{className:"w-5 h-5"})},{label:"Shipping Info",description:"Enter delivery address",icon:e.jsx(he,{className:"w-5 h-5"})},{label:"Payment",description:"Complete payment",icon:e.jsx(fe,{className:"w-5 h-5"})},{label:"Confirmation",description:"Order confirmed",icon:e.jsx(g,{className:"w-5 h-5"})}],n=[e.jsxs("div",{className:"p-6 bg-surface rounded-lg border border-border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Your Cart"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Product 1"}),e.jsx("span",{className:"font-medium",children:"$29.99"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Product 2"}),e.jsx("span",{className:"font-medium",children:"$49.99"})]}),e.jsxs("div",{className:"border-t border-border pt-3 flex justify-between font-bold",children:[e.jsx("span",{children:"Total"}),e.jsx("span",{children:"$79.98"})]})]})]},"cart"),e.jsxs("div",{className:"p-6 bg-surface rounded-lg border border-border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Shipping Address"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("input",{type:"text",placeholder:"Full Name",className:"w-full px-3 py-2 border border-border rounded"}),e.jsx("input",{type:"text",placeholder:"Street Address",className:"w-full px-3 py-2 border border-border rounded"}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsx("input",{type:"text",placeholder:"City",className:"px-3 py-2 border border-border rounded"}),e.jsx("input",{type:"text",placeholder:"ZIP Code",className:"px-3 py-2 border border-border rounded"})]})]})]},"shipping"),e.jsxs("div",{className:"p-6 bg-surface rounded-lg border border-border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Payment Details"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("input",{type:"text",placeholder:"Card Number",className:"w-full px-3 py-2 border border-border rounded"}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsx("input",{type:"text",placeholder:"MM/YY",className:"px-3 py-2 border border-border rounded"}),e.jsx("input",{type:"text",placeholder:"CVV",className:"px-3 py-2 border border-border rounded"})]})]})]},"payment"),e.jsxs("div",{className:"p-6 bg-success/10 rounded-lg border border-success",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx(g,{className:"w-6 h-6 text-success"}),e.jsx("h3",{className:"text-lg font-semibold text-success",children:"Order Confirmed!"})]}),e.jsx("p",{className:"text-text-secondary",children:"Your order has been placed successfully. You will receive a confirmation email shortly."})]},"confirmation")];return e.jsxs("div",{className:"max-w-2xl space-y-6",children:[e.jsx(p,{steps:d,currentStep:t,color:"success",size:"md"}),e.jsx("div",{className:"min-h-[200px]",children:n[t]}),e.jsxs("div",{className:"flex gap-2",children:[t>0&&e.jsx("button",{onClick:()=>i(t-1),className:"px-4 py-2 bg-border text-text-primary rounded hover:bg-border/80",children:"Back"}),t<d.length-1&&e.jsx("button",{onClick:()=>i(t+1),className:"px-4 py-2 bg-success text-white rounded hover:bg-success/90 ml-auto",children:t===d.length-2?"Complete Order":"Continue"})]})]})}},z={render:()=>{const[t,i]=Y.useState(0),d=[{label:"Welcome",description:"Get started",icon:e.jsx(je,{className:"w-5 h-5"})},{label:"Profile",description:"Tell us about yourself",icon:e.jsx(ye,{className:"w-5 h-5"})},{label:"Preferences",description:"Customize your experience",icon:e.jsx(Ce,{className:"w-5 h-5"})},{label:"Complete",description:"You're all set!",icon:e.jsx(g,{className:"w-5 h-5"})}];return e.jsxs("div",{className:"max-w-3xl",children:[e.jsx(p,{steps:d,currentStep:t,orientation:"vertical",color:"primary",size:"lg"}),e.jsxs("div",{className:"mt-6 flex gap-2",children:[t>0&&e.jsx("button",{onClick:()=>i(t-1),className:"px-4 py-2 bg-border text-text-primary rounded hover:bg-border/80",children:"Previous"}),e.jsx("button",{onClick:()=>i(Math.min(d.length-1,t+1)),disabled:t===d.length-1,className:"px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed ml-auto",children:t===d.length-1?"Finish":"Next"})]})]})}},_={render:()=>{const t=["default","primary","secondary","accent","success","error","warning","info"],i=["xs","sm","md","lg"],d=[{label:"Step 1"},{label:"Step 2"},{label:"Step 3"}];return e.jsx("div",{className:"space-y-6",children:e.jsxs("table",{className:"border-collapse w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-2 text-left text-sm text-gray-500",children:"Color \\ Size"}),i.map(n=>e.jsx("th",{className:"p-2 text-center text-sm text-gray-500",children:n},n))]})}),e.jsx("tbody",{children:t.map(n=>e.jsxs("tr",{children:[e.jsx("td",{className:"p-2 text-sm font-medium",children:n}),i.map(c=>e.jsx("td",{className:"p-2",children:e.jsx(p,{steps:d,currentStep:1,color:n,size:c})},c))]},n))})]})})}};var R,q,B;j.parameters={...j.parameters,docs:{...(R=j.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    steps: basicSteps,
    currentStep: 1,
    color: 'primary',
    size: 'md',
    variant: 'default',
    orientation: 'horizontal',
    type: 'numbered'
  }
}`,...(B=(q=j.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var H,K,U;C.parameters={...C.parameters,docs:{...(H=C.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    steps: checkoutSteps,
    currentStep: 1,
    color: 'primary'
  }
}`,...(U=(K=C.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var G,L,Z;w.parameters={...w.parameters,docs:{...(G=w.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div className="space-y-12">
      <div>
        <h3 className="text-sm font-semibold mb-4">Dots - Primary</h3>
        <Stepper steps={basicSteps} currentStep={1} type="dots" color="primary" />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-4">Dots - Success</h3>
        <Stepper steps={[{
        label: 'Start',
        description: 'Begin the process'
      }, {
        label: 'Middle',
        description: 'Process in progress'
      }, {
        label: 'End',
        description: 'Complete the process'
      }]} currentStep={1} type="dots" color="success" />
      </div>
    </div>
}`,...(Z=(L=w.parameters)==null?void 0:L.docs)==null?void 0:Z.source}}};var J,Q,X;k.parameters={...k.parameters,docs:{...(J=k.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    orientation: "horizontal"
  },
  render: () => <div className="space-y-8">
      <div className="max-w-md">
        <h3 className="text-sm font-semibold mb-4">Vertical - Numbered</h3>
        <Stepper steps={registrationSteps} currentStep={1} orientation="vertical" color="primary" />
      </div>
    </div>
}`,...(X=(Q=k.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var ee,re,te;N.parameters={...N.parameters,docs:{...(ee=N.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <div className="max-w-2xl">
      <h3 className="text-sm font-semibold mb-4">Setup Process</h3>
      <Stepper steps={[{
      label: 'Create Account',
      description: 'Sign up with your email and create a secure password'
    }, {
      label: 'Verify Email',
      description: 'Check your inbox and verify your email address'
    }, {
      label: 'Complete Profile',
      description: 'Add your personal information and preferences'
    }, {
      label: 'Choose Plan',
      description: 'Select a subscription plan that fits your needs'
    }]} currentStep={1} orientation="vertical" color="accent" size="md" />
    </div>
}`,...(te=(re=N.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var oe,se,ie;V.parameters={...V.parameters,docs:{...(oe=V.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => {
    const [currentStep, setCurrentStep] = useState(1);
    return <div className="space-y-4">
        <div className="text-sm text-text-secondary">
          Click on any completed step to navigate back
        </div>
        <Stepper steps={checkoutSteps} currentStep={currentStep} onStepClick={index => {
        if (index <= currentStep) {
          setCurrentStep(index);
        }
      }} color="primary" />
        <div className="flex gap-2 mt-4">
          <button onClick={() => setCurrentStep(Math.max(0, currentStep - 1))} disabled={currentStep === 0} className="px-4 py-2 bg-border text-text-primary rounded hover:bg-border/80 disabled:opacity-50 disabled:cursor-not-allowed">
            Previous
          </button>
          <button onClick={() => setCurrentStep(Math.min(checkoutSteps.length - 1, currentStep + 1))} disabled={currentStep === checkoutSteps.length - 1} className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed">
            Next
          </button>
        </div>
      </div>;
  }
}`,...(ie=(se=V.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var ne,ae,le;P.parameters={...P.parameters,docs:{...(ne=P.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => {
    const [currentStep, setCurrentStep] = useState(0);
    const steps: StepItem[] = [{
      label: 'Shopping Cart',
      description: 'Review your items',
      icon: <ShoppingCart className="w-5 h-5" />
    }, {
      label: 'Shipping Info',
      description: 'Enter delivery address',
      icon: <Truck className="w-5 h-5" />
    }, {
      label: 'Payment',
      description: 'Complete payment',
      icon: <CreditCard className="w-5 h-5" />
    }, {
      label: 'Confirmation',
      description: 'Order confirmed',
      icon: <Check className="w-5 h-5" />
    }];
    const stepContent = [<div key="cart" className="p-6 bg-surface rounded-lg border border-border">
        <h3 className="text-lg font-semibold mb-4">Your Cart</h3>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span>Product 1</span>
            <span className="font-medium">$29.99</span>
          </div>
          <div className="flex justify-between">
            <span>Product 2</span>
            <span className="font-medium">$49.99</span>
          </div>
          <div className="border-t border-border pt-3 flex justify-between font-bold">
            <span>Total</span>
            <span>$79.98</span>
          </div>
        </div>
      </div>, <div key="shipping" className="p-6 bg-surface rounded-lg border border-border">
        <h3 className="text-lg font-semibold mb-4">Shipping Address</h3>
        <div className="space-y-3">
          <input type="text" placeholder="Full Name" className="w-full px-3 py-2 border border-border rounded" />
          <input type="text" placeholder="Street Address" className="w-full px-3 py-2 border border-border rounded" />
          <div className="grid grid-cols-2 gap-3">
            <input type="text" placeholder="City" className="px-3 py-2 border border-border rounded" />
            <input type="text" placeholder="ZIP Code" className="px-3 py-2 border border-border rounded" />
          </div>
        </div>
      </div>, <div key="payment" className="p-6 bg-surface rounded-lg border border-border">
        <h3 className="text-lg font-semibold mb-4">Payment Details</h3>
        <div className="space-y-3">
          <input type="text" placeholder="Card Number" className="w-full px-3 py-2 border border-border rounded" />
          <div className="grid grid-cols-2 gap-3">
            <input type="text" placeholder="MM/YY" className="px-3 py-2 border border-border rounded" />
            <input type="text" placeholder="CVV" className="px-3 py-2 border border-border rounded" />
          </div>
        </div>
      </div>, <div key="confirmation" className="p-6 bg-success/10 rounded-lg border border-success">
        <div className="flex items-center gap-3 mb-4">
          <Check className="w-6 h-6 text-success" />
          <h3 className="text-lg font-semibold text-success">Order Confirmed!</h3>
        </div>
        <p className="text-text-secondary">
          Your order has been placed successfully. You will receive a confirmation email shortly.
        </p>
      </div>];
    return <div className="max-w-2xl space-y-6">
        <Stepper steps={steps} currentStep={currentStep} color="success" size="md" />
        <div className="min-h-[200px]">
          {stepContent[currentStep]}
        </div>
        <div className="flex gap-2">
          {currentStep > 0 && <button onClick={() => setCurrentStep(currentStep - 1)} className="px-4 py-2 bg-border text-text-primary rounded hover:bg-border/80">
              Back
            </button>}
          {currentStep < steps.length - 1 && <button onClick={() => setCurrentStep(currentStep + 1)} className="px-4 py-2 bg-success text-white rounded hover:bg-success/90 ml-auto">
              {currentStep === steps.length - 2 ? 'Complete Order' : 'Continue'}
            </button>}
        </div>
      </div>;
  }
}`,...(le=(ae=P.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};var de,ce,pe;z.parameters={...z.parameters,docs:{...(de=z.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => {
    const [currentStep, setCurrentStep] = useState(0);
    const steps: StepItem[] = [{
      label: 'Welcome',
      description: 'Get started',
      icon: <Home className="w-5 h-5" />
    }, {
      label: 'Profile',
      description: 'Tell us about yourself',
      icon: <User className="w-5 h-5" />
    }, {
      label: 'Preferences',
      description: 'Customize your experience',
      icon: <Settings className="w-5 h-5" />
    }, {
      label: 'Complete',
      description: 'You\\'re all set!',
      icon: <Check className="w-5 h-5" />
    }];
    return <div className="max-w-3xl">
        <Stepper steps={steps} currentStep={currentStep} orientation="vertical" color="primary" size="lg" />
        <div className="mt-6 flex gap-2">
          {currentStep > 0 && <button onClick={() => setCurrentStep(currentStep - 1)} className="px-4 py-2 bg-border text-text-primary rounded hover:bg-border/80">
              Previous
            </button>}
          <button onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))} disabled={currentStep === steps.length - 1} className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed ml-auto">
            {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
          </button>
        </div>
      </div>;
  }
}`,...(pe=(ce=z.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var ue,me,be;_.parameters={..._.parameters,docs:{...(ue=_.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => {
    const colors = ['default', 'primary', 'secondary', 'accent', 'success', 'error', 'warning', 'info'] as const;
    const sizes = ['xs', 'sm', 'md', 'lg'] as const;
    const simpleSteps: StepItem[] = [{
      label: 'Step 1'
    }, {
      label: 'Step 2'
    }, {
      label: 'Step 3'
    }];
    return <div className="space-y-6">
        <table className="border-collapse w-full">
          <thead>
            <tr>
              <th className="p-2 text-left text-sm text-gray-500">Color \\ Size</th>
              {sizes.map(s => <th key={s} className="p-2 text-center text-sm text-gray-500">{s}</th>)}
            </tr>
          </thead>
          <tbody>
            {colors.map(c => <tr key={c}>
                <td className="p-2 text-sm font-medium">{c}</td>
                {sizes.map(s => <td key={s} className="p-2">
                    <Stepper steps={simpleSteps} currentStep={1} color={c} size={s} />
                  </td>)}
              </tr>)}
          </tbody>
        </table>
      </div>;
  }
}`,...(be=(me=_.parameters)==null?void 0:me.docs)==null?void 0:be.source}}};const Be=["Default","WithIcons","DotsType","VerticalOrientation","VerticalWithDetails","ClickableSteps","InteractiveCheckout","OnboardingFlow","ColorSizeMatrix"];export{V as ClickableSteps,_ as ColorSizeMatrix,j as Default,w as DotsType,P as InteractiveCheckout,z as OnboardingFlow,k as VerticalOrientation,N as VerticalWithDetails,C as WithIcons,Be as __namedExportsOrder,qe as default};
