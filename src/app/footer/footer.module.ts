import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CarouselComponent } from './carousel/carousel.component';
import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule } from '@angular/forms';
import { FooterService } from "./footer.service";

@NgModule({
  declarations:[

    CarouselComponent
  ],
  imports:[CommonModule , FormsModule ,  RouterModule,FormsModule, CarouselModule],
  exports:[CarouselComponent],
  providers:[FooterService]
})
export class FooterModule{

}
