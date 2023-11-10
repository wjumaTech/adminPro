import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: ``
})
export class IncrementadorComponent implements OnInit {

  ngOnInit(): void {
      this.btnClass = `btn ${this.btnClass}`;
  }

  @Input('valor') progreso = 35;
  @Input() btnClass = 'btn-primary';

  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter();

  public cambiarValor(valor: number): void {

    if(this.progreso <= 0 && valor <= 0) {
      this.valorSalida.emit(0)
      this.progreso = 0;
      return;
    }

    if(this.progreso >= 100 && valor >= 0) {
      this.valorSalida.emit(100)
      this.progreso = 100;
      return;
    }

    this.progreso += valor
    this.valorSalida.emit(this.progreso)
  }

  onChange( nuevoValor: number ) {
    
    if(nuevoValor <= 0 || nuevoValor === null ) {
      this.progreso = 0;
    }else if( nuevoValor >= 100 ) {
      this.progreso = 100;
    } else {
      this.progreso = nuevoValor;
    }

    this.valorSalida.emit(this.progreso);
  }

}


