(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(7),r=a.n(s),o=(a(14),a(1)),i=a(2),c=a(4),d=a(3),u=a(5),m=(a(15),function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"led"},l.a.createElement("label",{className:"mdl-switch mdl-js-switch mdl-js-ripple-effect",htmlFor:this.props.led.id},l.a.createElement("input",{type:"checkbox",id:this.props.led.id,className:"mdl-switch__input",defaultChecked:1===this.props.led.value,onChange:this.props.handleLedSwitchToggle}),l.a.createElement("span",{className:"mdl-switch__label"},this.props.led.name)))}}]),t}(n.Component)),p=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"navbar"},l.a.createElement("div",{className:"navbar__icons"},l.a.createElement("i",{className:"material-icons navbar__icons__icon-cw"},"settings"),l.a.createElement("i",{className:"material-icons navbar__icons__icon-ccw"},"settings")),l.a.createElement("h1",{className:"navbar__title"},"ESP8266 Home Automation"," ",l.a.createElement("span",{className:"navbar__title__version"},"preALPHA")))}}]),t}(n.Component),h=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"mdl-textfield mdl-js-textfield mdl-textfield--floating-label"},l.a.createElement("input",{className:"mdl-textfield__input",type:"text",id:"esp_ip",defaultValue:"192.168.0.105"}),l.a.createElement("label",{className:"mdl-textfield__label",htmlFor:"esp_ip"},"ESP IP")),l.a.createElement("button",{className:"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored",onClick:this.props.handleConnectClick},"Connect"))}}]),t}(n.Component),v=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"servo"},l.a.createElement("label",{htmlFor:this.props.servo.id},this.props.servo.name),l.a.createElement("input",{id:this.props.servo.id,className:"mdl-slider mdl-js-slider",type:"range",min:"10",max:"170",tabIndex:"0",defaultValue:this.props.servo.value,onMouseUp:this.props.handleServoAngleChange,onTouchEnd:this.props.handleServoAngleChange}))}}]),t}(n.Component),f=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("button",{className:"mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored add-control-button",onClick:this.props.handleConnectClick},l.a.createElement("i",{className:"material-icons"},"add"))}}]),t}(n.Component),b=(n.Component,function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(c.a)(this,Object(d.a)(t).call(this))).state={servos:[{id:"servo_1",name:"Blinds left",value:20},{id:"servo_2",name:"Blinds right",value:150}],leds:[{id:"led_1",name:"Desk light",value:1},{id:"led_2",name:"Ceiling light",value:0}]},e.lastMove=1e3,e.handleServoAngleChange=function(t){var a=t.target.value,n=t.target.id,l=document.getElementById("esp_ip").value;if(performance.now()-e.lastMove>100){var s=new XMLHttpRequest;s.open("GET","http://"+l+":80/servo?servoId="+n+"&angle="+a,!0),s.send(),e.lastMove=performance.now(),console.log("move")}var r=e.state.servos.indexOf(e.state.servos.filter(function(e){return e.id===n})[0]),o=e.state.servos;o[r].value=a,e.setState({servos:o})},e.handleLedSwitchToggle=function(t){var a=!0===t.target.checked?1:0,n=t.target.id,l=document.getElementById("esp_ip").value,s=new XMLHttpRequest;s.open("GET","http://"+l+":80/led?ledId="+n+"&value="+a,!0),s.send();var r=e.state.leds.indexOf(e.state.leds.filter(function(e){return e.id===n})[0]),o=e.state.leds;o[r].value=a,e.setState({leds:o})},e.lastMove=1e3,e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"createCallback",value:function(e){return function(){if(4===this.readyState&&200===this.status){var t=JSON.parse(this.responseText);console.log(t);var a={servos:[],leds:[]},n=!0,l=!1,s=void 0;try{for(var r,o=t.servos[Symbol.iterator]();!(n=(r=o.next()).done);n=!0){var i=r.value;a.servos.push(i)}}catch(v){l=!0,s=v}finally{try{n||null==o.return||o.return()}finally{if(l)throw s}}var c=!0,d=!1,u=void 0;try{for(var m,p=t.leds[Symbol.iterator]();!(c=(m=p.next()).done);c=!0){var h=m.value;a.leds.push(h)}}catch(v){d=!0,u=v}finally{try{c||null==p.return||p.return()}finally{if(d)throw u}}e.setState(a)}}}},{key:"componentDidMount",value:function(){this.connectToEsp()}},{key:"connectToEsp",value:function(){var e=document.getElementById("esp_ip").value,t=new XMLHttpRequest;t.open("GET","http://"+e+":80/status",!0),t.onreadystatechange=this.createCallback(this),t.send()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"app"},l.a.createElement("header",{className:"app__header"},l.a.createElement(p,null),l.a.createElement(h,{handleConnectClick:this.connectToEsp})),l.a.createElement("main",{className:"app__content"},l.a.createElement("div",{className:"servos"},this.state.servos.map(function(t){return l.a.createElement(v,{key:t.id,servo:t,handleServoAngleChange:e.handleServoAngleChange})})),l.a.createElement("div",{className:"leds"},this.state.leds.map(function(t){return l.a.createElement(m,{key:t.id,led:t,handleLedSwitchToggle:e.handleLedSwitchToggle})})),l.a.createElement(f,null)))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.75027e6b.chunk.js.map