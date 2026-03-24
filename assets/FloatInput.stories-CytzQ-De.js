import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as y,r as l}from"./index-ZH-6pyQh.js";import{g as Oe,c,s as He,i as Xe,a as Ve}from"./utils-_uLxnvdl.js";import{S as Ge}from"./index-BoArNvwV.js";import{X as Je}from"./x-ByohdK2B.js";import{S as p}from"./search-DfqimKq8.js";import{M as s}from"./mail-1HDD9Lg3.js";import{L as T}from"./lock-D-iRFELD.js";import{U as Ee}from"./user-BM8Midap.js";import"./_commonjsHelpers-CqkleIqs.js";import"./variants-C8qliDOr.js";import"./createLucideIcon-BXJdBs6C.js";const Qe=Ve("peer w-full placeholder:text-transparent rounded-md disabled:opacity-50 disabled:cursor-not-allowed read-only:bg-surface read-only:cursor-default outline-none text-text-primary transition-[border-color] duration-200 border border-border focus-visible:border-primary bg-background",{variants:{status:{default:"",error:"border-error focus-visible:border-error",warning:"border-warning focus-visible:border-warning",info:"border-info focus-visible:border-info",success:"border-success focus-visible:border-success"},size:{xs:"h-9 pt-3.5 px-2 text-xs",sm:"h-10 pt-4 px-3 text-sm",md:"h-12 pt-5 px-3 text-base",lg:"h-14 pt-5 px-4 text-lg"},fullWidth:{true:"w-full",false:"max-w-full"}},defaultVariants:{status:"default",size:"md",fullWidth:!0}}),Ye=Ve("absolute pointer-events-none transition-[top,font-size,color] duration-200 text-text-secondary origin-left",{variants:{size:{xs:"left-2 text-xs top-2.5 peer-focus:top-1 peer-focus:text-[10px] peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-[10px]",sm:"left-3 text-sm top-2.5 peer-focus:top-1.5 peer-focus:text-[10px] peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[10px]",md:"left-3 text-base top-3 peer-focus:top-2 peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs",lg:"left-4 text-lg top-3.5 peer-focus:top-2.5 peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-2.5 peer-[:not(:placeholder-shown)]:text-xs"},status:{default:"",error:"peer-focus:text-error",warning:"peer-focus:text-warning",info:"peer-focus:text-info",success:"peer-focus:text-success"},hasLeftIcon:{true:"",false:""}},compoundVariants:[{size:"xs",hasLeftIcon:!0,className:"left-8"},{size:"sm",hasLeftIcon:!0,className:"left-10"},{size:"md",hasLeftIcon:!0,className:"left-10"},{size:"lg",hasLeftIcon:!0,className:"left-10"}],defaultVariants:{size:"md",status:"default",hasLeftIcon:!1}}),r=y.memo(({size:a="md",label:h,error:n,warning:b,info:I,success:g,helperText:A,leftIcon:f,rightIcon:v,clearable:Ce=!1,onClear:j,loading:i=!1,fullWidth:z=!0,className:B,classNames:t,value:x,onChange:u,ref:Me,...m})=>{const[Pe,K]=y.useState(m.defaultValue??""),$=x!==void 0?x:Pe,S=l.useId(),O=m.id||`float-input-${S}`,W=`float-input-helper-${S}`,_=`float-input-loading-${S}`,H=`float-input-label-${S}`,{status:d,message:w}=l.useMemo(()=>Oe({error:n,warning:b,info:I,success:g,helperText:A}),[n,b,I,g,A]),qe=y.useCallback(o=>{x===void 0&&K(o.target.value),u==null||u(o)},[x,u]),Le=y.useCallback(()=>{x===void 0&&K(""),u==null||u({target:{value:""}}),j==null||j()},[x,u,j]),X=Ce&&$&&!m.disabled&&!m.readOnly,R=v||X||i,Ue=l.useMemo(()=>{const o=[];return w&&o.push(W),i&&o.push(_),o.length>0?o.join(" "):void 0},[w,W,i,_]),ke=l.useMemo(()=>c("float-input_root","w-full flex flex-col relative",!z&&"inline-block",t==null?void 0:t.root),[z,t==null?void 0:t.root]),De=l.useMemo(()=>c("float-input_wrapper","relative w-full",i&&"opacity-50 cursor-not-allowed",t==null?void 0:t.wrapper),[i,t==null?void 0:t.wrapper]),Te=l.useMemo(()=>c("float-input_leftIcon","absolute flex items-center h-full top-0 text-text-secondary",{xs:"left-2",sm:"left-3",md:"left-3",lg:"left-4"}[a],t==null?void 0:t.leftIcon),[a,t==null?void 0:t.leftIcon]),We=l.useMemo(()=>{const o=f?{xs:"pl-8",sm:"pl-10",md:"pl-10",lg:"pl-11"}[a]:"",$e=R?{xs:"pr-8",sm:"pr-8",md:"pr-8",lg:"pr-10"}[a]:"";return c("float-input_input",Qe({status:d,size:a,fullWidth:z}),o,$e,B,t==null?void 0:t.input)},[d,a,z,f,R,B,t==null?void 0:t.input]),_e=l.useMemo(()=>c("float-input_label",Ye({size:a,status:d,hasLeftIcon:!!f}),t==null?void 0:t.label),[a,d,f,t==null?void 0:t.label]),Re=l.useMemo(()=>c("float-input_rightIcon","absolute flex gap-2 items-center h-full top-0 text-text-secondary",{xs:"right-2",sm:"right-3",md:"right-3",lg:"right-4"}[a],t==null?void 0:t.rightIcon),[a,t==null?void 0:t.rightIcon]),Ae=l.useMemo(()=>c("float-input_clearButton","flex items-center h-full top-0 text-text-secondary hover:text-text-primary transition-colors",t==null?void 0:t.clearButton),[t==null?void 0:t.clearButton]),Be=l.useMemo(()=>c("float-input_helper",He({status:d}),"mt-0.5",d==="error"?t==null?void 0:t.error:t==null?void 0:t.helper),[d,t==null?void 0:t.error,t==null?void 0:t.helper]),Ke=Xe[a];return e.jsxs("div",{"data-slot":"root",className:ke,children:[e.jsxs("div",{"data-slot":"wrapper",className:De,children:[f&&e.jsx("div",{"data-slot":"leftIcon",className:Te,"aria-hidden":"true",children:f}),e.jsx("input",{ref:Me,id:O,"data-slot":"input",className:We,value:$,onChange:qe,placeholder:" ","aria-invalid":d==="error","aria-busy":i,"aria-describedby":Ue,"aria-labelledby":H,...m}),e.jsxs("label",{id:H,htmlFor:O,"data-slot":"label",className:_e,children:[h,m.required&&e.jsx("span",{className:"text-error ml-0.5",children:"*"})]}),(R||v)&&e.jsxs("div",{"data-slot":"rightIcon",className:Re,children:[X&&!i&&e.jsx("button",{type:"button",onClick:Le,"data-slot":"clearButton",className:Ae,"aria-label":"Clear input",children:e.jsx(Je,{className:Ke,"aria-hidden":"true"})}),i?e.jsxs(e.Fragment,{children:[e.jsx(Ge,{"aria-hidden":"true",size:a}),e.jsx("span",{id:_,className:"sr-only",children:"Loading"})]}):v&&e.jsx("span",{"aria-hidden":"true",children:v})]})]}),w&&e.jsx("p",{id:W,"data-slot":"helper",className:Be,children:w})]})});r.displayName="FloatInput";r.__docgenInfo={description:"",methods:[],displayName:"FloatInput",props:{size:{defaultValue:{value:'"md"',computed:!1},required:!1},clearable:{defaultValue:{value:"false",computed:!1},required:!1},loading:{defaultValue:{value:"false",computed:!1},required:!1},fullWidth:{defaultValue:{value:"true",computed:!1},required:!1}}};const dt={title:"Data Entry/FloatInput",component:r,tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg"],description:"Input size"},disabled:{control:"boolean",description:"Disabled state"},loading:{control:"boolean",description:"Loading state"},clearable:{control:"boolean",description:"Show clear button"},fullWidth:{control:"boolean",description:"Full width input"}}},F={args:{label:"Email",placeholder:" ",size:"md"}},V={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx(r,{label:"SKU",defaultValue:"12345342312"}),e.jsx(r,{label:"Product Name",defaultValue:"Example Product"}),e.jsx(r,{label:"Email Address",defaultValue:"user@example.com",type:"email"})]})},E={render:()=>{const[a,h]=l.useState("");return e.jsxs("div",{className:"flex flex-col gap-4 max-w-md",children:[e.jsx(r,{label:"Type to see the label animate",value:a,onChange:n=>h(n.target.value)}),e.jsxs("p",{className:"text-sm text-text-secondary",children:["Current value: ",a||"(empty)"]})]})}},C={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx(r,{label:"Search",leftIcon:e.jsx(p,{size:16})}),e.jsx(r,{label:"Email",leftIcon:e.jsx(s,{size:16}),type:"email"}),e.jsx(r,{label:"Password",leftIcon:e.jsx(T,{size:16}),type:"password"}),e.jsx(r,{label:"Username",leftIcon:e.jsx(Ee,{size:16})})]})},M={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx(r,{label:"Search",rightIcon:e.jsx(p,{size:16})}),e.jsx(r,{label:"Email",rightIcon:e.jsx(s,{size:16}),type:"email"}),e.jsx(r,{label:"Username",rightIcon:e.jsx(Ee,{size:16})})]})},P={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx(r,{label:"Search",leftIcon:e.jsx(p,{size:16}),rightIcon:e.jsx(s,{size:16})}),e.jsx(r,{label:"Email",leftIcon:e.jsx(s,{size:16}),rightIcon:e.jsx(T,{size:16}),type:"email"})]})},q={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx(r,{label:"Extra Small",leftIcon:e.jsx(p,{size:12}),rightIcon:e.jsx(s,{size:12}),size:"xs"}),e.jsx(r,{label:"Small",leftIcon:e.jsx(p,{size:14}),rightIcon:e.jsx(s,{size:14}),size:"sm"}),e.jsx(r,{label:"Medium",leftIcon:e.jsx(p,{size:16}),rightIcon:e.jsx(s,{size:16}),size:"md"}),e.jsx(r,{label:"Large",leftIcon:e.jsx(p,{size:20}),rightIcon:e.jsx(s,{size:20}),size:"lg"})]})},L={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx(r,{label:"SKU",clearable:!0,defaultValue:"12345342312"}),e.jsx(r,{label:"Search",leftIcon:e.jsx(p,{size:16}),clearable:!0,defaultValue:"Search term"})]})},U={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx(r,{label:"Success",success:"Input is valid!",defaultValue:"valid@email.com",type:"email"}),e.jsx(r,{label:"Error",error:"This field is required"}),e.jsx(r,{label:"Warning",warning:"This value might be incorrect",defaultValue:"suspicious value"}),e.jsx(r,{label:"Info",info:"Please use lowercase letters only",defaultValue:"UPPERCASE"})]})},k={render:()=>e.jsxs("div",{className:"flex flex-col gap-6 max-w-md",children:[e.jsx(r,{label:"Email Address",type:"email",leftIcon:e.jsx(s,{size:16}),clearable:!0,helperText:"We'll send confirmation to this email",required:!0}),e.jsx(r,{label:"Password",type:"password",leftIcon:e.jsx(T,{size:16}),clearable:!0,helperText:"Must contain at least 8 characters",required:!0}),e.jsx(r,{label:"Product SKU",clearable:!0,defaultValue:"12345342312",helperText:"Unique product identifier"})]})},D={render:()=>{const[a,h]=l.useState({sku:"12345342312",name:"",email:"",password:""}),n=b=>I=>{h(g=>({...g,[b]:I.target.value}))};return e.jsxs("div",{className:"flex flex-col gap-6 max-w-md",children:[e.jsx(r,{label:"Product SKU",value:a.sku,onChange:n("sku"),clearable:!0,required:!0}),e.jsx(r,{label:"Product Name",value:a.name,onChange:n("name"),clearable:!0,required:!0}),e.jsx(r,{label:"Email Address",type:"email",value:a.email,onChange:n("email"),leftIcon:e.jsx(s,{size:16}),clearable:!0,required:!0}),e.jsx(r,{label:"Password",type:"password",value:a.password,onChange:n("password"),leftIcon:e.jsx(T,{size:16}),clearable:!0,required:!0})]})}};var G,J,Q;F.parameters={...F.parameters,docs:{...(G=F.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: ' ',
    size: 'md'
  }
}`,...(Q=(J=F.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Y,Z,N;V.parameters={...V.parameters,docs:{...(Y=V.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <FloatInput label="SKU" defaultValue="12345342312" />
      <FloatInput label="Product Name" defaultValue="Example Product" />
      <FloatInput label="Email Address" defaultValue="user@example.com" type="email" />
    </div>
}`,...(N=(Z=V.parameters)==null?void 0:Z.docs)==null?void 0:N.source}}};var ee,te,re;E.parameters={...E.parameters,docs:{...(ee=E.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <div className="flex flex-col gap-4 max-w-md">
        <FloatInput label="Type to see the label animate" value={value} onChange={e => setValue(e.target.value)} />
        <p className="text-sm text-text-secondary">
          Current value: {value || '(empty)'}
        </p>
      </div>;
  }
}`,...(re=(te=E.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ae,le,oe;C.parameters={...C.parameters,docs:{...(ae=C.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <FloatInput label="Search" leftIcon={<Search size={16} />} />
      <FloatInput label="Email" leftIcon={<Mail size={16} />} type="email" />
      <FloatInput label="Password" leftIcon={<Lock size={16} />} type="password" />
      <FloatInput label="Username" leftIcon={<User size={16} />} />
    </div>
}`,...(oe=(le=C.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var se,ne,ie;M.parameters={...M.parameters,docs:{...(se=M.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <FloatInput label="Search" rightIcon={<Search size={16} />} />
      <FloatInput label="Email" rightIcon={<Mail size={16} />} type="email" />
      <FloatInput label="Username" rightIcon={<User size={16} />} />
    </div>
}`,...(ie=(ne=M.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var ue,de,ce;P.parameters={...P.parameters,docs:{...(ue=P.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <FloatInput label="Search" leftIcon={<Search size={16} />} rightIcon={<Mail size={16} />} />
      <FloatInput label="Email" leftIcon={<Mail size={16} />} rightIcon={<Lock size={16} />} type="email" />
    </div>
}`,...(ce=(de=P.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var pe,fe,xe;q.parameters={...q.parameters,docs:{...(pe=q.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <FloatInput label="Extra Small" leftIcon={<Search size={12} />} rightIcon={<Mail size={12} />} size="xs" />
      <FloatInput label="Small" leftIcon={<Search size={14} />} rightIcon={<Mail size={14} />} size="sm" />
      <FloatInput label="Medium" leftIcon={<Search size={16} />} rightIcon={<Mail size={16} />} size="md" />
      <FloatInput label="Large" leftIcon={<Search size={20} />} rightIcon={<Mail size={20} />} size="lg" />
    </div>
}`,...(xe=(fe=q.parameters)==null?void 0:fe.docs)==null?void 0:xe.source}}};var me,he,be;L.parameters={...L.parameters,docs:{...(me=L.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <FloatInput label="SKU" clearable defaultValue="12345342312" />
      <FloatInput label="Search" leftIcon={<Search size={16} />} clearable defaultValue="Search term" />
    </div>
}`,...(be=(he=L.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};var Ie,ge,ve;U.parameters={...U.parameters,docs:{...(Ie=U.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <FloatInput label="Success" success="Input is valid!" defaultValue="valid@email.com" type="email" />
      <FloatInput label="Error" error="This field is required" />
      <FloatInput label="Warning" warning="This value might be incorrect" defaultValue="suspicious value" />
      <FloatInput label="Info" info="Please use lowercase letters only" defaultValue="UPPERCASE" />
    </div>
}`,...(ve=(ge=U.parameters)==null?void 0:ge.docs)==null?void 0:ve.source}}};var je,ze,Se;k.parameters={...k.parameters,docs:{...(je=k.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6 max-w-md">
      <FloatInput label="Email Address" type="email" leftIcon={<Mail size={16} />} clearable helperText="We'll send confirmation to this email" required />
      <FloatInput label="Password" type="password" leftIcon={<Lock size={16} />} clearable helperText="Must contain at least 8 characters" required />
      <FloatInput label="Product SKU" clearable defaultValue="12345342312" helperText="Unique product identifier" />
    </div>
}`,...(Se=(ze=k.parameters)==null?void 0:ze.docs)==null?void 0:Se.source}}};var we,ye,Fe;D.parameters={...D.parameters,docs:{...(we=D.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => {
    const [formData, setFormData] = useState({
      sku: '12345342312',
      name: '',
      email: '',
      password: ''
    });
    const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData(prev => ({
        ...prev,
        [field]: e.target.value
      }));
    };
    return <div className="flex flex-col gap-6 max-w-md">
        <FloatInput label="Product SKU" value={formData.sku} onChange={handleChange('sku')} clearable required />
        <FloatInput label="Product Name" value={formData.name} onChange={handleChange('name')} clearable required />
        <FloatInput label="Email Address" type="email" value={formData.email} onChange={handleChange('email')} leftIcon={<Mail size={16} />} clearable required />
        <FloatInput label="Password" type="password" value={formData.password} onChange={handleChange('password')} leftIcon={<Lock size={16} />} clearable required />
      </div>;
  }
}`,...(Fe=(ye=D.parameters)==null?void 0:ye.docs)==null?void 0:Fe.source}}};const ct=["Primary","WithValue","InteractiveDemo","WithLeftIcons","WithRightIcons","WithBothIcons","IconSizes","Clearable","ValidationStates","ComplexExample","FormExample"];export{L as Clearable,k as ComplexExample,D as FormExample,q as IconSizes,E as InteractiveDemo,F as Primary,U as ValidationStates,P as WithBothIcons,C as WithLeftIcons,M as WithRightIcons,V as WithValue,ct as __namedExportsOrder,dt as default};
