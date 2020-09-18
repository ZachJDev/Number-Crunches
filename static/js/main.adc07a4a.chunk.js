(this["webpackJsonpreact-math-trainer"]=this["webpackJsonpreact-math-trainer"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a(26)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"default",(function(){return N})),a.d(n,"Normal",(function(){return O})),a.d(n,"MultiplicationTables",(function(){return k})),a.d(n,"Blitz",(function(){return j})),a.d(n,"Zen",(function(){return E}));var s=a(0),i=a.n(s),r=a(11),l=a.n(r),o=(a(17),a(18),a(19),a(7)),c=a(8),m=a(1),u=a(2),h=a(4),d=a(3),p=(a(20),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.num1,a=e.num2,n=e.sign,s=(e.probNum,e.mode);return i.a.createElement("div",{className:" ".concat(s," problem-wrap")},i.a.createElement("div",{className:" problem"},i.a.createElement("span",null,t," ",n," ",a," =")),this.props.children)}}]),a}(s.Component)),b=(a(21),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).handleInput=function(t){t.preventDefault(),e.props.handleInput(t.target.value)},e.handleUpdateProblem=function(){e.props.isGameOver?e.props.restart():e.props.updateProblem(!0)},e}return Object(u.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"input"},i.a.createElement("input",{className:"answer",type:"text",onChange:this.handleInput,value:this.props.input,autoFocus:!0}),this.props.hasSkip?i.a.createElement("button",{className:"skip-button button",onClick:this.handleUpdateProblem},this.props.isGameOver?"restart":"skip"):null)}}]),a}(s.Component)),f=function(e){return e[Math.floor(Math.random()*e.length)]},v=function e(){Object(m.a)(this,e),this.max=10,this.min=1,this.startTime=10,this.totalProblems=50,this.practice=!1,this.hasNumProbs=!1,this.hasStartClock=!1,this.allowedSigns=["+","-","\xd7","/"]},g=function(){function e(t){Object(m.a)(this,e),Object.assign(this,t),this.hasTimer=!this.practice,this.bonus=2,this.ticks=!0,this.clockDirection=1,this.hasSkip=!0,this.challengeIncrease=0,this.max=Number(this.max),this.min=Number(this.min)}return Object(u.a)(e,[{key:"compute",value:function(e,t,a){return"\xd7"===a?e*t:"+"===a?e+t:"-"===a?e-t:"/"===a?e/t:void 0}},{key:"getRandomInt",value:function(){return Math.floor(Math.random()*(this.max-this.min+1)+this.min)}},{key:"getNewProblem",value:function(){var e,t,a=f(this.signs);do{var n=this.getNewNumbers(),s=Object(c.a)(n,2);e=s[0],t=s[1],console.log(e,t)}while("/"===a&&0===t);return[e,t,a]}},{key:"getNewNumbers",value:function(){return[this.getRandomInt(),this.getRandomInt()]}},{key:"isFinished",value:function(){return!1}},{key:"increaseChallenge",value:function(){this.max+=this.challengeIncrease}}],[{key:"newGame",value:function(e){switch(e.mode){case"Normal":return new O(e);case"Blitz":return new j(e);case"Zen":return new E(e);case"Multiplication Tables":return new k(e)}}}]),e}(),O=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).challengeIncrease=5,n}return Object(u.a)(a,null,[{key:"getDefaultRules",value:function(){return Object.assign(new v,{id:"Normal",hasPractice:!0,description:"Every correct answer adds more time to the clock, but be careful! The problems get harder the longer you  last.",hasStartClock:!0})}}]),a}(g),k=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).initGame(),n.clockDirection=1,n.hasSkip=!1,n}return Object(u.a)(a,[{key:"initGame",value:function(){this.table=[],this.problem=0;for(var e=this.min;e<=this.max;e++)for(var t=this.min;t<=this.max;t++)this.table.push([e,t])}},{key:"getNewNumbers",value:function(){var e;return e=this.inOrder?this.table[0]:f(this.table),this.table=this.table.filter((function(t){return t!==e})),e}},{key:"isFinished",value:function(){return this.problem===this.table.length&&(this.initGame(),!0)}}],[{key:"getDefaultRules",value:function(){return Object.assign(new v,{id:"Multiplication Tables",ticks:!0,hasPractice:!0,description:"Like Normal mode, but let's you focus just on multiplication tables.",allowedSigns:["\xd7"],hasStartClock:!0})}}]),a}(g),E=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).hasTimer=!1,n}return Object(u.a)(a,null,[{key:"getDefaultRules",value:function(){return Object.assign(new v,{id:"Zen",description:"Chill out with some music and endless math problems."})}}]),a}(g),j=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).clockDirection=-1,n.startTime=0,n.bonus=0,n}return Object(u.a)(a,[{key:"isFinished",value:function(e){return console.log(this.totalProblems),e==this.totalProblems}}],[{key:"getDefaultRules",value:function(){return Object.assign(new v,{id:"Blitz",problemCount:!0,description:"Solve a set number of problems as fast as you can!",hasNumProbs:!0})}}]),a}(g),N=g,y=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).handleRestart=function(){n.props.restart()},n.state={},n}return Object(u.a)(a,[{key:"render",value:function(){var e,t=this.props,a=t.solved,n=t.timeElapsed,s=a>=t.goal?"Great Job!":"Keep trying!";if(n>=60){var r=Math.floor(n/60),l=n%60;e="".concat(r," minute").concat(r>1?"s":"").concat(l>0?" and ".concat(l," second").concat(l>1?"s":""):"")}else e="".concat(n," seconds");return i.a.createElement("div",null,i.a.createElement("h1",null,"You solved ".concat(a," problems in ").concat(e,"!")),i.a.createElement("h2",null,s),i.a.createElement("button",{className:"button",onClick:this.handleRestart},"Try again?"))}}]),a}(s.Component),C=(a(22),a(23),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).updateProblem=function(e){var t,a=n.Game.getNewProblem(),s=Object(c.a)(a,3),i=s[0],r=s[1],l=s[2];if("/"===l&&0!==i){var o=i;t=r,i=i*r,r=o}else t=n.Game.compute(i,r,l);n.setState({problem:{num1:i,num2:r,answer:t,sign:l},input:""}),e||n.setState((function(e){return{timeLeft:e.timeLeft+n.Game.bonus}}))},n.handleInput=function(e){var t=n.state.problem,a=t.num1,s=t.num2,i=t.sign,r=t.answer;n.setState({input:e}),n.state.problem.answer==e&&n.setState({problems:[].concat(Object(o.a)(n.state.problems),["".concat(a," ").concat(i," ").concat(s," = ").concat(r)])},(function(){n.Game.isFinished(n.state.problems.length)?n.endGame():(n.state.problems.length%5===0&&n.Game.increaseChallenge(),n.updateProblem())}))},n.endGame=function(){clearInterval(n.state.timerTimeLeft),clearInterval(n.state.timerTimeTaken),n.setState((function(e){return{isGameOver:!0,timeLeft:0,timeTaken:e.timeTaken+1}}))},n.tickTimer=function(){n.state.timeLeft>1?n.setState((function(e){return{timeLeft:e.timeLeft-1}})):1===n.state.timeLeft&&n.endGame()},n.restart=function(){n.updateProblem(),n.setState({isGameOver:!1,problems:[]}),n.Game.hasTimer&&n.setState({timeLeft:n.Game.startTime,timeTaken:0,timerTimeLeft:setInterval((function(){n.tickTimer()}),1e3),timerTimeTaken:setInterval((function(){n.setState((function(e){return{timeTaken:e.timeTaken+1}}))}),1e3)})},n.handleOptions=function(){n.props.handleRestart()},n.Game=N.newGame(n.props.options),console.log(n.Game),n.state={problem:{num1:0,num2:0,sign:""},input:"",timeLeft:n.Game.hasTimer||!n.Game.practice||n.Game.startTime,isGameOver:!0,problems:[]},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.restart()}},{key:"render",value:function(){var e,t=this;e="Zen"!==this.Game.mode?this.state.isGameOver?i.a.createElement(y,{solved:this.state.problems.length,timeElapsed:this.state.timeTaken,goal:3,restart:this.restart,goHome:this.handleOptions}):i.a.createElement("h2",null,!this.Game.hasTimer||this.state.timeLeft||this.state.timeTaken):null;var a=this.state.problem,n=a.num1,s=a.num2,r=a.sign,l=a.answer;return i.a.createElement("div",{className:"".concat(this.Game.mode)},i.a.createElement("div",{className:"game-area"},"Zen"===this.Game.mode?i.a.createElement("div",{className:"problem-list"},this.state.problems.map((function(e,a){return i.a.createElement("span",{className:"".concat(t.Game.mode," problem")},e)}))):null,e,this.state.timeLeft>0||!this.state.isGameOver?i.a.createElement(p,{mode:this.Game.mode,num1:n,num2:s,answer:l,sign:r,probNum:this.state.problems.length+1},i.a.createElement(b,{handleInput:this.handleInput,updateProblem:this.updateProblem,input:this.state.input,restart:this.restart,hasSkip:this.Game.hasSkip,isGameOver:0===this.state.timeLeft})):null,i.a.createElement("button",{className:"button options-button",onClick:this.handleOptions},"Start new Game")),"Zen"==this.Game.mode?i.a.createElement("iframe",{className:"video Zen",src:"https://www.youtube.com/embed/5qap5aO4i9A?autoplay=1",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:!0,title:"video"}):null)}}]),a}(s.Component)),w=a(9),G=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).handleChange=function(t){e.props.handleChange(t)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return this.props.radios.map((function(t){return i.a.createElement("div",{className:e.props.radioClass},i.a.createElement("input",{onChange:e.handleChange,type:"radio",name:e.props.name,value:t.id,id:t.id,checked:t.id===e.props.checked,disabled:e.props.disabled}),i.a.createElement("label",{for:t.id},t.id))}))}}]),a}(s.Component),S=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).handleChange=function(t){e.props.handleChange(t.target.value)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,this.props.boxes.map((function(t){return i.a.createElement("div",null,i.a.createElement("input",{type:"checkbox",id:t,name:t,value:t,onChange:e.handleChange,checked:e.props.checked.includes(t),disabled:!e.props.enabledList.includes(t)}),i.a.createElement("label",{for:t},t))})))}}]),a}(s.Component),T=(a(24),{});Object.keys(n).forEach((function(e){if(n[e].getDefaultRules){var t=n[e].getDefaultRules();T[t.id]=t}}));var P=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),n.setState({id:n.state.mode}),n.props.handleOptions(n.state)},n.handleChange=function(e,t){if("practice"===e.target.name){var a=n.state.practice;n.setState(Object(w.a)({},e.target.name,!a))}else n.setState(Object(w.a)({},e.target.name,e.target.value));"Multiplication Tables"===e.target.value&&n.setState({signs:["\xd7"]})},n.handleCheckboxChange=function(e){var t=n.state.signs;t.includes(e)?t=t.filter((function(t){return t!==e})):t.push(e),n.setState({signs:t})},n.state={mode:"Normal",signs:["+","-"]},Object.assign(n.state,T.Normal),n.radios=Object(o.a)(Object.values(T)),n}return Object(u.a)(a,[{key:"render",value:function(){var e=T[this.state.mode].hasPractice?"":"disabled",t=T[this.state.mode].hasNumProbs?"":"disabled",a=T[this.state.mode].hasStartClock?"":"disabled",n=T[this.state.mode].allowedSigns.length>1?"":"disabled";return i.a.createElement("div",{className:"options"},i.a.createElement("form",{onSubmit:this.handleSubmit,className:"options-form"},i.a.createElement("div",{className:"mode-select"},i.a.createElement(G,{name:"mode",radios:this.radios,handleChange:this.handleChange,checked:this.state.mode,radioClass:"mode"})),i.a.createElement("div",{className:"mode-options"},i.a.createElement("div",{className:"mode-info"},i.a.createElement("h1",{className:"mode-title"},this.state.mode),i.a.createElement("div",{className:"mode-desc-box"},i.a.createElement("p",{className:"mode-desc"},T[this.state.mode].description))),i.a.createElement("div",{className:"mode-options-body"},i.a.createElement("div",{className:"mode-options-col"},i.a.createElement("div",{className:"mode-max-min"},i.a.createElement("div",{className:"mode-max"},i.a.createElement("h2",{className:"form-area-label"},"Range"),i.a.createElement("label",{htmlFor:"max"},"Max:"),i.a.createElement("input",{type:"number",name:"max",value:this.state.max,onChange:this.handleChange})),i.a.createElement("div",{className:"mode-min"},i.a.createElement("label",{htmlFor:"min"},"Min:"),i.a.createElement("input",{type:"number",name:"min",value:this.state.min,onChange:this.handleChange}))),i.a.createElement("div",{className:"mode-signs"},i.a.createElement("h2",{className:"".concat(n," form-area-label")},"Choose Signs"),i.a.createElement(S,{boxes:["+","-","\xd7","/"],checked:this.state.signs,handleChange:this.handleCheckboxChange,enabledList:T[this.state.mode].allowedSigns}))),i.a.createElement("div",{className:"mode-options-col"},i.a.createElement("div",null,i.a.createElement("h2",{className:"".concat(t," form-area-label")},"Number of Problems"),i.a.createElement("input",{type:"number",name:"totalProblems",value:this.state.totalProblems,onChange:this.handleChange,disabled:!T[this.state.mode].hasNumProbs})),i.a.createElement("div",null,i.a.createElement("h2",{className:"".concat(e," form-area-label")},"Practice Mode"),i.a.createElement(G,{handleChange:this.handleChange,name:"practice",radios:[{id:"On"},{id:"Off"}],checked:!0===this.state.practice?"On":"Off",disabled:!T[this.state.mode].hasPractice})),i.a.createElement("div",null,i.a.createElement("h2",{className:"".concat(a," form-area-label")},"Seconds on Clock"),i.a.createElement("input",{type:"number",value:this.state.startTime,name:"startTime",onChange:this.handleChange,disabled:!T[this.state.mode].hasStartClock}))),i.a.createElement("input",{className:"button start-button",type:"submit",value:"Start"})))))}}]),a}(s.Component),x=(a(25),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).handleOptions=function(e){n.setState({isGameOver:!1,options:e})},n.handleRestart=function(){n.setState({isGameOver:!0})},n.state={isGameOver:!0,options:{}},n}return Object(u.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,this.state.isGameOver?i.a.createElement(P,{handleOptions:this.handleOptions}):i.a.createElement(C,{options:this.state.options,handleRestart:this.handleRestart}))}}]),a}(s.Component));var I=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[12,1,2]]]);
//# sourceMappingURL=main.adc07a4a.chunk.js.map