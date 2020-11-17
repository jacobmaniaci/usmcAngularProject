import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAircrafts() : Observable<Aircraft[]> {
    return this.http.get<Aircraft[]>("/aircraft");
  }

  getAircraft(model:string) : Observable<Aircraft> {
    return this.http.get<Aircraft>(`/aircraft/${model}`);
  }

  deleteAircraft(model:string) : Observable<any> {
    return this.http.delete(`/aircraft/${model}`);
  }

  saveAircraft(aircraft:Aircraft) : Observable<any> {
    return this.http.put(`/aircraft/${aircraft.model}`, aircraft);
  }




  getVehicles() : Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>("/vehicle");
  }

  getVehicle(model:string) : Observable<Vehicle> {
    return this.http.get<Vehicle>(`/vehicle/${model}`);
  }

  deleteVehicle(model:string) : Observable<any> {
    return this.http.delete(`/vehicle/${model}`);
  }

  saveVehicle(vehicle:Vehicle) : Observable<any> {
    return this.http.put(`/vehicle/${vehicle.model}`, vehicle);
  }




  getWeapons() : Observable<Weapon[]> {
    return this.http.get<Weapon[]>("/weapon");
  }

  getWeapon(model:string) : Observable<Weapon> {
    return this.http.get<Weapon>(`/weapon/${model}`);
  }

  deleteWeapon(model:string) : Observable<any> {
    return this.http.delete(`/weapon/${model}`);
  }

  saveWeapon(weapon:Weapon) : Observable<any> {
    return this.http.put(`/weapon/${weapon.model}`, weapon);
  }


}

export class Aircraft {
  model: string;
  name: string;
  type: string;
  image: string[];
}

export class Vehicle {
  model: string;
  name: string;
  type: string;
  image: string[];
}

export class Weapon {
  model: string;
  name: string;
  type: string;
  image: string[];
}
