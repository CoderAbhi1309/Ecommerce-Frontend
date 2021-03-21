import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MencontentComponent } from './mencontent/mencontent.component';
import { WomencontentComponent } from './womencontent/womencontent.component';
import { CartComponent } from './cart/cart.component';
import { Product1Component } from './product1/product1.component';
import { BestsellerComponent } from './bestseller/bestseller.component';
import { BestsellercontentComponent } from './bestsellercontent/bestsellercontent.component';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';
import { RouterModule } from '@angular/router';
import { Product2Component } from './product2/product2.component';
import { SuccessComponent } from './success/success.component';
import { LoginnextComponent } from './loginnext/loginnext.component';
import { SignupnextComponent } from './signupnext/signupnext.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    LoginComponent,
    SignupComponent,
    LandingComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    MenComponent,
    WomenComponent,
    CarouselComponent,
    MencontentComponent,
    WomencontentComponent,
    CartComponent,
    Product1Component,
    BestsellerComponent,
    BestsellercontentComponent,
    OrderhistoryComponent,
    Product2Component,
    SuccessComponent,
    LoginnextComponent,
    SignupnextComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }