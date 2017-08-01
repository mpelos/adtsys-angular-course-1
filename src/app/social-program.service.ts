import { Injectable } from '@angular/core';

import { SocialProgram } from './social-program.model';

@Injectable()
export class SocialProgramService {
  list(): Promise<SocialProgram[]> {
    return new Promise((resolve: Function, reject: Function) => {
      resolve([
        new SocialProgram(1, "Programa Social maneiro", "Nacional", "Don't know", true),
        new SocialProgram(2, "Cool Broh", "Estadual", "Wtf is this?", true),
        new SocialProgram(3, "Programa merda", "Regional", "Again, what?", false)
      ])
    })
  }
}
