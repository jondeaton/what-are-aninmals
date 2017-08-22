import {Injectable} from "@angular/core";
import {Aninmal} from "./aninmal";
import {ANINMALS} from "./mock-aninmals";
import {forEach} from "@angular/router/src/utils/collection";

@Injectable() // <-- emit metadata about the service
export class AninmalService {
  getAninmal(id: number): Promise<Aninmal> {
    return this.getAninmals()
      .then(aninmals => aninmals.find(
        aninmal => aninmal.id === id));
  }
  getAninmals(): Promise<Aninmal[]> {
    return Promise.resolve(ANINMALS);
  }
  getAninmalsSlowly(): Promise<Aninmal[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getAninmals()), 2000)
    });
  }
}

