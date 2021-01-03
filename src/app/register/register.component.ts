import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  sucessmessage = ''


  constructor(private userService: UserService) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    this.userService.register(this.form).subscribe(
      data => {

        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.sucessmessage = data.message
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

}
