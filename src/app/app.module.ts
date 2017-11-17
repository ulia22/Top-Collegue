import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CollegueService} from './shared/service/collegue.service'
import { HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { UnCollegueComponent } from './un-collegue/un-collegue.component';


@NgModule({
  declarations: [
    AppComponent,
    UnCollegueComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [CollegueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
