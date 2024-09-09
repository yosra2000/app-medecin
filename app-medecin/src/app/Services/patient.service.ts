import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../models/Patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  host = 'http://localhost:3000/patients';

  constructor(private client: HttpClient) {}

  public getPatients(): Observable<Patient[]> {
    return this.client.get<Patient[]>(this.host);
  }


  public deletePatient(id: any): Observable<void> {
    return this.client.delete<void>(`${this.host}/${id}`);
  }


  getPatientById(id: string): Observable<Patient> {
    return this.client.get<Patient>(`${this.host}/${id}`);
  }


}
