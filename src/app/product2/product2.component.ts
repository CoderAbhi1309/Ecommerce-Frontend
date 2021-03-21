import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css']
})
export class Product2Component implements OnInit {
  id:any;
  womenproductdetails=[];
  Inemail=localStorage.getItem('email');
  cartitems={};
  cartcontent=[];

  constructor(private route:ActivatedRoute,private http: HttpClient) { }
  postid={}

  ngOnInit(): void { this.route.paramMap.subscribe((params: ParamMap) => {
    this.id =this.route.snapshot.paramMap.get('id')});
    
    this.postid={"myid":this.id};
   
    this.http.post(environment.SERVER_URL + '/database/womeninfo/',this.postid).subscribe((res: any) => {
      this.womenproductdetails = res;}); 
  }
  addcartwomen(){
    this.cartitems={}
  
     this.cartitems={"email":this.Inemail,"id":this.id}
     this.http.post(environment.SERVER_URL + '/database/cartdat/',this.cartitems).subscribe((res: any) => {this.cartcontent=res;});
  
    }
}
