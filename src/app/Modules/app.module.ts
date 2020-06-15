import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from '../Components/AppComponent/app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from '../Components/DashboardComponent/Dashboard.Component';
import { RegisterComponent } from '../Components/RegisterComponent/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { PersonInfoComponent } from '../Components/PersonInfoComponent/person-info.component';


@NgModule({
  declarations: [AppComponent, DashboardComponent, RegisterComponent, PersonInfoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
