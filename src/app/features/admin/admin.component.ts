import { Component, Injector, ViewChild } from '@angular/core';
import { ComponentBase } from 'src/app/shared/components/component.base';
import { Product } from 'src/app/shared/models/product.model';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent extends ComponentBase{
  @ViewChild('modal', { static: true }) modal: any;

  itens!: Product[];

  itemSelected: Product | undefined = <Product>({
    title: "",
    photo: "",
    category: "",
    price: 0,
    available: 0,
  });

  requested: number = 0;

  primaryButton = {
    label: 'Atualizar',
    icon: 'po-icon-edit',
    danger: false,
    action: () => this.onHandleAtualizar(this.itemSelected)
  };
  secondaryButton = {
    label: 'Excluir',
    icon: 'po-icon-delete',
    danger: true,
    action: () => this.onHandleExcluir(this.itemSelected?.id)
  };
  
  constructor(public override injector: Injector, 
              public productService: ProductsService){
    super(injector);
  }

  override onReceiveLiterals(): void {
  }

  override ngOnInit(){
    this.productService.getProducts().subscribe((item) => {
      this.itens = item;
    });
  }

  receberEvento(eventoFilhoId: number) {
    this.itemSelected = this.itens.find(x => x.id == eventoFilhoId);
    this.modal.open();
  }

  onHandleExcluir(id?: number){
    if(id){
      this.productService.deleteProduct(id).subscribe(() => {
        next: () => {
          this.poNotificationService.success({message: 'Produto excluído com sucesso!'});
          }
      });
    }

  }
  onHandleAtualizar(item?: Product){
    if(item){
      this.productService.updateProduct(item.id, this.requested).subscribe(() => {
        next: () => {
          this.poNotificationService.success({message: 'Produto atualizado com sucesso!'});
          }
      });
    }
  }
}
