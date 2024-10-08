import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { BrowserModule } from '@angular/platform-browser';
import { ProductsService } from './products.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule, HttpClientModule, NgFor, FormsModule
  ],
  exports: [
    ProductsComponent
  ],
  providers: [ProductsService]
})
export class ProductsModule { }
