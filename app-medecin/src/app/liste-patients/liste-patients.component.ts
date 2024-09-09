import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PatientService } from '../Services/patient.service';
import { Patient } from '../models/Patient';

@Component({
  selector: 'app-liste-patients',
  templateUrl: './liste-patients.component.html',
  styleUrls: ['./liste-patients.component.css']
})
export class ListePatientsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'image', 'name', 'price', 'quantity', 'action'];
  dataSource!: MatTableDataSource<Patient>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private patientService: PatientService
  ) { }

  ngOnInit(): void {
    this.patientService.getPatients().subscribe((data: Patient[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getColor(quantity: number): string {
    return quantity === 0 ? '#F5365C' : 'white';
  }

  productRemove(patient: Patient) {
    const conf = confirm('Are you sure you want to delete this?');
    if (conf) {
      this.patientService.deletePatient(patient.id).subscribe(() => {
        this.dataSource.data = this.dataSource.data.filter(p => p.id !== patient.id);
      });
    }
  }
}
