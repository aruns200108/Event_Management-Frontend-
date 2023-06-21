import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BdayComponent } from './bday/bday.component';
import { CeremonyComponent } from './ceremony/ceremony.component';
import { NewbornComponent } from './newborn/newborn.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AllItemsComponent } from './all-items/all-items.component';
import { AddItemsComponent } from './add-items/add-items.component';
import { EditItemsComponent } from './edit-items/edit-items.component';
import { NewbornItemsComponent } from './newborn-items/newborn-items.component';
import { NewbornAddItemsComponent } from './newborn-add-items/newborn-add-items.component';
import { NewbornEditItemsComponent } from './newborn-edit-items/newborn-edit-items.component';
import { CeremonyItemsComponent } from './ceremony-items/ceremony-items.component';
import { CeremonyAddItemsComponent } from './ceremony-add-items/ceremony-add-items.component';
import { CeremonyEditItemsComponent } from './ceremony-edit-items/ceremony-edit-items.component';
import { ViewBdayComponent } from './view-bday/view-bday.component';
import { ViewCeremonyComponent } from './view-ceremony/view-ceremony.component';
import { ViewNewbornComponent } from './view-newborn/view-newborn.component';
import { BdaybookingComponent } from './bdaybooking/bdaybooking.component';
import { NewbornbookingComponent } from './newbornbooking/newbornbooking.component';
import { ClientdetailsComponent } from './clientdetails/clientdetails.component';
import { ClientsComponent } from './clients/clients.component';
import { AdminsPageComponent } from './admins-page/admins-page.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CeremonybookingComponent } from './ceremonybooking/ceremonybooking.component';
import { EventComponent } from './event/event.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
 
  {
    path:'dashboard',component:DashboardComponent
  },
  {
    path:'navbar',component:NavbarComponent
  },
  {
    path:'footer',component:FooterComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    //bday
    path:'wedding',component:BdayComponent
  },
  {
    //ceremony
     path:'social',component:CeremonyComponent
  },
  {
    //newborn
    path:'corporate',component:NewbornComponent
  },
  {
    path:'admin-login',component:AdminLoginComponent
  },
  {
    path:'admin-register',component:AdminRegisterComponent
  },
  {
    path:'admin-dashboard',component:AdminDashboardComponent
  },
  {
    path:'all-items',component:AllItemsComponent
  },
  {
    path:'add-items',component:AddItemsComponent
  },
  {
    path:'edit-items/:id',component:EditItemsComponent
  },
  {
    //newborn-items
    path:'corporate-items',component:NewbornItemsComponent
  },
  {
    //newborn-add-items
    path:'corporate-add-items',component:NewbornAddItemsComponent
  },
  {
    path:'newborn-edit-items',component:NewbornEditItemsComponent
  },
  {
    path:'social-items',component:CeremonyItemsComponent
  },
  {
    //ceremony-add-items
    path:'social-add-items',component:CeremonyAddItemsComponent
  },
  {
    path:'ceremony-edit-items',component:CeremonyEditItemsComponent
  },
  // {
  //   path:'view-bday/:id',component:ViewBdayComponent
  // },
  // {
  //   path:'view-ceremony/:id',component:ViewCeremonyComponent
  // },
  // {
  //   path:'view-newborn/:id',component:ViewNewbornComponent
  // },
  {
    // bdaybooking
   path:'weddingbooking',component:BdaybookingComponent
  },
  {
    //ceremonybooking
   path:'socialbooking',component:CeremonybookingComponent
  },
  {
    //newbornbooking
    path:'corporatebooking',component:NewbornbookingComponent
  },
  {
    path:'clientdetails',component:ClientdetailsComponent
  },
  {
    path:'clients',component:ClientsComponent
  },
  {
    path:'admins-page',component:AdminsPageComponent
  },
  {
    path:'events',component:EventComponent
  },
  {
    path:'**',component:PageNotFoundComponent
  },
  { 
    path: 'adminsDashboard', loadChildren: () => import('./admins-dashboard/admins-dashboard.module').then(m => m.AdminsDashboardModule) 
  },
  {
    path:'about',component:AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
