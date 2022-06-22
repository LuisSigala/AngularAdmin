import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public menuOptions: any;

  constructor(public apiService: ApiService) { }

  ngOnInit(): void {

    this.menuOptions = this.apiService.getUsers();

  }

}