import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  private apiurl='http://localhost:3000/api/suppliers';
  constructor(private http:HttpClient) { }

  getsupplier(){
    return this.http.get(this.apiurl);
  }

  addsupplier(supplier:any){
    return this.http.post(this.apiurl,supplier);
  }

  updatesupplier(id:string,supplier:any){
    return this.http.put(`${this.apiurl}/${id}`,supplier);
  }

  deletesupplier(id:string){
    return this.http.delete(`${this.apiurl}/${id}`);
  }
}
