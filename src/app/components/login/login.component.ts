import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  
  errormessage:string='';
  islouding: boolean=false;
  bgcolor:boolean=false;


  constructor(private _AuthService:AuthService , private _Router:Router){}
  

  loginForm:FormGroup= new FormGroup({
  
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern('^[A-Z][a-z][0-9]{4,8}')])
 
  })


login():void{
  const userData= this.loginForm.value

  this.islouding=true;
  this.bgcolor=true;

  if(this.loginForm.valid === true){
    this._AuthService.login(userData).subscribe({
      next:(responce)=>{
        
        console.log(responce);
        if( responce.message ==="success"){
          localStorage.setItem("userToken",responce.token);
          this._AuthService.decodeuser();
          this.islouding=false;
          this.bgcolor=false;
          this._Router.navigate(['/home'])

        }
        
      },
      error:(err)=>{ 
       
        this.islouding=false;
        this.bgcolor=false;
        
        this.errormessage=err.error.message;
        console.log(err);
        
      }
    })

  }

 

}


}
