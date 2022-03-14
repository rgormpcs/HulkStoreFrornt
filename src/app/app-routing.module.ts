import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyComponent } from './buy/buy.component';
import { KardexComponent } from './kardex/kardex.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {path:'buy', component:BuyComponent},
  {path:'products', component:ProductListComponent},
  {path:'kardex', component:KardexComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
