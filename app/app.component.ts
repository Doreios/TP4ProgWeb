import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Router, ActivatedRoute } from '@angular/router';
import { AddArticle} from './actions/addArticle-action';
import { DelArticle} from './actions/delArticle-action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tp-angular';

  
  constructor(
    private store : Store,
    private route: ActivatedRoute,
    private router: Router
  ) {}  
  
      onClick () {
        this.addArticle (name);
      }
  
      onDelClick () {
        this.delArticle ();
      }
  
      onLienClick () {
        this.router.navigate(['/lien']);
      }
  
      addArticle(name) { this.store.dispatch(new AddArticle({name})); 
                         }
  
      delArticle() { this.store.dispatch(new DelArticle()); }
  }