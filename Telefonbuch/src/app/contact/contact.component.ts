import { Component, Input, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { ContactService } from '../contact.service';

interface Contact {
  name: string;
  surname: string;
  phoneNumber: string;
  email: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgFor],
  template: `
    <div *ngFor="let contact of contacts" class="flexbox contactCard">
      <div class="flexbox contactCardHeader">
        <div class="flexbox contactCardHeaderTextContainer">
          <p class="contactCardHeaderText">{{ contact.name }}</p>
          <p class="contactCardHeaderText">{{ contact.surname }}</p>
        </div>
        <div class="flexbox deleteContactBtnContainer">
          <a class="flexbox btn deleteContactBtn">Löschen</a>
        </div>
      </div>
      <div class="flexbox contactCardMain">
        <p class="contactCardMainText">
          Telefonnummer: {{ contact.phoneNumber }}
        </p>
        <p class="contactCardMainText">Emailadresse: {{ contact.email }}</p>
      </div>
    </div>
  `,
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactService.getContacts().subscribe((contacts) => {
      this.contacts = contacts;
    });
  }
}
