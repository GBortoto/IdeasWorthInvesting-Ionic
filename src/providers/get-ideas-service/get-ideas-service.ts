import { HttpClient } from '@angular/common/http';
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

	data: any;

  constructor(public http: HttpClient) {
    //console.log('Hello GetIdeasServiceProvider Provider');
    this.data = null;
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
