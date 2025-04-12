import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SellOrderTableService {

  private apiUrl = 'http://localhost:3000/sellorder';
  constructor(private http: HttpClient) { }

  getsellorder(){
    return this.http.get(this.apiUrl);
}


search(name: any){
  return this.http.get(`${this.apiUrl}/${name}`)
}


addsellorder(order: any) {
  return this.http.post(`${this.apiUrl}/add`, order);
}

updatesellorder(id: any, sellorder: any) {
    return this.http.put(`${this.apiUrl}/update/${id}`, sellorder);
  }

deletesellorder(id: string) {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }
}
