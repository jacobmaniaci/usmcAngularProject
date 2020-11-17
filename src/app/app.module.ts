import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AircraftListComponent } from './aircraft-list/aircraft-list.component';
import { AircraftAddComponent } from './aircraft-add/aircraft-add.component';
import { AircraftEditComponent } from './aircraft-edit/aircraft-edit.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleAddComponent } from './vehicle-add/vehicle-add.component';
import { VehicleEditComponent } from './vehicle-edit/vehicle-edit.component';
import { WeaponListComponent } from './weapon-list/weapon-list.component';
import { WeaponAddComponent } from './weapon-add/weapon-add.component';
import { WeaponEditComponent } from './weapon-edit/weapon-edit.component';
import { HomeCentralComponent } from './home-central/home-central.component';

@NgModule({
  declarations: [
    AppComponent,
    AircraftListComponent,
    AircraftAddComponent,
    AircraftEditComponent,
    VehicleListComponent,
    VehicleAddComponent,
    VehicleEditComponent,
    WeaponListComponent,
    WeaponAddComponent,
    WeaponEditComponent,
    HomeCentralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
