import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Aninmal} from './aninmal';

@Injectable()
export class AninmalSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Aninmal[]> {
    return this.http
      .get(`api/aninmals/?name=${term}`)
      .map(response => response.json().data as Aninmal[]);
  }
}
