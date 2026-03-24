import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./index-ZH-6pyQh.js";import{C as i,M as k,a as me,b as pe,c as ue,d as xe,e as fe,f as he,g as Oe}from"./index-CGmHETr0.js";import{B as n}from"./index-23ax1BAm.js";import{D as ge,a as ve,b as ye,c as Ce,d as je,e as be,f as we,g as ke}from"./index-wu4W3CtW.js";import{T as O}from"./trash-2-vrMpzzku.js";import{S as De}from"./settings-D1wlBKo1.js";import{F as M}from"./file-text-DaZIRBjV.js";import{U as Ne}from"./user-BM8Midap.js";import{I as Me}from"./info-CKnY7ViN.js";import{L as Be}from"./layers-wuRBWWPs.js";import{C as Se}from"./circle-alert-C1u21Jbx.js";import{C as Fe}from"./circle-check-big-Ba-B0jqG.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DITbyant.js";import"./index-C6BiGwLV.js";import"./index-Bo-loign.js";import"./index-BP-xEy0R.js";import"./index-DVyBTwwr.js";import"./Combination-C3reJy6-.js";import"./utils-_uLxnvdl.js";import"./x-ByohdK2B.js";import"./createLucideIcon-BXJdBs6C.js";import"./index-ZW2Bszwo.js";import"./index-BoArNvwV.js";import"./variants-C8qliDOr.js";import"./useRipple-BuuTbn0W.js";const rt={title:"Feedback/Modal",component:i,tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg"],description:"Modal size"},color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"],description:"Border color accent"},centered:{control:"boolean",description:"Center align content"},showCloseButton:{control:"boolean",description:"Show close button"}}},u={render:()=>{const[r,t]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>t(!0),children:"Open Modal"}),e.jsx(i,{open:r,onOpenChange:t,title:"Modal Title",description:"This is a description that provides additional context about the modal.",children:e.jsx("div",{className:"py-4",children:e.jsx("p",{className:"text-sm text-text-secondary",children:"This is the modal content. You can put any content here."})})})]})}},x={render:()=>{const[r,t]=a.useState(!1),l=()=>{console.log("Confirmed!"),t(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>t(!0),color:"error",children:"Delete Account"}),e.jsx(i,{open:r,onOpenChange:t,color:"error",title:"Delete Account",description:"This action cannot be undone. This will permanently delete your account and remove your data from our servers.",footer:e.jsxs(e.Fragment,{children:[e.jsx(k,{asChild:!0,children:e.jsx(n,{variant:"outline",children:"Cancel"})}),e.jsx(n,{color:"error",onClick:l,leftIcon:e.jsx(O,{}),children:"Delete Account"})]})})]})}},f={render:()=>{const[r,t]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>t(!0),color:"warning",children:"Show Alert"}),e.jsx(i,{open:r,onOpenChange:t,size:"sm",color:"warning",centered:!0,title:"Warning",description:"Your session is about to expire in 2 minutes.",footer:e.jsx(n,{onClick:()=>t(!1),color:"warning",fullWidth:!0,children:"Extend Session"})})]})}},h={render:()=>{const[r,t]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>t(!0),color:"success",children:"Complete Action"}),e.jsx(i,{open:r,onOpenChange:t,size:"sm",color:"success",centered:!0,title:"Success!",description:"Your changes have been saved successfully.",footer:e.jsx(n,{onClick:()=>t(!1),color:"success",fullWidth:!0,leftIcon:e.jsx(Fe,{}),children:"Continue"})})]})}},g={render:()=>{const[r,t]=a.useState(!1),[l,o]=a.useState({name:"",email:""}),c=s=>{s.preventDefault(),console.log("Form submitted:",l),t(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>t(!0),leftIcon:e.jsx(Ne,{}),children:"Edit Profile"}),e.jsx(i,{open:r,onOpenChange:t,size:"md",color:"primary",title:"Edit Profile",description:"Update your personal information.",footer:e.jsxs(e.Fragment,{children:[e.jsx(k,{asChild:!0,children:e.jsx(n,{variant:"outline",children:"Cancel"})}),e.jsx(n,{color:"primary",onClick:c,children:"Save Changes"})]}),children:e.jsxs("form",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-text-primary mb-1",children:"Name"}),e.jsx("input",{type:"text",value:l.name,onChange:s=>o({...l,name:s.target.value}),className:"w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary",placeholder:"Enter your name"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-text-primary mb-1",children:"Email"}),e.jsx("input",{type:"email",value:l.email,onChange:s=>o({...l,email:s.target.value}),className:"w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary",placeholder:"Enter your email"})]})]})})]})}},v={render:()=>{const[r,t]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>t(!0),color:"info",leftIcon:e.jsx(Me,{}),children:"Learn More"}),e.jsx(i,{open:r,onOpenChange:t,color:"info",title:"How It Works",description:"Learn about the key features and benefits.",children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex gap-3",children:[e.jsx("div",{className:"flex-shrink-0 w-6 h-6 rounded-full bg-info/20 flex items-center justify-center text-info font-semibold text-sm",children:"1"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-text-primary mb-1",children:"Sign Up"}),e.jsx("p",{className:"text-sm text-text-secondary",children:"Create your account in seconds."})]})]}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx("div",{className:"flex-shrink-0 w-6 h-6 rounded-full bg-info/20 flex items-center justify-center text-info font-semibold text-sm",children:"2"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-text-primary mb-1",children:"Configure"}),e.jsx("p",{className:"text-sm text-text-secondary",children:"Set up your preferences and settings."})]})]}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx("div",{className:"flex-shrink-0 w-6 h-6 rounded-full bg-info/20 flex items-center justify-center text-info font-semibold text-sm",children:"3"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-text-primary mb-1",children:"Start Using"}),e.jsx("p",{className:"text-sm text-text-secondary",children:"Begin using all features immediately."})]})]})]})})]})}},y={render:()=>{const[r,t]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>t(!0),children:"Open Custom Modal"}),e.jsx(me,{open:r,onOpenChange:t,children:e.jsxs(pe,{size:"lg",color:"accent",children:[e.jsxs(ue,{size:"lg",color:"accent",children:[e.jsx(xe,{size:"lg",children:"Custom Composed Modal"}),e.jsx(fe,{size:"lg",children:"Build your own modal structure using the primitive components."})]}),e.jsx("div",{className:"py-4",children:e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 bg-surface rounded-lg",children:[e.jsx("h4",{className:"font-semibold mb-2",children:"Feature 1"}),e.jsx("p",{className:"text-sm text-text-secondary",children:"Description of feature 1."})]}),e.jsxs("div",{className:"p-4 bg-surface rounded-lg",children:[e.jsx("h4",{className:"font-semibold mb-2",children:"Feature 2"}),e.jsx("p",{className:"text-sm text-text-secondary",children:"Description of feature 2."})]})]})}),e.jsxs(he,{size:"lg",children:[e.jsx(k,{asChild:!0,children:e.jsx(n,{variant:"outline",children:"Cancel"})}),e.jsx(n,{color:"accent",children:"Save"})]})]})})]})}},C={render:()=>e.jsxs(me,{children:[e.jsx(Oe,{asChild:!0,children:e.jsx(n,{children:"Open with Trigger"})}),e.jsxs(pe,{children:[e.jsxs(ue,{children:[e.jsx(xe,{children:"Modal with Trigger"}),e.jsx(fe,{children:"This modal uses a ModalTrigger component instead of controlled state."})]}),e.jsx("div",{className:"py-4",children:e.jsx("p",{className:"text-sm text-text-secondary",children:"The trigger automatically handles opening and closing the modal."})}),e.jsx(he,{children:e.jsx(k,{asChild:!0,children:e.jsx(n,{children:"Close"})})})]})]})},j={render:()=>{const[r,t]=a.useState(!1),[l,o]=a.useState(!1),[c,s]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>t(!0),children:"Open First Modal"}),e.jsx(i,{open:r,onOpenChange:t,size:"lg",title:"Level 1 — Main Modal",description:"This is the first modal in the stack. Open another on top of this one.",footer:e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"outline",onClick:()=>t(!1),children:"Close"}),e.jsx(n,{color:"primary",onClick:()=>o(!0),children:"Open Level 2"})]}),children:e.jsxs("div",{className:"py-4 space-y-3",children:[e.jsx("p",{className:"text-sm text-text-secondary",children:'Click "Open Level 2" to stack another modal on top. You can click outside or press Escape to close the topmost modal without affecting modals below it.'}),e.jsx("div",{className:"p-3 bg-surface rounded-lg border border-border",children:e.jsx("p",{className:"text-xs font-mono text-text-secondary",children:"Stack depth: 1"})})]})}),e.jsx(i,{open:l,onOpenChange:o,size:"md",color:"primary",title:"Level 2 — Nested Modal",description:"Stacked on top of Level 1. Open one more?",footer:e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"outline",onClick:()=>o(!1),children:"Back"}),e.jsx(n,{color:"warning",onClick:()=>s(!0),children:"Open Level 3"})]}),children:e.jsxs("div",{className:"py-4 space-y-3",children:[e.jsx("p",{className:"text-sm text-text-secondary",children:"Notice the overlay dims further with each level. Each modal is independently dismissible."}),e.jsx("div",{className:"p-3 bg-primary/5 rounded-lg border border-primary/20",children:e.jsx("p",{className:"text-xs font-mono text-primary",children:"Stack depth: 2"})})]})}),e.jsx(i,{open:c,onOpenChange:s,size:"sm",color:"warning",centered:!0,title:"Level 3 — Confirmation",description:"Are you sure you want to proceed? This is the deepest level.",footer:e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"outline",onClick:()=>s(!1),children:"Cancel"}),e.jsx(n,{color:"success",onClick:()=>{s(!1),o(!1),t(!1)},children:"Confirm & Close All"})]}),children:e.jsx("div",{className:"py-2",children:e.jsx("div",{className:"p-3 bg-warning/5 rounded-lg border border-warning/20",children:e.jsx("p",{className:"text-xs font-mono text-warning",children:"Stack depth: 3"})})})})]})}},b={render:()=>{const[r,t]=a.useState(!1),[l,o]=a.useState(!1),[c,s]=a.useState(!1),d=()=>{c?o(!0):t(!1)},m=()=>{o(!1),t(!1),s(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>{t(!0),s(!1)},leftIcon:e.jsx(Ne,{}),children:"Edit Profile"}),e.jsx(i,{open:r,onOpenChange:D=>{D?t(!0):d()},size:"md",color:"primary",title:"Edit Profile",description:"Make changes to your profile. Unsaved changes will prompt a confirmation.",showCloseButton:!1,footer:e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"outline",onClick:d,children:"Cancel"}),e.jsx(n,{color:"primary",onClick:()=>{t(!1),s(!1)},children:"Save Changes"})]}),children:e.jsxs("div",{className:"space-y-4 py-2",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-text-primary mb-1",children:"Display Name"}),e.jsx("input",{type:"text",className:"w-full px-3 py-2 border border-border rounded-md bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-primary",placeholder:"Enter name",onChange:()=>s(!0)})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-text-primary mb-1",children:"Bio"}),e.jsx("textarea",{className:"w-full px-3 py-2 border border-border rounded-md bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-primary resize-none",rows:3,placeholder:"Tell us about yourself",onChange:()=>s(!0)})]}),c&&e.jsxs("p",{className:"text-xs text-warning flex items-center gap-1",children:[e.jsx(Se,{className:"w-3 h-3"})," You have unsaved changes"]})]})}),e.jsx(i,{open:l,onOpenChange:o,size:"xs",color:"error",centered:!0,title:"Discard changes?",description:"You have unsaved changes that will be lost.",footer:e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"outline",onClick:()=>o(!1),children:"Keep Editing"}),e.jsx(n,{color:"error",onClick:m,leftIcon:e.jsx(O,{className:"w-4 h-4"}),children:"Discard"})]})})]})}},w={render:()=>{const[r,t]=a.useState(!1),[l,o]=a.useState(!1),[c,s]=a.useState(!1),d=[{id:1,name:"Project Alpha",status:"Active",updated:"2 hours ago"},{id:2,name:"Project Beta",status:"Draft",updated:"1 day ago"},{id:3,name:"Project Gamma",status:"Archived",updated:"3 days ago"}],[m,D]=a.useState(d[0]);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>t(!0),leftIcon:e.jsx(Be,{className:"w-4 h-4"}),children:"Open Project Panel"}),e.jsx(ge,{open:r,onOpenChange:t,direction:"right",children:e.jsxs(ve,{direction:"right",size:"lg",showCloseButton:!0,children:[e.jsxs(ye,{children:[e.jsx(Ce,{children:"Projects"}),e.jsx(je,{children:"Manage your projects. Click a project to view details."})]}),e.jsx(be,{children:e.jsx("div",{className:"space-y-2",children:d.map(p=>e.jsxs("div",{className:"flex items-center justify-between p-3 rounded-lg border border-border hover:bg-surface cursor-pointer transition-colors",onClick:()=>{D(p),o(!0)},children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-text-primary",children:p.name}),e.jsxs("p",{className:"text-xs text-text-secondary",children:["Updated ",p.updated]})]}),e.jsx("span",{className:`text-xs px-2 py-0.5 rounded-full ${p.status==="Active"?"bg-success/10 text-success":p.status==="Draft"?"bg-warning/10 text-warning":"bg-surface text-text-secondary"}`,children:p.status})]},p.id))})}),e.jsx(we,{children:e.jsx(ke,{asChild:!0,children:e.jsx(n,{variant:"outline",fullWidth:!0,children:"Close Panel"})})})]})}),e.jsx(i,{open:l,onOpenChange:o,size:"md",color:"primary",title:m.name,description:`Status: ${m.status} · Last updated ${m.updated}`,footer:e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"outline",color:"error",onClick:()=>s(!0),leftIcon:e.jsx(O,{className:"w-4 h-4"}),children:"Delete"}),e.jsx("div",{className:"flex-1"}),e.jsx(n,{variant:"outline",onClick:()=>o(!1),children:"Cancel"}),e.jsx(n,{color:"primary",onClick:()=>o(!1),children:"Save"})]}),children:e.jsxs("div",{className:"space-y-4 py-2",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-text-primary mb-1",children:"Project Name"}),e.jsx("input",{type:"text",defaultValue:m.name,className:"w-full px-3 py-2 border border-border rounded-md bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-text-primary mb-1",children:"Description"}),e.jsx("textarea",{className:"w-full px-3 py-2 border border-border rounded-md bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-primary resize-none",rows:3,placeholder:"Project description..."})]})]})}),e.jsx(i,{open:c,onOpenChange:s,size:"xs",color:"error",centered:!0,title:"Delete project?",description:`"${m.name}" will be permanently removed.`,footer:e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"outline",onClick:()=>s(!1),children:"Cancel"}),e.jsx(n,{color:"error",onClick:()=>{s(!1),o(!1)},leftIcon:e.jsx(O,{className:"w-4 h-4"}),children:"Delete"})]})})]})}},N={render:()=>{const[r,t]=a.useState(!1),[l,o]=a.useState(!1),c=[{time:"14:32:01",level:"info",message:"Application started"},{time:"14:32:02",level:"info",message:"Connected to database"},{time:"14:32:03",level:"warning",message:"Cache miss for key: user_prefs"},{time:"14:32:04",level:"info",message:"Loaded 42 records from users table"},{time:"14:32:05",level:"error",message:"Failed to connect to external API"},{time:"14:32:06",level:"info",message:"Retry attempt 1/3..."},{time:"14:32:08",level:"info",message:"External API connected"},{time:"14:32:09",level:"info",message:"All services healthy"}];return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>t(!0),leftIcon:e.jsx(De,{className:"w-4 h-4"}),children:"System Dashboard"}),e.jsx(i,{open:r,onOpenChange:t,size:"lg",title:"System Dashboard",description:"Monitor system health and view detailed logs.",children:e.jsxs("div",{className:"space-y-4 py-2",children:[e.jsx("div",{className:"grid grid-cols-3 gap-3",children:[{label:"CPU",value:"23%",color:"text-success"},{label:"Memory",value:"67%",color:"text-warning"},{label:"Disk",value:"45%",color:"text-info"}].map(s=>e.jsxs("div",{className:"p-3 bg-surface rounded-lg text-center",children:[e.jsx("p",{className:"text-xs text-text-secondary",children:s.label}),e.jsx("p",{className:`text-xl font-bold ${s.color}`,children:s.value})]},s.label))}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("p",{className:"text-sm text-text-secondary",children:"Recent activity (last 3)"}),e.jsx(n,{size:"sm",variant:"outline",onClick:()=>o(!0),leftIcon:e.jsx(M,{className:"w-3.5 h-3.5"}),children:"View Full Logs"})]}),e.jsx("div",{className:"space-y-1",children:c.slice(-3).map((s,d)=>e.jsxs("div",{className:"flex gap-2 text-xs font-mono px-2 py-1 rounded bg-surface",children:[e.jsx("span",{className:"text-text-secondary shrink-0",children:s.time}),e.jsxs("span",{className:s.level==="error"?"text-error shrink-0":s.level==="warning"?"text-warning shrink-0":"text-info shrink-0",children:["[",s.level,"]"]}),e.jsx("span",{className:"text-text-primary truncate",children:s.message})]},d))})]})}),e.jsx(ge,{open:l,onOpenChange:o,direction:"right",children:e.jsxs(ve,{direction:"right",size:"lg",showCloseButton:!0,children:[e.jsxs(ye,{children:[e.jsx(Ce,{children:"System Logs"}),e.jsx(je,{children:"Complete log output from current session."})]}),e.jsx(be,{children:e.jsx("div",{className:"space-y-1",children:c.map((s,d)=>e.jsxs("div",{className:"flex gap-3 text-sm font-mono px-3 py-2 rounded hover:bg-surface transition-colors",children:[e.jsx("span",{className:"text-text-secondary shrink-0 tabular-nums",children:s.time}),e.jsx("span",{className:`shrink-0 w-16 text-right ${s.level==="error"?"text-error font-semibold":s.level==="warning"?"text-warning":"text-text-secondary"}`,children:s.level}),e.jsx("span",{className:"text-text-primary",children:s.message})]},d))})}),e.jsxs(we,{children:[e.jsx(n,{variant:"outline",onClick:()=>o(!1),children:"Close"}),e.jsx(n,{color:"info",variant:"outline",leftIcon:e.jsx(M,{className:"w-4 h-4"}),children:"Export Logs"})]})]})})]})}};var B,S,F;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <ComposedModal open={open} onOpenChange={setOpen} title="Modal Title" description="This is a description that provides additional context about the modal.">
          <div className="py-4">
            <p className="text-sm text-text-secondary">
              This is the modal content. You can put any content here.
            </p>
          </div>
        </ComposedModal>
      </>;
  }
}`,...(F=(S=u.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var L,T,z;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const handleConfirm = () => {
      console.log('Confirmed!');
      setOpen(false);
    };
    return <>
        <Button onClick={() => setOpen(true)} color="error">Delete Account</Button>
        <ComposedModal open={open} onOpenChange={setOpen} color="error" title="Delete Account" description="This action cannot be undone. This will permanently delete your account and remove your data from our servers." footer={<>
              <ModalClose asChild>
                <Button variant="outline">Cancel</Button>
              </ModalClose>
              <Button color="error" onClick={handleConfirm} leftIcon={<Trash2 />}>
                Delete Account
              </Button>
            </>} />
      </>;
  }
}`,...(z=(T=x.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var I,A,E;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)} color="warning">Show Alert</Button>
        <ComposedModal open={open} onOpenChange={setOpen} size="sm" color="warning" centered title="Warning" description="Your session is about to expire in 2 minutes." footer={<Button onClick={() => setOpen(false)} color="warning" fullWidth>
              Extend Session
            </Button>} />
      </>;
  }
}`,...(E=(A=f.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var P,U,W;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)} color="success">Complete Action</Button>
        <ComposedModal open={open} onOpenChange={setOpen} size="sm" color="success" centered title="Success!" description="Your changes have been saved successfully." footer={<Button onClick={() => setOpen(false)} color="success" fullWidth leftIcon={<CheckCircle />}>
              Continue
            </Button>} />
      </>;
  }
}`,...(W=(U=h.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var H,Y,$;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
      name: '',
      email: ''
    });
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
      setOpen(false);
    };
    return <>
        <Button onClick={() => setOpen(true)} leftIcon={<User />}>Edit Profile</Button>
        <ComposedModal open={open} onOpenChange={setOpen} size="md" color="primary" title="Edit Profile" description="Update your personal information." footer={<>
              <ModalClose asChild>
                <Button variant="outline">Cancel</Button>
              </ModalClose>
              <Button color="primary" onClick={handleSubmit}>
                Save Changes
              </Button>
            </>}>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1">
                Name
              </label>
              <input type="text" value={formData.name} onChange={e => setFormData({
              ...formData,
              name: e.target.value
            })} className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Enter your name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1">
                Email
              </label>
              <input type="email" value={formData.email} onChange={e => setFormData({
              ...formData,
              email: e.target.value
            })} className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Enter your email" />
            </div>
          </form>
        </ComposedModal>
      </>;
  }
}`,...($=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var R,V,_;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)} color="info" leftIcon={<Info />}>
          Learn More
        </Button>
        <ComposedModal open={open} onOpenChange={setOpen} color="info" title="How It Works" description="Learn about the key features and benefits.">
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-info/20 flex items-center justify-center text-info font-semibold text-sm">
                1
              </div>
              <div>
                <h4 className="font-medium text-text-primary mb-1">Sign Up</h4>
                <p className="text-sm text-text-secondary">Create your account in seconds.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-info/20 flex items-center justify-center text-info font-semibold text-sm">
                2
              </div>
              <div>
                <h4 className="font-medium text-text-primary mb-1">Configure</h4>
                <p className="text-sm text-text-secondary">Set up your preferences and settings.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-info/20 flex items-center justify-center text-info font-semibold text-sm">
                3
              </div>
              <div>
                <h4 className="font-medium text-text-primary mb-1">Start Using</h4>
                <p className="text-sm text-text-secondary">Begin using all features immediately.</p>
              </div>
            </div>
          </div>
        </ComposedModal>
      </>;
  }
}`,...(_=(V=v.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var G,K,q;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Open Custom Modal</Button>
        <Modal open={open} onOpenChange={setOpen}>
          <ModalContent size="lg" color="accent">
            <ModalHeader size="lg" color="accent">
              <ModalTitle size="lg">Custom Composed Modal</ModalTitle>
              <ModalDescription size="lg">
                Build your own modal structure using the primitive components.
              </ModalDescription>
            </ModalHeader>

            <div className="py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-surface rounded-lg">
                  <h4 className="font-semibold mb-2">Feature 1</h4>
                  <p className="text-sm text-text-secondary">Description of feature 1.</p>
                </div>
                <div className="p-4 bg-surface rounded-lg">
                  <h4 className="font-semibold mb-2">Feature 2</h4>
                  <p className="text-sm text-text-secondary">Description of feature 2.</p>
                </div>
              </div>
            </div>

            <ModalFooter size="lg">
              <ModalClose asChild>
                <Button variant="outline">Cancel</Button>
              </ModalClose>
              <Button color="accent">Save</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>;
  }
}`,...(q=(K=y.parameters)==null?void 0:K.docs)==null?void 0:q.source}}};var J,Q,X;C.parameters={...C.parameters,docs:{...(J=C.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    return <Modal>
        <ModalTrigger asChild>
          <Button>Open with Trigger</Button>
        </ModalTrigger>
        <ModalContent>
          <ModalHeader>
            <ModalTitle>Modal with Trigger</ModalTitle>
            <ModalDescription>
              This modal uses a ModalTrigger component instead of controlled state.
            </ModalDescription>
          </ModalHeader>
          <div className="py-4">
            <p className="text-sm text-text-secondary">
              The trigger automatically handles opening and closing the modal.
            </p>
          </div>
          <ModalFooter>
            <ModalClose asChild>
              <Button>Close</Button>
            </ModalClose>
          </ModalFooter>
        </ModalContent>
      </Modal>;
  }
}`,...(X=(Q=C.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,te;j.parameters={...j.parameters,docs:{...(Z=j.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    const [level1, setLevel1] = useState(false);
    const [level2, setLevel2] = useState(false);
    const [level3, setLevel3] = useState(false);
    return <>
        <Button onClick={() => setLevel1(true)}>Open First Modal</Button>

        {/* Level 1 */}
        <ComposedModal open={level1} onOpenChange={setLevel1} size="lg" title="Level 1 — Main Modal" description="This is the first modal in the stack. Open another on top of this one." footer={<>
              <Button variant="outline" onClick={() => setLevel1(false)}>Close</Button>
              <Button color="primary" onClick={() => setLevel2(true)}>
                Open Level 2
              </Button>
            </>}>
          <div className="py-4 space-y-3">
            <p className="text-sm text-text-secondary">
              Click "Open Level 2" to stack another modal on top. You can click outside or press Escape to close the topmost modal without affecting modals below it.
            </p>
            <div className="p-3 bg-surface rounded-lg border border-border">
              <p className="text-xs font-mono text-text-secondary">Stack depth: 1</p>
            </div>
          </div>
        </ComposedModal>

        {/* Level 2 */}
        <ComposedModal open={level2} onOpenChange={setLevel2} size="md" color="primary" title="Level 2 — Nested Modal" description="Stacked on top of Level 1. Open one more?" footer={<>
              <Button variant="outline" onClick={() => setLevel2(false)}>Back</Button>
              <Button color="warning" onClick={() => setLevel3(true)}>
                Open Level 3
              </Button>
            </>}>
          <div className="py-4 space-y-3">
            <p className="text-sm text-text-secondary">
              Notice the overlay dims further with each level. Each modal is independently dismissible.
            </p>
            <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-xs font-mono text-primary">Stack depth: 2</p>
            </div>
          </div>
        </ComposedModal>

        {/* Level 3 */}
        <ComposedModal open={level3} onOpenChange={setLevel3} size="sm" color="warning" centered title="Level 3 — Confirmation" description="Are you sure you want to proceed? This is the deepest level." footer={<>
              <Button variant="outline" onClick={() => setLevel3(false)}>Cancel</Button>
              <Button color="success" onClick={() => {
          setLevel3(false);
          setLevel2(false);
          setLevel1(false);
        }}>
                Confirm & Close All
              </Button>
            </>}>
          <div className="py-2">
            <div className="p-3 bg-warning/5 rounded-lg border border-warning/20">
              <p className="text-xs font-mono text-warning">Stack depth: 3</p>
            </div>
          </div>
        </ComposedModal>
      </>;
  }
}`,...(te=(ee=j.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,se,oe;b.parameters={...b.parameters,docs:{...(ne=b.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => {
    const [formOpen, setFormOpen] = useState(false);
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [dirty, setDirty] = useState(false);
    const handleClose = () => {
      if (dirty) {
        setConfirmOpen(true);
      } else {
        setFormOpen(false);
      }
    };
    const handleDiscard = () => {
      setConfirmOpen(false);
      setFormOpen(false);
      setDirty(false);
    };
    return <>
        <Button onClick={() => {
        setFormOpen(true);
        setDirty(false);
      }} leftIcon={<User />}>
          Edit Profile
        </Button>

        <ComposedModal open={formOpen} onOpenChange={open => {
        if (!open) handleClose();else setFormOpen(true);
      }} size="md" color="primary" title="Edit Profile" description="Make changes to your profile. Unsaved changes will prompt a confirmation." showCloseButton={false} footer={<>
              <Button variant="outline" onClick={handleClose}>Cancel</Button>
              <Button color="primary" onClick={() => {
          setFormOpen(false);
          setDirty(false);
        }}>
                Save Changes
              </Button>
            </>}>
          <div className="space-y-4 py-2">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1">Display Name</label>
              <input type="text" className="w-full px-3 py-2 border border-border rounded-md bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Enter name" onChange={() => setDirty(true)} />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1">Bio</label>
              <textarea className="w-full px-3 py-2 border border-border rounded-md bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-primary resize-none" rows={3} placeholder="Tell us about yourself" onChange={() => setDirty(true)} />
            </div>
            {dirty && <p className="text-xs text-warning flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> You have unsaved changes
              </p>}
          </div>
        </ComposedModal>

        {/* Discard confirmation */}
        <ComposedModal open={confirmOpen} onOpenChange={setConfirmOpen} size="xs" color="error" centered title="Discard changes?" description="You have unsaved changes that will be lost." footer={<>
              <Button variant="outline" onClick={() => setConfirmOpen(false)}>Keep Editing</Button>
              <Button color="error" onClick={handleDiscard} leftIcon={<Trash2 className="w-4 h-4" />}>
                Discard
              </Button>
            </>} />
      </>;
  }
}`,...(oe=(se=b.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var re,ae,le;w.parameters={...w.parameters,docs:{...(re=w.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);
    const items = [{
      id: 1,
      name: 'Project Alpha',
      status: 'Active',
      updated: '2 hours ago'
    }, {
      id: 2,
      name: 'Project Beta',
      status: 'Draft',
      updated: '1 day ago'
    }, {
      id: 3,
      name: 'Project Gamma',
      status: 'Archived',
      updated: '3 days ago'
    }];
    const [selected, setSelected] = useState(items[0]);
    return <>
        <Button onClick={() => setDrawerOpen(true)} leftIcon={<Layers className="w-4 h-4" />}>
          Open Project Panel
        </Button>

        <Drawer open={drawerOpen} onOpenChange={setDrawerOpen} direction="right">
          <DrawerContent direction="right" size="lg" showCloseButton>
            <DrawerHeader>
              <DrawerTitle>Projects</DrawerTitle>
              <DrawerDescription>Manage your projects. Click a project to view details.</DrawerDescription>
            </DrawerHeader>
            <DrawerBody>
              <div className="space-y-2">
                {items.map(item => <div key={item.id} className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-surface cursor-pointer transition-colors" onClick={() => {
                setSelected(item);
                setModalOpen(true);
              }}>
                    <div>
                      <p className="font-medium text-text-primary">{item.name}</p>
                      <p className="text-xs text-text-secondary">Updated {item.updated}</p>
                    </div>
                    <span className={\`text-xs px-2 py-0.5 rounded-full \${item.status === 'Active' ? 'bg-success/10 text-success' : item.status === 'Draft' ? 'bg-warning/10 text-warning' : 'bg-surface text-text-secondary'}\`}>
                      {item.status}
                    </span>
                  </div>)}
              </div>
            </DrawerBody>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="outline" fullWidth>Close Panel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

        {/* Modal opens on top of drawer */}
        <ComposedModal open={modalOpen} onOpenChange={setModalOpen} size="md" color="primary" title={selected.name} description={\`Status: \${selected.status} · Last updated \${selected.updated}\`} footer={<>
              <Button variant="outline" color="error" onClick={() => setDeleteOpen(true)} leftIcon={<Trash2 className="w-4 h-4" />}>
                Delete
              </Button>
              <div className="flex-1" />
              <Button variant="outline" onClick={() => setModalOpen(false)}>Cancel</Button>
              <Button color="primary" onClick={() => setModalOpen(false)}>Save</Button>
            </>}>
          <div className="space-y-4 py-2">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1">Project Name</label>
              <input type="text" defaultValue={selected.name} className="w-full px-3 py-2 border border-border rounded-md bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1">Description</label>
              <textarea className="w-full px-3 py-2 border border-border rounded-md bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-primary resize-none" rows={3} placeholder="Project description..." />
            </div>
          </div>
        </ComposedModal>

        {/* Delete confirmation stacks on top of the edit modal */}
        <ComposedModal open={deleteOpen} onOpenChange={setDeleteOpen} size="xs" color="error" centered title="Delete project?" description={\`"\${selected.name}" will be permanently removed.\`} footer={<>
              <Button variant="outline" onClick={() => setDeleteOpen(false)}>Cancel</Button>
              <Button color="error" onClick={() => {
          setDeleteOpen(false);
          setModalOpen(false);
        }} leftIcon={<Trash2 className="w-4 h-4" />}>
                Delete
              </Button>
            </>} />
      </>;
  }
}`,...(le=(ae=w.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};var ie,ce,de;N.parameters={...N.parameters,docs:{...(ie=N.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const logs = [{
      time: '14:32:01',
      level: 'info',
      message: 'Application started'
    }, {
      time: '14:32:02',
      level: 'info',
      message: 'Connected to database'
    }, {
      time: '14:32:03',
      level: 'warning',
      message: 'Cache miss for key: user_prefs'
    }, {
      time: '14:32:04',
      level: 'info',
      message: 'Loaded 42 records from users table'
    }, {
      time: '14:32:05',
      level: 'error',
      message: 'Failed to connect to external API'
    }, {
      time: '14:32:06',
      level: 'info',
      message: 'Retry attempt 1/3...'
    }, {
      time: '14:32:08',
      level: 'info',
      message: 'External API connected'
    }, {
      time: '14:32:09',
      level: 'info',
      message: 'All services healthy'
    }];
    return <>
        <Button onClick={() => setModalOpen(true)} leftIcon={<Settings className="w-4 h-4" />}>
          System Dashboard
        </Button>

        <ComposedModal open={modalOpen} onOpenChange={setModalOpen} size="lg" title="System Dashboard" description="Monitor system health and view detailed logs.">
          <div className="space-y-4 py-2">
            <div className="grid grid-cols-3 gap-3">
              {[{
              label: 'CPU',
              value: '23%',
              color: 'text-success'
            }, {
              label: 'Memory',
              value: '67%',
              color: 'text-warning'
            }, {
              label: 'Disk',
              value: '45%',
              color: 'text-info'
            }].map(stat => <div key={stat.label} className="p-3 bg-surface rounded-lg text-center">
                  <p className="text-xs text-text-secondary">{stat.label}</p>
                  <p className={\`text-xl font-bold \${stat.color}\`}>{stat.value}</p>
                </div>)}
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm text-text-secondary">Recent activity (last 3)</p>
              <Button size="sm" variant="outline" onClick={() => setDrawerOpen(true)} leftIcon={<FileText className="w-3.5 h-3.5" />}>
                View Full Logs
              </Button>
            </div>

            <div className="space-y-1">
              {logs.slice(-3).map((log, i) => <div key={i} className="flex gap-2 text-xs font-mono px-2 py-1 rounded bg-surface">
                  <span className="text-text-secondary shrink-0">{log.time}</span>
                  <span className={log.level === 'error' ? 'text-error shrink-0' : log.level === 'warning' ? 'text-warning shrink-0' : 'text-info shrink-0'}>
                    [{log.level}]
                  </span>
                  <span className="text-text-primary truncate">{log.message}</span>
                </div>)}
            </div>
          </div>
        </ComposedModal>

        {/* Full log drawer slides out from the modal */}
        <Drawer open={drawerOpen} onOpenChange={setDrawerOpen} direction="right">
          <DrawerContent direction="right" size="lg" showCloseButton>
            <DrawerHeader>
              <DrawerTitle>System Logs</DrawerTitle>
              <DrawerDescription>Complete log output from current session.</DrawerDescription>
            </DrawerHeader>
            <DrawerBody>
              <div className="space-y-1">
                {logs.map((log, i) => <div key={i} className="flex gap-3 text-sm font-mono px-3 py-2 rounded hover:bg-surface transition-colors">
                    <span className="text-text-secondary shrink-0 tabular-nums">{log.time}</span>
                    <span className={\`shrink-0 w-16 text-right \${log.level === 'error' ? 'text-error font-semibold' : log.level === 'warning' ? 'text-warning' : 'text-text-secondary'}\`}>
                      {log.level}
                    </span>
                    <span className="text-text-primary">{log.message}</span>
                  </div>)}
              </div>
            </DrawerBody>
            <DrawerFooter>
              <Button variant="outline" onClick={() => setDrawerOpen(false)}>Close</Button>
              <Button color="info" variant="outline" leftIcon={<FileText className="w-4 h-4" />}>
                Export Logs
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>;
  }
}`,...(de=(ce=N.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};const at=["Default","ConfirmationDialog","AlertDialog","SuccessNotification","FormModal","InfoModal","CustomComposition","WithTrigger","StackedModals","ModalWithConfirmation","ModalInDrawer","DrawerInModal"];export{f as AlertDialog,x as ConfirmationDialog,y as CustomComposition,u as Default,N as DrawerInModal,g as FormModal,v as InfoModal,w as ModalInDrawer,b as ModalWithConfirmation,j as StackedModals,h as SuccessNotification,C as WithTrigger,at as __namedExportsOrder,rt as default};
