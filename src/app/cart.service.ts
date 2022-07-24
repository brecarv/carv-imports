import { Injectable } from '@angular/core';
import { ICartItem } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: ICartItem[] = [];

  constructor() {}

  getCart() {
    this.items = JSON.parse(localStorage.getItem('cart') || '[]');
    return this.items;
  }

  addToCart(product: ICartItem) {
    this.items.push(product);
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  clearCart() {
    this.items = [];
    localStorage.clear();
  }

  removeItemFromCart(productId: number) {
    this.items = this.items.filter((item) => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(this.items));
  }
}
