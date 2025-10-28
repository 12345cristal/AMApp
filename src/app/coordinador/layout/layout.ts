// src/app/coordinador/layout/layout.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../components/sidebar/sidebar';
import { ToolbarComponent } from '../components/toolbar/toolbar';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarComponent, ToolbarComponent],
  template: `
<div class="layout-container">
  <app-sidebar></app-sidebar>

  <div class="main-content">
    <app-toolbar></app-toolbar>

    <div class="page-content">
      <router-outlet></router-outlet>
    </div>
  </div>
</div>
  `,
  styleUrls: ['./layout.scss']
})
export class LayoutComponent {}
