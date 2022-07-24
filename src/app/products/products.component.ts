import { Component, OnInit } from '@angular/core';
import { IProduto, produtos } from '../produtos';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  produtos: IProduto[] = produtos;

  constructor() {}

  ngOnInit(): void {}
}
