import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as w,r as pe}from"./index-ZH-6pyQh.js";import{c as i,i as S,a as ue}from"./utils-_uLxnvdl.js";import{c as me}from"./variants-C8qliDOr.js";import{X as ge}from"./x-ByohdK2B.js";import{B as y}from"./index-23ax1BAm.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createLucideIcon-BXJdBs6C.js";import"./index-ZW2Bszwo.js";import"./index-Bo-loign.js";import"./index-BoArNvwV.js";import"./useRipple-BuuTbn0W.js";const fe=ue("relative flex gap-3 rounded-md",{variants:{variant:{default:"bg-slot border border-slot text-slot-fg",solid:"bg-slot text-slot-fg",outline:"bg-background border border-slot text-slot",soft:"bg-slot-10 text-slot"},color:me,size:{xs:"p-2 gap-2 text-xs",sm:"p-3 gap-2.5 text-sm",md:"p-4 gap-3 text-sm",lg:"p-5 gap-3.5 text-base"}},defaultVariants:{variant:"soft",color:"default",size:"md"}}),t=w.memo(({title:s,description:o,icon:b,variant:te="soft",color:oe="default",size:h="md",closable:se=!1,onClose:v,className:ie,classNames:r,children:ae,...ne})=>{const[le,ce]=w.useState(!0);if(!le)return null;const de=()=>{ce(!1),v==null||v()};return e.jsxs("div",{role:"alert","data-slot":"root",className:i("alert_root",fe({variant:te,color:oe,size:h}),r==null?void 0:r.root,ie),...ne,children:[b&&e.jsx("div",{"data-slot":"icon",className:i("alert_icon","shrink-0 mt-0.5",S[h],r==null?void 0:r.icon),children:b}),e.jsxs("div",{"data-slot":"content",className:i("alert_content","flex-1 min-w-0",r==null?void 0:r.content),children:[s&&e.jsx("div",{"data-slot":"title",className:i("alert_title","font-semibold",r==null?void 0:r.title),children:s}),o&&e.jsx("div",{"data-slot":"description",className:i("alert_description","opacity-90",s&&"mt-1",r==null?void 0:r.description),children:o}),ae]}),se&&e.jsx("button",{type:"button",onClick:de,"data-slot":"closeButton",className:i("alert_closeButton","shrink-0 rounded-sm opacity-70 hover:opacity-100 transition-opacity cursor-pointer",r==null?void 0:r.closeButton),"aria-label":"Close alert",children:e.jsx(ge,{className:S[h]})})]})});t.displayName="Alert";t.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{variant:{defaultValue:{value:"'soft'",computed:!1},required:!1},color:{defaultValue:{value:"'default'",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1},closable:{defaultValue:{value:"false",computed:!1},required:!1}}};const Be={title:"Feedback/Alert",component:t,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","solid","outline","soft"]},color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"]},size:{control:"select",options:["xs","sm","md","lg"]}}},a={args:{title:"Heads up!",description:"You can add components to your app using the CLI."}},n={args:{title:"Success",description:"Your changes have been saved.",color:"success"}},l={args:{title:"Error",description:"Something went wrong. Please try again.",color:"error"}},c={args:{title:"Warning",description:"Your session will expire in 5 minutes.",color:"warning"}},d={args:{title:"Info",description:"A new version is available. Update now.",color:"info"}},p={render:()=>{const[s,o]=pe.useState(!0);return e.jsx("div",{className:"space-y-4",children:s?e.jsx(t,{title:"Dismissible alert",description:"Click the X to dismiss this alert.",color:"info",closable:!0,onClose:()=>o(!1)}):e.jsx(y,{onClick:()=>o(!0),size:"sm",children:"Show alert again"})})}},u={render:()=>e.jsxs("div",{className:"space-y-3 max-w-lg",children:[e.jsx(t,{title:"Default variant",description:"Uses bg-slot + border-slot",variant:"default",color:"primary"}),e.jsx(t,{title:"Solid variant",description:"Filled background",variant:"solid",color:"primary"}),e.jsx(t,{title:"Outline variant",description:"Background + border",variant:"outline",color:"primary"}),e.jsx(t,{title:"Soft variant",description:"Tinted background",variant:"soft",color:"primary"})]})},m={render:()=>{const s=["default","primary","secondary","accent","success","error","warning","info"];return e.jsx("div",{className:"space-y-3 max-w-lg",children:s.map(o=>e.jsx(t,{title:`${o.charAt(0).toUpperCase()+o.slice(1)} alert`,description:`This is a ${o} alert with the soft variant.`,color:o},o))})}},g={render:()=>e.jsxs("div",{className:"space-y-3 max-w-lg",children:[e.jsx(t,{title:"Extra small",description:"xs size",size:"xs",color:"info"}),e.jsx(t,{title:"Small",description:"sm size",size:"sm",color:"info"}),e.jsx(t,{title:"Medium",description:"md size (default)",size:"md",color:"info"}),e.jsx(t,{title:"Large",description:"lg size",size:"lg",color:"info"})]})},f={args:{title:"No icon",description:"Pass icon={null} to hide the default icon.",icon:null,color:"warning"}},x={render:()=>e.jsxs(t,{title:"Action required",color:"error",closable:!0,children:[e.jsx("p",{className:"mt-2 text-sm opacity-90",children:"Your payment method has expired. Please update it to continue using the service."}),e.jsxs("div",{className:"mt-3 flex gap-2",children:[e.jsx(y,{size:"sm",color:"error",children:"Update payment"}),e.jsx(y,{size:"sm",variant:"outline",children:"Dismiss"})]})]})};var j,z,A;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    title: 'Heads up!',
    description: 'You can add components to your app using the CLI.'
  }
}`,...(A=(z=a.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var k,C,B;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    title: 'Success',
    description: 'Your changes have been saved.',
    color: 'success'
  }
}`,...(B=(C=n.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var V,_,E;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    title: 'Error',
    description: 'Something went wrong. Please try again.',
    color: 'error'
  }
}`,...(E=(_=l.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var I,D,U;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    title: 'Warning',
    description: 'Your session will expire in 5 minutes.',
    color: 'warning'
  }
}`,...(U=(D=c.parameters)==null?void 0:D.docs)==null?void 0:U.source}}};var Y,q,P;d.parameters={...d.parameters,docs:{...(Y=d.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    title: 'Info',
    description: 'A new version is available. Update now.',
    color: 'info'
  }
}`,...(P=(q=d.parameters)==null?void 0:q.docs)==null?void 0:P.source}}};var W,T,L;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const [show, setShow] = useState(true);
    return <div className="space-y-4">
        {show ? <Alert title="Dismissible alert" description="Click the X to dismiss this alert." color="info" closable onClose={() => setShow(false)} /> : <Button onClick={() => setShow(true)} size="sm">Show alert again</Button>}
      </div>;
  }
}`,...(L=(T=p.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var M,$,F;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div className="space-y-3 max-w-lg">
      <Alert title="Default variant" description="Uses bg-slot + border-slot" variant="default" color="primary" />
      <Alert title="Solid variant" description="Filled background" variant="solid" color="primary" />
      <Alert title="Outline variant" description="Background + border" variant="outline" color="primary" />
      <Alert title="Soft variant" description="Tinted background" variant="soft" color="primary" />
    </div>
}`,...(F=($=u.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};var O,R,X;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const colors = ['default', 'primary', 'secondary', 'accent', 'success', 'error', 'warning', 'info'] as const;
    return <div className="space-y-3 max-w-lg">
        {colors.map(color => <Alert key={color} title={\`\${color.charAt(0).toUpperCase() + color.slice(1)} alert\`} description={\`This is a \${color} alert with the soft variant.\`} color={color} />)}
      </div>;
  }
}`,...(X=(R=m.parameters)==null?void 0:R.docs)==null?void 0:X.source}}};var H,G,J;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div className="space-y-3 max-w-lg">
      <Alert title="Extra small" description="xs size" size="xs" color="info" />
      <Alert title="Small" description="sm size" size="sm" color="info" />
      <Alert title="Medium" description="md size (default)" size="md" color="info" />
      <Alert title="Large" description="lg size" size="lg" color="info" />
    </div>
}`,...(J=(G=g.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,Z;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    title: 'No icon',
    description: 'Pass icon={null} to hide the default icon.',
    icon: null,
    color: 'warning'
  }
}`,...(Z=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var N,ee,re;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <Alert title="Action required" color="error" closable>
      <p className="mt-2 text-sm opacity-90">
        Your payment method has expired. Please update it to continue using the service.
      </p>
      <div className="mt-3 flex gap-2">
        <Button size="sm" color="error">Update payment</Button>
        <Button size="sm" variant="outline">Dismiss</Button>
      </div>
    </Alert>
}`,...(re=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};const Ve=["Default","Success","Error","Warning","Info","Closable","Variants","ColorMatrix","Sizes","NoIcon","WithChildren"];export{p as Closable,m as ColorMatrix,a as Default,l as Error,d as Info,f as NoIcon,g as Sizes,n as Success,u as Variants,c as Warning,x as WithChildren,Ve as __namedExportsOrder,Be as default};
