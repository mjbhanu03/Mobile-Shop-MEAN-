import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PurchaseOrderTableService } from '../service/purchase-order-table.service';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-purchase-order-table',
  standalone: true,
  imports: [HttpClientModule, NgFor, FormsModule],
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
  editId = null;

  ngOnInit(){
    this.loadPurchase()
  }

  loadPurchase(){
    this.purchaseService.getPurchase().subscribe((data: any) => {
      this.purchaseOrders = data
    })
  }

  search(name:any){
    if(name == ''){
      this.loadPurchase()
    }else{
      this.purchaseOrders = []
      this.purchaseService.search(name).subscribe((data:any)=>{
        this.purchaseOrders = data;
      })
    }
  }


  resetFields(){
  this.purchaseOrder = {
      purchaseOrder: null,
      orderDate: '',
      supplierId: null,
      totalAmount: null
    };
    this.editId = null
  }

  savePurchase(){
    if(this.editId == null){

      this.purchaseService.addPurchase(this.purchaseOrder).subscribe(()=>{
        this.loadPurchase()
        this.resetFields()
      })
    }else{
      this.purchaseService.updatePurchase(this.editId, this.purchaseOrder).subscribe(()=>{
        this.loadPurchase()
        this.resetFields()
      })
    }
  }

  deleteOrder(id: any){
    this.purchaseService.deletePurchase(id).subscribe(()=> this.loadPurchase())
  }
  updateOrder(id: any, data: any){
    this.purchaseOrder = {...data};
    this.editId = id;
  }
}
