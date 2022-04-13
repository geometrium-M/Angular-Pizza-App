import { NgModule } from "@angular/core";
import { NavigationComponent } from "./navigation/navigation.component";
import { PizzaCardComponent } from "./pizza-card/pizza-card.component";
import { SocialComponent } from "./social/social.component";

import { HomeComponent } from "../pages/home/home.component";


import { ServicesComponent } from "../pages/services/services.component";
import { NotFoundComponent } from "../pages/not-found/not-found.component";
import { MenuComponent } from "../pages/menu/menu.component";

import { CommonModule } from "@angular/common";

import { RouterModule } from "@angular/router";



@NgModule ({
    declarations: [
        NavigationComponent,
        PizzaCardComponent,
        SocialComponent,

        HomeComponent,
       
        
        ServicesComponent,
        NotFoundComponent,
        MenuComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        HomeComponent,
        
        
        ServicesComponent,
        NotFoundComponent,
        MenuComponent,

        NavigationComponent,
    
        SocialComponent
    ],
})
export class SharedModule {}