import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VenuesComponent } from './venue/venues.component';
import { PublicRoutingModule } from './public-routing.module';
import { VoteComponent } from './vote/vote.component';
import { CountdownModule } from 'ngx-countdown';
import { SafePipe } from '../../pipe/safe/safe.pipe';

@NgModule({
  declarations: [VenuesComponent, VoteComponent, SafePipe
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    CountdownModule
  ]
})
export class PublicModule { }
