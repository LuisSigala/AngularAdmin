import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public userAlias;

  constructor(public auth: AuthService) {
    this.GetUserInfo();
  }

  GetUserInfo(){
    this.auth.user$.subscribe((response)=>{
      let _response;
      _response = response;
      console.log(response);
      localStorage.setItem("warehouse", _response.nickname)
      localStorage.setItem("host", _response.name)
      return this.userAlias = response?.nickname;
    });
  }

  title = 'AngularAdmin';

   public showSidebar = 1;
   public showNavbar = 1;
}
