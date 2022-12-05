import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Restaraunt } from '../models/restaurant';

@Injectable()
export class RestarauntsDataService {
  constructor(private http: HttpClient) {}

  public getRestaraunts(): Observable<Restaraunt[]> {
    return this.http.get<Restaraunt[]>("assets/restaraunts.json").pipe(
      map((json: any) => {
        return (json ? json : []).map((restarauntJSON: any) => {
          return {
            id: restarauntJSON.id,
            name: restarauntJSON.name,
            image: restarauntJSON.image,
            cuisine: restarauntJSON.cuisine,
            address: restarauntJSON.address,
            rating: restarauntJSON.rating,
            phone: restarauntJSON.phone,
            email: restarauntJSON.email,
            website: restarauntJSON.website,
            latitude: restarauntJSON.latitude,
            longitude: restarauntJSON.longitude
          };
        });
      })
    );
  }
}