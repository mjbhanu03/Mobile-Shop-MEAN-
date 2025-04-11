import { NgFor } from '@angular/common';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
=======
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PurchaseOrderTableService } from '../service/purchase-order-table.service';
>>>>>>> 97deeac2618ee734410afb4456030eab0469d709

@Component({
  selector: 'app-purchase-order-table',
  standalone: true,
<<<<<<< HEAD
  imports: [HttpClientModule, NgFor, FormsModule],
=======
  imports: [HttpClientModule,NgFor,FormsModule],
>>>>>>> 97deeac2618ee734410afb4456030eab0469d709
  templateUrl: './purchase-order-table.component.html',
  styleUrl: './purchase-order-table.component.scss'
})
export class PurchaseOrderTableComponent {
  purchases:any[]=[];
  purchase={purchase_id:null,supplier_id:null,order_date:null,quantity:null,total_amt:null};
  editing=false;
  editingid:string|null=null;

<<<<<<< HEAD
  purchaseOrders: any[] = []
  purchaseOrder = {
    purchaseOrder: null,
    orderDate: '',
    supplierId: null,
    totalAmount: null
  };
  editId = null;
=======
  constructor(private purchaseserv:PurchaseOrderTableService){}
>>>>>>> 97deeac2618ee734410afb4456030eab0469d709

  OnInit(){
    this.loadpurchase();
  }

  loadpurchase(){
    this.purchaseserv.getpurchase().subscribe((data:any)=>{
      this.purchases=data;
    })
  }

<<<<<<< HEAD
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
=======
  savepurchase(){
    if(this.editing){
      this.purchaseserv.update(this.editingid!,this.purchase).subscribe(()=>{
        this.loadpurchase();
        this.resetpurchase();
      })
    }else{
      this.purchaseserv.addpurchase(this.purchase).subscribe(()=>{
        this.loadpurchase();
        this.resetpurchase();
>>>>>>> 97deeac2618ee734410afb4456030eab0469d709
      })
    }
  }

<<<<<<< HEAD
  deleteOrder(id: any){
    this.purchaseService.deletePurchase(id).subscribe(()=> this.loadPurchase())
  }
  updateOrder(id: any, data: any){
    this.purchaseOrder = {...data};
    this.editId = id;
  }
=======
  updatepurchase(purchase:any){
    this.purchase={purchase_id:purchase.purchase_id,supplier_id:purchase.supplier_id,order_date:purchase.order_date,quantity:purchase.quantity,total_amt:purchase.total_amt}
    this.editing=true;
    this.editingid=purchase._id;
  }

  deletepuchase(id:string){
    this.purchaseserv.delete(id).subscribe(()=>{
      this.loadpurchase();
    })
  }

  resetpurchase(){
    this.purchase={purchase_id:null,supplier_id:null,order_date:null,quantity:null,total_amt:null}
    this.editing=false;
    this.editingid=null;
  }
  
>>>>>>> 97deeac2618ee734410afb4456030eab0469d709
}
