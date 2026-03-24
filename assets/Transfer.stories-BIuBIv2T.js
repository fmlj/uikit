import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as a,r as X}from"./index-ZH-6pyQh.js";import{C as ce}from"./index-ByNQ8nWm.js";import{a as P,g as Ye,i as C,c as T,s as Ze}from"./utils-_uLxnvdl.js";import{c as et}from"./variants-C8qliDOr.js";import{C as tt}from"./chevron-right-DY5KYsnV.js";import{C as st}from"./chevron-left-BPVU9fuB.js";import{a as rt,C as at}from"./chevrons-right-Bto5ffh9.js";import{S as lt}from"./search-DfqimKq8.js";import{T as it}from"./truck-BzJC0TNF.js";import{S as ot}from"./shield-syPj5L6h.js";import{F as de}from"./file-text-DaZIRBjV.js";import{I as nt}from"./image-DgDiVcgH.js";import{V as ct,M as dt}from"./video-BuQhx4NY.js";import{C as mt}from"./code-CLvo4QKG.js";import"./_commonjsHelpers-CqkleIqs.js";import"./minus-Bn6CyQhd.js";import"./createLucideIcon-BXJdBs6C.js";import"./check-CKCh4cDT.js";const ut=P("flex items-center justify-between px-4 py-2 border-b border-border bg-surface"),pt=P("overflow-y-auto"),xt=P("flex items-center gap-2 px-4 py-2 cursor-pointer transition-colors hover:bg-surface",{variants:{selected:{true:"bg-slot-10",false:""},disabled:{true:"opacity-50 cursor-not-allowed hover:bg-transparent",false:""}},defaultVariants:{selected:!1,disabled:!1}}),ht=P("flex flex-col gap-2"),E=P("flex items-center justify-center p-2 rounded-md border border-border bg-background text-text-secondary hover:bg-slot hover:text-slot-fg hover:border-slot transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-background disabled:hover:text-text-secondary disabled:hover:border-border"),bt=(t,s)=>{if(!s)return t;const l=s.toLowerCase();return t.filter(r=>{var p;return r.label.toLowerCase().includes(l)||((p=r.description)==null?void 0:p.toLowerCase().includes(l))})},ft=(t,s)=>{const l=new Map(t.map(r=>[r.key,r]));return s.map(r=>l.get(r)).filter(Boolean)},le=t=>t.filter(s=>!s.disabled),ie=a.memo(({title:t,dataSource:s,selectedKeys:l,disabled:r=!1,showSearch:p=!1,searchPlaceholder:U="Search...",listHeight:W=300,showSelectAll:V=!0,onItemSelect:F,onItemSelectAll:M,onSearch:x,render:K,footer:h,classNames:i})=>{const[c,v]=a.useState(""),k=a.useMemo(()=>new Set(l),[l]),S=a.useMemo(()=>bt(s,c),[s,c]),N=a.useMemo(()=>le(S),[S]),A=a.useMemo(()=>S.filter(n=>k.has(n.key)).length,[S,k]),Y=N.length>0&&A===N.length,Z=A>0&&A<N.length,ee=a.useCallback(n=>{const b=n.target.value;v(b),x==null||x(b)},[x]),y=a.useCallback(n=>{const b=n.target.checked,j=N.map(I=>I.key);M(j,b)},[N,M]),te=a.useCallback(n=>{if(n.disabled)return;const b=!k.has(n.key);F(n.key,b)},[k,F]);return e.jsxs("div",{className:T("flex flex-1 flex-col border border-border rounded-lg bg-card overflow-hidden min-w-0 transfer_list",i==null?void 0:i.list),children:[e.jsx("div",{className:T(ut(),"transfer_header",i==null?void 0:i.header),children:e.jsxs("div",{className:"flex items-center gap-2 flex-1",children:[V&&e.jsx(ce,{checked:Y,indeterminate:Z,onChange:y,disabled:r||N.length===0,size:"sm"}),e.jsxs("span",{className:"text-sm font-medium text-text-primary",children:[t,e.jsxs("span",{className:"text-text-secondary ml-1",children:["(",A,"/",S.length,")"]})]})]})}),p&&e.jsx("div",{className:"p-2 border-b border-border",children:e.jsxs("div",{className:"relative",children:[e.jsx(lt,{className:"absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary"}),e.jsx("input",{type:"text",className:T("w-full pl-8 pr-3 py-1.5 text-sm text-text-primary placeholder:text-text-muted bg-background border border-border rounded-md outline-none focus:border-primary transition-colors transfer_search",i==null?void 0:i.search),placeholder:U,value:c,onChange:ee,disabled:r})]})}),e.jsx("div",{className:pt(),style:{height:W},children:S.length===0?e.jsx("div",{className:"flex items-center justify-center h-full text-sm text-text-secondary",children:"No data"}):S.map(n=>e.jsxs("div",{className:T(xt({selected:k.has(n.key),disabled:!!n.disabled||r}),"transfer_item",i==null?void 0:i.item),onClick:()=>te(n),children:[e.jsx(ce,{checked:k.has(n.key),disabled:!!n.disabled||r,size:"sm",onChange:()=>{}}),K?K(n):e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("div",{className:"text-sm text-text-primary truncate",children:n.label}),n.description&&e.jsx("div",{className:"text-xs text-text-secondary truncate",children:n.description})]})]},n.key))}),h&&e.jsx("div",{className:"px-4 py-2 border-t border-border bg-surface text-sm text-text-secondary",children:h})]})});ie.displayName="TransferList";const g=a.memo(({dataSource:t=[],targetKeys:s,defaultTargetKeys:l=[],titles:r=["Source","Target"],size:p="md",showSearch:U=!1,searchPlaceholder:W="Search...",listHeight:V=300,showSelectAll:F=!0,oneWay:M=!1,disabled:x=!1,render:K,footer:h,onChange:i,onSelectChange:c,onSearch:v,label:k,helperText:S,error:N,warning:A,info:Y,success:Z,className:ee,classNames:y,ref:te})=>{const[n,b]=a.useState(l),[j,I]=a.useState([]),[w,R]=a.useState([]),se=a.useRef(j);se.current=j;const re=a.useRef(w);re.current=w;const u=s!==void 0?s:n,{status:Be,message:oe}=Ye({error:N,warning:A,info:Y,success:Z,helperText:S}),ne=a.useMemo(()=>new Set(u),[u]),L=a.useMemo(()=>t.filter(o=>!ne.has(o.key)),[t,ne]),B=a.useMemo(()=>ft(t,u),[t,u]),Ce=a.useCallback((o,m)=>{I(d=>{const f=m?[...d,o]:d.filter(ae=>ae!==o);return c==null||c(f,re.current),f})},[c]),Ee=a.useCallback((o,m)=>{R(d=>{const f=m?[...d,o]:d.filter(ae=>ae!==o);return c==null||c(se.current,f),f})},[c]),_e=a.useCallback((o,m)=>{const d=m?o:[];I(d),c==null||c(d,re.current)},[c]),qe=a.useCallback((o,m)=>{const d=m?o:[];R(d),c==null||c(se.current,d)},[c]),Ge=a.useCallback(()=>{const o=[...new Set([...u,...j])];s===void 0&&b(o),i==null||i(o,"right",j),I([])},[u,j,s,i]),He=a.useCallback(()=>{const o=u.filter(m=>!w.includes(m));s===void 0&&b(o),i==null||i(o,"left",w),R([])},[u,w,s,i]),Oe=a.useCallback(()=>{const m=le(L).map(f=>f.key),d=[...u,...m];s===void 0&&b(d),i==null||i(d,"right",m),I([])},[L,u,s,i]),$e=a.useCallback(()=>{const m=le(B).map(f=>f.key),d=u.filter(f=>!m.includes(f));s===void 0&&b(d),i==null||i(d,"left",m),R([])},[B,u,s,i]),ze=a.useCallback(o=>{v==null||v("left",o)},[v]),Qe=v?a.useCallback(o=>{v("right",o)},[v]):void 0,Je=a.useMemo(()=>h==null?void 0:h({direction:"left"}),[h]),Xe=a.useMemo(()=>h==null?void 0:h({direction:"right"}),[h]);return e.jsxs("div",{ref:te,children:[k&&e.jsx("label",{className:"block mb-2",children:e.jsx("span",{className:"text-sm font-medium text-text-primary",children:k})}),e.jsxs("div",{"data-slot":"root",className:T("flex items-start gap-4 transfer_root",et.primary,y==null?void 0:y.root,ee),children:[e.jsx(ie,{title:r[0],dataSource:L,selectedKeys:j,disabled:x,showSearch:U,searchPlaceholder:W,listHeight:V,showSelectAll:F,direction:"left",onItemSelect:Ce,onItemSelectAll:_e,onSearch:ze,render:K,footer:Je,size:p,classNames:y}),e.jsxs("div",{className:T(ht(),"self-center transfer_actions",y==null?void 0:y.actions),children:[e.jsx("button",{type:"button",className:E(),onClick:Ge,disabled:x||j.length===0,title:"Move selected to right","aria-label":"Move selected to right",children:e.jsx(tt,{className:C[p]})}),!M&&e.jsx("button",{type:"button",className:E(),onClick:He,disabled:x||w.length===0,title:"Move selected to left","aria-label":"Move selected to left",children:e.jsx(st,{className:C[p]})}),e.jsx("button",{type:"button",className:E(),onClick:Oe,disabled:x||L.length===0,title:"Move all to right","aria-label":"Move all to right",children:e.jsx(rt,{className:C[p]})}),!M&&e.jsx("button",{type:"button",className:E(),onClick:$e,disabled:x||B.length===0,title:"Move all to left","aria-label":"Move all to left",children:e.jsx(at,{className:C[p]})})]}),e.jsx(ie,{title:r[1],dataSource:B,selectedKeys:w,disabled:x,showSearch:U,searchPlaceholder:W,listHeight:V,showSelectAll:F,direction:"right",onItemSelect:Ee,onItemSelectAll:qe,onSearch:Qe,render:K,footer:Xe,size:p,classNames:y})]}),oe&&e.jsx("p",{className:T(Ze({status:Be}),"mt-1"),children:oe})]})});g.displayName="Transfer";g.__docgenInfo={description:"",methods:[],displayName:"Transfer",props:{dataSource:{defaultValue:{value:"[]",computed:!1},required:!1},defaultTargetKeys:{defaultValue:{value:"[]",computed:!1},required:!1},titles:{defaultValue:{value:"['Source', 'Target']",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1},showSearch:{defaultValue:{value:"false",computed:!1},required:!1},searchPlaceholder:{defaultValue:{value:"'Search...'",computed:!1},required:!1},listHeight:{defaultValue:{value:"300",computed:!1},required:!1},showSelectAll:{defaultValue:{value:"true",computed:!1},required:!1},oneWay:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const Ct={title:"Data Entry/Transfer",component:g,tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg"],description:"Size of the transfer component"},showSearch:{control:"boolean",description:"Show search boxes"},showSelectAll:{control:"boolean",description:"Show select all checkboxes"},oneWay:{control:"boolean",description:"Only allow moving items to the right"},disabled:{control:"boolean",description:"Disable the transfer"},listHeight:{control:"number",description:"Height of the lists"}}},gt=[{key:"1",label:"Item 1"},{key:"2",label:"Item 2"},{key:"3",label:"Item 3"},{key:"4",label:"Item 4"},{key:"5",label:"Item 5"},{key:"6",label:"Item 6"},{key:"7",label:"Item 7"},{key:"8",label:"Item 8"}],D=[{key:"user1",label:"Alice Johnson",description:"Frontend Developer"},{key:"user2",label:"Bob Smith",description:"Backend Developer"},{key:"user3",label:"Charlie Brown",description:"DevOps Engineer"},{key:"user4",label:"Diana Prince",description:"UI/UX Designer"},{key:"user5",label:"Eve Davis",description:"Product Manager"},{key:"user6",label:"Frank Miller",description:"QA Engineer"},{key:"user7",label:"Grace Lee",description:"Data Scientist"},{key:"user8",label:"Henry Wilson",description:"Security Specialist"},{key:"user9",label:"Ivy Chen",description:"Mobile Developer"},{key:"user10",label:"Jack Turner",description:"Tech Lead"}],yt=[{key:"auth",label:"Authentication",description:"User login and registration"},{key:"dashboard",label:"Dashboard",description:"Analytics and metrics"},{key:"reporting",label:"Reporting",description:"Generate reports"},{key:"notifications",label:"Notifications",description:"Email and push notifications"},{key:"search",label:"Search",description:"Full-text search"},{key:"export",label:"Export",description:"Export data to CSV/Excel"},{key:"api",label:"API Access",description:"REST API endpoints"},{key:"webhooks",label:"Webhooks",description:"Event-driven webhooks"},{key:"sso",label:"SSO",description:"Single sign-on integration"},{key:"audit",label:"Audit Logs",description:"Track user actions"}],me=[{key:"doc1",label:"Project Proposal.pdf",description:"2.5 MB • PDF"},{key:"doc2",label:"Annual Report.docx",description:"1.2 MB • Word"},{key:"img1",label:"Logo Design.png",description:"450 KB • Image"},{key:"img2",label:"Hero Banner.jpg",description:"1.8 MB • Image"},{key:"vid1",label:"Tutorial Video.mp4",description:"25 MB • Video"},{key:"music1",label:"Background Music.mp3",description:"4.5 MB • Audio"},{key:"code1",label:"main.tsx",description:"15 KB • TypeScript"},{key:"code2",label:"styles.css",description:"8 KB • CSS"}],vt=[{key:"read",label:"Read",description:"View content"},{key:"write",label:"Write",description:"Create and edit content"},{key:"delete",label:"Delete",description:"Remove content"},{key:"share",label:"Share",description:"Share with others"},{key:"admin",label:"Admin",description:"Full administrative access"},{key:"export_data",label:"Export Data",description:"Download data exports"},{key:"manage_users",label:"Manage Users",description:"Add/remove users"},{key:"billing",label:"Billing",description:"Access billing settings"}],_={args:{dataSource:gt,titles:["Source","Target"],size:"md"}},q={render:()=>e.jsx(g,{dataSource:D,showSearch:!0,searchPlaceholder:"Search users...",titles:["Available Users","Selected Users"],listHeight:300})},G={render:()=>e.jsx(g,{dataSource:D,defaultTargetKeys:["user1","user3","user5"],titles:["Available Users","Selected Users"],showSearch:!0})},H={render:()=>{const[t,s]=X.useState(["user2","user4"]);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{className:"px-3 py-1.5 text-sm bg-primary text-white rounded-md",onClick:()=>s(["user1","user2","user3"]),children:"Select First 3"}),e.jsx("button",{className:"px-3 py-1.5 text-sm bg-primary text-white rounded-md",onClick:()=>s(D.slice(0,5).map(l=>l.key)),children:"Select First 5"}),e.jsx("button",{className:"px-3 py-1.5 text-sm bg-surface text-text-primary rounded-md",onClick:()=>s([]),children:"Clear All"})]}),e.jsx(g,{dataSource:D,targetKeys:t,onChange:l=>s(l),titles:["Available","Selected"],showSearch:!0}),e.jsxs("div",{className:"text-sm text-text-muted",children:["Selected: ",t.length," user(s)"]})]})}},O={render:()=>e.jsx(g,{dataSource:yt,oneWay:!0,titles:["Available Features","Enabled Features"],showSearch:!0,label:"Feature Selection",helperText:"Select features to enable (one-way only)"})},$={render:()=>{const t=[{key:"1",label:"Item 1",description:"Available"},{key:"2",label:"Item 2 (locked)",description:"Disabled",disabled:!0},{key:"3",label:"Item 3",description:"Available"},{key:"4",label:"Item 4 (locked)",description:"Disabled",disabled:!0},{key:"5",label:"Item 5",description:"Available"},{key:"6",label:"Item 6",description:"Available"}];return e.jsx(g,{dataSource:t,titles:["Source","Target"],listHeight:250})}},z={render:()=>{const[t,s]=X.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-surface p-4 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Project Team Assignment"}),e.jsx("p",{className:"text-sm text-text-muted",children:"Select team members for the new project"})]}),e.jsx(g,{dataSource:D,targetKeys:t,onChange:l=>s(l),titles:["Available Members","Project Team"],showSearch:!0,searchPlaceholder:"Search members...",render:l=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-white text-xs font-semibold shrink-0",children:l.label.split(" ").map(r=>r[0]).join("")}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("div",{className:"text-sm font-medium truncate",children:l.label}),e.jsx("div",{className:"text-xs text-text-muted truncate",children:l.description})]})]}),footer:({direction:l})=>e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs text-text-muted",children:l==="left"?"Available":"Assigned"}),e.jsxs("span",{className:"text-xs font-medium",children:[l==="left"?D.length-t.length:t.length," members"]})]})}),t.length>0&&e.jsx("div",{className:"bg-success/10 border border-success p-4 rounded-lg",children:e.jsxs("p",{className:"text-sm font-medium text-success",children:[t.length," team member(s) assigned to project"]})})]})}},Q={render:()=>{const[t,s]=X.useState(["read"]);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-surface p-4 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"User Permissions"}),e.jsx("p",{className:"text-sm text-text-muted",children:"Grant or revoke permissions for user: john.doe@example.com"})]}),e.jsx(g,{dataSource:vt,targetKeys:t,onChange:l=>s(l),titles:["Available Permissions","Granted Permissions"],showSearch:!1,render:l=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(ot,{className:"w-5 h-5 text-primary shrink-0"}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("div",{className:"text-sm font-medium",children:l.label}),e.jsx("div",{className:"text-xs text-text-muted",children:l.description})]})]})}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{className:"px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90",disabled:t.length===0,children:"Save Permissions"}),e.jsx("button",{className:"px-4 py-2 bg-surface text-text-primary rounded-md hover:bg-surface/80",onClick:()=>s(["read"]),children:"Reset to Default"})]})]})}},J={render:()=>{const[t,s]=X.useState([]),l=r=>r.startsWith("doc")?e.jsx(de,{className:"w-5 h-5 text-blue-500"}):r.startsWith("img")?e.jsx(nt,{className:"w-5 h-5 text-green-500"}):r.startsWith("vid")?e.jsx(ct,{className:"w-5 h-5 text-red-500"}):r.startsWith("music")?e.jsx(dt,{className:"w-5 h-5 text-purple-500"}):r.startsWith("code")?e.jsx(mt,{className:"w-5 h-5 text-cyan-500"}):e.jsx(de,{className:"w-5 h-5"});return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-surface p-4 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"File Upload"}),e.jsx("p",{className:"text-sm text-text-muted",children:"Select files to upload to the cloud"})]}),e.jsx(g,{dataSource:me,targetKeys:t,onChange:r=>s(r),titles:["Local Files","Upload Queue"],showSearch:!0,searchPlaceholder:"Search files...",oneWay:!0,render:r=>e.jsxs("div",{className:"flex items-center gap-3",children:[l(r.key),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("div",{className:"text-sm font-medium truncate",children:r.label}),e.jsx("div",{className:"text-xs text-text-muted",children:r.description})]})]}),footer:({direction:r})=>e.jsx("div",{className:"text-xs text-text-muted",children:r==="left"?`${me.length-t.length} files`:`${t.length} files • Ready to upload`})}),t.length>0&&e.jsxs("button",{className:"w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 flex items-center justify-center gap-2",children:[e.jsx(it,{className:"w-4 h-4"}),"Upload ",t.length," File(s)"]})]})}};var ue,pe,xe;_.parameters={..._.parameters,docs:{...(ue=_.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    dataSource: basicData,
    titles: ['Source', 'Target'],
    size: 'md'
  }
}`,...(xe=(pe=_.parameters)==null?void 0:pe.docs)==null?void 0:xe.source}}};var he,be,fe;q.parameters={...q.parameters,docs:{...(he=q.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => <Transfer dataSource={userData} showSearch searchPlaceholder="Search users..." titles={['Available Users', 'Selected Users']} listHeight={300} />
}`,...(fe=(be=q.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var ge,ye,ve;G.parameters={...G.parameters,docs:{...(ge=G.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => <Transfer dataSource={userData} defaultTargetKeys={['user1', 'user3', 'user5']} titles={['Available Users', 'Selected Users']} showSearch />
}`,...(ve=(ye=G.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};var ke,Se,je;H.parameters={...H.parameters,docs:{...(ke=H.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: () => {
    const [targetKeys, setTargetKeys] = useState<string[]>(['user2', 'user4']);
    return <div className="space-y-4">
        <div className="flex gap-2">
          <button className="px-3 py-1.5 text-sm bg-primary text-white rounded-md" onClick={() => setTargetKeys(['user1', 'user2', 'user3'])}>
            Select First 3
          </button>
          <button className="px-3 py-1.5 text-sm bg-primary text-white rounded-md" onClick={() => setTargetKeys(userData.slice(0, 5).map(u => u.key))}>
            Select First 5
          </button>
          <button className="px-3 py-1.5 text-sm bg-surface text-text-primary rounded-md" onClick={() => setTargetKeys([])}>
            Clear All
          </button>
        </div>
        <Transfer dataSource={userData} targetKeys={targetKeys} onChange={keys => setTargetKeys(keys)} titles={['Available', 'Selected']} showSearch />
        <div className="text-sm text-text-muted">
          Selected: {targetKeys.length} user(s)
        </div>
      </div>;
  }
}`,...(je=(Se=H.parameters)==null?void 0:Se.docs)==null?void 0:je.source}}};var Ne,we,Te;O.parameters={...O.parameters,docs:{...(Ne=O.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: () => <Transfer dataSource={featureData} oneWay titles={['Available Features', 'Enabled Features']} showSearch label="Feature Selection" helperText="Select features to enable (one-way only)" />
}`,...(Te=(we=O.parameters)==null?void 0:we.docs)==null?void 0:Te.source}}};var Ae,Ie,De;$.parameters={...$.parameters,docs:{...(Ae=$.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  render: () => {
    const dataWithDisabled: TransferItem[] = [{
      key: '1',
      label: 'Item 1',
      description: 'Available'
    }, {
      key: '2',
      label: 'Item 2 (locked)',
      description: 'Disabled',
      disabled: true
    }, {
      key: '3',
      label: 'Item 3',
      description: 'Available'
    }, {
      key: '4',
      label: 'Item 4 (locked)',
      description: 'Disabled',
      disabled: true
    }, {
      key: '5',
      label: 'Item 5',
      description: 'Available'
    }, {
      key: '6',
      label: 'Item 6',
      description: 'Available'
    }];
    return <Transfer dataSource={dataWithDisabled} titles={['Source', 'Target']} listHeight={250} />;
  }
}`,...(De=(Ie=$.parameters)==null?void 0:Ie.docs)==null?void 0:De.source}}};var Fe,Me,Ke;z.parameters={...z.parameters,docs:{...(Fe=z.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  render: () => {
    const [assignedUsers, setAssignedUsers] = useState<string[]>([]);
    return <div className="space-y-4">
        <div className="bg-surface p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Project Team Assignment</h3>
          <p className="text-sm text-text-muted">
            Select team members for the new project
          </p>
        </div>
        <Transfer dataSource={userData} targetKeys={assignedUsers} onChange={keys => setAssignedUsers(keys)} titles={['Available Members', 'Project Team']} showSearch searchPlaceholder="Search members..." render={item => <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-white text-xs font-semibold shrink-0">
                {item.label.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium truncate">{item.label}</div>
                <div className="text-xs text-text-muted truncate">{item.description}</div>
              </div>
            </div>} footer={({
        direction
      }) => <div className="flex items-center justify-between">
              <span className="text-xs text-text-muted">
                {direction === 'left' ? 'Available' : 'Assigned'}
              </span>
              <span className="text-xs font-medium">
                {direction === 'left' ? userData.length - assignedUsers.length : assignedUsers.length} members
              </span>
            </div>} />
        {assignedUsers.length > 0 && <div className="bg-success/10 border border-success p-4 rounded-lg">
            <p className="text-sm font-medium text-success">
              {assignedUsers.length} team member(s) assigned to project
            </p>
          </div>}
      </div>;
  }
}`,...(Ke=(Me=z.parameters)==null?void 0:Me.docs)==null?void 0:Ke.source}}};var Pe,Ue,We;Q.parameters={...Q.parameters,docs:{...(Pe=Q.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  render: () => {
    const [grantedPermissions, setGrantedPermissions] = useState<string[]>(['read']);
    return <div className="space-y-4">
        <div className="bg-surface p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">User Permissions</h3>
          <p className="text-sm text-text-muted">
            Grant or revoke permissions for user: john.doe@example.com
          </p>
        </div>
        <Transfer dataSource={permissionData} targetKeys={grantedPermissions} onChange={keys => setGrantedPermissions(keys)} titles={['Available Permissions', 'Granted Permissions']} showSearch={false} render={item => <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-primary shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium">{item.label}</div>
                <div className="text-xs text-text-muted">{item.description}</div>
              </div>
            </div>} />
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90" disabled={grantedPermissions.length === 0}>
            Save Permissions
          </button>
          <button className="px-4 py-2 bg-surface text-text-primary rounded-md hover:bg-surface/80" onClick={() => setGrantedPermissions(['read'])}>
            Reset to Default
          </button>
        </div>
      </div>;
  }
}`,...(We=(Ue=Q.parameters)==null?void 0:Ue.docs)==null?void 0:We.source}}};var Ve,Re,Le;J.parameters={...J.parameters,docs:{...(Ve=J.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  render: () => {
    const [selectedFiles, setSelectedFiles] = useState<string[]>([]);
    const getFileIcon = (key: string) => {
      if (key.startsWith('doc')) return <FileText className="w-5 h-5 text-blue-500" />;
      if (key.startsWith('img')) return <Image className="w-5 h-5 text-green-500" />;
      if (key.startsWith('vid')) return <Video className="w-5 h-5 text-red-500" />;
      if (key.startsWith('music')) return <Music className="w-5 h-5 text-purple-500" />;
      if (key.startsWith('code')) return <Code className="w-5 h-5 text-cyan-500" />;
      return <FileText className="w-5 h-5" />;
    };
    return <div className="space-y-4">
        <div className="bg-surface p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">File Upload</h3>
          <p className="text-sm text-text-muted">
            Select files to upload to the cloud
          </p>
        </div>
        <Transfer dataSource={fileData} targetKeys={selectedFiles} onChange={keys => setSelectedFiles(keys)} titles={['Local Files', 'Upload Queue']} showSearch searchPlaceholder="Search files..." oneWay render={item => <div className="flex items-center gap-3">
              {getFileIcon(item.key)}
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium truncate">{item.label}</div>
                <div className="text-xs text-text-muted">{item.description}</div>
              </div>
            </div>} footer={({
        direction
      }) => <div className="text-xs text-text-muted">
              {direction === 'left' ? \`\${fileData.length - selectedFiles.length} files\` : \`\${selectedFiles.length} files • Ready to upload\`}
            </div>} />
        {selectedFiles.length > 0 && <button className="w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 flex items-center justify-center gap-2">
            <Truck className="w-4 h-4" />
            Upload {selectedFiles.length} File(s)
          </button>}
      </div>;
  }
}`,...(Le=(Re=J.parameters)==null?void 0:Re.docs)==null?void 0:Le.source}}};const Et=["Default","WithSearch","WithDefaultSelection","ControlledSelection","OneWayTransfer","WithDisabledItems","TeamAssignment","PermissionManager","FileTransfer"];export{H as ControlledSelection,_ as Default,J as FileTransfer,O as OneWayTransfer,Q as PermissionManager,z as TeamAssignment,G as WithDefaultSelection,$ as WithDisabledItems,q as WithSearch,Et as __namedExportsOrder,Ct as default};
