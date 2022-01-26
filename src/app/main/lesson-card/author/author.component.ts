import { Component, Input } from "@angular/core";

@Component({
	selector: 'app-author',
	templateUrl: './author.component.html',
	styleUrls: ['./author.component.scss']
})
export class AuthorComponent {
	@Input()
	author!: AuthorViewModel;
	
	@Input()
	publishedAt: Date | undefined;

	formatToAmPmTime(date: Date | undefined) {
		// хак с датой, чтобы был нормальный объект
		return date
			? new Date(date).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
			: undefined;	
		}
}

export class AuthorViewModel {
	constructor(public firstName: string, public lastName: string,
		public picUrl: string, ) { }
}