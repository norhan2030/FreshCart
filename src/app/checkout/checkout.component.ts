import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from '../cart.service';
// FormControl
// FormGroup

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
//6601f3aa1d80b300349056a3
export class CheckoutComponent {
  constructor(private _CartService:CartService){}
  shippingaddress:FormGroup=new FormGroup({
    details:new FormControl(null),
    phone:new FormControl(null),
    city:new FormControl(null),

  })
  navegateToStripePage(url:string){
    window.location.href=url;
  }
  stripeUrl:string=""
  handelchecksubmit(shippingaddress:FormGroup){
    this._CartService.onlinepayment(shippingaddress.value,"6601f3aa1d80b300349056a3").subscribe({
      next:(res:any)=>{
        this.navegateToStripePage(res.session.url);
        console.log(res.session.url)}
    })
  }

}
