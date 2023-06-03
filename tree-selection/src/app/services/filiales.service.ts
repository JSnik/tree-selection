import {Injectable} from "@angular/core";
import {base_endpoint} from "../../../base_endpoint";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FilialeModel} from "../models/filiale.model";

@Injectable()

export class FilialesService {
  constructor(private http: HttpClient) {
  }

  baseUrl: string = base_endpoint;
  filialesApi: string = `${this.baseUrl}dev/getks`

  getFiliales(): Observable<FilialeModel[]> {
    return this.http.get<FilialeModel[]>(this.filialesApi)
  }

}
