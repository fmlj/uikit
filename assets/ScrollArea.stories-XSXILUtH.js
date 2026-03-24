import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as F,r as v}from"./index-ZH-6pyQh.js";import{c as y}from"./utils-_uLxnvdl.js";import{h as G,a as J,b as K,c as Q,e as X}from"./index-BwNXgB6e.js";import"./_commonjsHelpers-CqkleIqs.js";import"./variants-C8qliDOr.js";const f=new Set,Z={xs:"4px",sm:"6px",md:"8px",lg:"10px"},ee="scroll-area_root relative overflow-hidden",t=F.memo(({children:r,maxHeight:i,maxWidth:a,direction:l="vertical",size:I="md",scrollbarVisibility:h="auto",className:L,classNames:o,ref:T,style:R,...U})=>{const s=`scroll-area-${v.useId().replace(/:/g,"")}`,d=Z[I],x=v.useRef(null),Y=()=>l==="vertical"?"overflow-y-auto overflow-x-hidden":l==="horizontal"?"overflow-x-auto overflow-y-hidden":"overflow-auto",B={...R,...i&&{maxHeight:typeof i=="number"?`${i}px`:i},...a&&{maxWidth:typeof a=="number"?`${a}px`:a}};return v.useEffect(()=>{if(!f.has(s)){const P=`
        .${s} {
          scrollbar-width: thin;
          scrollbar-color: hsl(var(--color-border)) transparent;
        }

        .${s}::-webkit-scrollbar {
          width: ${l!=="horizontal"?d:"0"};
          height: ${l!=="vertical"?d:"0"};
        }

        .${s}::-webkit-scrollbar-track {
          background: transparent;
          border-radius: ${d};
        }

        .${s}::-webkit-scrollbar-thumb {
          background: hsl(var(--color-border));
          border-radius: ${d};
          opacity: ${h==="hover"?"0":"1"};
          transition: opacity 0.2s ease-in-out, background-color 0.2s ease-in-out;
        }

        .${s}::-webkit-scrollbar-thumb:hover {
          background: hsl(var(--color-border-strong));
        }

        ${h==="hover"?`.${s}:hover::-webkit-scrollbar-thumb {
          opacity: 1;
        }`:""}

        .${s}::-webkit-scrollbar-corner {
          background: transparent;
        }
      `,g=document.createElement("style");g.textContent=P,document.head.appendChild(g),x.current=g,f.add(s)}return()=>{x.current&&(document.head.removeChild(x.current),f.delete(s))}},[s,l,d,h]),e.jsx("div",{ref:T,className:y(ee,o==null?void 0:o.root,L),"data-slot":"root",...U,children:e.jsx("div",{className:y("scroll-area_viewport",s,Y(),o==null?void 0:o.viewport),style:B,"data-slot":"viewport",children:r})})});t.displayName="ScrollArea";t.__docgenInfo={description:`ScrollArea Component
Provides a customizable scrollable container with styled scrollbars`,methods:[],displayName:"ScrollArea",props:{direction:{defaultValue:{value:"'vertical'",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1},scrollbarVisibility:{defaultValue:{value:"'auto'",computed:!1},required:!1}}};const ce={title:"Layout/ScrollArea",component:t,tags:["autodocs"],argTypes:{direction:{control:"select",options:["vertical","horizontal","both"],description:"Scrollbar direction"},size:{control:"select",options:["xs","sm","md","lg"],description:"Scrollbar thickness"},scrollbarVisibility:{control:"select",options:["auto","always","hover"],description:"Scrollbar visibility behavior"},maxHeight:{control:"text",description:"Maximum height (px or CSS string)"},maxWidth:{control:"text",description:"Maximum width (px or CSS string)"}}},n={args:{direction:"vertical",size:"md",scrollbarVisibility:"auto",maxHeight:300},render:r=>e.jsx(t,{...r,children:e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Long Content"}),e.jsx("p",{className:"mb-4",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{className:"mb-4",children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("p",{className:"mb-4",children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."}),e.jsx("p",{className:"mb-4",children:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."}),e.jsx("p",{className:"mb-4",children:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."}),e.jsx("p",{children:"Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit."})]})})},c={args:{direction:"horizontal",size:"md",scrollbarVisibility:"auto",maxWidth:400},render:r=>e.jsx(t,{...r,children:e.jsx("div",{className:"p-4 flex gap-4",style:{width:"800px"},children:Array.from({length:8}).map((i,a)=>e.jsxs("div",{className:"flex-shrink-0 w-32 h-32 bg-primary/10 border border-primary rounded-lg flex items-center justify-center",children:["Item ",a+1]},a))})})},m={args:{direction:"both",size:"md",scrollbarVisibility:"auto",maxHeight:300,maxWidth:400},render:r=>e.jsx(t,{...r,children:e.jsxs("div",{className:"p-4",style:{width:"800px",minHeight:"600px"},children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Scroll Both Directions"}),e.jsx("div",{className:"grid grid-cols-4 gap-4",children:Array.from({length:32}).map((i,a)=>e.jsxs("div",{className:"w-full h-24 bg-accent/10 border border-accent rounded-lg flex items-center justify-center",children:["Cell ",a+1]},a))})]})})},u={render:()=>e.jsxs("div",{className:"border border-border rounded-lg",children:[e.jsxs("div",{className:"p-4 border-b border-border",children:[e.jsx("h3",{className:"font-semibold",children:"Activity Feed"}),e.jsx("p",{className:"text-sm text-text-secondary",children:"Recent activities in your workspace"})]}),e.jsx(t,{maxHeight:300,children:e.jsx("div",{className:"divide-y divide-border",children:Array.from({length:20}).map((r,i)=>e.jsx("div",{className:"p-4 hover:bg-surface-hover transition-colors",children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"size-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0",children:e.jsxs("span",{className:"text-xs font-medium text-primary",children:["U",i+1]})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("p",{className:"text-sm font-medium",children:["User ",i+1," performed an action"]}),e.jsx("p",{className:"text-xs text-text-secondary mt-1",children:"2 minutes ago"})]})]})},i))})})]})},p={render:()=>e.jsx(t,{maxHeight:400,className:"border border-border rounded-lg p-4",children:e.jsx("div",{className:"space-y-4",children:Array.from({length:8}).map((r,i)=>e.jsxs(G,{children:[e.jsxs(J,{children:[e.jsxs(K,{children:["Card ",i+1]}),e.jsx(Q,{children:"This is a card inside a scroll area"})]}),e.jsx(X,{children:e.jsx("p",{className:"text-sm",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})})]},i))})})},b={render:()=>e.jsxs("div",{className:"w-full max-w-md border border-border rounded-lg",children:[e.jsx("div",{className:"p-4 border-b border-border bg-surface",children:e.jsx("h3",{className:"font-semibold",children:"Chat Messages"})}),e.jsx(t,{maxHeight:400,size:"sm",scrollbarVisibility:"hover",children:e.jsx("div",{className:"p-4 space-y-4",children:[{user:"Alice",message:"Hey! How are you?",time:"10:30 AM"},{user:"You",message:"I'm good, thanks! How about you?",time:"10:32 AM",isOwn:!0},{user:"Alice",message:"Doing great! Working on the new project.",time:"10:33 AM"},{user:"You",message:"Nice! How's it going?",time:"10:35 AM",isOwn:!0},{user:"Alice",message:"Pretty well! Should be done by Friday.",time:"10:36 AM"},{user:"You",message:"Awesome! Let me know if you need any help.",time:"10:38 AM",isOwn:!0}].map((r,i)=>e.jsx("div",{className:`flex ${r.isOwn?"justify-end":"justify-start"}`,children:e.jsxs("div",{className:`max-w-[70%] ${r.isOwn?"order-2":"order-1"}`,children:[e.jsx("div",{className:`rounded-lg p-3 ${r.isOwn?"bg-primary text-white":"bg-surface border border-border"}`,children:e.jsx("p",{className:"text-sm",children:r.message})}),e.jsx("p",{className:`text-xs text-text-secondary mt-1 ${r.isOwn?"text-right":"text-left"}`,children:r.time})]})},i))})}),e.jsx("div",{className:"p-4 border-t border-border",children:e.jsx("input",{type:"text",placeholder:"Type a message...",className:"w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"})})]})};var N,w,j;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    direction: 'vertical',
    size: 'md',
    scrollbarVisibility: 'auto',
    maxHeight: 300
  },
  render: args => <ScrollArea {...args}>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-4">Long Content</h3>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className="mb-4">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className="mb-4">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
          eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
        <p className="mb-4">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
          ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
        </p>
        <p className="mb-4">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
          quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
        </p>
        <p>
          Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
          est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.
        </p>
      </div>
    </ScrollArea>
}`,...(j=(w=n.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var q,A,S;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    direction: 'horizontal',
    size: 'md',
    scrollbarVisibility: 'auto',
    maxWidth: 400
  },
  render: args => <ScrollArea {...args}>
      <div className="p-4 flex gap-4" style={{
      width: '800px'
    }}>
        {Array.from({
        length: 8
      }).map((_, i) => <div key={i} className="flex-shrink-0 w-32 h-32 bg-primary/10 border border-primary rounded-lg flex items-center justify-center">
            Item {i + 1}
          </div>)}
      </div>
    </ScrollArea>
}`,...(S=(A=c.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var C,k,H;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    direction: 'both',
    size: 'md',
    scrollbarVisibility: 'auto',
    maxHeight: 300,
    maxWidth: 400
  },
  render: args => <ScrollArea {...args}>
      <div className="p-4" style={{
      width: '800px',
      minHeight: '600px'
    }}>
        <h3 className="text-lg font-semibold mb-4">Scroll Both Directions</h3>
        <div className="grid grid-cols-4 gap-4">
          {Array.from({
          length: 32
        }).map((_, i) => <div key={i} className="w-full h-24 bg-accent/10 border border-accent rounded-lg flex items-center justify-center">
              Cell {i + 1}
            </div>)}
        </div>
      </div>
    </ScrollArea>
}`,...(H=(k=m.parameters)==null?void 0:k.docs)==null?void 0:H.source}}};var $,z,M;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div className="border border-border rounded-lg">
      <div className="p-4 border-b border-border">
        <h3 className="font-semibold">Activity Feed</h3>
        <p className="text-sm text-text-secondary">Recent activities in your workspace</p>
      </div>
      <ScrollArea maxHeight={300}>
        <div className="divide-y divide-border">
          {Array.from({
          length: 20
        }).map((_, i) => <div key={i} className="p-4 hover:bg-surface-hover transition-colors">
              <div className="flex items-start gap-3">
                <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-medium text-primary">U{i + 1}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">User {i + 1} performed an action</p>
                  <p className="text-xs text-text-secondary mt-1">2 minutes ago</p>
                </div>
              </div>
            </div>)}
        </div>
      </ScrollArea>
    </div>
}`,...(M=(z=u.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var O,_,D;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <ScrollArea maxHeight={400} className="border border-border rounded-lg p-4">
      <div className="space-y-4">
        {Array.from({
        length: 8
      }).map((_, i) => <Card key={i}>
            <CardHeader>
              <CardTitle>Card {i + 1}</CardTitle>
              <CardDescription>This is a card inside a scroll area</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </CardContent>
          </Card>)}
      </div>
    </ScrollArea>
}`,...(D=(_=p.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var E,V,W;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-md border border-border rounded-lg">
      <div className="p-4 border-b border-border bg-surface">
        <h3 className="font-semibold">Chat Messages</h3>
      </div>
      <ScrollArea maxHeight={400} size="sm" scrollbarVisibility="hover">
        <div className="p-4 space-y-4">
          {[{
          user: 'Alice',
          message: 'Hey! How are you?',
          time: '10:30 AM'
        }, {
          user: 'You',
          message: 'I\\'m good, thanks! How about you?',
          time: '10:32 AM',
          isOwn: true
        }, {
          user: 'Alice',
          message: 'Doing great! Working on the new project.',
          time: '10:33 AM'
        }, {
          user: 'You',
          message: 'Nice! How\\'s it going?',
          time: '10:35 AM',
          isOwn: true
        }, {
          user: 'Alice',
          message: 'Pretty well! Should be done by Friday.',
          time: '10:36 AM'
        }, {
          user: 'You',
          message: 'Awesome! Let me know if you need any help.',
          time: '10:38 AM',
          isOwn: true
        }].map((msg, i) => <div key={i} className={\`flex \${msg.isOwn ? 'justify-end' : 'justify-start'}\`}>
              <div className={\`max-w-[70%] \${msg.isOwn ? 'order-2' : 'order-1'}\`}>
                <div className={\`rounded-lg p-3 \${msg.isOwn ? 'bg-primary text-white' : 'bg-surface border border-border'}\`}>
                  <p className="text-sm">{msg.message}</p>
                </div>
                <p className={\`text-xs text-text-secondary mt-1 \${msg.isOwn ? 'text-right' : 'text-left'}\`}>
                  {msg.time}
                </p>
              </div>
            </div>)}
        </div>
      </ScrollArea>
      <div className="p-4 border-t border-border">
        <input type="text" placeholder="Type a message..." className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
      </div>
    </div>
}`,...(W=(V=b.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};const me=["Primary","Horizontal","BothDirections","WithMaxHeight","WithCards","ChatMessages"];export{m as BothDirections,b as ChatMessages,c as Horizontal,n as Primary,p as WithCards,u as WithMaxHeight,me as __namedExportsOrder,ce as default};
