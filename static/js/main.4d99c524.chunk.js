(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(20)},16:function(e,t,a){},17:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},18:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(9),s=a.n(r),i=(a(16),a(1)),c=a(2),l=a(4),p=a(3),u=a(5),d=(a(17),a(18),a(6)),h=a(10),b=a.n(h),m=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.scketch=new b.a(function(t){t.setup=function(){e.props.setup(t,e.refs.canvas_container)};["draw","windowResized","preload","mouseClicked","doubleClicked","mouseMoved","mousePressed","mouseWheel","mouseDragged","mouseReleased","keyPressed","keyReleased","keyTyped","touchStarted","touchMoved","touchEnded","deviceMoved","deviceTurned","deviceShaken"].forEach(function(a){e.props[a]&&(t[a]=function(){e.props[a](t)})})})}},{key:"shouldComponentUpdate",value:function(){return!1}},{key:"componentWillUnmount",value:function(){this.scketch.remove()}},{key:"render",value:function(){return o.a.createElement("div",{ref:"canvas_container",className:this.props.className||"",style:this.props.style||{}})}}]),t}(o.a.Component),v=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(m,{setup:this.props.setup,draw:this.props.draw})}}]),t}(n.Component),g=function(e,t){e.createCanvas(600,600,e.WEBGL).parent(t)},T={angle:0,w:30},w={a:0,b:0,T:0,speed:.5,w:50},f={angle:0,w:20},k={angle:0,rot:0,w:60},E={a:0,b:0,speed:.5,w:50,T:0,spin:0},x=[function(e){var t=e.dist(0,0,500,500);e.background(158,223,247),e.directionalLight(203,157,247,1,0,-5),e.translate(0,-50,-200),e.scale(.5),e.rectMode(e.CENTER),e.rotateX(e.PI/4),e.rotateZ(-e.PI/3.5);for(var a=0;a<e.height;a+=T.w)for(var n=0;n<e.width;n+=T.w){e.push();var o=e.dist(n,a,e.width/2,e.height/2),r=e.map(o,0,t,-2,2),s=T.angle+r,i=e.map(e.sin(s),-1,1,0,800);e.translate(n-e.width/2,a-e.height/2,0),e.box(T.w,T.w,i),e.pop()}T.angle+=.04},function(e){e.background(200,0,120),e.directionalLight(0,20,120,0,1,-1),e.translate(60,0,-400),e.rectMode(e.CENTER),e.rotateX(e.PI/5),e.rotateY(e.PI/4),e.scale(.8);for(var t=e.dist(0,0,500,500),a=0;a<e.height;a+=f.w)for(var n=0;n<e.width;n+=f.w){e.push();var o=e.dist(n,a,e.width/2,e.height/2),r=e.map(o,0,t,-1,1),s=f.angle+r,i=e.map(e.sin(s),-1,1,0,200);e.map(e.sin(s),-1,1,0,50),e.translate(n-e.width/2,a-e.height/2,0),e.box(f.w,f.w,i),e.pop()}f.angle+=.01},function(e){e.background(158,223,247),e.translate(0,-50,-200),e.rectMode(e.CENTER),e.scale(.6),e.rotateX(e.PI/4),e.rotateZ(-e.PI/3.5);for(var t=e.dist(0,0,600,600),a=0;a<e.height;a+=k.w)for(var n=0;n<e.width;n+=k.w){e.push();var o=e.dist(n,a,e.width/2,e.height/2),r=e.map(o,0,t,-3,3),s=k.angle+r,i=e.map(e.sin(s),-1,1,0,200),c=e.map(e.sin(s),-1,1,50,210);e.directionalLight(c/2,c,247,1,0,-1),e.directionalLight(c/2,c,247,0,0,1),e.translate(n-e.width/2,a-e.height/2,2.5*i),e.rotateY(k.rot),e.box(50,50,50),e.pop(),e.rotateZ(k.rot)}k.angle+=.009,k.rot+=1e-6},function(e){e.background(255),e.directionalLight(232,200,219,0,-400,0),e.directionalLight(103,255,121,0,400,0),e.directionalLight(75,110,116,200,400,-400),e.ambientMaterial(120),e.strokeWeight(4),e.scale(.8),e.rotateX(w.b),e.rotateY(w.b),e.rotateZ(w.b);w.T>200?w.speed=-.5:w.T<0&&(w.speed=.5),w.a=e.map(w.T,0,200,0,e.PI),e.push(),e.rotateZ(w.a),e.translate(0,0,0),e.box(100,100,100),e.pop(),e.push(),e.rotateZ(w.a),e.translate(-w.T-100,0,0),e.box(100,100,100),e.pop(),e.push(),e.rotateZ(w.a),e.translate(0,100+w.T,0),e.box(100,100,100),e.pop(),e.push(),e.rotateZ(w.a),e.translate(0,0,100+w.T),e.box(100,100,100),e.pop(),e.push(),e.rotateZ(w.a),e.translate(0,0,-100-w.T),e.box(100,100,100),e.pop(),e.push(),e.rotateZ(w.a),e.translate(0,-100-w.T,0),e.box(100,100,100),e.pop(),e.push(),e.rotateZ(w.a),e.translate(w.T+100,0,0),e.box(100,100,100),e.pop(),w.T=w.T+w.speed,w.b+=.008},function(e){e.background(220,255,250),e.ambientMaterial(190,1500,250),e.directionalLight(0,0,247,0,0,-1),e.directionalLight(180,20,200,-1,0,0),e.directionalLight(200,70,100,0,1,-1),e.directionalLight(0,240,180,0,1,0),E.spin+=9e-4,E.b=e.map(E.T,0,200,0,e.PI),e.rotateX(3*E.spin),e.rotateY(E.spin/2),e.rotateZ(E.spin),e.strokeWeight(4);E.T>100?E.speed=-.5:E.T<0&&(E.speed=.5),-.5==E.speed?E.a=E.b:.5==E.speed&&(E.a=0),e.push(),e.translate(-E.T-50,-50-E.T,-E.T-50),e.rotateY(-E.a),e.rotateX(E.a),e.rotateZ(E.a),e.box(100,100,100),e.pop(),e.push(),e.translate(E.T+50,-E.T-50,-E.T-50),e.rotateY(E.a),e.rotateX(E.a),e.rotateZ(E.a),e.box(100,100,100),e.pop(),e.push(),e.translate(-E.T-50,E.T+50,-E.T-50),e.rotateY(-E.a),e.rotateX(-E.a),e.rotateZ(E.a),e.box(100,100,100),e.pop(),e.push(),e.translate(E.T+50,E.T+50,-E.T-50),e.rotateY(E.a),e.rotateX(-E.a),e.rotateZ(E.a),e.box(100,100,100),e.pop(),e.push(),e.translate(-E.T-50,-50-E.T,E.T+50),e.rotateY(E.a),e.rotateX(-E.a),e.rotateZ(E.a),e.box(100,100,100),e.pop(),e.push(),e.translate(E.T+50,-E.T-50,E.T+50),e.rotateY(-E.a),e.rotateX(-E.a),e.rotateZ(E.a),e.box(100,100,100),e.pop(),e.push(),e.translate(-E.T-50,E.T+50,E.T+50),e.rotateY(E.a),e.rotateX(E.a),e.rotateZ(E.a),e.box(100,100,100),e.pop(),e.push(),e.translate(E.T+50,E.T+50,E.T+50),e.rotateY(-E.a),e.rotateX(E.a),e.rotateZ(E.a),e.box(100,100,100),e.pop(),E.T=E.T+E.speed,E.b+=E.b}],y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).state={selection:0},a.handleNext=a.handleNext.bind(Object(d.a)(a)),a.handlePrevious=a.handlePrevious.bind(Object(d.a)(a)),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleNext",value:function(){this.state.selection<x.length-1&&this.setState({selection:this.state.selection+1})}},{key:"handlePrevious",value:function(){this.state.selection>0&&this.setState({selection:this.state.selection-1})}},{key:"render",value:function(){return o.a.createElement("div",{className:"container-fluid"},o.a.createElement("br",null),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-3"},o.a.createElement("h2",null,"Random Sketches"),o.a.createElement("br",null)," ",o.a.createElement("br",null),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-1"}),o.a.createElement("button",{type:"button",className:"btn btn-primary btn-lg",onClick:this.handlePrevious}," Previous "),o.a.createElement("div",{className:"col-md-1"}),o.a.createElement("button",{type:"button",className:"btn btn-primary btn-lg",onClick:this.handleNext}," Next "))),o.a.createElement("br",null),o.a.createElement("div",{className:"col-md-3"},o.a.createElement(v,{setup:g,draw:x[this.state.selection]}))),o.a.createElement("br",null))}}]),t}(o.a.Component),j=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(y,null)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(19);s.a.render(o.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.4d99c524.chunk.js.map