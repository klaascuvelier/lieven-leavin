import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lieven-leavin-notes',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="notes-container">
    <div class="body">
      <h1>My Gitlab Stats</h1>
      <p><span>Insertions:</span> 2 646 884</p>
      <p><span>Deletions:</span> 2 850 428</p>
      <p><span>Files changed:</span> 39 797</p>
      <p><span>Commits:</span> 8 388</p>
      <p><span>Lines changed:</span> 5 497 312</p>
      <p><span>First commit:</span> Tue Jan 18 14:38:32 2011</p>
      <p><span>Top files updated: </span></p>
      <p class="indent">SHPMenuTabBarController.m</p>
      <p class="indent">SHPContentBrowserViewController.m</p>
    </div>
  </div> `,
  styleUrl: './notes.container.scss',
})
export class NotesComponent {}
