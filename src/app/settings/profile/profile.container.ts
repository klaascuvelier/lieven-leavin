import { Component } from '@angular/core';
import { ViewComponent } from '../../view/view.component';

@Component({
  selector: 'll-profile',
  standalone: true,
  styleUrl: './profile.container.scss',
  template: `
    <div class="content">
      <img src="./assets/lieven.png" />
      <div class="name">Lieven Dekeyser</div>
      <div class="title">Chief Grumpy Officer - iOS</div>
      <a href="mailto:lieven@planetreesoftware.com" class="contact"
        >lieven at planetreesoftware .com</a
      >
    </div>
  `,
})
export class ProfileContainer {}
