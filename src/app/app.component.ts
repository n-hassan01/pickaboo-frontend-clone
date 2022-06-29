import { ProductComponent } from './components/product/product.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pickaboo-clone';

  media: any = window.matchMedia

  ngOnInit(){
    // let fix = new ProductComponent();
    // let active = fix.bool;
  }
}
