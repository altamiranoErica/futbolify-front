import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, MenuComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [HeaderComponent, MenuComponent]
})
export class ComponentsModule { }
