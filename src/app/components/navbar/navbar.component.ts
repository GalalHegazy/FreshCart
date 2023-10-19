import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { WishListService } from 'src/app/core/services/wish-list.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterLinkActive,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  numberOfCart:Number=0;
  numberOfWish:Number=0;



  constructor(private _Router:Router ,private _CartService:CartService,private _WishListService:WishListService){}

  ngOnInit(): void {
    
    this._CartService.cartNumber.subscribe({
      next:(data)=>{
        this.numberOfCart=data
      }
    })

    this._WishListService.wishNumber.subscribe({
      next:(data)=>{
        this.numberOfWish=data;
      }
    })


    this._CartService.getUserCart().subscribe({
      next:(responce)=>{
        this.numberOfCart=responce.numOfCartItems
        
        
      }
    })
    this._WishListService.getUserWishList().subscribe({
      next:(responce)=>{
        this.numberOfWish=responce.count
        
        
      }
    })
  }

  


  logOut(){
    localStorage.removeItem("userToken");
    this._Router.navigate(["/login"]);



  }

}
