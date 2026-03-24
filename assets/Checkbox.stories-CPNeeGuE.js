import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as R}from"./index-ZH-6pyQh.js";import{C as s}from"./index-ByNQ8nWm.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-_uLxnvdl.js";import"./variants-C8qliDOr.js";import"./minus-Bn6CyQhd.js";import"./createLucideIcon-BXJdBs6C.js";import"./check-CKCh4cDT.js";const Q={title:"Data Entry/Checkbox",component:s,tags:["autodocs"],argTypes:{variant:{control:"select",options:["solid","outline","soft"],description:"Visual variant"},color:{control:"select",options:["primary","secondary","accent","success","error","warning","info"],description:"Theme color"},size:{control:"select",options:["xs","sm","md","lg"],description:"Checkbox size"},indeterminate:{control:"boolean",description:"Indeterminate state"},disabled:{control:"boolean",description:"Disabled state"}}},o={args:{label:"Checkbox",color:"primary",size:"md"}},n={render:()=>{const t=["solid","outline","soft"],r=["primary","secondary","accent","success","warning","error","info"];return e.jsx("div",{className:"space-y-6",children:t.map(a=>e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-text-secondary mb-2 capitalize",children:a}),e.jsx("div",{className:"flex items-center gap-6",children:r.map(c=>e.jsx(s,{variant:a,color:c,label:c,defaultChecked:!0},c))})]},a))})}},d={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(s,{label:"I agree to the terms and conditions"}),e.jsx(s,{label:"Subscribe to newsletter",defaultChecked:!0}),e.jsx(s,{label:"Remember me"})]})},i={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(s,{label:"Enable notifications",helperText:"You will receive email notifications"}),e.jsx(s,{label:"Two-factor authentication",helperText:"Adds an extra layer of security",defaultChecked:!0})]})},m={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(s,{label:"Accept terms",error:"You must accept the terms"}),e.jsx(s,{label:"Confirm age",error:"Must be 18 or older",helperText:"This field is required"})]})},h={render:()=>{const[t,r]=R.useState([!1,!1,!1]),a=t.every(Boolean),c=t.some(Boolean)&&!a;return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(s,{label:"Select all",checked:a,indeterminate:c,onChange:l=>{const u=l.target.checked;r([u,u,u])}}),e.jsxs("div",{className:"ml-6 flex flex-col gap-2",children:[e.jsx(s,{label:"Option 1",checked:t[0],onChange:l=>r([l.target.checked,t[1],t[2]])}),e.jsx(s,{label:"Option 2",checked:t[1],onChange:l=>r([t[0],l.target.checked,t[2]])}),e.jsx(s,{label:"Option 3",checked:t[2],onChange:l=>r([t[0],t[1],l.target.checked])})]})]})}},x={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(s,{disabled:!0,label:"Disabled unchecked"}),e.jsx(s,{disabled:!0,label:"Disabled checked",defaultChecked:!0}),e.jsx(s,{disabled:!0,indeterminate:!0,label:"Disabled indeterminate",defaultChecked:!0})]})},p={render:()=>{const t=["primary","secondary","accent","success","error","warning","info"],r=["xs","sm","md","lg"];return e.jsx("div",{className:"space-y-6",children:e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"border-collapse",children:[e.jsxs("thead",{children:[e.jsxs("tr",{children:[e.jsx("th",{className:"p-2 text-left text-sm text-gray-500",children:"Color \\ Size"}),r.map(a=>e.jsx("th",{className:"p-2 text-center text-sm text-gray-500",colSpan:2,children:a},a))]}),e.jsxs("tr",{children:[e.jsx("th",{className:"p-2"}),r.map(a=>e.jsxs(e.Fragment,{children:[e.jsx("th",{className:"p-2 text-center text-xs text-gray-400",children:"unchecked"},`${a}-unchecked`),e.jsx("th",{className:"p-2 text-center text-xs text-gray-400",children:"checked"},`${a}-checked`)]}))]})]}),e.jsx("tbody",{children:t.map(a=>e.jsxs("tr",{children:[e.jsx("td",{className:"p-2 text-sm font-medium",children:a}),r.map(c=>e.jsxs(e.Fragment,{children:[e.jsx("td",{className:"p-2",children:e.jsx(s,{color:a,size:c,label:a})},`${c}-unchecked`),e.jsx("td",{className:"p-2",children:e.jsx(s,{color:a,size:c,label:a,defaultChecked:!0})},`${c}-checked`)]}))]},a))})]})})})}};var b,k,f;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox',
    color: 'primary',
    size: 'md'
  }
}`,...(f=(k=o.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var g,C,j;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const variants = ['solid', 'outline', 'soft'] as const;
    const colors = ['primary', 'secondary', 'accent', 'success', 'warning', 'error', 'info'] as const;
    return <div className="space-y-6">
        {variants.map(variant => <div key={variant}>
            <p className="text-sm font-medium text-text-secondary mb-2 capitalize">{variant}</p>
            <div className="flex items-center gap-6">
              {colors.map(color => <Checkbox key={color} variant={variant} color={color} label={color} defaultChecked />)}
            </div>
          </div>)}
      </div>;
  }
}`,...(j=(C=n.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var v,y,N;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Checkbox label="I agree to the terms and conditions" />
      <Checkbox label="Subscribe to newsletter" defaultChecked />
      <Checkbox label="Remember me" />
    </div>
}`,...(N=(y=d.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var z,S,w;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Checkbox label="Enable notifications" helperText="You will receive email notifications" />
      <Checkbox label="Two-factor authentication" helperText="Adds an extra layer of security" defaultChecked />
    </div>
}`,...(w=(S=i.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var T,D,E;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Checkbox label="Accept terms" error="You must accept the terms" />
      <Checkbox label="Confirm age" error="Must be 18 or older" helperText="This field is required" />
    </div>
}`,...(E=(D=m.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var I,V,$;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState([false, false, false]);
    const allChecked = checked.every(Boolean);
    const isIndeterminate = checked.some(Boolean) && !allChecked;
    return <div className="flex flex-col gap-4">
        <Checkbox label="Select all" checked={allChecked} indeterminate={isIndeterminate} onChange={e => {
        const newValue = e.target.checked;
        setChecked([newValue, newValue, newValue]);
      }} />
        <div className="ml-6 flex flex-col gap-2">
          <Checkbox label="Option 1" checked={checked[0]} onChange={e => setChecked([e.target.checked, checked[1], checked[2]])} />
          <Checkbox label="Option 2" checked={checked[1]} onChange={e => setChecked([checked[0], e.target.checked, checked[2]])} />
          <Checkbox label="Option 3" checked={checked[2]} onChange={e => setChecked([checked[0], checked[1], e.target.checked])} />
        </div>
      </div>;
  }
}`,...($=(V=h.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};var O,W,A;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Checkbox disabled label="Disabled unchecked" />
      <Checkbox disabled label="Disabled checked" defaultChecked />
      <Checkbox disabled indeterminate label="Disabled indeterminate" defaultChecked />
    </div>
}`,...(A=(W=x.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var B,M,Y;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const colors = ['primary', 'secondary', 'accent', 'success', 'error', 'warning', 'info'] as const;
    const sizes = ['xs', 'sm', 'md', 'lg'] as const;
    return <div className="space-y-6">
        <div className="overflow-x-auto">
          <table className="border-collapse">
            <thead>
              <tr>
                <th className="p-2 text-left text-sm text-gray-500">Color \\ Size</th>
                {sizes.map(size => <th key={size} className="p-2 text-center text-sm text-gray-500" colSpan={2}>{size}</th>)}
              </tr>
              <tr>
                <th className="p-2"></th>
                {sizes.map(size => <>
                    <th key={\`\${size}-unchecked\`} className="p-2 text-center text-xs text-gray-400">unchecked</th>
                    <th key={\`\${size}-checked\`} className="p-2 text-center text-xs text-gray-400">checked</th>
                  </>)}
              </tr>
            </thead>
            <tbody>
              {colors.map(color => <tr key={color}>
                  <td className="p-2 text-sm font-medium">{color}</td>
                  {sizes.map(size => <>
                      <td key={\`\${size}-unchecked\`} className="p-2">
                        <Checkbox color={color} size={size} label={color} />
                      </td>
                      <td key={\`\${size}-checked\`} className="p-2">
                        <Checkbox color={color} size={size} label={color} defaultChecked />
                      </td>
                    </>)}
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>;
  }
}`,...(Y=(M=p.parameters)==null?void 0:M.docs)==null?void 0:Y.source}}};const U=["Primary","Variants","WithLabel","WithHelperText","WithError","Indeterminate","Disabled","ColorSizeMatrix"];export{p as ColorSizeMatrix,x as Disabled,h as Indeterminate,o as Primary,n as Variants,m as WithError,i as WithHelperText,d as WithLabel,U as __namedExportsOrder,Q as default};
