import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Care in Your Hand';
  envConfig: any;
  showNavbar = true;
  showFooter = true;

  ngOnInit(): void {
    this.envConfig = window['env'] || {};
    console.log('Environment Config:', this.envConfig);
  }
}
