import {
  Component,
  computed,
  effect,
  HostListener,
  inject,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { pictureCount } from './constants';

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
  private router = inject(Router);

  private photoId$ = inject(ActivatedRoute).paramMap.pipe(
    map((paramMap) => parseInt(paramMap.get('id') ?? '0', 10) ?? 0),
  );

  protected photoId = toSignal(this.photoId$);
  protected photoUrl = computed(() => {
    return `./assets/photos/image-${(this.photoId() ?? 0) + 1}.jpg`;
  });

  constructor() {
    effect(() => {
      const photoId = this.photoId();
      if (photoId !== undefined && (photoId < 0 || photoId >= pictureCount)) {
        this.router.navigate([
          '/photos/detail/' + (photoId < 0 ? pictureCount - 1 : 0),
        ]);
      }
    });
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') {
      this.router.navigate(['/photos/detail/' + ((this.photoId() ?? 0) - 1)]);
    } else if (event.key === 'ArrowRight') {
      this.router.navigate(['/photos/detail/' + ((this.photoId() ?? 0) + 1)]);
    }
  }
}
