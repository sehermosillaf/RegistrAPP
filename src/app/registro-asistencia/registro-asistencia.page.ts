import { Component, OnInit } from "@angular/core";
import { NavigationExtras, Router } from "@angular/router";
import { ApiServices } from "../services/api-services.service";
@Component({
  selector: "app-registro-asistencia",
  templateUrl: "./registro-asistencia.page.html",
  styleUrls: ["./registro-asistencia.page.scss"],
})
export class RegistroAsistenciaPage implements OnInit {
  constructor(public router: Router, public api: ApiServices) {}

  asistencia: any;

  ngOnInit() {}

  listarAsistencias() {
    this.api.getAsistencia().subscribe((asistencias) => {
      console.log(asistencias);
      this.asistencia = asistencias;
    });
  }
}
