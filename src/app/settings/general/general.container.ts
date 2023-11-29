import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'll-general',
  standalone: true,
  styleUrl: './general.container.scss',
  template: `
    <h1>Settings</h1>

    <section class="settings">
      <a class="item large" routerLink="/settings/profile">
        <div
          class="icon"
          style="background-image: url(./assets/lieven.png)"
        ></div>
        <div class="title">Lieven Dekeyser</div>
        <div class="aside">›</div>
      </a>
    </section>

    <section class="settings">
      <div class="item">
        <div
          class="icon"
          style="background-image: url(./assets/icons/settings-airplane-mode.png)"
        ></div>
        <div class="title">Airplane mode</div>
        <div class="aside">
          <img
            class="switch"
            title="Lieven doesn't fly planes"
            src="./assets/icons/settings-switch.png"
          />
        </div>
      </div>
      <div class="item">
        <div
          class="icon"
          style="background-image: url(./assets/icons/settings-wifi.png)"
        ></div>
        <div class="title">Wifi</div>
        <div class="aside">Showpad BYOD</div>
      </div>
      <a class="item" routerLink="/settings/data">
        <div
          class="icon"
          style="background-image: url(./assets/icons/settings-mobile-data.png)"
        ></div>
        <div class="title">Mobile Data</div>
        <div class="aside">›</div>
      </a>
    </section>

    <section class="settings">
      <a class="item" routerLink="/settings/about">
        <div
          class="icon"
          style="background-image: url(./assets/icons/settings-info.png)"
        ></div>
        <div class="title">About</div>
        <div class="aside">›</div>
      </a>
    </section>
  `,
  imports: [RouterLink],
})
export class GeneralContainer {}
