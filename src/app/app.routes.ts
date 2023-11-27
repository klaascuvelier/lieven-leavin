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
    path: 'showpad',
    children: [],
    canActivate: [
      () => {
        window.location.href = 'showpad://';
        return false;
      },
    ],
  },
  {
    path: 'slack',
    loadComponent: () =>
      import('./slack/slack.container').then((m) => m.SlackContainer),
  },
  {
    path: 'safari',
    loadComponent: () =>
      import('./safari/safari.container').then((m) => m.SafariContainer),
  },
  {
    path: 'mail',
    loadComponent: () =>
      import('./mail/mail.container').then((m) => m.MailContainer),
  },
  { path: '**', redirectTo: 'home' },
];
