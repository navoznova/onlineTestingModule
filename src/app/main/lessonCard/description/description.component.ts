import { Component, Input } from '@angular/core';
import { LessonCardComponent } from "../lessonCard.component";

@Component({
    selector: 'app-description',
    templateUrl: './description.component.html',
    styleUrls: ['./description.component.scss']
})

export class DescriptionComponent {
    @Input() title = '';
}
