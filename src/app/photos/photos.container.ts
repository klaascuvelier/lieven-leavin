import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'll-photos',
  standalone: true,
  styleUrls: ['./photos.container.scss'],
  template: ` <router-outlet></router-outlet>`,
  imports: [RouterOutlet],
})
export class PhotosContainer {}
