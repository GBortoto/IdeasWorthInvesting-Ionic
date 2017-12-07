import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AboutPage } from '../about/about';

import { SignUpInfoProvider } from '../../providers/sign-up-info/sign-up-info';

@IonicPage()
@Component({
  selector: 'page-ideas',
  templateUrl: 'ideas.html'
})
export class IdeasPage {
  ideas: any[] = new Array(5);

  constructor(public navCtrl: NavController, public navParams: NavParams, public signUpInfo: SignUpInfoProvider) {
    for(var i=0; i<10;i++){
  		var idea = {
  			name: "Teste " + i,
  			content: "Test " + i
  		}
  		this.ideas[i] = idea;
  	}
    
  }

  goToIdea(idea){
    this.navCtrl.push(AboutPage, {
      currentIdea: idea
    });
  }

}
