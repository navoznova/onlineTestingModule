import { Component, OnInit, Input, Output } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { AuthorViewModel } from "./author/author.component";

@Component({
    selector: 'app-lesson-card',
    templateUrl: './lessonCard.component.html',
    styleUrls: ['./lessonCard.component.scss']
})

export class LessonCardComponent implements OnInit {
    // lesson
    lessonId: string = '';
    lessonTitle: string = '';
    lessonSubTitle: string = '';

    // author
    author!: AuthorViewModel;
    publishedAt!:Date;

    // tabs
    tabsTitles: string[] = ["Об уроке", "Содержание", "Упражнения",]
    tabsContents: string[] = ["No content", "lorem ipsum", "lorem ipsum",]
    currentTabIndex: number = 0;

    // statistics
    comments!: number;
    rating!: number;
    shares!: number;
    likes!: number;
    views!: number;

    constructor(private http: HttpClient) { }

    ngOnInit() : void {
        const getLessonUrl: string = 'https://b.onclass.tech/web/content/slug/Vx2YUK5pg2d0?full=1';
        this.http.get<LessonResponseModel>(getLessonUrl)
            .subscribe(lesson => {
                console.dir(lesson);
                console.log(`title = ${lesson.title}`);
                console.log(`sub_title = ${lesson.sub_title}`);
                console.log(`first_name = ${lesson.author?.first_name}`);
                console.log(`published_at = ${lesson.published_at}`);

                this.lessonId = lesson.id || '';
                this.lessonTitle = lesson.title || '';
                this.lessonSubTitle = lesson.sub_title || '';
                this.tabsContents[0] = lesson.description || '';

                this.comments = lesson.stats?.comments_count || 0;
                this.rating = lesson.stats?.rating || 0;
                this.shares = lesson.stats?.shares_count || 0;
                this.likes = lesson.stats?.likes_count || 0;
                this.views = lesson.stats?.views_count || 0;

                // хак с датой, чтобы был нормальный объект
                this.publishedAt = new Date(lesson.published_at || new Date());
          
                const authorFirstName = lesson.author?.first_name || '';
                const authorLastName = lesson.author?.last_name || '';
                const authorUserPicUrl = lesson.author?.userpic?.smX2?.url || '';
                this.author = new AuthorViewModel(authorFirstName, authorLastName, authorUserPicUrl);
            });
    }

    setActiveTab(index: number) {
        this.currentTabIndex = index;
    }
}

class LessonResponseModel {
    id: string | undefined;
    title: string | undefined;
    sub_title: string | undefined;
    description: string | undefined;
    author: AuthorResponseModel | undefined;
    published_at: Date | undefined;
    stats: StatisticsResponseModel | undefined;
}

class AuthorResponseModel {
    first_name: string | undefined;
    last_name: string | undefined;
    userpic: UserpicResponseModel | undefined;
}

class UserpicResponseModel {
    smX2: SmResponseModel | undefined;
}

class SmResponseModel {
    url: string | undefined;
}

class StatisticsResponseModel {
    comments_count: number | undefined;
    rating: number | undefined;
    shares_count: number | undefined;
    likes_count: number | undefined;
    dislikes_count: number | undefined;
    views_count: number | undefined;
}
