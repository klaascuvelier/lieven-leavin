import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lieven-leavin-setting-cell',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>Cellular Usage</h3>
    <div class="settings-item">
      <img class="settings-item__icon" src="/assets/icons/showpad.png" />
      <span class="settings-item__text">Showpad</span>
      <span class="settings-item__sub-text">612 GB</span>
    </div>
  `,
  styleUrl: './setting-cell.component.scss',
})
export class SettingCellComponent {}
