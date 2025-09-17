import { LoginResponseModel, ResultLoginModel } from "./login.model";
import { Usuario } from "./usuario.model";

/**
 * Contexto do usuário
 */
export interface ContextModel {
    usuarioAutenticado: boolean,
    usuario: LoginResponseModel,
    token: string,
    isLoading: boolean
}
