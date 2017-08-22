import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Location } from "@angular/common";
import { Aninmal } from './aninmal';
import { AninmalService } from "./aninmal.service";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'aninmal-detail',
  template: `
    <div class="detail">
      <h2>Details: {{aninmal.name}}</h2>
      <div><label>id: </label>{{aninmal.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="aninmal.name" placeholder="name">
      </div>
    </div>
  `,
  styles: [`
    .detail {
      float: left;
      padding: 10px 10px;
      display: inline-block;
      background-color: #eee;
      border-radius: 10px 10px 10px 10px;
      border: solid;
      border-width: 1px;
      margin: 10px
    }
  `]
})

export class AninmalDetailComponent implements OnInit {

  // Declare that aninmal is an input property
  @Input() aninmal: Aninmal;

  constructor(
    private aninmalService: AninmalService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) =>
      this.aninmalService.getAninmal(+params.get('id')))
      .subscribe(aninmal => this.aninmal = aninmal);
  }

}
