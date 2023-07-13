import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsComponent } from './about-us.component';
import { AboutUsHeadingComponent } from './about-us-heading/about-us-heading.component';

@NgModule({
  declarations: [AboutUsComponent, AboutUsHeadingComponent],
  imports: [CommonModule],
})
export class AboutUsModule {}
