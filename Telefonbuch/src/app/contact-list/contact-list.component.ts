import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { ContactComponent } from '../contact/contact.component';
import { CommonModule } from '@angular/common';
import { AddContactButtonComponent } from '../add-contact-button/add-contact-button.component';

interface Contact {
  name: string;
  surname: string;
  phoneNumber: string;
  email: string;
}

@Component({
  selector: 'app-contacts-list',
  standalone: true,
  template: `
    <div class="contacts-container">
      <app-add-contact-button />
      <app-contact
        *ngFor="let contact of contacts"
        [contact]="contact"
      ></app-contact>
    </div>
  `,
  styleUrls: ['./contact-list.component.css'],
  imports: [CommonModule, ContactComponent, AddContactButtonComponent],
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactService.getContacts().subscribe((contacts) => {
      this.contacts = contacts;
    });
  }
}
