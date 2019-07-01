webpackJsonp([0],{2361:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){function n(r,l){try{var o=t[r](l),i=o.value}catch(e){return void a(e)}if(!o.done)return Promise.resolve(i).then(function(e){n("next",e)},function(e){n("throw",e)});e(i)}return n("next")})}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){return{account:e.app.account,walletType:e.app.wallet,tokens:e.tokens.tokens,wallet:e.wallet,currentWallet:e.wallet.current}}Object.defineProperty(t,"__esModule",{value:!0});var c,u=a(11),d=n(u),f=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),m=a(0),p=n(m),h=a(18),g=a(131),b=a(12),_=a(80),k=n(_),v=a(13),y=a(17),x=a(14),E=a(23),w=a(69),T=a(223),N=a(2471),C=(n(N),a(154)),I=a(43),O=n(I),P=a(22),S=a(81),M=a(221),R=a(20),A=a(220),L=a(28),j=n(L),F=a(59),D=n(F),B=a(185),U=a(24),X=(0,B.withTronWeb)(c=function(e){function t(e){l(this,t);var a=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));z.call(a),a.state={tokens:[],buyAmount:0,loading:!1,total:0,totalAll:0,filter:{}};var n=(0,y.trim)((0,T.getQueryParam)(e.location,"search"));return n.length>0&&(a.state.filter.name=""+n),a}return i(t,e),f(t,[{key:"componentDidMount",value:function(){this.loadPage()}},{key:"componentDidUpdate",value:function(e,t){this.props.location!==e.location&&this.setSearch(),this.state.filter!==t.filter&&(console.log("SEARCH CHANGED!"),this.loadPage())}},{key:"render",value:function(){var e=this,t=this.state,a=t.tokens,n=t.alert,r=t.loading,l=t.total,o=t.totalAll,i=this.props,s=(i.match,i.intl),c=this.customizedColumn(),u=s.formatMessage({id:"part_total"})+" "+l+"/"+o+" "+s.formatMessage({id:"part_pass"});return p.default.createElement("main",{className:"container header-overlap token_black"},n,r&&p.default.createElement("div",{className:"loading-style"},p.default.createElement(R.TronLoader,null)),p.default.createElement("div",{className:"row"},p.default.createElement("div",{className:"col-md-12 table_pos"},l?p.default.createElement("div",{className:"table_pos_info d-none d-md-block",style:{left:"auto"}},u," ",p.default.createElement("span",null,p.default.createElement(w.QuestionMark,{placement:"top",text:"newly_issued_token_by_tronscan",className:"token-list-info"}))," \xa0\xa0  ",p.default.createElement(U.Link,{to:"/exchange/trc10"},(0,v.t)("Trade_on_TRXMarket"),">")):"",p.default.createElement(O.default,{bordered:!0,loading:r,column:c,data:a,total:l,rowClassName:"table-row",onPageChange:function(t,a){e.loadPage(t,a)}}))))}}]),t}(m.Component))||c,z=function(){var e=this;this.loadPage=function(){var t=r(d.default.mark(function t(){var a,n,r,l,o,i,s,c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;return d.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.state.filter,n=e.props.intl,e.setState({loading:!0}),r=void 0,l=void 0,o=void 0,i=void 0,!a.name){t.next=15;break}return t.next=10,j.default.get(P.API_URL+"/api/token?sort=rank&limit="+u+"&start="+(c-1)*u+"&name="+a.name);case 10:l=t.sent,o=l.data.data.length,i=l.data.totalAll,t.next=20;break;case 15:return t.next=17,j.default.get(P.API_URL+"/api/token?sort=rank&limit="+u+"&start="+(c-1)*u+"&totalAll=1&showAll=2");case 17:l=t.sent,o=l.data.total,i=l.data.totalAll;case 20:return s=l.data.data,0===s.length&&C.toastr.warning(n.formatMessage({id:"warning"}),n.formatMessage({id:"record_not_found"})),e.setState({loading:!1,tokens:s,total:o,totalAll:i}),t.abrupt("return",o);case 24:case"end":return t.stop()}},t,e)}));return function(){return t.apply(this,arguments)}}(),this.setSearch=function(){var t=(0,y.trim)((0,T.getQueryParam)(e.props.location,"search"));t.length>0?e.setState({filter:{name:""+t}}):e.setState({filter:{}})},this.onChange=function(t,a){e.loadPage(t,a)},this.searchName=function(t){t.length>0?e.setState({filter:{name:"%25"+t+"%25"}}):"#/tokens/list"!==window.location.hash?window.location.hash="#/tokens/list":e.setState({filter:{}})},this.onBuyInputChange=function(t,a,n){var r=e.props.intl;t>n&&(t=n),t=t.replace(/^0|[^\d*]/g,""),e.setState({buyAmount:t}),e.buyAmount.value=t;var l=t*a;e.priceTRX.innerHTML=r.formatNumber(l,{maximumFractionDigits:6})},this.preBuyTokens=function(t){var a=(e.state.buyAmount,e.props);a.currentWallet;if(!a.wallet.isOpen)return void e.setState({alert:p.default.createElement(k.default,{info:!0,showConfirm:!1},p.default.createElement("div",{className:"token-sweet-alert"},p.default.createElement("a",{className:"close",onClick:function(){e.setState({alert:null})}},p.default.createElement("i",{className:"fa fa-times","aria-hidden":"true"})),p.default.createElement("span",null,(0,v.tu)("login_first")),p.default.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){e.setState({alert:null})}},(0,v.tu)("OK"))))});e.setState({alert:p.default.createElement(k.default,{showConfirm:!1},p.default.createElement("div",{className:"mt-5 token-sweet-alert",style:{textAlign:"left"}},p.default.createElement("a",{style:{float:"right",marginTop:"-45px"},onClick:function(){e.setState({alert:null})}},p.default.createElement("i",{className:"fa fa-times","aria-hidden":"true"})),p.default.createElement("h5",{style:{color:"black"}},(0,v.tu)("buy_token_info")),0===t.remaining&&p.default.createElement("span",null," ",(0,v.tu)("no_token_to_buy")),p.default.createElement("div",{className:"input-group mt-5"},p.default.createElement("input",{type:"number",ref:function(t){return e.buyAmount=t},className:"form-control",max:t.remaining,min:1,onKeyUp:function(e){e.target.value=e.target.value.replace(/^0|[^\d*]/g,"")},onChange:function(a){e.onBuyInputChange(a.target.value,t.trxNum/t.num*Math.pow(10,t.precision)/P.ONE_TRX,t.remaining)}})),p.default.createElement("div",{className:"text-center mt-3 text-muted"},p.default.createElement("b",null,"= ",p.default.createElement("span",{ref:function(t){return e.priceTRX=t}},"0")," TRX")),p.default.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){e.buyTokens(t)}},(0,v.tu)("participate"))))})},this.buyTokens=function(t){var a=t.trxNum/t.num*Math.pow(10,t.precision),n=e.state.buyAmount;if(!(n<=0)){var r=e.props,l=r.currentWallet,o=(r.wallet,n*(a/P.ONE_TRX));l.balance/P.ONE_TRX<o?e.setState({alert:p.default.createElement(k.default,{warning:!0,showConfirm:!1,style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}},p.default.createElement("div",{className:"mt-5 token-sweet-alert"},p.default.createElement("a",{style:{float:"right",marginTop:"-155px"},onClick:function(){e.setState({alert:null})}},p.default.createElement("i",{className:"fa fa-times",ariaHidden:"true"})),p.default.createElement("span",null,(0,v.tu)("not_enough_trx_message")),p.default.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){e.setState({alert:null})}},(0,v.tu)("confirm"))))}):e.setState({alert:p.default.createElement(k.default,{warning:!0,showConfirm:!1,style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}},p.default.createElement("div",{className:"mt-5 token-sweet-alert"},p.default.createElement("a",{style:{float:"right",marginTop:"-155px"},onClick:function(){e.setState({alert:null})}},p.default.createElement("i",{className:"fa fa-times",ariaHidden:"true"})),p.default.createElement("p",{className:"ml-auto buy_confirm_message"},(0,v.tu)("buy_confirm_message_1")),p.default.createElement("span",null,n," ",t.name," ",(0,v.t)("for")," ",parseFloat((n*(a/P.ONE_TRX)).toFixed(6))," TRX?"),p.default.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){e.confirmTransaction(t)}},(0,v.tu)("confirm"))))})}},this.submit=function(){var t=r(d.default.mark(function t(a){var n,r,l,o,i,s,c,u,f,m,p,h,g,b,_;return d.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=a.trxNum/a.num*Math.pow(10,a.precision),r=e.props,l=r.account,o=r.currentWallet,i=e.state.buyAmount,s=void 0,!D.default.get("islogin")&&"ACCOUNT_LEDGER"!==e.props.walletType.type&&"ACCOUNT_TRONLINK"!==e.props.walletType.type){t.next=33;break}if(c=e.props.tronWeb(),u=e.props.account.tronWeb,t.prev=7,"ACCOUNT_LEDGER"!==e.props.walletType.type){t.next=17;break}return t.next=11,c.transactionBuilder.purchaseToken(a.ownerAddress,a.id+"",parseInt((i*n).toFixed(0)),e.props.walletType.address).catch(function(e){return!1});case 11:return f=t.sent,t.next=14,(0,A.transactionResultManager)(f,c);case 14:m=t.sent,p=m.result,s=p;case 17:if("ACCOUNT_TRONLINK"!==e.props.walletType.type){t.next=26;break}return t.next=20,u.transactionBuilder.purchaseToken(a.ownerAddress,a.id+"",parseInt((i*n).toFixed(0)),u.defaultAddress.hex).catch(function(e){return!1});case 20:return h=t.sent,t.next=23,(0,A.transactionResultManager)(h,u);case 23:g=t.sent,b=g.result,s=b;case 26:t.next=31;break;case 28:t.prev=28,t.t0=t.catch(7),console.log(t.t0);case 31:t.next=37;break;case 33:return t.next=35,x.Client.participateAsset(o.address,a.ownerAddress,a.id+"",parseInt((i*n).toFixed(0)))(l.key);case 35:_=t.sent,s=_.success;case 37:if(!s){t.next=42;break}return e.setState({activeToken:null,confirmedParticipate:!0,participateSuccess:s,buyAmount:0}),t.abrupt("return",!0);case 42:return t.abrupt("return",!1);case 43:case"end":return t.stop()}},t,e,[[7,28]])}));return function(e){return t.apply(this,arguments)}}(),this.confirmTransaction=function(){var t=r(d.default.mark(function t(a){var n,r,l,o;return d.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.props,r=n.account,l=n.intl,o=e.state.buyAmount,e.setState({alert:p.default.createElement(k.default,{showConfirm:!1,showCancel:!1,cancelBtnBsStyle:"default",title:l.formatMessage({id:"transferring"}),style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}})}),t.next=5,e.submit(a);case 5:if(!t.sent){t.next=9;break}e.setState({alert:p.default.createElement(k.default,{success:!0,showConfirm:!1,style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}},p.default.createElement("div",{className:"mt-5 token-sweet-alert"},p.default.createElement("a",{style:{float:"right",marginTop:"-155px"},onClick:function(){e.setState({alert:null})}},p.default.createElement("i",{className:"fa fa-times",ariaHidden:"true"})),p.default.createElement("h5",{style:{color:"black"}},(0,v.tu)("transaction")," ",(0,v.tu)("confirm")),p.default.createElement("span",null,(0,v.tu)("success_receive")," ",a.name," ",(0,v.tu)("tokens")),p.default.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){e.setState({alert:null})}},(0,v.tu)("OK"))))}),t.next=10;break;case 9:e.setState({alert:p.default.createElement(k.default,{danger:!0,title:"Error",onConfirm:function(){return e.setState({alert:null})}},(0,v.tu)("fail_transaction"))});case 10:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.customizedColumn=function(){var t=e.props.intl;return[{title:"#",dataIndex:"index",key:"index",align:"center",className:"ant_table _text_nowrap"},{title:(0,y.upperFirst)(t.formatMessage({id:"token"})),dataIndex:"name",key:"name",width:"50%",render:function(e,t,n){return p.default.createElement("div",{className:"table-imgtext"},t.imgUrl?p.default.createElement("div",{style:{width:"42px",height:"42px",marginRight:"18px"}},1002e3==t.id?p.default.createElement("div",{className:"token-img-top"},p.default.createElement("img",{style:{width:"42px",height:"42px"},src:t.imgUrl}),p.default.createElement("i",null)):p.default.createElement("img",{style:{width:"42px",height:"42px"},src:t.imgUrl})):p.default.createElement("div",{style:{width:"42px",height:"42px",marginRight:"18px"}},p.default.createElement("img",{style:{width:"42px",height:"42px"},src:a(222)})),p.default.createElement("div",null,p.default.createElement("h5",null,p.default.createElement(E.TokenLink,{name:t.name,id:t.id,namePlus:t.name+" ("+t.abbr+")",address:t.ownerAddress})),p.default.createElement("p",{style:{wordBreak:"break-all"}},t.description)))}},{title:"ID",render:function(e,t,a){return p.default.createElement("div",null,t.id)},align:"center",className:"ant_table d-none d-md-table-cell _text_nowrap"},{title:t.formatMessage({id:"fund_raised"}),render:function(e,t,a){return p.default.createElement("div",null,p.default.createElement(b.FormattedNumber,{value:t.participated/P.ONE_TRX,maximumFractionDigits:1})," TRX")},align:"center",className:"ant_table d-none d-md-table-cell _text_nowrap"},{title:t.formatMessage({id:"reputation"}),dataIndex:"reputation",key:"reputation",align:"center",className:"ant_table",render:function(e,a,n){var r=(0,y.toLower)(e);return p.default.createElement("div",null,r&&t.formatMessage({id:r}))}},{title:t.formatMessage({id:"issue_progress"}),dataIndex:"issuedPercentage",key:"issuedPercentage",render:function(e,t,a){return null===e&&(e=0),p.default.createElement("div",null,p.default.createElement(b.FormattedNumber,{value:e,maximumFractionDigits:1}),"%")},align:"center",className:"ant_table _text_nowrap"},{title:t.formatMessage({id:"created_token_time"}),dataIndex:"dateCreated",key:"dateCreated",render:function(e,t,a){return p.default.createElement(b.FormattedDate,{value:e})},align:"center",className:"ant_table d-none d-sm-table-cell"},{title:t.formatMessage({id:"participate"}),align:"center",render:function(t,a,n){return a.isBlack?p.default.createElement("button",{className:"btn btn-secondary btn-sm",disabled:!0},(0,v.tu)("participate")):a.endTime<new Date||100===a.issuedPercentage?p.default.createElement("span",{style:{fontWeight:"normal"}},(0,v.tu)("finish")):a.startTime>new Date?p.default.createElement("span",{style:{fontWeight:"normal"}},(0,v.tu)("not_started")):p.default.createElement("button",{className:"btn btn-default btn-block btn-sm",onClick:function(){return e.preBuyTokens(a)}},(0,v.tu)("participate"))},className:"ant_table"}]}},W={loadTokens:g.loadTokens,login:S.login,reloadWallet:M.reloadWallet};t.default=(0,h.connect)(s,W)((0,b.injectIntl)(X))},2362:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){function n(r,l){try{var o=t[r](l),i=o.value}catch(e){return void a(e)}if(!o.done)return Promise.resolve(i).then(function(e){n("next",e)},function(e){n("throw",e)});e(i)}return n("next")})}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){return{account:e.app.account,tokens:e.tokens.tokens,wallet:e.wallet,currentWallet:e.wallet.current}}Object.defineProperty(t,"__esModule",{value:!0});var c=a(11),u=n(c),d=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),f=a(0),m=n(f),p=a(18),h=a(131),g=a(12),b=a(80),_=(n(b),a(13)),k=a(17),v=(a(14),a(23)),y=a(223),x=a(2471),E=(n(x),a(154),a(43)),w=n(E),T=a(22),N=a(81),C=a(221),I=a(20),O=a(24),P=a(28),S=n(P),M=function(e){function t(e){l(this,t);var a=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));R.call(a),a.state={tokens:[],buyAmount:0,loading:!1,total:0,filter:{},page:1,contractAddress:"TB2SqC48afC9FX36bPQQHatoKo5m79JXKL"};var n=(0,k.trim)((0,y.getQueryParam)(e.location,"search"));return n.length>0&&(a.state.filter.name="%25"+n+"%25"),a}return i(t,e),d(t,[{key:"componentDidMount",value:function(){var e=this;this.loadPage(),setTimeout(function(){e.addIEOClass()},1e3)}},{key:"componentDidUpdate",value:function(e,t){}},{key:"render",value:function(){var e=this,t=this.state,a=t.tokens,n=(t.alert,t.loading),r=t.total,l=t.contractAddress,o=this.props,i=(o.match,o.intl),s=this.customizedColumn(),c=i.formatMessage({id:"part_total"})+" "+r+" "+i.formatMessage({id:"part_pass"});return m.default.createElement("main",{className:"container header-overlap token_black trc20-ad-bg"},n&&m.default.createElement("div",{className:"loading-style"},m.default.createElement(I.TronLoader,null)),m.default.createElement("div",{className:"row"},m.default.createElement("div",{className:"col-md-12 table_pos"},r?m.default.createElement("div",{className:"table_pos_info d-none d-md-block d-flex",style:{left:"auto"}},c," \xa0\xa0",m.default.createElement(O.Link,{to:"/exchange/trc20"},(0,_.t)("Trade_on_TRXMarket"),">")):"",m.default.createElement("a",{className:"apply-trc20",href:"https://goo.gl/forms/PiyLiDeaXv3uesSE3",target:"_blank",style:{color:"#C23631"}},m.default.createElement("button",{className:"btn btn-danger"},(0,_.tu)("application_entry"))),m.default.createElement(w.default,{bordered:!0,loading:n,column:s,data:a,total:r,contractAddress:l,onPageChange:function(t,a){e.loadPage(t,a)}}))))}}]),t}(f.Component),R=function(){var e=this;this.loadPage=function(){var t=r(u.default.mark(function t(){var a,n,r,l,o,i,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;return u.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.state.filter,n=e.props.intl,e.setState({loading:!0}),r=void 0,l=void 0,o=void 0,!a.name){t.next=13;break}return t.next=9,S.default.get(T.API_URL+"/api/token_trc20?sort=issue_time&limit="+c+"&start="+(s-1)*c+"&name="+a.name);case 9:l=t.sent,o=l.data.trc20_tokens.length,t.next=17;break;case 13:return t.next=15,S.default.get(T.API_URL+"/api/token_trc20?sort=issue_time&limit="+c+"&start="+(s-1)*c);case 15:l=t.sent,o=l.data.total;case 17:return i=l.data.trc20_tokens,i.map(function(e,t){e.index=t+1+(s-1)*c}),e.setState({loading:!1,tokens:i,total:o,page:s}),e.addIEOClass(),t.abrupt("return",o);case 22:case"end":return t.stop()}},t,e)}));return function(){return t.apply(this,arguments)}}(),this.setSearch=function(){var t=(0,k.trim)((0,y.getQueryParam)(e.props.location,"search"));t.length>0?e.setState({filter:{name:"%25"+t+"%25"}}):e.setState({filter:{}})},this.addIEOClass=function(){var t=e.state.page,a=document.querySelector(".ant-table-tbody").firstElementChild;1==t?a.classList.add("trc20-star-ad"):a.classList.remove("trc20-star-ad"),document.querySelector(".trc20-star-ad")&&document.querySelector(".trc20-star-ad").addEventListener("click",function(){window.open("http://www.tronace.com")})},this.onChange=function(t,a){e.loadPage(t,a)},this.customizedColumn=function(){var t=e.props.intl,n=e.state.contractAddress;return[{title:"#",dataIndex:"index",key:"index",width:"48px",align:"center",className:"ant_table _text_nowrap",render:function(e,t,a){return m.default.createElement("span",null,t.contract_address==n?m.default.createElement("div",null,m.default.createElement("span",{className:"starbeat"},m.default.createElement("i",{className:"fas fa-star"})," "),m.default.createElement("span",{className:"star-tip"})):m.default.createElement("span",null,e-1))}},{title:(0,k.upperFirst)(t.formatMessage({id:"token"})),dataIndex:"name",key:"name",width:"50%",render:function(e,t,n){return m.default.createElement("div",{className:"table-imgtext"},t.icon_url?m.default.createElement("div",{style:{width:"42px",height:"42px",marginRight:"18px"}},m.default.createElement("img",{style:{width:"42px",height:"42px"},src:t.icon_url})):m.default.createElement("div",{style:{width:"42px",height:"42px",marginRight:"18px"}},m.default.createElement("img",{style:{width:"42px",height:"42px"},src:a(222)})),m.default.createElement("div",null,m.default.createElement("h5",null,m.default.createElement(v.TokenTRC20Link,{name:t.name,namePlus:t.name+" ("+t.symbol+")",address:t.contract_address})),m.default.createElement("p",null,t.token_desc)))}},{title:t.formatMessage({id:"market_capitalization"}),align:"center",className:"ant_table d-none d-md-table-cell _text_nowrap",render:function(e,t,a){return m.default.createElement("div",null,t.price&&t.total_supply_with_decimals?m.default.createElement("div",null,m.default.createElement(g.FormattedNumber,{value:t.total_supply_with_decimals*t.price,maximumFractionDigits:1})," TRX"):m.default.createElement("span",{style:{color:"#666666"}},"-"))}},{title:t.formatMessage({id:"pice_per_onetrx"}),dataIndex:"pice_per_onetrx",key:"pice_per_onetrx",align:"center",className:"ant_table",render:function(e,t,a){(0,k.toLower)(e);return m.default.createElement("div",null,t.price?m.default.createElement("div",null,m.default.createElement(g.FormattedNumber,{value:t.price,maximumFractionDigits:1})," TRX"):m.default.createElement("span",{style:{color:"#666666"}},"-"))}},{title:t.formatMessage({id:"total_tokens"}),dataIndex:"total_supply_with_decimals",key:"total_supply",render:function(e,t,a){return null===e&&(e=0),m.default.createElement("div",null,m.default.createElement(g.FormattedNumber,{value:t.total_supply_with_decimals/Math.pow(10,t.decimals),maximumFractionDigits:1}))},align:"center",className:"ant_table _text_nowrap"},{title:t.formatMessage({id:"contract_address"}),dataIndex:"contract_address",key:"contract_address",render:function(e,t,a){return m.default.createElement(v.AddressLink,{address:t.contract_address,isContract:!0})},align:"center",className:"ant_table"}]}},A={loadTokens:h.loadTokens,login:N.login,reloadWallet:C.reloadWallet};t.default=(0,p.connect)(s,A)((0,g.injectIntl)(M))},2363:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){function n(r,l){try{var o=t[r](l),i=o.value}catch(e){return void a(e)}if(!o.done)return Promise.resolve(i).then(function(e){n("next",e)},function(e){n("throw",e)});e(i)}return n("next")})}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c,u=a(75),d=n(u),f=a(190),m=n(f),p=a(11),h=n(p),g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},b=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();a(85),a(459);var _=a(0),k=n(_),v=a(12),y=a(13),x=(a(14),a(23)),E=a(69),w=a(22),T=a(17),N=a(20),C=a(28),I=n(C),O=a(58),P=a(185),S=a(24),M=(0,P.withTronWeb)(c=function(e){function t(e){var n=this;o(this,t);var s=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return s.loadPage=function(){var e=l(h.default.mark(function e(){var t,a,r,l,o,i,c,u,d,f,m=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,p=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;return h.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s.setState({loading:!0}),t=s.state,a=t.filter,r=t.countTop,e.next=4,I.default.get(w.API_URL+"/api/tokens/overview",{params:g({start:(m-1)*p,limit:p},a)});case 4:return l=e.sent,o=l.data,i=o.tokens,c=o.total,u=o.totalAll,d=0,f=0,i.map(function(e,t){e.isTop?e.c_index=t+1:(e.index=1==m?d+1+(m-1)*p:d+1+(m-1)*p-r,d++),e.marketcap=e.marketcap||0,e.nrOfTokenHolders=e.nrOfTokenHolders||"-",e.volume24hInTrx=e.volume24hInTrx||0,e.priceInTrx=e.priceInTrx||"-",void 0!=e.gain?(e.gain=1e4*e.gain,e.gain<0&&(e.color="col-red",e.gain=parseInt(e.gain)/100+"%"),e.gain>0&&(e.color="col-green",e.gain="+"+parseInt(e.gain)/100+"%"),0==e.gain&&(e.color="col-green",e.gain=parseInt(e.gain)/100+"%")):e.gain="-"}),s.setState({loading:!1,tokens:i,pagination:g({},s.state.pagination,{total:c}),total:c,totalAll:u}),e.abrupt("return",c);case 14:case"end":return e.stop()}},e,n)}));return function(){return e.apply(this,arguments)}}(),s.onChange=function(e){s.setState({filter:g({},s.state.filter,{order:"desc",sort:"marketcap",filter:e.target.value,order_current:"descend"})},function(){return s.loadPage()})},s.handleTableChange=function(e,t,a){var n,l=g({},s.state.pagination);l.current=e.current,l.pageSize=e.pageSize;var o={descend:"desc",ascend:"asc"},i=(n={nrOfTokenHolders:"holderCount",gain:"gain",priceInTrx:"priceInTrx"},r(n,"gain","gain"),r(n,"volume24hInTrx","volume24hInTrx"),r(n,"marketcap","marketcap"),n);s.setState({pagination:l,filter:g({},s.state.filter,{sort:i[a.columnKey]||"marketcap",order:o[a.order]||"desc",order_current:a.order})},function(){return s.loadPage(l.current,l.pageSize)})},s.customizedColumn=function(){var e=s.state.filter,t=s.props.intl;return[{title:"#",dataIndex:"index",key:"index",width:"48px",align:"center",className:"ant_table _text_nowrap",render:function(e,t,a){return k.default.createElement("span",null,t.isTop?k.default.createElement("div",null,k.default.createElement("span",{className:"starbeat"},k.default.createElement("i",{className:"fas fa-star"})," "),k.default.createElement("span",{className:"star-tip"})):k.default.createElement("span",null,e))}},{title:(0,T.upperFirst)(t.formatMessage({id:"token"})),dataIndex:"name",key:"name",width:"50%",render:function(e,t,n){return k.default.createElement("div",{className:"table-imgtext"},t.imgUrl?k.default.createElement("div",{style:{width:"42px",height:"42px",marginRight:"18px"}},"USDT"==t.abbr||"BTT"==t.abbr?k.default.createElement("div",{className:"token-img-top"},k.default.createElement("img",{style:{width:"42px",height:"42px"},src:t.imgUrl}),k.default.createElement("i",null)):k.default.createElement("img",{style:{width:"42px",height:"42px"},src:t.imgUrl})):k.default.createElement("div",{style:{width:"42px",height:"42px",marginRight:"18px"}},k.default.createElement("img",{style:{width:"42px",height:"42px"},src:a(222)})),k.default.createElement("div",null,k.default.createElement("h5",null,t.isTop&&"TNYNLRkqq956bQc2buvoLbaLgh25RkJMiN"==t.contractAddress?k.default.createElement("a",{href:"javascript:;"},t.name+" ("+t.abbr+")"):k.default.createElement("div",null,"trc10"==t.tokenType&&k.default.createElement(x.TokenLink,{name:t.name,id:t.tokenId,namePlus:t.name+" ("+t.abbr+")"}),"trc20"==t.tokenType&&k.default.createElement(x.TokenTRC20Link,{name:t.name,namePlus:t.name+" ("+t.abbr+")",address:t.contractAddress}))),k.default.createElement("p",{style:{wordBreak:"break-all"}},t.description)))}},{title:t.formatMessage({id:"price"})+" (TRX)",dataIndex:"priceInTrx",key:"priceInTrx",sorter:!0,sortOrder:"priceInTrx"===e.sort&&e.order_current,align:"center",className:"ant_table d-none d-md-table-cell _text_nowrap"},{title:t.formatMessage({id:"gain"}),sorter:!0,sortOrder:"gain"===e.sort&&e.order_current,dataIndex:"gain",key:"gain",render:function(e,t,a){return k.default.createElement("div",{className:t.color},t.gain)},align:"center",className:"ant_table d-none d-md-table-cell _text_nowrap"},{title:t.formatMessage({id:"volume_24_trx"}),dataIndex:"volume24hInTrx",key:"volume24hInTrx",align:"center",className:"ant_table",sorter:!0,sortOrder:"volume24hInTrx"===e.sort&&e.order_current,render:function(e,t,a){return e>0?k.default.createElement(v.FormattedNumber,{value:e,maximumFractionDigits:2}):"-"}},{title:t.formatMessage({id:"market_capitalization_trx"}),dataIndex:"marketcap",key:"marketcap",sorter:!0,sortOrder:"marketcap"===e.sort&&e.order_current,render:function(e,t,a){return e>0?k.default.createElement(v.FormattedNumber,{value:e}):"-"},align:"center",className:"ant_table _text_nowrap"},{title:t.formatMessage({id:"token_holders"}),dataIndex:"nrOfTokenHolders",key:"nrOfTokenHolders",sorter:!0,sortOrder:"holderCount"===e.sort&&e.order_current,render:function(e,t,a){return e>0?k.default.createElement(v.FormattedNumber,{value:e}):"-"},align:"center",className:"ant_table d-none d-sm-table-cell"},{title:t.formatMessage({id:"trc20_cur_order_header_action"}),dataIndex:"abbr",key:"abbr",width:"10%",render:function(e,t,a){return k.default.createElement("div",null,"trc10"==t.tokenType&&k.default.createElement(S.Link,{to:"/token/"+encodeURI(t.tokenId),className:"token-details btn"},(0,y.tu)("details")),"trc20"==t.tokenType&&k.default.createElement(S.Link,{to:"/token20/"+encodeURI(t.contractAddress),className:"token-details btn"},(0,y.tu)("details")),t.extra?k.default.createElement("a",{href:t.extra.url,className:"token-active-details btn mt-2"},(0,y.tu)(t.extra.desc)):t.pairId?k.default.createElement(S.Link,{to:"/exchange/trc20?id="+t.pairId,className:"token-details btn mt-2"}," ",(0,y.tu)("token_trade")):k.default.createElement("div",null,k.default.createElement("a",{href:"javascript:;",className:"token-disabled-exchange btn mt-2",id:"trc20"==t.tokenType?"exchange_"+t.contractAddress:"exchange_"+t.tokenId,onMouseOver:function(e,a){return s.setState(r({},t.abbr+t.tokenId,!0))},onMouseOut:function(){return s.setState(r({},t.abbr+t.tokenId,!1))}},(0,y.tu)("token_trade")),k.default.createElement(O.Tooltip,{placement:"top",target:"trc20"==t.tokenType?"exchange_"+t.contractAddress:"exchange_"+t.tokenId,isOpen:s.state[t.abbr+t.tokenId]}," ",k.default.createElement("span",{className:"text-capitalize"},(0,y.tu)("token_does_not_support_exchange")))))},align:"center",className:"ant_table d-sm-table-cell token-list-action"}]},s.state={tokens:[],loading:!1,total:0,totalAll:0,countTop:2,filter:{order:"desc",filter:"all",sort:"marketcap",order_current:"descend"},pagination:{showQuickJumper:!0,position:"both",showSizeChanger:!0,defaultPageSize:20,total:0}},s}return s(t,e),b(t,[{key:"componentDidMount",value:function(){this.loadPage()}},{key:"render",value:function(){var e=this.state,t=e.tokens,a=e.alert,n=e.loading,r=e.total,l=e.totalAll,o=e.filter,i=this.props,s=(i.match,i.intl),c=this.customizedColumn(),u=s.formatMessage({id:"part_total"})+" "+r+"/"+l+" "+s.formatMessage({id:"part_pass"}),f="https://trx.market/launchBase?utm_source=TS3";return"zh"==s.locale&&(f="https://trx.market/zh/launchBase?utm_source=TS3"),k.default.createElement("main",{className:"container header-overlap token_black"},a,n&&k.default.createElement("div",{className:"loading-style"},k.default.createElement(N.TronLoader,null)),k.default.createElement("div",{className:"row"},k.default.createElement("div",{className:"col-md-12 table_pos trc20-ad-bg pt-5 pt-md-0"},r?k.default.createElement("div",{className:"table_pos_info d-none d-md-block",style:{left:"auto"}},k.default.createElement("div",null,u," ",k.default.createElement("span",null,k.default.createElement(E.QuestionMark,{placement:"top",text:"newly_issued_token_by_tronscan",className:"token-list-info"}))," \xa0\xa0",k.default.createElement(S.Link,{to:"/exchange/trc10"},(0,y.t)("Trade_on_TRXMarket"),">"))):"",k.default.createElement("div",{className:"d-md-flex apply-trc20 apply-all align-items-center"},k.default.createElement("div",{className:"d-flex align-items-center mb-2 mb-md-0"},k.default.createElement(m.default.Group,{size:"Small",value:o.filter,onChange:this.onChange},k.default.createElement(m.default.Button,{value:"all"},(0,y.tu)("all")),k.default.createElement(m.default.Button,{value:"trc10"},"TRC10"),k.default.createElement(m.default.Button,{value:"trc20"},"TRC20")))),k.default.createElement(d.default,{columns:c,rowKey:function(e,t){return t},dataSource:t,loading:n,onChange:this.handleTableChange,pagination:this.state.pagination,bordered:!0,rowClassName:function(e,t){if(e.isTop)return"trc20-star-ad"},onRow:function(e){return{onClick:function(t){e.isTop&&"TNYNLRkqq956bQc2buvoLbaLgh25RkJMiN"==e.contractAddress&&window.open(f)}}}}))))}}]),t}(_.Component))||c;t.default=(0,v.injectIntl)(M)},2471:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(84),s=n(i),c=a(83),u=n(c),d=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();a(132),a(82);var f=a(0),m=n(f),p=a(13),h=a(229),g=n(h),b=function(e){function t(e){r(this,t);var a=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.onInputChange=function(e){a.setState({searchText:e.target.value})},a.onReset=function(){a.setState({searchText:""},function(){a.onSearch()})},a.onSearch=function(){var e=a.state.searchText;a.props.search(e)},a.onPressEnter=function(){(0,g.default)("#dropdownMenuButton").dropdown("toggle"),a.onSearch()},a.state={searchText:""},a}return o(t,e),d(t,[{key:"componentDidMount",value:function(){var e=this;(0,g.default)(".dropdown").on("show.bs.dropdown",function(){setTimeout(function(){e.searchInput&&e.searchInput.focus()},100)})}},{key:"render",value:function(){var e=this;return m.default.createElement("span",{className:"dropdown"},m.default.createElement("span",{id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},m.default.createElement("i",{className:"fa fa-filter ml-2"})),m.default.createElement("div",{className:"custom-filter-dropdown dropdown-menu","aria-labelledby":"dropdownMenuButton"},m.default.createElement(u.default,{ref:function(t){return e.searchInput=t},placeholder:"Search name",type:"text",className:"ant-input",value:this.state.searchText,onChange:this.onInputChange,onPressEnter:this.onPressEnter}),m.default.createElement(s.default,{type:"primary",onClick:this.onSearch},(0,p.tu)("search")),m.default.createElement(s.default,{className:"btn-secondary ml-1",onClick:this.onReset},(0,p.tu)("reset"))))}}]),t}(m.default.Component);t.default=b}});