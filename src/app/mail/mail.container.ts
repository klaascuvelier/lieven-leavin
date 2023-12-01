import { Component } from '@angular/core';

@Component({
  selector: 'll-mail',
  styleUrl: './mail.container.scss',
  standalone: true,
  template: `
    <h1>Inbox</h1>
    <ol class="mails">
      <li class="mail">
        <div class="badge unread"></div>
        <div class="title">Team Showpad sent you a GroupGreeting eCard!</div>
        <div class="excerpt">
          Hi Lieven, Team Showpad sent you a card.
          <a
            href="https://www.groupgreeting.com/card/b788d123083ba87/delivered"
            target="_blank"
            >View your card</a
          >
        </div>
      </li>

      <li class="mail">
        <div class="title">Mailbox disconnected</div>
        <div class="excerpt">
          lieven.dekeyser&#64;showpad.com can no longer be used.
        </div>
      </li>

      <li class="mail">
        <div class="badge flag"></div>
        <div class="title">Data limit exceeded</div>
        <div class="excerpt">
          Because of your data usage, you have an outstanding bill of
          &euro;&nbsp;185.000. This amount needs to be paid in full
          before&hellip;
        </div>
      </li>

      <li class="mail">
        <div class="title">Gitlab access revoked</div>
        <div class="excerpt">
          You no longer have access to the Showpad codebase.
        </div>
      </li>

      <li class="mail">
        <div class="badge unread"></div>
        <div class="title">Goodbye</div>
        <div class="excerpt">De groetjes 👋</div>
      </li>
    </ol>
  `,
})
export class MailContainer {}
