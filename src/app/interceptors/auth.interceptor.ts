import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserStorageService } from '../services/user-storage.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private userStorageService: UserStorageService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // si existe el usuario autenticado agregar
    const token = this.userStorageService.acces_token;
    // si el token esta definido lo agregamos a la cabecera
    if (token) {
      const authRequest = request.clone({
        headers: request.headers.set('Authorization', token)
      });
      // retornamos el token con la informacion necesaria
      return next.handle(authRequest);
    }
    return next.handle(request);
  }
}
