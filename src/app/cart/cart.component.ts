import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  postdata={"email":localStorage.getItem("email")};
  cartcontent=[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.post(environment.SERVER_URL + '/database/cartcontent/',this.postdata).subscribe((res: any) => {
      this.cartcontent = res;}); 
  }

}
