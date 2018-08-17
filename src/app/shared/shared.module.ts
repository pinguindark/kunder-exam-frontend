import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from 'node_modules/@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ]
})
export class SharedModule { }
