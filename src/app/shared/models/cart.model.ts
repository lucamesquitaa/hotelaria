import { Product } from "./product.model";

export interface Cart {
  number: number,
  products: Product[]
}
