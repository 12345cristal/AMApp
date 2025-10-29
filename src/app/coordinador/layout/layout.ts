import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../components/sidebar/sidebar';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarComponent],
  templateUrl: './layout.html',
  styleUrls: ['./layout.scss']
})
export class LayoutComponent {
  sidebarOpen = true;

  constructor() {
    this.checkScreenWidth();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreenWidth();
  }

  private checkScreenWidth() {
    this.sidebarOpen = window.innerWidth > 768;
  }
}
