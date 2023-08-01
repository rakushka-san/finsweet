import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss'],
})
export class SocialsComponent {
  @Input() facebookLink: string = '';
  @Input() twitterLink: string = '';
  @Input() instagramLink: string = '';
  @Input() linkedinLink: string = '';
}
