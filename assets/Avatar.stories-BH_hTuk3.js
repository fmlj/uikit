import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as o,a as pe}from"./utils-_uLxnvdl.js";import{R as h,r as U}from"./index-ZH-6pyQh.js";import{c as ue}from"./variants-C8qliDOr.js";import{U as le}from"./user-BM8Midap.js";import{B as ge}from"./bell-BD3KA5A_.js";import{c as ce}from"./createLucideIcon-BXJdBs6C.js";import{S as xe}from"./star-CXKHNDnr.js";import"./_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],ve=ce("building-2",fe);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],be=ce("camera",he),ne=pe("relative inline-flex items-center justify-center font-medium select-none shrink-0 bg-slot-10 text-slot",{variants:{size:{xs:"size-6 text-xs",sm:"size-8 text-sm",md:"size-10 text-base",lg:"size-12 text-lg"},shape:{circle:"rounded-full",square:"rounded-lg"},color:ue,bordered:{true:"ring-2 ring-background",false:""},disabled:{true:"opacity-50 cursor-not-allowed",false:""}},defaultVariants:{size:"md",shape:"circle",color:"default",bordered:!1,disabled:!1}}),ye={xs:"size-1.5",sm:"size-2",md:"size-2.5",lg:"size-3"},je={online:"bg-success",offline:"bg-border",away:"bg-warning",busy:"bg-error"},ze={xs:"min-w-3 h-3 text-[8px]",sm:"min-w-4 h-4 text-[10px]",md:"min-w-5 h-5 text-xs",lg:"min-w-6 h-6 text-xs"},Ae={xs:"-space-x-1",sm:"-space-x-1.5",md:"-space-x-2",lg:"-space-x-2.5"};function we(r){const s=r.trim().split(/\s+/).filter(Boolean);if(s.length===0)return"";const i=s[0];if(s.length===1&&i)return i.slice(0,2).toUpperCase();const l=s[s.length-1],n=(i==null?void 0:i[0])??"",g=(l==null?void 0:l[0])??"";return(n+g).toUpperCase()}function Ne(r,s){return s?s.slice(0,2).toUpperCase():r?we(r):""}const ke=()=>e.jsx(le,{className:"size-[60%] text-text-secondary","aria-hidden":"true"}),a=h.memo(({src:r,alt:s="",fallback:i,name:l,size:n="md",shape:g="circle",status:x,color:D="default",bordered:d=!1,icon:v,badge:m,disabled:f=!1,className:p,classNames:t,onError:u,ref:I,...c})=>{const[V,M]=U.useState(!1);U.useEffect(()=>{M(!1)},[r]);const oe=me=>{M(!0),u==null||u(me)},b=r&&!V,_=Ne(l,i),q=!b&&(_||v),de=!b&&!q;return e.jsxs("div",{ref:I,className:o("avatar_root",ne({size:n,shape:g,color:b?"default":D,bordered:d,disabled:f}),!m&&!x&&"overflow-hidden",t==null?void 0:t.root,p),"aria-disabled":f||void 0,"data-slot":"root",...c,children:[b&&e.jsx("img",{src:r,alt:s||l||"User avatar",onError:oe,className:o("avatar_image","size-full object-cover",g==="circle"?"rounded-full":"rounded-lg",t==null?void 0:t.image),loading:"lazy","data-slot":"image"}),q&&(v?e.jsx("span",{className:o("avatar_fallback","flex items-center justify-center size-[60%]",t==null?void 0:t.fallback),"data-slot":"fallback",children:v}):e.jsx("span",{className:o("avatar_fallback",t==null?void 0:t.fallback),"aria-label":`Avatar for ${l||_}`,"data-slot":"fallback",children:_})),de&&e.jsx(ke,{}),x&&e.jsx("span",{className:o("avatar_status","absolute bottom-0 right-0 rounded-full ring-2 ring-background",ye[n],je[x],t==null?void 0:t.status),"aria-label":`Status: ${x}`,"data-slot":"status"}),m&&e.jsx("span",{className:o("absolute -top-1 -right-1 flex items-center justify-center rounded-full bg-error text-background font-medium px-1",ze[n]),"aria-label":typeof m=="number"?`${m} notifications`:void 0,role:typeof m=="number"?"status":void 0,children:m})]})});a.displayName="Avatar";const C=h.memo(({children:r,max:s,size:i="md",shape:l="circle",showTotal:n=!1,renderSurplus:g,bordered:x=!1,className:D,classNames:d,ref:v,...m})=>{const f=h.Children.toArray(r),p=f.length,t=s?f.slice(0,s):f,u=s&&p>s?p-s:0,I=n?p:u;return e.jsxs("div",{ref:v,className:o("avatarGroup_root","flex items-center",Ae[i],d==null?void 0:d.root,D),role:"group","aria-label":`Avatar group with ${p} members`,"data-slot":"root",...m,children:[t.map((c,V)=>h.isValidElement(c)?h.cloneElement(c,{key:c.key??V,size:c.props.size??i,shape:c.props.shape??l,bordered:c.props.bordered??x??!0,className:o(c.props.className)}):c),u>0&&(g?g(I):e.jsx("div",{className:o("avatarGroup_overflow",ne({size:i,shape:l,color:"default",bordered:!0}),"bg-surface/80 backdrop-blur-sm overflow-hidden",d==null?void 0:d.overflow),"aria-label":n?`${p} total members`:`${u} more members`,"data-slot":"overflow",children:e.jsx("span",{className:"text-text-secondary font-medium",children:n?p:`+${u}`})}))]})});C.displayName="AvatarGroup";a.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{alt:{defaultValue:{value:'""',computed:!1},required:!1},size:{defaultValue:{value:'"md"',computed:!1},required:!1},shape:{defaultValue:{value:'"circle"',computed:!1},required:!1},color:{defaultValue:{value:'"default"',computed:!1},required:!1},bordered:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};C.__docgenInfo={description:"",methods:[],displayName:"AvatarGroup",props:{size:{defaultValue:{value:'"md"',computed:!1},required:!1},shape:{defaultValue:{value:'"circle"',computed:!1},required:!1},showTotal:{defaultValue:{value:"false",computed:!1},required:!1},bordered:{defaultValue:{value:"false",computed:!1},required:!1}}};const Be={title:"Data Display/Avatar",component:a,tags:["autodocs"],argTypes:{src:{control:"text",description:"Image source URL"},alt:{control:"text",description:"Alternative text for the image"},fallback:{control:"text",description:"Fallback text (initials) when image fails to load"},name:{control:"text",description:"User name - auto-generates initials"},size:{control:"select",options:["xs","sm","md","lg"],description:"Avatar size"},shape:{control:"select",options:["circle","square"],description:"Avatar shape"},status:{control:"select",options:[void 0,"online","offline","away","busy"],description:"Status indicator"},color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"],description:"Background color for fallback"},bordered:{control:"boolean",description:"Show border/ring around avatar"},disabled:{control:"boolean",description:"Disabled state"}}},y={args:{src:"https://i.pravatar.cc/150?img=1",alt:"User avatar",size:"md",shape:"circle"}},j={render:()=>e.jsxs("div",{className:"flex gap-4 items-center flex-wrap",children:[e.jsx(a,{name:"John Doe",size:"lg"}),e.jsx(a,{name:"Alice",size:"lg"}),e.jsx(a,{name:"Robert James Smith",size:"lg"}),e.jsx(a,{name:"李明",size:"lg"})]})},z={render:()=>e.jsxs("div",{className:"flex gap-4 items-center flex-wrap",children:[e.jsx(a,{icon:e.jsx(le,{className:"w-full h-full"}),size:"lg",color:"primary"}),e.jsx(a,{icon:e.jsx(ve,{className:"w-full h-full"}),size:"lg",color:"secondary"}),e.jsx(a,{icon:e.jsx(be,{className:"w-full h-full"}),size:"lg",color:"accent"}),e.jsx(a,{icon:e.jsx(xe,{className:"w-full h-full"}),size:"lg",color:"warning"})]})},A={render:()=>e.jsxs("div",{className:"flex gap-6 items-center flex-wrap",children:[e.jsxs("div",{className:"text-center",children:[e.jsx(a,{src:"https://i.pravatar.cc/150?img=3",status:"online",size:"lg"}),e.jsx("p",{className:"text-xs mt-2 text-text-secondary",children:"Online"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(a,{src:"https://i.pravatar.cc/150?img=4",status:"away",size:"lg"}),e.jsx("p",{className:"text-xs mt-2 text-text-secondary",children:"Away"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(a,{src:"https://i.pravatar.cc/150?img=5",status:"busy",size:"lg"}),e.jsx("p",{className:"text-xs mt-2 text-text-secondary",children:"Busy"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(a,{src:"https://i.pravatar.cc/150?img=6",status:"offline",size:"lg"}),e.jsx("p",{className:"text-xs mt-2 text-text-secondary",children:"Offline"})]})]})},w={render:()=>e.jsxs("div",{className:"flex gap-6 items-center flex-wrap",children:[e.jsx(a,{src:"https://i.pravatar.cc/150?img=12",badge:3,size:"lg"}),e.jsx(a,{src:"https://i.pravatar.cc/150?img=13",badge:99,size:"lg"}),e.jsx(a,{src:"https://i.pravatar.cc/150?img=14",badge:"99+",size:"lg"}),e.jsx(a,{fallback:"JD",badge:e.jsx(ge,{className:"w-3 h-3"}),size:"lg",color:"primary"})]})},N={render:()=>e.jsxs("div",{className:"flex gap-4 items-center flex-wrap",children:[e.jsx(a,{src:"https://i.pravatar.cc/150?img=18",disabled:!0,size:"lg"}),e.jsx(a,{fallback:"JD",disabled:!0,size:"lg",color:"primary"})]})},k={render:()=>e.jsxs(C,{max:3,children:[e.jsx(a,{src:"https://i.pravatar.cc/150?img=26"}),e.jsx(a,{src:"https://i.pravatar.cc/150?img=27"}),e.jsx(a,{src:"https://i.pravatar.cc/150?img=28"}),e.jsx(a,{src:"https://i.pravatar.cc/150?img=29"}),e.jsx(a,{src:"https://i.pravatar.cc/150?img=30"}),e.jsx(a,{src:"https://i.pravatar.cc/150?img=31"})]})},S={render:()=>e.jsx("div",{className:"space-y-3",children:[{name:"Alice Smith",role:"Product Manager",status:"online",img:54},{name:"Mike Johnson",role:"Developer",status:"away",img:55},{name:"Sarah Williams",role:"Designer",status:"busy",img:56},{name:"Tom King",role:"QA Engineer",status:"offline",img:57}].map(r=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(a,{src:`https://i.pravatar.cc/150?img=${r.img}`,status:r.status,size:"md"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-sm",children:r.name}),e.jsx("p",{className:"text-xs text-text-secondary",children:r.role})]})]},r.name))})};var B,J,W;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    src: "https://i.pravatar.cc/150?img=1",
    alt: "User avatar",
    size: "md",
    shape: "circle"
  }
}`,...(W=(J=y.parameters)==null?void 0:J.docs)==null?void 0:W.source}}};var $,G,E;j.parameters={...j.parameters,docs:{...($=j.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4 items-center flex-wrap">
      <Avatar name="John Doe" size="lg" />
      <Avatar name="Alice" size="lg" />
      <Avatar name="Robert James Smith" size="lg" />
      <Avatar name="李明" size="lg" />
    </div>
}`,...(E=(G=j.parameters)==null?void 0:G.docs)==null?void 0:E.source}}};var R,O,T;z.parameters={...z.parameters,docs:{...(R=z.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4 items-center flex-wrap">
      <Avatar icon={<User className="w-full h-full" />} size="lg" color="primary" />
      <Avatar icon={<Building2 className="w-full h-full" />} size="lg" color="secondary" />
      <Avatar icon={<Camera className="w-full h-full" />} size="lg" color="accent" />
      <Avatar icon={<Star className="w-full h-full" />} size="lg" color="warning" />
    </div>
}`,...(T=(O=z.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var F,H,K;A.parameters={...A.parameters,docs:{...(F=A.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="flex gap-6 items-center flex-wrap">
      <div className="text-center">
        <Avatar src="https://i.pravatar.cc/150?img=3" status="online" size="lg" />
        <p className="text-xs mt-2 text-text-secondary">Online</p>
      </div>
      <div className="text-center">
        <Avatar src="https://i.pravatar.cc/150?img=4" status="away" size="lg" />
        <p className="text-xs mt-2 text-text-secondary">Away</p>
      </div>
      <div className="text-center">
        <Avatar src="https://i.pravatar.cc/150?img=5" status="busy" size="lg" />
        <p className="text-xs mt-2 text-text-secondary">Busy</p>
      </div>
      <div className="text-center">
        <Avatar src="https://i.pravatar.cc/150?img=6" status="offline" size="lg" />
        <p className="text-xs mt-2 text-text-secondary">Offline</p>
      </div>
    </div>
}`,...(K=(H=A.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var L,P,Q;w.parameters={...w.parameters,docs:{...(L=w.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div className="flex gap-6 items-center flex-wrap">
      <Avatar src="https://i.pravatar.cc/150?img=12" badge={3} size="lg" />
      <Avatar src="https://i.pravatar.cc/150?img=13" badge={99} size="lg" />
      <Avatar src="https://i.pravatar.cc/150?img=14" badge="99+" size="lg" />
      <Avatar fallback="JD" badge={<Bell className="w-3 h-3" />} size="lg" color="primary" />
    </div>
}`,...(Q=(P=w.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var X,Y,Z;N.parameters={...N.parameters,docs:{...(X=N.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4 items-center flex-wrap">
      <Avatar src="https://i.pravatar.cc/150?img=18" disabled size="lg" />
      <Avatar fallback="JD" disabled size="lg" color="primary" />
    </div>
}`,...(Z=(Y=N.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,te;k.parameters={...k.parameters,docs:{...(ee=k.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <AvatarGroup max={3}>
      <Avatar src="https://i.pravatar.cc/150?img=26" />
      <Avatar src="https://i.pravatar.cc/150?img=27" />
      <Avatar src="https://i.pravatar.cc/150?img=28" />
      <Avatar src="https://i.pravatar.cc/150?img=29" />
      <Avatar src="https://i.pravatar.cc/150?img=30" />
      <Avatar src="https://i.pravatar.cc/150?img=31" />
    </AvatarGroup>
}`,...(te=(ae=k.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var re,se,ie;S.parameters={...S.parameters,docs:{...(re=S.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <div className="space-y-3">
      {[{
      name: "Alice Smith",
      role: "Product Manager",
      status: "online" as const,
      img: 54
    }, {
      name: "Mike Johnson",
      role: "Developer",
      status: "away" as const,
      img: 55
    }, {
      name: "Sarah Williams",
      role: "Designer",
      status: "busy" as const,
      img: 56
    }, {
      name: "Tom King",
      role: "QA Engineer",
      status: "offline" as const,
      img: 57
    }].map(member => <div key={member.name} className="flex items-center gap-3">
          <Avatar src={\`https://i.pravatar.cc/150?img=\${member.img}\`} status={member.status} size="md" />
          <div>
            <p className="font-medium text-sm">{member.name}</p>
            <p className="text-xs text-text-secondary">{member.role}</p>
          </div>
        </div>)}
    </div>
}`,...(ie=(se=S.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};const Je=["Default","WithNameAutoInitials","WithCustomIcon","WithStatus","WithBadge","Disabled","AvatarGroupWithMax","TeamMembers"];export{k as AvatarGroupWithMax,y as Default,N as Disabled,S as TeamMembers,w as WithBadge,z as WithCustomIcon,j as WithNameAutoInitials,A as WithStatus,Je as __namedExportsOrder,Be as default};
