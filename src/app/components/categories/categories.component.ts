import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetProductsService } from 'src/app/core/services/get-products.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  allcateg:any[]=[];




  constructor(private _GetProductsService:GetProductsService){}

  ngOnInit(): void {
    
    this._GetProductsService.get_categories().subscribe({
      next:(responce)=>{
        this.allcateg=responce.data
      },
      error:(err)=>{
        console.log(err);
        

      }
    })
  }

}
