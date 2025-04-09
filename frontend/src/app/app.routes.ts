import { Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import { SupplierComponent } from './supplier/supplier.component';
import { CompanyComponent } from './company/company.component';
import { SellOrderTableComponent } from './sell-order-table/sell-order-table.component';
import { PurchaseOrderTableComponent } from './purchase-order-table/purchase-order-table.component';
import { ItemComponent } from './item/item.component';

export const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'supplier', component: SupplierComponent},
  {path: 'company', component: CompanyComponent},
  {path: 'sell', component: SellOrderTableComponent},
  {path: 'purchase', component: PurchaseOrderTableComponent},
  {path: 'item', component: ItemComponent},
];
