(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{14:function(e,t,s){e.exports={"employees-page":"Employees_employees-page__O-6yL","employees-page__list":"Employees_employees-page__list__1Q7YS","employees-page__list__title":"Employees_employees-page__list__title__3iUVD","employees-page__birthday":"Employees_employees-page__birthday__12gjT","employees-page__birthday__title":"Employees_employees-page__birthday__title__13LEo"}},15:function(e,t,s){e.exports={"birthdays-list__message":"BirthdaysList_birthdays-list__message__2gn_b","birthdays-list__month":"BirthdaysList_birthdays-list__month__2jESj","birthdays-list__item":"BirthdaysList_birthdays-list__item__RxoLd","birthdays-list__item__info":"BirthdaysList_birthdays-list__item__info__2fqh4"}},70:function(e,t,s){},71:function(e,t,s){"use strict";s.r(t);var a=s(0),i=s(18),r=s.n(i),l=s(9),n=s(39),c=s(3),_="/employees",o=s(21),m="FETCH_USERS_SUCCESS",p="FETCH_USERS_REJECTED",y="FETCH_USERS_PENDING",d="SELECT_NEW_EMPLOYEE",u="DELETE_EMPLOYEE_ID",b=s(8),j=s.n(b),h=s(1),O=function(e){var t=e.sortedEmployees,s=Object(l.b)(),a=Object(l.c)((function(e){return e})).employees.selectedIds,i=function(e){s(function(e){return{type:d,payload:{id:e}}}(e)),localStorage.setItem("selectedUsers",JSON.stringify([].concat(Object(o.a)(a),[e])))},r=function(e){s(function(e){return{type:u,payload:{id:e}}}(e));var t=a.filter((function(t){return t!==e}));localStorage.setItem("selectedUsers",JSON.stringify(t))};return Object(h.jsx)("div",{className:j.a["employees-list"],children:t.map((function(e,t){return Object(h.jsxs)("div",{className:j.a["employees-list__box"],children:[Object(h.jsx)("div",{className:j.a["employees-list__letter"],children:e.letter}),Object(h.jsx)("div",{className:j.a["employees-list__box__card"],children:e.array.map((function(t){return e.isEmpty?Object(h.jsx)("div",{className:j.a["employees-list__item"],children:t},e.letter):Object(h.jsxs)("div",{className:j.a["employees-list__item"],children:[Object(h.jsxs)("div",{className:"".concat(j.a["employees-list__item__name"]," ").concat(a.includes(t.id)&&j.a["employees-list__item__name--active"]),children:[t.lastName,"\xa0",t.firstName]}),Object(h.jsxs)("div",{className:j.a["employees-list__item__input"],onClick:function(){return r(t.id)},children:[Object(h.jsx)("label",{className:j.a["employees-list__item__input__notactive"],children:"not active"}),Object(h.jsx)("input",{type:"radio",value:"notactive",checked:!a.includes(t.id),readOnly:!0})]}),Object(h.jsxs)("div",{className:j.a["employees-list__item__input"],onClick:function(){return i(t.id)},children:[Object(h.jsx)("label",{className:j.a["employees-list__item__input__active"],children:"active"}),Object(h.jsx)("input",{type:"radio",value:"active",checked:a.includes(t.id),readOnly:!0})]})]},t.id)}))})]},t)}))})},f=s(24),v=s.n(f),g=s(35),E=s(36),x=s.n(E).a.create({baseURL:"https://yalantis-react-school-api.yalantis.com}/api"}),N=s(14),L=s.n(N),S=function(){return Object(l.c)((function(e){return e})).employees.pending&&Object(h.jsx)("div",{children:"Loading..."})},I="abcdefghijklmnopqrstuvwxyz".toUpperCase().split(""),J=s(40),M=["March","April","May","June","July","August","September","October","November","December","January","February"],T=["January","February","March","April","May","June","July","August","September","October","November","December"],U=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],C=s(15),D=s.n(C),k=function(e){var t=e.employeesList,s=Object(a.useState)(JSON.parse(localStorage.getItem("selectedUsers")||"[]")),i=Object(J.a)(s,2),r=i[0],n=i[1],c=Object(l.c)((function(e){return e})).employees.selectedIds;Object(a.useEffect)((function(){n(JSON.parse(localStorage.getItem("selectedUsers")||"[]"))}),[c]);var _=Object(a.useMemo)((function(){return t.filter((function(e){return r.includes(e.id)}))}),[r]),o=Object(a.useMemo)((function(){return function(e){for(var t={month:"",array:[],days:[],years:[]},s=[],a=0;a<M.length;a++){t.month=M[a];for(var i=0;i<e.length;i++){var r=new Date(e[i].dob),l=U[r.getDay()],n=T[r.getMonth()],c=r.getFullYear();n===M[a]&&(t.array.push(e[i]),t.days.push(l),t.years.push(c))}var _=t.array.sort((function(e,t){return e.lastName>t.lastName?1:-1}));t.array=_,s.push(t),t={month:"",array:[],days:[],years:[]}}return s}(_)}),[_]),m=!0;return Object(h.jsxs)("div",{className:D.a["birthdays-list"],children:[o.map((function(e,t){return 0!==e.array.length&&Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:D.a["birthdays-list__month"],children:e.month}),e.array.map((function(t,s){return m=!1,Object(h.jsx)("div",{className:D.a["birthdays-list__item"],children:Object(h.jsxs)("div",{className:D.a["birthdays-list__item__info"],children:["\u25cf\xa0",t.lastName,"\xa0",t.firstName," - ",e.days[s]," ",e.month,",\xa0",e.years[s]," year"]})},t.id)}))]},t)})),m&&Object(h.jsx)("div",{className:D.a["birthdays-list__message"],children:"Employees List is empty"})]})},w=function(){var e=Object(l.b)();Object(a.useEffect)((function(){e(function(){var e=Object(g.a)(v.a.mark((function e(t){var s;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:y}),e.prev=1,e.next=4,x.get("/task0/users");case 4:s=e.sent,t((i=s.data,{type:m,payload:{data:i}})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t((a=e.t0.message,{type:p,payload:{error:a}}));case 11:case"end":return e.stop()}var a,i}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())}),[]);var t=Object(l.c)((function(e){return e})).employees.employeesList,s=Object(a.useMemo)((function(){return function(e){for(var t=[],s={letter:"",array:[],isEmpty:!1},a=!1,i=e.sort((function(e,t){return e.lastName>t.lastName?1:-1})),r=0;r<I.length;r++){s.letter=I[r];for(var l=0;l<i.length;l++)I[r]===i[l].lastName[0]&&(a=!0,s.array.push(i[l]));a||(s.letter=I[r],s.array=["_ _ _ _"],s.isEmpty=!0),a=!1,t.push(s),s={letter:"",array:[],isEmpty:!1}}return t}(t)}),[t]);return Object(h.jsx)("div",{className:L.a["employees-page"],children:0!==t.length?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:L.a["employees-page__list"],children:[Object(h.jsx)("div",{className:L.a["employees-page__list__title"],children:"Employees"}),Object(h.jsx)(O,{sortedEmployees:s})]}),Object(h.jsxs)("div",{className:L.a["employees-page__birthday"],children:[Object(h.jsx)("div",{className:L.a["employees-page__birthday__title"],children:"Employees birthday"}),Object(h.jsx)(k,{employeesList:t})]})]}):Object(h.jsx)(S,{})})};var F=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(c.d,{children:[Object(h.jsx)(c.b,{path:_,component:w}),Object(h.jsx)(c.a,{to:_})]})})},R=s(13),B=s(37),A=s(38),P=s(11),Y={employeesList:[],error:"",pending:!1,selectedIds:JSON.parse(localStorage.getItem("selectedUsers")||"[]")},H=Object(R.combineReducers)({employees:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(P.a)(Object(P.a)({},e),{},{employeesList:t.payload.data,error:null,pending:!1});case p:return Object(P.a)(Object(P.a)({},e),{},{error:t.payload.error,employeesList:[],pending:!1});case y:return Object(P.a)(Object(P.a)({},e),{},{error:null,employeesList:[],pending:!0});case d:return Object(P.a)(Object(P.a)({},e),{},{selectedIds:[].concat(Object(o.a)(e.selectedIds),[t.payload.id])});case u:return Object(P.a)(Object(P.a)({},e),{},{selectedIds:e.selectedIds.filter((function(e){return e!==t.payload.id}))});default:return e}}}),W=Object(R.createStore)(H,Object(B.composeWithDevTools)(Object(R.applyMiddleware)(A.a)));s(70);r.a.render(Object(h.jsx)(n.a,{children:Object(h.jsx)(l.a,{store:W,children:Object(h.jsx)(F,{})})}),document.getElementById("root"))},8:function(e,t,s){e.exports={"employees-list":"ListOfEmployees_employees-list__j0Elr","employees-list__box__card":"ListOfEmployees_employees-list__box__card__3padu","employees-list__letter":"ListOfEmployees_employees-list__letter__1GbA1","employees-list__item":"ListOfEmployees_employees-list__item__2YB1l","employees-list__item__name":"ListOfEmployees_employees-list__item__name__DCfTP","employees-list__item__name--active":"ListOfEmployees_employees-list__item__name--active__1R-tb","employees-list__item__input":"ListOfEmployees_employees-list__item__input__3yXBn","employees-list__item__input__notactive":"ListOfEmployees_employees-list__item__input__notactive__11N7s","employees-list__item__input__active":"ListOfEmployees_employees-list__item__input__active__3SPTc"}}},[[71,1,2]]]);
//# sourceMappingURL=main.36f8ab93.chunk.js.map