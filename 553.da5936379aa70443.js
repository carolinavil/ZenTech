"use strict";(self.webpackChunkZenTech=self.webpackChunkZenTech||[]).push([[553],{2553:(le,b,n)=>{n.r(b),n.d(b,{BeneficiarioModule:()=>oe});var d=n(6814),g=n(5597),Z=n(2352),h=n(6223),O=n(4685),E=n(1532),c=n(132),L=n(9296),B=n(2832),l=n(708),T=n(590),e=n(9291),M=n(8787),x=n(6793),J=n(6434),Y=n(6599),I=n(5861),u=n(490),C=n(5038),N=n(5219);function R(i,r){if(1&i&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.Oqu(null==t.empresaSelected.empresa?null:t.empresaSelected.empresa.nome)}}function D(i,r){if(1&i&&e.YNc(0,R,2,1,"span",6),2&i){const t=e.oxw();e.Q6J("ngIf",t.empresaSelected.id)}}function Q(i,r){if(1&i&&(e.TgZ(0,"p"),e._uU(1),e.qZA(),e.TgZ(2,"p"),e._uU(3),e.qZA()),2&i){const t=r.$implicit;e.xp6(1),e.Oqu(t.nome),e.xp6(2),e.Oqu(t.logo)}}let F=(()=>{class i{constructor(t){this.empresaService=t,this.empresaSelected=new C.I,this.empresas=[],this.loading=!1,this.Role=u.uU,this.subscription=[];var s=this.empresaService.empresaSelected.subscribe(o=>{this.empresaSelected=o});this.subscription.push(s);var a=this.empresaService.list.subscribe(o=>this.empresas=o);this.subscription.push(a),(0,l.n)(this.empresaService.getList())}ngOnDestroy(){this.subscription.forEach(t=>t.unsubscribe())}empresaChange(t){var s=this;return(0,I.Z)(function*(){if(t){0==s.empresas.length&&(yield(0,l.n)(s.empresaService.getList()));var a=s.empresas.find(o=>o.id==t);s.empresaService.empresaSelected.next({empresa:a,id:t})}})()}static#e=this.\u0275fac=function(s){return new(s||i)(e.Y36(C.P))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-empresa-selected"]],decls:7,vars:5,consts:[[1,"form-group"],["for","empresa_Id"],["name","empresa_Id","id","empresa_Id","optionValue","id","filterBy","nome","styleClass","form-control","placeholder","Selecione uma empresa",3,"options","ngModel","filter","showClear","required","ngModelChange"],["empresa_Id","ngModel"],["pTemplate","selectedItem"],["pTemplate","item"],[4,"ngIf"]],template:function(s,a){1&s&&(e.TgZ(0,"div",0)(1,"label",1),e._uU(2,"Selecione a Empresa para carregar dados"),e.qZA(),e.TgZ(3,"p-dropdown",2,3),e.NdJ("ngModelChange",function(p){return a.empresaChange(p)})("ngModelChange",function(p){return a.empresaSelected.id=p}),e.YNc(5,D,1,1,"ng-template",4),e.YNc(6,Q,4,2,"ng-template",5),e.qZA()()),2&s&&(e.xp6(3),e.Q6J("options",a.empresas)("ngModel",a.empresaSelected.id)("filter",!0)("showClear",!1)("required",!0))},dependencies:[d.O5,h.JJ,h.Q7,h.On,N.jx,Z.Lt]})}return i})();function j(i,r){1&i&&e._UZ(0,"span",13)}const z=function(){return["cadastrar"]};function G(i,r){1&i&&(e.TgZ(0,"div",14)(1,"a",15)(2,"span",16),e._uU(3," Cadastrar Benefici\xe1rio"),e.qZA()()()),2&i&&(e.xp6(1),e.Q6J("routerLink",e.DdM(1,z)))}let H=(()=>{class i{constructor(t,s,a){this.table=t,this.beneficiarioService=s,this.accountService=a,this.faUsers=T.FVb,this.maskType=B.O,this.list=[],this.tableLinks=[],this.columns=L.XM,this.subscription=[],this.loading=!1;var o=this.beneficiarioService.list.subscribe(m=>this.list=Object.assign([],m));this.subscription.push(o);var p=this.beneficiarioService.loading.subscribe(m=>this.loading=m);this.subscription.push(p),(0,l.n)(this.beneficiarioService.getList(!0));var re=this.table.selected.subscribe(m=>{m&&(this.tableLinks=[{label:"Editar",routePath:["editar"],paramsFieldName:["id"]}],1==this.accountService.accountValue?.perfilAcesso_Id&&this.tableLinks.push({label:"Excluir",routePath:["excluir"],paramsFieldName:["id"]}),this.tableLinks=this.table.encryptParams(this.tableLinks))});this.subscription.push(re)}ngOnDestroy(){this.subscription.forEach(t=>t.unsubscribe())}getList(){(0,l.n)(this.beneficiarioService.getList(!0))}static#e=this.\u0275fac=function(s){return new(s||i)(e.Y36(M.i),e.Y36(x.i),e.Y36(J.B))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-list"]],decls:18,vars:13,consts:[[1,"page"],[1,"page__header"],[1,"title-icon","align-items-center"],[3,"icon"],[1,"me-auto"],[1,"page__header-title"],[1,"ms-auto"],[1,"btn","btn-dark",3,"disabled","click"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],[1,"ms-auto","mb-0","col-xl-3","col-lg-4","col-md-5","col-sm-5","col-12","px-0"],[1,"page__body"],["topActions",""],[3,"list","topActions","filterLink","filterTable","paginator","sortTable","menuTable","columns","tableLinks","selectable"],[1,"spinner-border","spinner-border-sm","me-1"],[1,"col-xl-4","col-lg-4","col-md-7","col-sm-6","col-12","mb-2","me-md-2","mx-md-1","px-0","ng-star-inserted"],[1,"btn","btn-primary","d-flex","align-items-center","align-baseline","justify-content-center","me-md-0","me-sm-1",2,"width","-1px",3,"routerLink"],[2,"margin-top","-1px","margin-bottom","1px"]],template:function(s,a){if(1&s&&(e.TgZ(0,"section",0)(1,"div",1)(2,"span",2),e._UZ(3,"fa-icon",3),e.qZA(),e.TgZ(4,"div",4)(5,"h3",5),e._uU(6,"Benefici\xe1rios"),e.qZA()(),e.TgZ(7,"div",6)(8,"button",7),e.NdJ("click",function(){return a.getList()}),e.YNc(9,j,1,0,"span",8),e._uU(10,"Atualizar"),e.qZA()(),e.TgZ(11,"div",9),e._UZ(12,"app-empresa-selected"),e.qZA()(),e.TgZ(13,"div",10),e.YNc(14,G,4,2,"ng-template",null,11,e.W1O),e._UZ(16,"app-list-shared",12),e.qZA()(),e._UZ(17,"router-outlet")),2&s){const o=e.MAs(15);e.xp6(3),e.Q6J("icon",a.faUsers),e.xp6(5),e.Q6J("disabled",a.loading),e.xp6(1),e.Q6J("ngIf",a.loading),e.xp6(7),e.Q6J("list",a.list)("topActions",o)("filterLink",!1)("filterTable",!0)("paginator",!0)("sortTable",!0)("menuTable",!0)("columns",a.columns)("tableLinks",a.tableLinks)("selectable",!0)}},dependencies:[d.O5,c.lC,c.rH,g.BN,Y.o,F]})}return i})();var S=n(8902),U=n(2855),V=n(342),W=n(9324),P=n(2667);const X=["template"],$=["icon"];function K(i,r){if(1&i&&e._UZ(0,"fa-icon",2),2&i){const t=e.oxw();e.Q6J("icon",t.faTrash)}}function k(i,r){if(1&i&&(e.TgZ(0,"div",7)(1,"p",8),e._uU(2),e.qZA()()),2&i){const t=e.oxw(2);e.xp6(2),e.Oqu(t.erro)}}function w(i,r){1&i&&e._UZ(0,"span",9)}function _(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"div")(1,"p",3),e._uU(2,"Tem certeza que deseja excluir esse registro? "),e.qZA(),e.TgZ(3,"p"),e._uU(4,"Ele n\xe3o poder\xe1 ser recuperado."),e.qZA(),e.YNc(5,k,3,1,"div",4),e.TgZ(6,"button",5),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.send())}),e.YNc(7,w,1,0,"span",6),e.TgZ(8,"span"),e._uU(9,"Excluir"),e.qZA()()()}if(2&i){const t=e.oxw();e.xp6(5),e.Q6J("ngIf",t.erro),e.xp6(2),e.Q6J("ngIf",t.loading)}}let q=(()=>{class i{constructor(t,s,a,o){this.activatedRoute=t,this.modalService=s,this.beneficiarioService=a,this.crypto=o,this.faTrash=T.$aW,this.id=0,this.erro="",this.loading=!1,this.subscription=[],this.modal=new U.u}ngAfterViewInit(){this.modal.id=0,this.modal.template=this.template,this.modal.icon=this.icon,this.modal.style={"max-width":"400px",overflow:"visible"},this.modal.activatedRoute=this.activatedRoute,this.modal.routerBackOptions={relativeTo:this.activatedRoute},this.modal.routerBack=["../../"],this.modal.title="Excluir registro";var t=this.activatedRoute.params.subscribe(s=>{if(s.beneficiario_id)try{this.id=this.crypto.decrypt(s.beneficiario_id),setTimeout(()=>{this.modal=this.modalService.addModal(this.modal,"delete beneficiario")},200)}catch{this.voltar()}else this.voltar()});this.subscription.push(t)}ngOnDestroy(){this.subscription.forEach(t=>t.unsubscribe())}voltar(){this.modalService.removeModal(this.modal)}send(){this.loading=!0,this.erro="",(0,l.n)(this.beneficiarioService.delete(this.id)).then(t=>{this.loading=!1,t.sucesso?(t.objeto?(0,W.O)(this.beneficiarioService,t.objeto):(0,l.n)(this.beneficiarioService.getList()),this.voltar()):this.erro=t.mensagem}).catch(t=>{this.loading=!1,this.erro=(0,V.b)(t)})}static#e=this.\u0275fac=function(s){return new(s||i)(e.Y36(c.gz),e.Y36(U.Z),e.Y36(x.i),e.Y36(P.w))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-delete"]],viewQuery:function(s,a){if(1&s&&(e.Gf(X,5),e.Gf($,5)),2&s){let o;e.iGM(o=e.CRH())&&(a.template=o.first),e.iGM(o=e.CRH())&&(a.icon=o.first)}},decls:4,vars:0,consts:[["icon",""],["template",""],[3,"icon"],[1,"mt-2"],["class","m-0  mt-1",4,"ngIf"],[1,"btn","btn-grey","ms-auto","d-flex","mt-2",3,"click"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],[1,"m-0","mt-1"],[1,"text-danger"],[1,"spinner-border","spinner-border-sm","me-1"]],template:function(s,a){1&s&&(e.YNc(0,K,1,1,"ng-template",null,0,e.W1O),e.YNc(2,_,10,2,"ng-template",null,1,e.W1O))},dependencies:[d.O5,g.BN]})}return i})();var y=n(2996),f=n(2951),A=n(8410),ee=n(7280),v=n(9742);const te=[{path:"",component:H,title:"Zentech - Benefici\xe1rios",children:[{path:"cadastrar",component:S.U,title:"Zentech - Cadastrar Benefici\xe1rio",data:{modalOrder:1},children:[{path:"banco",component:y.U,title:"Zentech - Cadastrar Banco",data:{modalOrder:2}},{path:"representante",component:f.U,title:"Zentech - Cadastrar Representante",data:{modalOrder:2}},{path:"representante/:representante_id",component:f.U,title:"Zentech - Editar Representante",data:{modalOrder:2}},{path:"representante/excluir/:representante_id",component:A.T,title:"Zentech - Excluir Representante",data:{modalOrder:2,data:[u.uU.Admin]},canActivate:[v.p]}]},{path:"editar/:beneficiario_id",title:"Zentech - Editar Benefici\xe1rio",component:S.U,data:{modalOrder:1},children:[{path:"banco",component:y.U,title:"Zentech - Cadastrar Banco",data:{modalOrder:2}},{path:"representante",component:f.U,title:"Zentech - Cadastrar Representante",data:{modalOrder:2}},{path:"representante/:representante_id",component:f.U,title:"Zentech - Editar Representante",data:{modalOrder:2}},{path:"representante/excluir/:representante_id",component:A.T,title:"Zentech - Excluir Representante",data:{modalOrder:2,data:[u.uU.Admin]},canActivate:[v.p]}]},{path:"excluir/:beneficiario_id",title:"Zentech - Excluir Benefici\xe1rio",component:q,data:{modalOrder:1,data:[u.uU.Admin]},canActivate:[v.p]},ee.D]}];let ie=(()=>{class i{static#e=this.\u0275fac=function(s){return new(s||i)};static#t=this.\u0275mod=e.oAB({type:i});static#i=this.\u0275inj=e.cJS({imports:[c.Bz.forChild(te),c.Bz]})}return i})();var ne=n(9227),se=n(3735),ae=n(5096);let oe=(()=>{class i{static#e=this.\u0275fac=function(s){return new(s||i)};static#t=this.\u0275mod=e.oAB({type:i});static#i=this.\u0275inj=e.cJS({providers:[(0,se.e$)()],imports:[d.ez,ie,g.uH,Z.kW,h.u5,ne.m,O.U$,E._8,ae.O]})}return i})()}}]);