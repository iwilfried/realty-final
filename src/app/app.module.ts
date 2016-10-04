import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {PropertyListPage} from '../pages/property-list/property-list';
import {PropertyDetailsPage } from '../pages/property-details/property-details';
import {BrokerDetailsPage } from '../pages/broker-details/broker-details';
import {BrokerListPage} from '../pages/broker-list/broker-list';
import {FavoriteListPage} from '../pages/favorite-list/favorite-list';
import {PropertyService} from '../services/property-service';
import {BrokerService} from '../services/broker-service';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PropertyListPage,
    PropertyDetailsPage,
    BrokerDetailsPage,
    BrokerListPage,
    FavoriteListPage


    
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
     HomePage,
    PropertyListPage,
    PropertyDetailsPage,
    BrokerDetailsPage,
    BrokerListPage,
    FavoriteListPage
  ],
  providers: [PropertyService, BrokerService]
})
export class AppModule {}
