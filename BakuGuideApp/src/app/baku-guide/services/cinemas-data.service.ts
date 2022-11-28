import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Cinema } from '../models/cinema';

@Injectable()
export class CinemasDataService {
  constructor(private http: HttpClient) {}

  public getCinemas(): Observable<Cinema[]> {
    return this.http.get<Cinema[]>("assets/cinemas.json").pipe(
      map((json: any) => {
        return (json ? json : []).map((cinemaJSON: any) => {
          return {
            id: cinemaJSON.id,
            name: cinemaJSON.name,
            image: cinemaJSON.image,
            address: cinemaJSON.address,
            description: cinemaJSON.rating,
          };
        });
      })
    );
  }
}