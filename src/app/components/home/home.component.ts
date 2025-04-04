import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../../model/housinglocation';
import { HousingService } from '../../housing.service';


@Component({
  selector: 'app-home',
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  casettaList: HousingLocation[] = [];  
  casettaService: HousingService = inject(HousingService);
  listaCasettaFiltrate: HousingLocation[] = [];

  constructor() {    
    this.casettaService.getAllHousingLocations().then((casette: HousingLocation[]) => {      
      this.casettaList = casette;      
      this.listaCasettaFiltrate = casette; // Inizializza la lista filtrata con tutte le casette
    });
    // this.casettaList = this.casettaService.getAllHousingLocations();  
    // this.listaCasettaFiltrate = this.casettaList;
  }

  filterResults(text: string) {
    console.log("entrato")
    if (!text) {
      this.listaCasettaFiltrate = this.casettaList;
      return;
    }
    this.listaCasettaFiltrate = this.casettaList.filter((casetta) => casetta?.city.toLowerCase().includes(text.toLowerCase()),
    );
  }
}