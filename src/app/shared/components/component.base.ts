import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContextModel } from '../models/context.model';
import { ContextService } from '../services/context.service';
import { ComponentInterface } from './component.interface';

/**
 * @description
 *
 * Componente básico
 */
 @Injectable()
 export abstract class ComponentBase implements ComponentInterface {

	public literals: any = {};

	/**
	 * LocaleId para os filtros de data, currency e decimal
	 *
	 * @type {string}
	 * @memberof ComponentBase
	 */
	public localeId: string | undefined;

	/**
	 * Exibe ou não a animação de espera de consulta
	 */
	private _loading = false;

	public get loading(): boolean {
		return this._loading;
	}

	protected _loadingCount = 0;

	/**
	 * Serviço HTTP
	 */
	public http: HttpClient;

	/**
	 * Serviço de Rotas
	 */
	public router: Router;

	/**
	 * Serviço da Rota Ativa
	 */
	public activatedRoute: ActivatedRoute;



	constructor(
		public injector: Injector
	) {
		this.http = injector.get(HttpClient);
		this.router = injector.get(Router);
		this.activatedRoute = injector.get(ActivatedRoute);

		// Carrega o contexto global do usuário
		this.context = ContextService.getContext();
	}
     ngOnInit(): void {

     }
     ngOnDestroy(): void {

     }
     context: ContextModel;

	/**
	 * Exibe a animação de espera
	 */
	showLoading() {
		if (this._loadingCount === 0) {
			this._loading = true;
		}
		this._loadingCount++;
	}

	/**
	 * Esconde a animação de espera
	 */
	hideLoading() {
		if (this._loadingCount > 0) {
			this._loadingCount--;
		}

		if (this._loadingCount === 0) {
			this._loading = false;
		}
	}

	abstract onReceiveLiterals(): void;

	/**
	 * Retorna o objeto da propriedade "data" da rota ativa
	 */
	/*public getRouteData(): any {
		return this.activatedRoute &&
		 this.activatedRoute.snapshot &&
			   this.activatedRoute.snapshot.data;
	}

	/**
	 * Ao pressionar ENTER deve abrir o modal de pesquisa do lookup

	public onLookupKeyPress(lookup: PoLookupComponent, event: any) {
		if (event.keyCode == 13) {
			event.preventDefault();
			lookup.searchEvent();
		}
	}

	/**
	 * Exibe mensagem de sucesso

	public showSuccess(message: string) {
		this.poNotificationService.success(message);
	}

	/**
	 * Exibe mensagem de atenção

	public showWarning(message: string) {
		this.poNotificationService.warning(message);
	}

	/**
	 * Exibe mensagem de informação

	 public showInformation(message: string) {
		 this.poNotificationService.information(message);
     }
     */
}
