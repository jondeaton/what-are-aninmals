import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Aninmal} from './aninmal';

@Injectable() // <-- emit metadata about the service
export class AninmalService {

  private aninmalsUrl = 'api/aninmals'; // URL to web api

  constructor(private http: Http) { }
  getAninmal(id: number): Promise<Aninmal> {
    // return this.getAninmals()
    //   .then(aninmals => aninmals.find(
    //     aninmal => aninmal.id === id));

    const url = `${this.aninmalsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Aninmal)
      .catch(this.handleError);
  }

  getAninmals(): Promise<Aninmal[]> {
    // old way: return Promise.resolve(ANINMALS);
    return this.http.get(this.aninmalsUrl)
      .toPromise()
      .then( response => response.json().data as Aninmal[])
      .catch(this.handleError);
  }

  getAninmalsSlowly(): Promise<Aninmal[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getAninmals()), 2000);
    });
  }

  private handleError(error: any): Promise<any> {
    console.error('An error has occured', error); // demo
    return Promise.reject(error.message || error);
  }
}

