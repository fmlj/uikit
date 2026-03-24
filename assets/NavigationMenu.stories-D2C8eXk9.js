import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as d,a as y}from"./utils-_uLxnvdl.js";import{R as n}from"./index-ZH-6pyQh.js";import{C as pe}from"./chevron-down-D1qmGosc.js";import{H as C}from"./house-DCjPrFcn.js";import{c as j}from"./createLucideIcon-BXJdBs6C.js";import{S as X}from"./shopping-cart-DxzqVIld.js";import{C as Y}from"./credit-card-pFzRDpgt.js";import{Z as P}from"./zap-Bp22WUqo.js";import{P as D}from"./package-VF3mML-c.js";import{F as ee}from"./file-text-DaZIRBjV.js";import{L as ae}from"./layers-wuRBWWPs.js";import{C as se}from"./code-CLvo4QKG.js";import{B as S}from"./building-CfRjece0.js";import{G as me}from"./globe-TCM94dGE.js";import{M as ue}from"./mail-1HDD9Lg3.js";import{U as M}from"./users-CmrXRWI9.js";import{S as oe}from"./shield-syPj5L6h.js";import{C as te}from"./circle-question-mark-Dhggi-b3.js";import{S as A}from"./settings-D1wlBKo1.js";import"./_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],re=j("book-open",he);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=[["path",{d:"M5 21v-6",key:"1hz6c0"}],["path",{d:"M12 21V9",key:"uvy0l4"}],["path",{d:"M19 21V3",key:"11j9sm"}]],f=j("chart-no-axes-column-increasing",fe);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],ne=j("cloud",ye);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],ie=j("database",be),ke=y("navigationMenu_root",{variants:{orientation:{horizontal:"flex flex-row",vertical:"flex flex-col"}},defaultVariants:{orientation:"horizontal"}}),ge=y("navigationMenu_list flex items-center gap-1 relative",{variants:{orientation:{horizontal:"flex-row",vertical:"flex-col"}},defaultVariants:{orientation:"horizontal"}}),we=y("navigationMenu_item relative",{variants:{}}),ve=y("navigationMenu_trigger inline-flex items-center justify-center gap-2 rounded-md cursor-pointer px-4 py-2 text-sm font-medium transition-colors hover:bg-surface focus:bg-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-surface",{variants:{}}),I=y("navigationMenu_link inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-surface focus:bg-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",{variants:{}}),xe=y("navigationMenu_content z-(--z-popover) absolute top-full left-0 mt-1 w-auto min-w-[400px] rounded-md border border-border bg-background p-4 shadow-lg data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top-2 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-top-2 duration-200",{variants:{}}),le=n.memo(({children:a,isOpen:t,className:r})=>e.jsx("div",{"data-slot":"content","data-state":t?"open":"closed",className:d(xe(),!t&&"hidden",r),role:"menu",children:e.jsx("div",{className:"grid gap-3",children:a.map(s=>e.jsx(ce,{item:s},s.key))})}));le.displayName="NavigationMenuContent";const ce=n.memo(({item:a})=>{const t=s=>{if(a.disabled){s.preventDefault();return}a.onClick&&(s.preventDefault(),a.onClick())},r=e.jsxs("div",{className:"flex items-start gap-3 rounded-md p-3 hover:bg-surface transition-colors",children:[a.icon&&e.jsx("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-surface",children:a.icon}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("div",{className:"text-sm font-medium leading-none",children:a.label}),a.description&&e.jsx("p",{className:"text-sm leading-snug text-text-secondary",children:a.description})]})]});return a.href&&!a.disabled?e.jsx("a",{href:a.href,onClick:t,className:d("block",a.disabled&&"pointer-events-none opacity-50"),role:"menuitem","aria-disabled":a.disabled,children:r}):e.jsx("button",{type:"button",onClick:t,disabled:a.disabled,className:"block w-full text-left disabled:pointer-events-none disabled:opacity-50",role:"menuitem","aria-disabled":a.disabled,children:r})});ce.displayName="NavigationMenuChildLink";const de=n.memo(({item:a,onOpenChange:t,isOpen:r,classNames:s,closeDelay:l=150})=>{const p=a.children&&a.children.length>0,m=n.useRef(void 0),u=()=>{p&&!a.disabled&&(m.current&&clearTimeout(m.current),t(a.key,!0))},h=()=>{p&&!a.disabled&&(m.current=setTimeout(()=>{t(a.key,!1)},l))},b=i=>{if(a.disabled){i.preventDefault();return}p?(i.preventDefault(),t(a.key,!r)):a.onClick&&(i.preventDefault(),a.onClick())},o=i=>{a.disabled||(i.key==="Enter"||i.key===" "?(i.preventDefault(),p?t(a.key,!r):a.onClick&&a.onClick()):i.key==="Escape"&&r&&(i.preventDefault(),t(a.key,!1)))};n.useEffect(()=>()=>{m.current&&clearTimeout(m.current)},[]);const c=e.jsxs(e.Fragment,{children:[a.icon&&e.jsx("span",{className:"shrink-0",children:a.icon}),e.jsx("span",{children:a.label}),p&&e.jsx(pe,{className:d("h-4 w-4 shrink-0 transition-transform",r&&"rotate-180"),"aria-hidden":"true"})]});return e.jsx("li",{"data-slot":"item",className:d(we(),s==null?void 0:s.item),onMouseEnter:u,onMouseLeave:h,role:"none",children:p?e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button","data-slot":"trigger","data-state":r?"open":"closed",className:d(ve(),s==null?void 0:s.trigger),onClick:b,onKeyDown:o,disabled:a.disabled,"aria-haspopup":"true","aria-expanded":r,role:"menuitem",children:c}),e.jsx(le,{children:a.children,isOpen:r,className:s==null?void 0:s.content})]}):a.href&&!a.disabled?e.jsx("a",{href:a.href,"data-slot":"link",className:d(I(),s==null?void 0:s.link,a.disabled&&"pointer-events-none opacity-50"),onClick:b,onKeyDown:o,role:"menuitem","aria-disabled":a.disabled,children:c}):e.jsx("button",{type:"button","data-slot":"link",className:d(I(),s==null?void 0:s.link),onClick:b,onKeyDown:o,disabled:a.disabled,role:"menuitem",children:c})})});de.displayName="NavigationMenuItemComponent";const L=n.memo(({items:a,orientation:t="horizontal",closeDelay:r,className:s,classNames:l,ref:p})=>{const[m,u]=n.useState(new Set),h=n.useRef(null);n.useImperativeHandle(p,()=>h.current);const b=n.useCallback((o,c)=>{u(c?new Set([o]):i=>{const E=new Set(i);return E.delete(o),E})},[]);return n.useEffect(()=>{const o=c=>{h.current&&!h.current.contains(c.target)&&u(new Set)};return document.addEventListener("mousedown",o),()=>{document.removeEventListener("mousedown",o)}},[]),n.useEffect(()=>{const o=c=>{c.key==="Escape"&&u(new Set)};return document.addEventListener("keydown",o),()=>{document.removeEventListener("keydown",o)}},[]),e.jsx("nav",{ref:h,"data-slot":"root",className:d(ke({orientation:t}),s,l==null?void 0:l.root),role:"navigation","aria-label":"Main navigation",children:e.jsx("ul",{"data-slot":"list",className:d(ge({orientation:t}),l==null?void 0:l.list),role:"menubar",children:a.map(o=>e.jsx(de,{item:o,onOpenChange:b,isOpen:m.has(o.key),classNames:l,closeDelay:r},o.key))})})});L.displayName="NavigationMenu";L.__docgenInfo={description:"",methods:[],displayName:"NavigationMenu",props:{orientation:{defaultValue:{value:'"horizontal"',computed:!1},required:!1}}};const Ue={title:"Navigation/NavigationMenu",component:L,tags:["autodocs"],argTypes:{items:{description:"Array of navigation menu items"},orientation:{control:"select",options:["horizontal","vertical"],description:"Menu orientation"},className:{control:"text",description:"Additional CSS classes"}}},k={args:{items:[{key:"home",label:"Home",href:"/"},{key:"products",label:"Products",children:[{key:"analytics",label:"Analytics",description:"Get insights into your data with powerful analytics tools",icon:e.jsx(f,{className:"w-5 h-5"}),href:"/products/analytics"},{key:"commerce",label:"E-Commerce",description:"Build and manage your online store with ease",icon:e.jsx(X,{className:"w-5 h-5"}),href:"/products/commerce"},{key:"payments",label:"Payments",description:"Accept payments securely from customers worldwide",icon:e.jsx(Y,{className:"w-5 h-5"}),href:"/products/payments"}]},{key:"resources",label:"Resources",children:[{key:"documentation",label:"Documentation",description:"Comprehensive guides and API references",icon:e.jsx(re,{className:"w-5 h-5"}),href:"/resources/docs"},{key:"support",label:"Support",description:"Get help from our support team",icon:e.jsx(te,{className:"w-5 h-5"}),href:"/resources/support"}]},{key:"about",label:"About",href:"/about"}]}},g={args:{items:[{key:"home",label:"Home",icon:e.jsx(C,{className:"w-4 h-4"}),href:"/"},{key:"products",label:"Products",icon:e.jsx(D,{className:"w-4 h-4"}),children:[{key:"analytics",label:"Analytics Platform",description:"Real-time data analysis and visualization",icon:e.jsx(f,{className:"w-5 h-5"}),href:"/products/analytics"},{key:"database",label:"Database Solutions",description:"Scalable cloud database infrastructure",icon:e.jsx(ie,{className:"w-5 h-5"}),href:"/products/database"},{key:"cloud",label:"Cloud Services",description:"Deploy and scale your applications globally",icon:e.jsx(ne,{className:"w-5 h-5"}),href:"/products/cloud"}]},{key:"developers",label:"Developers",icon:e.jsx(se,{className:"w-4 h-4"}),children:[{key:"api",label:"API Reference",description:"Complete API documentation and examples",icon:e.jsx(ee,{className:"w-5 h-5"}),href:"/developers/api"},{key:"sdk",label:"SDK & Libraries",description:"Official SDKs for popular languages",icon:e.jsx(ae,{className:"w-5 h-5"}),href:"/developers/sdk"}]},{key:"settings",label:"Settings",icon:e.jsx(A,{className:"w-4 h-4"}),href:"/settings"}]}},w={args:{orientation:"vertical",items:[{key:"home",label:"Home",icon:e.jsx(C,{className:"w-4 h-4"}),href:"/"},{key:"team",label:"Team",icon:e.jsx(M,{className:"w-4 h-4"}),children:[{key:"members",label:"Team Members",description:"Manage your team and permissions",icon:e.jsx(M,{className:"w-5 h-5"}),href:"/team/members"},{key:"roles",label:"Roles & Permissions",description:"Configure access control and roles",icon:e.jsx(oe,{className:"w-5 h-5"}),href:"/team/roles"}]},{key:"reports",label:"Reports",icon:e.jsx(f,{className:"w-4 h-4"}),children:[{key:"analytics",label:"Analytics",description:"View detailed analytics and metrics",icon:e.jsx(f,{className:"w-5 h-5"}),href:"/reports/analytics"},{key:"performance",label:"Performance",description:"Monitor system performance",icon:e.jsx(P,{className:"w-5 h-5"}),href:"/reports/performance"}]},{key:"settings",label:"Settings",icon:e.jsx(A,{className:"w-4 h-4"}),href:"/settings"}]}},v={args:{items:[{key:"home",label:"Home",icon:e.jsx(C,{className:"w-4 h-4"}),href:"/"},{key:"products",label:"Products",icon:e.jsx(D,{className:"w-4 h-4"}),children:[{key:"analytics",label:"Analytics",description:"Get insights into your data",icon:e.jsx(f,{className:"w-5 h-5"}),href:"/products/analytics"},{key:"beta",label:"Beta Features",description:"Coming soon - Early access features",icon:e.jsx(P,{className:"w-5 h-5"}),disabled:!0}]},{key:"enterprise",label:"Enterprise",icon:e.jsx(S,{className:"w-4 h-4"}),disabled:!0},{key:"settings",label:"Settings",icon:e.jsx(A,{className:"w-4 h-4"}),href:"/settings"}]}},x={args:{items:[{key:"home",label:"Home",href:"/"},{key:"about",label:"About",href:"/about"},{key:"services",label:"Services",href:"/services"},{key:"portfolio",label:"Portfolio",href:"/portfolio"},{key:"blog",label:"Blog",href:"/blog"},{key:"contact",label:"Contact",href:"/contact"}]}},N={args:{items:[{key:"home",label:"Home",icon:e.jsx(C,{className:"w-4 h-4"}),href:"/"},{key:"products",label:"Products",icon:e.jsx(D,{className:"w-4 h-4"}),children:[{key:"analytics",label:"Analytics Platform",description:"Real-time data analysis and business intelligence",icon:e.jsx(f,{className:"w-5 h-5"}),href:"/products/analytics"},{key:"ecommerce",label:"E-Commerce Suite",description:"Complete solution for online stores",icon:e.jsx(X,{className:"w-5 h-5"}),href:"/products/ecommerce"},{key:"payments",label:"Payment Gateway",description:"Secure payment processing worldwide",icon:e.jsx(Y,{className:"w-5 h-5"}),href:"/products/payments"},{key:"cloud",label:"Cloud Infrastructure",description:"Scalable hosting and deployment",icon:e.jsx(ne,{className:"w-5 h-5"}),href:"/products/cloud"},{key:"beta",label:"Beta Program",description:"Early access to new features (Coming Soon)",icon:e.jsx(P,{className:"w-5 h-5"}),disabled:!0}]},{key:"developers",label:"Developers",icon:e.jsx(se,{className:"w-4 h-4"}),children:[{key:"documentation",label:"Documentation",description:"Comprehensive guides and tutorials",icon:e.jsx(re,{className:"w-5 h-5"}),href:"/developers/docs"},{key:"api",label:"API Reference",description:"Complete API documentation",icon:e.jsx(ee,{className:"w-5 h-5"}),href:"/developers/api"},{key:"sdk",label:"SDKs & Libraries",description:"Official libraries for all platforms",icon:e.jsx(ae,{className:"w-5 h-5"}),href:"/developers/sdk"},{key:"graphql",label:"GraphQL API",description:"Flexible GraphQL endpoint (Beta)",icon:e.jsx(ie,{className:"w-5 h-5"}),href:"/developers/graphql",disabled:!0}]},{key:"company",label:"Company",icon:e.jsx(S,{className:"w-4 h-4"}),children:[{key:"about",label:"About Us",description:"Learn about our mission and values",icon:e.jsx(S,{className:"w-5 h-5"}),href:"/company/about"},{key:"blog",label:"Blog",description:"Latest news and updates",icon:e.jsx(me,{className:"w-5 h-5"}),href:"/company/blog"},{key:"contact",label:"Contact",description:"Get in touch with our team",icon:e.jsx(ue,{className:"w-5 h-5"}),href:"/company/contact"},{key:"careers",label:"Careers",description:"Join our growing team",icon:e.jsx(M,{className:"w-5 h-5"}),href:"/company/careers"}]},{key:"enterprise",label:"Enterprise",icon:e.jsx(oe,{className:"w-4 h-4"}),disabled:!0},{key:"support",label:"Support",icon:e.jsx(te,{className:"w-4 h-4"}),href:"/support"}]}};var B,H,R;k.parameters={...k.parameters,docs:{...(B=k.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    items: [{
      key: 'home',
      label: 'Home',
      href: '/'
    }, {
      key: 'products',
      label: 'Products',
      children: [{
        key: 'analytics',
        label: 'Analytics',
        description: 'Get insights into your data with powerful analytics tools',
        icon: <BarChart className="w-5 h-5" />,
        href: '/products/analytics'
      }, {
        key: 'commerce',
        label: 'E-Commerce',
        description: 'Build and manage your online store with ease',
        icon: <ShoppingCart className="w-5 h-5" />,
        href: '/products/commerce'
      }, {
        key: 'payments',
        label: 'Payments',
        description: 'Accept payments securely from customers worldwide',
        icon: <CreditCard className="w-5 h-5" />,
        href: '/products/payments'
      }]
    }, {
      key: 'resources',
      label: 'Resources',
      children: [{
        key: 'documentation',
        label: 'Documentation',
        description: 'Comprehensive guides and API references',
        icon: <BookOpen className="w-5 h-5" />,
        href: '/resources/docs'
      }, {
        key: 'support',
        label: 'Support',
        description: 'Get help from our support team',
        icon: <HelpCircle className="w-5 h-5" />,
        href: '/resources/support'
      }]
    }, {
      key: 'about',
      label: 'About',
      href: '/about'
    }]
  }
}`,...(R=(H=k.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var V,_,G;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    items: [{
      key: 'home',
      label: 'Home',
      icon: <Home className="w-4 h-4" />,
      href: '/'
    }, {
      key: 'products',
      label: 'Products',
      icon: <Package className="w-4 h-4" />,
      children: [{
        key: 'analytics',
        label: 'Analytics Platform',
        description: 'Real-time data analysis and visualization',
        icon: <BarChart className="w-5 h-5" />,
        href: '/products/analytics'
      }, {
        key: 'database',
        label: 'Database Solutions',
        description: 'Scalable cloud database infrastructure',
        icon: <Database className="w-5 h-5" />,
        href: '/products/database'
      }, {
        key: 'cloud',
        label: 'Cloud Services',
        description: 'Deploy and scale your applications globally',
        icon: <Cloud className="w-5 h-5" />,
        href: '/products/cloud'
      }]
    }, {
      key: 'developers',
      label: 'Developers',
      icon: <Code className="w-4 h-4" />,
      children: [{
        key: 'api',
        label: 'API Reference',
        description: 'Complete API documentation and examples',
        icon: <FileText className="w-5 h-5" />,
        href: '/developers/api'
      }, {
        key: 'sdk',
        label: 'SDK & Libraries',
        description: 'Official SDKs for popular languages',
        icon: <Layers className="w-5 h-5" />,
        href: '/developers/sdk'
      }]
    }, {
      key: 'settings',
      label: 'Settings',
      icon: <Settings className="w-4 h-4" />,
      href: '/settings'
    }]
  }
}`,...(G=(_=g.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var z,T,F;w.parameters={...w.parameters,docs:{...(z=w.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    items: [{
      key: 'home',
      label: 'Home',
      icon: <Home className="w-4 h-4" />,
      href: '/'
    }, {
      key: 'team',
      label: 'Team',
      icon: <Users className="w-4 h-4" />,
      children: [{
        key: 'members',
        label: 'Team Members',
        description: 'Manage your team and permissions',
        icon: <Users className="w-5 h-5" />,
        href: '/team/members'
      }, {
        key: 'roles',
        label: 'Roles & Permissions',
        description: 'Configure access control and roles',
        icon: <Shield className="w-5 h-5" />,
        href: '/team/roles'
      }]
    }, {
      key: 'reports',
      label: 'Reports',
      icon: <BarChart className="w-4 h-4" />,
      children: [{
        key: 'analytics',
        label: 'Analytics',
        description: 'View detailed analytics and metrics',
        icon: <BarChart className="w-5 h-5" />,
        href: '/reports/analytics'
      }, {
        key: 'performance',
        label: 'Performance',
        description: 'Monitor system performance',
        icon: <Zap className="w-5 h-5" />,
        href: '/reports/performance'
      }]
    }, {
      key: 'settings',
      label: 'Settings',
      icon: <Settings className="w-4 h-4" />,
      href: '/settings'
    }]
  }
}`,...(F=(T=w.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var K,U,Z;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    items: [{
      key: 'home',
      label: 'Home',
      icon: <Home className="w-4 h-4" />,
      href: '/'
    }, {
      key: 'products',
      label: 'Products',
      icon: <Package className="w-4 h-4" />,
      children: [{
        key: 'analytics',
        label: 'Analytics',
        description: 'Get insights into your data',
        icon: <BarChart className="w-5 h-5" />,
        href: '/products/analytics'
      }, {
        key: 'beta',
        label: 'Beta Features',
        description: 'Coming soon - Early access features',
        icon: <Zap className="w-5 h-5" />,
        disabled: true
      }]
    }, {
      key: 'enterprise',
      label: 'Enterprise',
      icon: <Building className="w-4 h-4" />,
      disabled: true
    }, {
      key: 'settings',
      label: 'Settings',
      icon: <Settings className="w-4 h-4" />,
      href: '/settings'
    }]
  }
}`,...(Z=(U=v.parameters)==null?void 0:U.docs)==null?void 0:Z.source}}};var q,Q,O;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    items: [{
      key: 'home',
      label: 'Home',
      href: '/'
    }, {
      key: 'about',
      label: 'About',
      href: '/about'
    }, {
      key: 'services',
      label: 'Services',
      href: '/services'
    }, {
      key: 'portfolio',
      label: 'Portfolio',
      href: '/portfolio'
    }, {
      key: 'blog',
      label: 'Blog',
      href: '/blog'
    }, {
      key: 'contact',
      label: 'Contact',
      href: '/contact'
    }]
  }
}`,...(O=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:O.source}}};var $,J,W;N.parameters={...N.parameters,docs:{...($=N.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    items: [{
      key: 'home',
      label: 'Home',
      icon: <Home className="w-4 h-4" />,
      href: '/'
    }, {
      key: 'products',
      label: 'Products',
      icon: <Package className="w-4 h-4" />,
      children: [{
        key: 'analytics',
        label: 'Analytics Platform',
        description: 'Real-time data analysis and business intelligence',
        icon: <BarChart className="w-5 h-5" />,
        href: '/products/analytics'
      }, {
        key: 'ecommerce',
        label: 'E-Commerce Suite',
        description: 'Complete solution for online stores',
        icon: <ShoppingCart className="w-5 h-5" />,
        href: '/products/ecommerce'
      }, {
        key: 'payments',
        label: 'Payment Gateway',
        description: 'Secure payment processing worldwide',
        icon: <CreditCard className="w-5 h-5" />,
        href: '/products/payments'
      }, {
        key: 'cloud',
        label: 'Cloud Infrastructure',
        description: 'Scalable hosting and deployment',
        icon: <Cloud className="w-5 h-5" />,
        href: '/products/cloud'
      }, {
        key: 'beta',
        label: 'Beta Program',
        description: 'Early access to new features (Coming Soon)',
        icon: <Zap className="w-5 h-5" />,
        disabled: true
      }]
    }, {
      key: 'developers',
      label: 'Developers',
      icon: <Code className="w-4 h-4" />,
      children: [{
        key: 'documentation',
        label: 'Documentation',
        description: 'Comprehensive guides and tutorials',
        icon: <BookOpen className="w-5 h-5" />,
        href: '/developers/docs'
      }, {
        key: 'api',
        label: 'API Reference',
        description: 'Complete API documentation',
        icon: <FileText className="w-5 h-5" />,
        href: '/developers/api'
      }, {
        key: 'sdk',
        label: 'SDKs & Libraries',
        description: 'Official libraries for all platforms',
        icon: <Layers className="w-5 h-5" />,
        href: '/developers/sdk'
      }, {
        key: 'graphql',
        label: 'GraphQL API',
        description: 'Flexible GraphQL endpoint (Beta)',
        icon: <Database className="w-5 h-5" />,
        href: '/developers/graphql',
        disabled: true
      }]
    }, {
      key: 'company',
      label: 'Company',
      icon: <Building className="w-4 h-4" />,
      children: [{
        key: 'about',
        label: 'About Us',
        description: 'Learn about our mission and values',
        icon: <Building className="w-5 h-5" />,
        href: '/company/about'
      }, {
        key: 'blog',
        label: 'Blog',
        description: 'Latest news and updates',
        icon: <Globe className="w-5 h-5" />,
        href: '/company/blog'
      }, {
        key: 'contact',
        label: 'Contact',
        description: 'Get in touch with our team',
        icon: <Mail className="w-5 h-5" />,
        href: '/company/contact'
      }, {
        key: 'careers',
        label: 'Careers',
        description: 'Join our growing team',
        icon: <Users className="w-5 h-5" />,
        href: '/company/careers'
      }]
    }, {
      key: 'enterprise',
      label: 'Enterprise',
      icon: <Shield className="w-4 h-4" />,
      disabled: true
    }, {
      key: 'support',
      label: 'Support',
      icon: <HelpCircle className="w-4 h-4" />,
      href: '/support'
    }]
  }
}`,...(W=(J=N.parameters)==null?void 0:J.docs)==null?void 0:W.source}}};const Ze=["Default","WithIcons","Vertical","DisabledItems","LinksOnly","Complex"];export{N as Complex,k as Default,v as DisabledItems,x as LinksOnly,w as Vertical,g as WithIcons,Ze as __namedExportsOrder,Ue as default};
