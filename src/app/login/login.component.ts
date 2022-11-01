import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import{LoaderService} from '../Shared/services/loader.service'
import{UtilityService} from '../Shared/services/utility.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 
  loginForm: FormGroup;

  isVerify = false;
  constructor(
    private router: Router,
    private loader: LoaderService,
   private us: UtilityService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?!.{41})[a-zA-Z0-9]+(\\.[_a-zA-Z0-9]+)*@[a-zA-Z0-9-]{2,50}([.][a-zA-Z]{2,3}|[.][a-zA-z-]{2,3}[.][a-zA-Z]{2})$'
          ),
        ],
      ],
      password: ['', Validators.required],
    });
  }

  getOtp() {
    this.loader.showLoader();
    //this.reset();

    let body = {
      emailId: this.loginForm.value.email,
    };
   



    // this.us
    //   .callplatware(body, {}, '/ADMINPORTAL/adminportal/api/login/v1/send-otp')
    //   .then(
    //     (res) => {
    //       this.loader.hideLoader();
    //       if (res.data.status.toLowerCase() === 'success') {
    //         let data = res.data.response;
    //         if (data.status.toLowerCase() === 'success') {
    //           this.otpResponse = data.success.details;
    //           this.showOtpBox = true;
    //           this.timeout();
    //         } else if (data.status.toLowerCase() === 'error') {
    //           this.us.showMessage(data.error.message);
    //         }
    //       }
    //     },
    //     (err) => {
    //       this.loader.hideLoader();
    //       this.us.showMessage('Please try again later!');
    //     }
    //   );
  }



  onSubmit() {
    this.loader.showLoader();
    const body = {
      AUTH: [
        {
          id: this.loginForm.value.email,
          otp: this.loginForm.value.otp,
        
        },
      ],
    };
    this.isVerify = true;
    this.router.navigate(['/dashboard']);
    sessionStorage.setItem('userDetail', this.loginForm.value.email)

    // this.us.authCall(body).then((_res) => {
    //   this.loader.hideLoader();
    //   let response = JSON.parse(_res.data)
    //   if (response.status == 'success') {
    //     sessionStorage.setItem('isUserSuperAdmin', response.success.details.isSuperAdmin)
    //     sessionStorage.setItem('userDetail', this.loginForm.value.email)
    //     this.router.navigate(['/dashboard'])
    //   }
    //   else {
    //     this.isVerify = false;
    //     this.loader.hideLoader();
    //     this.us.showMessage('Something went wrong while Logging In.');
    //   }
    // },
    //   (error) => {
    //     this.isVerify = false;
    //     this.loader.hideLoader();
    //     this.us.showMessage(error.errorMessage);
    //     console.log(error);
    //   })
  }

  

}
