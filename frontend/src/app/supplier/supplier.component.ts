import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SupplierService } from '../service/supplier.service';

@Component({
  selector: 'app-supplier',
  standalone: true,
  imports: [HttpClientModule,NgFor,FormsModule],
  templateUrl: './supplier.component.html',
  styleUrl: './supplier.component.scss'
})
export class SupplierComponent {
  suppliers:any[]=[];
  supplier={supplier_id:null,supplier_name:'',contact_info:null,address:'',company_id:null}
  filtersupplier:any[]=[];
  searchQuery:string='';
  editing=false;
  editingid:string|null=null;

  constructor(private supplierser:SupplierService){}

  OnInit(){
    this.loadsupplier();
  }


  loadsupplier(){
    this.supplierser.getsupplier().subscribe((data:any)=>{
      this.suppliers=data;
    })
  }

  searchsupplier(){
    this.filtersupplier=this.suppliers.filter(sup=>sup.supplier_name.includes(this.searchQuery))
  }

  savesupplier(){
    if(this.editing){
      this.supplierser.updatesupplier(this.editingid!,this.supplier).subscribe(()=>{
        this.loadsupplier();
        this.resetsupplier();
      })
    }else{
      this.supplierser.addsupplier(this.supplier).subscribe(()=>{
        this.loadsupplier();
        this.resetsupplier();
      })
    }
  }

  updatesuppliers(supplier:any){
    this.supplier={supplier_id:supplier.supplier_id,supplier_name:supplier.supplier_name,contact_info:supplier.contact_info,address:supplier.address,company_id:supplier.company_id};

    this.editing=true;
    this.editingid=supplier._id;
  }

  deletesupplierss(id:string){
    this.supplierser.deletesupplier(id).subscribe(()=>{
      this.loadsupplier();
    })
  }

  resetsupplier(){
    this.supplier={supplier_id:null,supplier_name:'',contact_info:null,address:'',company_id:null}
    this.editing=false;
    this.editingid=null
  }
}
