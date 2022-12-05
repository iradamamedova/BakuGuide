import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Mall } from '../models/mall';

@Injectable()
export class MallsDataService {
  constructor(private http: HttpClient) {}

  public getMalls(): Observable<Mall[]> {
    return this.http.get<Mall[]>("assets/malls.json").pipe(
      map((json: any) => {
        return (json ? json : []).map((mallJSON: any) => {
          return {
            id: mallJSON.id,
            name: mallJSON.name,
            image: mallJSON.image,
            address: mallJSON.address,
            hoursOpen: mallJSON.hoursOpen,
            hoursClose: mallJSON.hoursClose
          };
        });
      })
    );
  }
}