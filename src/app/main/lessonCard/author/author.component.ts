import { Component, Input } from "@angular/core";

@Component({
	selector: 'app-author',
	templateUrl: './author.component.html',
	styleUrls: ['./author.component.scss']
})
export class AuthorComponent {
	@Input()
	model!: AuthorViewModel;

	formatToAmPmTime(date: Date | undefined) {
		return date?.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
	}
}

export class AuthorViewModel {
	constructor(public firstName: string, public lastName: string,
		public picUrl: string, public publishedAt: Date) { }
}