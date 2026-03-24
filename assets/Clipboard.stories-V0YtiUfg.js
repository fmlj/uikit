import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as oe,r as c}from"./index-ZH-6pyQh.js";import{c as m,i as z,a as re}from"./utils-_uLxnvdl.js";import{u as ae,R as se}from"./useRipple-BuuTbn0W.js";import{c as w}from"./variants-C8qliDOr.js";import{C as ne}from"./check-CKCh4cDT.js";import{C as ie}from"./copy-IW0OH-Me.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createLucideIcon-BXJdBs6C.js";async function le(r){var a,i;if((a=navigator.clipboard)!=null&&a.writeText){await navigator.clipboard.writeText(r);return}if(typeof ClipboardItem<"u"&&((i=navigator.clipboard)!=null&&i.write)){const s=new Blob([r],{type:"text/plain"});await navigator.clipboard.write([new ClipboardItem({"text/plain":s})]);return}const o=document.createElement("textarea");o.value=r,o.style.cssText="position:fixed;opacity:0;left:-9999px",document.body.appendChild(o),o.focus(),o.select();try{const s=document.getSelection();if(s){const d=document.createRange();d.selectNodeContents(o),s.removeAllRanges(),s.addRange(d)}document.execCommand("copy")}finally{document.body.removeChild(o)}}const de=re("inline-flex items-center justify-between gap-2 rounded-md font-medium transition-colors cursor-pointer border focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background relative overflow-hidden",{variants:{size:{xs:"px-1.5 py-1 text-xs",sm:"px-2 py-1.5 text-xs",md:"px-2.5 py-2 text-sm",lg:"px-3.5 py-2 text-lg"}},defaultVariants:{size:"md"}}),ce=(r,o)=>{const a=w[r]||w.default;return o==="solid"?m(a,"bg-slot border-slot text-slot-fg hover:bg-slot-90"):o==="soft"?m(a,"bg-slot-10 border-slot-30 text-slot hover:bg-slot-20"):m(a,"bg-background border-slot text-slot hover:bg-slot-10")},t=oe.memo(({value:r,color:o="default",size:a="md",variant:i="default",showValue:s=!0,successDuration:d=2e3,disabled:l=!1,onCopy:C,className:F,classNames:n,ref:J})=>{const[N,V]=c.useState(!1),p=c.useRef(null),j=c.useRef(!0),{ripples:Q,onPointerDown:Y,onKeyDown:Z,onAnimationEnd:ee}=ae(!l);c.useEffect(()=>()=>{j.current=!1,p.current&&clearTimeout(p.current)},[]);const S=async()=>{if(!l)try{await le(r),j.current&&V(!0),C==null||C(),p.current&&clearTimeout(p.current),p.current=setTimeout(()=>{j.current&&V(!1)},d)}catch{}},te=u=>{(u.key==="Enter"||u.key===" ")&&(u.preventDefault(),S())};return e.jsxs("div",{ref:J,role:"button",tabIndex:l?-1:0,onClick:S,onPointerDown:Y,onKeyDown:u=>{Z(u),te(u)},"aria-label":N?"Copied to clipboard":`Copy ${s?r:"to clipboard"}`,"aria-disabled":l,"aria-live":"polite",className:m(de({size:a}),ce(o,i),w[o],"focus-visible:ring-slot",l&&"opacity-50 cursor-not-allowed",!s&&"aspect-square justify-center","clipboard_root",n==null?void 0:n.root,F),"data-slot":"root",children:[s&&e.jsx("span",{className:m("font-mono truncate clipboard_input",n==null?void 0:n.input),"data-slot":"input",children:r}),N?e.jsx(ne,{className:m(z[a],"shrink-0 clipboard_button animate-in zoom-in-75 duration-200",n==null?void 0:n.button),"data-slot":"icon"}):e.jsx(ie,{className:m(z[a],"shrink-0 clipboard_button",n==null?void 0:n.button),"data-slot":"icon"}),e.jsx(se,{ripples:Q,onAnimationEnd:ee})]})});t.displayName="Clipboard";t.__docgenInfo={description:"",methods:[],displayName:"Clipboard",props:{color:{defaultValue:{value:'"default"',computed:!1},required:!1},size:{defaultValue:{value:'"md"',computed:!1},required:!1},variant:{defaultValue:{value:'"default"',computed:!1},required:!1},showValue:{defaultValue:{value:"true",computed:!1},required:!1},successDuration:{defaultValue:{value:"2000",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const ge={title:"General/Clipboard",component:t,tags:["autodocs"],argTypes:{value:{control:"text",description:"The text value to copy"},size:{control:"select",options:["xs","sm","md","lg"],description:"Component size"},color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"],description:"Color theme"},variant:{control:"select",options:["default","solid","soft"],description:"Visual style variant"},showValue:{control:"boolean",description:"Display the value text"},successDuration:{control:{type:"number",min:500,max:5e3,step:500},description:"Duration of success feedback in milliseconds"}}},x={args:{value:"npm install @your-org/ui",size:"md",color:"default",variant:"default",showValue:!0}},v={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-text-secondary mb-2",children:"Icon only (no text)"}),e.jsx(t,{value:"This value is hidden but will be copied",showValue:!1})]}),e.jsxs("div",{className:"flex gap-2 items-end",children:[e.jsx(t,{value:"Hidden",showValue:!1,size:"xs",color:"primary"}),e.jsx(t,{value:"Hidden",showValue:!1,size:"sm",color:"success"}),e.jsx(t,{value:"Hidden",showValue:!1,size:"md",color:"warning"}),e.jsx(t,{value:"Hidden",showValue:!1,size:"lg",color:"error"})]}),e.jsxs("div",{className:"flex gap-2 items-end",children:[e.jsx(t,{value:"Hidden",size:"xs",color:"primary"}),e.jsx(t,{value:"Hidden",size:"sm",color:"success"}),e.jsx(t,{value:"Hidden",size:"md",color:"warning"}),e.jsx(t,{value:"Hidden",size:"lg",color:"error"})]})]})},f={render:()=>{const[r,o]=c.useState(0);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(t,{value:"Copy me to increment counter",onCopy:()=>o(a=>a+1),color:"primary"}),e.jsxs("p",{className:"text-sm text-text-secondary",children:["Copied ",r," time",r!==1?"s":""]})]})}},b={render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-text-primary mb-1.5",children:"npm"}),e.jsx(t,{value:"npm install @your-org/ui",color:"error",variant:"soft"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-text-primary mb-1.5",children:"yarn"}),e.jsx(t,{value:"yarn add @your-org/ui",color:"info",variant:"soft"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-text-primary mb-1.5",children:"pnpm"}),e.jsx(t,{value:"pnpm add @your-org/ui",color:"warning",variant:"soft"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-text-primary mb-1.5",children:"bun"}),e.jsx(t,{value:"bun add @your-org/ui",color:"accent",variant:"soft"})]})]})},y={render:()=>e.jsxs("div",{className:"space-y-4 max-w-2xl",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-text-primary mb-1.5",children:"Import Statement"}),e.jsx(t,{value:"import { Button } from '@your-org/ui'",variant:"solid",color:"default"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-text-primary mb-1.5",children:"Environment Variable"}),e.jsx(t,{value:"NEXT_PUBLIC_API_URL=https://api.example.com",variant:"soft",color:"info"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-text-primary mb-1.5",children:"API Endpoint"}),e.jsx(t,{value:"https://api.example.com/v1/users",variant:"soft",color:"primary"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-text-primary mb-1.5",children:"Git Command"}),e.jsx(t,{value:"git clone https://github.com/username/repo.git",variant:"soft",color:"secondary"})]})]})},h={render:()=>{const[r,o]=c.useState("Custom text to copy"),[a,i]=c.useState("primary"),[s,d]=c.useState("soft");return e.jsxs("div",{className:"max-w-2xl space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-text-primary mb-4",children:"Clipboard Customizer"}),e.jsxs("div",{className:"space-y-4 p-4 border border-border rounded-lg",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-text-secondary mb-1.5",children:"Text to copy"}),e.jsx("input",{type:"text",value:r,onChange:l=>o(l.target.value),className:"w-full h-10 px-3 text-sm bg-background border border-border rounded-md outline-none text-text-primary placeholder:text-text-muted focus:border-primary transition-colors"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-text-secondary mb-1.5",children:"Color"}),e.jsxs("select",{value:a,onChange:l=>i(l.target.value),className:"w-full h-10 px-3 text-sm bg-background border border-border rounded-md outline-none text-text-primary focus:border-primary transition-colors",children:[e.jsx("option",{value:"default",children:"Default"}),e.jsx("option",{value:"primary",children:"Primary"}),e.jsx("option",{value:"success",children:"Success"}),e.jsx("option",{value:"error",children:"Error"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-text-secondary mb-1.5",children:"Variant"}),e.jsxs("select",{value:s,onChange:l=>d(l.target.value),className:"w-full h-10 px-3 text-sm bg-background border border-border rounded-md outline-none text-text-primary focus:border-primary transition-colors",children:[e.jsx("option",{value:"default",children:"Default"}),e.jsx("option",{value:"solid",children:"Solid"}),e.jsx("option",{value:"soft",children:"Soft"})]})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium text-text-secondary mb-2",children:"Preview"}),e.jsx(t,{value:r,color:a,variant:s})]})]})}},g={render:()=>{const r=["default","primary","secondary","accent","success","error","warning","info"],o=["default","solid","soft"],a=["xs","sm","md","lg"];return e.jsx("div",{className:"space-y-8",children:o.map(i=>e.jsxs("div",{children:[e.jsxs("h3",{className:"text-sm font-semibold mb-4 capitalize",children:[i," Variant"]}),e.jsx("div",{className:"space-y-6",children:a.map(s=>e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-secondary mb-2 uppercase",children:s}),e.jsx("div",{className:"grid grid-cols-2 gap-3",children:r.map(d=>e.jsx(t,{value:`Copy ${d}`,color:d,variant:i,size:s},`${i}-${s}-${d}`))})]},s))})]},i))})}};var k,D,I;x.parameters={...x.parameters,docs:{...(k=x.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    value: "npm install @your-org/ui",
    size: "md",
    color: "default",
    variant: "default",
    showValue: true
  }
}`,...(I=(D=x.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var E,H,P;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div>
        <p className="text-sm text-text-secondary mb-2">Icon only (no text)</p>
        <Clipboard value="This value is hidden but will be copied" showValue={false} />
      </div>

      <div className="flex gap-2 items-end">
        <Clipboard value="Hidden" showValue={false} size="xs" color="primary" />
        <Clipboard value="Hidden" showValue={false} size="sm" color="success" />
        <Clipboard value="Hidden" showValue={false} size="md" color="warning" />
        <Clipboard value="Hidden" showValue={false} size="lg" color="error" />
      </div>
      <div className="flex gap-2 items-end">
        <Clipboard value="Hidden" size="xs" color="primary" />
        <Clipboard value="Hidden" size="sm" color="success" />
        <Clipboard value="Hidden" size="md" color="warning" />
        <Clipboard value="Hidden" size="lg" color="error" />
      </div>
    </div>
}`,...(P=(H=v.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var R,T,_;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const [copyCount, setCopyCount] = useState(0);
    return <div className="space-y-4">
        <Clipboard value="Copy me to increment counter" onCopy={() => setCopyCount(prev => prev + 1)} color="primary" />
        <p className="text-sm text-text-secondary">
          Copied {copyCount} time{copyCount !== 1 ? "s" : ""}
        </p>
      </div>;
  }
}`,...(_=(T=f.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var $,A,q;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">
      <div>
        <p className="text-sm font-medium text-text-primary mb-1.5">npm</p>
        <Clipboard value="npm install @your-org/ui" color="error" variant="soft" />
      </div>

      <div>
        <p className="text-sm font-medium text-text-primary mb-1.5">yarn</p>
        <Clipboard value="yarn add @your-org/ui" color="info" variant="soft" />
      </div>

      <div>
        <p className="text-sm font-medium text-text-primary mb-1.5">pnpm</p>
        <Clipboard value="pnpm add @your-org/ui" color="warning" variant="soft" />
      </div>

      <div>
        <p className="text-sm font-medium text-text-primary mb-1.5">bun</p>
        <Clipboard value="bun add @your-org/ui" color="accent" variant="soft" />
      </div>
    </div>
}`,...(q=(A=b.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};var B,K,L;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 max-w-2xl">
      <div>
        <p className="text-sm font-medium text-text-primary mb-1.5">
          Import Statement
        </p>
        <Clipboard value="import { Button } from '@your-org/ui'" variant="solid" color="default" />
      </div>

      <div>
        <p className="text-sm font-medium text-text-primary mb-1.5">
          Environment Variable
        </p>
        <Clipboard value="NEXT_PUBLIC_API_URL=https://api.example.com" variant="soft" color="info" />
      </div>

      <div>
        <p className="text-sm font-medium text-text-primary mb-1.5">
          API Endpoint
        </p>
        <Clipboard value="https://api.example.com/v1/users" variant="soft" color="primary" />
      </div>

      <div>
        <p className="text-sm font-medium text-text-primary mb-1.5">
          Git Command
        </p>
        <Clipboard value="git clone https://github.com/username/repo.git" variant="soft" color="secondary" />
      </div>
    </div>
}`,...(L=(K=y.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var U,W,G;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const [customValue, setCustomValue] = useState("Custom text to copy");
    const [selectedColor, setSelectedColor] = useState<"default" | "primary" | "success" | "error">("primary");
    const [selectedVariant, setSelectedVariant] = useState<"default" | "solid" | "soft">("soft");
    return <div className="max-w-2xl space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-text-primary mb-4">
            Clipboard Customizer
          </h3>

          <div className="space-y-4 p-4 border border-border rounded-lg">
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1.5">
                Text to copy
              </label>
              <input type="text" value={customValue} onChange={e => setCustomValue(e.target.value)} className="w-full h-10 px-3 text-sm bg-background border border-border rounded-md outline-none text-text-primary placeholder:text-text-muted focus:border-primary transition-colors" />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1.5">
                Color
              </label>
              <select value={selectedColor} onChange={e => setSelectedColor(e.target.value as any)} className="w-full h-10 px-3 text-sm bg-background border border-border rounded-md outline-none text-text-primary focus:border-primary transition-colors">
                <option value="default">Default</option>
                <option value="primary">Primary</option>
                <option value="success">Success</option>
                <option value="error">Error</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1.5">
                Variant
              </label>
              <select value={selectedVariant} onChange={e => setSelectedVariant(e.target.value as any)} className="w-full h-10 px-3 text-sm bg-background border border-border rounded-md outline-none text-text-primary focus:border-primary transition-colors">
                <option value="default">Default</option>
                <option value="solid">Solid</option>
                <option value="soft">Soft</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-text-secondary mb-2">
            Preview
          </h4>
          <Clipboard value={customValue} color={selectedColor} variant={selectedVariant} />
        </div>
      </div>;
  }
}`,...(G=(W=h.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var M,X,O;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
                  <div className="grid grid-cols-2 gap-3">
                    {colors.map(color => <Clipboard key={\`\${variant}-\${size}-\${color}\`} value={\`Copy \${color}\`} color={color} variant={variant} size={size} />)}
                  </div>
                </div>)}
            </div>
          </div>)}
      </div>;
  }
}`,...(O=(X=g.parameters)==null?void 0:X.docs)==null?void 0:O.source}}};const Ce=["Primary","WithoutValue","WithCallback","InstallationCommands","CodeSnippets","InteractiveDemo","ColorSizeMatrix"];export{y as CodeSnippets,g as ColorSizeMatrix,b as InstallationCommands,h as InteractiveDemo,x as Primary,f as WithCallback,v as WithoutValue,Ce as __namedExportsOrder,ge as default};
