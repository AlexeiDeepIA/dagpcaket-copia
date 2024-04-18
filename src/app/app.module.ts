import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthLoginService } from './_services/users/auth-login.service';
import { CatchTokenService } from './_services/users/catch-token.service';
import { AuthRoutesService } from './_services/auth-routes.service';
import { BaseChartDirective } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoaderComponent } from './components/loader/loader.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { SettingsComponentComponent } from './components/settings-component/settings-component.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { AccountComponent } from './components/account/account.component';
import { AddressComponent } from './components/address/address.component';
import { PinComponent } from './components/pin/pin.component';
import { PasswordComponent } from './components/password/password.component';
import { QuoteComponent } from './components/quote/quote.component';
import { QuotePageComponent } from './pages/quote-page/quote-page.component';
import { LockerScreenComponent } from './components/locker-screen/locker-screen.component';
import { LicenseesDashboardComponent } from './components/licensees-dashboard/licensees-dashboard.component';
import { ShipmentStatusComponent } from './components/shipment-status/shipment-status.component';
import { ShipmentsComponent } from './pages/shipments/shipments.component';
import { HistoryQuoteComponent } from './components/history-quote/history-quote.component';
import { AdminLockersComponent } from './components/admin-lockers/admin-lockers.component';
import { ViewLockersPageComponent } from './pages/view-lockers-page/view-lockers-page.component';
import { DetailsLockerComponent } from './components/details-locker/details-locker.component';
import { ShipmentsSendedComponent } from './components/shipments-sended/shipments-sended.component';
import { PackingComponent } from './components/packing/packing.component';
import { ServicesComponent } from './components/services/services.component';
import { RechargesComponent } from './components/recharges/recharges.component';
import { AdminResumeComponent } from './components/admin-resume/admin-resume.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AdminShipmentsComponent } from './components/admin-shipments/admin-shipments.component';
import { AdminPackingComponent } from './components/admin-packing/admin-packing.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SidebarComponent,
    SignupComponent,
    LoaderComponent,
    DashboardPageComponent,
    SettingsComponentComponent,
    SettingsComponent,
    AccountComponent,
    AddressComponent,
    PinComponent,
    PasswordComponent,
    QuoteComponent,
    QuotePageComponent,
    LockerScreenComponent,
    LicenseesDashboardComponent,
    ShipmentStatusComponent,
    ShipmentsComponent,
    HistoryQuoteComponent,
    AdminLockersComponent,
    ViewLockersPageComponent,
    DetailsLockerComponent,
    ShipmentsSendedComponent,
    PackingComponent,
    ServicesComponent,
    RechargesComponent,
    AdminResumeComponent,
    AdminPageComponent,
    AdminShipmentsComponent,
    AdminPackingComponent    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BaseChartDirective      
  ],
  providers: [
    AuthLoginService, AuthRoutesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CatchTokenService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
