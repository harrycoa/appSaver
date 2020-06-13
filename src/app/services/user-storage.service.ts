import { Injectable } from '@angular/core';
import { SessionUserModel } from '../components/login/models/session-user.model';

@Injectable({
  providedIn: 'root',
})
export class UserStorageService {
  private key = 'ng-auth';
  constructor() {}

  // propiedad get user , no metodo ACCEDIENDO AL USUARIO DEL BACKEND
  get user(): SessionUserModel{
    // si esta definido el usuario esta en sesion
    let user = localStorage.getItem(this.key);
    if (user) {
      // convertir la cadena a un objeto
      let objUser = JSON.parse(user);
      return objUser.user as SessionUserModel;
    }
    return null;
  }

  // propiedad get isauth, no metodo si esta autenticado o no
  get isAuthenticaded(): boolean{
    return localStorage.getItem(this.key) !== null;
  }

  // seteamos el user
  set(object): void {
    localStorage.setItem(this.key, JSON.stringify(object));
  }

  destroy(): void {
    localStorage.removeItem(this.key);
  }
}
