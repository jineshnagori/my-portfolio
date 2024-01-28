import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Amit Computers & Printers',
      tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      type: 'Frontend',
      url: 'https://amitcomputers.in',
    },
    {
      title: 'Vanguard United',
      tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      type: 'Frontend',
      url: 'https://vanguard-united.com',
    },
    {
      title: 'SocketOS',
      tags: ['Operating System', 'Bash', 'HTML', 'CSS', 'JavaScript'],
      type: 'OS & Frontend',
      url: 'https://socketos.eu.org',
    },
    {
      title: 'Workseez',
      tags: ['HTML', 'CSS', 'JavaScript'],
      type: 'Frontend',
      url: 'https://workseez.com',
    },
    {
      title: 'Xccurate Security',
      tags: ['HTML', 'CSS', 'JavaScript'],
      type: 'Frontend',
      url: 'https://jineshnagori.github.io/xccurate-security/',
    },
    {
      title: 'Manorama Home Stay',
      tags: ['HTML', 'CSS', 'JavaScript'],
      type: 'Frontend',
      url: 'https://jineshnagori.github.io/manorama/',
    },
    {
      title: 'User Portfolio',
      tags: ['HTML', 'CSS', 'JavaScript'],
      type: 'Frontend',
      url: 'https://jineshnagori.github.io/akshatsingh.ml/',
    },
    {
      title: 'FreeBookPost',
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      type: 'Frontend & Backend',
      url: 'https://github.com/jineshnagori/FreeBookPost',
    },
    {
      title: 'Mad Music',
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      type: 'Frontend & Backend',
      url: 'https://github.com/jineshnagori/mad-music',
    },
    {
      title: 'Easy Recharge',
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      type: 'Frontend & Backend',
      url: 'https://github.com/jineshnagori/easyRecharge'
    },
  ];

  openUrl(url: string) {
    window.open(url, '_blank');
  }
}