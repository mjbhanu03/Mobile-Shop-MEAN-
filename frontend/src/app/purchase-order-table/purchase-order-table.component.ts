import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PurchaseOrderTableService } from '../service/purchase-order-table.service';

@Component({
  selector: 'app-purchase-order-table',
  standalone: true,
  imports: [HttpClientModule,NgFor,FormsModule],
  templateUrl: './purchase-order-table.component.html',
  styleUrl: './purchase-order-table.component.scss'
})
export class PurchaseOrderTableComponent {
  purchases:any[]=[];
  purchase={purchase_id:null,supplier_id:null,order_date:null,quantity:null,total_amt:null};
  editing=false;
  editingid:string|null=null;

  constructor(private purchaseserv:PurchaseOrderTableService){}

  OnInit(){
    this.loadpurchase();
  }

  loadpurchase(){
    this.purchaseserv.getpurchase().subscribe((data:any)=>{
      this.purchases=data;
    })
  }

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
      })
    }
  }

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
  
}
