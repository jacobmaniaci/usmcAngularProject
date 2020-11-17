import { Component, OnInit } from '@angular/core';
import { DataService, Weapon } from '../data.service';

@Component({
  selector: 'app-weapon-list',
  templateUrl: './weapon-list.component.html',
  styleUrls: ['./weapon-list.component.css']
})
export class WeaponListComponent implements OnInit {

  constructor(private dataService: DataService) { }

  weapon: Weapon[] = [
    {
      model: "M2",
      name: "50 Cal",
      type: "Machine Gun",
      image: ["../assets/m2.jpg"]
    },
    {
      model: "Mk13",
      name: "No Alias",
      type: "Sniper",
      image: ["../assets/mk13.jpg"]
    }
  ];

  ngOnInit() {
    this.dataService.getWeapons().subscribe(weaponsList => {
      this.weapon = weaponsList;
    })
  }

  deleteWeapon(weapon: Weapon) {
    if(!window.confirm('Are you sure you want to delete this item?')) {
      return
    }
    this.dataService.deleteWeapon(weapon.model).subscribe(_ => {
      this.weapon = this.weapon.filter(w => w.model !== weapon.model);
    })
  }

}
