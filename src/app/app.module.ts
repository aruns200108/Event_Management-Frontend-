import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BdayComponent } from './wedding/bday.component';
import { CeremonyComponent } from './social/ceremony.component';
import { NewbornComponent } from './coporate/newborn.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AllItemsComponent } from './all-items/all-items.component';
import { AddItemsComponent } from './add-items/add-items.component';
import { EditItemsComponent } from './edit-items/edit-items.component';
import { NewbornItemsComponent } from './newborn-items/newborn-items.component';
import { NewbornAddItemsComponent } from './newborn-add-items/newborn-add-items.component';
import { CeremonyItemsComponent } from './ceremony-items/ceremony-items.component';
import { CeremonyAddItemsComponent } from './ceremony-add-items/ceremony-add-items.component';
import { CeremonyEditItemsComponent } from './ceremony-edit-items/ceremony-edit-items.component';
import { ViewBdayComponent } from './view-bday/view-bday.component';
import { ViewCeremonyComponent } from './view-ceremony/view-ceremony.component';
import { ViewNewbornComponent } from './view-newborn/view-newborn.component';
import { SearchPipe } from './pipes/search.pipe';
import { DeleteConfirmComponent } from './delete-confirm/delete-confirm.component';
import { BdaybookingComponent } from './bdaybooking/bdaybooking.component';
import { CeremonybookingComponent } from './ceremonybooking/ceremonybooking.component';
import { NewbornbookingComponent } from './newbornbooking/newbornbooking.component';
import { ClientdetailsComponent } from './clientdetails/clientdetails.component';
import { ClientsComponent } from './clients/clients.component';
import { AdminsPageComponent } from './admins-page/admins-page.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewbornsearchPipe } from './pipes/newbornsearch.pipe';
import { ClientsPipe } from './pipes/clients.pipe';
import { CeremonysearchPipe } from './pipes/ceremonysearch.pipe';
import { ClientdetaildeleteConfirmComponent } from './clientdetaildelete-confirm/clientdetaildelete-confirm.component';
import { EventComponent } from './event/event.component';
import { AboutComponent } from './about/about.component';
import { NavbartwoComponent } from './navbartwo/navbartwo.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BdayComponent,
    CeremonyComponent,
    NewbornComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    AdminLoginComponent,
    AdminRegisterComponent,
    AdminDashboardComponent,
    AllItemsComponent,
    AddItemsComponent,
    EditItemsComponent,
    NewbornItemsComponent,
    NewbornAddItemsComponent,
    
    CeremonyItemsComponent,
    CeremonyAddItemsComponent,
    CeremonyEditItemsComponent,
    ViewBdayComponent,
    ViewCeremonyComponent,
    ViewNewbornComponent,
    SearchPipe,
    DeleteConfirmComponent,
    BdaybookingComponent,
    CeremonybookingComponent,
    NewbornbookingComponent,
    ClientdetailsComponent,
    ClientsComponent,
    AdminsPageComponent,
    FooterComponent,
    PageNotFoundComponent,
    NewbornsearchPipe,
    ClientsPipe,
    CeremonysearchPipe,
    ClientdetaildeleteConfirmComponent,
    EventComponent,
    AboutComponent,
    NavbartwoComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
