import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NavComponent } from './nav/nav.component';
import { BuyComponent } from './buy/buy.component';
import { KardexComponent } from './kardex/kardex.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    NavComponent,
    BuyComponent,
    KardexComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
