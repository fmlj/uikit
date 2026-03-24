import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as ee,r as i}from"./index-ZH-6pyQh.js";import{c as f,a as Be}from"./utils-_uLxnvdl.js";import{c as Ge}from"./variants-C8qliDOr.js";import"./_commonjsHelpers-CqkleIqs.js";const He=Be("relative rounded-full",{variants:{size:{xs:"",sm:"",md:"",lg:""},orientation:{horizontal:"",vertical:""}},compoundVariants:[{orientation:"horizontal",size:"xs",class:"h-1"},{orientation:"horizontal",size:"sm",class:"h-2"},{orientation:"horizontal",size:"md",class:"h-3"},{orientation:"horizontal",size:"lg",class:"h-4"},{orientation:"vertical",size:"xs",class:"w-1"},{orientation:"vertical",size:"sm",class:"w-2"},{orientation:"vertical",size:"md",class:"w-3"},{orientation:"vertical",size:"lg",class:"w-4"}],defaultVariants:{size:"md",orientation:"horizontal"}}),We=Be("absolute rounded-full border-2 bg-background cursor-pointer hover:scale-110 active:scale-100 transition-transform duration-150",{variants:{size:{xs:"w-3 h-3",sm:"w-3.5 h-3.5",md:"w-4 h-4",lg:"w-6 h-6"}},defaultVariants:{size:"md"}}),Xe=t=>t==="soft"?"bg-slot-10":t==="solid"?"bg-slot-20":"bg-slot-10",te=t=>t==="default"?"bg-slot-20 border-slot":t==="solid"?"bg-slot":"bg-slot-50",Ye=t=>t==="soft"?"border-slot-50":"border-slot",p=ee.memo(({value:t,defaultValue:a=50,min:c=0,max:d=100,step:l=1,color:y="primary",size:v="md",variant:V="default",orientation:U="horizontal",onChange:u,disabled:x=!1,className:Ee,classNames:s,footer:k=!1,range:g=!1})=>{const b=U==="vertical",[_e,C]=i.useState(a),[$e,X]=i.useState(null),G=i.useRef(null),R=i.useRef(!1),Y=i.useRef(0),S=t??_e,z=Array.isArray(S)?S:[S],A=i.useRef(S);A.current=S;const M=r=>(r-c)/(d-c)*100,P=i.useCallback((r,n)=>{if(!G.current)return c;const o=G.current.getBoundingClientRect(),m=b?1-(n-o.top)/o.height:(r-o.left)/o.width,h=c+m*(d-c),w=Math.round(h/l)*l;return Math.max(c,Math.min(d,w))},[b,c,d,l]),O=i.useCallback(r=>{const n=A.current;if(g&&Array.isArray(n)){const o=[...n];o[Y.current]=r,o.sort((m,h)=>m-h),t||C(o),u==null||u(o)}else t||C(r),u==null||u(r)},[g,t,u]),H=i.useCallback(r=>{!R.current||x||O(P(r.clientX,r.clientY))},[x,O,P]),[J,Q]=i.useState(!1),qe=i.useCallback(r=>{if(x)return;const n=parseInt(r.currentTarget.dataset.index,10);R.current=!0,Q(!0),Y.current=n,X(n),r.target.setPointerCapture&&r.target.setPointerCapture(r.pointerId),r.preventDefault()},[x]),W=i.useCallback(()=>{R.current=!1,Q(!1),X(null)},[]);ee.useEffect(()=>{if(J)return document.addEventListener("pointermove",H),document.addEventListener("pointerup",W),()=>{document.removeEventListener("pointermove",H),document.removeEventListener("pointerup",W)}},[J,H,W]);const Ie=i.useCallback(r=>{if(x||R.current)return;const n=P(r.clientX,r.clientY),o=A.current;if(g&&Array.isArray(o)){let m=0,h=Math.abs(n-(o[0]||0));for(let j=1;j<o.length;j++){const N=Math.abs(n-(o[j]||0));N<h&&(h=N,m=j)}const w=[...o];w[m]=n,w.sort((j,N)=>j-N),t||C(w),u==null||u(w)}else t||C(n),u==null||u(n)},[x,P,g,t,u]),Le=i.useCallback(r=>{if(x)return;const n=parseInt(r.currentTarget.dataset.index,10),o=Number(r.currentTarget.getAttribute("aria-valuenow"));let m=o;const h=b?["ArrowUp","ArrowRight"]:["ArrowRight","ArrowUp"],w=b?["ArrowDown","ArrowLeft"]:["ArrowLeft","ArrowDown"];if(h.includes(r.key))m=Math.min(d,o+l);else if(w.includes(r.key))m=Math.max(c,o-l);else if(r.key==="Home")m=c;else if(r.key==="End")m=d;else return;r.preventDefault();const j=A.current;if(g&&Array.isArray(j)){const N=[...j];N[n]=m,N.sort((Ke,Ue)=>Ke-Ue),t||C(N),u==null||u(N)}else t||C(m),u==null||u(m)},[x,b,c,d,l,g,t,u]),Z=(r,n)=>b?{bottom:`${r}%`,height:`${n-r}%`}:{left:`${r}%`,width:`${n-r}%`},Fe=r=>b?{bottom:`${r}%`}:{left:`${r}%`};return e.jsxs("div",{"data-slot":"root",className:f(b?"h-full inline-flex flex-col items-center":"w-full",Ge[y],"slider_root",s==null?void 0:s.root,Ee),children:[b&&k===!0&&e.jsx("span",{className:f("text-sm text-text-secondary mb-1","slider_label",s==null?void 0:s.label),children:d}),e.jsxs("div",{ref:G,onClick:Ie,className:f(He({size:v,orientation:U}),Xe(V),"relative cursor-pointer touch-none",b&&"h-full","slider_track",s==null?void 0:s.track,x&&"opacity-50 cursor-not-allowed"),children:[g&&z.length>1?z.slice(0,-1).map((r,n)=>{const o=M(r),m=M(z[n+1]);return e.jsx("div",{className:f("absolute rounded-full",b?"w-full":"h-full",te(V),"slider_range",s==null?void 0:s.range),style:Z(o,m)},n)}):e.jsx("div",{className:f("absolute rounded-full",b?"w-full":"h-full",te(V),"slider_range",s==null?void 0:s.range),style:Z(0,M(z[0]||0))}),z.map((r,n)=>{const o=M(r),m=o<=0,h=o>=100;return e.jsx("div",{role:"slider",tabIndex:x?-1:0,"aria-valuemin":c,"aria-valuemax":d,"aria-valuenow":r,"aria-disabled":x,"aria-orientation":U,"aria-label":g?`Slider thumb ${n+1}`:"Slider",className:f(We({size:v}),Ye(V),"-translate-x-1/2",x&&"cursor-not-allowed","focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary",b?f("left-1/2 translate-y-1/2",m&&"translate-y-0",h&&"translate-y-full"):f("top-1/2 -translate-y-1/2",m&&"translate-x-0",h&&"-translate-x-full"),"slider_thumb",s==null?void 0:s.thumb),"data-index":n,style:Fe(o),onPointerDown:qe,onKeyDown:Le,children:e.jsx("div",{className:f("absolute bg-text-primary text-background text-xs px-2 py-1 rounded whitespace-nowrap",$e===n?"opacity-100":"opacity-0 pointer-events-none",b?"left-full ml-2 top-1/2 -translate-y-1/2":"-top-8 left-1/2 -translate-x-1/2"),children:r})},n)})]}),b&&k===!0&&e.jsx("span",{className:f("text-sm text-text-secondary mt-1","slider_label",s==null?void 0:s.label),children:c}),!b&&k===!0&&e.jsxs("div",{className:"flex justify-between mt-1 text-sm text-text-secondary",children:[e.jsx("span",{className:f("slider_label",s==null?void 0:s.label),children:c}),e.jsx("span",{className:f("font-medium text-text-primary","slider_value",s==null?void 0:s.value),children:g&&Array.isArray(S)?S.join(" - "):S}),e.jsx("span",{className:f("slider_label",s==null?void 0:s.label),children:d})]}),k&&typeof k!="boolean"&&k]})});p.displayName="Slider";p.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{defaultValue:{defaultValue:{value:"50",computed:!1},required:!1},min:{defaultValue:{value:"0",computed:!1},required:!1},max:{defaultValue:{value:"100",computed:!1},required:!1},step:{defaultValue:{value:"1",computed:!1},required:!1},color:{defaultValue:{value:"'primary'",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1},variant:{defaultValue:{value:"'default'",computed:!1},required:!1},orientation:{defaultValue:{value:"'horizontal'",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},footer:{defaultValue:{value:"false",computed:!1},required:!1},range:{defaultValue:{value:"false",computed:!1},required:!1}}};const tt={title:"Data Entry/Slider",component:p,tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100,step:1},description:"Current slider value"},defaultValue:{control:{type:"range",min:0,max:100,step:1},description:"Default slider value (uncontrolled)"},min:{control:{type:"number"},description:"Minimum value"},max:{control:{type:"number"},description:"Maximum value"},step:{control:{type:"number"},description:"Step increment"},color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"],description:"Theme color"},size:{control:"select",options:["xs","sm","md","lg"],description:"Slider size"},variant:{control:"select",options:["default","solid","soft"],description:"Visual style variant"},disabled:{control:"boolean",description:"Disabled state"},footer:{control:"boolean",description:"Show min/max footer"},range:{control:"boolean",description:"Enable range mode (two thumbs)"},orientation:{control:"select",options:["horizontal","vertical"],description:"Slider orientation"}}},D={args:{defaultValue:50,color:"primary",size:"md",footer:!0}},T={render:()=>{const[t,a]=i.useState(50);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("label",{className:"text-sm font-medium",children:"Adjust value"}),e.jsx("span",{className:"text-sm font-semibold text-primary",children:t})]}),e.jsx(p,{value:t,onChange:a,footer:!0}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>a(0),className:"px-3 py-1 bg-surface border border-border rounded text-sm",children:"Min"}),e.jsx("button",{onClick:()=>a(50),className:"px-3 py-1 bg-surface border border-border rounded text-sm",children:"50"}),e.jsx("button",{onClick:()=>a(100),className:"px-3 py-1 bg-surface border border-border rounded text-sm",children:"Max"})]})]})}},B={render:()=>{const[t,a]=i.useState(25);return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{children:[e.jsxs("label",{className:"text-sm font-medium mb-2 block",children:["Temperature: ",t,"°C"]}),e.jsx(p,{value:t,onChange:a,min:-10,max:50,footer:!0,color:"warning"})]})})}},E={render:()=>{const[t,a]=i.useState([25,75]);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("label",{className:"text-sm font-medium",children:"Select range"}),e.jsxs("span",{className:"text-sm font-semibold text-primary",children:[t[0]," - ",t[1]]})]}),e.jsx(p,{value:t,onChange:a,range:!0,footer:!0})]})}},_={render:()=>e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{children:[e.jsx("label",{className:"text-sm font-medium mb-2 block",children:"Disabled slider"}),e.jsx(p,{defaultValue:50,disabled:!0,footer:!0})]})})},$={render:()=>{const[t,a]=i.useState(70);return e.jsxs("div",{className:"max-w-md p-6 border border-border rounded-lg space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("label",{className:"text-sm font-medium",children:"Volume"}),e.jsxs("span",{className:"text-sm font-semibold",children:[t,"%"]})]}),e.jsx(p,{value:t,onChange:a,color:"primary",size:"lg"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>a(Math.max(0,t-10)),className:"flex-1 px-3 py-2 bg-surface border border-border rounded text-sm",children:"-10"}),e.jsx("button",{onClick:()=>a(t===0?70:0),className:"flex-1 px-3 py-2 bg-surface border border-border rounded text-sm",children:t===0?"Unmute":"Mute"}),e.jsx("button",{onClick:()=>a(Math.min(100,t+10)),className:"flex-1 px-3 py-2 bg-surface border border-border rounded text-sm",children:"+10"})]})]})}},q={render:()=>{const[t,a]=i.useState([100,500]),c=[{name:"Product A",price:50},{name:"Product B",price:150},{name:"Product C",price:300},{name:"Product D",price:450},{name:"Product E",price:600}],d=c.filter(l=>l.price>=t[0]&&l.price<=t[1]);return e.jsxs("div",{className:"max-w-md space-y-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-sm font-semibold",children:"Filter by Price"}),e.jsx(p,{value:t,onChange:a,min:0,max:1e3,step:50,range:!0,footer:!0,color:"success"})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between text-sm",children:[e.jsx("span",{className:"font-medium",children:"Products"}),e.jsxs("span",{className:"text-text-secondary",children:[d.length," of ",c.length]})]}),e.jsx("div",{className:"space-y-2",children:d.map(l=>e.jsxs("div",{className:"flex items-center justify-between p-3 bg-surface rounded border border-border",children:[e.jsx("span",{className:"text-sm",children:l.name}),e.jsxs("span",{className:"text-sm font-medium",children:["$",l.price]})]},l.name))})]})]})}},I={render:()=>{const[t,a]=i.useState(70),[c,d]=i.useState(50),[l,y]=i.useState(50),[v,V]=i.useState(50);return e.jsxs("div",{className:"max-w-md p-6 border border-border rounded-lg space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Audio Settings"}),e.jsxs("div",{children:[e.jsxs("label",{className:"text-sm font-medium mb-2 block",children:["Volume: ",t,"%"]}),e.jsx(p,{value:t,onChange:a,color:"primary"})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"text-sm font-medium mb-2 block",children:["Bass: ",c,"%"]}),e.jsx(p,{value:c,onChange:d,color:"success"})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"text-sm font-medium mb-2 block",children:["Treble: ",l,"%"]}),e.jsx(p,{value:l,onChange:y,color:"info"})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"text-sm font-medium mb-2 block",children:["Balance: ",v<50?`L${50-v}`:v>50?`R${v-50}`:"Center"]}),e.jsx(p,{value:v,onChange:V,color:"warning"})]}),e.jsx("button",{onClick:()=>{a(70),d(50),y(50),V(50)},className:"w-full px-4 py-2 bg-surface border border-border rounded text-sm",children:"Reset to Defaults"})]})}},L={render:()=>{const[t,a]=i.useState(50);return e.jsxs("div",{className:"h-64 flex items-center gap-8",children:[e.jsx(p,{value:t,onChange:a,orientation:"vertical",footer:!0,color:"primary"}),e.jsx(p,{defaultValue:30,orientation:"vertical",footer:!0,color:"success"}),e.jsx(p,{defaultValue:70,orientation:"vertical",footer:!0,color:"info"}),e.jsx(p,{defaultValue:50,orientation:"vertical",footer:!0,color:"warning",disabled:!0})]})}},F={render:()=>{const[t,a]=i.useState([70,50,60,80,45]),c=["Vocals","Guitar","Bass","Drums","Keys"];return e.jsxs("div",{className:"max-w-md p-6 border border-border rounded-lg space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Audio Mixer"}),e.jsx("div",{className:"h-48 flex items-end gap-6",children:t.map((d,l)=>e.jsxs("div",{className:"flex flex-col items-center gap-2 h-full",children:[e.jsx(p,{value:d,onChange:y=>{const v=[...t];v[l]=y,a(v)},orientation:"vertical",color:"primary",size:"sm"}),e.jsx("span",{className:"text-xs text-text-secondary",children:c[l]}),e.jsxs("span",{className:"text-xs font-medium",children:[d,"%"]})]},c[l]))}),e.jsx("button",{onClick:()=>a([70,50,60,80,45]),className:"w-full px-4 py-2 bg-surface border border-border rounded text-sm",children:"Reset"})]})}},K={render:()=>{const t=["default","primary","secondary","accent","success","error","warning","info"],a=["xs","sm","md","lg"],c=["default","solid","soft"];return e.jsx("div",{className:"space-y-8",children:c.map(d=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("h3",{className:"text-sm font-semibold capitalize",children:[d," Variant"]}),e.jsxs("table",{className:"border-collapse w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-2 text-left text-sm text-gray-500",children:"Color \\ Size"}),a.map(l=>e.jsx("th",{className:"p-2 text-center text-sm text-gray-500",children:l},l))]})}),e.jsx("tbody",{children:t.map(l=>e.jsxs("tr",{children:[e.jsx("td",{className:"p-2 text-sm font-medium",children:l}),a.map(y=>e.jsx("td",{className:"p-2",children:e.jsx(p,{color:l,size:y,variant:d,defaultValue:50,className:"w-40"})},y))]},l))})]})]},d))})}};var re,se,ae;D.parameters={...D.parameters,docs:{...(re=D.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    defaultValue: 50,
    color: 'primary',
    size: 'md',
    footer: true
  }
}`,...(ae=(se=D.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var le,ne,oe;T.parameters={...T.parameters,docs:{...(le=T.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(50);
    return <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">Adjust value</label>
          <span className="text-sm font-semibold text-primary">{value}</span>
        </div>
        <Slider value={value} onChange={setValue} footer />
        <div className="flex gap-2">
          <button onClick={() => setValue(0)} className="px-3 py-1 bg-surface border border-border rounded text-sm">
            Min
          </button>
          <button onClick={() => setValue(50)} className="px-3 py-1 bg-surface border border-border rounded text-sm">
            50
          </button>
          <button onClick={() => setValue(100)} className="px-3 py-1 bg-surface border border-border rounded text-sm">
            Max
          </button>
        </div>
      </div>;
  }
}`,...(oe=(ne=T.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var ie,ce,de;B.parameters={...B.parameters,docs:{...(ie=B.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(25);
    return <div className="space-y-6">
        <div>
          <label className="text-sm font-medium mb-2 block">
            Temperature: {value}°C
          </label>
          <Slider value={value} onChange={setValue} min={-10} max={50} footer color="warning" />
        </div>
      </div>;
  }
}`,...(de=(ce=B.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ue,me,pe;E.parameters={...E.parameters,docs:{...(ue=E.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => {
    const [range, setRange] = useState<number[]>([25, 75]);
    return <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">Select range</label>
          <span className="text-sm font-semibold text-primary">
            {range[0]} - {range[1]}
          </span>
        </div>
        <Slider value={range} onChange={setRange} range footer />
      </div>;
  }
}`,...(pe=(me=E.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var be,fe,xe;_.parameters={..._.parameters,docs:{...(be=_.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <label className="text-sm font-medium mb-2 block">Disabled slider</label>
        <Slider defaultValue={50} disabled footer />
      </div>
    </div>
}`,...(xe=(fe=_.parameters)==null?void 0:fe.docs)==null?void 0:xe.source}}};var ve,he,ye;$.parameters={...$.parameters,docs:{...(ve=$.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: () => {
    const [volume, setVolume] = useState(70);
    return <div className="max-w-md p-6 border border-border rounded-lg space-y-4">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">Volume</label>
          <span className="text-sm font-semibold">{volume}%</span>
        </div>
        <Slider value={volume} onChange={setVolume} color="primary" size="lg" />
        <div className="flex gap-2">
          <button onClick={() => setVolume(Math.max(0, volume - 10))} className="flex-1 px-3 py-2 bg-surface border border-border rounded text-sm">
            -10
          </button>
          <button onClick={() => setVolume(volume === 0 ? 70 : 0)} className="flex-1 px-3 py-2 bg-surface border border-border rounded text-sm">
            {volume === 0 ? 'Unmute' : 'Mute'}
          </button>
          <button onClick={() => setVolume(Math.min(100, volume + 10))} className="flex-1 px-3 py-2 bg-surface border border-border rounded text-sm">
            +10
          </button>
        </div>
      </div>;
  }
}`,...(ye=(he=$.parameters)==null?void 0:he.docs)==null?void 0:ye.source}}};var ge,je,Ne;q.parameters={...q.parameters,docs:{...(ge=q.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => {
    const [priceRange, setPriceRange] = useState<number[]>([100, 500]);
    const products = [{
      name: 'Product A',
      price: 50
    }, {
      name: 'Product B',
      price: 150
    }, {
      name: 'Product C',
      price: 300
    }, {
      name: 'Product D',
      price: 450
    }, {
      name: 'Product E',
      price: 600
    }];
    const filteredProducts = products.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);
    return <div className="max-w-md space-y-6">
        <div className="space-y-4">
          <h3 className="text-sm font-semibold">Filter by Price</h3>
          <Slider value={priceRange} onChange={setPriceRange} min={0} max={1000} step={50} range footer color="success" />
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium">Products</span>
            <span className="text-text-secondary">
              {filteredProducts.length} of {products.length}
            </span>
          </div>
          <div className="space-y-2">
            {filteredProducts.map(product => <div key={product.name} className="flex items-center justify-between p-3 bg-surface rounded border border-border">
                <span className="text-sm">{product.name}</span>
                <span className="text-sm font-medium">\${product.price}</span>
              </div>)}
          </div>
        </div>
      </div>;
  }
}`,...(Ne=(je=q.parameters)==null?void 0:je.docs)==null?void 0:Ne.source}}};var Se,we,Ve;I.parameters={...I.parameters,docs:{...(Se=I.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: () => {
    const [volume, setVolume] = useState(70);
    const [bass, setBass] = useState(50);
    const [treble, setTreble] = useState(50);
    const [balance, setBalance] = useState(50);
    return <div className="max-w-md p-6 border border-border rounded-lg space-y-6">
        <h3 className="text-lg font-semibold">Audio Settings</h3>

        <div>
          <label className="text-sm font-medium mb-2 block">Volume: {volume}%</label>
          <Slider value={volume} onChange={setVolume} color="primary" />
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">Bass: {bass}%</label>
          <Slider value={bass} onChange={setBass} color="success" />
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">Treble: {treble}%</label>
          <Slider value={treble} onChange={setTreble} color="info" />
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">
            Balance: {balance < 50 ? \`L\${50 - balance}\` : balance > 50 ? \`R\${balance - 50}\` : 'Center'}
          </label>
          <Slider value={balance} onChange={setBalance} color="warning" />
        </div>

        <button onClick={() => {
        setVolume(70);
        setBass(50);
        setTreble(50);
        setBalance(50);
      }} className="w-full px-4 py-2 bg-surface border border-border rounded text-sm">
          Reset to Defaults
        </button>
      </div>;
  }
}`,...(Ve=(we=I.parameters)==null?void 0:we.docs)==null?void 0:Ve.source}}};var ke,Ce,ze;L.parameters={...L.parameters,docs:{...(ke=L.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(50);
    return <div className="h-64 flex items-center gap-8">
        <Slider value={value} onChange={setValue} orientation="vertical" footer color="primary" />
        <Slider defaultValue={30} orientation="vertical" footer color="success" />
        <Slider defaultValue={70} orientation="vertical" footer color="info" />
        <Slider defaultValue={50} orientation="vertical" footer color="warning" disabled />
      </div>;
  }
}`,...(ze=(Ce=L.parameters)==null?void 0:Ce.docs)==null?void 0:ze.source}}};var Re,Ae,Me;F.parameters={...F.parameters,docs:{...(Re=F.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  render: () => {
    const [channels, setChannels] = useState([70, 50, 60, 80, 45]);
    const labels = ['Vocals', 'Guitar', 'Bass', 'Drums', 'Keys'];
    return <div className="max-w-md p-6 border border-border rounded-lg space-y-4">
        <h3 className="text-lg font-semibold">Audio Mixer</h3>
        <div className="h-48 flex items-end gap-6">
          {channels.map((val, i) => <div key={labels[i]} className="flex flex-col items-center gap-2 h-full">
              <Slider value={val} onChange={v => {
            const next = [...channels];
            next[i] = v as number;
            setChannels(next);
          }} orientation="vertical" color="primary" size="sm" />
              <span className="text-xs text-text-secondary">{labels[i]}</span>
              <span className="text-xs font-medium">{val}%</span>
            </div>)}
        </div>
        <button onClick={() => setChannels([70, 50, 60, 80, 45])} className="w-full px-4 py-2 bg-surface border border-border rounded text-sm">
          Reset
        </button>
      </div>;
  }
}`,...(Me=(Ae=F.parameters)==null?void 0:Ae.docs)==null?void 0:Me.source}}};var Pe,De,Te;K.parameters={...K.parameters,docs:{...(Pe=K.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  render: () => {
    const colors = ['default', 'primary', 'secondary', 'accent', 'success', 'error', 'warning', 'info'] as const;
    const sizes = ['xs', 'sm', 'md', 'lg'] as const;
    const variants = ['default', 'solid', 'soft'] as const;
    return <div className="space-y-8">
        {variants.map(variant => <div key={variant} className="space-y-4">
            <h3 className="text-sm font-semibold capitalize">{variant} Variant</h3>
            <table className="border-collapse w-full">
              <thead>
                <tr>
                  <th className="p-2 text-left text-sm text-gray-500">Color \\ Size</th>
                  {sizes.map(s => <th key={s} className="p-2 text-center text-sm text-gray-500">{s}</th>)}
                </tr>
              </thead>
              <tbody>
                {colors.map(c => <tr key={c}>
                    <td className="p-2 text-sm font-medium">{c}</td>
                    {sizes.map(s => <td key={s} className="p-2">
                        <Slider color={c} size={s} variant={variant} defaultValue={50} className="w-40" />
                      </td>)}
                  </tr>)}
              </tbody>
            </table>
          </div>)}
      </div>;
  }
}`,...(Te=(De=K.parameters)==null?void 0:De.docs)==null?void 0:Te.source}}};const rt=["Primary","Interactive","WithCustomRange","RangeSlider","Disabled","VolumeControl","PriceRangeFilter","MultipleSliders","Vertical","AudioMixer","ColorSizeMatrix"];export{F as AudioMixer,K as ColorSizeMatrix,_ as Disabled,T as Interactive,I as MultipleSliders,q as PriceRangeFilter,D as Primary,E as RangeSlider,L as Vertical,$ as VolumeControl,B as WithCustomRange,rt as __namedExportsOrder,tt as default};
