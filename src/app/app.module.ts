import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './shared/component/page-not-found/page-not-found.component';
import { NewsModule } from './news/news.module';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { AppRounting } from './app-routing.routing';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NewsModule,
    MaterialModule,
    AppRounting,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
