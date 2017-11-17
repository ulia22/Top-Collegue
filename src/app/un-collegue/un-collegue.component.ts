import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../shared/domain/collegue'
import { CollegueService } from '../shared/service/collegue.service'

@Component({
  selector: 'app-un-collegue',
  templateUrl: './un-collegue.component.html',
  styleUrls: ['./un-collegue.component.css']
})
export class UnCollegueComponent implements OnInit {
  // paramètre d'entrée "collegue"
  @Input() collegue:Collegue;

  private collegueService:CollegueService

  constructor(private _collegueService:CollegueService ) { }

  jaime() {
    // événement clic sur le bouton "J'aime"
    // => le score du collègue est augmenté de 10
    this._collegueService.aimerUnCollegue(this.collegue)
    .then((collegue)=>{this.collegue = collegue; return false}, ((err)=>{console.log("Erreur aimer un collegue"); return false}))
  }
  jedeteste() {
    // événement clic sur le bouton "Je déteste"
    // => le score du collègue est diminué de 5
    this._collegueService.detesterUnCollegue(this.collegue)
    .then((collegue)=>{this.collegue = collegue; return false}, ((err)=>{console.log("Erreur detester un collegue"); return false}))
  }

  ngOnInit() {
  }

}
