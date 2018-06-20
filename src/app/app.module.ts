import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {HomePageComponent} from './home-page/home-page.component';
import { ModalTermsAndConditionsComponent} from './modals/modal-terms-and-conditions/modal-terms-and-conditions.component.';
import { ModalLoginComponent } from './modals/modal-login/modal-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    ModalTermsAndConditionsComponent,
    ModalLoginComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
