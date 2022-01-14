import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { format, parseISO } from 'date-fns';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) { }
  myDate = new Date().toISOString();
  formattedDate = format(parseISO(this.myDate), 'dd-MM')
  formattedTime = format(parseISO(this.myDate), 'HH:mm:ss')

  getDate() {
    console.log(this.formattedDate);
    console.log(this.formattedTime);
    console.log('Ir a la pagina de CAMARA QR');
    this.router.navigate(['/registro-asistencia']);
  }



}