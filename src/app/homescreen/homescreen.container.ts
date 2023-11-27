import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ApplicationComponent } from '../application/application.component';

@Component({
  selector: 'll-homescreen',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./homescreen.container.scss'],
  imports: [ApplicationComponent],
  template: `
    <div class="apps">
      <ll-application
        name="Photos"
        [route]="['/', 'photos']"
        icon="/assets/icons/photos.png"
      ></ll-application>
      <ll-application
        name="Showpad"
        [route]="['/', 'statistics']"
        icon="/assets/icons/showpad.png"
      ></ll-application>

      <ll-application
        icon="/assets/icons/slack.png"
        name="Slack"
        [route]="['/', 'slack']"
      ></ll-application>
    </div>

    <nav>
      <ll-application
        icon="/assets/icons/safari.png"
        [route]="['/', 'safari']"
      ></ll-application>

      <ll-application
        icon="/assets/icons/mail.png"
        [route]="['/', 'mail']"
      ></ll-application>

      <ll-application
        icon="/assets/icons/settings.png"
        [route]="['/', 'settings']"
      ></ll-application>
    </nav>
  `,
})
export class HomescreenContainer {}
