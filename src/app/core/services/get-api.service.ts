import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(private _HttpClient:HttpClient) { }

  baseUrl:string='https://ecommerce.routemisr.com/api/v1/';

  get_products():Observable<any>{
    return this._HttpClient.get(this.baseUrl+'products')
  }



}
