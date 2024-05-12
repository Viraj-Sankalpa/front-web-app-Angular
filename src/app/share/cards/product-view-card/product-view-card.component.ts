import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-product-view-card',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './product-view-card.component.html',
  styleUrl: './product-view-card.component.scss'
})
export class ProductViewCardComponent {

}
