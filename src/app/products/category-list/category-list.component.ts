import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryService } from '../category.service';
import { CategoryList } from '../products.model';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
  providers:[CategoryService]
})
export class CategoryListComponent implements OnInit {
  selectedCategories: CategoryList | null;
  categories: CategoryList[]


  constructor(private categoryService:CategoryService) {
  }
  url = "https://seftclean-default-rtdb.firebaseio.com/"

  ngOnInit(): void {
  this.categoryService.getCategoryList().subscribe(data=>{
    this.categories=data;
  })
  }
  selectCategories(categories:CategoryList){
    this.selectedCategories=categories
 }
}
