import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Attraction } from '../models/attraction';

@Injectable()
export class AttractionsDataService {
  constructor(private http: HttpClient) {}

  public getAttractions(): Observable<Attraction[]> {
    return this.http.get<Attraction[]>('assets/attractions.json').pipe(
      map((json: any) => {
        return json || [];
      })
    );
  }

  public getAttractionsImages(): Observable<Object[]> {
    return this.http
      .get<Object[]>('assets/attractions-slider-images.json')
      .pipe(
        map((json: any) => {
          return json || {};
        })
      );
  }

  public getReasonsToVisitImages(): Observable<Object[]> {
    return this.http.get<Object[]>('assets/reasons-to-visit-images.json').pipe(
      map((json: any) => {
        return json || {};
      })
    );
  }
}
