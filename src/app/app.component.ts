import { Input, Component } from '@angular/core';
import { Collegue } from './shared/domain/collegue.js'
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public cols:Collegue[] = []
  public displayAlert:boolean = true

  ngOnInit() {
    this.displayAlert = true

    let col:Collegue
    col = new Collegue()
    col.nom = "Pauline"
    col.score = 100
    col.urlImage = "https://i.ytimg.com/vi/oHg5SJYRHA0/hqdefault.jpg"
    this.cols.push(col)

    col = new Collegue()
    col.nom = "Kevin"
    col.score = 101
    col.urlImage = "https://upload.wikimedia.org/wikipedia/en/e/ed/Gaston_smirking.jpg"
    this.cols.push(col)

    col = new Collegue()
    col.nom = "Floren"
    col.score = 102
    col.urlImage = "https://i.pinimg.com/736x/f8/04/94/f80494e6897d7b0fc9529517585f8ca3--lord-of-the-rings-the-lord.jpg"
    this.cols.push(col)

    col = new Collegue()
    col.nom = "Olivier"
    col.score = 103
    col.urlImage = "https://img.buzzfeed.com/buzzfeed-static/static/2015-04/5/8/enhanced/webdr01/original-20741-1428235933-4.png?crop=380:575;187,0&downsize=715"
    this.cols.push(col)

    col = new Collegue()
    col.nom = "Nicolas"
    col.score = 104
    col.urlImage = "http://masquieres.a.m.f.unblog.fr/files/2015/12/pere-noel.jpg"
    this.cols.push(col)
  }

  add(pseudo:HTMLInputElement, imageUrl: HTMLInputElement) {
    // pour récupérer la valeur saisie, utiliser la propriété value
    // exemple => pseudo.value
    // TODO ajouter au tableau un nouveau collègue
    let col = new Collegue()
    col.nom = pseudo.value
    col.urlImage = imageUrl.value
    this.cols.push(col)
    // TODO vider les champs de saisie
    this.displayAlert = false
    pseudo.value=""
    imageUrl.value=""

    return false; // pour éviter le rechargement de la page
  }
}
