import { Input, Component, Inject } from '@angular/core';
import { Collegue } from './shared/domain/collegue.js'
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { CollegueService } from './shared/service/collegue.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  public displayAlert:boolean = true

  constructor(private _collegueService:CollegueService){}

  ngOnInit() {}

  add(pseudo:HTMLInputElement, imageUrl: HTMLInputElement) {
    // Ajouter au tableau un nouveau collègue
    let col = new Collegue(pseudo.value, imageUrl.value, 0)

    this._collegueService.sauvegarder(col)
    .then(col=>
      this._collegueService.listerCollegues()
      .then(collegues=>{}, (err)=>{console.log(err)})
    )

    this.displayAlert = false
    pseudo.value=""
    imageUrl.value=""

    return false;
  }
}
