import { Component } from '@angular/core';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-login',
  templateUrl: './welcome.component.html',
  styleUrls: ['welcome.component.scss'],
})
export class WelcomeComponent {
  activeUser: string;
  constructor(private _userService: UserService) {
    this.activeUser = this._userService.activeUser;
  }
}
