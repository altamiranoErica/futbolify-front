import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VenuesComponent } from './venue/venues.component';
import { PublicRoutingModule } from './public-routing.module';

@NgModule({
  declarations: [VenuesComponent],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
