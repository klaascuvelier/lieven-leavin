import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'll-view',
  standalone: true,
  styleUrl: './view.component.scss',
  template: `
    <div class="nav">
      <a [routerLink]="url">‹ Back</a>
    </div>

    <div class="content">
      <ng-content></ng-content>
    </div>
  `,
  imports: [RouterLink],
})
export class ViewComponent {
  @Input({ required: true }) url: string | string[] | undefined;
}
