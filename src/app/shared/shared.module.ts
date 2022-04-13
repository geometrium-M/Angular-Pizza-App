import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavigationComponent } from "./navigation/navigation.component";
import { PizzaCardComponent } from "./pizza-card/pizza-card.component";
import { SocialComponent } from "./social/social.component";
import { RouterModule } from "@angular/router";


import { HomeComponent } from "../pages/home/home.component";
import { NotFoundComponent } from "../pages/not-found/not-found.component";









@NgModule ({
    declarations: [
        NavigationComponent,
        PizzaCardComponent,
        SocialComponent,

        HomeComponent,
       
        
       
        NotFoundComponent,
       
    ],
    imports: [
        CommonModule,
        RouterModule,
        
    ],
    exports: [
        HomeComponent,
        PizzaCardComponent,
        
        
       
        NotFoundComponent,
        

        NavigationComponent,
    
        SocialComponent
    ],
})
export class SharedModule {}