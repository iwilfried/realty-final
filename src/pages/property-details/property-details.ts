import {Component} from '@angular/core';
import {NavController, NavParams, AlertController, ActionSheetController} from 'ionic-angular';
import {BrokerDetailsPage} from '../broker-details/broker-details';
import {PropertyService} from '../../services/property-service';
@Component({

    selector: 'page-property-details',
    templateUrl: 'property-details.html'
})
export class PropertyDetailsPage {

   property: string;
    constructor(public nav: NavController,public navParams: NavParams, public propertyService: PropertyService, public AlertCtrl: AlertController,public actionSheetCtrl: ActionSheetController) {
        this.nav = nav;
        this.propertyService = propertyService;
        this.property = navParams.get('property');
    }

    favorite(event, property) {

        this.propertyService.favorite(property).subscribe(
            property => {
                let alert = this.AlertCtrl.create({
                    title: 'Favorites',
                    subTitle: 'Property added to your favorites',
                    buttons: ['OK']
                });
                alert.present();
            }
        );

    }

    like(event, property) {

        this.propertyService.like(property).subscribe(
            likes => {
                property.likes = likes;
            }
        );

    }

    share(event, property) {
         let actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: 'Text',
                    handler: () => {
                        console.log('Text clicked');
                    }
                },
                {
                    text: 'Email',
                    handler: () => {
                        console.log('Email clicked');
                    }
                },
                {
                    text: 'Facebook',
                    handler: () => {
                        console.log('Facebook clicked');
                    }
                },
                {
                    text: 'Twitter',
                    handler: () => {
                        console.log('Twitter clicked');
                    }
                },
                {
                    text: 'Cancel',
                    style: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
       actionSheet.present();
    }

    showBroker(event, broker) {
        this.nav.push(BrokerDetailsPage, {
            broker: broker
        });
    }

}