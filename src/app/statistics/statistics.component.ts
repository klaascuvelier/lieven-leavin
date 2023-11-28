import { Component } from '@angular/core';
import { CrashComponent } from './crash.component';

@Component({
  selector: 'll-statistics',
  standalone: true,
  styleUrl: './statistics.component.scss',
  template: `<ll-crash />`,
  imports: [CrashComponent],
})
export class StatisticsComponent {}
