import { DatePipe } from '@angular/common';
import { Component, OnDestroy, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription, lastValueFrom } from 'rxjs';
import { BeneficiarioRequest } from 'src/app/models/beneficiario.model';
import { Contrato } from 'src/app/models/contrato.model';
import { InvoiceRequest } from 'src/app/models/invoice.model';
import { InvoiceService } from 'src/app/services/invoice.service';
import { Modal, ModalService } from 'src/app/services/modal.service';
import { Crypto } from 'src/app/utils/crypto';
import { getError } from 'src/app/utils/error';
import { NgForm } from '@angular/forms';
import { tabChanged } from 'src/app/utils/tabview';
import { faArrowLeft, faArrowRight, faCheck, faEdit, faPenClip, faTrash } from '@fortawesome/free-solid-svg-icons';
import { LoadingService } from 'src/app/parts/loading/loading';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnDestroy {
    faEdit = faEdit;
    faTrash = faTrash;
    faArrowRight = faArrowRight;
    faArrowLeft = faArrowLeft;
    faPenClip = faPenClip;
    faCheck = faCheck;
    objeto: InvoiceRequest = new InvoiceRequest;
    erro: string = '';

    loading = false;
    loadingInvoiceFile = false;
    loadingContratoFile = false;
    loadingSwiftFile = false;
    loadingContratoBicolunadoFile = false;

    subscription: Subscription[] = [];

    @ViewChild('template') template: TemplateRef<any>
    @ViewChild('icon') icon: TemplateRef<any>

    modal: Modal = new Modal;
    isEditPage = true;
    activeIndex = 0;


    podeBaixarContratoBicolunado = false;
    podeBaixarInvoice = false;
    podeBaixarContrato = false;
    podeBaixarSwift = false;
    podeBaixarKit = false;
    beneficiarioSelected?: BeneficiarioRequest;

    camposReadonly = false;

    constructor(
        private activatedRoute: ActivatedRoute,
        private crypto: Crypto,
        private datepipe: DatePipe,
        private toastr: ToastrService,
        private invoiceService: InvoiceService,
        private modalService: ModalService,
        private loadingService: LoadingService,
        private router: Router,
    ) {



    }

    ngAfterViewInit(): void {
        this.modal.id = 0;
        this.modal.template = this.template;
        this.modal.icon = this.icon;
        this.modal.style = { 'max-width': '1100px' };
        this.modal.activatedRoute = this.activatedRoute;
        this.modal.routerBackOptions = { relativeTo: this.activatedRoute };
        var params = this.activatedRoute.params.subscribe(x => {
            if (x['invoice_id']) {
                this.objeto.invoice.id = this.crypto.decrypt(x['invoice_id']);
                this.modal.title = 'Editar Invoice';
                this.modal.routerBack = ['../../'];
                this.isEditPage = true;

                lastValueFrom(this.invoiceService.get(this.objeto.invoice.id))
                    .then(async res => {
                        res.contrato.numContrato = res.invoice.id.toString();
                        res.invoice.data = this.datepipe.transform(res.invoice.data, 'yyyy-MM-ddTHH:mm') as unknown as Date;
                        res.contrato.data = this.datepipe.transform(res.contrato.data, 'yyyy-MM-ddTHH:mm') as unknown as Date;
                        res.contrato.dataLiquidacao = this.datepipe.transform(res.contrato.dataLiquidacao, 'yyyy-MM-dd') as unknown as Date;

                        res.contrato.dataAssinaturaRepresentanteLegal = this.datepipe.transform(res.contrato.dataAssinaturaRepresentanteLegal, 'yyyy-MM-ddTHH:mm') as unknown as Date;
                        res.contrato.dataAssinaturaIntermediadora = this.datepipe.transform(res.contrato.dataAssinaturaIntermediadora, 'yyyy-MM-ddTHH:mm') as unknown as Date;
                        res.contrato.dataCertificadoAssinatura = this.datepipe.transform(res.contrato.dataCertificadoAssinatura, 'yyyy-MM-ddTHH:mm') as unknown as Date;
                        
                        this.objeto = res;
                        this.objeto.contrato = new Contrato(res.contrato);
                        
                        this.setCamposReadonly();
                        this.podeBaixarKitChange();

                        setTimeout(() => {
                            this.modal = this.modalService.addModal(this.modal, 'invoice');
                        }, 200);
                    })
                    .catch(res => {
                        this.voltar()
                    })
            } else {

                this.modal.title = 'Cadastrar Invoice';
                this.modal.routerBack = ['../'];

                this.isEditPage = false;
                this.objeto.invoice.data = this.datepipe.transform(this.objeto.invoice.data, 'yyyy-MM-ddTHH:mm') as unknown as Date;
                this.objeto.contrato.dataLiquidacao = this.datepipe.transform(this.objeto.contrato.dataLiquidacao, 'yyyy-MM-dd') as unknown as Date;
                this.objeto.contrato.data = this.datepipe.transform(this.objeto.contrato.data, 'yyyy-MM-ddTHH:mm') as unknown as Date;
                setTimeout(() => {
                    this.modal = this.modalService.addModal(this.modal, 'invoice');
                }, 200);
                this.podeBaixarKitChange();
            }
        });
        this.subscription.push(params);
    }

    ngOnDestroy(): void {
        this.subscription.forEach(item => item.unsubscribe());
    }

    encryptId(id: any): string {
        const encryptedId = this.crypto.encrypt(id);
        return encryptedId !== null ? encryptedId : ''; // Se encryptedId for null, retorna uma string vazia ('')
    }

    voltar() {
        this.modalService.removeModal(this.modal);
    }

    tabChanged(index: number) {
        this.activeIndex = index;
        tabChanged(index)
    }

    calculaMoedaNacional() {
        if (this.objeto.invoice.valor && this.objeto.contrato.taxa) {
            this.objeto.contrato.valorNacional = this.objeto.invoice.valor * this.objeto.contrato.taxa;
        }
    }

    calculaVET() {
        if (this.objeto.invoice.valor && this.objeto.contrato.valorNacional) {
            // VET = (Valor Moeda Nacional + ( Valor Moeda Nacional * 0.38 )) / Valor Invoice
            var iof = 0.38 / 100;
            var iofRS = this.objeto.contrato.valorNacional * iof;
            this.objeto.contrato.vet = (this.objeto.contrato.valorNacional + iofRS) / this.objeto.invoice.valor;
        }
    }

    setCamposReadonly() {
        if (this.objeto.contrato.dataAssinaturaRepresentanteLegal || this.objeto.contrato.dataAssinaturaIntermediadora || this.objeto.contrato.dataCertificadoAssinatura) {
            this.camposReadonly = true;
        } else {
            this.camposReadonly = false;
        }
    }

    podeBaixarKitChange() {
        var idDiferenteZero = this.objeto.invoice.id != 0 && this.objeto.contrato.id != 0;

        this.podeBaixarInvoice = idDiferenteZero || this.loading || this.loadingInvoiceFile;
        this.podeBaixarContrato = idDiferenteZero || this.loading || this.loadingContratoFile;
        this.podeBaixarSwift = idDiferenteZero || this.loading || this.loadingSwiftFile;

        this.podeBaixarKit = this.podeBaixarContratoBicolunado
            && this.podeBaixarInvoice
            && this.podeBaixarContrato
            && this.podeBaixarSwift;

    }

    async swiftDownload() {
        if (this.objeto.invoice.id == 0) {
            this.toastr.error('Você deve primeiro salvar os dados para fazer o download.')
            return
        }
        this.loadingSwiftFile = true;
        this.loadingService.message.next('Carregando Swift.')

        try {
            await lastValueFrom(this.invoiceService.fileSwift(this.objeto.invoice.id))
        } catch (e: any) {
            this.erro = getError(e);
            this.loadingSwiftFile = false;
            this.loadingService.message.next('');
        }
    }

    async kitDownload() {
        if (this.objeto.invoice.id == 0) {
            this.toastr.error('Você deve primeiro salvar os dados para fazer o download.')
            return
        }

        this.loading = true;

        await lastValueFrom(this.invoiceService.kitZip(this.objeto.invoice.id))
            .catch(res => {
                this.erro = getError(res);
                this.loading = false;
            });
        this.loading = false;
    }

    async send(invoice: NgForm, contrato: NgForm) {
        this.loading = false;
        this.erro = '';

        if (invoice.invalid) {
            this.toastr.error('Campos inválidos em invoice.');
            this.erro = 'Campos inválidos em invoice.';
            return;
        }
        if (contrato.invalid) {
            this.toastr.error('Campos inválidos em contrato.');
            this.erro = 'Campos inválidos em contrato.';
            return;
        }

        if (!this.isEditPage) {
            this.objeto.contrato.invoice_Id = 0;
        }

        this.objeto.contrato.valorNacional = parseFloat(this.objeto.contrato.valorNacional as unknown as string);
        this.objeto.contrato.vet = parseFloat(this.objeto.contrato.vet as unknown as string);
        this.objeto.contrato.taxa = parseFloat(this.objeto.contrato.taxa as unknown as string);
        this.objeto.invoice.valor = parseFloat(this.objeto.invoice.valor as unknown as string);

        return await this.request()
            .then(async res => {
                if (res.sucesso == true) {

                    // this.alterarRepresentanteLegal = false;

                    this.objeto.contrato.id = res.objeto.contrato.id;
                    this.objeto.contrato.invoice_Id = res.objeto.invoice.id;
                    this.objeto.invoice.id = res.objeto.invoice.id;
                    this.objeto.contrato.numContrato = this.objeto.invoice.id.toString();
                    // if (!this.isEditPage) {
                        // await lastValueFrom(this.invoiceService.edit(this.objeto));
                    // }

                    var idEncrypted = this.crypto.encrypt(this.objeto.invoice.id);
                    if (!this.isEditPage) {
                        this.modalService.removeModalAnimation(this.modal.id);
                        this.router.navigate(['../editar', idEncrypted], { relativeTo: this.activatedRoute })
                    }
                    await lastValueFrom(this.invoiceService.getList());

                } else {
                    this.erro = res.mensagem;
                    this.toastr.error(res.mensagem);
                }
            })

            .catch(res => {
                this.loading = false;
                this.erro = getError(res);
            })
    }

    request() {
        if (this.isEditPage)
            return lastValueFrom(this.invoiceService.edit(this.objeto));

        return lastValueFrom(this.invoiceService.create(this.objeto));
    }

}
