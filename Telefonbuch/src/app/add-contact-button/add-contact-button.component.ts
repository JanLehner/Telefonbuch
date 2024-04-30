import { Component } from '@angular/core';

@Component({
  selector: 'app-add-contact-button',
  standalone: true,
  imports: [],
  template: `
  <a class="flexbox btn" id="addContactBtn">Kontakt Hinzufügen</a>
  `,
  styleUrl: './add-contact-button.component.css'
})
export class AddContactButtonComponent {
  
}
