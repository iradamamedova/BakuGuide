import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Attraction } from '../models/attraction';

@Injectable()
export class AttractionsDataService {
  constructor(private http: HttpClient) {}

  public getAttractions(): Observable<Attraction[]> {
    return this.http.get<Attraction[]>("assets/attractions.json").pipe(
      map((json: any) => {
        return (json ? json : []).map((attractionJSON: any) => {
          return {
            name: attractionJSON.name,
            location: attractionJSON.location,
            desc: attractionJSON.desc,
            image: attractionJSON.image,
            link: attractionJSON.link,
          };
        });
      })
    );
  }

  public getAttractionsImages(): Observable<Object[]> {
    return this.http.get<Object[]>("assets/attractions-slider-images.json").pipe(
      map((json: any) => {
        return (json ? json : {}).map((attractionImageJSON: any) => {
          return {
            image: attractionImageJSON.image,
            thumbImage: attractionImageJSON.thumbImage,
            alt: attractionImageJSON.alt,
            title: attractionImageJSON.title
          }
        })
      })
    )
  }

  public getReasonsToVisitImages(): Observable<Object[]> {
    return this.http.get<Object[]>("assets/reasons-to-visit-images.json").pipe(
      map((json: any) => {
        return (json ? json : {}).map((reasonsToVisitImageJSON: any) => {
          return {
            image: reasonsToVisitImageJSON.image,
            thumbImage: reasonsToVisitImageJSON.thumbImage,
            alt: reasonsToVisitImageJSON.alt,
            title: reasonsToVisitImageJSON.title
          }
        })
      })
    )
  }
}
