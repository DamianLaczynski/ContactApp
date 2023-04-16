import { Component, OnInit } from '@angular/core';
import { NewContact } from '../models/newContact.model';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit{
  roles = [
    {id: 1, name: "Służbowy"},
    {id: 2, name: "Prywatny"},
    {id: 3, name: "Inny"}
 ];

 constructor(private route: ActivatedRoute, private authService: AuthService) { }

 newContact: NewContact = {
  name: '',
  surname: '',
  email: '',
  roleID: 0,
  phoneNumber: '',
  dateOfBirth: "",
  password: '',
  confirmPassword: ''
}

  ngOnInit(): void {
   
  }

  onSubmit(): void {
    console.log(this,this.newContact);
    this.authService.postNewContact(this.newContact)
    .subscribe(response => {
      alert('Success');
    })
  }
}
