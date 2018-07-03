import { Component } from '@angular/core';
import { OnInit } from '@angular/core';


@Component({
  selector: 'ip-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
  navigationItems: any[] = [];
  categories: any[] = [];
  constructor() {
  }

  ngOnInit() {
    this.navigationItems = [{ name: 'login'}];
    this.categories = [{ name: 'Information Technology', imgUrl: '../../assets/images/it.jpg' },
    { name: 'Finance', imgUrl: '../../assets/images/finance.jpg' },
    { name: 'Marketing', imgUrl: '../../assets/images/marketing.jpg' },
    { name: 'Accounting', imgUrl: '../../assets/images/accounts.jpg' },
    { name: 'Management', imgUrl: '../../assets/images/management.jpg' },
    { name: 'Human Resources', imgUrl: '../../assets/images/hr.jpg' }];
  }
}
