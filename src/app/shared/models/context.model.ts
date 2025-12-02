import { LoginResponseModel, ResultLoginModel } from "./login.model";
import { Usuario } from "./usuario.model";

/**
 * Contexto do usuário
 */
export interface ContextModel {
    usuarioAutenticado: boolean,
    usuario: LoginResponseModel,
    perfil?: ResultLoginModel,
    token: string,
    isLoading: boolean
}
