import { Cart } from "./cart.model";
import { Usuario } from "./usuario.model";

/**
 * Contexto do usuário
 */
export interface ContextModel {
    usuarioAutenticado: boolean,
    usuario: Usuario,
    cart: Cart
}
