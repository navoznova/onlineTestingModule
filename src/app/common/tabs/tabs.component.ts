import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-tabs',
	templateUrl: './tabs.component.html',
	styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
	@Input()
	public titles: string[] = [];

	@Input()
	public contents: string[] = [];

	currentTabIndex: number = 0;

	constructor() { }

	setActiveTab(index: number){
		this.currentTabIndex = index;
	}
}

class TabModel {
	title: string = '';
	content: string = '';
}
