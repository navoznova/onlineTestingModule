import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AuthorComponent } from './author/author.component';
import { HeadComponent } from './head/head.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { CommentsComponent } from './comments/comments.component';

@NgModule({
  declarations: [
    AuthorComponent,
    HeadComponent,
    StatisticsComponent,
    CommentsComponent
  ],
  exports: [
    AuthorComponent,
    HeadComponent,
    StatisticsComponent,
    CommentsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
})
export class LessonCardModule { }
