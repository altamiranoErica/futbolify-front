import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VenueRoutingModule } from './venue-routing.module';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { CallbackComponent } from './callback/callback.component';
import { ComponentsModule } from '../components/components.module';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [ListComponent, AddComponent, CallbackComponent, SearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,

    VenueRoutingModule
  ],
  exports: [SearchComponent]
})
export class VenueModule { }
