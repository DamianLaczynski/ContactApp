import { PublicContact } from 'src/app/models/publicContact.model';
import { ContactService } from '../services/contact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-contacts',
  templateUrl: './public-contacts.component.html',
  styleUrls: ['./public-contacts.component.css']
})

export class PublicContactsComponent implements OnInit {
  contacts: PublicContact[] = [];
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


