import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I as a}from"./index-DC4HjuX5.js";import{S as l}from"./search-DfqimKq8.js";import{M as r}from"./mail-1HDD9Lg3.js";import{L as Q}from"./lock-D-iRFELD.js";import"./utils-_uLxnvdl.js";import"./index-ZH-6pyQh.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BoArNvwV.js";import"./variants-C8qliDOr.js";import"./x-ByohdK2B.js";import"./createLucideIcon-BXJdBs6C.js";const ie={title:"Data Entry/Input",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:["outline","filled"],description:"Visual style variant"},size:{control:"select",options:["xs","sm","md","lg"],description:"Input size"},disabled:{control:"boolean",description:"Disabled state"},loading:{control:"boolean",description:"Loading state"},clearable:{control:"boolean",description:"Show clear button"},fullWidth:{control:"boolean",description:"Full width input"},showCount:{control:"boolean",description:"Show character count"}}},s={args:{placeholder:"Enter text...",variant:"outline",size:"md"}},o={args:{label:"Email",placeholder:"Enter your email"}},t={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(a,{leftIcon:e.jsx(l,{size:16}),placeholder:"Search..."}),e.jsx(a,{leftIcon:e.jsx(r,{size:16}),placeholder:"Email address"}),e.jsx(a,{leftIcon:e.jsx(Q,{size:16}),placeholder:"Password",type:"password"}),e.jsx(a,{rightIcon:e.jsx(r,{size:16}),placeholder:"With right icon"}),e.jsx(a,{leftIcon:e.jsx(l,{size:16}),rightIcon:e.jsx(r,{size:16}),placeholder:"Both icons"})]})},i={name:"Icons at All Sizes",render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(a,{size:"xs",leftIcon:e.jsx(l,{size:12}),rightIcon:e.jsx(r,{size:12}),placeholder:"Extra small with icons"}),e.jsx(a,{size:"sm",leftIcon:e.jsx(l,{size:14}),rightIcon:e.jsx(r,{size:14}),placeholder:"Small with icons"}),e.jsx(a,{size:"md",leftIcon:e.jsx(l,{size:16}),rightIcon:e.jsx(r,{size:16}),placeholder:"Medium with icons"}),e.jsx(a,{size:"lg",leftIcon:e.jsx(l,{size:20}),rightIcon:e.jsx(r,{size:20}),placeholder:"Large with icons"})]})},c={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(a,{clearable:!0,placeholder:"Type to see clear button",defaultValue:"Clear me"}),e.jsx(a,{clearable:!0,leftIcon:e.jsx(l,{size:16}),placeholder:"Searchable with clear",defaultValue:"Search term"})]})},n={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(a,{loading:!0,placeholder:"Loading..."}),e.jsx(a,{loading:!0,leftIcon:e.jsx(l,{size:16}),placeholder:"Searching..."})]})},d={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(a,{label:"Success",placeholder:"Valid input",success:"Input is valid!",defaultValue:"valid@email.com"}),e.jsx(a,{label:"Error",placeholder:"Invalid input",error:"This field is required"}),e.jsx(a,{label:"Warning",placeholder:"Warning input",warning:"This value might be incorrect",defaultValue:"suspicious value"}),e.jsx(a,{label:"Info",placeholder:"Info input",info:"Please use lowercase letters only"})]})},p={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(a,{label:"Email",placeholder:"Enter your email",helperText:"We'll never share your email"}),e.jsx(a,{label:"Password",type:"password",placeholder:"Enter password",helperText:"Must be at least 8 characters"})]})},u={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(a,{label:"Bio",placeholder:"Tell us about yourself",maxLength:100,showCount:!0,defaultValue:"Hello world"}),e.jsx(a,{label:"Tweet",placeholder:"What's happening?",maxLength:280,showCount:!0})]})},h={args:{disabled:!0,placeholder:"Disabled input",defaultValue:"Disabled value"}},m={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 max-w-md",children:[e.jsx(a,{label:"Email Address",type:"email",leftIcon:e.jsx(r,{size:16}),clearable:!0,placeholder:"your.email@example.com",helperText:"We'll send confirmation to this email",required:!0}),e.jsx(a,{label:"Password",type:"password",leftIcon:e.jsx(Q,{size:16}),placeholder:"Enter secure password",maxLength:50,showCount:!0,helperText:"Must contain at least 8 characters"})]})};var x,f,g;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter text...",
    variant: "outline",
    size: "md"
  }
}`,...(g=(f=s.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var I,b,z;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'Enter your email'
  }
}`,...(z=(b=o.parameters)==null?void 0:b.docs)==null?void 0:z.source}}};var j,w,v;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Input leftIcon={<Search size={16} />} placeholder="Search..." />
      <Input leftIcon={<Mail size={16} />} placeholder="Email address" />
      <Input leftIcon={<Lock size={16} />} placeholder="Password" type="password" />
      <Input rightIcon={<Mail size={16} />} placeholder="With right icon" />
      <Input leftIcon={<Search size={16} />} rightIcon={<Mail size={16} />} placeholder="Both icons" />
    </div>
}`,...(v=(w=t.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var S,y,E;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Icons at All Sizes',
  render: () => <div className="flex flex-col gap-4">
      <Input size="xs" leftIcon={<Search size={12} />} rightIcon={<Mail size={12} />} placeholder="Extra small with icons" />
      <Input size="sm" leftIcon={<Search size={14} />} rightIcon={<Mail size={14} />} placeholder="Small with icons" />
      <Input size="md" leftIcon={<Search size={16} />} rightIcon={<Mail size={16} />} placeholder="Medium with icons" />
      <Input size="lg" leftIcon={<Search size={20} />} rightIcon={<Mail size={20} />} placeholder="Large with icons" />
    </div>
}`,...(E=(y=i.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var T,W,L;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Input clearable placeholder="Type to see clear button" defaultValue="Clear me" />
      <Input clearable leftIcon={<Search size={16} />} placeholder="Searchable with clear" defaultValue="Search term" />
    </div>
}`,...(L=(W=c.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var C,V,M;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Input loading placeholder="Loading..." />
      <Input loading leftIcon={<Search size={16} />} placeholder="Searching..." />
    </div>
}`,...(M=(V=n.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var N,P,D;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Input label="Success" placeholder="Valid input" success="Input is valid!" defaultValue="valid@email.com" />
      <Input label="Error" placeholder="Invalid input" error="This field is required" />
      <Input label="Warning" placeholder="Warning input" warning="This value might be incorrect" defaultValue="suspicious value" />
      <Input label="Info" placeholder="Info input" info="Please use lowercase letters only" />
    </div>
}`,...(D=(P=d.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var q,A,B;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Input label="Email" placeholder="Enter your email" helperText="We'll never share your email" />
      <Input label="Password" type="password" placeholder="Enter password" helperText="Must be at least 8 characters" />
    </div>
}`,...(B=(A=p.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var H,k,_;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Input label="Bio" placeholder="Tell us about yourself" maxLength={100} showCount defaultValue="Hello world" />
      <Input label="Tweet" placeholder="What's happening?" maxLength={280} showCount />
    </div>
}`,...(_=(k=u.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};var F,O,R;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: 'Disabled input',
    defaultValue: 'Disabled value'
  }
}`,...(R=(O=h.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var G,J,K;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 max-w-md">
      <Input label="Email Address" type="email" leftIcon={<Mail size={16} />} clearable placeholder="your.email@example.com" helperText="We'll send confirmation to this email" required />
      <Input label="Password" type="password" leftIcon={<Lock size={16} />} placeholder="Enter secure password" maxLength={50} showCount helperText="Must contain at least 8 characters" />
    </div>
}`,...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const ce=["Primary","WithLabel","WithIcons","IconSizes","Clearable","Loading","ValidationStates","WithHelperText","WithCharacterCount","Disabled","ComplexExample"];export{c as Clearable,m as ComplexExample,h as Disabled,i as IconSizes,n as Loading,s as Primary,d as ValidationStates,u as WithCharacterCount,p as WithHelperText,t as WithIcons,o as WithLabel,ce as __namedExportsOrder,ie as default};
