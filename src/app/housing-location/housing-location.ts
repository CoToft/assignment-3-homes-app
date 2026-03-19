import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [],
  templateUrl: './housing-location.html',
  styleUrl: './housing-location.css'
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}