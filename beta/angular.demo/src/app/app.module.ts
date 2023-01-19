import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OrigamiFormsModule } from '@codebakery/origami/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import '@ui5/webcomponents/dist/Button.js';
import '@ui5/webcomponents/dist/Input.js';
import '@ui5/webcomponents-fiori/dist/ShellBar';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageAComponent } from './pages/page-a/page-a.component';
import { PageBComponent } from './pages/page-b/page-b.component';
import { NavComponent } from './pages/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, PageAComponent, PageBComponent, NavComponent],
  imports: [
    BrowserModule,
    OrigamiFormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
