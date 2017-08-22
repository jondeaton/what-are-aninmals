import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

import 'rxjs/add/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import {AninmalSearchService} from './aninmal-search.service';
import {Aninmal} from './aninmal';
import {distinctUntilChanged} from 'rxjs/operator/distinctUntilChanged';

@Component({
  selector: 'aninmal-search',
  templateUrl: './aninmal-search.component.html',
  styleUrls: ['./aninmal-search.component.css'],
  providers: [AninmalSearchService]
})

export class AninmalSearchComponent implements OnInit {

  aninmals: Observable<Aninmal[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private aninmalSearchService: AninmalSearchService,
    private router: Router
  ) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.aninmals = this.searchTerms.debounceTime(300) // wait 300 ms after each keystroke for refresh
    .distinctUntilChanged() // ignore if next sarch term is the same as previous
      .switchMap( term => term // switch to new observable each time the term changes
        ? this.aninmalSearchService.search(term) // return the http search observable
        : Observable.of<Aninmal[]>([]))// or the observable of empty heroes if there was no search term
      .catch( error => {
        console.log(error);
        return Observable.of<Aninmal[]>([]);
      });
  }

  gotoDetail(aninmal: Aninmal): void {
    const link = ['/detail', aninmal.id];
    this.router.navigate(link);
  }

}
