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
  ideas: any[] = new Array(10);

  constructor(public navCtrl: NavController, public navParams: NavParams, public signUpInfo: SignUpInfoProvider, public getIdeas: GetIdeasServiceProvider) {
     this.getIdeas.getRemoteData();
    
    for(var i=0; i<10;i++){
  		var idea = {
  			name: "Idea número " + i,
  			content: "Eu sou o texto de descrição da ideia " + i + ", eu sou responsável por passar uma curta introdução a ideia principal"
  		}
  		this.ideas[i] = idea;
  	}
    
    
  }

  goToIdea(idea){
    this.navCtrl.push(AboutPage, {
      currentIdea: idea
    });
  }

  getListOfIdeas(){

  }

}
