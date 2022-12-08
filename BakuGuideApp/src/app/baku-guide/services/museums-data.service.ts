import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Museum } from '../models/museum';

@Injectable()
export class MuseumsDataService {
  constructor(private http: HttpClient) {}

  public getMuseums(): Observable<Museum[]> {
    return this.http.get<Museum[]>('assets/museums.json').pipe(
      map((json: any) => {
        return json || [];
      })
    );
  }
}
