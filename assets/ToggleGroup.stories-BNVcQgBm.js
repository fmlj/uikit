import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./index-ZH-6pyQh.js";import{T as t}from"./index-C6BVk_4l.js";import{T as ae,a as oe,b as ie}from"./text-align-start-DMpfEwFb.js";import{c as ce}from"./createLucideIcon-BXJdBs6C.js";import{B as de,I as me,U as ue}from"./underline-DRRndS3I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-_uLxnvdl.js";import"./useRipple-BuuTbn0W.js";import"./variants-C8qliDOr.js";/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=[["path",{d:"M3 5h18",key:"1u36vt"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 19h18",key:"awlh7x"}]],re=ce("text-align-justify",pe),Te={title:"Data Entry/ToggleGroup",component:t,tags:["autodocs"],argTypes:{color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"],description:"Theme color"},size:{control:"select",options:["xs","sm","md","lg"],description:"Toggle size"},variant:{control:"select",options:["default","solid","soft"],description:"Visual style variant"},multiple:{control:"boolean",description:"Allow multiple selections"},disabled:{control:"boolean",description:"Disabled state"},fullWidth:{control:"boolean",description:"Full width layout"},centered:{control:"boolean",description:"Center align content"}}},ne=[{label:"Option 1",value:"opt1"},{label:"Option 2",value:"opt2"},{label:"Option 3",value:"opt3"}],n=[{label:"Left",value:"left",icon:e.jsx(ae,{size:16})},{label:"Center",value:"center",icon:e.jsx(oe,{size:16})},{label:"Right",value:"right",icon:e.jsx(ie,{size:16})},{label:"Justify",value:"justify",icon:e.jsx(re,{size:16})}],N=[{label:"Bold",value:"bold",icon:e.jsx(de,{size:16})},{label:"Italic",value:"italic",icon:e.jsx(me,{size:16})},{label:"Underline",value:"underline",icon:e.jsx(ue,{size:16})}],c={args:{options:ne,color:"primary",size:"md",variant:"default"}},d={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-sm font-semibold",children:"Text Alignment (Single Selection)"}),e.jsx(t,{options:n,defaultValue:"left",multiple:!1})]})},m={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-sm font-semibold",children:"Text Formatting (Multiple Selection)"}),e.jsx(t,{options:N,defaultValue:["bold"],multiple:!0})]})},u={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-sm font-semibold",children:"Text Alignment"}),e.jsx(t,{options:n,defaultValue:"left"})]})},p={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-sm font-semibold",children:"Icon Only Toggles"}),e.jsx(t,{options:[{value:"left",icon:e.jsx(ae,{size:16})},{value:"center",icon:e.jsx(oe,{size:16})},{value:"right",icon:e.jsx(ie,{size:16})},{value:"justify",icon:e.jsx(re,{size:16})}],defaultValue:"left"})]})},x={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-2",children:"All Disabled"}),e.jsx(t,{options:n,defaultValue:"left",disabled:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-2",children:"Individual Items Disabled"}),e.jsx(t,{options:[{label:"Enabled",value:"enabled"},{label:"Disabled",value:"disabled",disabled:!0},{label:"Enabled",value:"enabled2"},{label:"Disabled",value:"disabled2",disabled:!0}],defaultValue:"enabled"})]})]})},g={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-sm font-semibold",children:"Full Width Toggle Group"}),e.jsx(t,{options:ne,fullWidth:!0,defaultValue:"opt1"})]})},b={render:()=>{const[l,a]=r.useState("left"),[s,o]=r.useState(["bold"]);return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-2",children:"Single Selection (Controlled)"}),e.jsx(t,{options:n,value:l,onChange:i=>a(i)}),e.jsxs("p",{className:"text-sm text-text-secondary mt-2",children:["Selected: ",l]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-2",children:"Multiple Selection (Controlled)"}),e.jsx(t,{options:N,value:s,onChange:i=>o(i),multiple:!0}),e.jsxs("p",{className:"text-sm text-text-secondary mt-2",children:["Selected: ",s.length>0?s.join(", "):"none"]})]})]})}},v={render:()=>{const[l,a]=r.useState("left"),[s,o]=r.useState([]);return e.jsxs("div",{className:"space-y-6 max-w-2xl",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Text Editor Toolbar"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"text-sm font-medium mb-2 block",children:"Alignment"}),e.jsx(t,{options:n,value:l,onChange:i=>a(i),color:"primary"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-sm font-medium mb-2 block",children:"Formatting"}),e.jsx(t,{options:N,value:s,onChange:i=>o(i),multiple:!0,color:"accent"})]}),e.jsxs("div",{className:"p-4 border border-border rounded-md bg-surface",children:[e.jsxs("p",{className:"text-sm",children:[e.jsx("strong",{children:"Alignment:"})," ",l]}),e.jsxs("p",{className:"text-sm",children:[e.jsx("strong",{children:"Formatting:"})," ",s.length>0?s.join(", "):"none"]})]})]})]})}},h={render:()=>{const[l,a]=r.useState("grid"),s=[{label:"List",value:"list"},{label:"Grid",value:"grid"},{label:"Table",value:"table"}];return e.jsxs("div",{className:"space-y-4 max-w-md",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-sm font-semibold",children:"View Mode"}),e.jsx(t,{options:s,value:l,onChange:o=>a(o),color:"primary",size:"sm"})]}),e.jsx("div",{className:"p-6 border border-border rounded-md bg-surface text-center",children:e.jsxs("p",{className:"text-text-secondary",children:["Current view: ",e.jsx("strong",{children:l})]})})]})}},f={render:()=>{const[l,a]=r.useState(["active"]),s=[{label:"All",value:"all"},{label:"Active",value:"active"},{label:"Pending",value:"pending"},{label:"Completed",value:"completed"}];return e.jsxs("div",{className:"space-y-4 max-w-2xl",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Status Filters"}),e.jsx(t,{options:s,value:l,onChange:o=>a(o),multiple:!0,color:"info",variant:"soft"}),e.jsx("div",{className:"p-4 border border-border rounded-md bg-surface",children:e.jsxs("p",{className:"text-sm",children:[e.jsx("strong",{children:"Active filters:"})," ",l.length>0?l.join(", "):"none"]})})]})}},j={render:()=>{const l=["default","primary","secondary","accent","success","error","warning","info"],a=["xs","sm","md","lg"];return e.jsx("div",{className:"space-y-6",children:e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-2 text-left text-sm text-gray-500",children:"Color \\ Size"}),a.map(s=>e.jsx("th",{className:"p-2 text-center text-sm text-gray-500",children:s},s))]})}),e.jsx("tbody",{children:l.map(s=>e.jsxs("tr",{children:[e.jsx("td",{className:"p-2 text-sm font-medium",children:s}),a.map(o=>e.jsx("td",{className:"p-2",children:e.jsx(t,{options:[{label:"A",value:"a"},{label:"B",value:"b"},{label:"C",value:"c"}],color:s,size:o,defaultValue:"b"})},o))]},s))})]})})})}};var y,S,T;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    color: 'primary',
    size: 'md',
    variant: 'default'
  }
}`,...(T=(S=c.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var V,z,w;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <h3 className="text-sm font-semibold">Text Alignment (Single Selection)</h3>
      <ToggleGroup options={alignmentOptions} defaultValue="left" multiple={false} />
    </div>
}`,...(w=(z=d.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var C,A,O;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <h3 className="text-sm font-semibold">Text Formatting (Multiple Selection)</h3>
      <ToggleGroup options={formattingOptions} defaultValue={['bold']} multiple={true} />
    </div>
}`,...(O=(A=m.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var F,M,G;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <h3 className="text-sm font-semibold">Text Alignment</h3>
      <ToggleGroup options={alignmentOptions} defaultValue="left" />
    </div>
}`,...(G=(M=u.parameters)==null?void 0:M.docs)==null?void 0:G.source}}};var E,I,D;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <h3 className="text-sm font-semibold">Icon Only Toggles</h3>
      <ToggleGroup options={[{
      value: 'left',
      icon: <AlignLeft size={16} />
    }, {
      value: 'center',
      icon: <AlignCenter size={16} />
    }, {
      value: 'right',
      icon: <AlignRight size={16} />
    }, {
      value: 'justify',
      icon: <AlignJustify size={16} />
    }]} defaultValue="left" />
    </div>
}`,...(D=(I=p.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var k,W,B;x.parameters={...x.parameters,docs:{...(k=x.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div>
        <h3 className="text-sm font-semibold mb-2">All Disabled</h3>
        <ToggleGroup options={alignmentOptions} defaultValue="left" disabled />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-2">Individual Items Disabled</h3>
        <ToggleGroup options={[{
        label: 'Enabled',
        value: 'enabled'
      }, {
        label: 'Disabled',
        value: 'disabled',
        disabled: true
      }, {
        label: 'Enabled',
        value: 'enabled2'
      }, {
        label: 'Disabled',
        value: 'disabled2',
        disabled: true
      }]} defaultValue="enabled" />
      </div>
    </div>
}`,...(B=(W=x.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var L,P,_;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <h3 className="text-sm font-semibold">Full Width Toggle Group</h3>
      <ToggleGroup options={basicOptions} fullWidth defaultValue="opt1" />
    </div>
}`,...(_=(P=g.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var J,R,U;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const [singleValue, setSingleValue] = useState('left');
    const [multipleValue, setMultipleValue] = useState<string[]>(['bold']);
    return <div className="space-y-6">
        <div>
          <h3 className="text-sm font-semibold mb-2">Single Selection (Controlled)</h3>
          <ToggleGroup options={alignmentOptions} value={singleValue} onChange={value => setSingleValue(value as string)} />
          <p className="text-sm text-text-secondary mt-2">Selected: {singleValue}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-2">Multiple Selection (Controlled)</h3>
          <ToggleGroup options={formattingOptions} value={multipleValue} onChange={value => setMultipleValue(value as string[])} multiple />
          <p className="text-sm text-text-secondary mt-2">
            Selected: {multipleValue.length > 0 ? multipleValue.join(', ') : 'none'}
          </p>
        </div>
      </div>;
  }
}`,...(U=(R=b.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var q,H,K;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const [alignment, setAlignment] = useState('left');
    const [formatting, setFormatting] = useState<string[]>([]);
    return <div className="space-y-6 max-w-2xl">
        <h3 className="text-lg font-semibold">Text Editor Toolbar</h3>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Alignment</label>
            <ToggleGroup options={alignmentOptions} value={alignment} onChange={value => setAlignment(value as string)} color="primary" />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Formatting</label>
            <ToggleGroup options={formattingOptions} value={formatting} onChange={value => setFormatting(value as string[])} multiple color="accent" />
          </div>
          <div className="p-4 border border-border rounded-md bg-surface">
            <p className="text-sm">
              <strong>Alignment:</strong> {alignment}
            </p>
            <p className="text-sm">
              <strong>Formatting:</strong> {formatting.length > 0 ? formatting.join(', ') : 'none'}
            </p>
          </div>
        </div>
      </div>;
  }
}`,...(K=(H=v.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var Q,X,Y;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => {
    const [viewMode, setViewMode] = useState('grid');
    const viewOptions = [{
      label: 'List',
      value: 'list'
    }, {
      label: 'Grid',
      value: 'grid'
    }, {
      label: 'Table',
      value: 'table'
    }];
    return <div className="space-y-4 max-w-md">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold">View Mode</h3>
          <ToggleGroup options={viewOptions} value={viewMode} onChange={value => setViewMode(value as string)} color="primary" size="sm" />
        </div>
        <div className="p-6 border border-border rounded-md bg-surface text-center">
          <p className="text-text-secondary">Current view: <strong>{viewMode}</strong></p>
        </div>
      </div>;
  }
}`,...(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    const [statusFilters, setStatusFilters] = useState<string[]>(['active']);
    const statusOptions = [{
      label: 'All',
      value: 'all'
    }, {
      label: 'Active',
      value: 'active'
    }, {
      label: 'Pending',
      value: 'pending'
    }, {
      label: 'Completed',
      value: 'completed'
    }];
    return <div className="space-y-4 max-w-2xl">
        <h3 className="text-lg font-semibold">Status Filters</h3>
        <ToggleGroup options={statusOptions} value={statusFilters} onChange={value => setStatusFilters(value as string[])} multiple color="info" variant="soft" />
        <div className="p-4 border border-border rounded-md bg-surface">
          <p className="text-sm">
            <strong>Active filters:</strong> {statusFilters.length > 0 ? statusFilters.join(', ') : 'none'}
          </p>
        </div>
      </div>;
  }
}`,...(ee=($=f.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var se,te,le;j.parameters={...j.parameters,docs:{...(se=j.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => {
    const colors = ['default', 'primary', 'secondary', 'accent', 'success', 'error', 'warning', 'info'] as const;
    const sizes = ['xs', 'sm', 'md', 'lg'] as const;
    return <div className="space-y-6">
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
                      <ToggleGroup options={[{
                  label: 'A',
                  value: 'a'
                }, {
                  label: 'B',
                  value: 'b'
                }, {
                  label: 'C',
                  value: 'c'
                }]} color={color} size={size} defaultValue="b" />
                    </td>)}
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>;
  }
}`,...(le=(te=j.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};const Ve=["Primary","SingleSelection","MultipleSelection","WithIcons","IconOnly","Disabled","FullWidth","Controlled","TextEditorExample","ViewModeExample","FilterExample","ColorSizeMatrix"];export{j as ColorSizeMatrix,b as Controlled,x as Disabled,f as FilterExample,g as FullWidth,p as IconOnly,m as MultipleSelection,c as Primary,d as SingleSelection,v as TextEditorExample,h as ViewModeExample,u as WithIcons,Ve as __namedExportsOrder,Te as default};
