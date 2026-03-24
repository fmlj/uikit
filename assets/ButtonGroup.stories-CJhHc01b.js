import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as p,r as c}from"./index-ZH-6pyQh.js";import{B as t}from"./index-23ax1BAm.js";import{c as k,a as he}from"./utils-_uLxnvdl.js";import{S}from"./save-BSO9TH5m.js";import{U as pe}from"./upload-CmkD6Ht7.js";import{D as I}from"./download-DHgBCDXU.js";import{T as se}from"./trash-2-vrMpzzku.js";import{S as C}from"./share-BYSDQbS3.js";import{S as xe}from"./square-pen-BpIz_lVT.js";import{C as fe}from"./copy-IW0OH-Me.js";import{U as ne}from"./user-BM8Midap.js";import{S as oe}from"./settings-D1wlBKo1.js";import{M as ae}from"./mail-1HDD9Lg3.js";import{C as z}from"./chevron-down-D1qmGosc.js";import{B as ve,I as Be,U as je}from"./underline-DRRndS3I.js";import{T as Ne,a as ge,b as be}from"./text-align-start-DMpfEwFb.js";import{c as ie}from"./createLucideIcon-BXJdBs6C.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-ZW2Bszwo.js";import"./index-Bo-loign.js";import"./index-BoArNvwV.js";import"./variants-C8qliDOr.js";import"./useRipple-BuuTbn0W.js";/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=[["path",{d:"M11 5h10",key:"1cz7ny"}],["path",{d:"M11 12h10",key:"1438ji"}],["path",{d:"M11 19h10",key:"11t30w"}],["path",{d:"M4 4h1v5",key:"10yrso"}],["path",{d:"M4 9h2",key:"r1h2o0"}],["path",{d:"M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02",key:"xtkcd5"}]],ze=ie("list-ordered",ye);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Se=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],Ie=ie("list",Se),Ce=he("inline-flex",{variants:{vertical:{true:"flex-col",false:"flex-row"},fullWidth:{true:"w-full [&>*]:flex-1",false:""}},defaultVariants:{vertical:!1,fullWidth:!1}}),ke="[&>*:not(:first-child)]:rounded-l-none [&>*:not(:last-child)]:border-r-0 [&>*:not(:last-child)]:rounded-r-none",Ge="[&>*:not(:first-child)]:rounded-t-none [&>*:not(:last-child)]:border-b-0 [&>*:not(:last-child)]:rounded-b-none",we={sm:"gap-1",md:"gap-2",lg:"gap-3"},s=p.memo(({vertical:n=!1,attached:a=!0,gap:o="md",fullWidth:r=!1,size:d,variant:i,color:m,shape:h,disabled:le=!1,className:re,classNames:u,children:ce,ref:de,...ue})=>{const me=p.Children.map(ce,l=>p.isValidElement(l)?p.cloneElement(l,{size:l.props.size??d,variant:l.props.variant??i,color:l.props.color??m,shape:l.props.shape??h,disabled:l.props.disabled||le,className:k(u==null?void 0:u.button,l.props.className)}):l);return e.jsx("div",{ref:de,role:"group",className:k("buttonGroup_root",Ce({vertical:n,fullWidth:r}),a?n?Ge:ke:we[o],u==null?void 0:u.root,re),"data-slot":"root",...ue,children:me})});s.displayName="ButtonGroup";s.__docgenInfo={description:"",methods:[],displayName:"ButtonGroup",props:{vertical:{defaultValue:{value:"false",computed:!1},required:!1},attached:{defaultValue:{value:"true",computed:!1},required:!1},gap:{defaultValue:{value:"'md'",computed:!1},required:!1},fullWidth:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const tt={title:"General/ButtonGroup",component:s,tags:["autodocs"],argTypes:{vertical:{control:"boolean",description:"Vertical layout"},attached:{control:"boolean",description:"Buttons visually connected"},gap:{control:"select",options:["sm","md","lg"],description:"Gap size when not attached"},fullWidth:{control:"boolean",description:"Full width layout"},size:{control:"select",options:["xs","sm","md","lg"],description:"Size for all buttons"},variant:{control:"select",options:["solid","outline","ghost","soft","link","dashed"],description:"Variant for all buttons"},color:{control:"select",options:["primary","secondary","accent","success","error","warning","info"],description:"Color for all buttons"},disabled:{control:"boolean",description:"Disable all buttons"}}},x={render:()=>e.jsxs(s,{children:[e.jsx(t,{children:"Button 1"}),e.jsx(t,{children:"Button 2"}),e.jsx(t,{children:"Button 3"})]})},f={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-2",children:"Basic Horizontal Group"}),e.jsxs(s,{children:[e.jsx(t,{children:"Save"}),e.jsx(t,{children:"Cancel"}),e.jsx(t,{children:"Delete"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-2",children:"With Icons"}),e.jsxs(s,{children:[e.jsx(t,{leftIcon:e.jsx(S,{className:"size-4"}),children:"Save"}),e.jsx(t,{leftIcon:e.jsx(I,{className:"size-4"}),children:"Download"}),e.jsx(t,{leftIcon:e.jsx(C,{className:"size-4"}),children:"Share"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-2",children:"Icon Only"}),e.jsxs(s,{children:[e.jsx(t,{iconOnly:!0,leftIcon:e.jsx(xe,{className:"size-4"})}),e.jsx(t,{iconOnly:!0,leftIcon:e.jsx(fe,{className:"size-4"})}),e.jsx(t,{iconOnly:!0,leftIcon:e.jsx(se,{className:"size-4"})})]})]})]})},v={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-2",children:"Basic Vertical Group"}),e.jsxs(s,{vertical:!0,children:[e.jsx(t,{children:"Option 1"}),e.jsx(t,{children:"Option 2"}),e.jsx(t,{children:"Option 3"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-2",children:"With Icons"}),e.jsxs(s,{vertical:!0,children:[e.jsx(t,{leftIcon:e.jsx(ne,{className:"size-4"}),children:"Profile"}),e.jsx(t,{leftIcon:e.jsx(oe,{className:"size-4"}),children:"Settings"}),e.jsx(t,{leftIcon:e.jsx(ae,{className:"size-4"}),children:"Messages"})]})]})]})},B={render:()=>{const[n,a]=c.useState(!1),[o,r]=c.useState(!1),[d,i]=c.useState(!1),[m,h]=c.useState("left");return e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-sm font-semibold",children:"Rich Text Editor Toolbar"}),e.jsxs("div",{className:"flex gap-2 flex-wrap",children:[e.jsxs(s,{size:"sm",variant:"outline",children:[e.jsx(t,{iconOnly:!0,leftIcon:e.jsx(ve,{className:"size-4"}),variant:n?"solid":"outline",onClick:()=>a(!n)}),e.jsx(t,{iconOnly:!0,leftIcon:e.jsx(Be,{className:"size-4"}),variant:o?"solid":"outline",onClick:()=>r(!o)}),e.jsx(t,{iconOnly:!0,leftIcon:e.jsx(je,{className:"size-4"}),variant:d?"solid":"outline",onClick:()=>i(!d)})]}),e.jsxs(s,{size:"sm",variant:"outline",children:[e.jsx(t,{iconOnly:!0,leftIcon:e.jsx(Ne,{className:"size-4"}),variant:m==="left"?"solid":"outline",onClick:()=>h("left")}),e.jsx(t,{iconOnly:!0,leftIcon:e.jsx(ge,{className:"size-4"}),variant:m==="center"?"solid":"outline",onClick:()=>h("center")}),e.jsx(t,{iconOnly:!0,leftIcon:e.jsx(be,{className:"size-4"}),variant:m==="right"?"solid":"outline",onClick:()=>h("right")})]}),e.jsxs(s,{size:"sm",variant:"outline",children:[e.jsx(t,{iconOnly:!0,leftIcon:e.jsx(Ie,{className:"size-4"})}),e.jsx(t,{iconOnly:!0,leftIcon:e.jsx(ze,{className:"size-4"})})]})]})]})}},j={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-2",children:"Save Actions"}),e.jsxs(s,{children:[e.jsx(t,{leftIcon:e.jsx(S,{className:"size-4"}),children:"Save"}),e.jsx(t,{iconOnly:!0,leftIcon:e.jsx(z,{className:"size-4"})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-2",children:"Share Actions"}),e.jsxs(s,{color:"accent",children:[e.jsx(t,{leftIcon:e.jsx(C,{className:"size-4"}),children:"Share"}),e.jsx(t,{iconOnly:!0,leftIcon:e.jsx(z,{className:"size-4"})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-2",children:"Download Options"}),e.jsxs(s,{variant:"outline",color:"success",children:[e.jsx(t,{leftIcon:e.jsx(I,{className:"size-4"}),children:"Download PDF"}),e.jsx(t,{iconOnly:!0,leftIcon:e.jsx(z,{className:"size-4"})})]})]})]})},N={render:()=>{const[n,a]=c.useState(3),o=10;return e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-sm font-semibold",children:"Pagination"}),e.jsx("div",{className:"flex justify-center",children:e.jsxs(s,{variant:"outline",size:"sm",children:[e.jsx(t,{disabled:n===1,onClick:()=>a(n-1),children:"Previous"}),Array.from({length:Math.min(5,o)},(r,d)=>{const i=n<=3?d+1:n-2+d;return i>o?null:e.jsx(t,{variant:n===i?"solid":"outline",onClick:()=>a(i),children:i},i)}),e.jsx(t,{disabled:n===o,onClick:()=>a(n+1),children:"Next"})]})}),e.jsxs("p",{className:"text-sm text-center text-text-secondary",children:["Page ",n," of ",o]})]})}},g={render:()=>{const[n,a]=c.useState(!1),o=()=>{a(!0),setTimeout(()=>a(!1),2e3)};return e.jsxs("div",{className:"space-y-4 max-w-2xl",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Document Editor"}),e.jsx("div",{className:"p-6 border border-border rounded-md bg-surface",children:e.jsx("p",{className:"text-text-secondary",children:"Your document content goes here..."})}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs(s,{children:[e.jsx(t,{leftIcon:e.jsx(S,{className:"size-4"}),onClick:o,color:"success",children:n?"Saved!":"Save"}),e.jsx(t,{leftIcon:e.jsx(pe,{className:"size-4"}),children:"Export"}),e.jsx(t,{leftIcon:e.jsx(I,{className:"size-4"}),children:"Download"})]}),e.jsxs(s,{variant:"outline",children:[e.jsx(t,{children:"Cancel"}),e.jsx(t,{color:"error",leftIcon:e.jsx(se,{className:"size-4"}),children:"Delete"})]})]})]})}},b={render:()=>e.jsxs("div",{className:"space-y-4 max-w-xs",children:[e.jsx("h3",{className:"text-sm font-semibold",children:"Mobile Navigation"}),e.jsxs(s,{vertical:!0,fullWidth:!0,variant:"ghost",children:[e.jsx(t,{leftIcon:e.jsx(ne,{className:"size-4"}),children:"Profile"}),e.jsx(t,{leftIcon:e.jsx(oe,{className:"size-4"}),children:"Settings"}),e.jsx(t,{leftIcon:e.jsx(ae,{className:"size-4"}),children:"Messages"}),e.jsx(t,{leftIcon:e.jsx(C,{className:"size-4"}),children:"Share"})]})]})},y={render:()=>{const[n,a]=c.useState("list"),[o,r]=c.useState("week");return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-2",children:"View Selector"}),e.jsxs(s,{size:"sm",variant:"outline",children:[e.jsx(t,{variant:n==="list"?"solid":"outline",onClick:()=>a("list"),children:"List"}),e.jsx(t,{variant:n==="grid"?"solid":"outline",onClick:()=>a("grid"),children:"Grid"}),e.jsx(t,{variant:n==="calendar"?"solid":"outline",onClick:()=>a("calendar"),children:"Calendar"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-2",children:"Time Period"}),e.jsxs(s,{size:"sm",variant:"outline",color:"accent",children:[e.jsx(t,{variant:o==="day"?"solid":"outline",onClick:()=>r("day"),children:"Day"}),e.jsx(t,{variant:o==="week"?"solid":"outline",onClick:()=>r("week"),children:"Week"}),e.jsx(t,{variant:o==="month"?"solid":"outline",onClick:()=>r("month"),children:"Month"})]})]})]})}};var G,w,P;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <ButtonGroup>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </ButtonGroup>
}`,...(P=(w=x.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var O,D,M;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold mb-2">Basic Horizontal Group</h3>
        <ButtonGroup>
          <Button>Save</Button>
          <Button>Cancel</Button>
          <Button>Delete</Button>
        </ButtonGroup>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-2">With Icons</h3>
        <ButtonGroup>
          <Button leftIcon={<Save className="size-4" />}>Save</Button>
          <Button leftIcon={<Download className="size-4" />}>Download</Button>
          <Button leftIcon={<Share className="size-4" />}>Share</Button>
        </ButtonGroup>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-2">Icon Only</h3>
        <ButtonGroup>
          <Button iconOnly leftIcon={<Edit className="size-4" />} />
          <Button iconOnly leftIcon={<Copy className="size-4" />} />
          <Button iconOnly leftIcon={<Trash2 className="size-4" />} />
        </ButtonGroup>
      </div>
    </div>
}`,...(M=(D=f.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var V,T,A;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold mb-2">Basic Vertical Group</h3>
        <ButtonGroup vertical>
          <Button>Option 1</Button>
          <Button>Option 2</Button>
          <Button>Option 3</Button>
        </ButtonGroup>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-2">With Icons</h3>
        <ButtonGroup vertical>
          <Button leftIcon={<User className="size-4" />}>Profile</Button>
          <Button leftIcon={<Settings className="size-4" />}>Settings</Button>
          <Button leftIcon={<Mail className="size-4" />}>Messages</Button>
        </ButtonGroup>
      </div>
    </div>
}`,...(A=(T=v.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var E,U,W;B.parameters={...B.parameters,docs:{...(E=B.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [bold, setBold] = useState(false);
    const [italic, setItalic] = useState(false);
    const [underline, setUnderline] = useState(false);
    const [align, setAlign] = useState<'left' | 'center' | 'right'>('left');
    return <div className="space-y-4">
        <h3 className="text-sm font-semibold">Rich Text Editor Toolbar</h3>
        <div className="flex gap-2 flex-wrap">
          <ButtonGroup size="sm" variant="outline">
            <Button iconOnly leftIcon={<Bold className="size-4" />} variant={bold ? 'solid' : 'outline'} onClick={() => setBold(!bold)} />
            <Button iconOnly leftIcon={<Italic className="size-4" />} variant={italic ? 'solid' : 'outline'} onClick={() => setItalic(!italic)} />
            <Button iconOnly leftIcon={<Underline className="size-4" />} variant={underline ? 'solid' : 'outline'} onClick={() => setUnderline(!underline)} />
          </ButtonGroup>

          <ButtonGroup size="sm" variant="outline">
            <Button iconOnly leftIcon={<AlignLeft className="size-4" />} variant={align === 'left' ? 'solid' : 'outline'} onClick={() => setAlign('left')} />
            <Button iconOnly leftIcon={<AlignCenter className="size-4" />} variant={align === 'center' ? 'solid' : 'outline'} onClick={() => setAlign('center')} />
            <Button iconOnly leftIcon={<AlignRight className="size-4" />} variant={align === 'right' ? 'solid' : 'outline'} onClick={() => setAlign('right')} />
          </ButtonGroup>

          <ButtonGroup size="sm" variant="outline">
            <Button iconOnly leftIcon={<List className="size-4" />} />
            <Button iconOnly leftIcon={<ListOrdered className="size-4" />} />
          </ButtonGroup>
        </div>
      </div>;
  }
}`,...(W=(U=B.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var _,L,q;j.parameters={...j.parameters,docs:{...(_=j.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold mb-2">Save Actions</h3>
        <ButtonGroup>
          <Button leftIcon={<Save className="size-4" />}>Save</Button>
          <Button iconOnly leftIcon={<ChevronDown className="size-4" />} />
        </ButtonGroup>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-2">Share Actions</h3>
        <ButtonGroup color="accent">
          <Button leftIcon={<Share className="size-4" />}>Share</Button>
          <Button iconOnly leftIcon={<ChevronDown className="size-4" />} />
        </ButtonGroup>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-2">Download Options</h3>
        <ButtonGroup variant="outline" color="success">
          <Button leftIcon={<Download className="size-4" />}>Download PDF</Button>
          <Button iconOnly leftIcon={<ChevronDown className="size-4" />} />
        </ButtonGroup>
      </div>
    </div>
}`,...(q=(L=j.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var H,R,F;N.parameters={...N.parameters,docs:{...(H=N.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const [currentPage, setCurrentPage] = useState(3);
    const totalPages = 10;
    return <div className="space-y-4">
        <h3 className="text-sm font-semibold">Pagination</h3>
        <div className="flex justify-center">
          <ButtonGroup variant="outline" size="sm">
            <Button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
              Previous
            </Button>
            {Array.from({
            length: Math.min(5, totalPages)
          }, (_, i) => {
            const page = currentPage <= 3 ? i + 1 : currentPage - 2 + i;
            if (page > totalPages) return null;
            return <Button key={page} variant={currentPage === page ? 'solid' : 'outline'} onClick={() => setCurrentPage(page)}>
                  {page}
                </Button>;
          })}
            <Button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>
              Next
            </Button>
          </ButtonGroup>
        </div>
        <p className="text-sm text-center text-text-secondary">
          Page {currentPage} of {totalPages}
        </p>
      </div>;
  }
}`,...(F=(R=N.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var Y,$,J;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    const [saved, setSaved] = useState(false);
    const handleSave = () => {
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    };
    return <div className="space-y-4 max-w-2xl">
        <h3 className="text-lg font-semibold">Document Editor</h3>
        <div className="p-6 border border-border rounded-md bg-surface">
          <p className="text-text-secondary">Your document content goes here...</p>
        </div>
        <div className="flex justify-between items-center">
          <ButtonGroup>
            <Button leftIcon={<Save className="size-4" />} onClick={handleSave} color="success">
              {saved ? 'Saved!' : 'Save'}
            </Button>
            <Button leftIcon={<Upload className="size-4" />}>Export</Button>
            <Button leftIcon={<Download className="size-4" />}>Download</Button>
          </ButtonGroup>
          <ButtonGroup variant="outline">
            <Button>Cancel</Button>
            <Button color="error" leftIcon={<Trash2 className="size-4" />}>
              Delete
            </Button>
          </ButtonGroup>
        </div>
      </div>;
  }
}`,...(J=($=g.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};var K,Q,X;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 max-w-xs">
      <h3 className="text-sm font-semibold">Mobile Navigation</h3>
      <ButtonGroup vertical fullWidth variant="ghost">
        <Button leftIcon={<User className="size-4" />}>Profile</Button>
        <Button leftIcon={<Settings className="size-4" />}>Settings</Button>
        <Button leftIcon={<Mail className="size-4" />}>Messages</Button>
        <Button leftIcon={<Share className="size-4" />}>Share</Button>
      </ButtonGroup>
    </div>
}`,...(X=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,te;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    const [view, setView] = useState<'list' | 'grid' | 'calendar'>('list');
    const [period, setPeriod] = useState<'day' | 'week' | 'month'>('week');
    return <div className="space-y-6">
        <div>
          <h3 className="text-sm font-semibold mb-2">View Selector</h3>
          <ButtonGroup size="sm" variant="outline">
            <Button variant={view === 'list' ? 'solid' : 'outline'} onClick={() => setView('list')}>
              List
            </Button>
            <Button variant={view === 'grid' ? 'solid' : 'outline'} onClick={() => setView('grid')}>
              Grid
            </Button>
            <Button variant={view === 'calendar' ? 'solid' : 'outline'} onClick={() => setView('calendar')}>
              Calendar
            </Button>
          </ButtonGroup>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-2">Time Period</h3>
          <ButtonGroup size="sm" variant="outline" color="accent">
            <Button variant={period === 'day' ? 'solid' : 'outline'} onClick={() => setPeriod('day')}>
              Day
            </Button>
            <Button variant={period === 'week' ? 'solid' : 'outline'} onClick={() => setPeriod('week')}>
              Week
            </Button>
            <Button variant={period === 'month' ? 'solid' : 'outline'} onClick={() => setPeriod('month')}>
              Month
            </Button>
          </ButtonGroup>
        </div>
      </div>;
  }
}`,...(te=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const st=["Default","Horizontal","Vertical","TextEditorToolbar","SplitButton","Pagination","ActionBar","MobileNavigation","SegmentedControl"];export{g as ActionBar,x as Default,f as Horizontal,b as MobileNavigation,N as Pagination,y as SegmentedControl,j as SplitButton,B as TextEditorToolbar,v as Vertical,st as __namedExportsOrder,tt as default};
