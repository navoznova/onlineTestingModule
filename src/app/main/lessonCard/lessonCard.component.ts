import { Component, OnInit, Input, Output } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { AuthorViewModel } from "./author/author.component";

@Component({
    selector: 'app-lesson-card',
    templateUrl: './lessonCard.component.html',
    styleUrls: ['./lessonCard.component.scss']
})

export class LessonCardComponent implements OnInit {
    lessonId: string = '';

    lessonTitle: string = '';
    lessonSubTitle: string = '';

    buttonLabel: string = 'Начать урок';
    author!: AuthorViewModel;

    tabsTitles: string[] = ["Об уроке", "Содержание", "Упражнения",]
    tabsContents: string[] = ["No content", "два2 контент", "Три три контент",]
    currentTabIndex: number = 0;

    comments: number = 1;
    rating: number = 1;
    shares: number = 1;
    likes: number = 1;
    views: number = 1;

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        const getLessonUrl: string = 'https://b.onclass.tech/web/content/slug/Vx2YUK5pg2d0?full=1';
        this.http.get<LessonResponseModel>(getLessonUrl)
            .subscribe(lesson => {
                console.dir(lesson);
                console.log(`title = ${lesson.title}`);
                console.log(`sub_title = ${lesson.sub_title}`);
                console.log(`first_name = ${lesson.author?.first_name}`);
                console.log(`published_at = ${lesson.published_at}`);
                console.log(`published_at = ${lesson.published_at}`);

                this.lessonId = lesson.id || '';
                this.lessonTitle = lesson.title || '';
                this.lessonSubTitle = lesson.sub_title || '';
                this.tabsContents[0] = lesson.description || '';

                this.comments = lesson.stats?.comments_count || 1;
                this.rating = lesson.stats?.rating || 1;
                this.shares = lesson.stats?.shares_count || 1;
                this.likes = lesson.stats?.likes_count || 1;
                this.views = lesson.stats?.views_count || 1;

                const authorFirstName = lesson.author?.first_name || '';
                const authorLastName = lesson.author?.last_name || '';
                const authorUserPicUrl = lesson.author?.userpic?.smX2?.url || '';
                // хак с датой, чтобы был нормальный объект
                const publishedAt = new Date(lesson.published_at || new Date());

                this.author = new AuthorViewModel(authorFirstName, authorLastName, authorUserPicUrl, publishedAt);
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
    stats: Stats | undefined;
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

class Stats {
    comments_count: number | undefined;
    rating: number | undefined;
    shares_count: number | undefined;
    likes_count: number | undefined;
    dislikes_count: number | undefined;
    views_count: number | undefined;

}

