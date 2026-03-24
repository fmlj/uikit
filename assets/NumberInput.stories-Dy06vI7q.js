import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{R as $e,r as a}from"./index-ZH-6pyQh.js";import{g as nr,c as b,s as or,i as lr,a as Ae}from"./utils-_uLxnvdl.js";import{u as ur}from"./useControllable-BTRR6hV3.js";import{u as ir,R as dr}from"./useRipple-BuuTbn0W.js";import{S as sr}from"./index-BoArNvwV.js";import{P as cr}from"./plus-BOfjiqhk.js";import{M as pr}from"./minus-Bn6CyQhd.js";import"./_commonjsHelpers-CqkleIqs.js";import"./variants-C8qliDOr.js";import"./createLucideIcon-BXJdBs6C.js";const mr=Ae("w-full placeholder:text-text-secondary/50 rounded-md disabled:opacity-50 disabled:cursor-not-allowed read-only:bg-surface read-only:cursor-default outline-none text-text-primary transition-colors",{variants:{status:{default:"bg-background border border-border focus:border-primary",error:"bg-background border border-error focus:border-error",warning:"bg-background border border-warning focus:border-warning",info:"bg-background border border-info focus:border-info",success:"bg-background border border-success focus:border-success"},size:{xs:"h-(--input-height-xs) px-(--input-padding-x-xs) text-xs",sm:"h-(--input-height-sm) px-(--input-padding-x-sm) text-sm",md:"h-(--input-height-md) px-(--input-padding-x-md) text-base",lg:"h-(--input-height-lg) px-(--input-padding-x-lg) text-lg"},fullWidth:{true:"w-full",false:"max-w-full"},controlsPosition:{right:"",sides:""}},defaultVariants:{status:"default",size:"md",fullWidth:!0,controlsPosition:"right"}}),oe=Ae("flex items-center justify-center cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed",{variants:{size:{xs:"w-6 h-6",sm:"w-7 h-7",md:"w-8 h-8",lg:"w-10 h-10"},position:{right:"hover:bg-surface-hover",sides:"hover:bg-surface-hover"}},defaultVariants:{size:"md",position:"right"}}),le=$e.memo(({children:c,disabled:s,className:h,...u})=>{const{ripples:i,onPointerDown:f,onKeyDown:x,onAnimationEnd:g}=ir(!s);return r.jsxs("button",{className:b(h,"relative overflow-hidden"),onPointerDown:f,onKeyDown:x,disabled:s,...u,children:[c,r.jsx(dr,{ripples:i,onAnimationEnd:g})]})}),d=$e.memo(({value:c,defaultValue:s,onChange:h,min:u,max:i,step:f=1,precision:x,size:g="md",label:z,placeholder:Pe,disabled:v=!1,readOnly:V=!1,required:Qe=!1,controls:w=!0,controlsPosition:o="right",clampOnBlur:L=!0,className:K,classNames:e,error:T,warning:U,info:G,success:H,helperText:J,loading:y=!1,fullWidth:S=!0,ref:ze,id:Le,name:Ke})=>{const[l,O]=ur({value:c,defaultValue:s,onChange:h}),X=a.useId(),Y=Le||`number-input-${X}`,A=`number-input-helper-${X}`,{status:p,message:I}=a.useMemo(()=>nr({error:T,warning:U,info:G,success:H,helperText:J}),[T,U,G,H,J]),Te=a.useCallback(t=>t===void 0||isNaN(t)?"":x!==void 0?t.toFixed(x):String(t),[x]),Z=a.useCallback(t=>{if(t===""||t==="-")return;const n=parseFloat(t);return isNaN(n)?void 0:n},[]),C=a.useCallback(t=>{if(t===void 0)return;let n=t;return u!==void 0&&n<u&&(n=u),i!==void 0&&n>i&&(n=i),n},[u,i]),m=a.useCallback(t=>{O(t)},[O]),Ue=a.useCallback(t=>{const n=t.target.value;if(n===""||n==="-"){m(void 0);return}const j=Z(n);j!==void 0&&m(j)},[Z,m]),Ge=a.useCallback(()=>{if(L&&l!==void 0){const t=C(l);t!==l&&m(t)}},[L,l,C,m]),k=a.useCallback(t=>{const n=String(f),j=n.includes(".")?n.split(".")[1].length:0,ae=x!==void 0?Math.max(x,j):j;if(ae===0)return t;const ne=Math.pow(10,ae);return Math.round(t*ne)/ne},[f,x]),P=a.useCallback(()=>{const t=k((l??0)+f),n=C(t);m(n)},[l,f,C,m,k]),Q=a.useCallback(()=>{const t=k((l??0)-f),n=C(t);m(n)},[l,f,C,m,k]),He=a.useCallback(t=>{V||v||(t.key==="ArrowUp"?(t.preventDefault(),P()):t.key==="ArrowDown"&&(t.preventDefault(),Q()))},[V,v,P,Q]),Je=a.useMemo(()=>!!(v||V||y||i!==void 0&&l!==void 0&&l>=i),[v,V,y,i,l]),Oe=a.useMemo(()=>!!(v||V||y||u!==void 0&&l!==void 0&&l<=u),[v,V,y,u,l]),Xe=a.useMemo(()=>I?A:void 0,[I,A]),Ye=a.useMemo(()=>b("number-input_root","w-full flex flex-col relative",!S&&"inline-block",e==null?void 0:e.root),[S,e==null?void 0:e.root]),Ze=a.useMemo(()=>b("number-input_label","text-sm font-medium text-text-secondary mb-0.5",e==null?void 0:e.label),[e==null?void 0:e.label]),Ne=a.useMemo(()=>b("number-input_wrapper","relative flex items-center",y&&"opacity-50 cursor-not-allowed",o==="sides"&&"gap-1",e==null?void 0:e.wrapper),[y,o,e==null?void 0:e.wrapper]),er=a.useMemo(()=>b("number-input_input",mr({status:p,size:g,fullWidth:S,controlsPosition:o}),w&&o==="right"&&"pr-16",w&&o==="sides"&&"text-center",K,e==null?void 0:e.input),[p,g,S,o,w,K,e==null?void 0:e.input]),N={default:"border-border",error:"border-error",warning:"border-warning",info:"border-info",success:"border-success"},rr=a.useMemo(()=>b("number-input_controls","flex",o==="right"&&`absolute right-0 top-0 h-full border-l ${N[p]||"border-border"}`,o==="sides"&&"gap-1",e==null?void 0:e.controls),[o,e==null?void 0:e.controls,p]),tr=a.useMemo(()=>b("number-input_helper",or({status:p}),"mt-0.5",p==="error"?e==null?void 0:e.error:e==null?void 0:e.helper),[p,e==null?void 0:e.error,e==null?void 0:e.helper]),ee=lr[g],re=r.jsx(le,{type:"button",onClick:P,disabled:Je,"data-slot":"increment",className:b("number-input_increment h-full!",oe({size:g,position:o}),o==="right"&&"",e==null?void 0:e.increment),"aria-label":"Increment value",tabIndex:-1,children:r.jsx(cr,{className:ee,"aria-hidden":"true"})}),te=r.jsx(le,{type:"button",onClick:Q,disabled:Oe,"data-slot":"decrement",className:b("number-input_decrement h-full!",oe({size:g,position:o}),o==="right"&&`border-r ${N[p]||"border-border"}`,e==null?void 0:e.decrement),"aria-label":"Decrement value",tabIndex:-1,children:r.jsx(pr,{className:ee,"aria-hidden":"true"})}),ar=r.jsxs("div",{"data-slot":"wrapper",className:Ne,children:[w&&o==="sides"&&te,r.jsx("input",{ref:ze,id:Y,name:Ke,type:"text",inputMode:"decimal","data-slot":"input",className:er,value:Te(l),onChange:Ue,onBlur:Ge,onKeyDown:He,disabled:v,readOnly:V,placeholder:Pe,"aria-invalid":p==="error","aria-describedby":Xe,"aria-valuemin":u,"aria-valuemax":i,"aria-valuenow":l}),w&&o==="right"&&r.jsx("div",{"data-slot":"controls",className:rr,children:r.jsxs("div",{className:"flex flex-row h-full",children:[te,re]})}),w&&o==="sides"&&re,y&&r.jsx("div",{className:"absolute right-3 flex items-center",children:r.jsx(sr,{"aria-hidden":"true"})})]});return r.jsxs("div",{"data-slot":"root",className:Ye,children:[z&&r.jsxs("label",{htmlFor:Y,"data-slot":"label",className:Ze,children:[z,Qe&&r.jsx("span",{className:"text-error ml-1",children:"*"})]}),ar,I&&r.jsx("p",{id:A,"data-slot":"helper",className:tr,children:I})]})});d.displayName="NumberInput";d.__docgenInfo={description:"",methods:[],displayName:"NumberInput",props:{step:{defaultValue:{value:"1",computed:!1},required:!1},size:{defaultValue:{value:'"md"',computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},readOnly:{defaultValue:{value:"false",computed:!1},required:!1},required:{defaultValue:{value:"false",computed:!1},required:!1},controls:{defaultValue:{value:"true",computed:!1},required:!1},controlsPosition:{defaultValue:{value:'"right"',computed:!1},required:!1},clampOnBlur:{defaultValue:{value:"true",computed:!1},required:!1},loading:{defaultValue:{value:"false",computed:!1},required:!1},fullWidth:{defaultValue:{value:"true",computed:!1},required:!1}}};const Sr={title:"Data Entry/NumberInput",component:d,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg"]},controlsPosition:{control:"select",options:["right","sides"]}}},D={args:{placeholder:"Enter a number"}},M={args:{min:0,max:100,defaultValue:50,placeholder:"Value between 0 and 100"}},q={args:{step:.1,defaultValue:0,placeholder:"Step by 0.1",label:"Decimals"}},E={args:{controlsPosition:"sides",defaultValue:5,placeholder:"Controls on sides"}},_={args:{label:"Error Example",defaultValue:10,error:"Value is too low"}},B={name:"All Validation States (Border Consistency)",render:()=>r.jsxs("div",{className:"flex flex-col gap-4 w-72",children:[r.jsx(d,{label:"Default",defaultValue:10}),r.jsx(d,{label:"Error",defaultValue:10,error:"Value is too low"}),r.jsx(d,{label:"Warning",defaultValue:10,warning:"Value seems unusual"}),r.jsx(d,{label:"Success",defaultValue:10,success:"Value is valid"}),r.jsx(d,{label:"Info",defaultValue:10,info:"Enter a value between 0-100"}),r.jsx(d,{label:"Error (sides)",defaultValue:10,error:"Invalid",controlsPosition:"sides"})]})},W={args:{disabled:!0,defaultValue:42,placeholder:"Disabled input"}},F={render:()=>{const[c,s]=a.useState(10);return r.jsxs("div",{className:"flex flex-col gap-4 w-64",children:[r.jsx(d,{label:"Controlled Input",value:c,onChange:s,min:0,max:100}),r.jsxs("div",{className:"text-sm text-text-secondary",children:["Current value: ",r.jsx("span",{className:"font-mono font-bold",children:c??"undefined"})]}),r.jsxs("div",{className:"flex gap-2",children:[r.jsx("button",{onClick:()=>s(0),className:"px-3 py-1 text-sm bg-primary text-white rounded hover:bg-primary/90",children:"Set to 0"}),r.jsx("button",{onClick:()=>s(50),className:"px-3 py-1 text-sm bg-primary text-white rounded hover:bg-primary/90",children:"Set to 50"}),r.jsx("button",{onClick:()=>s(100),className:"px-3 py-1 text-sm bg-primary text-white rounded hover:bg-primary/90",children:"Set to 100"})]})]})}},R={args:{loading:!0,defaultValue:42,placeholder:"Loading..."}},$={render:()=>{const[c,s]=a.useState(19.99),[h,u]=a.useState(1),i=c&&h?c*h:0;return r.jsxs("div",{className:"flex flex-col gap-4 w-80 p-6 bg-surface rounded-lg border border-border",children:[r.jsx("h3",{className:"text-lg font-semibold text-text-primary",children:"Order Form"}),r.jsx(d,{label:"Price",value:c,onChange:s,min:0,step:.01,precision:2,placeholder:"0.00",required:!0}),r.jsx(d,{label:"Quantity",value:h,onChange:u,min:1,max:999,controlsPosition:"sides",required:!0}),r.jsx("div",{className:"pt-4 border-t border-border",children:r.jsxs("div",{className:"flex justify-between items-center",children:[r.jsx("span",{className:"text-sm font-medium text-text-secondary",children:"Total:"}),r.jsxs("span",{className:"text-xl font-bold text-text-primary",children:["$",i.toFixed(2)]})]})})]})}};var ue,ie,de;D.parameters={...D.parameters,docs:{...(ue=D.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter a number'
  }
}`,...(de=(ie=D.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var se,ce,pe;M.parameters={...M.parameters,docs:{...(se=M.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    defaultValue: 50,
    placeholder: 'Value between 0 and 100'
  }
}`,...(pe=(ce=M.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var me,be,fe;q.parameters={...q.parameters,docs:{...(me=q.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    step: 0.1,
    defaultValue: 0,
    placeholder: 'Step by 0.1',
    label: 'Decimals'
  }
}`,...(fe=(be=q.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var xe,he,ge;E.parameters={...E.parameters,docs:{...(xe=E.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    controlsPosition: 'sides',
    defaultValue: 5,
    placeholder: 'Controls on sides'
  }
}`,...(ge=(he=E.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};var ve,Ve,ye;_.parameters={..._.parameters,docs:{...(ve=_.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    label: 'Error Example',
    defaultValue: 10,
    error: 'Value is too low'
  }
}`,...(ye=(Ve=_.parameters)==null?void 0:Ve.docs)==null?void 0:ye.source}}};var we,Ce,je;B.parameters={...B.parameters,docs:{...(we=B.parameters)==null?void 0:we.docs,source:{originalSource:`{
  name: 'All Validation States (Border Consistency)',
  render: () => <div className="flex flex-col gap-4 w-72">
      <NumberInput label="Default" defaultValue={10} />
      <NumberInput label="Error" defaultValue={10} error="Value is too low" />
      <NumberInput label="Warning" defaultValue={10} warning="Value seems unusual" />
      <NumberInput label="Success" defaultValue={10} success="Value is valid" />
      <NumberInput label="Info" defaultValue={10} info="Enter a value between 0-100" />
      <NumberInput label="Error (sides)" defaultValue={10} error="Invalid" controlsPosition="sides" />
    </div>
}`,...(je=(Ce=B.parameters)==null?void 0:Ce.docs)==null?void 0:je.source}}};var Se,Ie,ke;W.parameters={...W.parameters,docs:{...(Se=W.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: 42,
    placeholder: 'Disabled input'
  }
}`,...(ke=(Ie=W.parameters)==null?void 0:Ie.docs)==null?void 0:ke.source}}};var De,Me,qe;F.parameters={...F.parameters,docs:{...(De=F.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<number | undefined>(10);
    return <div className="flex flex-col gap-4 w-64">
        <NumberInput label="Controlled Input" value={value} onChange={setValue} min={0} max={100} />
        <div className="text-sm text-text-secondary">
          Current value: <span className="font-mono font-bold">{value ?? 'undefined'}</span>
        </div>
        <div className="flex gap-2">
          <button onClick={() => setValue(0)} className="px-3 py-1 text-sm bg-primary text-white rounded hover:bg-primary/90">
            Set to 0
          </button>
          <button onClick={() => setValue(50)} className="px-3 py-1 text-sm bg-primary text-white rounded hover:bg-primary/90">
            Set to 50
          </button>
          <button onClick={() => setValue(100)} className="px-3 py-1 text-sm bg-primary text-white rounded hover:bg-primary/90">
            Set to 100
          </button>
        </div>
      </div>;
  }
}`,...(qe=(Me=F.parameters)==null?void 0:Me.docs)==null?void 0:qe.source}}};var Ee,_e,Be;R.parameters={...R.parameters,docs:{...(Ee=R.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {
    loading: true,
    defaultValue: 42,
    placeholder: 'Loading...'
  }
}`,...(Be=(_e=R.parameters)==null?void 0:_e.docs)==null?void 0:Be.source}}};var We,Fe,Re;$.parameters={...$.parameters,docs:{...(We=$.parameters)==null?void 0:We.docs,source:{originalSource:`{
  render: () => {
    const [price, setPrice] = useState<number | undefined>(19.99);
    const [quantity, setQuantity] = useState<number | undefined>(1);
    const total = price && quantity ? price * quantity : 0;
    return <div className="flex flex-col gap-4 w-80 p-6 bg-surface rounded-lg border border-border">
        <h3 className="text-lg font-semibold text-text-primary">Order Form</h3>

        <NumberInput label="Price" value={price} onChange={setPrice} min={0} step={0.01} precision={2} placeholder="0.00" required />

        <NumberInput label="Quantity" value={quantity} onChange={setQuantity} min={1} max={999} controlsPosition="sides" required />

        <div className="pt-4 border-t border-border">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-text-secondary">Total:</span>
            <span className="text-xl font-bold text-text-primary">
              \${total.toFixed(2)}
            </span>
          </div>
        </div>
      </div>;
  }
}`,...(Re=(Fe=$.parameters)==null?void 0:Fe.docs)==null?void 0:Re.source}}};const Ir=["Primary","WithMinMax","WithStep","ControlsOnSides","WithValidation","ValidationStates","Disabled","Controlled","WithLoading","Complex"];export{$ as Complex,F as Controlled,E as ControlsOnSides,W as Disabled,D as Primary,B as ValidationStates,R as WithLoading,M as WithMinMax,q as WithStep,_ as WithValidation,Ir as __namedExportsOrder,Sr as default};
