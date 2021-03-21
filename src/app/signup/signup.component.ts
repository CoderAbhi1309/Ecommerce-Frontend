import { Component, OnInit } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void { }
  Inname='';
  Inemail='';
  Inpass='';
  Inmobile='';

 postuser={};

 signupbyemail(){
  this.postuser={​​

    "data":{​​"name":this.Inname,
    "email":this.Inemail,
  
            "password":this.Inpass,
            "mobile":this.Inmobile}
             
 }​​,
 localStorage.setItem('email',this.Inemail)
            this.http.post(environment.SERVER_URL + '/database/register/',this.postuser).subscribe((res:any) =>{​​
  
            console.log(res);
          
            if (res['registrationStatus']=="registered Successfully"){​​
          
              // this.router.navigate(['/landing'])
              // alert('Registered Successfully!')
          
              //signup successful
          
             }
            //  else{
            //   alert('Try again!')}
    
             }
            )}}