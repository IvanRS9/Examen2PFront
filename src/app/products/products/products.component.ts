import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { IProducts } from '../interfaces/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  listarProductos: IProducts[] = [];
  isResultadosLoaded = false;

  constructor(private _productService: ProductsService) {
    this.obtenerProductos();
  }

  obtenerProductos() {
    this._productService.getProducts().subscribe({
      next: (products) => {
        this.listarProductos = products;
        this.isResultadosLoaded = true;
      }, error: (e) => { console.log(e) }
    });
  }

  obtenerProductosPorCategoria(categoryId: number) {
    this._productService.getProductsByCategory(categoryId).subscribe({
      next: (products) => {
        console.log(products); // Verificar que los productos filtrados se están obteniendo
        this.listarProductos = products;
        this.isResultadosLoaded = true;
      },
      error: (e) => { console.log(e); }
    });
  }
}
