import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-lesson-card',
    templateUrl: './lessonCard.component.html',
    styleUrls: ['./lessonCard.component.scss']
})

export class LessonCardComponent implements OnInit{
    lessonTitle: string = '';
    lessonDescription: string = '';

    constructor(private http: HttpClient) { }
    
    ngOnInit(): void {
        const getLessonUrl: string = 'https://b.onclass.tech/web/content/slug/Vx2YUK5pg2d0?full=1'; 
        this.http.get<LessonResponseModel>(getLessonUrl)
            .subscribe(lesson => {
                console.log(`title = ${lesson.title}`);
                console.log(`first_name = ${lesson.author?.first_name}`);

                this.lessonTitle = lesson.title || '';
                this.lessonDescription = lesson.description || '';
            });
    }
}

class LessonResponseModel {
    title: string | undefined;
    description: string | undefined;
    author: Author | undefined;
}

class Author{
    first_name: string | undefined;
    last_name: string | undefined;    
}
