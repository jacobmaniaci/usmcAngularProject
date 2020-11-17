import { Component, OnInit } from '@angular/core';
import { DataService, Vehicle } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-add',
  templateUrl: './vehicle-add.component.html',
  styleUrls: ['./vehicle-add.component.css']
})
export class VehicleAddComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }

  vehicle: Vehicle = new Vehicle;

  ngOnInit(): void {
  }

  addVehicle() {
    this.dataService.saveVehicle(this.vehicle).subscribe(_ => {
      this.router.navigate(['/']);
    })
  }

}
