import { Component } from '@angular/core';

@Component({
  selector: 'll-mail',
  styleUrl: './mail.container.scss',
  standalone: true,
  template: `
    <h1>Inbox</h1>
    <ol class="mails">
      <li class="mail">
        <div class="unread"></div>
        <div class="title">Goodbye</div>
        <div class="excerpt">Hi Lieven, your email will be disconnected</div>
      </li>

      <li class="mail">
        <div class="title">Offboarding complete</div>
        <div class="excerpt">Sad sad sas.d</div>
      </li>
    </ol>
  `,
})
export class MailContainer {}
