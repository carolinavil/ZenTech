"use strict";(self.webpackChunkZenTech=self.webpackChunkZenTech||[]).push([[651],{1064:(E,v,o)=>{o.d(v,{V:()=>u}),o(5219),o(2832);class u{constructor(){this.id=0,this.nome="",this.simbolo="",this.codigo=""}}},2898:(E,v,o)=>{o.d(v,{T:()=>M,v:()=>u});var d=o(5219),a=o(2832);class u{constructor(){this.id=0,this.nome="",this.codigo=""}}var M=[{field:"id",header:"Id",maskType:a.O.undefined,filterType:a.vA.text,filterDisplay:a.w2.menu,showAddButton:!1,showMatchMode:!0,showOperator:!1,filterMatchMode:d.a6.CONTAINS},{field:"codigo",header:"C\xf3digo",maskType:a.O.undefined,filterType:a.vA.text,filterDisplay:a.w2.menu,showAddButton:!1,showMatchMode:!0,showOperator:!1,filterMatchMode:d.a6.CONTAINS},{field:"nome",header:"Nome",maskType:a.O.undefined,filterType:a.vA.text,filterDisplay:a.w2.menu,showAddButton:!1,showMatchMode:!0,showOperator:!1,filterMatchMode:d.a6.CONTAINS}]},8410:(E,v,o)=>{o.d(v,{T:()=>y});var d=o(1064),a=o(590),u=o(708),M=o(2855),e=o(342),t=o(9291),C=o(132),O=o(2667),x=o(3416),A=o(6814),h=o(5597);const D=["template"],P=["icon"];function Z(c,T){if(1&c&&t._UZ(0,"fa-icon",2),2&c){const r=t.oxw();t.Q6J("icon",r.faTrash)}}function I(c,T){if(1&c&&(t.TgZ(0,"div",7)(1,"p",8),t._uU(2),t.qZA()()),2&c){const r=t.oxw(2);t.xp6(2),t.Oqu(r.erro)}}function w(c,T){1&c&&t._UZ(0,"span",9)}function R(c,T){if(1&c){const r=t.EpF();t.TgZ(0,"div")(1,"p",3),t._uU(2,"Tem certeza que deseja excluir esse registro? "),t.qZA(),t.TgZ(3,"p"),t._uU(4,"Ele n\xe3o poder\xe1 ser recuperado."),t.qZA(),t.YNc(5,I,3,1,"div",4),t.TgZ(6,"button",5),t.NdJ("click",function(){t.CHM(r);const p=t.oxw();return t.KtG(p.send())}),t.YNc(7,w,1,0,"span",6),t.TgZ(8,"span"),t._uU(9,"Excluir"),t.qZA()()()}if(2&c){const r=t.oxw();t.xp6(5),t.Q6J("ngIf",r.erro),t.xp6(2),t.Q6J("ngIf",r.loading)}}let y=(()=>{class c{constructor(r,m,p,g){this.activatedRoute=r,this.modalService=m,this.crypto=p,this.representanteService=g,this.faTrash=a.$aW,this.id=0,this.erro="",this.loading=!1,this.subscription=[],this.modal=new M.u,this.objeto=new d.V}ngAfterViewInit(){this.modal.id=0,this.modal.template=this.template,this.modal.icon=this.icon,this.modal.style={"max-width":"400px"},this.modal.activatedRoute=this.activatedRoute,this.modal.routerBackOptions={relativeTo:this.activatedRoute};var r="";this.activatedRoute.snapshot.url.forEach(p=>{r+="../"}),this.modal.routerBack=[r],this.modal.title="Excluir registro";var m=this.activatedRoute.params.subscribe(p=>{p.representante_id?(this.id=this.crypto.decrypt(p.representante_id),this.modal=this.modalService.addModal(this.modal,"representante")):this.voltar()});this.subscription.push(m)}ngOnDestroy(){this.subscription.forEach(r=>r.unsubscribe())}voltar(){this.modalService.removeModal(this.modal)}send(){this.loading=!0,this.erro="",(0,u.n)(this.representanteService.delete(this.id)).then(r=>{this.loading=!1,r.sucesso?((0,u.n)(this.representanteService.getList()),this.voltar()):this.erro=r.mensagem}).catch(r=>{this.loading=!1,this.erro=(0,e.b)(r)})}static#e=this.\u0275fac=function(m){return new(m||c)(t.Y36(C.gz),t.Y36(M.Z),t.Y36(O.w),t.Y36(x.Z))};static#t=this.\u0275cmp=t.Xpm({type:c,selectors:[["app-delete"]],viewQuery:function(m,p){if(1&m&&(t.Gf(D,5),t.Gf(P,5)),2&m){let g;t.iGM(g=t.CRH())&&(p.template=g.first),t.iGM(g=t.CRH())&&(p.icon=g.first)}},decls:4,vars:0,consts:[["icon",""],["template",""],[3,"icon"],[1,"mt-2"],["class","m-0  mt-1",4,"ngIf"],[1,"btn","btn-grey","ms-auto","d-flex","mt-2","mb-2",3,"click"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],[1,"m-0","mt-1"],[1,"text-danger"],[1,"spinner-border","spinner-border-sm","me-1"]],template:function(m,p){1&m&&(t.YNc(0,Z,1,1,"ng-template",null,0,t.W1O),t.YNc(2,R,10,2,"ng-template",null,1,t.W1O))},dependencies:[A.O5,h.BN]})}return c})()},2951:(E,v,o)=>{o.d(v,{U:()=>g});var d=o(708),a=o(342),u=o(2855),M=o(2898),e=o(9291),t=o(132),C=o(2667),O=o(2425),x=o(3416),A=o(6814),h=o(6223);const D=["template"],P=["icon"];function Z(n,f){1&n&&(e.TgZ(0,"span",3),e.O4$(),e.TgZ(1,"svg",4),e._UZ(2,"path",5),e.qZA()())}function I(n,f){1&n&&(e.TgZ(0,"p",12),e._uU(1,"Este campo \xe9 obrigat\xf3rio."),e.qZA())}function w(n,f){if(1&n&&(e.TgZ(0,"div"),e.YNc(1,I,2,0,"p",24),e.qZA()),2&n){e.oxw();const i=e.MAs(10);e.xp6(1),e.Q6J("ngIf",i.errors.required)}}function R(n,f){1&n&&(e.TgZ(0,"p",12),e._uU(1,"Este campo \xe9 obrigat\xf3rio."),e.qZA())}function y(n,f){if(1&n&&(e.TgZ(0,"div"),e.YNc(1,R,2,0,"p",24),e.qZA()),2&n){e.oxw();const i=e.MAs(18);e.xp6(1),e.Q6J("ngIf",i.errors.required)}}function c(n,f){if(1&n&&(e.TgZ(0,"p",12),e._uU(1),e.qZA()),2&n){const i=e.oxw(3);e.xp6(1),e.Oqu(i.erro)}}function T(n,f){1&n&&(e.TgZ(0,"p",12),e._uU(1,"Preencha todos os campos obrigat\xf3rios (*) corretamente para salvar."),e.qZA())}function r(n,f){if(1&n&&(e.TgZ(0,"div",25),e.YNc(1,c,2,1,"p",24),e.YNc(2,T,2,0,"p",24),e.qZA()),2&n){e.oxw();const i=e.MAs(1),s=e.oxw();e.xp6(1),e.Q6J("ngIf",s.erro),e.xp6(1),e.Q6J("ngIf",i.invalid&&!s.erro)}}function m(n,f){1&n&&e._UZ(0,"span",26)}function p(n,f){if(1&n){const i=e.EpF();e.TgZ(0,"form",6,7),e.NdJ("ngSubmit",function(){e.CHM(i);const _=e.MAs(1),l=e.oxw();return e.KtG(l.send(_))}),e.TgZ(2,"div",8)(3,"div",9)(4,"div",10)(5,"label",11),e._uU(6,"Nome: "),e.TgZ(7,"span",12),e._uU(8,"*"),e.qZA()(),e.TgZ(9,"input",13,14),e.NdJ("ngModelChange",function(_){e.CHM(i);const l=e.oxw();return e.KtG(l.objeto.nome=_)})("change",function(){e.CHM(i);const _=e.MAs(10),l=e.oxw();return e.KtG(l.objeto.nome=_.value.trim())}),e.qZA(),e.YNc(11,w,2,1,"div",15),e.qZA(),e.TgZ(12,"div",16)(13,"label",17),e._uU(14,"C\xf3digo: "),e.TgZ(15,"span",12),e._uU(16,"*"),e.qZA()(),e.TgZ(17,"input",18,19),e.NdJ("ngModelChange",function(_){e.CHM(i);const l=e.oxw();return e.KtG(l.objeto.codigo=_)})("change",function(){e.CHM(i);const _=e.MAs(18),l=e.oxw();return e.KtG(l.objeto.codigo=_.value.trim())}),e.qZA(),e.YNc(19,y,2,1,"div",15),e.qZA()(),e.TgZ(20,"div",9)(21,"div",20),e.YNc(22,r,3,2,"div",21),e.TgZ(23,"button",22),e.YNc(24,m,1,0,"span",23),e.TgZ(25,"span"),e._uU(26,"Salvar"),e.qZA()()()()()()}if(2&n){const i=e.MAs(1),s=e.MAs(10),_=e.MAs(18),l=e.oxw();e.xp6(9),e.Q6J("ngModel",l.objeto.nome),e.xp6(2),e.Q6J("ngIf",s.touched&&s.errors),e.xp6(6),e.Q6J("ngModel",l.objeto.codigo),e.xp6(2),e.Q6J("ngIf",_.touched&&_.errors),e.xp6(3),e.Q6J("ngIf",l.erro||i.invalid),e.xp6(1),e.Q6J("disabled",i.invalid||l.loading),e.xp6(1),e.Q6J("ngIf",l.loading)}}let g=(()=>{class n{constructor(i,s,_,l,U){this.activatedRoute=i,this.modalService=s,this.crypto=_,this.toastr=l,this.representanteService=U,this.objeto=new M.v,this.erro="",this.loading=!1,this.loadingCep=!1,this.subscription=[],this.isEditPage=!1,this.modal=new u.u}ngAfterViewInit(){this.modal.id=0,this.modal.template=this.template,this.modal.icon=this.icon,this.modal.style={"max-width":"600px"},this.modal.activatedRoute=this.activatedRoute,this.modal.routerBackOptions={relativeTo:this.activatedRoute};var i=this.activatedRoute.params.subscribe(s=>{s.representante_id?(this.objeto.id=this.crypto.decrypt(s.representante_id),this.modal.title="Editar Representante",this.modal.routerBack=["../../"],this.isEditPage=!0,(0,d.n)(this.representanteService.get(this.objeto.id)).then(_=>{this.objeto=_,setTimeout(()=>{this.modal=this.modalService.addModal(this.modal,"Representante")},200)}).catch(_=>{this.voltar()})):(this.modal.title="Cadastrar Representante",this.modal.routerBack=["../"],this.isEditPage=!1,setTimeout(()=>{this.modal=this.modalService.addModal(this.modal,"Representante")},200))});this.subscription.push(i)}ngOnDestroy(){this.subscription.forEach(i=>i.unsubscribe())}voltar(){this.modalService.removeModal(this.modal)}send(i){if(i.invalid)return this.toastr.error("Campos inv\xe1lidos"),void(this.erro="Campos inv\xe1lidos");this.erro="",this.request().then(s=>{this.loading=!1,1==s.sucesso?((0,d.n)(this.representanteService.getList()),this.voltar()):(this.erro=s.mensagem,this.toastr.error(s.mensagem))}).catch(s=>{this.loading=!1,this.erro=(0,a.b)(s)})}request(){return(0,d.n)(0==this.objeto.id?this.representanteService.create(this.objeto):this.representanteService.edit(this.objeto))}static#e=this.\u0275fac=function(s){return new(s||n)(e.Y36(t.gz),e.Y36(u.Z),e.Y36(C.w),e.Y36(O._W),e.Y36(x.Z))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-form"]],viewQuery:function(s,_){if(1&s&&(e.Gf(D,5),e.Gf(P,5)),2&s){let l;e.iGM(l=e.CRH())&&(_.template=l.first),e.iGM(l=e.CRH())&&(_.icon=l.first)}},decls:4,vars:0,consts:[["class","align-items-center"],["icon",""],["template",""],[1,"title-icon"],["xmlns","http://www.w3.org/2000/svg","height","16","width","16","viewBox","0 0 512 512","fill","currentColor"],["d","M243.4 2.6l-224 96c-14 6-21.8 21-18.7 35.8S16.8 160 32 160v8c0 13.3 10.7 24 24 24H456c13.3 0 24-10.7 24-24v-8c15.2 0 28.3-10.7 31.3-25.6s-4.8-29.9-18.7-35.8l-224-96c-8-3.4-17.2-3.4-25.2 0zM128 224H64V420.3c-.6 .3-1.2 .7-1.8 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9S17.9 512 32 512H480c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1V224H384V416H344V224H280V416H232V224H168V416H128V224zM256 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"],[1,"needs-validation",3,"ngSubmit"],["form","ngForm"],[1,"px-2"],[1,"row"],[1,"form-group","col-xl-8","col-lg-8","col-md-8","col-sm-6","col-12"],["for","nome"],[1,"text-danger"],["type","text","name","nome","id","nome","pattern","\\S(.*\\S)?","required","",1,"form-control",3,"ngModel","ngModelChange","change"],["nome","ngModel"],[4,"ngIf"],[1,"form-group","col-xl-4","col-lg-4","col-md-4","col-sm-6","col-12"],["for","codigo"],["type","text","name","codigo","id","codigo","pattern","\\S(.*\\S)?","required","",1,"form-control",3,"ngModel","ngModelChange","change"],["codigo","ngModel"],[1,"col","mt-3","mb-2","d-flex","align-items-center"],["class","m-0",4,"ngIf"],[1,"btn","btn-primary","me-0","ms-auto",3,"disabled"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],["class","text-danger",4,"ngIf"],[1,"m-0"],[1,"spinner-border","spinner-border-sm","me-1"]],template:function(s,_){1&s&&(e.YNc(0,Z,3,0,"ng-template",0,1,e.W1O),e.YNc(2,p,27,7,"ng-template",null,2,e.W1O))},dependencies:[A.O5,h._Y,h.Fj,h.JJ,h.JL,h.Q7,h.c5,h.On,h.F]})}return n})()}}]);