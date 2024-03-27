import { Component } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _AuthService:AuthService,private _Router:Router){
    if(localStorage.getItem("userToken") !==null){
      _Router.navigate(["/home"])
    }
  }
  isLoading:boolean=false;
  apiError:string='';
  loginForm:FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.required , Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{5,10}/)]),
  });
  handleLogin(loginForm:FormGroup){
    this.isLoading=true;
    if(loginForm.valid)
    {
      this._AuthService.login(loginForm.value).subscribe({
        next:(res)=>{
          if(res.message ==='success'){
            localStorage.setItem("userToken",res.token);
            this._AuthService.decodedUserData();
            this.isLoading=false;
            this._Router.navigate(['home'])
          }
        },
        error:(err)=>{
          this.isLoading=false;
          this.apiError=err.error.errors.msg;
        
      }
      })
    }
  }

}
