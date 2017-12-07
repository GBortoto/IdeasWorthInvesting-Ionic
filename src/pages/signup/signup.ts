import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

import { SignUpInfoProvider } from '../../providers/sign-up-info/sign-up-info';

import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  providers: [SignUpInfoProvider]
})

export class SignupPage {

  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public signUpInfo: SignUpInfoProvider, public http: Http) {
      this.username = null;
      this.password = null;
      this.email = null;
      this.firstName = null;
      this.lastName = null;
  }

  signUp(){
    if(!this.checkUsername(this.username)){
      this.sendError("username");
      return;
    };
    if(!this.checkPassword(this.password)){
      this.sendError("password");
      return;
    };
    if(!this.checkEmail(this.email)){
      this.sendError("email");
      return;
    };
    if(!this.checkFirstName(this.firstName)){
      this.sendError("firstName");
      return;
    };
    if(!this.checkLastName(this.lastName)){
      this.sendError("lastName");
      return;
    };



    var info = {
      username:   this.username,
      password:   this.password,
      email:      this.email,
      firstName:  this.firstName,
      lastName:   this.lastName
    }

    this.signUpInfo.setNewUserInfo(info);
    
    //this.navCtrl.push(TabsPage);
  }

  checkUsername(username){
    // null
    if(!username){
      return 0;
    }

    // Length
    if(username.length < 6 || username.length > 16){
      return 0;
    }
    return 1;
  }

  checkPassword(password){
    // null
    if(!password){
      return 0;
    }
    
    // Length
    if(password.length < 8 || password.length > 20){
      return 0;
    }
    return 1;
  }

  checkEmail(email){
    // null
    if(!email){
      return 0;
    }
    // Cointains '@' and a '.'
    if(email.indexOf("@") < 0 || email.indexOf(".") < 0){
      return 0;
    }
    return 1;
  }

  checkFirstName(firstName){
    // null
    if(!firstName){
      return 0;
    }
    // Length
    if(firstName.length < 1 || firstName.length > 20){
      return 0;
    }
    return 1;
  }

  checkLastName(lastName){
    // null
    if(!lastName){
      return 0;
    }
    // Length
    if(lastName.length < 1 || lastName.length > 20){
      return 0;
    }
    return 1;
  }

  sendError(value){
    if(value == "username"){
        alert("Please enter a valid username");
        document.getElementById('username').style.backgroundColor = "lightpink";
        return;
    }

    if(value == "password"){
        alert("Please enter a valid password");
        document.getElementById('password').style.backgroundColor = "lightpink";
        return;
    }

    if(value == "email"){
        alert("Please enter a valid email");
        document.getElementById('email').style.backgroundColor = "lightpink";
        return;
    }

    if(value == "firstName"){
        alert("Please enter a valid First Name");
        document.getElementById('firstName').style.backgroundColor = "lightpink";
        return;
    }

    if(value == "lastName"){
        alert("Please enter a valid last name");
        document.getElementById('lastName').style.backgroundColor = "lightpink";
        return;
    }
  }

  resetColor(value){
    if(value){
      document.getElementById(value).style.backgroundColor = "white";
    }
  }

    sendInfo(info){
    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post('http://iwiaccount.pythonanywhere.com/rest-auth/login/',
      JSON.stringify(info), {headers: headers})
    .map(res => res.json())
    .subscribe(data => {
      console.log(data);
     });
  }
}
