import { Component, OnInit } from '@angular/core';
import { DataService, Aircraft } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aircraft-add',
  templateUrl: './aircraft-add.component.html',
  styleUrls: ['./aircraft-add.component.css']
})
export class AircraftAddComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }

  aircraft: Aircraft = new Aircraft;

  ngOnInit(): void {
  }

  addAircraft() {
    this.dataService.saveAircraft(this.aircraft).subscribe(_ => {
      this.router.navigate(['/']);
    })
  }

}
