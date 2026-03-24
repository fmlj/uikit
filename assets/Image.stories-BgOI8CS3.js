import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as ce,r}from"./index-ZH-6pyQh.js";import{c as j}from"./utils-_uLxnvdl.js";import"./_commonjsHelpers-CqkleIqs.js";const s=ce.memo(({src:t,withBlur:x,className:te,classNames:a,fallbackSrc:oe,fetchPriority:N="auto",loading:ie,...o})=>{const[l,y]=r.useState(!1),[le,I]=r.useState(!1),[v,w]=r.useState(!1),S=r.useRef(null);r.useEffect(()=>{y(!1),I(!1),w(!1);const i=S.current;i!=null&&i.complete&&(i==null?void 0:i.naturalWidth)>0&&w(!0)},[t]);const re=()=>{w(!0)},de=()=>{l?I(!0):y(!0)},ne=ie??(N==="high"?"eager":"lazy");if(l&&le)return null;const L=e.jsx("img",{ref:S,onLoad:re,onError:de,src:l?oe:t,className:j("image_image",!v&&"opacity-0",v&&"opacity-100","transition-opacity duration-500 ease-in-out",l&&"image_error",l&&(a==null?void 0:a.error),a==null?void 0:a.image,te),...o,alt:o.alt,loading:ne,fetchPriority:N});return x?e.jsxs("div",{"data-slot":"root",className:j("image_root","relative overflow-hidden",a==null?void 0:a.root),style:{width:o.width?`${o.width}px`:void 0,height:o.height?`${o.height}px`:void 0},children:[!v&&e.jsx("div",{className:j("image_placeholder","absolute inset-0 animate-pulse bg-gradient-to-r from-surface via-background to-surface",a==null?void 0:a.placeholder)}),L]}):L});s.displayName="Image";s.__docgenInfo={description:"",methods:[],displayName:"Image",props:{fetchPriority:{defaultValue:{value:"'auto'",computed:!1},required:!1}}};const be={title:"General/Image",component:s,tags:["autodocs"],argTypes:{src:{control:"text",description:"Image source URL"},alt:{control:"text",description:"Alternative text for the image"},width:{control:"number",description:"Image width in pixels"},height:{control:"number",description:"Image height in pixels"},withBlur:{control:"boolean",description:"Enable blur placeholder while loading"},fallbackSrc:{control:"text",description:"Fallback image URL on error"},fetchPriority:{control:"select",options:["auto","high","low"],description:"Fetch priority hint"}}},d={args:{src:"https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400&h=300&fit=crop",alt:"Sample image",width:400,height:300}},n={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-3",children:"Loading Animation (withBlur)"}),e.jsx("p",{className:"text-xs text-text-secondary mb-3",children:"Shows a pulse animation placeholder while the image loads, then fades in."}),e.jsx(s,{src:"https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&h=500&fit=crop",alt:"Image with loading animation",width:800,height:500,withBlur:!0,className:"rounded-lg"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-3",children:"Without Loading Animation"}),e.jsx(s,{src:"https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=800&h=500&fit=crop",alt:"Image without loading",width:800,height:500,className:"rounded-lg"})]})]})},c={render:()=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-semibold mb-3",children:"object-cover"}),e.jsx("div",{className:"h-48 rounded-lg border overflow-hidden",children:e.jsx(s,{src:"https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400&h=600&fit=crop",alt:"Object fit cover",className:"w-full h-full object-cover"})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-semibold mb-3",children:"object-contain"}),e.jsx("div",{className:"h-48 rounded-lg border overflow-hidden bg-surface",children:e.jsx(s,{src:"https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400&h=600&fit=crop",alt:"Object fit contain",className:"w-full h-full object-contain"})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-semibold mb-3",children:"object-fill"}),e.jsx("div",{className:"h-48 rounded-lg border overflow-hidden",children:e.jsx(s,{src:"https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400&h=600&fit=crop",alt:"Object fit fill",className:"w-full h-full object-fill"})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-semibold mb-3",children:"object-none"}),e.jsx("div",{className:"h-48 rounded-lg border overflow-hidden",children:e.jsx(s,{src:"https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400&h=600&fit=crop",alt:"Object fit none",className:"w-full h-full object-none"})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-semibold mb-3",children:"object-scale-down"}),e.jsx("div",{className:"h-48 rounded-lg border overflow-hidden bg-surface",children:e.jsx(s,{src:"https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400&h=600&fit=crop",alt:"Object fit scale down",className:"w-full h-full object-scale-down"})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-semibold mb-3",children:"object-cover + object-top"}),e.jsx("div",{className:"h-48 rounded-lg border overflow-hidden",children:e.jsx(s,{src:"https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400&h=600&fit=crop",alt:"Object fit cover top",className:"w-full h-full object-cover object-top"})})]})]})},h={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-3",children:"Small (200x150)"}),e.jsx(s,{src:"https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=200&h=150&fit=crop",alt:"Small image",width:200,height:150,withBlur:!0,className:"rounded-lg"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-3",children:"Medium (400x300)"}),e.jsx(s,{src:"https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=400&h=300&fit=crop",alt:"Medium image",width:400,height:300,withBlur:!0,className:"rounded-lg"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-3",children:"Large (800x600)"}),e.jsx(s,{src:"https://images.unsplash.com/photo-1682687221038-404cb8830901?w=800&h=600&fit=crop",alt:"Large image",width:800,height:600,withBlur:!0,className:"rounded-lg"})]})]})},m={render:()=>e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-xs font-semibold mb-2",children:"None"}),e.jsx(s,{src:"https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=300&h=200&fit=crop",alt:"No rounding",width:300,height:200})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-xs font-semibold mb-2",children:"rounded-md"}),e.jsx(s,{src:"https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=300&h=200&fit=crop",alt:"Medium rounding",width:300,height:200,className:"rounded-md"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-xs font-semibold mb-2",children:"rounded-xl"}),e.jsx(s,{src:"https://images.unsplash.com/photo-1682687221038-404cb8830901?w=300&h=200&fit=crop",alt:"XL rounding",width:300,height:200,className:"rounded-xl"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-xs font-semibold mb-2",children:"rounded-full"}),e.jsx(s,{src:"https://images.unsplash.com/photo-1682687220801-eef408f95d71?w=200&h=200&fit=crop",alt:"Full rounding",width:200,height:200,className:"rounded-full"})]})]})},p={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-3",children:"With Fallback Image"}),e.jsx(s,{src:"https://this-will-fail.invalid/nope.jpg",alt:"With fallback",width:400,height:300,fallbackSrc:"https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400&h=300&fit=crop",className:"rounded-lg"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-3",children:"Without Fallback (no broken icon)"}),e.jsx("div",{className:"h-[300px] w-[400px] rounded-lg border border-dashed border-border flex items-center justify-center text-text-secondary text-sm",children:e.jsx(s,{src:"https://this-will-fail.invalid/nope.jpg",alt:"No fallback",width:400,height:300,className:"rounded-lg"})})]})]})},g={render:()=>e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",children:["photo-1682687220742-aba13b6e50ba","photo-1682687220063-4742bd7fd538","photo-1682687221038-404cb8830901","photo-1682687982501-1e58ab814714","photo-1682687982298-c7514a167088","photo-1682687982167-d7fb3ed8541d","photo-1682687982141-0143020ed57a","photo-1682687220801-eef408f95d71"].map((t,x)=>e.jsx("div",{className:"aspect-square overflow-hidden rounded-lg",children:e.jsx(s,{src:`https://images.unsplash.com/${t}?w=300&h=300&fit=crop`,alt:`Gallery image ${x+1}`,className:"w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"})},t))})},b={render:()=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"border rounded-lg overflow-hidden",children:[e.jsx("div",{className:"aspect-square overflow-hidden",children:e.jsx(s,{src:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",alt:"Wireless headphones",className:"w-full h-full object-cover"})}),e.jsxs("div",{className:"p-4",children:[e.jsx("h4",{className:"font-semibold",children:"Wireless Headphones"}),e.jsx("p",{className:"text-sm text-text-secondary mt-1",children:"Premium sound quality"}),e.jsx("p",{className:"text-lg font-bold mt-2",children:"$199.99"})]})]}),e.jsxs("div",{className:"border rounded-lg overflow-hidden",children:[e.jsx("div",{className:"aspect-square overflow-hidden",children:e.jsx(s,{src:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",alt:"Smart watch",className:"w-full h-full object-cover"})}),e.jsxs("div",{className:"p-4",children:[e.jsx("h4",{className:"font-semibold",children:"Smart Watch"}),e.jsx("p",{className:"text-sm text-text-secondary mt-1",children:"Track your fitness goals"}),e.jsx("p",{className:"text-lg font-bold mt-2",children:"$299.99"})]})]}),e.jsxs("div",{className:"border rounded-lg overflow-hidden",children:[e.jsx("div",{className:"aspect-square overflow-hidden",children:e.jsx(s,{src:"https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",alt:"Designer sunglasses",className:"w-full h-full object-cover"})}),e.jsxs("div",{className:"p-4",children:[e.jsx("h4",{className:"font-semibold",children:"Designer Sunglasses"}),e.jsx("p",{className:"text-sm text-text-secondary mt-1",children:"UV protection included"}),e.jsx("p",{className:"text-lg font-bold mt-2",children:"$149.99"})]})]})]})},u={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-3",children:"High Priority (Above the fold)"}),e.jsx(s,{src:"https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&h=400&fit=crop",alt:"High priority image",width:800,height:400,withBlur:!0,fetchPriority:"high",className:"rounded-lg"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-3",children:"Low Priority (Below the fold)"}),e.jsx(s,{src:"https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=800&h=400&fit=crop",alt:"Low priority image",width:800,height:400,withBlur:!0,fetchPriority:"low",className:"rounded-lg"})]})]})},f={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-3",children:"Full Width Responsive"}),e.jsx(s,{src:"https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=1200&h=600&fit=crop",alt:"Full width image",className:"rounded-lg w-full h-auto"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-3",children:"Responsive Grid"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:[1,2,3,4,5,6].map(t=>e.jsx("div",{className:"aspect-video overflow-hidden rounded-lg",children:e.jsx(s,{src:`https://images.unsplash.com/photo-16826872${2e4+t*1e4}?w=400&h=300&fit=crop`,alt:`Responsive image ${t}`,className:"w-full h-full object-cover"})},t))})]})]})};var k,W,B;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    src: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400&h=300&fit=crop',
    alt: 'Sample image',
    width: 400,
    height: 300
  }
}`,...(B=(W=d.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var F,R,$;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold mb-3">Loading Animation (withBlur)</h3>
        <p className="text-xs text-text-secondary mb-3">
          Shows a pulse animation placeholder while the image loads, then fades in.
        </p>
        <Image src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&h=500&fit=crop" alt="Image with loading animation" width={800} height={500} withBlur className="rounded-lg" />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-3">Without Loading Animation</h3>
        <Image src="https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=800&h=500&fit=crop" alt="Image without loading" width={800} height={500} className="rounded-lg" />
      </div>
    </div>
}`,...($=(R=n.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};var O,P,E;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div>
        <h4 className="text-sm font-semibold mb-3">object-cover</h4>
        <div className="h-48 rounded-lg border overflow-hidden">
          <Image src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400&h=600&fit=crop" alt="Object fit cover" className="w-full h-full object-cover" />
        </div>
      </div>
      <div>
        <h4 className="text-sm font-semibold mb-3">object-contain</h4>
        <div className="h-48 rounded-lg border overflow-hidden bg-surface">
          <Image src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400&h=600&fit=crop" alt="Object fit contain" className="w-full h-full object-contain" />
        </div>
      </div>
      <div>
        <h4 className="text-sm font-semibold mb-3">object-fill</h4>
        <div className="h-48 rounded-lg border overflow-hidden">
          <Image src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400&h=600&fit=crop" alt="Object fit fill" className="w-full h-full object-fill" />
        </div>
      </div>
      <div>
        <h4 className="text-sm font-semibold mb-3">object-none</h4>
        <div className="h-48 rounded-lg border overflow-hidden">
          <Image src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400&h=600&fit=crop" alt="Object fit none" className="w-full h-full object-none" />
        </div>
      </div>
      <div>
        <h4 className="text-sm font-semibold mb-3">object-scale-down</h4>
        <div className="h-48 rounded-lg border overflow-hidden bg-surface">
          <Image src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400&h=600&fit=crop" alt="Object fit scale down" className="w-full h-full object-scale-down" />
        </div>
      </div>
      <div>
        <h4 className="text-sm font-semibold mb-3">object-cover + object-top</h4>
        <div className="h-48 rounded-lg border overflow-hidden">
          <Image src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400&h=600&fit=crop" alt="Object fit cover top" className="w-full h-full object-cover object-top" />
        </div>
      </div>
    </div>
}`,...(E=(P=c.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var q,A,D;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold mb-3">Small (200x150)</h3>
        <Image src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=200&h=150&fit=crop" alt="Small image" width={200} height={150} withBlur className="rounded-lg" />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-3">Medium (400x300)</h3>
        <Image src="https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=400&h=300&fit=crop" alt="Medium image" width={400} height={300} withBlur className="rounded-lg" />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-3">Large (800x600)</h3>
        <Image src="https://images.unsplash.com/photo-1682687221038-404cb8830901?w=800&h=600&fit=crop" alt="Large image" width={800} height={600} withBlur className="rounded-lg" />
      </div>
    </div>
}`,...(D=(A=h.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var H,_,G;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div>
        <h4 className="text-xs font-semibold mb-2">None</h4>
        <Image src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=300&h=200&fit=crop" alt="No rounding" width={300} height={200} />
      </div>
      <div>
        <h4 className="text-xs font-semibold mb-2">rounded-md</h4>
        <Image src="https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=300&h=200&fit=crop" alt="Medium rounding" width={300} height={200} className="rounded-md" />
      </div>
      <div>
        <h4 className="text-xs font-semibold mb-2">rounded-xl</h4>
        <Image src="https://images.unsplash.com/photo-1682687221038-404cb8830901?w=300&h=200&fit=crop" alt="XL rounding" width={300} height={200} className="rounded-xl" />
      </div>
      <div>
        <h4 className="text-xs font-semibold mb-2">rounded-full</h4>
        <Image src="https://images.unsplash.com/photo-1682687220801-eef408f95d71?w=200&h=200&fit=crop" alt="Full rounding" width={200} height={200} className="rounded-full" />
      </div>
    </div>
}`,...(G=(_=m.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var M,V,U;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold mb-3">With Fallback Image</h3>
        <Image src="https://this-will-fail.invalid/nope.jpg" alt="With fallback" width={400} height={300} fallbackSrc="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400&h=300&fit=crop" className="rounded-lg" />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-3">Without Fallback (no broken icon)</h3>
        <div className="h-[300px] w-[400px] rounded-lg border border-dashed border-border flex items-center justify-center text-text-secondary text-sm">
          <Image src="https://this-will-fail.invalid/nope.jpg" alt="No fallback" width={400} height={300} className="rounded-lg" />
        </div>
      </div>
    </div>
}`,...(U=(V=p.parameters)==null?void 0:V.docs)==null?void 0:U.source}}};var z,T,C;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {['photo-1682687220742-aba13b6e50ba', 'photo-1682687220063-4742bd7fd538', 'photo-1682687221038-404cb8830901', 'photo-1682687982501-1e58ab814714', 'photo-1682687982298-c7514a167088', 'photo-1682687982167-d7fb3ed8541d', 'photo-1682687982141-0143020ed57a', 'photo-1682687220801-eef408f95d71'].map((id, index) => <div key={id} className="aspect-square overflow-hidden rounded-lg">
          <Image src={\`https://images.unsplash.com/\${id}?w=300&h=300&fit=crop\`} alt={\`Gallery image \${index + 1}\`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer" />
        </div>)}
    </div>
}`,...(C=(T=g.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var X,J,K;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="border rounded-lg overflow-hidden">
        <div className="aspect-square overflow-hidden">
          <Image src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop" alt="Wireless headphones" className="w-full h-full object-cover" />
        </div>
        <div className="p-4">
          <h4 className="font-semibold">Wireless Headphones</h4>
          <p className="text-sm text-text-secondary mt-1">Premium sound quality</p>
          <p className="text-lg font-bold mt-2">$199.99</p>
        </div>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <div className="aspect-square overflow-hidden">
          <Image src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop" alt="Smart watch" className="w-full h-full object-cover" />
        </div>
        <div className="p-4">
          <h4 className="font-semibold">Smart Watch</h4>
          <p className="text-sm text-text-secondary mt-1">Track your fitness goals</p>
          <p className="text-lg font-bold mt-2">$299.99</p>
        </div>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <div className="aspect-square overflow-hidden">
          <Image src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop" alt="Designer sunglasses" className="w-full h-full object-cover" />
        </div>
        <div className="p-4">
          <h4 className="font-semibold">Designer Sunglasses</h4>
          <p className="text-sm text-text-secondary mt-1">UV protection included</p>
          <p className="text-lg font-bold mt-2">$149.99</p>
        </div>
      </div>
    </div>
}`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,Y,Z;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold mb-3">High Priority (Above the fold)</h3>
        <Image src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&h=400&fit=crop" alt="High priority image" width={800} height={400} withBlur fetchPriority="high" className="rounded-lg" />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-3">Low Priority (Below the fold)</h3>
        <Image src="https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=800&h=400&fit=crop" alt="Low priority image" width={800} height={400} withBlur fetchPriority="low" className="rounded-lg" />
      </div>
    </div>
}`,...(Z=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,se,ae;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold mb-3">Full Width Responsive</h3>
        <Image src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=1200&h=600&fit=crop" alt="Full width image" className="rounded-lg w-full h-auto" />
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-3">Responsive Grid</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map(id => <div key={id} className="aspect-video overflow-hidden rounded-lg">
              <Image src={\`https://images.unsplash.com/photo-16826872\${20000 + id * 10000}?w=400&h=300&fit=crop\`} alt={\`Responsive image \${id}\`} className="w-full h-full object-cover" />
            </div>)}
        </div>
      </div>
    </div>
}`,...(ae=(se=f.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};const ue=["Default","WithLoadingAnimation","ObjectFitVariants","DifferentSizes","WithRoundedCorners","ErrorHandling","ImageGallery","ProductImages","FetchPriority","ResponsiveImages"];export{d as Default,h as DifferentSizes,p as ErrorHandling,u as FetchPriority,g as ImageGallery,c as ObjectFitVariants,b as ProductImages,f as ResponsiveImages,n as WithLoadingAnimation,m as WithRoundedCorners,ue as __namedExportsOrder,be as default};
