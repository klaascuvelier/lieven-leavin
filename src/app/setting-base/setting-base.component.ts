import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'lieven-leavin-setting-base',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `<nav class="setting-header"><h3>Settings</h3></nav>
    <router-outlet></router-outlet>`,
  styleUrl: './setting-base.component.scss',
})
export class SettingBaseComponent {}
