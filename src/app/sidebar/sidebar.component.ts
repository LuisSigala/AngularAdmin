import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public groups: any;
  public modules: any;
  public groups_modules: any;
  public userthing;

  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
    this.groups = this.apiService.getGroups();
    this.modules = this.apiService.getModules();
    this.userthing = localStorage.getItem("host")
  }

  createMenu(): void {
    this.groups.forEach(value => {
      let group_module = {
        "idgroup": value.idgroup,
        "group_name": value.group_name,
        "modules": []
      };
      this.modules = this.filterModules(value.idgroup);
      this.modules.forEach(value => {
        const group_module: any[] = [];
        group_module["modules"].push(value);
      });
    });
  }


  filterModules(idgroup) {
    return this.modules.filter(function (item) {
      return item.idgroup == idgroup;
    });

  }
}