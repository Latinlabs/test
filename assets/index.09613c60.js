var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(t,n,a)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a;export function __vite_legacy_guard(){import("data:text/javascript,")}import{c as i,r as c,w as l,u as d,a as u,b as m,d as p,e as h,C as y,N as b,E as f,J as g,f as w,o as v,W as x,g as _,h as k,i as M,j as E,k as A,l as C,m as S,n as G,p as O,q as I,s as L,t as P,P as T,v as X,x as N,A as H,y as D,z as j,D as W,B as K,F as q,G as R,H as B,I as F,T as z,K as Y,L as V,M as $,O as U,Q,R as J,U as Z,S as ee,V as te,X as ne,Y as ae,Z as se,_ as oe,$ as re,a0 as ie,a1 as ce,a2 as le,a3 as de}from"./vendor.e4b873c8.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var ue="/test/assets/1637307487230.84f60acb.jpg";const me=i();var pe,he,ye,be,fe=[{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"spender",type:"address"},{name:"value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"from",type:"address"},{name:"to",type:"address"},{name:"value",type:"uint256"}],name:"transferFrom",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"spender",type:"address"},{name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"owner",type:"address"}],name:"balanceOf",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"spender",type:"address"},{name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"to",type:"address"},{name:"value",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],name:"allowance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{inputs:[{name:"_name",type:"string"},{name:"_symbol",type:"string"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Approval",type:"event"}];(he=pe||(pe={})).XS="XS",he.SM="SM",he.MD="MD",he.LG="LG",he.XL="XL",he.XXL="XXL",(be=ye||(ye={}))[be.XS=480]="XS",be[be.SM=576]="SM",be[be.MD=768]="MD",be[be.LG=992]="LG",be[be.XL=1200]="XL",be[be.XXL=1600]="XXL";const ge=new Map;let we,ve,xe;function _e(e){const t=c(pe.XL),n=c(window.innerWidth);function a(){const e=document.body.clientWidth,a=ge.get(pe.XS),s=ge.get(pe.SM),o=ge.get(pe.MD),r=ge.get(pe.LG),i=ge.get(pe.XL);t.value=e<a?pe.XS:e<s?pe.SM:e<o?pe.MD:e<r?pe.LG:e<i?pe.XL:pe.XXL,n.value=e}function s(){null==e||e({screen:we,width:ve,realWidth:xe,screenEnum:ye,screenMap:ge,sizeEnum:pe})}return function({el:e=window,name:t,listener:n,options:a,autoRemove:s=!0,isDebounce:o=!0,wait:r=80}){let i=()=>{};const p=c(!1);if(e){const h=c(e),y=o?u(n,r):m(n,r),b=r?y:n,f=e=>{p.value=!0,e.removeEventListener(t,b,a)},g=e=>e.addEventListener(t,b,a),w=l(h,((e,t,n)=>{e&&(!d(p)&&g(e),n((()=>{s&&f(e)})))}),{immediate:!0});i=()=>{f(h.value),w()}}}({el:window,name:"resize",listener:()=>{a(),s()}}),a(),we=p((()=>d(t))),ve=p((()=>ge.get(d(t)))),xe=p((()=>d(n))),s(),{screenRef:we,screenEnum:ye,widthRef:ve,realWidthRef:xe}}ge.set(pe.XS,480),ge.set(pe.SM,576),ge.set(pe.MD,768),ge.set(pe.LG,992),ge.set(pe.XL,1200),ge.set(pe.XXL,1600);const ke=h({id:"userStore",state:()=>({userInfo:{},address:"",chainId:0,provider:{},contract:{},isMobile:!1}),getters:{},actions:{setAddress(e){this.address=e||""},setChainId(e){this.chainId=e||0},delAddress(){this.address=""},delChainId(){this.chainId=0},setProvider(e){this.provider=e},initContract(e){this.contract=new y("0x201Dd7d57d330B35ccdd7C0c825250A30Be815db",fe,e)},logout(){this.address="",this.chainId=0,this.provider={},this.contract={},this.isMobile?b({type:"success",message:"Exit Success"}):f.success({title:"Exit Success",offset:100})},setMobile(){_e((({screenMap:e,sizeEnum:t,width:n})=>{const a=e.get(t.LG);a&&(this.isMobile=n.value-1<a)}))}}});function Me(){return ke(me)}const Ee=[{name:"Ethereum Mainnet",short_name:"eth",chain:"ETH",network:"mainnet",chain_id:1,network_id:1,rpc_url:"https://mainnet.infura.io/v3/%API_KEY%",native_currency:{symbol:"ETH",name:"Ether",decimals:"18",contractAddress:"",balance:""}},{name:"Ethereum Ropsten",short_name:"rop",chain:"ETH",network:"ropsten",chain_id:3,network_id:3,rpc_url:"https://ropsten.infura.io/v3/%API_KEY%",native_currency:{symbol:"ETH",name:"Ether",decimals:"18",contractAddress:"",balance:""}},{name:"Ethereum Rinkeby",short_name:"rin",chain:"ETH",network:"rinkeby",chain_id:4,network_id:4,rpc_url:"https://rinkeby.infura.io/v3/%API_KEY%",native_currency:{symbol:"ETH",name:"Ether",decimals:"18",contractAddress:"",balance:""}},{name:"Ethereum Görli",short_name:"gor",chain:"ETH",network:"goerli",chain_id:5,network_id:5,rpc_url:"https://goerli.infura.io/v3/%API_KEY%",native_currency:{symbol:"ETH",name:"Ether",decimals:"18",contractAddress:"",balance:""}},{name:"RSK Mainnet",short_name:"rsk",chain:"RSK",network:"mainnet",chain_id:30,network_id:30,rpc_url:"https://public-node.rsk.co",native_currency:{symbol:"RSK",name:"RSK",decimals:"18",contractAddress:"",balance:""}},{name:"Ethereum Kovan",short_name:"kov",chain:"ETH",network:"kovan",chain_id:42,network_id:42,rpc_url:"https://kovan.infura.io/v3/%API_KEY%",native_currency:{symbol:"ETH",name:"Ether",decimals:"18",contractAddress:"",balance:""}},{name:"Ethereum Classic Mainnet",short_name:"etc",chain:"ETC",network:"mainnet",chain_id:61,network_id:1,rpc_url:"https://ethereumclassic.network",native_currency:{symbol:"ETH",name:"Ether Classic",decimals:"18",contractAddress:"",balance:""}},{name:"POA Network Sokol",short_name:"poa",chain:"POA",network:"sokol",chain_id:77,network_id:77,rpc_url:"https://sokol.poa.network",native_currency:{symbol:"POA",name:"POA",decimals:"18",contractAddress:"",balance:""}},{name:"POA Network Core",short_name:"skl",chain:"POA",network:"core",chain_id:99,network_id:99,rpc_url:"https://core.poa.network",native_currency:{symbol:"POA",name:"POA",decimals:"18",contractAddress:"",balance:""}},{name:"xDAI Chain",short_name:"xdai",chain:"POA",network:"dai",chain_id:100,network_id:100,rpc_url:"https://dai.poa.network",native_currency:{symbol:"xDAI",name:"xDAI",decimals:"18",contractAddress:"",balance:""}},{name:"HECO Mainnet",short_name:"heco",chain:"heco",network:"HECO",chain_id:128,network_id:128,rpc_url:"https://http-mainnet-node.huobichain.com",native_currency:{symbol:"HECO",name:"HECO",decimals:"18",contractAddress:"0x3Fc4769f5d8ddfC1b6bbeCeD34c56d91386a7A35",balance:""}},{name:"HECO Test",short_name:"heco",chain:"heco",network:"HECO",chain_id:256,network_id:256,rpc_url:"https://http-testnet.hecochain.com",native_currency:{symbol:"HECO",name:"HECO",decimals:"18",contractAddress:"0x3A536cad374968dE9D3b37110B06F4ba06883d48",balance:""}},{name:"Callisto Mainnet",short_name:"clo",chain:"callisto",network:"mainnet",chain_id:820,network_id:1,rpc_url:"https://clo-geth.0xinfra.com/",native_currency:{symbol:"CLO",name:"CLO",decimals:"18",contractAddress:"",balance:""}}];function Ae(e){const i=Ee.filter((t=>t.chain_id===e))[0];if(!i)throw new Error("ChainId missing or not supported");const c="4950a481285046e28d71fa9676d46554";if(i.rpc_url.includes("infura.io")&&i.rpc_url.includes("%API_KEY%")){const e=i.rpc_url.replace("%API_KEY%",c);return l=((e,t)=>{for(var n in t||(t={}))s.call(t,n)&&r(e,n,t[n]);if(a)for(var n of a(t))o.call(t,n)&&r(e,n,t[n]);return e})({},i),t(l,n({rpc_url:e}))}var l;return i}const Ce=h({id:"walletStore",state:()=>({connector:{},connected:!1}),getters:{},actions:{setConnector(e){this.connector=e},async subscribeToEvents(){this.connector&&(console.log("connector"),this.connector.on("session_update",(async(e,t)=>{if(console.log('connector.on("session_update")'),e)throw e})),this.connector.on("connect",(async(e,t)=>{if(console.log('connector.on("connect")'),e)throw e;const{chainId:n,accounts:a}=t.params[0],s=Ae(n).rpc_url,o=new g(s);o.ready.then((async()=>{this.connected=!0;const e=Me(),t=o.getSigner();console.log(t,"sign"),e.setAddress(a[0]),e.setChainId(n),e.initContract(t),e.setProvider(o),localStorage.setItem("walletType","2")}))})),this.connector.on("disconnect",(e=>{if(console.log('connector.on("disconnect")'),e)throw e;this.kill()})))},kill(){if(console.log('connector.on("Kill")'),!this.connector)return;this.connector.killSession(),this.connector={},this.connected=!1;Me().logout(),localStorage.setItem("walletType","")},setConnect(e){}}});var Se=(e,t)=>{for(const[n,a]of t)e[n]=a;return e};const Ge=e=>(D("data-v-45de78b7"),e=e(),j(),e),Oe={class:"max-w-screen-xl mx-auto h-24 flex items-center justify-between px-2 md:px-10"},Ie=Ge((()=>I("div",{class:"logo"},[I("img",{width:"100",src:ue,alt:"GMGN"})],-1))),Le={class:"flex items-center"},Pe={class:"mr-2 flex items-center sm:hidden"},Te=Ge((()=>I("span",{class:"sr-only"},"Open main menu",-1))),Xe=["href"],Ne={class:"rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"},He={class:"px-5 pt-4 flex items-center justify-between"},De=Ge((()=>I("div",null,[I("img",{class:"h-8 w-auto",src:ue,alt:""})],-1))),je={class:"-mr-2"},We=Ge((()=>I("span",{class:"sr-only"},"Close main menu",-1))),Ke={class:"px-2 pt-2 pb-3 space-y-1"},qe=["href"],Re={key:0},Be=$("Exit");var Fe=Se({setup(e){const t=window.localStorage,n=W.Component,a=w({dialog:!1,exit:!1}),s=Me(),{proxy:o}=K(),r=[{name:"Twitter",href:"#"},{name:"Discord",href:"#"},{name:"Contract",href:"#"}],i=[{name:"Exit",color:"#ee0a24",active:"exit"}];v((()=>{switch(t.getItem("walletType")){case"1":m();break;case"2":h()}}));const c=p((()=>Me().address));function l(e){const n=Me();if("exit"===e.active)t.setItem("walletType","0"),n.logout()}function u(){window.web3&&window.ethereum?a.dialog=!0:h()}function m(){window.ethereum.request({method:"eth_requestAccounts"}).then((async()=>{const e=await new x(window.web3.currentProvider);e.ready.then((async n=>{const o=e.getSigner();s.setProvider(e),s.initContract(o),s.setAddress(await o.getAddress()),s.setChainId(n.chainId),t.setItem("walletType","1"),a.dialog=!1}))}))}async function h(){const e=new _({bridge:"https://bridge.walletconnect.org",qrcodeModal:k});a.dialog=!1;const n=Ce(me);if(n.setConnector(e),e.connected){const n=Ae(e.chainId).rpc_url,a=new g(n);a.ready.then((async()=>{const n=a.getSigner();s.setAddress(e.accounts[0]),s.setChainId(e.chainId),s.initContract(n),s.setProvider(a),t.setItem("walletType","2")}))}else await e.createSession();await n.subscribeToEvents()}return(e,t)=>{const p=M,y=E,b=A,f=C,g=S;return G(),O("div",null,[I("header",Oe,[Ie,I("div",Le,[L(d(T),null,{default:P((()=>[I("div",Pe,[L(d(q),{class:"rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"},{default:P((()=>[Te,L(d(R),{class:"h-12 w-7","aria-hidden":"true"})])),_:1})]),(G(),O(B,null,F(r,(e=>I("a",{key:e.name,href:e.href,class:"hidden sm:inline-block text-base font-medium text-gray-300 hover:text-white sm:pr-10"},X(e.name),9,Xe))),64)),L(z,{"enter-active-class":"duration-150 ease-out","enter-from-class":"opacity-0 scale-95","enter-to-class":"opacity-100 scale-100","leave-active-class":"duration-100 ease-in","leave-from-class":"opacity-100 scale-100","leave-to-class":"opacity-0 scale-95"},{default:P((()=>[L(d(Y),{focus:"",class:"absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"},{default:P((()=>[I("div",Ne,[I("div",He,[De,I("div",je,[L(d(q),{class:"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100"},{default:P((()=>[We,L(d(V),{class:"h-6 w-6","aria-hidden":"true"})])),_:1})])]),I("div",Ke,[(G(),O(B,null,F(r,(e=>I("a",{key:e.name,href:e.href,class:"block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"},X(e.name),9,qe))),64))])])])),_:1})])),_:1})])),_:1}),d(c)?(G(),O("div",Re,[d(s).isMobile?(G(),O("button",{key:0,class:"bg-blue-700 py-3 px-2 bg-btn rounded cursor-pointer",onClick:t[0]||(t[0]=e=>d(a).exit=!0)},X(d(o).$strSub(d(c))),1)):(G(),N(g,{key:1},{dropdown:P((()=>[L(f,null,{default:P((()=>[(G(),O(B,null,F(i,(e=>L(b,{onClick:t=>l(e)},{default:P((()=>[Be])),_:2},1032,["onClick"]))),64))])),_:1})])),default:P((()=>[L(y,{size:"mini",type:"primary"},{default:P((()=>[$(X(d(o).$strSub(d(c))),1),L(p,{class:"el-icon--right"},{default:P((()=>[L(d(U))])),_:1})])),_:1})])),_:1}))])):(G(),O("button",{key:1,class:"bg-blue-700 py-3 px-2 bg-btn rounded cursor-pointer",onClick:u}," Connect Wallet "))])]),L(d(n),{class:"text-black",show:d(a).dialog,"onUpdate:show":t[1]||(t[1]=e=>d(a).dialog=e),closeOnClickOverlay:!0,title:"选择钱包",showConfirmButton:!1},{default:P((()=>[I("ul",{class:"text-center"},[I("li",{class:"py-6 cursor-pointer border-b border-bg border-opacity-20",onClick:m},"MetaMask"),I("li",{class:"py-6 cursor-pointer",onClick:h},"WalletConnect")])])),_:1},8,["show"]),L(d(H),{show:d(a).exit,"onUpdate:show":t[2]||(t[2]=e=>d(a).exit=e),actions:i,"cancel-text":"Cancel","close-on-click-action":"",onSelect:l},null,8,["show"])])}}},[["__scopeId","data-v-45de78b7"]]);Q([ee,te,ne,ae,se]);let ze=document.documentElement.clientWidth<420;var Ye=Se(J({name:"HelloWorld",components:{VChart:Z},setup:()=>({option:c({tooltip:{trigger:"item"},legend:{bottom:"0%",left:"center",textStyle:{color:"#fff"},formatter:function(e){let t=e;return-1!==e.indexOf("(")&&(t=e.slice(0,e.indexOf("("))),ze?t:e}},series:[{name:"Demo Pie",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:5,borderColor:"#191934",borderWidth:3},data:[{value:500,name:"GM(6:00:00-09:59:59)",itemStyle:{color:"#FDDA5E"}},{value:310,name:"GN(22:00:00-01:59:59)",itemStyle:{color:"#28283B"}},{value:1548,name:"Other",itemStyle:{color:"#F0F0F0"}}],label:{show:!1,position:"center"},labelLine:{show:!1},emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0)"}}}]})})}),[["render",function(e,t,n,a,s,o){const r=oe("v-chart");return G(),N(r,{ref:"echarts",class:"chart",option:e.option,autoresize:!0},null,8,["option"])}],["__scopeId","data-v-74be8f25"]]);const Ve={},$e=[re('<h1 class="text-2xl my-10">FAQ</h1><div class="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-4 gap-4 px-3"><div class="p-5 md:col-start-2 md:col-end-6 lg:col-start-2 lg:col-end-4 text-left bg-gray-600 text-xl font-thin"><span class="text-2xl font-medium">What is GMGN?</span><br> GMGN is a decentralised cryptocurrency based on the GM/GN meme.<br><br><span class="text-2xl font-medium">What do you mean by &quot;decentralised&quot;?</span><br> GMGN is not run by any individual company or person. Technically speaking, it operates according to rules agreed by consensus, rather than decided upon by some founding or owning entity.<br><br><span class="text-2xl font-medium">What do you mean by &quot;cryptocurrency&quot;?</span><br> A cryptocurrency is a digital currency that is secured by cryptography, in contrast to conventional (fiat) currencies where they are secured by a government or governments.<br><br><span class="text-2xl font-medium">Okay, but What is &quot;GM/GN” meme?</span><br> Although some people think it&#39;s silly, they take it too seriously, we just need more fun and cool language symbols to express our expectations for the future.<br><br><span class="text-2xl font-medium">So How to get GMGN coins?</span><br> First you need to have a wallet and make sure it contains at least 0.5 BNB<br> Every 12 hours you can participate and get a time stamp, randomly combined by the program in hours (00-23), minutes (00-59) and seconds (00-59), e.g. 07:35:46. The protocol defines the GM time zone as 6:00:00 -- 09:59:59 and the GN as 22:00:00 -- 01:59:59.<br> The number of tokens issued every 12 hours is equal to the number of participants, with a maximum cap of 86400, halved every two years(Per 1461).<br> When the countdown ends, if no one is in the GM and GN sections, all participants share the token rewards equally<br> If the number of GMs and GNs is the same, then all participants share the token reward equally.<br> Otherwise, the group with the greater number of GMs and GNs will split the token reward equally.<br> Users can withdraw the earned tokens to their wallets at any time.<br> As an incentive for the development team, an additional 5% of each token award is issued.<br></div></div>',2)];var Ue=Se(Ve,[["render",function(e,t){return G(),O("div",null,$e)}]]);const Qe={},Je={class:"mt-10 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-4 gap-4 px-3"},Ze=[I("div",{class:"md:col-start-2 md:col-end-6 lg:col-start-2 lg:col-end-4 text-left border-solid border-t border-white border-opacity-20"},[I("div",{class:"flex justify-between items-center py-5 font-thin"},[I("div",null,"© 2021 GMGN.ORG"),I("div",null,"Developed with love by Latin Labs")])],-1)];var et=Se(Qe,[["render",function(e,t){return G(),O("footer",Je,Ze)}]]);const tt={class:"mt-20"},nt=I("p",{class:"text-xl"},"LATEST GM/GN",-1),at={class:"mt-5"},st=[I("div",{class:"h-14 text-xl flex justify-between items-center md:col-start-2 md:col-end-6 lg:col-start-2 lg:col-end-4 border-solid border-b border-white border-opacity-20"},[I("a",{class:"text-blue-600 truncate w-2/5 text-left",href:"#"},"0x6deb9c9aef95b9b566deb9c9aef95b9b56"),I("div",{class:"flex-1"},"25 secs ago"),I("div",{class:"flex-1 text-right"},"10:32:16")],-1)],ot=I("div",{class:"grid grid-cols-1 md:grid-cols-6 lg:grid-cols-4 gap-4 px-3"},[I("div",{class:"py-3 bg-gray-600 md:col-start-2 md:col-end-6 lg:col-start-2 lg:col-end-4"},[I("a",{href:"#"},"View more")])],-1),rt={setup(e){const t=w({list:[1,2,3,4,5,6,7,8,9]});return(e,n)=>(G(),O("div",tt,[nt,I("ul",at,[(G(!0),O(B,null,F(d(t).list,(e=>(G(),O("li",{key:e,class:"grid grid-cols-1 md:grid-cols-6 lg:grid-cols-4 gap-4 px-3"},st)))),128))]),ot]))}};const it={class:"max-w-screen-2xl mx-auto text-center"},ct=I("h1",{class:"text-3xl sm:text-5xl font-medium mt-8 sm:mt-20"},"Good Morning & Good Night",-1),lt=I("p",{class:"text-xl mt-4 sm:mt-10"},"Have a nice day and sweet dreams",-1),dt={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-4 gap-4 px-3 mt-10"},ut={class:"h-14 text-xl tip-btn rounded-xl flex justify-between items-center overflow-hidden md:col-start-2 md:col-end-4 lg:col-start-2 lg:col-end-3"},mt=I("div",{class:"w-1/4"},"#1932",-1),pt={class:"text-left w-1/4"},ht=I("div",{class:"h-full bg-btn rounded-xl w-2/5 leading-0 font-medium flex items-center justify-center"},"GM/GN",-1),yt=I("div",{class:"h-14 text-xl tip-btn rounded-xl flex justify-between items-center overflow-hidden md:col-start-4 md:col-end-6 lg:col-start-3 lg:col-end-4"},[I("div",{class:"w-1/4 text-base text-gray-400"},"Awarded"),I("div",{class:"w-1/4 text-xl font-medium text-left"},"17.35468"),I("div",{class:"h-full bg-white text-black rounded-xl w-2/5 leading-0 font-medium flex items-center justify-center"},"Withdraw")],-1),bt={setup:e=>(Me().setMobile(),(e,t)=>(G(),O("div",null,[L(Fe),I("main",it,[ct,lt,L(Ye),I("div",dt,[I("div",ut,[mt,I("div",pt,[L(d(ie),{class:"text-white text-xl font-medium",time:108e6})]),ht]),yt]),L(rt),L(Ue)]),L(et)])))};function ft(e){return!e||e.length<15?"":e.substr(0,6)+"..."+e.substr(e.length-4)}var gt={install:async(e,t)=>{e.config.globalProperties.$strSub=ft}};window.Buffer=ce.Buffer,le(bt).use(gt).mount("#app"),new de({maxLogNumber:1e3,theme:"dark"});
