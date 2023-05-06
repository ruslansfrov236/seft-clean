import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Category, CategoryList } from './products.model';

@Injectable()
export class CategoryService  {
  private url = "https://seftclean-default-rtdb.firebaseio.com/"
  constructor(private http:HttpClient) {}




    getCategory(): Observable<Category[]> {
      return this.http.get<Category[]>(this.url + "category.json")
        .pipe(
          map(data => {
            const categories: Category[] = []

            for (const key in data) {

                categories.push({ ...data[key], id: key })
              }

            return categories
          })
        );
    }

    getCategoryList():Observable<CategoryList[]>{
      return this.http
                .get<CategoryList[]>(this.url+ "categorylist.json")
                .pipe(
                  map(data=>{
                    const categories:CategoryList[]=[];

                    for (const key in data) {

                      categories.push({ ...data[key], id: key })
                    }
                    return  categories
                  })
                )
    }
  }



