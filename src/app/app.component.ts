import { Component } from '@angular/core';

import { faTag } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Beehive';
  faTag  = faTag;
  faUser = faUser;
  faShoppingCart = faShoppingCart;
}
