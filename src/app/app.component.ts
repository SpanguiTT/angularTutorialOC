import { Component } from '@angular/core';
import { registerLocaleData } from "@angular/common";
import localeFr from "@angular/common/locales/fr";
registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isAuth = false;

  //lastUpdate = new Date();
  lastUpdate = new Promise(
    (resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 2000
      );
    }
  );

  appareils = [
    {
      name: 'Machine à laver',
      status: 'allumé'
    },
    {
      name: 'Télévision',
      status: 'allumé'
    },
    {
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  onAllumer() {
    console.log('On allume tout !');
  }
}
