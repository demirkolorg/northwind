import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product1: any = {
    productId: 1,
    productName: 'bardak',
    categoryId: 2,
    unitPrice: 5,
  };
  product2: any = {
    productId: 1,
    productName: 'masa',
    categoryId: 3,
    unitPrice: 4,
  };
  product3: any = {
    productId: 1,
    productName: 'sandalye',
    categoryId: 2,
    unitPrice: 8,
  };
  product4: any = {
    productId: 1,
    productName: 'çay',
    categoryId: 1,
    unitPrice: 57,
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

  constructor() { }

  ngOnInit(): void {
  }

}
