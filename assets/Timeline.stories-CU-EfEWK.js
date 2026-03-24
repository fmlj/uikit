import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{c as r,i as he,a as xe}from"./utils-_uLxnvdl.js";import{R as we}from"./index-ZH-6pyQh.js";import{c as le}from"./variants-C8qliDOr.js";import{C as n}from"./circle-check-big-Ba-B0jqG.js";import{P as j}from"./package-VF3mML-c.js";import{T as z}from"./truck-BzJC0TNF.js";import{H as ne}from"./house-DCjPrFcn.js";import{C as S}from"./clock-BcXKPbe9.js";import{C as ge}from"./circle-x-CRNxQz7z.js";import{C as ve}from"./circle-alert-C1u21Jbx.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createLucideIcon-BXJdBs6C.js";const C=xe("rounded-full shrink-0 flex items-center justify-center z-10 bg-slot",{variants:{size:{xs:"w-2 h-2",sm:"w-3 h-3",md:"w-4 h-4",lg:"w-5 h-5"},color:le},defaultVariants:{size:"md",color:"default"}}),p={xs:{vertical:"w-px",horizontal:"h-px"},sm:{vertical:"w-px",horizontal:"h-px"},md:{vertical:"w-0.5",horizontal:"h-0.5"},lg:{vertical:"w-0.5",horizontal:"h-0.5"}},H={xs:"w-4",sm:"w-5",md:"w-6",lg:"w-7"},a={xs:"text-xs",sm:"text-sm",md:"text-base",lg:"text-lg"},_={xs:"text-[10px]",sm:"text-xs",md:"text-sm",lg:"text-base"},je={xs:"w-5 h-5",sm:"w-6 h-6",md:"w-8 h-8",lg:"w-10 h-10"},Y={xs:"min-h-5",sm:"min-h-6",md:"min-h-8",lg:"min-h-10"},y=we.memo(({items:T,mode:s="left",orientation:ae="vertical",size:o="md",color:M="default",pending:d=!1,pendingText:b="Loading...",reverse:se=!1,className:A,classNames:e,ref:I})=>{const de=ae==="horizontal",c=se?[...T].reverse():T,O=(i,l)=>i.dot?t.jsx("div",{className:r("timeline_dot","shrink-0 z-10",e==null?void 0:e.dot),"data-slot":"dot",children:i.dot}):i.icon?t.jsx("div",{className:r("timeline_dot","rounded-full shrink-0 flex items-center justify-center z-10 bg-slot text-slot-fg",le[l],je[o],e==null?void 0:e.dot),"data-slot":"dot",children:t.jsx("span",{className:r("timeline_icon","flex items-center justify-center",he[o],e==null?void 0:e.icon),"data-slot":"icon",children:i.icon})}):t.jsx("div",{className:r("timeline_dot",C({size:o,color:l}),e==null?void 0:e.dot),"data-slot":"dot"}),D=(i,l)=>t.jsxs("div",{className:r("timeline_content",a[o],l==="right"?"text-right":"text-left",e==null?void 0:e.content),"data-slot":"content",children:[t.jsx("div",{className:r("timeline_title","font-semibold text-text-primary -mt-1",i.description&&"mb-1",e==null?void 0:e.title),"data-slot":"title",children:i.title}),i.description&&t.jsx("div",{className:r("timeline_description","text-text-secondary",e==null?void 0:e.description),"data-slot":"description",children:i.description})]}),J=(i,l)=>i.timestamp?t.jsx("div",{className:r("timeline_date","text-text-secondary",_[o],l==="right"?"text-right":"text-left",e==null?void 0:e.date),"data-slot":"date",children:i.timestamp}):null,me=(i,l)=>{const k=l===c.length-1&&!d,P=i.color||M,m=s==="left"||s==="center"&&l%2===0;return t.jsxs("div",{className:r("timeline_item","grid grid-cols-[1fr_auto_1fr]",e==null?void 0:e.item),"data-slot":"item",children:[t.jsx("div",{className:"pb-8 pr-4",children:m?J(i,"right"):D(i,"right")}),t.jsxs("div",{className:r("timeline_track","relative flex flex-col items-center",H[o]),children:[O(i,P),!k&&t.jsx("div",{className:r("timeline_connector","flex-1 bg-border",p[o].vertical,e==null?void 0:e.connector),"data-slot":"connector"})]}),t.jsx("div",{className:"pb-8 pl-4",children:m?D(i,"left"):J(i,"left")})]},i.key??l)},pe=()=>{const i=c.length,l=s==="left"||s==="center"&&i%2===0;return t.jsxs("div",{className:r("timeline_item","grid grid-cols-[1fr_auto_1fr]",e==null?void 0:e.item),"data-slot":"item",children:[t.jsx("div",{className:"pr-4",children:!l&&t.jsx("div",{className:r("text-text-secondary text-right",a[o]),children:b})}),t.jsx("div",{className:r("timeline_track","relative flex flex-col items-center",H[o]),children:t.jsx("div",{className:r("timeline_dot",C({size:o,color:"default"}),"animate-pulse",e==null?void 0:e.dot),"data-slot":"dot"})}),t.jsx("div",{className:"pl-4",children:l&&t.jsx("div",{className:r("text-text-secondary",a[o],e==null?void 0:e.content),children:b})})]})},ue=(i,l)=>{const k=l===0,P=l===c.length-1&&!d,m=i.color||M;return t.jsxs("div",{className:r("timeline_item","flex-1 flex flex-col items-center min-w-0",e==null?void 0:e.item),"data-slot":"item",children:[t.jsx("div",{className:r("timeline_date","text-text-secondary text-center mb-2",_[o],e==null?void 0:e.date),"data-slot":"date",children:i.timestamp||" "}),t.jsxs("div",{className:r("flex items-center w-full",Y[o]),children:[t.jsx("div",{className:r("flex-1",!k&&r("bg-border",p[o].horizontal))}),O(i,m),t.jsx("div",{className:r("flex-1",!P&&r("bg-border",p[o].horizontal))})]}),t.jsxs("div",{className:r("timeline_content","text-center mt-1.5",a[o],e==null?void 0:e.content),"data-slot":"content",children:[t.jsx("div",{className:r("timeline_title","font-semibold text-text-primary",i.description&&"mb-1",e==null?void 0:e.title),"data-slot":"title",children:i.title}),i.description&&t.jsx("div",{className:r("timeline_description","text-text-secondary",e==null?void 0:e.description),"data-slot":"description",children:i.description})]})]},i.key??l)},fe=()=>t.jsxs("div",{className:r("timeline_item","flex-1 flex flex-col items-center min-w-0",e==null?void 0:e.item),"data-slot":"item",children:[t.jsx("div",{className:r("text-text-secondary text-center mb-2",_[o]),children:" "}),t.jsxs("div",{className:r("flex items-center w-full",Y[o]),children:[t.jsx("div",{className:r("flex-1 bg-border",p[o].horizontal)}),t.jsx("div",{className:r("timeline_dot",C({size:o,color:"default"}),"animate-pulse",e==null?void 0:e.dot),"data-slot":"dot"}),t.jsx("div",{className:"flex-1 h-0"})]}),t.jsx("div",{className:r("timeline_content","text-center mt-1.5 text-text-secondary",a[o],e==null?void 0:e.content),"data-slot":"content",children:b})]});return de?t.jsxs("div",{ref:I,className:r("timeline_root","relative flex w-full",e==null?void 0:e.root,A),"data-slot":"root",children:[c.map((i,l)=>ue(i,l)),d&&fe()]}):t.jsxs("div",{ref:I,className:r("timeline_root","relative",e==null?void 0:e.root,A),"data-slot":"root",children:[c.map((i,l)=>me(i,l)),d&&pe()]})});y.displayName="Timeline";y.__docgenInfo={description:"",methods:[],displayName:"Timeline",props:{mode:{defaultValue:{value:'"left"',computed:!1},required:!1},orientation:{defaultValue:{value:'"vertical"',computed:!1},required:!1},size:{defaultValue:{value:'"md"',computed:!1},required:!1},color:{defaultValue:{value:'"default"',computed:!1},required:!1},pending:{defaultValue:{value:"false",computed:!1},required:!1},pendingText:{defaultValue:{value:'"Loading..."',computed:!1},required:!1},reverse:{defaultValue:{value:"false",computed:!1},required:!1}}};const De={title:"Data Display/Timeline",component:y,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{mode:{control:"select",options:["left","right","center"],description:"Layout mode for the timeline"},orientation:{control:"select",options:["vertical","horizontal"],description:"Timeline orientation"},size:{control:"select",options:["xs","sm","md","lg"],description:"Size of timeline elements"},color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"],description:"Default color for timeline items"},pending:{control:"boolean",description:"Show pending indicator at the end"},reverse:{control:"boolean",description:"Reverse the order of items"}}},ce=[{title:"Project Created",description:"Initial project setup and repository creation",timestamp:"2024-01-15"},{title:"Design Phase",description:"Completed UI/UX design and wireframes",timestamp:"2024-01-20"},{title:"Development Started",description:"Backend API and database schema implementation",timestamp:"2024-01-25"},{title:"Beta Release",description:"Released beta version to selected users",timestamp:"2024-02-01"}],u={args:{items:ce,size:"md",color:"primary"}},f={args:{size:"md",items:[{title:"Order Confirmed",description:"Your order has been confirmed and is being prepared",timestamp:"10:30 AM",icon:t.jsx(n,{className:"w-full h-full text-white"}),color:"success"},{title:"Processing",description:"Your order is being processed",timestamp:"11:00 AM",icon:t.jsx(S,{className:"w-full h-full text-white"}),color:"info"},{title:"Shipped",description:"Your order has been shipped",timestamp:"2:30 PM",icon:t.jsx(j,{className:"w-full h-full text-white"}),color:"primary"},{title:"Out for Delivery",description:"Your order is out for delivery",timestamp:"4:00 PM",icon:t.jsx(z,{className:"w-full h-full text-white"}),color:"warning"}]}},h={parameters:{layout:"padded"},args:{orientation:"horizontal",size:"md",color:"primary",items:ce}},x={parameters:{layout:"padded"},args:{orientation:"horizontal",size:"md",items:[{title:"Order Placed",timestamp:"Jan 28",icon:t.jsx(n,{className:"w-full h-full text-white"}),color:"success"},{title:"Processing",timestamp:"Jan 29",icon:t.jsx(S,{className:"w-full h-full text-white"}),color:"info"},{title:"Shipped",timestamp:"Jan 30",icon:t.jsx(j,{className:"w-full h-full text-white"}),color:"primary"},{title:"Delivered",timestamp:"Feb 1",icon:t.jsx(ne,{className:"w-full h-full text-white"}),color:"success"}]}},w={parameters:{layout:"padded"},args:{orientation:"horizontal",size:"md",pending:!0,pendingText:"In Transit",items:[{title:"Ordered",timestamp:"Mon",icon:t.jsx(n,{className:"w-full h-full text-white"}),color:"success"},{title:"Packed",timestamp:"Tue",icon:t.jsx(j,{className:"w-full h-full text-white"}),color:"success"}]}},g={render:()=>t.jsxs("div",{className:"max-w-2xl",children:[t.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Order Tracking"}),t.jsx(y,{mode:"left",size:"md",items:[{title:"Order Placed",description:"Your order has been successfully placed",timestamp:"Jan 28, 2024 - 10:30 AM",icon:t.jsx(n,{className:"w-full h-full text-white"}),color:"success"},{title:"Payment Confirmed",description:"Payment received and verified",timestamp:"Jan 28, 2024 - 10:31 AM",icon:t.jsx(n,{className:"w-full h-full text-white"}),color:"success"},{title:"Processing Order",description:"Your items are being prepared for shipment",timestamp:"Jan 28, 2024 - 11:00 AM",icon:t.jsx(j,{className:"w-full h-full text-white"}),color:"info"},{title:"Shipped",description:t.jsxs("div",{children:[t.jsx("p",{children:"Your package has been shipped"}),t.jsx("p",{className:"text-xs mt-1 font-mono",children:"Tracking: #TRK123456789"})]}),timestamp:"Jan 29, 2024 - 2:30 PM",icon:t.jsx(z,{className:"w-full h-full text-white"}),color:"primary"},{title:"Out for Delivery",description:"Package is out for delivery to your address",timestamp:"Jan 30, 2024 - 8:00 AM",icon:t.jsx(z,{className:"w-full h-full text-white"}),color:"warning"},{title:"Delivered",description:"Package delivered successfully",timestamp:"Expected: Jan 30, 2024 - 5:00 PM",icon:t.jsx(ne,{className:"w-full h-full text-white"}),color:"default"}]})]})},v={args:{size:"md",items:[{title:"Build Started",description:"Starting build process",icon:t.jsx(S,{className:"w-full h-full text-white"}),color:"info",timestamp:"10:00:00"},{title:"Dependencies Installed",description:"All packages installed successfully",icon:t.jsx(n,{className:"w-full h-full text-white"}),color:"success",timestamp:"10:02:15"},{title:"Build Failed",description:"TypeScript compilation error in src/components/Header.tsx",icon:t.jsx(ge,{className:"w-full h-full text-white"}),color:"error",timestamp:"10:05:42"},{title:"Retry Build",description:"Attempting to rebuild after fixing errors",icon:t.jsx(ve,{className:"w-full h-full text-white"}),color:"warning",timestamp:"10:08:00"}]}};var R,V,B;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    items: basicItems,
    size: 'md',
    color: 'primary'
  }
}`,...(B=(V=u.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var q,F,W;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    size: 'md',
    items: [{
      title: 'Order Confirmed',
      description: 'Your order has been confirmed and is being prepared',
      timestamp: '10:30 AM',
      icon: <CheckCircle className="w-full h-full text-white" />,
      color: 'success'
    }, {
      title: 'Processing',
      description: 'Your order is being processed',
      timestamp: '11:00 AM',
      icon: <Clock className="w-full h-full text-white" />,
      color: 'info'
    }, {
      title: 'Shipped',
      description: 'Your order has been shipped',
      timestamp: '2:30 PM',
      icon: <Package className="w-full h-full text-white" />,
      color: 'primary'
    }, {
      title: 'Out for Delivery',
      description: 'Your order is out for delivery',
      timestamp: '4:00 PM',
      icon: <Truck className="w-full h-full text-white" />,
      color: 'warning'
    }]
  }
}`,...(W=(F=f.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var E,L,X;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  args: {
    orientation: 'horizontal',
    size: 'md',
    color: 'primary',
    items: basicItems
  }
}`,...(X=(L=h.parameters)==null?void 0:L.docs)==null?void 0:X.source}}};var K,U,G;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  args: {
    orientation: 'horizontal',
    size: 'md',
    items: [{
      title: 'Order Placed',
      timestamp: 'Jan 28',
      icon: <CheckCircle className="w-full h-full text-white" />,
      color: 'success'
    }, {
      title: 'Processing',
      timestamp: 'Jan 29',
      icon: <Clock className="w-full h-full text-white" />,
      color: 'info'
    }, {
      title: 'Shipped',
      timestamp: 'Jan 30',
      icon: <Package className="w-full h-full text-white" />,
      color: 'primary'
    }, {
      title: 'Delivered',
      timestamp: 'Feb 1',
      icon: <Home className="w-full h-full text-white" />,
      color: 'success'
    }]
  }
}`,...(G=(U=x.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var Q,Z,$;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  args: {
    orientation: 'horizontal',
    size: 'md',
    pending: true,
    pendingText: 'In Transit',
    items: [{
      title: 'Ordered',
      timestamp: 'Mon',
      icon: <CheckCircle className="w-full h-full text-white" />,
      color: 'success'
    }, {
      title: 'Packed',
      timestamp: 'Tue',
      icon: <Package className="w-full h-full text-white" />,
      color: 'success'
    }]
  }
}`,...($=(Z=w.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var N,ee,te;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="max-w-2xl">
      <h2 className="text-2xl font-bold mb-6">Order Tracking</h2>
      <Timeline mode="left" size="md" items={[{
      title: 'Order Placed',
      description: 'Your order has been successfully placed',
      timestamp: 'Jan 28, 2024 - 10:30 AM',
      icon: <CheckCircle className="w-full h-full text-white" />,
      color: 'success'
    }, {
      title: 'Payment Confirmed',
      description: 'Payment received and verified',
      timestamp: 'Jan 28, 2024 - 10:31 AM',
      icon: <CheckCircle className="w-full h-full text-white" />,
      color: 'success'
    }, {
      title: 'Processing Order',
      description: 'Your items are being prepared for shipment',
      timestamp: 'Jan 28, 2024 - 11:00 AM',
      icon: <Package className="w-full h-full text-white" />,
      color: 'info'
    }, {
      title: 'Shipped',
      description: <div>
                <p>Your package has been shipped</p>
                <p className="text-xs mt-1 font-mono">Tracking: #TRK123456789</p>
              </div>,
      timestamp: 'Jan 29, 2024 - 2:30 PM',
      icon: <Truck className="w-full h-full text-white" />,
      color: 'primary'
    }, {
      title: 'Out for Delivery',
      description: 'Package is out for delivery to your address',
      timestamp: 'Jan 30, 2024 - 8:00 AM',
      icon: <Truck className="w-full h-full text-white" />,
      color: 'warning'
    }, {
      title: 'Delivered',
      description: 'Package delivered successfully',
      timestamp: 'Expected: Jan 30, 2024 - 5:00 PM',
      icon: <Home className="w-full h-full text-white" />,
      color: 'default'
    }]} />
    </div>
}`,...(te=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ie,re,oe;v.parameters={...v.parameters,docs:{...(ie=v.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    size: 'md',
    items: [{
      title: 'Build Started',
      description: 'Starting build process',
      icon: <Clock className="w-full h-full text-white" />,
      color: 'info',
      timestamp: '10:00:00'
    }, {
      title: 'Dependencies Installed',
      description: 'All packages installed successfully',
      icon: <CheckCircle className="w-full h-full text-white" />,
      color: 'success',
      timestamp: '10:02:15'
    }, {
      title: 'Build Failed',
      description: 'TypeScript compilation error in src/components/Header.tsx',
      icon: <XCircle className="w-full h-full text-white" />,
      color: 'error',
      timestamp: '10:05:42'
    }, {
      title: 'Retry Build',
      description: 'Attempting to rebuild after fixing errors',
      icon: <AlertCircle className="w-full h-full text-white" />,
      color: 'warning',
      timestamp: '10:08:00'
    }]
  }
}`,...(oe=(re=v.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};const Je=["Primary","WithIcons","Horizontal","HorizontalWithIcons","HorizontalPending","ComplexExample","WithFailedStep"];export{g as ComplexExample,h as Horizontal,w as HorizontalPending,x as HorizontalWithIcons,u as Primary,v as WithFailedStep,f as WithIcons,Je as __namedExportsOrder,De as default};
