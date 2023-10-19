import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { GetProductsService } from 'src/app/core/services/get-products.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishListService } from 'src/app/core/services/wish-list.service';

@Component({
  selector: 'app-product-detalis',
  standalone: true,
  imports: [CommonModule,CarouselModule],
  templateUrl: './product-detalis.component.html',
  styleUrls: ['./product-detalis.component.scss']
})
export class ProductDetalisComponent implements OnInit {

  productId!:string|null;


  constructor(private _ActivatedRoute:ActivatedRoute, private _GetProductsService:GetProductsService ,private _CartService:CartService,private _ToastrService:ToastrService,private _WishListService:WishListService){}

  productData:any=null;


  ngOnInit(): void {
    
    this._ActivatedRoute.paramMap.subscribe({
      next:(parm)=>{
       this.productId=parm.get("id");
      },
      error:(err)=>{
        console.log(err);
        

      }
    })



    this._GetProductsService.get_product_detalis(this.productId).subscribe({
      next:({data})=>{
        this.productData=data;
       
        
       
        
        

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
  addProductToWishList(prodId:any){
    this._WishListService.addToWish(prodId).subscribe({
      next:(responce)=>{
        this._ToastrService.success(responce.message)
        this._WishListService.wishNumber.next(responce.data.length)
        
      
        
      }
    })

  }




  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
  }

}
