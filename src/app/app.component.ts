import { Component } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-i18n-webapp';
  langs: string[] = [];

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('es');

    this.translate.addLangs(['es', 'en']);
    this.langs = this.translate.getLangs();

    // this.translate.get('title')
    //   .subscribe((title: string) => console.log(title));

    this.translate.stream('title')
      .subscribe((title: string) => console.log(title));

    this.translate.stream('grettings', { nombre: 'Fulano' })
      .subscribe((res: string) => console.log(res));
  }

  public changeLanguage(language: string) {
    this.translate.use(language);
  }

}
