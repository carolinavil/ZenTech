"use strict";(self.webpackChunkZenTech=self.webpackChunkZenTech||[]).push([[587],{8145:(T,E,a)=>{a.d(E,{Yv:()=>M,c5:()=>n,cU:()=>h,fs:()=>_});var o=a(5219),t=a(2832);class h{constructor(){this.id=0,this.num_Op="",this.dataOperacao=new Date,this.nomeCliente="",this.cpfCliente="",this.valorOperacao=0,this.statusOperacao="",this.limiteConcedido=0,this.limiteUtilizado=0,this.limiteAtual=0,this.usuarioCadastroNome="",this.usuarioCadastroEmail=""}}class _{constructor(){this.id=0,this.pessoa_Id="",this.dataCadastro=new Date,this.dataTransacao=new Date,this.valor="",this.num_Op="",this.operacao_Status_Id=void 0,this.tipoTransacao="",this.formaPagamento="",this.nomeComprador="",this.paisComprador="",this.moeda=""}}var n=[{field:"dataTransacao",header:"Data da Transa\xe7\xe3o",maskType:t.O.date,filterType:t.vA.date,filterDisplay:t.w2.menu,filterShowAddButton:!0,filterShowMatchMode:!0,showOperator:!1,filterMatchMode:o.a6.DATE_IS},{field:"num_Op",header:"N\xba Opera\xe7\xe3o",maskType:t.O.mask,mask:"0000",filterType:t.vA.text,filterDisplay:t.w2.menu,filterShowAddButton:!1,filterShowMatchMode:!1,showOperator:!1,filterMatchMode:o.a6.EQUALS},{field:"valorOperacao",header:"Valor da Opera\xe7\xe3o",maskType:t.O.number,filterType:t.vA.numeric,decimal:"1.2",filterDisplay:t.w2.menu,filterShowAddButton:!1,filterShowMatchMode:!0,showOperator:!1,filterMatchMode:o.a6.CONTAINS},{field:"statusOperacao",header:"Status da Opera\xe7\xe3o",maskType:t.O.options,filterType:t.vA.text,filterDisplay:t.w2.menu,filterShowAddButton:!1,filterShowMatchMode:!1,showOperator:!1,filterMatchMode:o.a6.EQUALS,values:[{value:"Liberado",output:"Liberado",class:"flag-green"},{value:"Bloqueado",output:"Bloqueado",class:"flag-danger"},{value:"Chargeback",output:"Chargeback",class:"flag-warning"}]},{field:"dataCadastro",header:"Data de Cadastro",maskType:t.O.dateTime,filterType:t.vA.datetime,filterDisplay:t.w2.menu,filterShowAddButton:!0,filterShowMatchMode:!0,showOperator:!1,filterMatchMode:o.a6.DATE_IS},{field:"usuarioCadastroNome",header:"Cadastrado Por",maskType:t.O.undefined,filterType:t.vA.text,filterDisplay:t.w2.menu,filterShowAddButton:!1,filterShowMatchMode:!1,showOperator:!1,filterMatchMode:o.a6.EQUALS}],M=Object.assign([],n);M.unshift({field:"nomeCliente",header:"Nome",maskType:t.O.undefined,filterType:t.vA.text,filterDisplay:t.w2.menu,filterShowAddButton:!1,filterShowMatchMode:!1,showOperator:!1,filterMatchMode:o.a6.CONTAINS},{field:"cpfCliente",header:"CPF",maskType:t.O.undefined,filterType:t.vA.text,filterDisplay:t.w2.menu,filterShowAddButton:!1,filterShowMatchMode:!1,showOperator:!1,filterMatchMode:o.a6.CONTAINS}),M.splice(6,0,{field:"limiteConcedido",header:"Limite Concedido",maskType:t.O.number,filterType:t.vA.numeric,decimal:"1.2",filterDisplay:t.w2.menu,filterShowAddButton:!1,filterShowMatchMode:!0,showOperator:!1,filterMatchMode:o.a6.CONTAINS},{field:"limiteUtilizado",header:"Limite Utilizado",maskType:t.O.number,filterType:t.vA.numeric,decimal:"1.2",filterDisplay:t.w2.menu,filterShowAddButton:!1,filterShowMatchMode:!0,showOperator:!1,filterMatchMode:o.a6.CONTAINS},{field:"limiteAtual",header:"Limite Dispon\xedvel",maskType:t.O.number,filterType:t.vA.numeric,decimal:"1.2",filterDisplay:t.w2.menu,filterShowAddButton:!1,filterShowMatchMode:!0,showOperator:!1,filterMatchMode:o.a6.CONTAINS})},1102:(T,E,a)=>{a.d(E,{V8:()=>f,Zo:()=>h});var o=a(5219),t=a(2832);class h{constructor(){this.id=0,this.nome="",this.cpf="",this.situacao="",this.dataInscricao=new Date,this.digito="",this.dataNascimento="",this.nomeMae="",this.anoObito=0,this.telefone="",this.email="",this.obs="",this.excel_Status="",this.excel_Data_Cap=new Date,this.excel_Hora_Cap=new Date,this.excel_IdNum="",this.excel_Controle="",this.excel_Erro="",this.brConsulta_Status="",this.brConsulta_Data_Cap=new Date,this.brConsulta_Hora_Cap=new Date,this.brConsulta_Id_Consulta="",this.brConsulta_Controle="",this.brConsulta_Erro="",this.saldoAtual=0,this.dataCadastro=new Date,this.usuarioCadastroNome="",this.usuarioCadastroEmail="",this.dataAtualizacaoExcel=new Date,this.dataAtualizacaoBRConsulta=new Date}}var f=[{field:"id",header:"Id",maskType:t.O.undefined,filterType:t.vA.text,filterDisplay:t.w2.menu,filterShowAddButton:!1,filterShowMatchMode:!1,showOperator:!1,filterMatchMode:o.a6.EQUALS},{field:"nome",header:"Nome",maskType:t.O.undefined,filterType:t.vA.text,filterDisplay:t.w2.menu,filterShowAddButton:!1,filterShowMatchMode:!1,showOperator:!1,filterMatchMode:o.a6.CONTAINS},{field:"cpf",header:"CPF",maskType:t.O.cpf,filterType:t.vA.text,filterDisplay:t.w2.menu,filterShowAddButton:!1,filterShowMatchMode:!1,showOperator:!1,filterMatchMode:o.a6.EQUALS},{field:"saldoAtual",header:"Saldo Atual",maskType:t.O.number,filterType:t.vA.numeric,decimal:"1.2",filterDisplay:t.w2.menu,filterShowAddButton:!1,filterShowMatchMode:!0,showOperator:!1,filterMatchMode:o.a6.CONTAINS},{field:"dataCadastro",header:"Data de Cadastro",maskType:t.O.date,filterType:t.vA.date,filterDisplay:t.w2.menu,filterShowAddButton:!0,filterShowMatchMode:!0,showOperator:!1,filterMatchMode:o.a6.DATE_IS},{field:"situacaoCPF",header:"Situa\xe7\xe3o CPF",maskType:t.O.undefined,filterType:t.vA.text,filterDisplay:t.w2.menu,filterShowAddButton:!1,filterShowMatchMode:!1,showOperator:!1,filterMatchMode:o.a6.EQUALS},{field:"statusSaldo",header:"Status Saldo",maskType:t.O.undefined,filterType:t.vA.text,filterDisplay:t.w2.menu,filterShowAddButton:!1,filterShowMatchMode:!1,showOperator:!1,filterMatchMode:o.a6.EQUALS},{field:"usuarioCadastroNome",header:"Cadastrado por",maskType:t.O.undefined,filterType:t.vA.text,filterDisplay:t.w2.menu,filterShowAddButton:!1,filterShowMatchMode:!1,showOperator:!1,filterMatchMode:o.a6.EQUALS}]},424:(T,E,a)=>{a.d(E,{T:()=>D});var o=a(1064),t=a(590),h=a(708),_=a(2855),v=a(342),e=a(9291),n=a(132),M=a(2667),f=a(1433),d=a(6814),P=a(5597);const c=["template"],m=["icon"];function r(u,g){if(1&u&&e._UZ(0,"fa-icon",2),2&u){const l=e.oxw();e.Q6J("icon",l.faTrash)}}function s(u,g){if(1&u&&(e.TgZ(0,"div",7)(1,"p",8),e._uU(2),e.qZA()()),2&u){const l=e.oxw(2);e.xp6(2),e.Oqu(l.erro)}}function i(u,g){1&u&&e._UZ(0,"span",9)}function p(u,g){if(1&u){const l=e.EpF();e.TgZ(0,"div")(1,"p",3),e._uU(2,"Tem certeza que deseja excluir esse registro? "),e.qZA(),e.TgZ(3,"p"),e._uU(4,"Ele n\xe3o poder\xe1 ser recuperado."),e.qZA(),e.YNc(5,s,3,1,"div",4),e.TgZ(6,"button",5),e.NdJ("click",function(){e.CHM(l);const C=e.oxw();return e.KtG(C.send())}),e.YNc(7,i,1,0,"span",6),e.TgZ(8,"span"),e._uU(9,"Excluir"),e.qZA()()()}if(2&u){const l=e.oxw();e.xp6(5),e.Q6J("ngIf",l.erro),e.xp6(2),e.Q6J("ngIf",l.loading)}}let D=(()=>{class u{constructor(l,O,C,A){this.activatedRoute=l,this.modalService=O,this.crypto=C,this.moedaService=A,this.faTrash=t.$aW,this.id=0,this.erro="",this.loading=!1,this.subscription=[],this.modal=new _.u,this.objeto=new o.V}ngAfterViewInit(){this.modal.id=0,this.modal.template=this.template,this.modal.icon=this.icon,this.modal.style={"max-width":"400px",overflow:"visible"},this.modal.activatedRoute=this.activatedRoute,this.modal.routerBackOptions={relativeTo:this.activatedRoute},this.modal.routerBack=["../../../"],this.modal.title="Excluir registro";var l=this.activatedRoute.params.subscribe(O=>{O.moeda_id?(this.id=this.crypto.decrypt(O.moeda_id),this.modal=this.modalService.addModal(this.modal,"tipo")):(this.modal.routerBack=["../../"],this.voltar())});this.subscription.push(l)}ngOnDestroy(){this.subscription.forEach(l=>l.unsubscribe())}voltar(){this.modalService.removeModal(this.modal)}send(){this.loading=!0,this.erro="",(0,h.n)(this.moedaService.delete(this.id)).then(l=>{this.loading=!1,l.sucesso?((0,h.n)(this.moedaService.getList()),this.voltar()):this.erro=l.mensagem}).catch(l=>{this.loading=!1,this.erro=(0,v.b)(l)})}static#t=this.\u0275fac=function(O){return new(O||u)(e.Y36(n.gz),e.Y36(_.Z),e.Y36(M.w),e.Y36(f.g))};static#e=this.\u0275cmp=e.Xpm({type:u,selectors:[["app-delete"]],viewQuery:function(O,C){if(1&O&&(e.Gf(c,5),e.Gf(m,5)),2&O){let A;e.iGM(A=e.CRH())&&(C.template=A.first),e.iGM(A=e.CRH())&&(C.icon=A.first)}},decls:4,vars:0,consts:[["icon",""],["template",""],[3,"icon"],[1,"mt-2"],["class","m-0  mt-1",4,"ngIf"],[1,"btn","btn-grey","ms-auto","d-flex","mt-2",3,"click"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],[1,"m-0","mt-1"],[1,"text-danger"],[1,"spinner-border","spinner-border-sm","me-1"]],template:function(O,C){1&O&&(e.YNc(0,r,1,1,"ng-template",null,0,e.W1O),e.YNc(2,p,10,2,"ng-template",null,1,e.W1O))},dependencies:[d.O5,P.BN]})}return u})()},2828:(T,E,a)=>{a.d(E,{m:()=>P});var o=a(9862),t=a(5619),h=a(9397),_=a(2096),v=a(553),e=a(342),n=a(9291),M=a(8787),f=a(2425),d=a(6814);let P=(()=>{class c{constructor(r,s,i,p){this.table=r,this.http=s,this.toastr=i,this.datePipe=p,this.url=v.N.url,this.list=new t.X([]),this.listOperacaoPorPessoa=new t.X([]),this.status=new t.X([])}getList(r=!1){return this.table.loading.next(!0),this.http.get(`${this.url}/operacao/`,{headers:new o.WM({loading:"false"})}).pipe((0,h.b)({next:s=>(this.list.next(s),(0,_.of)(s)),error:s=>this.toastr.error("N\xe3o foi poss\xedvel carregar listagem de opera\xe7\xf5es.")}))}getListById(r,s=!1){return this.table.loading.next(!0),this.http.get(`${this.url}/operacao/pessoa/${r}`,{headers:new o.WM({loading:"false"})}).pipe((0,h.b)({next:i=>(this.listOperacaoPorPessoa.next(i),(0,_.of)(i)),error:i=>this.toastr.error("N\xe3o foi poss\xedvel carregar listagem de opera\xe7\xf5es.")}))}getStatus(){return this.http.get(`${this.url}/operacaoStatus/`,{headers:new o.WM({loading:"false"})}).pipe((0,h.b)({next:r=>(this.status.next(r),(0,_.of)(r)),error:r=>this.toastr.error("N\xe3o foi poss\xedvel carregar listagem de status da opera\xe7\xe3o.")}))}get(r){return this.http.get(`${this.url}/operacao/${r}`,{headers:new o.WM({loading:"false"})})}create(r){return this.http.post(`${this.url}/operacao`,r)}importacao(r){return this.http.post(`${this.url}/operacao/import`,r)}edit(r){return this.http.put(`${this.url}/operacao`,r)}delete(r){return this.http.delete(`${this.url}/operacao/${r}`)}exportacao(r){return this.http.post(`${this.url}/operacao/exportar-pdf`,r,{responseType:"blob"}).pipe((0,h.b)({next:s=>{var i=new Blob([s],{type:"application/pdf"});const p=window.URL.createObjectURL(i);var D=document.createElement("a");D.href=p,D.download=`Relatorio_Operacoes_${this.datePipe.transform(new Date,"yyyyMMddHHmmss")}`,D.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window}))},error:s=>{this.toastr.error((0,e.b)(s)),this.toastr.error("N\xe3o foi poss\xedvel carregar opera\xe7\xf5es para exporta\xe7\xe3o.")}}))}exportacaoOperacao(r){return this.http.post(`${this.url}/operacao/exportar-pdf-operacao/${r}`,{},{responseType:"blob"}).pipe((0,h.b)({next:s=>{var i=new Blob([s],{type:"application/pdf"});const p=window.URL.createObjectURL(i);var D=document.createElement("a");D.href=p,D.download=`Relatorio_Operacao_${this.datePipe.transform(new Date,"yyyyMMddHHmmss")}`,D.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window}))},error:s=>{this.toastr.error((0,e.b)(s)),this.toastr.error("N\xe3o foi poss\xedvel carregar opera\xe7\xf5es para exporta\xe7\xe3o.")}}))}importarArquivo(r){var s=new FormData;return s.append("file",r),this.http.post(`${this.url}/operacao/importa-excel`,s)}static#t=this.\u0275fac=function(s){return new(s||c)(n.LFG(M.i),n.LFG(o.eN),n.LFG(f._W),n.LFG(d.uU))};static#e=this.\u0275prov=n.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})()},1225:(T,E,a)=>{a.d(E,{R:()=>f});var o=a(9862),t=a(5619),h=a(9397),_=a(2096),v=a(553),e=a(9291),n=a(8787),M=a(2425);let f=(()=>{class d{constructor(c,m,r){this.table=c,this.http=m,this.toastr=r,this.url=v.N.url,this.list=new t.X([])}getList(c,m=!1){return this.table.loading.next(!0),this.http.get(`${this.url}/pessoaSaldo/${c}`,{headers:new o.WM({loading:"false"})}).pipe((0,h.b)({next:r=>(r=r.map(s=>(s.dataConcessao=new Date(s.dataConcessao),s)),this.list.next(r),(0,_.of)(r)),error:r=>this.toastr.error("N\xe3o foi poss\xedvel carregar listagem de saldos.")}))}create(c){return this.http.post(`${this.url}/pessoaSaldo`,c)}delete(c){return this.http.delete(`${this.url}/pessoaSaldo/${c}`)}static#t=this.\u0275fac=function(m){return new(m||d)(e.LFG(n.i),e.LFG(o.eN),e.LFG(M._W))};static#e=this.\u0275prov=e.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"})}return d})()},2719:(T,E,a)=>{a.d(E,{N:()=>P});var o=a(9862),t=a(5619),h=a(9397),_=a(2096),v=a(553),e=a(1102),n=a(9291),M=a(8787),f=a(2425),d=a(6814);let P=(()=>{class m{constructor(s,i,p,D){this.table=s,this.http=i,this.toastr=p,this.datepipe=D,this.url=v.N.url,this.list=new t.X([]),this.object=new t.X(new e.Zo)}getList(s=!1){return this.table.loading.next(!0),this.http.get(`${this.url}/pessoa`,{headers:new o.WM({loading:s.toString()})}).pipe((0,h.b)({next:i=>(i=i.map(p=>(p.dataCadastro=new Date(p.dataCadastro),p)),this.list.next(Object.assign([],i)),(0,_.of)(i)),error:i=>this.toastr.error("N\xe3o foi poss\xedvel carregar listagem de pessoas.")}))}get(s){return this.http.get(`${this.url}/pessoa/${s}`,{headers:new o.WM({loading:"true"})}).pipe((0,h.b)({next:i=>(this.object.next(Object.assign({},i)),(0,_.of)(i)),error:i=>this.toastr.error("N\xe3o foi poss\xedvel carregar listagem de pessoas.")}))}importarArquivo(s){var i=new FormData;return i.append("file",s),this.http.post(`${this.url}/pessoa/importa-excel`,i)}create(s){return this.http.post(`${this.url}/pessoa`,s)}delete(s){return this.http.delete(`${this.url}/pessoa/${s}`)}getPessoa(s,i){var p=this.datepipe.transform(i,"dd/MM/yyyy");return this.http.post(`${this.url}/pessoa/consulta-pessoa`,{cpf:s,data:p})}static#t=this.\u0275fac=function(i){return new(i||m)(n.LFG(M.i),n.LFG(o.eN),n.LFG(f._W),n.LFG(d.uU))};static#e=this.\u0275prov=n.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})()}}]);