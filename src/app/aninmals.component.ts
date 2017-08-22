import { Component, OnInit} from '@angular/core';
import { Router } from "@angular/router";
import { Aninmal } from './aninmal';
import { AninmalService } from "./aninmal.service";

@Component({
  selector: 'my-aninmals',
  templateUrl: './aninmals.component.html',
  styleUrls: ['./aninmals.component.css']
})

export class AninmalsComponent implements OnInit {

  selectedAninmal: Aninmal;
  aninmals: Aninmal[];

  constructor(
    private aninmalService: AninmalService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAninmals();
  }

  getAninmals(): void {
    this.aninmalService.getAninmals().then( aninmals => this.aninmals = aninmals);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedAninmal.id]);
  }

  onSelect(aninmal: Aninmal): void {
    this.selectedAninmal = aninmal;
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return ; }
    this.aninmalService.create(name)
      .then( aninmal => {
        this.aninmals.push(aninmal);
        this.selectedAninmal = null;
      });
  }

  delete(): void {}

}
