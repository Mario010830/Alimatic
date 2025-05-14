import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('provideText') provideText!: ElementRef;
  @ViewChild('provideImages') provideImages!: ElementRef;

  ngAfterViewInit() {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      if (this.provideText && this.provideImages) {
        const options = {
          root: null,
          rootMargin: '0px',
          threshold: 0.2
        };
        const observer = new window.IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.target === this.provideText.nativeElement) {
              if (entry.isIntersecting) {
                this.provideText.nativeElement.classList.add('animate-left');
              } else {
                this.provideText.nativeElement.classList.remove('animate-left');
              }
            }
            if (entry.target === this.provideImages.nativeElement) {
              if (entry.isIntersecting) {
                this.provideImages.nativeElement.classList.add('animate-right');
              } else {
                this.provideImages.nativeElement.classList.remove('animate-right');
              }
            }
          });
        }, options);
        observer.observe(this.provideText.nativeElement);
        observer.observe(this.provideImages.nativeElement);
      }
    }
  }
}
