(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{13:function(t,e,n){t.exports={contactList:"ContactsList_contactList__2mxFE",ContactsListItem:"ContactsList_ContactsListItem__KmIrl",button:"ContactsList_button__N8L7x",container:"ContactsList_container__13AR4"}},15:function(t,e,n){t.exports={form:"SearchForm_form__2X9DX",input:"SearchForm_input__2GUp7",button:"SearchForm_button__3VmeW","Header-appear":"SearchForm_Header-appear__EROcC","Header-appear-active":"SearchForm_Header-appear-active__1Rzcq"}},20:function(t,e,n){t.exports={container:"style_container__3xPYq",title:"style_title__1djQE"}},24:function(t,e,n){t.exports={input:"Filter_input__3wC-f",FilterForm:"Filter_FilterForm__I3Wtf"}},31:function(t,e,n){t.exports={enter:"pop_enter__2k2iN",enterActive:"pop_enterActive__3AmJO",exit:"pop_exit__24wnp",exitActive:"pop_exitActive__cRmod"}},32:function(t,e,n){t.exports={title:"Notify_title__2FZ23"}},33:function(t,e,n){t.exports={enter:"message_enter__1Cp9w",enterActive:"message_enterActive__3iXfk",exit:"message_exit__8z90h",exitActive:"message_exitActive__1EfYc"}},34:function(t,e,n){t.exports={enter:"pop_enter__3pW8X",enterActive:"pop_enterActive__1guUR",exit:"pop_exit__2n9wp",exitActive:"pop_exitActive__3MrbE"}},40:function(t,e,n){t.exports=n(65)},63:function(t,e,n){},64:function(t,e,n){},65:function(t,e,n){"use strict";n.r(e);var a,c=n(0),r=n.n(c),o=n(10),i=n.n(o),u=n(5),l=n(1),s=n(4),m=n(8),p=n(12),_=n(35),f=Object(l.c)({contacts:[]},(a={},Object(m.a)(a,"contactApp/ADD_CONTACT",(function(t,e){var n=[e.payload].concat(Object(_.a)(t.contacts));return Object(p.a)({},t,{contacts:n})})),Object(m.a)(a,"contactApp/REMOVE_CONTACT",(function(t,e){var n=t.contacts.filter((function(t){return t.id!==e.payload}));return Object(p.a)({},t,{contacts:n})})),a)),b=Object(l.c)("",Object(m.a)({},"contactApp/SHOW_NOTIFY",(function(t,e){return e.payload}))),h=Object(l.c)("",Object(m.a)({},"filter/FILTERED",(function(t,e){return e.payload}))),d=Object(s.combineReducers)({contacts:f,filter:h,notify:b});var E=function(){try{var t=localStorage.getItem("state");return null===t?null:JSON.parse(t)}catch(e){return e}}(),O=Object(l.a)({reducer:d,preloadedState:E});O.subscribe((function(){return function(t){try{var e=JSON.stringify(t);localStorage.setItem("state",e)}catch(n){return n}}(O.getState())}));var v=O,C=n(66),g=n(67),N=Object(l.b)("contactApp/ADD_CONTACT"),x=Object(l.b)("contactApp/REMOVE_CONTACT"),A=Object(l.b)("contactApp/SET_TO_LOCAL_STORAGE"),j=Object(l.b)("contactApp/SHOW_NOTIFY"),y=n(18),F=function(t){return t.contacts.contacts},S=function(t){return t.filter},I=Object(y.a)([F,S],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),L=function(t){return t.notify},T=n(28),w=n(29),D=n(36),k=n(30),R=n(37),H=n(19),J=n.n(H),M=n(15),W=n.n(M),X={name:"",number:""},Y=function(t){function e(){var t,n;Object(T.a)(this,e);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(D.a)(this,(t=Object(k.a)(e)).call.apply(t,[this].concat(c)))).state=Object(p.a)({},X),n.nameInputId=J.a.generate(),n.numberInputId=J.a.generate(),n.handleChange=function(t){n.setState(Object(m.a)({},t.target.name,t.target.value))},n.handleSubmit=function(t){t.preventDefault();var e,a=n.state,c=a.name,r=a.number,o=n.props,i=o.contacts,u=o.showNotifyMessage,l=function(){u(e),setTimeout((function(){return u("")}),1500)};i.find((function(t){return t.name.toLowerCase()===c.toLowerCase()}))?(e="".concat(c," is already in contacts"),l()):c&&r?n.props.onChangeSubmit({id:J.a.generate(),name:n.state.name,number:Number(n.state.number)}):(e="Fill in the field please!",l()),n.reset()},n.reset=function(){n.setState(Object(p.a)({},X))},n}return Object(R.a)(e,t),Object(w.a)(e,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts");t&&(0,this.props.setContactsFromLS)(JSON.parse(t))}},{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return r.a.createElement("div",null,r.a.createElement("form",{className:W.a.form,onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:this.nameInputId},"Name",r.a.createElement("input",{className:W.a.input,placeholder:"Add Contact",type:"text",value:e,onChange:this.handleChange,id:this.nameInputId,name:"name"})),r.a.createElement("label",{htmlFor:this.numberInputId},"Number",r.a.createElement("input",{className:W.a.input,placeholder:"Add phone",type:"number",value:n,onChange:this.handleChange,id:this.numberInputId,name:"number"})),r.a.createElement("button",{className:W.a.button,type:"submit"},"Add contacts")))}}]),e}(c.Component),V=Object(u.b)((function(t){return{contacts:F(t)}}),(function(t){return{onChangeSubmit:function(e){return t(N(e))},showNotifyMessage:function(e){return t(j(e))},setContactsFromLS:function(e){return t(A(e))}}}))(Y),q=n(13),z=n.n(q),B=function(t){var e=t.contact,n=t.onDeleteContact;return r.a.createElement("div",null,r.a.createElement("p",{className:z.a.container},e.name,":",r.a.createElement("span",null,e.number),r.a.createElement("button",{onClick:n,className:z.a.button,type:"button"},"Delete")))},G=n(31),P=n.n(G),U=function(t){var e=t.contacts,n=t.onDeleteContact;return r.a.createElement(g.a,{component:"ul",className:z.a.contactList},e.map((function(t){return r.a.createElement(C.a,{key:t.id,timeout:{enter:750,exit:850},unmountOnExit:!0,classNames:P.a},r.a.createElement("li",{className:z.a.ContactsListItem,key:t.id},r.a.createElement(B,{contact:t,onDeleteContact:function(){return n(t.id)}})))})))},K=Object(u.b)((function(t){return{contacts:I(t)}}),(function(t){return{onDeleteContact:function(e){return t(x(e))}}}))(U),Q=n(32),Z=n.n(Q),$=function(t){var e=t.message;return r.a.createElement("h2",{className:Z.a.title},e)},tt=Object(l.b)("filter/FILTERED"),et=n(24),nt=n.n(et),at=function(t){var e=t.value,n=t.onChangeFilter;return r.a.createElement("div",{className:nt.a.FilterForm},r.a.createElement("label",null,"Find contacts by name",r.a.createElement("input",{value:e,onChange:function(t){return n(t.target.value)},className:nt.a.input,placeholder:"Contact",type:"text"})))},ct=Object(u.b)((function(t){return{value:S(t)}}),(function(t){return{onChangeFilter:function(e){return t(tt(e))}}}))(at),rt=(n(63),n(64),n(33)),ot=n.n(rt),it=n(34),ut=n.n(it),lt=n(20),st=n.n(lt),mt=Object(u.b)((function(t){return{contacts:F(t),text:L(t)}}),null)((function(t){var e=t.contacts,n=t.text;return r.a.createElement(C.a,{in:!0,timeout:1e3,classNames:"fade",appear:!0},r.a.createElement("div",{className:st.a.container},r.a.createElement(C.a,{in:!0,timeout:2e3,classNames:"slide",appear:!0},r.a.createElement("h2",{className:st.a.title},"PhoneBook")),r.a.createElement(g.a,null,n&&r.a.createElement(C.a,{timeout:{enter:250,exit:750},classNames:ot.a,unmountOnExit:!0},r.a.createElement($,{message:n}))),r.a.createElement(V,null),e.length>0&&r.a.createElement("h2",{className:st.a.title},"Contacts"),r.a.createElement(g.a,null,e.length>1&&r.a.createElement(C.a,{timeout:{enter:250,exit:1e3},classNames:ut.a},r.a.createElement(ct,null))),r.a.createElement(K,null)))}));i.a.render(r.a.createElement(u.a,{store:v},r.a.createElement(mt,null)),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.75e74fe0.chunk.js.map