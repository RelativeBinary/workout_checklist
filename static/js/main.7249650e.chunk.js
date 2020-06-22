(this["webpackJsonpworkout-checklist"]=this["webpackJsonpworkout-checklist"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var a=c(0),r=c.n(a),n=c(6),s=c.n(n),o=(c(12),c(2)),i=c(3),l=c(15),d=function(e,t){switch(t.type){case"ADD_WORKOUT":return[].concat(Object(o.a)(e),[{title:t.workout.title,desc:t.workout.desc,id:Object(l.a)(),checked:!1}]);case"REMOVE_WORKOUT":return e.filter((function(e){return e.id!==t.id}));case"CHECK_WORKOUT":var c=e.findIndex((function(e){return e.id===t.id})),a=Object(o.a)(e);return a[c]={title:e[c].title,desc:e[c].desc,id:e[c].id,checked:!e[c].checked},a;default:return e}},u=[{title:"Forearm Curls",desc:"3sets, 20reps on each arm",id:"0dc1b233-704e-4e7f-af67-70936675516a",checked:!1},{title:"Reverse Forearm Curls",desc:"3sets, 20reps on each arm",id:"caaa03cc-1bb5-4894-ab29-1e718c44d9b2",checked:!1},{title:"Barbell Bench Press",desc:"3sets, 15reps, >5kg, chest",id:"c871163e-cb56-4562-985a-0ada7e732ea1",checked:!1},{title:"Pistol Squats",desc:"3sets, 10reps, focus on good form and low dips",id:"8d6f8802-58e1-4b33-991c-59e3a1f4bfc2",checked:!1},{title:"Dips",desc:"3sets, 5-8reps, shoulders, triceps",id:"2dff98d9-8b7d-41ee-96cd-b7806b4664b2",checked:!1},{title:"Dragon Flag Progression",desc:"1set 10reps enhanced leg raise, 2set 5reps ab crawl outs",id:"6b72e17e-3a1e-43ea-a46d-60cd164bcfe8",checked:!1},{title:"Push ups",desc:"3sets, 15reps, wide for chest, diamond for triceps",id:"cc38e224-f56d-4d66-9948-9d9b61d12ac7",checked:!1},{title:"Pull ups",desc:"3sets, 5reps",id:"fa98c613-bf66-4049-ae10-1fe91a7f7a3c",checked:!1},{title:"Cabel Machine",desc:"3sets, 10reps",id:"a65f82df-1052-4910-9ce6-c72ad0453fc6",checked:!0},{title:"Jump rope, Chain Punching, Kicks",desc:"15mins",id:"dcb37905-9870-4c8c-9c17-7572e9ae78d8",checked:!1}],m=Object(a.createContext)(),f=function(e){console.log(u);var t=Object(a.useReducer)(d,Object(o.a)(u),(function(){var e=localStorage.getItem("workouts");return e?JSON.parse(e):[]})),c=Object(i.a)(t,2),n=c[0],s=c[1];return Object(a.useEffect)((function(){localStorage.setItem("workouts",JSON.stringify(n))}),[n]),Object(a.useEffect)((function(){for(var e=!0,t=0;t<n.length;t++)if(!1===n[t].checked){e=!1;break}if(!0===e&&n.length>0){alert("Great Work! Remember Strength Comes From Within!");for(var c=0;c<n.length;c++)s({type:"CHECK_WORKOUT",id:n[c].id})}}),[n]),r.a.createElement(m.Provider,{value:{workouts:n,dispatch:s}},e.children)},h=function(){var e=Object(a.useContext)(m).workouts;return r.a.createElement("div",{className:"navbar"},r.a.createElement("h1",null,"Workout Routine"),r.a.createElement("p",null,"Currently you have ",e.length," excercises in your routine"))},p=function(e){var t=e.workout,c=Object(a.useContext)(m).dispatch;return r.a.createElement("li",null,r.a.createElement("span",null,r.a.createElement("div",{className:"title"},t.title),r.a.createElement("div",{className:"desc"},t.desc),r.a.createElement("div",{className:t.checked?"checked":""},t.checked?"true":"false")),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"done",onClick:function(){return c({type:"CHECK_WORKOUT",id:t.id})}},"DONE"),r.a.createElement("div",{className:"remove",onClick:function(){return c({type:"REMOVE_WORKOUT",id:t.id})}},"REMOVE")))},k=function(){var e=Object(a.useContext)(m).workouts;return e.length?r.a.createElement("div",{className:"workout-list"},r.a.createElement("ul",null,e.map((function(e){return r.a.createElement(p,{workout:e,key:e.id})})))):r.a.createElement("div",{className:"empty"},"No exercises in your list!")},b=function(){var e=Object(a.useContext)(m).dispatch,t=Object(a.useState)(""),c=Object(i.a)(t,2),n=c[0],s=c[1],o=Object(a.useState)(""),l=Object(i.a)(o,2),d=l[0],u=l[1];return r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e({type:"ADD_WORKOUT",workout:{title:n,desc:d}}),s(""),u("")}},r.a.createElement("input",{type:"text",placeholder:"workout title",value:n,onChange:function(e){return s(e.target.value)},required:!0}),r.a.createElement("input",{type:"text",placeholder:"workout description",value:d,onChange:function(e){return u(e.target.value)},required:!0}),r.a.createElement("input",{type:"submit",value:"add workout"}))};var E=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,null,r.a.createElement(h,null),r.a.createElement(k,null),r.a.createElement(b,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,c){e.exports=c(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.7249650e.chunk.js.map