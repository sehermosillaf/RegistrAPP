import { Component, OnInit } from "@angular/core";
import { NavigationExtras, Router } from "@angular/router";
import { ApiServices } from "../services/api-services.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  constructor(public router: Router, public api: ApiServices) {}

  username: any;
  password: any;

  ngOnInit() {}

  login() {
    console.log(this.username);
    console.log(this.password);
    this.api
      .getCredentials({
        username: this.username,
        password: this.password,
      })
      .subscribe((resp) => {
        if (resp != null) {
          let navigation: NavigationExtras = {
            queryParams: {
              mensaje: JSON.stringify(resp),
            },
          };
          this.router.navigate(["/home"], navigation);
        }
      });
  }

  newUser() {
    this.router.navigate(["/crear-cuenta"]);
  }

  passwordRecovery() {
    this.router.navigate(["/nueva-pass"]);
  }

  //  form = new FormGroup({
  //   username: new FormControl('', Validators.required),
  //   password: new FormControl('', Validators.required),
  // });

  // signIn(){
  //   this.router.navigate(['/home']);
  // }
}
