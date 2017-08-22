import { Component, OnInit } from "@angular/core";
import { Router} from "@angular/router";
import {Aninmal} from "./aninmal";
import {AninmalService} from "./aninmal.service";

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  aninmals: Aninmal[];

  constructor(
    private aninmalService: AninmalService,
    private router: Router) {}

  ngOnInit(): void {
    this.aninmalService.getAninmals().then(
      aninmals => this.aninmals = aninmals.slice(0, 6));
  }

  onSelect(aninmal: Aninmal): void {
    this.router.navigate(['/detail', aninmal.id]);
  }
}
