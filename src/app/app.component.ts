import { Input, Component, Inject } from '@angular/core';
import { Collegue } from './shared/domain/collegue.js'
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import {CollegueService} from './shared/service/collegue.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  public displayAlert:boolean = true
  public collegues:Collegue[]=[]

constructor(private _collegueService:CollegueService){}

  ngOnInit() {
    this.displayAlert = true
    this._collegueService.listerCollegues()
    .then((collegues)=>{
      this.collegues = collegues
    }, (err)=>{console.log(err)})
  }

  add(pseudo:HTMLInputElement, imageUrl: HTMLInputElement) {
    // Ajouter au tableau un nouveau collègue
    let col = new Collegue()
    col.nom = pseudo.value
    col.urlImage = imageUrl.value
    col.score = 0

    this.displayAlert = false
    pseudo.value=""
    imageUrl.value=""

    this._collegueService.sauvegarder(col)
    .then(col=>
      this._collegueService.listerCollegues()
      .then((collegues)=>
      {this.collegues = collegues}, (err)=>{console.log(err)})
    )

    return false;
  }
}
