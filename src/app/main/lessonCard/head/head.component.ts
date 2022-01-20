import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-head',
    templateUrl: './head.component.html',
    styleUrls: ['./head.component.scss']
})

export class HeadComponent implements OnInit{
    @Input() title: string = '';
    @Input() subTitle: string = 'test';

    constructor() { }

    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

    /*functioncall(event: any) {
        console.log('functioncall', event);
    }*/
}