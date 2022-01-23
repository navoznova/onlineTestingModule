import { RightSideBarComponent } from './main/rightSideBar/rightSideBar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LeftSideBarComponent } from './main/leftSideBar/leftSideBar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LessonCardComponent } from './main/lessonCard/lessonCard.component';
import { LessonCardModule } from './main/lessonCard/lessonCard.module';
import { HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from './common/button/button.component';
import { TabsComponent } from './common/tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftSideBarComponent,
    RightSideBarComponent,
    MainComponent,
    LessonCardComponent,
    ButtonComponent,
    TabsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LessonCardModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
