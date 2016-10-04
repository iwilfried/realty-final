import {Injectable} from '@angular/core';
import {BROKERS} from './mock-brokers';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class BrokerService {

    findAll() {
        return Observable.create(observer => {
            observer.next(BROKERS);
            observer.complete();
        });
    }

    findById(id) {
        return Observable.create(observer => {
            observer.next(BROKERS[id - 1]);
            observer.complete();
        });
    }

}