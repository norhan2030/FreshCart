import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { BrandsComponent } from './brands/brands.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {path:'',redirectTo:"home",pathMatch:'full'},
  {path:'home',canActivate:[AuthGuard],component:HomeComponent},
  {path:'cart',canActivate:[AuthGuard],component:CartComponent},
  {path:'checkout',canActivate:[AuthGuard],component:CheckoutComponent},
  {path:'categories',canActivate:[AuthGuard],component:CategoriesComponent},
  {path:'brands',canActivate:[AuthGuard],component:BrandsComponent},
  {path:'products',canActivate:[AuthGuard],component:ProductsComponent},
  {path:'productdetails/:id',canActivate:[AuthGuard],component:ProductDetailsComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'settings',loadChildren:() => import('./settings/settings.module').then((m)=>m.SettingsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
