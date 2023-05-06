import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Cart } from '../products.model';

@Component({
  selector: 'product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss'],
  providers:[ProductService]
})
export class ProductCartComponent implements OnInit {

   products:Cart[];
   constructor(  private productService :ProductService){}
  ngOnInit(): void {


    this.productService.getCarts().subscribe(data=>{
      this.products=data
    })
 }
  }



