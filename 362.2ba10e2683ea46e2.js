"use strict";(self.webpackChunkZenTech=self.webpackChunkZenTech||[]).push([[362],{1102:(E,f,s)=>{s.d(f,{V8:()=>g,Zo:()=>_});var o=s(5219),a=s(2832);class _{constructor(){this.id=0,this.nome="",this.cpf="",this.situacao="",this.dataInscricao=new Date,this.digito="",this.dataNascimento="",this.nomeMae="",this.anoObito=0,this.telefone="",this.email="",this.obs="",this.excel_Status="",this.excel_Data_Cap=new Date,this.excel_Hora_Cap=new Date,this.excel_IdNum="",this.excel_Controle="",this.excel_Erro="",this.brConsulta_Status="",this.brConsulta_Data_Cap=new Date,this.brConsulta_Hora_Cap=new Date,this.brConsulta_Id_Consulta="",this.brConsulta_Controle="",this.brConsulta_Erro="",this.saldoAtual=0,this.dataCadastro=new Date,this.cadastradoPor="",this.dataAtualizacaoExcel=new Date,this.dataAtualizacaoBRConsulta=new Date}}var g=[{field:"id",header:"Id",maskType:a.O.undefined,filterType:a.vA.text,filterDisplay:a.w2.menu,filterShowAddButton:!1,filterShowMatchMode:!1,showOperator:!1,filterMatchMode:o.a6.EQUALS},{field:"nome",header:"Nome",maskType:a.O.undefined,filterType:a.vA.text,filterDisplay:a.w2.menu,filterShowAddButton:!1,filterShowMatchMode:!1,showOperator:!1,filterMatchMode:o.a6.CONTAINS},{field:"cpf",header:"CPF",maskType:a.O.cpf,filterType:a.vA.text,filterDisplay:a.w2.menu,filterShowAddButton:!1,filterShowMatchMode:!1,showOperator:!1,filterMatchMode:o.a6.EQUALS},{field:"saldoAtual",header:"Saldo Atual",maskType:a.O.number,filterType:a.vA.numeric,decimal:"1.2",filterDisplay:a.w2.menu,filterShowAddButton:!1,filterShowMatchMode:!0,showOperator:!1,filterMatchMode:o.a6.CONTAINS},{field:"dataCadastro",header:"Data de Cadastro",maskType:a.O.date,filterType:a.vA.date,filterDisplay:a.w2.menu,filterShowAddButton:!0,filterShowMatchMode:!0,showOperator:!1,filterMatchMode:o.a6.DATE_IS},{field:"situacaoCPF",header:"Situa\xe7\xe3o CPF",maskType:a.O.undefined,filterType:a.vA.text,filterDisplay:a.w2.menu,filterShowAddButton:!1,filterShowMatchMode:!1,showOperator:!1,filterMatchMode:o.a6.EQUALS},{field:"statusSaldo",header:"Status Saldo",maskType:a.O.undefined,filterType:a.vA.text,filterDisplay:a.w2.menu,filterShowAddButton:!1,filterShowMatchMode:!1,showOperator:!1,filterMatchMode:o.a6.EQUALS}]},9362:(E,f,s)=>{s.r(f),s.d(f,{AnaliseModule:()=>O});var o=s(6814),a=s(132),_=s(590),p=s(708),t=s(9291),d=s(2719),m=s(1225),M=s(2828),g=s(5597),i=s(4201);let v=(()=>{class n{constructor(){this.dataChart={labels:["Janeiro","Fevereiro","Mar\xe7o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],datasets:[{label:"My First Dataset",data:[81,56,55,40,65,59,80,81,56,55,40,65],fill:!1,borderColor:"rgb(75, 192, 192)",tension:.1}]}}static#t=this.\u0275fac=function(l){return new(l||n)};static#s=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-chart-data"]],decls:2,vars:2,consts:[[3,"data","type"],["chartData",""]],template:function(l,c){1&l&&t._UZ(0,"p-chart",0,1),2&l&&t.Q6J("data",c.dataChart)("type","line")},dependencies:[i.C]})}return n})(),e=(()=>{class n{constructor(){this.dataChart={labels:[2023,2022,2021,2019,2018,2017,2016],datasets:[{label:"My First Dataset",data:[65,59,80,81,56,55,40],fill:!1,backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(255, 159, 64, 0.2)","rgba(255, 205, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(54, 162, 235, 0.2)","rgba(153, 102, 255, 0.2)","rgba(201, 203, 207, 0.2)"],borderColor:["rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(54, 162, 235)","rgb(153, 102, 255)","rgb(201, 203, 207)"],borderWidth:1,tension:.1}]},this.options={indexAxis:"y"}}static#t=this.\u0275fac=function(l){return new(l||n)};static#s=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-chart-ano"]],decls:2,vars:3,consts:[[3,"data","type","options"],["chartData",""]],template:function(l,c){1&l&&t._UZ(0,"p-chart",0,1),2&l&&t.Q6J("data",c.dataChart)("type","bar")("options",c.options)},dependencies:[i.C]})}return n})();const r=[{path:"",component:(()=>{class n{constructor(A,l,c){this.pessoaService=A,this.pessoaSaldoService=l,this.pessoaOperacaoService=c,this.faChartLine=_.Stf,this.subscription=[],this.pessoasList=[],this.operacoesList=[],(0,p.n)(A.getList());var D=A.list.subscribe(C=>{this.pessoasList=C});this.subscription.push(D);var P=c.list.subscribe(C=>{});this.subscription.push(P),(0,p.n)(c.getList());var T=c.list.subscribe(C=>{this.operacoesList=C});this.subscription.push(T)}static#t=this.\u0275fac=function(l){return new(l||n)(t.Y36(d.N),t.Y36(m.R),t.Y36(M.m))};static#s=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-analise"]],decls:56,vars:16,consts:[[1,"page"],[1,"page__header"],[1,"title-icon"],[3,"icon"],[1,"me-auto"],[1,"page__header-title"],[1,"page__body"],[1,"row","d-flex","align-items-start"],[1,"col-xl-2","col-lg-2","col-md-4","col-sm-12","col-12","mb-3"],[1,"card","card-body","bg-light","py-2"],[1,"d-flex","justify-content-between"],[1,"mb-0"],[1,"row","align-items-start"],[1,"col-12","mb-3"],[1,"col-md-6","col-12","mb-3"]],template:function(l,c){1&l&&(t.TgZ(0,"section",0)(1,"div",1)(2,"span",2),t._UZ(3,"fa-icon",3),t.qZA(),t.TgZ(4,"div",4)(5,"h3",5),t._uU(6,"Relat\xf3rio "),t.qZA()()(),t.TgZ(7,"div",6)(8,"div",7)(9,"div",8)(10,"div",9)(11,"p")(12,"small"),t._uU(13,"Total pessoas"),t.qZA()(),t.TgZ(14,"div",10)(15,"h3"),t._uU(16),t.qZA(),t.TgZ(17,"div")(18,"p",11)(19,"small")(20,"span"),t._uU(21),t.qZA(),t._uU(22," Importados"),t.qZA()(),t.TgZ(23,"p",11)(24,"small")(25,"span"),t._uU(26),t.ALo(27,"currency"),t.qZA(),t._uU(28," BRConsulta"),t.qZA()(),t.TgZ(29,"p",11)(30,"small")(31,"span"),t._uU(32),t.ALo(33,"currency"),t.qZA(),t._uU(34," Formul\xe1rio"),t.qZA()()()()()(),t.TgZ(35,"div",8)(36,"div",9)(37,"p")(38,"small"),t._uU(39,"Total opera\xe7\xf5es"),t.qZA()(),t.TgZ(40,"h3"),t._uU(41),t.qZA()()()(),t.TgZ(42,"div",12)(43,"div",13)(44,"h5"),t._uU(45,"Opera\xe7\xf5es"),t.qZA()(),t.TgZ(46,"div",14)(47,"div",9)(48,"h4"),t._uU(49,"M\xeas 2023"),t.qZA(),t._UZ(50,"app-chart-data"),t.qZA()(),t.TgZ(51,"div",14)(52,"div",9)(53,"h4"),t._uU(54,"Ano"),t.qZA(),t._UZ(55,"app-chart-ano"),t.qZA()()()()()),2&l&&(t.xp6(3),t.Q6J("icon",c.faChartLine),t.xp6(13),t.Oqu(c.pessoasList.length),t.xp6(5),t.Oqu(c.pessoasList.length/2),t.xp6(5),t.Oqu(t.gM2(27,6,c.pessoasList.length/3*1,"","","1.0-0")),t.xp6(6),t.Oqu(t.gM2(33,11,c.pessoasList.length/3*2,"","","1.0-0")),t.xp6(9),t.Oqu(c.operacoesList.length))},dependencies:[g.BN,v,e,o.H9]})}return n})()}];let u=(()=>{class n{static#t=this.\u0275fac=function(l){return new(l||n)};static#s=this.\u0275mod=t.oAB({type:n});static#e=this.\u0275inj=t.cJS({imports:[a.Bz.forChild(r),a.Bz]})}return n})(),O=(()=>{class n{static#t=this.\u0275fac=function(l){return new(l||n)};static#s=this.\u0275mod=t.oAB({type:n});static#e=this.\u0275inj=t.cJS({imports:[o.ez,u,g.uH,i.S]})}return n})()},2828:(E,f,s)=>{s.d(f,{m:()=>g});var o=s(9862),a=s(5619),_=s(9397),p=s(2096),t=s(553),d=s(9291),m=s(8787),M=s(2425);let g=(()=>{class i{constructor(e,h,r){this.table=e,this.http=h,this.toastr=r,this.url=t.N.url,this.list=new a.X([]),this.listOperacaoPorPessoa=new a.X([]),this.status=new a.X([])}getList(){return this.table.loading.next(!0),this.http.get(`${this.url}/operacao/`,{headers:new o.WM({loading:"false"})}).pipe((0,_.b)({next:e=>(this.list.next(e),(0,p.of)(e)),error:e=>this.toastr.error("N\xe3o foi poss\xedvel carregar listagem de opera\xe7\xf5es.")}))}getListById(e){return this.table.loading.next(!0),this.http.get(`${this.url}/operacao/pessoa/${e}`,{headers:new o.WM({loading:"false"})}).pipe((0,_.b)({next:h=>(this.listOperacaoPorPessoa.next(h),(0,p.of)(h)),error:h=>this.toastr.error("N\xe3o foi poss\xedvel carregar listagem de opera\xe7\xf5es.")}))}getStatus(){return this.http.get(`${this.url}/operacaoStatus/`,{headers:new o.WM({loading:"false"})}).pipe((0,_.b)({next:e=>(this.status.next(e),(0,p.of)(e)),error:e=>this.toastr.error("N\xe3o foi poss\xedvel carregar listagem de status da opera\xe7\xe3o.")}))}get(e){return this.http.get(`${this.url}/operacao/${e}`,{headers:new o.WM({loading:"false"})})}create(e){return this.http.post(`${this.url}/operacao`,e)}importacao(e){return this.http.post(`${this.url}/operacao/import`,e)}edit(e){return this.http.put(`${this.url}/operacao`,e)}delete(e){return this.http.delete(`${this.url}/operacao/${e}`)}static#t=this.\u0275fac=function(h){return new(h||i)(d.LFG(m.i),d.LFG(o.eN),d.LFG(M._W))};static#s=this.\u0275prov=d.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})()},1225:(E,f,s)=>{s.d(f,{R:()=>g});var o=s(9862),a=s(5619),_=s(9397),p=s(2096),t=s(553),d=s(9291),m=s(8787),M=s(2425);let g=(()=>{class i{constructor(e,h,r){this.table=e,this.http=h,this.toastr=r,this.url=t.N.url,this.list=new a.X([])}getList(e){return this.table.loading.next(!0),this.http.get(`${this.url}/pessoaSaldo/${e}`,{headers:new o.WM({loading:"false"})}).pipe((0,_.b)({next:h=>(h=h.map(r=>(r.dataConcessao=new Date(r.dataConcessao),r)),this.list.next(h),(0,p.of)(h)),error:h=>this.toastr.error("N\xe3o foi poss\xedvel carregar listagem de saldos.")}))}create(e){return this.http.post(`${this.url}/pessoaSaldo`,e)}delete(e){return this.http.delete(`${this.url}/pessoaSaldo/${e}`)}static#t=this.\u0275fac=function(h){return new(h||i)(d.LFG(m.i),d.LFG(o.eN),d.LFG(M._W))};static#s=this.\u0275prov=d.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})()},2719:(E,f,s)=>{s.d(f,{N:()=>i});var o=s(9862),a=s(5619),_=s(9397),p=s(2096),t=s(553),d=s(1102),m=s(9291),M=s(8787),g=s(2425);let i=(()=>{class e{constructor(r,u,O){this.table=r,this.http=u,this.toastr=O,this.url=t.N.url,this.list=new a.X([]),this.object=new a.X(new d.Zo)}getList(){return this.table.loading.next(!0),this.http.get(`${this.url}/pessoa`,{headers:new o.WM({loading:"false"})}).pipe((0,_.b)({next:r=>(r=r.map(u=>(u.dataCadastro=new Date(u.dataCadastro),u)),this.list.next(Object.assign([],r)),(0,p.of)(r)),error:r=>this.toastr.error("N\xe3o foi poss\xedvel carregar listagem de pessoas.")}))}get(r){return this.http.get(`${this.url}/pessoa/${r}`,{headers:new o.WM({loading:"true"})}).pipe((0,_.b)({next:u=>(this.object.next(Object.assign({},u)),(0,p.of)(u)),error:u=>this.toastr.error("N\xe3o foi poss\xedvel carregar listagem de pessoas.")}))}create(r){return this.http.post(`${this.url}/pessoa`,r)}delete(r){return this.http.delete(`${this.url}/pessoa/${r}`)}getPessoa(r,u){return u=new Date(u.toString()+"T00:00:00").toLocaleString().substring(0,10),this.http.post(`${this.url}/pessoa/consulta-pessoa`,{cpf:r,dataNasc:u})}static#t=this.\u0275fac=function(u){return new(u||e)(m.LFG(M.i),m.LFG(o.eN),m.LFG(g._W))};static#s=this.\u0275prov=m.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})()},553:(E,f,s)=>{s.d(f,{N:()=>o});const o={production:!1,url:"https://zentechonboardingback.azurewebsites.net"}},708:(E,f,s)=>{s.d(f,{n:()=>a});var o=s(6973);function a(_,p){const t="object"==typeof p;return new Promise((d,m)=>{let g,M=!1;_.subscribe({next:i=>{g=i,M=!0},error:m,complete:()=>{M?d(g):t?d(p.defaultValue):m(new o.K)}})})}}}]);