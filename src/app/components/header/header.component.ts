import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isScrolled = false;
  blurBg = false;
  headerOpacity = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY;
    const heroHeight = window.innerHeight; // asumiendo hero ocupa 100vh
    // Opacidad progresiva hasta el final del hero
    if (scrollY < heroHeight) {
      this.headerOpacity = Math.min(scrollY / (heroHeight * 0.7), 1); // más rápido el fade
      this.blurBg = false;
    } else {
      this.headerOpacity = 1;
      this.blurBg = true;
    }
    this.isScrolled = scrollY > 50;
  }
}
