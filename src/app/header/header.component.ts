
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'ip-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {
  navigationItems: any[] = [];
  constructor() {
  }
  ngOnInit() {
    this.navigationItems = [{ name: 'login' }];
  }
}
