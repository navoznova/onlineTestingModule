import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-description',
    templateUrl: './description.component.html',
    styleUrls: ['./description.component.scss']
})

export class DescriptionComponent {
    @Input() title: string = '';
    @Input() description: string = '';

    constructor() { }

    functioncall(event: any) {
        console.log('functioncall', event);
    }
}