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
    <img src="./assets/iphone.png" alt="" />
    <section style="background-image: url('./assets/wallpaper.jpg')">
      <header [ngStyle]="statusBar()">
        <div>Showpad</div>
        <div>9:41</div>
      </header>
      <main>
        <router-outlet></router-outlet>
        @if (specialTrick) {
          <div class="overlay">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/-bzWSJG93P8?autoplay=1"
              title=""
              frameBorder="0"
              allowFullScreen
              au
            ></iframe>
          </div>
        }
      </main>
    </section>
    <button class="homebutton" (click)="onHomebuttonClick()"></button>
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
  private clickCounter = 0;
  private clickTimer: number | undefined;
  protected statusBar = toSignal(this.statusBar$);
  protected specialTrick = false;

  constructor() {
    this.router.events
      .pipe(filter((evt) => evt instanceof NavigationEnd))
      .subscribe(() => {
        // always clear timer on nav
        if (this.clickTimer) {
          window.clearTimeout(this.clickTimer);
        }
      });
  }

  protected onHomebuttonClick() {
    if (this.specialTrick) {
      return;
    }

    if (this.clickTimer) {
      window.clearTimeout(this.clickTimer);
    }

    this.clickCounter++;

    if (this.clickCounter === 3) {
      this.specialTrick = true;
      return;
    }

    this.clickTimer = window.setTimeout(() => {
      this.clickCounter = 0;
      this.router.navigate(['/']);
    }, 300);
  }
}
