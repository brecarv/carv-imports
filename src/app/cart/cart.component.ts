import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { ICartItem } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: ICartItem[] = [];
  totalValue: number = 0;

  constructor(public cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart();
    this.calculateTotalValue();
  }

  calculateTotalValue() {
    this.totalValue = this.cartItems.reduce(
      (prev, curr) => prev + curr.price * curr.quantity,
      0
    );
  }

  removeItemFromCartUI(productId: number) {
    this.cartItems = this.cartItems.filter((item) => item.id !== productId);
    this.cartService.removeItemFromCart(productId);
    this.calculateTotalValue();
  }

  buyCart() {
    alert('Parabéns, você finalizou sua compra!');
    this.cartService.clearCart();
    this.router.navigate(['produtos']);
  }
}
