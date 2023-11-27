import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'll-photo-detail',
  standalone: true,
  styleUrl: './detail.component.scss',
  template: `
    <div class="nav">
      <a [routerLink]="['/photos']">🔙</a>
    </div>

    @if (photoUrl()) {
      <div class="photo">
        <img [attr.src]="photoUrl()" alt="photo of lieven" />
      </div>
    }
  `,
  imports: [RouterLink],
})
export class PhotoDetailComponent {
  photoId$ = inject(ActivatedRoute).paramMap.pipe(
    map((paramMap) => parseInt(paramMap.get('id') ?? '0', 10) ?? 0),
  );
  photoId = toSignal(this.photoId$);
  photoUrl = computed(() => {
    return `/assets/photos/image-${(this.photoId() ?? 0) + 1}.jpg`;
  });
}
