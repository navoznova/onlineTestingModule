import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AuthorComponent } from './author/author.component';


@NgModule({
  declarations: [
    AuthorComponent,
  ],
  exports: [
    AuthorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
})
export class LessonCardModule { }
