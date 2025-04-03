import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import { HousingLocation } from '../../model/housinglocation';
import { HousingService } from '../../housing.service';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-details',
  imports: [CommonModule , ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})

export class DetailsComponent {  
  route: ActivatedRoute = inject(ActivatedRoute);  
  casettaService: HousingService = inject(HousingService);  
  casettaRicevuta: HousingLocation | undefined;
  // const firstName = new FormControl("");
  // const lastName = new FormControl("");
  // const email = new FormControl("");
  // applyForm = new FormGroup({ firstName, lastName, email });
  applyForm = new FormGroup({ firstName: new FormControl(''), lastName: new FormControl(''), email: new FormControl(''), });

  constructor() {    
    const casettaRicevutaId = Number(this.route.snapshot.params['id']);    
    this.casettaRicevuta = this.casettaService.getHousingLocationById(casettaRicevutaId);  
  }

  submitApplication() {
    this.casettaService.submitApplication(this.applyForm.value.firstName ?? '', this.applyForm.value.lastName ?? '', this.applyForm.value.email ?? '',);
  }
}