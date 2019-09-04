import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavegacaoComponent } from './barra-navegacao/barra-navegacao.component';
import { ListaTodoComponent } from './lista-todo/lista-todo.component';
import { PainelSimplesComponent } from './painel-simples/painel-simples.component';
import { RouterModule, Routes} from '@angular/router';
import { InsertsResumoComponent } from './inserts-resumo/inserts-resumo.component';

const appRoutes: Routes = [
  {path: 'painel', component:InsertsResumoComponent},
  {path: 'lista', component:ListaTodoComponent},
  {path: '',   redirectTo: '/lista', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacaoComponent,
    ListaTodoComponent,
    PainelSimplesComponent,
    InsertsResumoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot (
      appRoutes, {enableTracing:true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
