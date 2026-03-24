import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{P as n,a as o,b as i}from"./index-M94l2otH.js";import{B as s}from"./index-23ax1BAm.js";import{r as N}from"./index-ZH-6pyQh.js";import{C as q}from"./calendar-DcUEuZqF.js";import{U as y}from"./user-BM8Midap.js";import{S as H}from"./settings-D1wlBKo1.js";import{M as K}from"./mail-1HDD9Lg3.js";import{L as Q}from"./log-out-FX55YeXE.js";import{X as Z}from"./x-ByohdK2B.js";import"./index-lJNWladF.js";import"./index-C6BiGwLV.js";import"./index-Bo-loign.js";import"./index-BP-xEy0R.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DVyBTwwr.js";import"./Combination-C3reJy6-.js";import"./index-BH7Jj7fg.js";import"./utils-_uLxnvdl.js";import"./variants-C8qliDOr.js";import"./index-ZW2Bszwo.js";import"./index-BoArNvwV.js";import"./useRipple-BuuTbn0W.js";import"./createLucideIcon-BXJdBs6C.js";const Ce={title:"Data Display/Popover",component:n,tags:["autodocs"],argTypes:{defaultOpen:{control:"boolean",description:"Initial open state"},open:{control:"boolean",description:"Controlled open state"},modal:{control:"boolean",description:"Whether to render in modal mode"}}},d={render:()=>e.jsxs(n,{children:[e.jsx(o,{asChild:!0,children:e.jsx(s,{children:"Open Popover"})}),e.jsx(i,{children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-medium text-sm",children:"Popover Title"}),e.jsx("p",{className:"text-sm text-text-secondary",children:"This is a simple popover with some content inside."})]})})]})},m={render:()=>{const[a,t]=N.useState("");return e.jsxs(n,{children:[e.jsx(o,{asChild:!0,children:e.jsx(s,{children:"Edit Profile"})}),e.jsx(i,{className:"w-80",children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-medium text-sm",children:"Edit Profile"}),e.jsx("p",{className:"text-xs text-text-secondary",children:"Update your profile information"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-sm font-medium",children:"Name"}),e.jsx("input",{type:"text",className:"w-full px-3 py-2 text-sm border border-border rounded-md",placeholder:"Enter your name",value:a,onChange:r=>t(r.target.value)})]}),e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx(s,{size:"sm",variant:"ghost",children:"Cancel"}),e.jsx(s,{size:"sm",color:"primary",children:"Save"})]})]})})]})}},p={render:()=>e.jsxs(n,{children:[e.jsx(o,{asChild:!0,children:e.jsx(s,{variant:"ghost",leftIcon:e.jsx(y,{}),children:"John Doe"})}),e.jsxs(i,{className:"w-56 p-0",children:[e.jsxs("div",{className:"p-3 border-b border-border",children:[e.jsx("p",{className:"text-sm font-medium",children:"John Doe"}),e.jsx("p",{className:"text-xs text-text-secondary",children:"john@example.com"})]}),e.jsxs("div",{className:"p-1",children:[e.jsxs("button",{className:"w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-surface rounded-sm",children:[e.jsx(y,{className:"w-4 h-4"}),"Profile"]}),e.jsxs("button",{className:"w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-surface rounded-sm",children:[e.jsx(H,{className:"w-4 h-4"}),"Settings"]}),e.jsxs("button",{className:"w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-surface rounded-sm",children:[e.jsx(K,{className:"w-4 h-4"}),"Messages"]}),e.jsx("div",{className:"h-px bg-border my-1"}),e.jsxs("button",{className:"w-full flex items-center gap-2 px-3 py-2 text-sm text-error hover:bg-error/10 rounded-sm",children:[e.jsx(Q,{className:"w-4 h-4"}),"Logout"]})]})]})]})},x={render:()=>{const[a,t]=N.useState(null),r=new Date,c=new Date(r.getFullYear(),r.getMonth()+1,0).getDate();return e.jsxs(n,{children:[e.jsx(o,{asChild:!0,children:e.jsx(s,{variant:"outline",leftIcon:e.jsx(q,{}),children:a?a.toLocaleDateString():"Pick a date"})}),e.jsx(i,{className:"w-auto",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsx("h4",{className:"font-medium text-sm",children:r.toLocaleDateString("en-US",{month:"long",year:"numeric"})})}),e.jsxs("div",{className:"grid grid-cols-7 gap-1",children:[["Su","Mo","Tu","We","Th","Fr","Sa"].map(l=>e.jsx("div",{className:"text-xs font-medium text-center p-2 text-text-secondary",children:l},l)),Array.from({length:c},(l,G)=>G+1).map(l=>e.jsx("button",{onClick:()=>t(new Date(r.getFullYear(),r.getMonth(),l)),className:"text-sm p-2 hover:bg-surface rounded-md text-center",children:l},l))]})]})})]})}},h={render:()=>{const[a,t]=N.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx(s,{size:"sm",onClick:()=>t(!0),children:"Open Popover"}),e.jsx(s,{size:"sm",variant:"outline",onClick:()=>t(!1),children:"Close Popover"})]}),e.jsxs(n,{open:a,onOpenChange:t,children:[e.jsx(o,{asChild:!0,children:e.jsx(s,{children:"Toggle Popover"})}),e.jsx(i,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsx("h4",{className:"font-medium text-sm",children:"Controlled Popover"}),e.jsx("p",{className:"text-sm text-text-secondary",children:"This popover can be controlled programmatically"}),e.jsx(s,{size:"sm",fullWidth:!0,onClick:()=>t(!1),children:"Close"})]})})]})]})}},u={render:()=>{const[a,t]=N.useState(!1);return e.jsxs(n,{open:a,onOpenChange:t,children:[e.jsx(o,{asChild:!0,children:e.jsx(s,{children:"Open Popover"})}),e.jsxs(i,{className:"relative",children:[e.jsx("button",{onClick:()=>t(!1),className:"absolute top-2 right-2 p-1 hover:bg-surface rounded-sm",children:e.jsx(Z,{className:"w-4 h-4"})}),e.jsxs("div",{className:"space-y-2 pr-6",children:[e.jsx("h4",{className:"font-medium text-sm",children:"Popover with Close Button"}),e.jsx("p",{className:"text-sm text-text-secondary",children:"Click the X button to close this popover"})]})]})]})}},v={render:()=>e.jsxs(n,{children:[e.jsx(o,{asChild:!0,children:e.jsx(s,{children:"View Details"})}),e.jsx(i,{className:"w-96",children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-base mb-1",children:"Feature Overview"}),e.jsx("p",{className:"text-sm text-text-secondary",children:"Learn more about this powerful feature"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0",children:e.jsx("span",{className:"text-primary font-semibold text-sm",children:"1"})}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium text-sm",children:"Easy to Use"}),e.jsx("p",{className:"text-xs text-text-secondary",children:"Simple and intuitive interface"})]})]}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0",children:e.jsx("span",{className:"text-primary font-semibold text-sm",children:"2"})}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium text-sm",children:"Powerful Features"}),e.jsx("p",{className:"text-xs text-text-secondary",children:"Everything you need in one place"})]})]}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0",children:e.jsx("span",{className:"text-primary font-semibold text-sm",children:"3"})}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium text-sm",children:"Fast Performance"}),e.jsx("p",{className:"text-xs text-text-secondary",children:"Optimized for speed"})]})]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(s,{size:"sm",color:"primary",fullWidth:!0,children:"Get Started"}),e.jsx(s,{size:"sm",variant:"outline",fullWidth:!0,children:"Learn More"})]})]})})]})},f={render:()=>e.jsxs("div",{className:"relative p-6 rounded-lg border border-border overflow-hidden",style:{height:200},children:[e.jsxs("p",{className:"text-sm text-text-secondary mb-4",children:["The popover renders ",e.jsx("strong",{children:"inline"})," (no portal) so it's clipped by this container's ",e.jsx("code",{children:"overflow: hidden"}),". Useful when you need the popover to participate in the parent's stacking context."]}),e.jsxs(n,{children:[e.jsx(o,{asChild:!0,children:e.jsx(s,{size:"sm",children:"No Portal"})}),e.jsx(i,{portal:!1,children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-medium text-sm",children:"Inline Popover"}),e.jsx("p",{className:"text-sm text-text-secondary",children:"This content is rendered without a React Portal."})]})})]})]})},g={render:()=>{const a=["default","primary","secondary","accent","success","error","warning","info"],t=["default","solid","soft"];return e.jsx("div",{className:"space-y-8",children:t.map(r=>e.jsxs("div",{children:[e.jsxs("h3",{className:"text-sm font-semibold mb-4 capitalize",children:[r," Variant"]}),e.jsx("div",{className:"flex gap-3 flex-wrap",children:a.map(c=>e.jsxs(n,{children:[e.jsx(o,{asChild:!0,children:e.jsx(s,{variant:"outline",size:"sm",children:c})}),e.jsx(i,{color:c,variant:r,children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-medium text-sm capitalize",children:c}),e.jsxs("p",{className:"text-sm text-text-secondary",children:[r," variant popover"]})]})})]},`${r}-${c}`))})]},r))})}};var j,P,b;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Popover>
      <PopoverTrigger asChild>
        <Button>Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="space-y-2">
          <h4 className="font-medium text-sm">Popover Title</h4>
          <p className="text-sm text-text-secondary">
            This is a simple popover with some content inside.
          </p>
        </div>
      </PopoverContent>
    </Popover>
}`,...(b=(P=d.parameters)==null?void 0:P.docs)==null?void 0:b.source}}};var C,w,S;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <Popover>
        <PopoverTrigger asChild>
          <Button>Edit Profile</Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium text-sm">Edit Profile</h4>
              <p className="text-xs text-text-secondary">
                Update your profile information
              </p>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Name</label>
              <input type="text" className="w-full px-3 py-2 text-sm border border-border rounded-md" placeholder="Enter your name" value={value} onChange={e => setValue(e.target.value)} />
            </div>
            <div className="flex justify-end gap-2">
              <Button size="sm" variant="ghost">Cancel</Button>
              <Button size="sm" color="primary">Save</Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>;
  }
}`,...(S=(w=m.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var B,T,D;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" leftIcon={<User />}>
          John Doe
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56 p-0">
        <div className="p-3 border-b border-border">
          <p className="text-sm font-medium">John Doe</p>
          <p className="text-xs text-text-secondary">john@example.com</p>
        </div>
        <div className="p-1">
          <button className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-surface rounded-sm">
            <User className="w-4 h-4" />
            Profile
          </button>
          <button className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-surface rounded-sm">
            <Settings className="w-4 h-4" />
            Settings
          </button>
          <button className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-surface rounded-sm">
            <Mail className="w-4 h-4" />
            Messages
          </button>
          <div className="h-px bg-border my-1" />
          <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-error hover:bg-error/10 rounded-sm">
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </PopoverContent>
    </Popover>
}`,...(D=(T=p.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var k,O,z;x.parameters={...x.parameters,docs:{...(k=x.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const today = new Date();
    const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    return <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" leftIcon={<Calendar />}>
            {selectedDate ? selectedDate.toLocaleDateString() : 'Pick a date'}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-sm">
                {today.toLocaleDateString('en-US', {
                month: 'long',
                year: 'numeric'
              })}
              </h4>
            </div>
            <div className="grid grid-cols-7 gap-1">
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => <div key={day} className="text-xs font-medium text-center p-2 text-text-secondary">
                  {day}
                </div>)}
              {Array.from({
              length: daysInMonth
            }, (_, i) => i + 1).map(day => <button key={day} onClick={() => setSelectedDate(new Date(today.getFullYear(), today.getMonth(), day))} className="text-sm p-2 hover:bg-surface rounded-md text-center">
                  {day}
                </button>)}
            </div>
          </div>
        </PopoverContent>
      </Popover>;
  }
}`,...(z=(O=x.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var M,F,U;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div className="space-y-4">
        <div className="flex gap-2">
          <Button size="sm" onClick={() => setOpen(true)}>Open Popover</Button>
          <Button size="sm" variant="outline" onClick={() => setOpen(false)}>Close Popover</Button>
        </div>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button>Toggle Popover</Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="space-y-3">
              <h4 className="font-medium text-sm">Controlled Popover</h4>
              <p className="text-sm text-text-secondary">
                This popover can be controlled programmatically
              </p>
              <Button size="sm" fullWidth onClick={() => setOpen(false)}>
                Close
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>;
  }
}`,...(U=(F=h.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};var E,L,W;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button>Open Popover</Button>
        </PopoverTrigger>
        <PopoverContent className="relative">
          <button onClick={() => setOpen(false)} className="absolute top-2 right-2 p-1 hover:bg-surface rounded-sm">
            <X className="w-4 h-4" />
          </button>
          <div className="space-y-2 pr-6">
            <h4 className="font-medium text-sm">Popover with Close Button</h4>
            <p className="text-sm text-text-secondary">
              Click the X button to close this popover
            </p>
          </div>
        </PopoverContent>
      </Popover>;
  }
}`,...(W=(L=u.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var I,V,R;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Popover>
      <PopoverTrigger asChild>
        <Button>View Details</Button>
      </PopoverTrigger>
      <PopoverContent className="w-96">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-base mb-1">Feature Overview</h4>
            <p className="text-sm text-text-secondary">
              Learn more about this powerful feature
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <span className="text-primary font-semibold text-sm">1</span>
              </div>
              <div>
                <h5 className="font-medium text-sm">Easy to Use</h5>
                <p className="text-xs text-text-secondary">Simple and intuitive interface</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <span className="text-primary font-semibold text-sm">2</span>
              </div>
              <div>
                <h5 className="font-medium text-sm">Powerful Features</h5>
                <p className="text-xs text-text-secondary">Everything you need in one place</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <span className="text-primary font-semibold text-sm">3</span>
              </div>
              <div>
                <h5 className="font-medium text-sm">Fast Performance</h5>
                <p className="text-xs text-text-secondary">Optimized for speed</p>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button size="sm" color="primary" fullWidth>Get Started</Button>
            <Button size="sm" variant="outline" fullWidth>Learn More</Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
}`,...(R=(V=v.parameters)==null?void 0:V.docs)==null?void 0:R.source}}};var J,X,Y;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div className="relative p-6 rounded-lg border border-border overflow-hidden" style={{
    height: 200
  }}>
      <p className="text-sm text-text-secondary mb-4">
        The popover renders <strong>inline</strong> (no portal) so it's clipped by this
        container's <code>overflow: hidden</code>. Useful when you need the popover to participate
        in the parent's stacking context.
      </p>
      <Popover>
        <PopoverTrigger asChild>
          <Button size="sm">No Portal</Button>
        </PopoverTrigger>
        <PopoverContent portal={false}>
          <div className="space-y-2">
            <h4 className="font-medium text-sm">Inline Popover</h4>
            <p className="text-sm text-text-secondary">
              This content is rendered without a React Portal.
            </p>
          </div>
        </PopoverContent>
      </Popover>
    </div>
}`,...(Y=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var _,$,A;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const colors = ['default', 'primary', 'secondary', 'accent', 'success', 'error', 'warning', 'info'] as const;
    const variants = ['default', 'solid', 'soft'] as const;
    return <div className="space-y-8">
        {variants.map(variant => <div key={variant}>
            <h3 className="text-sm font-semibold mb-4 capitalize">{variant} Variant</h3>
            <div className="flex gap-3 flex-wrap">
              {colors.map(color => <Popover key={\`\${variant}-\${color}\`}>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="sm">
                      {color}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent color={color} variant={variant}>
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm capitalize">{color}</h4>
                      <p className="text-sm text-text-secondary">
                        {variant} variant popover
                      </p>
                    </div>
                  </PopoverContent>
                </Popover>)}
            </div>
          </div>)}
      </div>;
  }
}`,...(A=($=g.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};const we=["Default","WithForm","UserMenu","DatePicker","ControlledPopover","WithCloseButton","RichContent","NoPortal","ColorVariantMatrix"];export{g as ColorVariantMatrix,h as ControlledPopover,x as DatePicker,d as Default,f as NoPortal,v as RichContent,p as UserMenu,u as WithCloseButton,m as WithForm,we as __namedExportsOrder,Ce as default};
