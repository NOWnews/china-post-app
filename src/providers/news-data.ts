import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class NewsData {
  data: any;
  apiHost: string = 'http://35.201.150.36/';

  constructor(public http: Http) {}

  load(catId: any): any {
    if (this.data && this.data.id === catId) {
      return Observable.of(this.data);
    } else {
      return this.http.get(`${this.apiHost}categories/${catId}`)
        .map(this.processData, this);
    }
  }

  processData(data: any) {
    this.data = data.json();

    return this.data;
  }

  getCategories(id: number) {
    return this.load(id).map((data: any) => {
      if (!data && !data.newsList.length) return [];
      return data.newsList;
    });
  }

}
