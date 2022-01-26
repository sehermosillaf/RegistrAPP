import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaPassPageRoutingModule } from './nueva-pass-routing.module';

import { NuevaPassPage } from './nueva-pass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaPassPageRoutingModule
  ],
  declarations: [NuevaPassPage]
})
export class NuevaPassPageModule {}
