import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,  // Classe responsable de la construction du formulaire
  FormGroup,    // Conteneur de champs de formulaire (permet de lire les états des champs)
  FormControl,  // Champs de formulaire avec le suivis des états et quelques fonctions
  Validators,   // La classe responsable des validations de champs
} from '@angular/forms';
import { UserService } from '../shared/services/user.service';
import { User } from '../shared/models/user';

@Component({
  selector: 'app-form-connect',
  templateUrl: './form-connect.component.html',
  styleUrls: ['./form-connect.component.css'],
})
export class FormConnectComponent implements OnInit {
  // attribut du composant pour garder en mémoire le formulaire et son état
  formulaire: FormGroup;

  // injection du constructeur de formulaire
  constructor(fb: FormBuilder,private userService:UserService) {
    // initialisation du formulaire
    this.formulaire = new FormGroup({
      // Champ de formulaire avec 1 validateur
      login: new FormControl('', Validators.required),
      mdp: new FormControl('', Validators.required),
      // Champ avec plusieurs validateurs
      /*age: new FormControl('', [Validators.min(0), Validators.max(120)]),
      email: new FormControl('', [Validators.email, Validators.required]),*/
    });
  }

  ngOnInit(): void {}

  connection!:boolean;
  erreur:boolean=false;

  envoyerFormulaire(): void {
    // affichage en console du FormGroup qui contient les controls
    console.log(this.formulaire);
    let user:User= {login:this.formulaire.get("login")?.value,mdp:this.formulaire.get("mdp")?.value};
    this.connection = this.userService.testConnexion(user);
    this.erreur = !this.connection;
  }
}
