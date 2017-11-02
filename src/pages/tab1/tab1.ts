import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PERSONAJES } from '../../data/personajes.data';

import { Pagina2Page } from '../index.paginas';

@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html',
})
export class Tab1Page {

  personajes: any[] = [];

  constructor(public navCtrl: NavController) {
    this.personajes = PERSONAJES.slice(0);
  }

  irDetalle(personaje: any) {
    this.navCtrl.push(Pagina2Page, { personaje });
  }

}
