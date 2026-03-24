import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as B,r as d}from"./index-ZH-6pyQh.js";import{c as k}from"./utils-_uLxnvdl.js";import"./_commonjsHelpers-CqkleIqs.js";const ie={xs:{link:"text-xs py-0.5 pl-3",indicator:"w-0.5"},sm:{link:"text-sm py-0.5 pl-3",indicator:"w-0.5"},md:{link:"text-sm py-1 pl-4",indicator:"w-0.5"},lg:{link:"text-base py-1 pl-5",indicator:"w-1"}};function _(t){return t.flatMap(c=>[c.id,...c.children?_(c.children):[]])}function P(t){return t?t():typeof window<"u"?window:null}function se(t){return!t||t===window||t instanceof Window?{top:0}:t.getBoundingClientRect()}function C(t,c){t.scrollTo({top:c,behavior:"smooth"})}const x=B.memo(({items:t,offset:c=0,targetOffset:g=0,size:J="md",affix:T=!1,affixTop:Z=0,getContainer:h,className:$,classNames:p,onChange:m})=>{const[u,F]=d.useState(""),[K,Q]=d.useState(0),[X,ee]=d.useState(0),N=d.useRef(null),I=d.useRef(new Map),w=d.useRef(!1),R=_(t),b=d.useCallback(()=>{if(w.current||typeof window>"u")return;const s=P(h),o=se(s).top;let a="";for(const l of R){const f=document.getElementById(l);f&&f.getBoundingClientRect().top-o<=c+10&&(a=l)}a&&a!==u&&(F(a),m==null||m(a))},[R,c,u,m,h]);d.useEffect(()=>{if(typeof window>"u")return;const s=P(h),o=s instanceof Window?window:s;return o.addEventListener("scroll",b,{passive:!0}),b(),()=>o.removeEventListener("scroll",b)},[b,h]),d.useEffect(()=>{if(!u||!N.current)return;const s=I.current.get(u);if(s){const o=N.current.getBoundingClientRect(),a=s.getBoundingClientRect();Q(a.top-o.top),ee(a.height)}},[u]);const te=d.useCallback((s,o)=>{s.preventDefault();const a=document.getElementById(o);if(!a)return;const l=P(h);if(w.current=!0,F(o),m==null||m(o),l instanceof Window){const f=a.getBoundingClientRect().top+window.scrollY-g;C(l,f)}else{const f=a.offsetTop-g;C(l,f)}setTimeout(()=>{w.current=!1},800)},[g,m,h]),E=ie[J],ne={0:"",1:"pl-6",2:"pl-10",3:"pl-14"},A=(s,o=0)=>{var a;return e.jsxs(B.Fragment,{children:[e.jsx("a",{ref:l=>{l&&I.current.set(s.id,l)},href:`#${s.id}`,onClick:l=>te(l,s.id),"data-slot":"link",className:k("anchor_link","block text-text-secondary hover:text-text-primary transition-colors truncate",E.link,o>0&&(ne[o]||"pl-14"),u===s.id&&"text-primary font-medium",u===s.id&&(p==null?void 0:p.activeLink),p==null?void 0:p.link),children:s.label}),(a=s.children)==null?void 0:a.map(l=>A(l,o+1))]},s.id)};return e.jsxs("nav",{ref:N,"data-slot":"root",className:k("anchor_root","relative",T&&"sticky",p==null?void 0:p.root,$),style:T?{top:Z}:void 0,"aria-label":"Table of contents",children:[e.jsx("div",{"data-slot":"indicator",className:k("anchor_indicator","absolute left-0 rounded-full bg-primary transition-all duration-200",E.indicator,p==null?void 0:p.indicator),style:{top:K,height:X,opacity:u?1:0}}),e.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-px bg-border"}),t.map(s=>A(s))]})});x.displayName="Anchor";x.__docgenInfo={description:"",methods:[],displayName:"Anchor",props:{offset:{defaultValue:{value:"0",computed:!1},required:!1},targetOffset:{defaultValue:{value:"0",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1},affix:{defaultValue:{value:"false",computed:!1},required:!1},affixTop:{defaultValue:{value:"0",computed:!1},required:!1}}};const xe={title:"Navigation/Anchor",component:x,tags:["autodocs"]},i=({id:t,title:c,children:g})=>e.jsxs("section",{id:t,className:"mb-10 scroll-mt-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-text-primary mb-3 pb-2 border-b border-border",children:c}),e.jsx("div",{className:"text-sm text-text-secondary leading-relaxed space-y-3",children:g})]}),n=()=>e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}),re=[{id:"getting-started",label:"Getting Started"},{id:"installation",label:"Installation"},{id:"components",label:"Components",children:[{id:"button",label:"Button"},{id:"input",label:"Input"},{id:"select",label:"Select"}]},{id:"theming",label:"Theming"},{id:"api-reference",label:"API Reference"},{id:"changelog",label:"Changelog"}],y={render:()=>{const t=d.useRef(null);return e.jsxs("div",{className:"flex gap-8 h-[500px]",children:[e.jsxs("div",{ref:t,className:"flex-1 overflow-y-auto pr-6",style:{scrollBehavior:"smooth"},children:[e.jsxs(i,{id:"getting-started",title:"Getting Started",children:[e.jsx("p",{children:"Welcome to the UI Kit documentation. This guide will walk you through everything you need to know to start building beautiful interfaces."}),e.jsx(n,{}),e.jsx(n,{})]}),e.jsxs(i,{id:"installation",title:"Installation",children:[e.jsx("p",{children:"Install the package using your preferred package manager:"}),e.jsx("pre",{className:"bg-surface rounded-md p-3 font-mono text-xs mt-2",children:"npm install @fmlj/uikit"}),e.jsx("p",{className:"mt-3",children:"Then import the global styles in your entry file:"}),e.jsx("pre",{className:"bg-surface rounded-md p-3 font-mono text-xs mt-2",children:"import '@fmlj/uikit/styles.css'"}),e.jsx(n,{})]}),e.jsxs(i,{id:"components",title:"Components",children:[e.jsx("p",{children:"The library ships with 70+ production-ready components. Here are the most commonly used ones:"}),e.jsx(n,{})]}),e.jsxs(i,{id:"button",title:"Button",children:[e.jsx("p",{children:"The Button component supports multiple variants, sizes, and colors. It can render as a button or an anchor element."}),e.jsxs("div",{className:"flex gap-2 mt-3",children:[e.jsx("button",{className:"px-3 py-1.5 rounded-md bg-primary text-white text-xs",children:"Primary"}),e.jsx("button",{className:"px-3 py-1.5 rounded-md border border-border text-text-primary text-xs",children:"Outline"}),e.jsx("button",{className:"px-3 py-1.5 rounded-md text-primary text-xs",children:"Ghost"})]}),e.jsx(n,{})]}),e.jsxs(i,{id:"input",title:"Input",children:[e.jsx("p",{children:"Text input with label, validation states, prefix/suffix icons, and clearable functionality."}),e.jsx("input",{className:"mt-3 w-full max-w-xs px-3 py-1.5 rounded-md border border-border bg-background text-sm",placeholder:"Example input"}),e.jsx(n,{})]}),e.jsxs(i,{id:"select",title:"Select",children:[e.jsx("p",{children:"Dropdown selection with search, multi-select, groups, and keyboard navigation."}),e.jsx(n,{}),e.jsx(n,{})]}),e.jsxs(i,{id:"theming",title:"Theming",children:[e.jsx("p",{children:"The design system uses CSS custom properties for all colors, sizes, and spacing. Override them at the root level or scope them to specific sections."}),e.jsx("pre",{className:"bg-surface rounded-md p-3 font-mono text-xs mt-2",children:`:root {
  --color-primary: #3b82f6;
  --color-accent: #8b5cf6;
  --radius-md: 0.375rem;
}`}),e.jsx(n,{}),e.jsx(n,{})]}),e.jsxs(i,{id:"api-reference",title:"API Reference",children:[e.jsx("p",{children:"Every component exports its TypeScript types. Import them alongside the component:"}),e.jsx("pre",{className:"bg-surface rounded-md p-3 font-mono text-xs mt-2",children:`import { Button } from '@fmlj/uikit'
import type { ButtonProps } from '@fmlj/uikit'`}),e.jsx(n,{}),e.jsx(n,{})]}),e.jsxs(i,{id:"changelog",title:"Changelog",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-text-primary",children:"v2.4.0 — February 2026"}),e.jsxs("ul",{className:"list-disc list-inside mt-1 space-y-1",children:[e.jsx("li",{children:"Added Anchor component with scrollspy"}),e.jsx("li",{children:"Added Tour component with step animations"}),e.jsx("li",{children:"Added QR Code with pattern support"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-text-primary",children:"v2.3.0 — January 2026"}),e.jsxs("ul",{className:"list-disc list-inside mt-1 space-y-1",children:[e.jsx("li",{children:"New Statistic and Result components"}),e.jsx("li",{children:"Watermark tamper protection"}),e.jsx("li",{children:"FloatButton group animations"})]})]})]}),e.jsx(n,{})]})]}),e.jsxs("div",{className:"w-48 shrink-0",children:[e.jsx("p",{className:"text-xs font-semibold text-text-secondary uppercase tracking-wider mb-3",children:"On this page"}),e.jsx(x,{items:re,getContainer:()=>t.current,offset:10})]})]})}},ae=[{id:"profile",label:"Profile"},{id:"account",label:"Account"},{id:"notifications",label:"Notifications"},{id:"security",label:"Security"},{id:"billing",label:"Billing"},{id:"danger-zone",label:"Danger Zone"}],r=({label:t,children:c})=>e.jsxs("div",{className:"flex items-start justify-between py-3 border-b border-border last:border-b-0",children:[e.jsx("span",{className:"text-sm text-text-primary font-medium",children:t}),e.jsx("div",{className:"text-sm text-text-secondary",children:c})]}),v={render:()=>{const t=d.useRef(null);return e.jsxs("div",{className:"flex gap-8 h-[480px] border border-border rounded-lg overflow-hidden bg-background",children:[e.jsxs("div",{className:"w-52 shrink-0 border-r border-border p-5 pt-6",children:[e.jsx("h3",{className:"text-sm font-semibold text-text-primary mb-4",children:"Settings"}),e.jsx(x,{items:ae,getContainer:()=>t.current,offset:10,size:"sm"})]}),e.jsxs("div",{ref:t,className:"flex-1 overflow-y-auto p-6",style:{scrollBehavior:"smooth"},children:[e.jsxs(i,{id:"profile",title:"Profile",children:[e.jsx(r,{label:"Display name",children:"John Doe"}),e.jsx(r,{label:"Email",children:"john@example.com"}),e.jsx(r,{label:"Bio",children:"Senior Frontend Engineer"}),e.jsx(r,{label:"Avatar",children:e.jsx("div",{className:"w-8 h-8 rounded-full bg-primary/20"})})]}),e.jsxs(i,{id:"account",title:"Account",children:[e.jsx(r,{label:"Username",children:"@johndoe"}),e.jsx(r,{label:"Language",children:"English (US)"}),e.jsx(r,{label:"Timezone",children:"UTC-5 Eastern"}),e.jsx(r,{label:"Date format",children:"MM/DD/YYYY"})]}),e.jsxs(i,{id:"notifications",title:"Notifications",children:[e.jsx(r,{label:"Email notifications",children:"Enabled"}),e.jsx(r,{label:"Push notifications",children:"Disabled"}),e.jsx(r,{label:"Weekly digest",children:"Every Monday"}),e.jsx(r,{label:"Marketing emails",children:"Opt-out"}),e.jsx(n,{})]}),e.jsxs(i,{id:"security",title:"Security",children:[e.jsx(r,{label:"Password",children:"Last changed 30 days ago"}),e.jsx(r,{label:"Two-factor auth",children:"Enabled (Authenticator)"}),e.jsx(r,{label:"Active sessions",children:"3 devices"}),e.jsx(r,{label:"Login history",children:"View all →"}),e.jsx(n,{})]}),e.jsxs(i,{id:"billing",title:"Billing",children:[e.jsx(r,{label:"Current plan",children:"Pro ($29/mo)"}),e.jsx(r,{label:"Payment method",children:"Visa •••• 4242"}),e.jsx(r,{label:"Next invoice",children:"March 1, 2026"}),e.jsx(r,{label:"Usage",children:"847 / 1000 API calls"}),e.jsx(n,{})]}),e.jsxs(i,{id:"danger-zone",title:"Danger Zone",children:[e.jsx("div",{className:"rounded-md border border-error/30 p-4 space-y-3",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-text-primary",children:"Delete account"}),e.jsx("p",{className:"text-xs text-text-secondary",children:"Permanently remove your account and all data"})]}),e.jsx("button",{className:"px-3 py-1.5 rounded-md border border-error text-error text-xs font-medium",children:"Delete"})]})}),e.jsx(n,{})]})]})]})}},oe=[{id:"art-intro",label:"Introduction"},{id:"art-problem",label:"The Problem"},{id:"art-solution",label:"Our Solution"},{id:"art-implementation",label:"Implementation",children:[{id:"art-step-1",label:"Step 1: Setup"},{id:"art-step-2",label:"Step 2: Core Logic"},{id:"art-step-3",label:"Step 3: Polish"}]},{id:"art-results",label:"Results"},{id:"art-conclusion",label:"Conclusion"}],j={render:()=>{const t=d.useRef(null);return e.jsxs("div",{className:"flex gap-10 h-[520px]",children:[e.jsxs("div",{ref:t,className:"flex-1 overflow-y-auto pr-4",style:{scrollBehavior:"smooth"},children:[e.jsxs("div",{className:"mb-8",children:[e.jsx("span",{className:"text-xs font-medium text-primary uppercase tracking-wider",children:"Engineering Blog"}),e.jsx("h1",{className:"text-2xl font-bold text-text-primary mt-1",children:"Building a Design System from Scratch"}),e.jsx("p",{className:"text-sm text-text-secondary mt-2",children:"Feb 18, 2026 · 8 min read"})]}),e.jsxs(i,{id:"art-intro",title:"Introduction",children:[e.jsx("p",{children:"Design systems are more than component libraries. They encode decisions about visual language, interaction patterns, and engineering standards that keep a product consistent as it scales."}),e.jsx(n,{})]}),e.jsxs(i,{id:"art-problem",title:"The Problem",children:[e.jsx("p",{children:"Our app had 12 different button styles, 4 modal implementations, and spacing values that ranged from 3px to 17px with no rhyme or reason. Every new feature introduced visual debt."}),e.jsx(n,{}),e.jsx(n,{})]}),e.jsxs(i,{id:"art-solution",title:"Our Solution",children:[e.jsx("p",{children:"We built a token-based design system with CSS custom properties at its foundation. Every color, size, radius, and shadow is a semantic token that maps to a role, not a raw value."}),e.jsx(n,{})]}),e.jsxs(i,{id:"art-implementation",title:"Implementation",children:[e.jsx("p",{children:"The build was split into three phases over six weeks."}),e.jsx(n,{})]}),e.jsxs(i,{id:"art-step-1",title:"Step 1: Token Foundation",children:[e.jsx("p",{children:"We defined 48 semantic color tokens, 4 size scales, and a spacing system based on a 4px grid."}),e.jsx("pre",{className:"bg-surface rounded-md p-3 font-mono text-xs mt-2",children:`--color-primary: oklch(0.65 0.24 265);
--color-surface: oklch(0.97 0 0);
--spacing-unit: 4px;`}),e.jsx(n,{})]}),e.jsxs(i,{id:"art-step-2",title:"Step 2: Core Components",children:[e.jsx("p",{children:"Button, Input, Select, Modal, and Toast were built first — they covered 80% of UI patterns. Each component uses CVA for variant composition and supports the full token system."}),e.jsx(n,{}),e.jsx(n,{})]}),e.jsxs(i,{id:"art-step-3",title:"Step 3: Polish & Documentation",children:[e.jsx("p",{children:"We added Storybook stories for every component, wrote AGENTS.md documentation, ran accessibility audits, and built a performance test suite covering mount times and re-render benchmarks."}),e.jsx(n,{})]}),e.jsxs(i,{id:"art-results",title:"Results",children:[e.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-2",children:[e.jsxs("div",{className:"p-3 rounded-md bg-surface text-center",children:[e.jsx("div",{className:"text-2xl font-bold text-primary",children:"70+"}),e.jsx("div",{className:"text-xs text-text-secondary mt-1",children:"Components"})]}),e.jsxs("div",{className:"p-3 rounded-md bg-surface text-center",children:[e.jsx("div",{className:"text-2xl font-bold text-success",children:"1582"}),e.jsx("div",{className:"text-xs text-text-secondary mt-1",children:"Tests passing"})]}),e.jsxs("div",{className:"p-3 rounded-md bg-surface text-center",children:[e.jsx("div",{className:"text-2xl font-bold text-accent",children:"40%"}),e.jsx("div",{className:"text-xs text-text-secondary mt-1",children:"Less CSS shipped"})]})]}),e.jsx(n,{})]}),e.jsxs(i,{id:"art-conclusion",title:"Conclusion",children:[e.jsx("p",{children:'A design system is never "done" — it evolves with your product. But having a solid foundation of tokens, components, and conventions makes every future feature cheaper to build and more consistent for users.'}),e.jsx(n,{}),e.jsx(n,{})]})]}),e.jsxs("div",{className:"w-44 shrink-0 pt-14",children:[e.jsx("p",{className:"text-[11px] font-semibold text-text-secondary uppercase tracking-wider mb-3",children:"Contents"}),e.jsx(x,{items:oe,getContainer:()=>t.current,offset:10,size:"xs"})]})]})}},S={render:()=>e.jsx("div",{className:"flex gap-16",children:["xs","sm","md","lg"].map(t=>e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-medium text-text-secondary mb-3 uppercase",children:t}),e.jsx(x,{items:[{id:"a",label:"Introduction"},{id:"b",label:"Getting Started"},{id:"c",label:"Components",children:[{id:"d",label:"Button"},{id:"e",label:"Input"}]},{id:"f",label:"API Docs"}],size:t})]},t))})};var D,z,L;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    return <div className="flex gap-8 h-[500px]">
        {/* Scrollable content */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto pr-6" style={{
        scrollBehavior: 'smooth'
      }}>
          <Section id="getting-started" title="Getting Started">
            <p>Welcome to the UI Kit documentation. This guide will walk you through everything you need to know to start building beautiful interfaces.</p>
            <Paragraph />
            <Paragraph />
          </Section>

          <Section id="installation" title="Installation">
            <p>Install the package using your preferred package manager:</p>
            <pre className="bg-surface rounded-md p-3 font-mono text-xs mt-2">npm install @fmlj/uikit</pre>
            <p className="mt-3">Then import the global styles in your entry file:</p>
            <pre className="bg-surface rounded-md p-3 font-mono text-xs mt-2">{\`import '@fmlj/uikit/styles.css'\`}</pre>
            <Paragraph />
          </Section>

          <Section id="components" title="Components">
            <p>The library ships with 70+ production-ready components. Here are the most commonly used ones:</p>
            <Paragraph />
          </Section>

          <Section id="button" title="Button">
            <p>The Button component supports multiple variants, sizes, and colors. It can render as a button or an anchor element.</p>
            <div className="flex gap-2 mt-3">
              <button className="px-3 py-1.5 rounded-md bg-primary text-white text-xs">Primary</button>
              <button className="px-3 py-1.5 rounded-md border border-border text-text-primary text-xs">Outline</button>
              <button className="px-3 py-1.5 rounded-md text-primary text-xs">Ghost</button>
            </div>
            <Paragraph />
          </Section>

          <Section id="input" title="Input">
            <p>Text input with label, validation states, prefix/suffix icons, and clearable functionality.</p>
            <input className="mt-3 w-full max-w-xs px-3 py-1.5 rounded-md border border-border bg-background text-sm" placeholder="Example input" />
            <Paragraph />
          </Section>

          <Section id="select" title="Select">
            <p>Dropdown selection with search, multi-select, groups, and keyboard navigation.</p>
            <Paragraph />
            <Paragraph />
          </Section>

          <Section id="theming" title="Theming">
            <p>The design system uses CSS custom properties for all colors, sizes, and spacing. Override them at the root level or scope them to specific sections.</p>
            <pre className="bg-surface rounded-md p-3 font-mono text-xs mt-2">{\`:root {\\n  --color-primary: #3b82f6;\\n  --color-accent: #8b5cf6;\\n  --radius-md: 0.375rem;\\n}\`}</pre>
            <Paragraph />
            <Paragraph />
          </Section>

          <Section id="api-reference" title="API Reference">
            <p>Every component exports its TypeScript types. Import them alongside the component:</p>
            <pre className="bg-surface rounded-md p-3 font-mono text-xs mt-2">{\`import { Button } from '@fmlj/uikit'\\nimport type { ButtonProps } from '@fmlj/uikit'\`}</pre>
            <Paragraph />
            <Paragraph />
          </Section>

          <Section id="changelog" title="Changelog">
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-text-primary">v2.4.0 — February 2026</h4>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  <li>Added Anchor component with scrollspy</li>
                  <li>Added Tour component with step animations</li>
                  <li>Added QR Code with pattern support</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-text-primary">v2.3.0 — January 2026</h4>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  <li>New Statistic and Result components</li>
                  <li>Watermark tamper protection</li>
                  <li>FloatButton group animations</li>
                </ul>
              </div>
            </div>
            <Paragraph />
          </Section>
        </div>

        {/* Sticky anchor navigation */}
        <div className="w-48 shrink-0">
          <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-3">On this page</p>
          <Anchor items={docItems} getContainer={() => scrollRef.current!} offset={10} />
        </div>
      </div>;
  }
}`,...(L=(z=y.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var M,W,O;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    return <div className="flex gap-8 h-[480px] border border-border rounded-lg overflow-hidden bg-background">
        {/* Sidebar nav */}
        <div className="w-52 shrink-0 border-r border-border p-5 pt-6">
          <h3 className="text-sm font-semibold text-text-primary mb-4">Settings</h3>
          <Anchor items={settingsItems} getContainer={() => scrollRef.current!} offset={10} size="sm" />
        </div>

        {/* Scrollable settings panels */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6" style={{
        scrollBehavior: 'smooth'
      }}>
          <Section id="profile" title="Profile">
            <SettingsField label="Display name">John Doe</SettingsField>
            <SettingsField label="Email">john@example.com</SettingsField>
            <SettingsField label="Bio">Senior Frontend Engineer</SettingsField>
            <SettingsField label="Avatar">
              <div className="w-8 h-8 rounded-full bg-primary/20" />
            </SettingsField>
          </Section>

          <Section id="account" title="Account">
            <SettingsField label="Username">@johndoe</SettingsField>
            <SettingsField label="Language">English (US)</SettingsField>
            <SettingsField label="Timezone">UTC-5 Eastern</SettingsField>
            <SettingsField label="Date format">MM/DD/YYYY</SettingsField>
          </Section>

          <Section id="notifications" title="Notifications">
            <SettingsField label="Email notifications">Enabled</SettingsField>
            <SettingsField label="Push notifications">Disabled</SettingsField>
            <SettingsField label="Weekly digest">Every Monday</SettingsField>
            <SettingsField label="Marketing emails">Opt-out</SettingsField>
            <Paragraph />
          </Section>

          <Section id="security" title="Security">
            <SettingsField label="Password">Last changed 30 days ago</SettingsField>
            <SettingsField label="Two-factor auth">Enabled (Authenticator)</SettingsField>
            <SettingsField label="Active sessions">3 devices</SettingsField>
            <SettingsField label="Login history">View all →</SettingsField>
            <Paragraph />
          </Section>

          <Section id="billing" title="Billing">
            <SettingsField label="Current plan">Pro ($29/mo)</SettingsField>
            <SettingsField label="Payment method">Visa •••• 4242</SettingsField>
            <SettingsField label="Next invoice">March 1, 2026</SettingsField>
            <SettingsField label="Usage">847 / 1000 API calls</SettingsField>
            <Paragraph />
          </Section>

          <Section id="danger-zone" title="Danger Zone">
            <div className="rounded-md border border-error/30 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-text-primary">Delete account</p>
                  <p className="text-xs text-text-secondary">Permanently remove your account and all data</p>
                </div>
                <button className="px-3 py-1.5 rounded-md border border-error text-error text-xs font-medium">Delete</button>
              </div>
            </div>
            <Paragraph />
          </Section>
        </div>
      </div>;
  }
}`,...(O=(W=v.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};var U,V,q;j.parameters={...j.parameters,docs:{...(U=j.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    return <div className="flex gap-10 h-[520px]">
        <div ref={scrollRef} className="flex-1 overflow-y-auto pr-4" style={{
        scrollBehavior: 'smooth'
      }}>
          <div className="mb-8">
            <span className="text-xs font-medium text-primary uppercase tracking-wider">Engineering Blog</span>
            <h1 className="text-2xl font-bold text-text-primary mt-1">Building a Design System from Scratch</h1>
            <p className="text-sm text-text-secondary mt-2">Feb 18, 2026 · 8 min read</p>
          </div>

          <Section id="art-intro" title="Introduction">
            <p>
              Design systems are more than component libraries. They encode decisions about visual language,
              interaction patterns, and engineering standards that keep a product consistent as it scales.
            </p>
            <Paragraph />
          </Section>

          <Section id="art-problem" title="The Problem">
            <p>
              Our app had 12 different button styles, 4 modal implementations, and spacing values that
              ranged from 3px to 17px with no rhyme or reason. Every new feature introduced visual debt.
            </p>
            <Paragraph />
            <Paragraph />
          </Section>

          <Section id="art-solution" title="Our Solution">
            <p>
              We built a token-based design system with CSS custom properties at its foundation. Every
              color, size, radius, and shadow is a semantic token that maps to a role, not a raw value.
            </p>
            <Paragraph />
          </Section>

          <Section id="art-implementation" title="Implementation">
            <p>The build was split into three phases over six weeks.</p>
            <Paragraph />
          </Section>

          <Section id="art-step-1" title="Step 1: Token Foundation">
            <p>We defined 48 semantic color tokens, 4 size scales, and a spacing system based on a 4px grid.</p>
            <pre className="bg-surface rounded-md p-3 font-mono text-xs mt-2">{\`--color-primary: oklch(0.65 0.24 265);\\n--color-surface: oklch(0.97 0 0);\\n--spacing-unit: 4px;\`}</pre>
            <Paragraph />
          </Section>

          <Section id="art-step-2" title="Step 2: Core Components">
            <p>
              Button, Input, Select, Modal, and Toast were built first — they covered 80% of UI patterns.
              Each component uses CVA for variant composition and supports the full token system.
            </p>
            <Paragraph />
            <Paragraph />
          </Section>

          <Section id="art-step-3" title="Step 3: Polish & Documentation">
            <p>
              We added Storybook stories for every component, wrote AGENTS.md documentation, ran accessibility
              audits, and built a performance test suite covering mount times and re-render benchmarks.
            </p>
            <Paragraph />
          </Section>

          <Section id="art-results" title="Results">
            <div className="grid grid-cols-3 gap-4 mt-2">
              <div className="p-3 rounded-md bg-surface text-center">
                <div className="text-2xl font-bold text-primary">70+</div>
                <div className="text-xs text-text-secondary mt-1">Components</div>
              </div>
              <div className="p-3 rounded-md bg-surface text-center">
                <div className="text-2xl font-bold text-success">1582</div>
                <div className="text-xs text-text-secondary mt-1">Tests passing</div>
              </div>
              <div className="p-3 rounded-md bg-surface text-center">
                <div className="text-2xl font-bold text-accent">40%</div>
                <div className="text-xs text-text-secondary mt-1">Less CSS shipped</div>
              </div>
            </div>
            <Paragraph />
          </Section>

          <Section id="art-conclusion" title="Conclusion">
            <p>
              A design system is never "done" — it evolves with your product. But having a solid foundation
              of tokens, components, and conventions makes every future feature cheaper to build and more
              consistent for users.
            </p>
            <Paragraph />
            <Paragraph />
          </Section>
        </div>

        {/* Right-side TOC */}
        <div className="w-44 shrink-0 pt-14">
          <p className="text-[11px] font-semibold text-text-secondary uppercase tracking-wider mb-3">Contents</p>
          <Anchor items={articleItems} getContainer={() => scrollRef.current!} offset={10} size="xs" />
        </div>
      </div>;
  }
}`,...(q=(V=j.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var G,Y,H;S.parameters={...S.parameters,docs:{...(G=S.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div className="flex gap-16">
      {(['xs', 'sm', 'md', 'lg'] as const).map(size => <div key={size}>
          <p className="text-xs font-medium text-text-secondary mb-3 uppercase">{size}</p>
          <Anchor items={[{
        id: 'a',
        label: 'Introduction'
      }, {
        id: 'b',
        label: 'Getting Started'
      }, {
        id: 'c',
        label: 'Components',
        children: [{
          id: 'd',
          label: 'Button'
        }, {
          id: 'e',
          label: 'Input'
        }]
      }, {
        id: 'f',
        label: 'API Docs'
      }]} size={size} />
        </div>)}
    </div>
}`,...(H=(Y=S.parameters)==null?void 0:Y.docs)==null?void 0:H.source}}};const he=["DocumentationPage","SettingsPage","BlogArticle","Sizes"];export{j as BlogArticle,y as DocumentationPage,v as SettingsPage,S as Sizes,he as __namedExportsOrder,xe as default};
