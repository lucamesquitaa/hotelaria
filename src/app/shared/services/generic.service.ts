import { ContextModel } from '../models/context.model';
import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { ContextService } from '../services/context.service';

/**
 * @description
 *
 * Serviço REST genérico
 */
@Injectable()
export abstract class ServiceGeneric {

	/**
	 * URL do serviço REST (CRUD)
	 */
	abstract urlServiceREST: string;

    protected http: HttpClient;

	protected context: ContextModel | undefined;

 	/**
	  * Labels traduzidos
	  */
	public literals: any = {};	

	/**
	 * LocaleId para os filtros de data, currency e decimal
	 */
	public localeId: string | undefined;

	constructor(
		public injector: Injector) {
        this.http = this.injector.get(HttpClient);
		this.context = this.objContext;
	}

	abstract onReceiveLiterals(): void;

	/**
	 * Contexto do usuário
	 */
	public get objContext(): ContextModel {
		if (!this.context) {
			this.context = ContextService.getContext()
		}
		return this.context;
	}

	public set objContext(value: ContextModel) {
		this.context = value;
	}

	public getBaseUrl(): string {
        return "https://localhost:4200";
	}

    getFullUrl(): any {
        return `${this.getBaseUrl()}${this.urlServiceREST}`;
    }
}