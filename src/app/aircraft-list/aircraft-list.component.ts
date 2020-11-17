import { Component, OnInit } from '@angular/core';
import { DataService, Aircraft } from '../data.service';

@Component({
  selector: 'app-aircraft-list',
  templateUrl: './aircraft-list.component.html',
  styleUrls: ['./aircraft-list.component.css']
})
export class AircraftListComponent implements OnInit {

  constructor(private dataService: DataService) { }

  aircraft: Aircraft[] = [
    {
      model: "CH-53",
      name: "Sea Stallion",
      type: "Transport",
      image: ["../assets/ch53.jpg", "../assets/Ch-53,jpg"]
    },
    {
      model: "AH-1",
      name: "Cobra",
      type: "Assault",
      image: ["../asset/cobra.jpg"]
    }
    
  ]

  ngOnInit() {
    this.dataService.getAircrafts().subscribe(aircraftList => {
      this.aircraft = aircraftList;
    })
  }

  deleteAircraft(aircraft: Aircraft) {
    if(!window.confirm('Are you sure you want to delete this item?')) {
      return
    }
    this.dataService.deleteAircraft(aircraft.model).subscribe(_ => {
      this.aircraft = this.aircraft.filter(a => a.model !== aircraft.model);
    })
  }

}
