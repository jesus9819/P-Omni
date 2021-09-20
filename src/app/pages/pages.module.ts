import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop/shop.component';
import { MenuComponent } from './shop/menu/menu.component';
import { ProductComponent } from './shop/product/product.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ShopComponent, MenuComponent, ProductComponent, IngresoComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[

  ]
})
export class PagesModule { }
