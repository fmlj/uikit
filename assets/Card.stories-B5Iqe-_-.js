import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{C as a,a as r,b as t,c as n,d as S,e as l,f as d,g as ue}from"./index-BwNXgB6e.js";import{B as i}from"./index-23ax1BAm.js";import{B as w}from"./index-DyC3bL0y.js";import{S as Ce}from"./settings-D1wlBKo1.js";import{B as oe}from"./bell-BD3KA5A_.js";import{U as ce}from"./user-BM8Midap.js";import{A as me}from"./arrow-right-DA4W7e7_.js";import{C as y}from"./check-CKCh4cDT.js";import{H as he}from"./heart-7Tw2OJmo.js";import{S as je}from"./star-CXKHNDnr.js";import{S as fe}from"./shopping-cart-DxzqVIld.js";import{E as Ne}from"./ellipsis-BCji1NXI.js";import"./utils-_uLxnvdl.js";import"./index-ZH-6pyQh.js";import"./_commonjsHelpers-CqkleIqs.js";import"./variants-C8qliDOr.js";import"./index-ZW2Bszwo.js";import"./index-Bo-loign.js";import"./index-BoArNvwV.js";import"./useRipple-BuuTbn0W.js";import"./createLucideIcon-BXJdBs6C.js";const Ie={title:"Layout/Card",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","solid","outline","soft","ghost","elevated"],description:"Visual style variant"},color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"],description:"Semantic color"},size:{control:"select",options:["xs","sm","md","lg"],description:"Padding size"},shadow:{control:"select",options:["none","sm","md","lg"],description:"Shadow level"},hoverable:{control:"boolean",description:"Hover effect"},clickable:{control:"boolean",description:"Clickable with a11y"},bordered:{control:"boolean",description:"Show border"},loading:{control:"boolean",description:"Loading state"}}},m={args:{variant:"default",color:"default",size:"md",shadow:"none",hoverable:!1,clickable:!1,bordered:!0,loading:!1},render:s=>e.jsxs(a,{...s,className:"w-[350px]",children:[e.jsxs(r,{children:[e.jsx(t,{children:"Card Title"}),e.jsx(n,{children:"Card description goes here"})]}),e.jsx(l,{children:e.jsx("p",{className:"text-sm",children:"This is the main content area of the card."})}),e.jsx(d,{children:e.jsx(i,{children:"Action"})})]})},x={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-sm text-muted-foreground",children:"Clickable cards have proper keyboard accessibility (Tab, Enter, Space)"}),e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsx(a,{clickable:!0,onClick:()=>alert("Settings clicked!"),children:e.jsxs(r,{children:[e.jsx(Ce,{className:"size-8 mb-2 text-primary"}),e.jsx(t,{children:"Settings"}),e.jsx(n,{children:"Click or press Enter"})]})}),e.jsx(a,{clickable:!0,hoverable:!0,onClick:()=>alert("Notifications clicked!"),children:e.jsxs(r,{children:[e.jsx(oe,{className:"size-8 mb-2 text-info"}),e.jsx(t,{children:"Notifications"}),e.jsx(n,{children:"Clickable + Hoverable"})]})}),e.jsx(a,{clickable:!0,color:"primary",onClick:()=>alert("Profile clicked!"),children:e.jsxs(r,{children:[e.jsx(ce,{className:"size-8 mb-2 text-accent"}),e.jsx(t,{children:"Profile"}),e.jsx(n,{children:"With color accent"})]})})]})]})},p={render:()=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx(a,{loading:!0,className:"w-[300px]"}),e.jsxs(a,{className:"w-[300px]",children:[e.jsxs(r,{children:[e.jsx(t,{children:"Loaded Card"}),e.jsx(n,{children:"Content is ready"})]}),e.jsx(l,{children:e.jsx("p",{className:"text-sm",children:"This card has finished loading."})})]})]})},u={render:()=>e.jsxs(a,{className:"w-[300px] overflow-hidden",hoverable:!0,children:[e.jsxs("div",{className:"relative",children:[e.jsx(ue,{src:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",alt:"Premium Headphones",aspectRatio:"video"}),e.jsx(w,{color:"error",className:"absolute top-2 left-2",children:"Sale"}),e.jsx("button",{className:"absolute top-2 right-2 p-2 bg-white/80 rounded-full hover:bg-white",children:e.jsx(he,{className:"size-4"})})]}),e.jsxs(r,{children:[e.jsxs("div",{className:"flex items-center gap-1",children:[[1,2,3,4,5].map(s=>e.jsx(je,{className:"size-4 fill-warning text-warning"},s)),e.jsx("span",{className:"text-xs text-muted-foreground ml-1",children:"(128)"})]}),e.jsx(t,{children:"Premium Headphones"}),e.jsx(n,{children:"Wireless noise-canceling"})]}),e.jsx(l,{children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-2xl font-bold",children:"$299"}),e.jsx("span",{className:"text-sm text-muted-foreground line-through",children:"$399"}),e.jsx(w,{color:"success",size:"xs",children:"25% OFF"})]})}),e.jsx(d,{className:"gap-2",children:e.jsx(i,{fullWidth:!0,leftIcon:e.jsx(fe,{className:"size-4"}),children:"Add to Cart"})})]})},C={render:()=>e.jsxs(a,{className:"w-[350px]",children:[e.jsx(r,{children:e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:"size-16 rounded-full bg-primary/10 flex items-center justify-center",children:e.jsx(ce,{className:"size-8 text-primary"})}),e.jsxs("div",{className:"flex-1",children:[e.jsx(t,{children:"John Doe"}),e.jsx(n,{children:"john.doe@example.com"})]}),e.jsx(S,{children:e.jsx(i,{size:"sm",variant:"ghost",iconOnly:!0,leftIcon:e.jsx(Ne,{className:"size-4"})})})]})}),e.jsx(l,{children:e.jsxs("div",{className:"grid grid-cols-3 gap-4 text-center",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-2xl font-bold",children:"127"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"Posts"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-2xl font-bold",children:"1.2K"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"Followers"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-2xl font-bold",children:"453"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"Following"})]})]})}),e.jsxs(d,{className:"gap-2",children:[e.jsx(i,{fullWidth:!0,variant:"outline",children:"View Profile"}),e.jsx(i,{fullWidth:!0,children:"Follow"})]})]})},h={render:()=>e.jsxs(a,{className:"w-[400px]",variant:"soft",color:"info",children:[e.jsx(r,{children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx(oe,{className:"size-5 mt-0.5"}),e.jsxs("div",{className:"flex-1",children:[e.jsx(t,{className:"text-base",children:"New Message"}),e.jsx(n,{children:"You have a new message from Sarah"})]}),e.jsx(S,{children:e.jsx(i,{size:"xs",variant:"ghost",children:"Dismiss"})})]})}),e.jsx(l,{children:e.jsx("p",{className:"text-sm",children:'"Hey! Just wanted to check in about the project deadline. Are we still on track?"'})}),e.jsxs(d,{className:"gap-2",children:[e.jsx(i,{size:"sm",variant:"outline",children:"Reply"}),e.jsx(i,{size:"sm",children:"Mark as Read"})]})]})},j={render:()=>e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsxs(a,{size:"sm",children:[e.jsxs(r,{children:[e.jsx(n,{children:"Total Revenue"}),e.jsx(t,{className:"text-3xl",children:"$45,231"})]}),e.jsx(l,{children:e.jsx("p",{className:"text-xs text-success",children:"+20.1% from last month"})})]}),e.jsxs(a,{size:"sm",children:[e.jsxs(r,{children:[e.jsx(n,{children:"Active Users"}),e.jsx(t,{className:"text-3xl",children:"2,345"})]}),e.jsx(l,{children:e.jsx("p",{className:"text-xs text-success",children:"+15.2% from last month"})})]}),e.jsxs(a,{size:"sm",children:[e.jsxs(r,{children:[e.jsx(n,{children:"Conversion Rate"}),e.jsx(t,{className:"text-3xl",children:"3.24%"})]}),e.jsx(l,{children:e.jsx("p",{className:"text-xs text-error",children:"-2.5% from last month"})})]})]})},f={render:()=>e.jsxs(a,{className:"w-[400px]",variant:"soft",color:"error",children:[e.jsxs(r,{children:[e.jsx(t,{children:"Payment Failed"}),e.jsx(n,{children:"There was a problem processing your payment"})]}),e.jsx(l,{children:e.jsx("p",{className:"text-sm",children:"Your card was declined. Please check your card details and try again."})}),e.jsxs(d,{className:"gap-2",children:[e.jsx(i,{variant:"outline",children:"Cancel"}),e.jsx(i,{color:"error",children:"Try Again"})]})]})},N={render:()=>e.jsxs(a,{className:"w-[400px]",variant:"soft",color:"success",children:[e.jsxs(r,{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(y,{className:"size-5"}),e.jsx(t,{children:"Payment Successful"})]}),e.jsx(n,{children:"Your payment has been processed"})]}),e.jsx(l,{children:e.jsx("p",{className:"text-sm",children:"Thank you for your purchase! A confirmation email has been sent."})}),e.jsx(d,{children:e.jsxs(i,{color:"success",fullWidth:!0,children:["View Order",e.jsx(me,{className:"size-4 ml-2"})]})})]})},g={render:()=>e.jsxs(a,{className:"w-[500px]",children:[e.jsx(r,{children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx(t,{children:"Project Dashboard"}),e.jsx(n,{children:"Overview of your current projects"})]}),e.jsxs(S,{children:[e.jsx(i,{size:"sm",variant:"outline",children:"View All"}),e.jsx(i,{size:"sm",children:"New Project"})]})]})}),e.jsx(l,{children:e.jsx("div",{className:"space-y-4",children:[{name:"Website Redesign",due:"5 days",status:"In Progress",statusColor:"warning"},{name:"Mobile App",due:"12 days",status:"Planning",statusColor:"info"},{name:"Marketing Campaign",due:"2 days",status:"Completed",statusColor:"success"}].map(s=>e.jsxs("div",{className:"flex items-center justify-between p-4 border border-border rounded-md",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-medium",children:s.name}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Due in ",s.due]})]}),e.jsx(w,{color:s.statusColor,variant:"soft",children:s.status})]},s.name))})}),e.jsxs(d,{className:"justify-between",children:[e.jsx("p",{className:"text-sm text-muted-foreground",children:"3 active projects"}),e.jsxs(i,{size:"sm",variant:"link",children:["View Analytics",e.jsx(me,{className:"size-4 ml-1"})]})]})]})},v={render:()=>e.jsxs("div",{className:"flex gap-4",children:[e.jsxs(a,{className:"w-[280px]",children:[e.jsxs(r,{children:[e.jsx(t,{children:"Basic"}),e.jsx(n,{children:"For individuals"}),e.jsxs("p",{className:"text-3xl font-bold mt-2",children:["$9",e.jsx("span",{className:"text-sm font-normal",children:"/mo"})]})]}),e.jsx(l,{children:e.jsx("ul",{className:"space-y-2",children:["5 Projects","10GB Storage","Basic Support"].map(s=>e.jsxs("li",{className:"flex items-center gap-2 text-sm",children:[e.jsx(y,{className:"size-4 text-success"}),s]},s))})}),e.jsx(d,{children:e.jsx(i,{variant:"outline",fullWidth:!0,children:"Get Started"})})]}),e.jsxs(a,{className:"w-[280px]",variant:"outline",color:"primary",children:[e.jsxs(r,{children:[e.jsx(w,{color:"primary",className:"w-fit mb-2",children:"Popular"}),e.jsx(t,{children:"Pro"}),e.jsx(n,{children:"For teams"}),e.jsxs("p",{className:"text-3xl font-bold mt-2",children:["$29",e.jsx("span",{className:"text-sm font-normal",children:"/mo"})]})]}),e.jsx(l,{children:e.jsx("ul",{className:"space-y-2",children:["Unlimited Projects","100GB Storage","Priority Support","Advanced Analytics"].map(s=>e.jsxs("li",{className:"flex items-center gap-2 text-sm",children:[e.jsx(y,{className:"size-4 text-success"}),s]},s))})}),e.jsx(d,{children:e.jsx(i,{color:"primary",fullWidth:!0,children:"Get Started"})})]}),e.jsxs(a,{className:"w-[280px]",children:[e.jsxs(r,{children:[e.jsx(t,{children:"Enterprise"}),e.jsx(n,{children:"For large teams"}),e.jsx("p",{className:"text-3xl font-bold mt-2",children:"Custom"})]}),e.jsx(l,{children:e.jsx("ul",{className:"space-y-2",children:["Everything in Pro","Unlimited Storage","24/7 Support","Custom Integrations"].map(s=>e.jsxs("li",{className:"flex items-center gap-2 text-sm",children:[e.jsx(y,{className:"size-4 text-success"}),s]},s))})}),e.jsx(d,{children:e.jsx(i,{variant:"outline",fullWidth:!0,children:"Contact Sales"})})]})]})},b={render:()=>{const s=["default","primary","secondary","accent","success","error","warning","info"],xe=["default","solid","outline","soft"],pe=["xs","sm","md","lg"];return e.jsx("div",{className:"space-y-8",children:xe.map(o=>e.jsxs("div",{children:[e.jsxs("h3",{className:"text-sm font-semibold mb-4 capitalize",children:[o," Variant"]}),e.jsx("div",{className:"space-y-6",children:pe.map(c=>e.jsxs("div",{children:[e.jsxs("p",{className:"text-xs text-text-secondary mb-3 uppercase",children:[c," Size"]}),e.jsx("div",{className:"grid grid-cols-4 gap-3",children:s.map(z=>e.jsx(a,{variant:o,color:z,size:c,className:"w-full",children:e.jsxs(r,{children:[e.jsx(t,{className:"text-sm capitalize",children:z}),e.jsx(n,{className:"text-xs",children:o})]})},`${o}-${c}-${z}`))})]},c))})]},o))})}};var k,B,T;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    color: 'default',
    size: 'md',
    shadow: 'none',
    hoverable: false,
    clickable: false,
    bordered: true,
    loading: false
  },
  render: args => <Card {...args} className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">This is the main content area of the card.</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
}`,...(T=(B=m.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var H,D,P;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Clickable cards have proper keyboard accessibility (Tab, Enter, Space)
      </p>
      <div className="grid grid-cols-3 gap-4">
        <Card clickable onClick={() => alert('Settings clicked!')}>
          <CardHeader>
            <Settings className="size-8 mb-2 text-primary" />
            <CardTitle>Settings</CardTitle>
            <CardDescription>Click or press Enter</CardDescription>
          </CardHeader>
        </Card>
        <Card clickable hoverable onClick={() => alert('Notifications clicked!')}>
          <CardHeader>
            <Bell className="size-8 mb-2 text-info" />
            <CardTitle>Notifications</CardTitle>
            <CardDescription>Clickable + Hoverable</CardDescription>
          </CardHeader>
        </Card>
        <Card clickable color="primary" onClick={() => alert('Profile clicked!')}>
          <CardHeader>
            <User className="size-8 mb-2 text-accent" />
            <CardTitle>Profile</CardTitle>
            <CardDescription>With color accent</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
}`,...(P=(D=x.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var F,A,W;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
      <Card loading className="w-[300px]" />
      <Card className="w-[300px]">
        <CardHeader>
          <CardTitle>Loaded Card</CardTitle>
          <CardDescription>Content is ready</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">This card has finished loading.</p>
        </CardContent>
      </Card>
    </div>
}`,...(W=(A=p.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};var R,$,E;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <Card className="w-[300px] overflow-hidden" hoverable>
      <div className="relative">
        <CardImage src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop" alt="Premium Headphones" aspectRatio="video" />
        <Badge color="error" className="absolute top-2 left-2">
          Sale
        </Badge>
        <button className="absolute top-2 right-2 p-2 bg-white/80 rounded-full hover:bg-white">
          <Heart className="size-4" />
        </button>
      </div>
      <CardHeader>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map(i => <Star key={i} className="size-4 fill-warning text-warning" />)}
          <span className="text-xs text-muted-foreground ml-1">(128)</span>
        </div>
        <CardTitle>Premium Headphones</CardTitle>
        <CardDescription>Wireless noise-canceling</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold">$299</span>
          <span className="text-sm text-muted-foreground line-through">$399</span>
          <Badge color="success" size="xs">25% OFF</Badge>
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <Button fullWidth leftIcon={<ShoppingCart className="size-4" />}>
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
}`,...(E=($=u.parameters)==null?void 0:$.docs)==null?void 0:E.source}}};var U,M,V;C.parameters={...C.parameters,docs:{...(U=C.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <Card className="w-[350px]">
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center">
            <User className="size-8 text-primary" />
          </div>
          <div className="flex-1">
            <CardTitle>John Doe</CardTitle>
            <CardDescription>john.doe@example.com</CardDescription>
          </div>
          <CardAction>
            <Button size="sm" variant="ghost" iconOnly leftIcon={<MoreHorizontal className="size-4" />} />
          </CardAction>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold">127</p>
            <p className="text-xs text-muted-foreground">Posts</p>
          </div>
          <div>
            <p className="text-2xl font-bold">1.2K</p>
            <p className="text-xs text-muted-foreground">Followers</p>
          </div>
          <div>
            <p className="text-2xl font-bold">453</p>
            <p className="text-xs text-muted-foreground">Following</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <Button fullWidth variant="outline">View Profile</Button>
        <Button fullWidth>Follow</Button>
      </CardFooter>
    </Card>
}`,...(V=(M=C.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var I,O,G;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Card className="w-[400px]" variant="soft" color="info">
      <CardHeader>
        <div className="flex items-start gap-3">
          <Bell className="size-5 mt-0.5" />
          <div className="flex-1">
            <CardTitle className="text-base">New Message</CardTitle>
            <CardDescription>You have a new message from Sarah</CardDescription>
          </div>
          <CardAction>
            <Button size="xs" variant="ghost">Dismiss</Button>
          </CardAction>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          "Hey! Just wanted to check in about the project deadline. Are we still on track?"
        </p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button size="sm" variant="outline">Reply</Button>
        <Button size="sm">Mark as Read</Button>
      </CardFooter>
    </Card>
}`,...(G=(O=h.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var L,Y,J;j.parameters={...j.parameters,docs:{...(L=j.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-3 gap-4">
      <Card size="sm">
        <CardHeader>
          <CardDescription>Total Revenue</CardDescription>
          <CardTitle className="text-3xl">$45,231</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-success">+20.1% from last month</p>
        </CardContent>
      </Card>

      <Card size="sm">
        <CardHeader>
          <CardDescription>Active Users</CardDescription>
          <CardTitle className="text-3xl">2,345</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-success">+15.2% from last month</p>
        </CardContent>
      </Card>

      <Card size="sm">
        <CardHeader>
          <CardDescription>Conversion Rate</CardDescription>
          <CardTitle className="text-3xl">3.24%</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-error">-2.5% from last month</p>
        </CardContent>
      </Card>
    </div>
}`,...(J=(Y=j.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};var K,_,q;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <Card className="w-[400px]" variant="soft" color="error">
      <CardHeader>
        <CardTitle>Payment Failed</CardTitle>
        <CardDescription>There was a problem processing your payment</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          Your card was declined. Please check your card details and try again.
        </p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="outline">Cancel</Button>
        <Button color="error">Try Again</Button>
      </CardFooter>
    </Card>
}`,...(q=(_=f.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var Q,X,Z;N.parameters={...N.parameters,docs:{...(Q=N.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <Card className="w-[400px]" variant="soft" color="success">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Check className="size-5" />
          <CardTitle>Payment Successful</CardTitle>
        </div>
        <CardDescription>Your payment has been processed</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          Thank you for your purchase! A confirmation email has been sent.
        </p>
      </CardContent>
      <CardFooter>
        <Button color="success" fullWidth>
          View Order
          <ArrowRight className="size-4 ml-2" />
        </Button>
      </CardFooter>
    </Card>
}`,...(Z=(X=N.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,se,ae;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <Card className="w-[500px]">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Project Dashboard</CardTitle>
            <CardDescription>Overview of your current projects</CardDescription>
          </div>
          <CardAction>
            <Button size="sm" variant="outline">View All</Button>
            <Button size="sm">New Project</Button>
          </CardAction>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {[{
          name: 'Website Redesign',
          due: '5 days',
          status: 'In Progress',
          statusColor: 'warning'
        }, {
          name: 'Mobile App',
          due: '12 days',
          status: 'Planning',
          statusColor: 'info'
        }, {
          name: 'Marketing Campaign',
          due: '2 days',
          status: 'Completed',
          statusColor: 'success'
        }].map(project => <div key={project.name} className="flex items-center justify-between p-4 border border-border rounded-md">
              <div>
                <p className="font-medium">{project.name}</p>
                <p className="text-sm text-muted-foreground">Due in {project.due}</p>
              </div>
              <Badge color={project.statusColor as 'warning' | 'info' | 'success'} variant="soft">
                {project.status}
              </Badge>
            </div>)}
        </div>
      </CardContent>
      <CardFooter className="justify-between">
        <p className="text-sm text-muted-foreground">3 active projects</p>
        <Button size="sm" variant="link">
          View Analytics
          <ArrowRight className="size-4 ml-1" />
        </Button>
      </CardFooter>
    </Card>
}`,...(ae=(se=g.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var re,te,ne;v.parameters={...v.parameters,docs:{...(re=v.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
      <Card className="w-[280px]">
        <CardHeader>
          <CardTitle>Basic</CardTitle>
          <CardDescription>For individuals</CardDescription>
          <p className="text-3xl font-bold mt-2">$9<span className="text-sm font-normal">/mo</span></p>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {['5 Projects', '10GB Storage', 'Basic Support'].map(feature => <li key={feature} className="flex items-center gap-2 text-sm">
                <Check className="size-4 text-success" />
                {feature}
              </li>)}
          </ul>
        </CardContent>
        <CardFooter>
          <Button variant="outline" fullWidth>Get Started</Button>
        </CardFooter>
      </Card>

      <Card className="w-[280px]" variant="outline" color="primary">
        <CardHeader>
          <Badge color="primary" className="w-fit mb-2">Popular</Badge>
          <CardTitle>Pro</CardTitle>
          <CardDescription>For teams</CardDescription>
          <p className="text-3xl font-bold mt-2">$29<span className="text-sm font-normal">/mo</span></p>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {['Unlimited Projects', '100GB Storage', 'Priority Support', 'Advanced Analytics'].map(feature => <li key={feature} className="flex items-center gap-2 text-sm">
                <Check className="size-4 text-success" />
                {feature}
              </li>)}
          </ul>
        </CardContent>
        <CardFooter>
          <Button color="primary" fullWidth>Get Started</Button>
        </CardFooter>
      </Card>

      <Card className="w-[280px]">
        <CardHeader>
          <CardTitle>Enterprise</CardTitle>
          <CardDescription>For large teams</CardDescription>
          <p className="text-3xl font-bold mt-2">Custom</p>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {['Everything in Pro', 'Unlimited Storage', '24/7 Support', 'Custom Integrations'].map(feature => <li key={feature} className="flex items-center gap-2 text-sm">
                <Check className="size-4 text-success" />
                {feature}
              </li>)}
          </ul>
        </CardContent>
        <CardFooter>
          <Button variant="outline" fullWidth>Contact Sales</Button>
        </CardFooter>
      </Card>
    </div>
}`,...(ne=(te=v.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ie,le,de;b.parameters={...b.parameters,docs:{...(ie=b.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => {
    const colors = ['default', 'primary', 'secondary', 'accent', 'success', 'error', 'warning', 'info'] as const;
    const variants = ['default', 'solid', 'outline', 'soft'] as const;
    const sizes = ['xs', 'sm', 'md', 'lg'] as const;
    return <div className="space-y-8">
        {variants.map(variant => <div key={variant}>
            <h3 className="text-sm font-semibold mb-4 capitalize">{variant} Variant</h3>
            <div className="space-y-6">
              {sizes.map(size => <div key={size}>
                  <p className="text-xs text-text-secondary mb-3 uppercase">{size} Size</p>
                  <div className="grid grid-cols-4 gap-3">
                    {colors.map(color => <Card key={\`\${variant}-\${size}-\${color}\`} variant={variant} color={color} size={size} className="w-full">
                        <CardHeader>
                          <CardTitle className="text-sm capitalize">{color}</CardTitle>
                          <CardDescription className="text-xs">{variant}</CardDescription>
                        </CardHeader>
                      </Card>)}
                  </div>
                </div>)}
            </div>
          </div>)}
      </div>;
  }
}`,...(de=(le=b.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};const Oe=["Default","Clickable","LoadingState","ProductCard","UserProfileCard","NotificationCard","StatsCards","ErrorCard","SuccessCard","DashboardCard","PricingCard","ColorSizeMatrix"];export{x as Clickable,b as ColorSizeMatrix,g as DashboardCard,m as Default,f as ErrorCard,p as LoadingState,h as NotificationCard,v as PricingCard,u as ProductCard,j as StatsCards,N as SuccessCard,C as UserProfileCard,Oe as __namedExportsOrder,Ie as default};
