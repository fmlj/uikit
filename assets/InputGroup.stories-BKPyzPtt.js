import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as f,a as g}from"./utils-_uLxnvdl.js";import{r as y,R as b}from"./index-ZH-6pyQh.js";import{S as d}from"./search-DfqimKq8.js";import{M as A}from"./mail-1HDD9Lg3.js";import{G as $}from"./globe-TCM94dGE.js";import{D as X}from"./dollar-sign-B3HQpC2Y.js";import{U as Y}from"./user-BM8Midap.js";import{c as ee}from"./createLucideIcon-BXJdBs6C.js";import{L as Z}from"./lock-D-iRFELD.js";import{P as ne}from"./phone-Drv7Klxt.js";import"./_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8",key:"7n84p3"}]],te=ee("at-sign",re),oe=g("relative flex items-center w-full bg-background border border-border rounded-md transition-colors focus-within:border-primary",{variants:{size:{xs:"h-(--input-height-xs)",sm:"h-(--input-height-sm)",md:"h-(--input-height-md)",lg:"h-(--input-height-lg)"}},defaultVariants:{size:"md"}}),pe=g("flex-1 w-full h-full bg-transparent outline-none text-text-primary placeholder:text-text-secondary/50 disabled:opacity-50 disabled:cursor-not-allowed read-only:cursor-default",{variants:{size:{xs:"px-(--input-padding-x-xs) text-xs",sm:"px-(--input-padding-x-sm) text-sm",md:"px-(--input-padding-x-md) text-base",lg:"px-(--input-padding-x-lg) text-lg"}},defaultVariants:{size:"md"}}),se=g("flex items-center gap-2 text-text-secondary shrink-0",{variants:{size:{xs:"last:pr-2 pl-2 text-xs",sm:"last:pr-2.5 pl-2.5 text-sm",md:"last:pr-3 pl-3 text-base",lg:"last:pr-4 pl-4 text-lg"}},defaultVariants:{size:"md"}}),r=y.memo(({children:a,size:s="md",className:p,classNames:o,"aria-label":j})=>e.jsx("div",{"data-slot":"inputGroup_root",className:f("inputGroup_root",oe({size:s}),o==null?void 0:o.root,p),"aria-label":j,children:b.Children.map(a,u=>{var v;if(b.isValidElement(u)){const S=(v=u.type)==null?void 0:v.displayName;if(S==="InputGroupInput"||S==="InputGroupAddon")return b.cloneElement(u,{size:s,classNames:o})}return u})}));r.displayName="InputGroup";const t=y.memo(({className:a,size:s="md",classNames:p,ref:o,...j})=>e.jsx("input",{ref:o,"data-slot":"inputGroup_input",className:f("inputGroup_input",pe({size:s}),p==null?void 0:p.input,a),...j}));t.displayName="InputGroupInput";const n=y.memo(({children:a,size:s="md",className:p,classNames:o})=>e.jsx("div",{"data-slot":"inputGroup_addon",className:f("inputGroup_addon",se({size:s}),o==null?void 0:o.addon,p),children:a}));n.displayName="InputGroupAddon";t.__docgenInfo={description:"",methods:[],displayName:"InputGroupInput",props:{size:{defaultValue:{value:'"md"',computed:!1},required:!1}}};n.__docgenInfo={description:"",methods:[],displayName:"InputGroupAddon",props:{size:{defaultValue:{value:'"md"',computed:!1},required:!1}}};r.__docgenInfo={description:"",methods:[],displayName:"InputGroup",props:{size:{defaultValue:{value:'"md"',computed:!1},required:!1}}};const be={title:"Data Entry/InputGroup",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"InputGroup automatically positions addons based on their order in children. Addons before the input appear on the left, addons after appear on the right."}}}},l={render:()=>e.jsxs(r,{children:[e.jsx(t,{placeholder:"Enter text..."}),e.jsx(n,{children:e.jsx(d,{size:16})})]})},i={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(r,{children:[e.jsx(t,{placeholder:"Search..."}),e.jsx(n,{children:e.jsx(d,{size:16})})]}),e.jsxs(r,{children:[e.jsx(n,{children:e.jsx(A,{size:16})}),e.jsx(t,{placeholder:"Email address"})]})]})},c={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(r,{children:[e.jsx(n,{children:e.jsx(Y,{size:16})}),e.jsx(t,{placeholder:"Username"})]}),e.jsxs(r,{children:[e.jsx(n,{children:e.jsx(A,{size:16})}),e.jsx(t,{type:"email",placeholder:"Email address"})]}),e.jsxs(r,{children:[e.jsx(n,{children:e.jsx(Z,{size:16})}),e.jsx(t,{type:"password",placeholder:"Password"})]}),e.jsxs(r,{children:[e.jsx(n,{children:e.jsx(ne,{size:16})}),e.jsx(t,{type:"tel",placeholder:"Phone number"})]})]})},m={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(r,{children:[e.jsx(n,{children:e.jsx("span",{className:"text-sm font-medium",children:"https://"})}),e.jsx(t,{placeholder:"example.com"})]}),e.jsxs(r,{children:[e.jsx(t,{placeholder:"Enter amount"}),e.jsx(n,{children:e.jsx("span",{className:"text-sm font-medium",children:"USD"})})]}),e.jsxs(r,{children:[e.jsx(n,{children:e.jsx("span",{className:"text-sm",children:"@"})}),e.jsx(t,{placeholder:"username"})]}),e.jsxs(r,{children:[e.jsx(n,{children:e.jsx(X,{size:16})}),e.jsx(t,{type:"number",placeholder:"0.00"})]})]})},x={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(r,{children:[e.jsx(t,{placeholder:"Search..."}),e.jsx(n,{children:e.jsx("button",{type:"button",className:"px-3 py-1 bg-primary text-background rounded text-sm font-medium hover:bg-primary/90 pointer-events-auto",children:"Search"})})]}),e.jsxs(r,{children:[e.jsx(t,{placeholder:"Enter email..."}),e.jsx(n,{children:e.jsx("button",{type:"button",className:"px-3 py-1 bg-success text-background rounded text-sm font-medium hover:bg-success/90 pointer-events-auto",children:"Send"})})]}),e.jsxs(r,{children:[e.jsx(n,{children:e.jsx("button",{type:"button",className:"px-3 py-1 bg-surface border border-border rounded text-sm font-medium hover:bg-surface/80 pointer-events-auto",children:"Select"})}),e.jsx(t,{placeholder:"Choose file..."})]})]})},h={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(r,{children:[e.jsx(n,{children:e.jsx(d,{size:16})}),e.jsx(t,{placeholder:"Search products..."}),e.jsx(n,{children:e.jsx("span",{className:"text-xs text-text-secondary",children:"Ctrl+K"})})]}),e.jsxs(r,{children:[e.jsx(n,{children:e.jsx($,{size:16})}),e.jsx(t,{placeholder:"example"}),e.jsx(n,{children:e.jsx("span",{className:"text-sm",children:".com"})})]}),e.jsxs(r,{children:[e.jsx(n,{children:e.jsx(X,{size:16})}),e.jsx(t,{type:"number",placeholder:"0.00"}),e.jsx(n,{children:e.jsxs("select",{className:"text-sm bg-transparent outline-none cursor-pointer pointer-events-auto",children:[e.jsx("option",{children:"USD"}),e.jsx("option",{children:"EUR"}),e.jsx("option",{children:"GBP"})]})})]})]})},I={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(r,{children:[e.jsx(n,{children:e.jsx(d,{size:16})}),e.jsx(t,{placeholder:"Search products..."})]}),e.jsxs(r,{children:[e.jsx(t,{placeholder:"Search..."}),e.jsx(n,{children:e.jsx(d,{size:16})})]}),e.jsxs(r,{children:[e.jsx(n,{children:e.jsx(d,{size:16})}),e.jsx(t,{placeholder:"Search..."}),e.jsx(n,{children:e.jsx("button",{type:"button",className:"px-3 py-1.5 bg-primary text-background rounded text-sm font-medium hover:bg-primary/90 pointer-events-auto",children:"Search"})})]})]})},G={render:()=>e.jsxs("div",{className:"max-w-md p-6 border border-border rounded-lg space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-text-primary mb-4",children:"Create Account"}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-text-secondary mb-1.5",children:"Full Name"}),e.jsxs(r,{children:[e.jsx(n,{children:e.jsx(Y,{size:16})}),e.jsx(t,{placeholder:"John Doe"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-text-secondary mb-1.5",children:"Email"}),e.jsxs(r,{children:[e.jsx(n,{children:e.jsx(A,{size:16})}),e.jsx(t,{type:"email",placeholder:"john@example.com"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-text-secondary mb-1.5",children:"Username"}),e.jsxs(r,{children:[e.jsx(n,{children:e.jsx(te,{size:16})}),e.jsx(t,{placeholder:"johndoe"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-text-secondary mb-1.5",children:"Password"}),e.jsxs(r,{children:[e.jsx(n,{children:e.jsx(Z,{size:16})}),e.jsx(t,{type:"password",placeholder:"Create password"})]})]}),e.jsx("button",{type:"button",className:"w-full h-12 bg-primary text-background rounded-md font-medium hover:bg-primary/90",children:"Sign Up"})]})};var N,z,k;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <InputGroup>
      <InputGroupInput placeholder="Enter text..." />
      <InputGroupAddon>
        <Search size={16} />
      </InputGroupAddon>
    </InputGroup>
}`,...(k=(z=l.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var E,w,U;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      {/* Right addon - addon comes after input */}
      <InputGroup>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <Search size={16} />
        </InputGroupAddon>
      </InputGroup>

      {/* Left addon - addon comes before input */}
      <InputGroup>
        <InputGroupAddon>
          <Mail size={16} />
        </InputGroupAddon>
        <InputGroupInput placeholder="Email address" />
      </InputGroup>
    </div>
}`,...(U=(w=i.parameters)==null?void 0:w.docs)==null?void 0:U.source}}};var _,P,D;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <InputGroup>
        <InputGroupAddon>
          <User size={16} />
        </InputGroupAddon>
        <InputGroupInput placeholder="Username" />
      </InputGroup>

      <InputGroup>
        <InputGroupAddon>
          <Mail size={16} />
        </InputGroupAddon>
        <InputGroupInput type="email" placeholder="Email address" />
      </InputGroup>

      <InputGroup>
        <InputGroupAddon>
          <Lock size={16} />
        </InputGroupAddon>
        <InputGroupInput type="password" placeholder="Password" />
      </InputGroup>

      <InputGroup>
        <InputGroupAddon>
          <Phone size={16} />
        </InputGroupAddon>
        <InputGroupInput type="tel" placeholder="Phone number" />
      </InputGroup>
    </div>
}`,...(D=(P=c.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var V,C,B;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <InputGroup>
        <InputGroupAddon>
          <span className="text-sm font-medium">https://</span>
        </InputGroupAddon>
        <InputGroupInput placeholder="example.com" />
      </InputGroup>

      <InputGroup>
        <InputGroupInput placeholder="Enter amount" />
        <InputGroupAddon>
          <span className="text-sm font-medium">USD</span>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupAddon>
          <span className="text-sm">@</span>
        </InputGroupAddon>
        <InputGroupInput placeholder="username" />
      </InputGroup>

      <InputGroup>
        <InputGroupAddon>
          <DollarSign size={16} />
        </InputGroupAddon>
        <InputGroupInput type="number" placeholder="0.00" />
      </InputGroup>
    </div>
}`,...(B=(C=m.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var R,L,M;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <InputGroup>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <button type="button" className="px-3 py-1 bg-primary text-background rounded text-sm font-medium hover:bg-primary/90 pointer-events-auto">
            Search
          </button>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupInput placeholder="Enter email..." />
        <InputGroupAddon>
          <button type="button" className="px-3 py-1 bg-success text-background rounded text-sm font-medium hover:bg-success/90 pointer-events-auto">
            Send
          </button>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupAddon>
          <button type="button" className="px-3 py-1 bg-surface border border-border rounded text-sm font-medium hover:bg-surface/80 pointer-events-auto">
            Select
          </button>
        </InputGroupAddon>
        <InputGroupInput placeholder="Choose file..." />
      </InputGroup>
    </div>
}`,...(M=(L=x.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var W,F,q;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <InputGroup>
        <InputGroupAddon>
          <Search size={16} />
        </InputGroupAddon>
        <InputGroupInput placeholder="Search products..." />
        <InputGroupAddon>
          <span className="text-xs text-text-secondary">Ctrl+K</span>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupAddon>
          <Globe size={16} />
        </InputGroupAddon>
        <InputGroupInput placeholder="example" />
        <InputGroupAddon>
          <span className="text-sm">.com</span>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupAddon>
          <DollarSign size={16} />
        </InputGroupAddon>
        <InputGroupInput type="number" placeholder="0.00" />
        <InputGroupAddon>
          <select className="text-sm bg-transparent outline-none cursor-pointer pointer-events-auto">
            <option>USD</option>
            <option>EUR</option>
            <option>GBP</option>
          </select>
        </InputGroupAddon>
      </InputGroup>
    </div>
}`,...(q=(F=h.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var J,K,T;I.parameters={...I.parameters,docs:{...(J=I.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <InputGroup>
        <InputGroupAddon>
          <Search size={16} />
        </InputGroupAddon>
        <InputGroupInput placeholder="Search products..." />
      </InputGroup>

      <InputGroup>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <Search size={16} />
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupAddon>
          <Search size={16} />
        </InputGroupAddon>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <button type="button" className="px-3 py-1.5 bg-primary text-background rounded text-sm font-medium hover:bg-primary/90 pointer-events-auto">
            Search
          </button>
        </InputGroupAddon>
      </InputGroup>
    </div>
}`,...(T=(K=I.parameters)==null?void 0:K.docs)==null?void 0:T.source}}};var O,H,Q;G.parameters={...G.parameters,docs:{...(O=G.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div className="max-w-md p-6 border border-border rounded-lg space-y-4">
      <h2 className="text-xl font-semibold text-text-primary mb-4">
        Create Account
      </h2>

      <div>
        <label className="block text-sm font-medium text-text-secondary mb-1.5">
          Full Name
        </label>
        <InputGroup>
          <InputGroupAddon>
            <User size={16} />
          </InputGroupAddon>
          <InputGroupInput placeholder="John Doe" />
        </InputGroup>
      </div>

      <div>
        <label className="block text-sm font-medium text-text-secondary mb-1.5">
          Email
        </label>
        <InputGroup>
          <InputGroupAddon>
            <Mail size={16} />
          </InputGroupAddon>
          <InputGroupInput type="email" placeholder="john@example.com" />
        </InputGroup>
      </div>

      <div>
        <label className="block text-sm font-medium text-text-secondary mb-1.5">
          Username
        </label>
        <InputGroup>
          <InputGroupAddon>
            <AtSign size={16} />
          </InputGroupAddon>
          <InputGroupInput placeholder="johndoe" />
        </InputGroup>
      </div>

      <div>
        <label className="block text-sm font-medium text-text-secondary mb-1.5">
          Password
        </label>
        <InputGroup>
          <InputGroupAddon>
            <Lock size={16} />
          </InputGroupAddon>
          <InputGroupInput type="password" placeholder="Create password" />
        </InputGroup>
      </div>

      <button type="button" className="w-full h-12 bg-primary text-background rounded-md font-medium hover:bg-primary/90">
        Sign Up
      </button>
    </div>
}`,...(Q=(H=G.parameters)==null?void 0:H.docs)==null?void 0:Q.source}}};const fe=["Primary","BasicUsage","WithIcons","WithText","WithButtons","BothSides","SearchExamples","RegistrationForm"];export{i as BasicUsage,h as BothSides,l as Primary,G as RegistrationForm,I as SearchExamples,x as WithButtons,c as WithIcons,m as WithText,fe as __namedExportsOrder,be as default};
