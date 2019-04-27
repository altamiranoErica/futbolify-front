import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="../assets/images/logo.png" alt="" width="70">
          <span class="ml-1 text-white">CROWDIFY</span>
        </a>
      </div>
    </nav>
    <router-outlet></router-outlet>`
})
export class AppComponent {
}
