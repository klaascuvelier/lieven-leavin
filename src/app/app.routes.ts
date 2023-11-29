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
          statusBar: { background: '#f8f8f8', color: '#000' },
        },
      },
      {
        path: '**',
        redirectTo: 'list',
      },
    ],
  },
  {
    path: 'youtube',
    loadComponent: () =>
      import('./youtube/youtube.container').then((m) => m.YoutubeContainer),
    data: {
      statusBar: { background: '#000', color: '#fff' },
    },
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
    path: 'showpad',
    loadComponent: () =>
      import('./showpad/showpad.container').then((m) => m.ShowpadContainer),
    data: {
      statusBar: { background: '#f8f8f8', color: '#000' },
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
      statusBar: { background: '#f8f8f8', color: '#000' },
    },
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./setting-base/setting-base.component').then(
        (m) => m.SettingBaseComponent,
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./settings/settings.container').then(
            (m) => m.SettingsContainer,
          ),
        data: {
          statusBar: { background: '#fefefe', color: '#000' },
        },
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./settings/profile/profile.container').then(
            (m) => m.ProfileContainer,
          ),
        data: { statusBar: { background: '#f8f8f8', color: '#000' } },
      },
      {
        path: 'cell',
        loadComponent: () =>
          import('./setting-cell/setting-cell.component').then(
            (m) => m.SettingCellComponent,
          ),
        data: {
          statusBar: { background: '#fefefe', color: '#000' },
        },
      },
      {
        path: 'general',
        loadComponent: () =>
          import('./setting-general/setting-general.component').then(
            (m) => m.SettingGeneralComponent,
          ),
        data: {
          statusBar: { background: '#fefefe', color: '#000' },
        },
      },
    ],
  },
  {
    path: 'notes',
    loadComponent: () =>
      import('./notes/notes.container').then((m) => m.NotesComponent),
    data: {
      statusBar: { background: '#f8f8f8', color: '#000' },
    },
  },
  { path: '**', redirectTo: 'home' },
];
