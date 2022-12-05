import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Park } from '../models/park';

@Injectable()
export class ParksDataService {
  constructor(private http: HttpClient) {}

  public getParks(): Observable<Park[]> {
    return this.http.get<Park[]>('assets/parks.json').pipe(
      map((json: any) => {
        return (json ? json : []).map((parkJSON: any) => {
          return {
            id: parkJSON.id,
            name: parkJSON.name,
            images: parkJSON.images,
            location: parkJSON.location,
            description: parkJSON.description,
            link: parkJSON.link
          };
        });
      })
    );
  }
}