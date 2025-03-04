import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelMenuModule } from 'primeng/panelmenu';
import { Router, RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { MenuModule } from 'primeng/menu';
import { SidebarComponent } from './components/sidebar/sidebar.component'; // Importe o Sidebar
import { HeaderComponent } from './components/header/header.component'; // Importe o Header

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    CommonModule,
    PanelMenuModule,
    RouterModule,
    MenuModule,
    SidebarComponent, // Adicione o Sidebar
    HeaderComponent, // Adicione o Header
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  menuItems: any[] = []; // Itens do menu
  collapsed = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.menuItems = this.buildMenuItems(routes);
  }

  // Função para construir os itens do menu a partir das rotas
  private buildMenuItems(routes: any[]): any[] {
    return routes
      .filter((route) => route.data && route.data['label']) // Filtra rotas com dados e label
      .map((route) => ({
        label: route.data['label'],
        icon: route.data['icon'],
        routerLink: route.path ? [`/${route.path}`] : null,
        items: route.children
          ? this.buildMenuItems(route.children) // Recursão para filhos
          : null,
      }));
  }
}