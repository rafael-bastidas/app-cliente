import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationComponent } from './cliente/configuration/configuration.component';
import { FormatsComponent } from './cliente/formats/formats.component';
import { HomeInitComponent } from './cliente/home-init/home-init.component';
import { HomeOwnerComponent } from './cliente/home-owner/home-owner.component';
import { HomeComponent } from './cliente/home/home.component';
import { LoginComponent } from './cliente/login/login.component';
import { PaymentsComponent } from './cliente/payments/payments.component';
import { RecoveryKeyComponent } from './cliente/recovery-key/recovery-key.component';
import { RegisterOwnerComponent } from './cliente/register-owner/register-owner.component';
import { RegisterComponent } from './cliente/register/register.component';

const routes: Routes = [
  { 
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: HomeInitComponent },
      { path: 'register', component: RegisterComponent },
      { path: ':id/login', component: LoginComponent },
      { path: ':id/recovery-password', component: RecoveryKeyComponent },
      { path: ':id/register-owner', component: RegisterOwnerComponent },
      { path: ':id/home-owner', component: HomeOwnerComponent },
      { path: ':id/payments', component: PaymentsComponent },
      { path: ':id/formats', component: FormatsComponent },
      { path: ':id/configurations', component: ConfigurationComponent },
    ]
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
