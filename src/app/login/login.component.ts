import { Component, OnInit } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private http:HttpClient,private router:Router) { }
    
  ngOnInit(): void {}

 Inemail='';
 Inpass='';

 postuser={};

 loginbyemail(){
  this.postuser={​​

    "data":{​​"email":this.Inemail,
  
            "password":this.Inpass}​​
  
  }​​;
 
  this.http.post(environment.SERVER_URL + '/database/login/',this.postuser).subscribe((res:any) =>{​​
  
    console.log(res);
    //localStorage.setItem('currentUser',this.Inemail)
  
    if (res['loginStatus']== true){​​
      localStorage.setItem('email',this.Inemail);
      //this.router.navigate(['/landing'])
  
      //login successful
  
     }
    //  else{
    //    alert('Username password combination is wrong!')
    //  }
 }
// }​​else{​​this.loginValid=false;}​​  



);



}​​


}