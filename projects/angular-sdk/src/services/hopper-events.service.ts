import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HopperEventsService {

  constructor(
    private _httpClient: HttpClient
  ) {}

  // ----------------------------------------------------------
  // TEMPLATE
  // ----------------------------------------------------------

  pushEvents(basePath: string, hopperEventId: string): Observable<any> {
    return this._httpClient.put<any>(`${basePath}/events`, hopperEventId);
  }
}
