import { Component } from '@angular/core';
import { MuseumHeaderComponent } from './museum-header/museum-header';
import { VideoHeroComponent } from './video-hero/video-hero';

@Component({
  selector: 'app-root',
  imports: [MuseumHeaderComponent, VideoHeroComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
