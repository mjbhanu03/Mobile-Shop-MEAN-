import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CompanyTableService {
  private apiUrl = 'http://localhost:3000/company'; // Update this

  constructor(private http: HttpClient) {}

  getCompanies() {
    return this.http.get(this.apiUrl);
  }

  addCompany(company: any) {
    return this.http.post(`${this.apiUrl}/add`, company);
  }

  updateCompany(id: any, company: any) {
    return this.http.put(`${this.apiUrl}/update/${id}`, company);
  }

  deleteCompany(id: any) {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }
}
