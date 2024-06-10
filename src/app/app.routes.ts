import { Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

export const routes: Routes = [
    {path:'',component:DashboardComponent},
    {path:'heroes',component:HeroesComponent},
    {path: 'detail/:id', component: HeroDetailComponent},
    {path:'dashboard',component:DashboardComponent}
];
