import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TreeViewModule } from './Treeview/treeview.module';
import { AddressBookModule } from './AddressBook/address-book.module';

import { routes } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    TreeViewModule,
    AddressBookModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }