(this["webpackJsonppokemon-app"]=this["webpackJsonppokemon-app"]||[]).push([[0],{163:function(e,t,n){},259:function(e,t,n){"use strict";n.r(t);var c=n(6),a=n(0),s=n.n(a),r=n(14),o=n.n(r),l=(n(163),n(49)),i=n(264),j=n(80),m=n(52),p=n(265),b=n(263),u=n(267),d=n(262),O=n(269),h=n(33),x=n(61),f=n.p+"static/media/pokemon-logo.e61842b2.png",g=d.a.Header,y=function(){var e=Object(h.f)();return Object(c.jsxs)(g,{style:{display:"flex"},children:[Object(c.jsx)("div",{className:"logo",children:Object(c.jsx)("img",{src:f})}),Object(c.jsxs)(O.a,{theme:"dark",mode:"horizontal",selectedKeys:"/my-pokemon"===e.pathname?["2"]:["1"],children:[Object(c.jsxs)(O.a.Item,{children:["Pokemon Bank ",Object(c.jsx)(x.b,{to:"/"})]},"1"),Object(c.jsxs)(O.a.Item,{children:["My Pokemon ",Object(c.jsx)(x.b,{to:"/my-pokemon"})]},"2")]})]})},k=function(e){return Object(c.jsxs)(s.a.Fragment,{children:[Object(c.jsx)(y,{}),e.children]})},v=n(113),N=n.n(v),S="get_pokemon_list",C="get_pokemon_detail",T="get_my_pokemon_list",w="https://pokeapi.co/api/v2/",P="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",I=function(e){return function(t){var n=localStorage.getItem("test"),c=(null===n?[]:JSON.parse(n)).concat(e);localStorage.setItem("test",JSON.stringify(c)),t({type:T,payload:c})}},_=function(e){var t=e.url.split("/"),n=t[t.length-2];return"".concat(P).concat(n,".png")},J=function(){var e=i.a.Text,t=i.a.Title,n=Object(l.b)(),s=Object(l.c)((function(e){return e.pokemonList}));return Object(a.useEffect)((function(){n((function(e){N.a.get("".concat(w,"pokemon")).then((function(t){e({type:S,payload:t.data})})).catch((function(e){return console.log("err",e)}))}))}),[]),Object(c.jsxs)(k,{children:[Object(c.jsx)(j.a,{align:"middle",children:Object(c.jsx)(m.a,{children:Object(c.jsx)(t,{className:"pd-20",level:2,children:"Pokemon List"})})}),s.length?Object(c.jsx)(m.a,{span:24,children:s.map((function(t,n){return Object(c.jsx)(x.b,{to:"/pokemon/".concat(t.name),children:Object(c.jsx)(b.a,{hoverable:"true",children:Object(c.jsxs)(j.a,{align:"middle",children:[Object(c.jsx)(m.a,{xs:{span:5},lg:{span:1},children:Object(c.jsx)(u.a,{style:{backgroundColor:"#fde3cf"},size:50,src:_(t)})}),Object(c.jsx)(m.a,{children:Object(c.jsx)(e,{children:t.name})})]})},n)})}))}):Object(c.jsx)(p.a,{paragraph:{rows:10}})]})},F=n(65),z=function(){var e=i.a.Text,t=i.a.Title,n=Object(l.b)(),r=Object(l.c)((function(e){return e.myPokemons}));Object(a.useEffect)((function(){n((function(e){var t=localStorage.getItem("test"),n=null===t?[]:JSON.parse(t);e({type:T,payload:n})}))}),[]);var o=function(e){n(function(e){return function(t){var n=localStorage.getItem("test"),c=JSON.parse(n).filter((function(t,n){return n!==e}));localStorage.setItem("test",JSON.stringify(c)),t({type:T,payload:c})}}(e))};return Object(c.jsx)(k,{children:null==r?Object(c.jsx)(p.a,{paragraph:{rows:10}}):r.length?Object(c.jsxs)(s.a.Fragment,{children:[Object(c.jsx)(t,{className:"pd-20",level:2,children:"My Pokemons' Cage"}),r.map((function(t,n){return Object(c.jsx)(b.a,{children:Object(c.jsxs)(j.a,{align:"middle",children:[Object(c.jsx)(m.a,{xs:{span:5},lg:{span:1},children:Object(c.jsx)(u.a,{style:{backgroundColor:"#fde3cf"},size:50,src:t.image})}),Object(c.jsx)(m.a,{xs:{span:5},lg:{span:1},children:Object(c.jsx)(e,{children:t.newName})}),Object(c.jsx)(m.a,{children:Object(c.jsx)(F.a,{type:"primary",onClick:function(){return o(n)},children:"Release"})})]})},n)}))]}):Object(c.jsx)(t,{level:2,className:"pd-20",children:"Sorry...... You haven't caught any pokemon"})})},A=n(36),D=n.n(A),E=n(60),L=n(5),M=n(266),B=n(268),H=n(270),R=n.p+"static/media/pokemon-gif.65a3487b.gif",K=n.p+"static/media/pokemon-ball.493785ff.png",W=n.p+"static/media/pokemon-ball-emphty.66fb7357.png",Y=function(e){var t=i.a.Text,n=i.a.Title,r=Object(h.e)(),o=Object(a.useState)(!1),p=Object(L.a)(o,2),b=p[0],d=p[1],O=Object(a.useState)(!1),x=Object(L.a)(O,2),f=x[0],g=x[1],y=Object(a.useState)(""),v=Object(L.a)(y,2),S=v[0],T=v[1],P=Object(a.useState)(""),_=Object(L.a)(P,2),J=_[0],z=_[1],A=Object(a.useState)(""),Y=Object(L.a)(A,2),q=Y[0],G=Y[1],Q=Object(l.b)(),U=Object(l.c)((function(e){return e.pokemonDetail})),V=Object(h.g)();Object(a.useEffect)((function(){var e;Q((e=V.params.id,function(t){N.a.get("".concat(w,"pokemon/").concat(e)).then((function(e){t({type:C,payload:e.data})})).catch((function(e){return console.log(e)}))}))}),[]);var X=function(){var e=Object(E.a)(D.a.mark((function e(){var t;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(G(""),!J.length){e.next=9;break}return t={newName:J,image:U.image,name:V.params.id},e.next=5,Q(I(t));case 5:return e.next=7,r.push("/my-pokemon");case 7:e.next=10;break;case 9:G("Rename before you see the cage");case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)(k,{children:[Object(c.jsx)(j.a,{children:Object(c.jsx)(n,{className:"pd-20",level:2,children:"Pokemon Detail"})}),Object(c.jsxs)(j.a,{justify:"center",children:[Object(c.jsx)(m.a,{lg:4,xs:24,children:Object(c.jsxs)(j.a,{style:{flexFlow:"column"},justify:"center",align:"middle",children:[Object(c.jsx)(u.a,{style:{backgroundColor:"#fde3cf"},size:200,src:U.image}),Object(c.jsx)(F.a,{style:{marginTop:"16px"},type:"primary",onClick:function(){d(!0),setTimeout((function(){!1===Math.random()<.5?(d(!1),T("failed")):(d(!1),T("succeed")),setTimeout((function(){g(!0)}),30)}),2e3)},children:"CATCH NOW"})]})}),Object(c.jsxs)(m.a,{className:"pd-20",lg:8,children:[Object(c.jsx)(n,{level:3,children:"Info"}),Object(c.jsx)(j.a,{children:Object(c.jsxs)(t,{children:["Name: ",V.params.id," "]})}),Object(c.jsx)(j.a,{children:Object(c.jsxs)(t,{children:["Types:"," ",U.types.map((function(e){return Object(c.jsxs)("span",{children:[e.type.name," "]})}))," "]})}),Object(c.jsx)(n,{style:{marginTop:"24px"},level:3,children:"Moves"}),U.moves.map((function(e){return Object(c.jsxs)(t,{children:[e.move.name," "]})}))]}),!!b&&Object(c.jsx)(M.a,{closable:!1,onCancel:"false",footer:!1,visible:b,children:Object(c.jsx)(B.a,{src:R})}),!!f&&Object(c.jsx)(M.a,{closable:!1,footer:!1,visible:f,children:"failed"===S?Object(c.jsxs)(s.a.Fragment,{children:[Object(c.jsx)(B.a,{className:"mlr-10",src:W}),Object(c.jsx)(t,{className:"mlr-10",children:"Try Again"}),Object(c.jsx)(F.a,{className:"mlr-10",onClick:function(e){g(!1),T("")},type:"danger",children:"Close"})]}):Object(c.jsxs)(s.a.Fragment,{children:[Object(c.jsx)(B.a,{src:K}),q.length?Object(c.jsx)(t,{style:{color:"red"},children:q}):Object(c.jsx)(t,{className:"mg-10",children:"Awesome.., rename your Pokemon"}),Object(c.jsx)(H.a,{className:"mg-10",value:J,onChange:function(e){return z(e.target.value)}}),Object(c.jsx)(F.a,{className:"mg-10",onClick:X,type:"primary",children:"See the cage"})]})})]})]})},q=[{path:"/",exact:!0,component:function(){return Object(c.jsx)(J,{})}},{path:"/my-pokemon",exact:!0,component:function(){return Object(c.jsx)(z,{})}},{path:"/pokemon/:id",exact:!0,component:function(){return Object(c.jsx)(Y,{})}}];var G=function(){var e=q.map((function(e){var t=e.path,n=e.component,a=e.exact,s=e.key;return Object(c.jsx)(h.a,{exact:a,path:t,component:n},s)}));return Object(c.jsx)(x.a,{children:e})},Q=n(78),U=n(2),V={pokemonList:[],pokemonDetail:{moves:[],types:[],image:""},myPokemons:null},X=[n(153).a],Z=Object(Q.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(U.a)(Object(U.a)({},e),{},{pokemonList:t.payload.results});case C:return Object(U.a)(Object(U.a)({},e),{},{pokemonDetail:{moves:t.payload.moves,types:t.payload.types,image:t.payload.sprites.front_default}});case T:return Object(U.a)(Object(U.a)({},e),{},{myPokemons:t.payload});default:return e}}),Object(Q.c)(Q.a.apply(void 0,X)));o.a.render(Object(c.jsx)(l.a,{store:Z,children:Object(c.jsx)(G,{})}),document.getElementById("root"))}},[[259,1,2]]]);
//# sourceMappingURL=main.0788fefe.chunk.js.map