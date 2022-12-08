import { NgModule } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    NavigationComponent,
    ContactFormComponent
  ],
  imports: [
    ReactiveFormsModule,
    RouterModule,
    CommonModule
  ],
  providers: [
  ],
  exports: [
    NavigationComponent,
    ContactFormComponent
  ],
})
export class SpreadModule {}
