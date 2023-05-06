import { style } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product, Cart, ProductCarts, ProductPrice, Products, CardInfo } from './products.model';

@Injectable()
export class ProductService  {
 private url = "https://seftclean-default-rtdb.firebaseio.com/"
  constructor(
    private http:HttpClient) { }

getProducts( cId:number):Observable<Product[]>{
  return this.http
          .get<Product[]>(this.url+ "product.json")
          .pipe(
            map(data=>{
              const product :Product[]=[]

              for (let key in data) {
                if(cId){
                    if(cId==data[key].categoryId){
                      product.push({ ...data[key], categoryId: key });
                    }
                }else {

                  const categoryId = "-NOLUWExFTxO8_8XfOAP"
                  if(categoryId==data[key].categoryId){

                    product.push({ ...data[key], id: key });
                  }

                }

              }
              return product;
            })
          )
}

createProduct(product: Product): Observable<Product> {
  return this.http.post<Product>(this.url+ "product.json", product);
}

getProductList():Observable<Products[]>{
  return this.http
      .get<Products[]>(this.url+ "list.json")
      .pipe(
        map(data=>{
          const product :Products[]=[]
          for(let key in data){
            product.push({...data[key] , id:key})
          }
          return product
        })
      )
}



getProductPrice():Observable<ProductPrice[]>{
  return this.http
  .get<ProductPrice[]>(this.url+ "productprice.json")
  .pipe(
    map(
      data=>{
        const product:ProductPrice[]=[]
        for(const key in data) {
          product.push({ ...data[key], id: key });
        }

        return product
      }
    )
  )
}

getProductsCarts():Observable<ProductCarts[]>{
  return this.http
  .get<ProductCarts[]>(this.url + "productcart.json")
  .pipe(
    map(data=>{
      const product :ProductCarts[]=[]
      for(let key in data){
        product.push({...data[key] , id:key})
      }
      return product
    })
    )
}

  getCarts():Observable<Cart[]>{
    return this.http
                  .get<Cart[]>(this.url +"cart.json")
                  .pipe(
                    map(
                      data=>{
                        const product:Cart[]=[];
                          for(let key in data){
                         product.push({...data[key] , id:key})
                          }


                        return product;
                      }
                    )
                  )
  }


  getProductCategory(Id:number):Observable<CardInfo[]>{
   return this.http
                  .get<CardInfo[]>(this.url +"cardinfo.json")
                  .pipe( map(
                      data=>{
                        const products:CardInfo[]=[];
                        for (let key in data) {
                          if(Id){
                              if(Id==data[key].categoryId){
                                products.push({ ...data[key], categoryId: key });
                              }
                          }else{

                                const category ="-NOOvNMd2z7ChQI0QIM2"
                                if(category==data[key].categoryId){
                                  products.push({ ...data[key], categoryId: key });
                                }

                          }

                        }
                        return products
                      })
                  )
  }


}
