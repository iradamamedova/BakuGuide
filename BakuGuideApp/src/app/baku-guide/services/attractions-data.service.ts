import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
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
}
