import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  EventType,
  NavigationEnd,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { filter, map, startWith } from 'rxjs';

@Component({
  selector: 'lieven-leavin-setting-base',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  template: `<nav
      [ngClass]="{ 'not-home': notHome$ | async }"
      class="setting-header"
    >
      @if (notHome$ | async) {
        <a routerLink="/settings" class="back">Back</a>
      }
      <h3>Settings</h3>
    </nav>
    <router-outlet></router-outlet>`,
  styleUrl: './setting-base.component.scss',
})
export class SettingBaseComponent {
  router = inject(Router);
  notHome$ = this.router.events.pipe(
    filter((e) => e.type === EventType.NavigationEnd),
    map((e) => (e as NavigationEnd).url),
    startWith(this.router.url),
    map((url) => url !== '/settings'),
  );
}
