(this["webpackJsonpcandy-machine-mint"]=this["webpackJsonpcandy-machine-mint"]||[]).push([[0],{135:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return g}));var a=n(2),r=n.n(a),c=n(4),s=n(29),i=n(52),o=new s.d.PublicKey("cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ"),u=new s.d.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),l=new s.d.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),b=function(){var e=Object(c.a)(r.a.mark((function e(t,n,a){var s,i,o,u,l,b=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=b.length>3&&void 0!==b[3]?b[3]:"recent",i=b.length>4&&void 0!==b[4]&&b[4],o=!1,u={slot:0,confirmations:0,err:null},l=0,e.next=7,new Promise(function(){var e=Object(c.a)(r.a.mark((function e(b,d){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){o||(o=!0,console.log("Rejecting for timeout..."),d({timeout:!0}))}),n);try{l=a.onSignature(t,(function(e,t){o=!0,u={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),d(u)):(console.log("Resolved via websocket",e),b(u))}),s)}catch(f){o=!0,console.error("WS error in setup",t,f)}case 2:if(o||!i){e.next=8;break}return Object(c.a)(r.a.mark((function e(){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.getSignatureStatuses([t]);case 3:n=e.sent,u=n&&n.value[0],o||(u?u.err?(console.log("REST error for",t,u),o=!0,d(u.err)):u.confirmations?(console.log("REST confirmation for",t,u),o=!0,b(u)):console.log("REST no confirmations for",t,u):console.log("REST null result for",t,u)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),o||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,O(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return u=e.sent,a._signatureSubscriptions[l]&&a.removeSignatureListener(l),o=!0,console.log("Returning status",u),e.abrupt("return",u);case 12:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),d=function(t,n,a,r){var c=[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:a,isSigner:!1,isWritable:!1},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:s.d.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:i.b,isSigner:!1,isWritable:!1},{pubkey:s.d.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new s.d.TransactionInstruction({keys:c,programId:u,data:e.from([])})},f=function(){var e=Object(c.a)(r.a.mark((function e(t,n,a){var c,i,u,l,b,d,f,m,p;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=new s.b(a,t,{preflightCommitment:"recent"}),e.next=3,s.a.fetchIdl(o,c);case 3:return i=e.sent,u=new s.a(i,o,c),l={id:n,connection:a,program:u},e.next=8,u.account.candyMachine.fetch(n);case 8:return b=e.sent,console.log("state",b),d=b.data.itemsAvailable.toNumber(),f=b.itemsRedeemed.toNumber(),m=d-f,p=b.data.goLiveDate.toNumber(),p=new Date(1e3*p),console.log({itemsAvailable:d,itemsRedeemed:f,itemsRemaining:m,goLiveDate:p}),e.abrupt("return",{candyMachine:l,itemsAvailable:d,itemsRedeemed:f,itemsRemaining:m,goLiveDate:p});case 17:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),m=function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.d.PublicKey.findProgramAddress([e.from("metadata"),l.toBuffer(),n.toBuffer(),e.from("edition")],l);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.d.PublicKey.findProgramAddress([e.from("metadata"),l.toBuffer(),n.toBuffer()],l);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var e=Object(c.a)(r.a.mark((function e(t,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.d.PublicKey.findProgramAddress([t.toBuffer(),i.b.toBuffer(),n.toBuffer()],u);case 2:return e.abrupt("return",e.sent[0]);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),g=function(){var e=Object(c.a)(r.a.mark((function e(t,n,a,c,o,u){var b,f,g,O,x,h,v,y,k;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(a,o);case 2:return b=e.sent,(f=[]).push({pubkey:b,isWritable:!0,isSigner:!1}),f.push({pubkey:a,isWritable:!1,isSigner:!0}),e.next=8,j(a,u.publicKey);case 8:return g=e.sent,O=t.connection,x=t.program,e.next=12,p(u.publicKey);case 12:return h=e.sent,e.next=15,m(u.publicKey);case 15:return v=e.sent,e.next=18,O.getMinimumBalanceForRentExemption(i.a.span);case 18:return y=e.sent,console.log("anchor.web3",s.d,a.toString()),console.log("mint",u,u.publicKey.toString()),console.log("token",g,g.toString()),console.log("metadata",h,h.toString()),console.log("masterEdition",v,v.toString()),console.log("rent",y),k=[s.d.SystemProgram.createAccount({fromPubkey:a,newAccountPubkey:u.publicKey,space:i.a.span,lamports:y,programId:i.b}),i.c.createInitMintInstruction(i.b,u.publicKey,0,a,a),d(g,a,a,u.publicKey),i.c.createMintToInstruction(i.b,u.publicKey,g,a,[],1)],e.next=28,x.rpc.mintNft({accounts:{config:n,candyMachine:t.id,payer:a,wallet:c,mint:u.publicKey,metadata:h,masterEdition:v,mintAuthority:a,updateAuthority:a,tokenMetadataProgram:l,tokenProgram:i.b,systemProgram:s.d.SystemProgram.programId,rent:s.d.SYSVAR_RENT_PUBKEY,clock:s.d.SYSVAR_CLOCK_PUBKEY},signers:[u],remainingAccounts:f,instructions:k});case 28:return e.abrupt("return",e.sent);case 29:case"end":return e.stop()}}),e)})));return function(t,n,a,r,c,s){return e.apply(this,arguments)}}(),O=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}).call(this,n(10).Buffer)},349:function(e,t,n){},350:function(e,t,n){},353:function(e,t){},354:function(e,t){},371:function(e,t){},372:function(e,t){},403:function(e,t,n){},422:function(e,t,n){},478:function(e,t){},480:function(e,t){},494:function(e,t){},502:function(e,t){},504:function(e,t){},531:function(e,t){},533:function(e,t){},539:function(e,t){},551:function(e,t){},554:function(e,t){},566:function(e,t){},567:function(e,t,n){"use strict";n.r(t);var a,r,c,s,i=n(0),o=n.n(i),u=n(31),l=n.n(u),b=(n(349),n(13)),d=(n(350),n(17)),f=n(2),m=n.n(f),p=n(18),j=n(4),g=n(114),O=n(117),x=n(306),h=n(599),v=n(606),y=n(607),k=n(601),w=n(608),S=n(613),N=n(605),A=n(617),P=n(616),B=n(52),K=n(615),R=n(29),T=n(113),C=n(47),M=(n(403),n(135)),D=n(177),I=n.n(D),E=n(15),W=(Object(O.a)(T.a)(a||(a=Object(g.a)([""]))),O.a.span(r||(r=Object(g.a)([""])))),L=Object(O.a)(h.a)(c||(c=Object(g.a)([""]))),F="FF",V="7NiXUoNdAsia6chRiDktgwxZRdkCZKyGfrto5JRbx7kA",Y=function(e){var t=e.days,n=e.hours,a=e.minutes,r=e.seconds;e.completed;return Object(E.jsxs)(W,{children:[n+24*(t||0)," hours, ",a," minutes, ",r," seconds"]})},_=function(e){var t=Object(i.useState)(),n=Object(b.a)(t,2),a=(n[0],n[1],Object(i.useState)()),r=Object(b.a)(a,2),c=r[0],s=r[1],o=Object(i.useState)(!1),u=Object(b.a)(o,2),l=u[0],f=u[1],g=Object(i.useState)(!1),O=Object(b.a)(g,2),h=O[0],T=O[1],D=Object(i.useState)(!1),W=Object(b.a)(D,2),_=W[0],H=W[1],U=Object(i.useState)(0),X=Object(b.a)(U,2),J=(X[0],X[1]),Z=Object(i.useState)(0),q=Object(b.a)(Z,2),G=(q[0],q[1]),Q=Object(i.useState)(0),z=Object(b.a)(Q,2),$=(z[0],z[1]),ee=Object(i.useState)({open:!1,message:"",severity:void 0}),te=Object(b.a)(ee,2),ne=te[0],ae=te[1],re=Object(i.useState)(new Date(e.startDate)),ce=Object(b.a)(re,2),se=ce[0],ie=ce[1],oe=Object(C.c)(),ue=Object(i.useState)(),le=Object(b.a)(ue,2),be=le[0],de=le[1],fe=Object(i.useState)(!0),me=Object(b.a)(fe,2),pe=me[0],je=me[1],ge=Object(i.useState)([]),Oe=Object(b.a)(ge,2),xe=Oe[0],he=Oe[1],ve=Object(i.useState)(!1),ye=Object(b.a)(ve,2),ke=ye[0],we=ye[1],Se=Object(i.useState)(!1),Ne=Object(b.a)(Se,2),Ae=Ne[0],Pe=Ne[1],Be=Object(i.useState)(-1),Ke=Object(b.a)(Be,2),Re=Ke[0],Te=Ke[1],Ce=Object(i.useState)(-1),Me=Object(b.a)(Ce,2),De=Me[0],Ie=Me[1],Ee=Object(i.useState)(null),We=Object(b.a)(Ee,2),Le=We[0],Fe=We[1],Ve=function(){var t=Object(j.a)(m.a.mark((function t(){var n,a,r,c,s,i,o,u,l,b,d;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("refreshTokenItems start"),oe){t.next=3;break}return t.abrupt("return");case 3:return n="https://api.solscan.io",e.devnet&&(n="https://api-devnet.solscan.io"),a="".concat(n,"/account/tokens?address=").concat(oe.publicKey.toString()),console.log("refreshTokenItems",a),t.next=9,I.a.get(a);case 9:if((r=t.sent).data.succcess){t.next=12;break}return t.abrupt("return");case 12:c=(c=r.data.data).filter((function(e){return 0!==e.tokenAmount.uiAmount})),s=[],i=Object(p.a)(c),t.prev=16,i.s();case 18:if((o=i.n()).done){t.next=27;break}return u=o.value,l=u.tokenAddress,b=u.tokenAccount,t.next=23,Ye(l);case 23:(d=t.sent)&&d.symbol===F&&s.push({tokenAddress:l,tokenAccount:b,name:d.name,image:d.image});case 25:t.next=18;break;case 27:t.next=32;break;case 29:t.prev=29,t.t0=t.catch(16),i.e(t.t0);case 32:return t.prev=32,i.f(),t.finish(32);case 35:console.log("refreshTokenItems",s),he(s),Te(-1),we(!1);case 39:case"end":return t.stop()}}),t,null,[[16,29,32,35]])})));return function(){return t.apply(this,arguments)}}(),Ye=function(){var t=Object(j.a)(m.a.mark((function t(n){var a,r,c,s,i,o,u=arguments;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=!(u.length>1&&void 0!==u[1])||u[1],r="https://api.solscan.io",e.devnet&&(r="https://api-devnet.solscan.io"),c="".concat(r,"/account?address=").concat(n.toString()),t.next=6,I.a.get(c);case 6:if((s=t.sent).data.succcess){t.next=9;break}return t.abrupt("return",null);case 9:if(t.prev=9,i=s.data.data.metadata.data.symbol,a&&i!==F){t.next=17;break}return o=s.data.data.metadata.data.uri,t.next=15,I.a.get(o);case 15:return s=t.sent,t.abrupt("return",s.data);case 17:t.next=22;break;case 19:return t.prev=19,t.t0=t.catch(9),t.abrupt("return",null);case 22:case"end":return t.stop()}}),t,null,[[9,19]])})));return function(e){return t.apply(this,arguments)}}(),_e=function(){Object(j.a)(m.a.mark((function t(){var n,a,r,c,s,i;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(oe&&e.connection){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.next=5,Object(M.c)(oe,e.candyMachineId,e.connection);case 5:n=t.sent,a=n.candyMachine,r=n.goLiveDate,c=n.itemsAvailable,s=n.itemsRemaining,i=n.itemsRedeemed,J(c),$(s),G(i),T(0===s),ie(r),de(a),je(!0),t.next=23;break;case 20:t.prev=20,t.t0=t.catch(2),je(!1);case 23:case"end":return t.stop()}}),t,null,[[2,20]])})))()},He=function(){var t=Object(j.a)(m.a.mark((function t(){var n,a,r,c,s,i;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=R.d.Keypair.generate(),t.prev=1,H(!0),a=new R.d.PublicKey(V),!oe||!(null===be||void 0===be?void 0:be.program)){t.next=23;break}return console.log("before mint one token"),t.next=8,Object(M.d)(be,e.config,oe.publicKey,e.treasury,a,n);case 8:return r=t.sent,console.log("after mint one token"),t.next=12,Object(M.b)(r,e.txTimeout,e.connection,"singleGossip",!1);case 12:if(null===(c=t.sent)||void 0===c?void 0:c.err){t.next=22;break}return t.next=16,Ye(n.publicKey,!1);case 16:s=t.sent,console.log("mutant",s),Fe(s),ae({open:!0,message:"Congratulations! Breed succeeded!",severity:"success"}),t.next=23;break;case 22:ae({open:!0,message:"Breed failed! Please try again!",severity:"error"});case 23:t.next=31;break;case 25:t.prev=25,t.t0=t.catch(1),i=t.t0.msg||"Breed failed! Please try again!",console.log("error",t.t0),t.t0.msg?311===t.t0.code?(i="SOLD OUT!",T(!0)):312===t.t0.code&&(i="Breed period hasn't started yet."):t.t0.message.indexOf("0x138")||(t.t0.message.indexOf("0x137")?i="SOLD OUT!":t.t0.message.indexOf("0x135")&&(i="Insufficient funds to breed. Please fund your wallet.")),ae({open:!0,message:i,severity:"error"});case 31:return t.prev=31,H(!1),_e(),Ue(),t.finish(31);case 36:case"end":return t.stop()}}),t,null,[[1,25,31,36]])})));return function(){return t.apply(this,arguments)}}(),Ue=function(){var t=Object(j.a)(m.a.mark((function t(){var n,a,r,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!oe){t.next=20;break}return t.prev=1,Pe(!0),n=new R.d.PublicKey(V),t.next=6,R.d.PublicKey.findProgramAddress([oe.publicKey.toBuffer(),B.b.toBuffer(),n.toBuffer()],M.a);case 6:return a=t.sent[0],t.next=9,e.connection.getTokenAccountBalance(a);case 9:r=t.sent,console.log("puppy balance",r),c=r.value.uiAmount,c=Math.ceil(c),s(c),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(1),s(0);case 19:Pe(!1);case 20:case"end":return t.stop()}}),t,null,[[1,16]])})));return function(){return t.apply(this,arguments)}}();return Object(i.useEffect)((function(){Object(j.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:oe&&(we(!0),Te(-1),Ve(),Ue());case 1:case"end":return e.stop()}}),e)})))()}),[oe,e.connection,e.devnet]),Object(i.useEffect)(_e,[oe,e.candyMachineId,e.connection,e.devnet]),Object(E.jsxs)("main",{children:[Object(E.jsx)(v.a,{children:Object(E.jsxs)(y.a,{container:!0,spacing:1,children:[Object(E.jsx)(y.a,{item:!0,md:12,children:Object(E.jsx)(k.a,{variant:"h4",className:pe?"title":"title red",children:pe?"":"CANDY MACHINE IS NOT VALID"})}),Object(E.jsxs)(y.a,{container:!0,item:!0,md:12,spacing:3,children:[Object(E.jsxs)(y.a,{item:!0,md:4,xs:12,className:"row",children:[Object(E.jsxs)(k.a,{variant:"h5",className:"subtitle",children:["Fancy Frenchies"," ",oe&&!ke&&"(".concat(xe.length,")")]}),Object(E.jsxs)("div",{className:"card",children:[Object(E.jsx)("img",{alt:"ff back",src:"img/ff_back.png",className:"card-back"}),Object(E.jsx)("img",{alt:"Fancy Frenchy",src:-1===Re?"img/ff.png":xe[Re].image,className:"card-image"}),Object(E.jsx)(k.a,{variant:"h6",className:"connect-wallet black",children:oe?"Select a fancy frenchy":"Connect wallet and select"}),ke?Object(E.jsx)(w.a,{}):oe&&Object(E.jsxs)(S.a,{label:"Age",className:"item-select",onChange:function(e){Te(e.target.value),Fe(null)},value:Re,children:[Object(E.jsx)(N.a,{value:-1,children:" Not selected"}),xe.map((function(e,t){return Object(E.jsxs)(N.a,{value:t,className:"menu-item",children:[Object(E.jsx)(A.a,{src:e.image}),e.name]},t)}))]})]})]}),Object(E.jsxs)(y.a,{item:!0,md:4,xs:12,className:"row",children:[Object(E.jsx)(k.a,{variant:"h5",className:"subtitle",children:"Breeding Chamber"}),Object(E.jsxs)("div",{className:"card",children:[Object(E.jsx)("img",{alt:"mutant back",src:"img/mutant_back.png",className:"card-back"}),Object(E.jsx)("img",{alt:"Mutant",src:Le?Le.image:"img/mutant.png",className:"card-image"}),Object(E.jsx)(L,{disabled:h||_||!l||-1===Re||-1===De||!pe,onClick:He,className:"mint-button",children:h?"Breed Period Finished":l?_?Object(E.jsx)(w.a,{}):"Mint Baby":Object(E.jsx)(x.a,{date:se,onMount:function(e){return e.completed&&f(!0)},onComplete:function(){return f(!0)},renderer:Y})})]})]}),Object(E.jsxs)(y.a,{item:!0,md:4,xs:12,className:"row",children:[Object(E.jsxs)(k.a,{variant:"h5",className:"subtitle",children:["Bones"," ",void 0===c||Ae?"":"(".concat(c,")")]}),Object(E.jsxs)("div",{className:"card",children:[Object(E.jsx)("img",{alt:"bone back",src:"img/bone_back.png",className:"card-back"}),Object(E.jsx)("img",{alt:"bone",src:-1===De?"img/bone_ano.png":"img/bone.png",className:"card-image"}),Object(E.jsx)(k.a,{variant:"h6",className:"connect-wallet black",children:oe?"Select a bone":"Connect wallet and select"}),Ae?Object(E.jsx)(w.a,{}):oe&&Object(E.jsxs)(S.a,{label:"Age",className:"item-select",onChange:function(e){Ie(e.target.value),Fe(null)},value:De,children:[Object(E.jsx)(N.a,{value:-1,children:" Not selected"}),new Array(c).fill("4").map((function(e,t){return Object(E.jsxs)(N.a,{value:t,className:"menu-item",children:[Object(E.jsx)(A.a,{src:"img/bone.png"}),"Bone"]},t)}))]})]})]})]})]})}),Object(E.jsx)(P.a,{open:ne.open,autoHideDuration:6e3,onClose:function(){return ae(Object(d.a)(Object(d.a)({},ne),{},{open:!1}))},children:Object(E.jsx)(K.a,{onClose:function(){return ae(Object(d.a)(Object(d.a)({},ne),{},{open:!1}))},severity:ne.severity,children:ne.message})})]})},H=n(609),U=n(610),X=n(618),J=(n(422),Object(O.a)(T.a)(s||(s=Object(g.a)([""])))),Z=function(e){var t=e.length;return e.substr(0,4)+".."+e.substr(t-4)},q=function(e){var t=Object(C.c)();return Object(E.jsx)(H.a,{position:"fixed",className:"appbar",children:Object(E.jsxs)(U.a,{children:[Object(E.jsx)("div",{className:"appbar-title"}),Object(E.jsx)(J,{children:t&&Z(t.publicKey.toBase58())||"Connect"}),Object(E.jsxs)("div",{className:"net-select",children:[Object(E.jsx)(X.a,{checked:e.devnet,onChange:function(t){e.setDevNet(t.target.checked)},color:"primary",disabled:!t,inputProps:{"aria-label":"primary checkbox"}}),Object(E.jsxs)(k.a,{children:[" ",e.devnet?"DevNet":"MainNet"]})]})]})})},G=n(6),Q=n(16),z=n(118),$=n(334),ee=n(611),te=new R.d.PublicKey("CMcb4ReBZyTbeVnPfhVxuJuf2HgANjrSXNvYrcBmjcNX"),ne=new R.d.PublicKey("3XP21ge177XxBhwsoa8p8N1sifnoB3b5V7YHveab85sV"),ae=new R.d.PublicKey("DdMEX1dT7TQTHCoVC6NrKMww7e5yVVD4DgQfNSHeFRYc"),re=parseInt("1637625600",10),ce=Object($.a)({palette:{type:"dark"},overrides:{MuiButtonBase:{root:{justifyContent:"flex-start"}},MuiButton:{root:{textTransform:void 0,padding:"12px 16px"},startIcon:{marginRight:8},endIcon:{marginLeft:8}}}}),se=function(){var e=Object(i.useState)("https://api.devnet.solana.com"),t=Object(b.a)(e,2),n=t[0],a=t[1],r=Object(i.useState)(new R.d.Connection("https://explorer-api.devnet.solana.com")),c=Object(b.a)(r,2),s=c[0],o=c[1],u=Object(i.useState)(Q.WalletAdapterNetwork.Devnet),l=Object(b.a)(u,2),d=l[0],f=(l[1],Object(i.useState)(!0)),m=Object(b.a)(f,2),p=m[0],j=m[1],g=Object(i.useMemo)((function(){return[Object(z.a)(),Object(z.b)(),Object(z.c)(),Object(z.e)({network:d}),Object(z.d)({network:d})]}),[]);return Object(i.useEffect)((function(){var e=p?Q.WalletAdapterNetwork.Devnet:Q.WalletAdapterNetwork.Mainnet,t=p?"https://explorer-api.devnet.solana.com":"https://explorer-api.mainnet-beta.solana.com";o(new R.d.Connection(t));var n=Object(G.clusterApiUrl)(e);a(n),console.log("endpoint",n)}),[p]),Object(E.jsx)(ee.a,{theme:ce,children:Object(E.jsx)(C.a,{endpoint:n,children:Object(E.jsx)(C.b,{wallets:g,autoConnect:!0,children:Object(E.jsx)(T.b,{children:Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(q,{setDevNet:j,devnet:p}),Object(E.jsx)(_,{candyMachineId:ae,config:ne,connection:s,startDate:re,treasury:te,txTimeout:3e4,devnet:p})]})})})})})},ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,619)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};l.a.render(Object(E.jsx)(o.a.StrictMode,{children:Object(E.jsx)(se,{})}),document.getElementById("root")),ie()}},[[567,1,2]]]);
//# sourceMappingURL=main.8328bf13.chunk.js.map