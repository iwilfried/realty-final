import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
    selector:'page-welcome',
    templateUrl: 'welcome.html'
})
export class WelcomePage {

   

    constructor(private nav: NavController,private  navParams: NavParams) {
        this.nav = nav;
    }

}