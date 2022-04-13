import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { ServicesComponent } from "./pages/services/services.component";
import { AboutComponent } from "./pages/about/about.component" 
import { MenuComponent } from "./pages/menu/menu.component"
import { ContactsComponent } from "./pages/contacts/contacts.component"

const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    
    {
        path:'about',
        component: AboutComponent
    },
    {
        path:'services',
        component: ServicesComponent
    },
    {
        path:'menu',
        component: MenuComponent
    },
    {
        path:'contacts',
        component: ContactsComponent
    },
    {
        path:'**',
        component: NotFoundComponent
    }

];

@NgModule ({
    imports: [
        RouterModule.forRoot(routes)
    ]
})

export class AppRoutingModule {

}   