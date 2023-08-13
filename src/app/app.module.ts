import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import {HttpClientModule} from '@angular/common/http'
import { ApiserviceService } from './apiservice.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AccountComponent } from './account/account.component';
import { BooksComponent } from './books/books.component';
import { NovelComponent } from './genre/novel/novel.component';
import { ProgrammingComponent } from './genre/programming/programming.component';
import { FictionComponent } from './genre/fiction/fiction.component';
import { FantasyComponent } from './genre/fantasy/fantasy.component';
import { RouterModule, Routes } from '@angular/router';
import { SingleDataComponent } from './single-data/single-data.component';
import { IssuedBooksComponent } from './issued-books/issued-books.component';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ReadComponent,
    HomeComponent,
    NavbarComponent,
    AccountComponent,
    BooksComponent,
    NovelComponent,
    ProgrammingComponent,
    FictionComponent,
    FantasyComponent,
    SingleDataComponent,
    IssuedBooksComponent,
    UpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
