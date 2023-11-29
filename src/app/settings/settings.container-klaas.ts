import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'll-settings',
  standalone: true,
  styleUrl: 'settings.container.scss',
  template: ` <router-outlet></router-outlet> `,
  imports: [RouterOutlet],
})
export class SettingsContainer {}
