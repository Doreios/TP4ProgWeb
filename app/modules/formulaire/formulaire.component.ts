import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
  
export class FormulaireComponent implements OnInit {
  reactiveForm = new FormControl(''); 
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  constructor() { }
  profilForm = new FormGroup({
    
    nom : new FormControl(''),
    prenom : new FormControl(''),
    adresse : new FormControl(''),
    cp : new FormControl(''),
    ville : new FormControl(''),
    tel : new FormControl(''),
    email : new FormControl(''),
    civilite : new FormControl(''),
    password : new FormControl(''),
    login : new FormControl(''),
    pays : new FormControl(''),
  });

  validationNom () : boolean {
    return(/[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ._\s-]{1,}/.test(this.profilForm.value.nom));
  }

  validationPrenom () : boolean {
    return(/[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ._\s-]{1,}/.test(this.profilForm.value.prenom));
  }

  validationAdresse () : boolean {
    return(/[a-zA-Z0-9áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ,._\s-]{1,}/.test(this.profilForm.value.adresse));
  }

  validationVille () : boolean {
    return(/[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ._\s-]{1,}/.test(this.profilForm.value.ville));
  }

  validationCP () : boolean {
    return(/^(([0-8][0-9])|(9[0-5])|(2[ab]))[0-9]{3}$/.test(this.profilForm.value.cp));
  }

  validationTel () : boolean {
    return(/((?:\+|00)[17](?: |\-)?|(?:\+|00)[1-9]\d{0,2}(?: |\-)?|(?:\+|00)1\-\d{3}(?: |\-)?)?(0\d|\([0-9]{3}\)|[1-9]{0,3})(?:((?: |\-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |\-)[0-9]{3}(?: |\-)[0-9]{4})|([0-9]{7}))/.test(this.profilForm.value.tel));
  }

  validationEmail () : boolean {
    return(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(this.profilForm.value.email));
  }

}
