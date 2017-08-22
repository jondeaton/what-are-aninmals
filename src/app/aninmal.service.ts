import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Aninmal} from './aninmal';
import {toPromise} from "rxjs/operator/toPromise";

@Injectable() // <-- emit metadata about the service
export class AninmalService {

  private aninmalsUrl = 'api/aninmals'; // URL to web api
  private headers = new Headers({'Content-Type': 'applications/json'});

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

  update(aninmal: Aninmal): Promise<Aninmal> {
    const url = `${this.aninmalsUrl}/${aninmal.id}`;
    return this.http
      .put(url, JSON.stringify(aninmal), {headers: this.headers})
      .toPromise()
      .then(() => aninmal)
      .catch(this.handleError);
  }

  create(name: string): Promise<Aninmal> {
    return this.http
      .post(this.aninmalsUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(response => response.json().data as Aninmal)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error has occured', error); // demo
    return Promise.reject(error.message || error);
  }
}

