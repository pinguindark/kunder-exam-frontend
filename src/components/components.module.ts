import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component';
@NgModule({ declarations: [HomeComponent, BannerComponent], imports: [], exports: [HomeComponent, BannerComponent]})
export class ComponentsModule {}
