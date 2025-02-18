import { Component, Inject, Injector } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.model';
import { ComponentBase } from '../component.base';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent extends ComponentBase {
  override onReceiveLiterals(): void {
    throw new Error('Method not implemented.');
  }

  id: number | undefined;
  hasDataID: boolean = false;
  itemSelected: Product = this.instanciaProduto();

  constructor(public override injector: Injector, public productService: ProductsService, @Inject(MAT_DIALOG_DATA) public data: any) {
    super(injector);
    if(data.event){
      this.hasDataID = true;
      this.productService.getProductById(data.event).subscribe((res) => {
        console.log(res);
        this.itemSelected = res;
      });
    }
  }


  onHandleAtualizar(item?: Product){
    if(item){
      this.productService.updateProduct(item.id!, 12).subscribe(() => {
        next: () => {
          this.poNotificationService.success({message: 'Produto atualizado com sucesso!'});
          }
      });
    }
  }

  onHandleCancelar(){
    this.poNotificationService.warning({message: 'Operação cancelada!'});
  }

  instanciaProduto(): Product{
    return<Product>{
      title: "",
      photo: "",
      category: "",
      price: 0,
      available: 0,
    };
  }
}
