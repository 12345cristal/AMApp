import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss']
})
export class SidebarComponent {
  menuVisible = false;
  panelPrincipalOpen = false;
  gestionClinicaOpen = false;
  administracionOpen = false;

  // Alterna sidebar
  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }

  // Abre sidebar
  openSidebar() {
    this.menuVisible = true;
  }

  // Cierra sidebar
  closeSidebar() {
    this.menuVisible = false;
  }

  // Cierra sidebar automáticamente si se redimensiona a desktop grande
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const width = (event.target as Window).innerWidth;
 if (width > 1024) this.menuVisible = true; // desktop grande
if (width <= 1024 && width >= 768) this.menuVisible = true; // tablet/laptop mediana
if (width < 768) this.menuVisible = false; // móvil
 }
}
