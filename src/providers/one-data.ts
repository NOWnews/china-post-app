import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class OneData {
  data: any;
  id: any;

  constructor(public http: Http) { }

  load(id: any){
    if (this.data && this.data.newId === id) {
      return Observable.of(this.data);
    } else {
      return this.http.get(`http://35.201.150.36/news/${id}`)
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
