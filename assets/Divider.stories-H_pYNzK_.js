import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as s,a as O}from"./utils-_uLxnvdl.js";import{R as W}from"./index-ZH-6pyQh.js";import{c as b}from"./variants-C8qliDOr.js";import"./_commonjsHelpers-CqkleIqs.js";const o=O("",{variants:{orientation:{horizontal:"w-full",vertical:"h-full"},variant:{solid:"border-solid",dashed:"border-dashed",dotted:"border-dotted"}},defaultVariants:{orientation:"horizontal",variant:"solid"}}),N={left:{before:"w-(--divider-left-before-width)",after:"w-(--divider-left-after-width)"},center:{before:"w-(--divider-center-before-width)",after:"w-(--divider-center-after-width)"},right:{before:"w-(--divider-right-before-width)",after:"w-(--divider-right-after-width)"}},i=W.memo(({orientation:a="horizontal",variant:r="solid",color:x="default",children:j,textAlign:y="center",spacing:n,className:h,classNames:t,ref:u,...f})=>{const M=!!j;return a==="horizontal"?M?e.jsxs("div",{ref:u,role:"separator","aria-orientation":"horizontal","data-slot":"root",className:s("divider_root","flex items-center gap-(--divider-gap) text-sm",b[x],"text-slot",h,t==null?void 0:t.root),style:n?{margin:n}:void 0,...f,children:[e.jsx("div",{"data-slot":"line",className:s("divider_line","border-t border-slot",o({variant:r}),N[y].before,t==null?void 0:t.line)}),e.jsx("span",{"data-slot":"label",className:s("divider_label","whitespace-nowrap flex-shrink-0",t==null?void 0:t.label),children:j}),e.jsx("div",{"data-slot":"line",className:s("divider_line","border-t border-slot",o({variant:r}),N[y].after,t==null?void 0:t.line)})]}):e.jsx("hr",{ref:u,role:"separator","aria-orientation":"horizontal","data-slot":"root",className:s("divider_root","border-t border-slot",b[x],o({orientation:a,variant:r}),h,t==null?void 0:t.root),style:n?{margin:n}:void 0,...f}):e.jsx("div",{ref:u,role:"separator","aria-orientation":"vertical","data-slot":"root",className:s("divider_root","inline-block w-px border-l self-stretch border-slot",b[x],o({variant:r}),h,t==null?void 0:t.root),style:n?{margin:n}:void 0,...f})});i.displayName="Divider";i.__docgenInfo={description:`Divider Component

A visual separator that can be used to divide content sections.
Supports horizontal and vertical orientations, different line styles,
color variants, and optional label text.

@component
@example
// Basic horizontal divider
<Divider />

@example
// Divider with text label
<Divider>Section Title</Divider>

@example
// Colored divider
<Divider color="primary" />

@example
// Vertical divider
<Divider orientation="vertical" />

@example
// Dashed divider with left-aligned text
<Divider variant="dashed" textAlign="left" color="accent">
  Options
</Divider>

@param {DividerProps} props - Component props
@returns {JSX.Element} Rendered divider component`,methods:[],displayName:"Divider",props:{orientation:{defaultValue:{value:"'horizontal'",computed:!1},required:!1},variant:{defaultValue:{value:"'solid'",computed:!1},required:!1},color:{defaultValue:{value:"'default'",computed:!1},required:!1},textAlign:{defaultValue:{value:"'center'",computed:!1},required:!1}}};const G={title:"Layout/Divider",component:i,tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"],description:"The orientation of the divider"},variant:{control:"select",options:["solid","dashed","dotted"],description:"The visual style of the divider line"},color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"],description:"Theme color for the divider"},textAlign:{control:"select",options:["left","center","right"],description:"Position of the label text within the divider"},children:{control:"text",description:"Optional label text to display within the divider"}}},d={args:{orientation:"horizontal",variant:"solid"}},l={render:()=>e.jsxs("div",{className:"space-y-4 p-4",children:[e.jsx("div",{children:"Content above"}),e.jsx(i,{}),e.jsx("div",{children:"Content below"})]})},c={render:()=>e.jsxs("div",{className:"flex items-center gap-4 p-4 h-24",children:[e.jsx("div",{children:"Left content"}),e.jsx(i,{orientation:"vertical"}),e.jsx("div",{children:"Middle content"}),e.jsx(i,{orientation:"vertical"}),e.jsx("div",{children:"Right content"})]})},m={render:()=>e.jsxs("div",{className:"space-y-8 p-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4",children:"Center Aligned (Default)"}),e.jsx(i,{children:"Section Title"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4",children:"Left Aligned"}),e.jsx(i,{textAlign:"left",children:"Options"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4",children:"Right Aligned"}),e.jsx(i,{textAlign:"right",children:"End Section"})]})]})},p={render:()=>e.jsxs("div",{className:"space-y-8 p-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4",children:"Content Sections"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),e.jsx(i,{}),e.jsx("p",{children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4",children:"Form Sections"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"Name"}),e.jsx("input",{type:"text",className:"w-full px-3 py-2 border border-border rounded-md",placeholder:"Enter your name"})]}),e.jsx(i,{children:"Contact Information"}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"Email"}),e.jsx("input",{type:"email",className:"w-full px-3 py-2 border border-border rounded-md",placeholder:"Enter your email"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4",children:"Vertical Menu Separator"}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("button",{className:"px-4 py-2 text-sm hover:text-primary",children:"Home"}),e.jsx(i,{orientation:"vertical",className:"h-6"}),e.jsx("button",{className:"px-4 py-2 text-sm hover:text-primary",children:"About"}),e.jsx(i,{orientation:"vertical",className:"h-6"}),e.jsx("button",{className:"px-4 py-2 text-sm hover:text-primary",children:"Contact"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4",children:"List Separator"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-surface rounded-lg",children:[e.jsx("h4",{className:"font-medium",children:"Item 1"}),e.jsx("p",{className:"text-sm text-text-secondary",children:"Description for item 1"})]}),e.jsx(i,{variant:"dashed"}),e.jsxs("div",{className:"p-4 bg-surface rounded-lg",children:[e.jsx("h4",{className:"font-medium",children:"Item 2"}),e.jsx("p",{className:"text-sm text-text-secondary",children:"Description for item 2"})]}),e.jsx(i,{variant:"dashed"}),e.jsxs("div",{className:"p-4 bg-surface rounded-lg",children:[e.jsx("h4",{className:"font-medium",children:"Item 3"}),e.jsx("p",{className:"text-sm text-text-secondary",children:"Description for item 3"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4",children:"Section Headers"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx(i,{textAlign:"left",variant:"solid",children:"Personal Information"}),e.jsxs("div",{className:"mt-4 space-y-2",children:[e.jsx("p",{className:"text-sm",children:"Name: John Doe"}),e.jsx("p",{className:"text-sm",children:"Age: 30"})]})]}),e.jsxs("div",{children:[e.jsx(i,{textAlign:"left",variant:"solid",children:"Professional Details"}),e.jsxs("div",{className:"mt-4 space-y-2",children:[e.jsx("p",{className:"text-sm",children:"Position: Senior Developer"}),e.jsx("p",{className:"text-sm",children:"Experience: 8 years"})]})]})]})]})]})},v={render:()=>{const a=["default","primary","secondary","accent","success","error","warning","info"];return e.jsx("div",{className:"space-y-4 p-4",children:a.map(r=>e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-secondary mb-2 capitalize",children:r}),e.jsx(i,{color:r})]},r))})}};var g,D,w;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    variant: 'solid'
  }
}`,...(w=(D=d.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var S,A,C;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 p-4">
      <div>Content above</div>
      <Divider />
      <div>Content below</div>
    </div>
}`,...(C=(A=l.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var z,E,q;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4 p-4 h-24">
      <div>Left content</div>
      <Divider orientation="vertical" />
      <div>Middle content</div>
      <Divider orientation="vertical" />
      <div>Right content</div>
    </div>
}`,...(q=(E=c.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var V,I,P;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div className="space-y-8 p-4">
      <div>
        <h3 className="text-sm font-semibold mb-4">Center Aligned (Default)</h3>
        <Divider>Section Title</Divider>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-4">Left Aligned</h3>
        <Divider textAlign="left">Options</Divider>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-4">Right Aligned</h3>
        <Divider textAlign="right">End Section</Divider>
      </div>
    </div>
}`,...(P=(I=m.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var R,T,_;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div className="space-y-8 p-4">
      <div>
        <h3 className="text-sm font-semibold mb-4">Content Sections</h3>
        <div className="space-y-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Divider />
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-4">Form Sections</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input type="text" className="w-full px-3 py-2 border border-border rounded-md" placeholder="Enter your name" />
          </div>
          <Divider>Contact Information</Divider>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" className="w-full px-3 py-2 border border-border rounded-md" placeholder="Enter your email" />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-4">Vertical Menu Separator</h3>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 text-sm hover:text-primary">
            Home
          </button>
          <Divider orientation="vertical" className="h-6" />
          <button className="px-4 py-2 text-sm hover:text-primary">
            About
          </button>
          <Divider orientation="vertical" className="h-6" />
          <button className="px-4 py-2 text-sm hover:text-primary">
            Contact
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-4">List Separator</h3>
        <div className="space-y-4">
          <div className="p-4 bg-surface rounded-lg">
            <h4 className="font-medium">Item 1</h4>
            <p className="text-sm text-text-secondary">Description for item 1</p>
          </div>
          <Divider variant="dashed" />
          <div className="p-4 bg-surface rounded-lg">
            <h4 className="font-medium">Item 2</h4>
            <p className="text-sm text-text-secondary">Description for item 2</p>
          </div>
          <Divider variant="dashed" />
          <div className="p-4 bg-surface rounded-lg">
            <h4 className="font-medium">Item 3</h4>
            <p className="text-sm text-text-secondary">Description for item 3</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-4">Section Headers</h3>
        <div className="space-y-6">
          <div>
            <Divider textAlign="left" variant="solid">
              Personal Information
            </Divider>
            <div className="mt-4 space-y-2">
              <p className="text-sm">Name: John Doe</p>
              <p className="text-sm">Age: 30</p>
            </div>
          </div>
          <div>
            <Divider textAlign="left" variant="solid">
              Professional Details
            </Divider>
            <div className="mt-4 space-y-2">
              <p className="text-sm">Position: Senior Developer</p>
              <p className="text-sm">Experience: 8 years</p>
            </div>
          </div>
        </div>
      </div>
    </div>
}`,...(_=(T=p.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var L,k,H;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const colors = ['default', 'primary', 'secondary', 'accent', 'success', 'error', 'warning', 'info'] as const;
    return <div className="space-y-4 p-4">
        {colors.map(color => <div key={color}>
            <p className="text-xs text-text-secondary mb-2 capitalize">{color}</p>
            <Divider color={color} />
          </div>)}
      </div>;
  }
}`,...(H=(k=v.parameters)==null?void 0:k.docs)==null?void 0:H.source}}};const K=["Primary","Horizontal","Vertical","WithText","RealWorldExamples","ColorMatrix"];export{v as ColorMatrix,l as Horizontal,d as Primary,p as RealWorldExamples,c as Vertical,m as WithText,K as __namedExportsOrder,G as default};
