import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from 'src/app/core/services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  productsCart:any=null;
  


  constructor(private _CartService:CartService){}

  ngOnInit(): void {
    this._CartService.getUserCart().subscribe({
      next:(responce)=>{
       
        this.productsCart=responce.data;
        
        
        

      }
    })
  }



  removeItem(id:string){
    this._CartService.removeFromCart(id).subscribe({
      next:(responce)=>{
        this.productsCart=responce.data;
        this._CartService.cartNumber.next(responce.numOfCartItems)
        
        
       
       
        
        

      }
    })


  }

  checkCount(count:Number,id:string){

    if( count != 0 ){

      this._CartService.updateCartCount(id, count).subscribe({
        next:(responce)=>{
          this.productsCart=responce.data;
          
          
  
        }
      })

    }



  
    

  }


}
