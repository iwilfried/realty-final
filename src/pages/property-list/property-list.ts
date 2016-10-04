import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {PropertyDetailsPage} from '../property-details/property-details';
import {PropertyService} from '../../services/property-service';

@Component({
    selector: 'page-property-list',
    templateUrl: 'property-list.html'
})
export class PropertyListPage implements OnInit{
    selectedItem: string;
    properties:Object;

    constructor(public nav: NavController,public navParams: NavParams, public propertyService: PropertyService) {
        this.nav = nav;
        this.propertyService = propertyService;
        this.selectedItem = navParams.get('item');
    }


     ngOnInit() {
         this.propertyService.findAll().subscribe(
            data => this.properties = data
        );
    
  }


    itemTapped(event, property) {
        this.nav.push(PropertyDetailsPage, {
            property: property
        });
    }

}