import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'lieven-leavin-root',
  template: `
    <img src="/assets/iphone.png" alt="" />
    <section>
      <header>
        <div>Showpad</div>
        <div>9:41</div>
      </header>
      <main>
        <router-outlet></router-outlet>
      </main>
      <nav></nav>
    </section>
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'lieven-leavin';
}
