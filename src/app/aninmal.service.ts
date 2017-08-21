import {Injectable} from "@angular/core";
import {Aninmal} from "./aninmal";
import {ANINMALS} from "./mock-aninmals";

@Injectable() // <-- emit metadata about the service
export class AninmalService {

  getAninmals(): Promise<Aninmal[]> {
    return Promise.resolve(ANINMALS);
  }

  getAninmalsSlowly(): Promise<Aninmal[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getAninmals()), 2000)
    })
  }
}

