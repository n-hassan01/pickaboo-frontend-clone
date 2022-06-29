import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {

  options: string[] = ['None', 'Screen replacement + ৳300', 'Full coverage including theft/lost + ৳600']

  constructor() { }

  ngOnInit(): void {
  }

}
