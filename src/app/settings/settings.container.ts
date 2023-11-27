import { Component } from '@angular/core';

@Component({
  selector: 'll-settings',
  standalone: true,
  styleUrl: 'settings.container.scss',
  template: `
    <section>
      <h1>Lieven Leavin' 1.0.0</h1>
      <small>Published 01/12/2022</small>
    </section>

    <section>
      <h2>Thank you and goodbye</h2>
      <p>From all Showpad Product and Technology members:</p>
      <p>
        {{ pntMembers }}
      </p>
    </section>
  `,
})
export class SettingsContainer {
  pntMembers = ['klaas cuvelier'].join(', ');
}
