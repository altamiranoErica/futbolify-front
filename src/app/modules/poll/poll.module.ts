import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PollRoutingModule } from './poll-routing.module';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { VenueModule } from '../venue/venue.module';
import { ActiveListComponent } from './active-list/active-list.component';

@NgModule({
  declarations: [AddComponent, ActiveListComponent],
  imports: [
    CommonModule,
    FormsModule,
    VenueModule,
    PollRoutingModule
  ]
})
export class PollModule { }
