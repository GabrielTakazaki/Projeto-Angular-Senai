import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inserts-resumo',
  templateUrl: './inserts-resumo.component.html',
  styleUrls: ['./inserts-resumo.component.css']
})
export class InsertsResumoComponent implements OnInit {
  resumo = {
    consultas: {
      anteriores: {
        total: 20,
        detalhes: [
          {
            especialidade: "Cardiologista",
            quantidade: 20
          },
          {
            especialidade: "Clinica Geral",
            quantidade: 30
          },
        ]
      },
      marcadas: {
        total: 99,
        detalhes: [
          {
            especialidade: "Cardiologista",
            quantidade: 66
          },
          {
            especialidade: "Clinica Geral",
            quantidade: 33
          },
        ]
      }
    },
    faturamento: {
      anterior: {
        valor: 1000,
        comparativo: 10
      },
      precisao: {
        valor: 900,
        comparativo: -10
      }
    }
  };
  constructor() { }

  ngOnInit() {
  }

}
