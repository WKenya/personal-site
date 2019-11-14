import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
{
    title = 'Wesley Kenyon';

    constructor() { }

    ngOnInit()
    {
    }

    onThemeChanged($event: MatSlideToggleChange): void {
        if ($event.checked)
        {
            // document.getElementById('themeAsset').href = `/path/to/my/${themeName}.css`;
        }
        else
        {
            // document.getElementById('themeAsset').href = `/path/to/my/${themeName}.css`;
        }
    }
}
