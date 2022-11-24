import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttractionsComponent } from './baku-guide/components/attractions/attractions.component';
import { MainComponent } from './baku-guide/components/main/main.component';
import { RestarauntsComponent } from './baku-guide/components/restaraunts/restaraunts.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
