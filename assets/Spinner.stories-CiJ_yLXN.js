import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as s}from"./index-BoArNvwV.js";import"./utils-_uLxnvdl.js";import"./index-ZH-6pyQh.js";import"./_commonjsHelpers-CqkleIqs.js";import"./variants-C8qliDOr.js";const Q={title:"Feedback/Spinner",component:s,tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg"],description:"Spinner size"},color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"],description:"Spinner color"},label:{control:"text",description:"Optional label text displayed below the spinner"}}},n={args:{size:"sm",color:"primary"}},i={render:()=>e.jsxs("div",{className:"flex gap-8 items-center flex-wrap",children:[e.jsx(s,{size:"xs"}),e.jsx(s,{size:"sm"}),e.jsx(s,{size:"md"}),e.jsx(s,{size:"lg"})]})},t={render:()=>e.jsxs("div",{className:"flex gap-6 flex-wrap items-center",children:[e.jsx(s,{color:"default"}),e.jsx(s,{color:"primary"}),e.jsx(s,{color:"secondary"}),e.jsx(s,{color:"accent"}),e.jsx(s,{color:"success"}),e.jsx(s,{color:"error"}),e.jsx(s,{color:"warning"}),e.jsx(s,{color:"info"})]})},l={render:()=>e.jsxs("div",{className:"flex gap-8 flex-wrap items-start",children:[e.jsx(s,{label:"Loading..."}),e.jsx(s,{label:"Processing...",color:"primary"}),e.jsx(s,{label:"Uploading...",color:"success"}),e.jsx(s,{label:"Deleting...",color:"error"})]})},c={render:()=>e.jsxs("div",{className:"flex gap-8 flex-wrap items-start",children:[e.jsx(s,{size:"xs",label:"Extra Small"}),e.jsx(s,{size:"sm",label:"Small"}),e.jsx(s,{size:"md",label:"Medium"}),e.jsx(s,{size:"lg",label:"Large"})]})},o={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-3",children:"Extra Small"}),e.jsx("div",{className:"flex gap-4 flex-wrap items-center",children:["default","primary","secondary","accent","success","error","warning","info"].map(r=>e.jsx(s,{size:"xs",color:r},r))})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-3",children:"Small"}),e.jsx("div",{className:"flex gap-4 flex-wrap items-center",children:["default","primary","secondary","accent","success","error","warning","info"].map(r=>e.jsx(s,{size:"sm",color:r},r))})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-3",children:"Medium"}),e.jsx("div",{className:"flex gap-4 flex-wrap items-center",children:["default","primary","secondary","accent","success","error","warning","info"].map(r=>e.jsx(s,{size:"md",color:r},r))})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-3",children:"Large"}),e.jsx("div",{className:"flex gap-4 flex-wrap items-center",children:["default","primary","secondary","accent","success","error","warning","info"].map(r=>e.jsx(s,{size:"lg",color:r},r))})]})]})},d={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4",children:"Loading States"}),e.jsx("div",{className:"space-y-4",children:e.jsx("div",{className:"p-4 border rounded-lg flex items-center justify-center",children:e.jsx(s,{size:"md",color:"primary",label:"Loading content..."})})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4",children:"Button Loading States"}),e.jsxs("div",{className:"flex gap-4 flex-wrap",children:[e.jsxs("button",{className:"px-4 py-2 bg-blue-600 text-white rounded-md flex items-center gap-2",children:[e.jsx(s,{size:"xs",color:"default"}),e.jsx("span",{children:"Loading..."})]}),e.jsxs("button",{className:"px-4 py-2 bg-green-600 text-white rounded-md flex items-center gap-2",children:[e.jsx(s,{size:"xs",color:"default"}),e.jsx("span",{children:"Saving..."})]}),e.jsxs("button",{className:"px-4 py-2 bg-red-600 text-white rounded-md flex items-center gap-2",children:[e.jsx(s,{size:"xs",color:"default"}),e.jsx("span",{children:"Deleting..."})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4",children:"Inline Spinners"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{size:"xs",color:"primary"}),e.jsx("span",{className:"text-sm",children:"Fetching data..."})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{size:"xs",color:"success"}),e.jsx("span",{className:"text-sm",children:"Upload in progress..."})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{size:"xs",color:"warning"}),e.jsx("span",{className:"text-sm",children:"Processing request..."})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4",children:"Card Loading State"}),e.jsx("div",{className:"p-6 border rounded-lg flex flex-col items-center justify-center h-64",children:e.jsx(s,{size:"lg",color:"primary",label:"Loading dashboard..."})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4",children:"Status Indicators"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 border rounded-lg flex items-center gap-3",children:[e.jsx(s,{size:"sm",color:"primary"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-sm",children:"Synchronizing"}),e.jsx("p",{className:"text-xs text-gray-500",children:"Syncing your data..."})]})]}),e.jsxs("div",{className:"p-4 border rounded-lg flex items-center gap-3",children:[e.jsx(s,{size:"sm",color:"success"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-sm",children:"Processing"}),e.jsx("p",{className:"text-xs text-gray-500",children:"Please wait..."})]})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4",children:"Overlay Loading"}),e.jsxs("div",{className:"relative p-6 border rounded-lg h-48",children:[e.jsx("div",{className:"absolute inset-0 bg-white/80 flex items-center justify-center rounded-lg",children:e.jsx(s,{size:"lg",color:"primary",label:"Loading..."})}),e.jsx("p",{className:"text-gray-400",children:"Content underneath"})]})]})]})},m={render:()=>e.jsxs("div",{className:"flex gap-6 flex-wrap",children:[e.jsxs("div",{className:"text-center",children:[e.jsx(s,{color:"primary",size:"md"}),e.jsx("p",{className:"text-xs mt-2 text-gray-600",children:"Primary"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(s,{color:"success",size:"md"}),e.jsx("p",{className:"text-xs mt-2 text-gray-600",children:"Success"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(s,{color:"error",size:"md"}),e.jsx("p",{className:"text-xs mt-2 text-gray-600",children:"Error"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(s,{color:"warning",size:"md"}),e.jsx("p",{className:"text-xs mt-2 text-gray-600",children:"Warning"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(s,{color:"info",size:"md"}),e.jsx("p",{className:"text-xs mt-2 text-gray-600",children:"Info"})]})]})},x={render:()=>{const r=["default","primary","secondary","accent","success","error","warning","info"],p=["xs","sm","md","lg"];return e.jsx("div",{className:"space-y-6",children:e.jsxs("table",{className:"border-collapse w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-2 text-left text-sm text-gray-500",children:"Color \\ Size"}),p.map(a=>e.jsx("th",{className:"p-2 text-center text-sm text-gray-500",children:a},a))]})}),e.jsx("tbody",{children:r.map(a=>e.jsxs("tr",{children:[e.jsx("td",{className:"p-2 text-sm font-medium",children:a}),p.map(g=>e.jsx("td",{className:"p-2 text-center",children:e.jsx(s,{color:a,size:g})},g))]},a))})]})})}};var h,f,u;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    color: 'primary'
  }
}`,...(u=(f=n.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var v,j,N;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="flex gap-8 items-center flex-wrap">
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
}`,...(N=(j=i.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var b,y,S;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="flex gap-6 flex-wrap items-center">
      <Spinner color="default" />
      <Spinner color="primary" />
      <Spinner color="secondary" />
      <Spinner color="accent" />
      <Spinner color="success" />
      <Spinner color="error" />
      <Spinner color="warning" />
      <Spinner color="info" />
    </div>
}`,...(S=(y=t.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var z,w,L;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="flex gap-8 flex-wrap items-start">
      <Spinner label="Loading..." />
      <Spinner label="Processing..." color="primary" />
      <Spinner label="Uploading..." color="success" />
      <Spinner label="Deleting..." color="error" />
    </div>
}`,...(L=(w=l.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var C,P,E;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="flex gap-8 flex-wrap items-start">
      <Spinner size="xs" label="Extra Small" />
      <Spinner size="sm" label="Small" />
      <Spinner size="md" label="Medium" />
      <Spinner size="lg" label="Large" />
    </div>
}`,...(E=(P=c.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var k,M,W;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold mb-3">Extra Small</h3>
        <div className="flex gap-4 flex-wrap items-center">
          {(['default', 'primary', 'secondary', 'accent', 'success', 'error', 'warning', 'info'] as const).map(color => <Spinner key={color} size="xs" color={color} />)}
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-3">Small</h3>
        <div className="flex gap-4 flex-wrap items-center">
          {(['default', 'primary', 'secondary', 'accent', 'success', 'error', 'warning', 'info'] as const).map(color => <Spinner key={color} size="sm" color={color} />)}
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-3">Medium</h3>
        <div className="flex gap-4 flex-wrap items-center">
          {(['default', 'primary', 'secondary', 'accent', 'success', 'error', 'warning', 'info'] as const).map(color => <Spinner key={color} size="md" color={color} />)}
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-3">Large</h3>
        <div className="flex gap-4 flex-wrap items-center">
          {(['default', 'primary', 'secondary', 'accent', 'success', 'error', 'warning', 'info'] as const).map(color => <Spinner key={color} size="lg" color={color} />)}
        </div>
      </div>
    </div>
}`,...(W=(M=o.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var I,A,D;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <div>
        <h3 className="text-sm font-semibold mb-4">Loading States</h3>
        <div className="space-y-4">
          <div className="p-4 border rounded-lg flex items-center justify-center">
            <Spinner size="md" color="primary" label="Loading content..." />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-4">Button Loading States</h3>
        <div className="flex gap-4 flex-wrap">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md flex items-center gap-2">
            <Spinner size="xs" color="default" />
            <span>Loading...</span>
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-md flex items-center gap-2">
            <Spinner size="xs" color="default" />
            <span>Saving...</span>
          </button>
          <button className="px-4 py-2 bg-red-600 text-white rounded-md flex items-center gap-2">
            <Spinner size="xs" color="default" />
            <span>Deleting...</span>
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-4">Inline Spinners</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Spinner size="xs" color="primary" />
            <span className="text-sm">Fetching data...</span>
          </div>
          <div className="flex items-center gap-2">
            <Spinner size="xs" color="success" />
            <span className="text-sm">Upload in progress...</span>
          </div>
          <div className="flex items-center gap-2">
            <Spinner size="xs" color="warning" />
            <span className="text-sm">Processing request...</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-4">Card Loading State</h3>
        <div className="p-6 border rounded-lg flex flex-col items-center justify-center h-64">
          <Spinner size="lg" color="primary" label="Loading dashboard..." />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-4">Status Indicators</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg flex items-center gap-3">
            <Spinner size="sm" color="primary" />
            <div>
              <p className="font-medium text-sm">Synchronizing</p>
              <p className="text-xs text-gray-500">Syncing your data...</p>
            </div>
          </div>
          <div className="p-4 border rounded-lg flex items-center gap-3">
            <Spinner size="sm" color="success" />
            <div>
              <p className="font-medium text-sm">Processing</p>
              <p className="text-xs text-gray-500">Please wait...</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-4">Overlay Loading</h3>
        <div className="relative p-6 border rounded-lg h-48">
          <div className="absolute inset-0 bg-white/80 flex items-center justify-center rounded-lg">
            <Spinner size="lg" color="primary" label="Loading..." />
          </div>
          <p className="text-gray-400">Content underneath</p>
        </div>
      </div>
    </div>
}`,...(D=(A=d.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var O,U,F;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div className="flex gap-6 flex-wrap">
      <div className="text-center">
        <Spinner color="primary" size="md" />
        <p className="text-xs mt-2 text-gray-600">Primary</p>
      </div>
      <div className="text-center">
        <Spinner color="success" size="md" />
        <p className="text-xs mt-2 text-gray-600">Success</p>
      </div>
      <div className="text-center">
        <Spinner color="error" size="md" />
        <p className="text-xs mt-2 text-gray-600">Error</p>
      </div>
      <div className="text-center">
        <Spinner color="warning" size="md" />
        <p className="text-xs mt-2 text-gray-600">Warning</p>
      </div>
      <div className="text-center">
        <Spinner color="info" size="md" />
        <p className="text-xs mt-2 text-gray-600">Info</p>
      </div>
    </div>
}`,...(F=(U=m.parameters)==null?void 0:U.docs)==null?void 0:F.source}}};var R,q,B;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const colors = ['default', 'primary', 'secondary', 'accent', 'success', 'error', 'warning', 'info'] as const;
    const sizes = ['xs', 'sm', 'md', 'lg'] as const;
    return <div className="space-y-6">
        <table className="border-collapse w-full">
          <thead>
            <tr>
              <th className="p-2 text-left text-sm text-gray-500">Color \\ Size</th>
              {sizes.map(s => <th key={s} className="p-2 text-center text-sm text-gray-500">{s}</th>)}
            </tr>
          </thead>
          <tbody>
            {colors.map(c => <tr key={c}>
                <td className="p-2 text-sm font-medium">{c}</td>
                {sizes.map(s => <td key={s} className="p-2 text-center">
                    <Spinner color={c} size={s} />
                  </td>)}
              </tr>)}
          </tbody>
        </table>
      </div>;
  }
}`,...(B=(q=x.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};const V=["Primary","AllSizes","AllColors","WithLabels","SizeWithLabels","ColorMatrix","RealWorldExamples","CustomColors","ColorSizeMatrix"];export{t as AllColors,i as AllSizes,o as ColorMatrix,x as ColorSizeMatrix,m as CustomColors,n as Primary,d as RealWorldExamples,c as SizeWithLabels,l as WithLabels,V as __namedExportsOrder,Q as default};
