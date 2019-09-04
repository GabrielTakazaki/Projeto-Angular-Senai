import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-todo',
  templateUrl: './lista-todo.component.html',
  styleUrls: ['./lista-todo.component.css']
})
export class ListaTodoComponent implements OnInit {
  listaArray = [];
  addValor(value) {
    this.listaArray.push(value);
    console.log(value);
  }
  delValor(value) {
    this.listaArray.splice(value, 1);
    console.log(value);
  }
  constructor() { }
  ngOnInit() {
  }

}
