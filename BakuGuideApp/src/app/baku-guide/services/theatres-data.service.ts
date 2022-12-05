import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Theatre } from '../models/theatre';

@Injectable()
export class TheatresDataService {
  constructor(private http: HttpClient) {}

  public getTheatres(): Observable<Theatre[]> {
    return this.http.get<Theatre[]>("assets/theatres.json").pipe(
      map((json: any) => {
        return (json ? json : []).map((theatreJSON: any) => {
          return {
            id: theatreJSON.id,
            name: theatreJSON.name,
            image: theatreJSON.image,
            address: theatreJSON.address,
            description: theatreJSON.description,
          };
        });
      })
    );
  }
}