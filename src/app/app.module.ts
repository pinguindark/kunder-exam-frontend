import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from '../components/home/home.component';
import { BannerComponent } from '../components/banner/banner.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
		CoreModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
