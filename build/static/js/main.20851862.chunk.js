(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{291:function(e){e.exports={}},358:function(e,t,a){e.exports=a(583)},363:function(e,t,a){},474:function(e,t,a){},578:function(e,t,a){},583:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(80),o=a.n(l),c=(a(363),a(18)),i=a(25),s=a(20),u=a(21),d=a(22),m=a(587),h=a(588),p=a(584),b=a(116),E=a(191),g=a(167),f=a(201),y=a(171),v=a(206),k=function(){return r.a.createElement(b.a,{centered:!0,columns:2},r.a.createElement(b.a.Column,null,r.a.createElement(E.a,{as:"h2",textAlign:"center"},"Login"),r.a.createElement(g.a,null,r.a.createElement(f.a,{size:"large"},r.a.createElement(f.a.Input,{fluid:!0,icon:"user",iconPosition:"left",placeholder:"Email address"}),r.a.createElement(f.a.Input,{fluid:!0,icon:"lock",iconPosition:"left",placeholder:"Password",type:"password"}),r.a.createElement(y.a,{color:"blue",fluid:!0,size:"large",onClick:function(){return console.log("hello world")}},"Login"))),r.a.createElement(v.a,null,"Not registered yet? ",r.a.createElement("a",{href:"#"},"Sign Up"))))},w=a(85),O=a(39),S=a(205),j=a(103),N=a(207),I=a(26),C=(a(291),a(108)),x=a(332),A=a.n(x),P=(a(474),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.graphPath,a=e.onClickNode;return r.a.createElement(C.e,{renderer:"canvas",onClickNode:a,onOverNode:function(e){return console.log("Mouse over node: "+e.data.node.label)},style:{maxWidth:"inherit",height:"70vh"},settings:{clone:!0,animationsTime:5e3,defaultNodeColor:"#3388AA",minArrowSize:5,drawEdgeLabels:!0}},r.a.createElement(C.b,{path:t},r.a.createElement(C.c,null),r.a.createElement(C.a,{default:"curvedArrow"}),r.a.createElement(A.a,{randomize:"locally",barnesHutOptimize:!1,barnesHutTheta:.5,background:!0,easing:"cubicInOut",gravity:1,edgeWeightInfluence:0,alignNodeSiblings:!1,timeout:1e3,outboundAttractionDistribution:!1}),r.a.createElement(C.d,{initialSize:15})))}}]),t}(n.Component)),M=a(333),R=a.n(M),D="http://api.etherscan.io/api?module=account&action=txlist",T="apikey=GRHRXF34HFU56GE75DEMBPIQTNNH3NFMQR",U=("".concat(D,"&address=").concat("0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a","&startblock=0&endblock=99999999&sort=asc&").concat(T),1e18),z=function(e){var t=new Blob([JSON.stringify(e)],{type:"application/json"});return URL.createObjectURL(t)};function F(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e}var G=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).storeEdges=function(e){var t=a.state,n=t.edges,r=t.newQuery;a.setState({data:e});var l=[];for(var o in e){var c=e[o],i={id:c.hash,source:c.from,target:c.to,value:Number(c.value)/U,label:c.value};l.push(i)}var s=Object(w.a)(l.reduce(function(e,t){var a=t.source+"-"+t.target,n=e.get(a)||Object.assign({},t,{value:0,label:0,numTransactions:0});return n.value+=t.value,n.label=(Math.round(1e3*n.value)/1e3).toString(),n.numTransactions+=1,n.id=t.id,e.set(a,n)},new Map).values()),u=r?[]:n,d=[].concat(Object(w.a)(u),Object(w.a)(s));r?a.setState({edges:d},a.storeNodes):a.setState({edges2:d},a.storeNodes)},a.storeNodes=function(){for(var e=a.state,t=e.nodes,n=e.edges,r=e.newQuery,l=[],o=[],c=0;c<n.length;c++)l.push({id:n[c].source,label:n[c].source}),l.push({id:n[c].target,label:n[c].source});for(var i=Object(I.uniqBy)(l,"id"),s=0;s<i.length;s++){var u=Math.random()>.5?"#5DA5DA":"#B2912F";o.push({id:i[s].id,label:i[s].id,color:u})}var d=r?[]:t,m=[].concat(o,Object(w.a)(d));r?a.setState({nodes:m},function(){return a.updateGraph(m,a.state.edges)}):a.setState({nodes2:m},function(){return a.updateGraph(a.state.nodes2,a.state.edges2)})},a.onNodeClick=function(e){a.setState({selectedNode:e.data.node.id})},a.updateGraph=function(e,t){var n={nodes:Object(w.a)(e),edges:Object(w.a)(t)};console.log("update graph"),console.log(n);var r=z(n);a.triggerUpdate(r)},a.triggerUpdate=function(e){console.log(e),a.setState({graphPath:e})},a.onChange=function(e){a.setState({address:e.target.value}),console.log("change")},a.queryEtherAPI=function(e){console.log("query API:"),console.log(e),R.a.get("".concat(D,"&address=").concat(e,"&startblock=0&endblock=99999999&sort=asc&").concat(T),{}).then(function(e){return e.data}).then(function(e){return a.storeEdges(e.result)}).catch(function(e){console.log(e)})},a.onSubmit=function(){var e=a.state.address;a.queryEtherAPI(e),a.setState({newQuery:!0})},a.onExploreNode=function(){a.queryEtherAPI(a.state.selectedNode),a.setState({newQuery:!1})},a.state={address:!1,data:!1,nodes:[],edges:[],graphPath:!1,selectedNode:!1,newQuery:!0,nodes2:[],edges2:[]},a.storeEdges=a.storeEdges.bind(Object(O.a)(Object(O.a)(a))),a.storeNodes=a.storeNodes.bind(Object(O.a)(Object(O.a)(a))),a.updateGraph=a.updateGraph.bind(Object(O.a)(Object(O.a)(a))),a.queryEtherAPI=a.queryEtherAPI.bind(Object(O.a)(Object(O.a)(a))),a.triggerUpdate=a.triggerUpdate.bind(Object(O.a)(Object(O.a)(a))),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.graphPath,l=t.data,o=t.nodes,c=t.edges,i=t.selectedNode;return r.a.createElement(n.Fragment,null,r.a.createElement("br",null),r.a.createElement(f.a,{onSubmit:this.onSubmit},r.a.createElement(S.a,{style:{width:"80%"},icon:r.a.createElement(j.a,{name:"search",link:!0,onClick:this.onSubmit}),placeholder:"Enter Address...",onChange:this.onChange})),r.a.createElement("br",null),r.a.createElement(b.a,{divided:!0,columns:"equal"},r.a.createElement(b.a.Row,{stretched:!0},r.a.createElement(b.a.Column,{width:10},!(!l||!a)&&r.a.createElement(g.a,null,r.a.createElement(P,{nodes:o,edges:c,graphPath:a,onClickNode:function(t){return e.onNodeClick(t)}}))),r.a.createElement(b.a.Column,{width:4},!(!l||!a)&&(l&&a&&i?r.a.createElement("div",{style:{textAlign:"left"}},r.a.createElement("b",null,i),r.a.createElement(N.a,null,r.a.createElement(N.a.Item,null,"Risk Score: ",F(10,90)),r.a.createElement(N.a.Item,null,"Total Value: ",F(0,20)),r.a.createElement(N.a.Item,null,"Degree: ",F(0,50)),r.a.createElement(N.a.Item,null,"Centrality: ",F(10,100)/100),r.a.createElement(N.a.Item,null,"Number of transactions in last month: ",F(0,20)),r.a.createElement(N.a.Item,null,"Number of transactions in last year: ",F(20,100))),r.a.createElement(y.a,{color:"blue",fluid:!0,size:"medium",onClick:function(){return e.onExploreNode()}},"Analyse further")):"No node selected")))),r.a.createElement(v.a,null," Powered by LynxKite. Scam data from Etherscamdb and Etherscan.  "),r.a.createElement("br",null))}}]),t}(n.Component),q=a(118),H=a(334),L=[{key:"a",text:"ICO",value:"ico"},{key:"b",text:"Phishing",value:"phishing"},{key:"c",text:"Darknet",value:"darknet"},{key:"d",text:"Fake Service",value:"fake_service"}],Q=[{key:"a",text:"Bitcoin",value:"bitcoin"},{key:"b",text:"Ethereum",value:"ethereum"},{key:"b",text:"Litecoin",value:"litecoin"},{key:"b",text:"Ripple",value:"ripple"}],B=function(){return r.a.createElement(b.a,{centered:!0,columns:1},r.a.createElement(b.a.Column,null,r.a.createElement(E.a,{as:"h2",textAlign:"center"},"Scam Submission Form"),r.a.createElement(v.a,{color:"blue"},r.a.createElement(E.a,{as:"h3"},"Cooperate with authorities to reclaim your money"),"Help secure the crypto space by reporting malicious actors. CryptoLynx works with exchanges to verify frauds and return the money to the right owners."),r.a.createElement(g.a,null,r.a.createElement(f.a,{size:"large"},r.a.createElement(f.a.Select,{fluid:!0,label:"Select coin / token type",options:Q,placeholder:"Coin Type"}),r.a.createElement(f.a.Group,{widths:"equal"},r.a.createElement(f.a.Input,{inline:!0,width:6,icon:"user",label:"Your address",iconPosition:"left",placeholder:"Your address"}),r.a.createElement(q.a,{src:"/verify_button.png"}),r.a.createElement(y.a,{width:2,size:"medium"},"Verify")),r.a.createElement(f.a.Input,{fluid:!0,label:"Scamer's address",icon:r.a.createElement(j.a,{name:"user",color:"red"}),iconPosition:"left",placeholder:"Scammer's address"}),r.a.createElement(f.a.Group,{widths:"equal"},r.a.createElement(f.a.Select,{fluid:!0,label:"Scam Type",options:L,placeholder:"Scam Type"}),r.a.createElement(H.DateInput,{name:"date",label:"Date of Scam",placeholder:"Date",value:new Date,iconPosition:"left"}),r.a.createElement(f.a.Input,{fluid:!0,label:"Amount Scammed",placeholder:"Amount"})),r.a.createElement(f.a.TextArea,{label:"Additional details",placeholder:"Tell us more details about the scam..."}),r.a.createElement(f.a.Input,{icon:"upload",placeholder:"Upload Supporting Documents",type:"file"}),r.a.createElement(f.a.Input,{fluid:!0,label:"Email",placeholder:"We will verify the email and contact you with the results"}),r.a.createElement(y.a,{color:"blue",fluid:!0,size:"large",onClick:function(){return console.log("hello world")}},"Submit")))))},W=function(e){e.pdfUrl,e.pdfJSON,e.uploadPath,e.afterUpload;return r.a.createElement(h.a,null,r.a.createElement(p.a,{path:"/report/",component:B}),r.a.createElement(p.a,{path:"/console/",component:G}),r.a.createElement(p.a,{path:"/login/",component:k}),r.a.createElement(p.a,{component:B}))},J=a(184),V=a(316),X=a(585),Y=function(){return r.a.createElement(J.a,{inverted:!0,style:{backgroundColor:"#004165"}},r.a.createElement(V.a,null,r.a.createElement(J.a.Item,{as:"a",header:!0},r.a.createElement(q.a,{style:{backgroundColor:"#004165"},size:"small",src:"/crypto2.png"})),r.a.createElement(J.a.Item,{as:"a",name:"report"},r.a.createElement(X.a,{to:"/report/"}," ",r.a.createElement("b",null," Report "))),r.a.createElement(J.a.Item,{as:"a",name:"analyse"},r.a.createElement(X.a,{to:"/console/"}," ",r.a.createElement("b",null," Analyse "))),r.a.createElement(J.a.Menu,{position:"right"},r.a.createElement(J.a.Item,{as:"a",name:"login"},r.a.createElement(X.a,{to:"/login/"}," ",r.a.createElement("b",null," Login ")," ")),r.a.createElement(J.a.Item,{as:"a",name:"register"},r.a.createElement("b",null," Register ")))))},_=(a(578),"".concat("http://api.etherscan.io/api?module=account&action=txlist","&address=").concat("0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a","&startblock=0&endblock=99999999&sort=asc&").concat("apikey=GRHRXF34HFU56GE75DEMBPIQTNNH3NFMQR"),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(n.Fragment,null,r.a.createElement(Y,null)),r.a.createElement(W,null))}}]),t}(n.Component)),K=Object(m.a)(_);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var $=a(586);a(580);o.a.render(r.a.createElement($.a,null,r.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[358,2,1]]]);
//# sourceMappingURL=main.20851862.chunk.js.map