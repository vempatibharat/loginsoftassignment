import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-loginsoft-form',
  templateUrl: './loginsoft-form.component.html',
  styleUrls: ['./loginsoft-form.component.css'],
})
export class LoginFormTemplateComponent {
  login = { email: '', password: '' };

  constructor(private router: Router) {}

  LoadLandingPage() {
    if (
      this.login.email == 'admin@admin.com' &&
      this.login.password == 'passcode'
    ) {
      this.router.navigate(['/landingpage']);
    } else {
      alert(
        'Fill in details to login(UserName = admin@admin.com, Password= passcode)'
      );
    }
  }
}
