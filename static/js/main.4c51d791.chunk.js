(this["webpackJsonpreact-gh-pages"]=this["webpackJsonpreact-gh-pages"]||[]).push([[0],{114:function(e,t,n){},115:function(e,t,n){},144:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/knob.8a98d16f.png"},145:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(23),a=n.n(i),s=(n(114),n(61)),l=n(62),c=n(71),u=n(70),d=(n.p,n(115),n(4)),f=n(84),h=n(37),g=n(58),p=n(26),b=n(3),w=n(19),j=n(150),m=n(152),y=n(63),x=n(86),O=n(151),S=n(153),C=n(87),B=n.n(C),v=n(9),T=(x.a.createAnimatedComponent(B.a),w.a.get("screen")),k=T.width,A=T.height,V=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).prepareWheel=function(){r.Rewards=r.props.options.rewards,r.RewardCount=r.Rewards.length,r.numberOfSegments=r.RewardCount,r.fontSize=32,r.onedeg=360,r.angleBySegment=r.onedeg/r.numberOfSegments,r.angleOffset=r.angleBySegment/2,r.winner=r.props.options.winner?r.props.options.winner:Math.floor(Math.random()*r.numberOfSegments),r._wheelPaths=r.makeWheel(),r._angle=new x.a.Value(0),r.props.options.onRef(Object(y.a)(r))},r.resetWheelState=function(){r.setState({enabled:!1,started:!1,finished:!1,winner:null,gameScreen:new x.a.Value(A/2),wheelOpacity:new x.a.Value(1),imageLeft:new x.a.Value(k/2-30),imageTop:new x.a.Value(A/2-70)})},r._tryAgain=function(){r.prepareWheel(),r.resetWheelState(),r.angleListener(),r._onPress()},r.angleListener=function(){r._angle.addListener((function(e){r.state.enabled&&r.setState({enabled:!1,finished:!1}),r.angle=e.value}))},r.makeWheel=function(){var e=Array.from({length:r.numberOfSegments}).fill(1),t=O.a()(e),n=r.props.options.colors?r.props.options.colors:["#E07026","#E8C22E","#ABC937","#4F991D","#22AFD3","#5858D0","#7B48C8","#D843B9","#E23B80","#D82B2B"];return t.map((function(e,t){var o=S.a().padAngle(.001).outerRadius(k/2).innerRadius(r.props.options.innerRadius||100);return{path:o(e),color:n[t%n.length],value:r.Rewards[t],centroid:o.centroid(e)}}))},r._getWinnerIndex=function(){var e=Math.abs(Math.round(r.angle%r.onedeg));return r.angle<0?Math.floor(e/r.angleBySegment):(r.numberOfSegments-Math.floor(e/r.angleBySegment))%r.numberOfSegments},r._onPress=function(){var e=r.props.options.duration||1e4;r.setState({started:!0}),x.a.timing(r._angle,{toValue:365-r.winner*(r.onedeg/r.numberOfSegments)+e/1e3*360,duration:e,useNativeDriver:!0}).start((function(){}))},r.state={enabled:!1,started:!1,finished:!1,winner:null,gameScreen:new x.a.Value(A/2),wheelOpacity:new x.a.Value(1),imageLeft:new x.a.Value(k/2-30),imageTop:new x.a.Value(A/2-70)},r.angle=0,r.prepareWheel(),r}return Object(l.a)(n,[{key:"componentWillUnmount",value:function(){this.props.options.onRef(void 0)}},{key:"componentDidMount",value:function(){this.angleListener()}},{key:"_renderTopToPlay",value:function(){var e=this;if(0==this.state.started)return Object(v.jsx)(g.a,{onPress:function(){return e._onPress()},children:this.props.options.playButton()})}},{key:"render",value:function(){return Object(v.jsxs)(d.a,{style:I.container,children:[Object(v.jsx)(g.a,{style:{position:"absolute",width:k,height:A/2,justifyContent:"center",alignItems:"center"},children:Object(v.jsx)(x.a.View,{style:[I.content,{padding:10}]})}),this.props.options.playButton?this._renderTopToPlay():null]})}}]),n}(r.Component),I=b.a.create({container:{flex:1,justifyContent:"center",alignItems:"center",marginTop:250},content:{},startText:{fontSize:50,color:"#fff",fontWeight:"bold",textShadowColor:"rgba(0, 0, 0, 0.4)",textShadowOffset:{width:-1,height:1},textShadowRadius:10}}),P=["10% Discount","50% Discount on Accessories","5.1 Home Theatre","NeckBand","None","SmartBand","HeadSet","BackCase","None"],W=function(e){Object(c.a)(r,e);var t=Object(u.a)(r);function r(e){var n;return Object(s.a)(this,r),(n=t.call(this,e)).buttonPress=function(){n.setState({started:!0}),n.child._onPress()},n.state={winnerValue:null,winnerIndex:null,started:!1},n.child=null,n}return Object(l.a)(r,[{key:"render",value:function(){var e=this,t={rewards:P,knobSize:30,borderWidth:5,borderColor:"#fff",innerRadius:30,duration:6e3,backgroundColor:"transparent",textAngle:"horizontal",knobSource:n(144),onRef:function(t){return e.child=t}};return Object(v.jsx)(d.a,{style:R.container,children:Object(v.jsxs)(f.a,{source:{uri:"https://cdn4.vectorstock.com/i/1000x1000/18/08/fireworks-background-for-diwali-festival-vector-14301808.jpg"},style:[R.fixed,R.containter2],children:[Object(v.jsxs)(d.a,{style:R.inputLayer,children:[Object(v.jsx)(h.a,{style:R.inputFieldStyle,children:"FACEBOOK ID"}),Object(v.jsx)(h.a,{style:R.inputFieldStyle,children:"NANDY AKSHARA"})]}),Object(v.jsxs)(d.a,{style:R.spinTitle,children:[!this.state.started&&Object(v.jsx)(d.a,{style:R.startButtonView,children:Object(v.jsx)(g.a,{onPress:function(){return e.buttonPress()},style:R.startButton,children:Object(v.jsx)(h.a,{style:R.startButtonText,children:"Spin to win!"})})}),null!=this.state.winnerIndex&&Object(v.jsxs)(d.a,{style:R.winnerView,children:[Object(v.jsxs)(h.a,{style:R.winnerText,children:["You win ",P[this.state.winnerIndex]]}),Object(v.jsx)(g.a,{onPress:function(){e.setState({winnerIndex:null}),e.child._tryAgain()},style:R.tryAgainButton,children:Object(v.jsx)(h.a,{style:R.tryAgainText,children:"TRY AGAIN"})})]})]}),Object(v.jsx)(p.a,{children:Object(v.jsx)(d.a,{style:R.wheelOfFortune,children:Object(v.jsx)(V,{options:t,getWinner:function(t,n){e.setState({winnerValue:t,winnerIndex:n})}})})}),Object(v.jsx)(j.a,{url:"http://www.camperstribe.com",quote:"@Poorliya - Mobile World is yours to explore",hashtag:"#Poorliya",children:Object(v.jsx)(m.a,{size:36})})]})})}}]),r}(r.Component),R=b.a.create({wheelOfFortune:{alignItems:"center",justifyContent:"center"},startButtonView:{position:"absolute"},startButton:{backgroundColor:"rgba(0,0,0,.5)",marginTop:50,padding:5},startButtonText:{fontSize:50,color:"#fff",fontWeight:"bold"},winnerView:{position:"absolute",justifyContent:"center",alignItems:"center"},winnerText:{fontSize:30},tryAgainButton:{padding:5,backgroundColor:"rgba(0,0,0,0.5)"},tryAgainText:{fontSize:20,fontWeight:"bold",color:"#fff"},inputLayer:{flex:.2,flexDirection:"row",marginTop:120},container:{flex:1,backgroundColor:"#E74C3C"},spinTitle:{flex:.2,flexDirection:"row",padding:20,alignItems:"center",justifyContent:"center"},image:{width:300,height:200,justifyContent:"center",alignItems:"center",marginTop:"1.5rem"},containter2:{width:w.a.get("window").width,height:w.a.get("window").height},fixed:{position:"absolute",top:0,left:0,right:0,bottom:0},inputFieldStyle:{fontSize:20,fontWeight:"bold",color:"#fff",flex:1,justifyContent:"center"}}),D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,154)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),o(e),i(e),a(e)}))};a.a.render(Object(v.jsx)(o.a.StrictMode,{children:Object(v.jsx)(W,{})}),document.getElementById("root")),D()}},[[145,1,2]]]);
//# sourceMappingURL=main.4c51d791.chunk.js.map