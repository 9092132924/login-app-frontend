import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';




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
  
  constructor( private userService: UserService) {}

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.userService.forget(this.form).subscribe(
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
