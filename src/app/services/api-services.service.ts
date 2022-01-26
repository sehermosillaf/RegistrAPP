import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ApiServices {
  public apiLogin = "http://127.0.0.1:8000/api/getCuenta";
  public apiAsistentencia = "http://127.0.0.1:8000/api/getAsistencia";

  constructor(public http: HttpClient) {}

  getCredentials(data) {
    return this.http.post(this.apiLogin, data);
  }

  getAsistencia() {
    return this.http.get(this.apiAsistentencia);
  }
}
