import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { AddContactButtonComponent } from './add-contact-button/add-contact-button.component';
import { ContactComponent } from './contact/contact.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddContactComponent, AddContactButtonComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Telefonbuch';
}
