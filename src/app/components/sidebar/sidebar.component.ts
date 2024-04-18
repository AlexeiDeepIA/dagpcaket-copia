import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  currentPage: string;

  constructor (private router: Router){
    this.currentPage = this.router.url;
  }

  isCurrentPage(route: string): boolean{
    return this.currentPage.includes(route);
  }

}
