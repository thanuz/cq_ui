
import { Component, Renderer2 } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface INavigationItem {
  name: string;
  routerLink: string;
}

@Component({
  selector: 'ip-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {
  navigationItems: INavigationItem[] = [];
  isMenuOpened = false;
  constructor(private renderer: Renderer2, private router: Router) {
  }
  ngOnInit() {
    this.navigationItems = [
      { name: 'Discover', routerLink: '/discover' },
      { name: 'Get started', routerLink: '/start' },
      { name: 'Login', routerLink: '/login' }
    ];
  }
  openMenu(): void {
    this.renderer.addClass(document.body, 'is-menu-opened');
    this.isMenuOpened = true;
  }
  closeMenu(): void {
    this.renderer.removeClass(document.body, 'is-menu-opened');
    this.isMenuOpened = false;
  }
  goto(state: string): void {
    this.router.navigate([state]);
    this.closeMenu();
  }
}
