import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AccountComponent } from './account/account.component';
import { BooksComponent } from './books/books.component';
import { NovelComponent } from './genre/novel/novel.component';
import { FantasyComponent } from './genre/fantasy/fantasy.component';
import { ProgrammingComponent } from './genre/programming/programming.component';
import { FictionComponent } from './genre/fiction/fiction.component';
import { SingleDataComponent } from './single-data/single-data.component';
import { IssuedBooksComponent } from './issued-books/issued-books.component';


const routes: Routes = [
  {path:'create',component:CreateComponent},
  {path:'create/:id',component:CreateComponent},
  {path:'read',component:ReadComponent},
  {path:'',component:HomeComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'account',component:AccountComponent},
  {path:'books',component:BooksComponent},
  {path:'novel',component:NovelComponent},
  {path:'fantasy',component:FantasyComponent},
  {path:'programming',component:ProgrammingComponent},
  {path: 'fiction', component:FictionComponent},
  {path: 'singleData/:id', component:SingleDataComponent},
  {path: 'issued-books', component:IssuedBooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
