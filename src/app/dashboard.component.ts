import { Component, OnInit } from "@angular/core";
import {Aninmal} from "./aninmal";
import {AninmalService} from "./aninmal.service";

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit {

  aninmals: Aninmal[];

  constructor(private aninmalService: AninmalService) {}

  ngOnInit(): void {
    this.aninmalService.getAninmals().then(
      aninmals => this.aninmals = aninmals.slice(0, 4));
  }

  onSelect(aninmal: Aninmal): void {

  }
}
