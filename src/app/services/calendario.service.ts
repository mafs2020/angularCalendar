import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { CalendarEvent } from 'angular-calendar';

@Injectable({
  providedIn: 'root'
})
export class CalendarioService {
  constructor(private http: HttpClient) { }

  getEventos(offset: number = 0): Observable<CalendarEvent[]>{
    return this.http.get<CalendarEvent[]>(`http://localhost:3000/`)
    .pipe(
      tap(data => console.log(data)),
      map((data: any) => data.rows)
    );
  }

}
