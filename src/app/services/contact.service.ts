import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PublicContact } from '../models/publicContact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  API_URL = environment.apiUrl;

  //metoda wysyłająca żądanie GET o wszystkie kontakty 
  //dla niezalogowanych, tylko niewrażliwe dane
  getAllPosts(): Observable<PublicContact[]> {
   return this.http.get<PublicContact[]>(this.API_URL + '/api/public-contact');
  }
  
}