(self["webpackChunkant_design_pro"]=self["webpackChunkant_design_pro"]||[]).push([[51],{16894:function(e,t,n){"use strict";n(94237);var r=n(60540);t["ZP"]=r.Z},27835:function(e,t,n){"use strict";n.r(t);n(57663);var r=n(71577),a=(n(67294),n(57254)),i=n(16894),o=n(73727),c=n(85893),u=[{title:"\u7f16\u53f7",dataIndex:"id",render:function(e){return(0,c.jsx)(o.rU,{to:"/invoices/detail",children:e})}},{title:"\u4ed3\u5355\u7c7b\u578b",dataIndex:"receiptType",valueEnum:{all:{text:"\u5168\u90e8"},in:{text:"\u5165\u4ed3\u8d26\u5355"},out:{text:"\u51fa\u4ed3\u8d26\u5355"}}},{title:"\u603b\u91d1\u989d",hideInSearch:!0,dataIndex:"totalMoney"},{title:"\u5b9e\u4ed8\u91d1\u989d",hideInSearch:!0,dataIndex:"paidMoney"},{title:"\u521b\u5efa\u65f6\u95f4",dataIndex:"creation",valueType:"dateTime"}];t["default"]=function(){var e=[{id:"BR000001",receiptType:"in",totalMoney:1e3,paidMoney:0,creation:new Date("2021/12/10 19:30:01")},{id:"BC000002",receiptType:"out",totalMoney:1e3,paidMoney:0,creation:new Date("2021/12/10 21:30:01")}];return(0,c.jsx)(i.ZP,{columns:u,rowKey:"id",pagination:{showQuickJumper:!0},search:{optionRender:!1,collapsed:!1},dateFormatter:"string",headerTitle:"\u8d26\u5355\u5217\u8868",toolBarRender:function(){return[(0,c.jsx)(r.Z,{children:"\u67e5\u770b\u65e5\u5fd7"},"show"),(0,c.jsxs)(r.Z,{children:["\u5bfc\u51fa\u6570\u636e",(0,c.jsx)(a.Z,{})]},"out")]},dataSource:e})}},73727:function(e,t,n){"use strict";n.d(t,{rU:function(){return h}});var r=n(51615),a=n(41788),i=n(67294),o=n(97175),c=(n(45697),n(22122)),u=n(19756),l=n(2177);i.Component;i.Component;var s=function(e,t){return"function"===typeof e?e(t):e},f=function(e,t){return"string"===typeof e?(0,o.ob)(e,null,null,t):e},d=function(e){return e},p=i.forwardRef;function v(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}"undefined"===typeof p&&(p=d);var y=p((function(e,t){var n=e.innerRef,r=e.navigate,a=e.onClick,o=(0,u.Z)(e,["innerRef","navigate","onClick"]),l=o.target,s=(0,c.Z)({},o,{onClick:function(e){try{a&&a(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||l&&"_self"!==l||v(e)||(e.preventDefault(),r())}});return s.ref=d!==p&&t||n,i.createElement("a",s)}));var h=p((function(e,t){var n=e.component,a=void 0===n?y:n,o=e.replace,v=e.to,h=e.innerRef,m=(0,u.Z)(e,["component","replace","to","innerRef"]);return i.createElement(r.s6.Consumer,null,(function(e){e||(0,l.Z)(!1);var n=e.history,r=f(s(v,e.location),e.location),u=r?n.createHref(r):"",y=(0,c.Z)({},m,{href:u,navigate:function(){var t=s(v,e.location),r=o?n.replace:n.push;r(t)}});return d!==p?y.ref=t||h:y.innerRef=h,i.createElement(a,y)}))})),m=function(e){return e},x=i.forwardRef;function Z(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}"undefined"===typeof x&&(x=m);x((function(e,t){var n=e["aria-current"],a=void 0===n?"page":n,o=e.activeClassName,d=void 0===o?"active":o,p=e.activeStyle,v=e.className,y=e.exact,R=e.isActive,g=e.location,C=e.sensitive,w=e.strict,k=e.style,I=e.to,j=e.innerRef,E=(0,u.Z)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return i.createElement(r.s6.Consumer,null,(function(e){e||(0,l.Z)(!1);var n=g||e.location,o=f(s(I,n),n),u=o.pathname,M=u&&u.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),T=M?(0,r.LX)(n.pathname,{path:M,exact:y,sensitive:C,strict:w}):null,K=!!(R?R(T,n):T),N=K?Z(v,d):v,S=K?(0,c.Z)({},k,{},p):k,_=(0,c.Z)({"aria-current":K&&a||null,className:N,style:S,to:o},E);return m!==x?_.ref=t||j:_.innerRef=j,i.createElement(h,_)}))}))}}]);