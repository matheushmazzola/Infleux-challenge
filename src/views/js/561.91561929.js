"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[561],{7561:function(t,l,e){e.r(l),e.d(l,{default:function(){return z}});var i=e(3396),r=e(9242),n=e(7139);const o={class:"list row"},s={class:"col-md-8"},u={class:"input-group mb-3"},a={class:"input-group-append"},c={class:"col-md-6"},d=(0,i._)("h4",null,"Tutorials List",-1),h={class:"list-group"},g=["onClick"],v={class:"col-md-6"},T={key:0},_=(0,i._)("h4",null,"Tutorial",-1),p=(0,i._)("label",null,[(0,i._)("strong",null,"Title:")],-1),b=(0,i._)("label",null,[(0,i._)("strong",null,"Description:")],-1),k=(0,i._)("label",null,[(0,i._)("strong",null,"Status:")],-1),m={key:1},w=(0,i._)("br",null,null,-1),f=(0,i._)("p",null,"Please click on a Tutorial...",-1),y=[w,f];function A(t,l,e,w,f,A){const C=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",o,[(0,i._)("div",s,[(0,i._)("div",u,[(0,i.wy)((0,i._)("input",{type:"text",class:"form-control",placeholder:"Search by title","onUpdate:modelValue":l[0]||(l[0]=t=>f.title=t)},null,512),[[r.nr,f.title]]),(0,i._)("div",a,[(0,i._)("button",{class:"btn btn-outline-secondary",type:"button",onClick:l[1]||(l[1]=(...t)=>A.searchTitle&&A.searchTitle(...t))}," Search ")])])]),(0,i._)("div",c,[d,(0,i._)("ul",h,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(f.tutorials,((t,l)=>((0,i.wg)(),(0,i.iD)("li",{class:(0,n.C_)(["list-group-item",{active:l==f.currentIndex}]),key:l,onClick:e=>A.setActiveTutorial(t,l)},(0,n.zw)(t.title),11,g)))),128))]),(0,i._)("button",{class:"m-3 btn btn-sm btn-danger",onClick:l[2]||(l[2]=(...t)=>A.removeAllTutorials&&A.removeAllTutorials(...t))}," Remove All ")]),(0,i._)("div",v,[f.currentTutorial?((0,i.wg)(),(0,i.iD)("div",T,[_,(0,i._)("div",null,[p,(0,i.Uk)(" "+(0,n.zw)(f.currentTutorial.title),1)]),(0,i._)("div",null,[b,(0,i.Uk)(" "+(0,n.zw)(f.currentTutorial.description),1)]),(0,i._)("div",null,[k,(0,i.Uk)(" "+(0,n.zw)(f.currentTutorial.published?"Published":"Pending"),1)]),(0,i.Wm)(C,{to:"/tutorials/"+f.currentTutorial.id,class:"badge badge-warning"},{default:(0,i.w5)((()=>[(0,i.Uk)("Edit")])),_:1},8,["to"])])):((0,i.wg)(),(0,i.iD)("div",m,y))])])}var C=e(725),D={name:"tutorials-list",data(){return{tutorials:[],currentTutorial:null,currentIndex:-1,title:""}},methods:{retrieveTutorials(){C.Z.getAll().then((t=>{this.tutorials=t.data,console.log(t.data)})).catch((t=>{console.log(t)}))},refreshList(){this.retrieveTutorials(),this.currentTutorial=null,this.currentIndex=-1},setActiveTutorial(t,l){this.currentTutorial=t,this.currentIndex=l},removeAllTutorials(){C.Z.deleteAll().then((t=>{console.log(t.data),this.refreshList()})).catch((t=>{console.log(t)}))},searchTitle(){C.Z.findByTitle(this.title).then((t=>{this.tutorials=t.data,console.log(t.data)})).catch((t=>{console.log(t)}))}},mounted(){this.retrieveTutorials()}},x=e(89);const U=(0,x.Z)(D,[["render",A]]);var z=U}}]);
//# sourceMappingURL=561.91561929.js.map