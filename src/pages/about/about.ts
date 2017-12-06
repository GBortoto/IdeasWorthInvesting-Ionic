import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ThreadPage } from '../thread/thread';

import { RestapiServiceProvider } from '../../providers/restapi-service/restapi-service';
//import { RestapiServiceProvider } from '../providers/restapi-service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  threads: any;
  nomeDaIdeiaAtual: any;

  constructor(public navCtrl: NavController, public restapiServiceProvider: RestapiServiceProvider) {
    this.threadsOptions = "Discussions";
    //getThreads(nomeDaThreadAtual);
  }

  getThreads(n) {
    /*
    this.RestapiServiceProvider.getUsers(n)
    .then(data => {
      this.threads = data;
    });
    */
  }
}
