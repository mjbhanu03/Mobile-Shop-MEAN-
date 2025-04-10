import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiUrl = 'http://localhost:3000/customer';
  constructor(private http: HttpClient) { }

  getCustomer() {
    return this.http.get<any>(this.apiUrl)
  }
}
