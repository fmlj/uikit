import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as o,i as g,a as pe}from"./utils-_uLxnvdl.js";import{R as ue}from"./index-ZH-6pyQh.js";import{c as fe}from"./variants-C8qliDOr.js";import{c as ee}from"./createLucideIcon-BXJdBs6C.js";import{A as f}from"./arrow-right-DA4W7e7_.js";import{D as ne}from"./download-DHgBCDXU.js";import"./_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],re=ee("external-link",be);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ke=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],L=ee("github",ke),ve=pe("inline-flex items-center gap-1 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slot focus-visible:ring-offset-2 focus-visible:ring-offset-background text-slot hover:text-slot-80",{variants:{color:fe,size:{xs:"text-xs",sm:"text-sm",md:"text-base",lg:"text-lg"},underline:{always:"underline",hover:"no-underline hover:underline",none:"no-underline"},disabled:{true:"opacity-50 pointer-events-none cursor-not-allowed",false:"cursor-pointer"}},defaultVariants:{color:"default",size:"md",underline:"hover",disabled:!1}}),n=ue.memo(({children:se,color:ie="default",size:s="md",underline:oe="hover",external:j=!1,showExternalIcon:ae=!0,disabled:i=!1,leftIcon:b,rightIcon:k,className:le,classNames:r,href:te,ref:ce,onClick:v,...de})=>{const me=y=>{if(i){y.preventDefault();return}v==null||v(y)},he=j?{target:"_blank",rel:"noopener noreferrer"}:{},xe=j&&ae;return e.jsxs("a",{ref:ce,href:i?void 0:te,className:o("link_root",(b||k)&&"align-top",ve({color:ie,size:s,underline:oe,disabled:i}),r==null?void 0:r.root,le),onClick:me,"aria-disabled":i||void 0,"data-slot":"root",...he,...de,children:[b&&e.jsx("span",{className:o("link_icon","inline-flex items-center justify-center shrink-0",g[s],r==null?void 0:r.icon),"data-slot":"icon",children:b}),se,k&&e.jsx("span",{className:o("link_icon","inline-flex items-center justify-center shrink-0",g[s],r==null?void 0:r.icon),"data-slot":"icon",children:k}),xe&&e.jsx(re,{className:o("link_externalIcon",g[s],r==null?void 0:r.externalIcon),"aria-label":"Opens in new tab","data-slot":"externalIcon"})]})});n.displayName="Link";n.__docgenInfo={description:"Link Component",methods:[],displayName:"Link",props:{color:{defaultValue:{value:'"default"',computed:!1},required:!1},size:{defaultValue:{value:'"md"',computed:!1},required:!1},underline:{defaultValue:{value:'"hover"',computed:!1},required:!1},external:{defaultValue:{value:"false",computed:!1},required:!1},showExternalIcon:{defaultValue:{value:"true",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const Ae={title:"General/Link",component:n,tags:["autodocs"],argTypes:{color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"],description:"Link color"},size:{control:"select",options:["xs","sm","md","lg"],description:"Link size"},underline:{control:"select",options:["always","hover","none"],description:"Underline behavior"},external:{control:"boolean",description:"Whether the link is external"},showExternalIcon:{control:"boolean",description:"Show external link icon"},disabled:{control:"boolean",description:"Disabled state"}}},a={args:{href:"https://example.com",children:"Link Example",color:"primary",size:"md"}},l={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-text-secondary mb-2",children:"Always underlined"}),e.jsx(n,{href:"#",underline:"always",color:"primary",children:"This link is always underlined"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-text-secondary mb-2",children:"Underline on hover (default)"}),e.jsx(n,{href:"#",underline:"hover",color:"primary",children:"Hover to see underline"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-text-secondary mb-2",children:"No underline"}),e.jsx(n,{href:"#",underline:"none",color:"primary",children:"This link has no underline"})]})]})},t={render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(n,{href:"https://example.com",external:!0,children:"External Link (with icon)"}),e.jsx(n,{href:"https://example.com",external:!0,showExternalIcon:!1,children:"External Link (no icon)"}),e.jsx(n,{href:"https://github.com",external:!0,color:"primary",children:"Visit GitHub"}),e.jsx(n,{href:"https://docs.example.com",external:!0,color:"info",children:"Read Documentation"})]})},c={render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(n,{href:"#",leftIcon:e.jsx(L,{}),color:"primary",children:"GitHub Repository"}),e.jsx(n,{href:"#",rightIcon:e.jsx(f,{}),color:"primary",children:"Learn More"}),e.jsx(n,{href:"#",leftIcon:e.jsx(ne,{}),color:"success",children:"Download File"}),e.jsx(n,{href:"#",leftIcon:e.jsx(re,{}),rightIcon:e.jsx(f,{}),color:"accent",children:"With Both Icons"})]})},d={args:{href:"#",disabled:!0,children:"Disabled Link",color:"primary"}},m={render:()=>e.jsxs("div",{className:"max-w-2xl space-y-4",children:[e.jsxs("p",{className:"text-base leading-relaxed",children:["This is a paragraph of text with an"," ",e.jsx(n,{href:"#",color:"primary",children:"inline link"})," ","that flows naturally within the content. You can also include"," ",e.jsx(n,{href:"https://example.com",external:!0,children:"external links"})," ","that open in new tabs."]}),e.jsxs("p",{className:"text-base leading-relaxed",children:["Links can have different"," ",e.jsx(n,{href:"#",color:"success",children:"colors"}),", different"," ",e.jsx(n,{href:"#",underline:"always",color:"error",children:"underline styles"}),", and can include"," ",e.jsx(n,{href:"#",leftIcon:e.jsx(L,{}),color:"primary",children:"icons"})," ","for better visual context."]})]})},h={render:()=>e.jsxs("nav",{className:"flex gap-6",children:[e.jsx(n,{href:"#",underline:"none",children:"Home"}),e.jsx(n,{href:"#",underline:"none",children:"Products"}),e.jsx(n,{href:"#",underline:"none",children:"About"}),e.jsx(n,{href:"#",underline:"none",children:"Contact"})]})},x={render:()=>e.jsx("footer",{className:"space-y-6",children:e.jsxs("div",{className:"grid grid-cols-3 gap-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold mb-3",children:"Product"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(n,{href:"#",size:"sm",underline:"none",children:"Features"}),e.jsx(n,{href:"#",size:"sm",underline:"none",children:"Pricing"}),e.jsx(n,{href:"#",size:"sm",underline:"none",children:"Documentation"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold mb-3",children:"Company"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(n,{href:"#",size:"sm",underline:"none",children:"About"}),e.jsx(n,{href:"#",size:"sm",underline:"none",children:"Blog"}),e.jsx(n,{href:"#",size:"sm",underline:"none",children:"Careers"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold mb-3",children:"Resources"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(n,{href:"#",size:"sm",underline:"none",children:"Support"}),e.jsx(n,{href:"#",size:"sm",underline:"none",children:"Contact"}),e.jsx(n,{href:"#",size:"sm",underline:"none",children:"Privacy"})]})]})]})})},p={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-6 bg-surface rounded-lg",children:[e.jsx("h2",{className:"text-xl font-bold mb-2",children:"Get Started Today"}),e.jsx("p",{className:"text-text-secondary mb-4",children:"Sign up for free and explore all features."}),e.jsx(n,{href:"#",rightIcon:e.jsx(f,{}),color:"primary",size:"lg",children:"Start Free Trial"})]}),e.jsxs("div",{className:"p-6 bg-surface rounded-lg",children:[e.jsx("h2",{className:"text-xl font-bold mb-2",children:"Download Our App"}),e.jsx("p",{className:"text-text-secondary mb-4",children:"Available on iOS and Android."}),e.jsx(n,{href:"#",leftIcon:e.jsx(ne,{}),color:"success",size:"lg",children:"Download Now"})]})]})},u={render:()=>e.jsxs("div",{className:"space-y-4 max-w-2xl",children:[e.jsxs("div",{className:"border border-border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Getting Started"}),e.jsx("p",{className:"text-sm text-text-secondary mb-3",children:"Learn how to install and configure the library."}),e.jsx(n,{href:"#",rightIcon:e.jsx(f,{}),color:"primary",size:"sm",children:"Read Guide"})]}),e.jsxs("div",{className:"border border-border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"API Reference"}),e.jsx("p",{className:"text-sm text-text-secondary mb-3",children:"Comprehensive API documentation with examples."}),e.jsx(n,{href:"https://api.example.com",external:!0,color:"info",size:"sm",children:"View API Docs"})]}),e.jsxs("div",{className:"border border-border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"GitHub Repository"}),e.jsx("p",{className:"text-sm text-text-secondary mb-3",children:"Contribute or report issues on GitHub."}),e.jsx(n,{href:"https://github.com",leftIcon:e.jsx(L,{}),external:!0,color:"primary",size:"sm",children:"View on GitHub"})]})]})};var N,w,I;a.parameters={...a.parameters,docs:{...(N=a.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    href: 'https://example.com',
    children: 'Link Example',
    color: 'primary',
    size: 'md'
  }
}`,...(I=(w=a.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var z,A,D;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div>
        <p className="text-sm text-text-secondary mb-2">Always underlined</p>
        <Link href="#" underline="always" color="primary">
          This link is always underlined
        </Link>
      </div>
      <div>
        <p className="text-sm text-text-secondary mb-2">Underline on hover (default)</p>
        <Link href="#" underline="hover" color="primary">
          Hover to see underline
        </Link>
      </div>
      <div>
        <p className="text-sm text-text-secondary mb-2">No underline</p>
        <Link href="#" underline="none" color="primary">
          This link has no underline
        </Link>
      </div>
    </div>
}`,...(D=(A=l.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var S,G,R;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">
      <Link href="https://example.com" external>
        External Link (with icon)
      </Link>
      <Link href="https://example.com" external showExternalIcon={false}>
        External Link (no icon)
      </Link>
      <Link href="https://github.com" external color="primary">
        Visit GitHub
      </Link>
      <Link href="https://docs.example.com" external color="info">
        Read Documentation
      </Link>
    </div>
}`,...(R=(G=t.parameters)==null?void 0:G.docs)==null?void 0:R.source}}};var P,E,V;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">
      <Link href="#" leftIcon={<Github />} color="primary">
        GitHub Repository
      </Link>
      <Link href="#" rightIcon={<ArrowRight />} color="primary">
        Learn More
      </Link>
      <Link href="#" leftIcon={<Download />} color="success">
        Download File
      </Link>
      <Link href="#" leftIcon={<ExternalLinkIcon />} rightIcon={<ArrowRight />} color="accent">
        With Both Icons
      </Link>
    </div>
}`,...(V=(E=c.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var H,C,T;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    href: '#',
    disabled: true,
    children: 'Disabled Link',
    color: 'primary'
  }
}`,...(T=(C=d.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var _,q,F;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div className="max-w-2xl space-y-4">
      <p className="text-base leading-relaxed">
        This is a paragraph of text with an{' '}
        <Link href="#" color="primary">
          inline link
        </Link>{' '}
        that flows naturally within the content. You can also include{' '}
        <Link href="https://example.com" external>
          external links
        </Link>{' '}
        that open in new tabs.
      </p>
      <p className="text-base leading-relaxed">
        Links can have different{' '}
        <Link href="#" color="success">
          colors
        </Link>
        , different{' '}
        <Link href="#" underline="always" color="error">
          underline styles
        </Link>
        , and can include{' '}
        <Link href="#" leftIcon={<Github />} color="primary">
          icons
        </Link>{' '}
        for better visual context.
      </p>
    </div>
}`,...(F=(q=m.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var M,W,O;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <nav className="flex gap-6">
      <Link href="#" underline="none">
        Home
      </Link>
      <Link href="#" underline="none">
        Products
      </Link>
      <Link href="#" underline="none">
        About
      </Link>
      <Link href="#" underline="none">
        Contact
      </Link>
    </nav>
}`,...(O=(W=h.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};var U,B,Y;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <footer className="space-y-6">
      <div className="grid grid-cols-3 gap-6">
        <div>
          <h3 className="font-semibold mb-3">Product</h3>
          <div className="flex flex-col gap-2">
            <Link href="#" size="sm" underline="none">
              Features
            </Link>
            <Link href="#" size="sm" underline="none">
              Pricing
            </Link>
            <Link href="#" size="sm" underline="none">
              Documentation
            </Link>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <div className="flex flex-col gap-2">
            <Link href="#" size="sm" underline="none">
              About
            </Link>
            <Link href="#" size="sm" underline="none">
              Blog
            </Link>
            <Link href="#" size="sm" underline="none">
              Careers
            </Link>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Resources</h3>
          <div className="flex flex-col gap-2">
            <Link href="#" size="sm" underline="none">
              Support
            </Link>
            <Link href="#" size="sm" underline="none">
              Contact
            </Link>
            <Link href="#" size="sm" underline="none">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
}`,...(Y=(B=x.parameters)==null?void 0:B.docs)==null?void 0:Y.source}}};var $,J,K;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div className="p-6 bg-surface rounded-lg">
        <h2 className="text-xl font-bold mb-2">Get Started Today</h2>
        <p className="text-text-secondary mb-4">
          Sign up for free and explore all features.
        </p>
        <Link href="#" rightIcon={<ArrowRight />} color="primary" size="lg">
          Start Free Trial
        </Link>
      </div>
      <div className="p-6 bg-surface rounded-lg">
        <h2 className="text-xl font-bold mb-2">Download Our App</h2>
        <p className="text-text-secondary mb-4">
          Available on iOS and Android.
        </p>
        <Link href="#" leftIcon={<Download />} color="success" size="lg">
          Download Now
        </Link>
      </div>
    </div>
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Z;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 max-w-2xl">
      <div className="border border-border rounded-lg p-4">
        <h3 className="font-semibold mb-2">Getting Started</h3>
        <p className="text-sm text-text-secondary mb-3">
          Learn how to install and configure the library.
        </p>
        <Link href="#" rightIcon={<ArrowRight />} color="primary" size="sm">
          Read Guide
        </Link>
      </div>
      <div className="border border-border rounded-lg p-4">
        <h3 className="font-semibold mb-2">API Reference</h3>
        <p className="text-sm text-text-secondary mb-3">
          Comprehensive API documentation with examples.
        </p>
        <Link href="https://api.example.com" external color="info" size="sm">
          View API Docs
        </Link>
      </div>
      <div className="border border-border rounded-lg p-4">
        <h3 className="font-semibold mb-2">GitHub Repository</h3>
        <p className="text-sm text-text-secondary mb-3">
          Contribute or report issues on GitHub.
        </p>
        <Link href="https://github.com" leftIcon={<Github />} external color="primary" size="sm">
          View on GitHub
        </Link>
      </div>
    </div>
}`,...(Z=(X=u.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};const De=["Primary","WithUnderline","External","WithIcons","Disabled","InParagraph","NavigationLinks","FooterLinks","CallToActionLinks","DocumentationLinks"];export{p as CallToActionLinks,d as Disabled,u as DocumentationLinks,t as External,x as FooterLinks,m as InParagraph,h as NavigationLinks,a as Primary,c as WithIcons,l as WithUnderline,De as __namedExportsOrder,Ae as default};
