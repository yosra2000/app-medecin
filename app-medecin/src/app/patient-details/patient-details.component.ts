import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../Services/patient.service';
import { Patient } from '../models/Patient';
@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {


  productID: string | null = null;
  patientData: Patient | undefined;

  constructor(
    public ar: ActivatedRoute,
    public patientService: PatientService
  ) {}

  ngOnInit(): void {
    this.productID = this.ar.snapshot.paramMap.get('id');
    console.log("testig",  this.productID);

    if (this.productID) {
      this.patientService.getPatientById(this.productID).subscribe(
        (data: Patient) => {
          console.log("testig", data);
          
          this.patientData = data;
          console.log(data);
        },
        (error) => {
          console.error('Erreur lors de la récupération des données:', error);
        }
      );
    }
  }
}