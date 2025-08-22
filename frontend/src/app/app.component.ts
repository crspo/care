import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Fixes NG8103: The `*ngFor` directive issue

// Import all child components used in the main template
// Fixes all the NG8001: '...' is not a known element errors
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServiceCardComponent } from './components/service-card/service-card.component';
import { PillarsComponent } from './components/pillars/pillars.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FooterComponent } from './layout/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // This imports all the necessary components for the template
    CommonModule, // Required for directives like `*ngFor`
    NavbarComponent,
    HeroComponent,
    ServiceCardComponent,
    PillarsComponent,
    ServicesComponent,
    ContactFormComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit { // Fixes TS2304: Cannot find name 'OnInit'
  title = 'my-angular-app';

  // Assuming `bannerData` is defined here to be used by the *ngFor loop
  bannerData = [
    { description: 'Service 1 Description', icon: 'star', color: 'blue' },
    { description: 'Service 2 Description', icon: 'heart', color: 'red' },
  ];

  envConfig: any; // Fixes TS7015: Element implicitly has an 'any' type

  ngOnInit(): void {
    // Correct way to access a global variable like `window['env']` in TypeScript
    this.envConfig = (window as any)['env'] || {};
  }
}


