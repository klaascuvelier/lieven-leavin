import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'll-settings',
  standalone: true,
  styleUrl: 'settings.container.scss',
  imports: [RouterLink],
  template: `
    <section>
      <a class="settings-item">
        <img class="settings-item__icon" src="/assets/icons/cell-setting.png" />
        <span class="settings-item__text">Cellular</span>
        <span class="settings-item__cheveron">
          <img src="/assets/chevron-right.svg" />
        </span>
      </a>
      <a class="settings-item" routerLink="/settings/general">
        <img class="settings-item__icon" src="/assets/icons/settings.png" />
        <span class="settings-item__text">General</span>
        <span class="settings-item__cheveron">
          <img src="/assets/chevron-right.svg" />
        </span>
      </a>
      <a class="settings-item" routerLink="/settings/profile">
        <img
          class="settings-item__icon"
          src="/assets/icons/settings-info.png"
        />
        <span class="settings-item__text">About</span>
        <span class="settings-item__cheveron">
          <img src="/assets/chevron-right.svg" />
        </span>
      </a>
    </section>
  `,
})
export class SettingsContainer {}
