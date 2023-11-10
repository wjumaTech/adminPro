import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../../components/components.module';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule
  ],
  templateUrl: './progress.component.html',
  styleUrls: [`./progress.component.css`]
})
export class ProgressComponent {

  progreso1 = 70;
  progreso2 = 30;

  get getProgreso1() {
    return `${this.progreso1}%`;
  }

  get getProgreso2() {
    return `${this.progreso2}%`
  }

  cambioValorHijo( valor: number ) {
    console.log("Hey!!!", valor)
  }

}
