import { afterNextRender, Component, ElementRef, viewChild } from '@angular/core';

@Component({
  selector: 'app-video-hero',
  templateUrl: './video-hero.html',
  styleUrl: './video-hero.scss'
})
export class VideoHeroComponent {
  private readonly fallbackVideoSource =
    'https://github.com/gilsoaresone/museu-tjsp/releases/download/site-assets/video.mp4';
  private readonly videoElement = viewChild.required<ElementRef<HTMLVideoElement>>('heroVideo');

  constructor() {
    afterNextRender(() => {
      this.initializePlayback();
    });
  }

  private initializePlayback(): void {
    const video = this.videoElement().nativeElement;
    const tryPlay = () => {
      void video.play().catch(() => undefined);
    };
    const loadFallbackSource = () => {
      if (video.currentSrc.includes('/releases/download/site-assets/video.mp4')) {
        return;
      }

      video.src = this.fallbackVideoSource;
      video.load();
      video.addEventListener('loadeddata', tryPlay, { once: true });
      video.addEventListener('canplay', tryPlay, { once: true });
    };

    // Reinforce the autoplay constraints browsers check before allowing playback.
    video.autoplay = true;
    video.defaultMuted = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.addEventListener('error', loadFallbackSource, { once: true });

    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      tryPlay();
      return;
    }

    video.addEventListener('loadeddata', tryPlay, { once: true });
    video.addEventListener('canplay', tryPlay, { once: true });
  }
}
