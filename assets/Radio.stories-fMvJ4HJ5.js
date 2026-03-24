import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./index-ZH-6pyQh.js";import{R as r}from"./index-DbEqbZ9C.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-_uLxnvdl.js";import"./variants-C8qliDOr.js";const q={title:"Data Entry/Radio",component:r,tags:["autodocs"],argTypes:{color:{control:"select",options:["primary","secondary","accent","success","error","warning","info"],description:"Theme color"},size:{control:"select",options:["xs","sm","md","lg"],description:"Radio size"},disabled:{control:"boolean",description:"Disabled state"},label:{control:"text",description:"Label text"},helperText:{control:"text",description:"Helper text below radio"},error:{control:"text",description:"Error message"}}},o={args:{label:"Radio option",name:"default"}},l={render:()=>{const[s,t]=n.useState("option1");return e.jsxs("div",{className:"flex flex-col gap-4 max-w-md",children:[e.jsx(r,{label:"Option 1",name:"options",value:"option1",checked:s==="option1",onChange:a=>t(a.target.value)}),e.jsx(r,{label:"Option 2",helperText:"This is a helpful description for option 2",name:"options",value:"option2",checked:s==="option2",onChange:a=>t(a.target.value)}),e.jsx(r,{label:"Option 3",helperText:"This is a helpful description for option 3",name:"options",value:"option3",checked:s==="option3",onChange:a=>t(a.target.value)})]})}},i={args:{label:"Disabled (checked)",name:"disabled",disabled:!0,checked:!0}},d={render:()=>{const[s,t]=n.useState("");return e.jsxs("div",{className:"flex flex-col gap-4 max-w-md",children:[e.jsx(r,{label:"Option 1",name:"error-example",value:"option1",error:!s&&"Please select an option",checked:s==="option1",onChange:a=>t(a.target.value)}),e.jsx(r,{label:"Option 2",name:"error-example",value:"option2",error:!s&&"Please select an option",checked:s==="option2",onChange:a=>t(a.target.value)}),e.jsx(r,{label:"Option 3",name:"error-example",value:"option3",error:!s&&"Please select an option",checked:s==="option3",onChange:a=>t(a.target.value)})]})}},c={render:()=>{const[s,t]=n.useState("credit-card");return e.jsxs("div",{className:"space-y-4 max-w-md",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Select Payment Method"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(r,{label:"Credit Card",helperText:"Pay with Visa, Mastercard, or American Express",name:"payment",value:"credit-card",checked:s==="credit-card",onChange:a=>t(a.target.value)}),e.jsx(r,{label:"PayPal",helperText:"Secure payment through PayPal",name:"payment",value:"paypal",checked:s==="paypal",onChange:a=>t(a.target.value)}),e.jsx(r,{label:"Bank Transfer",helperText:"Direct bank transfer (may take 2-3 business days)",name:"payment",value:"bank-transfer",checked:s==="bank-transfer",onChange:a=>t(a.target.value)}),e.jsx(r,{label:"Cryptocurrency",helperText:"Pay with Bitcoin or Ethereum",name:"payment",value:"crypto",disabled:!0})]})]})}},p={render:()=>{const[s,t]=n.useState("standard");return e.jsxs("div",{className:"space-y-4 max-w-md",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Shipping Method"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(r,{label:"Standard Shipping - Free",helperText:"Delivery in 5-7 business days",name:"shipping",value:"standard",color:"success",checked:s==="standard",onChange:a=>t(a.target.value)}),e.jsx(r,{label:"Express Shipping - $9.99",helperText:"Delivery in 2-3 business days",name:"shipping",value:"express",color:"info",checked:s==="express",onChange:a=>t(a.target.value)}),e.jsx(r,{label:"Overnight Shipping - $24.99",helperText:"Next business day delivery",name:"shipping",value:"overnight",color:"warning",checked:s==="overnight",onChange:a=>t(a.target.value)})]})]})}},m={render:()=>{const[s,t]=n.useState("pro");return e.jsxs("div",{className:"space-y-4 max-w-2xl",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Choose Your Plan"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"border border-border rounded-lg p-4",children:e.jsx(r,{label:e.jsx("div",{className:"flex items-center justify-between w-full",children:e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"Free"}),e.jsx("span",{className:"ml-2 text-muted-foreground",children:"$0/month"})]})}),helperText:"Basic features for personal use",name:"plan",value:"free",checked:s==="free",onChange:a=>t(a.target.value)})}),e.jsx("div",{className:"border border-primary rounded-lg p-4 bg-primary/5",children:e.jsx(r,{label:e.jsxs("div",{className:"flex items-center justify-between w-full",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"Pro"}),e.jsx("span",{className:"ml-2 text-muted-foreground",children:"$19/month"})]}),e.jsx("span",{className:"px-2 py-1 text-xs bg-primary text-white rounded",children:"Popular"})]}),helperText:"Advanced features and priority support",name:"plan",value:"pro",color:"primary",checked:s==="pro",onChange:a=>t(a.target.value)})}),e.jsx("div",{className:"border border-border rounded-lg p-4",children:e.jsx(r,{label:e.jsx("div",{className:"flex items-center justify-between w-full",children:e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"Enterprise"}),e.jsx("span",{className:"ml-2 text-muted-foreground",children:"$99/month"})]})}),helperText:"Custom solutions with dedicated support",name:"plan",value:"enterprise",checked:s==="enterprise",onChange:a=>t(a.target.value)})})]})]})}},h={render:()=>{const s=["primary","secondary","accent","success","error","warning","info"],t=["xs","sm","md","lg"];return e.jsx("div",{className:"space-y-6",children:e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-2 text-left text-sm text-gray-500",children:"Color \\ Size"}),t.map(a=>e.jsx("th",{className:"p-2 text-center text-sm text-gray-500",children:a},a))]})}),e.jsx("tbody",{children:s.map(a=>e.jsxs("tr",{children:[e.jsx("td",{className:"p-2 text-sm font-medium",children:a}),t.map(u=>e.jsx("td",{className:"p-2",children:e.jsx(r,{color:a,size:u,label:a,name:`radio-${a}-${u}`,defaultChecked:!0})},u))]},a))})]})})})}};var x,g,v;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Radio option',
    name: 'default'
  }
}`,...(v=(g=o.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var b,y,f;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState('option1');
    return <div className="flex flex-col gap-4 max-w-md">
        <Radio label="Option 1" name="options" value="option1" checked={selected === 'option1'} onChange={e => setSelected(e.target.value)} />
        <Radio label="Option 2" helperText="This is a helpful description for option 2" name="options" value="option2" checked={selected === 'option2'} onChange={e => setSelected(e.target.value)} />
        <Radio label="Option 3" helperText="This is a helpful description for option 3" name="options" value="option3" checked={selected === 'option3'} onChange={e => setSelected(e.target.value)} />
      </div>;
  }
}`,...(f=(y=l.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var N,j,S;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Disabled (checked)',
    name: 'disabled',
    disabled: true,
    checked: true
  }
}`,...(S=(j=i.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var k,C,P;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState('');
    return <div className="flex flex-col gap-4 max-w-md">
        <Radio label="Option 1" name="error-example" value="option1" error={!selected && 'Please select an option'} checked={selected === 'option1'} onChange={e => setSelected(e.target.value)} />
        <Radio label="Option 2" name="error-example" value="option2" error={!selected && 'Please select an option'} checked={selected === 'option2'} onChange={e => setSelected(e.target.value)} />
        <Radio label="Option 3" name="error-example" value="option3" error={!selected && 'Please select an option'} checked={selected === 'option3'} onChange={e => setSelected(e.target.value)} />
      </div>;
  }
}`,...(P=(C=d.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var w,T,R;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const [paymentMethod, setPaymentMethod] = useState('credit-card');
    return <div className="space-y-4 max-w-md">
        <h3 className="text-lg font-semibold">Select Payment Method</h3>
        <div className="space-y-3">
          <Radio label="Credit Card" helperText="Pay with Visa, Mastercard, or American Express" name="payment" value="credit-card" checked={paymentMethod === 'credit-card'} onChange={e => setPaymentMethod(e.target.value)} />
          <Radio label="PayPal" helperText="Secure payment through PayPal" name="payment" value="paypal" checked={paymentMethod === 'paypal'} onChange={e => setPaymentMethod(e.target.value)} />
          <Radio label="Bank Transfer" helperText="Direct bank transfer (may take 2-3 business days)" name="payment" value="bank-transfer" checked={paymentMethod === 'bank-transfer'} onChange={e => setPaymentMethod(e.target.value)} />
          <Radio label="Cryptocurrency" helperText="Pay with Bitcoin or Ethereum" name="payment" value="crypto" disabled />
        </div>
      </div>;
  }
}`,...(R=(T=c.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var E,M,O;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [shipping, setShipping] = useState('standard');
    return <div className="space-y-4 max-w-md">
        <h3 className="text-lg font-semibold">Shipping Method</h3>
        <div className="space-y-3">
          <Radio label="Standard Shipping - Free" helperText="Delivery in 5-7 business days" name="shipping" value="standard" color="success" checked={shipping === 'standard'} onChange={e => setShipping(e.target.value)} />
          <Radio label="Express Shipping - $9.99" helperText="Delivery in 2-3 business days" name="shipping" value="express" color="info" checked={shipping === 'express'} onChange={e => setShipping(e.target.value)} />
          <Radio label="Overnight Shipping - $24.99" helperText="Next business day delivery" name="shipping" value="overnight" color="warning" checked={shipping === 'overnight'} onChange={e => setShipping(e.target.value)} />
        </div>
      </div>;
  }
}`,...(O=(M=p.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var z,D,$;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const [plan, setPlan] = useState('pro');
    return <div className="space-y-4 max-w-2xl">
        <h3 className="text-lg font-semibold">Choose Your Plan</h3>
        <div className="space-y-4">
          <div className="border border-border rounded-lg p-4">
            <Radio label={<div className="flex items-center justify-between w-full">
                  <div>
                    <span className="font-medium">Free</span>
                    <span className="ml-2 text-muted-foreground">$0/month</span>
                  </div>
                </div>} helperText="Basic features for personal use" name="plan" value="free" checked={plan === 'free'} onChange={e => setPlan(e.target.value)} />
          </div>

          <div className="border border-primary rounded-lg p-4 bg-primary/5">
            <Radio label={<div className="flex items-center justify-between w-full">
                  <div>
                    <span className="font-medium">Pro</span>
                    <span className="ml-2 text-muted-foreground">$19/month</span>
                  </div>
                  <span className="px-2 py-1 text-xs bg-primary text-white rounded">
                    Popular
                  </span>
                </div>} helperText="Advanced features and priority support" name="plan" value="pro" color="primary" checked={plan === 'pro'} onChange={e => setPlan(e.target.value)} />
          </div>

          <div className="border border-border rounded-lg p-4">
            <Radio label={<div className="flex items-center justify-between w-full">
                  <div>
                    <span className="font-medium">Enterprise</span>
                    <span className="ml-2 text-muted-foreground">$99/month</span>
                  </div>
                </div>} helperText="Custom solutions with dedicated support" name="plan" value="enterprise" checked={plan === 'enterprise'} onChange={e => setPlan(e.target.value)} />
          </div>
        </div>
      </div>;
  }
}`,...($=(D=m.parameters)==null?void 0:D.docs)==null?void 0:$.source}}};var B,A,F;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const colors = ['primary', 'secondary', 'accent', 'success', 'error', 'warning', 'info'] as const;
    const sizes = ['xs', 'sm', 'md', 'lg'] as const;
    return <div className="space-y-6">
        <div className="overflow-x-auto">
          <table className="border-collapse">
            <thead>
              <tr>
                <th className="p-2 text-left text-sm text-gray-500">Color \\ Size</th>
                {sizes.map(size => <th key={size} className="p-2 text-center text-sm text-gray-500">{size}</th>)}
              </tr>
            </thead>
            <tbody>
              {colors.map(color => <tr key={color}>
                  <td className="p-2 text-sm font-medium">{color}</td>
                  {sizes.map(size => <td key={size} className="p-2">
                      <Radio color={color} size={size} label={color} name={\`radio-\${color}-\${size}\`} defaultChecked />
                    </td>)}
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>;
  }
}`,...(F=(A=h.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};const G=["Default","WithLabels","Disabled","WithError","PaymentMethodExample","ShippingOptionsExample","SubscriptionPlanExample","ColorSizeMatrix"];export{h as ColorSizeMatrix,o as Default,i as Disabled,c as PaymentMethodExample,p as ShippingOptionsExample,m as SubscriptionPlanExample,d as WithError,l as WithLabels,G as __namedExportsOrder,q as default};
