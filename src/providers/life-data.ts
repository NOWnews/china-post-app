import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class LifeData {
  data: any;

  constructor(public http: Http) {}

  load(): any {
    if (this.data) {
      return Observable.of(this.data);
    } else {
      return this.http.get('http://35.201.150.36/categories/1')
        .map(this.processData, this);
    }
  }

  processData(data: any) {
    this.data = data.json();

    return this.data;
  }

  getCategories() {
    return this.load().map((data: any) => {
      return data.newsList;
    });
  }

}
