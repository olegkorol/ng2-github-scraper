import { Component } from '@angular/core';
import './rxjs-operators';

@Component({
  selector: 'app-root',
  template: `
  <nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <p class="navbar-brand">{{title}}</p>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
        <!-- Navigation Elements -->
          <ul class="nav navbar-nav">
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
    <app-github></app-github>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GitHub Scraper';
}
