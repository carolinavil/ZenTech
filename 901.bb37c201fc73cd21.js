"use strict";(self.webpackChunkZenTech=self.webpackChunkZenTech||[]).push([[901],{9742:(R,U,r)=>{r.d(U,{p:()=>g});var u=r(9291),S=r(6434),d=r(132),t=r(2425);let g=(()=>{class v{constructor(b,T,c){this.accountService=b,this.router=T,this.toastr=c}canActivate(b,T){let c=this.accountService.accountValue;return c?!(b.data.roles&&!b.data.roles.includes(c?.role)&&(this.toastr.error("Acesso n\xe3o autorizado."),this.router.navigate([""]),1)):(this.toastr.error("Acesso n\xe3o autorizado. <br> Fa\xe7a login."),this.router.navigate(["account","login"],{queryParams:{returnUrl:T.url}}),!1)}static#t=this.\u0275fac=function(T){return new(T||v)(u.LFG(S.B),u.LFG(d.F0),u.LFG(t._W))};static#e=this.\u0275prov=u.Yz7({token:v,factory:v.\u0275fac,providedIn:"root"})}return v})()},2901:(R,U,r)=>{r.r(U),r.d(U,{UsuariosModule:()=>kt});var u=r(6814),S=r(5592),d=r(490),t=r(9291),g=r(6434),v=r(9862),E=r(5619),b=r(9397),T=r(2096),c=r(2832),A=r(5219);class I{constructor(){this.id=0,this.perfilAcesso=void 0,this.perfilAcesso_Id=void 0,this.name="",this.email="",this.telefoneCelular=""}}var D=[{field:"id",header:"Id",maskType:c.O.undefined,filterType:c.vA.text,filterDisplay:c.w2.menu,showAddButton:!1,showMatchMode:!1,showOperator:!1,filterMatchMode:A.a6.EQUALS},{field:"name",header:"Nome",filterType:c.vA.text,filterDisplay:c.w2.menu,maskType:c.O.substring,substringLength:22,showAddButton:!1,showMatchMode:!1,showOperator:!1,filterMatchMode:A.a6.CONTAINS},{field:"email",header:"E-mail",filterType:c.vA.text,filterDisplay:c.w2.menu,maskType:c.O.substring,substringLength:30,showAddButton:!1,showMatchMode:!1,showOperator:!1,filterMatchMode:A.a6.CONTAINS},{field:"telefoneCelular",header:"Telefone/Celular",filterType:c.vA.text,filterDisplay:c.w2.menu,maskType:c.O.undefined,showAddButton:!1,showMatchMode:!1,showOperator:!1,filterMatchMode:A.a6.CONTAINS},{field:"perfilAcesso.perfil",header:"Tipo de Acesso",maskType:c.O.options,filterType:c.vA.text,filterDisplay:c.w2.menu,showAddButton:!1,showMatchMode:!1,showOperator:!1,filterMatchMode:A.a6.EQUALS,values:[{value:"Admin",output:"Admin",class:"flag-yellow"},{value:"Master",output:"Master",class:"flag-info"}]},{field:"ativo",header:"Ativo",maskType:c.O.options,filterType:c.vA.text,filterDisplay:c.w2.menu,showAddButton:!1,showMatchMode:!1,showOperator:!1,filterMatchMode:A.a6.EQUALS,values:[{value:!0,output:"Ativo",class:"flag-green"},{value:!1,output:"Inativo",class:"flag-danger"}]}],j=r(553),Y=r(697),N=r(8787),C=r(2425),M=r(2667);let Z=(()=>{class i{constructor(e,o,a,s,l){this.table=e,this.http=o,this.toastr=a,this.crypto=s,this.accountService=l,this.url=j.N.url,this.list=new E.X([]),this.objeto=new E.X(void 0),this.account=new Y.mR,this.perfilAcesso=new E.X([]),this.loading=new E.X(!1),this.accountService.account.subscribe(_=>this.account=_??new Y.mR)}getObject(){var e=localStorage.getItem("usuario");return e&&this.setObject(this.crypto.decrypt(e)??new I),this.objeto}setObject(e){localStorage.setItem("usuario",this.crypto.encrypt(e)??""),this.objeto.next(e)}getList(e=!1){return this.loading.next(e),this.table.loading.next(!0),this.http.get(`${this.url}/usuario`).pipe((0,b.b)({next:o=>(o=o.map(a=>(a.ativo=!a.dataDesativado,a)),this.list.next(o),this.loading.next(!1),(0,T.of)(o)),error:o=>this.toastr.error("N\xe3o foi poss\xedvel carregar usu\xe1rios.")}))}get(e){return this.http.get(`${this.url}/usuario/${e}`,{headers:new v.WM({loading:"true"})})}getPerfilAcesso(){return this.http.get(`${this.url}/perfilAcesso/getAll`).pipe((0,b.b)({next:e=>(this.perfilAcesso.next(e),e),error:e=>this.toastr.error("N\xe3o foi poss\xedvel carregar perfil.")}))}create(e){return this.http.post(`${this.url}/usuario`,e)}edit(e){return this.http.put(`${this.url}/usuario`,e)}delete(e){return this.http.delete(`${this.url}/usuario/${e}`)}deactivated(e,o){return this.http.patch(`${this.url}/usuario/${e}/${o}`,{})}resetPassword(e){return this.http.patch(`${this.url}/usuario/reset-password/${e}`,{})}static#t=this.\u0275fac=function(o){return new(o||i)(t.LFG(N.i),t.LFG(v.eN),t.LFG(C._W),t.LFG(M.w),t.LFG(g.B))};static#e=this.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var h=r(132);let y=(()=>{class i{constructor(e,o,a,s){this.accountService=e,this.userService=o,this.router=a,this.toastr=s}canActivate(e,o){return new S.y(a=>{this.userService.objeto.subscribe(s=>{var l=this.accountService.accountValue;a.next(l?.perfilAcesso_Id!=d.uU.Master||s?.perfilAcesso_Id!=d.uU.Admin)})})}static#t=this.\u0275fac=function(o){return new(o||i)(t.LFG(g.B),t.LFG(Z),t.LFG(h.F0),t.LFG(C._W))};static#e=this.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var F=r(590),p=r(708),q=r(6599),w=r(5597);function P(i,n){1&i&&t._UZ(0,"span",12)}const G=function(){return["cadastrar"]};function B(i,n){1&i&&(t.TgZ(0,"div",13)(1,"a",14)(2,"span",15),t._uU(3," Cadastrar Usu\xe1rio"),t.qZA()()()),2&i&&(t.xp6(1),t.Q6J("routerLink",t.DdM(1,G)))}let H=(()=>{class i{constructor(e,o,a){this.table=e,this.userService=o,this.accountService=a,this.faUsers=F.FVb,this.list=[],this.tableLinks=[],this.columns=D,this.subscription=[],this.loading=!1;var s=this.userService.list.subscribe(f=>this.list=Object.assign([],f));this.subscription.push(s);var l=this.userService.loading.subscribe(f=>this.loading=f);this.subscription.push(l),(0,p.n)(this.userService.getList(!0));var _=this.table.selected.subscribe(f=>{f&&(this.tableLinks=[{label:"Editar",routePath:["editar"],paramsFieldName:["id"]},{label:f.ativo?"Desabilitar":"Habilitar",routePath:[f.ativo?"desabilitar":"habilitar"],paramsFieldName:["id"]},{label:"Resetar senha",routePath:["reset-password"],paramsFieldName:["id"]}],1==this.accountService.accountValue?.perfilAcesso_Id&&this.tableLinks.push({label:"Excluir",routePath:["excluir"],paramsFieldName:["id"]}),this.tableLinks=this.table.encryptParams(this.tableLinks))});this.subscription.push(_)}ngOnDestroy(){this.subscription.forEach(e=>e.unsubscribe())}getList(){(0,p.n)(this.userService.getList(!0))}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(N.i),t.Y36(Z),t.Y36(g.B))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-list"]],decls:16,vars:13,consts:[[1,"page"],[1,"page__header"],[1,"title-icon","align-items-center"],[3,"icon"],[1,"me-auto"],[1,"page__header-title"],[1,"ms-auto"],[1,"btn","btn-dark",3,"disabled","click"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],[1,"page__body"],["topActions",""],[3,"list","topActions","filterLink","filterTable","paginator","sortTable","menuTable","columns","tableLinks","selectable"],[1,"spinner-border","spinner-border-sm","me-1"],[1,"col-xl-4","col-lg-4","col-md-4","col-sm-6","col-12","mb-2","me-md-2","mx-md-1","px-0","ng-star-inserted"],[1,"btn","btn-primary","d-flex","align-items-center","align-baseline","justify-content-center","me-md-0","me-sm-1",3,"routerLink"],[2,"margin-top","-1px","margin-bottom","1px"]],template:function(o,a){if(1&o&&(t.TgZ(0,"section",0)(1,"div",1)(2,"span",2),t._UZ(3,"fa-icon",3),t.qZA(),t.TgZ(4,"div",4)(5,"h3",5),t._uU(6,"Usu\xe1rios"),t.qZA()(),t.TgZ(7,"div",6)(8,"button",7),t.NdJ("click",function(){return a.getList()}),t.YNc(9,P,1,0,"span",8),t._uU(10,"Atualizar"),t.qZA()()(),t.TgZ(11,"div",9),t.YNc(12,B,4,2,"ng-template",null,10,t.W1O),t._UZ(14,"app-list-shared",11),t.qZA()(),t._UZ(15,"router-outlet")),2&o){const s=t.MAs(13);t.xp6(3),t.Q6J("icon",a.faUsers),t.xp6(5),t.Q6J("disabled",a.loading),t.xp6(1),t.Q6J("ngIf",a.loading),t.xp6(5),t.Q6J("list",a.list)("topActions",s)("filterLink",!1)("filterTable",!0)("paginator",!0)("sortTable",!0)("menuTable",!0)("columns",a.columns)("tableLinks",a.tableLinks)("selectable",!0)}},dependencies:[u.O5,h.lC,h.rH,q.o,w.BN]})}return i})();var O=r(5861),x=r(2855),J=r(342),m=r(6223);const V=["template"],W=["icon"];function $(i,n){if(1&i&&t._UZ(0,"fa-icon",2),2&i){const e=t.oxw();t.Q6J("icon",e.faUser)}}function z(i,n){1&i&&(t.TgZ(0,"p",9),t._uU(1,"Este campo \xe9 obrigat\xf3rio."),t.qZA())}function k(i,n){1&i&&(t.TgZ(0,"span"),t._uU(1,"Remova os espa\xe7os antes e depois do texto."),t.qZA())}function K(i,n){if(1&i&&(t.TgZ(0,"p",9),t.YNc(1,k,2,0,"span",12),t.qZA()),2&i){t.oxw(2);const e=t.MAs(10);t.xp6(1),t.Q6J("ngIf","^\\S(.*\\S)?$"==e.errors.pattern.requiredPattern)}}function X(i,n){if(1&i&&(t.TgZ(0,"div"),t.YNc(1,z,2,0,"p",26),t.YNc(2,K,2,1,"p",26),t.qZA()),2&i){t.oxw();const e=t.MAs(10);t.xp6(1),t.Q6J("ngIf",e.errors.required),t.xp6(1),t.Q6J("ngIf",e.errors.pattern)}}function tt(i,n){1&i&&(t.TgZ(0,"p",9),t._uU(1,"Este campo \xe9 obrigat\xf3rio."),t.qZA())}function et(i,n){1&i&&(t.TgZ(0,"p",9),t._uU(1,"Telefone/celular inv\xe1lido"),t.qZA())}function it(i,n){if(1&i&&(t.TgZ(0,"div"),t.YNc(1,tt,2,0,"p",26),t.YNc(2,et,2,0,"p",26),t.qZA()),2&i){t.oxw();const e=t.MAs(18);t.xp6(1),t.Q6J("ngIf",e.errors.required),t.xp6(1),t.Q6J("ngIf",e.errors.mask)}}function ot(i,n){if(1&i&&(t.TgZ(0,"option",19),t._uU(1),t.qZA()),2&i){const e=n.$implicit;t.Q6J("ngValue",e.id),t.xp6(1),t.Oqu(e.perfil)}}function at(i,n){1&i&&(t.TgZ(0,"p",9),t._uU(1,"Este campo \xe9 obrigat\xf3rio."),t.qZA())}function st(i,n){if(1&i&&(t.TgZ(0,"div"),t.YNc(1,at,2,0,"p",26),t.qZA()),2&i){t.oxw();const e=t.MAs(26);t.xp6(1),t.Q6J("ngIf",e.errors.required)}}function nt(i,n){1&i&&(t.TgZ(0,"p",9),t._uU(1,"Este campo \xe9 obrigat\xf3rio."),t.qZA())}function rt(i,n){1&i&&(t.TgZ(0,"p",9),t._uU(1,"E-mail inv\xe1lido"),t.qZA())}function lt(i,n){if(1&i&&(t.TgZ(0,"div"),t.YNc(1,nt,2,0,"p",26),t.YNc(2,rt,2,0,"p",26),t.qZA()),2&i){t.oxw();const e=t.MAs(37);t.xp6(1),t.Q6J("ngIf",e.errors.required),t.xp6(1),t.Q6J("ngIf",e.errors.email)}}function ct(i,n){if(1&i&&(t.TgZ(0,"p",9),t._uU(1),t.ALo(2,"json"),t.qZA()),2&i){const e=n.$implicit;t.xp6(1),t.Oqu(t.lcZ(2,1,e))}}function ut(i,n){1&i&&(t.TgZ(0,"p",9),t._uU(1,"Preencha todos os campos obrigat\xf3rios (*) corretamente para salvar"),t.qZA())}function dt(i,n){if(1&i&&(t.TgZ(0,"div",31),t.YNc(1,ct,3,3,"p",32),t.YNc(2,ut,2,0,"p",26),t.qZA()),2&i){t.oxw(2);const e=t.MAs(1),o=t.oxw();t.xp6(1),t.Q6J("ngForOf",o.erro),t.xp6(1),t.Q6J("ngIf",e.invalid&&0==o.erro.length)}}function pt(i,n){1&i&&t._UZ(0,"span",33)}function mt(i,n){if(1&i&&(t.TgZ(0,"div",27),t.YNc(1,dt,3,2,"div",28),t.TgZ(2,"button",29),t.YNc(3,pt,1,0,"span",30),t.TgZ(4,"span"),t._uU(5,"Salvar"),t.qZA()()()),2&i){t.oxw();const e=t.MAs(1),o=t.oxw();t.xp6(1),t.Q6J("ngIf",o.erro||e.invalid),t.xp6(1),t.Q6J("disabled",e.invalid||o.loading||!o.podeEditar),t.xp6(1),t.Q6J("ngIf",o.loading)}}function ht(i,n){if(1&i){const e=t.EpF();t.TgZ(0,"form",3,4),t.NdJ("ngSubmit",function(){t.CHM(e);const a=t.MAs(1),s=t.oxw();return t.KtG(s.send(a))}),t.TgZ(2,"div",5)(3,"div",6)(4,"div",7)(5,"label",8),t._uU(6,"Nome: "),t.TgZ(7,"span",9),t._uU(8,"*"),t.qZA()(),t.TgZ(9,"input",10,11),t.NdJ("ngModelChange",function(a){t.CHM(e);const s=t.oxw();return t.KtG(s.objeto.name=a)})("change",function(){t.CHM(e);const a=t.MAs(10),s=t.oxw();return t.KtG(s.objeto.name=a.value.trim())}),t.qZA(),t.YNc(11,X,3,2,"div",12),t.qZA(),t.TgZ(12,"div",7)(13,"label",13),t._uU(14,"Telefone/Celular: "),t.TgZ(15,"span",9),t._uU(16,"*"),t.qZA()(),t.TgZ(17,"input",14,15),t.NdJ("ngModelChange",function(a){t.CHM(e);const s=t.oxw();return t.KtG(s.objeto.telefoneCelular=a)}),t.qZA(),t.YNc(19,it,3,2,"div",12),t.qZA(),t.TgZ(20,"div",7)(21,"label",16),t._uU(22,"Perfil: "),t.TgZ(23,"span",9),t._uU(24,"*"),t.qZA()(),t.TgZ(25,"select",17,18),t.NdJ("ngModelChange",function(a){t.CHM(e);const s=t.oxw();return t.KtG(s.objeto.perfilAcesso_Id=a)}),t.TgZ(27,"option",19),t._uU(28,"Selecione"),t.qZA(),t.YNc(29,ot,2,2,"option",20),t.qZA(),t.YNc(30,st,2,1,"div",12),t.qZA(),t.TgZ(31,"div",21)(32,"label",22),t._uU(33,"E-mail: "),t.TgZ(34,"span",9),t._uU(35,"*"),t.qZA()(),t.TgZ(36,"input",23,24),t.NdJ("ngModelChange",function(a){t.CHM(e);const s=t.oxw();return t.KtG(s.objeto.email=a)}),t.qZA(),t.YNc(38,lt,3,2,"div",12),t.qZA()(),t.TgZ(39,"div",6),t.YNc(40,mt,6,3,"div",25),t.qZA()()()}if(2&i){const e=t.MAs(10),o=t.MAs(18),a=t.MAs(26),s=t.MAs(37),l=t.oxw();t.xp6(9),t.Q6J("ngModel",l.objeto.name)("disabled",!l.podeEditar),t.xp6(2),t.Q6J("ngIf",e.touched&&e.errors),t.xp6(6),t.Q6J("ngModel",l.objeto.telefoneCelular)("disabled",!l.podeEditar),t.xp6(2),t.Q6J("ngIf",o.touched&&o.errors),t.xp6(6),t.Q6J("ngModel",l.objeto.perfilAcesso_Id)("disabled",!l.podeEditar),t.xp6(2),t.Q6J("ngValue",void 0),t.xp6(2),t.Q6J("ngForOf",l.perfil),t.xp6(1),t.Q6J("ngIf",a.touched&&a.errors),t.xp6(6),t.Q6J("email",!0)("ngModel",l.objeto.email)("readonly",l.isEditPage)("pattern",l.emailPattern)("disabled",!l.podeEditar),t.xp6(2),t.Q6J("ngIf",s.touched&&s.errors),t.xp6(2),t.Q6J("ngIf",l.podeEditar)}}let Q=(()=>{class i{constructor(e,o,a,s,l,_){this.usuarioService=e,this.modalService=o,this.activatedRoute=a,this.crypto=s,this.accountService=l,this.toastr=_,this.faUser=F.ILF,this.objeto=new I,this.loading=!1,this.erro="",this.isEditPage=!1,this.perfil=[],this.subscription=[],this.emailPattern=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,this.modal=new x.u,this.podeEditar=!0,this.perfil=d.JH,this.account=this.accountService.accountValue,this.perfil=this.account?.perfilAcesso_Id==d.uU.Master?[{id:2,perfil:"Master"}]:[{id:1,perfil:"Admin"},{id:2,perfil:"Master"}]}ngOnDestroy(){this.subscription.forEach(e=>e.unsubscribe())}ngAfterViewInit(){this.modal.id=0,this.modal.template=this.template,this.modal.icon=this.icon,this.modal.style={"max-width":"900px",overflow:"visible"},this.modal.activatedRoute=this.activatedRoute,this.modal.routerBackOptions={relativeTo:this.activatedRoute};var e=this.activatedRoute.params.subscribe(o=>{o.usuario_id?(this.objeto.id=this.crypto.decrypt(o.usuario_id),this.modal.title="Editar Usu\xe1rio",this.modal.routerBack=["../../"],this.isEditPage=!0,(0,p.n)(this.usuarioService.get(this.objeto.id)).then(a=>{this.objeto=a,this.account?.perfilAcesso_Id==d.uU.Master&&a.perfilAcesso_Id==d.uU.Admin&&(this.podeEditar=!1,this.toastr.info("Voc\xea n\xe3o tem permiss\xe3o para editar uma conta administradora.")),setTimeout(()=>{this.modal=this.modalService.addModal(this.modal,"usuario")},200)}).catch(a=>{this.voltar()})):(this.modal.title="Cadastrar Usu\xe1rio",this.modal.routerBack=["../"],this.isEditPage=!1,setTimeout(()=>{this.modal=this.modalService.addModal(this.modal,"usuario")},200))});this.subscription.push(e)}voltar(){this.modalService.removeModal(this.modal)}send(e){var o=this;this.loading=!0,this.erro="",this.request().then(function(){var a=(0,O.Z)(function*(s){yield(0,p.n)(o.usuarioService.getList()),o.voltar()});return function(s){return a.apply(this,arguments)}}()).catch(a=>{this.erro=(0,J.b)(a)}).finally(()=>this.loading=!1)}request(){return(0,p.n)(0==this.objeto.id?this.usuarioService.create(this.objeto):this.usuarioService.edit(this.objeto))}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(Z),t.Y36(x.Z),t.Y36(h.gz),t.Y36(M.w),t.Y36(g.B),t.Y36(C._W))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-form"]],viewQuery:function(o,a){if(1&o&&(t.Gf(V,5),t.Gf(W,5)),2&o){let s;t.iGM(s=t.CRH())&&(a.template=s.first),t.iGM(s=t.CRH())&&(a.icon=s.first)}},decls:5,vars:0,consts:[["icon",""],["template",""],[3,"icon"],[3,"ngSubmit"],["form","ngForm"],[1,"px-2"],[1,"row"],[1,"form-group","col-xl-4","col-lg-4","col-md-6","col-sm-6","col-12"],["for","name"],[1,"text-danger"],["type","text","name","name","id","name","required","","pattern","\\S(.*\\S)?",1,"form-control",3,"ngModel","disabled","ngModelChange","change"],["name","ngModel"],[4,"ngIf"],["for","telefoneCelular"],["type","text","name","telefoneCelular","id","telefoneCelular","required","",1,"form-control",3,"ngModel","disabled","ngModelChange"],["telefoneCelular","ngModel"],["for","perfilAcesso_Id"],["name","perfilAcesso_Id","id","perfilAcesso_Id","required","",1,"form-control",3,"ngModel","disabled","ngModelChange"],["perfilAcesso_Id","ngModel"],[3,"ngValue"],[3,"ngValue",4,"ngFor","ngForOf"],[1,"form-group","col-xl-12","col-lg-12","col-md-6","col-sm-6","col-12","email-container"],["for","email"],["type","email","name","email","id","email","placeholder","example@hotmail.com","required","",1,"form-control",3,"email","ngModel","readonly","pattern","disabled","ngModelChange"],["email","ngModel"],["class","d-flex align-items-start flex-wrap mt-2 mb-1",4,"ngIf"],["class","text-danger",4,"ngIf"],[1,"d-flex","align-items-start","flex-wrap","mt-2","mb-1"],["class","m-0",4,"ngIf"],[1,"btn","btn-primary","me-0","ms-auto",3,"disabled"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],[1,"m-0"],["class","text-danger",4,"ngFor","ngForOf"],[1,"spinner-border","spinner-border-sm","me-1"]],template:function(o,a){1&o&&(t.YNc(0,$,1,1,"ng-template",null,0,t.W1O),t.YNc(2,ht,41,18,"ng-template",null,1,t.W1O),t._UZ(4,"router-outlet"))},dependencies:[u.sg,u.O5,h.lC,w.BN,m._Y,m.YN,m.Kr,m.Fj,m.EJ,m.JJ,m.JL,m.Q7,m.c5,m.on,m.On,m.F,u.Ts]})}return i})();const _t=["template"],ft=["icon"];function gt(i,n){if(1&i&&t._UZ(0,"fa-icon",2),2&i){const e=t.oxw();t.Q6J("icon",e.faTrash)}}function vt(i,n){if(1&i&&(t.TgZ(0,"div",8),t._UZ(1,"p",9),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("innerHTML",e.erro,t.oJD)}}function bt(i,n){1&i&&t._UZ(0,"span",10)}function xt(i,n){if(1&i){const e=t.EpF();t.TgZ(0,"div")(1,"p",3),t._uU(2,"Tem certeza que deseja excluir esse registro? Ele n\xe3o poder\xe1 ser recuperado."),t.qZA(),t.TgZ(3,"p"),t._uU(4,"O usu\xe1rio n\xe3o ter\xe1 acesso mais \xe0 plataforma."),t.qZA(),t.TgZ(5,"p",4),t._uU(6,"Obs.: Se esse usu\xe1rio estiver relacionado a um outro registro, n\xe3o poder\xe1 ser exclu\xeddo."),t.qZA(),t.YNc(7,vt,2,1,"div",5),t.TgZ(8,"button",6),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.send())}),t.YNc(9,bt,1,0,"span",7),t.TgZ(10,"span"),t._uU(11,"Excluir"),t.qZA()()()}if(2&i){const e=t.oxw();t.xp6(7),t.Q6J("ngIf",e.erro),t.xp6(2),t.Q6J("ngIf",e.loading)}}let Tt=(()=>{class i{constructor(e,o,a,s){this.activatedRoute=e,this.modalService=o,this.usuarioService=a,this.crypto=s,this.faTrash=F.$aW,this.id=0,this.erro="",this.loading=!1,this.subscription=[],this.modal=new x.u}ngAfterViewInit(){this.modal.id=0,this.modal.template=this.template,this.modal.icon=this.icon,this.modal.style={"max-width":"400px",overflow:"visible"},this.modal.activatedRoute=this.activatedRoute,this.modal.routerBackOptions={relativeTo:this.activatedRoute},this.modal.routerBack=["../../"],this.modal.title="Excluir registro";var e=this.activatedRoute.params.subscribe(o=>{if(o.usuario_id)try{this.id=this.crypto.decrypt(o.usuario_id),setTimeout(()=>{this.modal=this.modalService.addModal(this.modal,"delete usuario")},200)}catch{this.voltar()}else this.voltar()});this.subscription.push(e)}ngOnDestroy(){this.subscription.forEach(e=>e.unsubscribe())}voltar(){this.modalService.removeModal(this.modal)}send(){this.loading=!0,this.erro="",(0,p.n)(this.usuarioService.delete(this.id)).then(e=>{this.loading=!1,(0,p.n)(this.usuarioService.getList()),this.voltar()}).catch(e=>{this.loading=!1,this.erro=(0,J.b)(e)})}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(h.gz),t.Y36(x.Z),t.Y36(Z),t.Y36(M.w))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-delete"]],viewQuery:function(o,a){if(1&o&&(t.Gf(_t,5),t.Gf(ft,5)),2&o){let s;t.iGM(s=t.CRH())&&(a.template=s.first),t.iGM(s=t.CRH())&&(a.icon=s.first)}},decls:4,vars:0,consts:[["icon",""],["template",""],[3,"icon"],[1,"mt-2"],[1,"text-info"],["class","m-0  mt-1",4,"ngIf"],[1,"btn","btn-grey","ms-auto","d-flex","mt-2",3,"click"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],[1,"m-0","mt-1"],[1,"text-danger",3,"innerHTML"],[1,"spinner-border","spinner-border-sm","me-1"]],template:function(o,a){1&o&&(t.YNc(0,gt,1,1,"ng-template",null,0,t.W1O),t.YNc(2,xt,12,2,"ng-template",null,1,t.W1O))},dependencies:[u.O5,w.BN]})}return i})();var At=r(7280),Zt=r(9336);const Ct=["template"],Mt=["icon"];function yt(i,n){if(1&i&&t._UZ(0,"fa-icon",2),2&i){const e=t.oxw();t.Q6J("icon",e.faKey)}}function wt(i,n){1&i&&(t.TgZ(0,"div")(1,"p"),t._uU(2,"Tem certeza que deseja resetar sua senha?"),t.qZA(),t.TgZ(3,"p",7)(4,"small"),t._uU(5,"Voc\xea receber\xe1 um email com o link de altera\xe7\xe3o de senha."),t.qZA()(),t.TgZ(6,"p"),t._uU(7,"Ao resetar sua senha, voc\xea ser\xe1 automaticamente deslogado para realizar novo login."),t.qZA()())}function Ut(i,n){1&i&&(t.TgZ(0,"div")(1,"p"),t._uU(2,"Tem certeza que deseja resetar a senha desse usu\xe1rio? "),t.qZA(),t.TgZ(3,"p",7)(4,"small"),t._uU(5,"Esse usu\xe1rio receber\xe1 um email com o link de altera\xe7\xe3o de senha."),t.qZA()()())}function Et(i,n){if(1&i&&(t.TgZ(0,"p",7),t._uU(1),t.qZA()),2&i){const e=t.oxw(3);t.xp6(1),t.Oqu(e.erro)}}function It(i,n){1&i&&t._UZ(0,"span",8)}function Ft(i,n){if(1&i){const e=t.EpF();t.TgZ(0,"div"),t.YNc(1,wt,8,0,"div",3),t.YNc(2,Ut,6,0,"div",3),t.YNc(3,Et,2,1,"p",4),t.TgZ(4,"button",5),t.NdJ("click",function(){t.CHM(e);const a=t.oxw(2);return t.KtG(a.send())}),t.YNc(5,It,1,0,"span",6),t.TgZ(6,"span"),t._uU(7," Resetar"),t.qZA()()()}if(2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",(null==e.userLogado?null:e.userLogado.email)==e.objeto.email),t.xp6(1),t.Q6J("ngIf",(null==e.userLogado?null:e.userLogado.email)!=e.objeto.email),t.xp6(1),t.Q6J("ngIf",e.erro),t.xp6(2),t.Q6J("ngIf",e.loading)}}function St(i,n){1&i&&(t.TgZ(0,"div")(1,"p",7),t._uU(2,"Voc\xea n\xe3o tem permiss\xe3o para resetar a senha de uma conta administradora."),t.qZA()())}function Yt(i,n){if(1&i&&(t.YNc(0,Ft,8,4,"div",3),t.YNc(1,St,3,0,"div",3)),2&i){const e=t.oxw();t.Q6J("ngIf",e.podeResetar),t.xp6(1),t.Q6J("ngIf",!e.podeResetar)}}let Nt=(()=>{class i{constructor(e,o,a,s,l,_,f){this.activatedRoute=e,this.usuarioService=o,this.accountService=a,this.crypto=s,this.toastr=l,this.modalService=_,this.alertService=f,this.faKey=F.DD4,this.objeto=new I,this.loading=!1,this.erro="",this.subscription=[],this.modal=new x.u,this.podeResetar=!0}ngOnDestroy(){this.subscription.forEach(e=>e.unsubscribe())}ngAfterViewInit(){this.modal.id=0,this.modal.template=this.template,this.modal.icon=this.icon,this.modal.style={"max-width":"500px",overflow:"visible"},this.modal.activatedRoute=this.activatedRoute,this.modal.routerBackOptions={relativeTo:this.activatedRoute},this.modal.title="Resetar Senha",this.modal.routerBack=["../../"];var e=this.activatedRoute.params.subscribe(o=>{o.usuario_id?(this.objeto.id=this.crypto.decrypt(o.usuario_id),(0,p.n)(this.usuarioService.get(this.objeto.id)).then(a=>{this.objeto=a;var s=this.accountService.accountValue;s?.perfilAcesso_Id==d.uU.Master&&a.perfilAcesso_Id==d.uU.Admin&&(this.toastr.info("Voc\xea n\xe3o tem permiss\xe3o para resetar a senha de uma conta administradora."),this.erro="Voc\xea n\xe3o tem permiss\xe3o para resetar a senha de uma conta administradora.",this.podeResetar=!1),setTimeout(()=>{this.modal=this.modalService.addModal(this.modal,"usuario")},200)}).catch(a=>{this.voltar()})):this.voltar()});this.subscription.push(e)}voltar(){this.modalService.removeModal(this.modal)}send(){this.loading=!0,(0,p.n)(this.usuarioService.resetPassword(this.objeto.id)).then(e=>{this.voltar(),this.toastr.success("Opera\xe7\xe3o conclu\xedda com sucesso"),this.alertService.success("O usu\xe1rio deve verificar a caixa de e-mail para seguir as instru\xe7\xf5es."),this.objeto.email==this.userLogado?.email&&this.accountService.logout()}).catch().finally(()=>this.loading=!1)}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(h.gz),t.Y36(Z),t.Y36(g.B),t.Y36(M.w),t.Y36(C._W),t.Y36(x.Z),t.Y36(Zt.c))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-reset-password"]],viewQuery:function(o,a){if(1&o&&(t.Gf(Ct,5),t.Gf(Mt,5)),2&o){let s;t.iGM(s=t.CRH())&&(a.template=s.first),t.iGM(s=t.CRH())&&(a.icon=s.first)}},decls:5,vars:0,consts:[["icon",""],["template",""],[3,"icon"],[4,"ngIf"],["class","text-danger",4,"ngIf"],[1,"btn","btn-grey","ms-auto","d-flex","mt-2",3,"click"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],[1,"text-danger"],[1,"spinner-border","spinner-border-sm","me-1"]],template:function(o,a){1&o&&(t.YNc(0,yt,1,1,"ng-template",null,0,t.W1O),t.YNc(2,Yt,2,2,"ng-template",null,1,t.W1O),t._UZ(4,"router-outlet"))},dependencies:[u.O5,h.lC,w.BN]})}return i})();const Ot=["template"];function Jt(i,n){1&i&&(t.TgZ(0,"span",7),t._uU(1,"habilitar"),t.qZA())}function Qt(i,n){1&i&&(t.TgZ(0,"span",7),t._uU(1,"desabilitar"),t.qZA())}function Lt(i,n){1&i&&(t.TgZ(0,"p",8),t._uU(1,"Voc\xea automaticamente ser\xe1 deslogado e n\xe3o poder\xe1 acessar o Planner."),t.qZA())}function Rt(i,n){1&i&&(t.TgZ(0,"p",8),t._uU(1,"Ap\xf3s isso, o usu\xe1rio n\xe3o poder\xe1 acessar o Planner."),t.qZA())}function Dt(i,n){if(1&i&&(t.TgZ(0,"p",8),t._uU(1),t.qZA()),2&i){const e=t.oxw(3);t.xp6(1),t.Oqu(e.erro)}}function jt(i,n){1&i&&t._UZ(0,"span",9)}function qt(i,n){1&i&&(t.TgZ(0,"span"),t._uU(1,"Desabilitar"),t.qZA())}function Pt(i,n){1&i&&(t.TgZ(0,"span"),t._uU(1,"Habilitar"),t.qZA())}function Gt(i,n){if(1&i){const e=t.EpF();t.TgZ(0,"div")(1,"p"),t._uU(2,"Tem certeza que deseja "),t.YNc(3,Jt,2,0,"span",3),t.YNc(4,Qt,2,0,"span",3),t._uU(5," esse registro? "),t.qZA(),t.YNc(6,Lt,2,0,"p",4),t.YNc(7,Rt,2,0,"p",4),t.YNc(8,Dt,2,1,"p",4),t.TgZ(9,"button",5),t.NdJ("click",function(){t.CHM(e);const a=t.oxw(2);return t.KtG(a.send())}),t.YNc(10,jt,1,0,"span",6),t.YNc(11,qt,2,0,"span",1),t.YNc(12,Pt,2,0,"span",1),t.qZA()()}if(2&i){const e=t.oxw(2);t.xp6(3),t.Q6J("ngIf",e.habilitar),t.xp6(1),t.Q6J("ngIf",!e.habilitar),t.xp6(2),t.Q6J("ngIf",e.isUser&&e.habilitar&&e.objeto.email==(null==e.account?null:e.account.email)),t.xp6(1),t.Q6J("ngIf",e.isUser&&e.habilitar&&e.objeto.email!=(null==e.account?null:e.account.email)),t.xp6(1),t.Q6J("ngIf",e.erro),t.xp6(2),t.Q6J("ngIf",e.loading),t.xp6(1),t.Q6J("ngIf",!e.habilitar),t.xp6(1),t.Q6J("ngIf",e.habilitar)}}function Bt(i,n){if(1&i&&(t.TgZ(0,"div",10)(1,"p",8),t._uU(2),t.qZA()()),2&i){const e=t.oxw(2);t.xp6(2),t.Oqu(e.erro)}}function Ht(i,n){if(1&i&&(t.YNc(0,Gt,13,8,"div",1),t.YNc(1,Bt,3,1,"div",2)),2&i){const e=t.oxw();t.Q6J("ngIf",e.podeAtivar),t.xp6(1),t.Q6J("ngIf",!e.podeAtivar)}}let L=(()=>{class i{constructor(e,o,a,s,l,_){this.usuarioService=e,this.modalService=o,this.activatedRoute=a,this.crypto=s,this.accountService=l,this.toastr=_,this.objeto=new I,this.loading=!1,this.erro="",this.subscription=[],this.modal=new x.u,this.podeAtivar=!0,this.habilitar=!1,this.isUser=!1,this.account=this.accountService.accountValue}ngOnDestroy(){this.subscription.forEach(e=>e.unsubscribe())}ngAfterViewInit(){this.modal.id=0,this.modal.template=this.template,this.modal.style={"max-width":"400px",overflow:"visible"},this.modal.activatedRoute=this.activatedRoute,this.modal.routerBackOptions={relativeTo:this.activatedRoute};var e=this.activatedRoute.params.subscribe(o=>{o.usuario_id?(this.objeto.id=this.crypto.decrypt(o.usuario_id),this.isUser=this.account?.id==this.objeto.id,this.modal.routerBack=["../../"],(0,p.n)(this.usuarioService.get(this.objeto.id)).then(a=>{this.objeto=a,this.habilitar=!(null==this.objeto.dataDesativado||null==this.objeto.dataDesativado),this.objeto.ativo=!this.habilitar;var s=this.accountService.accountValue;if(this.modal.title=this.habilitar?"Habilitar Usu\xe1rio":"Desabilitar Usu\xe1rio",s?.perfilAcesso_Id==d.uU.Master&&a.perfilAcesso_Id==d.uU.Admin){this.podeAtivar=!1;var l=this.habilitar?"habilitar":"desabilitar";this.toastr.info(`Voc\xea n\xe3o tem permiss\xe3o para ${l} uma conta administradora.`),this.erro=`Voc\xea n\xe3o tem permiss\xe3o para ${l} uma conta administradora.`}setTimeout(()=>{this.modal=this.modalService.addModal(this.modal,"usuario")},200)}).catch(a=>{this.voltar()})):this.voltar()});this.subscription.push(e)}voltar(){this.modalService.removeModal(this.modal)}send(){var e=this;this.loading=!0,this.erro="",(0,p.n)(this.usuarioService.deactivated(this.objeto.id,this.habilitar)).then(function(){var o=(0,O.Z)(function*(a){e.habilitar&&e.isUser&&e.accountService.logout(),yield(0,p.n)(e.usuarioService.getList()),e.voltar()});return function(a){return o.apply(this,arguments)}}()).finally(()=>this.loading=!1)}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(Z),t.Y36(x.Z),t.Y36(h.gz),t.Y36(M.w),t.Y36(g.B),t.Y36(C._W))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-deactivated"]],viewQuery:function(o,a){if(1&o&&t.Gf(Ot,5),2&o){let s;t.iGM(s=t.CRH())&&(a.template=s.first)}},decls:3,vars:0,consts:[["template",""],[4,"ngIf"],["class","mb-2",4,"ngIf"],["class","font-weight-bold",4,"ngIf"],["class","text-danger",4,"ngIf"],[1,"btn","btn-grey","ms-auto","d-flex","mt-2",3,"click"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],[1,"font-weight-bold"],[1,"text-danger"],[1,"spinner-border","spinner-border-sm","me-1"],[1,"mb-2"]],template:function(o,a){1&o&&(t.YNc(0,Ht,2,2,"ng-template",null,0,t.W1O),t._UZ(2,"router-outlet"))},dependencies:[u.O5,h.lC]})}return i})();var Vt=r(9742);const Wt=[{path:"",component:H,children:[{path:"cadastrar",component:Q,data:{modalOrder:1},title:"Zentech - Cadastrar usu\xe1rio"},{path:"editar/:usuario_id",component:Q,data:{modalOrder:1},title:"Zentech - Editar usu\xe1rio",canActivate:[y]},{path:"excluir/:usuario_id",component:Tt,data:{modalOrder:1,roles:[d.uU.Admin]},title:"Zentech - Excluir usu\xe1rio",canActivate:[y,Vt.p]},{path:"reset-password/:usuario_id",component:Nt,data:{modalOrder:1},title:"Zentech - Resetar senha",canActivate:[y]},{path:"habilitar/:usuario_id",component:L,data:{modalOrder:1},title:"Zentech - Habilitar usu\xe1rio",canActivate:[y]},{path:"desabilitar/:usuario_id",component:L,data:{modalOrder:1},title:"Zentech - Desabilitar usu\xe1rio",canActivate:[y]},At.D]}];let $t=(()=>{class i{static#t=this.\u0275fac=function(o){return new(o||i)};static#e=this.\u0275mod=t.oAB({type:i});static#i=this.\u0275inj=t.cJS({imports:[h.Bz.forChild(Wt),h.Bz]})}return i})();var zt=r(6208);let kt=(()=>{class i{static#t=this.\u0275fac=function(o){return new(o||i)};static#e=this.\u0275mod=t.oAB({type:i});static#i=this.\u0275inj=t.cJS({imports:[u.ez,$t,zt.m,w.uH,m.u5]})}return i})()}}]);