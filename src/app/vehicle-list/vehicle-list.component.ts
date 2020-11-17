import { Component, OnInit } from '@angular/core';
import { DataService, Vehicle } from '../data.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  constructor(private dataService: DataService) { }

  vehicle: Vehicle[] = [
    {
      model: "MK23",
      name: "7 Ton",
      type: "Multirole",
      image: ["../assets/7ton.jpg"]
    },
    {
      model: "AAVP-7A1",
      name: "AAV",
      type: "Amphibious",
      image: ["../assets/AAV.jpg"]
    }
  ];

  ngOnInit() {
    this.dataService.getVehicles().subscribe(vehiclesList => {
      this.vehicle = vehiclesList;
    })
  }

  deleteVehicle(vehicle: Vehicle) {
    if(!window.confirm('Are you sure you want to delete this item?')) {
      return
    }
    this.dataService.deleteVehicle(vehicle.model).subscribe(_ => {
      this.vehicle = this.vehicle.filter(v => v.model !== vehicle.model);
    })
  }

}
