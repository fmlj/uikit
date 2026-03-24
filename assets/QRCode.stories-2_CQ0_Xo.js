const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./browser-D7ljw1od.js","./_commonjsHelpers-CqkleIqs.js"])))=>i.map(i=>d[i]);
import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{R as Be,r as C}from"./index-ZH-6pyQh.js";import{_ as De}from"./iframe-emDGV3wZ.js";import{c as R}from"./utils-_uLxnvdl.js";import{c as He}from"./variants-C8qliDOr.js";import{B as Ie}from"./index-23ax1BAm.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-ZW2Bszwo.js";import"./index-Bo-loign.js";import"./index-BoArNvwV.js";import"./useRipple-BuuTbn0W.js";let b=null;async function Ge(){var t;if(b)return!0;try{const e=await De(()=>import("./browser-D7ljw1od.js").then(o=>o.b),__vite__mapDeps([0,1]),import.meta.url);return b=e.create||((t=e.default)==null?void 0:t.create)||null,!!b}catch{return!1}}function Oe(t,e){if(!b)return null;try{return b(t,{errorCorrectionLevel:e}).modules}catch{return null}}function We(t,e){if(typeof window>"u")return null;try{const o=getComputedStyle(t).getPropertyValue(e).trim();if(!o)return null;const s=document.createElement("div");s.style.color=o,document.body.appendChild(s);const m=getComputedStyle(s).color;return document.body.removeChild(s),m||null}catch{return null}}function K(t,e,o,s){const[m,a]=C.useState(e||s);return C.useEffect(()=>{if(e){a(e);return}const i=()=>{const c=t.current;if(!c)return;const p=We(c,o);a(p||s)};i();const n=requestAnimationFrame(i),d=new MutationObserver(i);return d.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","data-mode"]}),()=>{cancelAnimationFrame(n),d.disconnect()}},[e,o,s,t]),m}function Te(t,e,o){return t<7&&e<7||t<7&&e>=o-7||t>=o-7&&e<7}function Ze(t,e,o,s,m,a,i,n){const d=t.getContext("2d");if(!d)return;const c=typeof window<"u"&&window.devicePixelRatio||1;t.width=o*c,t.height=o*c,t.style.width=`${o}px`,t.style.height=`${o}px`,d.scale(c,c);const p=e.size,v=o/p;d.fillStyle=m,d.fillRect(0,0,o,o),d.fillStyle=s;for(let S=0;S<p;S++)for(let y=0;y<p;y++){if(!e.get(S,y))continue;const l=y*v,x=S*v;if(n&&l+v>n.x&&l<n.x+n.w&&x+v>n.y&&x<n.y+n.h)continue;Te(S,y,p)?Ye(d,l,x,v,i):Xe(d,l,x,v,a)}}function Xe(t,e,o,s,m){const a=s*.1;switch(m){case"dots":{const i=(s-a*2)/2;t.beginPath(),t.arc(e+s/2,o+s/2,i,0,Math.PI*2),t.fill();break}case"rounded":{const i=s*.3,n=s-a,d=e+a/2,c=o+a/2;t.beginPath(),t.moveTo(d+i,c),t.arcTo(d+n,c,d+n,c+n,i),t.arcTo(d+n,c+n,d,c+n,i),t.arcTo(d,c+n,d,c,i),t.arcTo(d,c,d+n,c,i),t.closePath(),t.fill();break}case"squares":default:{t.fillRect(e+a/2,o+a/2,s-a,s-a);break}}}function Ye(t,e,o,s,m){switch(m){case"dot":{const a=s/2;t.beginPath(),t.arc(e+a,o+a,a*.9,0,Math.PI*2),t.fill();break}case"rounded":{const a=s*.3;t.beginPath(),t.moveTo(e+a,o),t.arcTo(e+s,o,e+s,o+s,a),t.arcTo(e+s,o+s,e,o+s,a),t.arcTo(e,o+s,e,o,a),t.arcTo(e,o,e+s,o,a),t.closePath(),t.fill();break}case"square":default:t.fillRect(e,o,s,s);break}}function Je(t,e,o,s,m){const a=[],i=t.size;for(let n=0;n<i;n++)for(let d=0;d<i;d++){if(!t.get(n,d))continue;const c=d*e,p=n*e;if(m&&c+e>m.x&&c<m.x+m.w&&p+e>m.y&&p<m.y+m.h)continue;const v=Te(n,d,i),S=v?s:o,y=e*.1;if(S==="dots"||S==="dot"){const l=(e-(v?0:y*2))/2,x=c+e/2,h=p+e/2;a.push(`M${x-l},${h}a${l},${l} 0 1,0 ${l*2},0a${l},${l} 0 1,0 ${-l*2},0`)}else if(S==="rounded"){const l=e*.3,x=e-(v?0:y),h=c+(v?0:y/2),g=p+(v?0:y/2);a.push(`M${h+l},${g}H${h+x-l}Q${h+x},${g} ${h+x},${g+l}V${g+x-l}Q${h+x},${g+x} ${h+x-l},${g+x}H${h+l}Q${h},${g+x} ${h},${g+x-l}V${g+l}Q${h},${g} ${h+l},${g}Z`)}else{const l=v?0:y/2;a.push(`M${c+l},${p+l}h${e-l*2}v${e-l*2}h${-(e-l*2)}Z`)}}return a.join("")}const u=Be.memo(({value:t,size:e=128,color:o="default",fgColor:s,bgColor:m,errorLevel:a="M",type:i="canvas",moduleStyle:n="squares",finderStyle:d="square",icon:c,iconSize:p=40,iconBorderRadius:v=4,bordered:S=!0,status:y="active",onRefresh:l,refreshText:x="Refresh",expiredText:h="QR code expired",className:g,classNames:f})=>{const I=C.useRef(null),G=C.useRef(null),[W,Z]=C.useState(!!b),O=K(G,s,"--_c","#000000"),$=K(G,m,"--color-background","#ffffff");C.useEffect(()=>{if(b){Z(!0);return}Ge().then(w=>Z(w))},[]);const j=C.useMemo(()=>!t||!W?null:Oe(t,a),[t,a,W]),N=C.useMemo(()=>{if(!c||!j)return;const w=j.size,J=e/w,Fe=(e-p)/2,Pe=(e-p)/2,Q=J*2;return{x:Fe-Q,y:Pe-Q,w:p+Q*2,h:p+Q*2}},[c,j,e,p]),X=C.useCallback(()=>{!I.current||!j||typeof window>"u"||Ze(I.current,j,e,O,$,n,d,N)},[j,e,O,$,n,d,N]);C.useEffect(()=>{i==="canvas"&&X()},[i,X]);const Y=C.useMemo(()=>{if(i!=="svg"||!j)return null;const w=e/j.size;return Je(j,w,n,d,N)},[i,j,e,n,d,N]);return r.jsxs("div",{ref:G,"data-slot":"root",className:R("qrCode_root","relative inline-flex flex-col items-center",He[o],S&&"p-3 rounded-lg border border-slot bg-background",f==null?void 0:f.root,g),children:[i==="canvas"?r.jsx("canvas",{ref:I,"data-slot":"canvas",className:R("qrCode_canvas",f==null?void 0:f.canvas),style:{width:e,height:e}}):r.jsxs("svg",{"data-slot":"svg",width:e,height:e,viewBox:`0 0 ${e} ${e}`,className:R("qrCode_svg",f==null?void 0:f.svg),children:[r.jsx("rect",{width:e,height:e,fill:$}),Y&&r.jsx("path",{d:Y,fill:O})]}),c&&y==="active"&&r.jsx("div",{"data-slot":"icon",className:R("qrCode_icon","absolute",f==null?void 0:f.icon),style:{width:p,height:p,top:`calc(50% - ${p/2}px)`,left:`calc(50% - ${p/2}px)`,backgroundColor:$,borderRadius:v,padding:3,display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("img",{src:c,alt:"",style:{width:"100%",height:"100%",objectFit:"contain",borderRadius:Math.max(0,v-2)}})}),y==="loading"&&r.jsx("div",{"data-slot":"overlay",className:R("qrCode_overlay","absolute inset-0 flex items-center justify-center bg-background/80 rounded-lg",f==null?void 0:f.overlay),children:r.jsx("div",{className:"w-6 h-6 border-2 border-slot border-t-transparent rounded-full animate-spin"})}),y==="expired"&&r.jsxs("div",{"data-slot":"overlay",className:R("qrCode_overlay","absolute inset-0 flex flex-col items-center justify-center bg-background/90 rounded-lg gap-2",f==null?void 0:f.overlay),children:[r.jsx("p",{className:"text-sm text-text-secondary",children:h}),l&&r.jsx("button",{type:"button",onClick:l,className:"text-sm text-slot hover:opacity-80 font-medium cursor-pointer",children:x})]})]})});u.displayName="QRCode";u.__docgenInfo={description:"",methods:[],displayName:"QRCode",props:{size:{defaultValue:{value:"128",computed:!1},required:!1},color:{defaultValue:{value:'"default"',computed:!1},required:!1},errorLevel:{defaultValue:{value:'"M"',computed:!1},required:!1},type:{defaultValue:{value:'"canvas"',computed:!1},required:!1},moduleStyle:{defaultValue:{value:'"squares"',computed:!1},required:!1},finderStyle:{defaultValue:{value:'"square"',computed:!1},required:!1},iconSize:{defaultValue:{value:"40",computed:!1},required:!1},iconBorderRadius:{defaultValue:{value:"4",computed:!1},required:!1},bordered:{defaultValue:{value:"true",computed:!1},required:!1},status:{defaultValue:{value:'"active"',computed:!1},required:!1},refreshText:{defaultValue:{value:'"Refresh"',computed:!1},required:!1},expiredText:{defaultValue:{value:'"QR code expired"',computed:!1},required:!1}}};const lt={title:"Data Display/QRCode",component:u,tags:["autodocs"],argTypes:{color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"]}}},q={args:{value:"https://example.com"}},k={render:()=>{const t=["default","primary","secondary","accent","success","error","warning","info"];return r.jsx("div",{className:"flex flex-wrap gap-4",children:t.map(e=>r.jsxs("div",{className:"text-center space-y-2",children:[r.jsx(u,{value:"https://example.com",color:e,size:120,moduleStyle:"dots"}),r.jsx("p",{className:"text-xs text-text-secondary capitalize",children:e})]},e))})}},E={name:"Colors (rounded)",render:()=>{const t=["primary","secondary","accent","success","error","warning","info"];return r.jsx("div",{className:"flex flex-wrap gap-4",children:t.map(e=>r.jsxs("div",{className:"text-center space-y-2",children:[r.jsx(u,{value:"https://example.com",color:e,size:120,moduleStyle:"rounded",finderStyle:"rounded"}),r.jsx("p",{className:"text-xs text-text-secondary capitalize",children:e})]},e))})}},L={render:()=>r.jsxs("div",{className:"flex items-end gap-4",children:[r.jsx(u,{value:"https://example.com",size:80}),r.jsx(u,{value:"https://example.com",size:128}),r.jsx(u,{value:"https://example.com",size:200})]})},M={render:()=>r.jsxs("div",{className:"flex gap-6",children:[r.jsxs("div",{className:"text-center space-y-2",children:[r.jsx(u,{value:"https://example.com",moduleStyle:"squares",size:140}),r.jsx("p",{className:"text-xs text-text-secondary",children:"Squares"})]}),r.jsxs("div",{className:"text-center space-y-2",children:[r.jsx(u,{value:"https://example.com",moduleStyle:"dots",size:140}),r.jsx("p",{className:"text-xs text-text-secondary",children:"Dots"})]}),r.jsxs("div",{className:"text-center space-y-2",children:[r.jsx(u,{value:"https://example.com",moduleStyle:"rounded",size:140}),r.jsx("p",{className:"text-xs text-text-secondary",children:"Rounded"})]})]})},_={render:()=>r.jsxs("div",{className:"flex gap-6",children:[r.jsxs("div",{className:"text-center space-y-2",children:[r.jsx(u,{value:"https://example.com",finderStyle:"square",moduleStyle:"dots",size:140}),r.jsx("p",{className:"text-xs text-text-secondary",children:"Square finders + dots"})]}),r.jsxs("div",{className:"text-center space-y-2",children:[r.jsx(u,{value:"https://example.com",finderStyle:"rounded",moduleStyle:"dots",size:140}),r.jsx("p",{className:"text-xs text-text-secondary",children:"Rounded finders + dots"})]}),r.jsxs("div",{className:"text-center space-y-2",children:[r.jsx(u,{value:"https://example.com",finderStyle:"dot",moduleStyle:"dots",size:140}),r.jsx("p",{className:"text-xs text-text-secondary",children:"Dot finders + dots"})]})]})},V={name:"Explicit fgColor/bgColor",render:()=>r.jsxs("div",{className:"flex gap-4",children:[r.jsx(u,{value:"https://example.com",fgColor:"#3b82f6",moduleStyle:"dots"}),r.jsx(u,{value:"https://example.com",fgColor:"#22c55e",bgColor:"#f0fdf4",moduleStyle:"rounded"}),r.jsx(u,{value:"https://example.com",fgColor:"#8b5cf6",bgColor:"#faf5ff",moduleStyle:"dots",finderStyle:"rounded"})]})},T={render:()=>r.jsxs("div",{className:"flex gap-4",children:[r.jsx(u,{value:"https://example.com",icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png",iconSize:36,moduleStyle:"dots",finderStyle:"rounded",color:"info",size:160,errorLevel:"H"}),r.jsx(u,{value:"https://github.com",icon:"https://github.githubassets.com/favicons/favicon-dark.svg",iconSize:32,iconBorderRadius:8,moduleStyle:"rounded",size:160,errorLevel:"H"})]})},F={render:()=>r.jsxs("div",{className:"flex gap-4",children:[r.jsx(u,{value:"https://example.com",type:"svg",moduleStyle:"squares"}),r.jsx(u,{value:"https://example.com",type:"svg",moduleStyle:"dots",color:"error"}),r.jsx(u,{value:"https://example.com",type:"svg",moduleStyle:"rounded",finderStyle:"rounded",color:"accent"})]})},P={render:()=>{const[t,e]=C.useState("expired");return r.jsxs("div",{className:"space-y-4",children:[r.jsx(u,{value:"https://example.com",status:t,onRefresh:()=>e("active"),moduleStyle:"dots",color:"primary"}),r.jsx(Ie,{size:"sm",onClick:()=>e("expired"),variant:"outline",children:"Expire it"})]})}},B={args:{value:"https://example.com",status:"loading",color:"primary"}},D={args:{value:"https://example.com",bordered:!1,moduleStyle:"dots",color:"primary"}},H={render:()=>r.jsx("div",{className:"flex gap-4",children:["L","M","Q","H"].map(t=>r.jsxs("div",{className:"text-center space-y-2",children:[r.jsx(u,{value:"https://example.com",errorLevel:t,size:110,moduleStyle:"dots",color:"primary"}),r.jsxs("p",{className:"text-xs text-text-secondary",children:["Level ",t]})]},t))})};var U,A,z;q.parameters={...q.parameters,docs:{...(U=q.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    value: 'https://example.com'
  }
}`,...(z=(A=q.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};var ee,te,re;k.parameters={...k.parameters,docs:{...(ee=k.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => {
    const colors: QRCodeColor[] = ['default', 'primary', 'secondary', 'accent', 'success', 'error', 'warning', 'info'];
    return <div className="flex flex-wrap gap-4">
        {colors.map(c => <div key={c} className="text-center space-y-2">
            <QRCode value="https://example.com" color={c} size={120} moduleStyle="dots" />
            <p className="text-xs text-text-secondary capitalize">{c}</p>
          </div>)}
      </div>;
  }
}`,...(re=(te=k.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var oe,se,ae;E.parameters={...E.parameters,docs:{...(oe=E.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'Colors (rounded)',
  render: () => {
    const colors: QRCodeColor[] = ['primary', 'secondary', 'accent', 'success', 'error', 'warning', 'info'];
    return <div className="flex flex-wrap gap-4">
        {colors.map(c => <div key={c} className="text-center space-y-2">
            <QRCode value="https://example.com" color={c} size={120} moduleStyle="rounded" finderStyle="rounded" />
            <p className="text-xs text-text-secondary capitalize">{c}</p>
          </div>)}
      </div>;
  }
}`,...(ae=(se=E.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var de,le,ne;L.parameters={...L.parameters,docs:{...(de=L.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => <div className="flex items-end gap-4">
      <QRCode value="https://example.com" size={80} />
      <QRCode value="https://example.com" size={128} />
      <QRCode value="https://example.com" size={200} />
    </div>
}`,...(ne=(le=L.parameters)==null?void 0:le.docs)==null?void 0:ne.source}}};var ce,ue,ie;M.parameters={...M.parameters,docs:{...(ce=M.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <div className="flex gap-6">
      <div className="text-center space-y-2">
        <QRCode value="https://example.com" moduleStyle="squares" size={140} />
        <p className="text-xs text-text-secondary">Squares</p>
      </div>
      <div className="text-center space-y-2">
        <QRCode value="https://example.com" moduleStyle="dots" size={140} />
        <p className="text-xs text-text-secondary">Dots</p>
      </div>
      <div className="text-center space-y-2">
        <QRCode value="https://example.com" moduleStyle="rounded" size={140} />
        <p className="text-xs text-text-secondary">Rounded</p>
      </div>
    </div>
}`,...(ie=(ue=M.parameters)==null?void 0:ue.docs)==null?void 0:ie.source}}};var pe,me,xe;_.parameters={..._.parameters,docs:{...(pe=_.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => <div className="flex gap-6">
      <div className="text-center space-y-2">
        <QRCode value="https://example.com" finderStyle="square" moduleStyle="dots" size={140} />
        <p className="text-xs text-text-secondary">Square finders + dots</p>
      </div>
      <div className="text-center space-y-2">
        <QRCode value="https://example.com" finderStyle="rounded" moduleStyle="dots" size={140} />
        <p className="text-xs text-text-secondary">Rounded finders + dots</p>
      </div>
      <div className="text-center space-y-2">
        <QRCode value="https://example.com" finderStyle="dot" moduleStyle="dots" size={140} />
        <p className="text-xs text-text-secondary">Dot finders + dots</p>
      </div>
    </div>
}`,...(xe=(me=_.parameters)==null?void 0:me.docs)==null?void 0:xe.source}}};var fe,ve,he;V.parameters={...V.parameters,docs:{...(fe=V.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  name: 'Explicit fgColor/bgColor',
  render: () => <div className="flex gap-4">
      <QRCode value="https://example.com" fgColor="#3b82f6" moduleStyle="dots" />
      <QRCode value="https://example.com" fgColor="#22c55e" bgColor="#f0fdf4" moduleStyle="rounded" />
      <QRCode value="https://example.com" fgColor="#8b5cf6" bgColor="#faf5ff" moduleStyle="dots" finderStyle="rounded" />
    </div>
}`,...(he=(ve=V.parameters)==null?void 0:ve.docs)==null?void 0:he.source}}};var ye,ge,Ce;T.parameters={...T.parameters,docs:{...(ye=T.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
      <QRCode value="https://example.com" icon="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png" iconSize={36} moduleStyle="dots" finderStyle="rounded" color="info" size={160} errorLevel="H" />
      <QRCode value="https://github.com" icon="https://github.githubassets.com/favicons/favicon-dark.svg" iconSize={32} iconBorderRadius={8} moduleStyle="rounded" size={160} errorLevel="H" />
    </div>
}`,...(Ce=(ge=T.parameters)==null?void 0:ge.docs)==null?void 0:Ce.source}}};var Se,je,be;F.parameters={...F.parameters,docs:{...(Se=F.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
      <QRCode value="https://example.com" type="svg" moduleStyle="squares" />
      <QRCode value="https://example.com" type="svg" moduleStyle="dots" color="error" />
      <QRCode value="https://example.com" type="svg" moduleStyle="rounded" finderStyle="rounded" color="accent" />
    </div>
}`,...(be=(je=F.parameters)==null?void 0:je.docs)==null?void 0:be.source}}};var Re,we,$e;P.parameters={...P.parameters,docs:{...(Re=P.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  render: () => {
    const [status, setStatus] = useState<'active' | 'expired'>('expired');
    return <div className="space-y-4">
        <QRCode value="https://example.com" status={status} onRefresh={() => setStatus('active')} moduleStyle="dots" color="primary" />
        <Button size="sm" onClick={() => setStatus('expired')} variant="outline">Expire it</Button>
      </div>;
  }
}`,...($e=(we=P.parameters)==null?void 0:we.docs)==null?void 0:$e.source}}};var Ne,Qe,qe;B.parameters={...B.parameters,docs:{...(Ne=B.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  args: {
    value: 'https://example.com',
    status: 'loading',
    color: 'primary'
  }
}`,...(qe=(Qe=B.parameters)==null?void 0:Qe.docs)==null?void 0:qe.source}}};var ke,Ee,Le;D.parameters={...D.parameters,docs:{...(ke=D.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    value: 'https://example.com',
    bordered: false,
    moduleStyle: 'dots',
    color: 'primary'
  }
}`,...(Le=(Ee=D.parameters)==null?void 0:Ee.docs)==null?void 0:Le.source}}};var Me,_e,Ve;H.parameters={...H.parameters,docs:{...(Me=H.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
      {(['L', 'M', 'Q', 'H'] as const).map(level => <div key={level} className="text-center space-y-2">
          <QRCode value="https://example.com" errorLevel={level} size={110} moduleStyle="dots" color="primary" />
          <p className="text-xs text-text-secondary">Level {level}</p>
        </div>)}
    </div>
}`,...(Ve=(_e=H.parameters)==null?void 0:_e.docs)==null?void 0:Ve.source}}};const nt=["Default","Colors","ColorsSolid","Sizes","ModuleStyles","FinderStyles","ExplicitColors","WithIcon","SVGType","Expired","Loading","NoBorder","ErrorLevels"];export{k as Colors,E as ColorsSolid,q as Default,H as ErrorLevels,P as Expired,V as ExplicitColors,_ as FinderStyles,B as Loading,M as ModuleStyles,D as NoBorder,F as SVGType,L as Sizes,T as WithIcon,nt as __namedExportsOrder,lt as default};
