import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishListService  {

  baseUrl:string='https://ecommerce.routemisr.com/api/v1/';

  constructor(private _HttpClient:HttpClient) { }

  wishNumber:BehaviorSubject <number> = new BehaviorSubject(0)

 


  addToWish(prodId:any):Observable<any>{
    return this._HttpClient.post(this.baseUrl +"wishlist" ,
    {
      productId:prodId

    }
    )
  }

  getUserWishList():Observable<any>{
    return this._HttpClient.get(this.baseUrl +"wishlist")
  }

  removeFromWish(prodId:any):Observable<any>{
    return this._HttpClient.delete(this.baseUrl +`wishlist/${prodId}`
    )
  }







}
