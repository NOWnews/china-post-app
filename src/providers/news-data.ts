import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class NewsData {
  data: any;
  apiHost: string = 'http://35.201.150.36/';
  query: string = '?page=';

  constructor(public http: Http) {}

  load(catId: any, page: number): any {
    let query = this.query + page;
    if (this.data && this.data.id === catId) {
      return Observable.of(this.data);
    } else {
      return this.http.get(`${this.apiHost}categories/${catId}${query}`)
        .map(this.processData, this);
    }
  }

  processData(data: any) {
    this.data = data.json();

    return this.data;
  }

  getCategories(id: number, page: number) {
    return this.load(id, page).map((data: any) => {
      if (!data && !data.newsList.length) return [];
      return data.newsList;
    });
  }

}
