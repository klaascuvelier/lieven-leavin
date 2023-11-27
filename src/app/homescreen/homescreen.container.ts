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
        icon="/assets/photos.png"
      ></ll-application>
      <ll-application
        name="Showpad"
        [route]="['/', 'showpad']"
        icon="/assets/showpad.png"
      ></ll-application>
    </div>

    <nav>
      <ll-application
        icon="/assets/slack.png"
        [route]="['/', 'slack']"
      ></ll-application>

      <ll-application
        icon="/assets/mail.png"
        [route]="['/', 'mail']"
      ></ll-application>
    </nav>
  `,
})
export class HomescreenContainer {}
