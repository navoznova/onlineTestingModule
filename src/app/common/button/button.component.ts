import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
	@Input()
	public label: string = '';

	@Output()
	public onClick = new EventEmitter<any>();

	constructor() { }

	onClickButton(event: any) {
		this.onClick.emit(event);
	}
}

