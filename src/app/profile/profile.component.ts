import { Component, Input, OnInit } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profiledetails=[];
  postuser={"email":localStorage.getItem("email")};
  logout(){
    localStorage.removeItem("email")
  }
  constructor(private http:HttpClient) { }
  
  ngOnInit(): void {
    this.http.post(environment.SERVER_URL + '/database/profile/',this.postuser).subscribe((res: any) => {
      this.profiledetails = res;});
  }

}
