import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components.module';
@Component({
  selector: 'app-grafica1',
  standalone: true,
  imports: [
    CommonModule,
    ComponentsModule
  ],
  templateUrl: './grafica1.component.html',
  styles: ``
})
export class Grafica1Component {

  labels1:string[] = ['pan', 'refrescos', 'tacos'];
  data1: number[] = [10,30,25];

}
