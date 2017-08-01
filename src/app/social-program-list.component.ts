import { Component, OnInit } from '@angular/core';

import { SocialProgram } from './social-program.model';
import { SocialProgramService } from './social-program.service'

@Component({
  selector: 'social-program-list',
  templateUrl: './social-program-list.component.html'
})
export class SocialProgramListComponent implements OnInit {
  socialPrograms: SocialProgram[];

  constructor(
    private socialProgramService: SocialProgramService
  ) { }

  ngOnInit() {
    this.socialProgramService.list().then((socialPrograms) => {
      this.socialPrograms = socialPrograms;
    });
  }
}
