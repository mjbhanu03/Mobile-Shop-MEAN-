import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiurl="http://localhost:3000/api/items";

  constructor(private http:HttpClient) { }

  getitem(){
    return this.http.get(this.apiurl);
  }

  search(name: any){
    return this.http.get(`${this.apiurl}/${name}`)
  }

  additem(item:any){
    return this.http.post(`${this.apiurl}/add`,item);
  }

  update(id:string,item:any){
    return this.http.put(`${this.apiurl}/update/${id}`,item);
  }

  delete(id:string){
    return this.http.delete(`${this.apiurl}/delete/${id}`);
  }
}
