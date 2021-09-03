import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { HighlightCardComponent } from './highlight-card/highlight-card.component';
import { ResourcesComponent } from './resources/resources.component';
import { NextStepsComponent } from './next-steps/next-steps.component';
import { LinksComponent } from './links/links.component';
import { FormConnectComponent } from './form-connect/form-connect.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormInscriptionComponent } from './form-inscription/form-inscription.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    HighlightCardComponent,
    ResourcesComponent,
    NextStepsComponent,
    LinksComponent,
    FormConnectComponent,
    FormInscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
