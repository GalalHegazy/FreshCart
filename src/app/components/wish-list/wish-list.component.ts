import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishListService } from 'src/app/core/services/wish-list.service';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-wish-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {

  productsWishData:any
  productsWish:any
 

  constructor(private _WishListService:WishListService ,private _CartService:CartService , private _ToastrService:ToastrService){}

  ngOnInit(): void {
    this._WishListService.getUserWishList().subscribe({
      next:(responce)=>{
       
        this.productsWishData=responce.data;
        this._WishListService.wishNumber.next(responce.count)
    
        
     

        
        

      }
    })

    
  }

  removeItem(id:any){
    this._WishListService.removeFromWish(id).subscribe({
      next:(responce)=>{
        this.productsWish=responce.data;
        const newdata= this.productsWishData.filter((item:any)=>this.productsWish.includes(item._id));
        this.productsWishData=newdata;
        this._WishListService.wishNumber.next(responce.data.length)
    
        

      }
    })


  }
  addProductCart(id:any){
    this._CartService.addToCart(id).subscribe({
      next:(responce)=>{
        this._ToastrService.success(responce.message)
        this._CartService.cartNumber.next(responce.numOfCartItems)
      }
    })

  }






}
