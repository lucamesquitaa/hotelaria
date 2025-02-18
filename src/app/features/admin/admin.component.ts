import { Component, inject, Injector, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ComponentBase } from 'src/app/shared/components/component.base';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { Product } from 'src/app/shared/models/product.model';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent extends ComponentBase{
  readonly dialog = inject(MatDialog);

  openDialog(event?: any): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: event ? { event } : {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  itens!: Product[];

  isAuthenticated: boolean = false;
  requested: number = 0;

  constructor(public override injector: Injector,
              public productService: ProductsService){
    super(injector);
  }

  override onReceiveLiterals(): void {
  }

  override ngOnInit(){
    this.productService.getProducts().subscribe((item) => {
      this.itens = item;
      console.log(this.itens);
    });
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
}
