import { Component, OnInit } from '@angular/core';

import { StateService } from './state.service';
import { CityService } from './city.service';
import { State } from './state.model';
import { City } from './city.model';
import { SocialProgram } from './social-program.model'

@Component({
  selector: 'social-program-register',
  templateUrl: './social-program-register.component.html'
})
export class SocialProgramRegisterComponent {
  states: State[];
  cities: City[];
  socialProgram = new SocialProgram();

  constructor(
    private stateService: StateService,
    private cityService: CityService,
  ) {
    this.stateService.list().then(states => {
      this.states = states;
    })

    this.cityService.list().then(cities => {
      this.cities = cities;
    })
  }

  updateCities() {
    this.cityService.listAllByStateId(this.socialProgram.stateId).then(cities => {
      this.cities = cities;
    })
  }

  onSubmit() {
    console.log(this.socialProgram);
  }
}
