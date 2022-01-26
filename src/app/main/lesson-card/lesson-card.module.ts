import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AuthorComponent } from './author/author.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { CommentsComponent } from './comments/comments.component';
import { StatisticsModule } from './statistics/statistics.module';

@NgModule({
  declarations: [
    AuthorComponent,
    StatisticsComponent,
    CommentsComponent,
  ],
  exports: [
    AuthorComponent,
    StatisticsComponent,
    CommentsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StatisticsModule,
  ],
  providers: [],
})
export class LessonCardModule { }
