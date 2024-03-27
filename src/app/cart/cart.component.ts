import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
//بستخدم onint-> لما اكون عايزه انفذ الحاجة دي اول ما افتح الصفحة زي هنا انا محتاجه الفنكشن تشتغل اول ما افتح صفحة الكارت و تعرض البرودكت اللي في الكارت
export class CartComponent implements OnInit{
  carddetailsdata:any=null;
  constructor(private _CartService:CartService){}
  callremovecart(productid:string){
    this._CartService.removefromcard(productid).subscribe({
      next:(res)=>{this.carddetailsdata=res.data}
    })
  }
  callupdatecountcart(productid:string,count:number){
this._CartService.updatecart(productid,count).subscribe({
  next:(res)=>{
    this.carddetailsdata=res.data;
    console.log(res.data)
  },
  
})
  }
  ngOnInit(): void {
    this._CartService.getloggedusercart().subscribe({
      next:(res)=>this.carddetailsdata=res.data,
      error:(err)=>console.log(err)
    })
  }
}
