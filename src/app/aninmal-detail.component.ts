import { Component, Input } from '@angular/core';
import { Aninmal } from './aninmal';

@Component({
  selector: 'aninmal-detail',
  template: `
      <h2>Details: {{aninmal.name}}</h2>
      <!--<h2>{{aninmal.name}} - details!</h2>-->
      <div><label>id: </label>{{aninmal.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="aninmal.name" placeholder="name">
      </div>
    
  `

})

export class AninmalDetailComponent {
  // Declare that hero is an input property
  @Input() aninmal: Aninmal;
}
