import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as ue,r as b}from"./index-ZH-6pyQh.js";import{a as ce,c as d}from"./utils-_uLxnvdl.js";import{c as j}from"./variants-C8qliDOr.js";import"./_commonjsHelpers-CqkleIqs.js";const xe={xs:{size:60,strokeWidth:4},sm:{size:80,strokeWidth:6},md:{size:120,strokeWidth:8},lg:{size:160,strokeWidth:10}},de=ce("w-full rounded-full overflow-hidden",{variants:{size:{xs:"h-1",sm:"h-2",md:"h-3",lg:"h-4"}},defaultVariants:{size:"md"}}),me=ce("h-full transition-[width,height] duration-300 ease-in-out rounded-full",{variants:{size:{xs:"",sm:"",md:"",lg:""}},defaultVariants:{size:"md"}}),I=t=>t==="soft"?"bg-slot-10":t==="solid"?"bg-slot-20":"bg-slot-10",M=t=>t==="default"?"bg-slot-20 border border-slot":t==="solid"?"bg-slot":"bg-slot-50",ve=t=>t==="soft"?"stroke-slot-50":"stroke-slot",fe=t=>t==="soft"?"stroke-slot-10":t==="solid"?"stroke-slot-20":"stroke-slot-10";function pe(t){switch(t){case"xs":return"w-1";case"sm":return"w-2";case"md":return"w-3";case"lg":return"w-4";default:return"w-3"}}function A(t,l=!0){return!t||!l?{}:{backgroundImage:"linear-gradient(45deg, var(--overlay-stripe) 25%, transparent 25%, transparent 50%, var(--overlay-stripe) 50%, var(--overlay-stripe) 75%, transparent 75%, transparent)",backgroundSize:"1rem 1rem"}}const V=({label:t,showProgress:l,clampedValue:a,classNames:o})=>t?e.jsxs("div",{className:"flex items-center justify-between mb-2 text-sm text-text-primary",children:[e.jsx("span",{className:d("progress_label",o==null?void 0:o.label),children:t}),l&&e.jsxs("span",{className:d("font-medium","progress_value",o==null?void 0:o.value),children:[a,"%"]})]}):null,ge=({size:t="md",circleSize:l,strokeWidth:a,color:o="primary",variant:c="default",label:p,className:u,classNames:i,clampedValue:m,progressLabel:r})=>{const x=xe[t],n=l??x.size,v=a??x.strokeWidth,f=(n-v)/2,y=2*Math.PI*f,g=y-m/100*y;return e.jsx("div",{className:d("inline-flex flex-col items-center",j[o],"progress_root",u,i==null?void 0:i.root),children:e.jsxs("div",{className:"relative",style:{width:n,height:n},role:"progressbar","aria-valuenow":m,"aria-valuemin":0,"aria-valuemax":100,"aria-label":r,"aria-live":"polite",children:[e.jsxs("svg",{width:n,height:n,className:"transform -rotate-90","aria-hidden":"true",children:[e.jsx("circle",{cx:n/2,cy:n/2,r:f,fill:"none",strokeWidth:v,className:d(fe(c),"progress_track",i==null?void 0:i.track)}),e.jsx("circle",{cx:n/2,cy:n/2,r:f,fill:"none",strokeWidth:v,strokeDasharray:y,strokeDashoffset:g,strokeLinecap:"round",className:d(ve(c),"transition-[stroke-dashoffset] duration-300 ease-in-out","progress_fill",i==null?void 0:i.fill)})]}),e.jsx("div",{className:"absolute inset-0 flex flex-col items-center justify-center",children:p?e.jsx("div",{className:d("p-2 text-text-secondary","progress_label",i==null?void 0:i.label),style:{fontSize:`${Math.floor(n/Math.floor(p.length*1.5))}px`},children:p}):e.jsxs("span",{className:d("text-text-primary font-semibold","progress_value",i==null?void 0:i.value),style:{fontSize:n/5},children:[m,"%"]})})]})})},he=({orientation:t="horizontal",size:l="md",color:a="primary",variant:o="default",label:c,showProgress:p=!1,striped:u=!1,animated:i=!1,className:m,classNames:r,totalSteps:x=5,clampedValue:n,progressLabel:v})=>{const f=Math.ceil(n/100*x);return t==="vertical"?e.jsxs("div",{className:d("h-full flex flex-col",j[a],"progress_root",m,r==null?void 0:r.root),role:"progressbar","aria-valuenow":n,"aria-valuemin":0,"aria-valuemax":100,"aria-label":v,"aria-live":"polite",children:[e.jsx(V,{label:c,showProgress:p,clampedValue:n,classNames:r}),e.jsx("div",{className:d("flex-1 rounded-full overflow-hidden flex flex-col-reverse gap-1",pe(l),"progress_track",r==null?void 0:r.track),children:Array.from({length:x},(y,g)=>{const h=g+1<=f;return e.jsx("div",{className:d("w-full rounded-full transition-[width,height] flex-1",h?M(o):I(o),i&&u&&"progress-shimmer","progress_fill",r==null?void 0:r.fill),style:A(u,h)},g)})})]}):e.jsxs("div",{"data-slot":"root",className:d("w-full",j[a],"progress_root",m,r==null?void 0:r.root),role:"progressbar","aria-valuenow":n,"aria-valuemin":0,"aria-valuemax":100,"aria-label":v,"aria-live":"polite",children:[e.jsx(V,{label:c,showProgress:p,clampedValue:n,classNames:r}),e.jsx("div",{className:d("w-full rounded-full overflow-hidden flex gap-1",de({size:l}),"progress_track",r==null?void 0:r.track),children:Array.from({length:x},(y,g)=>{const h=g+1<=f;return e.jsx("div",{className:d("h-full rounded-full transition-[width,height] flex-1",h?M(o):I(o),i&&u&&"progress-shimmer","progress_fill",r==null?void 0:r.fill),style:A(u,h)},g)})})]})},ye=({orientation:t="horizontal",size:l="md",color:a="primary",variant:o="default",label:c,showProgress:p=!1,striped:u=!1,animated:i=!1,className:m,classNames:r,clampedValue:x,progressLabel:n})=>t==="vertical"?e.jsxs("div",{className:d("h-full flex flex-col",j[a],"progress_root",m,r==null?void 0:r.root),role:"progressbar","aria-valuenow":x,"aria-valuemin":0,"aria-valuemax":100,"aria-label":n,"aria-live":"polite",children:[e.jsx(V,{label:c,showProgress:p,clampedValue:x,classNames:r}),e.jsx("div",{className:d("flex-1 rounded-full overflow-hidden flex flex-col justify-end",pe(l),I(o),"progress_track",r==null?void 0:r.track),children:e.jsx("div",{className:d("w-full transition-[width,height] duration-300 ease-in-out rounded-full",M(o),i&&u&&"progress-shimmer","progress_fill",r==null?void 0:r.fill),style:{height:`${x}%`,...A(u)}})})]}):e.jsxs("div",{className:d("w-full",j[a],"progress_root",m,r==null?void 0:r.root),role:"progressbar","aria-valuenow":x,"aria-valuemin":0,"aria-valuemax":100,"aria-label":n,"aria-live":"polite",children:[e.jsx(V,{label:c,showProgress:p,clampedValue:x,classNames:r}),e.jsx("div",{className:d(de({size:l}),I(o),"progress_track",r==null?void 0:r.track),children:e.jsx("div",{className:d(me({size:l}),M(o),i&&u&&"progress-shimmer","progress_fill",r==null?void 0:r.fill),style:{width:`${x}%`,...A(u)}})})]}),s=ue.memo(({value:t,color:l="primary",size:a="md",circleSize:o,strokeWidth:c,variant:p="default",type:u="line",orientation:i="horizontal",showProgress:m=!1,label:r,striped:x=!1,animated:n=!1,className:v,classNames:f,totalSteps:y=5,"aria-label":g})=>{const S=Math.min(Math.max(t,0),100),h=g||r||"Progress";return u==="circle"?e.jsx(ge,{size:a,circleSize:o,strokeWidth:c,color:l,variant:p,label:r,className:v,classNames:f,clampedValue:S,progressLabel:h}):u==="step"?e.jsx(he,{orientation:i,size:a,color:l,variant:p,label:r,showProgress:m,striped:x,animated:n,className:v,classNames:f,totalSteps:y,clampedValue:S,progressLabel:h}):e.jsx(ye,{orientation:i,size:a,color:l,variant:p,label:r,showProgress:m,striped:x,animated:n,className:v,classNames:f,clampedValue:S,progressLabel:h})});s.displayName="Progress";s.__docgenInfo={description:"",methods:[],displayName:"Progress",props:{color:{defaultValue:{value:'"primary"',computed:!1},required:!1},size:{defaultValue:{value:'"md"',computed:!1},required:!1},variant:{defaultValue:{value:'"default"',computed:!1},required:!1},type:{defaultValue:{value:'"line"',computed:!1},required:!1},orientation:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},showProgress:{defaultValue:{value:"false",computed:!1},required:!1},striped:{defaultValue:{value:"false",computed:!1},required:!1},animated:{defaultValue:{value:"false",computed:!1},required:!1},totalSteps:{defaultValue:{value:"5",computed:!1},required:!1}}};const ze={title:"Feedback/Progress",component:s,tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100,step:1},description:"Progress value (0-100)"},color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"],description:"Theme color"},size:{control:"select",options:["xs","sm","md","lg"],description:"Progress bar size (preset)"},circleSize:{control:{type:"number",min:10,max:300,step:2},description:"Custom circle diameter in pixels (overrides size preset)"},strokeWidth:{control:{type:"number",min:1,max:20,step:.5},description:"Custom stroke width in pixels (overrides size preset)"},variant:{control:"select",options:["default","solid","soft"],description:"Visual style variant"},type:{control:"select",options:["line","circle","step"],description:"Progress type"},orientation:{control:"select",options:["horizontal","vertical"],description:"Progress bar orientation (line/step only)"},showProgress:{control:"boolean",description:"Show progress percentage"},striped:{control:"boolean",description:"Striped pattern"},animated:{control:"boolean",description:"Animated stripes"},totalSteps:{control:{type:"number",min:2,max:10},description:"Total steps for step progress"}}},k={args:{value:65,color:"primary",size:"md",variant:"solid",type:"line"}},P={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsx(s,{value:35,label:"Downloading files...",showProgress:!0}),e.jsx(s,{value:75,label:"Installation progress",showProgress:!0,color:"success"}),e.jsx(s,{value:90,label:"Almost done",showProgress:!0,color:"info"}),e.jsx(s,{value:100,label:"Complete!",showProgress:!0,color:"success"})]})},z={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4",children:"Horizontal Steps"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{value:20,type:"step",totalSteps:5,label:"Step 1/5"}),e.jsx(s,{value:40,type:"step",totalSteps:5,label:"Step 2/5"}),e.jsx(s,{value:60,type:"step",totalSteps:5,label:"Step 3/5",color:"primary"}),e.jsx(s,{value:80,type:"step",totalSteps:5,label:"Step 4/5",color:"info"}),e.jsx(s,{value:100,type:"step",totalSteps:5,label:"Completed",color:"success"})]})]}),e.jsx("div",{className:"flex gap-8",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4",children:"Vertical Steps"}),e.jsxs("div",{className:"flex gap-8",style:{height:"300px"},children:[e.jsx(s,{value:20,type:"step",totalSteps:5,orientation:"vertical"}),e.jsx(s,{value:40,type:"step",totalSteps:5,orientation:"vertical",color:"primary"}),e.jsx(s,{value:60,type:"step",totalSteps:5,orientation:"vertical",color:"info"}),e.jsx(s,{value:100,type:"step",totalSteps:5,orientation:"vertical",color:"success"})]})]})})]})},w={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{value:65,label:"Striped",striped:!0}),e.jsx(s,{value:65,label:"Animated Striped",striped:!0,animated:!0,color:"primary"}),e.jsx(s,{value:45,label:"Animated Warning",striped:!0,animated:!0,color:"warning"}),e.jsx(s,{value:85,label:"Animated Success",striped:!0,animated:!0,color:"success"})]})},C={render:()=>{const[t,l]=b.useState(0);return b.useEffect(()=>{const a=setInterval(()=>{l(o=>o>=100?0:o+1)},50);return()=>clearInterval(a)},[]),e.jsxs("div",{className:"space-y-6",children:[e.jsx(s,{value:t,label:"Auto-incrementing progress",showProgress:!0,color:"primary",striped:!0,animated:!0}),e.jsx(s,{value:t,type:"circle",color:"success",size:"lg"}),e.jsx(s,{value:t,type:"step",totalSteps:5,color:"info",label:"Step Progress",showProgress:!0})]})}},W={render:()=>{const[t,l]=b.useState(0),[a,o]=b.useState(!1),c=()=>{o(!0),l(0);const p=setInterval(()=>{l(u=>u>=100?(clearInterval(p),setTimeout(()=>o(!1),1e3),100):u+Math.random()*10)},200)};return e.jsxs("div",{className:"space-y-4",children:[e.jsx("button",{onClick:c,disabled:a,className:"px-4 py-2 bg-primary text-white rounded disabled:opacity-50",children:a?"Uploading...":"Start Upload"}),e.jsx(s,{value:Math.min(t,100),label:"Uploading file...",showProgress:!0,color:t>=100?"success":"primary",striped:!0,animated:t<100}),t>=100&&e.jsx("p",{className:"text-sm text-success",children:"Upload complete!"})]})}},N={render:()=>{const[t,l]=b.useState(1),a=5,o=t/a*100;return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-sm text-text-secondary",children:[e.jsxs("span",{children:["Step ",t," of ",a]}),e.jsxs("span",{children:[Math.round(o),"%"]})]}),e.jsx(s,{value:o,type:"step",totalSteps:a,color:"primary"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>l(Math.max(1,t-1)),disabled:t===1,className:"px-4 py-2 bg-surface border border-border rounded disabled:opacity-50",children:"Previous"}),e.jsx("button",{onClick:()=>l(Math.min(a,t+1)),disabled:t===a,className:"px-4 py-2 bg-primary text-white rounded disabled:opacity-50",children:t===a?"Complete":"Next"})]})]})}},_={name:"Custom Circle Size & Stroke",render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4",children:"Inline Text Progress (14-20px)"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("p",{className:"text-sm flex items-center gap-2",children:[e.jsx(s,{type:"circle",value:75,circleSize:14,strokeWidth:2,color:"primary"}),"Loading user data..."]}),e.jsxs("p",{className:"text-base flex items-center gap-2",children:[e.jsx(s,{type:"circle",value:50,circleSize:16,strokeWidth:2,color:"info"}),"Processing request"]}),e.jsxs("p",{className:"text-lg flex items-center gap-2",children:[e.jsx(s,{type:"circle",value:100,circleSize:20,strokeWidth:2.5,color:"success"}),"Upload complete"]}),e.jsxs("p",{className:"text-base flex items-center gap-2",children:[e.jsx(s,{type:"circle",value:30,circleSize:18,strokeWidth:2,color:"warning"}),"Syncing files (30%)"]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4",children:"Small Indicators (24-40px)"}),e.jsxs("div",{className:"flex gap-4 items-center flex-wrap",children:[e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(s,{type:"circle",value:25,circleSize:24,strokeWidth:3,color:"error",label:"10"}),e.jsx("span",{className:"text-xs text-text-secondary",children:"24px"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(s,{type:"circle",value:50,circleSize:32,strokeWidth:3,color:"warning"}),e.jsx("span",{className:"text-xs text-text-secondary",children:"32px"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(s,{type:"circle",value:75,circleSize:40,strokeWidth:4,color:"info"}),e.jsx("span",{className:"text-xs text-text-secondary",children:"40px"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(s,{type:"circle",value:100,circleSize:48,strokeWidth:4,color:"success"}),e.jsx("span",{className:"text-xs text-text-secondary",children:"48px"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4",children:"Custom Large Circles"}),e.jsxs("div",{className:"flex gap-6 items-center flex-wrap",children:[e.jsx(s,{type:"circle",value:65,circleSize:100,strokeWidth:6,color:"primary"}),e.jsx(s,{type:"circle",value:80,circleSize:140,strokeWidth:10,color:"accent"}),e.jsx(s,{type:"circle",value:45,circleSize:180,strokeWidth:12,color:"secondary"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4",children:"Stroke Width Variations (same size)"}),e.jsxs("div",{className:"flex gap-6 items-center flex-wrap",children:[e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(s,{type:"circle",value:75,circleSize:60,strokeWidth:2,color:"primary"}),e.jsx("span",{className:"text-xs text-text-secondary",children:"2px stroke"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(s,{type:"circle",value:75,circleSize:60,strokeWidth:4,color:"primary"}),e.jsx("span",{className:"text-xs text-text-secondary",children:"4px stroke"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(s,{type:"circle",value:75,circleSize:60,strokeWidth:6,color:"primary"}),e.jsx("span",{className:"text-xs text-text-secondary",children:"6px stroke"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(s,{type:"circle",value:75,circleSize:60,strokeWidth:10,color:"primary"}),e.jsx("span",{className:"text-xs text-text-secondary",children:"10px stroke"})]})]})]})]})},U={render:()=>{const t=["default","primary","secondary","accent","success","error","warning","info"],l=["xs","sm","md","lg"],a=["default","solid","soft"];return e.jsx("div",{className:"space-y-8",children:a.map(o=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("h3",{className:"text-sm font-semibold capitalize",children:[o," Variant"]}),e.jsxs("table",{className:"border-collapse w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-2 text-left text-sm text-gray-500",children:"Color \\ Size"}),l.map(c=>e.jsx("th",{className:"p-2 text-center text-sm text-gray-500",children:c},c))]})}),e.jsx("tbody",{children:t.map(c=>e.jsxs("tr",{children:[e.jsx("td",{className:"p-2 text-sm font-medium",children:c}),l.map(p=>e.jsx("td",{className:"p-2",children:e.jsx(s,{color:c,size:p,variant:o,value:65,className:"w-48"})},p))]},c))})]})]},o))})}};var q,L,T;k.parameters={...k.parameters,docs:{...(q=k.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    value: 65,
    color: "primary",
    size: "md",
    variant: "solid",
    type: "line"
  }
}`,...(T=(L=k.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var E,F,D;P.parameters={...P.parameters,docs:{...(E=P.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <Progress value={35} label="Downloading files..." showProgress />
      <Progress value={75} label="Installation progress" showProgress color="success" />
      <Progress value={90} label="Almost done" showProgress color="info" />
      <Progress value={100} label="Complete!" showProgress color="success" />
    </div>
}`,...(D=(F=P.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var $,B,R;z.parameters={...z.parameters,docs:{...($=z.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold mb-4">Horizontal Steps</h3>
        <div className="space-y-4">
          <Progress value={20} type="step" totalSteps={5} label="Step 1/5" />
          <Progress value={40} type="step" totalSteps={5} label="Step 2/5" />
          <Progress value={60} type="step" totalSteps={5} label="Step 3/5" color="primary" />
          <Progress value={80} type="step" totalSteps={5} label="Step 4/5" color="info" />
          <Progress value={100} type="step" totalSteps={5} label="Completed" color="success" />
        </div>
      </div>
      <div className="flex gap-8">
        <div>
          <h3 className="text-sm font-semibold mb-4">Vertical Steps</h3>
          <div className="flex gap-8" style={{
          height: "300px"
        }}>
            <Progress value={20} type="step" totalSteps={5} orientation="vertical" />
            <Progress value={40} type="step" totalSteps={5} orientation="vertical" color="primary" />
            <Progress value={60} type="step" totalSteps={5} orientation="vertical" color="info" />
            <Progress value={100} type="step" totalSteps={5} orientation="vertical" color="success" />
          </div>
        </div>
      </div>
    </div>
}`,...(R=(B=z.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var H,O,G;w.parameters={...w.parameters,docs:{...(H=w.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Progress value={65} label="Striped" striped />
      <Progress value={65} label="Animated Striped" striped animated color="primary" />
      <Progress value={45} label="Animated Warning" striped animated color="warning" />
      <Progress value={85} label="Animated Success" striped animated color="success" />
    </div>
}`,...(G=(O=w.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var J,K,Q;C.parameters={...C.parameters,docs:{...(J=C.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) return 0;
          return prev + 1;
        });
      }, 50);
      return () => clearInterval(interval);
    }, []);
    return <div className="space-y-6">
        <Progress value={progress} label="Auto-incrementing progress" showProgress color="primary" striped animated />
        <Progress value={progress} type="circle" color="success" size="lg" />
        <Progress value={progress} type="step" totalSteps={5} color="info" label="Step Progress" showProgress />
      </div>;
  }
}`,...(Q=(K=C.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;W.parameters={...W.parameters,docs:{...(X=W.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    const [progress, setProgress] = useState(0);
    const [isUploading, setIsUploading] = useState(false);
    const startUpload = () => {
      setIsUploading(true);
      setProgress(0);
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setIsUploading(false), 1000);
            return 100;
          }
          return prev + Math.random() * 10;
        });
      }, 200);
    };
    return <div className="space-y-4">
        <button onClick={startUpload} disabled={isUploading} className="px-4 py-2 bg-primary text-white rounded disabled:opacity-50">
          {isUploading ? "Uploading..." : "Start Upload"}
        </button>
        <Progress value={Math.min(progress, 100)} label="Uploading file..." showProgress color={progress >= 100 ? "success" : "primary"} striped animated={progress < 100} />
        {progress >= 100 && <p className="text-sm text-success">Upload complete!</p>}
      </div>;
  }
}`,...(Z=(Y=W.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,te;N.parameters={...N.parameters,docs:{...(ee=N.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => {
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 5;
    const progress = currentStep / totalSteps * 100;
    return <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-text-secondary">
            <span>
              Step {currentStep} of {totalSteps}
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} type="step" totalSteps={totalSteps} color="primary" />
        </div>
        <div className="flex gap-2">
          <button onClick={() => setCurrentStep(Math.max(1, currentStep - 1))} disabled={currentStep === 1} className="px-4 py-2 bg-surface border border-border rounded disabled:opacity-50">
            Previous
          </button>
          <button onClick={() => setCurrentStep(Math.min(totalSteps, currentStep + 1))} disabled={currentStep === totalSteps} className="px-4 py-2 bg-primary text-white rounded disabled:opacity-50">
            {currentStep === totalSteps ? "Complete" : "Next"}
          </button>
        </div>
      </div>;
  }
}`,...(te=(re=N.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var se,oe,le;_.parameters={..._.parameters,docs:{...(se=_.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: "Custom Circle Size & Stroke",
  render: () => <div className="space-y-8">
      <div>
        <h3 className="text-sm font-semibold mb-4">
          Inline Text Progress (14-20px)
        </h3>
        <div className="space-y-3">
          <p className="text-sm flex items-center gap-2">
            <Progress type="circle" value={75} circleSize={14} strokeWidth={2} color="primary" />
            Loading user data...
          </p>
          <p className="text-base flex items-center gap-2">
            <Progress type="circle" value={50} circleSize={16} strokeWidth={2} color="info" />
            Processing request
          </p>
          <p className="text-lg flex items-center gap-2">
            <Progress type="circle" value={100} circleSize={20} strokeWidth={2.5} color="success" />
            Upload complete
          </p>
          <p className="text-base flex items-center gap-2">
            <Progress type="circle" value={30} circleSize={18} strokeWidth={2} color="warning" />
            Syncing files (30%)
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-4">
          Small Indicators (24-40px)
        </h3>
        <div className="flex gap-4 items-center flex-wrap">
          <div className="flex flex-col items-center gap-1">
            <Progress type="circle" value={25} circleSize={24} strokeWidth={3} color="error" label="10" />
            <span className="text-xs text-text-secondary">24px</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Progress type="circle" value={50} circleSize={32} strokeWidth={3} color="warning" />
            <span className="text-xs text-text-secondary">32px</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Progress type="circle" value={75} circleSize={40} strokeWidth={4} color="info" />
            <span className="text-xs text-text-secondary">40px</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Progress type="circle" value={100} circleSize={48} strokeWidth={4} color="success" />
            <span className="text-xs text-text-secondary">48px</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-4">Custom Large Circles</h3>
        <div className="flex gap-6 items-center flex-wrap">
          <Progress type="circle" value={65} circleSize={100} strokeWidth={6} color="primary" />
          <Progress type="circle" value={80} circleSize={140} strokeWidth={10} color="accent" />
          <Progress type="circle" value={45} circleSize={180} strokeWidth={12} color="secondary" />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-4">
          Stroke Width Variations (same size)
        </h3>
        <div className="flex gap-6 items-center flex-wrap">
          <div className="flex flex-col items-center gap-1">
            <Progress type="circle" value={75} circleSize={60} strokeWidth={2} color="primary" />
            <span className="text-xs text-text-secondary">2px stroke</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Progress type="circle" value={75} circleSize={60} strokeWidth={4} color="primary" />
            <span className="text-xs text-text-secondary">4px stroke</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Progress type="circle" value={75} circleSize={60} strokeWidth={6} color="primary" />
            <span className="text-xs text-text-secondary">6px stroke</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Progress type="circle" value={75} circleSize={60} strokeWidth={10} color="primary" />
            <span className="text-xs text-text-secondary">10px stroke</span>
          </div>
        </div>
      </div>
    </div>
}`,...(le=(oe=_.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ae,ie,ne;U.parameters={...U.parameters,docs:{...(ae=U.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
                        <Progress color={c} size={s} variant={variant} value={65} className="w-48" />
                      </td>)}
                  </tr>)}
              </tbody>
            </table>
          </div>)}
      </div>;
  }
}`,...(ne=(ie=U.parameters)==null?void 0:ie.docs)==null?void 0:ne.source}}};const we=["Primary","WithLabels","StepProgress","StripedAndAnimated","AnimatedLoading","FileUploadSimulation","MultiStepForm","CustomCircleSizes","ColorSizeMatrix"];export{C as AnimatedLoading,U as ColorSizeMatrix,_ as CustomCircleSizes,W as FileUploadSimulation,N as MultiStepForm,k as Primary,z as StepProgress,w as StripedAndAnimated,P as WithLabels,we as __namedExportsOrder,ze as default};
