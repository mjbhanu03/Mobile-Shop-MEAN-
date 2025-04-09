import { Component } from '@angular/core';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-customer',
  standalone: true,  // Valid for Angular 14+ standalone components
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],  // Corrected plural form
  providers: [CustomerService]
})
export class CustomerComponent {
  // Component logic goes here if needed
}
