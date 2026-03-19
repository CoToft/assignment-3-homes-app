import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './housing-location.html',
  styleUrl: './housing-location.css'
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}