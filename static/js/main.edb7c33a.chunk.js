(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{14:function(e,t,s){e.exports={"employees-page":"Employees_employees-page__O-6yL","employees-page__list":"Employees_employees-page__list__1Q7YS","employees-page__list__title":"Employees_employees-page__list__title__3iUVD","employees-page__birthday":"Employees_employees-page__birthday__12gjT","employees-page__birthday__title":"Employees_employees-page__birthday__title__13LEo"}},15:function(e,t,s){e.exports={"birthdays-list__message":"BirthdaysList_birthdays-list__message__2gn_b","birthdays-list__month":"BirthdaysList_birthdays-list__month__2jESj","birthdays-list__item":"BirthdaysList_birthdays-list__item__RxoLd","birthdays-list__item__info":"BirthdaysList_birthdays-list__item__info__2fqh4"}},67:function(e,t,s){},68:function(e,t,s){"use strict";s.r(t);var a=s(0),i=s(17),r=s.n(i),l=s(9),n=s(37),_=s(3),c=s(19),o="FETCH_USERS_SUCCESS",m="FETCH_USERS_REJECTED",p="FETCH_USERS_PENDING",y="SELECT_NEW_EMPLOYEE",d="DELETE_EMPLOYEE_ID",u=s(8),b=s.n(u),j=s(1),h=function(e){var t=e.sortedEmployees,s=Object(l.b)(),a=Object(l.c)((function(e){return e})).employees.selectedIds,i=function(e){s(function(e){return{type:y,payload:{id:e}}}(e)),localStorage.setItem("selectedUsers",JSON.stringify([].concat(Object(c.a)(a),[e])))},r=function(e){s(function(e){return{type:d,payload:{id:e}}}(e));var t=a.filter((function(t){return t!==e}));localStorage.setItem("selectedUsers",JSON.stringify(t))};return Object(j.jsx)("div",{className:b.a["employees-list"],children:t.map((function(e,t){return Object(j.jsxs)("div",{className:b.a["employees-list__box"],children:[Object(j.jsx)("div",{className:b.a["employees-list__letter"],children:e.letter}),Object(j.jsx)("div",{className:b.a["employees-list__box__card"],children:e.array.map((function(t){return e.isEmpty?Object(j.jsx)("div",{className:b.a["employees-list__item"],children:t},e.letter):Object(j.jsxs)("div",{className:b.a["employees-list__item"],children:[Object(j.jsxs)("div",{className:"".concat(b.a["employees-list__item__name"]," ").concat(a.includes(t.id)&&b.a["employees-list__item__name--active"]),children:[t.lastName,"\xa0",t.firstName]}),Object(j.jsxs)("div",{className:b.a["employees-list__item__input"],onClick:function(){return r(t.id)},children:[Object(j.jsx)("label",{className:b.a["employees-list__item__input__notactive"],children:"not active"}),Object(j.jsx)("input",{type:"radio",value:"notactive",checked:!a.includes(t.id),readOnly:!0})]}),Object(j.jsxs)("div",{className:b.a["employees-list__item__input"],onClick:function(){return i(t.id)},children:[Object(j.jsx)("label",{className:b.a["employees-list__item__input__active"],children:"active"}),Object(j.jsx)("input",{type:"radio",value:"active",checked:a.includes(t.id),readOnly:!0})]})]},t.id)}))})]},t)}))})},O=s(22),f=s.n(O),v=s(33),E=s(34),g=s.n(E).a.create({baseURL:"https://yalantis-react-school-api.yalantis.com/api"}),x=s(14),N=s.n(x),L=function(){return Object(l.c)((function(e){return e})).employees.pending&&Object(j.jsx)("div",{children:"Loading..."})},S="abcdefghijklmnopqrstuvwxyz".toUpperCase().split(""),I=["March","April","May","June","July","August","September","October","November","December","January","February"],J=["January","February","March","April","May","June","July","August","September","October","November","December"],C=s(15),D=s.n(C),M=function(e){var t=e.employeesList,s=Object(l.c)((function(e){return e})).employees.selectedIds,i=Object(a.useMemo)((function(){return t.filter((function(e){return s.includes(e.id)}))}),[s]),r=Object(a.useMemo)((function(){return function(e){for(var t={month:"",array:[],days:[],years:[]},s=[],a=0;a<I.length;a++){t.month=I[a];for(var i=0;i<e.length;i++){var r=new Date(e[i].dob),l=r.getDate(),n=J[r.getMonth()],_=r.getFullYear();n===I[a]&&(t.array.push(e[i]),t.days.push(l),t.years.push(_))}var c=t.array.sort((function(e,t){return e.lastName>t.lastName?1:-1}));t.array=c,s.push(t),t={month:"",array:[],days:[],years:[]}}return s}(i)}),[i]),n=!0;return Object(j.jsxs)("div",{className:D.a["birthdays-list"],children:[r.map((function(e,t){return 0!==e.array.length&&Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:D.a["birthdays-list__month"],children:e.month}),e.array.map((function(t,s){return n=!1,Object(j.jsx)("div",{className:D.a["birthdays-list__item"],children:Object(j.jsxs)("div",{className:D.a["birthdays-list__item__info"],children:["\u25cf\xa0",t.lastName,"\xa0",t.firstName," - ",e.days[s]," ",e.month,",\xa0",e.years[s]," year"]})},t.id)}))]},t)})),n&&Object(j.jsx)("div",{className:D.a["birthdays-list__message"],children:"Employees List is empty"})]})},k=function(){var e=Object(l.b)();Object(a.useEffect)((function(){e(function(){var e=Object(v.a)(f.a.mark((function e(t){var s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:p}),e.prev=1,e.next=4,g.get("/task0/users");case 4:s=e.sent,t((i=s.data,{type:o,payload:{data:i}})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t((a=e.t0.message,{type:m,payload:{error:a}}));case 11:case"end":return e.stop()}var a,i}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())}),[]);var t=Object(l.c)((function(e){return e})).employees,s=t.employeesList,i=t.pending,r=Object(a.useMemo)((function(){return function(e){for(var t=[],s={letter:"",array:[],isEmpty:!1},a=!1,i=e.sort((function(e,t){return e.lastName>t.lastName?1:-1})),r=0;r<S.length;r++){s.letter=S[r];for(var l=0;l<i.length;l++)S[r]===i[l].lastName[0]&&(a=!0,s.array.push(i[l]));a||(s.letter=S[r],s.array=["_ _ _ _"],s.isEmpty=!0),a=!1,t.push(s),s={letter:"",array:[],isEmpty:!1}}return t}(s)}),[s]);return i?Object(j.jsx)(L,{}):Object(j.jsxs)("div",{className:N.a["employees-page"],children:[Object(j.jsxs)("div",{className:N.a["employees-page__list"],children:[Object(j.jsx)("div",{className:N.a["employees-page__list__title"],children:"Employees"}),Object(j.jsx)(h,{sortedEmployees:r})]}),Object(j.jsxs)("div",{className:N.a["employees-page__birthday"],children:[Object(j.jsx)("div",{className:N.a["employees-page__birthday__title"],children:"Employees birthday"}),Object(j.jsx)(M,{employeesList:s})]})]})};var T=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(_.d,{children:[Object(j.jsx)(_.b,{path:"/tt_employees",component:k}),Object(j.jsx)(_.a,{to:"/tt_employees"})]})})},U=s(13),w=s(35),R=s(36),B=s(11),A={employeesList:[],error:"",pending:!1,selectedIds:JSON.parse(localStorage.getItem("selectedUsers")||"[]")},F=Object(U.combineReducers)({employees:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return Object(B.a)(Object(B.a)({},e),{},{employeesList:t.payload.data,error:null,pending:!1});case m:return Object(B.a)(Object(B.a)({},e),{},{error:t.payload.error,employeesList:[],pending:!1});case p:return Object(B.a)(Object(B.a)({},e),{},{error:null,employeesList:[],pending:!0});case y:return Object(B.a)(Object(B.a)({},e),{},{selectedIds:[].concat(Object(c.a)(e.selectedIds),[t.payload.id])});case d:return Object(B.a)(Object(B.a)({},e),{},{selectedIds:e.selectedIds.filter((function(e){return e!==t.payload.id}))});default:return e}}}),P=Object(U.createStore)(F,Object(w.composeWithDevTools)(Object(U.applyMiddleware)(R.a)));s(67);r.a.render(Object(j.jsx)(n.a,{children:Object(j.jsx)(l.a,{store:P,children:Object(j.jsx)(T,{})})}),document.getElementById("root"))},8:function(e,t,s){e.exports={"employees-list":"ListOfEmployees_employees-list__j0Elr","employees-list__box__card":"ListOfEmployees_employees-list__box__card__3padu","employees-list__letter":"ListOfEmployees_employees-list__letter__1GbA1","employees-list__item":"ListOfEmployees_employees-list__item__2YB1l","employees-list__item__name":"ListOfEmployees_employees-list__item__name__DCfTP","employees-list__item__name--active":"ListOfEmployees_employees-list__item__name--active__1R-tb","employees-list__item__input":"ListOfEmployees_employees-list__item__input__3yXBn","employees-list__item__input__notactive":"ListOfEmployees_employees-list__item__input__notactive__11N7s","employees-list__item__input__active":"ListOfEmployees_employees-list__item__input__active__3SPTc"}}},[[68,1,2]]]);
//# sourceMappingURL=main.edb7c33a.chunk.js.map