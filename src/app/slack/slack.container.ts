import { Component } from '@angular/core';

@Component({
  selector: 'll-slack',
  standalone: true,
  styleUrl: './slack.container.scss',
  template: `
    <header>
      <div class="company">
        <img src="./assets/showpad.svg" alt="Showpad" />
        Showpad
      </div>

      <div class="user">
        <img src="./assets/lieven.png" alt="Lieven" />
      </div>
    </header>
    <section>
      <img src="./assets/slack/lieven - sla.png" alt="lieven sla" />
    </section>
  `,
})
export class SlackContainer {}
