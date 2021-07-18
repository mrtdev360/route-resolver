import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import {UsersListService} from './../service/user-list.service'
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
  })
export class RouteResolver implements Resolve<any> {
   constructor(public usersListService: UsersListService) { }

   resolve() {
      return this.usersListService.getUsers().pipe(
         catchError((error) => {
            return of('No data');
         })
      )
   }
}