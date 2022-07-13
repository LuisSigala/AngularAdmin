import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
  public menus = [
    {
      "id": 1,
      "name": "users",

    },
    {
      "id": 2,
      "name": "customers",
    },
    {
      "id": 3,
      "name": "client",
    }
  ]

  public modules = [
    { "idmodule": 1, "idgroup": 2, "module_name": "New users" },
    { "idmodule": 2, "idgroup": 2, "module_name": "List users" },
    { "idmodule": 3, "idgroup": 2, "module_name": "Manage users" },
    { "idmodule": 4, "idgroup": 3, "module_name": "New customers" },
    { "idmodule": 5, "idgroup": 3, "module_name": "List customers" },
    { "idmodule": 6, "idgroup": 3, "module_name": "Manage customers" },
    { "idmodule": 7, "idgroup": 4, "module_name": "Users" },
    { "idmodule": 8, "idgroup": 4, "module_name": "Customers" },
    { "idmodule": 9, "idgroup": 4, "module_name": "Setup" },
    { "idmodule": 10, "idgroup": 5, "module_name": "All sales" },
    { "idmodule": 11, "idgroup": 5, "module_name": "Inventory" },
    { "idmodule": 12, "idgroup": 6, "module_name": "Incidences report" },
    { "idmodule": 13, "idgroup": 6, "module_name": "Evolution report" }
  ]

  public groups = [
    { "idgroup": 2, "group_name": "users" },
    { "idgroup": 3, "group_name": "customers" },
    { "idgroup": 4, "group_name": "management" },
    { "idgroup": 5, "group_name": "sales" },
    { "idgroup": 6, "group_name": "reports" }
  ]

  getModules() {
    return this.modules;
  }
  getGroups() {
    return this.groups;
  }

}