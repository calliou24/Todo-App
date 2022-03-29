import{r as k,j as m,a as e,C as T,t as b,T as A,R as v,b as y,c as L}from"./vendor.37b1c185.js";const x=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&n(p)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}};x();const I="_todoApp_15688_1",S="_head_15688_15",F="_logoText_15688_27",O="_taskCont_15688_49",w="_taskList_15688_69",D="_taskStatus_15688_95",R="_itemsLeft_15688_109",E="_taskFilters_15688_115",M="_btn_15688_125",P="_changeTheme_15688_141";var c={todoApp:I,head:S,logoText:F,taskCont:O,taskList:w,taskStatus:D,itemsLeft:R,taskFilters:E,btn:M,changeTheme:P};const j="_form_5png9_1",B="_completeTask_5png9_23",$="_taskComplete_5png9_1",G="_check_5png9_57",J="_input_5png9_65",U="_checkIconCont_5png9_85",V="_icon_5png9_111";var _={form:j,completeTask:B,taskComplete:$,check:G,input:J,checkIconCont:U,icon:V},N="/Todo-App/assets/icon-check.bcf055e6.svg";function q({handdleAdd:o}){const[a,r]=k.exports.useState(""),[n,t]=k.exports.useState(!1),[s,p]=k.exports.useState({});k.exports.useEffect(()=>{p({name:a,complete:n})},[a,n]);const f=h=>{h.preventDefault(),o(s),r("")};return m("form",{onSubmit:h=>f(h),className:_.form,children:[e("div",{id:n?_.taskComplete:void 0,onClick:()=>t(!n),className:_.completeTask,children:n&&e("img",{className:_.check,src:N,alt:"check icon"})}),e("input",{className:_.input,value:a,onChange:h=>r(h.target.value),placeholder:"Create a new todo"}),e("div",{onClick:f,className:_.checkIconCont,children:e(T,{className:_.icon})})]})}var H="/Todo-App/assets/icon-moon.dadf6d0a.svg",K="/Todo-App/assets/icon-sun.fc80f87a.svg";const z="_task_ts1i8_1",Q="_firstCont_ts1i8_23",W="_checker_ts1i8_29",X="_checkIcon_ts1i8_55",Y="_taskName_ts1i8_63",Z="_crossImg_ts1i8_85",ee="_taskCompleted_ts1i8_1",te="_taskNameComplete_ts1i8_1";var u={task:z,firstCont:Q,checker:W,checkIcon:X,taskName:Y,delete:"_delete_ts1i8_71",crossImg:Z,taskCompleted:ee,taskNameComplete:te},se="/Todo-App/assets/icon-cross.37f00ffb.svg";function oe({taskName:o,completed:a,handdleDel:r}){const[n,t]=k.exports.useState(a),s=()=>{t(!n)};return m("div",{className:u.task,children:[m("div",{className:u.firstCont,children:[e("div",{onClick:s,id:n?u.taskCompleted:void 0,className:u.checker,children:n&&e("img",{src:N,alt:"check"})}),e("div",{id:n?u.taskNameComplete:void 0,className:u.taskName,children:o})]}),e("div",{onClick:()=>r(o),className:u.delete,children:e("img",{src:se,alt:"delete task cross",className:u.crossImg})})]})}const ae=[{name:"Complete the JavaScript course",complete:!0},{name:"Jog around the park 3x",complete:!1},{name:"10 minutes meditation",complete:!1},{name:"Read for 1 hour",complete:!1},{name:"Pick up groceries",complete:!1},{name:"Complete Todo App on Frontend Mentor",complete:!1}];function ne(){const[o,a]=k.exports.useState(ae),[r,n]=k.exports.useState("light"),t=l=>{const i=o.filter(d=>{const{name:g}=d;if(l!=g)return d});a(i)},s=()=>{const l=o.filter(i=>{const{complete:d}=i;if(!d)return i});a(l)},p=l=>{const{name:i}=l,d=i.toUpperCase().trim();if(d.length<2)return"";for(let g=0;g<o.length;g++)if(o[g].name.toUpperCase().trim()===d)return b.warn("The task already exist",{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});return a(()=>[...o,l])},f=()=>{n(r==="light"?"dark":"light")},h=()=>{const l=o.filter(i=>{const{complete:d}=i;if(!d)return i});a(l)},C=()=>{const l=o.filter(i=>{const{complete:d}=i;if(d)return i});a(l)};return k.exports.useEffect(()=>{const l=document.body;r==="dark"?l.classList.add("dark"):l.removeAttribute("class")},[r]),{taskList:o,theme:r,setTaskList:a,handdleChangeTheme:f,handdleAddTask:p,handdleClearComplete:s,handdleDelete:t,handdleActive:h,handdleFilterComplete:C}}function ce(){const{taskList:o,setTaskList:a,theme:r,handdleChangeTheme:n,handdleAddTask:t,handdleClearComplete:s,handdleDelete:p,handdleActive:f,handdleFilterComplete:h}=ne();return m("div",{className:c.todoApp,children:[m("header",{children:[m("div",{className:c.head,children:[e("h1",{className:c.logoText,children:"TODO"}),e("div",{onClick:n,className:c.changeTheme,children:e("img",{className:c.themeIcon,src:r==="light"?H:K,alt:"icon theme swicher"})})]}),e(q,{handdleAdd:t}),e(A,{theme:r==="light"?"light":"dark"})]}),m("div",{className:c.taskCont,children:[e(v.Group,{className:c.taskList,axis:"y",values:o,onReorder:a,children:o.map(C=>e(v.Item,{className:c.item,value:C,children:e(oe,{handdleDel:p,taskName:C.name,completed:C.complete})},C.name))}),m("div",{className:c.taskStatus,children:[m("div",{className:c.itemsLeft,children:[o.length," items left"]}),m("div",{className:c.taskFilters,children:[e("button",{className:c.btn,children:"All"}),e("button",{onClick:f,className:c.btn,children:"Active"}),e("button",{onClick:h,className:c.btn,children:"Completed"})]}),e("div",{className:c.clearBtn,children:e("button",{className:c.btn,onClick:s,children:"Clear Completed"})})]})]})]})}function re(){return m("div",{className:"App",children:[e("header",{className:"header-hero"}),e(ce,{})]})}y.render(e(L.StrictMode,{children:e(re,{})}),document.getElementById("root"));