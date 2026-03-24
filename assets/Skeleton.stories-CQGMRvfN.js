import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as B,a as J}from"./utils-_uLxnvdl.js";import{R as K}from"./index-ZH-6pyQh.js";import{c as Q}from"./variants-C8qliDOr.js";import"./_commonjsHelpers-CqkleIqs.js";const X=J("animate-pulse rounded",{variants:{size:{xs:"h-3",sm:"h-4",md:"h-5",lg:"h-6"},color:Q},defaultVariants:{size:"md",color:"default"}}),s=K.memo(({color:a="default",size:l="md",className:F,circle:O=!1})=>e.jsx("div",{"data-slot":"root",role:"status","aria-busy":"true","aria-label":"Loading",className:B("skeleton_root",X({size:l,color:a}),"bg-slot-20",O&&"rounded-full aspect-square",F)}));s.displayName="Skeleton";s.__docgenInfo={description:"",methods:[],displayName:"Skeleton",props:{color:{defaultValue:{value:'"default"',computed:!1},required:!1},size:{defaultValue:{value:'"md"',computed:!1},required:!1},circle:{defaultValue:{value:"false",computed:!1},required:!1}}};const ae={title:"Feedback/Skeleton",component:s,tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg"],description:"Skeleton height size"},color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"],description:"Skeleton color"},circle:{control:"boolean",description:"Display as a circle (for avatars)"}}},c={args:{size:"md",color:"default",className:"w-full"}},n={render:()=>e.jsxs("div",{className:"space-y-4 w-full",children:[e.jsx(s,{size:"xs",className:"w-full"}),e.jsx(s,{size:"sm",className:"w-full"}),e.jsx(s,{size:"md",className:"w-full"}),e.jsx(s,{size:"lg",className:"w-full"})]})},r={render:()=>e.jsxs("div",{className:"space-y-3 w-full",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{color:"default",className:"w-full"}),e.jsx("span",{className:"text-xs text-gray-500 min-w-[60px]",children:"default"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{color:"primary",className:"w-full"}),e.jsx("span",{className:"text-xs text-gray-500 min-w-[60px]",children:"primary"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{color:"secondary",className:"w-full"}),e.jsx("span",{className:"text-xs text-gray-500 min-w-[60px]",children:"secondary"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{color:"accent",className:"w-full"}),e.jsx("span",{className:"text-xs text-gray-500 min-w-[60px]",children:"accent"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{color:"success",className:"w-full"}),e.jsx("span",{className:"text-xs text-gray-500 min-w-[60px]",children:"success"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{color:"error",className:"w-full"}),e.jsx("span",{className:"text-xs text-gray-500 min-w-[60px]",children:"error"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{color:"warning",className:"w-full"}),e.jsx("span",{className:"text-xs text-gray-500 min-w-[60px]",children:"warning"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{color:"info",className:"w-full"}),e.jsx("span",{className:"text-xs text-gray-500 min-w-[60px]",children:"info"})]})]})},m={render:()=>e.jsxs("div",{className:"flex gap-6 items-center flex-wrap",children:[e.jsx(s,{circle:!0,size:"xs",className:"w-8"}),e.jsx(s,{circle:!0,size:"sm",className:"w-10"}),e.jsx(s,{circle:!0,size:"md",className:"w-12"}),e.jsx(s,{circle:!0,size:"lg",className:"w-16"})]})},i={render:()=>e.jsx("div",{className:"flex gap-4 items-center flex-wrap",children:["default","primary","secondary","accent","success","error","warning","info"].map(a=>e.jsx(s,{circle:!0,color:a,className:"w-12"},a))})},t={render:()=>e.jsxs("div",{className:"space-y-3",children:[e.jsx(s,{className:"w-full"}),e.jsx(s,{className:"w-3/4"}),e.jsx(s,{className:"w-1/2"}),e.jsx(s,{className:"w-1/3"}),e.jsx(s,{className:"w-1/4"})]})},d={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4",children:"User Profile Card Loading"}),e.jsx("div",{className:"border rounded-lg p-6 max-w-sm",children:e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(s,{circle:!0,className:"w-16 h-16"}),e.jsxs("div",{className:"flex-1 space-y-2",children:[e.jsx(s,{className:"w-3/4 h-4"}),e.jsx(s,{className:"w-1/2 h-3"})]})]})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4",children:"Article Loading"}),e.jsxs("div",{className:"border rounded-lg p-6 max-w-2xl",children:[e.jsx(s,{className:"w-3/4 h-8 mb-4"}),e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx(s,{circle:!0,className:"w-10 h-10"}),e.jsxs("div",{className:"flex-1 space-y-2",children:[e.jsx(s,{className:"w-32 h-3"}),e.jsx(s,{className:"w-24 h-3"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{className:"w-full h-3"}),e.jsx(s,{className:"w-full h-3"}),e.jsx(s,{className:"w-full h-3"}),e.jsx(s,{className:"w-4/5 h-3"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4",children:"Card Grid Loading"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[1,2,3].map(a=>e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx(s,{className:"w-full h-32 mb-3 rounded"}),e.jsx(s,{className:"w-3/4 h-4 mb-2"}),e.jsx(s,{className:"w-full h-3 mb-2"}),e.jsx(s,{className:"w-5/6 h-3"})]},a))})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4",children:"List Item Loading"}),e.jsx("div",{className:"border rounded-lg divide-y max-w-lg",children:[1,2,3,4].map(a=>e.jsxs("div",{className:"p-4 flex items-center gap-3",children:[e.jsx(s,{circle:!0,className:"w-12 h-12"}),e.jsxs("div",{className:"flex-1 space-y-2",children:[e.jsx(s,{className:"w-2/3 h-4"}),e.jsx(s,{className:"w-1/2 h-3"})]})]},a))})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4",children:"Table Loading"}),e.jsxs("div",{className:"border rounded-lg overflow-hidden",children:[e.jsx("div",{className:"bg-gray-50 p-4",children:e.jsxs("div",{className:"grid grid-cols-4 gap-4",children:[e.jsx(s,{className:"h-4"}),e.jsx(s,{className:"h-4"}),e.jsx(s,{className:"h-4"}),e.jsx(s,{className:"h-4"})]})}),e.jsx("div",{className:"divide-y",children:[1,2,3,4,5].map(a=>e.jsx("div",{className:"p-4",children:e.jsxs("div",{className:"grid grid-cols-4 gap-4",children:[e.jsx(s,{className:"h-3"}),e.jsx(s,{className:"h-3"}),e.jsx(s,{className:"h-3"}),e.jsx(s,{className:"h-3"})]})},a))})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4",children:"Comment Thread Loading"}),e.jsx("div",{className:"space-y-4 max-w-2xl",children:[1,2,3].map(a=>e.jsxs("div",{className:"flex gap-3",children:[e.jsx(s,{circle:!0,className:"w-10 h-10"}),e.jsxs("div",{className:"flex-1 border rounded-lg p-4 space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{className:"w-24 h-3"}),e.jsx(s,{className:"w-16 h-3"})]}),e.jsx(s,{className:"w-full h-3"}),e.jsx(s,{className:"w-full h-3"}),e.jsx(s,{className:"w-3/4 h-3"})]})]},a))})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4",children:"Dashboard Widget Loading"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:[1,2,3,4].map(a=>e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx(s,{className:"w-20 h-3 mb-4"}),e.jsx(s,{className:"w-full h-10 mb-2"}),e.jsx(s,{className:"w-16 h-3"})]},a))})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4",children:"Navigation Loading"}),e.jsxs("div",{className:"border rounded-lg p-4 space-y-2 max-w-xs",children:[e.jsx(s,{className:"w-full h-10"}),e.jsx(s,{className:"w-full h-10"}),e.jsx(s,{className:"w-full h-10"}),e.jsx(s,{className:"w-full h-10"}),e.jsx(s,{className:"w-full h-10"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4",children:"Hero Section Loading"}),e.jsx("div",{className:"border rounded-lg p-8 max-w-4xl",children:e.jsxs("div",{className:"text-center space-y-4",children:[e.jsx(s,{className:"w-2/3 h-12 mx-auto"}),e.jsx(s,{className:"w-4/5 h-6 mx-auto"}),e.jsx(s,{className:"w-3/4 h-4 mx-auto"}),e.jsxs("div",{className:"flex justify-center gap-4 mt-6",children:[e.jsx(s,{className:"w-32 h-10"}),e.jsx(s,{className:"w-32 h-10"})]})]})})]})]})},o={render:()=>e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-xs font-semibold mb-2 text-gray-500",children:"Custom Heights"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{className:"w-full h-2"}),e.jsx(s,{className:"w-full h-4"}),e.jsx(s,{className:"w-full h-8"}),e.jsx(s,{className:"w-full h-16"}),e.jsx(s,{className:"w-full h-32"})]})]})})},x={render:()=>e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsx(s,{circle:!0,className:"w-6 h-6"}),e.jsx(s,{circle:!0,className:"w-8 h-8"}),e.jsx(s,{circle:!0,className:"w-10 h-10"}),e.jsx(s,{circle:!0,className:"w-12 h-12"}),e.jsx(s,{circle:!0,className:"w-16 h-16"}),e.jsx(s,{circle:!0,className:"w-20 h-20"}),e.jsx(s,{circle:!0,className:"w-24 h-24"})]})},N={render:()=>{const a=["default","primary","secondary","accent","success","error","warning","info"];return e.jsx("div",{className:"space-y-6",children:e.jsxs("table",{className:"border-collapse w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-2 text-left text-sm text-gray-500",children:"Color"}),e.jsx("th",{className:"p-2 text-left text-sm text-gray-500",children:"Example"})]})}),e.jsx("tbody",{children:a.map(l=>e.jsxs("tr",{children:[e.jsx("td",{className:"p-2 text-sm font-medium",children:l}),e.jsx("td",{className:"p-2",children:e.jsx(s,{color:l,className:"h-4 w-32"})})]},l))})]})})}};var h,p,u;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    size: 'md',
    color: 'default',
    className: 'w-full'
  }
}`,...(u=(p=c.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var f,w,v;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-full">
      <Skeleton size="xs" className="w-full" />
      <Skeleton size="sm" className="w-full" />
      <Skeleton size="md" className="w-full" />
      <Skeleton size="lg" className="w-full" />
    </div>
}`,...(v=(w=n.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var g,j,S;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="space-y-3 w-full">
      <div className="flex items-center gap-2">
        <Skeleton color="default" className="w-full" />
        <span className="text-xs text-gray-500 min-w-[60px]">default</span>
      </div>
      <div className="flex items-center gap-2">
        <Skeleton color="primary" className="w-full" />
        <span className="text-xs text-gray-500 min-w-[60px]">primary</span>
      </div>
      <div className="flex items-center gap-2">
        <Skeleton color="secondary" className="w-full" />
        <span className="text-xs text-gray-500 min-w-[60px]">secondary</span>
      </div>
      <div className="flex items-center gap-2">
        <Skeleton color="accent" className="w-full" />
        <span className="text-xs text-gray-500 min-w-[60px]">accent</span>
      </div>
      <div className="flex items-center gap-2">
        <Skeleton color="success" className="w-full" />
        <span className="text-xs text-gray-500 min-w-[60px]">success</span>
      </div>
      <div className="flex items-center gap-2">
        <Skeleton color="error" className="w-full" />
        <span className="text-xs text-gray-500 min-w-[60px]">error</span>
      </div>
      <div className="flex items-center gap-2">
        <Skeleton color="warning" className="w-full" />
        <span className="text-xs text-gray-500 min-w-[60px]">warning</span>
      </div>
      <div className="flex items-center gap-2">
        <Skeleton color="info" className="w-full" />
        <span className="text-xs text-gray-500 min-w-[60px]">info</span>
      </div>
    </div>
}`,...(S=(j=r.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var k,y,b;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div className="flex gap-6 items-center flex-wrap">
      <Skeleton circle size="xs" className="w-8" />
      <Skeleton circle size="sm" className="w-10" />
      <Skeleton circle size="md" className="w-12" />
      <Skeleton circle size="lg" className="w-16" />
    </div>
}`,...(b=(y=m.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var z,C,L;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4 items-center flex-wrap">
      {(['default', 'primary', 'secondary', 'accent', 'success', 'error', 'warning', 'info'] as const).map(color => <Skeleton key={color} circle color={color} className="w-12" />)}
    </div>
}`,...(L=(C=i.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var A,E,V;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div className="space-y-3">
      <Skeleton className="w-full" />
      <Skeleton className="w-3/4" />
      <Skeleton className="w-1/2" />
      <Skeleton className="w-1/3" />
      <Skeleton className="w-1/4" />
    </div>
}`,...(V=(E=t.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var W,D,R;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <div>
        <h3 className="text-sm font-semibold mb-4">User Profile Card Loading</h3>
        <div className="border rounded-lg p-6 max-w-sm">
          <div className="flex items-center gap-4">
            <Skeleton circle className="w-16 h-16" />
            <div className="flex-1 space-y-2">
              <Skeleton className="w-3/4 h-4" />
              <Skeleton className="w-1/2 h-3" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-4">Article Loading</h3>
        <div className="border rounded-lg p-6 max-w-2xl">
          <Skeleton className="w-3/4 h-8 mb-4" />
          <div className="flex items-center gap-3 mb-4">
            <Skeleton circle className="w-10 h-10" />
            <div className="flex-1 space-y-2">
              <Skeleton className="w-32 h-3" />
              <Skeleton className="w-24 h-3" />
            </div>
          </div>
          <div className="space-y-2">
            <Skeleton className="w-full h-3" />
            <Skeleton className="w-full h-3" />
            <Skeleton className="w-full h-3" />
            <Skeleton className="w-4/5 h-3" />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-4">Card Grid Loading</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map(i => <div key={i} className="border rounded-lg p-4">
              <Skeleton className="w-full h-32 mb-3 rounded" />
              <Skeleton className="w-3/4 h-4 mb-2" />
              <Skeleton className="w-full h-3 mb-2" />
              <Skeleton className="w-5/6 h-3" />
            </div>)}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-4">List Item Loading</h3>
        <div className="border rounded-lg divide-y max-w-lg">
          {[1, 2, 3, 4].map(i => <div key={i} className="p-4 flex items-center gap-3">
              <Skeleton circle className="w-12 h-12" />
              <div className="flex-1 space-y-2">
                <Skeleton className="w-2/3 h-4" />
                <Skeleton className="w-1/2 h-3" />
              </div>
            </div>)}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-4">Table Loading</h3>
        <div className="border rounded-lg overflow-hidden">
          <div className="bg-gray-50 p-4">
            <div className="grid grid-cols-4 gap-4">
              <Skeleton className="h-4" />
              <Skeleton className="h-4" />
              <Skeleton className="h-4" />
              <Skeleton className="h-4" />
            </div>
          </div>
          <div className="divide-y">
            {[1, 2, 3, 4, 5].map(i => <div key={i} className="p-4">
                <div className="grid grid-cols-4 gap-4">
                  <Skeleton className="h-3" />
                  <Skeleton className="h-3" />
                  <Skeleton className="h-3" />
                  <Skeleton className="h-3" />
                </div>
              </div>)}
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-4">Comment Thread Loading</h3>
        <div className="space-y-4 max-w-2xl">
          {[1, 2, 3].map(i => <div key={i} className="flex gap-3">
              <Skeleton circle className="w-10 h-10" />
              <div className="flex-1 border rounded-lg p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <Skeleton className="w-24 h-3" />
                  <Skeleton className="w-16 h-3" />
                </div>
                <Skeleton className="w-full h-3" />
                <Skeleton className="w-full h-3" />
                <Skeleton className="w-3/4 h-3" />
              </div>
            </div>)}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-4">Dashboard Widget Loading</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map(i => <div key={i} className="border rounded-lg p-4">
              <Skeleton className="w-20 h-3 mb-4" />
              <Skeleton className="w-full h-10 mb-2" />
              <Skeleton className="w-16 h-3" />
            </div>)}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-4">Navigation Loading</h3>
        <div className="border rounded-lg p-4 space-y-2 max-w-xs">
          <Skeleton className="w-full h-10" />
          <Skeleton className="w-full h-10" />
          <Skeleton className="w-full h-10" />
          <Skeleton className="w-full h-10" />
          <Skeleton className="w-full h-10" />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-4">Hero Section Loading</h3>
        <div className="border rounded-lg p-8 max-w-4xl">
          <div className="text-center space-y-4">
            <Skeleton className="w-2/3 h-12 mx-auto" />
            <Skeleton className="w-4/5 h-6 mx-auto" />
            <Skeleton className="w-3/4 h-4 mx-auto" />
            <div className="flex justify-center gap-4 mt-6">
              <Skeleton className="w-32 h-10" />
              <Skeleton className="w-32 h-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
}`,...(R=(D=d.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var T,_,q;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div>
        <h3 className="text-xs font-semibold mb-2 text-gray-500">Custom Heights</h3>
        <div className="space-y-2">
          <Skeleton className="w-full h-2" />
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-full h-8" />
          <Skeleton className="w-full h-16" />
          <Skeleton className="w-full h-32" />
        </div>
      </div>
    </div>
}`,...(q=(_=o.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var H,P,I;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4 items-center">
      <Skeleton circle className="w-6 h-6" />
      <Skeleton circle className="w-8 h-8" />
      <Skeleton circle className="w-10 h-10" />
      <Skeleton circle className="w-12 h-12" />
      <Skeleton circle className="w-16 h-16" />
      <Skeleton circle className="w-20 h-20" />
      <Skeleton circle className="w-24 h-24" />
    </div>
}`,...(I=(P=x.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};var G,M,U;N.parameters={...N.parameters,docs:{...(G=N.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    const colors = ['default', 'primary', 'secondary', 'accent', 'success', 'error', 'warning', 'info'] as const;
    return <div className="space-y-6">
        <table className="border-collapse w-full">
          <thead>
            <tr>
              <th className="p-2 text-left text-sm text-gray-500">Color</th>
              <th className="p-2 text-left text-sm text-gray-500">Example</th>
            </tr>
          </thead>
          <tbody>
            {colors.map(c => <tr key={c}>
                <td className="p-2 text-sm font-medium">{c}</td>
                <td className="p-2">
                  <Skeleton color={c} className="h-4 w-32" />
                </td>
              </tr>)}
          </tbody>
        </table>
      </div>;
  }
}`,...(U=(M=N.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};const le=["Primary","AllSizes","AllColors","CircleSkeletons","CircleColors","DifferentWidths","RealWorldExamples","CustomSizes","AvatarSizes","ColorSizeMatrix"];export{r as AllColors,n as AllSizes,x as AvatarSizes,i as CircleColors,m as CircleSkeletons,N as ColorSizeMatrix,o as CustomSizes,t as DifferentWidths,c as Primary,d as RealWorldExamples,le as __namedExportsOrder,ae as default};
