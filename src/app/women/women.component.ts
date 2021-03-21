import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit {

  arraywomen=[];
  
  // arraywomen=[{
  //       content: 'Price: 1299',
  //       title: 'Formal shirt',
  //       imagesource: 'img/Womenshopping.jpeg'
  //     },{
  //       content: 'Price: 999',
  //       title: 'Formal shirt',
  //       imagesource: 'C:/Users/bhat/Desktop/VSCODES/Womenshopping.jpeg'
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
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(environment.SERVER_URL + '/database/womendata/').subscribe((res: any) => {
      this.arraywomen = res;});
  }
  }


