webpackJsonp([30],{2364:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){function n(r,l){try{var c=t[r](l),s=c.value}catch(e){return void a(e)}if(!c.done)return Promise.resolve(s).then(function(e){n("next",e)},function(e){n("throw",e)});e(s)}return n("next")})}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e){return{accounts:e.app.accounts}}Object.defineProperty(t,"__esModule",{value:!0});var u=a(86),i=n(u),d=a(11),m=n(d),f=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();a(157);var p=a(0),g=n(p),b=a(18),E=a(81),h=a(13),v=a(12),N=a(17),_=a(23),y=a(22),w=a(39),k=a(43),x=n(k),T=a(20),F=a(69),C=a(28),A=(n(C),a(14)),O=function(e){function t(){var e=this;l(this,t);var a=c(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return a.loadAccounts=function(){var t=r(m.default.mark(function t(){var n,r,l,c,s,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;return m.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.state.exchangeFlag,a.setState({loading:!0}),e.next=4,A.Client.getAccounts({sort:"-balance",limit:u,start:(o-1)*u});case 4:r=e.sent,l=r.accounts,c=r.total,s=r.rangeTotal,l.map(function(e){e.tagName="",n.map(function(t){Object.keys(t.addressList).map(function(a){1==t.addressList[a].length?t.addressList[a][0]===e.address&&(e.tagName=(0,N.upperFirst)(t.name)+"-"+a):t.addressList[a].length>1&&t.addressList[a].map(function(n,r){n===e.address&&(e.tagName=(0,N.upperFirst)(t.name)+"-"+a+" "+(r+1))})})})}),a.setState({loading:!1,accounts:l,total:c,rangeTotal:s});case 10:case"end":return e.stop()}},t,e)}));return function(){return t.apply(this,arguments)}}(),a.onChange=function(e,t){a.loadAccounts(e,t)},a.onSearchFieldChangeHandler=function(e){a.setState({searchString:e.target.value})},a.customizedColumn=function(){var e=a.props.intl;return[{title:(0,N.upperFirst)(e.formatMessage({id:"address"})),dataIndex:"address",key:"address",align:"left",className:"ant_table",width:"40%",render:function(t,a,n){return 2==a.accountType?g.default.createElement("span",{className:"d-flex"},g.default.createElement(i.default,{placement:"top",title:e.formatMessage({id:"contracts"})},g.default.createElement("span",null,g.default.createElement("i",{className:"far fa-file mr-1"}))),g.default.createElement(_.AddressLink,{address:t,isContract:2==a.toAddressType})):g.default.createElement(_.AddressLink,{address:t})}},{title:"Name Tag",dataIndex:"tagName",key:"tagName",align:"left"},{title:(0,N.upperFirst)(e.formatMessage({id:"supply"})),dataIndex:"balance",key:"supply",align:"left",className:"ant_table",render:function(e,t,a){return g.default.createElement("div",null,g.default.createElement(v.FormattedNumber,{value:parseInt(e)/y.ONE_TRX/y.CIRCULATING_SUPPLY*100,minimumFractionDigits:8,maximumFractionDigits:8})," %")}},{title:(0,N.upperFirst)(e.formatMessage({id:"power"})),dataIndex:"power",key:"power",align:"center",render:function(e,t,a){return g.default.createElement(v.FormattedNumber,{value:parseInt(e)/y.ONE_TRX})}},{title:(0,N.upperFirst)(e.formatMessage({id:"balance"})),dataIndex:"balance",key:"balance",align:"right",className:"ant_table",render:function(e,t,a){return g.default.createElement(w.TRXPrice,{amount:parseInt(e)/y.ONE_TRX})}}]},a.state={loading:!0,searchString:"",accounts:[],total:0,exchangeFlag:[{name:"binance",addressList:{Cold:["TMuA6YqfCeX8EhbfYEg5y7S4DqzSJireY9","TWd4WrZ9wn84f5x1hZhL4DHvk738ns5jwb"],Hot:["TAUN6FwrnwwmaEqYcckffC7wYmbaS6cBiX"]}}]},a}return s(t,e),f(t,[{key:"componentDidMount",value:function(){this.loadAccounts()}},{key:"componentDidUpdate",value:function(){}},{key:"filteredAccounts",value:function(){var e=this.props.accounts,t=this.state.searchString;return t=t.toUpperCase(),t.length>0&&(e=(0,N.filter)(e,function(e){return-1!==e.address.toUpperCase().indexOf(t)})),e}},{key:"renderAccounts",value:function(){var e=this.state.accounts;if(0!==e.length)return g.default.createElement(p.Fragment,null,g.default.createElement("div",{className:"table-responsive"},g.default.createElement("table",{className:"table table-striped m-0"},g.default.createElement("thead",{className:"thead-dark"},g.default.createElement("tr",null,g.default.createElement("th",null,(0,h.tu)("address")),g.default.createElement("th",{className:"d-md-table-cell"},(0,h.tu)("supply")),g.default.createElement("th",{className:"d-md-table-cell"},(0,h.tu)("power")),g.default.createElement("th",null,(0,h.tu)("balance")))),g.default.createElement("tbody",null,e.map(function(e,t){return g.default.createElement("tr",{key:e.address},g.default.createElement("th",null,g.default.createElement(_.AddressLink,{address:e.address})),g.default.createElement("td",{className:"d-md-table-cell text-nowrap"},g.default.createElement(v.FormattedNumber,{value:e.balance/y.ONE_TRX/y.CIRCULATING_SUPPLY*100,minimumFractionDigits:8,maximumFractionDigits:8})," %"),g.default.createElement("td",{className:"text-nowrap d-md-table-cell"},g.default.createElement(v.FormattedNumber,{value:e.power/y.ONE_TRX})),g.default.createElement("td",{className:"text-nowrap"},g.default.createElement(w.TRXPrice,{amount:e.balance/y.ONE_TRX})))})))))}},{key:"render",value:function(){var e=this,t=this.props,a=(t.match,t.intl),n=this.state,r=n.total,l=n.loading,c=n.rangeTotal,s=void 0===c?0:c,o=n.accounts,u=this.customizedColumn(),i=(a.formatMessage({id:"view_total"}),a.formatMessage({id:"account_unit"}),a.formatMessage({id:"table_info_big"}),a.formatMessage({id:"table_info_account_tip1"})+" "+s+" "+a.formatMessage({id:"table_info_account_tip2"}));return g.default.createElement("main",{className:"container header-overlap pb-3 token_black"},g.default.createElement("div",{className:"row"},g.default.createElement("div",{className:"col-md-12"},g.default.createElement("div",{className:"card h-100 text-center widget-icon accout_unit"},g.default.createElement("div",{className:"card-body"},g.default.createElement("h3",{className:"text-primary"},g.default.createElement(v.FormattedNumber,{value:s})),(0,h.tu)("total_accounts"))))),l&&g.default.createElement("div",{className:"loading-style"},g.default.createElement(T.TronLoader,null)),g.default.createElement("div",{className:"row mt-2"},g.default.createElement("div",{className:"col-md-12 table_pos"},r?g.default.createElement("div",{className:"table_pos_info d-none d-md-block",style:{left:"auto"}},g.default.createElement("div",null,(0,h.tu)("view_total")," ",s," ",(0,h.tu)("account_unit")," ",g.default.createElement(F.QuestionMark,{placement:"top",info:i})," ",g.default.createElement("br",null)," ",g.default.createElement("span",null,"(",(0,h.tu)("table_info_big"),")"))):"",g.default.createElement(x.default,{bordered:!0,loading:l,column:u,data:o,total:r,onPageChange:function(t,a){e.loadAccounts(t,a)}}))))}}]),t}(p.Component),L={loadAccounts:E.loadAccounts};t.default=(0,b.connect)(o,L)((0,v.injectIntl)(O))}});