import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  activeUser: string = undefined;

  private activeUserSubject = new BehaviorSubject(this.activeUser);
  currentUser$ = this.activeUserSubject.asObservable();

  changeUser(newValue: string) {
    this.activeUserSubject.next(newValue);
    this.activeUser = newValue;
    return newValue;
  }
}
