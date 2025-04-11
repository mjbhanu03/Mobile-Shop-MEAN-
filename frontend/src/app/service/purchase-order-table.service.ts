import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderTableService {
  private apiurl="http://localhost:3000/api/purchases"
  constructor(private http:HttpClient) { }

  getpurchase(){
    return this.http.get(this.apiurl);
  }

  addpurchase(purchase:any){
    return this.http.post(this.apiurl,purchase);
  }

  update(id:string,purchase:any){
    return this.http.put(`${this.apiurl}/${id}`,purchase);
  }

  delete(id:string){
    return this.http.delete(`${this.apiurl}/${id}`);
  }
}
