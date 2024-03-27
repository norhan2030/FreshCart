import { Component } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private _AuthService:AuthService,private _Router:Router){
    if(localStorage.getItem("userToken") !==null){
      _Router.navigate(["/home"])
    }
  }
  isLoading:boolean=false;
  apiError:string='';
  registerForm:FormGroup=new FormGroup({
    name:new FormControl(null,[Validators.required,Validators.minLength(3)]),
    email:new FormControl(null,[Validators.required , Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{5,10}/)]),
    rePassword:new FormControl(null,[Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{5,10}/)]),
    phone:new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
  });
  handleRegister(registerForm:FormGroup){
    this.isLoading=true;
    if(registerForm.valid)
    {
      this._AuthService.register(registerForm.value).subscribe({
        next:(res)=>{
          if(res.message ==='success'){
            this.isLoading=false;
            this._Router.navigate(['login'])
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
