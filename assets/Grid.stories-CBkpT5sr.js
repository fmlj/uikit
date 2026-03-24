import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{h as t}from"./index-BwNXgB6e.js";import{c as L,a as U}from"./utils-_uLxnvdl.js";import{R as z}from"./index-ZH-6pyQh.js";import"./variants-C8qliDOr.js";import"./_commonjsHelpers-CqkleIqs.js";const O=U("w-full grid",{variants:{gap:{xs:"gap-2",sm:"gap-4",md:"gap-6",lg:"gap-8"},columns:{1:"grid-cols-1",2:"grid-cols-1 md:grid-cols-2",3:"grid-cols-1 md:grid-cols-2 lg:grid-cols-3",4:"grid-cols-1 md:grid-cols-2 lg:grid-cols-4",5:"grid-cols-1 md:grid-cols-3 lg:grid-cols-5",6:"grid-cols-1 md:grid-cols-3 lg:grid-cols-6"}},defaultVariants:{gap:"md",columns:3}}),r=z.memo(({children:a,columns:s=3,gap:h="md",className:u,ref:F})=>e.jsx("div",{ref:F,"data-slot":"root",className:L("grid_root",O({gap:h,columns:s}),u),children:a}));r.displayName="Grid";r.__docgenInfo={description:"",methods:[],displayName:"Grid",props:{columns:{defaultValue:{value:"3",computed:!1},required:!1},gap:{defaultValue:{value:"'md'",computed:!1},required:!1}}};const K={title:"Layout/Grid",component:r,tags:["autodocs"],argTypes:{columns:{control:"select",options:[1,2,3,4,5,6],description:"Number of columns (responsive)"},gap:{control:"select",options:["xs","sm","md","lg"],description:"Gap size between grid items"}}},I=({title:a,index:s})=>e.jsxs(t,{className:"h-full",children:[e.jsxs(t.Header,{children:[e.jsx(t.Title,{children:a}),e.jsxs(t.Description,{children:["Item #",s+1]})]}),e.jsx(t.Content,{children:e.jsx("p",{className:"text-sm text-text-muted",children:"This is a sample card to demonstrate the grid layout."})})]}),i={render:()=>e.jsx(r,{children:[...Array(6)].map((a,s)=>e.jsx(I,{title:`Card ${s+1}`,index:s},s))})},o={render:()=>e.jsx(r,{columns:4,gap:"md",children:[{image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",title:"Wireless Headphones",price:"$199.99"},{image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",title:"Smart Watch",price:"$299.99"},{image:"https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop",title:"Designer Sunglasses",price:"$149.99"},{image:"https://images.unsplash.com/photo-1511385348-f0e3b2f0f0d1?w=300&h=300&fit=crop",title:"Laptop Bag",price:"$79.99"},{image:"https://images.unsplash.com/photo-1484704849700-f032a568e944?w=300&h=300&fit=crop",title:"Wireless Mouse",price:"$49.99"},{image:"https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=300&h=300&fit=crop",title:"Desk Lamp",price:"$89.99"},{image:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=300&fit=crop",title:"Laptop Stand",price:"$59.99"},{image:"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=300&h=300&fit=crop",title:"Camera",price:"$799.99"}].map((a,s)=>e.jsxs("div",{className:"border rounded-lg overflow-hidden hover:shadow-lg transition-shadow",children:[e.jsx("img",{src:a.image,alt:a.title,className:"w-full h-48 object-cover"}),e.jsxs("div",{className:"p-4",children:[e.jsx("h4",{className:"font-semibold mb-2",children:a.title}),e.jsx("p",{className:"text-lg font-bold text-primary",children:a.price})]})]},s))})},c={render:()=>e.jsx(r,{columns:3,gap:"lg",children:[{image:"https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=250&fit=crop",title:"Getting Started with React",date:"March 15, 2024",excerpt:"Learn the fundamentals of React and build your first application."},{image:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",title:"Advanced TypeScript Patterns",date:"March 12, 2024",excerpt:"Explore advanced TypeScript patterns and best practices."},{image:"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",title:"CSS Grid vs Flexbox",date:"March 10, 2024",excerpt:"Understanding when to use CSS Grid and when to use Flexbox."},{image:"https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=400&h=250&fit=crop",title:"Building Responsive Layouts",date:"March 8, 2024",excerpt:"Master responsive design with Tailwind CSS."},{image:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop",title:"Web Performance Optimization",date:"March 5, 2024",excerpt:"Tips and tricks to make your website blazing fast."},{image:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",title:"State Management in React",date:"March 1, 2024",excerpt:"Compare different state management solutions for React."}].map((a,s)=>e.jsxs(t,{className:"overflow-hidden hover:shadow-lg transition-shadow",children:[e.jsx("img",{src:a.image,alt:a.title,className:"w-full h-48 object-cover"}),e.jsxs(t.Header,{children:[e.jsx("div",{className:"text-xs text-text-muted mb-2",children:a.date}),e.jsx(t.Title,{children:a.title}),e.jsx(t.Description,{children:a.excerpt})]})]},s))})},l={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsx(r,{columns:4,gap:"md",children:[{label:"Total Users",value:"12,345",change:"+12%",positive:!0},{label:"Revenue",value:"$45,678",change:"+8%",positive:!0},{label:"Active Sessions",value:"1,234",change:"-3%",positive:!1},{label:"Conversion Rate",value:"3.2%",change:"+0.5%",positive:!0}].map((a,s)=>e.jsx(t,{children:e.jsxs(t.Content,{className:"pt-6",children:[e.jsx("div",{className:"text-sm text-text-muted mb-1",children:a.label}),e.jsx("div",{className:"text-2xl font-bold mb-2",children:a.value}),e.jsx("div",{className:`text-sm ${a.positive?"text-success":"text-error"}`,children:a.change})]})},s))}),e.jsxs(r,{columns:2,gap:"md",children:[e.jsxs(t,{children:[e.jsxs(t.Header,{children:[e.jsx(t.Title,{children:"Recent Activity"}),e.jsx(t.Description,{children:"Latest user interactions"})]}),e.jsx(t.Content,{children:e.jsx("div",{className:"space-y-2",children:[1,2,3,4].map(a=>e.jsxs("div",{className:"flex items-center gap-3 p-2 hover:bg-gray-50 rounded",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-gray-200"}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("p",{className:"text-sm font-medium",children:["User action ",a]}),e.jsxs("p",{className:"text-xs text-text-muted",children:[a," minutes ago"]})]})]},a))})})]}),e.jsxs(t,{children:[e.jsxs(t.Header,{children:[e.jsx(t.Title,{children:"Top Products"}),e.jsx(t.Description,{children:"Best selling items this month"})]}),e.jsx(t.Content,{children:e.jsx("div",{className:"space-y-2",children:[{name:"Product A",sales:"234"},{name:"Product B",sales:"189"},{name:"Product C",sales:"156"},{name:"Product D",sales:"142"}].map((a,s)=>e.jsxs("div",{className:"flex items-center justify-between p-2",children:[e.jsx("span",{className:"text-sm",children:a.name}),e.jsxs("span",{className:"text-sm font-semibold",children:[a.sales," sales"]})]},s))})})]})]})]})},n={render:()=>e.jsx(r,{columns:4,gap:"md",children:[{name:"John Doe",role:"Frontend Developer",avatar:"https://i.pravatar.cc/150?img=1"},{name:"Jane Smith",role:"Backend Developer",avatar:"https://i.pravatar.cc/150?img=2"},{name:"Bob Johnson",role:"UI/UX Designer",avatar:"https://i.pravatar.cc/150?img=3"},{name:"Alice Williams",role:"Product Manager",avatar:"https://i.pravatar.cc/150?img=4"},{name:"Charlie Brown",role:"DevOps Engineer",avatar:"https://i.pravatar.cc/150?img=5"},{name:"Diana Prince",role:"QA Engineer",avatar:"https://i.pravatar.cc/150?img=6"},{name:"Ethan Hunt",role:"Security Specialist",avatar:"https://i.pravatar.cc/150?img=7"},{name:"Fiona Green",role:"Data Analyst",avatar:"https://i.pravatar.cc/150?img=8"}].map((a,s)=>e.jsx(t,{className:"text-center",children:e.jsxs(t.Content,{className:"pt-6",children:[e.jsx("img",{src:a.avatar,alt:a.name,className:"w-20 h-20 rounded-full mx-auto mb-4"}),e.jsx("h4",{className:"font-semibold mb-1",children:a.name}),e.jsx("p",{className:"text-sm text-text-muted",children:a.role})]})},s))})},d={render:()=>e.jsx(r,{columns:3,gap:"lg",children:[{icon:"🚀",title:"Fast Performance",description:"Optimized for speed and efficiency"},{icon:"🔒",title:"Secure by Default",description:"Built with security best practices"},{icon:"📱",title:"Responsive Design",description:"Works on all devices and screen sizes"},{icon:"♿",title:"Accessible",description:"WCAG 2.1 compliant components"},{icon:"🎨",title:"Customizable",description:"Easy to theme and customize"},{icon:"📚",title:"Well Documented",description:"Comprehensive documentation and examples"}].map((a,s)=>e.jsx(t,{className:"text-center",children:e.jsxs(t.Content,{className:"pt-6",children:[e.jsx("div",{className:"text-4xl mb-4",children:a.icon}),e.jsx("h4",{className:"font-semibold mb-2",children:a.title}),e.jsx("p",{className:"text-sm text-text-muted",children:a.description})]})},s))})},p={render:()=>e.jsx(r,{columns:4,gap:"sm",children:["photo-1682687220742-aba13b6e50ba","photo-1682687220063-4742bd7fd538","photo-1682687221038-404cb8830901","photo-1682687982501-1e58ab814714","photo-1682687982298-c7514a167088","photo-1682687982167-d7fb3ed8541d","photo-1682687982141-0143020ed57a","photo-1682687220801-eef408f95d71"].map((a,s)=>e.jsx("div",{className:"aspect-square overflow-hidden rounded-lg hover:scale-105 transition-transform cursor-pointer",children:e.jsx("img",{src:`https://images.unsplash.com/${a}?w=300&h=300&fit=crop`,alt:`Gallery image ${s+1}`,className:"w-full h-full object-cover"})},s))})},m={render:()=>e.jsx(r,{columns:3,gap:"lg",children:[{name:"Starter",price:"$9",period:"/month",features:["5 Projects","10 GB Storage","Basic Support","Email Notifications"],popular:!1},{name:"Pro",price:"$29",period:"/month",features:["Unlimited Projects","100 GB Storage","Priority Support","Advanced Analytics","Custom Integrations"],popular:!0},{name:"Enterprise",price:"$99",period:"/month",features:["Everything in Pro","Unlimited Storage","24/7 Dedicated Support","Custom SLA","On-premise Deployment"],popular:!1}].map((a,s)=>e.jsxs(t,{className:`relative ${a.popular?"border-primary border-2":""}`,children:[a.popular&&e.jsx("div",{className:"absolute -top-3 left-1/2 transform -translate-x-1/2",children:e.jsx("span",{className:"bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold",children:"Most Popular"})}),e.jsxs(t.Header,{className:"text-center",children:[e.jsx(t.Title,{children:a.name}),e.jsxs("div",{className:"mt-4",children:[e.jsx("span",{className:"text-4xl font-bold",children:a.price}),e.jsx("span",{className:"text-text-muted",children:a.period})]})]}),e.jsx(t.Content,{children:e.jsx("ul",{className:"space-y-3",children:a.features.map((h,u)=>e.jsxs("li",{className:"flex items-center gap-2 text-sm",children:[e.jsx("span",{className:"text-success",children:"✓"}),h]},u))})}),e.jsx(t.Footer,{children:e.jsx("button",{className:`w-full py-2 px-4 rounded-lg font-semibold ${a.popular?"bg-primary text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:"Get Started"})})]},s))})};var g,x,f;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Grid>
      {[...Array(6)].map((_, i) => <SampleCard key={i} title={\`Card \${i + 1}\`} index={i} />)}
    </Grid>
}`,...(f=(x=i.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var v,b,C;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Grid columns={4} gap="md">
      {[{
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
      title: 'Wireless Headphones',
      price: '$199.99'
    }, {
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop',
      title: 'Smart Watch',
      price: '$299.99'
    }, {
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop',
      title: 'Designer Sunglasses',
      price: '$149.99'
    }, {
      image: 'https://images.unsplash.com/photo-1511385348-f0e3b2f0f0d1?w=300&h=300&fit=crop',
      title: 'Laptop Bag',
      price: '$79.99'
    }, {
      image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=300&h=300&fit=crop',
      title: 'Wireless Mouse',
      price: '$49.99'
    }, {
      image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=300&h=300&fit=crop',
      title: 'Desk Lamp',
      price: '$89.99'
    }, {
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=300&fit=crop',
      title: 'Laptop Stand',
      price: '$59.99'
    }, {
      image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=300&h=300&fit=crop',
      title: 'Camera',
      price: '$799.99'
    }].map((product, i) => <div key={i} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
          <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h4 className="font-semibold mb-2">{product.title}</h4>
            <p className="text-lg font-bold text-primary">{product.price}</p>
          </div>
        </div>)}
    </Grid>
}`,...(C=(b=o.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var N,j,y;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <Grid columns={3} gap="lg">
      {[{
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=250&fit=crop',
      title: 'Getting Started with React',
      date: 'March 15, 2024',
      excerpt: 'Learn the fundamentals of React and build your first application.'
    }, {
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop',
      title: 'Advanced TypeScript Patterns',
      date: 'March 12, 2024',
      excerpt: 'Explore advanced TypeScript patterns and best practices.'
    }, {
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop',
      title: 'CSS Grid vs Flexbox',
      date: 'March 10, 2024',
      excerpt: 'Understanding when to use CSS Grid and when to use Flexbox.'
    }, {
      image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=400&h=250&fit=crop',
      title: 'Building Responsive Layouts',
      date: 'March 8, 2024',
      excerpt: 'Master responsive design with Tailwind CSS.'
    }, {
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop',
      title: 'Web Performance Optimization',
      date: 'March 5, 2024',
      excerpt: 'Tips and tricks to make your website blazing fast.'
    }, {
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop',
      title: 'State Management in React',
      date: 'March 1, 2024',
      excerpt: 'Compare different state management solutions for React.'
    }].map((post, i) => <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow">
          <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
          <Card.Header>
            <div className="text-xs text-text-muted mb-2">{post.date}</div>
            <Card.Title>{post.title}</Card.Title>
            <Card.Description>{post.excerpt}</Card.Description>
          </Card.Header>
        </Card>)}
    </Grid>
}`,...(y=(j=c.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var w,S,G;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <Grid columns={4} gap="md">
        {[{
        label: 'Total Users',
        value: '12,345',
        change: '+12%',
        positive: true
      }, {
        label: 'Revenue',
        value: '$45,678',
        change: '+8%',
        positive: true
      }, {
        label: 'Active Sessions',
        value: '1,234',
        change: '-3%',
        positive: false
      }, {
        label: 'Conversion Rate',
        value: '3.2%',
        change: '+0.5%',
        positive: true
      }].map((stat, i) => <Card key={i}>
            <Card.Content className="pt-6">
              <div className="text-sm text-text-muted mb-1">{stat.label}</div>
              <div className="text-2xl font-bold mb-2">{stat.value}</div>
              <div className={\`text-sm \${stat.positive ? 'text-success' : 'text-error'}\`}>
                {stat.change}
              </div>
            </Card.Content>
          </Card>)}
      </Grid>

      <Grid columns={2} gap="md">
        <Card>
          <Card.Header>
            <Card.Title>Recent Activity</Card.Title>
            <Card.Description>Latest user interactions</Card.Description>
          </Card.Header>
          <Card.Content>
            <div className="space-y-2">
              {[1, 2, 3, 4].map(i => <div key={i} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded">
                  <div className="w-8 h-8 rounded-full bg-gray-200" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">User action {i}</p>
                    <p className="text-xs text-text-muted">{i} minutes ago</p>
                  </div>
                </div>)}
            </div>
          </Card.Content>
        </Card>

        <Card>
          <Card.Header>
            <Card.Title>Top Products</Card.Title>
            <Card.Description>Best selling items this month</Card.Description>
          </Card.Header>
          <Card.Content>
            <div className="space-y-2">
              {[{
              name: 'Product A',
              sales: '234'
            }, {
              name: 'Product B',
              sales: '189'
            }, {
              name: 'Product C',
              sales: '156'
            }, {
              name: 'Product D',
              sales: '142'
            }].map((product, i) => <div key={i} className="flex items-center justify-between p-2">
                  <span className="text-sm">{product.name}</span>
                  <span className="text-sm font-semibold">{product.sales} sales</span>
                </div>)}
            </div>
          </Card.Content>
        </Card>
      </Grid>
    </div>
}`,...(G=(S=l.parameters)==null?void 0:S.docs)==null?void 0:G.source}}};var D,P,$;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Grid columns={4} gap="md">
      {[{
      name: 'John Doe',
      role: 'Frontend Developer',
      avatar: 'https://i.pravatar.cc/150?img=1'
    }, {
      name: 'Jane Smith',
      role: 'Backend Developer',
      avatar: 'https://i.pravatar.cc/150?img=2'
    }, {
      name: 'Bob Johnson',
      role: 'UI/UX Designer',
      avatar: 'https://i.pravatar.cc/150?img=3'
    }, {
      name: 'Alice Williams',
      role: 'Product Manager',
      avatar: 'https://i.pravatar.cc/150?img=4'
    }, {
      name: 'Charlie Brown',
      role: 'DevOps Engineer',
      avatar: 'https://i.pravatar.cc/150?img=5'
    }, {
      name: 'Diana Prince',
      role: 'QA Engineer',
      avatar: 'https://i.pravatar.cc/150?img=6'
    }, {
      name: 'Ethan Hunt',
      role: 'Security Specialist',
      avatar: 'https://i.pravatar.cc/150?img=7'
    }, {
      name: 'Fiona Green',
      role: 'Data Analyst',
      avatar: 'https://i.pravatar.cc/150?img=8'
    }].map((member, i) => <Card key={i} className="text-center">
          <Card.Content className="pt-6">
            <img src={member.avatar} alt={member.name} className="w-20 h-20 rounded-full mx-auto mb-4" />
            <h4 className="font-semibold mb-1">{member.name}</h4>
            <p className="text-sm text-text-muted">{member.role}</p>
          </Card.Content>
        </Card>)}
    </Grid>
}`,...($=(P=n.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var T,A,B;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Grid columns={3} gap="lg">
      {[{
      icon: '🚀',
      title: 'Fast Performance',
      description: 'Optimized for speed and efficiency'
    }, {
      icon: '🔒',
      title: 'Secure by Default',
      description: 'Built with security best practices'
    }, {
      icon: '📱',
      title: 'Responsive Design',
      description: 'Works on all devices and screen sizes'
    }, {
      icon: '♿',
      title: 'Accessible',
      description: 'WCAG 2.1 compliant components'
    }, {
      icon: '🎨',
      title: 'Customizable',
      description: 'Easy to theme and customize'
    }, {
      icon: '📚',
      title: 'Well Documented',
      description: 'Comprehensive documentation and examples'
    }].map((feature, i) => <Card key={i} className="text-center">
          <Card.Content className="pt-6">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h4 className="font-semibold mb-2">{feature.title}</h4>
            <p className="text-sm text-text-muted">{feature.description}</p>
          </Card.Content>
        </Card>)}
    </Grid>
}`,...(B=(A=d.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var M,k,R;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <Grid columns={4} gap="sm">
      {['photo-1682687220742-aba13b6e50ba', 'photo-1682687220063-4742bd7fd538', 'photo-1682687221038-404cb8830901', 'photo-1682687982501-1e58ab814714', 'photo-1682687982298-c7514a167088', 'photo-1682687982167-d7fb3ed8541d', 'photo-1682687982141-0143020ed57a', 'photo-1682687220801-eef408f95d71'].map((id, i) => <div key={i} className="aspect-square overflow-hidden rounded-lg hover:scale-105 transition-transform cursor-pointer">
          <img src={\`https://images.unsplash.com/\${id}?w=300&h=300&fit=crop\`} alt={\`Gallery image \${i + 1}\`} className="w-full h-full object-cover" />
        </div>)}
    </Grid>
}`,...(R=(k=p.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var E,H,W;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Grid columns={3} gap="lg">
      {[{
      name: 'Starter',
      price: '$9',
      period: '/month',
      features: ['5 Projects', '10 GB Storage', 'Basic Support', 'Email Notifications'],
      popular: false
    }, {
      name: 'Pro',
      price: '$29',
      period: '/month',
      features: ['Unlimited Projects', '100 GB Storage', 'Priority Support', 'Advanced Analytics', 'Custom Integrations'],
      popular: true
    }, {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      features: ['Everything in Pro', 'Unlimited Storage', '24/7 Dedicated Support', 'Custom SLA', 'On-premise Deployment'],
      popular: false
    }].map((plan, i) => <Card key={i} className={\`relative \${plan.popular ? 'border-primary border-2' : ''}\`}>
          {plan.popular && <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                Most Popular
              </span>
            </div>}
          <Card.Header className="text-center">
            <Card.Title>{plan.name}</Card.Title>
            <div className="mt-4">
              <span className="text-4xl font-bold">{plan.price}</span>
              <span className="text-text-muted">{plan.period}</span>
            </div>
          </Card.Header>
          <Card.Content>
            <ul className="space-y-3">
              {plan.features.map((feature, j) => <li key={j} className="flex items-center gap-2 text-sm">
                  <span className="text-success">✓</span>
                  {feature}
                </li>)}
            </ul>
          </Card.Content>
          <Card.Footer>
            <button className={\`w-full py-2 px-4 rounded-lg font-semibold \${plan.popular ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}\`}>
              Get Started
            </button>
          </Card.Footer>
        </Card>)}
    </Grid>
}`,...(W=(H=m.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};const Y=["Default","ProductGrid","BlogGrid","DashboardGrid","TeamGrid","FeatureGrid","ImageGallery","PricingGrid"];export{c as BlogGrid,l as DashboardGrid,i as Default,d as FeatureGrid,p as ImageGallery,m as PricingGrid,o as ProductGrid,n as TeamGrid,Y as __namedExportsOrder,K as default};
