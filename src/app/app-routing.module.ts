import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoaderComponent } from './components/loader/loader.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { QuoteComponent } from './components/quote/quote.component';
import { QuotePageComponent } from './pages/quote-page/quote-page.component';
import { LockerScreenComponent } from './components/locker-screen/locker-screen.component';
import { LicenseesDashboardComponent } from './components/licensees-dashboard/licensees-dashboard.component';
import { ShipmentsComponent } from './pages/shipments/shipments.component';
import { HistoryQuoteComponent } from './components/history-quote/history-quote.component';
import { ViewLockersPageComponent } from './pages/view-lockers-page/view-lockers-page.component';
import { DetailsLockerComponent } from './components/details-locker/details-locker.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: DashboardPageComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'quote', component: QuotePageComponent },
  { path: 'locker', component: LockerScreenComponent },
  { path: 'licensees', component: LicenseesDashboardComponent },  
  { path: 'shipments', component: ShipmentsComponent },
  { path: 'history', component: HistoryQuoteComponent },
  { path: 'viewlockers', component: ViewLockersPageComponent },
  { path: 'details-locker', component: DetailsLockerComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
