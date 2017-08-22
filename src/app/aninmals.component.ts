import {Component, OnInit} from '@angular/core';
import { Aninmal } from './aninmal';
import {AninmalService} from "./aninmal.service";

@Component({
  selector: 'my-aninmals',
  template: `
    <h2>Common aninmals</h2>
    <div class="left">
      <ul class="aninmals">
        <li *ngFor="let aninmal of aninmals"
            (click)="onSelect(aninmal)"
            [class.selected]="aninmal == selectedAninmal">
          <span class="badge">{{aninmal.id}}</span> {{aninmal.name}}
        </li>
      </ul>
    </div>
    <div *ngIf="selectedAninmal" class="right">
      <aninmal-detail [aninmal]="selectedAninmal"></aninmal-detail>
    </div>
  `,
  styles: [`
    .right {
      float: left;
      padding: 5px 5px;
      display: inline-block;
      background-color: #eee;
      width: 500px;
      height: 200px;
      border-radius: 4px 0 0 4px;
    }
    .left{
      float: left
    }
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .aninmals {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .aninmals li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .aninmals li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .aninmals li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .aninmals .text {
    position: relative;
    top: -3px;
  }
  .aninmals .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`],
})

export class AninmalsComponent implements OnInit {

  selectedAninmal: Aninmal;
  aninmals: Aninmal[];

  constructor(private aninmalService: AninmalService) { }

  ngOnInit(): void {
    this.getAninmals();
  }

  onSelect(aninmal: Aninmal): void {
    this.selectedAninmal = aninmal;
  }

  getAninmals(): void {
    this.aninmalService.getAninmals().then( aninmals => this.aninmals = aninmals);
  }
}