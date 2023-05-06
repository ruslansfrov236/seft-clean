export interface Product {
  id: string;
  name: string;
  ImageUrl: string;
  isActive: boolean;
  categoryId: any;

}
export interface Products{
  id:any,
  name: string;
  title:string;
  description:string;
  btntext:string;
  btntext2:string;
  ImageUrl: string;

}

export interface Cart{
  id: any;
  name: string;
  title:string
  ImageUrl: string;
  ImageUrls: string;
}
export interface ProductCarts{
  id: any;
  name: string;
  title:string
  ImageUrl: string;
  ImageUrls?: string;
}
export interface ProductList{
  id: any;
  name: string;
  ImageUrl: string;

}

export interface CardInfo{
  id:any;
  ImageUrl: string;
  categoryId:any
}

export interface  ProductPrice{
  id: any;
  name: string;
  price:any;
  ImageUrl: string;
}

export interface Category {
  id:any ;
  name:string
}

export interface CategoryList{
  id:any ;
  name:string
}


