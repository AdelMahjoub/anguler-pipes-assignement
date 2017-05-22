import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  searchedValue = ''; // Search value
  searchFilter = ''; // Search filter
  filters: Array<string> = []; // Filters

  reverse = false;
  sort = false;

  constructor() {  }

  appStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('stable');
    }, 2000);
  });

  servers = [
    {
      instanceType: 'medium',
      name: 'Production Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    }
  ];

  ngOnInit() {
    for (let key in this.servers[0]) {
      if (this.servers[0].hasOwnProperty(key)) {
        this.filters.push(key);
      }
    }
    this.searchFilter = this.filters[0];
  }

  onFilterChange(e: Event) {
    this.searchFilter = (<HTMLSelectElement>e.target).value;
  }  

  onReverse() {
    this.reverse = !this.reverse;
  }

  onSort() {
    this.sort = !this.sort;
  }

  getStatusClasses(server: {instanceType: string, name: string, status: string, started: Date}) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }
}
