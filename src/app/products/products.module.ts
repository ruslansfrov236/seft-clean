import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { CategoryComponent } from './category/category.component';
import { InfoComponent } from './info/info.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { ProductCartsComponent } from './product-carts/product-carts.component';
import { FormsModule } from "@angular/forms";
import { ProductListComponent } from './product-list/product-list.component';
import { CartsInfoComponent } from './carts-info/carts-info.component';
import { HttpClientModule } from "@angular/common/http";


const routes: Routes = [
  {
    path: "products",
    children: [
      { path: 'categories/:cId', component: MainComponent },
      { path: 'card/:Id', component: MainComponent },


      { path: '', component: MainComponent },


    ]
  }

]

@NgModule({
  declarations: [MainComponent, CategoryComponent, InfoComponent, CategoryListComponent, ProductCartComponent, ProductCartsComponent, ProductListComponent, CartsInfoComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forChild(routes),
    RouterModule.forRoot(routes),
    FormsModule
  ],
  exports: [MainComponent, CategoryComponent, InfoComponent, CategoryListComponent, ProductCartComponent, ProductCartsComponent, ProductListComponent],
})

export class ProductModule {

}
