import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListePatientsComponent } from './liste-patients/liste-patients.component';
import { LoginComponent } from './login/login.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';

// Importez vos composants ici

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'patients', component: ListePatientsComponent },
    { path: 'patients/:id', component: PatientDetailsComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
