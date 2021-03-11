import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'northwind';
  user: string = 'Apolas';
  product1: any = {
    productId: 1,
    productName: 'bardak',
    categoryId: 2,
    unitPrice: 5,
  };
  product2: any = {
    productId: 1,
    productName: 'masa',
    categoryId: 2,
    unitPrice: 5,
  };
  product3: any = {
    productId: 1,
    productName: 'sandalye',
    categoryId: 2,
    unitPrice: 5,
  };
  product4: any = {
    productId: 1,
    productName: 'çay',
    categoryId: 2,
    unitPrice: 5,
  };
  product5: any = {
    productId: 1,
    productName: 'demlik',
    categoryId: 2,
    unitPrice: 5,
  };
  products = [
    this.product1,
    this.product2,
    this.product3,
    this.product4,
    this.product5,
  ];
}
