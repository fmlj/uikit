import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as S}from"./index-ZH-6pyQh.js";import{P as y}from"./index-DLQJSg3W.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-_uLxnvdl.js";import"./useRipple-BuuTbn0W.js";import"./variants-C8qliDOr.js";import"./chevrons-right-Bto5ffh9.js";import"./createLucideIcon-BXJdBs6C.js";import"./chevron-left-BPVU9fuB.js";import"./ellipsis-BCji1NXI.js";import"./chevron-right-DY5KYsnV.js";const le={title:"Navigation/Pagination",component:y,tags:["autodocs"],argTypes:{total:{control:"number",description:"Total number of items"},current:{control:"number",description:"Current page number (controlled)"},defaultCurrent:{control:"number",description:"Default initial page number"},pageSize:{control:"number",description:"Number of items per page (controlled)"},defaultPageSize:{control:"number",description:"Default number of items per page"},color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"],description:"Theme color"},size:{control:"select",options:["xs","sm","md","lg"],description:"Size variant"},variant:{control:"select",options:["default","solid","soft"],description:"Visual style variant"},showSizeChanger:{control:"boolean",description:"Show page size selector"},showQuickJumper:{control:"boolean",description:"Show quick page jumper input"},showFirstLastButtons:{control:"boolean",description:"Show first and last page navigation buttons"},disabled:{control:"boolean",description:"Disable all interactions"}}},l={args:{total:100,defaultCurrent:1,defaultPageSize:10,color:"primary",size:"md",variant:"default"}},d={args:{total:200,defaultCurrent:5,defaultPageSize:10,color:"primary",showFirstLastButtons:!0}},m={args:{total:200,defaultCurrent:1,defaultPageSize:10,color:"primary",showSizeChanger:!0,pageSizeOptions:[10,20,50,100]}},u={args:{total:200,defaultCurrent:1,defaultPageSize:10,color:"primary",showQuickJumper:!0}},p={args:{total:200,defaultCurrent:3,defaultPageSize:20,color:"primary",showTotal:(r,a)=>`${a[0]}-${a[1]} of ${r} items`}},g={args:{total:500,defaultCurrent:5,defaultPageSize:20,color:"primary",showSizeChanger:!0,showQuickJumper:!0,showFirstLastButtons:!0,pageSizeOptions:[10,20,50,100],showTotal:(r,a)=>`Showing ${a[0]}-${a[1]} of ${r} items`}},h={args:{total:100,defaultCurrent:3,defaultPageSize:10,color:"primary",disabled:!0,showSizeChanger:!0,showQuickJumper:!0}},x={render:()=>{const[r,a]=S.useState(1),[o,i]=S.useState(10),n=200,c=(t,s)=>{a(t),s!==o&&i(s)};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>a(1),className:"px-4 py-2 bg-primary text-white rounded hover:bg-primary/90",children:"First Page"}),e.jsx("button",{onClick:()=>a(Math.ceil(r/2)),className:"px-4 py-2 bg-primary text-white rounded hover:bg-primary/90",children:"Jump Back"}),e.jsx("button",{onClick:()=>a(Math.ceil(n/o)),className:"px-4 py-2 bg-primary text-white rounded hover:bg-primary/90",children:"Last Page"})]}),e.jsxs("div",{className:"text-sm text-text-secondary",children:["Current page: ",e.jsx("strong",{children:r})," | Page size: ",e.jsx("strong",{children:o})]}),e.jsx(y,{total:n,current:r,pageSize:o,onChange:c,onShowSizeChange:c,color:"primary",showSizeChanger:!0,showQuickJumper:!0,showFirstLastButtons:!0,showTotal:(t,s)=>`${s[0]}-${s[1]} of ${t} items`})]})}},f={render:()=>{const[r,a]=S.useState(1),[o,i]=S.useState(10),n=156,c=Array.from({length:o},(t,s)=>({id:(r-1)*o+s+1,name:`User ${(r-1)*o+s+1}`,email:`user${(r-1)*o+s+1}@example.com`,status:["Active","Inactive","Pending"][Math.floor(Math.random()*3)]}));return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"border border-border rounded-lg overflow-hidden",children:e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{className:"bg-surface border-b border-border",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-3 text-left text-sm font-semibold",children:"ID"}),e.jsx("th",{className:"px-4 py-3 text-left text-sm font-semibold",children:"Name"}),e.jsx("th",{className:"px-4 py-3 text-left text-sm font-semibold",children:"Email"}),e.jsx("th",{className:"px-4 py-3 text-left text-sm font-semibold",children:"Status"})]})}),e.jsx("tbody",{children:c.map(t=>e.jsxs("tr",{className:"border-b border-border last:border-0",children:[e.jsx("td",{className:"px-4 py-3 text-sm",children:t.id}),e.jsx("td",{className:"px-4 py-3 text-sm",children:t.name}),e.jsx("td",{className:"px-4 py-3 text-sm text-text-secondary",children:t.email}),e.jsx("td",{className:"px-4 py-3 text-sm",children:e.jsx("span",{className:`inline-flex px-2 py-1 rounded text-xs font-medium ${t.status==="Active"?"bg-success/10 text-success":t.status==="Inactive"?"bg-error/10 text-error":"bg-warning/10 text-warning"}`,children:t.status})})]},t.id))})]})}),e.jsx(y,{total:n,current:r,pageSize:o,onChange:(t,s)=>{a(t),i(s)},color:"primary",showSizeChanger:!0,showTotal:(t,s)=>`${s[0]}-${s[1]} of ${t} items`,pageSizeOptions:[5,10,20,50]})]})}},b={render:()=>{const r=["default","primary","secondary","accent","success","error","warning","info"],a=["default","solid","soft"],o=["xs","sm","md","lg"];return e.jsx("div",{className:"space-y-8",children:a.map(i=>e.jsxs("div",{children:[e.jsxs("h3",{className:"text-sm font-semibold mb-4 capitalize",children:[i," Variant"]}),e.jsx("div",{className:"space-y-6",children:o.map(n=>e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-secondary mb-2 uppercase",children:n}),e.jsx("div",{className:"space-y-3",children:r.map(c=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-xs text-text-secondary w-20 capitalize",children:c}),e.jsx(y,{total:100,defaultCurrent:1,defaultPageSize:10,color:c,variant:i,size:n})]},`${i}-${n}-${c}`))})]},n))})]},i))})}};var z,w,v;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    total: 100,
    defaultCurrent: 1,
    defaultPageSize: 10,
    color: 'primary',
    size: 'md',
    variant: 'default'
  }
}`,...(v=(w=l.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var C,N,j;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    total: 200,
    defaultCurrent: 5,
    defaultPageSize: 10,
    color: 'primary',
    showFirstLastButtons: true
  }
}`,...(j=(N=d.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var P,$,k;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    total: 200,
    defaultCurrent: 1,
    defaultPageSize: 10,
    color: 'primary',
    showSizeChanger: true,
    pageSizeOptions: [10, 20, 50, 100]
  }
}`,...(k=($=m.parameters)==null?void 0:$.docs)==null?void 0:k.source}}};var F,T,J;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    total: 200,
    defaultCurrent: 1,
    defaultPageSize: 10,
    color: 'primary',
    showQuickJumper: true
  }
}`,...(J=(T=u.parameters)==null?void 0:T.docs)==null?void 0:J.source}}};var M,B,D;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    total: 200,
    defaultCurrent: 3,
    defaultPageSize: 20,
    color: 'primary',
    showTotal: (total: number, range: [number, number]) => \`\${range[0]}-\${range[1]} of \${total} items\`
  }
}`,...(D=(B=p.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var L,Q,W;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    total: 500,
    defaultCurrent: 5,
    defaultPageSize: 20,
    color: 'primary',
    showSizeChanger: true,
    showQuickJumper: true,
    showFirstLastButtons: true,
    pageSizeOptions: [10, 20, 50, 100],
    showTotal: (total: number, range: [number, number]) => \`Showing \${range[0]}-\${range[1]} of \${total} items\`
  }
}`,...(W=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var O,A,I;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    total: 100,
    defaultCurrent: 3,
    defaultPageSize: 10,
    color: 'primary',
    disabled: true,
    showSizeChanger: true,
    showQuickJumper: true
  }
}`,...(I=(A=h.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var E,_,V;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const total = 200;
    const handleChange = (page: number, newPageSize: number) => {
      setCurrent(page);
      if (newPageSize !== pageSize) {
        setPageSize(newPageSize);
      }
    };
    return <div className="space-y-4">
        <div className="flex gap-2">
          <button onClick={() => setCurrent(1)} className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90">
            First Page
          </button>
          <button onClick={() => setCurrent(Math.ceil(current / 2))} className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90">
            Jump Back
          </button>
          <button onClick={() => setCurrent(Math.ceil(total / pageSize))} className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90">
            Last Page
          </button>
        </div>
        <div className="text-sm text-text-secondary">
          Current page: <strong>{current}</strong> | Page size: <strong>{pageSize}</strong>
        </div>
        <Pagination total={total} current={current} pageSize={pageSize} onChange={handleChange} onShowSizeChange={handleChange} color="primary" showSizeChanger showQuickJumper showFirstLastButtons showTotal={(total, range) => \`\${range[0]}-\${range[1]} of \${total} items\`} />
      </div>;
  }
}`,...(V=(_=x.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};var U,q,R;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const total = 156;
    const data = Array.from({
      length: pageSize
    }, (_, i) => ({
      id: (current - 1) * pageSize + i + 1,
      name: \`User \${(current - 1) * pageSize + i + 1}\`,
      email: \`user\${(current - 1) * pageSize + i + 1}@example.com\`,
      status: ['Active', 'Inactive', 'Pending'][Math.floor(Math.random() * 3)]
    }));
    return <div className="space-y-4">
        <div className="border border-border rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-surface border-b border-border">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold">ID</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Name</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Email</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map(row => <tr key={row.id} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 text-sm">{row.id}</td>
                  <td className="px-4 py-3 text-sm">{row.name}</td>
                  <td className="px-4 py-3 text-sm text-text-secondary">{row.email}</td>
                  <td className="px-4 py-3 text-sm">
                    <span className={\`inline-flex px-2 py-1 rounded text-xs font-medium \${row.status === 'Active' ? 'bg-success/10 text-success' : row.status === 'Inactive' ? 'bg-error/10 text-error' : 'bg-warning/10 text-warning'}\`}>
                      {row.status}
                    </span>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
        <Pagination total={total} current={current} pageSize={pageSize} onChange={(page, size) => {
        setCurrent(page);
        setPageSize(size);
      }} color="primary" showSizeChanger showTotal={(total, range) => \`\${range[0]}-\${range[1]} of \${total} items\`} pageSizeOptions={[5, 10, 20, 50]} />
      </div>;
  }
}`,...(R=(q=f.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var G,H,K;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    const colors = ['default', 'primary', 'secondary', 'accent', 'success', 'error', 'warning', 'info'] as const;
    const variants = ['default', 'solid', 'soft'] as const;
    const sizes = ['xs', 'sm', 'md', 'lg'] as const;
    return <div className="space-y-8">
        {variants.map(variant => <div key={variant}>
            <h3 className="text-sm font-semibold mb-4 capitalize">{variant} Variant</h3>
            <div className="space-y-6">
              {sizes.map(size => <div key={size}>
                  <p className="text-xs text-text-secondary mb-2 uppercase">{size}</p>
                  <div className="space-y-3">
                    {colors.map(color => <div key={\`\${variant}-\${size}-\${color}\`} className="flex items-center gap-3">
                        <span className="text-xs text-text-secondary w-20 capitalize">{color}</span>
                        <Pagination total={100} defaultCurrent={1} defaultPageSize={10} color={color} variant={variant} size={size} />
                      </div>)}
                  </div>
                </div>)}
            </div>
          </div>)}
      </div>;
  }
}`,...(K=(H=b.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};const de=["Default","WithFirstLastButtons","WithSizeChanger","WithQuickJumper","WithShowTotal","FullFeatured","Disabled","ControlledMode","DataTable","ColorSizeMatrix"];export{b as ColorSizeMatrix,x as ControlledMode,f as DataTable,l as Default,h as Disabled,g as FullFeatured,d as WithFirstLastButtons,u as WithQuickJumper,p as WithShowTotal,m as WithSizeChanger,de as __namedExportsOrder,le as default};
