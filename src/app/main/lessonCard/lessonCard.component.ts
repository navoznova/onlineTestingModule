import { Component, OnInit, Input, Output } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-lesson-card',
    templateUrl: './lessonCard.component.html',
    styleUrls: ['./lessonCard.component.scss']
})

export class LessonCardComponent implements OnInit {
    lessonId: string = '';

    lessonTitle: string = '';
    buttonLabel: string = 'Начать урок';

    tabsTitles: string[] = ["Один", "два2", "Три три",]
    tabsContents: string[] = ["No content", "два2 контент", "Три три контент",]

    constructor(private http: HttpClient) { }

    doSomething() {
        console.log("click");
    }

    ngOnInit(): void {
        const getLessonUrl: string = 'https://b.onclass.tech/web/content/slug/Vx2YUK5pg2d0?full=1';
        this.http.get<LessonResponseModel>(getLessonUrl)
            .subscribe(lesson => {
                console.log(`title = ${lesson.title}`);
                console.log(`first_name = ${lesson.author?.first_name}`);
                
                this.lessonId = lesson.id || '';
                this.lessonTitle = lesson.title || '';
                this.tabsContents[0] = lesson.description || '';
            });
    }
}

class LessonResponseModel {
    id: string | undefined;
    title: string | undefined;
    description: string | undefined;
    author: Author | undefined;
}

class Author {
    first_name: string | undefined;
    last_name: string | undefined;
}
