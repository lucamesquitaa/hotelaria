import { OnInit, OnDestroy } from '@angular/core';
import { ContextModel } from '../models/context.model';

/**
 * @description
 *
 * Interface comum a todos os componentes e páginas
 */
export interface ComponentInterface extends OnInit, OnDestroy {

	// Contexto global do usuário
	context: ContextModel;

	// Exibe ou não a animação de espera de consulta
	loading: boolean;

	// Labels traduzidos
	literals: any;
}