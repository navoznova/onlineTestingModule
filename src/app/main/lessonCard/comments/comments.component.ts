import { Component, Input, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { AuthorViewModel } from "../author/author.component";

@Component({
	selector: 'app-comments',
	templateUrl: './comments.component.html',
	styleUrls: ['./comments.component.scss']
})

export class CommentsComponent implements OnInit {
	@Input()
	lessonId: string = '';

	comments: CommentViewModel[] = [];
	newComment: string = '';

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

			this.comments = response.first?.map(comment => this.mapComment(comment)) || [];
		});
	}

	mapComment(comment: CommentResponseModel) : CommentViewModel{
		return new CommentViewModel(comment.id, comment.text, 
			this.mapAuthor(comment.author), comment.published_at)
	}
	private mapAuthor(author: AuthorResponseModel): AuthorViewModel {
		const firstName = author.first_name || '';
		const lastName = author.last_name || '';
		const picUrl = author.userpic?.smX2?.url || '';
		return new AuthorViewModel(firstName, lastName, picUrl);
	}

	public addComment() {
		// хардкод. тут надо отправлять запрос на сервер для сохранения нового комментария. а в ответ получать идентификатор этого комментаря.
		// const commentId = "";

		// let comment = new CommentViewModel(commentId, this.newComment, new AuthorViewModel("", "", '', new Date()));
		// this.comments.push(comment);
		// this.newComment = '';
	}
}

class CommentsResponseModel {
	first: CommentResponseModel[] = [];
}

class CommentResponseModel {
	id: string = '';
	text: string = '';
	author_id: string = '';
	author!: AuthorResponseModel;
	published_at!: Date;
}

class CommentViewModel {
	constructor(public id: string, public content: string,
		public author: AuthorViewModel, public publishedAt: Date) { }
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