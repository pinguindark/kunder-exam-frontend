import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component';
import { SharedModule } from '../app/shared/shared.module';
@NgModule({ 
    declarations: [
        HomeComponent, 
        BannerComponent
    ], 
    imports: [
        SharedModule
    ], 
    exports: [
        HomeComponent, 
        BannerComponent
    ]
})
export class ComponentsModule {}
