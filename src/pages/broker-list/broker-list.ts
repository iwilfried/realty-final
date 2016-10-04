import {Component , OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {BrokerDetailsPage} from '../broker-details/broker-details';
import {BrokerService} from '../../services/broker-service';


@Component({
    selector: 'page-broker-list',
    templateUrl: 'broker-list.html'
})
export class BrokerListPage implements OnInit {

    selectedItem: string;
    brokers:Object;

    constructor(public nav: NavController,public navParams: NavParams, public brokerService: BrokerService) {
        this.nav = nav;
        this.brokerService = brokerService;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
    }

  ngOnInit() {
        this.brokerService.findAll().subscribe(
            data => this.brokers = data
        );
    }

    itemTapped(event, broker) {
        this.nav.push(BrokerDetailsPage, {
            broker: broker
        });
    }

}