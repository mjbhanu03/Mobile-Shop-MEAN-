import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';



@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [HttpClientModule, NgFor],
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],  // Corrected plural form
  providers: [CustomerService]
})
export class CustomerComponent implements OnInit{

  customers: any[] = [];

 constructor(private customerService: CustomerService) {}

  ngOnInit(){
    this.getCustomer()
  }

 getCustomer(){
  this.customerService.getCustomer().subscribe(data => this.customers = data)
 }
}
