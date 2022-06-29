import { Component, OnInit } from '@angular/core';
import { faCoffee, faUnlock, faKey, faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  faCoffee = faCoffee;
  faUnlock = faUnlock;
  faKey = faKey;
  faMagnifyingGlass = faMagnifyingGlass;
  faShoppingCart = faCartShopping;

  constructor() { }

  ngOnInit(): void {
  }

}
