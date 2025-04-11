import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderTableService {
  private apiUrl = 'http://localhost:3000/purchaseorder';
  constructor(private http: HttpClient) { }

  getPurchase(){
    return this.http.get(this.apiUrl)
  }
}
