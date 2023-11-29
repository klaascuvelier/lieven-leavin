import { Component } from '@angular/core';
import { ViewComponent } from '../../view/view.component';

@Component({
  selector: 'll-data',
  standalone: true,
  styleUrl: './data.container.scss',
  template: `
    <ll-view url="/settings">
      <div>
        <h1>Data</h1>
      </div>
    </ll-view>
  `,
  imports: [ViewComponent],
})
export class DataContainer {}
