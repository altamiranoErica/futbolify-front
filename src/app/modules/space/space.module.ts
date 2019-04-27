import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpaceRoutingModule } from './space-routing.module';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { CallbackComponent } from './callback/callback.component';

@NgModule({
  declarations: [ListComponent, AddComponent, CallbackComponent],
  imports: [
    CommonModule,
    FormsModule,

    SpaceRoutingModule
  ]
})
export class SpaceModule { }
