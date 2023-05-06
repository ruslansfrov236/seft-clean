
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductCarts } from '../products.model';

@Component({
  selector: 'product-carts',
  templateUrl: './product-carts.component.html',
  styleUrls: ['./product-carts.component.scss'],
  providers:[ProductService]
})
export class ProductCartsComponent implements OnInit {
  products:ProductCarts[]


 constructor( private productService:ProductService){}
  ngOnInit(): void {
 this.productService.getProductsCarts().subscribe(data=>{
   this.products=data;
 })
  }

}


