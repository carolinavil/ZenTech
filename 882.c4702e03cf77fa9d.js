"use strict";(self.webpackChunkZenTech=self.webpackChunkZenTech||[]).push([[882],{1064:(O,T,a)=>{a.d(T,{V:()=>f}),a(5219),a(2832);class f{constructor(){this.id=0,this.nome="",this.simbolo="",this.codigo=""}}},7882:(O,T,a)=>{a.r(T),a.d(T,{EmpresaModule:()=>Ee});var g=a(6814),l=a(6223),f=a(5597),h=a(2352),m=a(132),c=a(2832),p=a(708),M=a(590),b=a(5219);class A{constructor(){this.id=0,this.nome="",this.logoDataUri="",this.endereco="",this.codigoRegistro="",this.socioDiretor="",this.rgSocioDiretor="",this.cpfSocioDiretor=""}}var C=[{field:"id",header:"Id",maskType:c.O.undefined,filterType:c.vA.text,filterDisplay:c.w2.menu,showAddButton:!1,showMatchMode:!0,showOperator:!1,filterMatchMode:b.a6.CONTAINS},{field:"nome",header:"Nome",maskType:c.O.undefined,filterType:c.vA.text,filterDisplay:c.w2.menu,showAddButton:!1,showMatchMode:!0,showOperator:!1,filterMatchMode:b.a6.CONTAINS},{field:"logoDataUri",header:"Logo",maskType:c.O.imageUrl,filterType:c.vA.none,filterDisplay:c.w2.none,sort:!1}],e=a(9291),_=a(8787),v=a(5038),S=a(6599);function w(o,s){1&o&&e._UZ(0,"span",13)}const I=function(){return["cadastrar"]};function J(o,s){1&o&&(e.TgZ(0,"div",14)(1,"a",15)(2,"span",16),e._uU(3," Cadastrar Empresa"),e.qZA()()()),2&o&&(e.xp6(1),e.Q6J("routerLink",e.DdM(1,I)))}let P=(()=>{class o{constructor(t,i){this.table=t,this.empresaService=i,this.faFilePdf=M.gSj,this.maskType=c.O,this.list=[],this.tableLinks=[],this.columns=C,this.subscription=[],this.loading=!1;var n=this.empresaService.list.subscribe(d=>this.list=Object.assign([],d));this.subscription.push(n);var r=this.empresaService.loading.subscribe(d=>this.loading=d);this.subscription.push(r),(0,p.n)(this.empresaService.getList(!0));var x=this.table.selected.subscribe(d=>{d&&(this.tableLinks=[{label:"Editar",routePath:["editar"],paramsFieldName:["id"]},{label:"Excluir",routePath:["excluir"],paramsFieldName:["id"]}],this.tableLinks=this.table.encryptParams(this.tableLinks))});this.subscription.push(x)}ngOnDestroy(){this.subscription.forEach(t=>t.unsubscribe())}getList(){(0,p.n)(this.empresaService.getList(!0))}static#e=this.\u0275fac=function(i){return new(i||o)(e.Y36(_.i),e.Y36(v.P))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-list"]],decls:17,vars:12,consts:[[1,"page"],[1,"page__header"],[1,"title-icon","align-items-center"],["xmlns","http://www.w3.org/2000/svg","height","16","width","16","viewBox","0 0 512 512","fill","currentColor"],["d","M243.4 2.6l-224 96c-14 6-21.8 21-18.7 35.8S16.8 160 32 160v8c0 13.3 10.7 24 24 24H456c13.3 0 24-10.7 24-24v-8c15.2 0 28.3-10.7 31.3-25.6s-4.8-29.9-18.7-35.8l-224-96c-8-3.4-17.2-3.4-25.2 0zM128 224H64V420.3c-.6 .3-1.2 .7-1.8 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9S17.9 512 32 512H480c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1V224H384V416H344V224H280V416H232V224H168V416H128V224zM256 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"],[1,"me-auto"],[1,"page__header-title"],[1,"ms-auto"],[1,"btn","btn-dark",3,"disabled","click"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],[1,"page__body"],["topActions",""],[3,"list","topActions","filterLink","filterTable","paginator","sortTable","menuTable","columns","tableLinks","selectable"],[1,"spinner-border","spinner-border-sm","me-1"],[1,"col-xl-4","col-lg-4","col-md-4","col-sm-6","col-12","mb-2","me-md-2","mx-md-1","px-0","ng-star-inserted"],[1,"btn","btn-primary","d-flex","align-items-center","align-baseline","justify-content-center","me-md-0","me-sm-1",3,"routerLink"],[2,"margin-top","-1px","margin-bottom","1px"]],template:function(i,n){if(1&i&&(e.TgZ(0,"section",0)(1,"div",1)(2,"span",2),e.O4$(),e.TgZ(3,"svg",3),e._UZ(4,"path",4),e.qZA()(),e.kcU(),e.TgZ(5,"div",5)(6,"h3",6),e._uU(7,"Empresas"),e.qZA()(),e.TgZ(8,"div",7)(9,"button",8),e.NdJ("click",function(){return n.getList()}),e.YNc(10,w,1,0,"span",9),e._uU(11,"Atualizar"),e.qZA()()(),e.TgZ(12,"div",10),e.YNc(13,J,4,2,"ng-template",null,11,e.W1O),e._UZ(15,"app-list-shared",12),e.qZA()(),e._UZ(16,"router-outlet")),2&i){const r=e.MAs(14);e.xp6(9),e.Q6J("disabled",n.loading),e.xp6(1),e.Q6J("ngIf",n.loading),e.xp6(5),e.Q6J("list",n.list)("topActions",r)("filterLink",!1)("filterTable",!0)("paginator",!0)("sortTable",!0)("menuTable",!0)("columns",n.columns)("tableLinks",n.tableLinks)("selectable",!0)}},dependencies:[g.O5,m.lC,m.rH,S.o]})}return o})();var q=a(1193),F=a(342),E=a(2855),N=a(9324),U=a(2667),Q=a(2425),y=a(3735);const R=["template"],Y=["icon"];function j(o,s){1&o&&(e.TgZ(0,"span",3),e.O4$(),e.TgZ(1,"svg",4),e._UZ(2,"path",5),e.qZA()())}function H(o,s){1&o&&(e.TgZ(0,"p",12),e._uU(1,"Este campo \xe9 obrigat\xf3rio."),e.qZA())}function G(o,s){if(1&o&&(e.TgZ(0,"div"),e.YNc(1,H,2,0,"p",46),e.qZA()),2&o){e.oxw();const t=e.MAs(10);e.xp6(1),e.Q6J("ngIf",t.errors.required)}}function B(o,s){1&o&&(e.TgZ(0,"p",12),e._uU(1,"Este campo \xe9 obrigat\xf3rio."),e.qZA())}function K(o,s){if(1&o&&(e.TgZ(0,"div"),e.YNc(1,B,2,0,"p",46),e.qZA()),2&o){e.oxw();const t=e.MAs(18);e.xp6(1),e.Q6J("ngIf",t.errors.required)}}function k(o,s){1&o&&(e.TgZ(0,"p",12),e._uU(1,"Este campo \xe9 obrigat\xf3rio."),e.qZA())}function V(o,s){if(1&o&&(e.TgZ(0,"div"),e.YNc(1,k,2,0,"p",46),e.qZA()),2&o){e.oxw();const t=e.MAs(27);e.xp6(1),e.Q6J("ngIf",t.errors.required)}}function W(o,s){1&o&&(e.TgZ(0,"p",12),e._uU(1,"Este campo \xe9 obrigat\xf3rio."),e.qZA())}function z(o,s){if(1&o&&(e.TgZ(0,"div"),e.YNc(1,W,2,0,"p",46),e.qZA()),2&o){e.oxw();const t=e.MAs(36);e.xp6(1),e.Q6J("ngIf",t.errors.required)}}function $(o,s){1&o&&(e.TgZ(0,"p",12),e._uU(1,"Este campo \xe9 obrigat\xf3rio."),e.qZA())}function X(o,s){1&o&&(e.TgZ(0,"p",12),e._uU(1,"ring_volume inv\xe1lido."),e.qZA())}function ee(o,s){1&o&&(e.TgZ(0,"p",12),e._uU(1,"RG j\xe1 cadastrado"),e.qZA())}function te(o,s){if(1&o&&(e.TgZ(0,"div"),e.YNc(1,$,2,0,"p",46),e.YNc(2,X,2,0,"p",46),e.YNc(3,ee,2,0,"p",46),e.qZA()),2&o){e.oxw();const t=e.MAs(45);e.xp6(1),e.Q6J("ngIf",t.errors.required),e.xp6(1),e.Q6J("ngIf",t.errors.mask||t.errors.invalid),e.xp6(1),e.Q6J("ngIf",t.errors.jaCadastrado)}}function oe(o,s){1&o&&(e.TgZ(0,"p",12),e._uU(1,"Este campo \xe9 obrigat\xf3rio."),e.qZA())}function ie(o,s){1&o&&(e.TgZ(0,"p",12),e._uU(1,"CPF inv\xe1lido."),e.qZA())}function ne(o,s){1&o&&(e.TgZ(0,"p",12),e._uU(1,"CPF j\xe1 cadastrado"),e.qZA())}function re(o,s){if(1&o&&(e.TgZ(0,"div"),e.YNc(1,oe,2,0,"p",46),e.YNc(2,ie,2,0,"p",46),e.YNc(3,ne,2,0,"p",46),e.qZA()),2&o){e.oxw();const t=e.MAs(53);e.xp6(1),e.Q6J("ngIf",t.errors.required),e.xp6(1),e.Q6J("ngIf",t.errors.mask||t.errors.invalid),e.xp6(1),e.Q6J("ngIf",t.errors.jaCadastrado)}}function ae(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"label",47)(1,"p",48),e._UZ(2,"i",49),e.qZA(),e.TgZ(3,"h3"),e._uU(4,"Clique e arraste para selecionar uma imagem"),e.qZA(),e.TgZ(5,"p"),e._uU(6,"ou "),e.TgZ(7,"label",50),e._uU(8,"clique aqui"),e.qZA(),e._uU(9," para abrir explorador de arquivos"),e.qZA(),e.TgZ(10,"input",51,52),e.NdJ("input",function(n){e.CHM(t);const r=e.oxw(2);return e.KtG(r.fileChange(n))}),e.qZA()()}}function se(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"button",53),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(2);return e.KtG(n.importarNovamente())}),e._uU(1,"Refazer upload"),e.qZA()}}function le(o,s){if(1&o&&e._UZ(0,"img",54),2&o){const t=e.oxw(2);e.Q6J("src",t.fileSrc,e.LSH)("alt",t.fileName)}}function ce(o,s){if(1&o&&(e.TgZ(0,"p",12),e._uU(1),e.qZA()),2&o){const t=e.oxw(3);e.xp6(1),e.Oqu(t.erro)}}function pe(o,s){1&o&&(e.TgZ(0,"p",12),e._uU(1,"Preencha todos os campos obrigat\xf3rios (*) corretamente para salvar."),e.qZA())}function me(o,s){if(1&o&&(e.TgZ(0,"div",55),e.YNc(1,ce,2,1,"p",46),e.YNc(2,pe,2,0,"p",46),e.qZA()),2&o){e.oxw();const t=e.MAs(1),i=e.oxw();e.xp6(1),e.Q6J("ngIf",i.erro),e.xp6(1),e.Q6J("ngIf",t.invalid&&!i.erro)}}function de(o,s){1&o&&e._UZ(0,"span",56)}function ge(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"form",6,7),e.NdJ("ngSubmit",function(){e.CHM(t);const n=e.MAs(1),r=e.oxw();return e.KtG(r.send(n))}),e.TgZ(2,"div",8)(3,"div",9)(4,"div",10)(5,"label",11),e._uU(6,"Nome: "),e.TgZ(7,"span",12),e._uU(8,"*"),e.qZA()(),e.TgZ(9,"input",13,14),e.NdJ("ngModelChange",function(n){e.CHM(t);const r=e.oxw();return e.KtG(r.objeto.nome=n)})("change",function(){e.CHM(t);const n=e.MAs(10),r=e.oxw();return e.KtG(r.objeto.nome=n.value.trim())}),e.qZA(),e.YNc(11,G,2,1,"div",15),e.qZA(),e.TgZ(12,"div",16)(13,"label",17),e._uU(14,"C\xf3digo do Registro: "),e.TgZ(15,"span",12),e._uU(16,"*"),e.qZA()(),e.TgZ(17,"input",18,19),e.NdJ("ngModelChange",function(n){e.CHM(t);const r=e.oxw();return e.KtG(r.objeto.codigoRegistro=n)})("change",function(){e.CHM(t);const n=e.MAs(18),r=e.oxw();return e.KtG(r.objeto.codigoRegistro=n.value.trim())}),e.qZA(),e.YNc(19,K,2,1,"div",15),e.qZA()(),e.TgZ(20,"div",9)(21,"div",20)(22,"label",21),e._uU(23,"Endere\xe7o: "),e.TgZ(24,"span",12),e._uU(25,"*"),e.qZA()(),e.TgZ(26,"input",22,23),e.NdJ("ngModelChange",function(n){e.CHM(t);const r=e.oxw();return e.KtG(r.objeto.endereco=n)})("change",function(){e.CHM(t);const n=e.MAs(27),r=e.oxw();return e.KtG(r.objeto.endereco=n.value.trim())}),e.qZA(),e.YNc(28,V,2,1,"div",15),e.qZA()(),e.TgZ(29,"div",9)(30,"div",20)(31,"label",24),e._uU(32,"S\xf3cio Diretor: "),e.TgZ(33,"span",12),e._uU(34,"*"),e.qZA()(),e.TgZ(35,"input",25,26),e.NdJ("ngModelChange",function(n){e.CHM(t);const r=e.oxw();return e.KtG(r.objeto.socioDiretor=n)})("change",function(){e.CHM(t);const n=e.MAs(36),r=e.oxw();return e.KtG(r.objeto.socioDiretor=n.value.trim())}),e.qZA(),e.YNc(37,z,2,1,"div",15),e.qZA()(),e.TgZ(38,"div",9)(39,"div",27)(40,"label",28),e._uU(41,"RG do S\xf3cio Diretor: "),e.TgZ(42,"span",12),e._uU(43,"*"),e.qZA()(),e.TgZ(44,"input",29,30),e.NdJ("ngModelChange",function(n){e.CHM(t);const r=e.oxw();return e.KtG(r.objeto.rgSocioDiretor=n)})("change",function(){e.CHM(t);const n=e.MAs(45),r=e.oxw();return e.KtG(r.validaRG(n,n.value))}),e.qZA(),e.YNc(46,te,4,3,"div",15),e.qZA(),e.TgZ(47,"div",27)(48,"label",31),e._uU(49,"CPF do S\xf3cio Diretor: "),e.TgZ(50,"span",12),e._uU(51,"*"),e.qZA()(),e.TgZ(52,"input",32,33),e.NdJ("ngModelChange",function(n){e.CHM(t);const r=e.oxw();return e.KtG(r.objeto.cpfSocioDiretor=n)})("change",function(){e.CHM(t);const n=e.MAs(53),r=e.oxw();return e.KtG(r.validaCPF(n,n.value))}),e.qZA(),e.YNc(54,re,4,3,"div",15),e.qZA()(),e.TgZ(55,"div",34)(56,"div",35)(57,"div")(58,"label",36),e._uU(59,"Logo: "),e.TgZ(60,"span",12),e._uU(61,"*"),e.qZA()(),e.YNc(62,ae,12,0,"label",37),e.TgZ(63,"div",38),e.YNc(64,se,2,0,"button",39),e.qZA(),e.TgZ(65,"div",40),e.YNc(66,le,1,2,"img",41),e.qZA()()()(),e.TgZ(67,"div",9)(68,"div",42),e.YNc(69,me,3,2,"div",43),e.TgZ(70,"button",44),e.YNc(71,de,1,0,"span",45),e.TgZ(72,"span"),e._uU(73,"Salvar"),e.qZA()()()()()()}if(2&o){const t=e.MAs(1),i=e.MAs(10),n=e.MAs(18),r=e.MAs(27),x=e.MAs(36),d=e.MAs(45),Z=e.MAs(53),u=e.oxw();e.xp6(9),e.Q6J("ngModel",u.objeto.nome),e.xp6(2),e.Q6J("ngIf",i.touched&&i.errors),e.xp6(6),e.Q6J("ngModel",u.objeto.codigoRegistro),e.xp6(2),e.Q6J("ngIf",n.touched&&n.errors),e.xp6(7),e.Q6J("ngModel",u.objeto.endereco),e.xp6(2),e.Q6J("ngIf",r.touched&&r.errors),e.xp6(7),e.Q6J("ngModel",u.objeto.socioDiretor),e.xp6(2),e.Q6J("ngIf",x.touched&&x.errors),e.xp6(7),e.Q6J("ngModel",u.objeto.rgSocioDiretor),e.xp6(2),e.Q6J("ngIf",d.touched&&d.errors),e.xp6(6),e.Q6J("ngModel",u.objeto.cpfSocioDiretor),e.xp6(2),e.Q6J("ngIf",Z.touched&&Z.errors),e.xp6(8),e.Q6J("ngIf",!u.fileUploaded),e.xp6(2),e.Q6J("ngIf",u.fileUploaded),e.xp6(2),e.Q6J("ngIf",u.fileSrc&&u.fileUploaded),e.xp6(3),e.Q6J("ngIf",u.erro||t.invalid),e.xp6(1),e.Q6J("disabled",t.invalid||u.loading),e.xp6(1),e.Q6J("ngIf",u.loading)}}let D=(()=>{class o{constructor(t,i,n,r,x){this.activatedRoute=t,this.modalService=i,this.crypto=n,this.toastr=r,this.empresaService=x,this.objeto=new A,this.erro="",this.loading=!1,this.loadingCep=!1,this.subscription=[],this.isEditPage=!1,this.modal=new E.u,this.fileUploaded=!1,this.fileSrc="",this.fileName="",this.fileLoading=!1}ngAfterViewInit(){this.modal.id=0,this.modal.template=this.template,this.modal.icon=this.icon,this.modal.style={"max-width":"600px"},this.modal.activatedRoute=this.activatedRoute,this.modal.routerBackOptions={relativeTo:this.activatedRoute};var t=this.activatedRoute.params.subscribe(i=>{i.empresa_id?(this.objeto.id=this.crypto.decrypt(i.empresa_id),this.modal.title="Editar Empresa",this.modal.routerBack=["../../"],this.isEditPage=!0,(0,p.n)(this.empresaService.get(this.objeto.id)).then(n=>{this.objeto=n,this.fileSrc=n.logoDataUri,this.fileLoading=!1,this.fileName="",this.fileUploaded=!0,setTimeout(()=>{this.modal=this.modalService.addModal(this.modal,"Empresa")},200)}).catch(n=>{this.voltar()})):(this.modal.title="Cadastrar Empresa",this.modal.routerBack=["../"],this.isEditPage=!1,setTimeout(()=>{this.modal=this.modalService.addModal(this.modal,"Empresa")},200))});this.subscription.push(t)}ngOnDestroy(){this.subscription.forEach(t=>t.unsubscribe())}voltar(){this.modalService.removeModal(this.modal)}fileChange(t){var i=t.target.files[0];if(this.importarNovamente(),i){this.fileLoading=!0;var n=new FileReader,r=this;n.onload=function(d){var Z=d.target?.result;r.fileSrc=Z,r.fileUploaded=!0,r.fileLoading=!1,r.fileName=i.name,r.objeto.logoDataUri=Z},n.onerror=function(d){r.fileLoading=!1,r.toastr.error("N\xe3o foi poss\xedvel realizar upload")},n.readAsDataURL(i)}else this.toastr.error("Selecione uma imagem para salvar.")}validaCPF(t,i){if(t){if(!i||0==i)return void t.control.setErrors({required:!0});if("cpfSocioDiretor"==t.name&&!(0,q.p)(i))return void t.control.setErrors({invalid:!0});if([].filter(d=>d.cpf==i).length>0)return void t.control.setErrors({jaCadastrado:!0});t.control.setErrors(null)}}validaRG(t,i){if(t){if(!i||0==i)return void t.control.setErrors({required:!0});if("rgSocioDiretor"==t.name){var n=function L(o){var s=o.toString(),t=parseInt(s);return!(Number.isNaN(t)||s.length<7)}(i);if(!n)return void t.control.setErrors({invalid:!0})}if([].filter(d=>d.rg==i).length>0)return void t.control.setErrors({jaCadastrado:!0});t.control.setErrors(null)}}importarNovamente(){this.fileUploaded=!1,this.fileSrc="",this.fileName=""}send(t){if(t.invalid)return this.toastr.error("Campos inv\xe1lidos"),void(this.erro="Campos inv\xe1lidos");this.erro="",this.request().then(i=>{this.loading=!1,1==i.sucesso?(i.objeto?(0,N.f)(this.empresaService,i.objeto):(0,p.n)(this.empresaService.getList()),this.voltar()):this.erro=i.mensagem}).catch(i=>{this.loading=!1,this.erro=(0,F.b)(i)})}request(){return(0,p.n)(0==this.objeto.id?this.empresaService.create(this.objeto):this.empresaService.edit(this.objeto))}static#e=this.\u0275fac=function(i){return new(i||o)(e.Y36(m.gz),e.Y36(E.Z),e.Y36(U.w),e.Y36(Q._W),e.Y36(v.P))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-form"]],viewQuery:function(i,n){if(1&i&&(e.Gf(R,5),e.Gf(Y,5)),2&i){let r;e.iGM(r=e.CRH())&&(n.template=r.first),e.iGM(r=e.CRH())&&(n.icon=r.first)}},decls:4,vars:0,consts:[["class","align-items-center"],["icon",""],["template",""],[1,"title-icon"],["xmlns","http://www.w3.org/2000/svg","height","16","width","16","viewBox","0 0 512 512","fill","currentColor"],["d","M243.4 2.6l-224 96c-14 6-21.8 21-18.7 35.8S16.8 160 32 160v8c0 13.3 10.7 24 24 24H456c13.3 0 24-10.7 24-24v-8c15.2 0 28.3-10.7 31.3-25.6s-4.8-29.9-18.7-35.8l-224-96c-8-3.4-17.2-3.4-25.2 0zM128 224H64V420.3c-.6 .3-1.2 .7-1.8 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9S17.9 512 32 512H480c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1V224H384V416H344V224H280V416H232V224H168V416H128V224zM256 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"],[1,"needs-validation",3,"ngSubmit"],["form","ngForm"],[1,"px-2"],[1,"row"],[1,"form-group","col-xl-8","col-lg-8","col-md-8","col-sm-8","col-12"],["for","nome"],[1,"text-danger"],["type","text","name","nome","id","nome","pattern","\\S(.*\\S)?","required","",1,"form-control",3,"ngModel","ngModelChange","change"],["nome","ngModel"],[4,"ngIf"],[1,"form-group","col-xl-4","col-lg-4","col-md-4","col-sm-4","col-12"],["for","codigoRegistro"],["type","text","name","codigoRegistro","id","codigoRegistro","pattern","\\S(.*\\S)?","required","",1,"form-control",3,"ngModel","ngModelChange","change"],["codigoRegistro","ngModel"],[1,"form-group","col-xl-12","col-lg-12","col-md-12","col-sm-12","col-12"],["for","endereco"],["type","text","name","endereco","id","endereco","pattern","\\S(.*\\S)?","required","",1,"form-control",3,"ngModel","ngModelChange","change"],["endereco","ngModel"],["for","socioDiretor"],["type","text","name","socioDiretor","id","socioDiretor","pattern","\\S(.*\\S)?","required","",1,"form-control",3,"ngModel","ngModelChange","change"],["socioDiretor","ngModel"],[1,"form-group","col-xl-6","col-lg-6","col-md-6","col-sm-6","col-12"],["for","rgSocioDiretor"],["type","text","name","rgSocioDiretor","id","rgSocioDiretor","mask","00.000.000-0","placeholder","00.000.000-0","required","","pattern","\\d{2}\\.?\\d{3}\\.?\\d{3}-?\\d{1}",1,"form-control",3,"ngModel","ngModelChange","change"],["rgSocioDiretor","ngModel"],["for","cpfSocioDiretor"],["type","text","name","cpfSocioDiretor","id","cpfSocioDiretor","mask","000.000.000-00","placeholder","000.000.000-00","required","","pattern","\\d{3}\\.?\\d{3}\\.?\\d{3}-?\\d{2}",1,"form-control",3,"ngModel","ngModelChange","change"],["cpfSocioDiretor","ngModel"],[1,"row","mt-3"],[1,"col-12"],["for","file",1,"mb-0"],["for","file","class","input-file-container",4,"ngIf"],[1,"my-3"],["class","btn btn-dark  ",3,"click",4,"ngIf"],[1,""],["class","input-file-image",3,"src","alt",4,"ngIf"],[1,"col","mt-3","mb-2","d-flex","align-items-center"],["class","m-0",4,"ngIf"],[1,"btn","btn-primary","me-0","ms-auto",3,"disabled"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],["class","text-danger",4,"ngIf"],["for","file",1,"input-file-container"],[1,"icon"],[1,"pi","pi-upload"],["for","file",1,"link"],["type","file","name","file","id","file","required","","accept","image/png, image/gif, image/jpeg, image/svg",3,"input"],["file",""],[1,"btn","btn-dark",3,"click"],[1,"input-file-image",3,"src","alt"],[1,"m-0"],[1,"spinner-border","spinner-border-sm","me-1"]],template:function(i,n){1&i&&(e.YNc(0,j,3,0,"ng-template",0,1,e.W1O),e.YNc(2,ge,74,18,"ng-template",null,2,e.W1O))},dependencies:[g.O5,l._Y,l.Fj,l.JJ,l.JL,l.Q7,l.c5,l.On,l.F,y.Z6],styles:[".input-file-container[_ngcontent-%COMP%]{width:99%;margin:10px 0;display:flex;flex-flow:column;padding:25px 20px;border:3px dashed rgb(var(--secondary));text-align:center;border-radius:27px;cursor:pointer;transition:.3s;position:relative}.input-file-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{font-size:60px;color:rgb(var(--primary));margin-bottom:15px}.input-file-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:17px;margin-bottom:5px}.input-file-container[_ngcontent-%COMP%]:hover, .input-file-container[_ngcontent-%COMP%]:active{background-color:#0000000d}.input-file-container[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;z-index:0;opacity:0}.content[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{vertical-align:bottom}.input-file-image[_ngcontent-%COMP%]{max-height:300px}"]})}return o})();var _e=a(1064);const ue=["template"],fe=["icon"];function he(o,s){if(1&o&&e._UZ(0,"fa-icon",2),2&o){const t=e.oxw();e.Q6J("icon",t.faTrash)}}function ve(o,s){if(1&o&&(e.TgZ(0,"div",7)(1,"p",8),e._uU(2),e.qZA()()),2&o){const t=e.oxw(2);e.xp6(2),e.Oqu(t.erro)}}function xe(o,s){1&o&&e._UZ(0,"span",9)}function Te(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"div")(1,"p",3),e._uU(2,"Tem certeza que deseja excluir esse registro? "),e.qZA(),e.TgZ(3,"p"),e._uU(4,"Ele n\xe3o poder\xe1 ser recuperado."),e.qZA(),e.YNc(5,ve,3,1,"div",4),e.TgZ(6,"button",5),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.send())}),e.YNc(7,xe,1,0,"span",6),e.TgZ(8,"span"),e._uU(9,"Excluir"),e.qZA()()()}if(2&o){const t=e.oxw();e.xp6(5),e.Q6J("ngIf",t.erro),e.xp6(2),e.Q6J("ngIf",t.loading)}}const Ze=[{path:"",component:P,children:[{path:"cadastrar",component:D,data:{modalOrder:1}},{path:"editar/:empresa_id",component:D,data:{modalOrder:1}},{path:"excluir/:empresa_id",component:(()=>{class o{constructor(t,i,n,r){this.activatedRoute=t,this.modalService=i,this.crypto=n,this.empresaService=r,this.faTrash=M.$aW,this.id=0,this.erro="",this.loading=!1,this.subscription=[],this.modal=new E.u,this.objeto=new _e.V}ngAfterViewInit(){this.modal.id=0,this.modal.template=this.template,this.modal.icon=this.icon,this.modal.style={"max-width":"400px"},this.modal.activatedRoute=this.activatedRoute,this.modal.routerBackOptions={relativeTo:this.activatedRoute};var t="";this.activatedRoute.snapshot.url.forEach(n=>{t+="../"}),this.modal.routerBack=[t],this.modal.title="Excluir registro";var i=this.activatedRoute.params.subscribe(n=>{n.empresa_id?(this.id=this.crypto.decrypt(n.empresa_id),this.modal=this.modalService.addModal(this.modal,"empresa")):this.voltar()});this.subscription.push(i)}ngOnDestroy(){this.subscription.forEach(t=>t.unsubscribe())}voltar(){this.modalService.removeModal(this.modal)}send(){this.loading=!0,this.erro="",(0,p.n)(this.empresaService.delete(this.id)).then(t=>{this.loading=!1,1==t.sucesso?(t.objeto?(0,N.O)(this.empresaService,t.objeto):(0,p.n)(this.empresaService.getList()),this.voltar()):this.erro=t.mensagem}).catch(t=>{this.loading=!1,this.erro=(0,F.b)(t)})}static#e=this.\u0275fac=function(i){return new(i||o)(e.Y36(m.gz),e.Y36(E.Z),e.Y36(U.w),e.Y36(v.P))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-delete"]],viewQuery:function(i,n){if(1&i&&(e.Gf(ue,5),e.Gf(fe,5)),2&i){let r;e.iGM(r=e.CRH())&&(n.template=r.first),e.iGM(r=e.CRH())&&(n.icon=r.first)}},decls:4,vars:0,consts:[["icon",""],["template",""],[3,"icon"],[1,"mt-2"],["class","m-0  mt-1",4,"ngIf"],[1,"btn","btn-grey","ms-auto","d-flex","mt-2","mb-2",3,"click"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],[1,"m-0","mt-1"],[1,"text-danger"],[1,"spinner-border","spinner-border-sm","me-1"]],template:function(i,n){1&i&&(e.YNc(0,he,1,1,"ng-template",null,0,e.W1O),e.YNc(2,Te,10,2,"ng-template",null,1,e.W1O))},dependencies:[g.O5,f.BN]})}return o})(),data:{modalOrder:1}},a(7280).D]}];let be=(()=>{class o{static#e=this.\u0275fac=function(i){return new(i||o)};static#t=this.\u0275mod=e.oAB({type:o});static#o=this.\u0275inj=e.cJS({imports:[m.Bz.forChild(Ze),m.Bz]})}return o})();var Ae=a(9227);let Ee=(()=>{class o{static#e=this.\u0275fac=function(i){return new(i||o)};static#t=this.\u0275mod=e.oAB({type:o});static#o=this.\u0275inj=e.cJS({providers:[(0,y.e$)()],imports:[g.ez,be,l.u5,f.uH,Ae.m,h.kW]})}return o})()},5038:(O,T,a)=>{a.d(T,{I:()=>A,P:()=>b});var g=a(9862),l=a(5619),f=a(9397),h=a(2096),m=a(553),c=a(9291),p=a(8787),M=a(2425);let b=(()=>{class C{constructor(_,v,S){this.table=_,this.http=v,this.toastr=S,this.url=m.N.url,this.list=new l.X([]),this.loading=new l.X(!1),this.empresaSelected=new l.X(new A)}getList(_=!1){return this.loading.next(_),this.table.loading.next(!0),this.http.get(`${this.url}/empresa`).pipe((0,f.b)({next:v=>(this.loading.next(!1),this.list.next(Object.assign([],v)),(0,h.of)(v)),error:v=>this.toastr.error("N\xe3o foi poss\xedvel carregar listagem de Empresas.")}))}get(_){return this.http.get(`${this.url}/empresa/${_}`,{headers:new g.WM({loading:"true"})})}create(_){return this.http.post(`${this.url}/empresa`,_)}edit(_){return this.http.put(`${this.url}/empresa`,_)}delete(_){return this.http.delete(`${this.url}/empresa/${_}`)}static#e=this.\u0275fac=function(v){return new(v||C)(c.LFG(p.i),c.LFG(g.eN),c.LFG(M._W))};static#t=this.\u0275prov=c.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"})}return C})();class A{constructor(){this.id=0}}},9324:(O,T,a)=>{function g(f,h,m="list"){console.log("remove");var c=JSON.parse(JSON.stringify(f[m].value));console.log("list",c);var p=c.findIndex(M=>M.id==h.id);console.log("index",p),console.log("item",c[p]),c.splice(p,1),console.log("list",c),f[m].next(c)}function l(f,h,m="list"){var c=JSON.parse(JSON.stringify(f[m].value));if(h.id){var p=c.findIndex(M=>M.id==h.id);-1==p&&c.push(h),c.splice(p,1,h)}else c.push(h);f[m].next(c)}a.d(T,{O:()=>g,f:()=>l})}}]);