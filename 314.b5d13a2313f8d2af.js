"use strict";(self.webpackChunkZenTech=self.webpackChunkZenTech||[]).push([[314],{2314:(rt,f,s)=>{s.r(f),s.d(f,{InvoiceModule:()=>st});var u=s(6814),d=s(132),_=s(590),m=s(708),A=s(2141),t=s(9291),F=s(8787),v=s(237),g=s(366),y=s(6599);const U=function(){return["cadastrar"]};function S(e,r){1&e&&(t.TgZ(0,"div",9)(1,"a",10)(2,"span",11),t._uU(3," Cadastrar Invoice"),t.qZA()()()),2&e&&(t.xp6(1),t.Q6J("routerLink",t.DdM(1,U)))}let J=(()=>{class e{constructor(o,n){this.table=o,this.invoiceService=n,this.faFileInvoice=_.fab,this.list=[],this.tableLinks=[],this.columns=A.mH,this.subscription=[];var i=this.invoiceService.list.subscribe(c=>this.list=Object.assign([],c));this.subscription.push(i),(0,m.n)(this.invoiceService.getList());var a=this.table.selected.subscribe(c=>{c&&(this.tableLinks=[{label:"Editar",routePath:["editar"],paramsFieldName:["id"]},{label:"Excluir",routePath:["excluir"],paramsFieldName:["id"]}],this.tableLinks=this.table.encryptParams(this.tableLinks))});this.subscription.push(a)}ngOnDestroy(){this.subscription.forEach(o=>o.unsubscribe())}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(F.i),t.Y36(v.q))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-list"]],decls:12,vars:11,consts:[[1,"page"],[1,"page__header"],[1,"title-icon"],[3,"icon"],[1,"me-auto"],[1,"page__header-title"],[1,"page__body"],["topActions",""],[3,"topActions","list","filterLink","filterTable","paginator","sortTable","menuTable","columns","tableLinks","selectable"],[1,"col-xl-3","col-lg-4","col-md-5","col-sm-6","col-12","mb-2","me-md-2","mx-md-1","px-0","ng-star-inserted"],[1,"btn","btn-primary","d-flex","align-items-center","align-baseline","justify-content-center","me-md-0","me-sm-1",3,"routerLink"],[2,"margin-top","-1px","margin-bottom","1px"]],template:function(n,i){if(1&n&&(t.TgZ(0,"section",0)(1,"div",1)(2,"span",2),t._UZ(3,"fa-icon",3),t.qZA(),t.TgZ(4,"div",4)(5,"h3",5),t._uU(6,"Invoice"),t.qZA()()(),t.TgZ(7,"div",6),t.YNc(8,S,4,2,"ng-template",null,7,t.W1O),t._UZ(10,"app-list-shared",8),t.qZA()(),t._UZ(11,"router-outlet")),2&n){const a=t.MAs(9);t.xp6(3),t.Q6J("icon",i.faFileInvoice),t.xp6(7),t.Q6J("topActions",a)("list",i.list)("filterLink",!1)("filterTable",!0)("paginator",!0)("sortTable",!0)("menuTable",!0)("columns",i.columns)("tableLinks",i.tableLinks)("selectable",!0)}},dependencies:[d.lC,d.rH,g.BN,y.o]})}return e})();var x=s(2854),p=s(2855),b=s(342),T=s(2667);const O=["template"],Y=["icon"];function I(e,r){if(1&e&&t._UZ(0,"fa-icon",2),2&e){const o=t.oxw();t.Q6J("icon",o.faTrash)}}function N(e,r){if(1&e&&(t.TgZ(0,"div",7)(1,"p",8),t._uU(2),t.qZA()()),2&e){const o=t.oxw(2);t.xp6(2),t.Oqu(o.erro)}}function Q(e,r){1&e&&t._UZ(0,"span",9)}function H(e,r){if(1&e){const o=t.EpF();t.TgZ(0,"div")(1,"p",3),t._uU(2,"Tem certeza que deseja excluir esse registro? "),t.qZA(),t.TgZ(3,"p"),t._uU(4,"Ele n\xe3o poder\xe1 ser recuperado."),t.qZA(),t.YNc(5,N,3,1,"div",4),t.TgZ(6,"button",5),t.NdJ("click",function(){t.CHM(o);const i=t.oxw();return t.KtG(i.send())}),t.YNc(7,Q,1,0,"span",6),t.TgZ(8,"span"),t._uU(9,"Excluir"),t.qZA()()()}if(2&e){const o=t.oxw();t.xp6(5),t.Q6J("ngIf",o.erro),t.xp6(2),t.Q6J("ngIf",o.loading)}}let E=(()=>{class e{constructor(o,n,i,a){this.activatedRoute=o,this.modalService=n,this.invoiceService=i,this.crypto=a,this.faTrash=_.$aW,this.id=0,this.erro="",this.loading=!1,this.subscription=[],this.modal=new p.u}ngAfterViewInit(){this.modal.id=0,this.modal.template=this.template,this.modal.icon=this.icon,this.modal.style={"max-width":"400px",overflow:"visible"},this.modal.activatedRoute=this.activatedRoute,this.modal.routerBackOptions={relativeTo:this.activatedRoute},this.modal.routerBack=["../../"],this.modal.title="Excluir registro";var o=this.activatedRoute.params.subscribe(n=>{n.invoice_id?(this.id=this.crypto.decrypt(n.invoice_id),(0,m.n)(this.invoiceService.get(this.id)).then(i=>{setTimeout(()=>{this.modal=this.modalService.addModal(this.modal,"delete invoice")},200)}).catch(i=>{this.voltar()})):this.voltar()});this.subscription.push(o)}ngOnDestroy(){this.subscription.forEach(o=>o.unsubscribe())}voltar(){this.modalService.removeModal(this.modal.id)}send(){this.loading=!0,this.erro="",(0,m.n)(this.invoiceService.delete(this.id)).then(o=>{this.loading=!1,o.sucesso?((0,m.n)(this.invoiceService.getList()),this.voltar()):this.erro=o.mensagem}).catch(o=>{this.loading=!1,this.erro=(0,b.b)(o)})}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(d.gz),t.Y36(p.Z),t.Y36(v.q),t.Y36(T.w))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-delete"]],viewQuery:function(n,i){if(1&n&&(t.Gf(O,5),t.Gf(Y,5)),2&n){let a;t.iGM(a=t.CRH())&&(i.template=a.first),t.iGM(a=t.CRH())&&(i.icon=a.first)}},decls:4,vars:0,consts:[["icon",""],["template",""],[3,"icon"],[1,"mt-2"],["class","m-0  mt-1",4,"ngIf"],[1,"btn","btn-grey","ms-auto","d-flex","mt-2",3,"click"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],[1,"m-0","mt-1"],[1,"text-danger"],[1,"spinner-border","spinner-border-sm","mr-1"]],template:function(n,i){1&n&&(t.YNc(0,I,1,1,"ng-template",null,0,t.W1O),t.YNc(2,H,10,2,"ng-template",null,1,t.W1O))},dependencies:[u.O5,g.BN]})}return e})();var w=s(1064),j=s(2425),L=s(1433),l=s(6223);const G=["template"],R=["icon"];function q(e,r){1&e&&(t.TgZ(0,"span",3),t.O4$(),t.TgZ(1,"svg",4),t._UZ(2,"path",5),t.qZA()())}function D(e,r){1&e&&(t.TgZ(0,"p",12),t._uU(1,"Este campo \xe9 obrigat\xf3rio."),t.qZA())}function B(e,r){if(1&e&&(t.TgZ(0,"div"),t.YNc(1,D,2,0,"p",27),t.qZA()),2&e){t.oxw();const o=t.MAs(10);t.xp6(1),t.Q6J("ngIf",o.errors.required)}}function V(e,r){1&e&&(t.TgZ(0,"p",12),t._uU(1,"Este campo \xe9 obrigat\xf3rio."),t.qZA())}function z(e,r){if(1&e&&(t.TgZ(0,"div"),t.YNc(1,V,2,0,"p",27),t.qZA()),2&e){t.oxw();const o=t.MAs(18);t.xp6(1),t.Q6J("ngIf",o.errors.required)}}function K(e,r){1&e&&(t.TgZ(0,"p",12),t._uU(1,"Este campo \xe9 obrigat\xf3rio."),t.qZA())}function W(e,r){if(1&e&&(t.TgZ(0,"div"),t.YNc(1,K,2,0,"p",27),t.qZA()),2&e){t.oxw();const o=t.MAs(26);t.xp6(1),t.Q6J("ngIf",o.errors.required)}}function P(e,r){if(1&e&&(t.TgZ(0,"p",12),t._uU(1),t.qZA()),2&e){const o=t.oxw(3);t.xp6(1),t.Oqu(o.erro)}}function X(e,r){1&e&&(t.TgZ(0,"p",12),t._uU(1,"Preencha todos os campos obrigat\xf3rios (*) corretamente para salvar."),t.qZA())}function $(e,r){if(1&e&&(t.TgZ(0,"div",28),t.YNc(1,P,2,1,"p",27),t.YNc(2,X,2,0,"p",27),t.qZA()),2&e){t.oxw();const o=t.MAs(1),n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.erro),t.xp6(1),t.Q6J("ngIf",o.invalid&&!n.erro)}}function k(e,r){1&e&&t._UZ(0,"span",29)}function tt(e,r){if(1&e){const o=t.EpF();t.TgZ(0,"form",6,7),t.NdJ("ngSubmit",function(){t.CHM(o);const i=t.MAs(1),a=t.oxw();return t.KtG(a.send(i))}),t.TgZ(2,"div",8)(3,"div",9)(4,"div",10)(5,"label",11),t._uU(6,"Nome: "),t.TgZ(7,"span",12),t._uU(8,"*"),t.qZA()(),t.TgZ(9,"input",13,14),t.NdJ("ngModelChange",function(i){t.CHM(o);const a=t.oxw();return t.KtG(a.objeto.nome=i)})("change",function(){t.CHM(o);const i=t.MAs(10),a=t.oxw();return t.KtG(a.objeto.nome=i.value.trim())}),t.qZA(),t.YNc(11,B,2,1,"div",15),t.qZA(),t.TgZ(12,"div",16)(13,"label",17),t._uU(14,"C\xf3digo: "),t.TgZ(15,"span",12),t._uU(16,"*"),t.qZA()(),t.TgZ(17,"input",18,19),t.NdJ("ngModelChange",function(i){t.CHM(o);const a=t.oxw();return t.KtG(a.objeto.codigo=i)})("change",function(){t.CHM(o);const i=t.MAs(18),a=t.oxw();return t.KtG(a.objeto.codigo=i.value.trim())}),t.qZA(),t.YNc(19,z,2,1,"div",15),t.qZA(),t.TgZ(20,"div",16)(21,"label",20),t._uU(22,"S\xedmbolo: "),t.TgZ(23,"span",12),t._uU(24,"*"),t.qZA()(),t.TgZ(25,"input",21,22),t.NdJ("ngModelChange",function(i){t.CHM(o);const a=t.oxw();return t.KtG(a.objeto.simbolo=i)})("change",function(){t.CHM(o);const i=t.MAs(26),a=t.oxw();return t.KtG(a.objeto.simbolo=i.value.trim())}),t.qZA(),t.YNc(27,W,2,1,"div",15),t.qZA()(),t.TgZ(28,"div",23),t.YNc(29,$,3,2,"div",24),t.TgZ(30,"button",25),t.YNc(31,k,1,0,"span",26),t.TgZ(32,"span"),t._uU(33,"Salvar"),t.qZA()()()()()}if(2&e){const o=t.MAs(1),n=t.MAs(10),i=t.MAs(18),a=t.MAs(26),c=t.oxw();t.xp6(9),t.Q6J("ngModel",c.objeto.nome),t.xp6(2),t.Q6J("ngIf",n.touched&&n.errors),t.xp6(6),t.Q6J("ngModel",c.objeto.codigo),t.xp6(2),t.Q6J("ngIf",i.touched&&i.errors),t.xp6(6),t.Q6J("ngModel",c.objeto.simbolo),t.xp6(2),t.Q6J("ngIf",a.touched&&a.errors),t.xp6(2),t.Q6J("ngIf",c.erro||o.invalid),t.xp6(1),t.Q6J("disabled",o.invalid||c.loading),t.xp6(1),t.Q6J("ngIf",c.loading)}}let Z=(()=>{class e{constructor(o,n,i,a,c){this.activatedRoute=o,this.modalService=n,this.crypto=i,this.toastr=a,this.moedaService=c,this.objeto=new w.V,this.erro="",this.loading=!1,this.loadingCep=!1,this.subscription=[],this.isEditPage=!1,this.modal=new p.u}ngAfterViewInit(){this.modal.id=0,this.modal.template=this.template,this.modal.icon=this.icon,this.modal.style={"max-width":"600px",overflow:"visible"},this.modal.activatedRoute=this.activatedRoute,this.modal.routerBackOptions={relativeTo:this.activatedRoute},console.log("moeda");var o=this.activatedRoute.params.subscribe(n=>{n.moeda_id?(this.objeto.id=this.crypto.decrypt(n.moeda_id),this.modal.title="Editar Moeda",this.modal.routerBack=["../../"],this.isEditPage=!0,(0,m.n)(this.moedaService.get(this.objeto.id)).then(i=>{this.objeto=i,setTimeout(()=>{this.modal=this.modalService.addModal(this.modal,"moeda")},200)}).catch(i=>{this.voltar()})):(this.modal.title="Cadastrar Moeda",this.modal.routerBack=["../"],this.isEditPage=!1,setTimeout(()=>{this.modal=this.modalService.addModal(this.modal,"moeda")},200))});this.subscription.push(o)}ngOnDestroy(){this.subscription.forEach(o=>o.unsubscribe())}voltar(){this.modalService.removeModal(this.modal.id)}send(o){return o.invalid?(this.toastr.error("Campos inv\xe1lidos"),void(this.erro="Campos inv\xe1lidos")):(this.erro="",(0,m.n)(this.moedaService.send(this.objeto)).then(n=>{this.loading=!1,1==n.sucesso?((0,m.n)(this.moedaService.getList()),this.voltar()):(this.erro=n.mensagem,this.toastr.error(n.mensagem))}).catch(n=>{this.loading=!1,this.erro=(0,b.b)(n)}))}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(d.gz),t.Y36(p.Z),t.Y36(T.w),t.Y36(j._W),t.Y36(L.g))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-form"]],viewQuery:function(n,i){if(1&n&&(t.Gf(G,5),t.Gf(R,5)),2&n){let a;t.iGM(a=t.CRH())&&(i.template=a.first),t.iGM(a=t.CRH())&&(i.icon=a.first)}},decls:4,vars:0,consts:[["class","align-items-center"],["icon",""],["template",""],[1,"title-icon"],["xmlns","http://www.w3.org/2000/svg","height","16","width","16","viewBox","0 0 512 512","fill","currentColor"],["d","M243.4 2.6l-224 96c-14 6-21.8 21-18.7 35.8S16.8 160 32 160v8c0 13.3 10.7 24 24 24H456c13.3 0 24-10.7 24-24v-8c15.2 0 28.3-10.7 31.3-25.6s-4.8-29.9-18.7-35.8l-224-96c-8-3.4-17.2-3.4-25.2 0zM128 224H64V420.3c-.6 .3-1.2 .7-1.8 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9S17.9 512 32 512H480c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1V224H384V416H344V224H280V416H232V224H168V416H128V224zM256 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"],[1,"needs-validation",3,"ngSubmit"],["form","ngForm"],[1,"px-2"],[1,"row"],[1,"form-group","col-xl-4","col-lg-4","col-md-12","col-sm-12","col-12"],["for","nome"],[1,"text-danger"],["type","text","name","nome","id","nome","pattern","\\S(.*\\S)?","required","",1,"form-control",3,"ngModel","ngModelChange","change"],["nome","ngModel"],[4,"ngIf"],[1,"form-group","col-xl-4","col-lg-4","col-md-6","col-sm-6","col-12"],["for","codigo"],["type","text","name","codigo","id","codigo","pattern","\\S(.*\\S)?","required","",1,"form-control",3,"ngModel","ngModelChange","change"],["codigo","ngModel"],["for","simbolo"],["type","text","name","simbolo","id","simbolo","pattern","\\S(.*\\S)?","required","",1,"form-control",3,"ngModel","ngModelChange","change"],["simbolo","ngModel"],[1,"d-flex","align-items-center"],["class","m-0",4,"ngIf"],[1,"btn","btn-primary","mr-0","ms-auto",3,"disabled"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],["class","text-danger",4,"ngIf"],[1,"m-0"],[1,"spinner-border","spinner-border-sm","mr-1"]],template:function(n,i){1&n&&(t.YNc(0,q,3,0,"ng-template",0,1,t.W1O),t.YNc(2,tt,34,9,"ng-template",null,2,t.W1O))},dependencies:[u.O5,l._Y,l.Fj,l.JJ,l.JL,l.Q7,l.c5,l.On,l.F]})}return e})();var h=s(2996),C=s(4290),M=s(8902),et=s(7280);const ot=[{path:"",component:J,children:[{path:"cadastrar",component:x.U,data:{modalOrder:1},children:[{path:"banco",component:h.U,data:{modalOrder:2}},{path:"moeda",component:Z,data:{modalOrder:2}},{path:"instituicao-financeira",component:C.U,data:{modalOrder:2}},{path:"beneficiario",component:M.U,data:{modalOrder:2},children:[{path:"banco",component:h.U,data:{modalOrder:3}}]}]},{path:"editar/:invoice_id",component:x.U,data:{modalOrder:1},children:[{path:"banco",component:h.U,data:{modalOrder:2}},{path:"moeda",component:Z,data:{modalOrder:2}},{path:"instituicao-financeira",component:C.U,data:{modalOrder:2}},{path:"beneficiario",component:M.U,data:{modalOrder:2},children:[{path:"banco",component:h.U,data:{modalOrder:3}}]}]},{path:"excluir/:invoice_id",component:E,data:{modalOrder:1}},et.D]}];let nt=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275mod=t.oAB({type:e});static#o=this.\u0275inj=t.cJS({imports:[d.Bz.forChild(ot),d.Bz]})}return e})();var it=s(6208),at=s(2352);let st=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275mod=t.oAB({type:e});static#o=this.\u0275inj=t.cJS({imports:[u.ez,nt,l.u5,g.uH,it.m,at.kW]})}return e})()}}]);