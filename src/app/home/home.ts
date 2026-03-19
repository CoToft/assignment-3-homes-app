import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}