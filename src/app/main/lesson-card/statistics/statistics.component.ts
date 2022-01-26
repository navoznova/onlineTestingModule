import { Component, Input } from "@angular/core";
import { WidgetType } from "src/app/common/widget/widget.component";

@Component({
	selector: 'app-statistics',
	templateUrl: './statistics.component.html',
	styleUrls: ['./statistics.component.scss']
})

export class StatisticsComponent {
	// для того чтобы в html передать значение WidgetType в WidgetComponent
	public WidgetTypeEnum = WidgetType;

	@Input()
	comments: number | undefined;
	@Input()
	rating: number | undefined;
	@Input()
	shares: number | undefined;
	@Input()
	likes: number | undefined;
	@Input()
	views: number | undefined;
}