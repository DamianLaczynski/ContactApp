import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  API_URL = environment.apiUrl;

  getAllPosts(): Observable<Contact[]> {
   return this.http.get<Contact[]>(this.API_URL + '/api/public-contact');
  }
}

