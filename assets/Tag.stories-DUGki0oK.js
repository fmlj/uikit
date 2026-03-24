import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as w,r as z}from"./index-ZH-6pyQh.js";import{c as x,a as re}from"./utils-_uLxnvdl.js";import{c as oe}from"./variants-C8qliDOr.js";import{X as U}from"./x-ByohdK2B.js";import{S as m}from"./star-CXKHNDnr.js";import{T as S}from"./tag-BXXFBg1k.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createLucideIcon-BXJdBs6C.js";const te=re("inline-flex items-center gap-1.5 whitespace-nowrap rounded font-medium transition-colors",{variants:{variant:{default:"bg-slot border border-slot text-slot-fg",solid:"bg-slot border border-slot text-slot-fg hover:bg-slot-90",outline:"border border-slot text-slot hover:bg-slot-10",soft:"bg-slot-10 text-slot"},color:oe,size:{xs:"text-[10px] px-1.5 py-0.5",sm:"text-xs px-2 py-1",md:"text-sm px-2.5 py-1",lg:"text-base px-3 py-1.5"}},defaultVariants:{variant:"solid",color:"primary",size:"sm"}}),N={xs:"size-2.5",sm:"size-3",md:"size-3.5",lg:"size-4"},s=w.memo(({children:o,color:n="primary",variant:i="solid",size:a="sm",closable:r=!1,onClose:l,icon:p,className:Y,classNames:c,onClick:d,disableKeyboardRemoval:g=!1,...Z})=>{const ee=t=>{t.stopPropagation(),l==null||l(t)},ae=t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),t.stopPropagation(),l==null||l(t))},se=t=>{if(!g&&r&&(t.key==="Delete"||t.key==="Backspace")){t.preventDefault(),t.stopPropagation(),l==null||l(t);return}d&&(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),t.stopPropagation(),d(t))};return e.jsxs("span",{className:x("tag_root",te({variant:i,color:n,size:a}),(d||r)&&"cursor-pointer",(d||!g&&r)&&"focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary ring-offset-background",c==null?void 0:c.root,Y),onClick:d,onKeyDown:d||!g&&r?se:void 0,role:d||!g&&r?"button":void 0,tabIndex:d||!g&&r?0:void 0,"aria-label":(d||!g&&r)&&typeof o=="string"?o:void 0,"data-slot":"root",...Z,children:[p&&e.jsx("span",{className:x("inline-flex items-center justify-center flex-shrink-0",N[a]),children:w.isValidElement(p)?w.cloneElement(p,{className:x("w-full h-full",p.props.className)}):p}),e.jsx("span",{className:x("tag_content",c==null?void 0:c.content),"data-slot":"content",children:o}),r&&e.jsx("button",{type:"button",onClick:ee,onKeyDown:ae,className:x("tag_closeButton","inline-flex items-center justify-center flex-shrink-0 cursor-pointer rounded-sm opacity-70 hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-current focus:ring-offset-1",N[a],c==null?void 0:c.closeButton),"aria-label":typeof o=="string"?`Remove ${o}`:"Remove tag",tabIndex:g?0:-1,"data-slot":"closeButton",children:e.jsx(U,{className:"w-full h-full"})})]})});s.displayName="Tag";s.__docgenInfo={description:`Tag Component

An interactive badge variant that can be used for labels, categories, or removable items.
Supports multiple variants, colors, sizes, icons, and close functionality.

@component
@example
// Basic tag
<Tag>Label</Tag>

@example
// Tag with close button
<Tag closable onClose={(e) => console.log('Tag removed')}>
  Removable Tag
</Tag>

@example
// Tag with icon
<Tag icon={<Star />} color="warning">
  Featured
</Tag>

@example
// Different variants
<Tag variant="outline" color="success">Outline Tag</Tag>
<Tag variant="soft" color="info">Soft Tag</Tag>

@example
// Disable keyboard removal (Backspace/Delete on tag)
<Tag closable disableKeyboardRemoval onClose={(e) => console.log('Tag removed')}>
  No keyboard removal
</Tag>

@example
// Tag with keyboard removal enabled (focus on tag and press Delete/Backspace)
<Tag closable onClose={(e) => console.log('Tag removed')}>
  Press Delete or Backspace to remove
</Tag>

@param {TagProps} props - Component props
@returns {JSX.Element} Rendered tag component`,methods:[],displayName:"Tag",props:{color:{defaultValue:{value:"'primary'",computed:!1},required:!1},variant:{defaultValue:{value:"'solid'",computed:!1},required:!1},size:{defaultValue:{value:"'sm'",computed:!1},required:!1},closable:{defaultValue:{value:"false",computed:!1},required:!1},disableKeyboardRemoval:{defaultValue:{value:"false",computed:!1},required:!1}}};const fe={title:"Data Display/Tag",component:s,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","solid","outline","soft"],description:"Visual style variant"},color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"],description:"Theme color"},size:{control:"select",options:["xs","sm","md","lg"],description:"Tag size"},closable:{control:"boolean",description:"Whether the tag can be closed"},disableKeyboardRemoval:{control:"boolean",description:"Disables Backspace/Delete key shortcuts for removing the tag when focused"},icon:{control:!1,description:"Icon element to display before the tag text"}}},u={args:{children:"Tag",variant:"solid",color:"primary",size:"sm"}},f={render:()=>e.jsxs("div",{className:"flex gap-3 flex-wrap items-center",children:[e.jsx(s,{icon:e.jsx(m,{size:16}),color:"warning",children:"Featured"}),e.jsx(s,{icon:e.jsx(S,{size:16}),color:"info",children:"Category"}),e.jsx(s,{icon:e.jsx(m,{size:16}),color:"success",variant:"outline",children:"Favorite"})]})},v={render:()=>{const[o,n]=z.useState([{id:1,label:"React",color:"primary"},{id:2,label:"TypeScript",color:"accent"},{id:3,label:"Tailwind",color:"success"},{id:4,label:"Storybook",color:"info"}]),i=a=>{n(o.filter(r=>r.id!==a))};return e.jsx("div",{className:"flex gap-3 flex-wrap items-center",children:o.map(a=>e.jsx(s,{color:a.color,closable:!0,onClose:()=>i(a.id),children:a.label},a.id))})}},b={render:()=>{const[o,n]=z.useState([{id:1,label:"Featured",color:"warning"},{id:2,label:"Important",color:"error"},{id:3,label:"Popular",color:"success"}]),i=a=>{n(o.filter(r=>r.id!==a))};return e.jsx("div",{className:"flex gap-3 flex-wrap items-center",children:o.map(a=>e.jsx(s,{color:a.color,icon:e.jsx(m,{size:16}),closable:!0,onClose:()=>i(a.id),children:a.label},a.id))})}},h={render:()=>{const[o,n]=z.useState([{id:1,label:"Keyboard Enabled",disabled:!1,color:"primary"},{id:2,label:"Keyboard Disabled",disabled:!0,color:"secondary"}]),i=a=>{n(o.filter(r=>r.id!==a))};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-600 mb-2",children:"Try focusing the tags (using Tab) and pressing Backspace/Delete:"}),e.jsx("div",{className:"flex gap-3 flex-wrap items-center",children:o.map(a=>e.jsx(s,{color:a.color,closable:!0,disableKeyboardRemoval:a.disabled,onClose:()=>i(a.id),children:a.label},a.id))})]}),e.jsxs("div",{className:"text-xs text-gray-500",children:[e.jsx("strong",{children:"Keyboard Enabled:"})," Focus the tag (Tab key) and press Backspace or Delete to remove",e.jsx("br",{}),e.jsx("strong",{children:"Keyboard Disabled:"})," Must click the close button (keyboard shortcuts disabled)"]})]})}},T={render:()=>e.jsxs("div",{className:"flex gap-3 flex-wrap items-center",children:[e.jsx(s,{onClick:()=>alert("Tag clicked!"),color:"primary",children:"Click me"}),e.jsx(s,{onClick:()=>alert("Tag clicked!"),color:"success",variant:"outline",children:"Interactive"})]})},y={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-3",children:"Technology Stack"}),e.jsxs("div",{className:"flex gap-2 flex-wrap",children:[e.jsx(s,{variant:"outline",color:"primary",size:"sm",children:"React"}),e.jsx(s,{variant:"outline",color:"accent",size:"sm",children:"TypeScript"}),e.jsx(s,{variant:"outline",color:"success",size:"sm",children:"Tailwind CSS"}),e.jsx(s,{variant:"outline",color:"info",size:"sm",children:"Storybook"}),e.jsx(s,{variant:"outline",color:"warning",size:"sm",children:"Vite"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-3",children:"Status Tags"}),e.jsxs("div",{className:"flex gap-2 flex-wrap",children:[e.jsx(s,{variant:"soft",color:"success",icon:e.jsx(m,{size:16}),children:"Active"}),e.jsx(s,{variant:"soft",color:"warning",icon:e.jsx(m,{size:16}),children:"Pending"}),e.jsx(s,{variant:"soft",color:"error",icon:e.jsx(U,{size:16}),children:"Inactive"}),e.jsx(s,{variant:"soft",color:"info",icon:e.jsx(S,{size:16}),children:"Draft"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-3",children:"Category Tags (Removable)"}),e.jsx(ie,{})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-3",children:"Priority Labels"}),e.jsxs("div",{className:"flex gap-2 flex-wrap",children:[e.jsx(s,{variant:"solid",color:"error",size:"xs",children:"Critical"}),e.jsx(s,{variant:"solid",color:"warning",size:"xs",children:"High"}),e.jsx(s,{variant:"solid",color:"info",size:"xs",children:"Medium"}),e.jsx(s,{variant:"solid",color:"default",size:"xs",children:"Low"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-3",children:"Feature Tags"}),e.jsxs("div",{className:"flex gap-2 flex-wrap",children:[e.jsx(s,{variant:"solid",color:"success",icon:e.jsx(m,{size:16}),children:"New"}),e.jsx(s,{variant:"solid",color:"warning",icon:e.jsx(m,{size:16}),children:"Featured"}),e.jsx(s,{variant:"solid",color:"primary",icon:e.jsx(m,{size:16}),children:"Premium"}),e.jsx(s,{variant:"solid",color:"accent",icon:e.jsx(m,{size:16}),children:"Beta"})]})]})]})};function ie(){const[o,n]=z.useState([{id:1,label:"Design",color:"primary"},{id:2,label:"Development",color:"accent"},{id:3,label:"Marketing",color:"success"},{id:4,label:"Sales",color:"warning"},{id:5,label:"Support",color:"info"}]),i=a=>{n(o.filter(r=>r.id!==a))};return e.jsx("div",{className:"flex gap-2 flex-wrap",children:o.map(a=>e.jsx(s,{color:a.color,variant:"outline",icon:e.jsx(S,{size:16}),closable:!0,onClose:()=>i(a.id),children:a.label},a.id))})}const j={render:()=>{const o=["default","primary","secondary","accent","success","error","warning","info"],n=["default","solid","outline","soft"],i=["xs","sm","md","lg"];return e.jsx("div",{className:"space-y-8",children:n.map(a=>e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3 capitalize",children:a}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-2 text-left text-sm text-gray-500",children:"Color \\ Size"}),i.map(r=>e.jsx("th",{className:"p-2 text-center text-sm text-gray-500",children:r},r))]})}),e.jsx("tbody",{children:o.map(r=>e.jsxs("tr",{children:[e.jsx("td",{className:"p-2 text-sm font-medium",children:r}),i.map(l=>e.jsx("td",{className:"p-2",children:e.jsx(s,{color:r,variant:a,size:l,children:"Tag"})},l))]},r))})]})})]},a))})}};var k,D,R;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: 'Tag',
    variant: 'solid',
    color: 'primary',
    size: 'sm'
  }
}`,...(R=(D=u.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var C,E,I;f.parameters={...f.parameters,docs:{...(C=f.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="flex gap-3 flex-wrap items-center">
      <Tag icon={<Star size={16} />} color="warning">
        Featured
      </Tag>
      <Tag icon={<TagIcon size={16} />} color="info">
        Category
      </Tag>
      <Tag icon={<Star size={16} />} color="success" variant="outline">
        Favorite
      </Tag>
    </div>
}`,...(I=(E=f.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var P,B,F;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const [tags, setTags] = useState([{
      id: 1,
      label: 'React',
      color: 'primary' as const
    }, {
      id: 2,
      label: 'TypeScript',
      color: 'accent' as const
    }, {
      id: 3,
      label: 'Tailwind',
      color: 'success' as const
    }, {
      id: 4,
      label: 'Storybook',
      color: 'info' as const
    }]);
    const handleRemove = (id: number) => {
      setTags(tags.filter(tag => tag.id !== id));
    };
    return <div className="flex gap-3 flex-wrap items-center">
        {tags.map(tag => <Tag key={tag.id} color={tag.color} closable onClose={() => handleRemove(tag.id)}>
            {tag.label}
          </Tag>)}
      </div>;
  }
}`,...(F=(B=v.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var K,V,L;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    const [tags, setTags] = useState([{
      id: 1,
      label: 'Featured',
      color: 'warning' as const
    }, {
      id: 2,
      label: 'Important',
      color: 'error' as const
    }, {
      id: 3,
      label: 'Popular',
      color: 'success' as const
    }]);
    const handleRemove = (id: number) => {
      setTags(tags.filter(tag => tag.id !== id));
    };
    return <div className="flex gap-3 flex-wrap items-center">
        {tags.map(tag => <Tag key={tag.id} color={tag.color} icon={<Star size={16} />} closable onClose={() => handleRemove(tag.id)}>
            {tag.label}
          </Tag>)}
      </div>;
  }
}`,...(L=(V=b.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};var M,W,_;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const [tags, setTags] = useState([{
      id: 1,
      label: 'Keyboard Enabled',
      disabled: false,
      color: 'primary' as const
    }, {
      id: 2,
      label: 'Keyboard Disabled',
      disabled: true,
      color: 'secondary' as const
    }]);
    const handleRemove = (id: number) => {
      setTags(tags.filter(tag => tag.id !== id));
    };
    return <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-600 mb-2">
            Try focusing the tags (using Tab) and pressing Backspace/Delete:
          </p>
          <div className="flex gap-3 flex-wrap items-center">
            {tags.map(tag => <Tag key={tag.id} color={tag.color} closable disableKeyboardRemoval={tag.disabled} onClose={() => handleRemove(tag.id)}>
                {tag.label}
              </Tag>)}
          </div>
        </div>
        <div className="text-xs text-gray-500">
          <strong>Keyboard Enabled:</strong> Focus the tag (Tab key) and press Backspace or Delete to remove<br />
          <strong>Keyboard Disabled:</strong> Must click the close button (keyboard shortcuts disabled)
        </div>
      </div>;
  }
}`,...(_=(W=h.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var q,A,X;T.parameters={...T.parameters,docs:{...(q=T.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div className="flex gap-3 flex-wrap items-center">
      <Tag onClick={() => alert('Tag clicked!')} color="primary">
        Click me
      </Tag>
      <Tag onClick={() => alert('Tag clicked!')} color="success" variant="outline">
        Interactive
      </Tag>
    </div>
}`,...(X=(A=T.parameters)==null?void 0:A.docs)==null?void 0:X.source}}};var H,O,$;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold mb-3">Technology Stack</h3>
        <div className="flex gap-2 flex-wrap">
          <Tag variant="outline" color="primary" size="sm">
            React
          </Tag>
          <Tag variant="outline" color="accent" size="sm">
            TypeScript
          </Tag>
          <Tag variant="outline" color="success" size="sm">
            Tailwind CSS
          </Tag>
          <Tag variant="outline" color="info" size="sm">
            Storybook
          </Tag>
          <Tag variant="outline" color="warning" size="sm">
            Vite
          </Tag>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-3">Status Tags</h3>
        <div className="flex gap-2 flex-wrap">
          <Tag variant="soft" color="success" icon={<Star size={16} />}>
            Active
          </Tag>
          <Tag variant="soft" color="warning" icon={<Star size={16} />}>
            Pending
          </Tag>
          <Tag variant="soft" color="error" icon={<X size={16} />}>
            Inactive
          </Tag>
          <Tag variant="soft" color="info" icon={<TagIcon size={16} />}>
            Draft
          </Tag>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-3">Category Tags (Removable)</h3>
        <TagListExample />
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-3">Priority Labels</h3>
        <div className="flex gap-2 flex-wrap">
          <Tag variant="solid" color="error" size="xs">
            Critical
          </Tag>
          <Tag variant="solid" color="warning" size="xs">
            High
          </Tag>
          <Tag variant="solid" color="info" size="xs">
            Medium
          </Tag>
          <Tag variant="solid" color="default" size="xs">
            Low
          </Tag>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-3">Feature Tags</h3>
        <div className="flex gap-2 flex-wrap">
          <Tag variant="solid" color="success" icon={<Star size={16} />}>
            New
          </Tag>
          <Tag variant="solid" color="warning" icon={<Star size={16} />}>
            Featured
          </Tag>
          <Tag variant="solid" color="primary" icon={<Star size={16} />}>
            Premium
          </Tag>
          <Tag variant="solid" color="accent" icon={<Star size={16} />}>
            Beta
          </Tag>
        </div>
      </div>
    </div>
}`,...($=(O=y.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var J,G,Q;j.parameters={...j.parameters,docs:{...(J=j.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const colors = ['default', 'primary', 'secondary', 'accent', 'success', 'error', 'warning', 'info'] as const;
    const variants = ['default', 'solid', 'outline', 'soft'] as const;
    const sizes = ['xs', 'sm', 'md', 'lg'] as const;
    return <div className="space-y-8">
        {variants.map(variant => <div key={variant}>
            <h3 className="text-lg font-semibold mb-3 capitalize">{variant}</h3>
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
                          <Tag color={color} variant={variant} size={size}>Tag</Tag>
                        </td>)}
                    </tr>)}
                </tbody>
              </table>
            </div>
          </div>)}
      </div>;
  }
}`,...(Q=(G=j.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};const ve=["Primary","WithIcons","Closable","ClosableWithIcons","DisableKeyboardRemoval","Clickable","RealWorldExamples","ColorSizeMatrix"];export{T as Clickable,v as Closable,b as ClosableWithIcons,j as ColorSizeMatrix,h as DisableKeyboardRemoval,u as Primary,y as RealWorldExamples,f as WithIcons,ve as __namedExportsOrder,fe as default};
