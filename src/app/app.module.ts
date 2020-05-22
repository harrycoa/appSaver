import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './components/default/default.component';
import { OutcomeCreateComponent } from './components/outcome/outcome-create/outcome-create.component';
import { OutcomeUpdateComponent } from './components/outcome/outcome-update/outcome-update.component';


@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    OutcomeCreateComponent,
    OutcomeUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
