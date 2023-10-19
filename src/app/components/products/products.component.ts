import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetProductsService } from 'src/app/core/services/get-products.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,NgxPaginationModule,RouterLink],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
  allProduct:any[]=[];
  pageSize:number=0;
  page:number=1;
  totalPage:any;

  constructor( private _GetProductsService:GetProductsService,private _CartService:CartService,private _ToastrService:ToastrService){}

  ngOnInit(): void {
    
    this._GetProductsService.get_products().subscribe({
      next:(responce)=>{
        this.allProduct=responce.data;
        this.pageSize=responce.metadata.limit
        this.page=responce.metadata.currentPage
        this.totalPage=responce.results

      },
      error:(err)=>{
        console.log(err);
        

      }
    })
  }


  pageChanged(event:any){
    this._GetProductsService.get_products(event).subscribe({
      next:(responce)=>{
        this.allProduct=responce.data;
        this.pageSize=responce.metadata.limit
        this.page=responce.metadata.currentPage
        this.totalPage=responce.results

      },
      error:(err)=>{
        console.log(err);
        

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
