import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import {  RouterModule } from '@angular/router';
import { ContactsComponent } from '../contacts.component';


@NgModule({
  declarations: [
    ContactsComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    RouterModule
  ]
})
export class ContactsModule { }
