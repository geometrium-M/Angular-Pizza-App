import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ServicesComponent } from "./services/services.component";
import  { AboutComponent } from "./about/about.component"

const routes: Routes = [
    {
        path:'home',
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