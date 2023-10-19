import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/services/gaurd/auth.guard';

const routes: Routes = [

{path:'', canActivate:[authGuard],loadComponent:()=>import('./layouts/blank-layout/blank-layout.component').then((m)=> m.BlankLayoutComponent),
  children:[
    // {path:"",redirectTo:"home",pathMatch:"full"},
    {path:'home',loadComponent:()=>import('./components/home/home.component').then((m)=>m.HomeComponent),title:'Home'},
    {path:'cart',loadComponent:()=>import('./components/cart/cart.component').then((m)=>m.CartComponent),title:'Cart'},
    {path:'categories',loadComponent:()=>import('./components/categories/categories.component').then((m)=>m.CategoriesComponent),title:'Categories'},
    {path:'wishlist',loadComponent:()=>import('./components/wish-list/wish-list.component').then((m)=>m.WishListComponent),title:'wish List'},
    {path:'brands',loadComponent:()=>import('./components/barnds/barnds.component').then((m)=>m.BarndsComponent),title:'Brands'},
    {path:'allorders',loadComponent:()=>import('./components/all-orders/all-orders.component').then((m)=>m.AllOrdersComponent),title:'All Orders'},
    {path:'products',loadComponent:()=>import('./components/products/products.component').then((m)=>m.ProductsComponent),title:'Products'},
    {path:'payment/:id',loadComponent:()=>import('./components/payment/payment.component').then((m)=>m.PaymentComponent),title:'Payment'},
    {path:'Productdetalis/:id',loadComponent:()=>import('./components/product-detalis/product-detalis.component').then((m)=>m.ProductDetalisComponent),title:'Product Detalis'},
  ]
},

{path:'',loadComponent:()=>import('./layouts/auth-layout/auth-layout.component').then((m)=> m.AuthLayoutComponent),
children:[
  {path:"",redirectTo:'login',pathMatch:'full'},
  {path:'login',loadComponent:()=>import('./components/login/login.component').then((m)=>m.LoginComponent),title:'LogIn'},
  {path:'signup',loadComponent:()=>import('./components/signup/signup.component').then((m)=>m.SignupComponent),title:'SignUp'}

]
},
{path:'**',loadComponent:()=>import('./components/not-found/not-found.component').then((m)=>m.NotFoundComponent),title:'Not Found page 404'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
