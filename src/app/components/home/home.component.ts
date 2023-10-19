import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetProductsService } from 'src/app/core/services/get-products.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishListService } from 'src/app/core/services/wish-list.service';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,CarouselModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  catgHome:any[]=[];
  branHome:any[]=[];
  prodHome:any[]=[];
  productsWish:string[]=[]


  constructor(private _GetProductsService:GetProductsService ,private _CartService:CartService,private _ToastrService:ToastrService ,private _WishListService:WishListService){}

  ngOnInit(): void {

    this._GetProductsService.get_products().subscribe({
      next:(responce)=>{
     this.prodHome=responce.data.slice(0,16);
    
     
      },
      error:(err)=>{
        console.log(err);
      }
    })

    
    this._GetProductsService.get_categories().subscribe({
      next:(responce)=>{
        this.catgHome=responce.data ;
      },
      error:(err)=>{
        console.log(err);
      }})

    this._GetProductsService.get_brands().subscribe({
      next:(responce)=>{
        this.branHome=responce.data.slice(0,18);
      },
      error:(err)=>{
        console.log(err);
      }
    })


    this._WishListService.getUserWishList().subscribe({
      next:(responce)=>{
        const newData= responce.data.map((item:any)=>item._id); 
        this.productsWish=newData;
      
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
        this.productsWish=responce.data;
        this._ToastrService.success(responce.message)
        this._WishListService.wishNumber.next(responce.data.length)
      
        
      }
    })

  }

  removeItem(id:any){
    this._WishListService.removeFromWish(id).subscribe({
      next:(responce)=>{
        this.productsWish=responce.data;
        this._ToastrService.error(responce.message);
        this._WishListService.wishNumber.next(responce.data.length)
   
        
        
        
        
       
       
        
        

      }
    })


  }

  customOptions_1: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay:true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
  }

  customOptions_2: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay:false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      }
    },
  }




  

}
