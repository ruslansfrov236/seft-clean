import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category, Product } from '../products.model';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  providers:[CategoryService]
})


export class CategoryComponent implements OnInit {

  display:Product[]
  categories: Category[]=[];
  selectedCategory: Category | null;

  url = "https://seftclean-default-rtdb.firebaseio.com/"
  constructor(private categoryService:CategoryService){

  }


  ngOnInit(): void {
    this.categoryService.getCategory().subscribe(
      data=>{
        this.categories=data
      }
    )
  }
  selectCategory(category: Category) {
    if(category) {
      this.selectedCategory = category;

    }
  }
}
