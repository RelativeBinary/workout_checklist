(this["webpackJsonpworkout-checklist"]=this["webpackJsonpworkout-checklist"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(5),o=n.n(a),l=(n(12),n(6)),i=n(3),u=n(15),s=function(e,t){switch(t.type){case"ADD_WORKOUT":return[].concat(Object(i.a)(e),[{title:t.workout.title,desc:t.workout.desc,id:Object(u.a)(),checked:!1}]);case"REMOVE_WORKOUT":return e.filter((function(e){return e.id!==t.id}));case"CHECK_WORKOUT":var n=e.findIndex((function(e){return e.id===t.id})),r=Object(i.a)(e);return r[n]={title:e[n].title,desc:e[n].desc,id:e[n].id,checked:!e[n].checked},r;default:return e}},d=Object(r.createContext)(),m=function(e){var t=Object(r.useReducer)(s,[],(function(){var e=localStorage.getItem("workouts");return e?JSON.parse(e):[]})),n=Object(l.a)(t,2),a=n[0],o=n[1];return Object(r.useEffect)((function(){localStorage.setItem("workouts",JSON.stringify(a))}),[a]),c.a.createElement(d.Provider,{value:{workouts:a,dispatch:o}},e.children)},E=function(){var e=Object(r.useContext)(d).workouts;return c.a.createElement("div",{className:"navbar"},c.a.createElement("h1",null,"Workout Routine"),c.a.createElement("p",null,"Currently you have ",e.length," excercises in your routine"))},f=function(e){var t=e.workout,n=Object(r.useContext)(d).dispatch;return c.a.createElement("li",null,c.a.createElement("span",{onClick:function(e){e.preventDefault(),n({type:"CHECK_WORKOUT",id:t.id})}},c.a.createElement("div",null,t.title),c.a.createElement("div",null,t.desc),c.a.createElement("div",null,t.checked?"true":"false")),c.a.createElement("div",{onClick:function(){return n({type:"REMOVE_WORKOUT",id:t.id})}},"REMOVE"))},k=function(){var e=Object(r.useContext)(d).workouts;return e.length?c.a.createElement("div",{className:"workout-list"},c.a.createElement("ul",null,e.map((function(e){return c.a.createElement(f,{workout:e,key:e.id})})))):c.a.createElement("div",{className:"empty"},"No exercises in your list!")};var v=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(m,null,c.a.createElement(E,null),c.a.createElement(k,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.3dc3b85f.chunk.js.map