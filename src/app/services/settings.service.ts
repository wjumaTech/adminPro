import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public themeField = document.querySelector('#theme');

  constructor() {
    const theme = localStorage.getItem('theme') || './assets/css/colors/blue-dark.css';
    this.themeField?.setAttribute('href', theme);
  }

  public changeTheme( theme: string ): void {
    const hrefUrl = `./assets/css/colors/${theme}.css`;
    this.themeField?.setAttribute('href', hrefUrl);
    localStorage.setItem('theme', hrefUrl);
    this.checkCurrentTheme();
  }

  checkCurrentTheme() {
    const links: NodeListOf<Element> = document.querySelectorAll('.selector');
    links.forEach( elem => {
      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`
      const currenTheme = this.themeField?.getAttribute('href');
      if(btnThemeUrl === currenTheme) {
        elem.classList.add('working');
      }
    });
  }

}
