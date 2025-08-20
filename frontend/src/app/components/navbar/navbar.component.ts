import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  @Input() brandLogoPath = 'assets/images/logo.avif';
  @Input() brandHref = '/';
  @Input() navItems = [];
}

