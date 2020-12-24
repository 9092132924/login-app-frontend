import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { UserService } from '../_services/user.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { ActivatedRoute } from '@angular/router';
import { AppConstants } from '../common/app.constants';


@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {

  form: any = {};
  errorMessage = '';
  success=false;
  display=false;
  message=''
  
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.authService.forget(this.form).subscribe(
      data => {
          this.message=data.message;
          console.log(data.success)
          this.success=data.success;
          this.display=true;
      },
      err => {
        this.message = err.error.message
        this.success=err.error.success;
        this.display=true;
      }
    );
  }
}
