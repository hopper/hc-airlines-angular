import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HopperEventsService {

  constructor(
    private http: HttpClient,
  ) {}

  // ----------------------------------------------------------
  // TEMPLATE
  // ----------------------------------------------------------

  pushEvents(hopperEventId: string): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/api/events`, hopperEventId);
  }
}
