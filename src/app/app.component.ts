import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <h1> Hello, {{ title }}!</h1>
    <router-outlet/>
  `,
})
export class AppComponent {
  title = 'ng-v16-rc0';
}
