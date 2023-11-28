import { Component } from '@angular/core';

@Component({
  selector: 'll-youtube',
  standalone: true,
  styleUrl: './youtube.container.scss',
  template: `
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
      title=""
      frameBorder="0"
      allowFullScreen
    ></iframe>
  `,
})
export class YoutubeContainer {}
