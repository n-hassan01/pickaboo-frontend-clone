import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductComponent } from './components/product/product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import { ProductCartComponent } from './components/product-cart/product-cart.component';
import { SwiperComponent } from './components/swiper/swiper.component';
import { SwiperModule } from 'swiper/angular';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToggleDirective } from './components/product-cart/directives/toggle.directive';
import { NgxImageZoomModule } from 'ngx-image-zoom';

const appRoute: Routes = [
  {path:'', redirectTo: 'Home', pathMatch: 'full'},
  {path:'Product', component: ProductCartComponent},
  // {path:'Home', component: SwiperComponent},
  {path:'Home', component: ProductComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductComponent,
    ProductCartComponent,
    SwiperComponent,
    ToolbarComponent,
    ToggleDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    SwiperModule,
    MatToolbarModule,
    FontAwesomeModule,
    MatRadioModule,
    MatButtonModule,
    MatTabsModule,
    RouterModule.forRoot(appRoute),
    CarouselModule,
    NgxImageZoomModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
