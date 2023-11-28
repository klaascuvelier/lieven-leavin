import { Component } from '@angular/core';
import { CrashComponent } from './crash.component';

@Component({
  selector: 'll-showpad',
  standalone: true,
  styleUrl: './showpad.container.scss',
  template: `<ll-crash />`,
  imports: [CrashComponent],
})
export class ShowpadContainer {}
