(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,n){},113:function(e,t,n){},114:function(e,t,n){},125:function(e,t,n){"use strict";n.r(t);var s=n(0),o=n.n(s),a=n(11),i=n.n(a),l=(n(112),n(113),n(114),n(7),n(115),n(14),n(1)),r=n.n(l),c=(n(69),n(72)),m=n.n(c),d=n(23),p=n.n(d),u=n(28),h=n.n(u),k=n(18),f=n(12),b=n(43);class v extends o.a.Component{constructor(...e){super(...e),r()(this,"transitionStatus",f.a),r()(this,"_refs",{})}shouldComponentUpdate(e){const t=this.transitionStatus;return!(f.a===t&&!e.visible)}shouldHide(){const e=this.props,t=e.lazyMount;return!e.visible&&!t}saveRef(e,t){this._refs[e]=t}getPopupRootDOM(){return i.a.findDOMNode(this._refs.popupRoot)}getPopupDOM(){return i.a.findDOMNode(this._refs.popup)}getPopupMaskDOM(){return i.a.findDOMNode(this._refs.popupMask)}onEnter({onEnter:e},t,n,s){const o=this.props,a=o.destroyOnClose,i=o.getPosition;if(a||(n.style.display=""),!t&&i){const e=i(n),t=e=>"number"===typeof e?e+"px":e;e&&("left"in e&&(n.style.left=t(e.left)),"top"in e&&(n.style.top=t(e.top)),"right"in e&&(n.style.right=t(e.right)),"bottom"in e&&(n.style.bottom=t(e.bottom)))}e&&e(n,s)}onExited({onExited:e},t,n){this.props.destroyOnClose||(n.style.display="none"),e&&e(n)}renderPopupMask(){const e=this.props,t=e.prefixCls,n=e.visible,s=e.mask,a=e.maskProps,i=e.maskStyle,l=e.maskClassName,r=e.maskTransition,c=e.lazyMount,m=e.destroyOnClose,d=e.fixed,u=e.maskComponent,k=h()({[t+"-mask"]:!0,[t+"-mask-fixed"]:d},a.className,l),v={};this.shouldHide()&&(v.display="none");const E=r.classNames?b.a:f.b;return o.a.createElement(E,p()({enter:!0,exit:!0,appear:!0,addEndListener:(e,t)=>null==r.timeout&&t()},r,{in:s&&n,onEnter:this.onEnter.bind(this,r,!0),onExited:this.onExited.bind(this,r,!0),unmountOnExit:m,mountOnEnter:c}),o.a.createElement(u,p()({},a,{ref:this.saveRef.bind(this,"popupMask"),style:Object.assign({},i,{},a.style,{},v),className:k})))}render(){const e=this.props,t=e.style,n=e.prefixCls,a=e.className,i=e.fixed,l=e.visible,r=e.children,c=e.lazyMount,d=e.destroyOnClose,u=e.rootClassName,v=e.rootStyle,E=e.rootProps,g=e.rootComponent,C=e.component,x=e.transition,y=e.wrapContent,O=m()(e,["style","prefixCls","className","fixed","visible","children","lazyMount","destroyOnClose","rootClassName","rootStyle","rootProps","rootComponent","component","transition","wrapContent"]);delete O.mask,delete O.maskProps,delete O.maskStyle,delete O.maskClassName,delete O.maskComponent,delete O.maskTransition,delete O.getPosition;let N=Object.assign({},E,{className:h()(u,E.className),style:Object.assign({},v,{},E.style),ref:this.saveRef.bind(this,"popupRoot")});g===s.Fragment&&(N={ref:this.saveRef.bind(this,"popupRoot")});const S=h()({[n]:!0,[n+"-fixed"]:i,[a]:a}),D={};this.shouldHide()&&(D.display="none");const P=x.classNames?b.a:f.b,F=o.a.createElement(g,N,this.renderPopupMask(),y(o.a.createElement(P,p()({enter:!0,exit:!0,appear:!0,addEndListener:(e,t)=>null==x.timeout&&t()},x,{in:l,onEnter:this.onEnter.bind(this,x,!1),onExited:this.onExited.bind(this,x,!1),unmountOnExit:d,mountOnEnter:c}),e=>(this.transitionStatus=e,o.a.createElement(C,p()({},O,{ref:this.saveRef.bind(this,"popup"),style:Object.assign({},t,{},D),className:S}),"function"===typeof r?r(e):r)))));return o.a.createElement(k.a.Provider,{value:null},o.a.createElement(f.b,{enter:!0,exit:!0,appear:!0,addEndListener:x.addEndListener||((e,t)=>null==x.timeout&&t()),timeout:x.timeout,in:l,unmountOnExit:d,mountOnEnter:c},()=>F))}}r()(v,"defaultProps",{prefixCls:"rw-popup",style:{},className:"",rootClassName:"",rootStyle:{},rootProps:{},visible:!1,fixed:!1,lazyMount:!0,transition:{},destroyOnClose:!0,mask:!1,maskStyle:{},maskProps:{},maskClassName:"",maskTransition:{},component:"div",maskComponent:"div",rootComponent:s.Fragment,wrapContent:e=>e});var E=v,g=n(5),C=n.n(g);class x extends s.Component{constructor(...e){super(...e),r()(this,"state",{visible:!1}),r()(this,"toggleClick",e=>{const t=this.state.visible;this.setState({visible:!t})})}componentDidMount(){}render(){const e=this.state.visible;return o.a.createElement("div",null,o.a.createElement("button",{onClick:this.toggleClick},e?"\u5173\u95ed":"\u663e\u793a"),o.a.createElement(E,{rootComponent:"div",rootClassName:"p-root",rootStyle:{zIndex:0,tabIndex:-1},rootProps:{"data-x":"1"},visible:e,transition:{timeout:500,onEnter:e=>{C()(e).hide(),C()(e).stop().fadeIn(500)},onExit:e=>{C()(e).stop().fadeOut(500)}},getPosition:e=>(console.log(e),{left:"50%",top:50})},o.a.createElement("div",{className:"dialog"},"center...")))}}class y extends s.Component{constructor(...e){super(...e),r()(this,"state",{visible:!0,mask:!0}),r()(this,"toggleClick",e=>{const t=this.state.visible;this.setState({visible:!t})}),r()(this,"toggleClick2",e=>{const t=this.state.mask;this.setState({mask:!t})}),r()(this,"refButton",e=>{this._defer.resolve({of:e,my:"left top",at:"left bottom"})}),r()(this,"refButton2",e=>{this._defer2.resolve({of:e,my:"left center",at:"right center"})})}render(){const e=this.state,t=e.visible,n=e.mask;return o.a.createElement(s.Fragment,null,o.a.createElement("div",null,o.a.createElement("button",{onClick:this.toggleClick},t?"\u5173\u95ed":"\u663e\u793a"),o.a.createElement("button",{onClick:this.toggleClick2},n?"\u5173\u95ed\u906e\u7f69\u5c42":"\u663e\u793a\u906e\u7f69\u5c42")),o.a.createElement("div",{style:{height:"calc(100% - 30px)",position:"relative",border:"1px solid #000"}},o.a.createElement(E,{visible:t,mask:n,style:{left:"50%",top:10,background:"#ff5454",color:"#FFF",padding:10},transition:{timeout:500,onEnter:e=>{C()(e).hide(),C()(e).stop().fadeIn(500)},onExit:e=>{C()(e).stop().fadeOut(500)}},maskTransition:{timeout:500,onEnter:e=>{C()(e).hide(),C()(e).stop().fadeIn(500)},onExit:e=>{C()(e).stop().fadeOut(500)}}},o.a.createElement("div",null,"center2..."))))}}let O=1;function N(){return console.log("1"),o.a.createElement("a",null,"Test a",O++)}const S={appear:"animated",appearActive:"fadeBottomIn",appearDone:"done",enter:"animated",enterActive:"fadeBottomIn",enterDone:"done",exit:"animated",exitActive:"fadeBottomOut",exitDone:"done"},D={appear:"animated",appearActive:"fadeIn",appearDone:"done",enter:"animated",enterActive:"fadeIn",enterDone:"done",exit:"animated",exitActive:"fadeOut",exitDone:"done"};class P extends s.Component{constructor(...e){super(...e),r()(this,"state",{visible:!0,mask:!0}),r()(this,"toggleClick",e=>{const t=this.state.visible;this.setState({visible:!t})}),r()(this,"toggleClick2",e=>{const t=this.state.mask;this.setState({mask:!t})})}render(){const e=this.state,t=e.visible,n=e.mask;return o.a.createElement(s.Fragment,null,o.a.createElement("div",null,o.a.createElement("button",{onClick:this.toggleClick},t?"\u5173\u95ed":"\u663e\u793a"),o.a.createElement("button",{onClick:this.toggleClick2},n?"\u5173\u95ed\u906e\u7f69\u5c42":"\u663e\u793a\u906e\u7f69\u5c42"),o.a.createElement("button",{onClick:()=>this.forceUpdate()},"refresh")),o.a.createElement("div",{style:{height:"calc(100% - 30px)",position:"relative",border:"1px solid #000"}},o.a.createElement(E,{visible:t,mask:n,destroyOnClose:!1,style:{left:10,top:10,background:"#ff5454",color:"#FFF",padding:10},transition:{timeout:500,classNames:S},maskTransition:{timeout:500,classNames:D}},o.a.createElement("div",null,o.a.createElement(N,null)))))}}const F={appear:"animated",appearActive:"fadeBottomIn",appearDone:"done",enter:"animated",enterActive:"fadeBottomIn",enterDone:"done",exit:"animated",exitActive:"fadeBottomOut",exitDone:"done"},M={appear:"animated",appearActive:"fadeIn",appearDone:"done",enter:"animated",enterActive:"fadeIn",exit:"animated",exitActive:"fadeOut"};class I extends s.Component{constructor(...e){super(...e),r()(this,"state",{visible:!0,mask:!0}),r()(this,"toggleClick",e=>{const t=this.state.visible;this.setState({visible:!t})}),r()(this,"toggleClick2",e=>{const t=this.state.mask;this.setState({mask:!t})})}render(){const e=this.state,t=e.visible,n=e.mask;return o.a.createElement(s.Fragment,null,o.a.createElement("div",null,o.a.createElement("button",{onClick:this.toggleClick},t?"\u5173\u95ed":"\u663e\u793a"),o.a.createElement("button",{onClick:this.toggleClick2},n?"\u5173\u95ed\u906e\u7f69\u5c42":"\u663e\u793a\u906e\u7f69\u5c42"),o.a.createElement("button",{onClick:()=>this.forceUpdate()},"refresh")),o.a.createElement("div",{style:{height:"calc(100% - 30px)",position:"relative",border:"1px solid #000"}},o.a.createElement(E,{visible:t,mask:n,destroyOnClose:!0,style:{background:"#ff5454",color:"#FFF",padding:10},transition:{timeout:500,classNames:F},maskTransition:{timeout:500,classNames:M},maskProps:{onClick:()=>{this.toggleClick2()}},fixed:!0},o.a.createElement("div",null,"fixed test"))))}}class A extends s.Component{constructor(...e){super(...e),r()(this,"state",{visible:!0,mask:!0}),r()(this,"toggleClick",e=>{const t=this.state.visible;this.setState({visible:!t})}),r()(this,"toggleClick2",e=>{const t=this.state.mask;this.setState({mask:!t})})}render(){const e=this.state,t=e.visible,n=e.mask;return o.a.createElement(s.Fragment,null,o.a.createElement("div",null,o.a.createElement("button",{onClick:this.toggleClick},t?"\u5173\u95ed":"\u663e\u793a"),o.a.createElement("button",{onClick:this.toggleClick2},n?"\u5173\u95ed\u906e\u7f69\u5c42":"\u663e\u793a\u906e\u7f69\u5c42"),o.a.createElement("button",{onClick:()=>this.forceUpdate()},"refresh")),o.a.createElement("div",{style:{height:"calc(100% - 30px)",position:"relative",border:"1px solid #000"}},o.a.createElement(E,{visible:t,mask:n,destroyOnClose:!0,style:{background:"#ff5454",color:"#FFF",padding:10},maskProps:{onClick:()=>{this.toggleClick2()}}},o.a.createElement("div",null,"fixed test"))))}}var w=[{label:"\u57fa\u672c\u529f\u80fd",component:x},{label:"\u906e\u7f69\u5c42",component:y},{label:"\u4f7f\u7528CSS\u52a8\u753b",component:P},{label:"fixed",component:I},{label:"\u65e0\u52a8\u753b",component:A}];class B extends s.Component{constructor(...e){super(...e),r()(this,"state",{current:w[0]})}onDemoChange(e,t){this.setState({current:e})}render(){const e=this.state.current;return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"slider"},w.map((t,n)=>o.a.createElement("div",{className:e===t?"active":"",onClick:this.onDemoChange.bind(this,t)},t.label))),o.a.createElement("div",{className:"content"},e?o.a.createElement(e.component,null):null))}}i.a.render(o.a.createElement(B,null),document.getElementById("demo"))},74:function(e,t,n){n(75),e.exports=n(125)}},[[74,1,2]]]);