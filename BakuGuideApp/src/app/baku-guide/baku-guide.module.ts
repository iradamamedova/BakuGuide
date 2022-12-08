import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RestarauntsComponent } from './components/restaraunts/restaraunts.component';
import { TheatresComponent } from './components/theatres/theatres.component';
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
import { HttpClientModule } from '@angular/common/http';
import { AttractionsDataService } from './services/attractions-data.service';
import { AttractionsService } from './services/attractions.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { RestarauntsDataService } from './services/restaraunts-data.service';
import { RestarauntsService } from './services/restaraunts.service';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { CinemasComponent } from './components/cinemas/cinemas.component';
import { OutdoorActivitiesComponent } from './components/outdoor-activities/outdoor-activities.component';
import { MuseumsDataService } from './services/museums-data.service';
import { TheatresDataService } from './services/theatres-data.service';
import { CinemasDataService } from './services/cinemas-data.service';
import { CinemaComponent } from './components/cinema/cinema.component';
import { MallsDataService } from './services/malls-data.service';
import { ParksDataService } from './services/parks-data.service';
import { ParksService } from './services/parks.service';
import { RestarauntDetailedComponent } from './components/restaraunt-detailed/restaraunt-detailed.component';
import { TheatresService } from './services/theatres.service';
import { CinemasService } from './services/cinemas.service';
import { MallsService } from './services/malls.service';
import { MuseumsService } from './services/museums.service';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

@NgModule({
  declarations: [
    NavigationComponent,
    MainComponent,
    RestarauntsComponent,
    TheatresComponent,
    MuseumsComponent,
    MallsComponent,
    RestarauntComponent,
    MallComponent,
    MuseumComponent,
    ParkComponent,
    TheatreComponent,
    AttractionsComponent,
    AttractionComponent,
    EntertainmentComponent,
    CinemasComponent,
    OutdoorActivitiesComponent,
    CinemaComponent,
    RestarauntDetailedComponent,
    ContactFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgImageSliderModule,
    GoogleMapsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [
    AttractionsDataService,
    AttractionsService,
    RestarauntsDataService,
    RestarauntsService,
    MuseumsDataService,
    MuseumsService,
    TheatresDataService,
    TheatresService,
    CinemasDataService,
    CinemasService,
    MallsDataService,
    MallsService,
    ParksDataService,
    ParksService,
  ],
  exports: [
    MainComponent,
    RestarauntsComponent,
    TheatresComponent,
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
