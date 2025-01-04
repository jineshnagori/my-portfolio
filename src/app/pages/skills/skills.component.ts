import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skillCategories = [
    {
      title: 'Cloud',
      skills: [
        { src: 'https://img.icons8.com/color/480/azure-1.png', alt: 'azure' },
      ],
    },
    {
      title: 'DevOps',
      skills: [
        { src: 'https://img.icons8.com/color/480/git.png', alt: 'git' },
        { src: 'https://img.icons8.com/color/480/docker.png', alt: 'docker' },
        { src: 'https://img.icons8.com/color/480/kubernetes.png', alt: 'kubernetes' },
        { src: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/480/external-development-experience-through-the-native-integrations-of-azure-with-visual-studio-logo-color-tal-revivo.png', alt: 'azure-devops' },
        { src: 'https://img.icons8.com/color/480/openshift.png', alt: 'openshift' },
        { src: 'https://img.icons8.com/color/480/jenkins.png', alt: 'jenkins' },
      ],
    },
    {
      title: 'Provisioning & Configuration',
      skills: [
        { src: 'https://img.icons8.com/color/480/terraform.png', alt: 'terraform' },
        { src: 'https://img.icons8.com/color/480/ansible.png', alt: 'ansible' },
      ],
    },
    {
      title: 'Monitoring & Logging',
      skills: [
        { src: 'https://img.icons8.com/color/480/prometheus-app.png', alt: 'prometheus' },
        { src: 'https://files.readme.io/e5e1b43-grafana-loki.png', alt: 'loki' },
        { src: 'https://img.icons8.com/fluency/480/grafana.png', alt: 'grafana' },
      ],
    },
    {
      title: 'Languages',
      skills: [
        { src: 'https://img.icons8.com/color/480/html-5--v1.png', alt: 'html' },
        { src: 'https://img.icons8.com/color/480/css3.png', alt: 'css' },
        { src: 'https://img.icons8.com/color/480/javascript--v1.png', alt: 'javascript' },
        { src: 'https://img.icons8.com/color/480/bash.png', alt: 'bash' },
        { src: 'https://img.icons8.com/color/480/python--v1.png', alt: 'python' },
        { src: 'https://img.icons8.com/color/480/powershell.png', alt: 'powershell' },
        { src: 'https://img.icons8.com/color/480/mysql-logo.png', alt: 'mysql' },
      ],
    },
    {
      title: 'Libraries/Frameworks',
      skills: [
        { src: 'https://img.icons8.com/external-those-icons-flat-those-icons/480/external-Bootstrap-Logo-social-media-those-icons-flat-those-icons.png', alt: 'bootstrap' },
        { src: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/480/external-jquery-is-a-javascript-library-designed-to-simplify-html-logo-color-tal-revivo.png', alt: 'jquery' },
        { src: 'https://img.icons8.com/officel/480/react.png', alt: 'react' },
        { src: 'https://img.icons8.com/color/480/angularjs.png', alt: 'angularjs' },
      ],
    },
  ];

  activeCategory: string = '';

  setActiveCategory(category: string): void {
    this.activeCategory = category;
    console.log('activeCategory', this.activeCategory);
  }

  clearActiveCategory(): void {
    this.activeCategory = '';
    console.log('activeCategory', this.activeCategory);
  }
}