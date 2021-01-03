import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
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


  constructor( private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit(): void {
    const confirmtoken: string = this.route.snapshot.queryParamMap.get('confirm-token');
if(confirmtoken !=null){
    this.userService.confirm(confirmtoken).subscribe(
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
