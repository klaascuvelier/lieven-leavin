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
    children: [
      {
        path: 'list',
        loadComponent: () =>
          import('./photos/list.component').then((m) => m.PhotoListComponent),
        data: {
          statusBar: { background: '#fff', color: '#000' },
        },
      },
      {
        path: 'detail/:id',
        loadComponent: () =>
          import('./photos/detail.component').then(
            (m) => m.PhotoDetailComponent,
          ),
        data: {
          statusBar: { background: '#fefefe', color: '#000' },
        },
      },
      {
        path: '**',
        redirectTo: 'list',
      },
    ],
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
    data: {
      statusBar: { background: '#000', color: '#fff' },
    },
  },
  {
    path: 'safari',
    loadComponent: () =>
      import('./safari/safari.container').then((m) => m.SafariContainer),
    data: {
      statusBar: { background: '#fff', color: '#000' },
    },
  },
  {
    path: 'mail',
    loadComponent: () =>
      import('./mail/mail.container').then((m) => m.MailContainer),
    data: {
      statusBar: { background: '#fefefe', color: '#000' },
    },
  },
  { path: '**', redirectTo: 'home' },
];
