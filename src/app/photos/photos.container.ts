import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'll-photos',
  standalone: true,
  styleUrls: ['./photos.container.scss'],
  template: ` <div class="photos"></div>`,
})
export class PhotosContainer {}
