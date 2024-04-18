import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthLoginService } from 'src/app/_services/users/auth-login.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  showLoader = false;

  constructor(
    private authService: AuthLoginService,
    private router: Router
  ){}

  signIn(loginForm: NgForm){
    this.authService.signInUser(loginForm.value).subscribe((res: any) => {
      if(!res.success == true){                
        console.log('No le sabes pa');        
      }else {      
        this.showLoader = true;
        setTimeout(() => {
          this.showLoader = false;
          this.router.navigate(['/home']);
        }, 2000);
        
        
      }
    })        
  }
}
