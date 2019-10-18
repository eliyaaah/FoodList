import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    @Output() selection = new EventEmitter<number>();
    collapsed=true;

    selectOption(n: number) {
        this.selection.emit(n);
    }
}