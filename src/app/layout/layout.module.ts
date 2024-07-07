import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { ProductsModule } from '../products/products.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    CommonModule,
    ProductsModule,
    RouterModule
  ],
  exports: [
    NavComponent
  ]
})
export class LayoutModule { }
