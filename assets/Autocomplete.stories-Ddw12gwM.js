import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{R as o,r as ze}from"./index-ZH-6pyQh.js";import{c as d,i as R,s as Ee,a as We}from"./utils-_uLxnvdl.js";import{u as Me}from"./useControllable-BTRR6hV3.js";import{P as Ne,c as Ie,b as Te}from"./index-M94l2otH.js";import{c as _e}from"./variants-C8qliDOr.js";import{L as Re}from"./loader-circle-C_rNOviD.js";import{X as Ue}from"./x-ByohdK2B.js";import{C as Be}from"./chevron-down-D1qmGosc.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-lJNWladF.js";import"./index-C6BiGwLV.js";import"./index-Bo-loign.js";import"./index-BP-xEy0R.js";import"./index-DVyBTwwr.js";import"./Combination-C3reJy6-.js";import"./index-BH7Jj7fg.js";import"./createLucideIcon-BXJdBs6C.js";const Pe=We("w-full flex items-center rounded-md bg-background text-text-primary border outline-none transition-colors",{variants:{status:{default:"border-border focus-within:border-slot hover:border-slot-50",primary:"border-slot",secondary:"border-slot",accent:"border-slot",success:"border-slot",error:"border-slot",warning:"border-slot",info:"border-slot"},size:{xs:"h-(--input-height-xs) px-2 text-xs gap-1.5",sm:"h-(--input-height-sm) px-2.5 text-sm gap-2",md:"h-(--input-height-md) px-3 text-base gap-2",lg:"h-(--input-height-lg) px-3.5 text-lg gap-2.5"},fullWidth:{true:"w-full",false:""},disabled:{true:"opacity-50 cursor-not-allowed",false:""}},defaultVariants:{status:"default",size:"md",fullWidth:!0,disabled:!1}});function He(r){return typeof r=="string"?{label:r,value:r}:r}const Ke=(r,n)=>n.label.toLowerCase().includes(r.toLowerCase()),l=o.memo(({value:r,defaultValue:n="",onChange:m,onSelect:O,options:U,placeholder:je,label:z,helperText:B,error:y,size:w="md",status:Se,disabled:f=!1,loading:E=!1,clearable:P=!1,filter:H=Ke,limit:W=10,emptyMessage:Ae="No results",fullWidth:K=!0,className:Ve,classNames:s})=>{const[h,De]=Me({value:r,defaultValue:n,onChange:m}),[c,$]=o.useState(!1),[i,x]=o.useState(-1),b=o.useRef(null),M=o.useRef(null),G=o.useId(),N=o.useRef(!1),I=y?"error":Se||"default",T=o.useMemo(()=>U.map(He),[U]),p=o.useMemo(()=>h?T.filter(e=>H(h,e)).slice(0,W):T.slice(0,W),[h,T,H,W]);o.useEffect(()=>{x(-1)},[p.length]);const _=e=>{De(e)},g=()=>{f||$(!0)},v=()=>{$(!1),x(-1)},Fe=e=>{_(e.target.value),g()},J=e=>{e.disabled||(_(e.label),O==null||O(e),v(),requestAnimationFrame(()=>{var a;return(a=b.current)==null?void 0:a.focus()}))},qe=()=>{var e;_(""),(e=b.current)==null||e.focus()},Le=e=>{if(e.key==="ArrowDown"){if(e.preventDefault(),!c){g();return}x(a=>Math.min(a+1,p.length-1))}else if(e.key==="ArrowUp"){if(e.preventDefault(),!c){g();return}x(a=>Math.max(a-1,0))}else e.key==="Enter"&&i>=0&&c&&p[i]?(e.preventDefault(),J(p[i])):(e.key==="Escape"||e.key==="Tab")&&v()},ke=()=>{g()},Oe=()=>{setTimeout(()=>{N.current||v(),N.current=!1},150)};return o.useEffect(()=>{var e;if(i>=0&&M.current){const a=M.current.children[i];(e=a==null?void 0:a.scrollIntoView)==null||e.call(a,{block:"nearest"})}},[i]),t.jsxs("div",{"data-slot":"root",className:d("autocomplete_root","flex flex-col gap-1.5",_e[I==="default"?"primary":I],K?"w-full":"inline-flex",s==null?void 0:s.root,Ve),children:[z&&t.jsx("label",{id:G,className:"text-sm font-medium text-text-primary",children:z}),t.jsxs(Ne,{open:c&&!f,onOpenChange:e=>{e||v()},children:[t.jsx(Ie,{asChild:!0,children:t.jsxs("div",{className:Pe({status:I,size:w,fullWidth:K,disabled:f}),onClick:()=>{var e;c||g(),(e=b.current)==null||e.focus()},children:[t.jsx("input",{ref:b,type:"text",role:"combobox","aria-expanded":c,"aria-autocomplete":"list","aria-labelledby":z?G:void 0,className:"flex-1 min-w-0 bg-transparent outline-none placeholder:text-text-secondary/50",placeholder:je,value:h,onChange:Fe,onFocus:ke,onBlur:Oe,onKeyDown:Le,disabled:f}),E&&t.jsx(Re,{className:d("animate-spin text-text-secondary",R[w])}),P&&h&&!f&&!E&&t.jsx("button",{type:"button",onMouseDown:e=>e.preventDefault(),onClick:e=>{e.stopPropagation(),qe()},className:"text-text-secondary hover:text-text-primary transition-colors cursor-pointer",tabIndex:-1,"aria-label":"Clear",children:t.jsx(Ue,{className:R[w]})}),!E&&!P&&t.jsx(Be,{className:d("text-text-secondary transition-transform duration-200",R[w],c&&"rotate-180")})]})}),t.jsx(Te,{className:d("autocomplete_dropdown","p-1 w-[var(--radix-popover-trigger-width)] max-h-60 overflow-y-auto",s==null?void 0:s.dropdown),align:"start",onOpenAutoFocus:e=>e.preventDefault(),onCloseAutoFocus:e=>e.preventDefault(),onInteractOutside:e=>{var C;const a=e.target;(C=b.current)!=null&&C.contains(a)&&e.preventDefault()},children:t.jsx("div",{ref:M,role:"listbox",children:p.length===0?t.jsx("div",{className:d("autocomplete_empty","px-3 py-2 text-sm text-text-secondary text-center",s==null?void 0:s.empty),children:Ae}):p.map((e,a)=>t.jsx("div",{role:"option","aria-selected":a===i,"aria-disabled":e.disabled,onMouseDown:C=>{C.preventDefault(),N.current=!0},onClick:()=>J(e),onMouseEnter:()=>x(a),className:d("autocomplete_option","px-3 py-2 text-sm rounded-md cursor-pointer transition-colors",a===i&&"bg-surface",e.disabled&&"opacity-50 cursor-not-allowed",!e.disabled&&"hover:bg-surface",s==null?void 0:s.option),children:e.label},e.value))})})]}),(y||B)&&t.jsx("p",{className:d("text-xs",y?Ee({status:"error"}):"text-text-secondary"),children:y||B})]})});l.displayName="Autocomplete";l.__docgenInfo={description:"",methods:[],displayName:"Autocomplete",props:{defaultValue:{defaultValue:{value:"''",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},loading:{defaultValue:{value:"false",computed:!1},required:!1},clearable:{defaultValue:{value:"false",computed:!1},required:!1},filter:{defaultValue:{value:`(query: string, option: AutocompleteOption) =>
option.label.toLowerCase().includes(query.toLowerCase())`,computed:!1},required:!1},limit:{defaultValue:{value:"10",computed:!1},required:!1},emptyMessage:{defaultValue:{value:"'No results'",computed:!1},required:!1},fullWidth:{defaultValue:{value:"true",computed:!1},required:!1}}};const dt={title:"Data Entry/Autocomplete",component:l,tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg"]}}},u=["Apple","Banana","Cherry","Date","Elderberry","Fig","Grape","Honeydew"],j={args:{options:u,placeholder:"Search fruits...",label:"Fruit"}},S={render:()=>{const[r,n]=ze.useState("");return t.jsxs("div",{className:"space-y-2 max-w-sm",children:[t.jsx(l,{options:u,value:r,onChange:n,label:"Fruit",placeholder:"Type to search...",clearable:!0}),t.jsxs("p",{className:"text-xs text-text-secondary",children:['Value: "',r,'"']})]})}},A={render:()=>{const r=[{label:"United States",value:"us"},{label:"United Kingdom",value:"uk"},{label:"Germany",value:"de"},{label:"France",value:"fr"},{label:"Japan",value:"jp"},{label:"Australia",value:"au"},{label:"Canada",value:"ca"},{label:"Brazil",value:"br"}];return t.jsx(l,{options:r,label:"Country",placeholder:"Search countries...",clearable:!0,className:"max-w-sm"})}},V={render:()=>t.jsxs("div",{className:"space-y-4 max-w-sm",children:[t.jsx(l,{options:u,label:"With helper text",helperText:"Start typing to see suggestions",placeholder:"Search..."}),t.jsx(l,{options:u,label:"With error",error:"This field is required",placeholder:"Search..."})]})},D={render:()=>{const r=(n,m)=>m.label.toLowerCase().startsWith(n.toLowerCase());return t.jsx(l,{options:u,label:"Starts-with filter",placeholder:"Type to filter...",filter:r,className:"max-w-sm"})}},F={render:()=>t.jsx("div",{className:"space-y-4 max-w-sm",children:["xs","sm","md","lg"].map(r=>t.jsx(l,{options:u,size:r,placeholder:`Size: ${r}`,label:r.toUpperCase()},r))})},q={args:{options:u,placeholder:"Loading...",label:"Fruit",loading:!0}},L={args:{options:u,placeholder:"Disabled",label:"Fruit",disabled:!0,defaultValue:"Apple"}},k={render:()=>{const r=Array.from({length:200},(n,m)=>`City ${m+1}`);return t.jsx(l,{options:r,label:"City",placeholder:"Search 200 cities...",limit:15,clearable:!0,className:"max-w-sm"})}};var X,Q,Y;j.parameters={...j.parameters,docs:{...(X=j.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    options: fruits,
    placeholder: 'Search fruits...',
    label: 'Fruit'
  }
}`,...(Y=(Q=j.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,ee,te;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <div className="space-y-2 max-w-sm">
        <Autocomplete options={fruits} value={value} onChange={setValue} label="Fruit" placeholder="Type to search..." clearable />
        <p className="text-xs text-text-secondary">Value: "{value}"</p>
      </div>;
  }
}`,...(te=(ee=S.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var re,ae,se;A.parameters={...A.parameters,docs:{...(re=A.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => {
    const countries = [{
      label: 'United States',
      value: 'us'
    }, {
      label: 'United Kingdom',
      value: 'uk'
    }, {
      label: 'Germany',
      value: 'de'
    }, {
      label: 'France',
      value: 'fr'
    }, {
      label: 'Japan',
      value: 'jp'
    }, {
      label: 'Australia',
      value: 'au'
    }, {
      label: 'Canada',
      value: 'ca'
    }, {
      label: 'Brazil',
      value: 'br'
    }];
    return <Autocomplete options={countries} label="Country" placeholder="Search countries..." clearable className="max-w-sm" />;
  }
}`,...(se=(ae=A.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var oe,le,ne;V.parameters={...V.parameters,docs:{...(oe=V.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 max-w-sm">
      <Autocomplete options={fruits} label="With helper text" helperText="Start typing to see suggestions" placeholder="Search..." />
      <Autocomplete options={fruits} label="With error" error="This field is required" placeholder="Search..." />
    </div>
}`,...(ne=(le=V.parameters)==null?void 0:le.docs)==null?void 0:ne.source}}};var ie,ue,ce;D.parameters={...D.parameters,docs:{...(ie=D.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => {
    const filter = (query: string, option: {
      label: string;
      value: string;
    }) => option.label.toLowerCase().startsWith(query.toLowerCase());
    return <Autocomplete options={fruits} label="Starts-with filter" placeholder="Type to filter..." filter={filter} className="max-w-sm" />;
  }
}`,...(ce=(ue=D.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};var de,pe,me;F.parameters={...F.parameters,docs:{...(de=F.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 max-w-sm">
      {(['xs', 'sm', 'md', 'lg'] as const).map(size => <Autocomplete key={size} options={fruits} size={size} placeholder={\`Size: \${size}\`} label={size.toUpperCase()} />)}
    </div>
}`,...(me=(pe=F.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var fe,he,xe;q.parameters={...q.parameters,docs:{...(fe=q.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    options: fruits,
    placeholder: 'Loading...',
    label: 'Fruit',
    loading: true
  }
}`,...(xe=(he=q.parameters)==null?void 0:he.docs)==null?void 0:xe.source}}};var be,ge,ve;L.parameters={...L.parameters,docs:{...(be=L.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    options: fruits,
    placeholder: 'Disabled',
    label: 'Fruit',
    disabled: true,
    defaultValue: 'Apple'
  }
}`,...(ve=(ge=L.parameters)==null?void 0:ge.docs)==null?void 0:ve.source}}};var ye,we,Ce;k.parameters={...k.parameters,docs:{...(ye=k.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => {
    const cities = Array.from({
      length: 200
    }, (_, i) => \`City \${i + 1}\`);
    return <Autocomplete options={cities} label="City" placeholder="Search 200 cities..." limit={15} clearable className="max-w-sm" />;
  }
}`,...(Ce=(we=k.parameters)==null?void 0:we.docs)==null?void 0:Ce.source}}};const pt=["Default","Controlled","WithObjectOptions","WithHelperAndError","CustomFilter","Sizes","Loading","Disabled","ManyOptions"];export{S as Controlled,D as CustomFilter,j as Default,L as Disabled,q as Loading,k as ManyOptions,F as Sizes,V as WithHelperAndError,A as WithObjectOptions,pt as __namedExportsOrder,dt as default};
