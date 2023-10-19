import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetProductsService } from 'src/app/core/services/get-products.service';

@Component({
  selector: 'app-barnds',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './barnds.component.html',
  styleUrls: ['./barnds.component.scss']
})
export class BarndsComponent implements OnInit {
  allbrands:any[]=[]

  constructor( private _GetProductsService:GetProductsService){}

  ngOnInit(): void {

    this._GetProductsService.get_brands().subscribe({
      next:(responce)=>{
        this.allbrands=responce.data;
      },
      error:(err)=>{
        console.log(err);
        

      }
    })
    


  }

}
