import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  userInfo:any;

  constructor(private _HttpClient:HttpClient) { }





  signup(formdata:object):Observable<any>{
    return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signup", formdata)
  }


  login(formdata:object):Observable<any>{
    return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signin", formdata)
  }


  decodeuser():void{

    const encoded=localStorage.getItem("userToken");

    if(encoded != null){

      this.userInfo= jwtDecode(encoded);
   
     
    }
    
  }








}
