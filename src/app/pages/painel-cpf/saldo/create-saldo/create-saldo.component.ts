import { Component, OnDestroy, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { Subscription, lastValueFrom } from 'rxjs';
import { PessoaSaldoRequest } from 'src/app/models/pessoa-saldo.model';
import { Modal, ModalService } from 'src/app/services/modal.service';
import { PessoaOperacaoService } from 'src/app/services/pessoa-operacao.service';
import { PessoaSaldoService } from 'src/app/services/pessoa-saldo.service';
import { PessoaService } from 'src/app/services/pessoa.service';
import { Crypto } from 'src/app/utils/crypto';
import { getError } from 'src/app/utils/error';

@Component({
    selector: 'app-create-saldo',
    templateUrl: './create-saldo.component.html',
    styleUrls: ['./create-saldo.component.css']
})
export class CreateSaldoComponent implements OnDestroy {
    faDollarSign = faDollarSign;
    objeto: PessoaSaldoRequest = new PessoaSaldoRequest;
    erro: string = '';
    loading = false;
    subscription: Subscription[] = [];

    @ViewChild('template') template: TemplateRef<any>;
    @ViewChild('icon') icon: TemplateRef<any>;
    modal: Modal = new Modal;

    constructor(
        private activatedRoute: ActivatedRoute,
        private modalService: ModalService,
        private pessoaOperacaoService: PessoaOperacaoService,
        private pessoaSaldoService: PessoaSaldoService,
        private pessoaService: PessoaService,
        private crypto: Crypto
    ) {
        
    }

    ngAfterViewInit(): void {
        this.modal.title = 'Cadastrar Saldo';
        this.modal.template = this.template;
        this.modal.style = { 'max-width': '500px' };
        this.modal.routerBack = ['../../'];
        this.modal.activatedRoute = this.activatedRoute;
        this.modal.routerBackOptions = { relativeTo: this.activatedRoute };
        this.modal.icon = this.icon;

        var parent = this.activatedRoute.parent?.snapshot.paramMap.has('pessoa_id');
        var child = this.activatedRoute.snapshot.paramMap.has('pessoa_id');
        var paramsSubscriber = parent ? this.activatedRoute.parent?.params : child ? this.activatedRoute.params : this.voltar();
        if (paramsSubscriber) {
            var params = paramsSubscriber.subscribe(x => {
                if (x['pessoa_id']) {
                    this.objeto.pessoa_Id = this.crypto.decrypt(x['pessoa_id']);
                    setTimeout(() => {
                        this.modal = this.modalService.addModal(this.modal, 'create saldo');
                    }, 200);
                } else {
                    this.voltar();
                }
            });
            this.subscription.push(params);
        }
    }

    ngOnDestroy(): void {
        this.subscription.forEach(item => item.unsubscribe());
    }

    voltar() {
        this.modalService.removeModal(this.modal.id);
    }

    send() {
        this.loading = true;
        this.erro = '';

        lastValueFrom(this.pessoaSaldoService.create(this.objeto))
            .then(res => {
                lastValueFrom(this.pessoaSaldoService.getList(this.objeto.pessoa_Id));
                lastValueFrom(this.pessoaOperacaoService.getList());
                lastValueFrom(this.pessoaService.getList());
                lastValueFrom(this.pessoaService.get(this.objeto.pessoa_Id));
                this.voltar();
                this.loading = false;
            })
            .catch(res => {
                this.loading = false;
                this.erro = getError(res);
            })

    }
}
