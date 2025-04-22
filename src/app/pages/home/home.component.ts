import { Component, inject } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-home',
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {

  productos:any = [];
  productsService = inject(ProductsService);
  
  ngOnInit() {
    this.productsService.getProducts().then((data) => {
      this.productos = data;
    });
  }
}
