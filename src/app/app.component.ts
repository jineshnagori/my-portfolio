import { Component } from '@angular/core';
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
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-angular';
}
