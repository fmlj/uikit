import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as f,r as l}from"./index-ZH-6pyQh.js";import{g as ge,c as C,s as W}from"./utils-_uLxnvdl.js";import"./_commonjsHelpers-CqkleIqs.js";const Ce={xs:"h-(--otp-size-xs) w-(--otp-size-xs) text-xs",sm:"h-(--otp-size-sm) w-(--otp-size-sm) text-sm",md:"h-(--otp-size-md) w-(--otp-size-md) text-base",lg:"h-(--otp-size-lg) w-(--otp-size-lg) text-lg"},Se={default:"border-border focus:border-primary",error:"border-error focus:border-error",warning:"border-warning focus:border-warning",info:"border-info focus:border-info",success:"border-success focus:border-success"},u=f.memo(({length:t=6,size:n="md",value:r,onChange:s,onComplete:o,error:p,warning:v,info:x,success:z,helperText:A,disabled:S=!1,autoFocus:D=!1,type:fe="text",pattern:y,label:$,messagePosition:q="bottom",className:xe,classNames:a,ref:be})=>{const b=f.useRef([]),M=f.useRef([]),[O,F]=f.useState(r!==void 0?r.split("").slice(0,t):[]);M.current=O,f.useEffect(()=>{r!==void 0&&F(r.split("").slice(0,t))},[r,t]),f.useEffect(()=>{D&&b.current[0]&&b.current[0].focus()},[D]);const w=f.useMemo(()=>{if(!y)return null;try{return new RegExp(y)}catch{return null}},[y]),he=f.useCallback((d,i)=>{var c;const m=i.slice(-1);w&&m&&!w.test(m)||(F(h=>{const T=[...h];T[d]=m;const g=T.join("");return s==null||s(g),g.length===t&&(o==null||o(g)),T}),m&&d<t-1&&((c=b.current[d+1])==null||c.focus()))},[t,s,o,w]),ve=f.useCallback((d,i)=>{var m,c,h;i.key==="Backspace"?!M.current[d]&&d>0&&((m=b.current[d-1])==null||m.focus()):i.key==="ArrowLeft"&&d>0?(c=b.current[d-1])==null||c.focus():i.key==="ArrowRight"&&d<t-1&&((h=b.current[d+1])==null||h.focus())},[t]),ye=f.useCallback(d=>{d.preventDefault();const i=d.clipboardData.getData("text").slice(0,t);w&&y&&!new RegExp(`^${y}*$`).test(i)||F(m=>{var g;const c=i.split("").slice(0,t),h=c.join("");s==null||s(h);const T=Math.min(c.length,t-1);return(g=b.current[T])==null||g.focus(),m.length<t&&h.length===t&&(o==null||o(h)),c})},[t,s,o,w,y]),{status:L,message:P}=ge({error:p,warning:v,info:x,success:z,helperText:A});return e.jsxs("div",{ref:be,"data-slot":"inputOTP_root",className:C("inputOTP_root","w-full",a==null?void 0:a.root,xe),children:[$&&e.jsx("label",{"data-slot":"inputOTP_label",className:C("inputOTP_label","block text-sm font-medium text-text-primary mb-1.5",a==null?void 0:a.label),children:$}),q==="top"&&P&&e.jsx("p",{"data-slot":"inputOTP_helper",className:C("inputOTP_helper",W({status:L}),"mb-1.5",a==null?void 0:a.helper),children:P}),e.jsx("div",{"data-slot":"inputOTP_wrapper",className:C("inputOTP_wrapper","flex gap-2",a==null?void 0:a.wrapper),role:"group","aria-label":"One-time password",children:Array.from({length:t}).map((d,i)=>{const m=O[i]!==void 0&&O[i]!=="";return e.jsx("input",{ref:c=>{b.current[i]=c},type:"text",inputMode:fe==="number"?"numeric":"text",maxLength:1,value:O[i]||"",onChange:c=>he(i,c.target.value),onKeyDown:c=>ve(i,c),onPaste:ye,disabled:S,"data-slot":"inputOTP_slot",className:C("inputOTP_slot","text-center font-semibold","border rounded-md outline-none transition-colors","disabled:opacity-50 disabled:cursor-not-allowed","hover:border-primary/50","focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary","text-text-primary",Ce[n],Se[L],a==null?void 0:a.slot,m&&(a==null?void 0:a.slotActive)),"aria-label":`OTP digit ${i+1}`},i)})}),q==="bottom"&&P&&e.jsx("p",{"data-slot":"inputOTP_helper",className:C("inputOTP_helper",W({status:L}),"mt-1.5",a==null?void 0:a.helper),children:P})]})});u.displayName="InputOTP";u.__docgenInfo={description:"",methods:[],displayName:"InputOTP",props:{length:{defaultValue:{value:"6",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},autoFocus:{defaultValue:{value:"false",computed:!1},required:!1},type:{defaultValue:{value:"'text'",computed:!1},required:!1},messagePosition:{defaultValue:{value:"'bottom'",computed:!1},required:!1}}};const je={title:"Data Entry/InputOTP",component:u,tags:["autodocs"],argTypes:{length:{control:{type:"number",min:4,max:8},description:"Number of OTP input fields"},size:{control:"select",options:["xs","sm","md","lg"],description:"Input field size"},type:{control:"select",options:["text","number"],description:"Input type (affects mobile keyboard)"},disabled:{control:"boolean",description:"Disabled state"},autoFocus:{control:"boolean",description:"Auto-focus first input on mount"},messagePosition:{control:"select",options:["top","bottom"],description:"Position of validation message"}}},j={args:{length:6,size:"md",placeholder:"Enter OTP"}},V={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx(u,{label:"Valid Code",length:6,value:"123456",success:"Code verified successfully!"}),e.jsx(u,{label:"Invalid Code",length:6,value:"12345",error:"Invalid verification code"}),e.jsx(u,{label:"Warning",length:6,value:"111111",warning:"Code expires in 30 seconds"}),e.jsx(u,{label:"Info",length:6,info:"Enter the code from your authenticator app"})]})},E={render:()=>{const[t,n]=l.useState("");return e.jsxs("div",{className:"max-w-md space-y-4",children:[e.jsx(u,{label:"Controlled OTP Input",length:6,value:t,onChange:r=>n(r),helperText:`Current value: ${t||"(empty)"}`}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>n("123456"),className:"px-4 py-2 bg-primary text-background rounded-md text-sm font-medium hover:bg-primary/90",children:'Set "123456"'}),e.jsx("button",{onClick:()=>n(""),className:"px-4 py-2 bg-surface text-text-primary border border-border rounded-md text-sm font-medium hover:bg-surface/80",children:"Clear"})]})]})}},I={render:()=>{const[t,n]=l.useState(!1),[r,s]=l.useState(!1),o=p=>{s(!0),setTimeout(()=>{n(!0),s(!1)},1e3)};return e.jsx("div",{className:"max-w-md",children:e.jsx(u,{label:"Enter Verification Code",length:6,onComplete:o,disabled:r,...t&&{success:"Code verified successfully!"},...r&&{info:"Verifying code..."},helperText:!r&&!t?"Code will be verified automatically":void 0})})}},N={render:()=>{const[t,n]=l.useState(""),[r,s]=l.useState(),[o,p]=l.useState(!1),v=x=>{s(void 0),setTimeout(()=>{x==="123456"?p(!0):(s("Invalid code. Please try again."),n(""))},500)};return e.jsxs("div",{className:"max-w-md p-6 border border-border rounded-lg space-y-4",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-semibold text-text-primary",children:"Verify Your Email"}),e.jsx("p",{className:"text-sm text-text-secondary mt-1",children:"We've sent a 6-digit code to your email address"})]}),e.jsx(u,{label:"Verification Code",length:6,value:t,onChange:n,onComplete:v,autoFocus:!0,type:"number",pattern:"[0-9]",error:r,success:o?"Email verified successfully!":void 0}),!o&&e.jsx("button",{className:"text-sm text-primary hover:underline",onClick:()=>alert("Resending code..."),children:"Didn't receive the code? Resend"})]})}},k={render:()=>{const[t,n]=l.useState(""),[r,s]=l.useState(!1),[o,p]=l.useState(!1),v=x=>{s(!0),setTimeout(()=>{s(!1),x==="654321"&&p(!0)},1500)};return e.jsxs("div",{className:"max-w-md p-6 border border-border rounded-lg space-y-4",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-semibold text-text-primary",children:"Two-Factor Authentication"}),e.jsx("p",{className:"text-sm text-text-secondary mt-1",children:"Enter the 6-digit code from your authenticator app"})]}),e.jsx(u,{label:"Authentication Code",length:6,value:t,onChange:n,onComplete:v,autoFocus:!0,type:"number",pattern:"[0-9]",disabled:r||o,...r&&{info:"Verifying code..."},...o&&{success:"Authentication successful!"}}),e.jsx("div",{className:"text-xs text-text-secondary",children:'Tip: Use "654321" to test successful verification'})]})}},R={render:()=>{const[t,n]=l.useState(""),[r,s]=l.useState(60);return l.useState(()=>{const o=setInterval(()=>{s(p=>p<=1?(clearInterval(o),0):p-1)},1e3);return()=>clearInterval(o)}),e.jsxs("div",{className:"max-w-md p-6 border border-border rounded-lg space-y-4",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-semibold text-text-primary",children:"Phone Verification"}),e.jsx("p",{className:"text-sm text-text-secondary mt-1",children:"Enter the 4-digit code sent to +1 (555) 123-4567"})]}),e.jsx(u,{label:"SMS Code",length:4,value:t,onChange:n,autoFocus:!0,type:"number",pattern:"[0-9]",size:"lg",...r===0&&{warning:"Code expired. Please request a new one."},helperText:r>0?`Code expires in ${r}s`:void 0}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("button",{className:"text-sm text-primary hover:underline disabled:opacity-50 disabled:cursor-not-allowed",disabled:r>0,onClick:()=>{s(60),n("")},children:"Resend Code"}),e.jsx("span",{className:"text-xs text-text-secondary",children:r>0?`Resend available in ${r}s`:"You can resend now"})]})]})}},_={render:()=>{const[t,n]=l.useState("phone"),[r,s]=l.useState(""),[o,p]=l.useState(""),[v,x]=l.useState(),z=()=>{r.length===10&&n("verify")},A=S=>{x(void 0),setTimeout(()=>{S==="123456"?alert("Phone verified successfully!"):(x("Invalid code. Please try again."),p(""))},500)};return e.jsxs("div",{className:"max-w-md p-6 border border-border rounded-lg space-y-4",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-semibold text-text-primary",children:"Phone Verification"}),e.jsx("p",{className:"text-sm text-text-secondary mt-1",children:t==="phone"?"Enter your phone number to receive a verification code":"Enter the code we sent to your phone"})]}),t==="phone"?e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-text-secondary mb-1.5",children:"Phone Number"}),e.jsx("input",{type:"tel",value:r,onChange:S=>s(S.target.value.replace(/\D/g,"").slice(0,10)),placeholder:"(555) 123-4567",className:"w-full h-12 px-4 text-base bg-background border border-border rounded-md outline-none text-text-primary placeholder:text-text-muted focus:border-primary transition-colors"})]}),e.jsx("button",{onClick:z,disabled:r.length!==10,className:"w-full h-12 bg-primary text-background rounded-md font-medium hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",children:"Send Code"})]}):e.jsxs("div",{className:"space-y-4",children:[e.jsx(u,{label:"Verification Code",length:6,value:o,onChange:p,onComplete:A,autoFocus:!0,type:"number",pattern:"[0-9]",error:v,helperText:"Use '123456' to test"}),e.jsx("button",{onClick:()=>n("phone"),className:"text-sm text-primary hover:underline",children:"Change phone number"})]})]})}};var U,Y,B;j.parameters={...j.parameters,docs:{...(U=j.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    length: 6,
    size: 'md',
    placeholder: 'Enter OTP'
  }
}`,...(B=(Y=j.parameters)==null?void 0:Y.docs)==null?void 0:B.source}}};var K,G,H;V.parameters={...V.parameters,docs:{...(K=V.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <InputOTP label="Valid Code" length={6} value="123456" success="Code verified successfully!" />
      <InputOTP label="Invalid Code" length={6} value="12345" error="Invalid verification code" />
      <InputOTP label="Warning" length={6} value="111111" warning="Code expires in 30 seconds" />
      <InputOTP label="Info" length={6} info="Enter the code from your authenticator app" />
    </div>
}`,...(H=(G=V.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,Q,X;E.parameters={...E.parameters,docs:{...(J=E.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const [otp, setOtp] = useState('');
    return <div className="max-w-md space-y-4">
        <InputOTP label="Controlled OTP Input" length={6} value={otp} onChange={value => setOtp(value)} helperText={\`Current value: \${otp || '(empty)'}\`} />
        <div className="flex gap-2">
          <button onClick={() => setOtp('123456')} className="px-4 py-2 bg-primary text-background rounded-md text-sm font-medium hover:bg-primary/90">
            Set "123456"
          </button>
          <button onClick={() => setOtp('')} className="px-4 py-2 bg-surface text-text-primary border border-border rounded-md text-sm font-medium hover:bg-surface/80">
            Clear
          </button>
        </div>
      </div>;
  }
}`,...(X=(Q=E.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,te;I.parameters={...I.parameters,docs:{...(Z=I.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    const [completed, setCompleted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const handleComplete = (value: string) => {
      setSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setCompleted(true);
        setSubmitting(false);
      }, 1000);
    };
    return <div className="max-w-md">
        <InputOTP label="Enter Verification Code" length={6} onComplete={handleComplete} disabled={submitting} {...completed && {
        success: 'Code verified successfully!'
      }} {...submitting && {
        info: 'Verifying code...'
      }} helperText={!submitting && !completed ? 'Code will be verified automatically' : undefined} />
      </div>;
  }
}`,...(te=(ee=I.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var re,se,oe;N.parameters={...N.parameters,docs:{...(re=N.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => {
    const [otp, setOtp] = useState('');
    const [error, setError] = useState<string | undefined>();
    const [success, setSuccess] = useState(false);
    const handleComplete = (value: string) => {
      setError(undefined);
      // Simulate verification
      setTimeout(() => {
        if (value === '123456') {
          setSuccess(true);
        } else {
          setError('Invalid code. Please try again.');
          setOtp('');
        }
      }, 500);
    };
    return <div className="max-w-md p-6 border border-border rounded-lg space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-text-primary">Verify Your Email</h2>
          <p className="text-sm text-text-secondary mt-1">
            We've sent a 6-digit code to your email address
          </p>
        </div>

        <InputOTP label="Verification Code" length={6} value={otp} onChange={setOtp} onComplete={handleComplete} autoFocus type="number" pattern="[0-9]" error={error} success={success ? 'Email verified successfully!' : undefined} />

        {!success && <button className="text-sm text-primary hover:underline" onClick={() => alert('Resending code...')}>
            Didn't receive the code? Resend
          </button>}
      </div>;
  }
}`,...(oe=(se=N.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ae,ne,ie;k.parameters={...k.parameters,docs:{...(ae=k.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => {
    const [otp, setOtp] = useState('');
    const [verifying, setVerifying] = useState(false);
    const [verified, setVerified] = useState(false);
    const handleComplete = (value: string) => {
      setVerifying(true);
      // Simulate 2FA verification
      setTimeout(() => {
        setVerifying(false);
        if (value === '654321') {
          setVerified(true);
        }
      }, 1500);
    };
    return <div className="max-w-md p-6 border border-border rounded-lg space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-text-primary">Two-Factor Authentication</h2>
          <p className="text-sm text-text-secondary mt-1">
            Enter the 6-digit code from your authenticator app
          </p>
        </div>

        <InputOTP label="Authentication Code" length={6} value={otp} onChange={setOtp} onComplete={handleComplete} autoFocus type="number" pattern="[0-9]" disabled={verifying || verified} {...verifying && {
        info: 'Verifying code...'
      }} {...verified && {
        success: 'Authentication successful!'
      }} />

        <div className="text-xs text-text-secondary">
          Tip: Use "654321" to test successful verification
        </div>
      </div>;
  }
}`,...(ie=(ne=k.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var le,de,ce;R.parameters={...R.parameters,docs:{...(le=R.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => {
    const [otp, setOtp] = useState('');
    const [timeLeft, setTimeLeft] = useState(60);

    // Countdown timer
    useState(() => {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    });
    return <div className="max-w-md p-6 border border-border rounded-lg space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-text-primary">Phone Verification</h2>
          <p className="text-sm text-text-secondary mt-1">
            Enter the 4-digit code sent to +1 (555) 123-4567
          </p>
        </div>

        <InputOTP label="SMS Code" length={4} value={otp} onChange={setOtp} autoFocus type="number" pattern="[0-9]" size="lg" {...timeLeft === 0 && {
        warning: 'Code expired. Please request a new one.'
      }} helperText={timeLeft > 0 ? \`Code expires in \${timeLeft}s\` : undefined} />

        <div className="flex justify-between items-center">
          <button className="text-sm text-primary hover:underline disabled:opacity-50 disabled:cursor-not-allowed" disabled={timeLeft > 0} onClick={() => {
          setTimeLeft(60);
          setOtp('');
        }}>
            Resend Code
          </button>
          <span className="text-xs text-text-secondary">
            {timeLeft > 0 ? \`Resend available in \${timeLeft}s\` : 'You can resend now'}
          </span>
        </div>
      </div>;
  }
}`,...(ce=(de=R.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var ue,pe,me;_.parameters={..._.parameters,docs:{...(ue=_.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => {
    const [step, setStep] = useState<'phone' | 'verify'>('phone');
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState('');
    const [error, setError] = useState<string | undefined>();
    const handleSendCode = () => {
      if (phone.length === 10) {
        setStep('verify');
      }
    };
    const handleVerify = (value: string) => {
      setError(undefined);
      // Simulate verification
      setTimeout(() => {
        if (value === '123456') {
          alert('Phone verified successfully!');
        } else {
          setError('Invalid code. Please try again.');
          setOtp('');
        }
      }, 500);
    };
    return <div className="max-w-md p-6 border border-border rounded-lg space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-text-primary">Phone Verification</h2>
          <p className="text-sm text-text-secondary mt-1">
            {step === 'phone' ? 'Enter your phone number to receive a verification code' : 'Enter the code we sent to your phone'}
          </p>
        </div>

        {step === 'phone' ? <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1.5">
                Phone Number
              </label>
              <input type="tel" value={phone} onChange={e => setPhone(e.target.value.replace(/\\D/g, '').slice(0, 10))} placeholder="(555) 123-4567" className="w-full h-12 px-4 text-base bg-background border border-border rounded-md outline-none text-text-primary placeholder:text-text-muted focus:border-primary transition-colors" />
            </div>
            <button onClick={handleSendCode} disabled={phone.length !== 10} className="w-full h-12 bg-primary text-background rounded-md font-medium hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
              Send Code
            </button>
          </div> : <div className="space-y-4">
            <InputOTP label="Verification Code" length={6} value={otp} onChange={setOtp} onComplete={handleVerify} autoFocus type="number" pattern="[0-9]" error={error} helperText="Use '123456' to test" />
            <button onClick={() => setStep('phone')} className="text-sm text-primary hover:underline">
              Change phone number
            </button>
          </div>}
      </div>;
  }
}`,...(me=(pe=_.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};const Ve=["Primary","ValidationStates","ControlledComponent","WithCompletion","EmailVerification","TwoFactorAuth","SMSVerification","ComplexExample"];export{_ as ComplexExample,E as ControlledComponent,N as EmailVerification,j as Primary,R as SMSVerification,k as TwoFactorAuth,V as ValidationStates,I as WithCompletion,Ve as __namedExportsOrder,je as default};
