import { Component, OnInit } from '@angular/core';
import { DataService, Aircraft } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-aircraft-edit',
  templateUrl: './aircraft-edit.component.html',
  styleUrls: ['./aircraft-edit.component.css']
})
export class AircraftEditComponent implements OnInit {

  constructor(private dataService: DataService, private activeRoute: ActivatedRoute, private router: Router) { }

  aircraft:Aircraft;

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params => {
      let model = params.get('model');

      this.dataService.getAircraft(model).subscribe(aircraft => {
        this.aircraft = aircraft;
      })
    })
  }

  updateAircraft() {
    this.dataService.saveAircraft(this.aircraft).subscribe(_ => {
      this.router.navigate(['/']);
    })
  }



}
