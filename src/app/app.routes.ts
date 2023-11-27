import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'home',
    loadComponent: () =>
      import('./homescreen/homescreen.container').then(
        (m) => m.HomescreenContainer,
      ),
  },
  {
    path: 'photos',
    loadComponent: () =>
      import('./photos/photos.container').then((m) => m.PhotosContainer),
  },
  {
    path: 'slack',
    loadComponent: () =>
      import('./slack/slack.container').then((m) => m.SlackContainer),
  },

  {
    path: 'mail',
    loadComponent: () =>
      import('./mail/mail.container').then((m) => m.MailContainer),
  },
  { path: '**', redirectTo: 'home' },
];
