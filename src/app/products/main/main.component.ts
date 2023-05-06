import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../products.model';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [ProductService]
})


export class MainComponent implements OnInit {

  products: Product[] = [];

  constructor(private route: ActivatedRoute,
    private productService: ProductService) { }


  ngOnInit(): void {


    this.route.params.subscribe(params => {
      this.productService.getProducts(params["categoryId"]).subscribe(data=>{
        this.products=data;
      });

    });

  }

}
