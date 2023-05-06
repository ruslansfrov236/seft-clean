import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { ProductService } from '../product.service';
import { ProductList, ProductPrice, Products } from '../products.model';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers:[ProductService]
})
export class ProductListComponent implements OnInit {
 private url = "https://seftclean-default-rtdb.firebaseio.com/"
  product: Products[]=[];


  products: ProductPrice[]=[];

  constructor(private productService: ProductService , private http:HttpClient ) {
  }

  ngOnInit(): void {




    this.productService.getProductList().subscribe(result => {
      this.product=result;
      });

      this.productService.getProductPrice().subscribe(result => {
       this.products=result
    });





  }


}
