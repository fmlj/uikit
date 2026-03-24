import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{R as i,r as u}from"./index-ZH-6pyQh.js";import{I as G}from"./index-DC4HjuX5.js";import{c as d,i as P}from"./utils-_uLxnvdl.js";import{E as J,a as K}from"./eye-OFmA4JNg.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BoArNvwV.js";import"./variants-C8qliDOr.js";import"./x-ByohdK2B.js";import"./createLucideIcon-BXJdBs6C.js";const o=i.memo(({visibilityToggle:a=!0,size:s="md",ref:l,classNames:e,...t})=>{const[n,D]=i.useState(!1),x=i.useCallback(()=>{D(H=>!H)},[]),O=i.useMemo(()=>({root:d("inputPassword_root",e==null?void 0:e.root),wrapper:d("inputPassword_wrapper",e==null?void 0:e.wrapper),label:d("inputPassword_label",e==null?void 0:e.label),input:d("inputPassword_input",e==null?void 0:e.input),helper:d("inputPassword_helper",e==null?void 0:e.helper),error:d("inputPassword_error",e==null?void 0:e.error)}),[e]),Z=i.useMemo(()=>a?r.jsx("button",{type:"button",onClick:x,"data-slot":"toggleButton",className:d("inputPassword_toggleButton","cursor-pointer hover:text-text-primary transition-colors",e==null?void 0:e.toggleButton),"aria-label":n?"Hide password":"Show password","aria-pressed":n,children:n?r.jsx(J,{"data-slot":"toggleIcon",className:d("inputPassword_toggleIcon",P[s],e==null?void 0:e.toggleIcon)}):r.jsx(K,{"data-slot":"toggleIcon",className:d("inputPassword_toggleIcon",P[s],e==null?void 0:e.toggleIcon)})}):void 0,[a,x,n,s,e]);return r.jsx(G,{...t,size:s,ref:l,type:n?"text":"password",classNames:O,rightIcon:Z})});o.displayName="PasswordInput";o.__docgenInfo={description:"",methods:[],displayName:"PasswordInput",props:{visibilityToggle:{defaultValue:{value:"true",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1}}};const ae={title:"Data Entry/InputPassword",component:o,tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg"],description:"Input size"},variant:{control:"select",options:["outline","filled"],description:"Visual style variant"},visibilityToggle:{control:"boolean",description:"Show/hide password toggle button"},disabled:{control:"boolean",description:"Disabled state"},loading:{control:"boolean",description:"Loading state"},clearable:{control:"boolean",description:"Show clear button"}}},c={args:{placeholder:"Enter your password",size:"md",visibilityToggle:!0}},p={render:()=>r.jsxs("div",{className:"flex flex-col gap-4",children:[r.jsx(o,{label:"Password",placeholder:"Enter your password"}),r.jsx(o,{label:"Confirm Password",placeholder:"Re-enter password",required:!0})]})},w={render:()=>r.jsxs("div",{className:"flex flex-col gap-4",children:[r.jsx(o,{label:"Valid Password",placeholder:"Enter password",success:"Password meets all requirements!",defaultValue:"SecurePass123!"}),r.jsx(o,{label:"Invalid Password",placeholder:"Enter password",error:"Password is too weak",defaultValue:"weak"}),r.jsx(o,{label:"Warning",placeholder:"Enter password",warning:"Consider using more special characters",defaultValue:"password123"}),r.jsx(o,{label:"Info",placeholder:"Enter password",info:"Must be at least 8 characters with uppercase, lowercase, and numbers"})]})},g={render:()=>r.jsxs("div",{className:"flex flex-col gap-4",children:[r.jsx(o,{clearable:!0,label:"Clearable Password",placeholder:"Type to see clear button",defaultValue:"ClearablePassword"}),r.jsx(o,{clearable:!0,visibilityToggle:!1,label:"Clearable (No Toggle)",placeholder:"Clear without toggle",defaultValue:"PasswordValue"})]})},m={render:()=>{const[a,s]=u.useState(""),e=(t=>t.length===0?{level:"none",text:"",color:""}:t.length<6?{level:"weak",text:"Weak password",color:"error"}:t.length<10?{level:"medium",text:"Medium strength",color:"warning"}:!/[A-Z]/.test(t)||!/[0-9]/.test(t)?{level:"medium",text:"Add uppercase and numbers",color:"warning"}:{level:"strong",text:"Strong password!",color:"success"})(a);return r.jsx("div",{className:"max-w-md",children:r.jsx(o,{label:"Create Password",placeholder:"Enter secure password",value:a,onChange:t=>s(t.target.value),...e.color==="error"&&{error:e.text},...e.color==="warning"&&{warning:e.text},...e.color==="success"&&{success:e.text},clearable:!0})})}},h={render:()=>{const[a,s]=u.useState(""),[l,e]=u.useState("");return r.jsxs("div",{className:"max-w-md space-y-4 p-6 border border-border rounded-lg",children:[r.jsx("h2",{className:"text-xl font-semibold text-text-primary mb-4",children:"Login to your account"}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-text-secondary mb-1.5",children:"Email Address"}),r.jsx("input",{type:"email",value:a,onChange:t=>s(t.target.value),placeholder:"Enter your email",className:"w-full h-12 px-4 text-base bg-background border border-border rounded-md outline-none text-text-primary placeholder:text-text-muted focus:border-primary transition-colors"})]}),r.jsx(o,{label:"Password",placeholder:"Enter your password",value:l,onChange:t=>e(t.target.value),helperText:"Forgot your password?"}),r.jsx("button",{className:"w-full h-12 bg-primary text-background rounded-md font-medium hover:bg-primary/90 transition-colors",children:"Sign In"})]})}},b={render:()=>{const[a,s]=u.useState(""),[l,e]=u.useState(""),t=l.length>0&&a===l;return r.jsxs("div",{className:"max-w-md space-y-4 p-6 border border-border rounded-lg",children:[r.jsx("h2",{className:"text-xl font-semibold text-text-primary mb-4",children:"Create Account"}),r.jsx(o,{label:"Password",placeholder:"Create password",value:a,onChange:n=>s(n.target.value),helperText:"Must be at least 8 characters",required:!0}),r.jsx(o,{label:"Confirm Password",placeholder:"Re-enter password",value:l,onChange:n=>e(n.target.value),...l.length>0&&!t&&{error:"Passwords do not match"},...t&&{success:"Passwords match!"},required:!0})]})}};var f,v,y;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter your password',
    size: 'md',
    visibilityToggle: true
  }
}`,...(y=(v=c.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var C,S,I;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <PasswordInput label="Password" placeholder="Enter your password" />
      <PasswordInput label="Confirm Password" placeholder="Re-enter password" required />
    </div>
}`,...(I=(S=p.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var j,E,V;w.parameters={...w.parameters,docs:{...(j=w.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <PasswordInput label="Valid Password" placeholder="Enter password" success="Password meets all requirements!" defaultValue="SecurePass123!" />
      <PasswordInput label="Invalid Password" placeholder="Enter password" error="Password is too weak" defaultValue="weak" />
      <PasswordInput label="Warning" placeholder="Enter password" warning="Consider using more special characters" defaultValue="password123" />
      <PasswordInput label="Info" placeholder="Enter password" info="Must be at least 8 characters with uppercase, lowercase, and numbers" />
    </div>
}`,...(V=(E=w.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var k,T,_;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <PasswordInput clearable label="Clearable Password" placeholder="Type to see clear button" defaultValue="ClearablePassword" />
      <PasswordInput clearable visibilityToggle={false} label="Clearable (No Toggle)" placeholder="Clear without toggle" defaultValue="PasswordValue" />
    </div>
}`,...(_=(T=g.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var M,q,R;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const [password, setPassword] = useState('');
    const getStrength = (pass: string) => {
      if (pass.length === 0) return {
        level: 'none',
        text: '',
        color: ''
      };
      if (pass.length < 6) return {
        level: 'weak',
        text: 'Weak password',
        color: 'error'
      };
      if (pass.length < 10) return {
        level: 'medium',
        text: 'Medium strength',
        color: 'warning'
      };
      if (!/[A-Z]/.test(pass) || !/[0-9]/.test(pass)) return {
        level: 'medium',
        text: 'Add uppercase and numbers',
        color: 'warning'
      };
      return {
        level: 'strong',
        text: 'Strong password!',
        color: 'success'
      };
    };
    const strength = getStrength(password);
    return <div className="max-w-md">
        <PasswordInput label="Create Password" placeholder="Enter secure password" value={password} onChange={e => setPassword(e.target.value)} {...strength.color === 'error' && {
        error: strength.text
      }} {...strength.color === 'warning' && {
        warning: strength.text
      }} {...strength.color === 'success' && {
        success: strength.text
      }} clearable />
      </div>;
  }
}`,...(R=(q=m.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var A,L,F;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return <div className="max-w-md space-y-4 p-6 border border-border rounded-lg">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Login to your account</h2>

        <div>
          <label className="block text-sm font-medium text-text-secondary mb-1.5">
            Email Address
          </label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email" className="w-full h-12 px-4 text-base bg-background border border-border rounded-md outline-none text-text-primary placeholder:text-text-muted focus:border-primary transition-colors" />
        </div>

        <PasswordInput label="Password" placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)} helperText="Forgot your password?" />

        <button className="w-full h-12 bg-primary text-background rounded-md font-medium hover:bg-primary/90 transition-colors">
          Sign In
        </button>
      </div>;
  }
}`,...(F=(L=h.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var W,z,B;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const passwordsMatch = confirmPassword.length > 0 && password === confirmPassword;
    return <div className="max-w-md space-y-4 p-6 border border-border rounded-lg">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Create Account</h2>

        <PasswordInput label="Password" placeholder="Create password" value={password} onChange={e => setPassword(e.target.value)} helperText="Must be at least 8 characters" required />

        <PasswordInput label="Confirm Password" placeholder="Re-enter password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} {...confirmPassword.length > 0 && !passwordsMatch && {
        error: 'Passwords do not match'
      }} {...passwordsMatch && {
        success: 'Passwords match!'
      }} required />
      </div>;
  }
}`,...(B=(z=b.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};const se=["Primary","WithLabel","ValidationStates","Clearable","PasswordStrengthIndicator","LoginForm","RegistrationForm"];export{g as Clearable,h as LoginForm,m as PasswordStrengthIndicator,c as Primary,b as RegistrationForm,w as ValidationStates,p as WithLabel,se as __namedExportsOrder,ae as default};
