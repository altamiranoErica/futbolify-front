import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div id="wrapper">
      <div id="content-wrapper" class="d-flex flex-column">
        <div class="content">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>`
})
export class AppComponent {
}
