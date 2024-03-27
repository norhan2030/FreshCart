import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';

ActivatedRoute
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit{
  // productId:any;
  // productDetails:any;
  products:any[]=[];
  searchTerm:string=''
constructor(private _ProductsService:ProductsService,private _CartService:CartService){}
calladdtocart(productid:string){
  this._CartService.addtocart(productid).subscribe({
    next:(res)=>console.log(res),
    error:(err)=>console.log(err)  
})
}
ngOnInit():void{
  this._ProductsService.getProducts().subscribe({
    next:(res)=>this.products=res.data,
  })
}
// constructor(private _ActivatedRoute:ActivatedRoute,private _ProductsService:ProductsService){}

// ngOnInit(): void {
//   this._ActivatedRoute.paramMap.subscribe((prams)=>{
//     this.productId=prams.get('id')
//   })
//   this._ProductsService.getProductDetails(this.productId).subscribe({
//     next:(res)=>this.productDetails=res.data,
//   })
  
// }
}
