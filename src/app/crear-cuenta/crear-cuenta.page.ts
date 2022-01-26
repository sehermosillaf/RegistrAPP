import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-crear-cuenta",
  templateUrl: "./crear-cuenta.page.html",
  styleUrls: ["./crear-cuenta.page.scss"],
})
export class CrearCuentaPage implements OnInit {
  constructor() {}
  username: any;
  password: any;
  rut: any;
  firstName: any;
  lastName: any;
  email: any;
  ngOnInit() {}

  submit() {}
}
