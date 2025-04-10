import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
  
@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [HttpClientModule, NgFor, FormsModule],
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],  // Corrected plural form
  providers: [CustomerService]
})
export class CustomerComponent implements OnInit{

  customers: any[] = [];
  customer = {
    name: '',
    address: '',
    number: null,
    email: ''
  }
  isEdit = false;
  editId = '';

 constructor(private customerService: CustomerService) {}

  ngOnInit(){
    this.getCustomer()
  }

  resetCustomer(){
    this.customer = {
      name: '',
      address: '',
      number: null,
      email: ''
    };
  }

 getCustomer(){
  this.customerService.getCustomer().subscribe(data => this.customers = data)
 }

 addCustomer(){

  if(this.isEdit){
    this.customerService.updateCustomer(this.editId, this.customer).subscribe(()=>{
      this.getCustomer()
      this.resetCustomer()
      this.isEdit = false;
    })
  }
  else{
    this.customerService.addCustomer(this.customer).subscribe(()=>{
      this.getCustomer();
      this.resetCustomer();
    })
  }
 }

 deleteCustomer(id: string){
  this.customerService.deleteCustomer(id).subscribe(()=>{
    this.getCustomer()
  })
 }

 updateCustomer(id: any, customer: any){
  this.customer = {...customer }
  this.isEdit = true;
  this.editId = id;
 }

}
