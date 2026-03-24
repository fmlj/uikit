import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as le}from"./index-ZH-6pyQh.js";import{T as s}from"./index-CHc-iJ3O.js";import{H as t}from"./heart-7Tw2OJmo.js";import{S as N}from"./star-CXKHNDnr.js";import{B as T}from"./bell-BD3KA5A_.js";import{C as de}from"./check-CKCh4cDT.js";import{c as ne}from"./createLucideIcon-BXJdBs6C.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-_uLxnvdl.js";import"./useRipple-BuuTbn0W.js";import"./variants-C8qliDOr.js";/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",key:"emmmcr"}]],ie=ne("thumbs-up",oe),ye={title:"Data Entry/Toggle",component:s,tags:["autodocs"],argTypes:{color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"],description:"Theme color"},size:{control:"select",options:["xs","sm","md","lg"],description:"Toggle size"},variant:{control:"select",options:["default","solid","soft"],description:"Visual style variant"},disabled:{control:"boolean",description:"Disabled state"},pressed:{control:"boolean",description:"Pressed state (controlled)"},defaultPressed:{control:"boolean",description:"Default pressed state (uncontrolled)"}}},n={args:{children:"Toggle",color:"primary",size:"md",variant:"default"}},o={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-2",children:"Default Variant"}),e.jsxs("div",{className:"flex gap-4 flex-wrap",children:[e.jsx(s,{variant:"default",children:"Default"}),e.jsx(s,{variant:"default",defaultPressed:!0,children:"Default Pressed"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-2",children:"Solid Variant"}),e.jsxs("div",{className:"flex gap-4 flex-wrap",children:[e.jsx(s,{variant:"solid",children:"Solid"}),e.jsx(s,{variant:"solid",defaultPressed:!0,children:"Solid Pressed"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-2",children:"Soft Variant"}),e.jsxs("div",{className:"flex gap-4 flex-wrap",children:[e.jsx(s,{variant:"soft",children:"Soft"}),e.jsx(s,{variant:"soft",defaultPressed:!0,children:"Soft Pressed"})]})]})]})},i={render:()=>e.jsxs("div",{className:"flex gap-4 flex-wrap",children:[e.jsx(s,{color:"default",defaultPressed:!0,children:"Default"}),e.jsx(s,{color:"primary",defaultPressed:!0,children:"Primary"}),e.jsx(s,{color:"secondary",defaultPressed:!0,children:"Secondary"}),e.jsx(s,{color:"accent",defaultPressed:!0,children:"Accent"}),e.jsx(s,{color:"success",defaultPressed:!0,children:"Success"}),e.jsx(s,{color:"error",defaultPressed:!0,children:"Error"}),e.jsx(s,{color:"warning",defaultPressed:!0,children:"Warning"}),e.jsx(s,{color:"info",defaultPressed:!0,children:"Info"})]})},c={render:()=>e.jsxs("div",{className:"flex gap-4 items-center flex-wrap",children:[e.jsx(s,{size:"xs",defaultPressed:!0,children:"Extra Small"}),e.jsx(s,{size:"sm",defaultPressed:!0,children:"Small"}),e.jsx(s,{size:"md",defaultPressed:!0,children:"Medium"}),e.jsx(s,{size:"lg",defaultPressed:!0,children:"Large"})]})},m={render:()=>e.jsxs("div",{className:"flex gap-4 flex-wrap",children:[e.jsx(s,{icon:e.jsx(t,{}),children:"Like"}),e.jsx(s,{icon:e.jsx(N,{}),defaultPressed:!0,children:"Favorite"}),e.jsx(s,{icon:e.jsx(T,{}),children:"Notify"}),e.jsx(s,{icon:e.jsx(ie,{}),defaultPressed:!0,children:"Approve"})]})},x={render:()=>e.jsxs("div",{className:"flex gap-4 items-center flex-wrap",children:[e.jsx(s,{icon:e.jsx(t,{}),size:"xs"}),e.jsx(s,{icon:e.jsx(N,{}),size:"sm",defaultPressed:!0}),e.jsx(s,{icon:e.jsx(T,{}),size:"md"}),e.jsx(s,{icon:e.jsx(de,{}),size:"lg",defaultPressed:!0})]})},g={render:()=>e.jsxs("div",{className:"flex gap-4 flex-wrap",children:[e.jsx(s,{disabled:!0,children:"Disabled"}),e.jsx(s,{disabled:!0,defaultPressed:!0,children:"Disabled Pressed"}),e.jsx(s,{disabled:!0,icon:e.jsx(t,{}),children:"Disabled with Icon"}),e.jsx(s,{disabled:!0,icon:e.jsx(N,{}),defaultPressed:!0,children:"Disabled Pressed"})]})},f={render:()=>{const[r,a]=le.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsx(s,{pressed:r,onChange:a,icon:e.jsx(t,{}),children:"Like"}),e.jsxs("span",{className:"text-sm text-text-secondary",children:["State: ",r?"Pressed":"Not pressed"]})]}),e.jsx("button",{onClick:()=>a(!r),className:"px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors text-sm",children:"Toggle State Externally"})]})}},u={render:()=>{const r=["default","primary","secondary","accent","success","error","warning","info"];return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-2",children:"Default Variant"}),e.jsx("div",{className:"flex gap-2 flex-wrap",children:r.map(a=>e.jsx(s,{variant:"default",color:a,defaultPressed:!0,children:a},a))})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-2",children:"Solid Variant"}),e.jsx("div",{className:"flex gap-2 flex-wrap",children:r.map(a=>e.jsx(s,{variant:"solid",color:a,defaultPressed:!0,children:a},a))})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-2",children:"Soft Variant"}),e.jsx("div",{className:"flex gap-2 flex-wrap",children:r.map(a=>e.jsx(s,{variant:"soft",color:a,defaultPressed:!0,children:a},a))})]})]})}},p={render:()=>{const[r,a]=le.useState({notifications:!0,darkMode:!1,autoSave:!0,analytics:!1});return e.jsxs("div",{className:"space-y-6 max-w-md",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Feature Settings"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-sm",children:"Notifications"}),e.jsx("p",{className:"text-xs text-text-secondary",children:"Receive email notifications"})]}),e.jsx(s,{pressed:r.notifications,onChange:l=>a({...r,notifications:l}),icon:e.jsx(T,{}),color:"primary"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-sm",children:"Dark Mode"}),e.jsx("p",{className:"text-xs text-text-secondary",children:"Use dark theme"})]}),e.jsx(s,{pressed:r.darkMode,onChange:l=>a({...r,darkMode:l}),color:"accent"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-sm",children:"Auto Save"}),e.jsx("p",{className:"text-xs text-text-secondary",children:"Automatically save changes"})]}),e.jsx(s,{pressed:r.autoSave,onChange:l=>a({...r,autoSave:l}),icon:e.jsx(de,{}),color:"success"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-sm",children:"Analytics"}),e.jsx("p",{className:"text-xs text-text-secondary",children:"Share usage data"})]}),e.jsx(s,{pressed:r.analytics,onChange:l=>a({...r,analytics:l}),color:"info"})]})]})]})}},h={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-3",children:"Text Only"}),e.jsxs("div",{className:"flex gap-4 items-center flex-wrap",children:[e.jsx(s,{size:"xs",defaultPressed:!0,children:"XS"}),e.jsx(s,{size:"sm",defaultPressed:!0,children:"SM"}),e.jsx(s,{size:"md",defaultPressed:!0,children:"MD"}),e.jsx(s,{size:"lg",defaultPressed:!0,children:"LG"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-3",children:"With Icons"}),e.jsxs("div",{className:"flex gap-4 items-center flex-wrap",children:[e.jsx(s,{size:"xs",icon:e.jsx(t,{}),defaultPressed:!0,children:"XS"}),e.jsx(s,{size:"sm",icon:e.jsx(t,{}),defaultPressed:!0,children:"SM"}),e.jsx(s,{size:"md",icon:e.jsx(t,{}),defaultPressed:!0,children:"MD"}),e.jsx(s,{size:"lg",icon:e.jsx(t,{}),defaultPressed:!0,children:"LG"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-3",children:"Icon Only"}),e.jsxs("div",{className:"flex gap-4 items-center flex-wrap",children:[e.jsx(s,{size:"xs",icon:e.jsx(t,{}),defaultPressed:!0}),e.jsx(s,{size:"sm",icon:e.jsx(t,{}),defaultPressed:!0}),e.jsx(s,{size:"md",icon:e.jsx(t,{}),defaultPressed:!0}),e.jsx(s,{size:"lg",icon:e.jsx(t,{}),defaultPressed:!0})]})]})]})},v={render:()=>{const r=["default","primary","secondary","accent","success","error","warning","info"],a=["xs","sm","md","lg"],l=["default","solid","soft"];return e.jsx("div",{className:"space-y-8",children:l.map(j=>e.jsxs("div",{children:[e.jsxs("h3",{className:"text-sm font-semibold mb-3 capitalize",children:[j," Variant"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-2 text-left text-sm text-gray-500",children:"Color \\ Size"}),a.map(d=>e.jsx("th",{className:"p-2 text-center text-sm text-gray-500",children:d},d))]})}),e.jsx("tbody",{children:r.map(d=>e.jsxs("tr",{children:[e.jsx("td",{className:"p-2 text-sm font-medium",children:d}),a.map(y=>e.jsx("td",{className:"p-2",children:e.jsx(s,{color:d,size:y,variant:j,defaultPressed:!0,children:"A"})},y))]},d))})]})})]},j))})}};var P,b,S;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    children: 'Toggle',
    color: 'primary',
    size: 'md',
    variant: 'default'
  }
}`,...(S=(b=n.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var z,w,D;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div>
        <h3 className="text-sm font-semibold mb-2">Default Variant</h3>
        <div className="flex gap-4 flex-wrap">
          <Toggle variant="default">Default</Toggle>
          <Toggle variant="default" defaultPressed>Default Pressed</Toggle>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-2">Solid Variant</h3>
        <div className="flex gap-4 flex-wrap">
          <Toggle variant="solid">Solid</Toggle>
          <Toggle variant="solid" defaultPressed>Solid Pressed</Toggle>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-2">Soft Variant</h3>
        <div className="flex gap-4 flex-wrap">
          <Toggle variant="soft">Soft</Toggle>
          <Toggle variant="soft" defaultPressed>Soft Pressed</Toggle>
        </div>
      </div>
    </div>
}`,...(D=(w=o.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var k,C,M;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4 flex-wrap">
      <Toggle color="default" defaultPressed>Default</Toggle>
      <Toggle color="primary" defaultPressed>Primary</Toggle>
      <Toggle color="secondary" defaultPressed>Secondary</Toggle>
      <Toggle color="accent" defaultPressed>Accent</Toggle>
      <Toggle color="success" defaultPressed>Success</Toggle>
      <Toggle color="error" defaultPressed>Error</Toggle>
      <Toggle color="warning" defaultPressed>Warning</Toggle>
      <Toggle color="info" defaultPressed>Info</Toggle>
    </div>
}`,...(M=(C=i.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var A,V,H;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4 items-center flex-wrap">
      <Toggle size="xs" defaultPressed>Extra Small</Toggle>
      <Toggle size="sm" defaultPressed>Small</Toggle>
      <Toggle size="md" defaultPressed>Medium</Toggle>
      <Toggle size="lg" defaultPressed>Large</Toggle>
    </div>
}`,...(H=(V=c.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};var I,E,L;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4 flex-wrap">
      <Toggle icon={<Heart />}>Like</Toggle>
      <Toggle icon={<Star />} defaultPressed>Favorite</Toggle>
      <Toggle icon={<Bell />}>Notify</Toggle>
      <Toggle icon={<ThumbsUp />} defaultPressed>Approve</Toggle>
    </div>
}`,...(L=(E=m.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var F,O,W;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4 items-center flex-wrap">
      <Toggle icon={<Heart />} size="xs" />
      <Toggle icon={<Star />} size="sm" defaultPressed />
      <Toggle icon={<Bell />} size="md" />
      <Toggle icon={<Check />} size="lg" defaultPressed />
    </div>
}`,...(W=(O=x.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var B,G,U;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4 flex-wrap">
      <Toggle disabled>Disabled</Toggle>
      <Toggle disabled defaultPressed>Disabled Pressed</Toggle>
      <Toggle disabled icon={<Heart />}>Disabled with Icon</Toggle>
      <Toggle disabled icon={<Star />} defaultPressed>Disabled Pressed</Toggle>
    </div>
}`,...(U=(G=g.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var X,_,R;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    const [pressed, setPressed] = useState(false);
    return <div className="space-y-4">
        <div className="flex gap-4 items-center">
          <Toggle pressed={pressed} onChange={setPressed} icon={<Heart />}>
            Like
          </Toggle>
          <span className="text-sm text-text-secondary">
            State: {pressed ? 'Pressed' : 'Not pressed'}
          </span>
        </div>
        <button onClick={() => setPressed(!pressed)} className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors text-sm">
          Toggle State Externally
        </button>
      </div>;
  }
}`,...(R=(_=f.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var q,Z,J;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const colors = ['default', 'primary', 'secondary', 'accent', 'success', 'error', 'warning', 'info'] as const;
    return <div className="space-y-4">
        <div>
          <h3 className="text-sm font-semibold mb-2">Default Variant</h3>
          <div className="flex gap-2 flex-wrap">
            {colors.map(color => <Toggle key={color} variant="default" color={color} defaultPressed>
                {color}
              </Toggle>)}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-2">Solid Variant</h3>
          <div className="flex gap-2 flex-wrap">
            {colors.map(color => <Toggle key={color} variant="solid" color={color} defaultPressed>
                {color}
              </Toggle>)}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-2">Soft Variant</h3>
          <div className="flex gap-2 flex-wrap">
            {colors.map(color => <Toggle key={color} variant="soft" color={color} defaultPressed>
                {color}
              </Toggle>)}
          </div>
        </div>
      </div>;
  }
}`,...(J=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:J.source}}};var K,Q,Y;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    const [features, setFeatures] = useState({
      notifications: true,
      darkMode: false,
      autoSave: true,
      analytics: false
    });
    return <div className="space-y-6 max-w-md">
        <h3 className="text-lg font-semibold">Feature Settings</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-sm">Notifications</p>
              <p className="text-xs text-text-secondary">Receive email notifications</p>
            </div>
            <Toggle pressed={features.notifications} onChange={pressed => setFeatures({
            ...features,
            notifications: pressed
          })} icon={<Bell />} color="primary" />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-sm">Dark Mode</p>
              <p className="text-xs text-text-secondary">Use dark theme</p>
            </div>
            <Toggle pressed={features.darkMode} onChange={pressed => setFeatures({
            ...features,
            darkMode: pressed
          })} color="accent" />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-sm">Auto Save</p>
              <p className="text-xs text-text-secondary">Automatically save changes</p>
            </div>
            <Toggle pressed={features.autoSave} onChange={pressed => setFeatures({
            ...features,
            autoSave: pressed
          })} icon={<Check />} color="success" />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-sm">Analytics</p>
              <p className="text-xs text-text-secondary">Share usage data</p>
            </div>
            <Toggle pressed={features.analytics} onChange={pressed => setFeatures({
            ...features,
            analytics: pressed
          })} color="info" />
          </div>
        </div>
      </div>;
  }
}`,...(Y=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var $,ee,se;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold mb-3">Text Only</h3>
        <div className="flex gap-4 items-center flex-wrap">
          <Toggle size="xs" defaultPressed>XS</Toggle>
          <Toggle size="sm" defaultPressed>SM</Toggle>
          <Toggle size="md" defaultPressed>MD</Toggle>
          <Toggle size="lg" defaultPressed>LG</Toggle>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-3">With Icons</h3>
        <div className="flex gap-4 items-center flex-wrap">
          <Toggle size="xs" icon={<Heart />} defaultPressed>XS</Toggle>
          <Toggle size="sm" icon={<Heart />} defaultPressed>SM</Toggle>
          <Toggle size="md" icon={<Heart />} defaultPressed>MD</Toggle>
          <Toggle size="lg" icon={<Heart />} defaultPressed>LG</Toggle>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-3">Icon Only</h3>
        <div className="flex gap-4 items-center flex-wrap">
          <Toggle size="xs" icon={<Heart />} defaultPressed />
          <Toggle size="sm" icon={<Heart />} defaultPressed />
          <Toggle size="md" icon={<Heart />} defaultPressed />
          <Toggle size="lg" icon={<Heart />} defaultPressed />
        </div>
      </div>
    </div>
}`,...(se=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:se.source}}};var ae,re,te;v.parameters={...v.parameters,docs:{...(ae=v.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => {
    const colors = ['default', 'primary', 'secondary', 'accent', 'success', 'error', 'warning', 'info'] as const;
    const sizes = ['xs', 'sm', 'md', 'lg'] as const;
    const variants = ['default', 'solid', 'soft'] as const;
    return <div className="space-y-8">
        {variants.map(variant => <div key={variant}>
            <h3 className="text-sm font-semibold mb-3 capitalize">{variant} Variant</h3>
            <div className="overflow-x-auto">
              <table className="border-collapse">
                <thead>
                  <tr>
                    <th className="p-2 text-left text-sm text-gray-500">Color \\ Size</th>
                    {sizes.map(size => <th key={size} className="p-2 text-center text-sm text-gray-500">{size}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {colors.map(color => <tr key={color}>
                      <td className="p-2 text-sm font-medium">{color}</td>
                      {sizes.map(size => <td key={size} className="p-2">
                          <Toggle color={color} size={size} variant={variant} defaultPressed>A</Toggle>
                        </td>)}
                    </tr>)}
                </tbody>
              </table>
            </div>
          </div>)}
      </div>;
  }
}`,...(te=(re=v.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};const Pe=["Primary","AllVariants","AllColors","AllSizes","WithIcons","IconOnly","Disabled","Controlled","ColorMatrix","InteractiveExample","SizeComparison","ColorSizeMatrix"];export{i as AllColors,c as AllSizes,o as AllVariants,u as ColorMatrix,v as ColorSizeMatrix,f as Controlled,g as Disabled,x as IconOnly,p as InteractiveExample,n as Primary,h as SizeComparison,m as WithIcons,Pe as __namedExportsOrder,ye as default};
