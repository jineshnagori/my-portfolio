import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  pdf: string = 'assets/documents/Jinesh-Resume.pdf';

  @Input() theme: string = 'dark';
  class: string = 'hide';
  
  startDate = new Date(2020, 10);

  getYearsSinceStart(): number {
    const currentDate = new Date();
    const diffInMilliseconds = currentDate.getTime() - this.startDate.getTime();
    const diffInYears = diffInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
    // return parseFloat(diffInYears.toFixed(1));
    const roundedYears = Math.floor(diffInYears * 2) / 2;
    return roundedYears;
  }

  ngOnChanges(changes: any) {
    if(changes.theme) {
      this.class = this.theme === 'dark' ? 'hide' : 'show';
      console.log('theme changed in HeroComponent', this.theme, this.class);
    }
  }
}