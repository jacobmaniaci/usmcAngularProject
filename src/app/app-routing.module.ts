import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AircraftAddComponent } from './aircraft-add/aircraft-add.component';
import { AircraftEditComponent } from './aircraft-edit/aircraft-edit.component';
import { AircraftListComponent } from './aircraft-list/aircraft-list.component';
import { VehicleAddComponent } from './vehicle-add/vehicle-add.component';
import { VehicleEditComponent } from './vehicle-edit/vehicle-edit.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { WeaponAddComponent } from './weapon-add/weapon-add.component';
import { WeaponEditComponent } from './weapon-edit/weapon-edit.component';
import { WeaponListComponent } from './weapon-list/weapon-list.component';
import { HomeCentralComponent } from './home-central/home-central.component';


const routes: Routes = [
  {path: "", component: HomeCentralComponent},
  {path: "aircraft-add", component: AircraftAddComponent},
  {path: "aircraft-edit/:model", component: AircraftEditComponent},
  {path: "aircraft-list", component: AircraftListComponent},
  {path: "vehicle-add", component: VehicleAddComponent},
  {path: "vehicle-edit/:model", component: VehicleEditComponent},
  {path: "vehicle-list", component: VehicleListComponent},
  {path: "weapon-add", component: WeaponAddComponent},
  {path: "weapon-edit/:model", component: WeaponEditComponent},
  {path: "weapon-list", component: WeaponListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
