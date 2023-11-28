import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { pictureCount } from './constants';

@Component({
  selector: 'll-photo-list',
  styleUrl: './list.component.scss',
  imports: [CommonModule, RouterLink],
  standalone: true,
  template: ` <ol class="list">
    @for (photo of photos; track photo.id) {
      <li>
        <a
          [routerLink]="['/photos/detail', photo.id]"
          [ngStyle]="{ backgroundImage: 'url(' + photo.url + ')' }"
        ></a>
      </li>
    }
  </ol>`,
})
export class PhotoListComponent {
  protected photos = Array(pictureCount)
    .fill(null)
    .map((value, index) => {
      return {
        id: index,
        url: `/assets/photos/image-${index + 1}.jpg`,
      };
    });
}
