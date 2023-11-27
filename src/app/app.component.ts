import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterModule,
} from '@angular/router';
import { filter, map, switchMap } from 'rxjs';
import { NxWelcomeComponent } from './nx-welcome.component';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, CommonModule],
  selector: 'lieven-leavin-root',
  styleUrl: './app.component.scss',
  template: `
    <img src="/assets/iphone.png" alt="" />
    <section>
      <header [ngStyle]="statusBar()">
        <div>Showpad</div>
        <div>9:41</div>
      </header>
      <main>
        <router-outlet></router-outlet>
      </main>
    </section>
    <a class="homebutton" routerLink="/"></a>
  `,
})
export class AppComponent {
  private router = inject(Router);
  private statusBar$ = this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd),
    map((event) => {
      let route: ActivatedRoute = this.router.routerState.root;
      let routeTitle = '';
      while (route!.firstChild) {
        route = route.firstChild;
      }

      return {
        color: '#fff',
        background: '#000',
        ...route.snapshot.data['statusBar'],
      };
    }),
  );
  protected statusBar = toSignal(this.statusBar$);
}
