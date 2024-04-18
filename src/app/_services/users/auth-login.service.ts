import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from 'src/app/_models/user-model';
import { tap } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {


  constructor(
    private http: HttpClient,
    private router: Router    
  ) { }

  signUpUser(user: Users){
    console.log();
    return this.http.post<any>(environment.apiUrl + '/users/signup', user);
  }

  signInUser(user: Users) {
    console.log(user);
    return this.http.post<any>(environment.apiUrl + '/users/login', {email: user.email, password: user.password}).pipe(
      tap(( response: any) => {
        const token = response.token;
        this.setToken(token);
      })
    )
  }  

  setToken(token: string){
    localStorage.setItem('token', token);
  }


  isLogged(){
    const token = localStorage.getItem('token');    
    return !!token;
    
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  getId(){
    return localStorage.getItem('id');
  }
   
  


}
