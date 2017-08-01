import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SocialProgramListComponent } from './social-program-list.component';
import { SocialProgramRegisterComponent } from './social-program-register.component';
import { SocialProgramService } from './social-program.service';
import { StateService } from './state.service';
import { CityService } from './city.service';

@NgModule({
  declarations: [
    AppComponent,
    SocialProgramRegisterComponent,
    SocialProgramListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/programas-sociais', pathMatch: 'full' },
      { path: 'programas-sociais', component: SocialProgramListComponent },
      { path: 'programas-sociais/novo', component: SocialProgramRegisterComponent },
    ])
  ],
  providers: [
    CityService,
    SocialProgramService,
    StateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
