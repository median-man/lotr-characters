(this["webpackJsonplotr-characters"]=this["webpackJsonplotr-characters"]||[]).push([[0],{4:function(e,t,n){e.exports=n(9)},9:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(3),c=n.n(l),o=n(1);var u=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(!1),u=Object(o.a)(c,2),h=u[0],i=u[1],m=Object(a.useState)(""),s=Object(o.a)(m,2),d=s[0],E=s[1];Object(a.useEffect)((function(){i(!0),function(){var e=new Headers;return e.append("Authorization","Bearer Xz2OBp6RE9w48eje3Vdd"),fetch("https://the-one-api.herokuapp.com/v1/character",{method:"GET",headers:e}).then((function(e){return e.ok?e.json():{error:e.status}}))}().then((function(e){l(e.docs),E(""),i(!1)})).catch((function(e){E(e),i(!1)}))}),[]);var f="";return f=d.length>0?d:h?"Loading...":"".concat(n.length," characters found"),r.a.createElement("div",null,r.a.createElement("h1",null,"LOTR Characters DB"),r.a.createElement("p",null,r.a.createElement("strong",null,"Status:")," ",f),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Race"),r.a.createElement("th",null,"Wiki"),r.a.createElement("th",null,"Gender"),r.a.createElement("th",null,"Birth"),r.a.createElement("th",null,"Death"))),r.a.createElement("tbody",null,n.map((function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.race),r.a.createElement("td",null,r.a.createElement("a",{href:e.wikiUrl,rel:"noopener noreferrer",target:"_blank"},"wiki")),r.a.createElement("td",null,e.gender),r.a.createElement("td",null,e.birth),r.a.createElement("td",null,e.death))})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[4,1,2]]]);
//# sourceMappingURL=main.30a62da2.chunk.js.map