import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CartService } from 'src/app/core/services/cart.service';


@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  productIdPayment:string|null='';

  constructor(private _ActivatedRoute:ActivatedRoute, private _CartService:CartService){}

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(parms)=>{
        this.productIdPayment=parms.get('id');
       
      }
    })
  }

  checkForm:FormGroup=new FormGroup({

    detalis: new FormControl(''),
    phone: new FormControl(''),
    city: new FormControl(''),

  })


  handelForm(){
    this._CartService.checkOut(this.productIdPayment,this.checkForm.value).subscribe({
      next:(responce)=>{
       
        
        
        if(responce.status == "success"){
          window.open(responce.session.url , '_self')

        }
        

      }
    })

  }





}
