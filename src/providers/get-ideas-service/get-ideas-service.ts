import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the GetIdeasServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GetIdeasServiceProvider {

  constructor(public http: Http) {
    //console.log('Hello GetIdeasServiceProvider Provider');
    //this.data = null;
  }

  getRemoteData(){

    this.http.get('http://iwiaccount.pythonanywhere.com/idea/user/1').map(res => res.json()).subscribe(data => {
      console.log(data);
    });

  }



  load() {
    /*
    if (this.data) {
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
      this.http.get('')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        }); // End of subscribe()
    }); // End of return new Promisse
  } // End of load()
  */
  }
}
