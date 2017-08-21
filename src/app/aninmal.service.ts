import {Injectable} from "@angular/core";
import {Aninmal} from "./aninmal";
import {ANINMALS} from "./mock-aninmals";

@Injectable() // <-- emit metadata about the service
export class AninmalService {

  getAninmals(): Aninmal[] {
    return ANINMALS;
  }

}
