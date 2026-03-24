import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{R as q,r as i}from"./index-ZH-6pyQh.js";import{C as o}from"./index-ByNQ8nWm.js";import{c as h}from"./utils-_uLxnvdl.js";import"./_commonjsHelpers-CqkleIqs.js";import"./variants-C8qliDOr.js";import"./minus-Bn6CyQhd.js";import"./createLucideIcon-BXJdBs6C.js";import"./check-CKCh4cDT.js";const c=q.memo(({label:e,helperText:n,error:s,orientation:l="vertical",className:d,classNames:r,children:a,ref:L,...B})=>{const f=i.useId(),C=e?`checkboxgroup-label-${f}`:void 0,y=n||s?`checkboxgroup-message-${f}`:void 0;return t.jsxs("div",{ref:L,role:"group","aria-labelledby":C,"aria-describedby":y,className:h("checkboxGroup_root","w-full",d,r==null?void 0:r.root),"data-slot":"root",...B,children:[e&&t.jsx("div",{className:"mb-2","data-slot":"label",children:t.jsx("span",{id:C,className:h("checkboxGroup_label","text-sm font-medium text-text-secondary",r==null?void 0:r.label),children:e})}),t.jsx("div",{className:h("checkboxGroup_group","flex",l==="vertical"?"flex-col gap-2":"flex-row flex-wrap gap-4",r==null?void 0:r.group),"data-slot":"group",children:a}),(n||s)&&t.jsx("p",{id:y,className:h(s?"checkboxGroup_error":"checkboxGroup_helper","mt-2 text-xs",s?"text-error":"text-text-secondary",s?r==null?void 0:r.error:r==null?void 0:r.helper),"data-slot":s?"error":"helper",children:s||n})]})});c.displayName="CheckboxGroup";c.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroup",props:{orientation:{defaultValue:{value:"'vertical'",computed:!1},required:!1}}};const te={title:"Data Entry/CheckboxGroup",component:c,tags:["autodocs"],argTypes:{orientation:{control:"select",options:["vertical","horizontal"],description:"Layout orientation"},label:{control:"text",description:"Group label"},helperText:{control:"text",description:"Helper text"},error:{control:"text",description:"Error message"}}},m={render:()=>{const[e,n]=i.useState({option1:!1,option2:!1,option3:!1});return t.jsxs(c,{label:"Select options",children:[t.jsx(o,{label:"Option 1",checked:e.option1,onChange:s=>n({...e,option1:s.target.checked})}),t.jsx(o,{label:"Option 2",checked:e.option2,onChange:s=>n({...e,option2:s.target.checked})}),t.jsx(o,{label:"Option 3",checked:e.option3,onChange:s=>n({...e,option3:s.target.checked})})]})}},u={render:()=>{const[e,n]=i.useState({notifications:!0,newsletter:!1,updates:!0});return t.jsxs(c,{label:"Notification Preferences",orientation:"vertical",children:[t.jsx(o,{label:"Email Notifications",helperText:"Receive important updates via email",checked:e.notifications,onChange:s=>n({...e,notifications:s.target.checked})}),t.jsx(o,{label:"Newsletter",helperText:"Get our monthly newsletter",checked:e.newsletter,onChange:s=>n({...e,newsletter:s.target.checked})}),t.jsx(o,{label:"Product Updates",helperText:"Stay informed about new features",checked:e.updates,onChange:s=>n({...e,updates:s.target.checked})})]})}},p={render:()=>{const[e,n]=i.useState({monday:!0,wednesday:!1,friday:!0});return t.jsxs(c,{label:"Select days",orientation:"horizontal",children:[t.jsx(o,{label:"Monday",checked:e.monday,onChange:s=>n({...e,monday:s.target.checked})}),t.jsx(o,{label:"Wednesday",checked:e.wednesday,onChange:s=>n({...e,wednesday:s.target.checked})}),t.jsx(o,{label:"Friday",checked:e.friday,onChange:s=>n({...e,friday:s.target.checked})})]})}},k={render:()=>{const[e,n]=i.useState({read:!0,write:!1,delete:!1});return t.jsxs(c,{label:"User Permissions",helperText:"Select the permissions you want to grant",orientation:"vertical",children:[t.jsx(o,{label:"Read Access",helperText:"View files and folders",checked:e.read,onChange:s=>n({...e,read:s.target.checked})}),t.jsx(o,{label:"Write Access",helperText:"Create and edit files",checked:e.write,onChange:s=>n({...e,write:s.target.checked})}),t.jsx(o,{label:"Delete Access",helperText:"Remove files and folders",checked:e.delete,onChange:s=>n({...e,delete:s.target.checked})})]})}},b={render:()=>{const[e,n]=i.useState({terms:!1,privacy:!1}),[s,l]=i.useState(!1),d=()=>{l(!0)},r=s&&(!e.terms||!e.privacy);return t.jsxs("div",{className:"space-y-4 max-w-md",children:[t.jsxs(c,{label:"Agreement *",error:r?"You must accept both terms to continue":"",orientation:"vertical",children:[t.jsx(o,{label:"I agree to the Terms and Conditions",checked:e.terms,onChange:a=>n({...e,terms:a.target.checked})}),t.jsx(o,{label:"I agree to the Privacy Policy",checked:e.privacy,onChange:a=>n({...e,privacy:a.target.checked})})]}),t.jsx("button",{onClick:d,className:"px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors",children:"Submit"})]})}},g={render:()=>{const[e,n]=i.useState({item1:!1,item2:!1,item3:!1,item4:!1}),s=Object.values(e).every(Boolean),l=Object.values(e).some(Boolean)&&!s,d=r=>{n({item1:r,item2:r,item3:r,item4:r})};return t.jsxs(c,{label:"Select Items",orientation:"vertical",children:[t.jsx(o,{label:"Select All",checked:s,indeterminate:l,onChange:r=>d(r.target.checked)}),t.jsxs("div",{className:"ml-6 space-y-2",children:[t.jsx(o,{label:"Item 1",checked:e.item1,onChange:r=>n({...e,item1:r.target.checked})}),t.jsx(o,{label:"Item 2",checked:e.item2,onChange:r=>n({...e,item2:r.target.checked})}),t.jsx(o,{label:"Item 3",checked:e.item3,onChange:r=>n({...e,item3:r.target.checked})}),t.jsx(o,{label:"Item 4",checked:e.item4,onChange:r=>n({...e,item4:r.target.checked})})]})]})}},x={render:()=>{const[e,n]=i.useState({files:!1,filesRead:!1,filesWrite:!1,users:!1,usersRead:!1,usersWrite:!1}),s=a=>{n({...e,files:a,filesRead:a,filesWrite:a})},l=a=>{n({...e,users:a,usersRead:a,usersWrite:a})},d=(e.filesRead||e.filesWrite)&&!(e.filesRead&&e.filesWrite),r=(e.usersRead||e.usersWrite)&&!(e.usersRead&&e.usersWrite);return t.jsxs(c,{label:"Module Permissions",orientation:"vertical",children:[t.jsx(o,{label:"Files Module",checked:e.filesRead&&e.filesWrite,indeterminate:d,onChange:a=>s(a.target.checked)}),t.jsxs("div",{className:"ml-6 space-y-2",children:[t.jsx(o,{label:"Read Files",checked:e.filesRead,onChange:a=>n({...e,filesRead:a.target.checked})}),t.jsx(o,{label:"Write Files",checked:e.filesWrite,onChange:a=>n({...e,filesWrite:a.target.checked})})]}),t.jsx(o,{label:"Users Module",checked:e.usersRead&&e.usersWrite,indeterminate:r,onChange:a=>l(a.target.checked)}),t.jsxs("div",{className:"ml-6 space-y-2",children:[t.jsx(o,{label:"View Users",checked:e.usersRead,onChange:a=>n({...e,usersRead:a.target.checked})}),t.jsx(o,{label:"Manage Users",checked:e.usersWrite,onChange:a=>n({...e,usersWrite:a.target.checked})})]})]})}};var v,S,j;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState({
      option1: false,
      option2: false,
      option3: false
    });
    return <CheckboxGroup label="Select options">
        <Checkbox label="Option 1" checked={checked.option1} onChange={e => setChecked({
        ...checked,
        option1: e.target.checked
      })} />
        <Checkbox label="Option 2" checked={checked.option2} onChange={e => setChecked({
        ...checked,
        option2: e.target.checked
      })} />
        <Checkbox label="Option 3" checked={checked.option3} onChange={e => setChecked({
        ...checked,
        option3: e.target.checked
      })} />
      </CheckboxGroup>;
  }
}`,...(j=(S=m.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var R,W,w;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const [features, setFeatures] = useState({
      notifications: true,
      newsletter: false,
      updates: true
    });
    return <CheckboxGroup label="Notification Preferences" orientation="vertical">
        <Checkbox label="Email Notifications" helperText="Receive important updates via email" checked={features.notifications} onChange={e => setFeatures({
        ...features,
        notifications: e.target.checked
      })} />
        <Checkbox label="Newsletter" helperText="Get our monthly newsletter" checked={features.newsletter} onChange={e => setFeatures({
        ...features,
        newsletter: e.target.checked
      })} />
        <Checkbox label="Product Updates" helperText="Stay informed about new features" checked={features.updates} onChange={e => setFeatures({
        ...features,
        updates: e.target.checked
      })} />
      </CheckboxGroup>;
  }
}`,...(w=(W=u.parameters)==null?void 0:W.docs)==null?void 0:w.source}}};var I,P,G;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const [days, setDays] = useState({
      monday: true,
      wednesday: false,
      friday: true
    });
    return <CheckboxGroup label="Select days" orientation="horizontal">
        <Checkbox label="Monday" checked={days.monday} onChange={e => setDays({
        ...days,
        monday: e.target.checked
      })} />
        <Checkbox label="Wednesday" checked={days.wednesday} onChange={e => setDays({
        ...days,
        wednesday: e.target.checked
      })} />
        <Checkbox label="Friday" checked={days.friday} onChange={e => setDays({
        ...days,
        friday: e.target.checked
      })} />
      </CheckboxGroup>;
  }
}`,...(G=(P=p.parameters)==null?void 0:P.docs)==null?void 0:G.source}}};var T,F,A;k.parameters={...k.parameters,docs:{...(T=k.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const [permissions, setPermissions] = useState({
      read: true,
      write: false,
      delete: false
    });
    return <CheckboxGroup label="User Permissions" helperText="Select the permissions you want to grant" orientation="vertical">
        <Checkbox label="Read Access" helperText="View files and folders" checked={permissions.read} onChange={e => setPermissions({
        ...permissions,
        read: e.target.checked
      })} />
        <Checkbox label="Write Access" helperText="Create and edit files" checked={permissions.write} onChange={e => setPermissions({
        ...permissions,
        write: e.target.checked
      })} />
        <Checkbox label="Delete Access" helperText="Remove files and folders" checked={permissions.delete} onChange={e => setPermissions({
        ...permissions,
        delete: e.target.checked
      })} />
      </CheckboxGroup>;
  }
}`,...(A=(F=k.parameters)==null?void 0:F.docs)==null?void 0:A.source}}};var U,E,O;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState({
      terms: false,
      privacy: false
    });
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
      setSubmitted(true);
    };
    const hasError = submitted && (!selected.terms || !selected.privacy);
    return <div className="space-y-4 max-w-md">
        <CheckboxGroup label="Agreement *" error={hasError ? 'You must accept both terms to continue' : ''} orientation="vertical">
          <Checkbox label="I agree to the Terms and Conditions" checked={selected.terms} onChange={e => setSelected({
          ...selected,
          terms: e.target.checked
        })} />
          <Checkbox label="I agree to the Privacy Policy" checked={selected.privacy} onChange={e => setSelected({
          ...selected,
          privacy: e.target.checked
        })} />
        </CheckboxGroup>
        <button onClick={handleSubmit} className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
          Submit
        </button>
      </div>;
  }
}`,...(O=(E=b.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var M,_,D;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const [items, setItems] = useState({
      item1: false,
      item2: false,
      item3: false,
      item4: false
    });
    const allChecked = Object.values(items).every(Boolean);
    const isIndeterminate = Object.values(items).some(Boolean) && !allChecked;
    const handleSelectAll = (checked: boolean) => {
      setItems({
        item1: checked,
        item2: checked,
        item3: checked,
        item4: checked
      });
    };
    return <CheckboxGroup label="Select Items" orientation="vertical">
        <Checkbox label="Select All" checked={allChecked} indeterminate={isIndeterminate} onChange={e => handleSelectAll(e.target.checked)} />
        <div className="ml-6 space-y-2">
          <Checkbox label="Item 1" checked={items.item1} onChange={e => setItems({
          ...items,
          item1: e.target.checked
        })} />
          <Checkbox label="Item 2" checked={items.item2} onChange={e => setItems({
          ...items,
          item2: e.target.checked
        })} />
          <Checkbox label="Item 3" checked={items.item3} onChange={e => setItems({
          ...items,
          item3: e.target.checked
        })} />
          <Checkbox label="Item 4" checked={items.item4} onChange={e => setItems({
          ...items,
          item4: e.target.checked
        })} />
        </div>
      </CheckboxGroup>;
  }
}`,...(D=(_=g.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var V,z,H;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const [permissions, setPermissions] = useState({
      files: false,
      filesRead: false,
      filesWrite: false,
      users: false,
      usersRead: false,
      usersWrite: false
    });
    const handleFilesChange = (checked: boolean) => {
      setPermissions({
        ...permissions,
        files: checked,
        filesRead: checked,
        filesWrite: checked
      });
    };
    const handleUsersChange = (checked: boolean) => {
      setPermissions({
        ...permissions,
        users: checked,
        usersRead: checked,
        usersWrite: checked
      });
    };
    const filesIndeterminate = (permissions.filesRead || permissions.filesWrite) && !(permissions.filesRead && permissions.filesWrite);
    const usersIndeterminate = (permissions.usersRead || permissions.usersWrite) && !(permissions.usersRead && permissions.usersWrite);
    return <CheckboxGroup label="Module Permissions" orientation="vertical">
        <Checkbox label="Files Module" checked={permissions.filesRead && permissions.filesWrite} indeterminate={filesIndeterminate} onChange={e => handleFilesChange(e.target.checked)} />
        <div className="ml-6 space-y-2">
          <Checkbox label="Read Files" checked={permissions.filesRead} onChange={e => setPermissions({
          ...permissions,
          filesRead: e.target.checked
        })} />
          <Checkbox label="Write Files" checked={permissions.filesWrite} onChange={e => setPermissions({
          ...permissions,
          filesWrite: e.target.checked
        })} />
        </div>

        <Checkbox label="Users Module" checked={permissions.usersRead && permissions.usersWrite} indeterminate={usersIndeterminate} onChange={e => handleUsersChange(e.target.checked)} />
        <div className="ml-6 space-y-2">
          <Checkbox label="View Users" checked={permissions.usersRead} onChange={e => setPermissions({
          ...permissions,
          usersRead: e.target.checked
        })} />
          <Checkbox label="Manage Users" checked={permissions.usersWrite} onChange={e => setPermissions({
          ...permissions,
          usersWrite: e.target.checked
        })} />
        </div>
      </CheckboxGroup>;
  }
}`,...(H=(z=x.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};const se=["Primary","VerticalLayout","HorizontalLayout","WithHelperText","WithError","SelectAll","NestedCheckboxes"];export{p as HorizontalLayout,x as NestedCheckboxes,m as Primary,g as SelectAll,u as VerticalLayout,b as WithError,k as WithHelperText,se as __namedExportsOrder,te as default};
