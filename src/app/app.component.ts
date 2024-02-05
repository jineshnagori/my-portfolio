import { Component, Renderer2, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HeroComponent } from './pages/hero/hero.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ContactComponent } from './pages/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HeroComponent, ProjectsComponent, SkillsComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'portfolio-angular';
  theme : string = 'dark';

  constructor(private renderer: Renderer2, private el: ElementRef, @Inject(DOCUMENT) private _document: Document) {}

  onToggleTheme() {
    setTimeout(() => {
      const container = this.el.nativeElement.querySelector('#simulateLightMode');
      const dataTheme = container.getAttribute('data-theme');
      const favicon = this._document.getElementById('favicon');

      if (dataTheme === 'light') {
        this.renderer.setAttribute(container, 'data-theme', 'dark');
        this.theme = 'dark';
        if (favicon) {
          favicon.setAttribute('href', 'assets/images/dhero.png');
        }
      } else {
        this.renderer.setAttribute(container, 'data-theme', 'light');
        this.theme = 'light';
        if (favicon) {
          favicon.setAttribute('href', 'assets/images/hero.png');
        }
      }
    }, 100);
    console.log('toggle theme from AppComponent');
  }
}
