import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact.model';
import { UpdateContact } from '../models/updateContact.model';
import { NewContact } from '../models/newContact.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URL = environment.apiUrl;
  constructor(private http: HttpClient) { }

  storeToken(tokenValue: string){
    localStorage.setItem('token', tokenValue)
  }

  getToken(){
    return localStorage.getItem('token')
  }

  isLogginIn(): boolean{
    return !!localStorage.getItem('token');
  }

  //metoda wysyłająca żądanie POST z danymi do logowania użytkownika
  login(loginModel: any): Observable<any>{
    return this.http.post<any>(this.API_URL + '/api/account/login', loginModel)
  }

  //metoda wysyłająca żądanie GET o Kontakt o danym id
  // !!! tylko dla zalogowyanych 
  getContactById(id: number): Observable<Contact> {
    return this.http.get<Contact>(this.API_URL + '/api/contact/' + id, { headers: this.getHeaders() });
  }

  //metoda wysyłająca żądanie DELETE dla Kontakt o danym id
  // !!! tylko dla zalogowyanych 
  deleteContactById(id: number | undefined): Observable<Contact> {
    return this.http.delete<Contact>(this.API_URL + '/api/contact/' + id, { headers: this.getHeaders() });
  }

  //metoda wysyłająca żądanie PUT dla Kontakt o danym id
  // !!! tylko dla zalogowyanych 
  updateContact(id: number | undefined, updateContact: UpdateContact): Observable<Contact> {
    return this.http.put<Contact>(this.API_URL + '/api/contact/' + id, updateContact, { headers: this.getHeaders() });
  }

  //metoda wysyłająca żądanie POST z nowym Kontaktem
  // !!! tylko dla zalogowyanych 
  postNewContact(newContact: NewContact): Observable<Contact> {
    return this.http.post<Contact>(this.API_URL + '/api/account/register', newContact, { headers: this.getHeaders() });
  }

  //metoda zwracająca nagłówek z tokenem do autoryzacji użytkownika
  getHeaders(): HttpHeaders{
    return new HttpHeaders({
      'Authorization': 'Bearer ' + this.getToken()
    });
  }
}
