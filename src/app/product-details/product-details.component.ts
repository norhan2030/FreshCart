import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  productId:any;
  productDetails:any;
constructor(private _ActivatedRoute:ActivatedRoute,private _ProductsService:ProductsService){}
ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe((prams)=>{
    this.productId=prams.get('id')
  })

  this._ProductsService.getProductDetails(this.productId).subscribe({
    next:(res)=>this.productDetails=res.data,
  })
}
}
