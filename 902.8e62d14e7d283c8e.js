"use strict";(self.webpackChunkZenTech=self.webpackChunkZenTech||[]).push([[902],{9296:(O,E,a)=>{a.d(E,{F:()=>T,XM:()=>p});var d=a(5219),l=a(2832);class T{constructor(){this.id=0,this.nome="",this.cnpj=void 0,this.cep="",this.cidade_Id=void 0,this.logradouro="",this.numero="",this.codigoSwift="",this.banco_Id=void 0,this.conta="",this.pais_Id=void 0,this.representante=""}}var p=[{field:"nome",header:"Nome",maskType:l.O.undefined,filterType:l.vA.text,filterDisplay:l.w2.menu,filterShowAddButton:!0,filterShowMatchMode:!0,showOperator:!1,filterMatchMode:d.a6.CONTAINS},{field:"cnpj",header:"CNPJ",maskType:l.O.cnpj,filterType:l.vA.text,filterDisplay:l.w2.menu,filterShowAddButton:!0,filterShowMatchMode:!0,showOperator:!1,filterMatchMode:d.a6.CONTAINS},{field:"representante",header:"Representante",maskType:l.O.undefined,filterType:l.vA.text,filterDisplay:l.w2.menu,filterShowAddButton:!0,filterShowMatchMode:!0,showOperator:!1,filterMatchMode:d.a6.CONTAINS},{field:"codigoSwift",header:"C\xf3digo Swift",maskType:l.O.undefined,filterType:l.vA.text,filterDisplay:l.w2.menu,filterShowAddButton:!1,filterShowMatchMode:!1,showOperator:!1,filterMatchMode:d.a6.EQUALS},{field:"nomeBanco",header:"Banco",maskType:l.O.undefined,filterType:l.vA.text,filterDisplay:l.w2.menu,filterShowAddButton:!0,filterShowMatchMode:!0,showOperator:!1,filterMatchMode:d.a6.CONTAINS},{field:"conta",header:"Conta",maskType:l.O.undefined,filterType:l.vA.text,filterDisplay:l.w2.menu,filterShowAddButton:!0,filterShowMatchMode:!0,showOperator:!1,filterMatchMode:d.a6.CONTAINS},{field:"cidade",header:"Cidade",maskType:l.O.undefined,filterType:l.vA.text,filterDisplay:l.w2.menu,filterShowAddButton:!1,filterShowMatchMode:!1,showOperator:!1,filterMatchMode:d.a6.EQUALS},{field:"uf",header:"UF",maskType:l.O.undefined,filterType:l.vA.text,filterDisplay:l.w2.menu,filterShowAddButton:!1,filterShowMatchMode:!1,showOperator:!1,filterMatchMode:d.a6.EQUALS},{field:"nomePais",header:"Pa\xeds",maskType:l.O.undefined,filterType:l.vA.text,filterDisplay:l.w2.menu,filterShowAddButton:!0,filterShowMatchMode:!0,showOperator:!1,filterMatchMode:d.a6.CONTAINS}]},8902:(O,E,a)=>{a.d(E,{U:()=>Te});var d=a(708),l=a(342),Z=a(9296),T=a(2855),p=a(6687),s=a(9411),e=a(9291),C=a(132),v=a(2667),f=a(2425),x=a(6793),h=a(8487),b=a(5462),S=a(4809),P=a(7397),F=a(6814),A=a(6223),D=a(5219),j=a(8839),q=a(2352);const y=["template"],J=["icon"],B=["cep"];function L(t,_){1&t&&(e.TgZ(0,"span",3),e.O4$(),e.TgZ(1,"svg",4),e._UZ(2,"path",5),e.qZA()())}function K(t,_){1&t&&(e.TgZ(0,"p",12),e._uU(1,"Este campo \xe9 obrigat\xf3rio."),e.qZA())}function Q(t,_){if(1&t&&(e.TgZ(0,"div"),e.YNc(1,K,2,0,"p",59),e.qZA()),2&t){e.oxw();const o=e.MAs(10);e.xp6(1),e.Q6J("ngIf",o.errors.required)}}function Y(t,_){1&t&&(e.TgZ(0,"p",12),e._uU(1,"Este campo \xe9 obrigat\xf3rio."),e.qZA())}function R(t,_){1&t&&(e.TgZ(0,"p",12),e._uU(1,"CNPJ inv\xe1lido."),e.qZA())}function W(t,_){if(1&t&&(e.TgZ(0,"div"),e.YNc(1,Y,2,0,"p",59),e.YNc(2,R,2,0,"p",59),e.qZA()),2&t){e.oxw();const o=e.MAs(18);e.xp6(1),e.Q6J("ngIf",o.errors.required),e.xp6(1),e.Q6J("ngIf",o.errors.mask||o.errors.invalid)}}function H(t,_){if(1&t&&(e.TgZ(0,"div")(1,"p"),e._uU(2),e.qZA(),e.TgZ(3,"p"),e._uU(4),e.qZA()()),2&t){const o=_.$implicit;e.xp6(2),e.Oqu(o.nome),e.xp6(2),e.Oqu(o.cidade)}}const G=function(){return["./banco"]};function V(t,_){1&t&&(e.TgZ(0,"div",60),e._uU(1," N\xe3o encontrou? Clique para "),e.TgZ(2,"a",61),e._uU(3,"adicionar"),e.qZA()()),2&t&&(e.xp6(2),e.Q6J("routerLink",e.DdM(1,G)))}function z(t,_){1&t&&(e.TgZ(0,"p",12),e._uU(1,"Este campo \xe9 obrigat\xf3rio."),e.qZA())}function $(t,_){if(1&t&&(e.TgZ(0,"div"),e.YNc(1,z,2,0,"p",59),e.qZA()),2&t){e.oxw();const o=e.MAs(27);e.xp6(1),e.Q6J("ngIf",o.errors.required)}}function X(t,_){1&t&&(e.TgZ(0,"p",12),e._uU(1,"Este campo \xe9 obrigat\xf3rio."),e.qZA())}function k(t,_){if(1&t&&(e.TgZ(0,"div"),e.YNc(1,X,2,0,"p",59),e.qZA()),2&t){e.oxw();const o=e.MAs(37);e.xp6(1),e.Q6J("ngIf",o.errors.required)}}function ee(t,_){1&t&&(e.TgZ(0,"p",12),e._uU(1,"Este campo \xe9 obrigat\xf3rio."),e.qZA())}function te(t,_){if(1&t&&(e.TgZ(0,"div"),e.YNc(1,ee,2,0,"p",59),e.qZA()),2&t){e.oxw();const o=e.MAs(46);e.xp6(1),e.Q6J("ngIf",o.errors.required)}}function oe(t,_){1&t&&(e.TgZ(0,"p",12),e._uU(1,"Este campo \xe9 obrigat\xf3rio."),e.qZA())}function ne(t,_){if(1&t&&(e.TgZ(0,"div"),e.YNc(1,oe,2,0,"p",59),e.qZA()),2&t){e.oxw();const o=e.MAs(54);e.xp6(1),e.Q6J("ngIf",o.errors.required)}}function ie(t,_){1&t&&(e.TgZ(0,"p",12),e._uU(1,"Este campo \xe9 obrigat\xf3rio."),e.qZA())}function re(t,_){1&t&&(e.TgZ(0,"p",12),e._uU(1,"CEP inv\xe1lido."),e.qZA())}function ae(t,_){1&t&&(e.TgZ(0,"p",12),e._uU(1,"CEP inv\xe1lido."),e.qZA())}function se(t,_){if(1&t&&(e.TgZ(0,"div"),e.YNc(1,ie,2,0,"p",59),e.YNc(2,re,2,0,"p",59),e.YNc(3,ae,2,0,"p",59),e.qZA()),2&t){e.oxw();const o=e.MAs(63);e.xp6(1),e.Q6J("ngIf",o.errors.required),e.xp6(1),e.Q6J("ngIf",o.errors.mask),e.xp6(1),e.Q6J("ngIf",o.errors.invalid)}}function le(t,_){1&t&&(e.TgZ(0,"p",12),e._uU(1,"Este campo \xe9 obrigat\xf3rio."),e.qZA())}function _e(t,_){if(1&t&&(e.TgZ(0,"div"),e.YNc(1,le,2,0,"p",59),e.qZA()),2&t){e.oxw();const o=e.MAs(71);e.xp6(1),e.Q6J("ngIf",o.errors.required)}}function de(t,_){1&t&&(e.TgZ(0,"p",12),e._uU(1,"Este campo \xe9 obrigat\xf3rio."),e.qZA())}function ce(t,_){if(1&t&&(e.TgZ(0,"div"),e.YNc(1,de,2,0,"p",59),e.qZA()),2&t){e.oxw();const o=e.MAs(79);e.xp6(1),e.Q6J("ngIf",o.errors.required)}}function pe(t,_){1&t&&(e.TgZ(0,"p",12),e._uU(1,"Este campo \xe9 obrigat\xf3rio."),e.qZA())}function me(t,_){if(1&t&&(e.TgZ(0,"div"),e.YNc(1,pe,2,0,"p",59),e.qZA()),2&t){e.oxw();const o=e.MAs(88);e.xp6(1),e.Q6J("ngIf",o.errors.required)}}function ge(t,_){1&t&&(e.TgZ(0,"p",12),e._uU(1,"Este campo \xe9 obrigat\xf3rio."),e.qZA())}function ue(t,_){if(1&t&&(e.TgZ(0,"div"),e.YNc(1,ge,2,0,"p",59),e.qZA()),2&t){e.oxw();const o=e.MAs(96);e.xp6(1),e.Q6J("ngIf",o.errors.required)}}function fe(t,_){if(1&t&&(e.TgZ(0,"p",12),e._uU(1),e.qZA()),2&t){const o=e.oxw(3);e.xp6(1),e.Oqu(o.erro)}}function he(t,_){1&t&&(e.TgZ(0,"p",12),e._uU(1,"Preencha todos os campos obrigat\xf3rios (*) corretamente para salvar."),e.qZA())}function Ce(t,_){if(1&t&&(e.TgZ(0,"div",62),e.YNc(1,fe,2,1,"p",59),e.YNc(2,he,2,0,"p",59),e.qZA()),2&t){e.oxw();const o=e.MAs(1),r=e.oxw();e.xp6(1),e.Q6J("ngIf",r.erro),e.xp6(1),e.Q6J("ngIf",o.invalid&&!r.erro)}}function Me(t,_){1&t&&e._UZ(0,"span",63)}function ve(t,_){if(1&t){const o=e.EpF();e.TgZ(0,"form",6,7),e.NdJ("ngSubmit",function(){e.CHM(o);const n=e.MAs(1),i=e.oxw();return e.KtG(i.send(n))}),e.TgZ(2,"div",8)(3,"div",9)(4,"div",10)(5,"label",11),e._uU(6,"Nome: "),e.TgZ(7,"span",12),e._uU(8,"*"),e.qZA()(),e.TgZ(9,"input",13,14),e.NdJ("ngModelChange",function(n){e.CHM(o);const i=e.oxw();return e.KtG(i.objeto.nome=n)})("change",function(){e.CHM(o);const n=e.MAs(10),i=e.oxw();return e.KtG(i.objeto.nome=n.value.trim())}),e.qZA(),e.YNc(11,Q,2,1,"div",15),e.qZA(),e.TgZ(12,"div",16)(13,"label",17),e._uU(14,"CNPJ: "),e.TgZ(15,"span",18),e._uU(16,"*"),e.qZA()(),e.TgZ(17,"input",19,20),e.NdJ("ngModelChange",function(n){e.CHM(o);const i=e.oxw();return e.KtG(i.objeto.cnpj=n)})("change",function(){e.CHM(o);const n=e.MAs(18),i=e.oxw();return e.KtG(i.validaCNPJ(n))}),e.qZA(),e.YNc(19,W,3,2,"div",15),e.qZA()(),e.TgZ(20,"div",9)(21,"div",21)(22,"label",22),e._uU(23,"Banco: "),e.TgZ(24,"span",12),e._uU(25,"*"),e.qZA()(),e.TgZ(26,"p-dropdown",23,24),e.NdJ("ngModelChange",function(n){e.CHM(o);const i=e.oxw();return e.KtG(i.objeto.banco_Id=n)}),e.YNc(28,H,5,2,"ng-template",25),e.YNc(29,V,4,2,"ng-template",26),e.qZA(),e.YNc(30,$,2,1,"div",15),e.qZA(),e.TgZ(31,"div",21)(32,"label",27),e._uU(33,"Conta: "),e.TgZ(34,"span",12),e._uU(35,"*"),e.qZA()(),e.TgZ(36,"input",28,29),e.NdJ("ngModelChange",function(n){e.CHM(o);const i=e.oxw();return e.KtG(i.objeto.conta=n)})("change",function(){e.CHM(o);const n=e.MAs(37),i=e.oxw();return e.KtG(i.objeto.conta=n.value.trim())}),e.qZA(),e.YNc(38,k,2,1,"div",15),e.qZA()(),e.TgZ(39,"div",9)(40,"div",30)(41,"label",31),e._uU(42,"C\xf3digo Swift: "),e.TgZ(43,"span",18),e._uU(44,"*"),e.qZA()(),e.TgZ(45,"input",32,33),e.NdJ("ngModelChange",function(n){e.CHM(o);const i=e.oxw();return e.KtG(i.objeto.codigoSwift=n)})("change",function(){e.CHM(o);const n=e.MAs(46),i=e.oxw();return e.KtG(i.objeto.codigoSwift=n.value.trim())}),e.qZA(),e.YNc(47,te,2,1,"div",15),e.qZA(),e.TgZ(48,"div",34)(49,"label",35),e._uU(50,"Representante: "),e.TgZ(51,"span",18),e._uU(52,"*"),e.qZA()(),e.TgZ(53,"input",36,37),e.NdJ("ngModelChange",function(n){e.CHM(o);const i=e.oxw();return e.KtG(i.objeto.representante=n)})("change",function(){e.CHM(o);const n=e.MAs(54),i=e.oxw();return e.KtG(i.objeto.representante=n.value.trim())}),e.qZA(),e.YNc(55,ne,2,1,"div",15),e.qZA()(),e.TgZ(56,"div",9)(57,"div",38)(58,"label",39),e._uU(59,"CEP: "),e.TgZ(60,"span",18),e._uU(61,"*"),e.qZA()(),e.TgZ(62,"input",40,41),e.NdJ("blur",function(){e.CHM(o);const n=e.MAs(63),i=e.oxw();return e.KtG(i.buscaCEP(n))})("ngModelChange",function(n){e.CHM(o);const i=e.oxw();return e.KtG(i.objeto.cep=n)})("change",function(){e.CHM(o);const n=e.MAs(63),i=e.oxw();return e.KtG(i.objeto.cep=n.value.trim())}),e.qZA(),e.YNc(64,se,4,3,"div",15),e.qZA(),e.TgZ(65,"div",21)(66,"label",42),e._uU(67,"Logradouro: "),e.TgZ(68,"span",12),e._uU(69,"*"),e.qZA()(),e.TgZ(70,"input",43,44),e.NdJ("ngModelChange",function(n){e.CHM(o);const i=e.oxw();return e.KtG(i.objeto.logradouro=n)})("change",function(){e.CHM(o);const n=e.MAs(71),i=e.oxw();return e.KtG(i.objeto.logradouro=n.value.trim())}),e.qZA(),e.YNc(72,_e,2,1,"div",15),e.qZA(),e.TgZ(73,"div",45)(74,"label",46),e._uU(75,"N\xb0: "),e.TgZ(76,"span",12),e._uU(77,"*"),e.qZA()(),e.TgZ(78,"input",47,48),e.NdJ("ngModelChange",function(n){e.CHM(o);const i=e.oxw();return e.KtG(i.objeto.numero=n)})("change",function(){e.CHM(o);const n=e.MAs(79),i=e.oxw();return e.KtG(i.objeto.numero=n.value.trim())}),e.qZA(),e.YNc(80,ce,2,1,"div",15),e.qZA()(),e.TgZ(81,"div",9)(82,"div",21)(83,"label",49),e._uU(84,"Cidade: "),e.TgZ(85,"span",12),e._uU(86,"*"),e.qZA()(),e.TgZ(87,"p-dropdown",50,51),e.NdJ("ngModelChange",function(n){e.CHM(o);const i=e.oxw();return e.KtG(i.objeto.cidade_Id=n)}),e.qZA(),e.YNc(89,me,2,1,"div",15),e.qZA(),e.TgZ(90,"div",21)(91,"label",52),e._uU(92,"Pa\xeds: "),e.TgZ(93,"span",12),e._uU(94,"*"),e.qZA()(),e.TgZ(95,"p-dropdown",53,54),e.NdJ("ngModelChange",function(n){e.CHM(o);const i=e.oxw();return e.KtG(i.objeto.pais_Id=n)}),e.qZA(),e.YNc(97,ue,2,1,"div",15),e.qZA()(),e.TgZ(98,"div",9)(99,"div",55),e.YNc(100,Ce,3,2,"div",56),e.TgZ(101,"button",57),e.YNc(102,Me,1,0,"span",58),e.TgZ(103,"span"),e._uU(104,"Salvar"),e.qZA()()()()()()}if(2&t){const o=e.MAs(1),r=e.MAs(10),n=e.MAs(18),i=e.MAs(27),g=e.MAs(37),m=e.MAs(46),u=e.MAs(54),I=e.MAs(63),w=e.MAs(71),M=e.MAs(79),U=e.MAs(88),N=e.MAs(96),c=e.oxw();e.xp6(9),e.Q6J("ngModel",c.objeto.nome),e.xp6(2),e.Q6J("ngIf",r.touched&&r.errors),e.xp6(6),e.Q6J("ngModel",c.objeto.cnpj),e.xp6(2),e.Q6J("ngIf",n.touched&&n.errors),e.xp6(7),e.Q6J("options",c.bancos)("ngModel",c.objeto.banco_Id)("styleClass","form-control "+(c.loadingBanco?"form-control-loading":""))("showClear",!0)("filter",!0)("required",!0)("showClear",!0),e.xp6(4),e.Q6J("ngIf",i.touched&&i.errors),e.xp6(6),e.Q6J("ngModel",c.objeto.conta),e.xp6(2),e.Q6J("ngIf",g.touched&&g.errors),e.xp6(7),e.Q6J("ngModel",c.objeto.codigoSwift),e.xp6(2),e.Q6J("ngIf",m.touched&&m.errors),e.xp6(6),e.Q6J("ngModel",c.objeto.representante),e.xp6(2),e.Q6J("ngIf",u.touched&&u.errors),e.xp6(7),e.Q6J("ngModel",c.objeto.cep),e.xp6(2),e.Q6J("ngIf",I.touched&&I.errors),e.xp6(6),e.Q6J("ngModel",c.objeto.logradouro)("disabled",c.cepCarregado),e.xp6(2),e.Q6J("ngIf",w.touched&&w.errors),e.xp6(6),e.Q6J("ngModel",c.objeto.numero),e.xp6(2),e.Q6J("ngIf",M.touched&&M.errors),e.xp6(7),e.Q6J("options",c.cidades)("ngModel",c.objeto.cidade_Id)("styleClass","form-control"+(c.loadingCidades?"form-control-loading":""))("placeholder","Selecione")("disabled",c.loadingCidades)("virtualScroll",!0)("virtualScrollItemSize",10)("required",!0)("filter",!0)("showClear",!0),e.xp6(2),e.Q6J("ngIf",U.touched&&U.errors),e.xp6(6),e.Q6J("styleClass","form-control"+(c.loadingPaises?"form-control-loading":""))("options",c.paises)("ngModel",c.objeto.pais_Id)("placeholder","Selecione")("disabled",c.loadingPaises)("virtualScroll",!0)("virtualScrollItemSize",10)("required",!0)("filter",!0)("showClear",!0),e.xp6(2),e.Q6J("ngIf",N.touched&&N.errors),e.xp6(3),e.Q6J("ngIf",c.erro||o.invalid),e.xp6(1),e.Q6J("disabled",o.invalid||c.loading),e.xp6(1),e.Q6J("ngIf",c.loading)}}let Te=(()=>{class t{constructor(o,r,n,i,g,m,u,I,w){this.activatedRoute=o,this.modalService=r,this.crypto=n,this.toastr=i,this.beneficiarioService=g,this.cepService=m,this.cidadesService=u,this.bancoService=I,this.paisesService=w,this.objeto=new Z.F,this.erro="",this.loading=!1,this.subscription=[],this.isEditPage=!0,this.modal=new T.u,this.cepCarregado=!1,this.loadingCep=!1,this.loadingCNPJ=!1,this.loadingBanco=!0,this.loadingCidades=!0,this.cidadesGrouped=[],this.loadingBeneficiario=!0,this.beneficiarios=[],this.loadingPaises=!0,this.paises=[],console.log("beneficiario"),(0,d.n)(this.bancoService.getList()).then(M=>{this.loadingBanco=!1,this.bancos=M}),(0,d.n)(this.cidadesService.getCidade()).then(M=>{this.loadingCidades=!1,this.cidades=M,this.groupCidades()}),(0,d.n)(this.paisesService.getPais()).then(M=>{this.loadingPaises=!1,this.paises=M}),(0,d.n)(this.beneficiarioService.getList()).then(M=>{this.loadingBeneficiario=!1,this.beneficiarios=M})}ngAfterViewInit(){this.modal.id=0,this.modal.template=this.template,this.modal.icon=this.icon,this.modal.style={"max-width":"600px",overflow:"visible"},this.modal.activatedRoute=this.activatedRoute,this.modal.routerBackOptions={relativeTo:this.activatedRoute};var o=this.activatedRoute.params.subscribe(r=>{r.beneficiario_id?(this.objeto.id=this.crypto.decrypt(r.beneficiario_id),this.modal.title="Editar Benefici\xe1rio",this.modal.routerBack=["../../"],this.isEditPage=!0,(0,d.n)(this.beneficiarioService.get(this.objeto.id)).then(n=>{n.cnpj=n.cnpj.toString().padStart(14,"0"),n.cep=n.cep.toString().padStart(8,"0"),this.objeto=n,setTimeout(()=>{this.buscaCEP(this.cep)},500),setTimeout(()=>{this.modal=this.modalService.addModal(this.modal,"beneficiario")},200)}).catch(n=>{this.voltar()})):(this.modal.title="Cadastrar Benefici\xe1rio",this.modal.routerBack=["../"],this.isEditPage=!1,this.objeto.pais_Id=30,this.objeto.cidade_Id=5270,setTimeout(()=>{this.modal=this.modalService.addModal(this.modal,"beneficiario")},200))});this.subscription.push(o)}ngOnDestroy(){this.subscription.forEach(o=>o.unsubscribe())}voltar(){this.modalService.removeModal(this.modal.id)}buscaCEP(o){if(this.loadingCep=!0,o.control.setErrors(null),!this.validaCep(o))return this.toastr.error("CEP inv\xe1lido."),o.control.setErrors({invalid:!0}),void(this.cepCarregado=!1);(0,d.n)(this.cepService.buscar(this.objeto.cep)).then(r=>{if(1==r.erro)return this.cepCarregado=!1,this.toastr.error("CEP inv\xe1lido."),o.control.setErrors({invalid:!0}),void(this.cepCarregado=!1);this.objeto.logradouro=r.logradouro+" , "+r.bairro+" - "+r.uf;var n=r.localidade.toLowerCase(),i=this.cidades.find(g=>{var m=g.nomeCidade.toLowerCase(),u=g.sigla.toLowerCase();return(m==n||n.includes(m)||m.includes(n))&&r.uf.toLowerCase()==u});i&&(this.objeto.cidade_Id=i.id),console.log("cidade",i),this.cepCarregado=!0}).catch(r=>{this.toastr.error("N\xe3o foi poss\xedvel carregar CEP"),this.cepCarregado=!1}).finally(()=>this.loadingCep=!1)}validaCep(o){return this.loadingCep=!0,this.objeto.cep.trim()?8!=this.objeto.cep.trim().length?(setTimeout(()=>{o.control.setErrors({invalid:!0})},300),this.loadingCep=!1,!1):(0,p.c)(this.objeto.cep)?(this.loadingCep=!1,setTimeout(()=>{o.control.setErrors(null)},300),!0):(setTimeout(()=>{o.control.setErrors({invalid:!0})},300),this.loadingCep=!1,!1):(setTimeout(()=>{o.control.setErrors({required:!0})},300),this.loadingCep=!1,!1)}validaCNPJ(o){return this.loadingCNPJ=!0,this.objeto.cnpj&&0!=this.objeto.cnpj?(0,s.V)(this.objeto.cnpj)?(this.loadingCNPJ=!1,void setTimeout(()=>{o.control.setErrors(null)},300)):(setTimeout(()=>{o.control.setErrors({invalid:!0})},300),void(this.loadingCNPJ=!1)):(setTimeout(()=>{o.control.setErrors({required:!0})},300),void(this.loadingCNPJ=!1))}groupCidades(){var o=this.groupBy(this.cidades,r=>r.estado_Id);this.cidadesGrouped=o}groupBy(o,r){const n=new Map;o.forEach(g=>{const m=r(g),u=n.get(m);u?u.push(g):n.set(m,[g])});var i=[];return n.forEach((g,m)=>{var u=this.cidades.find(I=>I.estado_Id=m);i.push({estado_Id:m,sigla:u.sigla,nomeEstado:u.nomeEstado,cidades:g})}),i}send(o){return o.invalid?(this.toastr.error("Campos inv\xe1lidos"),void(this.erro="Campos inv\xe1lidos")):(this.erro="",this.loading=!0,this.erro="",(0,d.n)(this.beneficiarioService.post(this.objeto)).then(r=>{0!=r.sucesso?((0,d.n)(this.beneficiarioService.getList()),this.voltar()):(this.erro=r.mensagem,this.toastr.error(r.mensagem)),this.loading=!1}).catch(r=>{this.loading=!1,this.erro=(0,l.b)(r)}))}static#e=this.\u0275fac=function(r){return new(r||t)(e.Y36(C.gz),e.Y36(T.Z),e.Y36(v.w),e.Y36(f._W),e.Y36(x.i),e.Y36(h.q),e.Y36(b.j),e.Y36(S.r),e.Y36(P.Z))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-form"]],viewQuery:function(r,n){if(1&r&&(e.Gf(y,5),e.Gf(J,5),e.Gf(B,5)),2&r){let i;e.iGM(i=e.CRH())&&(n.template=i.first),e.iGM(i=e.CRH())&&(n.icon=i.first),e.iGM(i=e.CRH())&&(n.cep=i.first)}},decls:5,vars:0,consts:[["class","align-items-center"],["icon",""],["template",""],[1,"title-icon"],["xmlns","http://www.w3.org/2000/svg","fontsize","14","height","16","width","16","viewBox","0 0 512 512","fill","currentColor"],["d","M243.4 2.6l-224 96c-14 6-21.8 21-18.7 35.8S16.8 160 32 160v8c0 13.3 10.7 24 24 24H456c13.3 0 24-10.7 24-24v-8c15.2 0 28.3-10.7 31.3-25.6s-4.8-29.9-18.7-35.8l-224-96c-8-3.4-17.2-3.4-25.2 0zM128 224H64V420.3c-.6 .3-1.2 .7-1.8 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9S17.9 512 32 512H480c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1V224H384V416H344V224H280V416H232V224H168V416H128V224zM256 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"],[1,"needs-validation",3,"ngSubmit"],["form","ngForm"],[1,"px-2"],[1,"row"],[1,"form-group","col-xl-8","col-lg-8","col-md-8","col-sm-8","col-12"],["for","nome"],[1,"text-danger"],["type","text","name","nome","id","nome","pattern","\\S(.*\\S)?","required","",1,"form-control",3,"ngModel","ngModelChange","change"],["nome","ngModel"],[4,"ngIf"],[1,"form-group","col-xl-4","col-lg-4","col-md-4","col-sm-4","col-12"],["for","cnpj"],[1,"tect-danger"],["type","text","name","cnpj","id","cnpj","required","","mask","00.000.000/0000-00","placeholder","00.000.000/0000-00",1,"form-control",3,"ngModel","ngModelChange","change"],["cnpj","ngModel"],[1,"form-group","col-md-6","col-sm-4"],["for","banco_Id"],["name","banco_Id","inputId","banco_Id","filterBy","nome, cidade","optionLabel","nome","optionValue","id","placeholder","Selecione um banco",3,"options","ngModel","styleClass","showClear","filter","required","ngModelChange"],["banco_Id","ngModel"],["pTemplate","item"],["pTemplate","footer"],["for","conta"],["type","text","name","conta","id","conta","required","","pattern","\\S(.*\\S)?",1,"form-control",3,"ngModel","ngModelChange","change"],["conta","ngModel"],[1,"form-group","col-md-4","col-sm-4"],["for","codigoSwift"],["type","text","name","codigoSwift","id","codigoSwift","required","","pattern","\\S(.*\\S)?",1,"form-control",3,"ngModel","ngModelChange","change"],["codigoSwift","ngModel"],[1,"form-group","col-md-6","col-sm-8"],["for","representante"],["type","text","name","representante","id","representante","required","","pattern","\\S(.*\\S)?",1,"form-control",3,"ngModel","ngModelChange","change"],["representante","ngModel"],[1,"form-group","col-md-3","col-sm-4"],["for","cep"],["type","text","placeholder","00000-000","mask","00000-000","name","cep","id","cep","required","",1,"form-control",3,"ngModel","blur","ngModelChange","change"],["cep","ngModel"],["for","logradouro"],["type","text","name","logradouro","id","logradouro","required","","pattern","\\S(.*\\S)?",1,"form-control",3,"ngModel","disabled","ngModelChange","change"],["logradouro","ngModel"],[1,"form-group","col-md-3","col-sm-3"],["for","numero"],["type","text","name","numero","id","numero","required","","pattern","\\S(.*\\S)?",1,"form-control",3,"ngModel","ngModelChange","change"],["numero","ngModel"],["for","cidade_Id"],["optionLabel","nomeCidade","optionValue","id","name","cidade_Id","inputId","cidade_Id","filterBy","nomeCidade",3,"options","ngModel","styleClass","placeholder","disabled","virtualScroll","virtualScrollItemSize","required","filter","showClear","ngModelChange"],["cidade_Id","ngModel"],["for","pais_Id"],["optionLabel","nome","optionValue","id","name","pais_Id","id","pais_Id","filterBy","nome",3,"styleClass","options","ngModel","placeholder","disabled","virtualScroll","virtualScrollItemSize","required","filter","showClear","ngModelChange"],["pais_Id","ngModel"],[1,"d-flex","align-items-center"],["class","m-0",4,"ngIf"],[1,"btn","btn-primary","mr-0","ms-auto",3,"disabled"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],["class","text-danger",4,"ngIf"],[1,"py-2","px-3","border-top","bg-light"],[1,"link","text-info",3,"routerLink"],[1,"m-0"],[1,"spinner-border","spinner-border-sm","mr-1"]],template:function(r,n){1&r&&(e.YNc(0,L,3,0,"ng-template",0,1,e.W1O),e.YNc(2,ve,105,50,"ng-template",null,2,e.W1O),e._UZ(4,"router-outlet"))},dependencies:[F.O5,A._Y,A.Fj,A.JJ,A.JL,A.Q7,A.c5,A.On,A.F,C.lC,C.rH,D.jx,j.hx,q.Lt]})}return t})()},7397:(O,E,a)=>{a.d(E,{Z:()=>v});var d=a(9862),l=a(5619),Z=a(9397),T=a(2096),p=a(553),s=a(9291),e=a(8787),C=a(2425);let v=(()=>{class f{constructor(h,b,S){this.table=h,this.http=b,this.toastr=S,this.url=p.N.url,this.paises=new l.X([])}getPais(){return this.http.get(`${this.url}/pais/`,{headers:new d.WM({loading:"false"})}).pipe((0,Z.b)({next:h=>(this.paises.next(h),(0,T.of)(h)),error:h=>this.toastr.error("N\xe3o foi poss\xedvel carregar listagem de status da opera\xe7\xe3o.")}))}static#e=this.\u0275fac=function(b){return new(b||f)(s.LFG(e.i),s.LFG(d.eN),s.LFG(C._W))};static#t=this.\u0275prov=s.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"})}return f})()},9411:(O,E,a)=>{a.d(E,{V:()=>l});const d=/^\d{2}.\d{3}.\d{3}\/\d{4}-\d{2}$/;function l(p){var s=p.toString();if(!p||!s||s.length>14||"00000000000000"==(s=s.padStart(14,"0"))||"11111111111111"==s||"22222222222222"==s||"33333333333333"==s||"44444444444444"==s||"55555555555555"==s||"66666666666666"==s||"77777777777777"==s||"88888888888888"==s||"99999999999999"==s)return!1;const e="string"==typeof s;if(!(e||Number.isInteger(s)||Array.isArray(s)))return!1;if(e){const S=/^\d{14}$/.test(s),P=d.test(s);if(!S&&!P)return!1}const v=function T(p=""){const s=p.toString().match(/\d/g);return Array.isArray(s)?s.map(Number):[]}(s);if(14!==s.length||1===[...new Set(s)].length)return!1;const x=s.slice(12);return Z(12,v).toString()===x[0]&&Z(13,v).toString()===x[1]}function Z(p,s){const e=s.slice(0,p);let C=p-7,v=0;for(let x=p;x>=1;x--)v+=e[p-x]*C--,C<2&&(C=9);const f=11-v%11;return f>9?0:f}}}]);