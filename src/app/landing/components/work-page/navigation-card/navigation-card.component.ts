import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navigation-card',
  templateUrl: './navigation-card.component.html',
  styleUrls: ['./navigation-card.component.scss']
})
export class NavigationCardComponent {
@Input() text?: String;
@Input() title?: String;
@Input() imagePath?: String;
}
