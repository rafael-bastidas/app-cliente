import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './cliente/home/home.component';
import { RegisterComponent } from './cliente/register/register.component';
import { HomeInitComponent } from './cliente/home-init/home-init.component';
import { LoginComponent } from './cliente/login/login.component';
import { RecoveryKeyComponent } from './cliente/recovery-key/recovery-key.component';
import { RegisterOwnerComponent } from './cliente/register-owner/register-owner.component';
import { HomeOwnerComponent } from './cliente/home-owner/home-owner.component';
import { PaymentsComponent } from './cliente/payments/payments.component';
import { FormatsComponent } from './cliente/formats/formats.component';
import { ConfigurationComponent } from './cliente/configuration/configuration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GenericService } from './servicios/generic.service';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './cliente/about/about.component';
import { HistoryUserComponent } from './cliente/history-user/history-user.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    HomeInitComponent,
    LoginComponent,
    RecoveryKeyComponent,
    RegisterOwnerComponent,
    HomeOwnerComponent,
    PaymentsComponent,
    FormatsComponent,
    ConfigurationComponent,
    AboutComponent,
    HistoryUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    GenericService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
