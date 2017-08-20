import { Component, Input } from '@angular/core';
import { Aninmal } from './aninmal';

@Component({
  selector: 'aninmal-detail',
  template: `
    
      <h2>{{selectedAninmal.name}} details!</h2>
      <div><label>id: </label>{{selectedAninmal.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedAninmal.name" placeholder="name">
      </div>
    
  `

})

export class AninmalDetailComponent {
  // Declare that hero is an input property
  @Input() aninmal: Aninmal;
}
