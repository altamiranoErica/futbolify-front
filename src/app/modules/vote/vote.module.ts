import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoteRoutingModule } from './vote-routing.module';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddComponent],
  imports: [
    CommonModule,
    FormsModule,
    VoteRoutingModule
  ]
})
export class VoteModule { }
