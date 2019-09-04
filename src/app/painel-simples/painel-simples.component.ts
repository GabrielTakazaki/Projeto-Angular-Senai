import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-painel-simples',
  templateUrl: './painel-simples.component.html',
  styleUrls: ['./painel-simples.component.css']
})
export class PainelSimplesComponent implements OnInit {
  @Input()titulo1;
  @Input()titulo2;
  @Input()titulo3;
  @Input()titulo4;
  @Input()tipo;
  @Input()col;
  constructor() { }

  ngOnInit() {
  }

}
