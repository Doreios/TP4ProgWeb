import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleRoutingModule } from './modules-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './detail/detail.component';


import { FormsModule } from '@angular/forms';
import { ListeComponent } from './liste/liste.component';
import { FormulaireComponent } from './formulaire/formulaire.component';


@NgModule({
  declarations: [
    ListeComponent, 
    DetailComponent, 
    FormulaireComponent
  ],
  imports: [
    CommonModule,
    ModuleRoutingModule,
    HttpClientModule,
    FormsModule
  ]  
})
export class ModuleModule { 

 
};




