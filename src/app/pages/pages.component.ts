import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { PagesModule } from './pages.module';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    PagesModule,
    SharedModule
  ],
  templateUrl: './pages.component.html',
  styles: ``
})
export class PagesComponent {

}
