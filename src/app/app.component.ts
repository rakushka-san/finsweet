import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild(FooterComponent, { static: false }) footer:
    | FooterComponent
    | undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log('navigation end');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  scrollDown(): void {
    this.footer?.scrollToTop();
  }
}
