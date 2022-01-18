import { Component, Input, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-comments',
	templateUrl: './comments.component.html',
	styleUrls: ['./comments.component.scss']
})

export class CommentsComponent implements OnInit {
	@Input()
	lessonId: string = '';

	comments: CommentViewModel[] = [];

	constructor(private http: HttpClient) { }

	ngOnInit(): void {
		// надо бы делать так:
		// const threadId = getThreadIdByLessonId(lessonId);
		// но не понятно как связаны урок и тред, поэтому захардкодила айди треда:
		let threadId = '79469d64-876e-4eb8-a436-c70948f1ce35';

		let getcommentsUrl: string = `https://b.onclass.tech/web/comments/thread/${threadId}/digest`;
		this.http.get<CommentsResponseModel>(getcommentsUrl).subscribe(response => {
			console.log(response);
			console.log(`text = ${response.first?.[0]?.text}`);
			
			this.comments = response.first?.map(comment => new CommentViewModel(comment.id, comment.text)) || [];
		});
	}
}

class CommentsResponseModel {
	first: CommentResponseModel[] = [];
}

class CommentResponseModel {
	id: string = '';
	text: string = '';
	author_id: string = '';
}

class CommentViewModel {
	constructor(public id: string, public content: string) { }
}