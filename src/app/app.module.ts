import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { AboutComponent } from './pages/about/about.component'; 
import { SocialComponent } from './shared/social/social.component'; 
import { MenuComponent } from './pages/menu/menu.component'; 
import { ContactsComponent } from './pages/contacts/contacts.component'; 


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    NavigationComponent,
    AboutComponent,
    SocialComponent,
    MenuComponent,
    ContactsComponent,
   
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
