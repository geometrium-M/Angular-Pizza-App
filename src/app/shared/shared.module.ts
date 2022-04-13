import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavigationComponent } from "./navigation/navigation.component";
import { PizzaCardComponent } from "./pizza-card/pizza-card.component";
import { SocialComponent } from "./social/social.component";
import { RouterModule } from "@angular/router";



import { NotFoundComponent } from "../pages/not-found/not-found.component";









@NgModule ({
    declarations: [
        NavigationComponent,
        PizzaCardComponent,
        SocialComponent,

        
       
        
       
        NotFoundComponent,
       
    ],
    imports: [
        CommonModule,
        RouterModule,
        
    ],
    exports: [
        
        PizzaCardComponent,
        
        
       
        NotFoundComponent,
        

        NavigationComponent,
    
        SocialComponent
    ],
})
export class SharedModule {}