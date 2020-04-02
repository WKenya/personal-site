import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit
{
    @Input() public label: string;
    @Input() public href: string;
    @Input() public iconName: string;

    constructor() { }

    ngOnInit()
    {
    }

}
