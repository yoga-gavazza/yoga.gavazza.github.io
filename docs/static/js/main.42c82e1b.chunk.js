(this.webpackJsonpyoginigavazza=this.webpackJsonpyoginigavazza||[]).push([[0],{51:function(e,t,a){},53:function(e,t,a){},73:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(20),r=a.n(s),o=(a(51),a(52),a(15)),i=a(7),l=a(8),j=a(91),u=a(92),b=a(43),d=a(93),x=(a(53),a(42)),O=a.n(x),h=function(){var e=O.a.create({baseURL:"https://yogavazza.herokuapp.com/"});return e.interceptors.request.use((function(e){var t=localStorage.getItem("yoga@token");if(t){var a=JSON.parse(t).token;e.headers={auth:a}}return e}),(function(e){Promise.reject(e)})),e}(),m=a(1);function f(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(!1),r=Object(l.a)(s,2),o=r[0],i=r[1];return Object(c.useEffect)((function(){i(!0),h.get("postagem").then((function(e){var t=e.data.reverse();n(t),i(!1)})).catch((function(e){console.log(e),i(!1)}))}),[]),Object(m.jsx)(j.a,{children:o?Object(m.jsx)(u.a,{children:Object(m.jsxs)(b.a,{md:{span:2,offset:5},children:[Object(m.jsx)(d.a,{animation:"grow",size:"sm"}),Object(m.jsx)(d.a,{animation:"grow",size:"sm"}),Object(m.jsx)(d.a,{animation:"grow",size:"sm"})]})}):a.map((function(e){return Object(m.jsx)(u.a,{className:"justify-content-md-center",children:Object(m.jsx)(b.a,{lg:"10",xs:"auto",children:Object(m.jsx)("article",{children:Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:e.title}),Object(m.jsxs)("p",{className:"text",children:[" ",e.text]})]})})})},e._id)}))})}var p=a(94),g=a.p+"static/media/perfil.0dbff416.jpg";a(73);function v(){return Object(m.jsx)(j.a,{children:Object(m.jsx)(u.a,{className:"justify-content-md-center",children:Object(m.jsxs)(b.a,{children:[Object(m.jsx)(p.a,{className:"img-center perfil-size",src:g,roundedCircle:!0}),Object(m.jsx)("br",{}),Object(m.jsx)("p",{className:"text text-center text-larger",children:"Contato: Vera Gavaza"}),Object(m.jsx)("p",{className:"text text-center text-larger",children:"Telefone: (27) 9 9973 2190"}),Object(m.jsx)("p",{className:"text text-center text-larger",children:"Email: gavazzavera@gmail.com"}),Object(m.jsx)("br",{}),Object(m.jsx)("p",{className:"text text-larger",children:"Meu nome \xe9 Vera Gavazza, sou formada em pedagogia e p\xf3s graduada em Hatha yoga e Arteterapia. Acredito que as pessoas se transformam atrav\xe9s do autoconhecimento e da educa\xe7\xe3o. Para isto, busco conectar a filosofia e pr\xe1tica do Hatha Yoga e a express\xe3o em Arteterapia para o alcance de uma vida mais simples e tranquila, contribuindo para o bem estar pessoal e social."})]})})})}var N=[{alt:"",url:a.p+"static/media/foto1.d876f119.jpg"},{alt:"",url:a.p+"static/media/foto2.7b311673.jpg"},{alt:"",url:a.p+"static/media/foto3.81e29260.jpg"},{alt:"",url:a.p+"static/media/foto4.f79aba2c.jpg"},{alt:"",url:a.p+"static/media/foto5.b883fba7.jpg"},{alt:"",url:a.p+"static/media/foto6.ae76532b.jpg"}];a(76);function S(){return Object(m.jsx)(j.a,{children:Object(m.jsx)(u.a,{children:N.map((function(e,t){return Object(m.jsx)(b.a,{sm:4,className:"colunas",children:Object(m.jsx)(p.a,{fluid:!0,className:"imagens",src:e.url,alt:e.alt})},t)}))})})}var y=a(96),C=a(98),k=(a(77),a.p+"static/media/logo-lado.030c62a2.svg");function w(){return Object(m.jsxs)(y.a,{id:"nav",expand:"md",children:[Object(m.jsx)(y.a.Brand,{href:"/",children:Object(m.jsx)(p.a,{id:"logo",rounded:!0,src:k,alt:"logo"})}),Object(m.jsx)(y.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(m.jsx)(y.a.Collapse,{id:"basic-navbar-nav",className:"justify-content-end",children:Object(m.jsx)(y.a.Text,{children:Object(m.jsxs)(C.a,{className:"me-auto",children:[Object(m.jsx)(y.a,{children:Object(m.jsx)(o.b,{to:"/",className:"nav-text",children:"Novidades"})}),Object(m.jsx)(y.a,{children:Object(m.jsx)(o.b,{to:"/galeria",className:"nav-text",children:"Galeria"})}),Object(m.jsx)(y.a,{children:Object(m.jsx)(o.b,{to:"/sobre",className:"nav-text",children:"Quem somos"})}),Object(m.jsx)(y.a,{children:Object(m.jsxs)(o.b,{to:"/login",className:"nav-text",children:[Object(m.jsx)("i",{className:"material-icons",children:"more_vert"})," "]})})]})})})]})}var z=a(21),L=a.n(z),E=a(24),G=(a(86),a(97)),I=a(95);function T(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),r=Object(l.a)(s,2),j=r[0],x=r[1],O=Object(c.useState)(!1),f=Object(l.a)(O,2),p=f[0],g=f[1],v=Object(c.useState)(!1),N=Object(l.a)(v,2),S=N[0],y=N[1],C=Object(i.f)(),k="yoga@token";function w(){return(w=Object(E.a)(L.a.mark((function e(t){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),y(!1),""===a&&""===j||(g(!0),h.post("/auth/login",{username:a,password:j}).then((function(e){localStorage.clear(),localStorage.setItem(k,JSON.stringify(e.data)),C.push("/postagem"),g(!1)})).catch((function(e){g(!1),console.log(e),y(!0)})));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){null!==JSON.parse(localStorage.getItem(k))&&C.push("/postagem")}),[C]),Object(m.jsx)(u.a,{children:Object(m.jsx)(b.a,{xl:{span:4,offset:4},className:"login-container",children:Object(m.jsxs)(G.a,{onSubmit:function(e){return w.apply(this,arguments)},children:[Object(m.jsx)("h5",{id:"textologin",children:"fa\xe7a seu login:"}),S?Object(m.jsx)("span",{id:"erro",children:"Usu\xe1rio ou Senha incorreto"}):Object(m.jsx)("div",{}),Object(m.jsxs)(G.a.Group,{className:"mb-3",children:[Object(m.jsx)(G.a.Label,{children:"Usu\xe1rio"}),Object(m.jsx)(G.a.Control,{required:!0,type:"text",placeholder:"Login",value:a,onChange:function(e){return n(e.target.value)}}),Object(m.jsx)(G.a.Label,{children:"Senha"}),Object(m.jsx)(G.a.Control,{required:!0,placeholder:"Senha",type:"password",value:j,onChange:function(e){return x(e.target.value)}})]}),p?Object(m.jsx)(d.a,{animation:"grow"}):Object(m.jsx)(I.a,{variant:"primary",type:"submit",children:"Submit"}),Object(m.jsx)(o.b,{className:"row",to:"/registro"})]})})})}a(87);function J(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),r=Object(l.a)(s,2),o=r[0],j=r[1],x=Object(c.useState)(""),O=Object(l.a)(x,2),f=O[0],p=O[1],g=Object(c.useState)(!1),v=Object(l.a)(g,2),N=v[0],S=v[1],y=Object(c.useState)(""),C=Object(l.a)(y,2),k=C[0],w=C[1],z=Object(c.useState)([]),L=Object(l.a)(z,2),E=L[0],T=L[1],J=Object(i.f)();Object(c.useEffect)((function(){S(!0),null===JSON.parse(localStorage.getItem("yoga@token"))&&J.push("/login"),h.get("postagem").then((function(e){var t=e.data.reverse();T(t),S(!1)})).catch((function(e){console.log(e),S(!1)}))}),[J]);var q=function(){h.get("postagem").then((function(e){var t=e.data.reverse();T(t),S(!1)})).catch((function(e){console.log(e),S(!1)}))},B=function(){p(""),w(""),j(""),n("")};return Object(m.jsxs)("div",{children:[Object(m.jsx)(u.a,{className:"justify-content-md-center",children:Object(m.jsx)(b.a,{sm:"8",xs:"auto",children:Object(m.jsxs)(G.a,{children:[""!==k?Object(m.jsx)(G.a.Group,{className:"flex",children:Object(m.jsxs)(b.a,{sm:"4",children:[Object(m.jsx)(G.a.Label,{children:"ID"}),Object(m.jsx)(G.a.Control,{type:"text",readOnly:!0,value:k,id:"id"})]})}):Object(m.jsx)("div",{}),Object(m.jsx)(G.a.Group,{children:Object(m.jsxs)(b.a,{sm:"6",children:[Object(m.jsx)(G.a.Label,{children:"Titulo"}),Object(m.jsx)(G.a.Control,{type:"text",value:a,id:"titulo",onBlur:function(){return function(){var e=new Date;p(e.toString()),console.log(f)}()},onChange:function(e){return n(e.target.value)}})]})}),Object(m.jsxs)(G.a.Group,{children:[Object(m.jsx)(G.a.Label,{children:"Texto"}),Object(m.jsx)(G.a.Control,{as:"textarea",rows:10,id:"text",value:o,onChange:function(e){return j(e.target.value)}})]}),N?Object(m.jsx)(d.a,{animation:"grow",size:"sm"}):Object(m.jsx)("div",{children:""!==k?Object(m.jsxs)("div",{children:[Object(m.jsx)(I.a,{className:"tbns",onClick:function(){return function(){S(!0),console.log(f);var e={title:a,text:o,date:f};h.put("postagem/".concat(k),e).then((function(e){console.log(e),S(!1),q(),B()})).catch((function(e){S(!1)}))}()},variant:"outline-dark",children:"atualizar"}),Object(m.jsx)(I.a,{className:"tbns",onClick:function(){return B()},variant:"outline-dark",children:"Cancelar"}),Object(m.jsx)(I.a,{className:"tbns",onClick:function(){h.delete("postagem/".concat(k)).then((function(e){console.log(e),S(!1),q(),B()})).catch((function(e){S(!1)}))},variant:"outline-danger",children:"Excluir"})]}):Object(m.jsx)(I.a,{className:"tbns",onClick:function(){return function(){S(!0);var e={title:a,text:o,date:f};h.post("postagem",e).then((function(e){console.log(e),S(!1),q(),B()})).catch((function(e){S(!1)}))}()},variant:"outline-dark",children:"Salvar"})})]})})}),Object(m.jsx)("div",{className:"padding",children:E.map((function(e){return Object(m.jsxs)(u.a,{className:"justify-content-md-center",children:[Object(m.jsx)(b.a,{sm:"6",xs:"auto",className:"shadow-box",children:Object(m.jsx)("article",{children:Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:e.title}),Object(m.jsxs)("p",{className:"text",children:[" ",e.text]})]})})}),Object(m.jsx)(b.a,{sm:"1",xs:"auto",className:"botoes",children:Object(m.jsx)(I.a,{className:"tbns",variant:"outline-dark",onClick:function(){return function(e){p(e.date),n(e.title),j(e.text),w(e._id)}(e)},children:"Editar"})})]},e._id)}))})]})}a(88);function q(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),r=Object(l.a)(s,2),o=r[0],j=r[1],d=Object(c.useState)(""),x=Object(l.a)(d,2),O=x[0],f=x[1],p=Object(c.useState)(!1),g=Object(l.a)(p,2),v=g[0],N=g[1],S=Object(i.f)(),y=function(){return""!==o&&""!==O&&""!==a};function C(){return(C=Object(E.a)(L.a.mark((function e(){var t;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:N(!0),t={username:o,password:O,name:a,email:"vera@gmail.com",telefone:"299999",sobre:"Veroca"},y()?h.post("user",t).then((function(e){console.log("Cadastro realizado com sucesso",e.status),S.push("/login"),N(!1)})).catch((function(e){N(!1),console.log("Erro no cadastro tente novamente: ",e.response.data)})):N(!1);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(m.jsx)(u.a,{children:Object(m.jsx)(b.a,{children:Object(m.jsxs)(G.a,{className:"col s6 offset-s3",onsubmit:"return false",children:[Object(m.jsx)(G.a.Label,{children:"nome"}),Object(m.jsx)(G.a.Control,{type:"text",value:a,id:"fullName",onChange:function(e){return n(e.target.value)}}),Object(m.jsx)(G.a.Label,{children:"username"}),Object(m.jsx)(G.a.Control,{className:"validate",type:"text",id:"username",value:o,onChange:function(e){return j(e.target.value)}}),Object(m.jsx)(G.a.Label,{children:"Senha"}),Object(m.jsx)(G.a.Control,{id:"senha",type:"password",value:O,onChange:function(e){return f(e.target.value)}}),v?Object(m.jsx)("div",{className:"progress",children:Object(m.jsx)("div",{className:"indeterminate"})}):Object(m.jsx)(I.a,{onClick:function(){return function(){return C.apply(this,arguments)}()},variant:"primary",type:"submit",children:"Submit"})]})})})}function B(){return Object(m.jsxs)(o.a,{children:[Object(m.jsx)(w,{}),Object(m.jsxs)(i.c,{children:[Object(m.jsx)(i.a,{path:"/",exact:!0,component:f}),Object(m.jsx)(i.a,{path:"/sobre",exact:!0,component:v}),Object(m.jsx)(i.a,{path:"/galeria",exact:!0,component:S}),Object(m.jsx)(i.a,{path:"/login",exact:!0,component:T}),Object(m.jsx)(i.a,{path:"/postagem",exact:!0,component:J}),Object(m.jsx)(i.a,{path:"/registro",exact:!0,component:q}),Object(m.jsx)(i.a,{path:"/*",component:f})]})]})}function D(){return Object(m.jsx)(B,{})}var F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,99)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(D,{})}),document.getElementById("root")),F()}},[[89,1,2]]]);
//# sourceMappingURL=main.42c82e1b.chunk.js.map