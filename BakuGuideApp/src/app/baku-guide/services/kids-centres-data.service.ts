import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { KidsCentre } from '../models/kids-centre';

@Injectable()
export class KidsCentresDataService {
  constructor(private http: HttpClient) {}

  public getKidsCentres(): Observable<KidsCentre[]> {
    return this.http.get<KidsCentre[]>("assets/kids-centres.json").pipe(
      map((json: any) => {
        return (json ? json : []).map((kidsCentreJSON: any) => {
          return {
            id: kidsCentreJSON.id,
            name: kidsCentreJSON.name,
            image: kidsCentreJSON.image,
            address: kidsCentreJSON.address,
            description: kidsCentreJSON.rating,
          };
        });
      })
    );
  }
}