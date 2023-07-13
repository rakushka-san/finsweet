import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsComponent } from './about-us.component';
import { AboutUsHeadingComponent } from './about-us-heading/about-us-heading.component';
import { MissionVisionComponent } from './mission-vision/mission-vision.component';
import { AboutTeamComponent } from './about-team/about-team.component';
import { WhyStartedComponent } from './why-started/why-started.component';

@NgModule({
  declarations: [AboutUsComponent, AboutUsHeadingComponent, MissionVisionComponent, AboutTeamComponent, WhyStartedComponent],
  imports: [CommonModule],
})
export class AboutUsModule {}
