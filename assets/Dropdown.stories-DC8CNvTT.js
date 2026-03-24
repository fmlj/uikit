import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as t}from"./index-BVphZ78y.js";import{B as a}from"./index-23ax1BAm.js";import{B as te}from"./index-DyC3bL0y.js";import{C as o}from"./chevron-down-D1qmGosc.js";import{U as b}from"./user-BM8Midap.js";import{S as X}from"./settings-D1wlBKo1.js";import{M as Y}from"./mail-1HDD9Lg3.js";import{L as Z}from"./log-out-FX55YeXE.js";import{E as ee}from"./ellipsis-vertical-Bsydo1qj.js";import{S as w}from"./square-pen-BpIz_lVT.js";import{C as g}from"./copy-IW0OH-Me.js";import{T as N}from"./trash-2-vrMpzzku.js";import{D as se}from"./download-DHgBCDXU.js";import{S as ae}from"./share-2-JEmWnStU.js";import{B as oe}from"./bell-BD3KA5A_.js";import"./utils-_uLxnvdl.js";import"./index-ZH-6pyQh.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useRipple-BuuTbn0W.js";import"./useMenuNavigation-Cake-z-f.js";import"./index-M94l2otH.js";import"./index-lJNWladF.js";import"./index-C6BiGwLV.js";import"./index-Bo-loign.js";import"./index-BP-xEy0R.js";import"./index-DVyBTwwr.js";import"./Combination-C3reJy6-.js";import"./index-BH7Jj7fg.js";import"./variants-C8qliDOr.js";import"./index-ZW2Bszwo.js";import"./index-BoArNvwV.js";import"./createLucideIcon-BXJdBs6C.js";const Ve={title:"Navigation/Dropdown",component:t,tags:["autodocs"],argTypes:{items:{description:"Array of dropdown items"},color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"],description:"Theme color"},size:{control:"select",options:["xs","sm","md","lg"],description:"Dropdown item size"},position:{control:"select",options:["left","right"],description:"Alignment of the dropdown menu"},disabled:{control:"boolean",description:"Disable dropdown functionality"},fullWidth:{control:"boolean",description:"Full width dropdown"},hover:{control:"boolean",description:"Open on hover instead of click"},maxHeight:{control:"number",description:"Maximum height of dropdown content"}}},u=[{label:"Profile",value:"profile",icon:e.jsx(b,{className:"w-4 h-4"})},{label:"Settings",value:"settings",icon:e.jsx(X,{className:"w-4 h-4"})},{label:"Messages",value:"messages",icon:e.jsx(Y,{className:"w-4 h-4"})},{label:"Logout",value:"logout",icon:e.jsx(Z,{className:"w-4 h-4"})}],r={args:{items:u,children:e.jsx(a,{children:"Open Dropdown"})}},n={render:()=>e.jsx(t,{items:[{label:"Download",value:"download",icon:e.jsx(se,{className:"w-4 h-4"})},{label:"Edit",value:"edit",icon:e.jsx(w,{className:"w-4 h-4"})},{label:"Copy",value:"copy",icon:e.jsx(g,{className:"w-4 h-4"})},{label:"Share",value:"share",icon:e.jsx(ae,{className:"w-4 h-4"})},{label:"Delete",value:"delete",icon:e.jsx(N,{className:"w-4 h-4"})}],children:e.jsx(a,{rightIcon:e.jsx(o,{className:"w-4 h-4"}),children:"Actions"})})},l={render:()=>e.jsx(t,{items:[{label:"View",value:"view",icon:e.jsx(b,{className:"w-4 h-4"})},{label:"Edit",value:"edit",icon:e.jsx(w,{className:"w-4 h-4"})},{label:"Archive",value:"archive",icon:e.jsx(se,{className:"w-4 h-4"}),disabled:!0},{label:"Delete",value:"delete",icon:e.jsx(N,{className:"w-4 h-4"}),disabled:!0}],children:e.jsx(a,{rightIcon:e.jsx(o,{className:"w-4 h-4"}),children:"Options"})})},c={render:()=>e.jsx(t,{items:[{label:"Edit",value:"edit",icon:e.jsx(w,{className:"w-4 h-4"})},{label:"Copy",value:"copy",icon:e.jsx(g,{className:"w-4 h-4"})},{label:"Delete",value:"delete",icon:e.jsx(N,{className:"w-4 h-4"})}],children:e.jsx(a,{variant:"ghost",size:"sm",children:e.jsx(ee,{className:"w-4 h-4"})})})},i={render:()=>e.jsx(t,{items:u,hover:!0,children:e.jsx(a,{variant:"ghost",children:"Hover over me"})})},m={render:()=>{const s=Array.from({length:20},(re,v)=>({label:`Item ${v+1}`,value:`item-${v+1}`}));return e.jsx(t,{items:s,maxHeight:200,children:e.jsx(a,{rightIcon:e.jsx(o,{className:"w-4 h-4"}),children:"Max Height 200px"})})}},d={render:()=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx(t,{items:u,children:e.jsx(a,{rightIcon:e.jsx(o,{className:"w-4 h-4"}),children:"Enabled"})}),e.jsx(t,{items:u,disabled:!0,children:e.jsx(a,{disabled:!0,rightIcon:e.jsx(o,{className:"w-4 h-4"}),children:"Disabled"})})]})},p={render:()=>e.jsx(t,{render:({close:s})=>e.jsxs("div",{className:"p-4 space-y-3",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-sm mb-1",children:"User Profile"}),e.jsx("p",{className:"text-xs text-text-secondary",children:"john@example.com"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("button",{className:"w-full text-left px-3 py-2 text-sm hover:bg-surface rounded-sm",onClick:s,children:"View Profile"}),e.jsx("button",{className:"w-full text-left px-3 py-2 text-sm hover:bg-surface rounded-sm",onClick:s,children:"Account Settings"})]}),e.jsx("div",{className:"pt-2 border-t border-border",children:e.jsx("button",{className:"w-full text-left px-3 py-2 text-sm text-error hover:bg-error/10 rounded-sm",onClick:s,children:"Sign Out"})})]}),children:e.jsx(a,{variant:"ghost",leftIcon:e.jsx(b,{className:"w-4 h-4"}),children:"John Doe"})})},h={render:()=>e.jsx(t,{render:({close:s})=>e.jsxs("div",{className:"py-1",children:[e.jsxs("button",{className:"w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-surface",onClick:s,children:[e.jsx(b,{className:"w-4 h-4"}),"Profile"]}),e.jsxs("button",{className:"w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-surface",onClick:s,children:[e.jsx(X,{className:"w-4 h-4"}),"Settings"]}),e.jsx("div",{className:"h-px bg-border my-1"}),e.jsxs("button",{className:"w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-surface",onClick:s,children:[e.jsx(oe,{className:"w-4 h-4"}),"Notifications"]}),e.jsxs("button",{className:"w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-surface",onClick:s,children:[e.jsx(Y,{className:"w-4 h-4"}),"Messages"]}),e.jsx("div",{className:"h-px bg-border my-1"}),e.jsxs("button",{className:"w-full flex items-center gap-2 px-4 py-2 text-sm text-error hover:bg-error/10",onClick:s,children:[e.jsx(Z,{className:"w-4 h-4"}),"Logout"]})]}),children:e.jsx(a,{variant:"ghost",rightIcon:e.jsx(o,{className:"w-4 h-4"}),children:"Menu"})})},x={render:()=>e.jsx("div",{className:"border border-border rounded-lg overflow-hidden",children:e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{className:"bg-surface",children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-left px-4 py-3 text-sm font-medium",children:"Name"}),e.jsx("th",{className:"text-left px-4 py-3 text-sm font-medium",children:"Status"}),e.jsx("th",{className:"text-left px-4 py-3 text-sm font-medium",children:"Date"}),e.jsx("th",{className:"text-right px-4 py-3 text-sm font-medium",children:"Actions"})]})}),e.jsx("tbody",{children:[1,2,3].map(s=>e.jsxs("tr",{className:"border-t border-border",children:[e.jsxs("td",{className:"px-4 py-3 text-sm",children:["Project ",s]}),e.jsx("td",{className:"px-4 py-3 text-sm",children:e.jsx(te,{color:"success",size:"sm",children:"Active"})}),e.jsxs("td",{className:"px-4 py-3 text-sm text-text-secondary",children:["2024-01-",10+s]}),e.jsx("td",{className:"px-4 py-3 text-right",children:e.jsx(t,{items:[{label:"Edit",value:"edit",icon:e.jsx(w,{className:"w-4 h-4"})},{label:"Copy",value:"copy",icon:e.jsx(g,{className:"w-4 h-4"})},{label:"Delete",value:"delete",icon:e.jsx(N,{className:"w-4 h-4"})}],position:"right",size:"sm",children:e.jsx(a,{variant:"ghost",size:"sm",children:e.jsx(ee,{className:"w-4 h-4"})})})})]},s))})]})})};var f,j,y;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    items: basicItems,
    children: <Button>Open Dropdown</Button>
  }
}`,...(y=(j=r.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var D,C,B;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Dropdown items={[{
    label: 'Download',
    value: 'download',
    icon: <Download className="w-4 h-4" />
  }, {
    label: 'Edit',
    value: 'edit',
    icon: <Edit className="w-4 h-4" />
  }, {
    label: 'Copy',
    value: 'copy',
    icon: <Copy className="w-4 h-4" />
  }, {
    label: 'Share',
    value: 'share',
    icon: <Share2 className="w-4 h-4" />
  }, {
    label: 'Delete',
    value: 'delete',
    icon: <Trash2 className="w-4 h-4" />
  }]}>
      <Button rightIcon={<ChevronDown className="w-4 h-4" />}>Actions</Button>
    </Dropdown>
}`,...(B=(C=n.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var S,I,k;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Dropdown items={[{
    label: 'View',
    value: 'view',
    icon: <User className="w-4 h-4" />
  }, {
    label: 'Edit',
    value: 'edit',
    icon: <Edit className="w-4 h-4" />
  }, {
    label: 'Archive',
    value: 'archive',
    icon: <Download className="w-4 h-4" />,
    disabled: true
  }, {
    label: 'Delete',
    value: 'delete',
    icon: <Trash2 className="w-4 h-4" />,
    disabled: true
  }]}>
      <Button rightIcon={<ChevronDown className="w-4 h-4" />}>Options</Button>
    </Dropdown>
}`,...(k=(I=l.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var E,A,M;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Dropdown items={[{
    label: 'Edit',
    value: 'edit',
    icon: <Edit className="w-4 h-4" />
  }, {
    label: 'Copy',
    value: 'copy',
    icon: <Copy className="w-4 h-4" />
  }, {
    label: 'Delete',
    value: 'delete',
    icon: <Trash2 className="w-4 h-4" />
  }]}>
      <Button variant="ghost" size="sm">
        <MoreVertical className="w-4 h-4" />
      </Button>
    </Dropdown>
}`,...(M=(A=c.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var T,H,z;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Dropdown items={basicItems} hover>
      <Button variant="ghost">Hover over me</Button>
    </Dropdown>
}`,...(z=(H=i.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};var O,P,U;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const manyItems = Array.from({
      length: 20
    }, (_, i) => ({
      label: \`Item \${i + 1}\`,
      value: \`item-\${i + 1}\`
    }));
    return <Dropdown items={manyItems} maxHeight={200}>
        <Button rightIcon={<ChevronDown className="w-4 h-4" />}>
          Max Height 200px
        </Button>
      </Dropdown>;
  }
}`,...(U=(P=m.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var V,W,L;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
      <Dropdown items={basicItems}>
        <Button rightIcon={<ChevronDown className="w-4 h-4" />}>Enabled</Button>
      </Dropdown>
      <Dropdown items={basicItems} disabled>
        <Button disabled rightIcon={<ChevronDown className="w-4 h-4" />}>
          Disabled
        </Button>
      </Dropdown>
    </div>
}`,...(L=(W=d.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var R,_,$;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <Dropdown render={({
    close
  }) => <div className="p-4 space-y-3">
          <div>
            <h4 className="font-medium text-sm mb-1">User Profile</h4>
            <p className="text-xs text-text-secondary">john@example.com</p>
          </div>
          <div className="space-y-1">
            <button className="w-full text-left px-3 py-2 text-sm hover:bg-surface rounded-sm" onClick={close}>
              View Profile
            </button>
            <button className="w-full text-left px-3 py-2 text-sm hover:bg-surface rounded-sm" onClick={close}>
              Account Settings
            </button>
          </div>
          <div className="pt-2 border-t border-border">
            <button className="w-full text-left px-3 py-2 text-sm text-error hover:bg-error/10 rounded-sm" onClick={close}>
              Sign Out
            </button>
          </div>
        </div>}>
      <Button variant="ghost" leftIcon={<User className="w-4 h-4" />}>
        John Doe
      </Button>
    </Dropdown>
}`,...($=(_=p.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var J,q,F;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <Dropdown render={({
    close
  }) => <div className="py-1">
          <button className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-surface" onClick={close}>
            <User className="w-4 h-4" />
            Profile
          </button>
          <button className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-surface" onClick={close}>
            <Settings className="w-4 h-4" />
            Settings
          </button>
          <div className="h-px bg-border my-1" />
          <button className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-surface" onClick={close}>
            <Bell className="w-4 h-4" />
            Notifications
          </button>
          <button className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-surface" onClick={close}>
            <Mail className="w-4 h-4" />
            Messages
          </button>
          <div className="h-px bg-border my-1" />
          <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-error hover:bg-error/10" onClick={close}>
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>}>
      <Button variant="ghost" rightIcon={<ChevronDown className="w-4 h-4" />}>
        Menu
      </Button>
    </Dropdown>
}`,...(F=(q=h.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var G,K,Q;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div className="border border-border rounded-lg overflow-hidden">
      <table className="w-full">
        <thead className="bg-surface">
          <tr>
            <th className="text-left px-4 py-3 text-sm font-medium">Name</th>
            <th className="text-left px-4 py-3 text-sm font-medium">Status</th>
            <th className="text-left px-4 py-3 text-sm font-medium">Date</th>
            <th className="text-right px-4 py-3 text-sm font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3].map(i => <tr key={i} className="border-t border-border">
              <td className="px-4 py-3 text-sm">Project {i}</td>
              <td className="px-4 py-3 text-sm">
                <Badge color="success" size="sm">Active</Badge>
              </td>
              <td className="px-4 py-3 text-sm text-text-secondary">2024-01-{10 + i}</td>
              <td className="px-4 py-3 text-right">
                <Dropdown items={[{
              label: 'Edit',
              value: 'edit',
              icon: <Edit className="w-4 h-4" />
            }, {
              label: 'Copy',
              value: 'copy',
              icon: <Copy className="w-4 h-4" />
            }, {
              label: 'Delete',
              value: 'delete',
              icon: <Trash2 className="w-4 h-4" />
            }]} position="right" size="sm">
                  <Button variant="ghost" size="sm">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </Dropdown>
              </td>
            </tr>)}
        </tbody>
      </table>
    </div>
}`,...(Q=(K=x.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const We=["Default","WithIcons","WithDisabledItems","IconButton","HoverTrigger","CustomMaxHeight","Disabled","CustomRender","WithSeparators","TableRowActions"];export{m as CustomMaxHeight,p as CustomRender,r as Default,d as Disabled,i as HoverTrigger,c as IconButton,x as TableRowActions,l as WithDisabledItems,n as WithIcons,h as WithSeparators,We as __namedExportsOrder,Ve as default};
