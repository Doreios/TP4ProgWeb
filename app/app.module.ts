import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TetiereComponent } from './tetiere/tetiere.component';
import { FooterComponent } from './footer/footer.component';
import { PhoneNumberPipe } from './phone-number.pipe';
import { ErrorDirective } from './error.directive';
import { ApiService } from 'src/api.service';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { PanierComponent } from './panier/panier.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component : PanierComponent},
  {path: 'module', 
  loadChildren: () => import('./modules/modules.module').then(m => m.ModuleModule)},
]



@NgModule({
  declarations: [
    AppComponent,
    TetiereComponent,
    FooterComponent,
    PhoneNumberPipe, 
    ErrorDirective, PanierComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgxsModule.forRoot (),
    BrowserModule,
    AppRoutingModule
  ],
  exports: [RouterModule],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export interface Article {

  nom : string;
  description : string;
  prix: number;
  
}
  
export class Store {
  
  articles: Article[];
  
}