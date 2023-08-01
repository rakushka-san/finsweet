import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactComponent } from './contact.component';
import { ContactContentComponent } from './contact-content/contact-content.component';

@NgModule({
  declarations: [
    ContactComponent,
    ContactContentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContactModule { }
