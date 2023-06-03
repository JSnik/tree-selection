import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {base_endpoint} from "../../../base_endpoint";
import {Observable} from "rxjs";
import {FilialeModel} from "../models/filiale.model";
import {PeopleModel} from "../models/people.model";

@Injectable()

export class PeopleService {
  constructor(private http: HttpClient) {
  }

  baseUrl: string = base_endpoint;
  peoplesApi: string = `${this.baseUrl}dev/getmt`

  getPeople(): Observable<PeopleModel[]> {
    return this.http.get<PeopleModel[]>(this.peoplesApi)
  }
}
