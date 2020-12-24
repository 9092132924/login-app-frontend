import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { UserService } from '../_services/user.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'confirm-change',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConirmComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isSuccessful = false;
  isSignUpFailed=false;
  sucessmessage;
  errorMessage = '';
  currentUser: any;
  modelobj: any;


  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit(): void {
    const confirmtoken: string = this.route.snapshot.queryParamMap.get('confirm-token');
if(confirmtoken !=null){
    this.authService.confirm(confirmtoken).subscribe(
      data => {
      
        this.isSuccessful = true;

        this.sucessmessage=data.message
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
}
  }

}
