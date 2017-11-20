import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CollegueService} from './shared/service/collegue.service'
import { HttpClientModule} from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UnCollegueComponent } from './un-collegue/un-collegue.component';
import { ClassiqueComponent } from './classique/classique.component';
import { TableauComponent } from './tableau/tableau.component';
import { CarrousselComponent } from './carroussel/carroussel.component';
import { RowUnCollegueComponent } from './row-un-collegue/row-un-collegue.component';
import { CarrousselItemCollegueComponent } from './carroussel-item-collegue/carroussel-item-collegue.component';
import { ScorePipe } from './shared/pipe/score.pipe';
import { FilterPipe } from './shared/pipe/filter.pipe';

const appRoutes: Routes = [
{ path: 'classique', component: ClassiqueComponent }, // /page1 affiche le composant A
{ path: 'tableau', component: TableauComponent },
{ path: 'carroussel', component: CarrousselComponent },
{ path: '**', redirectTo: 'classique'} // redirige vers la route page1 par défaut
];


@NgModule({
  declarations: [
    AppComponent,
    UnCollegueComponent,
    ClassiqueComponent,
    TableauComponent,
    CarrousselComponent,
    RowUnCollegueComponent,
    CarrousselItemCollegueComponent,
    ScorePipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CollegueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
