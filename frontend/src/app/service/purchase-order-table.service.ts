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

  search(name: any){
    return this.http.get(`${this.apiUrl}/${name}`)
  }

  addPurchase(data: any){
    return this.http.post(`${this.apiUrl}/add`, data)
  }

  deletePurchase(id:any){
    return this.http.delete(`${this.apiUrl}/delete/${id}`)
  }

  updatePurchase(id: any, data: any){
    return this.http.put(`${this.apiUrl}/update/${id}`, data)
  }
}
