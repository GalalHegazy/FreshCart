import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetProductsService {

  constructor(private _HttpClient:HttpClient) { }

  baseUrl:string='https://ecommerce.routemisr.com/api/v1/';

  get_products(pageNum:Number =1):Observable<any>{
    return this._HttpClient.get(this.baseUrl+`products?page=${pageNum}`)
  }
  get_categories():Observable<any>{
    return this._HttpClient.get(this.baseUrl+'categories')
  }
  get_brands():Observable<any>{
    return this._HttpClient.get(this.baseUrl+'brands')
  }
  get_product_detalis(id:string|null):Observable<any>{
    return this._HttpClient.get(this.baseUrl+`products/${id}`)
  }



}
