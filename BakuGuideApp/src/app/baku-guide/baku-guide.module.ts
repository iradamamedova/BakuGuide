import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { FormsModule } from '@angular/forms';
import { RestarauntsComponent } from './components/restaraunts/restaraunts.component';
import { TheatresComponent } from './components/theatres/theatres.component';
import { ParksComponent } from './components/parks/parks.component';
import { MuseumsComponent } from './components/museums/museums.component';
import { MallsComponent } from './components/malls/malls.component';
import { RestarauntComponent } from './components/restaraunt/restaraunt.component';
import { MallComponent } from './components/mall/mall.component';
import { MuseumComponent } from './components/museum/museum.component';
import { ParkComponent } from './components/park/park.component';
import { TheatreComponent } from './components/theatre/theatre.component';
import { AttractionsComponent } from './components/attractions/attractions.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { AttractionComponent } from './components/attraction/attraction.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule } from "@angular/common/http";
import { AttractionsDataService } from './services/attractions-data.service';
import { AttractionsService } from './services/attractions.service';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [
    NavigationComponent,
    MainComponent,
    RestarauntsComponent,
    TheatresComponent,
    ParksComponent,
    MuseumsComponent,
    MallsComponent,
    RestarauntComponent,
    MallComponent,
    MuseumComponent,
    ParkComponent,
    TheatreComponent,
    AttractionsComponent,
    AttractionComponent,
  ],
  imports: [
    CommonModule, 
    FormsModule,
    NgImageSliderModule,
    GoogleMapsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [AttractionsDataService, AttractionsService],
  exports: [
    MainComponent,
    RestarauntsComponent,
    TheatresComponent,
    ParksComponent,
    MuseumsComponent,
    MallsComponent,
    RestarauntComponent,
    MallComponent,
    MuseumComponent,
    ParkComponent,
    TheatreComponent,
    AttractionsComponent,
    AttractionComponent,
  ],
})
export class BakuGuideModule {}
