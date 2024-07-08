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
  filteredProducts: IProducts[] = [];
  isResultadosLoaded = false;
  searchTerm: string = '';

  constructor(private _productService: ProductsService) {
    this.obtenerProductos();
  }

  obtenerProductos() {
    this._productService.getProducts().subscribe({
      next: (products) => {
        this.listarProductos = products;
        this.filteredProducts = products;
        this.isResultadosLoaded = true;
      }, error: (e) => { console.log(e) }
    });
  }

  obtenerProductosPorCategoria(categoryId: number) {
    this._productService.getProductsByCategory(categoryId).subscribe({
      next: (products) => {
        console.log(products); // Verificar que los productos filtrados se están obteniendo
        this.listarProductos = products;
        this.filterProducts();
        this.isResultadosLoaded = true;
      },
      error: (e) => { console.log(e); }
    });
  }

  filterProducts(): void {
    this.filteredProducts = this.listarProductos.filter(product =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
