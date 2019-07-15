!function(l){function e(e){for(var t,a,n=e[0],o=e[1],r=e[2],c=0,i=[];c<n.length;c++)a=n[c],u[a]&&i.push(u[a][0]),u[a]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(l[t]=o[t]);for(p&&p(e);i.length;)i.shift()();return m.push.apply(m,r||[]),s()}function s(){for(var e,t=0;t<m.length;t++){for(var a=m[t],n=!0,o=1;o<a.length;o++){var r=a[o];0!==u[r]&&(n=!1)}n&&(m.splice(t--,1),e=c(c.s=a[0]))}return e}var a={},u={0:0},m=[];function c(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return l[e].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=l,c.c=a,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/Pomodoro";var t=window.webpackJsonp=window.webpackJsonp||[],n=t.push.bind(t);t.push=e,t=t.slice();for(var o=0;o<t.length;o++)e(t[o]);var p=n;m.push([103,1]),s()}({103:function(e,t,a){"use strict";a.r(t);var n=a(0),u=a.n(n),o=a(22),r=a.n(o),c=a(12),i=a(5),l=a(53),s="ADD_TODO",m="REMOVE_TODO",p=[{id:1,todo:"Official API reference documentation details the Node.js API"},{id:2,todo:"Hooks and Function Components"},{id:3,todo:"Design Principles"}],d=4,f=Object(i.c)({todos:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:p,t=1<arguments.length?arguments[1]:void 0;switch(t.type){case s:return e.concat({id:d++,todo:t.todo.content});case m:return e.filter(function(e){return e.id!==t.id});default:return e}}}),v=Object(i.e)(f,Object(i.d)(Object(i.a)(l.a),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e})),y=a(107),b=a(110),E=a(108),h=a(109),_=a(106),k=(a(66),{addTodo:function(e){return{type:s,todo:{id:e.id,content:e.todo}}},removeTodo:function(e){return{type:m,id:e}}}),O=a(2),N=a.n(O),w=a(105);function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function B(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function I(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var D=function(e){function n(e){var c,t,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t=this,a=j(n).call(this,e),I(B(c=!a||"object"!==T(a)&&"function"!=typeof a?B(t):a),"setTimer",function(){var e=c.state,t=e.timer,a=e.intervalID,n=e.tomato,o=e.isTakeBreak,r=t-1;return 0===(t-=1)&&!1===o?(o=!0,clearInterval(a),5<(n+=1)&&(n=0),void c.setState({timer:10,minute:0,second:10,tomato:n,intervalID:0,isClockActive:!1,isTakeBreak:o})):0===t&&!0===o?(o=!1,clearInterval(a),void c.setState({timer:10,minute:0,second:10,intervalID:0,isClockActive:!1,isTakeBreak:o})):void c.setState({timer:t,minute:Math.floor(r/60),second:r%60})}),I(B(c),"setTimerCount",function(){var e=c.state.intervalID;e=setInterval(c.setTimer,1e3),c.setState({intervalID:e,isClockActive:!0})}),I(B(c),"pauseTimerCount",function(){var e=c.state.intervalID;clearInterval(e),c.setState({isClockActive:!1})}),I(B(c),"resetTimer",function(){var e=c.state.intervalID;clearInterval(e),c.setState({timer:10,minute:0,second:10,intervalID:0,isClockActive:!1})}),I(B(c),"addNewTodo",function(){var e=document.getElementById("todo").value;if(e){var t={todo:e};c.props.actions.addTodo(t),document.getElementById("todo").value=""}}),I(B(c),"removeTodo",function(t){var e=c.state.data.filter(function(e){return e.id!==t});c.props.actions.removeTodo(t),c.setState({data:e,showTodo:!1})}),c.state={data:{},timer:10,minute:0,second:10,intervalID:0,tomato:0,isClockActive:!1,isTakeBreak:!1,showTodo:!0},c}var t,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(n,u.a.Component),t=n,(a=[{key:"componentDidMount",value:function(){var e=this.props.data;this.setState({data:e})}},{key:"componentDidUpdate",value:function(e){if(e.data!==this.props.data){var t=this.props.data;this.setState({data:t})}}},{key:"render",value:function(){for(var a=this,e=this.state,t=e.data,n=e.minute,o=e.second,r=e.isClockActive,c=e.tomato,i=e.isTakeBreak,l=(e.showTodo,[]),s=0;s<c;s++)l.push(u.a.createElement("span",{className:N.a.tomato}));return u.a.createElement("div",{className:"".concat(N.a.clockWrapper," ").concat(i?N.a["is-takeBreak"]:"")},u.a.createElement("section",{className:"content"},u.a.createElement("div",{className:"".concat(N.a.inputBlock," ").concat(i?N.a["is-takeBreak"]:"")},u.a.createElement("input",{id:"todo",className:"".concat(N.a.inputBlock_input," ").concat(i?N.a["is-takeBreak"]:""),type:"text",placeholder:"ADD A NEW MISSION…"}),u.a.createElement("span",{className:N.a.inputBlock_icon,onClick:this.addNewTodo},u.a.createElement("i",{className:"material-icons"},"add"))),u.a.createElement("div",{className:N.a.tomatoGroup},l),u.a.createElement("div",{className:"".concat(N.a.timer," ").concat(i?N.a["is-takeBreak"]:"")},u.a.createElement("span",null,n<10?"0".concat(n):n),u.a.createElement("span",null,":"),u.a.createElement("span",null,o<10?"0".concat(o):o)),u.a.createElement("div",{className:"".concat(N.a.clockOuter," ").concat(r?N.a.borderAnimation:""," ").concat(i?N.a["is-takeBreak"]:"")},u.a.createElement("div",{className:"".concat(N.a.clock," ").concat(r?N.a["is-active"]:N.a["is-stop"]," ").concat(i?N.a["is-takeBreak"]:"")},u.a.createElement("div",{className:N.a.clockBtn},u.a.createElement("span",{className:"".concat(N.a.clockBtn_play," ").concat(r?"hide":""),onClick:this.setTimerCount},u.a.createElement("i",{className:"material-icons md-light md-96"},"play_circle_filled")),u.a.createElement("span",{className:"".concat(N.a.clockBtn_pause," ").concat(r?"":"hide"," ").concat(i?N.a["is-takeBreak"]:""),onClick:this.pauseTimerCount},u.a.createElement("i",{className:"material-icons md-96"},"pause_circle_filled")),u.a.createElement("span",{className:"".concat(N.a.clockBtn_stop," ").concat(r?i?N.a["is-takeBreak"]:N.a["is-active"]:""),onClick:this.resetTimer},u.a.createElement("i",{className:"material-icons md-24"},"stop"))))),u.a.createElement(h.a,{className:N.a.todoList},0<t.length?t.map(function(e,t){return t<3?u.a.createElement(_.a,{key:t,timeout:600,classNames:"todo"},u.a.createElement("span",{key:t,className:N.a.todo},e.todo,u.a.createElement("i",{className:"material-icons",onClick:function(){return a.removeTodo(e.id)}},"cancel"))):""}):null)),u.a.createElement("aside",{className:"sidebar"},u.a.createElement("ul",{className:N.a.list},u.a.createElement("li",null,u.a.createElement(w.a,{to:"/todo"},u.a.createElement("i",{className:"material-icons md-36"},"list"))),u.a.createElement("li",null,u.a.createElement("i",{className:"material-icons md-36"},"assessment")),u.a.createElement("li",null,u.a.createElement("i",{className:"material-icons md-36"},"library_music"))),u.a.createElement("span",{className:N.a.text},"POMODORO")))}}])&&S(t.prototype,a),o&&S(t,o),n}(),P=Object(c.b)(function(e){return{data:e?e.todos:"empty"}},function(e){return{actions:Object(i.b)(k,e)}})(D),C=a(7),x=a.n(C);function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function L(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function X(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function F(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var J=function(e){function o(e){var a,t,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),t=this,n=M(o).call(this,e),F(X(a=!n||"object"!==A(n)&&"function"!=typeof n?X(t):n),"addNewTodo",function(){var e=document.getElementById("todo").value;if(e){var t={todo:e};a.props.actions.addTodo(t),document.getElementById("todo").value=""}}),F(X(a),"removeTodo",function(t){var e=a.state.data.filter(function(e){return e.id!==t});a.props.actions.removeTodo(t),a.setState({data:e})}),a.state={data:{}},a}var t,a,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(o,u.a.Component),t=o,(a=[{key:"componentDidMount",value:function(){var e=this.props.data;this.setState({data:e})}},{key:"componentDidUpdate",value:function(e){if(e.data!==this.props.data){var t=this.props.data;this.setState({data:t})}}},{key:"render",value:function(){var a=this,e=this.state.data;return u.a.createElement("div",{className:"".concat(x.a.wrapper)},u.a.createElement(w.a,{to:"/",className:x.a.closeBtn},u.a.createElement("i",{className:"material-icons md-48"},"close")),u.a.createElement("div",{className:x.a.titleIcon},u.a.createElement("i",{className:"material-icons md-36"},"list")),u.a.createElement("div",{className:x.a.title},"TO-DO LIST"),u.a.createElement("div",{className:"".concat(x.a.inputBlock)},u.a.createElement("input",{id:"todo",className:"".concat(x.a.inputBlock_input),type:"text",placeholder:"ADD A NEW MISSION…"}),u.a.createElement("span",{className:x.a.inputBlock_icon,onClick:this.addNewTodo},u.a.createElement("i",{className:"material-icons"},"add"))),u.a.createElement("div",{className:x.a.todoList},u.a.createElement("div",{className:x.a.todoList_title},u.a.createElement("span",null,"TO-DO"),u.a.createElement("i",{className:"material-icons"},"expand_less")),u.a.createElement(h.a,{className:x.a.todoList_content},0<e.length?e.map(function(e,t){return u.a.createElement(_.a,{key:t,timeout:600,classNames:"todo"},u.a.createElement("li",{key:t},u.a.createElement("span",null,e.todo),u.a.createElement("i",{className:"material-icons md-light",onClick:function(){return a.removeTodo(e.id)}},"cancel")))}):null)),u.a.createElement("div",{className:x.a.circleSpeech},u.a.createElement("span",null,"do not have to worry about failure.")),u.a.createElement("span",{className:x.a.text},"POMODORO"))}}])&&L(t.prototype,a),n&&L(t,n),o}(),K=Object(c.b)(function(e){return{data:e?e.todos:"empty"}},function(e){return{actions:Object(i.b)(k,e)}})(J);a(69),a(90),a(100);function H(e){return(H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function W(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function z(e,t){return!t||"object"!==H(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function G(e){return(G=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Q(e,t){return(Q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Z=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),z(this,G(t).call(this,e))}var a,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Q(e,t)}(t,u.a.Component),a=t,(n=[{key:"render",value:function(){return u.a.createElement(y.a,null,u.a.createElement("div",{className:"wrapper"},u.a.createElement(b.a,{render:function(e){var t=e.location;return u.a.createElement(h.a,null,u.a.createElement(_.a,{key:t.pathname,timeout:600,classNames:"fade"},u.a.createElement(E.a,{location:t},u.a.createElement(b.a,{exact:!0,path:"/",component:P}),u.a.createElement(b.a,{path:"/todo",component:K}))))}})))}}])&&W(a.prototype,n),o&&W(a,o),t}(),U=Object(c.b)(function(e){return{value:e}},function(e){return{actions:Object(i.b)(k,e)}})(Z);r.a.render(u.a.createElement(c.a,{store:v},u.a.createElement(U,null)),document.getElementById("app"))},2:function(e,t,a){e.exports={clockWrapper:"_1TIhriwNl6P5oRN4mJRos_","is-takeBreak":"_3wvXGOK93Pju91H-FaiXfI",inputBlock:"_2nrtWLku9tD4EKhiTWkw1g",inputBlock_input:"hvs3UdZrZlsutX_y7gfHM",inputBlock_icon:"uQEs5hcadQIIXa2Ckmi1d",tomatoGroup:"JtTc_T7ThVTpmb3LjjNft",tomato:"_2wFfdK3Hih5iiqkJCERVsG",timer:"_2AY0TIDEeDwu5AAfPnKn9L",clockOuter:"Z28_gI5nvzyx9W7mfbCy_",borderAnimation:"_1TvlKQXGMyDL8tMcMHkQ2h",borderScale:"_3Uk0XImppYFUSHPB8KF_LJ",clock:"r-cywRmBtQyDovsh2a35y","is-active":"_1GbYwKv7qrALVjIGB4xHNE",clockBtn:"_2R9Jvu4yBzwAU7zkea2uJM",clockBtn_play:"_17WCEiVaxYJx0jaVAlCKvT",clockBtn_pause:"_3ooXZaYEzfHhnjt1LoJCOZ",clockBtn_stop:"_1f7uV5de8Xl-dySjQujbFo",todoList:"mNB9u5GXWS7_SQmmKDFl3",todo:"_3E50I24sA4b9vxzxX5SisA",list:"_3c-WpQJt3FbKRx1KXv3yFq",text:"_27IlFLxn_Iv6G3oNFHwgo2"}},7:function(e,t,a){e.exports={wrapper:"_2KokrdoFAqWlXMwzJNNN73",closeBtn:"_1QY7oK6Bn1lhoIT11P4HEC",inputBlock:"_3k5OVOSM8TfR2ncpywKl3J",inputBlock_input:"w2uimFa0MXYzZb9EJ8rLx",inputBlock_icon:"_5iw3_AzG6_RSvzhGSh6-6",title:"_1hBwPo8Ztd7har91o0DrD9",titleIcon:"f5Qjnvito7AvrqS-nz-Z3",todoList:"_2QnTVxmXadRPHel7OIB5FP",todoList_title:"_3TboJhXT8HnKZP-qxckAYl",todoList_content:"pW2RUH8c1SsYn3hnXzD7Z",circleSpeech:"_1xRSrb1tO_pB0n-ETLzUEM",text:"_1P8W97Gb-Zr3aiU3XTQFZc"}}});