import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  form: any = {};
confirmToken=''
errorMessage = '';
success=false;
display=false;
message='';
notSame=false;
  constructor( private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit(): void {

    this.confirmToken = this.route.snapshot.queryParamMap.get('confirm-token');
  }

  onSubmit(): void {
    let pass = this.form.password;
    let confirmPass = this.form.matchingPassword;
  
    if(pass === confirmPass) {
      this.notSame= false   
    this.userService.reset(this.form,this.confirmToken).subscribe(
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
    else{
       this.notSame= true   
    }
  };
}
