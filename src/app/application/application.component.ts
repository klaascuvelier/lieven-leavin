import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'll-application',
  styleUrl: './application.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <a [routerLink]="route">
      <img [attr.src]="icon" alt="icon" />
      @if (name) {
        <span>{{ name }}</span>
      }
    </a>
  `,
})
export class ApplicationComponent {
  @Input({ required: true }) icon: string | undefined;
  @Input({ required: true }) route: string[] | undefined;
  @Input() name: string | undefined;
}
