import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class HeaderComponent {
  menuAbierto = false;

  // Abre o cierra el menú
  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
  }

  // Cierra el menú al hacer clic en un enlace
  cerrarMenu() {
    this.menuAbierto = false;
  }
}
