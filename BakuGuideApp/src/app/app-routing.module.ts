import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttractionsComponent } from './baku-guide/components/attractions/attractions.component';
import { EntertainmentComponent } from './baku-guide/components/entertainment/entertainment.component';
import { MainComponent } from './baku-guide/components/main/main.component';
import { OutdoorActivitiesComponent } from './baku-guide/components/outdoor-activities/outdoor-activities.component';
import { RestarauntDetailedComponent } from './baku-guide/components/restaraunt-detailed/restaraunt-detailed.component';
import { RestarauntsComponent } from './baku-guide/components/restaraunts/restaraunts.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'attractions',
    component: AttractionsComponent
  },
  {
    path: 'restaurants',
    component: RestarauntsComponent
  },
  {
    path: 'restaurants/:id',
    component: RestarauntsComponent
  }, 
  {
    path: 'entertainment',
    component: EntertainmentComponent
  },
  {
    path: 'outdoor',
    component: OutdoorActivitiesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
