import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <header>
      <strong routerLink="/"> {{ title }}!</strong>
    </header>
    <router-outlet/>
    <footer>
      <a routerLink="/contact">Get in contact</a>
    </footer>
  `,
})
export class AppComponent {
  title = 'ng-v16-rc0';
}
