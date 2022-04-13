import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MenuModule } from './pages/menu/menu.module';





@NgModule({
  declarations: [
    AppComponent
    
 
    
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    SharedModule,
    MenuModule
    
  ],

  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
