import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { IdeasServiceProvider } from '../../providers/idea-service/idea-service';

@IonicPage()
@Component({
  selector: 'page-ideas',
  templateUrl: 'ideas.html',
})
export class IdeasPage {
  ideas: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ideaServiceProvider: IdeaServiceProvider) {
    this.getIdeas();
  }

  getIdeas() {
  this.ideaServiceProvider.loadIdeas()
  .then(data => {
    this.users = data;
  });
}

}
