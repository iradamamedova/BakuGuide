import { NgModule } from '@angular/core';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { ThinLineComponent } from './components/thin-line/thin-line.component';
import { NavBtnComponent } from './components/nav-btn/nav-btn.component';
import { RevealService } from './services/reveal.service';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    NavigationComponent,
    ContactFormComponent,
    CardComponent,
    SmallCardComponent,
    ThinLineComponent,
    NavBtnComponent,
    HeaderComponent,
  ],
  imports: [
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    NgImageSliderModule,
  ],
  providers: [RevealService],
  exports: [
    NavigationComponent,
    ContactFormComponent,
    CardComponent,
    ThinLineComponent,
    NavBtnComponent,
    SmallCardComponent,
    HeaderComponent
  ],
})
export class SharedModule {}
