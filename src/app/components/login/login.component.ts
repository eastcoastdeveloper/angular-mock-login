import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.scss'],
})
export class LoginComponent {
  userSelection: boolean = false;
  selectedUser: string = 'Select User';
  allUsers: any = ['Admin', 'Manager', 'Employee'];
  @ViewChild('options', { static: false }) options: ElementRef;

  constructor(
    private _router: Router,
    private _renderer: Renderer2,
    private _userService: UserService
  ) {}

  showUsers() {
    this.userSelection = !this.userSelection;
    console.log(this.userSelection);
  }

  chosenOne(i: number) {
    this.selectedUser = this.allUsers[i];
    this.userSelection = false;
  }

  authenticateUser() {
    if (this.selectedUser != 'Select User') {
      this._userService.changeUser(this.selectedUser);
      this._router.navigateByUrl('/welcome');
    } else {
      this._renderer.addClass(this.options.nativeElement, 'warning');
    }
  }
}
