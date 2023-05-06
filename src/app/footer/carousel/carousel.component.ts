import { Component, OnInit } from '@angular/core';
import { Slider } from '../footer.modul';
import { FooterService } from '../footer.service';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers:[FooterService]

})
export class CarouselComponent implements OnInit{
  slider:Slider[]=[];
  constructor(private footerService:FooterService){}
  ngOnInit(): void {
   this.footerService.getSlider().subscribe(data=>{
    this.slider=data;
   });
  }


  carouselOptions:any = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    },
 };
}
