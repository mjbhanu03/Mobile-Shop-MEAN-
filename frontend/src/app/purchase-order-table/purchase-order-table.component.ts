import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PurchaseOrderTableService } from '../service/purchase-order-table.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-purchase-order-table',
  standalone: true,
  imports: [HttpClientModule, NgFor],
  templateUrl: './purchase-order-table.component.html',
  styleUrl: './purchase-order-table.component.scss'
})
export class PurchaseOrderTableComponent implements OnInit{
  constructor (private purchaseService: PurchaseOrderTableService ){}

  purchaseOrders: any[] = []
  purchaseOrder = {
    purchaseOrder: null,
    orderDate: '',
    supplierId: null,
    totalAmount: null
  };

  ngOnInit(){
    this.loadPurchase()
  }

  loadPurchase(){
    this.purchaseService.getPurchase().subscribe((data: any) => {
      this.purchaseOrders = data
    })
  }
}
