import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css']
})
export class Product1Component implements OnInit {
id:any;
productdetails=[];
Inemail=localStorage.getItem('email');
cartitems={};
cartcontent=[];

  constructor(private route:ActivatedRoute,private http: HttpClient) { }
  postid={}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id =this.route.snapshot.paramMap.get('id')});
      
      this.postid={"myid":this.id};
     
      this.http.post(environment.SERVER_URL + '/database/meninfo/',this.postid).subscribe((res: any) => {
        this.productdetails = res;}); 
  }
  addcart(){
  this.cartitems={}

   this.cartitems={"email":this.Inemail,"id":this.id}
   this.http.post(environment.SERVER_URL + '/database/cartdata/',this.cartitems).subscribe((res: any) => {this.cartcontent=res;});

  }
}
