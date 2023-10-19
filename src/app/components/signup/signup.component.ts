import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormControlOptions, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,RouterLink,ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  
  errormessage:string='';
  islouding: boolean=false;
  bgcolor:boolean=false;


  constructor(private _AuthService:AuthService , private _Router:Router){}
  

  signUpForm:FormGroup= new FormGroup({
  
    name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern('^[A-Z][a-z][0-9]{4,8}')]),
    rePassword:new FormControl(''),
    phone:new FormControl('',[Validators.required,Validators.pattern("^01[0125][0-9]{8}")]),
  } ,{validators:[this.conf_pass] } as FormControlOptions  )


conf_pass(group:FormGroup){
    const password=group.get("password");
    const rePassword=group.get("rePassword");
    if( rePassword?.value == ""){

      rePassword?.setErrors({required:true});


    }else if(rePassword?.value!= password?.value){

      rePassword?.setErrors({mismatch:true});
    }
}





signup():void{
  const userData= this.signUpForm.value
  this.islouding=true;
  this.bgcolor=true;

  if(this.signUpForm.valid === true){
    this._AuthService.signup(userData).subscribe({
      next:(responce)=>{
        
        console.log(responce);
        if( responce.message ==="success"){
          this.islouding=false;
          this._Router.navigate(['/login'])

        }
        
      },
      error:(err)=>{ 
       
        this.islouding=false;
        
        this.errormessage=err.error.message;
        console.log(err);
        
      }
    })

  }

 

}





}
