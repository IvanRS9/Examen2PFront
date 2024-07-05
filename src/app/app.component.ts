import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsModule } from './products/products.module';
import { LayoutModule } from './layout/layout.module';
import { HomeModule } from './home/home.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductsModule, LayoutModule, HomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Examen2PFront';
}
