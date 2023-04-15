import { Contact } from 'src/app/models/contact.model';
import { ContactService } from '../services/contact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-contacts',
  templateUrl: './public-contacts.component.html',
  styleUrls: ['./public-contacts.component.css']
})

export class PublicContactsComponent implements OnInit {
  contacts: Contact[] = [];
  constructor(private ContactService: ContactService) { }


  ngOnInit(): void {
    this.ContactService.getAllPosts()
    .subscribe(
      response => {
        this.contacts = response;
      }
    );
  }
}


