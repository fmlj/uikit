import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as l}from"./index-23ax1BAm.js";import{h as j}from"./index-BwNXgB6e.js";import{B as Q}from"./index-DyC3bL0y.js";import{T as X}from"./index-CHc-iJ3O.js";import{r as d}from"./index-ZH-6pyQh.js";import{S as U,M as J}from"./sun-Bn3huqpQ.js";import{M as Z}from"./monitor-B7QOqptH.js";import"./index-ZW2Bszwo.js";import"./index-Bo-loign.js";import"./utils-_uLxnvdl.js";import"./index-BoArNvwV.js";import"./variants-C8qliDOr.js";import"./useRipple-BuuTbn0W.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createLucideIcon-BXJdBs6C.js";const V=d.createContext(void 0),Y="(prefers-color-scheme: dark)",k=t=>{if(typeof window>"u")return null;try{return localStorage.getItem(t)||null}catch{return null}},ee=(t,r)=>{if(!(typeof window>"u"))try{localStorage.setItem(t,r)}catch{}},N=()=>typeof window>"u"?"light":window.matchMedia(Y).matches?"dark":"light",y=(t,r)=>{if(typeof window>"u")return;const s=document.documentElement;if(r){const o=document.createElement("style");o.textContent="* { transition: none !important; }",document.head.appendChild(o),s.offsetHeight,setTimeout(()=>{document.head.removeChild(o)},1)}s.classList.remove("light","dark"),s.classList.add(t),s.setAttribute("data-mode",t)},u=({children:t,defaultTheme:r="system",storageKey:s="ui-theme",disableTransitionOnChange:o=!1})=>{const[n,f]=d.useState(()=>typeof window>"u"?r:k(s)??r),[g,v]=d.useState(()=>{if(typeof window>"u")return"light";const a=k(s)??r;return a==="system"?N():a}),b=d.useCallback(a=>{f(a),ee(s,a);const i=a==="system"?N():a;v(i),y(i,o)},[s,o]);d.useEffect(()=>{if(n!=="system")return;const a=window.matchMedia(Y),i=G=>{const T=G.matches?"dark":"light";v(T),y(T,o)};return i(a),a.addEventListener?(a.addEventListener("change",i),()=>a.removeEventListener("change",i)):(a.addListener(i),()=>a.removeListener(i))},[n,o]),d.useEffect(()=>{y(g,!1)},[g]);const F=d.useMemo(()=>({theme:n,resolvedTheme:g,setTheme:b}),[n,g,b]);return e.jsx(V.Provider,{value:F,children:t})},x=()=>{const t=d.useContext(V);if(t===void 0)throw new Error("useTheme must be used within a ThemeProvider");return t};function te(t="ui-theme"){return`
(function() {
  try {
    var storageKey = ${JSON.stringify(t)};
    var theme = localStorage.getItem(storageKey) || 'system';
    var resolved = theme;

    if (theme === 'system') {
      resolved = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    document.documentElement.classList.add(resolved);
    document.documentElement.setAttribute('data-mode', resolved);
  } catch (e) {}
})();
`}te();u.__docgenInfo={description:`ThemeProvider Component
Provides theme context and manages theme state with persistence`,methods:[],displayName:"ThemeProvider",props:{defaultTheme:{required:!1,tsType:{name:"union",raw:"'light' | 'dark' | 'system'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'system'"}]},description:"@default 'system'",defaultValue:{value:"'system'",computed:!1}},storageKey:{required:!1,tsType:{name:"string"},description:`The localStorage key to use for persisting theme preference
@default 'ui-theme'`,defaultValue:{value:"'ui-theme'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disableTransitionOnChange:{required:!1,tsType:{name:"boolean"},description:"@default false",defaultValue:{value:"false",computed:!1}},enableStrictMode:{required:!1,tsType:{name:"boolean"},description:"@default false"}}};const be={title:"Design System/ThemeProvider",component:u,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Manages light/dark/system theme with localStorage persistence. Wrap your app root and use the `useTheme` hook to read or change the current theme."}}},argTypes:{defaultTheme:{control:"select",options:["light","dark","system"],description:"Initial theme when no preference is stored"},disableTransitionOnChange:{control:"boolean",description:"Disable CSS transitions during theme switch"}}},re=()=>{const{theme:t,setTheme:r,resolvedTheme:s}=x();return e.jsxs("div",{className:"flex items-center gap-1 rounded-lg border border-border bg-surface p-1",children:[[{value:"light",icon:U,label:"Light"},{value:"dark",icon:J,label:"Dark"},{value:"system",icon:Z,label:"System"}].map(({value:o,icon:n,label:f})=>e.jsx(l,{size:"sm",variant:t===o?"solid":"ghost",onClick:()=>r(o),iconLeft:e.jsx(n,{className:"h-4 w-4"}),children:f},o)),e.jsx(Q,{variant:"soft",color:"primary",className:"ml-2",children:s})]})},se=()=>{const{resolvedTheme:t}=x();return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-bold text-text-primary mb-1",children:"Theme Provider"}),e.jsx("p",{className:"text-text-secondary",children:"Toggle between light, dark, and system themes. Preference persists to localStorage."})]}),e.jsx(re,{}),e.jsx("div",{className:"grid gap-4 sm:grid-cols-2 lg:grid-cols-3",children:[{label:"Background",class:"bg-background",border:!0},{label:"Surface",class:"bg-surface",border:!0},{label:"Primary",class:"bg-primary text-primary-foreground",border:!1},{label:"Success",class:"bg-success text-success-foreground",border:!1},{label:"Error",class:"bg-error text-error-foreground",border:!1},{label:"Warning",class:"bg-warning text-warning-foreground",border:!1}].map(({label:r,class:s,border:o})=>e.jsx("div",{className:`rounded-lg p-4 text-center text-sm font-medium ${s} ${o?"border border-border":""}`,children:r},r))}),e.jsx(j,{children:e.jsxs("div",{className:"p-5 space-y-3",children:[e.jsx("h3",{className:"text-base font-semibold text-text-primary",children:"Components adapt automatically"}),e.jsx("p",{className:"text-sm text-text-secondary",children:"All components read theme tokens via CSS custom properties — no prop changes needed."}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(l,{variant:"solid",color:"primary",children:"Primary"}),e.jsx(l,{variant:"outline",color:"secondary",children:"Secondary"}),e.jsx(l,{variant:"ghost",color:"accent",children:"Accent"}),e.jsx(X,{defaultPressed:!0,children:"Dark mode"})]})]})}),e.jsx(j,{children:e.jsxs("div",{className:"p-5 space-y-3",children:[e.jsx("h3",{className:"text-base font-semibold text-text-primary",children:"useTheme Hook API"}),e.jsx("pre",{className:"bg-surface border border-border rounded-lg p-4 text-xs overflow-x-auto",children:`const { theme, setTheme, resolvedTheme } = useTheme()

// theme: 'light' | 'dark' | 'system'
// resolvedTheme: 'light' | 'dark' (actual computed theme)
// setTheme: (theme) => void`}),e.jsx("div",{className:"flex gap-4 text-sm",children:e.jsxs("div",{children:[e.jsx("span",{className:"text-text-secondary",children:"theme: "}),e.jsx("code",{className:"text-primary font-mono",children:`"${t}"`})]})})]})})]})},c={render:()=>e.jsx(u,{defaultTheme:"system",storageKey:"storybook-theme",children:e.jsx("div",{className:"bg-background p-6 rounded-xl min-h-[400px]",children:e.jsx(se,{})})})},m={render:()=>e.jsxs("div",{className:"max-w-2xl space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-text-primary",children:"Quick Setup"}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-semibold text-text-primary mb-2",children:"1. Wrap your app"}),e.jsx("pre",{className:"bg-surface border border-border rounded-lg p-4 text-xs overflow-x-auto",children:`import { ThemeProvider } from '@fmlj/uikit'

export default function App({ children }) {
  return (
    <ThemeProvider defaultTheme="system">
      {children}
    </ThemeProvider>
  )
}`})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-semibold text-text-primary mb-2",children:"2. Add the theme script (prevents flash)"}),e.jsx("pre",{className:"bg-surface border border-border rounded-lg p-4 text-xs overflow-x-auto",children:`import { getThemeScript } from '@fmlj/uikit'

// In your HTML <head>:
<script dangerouslySetInnerHTML={{ __html: getThemeScript() }} />

// With a custom storage key:
<script dangerouslySetInnerHTML={{ __html: getThemeScript('my-app-theme') }} />`}),e.jsxs("p",{className:"text-xs text-text-secondary mt-2",children:[e.jsx("code",{children:"getThemeScript()"})," generates inline JS that reads the stored preference and sets the ",e.jsx("code",{children:"class"})," attribute before React hydrates, preventing a flash of wrong theme."]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-semibold text-text-primary mb-2",children:"3. Use the hook anywhere"}),e.jsx("pre",{className:"bg-surface border border-border rounded-lg p-4 text-xs overflow-x-auto",children:`import { useTheme } from '@fmlj/uikit'

function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Currently: {resolvedTheme}
    </button>
  )
}`})]}),e.jsx("div",{className:"bg-info/10 border border-info/30 rounded-lg p-4",children:e.jsxs("p",{className:"text-sm text-text-primary",children:[e.jsx("strong",{children:"Props:"})," ",e.jsx("code",{children:"defaultTheme"})," (light/dark/system), "," ",e.jsx("code",{children:"storageKey"})," (localStorage key), "," ",e.jsx("code",{children:"disableTransitionOnChange"})," (skip transition on switch)"]})})]})},h={render:()=>{const t=()=>{const{theme:r,setTheme:s,resolvedTheme:o}=x();return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{className:"text-sm text-text-secondary",children:["Click the buttons below. Theme switches happen ",e.jsx("strong",{children:"instantly"})," with no CSS transition because ",e.jsx("code",{children:"disableTransitionOnChange"})," is enabled."]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(l,{size:"sm",variant:r==="light"?"solid":"outline",onClick:()=>s("light"),iconLeft:e.jsx(U,{className:"h-4 w-4"}),children:"Light"}),e.jsx(l,{size:"sm",variant:r==="dark"?"solid":"outline",onClick:()=>s("dark"),iconLeft:e.jsx(J,{className:"h-4 w-4"}),children:"Dark"}),e.jsx(Q,{variant:"soft",color:"primary",children:o})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsx("div",{className:"p-4 rounded-lg bg-surface border border-border text-sm",children:"Surface color"}),e.jsx("div",{className:"p-4 rounded-lg bg-primary text-primary-foreground text-sm",children:"Primary color"})]})]})};return e.jsx(u,{defaultTheme:"light",storageKey:"storybook-no-transition",disableTransitionOnChange:!0,children:e.jsx("div",{className:"bg-background p-6 rounded-xl",children:e.jsx(t,{})})})}},p={render:()=>{const t=()=>{const{theme:r,setTheme:s,resolvedTheme:o}=x();return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{className:"text-sm text-text-secondary",children:["This provider stores the preference under ",e.jsx("code",{children:'"my-app-theme"'})," in localStorage. Changing the theme here won't affect other providers using the default key."]}),e.jsx("div",{className:"flex items-center gap-2",children:["light","dark","system"].map(n=>e.jsx(l,{size:"sm",variant:r===n?"solid":"ghost",onClick:()=>s(n),children:n},n))}),e.jsx("pre",{className:"bg-surface border border-border rounded-lg p-3 text-xs",children:`localStorage key: "my-app-theme"
current value: "${r}"
resolved: "${o}"`})]})};return e.jsx(u,{defaultTheme:"system",storageKey:"my-app-theme",children:e.jsx("div",{className:"bg-background p-6 rounded-xl",children:e.jsx(t,{})})})}};var S,w,C,P,L;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <ThemeProvider defaultTheme="system" storageKey="storybook-theme">
      <div className="bg-background p-6 rounded-xl min-h-[400px]">
        <ThemeDemo />
      </div>
    </ThemeProvider>
}`,...(C=(w=c.parameters)==null?void 0:w.docs)==null?void 0:C.source},description:{story:`Interactive theme switcher with live component preview.
Click the buttons to switch between Light, Dark, and System themes.`,...(L=(P=c.parameters)==null?void 0:P.docs)==null?void 0:L.description}}};var I,M,E,D,B;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div className="max-w-2xl space-y-6">
      <h3 className="text-lg font-semibold text-text-primary">Quick Setup</h3>

      <div>
        <h4 className="text-sm font-semibold text-text-primary mb-2">
          1. Wrap your app
        </h4>
        <pre className="bg-surface border border-border rounded-lg p-4 text-xs overflow-x-auto">
          {\`import { ThemeProvider } from '@fmlj/uikit'

export default function App({ children }) {
  return (
    <ThemeProvider defaultTheme="system">
      {children}
    </ThemeProvider>
  )
}\`}
        </pre>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-text-primary mb-2">
          2. Add the theme script (prevents flash)
        </h4>
        <pre className="bg-surface border border-border rounded-lg p-4 text-xs overflow-x-auto">
          {\`import { getThemeScript } from '@fmlj/uikit'

// In your HTML <head>:
<script dangerouslySetInnerHTML={{ __html: getThemeScript() }} />

// With a custom storage key:
<script dangerouslySetInnerHTML={{ __html: getThemeScript('my-app-theme') }} />\`}
        </pre>
        <p className="text-xs text-text-secondary mt-2">
          <code>getThemeScript()</code> generates inline JS that reads the stored
          preference and sets the <code>class</code> attribute before React hydrates,
          preventing a flash of wrong theme.
        </p>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-text-primary mb-2">
          3. Use the hook anywhere
        </h4>
        <pre className="bg-surface border border-border rounded-lg p-4 text-xs overflow-x-auto">
          {\`import { useTheme } from '@fmlj/uikit'

function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Currently: {resolvedTheme}
    </button>
  )
}\`}
        </pre>
      </div>

      <div className="bg-info/10 border border-info/30 rounded-lg p-4">
        <p className="text-sm text-text-primary">
          <strong>Props:</strong>{' '}
          <code>defaultTheme</code> (light/dark/system), {' '}
          <code>storageKey</code> (localStorage key), {' '}
          <code>disableTransitionOnChange</code> (skip transition on switch)
        </p>
      </div>
    </div>
}`,...(E=(M=m.parameters)==null?void 0:M.docs)==null?void 0:E.source},description:{story:"Minimal setup example — just wrap your app and go.",...(B=(D=m.parameters)==null?void 0:D.docs)==null?void 0:B.description}}};var _,A,K,R,H;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const Inner = () => {
      const {
        theme,
        setTheme,
        resolvedTheme
      } = useTheme();
      return <div className="space-y-4">
          <p className="text-sm text-text-secondary">
            Click the buttons below. Theme switches happen <strong>instantly</strong> with
            no CSS transition because <code>disableTransitionOnChange</code> is enabled.
          </p>
          <div className="flex items-center gap-2">
            <Button size="sm" variant={theme === 'light' ? 'solid' : 'outline'} onClick={() => setTheme('light')} iconLeft={<Sun className="h-4 w-4" />}>
              Light
            </Button>
            <Button size="sm" variant={theme === 'dark' ? 'solid' : 'outline'} onClick={() => setTheme('dark')} iconLeft={<Moon className="h-4 w-4" />}>
              Dark
            </Button>
            <Badge variant="soft" color="primary">
              {resolvedTheme}
            </Badge>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 rounded-lg bg-surface border border-border text-sm">
              Surface color
            </div>
            <div className="p-4 rounded-lg bg-primary text-primary-foreground text-sm">
              Primary color
            </div>
          </div>
        </div>;
    };
    return <ThemeProvider defaultTheme="light" storageKey="storybook-no-transition" disableTransitionOnChange>
        <div className="bg-background p-6 rounded-xl">
          <Inner />
        </div>
      </ThemeProvider>;
  }
}`,...(K=(A=h.parameters)==null?void 0:A.docs)==null?void 0:K.source},description:{story:`Disable CSS transitions during theme changes for an instant swap.
Useful when transitions cause flickering or layout shift.`,...(H=(R=h.parameters)==null?void 0:R.docs)==null?void 0:H.description}}};var $,z,O,W,q;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    const Inner = () => {
      const {
        theme,
        setTheme,
        resolvedTheme
      } = useTheme();
      return <div className="space-y-4">
          <p className="text-sm text-text-secondary">
            This provider stores the preference under <code>"my-app-theme"</code> in
            localStorage. Changing the theme here won't affect other providers
            using the default key.
          </p>
          <div className="flex items-center gap-2">
            {(['light', 'dark', 'system'] as const).map(t => <Button key={t} size="sm" variant={theme === t ? 'solid' : 'ghost'} onClick={() => setTheme(t)}>
                {t}
              </Button>)}
          </div>
          <pre className="bg-surface border border-border rounded-lg p-3 text-xs">
            {\`localStorage key: "my-app-theme"\\ncurrent value: "\${theme}"\\nresolved: "\${resolvedTheme}"\`}
          </pre>
        </div>;
    };
    return <ThemeProvider defaultTheme="system" storageKey="my-app-theme">
        <div className="bg-background p-6 rounded-xl">
          <Inner />
        </div>
      </ThemeProvider>;
  }
}`,...(O=(z=p.parameters)==null?void 0:z.docs)==null?void 0:O.source},description:{story:`Custom storage key — useful when multiple apps share the same domain.
Each app reads/writes its own localStorage key.`,...(q=(W=p.parameters)==null?void 0:W.docs)==null?void 0:q.description}}};const Te=["Default","Setup","DisableTransitions","CustomStorageKey"];export{p as CustomStorageKey,c as Default,h as DisableTransitions,m as Setup,Te as __namedExportsOrder,be as default};
