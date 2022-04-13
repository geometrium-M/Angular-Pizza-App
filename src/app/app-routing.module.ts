import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { NotFoundComponent } from "./pages/not-found/not-found.component";

 
import { MenuComponent } from "./pages/menu/menu.component";


const routes: Routes = [
    {
        path:'',
        loadChildren: () => import ('./pages/home/home.module').then(m=>m.HomeModule)
    },
    
    {
        path:'about',
        loadChildren: () => import('./pages/about/about.module').then(m=>m.AboutModule)
    },
    {
        path:'services',
        loadChildren: () => import ('./pages/services/services/services.module').then(m=>m.ServicesModule)
    },
    {
        path:'menu',
        loadChildren: () => import ('./pages/menu/menu.module').then(m=>m.MenuModule)
    },
    {
        path:'contacts',
        loadChildren: () => import ('./pages/contacts/contacts/contacts.module').then(m=>m.ContactsModule)
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