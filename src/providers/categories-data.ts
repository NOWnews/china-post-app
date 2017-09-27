import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class CategoriesData {
  data: any;
  apiHost: string = 'http://35.201.150.36/';

  constructor(public http: Http) {}

  load(): any {
    if (this.data) {
      return Observable.of(this.data);
    } else {
      return this.http.get(`${this.apiHost}categories`)
        .map(this.processData, this);
    }
  }

  processData(data: any) {
    this.data = data.json();

    // 針對 ID 做排序
    this.data.sort(function (a: any, b: any) {
      if (a.id > b.id) return 1;
      if (a.id < b.id) return -1;
      return 0;
    });
    return this.data;
  }

  getCategoriesList() {
    return this.load().map((data: any) => {
      return data;
    });
  }

}
