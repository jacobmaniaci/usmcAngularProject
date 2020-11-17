import { Component, OnInit } from '@angular/core';
import { DataService, Weapon } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-weapon-edit',
  templateUrl: './weapon-edit.component.html',
  styleUrls: ['./weapon-edit.component.css']
})
export class WeaponEditComponent implements OnInit {

  constructor(private dataService: DataService, private activeRoute: ActivatedRoute, private router: Router) { }

  weapon:Weapon;

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params => {
      let model = params.get('model');

      this.dataService.getWeapon(model).subscribe(weapon => {
        this.weapon = weapon;
      })
    })
  }

  updateWeapon() {
    this.dataService.saveWeapon(this.weapon).subscribe(_ => {
      this.router.navigate(['/']);
    })
  }

}
