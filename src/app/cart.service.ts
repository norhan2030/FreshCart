import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CartService {
  headers:any={
    token:localStorage.getItem('userToken')
  }
  constructor(private _HttpClient:HttpClient) { }
  addtocart(p_id:string):Observable<any>{
    return this._HttpClient.post('https://route-ecommerce.onrender.com/api/v1/cart',
    {
      productId:p_id
    },{
      headers:this.headers
    })
    //الpost ببعالها تلات حاجات 
    //1-url اللي هنروح عليه
    //2-product id اللي هضيفه في الكارت
    //3-token عشان تتاكد ان الشخص دا عامل لوجين و تدخل البرودكت في الكارت بتاعته عشان كل يوزر ليه كارت واحده
  }
  getloggedusercart():Observable<any>{
    return this._HttpClient.get('https://route-ecommerce.onrender.com/api/v1/cart',
   {
      headers:this.headers
    })
  }
  removefromcard(pro_id:string):Observable<any>{
    return this._HttpClient.delete(`https://route-ecommerce.onrender.com/api/v1/cart/${pro_id}`,
   {
      headers:this.headers
    })
  }
  updatecart(pro_id:string,count:number):Observable<any>{
    return this._HttpClient.put(`https://route-ecommerce.onrender.com/api/v1/cart/${pro_id}`,
    {
      count:count
    },
   {
      headers:this.headers
    })
  }
  onlinepayment(shippingAddresss:any,cartid:string){
    return this._HttpClient.post(`https://route-ecommerce.onrender.com/api/v1/orders/checkout-session/${cartid}?url=http://localhost:4200`,
   {
    shippingAddress:shippingAddresss
   },
    {
      headers:this.headers
    })
  }
}
// 6601f3aa1d80b300349056a3   كارت id
//shippingAddress   معلومات الفورم التلفون و العنوان و الاسم