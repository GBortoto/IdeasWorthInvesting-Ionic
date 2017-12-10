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

  private ideas: any = [];

  private user_id: number;
  private user_token: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public signUpInfo: SignUpInfoProvider, public getIdeas: GetIdeasServiceProvider) {}

  ionViewDidLoad() {
    this.listIdeas();

    this.user_token = this.navParams.get('token');
    this.user_id = this.navParams.get('user').pk;
  }

  listIdeas() {
    this.getIdeas.setUserID(this.user_id);
    this.getIdeas.getRemoteData().subscribe(data => this.ideas = data)
  }

  goToIdea(idea){
    this.navCtrl.push(AboutPage, {
      currentIdea: idea
    });
  }

}
