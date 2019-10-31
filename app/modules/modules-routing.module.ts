import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailComponent } from './detail/detail.component';
import { ListeComponent } from './liste/liste.component';
import { FormulaireComponent } from './formulaire/formulaire.component';


const routes: Routes = [
  {
    path: '',
    component: ListeComponent,
    children : [
      {
          path: 'detail',
          component: DetailComponent,
      },
      {
        path: 'liste', 
        component: ListeComponent
      },
      { path: 'formulaire', 
      component: FormulaireComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]
})
export class ModuleRoutingModule { }