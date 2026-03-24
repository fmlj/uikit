import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as te,r as m}from"./index-ZH-6pyQh.js";import{c as q}from"./utils-_uLxnvdl.js";import"./_commonjsHelpers-CqkleIqs.js";function ae({text:r,image:u,width:x=120,height:p=64,rotate:N=-22,gap:b=[100,100],offset:f=[0,0],fontSize:h=14,fontFamily:y="sans-serif",fontWeight:j="normal",fontColor:k="rgba(0,0,0,0.15)",opacity:w=1}){return new Promise(d=>{const l=document.createElement("canvas"),a=l.getContext("2d"),t=window.devicePixelRatio||1,g=x+b[0],R=p+b[1];if(l.width=g*t,l.height=R*t,a.scale(t,t),a.globalAlpha=w,a.translate(g/2+f[0],R/2+f[1]),a.rotate(N*Math.PI/180),u){const s=new Image;s.crossOrigin="anonymous",s.onload=()=>{a.drawImage(s,-x/2,-p/2,x,p),d(l.toDataURL())},s.onerror=()=>d(""),s.src=u}else if(r){a.font=`${j} ${h}px ${y}`,a.fillStyle=k,a.textAlign="center",a.textBaseline="middle";const s=Array.isArray(r)?r:[r],c=h*1.5,v=-((s.length-1)*c)/2;s.forEach((i,n)=>{a.fillText(i,0,v+n*c)}),d(l.toDataURL())}else d("")})}const o=te.memo(({children:r,text:u,image:x,width:p=120,height:N=64,rotate:b=-22,gap:f=[100,100],offset:h=[0,0],fontSize:y=14,fontFamily:j="sans-serif",fontWeight:k="normal",fontColor:w="rgba(0,0,0,0.15)",opacity:d=1,zIndex:l=10,className:a,classNames:t})=>{const[g,R]=m.useState(""),s=m.useRef(null),c=m.useRef(null),v=m.useRef(null),i=m.useCallback(async()=>{if(typeof window>"u")return;const n=await ae({text:u,image:x,width:p,height:N,rotate:b,gap:f,offset:h,fontSize:y,fontFamily:j,fontWeight:k,fontColor:w,opacity:d});R(n)},[u,x,p,N,b,f,h,y,j,k,w,d]);return m.useEffect(()=>{i()},[i]),m.useEffect(()=>{if(!(!c.current||!s.current))return v.current=new MutationObserver(n=>{for(const D of n){if(D.type==="childList"&&Array.from(D.removedNodes).includes(c.current)){i();return}if(D.type==="attributes"&&D.target===c.current){i();return}}}),v.current.observe(s.current,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["style","class"]}),()=>{var n;return(n=v.current)==null?void 0:n.disconnect()}},[i]),e.jsxs("div",{ref:s,"data-slot":"root",className:q("watermark_root","relative",t==null?void 0:t.root,a),children:[e.jsx("div",{"data-slot":"content",className:q("watermark_content","relative",t==null?void 0:t.content),children:r}),g&&e.jsx("div",{ref:c,"data-slot":"watermark",className:q("watermark_layer","absolute inset-0 pointer-events-none",t==null?void 0:t.watermark),style:{backgroundImage:`url(${g})`,backgroundRepeat:"repeat",zIndex:l}})]})});o.displayName="Watermark";o.__docgenInfo={description:"",methods:[],displayName:"Watermark",props:{width:{defaultValue:{value:"120",computed:!1},required:!1},height:{defaultValue:{value:"64",computed:!1},required:!1},rotate:{defaultValue:{value:"-22",computed:!1},required:!1},gap:{defaultValue:{value:"[100, 100]",computed:!1},required:!1},offset:{defaultValue:{value:"[0, 0]",computed:!1},required:!1},fontSize:{defaultValue:{value:"14",computed:!1},required:!1},fontFamily:{defaultValue:{value:"'sans-serif'",computed:!1},required:!1},fontWeight:{defaultValue:{value:"'normal'",computed:!1},required:!1},fontColor:{defaultValue:{value:"'rgba(0,0,0,0.15)'",computed:!1},required:!1},opacity:{defaultValue:{value:"1",computed:!1},required:!1},zIndex:{defaultValue:{value:"10",computed:!1},required:!1}}};const ce={title:"Other/Watermark",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"Canvas-rendered watermark overlay. Supports text or image watermarks with configurable rotation, gap, font, and opacity."}}}},W={render:()=>e.jsx(o,{text:"Confidential",children:e.jsxs("div",{className:"h-64 p-6 rounded-lg border border-border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Sensitive Document"}),e.jsx("p",{className:"text-text-secondary",children:"This content is protected with a watermark overlay."})]})})},S={render:()=>e.jsx(o,{text:["Internal Use","Do Not Share"],children:e.jsxs("div",{className:"h-64 p-6 rounded-lg border border-border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Multi-line Watermark"}),e.jsx("p",{className:"text-text-secondary",children:"Two lines of watermark text."})]})})},C={render:()=>e.jsx(o,{text:"DRAFT",fontSize:20,fontColor:"rgba(255,0,0,0.1)",rotate:-30,gap:[80,80],children:e.jsxs("div",{className:"h-64 p-6 rounded-lg border border-border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Draft Document"}),e.jsx("p",{className:"text-text-secondary",children:"Large red DRAFT watermark."})]})})},T={render:()=>e.jsx("div",{className:"grid grid-cols-3 gap-4",children:[.05,.1,.2].map(r=>e.jsx(o,{text:"Sample",opacity:r,children:e.jsxs("div",{className:"h-48 p-4 rounded-lg border border-border",children:[e.jsxs("h4",{className:"text-sm font-semibold mb-1",children:["Opacity: ",r]}),e.jsx("p",{className:"text-xs text-text-secondary",children:r===.05?"Very subtle":r===.1?"Default visibility":"More visible"})]})},r))})},A={render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx(o,{text:"Normal",gap:[100,100],children:e.jsxs("div",{className:"h-56 p-4 rounded-lg border border-border",children:[e.jsx("h4",{className:"text-sm font-semibold mb-1",children:"Normal Gap"}),e.jsx("p",{className:"text-xs text-text-secondary",children:"gap: [100, 100]"})]})}),e.jsx(o,{text:"Dense",gap:[40,40],children:e.jsxs("div",{className:"h-56 p-4 rounded-lg border border-border",children:[e.jsx("h4",{className:"text-sm font-semibold mb-1",children:"Dense Gap"}),e.jsx("p",{className:"text-xs text-text-secondary",children:"gap: [40, 40]"})]})})]})},V={render:()=>e.jsx("div",{className:"grid grid-cols-3 gap-4",children:[-45,-22,0].map(r=>e.jsx(o,{text:"Watermark",rotate:r,children:e.jsxs("div",{className:"h-48 p-4 rounded-lg border border-border",children:[e.jsxs("h4",{className:"text-sm font-semibold mb-1",children:["Rotate: ",r,"°"]}),e.jsx("p",{className:"text-xs text-text-secondary",children:r===0?"Horizontal":`Tilted ${r}°`})]})},r))})},M={render:()=>e.jsx(o,{text:"© 2026 Acme Corp",fontColor:"rgba(0,0,0,0.06)",fontSize:14,rotate:-20,children:e.jsxs("div",{className:"p-6 rounded-lg border border-border space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Quarterly Report"}),e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsxs("div",{className:"p-4 rounded-md bg-surface",children:[e.jsx("p",{className:"text-2xl font-bold text-primary",children:"$2.4M"}),e.jsx("p",{className:"text-xs text-text-secondary",children:"Revenue"})]}),e.jsxs("div",{className:"p-4 rounded-md bg-surface",children:[e.jsx("p",{className:"text-2xl font-bold text-success",children:"+18%"}),e.jsx("p",{className:"text-xs text-text-secondary",children:"Growth"})]}),e.jsxs("div",{className:"p-4 rounded-md bg-surface",children:[e.jsx("p",{className:"text-2xl font-bold text-info",children:"1,247"}),e.jsx("p",{className:"text-xs text-text-secondary",children:"Customers"})]})]}),e.jsx("p",{className:"text-sm text-text-secondary",children:"This document contains proprietary information. The watermark is rendered via a canvas element and cannot be removed by editing the DOM."})]})})};var I,L,O;W.parameters={...W.parameters,docs:{...(I=W.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Watermark text="Confidential">
      <div className="h-64 p-6 rounded-lg border border-border">
        <h3 className="text-lg font-semibold mb-2">Sensitive Document</h3>
        <p className="text-text-secondary">
          This content is protected with a watermark overlay.
        </p>
      </div>
    </Watermark>
}`,...(O=(L=W.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var G,$,E;S.parameters={...S.parameters,docs:{...(G=S.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <Watermark text={['Internal Use', 'Do Not Share']}>
      <div className="h-64 p-6 rounded-lg border border-border">
        <h3 className="text-lg font-semibold mb-2">Multi-line Watermark</h3>
        <p className="text-text-secondary">Two lines of watermark text.</p>
      </div>
    </Watermark>
}`,...(E=($=S.parameters)==null?void 0:$.docs)==null?void 0:E.source}}};var _,z,F;C.parameters={...C.parameters,docs:{...(_=C.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Watermark text="DRAFT" fontSize={20} fontColor="rgba(255,0,0,0.1)" rotate={-30} gap={[80, 80]}>
      <div className="h-64 p-6 rounded-lg border border-border">
        <h3 className="text-lg font-semibold mb-2">Draft Document</h3>
        <p className="text-text-secondary">Large red DRAFT watermark.</p>
      </div>
    </Watermark>
}`,...(F=(z=C.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var U,H,P;T.parameters={...T.parameters,docs:{...(U=T.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-3 gap-4">
      {[0.05, 0.1, 0.2].map(opacity => <Watermark key={opacity} text="Sample" opacity={opacity}>
          <div className="h-48 p-4 rounded-lg border border-border">
            <h4 className="text-sm font-semibold mb-1">
              Opacity: {opacity}
            </h4>
            <p className="text-xs text-text-secondary">
              {opacity === 0.05 ? 'Very subtle' : opacity === 0.1 ? 'Default visibility' : 'More visible'}
            </p>
          </div>
        </Watermark>)}
    </div>
}`,...(P=(H=T.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var B,Q,Y;A.parameters={...A.parameters,docs:{...(B=A.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-4">
      <Watermark text="Normal" gap={[100, 100]}>
        <div className="h-56 p-4 rounded-lg border border-border">
          <h4 className="text-sm font-semibold mb-1">Normal Gap</h4>
          <p className="text-xs text-text-secondary">gap: [100, 100]</p>
        </div>
      </Watermark>
      <Watermark text="Dense" gap={[40, 40]}>
        <div className="h-56 p-4 rounded-lg border border-border">
          <h4 className="text-sm font-semibold mb-1">Dense Gap</h4>
          <p className="text-xs text-text-secondary">gap: [40, 40]</p>
        </div>
      </Watermark>
    </div>
}`,...(Y=(Q=A.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var J,K,X;V.parameters={...V.parameters,docs:{...(J=V.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-3 gap-4">
      {[-45, -22, 0].map(rotate => <Watermark key={rotate} text="Watermark" rotate={rotate}>
          <div className="h-48 p-4 rounded-lg border border-border">
            <h4 className="text-sm font-semibold mb-1">
              Rotate: {rotate}°
            </h4>
            <p className="text-xs text-text-secondary">
              {rotate === 0 ? 'Horizontal' : \`Tilted \${rotate}°\`}
            </p>
          </div>
        </Watermark>)}
    </div>
}`,...(X=(K=V.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var Z,ee,re;M.parameters={...M.parameters,docs:{...(Z=M.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <Watermark text="© 2026 Acme Corp" fontColor="rgba(0,0,0,0.06)" fontSize={14} rotate={-20}>
      <div className="p-6 rounded-lg border border-border space-y-4">
        <h3 className="text-lg font-semibold">Quarterly Report</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 rounded-md bg-surface">
            <p className="text-2xl font-bold text-primary">$2.4M</p>
            <p className="text-xs text-text-secondary">Revenue</p>
          </div>
          <div className="p-4 rounded-md bg-surface">
            <p className="text-2xl font-bold text-success">+18%</p>
            <p className="text-xs text-text-secondary">Growth</p>
          </div>
          <div className="p-4 rounded-md bg-surface">
            <p className="text-2xl font-bold text-info">1,247</p>
            <p className="text-xs text-text-secondary">Customers</p>
          </div>
        </div>
        <p className="text-sm text-text-secondary">
          This document contains proprietary information. The watermark is rendered via
          a canvas element and cannot be removed by editing the DOM.
        </p>
      </div>
    </Watermark>
}`,...(re=(ee=M.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};const ie=["Default","MultiLine","CustomStyle","OpacityLevels","DenseGap","RotationAngles","RichContent"];export{C as CustomStyle,W as Default,A as DenseGap,S as MultiLine,T as OpacityLevels,M as RichContent,V as RotationAngles,ie as __namedExportsOrder,ce as default};
