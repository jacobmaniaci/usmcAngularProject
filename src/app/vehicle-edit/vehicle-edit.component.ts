import { Component, OnInit } from '@angular/core';
import { DataService, Vehicle } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-edit',
  templateUrl: './vehicle-edit.component.html',
  styleUrls: ['./vehicle-edit.component.css']
})
export class VehicleEditComponent implements OnInit {

  constructor(private dataService: DataService, private activeRoute: ActivatedRoute, private router: Router) { }

  vehicle:Vehicle;

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params => {
      let model = params.get('model');

      this.dataService.getVehicle(model).subscribe(vehicle => {
        this.vehicle = vehicle;
      })
    })
  }

  updateVehicle() {
    this.dataService.saveVehicle(this.vehicle).subscribe(_ => {
      this.router.navigate(['/']);
    })
  }

}
