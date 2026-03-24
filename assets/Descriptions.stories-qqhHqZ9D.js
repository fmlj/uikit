import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as l,a as $}from"./utils-_uLxnvdl.js";import{R as k}from"./index-ZH-6pyQh.js";import{c as A}from"./variants-C8qliDOr.js";import{D as _}from"./dollar-sign-B3HQpC2Y.js";import{U as ue}from"./user-BM8Midap.js";import{M as ye}from"./mail-1HDD9Lg3.js";import{P as xe}from"./phone-Drv7Klxt.js";import{M as fe}from"./map-pin-C1LnLdJd.js";import{C as ge}from"./calendar-DcUEuZqF.js";import{c as ke}from"./createLucideIcon-BXJdBs6C.js";import"./_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const je=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],ve=ke("briefcase",je),R=$("w-full border-separate border-spacing-0",{variants:{bordered:{true:"border",false:""},rounded:{true:"rounded-lg",false:""}},compoundVariants:[{bordered:!0,rounded:!0,class:"overflow-hidden"}],defaultVariants:{bordered:!0,rounded:!0}}),z=$("font-semibold border-b border-r",{variants:{size:{xs:"py-1 px-2 text-[10px]",sm:"py-2 px-3 text-xs",md:"py-3 px-4 text-sm",lg:"py-4 px-5 text-base"}},defaultVariants:{size:"md"}}),E=$("text-text-primary border-b border-r",{variants:{size:{xs:"py-1 px-2 text-[10px]",sm:"py-2 px-3 text-xs",md:"py-3 px-4 text-sm",lg:"py-4 px-5 text-base"}},defaultVariants:{size:"md"}}),Se={default:"bg-slot-10 text-text-primary",solid:"bg-slot text-slot-fg",soft:"bg-slot-10 text-slot"},we={default:"bg-background",solid:"bg-background",soft:"bg-slot-10"},De={default:"border-slot-30",solid:"border-slot-50",soft:"border-slot-20"},m=k.memo(({items:he,column:f=3,color:j="default",size:b="md",variant:O="default",layout:me="horizontal",bordered:u=!0,rounded:v=!0,className:S,classNames:n,title:y,extra:x,ref:w,...D})=>{const C=Se[O],P=we[O],i=De[O],c=[];let g=[],q=0;if(he.forEach(s=>{const r=s.span||1;q+r>f?(c.push(g),g=[s],q=r):(g.push(s),q+=r)}),g.length>0&&c.push(g),me==="vertical"){const s=e.jsx("table",{className:l(R({bordered:u,rounded:v}),u&&i),role:"presentation",children:e.jsx("tbody",{"data-slot":"body",className:n==null?void 0:n.body,children:c.map((r,d)=>{const p=d===c.length-1;let h=0;const a=r.map(t=>{const o=t.span||1;return h+=o,h>=f});return e.jsxs(k.Fragment,{children:[e.jsx("tr",{className:l("descriptions_item",n==null?void 0:n.item),"data-slot":"item",children:r.map((t,o)=>e.jsx("th",{colSpan:t.span||1,className:l("descriptions_label",z({size:b}),C,i,a[o]&&"border-r-0",n==null?void 0:n.label),"data-slot":"label",children:t.label},`${t.key}-label`))}),e.jsx("tr",{className:l("descriptions_item",n==null?void 0:n.item),"data-slot":"item",children:r.map((t,o)=>e.jsx("td",{colSpan:t.span||1,className:l("descriptions_content",E({size:b}),P,i,a[o]&&"border-r-0",p&&"border-b-0",n==null?void 0:n.content),"data-slot":"content",children:t.children},`${t.key}-value`))})]},d)})})});return y||x?e.jsxs("div",{ref:w,className:l("descriptions_root",A[j],n==null?void 0:n.root,S),"data-slot":"root",...D,children:[e.jsxs("div",{className:l("descriptions_title","flex items-center justify-between mb-3",n==null?void 0:n.title),"data-slot":"title",children:[y&&e.jsx("div",{className:"text-base font-semibold text-text-primary",children:y}),x&&e.jsx("div",{className:l("descriptions_extra",n==null?void 0:n.extra),"data-slot":"extra",children:x})]}),s]}):e.jsx("table",{ref:w,className:l("descriptions_root",A[j],R({bordered:u,rounded:v}),u&&i,n==null?void 0:n.root,S),"data-slot":"root",role:"presentation",...D,children:e.jsx("tbody",{"data-slot":"body",className:n==null?void 0:n.body,children:c.map((r,d)=>{const p=d===c.length-1;let h=0;const a=r.map(t=>{const o=t.span||1;return h+=o,h>=f});return e.jsxs(k.Fragment,{children:[e.jsx("tr",{className:l("descriptions_item",n==null?void 0:n.item),"data-slot":"item",children:r.map((t,o)=>e.jsx("th",{colSpan:t.span||1,className:l("descriptions_label",z({size:b}),C,i,a[o]&&"border-r-0",n==null?void 0:n.label),"data-slot":"label",children:t.label},`${t.key}-label`))}),e.jsx("tr",{className:l("descriptions_item",n==null?void 0:n.item),"data-slot":"item",children:r.map((t,o)=>e.jsx("td",{colSpan:t.span||1,className:l("descriptions_content",E({size:b}),P,i,a[o]&&"border-r-0",p&&"border-b-0",n==null?void 0:n.content),"data-slot":"content",children:t.children},`${t.key}-value`))})]},d)})})})}const be=e.jsx("table",{className:l(R({bordered:u,rounded:v}),u&&i),role:"presentation",children:e.jsx("tbody",{"data-slot":"body",className:n==null?void 0:n.body,children:c.map((s,r)=>{const d=r===c.length-1;let p=0;const h=s.map(a=>{const t=a.span||1;return p+=t*2,p>=f*2});return e.jsx("tr",{className:l("descriptions_item",n==null?void 0:n.item),"data-slot":"item",children:s.map((a,t)=>{const U=(a.span||1)*2-1;return e.jsxs(k.Fragment,{children:[e.jsx("th",{className:l("descriptions_label",z({size:b}),C,i,d&&"border-b-0",n==null?void 0:n.label),"data-slot":"label",children:a.label}),e.jsx("td",{colSpan:U,className:l("descriptions_content",E({size:b}),P,i,h[t]&&"border-r-0",d&&"border-b-0",n==null?void 0:n.content),"data-slot":"content",children:a.children})]},a.key)})},r)})})});return y||x?e.jsxs("div",{ref:w,className:l("descriptions_root",A[j],n==null?void 0:n.root,S),"data-slot":"root",...D,children:[e.jsxs("div",{className:l("descriptions_title","flex items-center justify-between mb-3",n==null?void 0:n.title),"data-slot":"title",children:[y&&e.jsx("div",{className:"text-base font-semibold text-text-primary",children:y}),x&&e.jsx("div",{className:l("descriptions_extra",n==null?void 0:n.extra),"data-slot":"extra",children:x})]}),be]}):e.jsx("table",{ref:w,className:l("descriptions_root",A[j],R({bordered:u,rounded:v}),u&&i,n==null?void 0:n.root,S),"data-slot":"root",role:"presentation",...D,children:e.jsx("tbody",{"data-slot":"body",className:n==null?void 0:n.body,children:c.map((s,r)=>{const d=r===c.length-1;let p=0;const h=s.map(a=>{const t=a.span||1;return p+=t*2,p>=f*2});return e.jsx("tr",{className:l("descriptions_item",n==null?void 0:n.item),"data-slot":"item",children:s.map((a,t)=>{const U=(a.span||1)*2-1;return e.jsxs(k.Fragment,{children:[e.jsx("th",{className:l("descriptions_label",z({size:b}),C,i,d&&"border-b-0",n==null?void 0:n.label),"data-slot":"label",children:a.label}),e.jsx("td",{colSpan:U,className:l("descriptions_content",E({size:b}),P,i,h[t]&&"border-r-0",d&&"border-b-0",n==null?void 0:n.content),"data-slot":"content",children:a.children})]},a.key)})},r)})})})});m.displayName="Descriptions";m.__docgenInfo={description:"",methods:[],displayName:"Descriptions",props:{column:{defaultValue:{value:"3",computed:!1},required:!1},color:{defaultValue:{value:"'default'",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1},variant:{defaultValue:{value:"'default'",computed:!1},required:!1},layout:{defaultValue:{value:"'horizontal'",computed:!1},required:!1},bordered:{defaultValue:{value:"true",computed:!1},required:!1},rounded:{defaultValue:{value:"true",computed:!1},required:!1}}};const Ie={title:"Data Display/Descriptions",component:m,tags:["autodocs"],argTypes:{column:{control:{type:"number",min:1,max:6},description:"Number of columns for layout"},color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"],description:"Theme color for labels"},size:{control:"select",options:["xs","sm","md","lg"],description:"Size of the descriptions"},layout:{control:"select",options:["horizontal","vertical"],description:"Layout orientation"},bordered:{control:"boolean",description:"Show borders"},rounded:{control:"boolean",description:"Rounded corners"},variant:{control:"select",options:["default","solid","soft"],description:"Visual style variant"}}},B=[{key:"name",label:"Name",children:"John Doe"},{key:"email",label:"Email",children:"john.doe@example.com"},{key:"phone",label:"Phone",children:"+1 (555) 123-4567"},{key:"location",label:"Location",children:"San Francisco, CA"},{key:"joined",label:"Joined Date",children:"January 15, 2024"},{key:"status",label:"Status",children:e.jsx("span",{className:"text-success font-semibold",children:"Active"})}],V={args:{items:B,column:3,color:"default",size:"md",variant:"default",layout:"horizontal",bordered:!0,rounded:!0}},J={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-3",children:"Horizontal Layout"}),e.jsx(m,{items:B,column:3,layout:"horizontal",color:"primary"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-3",children:"Vertical Layout"}),e.jsx(m,{items:B,column:3,layout:"vertical",color:"primary"})]})]})},M={render:()=>e.jsx("div",{className:"space-y-8",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-3",children:"Mixed Span (3 columns)"}),e.jsx(m,{items:[{key:"name",label:"Name",children:"John Doe"},{key:"email",label:"Email",children:"john.doe@example.com"},{key:"phone",label:"Phone",children:"+1 (555) 123-4567"},{key:"address",label:"Address",children:"123 Main Street, San Francisco, CA 94102",span:2},{key:"status",label:"Status",children:e.jsx("span",{className:"text-success font-semibold",children:"Active"})},{key:"bio",label:"Bio",children:"Software engineer with 10+ years of experience in building scalable web applications.",span:3}],column:3,color:"primary"})]})})},F={args:{items:[{key:"name",label:e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx(ue,{className:"w-4 h-4"}),"Name"]}),children:"John Doe"},{key:"email",label:e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx(ye,{className:"w-4 h-4"}),"Email"]}),children:"john.doe@example.com"},{key:"phone",label:e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx(xe,{className:"w-4 h-4"}),"Phone"]}),children:"+1 (555) 123-4567"},{key:"location",label:e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx(fe,{className:"w-4 h-4"}),"Location"]}),children:"San Francisco, CA"},{key:"joined",label:e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx(ge,{className:"w-4 h-4"}),"Joined"]}),children:"January 15, 2024"},{key:"role",label:e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx(ve,{className:"w-4 h-4"}),"Role"]}),children:"Senior Developer"}],column:3,color:"primary"}},T={render:()=>e.jsx("div",{className:"max-w-4xl space-y-6",children:e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"User Profile"}),e.jsx(m,{items:[{key:"name",label:"Full Name",children:"John Michael Doe"},{key:"username",label:"Username",children:"@johndoe"},{key:"email",label:"Email Address",children:"john.doe@example.com"},{key:"phone",label:"Phone Number",children:"+1 (555) 123-4567"},{key:"location",label:"Location",children:"San Francisco, California, USA"},{key:"timezone",label:"Timezone",children:"Pacific Time (PT)"},{key:"role",label:"Role",children:e.jsx("span",{className:"inline-flex px-2 py-1 bg-primary/10 text-primary rounded text-sm",children:"Senior Developer"})},{key:"department",label:"Department",children:"Engineering"},{key:"joined",label:"Joined Date",children:"January 15, 2024"},{key:"bio",label:"Bio",children:"Passionate software engineer with 10+ years of experience in building scalable web applications and leading development teams.",span:3}],column:3,color:"primary",layout:"horizontal"})]})})},I={render:()=>e.jsx("div",{className:"max-w-4xl space-y-6",children:e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Order Details"}),e.jsx(m,{items:[{key:"orderId",label:"Order ID",children:e.jsx("span",{className:"font-mono",children:"#ORD-2024-0001"})},{key:"status",label:"Status",children:e.jsx("span",{className:"inline-flex px-2 py-1 bg-success/10 text-success rounded text-sm font-medium",children:"Delivered"})},{key:"date",label:"Order Date",children:"January 15, 2024"},{key:"customer",label:"Customer",children:"John Doe"},{key:"email",label:"Email",children:"john.doe@example.com"},{key:"phone",label:"Phone",children:"+1 (555) 123-4567"},{key:"shipping",label:"Shipping Address",children:"123 Main Street, Apt 4B, San Francisco, CA 94102",span:2},{key:"payment",label:"Payment Method",children:"Credit Card (**** 4242)"},{key:"subtotal",label:"Subtotal",children:e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx(_,{className:"w-4 h-4"}),"249.99"]})},{key:"shipping-cost",label:"Shipping",children:e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx(_,{className:"w-4 h-4"}),"10.00"]})},{key:"tax",label:"Tax",children:e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx(_,{className:"w-4 h-4"}),"25.00"]})},{key:"total",label:"Total",children:e.jsxs("span",{className:"flex items-center gap-1 font-bold text-lg",children:[e.jsx(_,{className:"w-5 h-5"}),"284.99"]})},{key:"notes",label:"Order Notes",children:"Please leave the package at the front door. Ring the doorbell upon delivery.",span:3}],column:3,color:"accent",layout:"horizontal"})]})})},L={render:()=>e.jsxs("div",{className:"max-w-4xl",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Company Information"}),e.jsx(m,{items:[{key:"name",label:"Company Name",children:"TechCorp Solutions Inc."},{key:"industry",label:"Industry",children:"Software Development"},{key:"founded",label:"Founded",children:"2010"},{key:"employees",label:"Employees",children:"500-1000"},{key:"revenue",label:"Annual Revenue",children:"$50M - $100M"},{key:"headquarters",label:"Headquarters",children:"San Francisco, CA"},{key:"website",label:"Website",children:e.jsx("a",{href:"https://example.com",className:"text-primary hover:underline",children:"www.techcorp.com"})},{key:"email",label:"Contact Email",children:"contact@techcorp.com"},{key:"phone",label:"Phone",children:"+1 (555) 987-6543"},{key:"description",label:"Description",children:"TechCorp Solutions is a leading provider of enterprise software solutions, specializing in cloud-based applications, AI-powered analytics, and digital transformation services.",span:3}],column:3,color:"secondary",layout:"vertical"})]})};var W,H,G;V.parameters={...V.parameters,docs:{...(W=V.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    items: basicItems,
    column: 3,
    color: 'default',
    size: 'md',
    variant: 'default',
    layout: 'horizontal',
    bordered: true,
    rounded: true
  }
}`,...(G=(H=V.parameters)==null?void 0:H.docs)==null?void 0:G.source}}};var K,Q,X;J.parameters={...J.parameters,docs:{...(K=J.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <div>
        <h3 className="text-sm font-semibold mb-3">Horizontal Layout</h3>
        <Descriptions items={basicItems} column={3} layout="horizontal" color="primary" />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-3">Vertical Layout</h3>
        <Descriptions items={basicItems} column={3} layout="vertical" color="primary" />
      </div>
    </div>
}`,...(X=(Q=J.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,N;M.parameters={...M.parameters,docs:{...(Y=M.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <div>
        <h3 className="text-sm font-semibold mb-3">Mixed Span (3 columns)</h3>
        <Descriptions items={[{
        key: 'name',
        label: 'Name',
        children: 'John Doe'
      }, {
        key: 'email',
        label: 'Email',
        children: 'john.doe@example.com'
      }, {
        key: 'phone',
        label: 'Phone',
        children: '+1 (555) 123-4567'
      }, {
        key: 'address',
        label: 'Address',
        children: '123 Main Street, San Francisco, CA 94102',
        span: 2 // Takes 2 columns
      }, {
        key: 'status',
        label: 'Status',
        children: <span className="text-success font-semibold">Active</span>
      }, {
        key: 'bio',
        label: 'Bio',
        children: 'Software engineer with 10+ years of experience in building scalable web applications.',
        span: 3 // Takes full row
      }]} column={3} color="primary" />
      </div>
    </div>
}`,...(N=(Z=M.parameters)==null?void 0:Z.docs)==null?void 0:N.source}}};var ee,ne,te;F.parameters={...F.parameters,docs:{...(ee=F.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    items: [{
      key: 'name',
      label: <span className="flex items-center gap-2">
            <User className="w-4 h-4" />
            Name
          </span>,
      children: 'John Doe'
    }, {
      key: 'email',
      label: <span className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            Email
          </span>,
      children: 'john.doe@example.com'
    }, {
      key: 'phone',
      label: <span className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            Phone
          </span>,
      children: '+1 (555) 123-4567'
    }, {
      key: 'location',
      label: <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Location
          </span>,
      children: 'San Francisco, CA'
    }, {
      key: 'joined',
      label: <span className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Joined
          </span>,
      children: 'January 15, 2024'
    }, {
      key: 'role',
      label: <span className="flex items-center gap-2">
            <Briefcase className="w-4 h-4" />
            Role
          </span>,
      children: 'Senior Developer'
    }],
    column: 3,
    color: 'primary'
  }
}`,...(te=(ne=F.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var le,ae,re;T.parameters={...T.parameters,docs:{...(le=T.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <div className="max-w-4xl space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">User Profile</h2>
        <Descriptions items={[{
        key: 'name',
        label: 'Full Name',
        children: 'John Michael Doe'
      }, {
        key: 'username',
        label: 'Username',
        children: '@johndoe'
      }, {
        key: 'email',
        label: 'Email Address',
        children: 'john.doe@example.com'
      }, {
        key: 'phone',
        label: 'Phone Number',
        children: '+1 (555) 123-4567'
      }, {
        key: 'location',
        label: 'Location',
        children: 'San Francisco, California, USA'
      }, {
        key: 'timezone',
        label: 'Timezone',
        children: 'Pacific Time (PT)'
      }, {
        key: 'role',
        label: 'Role',
        children: <span className="inline-flex px-2 py-1 bg-primary/10 text-primary rounded text-sm">Senior Developer</span>
      }, {
        key: 'department',
        label: 'Department',
        children: 'Engineering'
      }, {
        key: 'joined',
        label: 'Joined Date',
        children: 'January 15, 2024'
      }, {
        key: 'bio',
        label: 'Bio',
        children: 'Passionate software engineer with 10+ years of experience in building scalable web applications and leading development teams.',
        span: 3
      }]} column={3} color="primary" layout="horizontal" />
      </div>
    </div>
}`,...(re=(ae=T.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var oe,ie,se;I.parameters={...I.parameters,docs:{...(oe=I.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <div className="max-w-4xl space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Order Details</h2>
        <Descriptions items={[{
        key: 'orderId',
        label: 'Order ID',
        children: <span className="font-mono">#ORD-2024-0001</span>
      }, {
        key: 'status',
        label: 'Status',
        children: <span className="inline-flex px-2 py-1 bg-success/10 text-success rounded text-sm font-medium">Delivered</span>
      }, {
        key: 'date',
        label: 'Order Date',
        children: 'January 15, 2024'
      }, {
        key: 'customer',
        label: 'Customer',
        children: 'John Doe'
      }, {
        key: 'email',
        label: 'Email',
        children: 'john.doe@example.com'
      }, {
        key: 'phone',
        label: 'Phone',
        children: '+1 (555) 123-4567'
      }, {
        key: 'shipping',
        label: 'Shipping Address',
        children: '123 Main Street, Apt 4B, San Francisco, CA 94102',
        span: 2
      }, {
        key: 'payment',
        label: 'Payment Method',
        children: 'Credit Card (**** 4242)'
      }, {
        key: 'subtotal',
        label: 'Subtotal',
        children: <span className="flex items-center gap-1">
                  <DollarSign className="w-4 h-4" />
                  249.99
                </span>
      }, {
        key: 'shipping-cost',
        label: 'Shipping',
        children: <span className="flex items-center gap-1">
                  <DollarSign className="w-4 h-4" />
                  10.00
                </span>
      }, {
        key: 'tax',
        label: 'Tax',
        children: <span className="flex items-center gap-1">
                  <DollarSign className="w-4 h-4" />
                  25.00
                </span>
      }, {
        key: 'total',
        label: 'Total',
        children: <span className="flex items-center gap-1 font-bold text-lg">
                  <DollarSign className="w-5 h-5" />
                  284.99
                </span>
      }, {
        key: 'notes',
        label: 'Order Notes',
        children: 'Please leave the package at the front door. Ring the doorbell upon delivery.',
        span: 3
      }]} column={3} color="accent" layout="horizontal" />
      </div>
    </div>
}`,...(se=(ie=I.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var de,ce,pe;L.parameters={...L.parameters,docs:{...(de=L.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => <div className="max-w-4xl">
      <h2 className="text-2xl font-bold mb-4">Company Information</h2>
      <Descriptions items={[{
      key: 'name',
      label: 'Company Name',
      children: 'TechCorp Solutions Inc.'
    }, {
      key: 'industry',
      label: 'Industry',
      children: 'Software Development'
    }, {
      key: 'founded',
      label: 'Founded',
      children: '2010'
    }, {
      key: 'employees',
      label: 'Employees',
      children: '500-1000'
    }, {
      key: 'revenue',
      label: 'Annual Revenue',
      children: '$50M - $100M'
    }, {
      key: 'headquarters',
      label: 'Headquarters',
      children: 'San Francisco, CA'
    }, {
      key: 'website',
      label: 'Website',
      children: <a href="https://example.com" className="text-primary hover:underline">
                www.techcorp.com
              </a>
    }, {
      key: 'email',
      label: 'Contact Email',
      children: 'contact@techcorp.com'
    }, {
      key: 'phone',
      label: 'Phone',
      children: '+1 (555) 987-6543'
    }, {
      key: 'description',
      label: 'Description',
      children: 'TechCorp Solutions is a leading provider of enterprise software solutions, specializing in cloud-based applications, AI-powered analytics, and digital transformation services.',
      span: 3
    }]} column={3} color="secondary" layout="vertical" />
    </div>
}`,...(pe=(ce=L.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};const Le=["Default","LayoutComparison","WithSpan","WithIcons","UserProfile","OrderDetails","CompanyInfo"];export{L as CompanyInfo,V as Default,J as LayoutComparison,I as OrderDetails,T as UserProfile,F as WithIcons,M as WithSpan,Le as __namedExportsOrder,Ie as default};
