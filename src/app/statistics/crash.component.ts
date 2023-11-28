import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { delay, of, startWith } from 'rxjs';

@Component({
  selector: 'll-crash',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <div class="spinner">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
        <div class="bar4"></div>
        <div class="bar5"></div>
        <div class="bar6"></div>
        <div class="bar7"></div>
        <div class="bar8"></div>
        <div class="bar9"></div>
        <div class="bar10"></div>
        <div class="bar11"></div>
        <div class="bar12"></div>
      </div>
      @if (showError$ | async) {
        <div class="error-modal">
          <div class="error-modal__title">
            <h3>"Showpad" has crashed</h3>
            Please close the app and try again
          </div>
          <button>Close</button>
        </div>
      }
    </div>
  `,
  styleUrl: './crash.component.scss',
})
export class CrashComponent {
  showError$ = of(true).pipe(delay(7000), startWith(false));
}
