import { Component } from '@angular/core';

export class Aninmal {
  id: number;
  name: string;
}

const ANINMALS: Aninmal[] = [
  { id: 1, name: 'flopwop' },
  { id: 2, name: 'slippery tube dude' },
  { id: 3, name: 'fuckingf STUP1d idiot' },
  { id: 4, name: 'common doggo' },
  { id: 5, name: '✨special doggo✨' },
  { id: 6, name: 'vengeance' },
  { id: 7, name: 'water flippers'},
  { id: 8, name: 'fregs'},
  { id: 9, name: 'Snip snap doggers'},
  { id: 10, name: 'woof Bork doggo'},
  { id: 11, name: 'puppper'},
  { id: 12, name: 'floof'},
  { id: 13, name: 'flying flippity flap'},
  { id: 14, name: 'shell house snip-snap'},
  { id: 15, name: 'common blub blubs'}
];

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <p>
      If you have been around for a bit you might have heard of them before.
      But just WHAT exactly are aninmals? It's simple: aninmals are little people
      just like you or me. Over <u>twenty</u> different types of aninmals have 
      been discovered so far. Here is the most common ones that you can find:
    </p>
    
    
    <h2>Common aninmals</h2>
    <ul class="aninmals">
      
        <li *ngFor="let aninmal of aninmals"
            (click)="onSelect(aninmal)"
            [class.selected]="aninmal == selectedAninmal"
            >
          
          <span class="badge">{{aninmal.id}}</span> {{aninmal.name}}
          
        </li>
      
    </ul>
    
    
    <!--Detailed view-->
    <div *ngIf="selectedAninmal">
      <h2>{{selectedAninmal.name}} details!</h2>
      <div><label>id: </label>{{selectedAninmal.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedAninmal.name" placeholder="name">
      </div>
    </div>
  `,

  styles: [`
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
`]
})

export class AppComponent {
  title = 'What are aninmals?';

  selectedAninmal: Aninmal;

  aninmal: Aninmal = {
    id: 1,
    name: 'pupper'
  };

  onSelect(aninmal: Aninmal): void {
    this.selectedAninmal = aninmal;
  }

 aninmals = ANINMALS;
}
