import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { CardInfo } from '../products.model';

@Component({
  selector: 'carts-info',
  templateUrl: './carts-info.component.html',
  styleUrls: ['./carts-info.component.scss']
})
export class CartsInfoComponent implements OnInit {

  url = "https://seftclean-default-rtdb.firebaseio.com/"
  products:CardInfo[]

constructor(private route:ActivatedRoute , private productService:ProductService ){}

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.productService.getProductCategory(params["categoryId"]).subscribe(data=>{
        this.products=data;
    })

})
}
}
