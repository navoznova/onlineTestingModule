import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AuthorComponent } from './author/author.component';
import { DescriptionComponent } from './description/description.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { CommentsComponent } from './comments/comments.component';

@NgModule({
  declarations: [
    AuthorComponent,
    DescriptionComponent,
    StatisticsComponent,
    CommentsComponent
  ],
  exports: [
    AuthorComponent,
    DescriptionComponent,
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
