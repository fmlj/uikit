import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as Q,r as s}from"./index-ZH-6pyQh.js";import{R as o}from"./index-DbEqbZ9C.js";import{c as p}from"./utils-_uLxnvdl.js";import"./_commonjsHelpers-CqkleIqs.js";import"./variants-C8qliDOr.js";const c=Q.memo(({label:a,helperText:r,error:t,orientation:d="vertical",className:i,classNames:n,children:S,ref:l,...u})=>{const k=s.useId(),j=`radiogroup-label-${k}`,C=`radiogroup-helper-${k}`,K=!!(r||t);return e.jsxs("div",{"data-slot":"root",ref:l,className:p("radioGroup_root","w-full",i,n==null?void 0:n.root),role:"radiogroup","aria-labelledby":a?j:void 0,"aria-describedby":K?C:void 0,...u,children:[a&&e.jsx("div",{className:"mb-2",children:e.jsx("span",{id:j,className:p("radioGroup_label","text-sm font-medium text-text-secondary",n==null?void 0:n.label),children:a})}),e.jsx("div",{className:p("radioGroup_group","flex",d==="vertical"?"flex-col gap-2":"flex-row flex-wrap gap-4",n==null?void 0:n.group),children:S}),(r||t)&&e.jsx("p",{id:C,className:p(t?"radioGroup_error":"radioGroup_helper","mt-2 text-xs",t?"text-error":"text-text-secondary",t?n==null?void 0:n.error:n==null?void 0:n.helper),children:t||r})]})});c.displayName="RadioGroup";c.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{orientation:{defaultValue:{value:"'vertical'",computed:!1},required:!1}}};const re={title:"Data Entry/RadioGroup",component:c,tags:["autodocs"],argTypes:{orientation:{control:"select",options:["vertical","horizontal"],description:"Layout orientation"},label:{control:"text",description:"Group label"},helperText:{control:"text",description:"Helper text"},error:{control:"text",description:"Error message"}}},m={render:()=>{const[a,r]=s.useState("option1");return e.jsxs(c,{label:"Select an option",children:[e.jsx(o,{label:"Option 1",name:"primary",value:"option1",checked:a==="option1",onChange:t=>r(t.target.value)}),e.jsx(o,{label:"Option 2",name:"primary",value:"option2",checked:a==="option2",onChange:t=>r(t.target.value)}),e.jsx(o,{label:"Option 3",name:"primary",value:"option3",checked:a==="option3",onChange:t=>r(t.target.value)})]})}},h={render:()=>{const[a,r]=s.useState("email");return e.jsxs(c,{label:"Contact Method",orientation:"vertical",children:[e.jsx(o,{label:"Email",helperText:"We'll send updates to your email",name:"vertical",value:"email",checked:a==="email",onChange:t=>r(t.target.value)}),e.jsx(o,{label:"Phone",helperText:"We'll call you for important updates",name:"vertical",value:"phone",checked:a==="phone",onChange:t=>r(t.target.value)}),e.jsx(o,{label:"SMS",helperText:"Receive text messages",name:"vertical",value:"sms",checked:a==="sms",onChange:t=>r(t.target.value)})]})}},v={render:()=>{const[a,r]=s.useState("medium");return e.jsxs(c,{label:"Size",orientation:"horizontal",children:[e.jsx(o,{label:"Small",name:"horizontal",value:"small",checked:a==="small",onChange:t=>r(t.target.value)}),e.jsx(o,{label:"Medium",name:"horizontal",value:"medium",checked:a==="medium",onChange:t=>r(t.target.value)}),e.jsx(o,{label:"Large",name:"horizontal",value:"large",checked:a==="large",onChange:t=>r(t.target.value)})]})}},x={render:()=>{const[a,r]=s.useState("standard");return e.jsxs(c,{label:"Shipping Method",helperText:"Choose your preferred delivery option",orientation:"vertical",children:[e.jsx(o,{label:"Standard Shipping - Free",helperText:"Delivery in 5-7 business days",name:"shipping",value:"standard",checked:a==="standard",onChange:t=>r(t.target.value)}),e.jsx(o,{label:"Express Shipping - $9.99",helperText:"Delivery in 2-3 business days",name:"shipping",value:"express",checked:a==="express",onChange:t=>r(t.target.value)}),e.jsx(o,{label:"Overnight Shipping - $24.99",helperText:"Next business day delivery",name:"shipping",value:"overnight",checked:a==="overnight",onChange:t=>r(t.target.value)})]})}},y={render:()=>{const[a,r]=s.useState(""),[t,d]=s.useState(!1),i=()=>{d(!0)};return e.jsxs("div",{className:"space-y-4 max-w-md",children:[e.jsxs(c,{label:"Select your preference *",error:t&&!a?"Please select an option":"",orientation:"vertical",children:[e.jsx(o,{label:"Option 1",name:"error-demo",value:"option1",checked:a==="option1",onChange:n=>r(n.target.value)}),e.jsx(o,{label:"Option 2",name:"error-demo",value:"option2",checked:a==="option2",onChange:n=>r(n.target.value)}),e.jsx(o,{label:"Option 3",name:"error-demo",value:"option3",checked:a==="option3",onChange:n=>r(n.target.value)})]}),e.jsx("button",{onClick:i,className:"px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors",children:"Submit"})]})}},g={render:()=>{const[a,r]=s.useState("credit-card");return e.jsx("div",{className:"max-w-md",children:e.jsxs(c,{label:"Select Payment Method",helperText:"Choose how you'd like to pay",orientation:"vertical",children:[e.jsx(o,{label:"Credit Card",helperText:"Pay with Visa, Mastercard, or American Express",name:"payment",value:"credit-card",checked:a==="credit-card",onChange:t=>r(t.target.value)}),e.jsx(o,{label:"PayPal",helperText:"Secure payment through PayPal",name:"payment",value:"paypal",checked:a==="paypal",onChange:t=>r(t.target.value)}),e.jsx(o,{label:"Bank Transfer",helperText:"Direct bank transfer (may take 2-3 business days)",name:"payment",value:"bank-transfer",checked:a==="bank-transfer",onChange:t=>r(t.target.value)}),e.jsx(o,{label:"Cryptocurrency",helperText:"Pay with Bitcoin or Ethereum",name:"payment",value:"crypto",disabled:!0})]})})}},b={render:()=>{const[a,r]=s.useState("pro");return e.jsx("div",{className:"max-w-2xl",children:e.jsxs(c,{label:"Choose Your Plan",helperText:"Select the plan that best fits your needs",orientation:"vertical",children:[e.jsx("div",{className:"border border-border rounded-lg p-4",children:e.jsx(o,{label:e.jsx("div",{className:"flex items-center justify-between w-full",children:e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"Free"}),e.jsx("span",{className:"ml-2 text-text-secondary",children:"$0/month"})]})}),helperText:"Basic features for personal use",name:"plan",value:"free",checked:a==="free",onChange:t=>r(t.target.value)})}),e.jsx("div",{className:"border border-primary rounded-lg p-4 bg-primary/5",children:e.jsx(o,{label:e.jsxs("div",{className:"flex items-center justify-between w-full",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"Pro"}),e.jsx("span",{className:"ml-2 text-text-secondary",children:"$19/month"})]}),e.jsx("span",{className:"px-2 py-1 text-xs bg-primary text-white rounded",children:"Popular"})]}),helperText:"Advanced features and priority support",name:"plan",value:"pro",color:"primary",checked:a==="pro",onChange:t=>r(t.target.value)})}),e.jsx("div",{className:"border border-border rounded-lg p-4",children:e.jsx(o,{label:e.jsx("div",{className:"flex items-center justify-between w-full",children:e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"Enterprise"}),e.jsx("span",{className:"ml-2 text-text-secondary",children:"$99/month"})]})}),helperText:"Custom solutions with dedicated support",name:"plan",value:"enterprise",checked:a==="enterprise",onChange:t=>r(t.target.value)})})]})})}},f={render:()=>{const[a,r]=s.useState({contactMethod:"",frequency:""}),[t,d]=s.useState({contactMethod:"",frequency:""}),[i,n]=s.useState(!1),S=l=>{l.preventDefault();const u={contactMethod:a.contactMethod?"":"Please select a contact method",frequency:a.frequency?"":"Please select a frequency"};d(u),!u.contactMethod&&!u.frequency&&(n(!0),setTimeout(()=>n(!1),3e3))};return e.jsxs("form",{onSubmit:S,className:"space-y-6 max-w-md",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Contact Preferences"}),e.jsx("p",{className:"text-sm text-text-secondary",children:"Tell us how you'd like to be contacted"})]}),e.jsxs(c,{label:"Preferred contact method *",error:t.contactMethod,orientation:"vertical",children:[e.jsx(o,{label:"Email",helperText:"We'll send updates to your email address",name:"contactMethod",value:"email",checked:a.contactMethod==="email",onChange:l=>{r({...a,contactMethod:l.target.value}),d({...t,contactMethod:""})}}),e.jsx(o,{label:"Phone",helperText:"We'll call you for important updates",name:"contactMethod",value:"phone",checked:a.contactMethod==="phone",onChange:l=>{r({...a,contactMethod:l.target.value}),d({...t,contactMethod:""})}}),e.jsx(o,{label:"SMS",helperText:"Receive text messages for quick updates",name:"contactMethod",value:"sms",checked:a.contactMethod==="sms",onChange:l=>{r({...a,contactMethod:l.target.value}),d({...t,contactMethod:""})}})]}),e.jsxs(c,{label:"How often would you like to hear from us? *",error:t.frequency,orientation:"vertical",children:[e.jsx(o,{label:"Daily",name:"frequency",value:"daily",checked:a.frequency==="daily",onChange:l=>{r({...a,frequency:l.target.value}),d({...t,frequency:""})}}),e.jsx(o,{label:"Weekly",name:"frequency",value:"weekly",checked:a.frequency==="weekly",onChange:l=>{r({...a,frequency:l.target.value}),d({...t,frequency:""})}}),e.jsx(o,{label:"Monthly",name:"frequency",value:"monthly",checked:a.frequency==="monthly",onChange:l=>{r({...a,frequency:l.target.value}),d({...t,frequency:""})}})]}),e.jsx("div",{className:"pt-4",children:e.jsx("button",{type:"submit",className:"px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors",children:"Save Preferences"})}),i&&e.jsx("p",{className:"text-sm text-success",children:"Preferences saved successfully!"})]})}};var M,R,P;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState('option1');
    return <RadioGroup label="Select an option">
        <Radio label="Option 1" name="primary" value="option1" checked={selected === 'option1'} onChange={e => setSelected(e.target.value)} />
        <Radio label="Option 2" name="primary" value="option2" checked={selected === 'option2'} onChange={e => setSelected(e.target.value)} />
        <Radio label="Option 3" name="primary" value="option3" checked={selected === 'option3'} onChange={e => setSelected(e.target.value)} />
      </RadioGroup>;
  }
}`,...(P=(R=m.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};var w,T,q;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState('email');
    return <RadioGroup label="Contact Method" orientation="vertical">
        <Radio label="Email" helperText="We'll send updates to your email" name="vertical" value="email" checked={selected === 'email'} onChange={e => setSelected(e.target.value)} />
        <Radio label="Phone" helperText="We'll call you for important updates" name="vertical" value="phone" checked={selected === 'phone'} onChange={e => setSelected(e.target.value)} />
        <Radio label="SMS" helperText="Receive text messages" name="vertical" value="sms" checked={selected === 'sms'} onChange={e => setSelected(e.target.value)} />
      </RadioGroup>;
  }
}`,...(q=(T=h.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var E,D,N;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState('medium');
    return <RadioGroup label="Size" orientation="horizontal">
        <Radio label="Small" name="horizontal" value="small" checked={selected === 'small'} onChange={e => setSelected(e.target.value)} />
        <Radio label="Medium" name="horizontal" value="medium" checked={selected === 'medium'} onChange={e => setSelected(e.target.value)} />
        <Radio label="Large" name="horizontal" value="large" checked={selected === 'large'} onChange={e => setSelected(e.target.value)} />
      </RadioGroup>;
  }
}`,...(N=(D=v.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var G,F,O;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState('standard');
    return <RadioGroup label="Shipping Method" helperText="Choose your preferred delivery option" orientation="vertical">
        <Radio label="Standard Shipping - Free" helperText="Delivery in 5-7 business days" name="shipping" value="standard" checked={selected === 'standard'} onChange={e => setSelected(e.target.value)} />
        <Radio label="Express Shipping - $9.99" helperText="Delivery in 2-3 business days" name="shipping" value="express" checked={selected === 'express'} onChange={e => setSelected(e.target.value)} />
        <Radio label="Overnight Shipping - $24.99" helperText="Next business day delivery" name="shipping" value="overnight" checked={selected === 'overnight'} onChange={e => setSelected(e.target.value)} />
      </RadioGroup>;
  }
}`,...(O=(F=x.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var W,z,$;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
      setSubmitted(true);
    };
    return <div className="space-y-4 max-w-md">
        <RadioGroup label="Select your preference *" error={submitted && !selected ? 'Please select an option' : ''} orientation="vertical">
          <Radio label="Option 1" name="error-demo" value="option1" checked={selected === 'option1'} onChange={e => setSelected(e.target.value)} />
          <Radio label="Option 2" name="error-demo" value="option2" checked={selected === 'option2'} onChange={e => setSelected(e.target.value)} />
          <Radio label="Option 3" name="error-demo" value="option3" checked={selected === 'option3'} onChange={e => setSelected(e.target.value)} />
        </RadioGroup>
        <button onClick={handleSubmit} className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
          Submit
        </button>
      </div>;
  }
}`,...($=(z=y.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};var _,H,L;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const [paymentMethod, setPaymentMethod] = useState('credit-card');
    return <div className="max-w-md">
        <RadioGroup label="Select Payment Method" helperText="Choose how you'd like to pay" orientation="vertical">
          <Radio label="Credit Card" helperText="Pay with Visa, Mastercard, or American Express" name="payment" value="credit-card" checked={paymentMethod === 'credit-card'} onChange={e => setPaymentMethod(e.target.value)} />
          <Radio label="PayPal" helperText="Secure payment through PayPal" name="payment" value="paypal" checked={paymentMethod === 'paypal'} onChange={e => setPaymentMethod(e.target.value)} />
          <Radio label="Bank Transfer" helperText="Direct bank transfer (may take 2-3 business days)" name="payment" value="bank-transfer" checked={paymentMethod === 'bank-transfer'} onChange={e => setPaymentMethod(e.target.value)} />
          <Radio label="Cryptocurrency" helperText="Pay with Bitcoin or Ethereum" name="payment" value="crypto" disabled />
        </RadioGroup>
      </div>;
  }
}`,...(L=(H=g.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var B,V,A;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const [plan, setPlan] = useState('pro');
    return <div className="max-w-2xl">
        <RadioGroup label="Choose Your Plan" helperText="Select the plan that best fits your needs" orientation="vertical">
          <div className="border border-border rounded-lg p-4">
            <Radio label={<div className="flex items-center justify-between w-full">
                  <div>
                    <span className="font-medium">Free</span>
                    <span className="ml-2 text-text-secondary">$0/month</span>
                  </div>
                </div>} helperText="Basic features for personal use" name="plan" value="free" checked={plan === 'free'} onChange={e => setPlan(e.target.value)} />
          </div>

          <div className="border border-primary rounded-lg p-4 bg-primary/5">
            <Radio label={<div className="flex items-center justify-between w-full">
                  <div>
                    <span className="font-medium">Pro</span>
                    <span className="ml-2 text-text-secondary">$19/month</span>
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
                    <span className="ml-2 text-text-secondary">$99/month</span>
                  </div>
                </div>} helperText="Custom solutions with dedicated support" name="plan" value="enterprise" checked={plan === 'enterprise'} onChange={e => setPlan(e.target.value)} />
          </div>
        </RadioGroup>
      </div>;
  }
}`,...(A=(V=b.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var I,Y,J;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const [formData, setFormData] = useState({
      contactMethod: '',
      frequency: ''
    });
    const [errors, setErrors] = useState({
      contactMethod: '',
      frequency: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const newErrors = {
        contactMethod: !formData.contactMethod ? 'Please select a contact method' : '',
        frequency: !formData.frequency ? 'Please select a frequency' : ''
      };
      setErrors(newErrors);
      if (!newErrors.contactMethod && !newErrors.frequency) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
      }
    };
    return <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Preferences</h3>
          <p className="text-sm text-text-secondary">
            Tell us how you'd like to be contacted
          </p>
        </div>

        <RadioGroup label="Preferred contact method *" error={errors.contactMethod} orientation="vertical">
          <Radio label="Email" helperText="We'll send updates to your email address" name="contactMethod" value="email" checked={formData.contactMethod === 'email'} onChange={e => {
          setFormData({
            ...formData,
            contactMethod: e.target.value
          });
          setErrors({
            ...errors,
            contactMethod: ''
          });
        }} />
          <Radio label="Phone" helperText="We'll call you for important updates" name="contactMethod" value="phone" checked={formData.contactMethod === 'phone'} onChange={e => {
          setFormData({
            ...formData,
            contactMethod: e.target.value
          });
          setErrors({
            ...errors,
            contactMethod: ''
          });
        }} />
          <Radio label="SMS" helperText="Receive text messages for quick updates" name="contactMethod" value="sms" checked={formData.contactMethod === 'sms'} onChange={e => {
          setFormData({
            ...formData,
            contactMethod: e.target.value
          });
          setErrors({
            ...errors,
            contactMethod: ''
          });
        }} />
        </RadioGroup>

        <RadioGroup label="How often would you like to hear from us? *" error={errors.frequency} orientation="vertical">
          <Radio label="Daily" name="frequency" value="daily" checked={formData.frequency === 'daily'} onChange={e => {
          setFormData({
            ...formData,
            frequency: e.target.value
          });
          setErrors({
            ...errors,
            frequency: ''
          });
        }} />
          <Radio label="Weekly" name="frequency" value="weekly" checked={formData.frequency === 'weekly'} onChange={e => {
          setFormData({
            ...formData,
            frequency: e.target.value
          });
          setErrors({
            ...errors,
            frequency: ''
          });
        }} />
          <Radio label="Monthly" name="frequency" value="monthly" checked={formData.frequency === 'monthly'} onChange={e => {
          setFormData({
            ...formData,
            frequency: e.target.value
          });
          setErrors({
            ...errors,
            frequency: ''
          });
        }} />
        </RadioGroup>

        <div className="pt-4">
          <button type="submit" className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
            Save Preferences
          </button>
        </div>

        {submitted && <p className="text-sm text-success">Preferences saved successfully!</p>}
      </form>;
  }
}`,...(J=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};const oe=["Primary","VerticalLayout","HorizontalLayout","WithHelperText","WithError","PaymentMethodExample","SubscriptionPlanExample","FormExample"];export{f as FormExample,v as HorizontalLayout,g as PaymentMethodExample,m as Primary,b as SubscriptionPlanExample,h as VerticalLayout,y as WithError,x as WithHelperText,oe as __namedExportsOrder,re as default};
