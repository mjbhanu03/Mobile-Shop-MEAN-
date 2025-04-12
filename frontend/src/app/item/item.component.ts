import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemService } from '../service/item.service';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [NgFor,FormsModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent implements OnInit {

    items:any[]=[];
    item={item_id:null,item_name:'',quantity:null,price:null,company_id:null,purchase_id:null,description:''}
    editing=false;
    editing_id:string|null=null;

    constructor(private itemServ:ItemService){}

   ngOnInit(){
    this.loaditem();
   }

   loaditem(){
    return this.itemServ.getitem().subscribe((data:any)=>{
      this.items=data;
    })
   }

   search(name:any){
    if(name == ''){
      this.loaditem()
    }else{
      this.items = []
      this.itemServ.search(name).subscribe((data:any)=>{
        this.items = data;
      })
    }
  }



   saveitem(){
    if(this.editing){
      this.itemServ.update(this.editing_id!,this.item).subscribe(()=>{
        this.loaditem();
        this.resetitem();
      })
    }else{
      this.itemServ.additem(this.item).subscribe(()=>{
        this.loaditem();
        this.resetitem();
      })
    }
   }

   updateitem(item:any){
    this.item={item_id:item.item_id,item_name:item.item_name,quantity:item.quantity,price:item.price,company_id:item.company_id,purchase_id:item.purchase_id,description:item.description}
    this.editing=true;
    this.editing_id=item._id;
   }

   deleteitem(id:string){
    this.itemServ.delete(id).subscribe(()=>{
      this.loaditem();
    })
   }
   resetitem(){
    this.item={item_id:null,item_name:'',quantity:null,price:null,company_id:null,purchase_id:null,description:''}
    this.editing=false;
    this.editing_id=null
   }
}
