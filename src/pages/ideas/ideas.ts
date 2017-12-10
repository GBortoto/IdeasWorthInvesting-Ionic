import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AboutPage } from '../about/about';

import { SignUpInfoProvider } from '../../providers/sign-up-info/sign-up-info';
import { GetIdeasServiceProvider } from '../../providers/get-ideas-service/get-ideas-service';

@IonicPage()
@Component({
  selector: 'page-ideas',
  templateUrl: 'ideas.html',
  providers: [GetIdeasServiceProvider]
})
export class IdeasPage {

  ideas: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public signUpInfo: SignUpInfoProvider, public getIdeas: GetIdeasServiceProvider) {}

  ionViewDidLoad() {
    this.listIdeas();
  }

  listIdeas() {
    this.getIdeas.getRemoteData().subscribe(data => this.ideas = data)
  }

  goToIdea(idea){
    this.navCtrl.push(AboutPage, {
      currentIdea: idea
    });
  }

}
