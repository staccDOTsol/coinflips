(this["webpackJsonpcandy-machine-mint"]=this["webpackJsonpcandy-machine-mint"]||[]).push([[0],{109:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return v})),n.d(t,"c",(function(){return y})),n.d(t,"b",(function(){return S}));var r=n(36),a=n(2),c=n.n(a),o=n(13),s=n(5),i=n(10),u=n(32),f=(new i.PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"),new i.PublicKey("39W6qnEQhdaWE25ANNauVesPV1d81QwbMCL5GRwAoymy"),new i.PublicKey("9pJ55KszBGk1Td3LbRrWLszAaiXg7YLW5oouLABJwsZg"));function p(e){return b.apply(this,arguments)}function b(){return(b=Object(s.a)(c.a.mark((function e(t){var n,r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new i.Connection("https://api.devnet.solana.com"),r=new u.c(n,t,{preflightCommitment:"confirmed",commitment:"confirmed"}),e.next=4,u.b.fetchIdl(f,r);case 4:return a=e.sent,e.abrupt("return",new u.b(a,f,r));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var l,d,O,j,m,h,g,x,A="4tui4yfA6MNgLhjXmKBATrPvEUGseEeqQrqAyVHintUQ",v=(new i.PublicKey(A),function(){var t=Object(s.a)(c.a.mark((function t(n){var r,a,s,b;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return O=new u.f.Connection("https://api.devnet.solana.com"),j=new u.c(O,n,{preflightCommitment:"confirmed",commitment:"confirmed"}),u.e(j),t.next=5,p(n);case 5:return m=t.sent,h=new i.PublicKey("ASTu9TrWQkQL693SzAZ2533f871WUP3RxkW9y6nLGP9L"),t.next=9,m.account.house.fetch(h);case 9:return g=t.sent,g.operator,x=Math.floor(9*Math.random()).toString()+Math.floor(9*Math.random())+Math.floor(9*Math.random())+Math.floor(9*Math.random())+Math.floor(9*Math.random())+Math.floor(9*Math.random()),t.next=14,u.f.PublicKey.findProgramAddress([e.from("rng_house"),n.publicKey.toBuffer(),h.toBuffer(),e.from(x)],f);case 14:return r=t.sent,a=Object(o.a)(r,2),s=a[0],b=a[1],l=s,d=b,t.prev=20,t.next=23,m.rpc.initialize(d,x,{accounts:{puppet:l,user:n.publicKey,systemProgram:i.SystemProgram.programId,recentBlockhashes:u.f.SYSVAR_RECENT_BLOCKHASHES_PUBKEY,house:h},signers:[]});case 23:return!1,t.abrupt("return","Initialized!");case 27:t.prev=27,t.t0=t.catch(20);case 29:return t.abrupt("return","Failed creating account!");case 30:case"end":return t.stop()}}),t,null,[[20,27]])})));return function(e){return t.apply(this,arguments)}}()),y=function(){var e=Object(s.a)(c.a.mark((function e(t){var n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.rpc.uncover({accounts:(n={author:g.author,authorFeeAccount:g.authorFeeAccount,operator:g.operator},Object(r.a)(n,"authorFeeAccount",g.authorFeeAccount),Object(r.a)(n,"operatorFeeAccount",g.operatorFeeAccount),Object(r.a)(n,"house",h),Object(r.a)(n,"puppet",l),Object(r.a)(n,"operatorTreasury",g.operatorTreasury),Object(r.a)(n,"recentBlockhashes",u.f.SYSVAR_RECENT_BLOCKHASHES_PUBKEY),Object(r.a)(n,"jare",A),Object(r.a)(n,"user",t.publicKey),Object(r.a)(n,"systemProgram",i.SystemProgram.programId),n),remainingAccounts:[{pubkey:g.operatorTreasury,isSigner:!1,isWritable:!0}],signers:[]});case 3:return a=e.sent,console.log(a),e.abrupt("return","Won 2x your wager back!!");case 8:return e.prev=8,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return","lost sol - play again!");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(s.a)(c.a.mark((function e(t,n){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.rpc.pullStrings(new u.a(n*Math.pow(10,9)),{accounts:(a={author:g.author,authorFeeAccount:g.authorFeeAccount,operator:g.operator},Object(r.a)(a,"authorFeeAccount",g.authorFeeAccount),Object(r.a)(a,"operatorFeeAccount",g.operatorFeeAccount),Object(r.a)(a,"house",h),Object(r.a)(a,"puppet",l),Object(r.a)(a,"operatorTreasury",g.operatorTreasury),Object(r.a)(a,"recentBlockhashes",u.f.SYSVAR_RECENT_BLOCKHASHES_PUBKEY),Object(r.a)(a,"jare",A),Object(r.a)(a,"user",t.publicKey),Object(r.a)(a,"systemProgram",i.SystemProgram.programId),a),remainingAccounts:[{pubkey:g.operatorTreasury,isSigner:!1,isWritable:!0}],signers:[]});case 3:return e.sent,e.abrupt("return","commited to maybe double your Sol! :)");case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return","err "+e.t0.toString());case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}()}).call(this,n(6).Buffer)},350:function(e,t,n){},351:function(e,t,n){},354:function(e,t){},356:function(e,t){},372:function(e,t){},373:function(e,t){},459:function(e,t){},461:function(e,t){},475:function(e,t){},479:function(e,t){},481:function(e,t){},491:function(e,t){},493:function(e,t){},520:function(e,t){},522:function(e,t){},527:function(e,t){},529:function(e,t){},535:function(e,t){},537:function(e,t){},549:function(e,t){},552:function(e,t){},564:function(e,t){},565:function(e,t,n){"use strict";n.r(t);var r,a,c,o,s=n(1),i=n.n(s),u=n(26),f=n.n(u),p=(n(350),n(351),n(16)),b=n(2),l=n.n(b),d=n(5),O=n(13),j=n(127),m=n(129),h=n(128),g=n(592),x=n(597),A=n(601),v=n(600),y=n(10),S=n(50),w=n(168),k=n(109),L=n(20),M=Object(m.a)(w.a)(r||(r=Object(j.a)([""]))),P=m.a.span(a||(a=Object(j.a)([""]))),C=m.a.div(c||(c=Object(j.a)([""]))),T=Object(m.a)(g.a)(o||(o=Object(j.a)(['border-radius: 100px;\npadding-left:50px; \npadding-right:50px; \npadding-top:50px; \npadding-bottom:50px;\nfont-weight: bold;\nbackground-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABnSURBVHja7M5RDYAwDEXRDgmvEocnlrQS2SwUFST9uEfBGWs9c97nbGtDcquqiKhOImLs/UpuzVzWEi1atGjRokWLFi1atGjRokWLFi1atGjRokWLFi1af7Ukz8xWp8z8AAAA//8DAJ4LoEAAlL1nAAAAAElFTkSuQmCC") repeat 0 0;']))),E=function(e){var t=e.days,n=e.hours,r=e.minutes,a=e.seconds;e.completed;return Object(L.jsxs)(P,{children:[n+24*(t||0)," hours, ",r," minutes, ",a," seconds"]})},B=function(e){var t=Object(s.useState)(!1),n=Object(O.a)(t,2),r=n[0],a=n[1],c=Object(s.useState)(!0),o=Object(O.a)(c,2),i=o[0],u=o[1],f=Object(s.useState)(!1),b=Object(O.a)(f,2),j=b[0],m=b[1],g=Object(s.useState)(),w=Object(O.a)(g,2),P=w[0],B=w[1],U=Object(s.useState)(!1),F=Object(O.a)(U,2),K=F[0],I=F[1],D=Object(s.useState)(!1),R=Object(O.a)(D,2),W=R[0],z=R[1],_=Object(s.useState)(!1),Y=Object(O.a)(_,2),H=Y[0],Q=Y[1],G=Object(s.useState)(0),N=Object(O.a)(G,2),J=(N[0],N[1],Object(s.useState)(0)),V=Object(O.a)(J,2),X=(V[0],V[1],Object(s.useState)(0)),q=Object(O.a)(X,2),Z=(q[0],q[1],Object(s.useState)({open:!1,message:"",severity:void 0})),$=Object(O.a)(Z,2),ee=$[0],te=$[1],ne=Object(s.useState)(new Date(e.startDate)),re=Object(O.a)(ne,2),ae=re[0],ce=(re[1],Object(S.c)()),oe=function(){Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ce){e.next=2;break}return e.abrupt("return");case 2:case"end":return e.stop()}}),e)})))()},se=function(){var t=Object(d.a)(l.a.mark((function t(){var n,r,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(1==i&&(u(!1),setInterval(Object(d.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!ce){t.next=5;break}return t.next=3,e.connection.getBalance(ce.publicKey);case 3:n=t.sent,B(n/y.LAMPORTS_PER_SOL);case 5:case"end":return t.stop()}}),t)}))),1500*Math.random()+500)),t.prev=1,Q(!0),!ce){t.next=9;break}return t.next=6,Object(k.a)(ce);case 6:n=t.sent,te({open:!0,message:n,severity:"success"}),a(!0);case 9:t.next=17;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0),r=t.t0.msg||"Minting failed! Please try again!",t.t0.msg?311===t.t0.code?(r="SOLD OUT!",z(!0)):312===t.t0.code&&(r="Minting period hasn't started yet."):t.t0.message.indexOf("0x138")||(t.t0.message.indexOf("0x137")?r="SOLD OUT!":t.t0.message.indexOf("0x135")&&(r="Insufficient funds to mint. Please fund your wallet.")),te({open:!0,message:r,severity:"error"});case 17:if(t.prev=17,!ce){t.next=23;break}return t.next=21,e.connection.getBalance(ce.publicKey);case 21:c=t.sent,B(c/y.LAMPORTS_PER_SOL);case 23:return Q(!1),oe(),t.finish(17);case 26:case"end":return t.stop()}}),t,null,[[1,11,17,26]])})));return function(){return t.apply(this,arguments)}}(),ie=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,Q(!0),!ce){e.next=8;break}return e.next=5,Object(k.c)(ce);case 5:t=e.sent,m(!1),te({open:!0,message:t,severity:"success"});case 8:e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),m(!1),te({open:!0,message:"Sorry! You lost!",severity:"success"});case 14:return e.prev=14,Q(!1),oe(),e.finish(14);case 18:case"end":return e.stop()}}),e,null,[[0,10,14,18]])})));return function(){return e.apply(this,arguments)}}(),ue=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,Q(!0),!ce){e.next=8;break}return e.next=5,Object(k.b)(ce,.1);case 5:t=e.sent,te({open:!0,message:t,severity:"success"}),m(!0);case 8:e.next=16;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0),n=e.t0.msg||"Minting failed! Please try again!",e.t0.msg?311===e.t0.code?(n="SOLD OUT!",z(!0)):312===e.t0.code&&(n="Minting period hasn't started yet."):e.t0.message.indexOf("0x138")||(e.t0.message.indexOf("0x137")?n="SOLD OUT!":e.t0.message.indexOf("0x135")&&(n="Insufficient funds to mint. Please fund your wallet.")),te({open:!0,message:n,severity:"error"});case 16:return e.prev=16,Q(!1),oe(),e.finish(16);case 20:case"end":return e.stop()}}),e,null,[[0,10,16,20]])})));return function(){return e.apply(this,arguments)}}(),fe=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,Q(!0),!ce){e.next=7;break}return e.next=5,Object(k.b)(ce,.5);case 5:e.sent,m(!0);case 7:e.next=15;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),t=e.t0.msg||"Minting failed! Please try again!",e.t0.msg?311===e.t0.code?(t="SOLD OUT!",z(!0)):312===e.t0.code&&(t="Minting period hasn't started yet."):e.t0.message.indexOf("0x138")||(e.t0.message.indexOf("0x137")?t="SOLD OUT!":e.t0.message.indexOf("0x135")&&(t="Insufficient funds to mint. Please fund your wallet.")),te({open:!0,message:t,severity:"error"});case 15:return e.prev=15,Q(!1),oe(),e.finish(15);case 19:case"end":return e.stop()}}),e,null,[[0,9,15,19]])})));return function(){return e.apply(this,arguments)}}(),pe=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,Q(!0),!ce){e.next=7;break}return e.next=5,Object(k.b)(ce,1);case 5:e.sent,m(!0);case 7:e.next=15;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),t=e.t0.msg||"Minting failed! Please try again!",e.t0.msg?311===e.t0.code?(t="SOLD OUT!",z(!0)):312===e.t0.code&&(t="Minting period hasn't started yet."):e.t0.message.indexOf("0x138")||(e.t0.message.indexOf("0x137")?t="SOLD OUT!":e.t0.message.indexOf("0x135")&&(t="Insufficient funds to mint. Please fund your wallet.")),te({open:!0,message:t,severity:"error"});case 15:return e.prev=15,Q(!1),oe(),e.finish(15);case 19:case"end":return e.stop()}}),e,null,[[0,9,15,19]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){Object(d.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!ce){t.next=5;break}return t.next=3,e.connection.getBalance(ce.publicKey);case 3:n=t.sent,B(n/y.LAMPORTS_PER_SOL);case 5:case"end":return t.stop()}}),t)})))()}),[ce,e.connection]),Object(s.useEffect)(oe,[ce,e.candyMachineId,e.connection]),Object(L.jsxs)(L.Fragment,{children:[Object(L.jsxs)("main",{className:"containa",children:[ce&&Object(L.jsx)("p",{}),ce&&Object(L.jsxs)("p",{children:["Balance: ",(P||0).toLocaleString()," SOL"]}),Object(L.jsx)(C,{children:ce?r?j?Object(L.jsx)(T,{disabled:W||H||!K,onClick:ie,variant:"contained",children:W?"SOLD OUT":K?H?Object(L.jsx)(x.a,{}):"Reveal!":Object(L.jsx)(h.a,{date:ae,onMount:function(e){return e.completed&&I(!0)},onComplete:function(){return I(!0)},renderer:E})}):Object(L.jsxs)("div",{children:[Object(L.jsx)(T,{disabled:W||H||!K,onClick:ue,variant:"contained",children:W?"SOLD OUT":K?H?Object(L.jsx)(x.a,{}):"FLIP 0.1":Object(L.jsx)(h.a,{date:ae,onMount:function(e){return e.completed&&I(!0)},onComplete:function(){return I(!0)},renderer:E})}),Object(L.jsx)(T,{disabled:W||H||!K,onClick:fe,variant:"contained",children:W?"SOLD OUT":K?H?Object(L.jsx)(x.a,{}):"FLIP 0.5":Object(L.jsx)(h.a,{date:ae,onMount:function(e){return e.completed&&I(!0)},onComplete:function(){return I(!0)},renderer:E})}),Object(L.jsx)(T,{disabled:W||H||!K,onClick:pe,variant:"contained",children:W?"SOLD OUT":K?H?Object(L.jsx)(x.a,{}):"FLIP 1.0":Object(L.jsx)(h.a,{date:ae,onMount:function(e){return e.completed&&I(!0)},onComplete:function(){return I(!0)},renderer:E})})]}):Object(L.jsx)(T,{onClick:se,variant:"contained",children:"Initialize Session!"}):Object(L.jsx)(M,{children:"Connect Wallet"})}),Object(L.jsx)(A.a,{open:ee.open,autoHideDuration:6e3,onClose:function(){return te(Object(p.a)(Object(p.a)({},ee),{},{open:!1}))},children:Object(L.jsx)(v.a,{onClose:function(){return te(Object(p.a)(Object(p.a)({},ee),{},{open:!1}))},severity:ee.severity,children:ee.message})})]}),Object(L.jsx)("div",{className:"rules"})]})},U=n(32),F=n(110),K=n(338),I=n(598),D=new U.f.PublicKey("59rozoMHuVtmQXeozMQstZQLnr9fMUc8ciEntqxQ5HYh"),R=new U.f.PublicKey("FepJok87DJCc825MqhzXUyJJSSPtrz2AZkzvF92kwwKb"),W=new U.f.PublicKey("6thykzdUYhpLRKg4hySSqat1cWdbHE7G6gcHk2eYgUcN"),z="devnet",_=new U.f.Connection("https://api.devnet.solana.com"),Y=parseInt("1639780498.106",10),H=Object(K.a)({palette:{type:"dark"},overrides:{MuiButtonBase:{root:{justifyContent:"flex-start"}},MuiButton:{root:{textTransform:void 0,padding:"12px 16px"},startIcon:{marginRight:8},endIcon:{marginLeft:8}}}}),Q=function(){var e=Object(s.useMemo)((function(){return Object(y.clusterApiUrl)(z)}),[]),t=Object(s.useMemo)((function(){return[Object(F.a)(),Object(F.b)(),Object(F.c)(),Object(F.e)({network:z}),Object(F.d)({network:z})]}),[]);return Object(L.jsx)(I.a,{theme:H,children:Object(L.jsx)(S.a,{endpoint:e,children:Object(L.jsx)(S.b,{wallets:t,autoConnect:!0,children:Object(L.jsx)(w.b,{children:Object(L.jsx)(B,{candyMachineId:W,config:R,connection:_,startDate:Y,treasury:D,txTimeout:3e4})})})})})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,602)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))};f.a.render(Object(L.jsx)(i.a.StrictMode,{children:Object(L.jsx)(Q,{})}),document.getElementById("root")),G()}},[[565,1,2]]]);
//# sourceMappingURL=main.6c88304c.chunk.js.map