import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OutcomeModel } from '../components/login/models/outcome.nodel';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OutcomeService {
  constructor(private http: HttpClient) {}

  getAll(
    year: number,
    month: number,
    userId: string
  ): Observable<OutcomeModel[]> {
    // return this.http.get<OutcomeModel[]>(`${environment.apiUrl}outcomes`);
    return this.http.get<OutcomeModel[]>(
      `${environment.apiUrl}outcomes?year=${year}&month=${month}&user_id=${userId}`
    );
  }
}
