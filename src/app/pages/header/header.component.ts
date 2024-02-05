import { Component, Renderer2, ElementRef, HostListener, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e: Event) {
    const scroll = window.scrollY;
    const header = this.el.nativeElement.querySelector('.header');
    if (scroll >= 50) {
      this.renderer.addClass(header, 'overlayHeader');
    } else {
      this.renderer.removeClass(header, 'overlayHeader');
    }
  }

  @Output() toggleTheme = new EventEmitter<void>();

  onToggleTheme() {
    this.toggleTheme.emit();
  }

  @Input() theme: string = 'dark';
  class: string = 'hide';

  ngOnChanges(changes: any) {
    if(changes.theme) {
      this.class = this.theme === 'dark' ? 'hide' : 'show';
    }
  }
}