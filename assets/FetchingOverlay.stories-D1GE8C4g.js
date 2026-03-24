import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as M,r as o}from"./index-ZH-6pyQh.js";import{S as J}from"./index-BoArNvwV.js";import{c as U}from"./utils-_uLxnvdl.js";import{B as l}from"./index-23ax1BAm.js";import"./_commonjsHelpers-CqkleIqs.js";import"./variants-C8qliDOr.js";import"./index-ZW2Bszwo.js";import"./index-Bo-loign.js";import"./useRipple-BuuTbn0W.js";const a=M.memo(({isFetching:s,size:r="lg",fullscreen:n=!0,backdropOpacity:t=30,className:x,...E})=>e.jsx("div",{"data-slot":"root",className:U("fetchingOverlay_root","absolute inset-0 flex items-center justify-center transition-opacity duration-300",n&&"fixed w-full h-screen z-[var(--z-overlay)]",s?"opacity-100":"opacity-0 pointer-events-none",x),style:s?{backgroundColor:`rgba(0, 0, 0, ${t/100})`}:void 0,role:"status","aria-busy":s,"aria-label":s?"Loading content":void 0,children:s&&e.jsx(J,{size:r,...E})}));a.displayName="FetchingOverlay";a.__docgenInfo={description:"",methods:[],displayName:"FetchingOverlay",props:{size:{defaultValue:{value:"'lg'",computed:!1},required:!1},fullscreen:{defaultValue:{value:"true",computed:!1},required:!1},backdropOpacity:{defaultValue:{value:"30",computed:!1},required:!1}}};const X={title:"Feedback/FetchingOverlay",component:a,tags:["autodocs"],argTypes:{isFetching:{control:"boolean",description:"Whether the overlay is visible"},size:{control:"select",options:["xs","sm","md","lg","xl"],description:"Size of the spinner"},fullscreen:{control:"boolean",description:"Cover entire screen or just parent container"},backdropOpacity:{control:{type:"number",min:0,max:100,step:5},description:"Opacity of the backdrop (0-100)"}}},i={args:{isFetching:!0,size:"lg",fullscreen:!1,backdropOpacity:30},render:s=>e.jsxs("div",{className:"relative w-full h-96 bg-surface border border-border rounded-lg flex items-center justify-center",children:[e.jsx("p",{className:"text-text-secondary",children:"Content behind overlay"}),e.jsx(a,{...s})]})},d={render:()=>{const[s,r]=o.useState(!1),n=()=>{r(!0),setTimeout(()=>{r(!1)},3e3)};return e.jsxs("div",{className:"relative w-full h-96 bg-surface border border-border rounded-lg p-8",children:[e.jsx("h2",{className:"text-xl font-bold mb-4",children:"Interactive Example"}),e.jsx("p",{className:"mb-6 text-text-secondary",children:"Click the button to simulate a loading state for 3 seconds."}),e.jsx(l,{onClick:n,disabled:s,children:s?"Loading...":"Start Loading"}),e.jsx(a,{isFetching:s,fullscreen:!1})]})}},c={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"relative w-full h-96 bg-surface border border-border rounded-lg p-6",children:[e.jsx("h2",{className:"text-xl font-bold mb-4",children:"Container Mode"}),e.jsx("p",{className:"mb-4 text-text-secondary",children:"The overlay only covers its parent container when fullscreen is false."}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"p-4 bg-background rounded border border-border",children:e.jsx("p",{children:"Content item 1"})}),e.jsx("div",{className:"p-4 bg-background rounded border border-border",children:e.jsx("p",{children:"Content item 2"})}),e.jsx("div",{className:"p-4 bg-background rounded border border-border",children:e.jsx("p",{children:"Content item 3"})})]}),e.jsx(a,{isFetching:!0,fullscreen:!1})]}),e.jsx("p",{className:"text-sm text-text-secondary",children:"Content outside the container is not affected by the overlay"})]})},m={render:()=>{const[s,r]=o.useState(!1);return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"p-6 bg-surface border border-border rounded-lg",children:[e.jsx("h2",{className:"text-xl font-bold mb-4",children:"Fullscreen Mode"}),e.jsx("p",{className:"mb-6 text-text-secondary",children:"Click the button to show a fullscreen overlay that covers the entire viewport."}),e.jsx(l,{onClick:()=>r(!s),children:s?"Hide Overlay":"Show Fullscreen Overlay"})]}),e.jsx(a,{isFetching:s,fullscreen:!0})]})}},u={render:()=>{const[s,r]=o.useState({}),n=t=>{r({...s,[t]:!0}),setTimeout(()=>{r({...s,[t]:!1})},2e3)};return e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[1,2,3,4,5,6].map(t=>e.jsxs("div",{className:"relative bg-surface border border-border rounded-lg p-6",children:[e.jsxs("h3",{className:"text-lg font-bold mb-2",children:["Card ",t]}),e.jsxs("p",{className:"text-text-secondary mb-4",children:["This is some content in card ",t]}),e.jsx(l,{size:"sm",onClick:()=>n(t),disabled:s[t],children:"Load Data"}),e.jsx(a,{isFetching:s[t]||!1,fullscreen:!1,size:"md"})]},t))})}},p={render:()=>{const[s,r]=o.useState(!1),n=t=>{t.preventDefault(),r(!0),setTimeout(()=>{r(!1)},2500)};return e.jsx("div",{className:"max-w-md mx-auto",children:e.jsxs("div",{className:"relative bg-surface border border-border rounded-lg p-6",children:[e.jsx("h2",{className:"text-xl font-bold mb-6",children:"User Registration"}),e.jsxs("form",{onSubmit:n,className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"Full Name"}),e.jsx("input",{type:"text",className:"w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary",placeholder:"John Doe",disabled:s})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"Email"}),e.jsx("input",{type:"email",className:"w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary",placeholder:"john@example.com",disabled:s})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"Password"}),e.jsx("input",{type:"password",className:"w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary",placeholder:"••••••••",disabled:s})]}),e.jsx(l,{type:"submit",fullWidth:!0,disabled:s,children:s?"Creating Account...":"Create Account"})]}),e.jsx(a,{isFetching:s,fullscreen:!1,backdropOpacity:40})]})})}},b={render:()=>{const[s,r]=o.useState(!1),n=()=>{r(!0),setTimeout(()=>{r(!1)},2e3)};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h2",{className:"text-xl font-bold",children:"Users Table"}),e.jsx(l,{onClick:n,disabled:s,children:"Refresh Data"})]}),e.jsxs("div",{className:"relative bg-surface border border-border rounded-lg overflow-hidden",children:[e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{className:"bg-background border-b border-border",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider",children:"Name"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider",children:"Email"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider",children:"Role"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider",children:"Status"})]})}),e.jsx("tbody",{className:"divide-y divide-border",children:[{name:"John Doe",email:"john@example.com",role:"Admin",status:"Active"},{name:"Jane Smith",email:"jane@example.com",role:"User",status:"Active"},{name:"Bob Johnson",email:"bob@example.com",role:"User",status:"Inactive"},{name:"Alice Williams",email:"alice@example.com",role:"Manager",status:"Active"}].map((t,x)=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:t.name}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:t.email}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:t.role}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsx("span",{className:`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${t.status==="Active"?"bg-success/10 text-success":"bg-error/10 text-error"}`,children:t.status})})]},x))})]}),e.jsx(a,{isFetching:s,fullscreen:!1})]})]})}};var h,f,g;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    isFetching: true,
    size: 'lg',
    fullscreen: false,
    backdropOpacity: 30
  },
  render: args => <div className="relative w-full h-96 bg-surface border border-border rounded-lg flex items-center justify-center">
      <p className="text-text-secondary">Content behind overlay</p>
      <FetchingOverlay {...args} />
    </div>
}`,...(g=(f=i.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var v,y,N;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const [isFetching, setIsFetching] = useState(false);
    const handleFetch = () => {
      setIsFetching(true);
      setTimeout(() => {
        setIsFetching(false);
      }, 3000);
    };
    return <div className="relative w-full h-96 bg-surface border border-border rounded-lg p-8">
        <h2 className="text-xl font-bold mb-4">Interactive Example</h2>
        <p className="mb-6 text-text-secondary">
          Click the button to simulate a loading state for 3 seconds.
        </p>
        <Button onClick={handleFetch} disabled={isFetching}>
          {isFetching ? 'Loading...' : 'Start Loading'}
        </Button>
        <FetchingOverlay isFetching={isFetching} fullscreen={false} />
      </div>;
  }
}`,...(N=(y=d.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var j,w,F;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div className="relative w-full h-96 bg-surface border border-border rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Container Mode</h2>
        <p className="mb-4 text-text-secondary">
          The overlay only covers its parent container when fullscreen is false.
        </p>
        <div className="space-y-2">
          <div className="p-4 bg-background rounded border border-border">
            <p>Content item 1</p>
          </div>
          <div className="p-4 bg-background rounded border border-border">
            <p>Content item 2</p>
          </div>
          <div className="p-4 bg-background rounded border border-border">
            <p>Content item 3</p>
          </div>
        </div>
        <FetchingOverlay isFetching fullscreen={false} />
      </div>
      <p className="text-sm text-text-secondary">
        Content outside the container is not affected by the overlay
      </p>
    </div>
}`,...(F=(w=c.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var C,S,k;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const [isFetching, setIsFetching] = useState(false);
    return <div className="space-y-6">
        <div className="p-6 bg-surface border border-border rounded-lg">
          <h2 className="text-xl font-bold mb-4">Fullscreen Mode</h2>
          <p className="mb-6 text-text-secondary">
            Click the button to show a fullscreen overlay that covers the entire viewport.
          </p>
          <Button onClick={() => setIsFetching(!isFetching)}>
            {isFetching ? 'Hide Overlay' : 'Show Fullscreen Overlay'}
          </Button>
        </div>
        <FetchingOverlay isFetching={isFetching} fullscreen />
      </div>;
  }
}`,...(k=(S=m.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var L,O,I;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const [loadingCards, setLoadingCards] = useState<Record<number, boolean>>({});
    const handleCardLoad = (index: number) => {
      setLoadingCards({
        ...loadingCards,
        [index]: true
      });
      setTimeout(() => {
        setLoadingCards({
          ...loadingCards,
          [index]: false
        });
      }, 2000);
    };
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map(index => <div key={index} className="relative bg-surface border border-border rounded-lg p-6">
            <h3 className="text-lg font-bold mb-2">Card {index}</h3>
            <p className="text-text-secondary mb-4">
              This is some content in card {index}
            </p>
            <Button size="sm" onClick={() => handleCardLoad(index)} disabled={loadingCards[index]}>
              Load Data
            </Button>
            <FetchingOverlay isFetching={loadingCards[index] || false} fullscreen={false} size="md" />
          </div>)}
      </div>;
  }
}`,...(I=(O=u.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};var D,T,A;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
      }, 2500);
    };
    return <div className="max-w-md mx-auto">
        <div className="relative bg-surface border border-border rounded-lg p-6">
          <h2 className="text-xl font-bold mb-6">User Registration</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input type="text" className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary" placeholder="John Doe" disabled={isSubmitting} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input type="email" className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary" placeholder="john@example.com" disabled={isSubmitting} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input type="password" className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary" placeholder="••••••••" disabled={isSubmitting} />
            </div>
            <Button type="submit" fullWidth disabled={isSubmitting}>
              {isSubmitting ? 'Creating Account...' : 'Create Account'}
            </Button>
          </form>
          <FetchingOverlay isFetching={isSubmitting} fullscreen={false} backdropOpacity={40} />
        </div>
      </div>;
  }
}`,...(A=(T=p.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var B,z,R;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const [isLoading, setIsLoading] = useState(false);
    const refreshData = () => {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };
    return <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Users Table</h2>
          <Button onClick={refreshData} disabled={isLoading}>
            Refresh Data
          </Button>
        </div>
        <div className="relative bg-surface border border-border rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-background border-b border-border">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[{
              name: 'John Doe',
              email: 'john@example.com',
              role: 'Admin',
              status: 'Active'
            }, {
              name: 'Jane Smith',
              email: 'jane@example.com',
              role: 'User',
              status: 'Active'
            }, {
              name: 'Bob Johnson',
              email: 'bob@example.com',
              role: 'User',
              status: 'Inactive'
            }, {
              name: 'Alice Williams',
              email: 'alice@example.com',
              role: 'Manager',
              status: 'Active'
            }].map((user, index) => <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={\`inline-flex px-2 py-1 text-xs font-semibold rounded-full \${user.status === 'Active' ? 'bg-success/10 text-success' : 'bg-error/10 text-error'}\`}>
                      {user.status}
                    </span>
                  </td>
                </tr>)}
            </tbody>
          </table>
          <FetchingOverlay isFetching={isLoading} fullscreen={false} />
        </div>
      </div>;
  }
}`,...(R=(z=b.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};const Y=["Default","Interactive","ContainerMode","FullscreenMode","CardLoading","FormSubmission","DataTable"];export{u as CardLoading,c as ContainerMode,b as DataTable,i as Default,p as FormSubmission,m as FullscreenMode,d as Interactive,Y as __namedExportsOrder,X as default};
