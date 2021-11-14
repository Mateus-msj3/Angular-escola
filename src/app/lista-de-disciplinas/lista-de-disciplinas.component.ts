import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lista-de-disciplinas',
  templateUrl: './lista-de-disciplinas.component.html',
  styleUrls: ['./lista-de-disciplinas.component.css']
})
export class ListaDeDisciplinasComponent implements OnInit {

  @Input() disciplinas: any;

  @Input() editando: any;

  @Output() onEditar = new EventEmitter<any>();

  @Output() onExcluir = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  excluir(disciplina: any) {
    this.onExcluir.emit(disciplina);
  } 

  editar(disciplina: any) {
    this.onEditar.emit(disciplina);
  }

}
