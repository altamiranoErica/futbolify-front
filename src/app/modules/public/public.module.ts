import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VenuesComponent } from './venue/venues.component';
import { PublicRoutingModule } from './public-routing.module';
import { VoteComponent } from './vote/vote.component';

@NgModule({
  declarations: [VenuesComponent, VoteComponent],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
