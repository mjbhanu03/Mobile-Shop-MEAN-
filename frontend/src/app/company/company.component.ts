import { NgFor, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CompanyTableService } from '../service/company.service';

@Component({
  selector: 'app-company-table',
  standalone: true,
  imports: [HttpClientModule, FormsModule, NgFor, NgIf],
  templateUrl:'company.component.html',
  styleUrls: ['company.component.scss'],
  providers: [CompanyTableService],
})
export class CompanyComponent implements OnInit {

  companies: any[] = [];

  company = {
    companyId: '',
    companyName: '',
    address: '',
    contactno: ''
  };

  editing: boolean = false;
  editId: string | null = null;

  constructor(private companyService: CompanyTableService) {}

  ngOnInit():
  void
  {
    this.loadCompanies();
  }

  loadCompanies():
  void
  {
    this.companyService.getCompanies().subscribe({
      next: (data: any) => this.companies = data,
      error: (err) => console.error('Error loading companies:', err)
    });
  }

  search(name:any){
    if(name == ''){
      this.loadCompanies()
    }else{
      this.companies = []
      this.companyService.search(name).subscribe((data:any)=>{
        this.companies = data;
      })
    }
  }

  saveCompany():
   void {
    if (this.editing && this.editId !== null)
      {
      this.companyService.updateCompany(this.editId, this.company).subscribe({
        next: () => {
          this.loadCompanies();
          this.resetForm();
        },
        error: (err) => console.error('Error updating company:', err)
      });
    }
     else
     {
      this.companyService.addCompany(this.company).subscribe({
        next: () => {
          this.loadCompanies();
          this.resetForm();
        },
        error: (err) => console.error('Error adding company:', err)
      });
    }
  }

  editCompany(id: string, comp: any):
   void {
    this.company = { ...comp };
    this.editing = true;
    this.editId = id;
  }
  deleteCompany(id: string):
  void
   {
    this.companyService.deleteCompany(id).subscribe({
      next: () => this.loadCompanies(),
      error: (err) => console.error('Error deleting company:', err)
    });
  }

  resetForm():
  void
  {
    this.company =
    {
      companyId: '',
      companyName: '',
      address: '',
      contactno: ''
    };
    this.editing = false;
    this.editId = null;
  }
}
