import { faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // menus = ['SMARTPHONES', 'ELECTRONICS & APPLIANCES', 'MOBILE ACCESSORIES', 'COMPUTER & ACCESSORIES', 'LIFESTYLE'];
  smartphones = [
    'Samsung',
    'Iphone',
    'Realme',
    'Xiomi',
    'Vivo',
    'OPPO',
    'Infinix',
    'OnePlus',
    'Techno',
    'Motorola',
    'Nokia'
  ]

  HomeAppliances = [
    'Televisions',
    'Air Conditioner',
    'Refrigerator & Fridge',
    'Geyser/Room Heater',
    'Iron',
    'Air Purifier',
    'Washing Machine',
    'BOSCH Home Appliances',
    'Home Theatre & Sound System'
  ]

  KitchenAppliances = [
    'Glinder & Blender',
    'Water Filter & Purifier',
    'Microwave Oven',
    'Kettle',
    'Rice Cooker',
    'Cooking Stove',
    'Kichen Hood',
    'Others'
  ]

  // MobileAccessories = [
  //   'Smart Watch',
  //   'True Wireless Earbuds',
  //   'Bluetooth Headphone',
  //   'Wired Headphone',
  //   'Portable Speaker',
  //   'Apple Accessories',
  //   'Power Bank',
  //   'JBL Accessories',
  //   'Smart Band',
  //   'Gimbal',
  //   'Charger',
  //   'Adapter',
  //   'Data Cables',
  //   'Memory Card',
  //   'Action Camera',
  //   'Back Cover',
  //   'Screen Protector',
  //   'Selfie Stick',
  //   'Other Accessories'
  // ]

  MobileAccessories1 = [
    'Smart Watch',
    'True Wireless Earbuds',
    'Bluetooth Headphone',
    'Wired Headphone',
    'Portable Speaker',
    'Apple Accessories',
    'Power Bank',
    'JBL Accessories',
    'Smart Band',
    'Gimbal'
  ]

  MobileAccessories2 = [
    'Charger',
    'Adapter',
    'Data Cables',
    'Memory Card',
    'Action Camera',
    'Back Cover',
    'Screen Protector',
    'Selfie Stick',
    'Other Accessories'
  ]

  faMagnifyingGlass = faMagnifyingGlass;
  faShoppingCart = faCartShopping;

  responsive:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.responsive =! this.responsive;
  }

}
