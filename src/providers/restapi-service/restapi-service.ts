import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class RestapiServiceProvider {

  apiUrl = 'iworthinvesting.pythonanywhere.com/ideas/';
  data: any;

  constructor(public http: HttpClient) {
    this.data = null;
  }

  load(n) {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get(this.apiUrl + n + '/threads')
      .map(res => res.json())
      .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    })
  }
}
