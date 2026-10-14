import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { LucideCircleArrowOutDownRight, LucideCircleArrowRight } from '@lucide/angular';

@Component({
  imports: [ RouterOutlet],
  selector: 'app-root',
  // styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('gerador-certificados');
}
