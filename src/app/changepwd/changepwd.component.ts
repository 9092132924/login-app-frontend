import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'confirm-change',
  templateUrl: './changepwd.component.html',
  styleUrls: ['./changepwd.component.css']
})
export class ChangepwdComponent implements OnInit {

  form: any = {};
  confirmToken = ''
  errorMessage = '';
  success = false;
  display = false;
  message = '';
  notSame = false;
  user: any;
  constructor(private userSer: UserService, private token: TokenStorageService) { }

  ngOnInit(): void {
  this.user = this.token.getUser();
    console.log(this.user)
  }

  onSubmit(): void {
    let pass = this.form.password;
    let confirmPass = this.form.matchingPassword;

    if (pass === confirmPass) {
      this.notSame = false
      this.userSer.change(this.user, this.form).subscribe(
        data => {
          this.message = data.message;
          this.success = data.success;
          this.display = true;
        },
        err => {
          this.message = err.error.message
          this.success = err.error.success;
          this.display = true;
        }
      );
    }
    else {
      this.notSame = true
    }
  };
}
