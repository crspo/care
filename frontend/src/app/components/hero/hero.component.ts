import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() ctaText = '';
  @Input() ctaHref = '';
  @Input() imagePath = '';
  @Input() overlay = 0.3;
  @Input() align = 'center';
}

