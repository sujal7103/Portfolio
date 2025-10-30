import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NavigationService } from './core/services/navigation.service';

declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoading: boolean = false
  isMenuOpen: boolean = false
  isActiveBackground: boolean = true
  showFooter: boolean = true
  title: any;

  constructor(
    public router: Router,
    private navService: NavigationService,
  ) {
    this.navService.loaderStatus.subscribe(result => this.isLoading = result);
    this.navService.menuStatus.subscribe(result => this.isMenuOpen = result);
    this.navService.backgroundStatus.subscribe(result => this.isActiveBackground = result);

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        gtag('config', 'G-85T7P5EYV8', { 'page_path': event.urlAfterRedirects });
        this.showFooter = event.urlAfterRedirects == "/contact" ? false : true
      }
    })
  }
}
