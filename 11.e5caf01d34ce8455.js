"use strict";(self.webpackChunkZenTech=self.webpackChunkZenTech||[]).push([[11],{6011:(F,C,i)=>{i.r(C),i.d(C,{ContratoModule:()=>he});var m=i(132),M=i(5861),f=i(5254),c=i(708),T=i(342),_=i(2855),e=i(9291),b=i(2400),p=i(2667),N=i(2425),v=i(7397),d=i(4527),I=i(1208),j=i(3337),Z=i(6814),u=i(6223),w=i(5219),E=i(2352),U=i(6044),y=i(2916);const J=["template"],S=["icon"];function R(r,s){1&r&&(e.TgZ(0,"span",3),e.O4$(),e.TgZ(1,"svg",4),e._UZ(2,"path",5),e.qZA()())}function q(r,s){1&r&&(e.TgZ(0,"span",92),e._uU(1,"Voc\xea deve primeiro salvar os dados para baixar o PDF"),e.qZA())}function H(r,s){1&r&&(e.TgZ(0,"p",16),e._uU(1,"Este campo \xe9 obrigat\xf3 rio."),e.qZA())}function P(r,s){if(1&r&&(e.TgZ(0,"div"),e.YNc(1,H,2,0,"p",93),e.qZA()),2&r){e.oxw();const o=e.MAs(21);e.xp6(1),e.Q6J("ngIf",o.errors.required)}}function V(r,s){if(1&r&&(e.TgZ(0,"div",10)(1,"span"),e._uU(2),e.qZA()()),2&r){const o=s.$implicit;e.xp6(2),e.hij("",o.nome," ")}}function L(r,s){1&r&&(e.TgZ(0,"p",16),e._uU(1,"Este campo \xe9 obrigat\xf3rio."),e.qZA())}function K(r,s){if(1&r&&(e.TgZ(0,"div"),e.YNc(1,L,2,0,"p",93),e.qZA()),2&r){e.oxw();const o=e.MAs(29);e.xp6(1),e.Q6J("ngIf",o.errors.required)}}function Q(r,s){if(1&r&&(e.TgZ(0,"div",10)(1,"span"),e._uU(2),e.qZA()()),2&r){const o=s.$implicit;e.xp6(2),e.hij("",o.nome," ")}}function G(r,s){1&r&&(e.TgZ(0,"p",16),e._uU(1,"Este campo \xe9 obrigat\xf3rio."),e.qZA())}function D(r,s){if(1&r&&(e.TgZ(0,"div"),e.YNc(1,G,2,0,"p",93),e.qZA()),2&r){e.oxw();const o=e.MAs(38);e.xp6(1),e.Q6J("ngIf",o.errors.required)}}function Y(r,s){1&r&&(e.TgZ(0,"p",16),e._uU(1,"Valor inv\xe1lido"),e.qZA())}function O(r,s){if(1&r&&(e.TgZ(0,"div"),e.YNc(1,Y,2,0,"p",93),e.qZA()),2&r){e.oxw();const o=e.MAs(77);e.xp6(1),e.Q6J("ngIf",o.errors.mask)}}function z(r,s){if(1&r&&(e.TgZ(0,"p",16),e._uU(1),e.qZA()),2&r){const o=e.oxw(3);e.xp6(1),e.Oqu(o.erro)}}function B(r,s){1&r&&(e.TgZ(0,"p",16),e._uU(1,"Preencha todos os campos obrigat\xf3rios (*) corretamente para salvar."),e.qZA())}function W(r,s){if(1&r&&(e.TgZ(0,"div",94),e.YNc(1,z,2,1,"p",93),e.YNc(2,B,2,0,"p",93),e.qZA()),2&r){e.oxw();const o=e.MAs(1),a=e.oxw();e.xp6(1),e.Q6J("ngIf",a.erro),e.xp6(1),e.Q6J("ngIf",o.invalid&&!a.erro)}}function $(r,s){1&r&&e._UZ(0,"span",95)}function X(r,s){if(1&r){const o=e.EpF();e.TgZ(0,"form",6,7),e.NdJ("ngSubmit",function(){e.CHM(o);const t=e.MAs(1),n=e.oxw();return e.KtG(n.send(t))}),e.TgZ(2,"div",8)(3,"div",9)(4,"div",10)(5,"button",11),e.NdJ("click",function(){e.CHM(o);const t=e.oxw();return e.KtG(t.contratoDownload())}),e._uU(6,"Baixar PDF"),e.qZA(),e.YNc(7,q,2,0,"span",12),e.qZA()(),e.TgZ(8,"div",13)(9,"div",14)(10,"label",15),e._uU(11,"Data do contrato: "),e.TgZ(12,"span",16),e._uU(13,"*"),e.qZA()(),e.TgZ(14,"app-input-date",17),e.NdJ("valueChanges",function(t){e.CHM(o);const n=e.oxw();return e.KtG(n.objeto.data=t)}),e.qZA()(),e.TgZ(15,"div",18)(16,"label",19),e._uU(17,"N\xba do Contrato de C\xe2mbio: "),e.TgZ(18,"span",16),e._uU(19,"*"),e.qZA()(),e.TgZ(20,"input",20,21),e.NdJ("ngModelChange",function(t){e.CHM(o);const n=e.oxw();return e.KtG(n.objeto.numContrato=t)})("change",function(){e.CHM(o);const t=e.MAs(21),n=e.oxw();return e.KtG(n.objeto.numContrato=t.value.trim())}),e.qZA(),e.YNc(22,P,2,1,"div",22),e.qZA(),e.TgZ(23,"div",23)(24,"label",24),e._uU(25,"Tipo do Contrato de C\xe2mbio: "),e.TgZ(26,"span",16),e._uU(27,"*"),e.qZA()(),e.TgZ(28,"p-dropdown",25,26),e.NdJ("ngModelChange",function(t){e.CHM(o);const n=e.oxw();return e.KtG(n.objeto.tipo_Id=t)}),e.YNc(30,V,3,1,"ng-template",27),e.qZA(),e.YNc(31,K,2,1,"div",22),e.qZA(),e.TgZ(32,"div",28)(33,"label",29),e._uU(34,"Eventos: "),e.TgZ(35,"span",16),e._uU(36,"*"),e.qZA()(),e.TgZ(37,"p-dropdown",30,31),e.NdJ("ngModelChange",function(t){e.CHM(o);const n=e.oxw();return e.KtG(n.objeto.evento_Id=t)}),e.YNc(39,Q,3,1,"ng-template",27),e.qZA(),e.YNc(40,D,2,1,"div",22),e.qZA()(),e.TgZ(41,"div",13)(42,"div",32)(43,"label",33),e._uU(44,"Taxa Cambial: "),e.TgZ(45,"small"),e._uU(46,"(USD)"),e.qZA(),e._uU(47,"\xa0"),e.TgZ(48,"span",16),e._uU(49,"*"),e.qZA()(),e.TgZ(50,"app-input-number",34),e.NdJ("valueChanges",function(t){e.CHM(o);const n=e.oxw();return e.KtG(n.objeto.taxa=t)}),e.qZA()(),e.TgZ(51,"div",35)(52,"label",36),e._uU(53,"Valor Moeda Nacional: "),e.TgZ(54,"small"),e._uU(55,"(R$)"),e.qZA(),e._uU(56,"\xa0"),e.TgZ(57,"span",16),e._uU(58,"*"),e.qZA()(),e.TgZ(59,"app-input-number",37),e.NdJ("valueChanges",function(t){e.CHM(o);const n=e.oxw();return e.KtG(n.objeto.valorNacional=t)}),e.qZA()(),e.TgZ(60,"div",38)(61,"label",39),e._uU(62,"Percentual de Adiantamento: "),e.TgZ(63,"small"),e._uU(64,"(%)"),e.qZA(),e._uU(65,"\xa0"),e.qZA(),e.TgZ(66,"app-input-number",40),e.NdJ("valueChanges",function(t){e.CHM(o);const n=e.oxw();return e.KtG(n.objeto.percentualAdiantamento=t)}),e.qZA()(),e.TgZ(67,"div",41)(68,"label",42),e._uU(69,"RDE:"),e.qZA(),e.TgZ(70,"input",43,44),e.NdJ("ngModelChange",function(t){e.CHM(o);const n=e.oxw();return e.KtG(n.objeto.rde=t)})("change",function(){e.CHM(o);const t=e.MAs(71),n=e.oxw();return e.KtG(n.objeto.rde=t.value.trim())}),e.qZA()()(),e.TgZ(72,"div",13)(73,"div",45)(74,"label",46),e._uU(75,"Valor Efetivo Total (VET):"),e.qZA(),e.TgZ(76,"input",47,48),e.NdJ("ngModelChange",function(t){e.CHM(o);const n=e.oxw();return e.KtG(n.objeto.vet=t)}),e.qZA(),e.YNc(78,O,2,1,"div",22),e.qZA(),e.TgZ(79,"div",49)(80,"label",50),e._uU(81,"Descri\xe7\xe3o da Forma de Entrega da moeda estrangeira:"),e.qZA(),e.TgZ(82,"input",51,52),e.NdJ("ngModelChange",function(t){e.CHM(o);const n=e.oxw();return e.KtG(n.objeto.descricaoFormaEntrega=t)})("change",function(){e.CHM(o);const t=e.MAs(83),n=e.oxw();return e.KtG(n.objeto.descricaoFormaEntrega=t.value.trim())}),e.qZA()(),e.TgZ(84,"div",53)(85,"label",54),e._uU(86,"Liquida\xe7\xe3o At\xe9: "),e.TgZ(87,"span",16),e._uU(88,"*"),e.qZA()(),e.TgZ(89,"app-input-date",55),e.NdJ("valueChanges",function(t){e.CHM(o);const n=e.oxw();return e.KtG(n.objeto.dataLiquidacao=t)}),e.qZA()()(),e.TgZ(90,"div",13)(91,"div",56)(92,"label",57),e._uU(93,"C\xf3digo da Natureza:"),e.qZA(),e.TgZ(94,"app-input-number",58),e.NdJ("valueChanges",function(t){e.CHM(o);const n=e.oxw();return e.KtG(n.objeto.codigoNatureza=t)}),e.qZA()(),e.TgZ(95,"div",59)(96,"label",60),e._uU(97,"Descri\xe7\xe3o da Natureza do Fato:"),e.qZA(),e.TgZ(98,"input",61,62),e.NdJ("ngModelChange",function(t){e.CHM(o);const n=e.oxw();return e.KtG(n.objeto.descricaoNaturezaFato=t)})("change",function(){e.CHM(o);const t=e.MAs(99),n=e.oxw();return e.KtG(n.objeto.descricaoNaturezaFato=t.value.trim())}),e.qZA()()(),e.TgZ(100,"div",63)(101,"div",64)(102,"label",65),e._uU(103,"Pa\xeds do Pagador/Recebedor no Exterior:"),e.qZA(),e.TgZ(104,"p-dropdown",66,67),e.NdJ("ngModelChange",function(t){e.CHM(o);const n=e.oxw();return e.KtG(n.objeto.pais_Id=t)}),e.qZA()(),e.TgZ(106,"div",68)(107,"label",69),e._uU(108,"Pagador/Recebedor no Exterior:"),e.qZA(),e.TgZ(109,"input",70,71),e.NdJ("ngModelChange",function(t){e.CHM(o);const n=e.oxw();return e.KtG(n.objeto.pagRecExterior=t)})("change",function(){e.CHM(o);const t=e.MAs(110),n=e.oxw();return e.KtG(n.objeto.pagRecExterior=t.value.trim())}),e.qZA()(),e.TgZ(111,"div",72)(112,"label",73),e._uU(113,"C\xf3digo da Rela\xe7\xe3o de V\xednculo entre cliente e o Pagador/Recebedor:"),e.qZA(),e.TgZ(114,"input",74,75),e.NdJ("ngModelChange",function(t){e.CHM(o);const n=e.oxw();return e.KtG(n.objeto.codigoVinculoPagRecExterior=t)})("change",function(){e.CHM(o);const t=e.MAs(115),n=e.oxw();return e.KtG(n.objeto.codigoVinculoPagRecExterior=t.value.trim())}),e.qZA()()(),e.TgZ(116,"div",13)(117,"div",76)(118,"label",77),e._uU(119,"Especifica\xe7\xf5es: "),e.qZA(),e.TgZ(120,"textarea",78,79),e.NdJ("ngModelChange",function(t){e.CHM(o);const n=e.oxw();return e.KtG(n.objeto.especificacoes=t)})("change",function(){e.CHM(o);const t=e.MAs(121),n=e.oxw();return e.KtG(n.objeto.especificacoes=t.value.trim())}),e._uU(122,"                "),e.qZA()(),e.TgZ(123,"div",80)(124,"label",81),e._uU(125,"Cl\xe1usulas: "),e.qZA(),e.TgZ(126,"textarea",82,83),e.NdJ("ngModelChange",function(t){e.CHM(o);const n=e.oxw();return e.KtG(n.objeto.clausulas=t)})("change",function(){e.CHM(o);const t=e.MAs(127),n=e.oxw();return e.KtG(n.objeto.clausulas=t.value.trim())}),e._uU(128,"                "),e.qZA()(),e.TgZ(129,"div",84)(130,"label",85),e._uU(131,"Instru\xe7\xf5es de Recebimento/Pagamento: "),e.qZA(),e.TgZ(132,"textarea",86,87),e.NdJ("ngModelChange",function(t){e.CHM(o);const n=e.oxw();return e.KtG(n.objeto.instrucoesRecebimentoPagamento=t)})("change",function(){e.CHM(o);const t=e.MAs(133),n=e.oxw();return e.KtG(n.objeto.instrucoesRecebimentoPagamento=t.value.trim())}),e._uU(134,"                "),e.qZA()()(),e.TgZ(135,"div",88)(136,"div",10),e.YNc(137,W,3,2,"div",89),e.TgZ(138,"button",90),e.YNc(139,$,1,0,"span",91),e.TgZ(140,"span"),e._uU(141,"Salvar"),e.qZA()()()()()()}if(2&r){const o=e.MAs(1),a=e.MAs(21),t=e.MAs(29),n=e.MAs(38),h=e.MAs(77),l=e.oxw();e.xp6(5),e.Q6J("disabled",0==l.objeto.id),e.xp6(2),e.Q6J("ngIf",0==l.objeto.id),e.xp6(7),e.Q6J("valueInput",l.objeto.data)("inputId","data")("showErrorMessage",!0)("required",!0),e.xp6(6),e.Q6J("ngModel",l.objeto.numContrato),e.xp6(2),e.Q6J("ngIf",a.touched&&a.errors),e.xp6(6),e.Q6J("options",l.tipos)("ngModel",l.objeto.tipo_Id)("styleClass","form-control "+(l.loadingTipo?"form-control-loading":""))("showClear",!0)("filter",!0)("required",!0)("showClear",!0),e.xp6(3),e.Q6J("ngIf",t.touched&&t.errors),e.xp6(6),e.Q6J("options",l.eventos)("ngModel",l.objeto.evento_Id)("styleClass","form-control "+(l.loadingEvento?"form-control-loading":""))("showClear",!0)("filter",!0)("required",!0)("showClear",!0),e.xp6(3),e.Q6J("ngIf",n.touched&&n.errors),e.xp6(10),e.Q6J("valueInput",l.objeto.taxa)("inputId","taxa")("mask","separator.2")("showErrorMessage",!0)("allowNegativeNumbers",!1)("required",!0)("autoReplaceValue",!1),e.xp6(9),e.Q6J("valueInput",l.objeto.valorNacional)("inputId","valorNacional")("mask","separator.2")("showErrorMessage",!0)("allowNegativeNumbers",!1)("required",!0)("autoReplaceValue",!1),e.xp6(7),e.Q6J("valueInput",l.objeto.percentualAdiantamento)("inputId","percentualAdiantamento")("mask","separator.2")("showErrorMessage",!1)("allowNegativeNumbers",!1)("required",!1)("autoReplaceValue",!1)("suffix","%"),e.xp6(4),e.Q6J("ngModel",l.objeto.rde),e.xp6(6),e.Q6J("ngModel",l.objeto.vet),e.xp6(2),e.Q6J("ngIf",h.errors&&h.touched),e.xp6(4),e.Q6J("ngModel",l.objeto.descricaoFormaEntrega),e.xp6(7),e.Q6J("valueInput",l.objeto.dataLiquidacao)("inputId","dataLiquidacao")("showErrorMessage",!0)("required",!0),e.xp6(5),e.Q6J("valueInput",l.objeto.codigoNatureza)("inputId","codigoNatureza")("mask","00000-00-A-00-00")("showErrorMessage",!1)("allowNegativeNumbers",!1)("required",!1)("readonly",!0)("autoReplaceValue",!1),e.xp6(4),e.Q6J("ngModel",l.objeto.descricaoNaturezaFato),e.xp6(6),e.Q6J("styleClass","form-control "+(l.loadingPais?"form-control-loading":""))("showClear",!0)("options",l.paises)("ngModel",l.objeto.pais_Id)("placeholder","Selecione")("disabled",l.loadingPais)("virtualScroll",!0)("virtualScrollItemSize",10)("filter",!0),e.xp6(5),e.Q6J("ngModel",l.objeto.pagRecExterior),e.xp6(5),e.Q6J("ngModel",l.objeto.codigoVinculoPagRecExterior)("readonly",!0),e.xp6(6),e.Q6J("ngModel",l.objeto.especificacoes),e.xp6(6),e.Q6J("ngModel",l.objeto.clausulas),e.xp6(6),e.Q6J("ngModel",l.objeto.instrucoesRecebimentoPagamento),e.xp6(5),e.Q6J("ngIf",l.erro||o.invalid),e.xp6(1),e.Q6J("disabled",o.invalid||l.loading),e.xp6(1),e.Q6J("ngIf",l.loading)}}let k=(()=>{class r{constructor(o,a,t,n,h,l,g,fe,ve,xe){this.activatedRoute=o,this.modalService=a,this.contratoService=t,this.crypto=n,this.toastr=h,this.paisesService=l,this.loadingService=g,this.contratoTipoService=fe,this.contratoEventoService=ve,this.datepipe=xe,this.objeto=new f.hi,this.erro="",this.loading=!1,this.subscription=[],this.contratos=[],this.isEditPage=!0,this.id=0,this.item="",this.modal=new _.u,this.tipos=[],this.loadingTipo=!0,this.eventos=[],this.loadingEvento=!0,this.instituicoes=[],this.loadingInstituicao=!0,this.paises=[],this.loadingPais=!0,this.loadingContratoFile=!1,(0,c.n)(this.paisesService.getList()).then(x=>{this.loadingPais=!1,this.paises=x}),(0,c.n)(this.contratoTipoService.getList()).then(x=>{this.tipos=x,this.loadingTipo=!1}),(0,c.n)(this.contratoEventoService.getList()).then(x=>{this.eventos=x,this.loadingEvento=!1})}encryptId(o){const a=this.crypto.encrypt(o);return null!==a?a:""}ngAfterViewInit(){this.modal.id=0,this.modal.template=this.template,this.modal.icon=this.icon,this.modal.style={"max-width":"950px",overflow:"visible"},this.modal.activatedRoute=this.activatedRoute,this.modal.routerBackOptions={relativeTo:this.activatedRoute};var o=this.activatedRoute.params.subscribe(a=>{a.contrato_id?(this.objeto.id=this.crypto.decrypt(a.contrato_id),this.modal.title="Editar Contrato",this.modal.routerBack=["../../"],this.isEditPage=!0,(0,c.n)(this.contratoService.get(this.objeto.id)).then(t=>{this.objeto=new f.hi(t),this.objeto.dataLiquidacao=this.datepipe.transform(this.objeto.dataLiquidacao,"yyyy-MM-dd"),this.objeto.data=this.datepipe.transform(this.objeto.data,"yyyy-MM-ddTHH:mm"),setTimeout(()=>{this.modal=this.modalService.addModal(this.modal,"contrato")},200)}).catch(t=>{this.voltar()})):this.voltar()});this.subscription.push(o)}ngOnDestroy(){this.subscription.forEach(o=>o.unsubscribe())}voltar(){this.modalService.removeModal(this.modal)}contratoDownload(){var o=this;return(0,M.Z)(function*(){0!=o.objeto.id?(o.loadingContratoFile=!0,o.loadingService.message.next("Carregando Contrato."),yield(0,c.n)(o.contratoService.file(o.objeto.id)).then(a=>{o.loadingContratoFile=!1}).catch(a=>{o.loadingContratoFile=!1}),o.loadingService.message.next("")):o.toastr.error("Voc\xea deve primeiro salvar os dados para fazer o download.")})()}send(o){var a=this;return o.invalid?(this.toastr.error("Campos inv\xe1lidos"),void(this.erro="Campos inv\xe1lidos")):(this.erro="",this.loading=!0,(0,c.n)(this.contratoService.post(this.objeto)).then(function(){var t=(0,M.Z)(function*(n){0!=n.sucesso?(yield(0,c.n)(a.contratoService.getList()),a.voltar()):(a.erro=n.mensagem,a.toastr.error(n.mensagem)),a.loading=!1});return function(n){return t.apply(this,arguments)}}()).catch(t=>{this.loading=!1,this.erro=(0,T.b)(t)}))}static#e=this.\u0275fac=function(a){return new(a||r)(e.Y36(m.gz),e.Y36(_.Z),e.Y36(b.d),e.Y36(p.w),e.Y36(N._W),e.Y36(v.Z),e.Y36(d.b),e.Y36(I.M),e.Y36(j.n),e.Y36(Z.uU))};static#t=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-form"]],viewQuery:function(a,t){if(1&a&&(e.Gf(J,5),e.Gf(S,5)),2&a){let n;e.iGM(n=e.CRH())&&(t.template=n.first),e.iGM(n=e.CRH())&&(t.icon=n.first)}},decls:5,vars:0,consts:[["class","align-items-center"],["icon",""],["template",""],[1,"title-icon"],["xmlns","http://www.w3.org/2000/svg","height","16","width","16","viewBox","0 0 512 512","fill","currentColor"],["d","M243.4 2.6l-224 96c-14 6-21.8 21-18.7 35.8S16.8 160 32 160v8c0 13.3 10.7 24 24 24H456c13.3 0 24-10.7 24-24v-8c15.2 0 28.3-10.7 31.3-25.6s-4.8-29.9-18.7-35.8l-224-96c-8-3.4-17.2-3.4-25.2 0zM128 224H64V420.3c-.6 .3-1.2 .7-1.8 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9S17.9 512 32 512H480c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1V224H384V416H344V224H280V416H232V224H168V416H128V224zM256 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"],[3,"ngSubmit"],["form","ngForm"],[1,"px-3"],[1,"my-3","row"],[1,"d-flex","align-items-center"],["type","button",1,"btn","btn-dark",3,"disabled","click"],["class","ms-2 text-danger mt-1",4,"ngIf"],[1,"row"],["title","Data do Contrato",1,"form-group","col-xl-3","col-lg-3","col-md-6","col-sm-6","col-12"],["for","data"],[1,"text-danger"],["type","datetime-local",3,"valueInput","inputId","showErrorMessage","required","valueChanges"],["title","N\xba do Contrato de C\xe2mbio",1,"form-group","col-xl-3","col-lg-3","col-md-6","col-sm-6","col-12"],["for","numContrato"],["type","text","name","numContrato","id","numContrato","required","","pattern","\\S(.*\\S)?",1,"form-control",3,"ngModel","ngModelChange","change"],["numContrato","ngModel"],[4,"ngIf"],["title","Tipos",1,"form-group","col-xl-3","col-lg-3","col-md-6","col-sm-6","col-12"],["for","tipo_Id"],["name","tipo_Id","inputId","tipo_Id","optionLabel","nome","optionValue","id","placeholder","Selecione um tipo",3,"options","ngModel","styleClass","showClear","filter","required","ngModelChange"],["tipo_Id","ngModel"],["pTemplate","item"],["title","Eventos",1,"form-group","col-xl-3","col-lg-3","col-md-6","col-sm-6","col-12"],["for","evento_Id"],["name","evento_Id","inputId","evento_Id","filterBy","nome, cnpj","optionLabel","nome","optionValue","id","placeholder","Selecione um evento",3,"options","ngModel","styleClass","showClear","filter","required","ngModelChange"],["evento_Id","ngModel"],["title","Taxa Cambial",1,"form-group","col-xl-3","col-lg-3","col-md-6","col-sm-12","col-12"],["for","taxa"],["suffix"," USD",3,"valueInput","inputId","mask","showErrorMessage","allowNegativeNumbers","required","autoReplaceValue","valueChanges"],["title","Valor Moeda Nacional",1,"form-group","col-xl-3","col-lg-3","col-md-6","col-sm-12","col-12"],["for","valorNacional"],["prefix","R$ ",3,"valueInput","inputId","mask","showErrorMessage","allowNegativeNumbers","required","autoReplaceValue","valueChanges"],["title","Percentual de Adiantamento",1,"form-group","col-xl-3","col-lg-3","col-md-6","col-sm-12","col-12"],["for","percentualAdiantamento"],[3,"valueInput","inputId","mask","showErrorMessage","allowNegativeNumbers","required","autoReplaceValue","suffix","valueChanges"],["title","RDE",1,"form-group","col-xl-3","col-lg-3","col-md-6","col-sm-12","col-12"],["for","rde"],["type","text","name","rde","id","rde","pattern","\\S(.*\\S)?",1,"form-control",3,"ngModel","ngModelChange","change"],["rde","ngModel"],["title","Valor Efetivo Total (VET)",1,"form-group","col-xl-3","col-lg-3","col-md-3","col-sm-12","col-12"],["for","vet"],["type","text","name","vet","id","vet","pattern","\\S(.*\\S)?",1,"form-control",3,"ngModel","ngModelChange"],["vet","ngModel"],["title","Descri\xe7\xe3o da Forma de Entrega da moeda estrangeira",1,"form-group","col-xl-5","col-lg-5","col-md-5","col-sm-12","col-12"],["for","descricaoFormaEntrega"],["type","text","name","descricaoFormaEntrega","id","descricaoFormaEntrega","required","","pattern","\\S(.*\\S)?","readonly","",1,"form-control",3,"ngModel","ngModelChange","change"],["descricaoFormaEntrega","ngModel"],["title","Liquida\xe7\xe3o At\xe9",1,"form-group","col-xl-4","col-lg-4","col-md-4","col-sm-12","col-12"],["for","dataLiquidacao"],["type","date",3,"valueInput","inputId","showErrorMessage","required","valueChanges"],["title","C\xf3digo da Natureza",1,"form-group","col-xl-4","col-lg-4","col-md-4","col-sm-12","col-12"],["for","codigoNatureza"],[3,"valueInput","inputId","mask","showErrorMessage","allowNegativeNumbers","required","readonly","autoReplaceValue","valueChanges"],["title","Descri\xe7\xe3o da Natureza do Fato",1,"form-group","col-xl-8","col-lg-8","col-md-8","col-sm-12","col-12"],["for","descricaoNaturezaFato"],["type","text","name","descricaoNaturezaFato","id","descricaoNaturezaFato","required","","pattern","\\S(.*\\S)?","readonly","",1,"form-control",3,"ngModel","ngModelChange","change"],["descricaoNaturezaFato","ngModel"],[1,"row","align-items-end"],["title","Pa\xeds do Pagador/Recebedor no Exterior",1,"form-group","col-xl-3","col-lg-3","col-md-3","col-sm-12","col-12"],["for","pais_Id"],["optionLabel","nome","optionValue","id","name","pais_Id","id","pais_Id","optionValue","id","filterBy","nome",3,"styleClass","showClear","options","ngModel","placeholder","disabled","virtualScroll","virtualScrollItemSize","filter","ngModelChange"],["pais_Id","ngModel"],["title","Pagador/Recebedor no Exterior",1,"form-group","col-xl-5","col-lg-5","col-md-5","col-sm-12","col-12"],["for","pagRecExterior"],["type","text","name","pagRecExterior","id","pagRecExterior","pattern","\\S(.*\\S)?",1,"form-control",3,"ngModel","ngModelChange","change"],["pagRecExterior","ngModel"],["title","C\xf3digo da Rela\xe7\xe3o de V\xednculo entre cliente e o Pagador/Recebedor",1,"form-group","col-xl-4","col-lg-4","col-md-4","col-sm-12","col-12"],["for","codigoVinculoPagRecExterior"],["type","text","name","codigoVinculoPagRecExterior","id","codigoVinculoPagRecExterior","required","",1,"form-control",3,"ngModel","readonly","ngModelChange","change"],["codigoVinculoPagRecExterior","ngModel"],["title","Especifica\xe7\xf5es",1,"form-group","col-xl-12","col-lg-12","col-md-12","col-sm-12","col-12"],["for","especificacoes"],["name","especificacoes","id","especificacoes","pattern","\\S(.*\\S)?",1,"form-control",3,"ngModel","ngModelChange","change"],["especificacoes","ngModel"],["title","Cl\xe1usulas",1,"form-group","col-xl-12","col-lg-12","col-md-12","col-sm-12","col-12"],["for","clausulas"],["name","clausulas","id","clausulas","pattern","\\S(.*\\S)?",1,"form-control",3,"ngModel","ngModelChange","change"],["clausulas","ngModel"],["title","Instru\xe7\xf5es de Recebimento/Pagamento",1,"form-group","col-xl-12","col-lg-12","col-md-12","col-sm-12","col-12"],["for","instrucoesRecebimentoPagamento"],["name","instrucoesRecebimentoPagamento","id","instrucoesRecebimentoPagamento","pattern","\\S(.*\\S)?",1,"form-control",3,"ngModel","ngModelChange","change"],["instrucoesRecebimentoPagamento","ngModel"],[1,"row","mt-2","mb-2"],["class","m-0",4,"ngIf"],[1,"btn","btn-primary","me-0","ms-auto",3,"disabled"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],[1,"ms-2","text-danger","mt-1"],["class","text-danger",4,"ngIf"],[1,"m-0"],[1,"spinner-border","spinner-border-sm","me-1"]],template:function(a,t){1&a&&(e.YNc(0,R,3,0,"ng-template",0,1,e.W1O),e.YNc(2,X,142,81,"ng-template",null,2,e.W1O),e._UZ(4,"router-outlet"))},dependencies:[Z.O5,u._Y,u.Fj,u.JJ,u.JL,u.Q7,u.c5,u.On,u.F,m.lC,w.jx,E.Lt,U.l,y.K]})}return r})();var ee=i(2854),te=i(2832),oe=i(590),A=i(674),ne=i(8787),ae=i(6599);function re(r,s){}let ie=(()=>{class r{constructor(o,a,t){this.table=o,this.contratoService=a,this.isMobile=t,this.faFilePdf=oe.gSj,this.maskType=te.O,this.list=[],this.tableLinks=[],this.columns=f.SC,this.subscription=[],this.screen=A.I.lg;var n=this.contratoService.list.subscribe(g=>{this.list=Object.assign([],g)});this.subscription.push(n);var h=this.isMobile.value.subscribe(g=>this.screen=g);this.subscription.push(h),(0,c.n)(this.contratoService.getList());var l=this.table.selected.subscribe(g=>{g&&(this.tableLinks=[{label:"Editar",routePath:["editar"],paramsFieldName:["id"]}],this.tableLinks=this.table.encryptParams(this.tableLinks))});this.subscription.push(l)}ngOnDestroy(){this.subscription.forEach(o=>o.unsubscribe())}static#e=this.\u0275fac=function(a){return new(a||r)(e.Y36(ne.i),e.Y36(b.d),e.Y36(A.h))};static#t=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-list"]],decls:13,vars:10,consts:[[1,"page"],[1,"page__header"],[1,"title-icon","align-items-center"],["xmlns","http://www.w3.org/2000/svg","height","16","width","16","viewBox","0 0 512 512","fill","currentColor"],["d","M243.4 2.6l-224 96c-14 6-21.8 21-18.7 35.8S16.8 160 32 160v8c0 13.3 10.7 24 24 24H456c13.3 0 24-10.7 24-24v-8c15.2 0 28.3-10.7 31.3-25.6s-4.8-29.9-18.7-35.8l-224-96c-8-3.4-17.2-3.4-25.2 0zM128 224H64V420.3c-.6 .3-1.2 .7-1.8 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9S17.9 512 32 512H480c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1V224H384V416H344V224H280V416H232V224H168V416H128V224zM256 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"],[1,"me-auto"],[1,"page__header-title"],[1,"page__body"],["topActions",""],[3,"list","topActions","filterLink","filterTable","paginator","sortTable","menuTable","columns","tableLinks","selectable"]],template:function(a,t){if(1&a&&(e.TgZ(0,"section",0)(1,"div",1)(2,"span",2),e.O4$(),e.TgZ(3,"svg",3),e._UZ(4,"path",4),e.qZA()(),e.kcU(),e.TgZ(5,"div",5)(6,"h3",6),e._uU(7,"Contratos"),e.qZA()()(),e.TgZ(8,"div",7),e.YNc(9,re,0,0,"ng-template",null,8,e.W1O),e._UZ(11,"app-list-shared",9),e.qZA()(),e._UZ(12,"router-outlet")),2&a){const n=e.MAs(10);e.xp6(11),e.Q6J("list",t.list)("topActions",n)("filterLink",!1)("filterTable",!0)("paginator",!0)("sortTable",!0)("menuTable",!0)("columns",t.columns)("tableLinks",t.tableLinks)("selectable",!0)}},dependencies:[m.lC,ae.o]})}return r})();var le=i(1353),se=i(7280);const ce=[{path:"",component:ie,children:[{path:"editar/:contrato_id",component:k,data:{modalOrder:1},children:[{path:"invoice",component:ee.U,data:{modalOrder:2},children:[{path:"moeda",component:le.U,data:{modalOrder:3}}]}]},se.D]}];let de=(()=>{class r{static#e=this.\u0275fac=function(a){return new(a||r)};static#t=this.\u0275mod=e.oAB({type:r});static#o=this.\u0275inj=e.cJS({imports:[m.Bz.forChild(ce),m.Bz]})}return r})();var ue=i(5597),me=i(8839),pe=i(4685),ge=i(1532),_e=i(6208);let he=(()=>{class r{static#e=this.\u0275fac=function(a){return new(a||r)};static#t=this.\u0275mod=e.oAB({type:r});static#o=this.\u0275inj=e.cJS({imports:[Z.ez,de,ue.uH,E.kW,u.u5,me.yI.forChild(),_e.m,pe.U$,ge._8]})}return r})()},7397:(F,C,i)=>{i.d(C,{Z:()=>b});var m=i(9862),M=i(5619),f=i(9397),c=i(2096),T=i(553),_=i(9291),e=i(2425);let b=(()=>{class p{constructor(v,d){this.http=v,this.toastr=d,this.url=T.N.url,this.list=new M.X([])}getList(v=!1){return this.http.get(`${this.url}/pais/`,{headers:new m.WM({loading:"false"})}).pipe((0,f.b)({next:d=>(this.list.next(d),(0,c.of)(d)),error:d=>this.toastr.error("N\xe3o foi poss\xedvel carregar listagem de paises.")}))}static#e=this.\u0275fac=function(d){return new(d||p)(_.LFG(m.eN),_.LFG(e._W))};static#t=this.\u0275prov=_.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"})}return p})()}}]);