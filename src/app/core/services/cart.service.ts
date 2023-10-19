import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  baseUrl:string='https://ecommerce.routemisr.com/api/v1/';
  

  constructor(private _HttpClient:HttpClient) { }


  cartNumber:BehaviorSubject <number> = new BehaviorSubject(0)



  addToCart(prodId:string):Observable<any>{
    return this._HttpClient.post(this.baseUrl +"cart" ,
    {
      productId:prodId

    }
    )
  }


  getUserCart():Observable<any>{
    return this._HttpClient.get(this.baseUrl +"cart")

  }

  removeFromCart(prodId:string):Observable<any>{
    return this._HttpClient.delete(this.baseUrl +`cart/${prodId}`
    )
  }


    updateCartCount(prodId:string,count:Number):Observable<any>{
    return this._HttpClient.put(this.baseUrl +`cart/${prodId}` ,
    {
      count:count

    }
    )
  }


  checkOut(prodId:string|null,prodInfo:object):Observable<any>{
    return this._HttpClient.post(this.baseUrl+`orders/checkout-session/${prodId}?url=http://localhost:4200`,
    {
      
        shippingAddress:prodInfo
   

    }
    )
  }



}
