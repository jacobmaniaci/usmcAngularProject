import { Component, OnInit } from '@angular/core';
import { DataService, Weapon } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weapon-add',
  templateUrl: './weapon-add.component.html',
  styleUrls: ['./weapon-add.component.css']
})
export class WeaponAddComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }

  weapon: Weapon = new Weapon;

  ngOnInit(): void {
  }

  addWeapon() {
    this.dataService.saveWeapon(this.weapon).subscribe(_ => {
      this.router.navigate(['/']);
    })
  }

}
