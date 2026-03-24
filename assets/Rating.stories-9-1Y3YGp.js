import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as ie,r as c}from"./index-ZH-6pyQh.js";import{c as g,a as oe}from"./utils-_uLxnvdl.js";import{u as ce}from"./useControllable-BTRR6hV3.js";import{S as D}from"./star-CXKHNDnr.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createLucideIcon-BXJdBs6C.js";const de=oe("inline-flex items-center gap-1",{variants:{size:{xs:"text-xs",sm:"text-sm",md:"text-base",lg:"text-lg"}},defaultVariants:{size:"md"}}),h={xs:12,sm:16,md:20,lg:24},q={default:"fill-border",primary:"fill-primary",secondary:"fill-secondary",accent:"fill-accent",success:"fill-success",error:"fill-error",warning:"fill-warning",info:"fill-info"},I={default:"stroke-border",primary:"stroke-primary",secondary:"stroke-secondary",accent:"stroke-accent",success:"stroke-success",error:"stroke-error",warning:"stroke-warning",info:"stroke-info"},O=(t,a,u,n)=>{const p=u||n?"filled":"empty",l=I[t]||I.default,f=q[t]||q.default;return p==="empty"?a==="solid"?t==="default"?"fill-transparent stroke-border":`fill-transparent ${l} opacity-20`:a==="soft"?t==="default"?"fill-transparent stroke-border/50":`fill-transparent ${l} opacity-20`:t==="default"?"fill-transparent stroke-border":`fill-transparent ${l} opacity-20`:a==="solid"?t==="default"?"fill-border stroke-border":`${f} ${l}`:a==="soft"?t==="default"?"fill-border/50 stroke-border":`${f} opacity-20 ${l}`:t==="default"?"fill-border stroke-border":`${f} ${l}`},m=ie.memo(({value:t,defaultValue:a=0,count:u=5,allowHalf:n=!1,color:p="warning",size:l="md",variant:f="solid",onChange:Q,disabled:k=!1,readOnly:X=!1,className:Z,classNames:o,"aria-label":ee})=>{const[x,C]=ce({value:t,defaultValue:a,onChange:Q}),[v,S]=c.useState(null),te=c.useId(),V=v!==null?v:x??0,d=!k&&!X,b=c.useCallback(r=>{d&&C(r)},[d,C]),$=c.useCallback((r,s)=>{if(!d)return;const i=s?r+.5:r+1;b(i)},[d,b]),H=c.useCallback((r,s)=>{if(!d)return;const i=s?r+.5:r+1;S(i)},[d]),ae=c.useCallback(()=>{S(null)},[]),se=c.useCallback(r=>{if(!d)return;const s=n?.5:1;let i=x??0;switch(r.key){case"ArrowRight":case"ArrowUp":r.preventDefault(),i=Math.min((x??0)+s,u);break;case"ArrowLeft":case"ArrowDown":r.preventDefault(),i=Math.max((x??0)-s,0);break;case"Home":r.preventDefault(),i=0;break;case"End":r.preventDefault(),i=u;break;default:return}b(i)},[d,x,u,n,b]),re=c.useCallback(r=>{const s=V-r;return s>=1?"full":s>0&&s<1?"half":"empty"},[V]);return e.jsx("div",{"data-slot":"root",className:g(de({size:l}),"rating_root",o==null?void 0:o.root,Z),children:e.jsx("div",{id:`rating-${te}`,role:"radiogroup","aria-label":ee||"Rating",tabIndex:d?0:-1,onKeyDown:se,onMouseLeave:ae,className:g("inline-flex items-center gap-0.5 outline-none","rating_label",o==null?void 0:o.label,d&&"focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"),children:Array.from({length:u},(r,s)=>{const i=re(s),ne=v!==null&&s<Math.ceil(v),z=s+1,le=i!=="empty";return e.jsxs("div",{role:"radio","aria-checked":le,"aria-label":`${z} ${z===1?"star":"stars"}`,className:g("relative inline-flex",d&&"cursor-pointer",k&&"opacity-50 cursor-not-allowed"),children:[n&&e.jsx("div",{className:"absolute inset-0 w-1/2 z-10",onClick:()=>$(s,!0),onMouseEnter:()=>H(s,!0)}),e.jsx("div",{className:g("absolute inset-0 z-10",n?"left-1/2":"left-0"),onClick:()=>$(s,!1),onMouseEnter:()=>H(s,!1)}),e.jsx(D,{width:h[l],height:h[l],className:g(O(p,f,!1,!1),"transition-colors","rating_star",o==null?void 0:o.star),"aria-hidden":"true"}),i!=="empty"&&e.jsx(D,{width:h[l],height:h[l],className:g("absolute top-0 left-0 transition-colors",O(p,f,!0,ne),"rating_starFilled",o==null?void 0:o.starFilled),style:{clipPath:i==="half"?"polygon(0 0, 50% 0, 50% 100%, 0 100%)":"none"},"aria-hidden":"true"})]},s)})})})});m.displayName="Rating";m.__docgenInfo={description:"",methods:[],displayName:"Rating",props:{defaultValue:{defaultValue:{value:"0",computed:!1},required:!1},count:{defaultValue:{value:"5",computed:!1},required:!1},allowHalf:{defaultValue:{value:"false",computed:!1},required:!1},color:{defaultValue:{value:"'warning'",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1},variant:{defaultValue:{value:"'solid'",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},readOnly:{defaultValue:{value:"false",computed:!1},required:!1}}};const be={title:"Data Entry/Rating",component:m,tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:5,step:.5},description:"Current rating value"},defaultValue:{control:{type:"range",min:0,max:5,step:.5},description:"Default rating value (uncontrolled)"},count:{control:{type:"number",min:3,max:10},description:"Number of stars"},allowHalf:{control:"boolean",description:"Allow half-star ratings"},color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"],description:"Star color"},size:{control:"select",options:["xs","sm","md","lg"],description:"Star size"},variant:{control:"select",options:["default","solid","soft"],description:"Visual style variant"},disabled:{control:"boolean",description:"Disabled state"},readOnly:{control:"boolean",description:"Read-only state"}}},y={args:{value:3.5,allowHalf:!0,color:"warning",size:"md"}},w={render:()=>{const[t,a]=c.useState(3);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-sm font-semibold",children:"Rate this:"}),e.jsx(m,{value:t,onChange:a}),e.jsx("span",{className:"text-sm text-text-secondary",children:t>0?`${t} out of 5 stars`:"No rating yet"})]}),e.jsx("button",{onClick:()=>a(0),className:"px-4 py-2 bg-surface border border-border rounded text-sm",children:"Clear Rating"})]})}},N={render:()=>{const[t,a]=c.useState(3.5);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-sm font-semibold",children:"Your rating:"}),e.jsx(m,{value:t,onChange:a,allowHalf:!0,size:"lg"}),e.jsx("span",{className:"text-sm text-text-secondary",children:t>0?`${t} / 5.0`:"Not rated"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>a(5),className:"px-3 py-1 bg-success text-white rounded text-sm",children:"5 Stars"}),e.jsx("button",{onClick:()=>a(3.5),className:"px-3 py-1 bg-primary text-white rounded text-sm",children:"3.5 Stars"}),e.jsx("button",{onClick:()=>a(0),className:"px-3 py-1 bg-surface border border-border rounded text-sm",children:"Clear"})]})]})}},R={render:()=>{const[t,a]=c.useState(0),[u,n]=c.useState(!1),p=()=>{t>0&&n(!0)},l=()=>{a(0),n(!1)};return e.jsxs("div",{className:"max-w-md p-6 border border-border rounded-lg space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Rate this product"}),e.jsx("p",{className:"text-sm text-text-secondary",children:"Share your experience with other customers"}),u?e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"p-4 bg-success/10 border border-success rounded text-sm text-success",children:"Thank you for your rating!"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-sm",children:"Your rating:"}),e.jsx(m,{value:t,readOnly:!0,allowHalf:!0}),e.jsxs("span",{className:"text-sm font-medium",children:[t," stars"]})]}),e.jsx("button",{onClick:l,className:"text-sm text-primary hover:underline",children:"Change rating"})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(m,{value:t,onChange:a,size:"lg",allowHalf:!0}),t>0&&e.jsxs("span",{className:"text-sm font-medium",children:[t," stars"]})]}),e.jsx("button",{onClick:p,disabled:t===0,className:"w-full px-4 py-2 bg-primary text-white rounded disabled:opacity-50",children:"Submit Rating"})]})]})}},j={render:()=>{const t=[{stars:5,count:245,percentage:70},{stars:4,count:68,percentage:19},{stars:3,count:21,percentage:6},{stars:2,count:11,percentage:3},{stars:1,count:7,percentage:2}],a=4.5;return e.jsx("div",{className:"max-w-2xl p-6 border border-border rounded-lg space-y-6",children:e.jsxs("div",{className:"flex items-start gap-6",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-4xl font-bold",children:a}),e.jsx(m,{value:a,allowHalf:!0,readOnly:!0,size:"lg"}),e.jsxs("div",{className:"text-sm text-text-secondary mt-2",children:[352," reviews"]})]}),e.jsx("div",{className:"flex-1 space-y-2",children:t.map(n=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-sm w-6",children:n.stars}),e.jsx(m,{value:1,count:1,readOnly:!0,size:"xs"}),e.jsx("div",{className:"flex-1 bg-surface rounded-full h-2 overflow-hidden",children:e.jsx("div",{className:"h-full bg-warning",style:{width:`${n.percentage}%`}})}),e.jsx("span",{className:"text-sm text-text-secondary w-12 text-right",children:n.count})]},n.stars))})]})})}};var _,E,M;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    value: 3.5,
    allowHalf: true,
    color: 'warning',
    size: 'md'
  }
}`,...(M=(E=y.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var A,P,F;w.parameters={...w.parameters,docs:{...(A=w.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const [rating, setRating] = useState(3);
    return <div className="space-y-4">
        <div className="flex items-center gap-4">
          <span className="text-sm font-semibold">Rate this:</span>
          <Rating value={rating} onChange={setRating} />
          <span className="text-sm text-text-secondary">
            {rating > 0 ? \`\${rating} out of 5 stars\` : 'No rating yet'}
          </span>
        </div>
        <button onClick={() => setRating(0)} className="px-4 py-2 bg-surface border border-border rounded text-sm">
          Clear Rating
        </button>
      </div>;
  }
}`,...(F=(P=w.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var T,W,Y;N.parameters={...N.parameters,docs:{...(T=N.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const [rating, setRating] = useState(3.5);
    return <div className="space-y-4">
        <div className="flex items-center gap-4">
          <span className="text-sm font-semibold">Your rating:</span>
          <Rating value={rating} onChange={setRating} allowHalf size="lg" />
          <span className="text-sm text-text-secondary">
            {rating > 0 ? \`\${rating} / 5.0\` : 'Not rated'}
          </span>
        </div>
        <div className="flex gap-2">
          <button onClick={() => setRating(5)} className="px-3 py-1 bg-success text-white rounded text-sm">
            5 Stars
          </button>
          <button onClick={() => setRating(3.5)} className="px-3 py-1 bg-primary text-white rounded text-sm">
            3.5 Stars
          </button>
          <button onClick={() => setRating(0)} className="px-3 py-1 bg-surface border border-border rounded text-sm">
            Clear
          </button>
        </div>
      </div>;
  }
}`,...(Y=(W=N.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};var L,K,U;R.parameters={...R.parameters,docs:{...(L=R.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const [rating, setRating] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
      if (rating > 0) {
        setSubmitted(true);
      }
    };
    const handleReset = () => {
      setRating(0);
      setSubmitted(false);
    };
    return <div className="max-w-md p-6 border border-border rounded-lg space-y-4">
        <h3 className="text-lg font-semibold">Rate this product</h3>
        <p className="text-sm text-text-secondary">
          Share your experience with other customers
        </p>

        {!submitted ? <>
            <div className="flex items-center gap-4">
              <Rating value={rating} onChange={setRating} size="lg" allowHalf />
              {rating > 0 && <span className="text-sm font-medium">{rating} stars</span>}
            </div>
            <button onClick={handleSubmit} disabled={rating === 0} className="w-full px-4 py-2 bg-primary text-white rounded disabled:opacity-50">
              Submit Rating
            </button>
          </> : <div className="space-y-3">
            <div className="p-4 bg-success/10 border border-success rounded text-sm text-success">
              Thank you for your rating!
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm">Your rating:</span>
              <Rating value={rating} readOnly allowHalf />
              <span className="text-sm font-medium">{rating} stars</span>
            </div>
            <button onClick={handleReset} className="text-sm text-primary hover:underline">
              Change rating
            </button>
          </div>}
      </div>;
  }
}`,...(U=(K=R.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var B,G,J;j.parameters={...j.parameters,docs:{...(B=j.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const reviews = [{
      stars: 5,
      count: 245,
      percentage: 70
    }, {
      stars: 4,
      count: 68,
      percentage: 19
    }, {
      stars: 3,
      count: 21,
      percentage: 6
    }, {
      stars: 2,
      count: 11,
      percentage: 3
    }, {
      stars: 1,
      count: 7,
      percentage: 2
    }];
    const averageRating = 4.5;
    const totalReviews = 352;
    return <div className="max-w-2xl p-6 border border-border rounded-lg space-y-6">
        <div className="flex items-start gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold">{averageRating}</div>
            <Rating value={averageRating} allowHalf readOnly size="lg" />
            <div className="text-sm text-text-secondary mt-2">
              {totalReviews} reviews
            </div>
          </div>

          <div className="flex-1 space-y-2">
            {reviews.map(review => <div key={review.stars} className="flex items-center gap-3">
                <span className="text-sm w-6">{review.stars}</span>
                <Rating value={1} count={1} readOnly size="xs" />
                <div className="flex-1 bg-surface rounded-full h-2 overflow-hidden">
                  <div className="h-full bg-warning" style={{
                width: \`\${review.percentage}%\`
              }} />
                </div>
                <span className="text-sm text-text-secondary w-12 text-right">
                  {review.count}
                </span>
              </div>)}
          </div>
        </div>
      </div>;
  }
}`,...(J=(G=j.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const he=["Primary","Interactive","InteractiveWithHalfStars","ProductReview","RatingWithReviews"];export{w as Interactive,N as InteractiveWithHalfStars,y as Primary,R as ProductReview,j as RatingWithReviews,he as __namedExportsOrder,be as default};
