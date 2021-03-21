import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {HeaderComponent} from './header/header.component'
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { WomenComponent } from './women/women.component';
import { MenComponent } from './men/men.component';
import {CarouselComponent} from './carousel/carousel.component'
import { Product1Component } from './product1/product1.component';
import { CartComponent } from './cart/cart.component';
import { MencontentComponent } from './mencontent/mencontent.component';
import { Product2Component } from './product2/product2.component';
import { SuccessComponent } from './success/success.component';
import { SignupnextComponent } from './signupnext/signupnext.component';
import { LoginnextComponent } from './loginnext/loginnext.component';

const routes: Routes = [
{
  path: 'signup',
  component: SignupComponent
},
{
  path: 'product1',
  component: Product1Component
},
{
  path: 'cart',
  component: CartComponent
},
{  
  path:'login',
  component:LoginComponent
  },
{
  path: 'landing',
  component: LandingComponent
},
{
  path: 'databinding',
  component: DatabindingComponent
},
{
  path: 'header',
  component: HeaderComponent
},
{
  path: 'footer',
  component: FooterComponent
},
{
  path: 'profile',
  component: ProfileComponent
},
{
  path: 'women',
  component: WomenComponent
},
{
  path: 'men',
  component: MenComponent
},
{  
  path:'carousel',
  component:CarouselComponent
  },
{
  path:'mencontent',
  component:MencontentComponent
},  
{
  path:'',
  redirectTo : '/landing',
  pathMatch: 'full'
},
{
  path:'product/:id',
  component:Product1Component
},
{
  path:'womenproduct/:id',
  component:Product2Component
},
{ path: 'cart', 
component: CartComponent },
{path:'success',
component:SuccessComponent},
{path:'signupsuccess',
component:SignupnextComponent},
{path:'loginsuccess',
component:LoginnextComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }