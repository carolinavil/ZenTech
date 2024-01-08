"use strict";(self.webpackChunkZenTech=self.webpackChunkZenTech||[]).push([[896],{1064:(S,b,r)=>{r.d(b,{V:()=>n}),r(5219),r(2832);class n{constructor(){this.id=0,this.nome="",this.simbolo="",this.codigo=""}}},896:(S,b,r)=>{r.r(b),r.d(b,{LogModule:()=>ia});var c=r(132),d=r(5219),n=r(2832);class N{constructor(){this.id=0,this.data=new Date,this.acao="",this.objeto="",this.entidade="",this.usuarioNome="",this.usuarioEmail=""}}class A{constructor(){this.id=0,this.inputs=[],this.data=new Date,this.acao="",this.objeto="",this.entidade="",this.usuarioNome="",this.usuarioEmail="",this.usuario_Id=void 0}}var v=[{field:"id",header:"Id",maskType:n.O.undefined,filterType:n.vA.text,filterDisplay:n.w2.menu,showAddButton:!1,showMatchMode:!0,showOperator:!1,filterMatchMode:d.a6.CONTAINS},{field:"data",header:"Data",maskType:n.O.dateTime,filterType:n.vA.datetime,filterDisplay:n.w2.menu,showAddButton:!1,showMatchMode:!0,showOperator:!1,filterMatchMode:d.a6.CONTAINS},{field:"entidade",header:"Entidade",maskType:n.O.undefined,filterType:n.vA.text,filterDisplay:n.w2.menu,showAddButton:!1,showMatchMode:!1,showOperator:!1,filterMatchMode:d.a6.CONTAINS},{field:"acao",header:"A\xe7\xe3o",maskType:n.O.options,filterType:n.vA.text,filterDisplay:n.w2.menu,showAddButton:!1,showMatchMode:!1,showOperator:!1,filterMatchMode:d.a6.EQUALS,values:[{value:"Cadastro",output:"Cadastro",class:"flag-green"},{value:"Exclus\xe3o",output:"Exclus\xe3o",class:"flag-danger"},{value:"Edi\xe7\xe3o",output:"Edi\xe7\xe3o",class:"flag-warning"},{value:"Reset de Senha",output:"Reset de Senha",class:"flag-dark"},{value:"Desabilitar Conta",output:"Desabilitar Conta",class:"flag-dark"},{value:"Habilitar Conta",output:"Habilitar Conta",class:"flag-dark"},{value:"Cadastro de Nova senha",output:"Cadastro de Nova senha",class:"flag-dark"},{value:"BR Consulta",output:"BR Consulta",class:"flag-dark"},{value:"Atribui\xe7\xe3o",output:"Atribui\xe7\xe3o",class:"flag-dark"},{value:"Importa\xe7\xe3o",output:"Importa\xe7\xe3o",class:"flag-dark"},{value:"Importa\xe7\xe3o de Opera\xe7\xf5es",output:"Importa\xe7\xe3o de Opera\xe7\xf5es",class:"flag-dark"},{value:"Importa\xe7\xe3o de Pessoas",output:"Importa\xe7\xe3o de Pessoas",class:"flag-dark"},{value:"Verifica\xe7\xe3o de Conta",output:"Verifica\xe7\xe3o de Conta",class:"flag-dark"},{value:"Esqueci minha senha",output:"Esqueci minha senha",class:"flag-dark"}]},{field:"usuarioNome",header:"Nome",colgroup:"Usu\xe1rio",maskType:n.O.undefined,filterType:n.vA.text,filterDisplay:n.w2.menu,showAddButton:!1,showMatchMode:!1,showOperator:!1,filterMatchMode:d.a6.CONTAINS},{field:"usuarioEmail",header:"E-mail",colgroup:"Usu\xe1rio",maskType:n.O.undefined,filterType:n.vA.text,filterDisplay:n.w2.menu,showAddButton:!1,showMatchMode:!1,showOperator:!1,filterMatchMode:d.a6.CONTAINS}],m=r(708),y=r(1449),t=r(9291),D=r(8787),u=r(9862),M=r(5619),C=r(9397),p=r(553),P=r(2425);let B=(()=>{class i{constructor(o,e,a){this.table=o,this.http=e,this.toastr=a,this.url=p.N.url,this.list=new M.X([]),this.loading=new M.X(!1)}getList(o=!1){return this.loading.next(o),this.table.loading.next(!0),this.http.get(`${this.url}/log-acoes`).pipe((0,C.b)(e=>{this.list.next(e),this.loading.next(!1)},e=>{this.toastr.error("N\xe3o foi poss\xedvel carregar listagem de logs.")}))}get(o){return this.http.get(`${this.url}/log-acoes/${o}`,{headers:new u.WM({loading:"true"})})}static#a=this.\u0275fac=function(e){return new(e||i)(t.LFG(D.i),t.LFG(u.eN),t.LFG(P._W))};static#t=this.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var k=r(6814),x=r(5597),U=r(6599);function F(i,T){1&i&&t._UZ(0,"span",11)}let Z=(()=>{class i{constructor(o,e){this.table=o,this.logService=e,this.faClock=y.SZw,this.maskType=n.O,this.list=[],this.tableLinks=[],this.columns=v,this.subscription=[],this.objeto=new N,this.loading=!1;var a=this.logService.list.subscribe(h=>this.list=Object.assign([],h));this.subscription.push(a);var s=this.logService.loading.subscribe(h=>this.loading=h);this.subscription.push(s),(0,m.n)(this.logService.getList(!0));var l=this.table.selected.subscribe(h=>{h&&(this.tableLinks=[{label:"Detalhes",routePath:["detalhes"],paramsFieldName:["id"]}],this.tableLinks=this.table.encryptParams(this.tableLinks))});this.subscription.push(l)}ngOnDestroy(){this.subscription.forEach(o=>o.unsubscribe())}getList(){(0,m.n)(this.logService.getList(!0))}static#a=this.\u0275fac=function(e){return new(e||i)(t.Y36(D.i),t.Y36(B))};static#t=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-list"]],decls:14,vars:12,consts:[[1,"page"],[1,"page__header"],[1,"title-icon","align-items-center"],[3,"icon"],[1,"me-auto"],[1,"page__header-title"],[1,"ms-auto"],[1,"btn","btn-dark",3,"disabled","click"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],[1,"page__body"],[3,"list","filterLink","filterTable","paginator","sortTable","menuTable","columns","tableLinks","selectable"],[1,"spinner-border","spinner-border-sm","me-1"]],template:function(e,a){1&e&&(t.TgZ(0,"section",0)(1,"div",1)(2,"span",2),t._UZ(3,"fa-icon",3),t.qZA(),t.TgZ(4,"div",4)(5,"h3",5),t._uU(6,"Logs"),t.qZA()(),t.TgZ(7,"div",6)(8,"button",7),t.NdJ("click",function(){return a.getList()}),t.YNc(9,F,1,0,"span",8),t._uU(10,"Atualizar"),t.qZA()()(),t.TgZ(11,"div",9),t._UZ(12,"app-list-shared",10),t.qZA()(),t._UZ(13,"router-outlet")),2&e&&(t.xp6(3),t.Q6J("icon",a.faClock),t.xp6(5),t.Q6J("disabled",a.loading),t.xp6(1),t.Q6J("ngIf",a.loading),t.xp6(3),t.Q6J("list",a.list)("filterLink",!1)("filterTable",!0)("paginator",!0)("sortTable",!0)("menuTable",!0)("columns",a.columns)("tableLinks",a.tableLinks)("selectable",!0))},dependencies:[k.O5,c.lC,x.BN,U.o]})}return i})();var w=r(5861),R=r(2855),H=r(2667),j=r(1208),W=r(3337),V=r(7397),Y=r(1433),_=r(8839);const z=["template"],K=["icon"];function J(i,T){if(1&i&&(t.TgZ(0,"span",3),t._UZ(1,"fa-icon",4),t.qZA()),2&i){const o=t.oxw();t.xp6(1),t.Q6J("icon",o.faClock)}}function G(i,T){if(1&i&&(t.TgZ(0,"tr")(1,"td",12)(2,"strong"),t._uU(3),t.qZA()(),t._UZ(4,"td",13),t.qZA()),2&i){const o=T.$implicit;t.xp6(3),t.Oqu(o[0]),t.xp6(1),t.Q6J("innerHTML",o[1],t.oJD)}}function $(i,T){if(1&i&&(t.TgZ(0,"h6",5),t._uU(1),t.qZA(),t.TgZ(2,"div",6)(3,"table",7)(4,"tbody")(5,"tr")(6,"td")(7,"strong"),t._uU(8,"Data:"),t.qZA(),t._uU(9),t.ALo(10,"date"),t.qZA(),t.TgZ(11,"td")(12,"strong"),t._uU(13,"A\xe7\xe3o:"),t.qZA(),t._uU(14),t.qZA(),t.TgZ(15,"td")(16,"strong"),t._uU(17,"Objeto da A\xe7\xe3o:"),t.qZA(),t._uU(18),t.qZA()(),t.TgZ(19,"tr")(20,"td",8)(21,"strong"),t._uU(22,"Usu\xe1rio:"),t.qZA(),t._uU(23),t.qZA()()()(),t.TgZ(24,"table",9)(25,"tbody",10),t.YNc(26,G,5,2,"tr",11),t.qZA()()()),2&i){const o=t.oxw();t.xp6(1),t.AsE("",o.obj.acao," de ",o.obj.entidade,""),t.xp6(8),t.hij(" ",t.xi3(10,8,o.obj.data,"dd/MM/yyyy '\xe0s' HH:mm"),""),t.xp6(5),t.hij(" ",o.obj.acao,""),t.xp6(4),t.hij(" ",o.obj.entidade,""),t.xp6(5),t.AsE(" ",o.obj.usuarioNome," - ",o.obj.usuarioEmail,""),t.xp6(3),t.Q6J("ngForOf",o.values)}}const q=[{path:"",component:Z,children:[{path:"detalhes/:log_id",component:(()=>{class i{constructor(o,e,a,s,l,h,g,O,f,I,L){this.activatedRoute=o,this.modalService=e,this.crypto=a,this.logService=s,this.currency=l,this.date=h,this.contratoTipoService=g,this.contratoEventoService=O,this.paisService=f,this.moedaService=I,this.mask=L,this.faClock=y.SZw,this.obj=new A,this.erro="",this.loading=!1,this.subscription=[],this.isEditPage=!1,this.modal=new R.u,this.values=[],(0,m.n)(this.paisService.getList()),(0,m.n)(this.contratoTipoService.getList()),(0,m.n)(this.contratoEventoService.getList()),(0,m.n)(this.moedaService.getList())}ngAfterViewInit(){var o=this;this.modal.id=0,this.modal.template=this.template,this.modal.icon=this.icon,this.modal.style={"max-width":"650px"},this.modal.activatedRoute=this.activatedRoute,this.modal.routerBackOptions={relativeTo:this.activatedRoute};var e=this.activatedRoute.params.subscribe(function(){var a=(0,w.Z)(function*(s){if(s.log_id){o.obj.id=o.crypto.decrypt(s.log_id),o.modal.title="Log de A\xe7\xe3o",o.modal.routerBack=["../../"],o.isEditPage=!0,0==o.logService.list.value.length&&(yield(0,m.n)(o.logService.getList()));var l=o.logService.list.value.find(h=>h.id==o.obj.id);if(!l)return void o.voltar();"string"==typeof l.objeto&&(l.objeto=JSON.parse(l.objeto)),o.obj=l,o.insereDados(o.obj.objeto),o.ordenaArray(),setTimeout(()=>{o.modal=o.modalService.addModal(o.modal,"log-acoes")},200)}});return function(s){return a.apply(this,arguments)}}());this.subscription.push(e)}formataCampos(o,e){var a=o,s=e,l=!0;switch(o){case"Id":a="Id";break;case"CodigoSwift":a="C\xf3digo Swift";break;case"Pais_Id":a="Pa\xeds";var h=this.paisService.list.value.find(E=>E.id==parseInt(s));s=h?h.nome:"Id: "+s;break;case"Invoice_Id":a="Id do Invoice";break;case"Tipo_Id":a="Tipo do Contrato";var g=this.contratoTipoService.list.value.find(E=>E.id==parseInt(s));s=g?g.nome:"Id: "+s;break;case"Evento_Id":a="Evendo do Contrato";var O=this.contratoEventoService.list.value.find(E=>E.id==parseInt(s));s=O?O.nome:"Id: "+s;break;case"Beneficiario_Id":a="Id do Benefici\xe1rio";break;case"InstituicaoFinanceira_Id":a="Id da Institui\xe7\xe3o Financeira";break;case"Moeda_Id":a="Moeda";var I=this.moedaService.list.value.find(E=>E.id==parseInt(s));s=I?I.nome:"Id: "+s;break;case"Usuario_Cadastro_Id":a="Id do Usu\xe1rio de Cadastro",l=!1;break;case"Operacao_Status_Id":a="Id do Status da Opera\xe7\xe3o";break;case"Pessoa_Id":a="Id da Pessoa";break;case"Lote_Id":a="Excel - Lote Id";break;case"Logradouro":a="Endere\xe7o";break;case"CodigoRegistro":a="C\xf3digo de Registro";break;case"DataLiquidacao":a="Data de Liquida\xe7\xe3o",s=null!=e?this.date.transform(e,"dd/MM/yyyy")??"N/A":"N/A";break;case"ValorNacional":a="Valor Nacional",s=null!=e?this.currency.transform(e,"BRL","R$ ","1.2")??"N/A":"N/A";break;case"Taxa":a="Taxa",s=null!=e?this.currency.transform(e,"BRL"," ","1.0-10")??"N/A":"N/A";break;case"NumContrato":a="N\xba do Contrato";break;case"PagRecExterior":a="Pagador/Recebedor no Exterior";break;case"PercentualAdiantamento":a="Percentual de Adiantamento",s=null!=e?this.currency.transform(e,"BRL"," ","1.0-2")+"%":"N/A";break;case"Especificacoes":a="Especifica\xe7\xf5es";break;case"Clausulas":a="Cl\xe1usulas";break;case"InstrucoesRecebimentoPagamento":a="Instru\xe7\xf5es de Recebimento/Pagamento";break;case"NumContrato":a="N\xba Contrato";break;case"Simbolo":case"Simbolo":a="S\xedmbolo";break;case"Codigo":a="C\xf3digo";break;case"DataTransacao":a="Data de Transa\xe7\xe3o",s=null!=e?this.date.transform(e,"dd/MM/yyyy")??"N/A":"N/A";break;case"Data":a="Data",s=null!=e?this.date.transform(e,"dd/MM/yyyy '\xe0s ' HH:mm")??"N/A":"N/A";break;case"DataCadastro":a="Data de Cadastro",s=null!=e?this.date.transform(e,"dd/MM/yyyy '\xe0s ' HH:mm")??"N/A":"N/A";break;case"NomeComprador":a="Nome do Comprador";break;case"PaisComprador":a="Pa\xeds do Comprador";break;case"TipoTransacao":a="Tipo de Transa\xe7\xe3o";break;case"FormaPagamento":a="Forma de Pagamento";break;case"ValorMoedaEstrangeira":a="Valor em Moeda Estrangeira",s=null!=e?this.currency.transform(e,"BRL"," ","1.2")??"N/A":"N/A";break;case"Num_Op":a="N\xba Opera\xe7\xe3o";break;case"Situacao":case"SITUACAO":a="Situa\xe7\xe3o";break;case"DataInscricao":a="Excel - Data de Inscri\xe7\xe3o",s=null!=e?this.date.transform(e,"dd/MM/yyyy")??"N/A":"N/A";break;case"DataNascimento":a="Data de Nascimento",s=null!=e?this.date.transform(e,"dd/MM/yyyy")??"N/A":"N/A";break;case"NomeMae":a="Nome da M\xe3e";break;case"Email":a="E-mail";break;case"Obs":a="Observa\xe7\xf5es";break;case"Digito":a="Excel - D\xedgito";break;case"AnoObito":a="Excel - Ano \xd3bito";break;case"Excel_Status":a="Excel - Status";break;case"Excel_Data_Cap":a="Excel - Data de Capta\xe7\xe3o",s=null!=e?this.date.transform(e,"dd/MM/yyyy")??"N/A":"N/A";break;case"Excel_Hora_Cap":a="Excel - Hora de Capta\xe7\xe3o",s=null!=e?this.date.transform(e,"HH:mm")??"N/A":"N/A";break;case"Excel_IdNum":a="Excel - Id Num";break;case"Excel_Controle":a="Excel - Controle";break;case"Excel_Erro":a="Excel - Tipo Erro";break;case"BRConsulta_Status":a="BR Consulta - Status";break;case"BRConsulta_Data_Cap":a="BR Consulta - Data de Capta\xe7\xe3o",s=null!=e?this.date.transform(e,"dd/MM/yyyy")??"N/A":"N/A";break;case"BRConsulta_Hora_Cap":a="BR Consulta - Hora de Capta\xe7\xe3o",s=null!=e?this.date.transform(e,"HH:mm")??"N/A":"N/A";break;case"BRConsulta_Id_Consulta":a="BR Consulta - Id Consulta";break;case"BRConsulta_Controle":a="BR Consulta - Controle";break;case"BRConsulta_Erro":a="BR Consulta - Erro";break;case"DataAtualizacaoExcel":a="Data de Atualiza\xe7\xe3o pelo Excel",s=null!=e?this.date.transform(e,"dd/MM/yyyy '\xe0s' HH:mm")??"N/A":"N/A";break;case"DataAtualizacaoBRConsulta":a="Data de Atualiza\xe7\xe3o pelo BR Consulta",s=null!=e?this.date.transform(e,"dd/MM/yyyy '\xe0s' HH:mm")??"N/A":"N/A";break;case"PEP":a="Excel - PEP";break;case"DataConcessao":a="Data de Concess\xe3o",s=null!=e?this.date.transform(e,"dd/MM/yyyy '\xe0s' HH:mm")??"N/A":"N/A";break;case"ValorConcedido":a="Valor Concedido",s=null!=e?this.currency.transform(e,"BRL"," ","1.2")??"N/A":"N/A";break;case"Valor":a="Valor",s=null!=e?this.currency.transform(e,"BRL"," ","1.2")??"N/A":"N/A";break;case"NomeCliente":a="Nome do Cliente";break;case"CPFCliente":a="CPF do CLiente";break;case"StatusOperacao":a="Status da Opera\xe7\xe3o";break;case"LimiteConcedido":a="Limite Concedido",s=null!=e?this.currency.transform(e,"BRL"," ","1.2")??"N/A":"N/A";break;case"LimiteUtilizado":a="Limite Utilizado",s=null!=e?this.currency.transform(e,"BRL"," ","1.2")??"N/A":"N/A";break;case"LimiteAtual":a="Limite Atual",s=null!=e?this.currency.transform(e,"BRL"," ","1.2")??"N/A":"N/A";break;case"SaldoAnterior":a="Saldo Anterior",s=null!=e?this.currency.transform(e,"BRL"," ","1.2")??"N/A":"N/A";break;case"ValorOpera\xe7\xe3o":a="Valor Opera\xe7\xe3o",s=null!=e?this.currency.transform(e,"BRL"," ","1.2")??"N/A":"N/A";break;case"SaldoAtual":case"SaldoAtual":a="Saldo Atual",s=null!=e?this.currency.transform(e,"BRL"," ","1.2")??"N/A":"N/A";break;case"UsuarioCadastroNome":a="Nome do Usu\xe1rio de Cadastro";break;case"UsuarioCadastroEmail":a="E-mail do Usu\xe1rio de Cadastro";break;case"NomeBanco":a="Banco";break;case"NomePais":case"Pais":a="Pa\xeds";break;case"PerfilAcesso_Id":case"usuario_Id":l=!1;break;case"PerfilAcesso":a="Perfil";var L=JSON.parse(JSON.stringify(e));s=e&&""!=e?L.Perfil:"N/A";break;case"Name":case"NOME":a="Nome";break;case"TelefoneCelular":a="Telefone/Celular";break;case"StatusSaldo":a="Status Saldo";break;case"IsVerified":a="Conta Verificada pelo Usu\xe1rio",s=e?"Sim":"N\xe3o";break;case"Created":a="Data de Cadastro",s=null!=e?this.date.transform(e,"dd/MM/yyyy '\xe0s' HH:mm")??"N/A":"N/A";break;case"Updated":a="Data de \xdaltima Atualiza\xe7\xe3o",s=null!=e?this.date.transform(e,"dd/MM/yyyy '\xe0s' HH:mm")??"N/A":"N/A";break;case"DataDesativado":a="Data Desativado",s=null!=e?this.date.transform(e,"dd/MM/yyyy '\xe0s' HH:mm")??"N/A":"N/A";break;case"dataNasc":case"DATA_NASC":a="Data de Nascimento";break;case"cpf":a="CPF",s=null!=e?this.mask.applyMask(e.toString().padStart(11,"0"),"000.000.000-00")??"N/A":"N/A";break;case"NomeBeneficiario":case"Beneficiario":a="Benefici\xe1rio";break;case"Instituicao":a="Institui\xe7\xe3o Financeira";break;case"SituacaoCPF":a="Situa\xe7\xe3o CPF";break;case"ID_CONSULTA":a="Id da Consulta";break;case"ERRO":a="Erro";break;case"RETORNO":a="Retorno";break;case"CPF":s=null!=e?this.mask.applyMask(e.toString().padStart(11,"0"),"000.000.000-00")??"N/A":"N/A";break;case"DATA_INSCRICAO":a="Data de Inscri\xe7\xe3o";break;case"DIGITO":a="D\xedgito";break;case"CONTROLE":a="Controle";break;case"DATA_CAP":a="Data de Capta\xe7\xe3o";break;case"HORA_CAP":a="Hora de Capta\xe7\xe3o";break;case"STATUS":a="Status";break;default:a=o,s=null!=e&&""!=e?e:"N/A"}return[a,s=null!=s&&""!=s?s:"N/A",l]}insereDados(o){for(const[g,O]of Object.entries(o)){var e;try{e=JSON.parse(JSON.parse(JSON.stringify(o[g])))}catch{e=o[g]}if(null!=e&&"object"==typeof e&&"PerfilAcesso"!=g)this.insereDados(e);else{var[a,s,l]=this.formataCampos(g,O);l&&(this.values.find(f=>f[0]==a)||this.values.push([a,s]))}}}ordenaArray(){var o=[];switch(this.obj.entidade){case"Pessoa":o="BR Consulta"==this.obj.acao?["Id da Consulta","Nome","CPF","Data de Nascimento","Situa\xe7\xe3o","Data de Inscri\xe7\xe3o","D\xedgito","Controle","Status","Data de Capta\xe7\xe3o","Hora de Capta\xe7\xe3o","Retorno","Erro"]:["Id","Nome","CPF","Data de Nascimento","Data de Cadastro","Situa\xe7\xe3o CPF","Saldo Atual","Status Saldo","Nome da M\xe3e","Situa\xe7\xe3o","Telefone","E-mail","Observa\xe7\xf5es","Nome do Usu\xe1rio de Cadastro","E-mail do Usu\xe1rio de Cadastro","Excel - Data de Inscri\xe7\xe3o","Excel - D\xedgito","Excel - Ano \xd3bito","Excel - Status","Excel - Data de Capta\xe7\xe3o","Excel - Hora de Capta\xe7\xe3o","Excel - Id Num","Excel - Controle","Excel - Tipo Erro","Excel - Lote Id","Excel - PEP","Data de Atualiza\xe7\xe3o pelo Excel","BR Consulta - Status","BR Consulta - Data de Capta\xe7\xe3o","BR Consulta - Hora de Capta\xe7\xe3o","BR Consulta - Id Consulta","BR Consulta - Controle","BR Consulta - Erro","Data de Atualiza\xe7\xe3o pelo BR Consulta"];break;case"Opera\xe7\xe3o":o=["Id","Nome","CPF","Data de Transa\xe7\xe3o","Data de Cadastro","Status","Valor Opera\xe7\xe3o","Saldo Anterior","Saldo Atual","N\xba Opera\xe7\xe3o","Nome do Usu\xe1rio de Cadastro","E-mail do Usu\xe1rio de Cadastro","Moeda","Valor em Moeda Estrangeira","Nome do Comprador","Pa\xeds do Comprador","Tipo de Transa\xe7\xe3o","Forma de Pagamento"];break;case"Saldo":o=["Nome","CPF","Data de Concess\xe3o","Valor Concedido","Saldo Anterior","Saldo Atual"];break;case"Banco":o=["Id","Nome","C\xf3digo Swift","Endere\xe7o","Cidade","Estado","Pa\xeds"];break;case"Benefici\xe1rio":o=["Id","Nome","C\xf3digo de Registro","Conta","Representante","Banco","C\xf3digo Swift","Endere\xe7o","Cidade","Estado","Pa\xeds"];break;case"Representante":o=["Id","Nome","C\xf3digo"];break;case"Institui\xe7\xe3o Financeira":o=["Id","Nome","C\xf3digo de Registro","Endere\xe7o","Cidade","Estado","Pa\xeds"];break;case"Invoice":o=["Id","Data","Valor","Benefici\xe1rio","Representante","Banco","Conta"];break;case"Usu\xe1rio":o=["Id","Nome","E-mail","Telefone/Celular","Perfil","Data de Cadastro","Data Desativado","Data de \xdaltima Atualiza\xe7\xe3o","Conta Verificada pelo Usu\xe1rio"];break;case"Contrato":o=["Id","Tipo","Evento","N\xba do Contrato","Data","Valor Nacional","Institui\xe7\xe3o Financeira","Benefici\xe1rio","Banco","Percentual de Adiantamento","Pagador/Recebedor no Exterior","Pa\xeds","Taxa","Data de Liquida\xe7\xe3o"]}return this.values=this.values.sort((e,a)=>o.indexOf(e[0])-o.indexOf(a[0])),this.values}ngOnDestroy(){this.subscription.forEach(o=>o.unsubscribe())}voltar(){this.modalService.removeModal(this.modal)}static#a=this.\u0275fac=function(e){return new(e||i)(t.Y36(c.gz),t.Y36(R.Z),t.Y36(H.w),t.Y36(B),t.Y36(k.H9),t.Y36(k.uU),t.Y36(j.M),t.Y36(W.n),t.Y36(V.Z),t.Y36(Y.g),t.Y36(_.d6))};static#t=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-form"]],viewQuery:function(e,a){if(1&e&&(t.Gf(z,5),t.Gf(K,5)),2&e){let s;t.iGM(s=t.CRH())&&(a.template=s.first),t.iGM(s=t.CRH())&&(a.icon=s.first)}},decls:4,vars:0,consts:[["class","align-items-center"],["icon",""],["template",""],[1,"title-icon",2,"translate","0px 6px"],[3,"icon"],[1,"mb-2","mt-2","ms-2"],[1,"table-responsive"],[1,"table","table-striped","mt-2"],["colspan","3"],[1,"table","table-striped","mb-3"],[1,"padding-tr"],[4,"ngFor","ngForOf"],[2,"white-space","nowrap"],["colspan","2",3,"innerHTML"]],template:function(e,a){1&e&&(t.YNc(0,J,2,1,"ng-template",0,1,t.W1O),t.YNc(2,$,27,11,"ng-template",null,2,t.W1O))},dependencies:[k.sg,x.BN,k.uU],styles:[".table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{color:#433f3f;padding-top:7px;padding-bottom:7px}tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{white-space:unset;text-wrap:wrap}.table[_ngcontent-%COMP%]   .padding-tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding-top:7px;padding-bottom:7px}"]})}return i})(),data:{modalOrder:1}},r(7280).D]}];let aa=(()=>{class i{static#a=this.\u0275fac=function(e){return new(e||i)};static#t=this.\u0275mod=t.oAB({type:i});static#e=this.\u0275inj=t.cJS({imports:[c.Bz.forChild(q),c.Bz]})}return i})();var ta=r(2352),ea=r(6223),oa=r(6208),sa=r(4685),ra=r(1532);let ia=(()=>{class i{static#a=this.\u0275fac=function(e){return new(e||i)};static#t=this.\u0275mod=t.oAB({type:i});static#e=this.\u0275inj=t.cJS({imports:[k.ez,aa,x.uH,ta.kW,ea.u5,_.yI.forChild(),oa.m,sa.U$,ra._8]})}return i})()},1433:(S,b,r)=>{r.d(b,{g:()=>D});var c=r(9862),d=r(5619),n=r(9397),N=r(2096),A=r(553),v=r(1064),m=r(9291),y=r(8787),t=r(2425);let D=(()=>{class u{constructor(C,p,P){this.table=C,this.http=p,this.toastr=P,this.url=A.N.url,this.list=new d.X([]),this.object=new d.X(new v.V),this.loading=new d.X(!1)}getList(C=!1){return this.http.get(`${this.url}/moeda/`).pipe((0,n.b)({next:p=>(this.list.next(p),(0,N.of)(p)),error:p=>this.toastr.error("N\xe3o foi poss\xedvel carregar listagem de moedas.")}))}get(C){return this.http.get(`${this.url}/moeda/${C}`,{headers:new c.WM({loading:"true"})}).pipe((0,n.b)({next:p=>(this.object.next(Object.assign({},p)),(0,N.of)(p)),error:p=>this.toastr.error("N\xe3o foi poss\xedvel carregar listagem de moedas.")}))}send(C){return this.http.post(`${this.url}/moeda`,C)}delete(C){return this.http.delete(`${this.url}/moeda/${C}`)}static#a=this.\u0275fac=function(p){return new(p||u)(m.LFG(y.i),m.LFG(c.eN),m.LFG(t._W))};static#t=this.\u0275prov=m.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"})}return u})()},7397:(S,b,r)=>{r.d(b,{Z:()=>y});var c=r(5619),d=r(9397),n=r(2096),N=r(553),A=r(9291),v=r(9862),m=r(2425);let y=(()=>{class t{constructor(u,M){this.http=u,this.toastr=M,this.url=N.N.url,this.list=new c.X([]),this.loading=new c.X(!1)}getList(){return this.http.get(`${this.url}/pais/`).pipe((0,d.b)({next:u=>(this.list.next(u),(0,n.of)(u)),error:u=>this.toastr.error("N\xe3o foi poss\xedvel carregar listagem de paises.")}))}static#a=this.\u0275fac=function(M){return new(M||t)(A.LFG(v.eN),A.LFG(m._W))};static#t=this.\u0275prov=A.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})()}}]);