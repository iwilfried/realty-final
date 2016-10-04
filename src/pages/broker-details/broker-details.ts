import { Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {BrokerService} from '../../services/broker-service';

@Component({
    selector: 'page-broker-details',
    templateUrl: 'broker-details.html'
})
export class BrokerDetailsPage implements OnInit {
     broker: any; 

    constructor(public nav: NavController ,private navParams: NavParams, private brokerService: BrokerService) {
        this.brokerService = brokerService;
        this.broker = navParams.get('broker');
    }

    ngOnInit() {
        this.brokerService.findById(this.broker.id).subscribe(
            broker => this.broker = broker
        );
    }


}
