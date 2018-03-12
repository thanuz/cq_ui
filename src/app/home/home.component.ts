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
    this.categories = [{ name: 'Information Technology', imgUrl: '../../assets/images/2.jpg' },
    { name: 'Finance', imgUrl: '../../assets/images/1.jpg' },
    { name: 'Marketing', imgUrl: '../../assets/images/3.jpg' },
    { name: 'Accounting', imgUrl: '../../assets/images/4.jpg' },
    { name: 'Management', imgUrl: '../../assets/images/5.jpg' },
    { name: 'Human Resources', imgUrl: '../../assets/images/6.jpg' }];
  }
}
