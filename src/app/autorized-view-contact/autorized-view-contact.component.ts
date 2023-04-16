import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Contact } from '../models/contact.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateContact } from '../models/updateContact.model';

@Component({
  selector: 'app-autorized-view-contact',
  templateUrl: './autorized-view-contact.component.html',
  styleUrls: ['./autorized-view-contact.component.css']
})
export class AutorizedViewContactComponent implements OnInit {
  constructor(private route: ActivatedRoute , private authService: AuthService, private router: Router) {}
  contact: Contact | undefined;
  
  //pobranie szczegółów kontaktu
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        const id = params.get('id');

        if(id) {
          this.authService.getContactById(Number(id))
          .subscribe(
            response => {
              this.contact = response;
            }
          )
        }
      }
    ) 
  }

  onSubmit(): void {
    //tworzenie ciała żadania PUT
    const updateContact: UpdateContact = {
      name: this.contact?.name,
      surname: this.contact?.surname,
      email: this.contact?.email,
      roleID: this.contact?.roleID,
      phoneNumber: this.contact?.phoneNumber,
      dateOfBirth: this.contact?.dateOfBirth,

    }
    //aktualizowanie Kontaktu
    this.authService.updateContact(this.contact?.id,updateContact)
    .subscribe(response => {
      alert('Success');
      this.router.navigate(['contacts']);
    })
  }

  //usuwanie Kontaktu
  onDelete(): void {
    this.authService.deleteContactById(this.contact?.id)
    .subscribe(response =>
      {
        alert('Deleted');
        this.router.navigate(['contacts']);
      })
  }
}
