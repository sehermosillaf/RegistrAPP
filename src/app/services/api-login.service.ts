import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ApiLoginService {
  public apiCuentas = 'http://127.0.0.1:8000/api/getCuenta';

  constructor(public http: HttpClient) {}

  getCredentials(data) {
    return this.http.post(this.apiCuentas, data);
  }
}
