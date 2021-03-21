import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit {

  arraymen = [];  
  // arraymen=[{
  //       content: 'Price: 1299',
  //       title: 'Formal shirt',
  //       imagesource: 'img/Womenshopping.jpeg'
  //     },{
  //       content: 'Price: 999',
  //       title: 'Formal shirt',
  //       imagesource: "C:/Users/ABHISHEK/Downloads/FRONTEND/FRONTEND/Womenshopping.jpeg"
  //     },{
  //       content: 'Price: 1199',
  //       title: 'Formal shirt',
  //       imagesource: ''
  //     },
  //     {
  //       content: 'Price: 699',
  //       title: 'T-shirt',
  //       imagesource: ''
  //     },{
  //       content: 'Price: 799',
  //       title: 'T-shirt',
  //       imagesource: ''
  //     },
  //     {
  //       content: 'Price: 899',
  //       title: 'T-shirt',
  //       imagesource: 'C:/Users/bhat/Desktop/hello/src/app/img/Womenshopping.jpeg',
        
  //     }]
  
  constructor(private http: HttpClient){}
  ngOnInit(): void {
    this.http.get(environment.SERVER_URL + '/database/mendata/').subscribe((res: any) => {
      this.arraymen = res;});
  }

  //  addcart():{
  //    this.Inemail=localStorage.getItem('email')

  //   this.cartitems={"email":this.Inemail,"product":,"price":""}
  //   this.http.post(environment.SERVER_URL + '/database/cart/',this.cartitems).subscribe((res: any) => {});

  //  }


  // ionViewDidEnter(){
    
  //   });
  // }

}
