import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  template: `
  <div class="flexbox contactCard">
    <div class="flexbox contactCardHeader">
      <div class="flexbox contactCardHeaderTextContainer">
          <p class="contactCardHeaderText">{{ name }}</p>
          <p class="contactCardHeaderText">{{ surname }}</p>
      </div>
      <div class="flexbox deleteContactBtnContainer"> 
          <a class="flexbox btn deleteContactBtn">Löschen</a>
      </div>
    </div>
    <div class="flexbox contactCardMain">
      <p class="contactCardMainText">Telefonnummer: {{ phoneNumber }}</p>
      <p class="contactCardMainText">Emailadresse: {{ email }}</p>
    </div>
  </div>
  `,
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  name = "Name";
  surname = "Nachname";
  phoneNumber = "079 690 56 05";
  email = "J.Lehner.inf21@stud.bbbaden.ch";
}
