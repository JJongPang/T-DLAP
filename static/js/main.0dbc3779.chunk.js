(this["webpackJsonptest-project"]=this["webpackJsonptest-project"]||[]).push([[0],{17:function(e,t,n){e.exports={item:"img_item_item__2vD3N",img:"img_item_img__TnnNk"}},18:function(e,t,n){e.exports={box:"img_list_box__12DaA",list:"img_list_list__3Bjky"}},20:function(e,t,n){e.exports={box:"App_box__1EqL3"}},21:function(e,t,n){},29:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n(0),i=n(2),c=n.n(i),o=n(19),s=n.n(o),u=(n(29),n(14)),l=n(5),d=n(20),g=n.n(d),p=n(21),j=n.n(p),b=function(e){var t=e.FileInput,n=e.addCard,a=Object(i.useRef)();return Object(r.jsx)("form",{ref:a,className:j.a.form,children:Object(r.jsx)(t,{onFileChange:function(e){var t={id:Date.now(),fileURL:e.url||""};a.current.reset(),n(t)}})})},m=n(17),_=n.n(m),O=function(e){var t=e.card,n=e.onDragStart,a=e.onDragOver,i=e.onDrop,c=e.onDragLeave,o=e.dataPosition;return Object(r.jsx)("li",{className:_.a.item,"data-position":o,draggable:!0,onDragStart:n,onDragOver:a,onDrop:i,onDragLeave:c,children:Object(r.jsx)("img",{className:_.a.img,src:t.fileURL,alt:"card"})})},f=n(6),v=n.n(f),x=n(11),h=n(12),D=function(e){var t=e.preview,n=e.cards;return Object(r.jsxs)("li",{className:v.a.preview,children:[t&&n&&Object(r.jsx)("img",{className:v.a.img,src:t.fileURL,alt:"card"}),!t&&Object(r.jsxs)("div",{className:v.a.box,children:[Object(r.jsx)(x.a,{className:v.a.icon,icon:h.a}),Object(r.jsx)("span",{className:v.a.title,children:"Choose an Image"})]})]})},w=n(18),N=n.n(w),S=function(e){var t=e.preview,n=e.handlerPreviewEvent,a=e.cards,i=e.addCard,c=e.FileInput,o=e.onDragStart,s=e.onDragOver,u=e.onDrop,l=e.onDragLeave;e.imgePreview;return Object(r.jsxs)("div",{className:N.a.box,children:[Object(r.jsxs)("ul",{className:N.a.list,onClick:n,children:[Object(r.jsx)(D,{cards:a,preview:t}),a.map((function(e,t){return Object(r.jsx)(O,{card:e,dataPosition:t,onDragStart:o,onDragOver:s,onDrop:u,onDragLeave:l},e.id)}))]}),Object(r.jsx)(b,{FileInput:c,addCard:i})]})},F={draggedFrom:null,draggedTo:null,isDragging:!1,originalOrder:[],updatedOrder:[]},C=function(e){var t=e.FileInput,n=Object(i.useState)([]),c=Object(l.a)(n,2),o=c[0],s=c[1],d=Object(i.useState)(null),p=Object(l.a)(d,2),j=p[0],b=p[1],m=Object(i.useState)(F),_=Object(l.a)(m,2),O=_[0],f=_[1];return Object(r.jsx)("div",{className:g.a.box,children:Object(r.jsx)(S,{cards:o,FileInput:t,addCard:function(e){var t=[].concat(Object(u.a)(o),[e]);s(t)},onDragStart:function(e){var t=Number(e.currentTarget.dataset.position);f(Object(a.a)(Object(a.a)({},O),{},{draggedFrom:t,isDragging:!0,originalOrder:o}))},onDragOver:function(e){e.preventDefault();var t=O.originalOrder,n=O.draggedFrom,r=Number(e.currentTarget.dataset.position),i=t[n],c=t.filter((function(e,t){return t!==n}));t=[].concat(Object(u.a)(c.slice(0,r)),[i],Object(u.a)(c.slice(r))),r!==O.draggedTo&&f(Object(a.a)(Object(a.a)({},O),{},{updatedOrder:t,draggedTo:r}))},onDrop:function(){s(O.updatedOrder),f(Object(a.a)(Object(a.a)({},O),{},{draggedFrom:null,draggedTo:null,isDragging:!1}))},onDragLeave:function(){f(Object(a.a)(Object(a.a)({},O),{},{draggedTo:null}))},handlerPreviewEvent:function(e){if(void 0!==e.target.currentSrc){var t={fileURL:e.target.currentSrc};b(t)}},preview:j})})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))},L=n(4),k=n.n(L),I=n(13),y=n(22),P=n(23),R=function(){function e(){Object(y.a)(this,e)}return Object(P.a)(e,[{key:"upload",value:function(){var e=Object(I.a)(k.a.mark((function e(t){var n,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("file",t),n.append("upload_preset","pdzaoz52"),e.next=5,fetch("https://api.cloudinary.com/v1_1/drqni4rhj/upload",{method:"POST",body:n});case 5:return a=e.sent,e.next=8,a.json();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),E=n(7),U=n.n(E),z=function(e){var t=e.imageUploader,n=e.onFileChange,a=Object(i.useState)(!1),c=Object(l.a)(a,2),o=c[0],s=c[1],u=Object(i.useRef)(),d=function(){var e=Object(I.a)(k.a.mark((function e(a){var r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.next=3,t.upload(a.target.files[0]);case 3:r=e.sent,s(!1),n({name:r.original_filename,url:r.url});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{children:[Object(r.jsx)("input",{ref:u,className:U.a.input,type:"file",accept:"image/*",name:"file",onChange:d}),!o&&Object(r.jsxs)("button",{className:U.a.button,onClick:function(e){e.preventDefault(),u.current.click()},children:[Object(r.jsx)(x.a,{className:U.a.icon,icon:h.a}),Object(r.jsx)("span",{className:U.a.title,children:"Add Image"})]}),o&&Object(r.jsx)("div",{className:U.a.loading})]})},A=new R;s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(C,{FileInput:function(e){return Object(r.jsx)(z,Object(a.a)(Object(a.a)({},e),{},{imageUploader:A}))}})}),document.getElementById("root")),T()},6:function(e,t,n){e.exports={preview:"img_preview_preview__QN2ep",img:"img_preview_img__35iEN",box:"img_preview_box__cK8wH",icon:"img_preview_icon__9YT4Q",title:"img_preview_title__2xYNm"}},7:function(e,t,n){e.exports={box:"img_input_box__1D71v",input:"img_input_input__2kTRS",button:"img_input_button__SauSw",icon:"img_input_icon__3f8Jv",title:"img_input_title__1eNVK",loading:"img_input_loading__2VvNS",spin:"img_input_spin__aEazm"}}},[[36,1,2]]]);
//# sourceMappingURL=main.0dbc3779.chunk.js.map