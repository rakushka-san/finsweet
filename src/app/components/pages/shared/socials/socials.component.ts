import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss'],
})
export class SocialsComponent {
  @Input() facebookLink: string | undefined = '';
  @Input() twitterLink: string | undefined = '';
  @Input() instagramLink: string | undefined = '';
  @Input() linkedinLink: string | undefined = '';
}
