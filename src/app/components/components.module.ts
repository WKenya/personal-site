import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [
        CardComponent
    ],
    imports: [
        CommonModule,
        MatIconModule
    ],
    exports: [
        CardComponent,
        MatIconModule
    ]
})
export class ComponentsModule { }
