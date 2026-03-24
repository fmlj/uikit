import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as d,i as ne,a as de}from"./utils-_uLxnvdl.js";import{R as c}from"./index-ZH-6pyQh.js";import{D as pe}from"./index-BVphZ78y.js";import{c as he}from"./variants-C8qliDOr.js";import{C as ie}from"./chevron-right-DY5KYsnV.js";import{E as ue}from"./ellipsis-BCji1NXI.js";import{E as be}from"./ellipsis-vertical-Bsydo1qj.js";import{c as fe}from"./createLucideIcon-BXJdBs6C.js";import{H as x}from"./house-DCjPrFcn.js";import{S as z}from"./shopping-cart-DxzqVIld.js";import{F as L}from"./folder-CemrozX2.js";import{F as _}from"./file-text-DaZIRBjV.js";import{P as me}from"./package-VF3mML-c.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useRipple-BuuTbn0W.js";import"./useMenuNavigation-Cake-z-f.js";import"./index-M94l2otH.js";import"./index-lJNWladF.js";import"./index-C6BiGwLV.js";import"./index-Bo-loign.js";import"./index-BP-xEy0R.js";import"./index-DVyBTwwr.js";import"./Combination-C3reJy6-.js";import"./index-BH7Jj7fg.js";/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=[["path",{d:"M22 2 2 22",key:"y4kqgn"}]],je=fe("slash",xe),f=c.createContext({}),Ne=de("",{variants:{size:{xs:"text-xs",sm:"text-sm",md:"text-base",lg:"text-lg"}},defaultVariants:{size:"md"}}),n=c.memo(({children:a,items:r,color:s="default",size:l="md",separator:m,className:u,classNames:t})=>{const p=r!=null&&r.length?e.jsx(S,{children:r.map((o,i)=>{const N=i===r.length-1;return e.jsxs(c.Fragment,{children:[e.jsx(h,{children:o.ellipsis?e.jsx(E,{orientation:o.ellipsisOrientation||"horizontal",items:o.ellipsisItems||[],size:l}):N?e.jsx(H,{leftIcon:o.leftIcon,rightIcon:o.rightIcon,children:o.label}):e.jsx(j,{href:o.href||"",onClick:o.onClick,leftIcon:o.leftIcon,rightIcon:o.rightIcon,children:o.label})}),!N&&e.jsx(b,{size:l,children:m})]},i)})}):a;return e.jsx(f.Provider,{value:{color:s,size:l,classNames:t},children:e.jsx("nav",{"data-slot":"root","aria-label":"breadcrumb",className:d("breadcrumbs_root",Ne({size:l}),he[s],"text-slot",t==null?void 0:t.root,u),children:p})})});n.displayName="Breadcrumb";const S=c.memo(({children:a,className:r})=>{const{classNames:s}=c.useContext(f);return e.jsx("ol",{className:d("breadcrumbs_list","flex items-center gap-1.5",s==null?void 0:s.list,r),children:a})});S.displayName="BreadcrumbList";const h=c.memo(({children:a,className:r})=>{const{classNames:s}=c.useContext(f);return e.jsx("li",{className:d("breadcrumbs_item","inline-flex items-center gap-1.5",s==null?void 0:s.item,r),children:a})});h.displayName="BreadcrumbItem";const j=c.memo(({children:a,href:r,onClick:s,leftIcon:l,rightIcon:m,className:u})=>{const{classNames:t}=c.useContext(f),p=N=>{s&&(N.preventDefault(),s())},o=e.jsxs(e.Fragment,{children:[l&&e.jsx("span",{className:"inline-flex items-center",children:l}),a,m&&e.jsx("span",{className:"inline-flex items-center",children:m})]}),i=d("breadcrumbs_link","inline-flex items-center gap-1.5 transition-colors hover:underline cursor-pointer",t==null?void 0:t.link,u);return r?e.jsx("a",{href:r,onClick:p,className:i,children:o}):s?e.jsx("button",{type:"button",onClick:p,className:i,children:o}):e.jsx("span",{className:d("breadcrumbs_link","inline-flex items-center gap-1.5",t==null?void 0:t.link,u),children:o})});j.displayName="BreadcrumbLink";const H=c.memo(({children:a,leftIcon:r,rightIcon:s,className:l})=>{const{classNames:m}=c.useContext(f);return e.jsxs("span",{"aria-current":"page",className:d("breadcrumbs_current","inline-flex items-center gap-1.5 font-medium",m==null?void 0:m.current,l),children:[r&&e.jsx("span",{className:"inline-flex items-center",children:r}),a,s&&e.jsx("span",{className:"inline-flex items-center",children:s})]})});H.displayName="BreadcrumbPage";const b=c.memo(({children:a,className:r,size:s="md"})=>{const{classNames:l}=c.useContext(f);return e.jsx("span",{"aria-hidden":"true",className:d("breadcrumbs_separator","text-text-secondary",l==null?void 0:l.separator,r),children:a??e.jsx(ie,{className:ne[s]})})});b.displayName="BreadcrumbSeparator";const ge=a=>{if(a.startsWith("/")||a.startsWith("#")||a.startsWith("?"))return!0;const r=["javascript:","data:","vbscript:"],s=a.toLowerCase();if(r.some(l=>s.startsWith(l)))return!1;if(typeof window<"u")try{return new URL(a,window.location.origin).origin===window.location.origin}catch{return!0}return!0},E=c.memo(({orientation:a="horizontal",items:r,children:s,className:l,size:m="md"})=>{const u=a==="horizontal"?ue:be,t=!!(r!=null&&r.length||s),p=e.jsxs("span",{...t&&{role:"button","aria-label":"Show more breadcrumbs",tabIndex:0},...!t&&{"aria-hidden":!0},className:d("flex items-center justify-center",t&&"cursor-pointer",l),children:[e.jsx(u,{className:ne[m]}),e.jsx("span",{className:"sr-only",children:"More"})]});if(r||s){const o=(r||[]).map(i=>({label:i.label||"",value:i.label||"",onClick:i.onClick||(()=>{i.href&&ge(i.href)&&(window.location.href=i.href)})}));return e.jsx(pe,{items:o,children:p})}return p});E.displayName="BreadcrumbEllipsis";S.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbList"};h.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem"};j.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbLink"};H.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbPage"};b.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbSeparator",props:{size:{defaultValue:{value:"'md'",computed:!1},required:!1}}};E.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbEllipsis",props:{orientation:{defaultValue:{value:"'horizontal'",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1}}};n.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{color:{defaultValue:{value:"'default'",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1}}};const Ue={title:"Navigation/Breadcrumbs",component:n,tags:["autodocs"],argTypes:{color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"],description:"Theme color"},size:{control:"select",options:["xs","sm","md","lg"],description:"Size variant"}}},g={args:{items:[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Electronics",href:"/products/electronics"},{label:"Laptops"}],color:"primary",size:"md"}},v={args:{items:[{label:"Home",href:"/",leftIcon:e.jsx(x,{className:"w-4 h-4"})},{label:"Products",href:"/products",leftIcon:e.jsx(me,{className:"w-4 h-4"})},{label:"Shopping Cart",leftIcon:e.jsx(z,{className:"w-4 h-4"})}],color:"primary"}},y={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-3",children:"Slash Separator"}),e.jsx(n,{items:[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Electronics"}],separator:e.jsx(je,{className:"w-4 h-4"}),color:"primary"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-3",children:"Dash Separator"}),e.jsx(n,{items:[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Electronics"}],separator:"-",color:"primary"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-3",children:"Dot Separator"}),e.jsx(n,{items:[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Electronics"}],separator:"•",color:"primary"})]})]})},I={args:{items:[{label:"Home",href:"/"},{label:"Level 1",href:"/level1"},{label:"",ellipsis:!0,ellipsisItems:[{label:"Level 2",href:"/level2"},{label:"Level 3",href:"/level3"},{label:"Level 4",href:"/level4"}]},{label:"Current Page"}],color:"primary"}},w={render:()=>{const a=r=>{alert(`Navigating to: ${r}`)};return e.jsx(n,{items:[{label:"Home",onClick:()=>a("Home")},{label:"Products",onClick:()=>a("Products")},{label:"Electronics",onClick:()=>a("Electronics")},{label:"Laptops"}],color:"primary"})}},B={render:()=>e.jsx(n,{color:"primary",size:"md",children:e.jsxs(S,{children:[e.jsx(h,{children:e.jsx(j,{href:"/",leftIcon:e.jsx(x,{className:"w-4 h-4"}),children:"Home"})}),e.jsx(b,{}),e.jsx(h,{children:e.jsx(j,{href:"/products",leftIcon:e.jsx(me,{className:"w-4 h-4"}),children:"Products"})}),e.jsx(b,{}),e.jsx(h,{children:e.jsx(E,{items:[{label:"Electronics",href:"/products/electronics"},{label:"Computers",href:"/products/computers"}]})}),e.jsx(b,{}),e.jsx(h,{children:e.jsx(H,{leftIcon:e.jsx(_,{className:"w-4 h-4"}),children:"Product Details"})})]})})},C={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-3",children:"Simple Path"}),e.jsx(n,{items:[{label:"Home",href:"/",leftIcon:e.jsx(x,{className:"w-4 h-4"})},{label:"Documents",href:"/documents",leftIcon:e.jsx(L,{className:"w-4 h-4"})},{label:"Projects",href:"/documents/projects",leftIcon:e.jsx(L,{className:"w-4 h-4"})},{label:"readme.md",leftIcon:e.jsx(_,{className:"w-4 h-4"})}],color:"primary",separator:e.jsx(ie,{className:"w-4 h-4"})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-3",children:"Deep Path with Ellipsis"}),e.jsx(n,{items:[{label:"Home",href:"/",leftIcon:e.jsx(x,{className:"w-4 h-4"})},{label:"Documents",href:"/documents",leftIcon:e.jsx(L,{className:"w-4 h-4"})},{label:"",ellipsis:!0,ellipsisItems:[{label:"Work",href:"/documents/work"},{label:"2024",href:"/documents/work/2024"},{label:"Q1",href:"/documents/work/2024/q1"}]},{label:"report.pdf",leftIcon:e.jsx(_,{className:"w-4 h-4"})}],color:"primary"})]})]})},k={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-3",children:"Product Page"}),e.jsx(n,{items:[{label:"Home",href:"/",leftIcon:e.jsx(x,{className:"w-4 h-4"})},{label:"Shop",href:"/shop",leftIcon:e.jsx(z,{className:"w-4 h-4"})},{label:"Electronics",href:"/shop/electronics"},{label:"Laptops",href:"/shop/electronics/laptops"},{label:'MacBook Pro 16"'}],color:"primary",size:"sm"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-3",children:"Checkout Flow"}),e.jsx(n,{items:[{label:"Cart",href:"/cart",leftIcon:e.jsx(z,{className:"w-4 h-4"})},{label:"Shipping",href:"/checkout/shipping"},{label:"Payment"}],color:"success",size:"md"})]})]})},P={render:()=>{const a=["default","primary","secondary","accent","success","error","warning","info"],r=["xs","sm","md","lg"];return e.jsx("div",{className:"space-y-8",children:r.map(s=>e.jsxs("div",{children:[e.jsxs("h3",{className:"text-sm font-semibold mb-4 uppercase",children:[s," Size"]}),e.jsx("div",{className:"space-y-3",children:a.map(l=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-xs text-text-secondary w-20 capitalize",children:l}),e.jsx(n,{items:[{label:"Home",href:"#"},{label:"Page",href:"#"},{label:"Current"}],color:l,size:s})]},`${s}-${l}`))})]},s))})}};var D,F,V;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Products',
      href: '/products'
    }, {
      label: 'Electronics',
      href: '/products/electronics'
    }, {
      label: 'Laptops'
    }],
    color: 'primary',
    size: 'md'
  }
}`,...(V=(F=g.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var W,q,M;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '/',
      leftIcon: <Home className="w-4 h-4" />
    }, {
      label: 'Products',
      href: '/products',
      leftIcon: <Package className="w-4 h-4" />
    }, {
      label: 'Shopping Cart',
      leftIcon: <ShoppingCart className="w-4 h-4" />
    }],
    color: 'primary'
  }
}`,...(M=(q=v.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var R,T,$;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold mb-3">Slash Separator</h3>
        <Breadcrumb items={[{
        label: 'Home',
        href: '/'
      }, {
        label: 'Products',
        href: '/products'
      }, {
        label: 'Electronics'
      }]} separator={<Slash className="w-4 h-4" />} color="primary" />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-3">Dash Separator</h3>
        <Breadcrumb items={[{
        label: 'Home',
        href: '/'
      }, {
        label: 'Products',
        href: '/products'
      }, {
        label: 'Electronics'
      }]} separator="-" color="primary" />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-3">Dot Separator</h3>
        <Breadcrumb items={[{
        label: 'Home',
        href: '/'
      }, {
        label: 'Products',
        href: '/products'
      }, {
        label: 'Electronics'
      }]} separator="•" color="primary" />
      </div>
    </div>
}`,...($=(T=y.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};var O,Q,U;I.parameters={...I.parameters,docs:{...(O=I.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Level 1',
      href: '/level1'
    }, {
      label: '',
      ellipsis: true,
      ellipsisItems: [{
        label: 'Level 2',
        href: '/level2'
      }, {
        label: 'Level 3',
        href: '/level3'
      }, {
        label: 'Level 4',
        href: '/level4'
      }]
    }, {
      label: 'Current Page'
    }],
    color: 'primary'
  }
}`,...(U=(Q=I.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var A,G,J;w.parameters={...w.parameters,docs:{...(A=w.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const handleClick = (label: string) => {
      alert(\`Navigating to: \${label}\`);
    };
    return <Breadcrumb items={[{
      label: 'Home',
      onClick: () => handleClick('Home')
    }, {
      label: 'Products',
      onClick: () => handleClick('Products')
    }, {
      label: 'Electronics',
      onClick: () => handleClick('Electronics')
    }, {
      label: 'Laptops'
    }]} color="primary" />;
  }
}`,...(J=(G=w.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,X,Y;B.parameters={...B.parameters,docs:{...(K=B.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <Breadcrumb color="primary" size="md">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/" leftIcon={<Home className="w-4 h-4" />}>
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/products" leftIcon={<Package className="w-4 h-4" />}>
            Products
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbEllipsis items={[{
          label: 'Electronics',
          href: '/products/electronics'
        }, {
          label: 'Computers',
          href: '/products/computers'
        }]} />
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage leftIcon={<FileText className="w-4 h-4" />}>
            Product Details
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...(Y=(X=B.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,re;C.parameters={...C.parameters,docs:{...(Z=C.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold mb-3">Simple Path</h3>
        <Breadcrumb items={[{
        label: 'Home',
        href: '/',
        leftIcon: <Home className="w-4 h-4" />
      }, {
        label: 'Documents',
        href: '/documents',
        leftIcon: <Folder className="w-4 h-4" />
      }, {
        label: 'Projects',
        href: '/documents/projects',
        leftIcon: <Folder className="w-4 h-4" />
      }, {
        label: 'readme.md',
        leftIcon: <FileText className="w-4 h-4" />
      }]} color="primary" separator={<ChevronRight className="w-4 h-4" />} />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-3">Deep Path with Ellipsis</h3>
        <Breadcrumb items={[{
        label: 'Home',
        href: '/',
        leftIcon: <Home className="w-4 h-4" />
      }, {
        label: 'Documents',
        href: '/documents',
        leftIcon: <Folder className="w-4 h-4" />
      }, {
        label: '',
        ellipsis: true,
        ellipsisItems: [{
          label: 'Work',
          href: '/documents/work'
        }, {
          label: '2024',
          href: '/documents/work/2024'
        }, {
          label: 'Q1',
          href: '/documents/work/2024/q1'
        }]
      }, {
        label: 'report.pdf',
        leftIcon: <FileText className="w-4 h-4" />
      }]} color="primary" />
      </div>
    </div>
}`,...(re=(ee=C.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var se,ae,le;k.parameters={...k.parameters,docs:{...(se=k.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold mb-3">Product Page</h3>
        <Breadcrumb items={[{
        label: 'Home',
        href: '/',
        leftIcon: <Home className="w-4 h-4" />
      }, {
        label: 'Shop',
        href: '/shop',
        leftIcon: <ShoppingCart className="w-4 h-4" />
      }, {
        label: 'Electronics',
        href: '/shop/electronics'
      }, {
        label: 'Laptops',
        href: '/shop/electronics/laptops'
      }, {
        label: 'MacBook Pro 16"'
      }]} color="primary" size="sm" />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-3">Checkout Flow</h3>
        <Breadcrumb items={[{
        label: 'Cart',
        href: '/cart',
        leftIcon: <ShoppingCart className="w-4 h-4" />
      }, {
        label: 'Shipping',
        href: '/checkout/shipping'
      }, {
        label: 'Payment'
      }]} color="success" size="md" />
      </div>
    </div>
}`,...(le=(ae=k.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};var oe,te,ce;P.parameters={...P.parameters,docs:{...(oe=P.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => {
    const colors = ['default', 'primary', 'secondary', 'accent', 'success', 'error', 'warning', 'info'] as const;
    const sizes = ['xs', 'sm', 'md', 'lg'] as const;
    return <div className="space-y-8">
        {sizes.map(size => <div key={size}>
            <h3 className="text-sm font-semibold mb-4 uppercase">{size} Size</h3>
            <div className="space-y-3">
              {colors.map(color => <div key={\`\${size}-\${color}\`} className="flex items-center gap-3">
                  <span className="text-xs text-text-secondary w-20 capitalize">{color}</span>
                  <Breadcrumb items={[{
              label: 'Home',
              href: '#'
            }, {
              label: 'Page',
              href: '#'
            }, {
              label: 'Current'
            }]} color={color} size={size} />
                </div>)}
            </div>
          </div>)}
      </div>;
  }
}`,...(ce=(te=P.parameters)==null?void 0:te.docs)==null?void 0:ce.source}}};const Ae=["Default","WithIcons","CustomSeparator","WithEllipsis","ClickableItems","ManualComposition","FileSystemPath","ECommerce","ColorSizeMatrix"];export{w as ClickableItems,P as ColorSizeMatrix,y as CustomSeparator,g as Default,k as ECommerce,C as FileSystemPath,B as ManualComposition,I as WithEllipsis,v as WithIcons,Ae as __namedExportsOrder,Ue as default};
