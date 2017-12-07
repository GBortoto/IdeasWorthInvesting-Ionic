import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class SignUpInfoProvider {

    userInfo: any;
    token: any;

    /*
    username: string;
    password: string;
    email: string;
    firstName: string;
    lastName: string;
    */

  constructor(private http: Http) {
      this.userInfo = null;
      this.token = null;
  }

  setNewUserInfo(info) {
    if(!info){
        return;
    }
    if (this.userInfo) {
      return Promise.resolve(this.userInfo);
    }
 
    return new Promise(resolve => {
      this.http.get('path/to/data.json')
        .map(res => res.json())
        .subscribe(data => {
          this.userInfo = data;
          resolve(this.userInfo);
        });
    });
  }
}
