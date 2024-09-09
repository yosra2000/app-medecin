import { HttpClientModule } from '@angular/common/http'; // <-- Importez HttpClientModule ici
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module'; // <-- Importez AppRoutingModule ici
import { AppComponent } from './app.component';
import { ListePatientsComponent } from './liste-patients/liste-patients.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
@NgModule({
  declarations: [
    AppComponent,
    ListePatientsComponent,
    PatientDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule, 
    MatButtonModule, 
    HttpClientModule,
    RouterModule,
    AppRoutingModule ,
    MatSortModule,
    MatPaginatorModule,  // <-- Ajoutez ceci ici
    MatTableModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
