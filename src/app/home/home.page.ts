
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
 
  constructor(
    private router: Router,
    private menu: MenuController
  ) {}

irMenu() {
    this.menu.open('start'); // 'start' es el lado del menú lateral
  }

}
