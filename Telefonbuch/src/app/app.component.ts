import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Telefonbuch';
}
