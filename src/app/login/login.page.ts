import {
  Component,
  OnInit
} from "@angular/core";
import {
  NavigationExtras,
  Router
} from "@angular/router";
import {
  ApiLoginService
} from "../services/api-login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  constructor(public router: Router, public api: ApiLoginService) {}

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

  // login() {

  //   console.log(this.username);
  //   console.log(this.password);
  // }

  //  form = new FormGroup({
  //   username: new FormControl('', Validators.required),
  //   password: new FormControl('', Validators.required),
  // });

  // signIn(){
  //   this.router.navigate(['/home']);
  // }
}