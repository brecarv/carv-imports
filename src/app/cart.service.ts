import { Injectable } from '@angular/core';
import { ICartItem } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: ICartItem[] = [];

  constructor() {}

  getCart() {
    return JSON.parse(localStorage.getItem('cart') || '');
  }

  addToCart(product: ICartItem) {
    this.items.push(product);
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  clearCart() {
    this.items = [];
    localStorage.clear();
  }
}
