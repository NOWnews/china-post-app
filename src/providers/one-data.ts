import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class OneData {
  data: any;
  id: any;
  apiHost: string = 'http://35.201.150.36/';

  constructor(public http: Http) { }

  load(newsId: any){
    if (this.data && this.data.newsId === newsId) {
      return Observable.of(this.data);
    } else {
      return this.http.get(`${this.apiHost}news/${newsId}`)
        .map(this.processData, this);
    }
  }

  processData(data: any) {
    this.data = data.json();
    return this.data;
  }

  getOneDetail(sn: number) {
    return this.load(sn).map((data: any) => {
      return data;
    });
  }

}
