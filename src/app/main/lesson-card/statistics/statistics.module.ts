import { NgModule } from '@angular/core';
import { WidgetComponent} from 'src/app/common/widget/widget.component';

@NgModule({
  declarations: [
    WidgetComponent
  ],
  exports: [
    WidgetComponent,
  ],
  providers: [],
})
export class StatisticsModule { }