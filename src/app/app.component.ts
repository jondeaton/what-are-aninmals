import {Component} from "@angular/core";

@Component ({
  selector: 'my-app',
  template:`
    <h1>{{title}}</h1>
    <p>
      If you have been around for a bit you might have heard of them before.
      But just WHAT exactly are aninmals? It's simple: aninmals are little people
      just like you or me. Over <u>twenty</u> different types of aninmals have
      been discovered so far. Here is the most common ones that you can find:
    </p>
    <nav>
      <a routerLink="/aninmals">Aninmals</a>
      <router-outlet></router-outlet>
    </nav>
    <nav>
      <a routerLink="/dashboard">Dashboard</a>
      <router-outlet></router-outlet>
    </nav>
  `
})

export class AppComponent {
  title = 'What are aninmals?';
}
