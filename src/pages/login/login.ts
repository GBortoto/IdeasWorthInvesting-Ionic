import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

import { SingInProvider } from '../../providers/sing-in/sing-in';

import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [SingInProvider]
})
export class LoginPage {

  username: string;
  password: string;

  elemento: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public singIn: SingInProvider, public http: Http) {
      this.username = null;
      this.password = null;
  }

  skip(){
  	this.navCtrl.push(TabsPage);
  }

  signIn(){
  	if(!this.checkUsername(this.username)){
      this.sendError("username");
      return;
    };
    if(!this.checkPassword(this.password)){
      this.sendError("password");
      return;
    };

    var info = {
      username:   this.username,
      password:   this.password
    }

    this.sendInfo(info);


    //this.signIn.signIn(info);
  }

  checkUsername(username){
  	/*
    // null
    if(!username){
      return 0;
    }

    // Length
    if(username.length < 6 || username.length > 16){
      return 0;
    }
    */
    return 1;
  }

  checkPassword(password){
  	/*
    // null
    if(!password){
      return 0;
    }
    
    // Length
    if(password.length < 8 || password.length > 20){
      return 0;
    }
    */
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
  }

  resetColor(value){
    if(value){
      document.getElementById(value).style.backgroundColor = "white";
    }
  }

  sendInfo(info){
  	
  	let headers = new Headers();
  	headers.append('Content-Type', 'application/json');

  	var tentativa = this.http.post('http://iwiaccount.pythonanywhere.com/rest-auth/login/',
  		JSON.stringify(info), {headers: headers})
  	.map(res => res.json())
  	.subscribe(data => {
  		console.log(data);
   	});

  	//console.log("RETORNO:");
  	//console.log(data);
  	//console.log(headers);
   	//this.elemento = data;
  }
}
