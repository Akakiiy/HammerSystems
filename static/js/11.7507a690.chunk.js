(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[11],{506:function(t,e,n){},519:function(t,e,n){"use strict";n.r(e);var c=n(2),i=n(51),r=(n(506),n(0)),a=n(17),o=function(t){var e=t.elements,n=t.setElements,o=Object(r.useRef)(null),s=Object(r.useState)(null),l=Object(i.a)(s,2),u=l[0],d=l[1],b=Object(r.useState)({x:0,y:0}),j=Object(i.a)(b,2),h=j[0],f=j[1],O=Object(r.useState)(null),m=Object(i.a)(O,2),p=m[0],v=m[1],x=Object(r.useState)(null),g=Object(i.a)(x,2),y=g[0],S=g[1];Object(r.useEffect)((function(){var t=o.current.getBoundingClientRect(),e=t.width,n=t.height;v(e),S(n)}),[]);return Object(c.jsx)("div",{className:"board",ref:o,onDragOver:function(t){t.preventDefault()},onDrop:function(t){t.preventDefault(),d(null)},children:e.map((function(t){return Object(c.jsx)("div",{className:"board-item",style:{left:t.position.x,top:t.position.y,width:"".concat(t.width,"px"),height:"".concat(t.height,"px"),opacity:u===t?0:1},draggable:"true",onDragStart:function(e){return function(t,e){t.dataTransfer.setData("text/plain",JSON.stringify(e)),d(e);var n=o.current.getBoundingClientRect(),c=n.top,i=n.left,r=t.clientX-i-e.position.x,a=t.clientY-c-e.position.y;f({x:r,y:a})}(e,t)},onDrag:function(c){return function(t,c){var i=o.current.getBoundingClientRect(),r=i.top,s=i.left,l=t.clientX-s,u=t.clientY-r,d=l-h.x,b=u-h.y;if(d>=0&&b>=0&&d<p-c.width-1&&b<y-c.height-1){var j=e.map((function(t){return t.id===c.id?Object(a.a)(Object(a.a)({},t),{},{position:{x:d,y:b}}):t}));n(j)}}(c,t)},children:Object(c.jsx)("img",{className:"board-item-img",src:t.content,alt:"bord-draggable-element"})},t.id)}))})},s=n(198);var l=n(150);function u(t){return function(t){if(Array.isArray(t))return Object(s.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(l.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var d=n(84),b=n(38),j=function(t){var e=t.setElements,n=t.saveElementsWithCoords,a=Object(b.d)((function(t){return t.dashboard.objectList})),o=Object(r.useState)(null),s=Object(i.a)(o,2),l=s[0],j=s[1];return Object(c.jsx)("div",{className:"object-list-wrapper",children:Object(c.jsxs)("div",{className:"object-list",children:[Object(c.jsx)("h4",{children:"\u041a\u043b\u0438\u043a\u043d\u0438\u0442\u0435, \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u0431\u0440\u0430\u0442\u044c"}),a.map((function(t){return Object(c.jsxs)("label",{className:"object-list-item".concat((null===l||void 0===l?void 0:l.content)===t.content?" selected":""),onClick:function(){j(t)},children:[Object(c.jsx)("input",{type:"radio",name:"object-radio",checked:l===t,onChange:function(){}}),Object(c.jsx)("img",{className:"board-item-img",src:t.content,alt:"add-draggable-element"})]},t.content)})),Object(c.jsx)(d.a,{type:"primary",onClick:function(t){return function(t){if(t.preventDefault(),l){var n={id:"new_".concat(Math.random().toString(36).substr(2,9)),content:l.content,position:{x:0,y:0},width:l.width,height:l.height};e((function(t){return[].concat(u(t),[n])}))}}(t)},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442"}),Object(c.jsx)(d.a,{type:"dashed",onClick:n,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u043a\u0443"})]})})},h=n(206);e.default=function(){var t=Object(b.c)(),e=Object(b.d)((function(t){return t.dashboard.elements})),n=Object(r.useState)(e),a=Object(i.a)(n,2),s=a[0],l=a[1],u=Object(r.useState)(!1),d=Object(i.a)(u,2),f=d[0],O=d[1];return Object(c.jsxs)("div",{className:"dashboard-wrapper",children:[Object(c.jsx)("h1",{children:"Dashboard"}),Object(c.jsxs)("div",{className:"dashboard",children:[Object(c.jsx)(j,{setElements:l,saveElementsWithCoords:function(){var e;t((e=s,{type:h.a,payload:e})),O(!0),setTimeout((function(){O(!1)}),5e3)}}),Object(c.jsx)(o,{elements:s,setElements:l})]}),Object(c.jsx)("div",{children:f&&Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"\u041f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u043a\u0430 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0430:"}),Object(c.jsx)("pre",{children:JSON.stringify(s,null,2)})]})})]})}}}]);
//# sourceMappingURL=11.7507a690.chunk.js.map