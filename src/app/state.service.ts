import { Injectable } from '@angular/core';

import { State } from './state.model'

@Injectable()
export class StateService {
  list(): Promise<State[]> {
    return new Promise((resolve, reject) => {
      resolve([
        new State(1, 'CE', "Ceará"),
        new State(2, 'MA', "Maranhão"),
        new State(3, 'MG', "Minas Gerais"),
        new State(4, 'PA', "Pará"),
        new State(5, 'PE', "Pernanbuco"),
        new State(6, 'PI', "Piauí"),
        new State(7, 'PR', "Paraná"),
        new State(8, 'RN', "Rio Grande do Norte"),
        new State(9, 'RS', "Rio Grande do Sul"),
        new State(10, 'SC', "Santa Catarina"),
        new State(11, 'TO', "Tocantins")
      ])
    })
  }
}
