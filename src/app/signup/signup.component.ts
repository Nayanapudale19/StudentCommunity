import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('f',{static:true})signup:NgForm

  country=[
    "Austria","Argentina","Grenada","Hong Kong","Indonesia","Iraq","India","Kuwait","Lebanon","Macao",
    "Malaysia","Morocco","Pakistan","Saudi Arabia"
  ];

  user={
    Name:"",
    Email:"",
    Dob:"",
    Image:"",
    Country:"",
  }
  submitted=false;
  Signup(f)
  {
    this.submitted=true;
    this.user.Name=this.signup.value.name;
    this.user.Email=this.signup.value.email;
    this.user.Dob=this.signup.value.dob;
    this.user.Image=this.signup.value.image;
    this.user.Country=this.signup.value.country;
    this.signup.reset();
  }
  file(image)
  {
    // debugger;
    // const file:File=image.files[0];
  }

  constructor() { }

  ngOnInit(): void {
  }

}
