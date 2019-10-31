import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Article } from '../models/article';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {

  nbArticles : number;



constructor(private store: Store) {
    this.store.select(state => state.panier.panier).subscribe (u => this.nbArticles = u.length);
   }



  ngOnInit() {
  }

}