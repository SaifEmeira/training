import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from '../auth/components/login/login.component';

const routes: Routes = [
  { path: '', component: DashboardComponent ,children:[
    {path:"",redirectTo:"home",pathMatch:'full'},
  {path:"home",component:HomeComponent},
  
]


   },

   {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
