import { Component, Injector } from '@angular/core';
import { ComponentBase } from 'src/app/shared/components/component.base';
import { Product } from 'src/app/shared/models/product.model';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent extends ComponentBase{

  itens!: Product[];

  itemSelected: Product | undefined = <Product>({
    title: "",
    photo: "",
    category: "",
    price: 0,
    available: 0,
  });
  
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
  }

  onHandleExcluir(id?: number){
    if(id){}

  }
  onHandleAtualizar(item?: Product){
    if(item){}
  }
}
