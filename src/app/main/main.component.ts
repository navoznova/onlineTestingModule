import { Component } from "@angular/core";

@Component({
	selector: 'main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss']
})

export class MainComponent {
	label: string = "RandomButtonLabel"

	constructor() { }

	functioncall(event: any) {
		console.log('functioncall', event);
	}
}
