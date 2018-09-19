import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SwiperComponent } from './swiper/swiper.component';
import {NgProgressModule} from "ngx-progressbar";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SwiperComponent
  ],
  imports: [
    BrowserModule,
    NgProgressModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
