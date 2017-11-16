export class Collegue {
  private _nom:string
  private _urlImage:string
  private _score:number

  //Getters
  get nom():string{return this._nom}
  get urlImage():string{return this._urlImage}
  get score():number{return this._score}

  //Setters
  set nom(n:string){this._nom=n}
  set urlImage(u:string){this._urlImage=u}
  set score(s:number){this._score=s}
}
