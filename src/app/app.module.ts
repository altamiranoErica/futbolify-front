import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// -------- COMPONENTS
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing';
import { AuthorizeService } from './service/authorize/authorize.service';
import { SpaceService } from './service/space/space.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    AuthorizeService, SpaceService
  ]
})
export class AppModule { }
