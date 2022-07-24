import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/products.service';
import { ICartItem, IProduct } from 'src/app/products';
import { NotificationService } from 'src/app/notification.service';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct | undefined;
  quantity = 1;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private notificationService: NotificationService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productId = Number(routeParams.get('id'));
    this.product = this.productsService.getOne(productId);
  }

  addToCart() {
    this.notificationService.notify('O produto foi adicionado ao carrinho.');
    const product: ICartItem = {
      ...this.product!,
      quantity: this.quantity,
    };
    this.cartService.addToCart(product);
  }
}
