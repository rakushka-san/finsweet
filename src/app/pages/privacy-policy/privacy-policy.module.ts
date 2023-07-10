import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivacyPolicyComponent } from './privacy-policy.component';
import { PrivacyHeadingComponent } from './privacy-heading/privacy-heading.component';
import { PrivacyContentComponent } from './privacy-content/privacy-content.component';

@NgModule({
  declarations: [
    PrivacyPolicyComponent,
    PrivacyHeadingComponent,
    PrivacyContentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PrivacyPolicyModule { }
