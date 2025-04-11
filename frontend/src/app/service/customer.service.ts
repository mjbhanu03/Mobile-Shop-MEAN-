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

  search(name: any){
    return this.http.get(`${this.apiUrl}/${name}`)
  }

  addCustomer(customer: any){
    return this.http.post(`${this.apiUrl}/add`, customer)
  }

  deleteCustomer(id: string){
    return this.http.delete(`${this.apiUrl}/delete/${id}`)
  }

  updateCustomer(id: string, customer: any){
    return this.http.put(`${this.apiUrl}/update/${id}`, customer)
  }
}
