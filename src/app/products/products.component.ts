import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { IProduct } from 'src/app/products';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: IProduct[] | undefined;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const products = this.productsService.getAll();
    this.route.queryParamMap.subscribe((params) => {
      const description = params.get('description')?.toLowerCase();
      if (description) {
        this.products = products.filter((product) =>
          product.description.toLowerCase().includes(description)
        );
        return;
      }

      this.products = products;
    });
  }
}
