import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) { }



  goToCamera() {
    console.log('Ir a la pagina de CAMARA QR');
    this.router.navigate(['/registro-asistencia']);
  }
 


}