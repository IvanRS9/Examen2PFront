import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsModule } from './products/products.module';
import { LayoutModule } from './layout/layout.module';
import { HomeModule } from './home/home.module';
import { ContactModule } from './contact/contact.module';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductsModule, LayoutModule, HomeModule, ContactModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Examen2PFront';
}
