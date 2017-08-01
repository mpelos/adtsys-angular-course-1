import { Injectable } from '@angular/core';

import { City } from './city.model';

@Injectable()
export class CityService {
  list(): Promise<City[]> {
    return new Promise((resolve, reject) => {
      resolve([
        new City(1, "Entrepelado", 9),
        new City(2, "Passa e Fica", 8),
        new City(3, "Rolândia", 7),
        new City(4, "Sombrio", 10),
        new City(5, "Salto do Lontra", 7),
        new City(6, "Pintópolis", 3),
        new City(7, "Combinado", 11),
        new City(8, "Anta Gorda", 9),
        new City(9, "Jijoca de Jericoacoara", 1),
        new City(10, "Dois Vizinhos", 7),
        new City(11, "Sério", 9),
        new City(12, "Carrasco Bonito", 11),
        new City(13, "Paudalho", 5),
        new City(14, "Curralinhos", 4),
        new City(15, "Ressaquinha", 3),
        new City(16, "Não-me-toque", 9),
        new City(17, "Virginópolis", 3),
        new City(18, "Nova Iorque", 2),
        new City(19, "Barro Duro", 6),
        new City(20, "Ponta Grossa", 7)
      ]);
    });
  }

  listAllByStateId(stateId): Promise<City[]> {
    return this.list().then(cities => {
      return cities.filter(city => city.stateId == stateId)
    })
  }
}
