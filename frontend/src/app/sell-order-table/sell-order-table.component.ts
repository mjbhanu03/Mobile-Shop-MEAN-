import { NgFor, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SellOrderTableService } from '../service/sell-order-table.service';

@Component({
  selector: 'app-sell-order-table',
  standalone: true,
  imports: [HttpClientModule, FormsModule, NgFor, NgIf],
  templateUrl: './sell-order-table.component.html',
  styleUrls: ['./sell-order-table.component.scss'],
  providers: [SellOrderTableService],
})
export class SellOrderTableComponent implements OnInit {

  sellorders: any[] = [];
  sellorder = {
    orderDate: '',
    itemId: null,
    customerId: null,
    shippingAddress: '',
    quantity: null,
    totalAmount: null
  };
  editing = false;
  editId =  null;

  constructor(private sellOrderTableService: SellOrderTableService) {}

  ngOnInit() {
    this.loadsellorder();
  }

  loadsellorder() {
    this.sellOrderTableService.getsellorder().subscribe((data: any) => {
      this.sellorders = data;
    });
  }

  search(name:any){
    if(name == ''){
      this.loadsellorder()
    }else{
      this.sellorders = []
      this.sellOrderTableService.search(name).subscribe((data:any)=>{
        this.sellorders = data;
      })
    }
  }

  savesellorder() {
    if (this.editing) {
      this.sellOrderTableService.updatesellorder(this.editId, this.sellorder).subscribe(() => {
        this.loadsellorder();
        this.resetForm();
      })
    } else {
      this.sellOrderTableService.addsellorder(this.sellorder).subscribe(() => {

        this.loadsellorder();
        this.resetForm();
      })
    }
  }

  editsellorder(id: any, cus: any) {
    this.sellorder = { ...cus };
    this.editing = true;
    this.editId = id;
  }

  deletesellorder(id: string) {
    this.sellOrderTableService.deletesellorder(id).subscribe(() => {
      this.loadsellorder();
    });
  }

  resetForm() {
    this.sellorder = { orderDate: '', itemId: null, customerId: null, shippingAddress: '', quantity: null, totalAmount: null};
    this.editing = false;
    this.editId = null;
  }

  // searchCustomer() {
  //   const query = this.searchQuery.toLowerCase();
  //   this.sellorder = this.customers.filter(cus =>
  //     cus.name.toLowerCase().includes(query)
  //   );
  // }
}
