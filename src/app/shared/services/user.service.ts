import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User [] = [
    {login:'toto',mdp:'123'}
  ];

  constructor() { }



testConnexion(user:User):boolean{
  if(this.users.findIndex((u)=>user.login===u.login && user.mdp===u.mdp)>=0)
    return true;
  return false;
}

testInscription(user:User):boolean{
  if(this.users.findIndex((u)=>user.login===u.login)>=0)
    return false;
  this.users.push(user);
  return true;
}

}
