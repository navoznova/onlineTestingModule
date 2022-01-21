import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-widget',
	templateUrl: './widget.component.html',
	styleUrls: ['./widget.component.scss']
})
export class WidgetComponent {
	@Input()
	public count: number | undefined;

	@Input()
	public widgetType!: WidgetType;

	getCssClassByWidgetType(type: WidgetType): string {
		if(type == WidgetType.Likes) return "likes-widget";
		if(type == WidgetType.Shares) return "shares-widget";
		if(type == WidgetType.Views) return "views-widget";
		if(type == WidgetType.Comments) return "comments-widget";
		if(type == WidgetType.Rating) return "rating-widget";

		throw new Error("Unknown widget type")
	}	
}

export enum WidgetType {
	Likes = 'Likes',
	Comments = 'Comments',
	Shares = 'Shares',
	Rating = 'Rating',
	Views = 'Views',
}
