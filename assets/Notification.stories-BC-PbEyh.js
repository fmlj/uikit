import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as ce}from"./index-ZH-6pyQh.js";import{N as o}from"./index-CAQs9Va6.js";import{B as s}from"./index-23ax1BAm.js";import{D as de}from"./download-DHgBCDXU.js";import{U as pe}from"./user-BM8Midap.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-_uLxnvdl.js";import"./variants-C8qliDOr.js";import"./x-ByohdK2B.js";import"./createLucideIcon-BXJdBs6C.js";import"./index-ZW2Bszwo.js";import"./index-Bo-loign.js";import"./index-BoArNvwV.js";import"./useRipple-BuuTbn0W.js";const Te={title:"Feedback/Notification",component:o,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","solid","outline","soft"],description:"Visual style variant"},color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"],description:"Color theme"},size:{control:"select",options:["xs","sm","md","lg"],description:"Notification size"},closable:{control:"boolean",description:"Show close button"},borderLine:{control:"boolean",description:"Show left accent border line (outline/soft variants)"}}},d={args:{title:"Notification",description:"This is a notification message."}},p={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{variant:"solid",color:"success",title:"Success!",description:"Your changes have been saved successfully."}),e.jsx(o,{variant:"soft",color:"success",title:"Upload Complete",description:"3 files have been uploaded to the cloud."}),e.jsx(o,{variant:"outline",color:"success",title:"Payment Received",description:"Payment of $150.00 has been processed."})]})},m={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{variant:"solid",color:"error",title:"Error",description:"Failed to save changes. Please try again."}),e.jsx(o,{variant:"soft",color:"error",title:"Upload Failed",description:"Could not upload file. Check your connection."}),e.jsx(o,{variant:"outline",color:"error",title:"Authentication Error",description:"Your session has expired. Please sign in again."})]})},u={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{variant:"solid",color:"warning",title:"Warning",description:"Your storage is almost full. Upgrade for more space."}),e.jsx(o,{variant:"soft",color:"warning",title:"Unsaved Changes",description:"You have unsaved changes that will be lost."}),e.jsx(o,{variant:"outline",color:"warning",title:"Scheduled Maintenance",description:"System will be down for maintenance at 2 AM."})]})},f={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{variant:"solid",color:"info",title:"New Feature",description:"Check out our new dark mode in settings!"}),e.jsx(o,{variant:"soft",color:"info",title:"Update Available",description:"Version 2.0 is now available for download."}),e.jsx(o,{variant:"outline",color:"info",title:"Pro Tip",description:"Use keyboard shortcuts to speed up your workflow."})]})},v={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{variant:"soft",color:"primary",title:"New Message",description:"You have received a new message from John.",action:{label:"View Message",onClick:()=>alert("Opening message...")}}),e.jsx(o,{variant:"soft",color:"success",title:"Backup Complete",description:"Your data has been backed up successfully.",action:{label:"View Details",onClick:()=>alert("Showing details...")}}),e.jsx(o,{variant:"soft",color:"warning",title:"Storage Full",description:"You have used 95% of your storage space.",action:{label:"Upgrade Now",onClick:()=>alert("Redirecting to upgrade...")}})]})},h={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{closable:!1,variant:"solid",color:"info",title:"Important Notice",description:"This notification cannot be dismissed."}),e.jsx(o,{closable:!1,variant:"soft",color:"warning",title:"System Update",description:"An update is required to continue."})]})},g={render:()=>{const[c,r]=ce.useState([]),t=i=>{const n={success:"Operation completed successfully!",error:"An error occurred. Please try again.",warning:"Please review your input.",info:"Here is some helpful information."},a=Date.now();r(l=>[...l,{id:a,type:i,message:n[i]}]),setTimeout(()=>{r(l=>l.filter(le=>le.id!==a))},5e3)};return e.jsxs("div",{children:[e.jsxs("div",{className:"flex gap-2 mb-6 flex-wrap",children:[e.jsx(s,{color:"success",onClick:()=>t("success"),children:"Show Success"}),e.jsx(s,{color:"error",onClick:()=>t("error"),children:"Show Error"}),e.jsx(s,{color:"warning",onClick:()=>t("warning"),children:"Show Warning"}),e.jsx(s,{color:"info",onClick:()=>t("info"),children:"Show Info"})]}),e.jsx("div",{className:"fixed top-4 right-4 space-y-2 z-50",style:{maxWidth:"400px"},children:c.map(i=>e.jsx(o,{variant:"soft",color:i.type,title:i.type.charAt(0).toUpperCase()+i.type.slice(1),description:i.message,onClose:()=>r(n=>n.filter(a=>a.id!==i.id))},i.id))})]})}},x={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{variant:"soft",color:"primary",title:"Download Ready",description:"Your file is ready to download.",children:e.jsxs("div",{className:"flex items-center gap-2 mt-2",children:[e.jsx(s,{size:"sm",leftIcon:e.jsx(de,{}),children:"Download"}),e.jsx(s,{size:"sm",variant:"outline",children:"Preview"})]})}),e.jsx(o,{variant:"soft",color:"info",title:"Update Available",children:e.jsxs("div",{className:"mt-2",children:[e.jsx("p",{className:"text-sm text-text-secondary mb-3",children:"Version 2.5.0 includes new features and bug fixes."}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-text-secondary space-y-1",children:[e.jsx("li",{children:"Improved performance"}),e.jsx("li",{children:"New dark mode"}),e.jsx("li",{children:"Bug fixes"})]}),e.jsx("div",{className:"mt-3",children:e.jsx(s,{size:"sm",color:"info",children:"Update Now"})})]})}),e.jsx(o,{variant:"outline",color:"success",title:"Welcome!",children:e.jsxs("div",{className:"mt-2 space-y-2",children:[e.jsx("p",{className:"text-sm text-text-secondary",children:"Thanks for signing up! Here's what you can do next:"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(s,{size:"sm",color:"success",leftIcon:e.jsx(pe,{}),children:"Complete Profile"}),e.jsx(s,{size:"sm",variant:"outline",children:"Skip"})]})]})})]})},N={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{variant:"soft",color:"primary",size:"sm",title:"New message from Sarah",description:"Hey! Are you available for a quick call?",action:{label:"Reply",onClick:()=>alert("Opening chat...")}}),e.jsx(o,{variant:"soft",color:"success",size:"sm",title:"Upload complete",description:"document.pdf (2.4 MB)",action:{label:"Open",onClick:()=>alert("Opening document...")}}),e.jsx(o,{variant:"soft",color:"warning",size:"sm",title:"Connection unstable",description:"Your internet connection appears to be slow.",action:{label:"Retry",onClick:()=>alert("Retrying connection...")}}),e.jsx(o,{variant:"soft",color:"error",size:"sm",title:"Payment failed",description:"Your card was declined. Please update your payment method.",action:{label:"Update",onClick:()=>alert("Opening payment settings...")}}),e.jsx(o,{variant:"soft",color:"info",size:"sm",title:"Tip of the day",description:"Press Cmd+K to quickly search for anything.",closable:!0})]})},y={render:()=>{const[c,r]=ce.useState([]),t=i=>{const n=Date.now();r(a=>[...a,{id:n,color:i,message:`${i} toast notification`}]),setTimeout(()=>{r(a=>a.filter(l=>l.id!==n))},3e3)};return e.jsxs("div",{children:[e.jsxs("div",{className:"flex gap-2 flex-wrap",children:[e.jsx(s,{color:"success",onClick:()=>t("success"),children:"Success Toast"}),e.jsx(s,{color:"error",onClick:()=>t("error"),children:"Error Toast"}),e.jsx(s,{color:"warning",onClick:()=>t("warning"),children:"Warning Toast"}),e.jsx(s,{color:"info",onClick:()=>t("info"),children:"Info Toast"})]}),e.jsx("div",{className:"fixed bottom-4 right-4 space-y-2 z-50",style:{maxWidth:"400px"},children:c.map(i=>e.jsx(o,{variant:"solid",color:i.color,size:"sm",title:i.message,onClose:()=>r(n=>n.filter(a=>a.id!==i.id))},i.id))})]})}},w={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"With border line (default)"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(o,{variant:"outline",color:"info",title:"Outline",description:"Left accent border visible."}),e.jsx(o,{variant:"soft",color:"success",title:"Soft",description:"Left accent border visible."})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Without border line"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(o,{variant:"outline",color:"info",title:"Outline",description:"No left accent border.",borderLine:!1}),e.jsx(o,{variant:"soft",color:"success",title:"Soft",description:"No left accent border.",borderLine:!1})]})]})]})},b={render:()=>{const c=["default","primary","secondary","accent","success","error","warning","info"],r=["default","solid","outline","soft"];return e.jsx("div",{className:"space-y-8",children:r.map(t=>e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3 capitalize",children:t}),e.jsx("div",{className:"space-y-2",children:c.map(i=>e.jsx(o,{color:i,variant:t,title:`${i} ${t}`,description:"Description text"},i))})]},t))})}};var j,C,k;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    title: 'Notification',
    description: 'This is a notification message.'
  }
}`,...(k=(C=d.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var S,T,B;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Notification variant="solid" color="success" title="Success!" description="Your changes have been saved successfully." />
      <Notification variant="soft" color="success" title="Upload Complete" description="3 files have been uploaded to the cloud." />
      <Notification variant="outline" color="success" title="Payment Received" description="Payment of $150.00 has been processed." />
    </div>
}`,...(B=(T=p.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var z,U,P;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Notification variant="solid" color="error" title="Error" description="Failed to save changes. Please try again." />
      <Notification variant="soft" color="error" title="Upload Failed" description="Could not upload file. Check your connection." />
      <Notification variant="outline" color="error" title="Authentication Error" description="Your session has expired. Please sign in again." />
    </div>
}`,...(P=(U=m.parameters)==null?void 0:U.docs)==null?void 0:P.source}}};var W,A,Y;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Notification variant="solid" color="warning" title="Warning" description="Your storage is almost full. Upgrade for more space." />
      <Notification variant="soft" color="warning" title="Unsaved Changes" description="You have unsaved changes that will be lost." />
      <Notification variant="outline" color="warning" title="Scheduled Maintenance" description="System will be down for maintenance at 2 AM." />
    </div>
}`,...(Y=(A=u.parameters)==null?void 0:A.docs)==null?void 0:Y.source}}};var D,O,I;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Notification variant="solid" color="info" title="New Feature" description="Check out our new dark mode in settings!" />
      <Notification variant="soft" color="info" title="Update Available" description="Version 2.0 is now available for download." />
      <Notification variant="outline" color="info" title="Pro Tip" description="Use keyboard shortcuts to speed up your workflow." />
    </div>
}`,...(I=(O=f.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};var E,R,M;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Notification variant="soft" color="primary" title="New Message" description="You have received a new message from John." action={{
      label: 'View Message',
      onClick: () => alert('Opening message...')
    }} />
      <Notification variant="soft" color="success" title="Backup Complete" description="Your data has been backed up successfully." action={{
      label: 'View Details',
      onClick: () => alert('Showing details...')
    }} />
      <Notification variant="soft" color="warning" title="Storage Full" description="You have used 95% of your storage space." action={{
      label: 'Upgrade Now',
      onClick: () => alert('Redirecting to upgrade...')
    }} />
    </div>
}`,...(M=(R=v.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};var L,V,F;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Notification closable={false} variant="solid" color="info" title="Important Notice" description="This notification cannot be dismissed." />
      <Notification closable={false} variant="soft" color="warning" title="System Update" description="An update is required to continue." />
    </div>
}`,...(F=(V=h.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};var $,q,H;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    const [notifications, setNotifications] = useState<Array<{
      id: number;
      type: string;
      message: string;
    }>>([]);
    const addNotification = (type: 'success' | 'error' | 'warning' | 'info') => {
      const messages = {
        success: 'Operation completed successfully!',
        error: 'An error occurred. Please try again.',
        warning: 'Please review your input.',
        info: 'Here is some helpful information.'
      };
      const id = Date.now();
      setNotifications(prev => [...prev, {
        id,
        type,
        message: messages[type]
      }]);

      // Auto-remove after 5 seconds
      setTimeout(() => {
        setNotifications(prev => prev.filter(n => n.id !== id));
      }, 5000);
    };
    return <div>
        <div className="flex gap-2 mb-6 flex-wrap">
          <Button color="success" onClick={() => addNotification('success')}>
            Show Success
          </Button>
          <Button color="error" onClick={() => addNotification('error')}>
            Show Error
          </Button>
          <Button color="warning" onClick={() => addNotification('warning')}>
            Show Warning
          </Button>
          <Button color="info" onClick={() => addNotification('info')}>
            Show Info
          </Button>
        </div>

        <div className="fixed top-4 right-4 space-y-2 z-50" style={{
        maxWidth: '400px'
      }}>
          {notifications.map(notification => <Notification key={notification.id} variant="soft" color={notification.type as any} title={notification.type.charAt(0).toUpperCase() + notification.type.slice(1)} description={notification.message} onClose={() => setNotifications(prev => prev.filter(n => n.id !== notification.id))} />)}
        </div>
      </div>;
  }
}`,...(H=(q=g.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var J,K,_;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Notification variant="soft" color="primary" title="Download Ready" description="Your file is ready to download.">
        <div className="flex items-center gap-2 mt-2">
          <Button size="sm" leftIcon={<Download />}>
            Download
          </Button>
          <Button size="sm" variant="outline">
            Preview
          </Button>
        </div>
      </Notification>

      <Notification variant="soft" color="info" title="Update Available">
        <div className="mt-2">
          <p className="text-sm text-text-secondary mb-3">
            Version 2.5.0 includes new features and bug fixes.
          </p>
          <ul className="list-disc list-inside text-sm text-text-secondary space-y-1">
            <li>Improved performance</li>
            <li>New dark mode</li>
            <li>Bug fixes</li>
          </ul>
          <div className="mt-3">
            <Button size="sm" color="info">
              Update Now
            </Button>
          </div>
        </div>
      </Notification>

      <Notification variant="outline" color="success" title="Welcome!">
        <div className="mt-2 space-y-2">
          <p className="text-sm text-text-secondary">
            Thanks for signing up! Here's what you can do next:
          </p>
          <div className="flex gap-2">
            <Button size="sm" color="success" leftIcon={<User />}>
              Complete Profile
            </Button>
            <Button size="sm" variant="outline">
              Skip
            </Button>
          </div>
        </div>
      </Notification>
    </div>
}`,...(_=(K=x.parameters)==null?void 0:K.docs)==null?void 0:_.source}}};var G,Q,X;N.parameters={...N.parameters,docs:{...(G=N.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Notification variant="soft" color="primary" size="sm" title="New message from Sarah" description="Hey! Are you available for a quick call?" action={{
      label: 'Reply',
      onClick: () => alert('Opening chat...')
    }} />

      <Notification variant="soft" color="success" size="sm" title="Upload complete" description="document.pdf (2.4 MB)" action={{
      label: 'Open',
      onClick: () => alert('Opening document...')
    }} />

      <Notification variant="soft" color="warning" size="sm" title="Connection unstable" description="Your internet connection appears to be slow." action={{
      label: 'Retry',
      onClick: () => alert('Retrying connection...')
    }} />

      <Notification variant="soft" color="error" size="sm" title="Payment failed" description="Your card was declined. Please update your payment method." action={{
      label: 'Update',
      onClick: () => alert('Opening payment settings...')
    }} />

      <Notification variant="soft" color="info" size="sm" title="Tip of the day" description="Press Cmd+K to quickly search for anything." closable />
    </div>
}`,...(X=(Q=N.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,oe;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    const [toasts, setToasts] = useState<Array<{
      id: number;
      color: string;
      message: string;
    }>>([]);
    const showToast = (color: 'success' | 'error' | 'warning' | 'info') => {
      const id = Date.now();
      setToasts(prev => [...prev, {
        id,
        color,
        message: \`\${color} toast notification\`
      }]);
      setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== id));
      }, 3000);
    };
    return <div>
        <div className="flex gap-2 flex-wrap">
          <Button color="success" onClick={() => showToast('success')}>
            Success Toast
          </Button>
          <Button color="error" onClick={() => showToast('error')}>
            Error Toast
          </Button>
          <Button color="warning" onClick={() => showToast('warning')}>
            Warning Toast
          </Button>
          <Button color="info" onClick={() => showToast('info')}>
            Info Toast
          </Button>
        </div>

        {/* Toast container */}
        <div className="fixed bottom-4 right-4 space-y-2 z-50" style={{
        maxWidth: '400px'
      }}>
          {toasts.map(toast => <Notification key={toast.id} variant="solid" color={toast.color as any} size="sm" title={toast.message} onClose={() => setToasts(prev => prev.filter(t => t.id !== toast.id))} />)}
        </div>
      </div>;
  }
}`,...(oe=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:oe.source}}};var ie,te,se;w.parameters={...w.parameters,docs:{...(ie=w.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">With border line (default)</h3>
        <div className="space-y-2">
          <Notification variant="outline" color="info" title="Outline" description="Left accent border visible." />
          <Notification variant="soft" color="success" title="Soft" description="Left accent border visible." />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-3">Without border line</h3>
        <div className="space-y-2">
          <Notification variant="outline" color="info" title="Outline" description="No left accent border." borderLine={false} />
          <Notification variant="soft" color="success" title="Soft" description="No left accent border." borderLine={false} />
        </div>
      </div>
    </div>
}`,...(se=(te=w.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var ae,re,ne;b.parameters={...b.parameters,docs:{...(ae=b.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => {
    const colors = ['default', 'primary', 'secondary', 'accent', 'success', 'error', 'warning', 'info'] as const;
    const variants = ['default', 'solid', 'outline', 'soft'] as const;
    return <div className="space-y-8">
        {variants.map(v => <div key={v}>
            <h3 className="text-lg font-semibold mb-3 capitalize">{v}</h3>
            <div className="space-y-2">
              {colors.map(c => <Notification key={c} color={c} variant={v} title={\`\${c} \${v}\`} description="Description text" />)}
            </div>
          </div>)}
      </div>;
  }
}`,...(ne=(re=b.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};const Be=["Default","SuccessNotifications","ErrorNotifications","WarningNotifications","InfoNotifications","WithAction","NotClosable","InteractiveDemo","CustomContent","RealWorldExamples","ToastStyled","BorderLineComparison","ColorVariantMatrix"];export{w as BorderLineComparison,b as ColorVariantMatrix,x as CustomContent,d as Default,m as ErrorNotifications,f as InfoNotifications,g as InteractiveDemo,h as NotClosable,N as RealWorldExamples,p as SuccessNotifications,y as ToastStyled,u as WarningNotifications,v as WithAction,Be as __namedExportsOrder,Te as default};
