import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngresoComponent } from './pages/ingreso/ingreso.component';
import { ShopComponent } from './pages/shop/shop.component';


const routes: Routes = [
  { path: "shop" ,component:ShopComponent},
  { path:"ingreso",component:IngresoComponent},
  { path: '', redirectTo: 'ingreso', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
