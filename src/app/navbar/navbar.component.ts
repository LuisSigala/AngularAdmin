import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public userAlias

  constructor() { }

  ngOnInit(): void {
    this.userAlias = localStorage.getItem("warehouse")
  }

}
