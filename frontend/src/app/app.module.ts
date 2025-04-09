import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes'


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent
  ],
  imports: [

    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule { }
