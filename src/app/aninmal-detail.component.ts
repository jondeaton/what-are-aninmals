import { Component } from '@angular/core';
import { Aninmal } from './aninmal';

@Component({
  selector: 'aninmal-detail',
  aninmal: Aninmal,
  template: `
    <div *ngIf="selectedAninmal">
      <h2>{{selectedAninmal.name}} details!</h2>
      <div><label>id: </label>{{selectedAninmal.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedAninmal.name" placeholder="name">
      </div>
    </div>
  `
})

export class AninmalDetailComponent {

}
